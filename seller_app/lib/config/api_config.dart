import 'package:flutter/foundation.dart';

/// API Configuration for Seller App
///
/// កំណត់រចនាសម្ព័ន្ធ API សម្រាប់តភ្ជាប់ Flutter App ជាមួយ Laravel WebApp
class ApiConfig {
  // =====================================================
  // ⚙️ កំណត់ API URL
  // =====================================================

  /// សម្រាប់ **Android Emulator**
  /// ប្រើ 10.0.2.2 ជំនួសឱ្យ localhost
  static const String androidBaseUrl = 'http://10.0.2.2:8000/api';

  /// សម្រាប់ **iOS Simulator**
  /// ប្រើ localhost ឬ 127.0.0.1
  static const String iosBaseUrl = 'http://localhost:8000/api';

  /// សម្រាប់ **Physical Device** (ទូរស័ព្ទជាក់ស្តែង)
  /// ប្រើ IP Address របស់កុំព្យូទ័រអ្នក
  /// ឧទាហរណ៍: http://192.168.1.100:8000/api
  static const String deviceBaseUrl = 'http://10.0.2.2:8000/api';

  /// សម្រាប់ **Production** (Server ជាក់ស្តែង)
  /// ប្រើ HTTPS និង Domain ឈ្មោះ
  static const String productionUrl =
      'http://194.233.78.110/api'; // TODO: ប្តូរទៅជា Domain ពិតរបស់អ្នកនៅទីនេះ

  // =====================================================
  // 🎯 ជ្រើសរើស URL ដែលត្រូវប្រើ
  // =====================================================

  /// អនុញ្ញាតឱ្យ override តាម `--dart-define=SELLER_APP_BASE_URL=...`
  static const String _configuredBaseUrl = String.fromEnvironment(
    'SELLER_APP_BASE_URL',
    defaultValue: '',
  );

  /// ជ្រើសរើស URL តាម platform ដោយស្វ័យប្រវត្តិ
  static String get baseUrl {
    if (_configuredBaseUrl.isNotEmpty) {
      return _configuredBaseUrl;
    }

    // ប្រើ production URL ដោយស្វ័យប្រវត្តិនៅពេល Build សម្រាប់ Play Store / App Store (Release mode)
    if (kReleaseMode) {
      return productionUrl;
    }

    switch (defaultTargetPlatform) {
      case TargetPlatform.iOS:
      case TargetPlatform.macOS:
        return iosBaseUrl;
      case TargetPlatform.android:
        return androidBaseUrl;
      default:
        return iosBaseUrl;
    }
  }

  // =====================================================
  // 📡 API Endpoints
  // =====================================================

  /// Dashboard
  static const String dashboard = '/dashboard/seller';
  static const String chartData = '/dashboard/chart-data';

  /// Settings
  static const String settings = '/settings';

  /// Products
  static const String products = '/seller/products';
  static const String categories = '/seller/categories';
  static const String brands = '/brands';
  static const String warehouses = '/seller/warehouses';

  /// Reports
  static const String salesBySellerReport = '/report/sales_by_seller_mobile';

  /// Orders/Sales
  static const String orders = '/orders';
  static const String salesStats = '/sales/stats';
  static const String salesReturns = '/seller/sales-returns';
  static const String returnableSales = '/seller/sales-returns/sales';

  /// Authentication (សម្រាប់ Production)
  static const String login = '/login';
  static const String register = '/register';
  static const String logout = '/logout';

  /// Profile
  static const String profile = '/profile';

  // =====================================================
  // ⏱️ Timeout & Retry Settings
  // =====================================================

  /// ពេលវេលារង់ចាំអតិបរមា (វិនាទី)
  static const int timeoutSeconds = 30;

  /// ចំនួនដងសាកល្បងឡើងវិញ
  static const int retryAttempts = 3;

  /// ពេលវេលារង់ចាំមុនពេលសាកល្បងឡើងវិញ (វិនាទី)
  static const int retryDelaySeconds = 2;

  // =====================================================
  // 🔐 Headers (សម្រាប់ Production)
  // =====================================================

  /// ទម្រង់ Content-Type
  static const Map<String, String> jsonHeaders = {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
  };

  /// បន្ថែម Authorization Token (បើមាន)
  static Map<String, String> getHeaders({String? token}) {
    final headers = {...jsonHeaders};
    if (token != null && token.isNotEmpty) {
      headers['Authorization'] = 'Bearer $token';
    }
    return headers;
  }

  // =====================================================
  // 🔍 Helper Methods
  // =====================================================

  /// បង្កើត URL ពេញលេញពី endpoint
  static String getUrl(String endpoint) {
    // លុប / ចេញពីដើម endpoint បើមាន
    final cleanEndpoint = endpoint.startsWith('/')
        ? endpoint.substring(1)
        : endpoint;

    // តភ្ជាប់ baseUrl + endpoint
    return baseUrl.endsWith('/')
        ? '$baseUrl$cleanEndpoint'
        : '$baseUrl/$cleanEndpoint';
  }

  /// ពិនិត្យមើលថាតើ API អាចប្រើបានឬអត់
  static bool get isConfigured {
    return baseUrl.isNotEmpty &&
        !baseUrl.contains('YOUR_IP_ADDRESS') &&
        baseUrl != 'https://your-domain.com/api';
  }

  /// ទទួលបាន Platform បច្ចុប្បន្ន
  static String get currentPlatform {
    if (_configuredBaseUrl.isNotEmpty) return 'Custom';
    if (baseUrl == androidBaseUrl) return 'Android';
    if (baseUrl == iosBaseUrl) return 'iOS Simulator';
    if (baseUrl == productionUrl) return 'Production';
    return 'Physical Device';
  }
}
