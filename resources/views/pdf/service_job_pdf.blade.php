<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <title>Service Job - #{{$job['id']}}</title>
    <style>
        @page { 
            size: A4;
            margin: 10mm 15mm; 
        }
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body { 
            font-family: 'DejaVu Sans', 'Arial', sans-serif; 
            font-size: 9pt; 
            color: #1f2937; 
            line-height: 1.4; 
            padding: 15px 20px;
            max-width: 100%;
        }
    </style>
</head>
<body>
    <!-- Header Section -->
    <table style="width: 100%; margin-bottom: 12px;" cellpadding="0" cellspacing="0">
        <tr>
            <td style="width: 30%; vertical-align: top;">
                @php($logoDataUri = media_data_uri('app', $setting['logo'] ?? null))
                @if(!empty($logoDataUri))
                    <img src="{{ $logoDataUri }}" alt="Logo" style="max-height: 60px; max-width: 180px;">
                @endif
            </td>
            <td style="width: 70%; vertical-align: top; text-align: right;">
                <div style="font-size: 18pt; font-weight: bold; color: #1a56db; margin-bottom: 6px; letter-spacing: 0.5px;">SERVICE JOB</div>
                <div style="display: inline-block; background: #f3f4f6; padding: 5px 12px; border-radius: 4px; font-size: 10pt; font-weight: bold; color: #4b5563; margin-bottom: 8px;">{{$job['Ref'] ?? '#'.$job['id']}}</div>
                <table style="width: 100%; font-size: 8pt; margin-top: 6px;" cellpadding="3" cellspacing="0">
                    <tr>
                        <td style="text-align: right; color: #6b7280; font-weight: 600;">Date:</td>
                        <td style="text-align: right; color: #1f2937; font-weight: 500;">
                            @if($job['scheduled_date'])
                                @php
                                    $dateFormat = $setting['date_format'] ?? 'YYYY-MM-DD';
                                    $dateTime = \Carbon\Carbon::parse($job['scheduled_date']);
                                    $phpDateFormat = str_replace(['YYYY', 'MM', 'DD'], ['Y', 'm', 'd'], $dateFormat);
                                    $formattedDate = $dateTime->format($phpDateFormat);
                                @endphp
                                {{$formattedDate}}
                            @else
                                -
                            @endif
                        </td>
                    </tr>
                    <tr>
                        <td style="text-align: right; color: #6b7280; font-weight: 600;">Reference:</td>
                        <td style="text-align: right; color: #1f2937; font-weight: 500;">{{$job['Ref'] ?? '#'.$job['id']}}</td>
                    </tr>
                    <tr>
                        <td style="text-align: right; color: #6b7280; font-weight: 600;">Status:</td>
                        <td style="text-align: right;">
                            @php
                                $statusColors = [
                                    'pending' => ['bg' => '#fef3c7', 'color' => '#92400e'],
                                    'in_progress' => ['bg' => '#dbeafe', 'color' => '#1e40af'],
                                    'completed' => ['bg' => '#d1fae5', 'color' => '#065f46'],
                                    'cancelled' => ['bg' => '#fee2e2', 'color' => '#991b1b'],
                                ];
                                $statusKey = strtolower($job['status']);
                                $statusStyle = $statusColors[$statusKey] ?? ['bg' => '#e5e7eb', 'color' => '#374151'];
                                $statusLabel = ucfirst(str_replace('_', ' ', $job['status']));
                            @endphp
                            <span style="background: {{$statusStyle['bg']}}; color: {{$statusStyle['color']}}; padding: 3px 8px; border-radius: 3px; font-size: 7pt; font-weight: bold; text-transform: uppercase;">{{$statusLabel}}</span>
                        </td>
                    </tr>
                </table>
            </td>
        </tr>
    </table>

    <!-- Divider -->
    <div style="height: 2px; background: #1a56db; margin: 8px 0 10px 0;"></div>

    <!-- Customer & Company Info Section -->
    <table style="width: 100%; margin-bottom: 12px;" cellpadding="0" cellspacing="0">
        <tr>
            <td style="width: 48%; vertical-align: top;">
                <div style="border: 1px solid #e5e7eb; border-radius: 4px; overflow: hidden;">
                    <div style="background: #1a56db; padding: 5px 10px; border-bottom: 1px solid #3b82f6;">
                        <div style="color: #ffffff; font-size: 9pt; font-weight: bold; text-transform: uppercase; letter-spacing: 0.3px;">CUSTOMER</div>
                    </div>
                    <div style="padding: 8px 10px; background: #f9fafb;">
                        <div style="font-size: 10pt; font-weight: bold; color: #1f2937; margin-bottom: 4px;">{{$job['client_name']}}</div>
                        <div style="font-size: 7.5pt; color: #6b7280; line-height: 1.5;">
                            @if($job['client_phone'] && $job['client_phone'] !== '-')
                                <div><strong style="color: #1f2937;">Phone:</strong> {{$job['client_phone']}}</div>
                            @endif
                            @if($job['client_email'] && $job['client_email'] !== '-')
                                <div><strong style="color: #1f2937;">Email:</strong> {{$job['client_email']}}</div>
                            @endif
                            @if($job['client_adr'] && $job['client_adr'] !== '-')
                                <div><strong style="color: #1f2937;">Address:</strong> {{$job['client_adr']}}</div>
                            @endif
                        </div>
                    </div>
                </div>
            </td>
            <td style="width: 4%;"></td>
            <td style="width: 48%; vertical-align: top;">
                <div style="border: 1px solid #e5e7eb; border-radius: 4px; overflow: hidden;">
                    <div style="background: #1a56db; padding: 5px 10px; border-bottom: 1px solid #3b82f6;">
                        <div style="color: #ffffff; font-size: 9pt; font-weight: bold; text-transform: uppercase; letter-spacing: 0.3px;">COMPANY</div>
                    </div>
                    <div style="padding: 8px 10px; background: #f9fafb;">
                        <div style="font-size: 10pt; font-weight: bold; color: #1f2937; margin-bottom: 4px;">{{$setting['CompanyName']}}</div>
                        <div style="font-size: 7.5pt; color: #6b7280; line-height: 1.5;">
                            <div><strong style="color: #1f2937;">Phone:</strong> {{$setting['CompanyPhone']}}</div>
                            <div><strong style="color: #1f2937;">Email:</strong> {{$setting['email']}}</div>
                            <div><strong style="color: #1f2937;">Address:</strong> {{$setting['CompanyAdress']}}</div>
                        </div>
                    </div>
                </div>
            </td>
        </tr>
    </table>

    <!-- Service Job Details Table -->
    <table style="width: 100%; border-collapse: collapse; margin-bottom: 10px; border: 1px solid #e5e7eb;" cellpadding="0" cellspacing="0">
        <thead>
            <tr style="background: #1a56db;">
                <th style="padding: 6px 10px; text-align: left; font-size: 8pt; font-weight: bold; color: #ffffff; text-transform: uppercase; border-right: 1px solid rgba(255,255,255,0.2);">JOB DETAILS</th>
                <th style="padding: 6px 10px; text-align: right; font-size: 8pt; font-weight: bold; color: #ffffff; text-transform: uppercase;">VALUE</th>
            </tr>
        </thead>
        <tbody>
            <tr style="border-bottom: 1px solid #e5e7eb; background: #ffffff;">
                <td style="padding: 8px 10px; font-weight: 600; font-size: 8.5pt; color: #1f2937;">Service Item</td>
                <td style="padding: 8px 10px; text-align: right; font-size: 8.5pt; color: #1f2937;">{{$job['service_item']}}</td>
            </tr>
            @if($job['job_type'])
            <tr style="border-bottom: 1px solid #e5e7eb; background: #f9fafb;">
                <td style="padding: 8px 10px; font-weight: 600; font-size: 8.5pt; color: #1f2937;">Job Type</td>
                <td style="padding: 8px 10px; text-align: right; font-size: 8.5pt; color: #1f2937;">{{$job['job_type']}}</td>
            </tr>
            @endif
            <tr style="border-bottom: 1px solid #e5e7eb; background: {{$job['job_type'] ? '#ffffff' : '#f9fafb'}};">
                <td style="padding: 8px 10px; font-weight: 600; font-size: 8.5pt; color: #1f2937;">Technician</td>
                <td style="padding: 8px 10px; text-align: right; font-size: 8.5pt; color: #1f2937;">{{$job['technician_name']}}</td>
            </tr>
            @if($job['scheduled_date'])
            <tr style="border-bottom: 1px solid #e5e7eb; background: #f9fafb;">
                <td style="padding: 8px 10px; font-weight: 600; font-size: 8.5pt; color: #1f2937;">Scheduled Date</td>
                <td style="padding: 8px 10px; text-align: right; font-size: 8.5pt; color: #1f2937;">
                    @php
                        $dateFormat = $setting['date_format'] ?? 'YYYY-MM-DD';
                        $dateTime = \Carbon\Carbon::parse($job['scheduled_date']);
                        $phpDateFormat = str_replace(['YYYY', 'MM', 'DD'], ['Y', 'm', 'd'], $dateFormat);
                        $formattedDate = $dateTime->format($phpDateFormat);
                    @endphp
                    {{$formattedDate}}
                </td>
            </tr>
            @endif
            @if($job['started_at'])
            <tr style="border-bottom: 1px solid #e5e7eb; background: #ffffff;">
                <td style="padding: 8px 10px; font-weight: 600; font-size: 8.5pt; color: #1f2937;">Started At</td>
                <td style="padding: 8px 10px; text-align: right; font-size: 8.5pt; color: #1f2937;">
                    @php
                        $startedDate = \Carbon\Carbon::parse($job['started_at']);
                        $formattedStarted = $startedDate->format('Y-m-d H:i');
                    @endphp
                    {{$formattedStarted}}
                </td>
            </tr>
            @endif
            @if($job['completed_at'])
            <tr style="border-bottom: 1px solid #e5e7eb; background: #f9fafb;">
                <td style="padding: 8px 10px; font-weight: 600; font-size: 8.5pt; color: #1f2937;">Completed At</td>
                <td style="padding: 8px 10px; text-align: right; font-size: 8.5pt; color: #1f2937;">
                    @php
                        $completedDate = \Carbon\Carbon::parse($job['completed_at']);
                        $formattedCompleted = $completedDate->format('Y-m-d H:i');
                    @endphp
                    {{$formattedCompleted}}
                </td>
            </tr>
            @endif
            <tr style="border-bottom: 1px solid #e5e7eb; background: {{$job['completed_at'] ? '#ffffff' : '#f9fafb'}};">
                <td style="padding: 8px 10px; font-weight: 600; font-size: 8.5pt; color: #1f2937;">Status</td>
                <td style="padding: 8px 10px; text-align: right; font-size: 8.5pt; color: #1f2937;">
                    @php
                        $statusColors = [
                            'pending' => ['bg' => '#fef3c7', 'color' => '#92400e'],
                            'in_progress' => ['bg' => '#dbeafe', 'color' => '#1e40af'],
                            'completed' => ['bg' => '#d1fae5', 'color' => '#065f46'],
                            'cancelled' => ['bg' => '#fee2e2', 'color' => '#991b1b'],
                        ];
                        $statusKey = strtolower($job['status']);
                        $statusStyle = $statusColors[$statusKey] ?? ['bg' => '#e5e7eb', 'color' => '#374151'];
                        $statusLabel = ucfirst(str_replace('_', ' ', $job['status']));
                    @endphp
                    <span style="background: {{$statusStyle['bg']}}; color: {{$statusStyle['color']}}; padding: 3px 8px; border-radius: 3px; font-size: 7pt; font-weight: bold; text-transform: uppercase;">{{$statusLabel}}</span>
                </td>
            </tr>
        </tbody>
    </table>

    <!-- Checklist Section -->
    @if(!empty($job['checklist']) && count($job['checklist']) > 0)
    <table style="width: 100%; border-collapse: collapse; margin-bottom: 10px; border: 1px solid #e5e7eb;" cellpadding="0" cellspacing="0">
        <thead>
            <tr style="background: #1a56db;">
                <th style="padding: 6px 10px; text-align: left; font-size: 8pt; font-weight: bold; color: #ffffff; text-transform: uppercase; width: 5%;">✓</th>
                <th style="padding: 6px 10px; text-align: left; font-size: 8pt; font-weight: bold; color: #ffffff; text-transform: uppercase; width: 30%;">Category</th>
                <th style="padding: 6px 10px; text-align: left; font-size: 8pt; font-weight: bold; color: #ffffff; text-transform: uppercase;">Item</th>
            </tr>
        </thead>
        <tbody>
            @foreach($job['checklist'] as $index => $item)
            <tr style="border-bottom: 1px solid #e5e7eb; background: {{$index % 2 == 0 ? '#ffffff' : '#f9fafb'}};">
                <td style="padding: 8px 10px; text-align: center; font-size: 9pt; color: {{$item['is_completed'] ? '#10b981' : '#9ca3af'}};">
                    {{$item['is_completed'] ? '✓' : '○'}}
                </td>
                <td style="padding: 8px 10px; font-size: 8pt; color: #6b7280;">{{$item['category_name'] ?? '-'}}</td>
                <td style="padding: 8px 10px; font-size: 8.5pt; color: #1f2937; {{$item['is_completed'] ? 'text-decoration: line-through;' : ''}}">{{$item['item_name']}}</td>
            </tr>
            @endforeach
        </tbody>
    </table>
    @endif

    <!-- Notes Section -->
    @if($job['notes'])
    <div style="margin-top: 15px; padding: 10px; background: #f9fafb; border-left: 3px solid #1a56db; border-radius: 3px;">
        <div style="font-size: 8pt; font-weight: bold; color: #1f2937; margin-bottom: 5px; text-transform: uppercase;">NOTES</div>
        <div style="font-size: 8pt; color: #6b7280; line-height: 1.5; white-space: pre-line;">{{$job['notes']}}</div>
    </div>
    @endif

    <!-- Footer -->
    <div style="margin-top: 15px; padding-top: 10px; border-top: 2px solid #e5e7eb;">
        @if($setting['is_invoice_footer'] && $setting['invoice_footer'] !==null)
            <div style="padding: 8px 10px; background: #f9fafb; border-left: 3px solid #1a56db; border-radius: 3px; margin-bottom: 10px;">
                <p style="font-size: 7.5pt; color: #6b7280; line-height: 1.5; margin: 0;">{{$setting['invoice_footer']}}</p>
            </div>
        @endif
        <div style="text-align: center; padding: 8px 0;">
            <p style="font-size: 10pt; font-weight: bold; color: #1a56db; margin: 0; letter-spacing: 0.3px;">Thank you for your business!</p>
        </div>
    </div>
</body>
</html>

































