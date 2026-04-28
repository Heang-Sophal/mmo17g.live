# Laravel API Setup Guide for Seller App

## ១. តំឡើង API Controllers

API Controllers ត្រូវបានបង្កើតរួចនៅក្នុង៖
```
app/Http/Controllers/Api/
├── ProductsApiController.php    # គ្រប់គ្រងផលិតផល
├── SalesApiController.php       # គ្រប់គ្រងការលក់/កុម្ម៉ង់
└── DashboardApiController.php   # ទិន្នន័យ Dashboard
```

## ២. API Routes

Routes ត្រូវបានបន្ថែមនៅក្នុង `routes/api.php`:

```php
// Dashboard
GET  /api/dashboard/seller          # ទិន្នន័យ Dashboard
GET  /api/dashboard/chart-data      # ទិន្នន័យ Chart

// Products
GET    /api/products                # ទាញទិន្នន័យផលិតផលទាំងអស់
GET    /api/products/{id}           # ទាញទិន្នន័យផលិតផលតាម ID
POST   /api/products                # បង្កើតផលិតផលថ្មី
PUT    /api/products/{id}           # កែផលិតផល
DELETE /api/products/{id}           # លុបផលិតផល

// Categories, Brands, Warehouses
GET /api/categories                 # ទាញទិន្នន័យប្រភេទ
GET /api/brands                     # ទាញទិន្នន័យម៉ាក
GET /api/warehouses                 # ទាញទិន្នន័យឃ្លាំង

// Orders/Sales
GET    /api/orders                  # ទាញទិន្នន័យការកុម្ម៉ង់
GET    /api/orders/{id}             # ទាញទិន្នន័យការកុម្ម៉ង់តាម ID
POST   /api/orders                  # បង្កើតការកុម្ម៉ង់ថ្មី (POS)
PUT    /api/orders/{id}/status      # អាប់ដេតស្ថានភាព

// Sales Stats
GET /api/sales/stats                # ទិន្នន័យស្ថិតិលក់
```

## ៣. សាកល្បង API

### ៣.១ ចាប់ផ្តើម Laravel Server

```bash
cd /Users/sreyleaknem/Desktop/WebApp03
php artisan serve
```

Server នឹងដំណើរការនៅ `http://localhost:8000`

### ៣.២ សាកល្បងជាមួយ cURL

```bash
# ទាញទិន្នន័យផលិតផល
curl http://localhost:8000/api/products

# ទាញទិន្នន័យ Dashboard
curl http://localhost:8000/api/dashboard/seller

# ទាញទិន្នន័យការកុម្ម៉ង់
curl http://localhost:8000/api/orders

# ទាញទិន្នន័យស្ថិតិលក់
curl http://localhost:8000/api/sales/stats
```

### ៣.៣ សាកល្បងជាមួយ Postman

1. បើក **Postman**
2. បង្កើត Request ថ្មី
3. វាយ URL: `http://localhost:8000/api/products`
4. ជ្រើសរើស **GET**
5. ចុច **Send**

### ៣.៤ សាកល្បងបង្កើតការកុម្ម៉ង់ (POS)

```bash
curl -X POST http://localhost:8000/api/orders \
  -H "Content-Type: application/json" \
  -d '{
    "customer_name": "John Doe",
    "customer_phone": "+855 12 345 678",
    "customer_address": "Phnom Penh",
    "items": [
      {
        "product_id": 1,
        "quantity": 2,
        "price": 25.00
      },
      {
        "product_id": 2,
        "quantity": 1,
        "price": 50.00
      }
    ],
    "payment_method": "cash",
    "paid_amount": 100.00
  }'
```

## ៤. កំណត់ Flutter App

### ៤.១ កំណត់ API URL

បើកឯកសារ `seller_app/lib/config/api_config.dart`:

```dart
// សម្រាប់ Android Emulator
static const String baseUrl = 'http://10.0.2.2:8000/api';

// សម្រាប់ iOS Simulator
// static const String baseUrl = 'http://localhost:8000/api';
```

### ៤.២ ដំណើរការ Flutter App

```bash
cd /Users/sreyleaknem/Desktop/WebApp03/seller_app

# ដំណើរការលើ iOS Simulator
flutter run

# ឬដំណើរការលើ Android Emulator
flutter run
```

## ៥. ដោះស្រាយបញ្ហា

### បញ្ហា: 404 Not Found

**មូលហេតុ:** Routes មិនត្រូវបានចុះបញ្ជី

**ដំណោះស្រាយ:**
```bash
php artisan route:clear
php artisan route:cache
php artisan route:list | grep "api/"
```

### បញ្ហា: CORS Error

**មូលហេតុ:** CORS មិនត្រូវបានកំណត់

**ដំណោះស្រាយ:** បើក `config/cors.php`
```php
return [
    'paths' => ['api/*', 'sanctum/csrf-cookie'],
    'allowed_methods' => ['*'],
    'allowed_origins' => ['*'],
    'allowed_headers' => ['*'],
    'supports_credentials' => false,
];
```

### បញ្ហា: Connection Refused (Android)

**មូលហេតុ:** ប្រើ `localhost` ជំនួសឱ្យ `10.0.2.2`

**ដំណោះស្រាយ:** កំណត់ `api_config.dart`:
```dart
static const String baseUrl = 'http://10.0.2.2:8000/api'; // Android
```

### បញ្ហា: Database Error

**មូលហេតុ:** តារាងមិនមានទិន្នន័យ

**ដំណោះស្រាយ:**
```bash
# ពិនិត្យមើល Database
php artisan tinker

# សាកល្បងទាញទិន្នន័យ
>>> App\Models\Product::count()
>>> App\Models\Sale::count()
```

## ៦. បង្កើតទិន្នន័យសាកល្បង (Optional)

បង្កើត Database Seeder សម្រាប់ទិន្នន័យសាកល្បង៖

```bash
php artisan make:seeder SellerAppSeeder
```

បន្ថែមក្នុង `database/seeders/SellerAppSeeder.php`:

```php
<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Product;
use App\Models\Client;
use App\Models\Sale;
use App\Models\SaleDetail;

class SellerAppSeeder extends Seeder
{
    public function run(): void
    {
        // បង្កើតផលិតផលសាកល្បង
        Product::create([
            'code' => 'PROD001',
            'name' => 'Wireless Headphones',
            'price' => 79.99,
            'cost' => 50.00,
            'stock' => 25,
            'stock_alert' => 5,
            'is_active' => 1,
        ]);

        Product::create([
            'code' => 'PROD002',
            'name' => 'Smart Watch',
            'price' => 149.99,
            'cost' => 100.00,
            'stock' => 15,
            'stock_alert' => 3,
            'is_active' => 1,
        ]);

        // បង្កើតអតិថិជនសាកល្បង
        Client::create([
            'name' => 'John Doe',
            'phone' => '+855 12 345 678',
            'email' => 'john@example.com',
        ]);

        Client::create([
            'name' => 'Jane Smith',
            'phone' => '+855 98 765 432',
            'email' => 'jane@example.com',
        ]);
    }
}
```

រួចរត់៖
```bash
php artisan db:seed --class=SellerAppSeeder
```

## ៧. API Response Format

រាល់ API Responses មានទម្រង់ដូចខាងក្រោម៖

### ជោគជ័យ (Success)
```json
{
  "success": true,
  "data": { ... },
  "message": "Success message"
}
```

### បរាជ័យ (Error)
```json
{
  "success": false,
  "message": "Error message",
  "error": "Detailed error (development only)"
}
```

## ៨. សុវត្ថិភាព (សម្រាប់ Production)

សម្រាប់ Production អ្នកគួរ៖

1. **បន្ថែម Authentication**
   - ប្រើ Laravel Sanctum
   - បន្ថែម middleware `['auth:api', 'Is_Active']`

2. **កំណត់ Rate Limiting**
   ```php
   Route::middleware(['throttle:60,1'])->group(function () {
       // API routes
   });
   ```

3. **ប្រើ HTTPS**
   - ដាក់ SSL Certificate
   - ផ្លាស់ប្តូរ URL ទៅជា `https://`

4. **Validate Input**
   - ត្រួតពិនិត្យទិន្នន័យដែលចូល
   - ការពារ SQL Injection

## ៩. ឯកសារបន្ថែម

- [Laravel API Documentation](https://laravel.com/docs/apis)
- [Laravel Sanctum](https://laravel.com/docs/sanctum)
- [Flutter HTTP Package](https://pub.dev/packages/http)
