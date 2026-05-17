import 'dart:math' as math;

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
    this.cacheWidth,
    this.cacheHeight,
  });

  final String? url;
  final double? width;
  final double? height;
  final BoxFit fit;
  final BorderRadius? borderRadius;
  final Widget? placeholder;
  final Widget? errorWidget;
  final BoxShape? shape;
  final int? cacheWidth;
  final int? cacheHeight;

  @override
  Widget build(BuildContext context) {
    final colorScheme = Theme.of(context).colorScheme;

    Widget image;

    if (url == null || url!.trim().isEmpty) {
      image = _error(colorScheme);
    } else {
      final targetCacheWidth = _scaledCacheSize(context, cacheWidth, width);
      final targetCacheHeight = _scaledCacheSize(context, cacheHeight, height);

      image = CachedNetworkImage(
        imageUrl: url!,
        width: width,
        height: height,
        fit: fit,
        memCacheWidth: targetCacheWidth,
        memCacheHeight: targetCacheHeight,
        maxWidthDiskCache: targetCacheWidth,
        maxHeightDiskCache: targetCacheHeight,
        useOldImageOnUrlChange: true,
        fadeInDuration: const Duration(milliseconds: 120),
        fadeOutDuration: const Duration(milliseconds: 80),
        placeholder: (context, url) => placeholder ?? _shimmer(colorScheme),
        errorWidget: (context, url, error) =>
            errorWidget ?? _error(colorScheme),
      );
    }

    if (shape == BoxShape.circle) {
      return ClipOval(
        child: SizedBox(width: width, height: height, child: image),
      );
    }

    if (borderRadius != null) {
      return ClipRRect(borderRadius: borderRadius!, child: image);
    }

    return image;
  }

  int? _scaledCacheSize(
    BuildContext context,
    int? explicitSize,
    double? logicalSize,
  ) {
    if (explicitSize != null) return explicitSize;
    if (logicalSize == null || !logicalSize.isFinite) return null;

    final dpr = MediaQuery.maybeOf(context)?.devicePixelRatio ?? 1;
    return math.max(1, (logicalSize * dpr).round());
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
