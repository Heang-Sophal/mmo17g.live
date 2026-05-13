import 'dart:convert';
import 'package:shared_preferences/shared_preferences.dart';

/// SharedPreferences-backed API response cache with 5-minute expiry.
///
/// Stale-While-Revalidate (SWR) pattern:
///   If cached data exists but is stale, it is returned immediately
///   while a background refresh runs and calls [onRefresh] when done.
class ApiCache {
  static const Duration _expiry = Duration(minutes: 5);
  static const String _valuePrefix = 'api_cache_v_';
  static const String _tsPrefix = 'api_cache_ts_';

  /// Return cached value for [key], or null if absent/expired.
  static Future<Map<String, dynamic>?> get(String key) async {
    final prefs = await SharedPreferences.getInstance();
    final raw = prefs.getString('$_valuePrefix$key');
    final ts = prefs.getInt('$_tsPrefix$key') ?? 0;
    if (raw == null) return null;
    final age = DateTime.now().millisecondsSinceEpoch - ts;
    if (age > _expiry.inMilliseconds) return null;
    try {
      return jsonDecode(raw) as Map<String, dynamic>;
    } catch (_) {
      return null;
    }
  }

  /// Write [data] to the cache under [key].
  static Future<void> set(String key, Map<String, dynamic> data) async {
    final prefs = await SharedPreferences.getInstance();
    await prefs.setString('$_valuePrefix$key', jsonEncode(data));
    await prefs.setInt('$_tsPrefix$key', DateTime.now().millisecondsSinceEpoch);
  }

  /// Stale-While-Revalidate fetch.
  ///
  /// - If fresh cache exists → return it (no network call).
  /// - If stale cache exists → return it immediately, then refresh in background
  ///   and call [onRefresh] with the new data.
  /// - If no cache exists → await [fetcher] and cache the result.
  static Future<Map<String, dynamic>?> getOrFetch(
    String key,
    Future<Map<String, dynamic>> Function() fetcher, {
    void Function(Map<String, dynamic> fresh)? onRefresh,
  }) async {
    final prefs = await SharedPreferences.getInstance();
    final raw = prefs.getString('$_valuePrefix$key');
    final ts = prefs.getInt('$_tsPrefix$key') ?? 0;
    final age = DateTime.now().millisecondsSinceEpoch - ts;
    final isStale = age > _expiry.inMilliseconds;

    if (raw != null) {
      final cached = jsonDecode(raw) as Map<String, dynamic>;
      if (isStale && onRefresh != null) {
        // Return stale data now, refresh behind the scenes
        fetcher().then((fresh) async {
          await set(key, fresh);
          onRefresh(fresh);
        }).catchError((_) {});
      }
      return cached;
    }

    // Nothing cached — must wait
    final fresh = await fetcher();
    await set(key, fresh);
    return fresh;
  }

  /// Remove a single cache entry.
  static Future<void> invalidate(String key) async {
    final prefs = await SharedPreferences.getInstance();
    await prefs.remove('$_valuePrefix$key');
    await prefs.remove('$_tsPrefix$key');
  }

  /// Remove all cache entries created by this class.
  static Future<void> clearAll() async {
    final prefs = await SharedPreferences.getInstance();
    final keys = prefs.getKeys()
        .where((k) => k.startsWith(_valuePrefix) || k.startsWith(_tsPrefix))
        .toList();
    for (final k in keys) {
      await prefs.remove(k);
    }
  }
}
