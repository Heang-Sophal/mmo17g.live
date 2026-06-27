import 'dart:async';
import 'package:flutter/material.dart';
import 'package:flutter/services.dart';
import 'package:provider/provider.dart';
import 'package:seller_app/providers/cart_provider.dart';
import 'package:seller_app/providers/order_provider.dart';
import 'package:seller_app/providers/auth_provider.dart';
import 'package:seller_app/providers/language_provider.dart';
import 'package:seller_app/services/api_service.dart';
import 'package:seller_app/utils/phone_validator.dart';

class CheckoutScreen extends StatefulWidget {
  final int warehouseId;
  final String warehouseName;

  const CheckoutScreen({
    super.key,
    required this.warehouseId,
    required this.warehouseName,
  });

  @override
  State<CheckoutScreen> createState() => _CheckoutScreenState();
}

class _CheckoutScreenState extends State<CheckoutScreen> {
  String _selectedPaymentMethod = 'cash';
  final TextEditingController _customerNameController = TextEditingController();
  final TextEditingController _customerPhoneController =
      TextEditingController();
  final TextEditingController _customerAddressController =
      TextEditingController();
  bool _isSubmitting = false;
  String? _phoneError;
  String? _countryFlag;

  final ApiService _apiService = ApiService();
  Timer? _debounceTimer;
  bool _isLookingUp = false;
  Map<String, dynamic>? _foundCustomer;
  bool _addressAutoFilled = false;

  @override
  void initState() {
    super.initState();
    // Auto-generate customer name with timestamp
    final timestamp = DateTime.now().millisecondsSinceEpoch
        .toString()
        .substring(8);
    _customerNameController.text = 'Customer-$timestamp';
    _customerPhoneController.addListener(_onPhoneChanged);
  }

  void _onPhoneChanged() {
    _debounceTimer?.cancel();
    final phone = _customerPhoneController.text;

    setState(() {
      if (phone.isEmpty) {
        _phoneError = null;
        _countryFlag = null;
      } else {
        _countryFlag = PhoneValidator.getCountryFlag(phone);
        _phoneError = PhoneValidator.getValidationError(phone);
      }

      if (_addressAutoFilled || _foundCustomer != null) {
        _addressAutoFilled = false;
        _foundCustomer = null;
        _customerAddressController.clear();
      }
      _isLookingUp = false;
    });

    final digits = phone.replaceAll(RegExp(r'[^\d]'), '');
    if (digits.length >= 6) {
      _debounceTimer = Timer(
        const Duration(milliseconds: 600),
        () => _lookupCustomer(phone),
      );
    }
  }

  Future<void> _lookupCustomer(String phone) async {
    if (!mounted) return;
    final token = context.read<AuthProvider>().token;
    _apiService.setToken(token);
    setState(() => _isLookingUp = true);

    final customer = await _apiService.lookupCustomerByPhone(phone);

    if (!mounted) return;
    setState(() {
      _isLookingUp = false;
      _foundCustomer = customer;
      if (customer != null) {
        final address = (customer['address'] ?? '').toString();
        if (address.isNotEmpty) {
          _customerAddressController.text = address;
          _addressAutoFilled = true;
        }
      }
    });
  }

  @override
  void dispose() {
    _debounceTimer?.cancel();
    _apiService.dispose();
    _customerNameController.dispose();
    _customerPhoneController.dispose();
    _customerAddressController.dispose();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    final cart = context.watch<CartProvider>();
    final languageProvider = context.watch<LanguageProvider>();

    return Scaffold(
      appBar: AppBar(title: Text(languageProvider.t('checkout'))),
      body: Column(
        children: [
          // Scrollable Content
          Expanded(
            child: SingleChildScrollView(
              padding: const EdgeInsets.all(16),
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  // Order Summary Card
                  Card(
                    child: Padding(
                      padding: const EdgeInsets.all(16),
                      child: Column(
                        crossAxisAlignment: CrossAxisAlignment.start,
                        children: [
                          Text(
                            languageProvider.t('order_summary'),
                            style: const TextStyle(
                              fontSize: 18,
                              fontWeight: FontWeight.bold,
                            ),
                          ),
                          const SizedBox(height: 12),
                          // Order Items
                          ...cart.items.map(
                            (item) => Padding(
                              padding: const EdgeInsets.only(bottom: 12),
                              child: Row(
                                children: [
                                  // Quantity Badge
                                  Container(
                                    width: 28,
                                    height: 28,
                                    decoration: BoxDecoration(
                                      color: const Color(
                                        0xFF6C63FF,
                                      ).withValues(alpha: 0.1),
                                      borderRadius: BorderRadius.circular(6),
                                    ),
                                    child: Center(
                                      child: Text(
                                        'x${item.quantity}',
                                        style: const TextStyle(
                                          fontWeight: FontWeight.bold,
                                          fontSize: 12,
                                          color: Color(0xFF6C63FF),
                                        ),
                                      ),
                                    ),
                                  ),
                                  const SizedBox(width: 10),
                                  // Item Details
                                  Expanded(
                                    child: Column(
                                      crossAxisAlignment:
                                          CrossAxisAlignment.start,
                                      children: [
                                        Text(
                                          item.name,
                                          style: const TextStyle(
                                            fontWeight: FontWeight.bold,
                                            fontSize: 14,
                                          ),
                                          maxLines: 1,
                                          overflow: TextOverflow.ellipsis,
                                        ),
                                        Text(
                                          '\$${item.price.toStringAsFixed(2)} x ${item.quantity}',
                                          style: TextStyle(
                                            fontSize: 12,
                                            color: Colors.grey[600],
                                          ),
                                        ),
                                      ],
                                    ),
                                  ),
                                  // Item Total
                                  Text(
                                    '\$${item.total.toStringAsFixed(2)}',
                                    style: const TextStyle(
                                      fontWeight: FontWeight.bold,
                                      fontSize: 14,
                                    ),
                                  ),
                                ],
                              ),
                            ),
                          ),
                          const Divider(height: 24),
                          // Totals
                          _buildSummaryRow(
                            languageProvider.t('subtotal'),
                            '\$${cart.subtotal.toStringAsFixed(2)}',
                            languageProvider: languageProvider,
                          ),
                          const SizedBox(height: 6),
                          _buildSummaryRow(
                            '${languageProvider.t('tax')} (${cart.taxRate.toStringAsFixed(0)}%)',
                            '\$${cart.tax.toStringAsFixed(2)}',
                            languageProvider: languageProvider,
                          ),
                          const SizedBox(height: 6),
                          _buildSummaryRow(
                            languageProvider.t('shipping'),
                            cart.isFreeShipping
                                ? '\$${cart.shipping.toStringAsFixed(2)} (${languageProvider.t('free_delivery')})'
                                : '\$${cart.shipping.toStringAsFixed(2)}',
                            languageProvider: languageProvider,
                          ),
                          const Divider(),
                          _buildSummaryRow(
                            languageProvider.t('total'),
                            '\$${cart.total.toStringAsFixed(2)}',
                            isTotal: true,
                            languageProvider: languageProvider,
                          ),
                        ],
                      ),
                    ),
                  ),
                  const SizedBox(height: 16),

                  // Customer Information
                  Text(
                    languageProvider.t('customer_information'),
                    style: const TextStyle(
                      fontSize: 14,
                      fontWeight: FontWeight.w600,
                      color: Colors.grey,
                    ),
                  ),
                  const SizedBox(height: 8),

                  // Customer Name
                  TextField(
                    controller: _customerNameController,
                    decoration: InputDecoration(
                      labelText: languageProvider.t('customer_name_optional'),
                      prefixIcon: const Icon(Icons.person_outline),
                      border: const OutlineInputBorder(),
                    ),
                  ),
                  const SizedBox(height: 12),

                  // Customer Phone (Required) with Country Flag
                  Container(
                    decoration: BoxDecoration(
                      border: Border.all(
                        color: _phoneError != null ? Colors.red : Colors.grey,
                        width: _phoneError != null ? 2 : 1,
                      ),
                      borderRadius: BorderRadius.circular(4),
                    ),
                    child: Row(
                      children: [
                        // Country Flag
                        Container(
                          width: 50,
                          height: 48,
                          alignment: Alignment.center,
                          decoration: BoxDecoration(
                            color: Colors.grey[200],
                            borderRadius: const BorderRadius.only(
                              topLeft: Radius.circular(4),
                              bottomLeft: Radius.circular(4),
                            ),
                          ),
                          child: Text(
                            _countryFlag ?? '📱',
                            style: const TextStyle(fontSize: 24),
                          ),
                        ),
                        // Phone Input
                        Expanded(
                          child: TextField(
                            controller: _customerPhoneController,
                            decoration: InputDecoration(
                              labelText: languageProvider.t('customer_phone'),
                              hintText: languageProvider.t('phone_hint'),
                              labelStyle: TextStyle(
                                color: _phoneError != null ? Colors.red : null,
                              ),
                              border: InputBorder.none,
                              contentPadding: const EdgeInsets.symmetric(
                                horizontal: 12,
                                vertical: 16,
                              ),
                            ),
                            keyboardType: TextInputType.phone,
                            inputFormatters: [
                              FilteringTextInputFormatter.allow(
                                RegExp(r'[0-9+\s\-\(\)]'),
                              ),
                            ],
                          ),
                        ),
                        // Loading indicator or clear button
                        if (_isLookingUp)
                          const Padding(
                            padding: EdgeInsets.symmetric(horizontal: 12),
                            child: SizedBox(
                              width: 16,
                              height: 16,
                              child: CircularProgressIndicator(strokeWidth: 2),
                            ),
                          )
                        else if (_customerPhoneController.text.isNotEmpty)
                          IconButton(
                            icon: const Icon(Icons.clear, size: 20),
                            onPressed: () {
                              _customerPhoneController.clear();
                            },
                          ),
                      ],
                    ),
                  ),
                  // Error Message
                  if (_phoneError != null)
                    Padding(
                      padding: const EdgeInsets.only(top: 4, left: 4),
                      child: Text(
                        _phoneError!,
                        style: const TextStyle(color: Colors.red, fontSize: 12),
                      ),
                    ),
                  // Customer found chip
                  if (_foundCustomer != null)
                    Padding(
                      padding: const EdgeInsets.only(top: 6, left: 4),
                      child: Row(
                        children: [
                          const Icon(
                            Icons.check_circle,
                            color: Colors.green,
                            size: 16,
                          ),
                          const SizedBox(width: 6),
                          Text(
                            '${languageProvider.t('customer_found')}: ${_foundCustomer!['name']}',
                            style: const TextStyle(
                              color: Colors.green,
                              fontSize: 12,
                              fontWeight: FontWeight.w500,
                            ),
                          ),
                        ],
                      ),
                    ),
                  const SizedBox(height: 12),

                  // Customer Address (Required)
                  TextField(
                    controller: _customerAddressController,
                    decoration: InputDecoration(
                      labelText: languageProvider.t('customer_address'),
                      prefixIcon: const Icon(Icons.location_on_outlined),
                      suffixIcon: _addressAutoFilled
                          ? const Tooltip(
                              message: 'Auto-filled',
                              child: Icon(
                                Icons.auto_fix_high,
                                color: Colors.green,
                                size: 18,
                              ),
                            )
                          : null,
                      border: const OutlineInputBorder(),
                    ),
                    maxLines: 2,
                    onChanged: (_) {
                      if (_addressAutoFilled) {
                        setState(() => _addressAutoFilled = false);
                      }
                    },
                  ),
                  const SizedBox(height: 20),

                  // Payment Method
                  Text(
                    languageProvider.t('payment_method_title'),
                    style: const TextStyle(
                      fontSize: 16,
                      fontWeight: FontWeight.bold,
                    ),
                  ),
                  const SizedBox(height: 12),
                  _buildPaymentMethodTile(
                    'cash',
                    languageProvider.t('cod_cash'),
                    Icons.money,
                    languageProvider.t('cash_on_delivery'),
                  ),
                  _buildPaymentMethodTile(
                    'khqr',
                    languageProvider.t('khqr'),
                    Icons.qr_code,
                    languageProvider.t('scan_to_pay'),
                  ),
                  const SizedBox(height: 16),

                  const SizedBox(height: 20),
                ],
              ),
            ),
          ),

          // Fixed Bottom Button
          Container(
            padding: const EdgeInsets.all(16),
            decoration: BoxDecoration(
              color: Colors.white,
              boxShadow: [
                BoxShadow(
                  color: Colors.black.withValues(alpha: 0.1),
                  blurRadius: 10,
                  offset: const Offset(0, -2),
                ),
              ],
            ),
            child: SizedBox(
              width: double.infinity,
              height: 50,
              child: ElevatedButton.icon(
                onPressed: _isSubmitting ? null : () => _completeOrder(cart),
                icon: _isSubmitting
                    ? const SizedBox(
                        width: 20,
                        height: 20,
                        child: CircularProgressIndicator(
                          strokeWidth: 2,
                          valueColor: AlwaysStoppedAnimation<Color>(
                            Colors.white,
                          ),
                        ),
                      )
                    : const Icon(Icons.check_circle, size: 22),
                label: Text(
                  _isSubmitting
                      ? languageProvider.t('processing_order')
                      : languageProvider.t('complete_order'),
                  style: const TextStyle(
                    fontSize: 16,
                    fontWeight: FontWeight.bold,
                  ),
                ),
                style: ElevatedButton.styleFrom(
                  shape: RoundedRectangleBorder(
                    borderRadius: BorderRadius.circular(12),
                  ),
                ),
              ),
            ),
          ),
        ],
      ),
    );
  }

  Widget _buildSummaryRow(
    String label,
    String value, {
    bool isTotal = false,
    LanguageProvider? languageProvider,
  }) {
    return Row(
      mainAxisAlignment: MainAxisAlignment.spaceBetween,
      children: [
        Text(
          label,
          style: TextStyle(
            fontSize: isTotal ? 16 : 13,
            fontWeight: isTotal ? FontWeight.bold : FontWeight.normal,
            color: Colors.grey[700],
          ),
        ),
        Text(
          value,
          style: TextStyle(
            fontSize: isTotal ? 20 : 13,
            fontWeight: isTotal ? FontWeight.bold : FontWeight.normal,
            color: isTotal ? const Color(0xFF6C63FF) : Colors.grey[700],
          ),
        ),
      ],
    );
  }

  Widget _buildPaymentMethodTile(
    String value,
    String title,
    IconData icon,
    String subtitle,
  ) {
    final isSelected = _selectedPaymentMethod == value;
    return Card(
      margin: const EdgeInsets.only(bottom: 8),
      color: isSelected ? const Color(0xFF6C63FF).withValues(alpha: 0.1) : null,
      child: ListTile(
        selected: isSelected,
        contentPadding: const EdgeInsets.symmetric(horizontal: 12, vertical: 4),
        leading: Container(
          padding: const EdgeInsets.all(8),
          decoration: BoxDecoration(
            color: isSelected ? const Color(0xFF6C63FF) : Colors.grey[200],
            borderRadius: BorderRadius.circular(8),
          ),
          child: Icon(
            icon,
            size: 20,
            color: isSelected ? Colors.white : Colors.grey[700],
          ),
        ),
        title: Text(
          title,
          style: TextStyle(
            fontWeight: FontWeight.bold,
            fontSize: 14,
            color: isSelected ? const Color(0xFF6C63FF) : null,
          ),
        ),
        subtitle: Text(subtitle, style: const TextStyle(fontSize: 12)),
        trailing: isSelected
            ? const Icon(Icons.check_circle, color: Color(0xFF6C63FF), size: 20)
            : null,
        onTap: () {
          setState(() {
            _selectedPaymentMethod = value;
          });
        },
      ),
    );
  }

  void _completeOrder(CartProvider cart) async {
    final languageProvider = context.read<LanguageProvider>();
    // Validate phone number
    String phone = _customerPhoneController.text.trim();
    if (phone.isEmpty) {
      _showValidationError(
        languageProvider.t('please_enter_phone'),
        languageProvider,
      );
      return;
    }
    if (!PhoneValidator.isValidPhone(phone)) {
      String? errorMsg = PhoneValidator.getValidationError(phone);
      _showValidationError(
        errorMsg ?? languageProvider.t('invalid_phone'),
        languageProvider,
      );
      return;
    }
    if (_customerAddressController.text.trim().isEmpty) {
      _showValidationError(
        languageProvider.t('please_enter_address'),
        languageProvider,
      );
      return;
    }

    final orderProvider = context.read<OrderProvider>();
    final authProvider = context.read<AuthProvider>();

    // Get logged-in user ID
    final userId = authProvider.user?.id;

    // Set payment status based on payment method
    String paymentStatus = _selectedPaymentMethod == 'khqr' ? 'paid' : 'unpaid';

    // បង្កើត Order Data
    final orderData = {
      'customer_name': _customerNameController.text.isEmpty
          ? languageProvider.t('walk_in_customer')
          : _customerNameController.text,
      'customer_phone': _customerPhoneController.text.trim(),
      'customer_address': _customerAddressController.text.trim(),
      'items': cart.items
          .map(
            (item) => {
              'product_id': int.tryParse(item.productId) ?? item.productId,
              'product_name': item.name,
              'quantity': item.quantity,
              'price': item.price,
            },
          )
          .toList(),
      'payment_method': _selectedPaymentMethod,
      'payment_status': paymentStatus,
      'paid_amount': cart.total,
      'warehouse_id': widget.warehouseId,
      if (userId != null) 'user_id': int.tryParse(userId) ?? 1,
      // Add shipping information
      'shipping': cart.shipping,
      'shipping_is_free': cart.isFreeShipping,
      'subtotal': cart.subtotal,
      'subtotal_after_discount': cart.subtotalAfterDiscount,
      'tax_amount': cart.tax,
      'grand_total': cart.total,
      // Add discount information
      if (cart.hasDiscount) ...{
        'discount_type': cart.discountType,
        'discount_value': cart.discount,
        'discount_amount': cart.discountAmount,
      },
    };

    setState(() {
      _isSubmitting = true;
    });

    try {
      // ផ្ញើ Order ទៅ API
      final order = await orderProvider.createOrder(orderData);
      final isOfflineOrder = order.id.startsWith('offline-');

      setState(() {
        _isSubmitting = false;
      });

      // បង្ហាញ Success Dialog
      _showSuccessDialog(cart, isOfflineOrder: isOfflineOrder);
    } catch (e) {
      setState(() {
        _isSubmitting = false;
      });

      // បង្ហាញ Error
      if (mounted) {
        showDialog(
          context: context,
          builder: (context) => AlertDialog(
            shape: RoundedRectangleBorder(
              borderRadius: BorderRadius.circular(16),
            ),
            content: Column(
              mainAxisSize: MainAxisSize.min,
              children: [
                Container(
                  padding: const EdgeInsets.all(16),
                  decoration: BoxDecoration(
                    color: Colors.red.withValues(alpha: 0.1),
                    shape: BoxShape.circle,
                  ),
                  child: const Icon(Icons.error, size: 64, color: Colors.red),
                ),
                const SizedBox(height: 24),
                Text(
                  languageProvider.t('order_failed'),
                  style: const TextStyle(
                    fontSize: 24,
                    fontWeight: FontWeight.bold,
                  ),
                ),
                const SizedBox(height: 8),
                Text(
                  e.toString(),
                  textAlign: TextAlign.center,
                  style: TextStyle(fontSize: 14, color: Colors.grey[600]),
                ),
                const SizedBox(height: 24),
                ElevatedButton(
                  onPressed: () => Navigator.pop(context),
                  child: Text(languageProvider.t('try_again')),
                ),
              ],
            ),
          ),
        );
      }
    }
  }

  void _showValidationError(String message, LanguageProvider languageProvider) {
    if (mounted) {
      showDialog(
        context: context,
        builder: (context) => AlertDialog(
          shape: RoundedRectangleBorder(
            borderRadius: BorderRadius.circular(16),
          ),
          content: Column(
            mainAxisSize: MainAxisSize.min,
            children: [
              Container(
                padding: const EdgeInsets.all(16),
                decoration: BoxDecoration(
                  color: Colors.orange.withValues(alpha: 0.1),
                  shape: BoxShape.circle,
                ),
                child: const Icon(
                  Icons.warning_amber_rounded,
                  size: 64,
                  color: Colors.orange,
                ),
              ),
              const SizedBox(height: 24),
              Text(
                languageProvider.t('validation_error'),
                style: const TextStyle(
                  fontSize: 20,
                  fontWeight: FontWeight.bold,
                ),
              ),
              const SizedBox(height: 8),
              Text(
                message,
                textAlign: TextAlign.center,
                style: TextStyle(fontSize: 14, color: Colors.grey[600]),
              ),
              const SizedBox(height: 24),
              ElevatedButton(
                onPressed: () => Navigator.pop(context),
                child: Text(languageProvider.t('ok')),
              ),
            ],
          ),
        ),
      );
    }
  }

  void _showSuccessDialog(CartProvider cart, {bool isOfflineOrder = false}) {
    final languageProvider = context.read<LanguageProvider>();
    // Show success dialog
    showDialog(
      context: context,
      barrierDismissible: false,
      builder: (context) => AlertDialog(
        shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(16)),
        contentPadding: const EdgeInsets.all(24),
        content: Column(
          mainAxisSize: MainAxisSize.min,
          children: [
            Container(
              padding: const EdgeInsets.all(16),
              decoration: BoxDecoration(
                color: Colors.green.withValues(alpha: 0.1),
                shape: BoxShape.circle,
              ),
              child: Icon(
                isOfflineOrder ? Icons.cloud_done_rounded : Icons.check_circle,
                size: 64,
                color: Colors.green,
              ),
            ),
            const SizedBox(height: 24),
            Text(
              languageProvider.t('order_completed'),
              style: const TextStyle(fontSize: 24, fontWeight: FontWeight.bold),
            ),
            const SizedBox(height: 8),
            if (isOfflineOrder) ...[
              Text(
                'បានរក្សាទុក Offline។ App នឹង sync ពេលមាន Internet វិញ។',
                textAlign: TextAlign.center,
                style: TextStyle(fontSize: 14, color: Colors.orange[800]),
              ),
              const SizedBox(height: 8),
            ],
            Text(
              '${languageProvider.t('total')}: \$${cart.total.toStringAsFixed(2)}',
              style: TextStyle(fontSize: 18, color: Colors.grey[600]),
            ),
            const SizedBox(height: 24),
            Row(
              mainAxisSize: MainAxisSize.min,
              children: [
                Flexible(
                  child: OutlinedButton.icon(
                    onPressed: () {
                      // Print receipt
                      Navigator.pop(context);
                      cart.clear();
                      Navigator.pop(context);
                      ScaffoldMessenger.of(context).showSnackBar(
                        SnackBar(
                          content: Text(languageProvider.t('receipt_printed')),
                        ),
                      );
                    },
                    icon: const Icon(Icons.print, size: 18),
                    label: Text(
                      languageProvider.t('print'),
                      style: const TextStyle(fontSize: 13),
                    ),
                    style: OutlinedButton.styleFrom(
                      padding: const EdgeInsets.symmetric(
                        horizontal: 12,
                        vertical: 10,
                      ),
                    ),
                  ),
                ),
                const SizedBox(width: 8),
                Flexible(
                  child: ElevatedButton.icon(
                    onPressed: () {
                      cart.clear();
                      Navigator.pop(context);
                      Navigator.pop(context);
                    },
                    icon: const Icon(Icons.add_shopping_cart, size: 18),
                    label: Text(
                      languageProvider.t('new_order'),
                      style: const TextStyle(fontSize: 13),
                    ),
                    style: ElevatedButton.styleFrom(
                      backgroundColor: const Color(0xFF6C63FF),
                      foregroundColor: Colors.white,
                      padding: const EdgeInsets.symmetric(
                        horizontal: 12,
                        vertical: 10,
                      ),
                    ),
                  ),
                ),
              ],
            ),
          ],
        ),
      ),
    );
  }
}
