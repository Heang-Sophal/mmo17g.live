<?php

return [

    /*
    |--------------------------------------------------------------------------
    | Cross-Origin Resource Sharing (CORS) Configuration
    |--------------------------------------------------------------------------
    |
    | Here you may configure your settings for cross-origin resource sharing
    | or "CORS". This determines what cross-origin operations may execute
    | in web browsers. You are free to adjust these settings as needed.
    |
    | To learn more: https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS
    |
    */

    /*
     * You can enable one or more of the following CORS options:
     */
    'paths' => ['api/*', 'sanctum/csrf-cookie'],

    'allowed_methods' => ['*'],

    /*
     * សម្រាប់ Flutter Mobile App អ្នកអាចអនុញ្ញាតគ្រប់ origin ទាំងអស់
     * ឬកំណត់ជាក់លាក់តាម domain ដែលអ្នកចង់បាន
     */
    'allowed_origins' => [
        '*',  // Development - អនុញ្ញាតគ្រប់អ្វីទាំងអស់
        // សម្រាប់ Production សូមកំណត់ជាក់លាក់៖
        // 'http://localhost:8000',
        // 'http://127.0.0.1:8000',
        // 'http://10.0.2.2:8000',  // Android Emulator
        // 'https://your-domain.com',
    ],

    'allowed_origins_patterns' => [],

    'allowed_headers' => ['*'],

    'exposed_headers' => [],

    'max_age' => 0,

    'supports_credentials' => false,

];
