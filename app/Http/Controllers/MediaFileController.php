<?php

namespace App\Http\Controllers;

class MediaFileController extends Controller
{
    public function avatar(string $filename)
    {
        return $this->serve('avatar', $filename);
    }

    public function brand(string $filename)
    {
        return $this->serve('brand', $filename);
    }

    public function banner(string $filename)
    {
        return $this->serve('banner', $filename);
    }

    public function store(string $filename)
    {
        return $this->serve('store', $filename);
    }

    public function leave(string $filename)
    {
        return $this->serve('leave', $filename);
    }

    public function flag(string $filename)
    {
        return $this->serve('flag', $filename);
    }

    public function app(string $filename)
    {
        return $this->serve('app', $filename);
    }

    private function serve(string $category, string $filename)
    {
        $filename = basename($filename);
        if ($filename === '' || $filename === '.' || $filename === '..') {
            abort(404);
        }

        $remoteUrl = media_remote_url($category, $filename);
        if ($remoteUrl) {
            return redirect()->away($remoteUrl, 302)->withHeaders([
                'Cache-Control' => 'public, max-age=31536000, immutable',
            ]);
        }

        foreach (media_local_paths($category, $filename) as $path) {
            if (is_file($path)) {
                return response()->file($path, [
                    'Cache-Control' => 'public, max-age=31536000, immutable',
                ]);
            }
        }

        abort(404);
    }
}
