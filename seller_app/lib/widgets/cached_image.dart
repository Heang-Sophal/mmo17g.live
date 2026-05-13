import 'package:cached_network_image/cached_network_image.dart';
import 'package:flutter/material.dart';

/// Reusable cached network image with consistent placeholder and error fallback.
///
/// Uses flutter_cache_manager under the hood — images are stored on disk
/// and reused across sessions automatically.
class CachedImage extends StatelessWidget {
  const CachedImage({
    super.key,
    required this.url,
    this.width,
    this.height,
    this.fit = BoxFit.cover,
    this.borderRadius,
    this.placeholder,
    this.errorWidget,
    this.shape,
  });

  final String? url;
  final double? width;
  final double? height;
  final BoxFit fit;
  final BorderRadius? borderRadius;
  final Widget? placeholder;
  final Widget? errorWidget;
  final BoxShape? shape;

  @override
  Widget build(BuildContext context) {
    final colorScheme = Theme.of(context).colorScheme;

    Widget image;

    if (url == null || url!.trim().isEmpty) {
      image = _error(colorScheme);
    } else {
      image = CachedNetworkImage(
        imageUrl: url!,
        width: width,
        height: height,
        fit: fit,
        placeholder: (context, url) =>
            placeholder ?? _shimmer(colorScheme),
        errorWidget: (context, url, error) =>
            errorWidget ?? _error(colorScheme),
      );
    }

    if (shape == BoxShape.circle) {
      return ClipOval(child: SizedBox(width: width, height: height, child: image));
    }

    if (borderRadius != null) {
      return ClipRRect(borderRadius: borderRadius!, child: image);
    }

    return image;
  }

  Widget _shimmer(ColorScheme cs) => Container(
        width: width,
        height: height,
        color: cs.surfaceContainerHighest,
      );

  Widget _error(ColorScheme cs) => Container(
        width: width,
        height: height,
        color: cs.surfaceContainerHighest,
        child: Icon(
          Icons.broken_image_rounded,
          size: (width != null && height != null)
              ? (width! < height! ? width! : height!) * 0.45
              : 24,
          color: cs.onSurface.withValues(alpha: 0.35),
        ),
      );
}
