<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Client;
use App\Models\PaymentSale;
use App\Models\Product;
use App\Models\Sale;
use App\Models\SaleDetail;
use App\Models\SaleReturn;
use App\Models\SaleReturnDetails;
use App\Models\Setting;
use App\Models\Unit;
use App\Services\MobileRealtimeService;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Validation\ValidationException;

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
            if (! empty($validated['customer_name'])) {
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

    public function sellerReturnableSales(Request $request): JsonResponse
    {
        try {
            $limit = min((int) $request->query('limit', 100), 200);

            $query = Sale::with(['client', 'warehouse', 'user', 'details.product.unitSale'])
                ->whereNull('deleted_at')
                ->whereHas('details')
                ->latest('created_at')
                ->limit($limit);

            if ($request->filled('user_id')) {
                $query->where('user_id', (int) $request->query('user_id'));
            }

            if ($request->filled('search')) {
                $search = trim((string) $request->query('search'));
                $query->where(function ($searchQuery) use ($search) {
                    $searchQuery->where('Ref', 'like', "%{$search}%")
                        ->orWhereHas('client', function ($clientQuery) use ($search) {
                            $clientQuery->where('name', 'like', "%{$search}%")
                                ->orWhere('phone', 'like', "%{$search}%");
                        });
                });
            }

            $sales = $query->get()
                ->map(fn (Sale $sale) => $this->formatSaleForReturn($sale))
                ->filter(fn (array $sale) => $sale['returnable_items'] > 0)
                ->values();

            return response()->json([
                'success' => true,
                'data' => $sales,
            ]);
        } catch (\Throwable $e) {
            return response()->json([
                'success' => false,
                'message' => 'Failed to load returnable sales: '.$e->getMessage(),
            ], 500);
        }
    }

    public function sellerSalesReturnsIndex(Request $request): JsonResponse
    {
        try {
            $limit = min((int) $request->query('limit', 100), 200);

            $query = SaleReturn::with(['sale', 'client', 'warehouse', 'user', 'details.product'])
                ->whereNull('deleted_at')
                ->latest('created_at')
                ->limit($limit);

            if ($request->filled('user_id')) {
                $query->where('user_id', (int) $request->query('user_id'));
            }

            if ($request->filled('search')) {
                $search = trim((string) $request->query('search'));
                $query->where(function ($searchQuery) use ($search) {
                    $searchQuery->where('Ref', 'like', "%{$search}%")
                        ->orWhereHas('sale', function ($saleQuery) use ($search) {
                            $saleQuery->where('Ref', 'like', "%{$search}%");
                        })
                        ->orWhereHas('client', function ($clientQuery) use ($search) {
                            $clientQuery->where('name', 'like', "%{$search}%")
                                ->orWhere('phone', 'like', "%{$search}%");
                        });
                });
            }

            $returns = $query->get()->map(fn (SaleReturn $return) => $this->formatReturn($return));

            return response()->json([
                'success' => true,
                'data' => $returns,
            ]);
        } catch (\Throwable $e) {
            return response()->json([
                'success' => false,
                'message' => 'Failed to load sales returns: '.$e->getMessage(),
            ], 500);
        }
    }

    public function sellerStoreSalesReturn(Request $request): JsonResponse
    {
        try {
            $validated = $request->validate([
                'sale_id' => 'required|integer|exists:sales,id',
                'user_id' => 'nullable|integer|exists:users,id',
                'notes' => 'nullable|string|max:1000',
                'items' => 'required|array|min:1',
                'items.*.sale_detail_id' => 'required|integer|exists:sale_details,id',
                'items.*.quantity' => 'required|numeric|min:0.0001',
            ]);

            $return = DB::transaction(function () use ($validated) {
                $sale = Sale::with(['client', 'warehouse', 'user', 'details.product.unitSale'])
                    ->whereNull('deleted_at')
                    ->findOrFail($validated['sale_id']);

                if (isset($validated['user_id']) && (int) $sale->user_id !== (int) $validated['user_id']) {
                    throw ValidationException::withMessages([
                        'sale_id' => ['This sale does not belong to the selected seller.'],
                    ]);
                }

                $requestedItems = collect($validated['items'])
                    ->groupBy('sale_detail_id')
                    ->map(function ($items) {
                        return (float) $items->sum('quantity');
                    })
                    ->filter(fn (float $quantity) => $quantity > 0);

                if ($requestedItems->isEmpty()) {
                    throw ValidationException::withMessages([
                        'items' => ['Select at least one item to return.'],
                    ]);
                }

                $remainingByDetail = collect($this->remainingDetails($sale))->keyBy('sale_detail_id');
                $returnRows = [];
                $grandTotal = 0.0;
                $totalQuantity = 0.0;

                foreach ($requestedItems as $saleDetailId => $quantity) {
                    $remaining = $remainingByDetail->get((int) $saleDetailId);

                    if (! $remaining) {
                        throw ValidationException::withMessages([
                            'items' => ['One of the selected products is no longer returnable.'],
                        ]);
                    }

                    $availableQuantity = (float) $remaining['remaining_quantity'];
                    if ($quantity > $availableQuantity + 0.0001) {
                        throw ValidationException::withMessages([
                            'items' => [
                                "Return quantity for {$remaining['product_name']} exceeds the remaining quantity.",
                            ],
                        ]);
                    }

                    $saleDetail = SaleDetail::with('product.unitSale')->findOrFail((int) $saleDetailId);
                    if ((int) $saleDetail->sale_id !== (int) $sale->id) {
                        throw ValidationException::withMessages([
                            'items' => ['One of the selected products does not belong to this sale.'],
                        ]);
                    }

                    $lineTotal = round($quantity * (float) $saleDetail->price, 2);
                    $grandTotal += $lineTotal;
                    $totalQuantity += $quantity;

                    $returnRows[] = [
                        'sale_detail' => $saleDetail,
                        'quantity' => $quantity,
                        'total' => $lineTotal,
                    ];
                }

                if ($grandTotal <= 0 || $totalQuantity <= 0) {
                    throw ValidationException::withMessages([
                        'items' => ['Return total must be greater than zero.'],
                    ]);
                }

                $saleReturn = SaleReturn::create([
                    'date' => now()->format('Y-m-d'),
                    'time' => now()->format('H:i:s'),
                    'Ref' => $this->generateSaleReturnReference(),
                    'client_id' => $sale->client_id,
                    'sale_id' => $sale->id,
                    'warehouse_id' => $sale->warehouse_id,
                    'tax_rate' => 0,
                    'TaxNet' => 0,
                    'discount' => 0,
                    'shipping' => 0,
                    'GrandTotal' => round($grandTotal, 2),
                    'paid_amount' => 0,
                    'payment_statut' => 'unpaid',
                    'statut' => 'received',
                    'notes' => $validated['notes'] ?? null,
                    'user_id' => $validated['user_id'] ?? $sale->user_id ?? 1,
                ]);

                $now = now();
                $detailRows = [];

                foreach ($returnRows as $row) {
                    /** @var SaleDetail $saleDetail */
                    $saleDetail = $row['sale_detail'];
                    $quantity = (float) $row['quantity'];

                    $detailRow = [
                        'sale_return_id' => $saleReturn->id,
                        'product_id' => $saleDetail->product_id,
                        'product_variant_id' => $saleDetail->product_variant_id,
                        'sale_unit_id' => $saleDetail->sale_unit_id,
                        'quantity' => $quantity,
                        'price' => (float) $saleDetail->price,
                        'TaxNet' => (float) ($saleDetail->TaxNet ?? 0),
                        'tax_method' => $saleDetail->tax_method ?? '1',
                        'discount' => (float) ($saleDetail->discount ?? 0),
                        'discount_method' => $saleDetail->discount_method ?? '1',
                        'total' => (float) $row['total'],
                        'imei_number' => $saleDetail->imei_number ?? null,
                        'created_at' => $now,
                        'updated_at' => $now,
                    ];

                    $detailRows[] = $detailRow;
                    $this->restoreStockForReturn($sale, $saleDetail, $quantity);
                }

                SaleReturnDetails::insert($detailRows);

                return $saleReturn->fresh(['sale', 'client', 'warehouse', 'user', 'details.product']);
            }, 10);

            app(MobileRealtimeService::class)->saleReturned($return);

            return response()->json([
                'success' => true,
                'message' => 'Sales return created successfully',
                'data' => $this->formatReturn($return),
            ], 201);
        } catch (ValidationException $e) {
            return response()->json([
                'success' => false,
                'message' => 'Validation error',
                'errors' => $e->errors(),
            ], 422);
        } catch (\Throwable $e) {
            return response()->json([
                'success' => false,
                'message' => 'Failed to create sales return: '.$e->getMessage(),
            ], 500);
        }
    }

    private function formatSaleForReturn(Sale $sale): array
    {
        $details = $this->remainingDetails($sale);
        $returnableTotal = collect($details)->sum(function (array $detail) {
            return (float) $detail['remaining_quantity'] * (float) $detail['unit_price'];
        });

        return [
            'id' => (string) $sale->id,
            'Ref' => $sale->Ref,
            'date' => $this->formatDate($sale->date),
            'datetime' => optional($sale->created_at)->format('Y-m-d H:i:s'),
            'client_name' => $sale->client?->name ?? 'Walk-in Customer',
            'client_phone' => $sale->client?->phone ?? '',
            'warehouse_name' => $sale->warehouse?->name ?? '',
            'warehouse_id' => $sale->warehouse_id,
            'user_name' => $sale->user?->name ?? '',
            'GrandTotal' => (float) $sale->GrandTotal,
            'returnable_total' => round($returnableTotal, 2),
            'returnable_items' => count($details),
            'details' => $details,
        ];
    }

    private function remainingDetails(Sale $sale): array
    {
        $returnedByProduct = $this->returnedQuantityByProduct($sale->id);
        $details = [];

        foreach ($sale->details as $detail) {
            $soldQuantity = (float) $detail->quantity;
            $key = $this->quantityKey($detail->product_id, $detail->product_variant_id);
            $alreadyReturnedForProduct = (float) ($returnedByProduct[$key] ?? 0);
            $returnedForLine = min($soldQuantity, $alreadyReturnedForProduct);
            $returnedByProduct[$key] = max(0, $alreadyReturnedForProduct - $returnedForLine);
            $remainingQuantity = max(0, $soldQuantity - $returnedForLine);

            if ($remainingQuantity <= 0) {
                continue;
            }

            $product = $detail->product;
            $details[] = [
                'sale_detail_id' => (int) $detail->id,
                'product_id' => (int) $detail->product_id,
                'product_variant_id' => $detail->product_variant_id,
                'product_name' => $product?->name ?? 'Unknown product',
                'product_code' => $product?->code ?? '',
                'sale_quantity' => $soldQuantity,
                'returned_quantity' => $returnedForLine,
                'remaining_quantity' => $remainingQuantity,
                'unit_price' => (float) $detail->price,
                'line_total' => (float) $detail->total,
                'unit_sale' => $product?->unitSale?->ShortName ?? '',
            ];
        }

        return $details;
    }

    private function returnedQuantityByProduct(int $saleId): array
    {
        return SaleReturnDetails::query()
            ->select(
                'sale_return_details.product_id',
                'sale_return_details.product_variant_id',
                DB::raw('SUM(sale_return_details.quantity) as returned_quantity')
            )
            ->join('sale_returns', 'sale_returns.id', '=', 'sale_return_details.sale_return_id')
            ->where('sale_returns.sale_id', $saleId)
            ->whereNull('sale_returns.deleted_at')
            ->groupBy('sale_return_details.product_id', 'sale_return_details.product_variant_id')
            ->get()
            ->mapWithKeys(function ($row) {
                return [
                    $this->quantityKey($row->product_id, $row->product_variant_id) => (float) $row->returned_quantity,
                ];
            })
            ->all();
    }

    private function formatReturn(SaleReturn $return): array
    {
        $details = $return->details->map(function (SaleReturnDetails $detail) {
            return [
                'id' => (int) $detail->id,
                'product_id' => (int) $detail->product_id,
                'product_name' => $detail->product?->name ?? 'Unknown product',
                'product_code' => $detail->product?->code ?? '',
                'quantity' => (float) $detail->quantity,
                'unit_price' => (float) $detail->price,
                'total' => (float) $detail->total,
            ];
        })->values();

        return [
            'id' => (string) $return->id,
            'Ref' => $return->Ref,
            'sale_id' => $return->sale_id ? (string) $return->sale_id : null,
            'sale_ref' => $return->sale?->Ref ?? '',
            'date' => trim($this->formatDate($return->date).' '.($return->time ?? '')),
            'client_name' => $return->client?->name ?? 'Walk-in Customer',
            'client_phone' => $return->client?->phone ?? '',
            'warehouse_name' => $return->warehouse?->name ?? '',
            'user_name' => $return->user?->name ?? '',
            'GrandTotal' => (float) $return->GrandTotal,
            'paid_amount' => (float) ($return->paid_amount ?? 0),
            'payment_status' => $return->payment_statut ?? 'unpaid',
            'status' => $return->statut ?? 'received',
            'notes' => $return->notes ?? '',
            'item_count' => $details->count(),
            'total_quantity' => (float) $details->sum('quantity'),
            'details' => $details,
            'created_at' => optional($return->created_at)->toIso8601String(),
        ];
    }

    private function restoreStockForReturn(Sale $sale, SaleDetail $detail, float $quantity): void
    {
        $product = $detail->product ?: Product::find($detail->product_id);

        if (! $product || $product->type === 'is_service') {
            return;
        }

        $stockQuantity = $this->stockQuantity($detail, $product, $quantity);
        $baseQuery = DB::table('product_warehouse')
            ->whereNull('deleted_at')
            ->where('warehouse_id', $sale->warehouse_id)
            ->where('product_id', $detail->product_id);

        if ($detail->product_variant_id) {
            $baseQuery->where('product_variant_id', $detail->product_variant_id);
        } else {
            $baseQuery->whereNull('product_variant_id');
        }

        $existing = $baseQuery->first();

        if ($existing) {
            DB::table('product_warehouse')
                ->where('id', $existing->id)
                ->increment('qte', $stockQuantity, ['updated_at' => now()]);

            return;
        }

        DB::table('product_warehouse')->insert([
            'product_id' => $detail->product_id,
            'warehouse_id' => $sale->warehouse_id,
            'product_variant_id' => $detail->product_variant_id,
            'qte' => $stockQuantity,
            'created_at' => now(),
            'updated_at' => now(),
        ]);
    }

    private function stockQuantity(SaleDetail $detail, Product $product, float $quantity): float
    {
        $unit = $detail->sale_unit_id
            ? Unit::find($detail->sale_unit_id)
            : $product->unitSale;

        if (! $unit || ! $unit->operator_value) {
            return $quantity;
        }

        return $unit->operator === '/'
            ? $quantity / (float) $unit->operator_value
            : $quantity * (float) $unit->operator_value;
    }

    private function generateSaleReturnReference(): string
    {
        $setting = Setting::whereNull('deleted_at')->first();
        $prefix = ! empty($setting?->sale_return_prefix) ? $setting->sale_return_prefix : 'RT';
        $lastReference = DB::table('sale_returns')
            ->where('Ref', 'like', $prefix.'_%')
            ->latest('id')
            ->value('Ref');

        if (! $lastReference) {
            return $prefix.'_0001';
        }

        $parts = explode('_', $lastReference);
        $nextNumber = isset($parts[1]) && is_numeric($parts[1])
            ? ((int) $parts[1]) + 1
            : 1;

        return $prefix.'_'.str_pad((string) $nextNumber, 4, '0', STR_PAD_LEFT);
    }

    private function formatDate($date): string
    {
        if (! $date) {
            return '';
        }

        if ($date instanceof \DateTimeInterface) {
            return $date->format('Y-m-d');
        }

        return (string) $date;
    }

    private function quantityKey($productId, $variantId): string
    {
        return (string) $productId.':'.($variantId ? (string) $variantId : 'none');
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
        return 'SL-'.strtoupper(uniqid()).'-'.rand(1000, 9999);
    }
}
