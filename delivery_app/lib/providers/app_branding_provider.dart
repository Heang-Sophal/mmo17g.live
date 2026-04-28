import 'dart:convert';

import 'package:delivery_app/config/api_config.dart';
import 'package:flutter/foundation.dart';
import 'package:http/http.dart' as http;

class AppBrandingProvider extends ChangeNotifier {
  AppBrandingProvider({
    this.defaultTitle = '17G Delivery',
    this.appType = 'delivery',
  }) : _appTitle = defaultTitle;

  final String defaultTitle;
  final String appType;

  String _appTitle;
  String? _logoUrl;

  String get appTitle => _appTitle;
  String? get logoUrl => _logoUrl;

  Future<void> loadBranding() async {
    _appTitle = defaultTitle;
    _logoUrl = null;

    try {
      final response = await http
          .get(
            Uri.parse('${ApiConfig.baseUrl}/get-mobile-app-name?app=$appType'),
          )
          .timeout(const Duration(seconds: 15));

      if (response.statusCode != 200) {
        return;
      }

      final data = json.decode(response.body) as Map<String, dynamic>;
      final mobileAppName = data['mobile_app_name']?.toString().trim();
      final mobileAppLogo = data['mobile_app_logo']?.toString().trim();
      final mobileAppLogoUrl = data['mobile_app_logo_url']?.toString().trim();

      if (mobileAppName != null && mobileAppName.isNotEmpty) {
        _appTitle = mobileAppName;
      }

      if (mobileAppLogoUrl != null && mobileAppLogoUrl.isNotEmpty) {
        _logoUrl = mobileAppLogoUrl;
      } else if (mobileAppLogo != null && mobileAppLogo.isNotEmpty) {
        _logoUrl =
            '${ApiConfig.baseUrl.replaceAll('/api', '')}/images/$mobileAppLogo';
      }
    } catch (e) {
      debugPrint('Failed to load delivery app branding: $e');
    }

    notifyListeners();
  }
}
