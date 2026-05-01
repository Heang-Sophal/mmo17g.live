<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\ProfileEditLog;
use App\Models\User;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;

class ProfileApiController extends Controller
{
    /**
     * ទាញទិន្នន័យ Profile
     * GET /api/profile
     */
    public function show(Request $request): JsonResponse
    {
        try {
            // ទាញយក User ពី Token ដែលបានផ្ញើមក
            $user = $this->getAuthenticatedUser($request);

            if (! $user) {
                return response()->json([
                    'success' => false,
                    'message' => 'User not found',
                ], 404);
            }

            // រាប់ចំនួនដងដែលបានកែប្រែក្នុងឆ្នាំនេះ
            $yearStart = now()->startOfYear();
            $editCount = ProfileEditLog::where('user_id', $user->id)
                ->where('created_at', '>=', $yearStart)
                ->count();

            return response()->json([
                'success' => true,
                'data' => $this->buildProfilePayload($user, $editCount),
            ], 200);
        } catch (\Exception $e) {
            return response()->json([
                'success' => false,
                'message' => 'Failed to load profile',
                'error' => $e->getMessage(),
            ], 500);
        }
    }

    /**
     * កែប្រែ Profile
     * PUT /api/profile
     */
    public function update(Request $request): JsonResponse
    {
        try {
            // ទាញយក User ពី Token ដែលបានផ្ញើមក
            $user = $this->getAuthenticatedUser($request);

            if (! $user) {
                return response()->json([
                    'success' => false,
                    'message' => 'User not found',
                ], 404);
            }

            // ពិនិត្យមើលចំនួនដងដែលបានកែប្រែ
            $yearStart = now()->startOfYear();
            $editCount = ProfileEditLog::where('user_id', $user->id)
                ->where('created_at', '>=', $yearStart)
                ->count();

            if ($editCount >= 3) {
                return response()->json([
                    'success' => false,
                    'message' => 'You have reached the maximum profile edit limit (3 times per year)',
                    'edit_count' => $editCount,
                    'edit_limit' => 3,
                ], 429); // Too Many Requests
            }

            // Validate input - DO NOT allow password changes through this endpoint
            $validated = $request->validate([
                'firstname' => 'nullable|string|max:255',
                'lastname' => 'nullable|string|max:255',
                'email' => 'nullable|email|max:255|unique:users,email,'.$user->id,
                'phone' => 'nullable|string|max:20',
                'username' => 'nullable|string|max:255|unique:users,username,'.$user->id,
            ]);

            DB::beginTransaction();

            $changes = [];

            // Update firstname
            if (isset($validated['firstname']) && $validated['firstname'] !== $user->firstname) {
                $changes[] = [
                    'field' => 'firstname',
                    'old' => $user->firstname,
                    'new' => $validated['firstname'],
                ];
                $user->firstname = $validated['firstname'];
            }

            // Update lastname
            if (isset($validated['lastname']) && $validated['lastname'] !== $user->lastname) {
                $changes[] = [
                    'field' => 'lastname',
                    'old' => $user->lastname,
                    'new' => $validated['lastname'],
                ];
                $user->lastname = $validated['lastname'];
            }

            // Update email
            if (isset($validated['email']) && $validated['email'] !== $user->email) {
                $changes[] = [
                    'field' => 'email',
                    'old' => $user->email,
                    'new' => $validated['email'],
                ];
                $user->email = $validated['email'];
            }

            // Update phone
            if (isset($validated['phone']) && $validated['phone'] !== $user->phone) {
                $changes[] = [
                    'field' => 'phone',
                    'old' => $user->phone,
                    'new' => $validated['phone'],
                ];
                $user->phone = $validated['phone'];
            }

            // Update username
            if (isset($validated['username']) && $validated['username'] !== $user->username) {
                $changes[] = [
                    'field' => 'username',
                    'old' => $user->username,
                    'new' => $validated['username'],
                ];
                $user->username = $validated['username'];
            }

            // បើមានការផ្លាស់ប្តូរ
            if (! empty($changes)) {
                $user->save();

                // កត់ត្រាក្នុង ProfileEditLog
                foreach ($changes as $change) {
                    ProfileEditLog::create([
                        'user_id' => $user->id,
                        'field_changed' => $change['field'],
                        'old_value' => $change['old'],
                        'new_value' => $change['new'],
                        'ip_address' => $request->ip(),
                        'user_agent' => $request->userAgent(),
                    ]);
                }
            }

            DB::commit();

            // ទាញទិន្នន័យ Profile ថ្មី
            $newEditCount = ProfileEditLog::where('user_id', $user->id)
                ->where('created_at', '>=', $yearStart)
                ->count();

            return response()->json([
                'success' => true,
                'message' => 'Profile updated successfully',
                'data' => $this->buildProfilePayload($user, $newEditCount),
                'changes_made' => count($changes),
            ], 200);
        } catch (\Illuminate\Validation\ValidationException $e) {
            return response()->json([
                'success' => false,
                'message' => 'Validation failed',
                'errors' => $e->errors(),
            ], 422);
        } catch (\Exception $e) {
            DB::rollBack();

            return response()->json([
                'success' => false,
                'message' => 'Failed to update profile',
                'error' => $e->getMessage(),
            ], 500);
        }
    }

    /**
     * កែប្រែ Password
     * POST /api/profile/change-password
     */
    public function changePassword(Request $request): JsonResponse
    {
        try {
            // Debug logging
            \Log::info('Password change request received', [
                'has_current_password' => $request->has('current_password'),
                'has_new_password' => $request->has('new_password'),
                'has_confirmation' => $request->has('new_password_confirmation'),
                'user_agent' => $request->userAgent(),
            ]);

            // ទាញយក User ពី Token ដែលបានផ្ញើមក
            $user = $this->getAuthenticatedUser($request);

            if (! $user) {
                \Log::warning('User not found for password change');

                return response()->json([
                    'success' => false,
                    'message' => 'User not found',
                ], 404);
            }

            \Log::info('Attempting password change for user', [
                'user_id' => $user->id,
                'user_email' => $user->email,
            ]);

            // Validate input
            $validated = $request->validate([
                'current_password' => 'required|string',
                'new_password' => 'required|string|min:8|confirmed',
            ]);

            \Log::info('Validation passed, checking current password');

            // ពិនិត្យមើល current password
            if (! Hash::check($validated['current_password'], $user->password)) {
                \Log::warning('Current password is incorrect for user', [
                    'user_id' => $user->id,
                ]);

                return response()->json([
                    'success' => false,
                    'message' => 'Current password is incorrect',
                ], 422);
            }

            DB::beginTransaction();

            // កែប្រែ password
            $user->password = Hash::make($validated['new_password']);
            $user->save();

            // កត់ត្រាកនុង ProfileEditLog
            ProfileEditLog::create([
                'user_id' => $user->id,
                'field_changed' => 'password',
                'old_value' => '***',
                'new_value' => '***',
                'ip_address' => $request->ip(),
                'user_agent' => $request->userAgent(),
            ]);

            DB::commit();

            \Log::info('Password changed successfully for user', [
                'user_id' => $user->id,
            ]);

            return response()->json([
                'success' => true,
                'message' => 'Password updated successfully',
            ], 200);
        } catch (\Illuminate\Validation\ValidationException $e) {
            \Log::error('Password change validation failed', [
                'errors' => $e->errors(),
                'input' => $request->except(['current_password', 'new_password', 'new_password_confirmation']),
            ]);

            return response()->json([
                'success' => false,
                'message' => 'Validation failed',
                'errors' => $e->errors(),
            ], 422);
        } catch (\Exception $e) {
            DB::rollBack();
            \Log::error('Password change failed', [
                'error' => $e->getMessage(),
                'trace' => $e->getTraceAsString(),
            ]);

            return response()->json([
                'success' => false,
                'message' => 'Failed to update password',
                'error' => $e->getMessage(),
            ], 500);
        }
    }

    /**
     * ទាញទិន្ននយ Edit History
     * GET /api/profile/edit-history
     */
    public function editHistory(Request $request): JsonResponse
    {
        try {
            $user = $this->getAuthenticatedUser($request);

            if (! $user) {
                return response()->json([
                    'success' => false,
                    'message' => 'User not found',
                ], 404);
            }

            $editLogs = ProfileEditLog::where('user_id', $user->id)
                ->orderBy('created_at', 'desc')
                ->limit(50)
                ->get()
                ->map(function ($log) {
                    return [
                        'id' => (string) $log->id,
                        'field_changed' => $log->field_changed,
                        'old_value' => $log->old_value,
                        'new_value' => $log->new_value,
                        'created_at' => $log->created_at?->toIso8601String(),
                        'ip_address' => $log->ip_address,
                    ];
                });

            return response()->json([
                'success' => true,
                'data' => $editLogs,
            ], 200);
        } catch (\Exception $e) {
            return response()->json([
                'success' => false,
                'message' => 'Failed to load edit history',
                'error' => $e->getMessage(),
            ], 500);
        }
    }

    /**
     * បង្ហោះរូបភាព Profile
     * POST /api/profile/upload-photo
     */
    public function uploadPhoto(Request $request): JsonResponse
    {
        try {
            // ទាញយក User ពី Token
            $user = $this->getAuthenticatedUser($request);

            if (! $user) {
                return response()->json([
                    'success' => false,
                    'message' => 'User not found',
                ], 404);
            }

            // Validate រូបភាព
            $validated = $request->validate([
                'photo' => 'required|image|mimes:jpeg,png,jpg,gif,svg|max:2048',
            ]);

            // លុបរូបចាស់ (បើមាន)
            if ($user->avatar) {
                if ($user->avatar !== 'no_avatar.png') {
                    media_delete('avatar', $user->avatar);
                }
            }

            // រក្សទុករូបថ្មី
            $photo = $validated['photo'];
            $photoName = time().'_'.$photo->getClientOriginalName();
            $saved = media_put('avatar', $photoName, file_get_contents($photo->getRealPath()), $photo->getMimeType() ?: 'application/octet-stream');
            if (! $saved) {
                throw new \RuntimeException('Unable to save profile photo to cloud storage.');
            }

            // អាប់ដេត Database
            $user->avatar = $photoName;
            $user->save();

            // កត់ត្រាក្នុង Edit Log (រាប់ជា 1 edit)
            $yearStart = now()->startOfYear();
            $editCount = ProfileEditLog::where('user_id', $user->id)
                ->where('created_at', '>=', $yearStart)
                ->count();

            if ($editCount < 3) {
                ProfileEditLog::create([
                    'user_id' => $user->id,
                    'field_changed' => 'avatar',
                    'old_value' => $user->avatar ?? 'none',
                    'new_value' => $photoName,
                    'ip_address' => $request->ip(),
                    'user_agent' => $request->userAgent(),
                ]);
            }

            return response()->json([
                'success' => true,
                'message' => 'Profile photo uploaded successfully',
                'data' => [
                    'avatar' => $photoName,
                    'avatar_url' => avatar_image_url($photoName),
                    'edit_count' => $editCount + 1,
                    'edits_remaining' => max(0, 3 - ($editCount + 1)),
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
                'message' => 'Failed to upload photo: '.$e->getMessage(),
                'error' => $e->getMessage(),
            ], 500);
        }
    }

    /**
     * ទាញយក User ពី Token (Helper Method)
     */
    private function getAuthenticatedUser(Request $request): ?User
    {
        // ទាញយក Token ពី Authorization Header
        $token = $request->bearerToken();

        if (! $token) {
            return null;
        }

        // Try Passport token validation first
        $passportUser = $request->user('api');
        if ($passportUser) {
            return $passportUser;
        }

        // Fallback: Try custom base64 token
        try {
            $decoded = @json_decode(base64_decode($token), true);

            if ($decoded && isset($decoded['user_id'])) {
                $user = User::find($decoded['user_id']);
                if ($user) {
                    return $user;
                }
            }
        } catch (\Exception $e) {
            // Ignore decode errors
        }

        return null;
    }

    private function buildProfilePayload(User $user, int $editCount): array
    {
        $user->loadMissing('roles.permissions');
        $assignedWarehouse = $user->primaryAssignedWarehouse();

        return [
            'id' => (string) $user->id,
            'firstname' => $user->firstname ?? '',
            'lastname' => $user->lastname ?? '',
            'name' => trim(($user->firstname ?? '').' '.($user->lastname ?? '')),
            'email' => $user->email ?? '',
            'phone' => $user->phone ?? '',
            'username' => $user->username ?? '',
            'avatar' => $user->avatar ?? null,
            'avatar_url' => avatar_image_url($user->avatar),
            'role' => $user->role ?? 'user',
            'is_active' => (bool) ($user->is_active ?? true),
            'mobile_permissions' => $user->mobilePermissionNames(),
            'created_at' => $user->created_at?->toIso8601String(),
            'assigned_warehouse' => $assignedWarehouse ? [
                'id' => (string) $assignedWarehouse->id,
                'name' => $assignedWarehouse->name ?? '',
                'city' => $assignedWarehouse->city ?? '',
            ] : null,
            'assigned_warehouse_name' => $assignedWarehouse->name ?? null,
            'edit_count_this_year' => $editCount,
            'edit_limit' => 3,
            'can_edit' => $editCount < 3,
            'edits_remaining' => max(0, 3 - $editCount),
        ];
    }
}
