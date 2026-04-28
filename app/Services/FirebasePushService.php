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

        $accessToken = $this->accessToken();
        $projectId = $this->projectId();

        if (! $accessToken || ! $projectId) {
            return 0;
        }

        $sent = 0;
        foreach ($tokens as $token) {
            $result = $this->sendToToken(
                $accessToken,
                $projectId,
                $token->fcm_token,
                $title,
                $body,
                $data,
                $appType ?: $token->app_type
            );

            if ($result === 'sent') {
                $sent++;
                $token->forceFill(['last_used_at' => now()])->save();
            }

            if ($result === 'invalid') {
                $token->delete();
            }
        }

        return $sent;
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

    private function accessToken(): ?string
    {
        $credentials = config('services.firebase.credentials');

        if (! $credentials) {
            Log::warning('Firebase service account credentials are not configured.');

            return null;
        }

        if (is_string($credentials) && ! is_file($credentials)) {
            Log::warning('Firebase service account file was not found.', [
                'path' => $credentials,
            ]);

            return null;
        }

        try {
            $client = new GoogleClient();
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

    private function projectId(): ?string
    {
        $projectId = trim((string) config('services.firebase.project_id'));

        return $projectId !== '' ? $projectId : null;
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
