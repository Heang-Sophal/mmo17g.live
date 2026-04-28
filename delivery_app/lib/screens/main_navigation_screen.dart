import 'package:delivery_app/providers/language_provider.dart';
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
  final GlobalKey<DeliveryAlertsScreenState> _alertsKey =
      GlobalKey<DeliveryAlertsScreenState>();
  final GlobalKey<ProfileScreenState> _profileKey =
      GlobalKey<ProfileScreenState>();
  final GlobalKey<ReportScreenState> _reportKey =
      GlobalKey<ReportScreenState>();

  int _currentIndex = 0;

  void _goToTab(int index) {
    setState(() {
      _currentIndex = index;
    });
  }

  @override
  Widget build(BuildContext context) {
    final languageProvider = context.watch<LanguageProvider>();

    final pages = [
      HomeScreen(key: _homeKey, onNavigate: _goToTab),
      OrdersScreen(key: _ordersKey),
      DeliveryAlertsScreen(key: _alertsKey),
      ReportScreen(key: _reportKey),
      ProfileScreen(key: _profileKey),
    ];

    return Scaffold(
      appBar: AppBar(
        title: Text(_titleForIndex(languageProvider)),
        actions: _buildActions(),
      ),
      body: IndexedStack(index: _currentIndex, children: pages),
      bottomNavigationBar: NavigationBar(
        selectedIndex: _currentIndex,
        onDestinationSelected: _goToTab,
        destinations: [
          NavigationDestination(
            icon: const Icon(Icons.home_outlined),
            selectedIcon: const Icon(Icons.home_rounded),
            label: languageProvider.t('dashboard'),
          ),
          NavigationDestination(
            icon: const Icon(Icons.receipt_long_outlined),
            selectedIcon: const Icon(Icons.receipt_long_rounded),
            label: languageProvider.t('orders'),
          ),
          NavigationDestination(
            icon: const Icon(Icons.notifications_outlined),
            selectedIcon: const Icon(Icons.notifications_rounded),
            label: languageProvider.t('alerts'),
          ),
          NavigationDestination(
            icon: const Icon(Icons.bar_chart_outlined),
            selectedIcon: const Icon(Icons.bar_chart_rounded),
            label: languageProvider.t('report'),
          ),
          NavigationDestination(
            icon: const Icon(Icons.person_outline),
            selectedIcon: const Icon(Icons.person_rounded),
            label: languageProvider.t('profile'),
          ),
        ],
      ),
    );
  }

  List<Widget> _buildActions() {
    switch (_currentIndex) {
      case 0:
        return [
          IconButton(
            onPressed: () => _homeKey.currentState?.refreshData(),
            icon: const Icon(Icons.refresh),
          ),
        ];
      case 1:
        return [
          IconButton(
            onPressed: () => _ordersKey.currentState?.refreshAndScrollToTop(),
            icon: const Icon(Icons.refresh),
          ),
        ];
      case 2:
        return [
          TextButton(
            onPressed: () => _alertsKey.currentState?.markAllRead(),
            child: Text(context.read<LanguageProvider>().t('mark_all_read')),
          ),
          IconButton(
            onPressed: () => _alertsKey.currentState?.refreshData(),
            icon: const Icon(Icons.refresh),
          ),
        ];
      case 3:
        return [
          IconButton(
            onPressed: () => _reportKey.currentState?.refreshData(),
            icon: const Icon(Icons.refresh),
          ),
        ];
      case 4:
        return [
          IconButton(
            onPressed: () => _profileKey.currentState?.refreshData(),
            icon: const Icon(Icons.refresh),
          ),
        ];
      default:
        return const [];
    }
  }

  String _titleForIndex(LanguageProvider languageProvider) {
    switch (_currentIndex) {
      case 0:
        return languageProvider.t('dashboard');
      case 1:
        return languageProvider.t('orders');
      case 2:
        return languageProvider.t('alerts');
      case 3:
        return languageProvider.t('report');
      case 4:
        return languageProvider.t('profile');
      default:
        return languageProvider.t('app_name');
    }
  }
}
