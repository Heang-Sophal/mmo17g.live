<?php

declare(strict_types=1);

$root = dirname(__DIR__);

$apps = [
    'seller' => [
        'source_env' => 'SELLER_APP_ICON_SOURCE',
        'source_pattern' => $root.'/public/images/seller_mobile_logo_*',
        'fallbacks' => [
            $root.'/public/images/logo.png',
            $root.'/seller_app/assets/app_icon.png',
        ],
        'destination' => $root.'/seller_app/assets/app_icon.png',
    ],
    'delivery' => [
        'source_env' => 'DELIVERY_APP_ICON_SOURCE',
        'source_pattern' => $root.'/public/images/delivery_mobile_logo_*',
        'fallbacks' => [
            $root.'/public/images/logo.png',
            $root.'/delivery_app/assets/app_icon.png',
        ],
        'destination' => $root.'/delivery_app/assets/app_icon.png',
    ],
];

foreach ($apps as $name => $config) {
    $source = resolveSource($config);
    if (! $source) {
        fwrite(STDERR, "No icon source found for {$name} app.\n");
        exit(1);
    }

    writeSquarePng($source, $config['destination']);
    echo ucfirst($name)." icon source: {$source}\n";
    echo ucfirst($name)." icon written: {$config['destination']}\n";
}

echo "\nNext:\n";
echo "  cd seller_app && dart run flutter_launcher_icons\n";
echo "  cd delivery_app && dart run flutter_launcher_icons\n";

function resolveSource(array $config): ?string
{
    $envSource = getenv($config['source_env']);
    if (is_string($envSource) && $envSource !== '' && is_file($envSource)) {
        return $envSource;
    }

    $matches = glob($config['source_pattern']) ?: [];
    usort($matches, static fn ($a, $b) => filemtime($b) <=> filemtime($a));

    foreach ($matches as $match) {
        if (is_file($match)) {
            return $match;
        }
    }

    foreach ($config['fallbacks'] as $fallback) {
        if (is_file($fallback)) {
            return $fallback;
        }
    }

    return null;
}

function writeSquarePng(string $source, string $destination): void
{
    if (! extension_loaded('gd')) {
        fwrite(STDERR, "PHP GD extension is required to prepare mobile app icons.\n");
        exit(1);
    }

    $image = createImage($source);
    if (! $image) {
        fwrite(STDERR, "Unsupported icon image: {$source}\n");
        exit(1);
    }

    $sourceWidth = imagesx($image);
    $sourceHeight = imagesy($image);
    $canvasSize = 512;
    $canvas = imagecreatetruecolor($canvasSize, $canvasSize);

    imagealphablending($canvas, false);
    imagesavealpha($canvas, true);
    $transparent = imagecolorallocatealpha($canvas, 255, 255, 255, 127);
    imagefilledrectangle($canvas, 0, 0, $canvasSize, $canvasSize, $transparent);

    $scale = min($canvasSize / $sourceWidth, $canvasSize / $sourceHeight);
    $targetWidth = (int) round($sourceWidth * $scale);
    $targetHeight = (int) round($sourceHeight * $scale);
    $targetX = (int) floor(($canvasSize - $targetWidth) / 2);
    $targetY = (int) floor(($canvasSize - $targetHeight) / 2);

    imagecopyresampled(
        $canvas,
        $image,
        $targetX,
        $targetY,
        0,
        0,
        $targetWidth,
        $targetHeight,
        $sourceWidth,
        $sourceHeight
    );

    $destinationDir = dirname($destination);
    if (! is_dir($destinationDir)) {
        mkdir($destinationDir, 0775, true);
    }

    imagepng($canvas, $destination);
    imagedestroy($canvas);
    imagedestroy($image);
}

function createImage(string $source)
{
    $extension = strtolower(pathinfo($source, PATHINFO_EXTENSION));

    return match ($extension) {
        'png' => imagecreatefrompng($source),
        'jpg', 'jpeg' => imagecreatefromjpeg($source),
        'gif' => imagecreatefromgif($source),
        'webp' => imagecreatefromwebp($source),
        default => false,
    };
}
