import 'dart:io';
import 'package:delivery_app/providers/auth_provider.dart';
import 'package:delivery_app/providers/language_provider.dart';
import 'package:delivery_app/services/delivery_api_service.dart';
import 'package:flutter/material.dart';
import 'package:flutter/services.dart';
import 'package:intl/intl.dart';
import 'package:provider/provider.dart';
import 'package:google_fonts/google_fonts.dart';
import 'package:path_provider/path_provider.dart';
import 'package:pdf/pdf.dart';
import 'package:pdf/widgets.dart' as pw;
import 'package:open_file/open_file.dart';

class ReportScreen extends StatefulWidget {
  const ReportScreen({super.key, this.recordMode = false});

  final bool recordMode;

  @override
  State<ReportScreen> createState() => ReportScreenState();
}

class ReportScreenState extends State<ReportScreen> {
  final DeliveryApiService _apiService = DeliveryApiService();

  List<Map<String, dynamic>> _allReportOrders = [];
  List<Map<String, dynamic>> _filteredReportOrders = [];
  bool _isLoading = true;
  String? _error;

  DateTime _startDate = DateTime.now();
  DateTime _endDate = DateTime.now();

  double _totalShipping = 0;
  double _totalAmount = 0;
  int _totalOrders = 0;

  double get _companyPayableAmount {
    final amount = _totalAmount - _totalShipping;
    return amount < 0 ? 0 : amount;
  }

  @override
  void initState() {
    super.initState();
    WidgetsBinding.instance.addPostFrameCallback((_) {
      refreshData();
    });
  }

  Future<void> refreshData() async {
    final authProvider = context.read<AuthProvider>();
    final token = authProvider.token;

    if (token == null || token.isEmpty) return;

    setState(() {
      _isLoading = true;
      _error = null;
    });

    _apiService.setToken(token);

    try {
      final orders = await _apiService.getOrders(status: 'delivered');

      if (!mounted) return;
      setState(() {
        _allReportOrders = orders;
        _filterOrdersByDate();
        _isLoading = false;
      });
    } catch (e) {
      if (!mounted) return;
      setState(() {
        _error = e.toString();
        _isLoading = false;
      });
    }
  }

  void _filterOrdersByDate() {
    final filtered = _allReportOrders.where((order) {
      final dateStr = order['created_at'] ?? order['datetime'];
      if (dateStr == null) return false;
      try {
        final date = DateTime.parse(dateStr.toString());
        final start = DateTime(
          _startDate.year,
          _startDate.month,
          _startDate.day,
        );
        final end = DateTime(
          _endDate.year,
          _endDate.month,
          _endDate.day,
          23,
          59,
          59,
        );
        return !date.isBefore(start) && !date.isAfter(end);
      } catch (e) {
        return false;
      }
    }).toList();

    double tShipping = 0;
    double tAmount = 0;

    for (var order in filtered) {
      final shipping =
          double.tryParse(order['shipping']?.toString() ?? '0') ?? 0.0;
      final amount =
          double.tryParse(order['GrandTotal']?.toString() ?? '0') ?? 0.0;
      tShipping += shipping;
      tAmount += amount;
    }

    setState(() {
      _filteredReportOrders = filtered;
      _totalShipping = tShipping;
      _totalAmount = tAmount;
      _totalOrders = filtered.length;
    });
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
        _filterOrdersByDate();
      case 'yesterday':
        final yesterday = today.subtract(const Duration(days: 1));
        setState(() {
          _startDate = yesterday;
          _endDate = yesterday;
        });
        _filterOrdersByDate();
      case 'this_week':
        setState(() {
          _startDate = today.subtract(Duration(days: today.weekday - 1));
          _endDate = today;
        });
        _filterOrdersByDate();
      case 'this_month':
        setState(() {
          _startDate = DateTime(now.year, now.month, 1);
          _endDate = today;
        });
        _filterOrdersByDate();
      case 'custom':
        _selectDateRange();
    }
  }

  Future<void> _selectDateRange() async {
    final picked = await showDateRangePicker(
      context: context,
      initialDateRange: DateTimeRange(start: _startDate, end: _endDate),
      firstDate: DateTime(2020),
      lastDate: DateTime(2100),
      builder: (context, child) {
        return Theme(
          data: Theme.of(context).copyWith(
            colorScheme: Theme.of(
              context,
            ).colorScheme.copyWith(primary: const Color(0xFFD6A735)),
          ),
          child: child!,
        );
      },
    );

    if (picked != null) {
      setState(() {
        _startDate = picked.start;
        _endDate = picked.end;
      });
      _filterOrdersByDate();
    }
  }

  String _formatCurrency(dynamic amount) {
    if (amount == null) return '0.00';
    final numValue = double.tryParse(amount.toString()) ?? 0.0;
    return NumberFormat.currency(symbol: '', decimalDigits: 2).format(numValue);
  }

  String _formatDate(dynamic dateStr) {
    if (dateStr == null) return '-';
    try {
      final date = DateTime.parse(dateStr.toString());
      return DateFormat('dd/MM/yyyy').format(date);
    } catch (e) {
      return dateStr.toString();
    }
  }

  String _formatDateForApi(DateTime date) {
    return DateFormat('yyyy-MM-dd').format(date);
  }

  String _getProductNames(List<dynamic>? products) {
    if (products == null || products.isEmpty) return '-';
    return products.map((p) => p['name'].toString()).join(', ');
  }

  String _getProductQuantities(List<dynamic>? products) {
    if (products == null || products.isEmpty) return '0';
    double totalQty = 0;
    for (var p in products) {
      totalQty += double.tryParse(p['quantity']?.toString() ?? '0') ?? 0;
    }
    return totalQty.toStringAsFixed(
      totalQty.truncateToDouble() == totalQty ? 0 : 2,
    );
  }

  String _reportTitle(LanguageProvider languageProvider) {
    return widget.recordMode
        ? languageProvider.t('record_report')
        : languageProvider.t('delivered_report');
  }

  String _reportCountLabel(LanguageProvider languageProvider) {
    return widget.recordMode
        ? languageProvider.t('recorded_count')
        : languageProvider.t('delivered_count');
  }

  String _reportEmptyLabel(LanguageProvider languageProvider) {
    return widget.recordMode
        ? languageProvider.t('no_records')
        : languageProvider.t('no_orders');
  }

  String _reportItemLabel(LanguageProvider languageProvider) {
    return widget.recordMode
        ? languageProvider.t('records')
        : languageProvider.t('orders');
  }

  String _pdfReportTitle() {
    return widget.recordMode ? 'Recorded Report' : 'Delivered Report';
  }

  String _pdfFilePrefix() {
    return widget.recordMode ? 'record_report' : 'delivery_report';
  }

  Future<void> _exportPDF(LanguageProvider languageProvider) async {
    if (_filteredReportOrders.isEmpty) {
      ScaffoldMessenger.of(
        context,
      ).showSnackBar(const SnackBar(content: Text('No data to export')));
      return;
    }

    try {
      final kantumruyData = await rootBundle.load(
        'assets/fonts/KantumruyPro.ttf',
      );
      final kantumruyFont = pw.Font.ttf(kantumruyData);

      pw.TextStyle style({
        double fontSize = 9,
        pw.FontWeight fontWeight = pw.FontWeight.normal,
        PdfColor? color,
      }) => pw.TextStyle(
        font: kantumruyFont,
        fontSize: fontSize,
        fontWeight: fontWeight,
        color: color,
      );

      final pdf = pw.Document();

      pdf.addPage(
        pw.MultiPage(
          pageFormat: PdfPageFormat.a4.landscape,
          theme: pw.ThemeData.withFont(
            base: kantumruyFont,
            bold: kantumruyFont,
          ),
          header: (context) => pw.Container(
            alignment: pw.Alignment.centerRight,
            child: pw.Text(
              '${_pdfReportTitle()}: ${_formatDateForApi(_startDate)} - ${_formatDateForApi(_endDate)}',
              style: style(fontSize: 10, color: PdfColors.grey700),
            ),
          ),
          footer: (context) => pw.Container(
            alignment: pw.Alignment.centerRight,
            child: pw.Text(
              'Page ${context.pageNumber} of ${context.pagesCount}',
              style: style(fontSize: 10, color: PdfColors.grey700),
            ),
          ),
          build: (context) => [
            pw.TableHelper.fromTextArray(
              border: pw.TableBorder.all(),
              headerStyle: style(
                fontWeight: pw.FontWeight.bold,
                color: PdfColors.white,
                fontSize: 10,
              ),
              cellStyle: style(fontSize: 9),
              headerDecoration: const pw.BoxDecoration(color: PdfColors.amber),
              cellHeight: 25,
              cellAlignments: {
                0: pw.Alignment.centerLeft,
                1: pw.Alignment.center,
                2: pw.Alignment.centerLeft,
                3: pw.Alignment.centerLeft,
                4: pw.Alignment.centerLeft,
                5: pw.Alignment.center,
                6: pw.Alignment.centerLeft,
                7: pw.Alignment.centerLeft,
                8: pw.Alignment.centerRight,
                9: pw.Alignment.centerRight,
              },
              headers: [
                'Date',
                'Ref',
                'Client',
                'Address',
                'Products',
                'Qty',
                'Seller',
                'Seller Phone',
                'Shipping',
                'Total',
              ],
              data: _filteredReportOrders.map((row) {
                return [
                  _formatDate(row['created_at'] ?? row['datetime']),
                  row['Ref'] ?? '-',
                  row['client_name']?.toString() ?? '-',
                  row['client_address']?.toString() ?? '-',
                  _getProductNames(row['products'] as List?),
                  _getProductQuantities(row['products'] as List?),
                  row['seller_name']?.toString() ?? '-',
                  row['seller_phone']?.toString() ?? '-',
                  '\$${_formatCurrency(row['shipping'])}',
                  '\$${_formatCurrency(row['GrandTotal'])}',
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
                  pw.Text(
                    'Total ${widget.recordMode ? 'Records' : 'Orders'}: $_totalOrders',
                    style: style(
                      fontSize: 12,
                      fontWeight: pw.FontWeight.bold,
                      color: PdfColors.blue,
                    ),
                  ),
                  pw.Text(
                    'Total Shipping: \$${_formatCurrency(_totalShipping)}',
                    style: style(
                      fontSize: 12,
                      fontWeight: pw.FontWeight.bold,
                      color: PdfColors.amber,
                    ),
                  ),
                  pw.Text(
                    'Grand Total: \$${_formatCurrency(_totalAmount)}',
                    style: style(
                      fontSize: 12,
                      fontWeight: pw.FontWeight.bold,
                      color: PdfColors.amber,
                    ),
                  ),
                  pw.Text(
                    'Payable to Company: \$${_formatCurrency(_companyPayableAmount)}',
                    style: style(
                      fontSize: 12,
                      fontWeight: pw.FontWeight.bold,
                      color: PdfColors.green,
                    ),
                  ),
                ],
              ),
            ),
          ],
        ),
      );

      final dir = await getApplicationDocumentsDirectory();
      final fileName =
          '${_pdfFilePrefix()}_${_formatDateForApi(_startDate)}_to_${_formatDateForApi(_endDate)}.pdf';
      final filePath = '${dir.path}/$fileName';
      final file = File(filePath);
      await file.writeAsBytes(await pdf.save());

      if (mounted) {
        ScaffoldMessenger.of(context).showSnackBar(
          const SnackBar(content: Text('PDF exported successfully!')),
        );
      }
      OpenFile.open(filePath);
    } catch (e) {
      if (mounted) {
        ScaffoldMessenger.of(
          context,
        ).showSnackBar(SnackBar(content: Text('Failed to export PDF: $e')));
      }
    }
  }

  @override
  Widget build(BuildContext context) {
    final languageProvider = context.watch<LanguageProvider>();
    final isDark = Theme.of(context).brightness == Brightness.dark;

    if (_isLoading && _allReportOrders.isEmpty) {
      return const Center(child: CircularProgressIndicator());
    }

    if (_error != null && _allReportOrders.isEmpty) {
      return Center(
        child: Padding(
          padding: const EdgeInsets.all(24),
          child: Column(
            mainAxisSize: MainAxisSize.min,
            children: [
              const Icon(Icons.cloud_off_outlined, size: 40),
              const SizedBox(height: 12),
              Text(_error!, textAlign: TextAlign.center),
              const SizedBox(height: 16),
              FilledButton(
                onPressed: refreshData,
                child: Text(languageProvider.t('retry')),
              ),
            ],
          ),
        ),
      );
    }

    return Column(
      children: [
        // Top actions row with Date Picker and Refresh
        Padding(
          padding: const EdgeInsets.symmetric(horizontal: 16.0, vertical: 8.0),
          child: Row(
            mainAxisAlignment: MainAxisAlignment.spaceBetween,
            children: [
              Text(
                _reportTitle(languageProvider),
                style: TextStyle(
                  fontSize: 18,
                  fontWeight: FontWeight.bold,
                  fontFamily: GoogleFonts.kantumruyPro().fontFamily,
                ),
              ),
              Row(
                children: [
                  IconButton(
                    icon: const Icon(Icons.picture_as_pdf, color: Colors.red),
                    onPressed: () => _exportPDF(languageProvider),
                    tooltip: languageProvider.t('export_pdf'),
                  ),
                  PopupMenuButton<String>(
                    icon: const Icon(
                      Icons.calendar_month,
                      color: Color(0xFFD6A735),
                    ),
                    tooltip: languageProvider.t('custom_range'),
                    onSelected: _applyDateShortcut,
                    itemBuilder: (context) => [
                      _shortcutItem(
                        'today',
                        Icons.today,
                        languageProvider.t('today'),
                      ),
                      _shortcutItem(
                        'yesterday',
                        Icons.history,
                        languageProvider.t('yesterday'),
                      ),
                      _shortcutItem(
                        'this_week',
                        Icons.view_week,
                        languageProvider.t('this_week'),
                      ),
                      _shortcutItem(
                        'this_month',
                        Icons.calendar_month,
                        languageProvider.t('this_month'),
                      ),
                      const PopupMenuDivider(),
                      _shortcutItem(
                        'custom',
                        Icons.date_range,
                        languageProvider.t('custom_range'),
                      ),
                    ],
                  ),
                  IconButton(
                    icon: const Icon(Icons.refresh, color: Color(0xFFD6A735)),
                    onPressed: refreshData,
                    tooltip: languageProvider.t('refresh'),
                  ),
                ],
              ),
            ],
          ),
        ),

        // Date Range Banner
        Container(
          width: double.infinity,
          padding: const EdgeInsets.symmetric(vertical: 12, horizontal: 16),
          color: isDark
              ? const Color(0xFF16213E)
              : const Color(0xFFD6A735).withValues(alpha: 0.1),
          child: Row(
            children: [
              const Icon(
                Icons.calendar_today,
                size: 18,
                color: Color(0xFFD6A735),
              ),
              const SizedBox(width: 8),
              Text(
                '${_formatDateForApi(_startDate)} - ${_formatDateForApi(_endDate)}',
                style: const TextStyle(
                  color: Color(0xFFD6A735),
                  fontWeight: FontWeight.bold,
                ),
              ),
              const Spacer(),
              Text(
                '$_totalOrders ${_reportItemLabel(languageProvider)}',
                style: const TextStyle(
                  color: Color(0xFFD6A735),
                  fontWeight: FontWeight.bold,
                ),
              ),
            ],
          ),
        ),

        // Report Table
        Expanded(
          child: _filteredReportOrders.isEmpty
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
                        _reportEmptyLabel(languageProvider),
                        style: TextStyle(fontSize: 18, color: Colors.grey[600]),
                      ),
                    ],
                  ),
                )
              : RefreshIndicator(
                  onRefresh: refreshData,
                  child: SingleChildScrollView(
                    physics: const AlwaysScrollableScrollPhysics(),
                    scrollDirection: Axis.vertical,
                    child: SingleChildScrollView(
                      scrollDirection: Axis.horizontal,
                      child: DataTable(
                        headingRowColor: WidgetStateProperty.all(
                          Colors.grey[100],
                        ),
                        dataRowMinHeight: 60,
                        dataRowMaxHeight: 60,
                        columns: [
                          DataColumn(
                            label: Text(
                              languageProvider.t('date'),
                              style: const TextStyle(
                                fontWeight: FontWeight.bold,
                              ),
                            ),
                          ),
                          const DataColumn(
                            label: Text(
                              'Ref',
                              style: TextStyle(fontWeight: FontWeight.bold),
                            ),
                          ),
                          DataColumn(
                            label: Text(
                              languageProvider.t('client_name'),
                              style: const TextStyle(
                                fontWeight: FontWeight.bold,
                              ),
                            ),
                          ),
                          DataColumn(
                            label: Text(
                              languageProvider.t('client_phone'),
                              style: const TextStyle(
                                fontWeight: FontWeight.bold,
                              ),
                            ),
                          ),
                          DataColumn(
                            label: Text(
                              languageProvider.t('client_address'),
                              style: const TextStyle(
                                fontWeight: FontWeight.bold,
                              ),
                            ),
                          ),
                          DataColumn(
                            label: Text(
                              languageProvider.t('products'),
                              style: const TextStyle(
                                fontWeight: FontWeight.bold,
                              ),
                            ),
                          ),
                          DataColumn(
                            label: Text(
                              languageProvider.t('qty'),
                              style: const TextStyle(
                                fontWeight: FontWeight.bold,
                              ),
                            ),
                          ),
                          DataColumn(
                            label: Text(
                              languageProvider.t('seller'),
                              style: const TextStyle(
                                fontWeight: FontWeight.bold,
                              ),
                            ),
                          ),
                          DataColumn(
                            label: Text(
                              languageProvider.t('seller_phone'),
                              style: const TextStyle(
                                fontWeight: FontWeight.bold,
                              ),
                            ),
                          ),
                          DataColumn(
                            label: Text(
                              languageProvider.t('shipping_fee'),
                              style: const TextStyle(
                                fontWeight: FontWeight.bold,
                              ),
                            ),
                          ),
                          DataColumn(
                            label: Text(
                              languageProvider.t('grand_total'),
                              style: const TextStyle(
                                fontWeight: FontWeight.bold,
                              ),
                            ),
                          ),
                        ],
                        rows: _filteredReportOrders.map((row) {
                          return DataRow(
                            cells: [
                              DataCell(
                                Text(
                                  _formatDate(
                                    row['created_at'] ?? row['datetime'],
                                  ),
                                ),
                              ),
                              DataCell(Text(row['Ref'] ?? '-')),
                              DataCell(
                                Text(row['client_name']?.toString() ?? '-'),
                              ),
                              DataCell(
                                Text(row['client_phone']?.toString() ?? '-'),
                              ),
                              DataCell(
                                ConstrainedBox(
                                  constraints: const BoxConstraints(
                                    maxWidth: 150,
                                  ),
                                  child: Text(
                                    row['client_address']?.toString() ?? '-',
                                    overflow: TextOverflow.ellipsis,
                                  ),
                                ),
                              ),
                              DataCell(
                                ConstrainedBox(
                                  constraints: const BoxConstraints(
                                    maxWidth: 150,
                                  ),
                                  child: Text(
                                    _getProductNames(row['products'] as List?),
                                    overflow: TextOverflow.ellipsis,
                                  ),
                                ),
                              ),
                              DataCell(
                                Text(
                                  _getProductQuantities(
                                    row['products'] as List?,
                                  ),
                                ),
                              ),
                              DataCell(
                                Text(row['seller_name']?.toString() ?? '-'),
                              ),
                              DataCell(
                                Text(row['seller_phone']?.toString() ?? '-'),
                              ),
                              DataCell(
                                Text(
                                  '\$${_formatCurrency(row['shipping'])}',
                                  style: const TextStyle(
                                    color: Colors.amber,
                                    fontWeight: FontWeight.w600,
                                  ),
                                ),
                              ),
                              DataCell(
                                Text(
                                  '\$${_formatCurrency(row['GrandTotal'])}',
                                  style: const TextStyle(
                                    color: Color(0xFFD6A735),
                                    fontWeight: FontWeight.bold,
                                  ),
                                ),
                              ),
                            ],
                          );
                        }).toList(),
                      ),
                    ),
                  ),
                ),
        ),

        // Summary Card at bottom
        Container(
          padding: const EdgeInsets.symmetric(vertical: 16, horizontal: 24),
          decoration: BoxDecoration(
            color: isDark ? const Color(0xFF16213E) : Colors.white,
            boxShadow: [
              BoxShadow(
                color: Colors.black.withValues(alpha: 0.05),
                blurRadius: 10,
                offset: const Offset(0, -4),
              ),
            ],
            border: Border(
              top: BorderSide(
                color: isDark ? Colors.white10 : Colors.grey[200]!,
              ),
            ),
          ),
          child: SafeArea(
            top: false,
            child: LayoutBuilder(
              builder: (context, constraints) {
                final isCompact = constraints.maxWidth < 560;
                final itemWidth = isCompact
                    ? (constraints.maxWidth - 12) / 2
                    : (constraints.maxWidth - 36) / 4;

                return Wrap(
                  spacing: 12,
                  runSpacing: 14,
                  alignment: WrapAlignment.spaceBetween,
                  children: [
                    SizedBox(
                      width: itemWidth,
                      child: _buildSummaryItem(
                        _reportCountLabel(languageProvider),
                        _totalOrders.toDouble(),
                        Colors.blue,
                        isCount: true,
                      ),
                    ),
                    SizedBox(
                      width: itemWidth,
                      child: _buildSummaryItem(
                        languageProvider.t('total_shipping_fee'),
                        _totalShipping,
                        Colors.amber,
                      ),
                    ),
                    SizedBox(
                      width: itemWidth,
                      child: _buildSummaryItem(
                        languageProvider.t('grand_total'),
                        _totalAmount,
                        const Color(0xFFD6A735),
                      ),
                    ),
                    SizedBox(
                      width: itemWidth,
                      child: _buildSummaryItem(
                        languageProvider.t('company_payable'),
                        _companyPayableAmount,
                        Colors.green,
                      ),
                    ),
                  ],
                );
              },
            ),
          ),
        ),
      ],
    );
  }

  PopupMenuItem<String> _shortcutItem(
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

  Widget _buildSummaryItem(
    String label,
    double amount,
    Color color, {
    bool isCount = false,
  }) {
    return Column(
      mainAxisSize: MainAxisSize.min,
      children: [
        Text(
          label,
          textAlign: TextAlign.center,
          maxLines: 2,
          overflow: TextOverflow.ellipsis,
          style: TextStyle(
            fontSize: 12,
            color: Colors.grey[600],
            fontFamily: GoogleFonts.kantumruyPro().fontFamily,
          ),
        ),
        const SizedBox(height: 4),
        Text(
          isCount ? amount.toInt().toString() : '\$${_formatCurrency(amount)}',
          style: TextStyle(
            fontSize: 18,
            fontWeight: FontWeight.bold,
            color: color,
          ),
        ),
      ],
    );
  }
}
