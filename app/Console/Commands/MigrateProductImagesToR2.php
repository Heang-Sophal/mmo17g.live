<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use Illuminate\Support\Facades\Storage;

class MigrateProductImagesToR2 extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'product-images:migrate-to-r2
                            {--disk= : Target disk name. Defaults to filesystems.product_images_disk}
                            {--prefix= : Target folder prefix. Defaults to filesystems.product_images_prefix}
                            {--force : Re-upload files even if they already exist on the target disk}';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Copy existing local product images into the configured cloud disk (Cloudflare R2).';

    public function handle(): int
    {
        $diskName = trim((string) ($this->option('disk') ?: product_images_disk()));
        $prefix = trim((string) ($this->option('prefix') ?: product_images_prefix()), '/');
        $force = (bool) $this->option('force');

        $diskConfig = config('filesystems.disks.'.$diskName);
        if (! is_array($diskConfig) || empty($diskConfig['driver'])) {
            $this->error("Disk [{$diskName}] is not configured correctly.");

            return self::FAILURE;
        }

        $disk = Storage::disk($diskName);
        $sourceDirectories = [
            storage_path('app/public/images/products'),
            public_path('images/products'),
        ];

        $files = collect($sourceDirectories)
            ->filter(fn ($dir) => is_dir($dir))
            ->flatMap(function ($dir) {
                $entries = @scandir($dir) ?: [];

                return collect($entries)->map(fn ($entry) => [$dir, $entry]);
            })
            ->filter(function (array $entry) {
                [$dir, $filename] = $entry;

                return $filename !== '.'
                    && $filename !== '..'
                    && $filename !== ''
                    && ! is_dir($dir.DIRECTORY_SEPARATOR.$filename);
            })
            ->map(fn (array $entry) => basename($entry[1]))
            ->filter(fn ($filename) => strtolower($filename) !== 'no-image.png')
            ->unique()
            ->sort()
            ->values();

        if ($files->isEmpty()) {
            $this->warn('No local product images were found to migrate.');

            return self::SUCCESS;
        }

        $this->info("Target disk: {$diskName}");
        $this->info("Target prefix: {$prefix}");
        $this->info('Found '.$files->count().' local product image(s).');

        $bar = $this->output->createProgressBar($files->count());
        $bar->start();

        $uploaded = 0;
        $skipped = 0;
        $failed = 0;

        foreach ($files as $filename) {
            $key = $prefix.'/'.basename($filename);

            try {
                if (! $force && $disk->exists($key)) {
                    $skipped++;
                    $bar->advance();

                    continue;
                }

                $sourcePath = $this->resolveSourcePath($filename, $sourceDirectories);
                if (! $sourcePath) {
                    $failed++;
                    $this->newLine();
                    $this->warn("Missing source file for [{$filename}]");
                    $bar->advance();

                    continue;
                }

                $stream = @fopen($sourcePath, 'r');
                if (! is_resource($stream)) {
                    $failed++;
                    $this->newLine();
                    $this->warn("Unable to read [{$sourcePath}]");
                    $bar->advance();

                    continue;
                }

                $saved = $disk->put($key, $stream, [
                    'visibility' => 'public',
                    'ContentType' => $this->detectMimeType($sourcePath),
                ]);

                if (is_resource($stream)) {
                    fclose($stream);
                }

                if (! $saved) {
                    $failed++;
                    $this->newLine();
                    $this->warn("Upload failed for [{$filename}]");
                    $bar->advance();

                    continue;
                }

                $uploaded++;
            } catch (\Throwable $e) {
                $failed++;
                $this->newLine();
                $this->warn("Error migrating [{$filename}]: ".$e->getMessage());
            }

            $bar->advance();
        }

        $bar->finish();
        $this->newLine(2);
        $this->info("Uploaded: {$uploaded}");
        $this->line("Skipped: {$skipped}");
        $this->line("Failed: {$failed}");
        $this->comment('Local files were kept in place as a safety fallback.');

        return $failed > 0 ? self::FAILURE : self::SUCCESS;
    }

    private function resolveSourcePath(string $filename, array $directories): ?string
    {
        foreach ($directories as $dir) {
            $path = rtrim($dir, DIRECTORY_SEPARATOR).DIRECTORY_SEPARATOR.basename($filename);
            if (is_file($path)) {
                return $path;
            }
        }

        return null;
    }

    private function detectMimeType(string $path): string
    {
        if (function_exists('mime_content_type')) {
            $mime = @mime_content_type($path);
            if (is_string($mime) && $mime !== '') {
                return $mime;
            }
        }

        return 'application/octet-stream';
    }
}
