class CartItem {
  final String productId;
  final String name;
  final double price;
  int quantity;
  final String imageUrl;

  CartItem({
    required this.productId,
    required this.name,
    required this.price,
    this.quantity = 1,
    required this.imageUrl,
  });

  double get total => price * quantity;

  Map<String, dynamic> toMap() {
    return {
      'productId': productId,
      'name': name,
      'price': price,
      'quantity': quantity,
      'imageUrl': imageUrl,
    };
  }
}
