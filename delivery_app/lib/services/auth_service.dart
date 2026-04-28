import 'dart:convert';

import 'package:delivery_app/config/api_config.dart';
import 'package:http/http.dart' as http;

class AuthService {
  AuthService({http.Client? client}) : _client = client ?? http.Client();

  final http.Client _client;

  Future<Map<String, dynamic>> login(String email, String password) async {
    final response = await _client
        .post(
          Uri.parse(ApiConfig.deliveryLogin),
          headers: ApiConfig.jsonHeaders(),
          body: jsonEncode({'email': email, 'password': password}),
        )
        .timeout(const Duration(seconds: ApiConfig.timeoutSeconds));

    final data = _decodeResponse(response);

    if (response.statusCode >= 200 &&
        response.statusCode < 300 &&
        data['success'] == true) {
      return data;
    }

    throw AuthException(
      data['message']?.toString() ?? 'Login failed',
      data['error_type']?.toString() ?? 'login_failed',
      response.statusCode,
      blockedUntil: data['blocked_until']?.toString(),
    );
  }

  Future<Map<String, dynamic>> checkAuth(String token) async {
    final response = await _client
        .get(
          Uri.parse(ApiConfig.deliveryCheck),
          headers: ApiConfig.jsonHeaders(token: token),
        )
        .timeout(const Duration(seconds: ApiConfig.timeoutSeconds));

    final data = _decodeResponse(response);

    if (response.statusCode == 200 && data['success'] == true) {
      return {'authenticated': true, 'user': data['data']['user']};
    }

    return {'authenticated': false};
  }

  Future<void> logout(String token) async {
    await _client
        .post(
          Uri.parse(ApiConfig.logout),
          headers: ApiConfig.jsonHeaders(token: token),
        )
        .timeout(const Duration(seconds: ApiConfig.timeoutSeconds));
  }

  Map<String, dynamic> _decodeResponse(http.Response response) {
    if (response.body.isEmpty) {
      return <String, dynamic>{};
    }

    final decoded = jsonDecode(response.body);
    if (decoded is Map<String, dynamic>) {
      return decoded;
    }

    return <String, dynamic>{};
  }
}

class AuthException implements Exception {
  AuthException(
    this.message,
    this.errorType,
    this.statusCode, {
    this.blockedUntil,
  });

  final String message;
  final String errorType;
  final int statusCode;
  final String? blockedUntil;

  @override
  String toString() => 'AuthException($statusCode, $errorType, $message)';
}
