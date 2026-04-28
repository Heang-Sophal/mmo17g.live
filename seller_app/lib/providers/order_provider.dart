import 'package:flutter/material.dart';
import 'package:seller_app/repositories/repository.dart';
import 'package:seller_app/models/order.dart';

class OrderProvider extends ChangeNotifier {
  final OrderRepository _repository;

  OrderProvider({OrderRepository? repository})
    : _repository = repository ?? OrderRepository();

  List<Order> _orders = [];
  bool _isLoading = false;
  String? _error;
  Map<String, dynamic> _stats = {};

  List<Order> get orders => _orders;
  bool get isLoading => _isLoading;
  String? get error => _error;
  Map<String, dynamic> get stats => _stats;

  // ទាញទិន្នន័យការកុម្ម៉ង់ពី API
  Future<void> fetchOrders() async {
    _isLoading = true;
    _error = null;
    notifyListeners();

    try {
      _orders = await _repository.getAllOrders();
      _isLoading = false;
    } catch (e) {
      _error = e.toString();
      _isLoading = false;
    }
    notifyListeners();
  }

  // បង្កើតការកុម្ម៉ង់ថ្មី (POS)
  Future<Order> createOrder(Map<String, dynamic> orderData) async {
    try {
      final order = await _repository.createOrder(orderData);
      _orders.insert(0, order);
      notifyListeners();
      return order;
    } catch (e) {
      // បើបរាជ័យ រក្សាទុកក្នុងស្ថានភាព local
      _error = e.toString();
      notifyListeners();
      rethrow;
    }
  }

  // ទាញទិន្នន័យស្ថិតិលក់
  Future<void> fetchStats() async {
    try {
      _stats = await _repository.getSalesStats();
      notifyListeners();
    } catch (e) {
      _error = e.toString();
    }
    notifyListeners();
  }

  // អាប់ដេតស្ថានភាពការកុម្ម៉ង់
  void updateOrderStatus(String orderId, OrderStatus newStatus) {
    final index = _orders.indexWhere((o) => o.id == orderId);
    if (index >= 0) {
      // ក្នុងករណីមាន API សម្រាប់ update
      // _repository.updateOrderStatus(orderId, newStatus);
      notifyListeners();
    }
  }

  // ចម្រាញ់ការកុម្ម៉ង់តាមស្ថានភាព
  List<Order> getOrdersByStatus(OrderStatus status) {
    return _orders.where((o) => o.status == status).toList();
  }

  // ចម្រាញ់ការកុម្ម៉ង់តាមថ្ងៃ
  List<Order> getOrdersByDate(DateTime date) {
    return _orders
        .where(
          (o) =>
              o.createdAt.year == date.year &&
              o.createdAt.month == date.month &&
              o.createdAt.day == date.day,
        )
        .toList();
  }
}
