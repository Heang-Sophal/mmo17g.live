<?php

namespace App\Models;

use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Passport\HasApiTokens;

class User extends Authenticatable
{
    use HasApiTokens, Notifiable;

    private const MOBILE_PERMISSION_NAMES = [
        'mobile_seller_pos',
        'mobile_seller_orders',
        'mobile_seller_products',
        'mobile_seller_sale_returns',
        'mobile_seller_profile',
        'mobile_seller_reports',
        'mobile_seller_alerts',
        'mobile_delivery_record_items',
        'mobile_delivery_record_reports',
        'mobile_delivery_deliveries',
        'mobile_delivery_reports',
        'mobile_delivery_profile',
        'mobile_delivery_alerts',
    ];

    protected $dates = ['deleted_at'];

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'firstname', 'lastname', 'username', 'email', 'password', 'phone', 'statut', 'avatar', 'role_id', 'is_all_warehouses', 'record_view',
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password', 'remember_token',
    ];

    /**
     * The attributes that should be cast to native types.
     *
     * @var array
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
        'role_id' => 'integer',
        'statut' => 'integer',
        'is_all_warehouses' => 'integer',
        'record_view' => 'boolean',
    ];

    /**
     * Get the full name for the user (firstname + lastname)
     */
    public function getNameAttribute(): string
    {
        return trim(($this->firstname ?? '').' '.($this->lastname ?? '')) ?: 'User';
    }

    /**
     * Get the role name for the user
     */
    public function getRoleAttribute(): string
    {
        $role = $this->roles()->first();

        return $role ? $role->name : 'user';
    }

    /**
     * Get is_active status based on statut field
     */
    public function getIsActiveAttribute(): bool
    {
        return (bool) ($this->statut ?? 1);
    }

    /**
     * Set is_active status
     */
    public function setIsActiveAttribute($value): void
    {
        $this->statut = (bool) $value ? 1 : 0;
    }

    public function oauthAccessToken()
    {
        return $this->hasMany('\App\Models\OauthAccessToken');
    }

    public function roles()
    {
        return $this->belongsToMany(Role::class);
    }

    public function assignRole(Role $role)
    {
        return $this->roles()->save($role);
    }

    public function hasRole($role)
    {
        if (is_string($role)) {
            return $this->roles->contains('name', $role);
        }

        return (bool) $role->intersect($this->roles)->count();
    }

    public function assignedWarehouses()
    {
        return $this->belongsToMany('App\Models\Warehouse');
    }

    public function deliveryAlerts()
    {
        return $this->hasMany(DeliveryAlert::class);
    }

    public function mobileDeviceTokens()
    {
        return $this->hasMany(MobileDeviceToken::class);
    }

    public function hasAnyRoleNamed(array $roleNames): bool
    {
        $normalizedNames = collect($roleNames)
            ->map(function ($roleName) {
                return strtolower(trim((string) $roleName));
            })
            ->filter()
            ->values();

        if ($normalizedNames->isEmpty()) {
            return false;
        }

        $currentRoleName = strtolower((string) $this->role);
        if ($normalizedNames->contains($currentRoleName)) {
            return true;
        }

        $roles = $this->relationLoaded('roles') ? $this->roles : $this->roles()->get();

        return $roles->contains(function ($role) use ($normalizedNames) {
            return $normalizedNames->contains(strtolower((string) $role->name));
        });
    }

    public function isDeliveryUser(): bool
    {
        return $this->hasAnyRoleNamed(['Delivery', 'Laivrison']);
    }

    public function isSaleUser(): bool
    {
        return $this->hasAnyRoleNamed(['Sale']);
    }

    public function isRecorderUser(): bool
    {
        return $this->hasAnyRoleNamed(['Recorder']);
    }

    public function mobilePermissionNames(): array
    {
        if ($this->hasAnyRoleNamed(['Owner'])) {
            return self::allMobilePermissionNames();
        }

        $roles = $this->relationLoaded('roles')
            ? $this->roles
            : $this->roles()->with('permissions')->get();

        return $roles
            ->flatMap(function ($role) {
                $permissions = $role->relationLoaded('permissions')
                    ? $role->permissions
                    : $role->permissions()->get();

                return $permissions->pluck('name');
            })
            ->map(function ($permissionName) {
                return trim((string) $permissionName);
            })
            ->filter(function ($permissionName) {
                return $permissionName !== '' && str_starts_with($permissionName, 'mobile_');
            })
            ->unique()
            ->values()
            ->all();
    }

    public static function allMobilePermissionNames(): array
    {
        try {
            $permissions = Permission::query()
                ->where('name', 'like', 'mobile_%')
                ->pluck('name')
                ->map(function ($permissionName) {
                    return trim((string) $permissionName);
                })
                ->filter(function ($permissionName) {
                    return $permissionName !== '' && str_starts_with($permissionName, 'mobile_');
                })
                ->unique()
                ->values()
                ->all();

            if (! empty($permissions)) {
                return $permissions;
            }
        } catch (\Throwable $e) {
            // Fall back to the known mobile permission list if the DB is unavailable.
        }

        return self::MOBILE_PERMISSION_NAMES;
    }

    public function hasMobilePermission(string $permissionName): bool
    {
        return in_array($permissionName, $this->mobilePermissionNames(), true);
    }

    public function hasAnyMobilePermission(array $permissionNames): bool
    {
        $mobilePermissions = $this->mobilePermissionNames();

        foreach ($permissionNames as $permissionName) {
            if (in_array($permissionName, $mobilePermissions, true)) {
                return true;
            }
        }

        return false;
    }

    public function primaryAssignedWarehouse()
    {
        return $this->assignedWarehouses()->orderBy('warehouses.id')->first();
    }

    /**
     * Check if user has record_view permission (user-level boolean with backward compatibility)
     *
     * @return bool
     */
    public function hasRecordView()
    {
        // New way: Check user's record_view field (user-level boolean)
        // Backward compatibility: If record_view is null, fall back to role permission check
        if (isset($this->record_view)) {
            return (bool) $this->record_view;
        } else {
            // Fallback to role permission check for backward compatibility
            $role = $this->roles()->first();
            if ($role) {
                return $role->inRole('record_view');
            }
        }

        return false;
    }
}
