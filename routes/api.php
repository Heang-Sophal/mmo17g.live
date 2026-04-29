<?php

use App\Http\Controllers\Api\CustomerDisplayController;
use App\Http\Controllers\Api\Store\BannersApiController;
use App\Http\Controllers\Api\Store\CollectionController;
use App\Http\Controllers\Api\Store\MessageController;
use App\Http\Controllers\Api\Store\OnlineOrdersApiController;
use App\Http\Controllers\Api\Store\PagesApiController;
use App\Http\Controllers\Api\Store\SettingsApiController;
use App\Http\Controllers\Api\Store\SubscriberController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
 */

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

// --------------------------- Reset Password  ---------------------------

Route::group([
    'prefix' => 'password',
], function () {
    Route::post('create', 'PasswordResetController@create');
    Route::post('reset', 'PasswordResetController@reset');
});

Route::get('/products_clean_names', 'ProductsController@cleanNames');

Route::post('getAccessToken', 'AuthController@getAccessToken');

Route::get('/get-logo-setting', function () {
    $setting = \App\Models\Setting::first();

    return response()->json([
        'logo' => $setting->logo ?? null,
    ]);
});

Route::get('/get-mobile-app-name', function (Request $request) {
    $setting = \App\Models\Setting::first();
    $app = strtolower(trim((string) $request->query('app', 'seller')));

    if ($app === 'delivery') {
        $mobileAppName = filled($setting->delivery_mobile_app_name ?? null)
            ? $setting->delivery_mobile_app_name
            : null;
        $mobileAppLogo = $setting->delivery_mobile_app_logo ?? null;
    } else {
        $mobileAppName = filled($setting->seller_mobile_app_name ?? null)
            ? $setting->seller_mobile_app_name
            : (filled($setting->mobile_app_name ?? null)
                ? $setting->mobile_app_name
                : ($setting->app_name ?? null));
        $mobileAppLogo = $setting->seller_mobile_app_logo
            ?? $setting->mobile_app_logo
            ?? null;
    }

    return response()->json([
        'mobile_app_name' => $mobileAppName,
        'mobile_app_logo' => $mobileAppLogo,
        'mobile_app_logo_url' => media_public_url('app', $mobileAppLogo),
    ]);
});

Route::get('/translations/{locale}', function ($locale) {
    $translations = \DB::table('translations')
        ->where('locale', $locale)
        ->pluck('value', 'key');

    return response()->json($translations);
});

Route::get('/languages', 'LanguageController@load_language');

Route::middleware(['auth:api', 'Is_Active', 'request.safety', 'token.timeout'])->group(function () {

    Route::get('/admin/store/settings', [SettingsApiController::class, 'show']);
    Route::post('/admin/store/settings', [SettingsApiController::class, 'update']);
    Route::get('/settings/calendar', [SettingsApiController::class, 'showCalendar']);
    Route::patch('/settings/calendar', [SettingsApiController::class, 'updateCalendar']);

    Route::get('/store/orders', [OnlineOrdersApiController::class, 'index']);
    Route::get('/store/orders/{id}', [OnlineOrdersApiController::class, 'show']);
    Route::patch('/store/orders/{id}', [OnlineOrdersApiController::class, 'update']);

    Route::get('/store/pages', [PagesApiController::class, 'index']);
    Route::post('/store/pages', [PagesApiController::class, 'store']);
    Route::get('/store/pages/{id}', [PagesApiController::class, 'show']);
    Route::put('/store/pages/{id}', [PagesApiController::class, 'update']);
    Route::delete('/store/pages/{id}', [PagesApiController::class, 'destroy']);

    Route::get('/store/banners', [BannersApiController::class, 'index']);
    Route::post('/store/banners', [BannersApiController::class, 'store']);
    Route::get('/store/banners/{id}', [BannersApiController::class, 'show']);
    Route::put('/store/banners/{id}', [BannersApiController::class, 'update']);
    Route::delete('/store/banners/{id}', [BannersApiController::class, 'destroy']);

    Route::get('/store/subscribers', [SubscriberController::class, 'index']);
    Route::delete('/store/subscribers/{id}', [SubscriberController::class, 'destroy']);

    Route::get('/store/messages', [MessageController::class, 'index'])->name('messages.index');
    Route::get('/store/messages/{id}', [MessageController::class, 'show'])->name('messages.show');
    Route::patch('/store/messages/{id}/toggle-read', [MessageController::class, 'toggleRead']); // optional
    Route::delete('/store/messages/{id}', [MessageController::class, 'destroy'])->name('messages.destroy');

    // Collections (manual)
    Route::get('/admin/store/collections', [CollectionController::class, 'index']);
    Route::post('/admin/store/collections', [CollectionController::class, 'store']);
    Route::get('/admin/store/collections/{collection}', [CollectionController::class, 'show']);
    Route::put('/admin/store/collections/{collection}', [CollectionController::class, 'update']);
    Route::delete('/admin/store/collections/{collection}', [CollectionController::class, 'destroy']);
    Route::post('/admin/store/collections/{collection}/products', [CollectionController::class, 'syncProducts']);

    Route::get('/admin/store/products', [CollectionController::class, 'searchProducts']);
    Route::get('/admin/products', [CollectionController::class, 'searchProducts']);

    Route::get('dashboard_data', 'DashboardController@dashboard_data');
    Route::post('device-token', 'Api\MobileDeviceTokenController@store');
    Route::delete('device-token', 'Api\MobileDeviceTokenController@destroy');
    Route::get('delivery/dashboard', 'Api\DeliveryApiController@dashboard');
    Route::get('delivery/orders', 'Api\DeliveryApiController@orders');
    Route::post('delivery/orders/{id}/accept', 'Api\DeliveryApiController@acceptOrder');
    Route::post('delivery/orders/{id}/complete', 'Api\DeliveryApiController@completeOrder');
    Route::post('delivery/orders/{id}/shipping', 'Api\DeliveryApiController@updateShipping');
    Route::get('delivery/alerts', 'Api\DeliveryApiController@alerts');
    Route::post('delivery/alerts/read-all', 'Api\DeliveryApiController@readAllAlerts');
    Route::post('delivery/alerts/{id}/read', 'Api\DeliveryApiController@markAlertAsRead');

    Route::get('/retrieve-customer', 'StripeController@retrieveCustomer');
    Route::post('/update-customer-stripe', 'StripeController@updateCustomer');

    Route::get('/languages_setting', 'LanguageController@index');
    Route::post('/languages_setting', 'LanguageController@store');
    Route::put('/languages_setting/{language}', 'LanguageController@update');
    Route::delete('/languages_setting/{language}', 'LanguageController@destroy');
    Route::post('/languages_setting/{id}/set-default', 'LanguageController@setDefault');
    Route::post('/languages_setting/{id}/set-active', 'LanguageController@setLocaleActive');
    Route::post('/languages_setting/set-default/{locale}', 'LanguageController@setDefaultByLocale');

    Route::get('/translations_setting/{locale}', 'LanguageController@get_translate');
    Route::put('/translations_setting/{locale}', 'LanguageController@update_translate');
    Route::put('/translations_setting/{locale}', 'LanguageController@updateOrInsert');
    Route::delete('/translations_setting/{locale}/{key}', 'LanguageController@delete_translate');

    // -------------------------- Clear Cache ---------------------------

    Route::get('clear_cache', 'SettingsController@Clear_Cache');

    // ------------------------------- subscriptions ------------------------\\

    Route::resource('subscriptions', 'SubscriptionController');
    Route::put('/subscriptions/{id}/status', 'SubscriptionController@updateStatus');

    // ------------------------------- error_logs ------------------------\\

    Route::get('/error-logs', 'ErrorLogController@index')->name('error_logs.index');

    // -------------------------- Reports ---------------------------

    Route::get('report/client', 'ReportController@Client_Report');
    Route::get('report/client/{id}', 'ReportController@Client_Report_detail');
    Route::get('report/client_sales', 'ReportController@Sales_Client');
    Route::get('report/client_payments', 'ReportController@Payments_Client');
    Route::get('report/client_quotations', 'ReportController@Quotations_Client');
    Route::get('report/client_returns', 'ReportController@Returns_Client');
    Route::get('report/provider', 'ReportController@Providers_Report');
    Route::get('report/provider/{id}', 'ReportController@Provider_Report_detail');
    Route::get('report/provider_purchases', 'ReportController@Purchases_Provider');
    Route::get('report/provider_payments', 'ReportController@Payments_Provider');
    Route::get('report/provider_returns', 'ReportController@Returns_Provider');
    Route::get('report/sales', 'ReportController@Report_Sales');
    Route::get('report/purchases', 'ReportController@Report_Purchases');
    Route::get('report/get_last_sales', 'ReportController@Get_last_Sales');
    Route::get('report/stock_alert', 'ReportController@Products_Alert');
    Route::get('report/payment_chart', 'ReportController@Payment_chart');
    Route::get('report/warehouse_report', 'ReportController@Warehouse_Report');
    Route::get('report/sales_warehouse', 'ReportController@Sales_Warehouse');
    Route::get('report/quotations_warehouse', 'ReportController@Quotations_Warehouse');
    Route::get('report/returns_sale_warehouse', 'ReportController@Returns_Sale_Warehouse');
    Route::get('report/returns_purchase_warehouse', 'ReportController@Returns_Purchase_Warehouse');
    Route::get('report/expenses_warehouse', 'ReportController@Expenses_Warehouse');
    Route::get('report/warhouse_count_stock', 'ReportController@Warhouse_Count_Stock');
    Route::get('report/report_today', 'ReportController@report_today');
    Route::get('report/count_quantity_alert', 'ReportController@count_quantity_alert');
    Route::get('report/profit_and_loss', 'ReportController@ProfitAndLoss');
    Route::get('report/report_dashboard', 'ReportController@report_dashboard');
    Route::get('report/top_products', 'ReportController@report_top_products');
    Route::get('report/top_customers', 'ReportController@report_top_customers');
    Route::get('report/product_report', 'ReportController@product_report');
    Route::get('report/sale_products_details', 'ReportController@sale_products_details');
    Route::get('report/product_sales_report', 'ReportController@product_sales_report');
    Route::get('report/product_purchases_report', 'ReportController@product_purchases_report');

    Route::get('report/users', 'ReportController@users_Report');
    Route::get('report/stock', 'ReportController@stock_Report');
    Route::get('report/get_sales_by_user', 'ReportController@get_sales_by_user');
    Route::get('report/get_quotations_by_user', 'ReportController@get_quotations_by_user');
    Route::get('report/get_sales_return_by_user', 'ReportController@get_sales_return_by_user');
    Route::get('report/get_purchases_by_user', 'ReportController@get_purchases_by_user');
    Route::get('report/get_purchase_return_by_user', 'ReportController@get_purchase_return_by_user');
    Route::get('report/get_transfer_by_user', 'ReportController@get_transfer_by_user');
    Route::get('report/get_adjustment_by_user', 'ReportController@get_adjustment_by_user');

    Route::get('report/get_sales_by_product', 'ReportController@get_sales_by_product');
    Route::get('report/get_quotations_by_product', 'ReportController@get_quotations_by_product');

    Route::get('report/get_sales_return_by_product', 'ReportController@get_sales_return_by_product');
    Route::get('report/get_purchases_by_product', 'ReportController@get_purchases_by_product');
    Route::get('report/get_purchase_return_by_product', 'ReportController@get_purchase_return_by_product');
    Route::get('report/get_transfer_by_product', 'ReportController@get_transfer_by_product');
    Route::get('report/get_adjustment_by_product', 'ReportController@get_adjustment_by_product');
    Route::get('report/client_pdf/{id}', 'ReportController@download_report_client_pdf');
    Route::get('report/provider_pdf/{id}', 'ReportController@download_report_provider_pdf');
    Route::get('report/analytics_summary', 'ReportController@analyticsSummary');

    Route::get('report/inventory_valuation_summary', 'ReportController@inventory_valuation_summary');
    Route::get('report/stock_inventory_valuation', 'ReportController@stock_inventory_valuation');
    Route::get('report/expenses_report', 'ReportController@expenses_report');
    Route::get('report/deposits_report', 'ReportController@deposits_report');
    Route::get('report/report_transactions', 'ReportController@report_transactions');
    Route::get('report/sales_by_category_report', 'ReportController@sales_by_category_report');
    Route::get('report/sales_by_brand_report', 'ReportController@sales_by_brand_report');
    Route::get('report/sales_by_seller', 'ReportController@sales_by_seller_report');
    Route::get('report/seller_report', 'ReportController@seller_report');
    Route::get('report/attendance_summary', 'ReportController@attendance_summary');
    Route::get('report/inactive_customers', 'ReportController@inactiveCustomers');
    Route::get('report/zero_sales_products', 'ReportController@zeroSalesProducts');
    Route::get('report/dead_stock', 'ReportController@deadStock');
    Route::get('report/draft_invoices', 'ReportController@draftInvoices');
    Route::get('report/discount_summary', 'ReportController@discountSummary');
    Route::get('report/tax_summary', 'ReportController@taxSummary');
    Route::get('report/stock_aging', 'ReportController@stockAging');
    Route::get('report/stock_aging/filters', 'ReportController@stockAgingFilters');
    Route::get('report/cash_flow_report', 'ReportController@cash_flow_report');
    Route::get('report/return_ratio_report', 'ReportController@return_ratio_report');
    Route::get('report/stock_transfer', 'ReportController@stockTransferReport');
    Route::get('report/stock_adjustment', 'ReportController@stockAdjustmentReport');
    Route::get('report/top_suppliers', 'ReportController@topSuppliersReport');
    Route::get('report/customer_loyalty_points', 'ReportController@customerLoyaltyPoints');
    Route::get('get_product_detail/{id}', 'ReportController@Get_Products_Details');

    // Negative Stock
    Route::get('report/negative_stock', 'ReportController@negative_stock_report');

    // AI Reports
    Route::get('report-questions', 'ReportQuestionController@index');
    Route::post('report-questions/run', 'ReportQuestionController@run');

    // ------------------------------- Service & Maintenance ------------------------\\
    // Purely additive module: manages service jobs and dynamic checklists
    Route::resource('service_jobs', 'ServiceJobController');
    Route::resource('service_technicians', 'ServiceTechnicianController')->only(['index', 'store', 'update', 'destroy']);

    Route::get('service_checklist/categories', 'ServiceChecklistController@categoriesIndex');
    Route::post('service_checklist/categories', 'ServiceChecklistController@categoriesStore');
    Route::put('service_checklist/categories/{id}', 'ServiceChecklistController@categoriesUpdate');
    Route::delete('service_checklist/categories/{id}', 'ServiceChecklistController@categoriesDestroy');

    Route::get('service_checklist/items', 'ServiceChecklistController@itemsIndex');
    Route::post('service_checklist/items', 'ServiceChecklistController@itemsStore');
    Route::put('service_checklist/items/{id}', 'ServiceChecklistController@itemsUpdate');
    Route::delete('service_checklist/items/{id}', 'ServiceChecklistController@itemsDestroy');

    Route::get('service_checklist/options', 'ServiceChecklistController@options');

    Route::get('report/service_jobs', 'ServiceReportController@serviceJobs');
    Route::get('report/service_checklist_completion', 'ServiceReportController@checklistCompletion');
    Route::get('report/customer_maintenance_history', 'ServiceReportController@customerMaintenanceHistory');

    // ------------------------------- payment_methods ------------------------\\
    // ------------------------------------------------------------------\\
    Route::resource('payment_methods', 'PaymentMethodController');

    // ------------------------------Employee------------------------------------\\

    Route::resource('employees', 'hrm\EmployeesController');
    Route::post('employees/import/csv', 'hrm\EmployeesController@import_employees');
    Route::post('employees/delete/by_selection', 'hrm\EmployeesController@delete_by_selection');
    Route::get('get_employees_by_department', "hrm\EmployeesController@Get_employees_by_department");
    Route::put('update_social_profile/{id}', "hrm\EmployeesController@update_social_profile");
    Route::get('get_experiences_by_employee', "hrm\EmployeesController@get_experiences_by_employee");
    Route::get('get_accounts_by_employee', "hrm\EmployeesController@get_accounts_by_employee");
    Route::get('Get_employees_by_company', "hrm\EmployeesController@Get_employees_by_company");

    // ------------------------------- Employee Experience ----------------\\
    // --------------------------------------------------------------------\\

    Route::resource('work_experience', 'hrm\EmployeeExperienceController');

    // ------------------------------- Employee Accounts bank ----------------\\
    // --------------------------------------------------------------------\\

    Route::resource('employee_account', 'hrm\EmployeeAccountController');

    // ------------------------------- company --------------------------\\
    // --------------------------------------------------------------------\\
    Route::resource('company', 'hrm\CompanyController');
    Route::get('get_all_company', "hrm\CompanyController@Get_all_Company");
    Route::post('company/delete/by_selection', "hrm\CompanyController@delete_by_selection");

    // ------------------------------- departments --------------------------\\
    // --------------------------------------------------------------------\\
    Route::resource('departments', 'hrm\DepartmentsController');
    Route::get('get_all_departments', "hrm\DepartmentsController@Get_all_Departments");
    Route::get('get_departments_by_company', "hrm\DepartmentsController@Get_departments_by_company")->name('Get_departments_by_company');
    Route::post('departments/delete/by_selection', "hrm\DepartmentsController@delete_by_selection");

    // ------------------------------- designations --------------------------\\
    // --------------------------------------------------------------------\\
    Route::resource('designations', 'hrm\DesignationsController');
    Route::get('get_designations_by_department', "hrm\DesignationsController@Get_designations_by_department");
    Route::post('designations/delete/by_selection', "hrm\DesignationsController@delete_by_selection");

    // ------------------------------- office_shift ------------------\\
    // ----------------------------------------------------------------\\

    Route::resource('office_shift', 'hrm\OfficeShiftController');
    Route::post('office_shift/delete/by_selection', "hrm\OfficeShiftController@delete_by_selection");

    // ------------------------------- Attendances ------------------------\\
    // --------------------------------------------------------------------\\
    Route::resource('attendances', 'hrm\AttendancesController');
    Route::get('daily_attendance', "hrm\AttendancesController@daily_attendance")->name('daily_attendance');
    // Route ខាងក្រោមត្រូវបាន comment ព្រោះ Controller មិនមាន
    // Route::post('attendance_by_employee/{id}', 'hrm\EmployeeSessionController@attendance_by_employee')->name('attendance_by_employee.post');
    Route::post('attendances/delete/by_selection', "hrm\AttendancesController@delete_by_selection");

    // ------------------------------- Request leave  -----------------------\\
    // ----------------------------------------------------------------\\

    Route::resource('leave', 'hrm\LeaveController');
    Route::resource('leave_type', 'hrm\LeaveTypeController');
    Route::post('leave/delete/by_selection', "hrm\LeaveController@delete_by_selection");
    Route::post('leave_type/delete/by_selection', "hrm\LeaveTypeController@delete_by_selection");

    // ------------------------------- holiday ----------------------\\
    // ----------------------------------------------------------------\\

    Route::resource('holiday', 'hrm\HolidayController');
    Route::post('holiday/delete/by_selection', "hrm\HolidayController@delete_by_selection");

    // ------------------------------- payroll ----------------------\\
    // ----------------------------------------------------------------\\

    Route::resource('payroll', 'hrm\PayrollController');

    // ------------------------------- core --------------------------\\
    // --------------------------------------------------------------------\\

    Route::prefix('core')->group(function () {

        Route::get('get_departments_by_company', "hrm\CoreController@Get_departments_by_company");
        Route::get('get_designations_by_department', "hrm\CoreController@Get_designations_by_department");
        Route::get('get_office_shift_by_company', "hrm\CoreController@Get_office_shift_by_company");
        Route::get('get_employees_by_company', "hrm\CoreController@Get_employees_by_company");

    });

    // ------------------------------- CLIENTS --------------------------\\
    // ------------------------------------------------------------------\\

    Route::resource('clients', 'ClientController');
    Route::post('customers/import', 'ClientController@import');
    Route::get('get_clients_without_paginate', 'ClientController@Get_Clients_Without_Paginate');
    Route::post('clients/delete/by_selection', 'ClientController@delete_by_selection');
    Route::post('clients_pay_due', 'ClientController@clients_pay_due');
    Route::post('clients_pay_return_due', 'ClientController@pay_sale_return_due');
    Route::get('get_client_store_data/{id}', 'ClientController@get_client_store_data');
    Route::get('get_points_client/{id}', 'ClientController@getPoints');
    Route::post('customers/{id}/update-points', 'ClientController@updatePoints');

    // Customer Ledger (separate endpoints)
    Route::get('/sales_client', 'ClientController@salesByClient');
    Route::get('/payments_client', 'ClientController@paymentsByClient');
    Route::get('/quotations_client', 'ClientController@quotationsByClient');
    Route::get('/returns_client', 'ClientController@returnsByClient');
    Route::get('/payment_returns_client', 'ClientController@paymentReturnsByClient');

    // Basic client info for header (optional but recommended)
    Route::get('clients/{id}/brief', 'ClientController@clientBrief');
    Route::get('/client_ledger_pdf', 'ClientController@export');

    // ------------------------------- CLIENTS Ecommerce--------------------------\\
    // ------------------------------------------------------------------\\

    Route::resource('clients_without_ecommerce', 'ClientsEcommerceController');
    Route::get('ecommerce_clients', 'ClientsEcommerceController@accounts');
    Route::put('ecommerce_clients/{id}', 'ClientsEcommerceController@updateAccount');
    Route::delete('ecommerce_clients/{id}', 'ClientsEcommerceController@destroyAccount');
    // ------------------------------- Providers --------------------------\\
    // --------------------------------------------------------------------\\

    Route::resource('providers', 'ProvidersController');
    Route::post('suppliers/import', 'ProvidersController@import');

    Route::post('providers/delete/by_selection', 'ProvidersController@delete_by_selection');
    Route::post('pay_supplier_due', 'ProvidersController@pay_supplier_due');
    Route::post('pay_purchase_return_due', 'ProvidersController@pay_purchase_return_due');

    // ------------------------------- Custom Fields --------------------------\\
    // --------------------------------------------------------------------\\

    // Specific routes must come before resource route to avoid conflicts
    Route::get('custom-field-values', 'CustomFieldController@getValues');
    Route::post('custom-field-values', 'CustomFieldController@saveValues');
    Route::resource('custom-fields', 'CustomFieldController');

    // ---------------------- POS (point of sales) ----------------------\\
    // ------------------------------------------------------------------\\

    Route::post('pos/create_pos', 'PosController@CreatePOS');
    Route::get('pos/get_products_pos', 'PosController@GetProductsByParametre');
    Route::get('pos/data_create_pos', 'PosController@GetELementPos');

    // ----------------------Draft -------------------------------------\\
    // ------------------------------------------------------------------\\
    Route::post('pos/create_draft', 'PosController@CreateDraft');
    Route::get('get_draft_sales', 'PosController@get_draft_sales');
    Route::delete('remove_draft_sale/{id}', 'PosController@remove_draft_sale');
    Route::get('pos/data_draft_convert_sale/{id}', 'PosController@data_draft_convert_sale');
    Route::post('pos/submit_sale_from_draft', 'PosController@submit_sale_from_draft');

    // ---------------------- Cash Registers (optional module) ----------------------\\
    // Fully additive; no changes to existing tables or logic
    Route::post('cash-registers/open', 'CashRegisterController@openRegister');
    Route::post('cash-registers/close', 'CashRegisterController@closeRegister');
    Route::get('cash-registers/current/{user_id}', 'CashRegisterController@getCurrentRegister');
    Route::post('cash-registers/cash-move', 'CashRegisterController@cashInOut');
    Route::get('report/cash_registers', 'CashRegisterController@report');
    Route::get('report/warranty_guarantee', 'ReportController@warrantyGuaranteeReport');

    // ------------------------------- Project -----------------------\\
    // ----------------------------------------------------------------\\

    Route::resource('projects', 'ProjectController');

    Route::post('projects/delete/by_selection', 'ProjectController@delete_by_selection');
    Route::post('project_discussions', 'ProjectController@Create_project_discussions');
    Route::delete('project_discussions/{id}', 'ProjectController@destroy_project_discussion');

    Route::post('project_issues', 'ProjectController@Create_project_issues');
    Route::put('project_issues/{id}', 'ProjectController@Update_project_issues');
    Route::delete('project_issues/{id}', 'ProjectController@destroy_project_issues');

    Route::post('project_documents', 'ProjectController@Create_project_documents');
    Route::delete('project_documents/{id}', 'ProjectController@destroy_project_documents');

    // ------------------------------- Task -----------------------\\
    // ----------------------------------------------------------------\\

    Route::resource('tasks', 'TaskController');
    Route::put('update_task_status/{id}', 'TaskController@update_task_status');

    Route::post('tasks/delete/by_selection', 'TaskController@delete_by_selection');
    Route::get('tasks_kanban', 'TaskController@tasks_kanban')->name('tasks_kanban');
    Route::post('task_change_status', 'TaskController@task_change_status')->name('task_change_status');

    Route::post('task_discussions', 'TaskController@Create_task_discussions');
    Route::delete('task_discussions/{id}', 'TaskController@destroy_task_discussion');

    Route::post('task_documents', 'TaskController@Create_task_documents');
    Route::delete('task_documents/{id}', 'TaskController@destroy_task_documents');

    // ------------------------------- Bookings (simple) -----------------------\\
    // ------------------------------------------------------------------------\\
    Route::get('bookings', 'BookingController@index');
    Route::post('bookings', 'BookingController@store');
    Route::get('bookings/create', 'BookingController@create');
    Route::get('bookings/{id}', 'BookingController@show');
    Route::get('bookings/{id}/edit', 'BookingController@edit');
    Route::put('bookings/{id}', 'BookingController@update');
    Route::delete('bookings/{id}', 'BookingController@destroy');
    Route::put('bookings/{id}/status', 'BookingController@changeStatus');
    Route::post('bookings_send_email', 'BookingController@Send_Email');

    // ------------------------------- Assets --------------------------\\
    // ------------------------------------------------------------------\\

    Route::resource('assets', 'AssetController');
    Route::post('assets/delete/by_selection', 'AssetController@delete_by_selection');
    Route::get('assets_warehouses', 'AssetController@warehouses');

    // ------------------------------- Assets Category --------------------------\\
    // ------------------------------------------------------------------\\
    Route::resource('assets_category', 'CategoryAssetController');

    // ------------------------------- PRODUCTS --------------------------\\
    // ------------------------------------------------------------------\\

    Route::resource('products', 'ProductsController');
    Route::post('products/{id}/duplicate', 'ProductsController@duplicate');
    Route::post('products/import/single', 'ProductsController@import_single_products')->middleware('auth:api');
    Route::post('products/import/variants', 'ProductsController@import_variant_products')->middleware('auth:api');
    Route::post('products/import/service', 'ProductsController@import_service_products')->middleware('auth:api');
    Route::post('products/import/update-only', 'ProductsController@import_update_only')->middleware('auth:api');

    Route::get('get_Products_by_warehouse/{id}', 'ProductsController@Products_by_Warehouse');
    Route::get('get_product_detail_api/{id}', 'ProductsController@Get_Products_Details');
    Route::get('get_products_stock_alerts', 'ProductsController@Products_Alert');
    Route::get('barcode_create_page', 'ProductsController@Get_element_barcode');
    Route::post('products/delete/by_selection', 'ProductsController@delete_by_selection');
    Route::get('show_product_data/{id}/{variant_id}', 'ProductsController@show_product_data');
    Route::get('show_product_data/{id}/{variant_id}/{warehouse_id}', 'ProductsController@show_product_data');
    Route::get('get_products_materiels', 'ProductsController@get_products_materiels')->name('get_products_materiels');

    Route::get('opening-stock/import/meta', 'ProductsController@opening_stock_meta');
    Route::post('opening-stock/import/single', 'ProductsController@opening_stock_import_single');
    Route::post('opening-stock/import/variants', 'ProductsController@opening_stock_import_variants');

    // ---- count stock ----------
    Route::get('count_stock', 'ProductsController@count_stock_list');
    Route::post('store_count_stock', 'ProductsController@store_count_stock');

    // ------------------------------- Category --------------------------\\
    // ------------------------------------------------------------------\\

    Route::resource('categories', 'CategorieController');
    Route::post('categories/delete/by_selection', 'CategorieController@delete_by_selection');

    // Product Subcategories
    Route::resource('subcategories', 'SubCategoryController');
    Route::post('subcategories/delete/by_selection', 'SubCategoryController@delete_by_selection');
    Route::get('subcategories/by-category/{category_id}', 'SubCategoryController@getByCategory');

    // ------------------------------- Units --------------------------\\
    // ------------------------------------------------------------------\\

    Route::resource('units', 'UnitsController');
    Route::get('get_sub_units_by_base', 'UnitsController@Get_Units_SubBase');
    Route::get('get_units', 'UnitsController@Get_sales_units');

    // ------------------------------- Brands--------------------------\\
    // ------------------------------------------------------------------\\
    Route::resource('brands', 'BrandsController');
    Route::post('brands/delete/by_selection', 'BrandsController@delete_by_selection');

    // ------------------------------- Currencies --------------------------\\
    // ------------------------------------------------------------------\\

    Route::resource('currencies', 'CurrencyController');
    Route::post('currencies/delete/by_selection', 'CurrencyController@delete_by_selection');

    // ------------------------------- WAREHOUSES --------------------------\\

    Route::resource('warehouses', 'WarehouseController');
    Route::post('warehouses/delete/by_selection', 'WarehouseController@delete_by_selection');

    // ------------------------------- PURCHASES --------------------------\\
    // ------------------------------------------------------------------\\

    Route::resource('purchases', 'PurchasesController');
    Route::get('purchases/{id}/barcodes', 'PurchasesController@get_barcode_products');
    Route::get('get_payments_by_purchase/{id}', 'PurchasesController@Get_Payments');
    Route::post('purchase_send_email', 'PurchasesController@Send_Email');
    Route::post('purchase_send_sms', 'PurchasesController@Send_SMS');
    Route::post('purchases_delete_by_selection', 'PurchasesController@delete_by_selection');
    Route::get('get_Products_by_purchase/{id}', 'PurchasesController@get_Products_by_purchase');
    Route::post('purchase_send_whatsapp', 'PurchasesController@purchase_send_whatsapp');

    Route::get('get_import_purchases', 'PurchasesController@get_import_purchases');
    Route::post('store_import_purchases', 'PurchasesController@store_import_purchases');

    // ------------------------------- Purchase Documents --------------------------\\
    Route::get('purchases/{id}/documents', 'PurchasesController@getDocuments');
    Route::post('purchases/{id}/documents', 'PurchasesController@uploadDocuments');
    Route::get('purchases/documents/{id}/download', 'PurchasesController@downloadDocument');
    Route::delete('purchases/documents/{id}', 'PurchasesController@deleteDocument');

    // ------------------------------- Payments  Purchases --------------------------\\
    // ------------------------------------------------------------------------------\\

    Route::resource('payment_purchase', 'PaymentPurchasesController');
    Route::get('payment_purchase_get_number', 'PaymentPurchasesController@getNumberOrder');
    Route::post('payment_purchase_send_email', 'PaymentPurchasesController@SendEmail');
    Route::post('payment_purchase_send_sms', 'PaymentPurchasesController@Send_SMS');

    // -------------------------------  Sales --------------------------\\
    // ------------------------------------------------------------------\\

    Route::resource('sales', 'SalesController');
    Route::get('get_import_sales', 'SalesController@get_import_sales');
    Route::post('store_import_sales', 'SalesController@store_import_sales');
    Route::get('convert_to_sale_data/{id}', 'SalesController@Elemens_Change_To_Sale');
    Route::get('get_payments_by_sale/{id}', 'SalesController@Payments_Sale');
    Route::post('sales_send_email', 'SalesController@Send_Email');
    Route::post('sales_send_sms', 'SalesController@Send_SMS');
    Route::post('sales_delete_by_selection', 'SalesController@delete_by_selection');
    Route::get('get_Products_by_sale/{id}', 'SalesController@get_Products_by_sale');

    // ------------------------------- Sales Documents --------------------------\\
    Route::get('sales/{id}/documents', 'SalesController@getDocuments');
    Route::post('sales/{id}/documents', 'SalesController@uploadDocuments');
    Route::get('sales/documents/{id}/download', 'SalesController@downloadDocument');
    Route::delete('sales/documents/{id}', 'SalesController@deleteDocument');
    Route::post('sales_send_whatsapp', 'SalesController@sales_send_whatsapp');
    Route::get('get_today_sales', 'SalesController@get_today_sales');

    // -------------------------------  Shipments --------------------------\\
    // ------------------------------------------------------------------\\

    Route::resource('shipments', 'ShipmentController');

    // ------------------------------- Payments  Sales --------------------------\\
    // ------------------------------------------------------------------\\

    Route::resource('payment_sale', 'PaymentSalesController');
    Route::get('payment_sale_get_number', 'PaymentSalesController@getNumberOrder');
    Route::post('payment_sale_send_email', 'PaymentSalesController@SendEmail');
    Route::post('payment_sale_send_sms', 'PaymentSalesController@Send_SMS');

    // ------------------------------- Expenses --------------------------\\
    // ------------------------------------------------------------------\\

    Route::resource('expenses', 'ExpensesController');
    Route::post('expenses_delete_by_selection', 'ExpensesController@delete_by_selection');
    // ------------------------------- Expense Documents --------------------------\\
    Route::get('expenses/{id}/documents', 'ExpensesController@getDocuments');
    Route::post('expenses/{id}/documents', 'ExpensesController@uploadDocuments');
    Route::get('expenses/documents/{id}/download', 'ExpensesController@downloadDocument');
    Route::delete('expenses/documents/{id}', 'ExpensesController@deleteDocument');

    // ------------------------------- Expenses Category--------------------------\\
    // ------------------------------------------------------------------\\

    Route::resource('expenses_category', 'CategoryExpenseController');
    Route::post('expenses_category_delete_by_selection', 'CategoryExpenseController@delete_by_selection');

    // ------------------------------- Accounts --------------------------\\
    // ------------------------------------------------------------------\\

    Route::resource('accounts', 'AccountController');
    Route::post('accounts_delete_by_selection', 'AccountController@delete_by_selection');

    // ------------------------------- TransferMoneyController --------------------------\\
    // ------------------------------------------------------------------\\

    Route::resource('transfer_money', 'TransferMoneyController');

    // ------------------------------- Deposits --------------------------\\
    // ------------------------------------------------------------------\\

    Route::resource('deposits', 'DepositsController');
    Route::post('deposits_delete_by_selection', 'DepositsController@delete_by_selection');

    // ------------------------------- deposits Category--------------------------\\
    // ------------------------------------------------------------------\\

    Route::resource('deposits_category', 'CategoryDepositController');
    Route::post('deposits_category_delete_by_selection', 'CategoryDepositController@delete_by_selection');

    // ------------------------------- Quotations --------------------------\\
    // ------------------------------------------------------------------\\
    Route::resource('quotations', 'QuotationsController');
    Route::post('quotations_send_email', 'QuotationsController@SendEmail');
    Route::post('quotations_send_sms', 'QuotationsController@Send_SMS');
    Route::post('quotations_delete_by_selection', 'QuotationsController@delete_by_selection');
    Route::post('quotation_send_whatsapp', 'QuotationsController@quotation_send_whatsapp');

    // ------------------------------- Sales Return --------------------------\\
    // ------------------------------------------------------------------\\

    Route::resource('returns/sale', 'SalesReturnController');
    Route::post('returns/sale/send/email', 'SalesReturnController@Send_Email');
    Route::post('returns/sale/send/sms', 'SalesReturnController@Send_SMS');
    Route::get('returns/sale/payment/{id}', 'SalesReturnController@Payment_Returns');
    Route::post('returns/sale/delete/by_selection', 'SalesReturnController@delete_by_selection');
    Route::get('returns/sale/create_sell_return/{id}', 'SalesReturnController@create_sell_return');
    Route::get('returns/sale/edit_sell_return/{id}/{sale_id}', 'SalesReturnController@edit_sell_return');

    // ------------------------------- Purchases Return --------------------------\\
    // ------------------------------------------------------------------\\

    Route::resource('returns/purchase', 'PurchasesReturnController');
    Route::post('returns/purchase/send/email', 'PurchasesReturnController@Send_Email');
    Route::post('returns/purchase/send/sms', 'PurchasesReturnController@Send_SMS');
    Route::get('returns/purchase/payment/{id}', 'PurchasesReturnController@Payment_Returns');
    Route::post('returns/purchase/delete/by_selection', 'PurchasesReturnController@delete_by_selection');
    Route::get('returns/purchase/create_purchase_return/{id}', 'PurchasesReturnController@create_purchase_return');
    Route::get('returns/purchase/edit_purchase_return/{id}/{purchase_id}', 'PurchasesReturnController@edit_purchase_return');

    // ------------------------------- Payment Sale Returns --------------------------\\
    // --------------------------------------------------------------------------------\\

    Route::resource('payment/returns_sale', 'PaymentSaleReturnsController');
    Route::get('payment/returns_sale/Number/order', 'PaymentSaleReturnsController@getNumberOrder');
    Route::post('payment/returns_sale/send/email', 'PaymentSaleReturnsController@SendEmail');
    Route::post('payment/returns_sale/send/sms', 'PaymentSaleReturnsController@Send_SMS');

    // ------------------------------- Payments Purchase Returns --------------------------\\
    // ---------------------------------------------------------------------------------------\\

    Route::resource('payment/returns_purchase', 'PaymentPurchaseReturnsController');
    Route::get('payment/returns_purchase/Number/Order', 'PaymentPurchaseReturnsController@getNumberOrder');
    Route::post('payment/returns_purchase/send/email', 'PaymentPurchaseReturnsController@SendEmail');
    Route::post('payment/returns_purchase/send/sms', 'PaymentPurchaseReturnsController@Send_SMS');

    // ------------------------------- Adjustments --------------------------\\
    // ------------------------------------------------------------------\\

    Route::resource('adjustments', 'AdjustmentController');
    Route::get('adjustments/detail/{id}', 'AdjustmentController@Adjustment_detail');
    Route::post('adjustments/delete/by_selection', 'AdjustmentController@delete_by_selection');

    // ------------------------------- Damages --------------------------\\
    // ------------------------------------------------------------------\\

    Route::resource('damages', 'DamageController');
    Route::get('damages/detail/{id}', 'DamageController@Damage_detail');
    Route::post('damages/delete/by_selection', 'DamageController@delete_by_selection');

    // ------------------------------- Transfers --------------------------\\
    // --------------------------------------------------------------------\\
    Route::resource('transfers', 'TransferController');
    Route::post('transfers/delete/by_selection', 'TransferController@delete_by_selection');
    Route::post('transfers/{id}/approve', 'TransferController@approve');
    Route::post('transfers/{id}/reject', 'TransferController@reject');

    // ------------------------------- Users --------------------------\\
    // ------------------------------------------------------------------\\

    Route::get('get_user_auth', 'UserController@GetUserAuth');
    Route::resource('users', 'UserController');
    Route::post('users/{id}/reset-edit-limit', 'UserController@resetEditLimit');
    Route::post('users/{id}/lock', 'UserController@lock');
    Route::post('users/{id}/unlock', 'UserController@unlock');
    Route::put('users_switch_activated/{id}', 'UserController@IsActivated');
    Route::get('Get_user_profile', 'UserController@GetInfoProfile');
    Route::put('update_user_profile/{id}', 'UserController@updateProfile');

    // ------------------------------- Permission Groups user -----------\\
    // ------------------------------------------------------------------\\

    Route::resource('roles', 'PermissionsController');
    Route::resource('roles/check/create_page', 'PermissionsController@Check_Create_Page');
    Route::post('roles/delete/by_selection', 'PermissionsController@delete_by_selection');

    // ------------------------------- Settings ------------------------\\
    // ------------------------------------------------------------------\\
    Route::get('settings/dark-mode', 'SettingsController@getDarkMode');
    Route::put('settings/dark-mode', 'SettingsController@updateDarkMode');
    Route::get('settings/firebase_status', 'MobileNotificationController@getFirebaseStatus');
    Route::post('settings/firebase_credentials', 'MobileNotificationController@updateFirebaseCredentials');
    Route::resource('settings', 'SettingsController');
    Route::get('get_Settings_data_api', 'SettingsController@get_Settings_data_api');
    Route::post('send_mobile_notification', 'MobileNotificationController@sendNotification');
    Route::get('get_Settings_data', 'SettingsController@getSettings');
    // Dedicated Dark Mode endpoints (independent from other settings APIs)
    Route::put('pos_settings/{id}', 'SettingsController@update_pos_settings');
    Route::get('get_pos_Settings', 'SettingsController@get_pos_Settings');
    Route::get('get_pos_Settings_api', 'SettingsController@get_pos_Settings_api');

    // ------------------------------- Security Settings (additive) ------------------------\\
    // Active login sessions (Passport tokens) + logout endpoints
    Route::get('security/sessions', 'SecuritySettingsController@sessions');
    Route::delete('security/sessions/{tokenId}', 'SecuritySettingsController@logoutSession');
    Route::post('security/sessions/logout-other', 'SecuritySettingsController@logoutAllOtherDevices');
    Route::get('security/login-activity-report', 'SecuritySettingsController@loginActivityReport');

    // ------------------------------- appearance_settings ------------------------\\
    // ------------------------------------------------------------------\\

    Route::get('get_appearance_settings', 'SettingsController@get_appearance_settings');
    Route::put('update_appearance_settings/{id}', 'SettingsController@update_appearance_settings');

    // ------------------------------- Profile Password ------------------------\\
    Route::post('update_user_password', 'UserController@updatePassword');

    // ------------------------------- Mail Settings ------------------------\\

    Route::put('update_config_mail/{id}', 'MailSettingsController@update_config_mail');
    Route::get('get_config_mail', 'MailSettingsController@get_config_mail');
    Route::post('test_config_mail', 'MailSettingsController@test_config_mail');

    // ------------------------------- SMS Settings ------------------------\\

    Route::get('get_sms_config', 'Sms_SettingsController@get_sms_config');
    Route::get('get_sms_config_ws', 'Sms_SettingsController@get_sms_config_ws');
    Route::post('update_twilio_config', 'Sms_SettingsController@update_twilio_config');
    Route::post('update_nexmo_config', 'Sms_SettingsController@update_nexmo_config');
    Route::post('update_infobip_config', 'Sms_SettingsController@update_infobip_config');
    Route::post('update_termi_config', 'Sms_SettingsController@update_termi_config');

    Route::put('update_Default_SMS', 'Sms_SettingsController@update_Default_SMS');

    // notifications_template
    Route::get('get_sms_template', 'Notifications_Template@get_sms_template');
    Route::put('update_sms_body', 'Notifications_Template@update_sms_body');

    Route::get('get_emails_template', 'Notifications_Template@get_emails_template');
    Route::put('update_custom_email', 'Notifications_Template@update_custom_email');

    // ------------------------------- Payment_gateway Settings ------------------------\\

    Route::post('payment_gateway', 'Payment_gateway_SettingsController@Update_payment_gateway');
    Route::get('get_payment_gateway', 'Payment_gateway_SettingsController@Get_payment_gateway');
    Route::get('get_payment_gateway_ws', 'Payment_gateway_SettingsController@get_payment_gateway_ws');

    // ------------------------------- Update Settings ------------------------\\

    Route::get('get_version_info', 'UpdateController@get_version_info');
    Route::post('one_click_update', 'AutoUpdateController@oneClickUpdate');
    Route::get('update/preflight', 'AutoUpdateController@preflight');
    Route::get('update/progress', 'AutoUpdateController@progress');

    // ------------------------------- Backup --------------------------\\
    // ------------------------------------------------------------------\\

    Route::get('get_backup', 'BackupController@Get_Backup');
    Route::get('generate_new_backup', 'BackupController@Generate_Backup');
    Route::delete('delete_backup/{name}', 'BackupController@Delete_Backup');

    // ------------------------------- Module Settings ------------------------\\

    Route::get('get_modules_info', 'ModuleSettingsController@get_modules_info');
    Route::post('update_status_module', 'ModuleSettingsController@update_status_module');
    Route::post('upload_module', 'ModuleSettingsController@upload_module');

    // ---------------- WooCommerce Sync (optional module) ----------------
    Route::get('woocommerce/settings', 'WooCommerceSyncController@getSettings');
    Route::post('woocommerce/settings', 'WooCommerceSyncController@saveSettings');
    Route::post('woocommerce/test-connection', 'WooCommerceSyncController@connectStore');
    Route::post('woocommerce/sync/products', 'WooCommerceSyncController@syncProducts');
    Route::post('woocommerce/sync/stock', 'WooCommerceSyncController@syncStock');
    // Stop/cancel running sync jobs (UI calls this)
    Route::post('woocommerce/sync/products/stop', 'WooCommerceSyncController@stopProductsSync');
    Route::post('woocommerce/sync/stock/stop', 'WooCommerceSyncController@stopStockSync');
    // DB-based sync progress endpoints
    Route::get('sync/status/{id}', 'SyncJobController@status');
    Route::post('sync/{id}/cancel', 'SyncJobController@cancel');
    // Aliases (requested): /api/woo-sync/*
    Route::get('woo-sync/latest', 'SyncJobController@latest');
    Route::get('woo-sync/status/{id}', 'SyncJobController@status');
    Route::post('woo-sync/{id}/cancel', 'SyncJobController@cancel');
    // Aliases with hyphen for convenience
    Route::post('woocommerce/sync-stock', 'WooCommerceSyncController@syncStock');
    Route::get('woocommerce/sync/products/progress', 'WooCommerceSyncController@syncProductsProgress');
    Route::get('woocommerce/sync-products/progress', 'WooCommerceSyncController@syncProductsProgress');
    Route::get('woocommerce/sync/stock/progress', 'WooCommerceSyncController@syncStockProgress');
    Route::get('woocommerce/sync-stock/progress', 'WooCommerceSyncController@syncStockProgress');
    Route::get('woocommerce/stock-metrics', 'WooCommerceSyncController@stockMetrics');
    Route::post('woocommerce/sync/orders', 'WooCommerceSyncController@syncOrders');
    Route::get('woocommerce/orders', 'WooCommerceSyncController@getWooCommerceOrders');
    Route::get('woocommerce/orders/imported', 'WooCommerceSyncController@getImportedWooOrders');
    Route::get('woocommerce/orders/imported/stats', 'WooCommerceSyncController@getImportedWooOrdersStats');
    Route::post('woocommerce/sync/categories', 'WooCommerceSyncController@syncCategories');
    Route::post('woocommerce/sync/brands', 'WooCommerceSyncController@syncBrands');
    Route::get('woocommerce/brands/unsynced-count', 'WooCommerceSyncController@unsyncedBrandsCount');
    Route::post('woocommerce/reset-brands-sync', 'WooCommerceSyncController@resetBrandsSync');
    // Categories mapping (POS <-> Woo) and logs management
    Route::post('woocommerce/categories/map', 'WooCommerceSyncController@mapCategories');
    Route::delete('woocommerce/logs', 'WooCommerceSyncController@clearLogs');
    // Logs & metrics
    Route::get('woocommerce/logs', 'WooCommerceSyncController@logs');
    Route::get('woocommerce/unsynced-count', 'WooCommerceSyncController@unsyncedCount');
    Route::get('woocommerce/products/pull-stats', 'WooCommerceSyncController@getProductsPullStats');
    Route::get('woocommerce/categories/pull-stats', 'WooCommerceSyncController@getCategoriesPullStats');
    Route::get('woocommerce/brands/pull-stats', 'WooCommerceSyncController@getBrandsPullStats');
    Route::get('woocommerce/categories/unsynced-count', 'WooCommerceSyncController@unsyncedCategoriesCount');
    Route::get('woocommerce/customers/unsynced-count', 'WooCommerceSyncController@unsyncedCustomersCount');
    Route::get('woocommerce/customers/stats', 'WooCommerceSyncController@getCustomersStats');
    Route::get('woocommerce/customers', 'WooCommerceSyncController@getWooCommerceCustomers');
    Route::get('woocommerce/customers/sync-issues', 'WooCommerceSyncController@getCustomerSyncIssues');
    Route::post('woocommerce/customers/sync-issues/{id}/resolve', 'WooCommerceSyncController@resolveCustomerSyncIssue');
    Route::post('woocommerce/customers/sync-issues/{id}/link', 'WooCommerceSyncController@manualLinkCustomerSyncIssue');

    Route::post('woocommerce/sync/orders', 'WooCommerceSyncController@syncOrders');
    Route::post('woocommerce/sync/customers', 'WooCommerceSyncController@syncCustomers');
    Route::post('woocommerce/reset-customers-sync', 'WooCommerceSyncController@resetCustomersSync');
    Route::post('woocommerce/reset-sync', 'WooCommerceSyncController@resetSync');
    Route::post('woocommerce/reset-products-sync', 'WooCommerceSyncController@resetProductsSync');
    Route::post('woocommerce/reset-categories-sync', 'WooCommerceSyncController@resetCategoriesSync');
    Route::post('woocommerce/products/fix-categories', 'WooCommerceSyncController@fixProductCategories');
    Route::post('woocommerce/reset-stock-sync', 'WooCommerceSyncController@resetStockSync');

    // Customer Display: secure token generation
    Route::post('customer-display/generate', [CustomerDisplayController::class, 'generate']);

    // ------------------------------- QuickBooks Integration ------------------------\\
    // ------------------------------------------------------------------\\
    Route::get('quickbooks/status', 'QuickBooksController@status');
    Route::post('quickbooks/disconnect', 'QuickBooksController@disconnect');
    Route::get('quickbooks/settings', 'QuickBooksController@quickbookgetSettings');
    Route::post('quickbooks/settings', 'QuickBooksController@saveSettings');
    Route::get('quickbooks/audits', 'QuickBooksController@audits');
    Route::get('quickbooks/clients-stats', 'QuickBooksController@clientsStats');
    Route::get('quickbooks/clients-unsynced', 'QuickBooksController@clientsUnsynced');
    Route::post('quickbooks/sync-clients', 'QuickBooksController@syncClients');

});

// Mobile App Custom Auth Routes - REMOVED (use existing auth:api routes instead)

// NEW FEATURE - SAFE ADDITION: Accounting V2 (isolated routes)
Route::middleware(['auth:api', 'Is_Active', 'request.safety'])->group(function () {
    Route::prefix('accounting/v2')->group(function () {
        // Dashboard
        Route::get('dashboard', 'AccountingV2\\DashboardController@summary');
        // Chart of Accounts
        Route::get('coa', 'AccountingV2\\ChartOfAccountsController@index');
        Route::post('coa', 'AccountingV2\\ChartOfAccountsController@store');
        Route::put('coa/{id}', 'AccountingV2\\ChartOfAccountsController@update');
        Route::delete('coa/{id}', 'AccountingV2\\ChartOfAccountsController@destroy');

        // Journal Entries
        Route::get('journal-entries', 'AccountingV2\\JournalEntriesController@index');
        Route::get('journal-entries/{id}', 'AccountingV2\\JournalEntriesController@show');
        Route::post('journal-entries', 'AccountingV2\\JournalEntriesController@store');
        Route::post('journal-entries/{id}/post', 'AccountingV2\\JournalEntriesController@post');
        Route::put('journal-entries/{id}', 'AccountingV2\\JournalEntriesController@update');
        Route::patch('journal-entries/{id}', 'AccountingV2\\JournalEntriesController@update');
        Route::delete('journal-entries/{id}', 'AccountingV2\\JournalEntriesController@destroy');

        // Reports
        Route::get('reports/trial-balance', 'AccountingV2\\ReportsController@trialBalance');
        Route::get('reports/profit-loss', 'AccountingV2\\ReportsController@profitAndLoss');
        Route::get('reports/balance-sheet', 'AccountingV2\\ReportsController@balanceSheet');
        Route::get('reports/tax-summary', 'AccountingV2\\ReportsController@taxSummary');
    });
});

// Public minimal endpoints for customer display (no auth)
Route::post('pos/customer-display/broadcast', [CustomerDisplayController::class, 'broadcastCart']);
Route::get('pos/customer-display/last-cart', [CustomerDisplayController::class, 'lastCart']);

// -------------------------------  Print & PDF ------------------------\\
// ------------------------------------------------------------------\\

Route::get('sale_pdf/{id}', 'SalesController@Sale_PDF');
Route::get('sale_print_html/{id}', 'SalesController@Sale_PDF_Inline');
Route::get('quote_pdf/{id}', 'QuotationsController@Quotation_pdf');
Route::get('quote_print_html/{id}', 'QuotationsController@Quotation_PDF_Inline');
Route::get('booking_pdf/{id}', 'BookingController@booking_pdf');
Route::get('service_job_pdf/{id}', 'ServiceJobController@service_job_pdf');
Route::get('purchase_pdf/{id}', 'PurchasesController@Purchase_pdf');
Route::get('purchase_print_html/{id}', 'PurchasesController@Purchase_PDF_Inline');
Route::get('return_sale_pdf/{id}', 'SalesReturnController@Return_pdf');
Route::get('return_purchase_pdf/{id}', 'PurchasesReturnController@Return_pdf');
Route::get('payment_purchase_pdf/{id}', 'PaymentPurchasesController@Payment_purchase_pdf');
Route::get('payment_return_sale_pdf/{id}', 'PaymentSaleReturnsController@payment_return');
Route::get('payment_return_purchase_pdf/{id}', 'PaymentPurchaseReturnsController@payment_return');
Route::get('payment_sale_pdf/{id}', 'PaymentSalesController@payment_sale');
Route::get('sales_print_invoice/{id}', 'SalesController@Print_Invoice_POS');
Route::get('transfer_pdf/{id}', 'TransferController@transfer_pdf');
Route::get('adjustment_pdf/{id}', 'AdjustmentController@adjustment_pdf');
Route::get('damage_pdf/{id}', 'DamageController@damage_pdf');

// Route::get('/available-modules', 'ModuleSettingsController@get_modules_enabled');

// ===============================================================
// Seller App API Routes (For Flutter Mobile App)
// ===============================================================

// Auth API
Route::post('/auth/login', 'Api\AuthApiController@login');
Route::post('/auth/delivery/login', 'Api\AuthApiController@deliveryLogin');
Route::post('/auth/logout', 'Api\AuthApiController@logout');
Route::get('/auth/check', 'Api\AuthApiController@check');
Route::get('/auth/delivery/check', 'Api\AuthApiController@deliveryCheck');

// Profile API
Route::get('/profile', 'Api\ProfileApiController@show');
Route::put('/profile', 'Api\ProfileApiController@update');
Route::post('/profile/change-password', 'Api\ProfileApiController@changePassword');
Route::get('/profile/edit-history', 'Api\ProfileApiController@editHistory');
Route::post('/profile/upload-photo', 'Api\ProfileApiController@uploadPhoto');

// Settings API - Get tax rate and other settings
Route::get('/settings', function () {
    try {
        $settings = \DB::table('settings')->first();

        return response()->json([
            'success' => true,
            'data' => [
                'default_tax' => (float) ($settings->default_tax ?? 0),
                'company_name' => $settings->CompanyName ?? '',
                'company_phone' => $settings->CompanyPhone ?? '',
                'currency_id' => (int) ($settings->currency_id ?? 1),
            ],
        ], 200);
    } catch (\Exception $e) {
        return response()->json([
            'success' => false,
            'message' => $e->getMessage(),
        ], 500);
    }
});

// Orders API - Create and list orders
Route::get('/orders', function (\Illuminate\Http\Request $request) {
    try {
        $applyShippingStatusFilter = function ($query, string $status) {
            $normalizedStatus = strtolower(trim($status));

            if ($normalizedStatus === 'pending') {
                return $query->where(function ($pendingQuery) {
                    $pendingQuery->whereNull('shipping_status')
                        ->orWhere('shipping_status', '')
                        ->orWhere('shipping_status', 'pending');
                });
            }

            if (in_array($normalizedStatus, ['processing', 'shipped'], true)) {
                return $query->whereIn('shipping_status', ['processing', 'shipped']);
            }

            return $query->where('shipping_status', $normalizedStatus);
        };

        $normalizeShippingStatus = function ($status) {
            $normalizedStatus = strtolower(trim((string) $status));

            if ($normalizedStatus === '' || $normalizedStatus === 'pending') {
                return 'pending';
            }

            if ($normalizedStatus === 'processing') {
                return 'shipped';
            }

            return $normalizedStatus;
        };

        $query = \App\Models\Sale::with('client', 'warehouse', 'user')
            ->orderBy('created_at', 'desc')
            ->limit(100);

        // Filter by user_id if provided (for mobile app)
        if ($request->has('user_id')) {
            $query->where('user_id', $request->user_id);
        }

        if ($request->filled('shipping_status')) {
            $applyShippingStatusFilter($query, (string) $request->shipping_status);
        } elseif ($request->filled('status')) {
            $requestedStatus = strtolower(trim((string) $request->status));

            if (in_array($requestedStatus, ['pending', 'processing', 'shipped', 'delivered', 'cancelled'], true)) {
                $applyShippingStatusFilter($query, $requestedStatus);
            } else {
                $query->where('statut', $request->status);
            }
        }

        if ($request->has('payment_status')) {
            $query->where('payment_statut', $request->payment_status);
        }

        $orders = $query->get()->map(function ($order) use ($normalizeShippingStatus) {
            $shippingStatus = $normalizeShippingStatus($order->shipping_status);

            return [
                'id' => (string) $order->id,
                'Ref' => $order->Ref,
                'date' => $order->date,
                'datetime' => $order->created_at?->format('Y-m-d H:i:s'),
                'client_name' => $order->client?->name ?? 'Walk-in Customer',
                'client_phone' => $order->client?->phone ?? '',
                'client_address' => $order->client?->adresse ?? '',
                'warehouse_name' => $order->warehouse?->name ?? '',
                'user_name' => $order->user?->name ?? '',
                'GrandTotal' => (float) $order->GrandTotal,
                'paid_amount' => (float) ($order->paid_amount ?? 0),
                'payment_method' => $order->payment_method ?? 'cash',
                'payment_status' => $order->payment_statut ?? 'unpaid',
                'status' => $order->statut ?? 'completed',
                'shipping_status' => $shippingStatus,
                'notes' => $order->notes ?? '',
                'created_at' => $order->created_at?->toIso8601String(),
                'updated_at' => $order->updated_at?->toIso8601String(),
            ];
        });

        return response()->json(['success' => true, 'data' => $orders], 200);
    } catch (\Exception $e) {
        return response()->json(['success' => false, 'message' => $e->getMessage()], 500);
    }
});

// Customers API - List customers for selection
Route::get('/customers', function (\Illuminate\Http\Request $request) {
    try {
        $query = \App\Models\Client::orderBy('name', 'asc')
            ->whereNull('deleted_at')
            ->limit(100);

        if ($request->has('search')) {
            $search = $request->search;
            $query->where(function ($q) use ($search) {
                $q->where('name', 'like', "%{$search}%")
                    ->orWhere('phone', 'like', "%{$search}%")
                    ->orWhere('email', 'like', "%{$search}%");
            });
        }

        $customers = $query->get()->map(function ($customer) {
            return [
                'id' => (int) $customer->id,
                'name' => $customer->name ?? '',
                'phone' => $customer->phone ?? '',
                'email' => $customer->email ?? '',
                'address' => $customer->adresse ?? '',
            ];
        });

        return response()->json(['success' => true, 'data' => $customers], 200);
    } catch (\Exception $e) {
        return response()->json(['success' => false, 'message' => $e->getMessage()], 500);
    }
});

// Update Order Payment Status
Route::put('/orders/{id}/payment-status', function (\Illuminate\Http\Request $request, $id) {
    try {
        $validated = $request->validate([
            'payment_status' => 'required|string|in:paid,unpaid',
        ]);

        $sale = \App\Models\Sale::findOrFail($id);
        $sale->payment_statut = $validated['payment_status'];

        // If marking as paid, update paid_amount to GrandTotal
        if ($validated['payment_status'] === 'paid') {
            $sale->paid_amount = $sale->GrandTotal;
        }

        $sale->save();

        return response()->json([
            'success' => true,
            'message' => 'Payment status updated successfully',
            'data' => [
                'id' => (string) $sale->id,
                'payment_status' => $sale->payment_statut,
                'paid_amount' => (float) $sale->paid_amount,
            ],
        ], 200);
    } catch (\Illuminate\Validation\ValidationException $e) {
        return response()->json([
            'success' => false,
            'message' => 'Validation error',
            'errors' => $e->errors(),
        ], 422);
    } catch (\Exception $e) {
        return response()->json([
            'success' => false,
            'message' => 'Failed to update payment status: '.$e->getMessage(),
        ], 500);
    }
});

// Mobile Seller Report - No Passport auth required (uses custom base64 token)
Route::get('/report/sales_by_seller_mobile', 'ReportController@sales_by_seller_report');

// Sales Return API for Seller App
Route::get('/seller/sales-returns/sales', 'Api\SalesApiController@sellerReturnableSales');
Route::get('/seller/sales-returns', 'Api\SalesApiController@sellerSalesReturnsIndex');
Route::post('/seller/sales-returns', 'Api\SalesApiController@sellerStoreSalesReturn');

// Dashboard API - Get dashboard data for seller
Route::get('/dashboard/seller', function (\Illuminate\Http\Request $request) {
    try {
        $userId = $request->get('user_id');

        $applyShippingStatusFilter = function ($query, string $status) {
            $normalizedStatus = strtolower(trim($status));

            if ($normalizedStatus === 'pending') {
                return $query->where(function ($pendingQuery) {
                    $pendingQuery->whereNull('shipping_status')
                        ->orWhere('shipping_status', '')
                        ->orWhere('shipping_status', 'pending');
                });
            }

            if (in_array($normalizedStatus, ['processing', 'shipped'], true)) {
                return $query->whereIn('shipping_status', ['processing', 'shipped']);
            }

            return $query->where('shipping_status', $normalizedStatus);
        };

        $normalizeShippingStatus = function ($status) {
            $normalizedStatus = strtolower(trim((string) $status));

            if ($normalizedStatus === '' || $normalizedStatus === 'pending') {
                return 'pending';
            }

            if ($normalizedStatus === 'processing') {
                return 'shipped';
            }

            return $normalizedStatus;
        };

        // Sales statistics
        $salesQuery = \App\Models\Sale::query();
        if ($userId) {
            $salesQuery->where('user_id', $userId);
        }

        $totalSales = $salesQuery->sum('GrandTotal');
        $todaySales = (clone $salesQuery)->whereDate('created_at', today())->sum('GrandTotal');
        $weekSales = (clone $salesQuery)->whereBetween('created_at', [now()->startOfWeek(), now()->endOfWeek()])->sum('GrandTotal');
        $monthSales = (clone $salesQuery)->whereMonth('created_at', now()->month)->sum('GrandTotal');

        // Orders statistics
        $ordersQuery = \App\Models\Sale::query();
        if ($userId) {
            $ordersQuery->where('user_id', $userId);
        }

        $totalOrders = (clone $ordersQuery)->count();
        $todayOrders = (clone $ordersQuery)->whereDate('created_at', today())->count();
        $pendingOrders = $applyShippingStatusFilter(clone $ordersQuery, 'pending')->count();
        $shippedOrders = $applyShippingStatusFilter(clone $ordersQuery, 'shipped')->count();
        $deliveredOrders = $applyShippingStatusFilter(clone $ordersQuery, 'delivered')->count();
        $completedOrders = (clone $ordersQuery)->where('statut', 'completed')->count();

        $unreadAlerts = 0;
        if ($userId) {
            $unreadAlerts = \App\Models\DeliveryAlert::query()
                ->where('user_id', $userId)
                ->whereNull('read_at')
                ->count();
        }

        // Products statistics
        $totalProducts = \App\Models\Product::where('is_active', 1)->count();

        // Low stock and out of stock need to check product_warehouse table
        $productStocks = \DB::table('product_warehouse')
            ->select('product_id', \DB::raw('SUM(qte) as total_stock'))
            ->whereNull('deleted_at')
            ->groupBy('product_id')
            ->get()
            ->keyBy('product_id');

        $lowStockProducts = 0;
        $outOfStockProducts = 0;

        $activeProducts = \App\Models\Product::where('is_active', 1)->get();
        foreach ($activeProducts as $product) {
            $stock = $productStocks->get($product->id)?->total_stock ?? 0;
            if ($stock == 0) {
                $outOfStockProducts++;
            } elseif ($stock <= ($product->stock_alert ?? 5)) {
                $lowStockProducts++;
            }
        }

        // Recent orders
        $recentOrdersQuery = \App\Models\Sale::with('client', 'warehouse', 'user')
            ->orderBy('created_at', 'desc')
            ->limit(10);
        if ($userId) {
            $recentOrdersQuery->where('user_id', $userId);
        }

        $recentOrders = $recentOrdersQuery->get()->map(function ($order) use ($normalizeShippingStatus) {
            $shippingStatus = $normalizeShippingStatus($order->shipping_status);

            return [
                'id' => (string) $order->id,
                'Ref' => $order->Ref,
                'date' => $order->date,
                'datetime' => $order->created_at?->format('Y-m-d H:i:s'),
                'client_name' => $order->client?->name ?? 'Walk-in Customer',
                'warehouse_name' => $order->warehouse?->name ?? '',
                'GrandTotal' => (float) $order->GrandTotal,
                'paid_amount' => (float) ($order->paid_amount ?? 0),
                'payment_method' => $order->payment_method ?? 'cash',
                'payment_status' => $order->payment_statut ?? 'unpaid',
                'status' => $order->statut ?? 'completed',
                'shipping_status' => $shippingStatus,
                'created_at' => $order->created_at?->toIso8601String(),
            ];
        });

        // Get system/company name from settings
        $settings = \DB::table('settings')->first();
        $systemName = $settings->CompanyName ?? $settings->app_name ?? 'Stocky POS';

        return response()->json([
            'success' => true,
            'data' => [
                'system_name' => $systemName,
                'sales' => [
                    'total' => (float) $totalSales,
                    'today' => (float) $todaySales,
                    'week' => (float) $weekSales,
                    'month' => (float) $monthSales,
                ],
                'orders' => [
                    'total' => $totalOrders,
                    'today' => $todayOrders,
                    'pending' => $pendingOrders,
                    'shipped' => $shippedOrders,
                    'delivered' => $deliveredOrders,
                    'completed' => $completedOrders,
                ],
                'alerts' => [
                    'unread' => $unreadAlerts,
                ],
                'products' => [
                    'total' => $totalProducts,
                    'low_stock' => $lowStockProducts,
                    'out_of_stock' => $outOfStockProducts,
                ],
                'recent_orders' => $recentOrders,
            ],
        ], 200);
    } catch (\Exception $e) {
        return response()->json([
            'success' => false,
            'message' => 'Failed to load dashboard: '.$e->getMessage(),
        ], 500);
    }
});

Route::post('/orders', function (\Illuminate\Http\Request $request) {
    try {
        $validated = $request->validate([
            'customer_name' => 'required|string',
            'customer_phone' => 'required|string',
            'customer_address' => 'required|string',
            'items' => 'required|array|min:1',
            'items.*.product_id' => 'required|integer',
            'items.*.quantity' => 'required|integer|min:1',
            'items.*.price' => 'required|numeric|min:0',
            'payment_method' => 'required|string',
            'payment_status' => 'required|string|in:paid,unpaid',
            'paid_amount' => 'required|numeric|min:0',
            'warehouse_id' => 'required|integer',
            'user_id' => 'nullable|integer',
            // Discount fields (optional)
            'discount_type' => 'nullable|string|in:fixed,percentage',
            'discount_value' => 'nullable|numeric|min:0',
            'discount_amount' => 'nullable|numeric|min:0',
            'subtotal' => 'nullable|numeric|min:0',
            'subtotal_after_discount' => 'nullable|numeric|min:0',
            'tax_amount' => 'nullable|numeric|min:0',
            'grand_total' => 'nullable|numeric|min:0',
            // Shipping field (optional)
            'shipping' => 'nullable|numeric|min:0',
        ]);

        // Calculate totals
        $subtotal = 0;
        foreach ($validated['items'] as $item) {
            $subtotal += $item['quantity'] * $item['price'];
        }

        // Get discount information from request
        $discountType = $validated['discount_type'] ?? 'fixed';
        $discountValue = $validated['discount_value'] ?? 0;
        $discountAmount = $validated['discount_amount'] ?? 0;
        $subtotalAfterDiscount = $validated['subtotal_after_discount'] ?? $subtotal;
        $taxAmount = $validated['tax_amount'] ?? 0;
        $grandTotalFromApp = $validated['grand_total'] ?? null;
        $shipping = $validated['shipping'] ?? 0;

        // Calculate tax based on discounted subtotal
        $settings = \DB::table('settings')->first();
        $taxRate = (float) ($settings->default_tax ?? 0);

        // Use tax amount from app if provided, otherwise calculate
        $tax = $taxAmount > 0 ? $taxAmount : ($subtotalAfterDiscount * ($taxRate / 100));

        // Use grand total from app if provided, otherwise calculate
        $grandTotal = $grandTotalFromApp ?? ($subtotalAfterDiscount + $tax + $shipping);

        // Create new customer or get existing one
        $clientId = 1; // Default walk-in customer
        $customerName = $validated['customer_name'];
        $customerPhone = $validated['customer_phone'];
        $customerAddress = $validated['customer_address'];

        if ($customerName && $customerName !== 'Walk-in Customer') {
            // Check if customer exists by phone or name
            $existingCustomer = \App\Models\Client::where(function ($q) use ($customerPhone, $customerName) {
                if ($customerPhone) {
                    $q->where('phone', $customerPhone)
                        ->orWhere('name', $customerName);
                } else {
                    $q->where('name', $customerName);
                }
            })->whereNull('deleted_at')->first();

            if ($existingCustomer) {
                // Use existing customer
                $clientId = $existingCustomer->id;
            } else {
                // Create new customer
                $newClient = \App\Models\Client::create([
                    'name' => $customerName,
                    'phone' => $customerPhone,
                    'adresse' => $customerAddress,
                    'email' => $customerPhone ? $customerPhone.'@mobilepos.local' : null,
                    'code' => 'C-'.strtoupper(\Illuminate\Support\Str::random(6)),
                    'country' => 'Cambodia',
                ]);
                $clientId = $newClient->id;
            }
        }

        // Get logged-in user or default to admin (user_id 1)
        $userId = $validated['user_id'] ?? 1;

        // Create sale with discount information
        // discount_Method: '1' = percentage, '2' = fixed
        $discountMethodCode = ($discountType === 'percentage') ? '1' : '2';

        $sale = \App\Models\Sale::create([
            'date' => now()->format('Y-m-d'),
            'Ref' => 'SL-'.strtoupper(\Illuminate\Support\Str::random(6)),
            'client_id' => $clientId,
            'user_id' => $userId,
            'warehouse_id' => $validated['warehouse_id'],
            'GrandTotal' => $grandTotal,
            'TaxNet' => $tax,
            'tax_rate' => $taxRate,
            'discount' => $discountAmount,
            'discount_Method' => $discountMethodCode,
            'shipping' => $shipping,
            'statut' => 'completed',
            'payment_statut' => $validated['payment_status'],
            'payment_method' => $validated['payment_method'],
            'paid_amount' => $validated['paid_amount'],
            'notes' => 'Mobile POS Order - '.$customerName.($discountAmount > 0 ? ' (Discount: '.$discountAmount.')' : '').($shipping > 0 ? ' (Shipping: '.$shipping.')' : ''),
            'is_pos' => 1,
        ]);

        // Create sale details and update stock
        $products = [];
        foreach ($validated['items'] as $item) {
            $itemTotal = $item['quantity'] * $item['price'];

            \App\Models\SaleDetail::create([
                'sale_id' => $sale->id,
                'product_id' => $item['product_id'],
                'quantity' => $item['quantity'],
                'price' => $item['price'],
                'total' => $itemTotal,
            ]);

            // Get product name for Telegram notification
            $product = \App\Models\Product::find($item['product_id']);
            $products[] = [
                'product_name' => $product ? $product->name : 'Product #'.$item['product_id'],
                'quantity' => $item['quantity'],
                'price' => $item['price'],
                'image' => $product?->image ?? null,
                'image_url' => ($product && $product->image) ? product_image_url($product->image) : null,
            ];

            // Update stock in product_warehouse
            \DB::table('product_warehouse')
                ->where('product_id', $item['product_id'])
                ->where('warehouse_id', $validated['warehouse_id'])
                ->decrement('qte', $item['quantity']);
        }

        // Send Telegram notification to warehouse group
        try {
            \Log::info('Sending Telegram notification for mobile POS order - Sale ID: '.$sale->id);

            $warehouse = \App\Models\Warehouse::find($validated['warehouse_id']);
            $seller = \App\Models\User::find($userId);

            if ($warehouse && $warehouse->telegram_enabled && $warehouse->telegram_chat_id) {
                // Prepare sale data for notification
                $saleData = [
                    'ref' => $sale->Ref,
                    'customer_name' => $customerName,
                    'customer_phone' => $customerPhone,
                    'customer_address' => $customerAddress,
                    'date' => $sale->date,
                    'datetime' => $sale->created_at?->format('Y-m-d H:i:s'),
                    'GrandTotal' => $grandTotal,
                    'payment_method' => $validated['payment_method'],
                    'payment_status' => $validated['payment_status'],
                    'paid_amount' => $validated['paid_amount'],
                    'due' => $grandTotal - $validated['paid_amount'],
                    'seller_name' => $seller?->name ?? 'Mobile POS',
                    'seller_phone' => $seller?->phone ?? '',
                    'created_by' => $seller?->name ?? 'Mobile POS',
                    'products' => $products,
                ];

                // Send notification via TelegramService with warehouse-specific bot token
                $telegramService = app(\App\Services\TelegramService::class);
                $result = $telegramService->sendSaleNotificationResult(
                    $saleData,
                    $warehouse->name,
                    $warehouse->telegram_chat_id,
                    $warehouse->telegram_bot_token
                );

                if ($result && isset($result['message_id'])) {
                    $sale->telegram_sale_chat_id = (string) $warehouse->telegram_chat_id;
                    $sale->telegram_sale_message_id = (int) $result['message_id'];
                    $sale->save();
                }

                \Log::info('Telegram notification sent for mobile POS order - Result: '.($result ? 'success' : 'failed'));
            } else {
                \Log::info('Telegram not enabled or chat ID missing for warehouse ID: '.$validated['warehouse_id']);
            }
        } catch (\Throwable $e) {
            \Log::error('Telegram notification failed for mobile POS order: '.$e->getMessage());
            \Log::error('Telegram exception trace: '.$e->getTraceAsString());
        }

        return response()->json([
            'success' => true,
            'message' => 'Order created successfully',
            'data' => [
                'id' => (string) $sale->id,
                'Ref' => $sale->Ref,
                'datetime' => $sale->created_at?->format('Y-m-d H:i:s'),
                'GrandTotal' => $grandTotal,
                'discount' => $discountAmount,
            ],
        ], 201);
    } catch (\Illuminate\Validation\ValidationException $e) {
        return response()->json([
            'success' => false,
            'message' => 'Validation error',
            'errors' => $e->errors(),
        ], 422);
    } catch (\Exception $e) {
        return response()->json([
            'success' => false,
            'message' => 'Failed to create order: '.$e->getMessage(),
        ], 500);
    }
});

// Products API (No Auth for Development)
Route::get('/seller/products', function (\Illuminate\Http\Request $request) {
    try {
        $warehouseId = $request->query('warehouse_id');

        // ប្រើ Model ដើម្បី្យវាត្រង Soft Delete ដោយស្វ័យប្រវត្តិ
        $query = \App\Models\Product::where('is_active', 1)
            ->whereNull('deleted_at'); // ត្រងផលិតផលដែលលុបហើយ

        // បើមាន warehouse_id ត្រងតាមឃ្លាំង
        if ($warehouseId && $warehouseId !== 'all') {
            // ត្រងតែផលិតផលដែលមានស្តុក > 0
            $query->whereHas('product_warehouse', function ($q) use ($warehouseId) {
                $q->where('warehouse_id', $warehouseId)
                    ->where('qte', '>', 0);
            });
        } else {
            // បើអត់ជ្រើសឃ្លាំង ត្រងតែផលិតផលដែលមានស្តុក > 0
            $query->whereHas('product_warehouse', function ($q) {
                $q->where('qte', '>', 0);
            });
        }

        $products = $query->orderBy('name', 'asc')->get()
            ->map(function ($product) use ($warehouseId) {
                // ទាញទិន្នន័យ stock
                $stockQuery = \DB::table('product_warehouse')
                    ->where('product_id', $product->id)
                    ->whereNull('deleted_at');

                // បើមាន warehouse_id យកតាមឃ្លាំងនោះ
                // បើអត់ យកពីគ្រប់ឃ្លាំង (បូកបញ្ចូលគ្នា)
                if ($warehouseId && $warehouseId !== 'all') {
                    $stockQuery->where('warehouse_id', $warehouseId);
                    $stockData = $stockQuery->first();
                    $stock = $stockData ? (int) $stockData->qte : 0;
                } else {
                    // បូកស្តុកពីគ្រប់ឃ្លាំង
                    $allStockData = $stockQuery->get();
                    $stock = $allStockData->sum(function ($item) {
                        return (int) ($item->qte ?? 0);
                    });
                }

                return [
                    'id' => (string) $product->id,
                    'code' => $product->code ?? '',
                    'name' => $product->name ?? 'Unknown',
                    'description' => $product->note ?? '',
                    'price' => (float) $product->price,
                    'cost' => (float) ($product->cost ?? 0),
                    'stock' => $stock,
                    'stock_alert' => (int) ($product->stock_alert ?? 0),
                    'image' => $product->image ?? '',
                    'image_url' => $product->image ? product_image_url($product->image) : null,
                    'category' => $product->category ? ['id' => (string) $product->category->id, 'name' => $product->category->name ?? ''] : ['id' => '', 'name' => 'Uncategorized'],
                    'brand' => $product->brand ? ['id' => (string) $product->brand->id, 'name' => $product->brand->name ?? ''] : null,
                    'warehouse_id' => $warehouseId,
                    'created_at' => $product->created_at?->toIso8601String(),
                    'updated_at' => $product->updated_at?->toIso8601String(),
                ];
            });

        return response()->json(['success' => true, 'data' => $products], 200);
    } catch (\Exception $e) {
        return response()->json(['success' => false, 'message' => $e->getMessage()], 500);
    }
});

// Dashboard Stats
Route::get('/seller/dashboard/stats', function () {
    return response()->json([
        'success' => true,
        'data' => [
            'sales' => ['total' => 0, 'today' => 0, 'week' => 0, 'month' => 0],
            'orders' => ['total' => 0, 'today' => 0, 'pending' => 0, 'completed' => 0],
            'products' => ['total' => 0, 'low_stock' => 0, 'out_of_stock' => 0],
        ],
    ]);
});

// ===============================================================
// Seller App - Warehouse & Category Filters
// ===============================================================

// Get Warehouses
Route::get('/seller/warehouses', function () {
    try {
        $warehouses = \App\Models\Warehouse::orderBy('name')->get();

        return response()->json(['success' => true, 'data' => $warehouses], 200);
    } catch (\Exception $e) {
        return response()->json(['success' => false, 'message' => $e->getMessage()], 500);
    }
});

// Get Categories (for Seller App)
Route::get('/seller/categories', function () {
    try {
        // យក categories ទាំងអស់ (មិនមាន is_active ទេ)
        $categories = \App\Models\Category::orderBy('name')->get()
            ->map(function ($category) {
                return [
                    'id' => (string) $category->id,
                    'name' => $category->name ?? 'Unknown',
                    'description' => $category->description ?? '',
                ];
            });

        return response()->json(['success' => true, 'data' => $categories], 200);
    } catch (\Exception $e) {
        return response()->json(['success' => false, 'message' => $e->getMessage()], 500);
    }
});

// ===============================================================
// Update Product API
// ===============================================================
Route::put('/products/{id}', function (\Illuminate\Http\Request $request, $id) {
    try {
        $validated = $request->validate([
            'name' => 'sometimes|required|string|max:255',
            'description' => 'sometimes|required|string',
            'price' => 'sometimes|required|numeric|min:0',
            'stock' => 'sometimes|required|integer|min:0',
        ]);

        $product = \App\Models\Product::findOrFail($id);
        $product->update($validated);

        return response()->json([
            'success' => true,
            'message' => 'Product updated successfully',
            'data' => $product,
        ], 200);
    } catch (\Exception $e) {
        return response()->json([
            'success' => false,
            'message' => 'Failed to update product: '.$e->getMessage(),
        ], 500);
    }
});

// ===============================================================
// Seller App - Update Product (API Group)
// ===============================================================
Route::put('/seller/products/{id}', function (\Illuminate\Http\Request $request, $id) {
    try {
        $validated = $request->validate([
            'name' => 'sometimes|required|string|max:255',
            'description' => 'sometimes|required|string',
            'price' => 'sometimes|required|numeric|min:0',
            'stock' => 'sometimes|required|integer|min:0',
        ]);

        $product = \App\Models\Product::findOrFail($id);
        $product->update($validated);

        return response()->json([
            'success' => true,
            'message' => 'Product updated successfully',
            'data' => $product,
        ], 200);
    } catch (\Exception $e) {
        return response()->json([
            'success' => false,
            'message' => 'Failed to update product: '.$e->getMessage(),
        ], 500);
    }
});
