<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ServiceJob extends Model
{
    use HasFactory;

    protected $table = 'service_jobs';

    protected $dates = [
        'scheduled_date',
        'started_at',
        'completed_at',
        'deleted_at',
    ];

    protected $fillable = [
        'Ref',
        'client_id',
        'technician_id',
        'service_item',
        'job_type',
        'status',
        'scheduled_date',
        'started_at',
        'completed_at',
        'notes',
        'created_at',
        'updated_at',
        'deleted_at',
    ];

    public function client()
    {
        return $this->belongsTo(Client::class, 'client_id');
    }

    public function technician()
    {
        return $this->belongsTo(ServiceTechnician::class, 'technician_id');
    }

    public function checklistItems()
    {
        return $this->hasMany(ServiceJobChecklistItem::class, 'service_job_id');
    }
}


