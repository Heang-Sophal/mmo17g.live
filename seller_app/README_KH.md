# សង្ខេបការដំឡើង Laravel API សម្រាប់ Seller App

## ✅ អ្វីដែលបានបង្កើតរួច

### ១. Laravel API Controllers (៣)

| Controller | ទីតាំង | មុខងារ |
|------------|---------|--------|
| **ProductsApiController** | `app/Http/Controllers/Api/` | គ្រប់គ្រងផលិតផល |
| **SalesApiController** | `app/Http/Controllers/Api/` | គ្រប់គ្រងការលក់/កុម្ម៉ង់ |
| **DashboardApiController** | `app/Http/Controllers/Api/` | ទិន្នន័យ Dashboard |

### ២. API Endpoints (១៥)

#### Dashboard
```
GET /api/dashboard/seller      # ទិន្នន័យ Dashboard សម្រាប់ Seller
GET /api/dashboard/chart-data  # ទិន្នន័យ Chart
```

#### Products
```
GET    /api/products           # ទាញទិន្នន័យផលិតផលទាំងអស់
GET    /api/products/{id}      # ទាញទិន្នន័យផលិតផលតាម ID
POST   /api/products           # បង្កើតផលិតផលថ្មី
PUT    /api/products/{id}      # កែផលិតផល
DELETE /api/products/{id}      # លុបផលិតផល
GET    /api/categories         # ទាញទិន្នន័យប្រភេទ
GET    /api/brands             # ទាញទិន្នន័យម៉ាក
GET    /api/warehouses         # ទាញទិន្នន័យឃ្លាំង
```

#### Orders/Sales
```
GET    /api/orders             # ទាញទិន្នន័យការកុម្ម៉ង់
GET    /api/orders/{id}        # ទាញទិន្នន័យការកុម្ម៉ង់តាម ID
POST   /api/orders             # បង្កើតការកុម្ម៉ង់ថ្មី (POS)
PUT    /api/orders/{id}/status # អាប់ដេតស្ថានភាព
GET    /api/sales/stats        # ទិន្នន័យស្ថិតិលក់
```

### ៣. Flutter Integration

#### ឯកសារដែលបានអាប់ដេត
- `lib/config/api_config.dart` - កំណត់ API URL
- `lib/services/api_service.dart` - HTTP Client
- `lib/models/product.dart` - Support Laravel API format
- `lib/models/order.dart` - Support Laravel API format

## 🚀 របៀបប្រើប្រាស់

### ជំហានទី ១: ចាប់ផ្តើម Laravel Server

```bash
cd /Users/sreyleaknem/Desktop/WebApp03
php artisan serve
```

Server នឹងដំណើរការនៅ `http://localhost:8000`

### ជំហានទី ២: សាកល្បង API

```bash
# ទាញទិន្នន័យផលិតផល
curl http://localhost:8000/api/products

# ទាញទិន្នន័យ Dashboard
curl http://localhost:8000/api/dashboard/seller

# ទាញទិន្នន័យការកុម្ម៉ង់
curl http://localhost:8000/api/orders
```

### ជំហានទី ៣: កំណត់ Flutter App

បើក `seller_app/lib/config/api_config.dart`:

```dart
// សម្រាប់ Android Emulator
static const String baseUrl = 'http://10.0.2.2:8000/api';

// សម្រាប់ iOS Simulator (បើក comment)
// static const String baseUrl = 'http://localhost:8000/api';
```

### ជំហានទី ៤: ដំណើរការ Flutter App

```bash
cd /Users/sreyleaknem/Desktop/WebApp03/seller_app
flutter run
```

## 📊 ទិន្នន័យដែល API ផ្តល់

### Dashboard Response
```json
{
  "success": true,
  "data": {
    "sales": {
      "total": 12450.00,
      "today": 350.00,
      "week": 2100.00,
      "month": 8500.00
    },
    "orders": {
      "total": 1234,
      "today": 23,
      "pending": 15,
      "completed": 1200
    },
    "products": {
      "total": 85,
      "low_stock": 12,
      "out_of_stock": 3
    },
    "top_products": [...],
    "recent_orders": [...]
  }
}
```

### Products Response
```json
{
  "success": true,
  "data": [
    {
      "id": 1,
      "code": "PROD001",
      "name": "Wireless Headphones",
      "price": 79.99,
      "stock": 25,
      "image_url": "http://...",
      "category": {"id": 1, "name": "Electronics"},
      "created_at": "2024-01-01T00:00:00"
    }
  ]
}
```

### Create Order (POS)
```bash
curl -X POST http://localhost:8000/api/orders \
  -H "Content-Type: application/json" \
  -d '{
    "customer_name": "John Doe",
    "customer_phone": "+855 12 345 678",
    "items": [
      {"product_id": 1, "quantity": 2, "price": 25.00}
    ],
    "payment_method": "cash",
    "paid_amount": 50.00
  }'
```

## 🔧 ដោះស្រាយបញ្ហា

| បញ្ហា | ដំណោះស្រាយ |
|--------|-------------|
| 404 Not Found | `php artisan route:clear` |
| CORS Error | កំណត់ `config/cors.php` |
| Connection Refused (Android) | ប្រើ `10.0.2.2` ជំនួស `localhost` |
| Database Error | ពិនិត្យ `.env` និង Database |

## 📖 ឯកសារបន្ថែម

- `LARAVEL_API_SETUP.md` - ការណែនាំលម្អិត
- `API_INTEGRATION.md` - Flutter Integration Guide

## ✨ មុខងារដែលគាំទ្រ

✅ ទាញទិន្នន័យផលិតផលពី WebApp
✅ ទាញទិន្នន័យការកុម្ម៉ង់ពី WebApp
✅ បង្កើតការកុម្ម៉ង់ថ្មី (POS)
✅ អាប់ដេតស្តុកដោយស្វ័យប្រវត្តិ
✅ ទិន្នន័យ Dashboard Real-time
✅ គាំទ្រ Categories, Brands, Warehouses
✅ គាំទ្រ Search & Filter

## 🔐 សុវត្ថិភាព (Production)

សម្រាប់ Production ត្រូវ៖
1. បន្ថែម Laravel Sanctum Authentication
2. ប្រើ HTTPS
3. កំណត់ Rate Limiting
4. បន្ថែម Middleware `['auth:api', 'Is_Active']`
