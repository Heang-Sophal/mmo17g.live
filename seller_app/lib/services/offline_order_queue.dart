import 'dart:async';
import 'dart:convert';

import 'package:http/http.dart' as http;
import 'package:seller_app/config/api_config.dart';
import 'package:seller_app/models/order.dart';
import 'package:shared_preferences/shared_preferences.dart';

class OfflineOrderQueue {
  static const String _queueKey = 'seller_offline_order_queue_v1';
  static bool _isSyncing = false;

  static Future<Order> queue(Map<String, dynamic> orderData) async {
    final prefs = await SharedPreferences.getInstance();
    final items = await _readQueue(prefs);
    final id = 'offline-${DateTime.now().millisecondsSinceEpoch}';
    final queuedOrder = <String, dynamic>{
      'id': id,
      'created_at': DateTime.now().toIso8601String(),
      'order_data': orderData,
    };

    items.add(queuedOrder);
    await prefs.setString(_queueKey, jsonEncode(items));

    return _pendingOrderFromData(id, orderData, queuedOrder['created_at']);
  }

  static Future<int> pendingCount() async {
    final prefs = await SharedPreferences.getInstance();
    return (await _readQueue(prefs)).length;
  }

  static Future<int> syncPending({String? token, http.Client? client}) async {
    if (_isSyncing) return 0;
    _isSyncing = true;

    final httpClient = client ?? http.Client();
    final shouldCloseClient = client == null;

    try {
      final prefs = await SharedPreferences.getInstance();
      final queue = await _readQueue(prefs);
      if (queue.isEmpty) return 0;

      final remaining = <Map<String, dynamic>>[];
      var synced = 0;

      for (final item in queue) {
        final data = item['order_data'];
        if (data is! Map) {
          continue;
        }

        try {
          final response = await httpClient
              .post(
                Uri.parse('${ApiConfig.baseUrl}${ApiConfig.orders}'),
                headers: {
                  'Content-Type': 'application/json',
                  'Accept': 'application/json',
                  if (token != null && token.isNotEmpty)
                    'Authorization': 'Bearer $token',
                },
                body: jsonEncode(Map<String, dynamic>.from(data)),
              )
              .timeout(const Duration(seconds: ApiConfig.timeoutSeconds));

          final payload = response.body.isEmpty
              ? <String, dynamic>{}
              : jsonDecode(response.body) as Map<String, dynamic>;

          if (response.statusCode == 201 && payload['success'] == true) {
            synced += 1;
            continue;
          }

          remaining.add(item);
        } catch (_) {
          remaining.add(item);
        }
      }

      await prefs.setString(_queueKey, jsonEncode(remaining));
      return synced;
    } finally {
      _isSyncing = false;
      if (shouldCloseClient) {
        httpClient.close();
      }
    }
  }

  static Future<List<Map<String, dynamic>>> _readQueue(
    SharedPreferences prefs,
  ) async {
    final raw = prefs.getString(_queueKey);
    if (raw == null || raw.isEmpty) return <Map<String, dynamic>>[];
    try {
      final decoded = jsonDecode(raw);
      if (decoded is! List) return <Map<String, dynamic>>[];
      return decoded
          .whereType<Map>()
          .map((item) => Map<String, dynamic>.from(item))
          .toList();
    } catch (_) {
      return <Map<String, dynamic>>[];
    }
  }

  static Order _pendingOrderFromData(
    String id,
    Map<String, dynamic> orderData,
    dynamic createdAt,
  ) {
    return Order.fromMap({
      'id': id,
      'customer_name': orderData['customer_name'],
      'customer_phone': orderData['customer_phone'],
      'customer_address': orderData['customer_address'],
      'items': orderData['items'],
      'total_amount': orderData['grand_total'] ?? orderData['GrandTotal'] ?? 0,
      'status': 'pending',
      'created_at': createdAt?.toString(),
    });
  }
}
