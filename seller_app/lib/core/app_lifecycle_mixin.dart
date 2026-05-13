import 'package:flutter/widgets.dart';

/// Mix into any [State] to receive a callback when the app returns to foreground.
///
/// Usage:
///   class MyScreenState extends State with WidgetsBindingObserver, AppLifecycleMixin {
///
///     @override
///     void onAppResumed() => _reload();
///   }
mixin AppLifecycleMixin<T extends StatefulWidget>
    on State<T>, WidgetsBindingObserver {
  @override
  void initState() {
    super.initState();
    WidgetsBinding.instance.addObserver(this);
  }

  @override
  void dispose() {
    WidgetsBinding.instance.removeObserver(this);
    super.dispose();
  }

  @override
  void didChangeAppLifecycleState(AppLifecycleState state) {
    if (state == AppLifecycleState.resumed) {
      onAppResumed();
    }
  }

  /// Called when the app comes back to the foreground.
  /// Override in your State to refresh data or re-check permissions.
  void onAppResumed() {}
}
