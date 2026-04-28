import 'package:delivery_app/providers/auth_provider.dart';
import 'package:delivery_app/providers/app_branding_provider.dart';
import 'package:delivery_app/providers/language_provider.dart';
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

    setState(() {
      _errorMessage = _mapErrorMessage(
        result['error_type']?.toString(),
        languageProvider,
      );
    });
  }

  String _mapErrorMessage(
    String? errorType,
    LanguageProvider languageProvider,
  ) {
    switch (errorType) {
      case 'invalid_credentials':
        return languageProvider.t('invalid_email');
      case 'invalid_password':
        return languageProvider.t('invalid_password');
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
    final textTheme = Theme.of(context).textTheme;

    return Scaffold(
      body: DecoratedBox(
        decoration: const BoxDecoration(
          gradient: LinearGradient(
            begin: Alignment.topLeft,
            end: Alignment.bottomRight,
            colors: [Color(0xFFFFFBF2), Color(0xFFFFFEFA)],
          ),
        ),
        child: SafeArea(
          child: Center(
            child: SingleChildScrollView(
              padding: const EdgeInsets.all(24),
              child: ConstrainedBox(
                constraints: const BoxConstraints(maxWidth: 420),
                child: Card(
                  child: Padding(
                    padding: const EdgeInsets.all(24),
                    child: Column(
                      crossAxisAlignment: CrossAxisAlignment.stretch,
                      children: [
                        Align(
                          alignment: Alignment.centerRight,
                          child: TextButton.icon(
                            onPressed: languageProvider.toggleLanguage,
                            icon: const Icon(Icons.language_outlined),
                            label: Text(languageProvider.languageName),
                          ),
                        ),
                        const SizedBox(height: 12),
                        Center(
                          child: brandingProvider.logoUrl != null
                              ? ClipRRect(
                                  borderRadius: BorderRadius.circular(24),
                                  child: Image.network(
                                    brandingProvider.logoUrl!,
                                    width: 84,
                                    height: 84,
                                    fit: BoxFit.contain,
                                    errorBuilder: (context, error, stackTrace) {
                                      return Container(
                                        width: 84,
                                        height: 84,
                                        decoration: BoxDecoration(
                                          color: const Color(0xFFD6A735),
                                          borderRadius: BorderRadius.circular(
                                            24,
                                          ),
                                        ),
                                        child: const Icon(
                                          Icons.local_shipping_rounded,
                                          size: 42,
                                          color: Colors.white,
                                        ),
                                      );
                                    },
                                  ),
                                )
                              : Container(
                                  width: 84,
                                  height: 84,
                                  decoration: BoxDecoration(
                                    color: const Color(0xFFD6A735),
                                    borderRadius: BorderRadius.circular(24),
                                  ),
                                  child: const Icon(
                                    Icons.local_shipping_rounded,
                                    size: 42,
                                    color: Colors.white,
                                  ),
                                ),
                        ),
                        const SizedBox(height: 20),
                        Text(
                          brandingProvider.appTitle,
                          textAlign: TextAlign.center,
                          style: textTheme.headlineSmall?.copyWith(
                            fontWeight: FontWeight.w700,
                          ),
                        ),
                        const SizedBox(height: 8),
                        Text(
                          languageProvider.t('sign_in_to_continue'),
                          textAlign: TextAlign.center,
                          style: textTheme.bodyMedium?.copyWith(
                            color: const Color(0xFF475569),
                          ),
                        ),
                        if (_errorMessage != null) ...[
                          const SizedBox(height: 20),
                          Container(
                            padding: const EdgeInsets.all(14),
                            decoration: BoxDecoration(
                              color: const Color(0xFFFEF2F2),
                              borderRadius: BorderRadius.circular(16),
                              border: Border.all(
                                color: const Color(0xFFFCA5A5),
                              ),
                            ),
                            child: Text(
                              _errorMessage!,
                              style: const TextStyle(color: Color(0xFFB91C1C)),
                            ),
                          ),
                        ],
                        const SizedBox(height: 20),
                        Form(
                          key: _formKey,
                          child: Column(
                            children: [
                              TextFormField(
                                controller: _emailController,
                                keyboardType: TextInputType.emailAddress,
                                decoration: InputDecoration(
                                  labelText: languageProvider.t('email'),
                                  prefixIcon: const Icon(Icons.email_outlined),
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
                                decoration: InputDecoration(
                                  labelText: languageProvider.t('password'),
                                  prefixIcon: const Icon(Icons.lock_outline),
                                  suffixIcon: IconButton(
                                    onPressed: () {
                                      setState(() {
                                        _obscurePassword = !_obscurePassword;
                                      });
                                    },
                                    icon: Icon(
                                      _obscurePassword
                                          ? Icons.visibility_outlined
                                          : Icons.visibility_off_outlined,
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
                            ],
                          ),
                        ),
                        const SizedBox(height: 20),
                        FilledButton(
                          onPressed: authProvider.isLoading ? null : _submit,
                          style: FilledButton.styleFrom(
                            backgroundColor: const Color(0xFFD6A735),
                            padding: const EdgeInsets.symmetric(vertical: 16),
                          ),
                          child: authProvider.isLoading
                              ? const SizedBox(
                                  width: 20,
                                  height: 20,
                                  child: CircularProgressIndicator(
                                    strokeWidth: 2,
                                    color: Colors.white,
                                  ),
                                )
                              : Text(languageProvider.t('sign_in')),
                        ),
                      ],
                    ),
                  ),
                ),
              ),
            ),
          ),
        ),
      ),
    );
  }
}
