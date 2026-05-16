<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\MobileDeviceToken;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Schema;

class MobileDeviceTokenController extends Controller
{
    private static ?bool $hasFirebaseProjectIdColumn = null;

    public function store(Request $request): JsonResponse
    {
        $user = $request->user('api');
        if (! $user) {
            return response()->json([
                'success' => false,
                'message' => 'Unauthenticated.',
            ], 401);
        }

        $validated = $request->validate([
            'fcm_token' => 'nullable|string|max:512|required_without:device_token',
            'device_token' => 'nullable|string|max:512|required_without:fcm_token',
            'app_type' => 'nullable|string|in:seller,delivery',
            'firebase_project_id' => 'nullable|string|max:191',
            'platform' => 'nullable|string|max:50',
            'device_name' => 'nullable|string|max:191',
        ]);

        $token = trim((string) ($validated['fcm_token'] ?? $validated['device_token'] ?? ''));
        $appType = $validated['app_type'] ?? 'seller';
        $firebaseProjectId = trim((string) ($validated['firebase_project_id'] ?? ''));

        $values = [
            'user_id' => $user->id,
            'app_type' => $appType,
            'platform' => $validated['platform'] ?? null,
            'device_name' => $validated['device_name'] ?? null,
            'last_used_at' => now(),
        ];

        if ($this->hasFirebaseProjectIdColumn()) {
            $values['firebase_project_id'] = $firebaseProjectId !== ''
                ? $firebaseProjectId
                : null;
        }

        $deviceToken = MobileDeviceToken::updateOrCreate(
            ['fcm_token' => $token],
            $values
        );

        return response()->json([
            'success' => true,
            'message' => 'Device token saved.',
            'data' => [
                'id' => $deviceToken->id,
                'app_type' => $deviceToken->app_type,
            ],
        ]);
    }

    public function destroy(Request $request): JsonResponse
    {
        $user = $request->user('api');
        if (! $user) {
            return response()->json([
                'success' => false,
                'message' => 'Unauthenticated.',
            ], 401);
        }

        $validated = $request->validate([
            'fcm_token' => 'nullable|string|max:512|required_without:device_token',
            'device_token' => 'nullable|string|max:512|required_without:fcm_token',
        ]);

        $token = trim((string) ($validated['fcm_token'] ?? $validated['device_token'] ?? ''));

        MobileDeviceToken::query()
            ->where('user_id', $user->id)
            ->where('fcm_token', $token)
            ->delete();

        return response()->json([
            'success' => true,
            'message' => 'Device token removed.',
        ]);
    }

    private function hasFirebaseProjectIdColumn(): bool
    {
        if (self::$hasFirebaseProjectIdColumn !== null) {
            return self::$hasFirebaseProjectIdColumn;
        }

        try {
            self::$hasFirebaseProjectIdColumn = Schema::hasColumn(
                'mobile_device_tokens',
                'firebase_project_id'
            );
        } catch (\Throwable) {
            self::$hasFirebaseProjectIdColumn = false;
        }

        return self::$hasFirebaseProjectIdColumn;
    }
}
