import 'package:flutter/material.dart';
import 'package:provider/provider.dart';
import 'package:seller_app/providers/auth_provider.dart';
import 'package:seller_app/screens/home_screen.dart';
import 'package:seller_app/screens/products_screen.dart';
import 'package:seller_app/screens/orders_screen.dart';
import 'package:seller_app/screens/pos_screen.dart';
import 'package:seller_app/screens/profile_screen.dart';
import 'package:seller_app/screens/sales_return_screen.dart';
import 'package:seller_app/screens/delivery_alerts_screen.dart';
import 'package:seller_app/controllers/navigation_bar_controller.dart';
import 'package:seller_app/providers/language_provider.dart';

const Color _goldPrimary = Color(0xFFD6A735);
const Color _goldSoft = Color(0xFFFFE8A7);
const Color _goldDeep = Color(0xFF8D6208);
const Color _warmInk = Color(0xFF201607);
const Color _warmMuted = Color(0xFF735F33);
const Color _warmSurface = Color(0xFFFFFEFA);
const Color _darkSurface = Color(0xFF21190B);

class MainNavigationScreen extends StatefulWidget {
  const MainNavigationScreen({super.key});

  @override
  State<MainNavigationScreen> createState() => _MainNavigationScreenState();
}

class _MainNavigationScreenState extends State<MainNavigationScreen>
    with TickerProviderStateMixin {
  static const int _sellerProductsIndex = 4;
  static const int _sellerSalesReturnIndex = 5;
  static const int _sellerProfileIndex = 6;

  int _selectedIndex = 0;
  late final NavigationBarController _navController;
  late AnimationController _navAnimationController;
  late Animation<double> _navAnimation;

  @override
  void initState() {
    super.initState();
    _navController = context.read<NavigationBarController>();
    _navAnimationController = AnimationController(
      duration: const Duration(milliseconds: 200),
      vsync: this,
    );
    _navAnimation = CurvedAnimation(
      parent: _navAnimationController,
      curve: Curves.easeInOut,
    );
    _navController.addListener(_onNavVisibilityChanged);
    _navAnimationController.forward(); // Show initially
  }

  @override
  void dispose() {
    _navController.removeListener(_onNavVisibilityChanged);
    _navAnimationController.dispose();
    super.dispose();
  }

  void _onNavVisibilityChanged() {
    if (_navController.isVisible) {
      _navAnimationController.forward();
    } else {
      _navAnimationController.reverse();
    }
  }

  int _navigationSelectedIndex(AuthProvider authProvider, int contentIndex) {
    if (authProvider.isDeliveryUser) {
      return contentIndex.clamp(0, 3);
    }

    if (contentIndex >= _sellerProductsIndex) {
      return 4;
    }

    return contentIndex.clamp(0, 4);
  }

  void _handleDestinationSelected(
    int index,
    AuthProvider authProvider,
    LanguageProvider languageProvider,
  ) {
    if (!authProvider.isDeliveryUser && index == 4) {
      _showMoreMenu(languageProvider);
      return;
    }

    setState(() {
      _selectedIndex = index;
    });
  }

  Future<void> _showMoreMenu(LanguageProvider languageProvider) async {
    final theme = Theme.of(context);
    final isDark = theme.brightness == Brightness.dark;

    final selectedIndex = await showModalBottomSheet<int>(
      context: context,
      backgroundColor: Colors.transparent,
      builder: (context) {
        return SafeArea(
          top: false,
          child: Container(
            padding: const EdgeInsets.fromLTRB(20, 12, 20, 24),
            decoration: BoxDecoration(
              color: isDark ? _darkSurface : _warmSurface,
              borderRadius: const BorderRadius.vertical(
                top: Radius.circular(32),
              ),
              boxShadow: [
                BoxShadow(
                  color: Colors.black.withValues(alpha: isDark ? 0.28 : 0.12),
                  blurRadius: 28,
                  offset: const Offset(0, -10),
                ),
              ],
            ),
            child: Column(
              mainAxisSize: MainAxisSize.min,
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                Center(
                  child: Container(
                    width: 56,
                    height: 5,
                    decoration: BoxDecoration(
                      color: isDark
                          ? Colors.white.withValues(alpha: 0.22)
                          : _goldSoft.withValues(alpha: 0.78),
                      borderRadius: BorderRadius.circular(999),
                    ),
                  ),
                ),
                const SizedBox(height: 18),
                Text(
                  languageProvider.t('quick_actions'),
                  style: TextStyle(
                    fontSize: 18,
                    fontWeight: FontWeight.w800,
                    color: isDark ? _goldSoft : _warmInk,
                  ),
                ),
                const SizedBox(height: 6),
                Text(
                  languageProvider.t('more_menu_hint'),
                  style: TextStyle(
                    fontSize: 13,
                    color: isDark
                        ? Colors.white.withValues(alpha: 0.65)
                        : _warmMuted,
                  ),
                ),
                const SizedBox(height: 18),
                Container(
                  height: 1,
                  color: isDark
                      ? Colors.white.withValues(alpha: 0.08)
                      : _goldSoft.withValues(alpha: 0.70),
                ),
                const SizedBox(height: 14),
                _buildMoreMenuTile(
                  icon: Icons.inventory_2_outlined,
                  title: languageProvider.t('nav_products'),
                  isSelected: _selectedIndex == _sellerProductsIndex,
                  isDark: isDark,
                  onTap: () => Navigator.pop(context, _sellerProductsIndex),
                ),
                const SizedBox(height: 12),
                _buildMoreMenuTile(
                  icon: Icons.assignment_return_outlined,
                  title: languageProvider.t('sales_returns'),
                  isSelected: _selectedIndex == _sellerSalesReturnIndex,
                  isDark: isDark,
                  onTap: () => Navigator.pop(context, _sellerSalesReturnIndex),
                ),
                const SizedBox(height: 12),
                _buildMoreMenuTile(
                  icon: Icons.person_outline,
                  title: languageProvider.t('nav_profile'),
                  isSelected: _selectedIndex == _sellerProfileIndex,
                  isDark: isDark,
                  onTap: () => Navigator.pop(context, _sellerProfileIndex),
                ),
              ],
            ),
          ),
        );
      },
    );

    if (selectedIndex == null || !mounted) {
      return;
    }

    setState(() {
      _selectedIndex = selectedIndex;
    });
  }

  Widget _buildMoreMenuTile({
    required IconData icon,
    required String title,
    required bool isSelected,
    required bool isDark,
    required VoidCallback onTap,
  }) {
    const primaryColor = _goldPrimary;

    return Material(
      color: Colors.transparent,
      child: InkWell(
        borderRadius: BorderRadius.circular(22),
        onTap: onTap,
        child: Ink(
          padding: const EdgeInsets.symmetric(horizontal: 16, vertical: 16),
          decoration: BoxDecoration(
            color: isSelected
                ? primaryColor.withValues(alpha: isDark ? 0.22 : 0.10)
                : isDark
                ? Colors.white.withValues(alpha: 0.03)
                : const Color(0xFFFFFAEF),
            borderRadius: BorderRadius.circular(22),
            border: Border.all(
              color: isSelected
                  ? primaryColor.withValues(alpha: 0.45)
                  : isDark
                  ? Colors.white.withValues(alpha: 0.08)
                  : _goldSoft.withValues(alpha: 0.82),
            ),
          ),
          child: Row(
            children: [
              Container(
                width: 44,
                height: 44,
                decoration: BoxDecoration(
                  color: isSelected
                      ? primaryColor.withValues(alpha: 0.14)
                      : isDark
                      ? Colors.white.withValues(alpha: 0.06)
                      : Colors.white,
                  borderRadius: BorderRadius.circular(14),
                ),
                child: Icon(
                  icon,
                  color: isSelected
                      ? primaryColor
                      : isDark
                      ? Colors.white
                      : _warmMuted,
                ),
              ),
              const SizedBox(width: 14),
              Expanded(
                child: Text(
                  title,
                  style: TextStyle(
                    fontSize: 16,
                    fontWeight: FontWeight.w700,
                    color: isDark ? _goldSoft : _warmInk,
                  ),
                ),
              ),
              AnimatedContainer(
                duration: const Duration(milliseconds: 180),
                width: 28,
                height: 28,
                decoration: BoxDecoration(
                  color: isSelected ? primaryColor : Colors.transparent,
                  shape: BoxShape.circle,
                  border: Border.all(
                    color: isSelected
                        ? primaryColor
                        : isDark
                        ? Colors.white.withValues(alpha: 0.15)
                        : _goldSoft.withValues(alpha: 0.82),
                  ),
                ),
                child: Icon(
                  isSelected
                      ? Icons.check_rounded
                      : Icons.arrow_forward_ios_rounded,
                  size: isSelected ? 16 : 14,
                  color: isSelected
                      ? _warmInk
                      : isDark
                      ? Colors.white.withValues(alpha: 0.75)
                      : _warmMuted.withValues(alpha: 0.72),
                ),
              ),
            ],
          ),
        ),
      ),
    );
  }

  @override
  Widget build(BuildContext context) {
    final languageProvider = context.watch<LanguageProvider>();
    final authProvider = context.watch<AuthProvider>();
    final screens = _buildScreens(authProvider);
    final destinations = _buildDestinations(authProvider, languageProvider);
    final contentIndex = _selectedIndex >= screens.length
        ? screens.length - 1
        : _selectedIndex;
    final selectedNavIndex = _navigationSelectedIndex(
      authProvider,
      contentIndex,
    );

    return Consumer<NavigationBarController>(
      builder: (context, navController, child) {
        return Scaffold(
          body: screens[contentIndex],
          bottomNavigationBar: SizeTransition(
            sizeFactor: _navAnimation,
            axisAlignment: -1.0,
            child: _buildNavigationShell(
              authProvider: authProvider,
              languageProvider: languageProvider,
              destinations: destinations,
              selectedNavIndex: selectedNavIndex,
            ),
          ),
        );
      },
    );
  }

  Widget _buildNavigationShell({
    required AuthProvider authProvider,
    required LanguageProvider languageProvider,
    required List<NavigationDestination> destinations,
    required int selectedNavIndex,
  }) {
    final theme = Theme.of(context);
    final isDark = theme.brightness == Brightness.dark;

    return SafeArea(
      top: false,
      child: Padding(
        padding: const EdgeInsets.fromLTRB(14, 0, 14, 0),
        child: Container(
          decoration: BoxDecoration(
            color: isDark
                ? _darkSurface.withValues(alpha: 0.98)
                : _warmSurface.withValues(alpha: 0.96),
            borderRadius: BorderRadius.circular(28),
            border: Border.all(
              color: isDark
                  ? Colors.white.withValues(alpha: 0.08)
                  : _goldSoft.withValues(alpha: 0.72),
            ),
            boxShadow: [
              BoxShadow(
                color: isDark
                    ? Colors.black.withValues(alpha: 0.26)
                    : _goldDeep.withValues(alpha: 0.16),
                blurRadius: 28,
                offset: const Offset(0, 16),
              ),
            ],
          ),
          child: ClipRRect(
            borderRadius: BorderRadius.circular(28),
            child: NavigationBar(
              labelBehavior: NavigationDestinationLabelBehavior.alwaysShow,
              selectedIndex: selectedNavIndex,
              onDestinationSelected: (index) => _handleDestinationSelected(
                index,
                authProvider,
                languageProvider,
              ),
              destinations: destinations,
            ),
          ),
        ),
      ),
    );
  }

  List<Widget> _buildScreens(AuthProvider authProvider) {
    if (authProvider.isDeliveryUser) {
      return const [
        HomeScreen(),
        OrdersScreen(),
        DeliveryAlertsScreen(),
        ProfileScreen(),
      ];
    }

    return const [
      HomeScreen(),
      POSScreen(),
      OrdersScreen(),
      DeliveryAlertsScreen(),
      ProductsScreen(),
      SalesReturnScreen(),
      ProfileScreen(),
    ];
  }

  List<NavigationDestination> _buildDestinations(
    AuthProvider authProvider,
    LanguageProvider languageProvider,
  ) {
    if (authProvider.isDeliveryUser) {
      return [
        NavigationDestination(
          icon: const Icon(Icons.dashboard_outlined),
          selectedIcon: const Icon(Icons.dashboard),
          label: languageProvider.t('nav_home'),
        ),
        NavigationDestination(
          icon: const Icon(Icons.shopping_bag_outlined),
          selectedIcon: const Icon(Icons.shopping_bag),
          label: languageProvider.t('nav_orders'),
        ),
        NavigationDestination(
          icon: const Icon(Icons.notifications_outlined),
          selectedIcon: const Icon(Icons.notifications),
          label: languageProvider.t('nav_alerts'),
        ),
        NavigationDestination(
          icon: const Icon(Icons.person_outline),
          selectedIcon: const Icon(Icons.person),
          label: languageProvider.t('profile'),
        ),
      ];
    }

    return [
      NavigationDestination(
        icon: const Icon(Icons.dashboard_outlined),
        selectedIcon: const Icon(Icons.dashboard),
        label: languageProvider.t('nav_home'),
      ),
      NavigationDestination(
        icon: const Icon(Icons.point_of_sale_outlined),
        selectedIcon: const Icon(Icons.point_of_sale),
        label: languageProvider.t('pos'),
      ),
      NavigationDestination(
        icon: const Icon(Icons.shopping_bag_outlined),
        selectedIcon: const Icon(Icons.shopping_bag),
        label: languageProvider.t('nav_orders'),
      ),
      NavigationDestination(
        icon: const Icon(Icons.notifications_outlined),
        selectedIcon: const Icon(Icons.notifications),
        label: languageProvider.t('nav_alerts'),
      ),
      NavigationDestination(
        icon: const Icon(Icons.menu_open_outlined),
        selectedIcon: const Icon(Icons.menu_open),
        label: languageProvider.t('nav_more'),
      ),
    ];
  }
}
