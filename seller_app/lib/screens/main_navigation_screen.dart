import 'dart:convert';
import 'dart:ui';

import 'package:flutter/material.dart';
import 'package:http/http.dart' as http;
import 'package:provider/provider.dart';
import 'package:seller_app/config/api_config.dart';
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
  final GlobalKey<ScaffoldState> _scaffoldKey = GlobalKey<ScaffoldState>();

  int _selectedIndex = 0;
  int _ordersIndex = -1;
  int _alertsIndex = -1;
  int _unreadAlertCount = 0;
  String? _lastUnreadCountToken;
  bool _isRefreshingUnreadCount = false;
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

    if (menuConfig[navIndex]['isPos'] == true) {
      Navigator.push(
        context,
        PageRouteBuilder(
          pageBuilder: (context, animation, secondaryAnimation) => const POSScreen(),
          transitionsBuilder: (context, animation, secondaryAnimation, child) {
            const begin = Offset(0.0, 1.0); // ចាប់ផ្តើមពីខាងក្រោម
            const end = Offset.zero;        // បញ្ចប់នៅចំកណ្តាលអេក្រង់
            const curve = Curves.easeInOut; // ទម្រង់នៃចលនា

            var tween = Tween(begin: begin, end: end).chain(CurveTween(curve: curve));
            var offsetAnimation = animation.drive(tween);

            return SlideTransition(
              position: offsetAnimation,
              child: child,
            );
          },
        ),
      );
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
        final token = context.read<AuthProvider>().token;
        if (token != null && token.isNotEmpty) {
          _refreshUnreadAlertCount(token);
        }
      }
    });
  }

  void _updateUnreadAlertCount(int count) {
    if (!mounted) return;
    if (_unreadAlertCount == count) return;

    setState(() {
      _unreadAlertCount = count;
    });
  }

  void _maybeRefreshUnreadAlertCount(String? token) {
    if (_lastUnreadCountToken == token) return;

    _lastUnreadCountToken = token;
    if (token == null || token.isEmpty) {
      if (_unreadAlertCount != 0) {
        WidgetsBinding.instance.addPostFrameCallback((_) {
          if (!mounted) return;
          setState(() {
            _unreadAlertCount = 0;
          });
        });
      }
      return;
    }

    WidgetsBinding.instance.addPostFrameCallback((_) {
      if (mounted) {
        _refreshUnreadAlertCount(token);
      }
    });
  }

  Future<void> _refreshUnreadAlertCount(String token) async {
    if (_isRefreshingUnreadCount) return;

    _isRefreshingUnreadCount = true;
    try {
      final response = await http
          .get(
            Uri.parse('${ApiConfig.baseUrl}/delivery/alerts'),
            headers: {
              'Authorization': 'Bearer $token',
              'Accept': 'application/json',
            },
          )
          .timeout(const Duration(seconds: 10));

      final data = json.decode(response.body);
      if (!mounted) return;

      if (response.statusCode == 200 && data['success'] == true) {
        final alerts = List<Map<String, dynamic>>.from(data['data'] ?? []);
        _updateUnreadAlertCount(
          alerts.where((alert) => !_isAlertRead(alert['is_read'])).length,
        );
      }
    } catch (_) {
      // Keep the last visible count if the background refresh fails.
    } finally {
      _isRefreshingUnreadCount = false;
    }
  }

  bool _isAlertRead(dynamic value) {
    return value == true || value == 1 || value == '1' || value == 'true';
  }

  Widget _buildBadgeIcon(Widget icon, int count) {
    if (count <= 0) return icon;
    final label = count > 99 ? '99+' : count.toString();
    return Stack(
      clipBehavior: Clip.none,
      children: [
        icon,
        Positioned(
          right: -8,
          top: -8,
          child: Container(
            constraints: const BoxConstraints(minWidth: 18, minHeight: 18),
            padding: const EdgeInsets.symmetric(horizontal: 5),
            decoration: BoxDecoration(
              color: const Color(0xFFDC2626),
              borderRadius: BorderRadius.circular(999),
              border: Border.all(color: Colors.white, width: 1.5),
            ),
            alignment: Alignment.center,
            child: Text(
              label,
              style: const TextStyle(
                color: Colors.white,
                fontSize: 10,
                fontWeight: FontWeight.w800,
                height: 1,
              ),
            ),
          ),
        ),
      ],
    );
  }


  void _openDrawer() => _scaffoldKey.currentState?.openDrawer();

  Widget _buildDashboardMenuButton(LanguageProvider languageProvider) {
    final isDark = Theme.of(context).brightness == Brightness.dark;
    final foregroundColor = isDark ? _goldSoft : _warmInk;

    return TextButton.icon(
      onPressed: _openDrawer,
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

  Widget _buildDrawer({
    required LanguageProvider languageProvider,
    required List<Map<String, dynamic>> allItems,
    required String? avatarUrl,
    required String userName,
    required String userRole,
  }) {
    final isDark = Theme.of(context).brightness == Brightness.dark;

    return Drawer(
      width: MediaQuery.of(context).size.width * 0.82,
      backgroundColor: Colors.transparent,
      elevation: 0,
      child: Container(
        decoration: BoxDecoration(
          color: isDark ? _darkSurface : _warmSurface,
          borderRadius: const BorderRadius.only(
            topRight: Radius.circular(36),
            bottomRight: Radius.circular(36),
          ),
          boxShadow: [
            BoxShadow(
              color: Colors.black.withValues(alpha: isDark ? 0.45 : 0.18),
              blurRadius: 40,
              offset: const Offset(8, 0),
            ),
          ],
        ),
        child: SafeArea(
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              // ── Header ──────────────────────────────────────
              Container(
                margin: const EdgeInsets.fromLTRB(0, 0, 0, 0),
                padding: const EdgeInsets.fromLTRB(22, 28, 22, 28),
                decoration: BoxDecoration(
                  gradient: LinearGradient(
                    colors: isDark
                        ? [
                            _goldDeep.withValues(alpha: 0.55),
                            _darkSurface,
                          ]
                        : [
                            _goldPrimary.withValues(alpha: 0.18),
                            _warmSurface,
                          ],
                    begin: Alignment.topLeft,
                    end: Alignment.bottomRight,
                  ),
                  borderRadius: const BorderRadius.only(
                    topRight: Radius.circular(36),
                  ),
                  border: Border(
                    bottom: BorderSide(
                      color: isDark
                          ? _goldPrimary.withValues(alpha: 0.18)
                          : _goldSoft.withValues(alpha: 0.80),
                    ),
                  ),
                ),
                child: Row(
                  children: [
                    Container(
                      decoration: BoxDecoration(
                        shape: BoxShape.circle,
                        border: Border.all(
                          color: _goldPrimary.withValues(alpha: 0.60),
                          width: 2.5,
                        ),
                        boxShadow: [
                          BoxShadow(
                            color: _goldPrimary.withValues(alpha: 0.28),
                            blurRadius: 14,
                          ),
                        ],
                      ),
                      child: CircleAvatar(
                        radius: 28,
                        backgroundColor: isDark
                            ? _goldDeep.withValues(alpha: 0.35)
                            : _goldSoft,
                        backgroundImage: avatarUrl != null && avatarUrl.isNotEmpty
                            ? NetworkImage(avatarUrl)
                            : null,
                        child: avatarUrl == null || avatarUrl.isEmpty
                            ? Icon(
                                Icons.person_rounded,
                                size: 28,
                                color: isDark ? _goldSoft : _goldDeep,
                              )
                            : null,
                      ),
                    ),
                    const SizedBox(width: 14),
                    Expanded(
                      child: Column(
                        crossAxisAlignment: CrossAxisAlignment.start,
                        children: [
                          Text(
                            userName.isNotEmpty ? userName : languageProvider.t('nav_profile'),
                            maxLines: 1,
                            overflow: TextOverflow.ellipsis,
                            style: TextStyle(
                              fontSize: 16,
                              fontWeight: FontWeight.w800,
                              color: isDark ? _goldSoft : _warmInk,
                            ),
                          ),
                          if (userRole.isNotEmpty) ...[
                            const SizedBox(height: 3),
                            Text(
                              userRole,
                              maxLines: 1,
                              overflow: TextOverflow.ellipsis,
                              style: TextStyle(
                                fontSize: 12,
                                fontWeight: FontWeight.w600,
                                color: isDark
                                    ? _goldPrimary.withValues(alpha: 0.85)
                                    : _warmMuted,
                              ),
                            ),
                          ],
                        ],
                      ),
                    ),
                    // Close button
                    GestureDetector(
                      onTap: () => Navigator.of(context).pop(),
                      child: Container(
                        width: 36,
                        height: 36,
                        decoration: BoxDecoration(
                          color: isDark
                              ? Colors.white.withValues(alpha: 0.06)
                              : _goldSoft.withValues(alpha: 0.55),
                          borderRadius: BorderRadius.circular(12),
                          border: Border.all(
                            color: isDark
                                ? Colors.white.withValues(alpha: 0.10)
                                : _goldSoft.withValues(alpha: 0.80),
                          ),
                        ),
                        child: Icon(
                          Icons.close_rounded,
                          size: 18,
                          color: isDark ? Colors.white70 : _warmMuted,
                        ),
                      ),
                    ),
                  ],
                ),
              ),

              // ── Navigation label ────────────────────────────
              Padding(
                padding: const EdgeInsets.fromLTRB(22, 22, 22, 10),
                child: Text(
                  languageProvider.t('menu').toUpperCase(),
                  style: TextStyle(
                    fontSize: 11,
                    fontWeight: FontWeight.w800,
                    letterSpacing: 1.4,
                    color: isDark
                        ? _goldPrimary.withValues(alpha: 0.70)
                        : _warmMuted.withValues(alpha: 0.72),
                  ),
                ),
              ),

              // ── Menu items ──────────────────────────────────
              Expanded(
                child: ListView.separated(
                  padding: const EdgeInsets.fromLTRB(14, 0, 14, 24),
                  itemCount: allItems.length,
                  separatorBuilder: (_, _) => const SizedBox(height: 6),
                  itemBuilder: (context, index) {
                    final item = allItems[index];
                    final isPos = item['isPos'] == true;
                    final screenIdx = item['screenIndex'] as int;
                    final isSelected = !isPos && _selectedIndex == screenIdx;
                    final badgeCount = (item['badgeCount'] as int?) ?? 0;

                    return _buildDrawerTile(
                      icon: item['icon'] as IconData,
                      title: item['title'] as String,
                      isSelected: isSelected,
                      isDark: isDark,
                      badgeCount: badgeCount,
                      onTap: () {
                        Navigator.of(context).pop();
                        if (isPos) {
                          Navigator.push(
                            context,
                            PageRouteBuilder(
                              pageBuilder: (ctx, anim, _) => const POSScreen(),
                              transitionsBuilder: (ctx, anim, _, child) {
                                return SlideTransition(
                                  position: Tween<Offset>(
                                    begin: const Offset(0, 1),
                                    end: Offset.zero,
                                  )
                                      .chain(CurveTween(curve: Curves.easeInOut))
                                      .animate(anim),
                                  child: child,
                                );
                              },
                            ),
                          );
                        } else {
                          _selectScreen(screenIdx);
                        }
                      },
                    );
                  },
                ),
              ),

              // ── Footer divider ──────────────────────────────
              Container(
                height: 1,
                margin: const EdgeInsets.symmetric(horizontal: 22),
                color: isDark
                    ? _goldPrimary.withValues(alpha: 0.14)
                    : _goldSoft.withValues(alpha: 0.70),
              ),
              const SizedBox(height: 18),
              Padding(
                padding: const EdgeInsets.fromLTRB(14, 0, 14, 12),
                child: _buildDrawerTile(
                  icon: Icons.logout_rounded,
                  title: languageProvider.t('logout'),
                  isSelected: false,
                  isDark: isDark,
                  badgeCount: 0,
                  isDestructive: true,
                  onTap: () {
                    Navigator.of(context).pop();
                    context.read<AuthProvider>().signOut();
                  },
                ),
              ),
            ],
          ),
        ),
      ),
    );
  }

  Widget _buildDrawerTile({
    required IconData icon,
    required String title,
    required bool isSelected,
    required bool isDark,
    required VoidCallback onTap,
    int badgeCount = 0,
    bool isDestructive = false,
  }) {
    final Color activeColor = isDestructive
        ? const Color(0xFFDC2626)
        : _goldPrimary;
    final Color iconColor = isSelected
        ? activeColor
        : isDestructive
        ? const Color(0xFFDC2626).withValues(alpha: 0.80)
        : isDark
        ? Colors.white.withValues(alpha: 0.80)
        : _warmMuted;

    return Material(
      color: Colors.transparent,
      borderRadius: BorderRadius.circular(20),
      child: InkWell(
        borderRadius: BorderRadius.circular(20),
        onTap: onTap,
        child: AnimatedContainer(
          duration: const Duration(milliseconds: 200),
          curve: Curves.easeInOut,
          padding: const EdgeInsets.symmetric(horizontal: 16, vertical: 14),
          decoration: BoxDecoration(
            color: isSelected
                ? activeColor.withValues(alpha: isDark ? 0.18 : 0.10)
                : isDestructive
                ? const Color(0xFFDC2626).withValues(alpha: isDark ? 0.07 : 0.04)
                : Colors.transparent,
            borderRadius: BorderRadius.circular(20),
            border: isSelected
                ? Border.all(
                    color: activeColor.withValues(alpha: 0.35),
                  )
                : Border.all(color: Colors.transparent),
          ),
          child: Row(
            children: [
              // Icon container
              AnimatedContainer(
                duration: const Duration(milliseconds: 200),
                width: 42,
                height: 42,
                decoration: BoxDecoration(
                  color: isSelected
                      ? activeColor.withValues(alpha: 0.16)
                      : isDestructive
                      ? const Color(0xFFDC2626).withValues(alpha: 0.08)
                      : isDark
                      ? Colors.white.withValues(alpha: 0.05)
                      : _goldSoft.withValues(alpha: 0.40),
                  borderRadius: BorderRadius.circular(14),
                ),
                child: Stack(
                  alignment: Alignment.center,
                  children: [
                    Icon(icon, size: 20, color: iconColor),
                    if (badgeCount > 0)
                      Positioned(
                        right: 4,
                        top: 4,
                        child: Container(
                          width: 14,
                          height: 14,
                          decoration: const BoxDecoration(
                            color: Color(0xFFDC2626),
                            shape: BoxShape.circle,
                          ),
                          alignment: Alignment.center,
                          child: Text(
                            badgeCount > 9 ? '9+' : badgeCount.toString(),
                            style: const TextStyle(
                              color: Colors.white,
                              fontSize: 8,
                              fontWeight: FontWeight.w800,
                              height: 1,
                            ),
                          ),
                        ),
                      ),
                  ],
                ),
              ),
              const SizedBox(width: 14),
              Expanded(
                child: Text(
                  title,
                  style: TextStyle(
                    fontSize: 15,
                    fontWeight: isSelected ? FontWeight.w800 : FontWeight.w600,
                    color: isSelected
                        ? (isDark ? _goldSoft : _warmInk)
                        : isDestructive
                        ? const Color(0xFFDC2626)
                        : isDark
                        ? Colors.white.withValues(alpha: 0.88)
                        : _warmInk.withValues(alpha: 0.80),
                  ),
                ),
              ),
              if (isSelected)
                Container(
                  width: 7,
                  height: 7,
                  decoration: BoxDecoration(
                    color: activeColor,
                    shape: BoxShape.circle,
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
    final profileProvider = context.watch<ProfileProvider>();
    final profile = profileProvider.profile;

    _maybeRefreshUnreadAlertCount(authProvider.token);

    final avatarUrl = profile?.avatarUrl ?? authProvider.user?.avatarUrl;

    final canViewPos = _hasPermission(profile, 'mobile_seller_pos');
    final canViewOrders = _hasPermission(profile, 'mobile_seller_orders');
    final canViewProducts = _hasPermission(profile, 'mobile_seller_products');
    final canViewSaleReturns = _hasPermission(
      profile,
      'mobile_seller_sale_returns',
    );
    final canViewProfile = _hasPermission(profile, 'mobile_seller_profile');
    final canViewAlerts = _hasPermission(profile, 'mobile_seller_alerts');

    // Build screens map dynamically
    final screensList = <Widget>[
      const HomeScreen(), // 0
    ];
    int productsIndex = -1,
        salesReturnIndex = -1,
        profileIndex = -1;
    _ordersIndex = -1;
    _alertsIndex = -1;

    if (authProvider.isDeliveryUser) {
      screensList.add(OrdersScreen(
        key: _ordersKey,
        menuButton: _buildDashboardMenuButton(languageProvider),
      ));
      _ordersIndex = screensList.length - 1;

      if (canViewAlerts) {
        screensList.add(
          DeliveryAlertsScreen(
            key: _alertsKey,
            onUnreadCountChanged: _updateUnreadAlertCount,
            menuButton: _buildDashboardMenuButton(languageProvider),
          ),
        );
        _alertsIndex = screensList.length - 1;
      }

      screensList.add(ProfileScreen(
        menuButton: _buildDashboardMenuButton(languageProvider),
      ));
      profileIndex = screensList.length - 1;
    } else {
      if (canViewOrders) {
        screensList.add(OrdersScreen(
          key: _ordersKey,
          menuButton: _buildDashboardMenuButton(languageProvider),
        ));
        _ordersIndex = screensList.length - 1;
      }

      if (canViewAlerts) {
        screensList.add(
          DeliveryAlertsScreen(
            key: _alertsKey,
            onUnreadCountChanged: _updateUnreadAlertCount,
            menuButton: _buildDashboardMenuButton(languageProvider),
          ),
        );
        _alertsIndex = screensList.length - 1;
      }

      if (canViewProducts) {
        screensList.add(ProductsScreen(
          menuButton: _buildDashboardMenuButton(languageProvider),
        ));
        productsIndex = screensList.length - 1;
      }
      if (canViewSaleReturns) {
        screensList.add(SalesReturnScreen(
          menuButton: _buildDashboardMenuButton(languageProvider),
        ));
        salesReturnIndex = screensList.length - 1;
      }
      if (canViewProfile) {
        screensList.add(ProfileScreen(
          menuButton: _buildDashboardMenuButton(languageProvider),
        ));
        profileIndex = screensList.length - 1;
      }
    }

    final menuConfig = <Map<String, dynamic>>[];
    final destinations = <NavigationDestination>[];
    final allDrawerItems = <Map<String, dynamic>>[];

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

    // ── Home ────────────────────────────────────────────────
    menuConfig.add({'isMore': false, 'screenIndex': 0});
    destinations.add(NavigationDestination(
      icon: const Icon(Icons.dashboard_outlined),
      selectedIcon: const Icon(Icons.dashboard),
      label: languageProvider.t('nav_home'),
    ));
    allDrawerItems.add({
      'icon': Icons.dashboard_rounded,
      'title': languageProvider.t('nav_home'),
      'screenIndex': 0,
      'isPos': false,
    });

    if (authProvider.isDeliveryUser) {
      menuConfig.add({'isMore': false, 'screenIndex': _ordersIndex});
      destinations.add(NavigationDestination(
        icon: const Icon(Icons.shopping_bag_outlined),
        selectedIcon: const Icon(Icons.shopping_bag),
        label: languageProvider.t('nav_orders'),
      ));
      allDrawerItems.add({
        'icon': Icons.shopping_bag_rounded,
        'title': languageProvider.t('nav_orders'),
        'screenIndex': _ordersIndex,
        'isPos': false,
      });

      if (_alertsIndex != -1) {
        menuConfig.add({'isMore': false, 'screenIndex': _alertsIndex});
        destinations.add(NavigationDestination(
          icon: _buildBadgeIcon(
            const Icon(Icons.notifications_outlined),
            _unreadAlertCount,
          ),
          selectedIcon: _buildBadgeIcon(
            const Icon(Icons.notifications),
            _unreadAlertCount,
          ),
          label: languageProvider.t('nav_alerts'),
        ));
        allDrawerItems.add({
          'icon': Icons.notifications_rounded,
          'title': languageProvider.t('nav_alerts'),
          'screenIndex': _alertsIndex,
          'isPos': false,
          'badgeCount': _unreadAlertCount,
        });
      }

      menuConfig.add({'isMore': false, 'screenIndex': profileIndex});
      destinations.add(NavigationDestination(
        icon: profileIconRegular,
        selectedIcon: profileIconSelected,
        label: languageProvider.t('settings'),
      ));
      allDrawerItems.add({
        'icon': Icons.settings_rounded,
        'title': languageProvider.t('settings'),
        'screenIndex': profileIndex,
        'isPos': false,
      });
    } else {
      // POS
      if (canViewPos) {
        menuConfig.add({'isMore': false, 'screenIndex': -1, 'isPos': true});
        destinations.add(NavigationDestination(
          icon: const Icon(Icons.point_of_sale_outlined),
          selectedIcon: const Icon(Icons.point_of_sale),
          label: languageProvider.t('pos'),
        ));
        allDrawerItems.add({
          'icon': Icons.point_of_sale_rounded,
          'title': languageProvider.t('pos'),
          'screenIndex': -1,
          'isPos': true,
        });
      }

      // Orders
      if (_ordersIndex != -1) {
        menuConfig.add({'isMore': false, 'screenIndex': _ordersIndex});
        destinations.add(NavigationDestination(
          icon: const Icon(Icons.shopping_bag_outlined),
          selectedIcon: const Icon(Icons.shopping_bag),
          label: languageProvider.t('nav_orders'),
        ));
        allDrawerItems.add({
          'icon': Icons.shopping_bag_rounded,
          'title': languageProvider.t('nav_orders'),
          'screenIndex': _ordersIndex,
          'isPos': false,
        });
      }

      // Alerts
      if (_alertsIndex != -1) {
        menuConfig.add({'isMore': false, 'screenIndex': _alertsIndex});
        destinations.add(NavigationDestination(
          icon: _buildBadgeIcon(
            const Icon(Icons.notifications_outlined),
            _unreadAlertCount,
          ),
          selectedIcon: _buildBadgeIcon(
            const Icon(Icons.notifications),
            _unreadAlertCount,
          ),
          label: languageProvider.t('nav_alerts'),
        ));
        allDrawerItems.add({
          'icon': Icons.notifications_rounded,
          'title': languageProvider.t('nav_alerts'),
          'screenIndex': _alertsIndex,
          'isPos': false,
          'badgeCount': _unreadAlertCount,
        });
      }

      // Sales Return (drawer only)
      if (salesReturnIndex != -1) {
        allDrawerItems.add({
          'icon': Icons.assignment_return_rounded,
          'title': languageProvider.t('sales_returns'),
          'screenIndex': salesReturnIndex,
          'isPos': false,
        });
      }

      // Products (drawer only)
      if (productsIndex != -1) {
        allDrawerItems.add({
          'icon': Icons.inventory_2_rounded,
          'title': languageProvider.t('nav_products'),
          'screenIndex': productsIndex,
          'isPos': false,
        });
      }

      // Settings / Profile
      if (profileIndex != -1) {
        menuConfig.add({'isMore': false, 'screenIndex': profileIndex});
        destinations.add(NavigationDestination(
          icon: profileIconRegular,
          selectedIcon: profileIconSelected,
          label: languageProvider.t('settings'),
        ));
        allDrawerItems.add({
          'icon': Icons.settings_rounded,
          'title': languageProvider.t('settings'),
          'screenIndex': profileIndex,
          'isPos': false,
        });
      }
    }

    final userName = profile?.name ?? authProvider.user?.name ?? '';
    final userRole = profile?.role ?? '';

    screensList[0] = HomeScreen(
      menuButton: _buildDashboardMenuButton(languageProvider),
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
          key: _scaffoldKey,
          extendBody: true, // content scrolls under the floating navbar
          drawer: _buildDrawer(
            languageProvider: languageProvider,
            allItems: allDrawerItems,
            avatarUrl: avatarUrl,
            userName: userName,
            userRole: userRole,
          ),
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
                            ? _darkSurface.withValues(alpha: 0.5)
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

