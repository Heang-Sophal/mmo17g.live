import 'package:delivery_app/providers/auth_provider.dart';
import 'package:delivery_app/providers/language_provider.dart';
import 'package:delivery_app/screens/orders_screen.dart';
import 'package:delivery_app/services/delivery_api_service.dart';
import 'package:flutter/material.dart';
import 'package:provider/provider.dart';

class DeliveryAlertsScreen extends StatefulWidget {
  const DeliveryAlertsScreen({super.key, this.onUnreadCountChanged});

  final ValueChanged<int>? onUnreadCountChanged;

  @override
  State<DeliveryAlertsScreen> createState() => DeliveryAlertsScreenState();
}

class DeliveryAlertsScreenState extends State<DeliveryAlertsScreen> {
  final DeliveryApiService _apiService = DeliveryApiService();

  List<Map<String, dynamic>> _alerts = [];
  bool _isLoading = true;
  bool _isMarkingAll = false;
  String? _error;

  int get unreadCount =>
      _alerts.where((alert) => !_isAlertRead(alert['is_read'])).length;

  @override
  void initState() {
    super.initState();
    WidgetsBinding.instance.addPostFrameCallback((_) {
      refreshData();
    });
  }

  Future<void> refreshData() async {
    final token = context.read<AuthProvider>().token;
    if (token == null || token.isEmpty) return;

    setState(() {
      _isLoading = true;
      _error = null;
    });

    _apiService.setToken(token);

    try {
      final alerts = await _apiService.getAlerts();
      if (!mounted) return;
      setState(() {
        _alerts = alerts;
        _isLoading = false;
      });
      _notifyUnreadCountChanged();
    } catch (e) {
      if (!mounted) return;
      setState(() {
        _error = e.toString();
        _isLoading = false;
      });
    }
  }

  Future<void> markAllRead() async {
    if (_isMarkingAll || _alerts.isEmpty) return;

    final token = context.read<AuthProvider>().token;
    if (token == null || token.isEmpty) return;
    _apiService.setToken(token);

    setState(() {
      _isMarkingAll = true;
    });

    try {
      await _apiService.markAllAlertsAsRead();
      if (!mounted) return;
      setState(() {
        _alerts = _alerts.map((alert) => {...alert, 'is_read': true}).toList();
      });
      _notifyUnreadCountChanged();
    } finally {
      if (mounted) {
        setState(() {
          _isMarkingAll = false;
        });
      }
    }
  }

  Future<void> markAlertReadByRef(String saleRef) async {
    if (saleRef.isEmpty) return;
    final normalizedRef = saleRef.trim().toLowerCase();
    final matches = _alerts
        .where(
          (a) =>
              !_isAlertRead(a['is_read']) &&
              a['sale_ref']?.toString().trim().toLowerCase() == normalizedRef,
        )
        .toList();
    for (final alert in matches) {
      await _markAsRead(alert);
      if (!mounted) return;
    }
  }

  Future<void> _markAsRead(Map<String, dynamic> alert) async {
    if (_isAlertRead(alert['is_read'])) return;

    final token = context.read<AuthProvider>().token;
    if (token == null || token.isEmpty) return;
    _apiService.setToken(token);

    await _apiService.markAlertAsRead(alert['id'].toString());

    if (!mounted) return;
    setState(() {
      _alerts = _alerts.map((item) {
        if (item['id'].toString() == alert['id'].toString()) {
          return {...item, 'is_read': true};
        }
        return item;
      }).toList();
    });
    _notifyUnreadCountChanged();
  }

  Future<void> _openAlertOrder(Map<String, dynamic> alert) async {
    final saleRef = alert['sale_ref']?.toString().trim() ?? '';

    await _markAsRead(alert);

    if (!mounted || saleRef.isEmpty) {
      return;
    }

    await Navigator.push(
      context,
      MaterialPageRoute(
        builder: (context) => OrdersScreen(
          initialSaleRef: saleRef,
          autoOpenInitialOrder: true,
          showStandaloneScaffold: true,
        ),
      ),
    );

    if (!mounted) return;
    refreshData();
  }

  @override
  Widget build(BuildContext context) {
    final languageProvider = context.watch<LanguageProvider>();

    return RefreshIndicator(
      onRefresh: refreshData,
      child: ListView(
        padding: const EdgeInsets.fromLTRB(16, 8, 16, 24),
        children: [
          if (_isMarkingAll)
            const Padding(
              padding: EdgeInsets.only(bottom: 12),
              child: LinearProgressIndicator(),
            ),
          if (_isLoading && _alerts.isEmpty)
            const Padding(
              padding: EdgeInsets.only(top: 40),
              child: Center(child: CircularProgressIndicator()),
            )
          else if (_error != null && _alerts.isEmpty)
            Padding(
              padding: const EdgeInsets.only(top: 40),
              child: Center(child: Text(_error!)),
            )
          else if (_alerts.isEmpty)
            Padding(
              padding: const EdgeInsets.only(top: 40),
              child: Center(child: Text(languageProvider.t('alerts_empty'))),
            )
          else
            ..._alerts.map((alert) {
              final isRead = _isAlertRead(alert['is_read']);
              return Card(
                margin: const EdgeInsets.only(bottom: 12),
                child: InkWell(
                  borderRadius: BorderRadius.circular(20),
                  onTap: () => _openAlertOrder(alert),
                  child: Padding(
                    padding: const EdgeInsets.all(16),
                    child: Row(
                      crossAxisAlignment: CrossAxisAlignment.start,
                      children: [
                        Container(
                          width: 12,
                          height: 12,
                          margin: const EdgeInsets.only(top: 6),
                          decoration: BoxDecoration(
                            color: isRead
                                ? Colors.grey
                                : const Color(0xFFDC2626),
                            shape: BoxShape.circle,
                          ),
                        ),
                        const SizedBox(width: 12),
                        Expanded(
                          child: Column(
                            crossAxisAlignment: CrossAxisAlignment.start,
                            children: [
                              Text(
                                alert['title']?.toString() ?? '-',
                                style: TextStyle(
                                  fontWeight: FontWeight.w700,
                                  color: isRead
                                      ? const Color(0xFF475569)
                                      : const Color(0xFF201607),
                                ),
                              ),
                              const SizedBox(height: 6),
                              Text(
                                alert['message']?.toString() ?? '',
                                style: const TextStyle(
                                  color: Color(0xFF475569),
                                ),
                              ),
                              const SizedBox(height: 10),
                              Wrap(
                                spacing: 8,
                                runSpacing: 8,
                                children: [
                                  _AlertTag(
                                    label:
                                        alert['warehouse_name']?.toString() ??
                                        languageProvider.t('warehouse'),
                                  ),
                                  if ((alert['sale_ref'] ?? '')
                                      .toString()
                                      .isNotEmpty)
                                    _AlertTag(
                                      label:
                                          '${languageProvider.t('order_ref')}: ${alert['sale_ref']}',
                                    ),
                                ],
                              ),
                              const SizedBox(height: 10),
                              Text(
                                _formatDate(alert['created_at']),
                                style: const TextStyle(
                                  fontSize: 12,
                                  color: Color(0xFF64748B),
                                ),
                              ),
                            ],
                          ),
                        ),
                      ],
                    ),
                  ),
                ),
              );
            }),
        ],
      ),
    );
  }

  String _formatDate(dynamic value) {
    final raw = value?.toString();
    if (raw == null || raw.isEmpty) return '-';

    final parsed = DateTime.tryParse(raw);
    if (parsed == null) return raw;

    return '${parsed.day.toString().padLeft(2, '0')}/${parsed.month.toString().padLeft(2, '0')}/${parsed.year} ${parsed.hour.toString().padLeft(2, '0')}:${parsed.minute.toString().padLeft(2, '0')}';
  }

  void _notifyUnreadCountChanged() {
    widget.onUnreadCountChanged?.call(unreadCount);
  }

  bool _isAlertRead(dynamic value) {
    return value == true || value == 1 || value == '1' || value == 'true';
  }
}

class _AlertTag extends StatelessWidget {
  const _AlertTag({required this.label});

  final String label;

  @override
  Widget build(BuildContext context) {
    return Container(
      padding: const EdgeInsets.symmetric(horizontal: 10, vertical: 6),
      decoration: BoxDecoration(
        color: const Color(0xFFD6A735).withValues(alpha: 0.08),
        borderRadius: BorderRadius.circular(999),
      ),
      child: Text(label),
    );
  }
}
