<?php

namespace App\Console\Commands;

use App\Models\Brand;
use App\Models\Language;
use App\Models\Leave;
use App\Models\Product;
use App\Models\Setting;
use App\Models\StoreBanner;
use App\Models\StoreSetting;
use App\Models\User;
use Illuminate\Console\Command;

class MigrateAllImagesToR2 extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'media-images:migrate-to-r2
                            {--category=* : Limit migration to one or more categories (product, avatar, brand, banner, store, app, flag, leave)}
                            {--force : Re-upload files even if they already exist on the target disk}';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Copy all database-referenced image assets into the configured cloud disk (Cloudflare R2).';

    public function handle(): int
    {
        $available = ['product', 'avatar', 'brand', 'banner', 'store', 'app', 'flag', 'leave'];
        $requested = array_values(array_filter(array_map('trim', (array) $this->option('category'))));
        $categories = empty($requested) ? $available : array_values(array_intersect($available, $requested));

        if (empty($categories)) {
            $this->error('No valid categories were selected.');

            return self::FAILURE;
        }

        $force = (bool) $this->option('force');
        $overallFailed = 0;

        foreach ($categories as $category) {
            [$uploaded, $skipped, $failed, $count] = $this->migrateCategory($category, $force);

            $this->newLine();
            $this->info(strtoupper($category).' images');
            $this->line("Referenced: {$count}");
            $this->line("Uploaded: {$uploaded}");
            $this->line("Skipped: {$skipped}");
            $this->line("Failed: {$failed}");

            $overallFailed += $failed;
        }

        $this->newLine();
        $this->comment('Local files were kept in place as a safety fallback.');

        return $overallFailed > 0 ? self::FAILURE : self::SUCCESS;
    }

    private function migrateCategory(string $category, bool $force): array
    {
        $files = $this->referencedFilesForCategory($category);
        $disk = media_disk();

        if ($files->isEmpty()) {
            return [0, 0, 0, 0];
        }

        $uploaded = 0;
        $skipped = 0;
        $failed = 0;

        $bar = $this->output->createProgressBar($files->count());
        $bar->start();

        foreach ($files as $storedValue) {
            $basename = basename($storedValue);
            $key = media_storage_key($category, $basename);

            try {
                if (! $key) {
                    $skipped++;
                    $bar->advance();

                    continue;
                }

                if (! $force && media_remote_url($category, $basename)) {
                    $skipped++;
                    $bar->advance();

                    continue;
                }

                $sourcePath = null;
                foreach (media_local_paths($category, $storedValue) as $path) {
                    if (is_file($path)) {
                        $sourcePath = $path;
                        break;
                    }
                }

                if (! $sourcePath) {
                    $failed++;
                    $this->newLine();
                    $this->warn("Missing local source for [{$category}] {$storedValue}");
                    $bar->advance();

                    continue;
                }

                $contents = @file_get_contents($sourcePath);
                if ($contents === false) {
                    $failed++;
                    $this->newLine();
                    $this->warn("Unable to read [{$sourcePath}]");
                    $bar->advance();

                    continue;
                }

                $mime = function_exists('mime_content_type')
                    ? (mime_content_type($sourcePath) ?: 'application/octet-stream')
                    : 'application/octet-stream';

                if (! media_put($category, $basename, $contents, $mime)) {
                    $failed++;
                    $this->newLine();
                    $this->warn("Upload failed for [{$category}] {$storedValue}");
                    $bar->advance();

                    continue;
                }

                $uploaded++;
            } catch (\Throwable $e) {
                $failed++;
                $this->newLine();
                $this->warn("Error migrating [{$category}] {$storedValue}: ".$e->getMessage());
            }

            $bar->advance();
        }

        $bar->finish();
        $this->newLine();

        return [$uploaded, $skipped, $failed, $files->count()];
    }

    private function referencedFilesForCategory(string $category)
    {
        $skip = match ($category) {
            'product' => ['no-image.png'],
            'avatar' => ['no_avatar.png', 'avatar-default.jpg'],
            'brand' => ['no-image.png'],
            'banner' => ['no-image.png'],
            'flag' => ['no-image.png'],
            'leave' => ['no_image.png'],
            'store' => [],
            'app' => ['logo-default.png'],
            default => [],
        };

        $values = match ($category) {
            'product' => Product::query()->whereNotNull('image')->pluck('image'),
            'avatar' => User::query()->whereNotNull('avatar')->pluck('avatar'),
            'brand' => Brand::query()->whereNotNull('image')->pluck('image'),
            'banner' => StoreBanner::query()->whereNotNull('image')->pluck('image'),
            'store' => StoreSetting::query()->get(['logo_path', 'favicon_path', 'hero_image_path'])
                ->flatMap(fn ($row) => [$row->logo_path, $row->favicon_path, $row->hero_image_path]),
            'app' => Setting::query()->get(['logo', 'favicon', 'mobile_app_logo'])
                ->flatMap(fn ($row) => [$row->logo, $row->favicon, $row->mobile_app_logo]),
            'flag' => Language::query()->whereNotNull('flag')->pluck('flag'),
            'leave' => Leave::query()->whereNotNull('attachment')->pluck('attachment'),
            default => collect(),
        };

        return collect($values)
            ->filter(fn ($value) => is_string($value) && trim($value) !== '')
            ->map(fn ($value) => trim($value))
            ->reject(fn ($value) => in_array(basename($value), $skip, true))
            ->unique()
            ->sort()
            ->values();
    }
}
