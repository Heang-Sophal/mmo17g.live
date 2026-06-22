import 'dart:convert';

import 'package:flutter/material.dart';
import 'package:http/http.dart' as http;
import 'package:provider/provider.dart';
import 'package:seller_app/config/api_config.dart';
import 'package:seller_app/controllers/navigation_bar_controller.dart';
import 'package:seller_app/providers/auth_provider.dart';
import 'package:seller_app/providers/language_provider.dart';
import 'package:seller_app/utils/top_notification.dart';

class OrdersScreen extends StatefulWidget {
  const OrdersScreen({
    super.key,
    this.initialSaleRef,
    this.autoOpenInitialOrder = false,
    this.menuButton,
  });

  final String? initialSaleRef;
  final bool autoOpenInitialOrder;
  final Widget? menuButton;

  @override
  State<OrdersScreen> createState() => _OrdersScreenState();
}

class _OrdersScreenState extends State<OrdersScreen>
    with SingleTickerProviderStateMixin {
  late final TabController _tabController;
  final ScrollController _scrollController = ScrollController();

  String _searchQuery = '';
  List<Map<String, dynamic>> _orders = [];
  bool _isLoading = true;
  String? _error;
  bool _hasOpenedInitialOrder = false;
  double _lastScrollOffset = 0;

  @override
  void initState() {
    super.initState();
    _searchQuery = widget.initialSaleRef?.trim() ?? '';
    _tabController = TabController(length: 4, vsync: this);
    _tabController.addListener(_onTabChanged);
    _scrollController.addListener(_onScroll);
    refreshData();
  }

  @override
  void dispose() {
    _tabController.removeListener(_onTabChanged);
    _tabController.dispose();
    _scrollController.removeListener(_onScroll);
    _scrollController.dispose();
    super.dispose();
  }

  void _onScroll() {
    final currentOffset = _scrollController.offset;
    final difference = currentOffset - _lastScrollOffset;
    final navController = context.read<NavigationBarController>();

    if (difference > 5 && currentOffset > 50) {
      navController.hide();
    } else if (difference < -5) {
      navController.show();
    }

    _lastScrollOffset = currentOffset;
  }

  void _onTabChanged() {
    if (!_tabController.indexIsChanging) {
      refreshData();
    }
  }

  Future<void> refreshData() async {
    final authProvider = context.read<AuthProvider>();
    final languageProvider = context.read<LanguageProvider>();
    final userId = authProvider.user?.id;
    final token = authProvider.token;
    final isDelivery = authProvider.isDeliveryUser;

    if (userId == null || (isDelivery && (token == null || token.isEmpty))) {
      setState(() {
        _error = languageProvider.t('failed_to_load_orders');
        _isLoading = false;
      });
      return;
    }

    setState(() {
      _isLoading = true;
      _error = null;
    });

    try {
      var endpoint = isDelivery
          ? '${ApiConfig.baseUrl}/delivery/orders'
          : '${ApiConfig.baseUrl}/orders?user_id=$userId';

      switch (_tabController.index) {
        case 1:
          endpoint += '${endpoint.contains('?') ? '&' : '?'}status=pending';
          break;
        case 2:
          endpoint += '${endpoint.contains('?') ? '&' : '?'}status=shipped';
          break;
        case 3:
          endpoint += '${endpoint.contains('?') ? '&' : '?'}status=delivered';
          break;
      }

      final headers = <String, String>{'Accept': 'application/json'};
      if (isDelivery && token != null && token.isNotEmpty) {
        headers['Authorization'] = 'Bearer $token';
      }

      final response = await http
          .get(Uri.parse(endpoint), headers: headers)
          .timeout(const Duration(seconds: 10));

      final data = json.decode(response.body);
      if (response.statusCode == 200 && data['success'] == true) {
        final orders = List<Map<String, dynamic>>.from(data['data'] ?? []);
        if (!mounted) return;

        setState(() {
          _orders = orders;
          _isLoading = false;
        });
        _openInitialOrderIfNeeded(orders);
        return;
      }

      if (!mounted) return;
      setState(() {
        _error = languageProvider.t('failed_to_load_orders');
        _isLoading = false;
      });
    } catch (_) {
      if (!mounted) return;
      setState(() {
        _error = languageProvider.t('failed_to_load_orders');
        _isLoading = false;
      });
    }
  }

  void _openInitialOrderIfNeeded([List<Map<String, dynamic>>? orders]) {
    if (!widget.autoOpenInitialOrder || _hasOpenedInitialOrder) {
      return;
    }

    final saleRef = widget.initialSaleRef?.trim();
    if (saleRef == null || saleRef.isEmpty) {
      return;
    }

    final sourceOrders = orders ?? _orders;
    Map<String, dynamic>? matchedOrder;

    for (final order in sourceOrders) {
      final ref = order['Ref']?.toString().trim().toLowerCase() ?? '';
      if (ref == saleRef.toLowerCase()) {
        matchedOrder = order;
        break;
      }
    }

    if (matchedOrder == null) {
      return;
    }

    _hasOpenedInitialOrder = true;
    WidgetsBinding.instance.addPostFrameCallback((_) {
      if (mounted) {
        _showOrderDetails(matchedOrder!);
      }
    });
  }

  @override
  Widget build(BuildContext context) {
    final theme = Theme.of(context);
    final isDark = theme.brightness == Brightness.dark;
    final languageProvider = context.watch<LanguageProvider>();
    final backgroundColor = isDark
        ? const Color(0xFF0F172A)
        : const Color(0xFFF4F6FB);

    return Scaffold(
      backgroundColor: backgroundColor,
      appBar: AppBar(
        toolbarHeight: 92,
        elevation: 0,
        scrolledUnderElevation: 0,
        surfaceTintColor: Colors.transparent,
        backgroundColor: backgroundColor,
        leading: widget.menuButton,
        leadingWidth: widget.menuButton != null ? 96 : null,
        title: Column(
          mainAxisSize: MainAxisSize.min,
          children: [
            Text(
              languageProvider.t('all_orders'),
              style: TextStyle(
                fontSize: 23,
                fontWeight: FontWeight.w700,
                color: isDark ? Colors.white : const Color(0xFF101828),
              ),
            ),
            const SizedBox(height: 4),
            Text(
              languageProvider.t('orders_subtitle'),
              style: TextStyle(
                fontSize: 12,
                fontWeight: FontWeight.w500,
                color: isDark
                    ? Colors.white.withValues(alpha: 0.72)
                    : const Color(0xFF667085),
              ),
            ),
          ],
        ),
        actions: [
          _buildHeaderAction(
            icon: _isLoading ? null : Icons.refresh_rounded,
            tooltip: languageProvider.t('refresh'),
            busy: _isLoading,
            onTap: _isLoading ? null : refreshData,
          ),
          const SizedBox(width: 14),
        ],
        bottom: PreferredSize(
          preferredSize: const Size.fromHeight(82),
          child: Padding(
            padding: const EdgeInsets.fromLTRB(16, 4, 16, 12),
            child: Container(
              decoration: BoxDecoration(
                color: isDark
                    ? Colors.white.withValues(alpha: 0.04)
                    : Colors.white.withValues(alpha: 0.92),
                borderRadius: BorderRadius.circular(22),
                border: Border.all(
                  color: isDark
                      ? Colors.white.withValues(alpha: 0.08)
                      : const Color(0xFFE3E7F4),
                ),
              ),
              child: TabBar(
                controller: _tabController,
                isScrollable: true,
                tabAlignment: TabAlignment.start,
                dividerColor: Colors.transparent,
                indicatorSize: TabBarIndicatorSize.tab,
                indicator: BoxDecoration(
                  color: theme.colorScheme.primary.withValues(
                    alpha: isDark ? 0.26 : 0.12,
                  ),
                  borderRadius: BorderRadius.circular(16),
                ),
                labelColor: isDark ? Colors.white : const Color(0xFF1D2939),
                unselectedLabelColor: isDark
                    ? Colors.white70
                    : const Color(0xFF667085),
                labelStyle: const TextStyle(
                  fontSize: 13,
                  fontWeight: FontWeight.w700,
                ),
                unselectedLabelStyle: const TextStyle(
                  fontSize: 13,
                  fontWeight: FontWeight.w600,
                ),
                padding: const EdgeInsets.all(8),
                tabs: [
                  Tab(text: languageProvider.t('all_orders')),
                  Tab(text: languageProvider.t('pending')),
                  Tab(text: languageProvider.t('shipped')),
                  Tab(text: languageProvider.t('delivered')),
                ],
              ),
            ),
          ),
        ),
      ),
      body: Container(
        decoration: BoxDecoration(
          gradient: LinearGradient(
            colors: [
              backgroundColor,
              isDark ? const Color(0xFF111827) : const Color(0xFFEFF2FF),
            ],
            begin: Alignment.topCenter,
            end: Alignment.bottomCenter,
          ),
        ),
        child: Column(
          children: [
            Padding(
              padding: const EdgeInsets.fromLTRB(16, 12, 16, 10),
              child: Container(
                decoration: BoxDecoration(
                  color: isDark
                      ? Colors.white.withValues(alpha: 0.04)
                      : Colors.white.withValues(alpha: 0.95),
                  borderRadius: BorderRadius.circular(22),
                  border: Border.all(
                    color: isDark
                        ? Colors.white.withValues(alpha: 0.08)
                        : const Color(0xFFE3E7F4),
                  ),
                  boxShadow: [
                    BoxShadow(
                      color: isDark
                          ? Colors.black.withValues(alpha: 0.12)
                          : const Color(0xFFB7C2E9).withValues(alpha: 0.16),
                      blurRadius: 22,
                      offset: const Offset(0, 10),
                    ),
                  ],
                ),
                child: TextField(
                  decoration: InputDecoration(
                    hintText: languageProvider.t('search_orders'),
                    hintStyle: TextStyle(
                      color: isDark ? Colors.white54 : const Color(0xFF98A2B3),
                    ),
                    prefixIcon: Icon(
                      Icons.search_rounded,
                      color: theme.colorScheme.primary,
                    ),
                    suffixIcon: _searchQuery.isNotEmpty
                        ? IconButton(
                            icon: const Icon(Icons.close_rounded),
                            onPressed: () {
                              setState(() {
                                _searchQuery = '';
                              });
                            },
                          )
                        : null,
                    filled: false,
                    border: InputBorder.none,
                    enabledBorder: InputBorder.none,
                    focusedBorder: InputBorder.none,
                    contentPadding: const EdgeInsets.symmetric(
                      horizontal: 18,
                      vertical: 18,
                    ),
                  ),
                  style: TextStyle(
                    color: isDark ? Colors.white : const Color(0xFF111827),
                    fontWeight: FontWeight.w600,
                  ),
                  onChanged: (value) {
                    setState(() {
                      _searchQuery = value;
                    });
                  },
                ),
              ),
            ),
            Expanded(
              child: TabBarView(
                controller: _tabController,
                children: [
                  _buildOrderList(languageProvider),
                  _buildOrderList(languageProvider),
                  _buildOrderList(languageProvider),
                  _buildOrderList(languageProvider),
                ],
              ),
            ),
          ],
        ),
      ),
    );
  }

  Widget _buildOrderList(LanguageProvider languageProvider) {
    if (_isLoading) {
      return const Center(child: CircularProgressIndicator());
    }

    if (_error != null) {
      return _buildStateCard(
        icon: Icons.inventory_2_outlined,
        title: _error!,
        subtitle: languageProvider.t('try_again'),
        actionLabel: languageProvider.t('retry'),
        onAction: refreshData,
      );
    }

    final filteredOrders = _orders.where((order) {
      if (_searchQuery.isEmpty) return true;
      final query = _searchQuery.toLowerCase();
      return (order['Ref']?.toString().toLowerCase() ?? '').contains(query) ||
          (order['client_name']?.toString().toLowerCase() ?? '').contains(
            query,
          ) ||
          (order['client_phone']?.toString().toLowerCase() ?? '').contains(
            query,
          );
    }).toList();

    if (filteredOrders.isEmpty) {
      return _buildStateCard(
        icon: Icons.receipt_long_rounded,
        title: languageProvider.t('no_orders'),
        subtitle: languageProvider.t('orders_subtitle'),
      );
    }

    return RefreshIndicator(
      onRefresh: refreshData,
      child: ListView.separated(
        controller: _scrollController,
        physics: const BouncingScrollPhysics(),
        padding: const EdgeInsets.fromLTRB(16, 6, 16, 24),
        itemCount: filteredOrders.length,
        separatorBuilder: (context, index) => const SizedBox(height: 14),
        itemBuilder: (context, index) {
          return _buildOrderCard(filteredOrders[index], languageProvider);
        },
      ),
    );
  }

  Widget _buildOrderCard(
    Map<String, dynamic> order,
    LanguageProvider languageProvider,
  ) {
    final theme = Theme.of(context);
    final isDark = theme.brightness == Brightness.dark;
    final status = _orderStatus(order);
    final paymentStatus = order['payment_status']?.toString() ?? 'unpaid';
    final grandTotal = _asDouble(order['GrandTotal']);
    final paidAmount = _asDouble(order['paid_amount']);
    final remainingAmount = grandTotal - paidAmount;
    final warehouseName = order['warehouse_name']?.toString() ?? '';
    final paymentMethod = (order['payment_method'] ?? 'cash').toString();
    final ref = order['Ref']?.toString() ?? '';
    final dateText =
        order['datetime']?.toString() ?? order['date']?.toString() ?? '';

    return Material(
      color: Colors.transparent,
      child: InkWell(
        onTap: () => _showOrderDetails(order),
        borderRadius: BorderRadius.circular(26),
        child: Ink(
          decoration: BoxDecoration(
            color: isDark
                ? Colors.white.withValues(alpha: 0.04)
                : Colors.white.withValues(alpha: 0.97),
            borderRadius: BorderRadius.circular(26),
            border: Border.all(
              color: isDark
                  ? Colors.white.withValues(alpha: 0.08)
                  : const Color(0xFFE3E7F4),
            ),
            boxShadow: [
              BoxShadow(
                color: isDark
                    ? Colors.black.withValues(alpha: 0.15)
                    : const Color(0xFFB7C2E9).withValues(alpha: 0.18),
                blurRadius: 24,
                offset: const Offset(0, 12),
              ),
            ],
          ),
          child: Padding(
            padding: const EdgeInsets.all(18),
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                Row(
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: [
                    Expanded(
                      child: Column(
                        crossAxisAlignment: CrossAxisAlignment.start,
                        children: [
                          Text(
                            ref,
                            style: TextStyle(
                              fontSize: 23,
                              fontWeight: FontWeight.w800,
                              color: isDark
                                  ? Colors.white
                                  : const Color(0xFF111827),
                            ),
                          ),
                          const SizedBox(height: 6),
                          Text(
                            dateText,
                            style: TextStyle(
                              fontSize: 13,
                              fontWeight: FontWeight.w500,
                              color: isDark
                                  ? Colors.white.withValues(alpha: 0.68)
                                  : const Color(0xFF667085),
                            ),
                          ),
                        ],
                      ),
                    ),
                    const SizedBox(width: 12),
                    Icon(
                      Icons.chevron_right_rounded,
                      color: isDark ? Colors.white54 : const Color(0xFF98A2B3),
                    ),
                  ],
                ),
                const SizedBox(height: 14),
                Row(
                  mainAxisAlignment: MainAxisAlignment.spaceBetween,
                  children: [
                    warehouseName.isNotEmpty
                        ? _buildMetaTag(
                            icon: Icons.warehouse_rounded,
                            label: warehouseName,
                            color: const Color(0xFF4F46E5),
                          )
                        : const SizedBox(),
                    _buildPaymentStatusChip(paymentStatus),
                    _buildStatusChip(status),
                  ],
                ),
                const SizedBox(height: 16),
                Container(
                  padding: const EdgeInsets.all(16),
                  decoration: BoxDecoration(
                    color: theme.colorScheme.primary.withValues(
                      alpha: isDark ? 0.1 : 0.05,
                    ),
                    borderRadius: BorderRadius.circular(20),
                  ),
                  child: Column(
                    children: [
                      _buildOrderInfoLine(
                        icon: Icons.call_rounded,
                        value:
                            order['client_phone']?.toString().isNotEmpty == true
                            ? order['client_phone'].toString()
                            : '-',
                      ),
                      const SizedBox(height: 10),
                      _buildOrderInfoLine(
                        icon: Icons.location_on_rounded,
                        value:
                            order['client_address']?.toString().isNotEmpty ==
                                true
                            ? order['client_address'].toString()
                            : '-',
                        muted: true,
                      ),
                    ],
                  ),
                ),
                const SizedBox(height: 16),
                Row(
                  children: [
                    Expanded(
                      child: _buildSummaryTile(
                        label: languageProvider.t('payment_method'),
                        value: paymentMethod.toUpperCase(),
                      ),
                    ),
                    const SizedBox(width: 12),
                    Expanded(
                      child: _buildSummaryTile(
                        label: languageProvider.t('total'),
                        value: '\$${grandTotal.toStringAsFixed(2)}',
                        highlightColor: const Color(0xFF16A34A),
                      ),
                    ),
                  ],
                ),
                if (paymentStatus.toLowerCase() == 'unpaid' &&
                    remainingAmount > 0) ...[
                  const SizedBox(height: 14),
                  Container(
                    padding: const EdgeInsets.symmetric(
                      horizontal: 12,
                      vertical: 10,
                    ),
                    decoration: BoxDecoration(
                      color: const Color(0xFFF59E0B).withValues(alpha: 0.12),
                      borderRadius: BorderRadius.circular(16),
                    ),
                    child: Row(
                      children: [
                        const Icon(
                          Icons.warning_amber_rounded,
                          size: 18,
                          color: Color(0xFFF59E0B),
                        ),
                        const SizedBox(width: 8),
                        Expanded(
                          child: Text(
                            '${languageProvider.t('remaining_amount')}: \$${remainingAmount.toStringAsFixed(2)}',
                            style: const TextStyle(
                              fontSize: 12.5,
                              fontWeight: FontWeight.w700,
                              color: Color(0xFFB45309),
                            ),
                          ),
                        ),
                      ],
                    ),
                  ),
                ],
              ],
            ),
          ),
        ),
      ),
    );
  }

  Widget _buildHeaderAction({
    IconData? icon,
    required String tooltip,
    required VoidCallback? onTap,
    bool busy = false,
  }) {
    final theme = Theme.of(context);
    final isDark = theme.brightness == Brightness.dark;

    return Tooltip(
      message: tooltip,
      child: Padding(
        padding: const EdgeInsets.only(top: 12, bottom: 12),
        child: Material(
          color: isDark
              ? Colors.white.withValues(alpha: 0.05)
              : Colors.white.withValues(alpha: 0.82),
          borderRadius: BorderRadius.circular(16),
          child: InkWell(
            borderRadius: BorderRadius.circular(16),
            onTap: onTap,
            child: Container(
              width: 46,
              height: 46,
              decoration: BoxDecoration(
                borderRadius: BorderRadius.circular(16),
                border: Border.all(
                  color: isDark
                      ? Colors.white.withValues(alpha: 0.08)
                      : const Color(0xFFE3E7F4),
                ),
              ),
              child: Center(
                child: busy
                    ? SizedBox(
                        width: 20,
                        height: 20,
                        child: CircularProgressIndicator(
                          strokeWidth: 2,
                          color: theme.colorScheme.primary,
                        ),
                      )
                    : Icon(icon, color: theme.colorScheme.primary, size: 24),
              ),
            ),
          ),
        ),
      ),
    );
  }

  Widget _buildStateCard({
    required IconData icon,
    required String title,
    required String subtitle,
    String? actionLabel,
    VoidCallback? onAction,
  }) {
    final theme = Theme.of(context);
    final isDark = theme.brightness == Brightness.dark;

    return Center(
      child: Padding(
        padding: const EdgeInsets.symmetric(horizontal: 24),
        child: Container(
          width: double.infinity,
          padding: const EdgeInsets.all(24),
          decoration: BoxDecoration(
            color: isDark
                ? Colors.white.withValues(alpha: 0.04)
                : Colors.white.withValues(alpha: 0.95),
            borderRadius: BorderRadius.circular(28),
            border: Border.all(
              color: isDark
                  ? Colors.white.withValues(alpha: 0.08)
                  : const Color(0xFFE3E7F4),
            ),
          ),
          child: Column(
            mainAxisSize: MainAxisSize.min,
            children: [
              Container(
                width: 82,
                height: 82,
                decoration: BoxDecoration(
                  color: theme.colorScheme.primary.withValues(alpha: 0.1),
                  shape: BoxShape.circle,
                ),
                child: Icon(icon, size: 40, color: theme.colorScheme.primary),
              ),
              const SizedBox(height: 18),
              Text(
                title,
                textAlign: TextAlign.center,
                style: TextStyle(
                  fontSize: 18,
                  fontWeight: FontWeight.w700,
                  color: isDark ? Colors.white : const Color(0xFF111827),
                ),
              ),
              const SizedBox(height: 8),
              Text(
                subtitle,
                textAlign: TextAlign.center,
                style: TextStyle(
                  fontSize: 13,
                  height: 1.5,
                  color: isDark
                      ? Colors.white.withValues(alpha: 0.68)
                      : const Color(0xFF667085),
                ),
              ),
              if (actionLabel != null && onAction != null) ...[
                const SizedBox(height: 18),
                ElevatedButton(onPressed: onAction, child: Text(actionLabel)),
              ],
            ],
          ),
        ),
      ),
    );
  }

  Widget _buildMetaTag({
    required IconData icon,
    required String label,
    required Color color,
  }) {
    return Container(
      padding: const EdgeInsets.symmetric(horizontal: 10, vertical: 6),
      decoration: BoxDecoration(
        color: color.withValues(alpha: 0.12),
        borderRadius: BorderRadius.circular(999),
      ),
      child: Row(
        mainAxisSize: MainAxisSize.min,
        children: [
          Icon(icon, size: 14, color: color),
          const SizedBox(width: 4),
          Text(
            label,
            style: TextStyle(
              fontSize: 11,
              fontWeight: FontWeight.w700,
              color: color,
            ),
          ),
        ],
      ),
    );
  }

  Widget _buildOrderInfoLine({
    required IconData icon,
    required String value,
    bool muted = false,
  }) {
    final isDark = Theme.of(context).brightness == Brightness.dark;

    return Row(
      children: [
        Icon(
          icon,
          size: 18,
          color: muted
              ? (isDark ? Colors.white54 : const Color(0xFF98A2B3))
              : const Color(0xFF667085),
        ),
        const SizedBox(width: 10),
        Expanded(
          child: Text(
            value,
            maxLines: 1,
            overflow: TextOverflow.ellipsis,
            style: TextStyle(
              fontSize: 14,
              fontWeight: muted ? FontWeight.w500 : FontWeight.w700,
              color: isDark
                  ? Colors.white.withValues(alpha: muted ? 0.72 : 0.92)
                  : muted
                  ? const Color(0xFF667085)
                  : const Color(0xFF1D2939),
            ),
          ),
        ),
      ],
    );
  }

  Widget _buildSummaryTile({
    required String label,
    required String value,
    Color? highlightColor,
  }) {
    final isDark = Theme.of(context).brightness == Brightness.dark;

    return Container(
      padding: const EdgeInsets.symmetric(horizontal: 14, vertical: 14),
      decoration: BoxDecoration(
        color: isDark
            ? Colors.white.withValues(alpha: 0.05)
            : const Color(0xFFF8F9FF),
        borderRadius: BorderRadius.circular(18),
      ),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Text(
            label,
            style: TextStyle(
              fontSize: 11,
              fontWeight: FontWeight.w600,
              color: isDark ? Colors.white60 : const Color(0xFF98A2B3),
            ),
          ),
          const SizedBox(height: 6),
          Text(
            value,
            maxLines: 1,
            overflow: TextOverflow.ellipsis,
            style: TextStyle(
              fontSize: 16,
              fontWeight: FontWeight.w800,
              color:
                  highlightColor ??
                  (isDark ? Colors.white : const Color(0xFF111827)),
            ),
          ),
        ],
      ),
    );
  }

  Widget _buildDetailsSection({
    required String title,
    required List<Widget> children,
  }) {
    final isDark = Theme.of(context).brightness == Brightness.dark;

    return Container(
      width: double.infinity,
      padding: const EdgeInsets.all(18),
      decoration: BoxDecoration(
        color: isDark
            ? Colors.white.withValues(alpha: 0.04)
            : Colors.white.withValues(alpha: 0.96),
        borderRadius: BorderRadius.circular(24),
        border: Border.all(
          color: isDark
              ? Colors.white.withValues(alpha: 0.08)
              : const Color(0xFFE3E7F4),
        ),
      ),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Text(
            title,
            style: TextStyle(
              fontSize: 15,
              fontWeight: FontWeight.w800,
              color: isDark ? Colors.white : const Color(0xFF111827),
            ),
          ),
          const SizedBox(height: 14),
          ...children,
        ],
      ),
    );
  }

  Widget _buildStatusChip(String status) {
    final languageProvider = context.read<LanguageProvider>();
    Color color;
    String label;

    switch (_normalizeShippingStatus(status)) {
      case 'pending':
        color = const Color(0xFFF59E0B);
        label = languageProvider.t('pending');
        break;
      case 'shipped':
        color = const Color(0xFF7C3AED);
        label = languageProvider.t('shipped');
        break;
      case 'delivered':
        color = const Color(0xFF16A34A);
        label = languageProvider.t('delivered');
        break;
      case 'completed':
        color = const Color(0xFF16A34A);
        label = languageProvider.t('completed');
        break;
      case 'cancelled':
        color = const Color(0xFFDC2626);
        label = languageProvider.t('cancelled');
        break;
      default:
        color = Colors.grey;
        label = status;
    }

    return _buildAnimatedMetaTag(
      icon: Icons.local_shipping_rounded,
      label: label,
      color: color,
    );
  }

  Widget _buildPaymentStatusChip(String paymentStatus) {
    final languageProvider = context.read<LanguageProvider>();
    final isPaid = paymentStatus.toLowerCase() == 'paid';

    return _buildAnimatedMetaTag(
      icon: isPaid
          ? Icons.verified_rounded
          : Icons.account_balance_wallet_outlined,
      label: isPaid ? languageProvider.t('paid') : languageProvider.t('unpaid'),
      color: isPaid ? const Color(0xFF16A34A) : const Color(0xFFF59E0B),
    );
  }

  Widget _buildAnimatedMetaTag({
    required IconData icon,
    required String label,
    required Color color,
  }) {
    return Container(
      padding: const EdgeInsets.symmetric(horizontal: 10, vertical: 6),
      decoration: BoxDecoration(
        color: color.withValues(alpha: 0.12),
        borderRadius: BorderRadius.circular(999),
      ),
      child: Row(
        mainAxisSize: MainAxisSize.min,
        children: [
          _PulsingDot(color: color),
          const SizedBox(width: 5),
          Icon(icon, size: 13, color: color),
          const SizedBox(width: 4),
          Text(
            label,
            style: TextStyle(
              fontSize: 11,
              fontWeight: FontWeight.w700,
              color: color,
            ),
          ),
        ],
      ),
    );
  }

  void _showOrderDetails(Map<String, dynamic> order) {
    final languageProvider = context.read<LanguageProvider>();
    final isDelivery = context.read<AuthProvider>().isDeliveryUser;
    final theme = Theme.of(context);
    final isDark = theme.brightness == Brightness.dark;

    showModalBottomSheet(
      context: context,
      isScrollControlled: true,
      backgroundColor: Colors.transparent,
      builder: (context) => DraggableScrollableSheet(
        initialChildSize: 0.74,
        minChildSize: 0.5,
        maxChildSize: 0.95,
        expand: false,
        builder: (context, scrollController) => Container(
          decoration: BoxDecoration(
            color: isDark ? const Color(0xFF0F172A) : const Color(0xFFF8FAFF),
            borderRadius: const BorderRadius.vertical(top: Radius.circular(32)),
          ),
          child: SingleChildScrollView(
            controller: scrollController,
            padding: const EdgeInsets.fromLTRB(24, 16, 24, 32),
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                Center(
                  child: Container(
                    width: 54,
                    height: 5,
                    decoration: BoxDecoration(
                      color: isDark
                          ? Colors.white.withValues(alpha: 0.22)
                          : Colors.grey[300],
                      borderRadius: BorderRadius.circular(999),
                    ),
                  ),
                ),
                const SizedBox(height: 22),
                Text(
                  languageProvider.t('order_details'),
                  style: TextStyle(
                    fontSize: 15,
                    fontWeight: FontWeight.w700,
                    color: isDark ? Colors.white70 : const Color(0xFF667085),
                  ),
                ),
                const SizedBox(height: 8),
                Row(
                  children: [
                    Expanded(
                      child: Column(
                        crossAxisAlignment: CrossAxisAlignment.start,
                        children: [
                          Text(
                            order['Ref']?.toString() ?? '',
                            style: TextStyle(
                              fontSize: 26,
                              fontWeight: FontWeight.w800,
                              color: isDark
                                  ? Colors.white
                                  : const Color(0xFF111827),
                            ),
                          ),
                          const SizedBox(height: 6),
                          Text(
                            order['datetime']?.toString() ??
                                order['date']?.toString() ??
                                '',
                            style: TextStyle(
                              fontSize: 13,
                              color: isDark
                                  ? Colors.white54
                                  : const Color(0xFF667085),
                            ),
                          ),
                        ],
                      ),
                    ),
                    _buildStatusChip(_orderStatus(order)),
                  ],
                ),
                const SizedBox(height: 14),
                Wrap(
                  spacing: 8,
                  runSpacing: 8,
                  children: [
                    _buildPaymentStatusChip(
                      order['payment_status']?.toString() ?? 'unpaid',
                    ),
                    if ((order['warehouse_name'] ?? '').toString().isNotEmpty)
                      _buildMetaTag(
                        icon: Icons.warehouse_rounded,
                        label: order['warehouse_name'].toString(),
                        color: const Color(0xFF4F46E5),
                      ),
                  ],
                ),
                const SizedBox(height: 24),
                _buildDetailsSection(
                  title: languageProvider.t('customer_information'),
                  children: [
                    _buildInfoRow(
                      Icons.person,
                      languageProvider.t('client_name'),
                      order['client_name']?.toString() ?? '-',
                    ),
                    _buildInfoRow(
                      Icons.phone,
                      languageProvider.t('customer_phone'),
                      order['client_phone']?.toString() ?? '-',
                    ),
                    _buildInfoRow(
                      Icons.location_on,
                      languageProvider.t('customer_address'),
                      order['client_address']?.toString() ?? '-',
                    ),
                  ],
                ),
                const SizedBox(height: 18),
                _buildDetailsSection(
                  title: languageProvider.t('payment_status'),
                  children: [
                    _buildInfoRow(
                      Icons.payment,
                      languageProvider.t('payment_method'),
                      (order['payment_method'] ?? 'cash')
                          .toString()
                          .toUpperCase(),
                    ),
                    _buildInfoRow(
                      Icons.local_shipping_outlined,
                      languageProvider.t('status'),
                      _statusLabel(_orderStatus(order), languageProvider),
                    ),
                    _buildInfoRow(
                      Icons.local_shipping,
                      languageProvider.t('shipping'),
                      _shippingLabel(order, languageProvider),
                    ),
                    _buildInfoRow(
                      Icons.account_balance_wallet,
                      languageProvider.t('paid'),
                      '\$${_asDouble(order['paid_amount']).toStringAsFixed(2)}',
                    ),
                    _buildInfoRow(
                      Icons.monetization_on,
                      languageProvider.t('total'),
                      '\$${_asDouble(order['GrandTotal']).toStringAsFixed(2)}',
                    ),
                  ],
                ),
                if ((order['warehouse_name'] ?? '').toString().isNotEmpty ||
                    (order['user_name'] ?? '').toString().isNotEmpty ||
                    (order['notes'] ?? '').toString().isNotEmpty) ...[
                  const SizedBox(height: 18),
                  _buildDetailsSection(
                    title: languageProvider.t('info'),
                    children: [
                      if ((order['warehouse_name'] ?? '').toString().isNotEmpty)
                        _buildInfoRow(
                          Icons.warehouse,
                          languageProvider.t('assigned_warehouse'),
                          order['warehouse_name'].toString(),
                        ),
                      if ((order['user_name'] ?? '').toString().isNotEmpty)
                        _buildInfoRow(
                          Icons.person_outline,
                          languageProvider.t('nav_profile'),
                          order['user_name'].toString(),
                        ),
                      if ((order['notes'] ?? '').toString().isNotEmpty)
                        _buildInfoRow(
                          Icons.note,
                          languageProvider.t('description'),
                          order['notes'].toString(),
                        ),
                    ],
                  ),
                ],
                if (!isDelivery) ...[
                  const SizedBox(height: 18),
                  SizedBox(
                    width: double.infinity,
                    child: OutlinedButton.icon(
                      onPressed: () => _showEditShippingDialog(order),
                      icon: const Icon(Icons.local_shipping_outlined),
                      label: Text(languageProvider.t('edit_shipping')),
                      style: OutlinedButton.styleFrom(
                        padding: const EdgeInsets.symmetric(vertical: 14),
                      ),
                    ),
                  ),
                  const SizedBox(height: 18),
                  _buildDetailsSection(
                    title: languageProvider.t('update_payment_status'),
                    children: [
                      Row(
                        children: [
                          Expanded(
                            child: ElevatedButton.icon(
                              onPressed: () =>
                                  _updatePaymentStatus(order, 'paid'),
                              icon: const Icon(Icons.check_circle, size: 18),
                              label: Text(languageProvider.t('paid')),
                              style: ElevatedButton.styleFrom(
                                backgroundColor: const Color(0xFF16A34A),
                                foregroundColor: Colors.white,
                                padding: const EdgeInsets.symmetric(
                                  vertical: 14,
                                ),
                              ),
                            ),
                          ),
                          const SizedBox(width: 12),
                          Expanded(
                            child: ElevatedButton.icon(
                              onPressed: () =>
                                  _updatePaymentStatus(order, 'unpaid'),
                              icon: const Icon(Icons.pending, size: 18),
                              label: Text(languageProvider.t('unpaid')),
                              style: ElevatedButton.styleFrom(
                                backgroundColor: const Color(0xFFF59E0B),
                                foregroundColor: Colors.white,
                                padding: const EdgeInsets.symmetric(
                                  vertical: 14,
                                ),
                              ),
                            ),
                          ),
                        ],
                      ),
                    ],
                  ),
                ],
                const SizedBox(height: 24),
                SizedBox(
                  width: double.infinity,
                  child: ElevatedButton(
                    onPressed: () => Navigator.pop(context),
                    style: ElevatedButton.styleFrom(
                      padding: const EdgeInsets.symmetric(vertical: 15),
                    ),
                    child: Text(
                      languageProvider.t('close'),
                      style: const TextStyle(fontSize: 16),
                    ),
                  ),
                ),
              ],
            ),
          ),
        ),
      ),
    );
  }

  Future<void> _updatePaymentStatus(
    Map<String, dynamic> order,
    String newStatus,
  ) async {
    final languageProvider = context.read<LanguageProvider>();
    final confirmed = await showDialog<bool>(
      context: context,
      builder: (context) => AlertDialog(
        title: Text(languageProvider.t('update_payment_status')),
        content: Text(
          newStatus == 'paid'
              ? languageProvider.t('confirm_mark_paid')
              : languageProvider.t('confirm_mark_unpaid'),
        ),
        actions: [
          TextButton(
            onPressed: () => Navigator.pop(context, false),
            child: Text(languageProvider.t('cancel')),
          ),
          ElevatedButton(
            onPressed: () => Navigator.pop(context, true),
            style: ElevatedButton.styleFrom(
              backgroundColor: newStatus == 'paid'
                  ? const Color(0xFF16A34A)
                  : const Color(0xFFF59E0B),
              foregroundColor: Colors.white,
            ),
            child: Text(languageProvider.t('confirm')),
          ),
        ],
      ),
    );

    if (confirmed != true || !mounted) return;

    showDialog(
      context: context,
      barrierDismissible: false,
      builder: (context) => Center(
        child: Card(
          child: Padding(
            padding: const EdgeInsets.all(24),
            child: Column(
              mainAxisSize: MainAxisSize.min,
              children: [
                const CircularProgressIndicator(),
                const SizedBox(height: 16),
                Text(languageProvider.t('loading')),
              ],
            ),
          ),
        ),
      ),
    );

    try {
      final orderId = order['id'];
      final endpoint = '${ApiConfig.baseUrl}/orders/$orderId/payment-status';

      final response = await http
          .put(
            Uri.parse(endpoint),
            headers: {'Content-Type': 'application/json'},
            body: json.encode({'payment_status': newStatus}),
          )
          .timeout(const Duration(seconds: 10));

      if (mounted) {
        Navigator.of(context, rootNavigator: true).pop();
      }
      if (mounted) {
        Navigator.pop(context);
      }

      final data = json.decode(response.body);
      if (response.statusCode == 200 && data['success'] == true) {
        if (!mounted) return;
        showTopNotification(
          context,
          newStatus == 'paid'
              ? languageProvider.t('order_payment_marked_paid')
              : languageProvider.t('order_payment_marked_unpaid'),
          type: newStatus == 'paid'
              ? TopNotificationType.success
              : TopNotificationType.warning,
        );
        refreshData();
        return;
      }

      if (!mounted) return;
      showTopNotification(
        context,
        languageProvider.t('error'),
        type: TopNotificationType.error,
      );
    } catch (_) {
      if (mounted) {
        Navigator.of(context, rootNavigator: true).pop();
      }
      if (mounted) {
        Navigator.pop(context);
      }
      if (!mounted) return;
      showTopNotification(
        context,
        languageProvider.t('error'),
        type: TopNotificationType.error,
      );
    }
  }

  Future<void> _showEditShippingDialog(Map<String, dynamic> order) async {
    final languageProvider = context.read<LanguageProvider>();
    final controller = TextEditingController(
      text: _asDouble(order['shipping']).toStringAsFixed(2),
    );
    var isFreeShipping = _asBool(order['shipping_is_free']);
    String? errorText;

    final result = await showDialog<Map<String, dynamic>>(
      context: context,
      builder: (context) => StatefulBuilder(
        builder: (context, setDialogState) {
          return AlertDialog(
            title: Text(languageProvider.t('edit_shipping')),
            content: Column(
              mainAxisSize: MainAxisSize.min,
              children: [
                TextField(
                  controller: controller,
                  keyboardType: const TextInputType.numberWithOptions(
                    decimal: true,
                  ),
                  decoration: InputDecoration(
                    labelText: languageProvider.t('shipping'),
                    prefixText: '\$ ',
                    errorText: errorText,
                  ),
                ),
                const SizedBox(height: 12),
                SwitchListTile(
                  contentPadding: EdgeInsets.zero,
                  value: isFreeShipping,
                  title: Text(languageProvider.t('free_delivery')),
                  subtitle: Text(
                    isFreeShipping
                        ? languageProvider.t('free_delivery')
                        : languageProvider.t('none'),
                  ),
                  onChanged: (value) {
                    setDialogState(() {
                      isFreeShipping = value;
                    });
                  },
                ),
              ],
            ),
            actions: [
              TextButton(
                onPressed: () => Navigator.pop(context),
                child: Text(languageProvider.t('cancel')),
              ),
              ElevatedButton(
                onPressed: () {
                  final shipping = double.tryParse(controller.text.trim());
                  if (shipping == null || shipping < 0) {
                    setDialogState(() {
                      errorText = languageProvider.t('validation_error');
                    });
                    return;
                  }

                  Navigator.pop(context, {
                    'shipping': shipping,
                    'shipping_is_free': isFreeShipping,
                  });
                },
                child: Text(languageProvider.t('confirm')),
              ),
            ],
          );
        },
      ),
    );

    controller.dispose();
    if (result == null || !mounted) return;

    showDialog(
      context: context,
      barrierDismissible: false,
      builder: (context) => Center(
        child: Card(
          child: Padding(
            padding: const EdgeInsets.all(24),
            child: Column(
              mainAxisSize: MainAxisSize.min,
              children: [
                const CircularProgressIndicator(),
                const SizedBox(height: 16),
                Text(languageProvider.t('loading')),
              ],
            ),
          ),
        ),
      ),
    );

    try {
      final orderId = order['id'];
      final endpoint = '${ApiConfig.baseUrl}/orders/$orderId/shipping';
      final response = await http
          .put(
            Uri.parse(endpoint),
            headers: {'Content-Type': 'application/json'},
            body: json.encode(result),
          )
          .timeout(const Duration(seconds: 10));

      if (mounted) {
        Navigator.of(context, rootNavigator: true).pop();
      }
      if (mounted) {
        Navigator.pop(context);
      }

      final data = json.decode(response.body);
      if (response.statusCode == 200 && data['success'] == true) {
        if (!mounted) return;
        showTopNotification(
          context,
          languageProvider.t('shipping_updated'),
          type: TopNotificationType.success,
        );
        refreshData();
        return;
      }

      if (!mounted) return;
      showTopNotification(
        context,
        data['message']?.toString() ?? languageProvider.t('error'),
        type: TopNotificationType.error,
      );
    } catch (_) {
      if (mounted) {
        Navigator.of(context, rootNavigator: true).pop();
      }
      if (mounted) {
        Navigator.pop(context);
      }
      if (!mounted) return;
      showTopNotification(
        context,
        languageProvider.t('error'),
        type: TopNotificationType.error,
      );
    }
  }

  Widget _buildInfoRow(IconData icon, String label, String value) {
    final isDark = Theme.of(context).brightness == Brightness.dark;

    return Padding(
      padding: const EdgeInsets.only(bottom: 14),
      child: Row(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Icon(
            icon,
            size: 20,
            color: isDark ? Colors.white54 : const Color(0xFF667085),
          ),
          const SizedBox(width: 12),
          Expanded(
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                Text(
                  label,
                  style: TextStyle(
                    fontSize: 12,
                    fontWeight: FontWeight.w600,
                    color: isDark ? Colors.white60 : const Color(0xFF98A2B3),
                  ),
                ),
                const SizedBox(height: 4),
                Text(
                  value,
                  style: TextStyle(
                    fontWeight: FontWeight.w700,
                    fontSize: 14,
                    color: isDark ? Colors.white : const Color(0xFF111827),
                  ),
                ),
              ],
            ),
          ),
        ],
      ),
    );
  }

  double _asDouble(dynamic value) {
    if (value is num) return value.toDouble();
    return double.tryParse(value?.toString() ?? '') ?? 0;
  }

  bool _asBool(dynamic value) {
    return value == true ||
        value == 1 ||
        value?.toString().toLowerCase() == '1' ||
        value?.toString().toLowerCase() == 'true';
  }

  String _shippingLabel(
    Map<String, dynamic> order,
    LanguageProvider languageProvider,
  ) {
    final shipping = _asDouble(order['shipping']);
    final label = '\$${shipping.toStringAsFixed(2)}';

    if (_asBool(order['shipping_is_free'])) {
      return '$label (${languageProvider.t('free_delivery')})';
    }

    return '$label (${languageProvider.t('none')})';
  }

  String _orderStatus(Map<String, dynamic> order) {
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

  String _statusLabel(String status, LanguageProvider languageProvider) {
    switch (_normalizeShippingStatus(status)) {
      case 'pending':
        return languageProvider.t('pending');
      case 'shipped':
        return languageProvider.t('shipped');
      case 'delivered':
        return languageProvider.t('delivered');
      case 'cancelled':
        return languageProvider.t('cancelled');
      default:
        return status;
    }
  }
}

class _PulsingDot extends StatefulWidget {
  final Color color;
  const _PulsingDot({required this.color});

  @override
  State<_PulsingDot> createState() => _PulsingDotState();
}

class _PulsingDotState extends State<_PulsingDot>
    with SingleTickerProviderStateMixin {
  late final AnimationController _controller;
  late final Animation<double> _opacity;
  late final Animation<double> _scale;

  @override
  void initState() {
    super.initState();
    _controller = AnimationController(
      vsync: this,
      duration: const Duration(milliseconds: 900),
    )..repeat(reverse: true);
    _opacity = Tween<double>(
      begin: 0.35,
      end: 1.0,
    ).animate(CurvedAnimation(parent: _controller, curve: Curves.easeInOut));
    _scale = Tween<double>(
      begin: 0.7,
      end: 1.15,
    ).animate(CurvedAnimation(parent: _controller, curve: Curves.easeInOut));
  }

  @override
  void dispose() {
    _controller.dispose();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    return AnimatedBuilder(
      animation: _controller,
      builder: (context, _) {
        return Transform.scale(
          scale: _scale.value,
          child: Container(
            width: 7,
            height: 7,
            decoration: BoxDecoration(
              shape: BoxShape.circle,
              color: widget.color.withValues(alpha: _opacity.value),
            ),
          ),
        );
      },
    );
  }
}
