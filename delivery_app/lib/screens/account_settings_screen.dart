import 'dart:io';

import 'package:delivery_app/providers/auth_provider.dart';
import 'package:delivery_app/providers/language_provider.dart';
import 'package:delivery_app/providers/profile_provider.dart';
import 'package:delivery_app/widgets/cached_image.dart';
import 'package:flutter/material.dart';
import 'package:image_picker/image_picker.dart';
import 'package:provider/provider.dart';

class AccountSettingsScreen extends StatefulWidget {
  const AccountSettingsScreen({super.key});

  @override
  State<AccountSettingsScreen> createState() => _AccountSettingsScreenState();
}

class _AccountSettingsScreenState extends State<AccountSettingsScreen> {
  final _formKey = GlobalKey<FormState>();
  late final TextEditingController _firstnameController;
  late final TextEditingController _lastnameController;
  late final TextEditingController _emailController;
  late final TextEditingController _phoneController;
  late final TextEditingController _usernameController;

  bool _isSaving = false;
  bool _isUploadingPhoto = false;
  File? _selectedPhoto;
  final ImagePicker _picker = ImagePicker();
  String? _avatarUrl;

  @override
  void initState() {
    super.initState();
    final profile =
        context.read<ProfileProvider>().profile ?? const <String, dynamic>{};
    _firstnameController = TextEditingController(
      text: profile['firstname']?.toString() ?? '',
    );
    _lastnameController = TextEditingController(
      text: profile['lastname']?.toString() ?? '',
    );
    _emailController = TextEditingController(
      text: profile['email']?.toString() ?? '',
    );
    _phoneController = TextEditingController(
      text: profile['phone']?.toString() ?? '',
    );
    _usernameController = TextEditingController(
      text: profile['username']?.toString() ?? '',
    );
    _avatarUrl = profile['avatar_url']?.toString();
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
            return _buildLimitReachedView(languageProvider);
          }

          return Form(
            key: _formKey,
            child: ListView(
              padding: const EdgeInsets.all(16),
              children: [
                Container(
                  padding: const EdgeInsets.all(16),
                  decoration: BoxDecoration(
                    color: const Color(0xFFD6A735).withValues(alpha: 0.08),
                    borderRadius: BorderRadius.circular(18),
                    border: Border.all(
                      color: const Color(0xFFD6A735).withValues(alpha: 0.14),
                    ),
                  ),
                  child: Row(
                    children: [
                      Container(
                        width: 44,
                        height: 44,
                        decoration: BoxDecoration(
                          color: const Color(
                            0xFFD6A735,
                          ).withValues(alpha: 0.12),
                          borderRadius: BorderRadius.circular(14),
                        ),
                        child: const Icon(
                          Icons.info_outline_rounded,
                          color: Color(0xFFD6A735),
                        ),
                      ),
                      const SizedBox(width: 12),
                      Expanded(
                        child: Column(
                          crossAxisAlignment: CrossAxisAlignment.start,
                          children: [
                            Text(
                              languageProvider.t('edit_limit_warning'),
                              style: const TextStyle(
                                fontWeight: FontWeight.w700,
                                color: Color(0xFFD6A735),
                              ),
                            ),
                            const SizedBox(height: 4),
                            Text(
                              languageProvider
                                  .t('edits_remaining')
                                  .replaceAll(
                                    '{count}',
                                    profileProvider.editsRemaining.toString(),
                                  ),
                              style: const TextStyle(color: Color(0xFF475569)),
                            ),
                          ],
                        ),
                      ),
                    ],
                  ),
                ),
                const SizedBox(height: 24),
                Center(child: _buildPhotoPicker(languageProvider)),
                const SizedBox(height: 28),
                _buildField(
                  controller: _firstnameController,
                  label: languageProvider.t('first_name'),
                  icon: Icons.person_outline_rounded,
                  validator: (value) {
                    if (value == null || value.trim().isEmpty) {
                      return languageProvider.t('please_enter_first_name');
                    }
                    return null;
                  },
                ),
                const SizedBox(height: 16),
                _buildField(
                  controller: _lastnameController,
                  label: languageProvider.t('last_name'),
                  icon: Icons.badge_outlined,
                ),
                const SizedBox(height: 16),
                _buildField(
                  controller: _emailController,
                  label: languageProvider.t('email'),
                  icon: Icons.email_outlined,
                  keyboardType: TextInputType.emailAddress,
                  validator: (value) {
                    if (value == null || value.trim().isEmpty) {
                      return languageProvider.t('please_enter_email');
                    }
                    if (!value.contains('@')) {
                      return languageProvider.t('please_enter_valid_email');
                    }
                    return null;
                  },
                ),
                const SizedBox(height: 16),
                _buildField(
                  controller: _phoneController,
                  label: languageProvider.t('phone'),
                  icon: Icons.phone_outlined,
                  keyboardType: TextInputType.phone,
                ),
                const SizedBox(height: 16),
                _buildField(
                  controller: _usernameController,
                  label: languageProvider.t('username'),
                  icon: Icons.alternate_email_rounded,
                ),
                const SizedBox(height: 28),
                FilledButton(
                  onPressed: _isSaving ? null : _saveProfile,
                  style: FilledButton.styleFrom(
                    padding: const EdgeInsets.symmetric(vertical: 16),
                  ),
                  child: _isSaving
                      ? const SizedBox(
                          width: 20,
                          height: 20,
                          child: CircularProgressIndicator(
                            strokeWidth: 2,
                            valueColor: AlwaysStoppedAnimation<Color>(
                              Colors.white,
                            ),
                          ),
                        )
                      : Text(languageProvider.t('save')),
                ),
              ],
            ),
          );
        },
      ),
    );
  }

  Widget _buildField({
    required TextEditingController controller,
    required String label,
    required IconData icon,
    TextInputType? keyboardType,
    String? Function(String?)? validator,
  }) {
    return TextFormField(
      controller: controller,
      keyboardType: keyboardType,
      validator: validator,
      decoration: InputDecoration(labelText: label, prefixIcon: Icon(icon)),
    );
  }

  Widget _buildPhotoPicker(LanguageProvider languageProvider) {
    return Column(
      children: [
        Stack(
          children: [
            Container(
              width: 116,
              height: 116,
              decoration: BoxDecoration(
                color: const Color(0xFFD6A735).withValues(alpha: 0.12),
                shape: BoxShape.circle,
                border: Border.all(color: const Color(0xFFD6A735), width: 3),
              ),
              child: _selectedPhoto != null
                  ? ClipOval(
                      child: Image.file(
                        _selectedPhoto!,
                        fit: BoxFit.cover,
                        width: 116,
                        height: 116,
                      ),
                    )
                  : _avatarUrl != null && _avatarUrl!.isNotEmpty
                  ? ClipOval(
                      child: CachedImage(
                        url: _avatarUrl!,
                        width: 116,
                        height: 116,
                        fit: BoxFit.cover,
                        errorWidget: const Icon(
                          Icons.person_rounded,
                          size: 58,
                          color: Color(0xFFD6A735),
                        ),
                      ),
                    )
                  : const Icon(
                      Icons.person_rounded,
                      size: 58,
                      color: Color(0xFFD6A735),
                    ),
            ),
            Positioned(
              bottom: 0,
              right: 0,
              child: InkWell(
                onTap: _isUploadingPhoto ? null : _showPhotoOptions,
                borderRadius: BorderRadius.circular(20),
                child: Container(
                  padding: const EdgeInsets.all(9),
                  decoration: BoxDecoration(
                    color: const Color(0xFFD6A735),
                    shape: BoxShape.circle,
                    border: Border.all(color: Colors.white, width: 2),
                  ),
                  child: _isUploadingPhoto
                      ? const SizedBox(
                          width: 16,
                          height: 16,
                          child: CircularProgressIndicator(
                            strokeWidth: 2,
                            valueColor: AlwaysStoppedAnimation<Color>(
                              Colors.white,
                            ),
                          ),
                        )
                      : const Icon(
                          Icons.camera_alt_rounded,
                          size: 17,
                          color: Colors.white,
                        ),
                ),
              ),
            ),
          ],
        ),
        const SizedBox(height: 12),
        TextButton(
          onPressed: _isUploadingPhoto ? null : _showPhotoOptions,
          child: Text(
            _isUploadingPhoto
                ? languageProvider.t('loading')
                : languageProvider.t('change_profile_photo'),
          ),
        ),
        Text(
          languageProvider.t('tap_to_upload_photo'),
          style: const TextStyle(color: Color(0xFF64748B), fontSize: 12),
        ),
      ],
    );
  }

  Widget _buildLimitReachedView(LanguageProvider languageProvider) {
    return Center(
      child: Padding(
        padding: const EdgeInsets.all(24),
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            Container(
              width: 96,
              height: 96,
              decoration: BoxDecoration(
                color: Colors.red.withValues(alpha: 0.08),
                shape: BoxShape.circle,
              ),
              child: const Icon(
                Icons.edit_off_rounded,
                color: Colors.red,
                size: 44,
              ),
            ),
            const SizedBox(height: 24),
            Text(
              languageProvider.t('edit_limit_reached'),
              style: const TextStyle(fontSize: 22, fontWeight: FontWeight.w700),
              textAlign: TextAlign.center,
            ),
            const SizedBox(height: 10),
            Text(
              languageProvider.t('edit_limit_reached_message'),
              style: const TextStyle(color: Color(0xFF64748B)),
              textAlign: TextAlign.center,
            ),
            const SizedBox(height: 24),
            OutlinedButton(
              onPressed: () => Navigator.pop(context),
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
      _isSaving = true;
    });

    final profileProvider = context.read<ProfileProvider>();
    final authProvider = context.read<AuthProvider>();
    final languageProvider = context.read<LanguageProvider>();

    final result = await profileProvider.updateProfile(
      firstname: _firstnameController.text.trim(),
      lastname: _lastnameController.text.trim(),
      email: _emailController.text.trim(),
      phone: _phoneController.text.trim().isEmpty
          ? null
          : _phoneController.text.trim(),
      username: _usernameController.text.trim().isEmpty
          ? null
          : _usernameController.text.trim(),
    );

    if (!mounted) return;

    setState(() {
      _isSaving = false;
    });

    ScaffoldMessenger.of(context).showSnackBar(
      SnackBar(
        content: Text(
          result['message']?.toString() ??
              languageProvider.t('profile_updated'),
        ),
        backgroundColor: result['success'] == true ? Colors.green : Colors.red,
      ),
    );

    if (result['success'] == true) {
      final updatedProfile = profileProvider.profile;
      if (updatedProfile != null) {
        await authProvider.syncUserFromProfile(updatedProfile);
      }
      if (!mounted) return;
      Navigator.pop(context, true);
    }
  }

  void _showPhotoOptions() {
    final languageProvider = context.read<LanguageProvider>();
    showModalBottomSheet(
      context: context,
      builder: (context) => SafeArea(
        child: Wrap(
          children: [
            ListTile(
              leading: const Icon(
                Icons.photo_library_rounded,
                color: Color(0xFFD6A735),
              ),
              title: Text(languageProvider.t('choose_from_gallery')),
              onTap: () {
                Navigator.pop(context);
                _pickImage(ImageSource.gallery);
              },
            ),
            ListTile(
              leading: const Icon(
                Icons.camera_alt_rounded,
                color: Color(0xFFD6A735),
              ),
              title: Text(languageProvider.t('take_photo')),
              onTap: () {
                Navigator.pop(context);
                _pickImage(ImageSource.camera);
              },
            ),
          ],
        ),
      ),
    );
  }

  Future<void> _pickImage(ImageSource source) async {
    final languageProvider = context.read<LanguageProvider>();
    try {
      if (!_picker.supportsImageSource(source)) {
        if (!mounted) return;
        ScaffoldMessenger.of(context).showSnackBar(
          SnackBar(
            content: Text(
              source == ImageSource.camera
                  ? languageProvider.t('camera_not_available')
                  : languageProvider.t('photo_library_not_available'),
            ),
            backgroundColor: Colors.red,
          ),
        );
        return;
      }

      final pickedFile = await _picker.pickImage(
        source: source,
        maxWidth: 800,
        maxHeight: 800,
        imageQuality: 85,
        requestFullMetadata: false,
      );

      if (pickedFile == null) return;

      final photo = File(pickedFile.path);
      setState(() {
        _selectedPhoto = photo;
      });

      await _uploadPhoto(photo);
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

  Future<void> _uploadPhoto(File photo) async {
    final languageProvider = context.read<LanguageProvider>();
    final profileProvider = context.read<ProfileProvider>();
    final authProvider = context.read<AuthProvider>();

    setState(() {
      _isUploadingPhoto = true;
    });

    final result = await profileProvider.uploadProfilePhoto(photo);

    if (!mounted) return;

    setState(() {
      _isUploadingPhoto = false;
    });

    if (result['success'] == true) {
      final data = (result['data'] as Map?)?.cast<String, dynamic>();
      final avatarUrl = data?['avatar_url']?.toString();
      setState(() {
        _avatarUrl = avatarUrl ?? _avatarUrl;
        _selectedPhoto = null;
      });

      final updatedProfile = profileProvider.profile;
      if (updatedProfile != null) {
        await authProvider.syncUserFromProfile(updatedProfile);
      }

      if (!mounted) return;
      ScaffoldMessenger.of(context).showSnackBar(
        SnackBar(
          content: Text(
            languageProvider
                .t('profile_photo_updated')
                .replaceAll(
                  '{edits}',
                  (data?['edits_remaining'] ?? profileProvider.editsRemaining)
                      .toString(),
                ),
          ),
          backgroundColor: Colors.green,
        ),
      );
    } else {
      setState(() {
        _selectedPhoto = null;
      });
      ScaffoldMessenger.of(context).showSnackBar(
        SnackBar(
          content: Text(
            result['message']?.toString() ??
                languageProvider.t('failed_to_upload_photo'),
          ),
          backgroundColor: Colors.red,
        ),
      );
    }
  }
}
