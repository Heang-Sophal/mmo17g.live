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
  final GlobalKey<ReportScreenState> _recordReportKey =
      GlobalKey<ReportScreenState>();
  final GlobalKey<ReportScreenState> _deliveryReportKey =
      GlobalKey<ReportScreenState>();

  int _currentIndex = 0;
  int? _recordsIndex;
  int? _alertsIndex;

  void _goToTab(int index) {
    setState(() {
      _currentIndex = index;
    });

    WidgetsBinding.instance.addPostFrameCallback((_) {
      if (!mounted) return;

      if (index == _recordsIndex) {
        _recordsKey.currentState?.refreshData();
      } else if (index == _alertsIndex) {
        _alertsKey.currentState?.refreshData();
      }
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
      return permissions.map((value) => value.toString()).contains(permission);
    }

    final authPermissions = authUser?.mobilePermissions ?? const [];
    if (authPermissions.isNotEmpty) {
      return authPermissions.contains(permission);
    }

    return true; // Default true if no permissions list found
  }

  @override
  Widget build(BuildContext context) {
    final languageProvider = context.watch<LanguageProvider>();
    final authProvider = context.watch<AuthProvider>();
    final profileProvider = context.watch<ProfileProvider>();
    final profile = profileProvider.profile;
    final authUser = authProvider.user;

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
    final bool canViewProfile = _hasPermission(
      profile,
      authUser,
      'mobile_delivery_profile',
    );

    final bool isDark = Theme.of(context).brightness == Brightness.dark;
    final Color activeColor = const Color(0xFFD6A735); // Gold Primary Color
    final Color inactiveColor = isDark
        ? Colors.white60
        : const Color(0xFF64748B);

    final String? avatarUrl =
        profile?['avatar_url']?.toString() ?? authProvider.user?.avatarUrl;

    final List<Widget> pages = [];
    final List<String> navLabels = [];
    final List<Widget> bottomNavItems = [];
    final List<List<Widget>> actionsList = [];
    final List<String> titles = [];
    final List<_MenuNavItem> menuItems = [];

    int buildIndex = 0;
    _recordsIndex = null;
    _alertsIndex = null;

    // Dashboard (always show)
    pages.add(
      HomeScreen(
        key: _homeKey,
        onNavigate: (int rawIndex) {
          int targetIndex = 0;
          if (rawIndex == 1) {
            // Wants to go to Orders or Records
            final ordersIndex = navLabels.indexWhere(
              (label) => label == languageProvider.t('orders'),
            );
            final recordsIndex = navLabels.indexWhere(
              (label) => label == languageProvider.t('records'),
            );
            if (ordersIndex != -1) {
              targetIndex = ordersIndex;
            } else if (recordsIndex != -1) {
              targetIndex = recordsIndex;
            }
          } else if (rawIndex == 2) {
            // Wants to go to Alerts
            final alertsIndex = navLabels.indexWhere(
              (label) => label == languageProvider.t('alerts'),
            );
            if (alertsIndex != -1) {
              targetIndex = alertsIndex;
            }
          }

          if (targetIndex != 0) {
            _goToTab(targetIndex);
          }
        },
      ),
    );

    navLabels.add(languageProvider.t('dashboard'));
    bottomNavItems.add(
      _buildNavItem(
        icon: Icons.home_outlined,
        selectedIcon: Icons.home_rounded,
        label: languageProvider.t('dashboard'),
        index: buildIndex,
        isSelected: _currentIndex == buildIndex,
        activeColor: activeColor,
        inactiveColor: inactiveColor,
      ),
    );
    actionsList.add([
      IconButton(
        onPressed: () => _homeKey.currentState?.refreshData(),
        icon: const Icon(Icons.refresh),
      ),
    ]);
    titles.add(languageProvider.t('dashboard'));
    buildIndex++;

    // Records
    if (canViewRecords) {
      pages.add(OrdersScreen(key: _recordsKey, recordMode: true));
      _recordsIndex = buildIndex;
      navLabels.add(languageProvider.t('records'));
      bottomNavItems.add(
        _buildNavItem(
          icon: Icons.inventory_2_outlined,
          selectedIcon: Icons.inventory_2_rounded,
          label: languageProvider.t('records'),
          index: buildIndex,
          isSelected: _currentIndex == buildIndex,
          activeColor: activeColor,
          inactiveColor: inactiveColor,
        ),
      );
      actionsList.add([
        IconButton(
          onPressed: () => _recordsKey.currentState?.refreshAndScrollToTop(),
          icon: const Icon(Icons.refresh),
        ),
      ]);
      titles.add(languageProvider.t('records'));
      buildIndex++;
    }

    // Orders
    if (canViewOrders) {
      pages.add(OrdersScreen(key: _ordersKey));
      navLabels.add(languageProvider.t('orders'));
      bottomNavItems.add(
        _buildNavItem(
          icon: Icons.receipt_long_outlined,
          selectedIcon: Icons.receipt_long_rounded,
          label: languageProvider.t('orders'),
          index: buildIndex,
          isSelected: _currentIndex == buildIndex,
          activeColor: activeColor,
          inactiveColor: inactiveColor,
        ),
      );
      actionsList.add([
        IconButton(
          onPressed: () => _ordersKey.currentState?.refreshAndScrollToTop(),
          icon: const Icon(Icons.refresh),
        ),
      ]);
      titles.add(languageProvider.t('orders'));
      buildIndex++;
    }

    // Alerts (always show)
    pages.add(DeliveryAlertsScreen(key: _alertsKey));
    _alertsIndex = buildIndex;
    navLabels.add(languageProvider.t('alerts'));
    bottomNavItems.add(
      _buildNavItem(
        icon: Icons.notifications_outlined,
        selectedIcon: Icons.notifications_rounded,
        label: languageProvider.t('alerts'),
        index: buildIndex,
        isSelected: _currentIndex == buildIndex,
        activeColor: activeColor,
        inactiveColor: inactiveColor,
      ),
    );
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

    // Record Reports
    if (canViewRecordReports) {
      pages.add(ReportScreen(key: _recordReportKey, recordMode: true));
      navLabels.add(languageProvider.t('record_report'));
      menuItems.add(
        _MenuNavItem(
          icon: Icons.fact_check_outlined,
          label: languageProvider.t('record_report'),
          index: buildIndex,
        ),
      );
      actionsList.add([
        IconButton(
          onPressed: () => _recordReportKey.currentState?.refreshData(),
          icon: const Icon(Icons.refresh),
        ),
      ]);
      titles.add(languageProvider.t('record_report'));
      buildIndex++;
    }

    // Delivery Reports
    if (canViewDeliveryReports) {
      pages.add(ReportScreen(key: _deliveryReportKey));
      navLabels.add(languageProvider.t('delivered_report'));
      menuItems.add(
        _MenuNavItem(
          icon: Icons.bar_chart_outlined,
          label: languageProvider.t('delivered_report'),
          index: buildIndex,
        ),
      );
      actionsList.add([
        IconButton(
          onPressed: () => _deliveryReportKey.currentState?.refreshData(),
          icon: const Icon(Icons.refresh),
        ),
      ]);
      titles.add(languageProvider.t('report'));
      buildIndex++;
    }

    // Profile
    if (canViewProfile) {
      pages.add(ProfileScreen(key: _profileKey));
      navLabels.add(languageProvider.t('settings'));
      bottomNavItems.add(
        _buildNavItem(
          icon: Icons.person_outline,
          selectedIcon: Icons.person_rounded,
          label: languageProvider.t('settings'),
          index: buildIndex,
          isSelected: _currentIndex == buildIndex,
          activeColor: activeColor,
          inactiveColor: inactiveColor,
          avatarUrl: avatarUrl,
        ),
      );
      actionsList.add([
        IconButton(
          onPressed: () => _profileKey.currentState?.refreshData(),
          icon: const Icon(Icons.refresh),
        ),
      ]);
      titles.add(languageProvider.t('settings'));
      buildIndex++;
    }

    // Ensure _currentIndex is valid
    if (_currentIndex >= pages.length) {
      _currentIndex = 0;
    }

    return Scaffold(
      appBar: AppBar(
        leadingWidth: menuItems.isEmpty ? null : 92,
        leading: menuItems.isEmpty
            ? null
            : _buildMenuButton(
                context: context,
                languageProvider: languageProvider,
                menuItems: menuItems,
                activeColor: activeColor,
                inactiveColor: inactiveColor,
              ),
        title: Text(titles[_currentIndex]),
        actions: actionsList[_currentIndex],
        elevation: 0,
      ),
      body: IndexedStack(index: _currentIndex, children: pages),
      bottomNavigationBar: Container(
        decoration: BoxDecoration(
          color: Theme.of(context).scaffoldBackgroundColor,
          boxShadow: [
            BoxShadow(
              color: isDark
                  ? Colors.black26
                  : Colors.black.withValues(alpha: 0.05),
              blurRadius: 10,
              offset: const Offset(0, -4),
            ),
          ],
        ),
        child: SafeArea(
          top: false,
          child: SizedBox(
            height: 60,
            child: Row(
              mainAxisAlignment: MainAxisAlignment.spaceAround,
              children: bottomNavItems,
            ),
          ),
        ),
      ),
    );
  }

  Widget _buildMenuButton({
    required BuildContext context,
    required LanguageProvider languageProvider,
    required List<_MenuNavItem> menuItems,
    required Color activeColor,
    required Color inactiveColor,
  }) {
    final isSelected = menuItems.any((item) => item.index == _currentIndex);
    final foregroundColor = isSelected ? activeColor : inactiveColor;

    return TextButton.icon(
      onPressed: () => _showMenuSheet(
        context: context,
        languageProvider: languageProvider,
        menuItems: menuItems,
        activeColor: activeColor,
      ),
      icon: Icon(Icons.menu_rounded, color: foregroundColor, size: 22),
      label: Text(
        languageProvider.t('menu'),
        maxLines: 1,
        overflow: TextOverflow.ellipsis,
        style: TextStyle(
          color: foregroundColor,
          fontSize: 12,
          fontWeight: FontWeight.w700,
        ),
      ),
      style: TextButton.styleFrom(
        padding: const EdgeInsets.only(left: 12, right: 8),
        minimumSize: Size.zero,
        tapTargetSize: MaterialTapTargetSize.shrinkWrap,
      ),
    );
  }

  void _showMenuSheet({
    required BuildContext context,
    required LanguageProvider languageProvider,
    required List<_MenuNavItem> menuItems,
    required Color activeColor,
  }) {
    showModalBottomSheet<void>(
      context: context,
      showDragHandle: true,
      builder: (context) {
        return SafeArea(
          child: Column(
            mainAxisSize: MainAxisSize.min,
            children: [
              Padding(
                padding: const EdgeInsets.fromLTRB(20, 0, 20, 8),
                child: Align(
                  alignment: Alignment.centerLeft,
                  child: Text(
                    languageProvider.t('menu'),
                    style: Theme.of(context).textTheme.titleMedium?.copyWith(
                      fontWeight: FontWeight.w700,
                    ),
                  ),
                ),
              ),
              for (final item in menuItems)
                ListTile(
                  leading: Icon(
                    item.icon,
                    color: item.index == _currentIndex ? activeColor : null,
                  ),
                  title: Text(item.label),
                  selected: item.index == _currentIndex,
                  selectedColor: activeColor,
                  onTap: () {
                    Navigator.pop(context);
                    _goToTab(item.index);
                  },
                ),
              const SizedBox(height: 8),
            ],
          ),
        );
      },
    );
  }

  Widget _buildNavItem({
    required IconData icon,
    required IconData selectedIcon,
    required String label,
    required int index,
    required bool isSelected,
    required Color activeColor,
    required Color inactiveColor,
    String? avatarUrl,
  }) {
    Widget iconWidget = avatarUrl != null && avatarUrl.isNotEmpty
        ? (isSelected
              ? Container(
                  key: const ValueKey('avatar_selected'),
                  padding: const EdgeInsets.all(2),
                  decoration: BoxDecoration(
                    shape: BoxShape.circle,
                    border: Border.all(color: activeColor, width: 2),
                  ),
                  child: CircleAvatar(
                    radius: 11,
                    backgroundImage: NetworkImage(avatarUrl),
                    backgroundColor: Colors.transparent,
                  ),
                )
              : CircleAvatar(
                  key: const ValueKey('avatar_unselected'),
                  radius: 13,
                  backgroundImage: NetworkImage(avatarUrl),
                  backgroundColor: Colors.transparent,
                ))
        : Icon(
            isSelected ? selectedIcon : icon,
            key: ValueKey<bool>(isSelected),
            color: isSelected ? activeColor : inactiveColor,
            size: 26,
          );

    return Expanded(
      child: GestureDetector(
        behavior: HitTestBehavior.opaque,
        onTap: () => _goToTab(index),
        child: Column(
          mainAxisSize: MainAxisSize.min,
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            AnimatedSwitcher(
              duration: const Duration(milliseconds: 250),
              transitionBuilder: (Widget child, Animation<double> animation) {
                return ScaleTransition(scale: animation, child: child);
              },
              child: iconWidget,
            ),
            const SizedBox(height: 4),
            Text(
              label,
              style: TextStyle(
                fontSize: 11,
                fontWeight: isSelected ? FontWeight.w600 : FontWeight.w500,
                color: isSelected ? activeColor : inactiveColor,
              ),
              maxLines: 1,
              overflow: TextOverflow.ellipsis,
            ),
          ],
        ),
      ),
    );
  }
}

class _MenuNavItem {
  const _MenuNavItem({
    required this.icon,
    required this.label,
    required this.index,
  });

  final IconData icon;
  final String label;
  final int index;
}
