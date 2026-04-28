import 'package:flutter/material.dart';
import 'package:seller_app/repositories/repository.dart';
import 'package:seller_app/models/product.dart';

class ProductProvider extends ChangeNotifier {
  final ProductRepository _repository;

  ProductProvider({ProductRepository? repository})
    : _repository = repository ?? ProductRepository();

  List<Product> _products = [];
  bool _isLoading = false;
  String? _error;

  List<Product> get products => _products;
  bool get isLoading => _isLoading;
  String? get error => _error;

  // ទាញទិន្នន័យផលិតផលពី API
  Future<void> fetchProducts({String? warehouseId}) async {
    _isLoading = true;
    _error = null;
    notifyListeners();

    try {
      _products = await _repository.getAllProducts(warehouseId: warehouseId);
      _isLoading = false;
    } catch (e) {
      _error = e.toString();
      _isLoading = false;
    }
    notifyListeners();
  }

  // ទាញទិន្នន័យផលិតផលតាមប្រភេទ
  Future<void> fetchProductsByCategory(String category) async {
    _isLoading = true;
    _error = null;
    notifyListeners();

    try {
      _products = await _repository.getProductsByCategory(category);
      _isLoading = false;
    } catch (e) {
      _error = e.toString();
      _isLoading = false;
    }
    notifyListeners();
  }

  // ស្វែងរកផលិតផល
  Future<void> searchProducts(String query) async {
    _isLoading = true;
    _error = null;
    notifyListeners();

    try {
      _products = await _repository.searchProducts(query);
      _isLoading = false;
    } catch (e) {
      _error = e.toString();
      _isLoading = false;
    }
    notifyListeners();
  }

  // បន្ថែមផលិតផលថ្មី (ក្នុងករណី Offline)
  void addProductLocally(Product product) {
    _products.add(product);
    notifyListeners();
  }

  // កែផលិតផល (ក្នុងករណី Offline)
  void updateProductLocally(Product product) {
    final index = _products.indexWhere((p) => p.id == product.id);
    if (index >= 0) {
      _products[index] = product;
      notifyListeners();
    }
  }

  // លុបផលិតផល (ក្នុងករណី Offline)
  void deleteProductLocally(String productId) {
    _products.removeWhere((p) => p.id == productId);
    notifyListeners();
  }
}
