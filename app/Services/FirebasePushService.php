<?php

namespace App\Services;

use App\Models\MobileDeviceToken;
use App\Models\User;
use Google\Client as GoogleClient;
use Illuminate\Support\Collection;
use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Schema;
use Throwable;

class FirebasePushService
{
    private const FCM_SCOPE = 'https://www.googleapis.com/auth/firebase.messaging';

    /**
     * Get Firebase config for specific app type (seller or delivery)
     */
    private function getFirebaseConfig(string $appType): array
    {
        $config = config('services.firebase.' . $appType);

        if (! $config) {
            return [
                'project_id' => null,
                'credentials' => null,
            ];
        }

        return [
            'project_id' => $config['project_id'] ?? null,
            'credentials' => $config['credentials'] ?? null,
        ];
    }

    /**
     * Check configuration for specific app type
     */
    public function configurationIssue(?string $appType = null): ?string
    {
        $appType = $appType ?? 'seller';
        $config = $this->getFirebaseConfig($appType);
        $credentials = $config['credentials'];
        $configuredProjectId = $config['project_id'] ?? null;

        if (! $credentials) {
            return "Firebase service account credentials are not configured for {$appType} app.";
        }

        if (is_string($credentials) && ! is_file($credentials)) {
            return "Firebase service account file was not found for {$appType} app.";
        }

        $credentialIssue = $this->serviceAccountFileIssue($credentials, $configuredProjectId);
        if ($credentialIssue) {
            return "{$credentialIssue} ({$appType} app).";
        }

        if (! $this->projectId($appType)) {
            return "Firebase project ID is not configured for {$appType} app.";
        }

        return null;
    }

    public function serviceAccountFileIssue(string $path, ?string $expectedProjectId = null): ?string
    {
        if (! is_file($path) || ! is_readable($path)) {
            return 'Firebase service account file was not found or is not readable';
        }

        $json = json_decode((string) file_get_contents($path), true);
        if (! is_array($json)) {
            return 'Firebase service account file is not valid JSON';
        }

        if (($json['type'] ?? null) !== 'service_account') {
            return 'Firebase credentials must be a service account JSON file, not google-services.json';
        }

        foreach (['project_id', 'private_key', 'client_email', 'client_id'] as $key) {
            if (empty($json[$key])) {
                return "Firebase service account JSON is missing {$key}";
            }
        }

        $projectId = trim((string) $json['project_id']);
        $expectedProjectId = trim((string) $expectedProjectId);
        if ($expectedProjectId !== '' && $projectId !== $expectedProjectId) {
            return "Firebase service account project ({$projectId}) does not match configured project ({$expectedProjectId})";
        }

        return null;
    }

    public function serviceAccountProjectId(string $path): ?string
    {
        if (! is_file($path) || ! is_readable($path)) {
            return null;
        }

        $json = json_decode((string) file_get_contents($path), true);
        $projectId = trim((string) ($json['project_id'] ?? ''));

        return $projectId !== '' ? $projectId : null;
    }

    /**
     * Send notification to a specific user
     */
    public function sendToUser(
        User $user,
        string $title,
        string $body,
        array $data = [],
        ?string $appType = null
    ): int {
        if (! Schema::hasTable('mobile_device_tokens')) {
            return 0;
        }

        $tokens = MobileDeviceToken::query()
            ->where('user_id', $user->id)
            ->when($appType, function ($query) use ($appType) {
                $query->where('app_type', $appType);
            })
            ->get();

        return $this->sendToTokenModels($tokens, $title, $body, $data, $appType);
    }

    /**
     * Send notification to multiple token models
     */
    public function sendToTokenModels(
        Collection $tokens,
        string $title,
        string $body,
        array $data = [],
        ?string $appType = null
    ): int {
        if ($tokens->isEmpty()) {
            return 0;
        }

        $accessTokens = [];
        $projectIds = [];
        $totalSent = 0;

        foreach ($tokens as $token) {
            $credentialAppType = $this->credentialAppTypeForToken($token, $appType);
            $notificationAppType = $token->app_type ?: $credentialAppType;

            if (! array_key_exists($credentialAppType, $accessTokens)) {
                $accessTokens[$credentialAppType] = $this->accessToken($credentialAppType);
                $projectIds[$credentialAppType] = $this->projectId($credentialAppType);
            }

            $accessToken = $accessTokens[$credentialAppType];
            $projectId = $projectIds[$credentialAppType];

            if (! $accessToken || ! $projectId) {
                Log::warning("Firebase config missing for app type: {$credentialAppType}", [
                    'token_app_type' => $token->app_type,
                    'firebase_project_id' => $token->firebase_project_id,
                ]);
                continue;
            }

            $result = $this->sendToToken(
                $accessToken,
                $projectId,
                $token->fcm_token,
                $title,
                $body,
                $data,
                $notificationAppType
            );

            if ($result === 'sent') {
                $totalSent++;
                $token->forceFill(['last_used_at' => now()])->save();
            }

            if ($result === 'invalid') {
                $token->delete();
            }
        }

        return $totalSent;
    }

    private function credentialAppTypeForToken(MobileDeviceToken $token, ?string $fallbackAppType = null): string
    {
        $firebaseProjectId = trim((string) ($token->firebase_project_id ?? ''));

        if ($firebaseProjectId !== '') {
            foreach (['seller', 'delivery'] as $appType) {
                if ($firebaseProjectId === $this->projectId($appType)) {
                    return $appType;
                }
            }
        }

        $tokenAppType = trim((string) ($token->app_type ?? ''));
        $platform = strtolower(trim((string) ($token->platform ?? '')));

        return $fallbackAppType ?: ($tokenAppType !== '' ? $tokenAppType : 'seller');
    }

    private function sendToToken(
        string $accessToken,
        string $projectId,
        string $token,
        string $title,
        string $body,
        array $data,
        ?string $appType
    ): string {
        try {
            $response = Http::withToken($accessToken)
                ->acceptJson()
                ->post("https://fcm.googleapis.com/v1/projects/{$projectId}/messages:send", [
                    'message' => [
                        'token' => $token,
                        'notification' => [
                            'title' => $title,
                            'body' => $body,
                        ],
                        'data' => $this->stringifyData(array_merge([
                            'title' => $title,
                            'body' => $body,
                        ], $data)),
                        'android' => [
                            'priority' => 'HIGH',
                            'notification' => [
                                'channel_id' => $this->channelId($appType),
                                'sound' => 'default',
                            ],
                        ],
                        'apns' => [
                            'headers' => [
                                'apns-priority' => '10',
                            ],
                            'payload' => [
                                'aps' => [
                                    'sound' => 'default',
                                ],
                            ],
                        ],
                    ],
                ]);
        } catch (Throwable $e) {
            Log::warning('FCM push request failed.', [
                'message' => $e->getMessage(),
            ]);

            return 'failed';
        }

        if ($response->successful()) {
            return 'sent';
        }

        $bodyText = $response->body();
        if (str_contains($bodyText, 'UNREGISTERED') || str_contains($bodyText, 'INVALID_ARGUMENT')) {
            return 'invalid';
        }

        Log::warning('FCM push was rejected.', [
            'status' => $response->status(),
            'body' => $bodyText,
        ]);

        return 'failed';
    }

    private function accessToken(?string $appType = null): ?string
    {
        $appType = $appType ?? 'seller';
        $config = $this->getFirebaseConfig($appType);
        $credentials = $config['credentials'];

        if (! $credentials) {
            Log::warning("Firebase service account credentials are not configured for {$appType}.");

            return null;
        }

        if (is_string($credentials) && ! is_file($credentials)) {
            Log::warning('Firebase service account file was not found.', [
                'path' => $credentials,
            ]);

            return null;
        }

        if (is_string($credentials)) {
            $credentialIssue = $this->serviceAccountFileIssue($credentials, $config['project_id'] ?? null);
            if ($credentialIssue) {
                Log::warning('Firebase service account credentials are invalid.', [
                    'app_type' => $appType,
                    'message' => $credentialIssue,
                ]);

                return null;
            }
        }

        try {
            $client = new GoogleClient;
            $client->setAuthConfig($credentials);
            $client->addScope(self::FCM_SCOPE);

            $token = $client->fetchAccessTokenWithAssertion();
        } catch (Throwable $e) {
            Log::warning('Unable to create Firebase access token.', [
                'message' => $e->getMessage(),
            ]);

            return null;
        }

        if (! empty($token['error'])) {
            Log::warning('Firebase access token request failed.', [
                'error' => $token['error'],
                'description' => $token['error_description'] ?? null,
            ]);

            return null;
        }

        return $token['access_token'] ?? null;
    }

    private function projectId(?string $appType = null): ?string
    {
        $appType = $appType ?? 'seller';
        $config = $this->getFirebaseConfig($appType);
        $projectId = $config['project_id'];

        if ($projectId) {
            return trim($projectId);
        }

        $credentials = $config['credentials'];

        if (is_string($credentials) && is_file($credentials)) {
            $json = json_decode((string) file_get_contents($credentials), true);
            $projectId = trim((string) ($json['project_id'] ?? ''));

            return $projectId !== '' ? $projectId : null;
        }

        return null;
    }

    private function stringifyData(array $data): array
    {
        $stringData = [];

        foreach ($data as $key => $value) {
            if ($value === null) {
                continue;
            }

            if (is_bool($value)) {
                $stringData[$key] = $value ? 'true' : 'false';

                continue;
            }

            if (is_scalar($value)) {
                $stringData[$key] = (string) $value;

                continue;
            }

            $stringData[$key] = json_encode($value);
        }

        return $stringData;
    }

    private function channelId(?string $appType): string
    {
        if ($appType === 'seller') {
            return 'seller_high_importance';
        }

        if ($appType === 'delivery') {
            return 'delivery_high_importance';
        }

        return 'high_importance';
    }
}
