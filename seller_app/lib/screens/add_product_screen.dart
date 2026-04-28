import 'dart:convert';
import 'package:flutter/material.dart';
import 'package:http/http.dart' as http;
import 'package:provider/provider.dart';
import 'package:seller_app/models/product.dart';
import 'package:seller_app/config/api_config.dart';
import 'package:seller_app/services/api_service.dart';
import 'package:seller_app/providers/language_provider.dart';

class AddProductScreen extends StatefulWidget {
  final Product? product;

  const AddProductScreen({super.key, this.product});

  @override
  State<AddProductScreen> createState() => _AddProductScreenState();
}

class _AddProductScreenState extends State<AddProductScreen> {
  final _formKey = GlobalKey<FormState>();
  late TextEditingController _nameController;
  late TextEditingController _descriptionController;
  late TextEditingController _priceController;
  late TextEditingController _stockController;
  String _selectedCategory = 'Electronics';
  List<String> _categories = [];
  bool _isLoadingCategories = false;

  @override
  void initState() {
    super.initState();
    _nameController = TextEditingController(text: widget.product?.name ?? '');
    _descriptionController = TextEditingController(
      text: widget.product?.description ?? '',
    );
    _priceController = TextEditingController(
      text: widget.product?.price.toString() ?? '',
    );
    _stockController = TextEditingController(
      text: widget.product?.stock.toString() ?? '',
    );

    // កែប្រែ category ពី Map មកជា String
    if (widget.product != null) {
      final category = widget.product!.category;
      if (category is Map) {
        _selectedCategory = category['name']?.toString() ?? 'Electronics';
      } else if (category is String) {
        _selectedCategory = category;
      } else {
        _selectedCategory = 'Electronics';
      }
    } else {
      _selectedCategory = 'Electronics';
    }

    // Load categories ពី API
    _loadCategories();
  }

  Future<void> _loadCategories() async {
    setState(() {
      _isLoadingCategories = true;
    });

    try {
      final apiService = ApiService();
      print('🔍 Loading categories from API...');
      final categoriesList = await apiService.getCategoriesList();
      print('✅ Categories loaded: ${categoriesList.length} items');
      print('📦 Data: $categoriesList');

      if (mounted) {
        final categoryNames = categoriesList
            .map((c) => c['name'] as String)
            .where((name) => name.isNotEmpty)
            .toSet()
            .toList();

        setState(() {
          _categories = categoryNames;
          // បើ category ដែលបានជ្រើសមិនមានក្នុង list ត្រឡប់ទៅ Electronics
          if (!_categories.contains(_selectedCategory)) {
            _selectedCategory = _categories.isNotEmpty
                ? _categories.first
                : 'Electronics';
          }
          _isLoadingCategories = false;
        });
      }
    } catch (e) {
      print('❌ Error loading categories: $e');
      // Fallback បើ API មានបញ្ហា
      if (mounted) {
        setState(() {
          _categories = ['Electronics', 'Clothing', 'Food', 'Home', 'Other'];
          _isLoadingCategories = false;
        });
      }
    }
  }

  @override
  void dispose() {
    _nameController.dispose();
    _descriptionController.dispose();
    _priceController.dispose();
    _stockController.dispose();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    final isEditing = widget.product != null;
    final languageProvider = context.watch<LanguageProvider>();

    return Scaffold(
      appBar: AppBar(
        title: Text(
          isEditing
              ? languageProvider.t('edit')
              : languageProvider.t('products'),
        ),
      ),
      body: Form(
        key: _formKey,
        child: ListView(
          padding: const EdgeInsets.all(16),
          children: [
            // Image Upload Placeholder
            _buildImageUpload(),
            const SizedBox(height: 24),

            // Product Name
            TextFormField(
              controller: _nameController,
              decoration: InputDecoration(
                labelText: languageProvider.t('products'),
                hintText: languageProvider.t('products'),
                prefixIcon: const Icon(Icons.label),
              ),
              validator: (value) {
                if (value == null || value.isEmpty) {
                  return languageProvider.t('error');
                }
                return null;
              },
            ),
            const SizedBox(height: 16),

            // Category
            _isLoadingCategories
                ? const CircularProgressIndicator()
                : DropdownButtonFormField<String>(
                    initialValue: _categories.contains(_selectedCategory)
                        ? _selectedCategory
                        : (_categories.isNotEmpty ? _categories.first : null),
                    decoration: InputDecoration(
                      labelText: languageProvider.t('category'),
                      prefixIcon: const Icon(Icons.category),
                    ),
                    items: _categories.map((category) {
                      return DropdownMenuItem(
                        value: category,
                        child: Text(category),
                      );
                    }).toList(),
                    onChanged: _categories.isEmpty
                        ? null
                        : (value) {
                            setState(() {
                              _selectedCategory = value!;
                            });
                          },
                  ),
            const SizedBox(height: 16),

            // Description
            TextFormField(
              controller: _descriptionController,
              decoration: InputDecoration(
                labelText: languageProvider.t('products'),
                hintText: languageProvider.t('products'),
                prefixIcon: const Icon(Icons.description),
                alignLabelWithHint: true,
              ),
              maxLines: 4,
              validator: (value) {
                if (value == null || value.isEmpty) {
                  return languageProvider.t('error');
                }
                return null;
              },
            ),
            const SizedBox(height: 16),

            // Price and Stock Row
            Row(
              children: [
                Expanded(
                  child: TextFormField(
                    controller: _priceController,
                    decoration: InputDecoration(
                      labelText: languageProvider.t('price'),
                      hintText: '0.00',
                      prefixIcon: const Icon(Icons.attach_money),
                      prefixText: '\$ ',
                    ),
                    keyboardType: TextInputType.number,
                    validator: (value) {
                      if (value == null || value.isEmpty) {
                        return languageProvider.t('error');
                      }
                      if (double.tryParse(value) == null) {
                        return 'Invalid price';
                      }
                      return null;
                    },
                  ),
                ),
                const SizedBox(width: 16),
                Expanded(
                  child: TextFormField(
                    controller: _stockController,
                    decoration: InputDecoration(
                      labelText: languageProvider.t('stock'),
                      hintText: '0',
                      prefixIcon: const Icon(Icons.inventory_2),
                    ),
                    keyboardType: TextInputType.number,
                    validator: (value) {
                      if (value == null || value.isEmpty) {
                        return languageProvider.t('error');
                      }
                      if (int.tryParse(value) == null) {
                        return 'Invalid stock';
                      }
                      return null;
                    },
                  ),
                ),
              ],
            ),
            const SizedBox(height: 32),

            // Save Button
            ElevatedButton(
              onPressed: _saveProduct,
              style: ElevatedButton.styleFrom(
                padding: const EdgeInsets.symmetric(vertical: 16),
                shape: RoundedRectangleBorder(
                  borderRadius: BorderRadius.circular(12),
                ),
              ),
              child: Text(
                isEditing
                    ? languageProvider.t('save')
                    : languageProvider.t('save'),
                style: const TextStyle(fontSize: 16),
              ),
            ),
          ],
        ),
      ),
    );
  }

  Widget _buildImageUpload() {
    final languageProvider = context.watch<LanguageProvider>();
    return GestureDetector(
      onTap: () {
        ScaffoldMessenger.of(
          context,
        ).showSnackBar(SnackBar(content: Text(languageProvider.t('loading'))));
      },
      child: Container(
        height: 200,
        decoration: BoxDecoration(
          color: Colors.grey[200],
          borderRadius: BorderRadius.circular(12),
          border: Border.all(color: Colors.grey[300]!, width: 2),
        ),
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            Icon(Icons.add_photo_alternate, size: 50, color: Colors.grey[400]),
            const SizedBox(height: 8),
            Text(
              languageProvider.t('add_to_cart'),
              style: TextStyle(color: Colors.grey[600], fontSize: 14),
            ),
          ],
        ),
      ),
    );
  }

  void _saveProduct() async {
    if (!_formKey.currentState!.validate()) return;

    final languageProvider = context.read<LanguageProvider>();

    // បង្ហាញ Loading
    showDialog(
      context: context,
      barrierDismissible: false,
      builder: (context) => const Center(child: CircularProgressIndicator()),
    );

    try {
      // បង្កើត Data ដើម្បីផ្ញើ
      final productData = {
        'name': _nameController.text,
        'description': _descriptionController.text,
        'price': double.tryParse(_priceController.text) ?? 0,
        'stock': int.tryParse(_stockController.text) ?? 0,
        'category': _selectedCategory,
      };

      http.Response response;

      if (widget.product != null) {
        // UPDATE - កែផលិតផលចាស់
        response = await http
            .put(
              Uri.parse('${ApiConfig.baseUrl}/products/${widget.product!.id}'),
              headers: {'Content-Type': 'application/json'},
              body: json.encode(productData),
            )
            .timeout(const Duration(seconds: 10));
      } else {
        // CREATE - បង្កើតផលិតផលថ្មី
        response = await http
            .post(
              Uri.parse('${ApiConfig.baseUrl}/products'),
              headers: {'Content-Type': 'application/json'},
              body: json.encode(productData),
            )
            .timeout(const Duration(seconds: 10));
      }

      // បិទ Loading
      if (context.mounted) Navigator.pop(context);

      final result = json.decode(response.body);

      if (!context.mounted) return;

      if (response.statusCode == 200 || response.statusCode == 201) {
        // ជោគជ័យ
        ScaffoldMessenger.of(context).showSnackBar(
          SnackBar(
            content: Text(
              widget.product != null
                  ? languageProvider.t('success')
                  : languageProvider.t('success'),
            ),
            backgroundColor: Colors.green,
          ),
        );
        Navigator.pop(context, true); // ត្រឡប់ទើប Refresh
      } else {
        // បរាជ័យ
        ScaffoldMessenger.of(context).showSnackBar(
          SnackBar(
            content: Text(
              '${languageProvider.t('error')}: ${result['message'] ?? languageProvider.t('error')}',
            ),
            backgroundColor: Colors.red,
          ),
        );
      }
    } catch (e) {
      // បិទ Loading
      if (context.mounted) Navigator.pop(context);

      if (!context.mounted) return;

      // បង្ហាញ Error
      ScaffoldMessenger.of(context).showSnackBar(
        SnackBar(
          content: Text('${languageProvider.t('error')}: ${e.toString()}'),
          backgroundColor: Colors.red,
        ),
      );
    }
  }
}
