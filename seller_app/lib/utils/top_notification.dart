import 'package:flutter/material.dart';

enum TopNotificationType { info, success, warning, error }

/// Show a polished notification banner from the top of the screen.
void showTopNotification(
  BuildContext context,
  String message, {
  Duration duration = const Duration(seconds: 2),
  TopNotificationType type = TopNotificationType.info,
}) {
  final overlay = Overlay.of(context);
  final overlayEntry = OverlayEntry(
    builder: (context) =>
        _TopNotification(message: message, duration: duration, type: type),
  );

  overlay.insert(overlayEntry);

  Future.delayed(duration, () {
    overlayEntry.remove();
  });
}

class _TopNotification extends StatefulWidget {
  final String message;
  final Duration duration;
  final TopNotificationType type;

  const _TopNotification({
    required this.message,
    required this.duration,
    required this.type,
  });

  @override
  State<_TopNotification> createState() => _TopNotificationState();
}

class _TopNotificationState extends State<_TopNotification>
    with SingleTickerProviderStateMixin {
  late final AnimationController _controller;
  late final Animation<double> _offsetAnimation;
  late final Animation<double> _opacityAnimation;

  @override
  void initState() {
    super.initState();
    _controller = AnimationController(
      duration: const Duration(milliseconds: 320),
      vsync: this,
    );
    _offsetAnimation = Tween<double>(
      begin: -120,
      end: 0,
    ).animate(CurvedAnimation(parent: _controller, curve: Curves.easeOutCubic));
    _opacityAnimation = CurvedAnimation(
      parent: _controller,
      curve: Curves.easeOut,
    );
    _controller.forward();

    Future.delayed(widget.duration - const Duration(milliseconds: 320), () {
      if (mounted) {
        _controller.reverse();
      }
    });
  }

  @override
  void dispose() {
    _controller.dispose();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    final theme = Theme.of(context);
    final scheme = _notificationScheme(widget.type);

    return Positioned(
      top: 0,
      left: 0,
      right: 0,
      child: SafeArea(
        bottom: false,
        child: AnimatedBuilder(
          animation: _controller,
          builder: (context, child) {
            return Opacity(
              opacity: _opacityAnimation.value.clamp(0, 1),
              child: Transform.translate(
                offset: Offset(0, _offsetAnimation.value),
                child: child,
              ),
            );
          },
          child: Container(
            margin: const EdgeInsets.fromLTRB(16, 8, 16, 0),
            padding: const EdgeInsets.symmetric(horizontal: 16, vertical: 14),
            decoration: BoxDecoration(
              gradient: LinearGradient(
                colors: [scheme.primary, scheme.secondary],
                begin: Alignment.topLeft,
                end: Alignment.bottomRight,
              ),
              borderRadius: BorderRadius.circular(22),
              border: Border.all(color: Colors.white.withValues(alpha: 0.18)),
              boxShadow: [
                BoxShadow(
                  color: scheme.primary.withValues(alpha: 0.28),
                  blurRadius: 24,
                  offset: const Offset(0, 12),
                ),
              ],
            ),
            child: Row(
              children: [
                Container(
                  width: 38,
                  height: 38,
                  decoration: BoxDecoration(
                    color: Colors.white.withValues(alpha: 0.18),
                    shape: BoxShape.circle,
                  ),
                  child: Icon(scheme.icon, color: Colors.white, size: 20),
                ),
                const SizedBox(width: 12),
                Expanded(
                  child: Text(
                    widget.message,
                    maxLines: 3,
                    overflow: TextOverflow.ellipsis,
                    style: theme.textTheme.bodyMedium?.copyWith(
                      color: Colors.white,
                      fontWeight: FontWeight.w700,
                      fontSize: 13.5,
                      height: 1.35,
                      decoration: TextDecoration.none,
                    ),
                  ),
                ),
              ],
            ),
          ),
        ),
      ),
    );
  }

  _NotificationVisualScheme _notificationScheme(TopNotificationType type) {
    switch (type) {
      case TopNotificationType.success:
        return const _NotificationVisualScheme(
          icon: Icons.check_circle_rounded,
          primary: Color(0xFF16A34A),
          secondary: Color(0xFF22C55E),
        );
      case TopNotificationType.warning:
        return const _NotificationVisualScheme(
          icon: Icons.warning_amber_rounded,
          primary: Color(0xFFF59E0B),
          secondary: Color(0xFFF97316),
        );
      case TopNotificationType.error:
        return const _NotificationVisualScheme(
          icon: Icons.error_rounded,
          primary: Color(0xFFDC2626),
          secondary: Color(0xFFEF4444),
        );
      case TopNotificationType.info:
        return const _NotificationVisualScheme(
          icon: Icons.notifications_active_rounded,
          primary: Color(0xFF5B5AE6),
          secondary: Color(0xFF7C73FF),
        );
    }
  }
}

class _NotificationVisualScheme {
  final IconData icon;
  final Color primary;
  final Color secondary;

  const _NotificationVisualScheme({
    required this.icon,
    required this.primary,
    required this.secondary,
  });
}
