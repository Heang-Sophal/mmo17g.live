<?php

namespace App\Http\Controllers;

use App\Models\MobileDeviceToken;
use App\Services\FirebasePushService;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Schema;
use Throwable;

class MobileNotificationController extends Controller
{
    /**
     * Get Firebase configuration status for frontend
     */
    public function getFirebaseStatus(Request $request, FirebasePushService $firebasePushService): JsonResponse
    {
        $appType = $request->query('app_type', 'all');

        if ($appType === 'all') {
            return response()->json([
                'seller' => [
                    'configured' => $firebasePushService->configurationIssue('seller') === null,
                    'project_id' => config('services.firebase.seller.project_id') ?? null,
                ],
                'delivery' => [
                    'configured' => $firebasePushService->configurationIssue('delivery') === null,
                    'project_id' => config('services.firebase.delivery.project_id') ?? null,
                ],
            ]);
        }

        $configurationIssue = $firebasePushService->configurationIssue($appType);

        return response()->json([
            'configured' => $configurationIssue === null,
            'project_id' => config('services.firebase.' . $appType . '.project_id') ?? null,
            'app_type' => $appType,
        ]);
    }

    public function updateFirebaseCredentials(Request $request): JsonResponse
    {
        $request->validate([
            'firebase_credentials' => 'required|file|mimes:json,application/json,text/json',
            'app_type' => 'required|string|in:seller,delivery',
        ]);

        $appType = $request->app_type;
        $file = $request->file('firebase_credentials');

        $fileName = "firebase-{$appType}-service-account.json";

        try {
            $filePath = $file->storeAs('', $fileName, 'local');

            if ($filePath === false) {
                throw new \RuntimeException('Failed to store uploaded file.');
            }

            $fullPath = storage_path("app/{$fileName}");
            if (! is_file($fullPath) || ! is_readable($fullPath)) {
                throw new \RuntimeException("Stored credentials file is missing or not readable: {$fullPath}");
            }

            // Update .env file
            $envKey = 'FIREBASE_' . strtoupper($appType) . '_CREDENTIALS';
            $envValue = $fullPath;

            try {
                $this->setEnvValue($envKey, $envValue);
            } catch (\Throwable $e) {
                Log::error('Failed to update .env with Firebase credentials.', [
                    'env_key' => $envKey,
                    'path' => $fullPath,
                    'error' => $e->getMessage(),
                ]);

                return response()->json([
                    'success' => false,
                    'message' => 'Uploaded file saved but server could not update environment configuration. Check server file permissions.',
                ], 500);
            }

        } catch (\Throwable $e) {
            Log::error('Failed to upload Firebase credentials.', [
                'app_type' => $appType,
                'message' => $e->getMessage(),
            ]);

            return response()->json([
                'success' => false,
                'message' => 'Failed to upload Firebase credentials. See server log for details.',
            ], 500);
        }

        return response()->json([
            'success' => true,
            'message' => "Firebase credentials for {$appType} updated successfully.",
        ]);
    }

    private function setEnvValue($envKey, $envValue)
    {
        $envFile = app()->environmentFilePath();
        $str = file_get_contents($envFile);

        $envValue = str_replace('\\', '\\\\', $envValue);

        if (preg_match("/^{$envKey}=.*/m", $str)) {
            $str = preg_replace("/^{$envKey}=.*/m", "{$envKey}={$envValue}", $str);
        } else {
            $str .= "\n{$envKey}={$envValue}\n";
        }

        file_put_contents($envFile, $str);
    }

    public function sendNotification(Request $request, FirebasePushService $firebasePushService): JsonResponse
    {
        $validated = $request->validate([
            'title' => 'required|string|max:191',
            'description' => 'required|string|max:1000',
            'app_type' => 'nullable|string|in:seller,delivery,all',
        ]);

        $appType = $validated['app_type'] ?? 'all';

        if (! Schema::hasTable('mobile_device_tokens')) {
            return response()->json([
                'success' => true,
                'message' => 'No mobile devices are registered yet.',
                'sent' => 0,
                'total' => 0,
            ]);
        }

        // Filter tokens by app_type
        $query = MobileDeviceToken::query()
            ->whereNotNull('fcm_token')
            ->where('fcm_token', '<>', '');

        if ($appType !== 'all') {
            $query->where('app_type', $appType);
        }

        $tokens = $query->get();

        if ($tokens->isEmpty()) {
            return response()->json([
                'success' => true,
                'message' => 'No mobile devices are registered yet.',
                'sent' => 0,
                'total' => 0,
            ]);
        }

        // Check configuration for each app type present in tokens
        $appTypesInTokens = $tokens->pluck('app_type')->unique()->values();
        foreach ($appTypesInTokens as $type) {
            $configurationIssue = $firebasePushService->configurationIssue($type);
            if ($configurationIssue) {
                return response()->json([
                    'success' => false,
                    'message' => $configurationIssue,
                    'sent' => 0,
                    'total' => $tokens->count(),
                ], 422);
            }
        }

        try {
            $sent = $firebasePushService->sendToTokenModels(
                $tokens,
                $validated['title'],
                $validated['description'],
                [
                    'type' => 'information_alert',
                    'click_action' => 'FLUTTER_NOTIFICATION_CLICK',
                ],
                $appType === 'all' ? null : $appType
            );
        } catch (Throwable $e) {
            Log::error('Failed to send mobile information notification.', [
                'message' => $e->getMessage(),
            ]);

            return response()->json([
                'success' => false,
                'message' => 'Failed to send notification. Check the Laravel log for details.',
                'sent' => 0,
                'total' => $tokens->count(),
            ], 500);
        }

        if ($sent === 0) {
            return response()->json([
                'success' => false,
                'message' => 'Firebase did not accept the notification for any registered device.',
                'sent' => 0,
                'total' => $tokens->count(),
            ], 502);
        }

        return response()->json([
            'success' => true,
            'message' => "Notification sent to {$sent} device(s).",
            'sent' => $sent,
            'total' => $tokens->count(),
        ]);
    }
}
