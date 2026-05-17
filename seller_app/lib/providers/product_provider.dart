import 'package:flutter/material.dart';
import 'package:seller_app/repositories/repository.dart';
import 'package:seller_app/models/product.dart';

class ProductProvider extends ChangeNotifier {
  final ProductRepository _repository;
  static const Duration _memoryCacheTtl = Duration(minutes: 2);

  ProductProvider({ProductRepository? repository})
    : _repository = repository ?? ProductRepository();

  List<Product> _products = [];
  final Map<String, List<Product>> _productsByWarehouse = {};
  final Map<String, DateTime> _fetchedAtByWarehouse = {};
  String _activeWarehouseKey = 'all';
  bool _isLoading = false;
  String? _error;

  List<Product> get products => _products;
  bool get isLoading => _isLoading;
  String? get error => _error;

  // ទាញទិន្នន័យផលិតផលពី API
  Future<void> fetchProducts({
    String? warehouseId,
    bool forceRefresh = false,
  }) async {
    final warehouseKey = _warehouseKey(warehouseId);
    _activeWarehouseKey = warehouseKey;

    final cachedProducts = _productsByWarehouse[warehouseKey];
    final fetchedAt = _fetchedAtByWarehouse[warehouseKey];
    final hasFreshMemoryCache =
        cachedProducts != null &&
        fetchedAt != null &&
        DateTime.now().difference(fetchedAt) < _memoryCacheTtl;

    if (!forceRefresh && hasFreshMemoryCache) {
      _products = cachedProducts;
      _error = null;
      notifyListeners();
      return;
    }

    if (cachedProducts != null && cachedProducts.isNotEmpty) {
      _products = cachedProducts;
    }

    _isLoading = true;
    _error = null;
    notifyListeners();

    try {
      final products = await _repository.getAllProducts(
        warehouseId: warehouseId,
        forceRefresh: forceRefresh,
        onRefresh: (fresh) {
          _productsByWarehouse[warehouseKey] = fresh;
          _fetchedAtByWarehouse[warehouseKey] = DateTime.now();

          if (_activeWarehouseKey == warehouseKey) {
            _products = fresh;
            _error = null;
            notifyListeners();
          }
        },
      );
      _products = products;
      _productsByWarehouse[warehouseKey] = products;
      _fetchedAtByWarehouse[warehouseKey] = DateTime.now();
      _isLoading = false;
    } catch (e) {
      _error = e.toString();
      _isLoading = false;
    }
    notifyListeners();
  }

  String _warehouseKey(String? warehouseId) {
    final normalized = warehouseId?.trim();
    return normalized == null || normalized.isEmpty || normalized == 'all'
        ? 'all'
        : normalized;
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
