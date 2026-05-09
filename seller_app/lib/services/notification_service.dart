import 'package:flutter/material.dart';

import 'dart:convert';
import 'dart:io';

import 'package:firebase_core/firebase_core.dart';
import 'package:firebase_messaging/firebase_messaging.dart';
import 'package:flutter_local_notifications/flutter_local_notifications.dart';
import 'package:http/http.dart' as http;
import 'package:seller_app/config/api_config.dart';

import 'package:seller_app/main.dart';
import 'package:seller_app/screens/delivery_alerts_screen.dart';

const Set<String> _alertNotificationTypes = {
  'information_alert',
  'delivery_accepted',
  'delivery_completed',
  'delivery_shipping_updated',
};

@pragma('vm:entry-point')
Future<void> sellerFirebaseMessagingBackgroundHandler(
  RemoteMessage message,
) async {
  if (Firebase.apps.isEmpty) {
    await Firebase.initializeApp();
  }
}

void _handleNotificationClick(Map<String, dynamic> data) {
  if (_alertNotificationTypes.contains(data['type']?.toString()) &&
      navigatorKey.currentState != null) {
    final title = data['title']?.toString() ?? 'Information';
    final body = data['body']?.toString() ?? '';

    navigatorKey.currentState!
        .push(MaterialPageRoute(builder: (_) => const DeliveryAlertsScreen()))
        .then((_) {
          if (navigatorKey.currentContext != null) {
            showDialog(
              context: navigatorKey.currentContext!,
              builder: (ctx) => AlertDialog(
                title: Text(title),
                content: Text(body),
                actions: [
                  TextButton(
                    onPressed: () => Navigator.pop(ctx),
                    child: const Text('OK'),
                  ),
                ],
              ),
            );
          }
        });
  }
}

class NotificationService {
  static const String _appType = 'seller';
  static const String _firebaseProjectId = 'g-mobile-app-92644';
  static const AndroidNotificationChannel _androidChannel =
      AndroidNotificationChannel(
        'seller_high_importance',
        'Seller notifications',
        description: 'Order, delivery, and account updates',
        importance: Importance.high,
      );

  static final FlutterLocalNotificationsPlugin _localNotifications =
      FlutterLocalNotificationsPlugin();

  static bool _initialized = false;
  static String? _authToken;
  static String? _userId;

  static Future<void> initialize() async {
    if (_initialized) return;

    try {
      if (Firebase.apps.isEmpty) {
        await Firebase.initializeApp();
      }

      FirebaseMessaging.onBackgroundMessage(
        sellerFirebaseMessagingBackgroundHandler,
      );

      const initSettings = InitializationSettings(
        android: AndroidInitializationSettings('@mipmap/launcher_icon'),
        iOS: DarwinInitializationSettings(
          requestAlertPermission: false,
          requestBadgePermission: false,
          requestSoundPermission: false,
        ),
      );

      await _localNotifications.initialize(
        settings: initSettings,
        onDidReceiveNotificationResponse: (NotificationResponse response) {
          if (response.payload != null) {
            try {
              final Map<String, dynamic> data = jsonDecode(response.payload!);
              _handleNotificationClick(data);
            } catch (e) {
              debugPrint('Error parsing notification payload: $e');
            }
          }
        },
      );

      final androidNotifications = _localNotifications
          .resolvePlatformSpecificImplementation<
            AndroidFlutterLocalNotificationsPlugin
          >();

      await androidNotifications?.createNotificationChannel(_androidChannel);
      await androidNotifications?.requestNotificationsPermission();

      await FirebaseMessaging.instance.requestPermission(
        alert: true,
        badge: true,
        sound: true,
      );
      await FirebaseMessaging.instance
          .setForegroundNotificationPresentationOptions(
            alert: true,
            badge: true,
            sound: true,
          );

      FirebaseMessaging.onMessage.listen(_showForegroundNotification);
      FirebaseMessaging.onMessageOpenedApp.listen((RemoteMessage message) {
        _handleNotificationClick(message.data);
      });

      final initialMessage = await FirebaseMessaging.instance
          .getInitialMessage();
      if (initialMessage != null) {
        Future.delayed(const Duration(milliseconds: 500), () {
          _handleNotificationClick(initialMessage.data);
        });
      }

      FirebaseMessaging.instance.onTokenRefresh.listen((token) {
        _sendToken(token);
      });

      _initialized = true;
    } catch (error) {
      debugPrint('Notification init failed: $error');
    }
  }

  static Future<void> syncDeviceToken({
    required String? authToken,
    required String? userId,
  }) async {
    _authToken = authToken;
    _userId = userId;

    if (!_initialized || authToken == null || authToken.isEmpty) return;

    try {
      final token = await _getFcmTokenWithRetry();
      await _sendToken(token);
    } catch (error) {
      debugPrint('FCM token sync failed: $error');
    }
  }

  static void clearAuth() {
    _authToken = null;
    _userId = null;
  }

  static Future<void> _sendToken(String? fcmToken) async {
    final authToken = _authToken;
    if (fcmToken == null || authToken == null || authToken.isEmpty) return;

    try {
      final response = await http
          .post(
            Uri.parse(ApiConfig.getUrl('/device-token')),
            headers: ApiConfig.getHeaders(token: authToken),
            body: jsonEncode({
              'fcm_token': fcmToken,
              'device_token': fcmToken,
              'app_type': _appType,
              'firebase_project_id': _firebaseProjectId,
              'platform': Platform.isAndroid
                  ? 'android'
                  : Platform.operatingSystem,
              if (_userId != null) 'user_id': _userId,
            }),
          )
          .timeout(const Duration(seconds: 10));
      if (response.statusCode < 200 || response.statusCode >= 300) {
        debugPrint(
          'Device token endpoint rejected token: ${response.statusCode} ${response.body}',
        );
      }
    } catch (error) {
      debugPrint('Device token endpoint failed: $error');
    }
  }

  static Future<String?> _getFcmTokenWithRetry() async {
    if (Platform.isIOS) {
      for (var attempt = 0; attempt < 5; attempt++) {
        final apnsToken = await FirebaseMessaging.instance.getAPNSToken();
        if (apnsToken != null && apnsToken.isNotEmpty) {
          break;
        }
        await Future.delayed(Duration(milliseconds: 400 * (attempt + 1)));
      }
    }

    for (var attempt = 0; attempt < 4; attempt++) {
      final token = await FirebaseMessaging.instance.getToken();
      if (token != null && token.isNotEmpty) {
        return token;
      }
      await Future.delayed(Duration(milliseconds: 500 * (attempt + 1)));
    }

    return null;
  }

  static Future<void> _showForegroundNotification(RemoteMessage message) async {
    final notification = message.notification;
    final title = notification?.title ?? message.data['title']?.toString();
    final body = notification?.body ?? message.data['body']?.toString();

    if ((title == null || title.isEmpty) && (body == null || body.isEmpty)) {
      return;
    }

    await _localNotifications.show(
      id: message.hashCode,
      title: title,
      body: body,
      notificationDetails: NotificationDetails(
        android: AndroidNotificationDetails(
          _androidChannel.id,
          _androidChannel.name,
          channelDescription: _androidChannel.description,
          importance: Importance.high,
          priority: Priority.high,
        ),
        iOS: const DarwinNotificationDetails(
          presentAlert: true,
          presentBadge: true,
          presentSound: true,
        ),
      ),
      payload: jsonEncode(message.data),
    );
  }
}
