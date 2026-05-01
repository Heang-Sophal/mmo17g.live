import 'package:delivery_app/providers/auth_provider.dart';
import 'package:delivery_app/providers/language_provider.dart';
import 'package:delivery_app/providers/profile_provider.dart';
import 'package:delivery_app/screens/delivery_alerts_screen.dart';
import 'package:delivery_app/screens/home_screen.dart';
import 'package:delivery_app/screens/orders_screen.dart';
import 'package:delivery_app/screens/profile_screen.dart';
import 'package:delivery_app/screens/report_screen.dart';
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

class _MainNavigationScreenState extends State<MainNavigationScreen> {
  final GlobalKey<HomeScreenState> _homeKey = GlobalKey<HomeScreenState>();
  final GlobalKey<OrdersScreenState> _ordersKey =
      GlobalKey<OrdersScreenState>();
  final GlobalKey<OrdersScreenState> _recordsKey =
      GlobalKey<OrdersScreenState>();
  final GlobalKey<DeliveryAlertsScreenState> _alertsKey =
      GlobalKey<DeliveryAlertsScreenState>();
  final GlobalKey<ProfileScreenState> _profileKey =
      GlobalKey<ProfileScreenState>();
  final GlobalKey<ReportScreenState> _deliveryReportKey =
      GlobalKey<ReportScreenState>();
  final GlobalKey<ReportScreenState> _recordReportKey =
      GlobalKey<ReportScreenState>();

  int _currentIndex = 0;

  @override
  void initState() {
    super.initState();
    WidgetsBinding.instance.addPostFrameCallback((_) {
      _loadProfilePermissions();
    });
  }

  void _goToTab(int index) {
    setState(() {
      _currentIndex = index;
    });
  }

  Future<void> _loadProfilePermissions() async {
    if (!mounted) return;

    final authProvider = context.read<AuthProvider>();
    final profileProvider = context.read<ProfileProvider>();
    profileProvider.setToken(authProvider.token);

    if (authProvider.token != null && authProvider.token!.isNotEmpty) {
      await profileProvider.fetchProfile();
    }
  }

  bool _hasPermission(Map<String, dynamic>? profile, String permission) {
    if (profile == null) {
      return false;
    }

    final permissions = profile['mobile_permissions'] ?? profile['permissions'];
    if (permissions is List) {
      return permissions.map((value) => value.toString()).contains(permission);
    }
    if (permissions is Map) {
      final value = permissions[permission];
      if (value is Map) {
        final enabled = value['enabled'];
        return enabled == true ||
            enabled == 'true' ||
            enabled == 1 ||
            enabled == '1';
      }
      return value == true || value == 'true' || value == 1 || value == '1';
    }

    return false;
  }

  void _handleDestinationSelected(
    int navIndex,
    LanguageProvider languageProvider,
    List<Map<String, dynamic>> menuConfig,
  ) {
    final selectedItem = menuConfig[navIndex];
    if (selectedItem['isMore'] == true) {
      final moreItems = (selectedItem['moreItems'] as List)
          .cast<Map<String, dynamic>>();
      _showMoreMenu(languageProvider, moreItems);
      return;
    }

    _goToTab(selectedItem['screenIndex'] as int);
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
                ...moreItems.map(
                  (item) => Padding(
                    padding: const EdgeInsets.only(bottom: 12),
                    child: _buildMoreMenuTile(
                      icon: item['icon'],
                      title: item['title'],
                      isSelected: _currentIndex == item['screenIndex'],
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
    _goToTab(selectedIndex);
  }

  Widget _buildMoreMenuTile({
    required IconData icon,
    required String title,
    required bool isSelected,
    required bool isDark,
    required VoidCallback onTap,
  }) {
    return Material(
      color: Colors.transparent,
      child: InkWell(
        borderRadius: BorderRadius.circular(22),
        onTap: onTap,
        child: Ink(
          padding: const EdgeInsets.symmetric(horizontal: 16, vertical: 16),
          decoration: BoxDecoration(
            color: isSelected
                ? _goldPrimary.withValues(alpha: isDark ? 0.22 : 0.10)
                : isDark
                ? Colors.white.withValues(alpha: 0.03)
                : const Color(0xFFFFFAEF),
            borderRadius: BorderRadius.circular(22),
            border: Border.all(
              color: isSelected
                  ? _goldPrimary.withValues(alpha: 0.45)
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
                      ? _goldPrimary.withValues(alpha: 0.14)
                      : isDark
                      ? Colors.white.withValues(alpha: 0.06)
                      : Colors.white,
                  borderRadius: BorderRadius.circular(14),
                ),
                child: Icon(
                  icon,
                  color: isSelected
                      ? _goldPrimary
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
                  color: isSelected ? _goldPrimary : Colors.transparent,
                  shape: BoxShape.circle,
                  border: Border.all(
                    color: isSelected
                        ? _goldPrimary
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

  Widget _buildBottomNavigationBar({
    required BuildContext context,
    required LanguageProvider languageProvider,
    required List<Map<String, dynamic>> navigationItems,
    required int selectedNavIndex,
  }) {
    final isDark = Theme.of(context).brightness == Brightness.dark;

    return SafeArea(
      top: false,
      child: Padding(
        padding: const EdgeInsets.fromLTRB(10, 0, 10, 0),
        child: Container(
          padding: const EdgeInsets.symmetric(horizontal: 8, vertical: 6),
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
          child: Row(
            children: List.generate(navigationItems.length, (index) {
              final item = navigationItems[index];
              return Expanded(
                child: _buildBottomNavItem(
                  item: item,
                  index: index,
                  isSelected: index == selectedNavIndex,
                  isDark: isDark,
                  languageProvider: languageProvider,
                  navigationItems: navigationItems,
                ),
              );
            }),
          ),
        ),
      ),
    );
  }

  Widget _buildBottomNavItem({
    required Map<String, dynamic> item,
    required int index,
    required bool isSelected,
    required bool isDark,
    required LanguageProvider languageProvider,
    required List<Map<String, dynamic>> navigationItems,
  }) {
    final label = item['label']?.toString() ?? '';
    const labelFontSize = 14.2;
    final icon = isSelected
        ? item['selectedIcon'] as IconData
        : item['icon'] as IconData;

    return Material(
      color: Colors.transparent,
      child: InkWell(
        borderRadius: BorderRadius.circular(24),
        onTap: () => _handleDestinationSelected(
          index,
          languageProvider,
          navigationItems,
        ),
        child: Padding(
          padding: const EdgeInsets.symmetric(horizontal: 2, vertical: 1),
          child: Column(
            mainAxisSize: MainAxisSize.min,
            children: [
              AnimatedContainer(
                duration: const Duration(milliseconds: 180),
                width: isSelected ? 64 : 52,
                height: 34,
                decoration: BoxDecoration(
                  color: isSelected
                      ? _goldSoft.withValues(alpha: isDark ? 0.20 : 0.42)
                      : Colors.transparent,
                  borderRadius: BorderRadius.circular(20),
                ),
                child: Icon(
                  icon,
                  size: isSelected ? 28 : 27,
                  color: isSelected
                      ? _warmInk
                      : isDark
                      ? Colors.white.withValues(alpha: 0.78)
                      : const Color(0xFF544D40),
                ),
              ),
              const SizedBox(height: 3),
              SizedBox(
                height: 32,
                child: Center(
                  child: Text(
                    label,
                    maxLines: 2,
                    overflow: TextOverflow.visible,
                    textAlign: TextAlign.center,
                    softWrap: true,
                    style: TextStyle(
                      fontSize: labelFontSize,
                      height: 1.1,
                      fontWeight: isSelected
                          ? FontWeight.w800
                          : FontWeight.w700,
                      color: isSelected
                          ? _warmInk
                          : isDark
                          ? Colors.white.withValues(alpha: 0.72)
                          : const Color(0xFF544D40),
                    ),
                  ),
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
    final profileProvider = context.watch<ProfileProvider>();
    final profile = profileProvider.profile;

    final bool canViewRecords = _hasPermission(
      profile,
      'mobile_delivery_record_items',
    );
    final bool canViewOrders = _hasPermission(
      profile,
      'mobile_delivery_deliveries',
    );
    final bool canViewDeliveryReports = _hasPermission(
      profile,
      'mobile_delivery_reports',
    );
    final bool canViewRecordReports = _hasPermission(
      profile,
      'mobile_delivery_record_reports',
    );
    final bool canViewProfile = _hasPermission(
      profile,
      'mobile_delivery_profile',
    );

    final List<Widget> pages = [];
    final List<List<Widget>> actionsList = [];
    final List<String> titles = [];
    int recordsIndex = -1;
    int ordersIndex = -1;
    int alertsIndex = -1;
    int deliveryReportIndex = -1;
    int recordReportIndex = -1;
    int profileIndex = -1;

    // Dashboard (always show)
    pages.add(
      HomeScreen(
        key: _homeKey,
        onNavigate: (int rawIndex) {
          int targetIndex = 0;
          if (rawIndex == 1) {
            if (ordersIndex != -1) {
              targetIndex = ordersIndex;
            } else if (recordsIndex != -1) {
              targetIndex = recordsIndex;
            }
          } else if (rawIndex == 2 && alertsIndex != -1) {
            targetIndex = alertsIndex;
          }

          if (targetIndex != 0) {
            _goToTab(targetIndex);
          }
        },
      ),
    );
    actionsList.add([
      IconButton(
        onPressed: () => _homeKey.currentState?.refreshData(),
        icon: const Icon(Icons.refresh),
      ),
    ]);
    titles.add(languageProvider.t('dashboard'));

    // Records
    if (canViewRecords) {
      pages.add(OrdersScreen(key: _recordsKey, recordMode: true));
      recordsIndex = pages.length - 1;
      actionsList.add([
        IconButton(
          onPressed: () => _recordsKey.currentState?.refreshAndScrollToTop(),
          icon: const Icon(Icons.refresh),
        ),
      ]);
      titles.add(languageProvider.t('records'));
    }

    // Orders
    if (canViewOrders) {
      pages.add(OrdersScreen(key: _ordersKey));
      ordersIndex = pages.length - 1;
      actionsList.add([
        IconButton(
          onPressed: () => _ordersKey.currentState?.refreshAndScrollToTop(),
          icon: const Icon(Icons.refresh),
        ),
      ]);
      titles.add(languageProvider.t('orders'));
    }

    // Alerts (always show)
    pages.add(DeliveryAlertsScreen(key: _alertsKey));
    alertsIndex = pages.length - 1;
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

    // Recorder Report
    if (canViewRecordReports) {
      pages.add(ReportScreen(key: _recordReportKey, recordMode: true));
      recordReportIndex = pages.length - 1;
      actionsList.add([
        IconButton(
          onPressed: () => _recordReportKey.currentState?.refreshData(),
          icon: const Icon(Icons.refresh),
        ),
      ]);
      titles.add(languageProvider.t('record_report'));
    }

    // Delivery Report
    if (canViewDeliveryReports) {
      pages.add(ReportScreen(key: _deliveryReportKey));
      deliveryReportIndex = pages.length - 1;
      actionsList.add([
        IconButton(
          onPressed: () => _deliveryReportKey.currentState?.refreshData(),
          icon: const Icon(Icons.refresh),
        ),
      ]);
      titles.add(languageProvider.t('delivered_report'));
    }

    // Profile
    if (canViewProfile) {
      pages.add(ProfileScreen(key: _profileKey));
      profileIndex = pages.length - 1;
      actionsList.add([
        IconButton(
          onPressed: () => _profileKey.currentState?.refreshData(),
          icon: const Icon(Icons.refresh),
        ),
      ]);
      titles.add(languageProvider.t('profile'));
    }

    // Ensure _currentIndex is valid
    if (_currentIndex >= pages.length) {
      _currentIndex = 0;
    }

    final navigationItems = <Map<String, dynamic>>[];
    final moreItems = <Map<String, dynamic>>[];

    void addNavItem({
      required int screenIndex,
      required IconData icon,
      required IconData selectedIcon,
      required String label,
    }) {
      navigationItems.add({
        'isMore': false,
        'screenIndex': screenIndex,
        'icon': icon,
        'selectedIcon': selectedIcon,
        'label': label,
      });
    }

    addNavItem(
      screenIndex: 0,
      icon: Icons.home_outlined,
      selectedIcon: Icons.home_rounded,
      label: languageProvider.t('nav_dashboard'),
    );

    if (recordsIndex != -1) {
      addNavItem(
        screenIndex: recordsIndex,
        icon: Icons.inventory_2_outlined,
        selectedIcon: Icons.inventory_2_rounded,
        label: languageProvider.t('nav_records'),
      );
    }

    if (ordersIndex != -1) {
      addNavItem(
        screenIndex: ordersIndex,
        icon: Icons.receipt_long_outlined,
        selectedIcon: Icons.receipt_long_rounded,
        label: languageProvider.t('nav_orders'),
      );
    }

    addNavItem(
      screenIndex: alertsIndex,
      icon: Icons.notifications_outlined,
      selectedIcon: Icons.notifications_rounded,
      label: languageProvider.t('nav_alerts'),
    );

    if (recordReportIndex != -1) {
      moreItems.add({
        'icon': Icons.assignment_turned_in_outlined,
        'title': languageProvider.t('record_report'),
        'screenIndex': recordReportIndex,
      });
    }

    if (deliveryReportIndex != -1) {
      moreItems.add({
        'icon': Icons.bar_chart_outlined,
        'title': languageProvider.t('delivered_report'),
        'screenIndex': deliveryReportIndex,
      });
    }

    if (profileIndex != -1) {
      moreItems.add({
        'icon': Icons.person_outline,
        'title': languageProvider.t('profile'),
        'screenIndex': profileIndex,
      });
    }

    if (moreItems.isNotEmpty) {
      navigationItems.add({
        'isMore': true,
        'moreItems': moreItems,
        'icon': Icons.menu_open_outlined,
        'selectedIcon': Icons.menu_open,
        'label': languageProvider.t('nav_more'),
      });
    }

    int selectedNavIndex = navigationItems.indexWhere(
      (c) => c['isMore'] == false && c['screenIndex'] == _currentIndex,
    );
    if (selectedNavIndex == -1) {
      selectedNavIndex = navigationItems.indexWhere((c) => c['isMore'] == true);
      if (selectedNavIndex == -1) selectedNavIndex = 0;
    }

    return Scaffold(
      appBar: AppBar(
        title: Text(titles[_currentIndex]),
        actions: actionsList[_currentIndex],
      ),
      body: IndexedStack(index: _currentIndex, children: pages),
      bottomNavigationBar: _buildBottomNavigationBar(
        context: context,
        languageProvider: languageProvider,
        navigationItems: navigationItems,
        selectedNavIndex: selectedNavIndex,
      ),
    );
  }
}
