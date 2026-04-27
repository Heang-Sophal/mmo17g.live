<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;

class HandleCors
{
    /**
     * Handle an incoming request.
     *
     * @return mixed
     */
    public function handle(Request $request, Closure $next)
    {
        // អនុញ្ញាតឱ្យ Flutter App ចូលប្រើ API
        $headers = [
            'Access-Control-Allow-Origin' => '*',
            'Access-Control-Allow-Methods' => 'POST, GET, OPTIONS, PUT, DELETE',
            'Access-Control-Allow-Credentials' => 'true',
            'Access-Control-Max-Age' => '86400',
            'Access-Control-Allow-Headers' => 'Content-Type, Authorization, X-Requested-With, Origin, Accept',
        ];

        // បន្ថែម Headers ចូលក្នុង Response
        foreach ($headers as $key => $value) {
            $request->headers->set($key, $value);
        }

        // បើជា OPTIONS request (Pre-flight) ត្រឡប់ response ភ្លាម
        if ($request->isMethod('OPTIONS')) {
            return response()->json(['method' => 'OPTIONS'], 200, $headers);
        }

        $response = $next($request);

        // បន្ថែម Headers ចូលក្នុង Response
        foreach ($headers as $key => $value) {
            $response->headers->set($key, $value);
        }

        return $response;
    }
}
