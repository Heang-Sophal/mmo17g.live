import 'package:dio/dio.dart';
import 'package:flutter/foundation.dart';
import 'auth_interceptor.dart';
import 'token_storage.dart';

/// Dio singleton pre-configured with timeouts, auth interceptor, and (debug-only) logging.
///
/// Usage:
///   ApiClient.configure(onUnauthenticated: () { ... navigate to login ... });
///   final dio = ApiClient.instance;
class ApiClient {
  ApiClient._();

  static const String _baseUrl = 'https://mmo17g.store/api';

  static Dio? _dio;
  static void Function()? _onUnauthenticated;

  /// Call once at startup (e.g. in main() or AuthGate) to wire up the sign-out callback.
  static void configure({required void Function() onUnauthenticated}) {
    _onUnauthenticated = onUnauthenticated;
    _dio = null; // reset so next access rebuilds with new callback
  }

  static Dio get instance {
    _dio ??= _build();
    return _dio!;
  }

  static Dio _build() {
    final dio = Dio(
      BaseOptions(
        baseUrl: _baseUrl,
        connectTimeout: const Duration(seconds: 5),
        receiveTimeout: const Duration(seconds: 10),
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
      ),
    );

    dio.interceptors.add(
      AuthInterceptor(
        tokenStorage: TokenStorage(),
        onUnauthenticated: _onUnauthenticated ?? () {},
      ),
    );

    // Log only in debug builds — never in release
    if (kDebugMode) {
      dio.interceptors.add(
        LogInterceptor(requestBody: true, responseBody: true),
      );
    }

    return dio;
  }
}
