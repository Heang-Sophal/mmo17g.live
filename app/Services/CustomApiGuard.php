<?php

namespace App\Services;

use App\Models\User;
use Illuminate\Http\Request;

/**
 * Custom API Guard for validating base64-encoded tokens
 * Used for Flutter mobile app authentication
 */
class CustomApiGuard
{
    /**
     * Get the authenticated user from the custom token
     */
    public function user(Request $request): ?User
    {
        $token = $this->getTokenForRequest($request);

        if (! $token) {
            return null;
        }

        return $this->getUserFromToken($token);
    }

    /**
     * Get token from request (Bearer token)
     */
    protected function getTokenForRequest(Request $request): ?string
    {
        $token = $request->bearerToken();

        return $token;
    }

    /**
     * Decode and validate the custom token
     */
    protected function getUserFromToken(string $token): ?User
    {
        try {
            // Decode base64 token
            $decoded = base64_decode($token, true);

            if ($decoded === false) {
                return null;
            }

            $payload = json_decode($decoded, true);

            if (! $payload || ! isset($payload['user_id'])) {
                return null;
            }

            // Find user by ID
            $user = User::find($payload['user_id']);

            if (! $user) {
                return null;
            }

            return $user;
        } catch (\Exception $e) {
            return null;
        }
    }

    /**
     * Validate the token
     */
    public function validate(array $credentials = []): bool
    {
        return ! empty($credentials['token']) && $this->getUserFromToken($credentials['token']) !== null;
    }
}
