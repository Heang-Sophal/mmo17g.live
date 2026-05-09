import 'package:delivery_app/providers/auth_provider.dart';
import 'package:delivery_app/providers/language_provider.dart';
import 'package:delivery_app/services/delivery_api_service.dart';
import 'package:flutter/material.dart';
import 'package:provider/provider.dart';

class HomeScreen extends StatefulWidget {
  const HomeScreen({super.key, required this.onNavigate});

  final ValueChanged<int> onNavigate;

  @override
  State<HomeScreen> createState() => HomeScreenState();
}

class HomeScreenState extends State<HomeScreen> {
  final DeliveryApiService _apiService = DeliveryApiService();

  Map<String, dynamic>? _dashboard;
  bool _isLoading = true;
  String? _error;

  @override
  void initState() {
    super.initState();
    WidgetsBinding.instance.addPostFrameCallback((_) {
      refreshData();
    });
  }

  Future<void> refreshData() async {
    final authProvider = context.read<AuthProvider>();
    final token = authProvider.token;

    if (token == null || token.isEmpty) return;

    setState(() {
      _isLoading = true;
      _error = null;
    });

    _apiService.setToken(token);

    try {
      final dashboard = await _apiService.getDashboard();
      if (!mounted) return;
      setState(() {
        _dashboard = dashboard;
        _isLoading = false;
      });
    } catch (e) {
      if (!mounted) return;
      setState(() {
        _error = e.toString();
        _isLoading = false;
      });
    }
  }

  @override
  Widget build(BuildContext context) {
    final languageProvider = context.watch<LanguageProvider>();
    final isDark = Theme.of(context).brightness == Brightness.dark;

    if (_isLoading && _dashboard == null) {
      return const Center(child: CircularProgressIndicator());
    }

    if (_error != null && _dashboard == null) {
      return Center(
        child: Padding(
          padding: const EdgeInsets.all(24),
          child: Column(
            mainAxisSize: MainAxisSize.min,
            children: [
              const Icon(Icons.cloud_off_outlined, size: 40),
              const SizedBox(height: 12),
              Text(_error!, textAlign: TextAlign.center),
              const SizedBox(height: 16),
              FilledButton(
                onPressed: refreshData,
                child: Text(languageProvider.t('retry')),
              ),
            ],
          ),
        ),
      );
    }

    final authUser = context.watch<AuthProvider>().user;
    final warehouse =
        (_dashboard?['warehouse'] as Map?)?.cast<String, dynamic>() ?? {};
    final orders =
        (_dashboard?['orders'] as Map?)?.cast<String, dynamic>() ?? {};
    final alerts =
        (_dashboard?['alerts'] as Map?)?.cast<String, dynamic>() ?? {};
    final recentOrders = (_dashboard?['recent_orders'] as List?) ?? const [];
    final displayName = _displayName(authUser?.name);
    final avatarUrl = authUser?.avatarUrl;
    final warehouseName =
        (warehouse['name'] ?? authUser?.assignedWarehouseName ?? '-')
            .toString();
    final warehouseCity =
        (warehouse['city'] ?? authUser?.assignedWarehouseCity ?? '').toString();

    return RefreshIndicator(
      onRefresh: refreshData,
      child: ListView(
        padding: const EdgeInsets.fromLTRB(16, 8, 16, 24),
        children: [
          Container(
            padding: const EdgeInsets.fromLTRB(20, 20, 20, 18),
            decoration: BoxDecoration(
              gradient: LinearGradient(
                colors: isDark
                    ? const [
                        Color(0xFF6F4D08),
                        Color(0xFF35250A),
                        Color(0xFF13213D),
                      ]
                    : const [
                        Color(0xFFD6A735),
                        Color(0xFF735F33),
                        Color(0xFF1D4ED8),
                      ],
                begin: Alignment.topLeft,
                end: Alignment.bottomRight,
              ),
              borderRadius: BorderRadius.circular(30),
              boxShadow: const [
                BoxShadow(
                  color: Color(0x22D6A735),
                  blurRadius: 30,
                  offset: Offset(0, 18),
                ),
              ],
            ),
            child: Stack(
              children: [
                Positioned(
                  top: -54,
                  right: -36,
                  child: Container(
                    width: 154,
                    height: 154,
                    decoration: BoxDecoration(
                      color: Colors.white.withValues(alpha: 0.08),
                      shape: BoxShape.circle,
                    ),
                  ),
                ),
                Positioned(
                  bottom: -64,
                  left: -28,
                  child: Container(
                    width: 136,
                    height: 136,
                    decoration: BoxDecoration(
                      color: Colors.white.withValues(alpha: 0.05),
                      shape: BoxShape.circle,
                    ),
                  ),
                ),
                Column(
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: [
                    Row(
                      crossAxisAlignment: CrossAxisAlignment.start,
                      children: [
                        _ProfileAvatar(
                          imageUrl: avatarUrl,
                          fallbackName: displayName,
                        ),
                        const Spacer(),
                        _HeaderTag(
                          icon: Icons.verified_user_rounded,
                          label: _roleLabel(authUser?.role, languageProvider),
                        ),
                      ],
                    ),
                    const SizedBox(height: 8),
                    Align(
                      alignment: const Alignment(0.16, 0),
                      child: Text(
                        displayName,
                        maxLines: 2,
                        overflow: TextOverflow.ellipsis,
                        textAlign: TextAlign.center,
                        style: TextStyle(
                          color: Colors.white,
                          fontSize: _nameFontSize(displayName),
                          fontWeight: FontWeight.w800,
                          height: 1.02,
                          letterSpacing: -0.8,
                        ),
                      ),
                    ),
                    const SizedBox(height: 10),
                    Row(
                      children: [
                        Expanded(
                          child: _HeaderInfoPill(
                            icon: Icons.warehouse_rounded,
                            label: warehouseName,
                          ),
                        ),
                        if (warehouseCity.isNotEmpty) ...[
                          const SizedBox(width: 8),
                          Expanded(
                            child: _HeaderInfoPill(
                              icon: Icons.location_on_rounded,
                              label: warehouseCity,
                            ),
                          ),
                        ],
                      ],
                    ),
                  ],
                ),
              ],
            ),
          ),
          const SizedBox(height: 20),
          Text(
            languageProvider.t('quick_actions'),
            style: Theme.of(
              context,
            ).textTheme.titleMedium?.copyWith(fontWeight: FontWeight.w700),
          ),
          const SizedBox(height: 12),
          Row(
            children: [
              Expanded(
                child: _QuickActionCard(
                  icon: Icons.receipt_long_rounded,
                  title: languageProvider.t('view_all_orders'),
                  color: const Color(0xFFD6A735),
                  onTap: () => widget.onNavigate(1),
                ),
              ),
              const SizedBox(width: 12),
              Expanded(
                child: _QuickActionCard(
                  icon: Icons.notifications_active_rounded,
                  title: languageProvider.t('view_alerts'),
                  color: const Color(0xFFFFD86A),
                  onTap: () => widget.onNavigate(2),
                ),
              ),
            ],
          ),
          const SizedBox(height: 20),
          GridView.count(
            crossAxisCount: 2,
            crossAxisSpacing: 12,
            mainAxisSpacing: 12,
            childAspectRatio: 1.28,
            physics: const NeverScrollableScrollPhysics(),
            shrinkWrap: true,
            children: [
              _MetricCard(
                title: languageProvider.t('today_orders'),
                value: _toInt(orders['today']).toString(),
                icon: Icons.today_rounded,
                color: const Color(0xFFD6A735),
              ),
              _MetricCard(
                title: languageProvider.t('pending_orders'),
                value: _toInt(orders['pending']).toString(),
                icon: Icons.schedule_rounded,
                color: const Color(0xFFF59E0B),
              ),
              _MetricCard(
                title: languageProvider.t('delivered_orders'),
                value: _toInt(orders['delivered']).toString(),
                icon: Icons.check_circle_rounded,
                color: const Color(0xFF16A34A),
              ),
              _MetricCard(
                title: languageProvider.t('unread_alerts'),
                value: _toInt(alerts['unread']).toString(),
                icon: Icons.notifications_rounded,
                color: const Color(0xFFDC2626),
              ),
            ],
          ),
          const SizedBox(height: 20),
          Text(
            languageProvider.t('recent_orders'),
            style: Theme.of(
              context,
            ).textTheme.titleMedium?.copyWith(fontWeight: FontWeight.w700),
          ),
          const SizedBox(height: 12),
          if (recentOrders.isEmpty)
            Card(
              child: Padding(
                padding: const EdgeInsets.all(20),
                child: Text(languageProvider.t('no_recent_orders')),
              ),
            )
          else
            ...recentOrders.take(5).map((item) {
              final order = Map<String, dynamic>.from(item as Map);
              return Card(
                margin: const EdgeInsets.only(bottom: 10),
                child: ListTile(
                  leading: CircleAvatar(
                    backgroundColor: _statusColor(
                      order['status'],
                    ).withValues(alpha: 0.12),
                    child: Icon(
                      Icons.local_shipping_outlined,
                      color: _statusColor(order['status']),
                    ),
                  ),
                  title: Text(order['Ref']?.toString() ?? '-'),
                  subtitle: Text(order['client_name']?.toString() ?? '-'),
                  trailing: Column(
                    mainAxisAlignment: MainAxisAlignment.center,
                    crossAxisAlignment: CrossAxisAlignment.end,
                    children: [
                      Text(
                        _formatCurrency(order['GrandTotal']),
                        style: const TextStyle(fontWeight: FontWeight.w700),
                      ),
                      const SizedBox(height: 4),
                      Text(
                        _translateStatus(
                          order['status']?.toString(),
                          languageProvider,
                        ),
                      ),
                    ],
                  ),
                ),
              );
            }),
        ],
      ),
    );
  }

  int _toInt(dynamic value) {
    if (value is int) return value;
    if (value is num) return value.toInt();
    return int.tryParse(value?.toString() ?? '') ?? 0;
  }

  String _formatCurrency(dynamic value) {
    final amount = value is num
        ? value.toDouble()
        : double.tryParse(value?.toString() ?? '') ?? 0;
    return '\$${amount.toStringAsFixed(2)}';
  }

  Color _statusColor(dynamic status) {
    switch (_normalizeStatus(status?.toString())) {
      case 'delivered':
        return const Color(0xFF16A34A);
      case 'shipped':
        return const Color(0xFF7C3AED);
      default:
        return const Color(0xFFF59E0B);
    }
  }

  String _translateStatus(String? status, LanguageProvider languageProvider) {
    switch (_normalizeStatus(status)) {
      case 'shipped':
        return languageProvider.t('shipped');
      case 'delivered':
        return languageProvider.t('delivered');
      default:
        return languageProvider.t('pending');
    }
  }

  String _normalizeStatus(String? status) {
    final normalized = (status ?? 'pending').trim().toLowerCase();
    if (normalized == 'processing') {
      return 'shipped';
    }

    return normalized.isEmpty ? 'pending' : normalized;
  }

  String _displayName(String? value) {
    final name = value?.trim() ?? '';
    return name.isEmpty ? 'Delivery User' : name;
  }

  double _nameFontSize(String name) {
    final length = name.trim().length;
    if (length <= 14) return 36;
    if (length <= 24) return 31;
    if (length <= 34) return 26;
    return 22;
  }

  String _roleLabel(String? role, LanguageProvider languageProvider) {
    switch ((role ?? '').trim().toLowerCase()) {
      case 'admin':
        return languageProvider.isKhmer ? 'អ្នកគ្រប់គ្រង' : 'Admin';
      case 'owner':
        return languageProvider.isKhmer ? 'ម្ចាស់អាជីវកម្ម' : 'Owner';
      case 'delivery':
      case 'laivrison':
        return languageProvider.isKhmer ? 'អ្នកដឹកជញ្ជូន' : 'Delivery';
      default:
        return role?.trim().isNotEmpty == true
            ? role!.trim()
            : (languageProvider.isKhmer ? 'អ្នកប្រើប្រាស់' : 'User');
    }
  }
}

class _MetricCard extends StatelessWidget {
  const _MetricCard({
    required this.title,
    required this.value,
    required this.icon,
    required this.color,
  });

  final String title;
  final String value;
  final IconData icon;
  final Color color;

  @override
  Widget build(BuildContext context) {
    final isDark = Theme.of(context).brightness == Brightness.dark;
    final surfaceColor = isDark ? const Color(0xFF21190B) : Colors.white;
    final textColor = isDark
        ? const Color(0xFFFFE8A7)
        : const Color(0xFF201607);
    final mutedColor = isDark ? Colors.white70 : const Color(0xFF64748B);

    return Container(
      decoration: BoxDecoration(
        color: surfaceColor,
        borderRadius: BorderRadius.circular(24),
        border: Border.all(
          color: isDark
              ? Colors.white.withValues(alpha: 0.08)
              : color.withValues(alpha: 0.10),
        ),
        boxShadow: [
          BoxShadow(
            color: Colors.black.withValues(alpha: isDark ? 0.20 : 0.07),
            blurRadius: 18,
            offset: const Offset(0, 10),
          ),
        ],
      ),
      child: Padding(
        padding: const EdgeInsets.all(16),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            Container(
              width: 44,
              height: 44,
              decoration: BoxDecoration(
                color: color.withValues(alpha: 0.12),
                borderRadius: BorderRadius.circular(14),
              ),
              child: Icon(icon, color: color),
            ),
            const Spacer(),
            Text(
              value,
              style: Theme.of(context).textTheme.headlineSmall?.copyWith(
                fontWeight: FontWeight.w800,
                color: textColor,
              ),
              maxLines: 1,
              overflow: TextOverflow.ellipsis,
            ),
            const SizedBox(height: 4),
            Text(
              title,
              maxLines: 1,
              overflow: TextOverflow.ellipsis,
              style: TextStyle(color: mutedColor, fontWeight: FontWeight.w600),
            ),
          ],
        ),
      ),
    );
  }
}

class _QuickActionCard extends StatelessWidget {
  const _QuickActionCard({
    required this.icon,
    required this.title,
    required this.color,
    required this.onTap,
  });

  final IconData icon;
  final String title;
  final Color color;
  final VoidCallback onTap;

  @override
  Widget build(BuildContext context) {
    final isDark = Theme.of(context).brightness == Brightness.dark;
    final surfaceColor = isDark ? const Color(0xFF21190B) : Colors.white;
    final textColor = isDark
        ? const Color(0xFFFFE8A7)
        : const Color(0xFF201607);

    return InkWell(
      onTap: onTap,
      borderRadius: BorderRadius.circular(24),
      child: Ink(
        decoration: BoxDecoration(
          color: surfaceColor,
          borderRadius: BorderRadius.circular(24),
          border: Border.all(
            color: isDark
                ? Colors.white.withValues(alpha: 0.08)
                : color.withValues(alpha: 0.10),
          ),
          boxShadow: [
            BoxShadow(
              color: Colors.black.withValues(alpha: isDark ? 0.20 : 0.07),
              blurRadius: 18,
              offset: const Offset(0, 10),
            ),
          ],
        ),
        child: Padding(
          padding: const EdgeInsets.all(16),
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              Row(
                children: [
                  Container(
                    width: 46,
                    height: 46,
                    decoration: BoxDecoration(
                      color: color.withValues(alpha: 0.12),
                      borderRadius: BorderRadius.circular(14),
                    ),
                    child: Icon(icon, color: color),
                  ),
                  const Spacer(),
                  Icon(
                    Icons.arrow_forward_rounded,
                    color: color.withValues(alpha: 0.8),
                  ),
                ],
              ),
              const SizedBox(height: 18),
              Text(
                title,
                style: TextStyle(fontWeight: FontWeight.w800, color: textColor),
              ),
            ],
          ),
        ),
      ),
    );
  }
}

class _HeaderTag extends StatelessWidget {
  const _HeaderTag({required this.icon, required this.label});

  final IconData icon;
  final String label;

  @override
  Widget build(BuildContext context) {
    return Container(
      padding: const EdgeInsets.symmetric(horizontal: 12, vertical: 8),
      decoration: BoxDecoration(
        color: Colors.white.withValues(alpha: 0.14),
        borderRadius: BorderRadius.circular(999),
        border: Border.all(color: Colors.white.withValues(alpha: 0.12)),
      ),
      child: Row(
        mainAxisSize: MainAxisSize.min,
        children: [
          Icon(icon, color: Colors.white, size: 15),
          const SizedBox(width: 6),
          Text(
            label,
            maxLines: 1,
            overflow: TextOverflow.ellipsis,
            style: const TextStyle(
              color: Colors.white,
              fontWeight: FontWeight.w700,
            ),
          ),
        ],
      ),
    );
  }
}

class _HeaderInfoPill extends StatelessWidget {
  const _HeaderInfoPill({required this.icon, required this.label});

  final IconData icon;
  final String label;

  @override
  Widget build(BuildContext context) {
    return Container(
      width: double.infinity,
      padding: const EdgeInsets.symmetric(horizontal: 12, vertical: 9),
      decoration: BoxDecoration(
        color: Colors.white.withValues(alpha: 0.14),
        borderRadius: BorderRadius.circular(16),
        border: Border.all(color: Colors.white.withValues(alpha: 0.10)),
      ),
      child: Row(
        children: [
          Icon(icon, color: Colors.white, size: 15),
          const SizedBox(width: 6),
          Expanded(
            child: Text(
              label,
              maxLines: 1,
              overflow: TextOverflow.ellipsis,
              style: const TextStyle(
                color: Colors.white,
                fontWeight: FontWeight.w600,
              ),
            ),
          ),
        ],
      ),
    );
  }
}

class _ProfileAvatar extends StatelessWidget {
  const _ProfileAvatar({required this.imageUrl, required this.fallbackName});

  final String? imageUrl;
  final String fallbackName;

  @override
  Widget build(BuildContext context) {
    final initials = _initialsFromName(fallbackName);

    return Container(
      width: 78,
      height: 78,
      padding: const EdgeInsets.all(3),
      decoration: BoxDecoration(
        borderRadius: BorderRadius.circular(26),
        border: Border.all(color: Colors.white.withValues(alpha: 0.22)),
        gradient: const LinearGradient(
          colors: [Color(0x66FFFFFF), Color(0x22FFFFFF)],
          begin: Alignment.topLeft,
          end: Alignment.bottomRight,
        ),
      ),
      child: ClipRRect(
        borderRadius: BorderRadius.circular(22),
        child: imageUrl != null && imageUrl!.isNotEmpty
            ? Image.network(
                imageUrl!,
                fit: BoxFit.cover,
                errorBuilder: (context, error, stackTrace) {
                  return _AvatarFallback(initials: initials);
                },
              )
            : _AvatarFallback(initials: initials),
      ),
    );
  }

  String _initialsFromName(String name) {
    final parts = name
        .trim()
        .split(RegExp(r'\s+'))
        .where((part) => part.isNotEmpty)
        .take(2)
        .toList();

    if (parts.isEmpty) {
      return 'DU';
    }

    return parts.map((part) => part[0].toUpperCase()).join();
  }
}

class _AvatarFallback extends StatelessWidget {
  const _AvatarFallback({required this.initials});

  final String initials;

  @override
  Widget build(BuildContext context) {
    return Container(
      decoration: const BoxDecoration(
        gradient: LinearGradient(
          colors: [Color(0xFF22C55E), Color(0xFF0EA5E9)],
          begin: Alignment.topLeft,
          end: Alignment.bottomRight,
        ),
      ),
      alignment: Alignment.center,
      child: Text(
        initials,
        style: const TextStyle(
          color: Colors.white,
          fontSize: 24,
          fontWeight: FontWeight.w800,
        ),
      ),
    );
  }
}
