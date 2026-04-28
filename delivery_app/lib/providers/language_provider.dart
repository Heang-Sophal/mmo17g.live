import 'package:delivery_app/l10n/app_translations.dart';
import 'package:flutter/material.dart';
import 'package:shared_preferences/shared_preferences.dart';

class LanguageProvider extends ChangeNotifier {
  static const String _storageKey = 'delivery_app_language';

  Locale _locale = const Locale('km');

  Locale get locale => _locale;
  bool get isKhmer => _locale.languageCode == 'km';
  String get languageName => isKhmer ? 'ភាសាខ្មែរ' : 'English';

  LanguageProvider() {
    _loadLanguage();
  }

  Future<void> _loadLanguage() async {
    final prefs = await SharedPreferences.getInstance();
    final saved = prefs.getString(_storageKey);
    if (saved != null && saved.isNotEmpty) {
      _locale = Locale(saved);
      notifyListeners();
    }
  }

  Future<void> toggleLanguage() async {
    final nextCode = isKhmer ? 'en' : 'km';
    _locale = Locale(nextCode);
    final prefs = await SharedPreferences.getInstance();
    await prefs.setString(_storageKey, nextCode);
    notifyListeners();
  }

  String t(String key, {Map<String, String>? params}) {
    return AppTranslations.get(key, _locale.languageCode, params);
  }
}
