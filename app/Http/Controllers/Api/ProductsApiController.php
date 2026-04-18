<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Product;
use App\Models\Category;
use App\Models\Brand;
use App\Models\Warehouse;
use Illuminate\Http\Request;
use Illuminate\Http\JsonResponse;
use Illuminate\Support\Facades\DB;

class ProductsApiController extends Controller
{
    /**
     * ទាញទិន្នន័យផលិតផលទាំងអស់
     * GET /api/products
     */
    public function index(Request $request): JsonResponse
    {
        try {
            // ទាញទិន្នន័យផលិតផលដែល is_active = 1
            $products = Product::where('is_active', 1)
                ->orderBy('name', 'asc')
                ->get();

            return response()->json([
                'success' => true,
                'data' => $products->map(function ($product) {
                    // ទាញទិន្នន័យ stock ពី product_warehouse តារាង
                    $stockData = DB::table('product_warehouse')
                        ->where('product_id', $product->id)
                        ->first();
                    $stock = $stockData ? (int) $stockData->qte : 0;

                    return [
                        'id' => (string) $product->id,
                        'code' => $product->code ?? '',
                        'name' => $product->name ?? 'Unknown',
                        'description' => $product->note ?? '',
                        'price' => (float) $product->price,
                        'cost' => (float) $product->cost ?? 0,
                        'stock' => $stock,
                        'stock_alert' => (int) ($product->stock_alert ?? 0),
                        'image' => $product->image ?? '',
                        'image_url' => $product->image ? asset('images/products/' . $product->image) : null,
                        'category' => $product->category ? [
                            'id' => (string) $product->category->id,
                            'name' => $product->category->name ?? '',
                        ] : ['id' => '', 'name' => 'Uncategorized'],
                        'brand' => $product->brand ? [
                            'id' => (string) $product->brand->id,
                            'name' => $product->brand->name ?? '',
                        ] : null,
                        'is_featured' => (bool) $product->is_featured,
                        'hide_from_online_store' => (bool) $product->hide_from_online_store,
                        'created_at' => $product->created_at?->toIso8601String(),
                        'updated_at' => $product->updated_at?->toIso8601String(),
                    ];
                }),
            ], 200);
        } catch (\Exception $e) {
            return response()->json([
                'success' => false,
                'message' => 'Failed to load products: ' . $e->getMessage(),
                'error' => $e->getMessage(),
            ], 500);
        }
    }

    /**
     * ទាញទិន្នន័យផលិតផលតាម ID
     * GET /api/products/{id}
     */
    public function show($id): JsonResponse
    {
        try {
            $product = Product::findOrFail($id);

            $stockData = DB::table('product_warehouse')
                ->where('product_id', $product->id)
                ->first();
            $stock = $stockData ? (int) $stockData->qte : 0;

            return response()->json([
                'success' => true,
                'data' => [
                    'id' => (string) $product->id,
                    'code' => $product->code ?? '',
                    'name' => $product->name ?? 'Unknown',
                    'description' => $product->note ?? '',
                    'price' => (float) $product->price,
                    'cost' => (float) $product->cost ?? 0,
                    'stock' => $stock,
                    'stock_alert' => (int) ($product->stock_alert ?? 0),
                    'image' => $product->image ?? '',
                    'image_url' => $product->image ? asset('images/products/' . $product->image) : null,
                    'category' => $product->category ? [
                        'id' => (string) $product->category->id,
                        'name' => $product->category->name ?? '',
                    ] : ['id' => '', 'name' => 'Uncategorized'],
                    'brand' => $product->brand ? [
                        'id' => (string) $product->brand->id,
                        'name' => $product->brand->name ?? '',
                    ] : null,
                    'created_at' => $product->created_at?->toIso8601String(),
                    'updated_at' => $product->updated_at?->toIso8601String(),
                ],
            ], 200);
        } catch (\Exception $e) {
            return response()->json([
                'success' => false,
                'message' => 'Product not found',
                'error' => $e->getMessage(),
            ], 404);
        }
    }

    /**
     * បង្កើតផលិតផលថ្មី
     * POST /api/products
     */
    public function store(Request $request): JsonResponse
    {
        try {
            $validated = $request->validate([
                'code' => 'required|string|max:255|unique:products,code',
                'name' => 'required|string|max:255',
                'price' => 'required|numeric|min:0',
                'cost' => 'nullable|numeric|min:0',
                'category_id' => 'nullable|exists:categories,id',
            ]);

            $product = Product::create([
                'code' => $validated['code'],
                'name' => $validated['name'],
                'price' => $validated['price'],
                'cost' => $validated['cost'] ?? 0,
                'stock' => 0,
                'stock_alert' => 5,
                'is_active' => 1,
                'category_id' => $validated['category_id'] ?? null,
                'type' => 'simple',
            ]);

            return response()->json([
                'success' => true,
                'message' => 'Product created successfully',
                'data' => $product,
            ], 201);
        } catch (\Exception $e) {
            return response()->json([
                'success' => false,
                'message' => 'Failed to create product',
                'error' => $e->getMessage(),
            ], 500);
        }
    }

    /**
     * កែផលិតផល
     * PUT /api/products/{id}
     */
    public function update(Request $request, $id): JsonResponse
    {
        try {
            $product = Product::findOrFail($id);
            $product->update($request->all());

            return response()->json([
                'success' => true,
                'message' => 'Product updated successfully',
                'data' => $product->fresh(),
            ]);
        } catch (\Exception $e) {
            return response()->json([
                'success' => false,
                'message' => 'Failed to update product',
                'error' => $e->getMessage(),
            ], 500);
        }
    }

    /**
     * លុបផលិតផល
     * DELETE /api/products/{id}
     */
    public function destroy($id): JsonResponse
    {
        try {
            $product = Product::findOrFail($id);
            $product->delete();

            return response()->json([
                'success' => true,
                'message' => 'Product deleted successfully',
            ]);
        } catch (\Exception $e) {
            return response()->json([
                'success' => false,
                'message' => 'Failed to delete product',
                'error' => $e->getMessage(),
            ], 500);
        }
    }

    /**
     * ទាញទិន្នន័យប្រភេទផលិតផល
     * GET /api/categories
     */
    public function categories(): JsonResponse
    {
        try {
            $categories = Category::where('is_active', 1)
                ->orderBy('name')
                ->get()
                ->map(function ($category) {
                    return [
                        'id' => (string) $category->id,
                        'name' => $category->name ?? '',
                        'description' => $category->description ?? '',
                    ];
                });

            return response()->json([
                'success' => true,
                'data' => $categories,
            ], 200);
        } catch (\Exception $e) {
            return response()->json([
                'success' => false,
                'message' => 'Failed to load categories',
                'error' => $e->getMessage(),
            ], 500);
        }
    }

    /**
     * ទាញទិន្នន័យម៉ាកយីហោ
     * GET /api/brands
     */
    public function brands(): JsonResponse
    {
        try {
            $brands = Brand::where('is_active', 1)
                ->orderBy('name')
                ->get()
                ->map(function ($brand) {
                    return [
                        'id' => (string) $brand->id,
                        'name' => $brand->name ?? '',
                    ];
                });

            return response()->json([
                'success' => true,
                'data' => $brands,
            ], 200);
        } catch (\Exception $e) {
            return response()->json([
                'success' => false,
                'message' => 'Failed to load brands',
                'error' => $e->getMessage(),
            ], 500);
        }
    }

    /**
     * ទាញទិន្នន័យឃ្លាំង
     * GET /api/warehouses
     */
    public function warehouses(): JsonResponse
    {
        try {
            $warehouses = Warehouse::where('is_active', 1)
                ->orderBy('name')
                ->get()
                ->map(function ($warehouse) {
                    return [
                        'id' => (string) $warehouse->id,
                        'name' => $warehouse->name ?? '',
                        'location' => $warehouse->location ?? '',
                    ];
                });

            return response()->json([
                'success' => true,
                'data' => $warehouses,
            ], 200);
        } catch (\Exception $e) {
            return response()->json([
                'success' => false,
                'message' => 'Failed to load warehouses',
                'error' => $e->getMessage(),
            ], 500);
        }
    }
}
