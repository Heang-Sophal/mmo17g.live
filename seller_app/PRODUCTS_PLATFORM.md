# 🛍️ Products Platform - ការដំណើរការ និងប្រើប្រាស់

## ✅ មុខងារដែលបានអាប់ដេត

### ១. ទាញទិន្នន័យពី Laravel API

Products Screen ឥឡូវអាច៖
- ✅ ទាញទិន្នន័យផលិតផលពី Laravel API
- ✅ បង្ហាញ Loading State ពេលកំពុងទាញទិន្នន័យ
- ✅ Refresh ទិន្នន័យដោយចុចប៊ូតុង
- ✅ ចម្រាញ់តាម Category ដោយស្វ័យប្រវត្តិ
- ✅ ស្វែងរកផលិតផលតាមឈ្មោះ ឬកូដ

### ២. ឯកសារដែលបានផ្លាស់ប្តូរ

| ឯកសារ | ការផ្លាស់ប្តូរ |
|--------|----------------|
| `lib/screens/products_screen.dart` | ✅ ប្រើ Provider + API |
| `lib/providers/product_provider.dart` | ✅ ទាញទិន្នន័យពី API |
| `lib/repositories/repository.dart` | ✅ ភ្ជាប់ជាមួយ ApiService |
| `lib/models/product.dart` | ✅ គាំទ្រ Laravel API Response |

## 🚀 របៀបដំណើរការ

### ជំហានទី ១: ចាប់ផ្តើម Laravel Server

```bash
cd /Users/sreyleaknem/Desktop/WebApp03
php artisan serve
```

Server នឹងដំណើរការនៅ `http://localhost:8000`

### ជំហានទី ២: កំណត់ Flutter API URL

បើក `lib/config/api_config.dart`:

```dart
// សម្រាប់ iOS Simulator (ដែលអ្នកកំពុងប្រើ)
static const String baseUrl = iosBaseUrl; // http://localhost:8000/api

// សម្រាប់ Android Emulator
// static const String baseUrl = androidBaseUrl; // http://10.0.2.2:8000/api
```

### ជំហានទី ៣: ដំណើរការ Flutter App

```bash
cd /Users/sreyleaknem/Desktop/WebApp03/seller_app

# ដំណើរការលើ iOS Simulator
flutter run

# ឬដំណើរការលើ Android Emulator
# flutter run
```

### ជំហានទី ៤: ចូលទៅកាន់ Products Tab

1. បើកកម្មវិធី
2. ចុចលើ **Products** (ផ្ទាំងទី ៣ ខាងក្រោម)
3. រង់ចាំទិន្នន័យផ្ទុក (បើឃើញ Loading)
4. មើលផលិតផលពី Laravel WebApp!

## 📊 មុខងារក្នុង Products Screen

### ១. ស្វែងរកផលិតផល

- វាយឈ្មោះ ឬកូដផលិតផលក្នុងប្រអប់ស្វែងរក
- លទ្ធផលនឹងបង្ហាញភ្លាមៗ

### ២. ចម្រាញ់តាម Category

- ចុចលើ Category Chip (All, Electronics, Clothing, etc.)
- Categories នឹងបង្ហាញដោយស្វ័យប្រវត្តិតាមទិន្នន័យជាក់ស្តែង

### ៣. Refresh ទិន្នន័យ

- ចុចលើរូប **🔄 Refresh** នៅស្តាំដើម
- ទិន្នន័យនឹងអាប់ដេតពី Server

### ៤. បន្ថែមផលិតផល

- ចុច **Add Product** (ផ្ទាំងខាងស្តាំក្រោម)
- បំពេញព័ត៌មានផលិតផល
- ចុច Save

### ៥. មើល/កែ/លុប ផលិតផល

- ចុចលើផលិតផលដើម្បីមើលព័ត៌មានលម្អិត
- ចុច **⋮** (Menu) ដើម្បីកែ ឬលុប

## 🎯 ទិន្នន័យដែលបង្ហាញ

### ព័ត៌មានផលិតផលនីមួយៗ

| ព័ត៌មាន | ប្រភព |
|----------|--------|
| **ឈ្មោះ** | `products.name` |
| **កូដ** | `products.code` |
| **តម្លៃ** | `products.price` |
| **ស្តុក** | `product_warehouse.qte` |
| **រូបភាព** | `products.image` |
| **ប្រភេទ** | `categories.name` |
| **ម៉ាក** | `brands.name` |

## 🔄 ដំណើរការទាញទិន្នន័យ

```
Flutter App
    ↓
ProductProvider
    ↓
ProductRepository
    ↓
ApiService
    ↓
Laravel API (http://localhost:8000/api/products)
    ↓
ProductsApiController
    ↓
Database (products, product_warehouse, categories, brands)
```

## 🧪 សាកល្បង API ដោយផ្ទាល់

### ១. ទាញទិន្នន័យផលិតផល

```bash
curl http://localhost:8000/api/products | python3 -m json.tool
```

### ២. ទាញទិន្នន័យតាម Category

```bash
curl "http://localhost:8000/api/products?category_id=1" | python3 -m json.tool
```

### ៣. ស្វែងរកផលិតផល

```bash
curl "http://localhost:8000/api/products?search=Flovi" | python3 -m json.tool
```

## ⚠️ ដោះស្រាយបញ្ហា

### បញ្ហា: ផលិតផលមិនបង្ហាញ (ទទេ)

**មូលហេតុ:**
- Laravel Server មិនដំណើរការ
- API URL មិនត្រឹមត្រូវ
- គ្មានទិន្នន័យក្នុង Database

**ដំណោះស្រាយ:**
1. ពិនិត្យ Laravel Server:
   ```bash
   php artisan serve
   ```

2. សាកល្បង API ដោយផ្ទាល់:
   ```bash
   curl http://localhost:8000/api/products
   ```

3. ពិនិត្យទិន្នន័យក្នុង Database:
   ```bash
   php artisan tinker
   >>> App\Models\Product::count()
   ```

### បញ្ហា: Loading យូរពេក

**មូលហេតុ:**
- Network យឺត
- Server ឆ្លើយតបយូរ
- ទិន្នន័យច្រើនពេក

**ដំណោះស្រាយ:**
1. បង្កើន Timeout:
   ```dart
   // lib/config/api_config.dart
   static const int timeoutSeconds = 60;
   ```

2. បន្ថែម Pagination (បើទិន្នន័យច្រើន)

### បញ្ហា: Stock មិនត្រឹមត្រូវ

**មូលហេតុ:**
- ប្រើ `product_warehouse` តារាង
- មិនមានទិន្នន័យក្នុង `product_warehouse`

**ដំណោះស្រាយ:**
1. ពិនិត្យទិន្នន័យក្នុង `product_warehouse`:
   ```sql
   SELECT * FROM product_warehouse WHERE product_id = 1;
   ```

2. បើគ្មានទិន្នន័យ ត្រូវបង្កើត៖
   ```sql
   INSERT INTO product_warehouse (product_id, warehouse_id, qte)
   VALUES (1, 1, 100);
   ```

## 📱 រូបភាពកម្មវិធី

### Products Screen Layout

```
┌─────────────────────────────────┐
│  Products           🔄  🎚️     │ ← AppBar
├─────────────────────────────────┤
│  🔍 Search products...          │ ← Search Bar
├─────────────────────────────────┤
│  [All] [Electronics] [Clothing] │ ← Category Filter
├─────────────────────────────────┤
│  ┌──────┐  ┌──────┐            │
│  │ IMG  │  │ IMG  │            │
│  │Name  │  │Name  │            │
│  │$10.00│  │$10.00│            │ ← Product Grid
│  │📦 25 │  │📦 25 │            │
│  └──────┘  └──────┘            │
│  ┌──────┐  ┌──────┐            │
│  │ IMG  │  │ IMG  │            │
│  │ ...  │  │ ...  │            │
│  └──────┘  └──────┘            │
└─────────────────────────────────┘
         ┌──────────┐
         │ ➕ Add   │ ← FAB
         └──────────┘
```

## 💡 គន្លឹះ

1. **ប្រើ Hot Reload** កំឡុងពេលអភិវឌ្ឍន៍:
   - ចុច `r` ក្នុង Terminal
   - មិនបាច់ចាប់ផ្តើមកម្មវិធីថ្មី

2. **ពិនិត្យមើល Logs**:
   ```bash
   # Flutter Logs
   flutter run --verbose
   
   # Laravel Logs
   tail -f storage/logs/laravel.log
   ```

3. **Clear Cache** បើមានបញ្ហា:
   ```bash
   # Laravel
   php artisan cache:clear
   php artisan config:clear
   
   # Flutter
   flutter clean
   flutter pub get
   ```

## 🎉 ជោគជ័យ!

បើអ្នកឃើញផលិតផលពី Laravel WebApp នោះអ្នកបានដំណើរការ Products Platform បានជោគជ័យហើយ!

## 📖 ឯកសារបន្ថែម

- `README_KH.md` - សង្ខេបគម្រោង
- `API_CONFIGURATION.md` - API Configuration Guide
- `LARAVEL_API_SETUP.md` - Laravel API Setup
