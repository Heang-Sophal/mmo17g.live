import 'package:flutter/material.dart';
import 'package:provider/provider.dart';
import 'package:seller_app/providers/app_branding_provider.dart';
import 'package:seller_app/providers/auth_provider.dart';
import 'package:seller_app/providers/language_provider.dart';
import 'package:seller_app/providers/theme_provider.dart';

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
    final themeProvider = context.watch<ThemeProvider>();

    final isDark = Theme.of(context).brightness == Brightness.dark;
    final backgroundColor = isDark
        ? const Color(0xFF151107)
        : const Color(0xFFFFFCF5);
    final surfaceColor = isDark ? const Color(0xFF21190B) : Colors.white;
    const primaryGold = Color(0xFFD2A63F);
    final deepGold = isDark ? const Color(0xFFFFE8A7) : const Color(0xFF8A6418);
    final warmText = isDark ? const Color(0xFFFFF3C4) : const Color(0xFF2E2414);
    final mutedText = isDark
        ? Colors.white.withValues(alpha: 0.68)
        : const Color(0xFF857457);
    final formBorder = isDark
        ? Colors.white.withValues(alpha: 0.09)
        : const Color(0xFFF0DFC0);
    final logoGradient = isDark
        ? const [Color(0xFF3B2C10), Color(0xFF171107)]
        : const [Colors.white, Color(0xFFF4D98D)];
    final softGoldSurface = isDark
        ? const Color(0xFF2B210E)
        : const Color(0xFFFFF4D6);

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
                    colors: isDark
                        ? const [Color(0x2FFFD86A), Color(0x08FFD86A)]
                        : const [Color(0x33E6C975), Color(0x10E6C975)],
                  ),
                ),
                Positioned(
                  top: 120,
                  left: -70,
                  child: _buildBackgroundAccent(
                    size: 220,
                    colors: isDark
                        ? const [Color(0x1FD6A735), Color(0x06151107)]
                        : const [Color(0x1FF1D48C), Color(0x08F1D48C)],
                  ),
                ),
                Positioned(
                  bottom: 80,
                  right: -48,
                  child: _buildBackgroundAccent(
                    size: 200,
                    colors: isDark
                        ? const [Color(0x22D2A63F), Color(0x08151107)]
                        : const [Color(0x1AD2A63F), Color(0x08D2A63F)],
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
                              padding: const EdgeInsets.fromLTRB(28, 0, 28, 14),
                              child: Stack(
                                clipBehavior: Clip.none,
                                children: [
                                  Column(
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
                                        width: 128,
                                        height: 128,
                                        padding: const EdgeInsets.all(18),
                                        decoration: BoxDecoration(
                                          gradient: RadialGradient(
                                            colors: logoGradient,
                                            center: Alignment(-0.1, -0.15),
                                            radius: 0.9,
                                          ),
                                          borderRadius: BorderRadius.circular(
                                            32,
                                          ),
                                          border: Border.all(
                                            color: isDark
                                                ? primaryGold.withValues(
                                                    alpha: 0.46,
                                                  )
                                                : const Color(0xFFE7C76E),
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
                                          iconColor: deepGold,
                                        ),
                                      ),
                                      const SizedBox(height: 24),
                                      _buildGradientAppTitle(
                                        brandingProvider.appTitle,
                                        isDark: isDark,
                                      ),
                                      const SizedBox(height: 14),
                                      Container(
                                        padding: const EdgeInsets.symmetric(
                                          horizontal: 14,
                                          vertical: 7,
                                        ),
                                        decoration: BoxDecoration(
                                          color: isDark
                                              ? Colors.white.withValues(
                                                  alpha: 0.06,
                                                )
                                              : Colors.white.withValues(
                                                  alpha: 0.72,
                                                ),
                                          borderRadius: BorderRadius.circular(
                                            999,
                                          ),
                                          border: Border.all(
                                            color: isDark
                                                ? primaryGold.withValues(
                                                    alpha: 0.26,
                                                  )
                                                : const Color(0xFFEBD9A6),
                                          ),
                                        ),
                                        child: Text(
                                          languageProvider.t('welcome_back'),
                                          style: TextStyle(
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
                            const SizedBox(height: 10),
                            Container(
                              width: double.infinity,
                              padding: const EdgeInsets.fromLTRB(
                                24,
                                24,
                                24,
                                24,
                              ),
                              decoration: BoxDecoration(
                                color: surfaceColor.withValues(
                                  alpha: isDark ? 0.92 : 0.96,
                                ),
                                borderRadius: BorderRadius.circular(32),
                                border: Border.all(color: formBorder),
                                boxShadow: [
                                  BoxShadow(
                                    color: Colors.black.withValues(
                                      alpha: isDark ? 0.24 : 0.08,
                                    ),
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
                                                softGoldSurface,
                                                isDark
                                                    ? const Color(0xFF4A3712)
                                                    : const Color(0xFFF3D987),
                                              ],
                                              begin: Alignment.topLeft,
                                              end: Alignment.bottomRight,
                                            ),
                                            borderRadius: BorderRadius.circular(
                                              16,
                                            ),
                                          ),
                                          child: Icon(
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
                                                style: TextStyle(
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
                                        isDark: isDark,
                                        iconColor: deepGold,
                                        mutedText: mutedText,
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
                                        isDark: isDark,
                                        iconColor: deepGold,
                                        mutedText: mutedText,
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
                                          color: isDark
                                              ? const Color(
                                                  0xFF351810,
                                                ).withValues(alpha: 0.92)
                                              : const Color(
                                                  0xFFFFF2F2,
                                                ).withValues(alpha: 0.96),
                                          borderRadius: BorderRadius.circular(
                                            18,
                                          ),
                                          border: Border.all(
                                            color: isDark
                                                ? const Color(0xFF7C2D12)
                                                : const Color(0xFFF4CACA),
                                          ),
                                        ),
                                        child: Column(
                                          crossAxisAlignment:
                                              CrossAxisAlignment.start,
                                          children: [
                                            Row(
                                              children: [
                                                Icon(
                                                  Icons.error_outline_rounded,
                                                  color: isDark
                                                      ? const Color(0xFFFBBF24)
                                                      : const Color(0xFFC2410C),
                                                  size: 20,
                                                ),
                                                const SizedBox(width: 8),
                                                Expanded(
                                                  child: Text(
                                                    _errorTitle ?? 'Error',
                                                    style: TextStyle(
                                                      fontWeight:
                                                          FontWeight.w800,
                                                      color: isDark
                                                          ? const Color(
                                                              0xFFFFE8A7,
                                                            )
                                                          : const Color(
                                                              0xFF9A3412,
                                                            ),
                                                      fontSize: 14,
                                                    ),
                                                  ),
                                                ),
                                              ],
                                            ),
                                            const SizedBox(height: 6),
                                            Text(
                                              _errorMessage!,
                                              style: TextStyle(
                                                color: isDark
                                                    ? Colors.white.withValues(
                                                        alpha: 0.78,
                                                      )
                                                    : const Color(0xFFB45309),
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
                                                    ? SizedBox(
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
                                      color: isDark
                                          ? const Color(0xFF2C220F)
                                          : const Color(0xFFFFF8E6),
                                      borderRadius: BorderRadius.circular(18),
                                      border: Border.all(
                                        color: isDark
                                            ? primaryGold.withValues(
                                                alpha: 0.32,
                                              )
                                            : const Color(0xFFF0D489),
                                      ),
                                    ),
                                    child: Row(
                                      crossAxisAlignment:
                                          CrossAxisAlignment.start,
                                      children: [
                                        Padding(
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
                                            style: TextStyle(
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
            return Icon(Icons.storefront_rounded, size: 72, color: iconColor);
          },
        ),
      );
    }

    return Icon(Icons.storefront_rounded, size: 72, color: iconColor);
  }

  Widget _buildGradientAppTitle(String title, {required bool isDark}) {
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
              color: isDark
                  ? Colors.black.withValues(alpha: 0.38)
                  : const Color(0xFF5A3510).withValues(alpha: 0.26),
            ),
          ),
          Transform.translate(
            offset: const Offset(0, 1),
            child: titleText(
              color: Colors.white.withValues(alpha: isDark ? 0.20 : 0.64),
            ),
          ),
          ShaderMask(
            blendMode: BlendMode.srcIn,
            shaderCallback: (bounds) {
              return LinearGradient(
                colors: isDark
                    ? const [
                        Color(0xFFFFE8A7),
                        Color(0xFFD6A735),
                        Color(0xFFFFF7D6),
                        Color(0xFFFFD86A),
                      ]
                    : const [
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

  Widget _buildHeaderControls(
    LanguageProvider languageProvider, {
    required ThemeProvider themeProvider,
    required bool isDark,
  }) {
    final deepGold = isDark ? const Color(0xFFFFE8A7) : const Color(0xFF8A6418);
    final borderColor = isDark
        ? const Color(0xFFD2A63F).withValues(alpha: 0.34)
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
                child: AnimatedContainer(
                  duration: const Duration(milliseconds: 180),
                  width: 38,
                  height: 38,
                  decoration: BoxDecoration(
                    color: Colors.transparent,
                    shape: BoxShape.circle,
                  ),
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
    required Color mutedText,
    Widget? suffixIcon,
  }) {
    const focusColor = Color(0xFFD2A63F);
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
      labelStyle: TextStyle(color: mutedText, fontWeight: FontWeight.w600),
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
          'Only users with "Sale", "Delivery", "Admin", "Owner", or "Recorder" role can access this app.';
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
