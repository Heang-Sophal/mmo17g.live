import 'dart:convert';
import 'dart:io';
import 'package:http/http.dart' as http;
import '../config/api_config.dart';
import '../models/product.dart';
import '../models/order.dart';

class ApiService {
  final http.Client _client;
  String? _token;

  ApiService({http.Client? client}) : _client = client ?? http.Client();

  /// Set authentication token
  void setToken(String? token) {
    _token = token;
  }

  /// Get headers with authorization token
  Map<String, String> _getHeaders() {
    final headers = {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    };
    if (_token != null && _token!.isNotEmpty) {
      headers['Authorization'] = 'Bearer $_token';
    }
    return headers;
  }

  /// ទាញទិន្នន័យផលិតផលទាំងអស់
  /// GET /api/seller/products?warehouse_id={warehouseId}
  Future<List<Product>> getProducts({String? warehouseId}) async {
    try {
      // បង្កើត URL ជាមួយ query parameter
      Uri uri = Uri.parse('${ApiConfig.baseUrl}${ApiConfig.products}');
      if (warehouseId != null && warehouseId.isNotEmpty) {
        uri = uri.replace(queryParameters: {'warehouse_id': warehouseId});
      }

      final response = await _client
          .get(uri)
          .timeout(const Duration(seconds: ApiConfig.timeoutSeconds));

      if (response.statusCode == 200) {
        final data = json.decode(response.body);
        if (data['success'] == true) {
          final List<dynamic> products = data['data'];
          return products.map((item) => Product.fromMap(item)).toList();
        } else {
          throw ApiException(
            data['message'] ?? 'Failed to load products',
            response.statusCode,
          );
        }
      } else {
        throw ApiException(
          'Failed to load products: ${response.statusCode}',
          response.statusCode,
        );
      }
    } catch (e) {
      if (e is ApiException) rethrow;
      throw ApiException('Network error: ${e.toString()}', 0);
    }
  }

  /// ទាញទិន្នន័យផលិតផលតាម ID
  /// GET /api/products/{id}
  Future<Product> getProduct(String id) async {
    try {
      final response = await _client
          .get(Uri.parse('${ApiConfig.baseUrl}${ApiConfig.products}/$id'))
          .timeout(const Duration(seconds: ApiConfig.timeoutSeconds));

      if (response.statusCode == 200) {
        final data = json.decode(response.body);
        if (data['success'] == true) {
          return Product.fromMap(data['data']);
        } else {
          throw ApiException(
            data['message'] ?? 'Failed to load product',
            response.statusCode,
          );
        }
      } else {
        throw ApiException(
          'Failed to load product: ${response.statusCode}',
          response.statusCode,
        );
      }
    } catch (e) {
      if (e is ApiException) rethrow;
      throw ApiException('Network error: ${e.toString()}', 0);
    }
  }

  /// បង្កើតផលិតផលថ្មី
  /// POST /api/products
  Future<Product> createProduct(Map<String, dynamic> productData) async {
    try {
      final response = await _client
          .post(
            Uri.parse('${ApiConfig.baseUrl}${ApiConfig.products}'),
            headers: {'Content-Type': 'application/json'},
            body: json.encode(productData),
          )
          .timeout(const Duration(seconds: ApiConfig.timeoutSeconds));

      if (response.statusCode == 201) {
        final data = json.decode(response.body);
        if (data['success'] == true) {
          return Product.fromMap(data['data']);
        } else {
          throw ApiException(
            data['message'] ?? 'Failed to create product',
            response.statusCode,
          );
        }
      } else {
        final error = json.decode(response.body);
        throw ApiException(
          error['message'] ?? 'Failed to create product',
          response.statusCode,
        );
      }
    } catch (e) {
      if (e is ApiException) rethrow;
      throw ApiException('Network error: ${e.toString()}', 0);
    }
  }

  /// ទាញទិន្នន័យការកុម្ម៉ង់ទាំងអស់
  /// GET /api/orders
  Future<List<Order>> getOrders({
    String? status,
    int? clientId,
    String? date,
  }) async {
    try {
      Uri uri = Uri.parse('${ApiConfig.baseUrl}${ApiConfig.orders}');

      // Add query parameters
      final params = <String, String>{};
      if (status != null) params['status'] = status;
      if (clientId != null) params['client_id'] = clientId.toString();
      if (date != null) params['date'] = date;

      if (params.isNotEmpty) {
        uri = uri.replace(queryParameters: params);
      }

      final response = await _client
          .get(uri)
          .timeout(const Duration(seconds: ApiConfig.timeoutSeconds));

      if (response.statusCode == 200) {
        final data = json.decode(response.body);
        if (data['success'] == true) {
          final List<dynamic> orders = data['data'];
          return orders.map((item) => Order.fromMap(item)).toList();
        } else {
          throw ApiException(
            data['message'] ?? 'Failed to load orders',
            response.statusCode,
          );
        }
      } else {
        throw ApiException(
          'Failed to load orders: ${response.statusCode}',
          response.statusCode,
        );
      }
    } catch (e) {
      if (e is ApiException) rethrow;
      throw ApiException('Network error: ${e.toString()}', 0);
    }
  }

  /// បង្កើតការកុម្ម៉ង់ថ្មី (POS)
  /// POST /api/orders
  Future<Order> createOrder(Map<String, dynamic> orderData) async {
    try {
      final response = await _client
          .post(
            Uri.parse('${ApiConfig.baseUrl}${ApiConfig.orders}'),
            headers: {'Content-Type': 'application/json'},
            body: json.encode(orderData),
          )
          .timeout(const Duration(seconds: ApiConfig.timeoutSeconds));

      if (response.statusCode == 201) {
        final data = json.decode(response.body);
        if (data['success'] == true) {
          return Order.fromMap(data['data']);
        } else {
          throw ApiException(
            data['message'] ?? 'Failed to create order',
            response.statusCode,
          );
        }
      } else {
        final error = json.decode(response.body);
        throw ApiException(
          error['message'] ?? 'Failed to create order',
          response.statusCode,
        );
      }
    } catch (e) {
      if (e is ApiException) rethrow;
      throw ApiException('Network error: ${e.toString()}', 0);
    }
  }

  /// ទាញទិន្នន័យស្ថិតិលក់
  /// GET /api/sales/stats
  Future<Map<String, dynamic>> getSalesStats() async {
    try {
      final response = await _client
          .get(Uri.parse('${ApiConfig.baseUrl}${ApiConfig.salesStats}'))
          .timeout(const Duration(seconds: ApiConfig.timeoutSeconds));

      if (response.statusCode == 200) {
        final data = json.decode(response.body);
        if (data['success'] == true) {
          return data['data'];
        } else {
          throw ApiException(
            data['message'] ?? 'Failed to load sales stats',
            response.statusCode,
          );
        }
      } else {
        throw ApiException(
          'Failed to load sales stats: ${response.statusCode}',
          response.statusCode,
        );
      }
    } catch (e) {
      if (e is ApiException) rethrow;
      throw ApiException('Network error: ${e.toString()}', 0);
    }
  }

  /// ទាញទិន្នន័យ Dashboard
  /// GET /api/dashboard/seller
  Future<Map<String, dynamic>> getDashboardData() async {
    try {
      final response = await _client
          .get(Uri.parse('${ApiConfig.baseUrl}${ApiConfig.dashboard}'))
          .timeout(const Duration(seconds: ApiConfig.timeoutSeconds));

      if (response.statusCode == 200) {
        final data = json.decode(response.body);
        if (data['success'] == true) {
          return data['data'];
        } else {
          throw ApiException(
            data['message'] ?? 'Failed to load dashboard data',
            response.statusCode,
          );
        }
      } else {
        throw ApiException(
          'Failed to load dashboard data: ${response.statusCode}',
          response.statusCode,
        );
      }
    } catch (e) {
      if (e is ApiException) rethrow;
      throw ApiException('Network error: ${e.toString()}', 0);
    }
  }

  /// ទាញទិន្នន័យប្រភេទផលិតផល
  /// GET /api/seller/categories
  Future<List<Map<String, dynamic>>> getCategoriesList() async {
    try {
      final response = await _client
          .get(Uri.parse('${ApiConfig.baseUrl}${ApiConfig.categories}'))
          .timeout(const Duration(seconds: ApiConfig.timeoutSeconds));

      if (response.statusCode == 200) {
        final data = json.decode(response.body);
        if (data['success'] == true) {
          final List<dynamic> categories = data['data'];
          return categories
              .map(
                (item) => {
                  'id': item['id']?.toString() ?? '',
                  'name': item['name'] ?? 'Unknown',
                },
              )
              .toList();
        } else {
          throw ApiException(
            data['message'] ?? 'Failed to load categories',
            response.statusCode,
          );
        }
      } else {
        throw ApiException(
          'Failed to load categories: ${response.statusCode}',
          response.statusCode,
        );
      }
    } catch (e) {
      if (e is ApiException) rethrow;
      throw ApiException('Network error: ${e.toString()}', 0);
    }
  }

  /// ទាញទិន្នន័យឃ្លាំង
  /// GET /api/seller/warehouses
  Future<List<Map<String, dynamic>>> getWarehouses() async {
    try {
      final response = await _client
          .get(Uri.parse('${ApiConfig.baseUrl}${ApiConfig.warehouses}'))
          .timeout(const Duration(seconds: ApiConfig.timeoutSeconds));

      if (response.statusCode == 200) {
        final data = json.decode(response.body);
        if (data['success'] == true) {
          final List<dynamic> warehouses = data['data'];
          return warehouses
              .map(
                (item) => {
                  'id': item['id']?.toString() ?? '',
                  'name': item['name'] ?? 'Unknown',
                },
              )
              .toList();
        } else {
          throw ApiException(
            data['message'] ?? 'Failed to load warehouses',
            response.statusCode,
          );
        }
      } else {
        throw ApiException(
          'Failed to load warehouses: ${response.statusCode}',
          response.statusCode,
        );
      }
    } catch (e) {
      if (e is ApiException) rethrow;
      throw ApiException('Network error: ${e.toString()}', 0);
    }
  }

  /// ទាញទិន្នន័យ Profile
  /// GET /api/profile
  Future<Map<String, dynamic>> getProfile(String? token) async {
    try {
      final headers = {'Content-Type': 'application/json'};
      if (token != null && token.isNotEmpty) {
        headers['Authorization'] = 'Bearer $token';
      }

      final response = await _client
          .get(Uri.parse('${ApiConfig.baseUrl}/profile'), headers: headers)
          .timeout(const Duration(seconds: ApiConfig.timeoutSeconds));

      if (response.statusCode == 200) {
        final data = json.decode(response.body);
        if (data['success'] == true) {
          return data['data'];
        } else {
          throw ApiException(
            data['message'] ?? 'Failed to load profile',
            response.statusCode,
          );
        }
      } else {
        throw ApiException(
          'Failed to load profile: ${response.statusCode}',
          response.statusCode,
        );
      }
    } catch (e) {
      if (e is ApiException) rethrow;
      throw ApiException('Network error: ${e.toString()}', 0);
    }
  }

  /// កែប្រែ Profile
  /// PUT /api/profile
  Future<Map<String, dynamic>> updateProfile(
    Map<String, dynamic> profileData,
  ) async {
    try {
      final response = await _client
          .put(
            Uri.parse('${ApiConfig.baseUrl}/profile'),
            headers: _getHeaders(),
            body: json.encode(profileData),
          )
          .timeout(const Duration(seconds: ApiConfig.timeoutSeconds));

      final data = json.decode(response.body);

      if (response.statusCode == 200 && data['success'] == true) {
        return data;
      } else if (response.statusCode == 429) {
        // Edit limit reached
        throw ApiException(
          'Edit limit reached: ${data['message'] ?? 'Maximum 3 edits per year'}',
          429,
        );
      } else if (response.statusCode == 422) {
        // Validation error
        throw ApiException(
          'Validation error: ${data['message'] ?? 'Invalid data'}',
          422,
        );
      } else {
        throw ApiException(
          data['message'] ?? 'Failed to update profile',
          response.statusCode,
        );
      }
    } catch (e) {
      if (e is ApiException) rethrow;
      throw ApiException('Network error: ${e.toString()}', 0);
    }
  }

  /// កែប្រែ Password
  /// POST /api/profile/change-password
  Future<Map<String, dynamic>> changePassword({
    required String currentPassword,
    required String newPassword,
    required String confirmPassword,
  }) async {
    try {
      final response = await _client
          .post(
            Uri.parse('${ApiConfig.baseUrl}/profile/change-password'),
            headers: _getHeaders(),
            body: json.encode({
              'current_password': currentPassword,
              'new_password': newPassword,
              'new_password_confirmation': confirmPassword,
            }),
          )
          .timeout(const Duration(seconds: ApiConfig.timeoutSeconds));

      final data = json.decode(response.body);

      if (response.statusCode == 200 && data['success'] == true) {
        return data;
      } else if (response.statusCode == 422) {
        // Validation error
        throw ApiException(
          'Validation error: ${data['message'] ?? data['errors']?.toString() ?? 'Invalid data'}',
          422,
        );
      } else {
        throw ApiException(
          data['message'] ?? 'Failed to update password',
          response.statusCode,
        );
      }
    } catch (e) {
      if (e is ApiException) rethrow;
      throw ApiException('Network error: ${e.toString()}', 0);
    }
  }

  /// ទាញទិន្នន័យ Edit History
  /// GET /api/profile/edit-history
  Future<List<dynamic>> getProfileEditHistory() async {
    try {
      final response = await _client
          .get(Uri.parse('${ApiConfig.baseUrl}/profile/edit-history'))
          .timeout(const Duration(seconds: ApiConfig.timeoutSeconds));

      if (response.statusCode == 200) {
        final data = json.decode(response.body);
        if (data['success'] == true) {
          return data['data'] as List<dynamic>;
        } else {
          return [];
        }
      } else {
        return [];
      }
    } catch (e) {
      return [];
    }
  }

  /// Upload Profile Photo
  /// POST /api/profile/upload-photo
  Future<Map<String, dynamic>> uploadProfilePhoto(
    File photo,
    String token,
  ) async {
    try {
      // បង្កើត Multipart Request
      final request = http.MultipartRequest(
        'POST',
        Uri.parse('${ApiConfig.baseUrl}/profile/upload-photo'),
      );

      // បន្ថែម Token
      request.headers['Authorization'] = 'Bearer $token';

      // បន្ថែម Photo File
      request.files.add(await http.MultipartFile.fromPath('photo', photo.path));

      // ផ្ញើ Request
      final streamedResponse = await request.send().timeout(
        const Duration(seconds: ApiConfig.timeoutSeconds),
      );

      final response = await http.Response.fromStream(streamedResponse);
      final data = json.decode(response.body);

      if (response.statusCode == 200 && data['success'] == true) {
        return data;
      } else {
        throw ApiException(
          data['message'] ?? 'Failed to upload photo',
          response.statusCode,
        );
      }
    } catch (e) {
      if (e is ApiException) rethrow;
      throw ApiException('Upload error: ${e.toString()}', 0);
    }
  }

  /// ស្វែងរកអតិថិជនតាមលេខទូរស័ព្ទ
  /// GET /api/customers?search={phone}  — returns exact-match customer or null
  Future<Map<String, dynamic>?> lookupCustomerByPhone(String phone) async {
    try {
      final uri = Uri.parse('${ApiConfig.baseUrl}/customers').replace(
        queryParameters: {'search': phone},
      );
      final response = await _client
          .get(uri, headers: _getHeaders())
          .timeout(const Duration(seconds: ApiConfig.timeoutSeconds));

      if (response.statusCode == 200) {
        final data = json.decode(response.body);
        final items = data['data'];
        if (items is! List) return null;
        final cleaned = phone.replaceAll(RegExp(r'[\s\-\(\)]'), '');
        for (final item in items) {
          final itemPhone = (item['phone'] ?? '')
              .toString()
              .replaceAll(RegExp(r'[\s\-\(\)]'), '');
          if (itemPhone == cleaned) {
            return {
              'id': item['id'],
              'name': (item['name'] ?? '').toString(),
              'phone': (item['phone'] ?? '').toString(),
              'address': (item['address'] ?? item['adresse'] ?? '').toString(),
            };
          }
        }
      }
      return null;
    } catch (_) {
      return null;
    }
  }

  void dispose() {
    _client.close();
  }
}

// API Exception
class ApiException implements Exception {
  final String message;
  final int statusCode;

  ApiException(this.message, this.statusCode);

  @override
  String toString() => 'ApiException: $message (Status: $statusCode)';
}
