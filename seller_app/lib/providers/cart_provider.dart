import 'package:flutter/material.dart';
import '../models/cart_item.dart';
import '../config/api_config.dart';
import 'dart:convert';
import 'package:http/http.dart' as http;

class CartProvider extends ChangeNotifier {
  final List<CartItem> _items = [];
  double _taxRate = 0.0; // Default tax rate from database
  bool _isLoadingTax = false;

  // Discount fields
  double _discount = 0.0; // Discount amount
  String _discountType = 'fixed'; // 'fixed' or 'percentage'

  // Shipping field
  double _shipping = 0.0; // Default shipping fee (empty)

  List<CartItem> get items => List.unmodifiable(_items);

  int get itemCount => _items.length;

  double get taxRate => _taxRate;
  bool get isLoadingTax => _isLoadingTax;

  // Discount getters and setters
  double get discount => _discount;
  String get discountType => _discountType;
  bool get hasDiscount => _discount > 0;

  // Shipping getter and setter
  double get shipping => _shipping;
  bool get hasShipping => _shipping > 0;

  void setShipping(double amount) {
    _shipping = amount < 0 ? 0.0 : amount;
    notifyListeners();
  }

  void clearShipping() {
    _shipping = 0.0;
    notifyListeners();
  }

  double get subtotal {
    return _items.fold(0, (sum, item) => sum + item.total);
  }

  double get discountAmount {
    if (_discountType == 'percentage') {
      return subtotal * (_discount / 100);
    }
    return _discount; // Fixed amount
  }

  double get subtotalAfterDiscount => subtotal - discountAmount;

  double get tax => subtotalAfterDiscount * (_taxRate / 100);

  double get total => subtotalAfterDiscount + tax + _shipping;

  bool get isEmpty => _items.isEmpty;

  bool get isNotEmpty => _items.isNotEmpty;

  CartProvider() {
    _loadTaxRate();
  }

  /// Load tax rate from database settings
  Future<void> _loadTaxRate() async {
    _isLoadingTax = true;
    notifyListeners();

    try {
      final response = await http
          .get(Uri.parse('${ApiConfig.baseUrl}${ApiConfig.settings}'))
          .timeout(const Duration(seconds: 10));

      if (response.statusCode == 200) {
        final data = json.decode(response.body);
        if (data['success'] == true) {
          _taxRate = (data['data']['default_tax'] ?? 0).toDouble();
        }
      }
    } catch (e) {
      debugPrint('Error loading tax rate: $e');
      _taxRate = 0.0; // Default to 0% if error
    }

    _isLoadingTax = false;
    notifyListeners();
  }

  /// Refresh tax rate from server
  Future<void> refreshTaxRate() async {
    await _loadTaxRate();
  }

  void addItem(CartItem item) {
    final existingIndex = _items.indexWhere(
      (i) => i.productId == item.productId,
    );

    if (existingIndex >= 0) {
      _items[existingIndex].quantity += item.quantity;
    } else {
      _items.add(item);
    }
    notifyListeners();
  }

  void updateQuantity(String productId, int quantity) {
    if (quantity <= 0) {
      removeItem(productId);
      return;
    }

    final index = _items.indexWhere((i) => i.productId == productId);
    if (index >= 0) {
      _items[index].quantity = quantity;
      notifyListeners();
    }
  }

  void removeItem(String productId) {
    _items.removeWhere((i) => i.productId == productId);
    notifyListeners();
  }

  void clear() {
    _items.clear();
    _discount = 0.0;
    _discountType = 'fixed';
    _shipping = 0.0;
    notifyListeners();
  }

  /// Set discount
  void setDiscount(double amount, {String type = 'fixed'}) {
    if (amount < 0) {
      _discount = 0;
    } else if (type == 'percentage' && amount > 100) {
      _discount = 100; // Maximum 100% discount
    } else {
      _discount = amount;
    }
    _discountType = type;
    notifyListeners();
  }

  /// Remove discount
  void removeDiscount() {
    _discount = 0.0;
    _discountType = 'fixed';
    notifyListeners();
  }

  /// Get discount display text
  String get discountDisplay {
    if (!hasDiscount) return 'No discount';
    if (_discountType == 'percentage') {
      return '${_discount.toStringAsFixed(0)}%';
    }
    return '\$${_discount.toStringAsFixed(2)}';
  }

  bool containsProduct(String productId) {
    return _items.any((i) => i.productId == productId);
  }

  int getProductQuantity(String productId) {
    final item = _items.firstWhere(
      (i) => i.productId == productId,
      orElse: () => CartItem(productId: '', name: '', price: 0, imageUrl: ''),
    );
    return item.quantity;
  }
}
