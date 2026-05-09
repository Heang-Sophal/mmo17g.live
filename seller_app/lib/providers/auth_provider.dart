import 'dart:async';
import 'dart:convert';

import 'package:flutter/material.dart';
import 'package:shared_preferences/shared_preferences.dart';
import 'package:seller_app/services/auth_service.dart';
import 'package:seller_app/services/notification_service.dart';

class UserModel {
  final String id;
  final String name;
  final String email;
  final String role;
  final String? avatar;
  final String? avatarUrl;
  final List<String> mobilePermissions;
  final bool isDelivery;
  final String? assignedWarehouseId;
  final String? assignedWarehouseName;
  final String? assignedWarehouseCity;

  UserModel({
    required this.id,
    required this.name,
    required this.email,
    required this.role,
    this.avatar,
    this.avatarUrl,
    this.mobilePermissions = const [],
    this.isDelivery = false,
    this.assignedWarehouseId,
    this.assignedWarehouseName,
    this.assignedWarehouseCity,
  });

  factory UserModel.fromMap(Map<String, dynamic> map) {
    final perms = map['mobile_permissions'];
    final assignedWarehouse = map['assigned_warehouse'];
    List<String> mobilePerms = [];
    if (perms is List) {
      mobilePerms = perms.map((e) => e.toString()).toList();
    }
    final role = map['role']?.toString() ?? 'Sale';
    final normalizedRole = role.toLowerCase();
    return UserModel(
      id: map['id']?.toString() ?? '',
      name: map['name'] ?? '',
      email: map['email'] ?? '',
      role: role,
      avatar: map['avatar'],
      avatarUrl: map['avatar_url'],
      mobilePermissions: mobilePerms,
      isDelivery:
          map['is_delivery'] == true ||
          normalizedRole == 'delivery' ||
          normalizedRole == 'laivrison',
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

  bool hasMobilePermission(String permission) =>
      mobilePermissions.contains(permission);
  bool canViewProducts() =>
      hasMobilePermission('mobile_seller_products') ||
      hasMobilePermission('view');
  bool canCreateProducts() =>
      hasMobilePermission('mobile_seller_products') ||
      hasMobilePermission('create');
  bool canEditProducts() =>
      hasMobilePermission('mobile_seller_products') ||
      hasMobilePermission('edit');
  bool canDeleteProducts() =>
      hasMobilePermission('mobile_seller_products') ||
      hasMobilePermission('delete');

  Map<String, dynamic> toMap() {
    return {
      'id': id,
      'name': name,
      'email': email,
      'role': role,
      'avatar': avatar,
      'avatar_url': avatarUrl,
      'mobile_permissions': mobilePermissions,
      'is_delivery': isDelivery,
      'assigned_warehouse': assignedWarehouseId == null
          ? null
          : {
              'id': assignedWarehouseId,
              'name': assignedWarehouseName,
              'city': assignedWarehouseCity,
            },
    };
  }
}

class AuthProvider extends ChangeNotifier {
  static const String _tokenKey = 'seller_app_auth_token';
  static const String _userKey = 'seller_app_auth_user';

  final AuthService _authService;
  UserModel? _user;
  String? _token;
  bool _isLoading = false;
  String? _error;
  bool _isInitialized = false;

  AuthProvider({AuthService? authService})
    : _authService = authService ?? AuthService();

  UserModel? get user => _user;
  String? get token => _token;
  bool get isLoading => _isLoading;
  String? get error => _error;
  bool get isAuthenticated => _token != null && _user != null;
  bool get isInitialized => _isInitialized;
  bool get isDeliveryUser => _user?.isDelivery ?? false;

  // Mobile permission helpers
  bool get canViewProducts => _user?.canViewProducts() ?? false;
  bool get canCreateProducts => _user?.canCreateProducts() ?? false;
  bool get canEditProducts => _user?.canEditProducts() ?? false;
  bool get canDeleteProducts => _user?.canDeleteProducts() ?? false;

  /// ដំណើរការដំបូង - ពិនិត្យមើលថាតើមាន Token ឬអត់
  Future<void> init() async {
    if (_isInitialized) return;

    _isLoading = true;
    notifyListeners();

    try {
      final prefs = await SharedPreferences.getInstance();
      _token = prefs.getString(_tokenKey);

      final cachedUser = prefs.getString(_userKey);
      if (cachedUser != null && cachedUser.isNotEmpty) {
        try {
          _user = UserModel.fromMap(
            Map<String, dynamic>.from(jsonDecode(cachedUser) as Map),
          );
        } catch (_) {}
      }

      if (_token != null && _token!.isNotEmpty) {
        try {
          final result = await _authService.checkAuth(_token!);
          if (result['authenticated'] == true) {
            _user = UserModel.fromMap(
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
    } catch (_) {
      await _clearSession();
    } finally {
      _isInitialized = true;
      _isLoading = false;
      notifyListeners();
    }
  }

  /// Sign In
  Future<Map<String, dynamic>> signIn({
    required String email,
    required String password,
  }) async {
    _error = null;
    _isLoading = true;
    notifyListeners();

    try {
      final result = await _authService.login(email, password);
      final data = Map<String, dynamic>.from(result['data'] as Map);
      _token = data['token']?.toString();
      _user = UserModel.fromMap(Map<String, dynamic>.from(data['user'] as Map));

      _isLoading = false;
      _isInitialized = true;
      await _persistSession();
      await NotificationService.syncDeviceToken(
        authToken: _token,
        userId: _user?.id,
      );
      notifyListeners();

      return {
        'success': true,
        'message': result['message'] ?? 'Login successful',
        'user': _user,
      };
    } on AuthException catch (e) {
      _isLoading = false;
      _error = e.message;
      notifyListeners();

      return {
        'success': false,
        'message': e.message,
        'error_type': e.errorType,
        'attempts_remaining': e.attemptsRemaining,
        'blocked_until': e.blockedUntil,
      };
    } on TimeoutException catch (e) {
      _isLoading = false;
      _error = e.message;
      notifyListeners();

      return {
        'success': false,
        'message': e.message,
        'error_type': 'network_error',
      };
    } catch (e) {
      _isLoading = false;
      _error = e.toString();
      notifyListeners();
      return {
        'success': false,
        'message': 'Login error: ${e.toString()}',
        'error_type': 'network_error',
      };
    }
  }

  /// Sign Out
  Future<void> signOut() async {
    final token = _token;

    try {
      if (token != null && token.isNotEmpty) {
        await _authService.logout(token);
      }
    } catch (_) {}

    await _clearSession();
    NotificationService.clearAuth();
    _isInitialized = true;
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

  /// លុប Auth Data
  Future<void> _clearSession() async {
    _token = null;
    _user = null;
    _error = null;
    final prefs = await SharedPreferences.getInstance();
    await prefs.remove(_tokenKey);
    await prefs.remove(_userKey);
    NotificationService.clearAuth();
  }

  /// ចូលប្រើប្រាស់ឡើងវិញ (Re-authenticate)
  Future<bool> reAuthenticate() async {
    if (_token == null) return false;

    try {
      final result = await _authService.checkAuth(_token!);
      if (result['authenticated'] == true) {
        _user = UserModel.fromMap(
          Map<String, dynamic>.from(result['user'] as Map),
        );
        await _persistSession();
        notifyListeners();
        return true;
      }
      await _clearSession();
      notifyListeners();
    } catch (_) {
      await _clearSession();
      notifyListeners();
    }

    return false;
  }
}
