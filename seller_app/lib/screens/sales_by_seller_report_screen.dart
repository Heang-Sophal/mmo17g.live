import 'package:flutter/material.dart';
import 'package:flutter/services.dart' show rootBundle;
import 'package:provider/provider.dart';
import 'package:seller_app/config/api_config.dart';
import 'package:seller_app/providers/auth_provider.dart';
import 'package:seller_app/providers/language_provider.dart';
import 'package:http/http.dart' as http;
import 'dart:convert';
import 'dart:io';
import 'dart:typed_data';
import 'dart:ui' as ui;
import 'package:pdf/pdf.dart';
import 'package:pdf/widgets.dart' as pw;
import 'package:path_provider/path_provider.dart';
import 'package:open_file/open_file.dart';
import 'package:excel/excel.dart' as excel_lib;

class SalesBySellerReportScreen extends StatefulWidget {
  const SalesBySellerReportScreen({super.key, this.menuButton});

  final Widget? menuButton;

  @override
  State<SalesBySellerReportScreen> createState() =>
      _SalesBySellerReportScreenState();
}

class _SalesBySellerReportScreenState extends State<SalesBySellerReportScreen> {
  bool _isLoading = true;
  String? _error;
  List<Map<String, dynamic>> _reportData = [];
  DateTime _startDate = DateTime.now().subtract(const Duration(days: 30));
  DateTime _endDate = DateTime.now();

  // Totals
  double _totalCost = 0;
  double _totalPaidAmount = 0;
  double _totalShipping = 0;
  double _saleByCash = 0;
  double _saleByKhqr = 0;
  double _totalProfit = 0;
  double _cashDifference = 0;

  @override
  void initState() {
    super.initState();
    _loadReport();
  }

  Future<void> refreshData() => _loadReport();

  Future<void> _loadReport() async {
    final authProvider = Provider.of<AuthProvider>(context, listen: false);
    final token = authProvider.token;

    // Check if user is logged in
    if (token == null || token.isEmpty) {
      final languageProvider = context.read<LanguageProvider>();
      setState(() {
        _error = languageProvider.t('no_data');
        _isLoading = false;
      });
      return;
    }

    setState(() {
      _isLoading = true;
      _error = null;
    });

    try {
      final startDateStr = _formatDateForApi(_startDate);
      final endDateStr = _formatDateForApi(_endDate);

      final url =
          '${ApiConfig.baseUrl}/report/sales_by_seller_mobile'
          '?from=$startDateStr'
          '&to=$endDateStr'
          '&page=1'
          '&limit=1000'
          '&completed_delivery_only=1';

      debugPrint('📡 Sales Report URL: $url');
      debugPrint('🔑 Token: ${token.substring(0, 20)}...');

      final response = await http
          .get(
            Uri.parse(url),
            headers: {
              'Content-Type': 'application/json',
              'Accept': 'application/json',
              'Authorization': 'Bearer $token',
            },
          )
          .timeout(const Duration(seconds: 30));

      if (!mounted) return;

      debugPrint('📥 Response Status: ${response.statusCode}');
      debugPrint(
        '📄 Response Body: ${response.body.substring(0, response.body.length > 500 ? 500 : response.body.length)}',
      );

      // Handle 401 specifically
      if (response.statusCode == 401) {
        // Clear the expired token immediately
        authProvider.signOut().catchError((_) {});
        return;
      }

      // Check if response is valid JSON
      if (!response.body.trim().startsWith('{')) {
        final languageProvider = context.read<LanguageProvider>();
        setState(() {
          _error = languageProvider.t('error');
          _isLoading = false;
        });
        return;
      }

      final data = json.decode(response.body);

      // Handle other error status codes
      if (response.statusCode != 200) {
        final languageProvider = context.read<LanguageProvider>();
        final errorMsg =
            data['message'] ?? data['error'] ?? languageProvider.t('error');
        setState(() {
          _error = '$errorMsg';
          _isLoading = false;
        });
        return;
      }

      // Backend returns: {totalRows, sales, grandTotals, sellers, customers, warehouses}
      final sales = data['sales'];

      if (response.statusCode == 200 && sales != null && sales is List) {
        final salesList = List<Map<String, dynamic>>.from(
          sales,
        ).where(_isCompletedSellerReportRow).toList();

        double totalCost = 0;
        double totalPaidAmount = 0;
        double totalShipping = 0;
        double saleByCash = 0;
        double saleByKhqr = 0;
        double totalProfit = 0;
        double cashDifference = 0;

        // Prefer server-computed grandTotals (accurate across all pages).
        // Formulas mirror the web app:
        //   Total Paid Amount = paid_amount - shipping  (product revenue only)
        //   Sale By Cash/KHQR = paid_amount - shipping  (no shipping included)
        //   Profit            = Total Paid Amount - Total Cost - Total Shipping
        //   Cash Difference   = Profit - Sale By KHQR
        if (data['grandTotals'] != null) {
          final gt = data['grandTotals'] as Map<String, dynamic>;
          totalCost = (gt['totalCost'] ?? 0).toDouble();
          totalPaidAmount = (gt['totalPaidAmount'] ?? 0).toDouble();
          totalShipping = (gt['totalShipping'] ?? 0).toDouble();
          saleByCash = (gt['saleByCash'] ?? 0).toDouble();
          saleByKhqr = (gt['saleByKhqr'] ?? 0).toDouble();
          totalProfit = (gt['totalProfit'] ?? 0).toDouble();
          cashDifference = (gt['cashDifference'] ?? 0).toDouble();
        } else {
          // Fallback: compute locally with corrected formulas
          for (var row in salesList) {
            final cost = (row['product_cost'] ?? 0).toDouble();
            final paidAmount = (row['paid_amount'] ?? 0).toDouble();
            final shipping = (row['shipping'] ?? 0).toDouble();
            final payMethod = (row['payment_method'] ?? '')
                .toString()
                .toLowerCase();

            totalCost += cost;
            totalShipping += shipping;
            // Total Paid Amount excludes shipping
            totalPaidAmount += paidAmount;

            // Sale By Cash / KHQR exclude shipping (paidAmount already excludes it per row)
            if (payMethod == 'cash') {
              saleByCash += paidAmount;
            } else if (payMethod == 'khqr') {
              saleByKhqr += paidAmount;
            }
          }
          // Profit = Total Paid Amount - Total Cost - Total Shipping
          totalProfit = totalPaidAmount - totalCost - totalShipping;
          // Cash Difference = Profit - Sale By KHQR
          cashDifference = totalProfit - saleByKhqr;
        }

        setState(() {
          _reportData = salesList;
          _totalCost = totalCost;
          _totalPaidAmount = totalPaidAmount;
          _totalShipping = totalShipping;
          _saleByCash = saleByCash;
          _saleByKhqr = saleByKhqr;
          _totalProfit = totalProfit;
          _cashDifference = cashDifference;
          _isLoading = false;
        });
      } else {
        final languageProvider = context.read<LanguageProvider>();
        final errorMsg =
            data['message'] ?? data['error'] ?? languageProvider.t('error');
        setState(() {
          _error = errorMsg;
          _isLoading = false;
        });
      }
    } catch (e) {
      if (!mounted) return;
      final languageProvider = context.read<LanguageProvider>();
      setState(() {
        _error = languageProvider.t('error');
        _isLoading = false;
      });
    }
  }

  PopupMenuItem<String> _dateShortcutItem(
    String value,
    IconData icon,
    String label,
  ) {
    return PopupMenuItem(
      value: value,
      child: Row(
        children: [
          Icon(icon, size: 18),
          const SizedBox(width: 10),
          Text(label),
        ],
      ),
    );
  }

  void _applyDateShortcut(String shortcut) {
    final now = DateTime.now();
    final today = DateTime(now.year, now.month, now.day);

    switch (shortcut) {
      case 'today':
        setState(() {
          _startDate = today;
          _endDate = today;
        });
        _loadReport();
      case 'yesterday':
        final yesterday = today.subtract(const Duration(days: 1));
        setState(() {
          _startDate = yesterday;
          _endDate = yesterday;
        });
        _loadReport();
      case 'this_week':
        final weekStart = today.subtract(Duration(days: today.weekday - 1));
        setState(() {
          _startDate = weekStart;
          _endDate = today;
        });
        _loadReport();
      case 'this_month':
        setState(() {
          _startDate = DateTime(now.year, now.month, 1);
          _endDate = today;
        });
        _loadReport();
      case 'custom':
        _selectDateRange();
    }
  }

  Future<void> _selectDateRange() async {
    final picked = await showDateRangePicker(
      context: context,
      firstDate: DateTime(2020),
      lastDate: DateTime.now(),
      initialDateRange: DateTimeRange(start: _startDate, end: _endDate),
    );

    if (picked != null) {
      setState(() {
        _startDate = picked.start;
        _endDate = picked.end;
      });
      _loadReport();
    }
  }

  @override
  Widget build(BuildContext context) {
    final theme = Theme.of(context);
    final isDark = theme.brightness == Brightness.dark;
    final languageProvider = context.watch<LanguageProvider>();

    return Scaffold(
      appBar: AppBar(
        leading: widget.menuButton,
        leadingWidth: widget.menuButton != null ? 96 : null,
        title: Text(languageProvider.t('sales_by_seller')),
        actions: [
          if (_reportData.isNotEmpty)
            PopupMenuButton<String>(
              onSelected: (value) {
                if (value == 'pdf') {
                  _exportPDF();
                } else if (value == 'excel') {
                  _exportExcel();
                }
              },
              icon: const Icon(Icons.file_download),
              tooltip: languageProvider.t('export_pdf'),
              itemBuilder: (context) => [
                PopupMenuItem(
                  value: 'pdf',
                  child: Row(
                    children: [
                      const Icon(Icons.picture_as_pdf, color: Colors.red),
                      const SizedBox(width: 8),
                      Text(languageProvider.t('export_pdf')),
                    ],
                  ),
                ),
                PopupMenuItem(
                  value: 'excel',
                  child: Row(
                    children: [
                      const Icon(Icons.table_chart, color: Colors.green),
                      const SizedBox(width: 8),
                      Text(languageProvider.t('export_excel')),
                    ],
                  ),
                ),
              ],
            ),
          PopupMenuButton<String>(
            icon: const Icon(Icons.calendar_month),
            tooltip: languageProvider.t('select_date_range'),
            onSelected: (value) => _applyDateShortcut(value),
            itemBuilder: (context) => [
              _dateShortcutItem(
                'today',
                Icons.today,
                languageProvider.t('today'),
              ),
              _dateShortcutItem(
                'yesterday',
                Icons.history,
                languageProvider.t('yesterday'),
              ),
              _dateShortcutItem(
                'this_week',
                Icons.view_week,
                languageProvider.t('this_week'),
              ),
              _dateShortcutItem(
                'this_month',
                Icons.calendar_month,
                languageProvider.t('this_month'),
              ),
              const PopupMenuDivider(),
              _dateShortcutItem(
                'custom',
                Icons.date_range,
                languageProvider.t('custom_range'),
              ),
            ],
          ),
          IconButton(
            icon: const Icon(Icons.refresh),
            onPressed: _loadReport,
            tooltip: languageProvider.t('loading'),
          ),
        ],
      ),
      body: _isLoading
          ? const Center(child: CircularProgressIndicator())
          : _error != null
          ? _buildErrorState()
          : _buildReport(isDark, languageProvider),
    );
  }

  Widget _buildErrorState() {
    final languageProvider = context.read<LanguageProvider>();
    return Center(
      child: Column(
        mainAxisAlignment: MainAxisAlignment.center,
        children: [
          Icon(Icons.error_outline, size: 64, color: Colors.red[300]),
          const SizedBox(height: 16),
          Text(
            _error!,
            style: TextStyle(color: Colors.grey[600], fontSize: 16),
            textAlign: TextAlign.center,
          ),
          const SizedBox(height: 16),
          ElevatedButton(
            onPressed: _loadReport,
            child: Text(languageProvider.t('retry')),
          ),
        ],
      ),
    );
  }

  Widget _buildReport(bool isDark, LanguageProvider languageProvider) {
    final theme = Theme.of(context);

    return Column(
      children: [
        // Date Range Banner
        Container(
          width: double.infinity,
          padding: const EdgeInsets.all(12),
          color: isDark
              ? const Color(0xFF16213E)
              : const Color(0xFF6C63FF).withValues(alpha: 0.1),
          child: Row(
            children: [
              Icon(Icons.calendar_today, color: theme.colorScheme.primary),
              const SizedBox(width: 8),
              Text(
                '${_formatDateForApi(_startDate)} - ${_formatDateForApi(_endDate)}',
                style: TextStyle(
                  color: theme.colorScheme.primary,
                  fontWeight: FontWeight.bold,
                ),
              ),
            ],
          ),
        ),

        // Report Table
        Expanded(
          child: _reportData.isEmpty
              ? Center(
                  child: Column(
                    mainAxisAlignment: MainAxisAlignment.center,
                    children: [
                      Icon(
                        Icons.receipt_long,
                        size: 64,
                        color: Colors.grey[400],
                      ),
                      const SizedBox(height: 16),
                      Text(
                        languageProvider.t('no_data'),
                        style: TextStyle(fontSize: 18, color: Colors.grey[600]),
                      ),
                    ],
                  ),
                )
              : SingleChildScrollView(
                  scrollDirection: Axis.horizontal,
                  child: SingleChildScrollView(
                    child: DataTable(
                      columns: [
                        DataColumn(
                          label: Text(languageProvider.t('order_date')),
                        ),
                        DataColumn(
                          label: Text(languageProvider.t('order_ref')),
                        ),
                        DataColumn(
                          label: Text(languageProvider.t('customer_name')),
                        ),
                        DataColumn(label: Text(languageProvider.t('phone'))),
                        DataColumn(label: Text(languageProvider.t('location'))),
                        DataColumn(label: Text(languageProvider.t('product'))),
                        DataColumn(
                          label: Text(languageProvider.t('returned_product')),
                        ),
                        DataColumn(label: Text(languageProvider.t('quantity'))),
                        DataColumn(label: Text(languageProvider.t('price'))),
                        DataColumn(label: Text(languageProvider.t('paid'))),
                        DataColumn(label: Text(languageProvider.t('shipping'))),
                        DataColumn(
                          label: Text(languageProvider.t('pay_method')),
                        ),
                        DataColumn(label: Text(languageProvider.t('seller'))),
                      ],
                      rows: _reportData.map((row) {
                        return DataRow(
                          cells: [
                            DataCell(
                              Text(_formatDate(row['datetime'] ?? row['date'])),
                            ),
                            DataCell(Text(row['Ref'] ?? '')),
                            DataCell(Text(_customerName(row))),
                            DataCell(Text(_customerPhone(row))),
                            DataCell(Text(_customerLocation(row))),
                            DataCell(Text(_textValue(row['product_name']))),
                            DataCell(Text(_returnedProductText(row))),
                            DataCell(
                              Text(row['product_qty']?.toString() ?? '0'),
                            ),
                            DataCell(
                              Text('\$${_formatMoney(row['product_cost'])}'),
                            ),
                            DataCell(
                              Text('\$${_formatMoney(row['paid_amount'])}'),
                            ),
                            DataCell(
                              Text('\$${_formatMoney(row['shipping'])}'),
                            ),
                            DataCell(
                              Text(
                                _paymentMethodText(
                                  row['payment_method'],
                                  languageProvider,
                                ),
                              ),
                            ),
                            DataCell(Text(_textValue(row['seller_name']))),
                          ],
                        );
                      }).toList(),
                    ),
                  ),
                ),
        ),

        // Summary Card
        Container(
          padding: const EdgeInsets.all(12),
          decoration: BoxDecoration(
            color: isDark ? const Color(0xFF16213E) : Colors.grey[100],
            border: Border(
              top: BorderSide(
                color: isDark ? Colors.white10 : Colors.grey[300]!,
              ),
            ),
          ),
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.stretch,
            children: [
              Row(
                mainAxisAlignment: MainAxisAlignment.spaceAround,
                children: [
                  _buildSummaryItem(
                    languageProvider.t('total_cost'),
                    _totalCost,
                    Colors.red,
                  ),
                  _buildSummaryItem(
                    languageProvider.t('total_paid'),
                    _totalPaidAmount,
                    Colors.blue,
                  ),
                  _buildSummaryItem(
                    languageProvider.t('total_shipping'),
                    _totalShipping,
                    Colors.orange,
                  ),
                  _buildSummaryItem(
                    languageProvider.t('profit'),
                    _totalProfit,
                    _totalProfit >= 0 ? Colors.green : Colors.red,
                  ),
                ],
              ),
              const SizedBox(height: 12),
              Row(
                mainAxisAlignment: MainAxisAlignment.spaceAround,
                children: [
                  _buildSummaryItem(
                    languageProvider.t('sale_by_cash'),
                    _saleByCash,
                    Colors.green,
                  ),
                  _buildSummaryItem(
                    languageProvider.t('sale_by_khqr'),
                    _saleByKhqr,
                    const Color(0xFF17a2b8),
                  ),
                ],
              ),
              const SizedBox(height: 8),
              Padding(
                padding: const EdgeInsets.symmetric(horizontal: 16),
                child: Container(
                  padding: const EdgeInsets.all(12),
                  decoration: BoxDecoration(
                    color: _cashDifference >= 0
                        ? const Color(0xFFd4edda)
                        : const Color(0xFFf8d7da),
                    borderRadius: BorderRadius.circular(21),
                    border: Border.all(
                      color: _cashDifference >= 0 ? Colors.green : Colors.red,
                      width: 2,
                    ),
                  ),
                  child: Text(
                    _cashDifferenceLine(languageProvider),
                    style: TextStyle(
                      fontSize: 16,
                      fontWeight: FontWeight.bold,
                      color: _cashDifference >= 0
                          ? const Color(0xFF0a2e12)
                          : const Color(0xFF3d0c10),
                    ),
                    textAlign: TextAlign.center,
                  ),
                ),
              ),
            ],
          ),
        ),
      ],
    );
  }

  Widget _buildSummaryItem(String label, double amount, Color color) {
    return Column(
      children: [
        Text(label, style: TextStyle(fontSize: 11, color: Colors.grey[600])),
        const SizedBox(height: 2),
        Text(
          '\$${_formatMoney(amount)}',
          style: TextStyle(
            fontSize: 14,
            fontWeight: FontWeight.bold,
            color: color,
          ),
        ),
      ],
    );
  }

  String _formatDate(dynamic dateValue) {
    if (dateValue == null) return '';
    try {
      final date = dateValue is DateTime
          ? dateValue
          : DateTime.parse(dateValue.toString());
      return '${date.month.toString().padLeft(2, '0')}/${date.day.toString().padLeft(2, '0')}/${date.year}';
    } catch (e) {
      return dateValue.toString();
    }
  }

  String _formatDateForApi(DateTime date) {
    return '${date.year}-${date.month.toString().padLeft(2, '0')}-${date.day.toString().padLeft(2, '0')}';
  }

  String _formatMoney(dynamic value) {
    if (value == null) return '0.00';
    final num = double.tryParse(value.toString()) ?? 0.0;
    return num.toStringAsFixed(2);
  }

  String _textValue(dynamic value, {String fallback = '-'}) {
    final text = value?.toString().trim() ?? '';
    return text.isEmpty ? fallback : text;
  }

  String _reportTitle(LanguageProvider languageProvider) {
    return '${languageProvider.t('sales_by_seller_report')}: '
        '${_formatDateForApi(_startDate)} - ${_formatDateForApi(_endDate)}';
  }

  String _moneyLine(
    LanguageProvider languageProvider,
    String labelKey,
    double amount,
  ) {
    return '${languageProvider.t(labelKey)}: \$${_formatMoney(amount)}';
  }

  String _cashDifferenceLine(LanguageProvider languageProvider) {
    final labelKey = _cashDifference >= 0 ? 'cash_from_boss' : 'cash_to_boss';
    return '${languageProvider.t(labelKey)}: '
        '\$${_formatMoney(_cashDifference.abs())}';
  }

  String _paymentMethodText(dynamic value, LanguageProvider languageProvider) {
    final normalized = value?.toString().trim().toLowerCase() ?? '';
    if (normalized.isEmpty) return '-';
    if (normalized == 'cash' || normalized == 'cod') {
      return languageProvider.t('cash');
    }
    if (normalized == 'khqr') return languageProvider.t('khqr');
    return value.toString();
  }

  bool _isCompletedSellerReportRow(Map<String, dynamic> row) {
    final status = row['shipping_status']?.toString().trim().toLowerCase();
    if (status == null || status.isEmpty) return true;
    return status == 'delivered';
  }

  String _customerName(Map<String, dynamic> row) {
    return _textValue(row['customer_name'] ?? row['client_name']);
  }

  String _customerPhone(Map<String, dynamic> row) {
    return _textValue(
      row['customer_phone'] ?? row['client_phone'],
      fallback: '-',
    );
  }

  String _customerLocation(Map<String, dynamic> row) {
    return _textValue(
      row['customer_address'] ?? row['client_address'],
      fallback: '-',
    );
  }

  String _returnedProductText(Map<String, dynamic> row) {
    return _textValue(
      row['returned_product'] ?? row['returned_products'],
      fallback: '-',
    );
  }

  Future<void> _exportPDF() async {
    if (_reportData.isEmpty) return;

    final languageProvider = context.read<LanguageProvider>();
    final loading = _showLoading(languageProvider.t('exporting_pdf'));

    try {
      final kantumruyData = await rootBundle.load(
        'assets/fonts/KantumruyPro.ttf',
      );
      final notoRegularData = await rootBundle.load(
        'assets/fonts/NotoSans-Regular.ttf',
      );
      final khmerData = await rootBundle.load(
        'assets/fonts/NotoSansKhmer-Regular.ttf',
      );
      final kantumruyFont = pw.Font.ttf(kantumruyData);
      final notoRegular = pw.Font.ttf(notoRegularData);
      final khmerFont = pw.Font.ttf(khmerData);

      pw.TextStyle style({
        double fontSize = 9,
        pw.FontWeight fontWeight = pw.FontWeight.normal,
        PdfColor? color,
      }) => pw.TextStyle(
        font: kantumruyFont,
        fontFallback: [notoRegular, khmerFont],
        fontSize: fontSize,
        fontWeight: fontWeight,
        color: color,
      );

      final pdf = pw.Document();
      final imageTextCache = <String, _PdfTextImage>{};
      final columns = <_PdfColumnSpec>[
        _PdfColumnSpec(
          label: languageProvider.t('order_date'),
          width: 48,
          alignment: pw.Alignment.centerLeft,
          textAlign: pw.TextAlign.left,
        ),
        _PdfColumnSpec(
          label: languageProvider.t('order_ref'),
          width: 42,
          alignment: pw.Alignment.center,
          textAlign: pw.TextAlign.center,
        ),
        _PdfColumnSpec(
          label: languageProvider.t('customer_name'),
          width: 78,
          alignment: pw.Alignment.centerLeft,
          textAlign: pw.TextAlign.left,
        ),
        _PdfColumnSpec(
          label: languageProvider.t('phone'),
          width: 55,
          alignment: pw.Alignment.centerLeft,
          textAlign: pw.TextAlign.left,
        ),
        _PdfColumnSpec(
          label: languageProvider.t('location'),
          width: 95,
          alignment: pw.Alignment.centerLeft,
          textAlign: pw.TextAlign.left,
        ),
        _PdfColumnSpec(
          label: languageProvider.t('product'),
          width: 85,
          alignment: pw.Alignment.centerLeft,
          textAlign: pw.TextAlign.left,
        ),
        _PdfColumnSpec(
          label: languageProvider.t('returned_product'),
          width: 65,
          alignment: pw.Alignment.centerLeft,
          textAlign: pw.TextAlign.left,
        ),
        _PdfColumnSpec(
          label: languageProvider.t('quantity'),
          width: 28,
          alignment: pw.Alignment.center,
          textAlign: pw.TextAlign.center,
        ),
        _PdfColumnSpec(
          label: languageProvider.t('price'),
          width: 42,
          alignment: pw.Alignment.centerRight,
          textAlign: pw.TextAlign.right,
        ),
        _PdfColumnSpec(
          label: languageProvider.t('paid'),
          width: 42,
          alignment: pw.Alignment.centerRight,
          textAlign: pw.TextAlign.right,
        ),
        _PdfColumnSpec(
          label: languageProvider.t('shipping'),
          width: 35,
          alignment: pw.Alignment.centerRight,
          textAlign: pw.TextAlign.right,
        ),
        _PdfColumnSpec(
          label: languageProvider.t('pay_method'),
          width: 36,
          alignment: pw.Alignment.center,
          textAlign: pw.TextAlign.center,
        ),
        _PdfColumnSpec(
          label: languageProvider.t('seller'),
          width: 60,
          alignment: pw.Alignment.centerLeft,
          textAlign: pw.TextAlign.left,
        ),
      ];
      final tableRows = <pw.TableRow>[
        pw.TableRow(
          repeat: true,
          decoration: const pw.BoxDecoration(color: PdfColors.blueGrey800),
          children: await _pdfTableCells(
            columns.map((column) => column.label).toList(),
            columns,
            imageTextCache,
            textStyle: style(
              fontSize: 7,
              fontWeight: pw.FontWeight.bold,
              color: PdfColors.white,
            ),
            fontSize: 7,
            flutterFontWeight: FontWeight.w700,
            flutterColor: Colors.white,
          ),
        ),
      ];

      for (final row in _reportData) {
        tableRows.add(
          pw.TableRow(
            children: await _pdfTableCells(
              [
                _formatDate(row['datetime'] ?? row['date']),
                (row['Ref'] ?? '').toString(),
                _customerName(row),
                _customerPhone(row),
                _customerLocation(row),
                _textValue(row['product_name']),
                _returnedProductText(row),
                (row['product_qty'] ?? '0').toString(),
                '\$${_formatMoney(row['product_cost'])}',
                '\$${_formatMoney(row['paid_amount'])}',
                '\$${_formatMoney(row['shipping'])}',
                _paymentMethodText(row['payment_method'], languageProvider),
                _textValue(row['seller_name']),
              ],
              columns,
              imageTextCache,
              textStyle: style(fontSize: 7),
              fontSize: 7,
            ),
          ),
        );
      }

      final reportTitle = await _pdfTextWidget(
        _reportTitle(languageProvider),
        imageTextCache,
        textStyle: style(fontSize: 10, color: PdfColors.grey700),
        fontSize: 10,
        flutterColor: const Color(0xFF616161),
        maxWidth: 520,
        textAlign: pw.TextAlign.right,
        alignment: pw.Alignment.centerRight,
      );
      final footerPageLabel = await _pdfTextWidget(
        languageProvider.t('page'),
        imageTextCache,
        textStyle: style(fontSize: 8),
        fontSize: 8,
        maxWidth: 46,
      );
      final footerOfLabel = await _pdfTextWidget(
        languageProvider.t('of'),
        imageTextCache,
        textStyle: style(fontSize: 8),
        fontSize: 8,
        maxWidth: 28,
        textAlign: pw.TextAlign.center,
        alignment: pw.Alignment.center,
      );
      final totalCostSummary = await _pdfSummaryItem(
        _moneyLine(languageProvider, 'total_cost', _totalCost),
        PdfColors.red,
        Colors.red,
        style,
        imageTextCache,
      );
      final totalPaidSummary = await _pdfSummaryItem(
        _moneyLine(languageProvider, 'total_paid', _totalPaidAmount),
        PdfColors.blue,
        Colors.blue,
        style,
        imageTextCache,
      );
      final totalShippingSummary = await _pdfSummaryItem(
        _moneyLine(languageProvider, 'total_shipping', _totalShipping),
        PdfColors.orange,
        Colors.orange,
        style,
        imageTextCache,
      );
      final profitSummary = await _pdfSummaryItem(
        _moneyLine(languageProvider, 'profit', _totalProfit),
        _totalProfit >= 0 ? PdfColors.green : PdfColors.red,
        _totalProfit >= 0 ? Colors.green : Colors.red,
        style,
        imageTextCache,
      );
      final saleByCashSummary = await _pdfSummaryItem(
        _moneyLine(languageProvider, 'sale_by_cash', _saleByCash),
        PdfColors.green,
        Colors.green,
        style,
        imageTextCache,
      );
      final saleByKhqrSummary = await _pdfSummaryItem(
        _moneyLine(languageProvider, 'sale_by_khqr', _saleByKhqr),
        PdfColors.teal,
        const Color(0xFF00897B),
        style,
        imageTextCache,
      );
      final cashDifferenceSummary = await _pdfTextWidget(
        _cashDifferenceLine(languageProvider),
        imageTextCache,
        textStyle: style(
          fontSize: 10,
          fontWeight: pw.FontWeight.bold,
          color: _cashDifference >= 0 ? PdfColors.green900 : PdfColors.red900,
        ),
        fontSize: 10,
        flutterFontWeight: FontWeight.w700,
        flutterColor: _cashDifference >= 0
            ? const Color(0xFF14532D)
            : const Color(0xFF7F1D1D),
        maxWidth: 720,
        textAlign: pw.TextAlign.center,
        alignment: pw.Alignment.center,
      );

      pdf.addPage(
        pw.MultiPage(
          pageFormat: PdfPageFormat.a4.landscape,
          theme: pw.ThemeData.withFont(
            base: kantumruyFont,
            bold: kantumruyFont,
            fontFallback: [notoRegular, khmerFont],
          ),
          header: (context) => pw.Container(
            alignment: pw.Alignment.centerRight,
            child: reportTitle,
          ),
          footer: (context) => pw.Container(
            alignment: pw.Alignment.centerRight,
            child: pw.Row(
              mainAxisSize: pw.MainAxisSize.min,
              children: [
                footerPageLabel,
                pw.SizedBox(width: 4),
                pw.Text('${context.pageNumber}', style: style(fontSize: 8)),
                pw.SizedBox(width: 4),
                footerOfLabel,
                pw.SizedBox(width: 4),
                pw.Text('${context.pagesCount}', style: style(fontSize: 8)),
              ],
            ),
          ),
          build: (context) => [
            pw.Table(
              border: pw.TableBorder.all(),
              columnWidths: {
                for (var i = 0; i < columns.length; i++)
                  i: pw.FixedColumnWidth(columns[i].width),
              },
              children: tableRows,
            ),
            pw.SizedBox(height: 20),
            pw.Container(
              padding: const pw.EdgeInsets.symmetric(
                horizontal: 10,
                vertical: 8,
              ),
              decoration: pw.BoxDecoration(
                border: pw.Border.all(color: PdfColors.grey400),
                borderRadius: const pw.BorderRadius.all(pw.Radius.circular(5)),
              ),
              child: pw.Column(
                crossAxisAlignment: pw.CrossAxisAlignment.stretch,
                children: [
                  pw.Row(
                    mainAxisAlignment: pw.MainAxisAlignment.spaceAround,
                    children: [
                      totalCostSummary,
                      totalPaidSummary,
                      totalShippingSummary,
                      profitSummary,
                    ],
                  ),
                  pw.SizedBox(height: 6),
                  pw.Row(
                    mainAxisAlignment: pw.MainAxisAlignment.spaceAround,
                    children: [saleByCashSummary, saleByKhqrSummary],
                  ),
                  pw.SizedBox(height: 8),
                  pw.Container(
                    padding: const pw.EdgeInsets.all(6),
                    decoration: pw.BoxDecoration(
                      color: _cashDifference >= 0
                          ? PdfColors.green100
                          : PdfColors.red100,
                      borderRadius: const pw.BorderRadius.all(
                        pw.Radius.circular(4),
                      ),
                      border: pw.Border.all(
                        color: _cashDifference >= 0
                            ? PdfColors.green
                            : PdfColors.red,
                      ),
                    ),
                    child: cashDifferenceSummary,
                  ),
                ],
              ),
            ),
          ],
        ),
      );

      // path_provider uses objective_c FFI on iOS; fall back to the system
      // temp directory if the framework isn't available (e.g. simulator).
      Directory dir;
      try {
        dir = await getApplicationDocumentsDirectory();
      } catch (_) {
        dir = Directory.systemTemp;
      }
      final fileName =
          'sales_report_${_formatDateForApi(_startDate)}_to_${_formatDateForApi(_endDate)}.pdf';
      final filePath = '${dir.path}/$fileName';
      final file = File(filePath);
      await file.writeAsBytes(await pdf.save());

      loading.remove();
      _showSuccess('${languageProvider.t('pdf_saved')}: $fileName');

      try {
        await OpenFile.open(filePath);
      } catch (_) {}
    } catch (e) {
      loading.remove();
      _showError('${languageProvider.t('failed_export_pdf')}: $e');
    }
  }

  Future<List<pw.Widget>> _pdfTableCells(
    List<String> values,
    List<_PdfColumnSpec> columns,
    Map<String, _PdfTextImage> imageTextCache, {
    required pw.TextStyle textStyle,
    required double fontSize,
    FontWeight flutterFontWeight = FontWeight.normal,
    Color flutterColor = Colors.black,
  }) async {
    final cells = <pw.Widget>[];
    for (var i = 0; i < columns.length; i++) {
      cells.add(
        await _pdfTableCell(
          i < values.length ? values[i] : '',
          columns[i],
          imageTextCache,
          textStyle: textStyle,
          fontSize: fontSize,
          flutterFontWeight: flutterFontWeight,
          flutterColor: flutterColor,
        ),
      );
    }
    return cells;
  }

  Future<pw.Widget> _pdfTableCell(
    String text,
    _PdfColumnSpec column,
    Map<String, _PdfTextImage> imageTextCache, {
    required pw.TextStyle textStyle,
    required double fontSize,
    required FontWeight flutterFontWeight,
    required Color flutterColor,
  }) async {
    const horizontalPadding = 2.5;
    const verticalPadding = 3.0;
    final contentWidth = column.width - (horizontalPadding * 2);
    final safeText = text.trim().isEmpty ? '-' : text;

    pw.Widget child;
    if (_usesKhmer(safeText)) {
      final rendered = await _renderPdfTextImage(
        safeText,
        maxWidth: contentWidth > 1 ? contentWidth : 1,
        fontSize: fontSize,
        fontWeight: flutterFontWeight,
        color: flutterColor,
        textAlign: _flutterTextAlign(column.textAlign),
        cache: imageTextCache,
      );
      child = pw.Image(
        pw.MemoryImage(rendered.bytes),
        width: rendered.width,
        height: rendered.height,
      );
    } else {
      child = pw.Text(safeText, style: textStyle, textAlign: column.textAlign);
    }

    return pw.Container(
      width: column.width,
      padding: const pw.EdgeInsets.symmetric(
        horizontal: horizontalPadding,
        vertical: verticalPadding,
      ),
      alignment: column.alignment,
      child: child,
    );
  }

  Future<pw.Widget> _pdfTextWidget(
    String text,
    Map<String, _PdfTextImage> imageTextCache, {
    required pw.TextStyle textStyle,
    required double fontSize,
    FontWeight flutterFontWeight = FontWeight.normal,
    Color flutterColor = Colors.black,
    double? maxWidth,
    pw.TextAlign textAlign = pw.TextAlign.left,
    pw.Alignment alignment = pw.Alignment.centerLeft,
  }) async {
    final safeText = text.trim().isEmpty ? '-' : text;

    pw.Widget child;
    if (_usesKhmer(safeText)) {
      final rendered = await _renderPdfTextImage(
        safeText,
        maxWidth: maxWidth ?? 520,
        fontSize: fontSize,
        fontWeight: flutterFontWeight,
        color: flutterColor,
        textAlign: _flutterTextAlign(textAlign),
        cache: imageTextCache,
      );
      child = pw.Image(
        pw.MemoryImage(rendered.bytes),
        width: rendered.width,
        height: rendered.height,
      );
    } else {
      child = pw.Text(safeText, style: textStyle, textAlign: textAlign);
    }

    if (maxWidth == null) return child;
    return pw.Container(width: maxWidth, alignment: alignment, child: child);
  }

  Future<_PdfTextImage> _renderPdfTextImage(
    String text, {
    required double maxWidth,
    required double fontSize,
    required FontWeight fontWeight,
    required Color color,
    required TextAlign textAlign,
    required Map<String, _PdfTextImage> cache,
  }) async {
    final cacheKey =
        '$text|$maxWidth|$fontSize|${fontWeight.value}|${color.toARGB32()}|${textAlign.name}';
    final cached = cache[cacheKey];
    if (cached != null) return cached;

    const scale = 3.0;
    final textPainter = TextPainter(
      text: TextSpan(
        text: text,
        style: TextStyle(
          fontFamily: 'KantumruyPro',
          fontSize: fontSize,
          fontWeight: fontWeight,
          color: color,
          height: 1.25,
        ),
      ),
      textAlign: textAlign,
      textDirection: ui.TextDirection.ltr,
    )..layout(maxWidth: maxWidth);

    final imageWidth = maxWidth <= 0 ? 1.0 : maxWidth;
    final imageHeight = textPainter.height + 2;
    final recorder = ui.PictureRecorder();
    final canvas = ui.Canvas(recorder);

    canvas.scale(scale, scale);
    textPainter.paint(canvas, const Offset(0, 1));

    final picture = recorder.endRecording();
    final image = await picture.toImage(
      (imageWidth * scale).ceil(),
      (imageHeight * scale).ceil(),
    );
    final byteData = await image.toByteData(format: ui.ImageByteFormat.png);
    image.dispose();
    picture.dispose();

    if (byteData == null) {
      throw StateError('Unable to render Khmer text for PDF.');
    }

    final rendered = _PdfTextImage(
      byteData.buffer.asUint8List(),
      imageWidth,
      imageHeight,
    );
    cache[cacheKey] = rendered;
    return rendered;
  }

  bool _usesKhmer(String text) {
    return RegExp(r'[\u1780-\u17FF\u19E0-\u19FF]').hasMatch(text);
  }

  TextAlign _flutterTextAlign(pw.TextAlign textAlign) {
    if (textAlign == pw.TextAlign.center) return TextAlign.center;
    if (textAlign == pw.TextAlign.right) return TextAlign.right;
    return TextAlign.left;
  }

  Future<pw.Widget> _pdfSummaryItem(
    String text,
    PdfColor pdfColor,
    Color flutterColor,
    pw.TextStyle Function({
      double fontSize,
      pw.FontWeight fontWeight,
      PdfColor? color,
    })
    styleBuilder,
    Map<String, _PdfTextImage> imageTextCache,
  ) {
    return _pdfTextWidget(
      text,
      imageTextCache,
      textStyle: styleBuilder(
        fontSize: 8,
        fontWeight: pw.FontWeight.bold,
        color: pdfColor,
      ),
      fontSize: 8,
      flutterFontWeight: FontWeight.w700,
      flutterColor: flutterColor,
      maxWidth: 145,
      textAlign: pw.TextAlign.center,
      alignment: pw.Alignment.center,
    );
  }

  Future<void> _exportExcel() async {
    if (_reportData.isEmpty) return;

    final languageProvider = context.read<LanguageProvider>();
    final loading = _showLoading(languageProvider.t('exporting_excel'));

    try {
      var excel = excel_lib.Excel.createExcel();
      var sheet = excel[languageProvider.t('sales_by_seller')];
      final reportTitle = _reportTitle(languageProvider);

      // Add title row
      sheet.appendRow([excel_lib.TextCellValue(reportTitle)]);
      sheet.appendRow([]);

      // Add headers
      sheet.appendRow([
        excel_lib.TextCellValue(languageProvider.t('order_date')),
        excel_lib.TextCellValue(languageProvider.t('order_ref')),
        excel_lib.TextCellValue(languageProvider.t('customer_name')),
        excel_lib.TextCellValue(languageProvider.t('phone')),
        excel_lib.TextCellValue(languageProvider.t('location')),
        excel_lib.TextCellValue(languageProvider.t('product')),
        excel_lib.TextCellValue(languageProvider.t('returned_product')),
        excel_lib.TextCellValue(languageProvider.t('quantity')),
        excel_lib.TextCellValue(languageProvider.t('price')),
        excel_lib.TextCellValue(languageProvider.t('paid')),
        excel_lib.TextCellValue(languageProvider.t('shipping')),
        excel_lib.TextCellValue(languageProvider.t('pay_method')),
        excel_lib.TextCellValue(languageProvider.t('seller')),
      ]);

      // Add data rows
      for (var row in _reportData) {
        sheet.appendRow([
          excel_lib.TextCellValue(_formatDate(row['datetime'] ?? row['date'])),
          excel_lib.TextCellValue(row['Ref'] ?? ''),
          excel_lib.TextCellValue(_customerName(row)),
          excel_lib.TextCellValue(_customerPhone(row)),
          excel_lib.TextCellValue(_customerLocation(row)),
          excel_lib.TextCellValue(_textValue(row['product_name'])),
          excel_lib.TextCellValue(_returnedProductText(row)),
          excel_lib.TextCellValue(row['product_qty']?.toString() ?? '0'),
          excel_lib.TextCellValue(_formatMoney(row['product_cost'])),
          excel_lib.TextCellValue(_formatMoney(row['paid_amount'])),
          excel_lib.TextCellValue(_formatMoney(row['shipping'])),
          excel_lib.TextCellValue(
            _paymentMethodText(row['payment_method'], languageProvider),
          ),
          excel_lib.TextCellValue(_textValue(row['seller_name'])),
        ]);
      }

      sheet.appendRow([]);
      // Summary row 1: labels + values aligned to correct columns
      // Columns: Date | Ref | Customer | Phone | Location | Product | Returned | QTY | Cost | Paid | Ship | Pay Method | Seller
      sheet.appendRow([
        excel_lib.TextCellValue(languageProvider.t('summary')),
        excel_lib.TextCellValue(''),
        excel_lib.TextCellValue(''),
        excel_lib.TextCellValue(''),
        excel_lib.TextCellValue(''),
        excel_lib.TextCellValue(languageProvider.t('total_cost')),
        excel_lib.TextCellValue(languageProvider.t('total_paid')),
        excel_lib.TextCellValue(languageProvider.t('total_shipping')),
        excel_lib.TextCellValue(_formatMoney(_totalCost)),
        excel_lib.TextCellValue(_formatMoney(_totalPaidAmount)),
        excel_lib.TextCellValue(_formatMoney(_totalShipping)),
        excel_lib.TextCellValue(languageProvider.t('profit')),
        excel_lib.TextCellValue(_formatMoney(_totalProfit)),
      ]);
      // Summary row 2: Sale By Cash / Sale By KHQR
      sheet.appendRow([
        excel_lib.TextCellValue(''),
        excel_lib.TextCellValue(''),
        excel_lib.TextCellValue(''),
        excel_lib.TextCellValue(''),
        excel_lib.TextCellValue(''),
        excel_lib.TextCellValue(languageProvider.t('sale_by_cash')),
        excel_lib.TextCellValue(languageProvider.t('sale_by_khqr')),
        excel_lib.TextCellValue(''),
        excel_lib.TextCellValue(_formatMoney(_saleByCash)),
        excel_lib.TextCellValue(_formatMoney(_saleByKhqr)),
        excel_lib.TextCellValue(''),
        excel_lib.TextCellValue(''),
        excel_lib.TextCellValue(''),
      ]);
      // Summary row 3: Cash Difference
      final cashLabel = _cashDifference >= 0
          ? languageProvider.t('cash_from_boss')
          : languageProvider.t('cash_to_boss');
      sheet.appendRow([
        excel_lib.TextCellValue(''),
        excel_lib.TextCellValue(''),
        excel_lib.TextCellValue(''),
        excel_lib.TextCellValue(''),
        excel_lib.TextCellValue(''),
        excel_lib.TextCellValue(cashLabel),
        excel_lib.TextCellValue(''),
        excel_lib.TextCellValue(''),
        excel_lib.TextCellValue(_formatMoney(_cashDifference.abs())),
        excel_lib.TextCellValue(''),
        excel_lib.TextCellValue(''),
        excel_lib.TextCellValue(''),
        excel_lib.TextCellValue(''),
      ]);

      sheet.updateCell(
        excel_lib.CellIndex.indexByColumnRow(columnIndex: 0, rowIndex: 0),
        excel_lib.TextCellValue(reportTitle),
      );

      // Save file
      final dir = await getApplicationDocumentsDirectory();
      final fileName =
          'sales_report_${_formatDateForApi(_startDate)}_to_${_formatDateForApi(_endDate)}.xlsx';
      final filePath = '${dir.path}/$fileName';
      final file = File(filePath);
      await file.writeAsBytes(excel.encode()!);

      loading.remove();
      _showSuccess('${languageProvider.t('excel_saved')}: $fileName');

      // Open the file — may fail on iOS Simulator (objective_c.dylib issue),
      // but the file is already saved successfully.
      try {
        await OpenFile.open(filePath);
      } catch (_) {
        // Ignore open errors on simulator; file was saved successfully.
      }
    } catch (e) {
      loading.remove();
      _showError('${languageProvider.t('failed_export_excel')}: $e');
    }
  }

  OverlayEntry _showLoading(String message) {
    final entry = OverlayEntry(
      builder: (context) => Center(
        child: Container(
          padding: const EdgeInsets.symmetric(horizontal: 24, vertical: 16),
          decoration: BoxDecoration(
            color: Colors.black87,
            borderRadius: BorderRadius.circular(8),
          ),
          child: Row(
            mainAxisSize: MainAxisSize.min,
            children: [
              const SizedBox(
                width: 20,
                height: 20,
                child: CircularProgressIndicator(
                  strokeWidth: 2,
                  color: Colors.white,
                ),
              ),
              const SizedBox(width: 12),
              Text(
                message,
                style: const TextStyle(color: Colors.white, fontSize: 14),
              ),
            ],
          ),
        ),
      ),
    );
    Overlay.of(context).insert(entry);
    return entry;
  }

  void _showSuccess(String message) {
    ScaffoldMessenger.of(context).showSnackBar(
      SnackBar(content: Text(message), backgroundColor: Colors.green),
    );
  }

  void _showError(String message) {
    ScaffoldMessenger.of(context).showSnackBar(
      SnackBar(content: Text(message), backgroundColor: Colors.red),
    );
  }
}

class _PdfColumnSpec {
  const _PdfColumnSpec({
    required this.label,
    required this.width,
    required this.alignment,
    required this.textAlign,
  });

  final String label;
  final double width;
  final pw.Alignment alignment;
  final pw.TextAlign textAlign;
}

class _PdfTextImage {
  const _PdfTextImage(this.bytes, this.width, this.height);

  final Uint8List bytes;
  final double width;
  final double height;
}
