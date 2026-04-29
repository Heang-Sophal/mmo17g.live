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

        if (! $credentials) {
            return "Firebase service account credentials are not configured for {$appType} app.";
        }

        if (is_string($credentials) && ! is_file($credentials)) {
            return "Firebase service account file was not found for {$appType} app.";
        }

        if (! $this->projectId($appType)) {
            return "Firebase project ID is not configured for {$appType} app.";
        }

        return null;
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

        // Group tokens by app_type to use different credentials
        $tokensByAppType = $tokens->groupBy('app_type');
        $totalSent = 0;

        foreach ($tokensByAppType as $type => $typeTokens) {
            $effectiveAppType = $appType ?? $type;
            $accessToken = $this->accessToken($effectiveAppType);
            $projectId = $this->projectId($effectiveAppType);

            if (! $accessToken || ! $projectId) {
                Log::warning("Firebase config missing for app type: {$effectiveAppType}");
                continue;
            }

            foreach ($typeTokens as $token) {
                $result = $this->sendToToken(
                    $accessToken,
                    $projectId,
                    $token->fcm_token,
                    $title,
                    $body,
                    $data,
                    $effectiveAppType
                );

                if ($result === 'sent') {
                    $totalSent++;
                    $token->forceFill(['last_used_at' => now()])->save();
                }

                if ($result === 'invalid') {
                    $token->delete();
                }
            }
        }

        return $totalSent;
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
