import 'package:flutter/material.dart';
import 'package:provider/provider.dart';
import 'package:seller_app/models/product.dart';
import 'package:seller_app/providers/product_provider.dart';
import 'package:seller_app/providers/auth_provider.dart';
import 'package:seller_app/providers/language_provider.dart';
import 'package:seller_app/widgets/product_card.dart';
import 'package:seller_app/screens/add_product_screen.dart';
import 'package:seller_app/services/api_service.dart';
import 'package:seller_app/controllers/navigation_bar_controller.dart';

class ProductsScreen extends StatefulWidget {
  const ProductsScreen({super.key, this.menuButton});

  final Widget? menuButton;

  @override
  State<ProductsScreen> createState() => _ProductsScreenState();
}

class _ProductsScreenState extends State<ProductsScreen> {
  String _searchQuery = '';
  String _selectedCategory = 'All';
  String? _selectedWarehouseId; // null = all warehouses
  List<String> _categories = ['All'];
  List<Map<String, dynamic>> _warehouses = [];
  bool _isLoadingFilters = false;

  // For auto-hide bottom navigation
  final ScrollController _scrollController = ScrollController();
  double _lastScrollOffset = 0;

  @override
  void initState() {
    super.initState();
    _scrollController.addListener(_onScroll);
    // ដោះស្រាយ setState during build ដោយប្រើ addPostFrameCallback
    WidgetsBinding.instance.addPostFrameCallback((_) {
      if (mounted) {
        _loadFilters();
        _loadProducts();
      }
    });
  }

  @override
  void dispose() {
    _scrollController.removeListener(_onScroll);
    _scrollController.dispose();
    super.dispose();
  }

  void _onScroll() {
    final currentOffset = _scrollController.offset;
    final difference = currentOffset - _lastScrollOffset;
    final navController = context.read<NavigationBarController>();

    // If scrolled down more than 5 pixels, hide navigation
    if (difference > 5 && currentOffset > 50) {
      navController.hide();
    }
    // If scrolled up more than 5 pixels, show navigation
    else if (difference < -5) {
      navController.show();
    }

    _lastScrollOffset = currentOffset;
  }

  Future<void> _loadFilters() async {
    if (!mounted) return;

    setState(() {
      _isLoadingFilters = true;
    });

    try {
      final apiService = ApiService();

      // Load Warehouses
      final warehouses = await apiService.getWarehouses();

      if (mounted) {
        setState(() {
          _warehouses = [
            {
              'id': 'all',
              'name': 'all_warehouses_placeholder',
            }, // Translated in UI
            ...warehouses,
          ];
          _isLoadingFilters = false;
        });
      }
    } catch (e) {
      if (mounted) {
        setState(() {
          _isLoadingFilters = false;
        });
      }
    }
  }

  Future<void> _loadProducts() async {
    final productProvider = context.read<ProductProvider>();

    await productProvider.fetchProducts(warehouseId: _selectedWarehouseId);

    // ទាញទិន្នន័យ categories ពី API
    try {
      final apiService = ApiService();
      final categoriesList = await apiService.getCategoriesList();

      if (mounted) {
        final categoryNames = {
          'All',
          ...categoriesList
              .map((c) => c['name'] as String)
              .where((name) => name.isNotEmpty),
        }.toList();

        setState(() {
          _categories = categoryNames;
        });
      }
    } catch (e) {
      // Fallback to extracting from products
      if (mounted) {
        final products = productProvider.products;
        final categorySet = products.map((p) => p.categoryName).toSet();

        setState(() {
          _categories = ['All', ...categorySet.where((c) => c.isNotEmpty)];
        });
      }
    }
  }

  @override
  Widget build(BuildContext context) {
    final theme = Theme.of(context);
    final languageProvider = context.watch<LanguageProvider>();
    final allWarehousesLabel = languageProvider.t('all_warehouses');
    final allCategoryLabel = languageProvider.t('all');
    final isDark = theme.brightness == Brightness.dark;
    final backgroundColor = isDark
        ? const Color(0xFF1A1A2E)
        : const Color(0xFFF5F5F7);
    final cardColor = isDark ? const Color(0xFF16213E) : Colors.white;
    final textColor = isDark ? Colors.white : Colors.black87;
    final inputFillColor = isDark ? const Color(0xFF16213E) : Colors.grey[100]!;
    final authProv = Provider.of<AuthProvider>(context);

    return Consumer<ProductProvider>(
      builder: (context, productProvider, child) {
        final products = productProvider.products;

        final filteredProducts = products.where((product) {
          final matchesSearch = product.name.toLowerCase().contains(
            _searchQuery.toLowerCase(),
          );
          final matchesCategory =
              _selectedCategory == 'All' ||
              product.categoryName == _selectedCategory;
          final matchesWarehouse =
              _selectedWarehouseId == null ||
              _selectedWarehouseId == 'all' ||
              product.warehouseId == _selectedWarehouseId;
          return matchesSearch && matchesCategory && matchesWarehouse;
        }).toList();

        return Scaffold(
          backgroundColor: backgroundColor,
          appBar: AppBar(
            title: Text(
              languageProvider.t('products'),
              style: TextStyle(color: textColor),
            ),
            backgroundColor: isDark ? const Color(0xFF16213E) : Colors.white,
            leading: widget.menuButton,
            leadingWidth: widget.menuButton != null ? 96 : null,
            actions: [
              IconButton(
                icon: productProvider.isLoading
                    ? const SizedBox(
                        width: 20,
                        height: 20,
                        child: CircularProgressIndicator(strokeWidth: 2),
                      )
                    : Icon(Icons.refresh, color: textColor),
                onPressed: productProvider.isLoading ? null : _loadProducts,
                tooltip: languageProvider.t('loading'),
              ),
              IconButton(
                icon: Icon(Icons.filter_list, color: textColor),
                onPressed: () {
                  _showFilterDialog(languageProvider);
                },
              ),
            ],
          ),
          body: Column(
            children: [
              // Search Bar
              Padding(
                padding: const EdgeInsets.all(16),
                child: SizedBox(
                  height: 50,
                  child: TextField(
                    style: TextStyle(color: textColor),
                    decoration: InputDecoration(
                      hintText: languageProvider.t('search'),
                      hintStyle: TextStyle(
                        color: isDark ? Colors.white54 : Colors.grey[400],
                      ),
                      prefixIcon: Icon(
                        Icons.search,
                        color: isDark ? Colors.white54 : Colors.grey[400],
                      ),
                      suffixIcon: _searchQuery.isNotEmpty
                          ? IconButton(
                              icon: const Icon(Icons.clear),
                              onPressed: () {
                                setState(() {
                                  _searchQuery = '';
                                });
                              },
                            )
                          : null,
                      border: OutlineInputBorder(
                        borderRadius: BorderRadius.circular(12),
                      ),
                    ),
                    onChanged: (value) {
                      setState(() {
                        _searchQuery = value;
                      });
                    },
                  ),
                ),
              ),

              // Warehouse & Category Filters
              Padding(
                padding: const EdgeInsets.symmetric(horizontal: 16),
                child: Row(
                  children: [
                    // Warehouse Dropdown
                    Expanded(
                      child: _isLoadingFilters
                          ? Center(
                              child: CircularProgressIndicator(
                                strokeWidth: 2,
                                color: theme.colorScheme.primary,
                              ),
                            )
                          : Container(
                              padding: const EdgeInsets.symmetric(
                                horizontal: 12,
                              ),
                              decoration: BoxDecoration(
                                color: inputFillColor,
                                borderRadius: BorderRadius.circular(12),
                                border: Border.all(
                                  color: theme.colorScheme.primary.withValues(
                                    alpha: 0.3,
                                  ),
                                ),
                              ),
                              child: DropdownButtonHideUnderline(
                                child: DropdownButton<String>(
                                  dropdownColor: cardColor,
                                  value: _selectedWarehouseId ?? 'all',
                                  isExpanded: true,
                                  icon: Icon(
                                    Icons.warehouse,
                                    color: theme.colorScheme.primary,
                                  ),
                                  style: TextStyle(
                                    color: textColor,
                                    fontSize: 12,
                                  ),
                                  items: _warehouses.map((warehouse) {
                                    final isAll = warehouse['id'] == 'all';
                                    return DropdownMenuItem(
                                      value: warehouse['id'] as String,
                                      child: Text(
                                        isAll
                                            ? allWarehousesLabel
                                            : (warehouse['name'] as String),
                                        style: TextStyle(
                                          fontSize: 12,
                                          color: textColor,
                                        ),
                                      ),
                                    );
                                  }).toList(),
                                  onChanged: (value) {
                                    setState(() {
                                      _selectedWarehouseId = value == 'all'
                                          ? null
                                          : value;
                                    });
                                    // Reload products ពេលជ្រើសរើសឃ្លាំង
                                    _loadProducts();
                                  },
                                ),
                              ),
                            ),
                    ),
                    const SizedBox(width: 12),
                    // Category Dropdown
                    Expanded(
                      child: Container(
                        padding: const EdgeInsets.symmetric(horizontal: 12),
                        decoration: BoxDecoration(
                          color: inputFillColor,
                          borderRadius: BorderRadius.circular(12),
                          border: Border.all(
                            color: theme.colorScheme.primary.withValues(
                              alpha: 0.3,
                            ),
                          ),
                        ),
                        child: DropdownButtonHideUnderline(
                          child: DropdownButton<String>(
                            dropdownColor: cardColor,
                            value: _categories.contains(_selectedCategory)
                                ? _selectedCategory
                                : allCategoryLabel,
                            isExpanded: true,
                            icon: Icon(
                              Icons.category,
                              color: theme.colorScheme.primary,
                            ),
                            style: TextStyle(color: textColor, fontSize: 12),
                            items: _categories.map((category) {
                              final isAll = category == 'All';
                              return DropdownMenuItem(
                                value: category,
                                child: Text(
                                  isAll ? allCategoryLabel : category,
                                  style: TextStyle(
                                    fontSize: 12,
                                    color: textColor,
                                  ),
                                ),
                              );
                            }).toList(),
                            onChanged: (value) {
                              setState(() {
                                _selectedCategory = value!;
                              });
                              // មិនត្រូវការ reload ទេ ព្រោះ filtering ធ្វើក្នុង client
                            },
                          ),
                        ),
                      ),
                    ),
                  ],
                ),
              ),
              const SizedBox(height: 16),

              // Products Grid
              Expanded(
                child: productProvider.isLoading
                    ? Center(
                        child: CircularProgressIndicator(
                          color: theme.colorScheme.primary,
                        ),
                      )
                    : filteredProducts.isEmpty
                    ? _buildEmptyState(languageProvider)
                    : GridView.builder(
                        controller: _scrollController,
                        padding: const EdgeInsets.symmetric(horizontal: 16),
                        gridDelegate:
                            const SliverGridDelegateWithFixedCrossAxisCount(
                              crossAxisCount: 2,
                              mainAxisSpacing: 12,
                              crossAxisSpacing: 12,
                              childAspectRatio: 0.75,
                            ),
                        itemCount: filteredProducts.length,
                        itemBuilder: (context, index) {
                          return ProductCard(
                            product: filteredProducts[index],
                            onTap: () {
                              _showProductDetails(
                                context,
                                filteredProducts[index],
                                languageProvider,
                              );
                            },
                            onEdit: authProv.canEditProducts
                                ? () => _showEditProduct(
                                    context,
                                    filteredProducts[index],
                                  )
                                : null,
                            onDelete: authProv.canDeleteProducts
                                ? () => _confirmDelete(
                                    context,
                                    filteredProducts[index],
                                    languageProvider,
                                  )
                                : null,
                          );
                        },
                      ),
              ),
            ],
          ),
          floatingActionButton: authProv.canCreateProducts
              ? FloatingActionButton.extended(
                  onPressed: () {
                    Navigator.push(
                      context,
                      MaterialPageRoute(
                        builder: (context) => const AddProductScreen(),
                      ),
                    );
                  },
                  icon: const Icon(Icons.add),
                  label: Text(languageProvider.t('nav_products')),
                )
              : null,
        );
      },
    );
  }

  Widget _buildEmptyState(LanguageProvider languageProvider) {
    return Center(
      child: Column(
        mainAxisAlignment: MainAxisAlignment.center,
        children: [
          Icon(Icons.inventory_2_outlined, size: 80, color: Colors.grey[400]),
          const SizedBox(height: 16),
          Text(
            languageProvider.t('no_products'),
            style: TextStyle(fontSize: 18, color: Colors.grey[600]),
          ),
          const SizedBox(height: 8),
          Text(
            languageProvider.t('add_first_product'),
            style: TextStyle(color: Colors.grey[500]),
          ),
        ],
      ),
    );
  }

  void _showFilterDialog(LanguageProvider languageProvider) {
    showDialog(
      context: context,
      builder: (context) => AlertDialog(
        title: Text(languageProvider.t('products')),
        content: Column(
          mainAxisSize: MainAxisSize.min,
          children: [
            ListTile(
              title: Text(languageProvider.t('stock')),
              leading: const Icon(Icons.warning),
              onTap: () {
                Navigator.pop(context);
              },
            ),
            ListTile(
              title: Text(languageProvider.t('out_of_stock')),
              leading: const Icon(Icons.inventory_2),
              onTap: () {
                Navigator.pop(context);
              },
            ),
          ],
        ),
      ),
    );
  }

  void _showProductDetails(
    BuildContext context,
    Product product,
    LanguageProvider languageProvider,
  ) {
    showModalBottomSheet(
      context: context,
      isScrollControlled: true,
      builder: (context) => DraggableScrollableSheet(
        initialChildSize: 0.6,
        minChildSize: 0.4,
        maxChildSize: 0.9,
        expand: false,
        builder: (context, scrollController) => Padding(
          padding: const EdgeInsets.all(24),
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              Center(
                child: Container(
                  width: 40,
                  height: 4,
                  decoration: BoxDecoration(
                    color: Colors.grey[300],
                    borderRadius: BorderRadius.circular(2),
                  ),
                ),
              ),
              const SizedBox(height: 24),
              Text(
                product.name,
                style: const TextStyle(
                  fontSize: 24,
                  fontWeight: FontWeight.bold,
                ),
              ),
              const SizedBox(height: 8),
              Text(
                '\$${product.price.toStringAsFixed(2)}',
                style: const TextStyle(
                  fontSize: 20,
                  color: Colors.green,
                  fontWeight: FontWeight.bold,
                ),
              ),
              const SizedBox(height: 16),
              Text(
                languageProvider.t('description'),
                style: TextStyle(
                  fontSize: 16,
                  fontWeight: FontWeight.bold,
                  color: Colors.grey[700],
                ),
              ),
              const SizedBox(height: 8),
              Text(
                product.description,
                style: TextStyle(color: Colors.grey[600]),
              ),
              const SizedBox(height: 16),
              Row(
                children: [
                  Expanded(
                    child: Column(
                      crossAxisAlignment: CrossAxisAlignment.start,
                      children: [
                        Text(
                          languageProvider.t('stock'),
                          style: TextStyle(color: Colors.grey[600]),
                        ),
                        Text(
                          '${product.stock} units',
                          style: const TextStyle(
                            fontWeight: FontWeight.bold,
                            fontSize: 16,
                          ),
                        ),
                      ],
                    ),
                  ),
                  Expanded(
                    child: Column(
                      crossAxisAlignment: CrossAxisAlignment.start,
                      children: [
                        Text(
                          languageProvider.t('category'),
                          style: TextStyle(color: Colors.grey[600]),
                        ),
                        Text(
                          product.categoryName,
                          style: const TextStyle(
                            fontWeight: FontWeight.bold,
                            fontSize: 16,
                          ),
                        ),
                      ],
                    ),
                  ),
                ],
              ),
              const Spacer(),
              Row(
                children: [
                  Expanded(
                    child: OutlinedButton.icon(
                      onPressed: () {
                        Navigator.pop(context);
                        _showEditProduct(context, product);
                      },
                      icon: const Icon(Icons.edit),
                      label: Text(languageProvider.t('ok')),
                    ),
                  ),
                  const SizedBox(width: 16),
                  Expanded(
                    child: ElevatedButton.icon(
                      onPressed: () {
                        Navigator.pop(context);
                        _confirmDelete(context, product, languageProvider);
                      },
                      icon: const Icon(Icons.delete),
                      label: Text(languageProvider.t('error')),
                      style: ElevatedButton.styleFrom(
                        backgroundColor: Colors.red,
                        foregroundColor: Colors.white,
                      ),
                    ),
                  ),
                ],
              ),
            ],
          ),
        ),
      ),
    );
  }

  void _showEditProduct(BuildContext context, Product product) async {
    final result = await Navigator.push(
      context,
      MaterialPageRoute(
        builder: (context) => AddProductScreen(product: product),
      ),
    );

    // បើកែសម្រេច ត្រូវ Refresh ផលិតផល
    if (result == true && context.mounted) {
      _loadProducts();
    }
  }

  void _confirmDelete(
    BuildContext context,
    Product product,
    LanguageProvider languageProvider,
  ) {
    showDialog(
      context: context,
      builder: (context) => AlertDialog(
        title: Text(languageProvider.t('delete_product')),
        content: Text(
          '${languageProvider.t('confirm_delete_product')} "${product.name}"?',
        ),
        actions: [
          TextButton(
            onPressed: () => Navigator.pop(context),
            child: Text(languageProvider.t('cancel')),
          ),
          ElevatedButton(
            onPressed: () {
              Navigator.pop(context);
              ScaffoldMessenger.of(context).showSnackBar(
                SnackBar(content: Text('${product.name} deleted')),
              );
            },
            style: ElevatedButton.styleFrom(
              backgroundColor: Colors.red,
              foregroundColor: Colors.white,
            ),
            child: Text(languageProvider.t('error')),
          ),
        ],
      ),
    );
  }
}
