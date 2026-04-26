<?php

namespace App\Http\Controllers;

use App\Models\product_warehouse;
use App\Models\Role;
use App\Models\role_user;
use App\Models\Setting;
use App\Models\User;
use App\Models\UserWarehouse;
use App\Models\Warehouse;
use App\utils\helpers;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\Rule;
use Illuminate\Validation\ValidationException;
use Intervention\Image\ImageManagerStatic as Image;

class UserController extends BaseController
{
    // ------------- GET ALL USERS---------\\

    public function index(request $request)
    {

        $this->authorizeForUser($request->user('api'), 'view', User::class);
        // How many items do you want to display.
        $perPage = $request->limit;
        $pageStart = \Request::get('page', 1);
        // Start displaying items from this number;
        $offSet = ($pageStart * $perPage) - $perPage;
        $order = $request->SortField;
        $dir = $request->SortType;
        $helpers = new helpers;
        // Filter fields With Params to retrieve
        $columns = [0 => 'username', 1 => 'statut', 2 => 'phone', 3 => 'email'];
        $param = [0 => 'like', 1 => '=', 2 => 'like', 3 => 'like'];
        $data = [];

        $user = Auth::user();
        // New way: Check user's record_view field (user-level boolean)
        // Backward compatibility: If record_view is null, fall back to role permission check
        $ShowRecord = $user->hasRecordView();

        $users = User::where('deleted_at', '=', null)
            ->where(function ($query) use ($ShowRecord) {
            if (! $ShowRecord) {
                return $query->where('id', '=', Auth::user()->id);
            }
        });

        // Multiple Filter
        $Filtred = $helpers->filter($users, $columns, $param, $request)
        // Search With Multiple Param
            ->where(function ($query) use ($request) {
                return $query->when($request->filled('search'), function ($query) use ($request) {
                    return $query->where('username', 'LIKE', "%{$request->search}%")
                        ->orWhere('firstname', 'LIKE', "%{$request->search}%")
                        ->orWhere('lastname', 'LIKE', "%{$request->search}%")
                        ->orWhere('email', 'LIKE', "%{$request->search}%")
                        ->orWhere('phone', 'LIKE', "%{$request->search}%");
                });
            });
        $totalRows = $Filtred->count();
        if ($perPage == '-1') {
            $perPage = $totalRows;
        }
        $users = $Filtred->offset($offSet)
            ->limit($perPage)
            ->orderBy($order, $dir)
            ->get()
            ->map(function ($user) {
                // Check if user is locked due to failed login attempts (3+ attempts within 30 minutes)
                $failedAttempts = \DB::table('login_failed_attempts')
                    ->where('email', $user->email)
                    ->where('created_at', '>=', now()->subMinutes(30))
                    ->count();
                $user->is_locked = $failedAttempts >= 3;
                return $user;
            });

        $roles = Role::where('deleted_at', null)->get(['id', 'name']);
        $warehouses = Warehouse::where('deleted_at', '=', null)->get(['id', 'name']);

        return response()->json([
            'users' => $users,
            'roles' => $roles,
            'warehouses' => $warehouses,
            'totalRows' => $totalRows,
        ]);
    }

    // ------------- GET USER Auth ---------\\

    public function GetUserAuth(Request $request)
    {
        $helpers = new Helpers;
        $user = Auth::user();
        $settings = Setting::first();

        $userData = [
            'id' => $user->id,
            'avatar' => $user->avatar,
            'avatar_url' => avatar_image_url($user->avatar),
            'username' => $user->username,
            'currency' => $helpers->Get_Currency(),
            'logo' => $settings->logo ?? null,
            'logo_url' => app_image_url($settings->logo ?? null, asset('images/logo.png')),
            'default_language' => $settings->default_language ?? 'en',
            'show_language' => $settings->show_language ?? false,
            'footer' => $settings->footer ?? '',
            'developed_by' => $settings->developed_by ?? '',
            'app_name' => $settings->app_name ?? config('app.name'),
            'page_title_suffix' => $settings->page_title_suffix ?? '',
            'company' => $settings->CompanyName ?? '',
            'date_format' => $settings->date_format ?? 'YYYY-MM-DD',
            'price_format' => $settings->price_format ?? null,
            'dark_mode' => (bool) ($settings->dark_mode ?? false),
            'timezone' => $this->getEnvValue('APP_TIMEZONE', 'UTC'),
        ];

        $permissions = $user->roles()->first()?->permissions->pluck('name') ?? [];

        $productsAlerts = product_warehouse::join('products', 'product_warehouse.product_id', '=', 'products.id')
            ->whereRaw('qte <= stock_alert')
            ->whereNull('product_warehouse.deleted_at')
            ->count();

        return response()->json([
            'success' => true,
            'user' => $userData,
            'notifs' => $productsAlerts,
            'permissions' => $permissions,
        ]);
    }

    // ------------- GET USER ROLES ---------\\

    public function GetUserRole(Request $request)
    {

        $roles = Auth::user()->roles()->with('permissions')->first();

        $data = [];
        if ($roles) {
            foreach ($roles->permissions as $permission) {
                $data[] = $permission->name;

            }

            return response()->json(['success' => true, 'data' => $data]);
        }

    }

    // ------------- STORE NEW USER ---------\\

    public function store(Request $request)
    {
        $this->authorizeForUser($request->user('api'), 'create', User::class);
        $this->validate($request, [
            'email' => 'required|unique:users',
        ], [
            'email.unique' => 'This Email already taken.',
        ]);
        \DB::transaction(function () use ($request) {
            if ($request->hasFile('avatar')) {
                $image = $request->file('avatar');
                $filename = $this->buildUploadedImageFilename($image, 'avatar');
                $this->storeAvatarImage($image, $filename);

            } else {
                $filename = 'no_avatar.png';
            }

            $roleId = (int) $request['role'];
            $isDeliveryRole = $this->isDeliveryRoleId($roleId);
            $assignedWarehouseIds = $this->normalizeAssignedWarehouses($request, $roleId);

            if ($request['is_all_warehouses'] == '1' || $request['is_all_warehouses'] == 'true') {
                $is_all_warehouses = 1;
            } else {
                $is_all_warehouses = 0;
            }

            if ($isDeliveryRole) {
                $is_all_warehouses = 0;
            }

            $User = new User;
            $User->firstname = $request['firstname'];
            $User->lastname = $request['lastname'];
            $User->username = $request['username'];
            $User->email = $request['email'];
            $User->phone = $request['phone'];
            $User->password = Hash::make($request['password']);
            $User->avatar = $filename;
            $User->role_id = $roleId;
            $User->is_all_warehouses = $is_all_warehouses;
            
            // Set record_view from request (default to false if not provided)
            if (isset($request['record_view'])) {
                $User->record_view = ($request['record_view'] == '1' || $request['record_view'] == 'true' || $request['record_view'] == 1) ? 1 : 0;
            } else {
                $User->record_view = 0;
            }
            
            $User->save();

            $role_user = new role_user;
            $role_user->user_id = $User->id;
            $role_user->role_id = $roleId;
            $role_user->save();

            if ($isDeliveryRole || ! $User->is_all_warehouses) {
                $User->assignedWarehouses()->sync($assignedWarehouseIds);
            }

        }, 10);

        return response()->json(['success' => true]);
    }

    // ------------ function show -----------\\

    public function show($id)
    {
        //

    }

    public function edit(Request $request, $id)
    {
        $this->authorizeForUser($request->user('api'), 'update', User::class);

        $user = User::where('deleted_at', '=', null)->findOrFail($id);
        $assigned_warehouses = UserWarehouse::where('user_id', $id)->pluck('warehouse_id')->toArray();
        $warehouses = Warehouse::where('deleted_at', '=', null)->whereIn('id', $assigned_warehouses)->pluck('id')->toArray();
        $roles = Role::where('deleted_at', null)->get(['id', 'name']);
        $all_warehouses = Warehouse::where('deleted_at', '=', null)->get(['id', 'name']);

        return response()->json([
            'user' => $user,
            'assigned_warehouses' => $warehouses,
            'roles' => $roles,
            'warehouses' => $all_warehouses,
        ]);
    }

    // ------------- UPDATE  USER ---------\\

    public function update(Request $request, $id)
    {
        $this->authorizeForUser($request->user('api'), 'update', User::class);

        $this->validate($request, [
            'email' => 'required|email|unique:users',
            'email' => Rule::unique('users')->ignore($id),
        ], [
            'email.unique' => 'This Email already taken.',
        ]);

        \DB::transaction(function () use ($id, $request) {
            $user = User::findOrFail($id);
            $current = $user->password;
            $roleId = (int) $request['role'];
            $isDeliveryRole = $this->isDeliveryRoleId($roleId);
            $assignedWarehouseIds = $this->normalizeAssignedWarehouses($request, $roleId);

            if ($request->NewPassword != 'null') {
                if ($request->NewPassword != $current) {
                    $pass = Hash::make($request->NewPassword);
                } else {
                    $pass = $user->password;
                }

            } else {
                $pass = $user->password;
            }

            $currentAvatar = $user->avatar;
            if ($request->avatar != $currentAvatar && $request->hasFile('avatar')) {

                $image = $request->file('avatar');
                $filename = $this->buildUploadedImageFilename($image, 'avatar');
                $this->storeAvatarImage($image, $filename);

                if ($user->avatar != 'no_avatar.png') {
                    media_delete('avatar', $currentAvatar);
                }
            } else {
                $filename = $currentAvatar;
            }

            if ($request['is_all_warehouses'] == '1' || $request['is_all_warehouses'] == 'true') {
                $is_all_warehouses = 1;
            } else {
                $is_all_warehouses = 0;
            }

            if ($isDeliveryRole) {
                $is_all_warehouses = 0;
            }

            // Set record_view from request (default to false if not provided)
            $record_view = 0;
            if (isset($request['record_view'])) {
                $record_view = ($request['record_view'] == '1' || $request['record_view'] == 'true' || $request['record_view'] == 1) ? 1 : 0;
            }

            User::whereId($id)->update([
                'firstname' => $request['firstname'],
                'lastname' => $request['lastname'],
                'username' => $request['username'],
                'email' => $request['email'],
                'phone' => $request['phone'],
                'password' => $pass,
                'record_view' => $record_view,
                'avatar' => $filename,
                'statut' => $request['statut'],
                'is_all_warehouses' => $is_all_warehouses,
                'role_id' => $roleId,

            ]);

            role_user::where('user_id', $id)->update([
                'user_id' => $id,
                'role_id' => $roleId,
            ]);

            $user_saved = User::where('deleted_at', '=', null)->findOrFail($id);
            if ($isDeliveryRole || ! $is_all_warehouses) {
                $user_saved->assignedWarehouses()->sync($assignedWarehouseIds);
            } else {
                $user_saved->assignedWarehouses()->sync([]);
            }

        }, 10);

        return response()->json(['success' => true]);

    }

    // ------------- UPDATE PROFILE ---------\\

    public function updateProfile(Request $request, $id)
    {

        $this->validate($request, [
            'firstname' => 'required',
            'lastname' => 'required',
            'username' => 'required',
            'email' => 'required|email|unique:users',
            'email' => Rule::unique('users')->ignore($id),
            'phone' => 'required',
        ]
        );

        $id = Auth::user()->id;
        $user = User::findOrFail($id);

        $currentAvatar = $user->avatar;
        if ($request->avatar != $currentAvatar && $request->hasFile('avatar')) {

            $image = $request->file('avatar');
            $filename = $this->buildUploadedImageFilename($image, 'avatar');
            $this->storeAvatarImage($image, $filename);

            if ($user->avatar != 'no_avatar.png') {
                media_delete('avatar', $currentAvatar);
            }
        } else {
            $filename = $currentAvatar;
        }

            User::whereId($id)->update([
                'firstname' => $request['firstname'],
                'lastname' => $request['lastname'],
                'username' => $request['username'],
                'email' => $request['email'],
                'phone' => $request['phone'],
                // Password is updated via dedicated endpoint
                'avatar' => $filename,

            ]);

        return response()->json(['avatar' => $filename, 'user' => $request['username']]);

    }

    // ------------- UPDATE PASSWORD (Profile) ---------\\

    public function updatePassword(Request $request)
    {
        $user = Auth::user();

        $this->validate($request, [
            'current_password' => ['required'],
            'new_password' => ['required', 'min:6', 'max:14', 'confirmed'],
        ]);

        if (! Hash::check($request->input('current_password'), $user->password)) {
            return response()->json([
                'success' => false,
                'message' => trans('translate.CurrentPasswordIncorrect'),
            ], 422);
        }

        $user->password = Hash::make($request->input('new_password'));
        $user->save();

        return response()->json([
            'success' => true,
            'message' => trans('translate.PasswordUpdated'),
        ]);
    }

    // ----------- IsActivated (Update Statut User) -------\\

    public function IsActivated(request $request, $id)
    {

        $this->authorizeForUser($request->user('api'), 'update', User::class);

        $user = Auth::user();
        if ($request['id'] !== $user->id) {
            User::whereId($id)->update([
                'statut' => $request['statut'],
            ]);

            return response()->json([
                'success' => true,
            ]);
        } else {
            return response()->json([
                'success' => false,
            ]);
        }
    }

    // ------------- DELETE USER ---------\\
    public function destroy(Request $request, $id)
    {
        $this->authorizeForUser($request->user('api'), 'delete', User::class);

        $user = Auth::user();
        
        // Prevent user from deleting their own account
        if ($id == $user->id) {
            return response()->json([
                'success' => false,
                'message' => 'You cannot delete your own account.',
            ], 403);
        }

        $userToDelete = User::where('deleted_at', '=', null)->findOrFail($id);

        // Soft delete the user (bypass mass-assignment on deleted_at)
        // and mark them as inactive (statut = 0) so any legacy checks
        // that still rely on statut will treat deleted users as disabled.
        $userToDelete->deleted_at = \Carbon\Carbon::now();
        $userToDelete->statut = 0;
        $userToDelete->save();

        return response()->json(['success' => true]);
    }

    public function GetPermissions()
    {
        $roles = Auth::user()->roles()->with('permissions')->first();
        $data = [];
        if ($roles) {
            foreach ($roles->permissions as $permission) {
                $item[$permission->name]['slug'] = $permission->name;
                $item[$permission->name]['id'] = $permission->id;

            }
            $data[] = $item;
        }

        return $data[0];

    }

    // ------------- GET USER Auth ---------\\

    public function GetInfoProfile(Request $request)
    {
        $data = Auth::user();

        return response()->json(['success' => true, 'user' => $data]);
    }

    // ------------- RESET EDIT LIMIT ---------\\
    public function resetEditLimit(Request $request, $id)
    {
        $this->authorizeForUser($request->user('api'), 'update', User::class);

        $user = User::where('deleted_at', '=', null)->findOrFail($id);

        // Delete all profile edit logs for this user this year
        $yearStart = now()->startOfYear();
        $deletedCount = \App\Models\ProfileEditLog::where('user_id', $user->id)
            ->where('created_at', '>=', $yearStart)
            ->delete();

        return response()->json([
            'success' => true,
            'message' => 'Edit limit reset successfully for ' . $user->username . '. They can now edit their profile 3 more times this year.',
            'deleted_logs' => $deletedCount,
        ]);
    }

    // ------------- UNLOCK USER ACCOUNT ---------\\
    public function unlock(Request $request, $id)
    {
        $this->authorizeForUser($request->user('api'), 'update', User::class);

        $user = User::where('deleted_at', '=', null)->findOrFail($id);

        // Clear all failed login attempts for this user's email
        $deletedCount = \DB::table('login_failed_attempts')
            ->where('email', $user->email)
            ->delete();

        return response()->json([
            'success' => true,
            'message' => 'Account unlocked successfully.',
        ]);
    }

    // ------------- LOCK USER ACCOUNT ---------\\
    public function lock(Request $request, $id)
    {
        $this->authorizeForUser($request->user('api'), 'update', User::class);

        $user = User::where('deleted_at', '=', null)->findOrFail($id);

        // Set statut to 0 (inactive) to lock the account
        User::whereId($id)->update([
            'statut' => 0,
        ]);

        // Also clear any existing failed login attempts
        \DB::table('login_failed_attempts')
            ->where('email', $user->email)
            ->delete();

        return response()->json([
            'success' => true,
            'message' => 'Account locked successfully.',
        ]);
    }

    // -------------- Get Environment Value Directly from .env File ---------------\\

    private function getEnvValue($key, $default = null)
    {
        $envFile = app()->environmentFilePath();
        if (!file_exists($envFile)) {
            return $default;
        }
        
        $content = file_get_contents($envFile);
        $lines = preg_split('/\r\n|\r|\n/', $content);
        
        foreach ($lines as $line) {
            // Skip comments and empty lines
            if (empty(trim($line)) || strpos(trim($line), '#') === 0) {
                continue;
            }
            
            // Check if line contains the key
            if (strpos($line, $key . '=') === 0) {
                $parts = explode('=', $line, 2);
                if (count($parts) === 2) {
                    $value = trim($parts[1]);
                    // Remove quotes if present
                    $value = trim($value, '"\'');
                    return $value;
                }
            }
        }
        
        return $default;
    }

    private function buildUploadedImageFilename($image, string $fallbackBase = 'image'): string
    {
        $originalName = pathinfo((string) $image->getClientOriginalName(), PATHINFO_FILENAME);
        $safeBase = preg_replace('/[^A-Za-z0-9_\-]+/', '_', $originalName);
        $safeBase = trim((string) $safeBase, '_');
        $extension = strtolower((string) ($image->getClientOriginalExtension() ?: $image->guessExtension() ?: 'jpg'));

        if ($extension === 'jpeg') {
            $extension = 'jpg';
        }

        return rand(11111111, 99999999).($safeBase !== '' ? $safeBase : $fallbackBase).'.'.$extension;
    }

    private function storeAvatarImage($image, string $filename): void
    {
        $extension = strtolower(pathinfo($filename, PATHINFO_EXTENSION) ?: 'jpg');
        $encoded = (string) Image::make($image->getRealPath())
            ->resize(128, 128)
            ->encode($extension);

        if (! media_put('avatar', $filename, $encoded, $image->getMimeType() ?: 'image/'.$extension)) {
            throw new \RuntimeException('Unable to save avatar image to cloud storage.');
        }
    }

    private function isDeliveryRoleId($roleId): bool
    {
        if (! $roleId) {
            return false;
        }

        $role = Role::find($roleId);
        if (! $role) {
            return false;
        }

        return in_array(strtolower((string) $role->name), ['delivery', 'laivrison'], true);
    }

    private function normalizeAssignedWarehouses(Request $request, $roleId): array
    {
        $assignedWarehouseIds = collect((array) $request->input('assigned_to', []))
            ->flatten()
            ->filter(function ($warehouseId) {
                return is_numeric($warehouseId);
            })
            ->map(function ($warehouseId) {
                return (int) $warehouseId;
            })
            ->unique()
            ->values();

        if ($this->isDeliveryRoleId($roleId)) {
            $assignedWarehouseIds = $assignedWarehouseIds->take(1)->values();

            if ($assignedWarehouseIds->isEmpty()) {
                throw ValidationException::withMessages([
                    'assigned_to' => ['Delivery user must be assigned to one warehouse.'],
                ]);
            }
        }

        return $assignedWarehouseIds->all();
    }
}
