import 'package:flutter/material.dart';
import 'package:provider/provider.dart';
import 'package:seller_app/providers/app_branding_provider.dart';
import 'package:seller_app/providers/auth_provider.dart';
import 'package:seller_app/providers/language_provider.dart';

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
  String? _errorTitle;

  @override
  void dispose() {
    _emailController.dispose();
    _passwordController.dispose();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    final languageProvider = context.watch<LanguageProvider>();
    final brandingProvider = context.watch<AppBrandingProvider>();

    const backgroundColor = Color(0xFFFFFCF5);
    const surfaceColor = Colors.white;
    const primaryGold = Color(0xFFD2A63F);
    const deepGold = Color(0xFF8A6418);
    const warmText = Color(0xFF2E2414);

    return Scaffold(
      backgroundColor: backgroundColor,
      body: SafeArea(
        child: LayoutBuilder(
          builder: (context, constraints) {
            final minContentHeight = constraints.maxHeight > 40
                ? constraints.maxHeight - 40
                : 0.0;

            return Stack(
              children: [
                Positioned(
                  top: -40,
                  right: -26,
                  child: _buildBackgroundAccent(
                    size: 180,
                    colors: const [Color(0x33E6C975), Color(0x10E6C975)],
                  ),
                ),
                Positioned(
                  top: 120,
                  left: -70,
                  child: _buildBackgroundAccent(
                    size: 220,
                    colors: const [Color(0x1FF1D48C), Color(0x08F1D48C)],
                  ),
                ),
                Positioned(
                  bottom: 80,
                  right: -48,
                  child: _buildBackgroundAccent(
                    size: 200,
                    colors: const [Color(0x1AD2A63F), Color(0x08D2A63F)],
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
                        constraints: const BoxConstraints(maxWidth: 420),
                        child: Column(
                          mainAxisAlignment: MainAxisAlignment.center,
                          children: [
                            Container(
                              width: double.infinity,
                              padding: const EdgeInsets.fromLTRB(
                                28,
                                30,
                                28,
                                30,
                              ),
                              decoration: BoxDecoration(
                                gradient: const LinearGradient(
                                  colors: [
                                    Color(0xFFFFFEFB),
                                    Color(0xFFFBEFC8),
                                  ],
                                  begin: Alignment.topLeft,
                                  end: Alignment.bottomRight,
                                ),
                                borderRadius: BorderRadius.circular(36),
                                border: Border.all(
                                  color: const Color(0xFFE8D39B),
                                ),
                                boxShadow: [
                                  BoxShadow(
                                    color: primaryGold.withValues(alpha: 0.12),
                                    blurRadius: 30,
                                    offset: const Offset(0, 16),
                                  ),
                                ],
                              ),
                              child: Stack(
                                clipBehavior: Clip.none,
                                children: [
                                  Positioned(
                                    top: 0,
                                    right: 0,
                                    child: _buildLanguageToggle(
                                      languageProvider,
                                    ),
                                  ),
                                  Column(
                                    children: [
                                      Container(
                                        width: 128,
                                        height: 128,
                                        padding: const EdgeInsets.all(18),
                                        decoration: BoxDecoration(
                                          gradient: const RadialGradient(
                                            colors: [
                                              Colors.white,
                                              Color(0xFFF4D98D),
                                            ],
                                            center: Alignment(-0.1, -0.15),
                                            radius: 0.9,
                                          ),
                                          borderRadius: BorderRadius.circular(
                                            32,
                                          ),
                                          border: Border.all(
                                            color: const Color(0xFFE7C76E),
                                            width: 1.4,
                                          ),
                                          boxShadow: [
                                            BoxShadow(
                                              color: deepGold.withValues(
                                                alpha: 0.14,
                                              ),
                                              blurRadius: 24,
                                              offset: const Offset(0, 10),
                                            ),
                                          ],
                                        ),
                                        child: _buildBrandLogo(
                                          brandingProvider,
                                        ),
                                      ),
                                      const SizedBox(height: 24),
                                      _buildGradientAppTitle(
                                        brandingProvider.appTitle,
                                      ),
                                      const SizedBox(height: 14),
                                      Container(
                                        padding: const EdgeInsets.symmetric(
                                          horizontal: 14,
                                          vertical: 7,
                                        ),
                                        decoration: BoxDecoration(
                                          color: Colors.white.withValues(
                                            alpha: 0.72,
                                          ),
                                          borderRadius: BorderRadius.circular(
                                            999,
                                          ),
                                          border: Border.all(
                                            color: const Color(0xFFEBD9A6),
                                          ),
                                        ),
                                        child: Text(
                                          languageProvider.t('welcome_back'),
                                          style: const TextStyle(
                                            fontSize: 13,
                                            fontWeight: FontWeight.w700,
                                            color: deepGold,
                                          ),
                                        ),
                                      ),
                                    ],
                                  ),
                                ],
                              ),
                            ),
                            const SizedBox(height: 24),
                            Container(
                              width: double.infinity,
                              padding: const EdgeInsets.fromLTRB(
                                24,
                                24,
                                24,
                                24,
                              ),
                              decoration: BoxDecoration(
                                color: surfaceColor.withValues(alpha: 0.96),
                                borderRadius: BorderRadius.circular(32),
                                border: Border.all(
                                  color: const Color(0xFFF0DFC0),
                                ),
                                boxShadow: [
                                  BoxShadow(
                                    color: Colors.black.withValues(alpha: 0.08),
                                    blurRadius: 30,
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
                                            gradient: const LinearGradient(
                                              colors: [
                                                Color(0xFFFFF4D6),
                                                Color(0xFFF3D987),
                                              ],
                                              begin: Alignment.topLeft,
                                              end: Alignment.bottomRight,
                                            ),
                                            borderRadius: BorderRadius.circular(
                                              16,
                                            ),
                                          ),
                                          child: const Icon(
                                            Icons.lock_person_rounded,
                                            color: deepGold,
                                            size: 24,
                                          ),
                                        ),
                                        const SizedBox(width: 14),
                                        Expanded(
                                          child: Column(
                                            crossAxisAlignment:
                                                CrossAxisAlignment.start,
                                            children: [
                                              Text(
                                                languageProvider.t('sign_in'),
                                                style: const TextStyle(
                                                  fontSize: 21,
                                                  fontWeight: FontWeight.w800,
                                                  color: warmText,
                                                ),
                                              ),
                                            ],
                                          ),
                                        ),
                                      ],
                                    ),
                                    const SizedBox(height: 24),
                                    TextFormField(
                                      controller: _emailController,
                                      onChanged: (_) => _clearError(),
                                      keyboardType: TextInputType.emailAddress,
                                      decoration: _inputDecoration(
                                        label: languageProvider.t('email'),
                                        icon: Icons.email_outlined,
                                      ),
                                      validator: (value) {
                                        if (value == null || value.isEmpty) {
                                          return languageProvider.t(
                                            'please_enter_email',
                                          );
                                        }
                                        if (!value.contains('@')) {
                                          return languageProvider.t(
                                            'please_enter_valid_email',
                                          );
                                        }
                                        return null;
                                      },
                                    ),
                                    const SizedBox(height: 18),
                                    TextFormField(
                                      controller: _passwordController,
                                      obscureText: _obscurePassword,
                                      onChanged: (_) => _clearError(),
                                      decoration: _inputDecoration(
                                        label: languageProvider.t('password'),
                                        icon: Icons.lock_outline_rounded,
                                        suffixIcon: IconButton(
                                          icon: Icon(
                                            _obscurePassword
                                                ? Icons.visibility_off_outlined
                                                : Icons.visibility_outlined,
                                            color: deepGold,
                                          ),
                                          onPressed: () {
                                            setState(() {
                                              _obscurePassword =
                                                  !_obscurePassword;
                                            });
                                          },
                                        ),
                                      ),
                                      validator: (value) {
                                        if (value == null || value.isEmpty) {
                                          return languageProvider.t(
                                            'please_enter_password',
                                          );
                                        }
                                        if (value.length < 6) {
                                          return languageProvider.t(
                                            'password_min_6_chars',
                                          );
                                        }
                                        return null;
                                      },
                                    ),
                                    if (_errorMessage != null) ...[
                                      const SizedBox(height: 18),
                                      Container(
                                        width: double.infinity,
                                        padding: const EdgeInsets.all(14),
                                        decoration: BoxDecoration(
                                          color: const Color(
                                            0xFFFFF2F2,
                                          ).withValues(alpha: 0.96),
                                          borderRadius: BorderRadius.circular(
                                            18,
                                          ),
                                          border: Border.all(
                                            color: const Color(0xFFF4CACA),
                                          ),
                                        ),
                                        child: Column(
                                          crossAxisAlignment:
                                              CrossAxisAlignment.start,
                                          children: [
                                            Row(
                                              children: [
                                                const Icon(
                                                  Icons.error_outline_rounded,
                                                  color: Color(0xFFC2410C),
                                                  size: 20,
                                                ),
                                                const SizedBox(width: 8),
                                                Expanded(
                                                  child: Text(
                                                    _errorTitle ?? 'Error',
                                                    style: const TextStyle(
                                                      fontWeight:
                                                          FontWeight.w800,
                                                      color: Color(0xFF9A3412),
                                                      fontSize: 14,
                                                    ),
                                                  ),
                                                ),
                                              ],
                                            ),
                                            const SizedBox(height: 6),
                                            Text(
                                              _errorMessage!,
                                              style: const TextStyle(
                                                color: Color(0xFFB45309),
                                                fontSize: 13,
                                                height: 1.45,
                                              ),
                                            ),
                                          ],
                                        ),
                                      ),
                                    ],
                                    const SizedBox(height: 24),
                                    Consumer<AuthProvider>(
                                      builder: (context, authProvider, child) {
                                        return Opacity(
                                          opacity: authProvider.isLoading
                                              ? 0.9
                                              : 1,
                                          child: DecoratedBox(
                                            decoration: BoxDecoration(
                                              gradient: const LinearGradient(
                                                colors: [
                                                  Color(0xFFF5D57B),
                                                  Color(0xFFD4A63F),
                                                ],
                                                begin: Alignment.topLeft,
                                                end: Alignment.bottomRight,
                                              ),
                                              borderRadius:
                                                  BorderRadius.circular(18),
                                              boxShadow: [
                                                BoxShadow(
                                                  color: primaryGold.withValues(
                                                    alpha: 0.24,
                                                  ),
                                                  blurRadius: 18,
                                                  offset: const Offset(0, 10),
                                                ),
                                              ],
                                            ),
                                            child: SizedBox(
                                              width: double.infinity,
                                              height: 58,
                                              child: ElevatedButton(
                                                onPressed:
                                                    authProvider.isLoading
                                                    ? null
                                                    : _handleLogin,
                                                style: ElevatedButton.styleFrom(
                                                  backgroundColor:
                                                      Colors.transparent,
                                                  foregroundColor: warmText,
                                                  disabledBackgroundColor:
                                                      Colors.transparent,
                                                  disabledForegroundColor:
                                                      warmText.withValues(
                                                        alpha: 0.7,
                                                      ),
                                                  shadowColor:
                                                      Colors.transparent,
                                                  elevation: 0,
                                                  shape: RoundedRectangleBorder(
                                                    borderRadius:
                                                        BorderRadius.circular(
                                                          18,
                                                        ),
                                                  ),
                                                ),
                                                child: authProvider.isLoading
                                                    ? const SizedBox(
                                                        height: 24,
                                                        width: 24,
                                                        child: CircularProgressIndicator(
                                                          strokeWidth: 2.2,
                                                          valueColor:
                                                              AlwaysStoppedAnimation<
                                                                Color
                                                              >(warmText),
                                                        ),
                                                      )
                                                    : Text(
                                                        languageProvider.t(
                                                          'sign_in',
                                                        ),
                                                        style: const TextStyle(
                                                          fontSize: 18,
                                                          fontWeight:
                                                              FontWeight.w800,
                                                          letterSpacing: 0.1,
                                                        ),
                                                      ),
                                              ),
                                            ),
                                          ),
                                        );
                                      },
                                    ),
                                  ],
                                ),
                              ),
                            ),
                            const SizedBox(height: 18),
                            Consumer<AuthProvider>(
                              builder: (context, authProvider, child) {
                                if (authProvider.error != null &&
                                    authProvider.error!.contains(
                                      'attempts_remaining',
                                    )) {
                                  return Container(
                                    width: double.infinity,
                                    padding: const EdgeInsets.all(14),
                                    decoration: BoxDecoration(
                                      color: const Color(0xFFFFF8E6),
                                      borderRadius: BorderRadius.circular(18),
                                      border: Border.all(
                                        color: const Color(0xFFF0D489),
                                      ),
                                    ),
                                    child: Row(
                                      crossAxisAlignment:
                                          CrossAxisAlignment.start,
                                      children: [
                                        const Padding(
                                          padding: EdgeInsets.only(top: 2),
                                          child: Icon(
                                            Icons.info_outline_rounded,
                                            color: deepGold,
                                            size: 18,
                                          ),
                                        ),
                                        const SizedBox(width: 10),
                                        Expanded(
                                          child: Text(
                                            authProvider.error!,
                                            style: const TextStyle(
                                              color: deepGold,
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

                                return const SizedBox.shrink();
                              },
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

  Widget _buildBrandLogo(AppBrandingProvider brandingProvider) {
    if (brandingProvider.logoUrl != null) {
      return ClipRRect(
        borderRadius: BorderRadius.circular(22),
        child: Image.network(
          brandingProvider.logoUrl!,
          fit: BoxFit.contain,
          errorBuilder: (context, error, stackTrace) {
            return const Icon(
              Icons.storefront_rounded,
              size: 72,
              color: Color(0xFF8A6418),
            );
          },
        ),
      );
    }

    return const Icon(
      Icons.storefront_rounded,
      size: 72,
      color: Color(0xFF8A6418),
    );
  }

  Widget _buildGradientAppTitle(String title) {
    const titleStyle = TextStyle(
      fontSize: 36,
      height: 1.08,
      fontWeight: FontWeight.w900,
      letterSpacing: 0,
    );

    Widget titleText({required Color color}) {
      return Text(
        title,
        textAlign: TextAlign.center,
        maxLines: 2,
        overflow: TextOverflow.ellipsis,
        style: titleStyle.copyWith(color: color),
      );
    }

    return SizedBox(
      width: double.infinity,
      child: Stack(
        alignment: Alignment.center,
        children: [
          Transform.translate(
            offset: const Offset(0, 2),
            child: titleText(
              color: const Color(0xFF5A3510).withValues(alpha: 0.26),
            ),
          ),
          Transform.translate(
            offset: const Offset(0, 1),
            child: titleText(color: Colors.white.withValues(alpha: 0.64)),
          ),
          ShaderMask(
            blendMode: BlendMode.srcIn,
            shaderCallback: (bounds) {
              return const LinearGradient(
                colors: [
                  Color(0xFF6F3D08),
                  Color(0xFFFFD76A),
                  Color(0xFFC98918),
                  Color(0xFF2E2414),
                ],
                stops: [0.0, 0.34, 0.62, 1.0],
                begin: Alignment.topLeft,
                end: Alignment.bottomRight,
              ).createShader(bounds);
            },
            child: titleText(color: Colors.white),
          ),
        ],
      ),
    );
  }

  Widget _buildLanguageToggle(LanguageProvider languageProvider) {
    const deepGold = Color(0xFF8A6418);

    return Tooltip(
      message: languageProvider.t('language'),
      child: Material(
        color: Colors.white.withValues(alpha: 0.82),
        borderRadius: BorderRadius.circular(999),
        child: InkWell(
          borderRadius: BorderRadius.circular(999),
          onTap: languageProvider.toggleLanguage,
          child: Container(
            height: 44,
            padding: const EdgeInsets.symmetric(horizontal: 12),
            decoration: BoxDecoration(
              borderRadius: BorderRadius.circular(999),
              border: Border.all(color: const Color(0xFFEBD9A6)),
              boxShadow: [
                BoxShadow(
                  color: deepGold.withValues(alpha: 0.08),
                  blurRadius: 14,
                  offset: const Offset(0, 8),
                ),
              ],
            ),
            child: Row(
              mainAxisSize: MainAxisSize.min,
              children: [
                const Icon(Icons.language_rounded, size: 18, color: deepGold),
                const SizedBox(width: 6),
                Text(
                  languageProvider.isKhmer ? 'EN' : 'ខ្មែរ',
                  style: const TextStyle(
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
    Widget? suffixIcon,
  }) {
    const borderColor = Color(0xFFE7D7B0);
    const focusColor = Color(0xFFD2A63F);

    OutlineInputBorder border(Color color, [double width = 1.2]) {
      return OutlineInputBorder(
        borderRadius: BorderRadius.circular(18),
        borderSide: BorderSide(color: color, width: width),
      );
    }

    return InputDecoration(
      labelText: label,
      filled: true,
      fillColor: const Color(0xFFFFFDF8),
      prefixIcon: Padding(
        padding: const EdgeInsets.only(left: 16, right: 12),
        child: Icon(icon, color: const Color(0xFFB38A2D), size: 22),
      ),
      prefixIconConstraints: const BoxConstraints(minWidth: 56),
      suffixIcon: suffixIcon,
      contentPadding: const EdgeInsets.symmetric(horizontal: 18, vertical: 20),
      labelStyle: const TextStyle(
        color: Color(0xFF857457),
        fontWeight: FontWeight.w600,
      ),
      floatingLabelStyle: const TextStyle(
        color: focusColor,
        fontWeight: FontWeight.w700,
      ),
      enabledBorder: border(borderColor),
      focusedBorder: border(focusColor, 1.6),
      errorBorder: border(const Color(0xFFE59E9E)),
      focusedErrorBorder: border(const Color(0xFFD97706), 1.4),
    );
  }

  Future<void> _handleLogin() async {
    if (!_formKey.currentState!.validate()) return;

    final authProvider = context.read<AuthProvider>();

    debugPrint(
      '🔐 _handleLogin: starting login for ${_emailController.text.trim()}',
    );

    final result = await authProvider.signIn(
      email: _emailController.text.trim(),
      password: _passwordController.text,
    );

    debugPrint('🔐 _handleLogin: result = $result');
    debugPrint(
      '🔐 _handleLogin: result[success] = ${result['success']} (type: ${result['success'].runtimeType})',
    );

    if (!mounted) {
      debugPrint('🔐 _handleLogin: not mounted, aborting');
      return;
    }

    final isSuccess = result['success'] == true;
    debugPrint('🔐 _handleLogin: isSuccess = $isSuccess');

    if (!mounted) {
      debugPrint('🔐 _handleLogin: not mounted, aborting');
      return;
    }

    if (isSuccess) {
      // Clear any previous errors
      setState(() {
        _errorMessage = null;
        _errorTitle = null;
      });
      debugPrint(
        '🔐 _handleLogin: auth state updated, AuthWrapper will show main app',
      );
    } else {
      // Show error inline on the form
      debugPrint(
        '🔐 _handleLogin: showing inline error for errorType=${result['error_type']}',
      );
      _setErrorFromResult(result);
    }
  }

  void _setErrorFromResult(Map<String, dynamic> result) {
    final errorType = result['error_type'];
    final message = result['message'];
    final attemptsRemaining = result['attempts_remaining'];
    final blockedUntil = result['blocked_until'];

    debugPrint(
      '🔐 _setErrorFromResult: errorType=$errorType, message=$message',
    );

    if (errorType == 'account_blocked') {
      _errorTitle = 'Account Temporarily Blocked';
      _errorMessage =
          'Too many failed login attempts. Try again after ${_formatBlockedTime(blockedUntil)}.';
    } else if (errorType == 'invalid_credentials') {
      _errorTitle = 'Invalid Email';
      _errorMessage = 'No account found with this email.';
      if (attemptsRemaining != null) {
        _errorMessage =
            '$_errorMessage ($attemptsRemaining attempt(s) remaining.)';
      }
    } else if (errorType == 'invalid_password') {
      _errorTitle = 'Invalid Password';
      _errorMessage = message ?? 'The password you entered is incorrect.';
      if (attemptsRemaining != null) {
        _errorMessage =
            '$_errorMessage ($attemptsRemaining attempt(s) remaining.)';
      }
    } else if (errorType == 'account_deactivated') {
      _errorTitle = 'Account Deactivated';
      _errorMessage =
          'Your account has been deactivated. Contact administrator.';
    } else if (errorType == 'account_locked') {
      _errorTitle = 'Account Locked';
      _errorMessage =
          'Your account has been locked by administrator. Please contact support.';
    } else if (errorType == 'insufficient_permissions') {
      _errorTitle = 'Access Denied';
      _errorMessage =
          'Only users with "Sale", "Delivery", "Admin", or "Owner" role can access this app.';
    } else if (errorType == 'network_error') {
      _errorTitle = 'Connection Error';
      _errorMessage = message ?? 'Unable to connect to server.';
    } else {
      _errorTitle = 'Login Failed';
      _errorMessage = message ?? 'An unknown error occurred.';
    }

    setState(() {
      // Rebuild to show error
    });
  }

  void _clearError() {
    if (_errorMessage != null) {
      setState(() {
        _errorMessage = null;
        _errorTitle = null;
      });
    }
  }

  String _formatBlockedTime(String? blockedUntil) {
    if (blockedUntil == null) return 'Unknown';
    try {
      final dateTime = DateTime.parse(blockedUntil);
      return '${dateTime.hour}:${dateTime.minute.toString().padLeft(2, '0')} on ${dateTime.day}/${dateTime.month}/${dateTime.year}';
    } catch (e) {
      return blockedUntil;
    }
  }
}
