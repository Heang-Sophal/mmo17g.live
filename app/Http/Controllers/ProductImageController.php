<?php

namespace App\Http\Controllers;

class ProductImageController extends Controller
{
    public function show(string $filename)
    {
        $filename = basename($filename);
        if ($filename === '' || $filename === '.' || $filename === '..') {
            abort(404);
        }

        $remoteUrl = product_image_remote_url($filename);
        if ($remoteUrl) {
            return redirect()->away($remoteUrl, 302);
        }

        $paths = [
            public_path('images/products/'.$filename),
            storage_path('app/public/images/products/'.$filename),
        ];

        foreach ($paths as $path) {
            if (is_file($path)) {
                return response()->file($path, [
                    'Cache-Control' => 'public, max-age=31536000',
                ]);
            }
        }

        abort(404);
    }
}
