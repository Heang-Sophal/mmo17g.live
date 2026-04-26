<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes - Seller App (No Authentication Required)
|--------------------------------------------------------------------------
*/

// ==================== Seller App API Routes ====================
// These routes DO NOT require authentication (for POS Mobile App)

// Products - Direct database query without auth
Route::get('/products', function() {
    try {
        $products = \App\Models\Product::where('is_active', 1)
            ->orderBy('name', 'asc')
            ->get()
            ->map(function($product) {
                $stockData = \DB::table('product_warehouse')
                    ->where('product_id', $product->id)
                    ->first();
                return [
                    'id' => (string) $product->id,
                    'code' => $product->code ?? '',
                    'name' => $product->name ?? 'Unknown',
                    'description' => $product->note ?? '',
                    'price' => (float) $product->price,
                    'stock' => $stockData ? (int) $stockData->qte : 0,
                    'stock_alert' => (int) ($product->stock_alert ?? 0),
                    'image' => $product->image ?? '',
                    'image_url' => $product->image ? product_image_url($product->image) : null,
                    'category' => $product->category ? ['id' => (string) $product->category->id, 'name' => $product->category->name ?? ''] : ['id' => '', 'name' => 'Uncategorized'],
                    'brand' => null,
                    'is_featured' => (bool) $product->is_featured,
                    'hide_from_online_store' => (bool) $product->hide_from_online_store,
                    'created_at' => $product->created_at?->toIso8601String(),
                    'updated_at' => $product->updated_at?->toIso8601String(),
                ];
            });

        return response()->json(['success' => true, 'data' => $products], 200);
    } catch (\Exception $e) {
        return response()->json(['success' => false, 'message' => $e->getMessage()], 500);
    }
});

// Create Order (POS)
Route::post('/orders', function(Request $request) {
    try {
        $validated = $request->validate([
            'customer_name' => 'nullable|string',
            'customer_phone' => 'nullable|string',
            'items' => 'required|array',
            'items.*.product_id' => 'required',
            'items.*.quantity' => 'required|integer|min:1',
            'items.*.price' => 'required|numeric',
            'payment_method' => 'nullable|string',
            'paid_amount' => 'nullable|numeric',
            'warehouse_id' => 'nullable|integer',
        ]);

        \DB::beginTransaction();
        
        $subtotal = collect($validated['items'])->sum(fn($item) => $item['quantity'] * $item['price']);
        $grandTotal = $subtotal;

        $sale = \App\Models\Sale::create([
            'date' => now(),
            'Ref' => 'POS-' . strtoupper(uniqid()) . '-' . rand(1000, 9999),
            'client_id' => null,
            'GrandTotal' => $grandTotal,
            'TaxNet' => 0,
            'tax_rate' => 0,
            'discount' => 0,
            'shipping' => 0,
            'notes' => $validated['customer_name'] ?? null,
            'warehouse_id' => $validated['warehouse_id'] ?? 1,
            'user_id' => 1,
            'statut' => 'completed',
            'payment_statut' => 'paid',
            'is_pos' => 1,
            'paid_amount' => $validated['paid_amount'] ?? $grandTotal,
        ]);

        foreach ($validated['items'] as $item) {
            \App\Models\SaleDetail::create([
                'sale_id' => $sale->id,
                'product_id' => $item['product_id'],
                'product_name' => \App\Models\Product::find($item['product_id'])?->name ?? 'Unknown',
                'quantity' => $item['quantity'],
                'price' => $item['price'],
                'total' => $item['quantity'] * $item['price'],
            ]);

            $warehouseId = $validated['warehouse_id'] ?? 1;
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

        \App\Models\PaymentSale::create([
            'sale_id' => $sale->id,
            'montant' => $validated['paid_amount'] ?? $grandTotal,
            'date' => now(),
            'Reglement' => $validated['payment_method'] ?? 'cash',
            'notes' => null,
            'user_id' => 1,
        ]);

        \DB::commit();

        return response()->json([
            'success' => true,
            'message' => 'Order created successfully',
            'data' => $sale,
        ], 201);
    } catch (\Exception $e) {
        \DB::rollBack();
        return response()->json([
            'success' => false,
            'message' => 'Failed to create order: ' . $e->getMessage(),
            'error' => $e->getMessage(),
        ], 500);
    }
});

// Get Orders
Route::get('/orders', function() {
    return response()->json(['success' => true, 'data' => []], 200);
});

// Dashboard Stats
Route::get('/dashboard/seller', function() {
    return response()->json([
        'success' => true,
        'data' => [
            'sales' => ['total' => 0, 'today' => 0, 'week' => 0, 'month' => 0],
            'orders' => ['total' => 0, 'today' => 0, 'pending' => 0, 'completed' => 0],
            'products' => ['total' => 0, 'low_stock' => 0, 'out_of_stock' => 0],
            'customers' => ['total' => 0],
            'payments' => ['today' => 0],
            'top_products' => [],
            'recent_orders' => [],
        ]
    ]);
});

// Sales Stats
Route::get('/sales/stats', function() {
    return response()->json([
        'success' => true,
        'data' => [
            'total_sales' => 0,
            'total_orders' => 0,
            'pending_orders' => 0,
            'completed_orders' => 0,
        ]
    ], 200);
});
// ===============================================================
