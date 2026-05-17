import 'package:delivery_app/providers/language_provider.dart';
import 'package:delivery_app/providers/auth_provider.dart';
import 'package:delivery_app/services/delivery_api_service.dart';
import 'package:flutter/material.dart';
import 'package:provider/provider.dart';

class RecordGoodsScreen extends StatefulWidget {
  const RecordGoodsScreen({
    super.key,
    required this.orderId,
    required this.products,
    this.initialAccepted = false,
  });

  final String orderId;
  final List<Map<String, dynamic>> products;
  final bool initialAccepted;

  @override
  State<RecordGoodsScreen> createState() => _RecordGoodsScreenState();
}

class _RecordGoodsScreenState extends State<RecordGoodsScreen> {
  late bool _accepted;
  bool _isSaving = false;
  final DeliveryApiService _api = DeliveryApiService();

  @override
  void initState() {
    super.initState();
    _accepted = widget.initialAccepted;
  }

  @override
  Widget build(BuildContext context) {
    final languageProvider = context.watch<LanguageProvider>();
    final isDark = Theme.of(context).brightness == Brightness.dark;
    final surfaceColor = isDark ? const Color(0xFF21190B) : Colors.white;
    final borderColor = isDark
        ? Colors.white.withValues(alpha: 0.08)
        : const Color(0xFFD7E3E1);
    final textColor = isDark
        ? const Color(0xFFFFE8A7)
        : const Color(0xFF201607);
    final mutedColor = isDark ? Colors.white70 : const Color(0xFF64748B);

    return Scaffold(
      appBar: AppBar(
        title: Text('${languageProvider.t('order_ref')}: ${widget.orderId}'),
      ),
      body: Padding(
        padding: const EdgeInsets.all(16),
        child: Column(
          children: [
            Expanded(
              child: ListView.separated(
                itemCount: widget.products.length,
                separatorBuilder: (context, index) =>
                    const SizedBox(height: 10),
                itemBuilder: (context, i) {
                  final p = widget.products[i];
                  final name = p['name']?.toString() ?? '-';
                  final qty = p['quantity']?.toString() ?? '-';
                  final total = p['total'] != null
                      ? p['total'].toString()
                      : '-';
                  return Container(
                    decoration: BoxDecoration(
                      color: surfaceColor,
                      borderRadius: BorderRadius.circular(18),
                      border: Border.all(color: borderColor),
                    ),
                    child: ListTile(
                      leading: Container(
                        width: 42,
                        height: 42,
                        decoration: BoxDecoration(
                          color: const Color(
                            0xFFD6A735,
                          ).withValues(alpha: isDark ? 0.18 : 0.12),
                          borderRadius: BorderRadius.circular(14),
                        ),
                        child: Icon(
                          Icons.inventory_2_outlined,
                          color: const Color(0xFFD6A735),
                        ),
                      ),
                      title: Text(
                        name,
                        style: TextStyle(
                          color: textColor,
                          fontWeight: FontWeight.w700,
                        ),
                      ),
                      subtitle: Text(
                        '${languageProvider.t('qty')}: $qty',
                        style: TextStyle(color: mutedColor),
                      ),
                      trailing: Text(
                        total,
                        style: TextStyle(
                          color: textColor,
                          fontWeight: FontWeight.w800,
                        ),
                      ),
                    ),
                  );
                },
              ),
            ),
            const SizedBox(height: 12),
            SizedBox(
              width: double.infinity,
              child: FilledButton(
                onPressed: _onPrimaryPressed,
                style: FilledButton.styleFrom(
                  padding: const EdgeInsets.symmetric(vertical: 14),
                ),
                child: _isSaving
                    ? const SizedBox(
                        width: 18,
                        height: 18,
                        child: CircularProgressIndicator(
                          strokeWidth: 2,
                          color: Colors.white,
                        ),
                      )
                    : Text(
                        _accepted
                            ? languageProvider.t('complete_record')
                            : languageProvider.t('accept'),
                      ),
              ),
            ),
            const SizedBox(height: 8),
            SizedBox(
              width: double.infinity,
              child: OutlinedButton(
                onPressed: () => Navigator.pop(context),
                style: OutlinedButton.styleFrom(
                  padding: const EdgeInsets.symmetric(vertical: 14),
                ),
                child: Text(languageProvider.t('cancel')),
              ),
            ),
          ],
        ),
      ),
    );
  }

  Future<void> _onPrimaryPressed() async {
    final languageProvider = context.read<LanguageProvider>();
    final token = context.read<AuthProvider>().token;
    if (token == null || token.isEmpty) return;

    if (_isSaving) return;

    if (!_accepted) {
      setState(() => _isSaving = true);
      try {
        _api.setToken(token);
        await _api.acceptOrder(widget.orderId, recordMode: true);
        if (!mounted) return;
        setState(() {
          _accepted = true;
          _isSaving = false;
        });

        if (!mounted) return;
        ScaffoldMessenger.of(context).showSnackBar(
          SnackBar(content: Text(languageProvider.t('order_accepted'))),
        );
      } catch (e) {
        if (mounted) setState(() => _isSaving = false);
        if (!mounted) return;
        ScaffoldMessenger.of(context).showSnackBar(
          SnackBar(
            content: Text(e.toString()),
            backgroundColor: const Color(0xFFDC2626),
          ),
        );
      }

      return;
    }

    // Complete record
    setState(() => _isSaving = true);
    try {
      _api.setToken(token);
      await _api.completeOrder(widget.orderId, recordMode: true);
      if (!mounted) return;
      setState(() => _isSaving = false);

      if (!mounted) return;
      ScaffoldMessenger.of(context).showSnackBar(
        SnackBar(
          content: Text(languageProvider.t('order_completed')),
          backgroundColor: const Color(0xFF16A34A),
        ),
      );

      if (!mounted) return;
      Navigator.pop(context, {'orderId': widget.orderId, 'completed': true});
    } catch (e) {
      if (mounted) setState(() => _isSaving = false);
      if (!mounted) return;
      ScaffoldMessenger.of(context).showSnackBar(
        SnackBar(
          content: Text(e.toString()),
          backgroundColor: const Color(0xFFDC2626),
        ),
      );
    }
  }
}
