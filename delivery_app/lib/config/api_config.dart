import 'dart:io';

class ApiConfig {
  static const String androidEmulatorBaseUrl = 'http://10.0.2.2:8000/api';
  static const String iosSimulatorBaseUrl = 'http://127.0.0.1:8000/api';
  static const String productionBaseUrl = 'https://mmo17g.store/api';
  static const String envBaseUrl = String.fromEnvironment('API_BASE_URL');
  static const bool isProductBuild = bool.fromEnvironment('dart.vm.product');

  static String get baseUrl {
    if (envBaseUrl.isNotEmpty) {
      return _normalizeBaseUrl(envBaseUrl);
    }

    if (isProductBuild) {
      return productionBaseUrl;
    }

    if (Platform.isIOS) {
      return iosSimulatorBaseUrl;
    }

    return androidEmulatorBaseUrl;
  }

  static String _normalizeBaseUrl(String url) {
    final trimmed = url.trim().replaceFirst(RegExp(r'/+$'), '');
    return trimmed.endsWith('/api') ? trimmed : '$trimmed/api';
  }

  static const int timeoutSeconds = 20;

  static String get deliveryLogin => '$baseUrl/auth/delivery/login';
  static String get deliveryCheck => '$baseUrl/auth/delivery/check';
  static String get logout => '$baseUrl/auth/logout';
  static String get dashboard => '$baseUrl/delivery/dashboard';
  static String get orders => '$baseUrl/delivery/orders';
  static String get alerts => '$baseUrl/delivery/alerts';
  static String get profile => '$baseUrl/profile';

  static String acceptOrder(String orderId) => '$orders/$orderId/accept';
  static String completeOrder(String orderId) => '$orders/$orderId/complete';
  static String updateShipping(String orderId) => '$orders/$orderId/shipping';

  static Map<String, String> jsonHeaders({String? token}) {
    final headers = <String, String>{
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    };

    if (token != null && token.isNotEmpty) {
      headers['Authorization'] = 'Bearer $token';
    }

    return headers;
  }
}
