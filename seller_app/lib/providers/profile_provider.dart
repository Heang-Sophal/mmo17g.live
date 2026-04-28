import 'package:flutter/material.dart';
import 'package:seller_app/services/api_service.dart';

class ProfileModel {
  final String id;
  final String firstname;
  final String lastname;
  final String name;
  final String email;
  final String? phone;
  final String? username;
  final String? avatar;
  final String? avatarUrl;
  final String role;
  final bool isActive;
  final String? assignedWarehouseName;
  final DateTime createdAt;
  final int editCountThisYear;
  final int editLimit;
  final bool canEdit;
  final int editsRemaining;

  ProfileModel({
    required this.id,
    this.firstname = '',
    this.lastname = '',
    this.name = '',
    required this.email,
    this.phone,
    this.username,
    this.avatar,
    this.avatarUrl,
    this.role = 'user',
    this.isActive = true,
    this.assignedWarehouseName,
    required this.createdAt,
    this.editCountThisYear = 0,
    this.editLimit = 3,
    this.canEdit = true,
    this.editsRemaining = 3,
  });

  factory ProfileModel.fromMap(Map<String, dynamic> map) {
    return ProfileModel(
      id: map['id']?.toString() ?? '',
      firstname: map['firstname'] ?? '',
      lastname: map['lastname'] ?? '',
      name: map['name'] ?? '',
      email: map['email'] ?? '',
      phone: map['phone'],
      username: map['username'],
      avatar: map['avatar'],
      avatarUrl: map['avatar_url'],
      role: map['role'] ?? 'user',
      isActive: map['is_active'] ?? true,
      assignedWarehouseName: map['assigned_warehouse_name'],
      createdAt: _parseDateTime(map['created_at']),
      editCountThisYear: map['edit_count_this_year'] ?? 0,
      editLimit: map['edit_limit'] ?? 3,
      canEdit: map['can_edit'] ?? true,
      editsRemaining: map['edits_remaining'] ?? 3,
    );
  }

  static DateTime _parseDateTime(dynamic value) {
    if (value == null) return DateTime.now();
    if (value is DateTime) return value;
    if (value is String) {
      try {
        return DateTime.parse(value);
      } catch (e) {
        return DateTime.now();
      }
    }
    return DateTime.now();
  }

  ProfileModel copyWith({
    String? name,
    String? email,
    String? phone,
    String? username,
    String? avatar,
    String? avatarUrl,
    int? editCountThisYear,
    int? editsRemaining,
    bool? canEdit,
  }) {
    return ProfileModel(
      id: id,
      name: name ?? this.name,
      email: email ?? this.email,
      phone: phone ?? this.phone,
      username: username ?? this.username,
      avatar: avatar ?? this.avatar,
      avatarUrl: avatarUrl ?? this.avatarUrl,
      role: role,
      isActive: isActive,
      assignedWarehouseName: assignedWarehouseName,
      createdAt: createdAt,
      editCountThisYear: editCountThisYear ?? this.editCountThisYear,
      editLimit: editLimit,
      canEdit: canEdit ?? this.canEdit,
      editsRemaining: editsRemaining ?? this.editsRemaining,
    );
  }
}

class ProfileProvider extends ChangeNotifier {
  final ApiService _apiService;
  ProfileModel? _profile;
  String? _token;
  bool _isLoading = false;
  String? _error;

  ProfileProvider({String? token}) : _apiService = ApiService(), _token = token;

  ProfileModel? get profile => _profile;
  bool get isLoading => _isLoading;
  String? get error => _error;
  bool get canEdit => _profile?.canEdit ?? false;
  int get editsRemaining => _profile?.editsRemaining ?? 0;
  int get editCountThisYear => _profile?.editCountThisYear ?? 0;

  /// Set Token សម្រាប់ផ្ញើជាមួយ API Request
  void setToken(String? token) {
    // Clear existing profile when token changes (user switched)
    if (_token != token) {
      _profile = null;
      _error = null;
    }
    _token = token;
    _apiService.setToken(token);
  }

  /// ទាញទិន្ននយ Profile
  Future<void> fetchProfile() async {
    _isLoading = true;
    _error = null;
    notifyListeners();

    try {
      final data = await _apiService.getProfile(_token);
      _profile = ProfileModel.fromMap(data);
      _isLoading = false;
    } catch (e) {
      _error = e.toString();
      _isLoading = false;
      // បើមាន error ប្រើ sample data
      _profile = _getSampleProfile();
    }
    notifyListeners();
  }

  /// កែប្រែ Profile
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
      final Map<String, dynamic> updateData = {};

      if (firstname != null) updateData['firstname'] = firstname;
      if (lastname != null) updateData['lastname'] = lastname;
      if (email != null) updateData['email'] = email;
      if (phone != null) updateData['phone'] = phone;
      if (username != null) updateData['username'] = username;

      final result = await _apiService.updateProfile(updateData);

      if (result['success'] == true) {
        _profile = ProfileModel.fromMap(result['data']);
        _isLoading = false;
        notifyListeners();
        return {
          'success': true,
          'message': result['message'] ?? 'Profile updated successfully',
          'changes_made': result['changes_made'] ?? 0,
        };
      } else {
        _isLoading = false;
        notifyListeners();
        return {
          'success': false,
          'message': result['message'] ?? 'Failed to update profile',
        };
      }
    } catch (e) {
      _error = e.toString();
      _isLoading = false;
      notifyListeners();

      // ពិនិត្យមើលបើជា edit limit error
      if (e.toString().contains('429') || e.toString().contains('maximum')) {
        return {
          'success': false,
          'message':
              'You have reached the maximum profile edit limit (3 times per year)',
          'error_type': 'edit_limit',
        };
      }

      return {
        'success': false,
        'message': 'Failed to update profile: ${e.toString()}',
      };
    }
  }

  /// កែប្រែ Password
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
        'success': true,
        'message': result['message'] ?? 'Password updated successfully',
      };
    } catch (e) {
      _error = e.toString();
      _isLoading = false;
      notifyListeners();

      // Parse detailed error message from API exception
      String detailedMessage = 'Failed to update password';
      if (e.toString().contains('Validation error:')) {
        // Extract the validation error details
        detailedMessage = e.toString();
      } else if (e.toString().contains('ApiException:')) {
        // Extract the API exception message
        final match = RegExp(r'ApiException:\s*(.+)').firstMatch(e.toString());
        if (match != null) {
          detailedMessage = match.group(1) ?? 'Failed to update password';
        }
      }

      return {
        'success': false,
        'message': detailedMessage,
        'error': e.toString(),
      };
    }
  }

  /// ទាញទិន្នន័យ Edit History
  Future<List<Map<String, dynamic>>> getEditHistory() async {
    try {
      final data = await _apiService.getProfileEditHistory();
      return data.cast<Map<String, dynamic>>();
    } catch (e) {
      return [];
    }
  }

  /// Sample Profile សម្រាប់ Development
  ProfileModel _getSampleProfile() {
    return ProfileModel(
      id: '1',
      name: 'Admin User',
      email: 'admin@example.com',
      phone: '+855 12 345 678',
      username: 'admin',
      role: 'admin',
      isActive: true,
      createdAt: DateTime.now(),
      editCountThisYear: 0,
      editLimit: 3,
      canEdit: true,
      editsRemaining: 3,
    );
  }
}
