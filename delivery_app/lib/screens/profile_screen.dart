import 'package:delivery_app/screens/account_settings_screen.dart';
import 'package:delivery_app/providers/auth_provider.dart';
import 'package:delivery_app/providers/language_provider.dart';
import 'package:delivery_app/providers/profile_provider.dart';
import 'package:flutter/material.dart';
import 'package:provider/provider.dart';

class ProfileScreen extends StatefulWidget {
  const ProfileScreen({super.key});

  @override
  State<ProfileScreen> createState() => ProfileScreenState();
}

class ProfileScreenState extends State<ProfileScreen> {
  @override
  void initState() {
    super.initState();
    WidgetsBinding.instance.addPostFrameCallback((_) {
      refreshData();
    });
  }

  Future<void> refreshData() async {
    final authProvider = context.read<AuthProvider>();
    final profileProvider = context.read<ProfileProvider>();
    profileProvider.setToken(authProvider.token);
    await profileProvider.fetchProfile();
    final profile = profileProvider.profile;
    if (profile != null) {
      await authProvider.syncUserFromProfile(profile);
    }
  }

  @override
  Widget build(BuildContext context) {
    final authProvider = context.watch<AuthProvider>();
    final languageProvider = context.watch<LanguageProvider>();
    final profileProvider = context.watch<ProfileProvider>();
    final profile = profileProvider.profile;

    if (profileProvider.isLoading && profile == null) {
      return const Center(child: CircularProgressIndicator());
    }

    if (profileProvider.error != null && profile == null) {
      return Center(
        child: Column(
          mainAxisSize: MainAxisSize.min,
          children: [
            Text(profileProvider.error!),
            const SizedBox(height: 16),
            FilledButton(
              onPressed: refreshData,
              child: Text(languageProvider.t('retry')),
            ),
          ],
        ),
      );
    }

    final fullName = _displayName(profile, authProvider.user?.name);
    final avatarUrl =
        (_profileValue(profile, 'avatar_url') ?? authProvider.user?.avatarUrl)
            ?.toString();

    return ListView(
      padding: const EdgeInsets.fromLTRB(16, 8, 16, 24),
      children: [
        Container(
          padding: const EdgeInsets.all(20),
          decoration: BoxDecoration(
            gradient: const LinearGradient(
              colors: [Color(0xFFD6A735), Color(0xFF8D6208)],
              begin: Alignment.topLeft,
              end: Alignment.bottomRight,
            ),
            borderRadius: BorderRadius.circular(24),
          ),
          child: Row(
            children: [
              CircleAvatar(
                radius: 34,
                backgroundColor: Colors.white.withValues(alpha: 0.2),
                backgroundImage: avatarUrl != null && avatarUrl.isNotEmpty
                    ? NetworkImage(avatarUrl)
                    : null,
                child: avatarUrl == null || avatarUrl.isEmpty
                    ? const Icon(
                        Icons.person_rounded,
                        color: Colors.white,
                        size: 34,
                      )
                    : null,
              ),
              const SizedBox(width: 16),
              Expanded(
                child: Column(
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: [
                    Text(
                      fullName,
                      style: const TextStyle(
                        color: Colors.white,
                        fontWeight: FontWeight.w700,
                        fontSize: 20,
                      ),
                    ),
                    const SizedBox(height: 6),
                    Text(
                      (_profileValue(profile, 'email') ??
                              authProvider.user?.email ??
                              '-')
                          .toString(),
                      style: const TextStyle(color: Colors.white70),
                    ),
                    const SizedBox(height: 8),
                    Text(
                      '${languageProvider.t('assigned_warehouse')}: ${_assignedWarehouseName(profile) ?? authProvider.user?.assignedWarehouseName ?? '-'}',
                      style: const TextStyle(color: Colors.white70),
                    ),
                  ],
                ),
              ),
            ],
          ),
        ),
        const SizedBox(height: 20),
        _buildEditLimitInfo(profileProvider, languageProvider),
        const SizedBox(height: 16),
        Card(
          child: Padding(
            padding: const EdgeInsets.all(16),
            child: Column(
              children: [
                _ProfileRow(
                  icon: Icons.phone_outlined,
                  label: languageProvider.t('phone'),
                  value: (_profileValue(profile, 'phone') ?? '-').toString(),
                ),
                _ProfileRow(
                  icon: Icons.alternate_email_rounded,
                  label: languageProvider.t('username'),
                  value: (_profileValue(profile, 'username') ?? '-').toString(),
                ),
                _ProfileRow(
                  icon: Icons.event_outlined,
                  label: languageProvider.t('member_since'),
                  value: _formatDate(_profileValue(profile, 'created_at')),
                ),
                _ProfileRow(
                  icon: Icons.verified_user_outlined,
                  label: languageProvider.t('status'),
                  value: (_profileValue(profile, 'is_active') == false)
                      ? languageProvider.t('inactive')
                      : languageProvider.t('active'),
                ),
              ],
            ),
          ),
        ),
        const SizedBox(height: 16),
        Card(
          child: Column(
            children: [
              _SettingsTile(
                icon: Icons.settings_outlined,
                title: languageProvider.t('account_settings'),
                subtitle: languageProvider.t('edit_profile_info'),
                onTap: () async {
                  if (!profileProvider.canEdit) {
                    _showEditLimitMessage(languageProvider);
                    return;
                  }

                  final result = await Navigator.push<bool>(
                    context,
                    MaterialPageRoute(
                      builder: (context) => const AccountSettingsScreen(),
                    ),
                  );

                  if (result == true && mounted) {
                    await refreshData();
                  }
                },
              ),
              const Divider(height: 1),
              _SettingsTile(
                icon: Icons.lock_outline_rounded,
                title: languageProvider.t('change_password'),
                subtitle: languageProvider.t('update_password'),
                onTap: () {
                  if (!profileProvider.canEdit) {
                    _showEditLimitMessage(languageProvider);
                    return;
                  }

                  _showChangePasswordDialog(profileProvider, languageProvider);
                },
              ),
              const Divider(height: 1),
              ListTile(
                leading: const Icon(Icons.language_outlined),
                title: Text(languageProvider.t('language')),
                subtitle: Text(languageProvider.languageName),
                trailing: Switch(
                  value: languageProvider.isKhmer,
                  onChanged: (_) => languageProvider.toggleLanguage(),
                ),
              ),
              const Divider(height: 1),
              _SettingsTile(
                icon: Icons.logout_rounded,
                title: languageProvider.t('logout'),
                subtitle: languageProvider.t('sign_out'),
                titleColor: Colors.red,
                iconColor: Colors.red,
                onTap: authProvider.signOut,
              ),
            ],
          ),
        ),
      ],
    );
  }

  Widget _buildEditLimitInfo(
    ProfileProvider profileProvider,
    LanguageProvider languageProvider,
  ) {
    final canEdit = profileProvider.canEdit;
    final backgroundColor = canEdit
        ? const Color(0xFFD6A735).withValues(alpha: 0.08)
        : Colors.red.withValues(alpha: 0.08);
    final borderColor = canEdit
        ? const Color(0xFFD6A735).withValues(alpha: 0.16)
        : Colors.red.withValues(alpha: 0.18);
    final iconColor = canEdit ? const Color(0xFFD6A735) : Colors.red;

    return Container(
      padding: const EdgeInsets.all(16),
      decoration: BoxDecoration(
        color: backgroundColor,
        borderRadius: BorderRadius.circular(20),
        border: Border.all(color: borderColor),
      ),
      child: Row(
        children: [
          Container(
            width: 44,
            height: 44,
            decoration: BoxDecoration(
              color: iconColor.withValues(alpha: 0.12),
              borderRadius: BorderRadius.circular(14),
            ),
            child: Icon(
              canEdit ? Icons.edit_note_rounded : Icons.edit_off_rounded,
              color: iconColor,
            ),
          ),
          const SizedBox(width: 12),
          Expanded(
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                Text(
                  canEdit
                      ? languageProvider.t('profile_edits_available')
                      : languageProvider.t('edit_limit_reached'),
                  style: TextStyle(
                    fontWeight: FontWeight.w700,
                    color: iconColor,
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
          Container(
            padding: const EdgeInsets.symmetric(horizontal: 10, vertical: 7),
            decoration: BoxDecoration(
              color: iconColor,
              borderRadius: BorderRadius.circular(999),
            ),
            child: Text(
              '${profileProvider.editCountThisYear}/3',
              style: const TextStyle(
                color: Colors.white,
                fontWeight: FontWeight.w700,
              ),
            ),
          ),
        ],
      ),
    );
  }

  String _displayName(Map<String, dynamic>? profile, String? fallback) {
    if (profile == null) return fallback ?? 'Delivery User';
    final firstname = _profileValue(profile, 'firstname')?.toString() ?? '';
    final lastname = _profileValue(profile, 'lastname')?.toString() ?? '';
    final fullName = '$firstname $lastname'.trim();
    if (fullName.isNotEmpty) return fullName;

    final name = _profileValue(profile, 'name')?.toString() ?? '';
    if (name.isNotEmpty) return name;

    return fallback ?? 'Delivery User';
  }

  dynamic _profileValue(Map<String, dynamic>? profile, String key) {
    return profile == null ? null : profile[key];
  }

  String? _assignedWarehouseName(Map<String, dynamic>? profile) {
    final directName = _profileValue(
      profile,
      'assigned_warehouse_name',
    )?.toString().trim();
    if (directName != null && directName.isNotEmpty) {
      return directName;
    }

    final assignedWarehouse = _profileValue(profile, 'assigned_warehouse');
    if (assignedWarehouse is Map) {
      final name = assignedWarehouse['name']?.toString().trim();
      if (name != null && name.isNotEmpty) {
        return name;
      }
    }

    return null;
  }

  String _formatDate(dynamic value) {
    if (value == null) return '-';
    if (value is DateTime) {
      final parsed = value;
      return '${parsed.day.toString().padLeft(2, '0')}/${parsed.month.toString().padLeft(2, '0')}/${parsed.year}';
    }
    final raw = value?.toString();
    if (raw == null || raw.isEmpty) return '-';
    final parsed = DateTime.tryParse(raw);
    if (parsed == null) return raw;
    return '${parsed.day.toString().padLeft(2, '0')}/${parsed.month.toString().padLeft(2, '0')}/${parsed.year}';
  }

  void _showEditLimitMessage(LanguageProvider languageProvider) {
    ScaffoldMessenger.of(context).showSnackBar(
      SnackBar(
        content: Text(languageProvider.t('edit_limit_reached_msg')),
        backgroundColor: Colors.red,
      ),
    );
  }

  void _showChangePasswordDialog(
    ProfileProvider profileProvider,
    LanguageProvider languageProvider,
  ) {
    final parentContext = context;
    final currentPasswordController = TextEditingController();
    final newPasswordController = TextEditingController();
    final confirmPasswordController = TextEditingController();

    showDialog(
      context: context,
      builder: (context) => AlertDialog(
        title: Text(languageProvider.t('change_password')),
        content: Column(
          mainAxisSize: MainAxisSize.min,
          children: [
            TextField(
              controller: currentPasswordController,
              obscureText: true,
              decoration: InputDecoration(
                labelText: languageProvider.t('current_password'),
                prefixIcon: const Icon(Icons.lock_outline_rounded),
              ),
            ),
            const SizedBox(height: 16),
            TextField(
              controller: newPasswordController,
              obscureText: true,
              decoration: InputDecoration(
                labelText: languageProvider.t('new_password'),
                prefixIcon: const Icon(Icons.lock_rounded),
              ),
            ),
            const SizedBox(height: 16),
            TextField(
              controller: confirmPasswordController,
              obscureText: true,
              decoration: InputDecoration(
                labelText: languageProvider.t('confirm_new_password'),
                prefixIcon: const Icon(Icons.lock_reset_rounded),
              ),
            ),
          ],
        ),
        actions: [
          TextButton(
            onPressed: () => Navigator.pop(context),
            child: Text(languageProvider.t('cancel')),
          ),
          FilledButton(
            onPressed: () async {
              Navigator.pop(context);

              if (currentPasswordController.text.isEmpty) {
                _showErrorMessage(languageProvider.t('enter_current_password'));
                return;
              }

              if (newPasswordController.text.isEmpty) {
                _showErrorMessage(languageProvider.t('enter_new_password'));
                return;
              }

              if (newPasswordController.text.length < 8) {
                _showErrorMessage(languageProvider.t('password_min_8_chars'));
                return;
              }

              if (confirmPasswordController.text.isEmpty) {
                _showErrorMessage(
                  languageProvider.t('confirm_password_required'),
                );
                return;
              }

              if (newPasswordController.text !=
                  confirmPasswordController.text) {
                _showErrorMessage(languageProvider.t('passwords_not_match'));
                return;
              }

              final result = await profileProvider.changePassword(
                currentPassword: currentPasswordController.text,
                newPassword: newPasswordController.text,
                confirmPassword: confirmPasswordController.text,
              );

              if (!parentContext.mounted) return;

              ScaffoldMessenger.of(parentContext).showSnackBar(
                SnackBar(
                  content: Text(
                    result['message']?.toString() ??
                        languageProvider.t('password_changed_success'),
                  ),
                  backgroundColor: result['success'] == true
                      ? Colors.green
                      : Colors.red,
                ),
              );

              if (result['success'] == true) {
                await refreshData();
              }
            },
            child: Text(languageProvider.t('change_password')),
          ),
        ],
      ),
    );
  }

  void _showErrorMessage(String message) {
    ScaffoldMessenger.of(context).showSnackBar(
      SnackBar(content: Text(message), backgroundColor: Colors.red),
    );
  }
}

class _ProfileRow extends StatelessWidget {
  const _ProfileRow({
    required this.icon,
    required this.label,
    required this.value,
  });

  final IconData icon;
  final String label;
  final String value;

  @override
  Widget build(BuildContext context) {
    return Padding(
      padding: const EdgeInsets.symmetric(vertical: 10),
      child: Row(
        children: [
          CircleAvatar(
            radius: 20,
            backgroundColor: const Color(0xFFD6A735).withValues(alpha: 0.08),
            child: Icon(icon, color: const Color(0xFFD6A735), size: 18),
          ),
          const SizedBox(width: 12),
          Expanded(
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                Text(
                  label,
                  style: const TextStyle(
                    fontSize: 12,
                    color: Color(0xFF64748B),
                    fontWeight: FontWeight.w600,
                  ),
                ),
                const SizedBox(height: 4),
                Text(value),
              ],
            ),
          ),
        ],
      ),
    );
  }
}

class _SettingsTile extends StatelessWidget {
  const _SettingsTile({
    required this.icon,
    required this.title,
    required this.subtitle,
    required this.onTap,
    this.iconColor,
    this.titleColor,
  });

  final IconData icon;
  final String title;
  final String subtitle;
  final VoidCallback onTap;
  final Color? iconColor;
  final Color? titleColor;

  @override
  Widget build(BuildContext context) {
    return ListTile(
      leading: Icon(icon, color: iconColor),
      title: Text(
        title,
        style: titleColor == null ? null : TextStyle(color: titleColor),
      ),
      subtitle: Text(subtitle),
      trailing: const Icon(Icons.chevron_right_rounded),
      onTap: onTap,
    );
  }
}
