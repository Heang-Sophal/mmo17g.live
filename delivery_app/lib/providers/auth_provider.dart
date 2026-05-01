import 'dart:convert';

import 'package:delivery_app/services/auth_service.dart';
import 'package:delivery_app/services/notification_service.dart';
import 'package:flutter/material.dart';
import 'package:shared_preferences/shared_preferences.dart';

class DeliveryUser {
  static const List<String> _deliveryAppAllowedRoles = <String>[
    'delivery',
    'laivrison',
    'admin',
    'owner',
    'recorder',
  ];

  DeliveryUser({
    required this.id,
    required this.name,
    required this.email,
    required this.role,
    required this.isDelivery,
    required this.canAccessDeliveryApp,
    this.avatarUrl,
    this.assignedWarehouseId,
    this.assignedWarehouseName,
    this.assignedWarehouseCity,
  });

  final String id;
  final String name;
  final String email;
  final String role;
  final bool isDelivery;
  final bool canAccessDeliveryApp;
  final String? avatarUrl;
  final String? assignedWarehouseId;
  final String? assignedWarehouseName;
  final String? assignedWarehouseCity;

  factory DeliveryUser.fromMap(Map<String, dynamic> map) {
    final assignedWarehouse = map['assigned_warehouse'];
    final role = map['role']?.toString() ?? 'Delivery';
    final normalizedRole = role.toLowerCase();
    final isDeliveryRole =
        map['is_delivery'] == true ||
        normalizedRole == 'delivery' ||
        normalizedRole == 'laivrison' ||
        normalizedRole == 'recorder';

    return DeliveryUser(
      id: map['id']?.toString() ?? '',
      name: map['name']?.toString() ?? '',
      email: map['email']?.toString() ?? '',
      role: role,
      isDelivery: isDeliveryRole,
      canAccessDeliveryApp:
          isDeliveryRole || _deliveryAppAllowedRoles.contains(normalizedRole),
      avatarUrl: map['avatar_url']?.toString(),
      assignedWarehouseId: assignedWarehouse is Map
          ? assignedWarehouse['id']?.toString()
          : null,
      assignedWarehouseName: assignedWarehouse is Map
          ? assignedWarehouse['name']?.toString()
          : null,
      assignedWarehouseCity: assignedWarehouse is Map
          ? assignedWarehouse['city']?.toString()
          : null,
    );
  }

  Map<String, dynamic> toMap() {
    return {
      'id': id,
      'name': name,
      'email': email,
      'role': role,
      'is_delivery': isDelivery,
      'can_access_delivery_app': canAccessDeliveryApp,
      'avatar_url': avatarUrl,
      'assigned_warehouse': assignedWarehouseId == null
          ? null
          : {
              'id': assignedWarehouseId,
              'name': assignedWarehouseName,
              'city': assignedWarehouseCity,
            },
    };
  }

  DeliveryUser copyWith({
    String? name,
    String? email,
    String? role,
    bool? isDelivery,
    bool? canAccessDeliveryApp,
    String? avatarUrl,
    String? assignedWarehouseId,
    String? assignedWarehouseName,
    String? assignedWarehouseCity,
  }) {
    return DeliveryUser(
      id: id,
      name: name ?? this.name,
      email: email ?? this.email,
      role: role ?? this.role,
      isDelivery: isDelivery ?? this.isDelivery,
      canAccessDeliveryApp: canAccessDeliveryApp ?? this.canAccessDeliveryApp,
      avatarUrl: avatarUrl ?? this.avatarUrl,
      assignedWarehouseId: assignedWarehouseId ?? this.assignedWarehouseId,
      assignedWarehouseName:
          assignedWarehouseName ?? this.assignedWarehouseName,
      assignedWarehouseCity:
          assignedWarehouseCity ?? this.assignedWarehouseCity,
    );
  }
}

class AuthProvider extends ChangeNotifier {
  AuthProvider({AuthService? authService})
    : _authService = authService ?? AuthService();

  static const String _tokenKey = 'delivery_app_auth_token';
  static const String _userKey = 'delivery_app_auth_user';

  final AuthService _authService;

  DeliveryUser? _user;
  String? _token;
  bool _isLoading = false;
  bool _isInitialized = false;
  String? _error;

  DeliveryUser? get user => _user;
  String? get token => _token;
  bool get isLoading => _isLoading;
  bool get isInitialized => _isInitialized;
  bool get isAuthenticated => _token != null && _user != null;
  String? get error => _error;

  Future<void> init() async {
    if (_isInitialized) return;

    _isLoading = true;
    notifyListeners();

    final prefs = await SharedPreferences.getInstance();
    _token = prefs.getString(_tokenKey);

    final cachedUser = prefs.getString(_userKey);
    if (cachedUser != null && cachedUser.isNotEmpty) {
      try {
        _user = DeliveryUser.fromMap(jsonDecode(cachedUser));
      } catch (_) {}
    }

    if (_token != null && _token!.isNotEmpty) {
      try {
        final result = await _authService.checkAuth(_token!);
        if (result['authenticated'] == true) {
          _user = DeliveryUser.fromMap(
            Map<String, dynamic>.from(result['user'] as Map),
          );
          await _persistSession();
          await NotificationService.syncDeviceToken(
            authToken: _token,
            userId: _user?.id,
          );
        } else {
          await _clearSession();
        }
      } catch (_) {
        await _clearSession();
      }
    }

    _isLoading = false;
    _isInitialized = true;
    notifyListeners();
  }

  Future<Map<String, dynamic>> signIn({
    required String email,
    required String password,
  }) async {
    _isLoading = true;
    _error = null;
    notifyListeners();

    try {
      final result = await _authService.login(email, password);
      final data = Map<String, dynamic>.from(result['data'] as Map);
      final user = DeliveryUser.fromMap(
        Map<String, dynamic>.from(data['user'] as Map),
      );

      if (!user.canAccessDeliveryApp) {
        _isLoading = false;
        _error = 'Only Delivery, Recorder, Admin, or Owner users can access this app.';
        notifyListeners();
        return {
          'success': false,
          'error_type': 'insufficient_permissions',
          'message': _error,
        };
      }

      _token = data['token']?.toString();
      _user = user;
      _isLoading = false;
      _isInitialized = true;
      await _persistSession();
      await NotificationService.syncDeviceToken(
        authToken: _token,
        userId: _user?.id,
      );
      notifyListeners();

      return {'success': true};
    } on AuthException catch (e) {
      _isLoading = false;
      _error = e.message;
      notifyListeners();
      return {
        'success': false,
        'error_type': e.errorType,
        'message': e.message,
        'blocked_until': e.blockedUntil,
      };
    } catch (e) {
      _isLoading = false;
      _error = e.toString();
      notifyListeners();
      return {
        'success': false,
        'error_type': 'network_error',
        'message': e.toString(),
      };
    }
  }

  Future<void> signOut() async {
    final token = _token;

    if (token != null && token.isNotEmpty) {
      try {
        await _authService.logout(token);
      } catch (_) {}
    }

    await _clearSession();
    NotificationService.clearAuth();
    _isInitialized = true;
    notifyListeners();
  }

  Future<void> syncUserFromProfile(Map<String, dynamic> profile) async {
    if (_user == null) return;

    final firstname = profile['firstname']?.toString() ?? '';
    final lastname = profile['lastname']?.toString() ?? '';
    final fullName = '$firstname $lastname'.trim();
    final assignedWarehouse = profile['assigned_warehouse'];
    final role = profile['role']?.toString() ?? _user!.role;
    final normalizedRole = role.toLowerCase();
    final isDeliveryRole =
        profile['is_delivery'] == true ||
        normalizedRole == 'delivery' ||
        normalizedRole == 'laivrison' ||
        normalizedRole == 'recorder';
    final canAccessDeliveryApp =
        isDeliveryRole ||
        DeliveryUser._deliveryAppAllowedRoles.contains(normalizedRole);

    _user = _user!.copyWith(
      name: fullName.isNotEmpty ? fullName : (_user!.name),
      email: profile['email']?.toString() ?? _user!.email,
      role: role,
      isDelivery: isDeliveryRole,
      canAccessDeliveryApp: canAccessDeliveryApp,
      avatarUrl: profile['avatar_url']?.toString() ?? _user!.avatarUrl,
      assignedWarehouseId: assignedWarehouse is Map
          ? assignedWarehouse['id']?.toString()
          : _user!.assignedWarehouseId,
      assignedWarehouseName: assignedWarehouse is Map
          ? assignedWarehouse['name']?.toString()
          : (_user!.assignedWarehouseName ??
                profile['assigned_warehouse_name']?.toString()),
      assignedWarehouseCity: assignedWarehouse is Map
          ? assignedWarehouse['city']?.toString()
          : _user!.assignedWarehouseCity,
    );

    await _persistSession();
    notifyListeners();
  }

  Future<void> _persistSession() async {
    final prefs = await SharedPreferences.getInstance();
    if (_token != null) {
      await prefs.setString(_tokenKey, _token!);
    }
    if (_user != null) {
      await prefs.setString(_userKey, jsonEncode(_user!.toMap()));
    }
  }

  Future<void> _clearSession() async {
    _token = null;
    _user = null;
    _error = null;
    final prefs = await SharedPreferences.getInstance();
    await prefs.remove(_tokenKey);
    await prefs.remove(_userKey);
    NotificationService.clearAuth();
  }
}
