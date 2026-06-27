import 'dart:convert';

import 'package:delivery_app/config/api_config.dart';
import 'package:delivery_app/core/token_storage.dart';
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
      attemptsRemaining: data['attempts_remaining'] is int
          ? data['attempts_remaining'] as int
          : null,
    );
  }

  Future<Map<String, dynamic>> checkAuth(String token) async {
    try {
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

      if (response.statusCode == 401 || response.statusCode == 403) {
        return {
          'authenticated': false,
          'status_code': response.statusCode,
          'error_type': data['error_type']?.toString() ?? 'unauthenticated',
        };
      }

      throw AuthException(
        data['message']?.toString() ?? 'Unable to verify session',
        'network_error',
        response.statusCode,
      );
    } catch (e) {
      if (e is AuthException) rethrow;
      throw AuthException('Network error: ${e.toString()}', 'network_error', 0);
    }
  }

  Future<void> logout(String token) async {
    await _client
        .post(
          Uri.parse(ApiConfig.logout),
          headers: ApiConfig.jsonHeaders(token: token),
        )
        .timeout(const Duration(seconds: ApiConfig.timeoutSeconds));
  }

  /// Returns true if an access token is currently stored.
  Future<bool> isLoggedIn() async {
    final token = await TokenStorage().getAccessToken();
    return token != null && token.isNotEmpty;
  }

  /// Returns the last cached user map from local storage, or null if none.
  Future<Map<String, dynamic>?> getCurrentUser() async {
    return TokenStorage().getCachedUser();
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
    this.attemptsRemaining,
  });

  final String message;
  final String errorType;
  final int statusCode;
  final String? blockedUntil;
  final int? attemptsRemaining;

  @override
  String toString() => 'AuthException($statusCode, $errorType, $message)';

  bool get isNetworkError =>
      errorType == 'network_error' || statusCode == 0 || statusCode >= 500;
}
