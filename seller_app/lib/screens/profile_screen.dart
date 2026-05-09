import 'package:flutter/material.dart';
import 'package:provider/provider.dart';
import 'package:seller_app/providers/profile_provider.dart';
import 'package:seller_app/providers/auth_provider.dart';
import 'package:seller_app/providers/theme_provider.dart';
import 'package:seller_app/providers/language_provider.dart';
import 'package:seller_app/screens/account_settings_screen.dart';
import 'package:seller_app/screens/sales_by_seller_report_screen.dart';
import 'package:seller_app/controllers/navigation_bar_controller.dart';

class ProfileScreen extends StatefulWidget {
  const ProfileScreen({super.key});

  @override
  State<ProfileScreen> createState() => _ProfileScreenState();
}

class _ProfileScreenState extends State<ProfileScreen> {
  // For auto-hide bottom navigation
  final ScrollController _scrollController = ScrollController();
  double _lastScrollOffset = 0;

  @override
  void initState() {
    super.initState();
    _scrollController.addListener(_onScroll);
    WidgetsBinding.instance.addPostFrameCallback((_) {
      if (mounted) {
        _loadProfile();
      }
    });
  }

  @override
  void dispose() {
    _scrollController.removeListener(_onScroll);
    _scrollController.dispose();
    super.dispose();
  }

  void _onScroll() {
    final currentOffset = _scrollController.offset;
    final difference = currentOffset - _lastScrollOffset;
    final navController = context.read<NavigationBarController>();

    // If scrolled down more than 5 pixels, hide navigation
    if (difference > 5 && currentOffset > 50) {
      navController.hide();
    }
    // If scrolled up more than 5 pixels, show navigation
    else if (difference < -5) {
      navController.show();
    }

    _lastScrollOffset = currentOffset;
  }

  Future<void> _loadProfile() async {
    final authProvider = context.read<AuthProvider>();
    final profileProvider = context.read<ProfileProvider>();

    // យក Token ពី AuthProvider
    profileProvider.setToken(authProvider.token);

    await profileProvider.fetchProfile();
  }

  @override
  Widget build(BuildContext context) {
    final languageProvider = context.watch<LanguageProvider>();
    return Scaffold(
      appBar: AppBar(
        title: Text(languageProvider.t('profile')),
        actions: [
          IconButton(
            icon: const Icon(Icons.refresh),
            onPressed: _loadProfile,
            tooltip: languageProvider.t('refresh'),
          ),
        ],
      ),
      body: Consumer<ProfileProvider>(
        builder: (context, profileProvider, child) {
          if (profileProvider.isLoading && profileProvider.profile == null) {
            return const Center(child: CircularProgressIndicator());
          }

          final profile = profileProvider.profile;

          if (profile == null) {
            return Center(
              child: Text(languageProvider.t('failed_to_load_profile')),
            );
          }

          return SingleChildScrollView(
            controller: _scrollController,
            padding: const EdgeInsets.all(16),
            child: Consumer<LanguageProvider>(
              builder: (context, languageProvider, child) => Column(
                children: [
                  // Profile Header
                  _buildProfileHeader(profile, languageProvider),
                  const SizedBox(height: 24),

                  // Edit Limit Info
                  _buildEditLimitInfo(profileProvider, languageProvider),
                  const SizedBox(height: 24),

                  // Profile Information
                  _buildProfileInfo(profile, languageProvider),
                  const SizedBox(height: 24),

                  // Settings Menu
                  _buildSettingsMenu(context, profileProvider),
                ],
              ),
            ),
          );
        },
      ),
    );
  }

  Widget _buildProfileHeader(
    ProfileModel profile,
    LanguageProvider languageProvider,
  ) {
    return Container(
      padding: const EdgeInsets.all(24),
      decoration: BoxDecoration(
        gradient: const LinearGradient(
          colors: [Color(0xFF6C63FF), Color(0xFF5A52D5)],
          begin: Alignment.topLeft,
          end: Alignment.bottomRight,
        ),
        borderRadius: BorderRadius.circular(16),
      ),
      child: Column(
        children: [
          // Profile Avatar
          Container(
            width: 100,
            height: 100,
            decoration: BoxDecoration(
              color: Colors.white.withValues(alpha: 0.2),
              shape: BoxShape.circle,
              border: Border.all(
                color: Colors.white.withValues(alpha: 0.5),
                width: 3,
              ),
            ),
            child: profile.avatarUrl != null && profile.avatarUrl!.isNotEmpty
                ? ClipOval(
                    child: Image.network(
                      profile.avatarUrl!,
                      fit: BoxFit.cover,
                      loadingBuilder: (context, child, loadingProgress) {
                        if (loadingProgress == null) return child;
                        return Center(
                          child: CircularProgressIndicator(
                            value: loadingProgress.expectedTotalBytes != null
                                ? loadingProgress.cumulativeBytesLoaded /
                                      loadingProgress.expectedTotalBytes!
                                : null,
                            strokeWidth: 2,
                            valueColor: const AlwaysStoppedAnimation<Color>(
                              Colors.white,
                            ),
                          ),
                        );
                      },
                      errorBuilder: (context, error, stackTrace) {
                        return const Icon(
                          Icons.person,
                          size: 50,
                          color: Colors.white,
                        );
                      },
                    ),
                  )
                : const Icon(Icons.person, size: 50, color: Colors.white),
          ),
          const SizedBox(height: 16),
          // Full Name (Firstname + Lastname)
          Text(
            '${profile.firstname} ${profile.lastname}'.trim().isEmpty
                ? 'User'
                : '${profile.firstname} ${profile.lastname}'.trim(),
            style: const TextStyle(
              fontSize: 24,
              fontWeight: FontWeight.bold,
              color: Colors.white,
            ),
          ),
          const SizedBox(height: 4),
          Container(
            padding: const EdgeInsets.symmetric(horizontal: 12, vertical: 4),
            decoration: BoxDecoration(
              color: Colors.white.withValues(alpha: 0.2),
              borderRadius: BorderRadius.circular(12),
            ),
            child: Text(
              profile.role.toUpperCase(),
              style: const TextStyle(
                fontSize: 12,
                fontWeight: FontWeight.bold,
                color: Colors.white,
              ),
            ),
          ),
          const SizedBox(height: 8),
          Row(
            mainAxisAlignment: MainAxisAlignment.center,
            children: [
              Icon(
                profile.isActive ? Icons.check_circle : Icons.cancel,
                color: profile.isActive ? Colors.greenAccent : Colors.redAccent,
                size: 16,
              ),
              const SizedBox(width: 4),
              Text(
                profile.isActive
                    ? languageProvider.t('active')
                    : languageProvider.t('inactive'),
                style: const TextStyle(color: Colors.white70, fontSize: 14),
              ),
            ],
          ),
        ],
      ),
    );
  }

  Widget _buildEditLimitInfo(
    ProfileProvider profileProvider,
    LanguageProvider languageProvider,
  ) {
    final profile = profileProvider.profile;
    if (profile == null) return const SizedBox.shrink();

    final canEdit = profile.canEdit;
    final editsRemaining = profile.editsRemaining;
    final editCount = profile.editCountThisYear;

    return Container(
      padding: const EdgeInsets.all(16),
      decoration: BoxDecoration(
        color: canEdit
            ? Colors.green.withValues(alpha: 0.1)
            : Colors.red.withValues(alpha: 0.1),
        borderRadius: BorderRadius.circular(12),
        border: Border.all(
          color: canEdit ? Colors.green : Colors.red,
          width: 1,
        ),
      ),
      child: Column(
        children: [
          Row(
            children: [
              Icon(
                canEdit ? Icons.edit_document : Icons.edit_off,
                color: canEdit ? Colors.green : Colors.red,
                size: 24,
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
                        fontSize: 16,
                        fontWeight: FontWeight.bold,
                        color: canEdit ? Colors.green : Colors.red,
                      ),
                    ),
                    const SizedBox(height: 4),
                    Text(
                      languageProvider
                          .t('edits_remaining')
                          .replaceAll('{count}', '$editsRemaining'),
                      style: TextStyle(
                        fontSize: 13,
                        color: canEdit ? Colors.green[700] : Colors.red[700],
                      ),
                    ),
                  ],
                ),
              ),
              Container(
                padding: const EdgeInsets.all(8),
                decoration: BoxDecoration(
                  color: canEdit ? Colors.green : Colors.red,
                  shape: BoxShape.circle,
                ),
                child: Text(
                  '$editCount/3',
                  style: const TextStyle(
                    color: Colors.white,
                    fontWeight: FontWeight.bold,
                    fontSize: 12,
                  ),
                ),
              ),
            ],
          ),
          if (!canEdit) ...[
            const SizedBox(height: 12),
            Text(
              languageProvider.t('edit_limit_msg'),
              style: const TextStyle(fontSize: 12, color: Colors.red),
              textAlign: TextAlign.center,
            ),
          ],
        ],
      ),
    );
  }

  Widget _buildProfileInfo(
    ProfileModel profile,
    LanguageProvider languageProvider,
  ) {
    return Card(
      child: Padding(
        padding: const EdgeInsets.all(16),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            Text(
              languageProvider.t('profile_information'),
              style: const TextStyle(fontSize: 18, fontWeight: FontWeight.bold),
            ),
            const Divider(height: 24),
            // First Name
            _buildInfoRow(
              Icons.person_outline,
              languageProvider.t('first_name'),
              profile.firstname,
            ),
            const SizedBox(height: 12),
            // Last Name
            _buildInfoRow(
              Icons.person_outline,
              languageProvider.t('last_name'),
              profile.lastname,
            ),
            const SizedBox(height: 12),
            // Email
            _buildInfoRow(
              Icons.email,
              languageProvider.t('email'),
              profile.email,
            ),
            const SizedBox(height: 12),
            // Phone
            if (profile.phone != null && profile.phone!.isNotEmpty)
              Column(
                children: [
                  const SizedBox(height: 12),
                  _buildInfoRow(
                    Icons.phone,
                    languageProvider.t('phone'),
                    profile.phone!,
                  ),
                ],
              ),
            const SizedBox(height: 12),
            // Username
            if (profile.username != null && profile.username!.isNotEmpty)
              Column(
                children: [
                  const SizedBox(height: 12),
                  _buildInfoRow(
                    Icons.alternate_email,
                    languageProvider.t('username'),
                    profile.username!,
                  ),
                ],
              ),
            if (profile.assignedWarehouseName != null &&
                profile.assignedWarehouseName!.isNotEmpty)
              Column(
                children: [
                  const SizedBox(height: 12),
                  _buildInfoRow(
                    Icons.warehouse_outlined,
                    languageProvider.t('assigned_warehouse'),
                    profile.assignedWarehouseName!,
                  ),
                ],
              ),
            const SizedBox(height: 12),
            // Member Since
            _buildInfoRow(
              Icons.calendar_today,
              languageProvider.t('member_since'),
              '${profile.createdAt.day}/${profile.createdAt.month}/${profile.createdAt.year}',
            ),
          ],
        ),
      ),
    );
  }

  Widget _buildInfoRow(IconData icon, String label, String value) {
    return Row(
      children: [
        Container(
          padding: const EdgeInsets.all(8),
          decoration: BoxDecoration(
            color: const Color(0xFF6C63FF).withValues(alpha: 0.1),
            borderRadius: BorderRadius.circular(8),
          ),
          child: Icon(icon, size: 20, color: const Color(0xFF6C63FF)),
        ),
        const SizedBox(width: 12),
        Expanded(
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              Text(
                label,
                style: TextStyle(fontSize: 12, color: Colors.grey[600]),
              ),
              const SizedBox(height: 2),
              Text(
                value,
                style: const TextStyle(
                  fontSize: 15,
                  fontWeight: FontWeight.w500,
                ),
              ),
            ],
          ),
        ),
      ],
    );
  }

  Widget _buildSettingsMenu(
    BuildContext context,
    ProfileProvider profileProvider,
  ) {
    final themeProvider = context.watch<ThemeProvider>();
    final languageProvider = context.watch<LanguageProvider>();

    return Card(
      child: Column(
        children: [
          // Language Switcher
          ListTile(
            leading: Container(
              padding: const EdgeInsets.all(8),
              decoration: BoxDecoration(
                color: Colors.orange.withValues(alpha: 0.1),
                borderRadius: BorderRadius.circular(8),
              ),
              child: const Icon(Icons.language, color: Colors.orange),
            ),
            title: Text(languageProvider.t('language')),
            subtitle: Text(languageProvider.languageName),
            trailing: Switch(
              value: languageProvider.isKhmer,
              onChanged: (value) {
                languageProvider.toggleLanguage();
                // Show notification
                ScaffoldMessenger.of(context).showSnackBar(
                  SnackBar(
                    content: Text(
                      value
                          ? languageProvider.t('switched_to_km')
                          : languageProvider.t('switched_to_en'),
                    ),
                    duration: const Duration(seconds: 2),
                    backgroundColor: Colors.green,
                  ),
                );
              },
            ),
          ),
          const Divider(height: 1),
          // Theme Toggle
          ListTile(
            leading: Container(
              padding: const EdgeInsets.all(8),
              decoration: BoxDecoration(
                color: themeProvider.isDarkMode
                    ? Colors.indigo.withValues(alpha: 0.2)
                    : Colors.purple.withValues(alpha: 0.1),
                borderRadius: BorderRadius.circular(8),
              ),
              child: Icon(
                themeProvider.isDarkMode ? Icons.dark_mode : Icons.light_mode,
                color: themeProvider.isDarkMode ? Colors.indigo : Colors.purple,
              ),
            ),
            title: Text(languageProvider.t('dark_mode')),
            subtitle: Text(
              themeProvider.isDarkMode
                  ? languageProvider.t('dark_mode_enabled')
                  : languageProvider.t('dark_mode_disabled'),
            ),
            trailing: Switch(
              value: themeProvider.isDarkMode,
              onChanged: (value) {
                themeProvider.toggleTheme();
              },
            ),
          ),
          const Divider(height: 1),
          if (profileProvider.profile?.hasPermission('mobile_seller_reports') ==
              true) ...[
            // My Report
            ListTile(
              leading: Container(
                padding: const EdgeInsets.all(8),
                decoration: BoxDecoration(
                  color: Colors.teal.withValues(alpha: 0.1),
                  borderRadius: BorderRadius.circular(8),
                ),
                child: Icon(Icons.assessment, color: Colors.teal),
              ),
              title: Text(languageProvider.t('my_report')),
              subtitle: Text(languageProvider.t('view_sales_report')),
              trailing: const Icon(Icons.chevron_right),
              onTap: () {
                Navigator.push(
                  context,
                  MaterialPageRoute(
                    builder: (context) => const SalesBySellerReportScreen(),
                  ),
                );
              },
            ),
            const Divider(height: 1),
          ],
          // Account Settings
          ListTile(
            leading: Container(
              padding: const EdgeInsets.all(8),
              decoration: BoxDecoration(
                color: Colors.blue.withValues(alpha: 0.1),
                borderRadius: BorderRadius.circular(8),
              ),
              child: const Icon(Icons.settings, color: Colors.blue),
            ),
            title: Text(languageProvider.t('account_settings')),
            subtitle: Text(languageProvider.t('edit_profile_info')),
            trailing: const Icon(Icons.chevron_right),
            onTap: () {
              if (!profileProvider.canEdit) {
                ScaffoldMessenger.of(context).showSnackBar(
                  SnackBar(
                    content: Text(languageProvider.t('edit_limit_reached_msg')),
                    backgroundColor: Colors.red,
                    duration: const Duration(seconds: 4),
                  ),
                );
                return;
              }
              Navigator.push(
                context,
                MaterialPageRoute(
                  builder: (context) => const AccountSettingsScreen(),
                ),
              ).then((result) {
                if (result == true) {
                  _loadProfile();
                }
              });
            },
          ),
          const Divider(height: 1),
          ListTile(
            leading: Container(
              padding: const EdgeInsets.all(8),
              decoration: BoxDecoration(
                color: Colors.orange.withValues(alpha: 0.1),
                borderRadius: BorderRadius.circular(8),
              ),
              child: const Icon(Icons.history, color: Colors.orange),
            ),
            title: Text(languageProvider.t('edit_history')),
            subtitle: Text(languageProvider.t('view_profile_changes')),
            trailing: const Icon(Icons.chevron_right),
            onTap: () {
              _showEditHistory(context, profileProvider);
            },
          ),
          const Divider(height: 1),
          ListTile(
            leading: Container(
              padding: const EdgeInsets.all(8),
              decoration: BoxDecoration(
                color: Colors.purple.withValues(alpha: 0.1),
                borderRadius: BorderRadius.circular(8),
              ),
              child: const Icon(Icons.security, color: Colors.purple),
            ),
            title: Text(languageProvider.t('change_password')),
            subtitle: Text(languageProvider.t('update_password')),
            trailing: const Icon(Icons.chevron_right),
            onTap: () {
              if (!profileProvider.canEdit) {
                ScaffoldMessenger.of(context).showSnackBar(
                  SnackBar(
                    content: Text(languageProvider.t('edit_limit_reached_msg')),
                    backgroundColor: Colors.red,
                    duration: Duration(seconds: 4),
                  ),
                );
                return;
              }
              _showChangePasswordDialog(context, profileProvider);
            },
          ),
          const Divider(height: 1),
          // Logout Button
          ListTile(
            leading: Container(
              padding: const EdgeInsets.all(8),
              decoration: BoxDecoration(
                color: Colors.red.withValues(alpha: 0.1),
                borderRadius: BorderRadius.circular(8),
              ),
              child: const Icon(Icons.logout, color: Colors.red),
            ),
            title: Text(
              languageProvider.t('logout'),
              style: const TextStyle(color: Colors.red),
            ),
            subtitle: Text(languageProvider.t('sign_out')),
            trailing: const Icon(Icons.chevron_right, color: Colors.red),
            onTap: () => _showLogoutDialog(context),
          ),
        ],
      ),
    );
  }

  void _showEditHistory(
    BuildContext context,
    ProfileProvider profileProvider,
  ) async {
    final history = await profileProvider.getEditHistory();

    if (!context.mounted) return;

    showModalBottomSheet(
      context: context,
      isScrollControlled: true,
      builder: (context) => Consumer<LanguageProvider>(
        builder: (context, languageProvider, child) => DraggableScrollableSheet(
          initialChildSize: 0.6,
          minChildSize: 0.4,
          maxChildSize: 0.9,
          expand: false,
          builder: (context, scrollController) => Padding(
            padding: const EdgeInsets.all(24),
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                Center(
                  child: Container(
                    width: 40,
                    height: 4,
                    decoration: BoxDecoration(
                      color: Colors.grey[300],
                      borderRadius: BorderRadius.circular(2),
                    ),
                  ),
                ),
                const SizedBox(height: 24),
                Text(
                  languageProvider.t('edit_history'),
                  style: const TextStyle(
                    fontSize: 20,
                    fontWeight: FontWeight.bold,
                  ),
                ),
                const SizedBox(height: 16),
                Expanded(
                  child: history.isEmpty
                      ? Center(
                          child: Text(languageProvider.t('no_edit_history')),
                        )
                      : ListView.builder(
                          controller: scrollController,
                          itemCount: history.length,
                          itemBuilder: (context, index) {
                            final log = history[index];
                            return Card(
                              margin: const EdgeInsets.only(bottom: 8),
                              child: ListTile(
                                title: Text(
                                  'Changed: ${log['field_changed']}',
                                  style: const TextStyle(
                                    fontWeight: FontWeight.bold,
                                  ),
                                ),
                                subtitle: Text(
                                  '${log['old_value']} → ${log['new_value']}',
                                  maxLines: 1,
                                  overflow: TextOverflow.ellipsis,
                                ),
                                trailing: Text(
                                  _formatDate(log['created_at']),
                                  style: TextStyle(
                                    fontSize: 12,
                                    color: Colors.grey[600],
                                  ),
                                ),
                              ),
                            );
                          },
                        ),
                ),
              ],
            ),
          ),
        ),
      ),
    );
  }

  void _showChangePasswordDialog(
    BuildContext context,
    ProfileProvider profileProvider,
  ) {
    final languageProvider = context.read<LanguageProvider>();
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
                prefixIcon: const Icon(Icons.lock_outline),
              ),
            ),
            const SizedBox(height: 16),
            TextField(
              controller: newPasswordController,
              obscureText: true,
              decoration: InputDecoration(
                labelText: languageProvider.t('new_password'),
                prefixIcon: const Icon(Icons.lock),
              ),
            ),
            const SizedBox(height: 16),
            TextField(
              controller: confirmPasswordController,
              obscureText: true,
              decoration: InputDecoration(
                labelText: languageProvider.t('confirm_new_password'),
                prefixIcon: const Icon(Icons.lock),
              ),
            ),
          ],
        ),
        actions: [
          TextButton(
            onPressed: () => Navigator.pop(context),
            child: Text(languageProvider.t('cancel')),
          ),
          ElevatedButton(
            onPressed: () async {
              Navigator.pop(context);

              // Validate current password is not empty
              if (currentPasswordController.text.isEmpty) {
                ScaffoldMessenger.of(context).showSnackBar(
                  SnackBar(
                    content: Text(languageProvider.t('enter_current_password')),
                    backgroundColor: Colors.red,
                  ),
                );
                return;
              }

              // Validate new password is not empty
              if (newPasswordController.text.isEmpty) {
                ScaffoldMessenger.of(context).showSnackBar(
                  SnackBar(
                    content: Text(languageProvider.t('enter_new_password')),
                    backgroundColor: Colors.red,
                  ),
                );
                return;
              }

              // Validate new password length
              if (newPasswordController.text.length < 8) {
                ScaffoldMessenger.of(context).showSnackBar(
                  const SnackBar(
                    content: Text('ពាក្យសម្ងាត់ថ្មីត្រូវមានយ៉ាងតិច ៨ តួអក្សរ'),
                    backgroundColor: Colors.red,
                  ),
                );
                return;
              }

              if (newPasswordController.text !=
                  confirmPasswordController.text) {
                ScaffoldMessenger.of(context).showSnackBar(
                  SnackBar(
                    content: Text(languageProvider.t('passwords_not_match')),
                    backgroundColor: Colors.red,
                  ),
                );
                return;
              }

              final result = await profileProvider.changePassword(
                currentPassword: currentPasswordController.text,
                newPassword: newPasswordController.text,
                confirmPassword: confirmPasswordController.text,
              );

              if (!context.mounted) return;

              // Show detailed error message if available
              String errorMessage =
                  result['message'] ??
                  languageProvider.t('password_changed_success');
              if (result['success'] != true && result.containsKey('error')) {
                errorMessage = '${result['message']}: ${result['error']}';
              }

              ScaffoldMessenger.of(context).showSnackBar(
                SnackBar(
                  content: Text(errorMessage),
                  backgroundColor: result['success'] == true
                      ? Colors.green
                      : Colors.red,
                  duration: Duration(
                    seconds: result['success'] == true ? 2 : 4,
                  ),
                ),
              );

              if (result['success'] == true) {
                _loadProfile();
              }
            },
            child: Text(languageProvider.t('change_password')),
          ),
        ],
      ),
    );
  }

  String _formatDate(dynamic dateValue) {
    if (dateValue == null) return '';
    DateTime dt;
    if (dateValue is DateTime) {
      dt = dateValue;
    } else if (dateValue is String) {
      try {
        dt = DateTime.parse(dateValue);
      } catch (e) {
        return '';
      }
    } else {
      return '';
    }
    return '${dt.day}/${dt.month}/${dt.year}';
  }

  void _showLogoutDialog(BuildContext context) {
    final authProvider = Provider.of<AuthProvider>(context, listen: false);
    final languageProvider = context.read<LanguageProvider>();

    showDialog(
      context: context,
      builder: (context) => AlertDialog(
        shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(16)),
        title: Row(
          children: [
            const Icon(Icons.logout, color: Colors.red, size: 28),
            const SizedBox(width: 8),
            Text(languageProvider.t('logout')),
          ],
        ),
        content: Text(languageProvider.t('sign_out')),
        actions: [
          TextButton(
            onPressed: () => Navigator.pop(context),
            child: Text(languageProvider.t('cancel')),
          ),
          ElevatedButton(
            onPressed: () async {
              Navigator.pop(context);
              await authProvider.signOut();
            },
            style: ElevatedButton.styleFrom(
              backgroundColor: Colors.red,
              foregroundColor: Colors.white,
            ),
            child: const Text('Logout'),
          ),
        ],
      ),
    );
  }
}
