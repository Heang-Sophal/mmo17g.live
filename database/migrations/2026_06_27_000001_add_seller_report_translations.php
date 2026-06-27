<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        if (! Schema::hasTable('translations')) {
            return;
        }

        $translations = [
            'en' => [
                'SalesBySellerReport' => 'Sales by seller report',
                'SellerReport_Title' => 'Sales by seller report',
                'SellerReport_DateTime' => 'Date Time',
                'SellerReport_CustomerAddress' => 'Customer Address',
                'SellerReport_CustomerPhone' => 'Customer Phone',
                'SellerReport_ProductName' => 'Product Name',
                'SellerReport_ProductQty' => 'Product QTY',
                'SellerReport_ProductUnit' => 'Product Unit',
                'SellerReport_ProductCost' => 'Product Cost',
                'SellerReport_PaidAmount' => 'Paid Amount',
                'SellerReport_Shipping' => 'Shipping',
                'SellerReport_PaymentMethod' => 'Payment Method',
                'SellerReport_Seller' => 'Seller',
                'SellerReport_SellerName' => 'Seller Name',
                'SellerReport_SellerPhone' => 'Seller Phone',
                'SellerReport_TotalCost' => 'Total Cost',
                'SellerReport_TotalPaidAmount' => 'Total Paid Amount',
                'SellerReport_TotalShipping' => 'Total Shipping',
                'SellerReport_SaleByCash' => 'Sale By Cash',
                'SellerReport_SaleByKhqr' => 'Sale By KHQR',
                'SellerReport_Profit' => 'Profit',
                'SellerReport_Loss' => 'Loss',
                'SellerReport_CashFromBoss' => 'Cash From Boss',
                'SellerReport_CashToBoss' => 'Cash to Boss',
                'SellerReport_ChooseSeller' => 'Choose Seller',
                'SellerReport_All' => 'All',
                'SellerReport_Completed' => 'Completed',
                'SellerReport_Pending' => 'Pending',
                'SellerReport_Ordered' => 'Ordered',
                'SellerReport_Paid' => 'Paid',
                'SellerReport_Partial' => 'Partial',
                'SellerReport_Unpaid' => 'Unpaid',
                'SellerReport_RowsPerPage' => 'Rows per page',
                'SellerReport_Of' => 'of',
                'SellerReport_Next' => 'next',
                'SellerReport_Prev' => 'prev',
                'SellerReport_Total' => 'Total',
                'SellerReport_Summary' => 'Summary',
                'SellerReport_Cash' => 'Cash',
                'SellerReport_Khqr' => 'KHQR',
                'SellerReport_Apply' => 'Apply',
                'SellerReport_Cancel' => 'Cancel',
                'SellerReport_CustomRange' => 'Custom Range',
                'SellerReport_AllowPopups' => 'Please allow popups to print',
                'SellerReport_DateRange' => 'Date range',
                'SellerReport_GeneratedAt' => 'Generated at',
                'SellerReport_Page' => 'Page',
                'SellerReport_NoDataToExport' => 'No data to export',
                'SellerReport_ExportFailed' => 'Failed to export PDF',
                'SellerReport_ExportingPdf' => 'Exporting PDF...',
            ],
            'kh' => [
                'SalesBySellerReport' => 'របាយការណ៍លក់តាមអ្នកលក់',
                'SellerReport_Title' => 'របាយការណ៍លក់តាមអ្នកលក់',
                'SellerReport_DateTime' => 'កាលបរិច្ឆេទ និងម៉ោង',
                'SellerReport_CustomerAddress' => 'ទីតាំងអតិថិជន',
                'SellerReport_CustomerPhone' => 'លេខទូរស័ព្ទអតិថិជន',
                'SellerReport_ProductName' => 'ឈ្មោះផលិតផល',
                'SellerReport_ProductQty' => 'ចំនួនផលិតផល',
                'SellerReport_ProductUnit' => 'ឯកតាផលិតផល',
                'SellerReport_ProductCost' => 'ថ្លៃដើមផលិតផល',
                'SellerReport_PaidAmount' => 'ប្រាក់បានបង់',
                'SellerReport_Shipping' => 'ថ្លៃដឹកជញ្ជូន',
                'SellerReport_PaymentMethod' => 'វិធីបង់ប្រាក់',
                'SellerReport_Seller' => 'អ្នកលក់',
                'SellerReport_SellerName' => 'ឈ្មោះអ្នកលក់',
                'SellerReport_SellerPhone' => 'លេខទូរស័ព្ទអ្នកលក់',
                'SellerReport_TotalCost' => 'សរុបថ្លៃដើម',
                'SellerReport_TotalPaidAmount' => 'សរុបប្រាក់បានបង់',
                'SellerReport_TotalShipping' => 'សរុបថ្លៃដឹក',
                'SellerReport_SaleByCash' => 'លក់ដោយសាច់ប្រាក់',
                'SellerReport_SaleByKhqr' => 'លក់ដោយ KHQR',
                'SellerReport_Profit' => 'ប្រាក់ចំណេញ',
                'SellerReport_Loss' => 'ខាត',
                'SellerReport_CashFromBoss' => 'ប្រាក់ត្រូវទទួលពីក្រុមហ៊ុន',
                'SellerReport_CashToBoss' => 'ប្រាក់ត្រូវទូទាត់ឲ្យក្រុមហ៊ុន',
                'SellerReport_ChooseSeller' => 'ជ្រើសរើសអ្នកលក់',
                'SellerReport_All' => 'ទាំងអស់',
                'SellerReport_Completed' => 'បានបញ្ចប់',
                'SellerReport_Pending' => 'កំពុងរង់ចាំ',
                'SellerReport_Ordered' => 'បានបញ្ជាទិញ',
                'SellerReport_Paid' => 'បានបង់',
                'SellerReport_Partial' => 'បានបង់ខ្លះ',
                'SellerReport_Unpaid' => 'មិនទាន់បង់',
                'SellerReport_RowsPerPage' => 'ជួរដេកក្នុងមួយទំព័រ',
                'SellerReport_Of' => 'នៃ',
                'SellerReport_Next' => 'បន្ទាប់',
                'SellerReport_Prev' => 'មុន',
                'SellerReport_Total' => 'សរុប',
                'SellerReport_Summary' => 'សង្ខេប',
                'SellerReport_Cash' => 'សាច់ប្រាក់',
                'SellerReport_Khqr' => 'KHQR',
                'SellerReport_Apply' => 'អនុវត្ត',
                'SellerReport_Cancel' => 'បោះបង់',
                'SellerReport_CustomRange' => 'ជ្រើសរើសផ្ទាល់',
                'SellerReport_AllowPopups' => 'សូមអនុញ្ញាត popup ដើម្បីបោះពុម្ព',
                'SellerReport_DateRange' => 'រយៈពេល',
                'SellerReport_GeneratedAt' => 'បានបង្កើតនៅ',
                'SellerReport_Page' => 'ទំព័រ',
                'SellerReport_NoDataToExport' => 'គ្មានទិន្នន័យសម្រាប់នាំចេញ',
                'SellerReport_ExportFailed' => 'នាំចេញ PDF បរាជ័យ',
                'SellerReport_ExportingPdf' => 'កំពុងនាំចេញ PDF...',
            ],
        ];

        $now = now();
        $rows = [];

        foreach ($translations as $locale => $labels) {
            foreach ($labels as $key => $value) {
                $rows[] = [
                    'locale' => $locale,
                    'key' => $key,
                    'value' => $value,
                    'is_default' => $locale === 'en' ? 1 : 0,
                    'created_at' => $now,
                    'updated_at' => $now,
                ];
            }
        }

        DB::table('translations')->upsert(
            $rows,
            ['locale', 'key'],
            ['value', 'is_default', 'updated_at']
        );
    }

    public function down(): void
    {
        if (! Schema::hasTable('translations')) {
            return;
        }

        DB::table('translations')
            ->whereIn('locale', ['en', 'kh'])
            ->whereIn('key', [
                'SellerReport_Title',
                'SellerReport_DateTime',
                'SellerReport_CustomerAddress',
                'SellerReport_CustomerPhone',
                'SellerReport_ProductName',
                'SellerReport_ProductQty',
                'SellerReport_ProductUnit',
                'SellerReport_ProductCost',
                'SellerReport_PaidAmount',
                'SellerReport_Shipping',
                'SellerReport_PaymentMethod',
                'SellerReport_Seller',
                'SellerReport_SellerName',
                'SellerReport_SellerPhone',
                'SellerReport_TotalCost',
                'SellerReport_TotalPaidAmount',
                'SellerReport_TotalShipping',
                'SellerReport_SaleByCash',
                'SellerReport_SaleByKhqr',
                'SellerReport_Profit',
                'SellerReport_Loss',
                'SellerReport_CashFromBoss',
                'SellerReport_CashToBoss',
                'SellerReport_ChooseSeller',
                'SellerReport_All',
                'SellerReport_Completed',
                'SellerReport_Pending',
                'SellerReport_Ordered',
                'SellerReport_Paid',
                'SellerReport_Partial',
                'SellerReport_Unpaid',
                'SellerReport_RowsPerPage',
                'SellerReport_Of',
                'SellerReport_Next',
                'SellerReport_Prev',
                'SellerReport_Total',
                'SellerReport_Summary',
                'SellerReport_Cash',
                'SellerReport_Khqr',
                'SellerReport_Apply',
                'SellerReport_Cancel',
                'SellerReport_CustomRange',
                'SellerReport_AllowPopups',
                'SellerReport_DateRange',
                'SellerReport_GeneratedAt',
                'SellerReport_Page',
                'SellerReport_NoDataToExport',
                'SellerReport_ExportFailed',
                'SellerReport_ExportingPdf',
            ])
            ->delete();
    }
};
