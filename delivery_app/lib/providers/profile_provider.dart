import 'package:delivery_app/services/delivery_api_service.dart';
import 'package:flutter/material.dart';

class ProfileProvider extends ChangeNotifier {
  final DeliveryApiService _apiService = DeliveryApiService();

  Map<String, dynamic>? _profile;
  bool _isLoading = false;
  String? _error;
  String? _token;

  Map<String, dynamic>? get profile => _profile;
  bool get isLoading => _isLoading;
  String? get error => _error;
  bool get canEdit => _profile?['can_edit'] == true;
  int get editsRemaining => _toInt(_profile?['edits_remaining']);
  int get editCountThisYear => _toInt(_profile?['edit_count_this_year']);

  void setToken(String? token) {
    if (_token == token) return;
    _token = token;
    _apiService.setToken(token);
    _profile = null;
    _error = null;
  }

  Future<void> fetchProfile() async {
    _isLoading = true;
    _error = null;
    notifyListeners();

    try {
      _profile = await _apiService.getProfile();
    } catch (e) {
      _error = e.toString();
    } finally {
      _isLoading = false;
      notifyListeners();
    }
  }

  Future<Map<String, dynamic>> updateProfile({
    String? firstname,
    String? lastname,
    String? email,
    String? phone,
    String? username,
  }) async {
    _isLoading = true;
    _error = null;
    notifyListeners();

    try {
      final payload = <String, dynamic>{};
      if (firstname != null) payload['firstname'] = firstname;
      if (lastname != null) payload['lastname'] = lastname;
      if (email != null) payload['email'] = email;
      if (phone != null) payload['phone'] = phone;
      if (username != null) payload['username'] = username;

      final result = await _apiService.updateProfile(payload);
      final data = (result['data'] as Map?)?.cast<String, dynamic>();
      if (data != null) {
        _profile = data;
      }

      _isLoading = false;
      notifyListeners();
      return {
        'success': result['success'] == true,
        'message':
            result['message']?.toString() ?? 'Profile updated successfully',
      };
    } catch (e) {
      _error = e.toString();
      _isLoading = false;
      notifyListeners();
      return {
        'success': false,
        'message': _cleanErrorMessage(e),
        'error': e.toString(),
      };
    }
  }

  Future<Map<String, dynamic>> changePassword({
    required String currentPassword,
    required String newPassword,
    required String confirmPassword,
  }) async {
    _isLoading = true;
    _error = null;
    notifyListeners();

    try {
      final result = await _apiService.changePassword(
        currentPassword: currentPassword,
        newPassword: newPassword,
        confirmPassword: confirmPassword,
      );

      _isLoading = false;
      notifyListeners();
      return {
        'success': result['success'] == true,
        'message':
            result['message']?.toString() ?? 'Password updated successfully',
      };
    } catch (e) {
      _error = e.toString();
      _isLoading = false;
      notifyListeners();
      return {
        'success': false,
        'message': _cleanErrorMessage(e),
        'error': e.toString(),
      };
    }
  }

  int _toInt(dynamic value) {
    if (value is int) return value;
    if (value is num) return value.toInt();
    return int.tryParse(value?.toString() ?? '') ?? 0;
  }

  String _cleanErrorMessage(Object error) {
    final message = error.toString();
    final match = RegExp(r'ApiException\(\d+,\s*(.+)\)$').firstMatch(message);
    if (match != null) {
      return match.group(1) ?? message;
    }
    return message;
  }
}
