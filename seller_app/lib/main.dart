import 'dart:async';

import 'package:flutter/material.dart';
import 'package:flutter_localizations/flutter_localizations.dart';
import 'package:provider/provider.dart';
import 'package:google_fonts/google_fonts.dart';
import 'package:seller_app/providers/app_branding_provider.dart';
import 'package:seller_app/providers/auth_provider.dart';
import 'package:seller_app/providers/profile_provider.dart';
import 'package:seller_app/providers/cart_provider.dart';
import 'package:seller_app/providers/product_provider.dart';
import 'package:seller_app/providers/order_provider.dart';
import 'package:seller_app/providers/theme_provider.dart';
import 'package:seller_app/providers/language_provider.dart';
import 'package:seller_app/controllers/navigation_bar_controller.dart';
import 'package:seller_app/screens/sign_in_screen.dart';
import 'package:seller_app/screens/main_navigation_screen.dart';
import 'package:seller_app/services/notification_service.dart';
import 'package:seller_app/widgets/cached_image.dart';

// Global navigator key for navigation from anywhere
final GlobalKey<NavigatorState> navigatorKey = GlobalKey<NavigatorState>();

const Color _goldPrimary = Color(0xFFD6A735);
const Color _goldAccent = Color(0xFFFFD86A);
const Color _goldDeep = Color(0xFF8D6208);
const Color _goldSoft = Color(0xFFFFE8A7);
const Color _warmInk = Color(0xFF201607);
const Color _warmMuted = Color(0xFF735F33);
const Color _warmBackground = Color(0xFFFFFBF2);
const Color _warmSurface = Color(0xFFFFFEFA);
const Color _darkBackground = Color(0xFF151107);
const Color _darkSurface = Color(0xFF21190B);

Future<void> main() async {
  WidgetsFlutterBinding.ensureInitialized();
  runApp(const SellerApp());
  unawaited(NotificationService.initialize());
}

class SellerApp extends StatelessWidget {
  const SellerApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MultiProvider(
      providers: [
        // Auth Provider
        ChangeNotifierProvider(create: (_) => AuthProvider()),
        // Profile Provider
        ChangeNotifierProvider(create: (_) => ProfileProvider()),
        // Language Provider
        ChangeNotifierProvider(create: (_) => LanguageProvider()),
        // Cart Provider (for POS)
        ChangeNotifierProvider(create: (_) => CartProvider()),
        // Product Provider
        ChangeNotifierProvider(create: (_) => ProductProvider()),
        // Order Provider
        ChangeNotifierProvider(create: (_) => OrderProvider()),
        // Theme Provider (for Dark/Light mode)
        ChangeNotifierProvider(create: (_) => ThemeProvider()),
        // App branding provider
        ChangeNotifierProvider(
          create: (_) => AppBrandingProvider()..loadBranding(),
        ),
        // Navigation Bar Controller (for auto hide/show)
        ChangeNotifierProvider(create: (_) => NavigationBarController()),
      ],
      child: Consumer3<ThemeProvider, LanguageProvider, AppBrandingProvider>(
        builder:
            (
              context,
              themeProvider,
              languageProvider,
              brandingProvider,
              child,
            ) {
              return MaterialApp(
                navigatorKey: navigatorKey,
                title: brandingProvider.appTitle,
                debugShowCheckedModeBanner: false,
                locale: languageProvider.locale,
                supportedLocales: const [
                  Locale('km'), // Khmer
                  Locale('en'), // English
                ],
                localizationsDelegates: [
                  GlobalMaterialLocalizations.delegate,
                  GlobalWidgetsLocalizations.delegate,
                  GlobalCupertinoLocalizations.delegate,
                ],
                themeMode: themeProvider.themeMode,
                theme: ThemeData(
                  colorScheme:
                      ColorScheme.fromSeed(
                        seedColor: _goldPrimary,
                        brightness: Brightness.light,
                      ).copyWith(
                        primary: _goldPrimary,
                        onPrimary: _warmInk,
                        secondary: _goldDeep,
                        surface: _warmSurface,
                      ),
                  useMaterial3: true,
                  fontFamily: GoogleFonts.kantumruyPro().fontFamily,
                  scaffoldBackgroundColor: _warmBackground,
                  appBarTheme: const AppBarTheme(
                    centerTitle: true,
                    elevation: 0,
                    backgroundColor: _warmSurface,
                    foregroundColor: _warmInk,
                  ),
                  cardTheme: CardThemeData(
                    elevation: 2,
                    color: _warmSurface,
                    shape: RoundedRectangleBorder(
                      borderRadius: BorderRadius.circular(12),
                    ),
                  ),
                  inputDecorationTheme: InputDecorationTheme(
                    filled: true,
                    fillColor: _warmSurface,
                    border: OutlineInputBorder(
                      borderRadius: BorderRadius.circular(12),
                    ),
                    contentPadding: const EdgeInsets.symmetric(
                      horizontal: 16,
                      vertical: 16,
                    ),
                  ),
                  navigationBarTheme: NavigationBarThemeData(
                    height: 78,
                    backgroundColor: Colors.transparent,
                    indicatorColor: _goldAccent.withValues(alpha: 0.36),
                    indicatorShape: RoundedRectangleBorder(
                      borderRadius: BorderRadius.circular(18),
                    ),
                    iconTheme: WidgetStateProperty.resolveWith((states) {
                      final isSelected = states.contains(WidgetState.selected);
                      return IconThemeData(
                        color: isSelected ? _goldDeep : const Color(0xFF4B5563),
                        size: isSelected ? 29 : 27,
                      );
                    }),
                    labelTextStyle: WidgetStateProperty.resolveWith((states) {
                      final isSelected = states.contains(WidgetState.selected);
                      return TextStyle(
                        fontSize: isSelected ? 14 : 12.5,
                        fontWeight: FontWeight.w700,
                        color: isSelected ? _warmInk : _warmMuted,
                      );
                    }),
                  ),
                  progressIndicatorTheme: const ProgressIndicatorThemeData(
                    color: _goldPrimary,
                  ),
                ),
                darkTheme: ThemeData(
                  colorScheme:
                      ColorScheme.fromSeed(
                        seedColor: _goldPrimary,
                        brightness: Brightness.dark,
                      ).copyWith(
                        primary: _goldPrimary,
                        onPrimary: _warmInk,
                        secondary: _goldSoft,
                        surface: _darkSurface,
                      ),
                  useMaterial3: true,
                  fontFamily: GoogleFonts.kantumruyPro().fontFamily,
                  scaffoldBackgroundColor: _darkBackground,
                  appBarTheme: const AppBarTheme(
                    centerTitle: true,
                    elevation: 0,
                    backgroundColor: _darkSurface,
                    foregroundColor: _goldSoft,
                  ),
                  cardTheme: CardThemeData(
                    elevation: 2,
                    color: _darkSurface,
                    shape: RoundedRectangleBorder(
                      borderRadius: BorderRadius.circular(12),
                    ),
                  ),
                  inputDecorationTheme: InputDecorationTheme(
                    filled: true,
                    fillColor: _darkSurface,
                    border: OutlineInputBorder(
                      borderRadius: BorderRadius.circular(12),
                    ),
                    contentPadding: const EdgeInsets.symmetric(
                      horizontal: 16,
                      vertical: 16,
                    ),
                  ),
                  navigationBarTheme: NavigationBarThemeData(
                    height: 78,
                    backgroundColor: Colors.transparent,
                    indicatorColor: _goldPrimary.withValues(alpha: 0.24),
                    indicatorShape: RoundedRectangleBorder(
                      borderRadius: BorderRadius.circular(18),
                    ),
                    iconTheme: WidgetStateProperty.resolveWith((states) {
                      final isSelected = states.contains(WidgetState.selected);
                      return IconThemeData(
                        color: isSelected ? _goldSoft : Colors.white70,
                        size: isSelected ? 29 : 27,
                      );
                    }),
                    labelTextStyle: WidgetStateProperty.resolveWith((states) {
                      final isSelected = states.contains(WidgetState.selected);
                      return TextStyle(
                        fontSize: isSelected ? 14 : 12.5,
                        fontWeight: FontWeight.w700,
                        color: isSelected ? _goldSoft : Colors.white70,
                      );
                    }),
                  ),
                  progressIndicatorTheme: const ProgressIndicatorThemeData(
                    color: _goldPrimary,
                  ),
                  textTheme: const TextTheme(
                    bodyLarge: TextStyle(color: Colors.white),
                    bodyMedium: TextStyle(color: Colors.white70),
                  ),
                ),
                home: const AuthWrapper(),
              );
            },
      ),
    );
  }
}

/// Widget ដើម្បីពិនិត្យមើល Authentication
class AuthWrapper extends StatefulWidget {
  const AuthWrapper({super.key});

  @override
  State<AuthWrapper> createState() => _AuthWrapperState();
}

class _AuthWrapperState extends State<AuthWrapper> {
  @override
  void initState() {
    super.initState();
    WidgetsBinding.instance.addPostFrameCallback((_) {
      if (mounted) {
        _initAuth();
      }
    });
  }

  Future<void> _initAuth() async {
    try {
      final authProvider = context.read<AuthProvider>();
      await authProvider.init();
    } catch (e) {
      debugPrint('🔐 Auth init error: $e');
    }
  }

  @override
  Widget build(BuildContext context) {
    return Consumer<AuthProvider>(
      builder: (context, authProvider, child) {
        // ពេលកំពុង Load (init phase only — not during sign-in)
        if (!authProvider.isInitialized) {
          return const Splashscreen();
        }

        // បើមាន Authentication
        if (authProvider.isAuthenticated) {
          return const MainNavigationScreen();
        }

        // បើគ្មាន Authentication
        return const SignInScreen();
      },
    );
  }
}

/// Splash Screen
class Splashscreen extends StatelessWidget {
  const Splashscreen({super.key});

  @override
  Widget build(BuildContext context) {
    final brandingProvider = context.watch<AppBrandingProvider>();

    return Scaffold(
      body: Center(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            brandingProvider.logoUrl != null
                ? ClipRRect(
                    borderRadius: BorderRadius.circular(20),
                    child: CachedImage(
                      url: brandingProvider.logoUrl!,
                      width: 100,
                      height: 100,
                      fit: BoxFit.contain,
                      errorWidget: const Icon(
                        Icons.store,
                        size: 100,
                        color: _goldDeep,
                      ),
                    ),
                  )
                : const Icon(Icons.store, size: 100, color: _goldDeep),
            const SizedBox(height: 24),
            Text(
              brandingProvider.appTitle,
              style: const TextStyle(
                fontSize: 32,
                fontWeight: FontWeight.bold,
                color: _goldDeep,
              ),
            ),
            const SizedBox(height: 16),
            const CircularProgressIndicator(),
          ],
        ),
      ),
    );
  }
}
