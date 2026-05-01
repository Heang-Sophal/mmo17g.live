<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\DeliveryAlert;
use App\Models\Sale;
use App\Services\DeliveryAlertService;
use App\Services\TelegramService;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;

class DeliveryApiController extends Controller
{
    public function dashboard(Request $request): JsonResponse
    {
        $user = $request->user('api');
        if (! $user) {
            return response()->json([
                'success' => false,
                'message' => 'Unauthenticated.',
            ], 401);
        }

        $user->loadMissing('roles');
        if (! $this->canAccessDeliveryApp($user)) {
            return response()->json([
                'success' => false,
                'message' => 'Only Delivery, Recorder, Admin, or Owner users can access this resource.',
            ], 403);
        }

        $hasAllWarehouses = $this->userHasAllWarehouses($user);
        $warehouse = $user->primaryAssignedWarehouse();
        if (! $hasAllWarehouses && ! $warehouse) {
            return response()->json([
                'success' => false,
                'message' => 'This user has no assigned warehouse.',
            ], 422);
        }

        $salesQuery = Sale::query()
            ->whereNull('deleted_at');
        $this->applyWarehouseScope($salesQuery, $warehouse, $hasAllWarehouses);

        $ordersQuery = Sale::query()
            ->whereNull('deleted_at');
        $this->applyWarehouseScope($ordersQuery, $warehouse, $hasAllWarehouses);

        $recentOrdersQuery = Sale::with(['client', 'warehouse', 'user', 'details.product'])
            ->whereNull('deleted_at')
            ->orderBy('created_at', 'desc')
            ->limit(10);
        $this->applyWarehouseScope($recentOrdersQuery, $warehouse, $hasAllWarehouses);

        $recentOrders = $recentOrdersQuery->get()
            ->map(function ($sale) {
                return $this->transformSale($sale);
            })
            ->values();

        return response()->json([
            'success' => true,
            'data' => [
                'mode' => 'delivery',
                'warehouse' => $this->buildWarehousePayload($warehouse, $hasAllWarehouses),
                'sales' => [
                    'total' => (float) (clone $salesQuery)->sum('GrandTotal'),
                    'today' => (float) (clone $salesQuery)->whereDate('created_at', today())->sum('GrandTotal'),
                ],
                'orders' => [
                    'total' => (clone $ordersQuery)->count(),
                    'today' => (clone $ordersQuery)->whereDate('created_at', today())->count(),
                    'pending' => $this->applyShippingStatusFilter(clone $ordersQuery, 'pending')->count(),
                    'processing' => $this->applyShippingStatusFilter(clone $ordersQuery, 'shipped')->count(),
                    'shipped' => $this->applyShippingStatusFilter(clone $ordersQuery, 'shipped')->count(),
                    'delivered' => $this->applyShippingStatusFilter(clone $ordersQuery, 'delivered')->count(),
                ],
                'alerts' => [
                    'unread' => DeliveryAlert::query()
                        ->where('user_id', $user->id)
                        ->whereNull('read_at')
                        ->count(),
                ],
                'recent_orders' => $recentOrders,
            ],
        ]);
    }

    public function orders(Request $request): JsonResponse
    {
        $user = $request->user('api');
        if (! $user) {
            return response()->json([
                'success' => false,
                'message' => 'Unauthenticated.',
            ], 401);
        }

        $user->loadMissing('roles');
        if (! $this->canAccessDeliveryApp($user)) {
            return response()->json([
                'success' => false,
                'message' => 'Only Delivery, Recorder, Admin, or Owner users can access this resource.',
            ], 403);
        }
        if (! $this->canUseAnyMobilePermission($user, [
            'mobile_delivery_deliveries',
            'mobile_delivery_record_items',
            'mobile_delivery_record_reports',
            'mobile_delivery_reports',
        ])) {
            return $this->mobilePermissionDenied();
        }

        $hasAllWarehouses = $this->userHasAllWarehouses($user);
        $warehouse = $user->primaryAssignedWarehouse();
        if (! $hasAllWarehouses && ! $warehouse) {
            return response()->json([
                'success' => false,
                'message' => 'This user has no assigned warehouse.',
            ], 422);
        }

        $query = Sale::with(['client', 'warehouse', 'user', 'details.product'])
            ->whereNull('deleted_at')
            ->orderBy('created_at', 'desc')
            ->limit(100);
        $this->applyWarehouseScope($query, $warehouse, $hasAllWarehouses);

        if ($request->filled('status')) {
            $this->applyShippingStatusFilter($query, $request->status);
        }

        if ($request->filled('search')) {
            $search = trim((string) $request->search);
            $query->where(function ($searchQuery) use ($search) {
                $searchQuery->where('Ref', 'like', '%'.$search.'%')
                    ->orWhereHas('client', function ($clientQuery) use ($search) {
                        $clientQuery->where('name', 'like', '%'.$search.'%')
                            ->orWhere('phone', 'like', '%'.$search.'%');
                    });
            });
        }

        $orders = $query->get()->map(function ($sale) {
            return $this->transformSale($sale);
        })->values();

        return response()->json([
            'success' => true,
            'data' => $orders,
        ]);
    }

    public function alerts(Request $request): JsonResponse
    {
        $user = $request->user('api');
        if (! $user) {
            return response()->json([
                'success' => false,
                'message' => 'Unauthenticated.',
            ], 401);
        }

        $alerts = DeliveryAlert::with('sale', 'warehouse')
            ->where('user_id', $user->id)
            ->orderBy('created_at', 'desc')
            ->limit(50)
            ->get()
            ->map(function ($alert) {
                return [
                    'id' => (string) $alert->id,
                    'title' => $alert->title,
                    'message' => $alert->message,
                    'type' => $alert->type,
                    'is_read' => ! is_null($alert->read_at),
                    'read_at' => optional($alert->read_at)->toIso8601String(),
                    'created_at' => optional($alert->created_at)->toIso8601String(),
                    'warehouse_name' => $alert->warehouse?->name ?? data_get($alert->payload, 'warehouse_name'),
                    'sale_ref' => $alert->sale?->Ref ?? data_get($alert->payload, 'sale_ref'),
                    'payload' => $alert->payload ?? [],
                ];
            })
            ->values();

        return response()->json([
            'success' => true,
            'data' => $alerts,
        ]);
    }

    public function acceptOrder(Request $request, $id): JsonResponse
    {
        $user = $request->user('api');
        if (! $user) {
            return response()->json([
                'success' => false,
                'message' => 'Unauthenticated.',
            ], 401);
        }

        $user->loadMissing('roles');
        if (! $this->canAccessDeliveryApp($user)) {
            return response()->json([
                'success' => false,
                'message' => 'Only Delivery, Recorder, Admin, or Owner users can access this resource.',
            ], 403);
        }
        if (! $this->canUseAnyMobilePermission($user, [
            'mobile_delivery_deliveries',
            'mobile_delivery_record_items',
        ])) {
            return $this->mobilePermissionDenied();
        }

        $hasAllWarehouses = $this->userHasAllWarehouses($user);
        $warehouse = $user->primaryAssignedWarehouse();
        if (! $hasAllWarehouses && ! $warehouse) {
            return response()->json([
                'success' => false,
                'message' => 'This user has no assigned warehouse.',
            ], 422);
        }

        $saleQuery = Sale::with(['client', 'warehouse', 'user', 'details.product'])
            ->whereNull('deleted_at');
        $this->applyWarehouseScope($saleQuery, $warehouse, $hasAllWarehouses);

        $sale = $saleQuery->findOrFail($id);

        $currentStatus = $this->normalizeShippingStatus($sale->shipping_status);
        if (in_array($currentStatus, ['shipped', 'delivered'], true)) {
            return response()->json([
                'success' => true,
                'message' => 'Order already accepted.',
                'data' => $this->transformSale($sale),
            ]);
        }

        $sale->shipping_status = 'shipped';
        $sale->save();
        $sale->refresh();
        app(DeliveryAlertService::class)->createSellerAcceptedAlert($sale, $user);

        return response()->json([
            'success' => true,
            'message' => 'Order accepted successfully.',
            'data' => $this->transformSale($sale),
        ]);
    }

    public function completeOrder(Request $request, $id): JsonResponse
    {
        $user = $request->user('api');
        if (! $user) {
            return response()->json([
                'success' => false,
                'message' => 'Unauthenticated.',
            ], 401);
        }

        $user->loadMissing('roles');
        if (! $this->canAccessDeliveryApp($user)) {
            return response()->json([
                'success' => false,
                'message' => 'Only Delivery, Recorder, Admin, or Owner users can access this resource.',
            ], 403);
        }
        if (! $this->canUseAnyMobilePermission($user, [
            'mobile_delivery_deliveries',
            'mobile_delivery_record_items',
        ])) {
            return $this->mobilePermissionDenied();
        }

        $hasAllWarehouses = $this->userHasAllWarehouses($user);
        $warehouse = $user->primaryAssignedWarehouse();
        if (! $hasAllWarehouses && ! $warehouse) {
            return response()->json([
                'success' => false,
                'message' => 'This user has no assigned warehouse.',
            ], 422);
        }

        $saleQuery = Sale::with(['client', 'warehouse', 'user', 'details.product'])
            ->whereNull('deleted_at');
        $this->applyWarehouseScope($saleQuery, $warehouse, $hasAllWarehouses);

        $sale = $saleQuery->findOrFail($id);

        $currentStatus = $this->normalizeShippingStatus($sale->shipping_status);
        if ($currentStatus === 'delivered') {
            return response()->json([
                'success' => true,
                'message' => 'Order already completed.',
                'data' => $this->transformSale($sale),
            ]);
        }

        if ($currentStatus !== 'shipped') {
            return response()->json([
                'success' => false,
                'message' => 'Order must be accepted before completion.',
            ], 422);
        }

        $sale->shipping_status = 'delivered';
        if (strtolower((string) $sale->payment_statut) !== 'paid') {
            $sale->payment_statut = 'paid';
            $sale->paid_amount = (float) $sale->GrandTotal;
        }
        $sale->save();
        $sale->refresh();

        app(DeliveryAlertService::class)->createSellerCompletedAlert($sale, $user);
        $this->sendDeliveryCompletedTelegram($sale, $user);

        return response()->json([
            'success' => true,
            'message' => 'Order completed successfully.',
            'data' => $this->transformSale($sale),
        ]);
    }

    public function updateShipping(Request $request, $id): JsonResponse
    {
        $user = $request->user('api');
        if (! $user) {
            return response()->json([
                'success' => false,
                'message' => 'Unauthenticated.',
            ], 401);
        }

        $user->loadMissing('roles');
        if (! $this->canAccessDeliveryApp($user)) {
            return response()->json([
                'success' => false,
                'message' => 'Only Delivery, Recorder, Admin, or Owner users can access this resource.',
            ], 403);
        }
        if (! $this->canUseAnyMobilePermission($user, [
            'mobile_delivery_deliveries',
            'mobile_delivery_record_items',
        ])) {
            return $this->mobilePermissionDenied();
        }

        $hasAllWarehouses = $this->userHasAllWarehouses($user);
        $warehouse = $user->primaryAssignedWarehouse();
        if (! $hasAllWarehouses && ! $warehouse) {
            return response()->json([
                'success' => false,
                'message' => 'This user has no assigned warehouse.',
            ], 422);
        }

        $validated = $request->validate([
            'shipping' => 'required|numeric|min:0',
        ]);

        $saleQuery = Sale::with(['client', 'warehouse', 'user', 'details.product'])
            ->whereNull('deleted_at');
        $this->applyWarehouseScope($saleQuery, $warehouse, $hasAllWarehouses);

        $sale = $saleQuery->findOrFail($id);

        $currentStatus = $this->normalizeShippingStatus($sale->shipping_status);
        if ($currentStatus === 'delivered') {
            return response()->json([
                'success' => false,
                'message' => 'Delivered orders cannot update shipping.',
            ], 422);
        }

        $oldShipping = round((float) ($sale->shipping ?? 0), 2);
        $newShipping = round((float) $validated['shipping'], 2);
        $baseGrandTotal = round((float) $sale->GrandTotal - $oldShipping, 2);

        $sale->shipping = $newShipping;
        $sale->GrandTotal = max(0, round($baseGrandTotal + $newShipping, 2));

        if (strtolower((string) $sale->payment_statut) === 'paid') {
            $sale->paid_amount = (float) $sale->GrandTotal;
        }

        $sale->save();
        $sale->refresh();

        if ($oldShipping !== $newShipping) {
            app(DeliveryAlertService::class)->createSellerShippingUpdatedAlert(
                $sale,
                $user,
                $oldShipping,
                $newShipping
            );
        }

        return response()->json([
            'success' => true,
            'message' => 'Shipping updated successfully.',
            'data' => $this->transformSale($sale),
        ]);
    }

    public function markAlertAsRead(Request $request, $id): JsonResponse
    {
        $user = $request->user('api');
        if (! $user) {
            return response()->json([
                'success' => false,
                'message' => 'Unauthenticated.',
            ], 401);
        }

        $alert = DeliveryAlert::where('user_id', $user->id)->findOrFail($id);
        if (! $alert->read_at) {
            $alert->read_at = now();
            $alert->save();
        }

        return response()->json([
            'success' => true,
            'message' => 'Alert marked as read.',
        ]);
    }

    public function readAllAlerts(Request $request): JsonResponse
    {
        $user = $request->user('api');
        if (! $user) {
            return response()->json([
                'success' => false,
                'message' => 'Unauthenticated.',
            ], 401);
        }

        DeliveryAlert::where('user_id', $user->id)
            ->whereNull('read_at')
            ->update([
                'read_at' => now(),
                'updated_at' => now(),
            ]);

        return response()->json([
            'success' => true,
            'message' => 'All alerts marked as read.',
        ]);
    }

    protected function applyShippingStatusFilter($query, string $status)
    {
        $normalizedStatus = $this->normalizeShippingStatus($status);

        if ($normalizedStatus === 'pending') {
            return $query->where(function ($pendingQuery) {
                $pendingQuery->whereNull('shipping_status')
                    ->orWhere('shipping_status', '')
                    ->orWhere('shipping_status', 'pending');
            });
        }

        if (in_array($normalizedStatus, ['processing', 'shipped'], true)) {
            return $query->whereIn('shipping_status', ['processing', 'shipped']);
        }

        return $query->where('shipping_status', $normalizedStatus);
    }

    protected function transformSale(Sale $sale): array
    {
        $sale->loadMissing(['client', 'warehouse', 'user', 'details.product']);
        $shippingStatus = $this->normalizeShippingStatus($sale->shipping_status);
        $products = $sale->details->map(function ($detail) {
            return [
                'id' => (string) $detail->id,
                'name' => $detail->product?->name
                    ?? data_get($detail, 'product_name')
                    ?? ('Product #'.$detail->product_id),
                'quantity' => (float) ($detail->quantity ?? 0),
                'price' => (float) ($detail->price ?? 0),
                'total' => (float) ($detail->total ?? 0),
            ];
        })->values();

        return [
            'id' => (string) $sale->id,
            'Ref' => $sale->Ref,
            'date' => $sale->date,
            'datetime' => $sale->created_at?->format('Y-m-d H:i:s'),
            'client_name' => $sale->client?->name ?? 'Walk-in Customer',
            'client_phone' => $sale->client?->phone ?? '',
            'client_address' => $sale->client?->adresse ?? '',
            'warehouse_name' => $sale->warehouse?->name ?? '',
            'user_name' => $sale->user?->name ?? '',
            'seller_name' => $sale->user?->name ?? '',
            'seller_phone' => $sale->user?->phone ?? '',
            'GrandTotal' => (float) $sale->GrandTotal,
            'shipping' => (float) ($sale->shipping ?? 0),
            'paid_amount' => (float) ($sale->paid_amount ?? 0),
            'payment_method' => $sale->payment_method ?? 'cash',
            'payment_status' => $sale->payment_statut ?? 'unpaid',
            'status' => $shippingStatus,
            'order_status' => $sale->statut ?? 'completed',
            'products' => $products,
            'notes' => $sale->notes ?? '',
            'created_at' => $sale->created_at?->toIso8601String(),
            'updated_at' => $sale->updated_at?->toIso8601String(),
        ];
    }

    protected function normalizeShippingStatus(?string $status): string
    {
        $normalizedStatus = strtolower(trim((string) $status));

        if ($normalizedStatus === '' || $normalizedStatus === 'pending') {
            return 'pending';
        }

        if ($normalizedStatus === 'processing') {
            return 'shipped';
        }

        return $normalizedStatus;
    }

    protected function sendDeliveryCompletedTelegram(Sale $sale, $deliveryUser): void
    {
        try {
            $warehouse = $sale->warehouse;
            if (! $warehouse || ! $warehouse->telegram_enabled || ! $warehouse->telegram_chat_id) {
                return;
            }

            $telegramService = app(TelegramService::class);
            $chatId = $sale->telegram_sale_chat_id ?: $warehouse->telegram_chat_id;
            $replyToMessageId = $sale->telegram_sale_message_id
                ? (int) $sale->telegram_sale_message_id
                : null;

            $messageResult = $telegramService->sendDeliveryCompletedNotificationResult(
                [
                    'ref' => $sale->Ref,
                    'customer_name' => $sale->client?->name ?? 'Walk-in Customer',
                    'customer_phone' => $sale->client?->phone ?? '',
                    'customer_address' => $sale->client?->adresse ?? '',
                    'GrandTotal' => (float) $sale->GrandTotal,
                    'payment_status' => $sale->payment_statut ?? 'unpaid',
                    'seller_name' => $sale->user?->name ?? '',
                    'delivery_name' => $deliveryUser?->name ?? 'Delivery User',
                    'delivery_phone' => $deliveryUser?->phone ?? '',
                    'completed_at' => now()->format('Y-m-d H:i:s'),
                ],
                $warehouse->name ?? 'Warehouse',
                $chatId,
                $warehouse->telegram_bot_token,
                $replyToMessageId
            );

            $reactionMessageId = $replyToMessageId ?: (int) ($messageResult['message_id'] ?? 0);
            if ($reactionMessageId > 0) {
                $telegramService->setMessageReaction(
                    $chatId,
                    $reactionMessageId,
                    [[
                        'type' => 'emoji',
                        'emoji' => '❤',
                    ]],
                    $warehouse->telegram_bot_token,
                    true
                );
            }
        } catch (\Throwable $exception) {
            Log::error('Failed to send delivery completion Telegram notification', [
                'sale_id' => $sale->id,
                'error' => $exception->getMessage(),
            ]);
        }
    }

    private function canAccessDeliveryApp($user): bool
    {
        return $user->hasAnyRoleNamed(['Delivery', 'Laivrison', 'Recorder', 'Admin', 'Owner']);
    }

    private function canUseAnyMobilePermission($user, array $permissionNames): bool
    {
        $user->loadMissing('roles.permissions');

        return $user->hasAnyMobilePermission($permissionNames);
    }

    private function mobilePermissionDenied(): JsonResponse
    {
        return response()->json([
            'success' => false,
            'message' => 'You do not have permission to use this mobile feature.',
        ], 403);
    }

    private function userHasAllWarehouses($user): bool
    {
        return (int) ($user->is_all_warehouses ?? 0) === 1;
    }

    private function applyWarehouseScope($query, $warehouse, bool $hasAllWarehouses): void
    {
        if ($hasAllWarehouses || ! $warehouse) {
            return;
        }

        $query->where('warehouse_id', $warehouse->id);
    }

    private function buildWarehousePayload($warehouse, bool $hasAllWarehouses): array
    {
        if ($hasAllWarehouses) {
            return [
                'id' => 'all',
                'name' => 'All Warehouses',
                'city' => '',
            ];
        }

        return [
            'id' => (string) $warehouse->id,
            'name' => $warehouse->name ?? '',
            'city' => $warehouse->city ?? '',
        ];
    }
}
