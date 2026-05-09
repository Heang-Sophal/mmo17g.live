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
import 'package:seller_app/providers/profile_provider.dart';
import 'dart:ui';

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
  final GlobalKey _ordersKey = GlobalKey();
  final GlobalKey _alertsKey = GlobalKey();

  int _selectedIndex = 0;
  int _ordersIndex = -1;
  int _alertsIndex = -1;
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
    WidgetsBinding.instance.addPostFrameCallback((_) {
      if (mounted) {
        _loadProfileForNavigation();
      }
    });
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

  Future<void> _loadProfileForNavigation() async {
    final authProvider = context.read<AuthProvider>();
    final profileProvider = context.read<ProfileProvider>();
    final token = authProvider.token;

    if (token == null || token.isEmpty || profileProvider.profile != null) {
      return;
    }

    profileProvider.setToken(token);
    await profileProvider.fetchProfile();
  }

  bool _hasPermission(ProfileModel? profile, String permission) {
    if (profile == null) return true;
    if (profile.mobilePermissions.isNotEmpty) {
      final shortPermission = permission.replaceFirst('mobile_seller_', '');
      if (profile.mobilePermissions.containsKey(permission)) {
        return profile.mobilePermissions[permission] == true;
      }
      if (profile.mobilePermissions.containsKey(shortPermission)) {
        return profile.mobilePermissions[shortPermission] == true;
      }
    }
    return true;
  }

  void _handleDestinationSelected(
    int navIndex,
    List<Map<String, dynamic>> menuConfig,
  ) {
    if (menuConfig[navIndex]['isMore'] == true) {
      return;
    }

    _selectScreen(menuConfig[navIndex]['screenIndex'] as int);
  }

  void _selectScreen(int screenIndex) {
    setState(() {
      _selectedIndex = screenIndex;
    });

    WidgetsBinding.instance.addPostFrameCallback((_) {
      if (!mounted) return;

      if (screenIndex == _ordersIndex) {
        (_ordersKey.currentState as dynamic)?.refreshData();
      } else if (screenIndex == _alertsIndex) {
        (_alertsKey.currentState as dynamic)?.refreshData();
      }
    });
  }

  Future<void> _showMoreMenu(
    LanguageProvider languageProvider,
    List<Map<String, dynamic>> moreItems,
  ) async {
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
                  languageProvider.t('menu'),
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
                ...moreItems.map(
                  (item) => Padding(
                    padding: const EdgeInsets.only(bottom: 12),
                    child: _buildMoreMenuTile(
                      icon: item['icon'],
                      avatarUrl: item['avatarUrl'],
                      title: item['title'],
                      isSelected: _selectedIndex == item['screenIndex'],
                      isDark: isDark,
                      onTap: () => Navigator.pop(context, item['screenIndex']),
                    ),
                  ),
                ),
              ],
            ),
          ),
        );
      },
    );

    if (selectedIndex == null || !mounted) return;

    _selectScreen(selectedIndex);
  }

  Widget _buildMoreMenuTile({
    IconData? icon,
    String? avatarUrl,
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
                child: avatarUrl != null && avatarUrl.isNotEmpty
                    ? CircleAvatar(
                        backgroundImage: NetworkImage(avatarUrl),
                        backgroundColor: Colors.transparent,
                      )
                    : Icon(
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

  Widget _buildDashboardMenuButton(
    LanguageProvider languageProvider,
    List<Map<String, dynamic>> moreItems,
  ) {
    final isDark = Theme.of(context).brightness == Brightness.dark;
    final foregroundColor = isDark ? _goldSoft : _warmInk;

    return TextButton.icon(
      onPressed: () => _showMoreMenu(languageProvider, moreItems),
      icon: Icon(Icons.menu_rounded, color: foregroundColor, size: 22),
      label: Text(
        languageProvider.t('menu'),
        maxLines: 1,
        overflow: TextOverflow.ellipsis,
        style: TextStyle(
          color: foregroundColor,
          fontSize: 12,
          fontWeight: FontWeight.w800,
        ),
      ),
      style: TextButton.styleFrom(
        padding: const EdgeInsets.only(left: 12, right: 8),
        minimumSize: Size.zero,
        tapTargetSize: MaterialTapTargetSize.shrinkWrap,
      ),
    );
  }

  @override
  Widget build(BuildContext context) {
    final languageProvider = context.watch<LanguageProvider>();
    final authProvider = context.watch<AuthProvider>();
    final profileProvider = context.watch<ProfileProvider>();
    final profile = profileProvider.profile;

    final avatarUrl = profile?.avatarUrl ?? authProvider.user?.avatarUrl;

    Widget profileIconRegular = avatarUrl != null && avatarUrl.isNotEmpty
        ? CircleAvatar(
            radius: 13,
            backgroundImage: NetworkImage(avatarUrl),
            backgroundColor: Colors.transparent,
          )
        : const Icon(Icons.person_outline);

    Widget profileIconSelected = avatarUrl != null && avatarUrl.isNotEmpty
        ? Container(
            padding: const EdgeInsets.all(2),
            decoration: BoxDecoration(
              shape: BoxShape.circle,
              border: Border.all(color: _goldPrimary, width: 2),
            ),
            child: CircleAvatar(
              radius: 12,
              backgroundImage: NetworkImage(avatarUrl),
              backgroundColor: Colors.transparent,
            ),
          )
        : const Icon(Icons.person);

    final canViewPos = _hasPermission(profile, 'mobile_seller_pos');
    final canViewOrders = _hasPermission(profile, 'mobile_seller_orders');
    final canViewProducts = _hasPermission(profile, 'mobile_seller_products');
    final canViewSaleReturns = _hasPermission(
      profile,
      'mobile_seller_sale_returns',
    );
    final canViewProfile = _hasPermission(profile, 'mobile_seller_profile');

    // Build screens map dynamically
    final screensList = <Widget>[
      const HomeScreen(), // 0
    ];
    int posIndex = -1,
        productsIndex = -1,
        salesReturnIndex = -1,
        profileIndex = -1;
    _ordersIndex = -1;
    _alertsIndex = -1;

    if (authProvider.isDeliveryUser) {
      screensList.add(OrdersScreen(key: _ordersKey));
      _ordersIndex = screensList.length - 1;

      screensList.add(DeliveryAlertsScreen(key: _alertsKey));
      _alertsIndex = screensList.length - 1;

      screensList.add(const ProfileScreen());
      profileIndex = screensList.length - 1;
    } else {
      if (canViewPos) {
        screensList.add(const POSScreen());
        posIndex = screensList.length - 1;
      }
      if (canViewOrders) {
        screensList.add(OrdersScreen(key: _ordersKey));
        _ordersIndex = screensList.length - 1;
      }

      screensList.add(DeliveryAlertsScreen(key: _alertsKey));
      _alertsIndex = screensList.length - 1;

      if (canViewProducts) {
        screensList.add(const ProductsScreen());
        productsIndex = screensList.length - 1;
      }
      if (canViewSaleReturns) {
        screensList.add(const SalesReturnScreen());
        salesReturnIndex = screensList.length - 1;
      }
      if (canViewProfile) {
        screensList.add(const ProfileScreen());
        profileIndex = screensList.length - 1;
      }
    }

    final menuConfig = <Map<String, dynamic>>[];
    final destinations = <NavigationDestination>[];
    final moreItems = <Map<String, dynamic>>[];

    // Home
    menuConfig.add({'isMore': false, 'screenIndex': 0});
    destinations.add(
      NavigationDestination(
        icon: const Icon(Icons.dashboard_outlined),
        selectedIcon: const Icon(Icons.dashboard),
        label: languageProvider.t('nav_home'),
      ),
    );

    if (authProvider.isDeliveryUser) {
      menuConfig.add({'isMore': false, 'screenIndex': _ordersIndex});
      destinations.add(
        NavigationDestination(
          icon: const Icon(Icons.shopping_bag_outlined),
          selectedIcon: const Icon(Icons.shopping_bag),
          label: languageProvider.t('nav_orders'),
        ),
      );
      menuConfig.add({'isMore': false, 'screenIndex': _alertsIndex});
      destinations.add(
        NavigationDestination(
          icon: const Icon(Icons.notifications_outlined),
          selectedIcon: const Icon(Icons.notifications),
          label: languageProvider.t('nav_alerts'),
        ),
      );
      menuConfig.add({'isMore': false, 'screenIndex': profileIndex});
      destinations.add(
        NavigationDestination(
          icon: profileIconRegular,
          selectedIcon: profileIconSelected,
          label: languageProvider.t('settings'),
        ),
      );
    } else {
      if (posIndex != -1) {
        menuConfig.add({'isMore': false, 'screenIndex': posIndex});
        destinations.add(
          NavigationDestination(
            icon: const Icon(Icons.point_of_sale_outlined),
            selectedIcon: const Icon(Icons.point_of_sale),
            label: languageProvider.t('pos'),
          ),
        );
      }
      if (_ordersIndex != -1) {
        menuConfig.add({'isMore': false, 'screenIndex': _ordersIndex});
        destinations.add(
          NavigationDestination(
            icon: const Icon(Icons.shopping_bag_outlined),
            selectedIcon: const Icon(Icons.shopping_bag),
            label: languageProvider.t('nav_orders'),
          ),
        );
      }

      menuConfig.add({'isMore': false, 'screenIndex': _alertsIndex});
      destinations.add(
        NavigationDestination(
          icon: const Icon(Icons.notifications_outlined),
          selectedIcon: const Icon(Icons.notifications),
          label: languageProvider.t('nav_alerts'),
        ),
      );

      if (productsIndex != -1) {
        moreItems.add({
          'icon': Icons.inventory_2_outlined,
          'title': languageProvider.t('nav_products'),
          'screenIndex': productsIndex,
        });
      }
      if (salesReturnIndex != -1) {
        moreItems.add({
          'icon': Icons.assignment_return_outlined,
          'title': languageProvider.t('sales_returns'),
          'screenIndex': salesReturnIndex,
        });
      }
      if (profileIndex != -1) {
        destinations.add(
          NavigationDestination(
            icon: profileIconRegular,
            selectedIcon: profileIconSelected,
            label: languageProvider.t('settings'),
          ),
        );
        menuConfig.add({'isMore': false, 'screenIndex': profileIndex});
      }
    }

    screensList[0] = HomeScreen(
      menuButton: moreItems.isEmpty
          ? null
          : _buildDashboardMenuButton(languageProvider, moreItems),
    );

    if (_selectedIndex >= screensList.length) {
      _selectedIndex = 0;
    }

    int selectedNavIndex = menuConfig.indexWhere(
      (c) => c['isMore'] == false && c['screenIndex'] == _selectedIndex,
    );
    if (selectedNavIndex == -1) {
      selectedNavIndex = menuConfig.indexWhere((c) => c['isMore'] == true);
      if (selectedNavIndex == -1) selectedNavIndex = 0;
    }

    return Consumer<NavigationBarController>(
      builder: (context, navController, child) {
        return Scaffold(
          extendBody:
              true, // Allows content to scroll under the transparent navbar
          body: AnimatedSwitcher(
            duration: const Duration(milliseconds: 250),
            transitionBuilder: (Widget child, Animation<double> animation) {
              return FadeTransition(
                opacity: animation,
                child: ScaleTransition(
                  scale: Tween<double>(
                    begin: 0.95, // ងើបធំឡើងបន្តិចពី 95%
                    end: 1.0,
                  ).animate(animation),
                  child: child,
                ),
              );
            },
            child: KeyedSubtree(
              key: ValueKey<int>(_selectedIndex),
              child: screensList[_selectedIndex],
            ),
          ),
          bottomNavigationBar: SizeTransition(
            sizeFactor: _navAnimation,
            axisAlignment: -1.0,
            child: SafeArea(
              top: false,
              child: Padding(
                padding: const EdgeInsets.fromLTRB(14, 0, 14, 0),
                child: Container(
                  decoration: BoxDecoration(
                    borderRadius: BorderRadius.circular(28),
                    border: Border.all(
                      color: Theme.of(context).brightness == Brightness.dark
                          ? Colors.white.withValues(alpha: 0.08)
                          : _goldSoft.withValues(alpha: 0.72),
                    ),
                    boxShadow: [
                      BoxShadow(
                        color: Theme.of(context).brightness == Brightness.dark
                            ? Colors.black.withValues(alpha: 0.26)
                            : _goldDeep.withValues(alpha: 0.16),
                        blurRadius: 28,
                        offset: const Offset(0, 16),
                      ),
                    ],
                  ),
                  child: ClipRRect(
                    borderRadius: BorderRadius.circular(28),
                    child: BackdropFilter(
                      filter: ImageFilter.blur(sigmaX: 25.0, sigmaY: 25.0),
                      child: Container(
                        color: Theme.of(context).brightness == Brightness.dark
                            ? _darkSurface.withValues(
                                alpha: 0.5,
                              ) // Lighter alpha for clearer blur
                            : _warmSurface.withValues(alpha: 0.5),
                        child: NavigationBar(
                          backgroundColor: Colors.transparent,
                          elevation: 0,
                          indicatorColor: Colors.transparent,
                          labelBehavior:
                              NavigationDestinationLabelBehavior.alwaysShow,
                          selectedIndex: selectedNavIndex,
                          onDestinationSelected: (index) =>
                              _handleDestinationSelected(index, menuConfig),
                          destinations: destinations,
                        ),
                      ),
                    ),
                  ),
                ),
              ),
            ),
          ),
        );
      },
    );
  }
}
