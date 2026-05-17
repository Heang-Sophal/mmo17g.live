<?php

namespace App\Services;

use App\Models\DeliveryAlert;
use App\Models\Role;
use App\Models\Sale;
use App\Models\User;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Schema;
use Throwable;

class DeliveryAlertService
{
    public function createAlertsForSale(Sale $sale): void
    {
        if (! $this->canCreateAlertsForSale($sale)) {
            return;
        }

        $deliveryUsers = $this->queryDeliveryUsersForWarehouse((int) $sale->warehouse_id)
            ->where('users.id', '!=', $sale->user_id)  // exclude the creator
            ->get();
        if ($deliveryUsers->isEmpty()) {
            return;
        }

        $sale->loadMissing('warehouse', 'client', 'user');

        $warehouseName = $sale->warehouse?->name ?: ('Warehouse #'.$sale->warehouse_id);
        $customerName = $sale->client?->name ?: 'អតិថិជនដើរចូល';
        $createdBy = $sale->user?->name ?: ($sale->user?->username ?: 'ប្រព័ន្ធ');
        $formattedTotal = number_format((float) $sale->GrandTotal, 2, '.', ',');
        $saleRef = $sale->Ref ?: ('SALE-'.$sale->id);

        $payload = [
            'sale_id' => (int) $sale->id,
            'sale_ref' => $saleRef,
            'warehouse_id' => (int) $sale->warehouse_id,
            'warehouse_name' => $warehouseName,
            'customer_name' => $customerName,
            'grand_total' => (float) $sale->GrandTotal,
            'shipping_status' => $sale->shipping_status ?: 'pending',
            'seller_name' => $createdBy,
            'created_at' => optional($sale->created_at)->toIso8601String(),
        ];

        foreach ($deliveryUsers as $user) {
            $this->createAlertForUser(
                $user,
                $sale,
                'sale_created',
                'ការបញ្ជាទិញថ្មីពីឃ្លាំង',
                "ការបញ្ជាទិញ {$saleRef} របស់ {$customerName} ({$formattedTotal}) ត្រូវបានបង្កើតពី {$warehouseName} ដោយ {$createdBy}។",
                $payload
            );
        }
    }

    public function createSellerAcceptedAlert(Sale $sale, User $deliveryUser, ?string $actionMode = null): void
    {
        $this->createSellerStatusAlert(
            $sale,
            $deliveryUser,
            'delivery_accepted',
            'អ្នកដឹកបានទទួលការបញ្ជាទិញ',
            'បានទទួល ',
            $actionMode
        );
    }

    public function createSellerCompletedAlert(Sale $sale, User $deliveryUser, ?string $actionMode = null): void
    {
        $this->createSellerStatusAlert(
            $sale,
            $deliveryUser,
            'delivery_completed',
            'ការដឹកជញ្ជូនបានបញ្ចប់',
            'បានបញ្ចប់ ',
            $actionMode
        );
    }

    public function createSellerShippingUpdatedAlert(
        Sale $sale,
        User $deliveryUser,
        float $oldShipping,
        float $newShipping
    ): void {
        if (! Schema::hasTable('delivery_alerts') || ! $sale->user_id) {
            return;
        }

        $sale->loadMissing('warehouse', 'client', 'user');

        $seller = $sale->user;
        if (! $seller) {
            return;
        }

        $warehouseName = $sale->warehouse?->name ?: ('Warehouse #'.$sale->warehouse_id);
        $customerName = $sale->client?->name ?: 'អតិថិជនដើរចូល';
        $saleRef = $sale->Ref ?: ('SALE-'.$sale->id);
        $deliveryName = $deliveryUser->name ?: ($deliveryUser->username ?: 'អ្នកដឹក');

        $payload = [
            'sale_id' => (int) $sale->id,
            'sale_ref' => $saleRef,
            'warehouse_id' => (int) $sale->warehouse_id,
            'warehouse_name' => $warehouseName,
            'customer_name' => $customerName,
            'grand_total' => (float) $sale->GrandTotal,
            'old_shipping' => $oldShipping,
            'new_shipping' => $newShipping,
            'shipping_status' => $sale->shipping_status ?: 'pending',
            'payment_status' => $sale->payment_statut ?: 'unpaid',
            'delivery_name' => $deliveryName,
            'delivery_phone' => $deliveryUser->phone ?? '',
            'event' => 'delivery_shipping_updated',
            'updated_at' => now()->toIso8601String(),
        ];

        $oldFormatted = number_format($oldShipping, 2, '.', ',');
        $newFormatted = number_format($newShipping, 2, '.', ',');
        $message = "{$deliveryName} បានកែថ្លៃដឹកការបញ្ជាទិញ {$saleRef} របស់ {$customerName} ពី {$oldFormatted} ទៅ {$newFormatted} ({$warehouseName})។";

        $this->createAlertForUser(
            $seller,
            $sale,
            'delivery_shipping_updated',
            'ថ្លៃដឹកត្រូវបានកែប្រែ',
            $message,
            $payload,
            false
        );
    }

    protected function canCreateAlertsForSale(Sale $sale): bool
    {
        if (! $sale->warehouse_id) {
            return false;
        }

        if (! Schema::hasTable('delivery_alerts') || ! Schema::hasTable('roles') || ! Schema::hasTable('user_warehouse')) {
            return false;
        }

        $status = strtolower((string) $sale->statut);

        return in_array($status, ['completed', 'delivered', 'shipped'], true);
    }

    protected function queryDeliveryUsersForWarehouse(int $warehouseId): Builder
    {
        $deliveryAppRoleNames = ['Delivery', 'Laivrison', 'Recorder', 'Admin', 'Owner'];
        $deliveryRoleIds = Role::query()
            ->whereIn('name', $deliveryAppRoleNames)
            ->pluck('id');

        return User::query()
            ->whereNull('users.deleted_at')
            ->where('users.statut', 1)
            ->where(function (Builder $query) use ($deliveryRoleIds, $deliveryAppRoleNames) {
                if ($deliveryRoleIds->isNotEmpty()) {
                    $query->whereIn('users.role_id', $deliveryRoleIds)
                        ->orWhereHas('roles', function (Builder $roleQuery) use ($deliveryRoleIds) {
                            $roleQuery->whereIn('roles.id', $deliveryRoleIds);
                        });

                    return;
                }

                $query->whereHas('roles', function (Builder $roleQuery) use ($deliveryAppRoleNames) {
                    $roleQuery->whereIn('roles.name', $deliveryAppRoleNames);
                });
            })
            ->where(function (Builder $warehouseScope) use ($warehouseId) {
                $warehouseScope->where('users.is_all_warehouses', 1)
                    ->orWhereHas('assignedWarehouses', function (Builder $warehouseQuery) use ($warehouseId) {
                        $warehouseQuery->where('warehouses.id', $warehouseId);
                    });
            });
    }

    protected function createSellerStatusAlert(
        Sale $sale,
        User $deliveryUser,
        string $type,
        string $title,
        string $statusLabel,
        ?string $actionMode = null
    ): void {
        if (! Schema::hasTable('delivery_alerts') || ! $sale->user_id) {
            return;
        }

        $sale->loadMissing('warehouse', 'client', 'user');

        $seller = $sale->user;
        if (! $seller) {
            return;
        }

        $warehouseName = $sale->warehouse?->name ?: ('Warehouse #'.$sale->warehouse_id);
        $customerName = $sale->client?->name ?: 'អតិថិជនដើរចូល';
        $saleRef = $sale->Ref ?: ('SALE-'.$sale->id);
        $deliveryName = $deliveryUser->name ?: ($deliveryUser->username ?: 'អ្នកដឹក');
        $actorRole = $this->normalizeActorRole($actionMode, $deliveryUser);
        $actorLabel = $actorRole === 'record' ? 'អ្នកកត់ត្រា' : 'អ្នកដឹក';
        $formattedTotal = number_format((float) $sale->GrandTotal, 2, '.', ',');

        $payload = [
            'sale_id' => (int) $sale->id,
            'sale_ref' => $saleRef,
            'warehouse_id' => (int) $sale->warehouse_id,
            'warehouse_name' => $warehouseName,
            'customer_name' => $customerName,
            'grand_total' => (float) $sale->GrandTotal,
            'shipping_status' => $sale->shipping_status ?: 'pending',
            'payment_status' => $sale->payment_statut ?: 'unpaid',
            'actor_role' => $actorRole,
            'actor_name' => $deliveryName,
            'actor_phone' => $deliveryUser->phone ?? '',
            'delivery_name' => $deliveryName,
            'delivery_phone' => $deliveryUser->phone ?? '',
            'recorder_name' => $actorRole === 'record' ? $deliveryName : ($seller->name ?? ''),
            'recorder_phone' => $actorRole === 'record' ? ($deliveryUser->phone ?? '') : ($seller->phone ?? ''),
            'event' => $type,
            'updated_at' => now()->toIso8601String(),
        ];

        $displayTitle = $title;
        if ($actorRole === 'record') {
            $displayTitle = $type === 'delivery_completed'
                ? 'ការកត់ត្រាបានបញ្ចប់'
                : 'អ្នកកត់ត្រាបានទទួលការបញ្ជាទិញ';
        }

        $message = "{$actorLabel} {$deliveryName} {$statusLabel}ការបញ្ជាទិញ {$saleRef} របស់ {$customerName} ({$formattedTotal}) ពី {$warehouseName}។";

        $this->createAlertForUser($seller, $sale, $type, $displayTitle, $message, $payload);
    }

    private function normalizeActorRole(?string $actionMode, User $user): string
    {
        $normalized = strtolower(trim((string) $actionMode));

        if ($normalized === 'record') {
            return 'record';
        }

        if ($normalized === 'delivery') {
            return 'delivery';
        }

        return $user->isRecorderUser() ? 'record' : 'delivery';
    }

    protected function createAlertForUser(
        User $user,
        Sale $sale,
        string $type,
        string $title,
        string $message,
        array $payload = [],
        bool $dedupe = true
    ): void {
        $attributes = [
            'user_id' => $user->id,
            'sale_id' => $sale->id,
            'type' => $type,
        ];

        $values = [
            'warehouse_id' => $sale->warehouse_id,
            'title' => $title,
            'message' => $message,
            'payload' => $payload,
        ];

        $alert = $dedupe
            ? DeliveryAlert::firstOrCreate($attributes, $values)
            : DeliveryAlert::create($attributes + $values);

        if ($dedupe && ! $alert->wasRecentlyCreated) {
            return;
        }

        $this->pushAlert($alert, $user, $type, $title, $message, $payload);
    }

    protected function pushAlert(
        DeliveryAlert $alert,
        User $user,
        string $type,
        string $title,
        string $message,
        array $payload = []
    ): void {
        try {
            $appType = $this->appTypeForAlert($type);
            $data = [
                'alert_id' => (string) $alert->id,
                'type' => $type,
                'app_type' => $appType,
                'sale_id' => (string) ($payload['sale_id'] ?? $alert->sale_id ?? ''),
                'sale_ref' => (string) ($payload['sale_ref'] ?? ''),
                'warehouse_id' => (string) ($payload['warehouse_id'] ?? $alert->warehouse_id ?? ''),
                'shipping_status' => (string) ($payload['shipping_status'] ?? ''),
                'click_action' => 'FLUTTER_NOTIFICATION_CLICK',
            ];

            $sent = app(FirebasePushService::class)->sendToUser(
                $user,
                $title,
                $message,
                $data,
                $appType
            );

            if ($sent === 0) {
                Log::warning('Mobile push notification was not delivered to any registered device.', [
                    'alert_id' => $alert->id,
                    'user_id' => $user->id,
                    'type' => $type,
                    'app_type' => $appType,
                ]);
            }
        } catch (Throwable $e) {
            Log::warning('Failed to send mobile push notification for delivery alert.', [
                'alert_id' => $alert->id,
                'user_id' => $user->id,
                'type' => $type,
                'message' => $e->getMessage(),
            ]);
        }
    }

    protected function appTypeForAlert(string $type): ?string
    {
        $map = [
            'sale_created' => 'delivery',
            'delivery_accepted' => 'seller',
            'delivery_completed' => 'seller',
            'delivery_shipping_updated' => 'seller',
        ];

        return $map[$type] ?? null;
    }
}
