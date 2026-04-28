<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class MobileDeviceToken extends Model
{
    protected $fillable = [
        'user_id',
        'fcm_token',
        'app_type',
        'platform',
        'device_name',
        'last_used_at',
    ];

    protected $casts = [
        'user_id' => 'integer',
        'last_used_at' => 'datetime',
    ];

    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
