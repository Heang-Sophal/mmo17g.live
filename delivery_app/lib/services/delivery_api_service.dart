import 'dart:convert';

import 'package:delivery_app/config/api_config.dart';
import 'package:http/http.dart' as http;

class DeliveryApiService {
  DeliveryApiService({http.Client? client}) : _client = client ?? http.Client();

  final http.Client _client;
  String? _token;

  void setToken(String? token) {
    _token = token;
  }

  Future<Map<String, dynamic>> getDashboard() async {
    final data = await _get(ApiConfig.dashboard);
    return (data['data'] as Map?)?.cast<String, dynamic>() ?? {};
  }

  Future<List<Map<String, dynamic>>> getOrders({
    String? status,
    String? search,
  }) async {
    final uri = Uri.parse(ApiConfig.orders).replace(
      queryParameters: <String, String>{
        if (status != null && status.isNotEmpty && status != 'all')
          'status': status,
        if (search != null && search.trim().isNotEmpty) 'search': search.trim(),
      },
    );

    final data = await _getUri(uri);
    final list = (data['data'] as List?) ?? const [];
    return list.map((item) => Map<String, dynamic>.from(item as Map)).toList();
  }

  Future<List<Map<String, dynamic>>> getAlerts() async {
    final data = await _get(ApiConfig.alerts);
    final list = (data['data'] as List?) ?? const [];
    return list.map((item) => Map<String, dynamic>.from(item as Map)).toList();
  }

  Future<Map<String, dynamic>> getProfile() async {
    final data = await _get(ApiConfig.profile);
    return (data['data'] as Map?)?.cast<String, dynamic>() ?? {};
  }

  Future<Map<String, dynamic>> updateProfile(
    Map<String, dynamic> profileData,
  ) async {
    return _put(ApiConfig.profile, body: profileData);
  }

  Future<Map<String, dynamic>> changePassword({
    required String currentPassword,
    required String newPassword,
    required String confirmPassword,
  }) async {
    return _post(
      '${ApiConfig.profile}/change-password',
      body: {
        'current_password': currentPassword,
        'new_password': newPassword,
        'new_password_confirmation': confirmPassword,
      },
    );
  }

  Future<void> markAlertAsRead(String alertId) async {
    await _post('${ApiConfig.alerts}/$alertId/read');
  }

  Future<void> markAllAlertsAsRead() async {
    await _post('${ApiConfig.alerts}/read-all');
  }

  Future<Map<String, dynamic>> acceptOrder(String orderId) async {
    final data = await _post(ApiConfig.acceptOrder(orderId));
    return (data['data'] as Map?)?.cast<String, dynamic>() ?? {};
  }

  Future<Map<String, dynamic>> completeOrder(String orderId) async {
    final data = await _post(ApiConfig.completeOrder(orderId));
    return (data['data'] as Map?)?.cast<String, dynamic>() ?? {};
  }

  /// Ask backend to send notifications related to an order action (optional)
  Future<void> notifyOrderAction(String orderId, String action,
      {Map<String, dynamic>? extra}) async {
    final body = <String, dynamic>{'action': action};
    if (extra != null) body.addAll(extra);

    await _post('${ApiConfig.orders}/$orderId/notify', body: body);
  }

  Future<Map<String, dynamic>> updateShipping(
    String orderId,
    double shipping,
  ) async {
    final data = await _post(
      ApiConfig.updateShipping(orderId),
      body: {'shipping': shipping},
    );
    return (data['data'] as Map?)?.cast<String, dynamic>() ?? {};
  }

  Future<Map<String, dynamic>> _get(String url) async {
    return _getUri(Uri.parse(url));
  }

  Future<Map<String, dynamic>> _getUri(Uri uri) async {
    final response = await _client
        .get(uri, headers: ApiConfig.jsonHeaders(token: _token))
        .timeout(const Duration(seconds: ApiConfig.timeoutSeconds));

    return _decodeAndValidate(response);
  }

  Future<Map<String, dynamic>> _post(
    String url, {
    Map<String, dynamic>? body,
  }) async {
    final response = await _client
        .post(
          Uri.parse(url),
          headers: ApiConfig.jsonHeaders(token: _token),
          body: body == null ? null : jsonEncode(body),
        )
        .timeout(const Duration(seconds: ApiConfig.timeoutSeconds));

    return _decodeAndValidate(response);
  }

  Future<Map<String, dynamic>> _put(
    String url, {
    Map<String, dynamic>? body,
  }) async {
    final response = await _client
        .put(
          Uri.parse(url),
          headers: ApiConfig.jsonHeaders(token: _token),
          body: body == null ? null : jsonEncode(body),
        )
        .timeout(const Duration(seconds: ApiConfig.timeoutSeconds));

    return _decodeAndValidate(response);
  }

  Map<String, dynamic> _decodeAndValidate(http.Response response) {
    final data = response.body.isEmpty
        ? <String, dynamic>{}
        : (jsonDecode(response.body) as Map<String, dynamic>);

    if (response.statusCode >= 200 &&
        response.statusCode < 300 &&
        data['success'] != false) {
      return data;
    }

    throw ApiException(
      data['message']?.toString() ?? 'Request failed',
      response.statusCode,
    );
  }
}

class ApiException implements Exception {
  ApiException(this.message, this.statusCode);

  final String message;
  final int statusCode;

  @override
  String toString() => 'ApiException($statusCode, $message)';
}
