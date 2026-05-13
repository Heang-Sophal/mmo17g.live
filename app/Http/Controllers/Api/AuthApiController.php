<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\LoginFailedAttempt;
use App\Models\User;
use Carbon\Carbon;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class AuthApiController extends Controller
{
    /**
     * កំណត់រចនាសម្ព័ន្ធ
     */
    const MAX_LOGIN_ATTEMPTS = 3;

    const BLOCK_DURATION_MINUTES = 30; // បិទ ៣០នាទី បើ login ខុស ៣ដង

    const SELLER_APP_ALLOWED_ROLES = ['Sale', 'Delivery', 'Admin', 'Owner', 'Recorder'];

    const DELIVERY_APP_ALLOWED_ROLES = ['Delivery', 'Admin', 'Owner', 'Recorder'];

    /**
     * Sign In
     * POST /api/auth/login
     */
    public function login(Request $request): JsonResponse
    {
        return $this->loginForApp($request, 'seller');
    }

    /**
     * Sign In for Delivery App only
     * POST /api/auth/delivery/login
     */
    public function deliveryLogin(Request $request): JsonResponse
    {
        return $this->loginForApp($request, 'delivery');
    }

    /**
     * Check Auth Status
     * GET /api/auth/check
     */
    public function check(Request $request): JsonResponse
    {
        return $this->checkForApp($request, 'seller');
    }

    /**
     * Check Auth Status for Delivery App only
     * GET /api/auth/delivery/check
     */
    public function deliveryCheck(Request $request): JsonResponse
    {
        return $this->checkForApp($request, 'delivery');
    }

    private function loginForApp(Request $request, string $appContext): JsonResponse
    {
        try {
            $validated = $request->validate([
                'email' => 'required|email',
                'password' => 'required|string',
            ]);

            $email = $validated['email'];
            $password = $validated['password'];
            $ipAddress = $request->ip();

            // ពិនិត្យមើលថាតើអ៊ីមែលនេះកំពុងត្រូវបានបិទឬអត់
            $blockedUntil = $this->getBlockedUntil($email, $ipAddress);
            if ($blockedUntil) {
                return response()->json([
                    'success' => false,
                    'message' => 'Too many failed login attempts. Please try again after '.$blockedUntil->diffForHumans(),
                    'blocked_until' => $blockedUntil->toIso8601String(),
                    'error_type' => 'account_blocked',
                ], 429);
            }

            // រក User
            $user = User::where('email', $email)->with('roles.permissions')->first();

            // ពិនិត្យមើលថាតើមាន User ឬអត់
            if (! $user) {
                $this->recordFailedAttempt($email, $ipAddress);

                return response()->json([
                    'success' => false,
                    'message' => 'No account found with this email address.',
                    'error_type' => 'invalid_email',
                ], 401);
            }

            // ពិនិត្យមើលថាតើ Account ត្រូវបាន Lock (statut = 0) ឬអត់
            if ($user->statut == 0) {
                return response()->json([
                    'success' => false,
                    'message' => 'Your account has been locked. Please contact administrator.',
                    'error_type' => 'account_locked',
                ], 403);
            }

            $mobileRoleName = $this->resolveMobileRoleName($user, $appContext);

            if (! $mobileRoleName) {
                // កត់ត្រាការព្យាយាមខុស
                $this->recordFailedAttempt($email, $ipAddress);

                return response()->json([
                    'success' => false,
                    'message' => $this->roleAccessMessage($appContext),
                    'error_type' => 'insufficient_permissions',
                ], 403);
            }

            // ពិនិត្យមើល Password
            if (! Hash::check($password, $user->password)) {
                $this->recordFailedAttempt($email, $ipAddress);

                // រាប់ចំនួនដងខុស Password តាម Email ប៉ុណ្ណោះ (មិនចាំបាច់ IP)
                $emailFailures = $this->getPasswordFailuresByEmail($email);

                if ($emailFailures >= self::MAX_LOGIN_ATTEMPTS) {
                    // ចាក់សោ Account បន្ទាប់ពីខុស ៣ ដង
                    $user->update(['statut' => 0]);
                    $this->clearFailedAttempts($email, $ipAddress);

                    return response()->json([
                        'success' => false,
                        'message' => 'Your account has been locked due to '.self::MAX_LOGIN_ATTEMPTS.' failed login attempts. Please contact administrator.',
                        'error_type' => 'account_locked',
                    ], 403);
                }

                $remainingAttempts = max(0, self::MAX_LOGIN_ATTEMPTS - $emailFailures);

                return response()->json([
                    'success' => false,
                    'message' => 'Invalid password.',
                    'error_type' => 'invalid_password',
                    'attempts_remaining' => $remainingAttempts,
                    'max_attempts' => self::MAX_LOGIN_ATTEMPTS,
                ], 401);
            }

            // លុប Failed Attempts ទាំងអស់បើ login ជោគជ័យ
            $this->clearFailedAttempts($email, $ipAddress);

            // បង្កើត Token (សម្រាប់ Persistent Login)
            // សម្រាប់ Development យើងប្រើ simple token
            // សម្រាប់ Production គួរប្រើ Laravel Passport ឬ Sanctum
            $customToken = $this->createPersistentToken($user);

            // Generate Passport token for API routes
            $passportToken = $user->createToken('MobileApp')->accessToken;

            $mobilePermissions = $user->mobilePermissionNames();

            return response()->json([
                'success' => true,
                'message' => 'Login successful',
                'data' => [
                    'user' => $this->buildMobileUserPayload($user, $mobileRoleName, $mobilePermissions),
                    'token' => $passportToken, // Use Passport token for API routes
                    'custom_token' => $customToken, // Keep custom token for backward compatibility
                    'token_type' => 'Bearer',
                    'expires_in' => null, // Persistent (មិនមានផុតកំណត់)
                ],
            ], 200);
        } catch (\Illuminate\Validation\ValidationException $e) {
            return response()->json([
                'success' => false,
                'message' => 'Validation failed',
                'errors' => $e->errors(),
            ], 422);
        } catch (\Exception $e) {
            return response()->json([
                'success' => false,
                'message' => 'Login failed: '.$e->getMessage(),
                'error' => $e->getMessage(),
            ], 500);
        }
    }

    /**
     * Logout
     * POST /api/auth/logout
     */
    public function logout(Request $request): JsonResponse
    {
        try {
            // លុប Token (សម្រាប់ Production ត្រូវ revoke token)
            // សម្រាប់ Development គ្រាន់តែ return success

            return response()->json([
                'success' => true,
                'message' => 'Logout successful',
            ], 200);
        } catch (\Exception $e) {
            return response()->json([
                'success' => false,
                'message' => 'Logout failed: '.$e->getMessage(),
            ], 500);
        }
    }

    private function checkForApp(Request $request, string $appContext): JsonResponse
    {
        try {
            $token = $request->bearerToken();

            if (! $token) {
                return response()->json([
                    'success' => false,
                    'authenticated' => false,
                ], 401);
            }

            $user = null;

            // Try to decode as custom base64 token first
            $decoded = $this->decodeToken($token);

            if ($decoded && isset($decoded['user_id'])) {
                $user = User::find($decoded['user_id']);
            } else {
                // Try Passport token validation
                $user = $request->user('api');
            }

            if (! $user || ! $user->is_active) {
                return response()->json([
                    'success' => false,
                    'authenticated' => false,
                ], 401);
            }

            $user->loadMissing('roles.permissions');
            $mobileRoleName = $this->resolveMobileRoleName($user, $appContext);

            if (! $mobileRoleName) {
                return response()->json([
                    'success' => false,
                    'authenticated' => false,
                ], 401);
            }

            return response()->json([
                'success' => true,
                'authenticated' => true,
                'data' => [
                    'user' => $this->buildMobileUserPayload($user, $mobileRoleName, $user->mobilePermissionNames()),
                ],
            ], 200);
        } catch (\Exception $e) {
            return response()->json([
                'success' => false,
                'authenticated' => false,
            ], 401);
        }
    }

    private function roleAccessMessage(string $appContext): string
    {
        if ($appContext === 'delivery') {
            return 'Invalid credentials or insufficient permissions. Only "Delivery", "Admin", "Recorder", or "Owner" role can access.';
        }

        return 'Invalid credentials or insufficient permissions. Only "Sale", "Delivery", "Admin", "Recorder", or "Owner" role can access.';
    }

    private function resolveMobileRoleName(User $user, string $appContext): ?string
    {
        $mobileRoleName = $this->getAllowedMobileRoleName($user);

        if (! $mobileRoleName) {
            return null;
        }

        return in_array($mobileRoleName, $this->allowedRolesForApp($appContext), true)
            ? $mobileRoleName
            : null;
    }

    /**
     * ទទួលបានចំនួនដងដែលបានព្យាយាមខុស
     */
    private function getFailedAttemptsCount(string $email, ?string $ipAddress): int
    {
        $query = LoginFailedAttempt::where('email', $email);

        if ($ipAddress) {
            $query->where('ip_address', $ipAddress);
        }

        // រាប់តែក្នុងរយៈពេលបិទបណ្តោះអាសន្ន ដើម្បីកុំឲ្យ failed attempts ចាស់ៗ block login បន្ត។
        $query->where('created_at', '>=', now()->subMinutes(self::BLOCK_DURATION_MINUTES));

        return $query->count();
    }

    /**
     * រាប់ចំនួនដង Login ខុស Password តាម Email ប៉ុណ្ណោះ (ប្រើសម្រាប់ Lock Account)
     */
    private function getPasswordFailuresByEmail(string $email): int
    {
        return LoginFailedAttempt::where('email', $email)
            ->where('created_at', '>=', now()->subMinutes(self::BLOCK_DURATION_MINUTES))
            ->count();
    }

    /**
     * កត់ត្រាការព្យាយាម Login ខុស
     */
    private function recordFailedAttempt(string $email, ?string $ipAddress): void
    {
        LoginFailedAttempt::create([
            'email' => $email,
            'ip_address' => $ipAddress,
        ]);

        // លុបទិន្នន័យចាស់ៗ (រក្សាទុកតែ ២៤ម៉ោងចុងក្រោយ)
        LoginFailedAttempt::where('created_at', '<', now()->subHours(24))->delete();
    }

    /**
     * លុប Failed Attempts
     */
    private function clearFailedAttempts(string $email, ?string $ipAddress): void
    {
        $query = LoginFailedAttempt::where('email', $email);

        if ($ipAddress) {
            $query->where('ip_address', $ipAddress);
        }

        $query->delete();
    }

    /**
     * ពិនិត្យមើលថាតើអ៊ីមែលកំពុងត្រូវបានបិទឬអត់
     */
    private function getBlockedUntil(string $email, ?string $ipAddress): ?Carbon
    {
        $attemptsCount = $this->getFailedAttemptsCount($email, $ipAddress);

        if ($attemptsCount < self::MAX_LOGIN_ATTEMPTS) {
            return null;
        }

        // រកមើលការព្យាយាមចុងក្រោយក្នុងរយៈពេលបិទបណ្តោះអាសន្ន។
        $lastAttemptQuery = LoginFailedAttempt::where('email', $email)
            ->where('created_at', '>=', now()->subMinutes(self::BLOCK_DURATION_MINUTES));

        if ($ipAddress) {
            $lastAttemptQuery->where('ip_address', $ipAddress);
        }

        $lastAttempt = $lastAttemptQuery->orderBy('created_at', 'desc')->first();

        if (! $lastAttempt) {
            return null;
        }

        $blockedUntil = $lastAttempt->created_at->addMinutes(self::BLOCK_DURATION_MINUTES);

        return $blockedUntil->isFuture() ? $blockedUntil : null;
    }

    /**
     * បង្កើត Persistent Token
     */
    private function createPersistentToken(User $user): string
    {
        // សម្រាប់ Development: បង្កើត simple JWT-like token
        // សម្រាប់ Production: ប្រើ Laravel Passport ឬ Sanctum

        $payload = [
            'user_id' => $user->id,
            'email' => $user->email,
            'role' => $user->role,
            'iat' => time(), // Issued at
        ];

        // Simple base64 encoding (សម្រាប់ Development ប៉ុណ្ណោះ)
        $token = base64_encode(json_encode($payload));

        return $token;
    }

    /**
     * Decode Token
     */
    private function decodeToken(string $token): ?array
    {
        try {
            $decoded = json_decode(base64_decode($token), true);

            if (! $decoded || ! isset($decoded['user_id'])) {
                return null;
            }

            return $decoded;
        } catch (\Exception $e) {
            return null;
        }
    }

    private function getAllowedMobileRoleName(User $user): ?string
    {
        $primaryRole = $this->normalizeMobileRoleName($user->role);

        if ($primaryRole) {
            return $primaryRole;
        }

        if ($user->hasAnyRoleNamed(['Owner'])) {
            return 'Owner';
        }

        if ($user->hasAnyRoleNamed(['Admin'])) {
            return 'Admin';
        }

        if ($user->isDeliveryUser()) {
            return 'Delivery';
        }

        if ($user->isSaleUser()) {
            return 'Sale';
        }

        if ($user->isRecorderUser()) {
            return 'Recorder';
        }

        return null;
    }

    private function allowedRolesForApp(string $appContext): array
    {
        return $appContext === 'delivery'
            ? self::DELIVERY_APP_ALLOWED_ROLES
            : self::SELLER_APP_ALLOWED_ROLES;
    }

    private function normalizeMobileRoleName(?string $roleName): ?string
    {
        switch (strtolower(trim((string) $roleName))) {
            case 'owner':
                return 'Owner';
            case 'admin':
                return 'Admin';
            case 'delivery':
            case 'laivrison':
                return 'Delivery';
            case 'sale':
                return 'Sale';
            case 'recorder':
                return 'Recorder';
            default:
                return null;
        }
    }

    private function buildMobileUserPayload(User $user, string $mobileRoleName, ?array $mobilePermissions = null): array
    {
        $assignedWarehouse = $user->primaryAssignedWarehouse();
        $mobilePermissions = $mobilePermissions ?? $user->mobilePermissionNames();

        return [
            'id' => (string) $user->id,
            'name' => $user->name ?? '',
            'email' => $user->email ?? '',
            'role' => $mobileRoleName,
            'avatar' => $user->avatar ?? null,
            'avatar_url' => avatar_image_url($user->avatar),
            'mobile_permissions' => $mobilePermissions,
            'is_delivery' => $mobileRoleName === 'Delivery',
            'can_access_delivery_app' => in_array($mobileRoleName, self::DELIVERY_APP_ALLOWED_ROLES, true),
            'assigned_warehouse' => $assignedWarehouse ? [
                'id' => (string) $assignedWarehouse->id,
                'name' => $assignedWarehouse->name ?? '',
                'city' => $assignedWarehouse->city ?? '',
            ] : null,
        ];
    }
}
