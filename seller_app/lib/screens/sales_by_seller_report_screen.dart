import 'package:flutter/material.dart';
import 'package:provider/provider.dart';
import 'package:seller_app/config/api_config.dart';
import 'package:seller_app/providers/auth_provider.dart';
import 'package:seller_app/providers/language_provider.dart';
import 'package:http/http.dart' as http;
import 'dart:convert';
import 'dart:io';
import 'package:pdf/pdf.dart';
import 'package:pdf/widgets.dart' as pw;
import 'package:path_provider/path_provider.dart';
import 'package:open_file/open_file.dart';
import 'package:excel/excel.dart' as excel_lib;

class SalesBySellerReportScreen extends StatefulWidget {
  const SalesBySellerReportScreen({super.key});

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
          '&limit=1000';

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

      // Backend returns: {totalRows, sales, sellers, customers, warehouses}
      final sales = data['sales'];

      if (response.statusCode == 200 && sales != null && sales is List) {
        final salesList = List<Map<String, dynamic>>.from(sales);

        // Calculate totals
        double totalCost = 0;
        double totalPaidAmount = 0;
        double totalShipping = 0;
        double saleByCash = 0;
        double saleByKhqr = 0;

        for (var row in salesList) {
          final cost = (row['product_cost'] ?? 0).toDouble();
          final paidAmount = (row['paid_amount'] ?? 0).toDouble();
          final shipping = (row['shipping'] ?? 0).toDouble();
          final paymentMethod = (row['payment_method'] ?? '')
              .toString()
              .toLowerCase();

          totalCost += cost;
          totalPaidAmount += paidAmount;
          totalShipping += shipping;

          if (paymentMethod == 'cash') {
            saleByCash += paidAmount + shipping;
          } else if (paymentMethod == 'khqr') {
            saleByKhqr += paidAmount + shipping;
          }
        }

        final totalProfit = totalPaidAmount - (totalCost + totalShipping);
        final cashDifference = totalProfit - saleByKhqr;

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
          IconButton(
            icon: const Icon(Icons.filter_alt),
            onPressed: _selectDateRange,
            tooltip: languageProvider.t('select_date_range'),
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
                        DataColumn(label: Text(languageProvider.t('date'))),
                        DataColumn(label: Text('Ref')),
                        DataColumn(label: Text(languageProvider.t('products'))),
                        DataColumn(label: Text('QTY')),
                        DataColumn(label: Text(languageProvider.t('price'))),
                        DataColumn(label: Text(languageProvider.t('paid'))),
                        DataColumn(label: Text('Ship')),
                        DataColumn(label: Text('Pay Method')),
                        DataColumn(label: Text('Seller')),
                      ],
                      rows: _reportData.map((row) {
                        return DataRow(
                          cells: [
                            DataCell(
                              Text(_formatDate(row['datetime'] ?? row['date'])),
                            ),
                            DataCell(Text(row['Ref'] ?? '')),
                            DataCell(Text(row['product_name'] ?? 'N/A')),
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
                            DataCell(Text(row['payment_method'] ?? 'N/A')),
                            DataCell(Text(row['seller_name'] ?? 'N/A')),
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
                    languageProvider.t('price'),
                    _totalCost,
                    Colors.red,
                  ),
                  _buildSummaryItem(
                    languageProvider.t('paid'),
                    _totalPaidAmount,
                    Colors.blue,
                  ),
                  _buildSummaryItem('Shipping', _totalShipping, Colors.orange),
                  _buildSummaryItem(
                    'Profit',
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
                    languageProvider.t('paid'),
                    _saleByCash,
                    Colors.green,
                  ),
                  _buildSummaryItem(
                    'KHQR',
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
                    _cashDifference >= 0
                        ? 'Cash From Boss: \$${_formatMoney(_cashDifference)}'
                        : 'Cash to Boss! \$${_formatMoney(_cashDifference.abs())}',
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

  Future<void> _exportPDF() async {
    if (_reportData.isEmpty) return;

    final loading = _showLoading('Exporting PDF...');

    try {
      final pdf = pw.Document();

      pdf.addPage(
        pw.MultiPage(
          pageFormat: PdfPageFormat.a4.landscape,
          header: (context) => pw.Container(
            alignment: pw.Alignment.centerRight,
            child: pw.Text(
              'Sales By Seller Report: ${_formatDateForApi(_startDate)} - ${_formatDateForApi(_endDate)}',
              style: pw.TextStyle(fontSize: 10, color: PdfColors.grey700),
            ),
          ),
          footer: (context) => pw.Container(
            alignment: pw.Alignment.centerRight,
            child: pw.Text(
              'Page ${context.pageNumber} of ${context.pagesCount}',
            ),
          ),
          build: (context) => [
            pw.TableHelper.fromTextArray(
              border: pw.TableBorder.all(),
              headerStyle: pw.TextStyle(
                fontWeight: pw.FontWeight.bold,
                color: PdfColors.white,
              ),
              headerDecoration: const pw.BoxDecoration(
                color: PdfColors.blueGrey800,
              ),
              cellHeight: 20,
              cellAlignments: {
                0: pw.Alignment.centerLeft,
                1: pw.Alignment.center,
                2: pw.Alignment.centerLeft,
                3: pw.Alignment.center,
                4: pw.Alignment.centerRight,
                5: pw.Alignment.centerRight,
                6: pw.Alignment.centerRight,
                7: pw.Alignment.center,
                8: pw.Alignment.centerLeft,
              },
              headers: [
                'Date',
                'Ref',
                'Product',
                'QTY',
                'Cost',
                'Paid',
                'Ship',
                'Pay',
                'Seller',
              ],
              data: _reportData.map((row) {
                return [
                  _formatDate(row['datetime'] ?? row['date']),
                  row['Ref'] ?? '',
                  row['product_name'] ?? 'N/A',
                  row['product_qty']?.toString() ?? '0',
                  '\$${_formatMoney(row['product_cost'])}',
                  '\$${_formatMoney(row['paid_amount'])}',
                  '\$${_formatMoney(row['shipping'])}',
                  row['payment_method'] ?? 'N/A',
                  row['seller_name'] ?? 'N/A',
                ];
              }).toList(),
            ),
            pw.SizedBox(height: 20),
            pw.Container(
              padding: const pw.EdgeInsets.all(10),
              decoration: pw.BoxDecoration(
                border: pw.Border.all(color: PdfColors.grey400),
                borderRadius: const pw.BorderRadius.all(pw.Radius.circular(5)),
              ),
              child: pw.Row(
                mainAxisAlignment: pw.MainAxisAlignment.spaceAround,
                children: [
                  _pdfSummaryItem(
                    'Cost: \$${_formatMoney(_totalCost)}',
                    PdfColors.red,
                  ),
                  _pdfSummaryItem(
                    'Paid: \$${_formatMoney(_totalPaidAmount)}',
                    PdfColors.blue,
                  ),
                  _pdfSummaryItem(
                    'Ship: \$${_formatMoney(_totalShipping)}',
                    PdfColors.orange,
                  ),
                  _pdfSummaryItem(
                    'Profit: \$${_formatMoney(_totalProfit)}',
                    _totalProfit >= 0 ? PdfColors.green : PdfColors.red,
                  ),
                  _pdfSummaryItem(
                    'Cash: \$${_formatMoney(_saleByCash)}',
                    PdfColors.green,
                  ),
                  _pdfSummaryItem(
                    'KHQR: \$${_formatMoney(_saleByKhqr)}',
                    PdfColors.teal,
                  ),
                ],
              ),
            ),
          ],
        ),
      );

      final dir = await getApplicationDocumentsDirectory();
      final fileName =
          'sales_report_${_formatDateForApi(_startDate)}_to_${_formatDateForApi(_endDate)}.pdf';
      final filePath = '${dir.path}/$fileName';
      final file = File(filePath);
      await file.writeAsBytes(await pdf.save());

      loading.remove();
      _showSuccess('PDF exported successfully!');
      OpenFile.open(filePath);
    } catch (e) {
      loading.remove();
      _showError('Failed to export PDF: $e');
    }
  }

  pw.Widget _pdfSummaryItem(String text, PdfColor color) {
    return pw.Text(
      text,
      style: pw.TextStyle(
        fontSize: 8,
        color: color,
        fontWeight: pw.FontWeight.bold,
      ),
    );
  }

  Future<void> _exportExcel() async {
    if (_reportData.isEmpty) return;

    final loading = _showLoading('Exporting Excel...');

    try {
      var excel = excel_lib.Excel.createExcel();
      var sheet = excel['Sales Report'];

      // Add title row
      sheet.appendRow([
        excel_lib.TextCellValue(
          'Sales By Seller Report: ${_formatDateForApi(_startDate)} - ${_formatDateForApi(_endDate)}',
        ),
      ]);
      sheet.appendRow([]);

      // Add headers
      sheet.appendRow([
        excel_lib.TextCellValue('Date'),
        excel_lib.TextCellValue('Ref'),
        excel_lib.TextCellValue('Product'),
        excel_lib.TextCellValue('QTY'),
        excel_lib.TextCellValue('Cost'),
        excel_lib.TextCellValue('Paid'),
        excel_lib.TextCellValue('Ship'),
        excel_lib.TextCellValue('Pay Method'),
        excel_lib.TextCellValue('Seller'),
      ]);

      // Add data rows
      for (var row in _reportData) {
        sheet.appendRow([
          excel_lib.TextCellValue(_formatDate(row['datetime'] ?? row['date'])),
          excel_lib.TextCellValue(row['Ref'] ?? ''),
          excel_lib.TextCellValue(row['product_name'] ?? 'N/A'),
          excel_lib.TextCellValue(row['product_qty']?.toString() ?? '0'),
          excel_lib.TextCellValue(_formatMoney(row['product_cost'])),
          excel_lib.TextCellValue(_formatMoney(row['paid_amount'])),
          excel_lib.TextCellValue(_formatMoney(row['shipping'])),
          excel_lib.TextCellValue(row['payment_method'] ?? 'N/A'),
          excel_lib.TextCellValue(row['seller_name'] ?? 'N/A'),
        ]);
      }

      sheet.appendRow([]);
      sheet.appendRow([
        excel_lib.TextCellValue('SUMMARY'),
        excel_lib.TextCellValue(''),
        excel_lib.TextCellValue(''),
        excel_lib.TextCellValue(''),
        excel_lib.TextCellValue(_formatMoney(_totalCost)),
        excel_lib.TextCellValue(_formatMoney(_totalPaidAmount)),
        excel_lib.TextCellValue(_formatMoney(_totalShipping)),
        excel_lib.TextCellValue(''),
        excel_lib.TextCellValue(''),
      ]);
      sheet.appendRow([
        excel_lib.TextCellValue(''),
        excel_lib.TextCellValue(''),
        excel_lib.TextCellValue(''),
        excel_lib.TextCellValue(''),
        excel_lib.TextCellValue(_formatMoney(_saleByCash)),
        excel_lib.TextCellValue(_formatMoney(_saleByKhqr)),
        excel_lib.TextCellValue(_formatMoney(_totalProfit)),
        excel_lib.TextCellValue(''),
        excel_lib.TextCellValue(''),
      ]);

      sheet.updateCell(
        excel_lib.CellIndex.indexByColumnRow(columnIndex: 0, rowIndex: 0),
        excel_lib.TextCellValue(
          'Sales By Seller Report: ${_formatDateForApi(_startDate)} - ${_formatDateForApi(_endDate)}',
        ),
      );

      // Save file
      final dir = await getApplicationDocumentsDirectory();
      final fileName =
          'sales_report_${_formatDateForApi(_startDate)}_to_${_formatDateForApi(_endDate)}.xlsx';
      final filePath = '${dir.path}/$fileName';
      final file = File(filePath);
      await file.writeAsBytes(excel.encode()!);

      loading.remove();
      _showSuccess('Excel exported successfully!');
      OpenFile.open(filePath);
    } catch (e) {
      loading.remove();
      _showError('Failed to export Excel: $e');
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
