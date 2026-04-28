import 'package:delivery_app/providers/auth_provider.dart';
import 'package:delivery_app/providers/language_provider.dart';
import 'package:delivery_app/providers/profile_provider.dart';
import 'package:flutter/material.dart';
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

    setState(() {
      _isSaving = false;
    });

    if (!mounted) return;

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
}
