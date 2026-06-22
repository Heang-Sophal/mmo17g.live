import 'package:flutter/material.dart';
import 'package:flutter/services.dart';
import 'package:provider/provider.dart';
import 'package:seller_app/providers/cart_provider.dart';
import 'package:seller_app/providers/product_provider.dart';
import 'package:seller_app/providers/language_provider.dart';
import 'package:seller_app/models/product.dart';
import 'package:seller_app/models/cart_item.dart';
import 'package:seller_app/widgets/pos_product_card.dart';
import 'package:seller_app/screens/checkout_screen.dart';
import 'package:seller_app/controllers/navigation_bar_controller.dart';
import 'package:seller_app/services/api_service.dart';
import 'package:seller_app/utils/top_notification.dart';

class POSScreen extends StatefulWidget {
  const POSScreen({super.key, this.menuButton});

  final Widget? menuButton;

  @override
  State<POSScreen> createState() => _POSScreenState();
}

class _POSScreenState extends State<POSScreen> {
  String _selectedCategory = 'All';
  String? _selectedWarehouseId; // null = all warehouses
  List<String> _categories = ['All'];
  List<Map<String, dynamic>> _warehouses = [];
  bool _isLoadingWarehouses = false;

  // For resizable cart panel
  double _cartHeight = 290.0;

  // For auto-hide bottom navigation
  final ScrollController _scrollController = ScrollController();
  bool _isProductFiltersVisible = true;

  @override
  void initState() {
    super.initState();
    _initScreen();
  }

  @override
  void dispose() {
    _scrollController.dispose();
    super.dispose();
  }

  bool _handleProductScrollNotification(ScrollNotification notification) {
    if (notification.metrics.axis != Axis.vertical) {
      return false;
    }

    final navController = context.read<NavigationBarController>();
    final currentOffset = notification.metrics.pixels;
    final scrollDelta = notification is ScrollUpdateNotification
        ? (notification.scrollDelta ?? 0)
        : 0;

    if (notification is ScrollUpdateNotification) {
      if (scrollDelta > 8 && currentOffset > 56) {
        navController.hide();
        if (_isProductFiltersVisible) {
          setState(() {
            _isProductFiltersVisible = false;
          });
        }
      } else if (scrollDelta < -8 || currentOffset <= 8) {
        navController.show();
        if (!_isProductFiltersVisible) {
          setState(() {
            _isProductFiltersVisible = true;
          });
        }
      }
    } else if (notification is ScrollEndNotification && currentOffset <= 0) {
      navController.show();
      if (!_isProductFiltersVisible) {
        setState(() {
          _isProductFiltersVisible = true;
        });
      }
    }

    return false;
  }

  Future<void> _initScreen() async {
    await Future.wait([_loadWarehouses(), _loadData()]);
  }

  Future<void> _loadData({bool forceRefresh = false}) async {
    final productProvider = context.read<ProductProvider>();

    // Get selected warehouse ID
    String? warehouseId;
    if (_selectedWarehouseId != null && _warehouses.isNotEmpty) {
      final selectedWarehouse = _warehouses.firstWhere(
        (w) => w['id'] == _selectedWarehouseId,
        orElse: () => {'id': null},
      );
      warehouseId = selectedWarehouse['id'] == 'all'
          ? null
          : selectedWarehouse['id'];
    }

    await productProvider.fetchProducts(
      warehouseId: warehouseId,
      forceRefresh: forceRefresh,
    );

    // ទាញទិន្ននយ categories
    final products = productProvider.products;
    final categorySet = products.map((p) => p.categoryName).toSet();

    if (mounted) {
      setState(() {
        _categories = ['All', ...categorySet.where((c) => c.isNotEmpty)];
      });
    }
  }

  Future<void> _loadWarehouses() async {
    setState(() {
      _isLoadingWarehouses = true;
    });

    try {
      final apiService = ApiService();
      final warehousesList = await apiService.getWarehouses();

      if (mounted) {
        setState(() {
          _warehouses = [
            {'id': 'all', 'name': 'all_warehouses_placeholder'},
            ...warehousesList,
          ];
          _isLoadingWarehouses = false;
        });
      }
    } catch (e) {
      debugPrint('Error loading warehouses: $e');
      if (mounted) {
        setState(() {
          _warehouses = [
            {'id': 'all', 'name': 'all_warehouses_placeholder'},
          ];
          _isLoadingWarehouses = false;
        });
      }
    }
  }

  @override
  Widget build(BuildContext context) {
    final theme = Theme.of(context);
    final isDark = theme.brightness == Brightness.dark;
    final backgroundColor = isDark
        ? const Color(0xFF1A1A2E)
        : const Color(0xFFF7F8FE);
    final textColor = isDark ? Colors.white : Colors.black87;
    final subtitleColor = isDark
        ? Colors.white.withValues(alpha: 0.72)
        : const Color(0xFF6B7280);

    return Consumer3<CartProvider, ProductProvider, LanguageProvider>(
      builder: (context, cart, productProvider, languageProvider, child) {
        // ទាញទិន្ននយពី API
        final products = productProvider.products;
        final filteredProducts = products.where((product) {
          final matchesCategory =
              _selectedCategory == 'All' ||
              product.categoryName == _selectedCategory;
          final matchesWarehouse =
              _selectedWarehouseId == null ||
              _selectedWarehouseId == 'all' ||
              product.warehouseId == _selectedWarehouseId;
          return matchesCategory && matchesWarehouse;
        }).toList();

        return Scaffold(
          backgroundColor: backgroundColor,
          appBar: AppBar(
            centerTitle: true,
            toolbarHeight: 86,
            elevation: 0,
            scrolledUnderElevation: 0,
            surfaceTintColor: Colors.transparent,
            leading: widget.menuButton,
            leadingWidth: widget.menuButton != null ? 96 : null,
            title: Column(
              mainAxisSize: MainAxisSize.min,
              children: [
                Text(
                  languageProvider.t('pos'),
                  style: TextStyle(
                    color: textColor,
                    fontSize: 24,
                    fontWeight: FontWeight.w700,
                  ),
                ),
                const SizedBox(height: 4),
                Text(
                  _selectedWarehouseId == null
                      ? languageProvider.t('all_warehouses')
                      : _currentWarehouseName(languageProvider),
                  style: TextStyle(
                    color: subtitleColor,
                    fontSize: 12,
                    fontWeight: FontWeight.w500,
                  ),
                ),
              ],
            ),
            backgroundColor: backgroundColor,
            actions: [
              _buildAppBarAction(
                icon: productProvider.isLoading ? null : Icons.refresh,
                busy: productProvider.isLoading,
                onTap: productProvider.isLoading
                    ? null
                    : () => _loadData(forceRefresh: true),
                tooltip: languageProvider.t('nav_home'),
              ),
              const SizedBox(width: 8),
              _buildAppBarAction(
                icon: Icons.history,
                onTap: () {
                  showTopNotification(
                    context,
                    languageProvider.t('nav_orders'),
                  );
                },
                tooltip: languageProvider.t('nav_orders'),
              ),
              const SizedBox(width: 14),
            ],
          ),
          body: Container(
            decoration: BoxDecoration(
              gradient: LinearGradient(
                colors: [
                  backgroundColor,
                  isDark ? const Color(0xFF121A31) : const Color(0xFFEFF2FF),
                ],
                begin: Alignment.topCenter,
                end: Alignment.bottomCenter,
              ),
            ),
            child: Column(
              children: [
                // ផ្នែកខាងលើ - ផលិតផល
                Expanded(
                  child: _buildProductsSection(
                    filteredProducts,
                    productProvider,
                    cart,
                  ),
                ),
                // ផ្នែកខាងក្រោម - Current Order (Resizable)
                SizedBox(height: _cartHeight, child: _buildCartPanel(cart)),
              ],
            ),
          ),
        );
      },
    );
  }

  Widget _buildProductsSection(
    List<Product> filteredProducts,
    ProductProvider productProvider,
    CartProvider cart,
  ) {
    final theme = Theme.of(context);
    final isDark = theme.brightness == Brightness.dark;
    final inputFillColor = isDark ? const Color(0xFF16213E) : Colors.white;
    final textColor = isDark ? Colors.white : Colors.black87;
    final borderColor = isDark
        ? Colors.white.withValues(alpha: 0.08)
        : const Color(0xFFE3E7F4);
    final languageProvider = context.read<LanguageProvider>();
    final width = MediaQuery.of(context).size.width;
    final crossAxisCount = width >= 1024
        ? 4
        : width >= 720
        ? 3
        : 2;
    final childAspectRatio = width >= 1024
        ? 0.84
        : width >= 720
        ? 0.8
        : 0.7;

    return Column(
      children: [
        ClipRect(
          child: AnimatedAlign(
            duration: const Duration(milliseconds: 320),
            curve: Curves.easeInOutCubicEmphasized,
            alignment: Alignment.topCenter,
            heightFactor: _isProductFiltersVisible ? 1 : 0,
            child: AnimatedSlide(
              duration: const Duration(milliseconds: 320),
              curve: Curves.easeInOutCubicEmphasized,
              offset: _isProductFiltersVisible
                  ? Offset.zero
                  : const Offset(0, -0.04),
              child: AnimatedOpacity(
                duration: const Duration(milliseconds: 220),
                curve: Curves.easeOutCubic,
                opacity: _isProductFiltersVisible ? 1 : 0,
                child: Padding(
                  padding: const EdgeInsets.fromLTRB(16, 16, 16, 10),
                  child: Container(
                    padding: const EdgeInsets.all(16),
                    decoration: BoxDecoration(
                      color: inputFillColor.withValues(
                        alpha: isDark ? 0.96 : 0.94,
                      ),
                      borderRadius: BorderRadius.circular(24),
                      border: Border.all(color: borderColor),
                      boxShadow: [
                        BoxShadow(
                          color: isDark
                              ? Colors.black.withValues(alpha: 0.18)
                              : const Color(0xFFB7C2E9).withValues(alpha: 0.18),
                          blurRadius: 24,
                          offset: const Offset(0, 12),
                        ),
                      ],
                    ),
                    child: Column(
                      children: [
                        Row(
                          children: [
                            Expanded(
                              child: _isLoadingWarehouses
                                  ? Container(
                                      height: 56,
                                      decoration: BoxDecoration(
                                        color: theme.colorScheme.primary
                                            .withValues(alpha: 0.06),
                                        borderRadius: BorderRadius.circular(18),
                                      ),
                                      child: Center(
                                        child: CircularProgressIndicator(
                                          strokeWidth: 2,
                                          color: theme.colorScheme.primary,
                                        ),
                                      ),
                                    )
                                  : _buildFilterDropdownShell(
                                      icon: Icons.warehouse_rounded,
                                      child: DropdownButtonHideUnderline(
                                        child: DropdownButton<String>(
                                          dropdownColor: isDark
                                              ? const Color(0xFF16213E)
                                              : Colors.white,
                                          value: _selectedWarehouseId ?? 'all',
                                          isExpanded: true,
                                          borderRadius: BorderRadius.circular(
                                            18,
                                          ),
                                          icon: const SizedBox.shrink(),
                                          style: TextStyle(
                                            color: textColor,
                                            fontSize: 14,
                                            fontWeight: FontWeight.w600,
                                          ),
                                          items: _warehouses.map((warehouse) {
                                            final isAll =
                                                warehouse['id'] == 'all';
                                            return DropdownMenuItem(
                                              value: warehouse['id'] as String,
                                              child: Text(
                                                isAll
                                                    ? languageProvider.t(
                                                        'all_warehouses',
                                                      )
                                                    : warehouse['name']
                                                          as String,
                                                overflow: TextOverflow.ellipsis,
                                              ),
                                            );
                                          }).toList(),
                                          onChanged: (value) {
                                            cart.clear();
                                            setState(() {
                                              _selectedWarehouseId =
                                                  value == 'all' ? null : value;
                                            });
                                            _loadData();
                                            final wh = _warehouses.firstWhere(
                                              (w) => w['id'] == value,
                                              orElse: () => {
                                                'name': value ?? '',
                                              },
                                            );
                                            showTopNotification(
                                              context,
                                              '${languageProvider.t('cart_cleared')} - ${wh['name']}',
                                              duration: const Duration(
                                                seconds: 2,
                                              ),
                                              type: TopNotificationType.info,
                                            );
                                          },
                                        ),
                                      ),
                                    ),
                            ),
                            const SizedBox(width: 12),
                            Expanded(
                              child: _buildFilterDropdownShell(
                                icon: Icons.category_rounded,
                                child: DropdownButtonHideUnderline(
                                  child: DropdownButton<String>(
                                    dropdownColor: isDark
                                        ? const Color(0xFF16213E)
                                        : Colors.white,
                                    value: _selectedCategory,
                                    isExpanded: true,
                                    borderRadius: BorderRadius.circular(18),
                                    icon: const SizedBox.shrink(),
                                    style: TextStyle(
                                      color: textColor,
                                      fontSize: 14,
                                      fontWeight: FontWeight.w600,
                                    ),
                                    items: _categories.map((category) {
                                      final isAll = category == 'All';
                                      return DropdownMenuItem(
                                        value: category,
                                        child: Text(
                                          isAll
                                              ? languageProvider.t('all')
                                              : category,
                                          overflow: TextOverflow.ellipsis,
                                        ),
                                      );
                                    }).toList(),
                                    onChanged: (value) {
                                      setState(() {
                                        _selectedCategory = value!;
                                      });
                                    },
                                  ),
                                ),
                              ),
                            ),
                          ],
                        ),
                      ],
                    ),
                  ),
                ),
              ),
            ),
          ),
        ),
        // Products Grid
        Expanded(
          child: productProvider.isLoading && productProvider.products.isEmpty
              ? const Center(child: CircularProgressIndicator())
              : filteredProducts.isEmpty
              ? _buildEmptyState()
              : NotificationListener<ScrollNotification>(
                  onNotification: _handleProductScrollNotification,
                  child: GridView.builder(
                    controller: _scrollController,
                    physics: const BouncingScrollPhysics(),
                    padding: const EdgeInsets.fromLTRB(16, 2, 16, 20),
                    gridDelegate: SliverGridDelegateWithFixedCrossAxisCount(
                      crossAxisCount: crossAxisCount,
                      mainAxisSpacing: 16,
                      crossAxisSpacing: 14,
                      childAspectRatio: childAspectRatio,
                    ),
                    itemCount: filteredProducts.length,
                    itemBuilder: (context, index) {
                      return POSProductCard(
                        product: filteredProducts[index],
                        quantity: cart.getProductQuantity(
                          filteredProducts[index].id,
                        ),
                        warehouseStock: filteredProducts[index].stock,
                        onTap: () {
                          cart.addItem(
                            CartItem(
                              productId: filteredProducts[index].id,
                              name: filteredProducts[index].name,
                              price: filteredProducts[index].price,
                              imageUrl: filteredProducts[index].imageUrl,
                            ),
                          );
                          HapticFeedback.lightImpact();
                          showTopNotification(
                            context,
                            '${filteredProducts[index].name} ${languageProvider.t('add_to_cart')}',
                            duration: const Duration(seconds: 1),
                            type: TopNotificationType.success,
                          );
                        },
                      );
                    },
                  ),
                ),
        ),
      ],
    );
  }

  String _currentWarehouseName(LanguageProvider languageProvider) {
    if (_selectedWarehouseId == null || _selectedWarehouseId == 'all') {
      return languageProvider.t('all_warehouses');
    }

    final selectedWarehouse = _warehouses.firstWhere(
      (warehouse) => warehouse['id'] == _selectedWarehouseId,
      orElse: () => {'name': languageProvider.t('all_warehouses')},
    );

    return selectedWarehouse['name'] as String;
  }

  Widget _buildAppBarAction({
    IconData? icon,
    required VoidCallback? onTap,
    required String tooltip,
    bool busy = false,
  }) {
    final theme = Theme.of(context);
    final isDark = theme.brightness == Brightness.dark;

    return Tooltip(
      message: tooltip,
      child: Padding(
        padding: const EdgeInsets.only(top: 10, bottom: 10),
        child: Material(
          color: isDark
              ? Colors.white.withValues(alpha: 0.05)
              : Colors.white.withValues(alpha: 0.78),
          borderRadius: BorderRadius.circular(16),
          child: InkWell(
            borderRadius: BorderRadius.circular(16),
            onTap: onTap,
            child: Container(
              width: 46,
              height: 46,
              decoration: BoxDecoration(
                borderRadius: BorderRadius.circular(16),
                border: Border.all(
                  color: isDark
                      ? Colors.white.withValues(alpha: 0.08)
                      : const Color(0xFFE3E7F4),
                ),
              ),
              child: Center(
                child: busy
                    ? SizedBox(
                        width: 20,
                        height: 20,
                        child: CircularProgressIndicator(
                          strokeWidth: 2,
                          color: theme.colorScheme.primary,
                        ),
                      )
                    : Icon(icon, color: theme.colorScheme.primary, size: 24),
              ),
            ),
          ),
        ),
      ),
    );
  }

  Widget _buildFilterDropdownShell({
    required IconData icon,
    required Widget child,
  }) {
    final theme = Theme.of(context);
    final isDark = theme.brightness == Brightness.dark;

    return Container(
      height: 56,
      padding: const EdgeInsets.symmetric(horizontal: 14),
      decoration: BoxDecoration(
        color: isDark
            ? Colors.white.withValues(alpha: 0.04)
            : const Color(0xFFF8F9FF),
        borderRadius: BorderRadius.circular(18),
        border: Border.all(
          color: theme.colorScheme.primary.withValues(alpha: 0.16),
        ),
      ),
      child: Row(
        children: [
          Icon(icon, color: theme.colorScheme.primary, size: 20),
          const SizedBox(width: 10),
          Expanded(child: child),
          Icon(
            Icons.keyboard_arrow_down_rounded,
            color: theme.colorScheme.primary,
          ),
        ],
      ),
    );
  }

  Widget _buildCartPanel(CartProvider cart) {
    final theme = Theme.of(context);
    final isDark = theme.brightness == Brightness.dark;
    final cardColor = isDark ? const Color(0xFF16213E) : Colors.white;
    final textColor = isDark ? Colors.white : Colors.black87;
    final subtitleColor = isDark
        ? Colors.white.withValues(alpha: 0.72)
        : const Color(0xFF6B7280);
    final borderColor = isDark
        ? Colors.white.withValues(alpha: 0.08)
        : const Color(0xFFE3E7F4);
    final itemCardColor = isDark ? const Color(0xFF1A1A2E) : Colors.white;
    final languageProvider = context.read<LanguageProvider>();

    return Container(
      decoration: BoxDecoration(
        color: cardColor,
        borderRadius: const BorderRadius.vertical(top: Radius.circular(28)),
        border: Border(top: BorderSide(color: borderColor)),
        boxShadow: [
          BoxShadow(
            color: isDark
                ? Colors.black.withValues(alpha: 0.28)
                : const Color(0xFFB4BCD6).withValues(alpha: 0.25),
            blurRadius: 26,
            offset: const Offset(0, -8),
          ),
        ],
      ),
      child: Column(
        children: [
          // Drag Handle
          GestureDetector(
            onVerticalDragUpdate: (details) {
              setState(() {
                _cartHeight = (_cartHeight - details.delta.dy).clamp(
                  170.0,
                  500.0,
                );
              });
            },
            child: Container(
              height: 28,
              decoration: BoxDecoration(
                color: cardColor,
                borderRadius: const BorderRadius.vertical(
                  top: Radius.circular(28),
                ),
              ),
              child: Center(
                child: Container(
                  width: 52,
                  height: 5,
                  decoration: BoxDecoration(
                    color: isDark
                        ? Colors.white.withValues(alpha: 0.24)
                        : Colors.grey[400],
                    borderRadius: BorderRadius.circular(999),
                  ),
                ),
              ),
            ),
          ),

          // Cart Header
          Padding(
            padding: const EdgeInsets.fromLTRB(16, 4, 16, 12),
            child: Container(
              padding: const EdgeInsets.symmetric(horizontal: 16, vertical: 14),
              decoration: BoxDecoration(
                gradient: const LinearGradient(
                  colors: [Color(0xFF6C63FF), Color(0xFF4F46E5)],
                  begin: Alignment.topLeft,
                  end: Alignment.bottomRight,
                ),
                borderRadius: BorderRadius.circular(22),
                boxShadow: [
                  BoxShadow(
                    color: const Color(0xFF6C63FF).withValues(alpha: 0.22),
                    blurRadius: 22,
                    offset: const Offset(0, 10),
                  ),
                ],
              ),
              child: Row(
                children: [
                  Container(
                    width: 42,
                    height: 42,
                    decoration: BoxDecoration(
                      color: Colors.white.withValues(alpha: 0.18),
                      shape: BoxShape.circle,
                    ),
                    child: const Icon(
                      Icons.shopping_cart_rounded,
                      color: Colors.white,
                      size: 22,
                    ),
                  ),
                  const SizedBox(width: 12),
                  Expanded(
                    child: Column(
                      crossAxisAlignment: CrossAxisAlignment.start,
                      children: [
                        Text(
                          languageProvider.t('cart'),
                          style: const TextStyle(
                            fontSize: 15,
                            fontWeight: FontWeight.w700,
                            color: Colors.white,
                          ),
                        ),
                        const SizedBox(height: 2),
                        Text(
                          cart.isEmpty
                              ? 'Tap products to start a new order'
                              : '${cart.itemCount} items ready to checkout',
                          style: TextStyle(
                            fontSize: 11,
                            color: Colors.white.withValues(alpha: 0.82),
                            fontWeight: FontWeight.w500,
                          ),
                        ),
                      ],
                    ),
                  ),
                  Column(
                    crossAxisAlignment: CrossAxisAlignment.end,
                    children: [
                      Text(
                        languageProvider.t('total'),
                        style: TextStyle(
                          fontSize: 11,
                          color: Colors.white.withValues(alpha: 0.78),
                          fontWeight: FontWeight.w500,
                        ),
                      ),
                      const SizedBox(height: 2),
                      Text(
                        '\$${cart.total.toStringAsFixed(2)}',
                        style: const TextStyle(
                          fontSize: 18,
                          fontWeight: FontWeight.w800,
                          color: Colors.white,
                        ),
                      ),
                    ],
                  ),
                ],
              ),
            ),
          ),
          // Cart Items
          Expanded(
            child: cart.isEmpty
                ? LayoutBuilder(
                    builder: (context, constraints) {
                      final compact = constraints.maxHeight < 180;
                      final ultraCompact = constraints.maxHeight < 145;
                      final horizontalPadding = ultraCompact ? 16.0 : 22.0;
                      final verticalPadding = ultraCompact ? 6.0 : 10.0;
                      final cardPadding = ultraCompact
                          ? 14.0
                          : compact
                          ? 18.0
                          : 22.0;
                      final iconWrapSize = ultraCompact
                          ? 52.0
                          : compact
                          ? 60.0
                          : 72.0;
                      final iconSize = ultraCompact
                          ? 28.0
                          : compact
                          ? 32.0
                          : 36.0;
                      final titleSize = ultraCompact ? 15.0 : 16.0;
                      final subtitleSize = ultraCompact ? 11.0 : 12.0;
                      final largeGap = ultraCompact ? 10.0 : 16.0;
                      final smallGap = ultraCompact ? 4.0 : 6.0;

                      return Padding(
                        padding: EdgeInsets.symmetric(
                          horizontal: horizontalPadding,
                        ),
                        child: SingleChildScrollView(
                          physics: const ClampingScrollPhysics(),
                          padding: EdgeInsets.symmetric(
                            vertical: verticalPadding,
                          ),
                          child: ConstrainedBox(
                            constraints: BoxConstraints(
                              minHeight:
                                  constraints.maxHeight - (verticalPadding * 2),
                            ),
                            child: Center(
                              child: Container(
                                width: double.infinity,
                                padding: EdgeInsets.all(cardPadding),
                                decoration: BoxDecoration(
                                  color: isDark
                                      ? Colors.white.withValues(alpha: 0.04)
                                      : const Color(0xFFF6F7FF),
                                  borderRadius: BorderRadius.circular(24),
                                  border: Border.all(color: borderColor),
                                ),
                                child: Column(
                                  mainAxisSize: MainAxisSize.min,
                                  children: [
                                    Container(
                                      width: iconWrapSize,
                                      height: iconWrapSize,
                                      decoration: BoxDecoration(
                                        color: theme.colorScheme.primary
                                            .withValues(alpha: 0.1),
                                        shape: BoxShape.circle,
                                      ),
                                      child: Icon(
                                        Icons.shopping_cart_outlined,
                                        size: iconSize,
                                        color: theme.colorScheme.primary,
                                      ),
                                    ),
                                    SizedBox(height: largeGap),
                                    Text(
                                      languageProvider.t('empty_cart'),
                                      style: TextStyle(
                                        fontSize: titleSize,
                                        fontWeight: FontWeight.w700,
                                        color: textColor,
                                      ),
                                      textAlign: TextAlign.center,
                                    ),
                                    SizedBox(height: smallGap),
                                    Text(
                                      'Choose products above and they will appear here instantly.',
                                      textAlign: TextAlign.center,
                                      maxLines: ultraCompact ? 2 : 3,
                                      overflow: TextOverflow.ellipsis,
                                      style: TextStyle(
                                        fontSize: subtitleSize,
                                        height: 1.4,
                                        color: subtitleColor,
                                      ),
                                    ),
                                  ],
                                ),
                              ),
                            ),
                          ),
                        ),
                      );
                    },
                  )
                : ListView.builder(
                    padding: const EdgeInsets.fromLTRB(12, 0, 12, 8),
                    itemCount: cart.items.length,
                    itemBuilder: (context, index) {
                      final item = cart.items[index];
                      return Card(
                        color: itemCardColor,
                        margin: const EdgeInsets.only(bottom: 8),
                        elevation: 0,
                        shape: RoundedRectangleBorder(
                          borderRadius: BorderRadius.circular(16),
                          side: BorderSide(color: borderColor),
                        ),
                        child: Padding(
                          padding: const EdgeInsets.all(10),
                          child: Row(
                            children: [
                              Expanded(
                                child: Column(
                                  crossAxisAlignment: CrossAxisAlignment.start,
                                  children: [
                                    Text(
                                      item.name,
                                      style: TextStyle(
                                        fontWeight: FontWeight.bold,
                                        fontSize: 14,
                                        color: textColor,
                                      ),
                                      maxLines: 1,
                                      overflow: TextOverflow.ellipsis,
                                    ),
                                    const SizedBox(height: 4),
                                    Text(
                                      '\$${item.price.toStringAsFixed(2)}',
                                      style: const TextStyle(
                                        color: Colors.green,
                                        fontWeight: FontWeight.bold,
                                        fontSize: 13,
                                      ),
                                    ),
                                  ],
                                ),
                              ),
                              Row(
                                mainAxisSize: MainAxisSize.min,
                                children: [
                                  InkWell(
                                    onTap: () {
                                      HapticFeedback.lightImpact();
                                      cart.updateQuantity(
                                        item.productId,
                                        item.quantity - 1,
                                      );
                                    },
                                    borderRadius: BorderRadius.circular(6),
                                    child: Container(
                                      width: 28,
                                      height: 28,
                                      decoration: BoxDecoration(
                                        color: isDark
                                            ? const Color(0xFF2A2A4A)
                                            : Colors.grey[200],
                                        borderRadius: BorderRadius.circular(6),
                                      ),
                                      child: Icon(
                                        Icons.remove,
                                        size: 16,
                                        color: theme.colorScheme.primary,
                                      ),
                                    ),
                                  ),
                                  const SizedBox(width: 6),
                                  SizedBox(
                                    width: 32,
                                    child: Text(
                                      '${item.quantity}',
                                      textAlign: TextAlign.center,
                                      style: const TextStyle(
                                        fontSize: 16,
                                        fontWeight: FontWeight.bold,
                                      ),
                                    ),
                                  ),
                                  const SizedBox(width: 6),
                                  InkWell(
                                    onTap: () {
                                      HapticFeedback.lightImpact();
                                      cart.updateQuantity(
                                        item.productId,
                                        item.quantity + 1,
                                      );
                                    },
                                    borderRadius: BorderRadius.circular(6),
                                    child: Container(
                                      width: 28,
                                      height: 28,
                                      decoration: BoxDecoration(
                                        color: const Color(0xFF6C63FF),
                                        borderRadius: BorderRadius.circular(6),
                                      ),
                                      child: const Icon(
                                        Icons.add,
                                        size: 16,
                                        color: Colors.white,
                                      ),
                                    ),
                                  ),
                                ],
                              ),
                              const SizedBox(width: 6),
                              InkWell(
                                onTap: () {
                                  HapticFeedback.lightImpact();
                                  cart.removeItem(item.productId);
                                },
                                borderRadius: BorderRadius.circular(6),
                                child: Container(
                                  width: 32,
                                  height: 32,
                                  decoration: BoxDecoration(
                                    color: Colors.red,
                                    borderRadius: BorderRadius.circular(6),
                                  ),
                                  child: const Icon(
                                    Icons.delete_outline_rounded,
                                    size: 18,
                                    color: Colors.white,
                                  ),
                                ),
                              ),
                            ],
                          ),
                        ),
                      );
                    },
                  ),
          ),
          if (cart.isNotEmpty)
            SingleChildScrollView(child: _buildCartSummary(cart)),
        ],
      ),
    );
  }

  Widget _buildCartSummary(CartProvider cart) {
    final theme = Theme.of(context);
    final languageProvider = context.watch<LanguageProvider>();
    final isDark = theme.brightness == Brightness.dark;
    final textColor = isDark ? Colors.white : Colors.black87;
    final subtitleColor = isDark
        ? Colors.white.withValues(alpha: 0.72)
        : const Color(0xFF6B7280);
    final buttonBgColor = isDark
        ? Colors.white.withValues(alpha: 0.04)
        : const Color(0xFFF8F9FF);

    return Container(
      margin: const EdgeInsets.fromLTRB(12, 0, 12, 12),
      padding: const EdgeInsets.symmetric(horizontal: 12, vertical: 12),
      decoration: BoxDecoration(
        color: isDark
            ? Colors.white.withValues(alpha: 0.03)
            : Colors.white.withValues(alpha: 0.9),
        borderRadius: BorderRadius.circular(20),
        border: Border.all(
          color: isDark
              ? Colors.white.withValues(alpha: 0.06)
              : const Color(0xFFE3E7F4),
        ),
      ),
      child: Column(
        mainAxisSize: MainAxisSize.min,
        children: [
          // Discount Row
          if (cart.hasDiscount)
            Consumer<LanguageProvider>(
              builder: (context, languageProvider, child) {
                return Container(
                  padding: const EdgeInsets.symmetric(
                    horizontal: 6,
                    vertical: 2,
                  ),
                  margin: const EdgeInsets.only(bottom: 3),
                  decoration: BoxDecoration(
                    color: Colors.red.withValues(alpha: 0.12),
                    borderRadius: BorderRadius.circular(10),
                  ),
                  child: Row(
                    children: [
                      const Icon(
                        Icons.local_offer,
                        color: Colors.red,
                        size: 12,
                      ),
                      const SizedBox(width: 4),
                      Expanded(
                        child: Text(
                          'Discount (${cart.discountDisplay})',
                          style: const TextStyle(
                            fontSize: 10,
                            color: Colors.red,
                            fontWeight: FontWeight.w500,
                          ),
                        ),
                      ),
                      Text(
                        '-\$${cart.discountAmount.toStringAsFixed(2)}',
                        style: const TextStyle(
                          fontSize: 10,
                          color: Colors.red,
                          fontWeight: FontWeight.bold,
                        ),
                      ),
                      const SizedBox(width: 4),
                      InkWell(
                        onTap: () => cart.removeDiscount(),
                        child: const Icon(
                          Icons.cancel,
                          color: Colors.red,
                          size: 14,
                        ),
                      ),
                    ],
                  ),
                );
              },
            ),
          // Summary Row
          Row(
            children: [
              Expanded(
                child: Column(
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: [
                    Consumer<LanguageProvider>(
                      builder: (context, languageProvider, child) {
                        return Column(
                          crossAxisAlignment: CrossAxisAlignment.start,
                          children: [
                            _buildSummaryRow(
                              'Subtotal',
                              '\$${cart.subtotal.toStringAsFixed(2)}',
                              fontSize: 11,
                              color: subtitleColor,
                            ),
                            if (cart.hasDiscount) ...[
                              const SizedBox(height: 1),
                              _buildSummaryRow(
                                'After Discount',
                                '\$${cart.subtotalAfterDiscount.toStringAsFixed(2)}',
                                fontSize: 10,
                                color: Colors.red,
                              ),
                            ],
                            const SizedBox(height: 1),
                            _buildSummaryRow(
                              'Tax (${cart.taxRate.toStringAsFixed(0)}%)',
                              '\$${cart.tax.toStringAsFixed(2)}',
                              fontSize: 11,
                              color: subtitleColor,
                            ),
                          ],
                        );
                      },
                    ),
                  ],
                ),
              ),
              Consumer<LanguageProvider>(
                builder: (context, languageProvider, child) {
                  return Column(
                    crossAxisAlignment: CrossAxisAlignment.end,
                    children: [
                      Text(
                        languageProvider.t('total'),
                        style: const TextStyle(fontSize: 10),
                      ),
                      Text(
                        '\$${cart.total.toStringAsFixed(2)}',
                        style: TextStyle(
                          fontSize: 16,
                          fontWeight: FontWeight.bold,
                          color: theme.colorScheme.primary,
                        ),
                      ),
                    ],
                  );
                },
              ),
            ],
          ),
          const SizedBox(height: 4),
          Row(
            children: [
              // Discount Button (Left)
              Expanded(
                child: Consumer<LanguageProvider>(
                  builder: (context, languageProvider, child) {
                    return InkWell(
                      onTap: () => _showDiscountDialog(context, cart),
                      borderRadius: BorderRadius.circular(8),
                      child: Container(
                        height: 45,
                        padding: const EdgeInsets.symmetric(
                          horizontal: 4,
                          vertical: 2,
                        ),
                        decoration: BoxDecoration(
                          color: buttonBgColor,
                          borderRadius: BorderRadius.circular(14),
                          border: Border.all(
                            color: theme.colorScheme.primary.withValues(
                              alpha: 0.18,
                            ),
                          ),
                        ),
                        child: Row(
                          mainAxisAlignment: MainAxisAlignment.center,
                          children: [
                            Icon(
                              Icons.local_offer,
                              size: 16,
                              color: theme.colorScheme.primary,
                            ),
                            const SizedBox(width: 4),
                            Text(
                              'Discount',
                              style: TextStyle(
                                fontSize: 11,
                                color: textColor,
                                fontWeight: FontWeight.w500,
                              ),
                            ),
                            if (cart.hasDiscount) ...[
                              const SizedBox(width: 4),
                              InkWell(
                                onTap: () {
                                  cart.removeDiscount();
                                },
                                child: Icon(
                                  Icons.cancel,
                                  color: Colors.red,
                                  size: 14,
                                ),
                              ),
                            ],
                          ],
                        ),
                      ),
                    );
                  },
                ),
              ),
              const SizedBox(width: 8),
              // Shipping Input (Right)
              Expanded(
                child: Container(
                  height: 45,
                  padding: const EdgeInsets.symmetric(
                    horizontal: 4,
                    vertical: 2,
                  ),
                  decoration: BoxDecoration(
                    color: buttonBgColor,
                    borderRadius: BorderRadius.circular(14),
                    border: Border.all(
                      color: theme.colorScheme.primary.withValues(alpha: 0.18),
                    ),
                  ),
                  child: Row(
                    children: [
                      Icon(
                        Icons.local_shipping,
                        size: 16,
                        color: theme.colorScheme.primary,
                      ),
                      const SizedBox(width: 4),
                      Text(
                        languageProvider.t('shipping'),
                        style: TextStyle(
                          fontSize: 11,
                          color: textColor,
                          fontWeight: FontWeight.w500,
                        ),
                      ),
                      const SizedBox(width: 4),
                      Expanded(
                        child: Text(
                          '\$${cart.shipping.toStringAsFixed(0)}',
                          textAlign: TextAlign.center,
                          style: TextStyle(
                            fontSize: 12,
                            color: textColor,
                            fontWeight: FontWeight.bold,
                          ),
                        ),
                      ),
                      const SizedBox(width: 4),
                      InkWell(
                        onTap: cart.toggleFreeShipping,
                        borderRadius: BorderRadius.circular(10),
                        child: Container(
                          padding: const EdgeInsets.symmetric(
                            horizontal: 8,
                            vertical: 6,
                          ),
                          decoration: BoxDecoration(
                            color: cart.isFreeShipping
                                ? const Color(
                                    0xFF16A34A,
                                  ).withValues(alpha: isDark ? 0.28 : 0.14)
                                : Colors.grey.withValues(
                                    alpha: isDark ? 0.22 : 0.14,
                                  ),
                            borderRadius: BorderRadius.circular(10),
                            border: Border.all(
                              color: cart.isFreeShipping
                                  ? const Color(0xFF16A34A)
                                  : Colors.grey.withValues(alpha: 0.35),
                            ),
                          ),
                          child: Text(
                            cart.isFreeShipping
                                ? languageProvider.t('free_delivery')
                                : languageProvider.t('none'),
                            maxLines: 1,
                            overflow: TextOverflow.ellipsis,
                            style: TextStyle(
                              fontSize: 9,
                              fontWeight: FontWeight.w800,
                              color: cart.isFreeShipping
                                  ? const Color(0xFF16A34A)
                                  : textColor,
                            ),
                          ),
                        ),
                      ),
                    ],
                  ),
                ),
              ),
            ],
          ),
          const SizedBox(height: 4),
          // Checkout Button
          InkWell(
            onTap: (cart.isEmpty || _selectedWarehouseId == null)
                ? null
                : () {
                    int warehouseId = 1;
                    String warehouseName = 'Default';
                    final selectedWarehouse = _warehouses.firstWhere(
                      (w) => w['id'] == _selectedWarehouseId,
                      orElse: () => {'id': '1', 'name': 'Default'},
                    );
                    warehouseId =
                        int.tryParse(selectedWarehouse['id'].toString()) ?? 1;
                    warehouseName = selectedWarehouse['name'] as String;

                    Navigator.push(
                      context,
                      MaterialPageRoute(
                        builder: (context) => CheckoutScreen(
                          warehouseId: warehouseId,
                          warehouseName: warehouseName,
                        ),
                      ),
                    );
                  },
            borderRadius: BorderRadius.circular(8),
            child: Container(
              height: 45,
              width: double.infinity,
              padding: const EdgeInsets.symmetric(horizontal: 4, vertical: 2),
              decoration: BoxDecoration(
                color: (_selectedWarehouseId == null && cart.isNotEmpty)
                    ? Colors.grey[400]
                    : theme.colorScheme.primary,
                borderRadius: BorderRadius.circular(8),
              ),
              child: Row(
                mainAxisAlignment: MainAxisAlignment.center,
                children: [
                  Icon(Icons.payment, size: 18, color: Colors.white),
                  const SizedBox(width: 6),
                  Consumer<LanguageProvider>(
                    builder: (context, languageProvider, child) {
                      return Text(
                        _selectedWarehouseId == null && cart.isNotEmpty
                            ? 'សូមជ្រើសរើសឃ្លាំង'
                            : languageProvider.t('checkout'),
                        style: const TextStyle(
                          fontSize: 13,
                          fontWeight: FontWeight.bold,
                          color: Colors.white,
                        ),
                      );
                    },
                  ),
                ],
              ),
            ),
          ),
        ],
      ),
    );
  }

  Widget _buildSummaryRow(
    String label,
    String value, {
    double fontSize = 12,
    Color? color,
  }) {
    final theme = Theme.of(context);
    final isDark = theme.brightness == Brightness.dark;
    final textColor = isDark ? Colors.white : Colors.black87;

    return Row(
      mainAxisAlignment: MainAxisAlignment.spaceBetween,
      children: [
        Text(
          label,
          style: TextStyle(
            fontSize: fontSize,
            color: color ?? (isDark ? Colors.white70 : Colors.grey),
          ),
        ),
        Text(
          value,
          style: TextStyle(
            fontSize: fontSize + 1,
            fontWeight: FontWeight.w600,
            color: color ?? textColor,
          ),
        ),
      ],
    );
  }

  void _showDiscountDialog(BuildContext context, CartProvider cart) {
    final theme = Theme.of(context);
    final isDark = theme.brightness == Brightness.dark;
    final dialogBackground = isDark ? const Color(0xFF16213E) : Colors.white;
    final textColor = isDark ? Colors.white : Colors.black87;
    final languageProvider = context.read<LanguageProvider>();

    final discountController = TextEditingController(
      text: cart.hasDiscount ? cart.discount.toString() : '',
    );
    String selectedType = cart.discountType; // 'fixed' or 'percentage'

    showDialog(
      context: context,
      builder: (context) => StatefulBuilder(
        builder: (context, setState) => AlertDialog(
          backgroundColor: dialogBackground,
          title: Row(
            children: [
              Icon(Icons.local_offer, color: theme.colorScheme.primary),
              const SizedBox(width: 8),
              Text(
                languageProvider.t('checkout'),
                style: TextStyle(color: textColor),
              ),
            ],
          ),
          content: Column(
            mainAxisSize: MainAxisSize.min,
            children: [
              // Discount Type Selection
              RadioGroup<String>(
                groupValue: selectedType,
                onChanged: (value) {
                  setState(() {
                    selectedType = value ?? 'fixed';
                  });
                },
                child: Row(
                  children: [
                    Expanded(
                      child: RadioListTile<String>(
                        title: Text(languageProvider.t('cash')),
                        value: 'fixed',
                        contentPadding: EdgeInsets.zero,
                      ),
                    ),
                    Expanded(
                      child: RadioListTile<String>(
                        title: Text(languageProvider.t('card')),
                        value: 'percentage',
                        contentPadding: EdgeInsets.zero,
                      ),
                    ),
                  ],
                ),
              ),
              const SizedBox(height: 16),
              // Discount Input
              TextField(
                controller: discountController,
                keyboardType: const TextInputType.numberWithOptions(
                  decimal: true,
                ),
                decoration: InputDecoration(
                  labelText: selectedType == 'percentage'
                      ? 'Discount %'
                      : 'Discount Amount',
                  prefixText: selectedType == 'percentage' ? '' : '\$',
                  border: OutlineInputBorder(
                    borderRadius: BorderRadius.circular(10),
                  ),
                  hintText: selectedType == 'percentage'
                      ? 'e.g., 10'
                      : 'e.g., 5.00',
                  helperText: selectedType == 'percentage'
                      ? 'Enter percentage (0-100)'
                      : 'Enter fixed amount',
                ),
                onChanged: (value) {
                  // Validate input
                  final amount = double.tryParse(value) ?? 0;
                  if (selectedType == 'percentage' && amount > 100) {
                    // Auto-correct to max 100%
                    discountController.text = '100';
                    discountController.selection = TextSelection.fromPosition(
                      TextPosition(offset: discountController.text.length),
                    );
                  }
                },
              ),
              // Preview
              if (double.tryParse(discountController.text) != null &&
                  double.parse(discountController.text) > 0) ...[
                const SizedBox(height: 16),
                Container(
                  padding: const EdgeInsets.all(12),
                  decoration: BoxDecoration(
                    color: Colors.green.withValues(alpha: 0.1),
                    borderRadius: BorderRadius.circular(8),
                    border: Border.all(
                      color: Colors.green.withValues(alpha: 0.3),
                    ),
                  ),
                  child: Column(
                    children: [
                      Row(
                        mainAxisAlignment: MainAxisAlignment.spaceBetween,
                        children: [
                          const Text(
                            'Subtotal:',
                            style: TextStyle(fontSize: 12),
                          ),
                          Text(
                            '\$${cart.subtotal.toStringAsFixed(2)}',
                            style: const TextStyle(
                              fontSize: 12,
                              fontWeight: FontWeight.bold,
                            ),
                          ),
                        ],
                      ),
                      const SizedBox(height: 4),
                      Row(
                        mainAxisAlignment: MainAxisAlignment.spaceBetween,
                        children: [
                          Text(
                            'Discount (${selectedType == 'percentage' ? '${discountController.text}%' : '\$${double.tryParse(discountController.text)?.toStringAsFixed(2)}'})',
                            style: const TextStyle(
                              fontSize: 12,
                              color: Colors.red,
                            ),
                          ),
                          Text(
                            '-\$${(selectedType == 'percentage' ? cart.subtotal * (double.parse(discountController.text) / 100) : double.tryParse(discountController.text) ?? 0).toStringAsFixed(2)}',
                            style: const TextStyle(
                              fontSize: 12,
                              color: Colors.red,
                              fontWeight: FontWeight.bold,
                            ),
                          ),
                        ],
                      ),
                      const Divider(height: 16),
                      Row(
                        mainAxisAlignment: MainAxisAlignment.spaceBetween,
                        children: [
                          const Text(
                            'New Total:',
                            style: TextStyle(
                              fontSize: 14,
                              fontWeight: FontWeight.bold,
                            ),
                          ),
                          Text(
                            '\$${(cart.subtotal - (selectedType == 'percentage' ? cart.subtotal * (double.parse(discountController.text) / 100) : double.tryParse(discountController.text) ?? 0)).toStringAsFixed(2)}',
                            style: const TextStyle(
                              fontSize: 14,
                              fontWeight: FontWeight.bold,
                              color: Color(0xFF6C63FF),
                            ),
                          ),
                        ],
                      ),
                    ],
                  ),
                ),
              ],
            ],
          ),
          actions: [
            TextButton(
              onPressed: () => Navigator.pop(context),
              child: Text(languageProvider.t('cancel')),
            ),
            ElevatedButton(
              onPressed: () {
                final amount = double.tryParse(discountController.text) ?? 0;
                if (amount > 0) {
                  cart.setDiscount(amount, type: selectedType);
                  Navigator.pop(context);
                  showTopNotification(
                    context,
                    '${languageProvider.t('discount_applied')}: ${cart.discountDisplay}',
                    duration: const Duration(seconds: 2),
                    type: TopNotificationType.success,
                  );
                } else {
                  showTopNotification(
                    context,
                    languageProvider.t('enter_valid_discount'),
                    duration: const Duration(seconds: 2),
                    type: TopNotificationType.warning,
                  );
                }
              },
              style: ElevatedButton.styleFrom(
                backgroundColor: const Color(0xFF6C63FF),
              ),
              child: Text(languageProvider.t('ok')),
            ),
          ],
        ),
      ),
    );
  }

  Widget _buildEmptyState() {
    final theme = Theme.of(context);
    final isDark = theme.brightness == Brightness.dark;
    final borderColor = isDark
        ? Colors.white.withValues(alpha: 0.08)
        : const Color(0xFFE3E7F4);

    return LayoutBuilder(
      builder: (context, constraints) {
        return Consumer<LanguageProvider>(
          builder: (context, languageProvider, child) {
            return SingleChildScrollView(
              physics: const BouncingScrollPhysics(),
              padding: const EdgeInsets.symmetric(horizontal: 24, vertical: 12),
              child: ConstrainedBox(
                constraints: BoxConstraints(minHeight: constraints.maxHeight),
                child: Center(
                  child: Container(
                    width: double.infinity,
                    padding: const EdgeInsets.all(24),
                    decoration: BoxDecoration(
                      color: isDark
                          ? Colors.white.withValues(alpha: 0.04)
                          : Colors.white.withValues(alpha: 0.92),
                      borderRadius: BorderRadius.circular(28),
                      border: Border.all(color: borderColor),
                    ),
                    child: Column(
                      mainAxisSize: MainAxisSize.min,
                      children: [
                        Container(
                          width: 84,
                          height: 84,
                          decoration: BoxDecoration(
                            color: theme.colorScheme.primary.withValues(
                              alpha: 0.08,
                            ),
                            shape: BoxShape.circle,
                          ),
                          child: Icon(
                            Icons.inventory_2_outlined,
                            size: 42,
                            color: theme.colorScheme.primary,
                          ),
                        ),
                        const SizedBox(height: 18),
                        Text(
                          languageProvider.t('products'),
                          style: TextStyle(
                            fontSize: 18,
                            fontWeight: FontWeight.w700,
                            color: isDark
                                ? Colors.white
                                : const Color(0xFF111827),
                          ),
                        ),
                        const SizedBox(height: 8),
                        Text(
                          'Make sure products are added in WebApp and that the selected filters have stock.',
                          textAlign: TextAlign.center,
                          style: TextStyle(
                            fontSize: 14,
                            height: 1.5,
                            color: isDark
                                ? Colors.white.withValues(alpha: 0.68)
                                : const Color(0xFF6B7280),
                          ),
                        ),
                      ],
                    ),
                  ),
                ),
              ),
            );
          },
        );
      },
    );
  }
}
