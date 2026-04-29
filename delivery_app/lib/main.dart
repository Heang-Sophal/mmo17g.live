import 'package:delivery_app/providers/auth_provider.dart';
import 'package:delivery_app/providers/app_branding_provider.dart';
import 'package:delivery_app/providers/language_provider.dart';
import 'package:delivery_app/providers/profile_provider.dart';
import 'package:delivery_app/screens/main_navigation_screen.dart';
import 'package:delivery_app/screens/sign_in_screen.dart';
import 'package:delivery_app/services/notification_service.dart';
import 'package:flutter/material.dart';
import 'package:flutter_localizations/flutter_localizations.dart';
import 'package:google_fonts/google_fonts.dart';
import 'package:provider/provider.dart';

final GlobalKey<NavigatorState> navigatorKey = GlobalKey<NavigatorState>();

Future<void> main() async {
  WidgetsFlutterBinding.ensureInitialized();
  await NotificationService.initialize();
  runApp(const DeliveryApp());
}

class DeliveryApp extends StatelessWidget {
  const DeliveryApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MultiProvider(
      providers: [
        ChangeNotifierProvider(create: (_) => AuthProvider()),
        ChangeNotifierProvider(create: (_) => ProfileProvider()),
        ChangeNotifierProvider(create: (_) => LanguageProvider()),
        ChangeNotifierProvider(
          create: (_) => AppBrandingProvider()..loadBranding(),
        ),
      ],
      child: Consumer2<LanguageProvider, AppBrandingProvider>(
        builder: (context, languageProvider, brandingProvider, child) {
          final colorScheme = ColorScheme.fromSeed(
            seedColor: const Color(0xFFD6A735),
          ).copyWith(secondary: const Color(0xFFFFD86A));

          return MaterialApp(
            navigatorKey: navigatorKey,
            title: brandingProvider.appTitle,
            debugShowCheckedModeBanner: false,
            locale: languageProvider.locale,
            supportedLocales: const [Locale('km'), Locale('en')],
            localizationsDelegates: const [
              GlobalMaterialLocalizations.delegate,
              GlobalWidgetsLocalizations.delegate,
              GlobalCupertinoLocalizations.delegate,
            ],
            theme: ThemeData(
              useMaterial3: true,
              colorScheme: colorScheme,
              fontFamily: GoogleFonts.kantumruyPro().fontFamily,
              scaffoldBackgroundColor: const Color(0xFFFFFEFA),
              appBarTheme: const AppBarTheme(
                centerTitle: false,
                backgroundColor: Color(0xFFFFFEFA),
                foregroundColor: Color(0xFF201607),
                elevation: 0,
              ),
              cardTheme: CardThemeData(
                color: Colors.white,
                elevation: 0,
                shape: RoundedRectangleBorder(
                  borderRadius: BorderRadius.circular(20),
                ),
              ),
              inputDecorationTheme: InputDecorationTheme(
                filled: true,
                fillColor: Colors.white,
                border: OutlineInputBorder(
                  borderRadius: BorderRadius.circular(18),
                  borderSide: BorderSide.none,
                ),
                enabledBorder: OutlineInputBorder(
                  borderRadius: BorderRadius.circular(18),
                  borderSide: BorderSide.none,
                ),
                focusedBorder: OutlineInputBorder(
                  borderRadius: BorderRadius.circular(18),
                  borderSide: const BorderSide(
                    color: Color(0xFFD6A735),
                    width: 1.5,
                  ),
                ),
                contentPadding: const EdgeInsets.symmetric(
                  horizontal: 16,
                  vertical: 16,
                ),
              ),
              navigationBarTheme: NavigationBarThemeData(
                backgroundColor: Colors.white,
                indicatorColor: const Color(0xFFD6A735).withValues(alpha: 0.12),
                labelTextStyle: WidgetStateProperty.all(
                  const TextStyle(fontWeight: FontWeight.w600),
                ),
              ),
            ),
            home: const AuthGate(),
          );
        },
      ),
    );
  }
}

class AuthGate extends StatefulWidget {
  const AuthGate({super.key});

  @override
  State<AuthGate> createState() => _AuthGateState();
}

class _AuthGateState extends State<AuthGate> {
  @override
  void initState() {
    super.initState();
    WidgetsBinding.instance.addPostFrameCallback((_) async {
      await context.read<AuthProvider>().init();
    });
  }

  @override
  Widget build(BuildContext context) {
    return Consumer<AuthProvider>(
      builder: (context, authProvider, child) {
        if (!authProvider.isInitialized || authProvider.isLoading) {
          return const SplashScreen();
        }

        if (authProvider.isAuthenticated) {
          return const MainNavigationScreen();
        }

        return const SignInScreen();
      },
    );
  }
}

class SplashScreen extends StatelessWidget {
  const SplashScreen({super.key});

  @override
  Widget build(BuildContext context) {
    final brandingProvider = context.watch<AppBrandingProvider>();
    final textTheme = Theme.of(context).textTheme;

    return Scaffold(
      body: DecoratedBox(
        decoration: const BoxDecoration(
          gradient: LinearGradient(
            begin: Alignment.topCenter,
            end: Alignment.bottomCenter,
            colors: [Color(0xFFFFFBF2), Color(0xFFFFFEFA)],
          ),
        ),
        child: Center(
          child: Column(
            mainAxisSize: MainAxisSize.min,
            children: [
              brandingProvider.logoUrl != null
                  ? ClipRRect(
                      borderRadius: BorderRadius.circular(28),
                      child: Image.network(
                        brandingProvider.logoUrl!,
                        width: 96,
                        height: 96,
                        fit: BoxFit.contain,
                        errorBuilder: (context, error, stackTrace) {
                          return Container(
                            width: 96,
                            height: 96,
                            decoration: BoxDecoration(
                              color: const Color(0xFFD6A735),
                              borderRadius: BorderRadius.circular(28),
                            ),
                            child: const Icon(
                              Icons.local_shipping_rounded,
                              color: Colors.white,
                              size: 48,
                            ),
                          );
                        },
                      ),
                    )
                  : Container(
                      width: 96,
                      height: 96,
                      decoration: BoxDecoration(
                        color: const Color(0xFFD6A735),
                        borderRadius: BorderRadius.circular(28),
                      ),
                      child: const Icon(
                        Icons.local_shipping_rounded,
                        color: Colors.white,
                        size: 48,
                      ),
                    ),
              const SizedBox(height: 20),
              Text(
                brandingProvider.appTitle,
                style: textTheme.headlineSmall?.copyWith(
                  fontWeight: FontWeight.w700,
                  color: const Color(0xFF201607),
                ),
              ),
              const SizedBox(height: 12),
              const CircularProgressIndicator(),
            ],
          ),
        ),
      ),
    );
  }
}
