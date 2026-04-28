# API Integration Guide for Seller App

## ១. កំណត់ API URL

បើកឯកសារ `lib/config/api_config.dart` ហើយកំណត់ URL របស់ WebApp អ្នក៖

```dart
// សម្រាប់ Development (Localhost)
static const String baseUrl = 'http://10.0.2.2:8000/api'; // Android Emulator
// static const String baseUrl = 'http://localhost:8000/api'; // iOS Simulator

// សម្រាប់ Production
// static const String baseUrl = 'https://your-webapp.com/api';
```

## ២. បង្កើត API Endpoints នៅលើ Laravel WebApp

### ២.១ បង្កើត Routes (`routes/api.php`)

```php
<?php

use App\Http\Controllers\ProductController;
use App\Http\Controllers\OrderController;
use App\Http\Controllers\SaleController;
use Illuminate\Support\Facades\Route;

// Products
Route::get('/products', [ProductController::class, 'index']);
Route::post('/products', [ProductController::class, 'store']);
Route::get('/products/{id}', [ProductController::class, 'show']);
Route::put('/products/{id}', [ProductController::class, 'update']);
Route::delete('/products/{id}', [ProductController::class, 'destroy']);

// Orders
Route::get('/orders', [OrderController::class, 'index']);
Route::post('/orders', [OrderController::class, 'store']);
Route::get('/orders/{id}', [OrderController::class, 'show']);
Route::put('/orders/{id}', [OrderController::class, 'update']);

// Sales Stats
Route::get('/sales', [SaleController::class, 'stats']);

// Categories
Route::get('/categories', [CategoryController::class, 'index']);
```

### ២.២ បង្កើត ProductController (`app/Http/Controllers/ProductController.php`)

```php
<?php

namespace App\Http\Controllers;

use App\Models\Product;
use Illuminate\Http\Request;
use Illuminate\Http\JsonResponse;

class ProductController extends Controller
{
    public function index(): JsonResponse
    {
        $products = Product::with('category')->get();
        
        return response()->json($products->map(function ($product) {
            return [
                'id' => $product->id,
                'name' => $product->name,
                'description' => $product->description,
                'price' => $product->price,
                'stock' => $product->stock,
                'image' => $product->image_url,
                'category' => $product->category->name ?? '',
                'created_at' => $product->created_at->toIso8601String(),
            ];
        }));
    }

    public function store(Request $request): JsonResponse
    {
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'description' => 'required|string',
            'price' => 'required|numeric',
            'stock' => 'required|integer',
            'category' => 'required|string',
        ]);

        $product = Product::create($validated);

        return response()->json($product, 201);
    }
}
```

### ២.៣ បង្កើត OrderController (`app/Http/Controllers/OrderController.php`)

```php
<?php

namespace App\Http\Controllers;

use App\Models\Order;
use App\Models\OrderItem;
use Illuminate\Http\Request;
use Illuminate\Http\JsonResponse;
use Illuminate\Support\Facades\DB;

class OrderController extends Controller
{
    public function index(): JsonResponse
    {
        $orders = Order::with('items')->latest()->get();
        
        return response()->json($orders->map(function ($order) {
            return [
                'id' => $order->id,
                'customer_name' => $order->customer_name,
                'customer_phone' => $order->customer_phone,
                'customer_address' => $order->customer_address,
                'total_amount' => $order->total_amount,
                'status' => $order->status,
                'created_at' => $order->created_at->toIso8601String(),
                'items' => $order->items->map(function ($item) {
                    return [
                        'product_id' => $item->product_id,
                        'product_name' => $item->product_name,
                        'quantity' => $item->quantity,
                        'price' => $item->price,
                    ];
                }),
            ];
        }));
    }

    public function store(Request $request): JsonResponse
    {
        $validated = $request->validate([
            'customer_name' => 'required|string|max:255',
            'customer_phone' => 'required|string',
            'customer_address' => 'required|string',
            'items' => 'required|array|min:1',
            'items.*.product_id' => 'required|exists:products,id',
            'items.*.quantity' => 'required|integer|min:1',
            'items.*.price' => 'required|numeric',
        ]);

        DB::beginTransaction();
        try {
            // Create Order
            $order = Order::create([
                'customer_name' => $validated['customer_name'],
                'customer_phone' => $validated['customer_phone'],
                'customer_address' => $validated['customer_address'],
                'total_amount' => collect($validated['items'])
                    ->sum(fn($item) => $item['price'] * $item['quantity']),
                'status' => 'pending',
            ]);

            // Create Order Items
            foreach ($validated['items'] as $item) {
                OrderItem::create([
                    'order_id' => $order->id,
                    'product_id' => $item['product_id'],
                    'product_name' => $item['product_name'] ?? '',
                    'quantity' => $item['quantity'],
                    'price' => $item['price'],
                ]);

                // Update Product Stock
                DB::table('products')
                    ->where('id', $item['product_id'])
                    ->decrement('stock', $item['quantity']);
            }

            DB::commit();

            return response()->json($order->load('items'), 201);
        } catch (\Exception $e) {
            DB::rollBack();
            return response()->json(['error' => $e->getMessage()], 500);
        }
    }
}
```

### ២.៤ បង្កើត SaleController (`app/Http/Controllers/SaleController.php`)

```php
<?php

namespace App\Http\Controllers;

use App\Models\Order;
use App\Models\Product;
use Illuminate\Http\JsonResponse;
use Illuminate\Support\Facades\DB;

class SaleController extends Controller
{
    public function stats(): JsonResponse
    {
        $today = now()->startOfDay();
        
        return response()->json([
            'total_sales' => Order::where('status', '!=', 'cancelled')->sum('total_amount'),
            'total_orders' => Order::count(),
            'pending_orders' => Order::where('status', 'pending')->count(),
            'total_products' => Product::count(),
            'low_stock_products' => Product::where('stock', '<', 10)->count(),
            'today_sales' => Order::where('status', '!=', 'cancelled')
                ->where('created_at', '>=', $today)
                ->sum('total_amount'),
            'today_orders' => Order::where('created_at', '>=', $today)->count(),
        ]);
    }
}
```

## ៣. បើក CORS នៅលើ Laravel

បើកឯកសារ `config/cors.php` ហើយកំណត់៖

```php
return [
    'paths' => ['api/*', 'sanctum/csrf-cookie'],
    'allowed_methods' => ['*'],
    'allowed_origins' => ['*'], // ឬកំណត់ specific origin
    'allowed_origins_patterns' => [],
    'allowed_headers' => ['*'],
    'exposed_headers' => [],
    'max_age' => 0,
    'supports_credentials' => false,
];
```

## ៤. សាកល្បង API

ប្រើ **Postman** ឬ **curl** ដើម្បីសាកល្បង API៖

```bash
# ទាញទិន្នន័យផលិតផល
curl http://localhost:8000/api/products

# ទាញទិន្នន័យការកុម្ម៉ង់
curl http://localhost:8000/api/orders

# បង្កើតការកុម្ម៉ង់ថ្មី
curl -X POST http://localhost:8000/api/orders \
  -H "Content-Type: application/json" \
  -d '{
    "customer_name": "John Doe",
    "customer_phone": "+855 12 345 678",
    "customer_address": "Phnom Penh",
    "items": [
      {
        "product_id": 1,
        "product_name": "Product A",
        "quantity": 2,
        "price": 25.00
      }
    ]
  }'
```

## ៥. ប្រើប្រាស់ក្នុង Flutter App

### ៥.១ ទាញទិន្នន័យផលិតផល

```dart
// ក្នុង ProductsScreen ឬ POSScreen
final productProvider = context.read<ProductProvider>();
await productProvider.fetchProducts();

// ទាញទិន្នន័យ
final products = context.watch<ProductProvider>().products;
```

### ៥.២ ទាញទិន្នន័យការកុម្ម៉ង់

```dart
// ក្នុង OrdersScreen
final orderProvider = context.read<OrderProvider>();
await orderProvider.fetchOrders();

// ទាញទិន្នន័យ
final orders = context.watch<OrderProvider>().orders;
```

### ៥.៣ បង្កើតការកុម្ម៉ង់ (POS)

```dart
// ក្នុង CheckoutScreen
final orderProvider = context.read<OrderProvider>();
try {
  await orderProvider.createOrder({
    'customer_name': customerName,
    'customer_phone': customerPhone,
    'customer_address': customerAddress,
    'items': cartItems.map((item) => {
      'product_id': item.productId,
      'product_name': item.name,
      'quantity': item.quantity,
      'price': item.price,
    }).toList(),
  });
  // Success
} catch (e) {
  // Error handling
}
```

## ៦. ដោះស្រាយបញ្ហា

### បញ្ហា: Connection Refused
- ត្រួតពិនិត្យថា WebApp កំពុងដំណើរការ
- ពិនិត្យ URL ក្នុង `api_config.dart`
- សម្រាប់ Android Emulator ប្រើ `10.0.2.2` ជំនួសឱ្យ `localhost`

### បញ្ហា: CORS Error
- ត្រួតពិនិត្យ `config/cors.php` នៅលើ Laravel
- បើក CORS សម្រាប់ development

### បញ្ហា: 404 Not Found
- ត្រួតពិនិត្យ API routes (`php artisan route:list`)
- ត្រួតពិនិត្យ URL path
