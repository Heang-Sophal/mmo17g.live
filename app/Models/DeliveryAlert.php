<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class DeliveryAlert extends Model
{
    protected $fillable = [
        'user_id',
        'sale_id',
        'warehouse_id',
        'type',
        'title',
        'message',
        'payload',
        'read_at',
    ];

    protected $casts = [
        'user_id' => 'integer',
        'sale_id' => 'integer',
        'warehouse_id' => 'integer',
        'payload' => 'array',
        'read_at' => 'datetime',
    ];

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function sale()
    {
        return $this->belongsTo(Sale::class);
    }

    public function warehouse()
    {
        return $this->belongsTo(Warehouse::class);
    }
}
