import 'dart:convert';
import 'dart:io';

import 'package:delivery_app/config/api_config.dart';
import 'package:firebase_core/firebase_core.dart';
import 'package:firebase_messaging/firebase_messaging.dart';
import 'package:flutter/foundation.dart';
import 'package:flutter_local_notifications/flutter_local_notifications.dart';
import 'package:http/http.dart' as http;

@pragma('vm:entry-point')
Future<void> deliveryFirebaseMessagingBackgroundHandler(
  RemoteMessage message,
) async {
  if (Firebase.apps.isEmpty) {
    await Firebase.initializeApp();
  }
}

class NotificationService {
  static const String _appType = 'delivery';
  static const AndroidNotificationChannel _androidChannel =
      AndroidNotificationChannel(
        'delivery_high_importance',
        'Delivery notifications',
        description: 'Delivery order and alert updates',
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
        deliveryFirebaseMessagingBackgroundHandler,
      );

      const initSettings = InitializationSettings(
        android: AndroidInitializationSettings('@mipmap/ic_launcher'),
        iOS: DarwinInitializationSettings(
          requestAlertPermission: false,
          requestBadgePermission: false,
          requestSoundPermission: false,
        ),
      );

      await _localNotifications.initialize(settings: initSettings);

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

      FirebaseMessaging.onMessage.listen(_showForegroundNotification);
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
      final token = await FirebaseMessaging.instance.getToken();
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
      await http
          .post(
            Uri.parse('${ApiConfig.baseUrl}/device-token'),
            headers: ApiConfig.jsonHeaders(token: authToken),
            body: jsonEncode({
              'fcm_token': fcmToken,
              'device_token': fcmToken,
              'app_type': _appType,
              'platform': Platform.isAndroid
                  ? 'android'
                  : Platform.operatingSystem,
              if (_userId != null) 'user_id': _userId,
            }),
          )
          .timeout(const Duration(seconds: 10));
    } catch (error) {
      debugPrint('Device token endpoint failed: $error');
    }
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
