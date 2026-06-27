import 'package:flutter/material.dart';
import 'package:provider/provider.dart';
import 'package:seller_app/core/api_cache.dart';
import 'package:seller_app/providers/auth_provider.dart';
import 'package:seller_app/providers/language_provider.dart';
import 'package:seller_app/providers/profile_provider.dart';
import 'package:seller_app/config/api_config.dart';
import 'package:seller_app/screens/delivery_alerts_screen.dart';
import 'package:seller_app/screens/pos_screen.dart';
import 'package:seller_app/screens/products_screen.dart';
import 'package:seller_app/screens/orders_screen.dart';
import 'package:seller_app/screens/sales_by_seller_report_screen.dart';
import 'package:seller_app/controllers/navigation_bar_controller.dart';
import 'package:seller_app/widgets/cached_image.dart';
import 'dart:convert';
import 'package:http/http.dart' as http;

const Color _goldPrimary = Color(0xFFD6A735);
const Color _goldAccent = Color(0xFFFFD86A);
const Color _goldSoft = Color(0xFFFFE8A7);
const Color _goldDeep = Color(0xFF8D6208);
const Color _warmInk = Color(0xFF201607);
const Color _warmMuted = Color(0xFF735F33);
const Color _warmBackground = Color(0xFFFFFBF2);
const Color _warmSurface = Color(0xFFFFFEFA);
const Color _darkBackground = Color(0xFF151107);
const Color _darkSurface = Color(0xFF21190B);
const Color _tealAccent = Color(0xFF119C8B);
const Color _greenAccent = Color(0xFF12B76A);
const Color _redAccent = Color(0xFFF04438);

class HomeScreen extends StatefulWidget {
  const HomeScreen({super.key, this.menuButton});

  final Widget? menuButton;

  @override
  State<HomeScreen> createState() => _HomeScreenState();
}

class _HomeScreenState extends State<HomeScreen> {
  bool _isLoading = true;
  String? _error;
  Map<String, dynamic> _dashboardData = {};
  List<Map<String, dynamic>> _recentOrders = [];

  // For auto-hide bottom navigation
  final ScrollController _scrollController = ScrollController();
  double _lastScrollOffset = 0;

  @override
  void initState() {
    super.initState();
    _scrollController.addListener(_onScroll);
    _loadDashboardData();
  }

  @override
  void dispose() {
    _scrollController.removeListener(_onScroll);
    _scrollController.dispose();
    super.dispose();
  }

  Future<void> refreshData() => _loadDashboardData();

  void _onScroll() {
    final currentOffset = _scrollController.offset;
    final difference = currentOffset - _lastScrollOffset;
    final navController = context.read<NavigationBarController>();

    // If scrolled down more than 5 pixels, hide navigation
    if (difference > 5 && currentOffset > 50) {
      navController.hide();
    }
    // If scrolled up more than 5 pixels, show navigation
    else if (difference < -5) {
      navController.show();
    }

    _lastScrollOffset = currentOffset;
  }

  Future<void> _loadDashboardData() async {
    final authProvider = Provider.of<AuthProvider>(context, listen: false);
    final userId = authProvider.user?.id;
    final token = authProvider.token;

    if (userId == null) {
      setState(() {
        _error = 'User not logged in';
        _isLoading = false;
      });
      return;
    }

    setState(() {
      _isLoading = true;
      _error = null;
    });

    try {
      final endpoint = authProvider.isDeliveryUser
          ? '${ApiConfig.baseUrl}/delivery/dashboard'
          : '${ApiConfig.baseUrl}/dashboard/seller?user_id=$userId';
      final cacheKey = authProvider.isDeliveryUser
          ? 'seller_home_delivery_dashboard_$userId'
          : 'seller_home_dashboard_$userId';

      final headers = <String, String>{'Accept': 'application/json'};
      if (token != null && token.isNotEmpty) {
        headers['Authorization'] = 'Bearer $token';
      }

      final response = await http
          .get(Uri.parse(endpoint), headers: headers)
          .timeout(const Duration(seconds: 10));

      if (response.statusCode == 200) {
        final data = json.decode(response.body);
        if (data['success'] == true) {
          await ApiCache.set(cacheKey, Map<String, dynamic>.from(data));
          setState(() {
            _dashboardData = data['data'] ?? {};
            _recentOrders = List<Map<String, dynamic>>.from(
              data['data']['recent_orders'] ?? [],
            );
            _isLoading = false;
          });
        } else {
          setState(() {
            _error = data['message'] ?? 'Failed to load dashboard';
            _isLoading = false;
          });
        }
      } else {
        setState(() {
          _error = 'Failed to load dashboard';
          _isLoading = false;
        });
      }
    } catch (e) {
      final cacheKey = authProvider.isDeliveryUser
          ? 'seller_home_delivery_dashboard_$userId'
          : 'seller_home_dashboard_$userId';
      final cached = await ApiCache.getAny(cacheKey);
      if (cached?['success'] == true) {
        final data = cached?['data'] ?? {};
        setState(() {
          _dashboardData = Map<String, dynamic>.from(data as Map);
          _recentOrders = List<Map<String, dynamic>>.from(
            _dashboardData['recent_orders'] ?? [],
          );
          _isLoading = false;
          _error = null;
        });
        return;
      }
      setState(() {
        _error = 'Error: $e';
        _isLoading = false;
      });
    }
  }

  @override
  Widget build(BuildContext context) {
    final authProvider = Provider.of<AuthProvider>(context);
    final languageProvider = Provider.of<LanguageProvider>(context);
    final userName = authProvider.user?.name ?? 'User';
    final isDark = Theme.of(context).brightness == Brightness.dark;
    final backgroundColor = isDark ? _darkBackground : _warmBackground;

    return Scaffold(
      backgroundColor: backgroundColor,
      appBar: AppBar(
        elevation: 0,
        scrolledUnderElevation: 0,
        backgroundColor: backgroundColor,
        surfaceTintColor: Colors.transparent,
        leadingWidth: widget.menuButton == null ? null : 96,
        leading: widget.menuButton,
        title: Text(
          languageProvider.t('dashboard'),
          style: TextStyle(
            fontSize: 20,
            fontWeight: FontWeight.w700,
            color: isDark ? _goldSoft : _warmInk,
          ),
        ),
        actions: [
          IconButton(
            icon: Icon(
              Icons.refresh_rounded,
              color: isDark ? _goldSoft : _warmInk,
            ),
            onPressed: _loadDashboardData,
            tooltip: languageProvider.t('refresh'),
          ),
        ],
      ),
      body: _isLoading
          ? const Center(child: CircularProgressIndicator())
          : _error != null
          ? _buildErrorState()
          : RefreshIndicator(
              onRefresh: _loadDashboardData,
              child: SingleChildScrollView(
                controller: _scrollController,
                physics: const AlwaysScrollableScrollPhysics(
                  parent: BouncingScrollPhysics(),
                ),
                padding: const EdgeInsets.fromLTRB(16, 8, 16, 24),
                child: Column(
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: [
                    _buildWelcomeSection(userName),
                    const SizedBox(height: 28),
                    _buildSectionHeader(
                      title: languageProvider.t('overview'),
                      icon: Icons.auto_graph_rounded,
                    ),
                    const SizedBox(height: 14),
                    _buildStatsGrid(),
                    const SizedBox(height: 28),
                    _buildSectionHeader(
                      title: languageProvider.t('quick_actions'),
                      icon: Icons.flash_on_rounded,
                    ),
                    const SizedBox(height: 14),
                    _buildQuickActions(),
                    const SizedBox(height: 28),
                    _buildSectionHeader(
                      title: languageProvider.t('recent_orders'),
                      icon: Icons.schedule_rounded,
                      trailing: _recentOrders.isEmpty
                          ? null
                          : '${_recentOrders.length.clamp(0, 10)}',
                    ),
                    const SizedBox(height: 14),
                    _buildRecentOrders(),
                    const SizedBox(height: 12),
                  ],
                ),
              ),
            ),
    );
  }

  Widget _buildSectionHeader({
    required String title,
    required IconData icon,
    String? trailing,
  }) {
    final isDark = Theme.of(context).brightness == Brightness.dark;
    final titleColor = isDark ? _goldSoft : _warmInk;
    final mutedColor = isDark ? Colors.white60 : _warmMuted;

    return Row(
      children: [
        Container(
          width: 38,
          height: 38,
          decoration: BoxDecoration(
            color: _goldPrimary.withValues(alpha: isDark ? 0.22 : 0.16),
            borderRadius: BorderRadius.circular(14),
          ),
          child: Icon(icon, size: 20, color: _goldDeep),
        ),
        const SizedBox(width: 12),
        Expanded(
          child: Text(
            title,
            style: TextStyle(
              fontSize: 20,
              fontWeight: FontWeight.w800,
              color: titleColor,
            ),
          ),
        ),
        if (trailing != null)
          Container(
            padding: const EdgeInsets.symmetric(horizontal: 10, vertical: 6),
            decoration: BoxDecoration(
              color: isDark
                  ? Colors.white.withValues(alpha: 0.08)
                  : _warmSurface,
              borderRadius: BorderRadius.circular(999),
              border: Border.all(
                color: isDark
                    ? Colors.white.withValues(alpha: 0.12)
                    : _goldSoft.withValues(alpha: 0.78),
              ),
            ),
            child: Text(
              trailing,
              style: TextStyle(
                fontSize: 12,
                fontWeight: FontWeight.w700,
                color: mutedColor,
              ),
            ),
          ),
      ],
    );
  }

  Widget _buildErrorState() {
    final languageProvider = Provider.of<LanguageProvider>(context);
    final isDark = Theme.of(context).brightness == Brightness.dark;

    return Center(
      child: Padding(
        padding: const EdgeInsets.all(24),
        child: Container(
          width: double.infinity,
          padding: const EdgeInsets.all(24),
          decoration: BoxDecoration(
            color: isDark ? _darkSurface : _warmSurface,
            borderRadius: BorderRadius.circular(28),
            border: Border.all(
              color: isDark
                  ? Colors.white.withValues(alpha: 0.08)
                  : _goldSoft.withValues(alpha: 0.72),
            ),
            boxShadow: [
              BoxShadow(
                color: Colors.black.withValues(alpha: isDark ? 0.18 : 0.06),
                blurRadius: 24,
                offset: const Offset(0, 12),
              ),
            ],
          ),
          child: Column(
            mainAxisSize: MainAxisSize.min,
            children: [
              Container(
                width: 72,
                height: 72,
                decoration: BoxDecoration(
                  color: Colors.red.withValues(alpha: 0.1),
                  borderRadius: BorderRadius.circular(24),
                ),
                child: const Icon(
                  Icons.error_outline_rounded,
                  size: 36,
                  color: Colors.red,
                ),
              ),
              const SizedBox(height: 18),
              Text(
                _error!,
                style: TextStyle(
                  color: isDark ? Colors.white70 : _warmMuted,
                  fontSize: 16,
                  height: 1.5,
                ),
                textAlign: TextAlign.center,
              ),
              const SizedBox(height: 20),
              ElevatedButton.icon(
                onPressed: _loadDashboardData,
                icon: const Icon(Icons.refresh_rounded),
                label: Text(languageProvider.t('retry')),
                style: ElevatedButton.styleFrom(
                  padding: const EdgeInsets.symmetric(
                    horizontal: 18,
                    vertical: 12,
                  ),
                  shape: RoundedRectangleBorder(
                    borderRadius: BorderRadius.circular(16),
                  ),
                ),
              ),
            ],
          ),
        ),
      ),
    );
  }

  Widget _buildWelcomeSection(String userName) {
    final authProvider = Provider.of<AuthProvider>(context);
    final languageProvider = Provider.of<LanguageProvider>(context);
    final isDark = Theme.of(context).brightness == Brightness.dark;
    final avatarUrl = authProvider.user?.avatarUrl;
    final salesData = _dashboardData['sales'] ?? {};
    final ordersData = _dashboardData['orders'] ?? {};
    final warehouseData = _dashboardData['warehouse'] ?? {};
    final alertsData = _dashboardData['alerts'] ?? {};
    final todaySales = (salesData['today'] ?? 0).toDouble();
    final todayOrders = (ordersData['today'] ?? 0).toInt();
    final isDelivery = authProvider.isDeliveryUser;
    final unreadAlerts = (alertsData['unread'] ?? 0).toInt();
    final heroTextColor = isDark ? _goldSoft : _warmInk;
    final heroMutedColor = isDark
        ? _goldSoft.withValues(alpha: 0.72)
        : _goldDeep;
    final heroGlassColor = isDark
        ? Colors.white.withValues(alpha: 0.10)
        : Colors.white.withValues(alpha: 0.28);
    final heroBorderColor = isDark
        ? Colors.white.withValues(alpha: 0.12)
        : Colors.white.withValues(alpha: 0.34);

    final summaryLabel = isDelivery
        ? languageProvider.t('assigned_warehouse')
        : languageProvider.t('todays_sales');
    final summaryValue = isDelivery
        ? (warehouseData['name'] ??
              authProvider.user?.assignedWarehouseName ??
              '-')
        : '\$${todaySales.toStringAsFixed(2)}';
    final summaryIcon = isDelivery
        ? Icons.warehouse_rounded
        : Icons.payments_outlined;

    return Container(
      decoration: BoxDecoration(
        borderRadius: BorderRadius.circular(30),
        gradient: LinearGradient(
          colors: isDark
              ? const [Color(0xFF9A6B00), Color(0xFF5E3E00), Color(0xFF21170A)]
              : [_goldAccent, _goldPrimary, _goldDeep],
          begin: Alignment.topLeft,
          end: Alignment.bottomRight,
        ),
        boxShadow: [
          BoxShadow(
            color: _goldDeep.withValues(alpha: isDark ? 0.24 : 0.24),
            blurRadius: 32,
            offset: const Offset(0, 18),
          ),
        ],
      ),
      child: Stack(
        children: [
          Positioned(
            top: -42,
            right: -14,
            child: Container(
              width: 120,
              height: 120,
              decoration: BoxDecoration(
                shape: BoxShape.circle,
                color: Colors.white.withValues(alpha: isDark ? 0.08 : 0.16),
              ),
            ),
          ),
          Positioned(
            bottom: -62,
            left: -12,
            child: Container(
              width: 138,
              height: 138,
              decoration: BoxDecoration(
                shape: BoxShape.circle,
                color: Colors.white.withValues(alpha: isDark ? 0.07 : 0.12),
              ),
            ),
          ),
          Padding(
            padding: const EdgeInsets.all(22),
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                Row(
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: [
                    Container(
                      width: 58,
                      height: 58,
                      decoration: BoxDecoration(
                        color: heroGlassColor,
                        borderRadius: BorderRadius.circular(20),
                        border: Border.all(color: heroBorderColor),
                      ),
                      child: ClipRRect(
                        borderRadius: BorderRadius.circular(20),
                        child: (avatarUrl != null && avatarUrl.isNotEmpty)
                            ? CachedImage(
                                url: avatarUrl,
                                fit: BoxFit.cover,
                                cacheWidth: 180,
                                cacheHeight: 180,
                                errorWidget: Icon(
                                  Icons.person_rounded,
                                  color: heroTextColor,
                                  size: 28,
                                ),
                              )
                            : Icon(
                                Icons.person_rounded,
                                color: heroTextColor,
                                size: 28,
                              ),
                      ),
                    ),
                    const SizedBox(width: 14),
                    Expanded(
                      child: Column(
                        crossAxisAlignment: CrossAxisAlignment.start,
                        children: [
                          Container(
                            padding: const EdgeInsets.symmetric(
                              horizontal: 12,
                              vertical: 7,
                            ),
                            decoration: BoxDecoration(
                              color: heroGlassColor,
                              borderRadius: BorderRadius.circular(999),
                              border: Border.all(color: heroBorderColor),
                            ),
                            child: Text(
                              isDelivery
                                  ? languageProvider.t('delivery_mode')
                                  : languageProvider.t('welcome_user'),
                              style: TextStyle(
                                color: heroTextColor,
                                fontSize: 12,
                                fontWeight: FontWeight.w600,
                              ),
                            ),
                          ),
                          const SizedBox(height: 10),
                          Text(
                            userName,
                            maxLines: 1,
                            overflow: TextOverflow.ellipsis,
                            style: TextStyle(
                              color: heroTextColor,
                              fontSize: 24,
                              height: 1.06,
                              fontWeight: FontWeight.w800,
                              shadows: [
                                Shadow(
                                  color: Colors.white.withValues(
                                    alpha: isDark ? 0.08 : 0.22,
                                  ),
                                  blurRadius: 8,
                                  offset: const Offset(0, 2),
                                ),
                              ],
                            ),
                          ),
                        ],
                      ),
                    ),
                    const SizedBox(width: 12),
                    Container(
                      padding: const EdgeInsets.symmetric(
                        horizontal: 12,
                        vertical: 10,
                      ),
                      decoration: BoxDecoration(
                        color: heroGlassColor,
                        borderRadius: BorderRadius.circular(18),
                        border: Border.all(color: heroBorderColor),
                      ),
                      child: Column(
                        children: [
                          Icon(
                            Icons.notifications_active_outlined,
                            color: heroTextColor,
                            size: 18,
                          ),
                          const SizedBox(height: 6),
                          Text(
                            '$unreadAlerts',
                            style: TextStyle(
                              color: heroTextColor,
                              fontSize: 16,
                              fontWeight: FontWeight.w800,
                            ),
                          ),
                        ],
                      ),
                    ),
                  ],
                ),
                const SizedBox(height: 20),
                Row(
                  children: [
                    Expanded(
                      child: _buildHeroMetricPill(
                        label: summaryLabel,
                        value: summaryValue,
                        icon: summaryIcon,
                        textColor: heroTextColor,
                        mutedColor: heroMutedColor,
                        panelColor: heroGlassColor,
                        borderColor: heroBorderColor,
                      ),
                    ),
                    const SizedBox(width: 12),
                    Expanded(
                      child: _buildHeroMetricPill(
                        label: languageProvider.t('todays_orders'),
                        value: '$todayOrders',
                        icon: isDelivery
                            ? Icons.local_shipping_outlined
                            : Icons.shopping_bag_outlined,
                        textColor: heroTextColor,
                        mutedColor: heroMutedColor,
                        panelColor: heroGlassColor,
                        borderColor: heroBorderColor,
                      ),
                    ),
                  ],
                ),
              ],
            ),
          ),
        ],
      ),
    );
  }

  Widget _buildHeroMetricPill({
    required String label,
    required String value,
    required IconData icon,
    required Color textColor,
    required Color mutedColor,
    required Color panelColor,
    required Color borderColor,
  }) {
    return Container(
      padding: const EdgeInsets.all(14),
      decoration: BoxDecoration(
        color: panelColor,
        borderRadius: BorderRadius.circular(22),
        border: Border.all(color: borderColor),
      ),
      child: Row(
        children: [
          Container(
            width: 38,
            height: 38,
            decoration: BoxDecoration(
              color: Colors.white.withValues(alpha: 0.22),
              borderRadius: BorderRadius.circular(14),
            ),
            child: Icon(icon, size: 20, color: textColor),
          ),
          const SizedBox(width: 12),
          Expanded(
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                Text(
                  label,
                  maxLines: 1,
                  overflow: TextOverflow.ellipsis,
                  style: TextStyle(
                    color: mutedColor,
                    fontSize: 11,
                    fontWeight: FontWeight.w600,
                  ),
                ),
                const SizedBox(height: 4),
                Text(
                  value,
                  maxLines: 1,
                  overflow: TextOverflow.ellipsis,
                  style: TextStyle(
                    color: textColor,
                    fontSize: 18,
                    fontWeight: FontWeight.w800,
                  ),
                ),
              ],
            ),
          ),
        ],
      ),
    );
  }

  Widget _buildStatsGrid() {
    final authProvider = Provider.of<AuthProvider>(context);
    final languageProvider = Provider.of<LanguageProvider>(context);
    final salesData = _dashboardData['sales'] ?? {};
    final ordersData = _dashboardData['orders'] ?? {};
    final productsData = _dashboardData['products'] ?? {};
    final alertsData = _dashboardData['alerts'] ?? {};

    final todaySales = (salesData['today'] ?? 0).toDouble();
    final todayOrders = (ordersData['today'] ?? 0).toInt();
    final totalProducts = (productsData['total'] ?? 0).toInt();
    final pendingOrders = (ordersData['pending'] ?? 0).toInt();
    final deliveredOrders = (ordersData['delivered'] ?? 0).toInt();
    final unreadAlerts = (alertsData['unread'] ?? 0).toInt();

    final stats = authProvider.isDeliveryUser
        ? [
            {
              'title': languageProvider.t('todays_orders'),
              'value': '$todayOrders',
              'icon': Icons.local_shipping_outlined,
              'color': _goldDeep,
            },
            {
              'title': languageProvider.t('pending'),
              'value': '$pendingOrders',
              'icon': Icons.pending_actions_rounded,
              'color': _goldPrimary,
            },
            {
              'title': languageProvider.t('delivered'),
              'value': '$deliveredOrders',
              'icon': Icons.task_alt_rounded,
              'color': _greenAccent,
            },
            {
              'title': languageProvider.t('unread_alerts'),
              'value': '$unreadAlerts',
              'icon': Icons.notifications_active_outlined,
              'color': _redAccent,
            },
          ]
        : [
            {
              'title': languageProvider.t('todays_sales'),
              'value': '\$${todaySales.toStringAsFixed(2)}',
              'icon': Icons.attach_money_rounded,
              'color': _goldDeep,
            },
            {
              'title': languageProvider.t('todays_orders'),
              'value': '$todayOrders',
              'icon': Icons.shopping_cart_checkout_rounded,
              'color': _tealAccent,
            },
            {
              'title': languageProvider.t('products'),
              'value': '$totalProducts',
              'icon': Icons.inventory_2_rounded,
              'color': _goldPrimary,
            },
            {
              'title': languageProvider.t('unread_alerts'),
              'value': '$unreadAlerts',
              'icon': Icons.notifications_active_outlined,
              'color': _redAccent,
            },
          ];

    return GridView.builder(
      shrinkWrap: true,
      physics: const NeverScrollableScrollPhysics(),
      gridDelegate: const SliverGridDelegateWithFixedCrossAxisCount(
        crossAxisCount: 2,
        mainAxisSpacing: 14,
        crossAxisSpacing: 14,
        childAspectRatio: 1.08,
      ),
      itemCount: stats.length,
      itemBuilder: (context, index) {
        final stat = stats[index];
        return _buildStatCard(
          title: stat['title'] as String,
          value: stat['value'] as String,
          icon: stat['icon'] as IconData,
          color: stat['color'] as Color,
        );
      },
    );
  }

  Widget _buildStatCard({
    required String title,
    required String value,
    required IconData icon,
    required Color color,
  }) {
    final isDark = Theme.of(context).brightness == Brightness.dark;
    final cardColor = isDark ? _darkSurface : _warmSurface;
    final textColor = isDark ? _goldSoft : _warmInk;
    final mutedColor = isDark ? Colors.white60 : _warmMuted;

    return Container(
      padding: const EdgeInsets.all(16),
      decoration: BoxDecoration(
        color: cardColor,
        borderRadius: BorderRadius.circular(24),
        border: Border.all(
          color: color.withValues(alpha: isDark ? 0.28 : 0.18),
        ),
        boxShadow: [
          BoxShadow(
            color: _goldDeep.withValues(alpha: isDark ? 0.14 : 0.08),
            blurRadius: 26,
            offset: const Offset(0, 12),
          ),
        ],
      ),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Row(
            children: [
              Container(
                width: 42,
                height: 42,
                decoration: BoxDecoration(
                  color: color.withValues(alpha: 0.12),
                  borderRadius: BorderRadius.circular(16),
                ),
                child: Icon(icon, size: 24, color: color),
              ),
              const Spacer(),
              Container(
                width: 10,
                height: 10,
                decoration: BoxDecoration(color: color, shape: BoxShape.circle),
              ),
            ],
          ),
          const Spacer(),
          Text(
            value,
            maxLines: 1,
            overflow: TextOverflow.ellipsis,
            style: TextStyle(
              fontSize: 24,
              fontWeight: FontWeight.w800,
              color: textColor,
            ),
          ),
          const SizedBox(height: 6),
          Text(
            title,
            maxLines: 2,
            overflow: TextOverflow.ellipsis,
            style: TextStyle(
              fontSize: 12,
              height: 1.35,
              fontWeight: FontWeight.w600,
              color: mutedColor,
            ),
          ),
        ],
      ),
    );
  }

  Widget _buildQuickActions() {
    final authProvider = Provider.of<AuthProvider>(context);
    final languageProvider = Provider.of<LanguageProvider>(context);
    final profileProvider = Provider.of<ProfileProvider>(context);
    final profile = profileProvider.profile;

    bool hasPermission(String permission) {
      if (profile == null) return false;
      return profile.hasPermission(permission);
    }

    final primaryActions = <Map<String, dynamic>>[];

    if (authProvider.isDeliveryUser) {
      if (hasPermission('mobile_delivery_deliveries')) {
        primaryActions.add({
          'icon': Icons.receipt_long_rounded,
          'label': languageProvider.t('nav_orders'),
          'color': _goldPrimary,
          'onTap': () => Navigator.push(
            context,
            MaterialPageRoute(builder: (context) => const OrdersScreen()),
          ),
        });
      }
      primaryActions.add({
        'icon': Icons.notifications_active_outlined,
        'label': languageProvider.t('nav_alerts'),
        'color': _redAccent,
        'onTap': () => Navigator.push(
          context,
          MaterialPageRoute(builder: (context) => const DeliveryAlertsScreen()),
        ),
      });
    } else {
      if (hasPermission('mobile_seller_pos')) {
        primaryActions.add({
          'icon': Icons.point_of_sale_rounded,
          'label': languageProvider.t('pos'),
          'color': _goldDeep,
          'onTap': () => Navigator.push(
            context,
            MaterialPageRoute(builder: (context) => const POSScreen()),
          ),
        });
      }
      if (hasPermission('mobile_seller_orders')) {
        primaryActions.add({
          'icon': Icons.receipt_long_rounded,
          'label': languageProvider.t('nav_orders'),
          'color': _goldPrimary,
          'onTap': () => Navigator.push(
            context,
            MaterialPageRoute(builder: (context) => const OrdersScreen()),
          ),
        });
      }
    }

    final secondaryActions = <Map<String, dynamic>>[];

    if (!authProvider.isDeliveryUser) {
      if (hasPermission('mobile_seller_products')) {
        secondaryActions.add({
          'icon': Icons.inventory_2_rounded,
          'label': languageProvider.t('products'),
          'color': _greenAccent,
          'onTap': () => Navigator.push(
            context,
            MaterialPageRoute(builder: (context) => const ProductsScreen()),
          ),
        });
      }

      secondaryActions.add({
        'icon': Icons.notifications_active_outlined,
        'label': languageProvider.t('nav_alerts'),
        'color': _redAccent,
        'onTap': () => Navigator.push(
          context,
          MaterialPageRoute(builder: (context) => const DeliveryAlertsScreen()),
        ),
      });

      if (hasPermission('mobile_seller_reports')) {
        secondaryActions.add({
          'icon': Icons.assessment_rounded,
          'label': languageProvider.t('my_report'),
          'color': _tealAccent,
          'onTap': () => Navigator.push(
            context,
            MaterialPageRoute(
              builder: (context) => const SalesBySellerReportScreen(),
            ),
          ),
        });
      }
    }

    return Column(
      children: [
        Row(
          children: [
            for (var i = 0; i < primaryActions.length; i++) ...[
              Expanded(child: _buildLargeActionCard(primaryActions[i])),
              if (i != primaryActions.length - 1) const SizedBox(width: 14),
            ],
          ],
        ),
        if (secondaryActions.isNotEmpty) const SizedBox(height: 14),
        if (secondaryActions.isNotEmpty)
          LayoutBuilder(
            builder: (context, constraints) {
              final itemWidth = (constraints.maxWidth - 24) / 3;
              return Wrap(
                spacing: 12,
                runSpacing: 12,
                children: secondaryActions
                    .map(
                      (action) => SizedBox(
                        width: itemWidth,
                        child: _buildCompactActionCard(action),
                      ),
                    )
                    .toList(),
              );
            },
          ),
      ],
    );
  }

  Widget _buildLargeActionCard(Map<String, dynamic> action) {
    final isDark = Theme.of(context).brightness == Brightness.dark;
    final color = action['color'] as Color;

    return InkWell(
      onTap: action['onTap'] as VoidCallback,
      borderRadius: BorderRadius.circular(24),
      child: Container(
        height: 114,
        padding: const EdgeInsets.all(16),
        decoration: BoxDecoration(
          borderRadius: BorderRadius.circular(24),
          gradient: LinearGradient(
            colors: [
              color.withValues(alpha: isDark ? 0.28 : 0.16),
              color.withValues(alpha: isDark ? 0.14 : 0.06),
            ],
            begin: Alignment.topLeft,
            end: Alignment.bottomRight,
          ),
          border: Border.all(color: color.withValues(alpha: 0.22)),
          boxShadow: [
            BoxShadow(
              color: Colors.black.withValues(alpha: isDark ? 0.16 : 0.04),
              blurRadius: 20,
              offset: const Offset(0, 10),
            ),
          ],
        ),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          mainAxisAlignment: MainAxisAlignment.spaceBetween,
          children: [
            Container(
              width: 44,
              height: 44,
              decoration: BoxDecoration(
                color: Colors.white.withValues(alpha: isDark ? 0.10 : 0.72),
                borderRadius: BorderRadius.circular(16),
              ),
              child: Icon(action['icon'] as IconData, color: color, size: 24),
            ),
            Row(
              children: [
                Expanded(
                  child: Text(
                    action['label'] as String,
                    maxLines: 2,
                    overflow: TextOverflow.ellipsis,
                    style: TextStyle(
                      fontSize: 15,
                      height: 1.2,
                      fontWeight: FontWeight.w700,
                      color: isDark ? _goldSoft : _warmInk,
                    ),
                  ),
                ),
                Icon(Icons.arrow_outward_rounded, color: color, size: 18),
              ],
            ),
          ],
        ),
      ),
    );
  }

  Widget _buildCompactActionCard(Map<String, dynamic> action) {
    final isDark = Theme.of(context).brightness == Brightness.dark;
    final color = action['color'] as Color;

    return InkWell(
      onTap: action['onTap'] as VoidCallback,
      borderRadius: BorderRadius.circular(22),
      child: Container(
        height: 112,
        padding: const EdgeInsets.symmetric(horizontal: 12, vertical: 14),
        decoration: BoxDecoration(
          color: isDark ? _darkSurface : _warmSurface,
          borderRadius: BorderRadius.circular(22),
          border: Border.all(
            color: color.withValues(alpha: isDark ? 0.24 : 0.12),
          ),
          boxShadow: [
            BoxShadow(
              color: Colors.black.withValues(alpha: isDark ? 0.14 : 0.04),
              blurRadius: 18,
              offset: const Offset(0, 10),
            ),
          ],
        ),
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            Container(
              width: 40,
              height: 40,
              decoration: BoxDecoration(
                color: color.withValues(alpha: 0.12),
                borderRadius: BorderRadius.circular(15),
              ),
              child: Icon(action['icon'] as IconData, color: color, size: 22),
            ),
            const SizedBox(height: 10),
            Text(
              action['label'] as String,
              maxLines: 2,
              overflow: TextOverflow.ellipsis,
              textAlign: TextAlign.center,
              style: TextStyle(
                fontSize: 12,
                height: 1.25,
                fontWeight: FontWeight.w700,
                color: isDark ? _goldSoft : _warmInk,
              ),
            ),
          ],
        ),
      ),
    );
  }

  Widget _buildRecentOrders() {
    final languageProvider = Provider.of<LanguageProvider>(context);
    final isDark = Theme.of(context).brightness == Brightness.dark;

    if (_recentOrders.isEmpty) {
      return Container(
        padding: const EdgeInsets.all(24),
        decoration: BoxDecoration(
          color: isDark ? _darkSurface : _warmSurface,
          borderRadius: BorderRadius.circular(24),
          border: Border.all(
            color: isDark
                ? Colors.white.withValues(alpha: 0.08)
                : _goldSoft.withValues(alpha: 0.70),
          ),
          boxShadow: [
            BoxShadow(
              color: Colors.black.withValues(alpha: isDark ? 0.16 : 0.04),
              blurRadius: 22,
              offset: const Offset(0, 10),
            ),
          ],
        ),
        child: Column(
          children: [
            Container(
              width: 56,
              height: 56,
              decoration: BoxDecoration(
                color: _goldPrimary.withValues(alpha: isDark ? 0.20 : 0.14),
                borderRadius: BorderRadius.circular(20),
              ),
              child: const Icon(
                Icons.receipt_long_rounded,
                color: _goldDeep,
                size: 28,
              ),
            ),
            const SizedBox(height: 14),
            Text(
              languageProvider.t('no_recent_orders'),
              style: TextStyle(
                color: isDark ? Colors.white70 : _warmMuted,
                fontSize: 14,
                fontWeight: FontWeight.w600,
              ),
              textAlign: TextAlign.center,
            ),
          ],
        ),
      );
    }

    return Column(
      children: _recentOrders
          .take(10)
          .map((order) => _buildOrderCard(order))
          .toList(),
    );
  }

  Widget _buildOrderCard(Map<String, dynamic> order) {
    final languageProvider = Provider.of<LanguageProvider>(context);
    final isDark = Theme.of(context).brightness == Brightness.dark;
    final grandTotal = (order['GrandTotal'] ?? 0).toDouble();
    final status = _displayOrderStatus(order);
    final paymentStatus = order['payment_status'] ?? 'unpaid';
    final orderRef = order['Ref']?.toString() ?? '';
    final customerName = order['client_name']?.toString() ?? 'Walk-in';
    final orderDate = (order['datetime'] ?? order['date'] ?? '').toString();

    String paymentStatusText = paymentStatus;
    switch (paymentStatus.toLowerCase()) {
      case 'paid':
        paymentStatusText = languageProvider.t('paid');
        break;
      case 'unpaid':
        paymentStatusText = languageProvider.t('unpaid');
        break;
    }

    Color statusColor;
    switch (status.toLowerCase()) {
      case 'pending':
        statusColor = _goldPrimary;
        break;
      case 'shipped':
        statusColor = _tealAccent;
        break;
      case 'completed':
      case 'delivered':
        statusColor = _greenAccent;
        break;
      default:
        statusColor = Colors.grey;
    }

    return Container(
      margin: const EdgeInsets.only(bottom: 12),
      padding: const EdgeInsets.all(16),
      decoration: BoxDecoration(
        color: isDark ? _darkSurface : _warmSurface,
        borderRadius: BorderRadius.circular(24),
        border: Border.all(
          color: statusColor.withValues(alpha: isDark ? 0.24 : 0.12),
        ),
        boxShadow: [
          BoxShadow(
            color: Colors.black.withValues(alpha: isDark ? 0.14 : 0.04),
            blurRadius: 18,
            offset: const Offset(0, 10),
          ),
        ],
      ),
      child: Row(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Container(
            width: 52,
            height: 52,
            decoration: BoxDecoration(
              color: statusColor.withValues(alpha: 0.12),
              borderRadius: BorderRadius.circular(18),
            ),
            child: Icon(
              Icons.receipt_long_rounded,
              color: statusColor,
              size: 24,
            ),
          ),
          const SizedBox(width: 14),
          Expanded(
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                Text(
                  orderRef,
                  maxLines: 1,
                  overflow: TextOverflow.ellipsis,
                  style: TextStyle(
                    fontWeight: FontWeight.w800,
                    fontSize: 16,
                    color: isDark ? _goldSoft : _warmInk,
                  ),
                ),
                const SizedBox(height: 6),
                Text(
                  customerName,
                  maxLines: 1,
                  overflow: TextOverflow.ellipsis,
                  style: TextStyle(
                    fontSize: 13,
                    fontWeight: FontWeight.w600,
                    color: isDark ? Colors.white70 : _warmMuted,
                  ),
                ),
                const SizedBox(height: 8),
                _buildOrderInfoLine(
                  icon: Icons.schedule_rounded,
                  label: orderDate,
                ),
              ],
            ),
          ),
          const SizedBox(width: 12),
          ConstrainedBox(
            constraints: const BoxConstraints(maxWidth: 116),
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.end,
              children: [
                Text(
                  '\$${grandTotal.toStringAsFixed(2)}',
                  style: TextStyle(
                    fontWeight: FontWeight.w800,
                    fontSize: 17,
                    color: isDark ? _goldSoft : _warmInk,
                  ),
                  textAlign: TextAlign.right,
                ),
                const SizedBox(height: 10),
                Wrap(
                  spacing: 6,
                  runSpacing: 6,
                  alignment: WrapAlignment.end,
                  children: [
                    _buildOrderMetaChip(
                      label: _deliveryStatusText(status, languageProvider),
                      color: statusColor,
                    ),
                    _buildOrderMetaChip(
                      label: paymentStatusText,
                      color: paymentStatus == 'paid'
                          ? _greenAccent
                          : _goldPrimary,
                    ),
                  ],
                ),
              ],
            ),
          ),
        ],
      ),
    );
  }

  Widget _buildOrderInfoLine({required IconData icon, required String label}) {
    final isDark = Theme.of(context).brightness == Brightness.dark;

    return Row(
      children: [
        Icon(
          icon,
          size: 14,
          color: isDark ? Colors.white54 : _warmMuted.withValues(alpha: 0.70),
        ),
        const SizedBox(width: 6),
        Expanded(
          child: Text(
            label,
            maxLines: 1,
            overflow: TextOverflow.ellipsis,
            style: TextStyle(
              fontSize: 12,
              color: isDark ? Colors.white54 : _warmMuted,
            ),
          ),
        ),
      ],
    );
  }

  Widget _buildOrderMetaChip({required String label, required Color color}) {
    return Container(
      padding: const EdgeInsets.symmetric(horizontal: 10, vertical: 6),
      decoration: BoxDecoration(
        color: color.withValues(alpha: 0.1),
        borderRadius: BorderRadius.circular(999),
      ),
      child: Text(
        label,
        textAlign: TextAlign.right,
        style: TextStyle(
          fontSize: 10,
          fontWeight: FontWeight.w700,
          color: color,
        ),
      ),
    );
  }

  String _displayOrderStatus(Map<String, dynamic> order) {
    final shippingStatus = order['shipping_status']?.toString().trim() ?? '';
    return _normalizeShippingStatus(shippingStatus);
  }

  String _normalizeShippingStatus(String status) {
    final normalized = status.trim().toLowerCase();
    if (normalized.isEmpty) {
      return 'pending';
    }

    if (normalized == 'processing') {
      return 'shipped';
    }

    return normalized;
  }

  String _deliveryStatusText(String status, LanguageProvider languageProvider) {
    switch (_normalizeShippingStatus(status)) {
      case 'pending':
        return languageProvider.t('pending');
      case 'shipped':
        return languageProvider.t('shipped');
      case 'delivered':
        return languageProvider.t('delivered');
      default:
        return status;
    }
  }
}
