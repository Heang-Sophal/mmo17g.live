<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Sale;
use App\Models\SaleDetail;
use App\Models\Client;
use App\Models\Product;
use App\Models\PaymentSale;
use Illuminate\Http\Request;
use Illuminate\Http\JsonResponse;
use Illuminate\Support\Facades\DB;

class SalesApiController extends Controller
{
    /**
     * ទាញទិន្នន័យការលក់ទាំងអស់ (Orders)
     * GET /api/orders
     */
    public function index(Request $request): JsonResponse
    {
        try {
            $query = Sale::with(['client', 'details', 'user', 'warehouse'])
                ->orderBy('created_at', 'desc');

            // ចម្រាញ់តាមស្ថានភាព
            if ($request->has('status')) {
                $query->where('statut', $request->status);
            }

            // ចម្រាញ់តាមអតិថិជន
            if ($request->has('client_id')) {
                $query->where('client_id', $request->client_id);
            }

            // ចម្រាញ់តាមថ្ងៃ
            if ($request->has('date')) {
                $query->whereDate('created_at', $request->date);
            }

            // ចម្រាញ់តាម POS
            if ($request->has('is_pos')) {
                $query->where('is_pos', $request->is_pos);
            }

            $sales = $query->get();

            return response()->json([
                'success' => true,
                'data' => $sales->map(function ($sale) {
                    return [
                        'id' => $sale->id,
                        'reference' => $sale->Ref,
                        'date' => is_string($sale->date) ? $sale->date : $sale->date->toIso8601String(),
                        'customer' => $sale->client ? [
                            'id' => $sale->client->id,
                            'name' => $sale->client->name,
                            'phone' => $sale->client->phone ?? '',
                            'email' => $sale->client->email ?? '',
                        ] : null,
                        'customer_name' => $sale->client?->name ?? 'Walk-in Customer',
                        'customer_phone' => $sale->client?->phone ?? '',
                        'customer_address' => $sale->client?->adresse ?? '',
                        'total_amount' => (float) $sale->GrandTotal,
                        'paid_amount' => (float) $sale->paid_amount,
                        'due_amount' => (float) ($sale->GrandTotal - $sale->paid_amount),
                        'status' => $this->mapStatus($sale->statut),
                        'payment_status' => $sale->payment_statut ?? 'pending',
                        'is_pos' => (bool) $sale->is_pos,
                        'notes' => $sale->notes ?? '',
                        'discount' => (float) $sale->discount,
                        'tax' => (float) $sale->TaxNet,
                        'shipping' => (float) $sale->shipping,
                        'items' => $sale->details->map(function ($detail) {
                            return [
                                'product_id' => $detail->product_id,
                                'product_name' => $detail->product?->name ?? 'Unknown',
                                'quantity' => (int) $detail->quantity,
                                'price' => (float) $detail->price,
                                'subtotal' => (float) ($detail->quantity * $detail->price),
                                'total' => (float) ($detail->quantity * $detail->price - $detail->discount),
                            ];
                        }),
                        'warehouse' => $sale->warehouse ? [
                            'id' => $sale->warehouse->id,
                            'name' => $sale->warehouse->name,
                        ] : null,
                        'created_by' => $sale->user ? [
                            'id' => $sale->user->id,
                            'name' => $sale->user->name,
                        ] : null,
                        'created_at' => $sale->created_at?->toIso8601String(),
                        'updated_at' => $sale->updated_at?->toIso8601String(),
                    ];
                }),
            ]);
        } catch (\Exception $e) {
            return response()->json([
                'success' => false,
                'message' => 'Failed to load orders',
                'error' => $e->getMessage(),
            ], 500);
        }
    }

    /**
     * ទាញទិន្នន័យការលក់តាម ID
     * GET /api/orders/{id}
     */
    public function show($id): JsonResponse
    {
        try {
            $sale = Sale::with(['client', 'details.product', 'payments', 'user', 'warehouse'])->findOrFail($id);

            return response()->json([
                'success' => true,
                'data' => [
                    'id' => $sale->id,
                    'reference' => $sale->Ref,
                    'date' => $sale->date->toIso8601String(),
                    'customer' => $sale->client ? [
                        'id' => $sale->client->id,
                        'name' => $sale->client->name,
                        'phone' => $sale->client->phone ?? '',
                        'email' => $sale->client->email ?? '',
                        'adresse' => $sale->client->adresse ?? '',
                    ] : null,
                    'total_amount' => (float) $sale->GrandTotal,
                    'paid_amount' => (float) $sale->paid_amount,
                    'due_amount' => (float) ($sale->GrandTotal - $sale->paid_amount),
                    'status' => $this->mapStatus($sale->statut),
                    'payment_status' => $sale->payment_statut ?? 'pending',
                    'items' => $sale->details->map(function ($detail) {
                        return [
                            'product_id' => $detail->product_id,
                            'product_name' => $detail->product_name ?? $detail->product?->name ?? 'Unknown',
                            'quantity' => (int) $detail->quantity,
                            'price' => (float) $detail->price,
                            'total' => (float) ($detail->quantity * $detail->price),
                        ];
                    }),
                    'payments' => $sale->payments->map(function ($payment) {
                        return [
                            'id' => $payment->id,
                            'amount' => (float) $payment->montant,
                            'method' => $payment->Reglement ?? 'cash',
                            'date' => $payment->date->toIso8601String(),
                            'note' => $payment->notes ?? '',
                        ];
                    }),
                    'created_at' => $sale->created_at->toIso8601String(),
                ],
            ]);
        } catch (\Exception $e) {
            return response()->json([
                'success' => false,
                'message' => 'Order not found',
                'error' => $e->getMessage(),
            ], 404);
        }
    }

    /**
     * បង្កើតការលក់ថ្មី (POS Order)
     * POST /api/orders
     */
    public function store(Request $request): JsonResponse
    {
        DB::beginTransaction();
        try {
            $validated = $request->validate([
                'customer_name' => 'nullable|string|max:255',
                'customer_phone' => 'nullable|string|max:50',
                'customer_address' => 'nullable|string|max:500',
                'items' => 'required|array|min:1',
                'items.*.product_id' => 'required|exists:products,id',
                'items.*.quantity' => 'required|integer|min:1',
                'items.*.price' => 'required|numeric|min:0',
                'discount' => 'nullable|numeric|min:0',
                'tax' => 'nullable|numeric|min:0',
                'shipping' => 'nullable|numeric|min:0',
                'warehouse_id' => 'nullable|exists:warehouses,id',
                'notes' => 'nullable|string',
                'payment_method' => 'nullable|string|in:cash,card,bank_transfer,khqr',
                'paid_amount' => 'nullable|numeric|min:0',
            ]);

            // គណនាចំនួនទឹកប្រាក់សរុប
            $subtotal = 0;
            foreach ($validated['items'] as $item) {
                $subtotal += $item['quantity'] * $item['price'];
            }

            $discount = $validated['discount'] ?? 0;
            $tax = $validated['tax'] ?? 0;
            $shipping = $validated['shipping'] ?? 0;
            $grandTotal = $subtotal - $discount + $tax + $shipping;

            // បង្កើតអតិថិជនថ្មី បើមិនមាន
            $clientId = null;
            if (!empty($validated['customer_name'])) {
                $client = Client::firstOrCreate(
                    ['phone' => $validated['customer_phone'] ?? null],
                    [
                        'name' => $validated['customer_name'],
                        'phone' => $validated['customer_phone'] ?? null,
                        'adresse' => $validated['customer_address'] ?? null,
                    ]
                );
                $clientId = $client->id;
            }

            // បង្កើត Sale
            $sale = Sale::create([
                'date' => now(),
                'Ref' => $this->generateSaleRef(),
                'client_id' => $clientId,
                'GrandTotal' => $grandTotal,
                'TaxNet' => $tax,
                'tax_rate' => $subtotal > 0 ? ($tax / $subtotal) * 100 : 0,
                'discount' => $discount,
                'shipping' => $shipping,
                'notes' => $validated['notes'] ?? null,
                'warehouse_id' => $validated['warehouse_id'] ?? \DB::table('warehouses')->value('id'),
                'user_id' => auth()->id() ?? 1, // Default to first user if not authenticated
                'statut' => 'completed',
                'payment_statut' => 'paid',
                'is_pos' => 1,
                'paid_amount' => $validated['paid_amount'] ?? $grandTotal,
            ]);

            // បង្កើត Sale Details និងអាប់ដេត Stock
            foreach ($validated['items'] as $item) {
                SaleDetail::create([
                    'sale_id' => $sale->id,
                    'product_id' => $item['product_id'],
                    'product_name' => Product::find($item['product_id'])?->name ?? 'Unknown',
                    'quantity' => $item['quantity'],
                    'price' => $item['price'],
                    'total' => $item['quantity'] * $item['price'],
                ]);

                // អាប់ដេត Stock ក្នុង product_warehouse តារាង
                $warehouseId = $sale->warehouse_id;
                $pw = \DB::table('product_warehouse')
                    ->where('product_id', $item['product_id'])
                    ->where('warehouse_id', $warehouseId)
                    ->first();
                
                if ($pw) {
                    \DB::table('product_warehouse')
                        ->where('product_id', $item['product_id'])
                        ->where('warehouse_id', $warehouseId)
                        ->decrement('qte', $item['quantity']);
                }
            }

            // បង្កើត Payment
            if (($validated['paid_amount'] ?? $grandTotal) > 0) {
                PaymentSale::create([
                    'sale_id' => $sale->id,
                    'montant' => $validated['paid_amount'] ?? $grandTotal,
                    'date' => now(),
                    'Reglement' => $validated['payment_method'] ?? 'cash',
                    'notes' => null,
                    'user_id' => auth()->id() ?? 1,
                ]);
            }

            DB::commit();

            return response()->json([
                'success' => true,
                'message' => 'Order created successfully',
                'data' => $sale->load(['client', 'details']),
            ], 201);
        } catch (\Exception $e) {
            DB::rollBack();
            return response()->json([
                'success' => false,
                'message' => 'Failed to create order',
                'error' => $e->getMessage(),
            ], 500);
        }
    }

    /**
     * អាប់ដេតស្ថានភាពការលក់
     * PUT /api/orders/{id}/status
     */
    public function updateStatus(Request $request, $id): JsonResponse
    {
        try {
            $validated = $request->validate([
                'status' => 'required|in:pending,completed,cancelled',
            ]);

            $sale = Sale::findOrFail($id);
            $sale->statut = $validated['status'];
            $sale->save();

            return response()->json([
                'success' => true,
                'message' => 'Order status updated successfully',
                'data' => $sale,
            ]);
        } catch (\Exception $e) {
            return response()->json([
                'success' => false,
                'message' => 'Failed to update order status',
                'error' => $e->getMessage(),
            ], 500);
        }
    }

    /**
     * ទាញទិន្នន័យស្ថិតិលក់
     * GET /api/sales/stats
     */
    public function stats(Request $request): JsonResponse
    {
        try {
            $today = now()->startOfDay();
            $thisWeek = now()->startOfWeek();
            $thisMonth = now()->startOfMonth();

            // ទិន្នន័យមូលដ្ឋាន
            $totalSales = Sale::where('statut', '!=', 'cancelled')->sum('GrandTotal');
            $totalOrders = Sale::count();
            $pendingOrders = Sale::where('statut', 'pending')->count();
            $completedOrders = Sale::where('statut', 'completed')->count();

            // ទិន្នន័យថ្ងៃនេះ
            $todaySales = Sale::where('statut', '!=', 'cancelled')
                ->where('created_at', '>=', $today)
                ->sum('GrandTotal');
            $todayOrders = Sale::where('created_at', '>=', $today)->count();

            // ទិន្នន័យសប្តាហ៍នេះ
            $weekSales = Sale::where('statut', '!=', 'cancelled')
                ->where('created_at', '>=', $thisWeek)
                ->sum('GrandTotal');
            $weekOrders = Sale::where('created_at', '>=', $thisWeek)->count();

            // ទិន្នន័យខែនេះ
            $monthSales = Sale::where('statut', '!=', 'cancelled')
                ->where('created_at', '>=', $thisMonth)
                ->sum('GrandTotal');
            $monthOrders = Sale::where('created_at', '>=', $thisMonth)->count();

            return response()->json([
                'success' => true,
                'data' => [
                    'total_sales' => (float) $totalSales,
                    'total_orders' => (int) $totalOrders,
                    'pending_orders' => (int) $pendingOrders,
                    'completed_orders' => (int) $completedOrders,
                    'today_sales' => (float) $todaySales,
                    'today_orders' => (int) $todayOrders,
                    'week_sales' => (float) $weekSales,
                    'week_orders' => (int) $weekOrders,
                    'month_sales' => (float) $monthSales,
                    'month_orders' => (int) $monthOrders,
                ],
            ]);
        } catch (\Exception $e) {
            return response()->json([
                'success' => false,
                'message' => 'Failed to load sales stats',
                'error' => $e->getMessage(),
            ], 500);
        }
    }

    /**
     * បម្លែងស្ថានភាព
     */
    private function mapStatus($statut): string
    {
        switch ($statut) {
            case 'pending':
                return 'pending';
            case 'completed':
                return 'completed';
            case 'cancelled':
                return 'cancelled';
            default:
                return 'pending';
        }
    }

    /**
     * បង្កើតលេខសម្គាល់ Sale
     */
    private function generateSaleRef(): string
    {
        return 'SL-' . strtoupper(uniqid()) . '-' . rand(1000, 9999);
    }
}
