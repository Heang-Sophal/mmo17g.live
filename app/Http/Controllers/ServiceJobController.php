<?php

namespace App\Http\Controllers;

use App\Models\Client;
use App\Models\ServiceJob;
use App\Models\ServiceJobChecklistItem;
use App\Models\ServiceTechnician;
use App\Models\Setting;
use App\utils\helpers;
use ArPHP\I18N\Arabic;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use PDF;

class ServiceJobController extends BaseController
{
    // -------------- Get All Service Jobs ---------------\\
    public function index(Request $request)
    {
        $this->authorizeForUser($request->user('api'), 'view', ServiceJob::class);

        $perPage = $request->limit ?: 10;
        $pageStart = (int) $request->get('page', 1);
        $offSet = ($pageStart * $perPage) - $perPage;
        $order = $request->SortField ?: 'id';
        $dir = strtolower($request->SortType ?: 'desc');
        if (! in_array($dir, ['asc', 'desc'], true)) {
            $dir = 'desc';
        }

        $sortableMap = [
            'id' => 'service_jobs.id',
            'Ref' => 'service_jobs.Ref',
            'scheduled_date' => 'service_jobs.scheduled_date',
            'status' => 'service_jobs.status',
            'job_type' => 'service_jobs.job_type',
        ];
        $order = $sortableMap[$order] ?? 'service_jobs.Ref';

        $query = ServiceJob::leftJoin('clients', 'clients.id', '=', 'service_jobs.client_id')
            ->leftJoin('service_technicians', 'service_technicians.id', '=', 'service_jobs.technician_id')
            ->whereNull('service_jobs.deleted_at')
            ->select(
                'service_jobs.*',
                'clients.name as client_name',
                'service_technicians.name as technician_name'
            )
            ->where(function ($q) use ($request) {
                return $q->when($request->filled('search'), function ($q) use ($request) {
                    $s = $request->search;

                    return $q->where('service_item', 'LIKE', "%{$s}%")
                        ->orWhere('job_type', 'LIKE', "%{$s}%")
                        ->orWhere('notes', 'LIKE', "%{$s}%");
                });
            })
            ->when($request->filled('client_id'), function ($q) use ($request) {
                $q->where('service_jobs.client_id', (int) $request->client_id);
            })
            ->when($request->filled('technician_id'), function ($q) use ($request) {
                $q->where('service_jobs.technician_id', (int) $request->technician_id);
            })
            ->when($request->filled('status'), function ($q) use ($request) {
                $q->where('service_jobs.status', $request->status);
            })
            ->when($request->filled('job_type'), function ($q) use ($request) {
                $q->where('service_jobs.job_type', $request->job_type);
            })
            ->when($request->filled('from'), function ($q) use ($request) {
                $q->whereDate('service_jobs.scheduled_date', '>=', $request->from);
            })
            ->when($request->filled('to'), function ($q) use ($request) {
                $q->whereDate('service_jobs.scheduled_date', '<=', $request->to);
            });

        $totalRows = $query->count();
        if ($perPage == '-1') {
            $perPage = $totalRows;
        }

        $jobs = $query->offset($offSet)
            ->limit($perPage)
            ->orderBy($order, $dir)
            ->get();

        $data = [];
        foreach ($jobs as $job) {
            $item['id'] = $job->id;
            $item['Ref'] = $job->Ref;
            $item['client_id'] = $job->client_id;
            $item['client_name'] = $job->client_name ?? null;
            $item['technician_id'] = $job->technician_id;
            $item['technician_name'] = $job->technician_name ?? null;
            $item['service_item'] = $job->service_item;
            $item['job_type'] = $job->job_type;
            $item['status'] = $job->status;
            $item['scheduled_date'] = $job->scheduled_date;
            $item['started_at'] = $job->started_at;
            $item['completed_at'] = $job->completed_at;
            $data[] = $item;
        }

        return response()->json([
            'jobs' => $data,
            'totalRows' => $totalRows,
        ]);
    }

    // -------------- Meta for create form ---------------\\
    public function create(Request $request)
    {
        $this->authorizeForUser($request->user('api'), 'view', ServiceJob::class);

        $clients = Client::whereNull('deleted_at')
            ->orderBy('name')
            ->get(['id', 'name', 'code', 'phone']);

        $technicians = ServiceTechnician::whereNull('deleted_at')
            ->where('is_active', true)
            ->orderBy('name')
            ->get(['id', 'name', 'phone', 'email']);

        return response()->json([
            'clients' => $clients,
            'technicians' => $technicians,
            'statuses' => ['pending', 'in_progress', 'completed', 'cancelled'],
        ]);
    }

    // -------------- Store New Service Job ---------------\\
    public function store(Request $request)
    {
        $this->authorizeForUser($request->user('api'), 'create', ServiceJob::class);

        $validated = $request->validate([
            'client_id' => 'required|integer|exists:clients,id',
            'technician_id' => 'nullable|integer|exists:service_technicians,id',
            'service_item' => 'required|string|max:191',
            'job_type' => 'nullable|string|max:191',
            'status' => 'nullable|string|max:50',
            'scheduled_date' => 'nullable|date',
            'started_at' => 'nullable|date',
            'completed_at' => 'nullable|date',
            'notes' => 'nullable|string',
            'checklist' => 'nullable|array',
            'checklist.*.category_id' => 'nullable|integer',
            'checklist.*.category_name' => 'nullable|string|max:191',
            'checklist.*.item_id' => 'nullable|integer',
            'checklist.*.item_name' => 'required_with:checklist|string|max:191',
            'checklist.*.is_completed' => 'nullable|boolean',
        ]);

        // Generate reference number
        $validated['Ref'] = $this->getNumberOrder();

        $job = ServiceJob::create([
            'Ref' => $validated['Ref'],
            'client_id' => $validated['client_id'],
            'technician_id' => $validated['technician_id'] ?? null,
            'service_item' => $validated['service_item'],
            'job_type' => $validated['job_type'] ?? null,
            'status' => $validated['status'] ?? 'pending',
            'scheduled_date' => $validated['scheduled_date'] ?? null,
            'started_at' => $validated['started_at'] ?? null,
            'completed_at' => $validated['completed_at'] ?? null,
            'notes' => $validated['notes'] ?? null,
        ]);

        $this->syncChecklistItems($job, $validated['checklist'] ?? []);

        return response()->json(['success' => true, 'id' => $job->id], 201);
    }

    // ------------ function show (job + checklist) -----------\\
    public function show(Request $request, $id)
    {
        $this->authorizeForUser($request->user('api'), 'view', ServiceJob::class);

        $job = ServiceJob::whereNull('deleted_at')->with(['client', 'technician'])->findOrFail($id);

        $checklist = $job->checklistItems()
            ->whereNull('deleted_at')
            ->orderBy('id')
            ->get()
            ->map(function (ServiceJobChecklistItem $item) {
                return [
                    'id' => $item->id,
                    'category_id' => $item->category_id,
                    'item_id' => $item->item_id,
                    'category_name' => $item->category_name,
                    'item_name' => $item->item_name,
                    'is_completed' => (bool) $item->is_completed,
                    'completed_at' => $item->completed_at,
                ];
            })
            ->all();

        return response()->json([
            'job' => [
                'id' => $job->id,
                'Ref' => $job->Ref,
                'client_id' => $job->client_id,
                'client_name' => $job->client ? $job->client->name : null,
                'technician_id' => $job->technician_id,
                'technician_name' => $job->technician ? $job->technician->name : null,
                'service_item' => $job->service_item,
                'job_type' => $job->job_type,
                'status' => $job->status,
                'scheduled_date' => $job->scheduled_date,
                'started_at' => $job->started_at,
                'completed_at' => $job->completed_at,
                'notes' => $job->notes,
            ],
            'checklist' => $checklist,
        ]);
    }

    // -------------- Update Service Job ---------------\\
    public function update(Request $request, $id)
    {
        $this->authorizeForUser($request->user('api'), 'update', ServiceJob::class);

        $job = ServiceJob::whereNull('deleted_at')->findOrFail($id);

        $validated = $request->validate([
            'client_id' => 'required|integer|exists:clients,id',
            'technician_id' => 'nullable|integer|exists:service_technicians,id',
            'service_item' => 'required|string|max:191',
            'job_type' => 'nullable|string|max:191',
            'status' => 'nullable|string|max:50',
            'scheduled_date' => 'nullable|date',
            'started_at' => 'nullable|date',
            'completed_at' => 'nullable|date',
            'notes' => 'nullable|string',
            'checklist' => 'nullable|array',
            'checklist.*.category_id' => 'nullable|integer',
            'checklist.*.category_name' => 'nullable|string|max:191',
            'checklist.*.item_id' => 'nullable|integer',
            'checklist.*.item_name' => 'required_with:checklist|string|max:191',
            'checklist.*.is_completed' => 'nullable|boolean',
        ]);

        $job->update([
            'client_id' => $validated['client_id'],
            'technician_id' => $validated['technician_id'] ?? null,
            'service_item' => $validated['service_item'],
            'job_type' => $validated['job_type'] ?? null,
            'status' => $validated['status'] ?? $job->status,
            'scheduled_date' => $validated['scheduled_date'] ?? null,
            'started_at' => $validated['started_at'] ?? null,
            'completed_at' => $validated['completed_at'] ?? null,
            'notes' => $validated['notes'] ?? null,
        ]);

        if (array_key_exists('checklist', $validated)) {
            $this->syncChecklistItems($job, $validated['checklist'] ?? []);
        }

        return response()->json(['success' => true]);
    }

    // -------------- Delete Service Job ---------------\\
    public function destroy(Request $request, $id)
    {
        $this->authorizeForUser($request->user('api'), 'delete', ServiceJob::class);

        $job = ServiceJob::findOrFail($id);
        $job->update(['deleted_at' => now()]);

        return response()->json(['success' => true]);
    }

    // -------------- Helper: sync checklist items ---------------\\
    protected function syncChecklistItems(ServiceJob $job, array $items): void
    {
        // Soft-delete existing
        ServiceJobChecklistItem::where('service_job_id', $job->id)
            ->whereNull('deleted_at')
            ->update(['deleted_at' => now()]);

        foreach ($items as $item) {
            if (! isset($item['item_name']) || $item['item_name'] === null || $item['item_name'] === '') {
                continue;
            }

            ServiceJobChecklistItem::create([
                'service_job_id' => $job->id,
                'category_id' => $item['category_id'] ?? null,
                'item_id' => $item['item_id'] ?? null,
                'category_name' => $item['category_name'] ?? null,
                'item_name' => $item['item_name'],
                'is_completed' => isset($item['is_completed']) ? (bool) $item['is_completed'] : false,
                'completed_at' => ! empty($item['is_completed']) ? now() : null,
            ]);
        }
    }

    /**
     * Generate reference number for service jobs.
     */
    public function getNumberOrder()
    {
        $last = DB::table('service_jobs')->latest('id')->first();

        if ($last && $last->Ref) {
            $item = $last->Ref;
            $nwMsg = explode('_', $item);
            $inMsg = isset($nwMsg[1]) ? ($nwMsg[1] + 1) : 1112;
            $code = 'SJ_'.$inMsg;
        } else {
            $code = 'SJ_1111';
        }

        return $code;
    }

    /**
     * Generate PDF for service job.
     */
    public function service_job_pdf(Request $request, $id)
    {
        $this->authorizeForUser($request->user('api'), 'view', ServiceJob::class);
        $helpers = new helpers;
        $job = ServiceJob::with(['client', 'technician'])
            ->whereNull('deleted_at')
            ->findOrFail($id);

        $checklist = $job->checklistItems()
            ->whereNull('deleted_at')
            ->orderBy('id')
            ->get()
            ->map(function (ServiceJobChecklistItem $item) {
                return [
                    'category_name' => $item->category_name,
                    'item_name' => $item->item_name,
                    'is_completed' => (bool) $item->is_completed,
                ];
            })
            ->all();

        $jobData = [
            'id' => $job->id,
            'Ref' => $job->Ref,
            'client_name' => optional($job->client)->name ?? '-',
            'client_email' => optional($job->client)->email ?? '-',
            'client_phone' => optional($job->client)->phone ?? '-',
            'client_adr' => optional($job->client)->adresse ?? '-',
            'technician_name' => optional($job->technician)->name ?? '-',
            'service_item' => $job->service_item,
            'job_type' => $job->job_type,
            'status' => $job->status,
            'scheduled_date' => $job->scheduled_date,
            'started_at' => $job->started_at,
            'completed_at' => $job->completed_at,
            'notes' => $job->notes,
            'checklist' => $checklist,
        ];

        $settings = Setting::whereNull('deleted_at')->first();
        $symbol = $helpers->Get_Currency_Code();

        $Html = view('pdf.service_job_pdf', [
            'symbol' => $symbol,
            'setting' => $settings,
            'job' => $jobData,
        ])->render();

        $arabic = new Arabic;
        $p = $arabic->arIdentify($Html);
        for ($i = count($p) - 1; $i >= 0; $i -= 2) {
            $utf8ar = $arabic->utf8Glyphs(substr($Html, $p[$i - 1], $p[$i] - $p[$i - 1]));
            $Html = substr_replace($Html, $utf8ar, $p[$i - 1], $p[$i] - $p[$i - 1]);
        }

        $pdf = PDF::loadHTML($Html);

        return $pdf->download('Service_Job_'.$job->id.'.pdf');
    }
}


