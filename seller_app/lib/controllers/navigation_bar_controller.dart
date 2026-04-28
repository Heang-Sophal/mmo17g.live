import 'package:flutter/material.dart';

/// Simple controller for navigation bar visibility
class NavigationBarController extends ChangeNotifier {
  bool _isVisible = true;

  bool get isVisible => _isVisible;

  void hide() {
    if (_isVisible) {
      _isVisible = false;
      notifyListeners();
    }
  }

  void show() {
    if (!_isVisible) {
      _isVisible = true;
      notifyListeners();
    }
  }

  void toggle() {
    _isVisible = !_isVisible;
    notifyListeners();
  }
}
