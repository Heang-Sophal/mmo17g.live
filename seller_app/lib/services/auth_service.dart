import 'dart:convert';
import 'package:http/http.dart' as http;
import '../config/api_config.dart';

class AuthService {
  final http.Client _client;

  AuthService({http.Client? client}) : _client = client ?? http.Client();

  /// Sign In
  /// POST /api/auth/login
  Future<Map<String, dynamic>> login(String email, String password) async {
    try {
      final response = await _client
          .post(
            Uri.parse('${ApiConfig.baseUrl}/auth/login'),
            headers: {'Content-Type': 'application/json'},
            body: json.encode({'email': email, 'password': password}),
          )
          .timeout(const Duration(seconds: ApiConfig.timeoutSeconds));

      final data = json.decode(response.body);

      if (response.statusCode == 200 && data['success'] == true) {
        return data;
      } else if (response.statusCode == 429) {
        // Account blocked
        throw AuthException(
          data['message'] ?? 'Account temporarily blocked',
          'account_blocked',
          response.statusCode,
          blockedUntil: data['blocked_until'],
        );
      } else if (response.statusCode == 401) {
        // Invalid credentials
        throw AuthException(
          data['message'] ?? 'Invalid credentials',
          data['error_type'] ?? 'invalid_credentials',
          response.statusCode,
          attemptsRemaining: data['attempts_remaining'],
        );
      } else if (response.statusCode == 403) {
        // Account locked or deactivated
        throw AuthException(
          data['message'] ?? 'Account locked',
          data['error_type'] ?? 'account_locked',
          response.statusCode,
        );
      } else {
        throw AuthException(
          data['message'] ?? 'Login failed',
          'unknown',
          response.statusCode,
        );
      }
    } catch (e) {
      if (e is AuthException) rethrow;
      throw AuthException('Network error: ${e.toString()}', 'network_error', 0);
    }
  }

  /// Sign Out
  /// POST /api/auth/logout
  Future<Map<String, dynamic>> logout(String token) async {
    try {
      final response = await _client
          .post(
            Uri.parse('${ApiConfig.baseUrl}/auth/logout'),
            headers: {
              'Content-Type': 'application/json',
              'Authorization': 'Bearer $token',
            },
          )
          .timeout(const Duration(seconds: ApiConfig.timeoutSeconds));

      final data = json.decode(response.body);
      return data;
    } catch (e) {
      return {'success': false, 'message': 'Logout error: ${e.toString()}'};
    }
  }

  /// Check Authentication Status
  /// GET /api/auth/check
  Future<Map<String, dynamic>> checkAuth(String token) async {
    try {
      final response = await _client
          .get(
            Uri.parse('${ApiConfig.baseUrl}/auth/check'),
            headers: {
              'Content-Type': 'application/json',
              'Authorization': 'Bearer $token',
            },
          )
          .timeout(const Duration(seconds: ApiConfig.timeoutSeconds));

      final data = json.decode(response.body);

      if (response.statusCode == 200 && data['success'] == true) {
        return {'authenticated': true, 'user': data['data']['user']};
      } else {
        return {'authenticated': false};
      }
    } catch (e) {
      return {'authenticated': false};
    }
  }

  void dispose() {
    _client.close();
  }
}

/// Auth Exception
class AuthException implements Exception {
  final String message;
  final String errorType;
  final int statusCode;
  final int? attemptsRemaining;
  final String? blockedUntil;

  AuthException(
    this.message,
    this.errorType,
    this.statusCode, {
    this.attemptsRemaining,
    this.blockedUntil,
  });

  @override
  String toString() =>
      'AuthException: $message (Type: $errorType, Status: $statusCode)';

  bool get isAccountBlocked => errorType == 'account_blocked';
  bool get isAccountLocked => errorType == 'account_locked';
  bool get isInvalidCredentials => errorType == 'invalid_credentials';
  bool get isAccountDeactivated => errorType == 'account_deactivated';
  bool get isNetworkError => errorType == 'network_error';
}
