# 📱 Flutter App API Configuration Guide

## ✅ អ្វីដែលបានអាប់ដេត

### ១. ឯកសារដែលបានផ្លាស់ប្តូរ

| ឯកសារ | ការផ្លាស់ប្តូរ |
|--------|----------------|
| `lib/config/api_config.dart` | ✅ បន្ថែមជម្រើស URL សម្រាប់គ្រប់ Platform |
| `lib/models/product.dart` | ✅ គាំទ្រ Laravel API Response |
| `lib/screens/home_screen.dart` | ✅ បង្ហាញ API Connection Status |

### ២. API URL Options

```dart
// ជម្រើសទី ១: Android Emulator (លំនាំដើម)
static const String baseUrl = androidBaseUrl; // http://10.0.2.2:8000/api

// ជម្រើសទី ២: iOS Simulator
// static const String baseUrl = iosBaseUrl; // http://localhost:8000/api

// ជម្រើសទី ៣: Physical Device
// static const String baseUrl = deviceBaseUrl; // http://YOUR_IP:8000/api

// ជម្រើសទី ៤: Production Server
// static const String baseUrl = productionUrl; // https://your-domain.com/api
```

## 🚀 របៀបកំណត់

### សម្រាប់ Android Emulator

1. បើក `lib/config/api_config.dart`
2. ធានាថាបន្ទាត់ខាងក្រោមមិនមាន comment៖
```dart
static const String baseUrl = androidBaseUrl;
```
3. បិទបន្ទាត់ផ្សេងៗទៀតដោយ `//`

### សម្រាប់ iOS Simulator

1. បើក `lib/config/api_config.dart`
2. បិទ Android URL:
```dart
// static const String baseUrl = androidBaseUrl;
```
3. បើក iOS URL:
```dart
static const String baseUrl = iosBaseUrl;
```

### សម្រាប់ Physical Device (ទូរស័ព្ទជាក់ស្តែង)

1. រក IP Address របស់កុំព្យូទ័រអ្នក៖
   ```bash
   # macOS/Linux
   ifconfig | grep "inet "
   
   # Windows
   ipconfig
   ```
   
2. កំណត់ក្នុង `api_config.dart`:
```dart
static const String deviceBaseUrl = 'http://192.168.1.100:8000/api'; // ផ្លាស់ប្តូរ IP
static const String baseUrl = deviceBaseUrl;
```

### សម្រាប់ Production Server

```dart
static const String productionUrl = 'https://your-domain.com/api';
static const String baseUrl = productionUrl;
```

## 📊 ពិនិត្យមើល API Connection

បន្ទាប់ពីកំណត់រួច អ្នកអាចពិនិត្យមើលការតភ្ជាប់បាន៖

### ក្នុងកម្មវិធី

1. បើកកម្មវិធី
2. មើលផ្នែកខាងលើនៃ Dashboard
3. បើឃើញ **🟢 API Ready** = តភ្ជាប់បាន
4. បើឃើញ **🔴 No API** = មិនទាន់តភ្ជាប់

### សាកល្បងដោយដៃ

ចុចលើរូប **☁️ Cloud Icon** នៅលើស្តាំដើម្បី Refresh ការតភ្ជាប់។

## 🔧 ដោះស្រាយបញ្ហា

### ❌ បញ្ហា: "No API" ឬ "API Not Configured"

**មូលហេតុ:**
- URL មិនត្រឹមត្រូវ
- Laravel Server មិនដំណើរការ
- Firewall រារាំងការតភ្ជាប់

**ដំណោះស្រាយ:**
1. ពិនិត្យមើល `baseUrl` ក្នុង `api_config.dart`
2. ធានាថា Laravel Server កំពុងដំណើរការ:
   ```bash
   cd /Users/sreyleaknem/Desktop/WebApp03
   php artisan serve
   ```
3. សាកល្បងចូល URL តាម Browser:
   - Android: `http://10.0.2.2:8000/api/dashboard/seller`
   - iOS: `http://localhost:8000/api/dashboard/seller`

### ❌ បញ្ហា: Connection Timeout

**មូលហេតុ:**
- Network យឺត
- Server ឆ្លើយតបយូរ

**ដំណោះស្រាយ:**
1. បង្កើន timeout ក្នុង `api_config.dart`:
```dart
static const int timeoutSeconds = 60; // ពី 30 ទៅ 60
```

### ❌ បញ្ហា: 404 Not Found

**មូលហេតុ:**
- API Routes មិនមាន
- URL មិនត្រឹមត្រូវ

**ដំណោះស្រាយ:**
1. សាកល្បង API ដោយផ្ទាល់:
   ```bash
   curl http://localhost:8000/api/dashboard/seller
   ```
2. ពិនិត្យមើល `routes/api.php` ថាតើ Routes មានឬអត់

## 📱 ការប្រើប្រាស់ក្នុងកូដ

### ទាញទិន្នន័យពី API

```dart
import 'package:seller_app/config/api_config.dart';
import 'package:seller_app/services/api_service.dart';

// បង្កើត API Service
final apiService = ApiService();

// ទាញទិន្នន័យ Dashboard
try {
  final dashboardData = await apiService.getDashboardData();
  print('Total Sales: ${dashboardData['sales']['total']}');
} catch (e) {
  print('Error: $e');
}
```

### បង្កើត URL

```dart
// វិធីទី ១: ប្រើ Helper Method
final url = ApiConfig.getUrl('/products');
// លទ្ធផល: http://10.0.2.2:8000/api/products

// វិធីទី ២: ប្រើ baseUrl + endpoint
final url = '${ApiConfig.baseUrl}/orders';
```

### បន្ថែម Authentication Token

```dart
// សម្រាប់ Production (មាន Token)
final headers = ApiConfig.getHeaders(token: 'your-jwt-token');

// លទ្ធផល:
// {
//   'Content-Type': 'application/json',
//   'Accept': 'application/json',
//   'Authorization': 'Bearer your-jwt-token'
// }
```

## 🎯 API Endpoints ដែលអាចប្រើបាន

| Endpoint | Method | ការពិពណ៌នា |
|----------|--------|-------------|
| `/dashboard/seller` | GET | ទាញទិន្នន័យ Dashboard |
| `/dashboard/chart-data` | GET | ទាញទិន្នន័យ Chart |
| `/products` | GET | ទាញទិន្នន័យផលិតផល |
| `/products/{id}` | GET | ទាញទិន្នន័យផលិតផលតាម ID |
| `/products` | POST | បង្កើតផលិតផល |
| `/products/{id}` | PUT | កែផលិតផល |
| `/products/{id}` | DELETE | លុបផលិតផល |
| `/categories` | GET | ទាញទិន្នន័យប្រភេទ |
| `/orders` | GET | ទាញទិន្នន័យការកុម្ម៉ង់ |
| `/orders` | POST | បង្កើតការកុម្ម៉ង់ (POS) |
| `/sales/stats` | GET | ទាញទិន្នន័យស្ថិតិលក់ |

## 🧪 សាកល្បង API

### ១. ចាប់ផ្តើម Laravel Server

```bash
cd /Users/sreyleaknem/Desktop/WebApp03
php artisan serve
```

### ២. សាកល្បងតាម Browser/cURL

```bash
# Dashboard
curl http://localhost:8000/api/dashboard/seller | python3 -m json.tool

# Products (ត្រូវការ Auth)
curl http://localhost:8000/api/products

# Orders
curl http://localhost:8000/api/orders
```

### ៣. ដំណើរការ Flutter App

```bash
cd /Users/sreyleaknem/Desktop/WebApp03/seller_app

# iOS Simulator
flutter run

# Android Emulator
flutter run
```

## 📖 ឯកសារបន្ថែម

- `README_KH.md` - សង្ខេបគម្រោងជាភាសាខ្មែរ
- `LARAVEL_API_SETUP.md` - ការណែនាំ Laravel API
- `API_INTEGRATION.md` - Flutter Integration Guide

## 💡 គន្លឹះ

1. **ពិនិត្យមើល Log** បើមានបញ្ហា:
   ```bash
   # Laravel Log
   tail -f /Users/sreyleaknem/Desktop/WebApp03/storage/logs/laravel.log
   
   # Flutter Log
   flutter run --verbose
   ```

2. **Clear Cache** បើមានបញ្ហា:
   ```bash
   # Laravel
   php artisan cache:clear
   php artisan config:clear
   
   # Flutter
   flutter clean
   flutter pub get
   ```

3. **Hot Reload** កំឡុងពេលអភិវឌ្ឍន៍:
   - ចុច `r` ក្នុង Terminal ដើម្បី Hot Reload
   - ចុច `R` ដើម្បី Hot Restart

## 🎉 ជោគជ័យ!

បើអ្នកឃើញ **🟢 API Ready** នោះអ្នកបានកំណត់រួចរាល់ហើយ! អ្នកអាចចាប់ផ្តើមប្រើប្រាស់កម្មវិធីបាន។
