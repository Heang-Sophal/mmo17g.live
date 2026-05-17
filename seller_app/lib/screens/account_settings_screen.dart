import 'dart:io';
import 'package:flutter/material.dart';
import 'package:provider/provider.dart';
import 'package:image_picker/image_picker.dart';
import 'package:seller_app/providers/profile_provider.dart';
import 'package:seller_app/providers/auth_provider.dart';
import 'package:seller_app/providers/language_provider.dart';
import 'package:seller_app/services/api_service.dart';
import 'package:seller_app/widgets/cached_image.dart';

class AccountSettingsScreen extends StatefulWidget {
  const AccountSettingsScreen({super.key});

  @override
  State<AccountSettingsScreen> createState() => _AccountSettingsScreenState();
}

class _AccountSettingsScreenState extends State<AccountSettingsScreen> {
  final _formKey = GlobalKey<FormState>();
  late TextEditingController _firstnameController;
  late TextEditingController _lastnameController;
  late TextEditingController _emailController;
  late TextEditingController _phoneController;
  late TextEditingController _usernameController;
  bool _isLoading = false;
  bool _isUploadingPhoto = false;
  File? _selectedPhoto;
  final ImagePicker _picker = ImagePicker();
  String? _avatarUrl;
  Map<String, bool> _mobilePermissions = {};

  @override
  void initState() {
    super.initState();
    final profile = context.read<ProfileProvider>().profile;
    _firstnameController = TextEditingController(
      text: profile?.firstname ?? '',
    );
    _lastnameController = TextEditingController(text: profile?.lastname ?? '');
    _emailController = TextEditingController(text: profile?.email ?? '');
    _phoneController = TextEditingController(text: profile?.phone ?? '');
    _usernameController = TextEditingController(text: profile?.username ?? '');
    _avatarUrl = profile?.avatarUrl;
    // Read parsed mobilePermissions from ProfileModel if available
    try {
      final profileModel = context.read<ProfileProvider>().profile;
      if (profileModel != null) {
        _mobilePermissions = Map<String, bool>.from(
          profileModel.mobilePermissions,
        );
      } else {
        _mobilePermissions = {};
      }
    } catch (_) {
      _mobilePermissions = {};
    }
  }

  @override
  void dispose() {
    _firstnameController.dispose();
    _lastnameController.dispose();
    _emailController.dispose();
    _phoneController.dispose();
    _usernameController.dispose();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    final languageProvider = context.watch<LanguageProvider>();
    return Scaffold(
      appBar: AppBar(title: Text(languageProvider.t('account_settings'))),
      body: Consumer<ProfileProvider>(
        builder: (context, profileProvider, child) {
          if (!profileProvider.canEdit) {
            return _buildLimitReachedView();
          }

          return Form(
            key: _formKey,
            child: ListView(
              padding: const EdgeInsets.all(16),
              children: [
                // Profile Photo Section
                Center(
                  child: Column(
                    children: [
                      // Avatar Circle
                      Stack(
                        children: [
                          // Avatar Image or Placeholder
                          Container(
                            width: 120,
                            height: 120,
                            decoration: BoxDecoration(
                              color: const Color(
                                0xFF6C63FF,
                              ).withValues(alpha: 0.1),
                              shape: BoxShape.circle,
                              border: Border.all(
                                color: const Color(0xFF6C63FF),
                                width: 3,
                              ),
                            ),
                            child: _selectedPhoto != null
                                ? ClipOval(
                                    child: Image.file(
                                      _selectedPhoto!,
                                      fit: BoxFit.cover,
                                      width: 120,
                                      height: 120,
                                    ),
                                  )
                                : _avatarUrl != null && _avatarUrl!.isNotEmpty
                                ? ClipOval(
                                    child: CachedImage(
                                      url: _avatarUrl!,
                                      fit: BoxFit.cover,
                                      width: 120,
                                      height: 120,
                                      errorWidget: const Icon(
                                        Icons.person,
                                        size: 60,
                                        color: Color(0xFF6C63FF),
                                      ),
                                    ),
                                  )
                                : const Icon(
                                    Icons.person,
                                    size: 60,
                                    color: Color(0xFF6C63FF),
                                  ),
                          ),
                          // Change Photo Button
                          Positioned(
                            bottom: 0,
                            right: 0,
                            child: GestureDetector(
                              onTap: _isUploadingPhoto
                                  ? null
                                  : _showPhotoOptions,
                              child: Container(
                                padding: const EdgeInsets.all(8),
                                decoration: BoxDecoration(
                                  color: const Color(0xFF6C63FF),
                                  shape: BoxShape.circle,
                                  border: Border.all(
                                    color: Colors.white,
                                    width: 2,
                                  ),
                                ),
                                child: _isUploadingPhoto
                                    ? const SizedBox(
                                        width: 16,
                                        height: 16,
                                        child: CircularProgressIndicator(
                                          strokeWidth: 2,
                                          valueColor:
                                              AlwaysStoppedAnimation<Color>(
                                                Colors.white,
                                              ),
                                        ),
                                      )
                                    : const Icon(
                                        Icons.camera_alt,
                                        size: 16,
                                        color: Colors.white,
                                      ),
                              ),
                            ),
                          ),
                        ],
                      ),
                      const SizedBox(height: 16),
                      // Change Photo Text
                      GestureDetector(
                        onTap: _isUploadingPhoto ? null : _showPhotoOptions,
                        child: Text(
                          _isUploadingPhoto
                              ? languageProvider.t('loading')
                              : languageProvider.t('change_profile_photo'),
                          style: TextStyle(
                            color: const Color(0xFF6C63FF),
                            fontWeight: FontWeight.bold,
                            decoration: TextDecoration.underline,
                          ),
                        ),
                      ),
                      const SizedBox(height: 8),
                      Text(
                        languageProvider.t('tap_to_upload_photo'),
                        style: TextStyle(color: Colors.grey[600], fontSize: 12),
                      ),
                    ],
                  ),
                ),
                const SizedBox(height: 32),

                // Permissions header: explain web-origin and mobile toggle
                Container(
                  padding: const EdgeInsets.all(12),
                  decoration: BoxDecoration(
                    color: Colors.grey.withValues(alpha: 0.06),
                    borderRadius: BorderRadius.circular(12),
                  ),
                  child: Row(
                    crossAxisAlignment: CrossAxisAlignment.start,
                    children: [
                      const Icon(Icons.shield_outlined, size: 20),
                      const SizedBox(width: 8),
                      Expanded(
                        child: Column(
                          crossAxisAlignment: CrossAxisAlignment.start,
                          children: [
                            Text(
                              languageProvider.t('mobile_permissions'),
                              style: const TextStyle(
                                fontWeight: FontWeight.bold,
                              ),
                            ),
                            const SizedBox(height: 6),
                            Text(
                              languageProvider.t(
                                'permissions_explain',
                              ) /* e.g. 'Permissions originate from the web. Toggling here enables/disables the feature on mobile.' */,
                              style: const TextStyle(
                                fontSize: 13,
                                color: Colors.black87,
                              ),
                            ),
                          ],
                        ),
                      ),
                    ],
                  ),
                ),
                const SizedBox(height: 8),
                _buildPermissionSwitch(
                  'mobile_seller_pos',
                  'pos',
                  _mobilePermissions,
                ),
                _buildPermissionSwitch(
                  'mobile_seller_orders',
                  'orders',
                  _mobilePermissions,
                ),
                _buildPermissionSwitch(
                  'mobile_seller_products',
                  'products',
                  _mobilePermissions,
                ),
                _buildPermissionSwitch(
                  'mobile_seller_sale_returns',
                  'sales_return',
                  _mobilePermissions,
                ),
                _buildPermissionSwitch(
                  'mobile_seller_profile',
                  'profile',
                  _mobilePermissions,
                ),
                _buildPermissionSwitch(
                  'mobile_seller_reports',
                  'report',
                  _mobilePermissions,
                ),
                const SizedBox(height: 16),

                // Edit Limit Warning
                Container(
                  padding: const EdgeInsets.all(16),
                  decoration: BoxDecoration(
                    color: Colors.orange.withValues(alpha: 0.1),
                    borderRadius: BorderRadius.circular(12),
                    border: Border.all(color: Colors.orange),
                  ),
                  child: Row(
                    children: [
                      const Icon(Icons.info_outline, color: Colors.orange),
                      const SizedBox(width: 12),
                      Expanded(
                        child: Column(
                          crossAxisAlignment: CrossAxisAlignment.start,
                          children: [
                            Text(
                              languageProvider.t('edit_limit_warning'),
                              style: const TextStyle(
                                fontWeight: FontWeight.bold,
                                color: Colors.orange,
                              ),
                            ),
                            Text(
                              languageProvider
                                  .t('edits_remaining')
                                  .replaceAll(
                                    '{count}',
                                    profileProvider.editsRemaining.toString(),
                                  ),
                              style: TextStyle(
                                fontSize: 13,
                                color: Colors.orange[700],
                              ),
                            ),
                          ],
                        ),
                      ),
                    ],
                  ),
                ),
                const SizedBox(height: 24),

                // First Name Field
                TextFormField(
                  controller: _firstnameController,
                  decoration: InputDecoration(
                    labelText: languageProvider.t('first_name'),
                    prefixIcon: const Icon(Icons.person_outline),
                  ),
                  validator: (value) {
                    if (value == null || value.isEmpty) {
                      return languageProvider.t('please_enter_first_name');
                    }
                    return null;
                  },
                ),
                const SizedBox(height: 16),

                // Last Name Field
                TextFormField(
                  controller: _lastnameController,
                  decoration: InputDecoration(
                    labelText: languageProvider.t('last_name'),
                    prefixIcon: const Icon(Icons.person_outline),
                  ),
                ),
                const SizedBox(height: 16),

                // Email Field
                TextFormField(
                  controller: _emailController,
                  decoration: InputDecoration(
                    labelText: languageProvider.t('email'),
                    prefixIcon: const Icon(Icons.email),
                  ),
                  keyboardType: TextInputType.emailAddress,
                  validator: (value) {
                    if (value == null || value.isEmpty) {
                      return languageProvider.t('please_enter_email');
                    }
                    if (!value.contains('@')) {
                      return languageProvider.t('please_enter_valid_email');
                    }
                    return null;
                  },
                ),
                const SizedBox(height: 16),

                // Phone Field
                TextFormField(
                  controller: _phoneController,
                  decoration: InputDecoration(
                    labelText: languageProvider.t('phone'),
                    prefixIcon: const Icon(Icons.phone),
                  ),
                  keyboardType: TextInputType.phone,
                ),
                const SizedBox(height: 16),

                // Username Field
                TextFormField(
                  controller: _usernameController,
                  decoration: InputDecoration(
                    labelText: languageProvider.t('username'),
                    prefixIcon: const Icon(Icons.alternate_email),
                  ),
                ),
                const SizedBox(height: 32),

                // Save Button
                ElevatedButton(
                  onPressed: _isLoading ? null : _saveProfile,
                  style: ElevatedButton.styleFrom(
                    padding: const EdgeInsets.symmetric(vertical: 16),
                    shape: RoundedRectangleBorder(
                      borderRadius: BorderRadius.circular(12),
                    ),
                  ),
                  child: _isLoading
                      ? const SizedBox(
                          height: 20,
                          width: 20,
                          child: CircularProgressIndicator(
                            strokeWidth: 2,
                            valueColor: AlwaysStoppedAnimation<Color>(
                              Colors.white,
                            ),
                          ),
                        )
                      : Text(
                          languageProvider.t('save'),
                          style: const TextStyle(fontSize: 16),
                        ),
                ),
                const SizedBox(height: 16),

                // Cancel Button
                OutlinedButton(
                  onPressed: _isLoading ? null : () => Navigator.pop(context),
                  style: OutlinedButton.styleFrom(
                    padding: const EdgeInsets.symmetric(vertical: 16),
                    shape: RoundedRectangleBorder(
                      borderRadius: BorderRadius.circular(12),
                    ),
                  ),
                  child: Text(
                    languageProvider.t('cancel'),
                    style: const TextStyle(fontSize: 16),
                  ),
                ),
              ],
            ),
          );
        },
      ),
    );
  }

  Widget _buildPermissionSwitch(
    String key,
    String labelKey,
    Map<String, bool> map,
  ) {
    final languageProvider = context.read<LanguageProvider>();
    final profile = context.read<ProfileProvider>().profile;
    final current = map[key] == true;
    final locked = profile?.isPermissionLocked(key) == true;
    return SwitchListTile(
      title: Text(languageProvider.t(labelKey)),
      subtitle: Text(
        locked
            ? languageProvider.t('controlled_by_web')
            : (current
                  ? languageProvider.t('enabled_on_mobile')
                  : languageProvider.t('disabled_on_mobile')),
      ),
      value: current,
      onChanged: locked
          ? null
          : (v) {
              setState(() {
                map[key] = v;
              });
            },
    );
  }

  Widget _buildLimitReachedView() {
    final languageProvider = context.watch<LanguageProvider>();
    return Center(
      child: Padding(
        padding: const EdgeInsets.all(24),
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            Container(
              padding: const EdgeInsets.all(24),
              decoration: BoxDecoration(
                color: Colors.red.withValues(alpha: 0.1),
                shape: BoxShape.circle,
              ),
              child: const Icon(Icons.edit_off, size: 80, color: Colors.red),
            ),
            const SizedBox(height: 32),
            Text(
              languageProvider.t('edit_limit_reached'),
              style: const TextStyle(fontSize: 24, fontWeight: FontWeight.bold),
            ),
            const SizedBox(height: 16),
            Text(
              languageProvider.t('edit_limit_reached_message'),
              textAlign: TextAlign.center,
              style: const TextStyle(fontSize: 16, color: Colors.grey),
            ),
            const SizedBox(height: 32),
            ElevatedButton(
              onPressed: () => Navigator.pop(context),
              style: ElevatedButton.styleFrom(
                padding: const EdgeInsets.symmetric(
                  horizontal: 32,
                  vertical: 16,
                ),
              ),
              child: Text(languageProvider.t('go_back')),
            ),
          ],
        ),
      ),
    );
  }

  Future<void> _saveProfile() async {
    if (!_formKey.currentState!.validate()) return;

    setState(() {
      _isLoading = true;
    });

    final profileProvider = context.read<ProfileProvider>();
    final languageProvider = context.read<LanguageProvider>();

    final result = await profileProvider.updateProfile(
      firstname: _firstnameController.text,
      lastname: _lastnameController.text,
      email: _emailController.text,
      phone: _phoneController.text.isEmpty ? null : _phoneController.text,
      username: _usernameController.text.isEmpty
          ? null
          : _usernameController.text,
      mobilePermissions: _mobilePermissions,
    );

    if (!mounted) return;

    setState(() {
      _isLoading = false;
    });

    ScaffoldMessenger.of(context).showSnackBar(
      SnackBar(
        content: Text(
          result['message'] ?? languageProvider.t('profile_updated'),
        ),
        backgroundColor: result['success'] == true ? Colors.green : Colors.red,
        duration: const Duration(seconds: 4),
      ),
    );

    if (result['success'] == true) {
      Navigator.pop(context, true);
    }
  }

  // បង្ហាញជម្រើសរូបភាព
  void _showPhotoOptions() {
    final languageProvider = context.read<LanguageProvider>();
    showModalBottomSheet(
      context: context,
      builder: (context) => SafeArea(
        child: Wrap(
          children: [
            ListTile(
              leading: const Icon(
                Icons.photo_library,
                color: Color(0xFF6C63FF),
              ),
              title: Text(languageProvider.t('choose_from_gallery')),
              onTap: () {
                Navigator.pop(context);
                _pickImage(ImageSource.gallery);
              },
            ),
            ListTile(
              leading: const Icon(Icons.camera_alt, color: Color(0xFF6C63FF)),
              title: Text(languageProvider.t('take_photo')),
              onTap: () {
                Navigator.pop(context);
                _pickImage(ImageSource.camera);
              },
            ),
            if (_avatarUrl != null)
              ListTile(
                leading: const Icon(Icons.delete, color: Colors.red),
                title: Text(languageProvider.t('remove_photo')),
                onTap: () {
                  Navigator.pop(context);
                  _removePhoto();
                },
              ),
          ],
        ),
      ),
    );
  }

  // ជ្រើសរើសរូបភាព
  Future<void> _pickImage(ImageSource source) async {
    final languageProvider = context.read<LanguageProvider>();
    try {
      final XFile? pickedFile = await _picker.pickImage(
        source: source,
        maxWidth: 800,
        maxHeight: 800,
        imageQuality: 85,
      );

      if (pickedFile != null) {
        setState(() {
          _selectedPhoto = File(pickedFile.path);
        });

        // Upload រូបភាព
        await _uploadPhoto(File(pickedFile.path));
      }
    } catch (e) {
      if (!mounted) return;
      ScaffoldMessenger.of(context).showSnackBar(
        SnackBar(
          content: Text(
            languageProvider
                .t('error_picking_image')
                .replaceAll('{error}', e.toString()),
          ),
          backgroundColor: Colors.red,
        ),
      );
    }
  }

  // Upload រូបភាពទៅ Server
  Future<void> _uploadPhoto(File photo) async {
    final languageProvider = context.read<LanguageProvider>();
    setState(() {
      _isUploadingPhoto = true;
    });

    try {
      final apiService = ApiService();
      // យក Token ពី AuthProvider
      final authProvider = context.read<AuthProvider>();
      final token = authProvider.token;

      if (token == null || token.isEmpty) {
        throw Exception('Authentication token not found');
      }

      final result = await apiService.uploadProfilePhoto(photo, token);

      setState(() {
        _isUploadingPhoto = false;
      });

      if (!mounted) return;

      if (result['success'] == true) {
        setState(() {
          _avatarUrl = result['data']['avatar_url'];
          _selectedPhoto = null;
        });

        // បង្ហាញជោគជ័យ
        ScaffoldMessenger.of(context).showSnackBar(
          SnackBar(
            content: Text(
              languageProvider
                  .t('profile_photo_updated')
                  .replaceAll(
                    '{edits}',
                    result['data']['edits_remaining'].toString(),
                  ),
            ),
            backgroundColor: Colors.green,
            duration: const Duration(seconds: 3),
          ),
        );

        // Refresh Profile
        final profileProvider = context.read<ProfileProvider>();
        profileProvider.fetchProfile();
      } else {
        ScaffoldMessenger.of(context).showSnackBar(
          SnackBar(
            content: Text(
              result['message'] ?? languageProvider.t('failed_to_upload_photo'),
            ),
            backgroundColor: Colors.red,
          ),
        );
      }
    } catch (e) {
      setState(() {
        _isUploadingPhoto = false;
      });

      if (!mounted) return;

      ScaffoldMessenger.of(context).showSnackBar(
        SnackBar(
          content: Text(
            languageProvider
                .t('upload_error')
                .replaceAll('{error}', e.toString()),
          ),
          backgroundColor: Colors.red,
        ),
      );
    }
  }

  // លុបរូបភាព
  void _removePhoto() {
    final languageProvider = context.read<LanguageProvider>();
    showDialog(
      context: context,
      builder: (context) => AlertDialog(
        title: Text(languageProvider.t('remove_photo')),
        content: Text(languageProvider.t('confirm_remove_photo')),
        actions: [
          TextButton(
            onPressed: () => Navigator.pop(context),
            child: Text(languageProvider.t('cancel')),
          ),
          ElevatedButton(
            onPressed: () {
              Navigator.pop(context);
              setState(() {
                _avatarUrl = null;
                _selectedPhoto = null;
              });
              ScaffoldMessenger.of(context).showSnackBar(
                SnackBar(
                  content: Text(languageProvider.t('profile_photo_removed')),
                  backgroundColor: Colors.orange,
                ),
              );
            },
            style: ElevatedButton.styleFrom(
              backgroundColor: Colors.red,
              foregroundColor: Colors.white,
            ),
            child: Text(languageProvider.t('remove')),
          ),
        ],
      ),
    );
  }
}
