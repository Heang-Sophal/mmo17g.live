import 'dart:convert';
import 'dart:io';

import 'package:delivery_app/config/api_config.dart';
import 'package:delivery_app/core/api_cache.dart';
import 'package:http/http.dart' as http;

class DeliveryApiService {
  DeliveryApiService({http.Client? client}) : _client = client ?? http.Client();

  final http.Client _client;
  String? _token;

  void setToken(String? token) {
    _token = token;
  }

  Future<Map<String, dynamic>> getDashboard() async {
    final data = await _get(
      ApiConfig.dashboard,
      cacheKey: 'delivery_dashboard',
    );
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

    final data = await _getUri(
      uri,
      cacheKey:
          'delivery_orders_${_cacheSegment(status)}_${_cacheSegment(search)}',
    );
    final list = (data['data'] as List?) ?? const [];
    return list.map((item) => Map<String, dynamic>.from(item as Map)).toList();
  }

  Future<List<Map<String, dynamic>>> getAlerts() async {
    final data = await _get(ApiConfig.alerts, cacheKey: 'delivery_alerts');
    final list = (data['data'] as List?) ?? const [];
    return list.map((item) => Map<String, dynamic>.from(item as Map)).toList();
  }

  Future<Map<String, dynamic>> getProfile() async {
    final data = await _get(ApiConfig.profile, cacheKey: 'delivery_profile');
    return (data['data'] as Map?)?.cast<String, dynamic>() ?? {};
  }

  Future<Map<String, dynamic>> updateProfile(
    Map<String, dynamic> profileData,
  ) async {
    final data = await _put(ApiConfig.profile, body: profileData);
    await ApiCache.clearAll();
    return data;
  }

  Future<Map<String, dynamic>> uploadProfilePhoto(File photo) async {
    try {
      final request = http.MultipartRequest(
        'POST',
        Uri.parse('${ApiConfig.baseUrl}/profile/upload-photo'),
      );

      if (_token != null) {
        request.headers['Authorization'] = 'Bearer $_token';
        request.headers['Accept'] = 'application/json';
      }

      request.files.add(await http.MultipartFile.fromPath('photo', photo.path));

      final streamedResponse = await request.send().timeout(
        const Duration(seconds: ApiConfig.timeoutSeconds),
      );

      final response = await http.Response.fromStream(streamedResponse);
      final data = _decodeAndValidate(response);
      await ApiCache.clearAll();
      return data;
    } catch (e) {
      if (e is ApiException) rethrow;
      throw ApiException('Upload error: ${e.toString()}', 0);
    }
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
    await ApiCache.clearAll();
  }

  Future<void> markAllAlertsAsRead() async {
    await _post('${ApiConfig.alerts}/read-all');
    await ApiCache.clearAll();
  }

  Future<Map<String, dynamic>> acceptOrder(
    String orderId, {
    bool recordMode = false,
  }) async {
    final data = await _post(
      ApiConfig.acceptOrder(orderId),
      body: recordMode ? {'mode': 'record', 'record_mode': true} : null,
    );
    await ApiCache.clearAll();
    return (data['data'] as Map?)?.cast<String, dynamic>() ?? {};
  }

  Future<Map<String, dynamic>> completeOrder(
    String orderId, {
    bool recordMode = false,
  }) async {
    final data = await _post(
      ApiConfig.completeOrder(orderId),
      body: recordMode ? {'mode': 'record', 'record_mode': true} : null,
    );
    await ApiCache.clearAll();
    return (data['data'] as Map?)?.cast<String, dynamic>() ?? {};
  }

  /// Ask backend to send notifications related to an order action (optional)
  Future<void> notifyOrderAction(
    String orderId,
    String action, {
    Map<String, dynamic>? extra,
  }) async {
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
    await ApiCache.clearAll();
    return (data['data'] as Map?)?.cast<String, dynamic>() ?? {};
  }

  Future<Map<String, dynamic>> _get(String url, {String? cacheKey}) async {
    return _getUri(Uri.parse(url), cacheKey: cacheKey);
  }

  Future<Map<String, dynamic>> _getUri(Uri uri, {String? cacheKey}) async {
    try {
      final response = await _client
          .get(uri, headers: ApiConfig.jsonHeaders(token: _token))
          .timeout(const Duration(seconds: ApiConfig.timeoutSeconds));

      final data = _decodeAndValidate(response);
      if (cacheKey != null) {
        await ApiCache.set(cacheKey, data);
      }
      return data;
    } catch (e) {
      if (e is ApiException) rethrow;
      if (cacheKey != null) {
        final cached = await ApiCache.getAny(cacheKey);
        if (cached != null) return cached;
      }
      throw ApiException('Network error: ${e.toString()}', 0);
    }
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

  String _cacheSegment(String? value) {
    final normalized = value?.trim();
    if (normalized == null || normalized.isEmpty) return 'all';
    return base64Url.encode(utf8.encode(normalized));
  }
}

class ApiException implements Exception {
  ApiException(this.message, this.statusCode);

  final String message;
  final int statusCode;

  @override
  String toString() => 'ApiException($statusCode, $message)';
}
