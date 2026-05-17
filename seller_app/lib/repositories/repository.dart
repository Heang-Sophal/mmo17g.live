import '../models/product.dart';
import '../models/order.dart';
import '../services/api_service.dart';

class ProductRepository {
  final ApiService _apiService;

  ProductRepository({ApiService? apiService})
    : _apiService = apiService ?? ApiService();

  // ទាញទិន្នន័យផលិតផលទាំងអស់ពី API
  Future<List<Product>> getAllProducts({
    String? warehouseId,
    bool forceRefresh = false,
    void Function(List<Product> fresh)? onRefresh,
  }) async {
    return await _apiService.getProducts(
      warehouseId: warehouseId,
      forceRefresh: forceRefresh,
      onRefresh: onRefresh,
    );
  }

  // ទាញទិន្នន័យផលិតផលតាមប្រភេទ
  Future<List<Product>> getProductsByCategory(String category) async {
    final products = await _apiService.getProducts();
    if (category == 'All') {
      return products;
    }
    return products.where((p) => p.categoryName == category).toList();
  }

  // ស្វែងរកផលិតផល
  Future<List<Product>> searchProducts(String query) async {
    final products = await _apiService.getProducts();
    if (query.isEmpty) {
      return products;
    }
    return products
        .where(
          (p) =>
              p.name.toLowerCase().contains(query.toLowerCase()) ||
              p.code.toLowerCase().contains(query.toLowerCase()) ||
              p.description.toLowerCase().contains(query.toLowerCase()),
        )
        .toList();
  }
}

class OrderRepository {
  final ApiService _apiService;

  OrderRepository({ApiService? apiService})
    : _apiService = apiService ?? ApiService();

  // ទាញទិន្នន័យការកុម្ម៉ង់ទាំងអស់ពី API
  Future<List<Order>> getAllOrders() async {
    return await _apiService.getOrders();
  }

  // បង្កើតការកុម្ម៉ង់ថ្មី
  Future<Order> createOrder(Map<String, dynamic> orderData) async {
    return await _apiService.createOrder(orderData);
  }

  // ទាញទិន្នន័យស្ថិតិលក់
  Future<Map<String, dynamic>> getSalesStats() async {
    return await _apiService.getSalesStats();
  }
}
