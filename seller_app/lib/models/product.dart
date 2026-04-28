import 'dart:convert';

class Product {
  final String id;
  final String code;
  final String name;
  final String description;
  final double price;
  final double cost;
  final int stock;
  final int stockAlert;
  final String imageUrl;
  final dynamic category; // Can be String or Map from Laravel API
  final dynamic brand;
  final bool isFeatured;
  final bool hideFromOnlineStore;
  final DateTime createdAt;
  final DateTime updatedAt;

  // Warehouse-specific stock data
  final Map<String, int>? warehouseStocks; // {warehouseId: stock}
  final String? warehouseId; // Current selected warehouse

  Product({
    required this.id,
    this.code = '',
    required this.name,
    this.description = '',
    required this.price,
    this.cost = 0,
    this.stock = 0,
    this.stockAlert = 0,
    this.imageUrl = '',
    this.category,
    this.brand,
    this.isFeatured = false,
    this.hideFromOnlineStore = false,
    required this.createdAt,
    DateTime? updatedAt,
    this.warehouseStocks,
    this.warehouseId,
  }) : updatedAt = updatedAt ?? createdAt;

  String get categoryName {
    if (category == null) return 'Uncategorized';
    if (category is String) return category;
    if (category is Map) {
      final categoryMap = category as Map<String, dynamic>;
      return categoryMap['name']?.toString() ?? 'Uncategorized';
    }
    return 'Uncategorized';
  }

  String get brandName {
    if (brand == null) return '';
    if (brand is String) return brand;
    if (brand is Map) {
      final brandMap = brand as Map<String, dynamic>;
      return brandMap['name']?.toString() ?? '';
    }
    return '';
  }

  bool get isLowStock => stock <= stockAlert;
  bool get isOutOfStock => stock == 0;

  Map<String, dynamic> toMap() {
    return {
      'id': id,
      'code': code,
      'name': name,
      'description': description,
      'price': price,
      'cost': cost,
      'stock': stock,
      'stock_alert': stockAlert,
      'image': imageUrl,
      'image_url': imageUrl,
      'category': category,
      'brand': brand,
      'is_featured': isFeatured,
      'hide_from_online_store': hideFromOnlineStore,
      'created_at': createdAt.toIso8601String(),
      'updated_at': updatedAt.toIso8601String(),
    };
  }

  factory Product.fromMap(Map<String, dynamic> map) {
    // គាំទ្រទមរង់ API ពី Laravel
    return Product(
      id: map['id']?.toString() ?? map['_id']?.toString() ?? '',
      code: map['code'] ?? '',
      name: map['name'] ?? '',
      description: map['description'] ?? map['note'] ?? '',
      price: (map['price'] ?? map['unit_price'] ?? 0).toDouble(),
      cost: (map['cost'] ?? 0).toDouble(),
      stock: map['stock'] ?? 0,
      stockAlert: (map['stock_alert'] ?? 0).toInt(),
      imageUrl:
          map['image_url'] ??
          map['imageUrl'] ??
          (map['image'] != null
              ? 'http://10.0.2.2:8000/images/products/${map['image']}'
              : ''),
      category: map['category'] ?? map['category_id'],
      brand: map['brand'] ?? map['brand_id'],
      isFeatured: map['is_featured'] == true || map['is_featured'] == 1,
      hideFromOnlineStore:
          map['hide_from_online_store'] == true ||
          map['hide_from_online_store'] == 1,
      createdAt: _parseDateTime(map['created_at']),
      updatedAt: _parseDateTime(map['updated_at']),
      warehouseId: map['warehouse_id'],
      warehouseStocks: map['warehouse_stocks'] != null
          ? Map<String, int>.from(map['warehouse_stocks'])
          : null,
    );
  }

  static DateTime _parseDateTime(dynamic value) {
    if (value == null) return DateTime.now();
    if (value is DateTime) return value;
    if (value is String) {
      try {
        return DateTime.parse(value);
      } catch (e) {
        return DateTime.now();
      }
    }
    return DateTime.now();
  }

  // បម្លែងទៅជា JSON សម្រាប់ផ្ញើទៅ API
  String toJson() => json.encode(toMap());

  factory Product.fromJson(String source) =>
      Product.fromMap(json.decode(source));
}
