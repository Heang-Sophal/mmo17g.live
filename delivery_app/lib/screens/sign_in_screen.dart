import 'package:delivery_app/providers/app_branding_provider.dart';
import 'package:delivery_app/providers/auth_provider.dart';
import 'package:delivery_app/providers/language_provider.dart';
import 'package:delivery_app/providers/theme_provider.dart';
import 'package:delivery_app/widgets/legal_support_links.dart';
import 'package:flutter/material.dart';
import 'package:provider/provider.dart';

class SignInScreen extends StatefulWidget {
  const SignInScreen({super.key});

  @override
  State<SignInScreen> createState() => _SignInScreenState();
}

class _SignInScreenState extends State<SignInScreen> {
  final _formKey = GlobalKey<FormState>();
  final _emailController = TextEditingController();
  final _passwordController = TextEditingController();

  bool _obscurePassword = true;
  String? _errorMessage;

  @override
  void dispose() {
    _emailController.dispose();
    _passwordController.dispose();
    super.dispose();
  }

  Future<void> _submit() async {
    if (!_formKey.currentState!.validate()) return;

    final authProvider = context.read<AuthProvider>();
    final languageProvider = context.read<LanguageProvider>();

    final result = await authProvider.signIn(
      email: _emailController.text.trim(),
      password: _passwordController.text,
    );

    if (!mounted) return;
    if (result['success'] == true) return;

    try {
      final msg = _mapErrorMessage(
        result['error_type']?.toString(),
        result['attempts_remaining'] is int
            ? result['attempts_remaining'] as int
            : null,
        languageProvider,
      );
      setState(() {
        _errorMessage = msg;
      });
    } catch (e) {
      setState(() {
        _errorMessage =
            result['message']?.toString() ?? languageProvider.t('login_failed');
      });
    }
  }

  String _mapErrorMessage(
    String? errorType,
    int? attemptsRemaining,
    LanguageProvider languageProvider,
  ) {
    switch (errorType) {
      case 'invalid_email':
      case 'invalid_credentials':
        return languageProvider.t('invalid_email');
      case 'invalid_password':
        final base = languageProvider.t('invalid_password');
        if (attemptsRemaining != null && attemptsRemaining > 0) {
          final remaining = languageProvider
              .t('login_attempts_remaining')
              .replaceAll('{count}', '$attemptsRemaining');
          return '$base $remaining';
        }
        return base;
      case 'account_locked':
        return languageProvider.t('account_locked');
      case 'account_blocked':
        return languageProvider.t('account_blocked');
      case 'insufficient_permissions':
        return languageProvider.t('delivery_only_access');
      case 'network_error':
        return languageProvider.t('network_error');
      default:
        return languageProvider.t('login_failed');
    }
  }

  @override
  Widget build(BuildContext context) {
    final languageProvider = context.watch<LanguageProvider>();
    final authProvider = context.watch<AuthProvider>();
    final brandingProvider = context.watch<AppBrandingProvider>();
    final themeProvider = context.watch<ThemeProvider>();
    final isDark = Theme.of(context).brightness == Brightness.dark;

    final backgroundColor = isDark
        ? const Color(0xFF151107)
        : const Color(0xFFFFFCF5);
    final surfaceColor = isDark ? const Color(0xFF21190B) : Colors.white;
    final primaryGold = const Color(0xFFD6A735);
    final deepGold = isDark ? const Color(0xFFFFE8A7) : const Color(0xFF8D6208);
    final textColor = isDark
        ? const Color(0xFFFFF3C4)
        : const Color(0xFF201607);
    final mutedColor = isDark
        ? Colors.white.withValues(alpha: 0.68)
        : const Color(0xFF735F33);
    final borderColor = isDark
        ? Colors.white.withValues(alpha: 0.09)
        : const Color(0xFFF0DFC0);
    final logoGradient = isDark
        ? const [Color(0xFF3B2C10), Color(0xFF171107)]
        : const [Colors.white, Color(0xFFFFE8A7)];

    return Scaffold(
      backgroundColor: backgroundColor,
      body: SafeArea(
        child: LayoutBuilder(
          builder: (context, constraints) {
            final minContentHeight = constraints.maxHeight > 40
                ? constraints.maxHeight - 40
                : 0.0;
            final useWideLayout = constraints.maxWidth >= 700;
            final contentMaxWidth = useWideLayout ? 940.0 : 420.0;
            final logoSize = useWideLayout ? 104.0 : 116.0;

            return Stack(
              children: [
                Positioned(
                  top: -64,
                  right: -52,
                  child: _buildBackgroundAccent(
                    size: 230,
                    colors: isDark
                        ? const [Color(0x2FFFD86A), Color(0x06151107)]
                        : const [Color(0x2AD6A735), Color(0x08D6A735)],
                  ),
                ),
                Positioned(
                  bottom: 80,
                  left: -80,
                  child: _buildBackgroundAccent(
                    size: 230,
                    colors: isDark
                        ? const [Color(0x1FD6A735), Color(0x06151107)]
                        : const [Color(0x1FFFF0BD), Color(0x08D6A735)],
                  ),
                ),
                SingleChildScrollView(
                  padding: const EdgeInsets.symmetric(
                    horizontal: 24,
                    vertical: 20,
                  ),
                  child: ConstrainedBox(
                    constraints: BoxConstraints(minHeight: minContentHeight),
                    child: Center(
                      child: ConstrainedBox(
                        constraints: BoxConstraints(maxWidth: contentMaxWidth),
                        child: useWideLayout
                            ? Row(
                                crossAxisAlignment: CrossAxisAlignment.center,
                                children: [
                                  Expanded(
                                    child: _buildBrandHeader(
                                      languageProvider: languageProvider,
                                      brandingProvider: brandingProvider,
                                      themeProvider: themeProvider,
                                      isDark: isDark,
                                      primaryGold: primaryGold,
                                      deepGold: deepGold,
                                      mutedColor: mutedColor,
                                      logoGradient: logoGradient,
                                      logoSize: logoSize,
                                    ),
                                  ),
                                  const SizedBox(width: 28),
                                  SizedBox(
                                    width: 420,
                                    child: _buildSignInPanel(
                                      languageProvider: languageProvider,
                                      authProvider: authProvider,
                                      isDark: isDark,
                                      surfaceColor: surfaceColor,
                                      primaryGold: primaryGold,
                                      deepGold: deepGold,
                                      textColor: textColor,
                                      mutedColor: mutedColor,
                                      borderColor: borderColor,
                                    ),
                                  ),
                                ],
                              )
                            : Column(
                                mainAxisAlignment: MainAxisAlignment.center,
                                children: [
                                  _buildBrandHeader(
                                    languageProvider: languageProvider,
                                    brandingProvider: brandingProvider,
                                    themeProvider: themeProvider,
                                    isDark: isDark,
                                    primaryGold: primaryGold,
                                    deepGold: deepGold,
                                    mutedColor: mutedColor,
                                    logoGradient: logoGradient,
                                    logoSize: logoSize,
                                  ),
                                  const SizedBox(height: 18),
                                  _buildSignInPanel(
                                    languageProvider: languageProvider,
                                    authProvider: authProvider,
                                    isDark: isDark,
                                    surfaceColor: surfaceColor,
                                    primaryGold: primaryGold,
                                    deepGold: deepGold,
                                    textColor: textColor,
                                    mutedColor: mutedColor,
                                    borderColor: borderColor,
                                  ),
                                ],
                              ),
                      ),
                    ),
                  ),
                ),
              ],
            );
          },
        ),
      ),
    );
  }

  Widget _buildBrandHeader({
    required LanguageProvider languageProvider,
    required AppBrandingProvider brandingProvider,
    required ThemeProvider themeProvider,
    required bool isDark,
    required Color primaryGold,
    required Color deepGold,
    required Color mutedColor,
    required List<Color> logoGradient,
    required double logoSize,
  }) {
    return Column(
      mainAxisSize: MainAxisSize.min,
      children: [
        Align(
          alignment: Alignment.centerRight,
          child: _buildHeaderControls(
            languageProvider,
            themeProvider: themeProvider,
            isDark: isDark,
          ),
        ),
        const SizedBox(height: 18),
        Container(
          width: logoSize,
          height: logoSize,
          padding: EdgeInsets.all(logoSize < 116 ? 14 : 16),
          decoration: BoxDecoration(
            gradient: RadialGradient(
              colors: logoGradient,
              center: const Alignment(-0.1, -0.15),
              radius: 0.9,
            ),
            borderRadius: BorderRadius.circular(logoSize < 116 ? 26 : 30),
            border: Border.all(
              color: isDark
                  ? primaryGold.withValues(alpha: 0.46)
                  : const Color(0xFFE7C76E),
              width: 1.4,
            ),
            boxShadow: [
              BoxShadow(
                color: isDark
                    ? Colors.black.withValues(alpha: 0.22)
                    : primaryGold.withValues(alpha: 0.14),
                blurRadius: 24,
                offset: const Offset(0, 10),
              ),
            ],
          ),
          child: _buildBrandLogo(brandingProvider, iconColor: deepGold),
        ),
        const SizedBox(height: 20),
        _buildAppTitle(brandingProvider.appTitle, isDark: isDark),
        const SizedBox(height: 10),
        Text(
          languageProvider.t('sign_in_to_continue'),
          textAlign: TextAlign.center,
          style: TextStyle(
            color: mutedColor,
            fontSize: 14,
            fontWeight: FontWeight.w600,
          ),
        ),
      ],
    );
  }

  Widget _buildSignInPanel({
    required LanguageProvider languageProvider,
    required AuthProvider authProvider,
    required bool isDark,
    required Color surfaceColor,
    required Color primaryGold,
    required Color deepGold,
    required Color textColor,
    required Color mutedColor,
    required Color borderColor,
  }) {
    return Column(
      mainAxisSize: MainAxisSize.min,
      children: [
        Container(
          width: double.infinity,
          padding: const EdgeInsets.all(24),
          decoration: BoxDecoration(
            color: surfaceColor.withValues(alpha: isDark ? 0.92 : 0.96),
            borderRadius: BorderRadius.circular(28),
            border: Border.all(color: borderColor),
            boxShadow: [
              BoxShadow(
                color: Colors.black.withValues(alpha: isDark ? 0.24 : 0.08),
                blurRadius: isDark ? 34 : 30,
                offset: const Offset(0, 16),
              ),
            ],
          ),
          child: Form(
            key: _formKey,
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                Row(
                  children: [
                    Container(
                      width: 48,
                      height: 48,
                      decoration: BoxDecoration(
                        gradient: LinearGradient(
                          colors: [
                            isDark
                                ? const Color(0xFF2B210E)
                                : const Color(0xFFFFF4D6),
                            isDark
                                ? const Color(0xFF4A3712)
                                : const Color(0xFFF3D987),
                          ],
                          begin: Alignment.topLeft,
                          end: Alignment.bottomRight,
                        ),
                        borderRadius: BorderRadius.circular(16),
                      ),
                      child: Icon(
                        Icons.local_shipping_rounded,
                        color: deepGold,
                        size: 24,
                      ),
                    ),
                    const SizedBox(width: 14),
                    Expanded(
                      child: Text(
                        languageProvider.t('welcome_back'),
                        style: TextStyle(
                          color: textColor,
                          fontSize: 22,
                          fontWeight: FontWeight.w800,
                        ),
                      ),
                    ),
                  ],
                ),
                if (_errorMessage != null) ...[
                  const SizedBox(height: 16),
                  _buildErrorMessage(_errorMessage!, isDark: isDark),
                ],
                const SizedBox(height: 22),
                TextFormField(
                  controller: _emailController,
                  onChanged: (_) => _clearError(),
                  keyboardType: TextInputType.emailAddress,
                  decoration: _inputDecoration(
                    label: languageProvider.t('email'),
                    icon: Icons.email_outlined,
                    isDark: isDark,
                    iconColor: deepGold,
                    mutedColor: mutedColor,
                  ),
                  validator: (value) {
                    if (value == null || value.trim().isEmpty) {
                      return languageProvider.t('email');
                    }
                    return null;
                  },
                ),
                const SizedBox(height: 16),
                TextFormField(
                  controller: _passwordController,
                  obscureText: _obscurePassword,
                  onChanged: (_) => _clearError(),
                  decoration: _inputDecoration(
                    label: languageProvider.t('password'),
                    icon: Icons.lock_outline_rounded,
                    isDark: isDark,
                    iconColor: deepGold,
                    mutedColor: mutedColor,
                    suffixIcon: IconButton(
                      onPressed: () {
                        setState(() {
                          _obscurePassword = !_obscurePassword;
                        });
                      },
                      icon: Icon(
                        _obscurePassword
                            ? Icons.visibility_off_outlined
                            : Icons.visibility_outlined,
                        color: deepGold,
                      ),
                    ),
                  ),
                  validator: (value) {
                    if (value == null || value.isEmpty) {
                      return languageProvider.t('password');
                    }
                    return null;
                  },
                ),
                const SizedBox(height: 22),
                DecoratedBox(
                  decoration: BoxDecoration(
                    gradient: const LinearGradient(
                      colors: [Color(0xFFFFD86A), Color(0xFFD6A735)],
                      begin: Alignment.topLeft,
                      end: Alignment.bottomRight,
                    ),
                    borderRadius: BorderRadius.circular(18),
                    boxShadow: [
                      BoxShadow(
                        color: primaryGold.withValues(
                          alpha: isDark ? 0.18 : 0.24,
                        ),
                        blurRadius: 18,
                        offset: const Offset(0, 10),
                      ),
                    ],
                  ),
                  child: SizedBox(
                    width: double.infinity,
                    height: 56,
                    child: FilledButton(
                      onPressed: authProvider.isLoading ? null : _submit,
                      style: FilledButton.styleFrom(
                        backgroundColor: Colors.transparent,
                        disabledBackgroundColor: Colors.transparent,
                        foregroundColor: const Color(0xFF201607),
                        disabledForegroundColor: const Color(
                          0xFF201607,
                        ).withValues(alpha: 0.72),
                        shadowColor: Colors.transparent,
                        shape: RoundedRectangleBorder(
                          borderRadius: BorderRadius.circular(18),
                        ),
                      ),
                      child: authProvider.isLoading
                          ? const SizedBox(
                              width: 22,
                              height: 22,
                              child: CircularProgressIndicator(
                                strokeWidth: 2.2,
                                color: Color(0xFF201607),
                              ),
                            )
                          : Text(
                              languageProvider.t('sign_in'),
                              style: const TextStyle(
                                fontSize: 17,
                                fontWeight: FontWeight.w800,
                              ),
                            ),
                    ),
                  ),
                ),
              ],
            ),
          ),
        ),
        const SizedBox(height: 14),
        LegalSupportLinks(compact: true, foregroundColor: deepGold),
      ],
    );
  }

  Widget _buildHeaderControls(
    LanguageProvider languageProvider, {
    required ThemeProvider themeProvider,
    required bool isDark,
  }) {
    final deepGold = isDark ? const Color(0xFFFFE8A7) : const Color(0xFF8D6208);
    final borderColor = isDark
        ? const Color(0xFFD6A735).withValues(alpha: 0.34)
        : const Color(0xFFEBD9A6);
    final surfaceColor = isDark
        ? Colors.white.withValues(alpha: 0.07)
        : Colors.white.withValues(alpha: 0.82);

    return Material(
      color: surfaceColor,
      borderRadius: BorderRadius.circular(999),
      child: Container(
        height: 46,
        padding: const EdgeInsets.all(4),
        decoration: BoxDecoration(
          borderRadius: BorderRadius.circular(999),
          border: Border.all(color: borderColor),
          boxShadow: [
            BoxShadow(
              color: Colors.black.withValues(alpha: isDark ? 0.18 : 0.06),
              blurRadius: 16,
              offset: const Offset(0, 8),
            ),
          ],
        ),
        child: Row(
          mainAxisSize: MainAxisSize.min,
          children: [
            Tooltip(
              message: languageProvider.t('dark_mode'),
              child: InkWell(
                borderRadius: BorderRadius.circular(999),
                onTap: themeProvider.toggleTheme,
                child: SizedBox(
                  width: 38,
                  height: 38,
                  child: Icon(
                    isDark ? Icons.light_mode_rounded : Icons.dark_mode_rounded,
                    size: 19,
                    color: deepGold,
                  ),
                ),
              ),
            ),
            const SizedBox(width: 4),
            Container(
              width: 1,
              height: 24,
              color: borderColor.withValues(alpha: 0.8),
            ),
            const SizedBox(width: 4),
            Tooltip(
              message: languageProvider.t('language'),
              child: InkWell(
                borderRadius: BorderRadius.circular(999),
                onTap: languageProvider.toggleLanguage,
                child: Padding(
                  padding: const EdgeInsets.symmetric(horizontal: 10),
                  child: Row(
                    mainAxisSize: MainAxisSize.min,
                    children: [
                      Icon(Icons.language_rounded, size: 18, color: deepGold),
                      const SizedBox(width: 6),
                      Text(
                        languageProvider.isKhmer ? 'EN' : 'ខ្មែរ',
                        style: TextStyle(
                          color: deepGold,
                          fontSize: 13,
                          fontWeight: FontWeight.w800,
                        ),
                      ),
                    ],
                  ),
                ),
              ),
            ),
          ],
        ),
      ),
    );
  }

  Widget _buildBrandLogo(
    AppBrandingProvider brandingProvider, {
    required Color iconColor,
  }) {
    if (brandingProvider.logoUrl != null) {
      return ClipRRect(
        borderRadius: BorderRadius.circular(22),
        child: Image.network(
          brandingProvider.logoUrl!,
          fit: BoxFit.contain,
          errorBuilder: (context, error, stackTrace) {
            return Icon(
              Icons.local_shipping_rounded,
              color: iconColor,
              size: 64,
            );
          },
        ),
      );
    }

    return Icon(Icons.local_shipping_rounded, color: iconColor, size: 64);
  }

  Widget _buildAppTitle(String title, {required bool isDark}) {
    const titleStyle = TextStyle(
      fontSize: 34,
      height: 1.08,
      fontWeight: FontWeight.w900,
      letterSpacing: 0,
    );

    return ShaderMask(
      blendMode: BlendMode.srcIn,
      shaderCallback: (bounds) {
        return LinearGradient(
          colors: isDark
              ? const [Color(0xFFFFE8A7), Color(0xFFD6A735), Color(0xFFFFF7D6)]
              : const [Color(0xFF8D6208), Color(0xFFFFD86A), Color(0xFF201607)],
          begin: Alignment.topLeft,
          end: Alignment.bottomRight,
        ).createShader(bounds);
      },
      child: Text(
        title,
        textAlign: TextAlign.center,
        maxLines: 2,
        overflow: TextOverflow.ellipsis,
        style: titleStyle.copyWith(color: Colors.white),
      ),
    );
  }

  Widget _buildErrorMessage(String message, {required bool isDark}) {
    return Container(
      width: double.infinity,
      padding: const EdgeInsets.all(14),
      decoration: BoxDecoration(
        color: isDark
            ? const Color(0xFF351810).withValues(alpha: 0.92)
            : const Color(0xFFFEF2F2),
        borderRadius: BorderRadius.circular(18),
        border: Border.all(
          color: isDark ? const Color(0xFF7C2D12) : const Color(0xFFFCA5A5),
        ),
      ),
      child: Row(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Icon(
            Icons.error_outline_rounded,
            color: isDark ? const Color(0xFFFBBF24) : const Color(0xFFB91C1C),
            size: 20,
          ),
          const SizedBox(width: 8),
          Expanded(
            child: Text(
              message,
              style: TextStyle(
                color: isDark
                    ? Colors.white.withValues(alpha: 0.80)
                    : const Color(0xFFB91C1C),
                fontSize: 13,
                height: 1.45,
                fontWeight: FontWeight.w600,
              ),
            ),
          ),
        ],
      ),
    );
  }

  Widget _buildBackgroundAccent({
    required double size,
    required List<Color> colors,
  }) {
    return IgnorePointer(
      child: Container(
        width: size,
        height: size,
        decoration: BoxDecoration(
          shape: BoxShape.circle,
          gradient: RadialGradient(colors: colors),
        ),
      ),
    );
  }

  InputDecoration _inputDecoration({
    required String label,
    required IconData icon,
    required bool isDark,
    required Color iconColor,
    required Color mutedColor,
    Widget? suffixIcon,
  }) {
    const focusColor = Color(0xFFD6A735);
    final borderColor = isDark
        ? Colors.white.withValues(alpha: 0.10)
        : const Color(0xFFE7D7B0);
    final fillColor = isDark
        ? Colors.white.withValues(alpha: 0.045)
        : const Color(0xFFFFFDF8);

    OutlineInputBorder border(Color color, [double width = 1.2]) {
      return OutlineInputBorder(
        borderRadius: BorderRadius.circular(18),
        borderSide: BorderSide(color: color, width: width),
      );
    }

    return InputDecoration(
      labelText: label,
      filled: true,
      fillColor: fillColor,
      prefixIcon: Padding(
        padding: const EdgeInsets.only(left: 16, right: 12),
        child: Icon(icon, color: iconColor, size: 22),
      ),
      prefixIconConstraints: const BoxConstraints(minWidth: 56),
      suffixIcon: suffixIcon,
      contentPadding: const EdgeInsets.symmetric(horizontal: 18, vertical: 20),
      labelStyle: TextStyle(color: mutedColor, fontWeight: FontWeight.w600),
      floatingLabelStyle: const TextStyle(
        color: focusColor,
        fontWeight: FontWeight.w700,
      ),
      enabledBorder: border(borderColor),
      focusedBorder: border(focusColor, 1.6),
      errorBorder: border(
        isDark ? const Color(0xFF7C2D12) : const Color(0xFFE59E9E),
      ),
      focusedErrorBorder: border(const Color(0xFFD97706), 1.4),
    );
  }

  void _clearError() {
    if (_errorMessage == null) return;
    setState(() {
      _errorMessage = null;
    });
  }
}
