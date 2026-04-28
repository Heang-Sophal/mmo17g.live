import 'package:flutter/material.dart';
import 'package:shared_preferences/shared_preferences.dart';
import 'package:seller_app/l10n/app_translations.dart';

class LanguageProvider extends ChangeNotifier {
  Locale _locale = const Locale('km'); // Default to Khmer

  Locale get locale => _locale;
  String get languageCode => _locale.languageCode;
  String get languageName =>
      _locale.languageCode == 'km' ? 'ភាសាខ្មែរ' : 'English';

  static const String _languageKey = 'app_language';

  LanguageProvider() {
    _loadLanguage();
  }

  Future<void> _loadLanguage() async {
    final prefs = await SharedPreferences.getInstance();
    final savedLanguage = prefs.getString(_languageKey);
    if (savedLanguage != null) {
      _locale = Locale(savedLanguage);
      notifyListeners();
    }
  }

  Future<void> setLanguage(String languageCode) async {
    if (_locale.languageCode == languageCode) return;

    _locale = Locale(languageCode);
    final prefs = await SharedPreferences.getInstance();
    await prefs.setString(_languageKey, languageCode);
    notifyListeners();
  }

  void toggleLanguage() {
    final newLanguage = _locale.languageCode == 'km' ? 'en' : 'km';
    setLanguage(newLanguage);
  }

  bool get isKhmer => _locale.languageCode == 'km';

  /// Translate a key to the current language
  String t(String key) {
    return AppTranslations.get(key, _locale.languageCode);
  }
}
