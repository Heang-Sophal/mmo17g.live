import 'package:delivery_app/providers/auth_provider.dart';
import 'package:delivery_app/providers/language_provider.dart';
import 'package:delivery_app/services/delivery_api_service.dart';
import 'package:delivery_app/services/notification_service.dart';
import 'package:flutter/material.dart';
import 'package:google_fonts/google_fonts.dart';
import 'package:provider/provider.dart';

class OrdersScreen extends StatefulWidget {
  const OrdersScreen({
    super.key,
    this.initialSaleRef,
    this.autoOpenInitialOrder = false,
    this.showStandaloneScaffold = false,
    this.recordMode = false,
  });

  final String? initialSaleRef;
  final bool autoOpenInitialOrder;
  final bool showStandaloneScaffold;
  final bool recordMode;

  @override
  State<OrdersScreen> createState() => OrdersScreenState();
}

class OrdersScreenState extends State<OrdersScreen> {
  final DeliveryApiService _apiService = DeliveryApiService();
  final TextEditingController _searchController = TextEditingController();
  final ScrollController _scrollController = ScrollController();

  List<Map<String, dynamic>> _orders = [];
  bool _isLoading = true;
  String? _acceptingOrderId;
  String? _completingOrderId;
  String? _error;
  String _selectedStatus = 'all';
  bool _hasOpenedInitialOrder = false;

  @override
  void initState() {
    super.initState();
    _searchController.text = widget.initialSaleRef?.trim() ?? '';
    WidgetsBinding.instance.addPostFrameCallback((_) {
      refreshData();
    });
  }

  @override
  void dispose() {
    _scrollController.dispose();
    _searchController.dispose();
    super.dispose();
  }

  Future<void> refreshAndScrollToTop() async {
    if (_scrollController.hasClients) {
      await _scrollController.animateTo(
        0,
        duration: const Duration(milliseconds: 300),
        curve: Curves.easeOutCubic,
      );
    }

    await refreshData();
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
      final orders = await _apiService.getOrders(
        status: _selectedStatus,
        search: _searchController.text,
      );
      if (!mounted) return;
      setState(() {
        _orders = orders;
        _isLoading = false;
      });
      _openInitialOrderIfNeeded(orders);
    } catch (e) {
      if (!mounted) return;
      setState(() {
        _error = e.toString();
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
      if (!mounted) return;
      _showOrderDetails(matchedOrder!);
    });
  }

  @override
  Widget build(BuildContext context) {
    final languageProvider = context.watch<LanguageProvider>();
    final statuses = <String>['all', 'pending', 'shipped', 'delivered'];

    final content = RefreshIndicator(
      onRefresh: refreshData,
      child: ListView(
        controller: _scrollController,
        padding: const EdgeInsets.fromLTRB(16, 8, 16, 24),
        children: [
          TextField(
            controller: _searchController,
            textInputAction: TextInputAction.search,
            onSubmitted: (_) => refreshData(),
            decoration: InputDecoration(
              hintText: languageProvider.t('search_orders'),
              prefixIcon: const Icon(Icons.search),
              suffixIcon: IconButton(
                onPressed: refreshData,
                icon: const Icon(Icons.arrow_forward_rounded),
              ),
            ),
          ),
          const SizedBox(height: 12),
          SingleChildScrollView(
            scrollDirection: Axis.horizontal,
            child: Row(
              children: statuses.map((status) {
                return Padding(
                  padding: const EdgeInsets.only(right: 8),
                  child: ChoiceChip(
                    label: Text(_statusLabel(status, languageProvider)),
                    selected: _selectedStatus == status,
                    onSelected: (selected) {
                      if (!selected) return;
                      setState(() {
                        _selectedStatus = status;
                      });
                      refreshData();
                    },
                  ),
                );
              }).toList(),
            ),
          ),
          const SizedBox(height: 12),
          if (_isLoading && _orders.isEmpty)
            const Padding(
              padding: EdgeInsets.only(top: 40),
              child: Center(child: CircularProgressIndicator()),
            )
          else if (_error != null && _orders.isEmpty)
            Padding(
              padding: const EdgeInsets.only(top: 40),
              child: Center(child: Text(_error!)),
            )
          else if (_orders.isEmpty)
            Padding(
              padding: const EdgeInsets.only(top: 40),
              child: Center(child: Text(languageProvider.t('no_orders'))),
            )
          else
            ..._orders.map((order) {
              return Card(
                margin: const EdgeInsets.only(bottom: 12),
                elevation: 0,
                shape: RoundedRectangleBorder(
                  borderRadius: BorderRadius.circular(20),
                  side: const BorderSide(color: Color(0xFFD7E3E1), width: 1),
                ),
                clipBehavior: Clip.antiAlias,
                child: InkWell(
                  borderRadius: BorderRadius.circular(20),
                  onTap: () => _showOrderDetails(order),
                  child: Padding(
                    padding: const EdgeInsets.all(16),
                    child: Column(
                      crossAxisAlignment: CrossAxisAlignment.start,
                      children: [
                        Row(
                          children: [
                            Expanded(
                              child: Text(
                                order['Ref']?.toString() ?? '-',
                                style: const TextStyle(
                                  fontWeight: FontWeight.w700,
                                  fontSize: 16,
                                ),
                              ),
                            ),
                            _StatusPill(
                              label: _statusLabel(
                                order['status']?.toString() ?? 'pending',
                                languageProvider,
                              ),
                              color: _statusColor(order['status']),
                            ),
                          ],
                        ),
                        if (_productItems(order).isNotEmpty) ...[
                          const SizedBox(height: 12),
                          _ProductsInfoBox(
                            title: languageProvider.t('products'),
                            items: _productItems(order),
                            moreLabelBuilder: (count) => languageProvider.t(
                              'more_items',
                              params: {'count': count.toString()},
                            ),
                          ),
                        ],
                        const SizedBox(height: 12),
                        if (_hasSellerInfo(order))
                          Row(
                            crossAxisAlignment: CrossAxisAlignment.start,
                            children: [
                              Expanded(
                                child: _ContactInfoBox(
                                  title: languageProvider.t('buyer'),
                                  name: order['client_name']?.toString() ?? '-',
                                  phone:
                                      order['client_phone']?.toString() ?? '-',
                                  address:
                                      order['client_address']?.toString() ??
                                      '-',
                                  showName: false,
                                ),
                              ),
                              const SizedBox(width: 12),
                              Expanded(
                                child: _ContactInfoBox(
                                  title: languageProvider.t('seller'),
                                  name: order['seller_name']?.toString() ?? '-',
                                  phone:
                                      order['seller_phone']?.toString() ?? '-',
                                ),
                              ),
                            ],
                          )
                        else
                          _ContactInfoBox(
                            title: languageProvider.t('buyer'),
                            name: order['client_name']?.toString() ?? '-',
                            phone: order['client_phone']?.toString() ?? '-',
                            address: order['client_address']?.toString() ?? '-',
                            showName: false,
                          ),
                        const SizedBox(height: 6),
                        Text(
                          _formatDate(order['created_at'] ?? order['datetime']),
                          style: const TextStyle(color: Color(0xFF64748B)),
                        ),
                        const SizedBox(height: 12),
                        Row(
                          children: [
                            Icon(
                              Icons.payments_outlined,
                              size: 18,
                              color: Colors.grey[700],
                            ),
                            const SizedBox(width: 6),
                            Text(order['payment_status']?.toString() ?? '-'),
                            const Spacer(),
                            if (_canAcceptOrder(order))
                              FilledButton(
                                onPressed:
                                    _acceptingOrderId == order['id']?.toString()
                                    ? null
                                    : () => _acceptOrder(order),
                                style: FilledButton.styleFrom(
                                  backgroundColor: const Color(0xFFD6A735),
                                  foregroundColor: Colors.white,
                                  padding: const EdgeInsets.symmetric(
                                    horizontal: 18,
                                    vertical: 10,
                                  ),
                                  textStyle: TextStyle(
                                    fontFamily:
                                        GoogleFonts.kantumruyPro().fontFamily,
                                    fontWeight: FontWeight.w700,
                                  ),
                                ),
                                child:
                                    _acceptingOrderId == order['id']?.toString()
                                    ? const SizedBox(
                                        width: 16,
                                        height: 16,
                                        child: CircularProgressIndicator(
                                          strokeWidth: 2,
                                          color: Colors.white,
                                        ),
                                      )
                                    : Text(
                                        _acceptActionLabel(languageProvider),
                                      ),
                              )
                            else if (_canCompleteOrder(order))
                              FilledButton(
                                onPressed:
                                    _completingOrderId ==
                                        order['id']?.toString()
                                    ? null
                                    : () => _completeOrder(order),
                                style: FilledButton.styleFrom(
                                  backgroundColor: const Color(0xFF16A34A),
                                  foregroundColor: Colors.white,
                                  padding: const EdgeInsets.symmetric(
                                    horizontal: 18,
                                    vertical: 10,
                                  ),
                                  textStyle: const TextStyle(
                                    fontWeight: FontWeight.w700,
                                  ),
                                ),
                                child:
                                    _completingOrderId ==
                                        order['id']?.toString()
                                    ? const SizedBox(
                                        width: 16,
                                        height: 16,
                                        child: CircularProgressIndicator(
                                          strokeWidth: 2,
                                          color: Colors.white,
                                        ),
                                      )
                                    : Text(
                                        _completeActionLabel(languageProvider),
                                      ),
                              )
                            else if (_isDeliveredOrder(order))
                              Text(
                                _statusLabel(
                                  order['status']?.toString() ?? 'delivered',
                                  languageProvider,
                                ),
                                style: const TextStyle(
                                  fontWeight: FontWeight.w700,
                                  color: Color(0xFF16A34A),
                                ),
                              ),
                            const Spacer(),
                            Text(
                              _formatCurrency(order['GrandTotal']),
                              style: const TextStyle(
                                fontWeight: FontWeight.w700,
                                fontSize: 16,
                              ),
                            ),
                          ],
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

    if (!widget.showStandaloneScaffold) {
      return content;
    }

    return Scaffold(
      appBar: AppBar(
        title: Text(languageProvider.t('orders')),
        actions: [
          IconButton(
            onPressed: refreshAndScrollToTop,
            icon: const Icon(Icons.refresh),
          ),
        ],
      ),
      body: content,
    );
  }

  Future<Map<String, dynamic>?> _acceptOrder(Map<String, dynamic> order) async {
    final token = context.read<AuthProvider>().token;
    if (token == null || token.isEmpty) return null;

    final orderId = order['id']?.toString();
    if (orderId == null || orderId.isEmpty) return null;

    _apiService.setToken(token);

    setState(() {
      _acceptingOrderId = orderId;
    });

    try {
      final updatedOrder = await _apiService.acceptOrder(orderId);
      if (!mounted) return null;

      setState(() {
        _replaceOrder(orderId, updatedOrder);
      });

      // send local notification and request backend to notify others
      try {
        NotificationService.sendLocalNotification(
          title: context.read<LanguageProvider>().t('order_accepted'),
          body: '${context.read<LanguageProvider>().t('order_ref')}: $orderId',
          payload: {'orderId': orderId, 'action': 'accepted'},
        );
      } catch (e) {
        debugPrint('Local notification failed: $e');
      }

      _apiService.notifyOrderAction(orderId, 'accepted').catchError((e) {
        debugPrint('notifyOrderAction failed: $e');
      });

      ScaffoldMessenger.of(context).showSnackBar(
        SnackBar(
          content: Text(context.read<LanguageProvider>().t('order_accepted')),
          backgroundColor: const Color(0xFFD6A735),
        ),
      );

      return updatedOrder;
    } catch (e) {
      if (!mounted) return null;
      ScaffoldMessenger.of(context).showSnackBar(
        SnackBar(
          content: Text(e.toString()),
          backgroundColor: const Color(0xFFDC2626),
        ),
      );
      return null;
    } finally {
      if (mounted) {
        setState(() {
          _acceptingOrderId = null;
        });
      }
    }
  }

  Future<Map<String, dynamic>?> _completeOrder(
    Map<String, dynamic> order,
  ) async {
    final token = context.read<AuthProvider>().token;
    if (token == null || token.isEmpty) return null;

    final orderId = order['id']?.toString();
    if (orderId == null || orderId.isEmpty) return null;

    _apiService.setToken(token);

    setState(() {
      _completingOrderId = orderId;
    });

    try {
      final updatedOrder = await _apiService.completeOrder(orderId);
      if (!mounted) return null;

      setState(() {
        _replaceOrder(orderId, updatedOrder);
      });

      // send local notification and request backend to notify others
      try {
        NotificationService.sendLocalNotification(
          title: context.read<LanguageProvider>().t('order_completed'),
          body: '${context.read<LanguageProvider>().t('order_ref')}: $orderId',
          payload: {'orderId': orderId, 'action': 'completed'},
        );
      } catch (e) {
        debugPrint('Local notification failed: $e');
      }

      _apiService.notifyOrderAction(orderId, 'completed').catchError((e) {
        debugPrint('notifyOrderAction failed: $e');
      });

      ScaffoldMessenger.of(context).showSnackBar(
        SnackBar(
          content: Text(context.read<LanguageProvider>().t('order_completed')),
          backgroundColor: const Color(0xFF16A34A),
        ),
      );

      return updatedOrder;
    } catch (e) {
      if (!mounted) return null;
      ScaffoldMessenger.of(context).showSnackBar(
        SnackBar(
          content: Text(e.toString()),
          backgroundColor: const Color(0xFFDC2626),
        ),
      );
      return null;
    } finally {
      if (mounted) {
        setState(() {
          _completingOrderId = null;
        });
      }
    }
  }

  Future<Map<String, dynamic>> _updateShipping(
    String orderId,
    double shipping,
  ) async {
    final token = context.read<AuthProvider>().token;
    if (token == null || token.isEmpty) {
      throw Exception('Unauthenticated');
    }

    _apiService.setToken(token);
    final updatedOrder = await _apiService.updateShipping(orderId, shipping);

    if (mounted) {
      setState(() {
        _replaceOrder(orderId, updatedOrder);
      });
    }

    return updatedOrder;
  }

  void _showOrderDetails(Map<String, dynamic> order) {
    final languageProvider = context.read<LanguageProvider>();
    Map<String, dynamic> currentOrder = Map<String, dynamic>.from(order);
    final shippingController = TextEditingController(
      text: _formatAmountInput(currentOrder['shipping']),
    );
    bool isSavingShipping = false;
    bool isSavingStatus = false;

    showModalBottomSheet<void>(
      context: context,
      isScrollControlled: true,
      shape: const RoundedRectangleBorder(
        borderRadius: BorderRadius.vertical(top: Radius.circular(24)),
      ),
      builder: (context) {
        return StatefulBuilder(
          builder: (context, setModalState) {
            final products = _productItems(currentOrder);
            final hasSellerInfo = _hasSellerInfo(currentOrder);
            final orderStatus = _statusLabel(
              currentOrder['status']?.toString() ?? 'pending',
              languageProvider,
            );
            final orderId = currentOrder['id']?.toString();
            final isDelivered = _isDeliveredOrder(currentOrder);

            return DraggableScrollableSheet(
              initialChildSize: 0.74,
              minChildSize: 0.5,
              maxChildSize: 0.95,
              expand: false,
              builder: (context, scrollController) {
                return SafeArea(
                  top: false,
                  child: SingleChildScrollView(
                    controller: scrollController,
                    child: Padding(
                      padding: const EdgeInsets.fromLTRB(24, 16, 24, 24),
                      child: Column(
                        crossAxisAlignment: CrossAxisAlignment.start,
                        children: [
                          Center(
                            child: Container(
                              width: 48,
                              height: 5,
                              decoration: BoxDecoration(
                                color: const Color(0xFFE2E8F0),
                                borderRadius: BorderRadius.circular(999),
                              ),
                            ),
                          ),
                          const SizedBox(height: 24),
                          Row(
                            crossAxisAlignment: CrossAxisAlignment.start,
                            children: [
                              Expanded(
                                child: Column(
                                  crossAxisAlignment: CrossAxisAlignment.start,
                                  children: [
                                    Text(
                                      currentOrder['Ref']?.toString() ?? '-',
                                      style: const TextStyle(
                                        fontSize: 22,
                                        fontWeight: FontWeight.w800,
                                        color: Color(0xFF201607),
                                      ),
                                    ),
                                    const SizedBox(height: 6),
                                    Text(
                                      '${languageProvider.t('order_date')}: ${_formatDate(currentOrder['created_at'] ?? currentOrder['datetime'])}',
                                      style: const TextStyle(
                                        fontSize: 14,
                                        color: Color(0xFF64748B),
                                      ),
                                    ),
                                  ],
                                ),
                              ),
                              const SizedBox(width: 12),
                              _StatusPill(
                                label: orderStatus,
                                color: _statusColor(currentOrder['status']),
                              ),
                            ],
                          ),
                          const SizedBox(height: 20),
                          const Divider(color: Color(0xFFE2E8F0)),
                          const SizedBox(height: 18),
                          _SheetSection(
                            title: languageProvider.t('buyer'),
                            children: [
                              _SheetInfoRow(
                                icon: Icons.person_outline,
                                label: languageProvider.t('client_name'),
                                value:
                                    currentOrder['client_name']?.toString() ??
                                    '-',
                              ),
                              _SheetInfoRow(
                                icon: Icons.phone_outlined,
                                label: languageProvider.t('client_phone'),
                                value:
                                    currentOrder['client_phone']?.toString() ??
                                    '-',
                              ),
                              _SheetInfoRow(
                                icon: Icons.location_on_outlined,
                                label: languageProvider.t('client_address'),
                                value:
                                    currentOrder['client_address']
                                        ?.toString() ??
                                    '-',
                              ),
                            ],
                          ),
                          if (products.isNotEmpty) ...[
                            const SizedBox(height: 18),
                            const Divider(color: Color(0xFFE2E8F0)),
                            const SizedBox(height: 18),
                            _SheetSection(
                              title: languageProvider.t('products'),
                              children: products
                                  .map(
                                    (item) => _SheetProductRow(
                                      name: item['name']?.toString() ?? '-',
                                      quantity: item['quantity'],
                                      total: _formatCurrency(item['total']),
                                    ),
                                  )
                                  .toList(),
                            ),
                          ],
                          if (hasSellerInfo) ...[
                            const SizedBox(height: 18),
                            const Divider(color: Color(0xFFE2E8F0)),
                            const SizedBox(height: 18),
                            _SheetSection(
                              title: languageProvider.t('seller'),
                              children: [
                                _SheetInfoRow(
                                  icon: Icons.person_outline,
                                  label: languageProvider.t('seller'),
                                  value:
                                      currentOrder['seller_name']?.toString() ??
                                      '-',
                                ),
                                _SheetInfoRow(
                                  icon: Icons.phone_outlined,
                                  label: languageProvider.t('phone'),
                                  value:
                                      currentOrder['seller_phone']
                                          ?.toString() ??
                                      '-',
                                ),
                              ],
                            ),
                          ],
                          const SizedBox(height: 18),
                          const Divider(color: Color(0xFFE2E8F0)),
                          const SizedBox(height: 18),
                          _SheetSection(
                            title: languageProvider.t('payment_status'),
                            children: [
                              _SheetInfoRow(
                                icon: Icons.payment_outlined,
                                label: languageProvider.t('payment_method'),
                                value:
                                    (currentOrder['payment_method']
                                                ?.toString() ??
                                            '-')
                                        .toUpperCase(),
                              ),
                              _SheetInfoRow(
                                icon: Icons.check_circle_outline,
                                label: languageProvider.t('payment_status'),
                                value:
                                    (currentOrder['payment_status']
                                                ?.toString() ??
                                            '-')
                                        .toUpperCase(),
                              ),
                              _SheetInfoRow(
                                icon: Icons.local_shipping_outlined,
                                label: languageProvider.t('status'),
                                value: orderStatus,
                              ),
                              _SheetEditableAmountRow(
                                icon: Icons.local_shipping_outlined,
                                label: languageProvider.t('shipping_fee'),
                                controller: shippingController,
                                saveLabel: languageProvider.t('save_shipping'),
                                enabled: !isDelivered && !isSavingShipping,
                                isSaving: isSavingShipping,
                                helperText: isDelivered
                                    ? languageProvider.t('shipping_locked')
                                    : null,
                                onSave:
                                    isDelivered ||
                                        orderId == null ||
                                        orderId.isEmpty
                                    ? null
                                    : () async {
                                        final shipping = _tryParseAmount(
                                          shippingController.text,
                                        );

                                        if (shipping == null || shipping < 0) {
                                          ScaffoldMessenger.of(
                                            this.context,
                                          ).showSnackBar(
                                            SnackBar(
                                              content: Text(
                                                languageProvider.t(
                                                  'invalid_shipping_amount',
                                                ),
                                              ),
                                              backgroundColor: const Color(
                                                0xFFDC2626,
                                              ),
                                            ),
                                          );
                                          return;
                                        }

                                        setModalState(() {
                                          isSavingShipping = true;
                                        });

                                        try {
                                          final updatedOrder =
                                              await _updateShipping(
                                                orderId,
                                                shipping,
                                              );
                                          if (!mounted) return;

                                          setModalState(() {
                                            currentOrder = updatedOrder;
                                            isSavingShipping = false;
                                            shippingController.text =
                                                _formatAmountInput(
                                                  updatedOrder['shipping'],
                                                );
                                            shippingController.selection =
                                                TextSelection.collapsed(
                                                  offset: shippingController
                                                      .text
                                                      .length,
                                                );
                                          });

                                          ScaffoldMessenger.of(
                                            this.context,
                                          ).showSnackBar(
                                            SnackBar(
                                              content: Text(
                                                languageProvider.t(
                                                  'shipping_updated',
                                                ),
                                              ),
                                              backgroundColor: const Color(
                                                0xFFD6A735,
                                              ),
                                            ),
                                          );
                                        } catch (e) {
                                          if (!mounted) return;

                                          setModalState(() {
                                            isSavingShipping = false;
                                          });

                                          ScaffoldMessenger.of(
                                            this.context,
                                          ).showSnackBar(
                                            SnackBar(
                                              content: Text(e.toString()),
                                              backgroundColor: const Color(
                                                0xFFDC2626,
                                              ),
                                            ),
                                          );
                                        }
                                      },
                              ),
                              _SheetInfoRow(
                                icon: Icons.account_balance_wallet_outlined,
                                label: languageProvider.t('grand_total'),
                                value: _formatCurrency(
                                  currentOrder['GrandTotal'],
                                ),
                              ),
                              if (currentOrder['warehouse_name']
                                      ?.toString()
                                      .isNotEmpty ==
                                  true)
                                _SheetInfoRow(
                                  icon: Icons.warehouse_outlined,
                                  label: languageProvider.t('warehouse'),
                                  value:
                                      currentOrder['warehouse_name']
                                          ?.toString() ??
                                      '-',
                                ),
                              if ((currentOrder['notes'] ?? '')
                                  .toString()
                                  .isNotEmpty)
                                _SheetInfoRow(
                                  icon: Icons.note_alt_outlined,
                                  label: languageProvider.t('notes'),
                                  value:
                                      currentOrder['notes']?.toString() ?? '',
                                ),
                            ],
                          ),
                          const SizedBox(height: 24),
                          if (orderId != null &&
                              orderId.isNotEmpty &&
                              (_canAcceptOrder(currentOrder) ||
                                  _canCompleteOrder(currentOrder))) ...[
                            SizedBox(
                              width: double.infinity,
                              child: FilledButton(
                                onPressed: isSavingStatus
                                    ? null
                                    : () async {
                                        setModalState(() {
                                          isSavingStatus = true;
                                        });

                                        final updatedOrder =
                                            _canAcceptOrder(currentOrder)
                                            ? await _acceptOrder(currentOrder)
                                            : await _completeOrder(
                                                currentOrder,
                                              );

                                        if (!mounted || updatedOrder == null) {
                                          setModalState(() {
                                            isSavingStatus = false;
                                          });
                                          return;
                                        }

                                        setModalState(() {
                                          currentOrder = updatedOrder;
                                          isSavingStatus = false;
                                          shippingController.text =
                                              _formatAmountInput(
                                                updatedOrder['shipping'],
                                              );
                                          shippingController.selection =
                                              TextSelection.collapsed(
                                                offset: shippingController
                                                    .text
                                                    .length,
                                              );
                                        });
                                      },
                                style: FilledButton.styleFrom(
                                  padding: const EdgeInsets.symmetric(
                                    vertical: 14,
                                  ),
                                  backgroundColor: _canAcceptOrder(currentOrder)
                                      ? const Color(0xFFD6A735)
                                      : const Color(0xFF16A34A),
                                ),
                                child: isSavingStatus
                                    ? const SizedBox(
                                        width: 18,
                                        height: 18,
                                        child: CircularProgressIndicator(
                                          strokeWidth: 2,
                                          color: Colors.white,
                                        ),
                                      )
                                    : Text(
                                        _canAcceptOrder(currentOrder)
                                            ? _acceptActionLabel(
                                                languageProvider,
                                              )
                                            : _completeActionLabel(
                                                languageProvider,
                                              ),
                                      ),
                              ),
                            ),
                            const SizedBox(height: 12),
                          ],
                          SizedBox(
                            width: double.infinity,
                            child: OutlinedButton(
                              onPressed: () => Navigator.pop(context),
                              style: OutlinedButton.styleFrom(
                                padding: const EdgeInsets.symmetric(
                                  vertical: 14,
                                ),
                                side: const BorderSide(
                                  color: Color(0xFFD7E3E1),
                                ),
                                shape: RoundedRectangleBorder(
                                  borderRadius: BorderRadius.circular(16),
                                ),
                              ),
                              child: Text(languageProvider.t('cancel')),
                            ),
                          ),
                        ],
                      ),
                    ),
                  ),
                );
              },
            );
          },
        );
      },
    ).whenComplete(shippingController.dispose);
  }

  String _statusLabel(String status, LanguageProvider languageProvider) {
    final norm = _normalizeStatus(status);

    if (widget.recordMode) {
      switch (norm) {
        case 'pending':
          return languageProvider.t('pending');
        case 'shipped':
          return languageProvider.t('shipped_record');
        case 'delivered':
          return languageProvider.t('delivered_record');
        case 'all':
          return languageProvider.t('all');
        default:
          return status;
      }
    }

    switch (norm) {
      case 'pending':
        return languageProvider.t('pending');
      case 'shipped':
        return languageProvider.t('shipped');
      case 'delivered':
        return languageProvider.t('delivered');
      case 'all':
        return languageProvider.t('all');
      default:
        return status;
    }
  }

  String _acceptActionLabel(LanguageProvider languageProvider) {
    return widget.recordMode
        ? languageProvider.t('start_record')
        : languageProvider.t('accept');
  }

  String _completeActionLabel(LanguageProvider languageProvider) {
    return widget.recordMode
        ? languageProvider.t('complete_record')
        : languageProvider.t('complete_order');
  }

  Color _statusColor(dynamic status) {
    switch (_normalizeStatus(status?.toString())) {
      case 'shipped':
        return const Color(0xFF7C3AED);
      case 'delivered':
        return const Color(0xFF16A34A);
      default:
        return const Color(0xFFF59E0B);
    }
  }

  bool _canAcceptOrder(Map<String, dynamic> order) {
    return _normalizeOrderStatus(order) == 'pending';
  }

  bool _canCompleteOrder(Map<String, dynamic> order) {
    return _normalizeOrderStatus(order) == 'shipped';
  }

  bool _isDeliveredOrder(Map<String, dynamic> order) {
    return _normalizeOrderStatus(order) == 'delivered';
  }

  bool _hasSellerInfo(Map<String, dynamic> order) {
    final sellerName = order['seller_name']?.toString().trim() ?? '';
    final sellerPhone = order['seller_phone']?.toString().trim() ?? '';
    return sellerName.isNotEmpty || sellerPhone.isNotEmpty;
  }

  void _replaceOrder(String orderId, Map<String, dynamic> updatedOrder) {
    _orders = _orders.map((item) {
      if (item['id']?.toString() == orderId) {
        return updatedOrder;
      }
      return item;
    }).toList();
  }

  double? _tryParseAmount(String raw) {
    final normalized = raw.replaceAll(',', '').trim();
    if (normalized.isEmpty) {
      return null;
    }

    return double.tryParse(normalized);
  }

  String _normalizeOrderStatus(Map<String, dynamic> order) {
    return _normalizeStatus(order['status']?.toString());
  }

  String _normalizeStatus(String? status) {
    final normalized = (status ?? 'pending').trim().toLowerCase();
    if (normalized == 'processing') {
      return 'shipped';
    }

    return normalized.isEmpty ? 'pending' : normalized;
  }

  List<Map<String, dynamic>> _productItems(Map<String, dynamic> order) {
    final rawItems = order['products'];
    if (rawItems is! List) {
      return const [];
    }

    return rawItems
        .whereType<Map>()
        .map((item) => Map<String, dynamic>.from(item))
        .toList();
  }

  String _formatCurrency(dynamic value) {
    final amount = value is num
        ? value.toDouble()
        : double.tryParse(value?.toString() ?? '') ?? 0;
    return '\$${amount.toStringAsFixed(2)}';
  }

  String _formatAmountInput(dynamic value) {
    final amount = value is num
        ? value.toDouble()
        : double.tryParse(value?.toString() ?? '') ?? 0;
    return amount.toStringAsFixed(2);
  }

  String _formatDate(dynamic value) {
    final raw = value?.toString();
    if (raw == null || raw.isEmpty) return '-';

    final parsed = DateTime.tryParse(raw);
    if (parsed == null) return raw;

    return '${parsed.day.toString().padLeft(2, '0')}/${parsed.month.toString().padLeft(2, '0')}/${parsed.year} ${parsed.hour.toString().padLeft(2, '0')}:${parsed.minute.toString().padLeft(2, '0')}';
  }
}

class _StatusPill extends StatelessWidget {
  const _StatusPill({required this.label, required this.color});

  final String label;
  final Color color;

  @override
  Widget build(BuildContext context) {
    return Container(
      padding: const EdgeInsets.symmetric(horizontal: 10, vertical: 6),
      decoration: BoxDecoration(
        color: color.withValues(alpha: 0.12),
        borderRadius: BorderRadius.circular(999),
      ),
      child: Text(
        label,
        style: TextStyle(fontWeight: FontWeight.w700, color: color),
      ),
    );
  }
}

class _ContactInfoBox extends StatelessWidget {
  const _ContactInfoBox({
    required this.title,
    required this.name,
    required this.phone,
    this.address,
    this.showName = true,
  });

  final String title;
  final String name;
  final String phone;
  final String? address;
  final bool showName;

  @override
  Widget build(BuildContext context) {
    final sellerName = name.trim().isEmpty ? '-' : name.trim();
    final sellerPhone = phone.trim().isEmpty ? '-' : phone.trim();
    final sellerAddress = address == null || address!.trim().isEmpty
        ? null
        : address!.trim();

    return _OutlinedLabelBox(
      title: title,
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          if (showName) ...[
            Text(
              sellerName,
              style: const TextStyle(
                fontSize: 15,
                fontWeight: FontWeight.w700,
                color: Color(0xFF201607),
              ),
            ),
            const SizedBox(height: 6),
          ],
          Row(
            children: [
              const Icon(
                Icons.phone_outlined,
                size: 16,
                color: Color(0xFF64748B),
              ),
              const SizedBox(width: 6),
              Expanded(
                child: Text(
                  sellerPhone,
                  style: const TextStyle(
                    fontSize: 14,
                    color: Color(0xFF334155),
                  ),
                ),
              ),
            ],
          ),
          if (sellerAddress != null) ...[
            const SizedBox(height: 6),
            Row(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                const Padding(
                  padding: EdgeInsets.only(top: 1),
                  child: Icon(
                    Icons.location_on_outlined,
                    size: 16,
                    color: Color(0xFF64748B),
                  ),
                ),
                const SizedBox(width: 6),
                Expanded(
                  child: Text(
                    sellerAddress,
                    maxLines: 2,
                    overflow: TextOverflow.ellipsis,
                    style: const TextStyle(
                      fontSize: 14,
                      color: Color(0xFF334155),
                    ),
                  ),
                ),
              ],
            ),
          ],
        ],
      ),
    );
  }
}

class _ProductsInfoBox extends StatelessWidget {
  const _ProductsInfoBox({
    required this.title,
    required this.items,
    this.moreLabelBuilder,
  });

  final String title;
  final List<Map<String, dynamic>> items;
  final String Function(int count)? moreLabelBuilder;

  @override
  Widget build(BuildContext context) {
    final visibleItems = items.take(3).toList();
    final remainingItems = items.length - visibleItems.length;

    return _OutlinedLabelBox(
      title: title,
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          ...visibleItems.map((item) {
            final name = item['name']?.toString().trim().isNotEmpty == true
                ? item['name']!.toString().trim()
                : '-';
            final quantity = _formatQuantity(item['quantity']);

            return Padding(
              padding: const EdgeInsets.only(bottom: 8),
              child: Row(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  const Padding(
                    padding: EdgeInsets.only(top: 2),
                    child: Icon(
                      Icons.inventory_2_outlined,
                      size: 16,
                      color: Color(0xFF64748B),
                    ),
                  ),
                  const SizedBox(width: 6),
                  Expanded(
                    child: Text(
                      name,
                      style: const TextStyle(
                        fontSize: 14,
                        color: Color(0xFF201607),
                        fontWeight: FontWeight.w600,
                      ),
                    ),
                  ),
                  const SizedBox(width: 8),
                  Text(
                    'x$quantity',
                    style: const TextStyle(
                      fontSize: 13,
                      color: Color(0xFF475569),
                      fontWeight: FontWeight.w700,
                    ),
                  ),
                ],
              ),
            );
          }),
          if (remainingItems > 0)
            Text(
              moreLabelBuilder?.call(remainingItems) ?? '+$remainingItems more',
              style: const TextStyle(
                fontSize: 13,
                color: Color(0xFF64748B),
                fontWeight: FontWeight.w600,
              ),
            ),
        ],
      ),
    );
  }

  static String _formatQuantity(dynamic value) {
    final quantity = value is num
        ? value.toDouble()
        : double.tryParse(value?.toString() ?? '') ?? 0;
    final rounded = quantity.roundToDouble();

    if (quantity == rounded) {
      return rounded.toInt().toString();
    }

    return quantity.toStringAsFixed(2);
  }
}

class _OutlinedLabelBox extends StatelessWidget {
  const _OutlinedLabelBox({required this.title, required this.child});

  final String title;
  final Widget child;

  @override
  Widget build(BuildContext context) {
    return Stack(
      clipBehavior: Clip.none,
      children: [
        Container(
          width: double.infinity,
          margin: const EdgeInsets.only(top: 10),
          padding: const EdgeInsets.fromLTRB(14, 18, 14, 14),
          decoration: BoxDecoration(
            borderRadius: BorderRadius.circular(20),
            border: Border.all(color: const Color(0xFFD7E3E1), width: 1),
            color: Colors.white,
          ),
          child: child,
        ),
        Positioned(
          top: 0,
          left: 16,
          child: Container(
            color: Colors.white,
            padding: const EdgeInsets.symmetric(horizontal: 8),
            child: Text(
              title,
              style: const TextStyle(
                fontSize: 12,
                fontWeight: FontWeight.w700,
                color: Color(0xFFD6A735),
              ),
            ),
          ),
        ),
      ],
    );
  }
}

class _SheetSection extends StatelessWidget {
  const _SheetSection({required this.title, required this.children});

  final String title;
  final List<Widget> children;

  @override
  Widget build(BuildContext context) {
    return Column(
      crossAxisAlignment: CrossAxisAlignment.start,
      children: [
        Text(
          title,
          style: const TextStyle(
            fontSize: 18,
            fontWeight: FontWeight.w800,
            color: Color(0xFF201607),
          ),
        ),
        const SizedBox(height: 14),
        ...children,
      ],
    );
  }
}

class _SheetInfoRow extends StatelessWidget {
  const _SheetInfoRow({
    required this.icon,
    required this.label,
    required this.value,
  });

  final IconData icon;
  final String label;
  final String value;

  @override
  Widget build(BuildContext context) {
    return Padding(
      padding: const EdgeInsets.only(bottom: 14),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Row(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              Padding(
                padding: const EdgeInsets.only(top: 2),
                child: Icon(icon, size: 20, color: const Color(0xFF64748B)),
              ),
              const SizedBox(width: 12),
              Expanded(
                child: Column(
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: [
                    Text(
                      label,
                      style: const TextStyle(
                        fontSize: 12,
                        color: Color(0xFF64748B),
                        fontWeight: FontWeight.w500,
                      ),
                    ),
                    const SizedBox(height: 2),
                    Text(
                      value,
                      style: const TextStyle(
                        fontSize: 15,
                        fontWeight: FontWeight.w700,
                        color: Color(0xFF201607),
                      ),
                    ),
                  ],
                ),
              ),
            ],
          ),
        ],
      ),
    );
  }
}

class _SheetEditableAmountRow extends StatelessWidget {
  const _SheetEditableAmountRow({
    required this.icon,
    required this.label,
    required this.controller,
    required this.saveLabel,
    required this.enabled,
    required this.isSaving,
    this.helperText,
    this.onSave,
  });

  final IconData icon;
  final String label;
  final TextEditingController controller;
  final String saveLabel;
  final bool enabled;
  final bool isSaving;
  final String? helperText;
  final Future<void> Function()? onSave;

  @override
  Widget build(BuildContext context) {
    return Padding(
      padding: const EdgeInsets.only(bottom: 14),
      child: Row(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Padding(
            padding: const EdgeInsets.only(top: 2),
            child: Icon(icon, size: 20, color: const Color(0xFF64748B)),
          ),
          const SizedBox(width: 12),
          Expanded(
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                Text(
                  label,
                  style: const TextStyle(
                    fontSize: 12,
                    color: Color(0xFF64748B),
                    fontWeight: FontWeight.w500,
                  ),
                ),
                const SizedBox(height: 8),
                TextField(
                  controller: controller,
                  enabled: enabled,
                  keyboardType: const TextInputType.numberWithOptions(
                    decimal: true,
                  ),
                  decoration: InputDecoration(
                    isDense: true,
                    prefixText: '\$',
                    hintText: '0.00',
                    contentPadding: const EdgeInsets.symmetric(
                      horizontal: 12,
                      vertical: 12,
                    ),
                    filled: true,
                    fillColor: enabled ? Colors.white : const Color(0xFFF8FAFC),
                    border: OutlineInputBorder(
                      borderRadius: BorderRadius.circular(14),
                      borderSide: const BorderSide(color: Color(0xFFD7E3E1)),
                    ),
                    enabledBorder: OutlineInputBorder(
                      borderRadius: BorderRadius.circular(14),
                      borderSide: const BorderSide(color: Color(0xFFD7E3E1)),
                    ),
                    disabledBorder: OutlineInputBorder(
                      borderRadius: BorderRadius.circular(14),
                      borderSide: const BorderSide(color: Color(0xFFE2E8F0)),
                    ),
                    focusedBorder: OutlineInputBorder(
                      borderRadius: BorderRadius.circular(14),
                      borderSide: const BorderSide(
                        color: Color(0xFFD6A735),
                        width: 1.4,
                      ),
                    ),
                  ),
                ),
                if (helperText != null) ...[
                  const SizedBox(height: 6),
                  Text(
                    helperText!,
                    style: const TextStyle(
                      fontSize: 12,
                      color: Color(0xFF64748B),
                    ),
                  ),
                ],
                if (onSave != null) ...[
                  const SizedBox(height: 10),
                  Align(
                    alignment: Alignment.centerLeft,
                    child: FilledButton(
                      onPressed: isSaving ? null : () => onSave!.call(),
                      style: FilledButton.styleFrom(
                        backgroundColor: const Color(0xFFD6A735),
                        foregroundColor: Colors.white,
                        padding: const EdgeInsets.symmetric(
                          horizontal: 16,
                          vertical: 10,
                        ),
                        textStyle: const TextStyle(fontWeight: FontWeight.w700),
                      ),
                      child: isSaving
                          ? const SizedBox(
                              width: 16,
                              height: 16,
                              child: CircularProgressIndicator(
                                strokeWidth: 2,
                                color: Colors.white,
                              ),
                            )
                          : Text(saveLabel),
                    ),
                  ),
                ],
              ],
            ),
          ),
        ],
      ),
    );
  }
}

class _SheetProductRow extends StatelessWidget {
  const _SheetProductRow({
    required this.name,
    required this.quantity,
    required this.total,
  });

  final String name;
  final dynamic quantity;
  final String total;

  @override
  Widget build(BuildContext context) {
    return Padding(
      padding: const EdgeInsets.only(bottom: 12),
      child: Row(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          const Padding(
            padding: EdgeInsets.only(top: 2),
            child: Icon(
              Icons.inventory_2_outlined,
              size: 20,
              color: Color(0xFF64748B),
            ),
          ),
          const SizedBox(width: 12),
          Expanded(
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                Text(
                  name,
                  style: const TextStyle(
                    fontSize: 15,
                    fontWeight: FontWeight.w700,
                    color: Color(0xFF201607),
                  ),
                ),
                const SizedBox(height: 2),
                Text(
                  'x${_ProductsInfoBox._formatQuantity(quantity)}',
                  style: const TextStyle(
                    fontSize: 13,
                    color: Color(0xFF64748B),
                    fontWeight: FontWeight.w500,
                  ),
                ),
              ],
            ),
          ),
          const SizedBox(width: 12),
          Text(
            total,
            style: const TextStyle(
              fontSize: 14,
              fontWeight: FontWeight.w700,
              color: Color(0xFF201607),
            ),
          ),
        ],
      ),
    );
  }
}
