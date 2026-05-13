import 'package:dio/dio.dart';
import 'token_storage.dart';

/// Attaches Bearer token to every request and handles 401 responses.
///
/// On 401:
///   1. Tries POST /auth/refresh with the stored refresh token.
///   2. If refresh succeeds, retries the original request once.
///   3. If refresh fails (or no refresh token), clears all stored tokens
///      and calls [onUnauthenticated] so the app can navigate to sign-in.
///
/// Concurrent 401 requests are queued — only one refresh attempt is made.
class AuthInterceptor extends QueuedInterceptorsWrapper {
  AuthInterceptor({
    required this.tokenStorage,
    required this.onUnauthenticated,
  });

  final TokenStorage tokenStorage;
  final void Function() onUnauthenticated;

  @override
  Future<void> onRequest(
    RequestOptions options,
    RequestInterceptorHandler handler,
  ) async {
    final token = await tokenStorage.getAccessToken();
    if (token != null && token.isNotEmpty) {
      options.headers['Authorization'] = 'Bearer $token';
    }
    handler.next(options);
  }

  @override
  Future<void> onError(
    DioException err,
    ErrorInterceptorHandler handler,
  ) async {
    if (err.response?.statusCode != 401) {
      handler.next(err);
      return;
    }

    // Attempt refresh
    final refreshToken = await tokenStorage.getRefreshToken();
    if (refreshToken != null && refreshToken.isNotEmpty) {
      try {
        final refreshDio = Dio(BaseOptions(baseUrl: err.requestOptions.baseUrl));
        final res = await refreshDio.post(
          '/auth/refresh',
          data: {'refresh_token': refreshToken},
        );
        final newToken = res.data?['data']?['token']?.toString();
        if (newToken != null && newToken.isNotEmpty) {
          await tokenStorage.saveAccessToken(newToken);
          // Retry original request with new token
          err.requestOptions.headers['Authorization'] = 'Bearer $newToken';
          final retryDio = Dio();
          final retryResponse = await retryDio.fetch(err.requestOptions);
          handler.resolve(retryResponse);
          return;
        }
      } catch (_) {
        // Refresh failed — fall through to sign-out
      }
    }

    await tokenStorage.clear();
    onUnauthenticated();
    handler.next(err);
  }
}
