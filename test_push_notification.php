<?php

require 'vendor/autoload.php';

use Google\Client;

// ១. ដាក់ Device FCM Token របស់អ្នកនៅទីនេះ (បានមកពី Mobile App ពេល run)
$deviceToken = 'c13bp8tfQHCzVwi83swf2Z:APA91bFkJHbLDwA2gyEsDH4BR2Rb548rcDidPa_jF06VjYrS_L-GBgQZjM7DO5NXRmzkusM0EksZ1R1CjZIndgWpdCEyDpA3KDHmSdKEPCls3iqEgiZt1xc';

// ២. ទីតាំង File Firebase Service Account របស់អ្នក
$serviceAccountPath = __DIR__ . '/storage/app/firebase-service-account.json';

if (!file_exists($serviceAccountPath)) {
    die("❌ Error: រកមិនឃើញ File $serviceAccountPath ទេ។\nសូមដោនឡូត Service Account Key (JSON) ពី Firebase Console រួចយកមកដាក់ក្នុងទីតាំងនេះ។\n");
}

if ($deviceToken === 'YOUR_DEVICE_FCM_TOKEN_HERE') {
    die("❌ Error: សូមផ្លាស់ប្តូរ 'YOUR_DEVICE_FCM_TOKEN_HERE' ដាក់ Device FCM Token របស់ទូរសព្ទអ្នកពិតប្រាកដសិន។\n");
}

try {
    $json = json_decode(file_get_contents($serviceAccountPath), true);
    $projectId = $json['project_id'] ?? null;
    
    if (!$projectId) {
        die("❌ Error: មិនអាចរកឃើញ 'project_id' នៅក្នុង File JSON ទេ។\n");
    }

    // ទាញយក Access Token ពី Google 
    $client = new Client();
    $client->setAuthConfig($serviceAccountPath);
    $client->addScope('https://www.googleapis.com/auth/firebase.messaging');
    $tokenInfo = $client->fetchAccessTokenWithAssertion();
    
    if (isset($tokenInfo['error'])) {
        die("❌ Error ពេលទាញយក Access Token: " . $tokenInfo['error_description'] . "\n");
    }
    
    $accessToken = $tokenInfo['access_token'];

    // ទម្រង់ទិន្នន័យ (Payload) សំរាប់ផ្ញើ
    $message = [
        'message' => [
            'token' => $deviceToken,
            'notification' => [
                'title' => 'Test Notification 🚀',
                'body' => 'សួស្តី! នេះគឺជាសារតេស្តពី Server របស់អ្នក 🎉',
            ],
            // Data Payload សំរាប់ Background / Foreground handle
            'data' => [
                'type' => 'test_alert',
                'click_action' => 'FLUTTER_NOTIFICATION_CLICK',
                'title' => 'Test Notification 🚀',
                'body' => 'សួស្តី! នេះគឺជាសារតេស្តពី Server របស់អ្នក 🎉'
            ],
            'android' => [
                'priority' => 'high',
                'notification' => [
                    'channel_id' => 'delivery_high_importance', // ឬ seller_high_importance
                    'sound' => 'default'
                ]
            ],
            'apns' => [
                'payload' => [
                    'aps' => [
                        'sound' => 'default',
                        'badge' => 1
                    ]
                ]
            ]
        ]
    ];

    // ផ្ញើ Request ទៅកាន់ Firebase API v1
    $ch = curl_init();
    curl_setopt($ch, CURLOPT_URL, "https://fcm.googleapis.com/v1/projects/$projectId/messages:send");
    curl_setopt($ch, CURLOPT_POST, true);
    curl_setopt($ch, CURLOPT_HTTPHEADER, [
        'Authorization: Bearer ' . $accessToken,
        'Content-Type: application/json'
    ]);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode($message));

    echo "កំពុងផ្ញើសារ...\n";
    $response = curl_exec($ch);
    $httpCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);
    curl_close($ch);

    if ($httpCode === 200) {
        echo "✅ ជោគជ័យ! សារត្រូវបានបញ្ជូនទៅកាន់ Firebase។\nResponse: $response\n";
    } else {
        echo "❌ បរាជ័យ! HTTP Code: $httpCode\nResponse: $response\n";
    }

} catch (Exception $e) {
    echo "Exception: " . $e->getMessage() . "\n";
}
