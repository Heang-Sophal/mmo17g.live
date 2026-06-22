import 'dart:convert';

import 'package:flutter/material.dart';
import 'package:http/http.dart' as http;
import 'package:provider/provider.dart';
import 'package:seller_app/config/api_config.dart';
import 'package:seller_app/providers/auth_provider.dart';
import 'package:seller_app/providers/language_provider.dart';
import 'package:seller_app/utils/top_notification.dart';

class SalesReturnScreen extends StatefulWidget {
  const SalesReturnScreen({super.key, this.menuButton});

  final Widget? menuButton;

  @override
  State<SalesReturnScreen> createState() => _SalesReturnScreenState();
}

class _SalesReturnScreenState extends State<SalesReturnScreen>
    with SingleTickerProviderStateMixin {
  late final TabController _tabController;

  final TextEditingController _salesSearchController = TextEditingController();
  final TextEditingController _returnsSearchController =
      TextEditingController();

  List<Map<String, dynamic>> _returnableSales = [];
  List<Map<String, dynamic>> _salesReturns = [];
  bool _isLoadingSales = true;
  bool _isLoadingReturns = true;
  String? _salesError;
  String? _returnsError;
  String _salesSearch = '';
  String _returnsSearch = '';

  @override
  void initState() {
    super.initState();
    _tabController = TabController(length: 2, vsync: this);
    _loadAll();
  }

  @override
  void dispose() {
    _tabController.dispose();
    _salesSearchController.dispose();
    _returnsSearchController.dispose();
    super.dispose();
  }

  Future<void> _loadAll() async {
    await Future.wait([_loadReturnableSales(), _loadSalesReturns()]);
  }

  Future<void> _loadReturnableSales() async {
    final languageProvider = context.read<LanguageProvider>();
    final userId = context.read<AuthProvider>().user?.id;

    if (userId == null || userId.isEmpty) {
      setState(() {
        _salesError = languageProvider.t('failed_to_load_returnable_sales');
        _isLoadingSales = false;
      });
      return;
    }

    setState(() {
      _isLoadingSales = true;
      _salesError = null;
    });

    try {
      final uri = Uri.parse(
        ApiConfig.getUrl(ApiConfig.returnableSales),
      ).replace(queryParameters: {'user_id': userId, 'limit': '100'});

      final response = await http
          .get(uri, headers: _headers())
          .timeout(const Duration(seconds: ApiConfig.timeoutSeconds));
      final data = json.decode(response.body);

      if (response.statusCode == 200 && data['success'] == true) {
        if (!mounted) return;
        setState(() {
          _returnableSales = List<Map<String, dynamic>>.from(
            data['data'] ?? [],
          );
          _isLoadingSales = false;
        });
        return;
      }

      if (!mounted) return;
      setState(() {
        _salesError =
            data['message']?.toString() ??
            languageProvider.t('failed_to_load_returnable_sales');
        _isLoadingSales = false;
      });
    } catch (_) {
      if (!mounted) return;
      setState(() {
        _salesError = languageProvider.t('failed_to_load_returnable_sales');
        _isLoadingSales = false;
      });
    }
  }

  Future<void> _loadSalesReturns() async {
    final languageProvider = context.read<LanguageProvider>();
    final userId = context.read<AuthProvider>().user?.id;

    if (userId == null || userId.isEmpty) {
      setState(() {
        _returnsError = languageProvider.t('failed_to_load_sales_returns');
        _isLoadingReturns = false;
      });
      return;
    }

    setState(() {
      _isLoadingReturns = true;
      _returnsError = null;
    });

    try {
      final uri = Uri.parse(
        ApiConfig.getUrl(ApiConfig.salesReturns),
      ).replace(queryParameters: {'user_id': userId, 'limit': '100'});

      final response = await http
          .get(uri, headers: _headers())
          .timeout(const Duration(seconds: ApiConfig.timeoutSeconds));
      final data = json.decode(response.body);

      if (response.statusCode == 200 && data['success'] == true) {
        if (!mounted) return;
        setState(() {
          _salesReturns = List<Map<String, dynamic>>.from(data['data'] ?? []);
          _isLoadingReturns = false;
        });
        return;
      }

      if (!mounted) return;
      setState(() {
        _returnsError =
            data['message']?.toString() ??
            languageProvider.t('failed_to_load_sales_returns');
        _isLoadingReturns = false;
      });
    } catch (_) {
      if (!mounted) return;
      setState(() {
        _returnsError = languageProvider.t('failed_to_load_sales_returns');
        _isLoadingReturns = false;
      });
    }
  }

  Map<String, String> _headers({bool jsonBody = false}) {
    final token = context.read<AuthProvider>().token;
    final headers = <String, String>{'Accept': 'application/json'};
    if (jsonBody) {
      headers['Content-Type'] = 'application/json';
    }
    if (token != null && token.isNotEmpty) {
      headers['Authorization'] = 'Bearer $token';
    }
    return headers;
  }

  @override
  Widget build(BuildContext context) {
    final languageProvider = context.watch<LanguageProvider>();
    final theme = Theme.of(context);
    final isDark = theme.brightness == Brightness.dark;
    final backgroundColor = isDark
        ? const Color(0xFF0F172A)
        : const Color(0xFFF4F6FB);

    return Scaffold(
      backgroundColor: backgroundColor,
      appBar: AppBar(
        toolbarHeight: 88,
        elevation: 0,
        scrolledUnderElevation: 0,
        backgroundColor: backgroundColor,
        surfaceTintColor: Colors.transparent,
        leading: widget.menuButton,
        leadingWidth: widget.menuButton != null ? 96 : null,
        title: Column(
          mainAxisSize: MainAxisSize.min,
          children: [
            Text(
              languageProvider.t('sales_returns'),
              style: TextStyle(
                fontSize: 23,
                fontWeight: FontWeight.w800,
                color: isDark ? Colors.white : const Color(0xFF111827),
              ),
            ),
            const SizedBox(height: 4),
            Text(
              languageProvider.t('sales_returns_subtitle'),
              style: TextStyle(
                fontSize: 12,
                fontWeight: FontWeight.w500,
                color: isDark
                    ? Colors.white.withValues(alpha: 0.68)
                    : const Color(0xFF667085),
              ),
            ),
          ],
        ),
        actions: [
          _buildHeaderAction(
            icon: Icons.refresh_rounded,
            tooltip: languageProvider.t('refresh'),
            onTap: _loadAll,
          ),
          const SizedBox(width: 14),
        ],
        bottom: PreferredSize(
          preferredSize: const Size.fromHeight(74),
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
                  fontWeight: FontWeight.w800,
                ),
                unselectedLabelStyle: const TextStyle(
                  fontSize: 13,
                  fontWeight: FontWeight.w600,
                ),
                padding: const EdgeInsets.all(8),
                tabs: [
                  Tab(text: languageProvider.t('create_return')),
                  Tab(text: languageProvider.t('return_history')),
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
        child: TabBarView(
          controller: _tabController,
          children: [
            _buildReturnableSalesTab(languageProvider),
            _buildReturnsTab(languageProvider),
          ],
        ),
      ),
    );
  }

  Widget _buildReturnableSalesTab(LanguageProvider languageProvider) {
    return Column(
      children: [
        _buildSearchField(
          controller: _salesSearchController,
          hint: languageProvider.t('search_orders'),
          onChanged: (value) => setState(() => _salesSearch = value),
        ),
        Expanded(
          child: _buildStatefulList(
            isLoading: _isLoadingSales,
            error: _salesError,
            onRetry: _loadReturnableSales,
            onRefresh: _loadReturnableSales,
            childBuilder: () {
              final sales = _returnableSales
                  .where((sale) => _matchesSale(sale, _salesSearch))
                  .toList();

              if (sales.isEmpty) {
                return _buildStateCard(
                  icon: Icons.assignment_return_outlined,
                  title: languageProvider.t('no_returnable_sales'),
                  subtitle: languageProvider.t('no_returnable_sales_subtitle'),
                );
              }

              return ListView.separated(
                physics: const BouncingScrollPhysics(),
                padding: const EdgeInsets.fromLTRB(16, 6, 16, 24),
                itemCount: sales.length,
                separatorBuilder: (_, _) => const SizedBox(height: 14),
                itemBuilder: (context, index) {
                  return _buildSaleCard(sales[index], languageProvider);
                },
              );
            },
          ),
        ),
      ],
    );
  }

  Widget _buildReturnsTab(LanguageProvider languageProvider) {
    return Column(
      children: [
        _buildSearchField(
          controller: _returnsSearchController,
          hint: languageProvider.t('search_returns'),
          onChanged: (value) => setState(() => _returnsSearch = value),
        ),
        Expanded(
          child: _buildStatefulList(
            isLoading: _isLoadingReturns,
            error: _returnsError,
            onRetry: _loadSalesReturns,
            onRefresh: _loadSalesReturns,
            childBuilder: () {
              final returns = _salesReturns
                  .where((item) => _matchesReturn(item, _returnsSearch))
                  .toList();

              if (returns.isEmpty) {
                return _buildStateCard(
                  icon: Icons.receipt_long_rounded,
                  title: languageProvider.t('no_sales_returns'),
                  subtitle: languageProvider.t('sales_returns_subtitle'),
                );
              }

              return ListView.separated(
                physics: const BouncingScrollPhysics(),
                padding: const EdgeInsets.fromLTRB(16, 6, 16, 24),
                itemCount: returns.length,
                separatorBuilder: (_, _) => const SizedBox(height: 14),
                itemBuilder: (context, index) {
                  return _buildReturnCard(returns[index], languageProvider);
                },
              );
            },
          ),
        ),
      ],
    );
  }

  Widget _buildStatefulList({
    required bool isLoading,
    required String? error,
    required Future<void> Function() onRetry,
    required Future<void> Function() onRefresh,
    required Widget Function() childBuilder,
  }) {
    final languageProvider = context.read<LanguageProvider>();

    if (isLoading) {
      return const Center(child: CircularProgressIndicator());
    }

    if (error != null) {
      return _buildStateCard(
        icon: Icons.error_outline_rounded,
        title: error,
        subtitle: languageProvider.t('try_again'),
        actionLabel: languageProvider.t('retry'),
        onAction: onRetry,
      );
    }

    return RefreshIndicator(onRefresh: onRefresh, child: childBuilder());
  }

  Widget _buildSearchField({
    required TextEditingController controller,
    required String hint,
    required ValueChanged<String> onChanged,
  }) {
    final theme = Theme.of(context);
    final isDark = theme.brightness == Brightness.dark;

    return Padding(
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
        ),
        child: TextField(
          controller: controller,
          onChanged: onChanged,
          decoration: InputDecoration(
            hintText: hint,
            prefixIcon: Icon(
              Icons.search_rounded,
              color: theme.colorScheme.primary,
            ),
            suffixIcon: controller.text.isNotEmpty
                ? IconButton(
                    icon: const Icon(Icons.close_rounded),
                    onPressed: () {
                      controller.clear();
                      onChanged('');
                    },
                  )
                : null,
            filled: false,
            border: InputBorder.none,
            contentPadding: const EdgeInsets.symmetric(
              horizontal: 18,
              vertical: 18,
            ),
          ),
          style: TextStyle(
            color: isDark ? Colors.white : const Color(0xFF111827),
            fontWeight: FontWeight.w600,
          ),
        ),
      ),
    );
  }

  Widget _buildSaleCard(
    Map<String, dynamic> sale,
    LanguageProvider languageProvider,
  ) {
    final theme = Theme.of(context);
    final isDark = theme.brightness == Brightness.dark;
    final ref = sale['Ref']?.toString() ?? '';
    final clientName = sale['client_name']?.toString() ?? '-';
    final warehouseName = sale['warehouse_name']?.toString() ?? '';
    final returnableTotal = _asDouble(sale['returnable_total']);
    final returnableItems = _asInt(sale['returnable_items']);

    return Material(
      color: Colors.transparent,
      child: InkWell(
        borderRadius: BorderRadius.circular(26),
        onTap: () => _openReturnForm(sale),
        child: Ink(
          padding: const EdgeInsets.all(18),
          decoration: _panelDecoration(isDark),
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
                            fontSize: 22,
                            fontWeight: FontWeight.w800,
                            color: isDark
                                ? Colors.white
                                : const Color(0xFF111827),
                          ),
                        ),
                        const SizedBox(height: 6),
                        Text(
                          sale['datetime']?.toString() ??
                              sale['date']?.toString() ??
                              '',
                          style: TextStyle(
                            fontSize: 13,
                            color: isDark
                                ? Colors.white.withValues(alpha: 0.68)
                                : const Color(0xFF667085),
                          ),
                        ),
                      ],
                    ),
                  ),
                  _buildMetaTag(
                    icon: Icons.assignment_return_rounded,
                    label: '$returnableItems',
                    color: theme.colorScheme.primary,
                  ),
                ],
              ),
              const SizedBox(height: 14),
              _buildInfoLine(Icons.person_rounded, clientName),
              if (warehouseName.isNotEmpty) ...[
                const SizedBox(height: 8),
                _buildInfoLine(Icons.warehouse_rounded, warehouseName),
              ],
              const SizedBox(height: 16),
              Row(
                children: [
                  Expanded(
                    child: _buildSummaryTile(
                      label: languageProvider.t('returnable_total'),
                      value: _money(returnableTotal),
                      color: const Color(0xFF0EA5E9),
                    ),
                  ),
                  const SizedBox(width: 12),
                  Expanded(
                    child: ElevatedButton.icon(
                      onPressed: () => _openReturnForm(sale),
                      icon: const Icon(Icons.keyboard_return_rounded, size: 18),
                      label: Text(languageProvider.t('create_return')),
                      style: ElevatedButton.styleFrom(
                        padding: const EdgeInsets.symmetric(vertical: 15),
                      ),
                    ),
                  ),
                ],
              ),
            ],
          ),
        ),
      ),
    );
  }

  Widget _buildReturnCard(
    Map<String, dynamic> item,
    LanguageProvider languageProvider,
  ) {
    final theme = Theme.of(context);
    final isDark = theme.brightness == Brightness.dark;
    final ref = item['Ref']?.toString() ?? '';
    final saleRef = item['sale_ref']?.toString() ?? '';

    return Material(
      color: Colors.transparent,
      child: InkWell(
        borderRadius: BorderRadius.circular(26),
        onTap: () => _openReturnDetails(item),
        child: Ink(
          padding: const EdgeInsets.all(18),
          decoration: _panelDecoration(isDark),
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              Row(
                children: [
                  Expanded(
                    child: Text(
                      ref,
                      style: TextStyle(
                        fontSize: 22,
                        fontWeight: FontWeight.w800,
                        color: isDark ? Colors.white : const Color(0xFF111827),
                      ),
                    ),
                  ),
                  Icon(
                    Icons.chevron_right_rounded,
                    color: isDark ? Colors.white54 : const Color(0xFF98A2B3),
                  ),
                ],
              ),
              const SizedBox(height: 6),
              Text(
                item['date']?.toString() ?? '',
                style: TextStyle(
                  fontSize: 13,
                  color: isDark
                      ? Colors.white.withValues(alpha: 0.68)
                      : const Color(0xFF667085),
                ),
              ),
              const SizedBox(height: 14),
              Wrap(
                spacing: 8,
                runSpacing: 8,
                children: [
                  if (saleRef.isNotEmpty)
                    _buildMetaTag(
                      icon: Icons.receipt_long_rounded,
                      label: saleRef,
                      color: const Color(0xFF4F46E5),
                    ),
                  _buildMetaTag(
                    icon: Icons.inventory_2_rounded,
                    label:
                        '${_formatQuantity(_asDouble(item['total_quantity']))} ${languageProvider.t('items')}',
                    color: const Color(0xFF0EA5E9),
                  ),
                  _buildMetaTag(
                    icon: Icons.account_balance_wallet_outlined,
                    label: _paymentLabel(
                      item['payment_status'],
                      languageProvider,
                    ),
                    color: const Color(0xFFF59E0B),
                  ),
                ],
              ),
              const SizedBox(height: 16),
              _buildSummaryTile(
                label: languageProvider.t('refund_due'),
                value: _money(_asDouble(item['GrandTotal'])),
                color: const Color(0xFFDC2626),
              ),
            ],
          ),
        ),
      ),
    );
  }

  Future<void> _openReturnForm(Map<String, dynamic> sale) async {
    final languageProvider = context.read<LanguageProvider>();
    final notesController = TextEditingController();
    final details = List<Map<String, dynamic>>.from(sale['details'] ?? []);
    final selectedQuantities = <int, double>{};
    var isSubmitting = false;

    await showModalBottomSheet<void>(
      context: context,
      isScrollControlled: true,
      backgroundColor: Colors.transparent,
      builder: (context) {
        final theme = Theme.of(context);
        final isDark = theme.brightness == Brightness.dark;
        final keyboardInset = MediaQuery.viewInsetsOf(context).bottom;

        return AnimatedPadding(
          duration: const Duration(milliseconds: 180),
          curve: Curves.easeOutCubic,
          padding: EdgeInsets.only(bottom: keyboardInset),
          child: StatefulBuilder(
            builder: (context, setModalState) {
              final selectedTotal = _selectedReturnTotal(
                details,
                selectedQuantities,
              );
              final selectedQty = selectedQuantities.values.fold<double>(
                0,
                (sum, quantity) => sum + quantity,
              );

              return DraggableScrollableSheet(
                initialChildSize: 0.86,
                minChildSize: 0.56,
                maxChildSize: 0.96,
                expand: false,
                builder: (context, scrollController) {
                  return GestureDetector(
                    behavior: HitTestBehavior.opaque,
                    onTap: () => FocusScope.of(context).unfocus(),
                    child: Container(
                      decoration: BoxDecoration(
                        color: isDark
                            ? const Color(0xFF0F172A)
                            : const Color(0xFFF8FAFF),
                        borderRadius: const BorderRadius.vertical(
                          top: Radius.circular(32),
                        ),
                      ),
                      child: Column(
                        children: [
                          Expanded(
                            child: SingleChildScrollView(
                              controller: scrollController,
                              keyboardDismissBehavior:
                                  ScrollViewKeyboardDismissBehavior.onDrag,
                              padding: const EdgeInsets.fromLTRB(
                                24,
                                16,
                                24,
                                18,
                              ),
                              child: Column(
                                crossAxisAlignment: CrossAxisAlignment.start,
                                children: [
                                  _buildSheetHandle(isDark),
                                  const SizedBox(height: 22),
                                  Text(
                                    languageProvider.t('create_sales_return'),
                                    style: TextStyle(
                                      fontSize: 24,
                                      fontWeight: FontWeight.w800,
                                      color: isDark
                                          ? Colors.white
                                          : const Color(0xFF111827),
                                    ),
                                  ),
                                  const SizedBox(height: 6),
                                  Text(
                                    '${sale['Ref'] ?? ''} - ${sale['client_name'] ?? ''}',
                                    style: TextStyle(
                                      fontSize: 13,
                                      fontWeight: FontWeight.w600,
                                      color: isDark
                                          ? Colors.white.withValues(alpha: 0.66)
                                          : const Color(0xFF667085),
                                    ),
                                  ),
                                  const SizedBox(height: 18),
                                  TextField(
                                    controller: notesController,
                                    minLines: 2,
                                    maxLines: 4,
                                    textInputAction: TextInputAction.done,
                                    onSubmitted: (_) =>
                                        FocusScope.of(context).unfocus(),
                                    decoration: InputDecoration(
                                      labelText: languageProvider.t('notes'),
                                      border: OutlineInputBorder(
                                        borderRadius: BorderRadius.circular(18),
                                      ),
                                    ),
                                  ),
                                  const SizedBox(height: 20),
                                  Text(
                                    languageProvider.t('return_items'),
                                    style: TextStyle(
                                      fontSize: 15,
                                      fontWeight: FontWeight.w800,
                                      color: isDark
                                          ? Colors.white
                                          : const Color(0xFF111827),
                                    ),
                                  ),
                                  const SizedBox(height: 12),
                                  ...details.map((detail) {
                                    final detailId = _asInt(
                                      detail['sale_detail_id'],
                                    );
                                    final maxQuantity = _asDouble(
                                      detail['remaining_quantity'],
                                    );
                                    final currentQuantity =
                                        selectedQuantities[detailId] ?? 0;

                                    return Padding(
                                      padding: const EdgeInsets.only(
                                        bottom: 12,
                                      ),
                                      child: _buildReturnItemSelector(
                                        detail: detail,
                                        quantity: currentQuantity,
                                        maxQuantity: maxQuantity,
                                        onDecrease: currentQuantity <= 0
                                            ? null
                                            : () {
                                                setModalState(() {
                                                  final next =
                                                      currentQuantity - 1;
                                                  if (next <= 0) {
                                                    selectedQuantities.remove(
                                                      detailId,
                                                    );
                                                  } else {
                                                    selectedQuantities[detailId] =
                                                        next;
                                                  }
                                                });
                                              },
                                        onIncrease:
                                            currentQuantity >= maxQuantity
                                            ? null
                                            : () {
                                                setModalState(() {
                                                  final step = maxQuantity < 1
                                                      ? maxQuantity
                                                      : 1.0;
                                                  selectedQuantities[detailId] =
                                                      (currentQuantity + step)
                                                          .clamp(0, maxQuantity)
                                                          .toDouble();
                                                });
                                              },
                                      ),
                                    );
                                  }),
                                ],
                              ),
                            ),
                          ),
                          Container(
                            padding: const EdgeInsets.fromLTRB(24, 16, 24, 24),
                            decoration: BoxDecoration(
                              color: isDark
                                  ? const Color(0xFF10192E)
                                  : Colors.white,
                              border: Border(
                                top: BorderSide(
                                  color: isDark
                                      ? Colors.white.withValues(alpha: 0.08)
                                      : const Color(0xFFE3E7F4),
                                ),
                              ),
                            ),
                            child: SafeArea(
                              top: false,
                              child: Column(
                                mainAxisSize: MainAxisSize.min,
                                children: [
                                  Row(
                                    children: [
                                      Expanded(
                                        child: _buildSummaryTile(
                                          label: languageProvider.t(
                                            'return_quantity',
                                          ),
                                          value: _formatQuantity(selectedQty),
                                        ),
                                      ),
                                      const SizedBox(width: 12),
                                      Expanded(
                                        child: _buildSummaryTile(
                                          label: languageProvider.t(
                                            'return_total',
                                          ),
                                          value: _money(selectedTotal),
                                          color: const Color(0xFFDC2626),
                                        ),
                                      ),
                                    ],
                                  ),
                                  const SizedBox(height: 14),
                                  SizedBox(
                                    width: double.infinity,
                                    child: ElevatedButton.icon(
                                      onPressed:
                                          selectedQty <= 0 || isSubmitting
                                          ? null
                                          : () async {
                                              FocusScope.of(context).unfocus();
                                              setModalState(() {
                                                isSubmitting = true;
                                              });
                                              final success =
                                                  await _submitReturn(
                                                    sale: sale,
                                                    quantities:
                                                        selectedQuantities,
                                                    notes: notesController.text
                                                        .trim(),
                                                  );
                                              if (!context.mounted) return;
                                              setModalState(() {
                                                isSubmitting = false;
                                              });
                                              if (success) {
                                                Navigator.pop(context);
                                              }
                                            },
                                      icon: isSubmitting
                                          ? const SizedBox(
                                              width: 18,
                                              height: 18,
                                              child: CircularProgressIndicator(
                                                strokeWidth: 2,
                                              ),
                                            )
                                          : const Icon(Icons.check_rounded),
                                      label: Text(
                                        isSubmitting
                                            ? languageProvider.t(
                                                'processing_order',
                                              )
                                            : languageProvider.t(
                                                'create_return',
                                              ),
                                      ),
                                      style: ElevatedButton.styleFrom(
                                        padding: const EdgeInsets.symmetric(
                                          vertical: 15,
                                        ),
                                      ),
                                    ),
                                  ),
                                ],
                              ),
                            ),
                          ),
                        ],
                      ),
                    ),
                  );
                },
              );
            },
          ),
        );
      },
    );

    notesController.dispose();
  }

  Future<bool> _submitReturn({
    required Map<String, dynamic> sale,
    required Map<int, double> quantities,
    required String notes,
  }) async {
    final languageProvider = context.read<LanguageProvider>();
    final userId = context.read<AuthProvider>().user?.id;

    try {
      final items = quantities.entries
          .where((entry) => entry.value > 0)
          .map(
            (entry) => {'sale_detail_id': entry.key, 'quantity': entry.value},
          )
          .toList();

      final response = await http
          .post(
            Uri.parse(ApiConfig.getUrl(ApiConfig.salesReturns)),
            headers: _headers(jsonBody: true),
            body: json.encode({
              'sale_id': _asInt(sale['id']),
              'user_id': userId,
              'notes': notes,
              'items': items,
            }),
          )
          .timeout(const Duration(seconds: ApiConfig.timeoutSeconds));

      final data = json.decode(response.body);
      if (response.statusCode == 201 && data['success'] == true) {
        if (!mounted) return true;
        showTopNotification(
          context,
          languageProvider.t('sales_return_created'),
          type: TopNotificationType.success,
        );
        await Future.wait([_loadReturnableSales(), _loadSalesReturns()]);
        return true;
      }

      if (!mounted) return false;
      showTopNotification(
        context,
        data['message']?.toString() ?? languageProvider.t('error'),
        type: TopNotificationType.error,
      );
      return false;
    } catch (_) {
      if (!mounted) return false;
      showTopNotification(
        context,
        languageProvider.t('error'),
        type: TopNotificationType.error,
      );
      return false;
    }
  }

  Widget _buildReturnItemSelector({
    required Map<String, dynamic> detail,
    required double quantity,
    required double maxQuantity,
    required VoidCallback? onDecrease,
    required VoidCallback? onIncrease,
  }) {
    final languageProvider = context.read<LanguageProvider>();
    final isDark = Theme.of(context).brightness == Brightness.dark;
    final unitPrice = _asDouble(detail['unit_price']);

    return Container(
      padding: const EdgeInsets.all(14),
      decoration: BoxDecoration(
        color: isDark
            ? Colors.white.withValues(alpha: 0.04)
            : Colors.white.withValues(alpha: 0.96),
        borderRadius: BorderRadius.circular(20),
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
            detail['product_name']?.toString() ?? '',
            maxLines: 2,
            overflow: TextOverflow.ellipsis,
            style: TextStyle(
              fontSize: 15,
              fontWeight: FontWeight.w800,
              color: isDark ? Colors.white : const Color(0xFF111827),
            ),
          ),
          const SizedBox(height: 8),
          Wrap(
            spacing: 8,
            runSpacing: 8,
            children: [
              _buildMetaTag(
                icon: Icons.shopping_bag_outlined,
                label:
                    '${languageProvider.t('sold_qty')}: ${_formatQuantity(_asDouble(detail['sale_quantity']))}',
                color: const Color(0xFF4F46E5),
              ),
              _buildMetaTag(
                icon: Icons.keyboard_return_rounded,
                label:
                    '${languageProvider.t('remaining_qty')}: ${_formatQuantity(maxQuantity)}',
                color: const Color(0xFF0EA5E9),
              ),
            ],
          ),
          const SizedBox(height: 12),
          Row(
            children: [
              Expanded(
                child: Text(
                  _money(unitPrice),
                  style: TextStyle(
                    fontSize: 15,
                    fontWeight: FontWeight.w800,
                    color: isDark ? Colors.white : const Color(0xFF111827),
                  ),
                ),
              ),
              _buildQuantityButton(
                icon: Icons.remove_rounded,
                onPressed: onDecrease,
              ),
              SizedBox(
                width: 58,
                child: Text(
                  _formatQuantity(quantity),
                  textAlign: TextAlign.center,
                  style: TextStyle(
                    fontSize: 18,
                    fontWeight: FontWeight.w800,
                    color: isDark ? Colors.white : const Color(0xFF111827),
                  ),
                ),
              ),
              _buildQuantityButton(
                icon: Icons.add_rounded,
                onPressed: onIncrease,
              ),
            ],
          ),
        ],
      ),
    );
  }

  Future<void> _openReturnDetails(Map<String, dynamic> item) async {
    final languageProvider = context.read<LanguageProvider>();
    final details = List<Map<String, dynamic>>.from(item['details'] ?? []);

    await showModalBottomSheet<void>(
      context: context,
      isScrollControlled: true,
      backgroundColor: Colors.transparent,
      builder: (context) {
        final isDark = Theme.of(context).brightness == Brightness.dark;

        return DraggableScrollableSheet(
          initialChildSize: 0.72,
          minChildSize: 0.48,
          maxChildSize: 0.94,
          expand: false,
          builder: (context, scrollController) {
            return Container(
              decoration: BoxDecoration(
                color: isDark
                    ? const Color(0xFF0F172A)
                    : const Color(0xFFF8FAFF),
                borderRadius: const BorderRadius.vertical(
                  top: Radius.circular(32),
                ),
              ),
              child: SingleChildScrollView(
                controller: scrollController,
                padding: const EdgeInsets.fromLTRB(24, 16, 24, 32),
                child: Column(
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: [
                    _buildSheetHandle(isDark),
                    const SizedBox(height: 22),
                    Text(
                      languageProvider.t('sales_return_details'),
                      style: TextStyle(
                        fontSize: 24,
                        fontWeight: FontWeight.w800,
                        color: isDark ? Colors.white : const Color(0xFF111827),
                      ),
                    ),
                    const SizedBox(height: 6),
                    Text(
                      item['Ref']?.toString() ?? '',
                      style: TextStyle(
                        fontSize: 13,
                        fontWeight: FontWeight.w600,
                        color: isDark
                            ? Colors.white.withValues(alpha: 0.66)
                            : const Color(0xFF667085),
                      ),
                    ),
                    const SizedBox(height: 18),
                    _buildDetailsPanel(
                      title: languageProvider.t('info'),
                      children: [
                        _buildInfoRow(
                          Icons.receipt_long,
                          languageProvider.t('original_sale'),
                          item['sale_ref']?.toString() ?? '-',
                        ),
                        _buildInfoRow(
                          Icons.person,
                          languageProvider.t('client_name'),
                          item['client_name']?.toString() ?? '-',
                        ),
                        _buildInfoRow(
                          Icons.monetization_on,
                          languageProvider.t('refund_due'),
                          _money(_asDouble(item['GrandTotal'])),
                        ),
                        _buildInfoRow(
                          Icons.note,
                          languageProvider.t('notes'),
                          (item['notes'] ?? '').toString().isEmpty
                              ? languageProvider.t('no_notes')
                              : item['notes'].toString(),
                        ),
                      ],
                    ),
                    const SizedBox(height: 18),
                    _buildDetailsPanel(
                      title: languageProvider.t('return_items'),
                      children: details.map((detail) {
                        return _buildInfoRow(
                          Icons.inventory_2_outlined,
                          detail['product_name']?.toString() ?? '',
                          '${_formatQuantity(_asDouble(detail['quantity']))} x ${_money(_asDouble(detail['unit_price']))} = ${_money(_asDouble(detail['total']))}',
                        );
                      }).toList(),
                    ),
                  ],
                ),
              ),
            );
          },
        );
      },
    );
  }

  Widget _buildHeaderAction({
    required IconData icon,
    required String tooltip,
    required VoidCallback onTap,
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
              child: Icon(icon, color: theme.colorScheme.primary, size: 24),
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
                  fontWeight: FontWeight.w800,
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
              fontWeight: FontWeight.w800,
              color: color,
            ),
          ),
        ],
      ),
    );
  }

  Widget _buildInfoLine(IconData icon, String value) {
    final isDark = Theme.of(context).brightness == Brightness.dark;

    return Row(
      children: [
        Icon(
          icon,
          size: 18,
          color: isDark ? Colors.white54 : const Color(0xFF667085),
        ),
        const SizedBox(width: 10),
        Expanded(
          child: Text(
            value,
            maxLines: 1,
            overflow: TextOverflow.ellipsis,
            style: TextStyle(
              fontSize: 14,
              fontWeight: FontWeight.w700,
              color: isDark ? Colors.white : const Color(0xFF1D2939),
            ),
          ),
        ),
      ],
    );
  }

  Widget _buildSummaryTile({
    required String label,
    required String value,
    Color? color,
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
            maxLines: 1,
            overflow: TextOverflow.ellipsis,
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
              color: color ?? (isDark ? Colors.white : const Color(0xFF111827)),
            ),
          ),
        ],
      ),
    );
  }

  Widget _buildQuantityButton({
    required IconData icon,
    required VoidCallback? onPressed,
  }) {
    final theme = Theme.of(context);

    return IconButton.filledTonal(
      onPressed: onPressed,
      icon: Icon(icon),
      style: IconButton.styleFrom(
        fixedSize: const Size(42, 42),
        backgroundColor: theme.colorScheme.primary.withValues(alpha: 0.1),
        foregroundColor: theme.colorScheme.primary,
      ),
    );
  }

  Widget _buildDetailsPanel({
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

  Widget _buildSheetHandle(bool isDark) {
    return Center(
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
    );
  }

  BoxDecoration _panelDecoration(bool isDark) {
    return BoxDecoration(
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
    );
  }

  bool _matchesSale(Map<String, dynamic> sale, String query) {
    if (query.trim().isEmpty) return true;
    final normalized = query.toLowerCase();
    return (sale['Ref']?.toString().toLowerCase() ?? '').contains(normalized) ||
        (sale['client_name']?.toString().toLowerCase() ?? '').contains(
          normalized,
        ) ||
        (sale['client_phone']?.toString().toLowerCase() ?? '').contains(
          normalized,
        ) ||
        (sale['warehouse_name']?.toString().toLowerCase() ?? '').contains(
          normalized,
        );
  }

  bool _matchesReturn(Map<String, dynamic> item, String query) {
    if (query.trim().isEmpty) return true;
    final normalized = query.toLowerCase();
    return (item['Ref']?.toString().toLowerCase() ?? '').contains(normalized) ||
        (item['sale_ref']?.toString().toLowerCase() ?? '').contains(
          normalized,
        ) ||
        (item['client_name']?.toString().toLowerCase() ?? '').contains(
          normalized,
        );
  }

  double _selectedReturnTotal(
    List<Map<String, dynamic>> details,
    Map<int, double> quantities,
  ) {
    var total = 0.0;
    for (final detail in details) {
      final detailId = _asInt(detail['sale_detail_id']);
      total += (quantities[detailId] ?? 0) * _asDouble(detail['unit_price']);
    }
    return total;
  }

  String _paymentLabel(dynamic status, LanguageProvider languageProvider) {
    final normalized = status?.toString().toLowerCase() ?? '';
    if (normalized == 'paid') return languageProvider.t('paid');
    if (normalized == 'partial') return languageProvider.t('partial');
    return languageProvider.t('unpaid');
  }

  String _money(double value) => '\$${value.toStringAsFixed(2)}';

  String _formatQuantity(double value) {
    if (value == value.roundToDouble()) {
      return value.toInt().toString();
    }
    return value.toStringAsFixed(2);
  }

  double _asDouble(dynamic value) {
    if (value is num) return value.toDouble();
    return double.tryParse(value?.toString() ?? '') ?? 0;
  }

  int _asInt(dynamic value) {
    if (value is int) return value;
    if (value is num) return value.toInt();
    return int.tryParse(value?.toString() ?? '') ?? 0;
  }
}
