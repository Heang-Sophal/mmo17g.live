<?php

use App\Models\StoreSetting;
use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Facades\Storage;

if (! function_exists('store_settings')) {
    function store_settings(): StoreSetting
    {
        return Cache::remember('store_settings', 600, function () {
            return StoreSetting::query()->first() ?? new StoreSetting;
        });
    }
}

if (! function_exists('product_images_disk')) {
    function product_images_disk(): string
    {
        return (string) config('filesystems.product_images_disk', 'r2');
    }
}

if (! function_exists('media_disk')) {
    function media_disk(): string
    {
        return (string) config('filesystems.media_disk', config('filesystems.cloud', 'r2'));
    }
}

if (! function_exists('media_prefix')) {
    function media_prefix(string $category): string
    {
        $map = [
            'avatar' => ['config' => 'filesystems.avatar_images_prefix', 'default' => 'images/avatar'],
            'brand' => ['config' => 'filesystems.brand_images_prefix', 'default' => 'images/brands'],
            'banner' => ['config' => 'filesystems.banner_images_prefix', 'default' => 'images/banners'],
            'store' => ['config' => 'filesystems.store_images_prefix', 'default' => 'images/store'],
            'app' => ['config' => 'filesystems.app_images_prefix', 'default' => 'images'],
            'flag' => ['config' => 'filesystems.flag_images_prefix', 'default' => 'flags'],
            'leave' => ['config' => 'filesystems.leave_images_prefix', 'default' => 'images/leaves'],
            'product' => ['config' => 'filesystems.product_images_prefix', 'default' => 'images/products'],
        ];

        $item = $map[$category] ?? null;
        if (! $item) {
            return trim($category, '/');
        }

        return trim((string) config($item['config'], $item['default']), '/');
    }
}

if (! function_exists('media_relative_path')) {
    function media_relative_path(string $category, ?string $filename): ?string
    {
        $clean = trim((string) $filename);
        if ($clean === '') {
            return null;
        }

        return media_prefix($category).'/'.basename($clean);
    }
}

if (! function_exists('media_storage_key')) {
    function media_storage_key(string $category, ?string $filename): ?string
    {
        return media_relative_path($category, $filename);
    }
}

if (! function_exists('media_local_paths')) {
    function media_local_directories(string $category): array
    {
        return match ($category) {
            'avatar' => [public_path('images/avatar')],
            'brand' => [public_path('images/brands')],
            'banner' => [public_path('images/banners')],
            'store' => [public_path('images/store')],
            'app' => [public_path('images')],
            'flag' => [public_path('flags')],
            'leave' => [public_path('images/leaves')],
            'product' => [
                public_path('images/products'),
                storage_path('app/public/images/products'),
            ],
            default => [public_path(trim(media_prefix($category), '/'))],
        };
    }
}

if (! function_exists('media_local_paths')) {
    function media_local_paths(string $category, ?string $filename): array
    {
        $clean = trim((string) $filename);
        if ($clean === '') {
            return [];
        }

        $base = basename($clean);

        return array_map(
            fn ($dir) => rtrim($dir, DIRECTORY_SEPARATOR).DIRECTORY_SEPARATOR.$base,
            media_local_directories($category)
        );
    }
}

if (! function_exists('media_remote_url')) {
    function media_remote_url(string $category, ?string $filename): ?string
    {
        $key = media_storage_key($category, $filename);
        if (! $key) {
            return null;
        }

        try {
            $disk = Storage::disk(media_disk());
            if (! $disk->exists($key)) {
                return null;
            }

            return $disk->url($key);
        } catch (\Throwable $e) {
            return null;
        }
    }
}

if (! function_exists('media_exists')) {
    function media_exists(string $category, ?string $filename): bool
    {
        if (media_remote_url($category, $filename)) {
            return true;
        }

        foreach (media_local_paths($category, $filename) as $path) {
            if (is_file($path)) {
                return true;
            }
        }

        return false;
    }
}

if (! function_exists('media_url')) {
    function media_url(string $category, ?string $filename, ?string $defaultAsset = null): string
    {
        $remoteUrl = media_remote_url($category, $filename);
        if ($remoteUrl) {
            return $remoteUrl;
        }

        $relative = media_relative_path($category, $filename);
        if ($relative) {
            foreach (media_local_paths($category, $filename) as $path) {
                if (is_file($path)) {
                    return asset($relative);
                }
            }
        }

        return $defaultAsset ?: asset('images/no-image.png');
    }
}

if (! function_exists('media_delete')) {
    function media_delete(string $category, ?string $filename): void
    {
        $key = media_storage_key($category, $filename);
        if ($key) {
            try {
                $disk = Storage::disk(media_disk());
                if ($disk->exists($key)) {
                    $disk->delete($key);
                }
            } catch (\Throwable $e) {
            }
        }

        foreach (media_local_paths($category, $filename) as $path) {
            if (is_file($path)) {
                @unlink($path);
            }
        }
    }
}

if (! function_exists('media_put')) {
    function media_put(string $category, string $filename, mixed $contents, ?string $mimeType = null): bool
    {
        $key = media_storage_key($category, $filename);
        if (! $key) {
            return false;
        }

        $options = ['visibility' => 'public'];
        if ($mimeType) {
            $options['ContentType'] = $mimeType;
        }

        return (bool) Storage::disk(media_disk())->put($key, $contents, $options);
    }
}

if (! function_exists('media_contents')) {
    function media_contents(string $category, ?string $filename): ?string
    {
        $key = media_storage_key($category, $filename);
        if ($key) {
            try {
                $disk = Storage::disk(media_disk());
                if ($disk->exists($key)) {
                    return $disk->get($key);
                }
            } catch (\Throwable $e) {
            }
        }

        foreach (media_local_paths($category, $filename) as $path) {
            if (is_file($path)) {
                $contents = @file_get_contents($path);
                if ($contents !== false) {
                    return $contents;
                }
            }
        }

        return null;
    }
}

if (! function_exists('media_mime_type')) {
    function media_mime_type(string $category, ?string $filename): ?string
    {
        $key = media_storage_key($category, $filename);
        if ($key) {
            try {
                $disk = Storage::disk(media_disk());
                if ($disk->exists($key)) {
                    return $disk->mimeType($key) ?: null;
                }
            } catch (\Throwable $e) {
            }
        }

        foreach (media_local_paths($category, $filename) as $path) {
            if (is_file($path) && function_exists('mime_content_type')) {
                $mime = @mime_content_type($path);
                if (is_string($mime) && $mime !== '') {
                    return $mime;
                }
            }
        }

        return null;
    }
}

if (! function_exists('media_data_uri')) {
    function media_data_uri(string $category, ?string $filename): ?string
    {
        $contents = media_contents($category, $filename);
        if ($contents === null) {
            return null;
        }

        $mime = media_mime_type($category, $filename) ?: 'application/octet-stream';

        return 'data:'.$mime.';base64,'.base64_encode($contents);
    }
}

if (! function_exists('avatar_image_url')) {
    function avatar_image_url(?string $filename): string
    {
        $fallback = is_file(public_path('images/avatar/no_avatar.png'))
            ? asset('images/avatar/no_avatar.png')
            : asset('images/avatar/avatar-default.jpg');

        return media_url('avatar', $filename, $fallback);
    }
}

if (! function_exists('brand_image_url')) {
    function brand_image_url(?string $filename): string
    {
        return media_url('brand', $filename, asset('images/brands/no-image.png'));
    }
}

if (! function_exists('banner_image_url')) {
    function banner_image_url(?string $filename): string
    {
        return media_url('banner', $filename, asset('images/banners/no-image.png'));
    }
}

if (! function_exists('store_asset_url')) {
    function store_asset_url(?string $filename): string
    {
        return media_url('store', $filename, asset('images/store/hero_image.jpg'));
    }
}

if (! function_exists('app_image_url')) {
    function app_image_url(?string $filename, ?string $defaultAsset = null): string
    {
        return media_url('app', $filename, $defaultAsset ?: asset('images/logo.png'));
    }
}

if (! function_exists('flag_image_url')) {
    function flag_image_url(?string $filename): string
    {
        return media_url('flag', $filename, asset('flags/gb.svg'));
    }
}

if (! function_exists('leave_image_url')) {
    function leave_image_url(?string $filename): string
    {
        return media_url('leave', $filename, asset('images/leaves/no-image.png'));
    }
}

if (! function_exists('product_images_prefix')) {
    function product_images_prefix(): string
    {
        return trim((string) config('filesystems.product_images_prefix', 'images/products'), '/');
    }
}

if (! function_exists('product_image_storage_key')) {
    function product_image_storage_key(?string $filename): ?string
    {
        $clean = trim((string) $filename);
        if ($clean === '' || strtolower($clean) === 'no-image.png') {
            return null;
        }

        return product_images_prefix().'/'.basename($clean);
    }
}

if (! function_exists('product_image_remote_url')) {
    function product_image_remote_url(?string $filename): ?string
    {
        $key = product_image_storage_key($filename);
        if (! $key) {
            return null;
        }

        try {
            $disk = Storage::disk(product_images_disk());
            if (! $disk->exists($key)) {
                return null;
            }

            return $disk->url($key);
        } catch (\Throwable $e) {
            return null;
        }
    }
}

if (! function_exists('product_image_exists')) {
    function product_image_exists(?string $filename): bool
    {
        if (product_image_remote_url($filename)) {
            return true;
        }

        $clean = trim((string) $filename);
        if ($clean === '' || strtolower($clean) === 'no-image.png') {
            return is_file(public_path('images/products/no-image.png'));
        }

        $base = basename($clean);

        return is_file(public_path('images/products/'.$base))
            || is_file(storage_path('app/public/images/products/'.$base));
    }
}

if (! function_exists('product_image_url')) {
    function product_image_url(?string $filename): string
    {
        $remoteUrl = product_image_remote_url($filename);
        if ($remoteUrl) {
            return $remoteUrl;
        }

        $clean = trim((string) $filename);
        if ($clean === '' || strtolower($clean) === 'no-image.png') {
            return asset('images/products/no-image.png');
        }

        if (is_file(public_path('images/products/'.basename($clean)))
            || is_file(storage_path('app/public/images/products/'.basename($clean)))) {
            return asset('images/products/'.basename($clean));
        }

        return asset('images/products/no-image.png');
    }
}
