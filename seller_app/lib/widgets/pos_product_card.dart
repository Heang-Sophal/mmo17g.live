import 'package:flutter/material.dart';
import 'package:seller_app/models/product.dart';

class POSProductCard extends StatelessWidget {
  final Product product;
  final int quantity;
  final VoidCallback onTap;
  final int? warehouseStock;

  const POSProductCard({
    super.key,
    required this.product,
    required this.quantity,
    required this.onTap,
    this.warehouseStock,
  });

  @override
  Widget build(BuildContext context) {
    final theme = Theme.of(context);
    final isDark = theme.brightness == Brightness.dark;
    final displayStock = warehouseStock ?? product.stock;
    final isOutOfStock = displayStock <= 0;
    final lowStockThreshold = product.stockAlert > 0 ? product.stockAlert : 5;
    final isLowStock = !isOutOfStock && displayStock <= lowStockThreshold;
    final isInCart = quantity > 0;
    final surfaceColor = isDark ? const Color(0xFF16213E) : Colors.white;
    final borderColor = isDark
        ? Colors.white.withValues(alpha: 0.08)
        : const Color(0xFFE3E7F4);
    final shadowColor = isDark
        ? Colors.black.withValues(alpha: 0.24)
        : const Color(0xFFB7C2E9).withValues(alpha: 0.22);
    final stockColor = isOutOfStock
        ? const Color(0xFFE53935)
        : isLowStock
        ? const Color(0xFFF59E0B)
        : const Color(0xFF4F7BFF);
    final priceColor = isOutOfStock
        ? (isDark ? Colors.white54 : Colors.grey[500]!)
        : const Color(0xFF22A45D);
    final captionColor = isDark
        ? Colors.white.withValues(alpha: 0.72)
        : const Color(0xFF6B7280);
    final highlightLabel = _highlightLabel();

    return Material(
      color: Colors.transparent,
      child: InkWell(
        onTap: isOutOfStock ? null : onTap,
        borderRadius: BorderRadius.circular(24),
        child: Ink(
          decoration: BoxDecoration(
            color: surfaceColor,
            borderRadius: BorderRadius.circular(24),
            border: Border.all(color: borderColor),
            boxShadow: [
              BoxShadow(
                color: shadowColor,
                blurRadius: 20,
                offset: const Offset(0, 10),
              ),
            ],
          ),
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              Expanded(
                child: Stack(
                  children: [
                    Positioned.fill(
                      child: ClipRRect(
                        borderRadius: const BorderRadius.vertical(
                          top: Radius.circular(24),
                        ),
                        child: _buildImage(context, isOutOfStock: isOutOfStock),
                      ),
                    ),
                    if (highlightLabel != null)
                      Positioned(
                        top: 10,
                        left: 10,
                        child: _buildFloatingLabel(
                          label: highlightLabel,
                          color: theme.colorScheme.primary,
                        ),
                      ),
                    if (isInCart)
                      Positioned(
                        top: 10,
                        right: 10,
                        child: Container(
                          padding: const EdgeInsets.symmetric(
                            horizontal: 10,
                            vertical: 6,
                          ),
                          decoration: BoxDecoration(
                            color: theme.colorScheme.primary,
                            borderRadius: BorderRadius.circular(999),
                          ),
                          child: Text(
                            'x$quantity',
                            style: const TextStyle(
                              color: Colors.white,
                              fontSize: 11,
                              fontWeight: FontWeight.w700,
                            ),
                          ),
                        ),
                      ),
                    if (isOutOfStock)
                      Positioned.fill(
                        child: Container(
                          color: Colors.black.withValues(alpha: 0.38),
                          child: Center(
                            child: Container(
                              padding: const EdgeInsets.symmetric(
                                horizontal: 12,
                                vertical: 8,
                              ),
                              decoration: BoxDecoration(
                                color: Colors.white.withValues(alpha: 0.18),
                                borderRadius: BorderRadius.circular(999),
                                border: Border.all(
                                  color: Colors.white.withValues(alpha: 0.18),
                                ),
                              ),
                              child: const Text(
                                'Out of stock',
                                style: TextStyle(
                                  color: Colors.white,
                                  fontSize: 11,
                                  fontWeight: FontWeight.w700,
                                ),
                              ),
                            ),
                          ),
                        ),
                      ),
                  ],
                ),
              ),
              Padding(
                padding: const EdgeInsets.fromLTRB(12, 12, 12, 12),
                child: Column(
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: [
                    if (_categoryLabel() != null) ...[
                      Text(
                        _categoryLabel()!,
                        maxLines: 1,
                        overflow: TextOverflow.ellipsis,
                        style: TextStyle(
                          fontSize: 11,
                          fontWeight: FontWeight.w700,
                          color: captionColor,
                        ),
                      ),
                      const SizedBox(height: 4),
                    ],
                    Text(
                      product.name,
                      maxLines: 2,
                      overflow: TextOverflow.ellipsis,
                      style: TextStyle(
                        fontSize: 14,
                        height: 1.2,
                        fontWeight: FontWeight.w700,
                        color: isOutOfStock
                            ? captionColor
                            : (isDark ? Colors.white : const Color(0xFF111827)),
                      ),
                    ),
                    const SizedBox(height: 10),
                    Row(
                      children: [
                        Expanded(
                          child: Text(
                            '\$${product.price.toStringAsFixed(2)}',
                            maxLines: 1,
                            overflow: TextOverflow.ellipsis,
                            style: TextStyle(
                              fontSize: 18,
                              fontWeight: FontWeight.w800,
                              color: priceColor,
                            ),
                          ),
                        ),
                        const SizedBox(width: 8),
                        _buildStockChip(
                          displayStock: displayStock,
                          stockColor: stockColor,
                          isOutOfStock: isOutOfStock,
                          isLowStock: isLowStock,
                        ),
                      ],
                    ),
                    const SizedBox(height: 10),
                    _buildFooterChip(
                      context,
                      isOutOfStock: isOutOfStock,
                      isInCart: isInCart,
                    ),
                  ],
                ),
              ),
            ],
          ),
        ),
      ),
    );
  }

  Widget _buildImage(BuildContext context, {required bool isOutOfStock}) {
    final theme = Theme.of(context);
    final isDark = theme.brightness == Brightness.dark;
    final imageBackground = isDark
        ? const Color(0xFF1A1A2E)
        : const Color(0xFFF4F5FB);

    if (product.imageUrl.isEmpty) {
      return _buildPlaceholder(context, isOutOfStock: isOutOfStock);
    }

    return DecoratedBox(
      decoration: BoxDecoration(color: imageBackground),
      child: Image.network(
        product.imageUrl,
        fit: BoxFit.cover,
        width: double.infinity,
        height: double.infinity,
        loadingBuilder: (context, child, loadingProgress) {
          if (loadingProgress == null) {
            return child;
          }

          return Center(
            child: SizedBox(
              width: 28,
              height: 28,
              child: CircularProgressIndicator(
                strokeWidth: 2.4,
                color: theme.colorScheme.primary,
                value: loadingProgress.expectedTotalBytes != null
                    ? loadingProgress.cumulativeBytesLoaded /
                          loadingProgress.expectedTotalBytes!
                    : null,
              ),
            ),
          );
        },
        errorBuilder: (context, error, stackTrace) {
          return _buildPlaceholder(context, isOutOfStock: isOutOfStock);
        },
      ),
    );
  }

  Widget _buildPlaceholder(BuildContext context, {required bool isOutOfStock}) {
    final theme = Theme.of(context);
    final isDark = theme.brightness == Brightness.dark;
    final baseColor = isDark
        ? const Color(0xFF1A1A2E)
        : const Color(0xFFF4F5FB);
    final iconColor = isOutOfStock
        ? Colors.grey[500]!
        : theme.colorScheme.primary.withValues(alpha: 0.7);

    return Container(
      color: baseColor,
      child: Center(
        child: Column(
          mainAxisSize: MainAxisSize.min,
          children: [
            Container(
              width: 54,
              height: 54,
              decoration: BoxDecoration(
                color: Colors.white.withValues(alpha: isDark ? 0.08 : 0.75),
                shape: BoxShape.circle,
              ),
              child: Icon(Icons.image_outlined, size: 28, color: iconColor),
            ),
            const SizedBox(height: 10),
            Text(
              isOutOfStock ? 'Unavailable' : 'No image',
              style: TextStyle(
                fontSize: 12,
                fontWeight: FontWeight.w600,
                color: isDark ? Colors.white70 : Colors.grey[600],
              ),
            ),
          ],
        ),
      ),
    );
  }

  Widget _buildFloatingLabel({required String label, required Color color}) {
    return Container(
      constraints: const BoxConstraints(maxWidth: 88),
      padding: const EdgeInsets.symmetric(horizontal: 10, vertical: 6),
      decoration: BoxDecoration(
        color: Colors.white.withValues(alpha: 0.9),
        borderRadius: BorderRadius.circular(999),
      ),
      child: Text(
        label,
        maxLines: 1,
        overflow: TextOverflow.ellipsis,
        style: TextStyle(
          color: color,
          fontSize: 10,
          fontWeight: FontWeight.w700,
        ),
      ),
    );
  }

  Widget _buildStockChip({
    required int displayStock,
    required Color stockColor,
    required bool isOutOfStock,
    required bool isLowStock,
  }) {
    final label = isOutOfStock
        ? 'Out'
        : isLowStock
        ? 'Low $displayStock'
        : '$displayStock';

    return Container(
      padding: const EdgeInsets.symmetric(horizontal: 10, vertical: 6),
      decoration: BoxDecoration(
        color: stockColor.withValues(alpha: 0.12),
        borderRadius: BorderRadius.circular(999),
      ),
      child: Row(
        mainAxisSize: MainAxisSize.min,
        children: [
          Icon(
            isOutOfStock ? Icons.block : Icons.inventory_2_outlined,
            size: 14,
            color: stockColor,
          ),
          const SizedBox(width: 4),
          Text(
            label,
            style: TextStyle(
              fontSize: 11,
              fontWeight: FontWeight.w700,
              color: stockColor,
            ),
          ),
        ],
      ),
    );
  }

  Widget _buildFooterChip(
    BuildContext context, {
    required bool isOutOfStock,
    required bool isInCart,
  }) {
    final theme = Theme.of(context);

    final backgroundColor = isOutOfStock
        ? Colors.grey.withValues(alpha: 0.12)
        : isInCart
        ? theme.colorScheme.primary.withValues(alpha: 0.12)
        : theme.colorScheme.primary.withValues(alpha: 0.08);
    final foregroundColor = isOutOfStock
        ? Colors.grey[600]!
        : theme.colorScheme.primary;
    final icon = isOutOfStock
        ? Icons.remove_shopping_cart_outlined
        : isInCart
        ? Icons.shopping_bag_rounded
        : Icons.add_shopping_cart_rounded;
    final label = isOutOfStock
        ? 'Unavailable'
        : isInCart
        ? '$quantity in cart'
        : 'Tap to add';

    return Container(
      width: double.infinity,
      padding: const EdgeInsets.symmetric(horizontal: 12, vertical: 10),
      decoration: BoxDecoration(
        color: backgroundColor,
        borderRadius: BorderRadius.circular(16),
        border: Border.all(color: foregroundColor.withValues(alpha: 0.18)),
      ),
      child: Row(
        mainAxisAlignment: MainAxisAlignment.center,
        children: [
          Icon(icon, size: 16, color: foregroundColor),
          const SizedBox(width: 6),
          Flexible(
            child: Text(
              label,
              maxLines: 1,
              overflow: TextOverflow.ellipsis,
              style: TextStyle(
                fontSize: 11,
                fontWeight: FontWeight.w700,
                color: foregroundColor,
              ),
            ),
          ),
        ],
      ),
    );
  }

  String? _highlightLabel() {
    final categoryName = _categoryLabel();
    if (categoryName != null) {
      return categoryName;
    }
    if (product.code.isNotEmpty) {
      return product.code;
    }
    return null;
  }

  String? _categoryLabel() {
    final categoryName = product.categoryName.trim();
    if (categoryName.isEmpty || categoryName == 'Uncategorized') {
      return null;
    }
    return categoryName;
  }
}
