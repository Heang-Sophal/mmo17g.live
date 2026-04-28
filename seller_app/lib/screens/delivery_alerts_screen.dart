import 'dart:convert';

import 'package:flutter/material.dart';
import 'package:http/http.dart' as http;
import 'package:provider/provider.dart';
import 'package:seller_app/config/api_config.dart';
import 'package:seller_app/controllers/navigation_bar_controller.dart';
import 'package:seller_app/providers/auth_provider.dart';
import 'package:seller_app/providers/language_provider.dart';
import 'package:seller_app/screens/orders_screen.dart';
import 'package:seller_app/utils/top_notification.dart';

class DeliveryAlertsScreen extends StatefulWidget {
  const DeliveryAlertsScreen({super.key});

  @override
  State<DeliveryAlertsScreen> createState() => _DeliveryAlertsScreenState();
}

class _DeliveryAlertsScreenState extends State<DeliveryAlertsScreen> {
  final ScrollController _scrollController = ScrollController();

  bool _isLoading = true;
  String? _error;
  List<Map<String, dynamic>> _alerts = [];
  double _lastScrollOffset = 0;

  @override
  void initState() {
    super.initState();
    _scrollController.addListener(_onScroll);
    _loadAlerts();
  }

  @override
  void dispose() {
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

  Future<void> _loadAlerts() async {
    final authProvider = context.read<AuthProvider>();
    final languageProvider = context.read<LanguageProvider>();
    final token = authProvider.token;

    if (token == null || token.isEmpty) {
      setState(() {
        _error = languageProvider.t('failed_to_load_alerts');
        _isLoading = false;
      });
      return;
    }

    setState(() {
      _isLoading = true;
      _error = null;
    });

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
      if (response.statusCode == 200 && data['success'] == true) {
        if (!mounted) return;
        setState(() {
          _alerts = List<Map<String, dynamic>>.from(data['data'] ?? []);
          _isLoading = false;
        });
        return;
      }

      if (!mounted) return;
      setState(() {
        _error = languageProvider.t('failed_to_load_alerts');
        _isLoading = false;
      });
    } catch (_) {
      if (!mounted) return;
      setState(() {
        _error = languageProvider.t('failed_to_load_alerts');
        _isLoading = false;
      });
    }
  }

  Future<void> _markAlertAsRead(String alertId) async {
    final authProvider = context.read<AuthProvider>();
    final token = authProvider.token;
    if (token == null || token.isEmpty) return;

    try {
      await http
          .post(
            Uri.parse('${ApiConfig.baseUrl}/delivery/alerts/$alertId/read'),
            headers: {
              'Authorization': 'Bearer $token',
              'Accept': 'application/json',
            },
          )
          .timeout(const Duration(seconds: 10));

      if (!mounted) return;
      setState(() {
        _alerts = _alerts.map((alert) {
          if (alert['id'].toString() == alertId) {
            return {...alert, 'is_read': true};
          }
          return alert;
        }).toList();
      });
    } catch (_) {}
  }

  Future<void> _markAllAsRead() async {
    final authProvider = context.read<AuthProvider>();
    final languageProvider = context.read<LanguageProvider>();
    final token = authProvider.token;
    if (token == null || token.isEmpty) return;

    try {
      await http
          .post(
            Uri.parse('${ApiConfig.baseUrl}/delivery/alerts/read-all'),
            headers: {
              'Authorization': 'Bearer $token',
              'Accept': 'application/json',
            },
          )
          .timeout(const Duration(seconds: 10));

      if (!mounted) return;
      setState(() {
        _alerts = _alerts.map((alert) => {...alert, 'is_read': true}).toList();
      });
      showTopNotification(
        context,
        languageProvider.t('mark_all_read_success'),
        type: TopNotificationType.success,
      );
    } catch (_) {
      if (!mounted) return;
      showTopNotification(
        context,
        languageProvider.t('error'),
        type: TopNotificationType.error,
      );
    }
  }

  Future<void> _openAlertOrder(Map<String, dynamic> alert) async {
    final alertId = alert['id']?.toString() ?? '';
    final saleRef = alert['sale_ref']?.toString().trim() ?? '';

    if (alertId.isNotEmpty) {
      await _markAlertAsRead(alertId);
    }

    if (!mounted || saleRef.isEmpty) {
      return;
    }

    await Navigator.push(
      context,
      MaterialPageRoute(
        builder: (context) =>
            OrdersScreen(initialSaleRef: saleRef, autoOpenInitialOrder: true),
      ),
    );

    if (mounted) {
      _loadAlerts();
    }
  }

  int get _unreadCount =>
      _alerts.where((alert) => alert['is_read'] != true).length;

  String _formatDate(dynamic value) {
    if (value == null) return '';
    final raw = value.toString();
    if (raw.length >= 16) {
      return raw.substring(0, 16).replaceFirst('T', ' ');
    }
    return raw;
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
        title: Column(
          mainAxisSize: MainAxisSize.min,
          children: [
            Text(
              languageProvider.t('nav_alerts'),
              style: TextStyle(
                fontSize: 23,
                fontWeight: FontWeight.w700,
                color: isDark ? Colors.white : const Color(0xFF101828),
              ),
            ),
            const SizedBox(height: 4),
            Text(
              languageProvider.t('alerts_subtitle'),
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
            icon: Icons.done_all_rounded,
            tooltip: languageProvider.t('mark_all_read'),
            onTap: _alerts.isEmpty ? null : _markAllAsRead,
          ),
          const SizedBox(width: 8),
          _buildHeaderAction(
            icon: _isLoading ? null : Icons.refresh_rounded,
            tooltip: languageProvider.t('refresh'),
            busy: _isLoading,
            onTap: _isLoading ? null : _loadAlerts,
          ),
          const SizedBox(width: 14),
        ],
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
                  boxShadow: [
                    BoxShadow(
                      color: isDark
                          ? Colors.black.withValues(alpha: 0.12)
                          : const Color(0xFFB7C2E9).withValues(alpha: 0.16),
                      blurRadius: 24,
                      offset: const Offset(0, 12),
                    ),
                  ],
                ),
                child: Row(
                  children: [
                    Expanded(
                      child: _buildSummaryPill(
                        icon: Icons.notifications_active_rounded,
                        label: languageProvider.t('unread_alerts'),
                        value: '$_unreadCount',
                        color: const Color(0xFF7C3AED),
                      ),
                    ),
                    const SizedBox(width: 12),
                    Expanded(
                      child: _buildSummaryPill(
                        icon: Icons.done_all_rounded,
                        label: languageProvider.t('all_read'),
                        value: '${_alerts.length - _unreadCount}',
                        color: const Color(0xFF16A34A),
                      ),
                    ),
                  ],
                ),
              ),
            ),
            Expanded(child: _buildBody(languageProvider)),
          ],
        ),
      ),
    );
  }

  Widget _buildBody(LanguageProvider languageProvider) {
    if (_isLoading) {
      return const Center(child: CircularProgressIndicator());
    }

    if (_error != null) {
      return _buildStateCard(
        icon: Icons.notifications_off_outlined,
        title: _error!,
        subtitle: languageProvider.t('try_again'),
        actionLabel: languageProvider.t('retry'),
        onAction: _loadAlerts,
      );
    }

    if (_alerts.isEmpty) {
      return _buildStateCard(
        icon: Icons.notifications_none_rounded,
        title: languageProvider.t('no_alerts'),
        subtitle: languageProvider.t('alerts_subtitle'),
      );
    }

    return RefreshIndicator(
      onRefresh: _loadAlerts,
      child: ListView.separated(
        controller: _scrollController,
        physics: const BouncingScrollPhysics(),
        padding: const EdgeInsets.fromLTRB(16, 4, 16, 24),
        itemCount: _alerts.length,
        separatorBuilder: (context, index) => const SizedBox(height: 14),
        itemBuilder: (context, index) {
          return _buildAlertCard(_alerts[index], languageProvider);
        },
      ),
    );
  }

  Widget _buildAlertCard(
    Map<String, dynamic> alert,
    LanguageProvider languageProvider,
  ) {
    final theme = Theme.of(context);
    final isDark = theme.brightness == Brightness.dark;
    final isRead = alert['is_read'] == true;
    final saleRef = alert['sale_ref']?.toString() ?? '';
    final warehouseName = alert['warehouse_name']?.toString() ?? '';
    final title = _localizedAlertTitle(alert, languageProvider);
    final message = _localizedAlertMessage(alert, languageProvider);

    return Material(
      color: Colors.transparent,
      child: InkWell(
        onTap: () => _openAlertOrder(alert),
        borderRadius: BorderRadius.circular(26),
        child: Ink(
          decoration: BoxDecoration(
            color: isRead
                ? (isDark
                      ? Colors.white.withValues(alpha: 0.03)
                      : Colors.white.withValues(alpha: 0.9))
                : (isDark ? const Color(0xFF1B1436) : const Color(0xFFF8F4FF)),
            borderRadius: BorderRadius.circular(26),
            border: Border.all(
              color: isRead
                  ? (isDark
                        ? Colors.white.withValues(alpha: 0.08)
                        : const Color(0xFFE3E7F4))
                  : const Color(0xFFDCCFFB),
            ),
            boxShadow: [
              BoxShadow(
                color: isRead
                    ? (isDark
                          ? Colors.black.withValues(alpha: 0.12)
                          : const Color(0xFFB7C2E9).withValues(alpha: 0.14))
                    : const Color(0xFFA88BFF).withValues(alpha: 0.18),
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
                    Container(
                      width: 46,
                      height: 46,
                      decoration: BoxDecoration(
                        color: isRead
                            ? Colors.grey.withValues(alpha: 0.12)
                            : theme.colorScheme.primary.withValues(alpha: 0.14),
                        shape: BoxShape.circle,
                      ),
                      child: Icon(
                        Icons.notifications_active_rounded,
                        color: isRead
                            ? (isDark ? Colors.white60 : Colors.grey[600])
                            : theme.colorScheme.primary,
                      ),
                    ),
                    const SizedBox(width: 12),
                    Expanded(
                      child: Column(
                        crossAxisAlignment: CrossAxisAlignment.start,
                        children: [
                          Row(
                            children: [
                              Expanded(
                                child: Text(
                                  title,
                                  style: TextStyle(
                                    fontSize: 16,
                                    fontWeight: FontWeight.w800,
                                    color: isDark
                                        ? Colors.white
                                        : const Color(0xFF111827),
                                  ),
                                ),
                              ),
                              const SizedBox(width: 8),
                              _buildAlertStatusChip(
                                label: isRead
                                    ? languageProvider.t('all_read')
                                    : languageProvider.t('new_alert'),
                                color: isRead
                                    ? const Color(0xFF64748B)
                                    : theme.colorScheme.primary,
                              ),
                            ],
                          ),
                          const SizedBox(height: 8),
                          Text(
                            message,
                            style: TextStyle(
                              fontSize: 13.5,
                              height: 1.45,
                              color: isDark
                                  ? Colors.white.withValues(alpha: 0.76)
                                  : const Color(0xFF475467),
                            ),
                          ),
                        ],
                      ),
                    ),
                  ],
                ),
                const SizedBox(height: 14),
                Wrap(
                  spacing: 8,
                  runSpacing: 8,
                  children: [
                    if (saleRef.isNotEmpty)
                      _buildAlertStatusChip(
                        label: '${languageProvider.t('sale')}: $saleRef',
                        color: const Color(0xFF4F46E5),
                        icon: Icons.receipt_long_rounded,
                      ),
                    if (warehouseName.isNotEmpty)
                      _buildAlertStatusChip(
                        label: warehouseName,
                        color: const Color(0xFF0F766E),
                        icon: Icons.warehouse_rounded,
                      ),
                    _buildAlertStatusChip(
                      label: _formatDate(alert['created_at']),
                      color: const Color(0xFF64748B),
                      icon: Icons.schedule_rounded,
                    ),
                  ],
                ),
                if (saleRef.isNotEmpty) ...[
                  const SizedBox(height: 14),
                  Row(
                    children: [
                      Icon(
                        Icons.open_in_new_rounded,
                        size: 16,
                        color: theme.colorScheme.primary,
                      ),
                      const SizedBox(width: 6),
                      Text(
                        languageProvider.t('tap_to_open_order'),
                        style: TextStyle(
                          fontSize: 12,
                          fontWeight: FontWeight.w700,
                          color: theme.colorScheme.primary,
                        ),
                      ),
                    ],
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

  Widget _buildSummaryPill({
    required IconData icon,
    required String label,
    required String value,
    required Color color,
  }) {
    final isDark = Theme.of(context).brightness == Brightness.dark;

    return Container(
      padding: const EdgeInsets.symmetric(horizontal: 14, vertical: 14),
      decoration: BoxDecoration(
        color: color.withValues(alpha: isDark ? 0.18 : 0.1),
        borderRadius: BorderRadius.circular(18),
      ),
      child: Row(
        children: [
          Container(
            width: 36,
            height: 36,
            decoration: BoxDecoration(
              color: color.withValues(alpha: 0.14),
              shape: BoxShape.circle,
            ),
            child: Icon(icon, color: color, size: 18),
          ),
          const SizedBox(width: 10),
          Expanded(
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                Text(
                  label,
                  maxLines: 1,
                  overflow: TextOverflow.ellipsis,
                  style: TextStyle(
                    fontSize: 11,
                    fontWeight: FontWeight.w600,
                    color: isDark ? Colors.white70 : const Color(0xFF667085),
                  ),
                ),
                const SizedBox(height: 4),
                Text(
                  value,
                  style: TextStyle(
                    fontSize: 18,
                    fontWeight: FontWeight.w800,
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

  Widget _buildAlertStatusChip({
    required String label,
    required Color color,
    IconData? icon,
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
          if (icon != null) ...[
            Icon(icon, size: 14, color: color),
            const SizedBox(width: 4),
          ],
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

  String _localizedAlertTitle(
    Map<String, dynamic> alert,
    LanguageProvider languageProvider,
  ) {
    switch (alert['type']?.toString()) {
      case 'sale_created':
        return languageProvider.t('notification_sale_created_title');
      case 'delivery_accepted':
        return languageProvider.t('notification_delivery_accepted_title');
      case 'delivery_completed':
        return languageProvider.t('notification_delivery_completed_title');
      default:
        return alert['title']?.toString() ?? languageProvider.t('nav_alerts');
    }
  }

  String _localizedAlertMessage(
    Map<String, dynamic> alert,
    LanguageProvider languageProvider,
  ) {
    final payload = Map<String, dynamic>.from(alert['payload'] ?? {});
    final customerName =
        payload['customer_name']?.toString().trim().isNotEmpty == true
        ? payload['customer_name'].toString()
        : '-';
    final saleRef = payload['sale_ref']?.toString().trim().isNotEmpty == true
        ? payload['sale_ref'].toString()
        : (alert['sale_ref']?.toString() ?? '-');
    final warehouseName =
        payload['warehouse_name']?.toString().trim().isNotEmpty == true
        ? payload['warehouse_name'].toString()
        : (alert['warehouse_name']?.toString() ?? '-');
    final deliveryName =
        payload['delivery_name']?.toString().trim().isNotEmpty == true
        ? payload['delivery_name'].toString()
        : '-';

    switch (alert['type']?.toString()) {
      case 'sale_created':
        return _fillTemplate(
          languageProvider.t('notification_sale_created_message'),
          {
            'saleRef': saleRef,
            'customerName': customerName,
            'warehouseName': warehouseName,
          },
        );
      case 'delivery_accepted':
        return _fillTemplate(
          languageProvider.t('notification_delivery_accepted_message'),
          {
            'saleRef': saleRef,
            'customerName': customerName,
            'deliveryName': deliveryName,
          },
        );
      case 'delivery_completed':
        return _fillTemplate(
          languageProvider.t('notification_delivery_completed_message'),
          {
            'saleRef': saleRef,
            'customerName': customerName,
            'deliveryName': deliveryName,
          },
        );
      default:
        return alert['message']?.toString() ?? '';
    }
  }

  String _fillTemplate(String template, Map<String, String> values) {
    var result = template;
    for (final entry in values.entries) {
      result = result.replaceAll('{${entry.key}}', entry.value);
    }
    return result;
  }
}
