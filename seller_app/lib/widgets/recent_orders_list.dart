import 'package:flutter/material.dart';
import 'package:seller_app/models/models.dart';

class RecentOrdersList extends StatelessWidget {
  const RecentOrdersList({super.key});

  @override
  Widget build(BuildContext context) {
    final orders = _getSampleOrders();

    return Card(
      child: Column(
        children: [
          ...orders.asMap().entries.map((entry) {
            final index = entry.key;
            final order = entry.value;
            return Column(
              children: [
                if (index > 0) const Divider(height: 1),
                _buildOrderTile(context, order),
              ],
            );
          }),
        ],
      ),
    );
  }

  Widget _buildOrderTile(BuildContext context, Order order) {
    return ListTile(
      contentPadding: const EdgeInsets.symmetric(horizontal: 16, vertical: 8),
      leading: Container(
        width: 40,
        height: 40,
        decoration: BoxDecoration(
          color: _getStatusColor(order.status).withValues(alpha: 0.1),
          borderRadius: BorderRadius.circular(8),
        ),
        child: Icon(Icons.receipt_long, color: _getStatusColor(order.status)),
      ),
      title: Text(
        '#${order.id}',
        style: const TextStyle(fontWeight: FontWeight.bold),
      ),
      subtitle: Text(
        order.customerName,
        style: TextStyle(color: Colors.grey[600]),
      ),
      trailing: Column(
        mainAxisAlignment: MainAxisAlignment.center,
        crossAxisAlignment: CrossAxisAlignment.end,
        children: [
          Text(
            '\$${order.totalAmount.toStringAsFixed(2)}',
            style: const TextStyle(fontWeight: FontWeight.bold, fontSize: 16),
          ),
          const SizedBox(height: 4),
          Container(
            padding: const EdgeInsets.symmetric(horizontal: 8, vertical: 2),
            decoration: BoxDecoration(
              color: _getStatusColor(order.status).withValues(alpha: 0.1),
              borderRadius: BorderRadius.circular(12),
            ),
            child: Text(
              order.statusText,
              style: TextStyle(
                fontSize: 10,
                fontWeight: FontWeight.bold,
                color: _getStatusColor(order.status),
              ),
            ),
          ),
        ],
      ),
      onTap: () {
        ScaffoldMessenger.of(
          context,
        ).showSnackBar(SnackBar(content: Text('Order #${order.id} details')));
      },
    );
  }

  Color _getStatusColor(OrderStatus status) {
    switch (status) {
      case OrderStatus.pending:
        return Colors.orange;
      case OrderStatus.processing:
        return Colors.blue;
      case OrderStatus.shipped:
        return Colors.purple;
      case OrderStatus.delivered:
        return Colors.green;
      case OrderStatus.cancelled:
        return Colors.red;
    }
  }

  List<Order> _getSampleOrders() {
    return [
      Order(
        id: 'ORD-001',
        customerName: 'John Doe',
        customerPhone: '+855 12 345 678',
        customerAddress: 'Phnom Penh, Cambodia',
        items: [
          OrderItem(
            productId: '1',
            productName: 'Product A',
            quantity: 2,
            price: 25.00,
          ),
        ],
        totalAmount: 50.00,
        status: OrderStatus.pending,
        createdAt: DateTime.now(),
      ),
      Order(
        id: 'ORD-002',
        customerName: 'Jane Smith',
        customerPhone: '+855 98 765 432',
        customerAddress: 'Siem Reap, Cambodia',
        items: [
          OrderItem(
            productId: '2',
            productName: 'Product B',
            quantity: 1,
            price: 75.00,
          ),
        ],
        totalAmount: 75.00,
        status: OrderStatus.processing,
        createdAt: DateTime.now().subtract(const Duration(hours: 2)),
      ),
      Order(
        id: 'ORD-003',
        customerName: 'David Chan',
        customerPhone: '+855 11 222 333',
        customerAddress: 'Battambang, Cambodia',
        items: [
          OrderItem(
            productId: '3',
            productName: 'Product C',
            quantity: 3,
            price: 15.00,
          ),
        ],
        totalAmount: 45.00,
        status: OrderStatus.delivered,
        createdAt: DateTime.now().subtract(const Duration(days: 1)),
      ),
    ];
  }
}
