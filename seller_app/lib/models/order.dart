import 'dart:convert';

enum OrderStatus { pending, processing, shipped, delivered, cancelled }

class Order {
  final String id;
  final String customerName;
  final String customerPhone;
  final String customerAddress;
  final List<OrderItem> items;
  final double totalAmount;
  final OrderStatus status;
  final DateTime createdAt;

  Order({
    required this.id,
    required this.customerName,
    required this.customerPhone,
    required this.customerAddress,
    required this.items,
    required this.totalAmount,
    required this.status,
    required this.createdAt,
  });

  String get statusText {
    switch (status) {
      case OrderStatus.pending:
        return 'Pending';
      case OrderStatus.processing:
        return 'Processing';
      case OrderStatus.shipped:
        return 'Shipped';
      case OrderStatus.delivered:
        return 'Delivered';
      case OrderStatus.cancelled:
        return 'Cancelled';
    }
  }

  Map<String, dynamic> toMap() {
    return {
      'id': id,
      'customer_name': customerName,
      'customer_phone': customerPhone,
      'customer_address': customerAddress,
      'items': items.map((item) => item.toMap()).toList(),
      'total_amount': totalAmount,
      'status': _statusToString(),
      'created_at': createdAt.toIso8601String(),
    };
  }

  factory Order.fromMap(Map<String, dynamic> map) {
    // គាំទ្រទម្រង់ API ពី Laravel (snake_case) និង JSON ធម្មតា (camelCase)
    return Order(
      id: (map['id'] ?? map['_id'] ?? '').toString(),
      customerName: (map['customer_name'] ?? map['customerName'] ?? '')
          .toString(),
      customerPhone: (map['customer_phone'] ?? map['customerPhone'] ?? '')
          .toString(),
      customerAddress: (map['customer_address'] ?? map['customerAddress'] ?? '')
          .toString(),
      items:
          (map['items'] as List<dynamic>?)
              ?.whereType<Map>()
              .map((item) => OrderItem.fromMap(Map<String, dynamic>.from(item)))
              .toList() ??
          [],
      totalAmount: _toDouble(
        map['total_amount'] ??
            map['totalAmount'] ??
            map['grand_total'] ??
            map['GrandTotal'],
      ),
      status: _statusFromString((map['status'] ?? 'pending').toString()),
      createdAt: map['created_at'] != null
          ? DateTime.parse(map['created_at'])
          : map['createdAt'] != null
          ? DateTime.parse(map['createdAt'])
          : DateTime.now(),
    );
  }

  String _statusToString() {
    switch (status) {
      case OrderStatus.pending:
        return 'pending';
      case OrderStatus.processing:
        return 'processing';
      case OrderStatus.shipped:
        return 'shipped';
      case OrderStatus.delivered:
        return 'delivered';
      case OrderStatus.cancelled:
        return 'cancelled';
    }
  }

  static OrderStatus _statusFromString(String status) {
    switch (status.toLowerCase()) {
      case 'pending':
        return OrderStatus.pending;
      case 'processing':
        return OrderStatus.processing;
      case 'shipped':
        return OrderStatus.shipped;
      case 'delivered':
        return OrderStatus.delivered;
      case 'cancelled':
        return OrderStatus.cancelled;
      default:
        return OrderStatus.pending;
    }
  }

  // បម្លែងទៅជា JSON សម្រាប់ផ្ញើទៅ API
  String toJson() => json.encode(toMap());

  factory Order.fromJson(String source) => Order.fromMap(json.decode(source));
}

class OrderItem {
  final String productId;
  final String productName;
  final int quantity;
  final double price;

  OrderItem({
    required this.productId,
    required this.productName,
    required this.quantity,
    required this.price,
  });

  double get total => quantity * price;

  Map<String, dynamic> toMap() {
    return {
      'product_id': productId,
      'product_name': productName,
      'quantity': quantity,
      'price': price,
      'total': total,
    };
  }

  factory OrderItem.fromMap(Map<String, dynamic> map) {
    return OrderItem(
      productId: (map['product_id'] ?? map['productId'] ?? '').toString(),
      productName: (map['product_name'] ?? map['productName'] ?? '').toString(),
      quantity: _toInt(map['quantity'] ?? map['qty']),
      price: _toDouble(map['price'] ?? map['unit_price']),
    );
  }

  String toJson() => json.encode(toMap());

  factory OrderItem.fromJson(String source) =>
      OrderItem.fromMap(json.decode(source));
}

int _toInt(dynamic value) {
  if (value is int) return value;
  if (value is num) return value.toInt();
  return int.tryParse(value?.toString() ?? '') ?? 0;
}

double _toDouble(dynamic value) {
  if (value is double) return value;
  if (value is num) return value.toDouble();
  return double.tryParse(value?.toString() ?? '') ?? 0;
}
