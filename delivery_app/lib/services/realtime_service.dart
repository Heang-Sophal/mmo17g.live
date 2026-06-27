import 'dart:async';
import 'dart:convert';

import 'package:delivery_app/config/api_config.dart';
import 'package:flutter/foundation.dart';
import 'package:http/http.dart' as http;
import 'package:pusher_reverb_flutter/pusher_reverb_flutter.dart';

class RealtimeService {
  static ReverbClient? _client;
  static Future<void>? _connecting;
  static String? _authToken;
  static final Set<String> _channels = <String>{};
  static final List<StreamSubscription<ChannelEvent>> _subscriptions =
      <StreamSubscription<ChannelEvent>>[];
  static final StreamController<Map<String, dynamic>> _eventController =
      StreamController<Map<String, dynamic>>.broadcast();

  static Stream<Map<String, dynamic>> get events => _eventController.stream;

  static Future<void> connect({
    required String? authToken,
    required String appType,
  }) {
    _authToken = authToken;
    if (authToken == null || authToken.isEmpty) return Future.value();
    return _connecting ??= _connect(authToken: authToken, appType: appType);
  }

  static Future<void> _connect({
    required String authToken,
    required String appType,
  }) async {
    try {
      final config = await _loadConfig(authToken);
      if (!config.enabled || config.appKey.isEmpty || config.host.isEmpty) {
        return;
      }

      _clearSubscriptions();
      _client ??= ReverbClient.instance(
        host: config.host,
        port: config.port,
        appKey: config.appKey,
        useTLS: config.useTls,
        pingInterval: const Duration(seconds: 20),
        onError: (error) => debugPrint('Realtime error: $error'),
      );

      _subscribeToChannel('mobile.all');
      _subscribeToChannel('mobile.$appType');
      await _client!.connect();
    } catch (error) {
      debugPrint('Realtime connect failed: $error');
    } finally {
      _connecting = null;
    }
  }

  static void clearAuth() {
    _authToken = null;
    _clearSubscriptions();
    _client?.disconnect();
  }

  static Future<_RealtimeConfig> _loadConfig(String authToken) async {
    final response = await http
        .get(
          Uri.parse('${ApiConfig.baseUrl}/realtime/config'),
          headers: ApiConfig.jsonHeaders(token: authToken),
        )
        .timeout(const Duration(seconds: 10));
    if (response.statusCode < 200 || response.statusCode >= 300) {
      throw Exception('Realtime config failed: ${response.statusCode}');
    }

    final payload = jsonDecode(response.body);
    final data = payload is Map ? payload['data'] : null;
    if (data is! Map) return const _RealtimeConfig.disabled();

    final apiUri = Uri.parse(ApiConfig.baseUrl);
    final scheme = data['scheme']?.toString().toLowerCase() ?? 'http';
    final host = _resolveHost(data['host']?.toString(), apiUri.host);

    return _RealtimeConfig(
      enabled: _isTruthy(data['enabled']),
      appKey: data['app_key']?.toString() ?? '',
      host: host,
      port:
          int.tryParse(data['port']?.toString() ?? '') ??
          (scheme == 'https' ? 443 : 8080),
      useTls: scheme == 'https',
    );
  }

  static String _resolveHost(String? configuredHost, String apiHost) {
    final host = configuredHost?.trim() ?? '';
    if ((host.isEmpty || host == 'localhost' || host == '127.0.0.1') &&
        apiHost.isNotEmpty &&
        apiHost != 'localhost' &&
        apiHost != '127.0.0.1') {
      return apiHost;
    }
    return host;
  }

  static bool _isTruthy(dynamic value) {
    return value == true ||
        value == 1 ||
        value?.toString().toLowerCase() == 'true' ||
        value?.toString() == '1';
  }

  static void _subscribeToChannel(String channelName) {
    if (_channels.contains(channelName)) return;
    final channel = _client!.subscribeToChannel(channelName);
    _channels.add(channelName);
    _subscriptions.add(
      channel.stream.listen((event) {
        final payload = _payloadAsMap(event.data);
        payload['event'] = event.eventName;
        payload['channel'] = event.channelName;
        _publish(payload);
      }),
    );
  }

  static Map<String, dynamic> _payloadAsMap(dynamic payload) {
    if (payload is Map<String, dynamic>) {
      return Map<String, dynamic>.from(payload);
    }
    if (payload is Map) {
      return payload.map((key, value) => MapEntry(key.toString(), value));
    }
    if (payload is String && payload.trim().isNotEmpty) {
      try {
        final decoded = jsonDecode(payload);
        if (decoded is Map<String, dynamic>) {
          return Map<String, dynamic>.from(decoded);
        }
        if (decoded is Map) {
          return decoded.map((key, value) => MapEntry(key.toString(), value));
        }
      } catch (_) {}
    }
    return <String, dynamic>{};
  }

  static void _publish(Map<String, dynamic> data) {
    if (_eventController.isClosed || _authToken == null) return;
    _eventController.add(data);
  }

  static void _clearSubscriptions() {
    for (final subscription in _subscriptions) {
      subscription.cancel();
    }
    _subscriptions.clear();
    for (final channel in _channels.toList()) {
      _client?.unsubscribeFromChannel(channel);
    }
    _channels.clear();
  }
}

class _RealtimeConfig {
  final bool enabled;
  final String appKey;
  final String host;
  final int port;
  final bool useTls;

  const _RealtimeConfig({
    required this.enabled,
    required this.appKey,
    required this.host,
    required this.port,
    required this.useTls,
  });

  const _RealtimeConfig.disabled()
    : enabled = false,
      appKey = '',
      host = '',
      port = 8080,
      useTls = false;
}
