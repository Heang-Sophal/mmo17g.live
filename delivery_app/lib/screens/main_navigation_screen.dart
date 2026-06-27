import 'dart:async';
import 'dart:ui';

import 'package:delivery_app/controllers/navigation_bar_controller.dart';
import 'package:delivery_app/providers/auth_provider.dart';
import 'package:delivery_app/providers/language_provider.dart';
import 'package:delivery_app/providers/profile_provider.dart';
import 'package:delivery_app/screens/delivery_alerts_screen.dart';
import 'package:delivery_app/screens/home_screen.dart';
import 'package:delivery_app/screens/orders_screen.dart';
import 'package:delivery_app/screens/profile_screen.dart';
import 'package:delivery_app/screens/report_screen.dart';
import 'package:delivery_app/services/delivery_api_service.dart';
import 'package:delivery_app/services/notification_service.dart';
import 'package:delivery_app/services/realtime_service.dart';
import 'package:delivery_app/widgets/cached_image.dart';
import 'package:flutter/material.dart';
import 'package:provider/provider.dart';

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
  final DeliveryApiService _apiService = DeliveryApiService();
  final GlobalKey<HomeScreenState> _homeKey = GlobalKey<HomeScreenState>();
  final GlobalKey<OrdersScreenState> _ordersKey =
      GlobalKey<OrdersScreenState>();
  final GlobalKey<OrdersScreenState> _recordsKey =
      GlobalKey<OrdersScreenState>();
  final GlobalKey<DeliveryAlertsScreenState> _alertsKey =
      GlobalKey<DeliveryAlertsScreenState>();
  final GlobalKey<ProfileScreenState> _profileKey =
      GlobalKey<ProfileScreenState>();
  final GlobalKey<ReportScreenState> _recordReportKey =
      GlobalKey<ReportScreenState>();
  final GlobalKey<ReportScreenState> _deliveryReportKey =
      GlobalKey<ReportScreenState>();
  final GlobalKey<ScaffoldState> _scaffoldKey = GlobalKey<ScaffoldState>();

  int _currentIndex = 0;
  int? _recordsIndex;
  int? _ordersIndex;
  int? _alertsIndex;
  int _pendingRecordCount = 0;
  int _activeOrderCount = 0;
  int _unreadAlertCount = 0;
  String? _lastBadgeCountToken;
  bool _isRefreshingBadgeCounts = false;
  double _lastScrollOffset = 0;

  late final NavigationBarController _navController;
  late AnimationController _navAnimationController;
  late Animation<double> _navAnimation;
  StreamSubscription<Map<String, dynamic>>? _notificationSubscription;
  StreamSubscription<Map<String, dynamic>>? _realtimeSubscription;
  bool _isRealtimeRefreshQueued = false;

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
    _notificationSubscription = NotificationService.messages.listen(
      _handleRealtimeNotification,
    );
    _realtimeSubscription = RealtimeService.events.listen(
      _handleRealtimeNotification,
    );
    _navAnimationController.forward();
  }

  @override
  void dispose() {
    _navController.removeListener(_onNavVisibilityChanged);
    _notificationSubscription?.cancel();
    _realtimeSubscription?.cancel();
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

  void _onScroll(ScrollNotification notification) {
    if (notification is ScrollUpdateNotification) {
      final offset = notification.metrics.pixels;
      final delta = offset - _lastScrollOffset;
      if (delta > 5 && offset > 50) {
        _navController.hide();
      } else if (delta < -5) {
        _navController.show();
      }
      _lastScrollOffset = offset;
    } else if (notification is ScrollEndNotification) {
      _lastScrollOffset = notification.metrics.pixels;
    }
  }

  void _openDrawer() => _scaffoldKey.currentState?.openDrawer();

  void _goToTab(int index) {
    _navController.show();
    setState(() {
      _currentIndex = index;
    });

    WidgetsBinding.instance.addPostFrameCallback((_) {
      if (!mounted) return;

      if (index == _recordsIndex) {
        _recordsKey.currentState?.refreshData();
        _refreshBadgeCountsForCurrentToken();
      } else if (index == _ordersIndex) {
        _ordersKey.currentState?.refreshData();
        _refreshBadgeCountsForCurrentToken();
      } else if (index == _alertsIndex) {
        _alertsKey.currentState?.refreshData();
      }
    });
  }

  void _updateUnreadAlertCount(int count) {
    if (!mounted) return;
    if (_unreadAlertCount == count) return;
    setState(() => _unreadAlertCount = count);
  }

  void _maybeRefreshBadgeCounts(String? token) {
    if (_lastBadgeCountToken == token) return;

    _lastBadgeCountToken = token;
    if (token == null || token.isEmpty) {
      if (_pendingRecordCount != 0 || _activeOrderCount != 0) {
        WidgetsBinding.instance.addPostFrameCallback((_) {
          if (!mounted) return;
          setState(() {
            _pendingRecordCount = 0;
            _activeOrderCount = 0;
          });
        });
      }
      return;
    }

    WidgetsBinding.instance.addPostFrameCallback((_) {
      if (mounted) _refreshBadgeCounts(token);
    });
  }

  void _refreshBadgeCountsForCurrentToken() {
    final token = context.read<AuthProvider>().token;
    if (token == null || token.isEmpty) return;
    _refreshBadgeCounts(token);
  }

  Future<void> _refreshBadgeCounts(String token) async {
    if (_isRefreshingBadgeCounts) return;
    _isRefreshingBadgeCounts = true;
    _apiService.setToken(token);
    try {
      final dashboard = await _apiService.getDashboard();
      final orders = (dashboard['orders'] as Map?)?.cast<String, dynamic>();
      if (!mounted || orders == null) return;

      final pendingRecords = _toInt(orders['pending']);
      final activeOrders = _toInt(orders['shipped'] ?? orders['processing']);

      if (_pendingRecordCount == pendingRecords &&
          _activeOrderCount == activeOrders) {
        return;
      }
      setState(() {
        _pendingRecordCount = pendingRecords;
        _activeOrderCount = activeOrders;
      });
    } catch (_) {
    } finally {
      _isRefreshingBadgeCounts = false;
    }
  }

  int _toInt(dynamic value) {
    if (value is int) return value;
    if (value is num) return value.toInt();
    return int.tryParse(value?.toString() ?? '') ?? 0;
  }

  void _handleRealtimeNotification(Map<String, dynamic> data) {
    if (_isRealtimeRefreshQueued) return;
    _isRealtimeRefreshQueued = true;

    Future.delayed(const Duration(milliseconds: 350), () {
      _isRealtimeRefreshQueued = false;
      if (!mounted) return;

      final token = context.read<AuthProvider>().token;
      if (token == null || token.isEmpty) return;

      _refreshBadgeCounts(token);
      _homeKey.currentState?.refreshData();
      _recordsKey.currentState?.refreshData();
      _ordersKey.currentState?.refreshData();
      _alertsKey.currentState?.refreshData();
      _recordReportKey.currentState?.refreshData();
      _deliveryReportKey.currentState?.refreshData();
    });
  }

  bool _hasPermission(
    Map<String, dynamic>? profile,
    DeliveryUser? authUser,
    String permission,
  ) {
    final permissions = profile == null
        ? null
        : profile['mobile_permissions'] ?? profile['permissions'];
    if (permissions is List) {
      return permissions.map((v) => v.toString()).contains(permission);
    }
    final authPermissions = authUser?.mobilePermissions ?? const [];
    if (authPermissions.isNotEmpty) {
      return authPermissions.contains(permission);
    }
    return true;
  }

  // ── Badge icon ───────────────────────────────────────────────────────────

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

  // ── Menu button (AppBar leading) ─────────────────────────────────────────

  Widget _buildMenuButton(LanguageProvider languageProvider) {
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

  // ── Left drawer ──────────────────────────────────────────────────────────

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
              // Header
              Container(
                padding: const EdgeInsets.fromLTRB(22, 28, 22, 28),
                decoration: BoxDecoration(
                  gradient: LinearGradient(
                    colors: isDark
                        ? [_goldDeep.withValues(alpha: 0.55), _darkSurface]
                        : [_goldPrimary.withValues(alpha: 0.18), _warmSurface],
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
                      child: avatarUrl != null && avatarUrl.isNotEmpty
                          ? ClipOval(
                              child: CachedImage(
                                url: avatarUrl,
                                width: 56,
                                height: 56,
                                fit: BoxFit.cover,
                                errorWidget: Container(
                                  width: 56,
                                  height: 56,
                                  color: isDark
                                      ? _goldDeep.withValues(alpha: 0.35)
                                      : _goldSoft,
                                  child: Icon(
                                    Icons.person_rounded,
                                    size: 28,
                                    color: isDark ? _goldSoft : _goldDeep,
                                  ),
                                ),
                              ),
                            )
                          : CircleAvatar(
                              radius: 28,
                              backgroundColor: isDark
                                  ? _goldDeep.withValues(alpha: 0.35)
                                  : _goldSoft,
                              child: Icon(
                                Icons.person_rounded,
                                size: 28,
                                color: isDark ? _goldSoft : _goldDeep,
                              ),
                            ),
                    ),
                    const SizedBox(width: 14),
                    Expanded(
                      child: Column(
                        crossAxisAlignment: CrossAxisAlignment.start,
                        children: [
                          Text(
                            userName.isNotEmpty
                                ? userName
                                : languageProvider.t('nav_profile'),
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

              // Section label
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

              // Nav items
              Expanded(
                child: ListView.separated(
                  padding: const EdgeInsets.fromLTRB(14, 0, 14, 24),
                  itemCount: allItems.length,
                  separatorBuilder: (context, index) =>
                      const SizedBox(height: 6),
                  itemBuilder: (context, index) {
                    final item = allItems[index];
                    final screenIdx = item['screenIndex'] as int;
                    final isSelected = _currentIndex == screenIdx;
                    final badgeCount = (item['badgeCount'] as int?) ?? 0;
                    return _buildDrawerTile(
                      icon: item['icon'] as IconData,
                      title: item['title'] as String,
                      isSelected: isSelected,
                      isDark: isDark,
                      badgeCount: badgeCount,
                      onTap: () {
                        Navigator.of(context).pop();
                        _goToTab(screenIdx);
                      },
                    );
                  },
                ),
              ),

              // Footer divider + logout
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
                ? const Color(
                    0xFFDC2626,
                  ).withValues(alpha: isDark ? 0.07 : 0.04)
                : Colors.transparent,
            borderRadius: BorderRadius.circular(20),
            border: isSelected
                ? Border.all(color: activeColor.withValues(alpha: 0.35))
                : Border.all(color: Colors.transparent),
          ),
          child: Row(
            children: [
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

  // ── Build ────────────────────────────────────────────────────────────────

  @override
  Widget build(BuildContext context) {
    final languageProvider = context.watch<LanguageProvider>();
    final authProvider = context.watch<AuthProvider>();
    final profileProvider = context.watch<ProfileProvider>();
    final profile = profileProvider.profile;
    final authUser = authProvider.user;

    _maybeRefreshBadgeCounts(authProvider.token);

    final bool canViewRecords = _hasPermission(
      profile,
      authUser,
      'mobile_delivery_record_items',
    );
    final bool canViewOrders = _hasPermission(
      profile,
      authUser,
      'mobile_delivery_deliveries',
    );
    final bool canViewRecordReports = _hasPermission(
      profile,
      authUser,
      'mobile_delivery_record_reports',
    );
    final bool canViewDeliveryReports = _hasPermission(
      profile,
      authUser,
      'mobile_delivery_reports',
    );
    final bool canViewAlerts = _hasPermission(
      profile,
      authUser,
      'mobile_delivery_alerts',
    );
    final bool canViewProfile = _hasPermission(
      profile,
      authUser,
      'mobile_delivery_profile',
    );

    final bool isDark = Theme.of(context).brightness == Brightness.dark;
    final String? avatarUrl =
        profile?['avatar_url']?.toString() ?? authUser?.avatarUrl;
    final String userName =
        profile?['name']?.toString() ?? authUser?.name ?? '';
    final String userRole = authUser?.role ?? '';

    final List<Widget> pages = [];
    final List<NavigationDestination> destinations = [];
    final List<Map<String, dynamic>> menuConfig = [];
    final List<Map<String, dynamic>> allDrawerItems = [];
    final List<List<Widget>> actionsList = [];
    final List<String> titles = [];

    int buildIndex = 0;
    _recordsIndex = null;
    _ordersIndex = null;
    _alertsIndex = null;

    Widget profileIconRegular = avatarUrl != null && avatarUrl.isNotEmpty
        ? ClipOval(
            child: CachedImage(
              url: avatarUrl,
              width: 26,
              height: 26,
              fit: BoxFit.cover,
              errorWidget: const Icon(Icons.person_outline),
            ),
          )
        : const Icon(Icons.person_outline);

    Widget profileIconSelected = avatarUrl != null && avatarUrl.isNotEmpty
        ? Container(
            padding: const EdgeInsets.all(2),
            decoration: BoxDecoration(
              shape: BoxShape.circle,
              border: Border.all(color: _goldPrimary, width: 2),
            ),
            child: ClipOval(
              child: CachedImage(
                url: avatarUrl,
                width: 24,
                height: 24,
                fit: BoxFit.cover,
                errorWidget: const Icon(Icons.person),
              ),
            ),
          )
        : const Icon(Icons.person);

    // ── Dashboard ─────────────────────────────────────────
    pages.add(
      HomeScreen(
        key: _homeKey,
        onNavigate: (int rawIndex) {
          int targetIndex = 0;
          if (rawIndex == 1) {
            if (_ordersIndex != null) {
              targetIndex = _ordersIndex!;
            } else if (_recordsIndex != null) {
              targetIndex = _recordsIndex!;
            }
          } else if (rawIndex == 2) {
            if (_alertsIndex != null) targetIndex = _alertsIndex!;
          }
          if (targetIndex != 0) _goToTab(targetIndex);
        },
      ),
    );
    destinations.add(
      NavigationDestination(
        icon: const Icon(Icons.home_outlined),
        selectedIcon: const Icon(Icons.home_rounded),
        label: languageProvider.t('dashboard'),
      ),
    );
    menuConfig.add({'screenIndex': buildIndex});
    allDrawerItems.add({
      'icon': Icons.home_rounded,
      'title': languageProvider.t('dashboard'),
      'screenIndex': buildIndex,
    });
    actionsList.add([
      IconButton(
        onPressed: () => _homeKey.currentState?.refreshData(),
        icon: const Icon(Icons.refresh),
      ),
    ]);
    titles.add(languageProvider.t('dashboard'));
    buildIndex++;

    // ── Records ───────────────────────────────────────────
    if (canViewRecords) {
      pages.add(
        OrdersScreen(
          key: _recordsKey,
          recordMode: true,
          onOrdersChanged: _refreshBadgeCountsForCurrentToken,
          onOrderOpened: (ref) =>
              _alertsKey.currentState?.markAlertReadByRef(ref),
        ),
      );
      _recordsIndex = buildIndex;
      destinations.add(
        NavigationDestination(
          icon: _buildBadgeIcon(
            const Icon(Icons.inventory_2_outlined),
            _pendingRecordCount,
          ),
          selectedIcon: _buildBadgeIcon(
            const Icon(Icons.inventory_2_rounded),
            _pendingRecordCount,
          ),
          label: languageProvider.t('records'),
        ),
      );
      menuConfig.add({'screenIndex': buildIndex});
      allDrawerItems.add({
        'icon': Icons.inventory_2_rounded,
        'title': languageProvider.t('records'),
        'screenIndex': buildIndex,
        'badgeCount': _pendingRecordCount,
      });
      actionsList.add([
        IconButton(
          onPressed: () async {
            await _recordsKey.currentState?.refreshAndScrollToTop();
            _refreshBadgeCountsForCurrentToken();
          },
          icon: const Icon(Icons.refresh),
        ),
      ]);
      titles.add(languageProvider.t('records'));
      buildIndex++;
    }

    // ── Orders ────────────────────────────────────────────
    if (canViewOrders) {
      pages.add(
        OrdersScreen(
          key: _ordersKey,
          onOrdersChanged: _refreshBadgeCountsForCurrentToken,
          onOrderOpened: (ref) =>
              _alertsKey.currentState?.markAlertReadByRef(ref),
        ),
      );
      _ordersIndex = buildIndex;
      destinations.add(
        NavigationDestination(
          icon: _buildBadgeIcon(
            const Icon(Icons.receipt_long_outlined),
            _activeOrderCount,
          ),
          selectedIcon: _buildBadgeIcon(
            const Icon(Icons.receipt_long_rounded),
            _activeOrderCount,
          ),
          label: languageProvider.t('orders'),
        ),
      );
      menuConfig.add({'screenIndex': buildIndex});
      allDrawerItems.add({
        'icon': Icons.receipt_long_rounded,
        'title': languageProvider.t('orders'),
        'screenIndex': buildIndex,
        'badgeCount': _activeOrderCount,
      });
      actionsList.add([
        IconButton(
          onPressed: () async {
            await _ordersKey.currentState?.refreshAndScrollToTop();
            _refreshBadgeCountsForCurrentToken();
          },
          icon: const Icon(Icons.refresh),
        ),
      ]);
      titles.add(languageProvider.t('orders'));
      buildIndex++;
    }

    // ── Alerts ────────────────────────────────────────────
    if (canViewAlerts) {
      pages.add(
        DeliveryAlertsScreen(
          key: _alertsKey,
          onUnreadCountChanged: _updateUnreadAlertCount,
        ),
      );
      _alertsIndex = buildIndex;
      destinations.add(
        NavigationDestination(
          icon: _buildBadgeIcon(
            const Icon(Icons.notifications_outlined),
            _unreadAlertCount,
          ),
          selectedIcon: _buildBadgeIcon(
            const Icon(Icons.notifications_rounded),
            _unreadAlertCount,
          ),
          label: languageProvider.t('alerts'),
        ),
      );
      menuConfig.add({'screenIndex': buildIndex});
      allDrawerItems.add({
        'icon': Icons.notifications_rounded,
        'title': languageProvider.t('alerts'),
        'screenIndex': buildIndex,
        'badgeCount': _unreadAlertCount,
      });
      actionsList.add([
        TextButton(
          onPressed: () => _alertsKey.currentState?.markAllRead(),
          child: Text(languageProvider.t('mark_all_read')),
        ),
        IconButton(
          onPressed: () => _alertsKey.currentState?.refreshData(),
          icon: const Icon(Icons.refresh),
        ),
      ]);
      titles.add(languageProvider.t('alerts'));
      buildIndex++;
    }

    // ── Record Reports (drawer only) ──────────────────────
    if (canViewRecordReports) {
      pages.add(ReportScreen(key: _recordReportKey, recordMode: true));
      allDrawerItems.add({
        'icon': Icons.fact_check_outlined,
        'title': languageProvider.t('record_report'),
        'screenIndex': buildIndex,
      });
      actionsList.add([
        IconButton(
          onPressed: () => _recordReportKey.currentState?.refreshData(),
          icon: const Icon(Icons.refresh),
        ),
      ]);
      titles.add(languageProvider.t('record_report'));
      buildIndex++;
    }

    // ── Delivery Reports (drawer only) ────────────────────
    if (canViewDeliveryReports) {
      pages.add(ReportScreen(key: _deliveryReportKey));
      allDrawerItems.add({
        'icon': Icons.bar_chart_outlined,
        'title': languageProvider.t('delivered_report'),
        'screenIndex': buildIndex,
      });
      actionsList.add([
        IconButton(
          onPressed: () => _deliveryReportKey.currentState?.refreshData(),
          icon: const Icon(Icons.refresh),
        ),
      ]);
      titles.add(languageProvider.t('report'));
      buildIndex++;
    }

    // ── Profile ───────────────────────────────────────────
    if (canViewProfile) {
      pages.add(ProfileScreen(key: _profileKey));
      destinations.add(
        NavigationDestination(
          icon: profileIconRegular,
          selectedIcon: profileIconSelected,
          label: languageProvider.t('settings'),
        ),
      );
      menuConfig.add({'screenIndex': buildIndex});
      allDrawerItems.add({
        'icon': Icons.settings_rounded,
        'title': languageProvider.t('settings'),
        'screenIndex': buildIndex,
      });
      actionsList.add([
        IconButton(
          onPressed: () => _profileKey.currentState?.refreshData(),
          icon: const Icon(Icons.refresh),
        ),
      ]);
      titles.add(languageProvider.t('settings'));
      buildIndex++;
    }

    if (_currentIndex >= pages.length) _currentIndex = 0;

    // selectedNavIndex: which NavigationBar item is highlighted.
    // Report screens (drawer-only) show no highlight → stays at 0.
    int selectedNavIndex = menuConfig.indexWhere(
      (c) => c['screenIndex'] == _currentIndex,
    );
    if (selectedNavIndex == -1) selectedNavIndex = 0;

    return Scaffold(
      key: _scaffoldKey,
      extendBody: true,
      appBar: AppBar(
        leadingWidth: 92,
        leading: _buildMenuButton(languageProvider),
        title: Text(titles[_currentIndex]),
        actions: actionsList[_currentIndex],
        elevation: 0,
      ),
      drawer: _buildDrawer(
        languageProvider: languageProvider,
        allItems: allDrawerItems,
        avatarUrl: avatarUrl,
        userName: userName,
        userRole: userRole,
      ),
      body: NotificationListener<ScrollNotification>(
        onNotification: (notification) {
          _onScroll(notification);
          return false;
        },
        child: IndexedStack(index: _currentIndex, children: pages),
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
                child: BackdropFilter(
                  filter: ImageFilter.blur(sigmaX: 25.0, sigmaY: 25.0),
                  child: Container(
                    color: isDark
                        ? _darkSurface.withValues(alpha: 0.5)
                        : _warmSurface.withValues(alpha: 0.5),
                    child: NavigationBar(
                      backgroundColor: Colors.transparent,
                      elevation: 0,
                      indicatorColor: Colors.transparent,
                      labelBehavior:
                          NavigationDestinationLabelBehavior.alwaysShow,
                      selectedIndex: selectedNavIndex,
                      onDestinationSelected: (navIndex) {
                        if (navIndex < menuConfig.length) {
                          _goToTab(menuConfig[navIndex]['screenIndex'] as int);
                        }
                      },
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
  }
}
