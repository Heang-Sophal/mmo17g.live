<?php

namespace App\Http\Controllers;

use App\Models\Account;
use App\Models\Adjustment;
use App\Models\AdjustmentDetail;
use App\Models\Attendance;
use App\Models\Brand;
use App\Models\Category;
use App\Models\Client;
use App\Models\Company;
use App\Models\Deposit;
use App\Models\Employee;
use App\Models\Expense;
use App\Models\PaymentMethod;
use App\Models\PaymentPurchase;
use App\Models\PaymentPurchaseReturns;
use App\Models\PaymentSale;
use App\Models\PaymentSaleReturns;
use App\Models\Product;
use App\Models\product_warehouse;
use App\Models\ProductVariant;
use App\Models\Provider;
use App\Models\Purchase;
use App\Models\PurchaseDetail;
use App\Models\PurchaseReturn;
use App\Models\PurchaseReturnDetails;
use App\Models\Quotation;
use App\Models\QuotationDetail;
use App\Models\Role;
use App\Models\Sale;
use App\Models\SaleDetail;
use App\Models\SaleReturn;
use App\Models\SaleReturnDetails;
use App\Models\Setting;
use App\Models\Transfer;
use App\Models\TransferDetail;
use App\Models\Unit;
use App\Models\User;
use App\Models\UserWarehouse;
use App\Models\Warehouse;
use App\Traits\CalculatesCogsAndAverageCost;
use App\utils\helpers;
use Carbon\Carbon;
use DB;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class ReportController extends BaseController
{
    use CalculatesCogsAndAverageCost;
    // ----------- Get Last 5 Sales --------------\\

    public function Get_last_Sales()
    {

        $user = Auth::user();
        // New way: Check user's record_view field (user-level boolean)
        // Backward compatibility: If record_view is null, fall back to role permission check
        $ShowRecord = $user->hasRecordView();

        $Sales = Sale::with('details', 'client', 'facture')->where('deleted_at', '=', null)
            ->where(function ($query) use ($ShowRecord) {
                if (! $ShowRecord) {
                    return $query->where('user_id', '=', Auth::user()->id);
                }
            })
            ->orderBy('id', 'desc')
            ->take(5)
            ->get();

        foreach ($Sales as $Sale) {

            $item['Ref'] = $Sale['Ref'];
            $item['statut'] = $Sale['statut'];
            $item['client_name'] = $Sale['client']['name'];
            $item['GrandTotal'] = $Sale['GrandTotal'];
            $item['paid_amount'] = $Sale['paid_amount'];
            $item['due'] = $Sale['GrandTotal'] - $Sale['paid_amount'];
            $item['payment_status'] = $Sale['payment_statut'];

            $data[] = $item;
        }

        return response()->json($data);
    }

    // ----------------- Customers Report -----------------------\\

    public function Client_Report(request $request)
    {

        $this->authorizeForUser($request->user('api'), 'Reports_customers', Client::class);

        // How many items do you want to display.
        $perPage = $request->limit;
        $pageStart = \Request::get('page', 1);
        // Start displaying items from this number;
        $offSet = ($pageStart * $perPage) - $perPage;
        $order = $request->SortField;
        $dir = $request->SortType;
        $data = [];

        $clients = Client::where('deleted_at', '=', null)
        // Search With Multiple Param
            ->where(function ($query) use ($request) {
                return $query->when($request->filled('search'), function ($query) use ($request) {
                    return $query->where('name', 'LIKE', "%{$request->search}%")
                        ->orWhere('code', 'LIKE', "%{$request->search}%")
                        ->orWhere('phone', 'LIKE', "%{$request->search}%");
                });
            });

        $totalRows = $clients->count();
        if ($perPage == '-1') {
            $perPage = $totalRows;
        }
        $clients = $clients->offset($offSet)
            ->limit($perPage)
            ->orderBy($order, $dir)
            ->get();

        foreach ($clients as $client) {
            $item['total_sales'] = DB::table('sales')
                ->where('deleted_at', '=', null)
                ->where('client_id', $client->id)
                ->count();

            $item['total_amount'] = DB::table('sales')
                ->where('deleted_at', '=', null)
                ->where('statut', 'completed')
                ->where('client_id', $client->id)
                ->sum('GrandTotal');

            $item['total_paid'] = DB::table('sales')
                ->where('deleted_at', '=', null)
                ->where('statut', 'completed')
                ->where('client_id', $client->id)
                ->sum('paid_amount');

            $item['due'] = $item['total_amount'] - $item['total_paid'];

            $item['total_amount_return'] = DB::table('sale_returns')
                ->where('deleted_at', '=', null)
                ->where('client_id', $client->id)
                ->sum('GrandTotal');

            $item['total_paid_return'] = DB::table('sale_returns')
                ->where('sale_returns.deleted_at', '=', null)
                ->where('sale_returns.client_id', $client->id)
                ->sum('paid_amount');

            $item['return_Due'] = $item['total_amount_return'] - $item['total_paid_return'];

            $item['name'] = $client->name;
            $item['phone'] = $client->phone;
            $item['code'] = $client->code;
            $item['id'] = $client->id;

            $data[] = $item;
        }

        return response()->json([
            'report' => $data,
            'totalRows' => $totalRows,
        ]);

    }

    // ----------------- Customers Report By ID-----------------------\\

    public function Client_Report_detail(request $request, $id)
    {

        $this->authorizeForUser($request->user('api'), 'Reports_customers', Client::class);

        $client = Client::where('deleted_at', '=', null)->findOrFail($id);

        $data['total_sales'] = DB::table('sales')
            ->where('deleted_at', '=', null)
            ->where('client_id', $id)
            ->count();

        $data['total_amount'] = DB::table('sales')
            ->where('deleted_at', '=', null)
            ->where('statut', 'completed')
            ->where('client_id', $id)
            ->sum('GrandTotal');

        $data['total_paid'] = DB::table('sales')
            ->where('deleted_at', '=', null)
            ->where('statut', 'completed')
            ->where('client_id', $client->id)
            ->sum('paid_amount');

        $data['due'] = $data['total_amount'] - $data['total_paid'];

        return response()->json(['report' => $data]);
    }

    // ----------------- Provider Report By ID-----------------------\\

    public function Provider_Report_detail(request $request, $id)
    {

        $this->authorizeForUser($request->user('api'), 'Reports_suppliers', Provider::class);

        $provider = Provider::where('deleted_at', '=', null)->findOrFail($id);

        $data['total_purchase'] = DB::table('purchases')
            ->where('deleted_at', '=', null)
            ->where('provider_id', $id)
            ->count();

        $data['total_amount'] = DB::table('purchases')
            ->where('deleted_at', '=', null)
            ->where('statut', 'received')
            ->where('provider_id', $id)
            ->sum('GrandTotal');

        $data['total_paid'] = DB::table('purchases')
            ->where('deleted_at', '=', null)
            ->where('statut', 'received')
            ->where('provider_id', $id)
            ->sum('paid_amount');

        $data['due'] = $data['total_amount'] - $data['total_paid'];

        return response()->json(['report' => $data]);

    }

    // -------------------- Get Sales By Clients -------------\\

    public function Sales_Client(request $request)
    {

        $this->authorizeForUser($request->user('api'), 'Reports_customers', Client::class);
        // How many items do you want to display.
        $perPage = $request->limit;
        $pageStart = \Request::get('page', 1);
        // Start displaying items from this number;
        $offSet = ($pageStart * $perPage) - $perPage;

        $user = Auth::user();
        // New way: Check user's record_view field (user-level boolean)
        // Backward compatibility: If record_view is null, fall back to role permission check
        $ShowRecord = $user->hasRecordView();

        $sales = Sale::where('deleted_at', '=', null)->with('client', 'warehouse')
            ->where(function ($query) use ($ShowRecord) {
                if (! $ShowRecord) {
                    return $query->where('user_id', '=', Auth::user()->id);
                }
            })
            ->where('client_id', $request->id)
             // Search With Multiple Param
            ->where(function ($query) use ($request) {
                return $query->when($request->filled('search'), function ($query) use ($request) {
                    return $query->where('Ref', 'LIKE', "%{$request->search}%")
                        ->orWhere('statut', 'LIKE', "%{$request->search}%")
                        ->orWhere('payment_statut', 'like', "%{$request->search}%")
                        ->orWhere(function ($query) use ($request) {
                            return $query->whereHas('warehouse', function ($q) use ($request) {
                                $q->where('name', 'LIKE', "%{$request->search}%");
                            });
                        })
                        ->orWhere(function ($query) use ($request) {
                            return $query->whereHas('client', function ($q) use ($request) {
                                $q->where('name', 'LIKE', "%{$request->search}%");
                            });
                        });
                });
            });

        $totalRows = $sales->count();
        if ($perPage == '-1') {
            $perPage = $totalRows;
        }
        $sales = $sales->offset($offSet)
            ->limit($perPage)
            ->orderBy('id', 'desc')
            ->get();

        $data = [];
        foreach ($sales as $sale) {
            $item['id'] = $sale->id;
            $item['date'] = $sale->date;
            $item['Ref'] = $sale->Ref;
            $item['warehouse_name'] = $sale['warehouse']->name;
            $item['client_name'] = $sale['client']->name;
            $item['statut'] = $sale->statut;
            $item['GrandTotal'] = $sale->GrandTotal;
            $item['paid_amount'] = $sale->paid_amount;
            $item['due'] = $sale->GrandTotal - $sale->paid_amount;
            $item['payment_status'] = $sale->payment_statut;
            $item['shipping_status'] = $sale->shipping_status;

            $data[] = $item;
        }

        return response()->json([
            'totalRows' => $totalRows,
            'sales' => $data,
        ]);

    }

    // -------------------- Get Payments By Clients -------------\\

    public function Payments_Client(request $request)
    {

        $this->authorizeForUser($request->user('api'), 'Reports_customers', Client::class);
        // How many items do you want to display.
        $perPage = $request->limit;
        $pageStart = \Request::get('page', 1);
        // Start displaying items from this number;
        $offSet = ($pageStart * $perPage) - $perPage;

        $user = Auth::user();
        // New way: Check user's record_view field (user-level boolean)
        // Backward compatibility: If record_view is null, fall back to role permission check
        $ShowRecord = $user->hasRecordView();

        $payments = DB::table('payment_sales')
            ->where(function ($query) use ($ShowRecord) {
                if (! $ShowRecord) {
                    return $query->where('payment_sales.user_id', '=', Auth::user()->id);
                }
            })
            ->where('payment_sales.deleted_at', '=', null)
            ->join('sales', 'payment_sales.sale_id', '=', 'sales.id')
            ->join('payment_methods', 'payment_sales.payment_method_id', '=', 'payment_methods.id')
            ->where('sales.client_id', $request->id)
             // Search With Multiple Param
            ->where(function ($query) use ($request) {
                return $query->when($request->filled('search'), function ($query) use ($request) {
                    return $query->where('payment_sales.Ref', 'LIKE', "%{$request->search}%")
                        ->orWhere('payment_sales.date', 'LIKE', "%{$request->search}%")
                        ->orWhere('payment_methods.name', 'LIKE', "%{$request->search}%");
                });
            })
            ->select(
                'payment_sales.date', 'payment_sales.Ref AS Ref', 'sales.Ref AS Sale_Ref',
                'payment_methods.name as payment_method', 'payment_sales.montant'
            );

        $totalRows = $payments->count();
        if ($perPage == '-1') {
            $perPage = $totalRows;
        }
        $payments = $payments->offset($offSet)
            ->limit($perPage)
            ->orderBy('payment_sales.id', 'desc')
            ->get();

        return response()->json([
            'payments' => $payments,
            'totalRows' => $totalRows,
        ]);

    }

    // -------------------- Get Quotations By Clients -------------\\

    public function Quotations_Client(request $request)
    {

        $this->authorizeForUser($request->user('api'), 'Reports_customers', Client::class);
        // How many items do you want to display.
        $perPage = $request->limit;
        $pageStart = \Request::get('page', 1);
        // Start displaying items from this number;
        $offSet = ($pageStart * $perPage) - $perPage;

        $user = Auth::user();
        // New way: Check user's record_view field (user-level boolean)
        // Backward compatibility: If record_view is null, fall back to role permission check
        $ShowRecord = $user->hasRecordView();
        $data = [];

        $Quotations = Quotation::with('client', 'warehouse')
            ->where('deleted_at', '=', null)
            ->where('client_id', $request->id)
            ->where(function ($query) use ($ShowRecord) {
                if (! $ShowRecord) {
                    return $query->where('user_id', '=', Auth::user()->id);
                }
            })
            // Search With Multiple Param
            ->where(function ($query) use ($request) {
                return $query->when($request->filled('search'), function ($query) use ($request) {
                    return $query->where('Ref', 'LIKE', "%{$request->search}%")
                        ->orWhere('statut', 'LIKE', "%{$request->search}%")
                        ->orWhere(function ($query) use ($request) {
                            return $query->whereHas('warehouse', function ($q) use ($request) {
                                $q->where('name', 'LIKE', "%{$request->search}%");
                            });
                        })
                        ->orWhere(function ($query) use ($request) {
                            return $query->whereHas('client', function ($q) use ($request) {
                                $q->where('name', 'LIKE', "%{$request->search}%");
                            });
                        });
                });
            });

        $totalRows = $Quotations->count();
        if ($perPage == '-1') {
            $perPage = $totalRows;
        }
        $Quotations = $Quotations->offset($offSet)
            ->limit($perPage)
            ->orderBy('id', 'desc')
            ->get();

        foreach ($Quotations as $Quotation) {

            $item['id'] = $Quotation->id;
            $item['date'] = $Quotation->date;
            $item['Ref'] = $Quotation->Ref;
            $item['statut'] = $Quotation->statut;
            $item['warehouse_name'] = $Quotation['warehouse']->name;
            $item['client_name'] = $Quotation['client']->name;
            $item['GrandTotal'] = $Quotation->GrandTotal;

            $data[] = $item;
        }

        return response()->json([
            'quotations' => $data,
            'totalRows' => $totalRows,
        ]);
    }

    // -------------------- Get Returns By Client -------------\\

    public function Returns_Client(request $request)
    {

        $this->authorizeForUser($request->user('api'), 'Reports_customers', Client::class);
        // How many items do you want to display.
        $perPage = $request->limit;
        $pageStart = \Request::get('page', 1);
        // Start displaying items from this number;
        $offSet = ($pageStart * $perPage) - $perPage;
        $data = [];

        //  Check If User Has Permission Show All Records
        $user = Auth::user();
        // New way: Check user's record_view field (user-level boolean)
        // Backward compatibility: If record_view is null, fall back to role permission check
        $ShowRecord = $user->hasRecordView();

        $SaleReturn = SaleReturn::where('deleted_at', '=', null)->with('sale', 'client', 'warehouse')
            ->where('client_id', $request->id)
            ->where(function ($query) use ($ShowRecord) {
                if (! $ShowRecord) {
                    return $query->where('user_id', '=', Auth::user()->id);
                }
            })
             // Search With Multiple Param
            ->where(function ($query) use ($request) {
                return $query->when($request->filled('search'), function ($query) use ($request) {
                    return $query->where('Ref', 'LIKE', "%{$request->search}%")
                        ->orWhere('statut', 'LIKE', "%{$request->search}%")
                        ->orWhere('payment_statut', 'like', "$request->search")
                        ->orWhere(function ($query) use ($request) {
                            return $query->whereHas('client', function ($q) use ($request) {
                                $q->where('name', 'LIKE', "%{$request->search}%");
                            });
                        })
                        ->orWhere(function ($query) use ($request) {
                            return $query->whereHas('sale', function ($q) use ($request) {
                                $q->where('Ref', 'LIKE', "%{$request->search}%");
                            });
                        })
                        ->orWhere(function ($query) use ($request) {
                            return $query->whereHas('warehouse', function ($q) use ($request) {
                                $q->where('name', 'LIKE', "%{$request->search}%");
                            });
                        });
                });
            });

        $totalRows = $SaleReturn->count();
        if ($perPage == '-1') {
            $perPage = $totalRows;
        }
        $SaleReturn = $SaleReturn->offset($offSet)
            ->limit($perPage)
            ->orderBy('id', 'desc')
            ->get();

        foreach ($SaleReturn as $Sale_Return) {
            $item['id'] = $Sale_Return->id;
            $item['Ref'] = $Sale_Return->Ref;
            $item['statut'] = $Sale_Return->statut;
            $item['client_name'] = $Sale_Return['client']->name;
            $item['sale_ref'] = $Sale_Return['sale'] ? $Sale_Return['sale']->Ref : '---';
            $item['sale_id'] = $Sale_Return['sale'] ? $Sale_Return['sale']->id : null;
            $item['warehouse_name'] = $Sale_Return['warehouse']->name;
            $item['GrandTotal'] = $Sale_Return->GrandTotal;
            $item['paid_amount'] = $Sale_Return->paid_amount;
            $item['due'] = $Sale_Return->GrandTotal - $Sale_Return->paid_amount;
            $item['payment_status'] = $Sale_Return->payment_statut;

            $data[] = $item;
        }

        return response()->json([
            'totalRows' => $totalRows,
            'returns_customer' => $data,
        ]);
    }

    // ------------- Show Report Purchases ----------\\

    public function Report_Purchases(request $request)
    {
        $this->authorizeForUser($request->user('api'), 'ReportPurchases', Purchase::class);

        // Normalize date filter to Y-m-d (avoid timezone/invalid input issues)
        $today = Carbon::today();
        $from = $request->filled('from')
            ? Carbon::parse($request->from)->toDateString()
            : $today->copy()->subDays(29)->toDateString();
        $to = $request->filled('to')
            ? Carbon::parse($request->to)->toDateString()
            : $today->toDateString();
        if ($from > $to) {
            $from = $to;
        }

        // How many items do you want to display.
        $perPage = $request->limit;
        $pageStart = \Request::get('page', 1);
        // Start displaying items from this number;
        $offSet = ($pageStart * $perPage) - $perPage;
        $order = $request->SortField;
        $dir = $request->SortType;
        $helpers = new helpers;
        // Filter fields With Params to retrieve
        $param = [
            0 => 'like',
            1 => 'like',
            2 => '=',
            3 => 'like',
            4 => '=',
        ];
        $columns = [
            0 => 'Ref',
            1 => 'statut',
            2 => 'provider_id',
            3 => 'payment_statut',
            4 => 'warehouse_id',
        ];
        $data = [];
        $total = 0;

        $Purchases = Purchase::select('purchases.*')
            ->with('facture', 'provider', 'warehouse', 'user')
            ->join('providers', 'purchases.provider_id', '=', 'providers.id')
            ->where('purchases.deleted_at', '=', null)
            ->whereBetween('purchases.date', [$from, $to]);

        //  Check If User Has Permission Show All Records
        $Purchases = $helpers->Show_Records($Purchases);
        // Multiple Filter
        $Filtred = $helpers->filter($Purchases, $columns, $param, $request)
            // Search With Multiple Param
            ->where(function ($query) use ($request) {
                return $query->when($request->filled('search'), function ($query) use ($request) {
                    return $query->where('Ref', 'LIKE', "%{$request->search}%")
                        ->orWhere('statut', 'LIKE', "%{$request->search}%")
                        ->orWhere('GrandTotal', $request->search)
                        ->orWhere('payment_statut', 'like', "$request->search")
                        ->orWhere(function ($query) use ($request) {
                            return $query->whereHas('provider', function ($q) use ($request) {
                                $q->where('name', 'LIKE', "%{$request->search}%");
                            });
                        })
                        ->orWhere(function ($query) use ($request) {
                            return $query->whereHas('warehouse', function ($q) use ($request) {
                                $q->where('name', 'LIKE', "%{$request->search}%");
                            });
                        });
                });
            });

        $totalRows = $Filtred->count();
        if ($perPage == '-1') {
            $perPage = $totalRows;
        }
        $Purchases = $Filtred->offset($offSet)
            ->limit($perPage)
            ->orderBy('purchases.'.$order, $dir)
            ->get();

        foreach ($Purchases as $Purchase) {

            $item['id'] = $Purchase->id;
            $item['date'] = $Purchase->date;
            $item['Ref'] = $Purchase->Ref;
            $item['warehouse_name'] = $Purchase['warehouse']->name;
            $item['discount'] = $Purchase->discount;
            $item['shipping'] = $Purchase->shipping;
            $item['statut'] = $Purchase->statut;
            $item['provider_name'] = $Purchase['provider']->name;
            $item['provider_email'] = $Purchase['provider']->email;
            $item['provider_tele'] = $Purchase['provider']->phone;
            $item['provider_code'] = $Purchase['provider']->code;
            $item['provider_adr'] = $Purchase['provider']->adresse;
            $item['GrandTotal'] = $Purchase['GrandTotal'];
            $item['paid_amount'] = $Purchase['paid_amount'];
            $item['due'] = $Purchase['GrandTotal'] - $Purchase['paid_amount'];
            $item['payment_status'] = $Purchase['payment_statut'];
            $item['user_name'] = optional($Purchase['user'])->username ?? '---';

            $data[] = $item;
        }

        $suppliers = provider::where('deleted_at', '=', null)->get(['id', 'name']);

        // get warehouses assigned to user
        $user_auth = auth()->user();
        if ($user_auth->is_all_warehouses) {
            $warehouses = Warehouse::where('deleted_at', '=', null)->get(['id', 'name']);
        } else {
            $warehouses_id = UserWarehouse::where('user_id', $user_auth->id)->pluck('warehouse_id')->toArray();
            $warehouses = Warehouse::where('deleted_at', '=', null)->whereIn('id', $warehouses_id)->get(['id', 'name']);
        }

        return response()->json([
            'totalRows' => $totalRows,
            'purchases' => $data,
            'suppliers' => $suppliers,
            'warehouses' => $warehouses,
        ]);
    }

    // ------------- Show Report SALES -----------\\

    public function Report_Sales(request $request)
    {
        $this->authorizeForUser($request->user('api'), 'Reports_sales', Sale::class);
        // How many items do you want to display.
        $perPage = $request->limit;
        $pageStart = \Request::get('page', 1);
        // Start displaying items from this number;
        $offSet = ($pageStart * $perPage) - $perPage;
        $order = $request->SortField;
        $dir = $request->SortType;
        $helpers = new helpers;
        // Filter fields With Params to retrieve

        $param = [
            0 => 'like',
            1 => 'like',
            2 => '=',
            3 => 'like',
            4 => '=',
            5 => '=',
        ];
        $columns = [
            0 => 'Ref',
            1 => 'statut',
            2 => 'client_id',
            3 => 'payment_statut',
            4 => 'warehouse_id',
            5 => 'warehouse_id',
        ];

        $data = [];

        $Sales = Sale::select('sales.*')
            ->with('facture', 'client', 'warehouse', 'user')
            ->join('clients', 'sales.client_id', '=', 'clients.id')
            ->where('sales.deleted_at', '=', null)
            ->whereBetween('sales.date', [$request->from, $request->to]);

        //  Check If User Has Permission Show All Records
        $Sales = $helpers->Show_Records($Sales);
        // Multiple Filter
        $Filtred = $helpers->filter($Sales, $columns, $param, $request)
        // Search With Multiple Param
            ->where(function ($query) use ($request) {
                return $query->when($request->filled('search'), function ($query) use ($request) {
                    return $query->where('Ref', 'LIKE', "%{$request->search}%")
                        ->orWhere('statut', 'LIKE', "%{$request->search}%")
                        ->orWhere('GrandTotal', $request->search)
                        ->orWhere('payment_statut', 'like', "%{$request->search}%")
                        ->orWhere('shipping_status', 'like', "%{$request->search}%")
                        ->orWhere(function ($query) use ($request) {
                            return $query->whereHas('client', function ($q) use ($request) {
                                $q->where('name', 'LIKE', "%{$request->search}%");
                            });
                        })
                        ->orWhere(function ($query) use ($request) {
                            return $query->whereHas('user', function ($q) use ($request) {
                                $q->where('username', 'LIKE', "%{$request->search}%");
                            });
                        })
                        ->orWhere(function ($query) use ($request) {
                            return $query->whereHas('warehouse', function ($q) use ($request) {
                                $q->where('name', 'LIKE', "%{$request->search}%");
                            });
                        });
                });
            });

        $totalRows = $Filtred->count();
        if ($perPage == '-1') {
            $perPage = $totalRows;
        }
        $Sales = $Filtred->offset($offSet)
            ->limit($perPage)
            ->orderBy('sales.'.$order, $dir)
            ->get();

        foreach ($Sales as $Sale) {

            $item['id'] = $Sale['id'];
            $item['date'] = $Sale['date'];
            $item['Ref'] = $Sale['Ref'];
            $item['statut'] = $Sale['statut'];
            $item['discount'] = $Sale['discount'];
            $item['shipping'] = $Sale['shipping'];
            $item['warehouse_name'] = $Sale['warehouse']['name'];
            $item['client_name'] = $Sale['client']['name'];
            $item['client_email'] = $Sale['client']['email'];
            $item['client_tele'] = $Sale['client']['phone'];
            $item['client_code'] = $Sale['client']['code'];
            $item['client_adr'] = $Sale['client']['adresse'];
            $item['GrandTotal'] = $Sale['GrandTotal'];
            $item['paid_amount'] = $Sale['paid_amount'];
            $item['due'] = $Sale['GrandTotal'] - $Sale['paid_amount'];
            $item['payment_status'] = $Sale['payment_statut'];
            $item['user_name'] = optional($Sale['user'])->username ?? '---';

            $data[] = $item;
        }

        $customers = client::where('deleted_at', '=', null)->get(['id', 'name']);
        $sellers = User::where('deleted_at', '=', null)->get(['id', 'username']);

        // get warehouses assigned to user
        $user_auth = auth()->user();
        if ($user_auth->is_all_warehouses) {
            $warehouses = Warehouse::where('deleted_at', '=', null)->get(['id', 'name']);
        } else {
            $warehouses_id = UserWarehouse::where('user_id', $user_auth->id)->pluck('warehouse_id')->toArray();
            $warehouses = Warehouse::where('deleted_at', '=', null)->whereIn('id', $warehouses_id)->get(['id', 'name']);
        }

        return response()->json(
            [
                'totalRows' => $totalRows,
                'sales' => $data,
                'sellers' => $sellers,
                'customers' => $customers,
                'warehouses' => $warehouses,
            ]
        );
    }

    /**
     * Sales By Seller Report: Detailed product-level sales data grouped by seller
     */
    public function sales_by_seller_report(request $request)
    {
        // Accept both Passport tokens and custom base64 tokens
        $user = null;
        $isMobileUser = false;
        $isMobileRoute = str_contains($request->path(), 'report/sales_by_seller_mobile');

        try {
            $user = $request->user('api');
        } catch (\Exception $e) {
            // Passport auth failed, will try custom token below
            $user = null;
        }

        if (! $user) {
            // Try to authenticate with custom base64 token (Mobile App)
            try {
                $token = $request->bearerToken();
                if ($token) {
                    $decoded = @json_decode(base64_decode($token), true);
                    if ($decoded && isset($decoded['user_id'])) {
                        $user = \App\Models\User::find($decoded['user_id']);
                        $isMobileUser = true;
                    }
                }
            } catch (\Exception $e) {
                $user = null;
            }
        }

        if (! $user) {
            return response()->json(['error' => 'Unauthenticated', 'message' => 'Please login to view this report.'], 401);
        }

        // Mobile route only shows the authenticated user's own sales, so it
        // does not need the broader web report permission gate.
        if (! $isMobileRoute) {
            try {
                $this->authorizeForUser($user, 'sales_by_seller_report', Sale::class);
            } catch (\Exception $e) {
                return response()->json(['error' => 'Unauthorized', 'message' => 'You do not have permission to view this report.'], 403);
            }
        }

        // How many items do you want to display.
        $perPage = $request->limit;
        $pageStart = \Request::get('page', 1);
        // Start displaying items from this number;
        $offSet = ($pageStart * $perPage) - $perPage;
        $order = $request->SortField ?: 'id';
        $dir = $request->SortType ?: 'desc';
        // Ensure direction is valid
        if (! in_array(strtolower($dir), ['asc', 'desc'])) {
            $dir = 'desc';
        }
        $data = [];

        // Get sales with details
        $Sales = Sale::select('sales.*')
            ->with('client', 'warehouse', 'user', 'details.product', 'details.product.unit')
            ->join('clients', 'sales.client_id', '=', 'clients.id')
            ->where('sales.deleted_at', '=', null)
            ->whereBetween('sales.date', [$request->from, $request->to]);

        // Mobile report must always show only the logged-in seller's data.
        if ($isMobileRoute) {
            $Sales->where('sales.user_id', '=', $user->id);
        } elseif (! $user->hasRecordView()) {
            $Sales->where('sales.user_id', '=', $user->id);
        }

        // Apply filters
        if ($request->filled('Ref')) {
            $Sales->where('sales.Ref', 'LIKE', "%{$request->Ref}%");
        }
        if ($request->filled('client_id')) {
            $Sales->where('sales.client_id', $request->client_id);
        }
        if ($request->filled('warehouse_id')) {
            $Sales->where('sales.warehouse_id', $request->warehouse_id);
        }
        if (! $isMobileRoute && $request->filled('user_id')) {
            $Sales->where('sales.user_id', $request->user_id);
        }
        if ($request->filled('statut')) {
            $Sales->where('sales.statut', $request->statut);
        }
        if ($request->filled('payment_statut')) {
            $Sales->where('sales.payment_statut', $request->payment_statut);
        }
        if ($request->filled('search')) {
            $Sales->where(function ($query) use ($request) {
                return $query->where('sales.Ref', 'LIKE', "%{$request->search}%")
                    ->orWhere('sales.statut', 'LIKE', "%{$request->search}%")
                    ->orWhere('sales.payment_statut', 'like', "%{$request->search}%")
                    ->orWhereHas('client', function ($q) use ($request) {
                        $q->where('name', 'LIKE', "%{$request->search}%");
                    })
                    ->orWhereHas('user', function ($q) use ($request) {
                        $q->where('username', 'LIKE', "%{$request->search}%");
                    })
                    ->orWhereHas('warehouse', function ($q) use ($request) {
                        $q->where('name', 'LIKE', "%{$request->search}%");
                    });
            });
        }

        $Sales->orderBy('sales.'.$order, $dir);
        $sales = $Sales->get();

        $returnedProductsBySale = [];
        $returnedQuantitiesBySaleProduct = [];
        $returnedTotalsBySaleProduct = [];
        $hasReturnBySale = [];
        $saleIds = $sales->pluck('id')->filter()->values()->all();

        if (! empty($saleIds)) {
            $formatReturnQty = function ($quantity) {
                $quantity = (float) $quantity;

                return fmod($quantity, 1.0) === 0.0
                    ? (string) (int) $quantity
                    : rtrim(rtrim(number_format($quantity, 2, '.', ''), '0'), '.');
            };

            $saleReturns = SaleReturn::with('details.product')
                ->whereNull('deleted_at')
                ->whereIn('sale_id', $saleIds)
                ->get();

            $returnedProductNamesBySale = [];

            foreach ($saleReturns as $saleReturn) {
                $hasReturnBySale[(int) $saleReturn->sale_id] = true;

                foreach ($saleReturn->details as $returnDetail) {
                    $saleId = (int) $saleReturn->sale_id;
                    $productId = (int) $returnDetail->product_id;
                    $quantity = (float) ($returnDetail->quantity ?? 0);
                    $returnTotal = (float) ($returnDetail->total ?? 0);
                    $productName = $returnDetail->product ? $returnDetail->product->name : 'N/A';

                    if (! isset($returnedQuantitiesBySaleProduct[$saleId])) {
                        $returnedQuantitiesBySaleProduct[$saleId] = [];
                        $returnedTotalsBySaleProduct[$saleId] = [];
                        $returnedProductNamesBySale[$saleId] = [];
                    }

                    $returnedQuantitiesBySaleProduct[$saleId][$productId] =
                        ($returnedQuantitiesBySaleProduct[$saleId][$productId] ?? 0) + $quantity;
                    $returnedTotalsBySaleProduct[$saleId][$productId] =
                        ($returnedTotalsBySaleProduct[$saleId][$productId] ?? 0) + $returnTotal;
                    $returnedProductNamesBySale[$saleId][$productId] = $productName;
                }
            }

            foreach ($returnedQuantitiesBySaleProduct as $saleId => $products) {
                $returnedProductsBySale[$saleId] = collect($products)
                    ->map(function ($quantity, $productId) use ($returnedProductNamesBySale, $saleId, $formatReturnQty) {
                        $productName = $returnedProductNamesBySale[$saleId][$productId] ?? 'N/A';

                        return $productName.' x'.$formatReturnQty($quantity);
                    })
                    ->values()
                    ->implode(', ');
            }
        }

        // Flatten sale details into individual rows
        // Grand totals are computed over ALL rows (before pagination) for accurate footer display.
        $grandTotalCost      = 0;
        $grandTotalPaid      = 0;
        $grandTotalShipping  = 0;
        $grandSaleByCash     = 0;
        $grandSaleByKhqr     = 0;

        foreach ($sales as $sale) {
            $saleShipping    = (float) ($sale->shipping ?? 0);
            $salePaidAmount  = (float) ($sale->paid_amount ?? 0);
            $saleTotalAmount = (float) ($sale->GrandTotal ?? 0);
            $paymentMethod   = strtolower($sale->payment_method ?? '');
            $shippingIsFree  = (bool) ($sale->shipping_is_free ?? false);
            $saleHasReturn   = ! empty($hasReturnBySale[(int) $sale->id] ?? false);
            $displayShipping = $saleHasReturn ? round($saleShipping * 2, 2) : $saleShipping;
            $hasAssignedShipping = false;

            if ($sale->details && $sale->details->count() > 0) {
                $detailIndex = 0;
                $detailCount = $sale->details->count();

                foreach ($sale->details as $detail) {
                    $detailIndex++;
                    $product  = $detail->product;
                    $unit     = $product && $product->unit ? $product->unit->ShortName : 'N/A';
                    $qty      = (float) ($detail->quantity ?? 1);

                    // FIX #3: Use sale-time unit cost derived from detail->total when available.
                    // detail->total is the line total (price × qty after discounts/tax adjustments).
                    // Fallback to current product cost if detail total is not available.
                    $detailTotal      = (float) ($detail->total ?? 0);
                    $productPrice     = (float) ($detail->price ?? 0);
                    $productUnitCost  = $product ? (float) ($product->cost ?? 0) : 0;

                    // FIX #2: product_cost = unit_cost × quantity
                    $productCostTotal = round($productUnitCost * $qty, 2);

                    $lineTotal = $detailTotal > 0 ? $detailTotal : ($productPrice * $qty);

                    // Proportional paid amount for this product line
                    $paidAmount = $saleTotalAmount > 0
                        ? round(($lineTotal / $saleTotalAmount) * $salePaidAmount, 2)
                        : 0;

                    $returnedQty = $returnedQuantitiesBySaleProduct[$sale->id][$detail->product_id] ?? 0;
                    $returnedTotal = $returnedTotalsBySaleProduct[$sale->id][$detail->product_id] ?? 0;
                    $isReturnedLine = $returnedQty > 0;

                    // Shipping is shown once per sale. For returned sales, attach the doubled
                    // shipping to the first returned product line so the return row is clear.
                    $rowShipping = 0;
                    if (! $hasAssignedShipping && (! $saleHasReturn || $isReturnedLine || $detailIndex === $detailCount)) {
                        $rowShipping = $displayShipping;
                        $hasAssignedShipping = true;
                    }

                    $adjustedProductCost = $productCostTotal;
                    $adjustedPaidAmount = $paidAmount;

                    if ($isReturnedLine) {
                        if ($paymentMethod === 'cash') {
                            $adjustedProductCost = 0;
                            $adjustedPaidAmount = 0;
                        } elseif ($paymentMethod === 'khqr') {
                            $priceToDeduct = $productCostTotal > 0 ? $productCostTotal : $returnedTotal;
                            $adjustedPaidAmount = round($paidAmount - $priceToDeduct - $rowShipping, 2);
                            $adjustedProductCost = 0;
                        }
                    }

                    $grandTotalCost += $adjustedProductCost;
                    $grandTotalShipping += $rowShipping;
                    $grandTotalPaid += $adjustedPaidAmount;

                    if ($paymentMethod === 'cash') {
                        $grandSaleByCash += $adjustedPaidAmount;
                    } elseif ($paymentMethod === 'khqr') {
                        $grandSaleByKhqr += $adjustedPaidAmount;
                    }

                    $returnedProduct = $returnedQty > 0
                        ? ($product ? $product->name : 'N/A').' x'.$formatReturnQty($returnedQty)
                        : '';

                    $item['id']               = $sale->id;
                    $item['datetime']         = $sale->created_at ? $sale->created_at->format('Y-m-d H:i:s') : $sale->date;
                    $item['date']             = $sale->date;
                    $item['Ref']              = $sale->Ref;
                    $item['warehouse_name']   = $sale->warehouse ? $sale->warehouse->name : 'N/A';
                    $item['customer_name']    = $sale->client ? $sale->client->name : 'N/A';
                    $item['client_name']      = $item['customer_name'];
                    $item['customer_address'] = $sale->client ? $sale->client->adresse : 'N/A';
                    $item['customer_phone']   = $sale->client ? $sale->client->phone : 'N/A';
                    $item['product_name']     = $product ? $product->name : 'N/A';
                    $item['product_qty']      = $qty;
                    $item['product_unit']     = $unit;
                    $item['product_cost']     = $adjustedProductCost;
                    $item['original_product_cost'] = $productCostTotal;
                    $item['product_price']    = $productPrice;
                    $item['paid_amount']      = $adjustedPaidAmount;
                    $item['original_paid_amount'] = $paidAmount;
                    $item['shipping']         = $rowShipping;
                    $item['original_shipping'] = $saleShipping;
                    $item['shipping_is_free'] = $shippingIsFree;
                    $item['payment_method']   = $sale->payment_method ?? 'N/A';
                    $item['seller_name']      = $sale->user ? $sale->user->username : 'N/A';
                    $item['seller_phone']     = $sale->user ? ($sale->user->phone ?? 'N/A') : 'N/A';
                    $item['returned_product'] = $returnedProduct;
                    $item['returned_products'] = $returnedProductsBySale[$sale->id] ?? '';
                    $item['returned_quantity'] = $returnedQty;
                    $item['returned_total']   = $returnedTotal;
                    $item['has_return']       = $isReturnedLine;
                    $item['sale_has_return']  = $saleHasReturn;

                    $data[] = $item;
                }
            } else {
                // Sale without details (fallback) — shipping only once, cost = 0
                $adjustedPaidAmount = $salePaidAmount;
                if ($saleHasReturn) {
                    if ($paymentMethod === 'cash') {
                        $adjustedPaidAmount = 0;
                    } elseif ($paymentMethod === 'khqr') {
                        $adjustedPaidAmount = round($salePaidAmount - $displayShipping, 2);
                    }
                }

                $grandTotalShipping += $displayShipping;
                $grandTotalPaid += $adjustedPaidAmount;

                if ($paymentMethod === 'cash') {
                    $grandSaleByCash += $adjustedPaidAmount;
                } elseif ($paymentMethod === 'khqr') {
                    $grandSaleByKhqr += $adjustedPaidAmount;
                }

                $item['id']               = $sale->id;
                $item['datetime']         = $sale->created_at ? $sale->created_at->format('Y-m-d H:i:s') : $sale->date;
                $item['date']             = $sale->date;
                $item['Ref']              = $sale->Ref;
                $item['warehouse_name']   = $sale->warehouse ? $sale->warehouse->name : 'N/A';
                $item['customer_name']    = $sale->client ? $sale->client->name : 'N/A';
                $item['client_name']      = $item['customer_name'];
                $item['customer_address'] = $sale->client ? $sale->client->adresse : 'N/A';
                $item['customer_phone']   = $sale->client ? $sale->client->phone : 'N/A';
                $item['product_name']     = 'N/A';
                $item['product_qty']      = 0;
                $item['product_unit']     = 'N/A';
                $item['product_cost']     = 0;
                $item['product_price']    = 0;
                $item['paid_amount']      = $adjustedPaidAmount;
                $item['shipping']         = $displayShipping;
                $item['original_shipping'] = $saleShipping;
                $item['shipping_is_free'] = $shippingIsFree;
                $item['payment_method']   = $sale->payment_method ?? 'N/A';
                $item['seller_name']      = $sale->user ? $sale->user->username : 'N/A';
                $item['seller_phone']     = $sale->user ? ($sale->user->phone ?? 'N/A') : 'N/A';
                $item['returned_product'] = $returnedProductsBySale[$sale->id] ?? '';
                $item['returned_products'] = $returnedProductsBySale[$sale->id] ?? '';
                $item['returned_quantity'] = 0;
                $item['returned_total']   = 0;
                $item['has_return']       = ! empty($item['returned_product']);
                $item['sale_has_return']  = $saleHasReturn;

                $data[] = $item;
            }
        }

        // FIX #4 & #5: Compute grand totals from ALL rows before pagination
        // grandTotalPaid = product revenue only (shipping already excluded above)
        // Profit = Total Paid Amount - Total Cost - Total Shipping
        $grandTotalProfit    = $grandTotalPaid - $grandTotalCost - $grandTotalShipping;
        // Cash Difference = Profit - Sale By KHQR
        //                 = net profit minus what was already collected digitally
        $grandCashDifference = $grandTotalProfit - $grandSaleByKhqr;

        // Manual pagination for flattened data
        $totalRows = count($data);
        if ($perPage == '-1') {
            $perPage = $totalRows;
        }
        $data = array_slice($data, $offSet, $perPage);

        $customers = Client::where('deleted_at', '=', null)->get(['id', 'name']);
        $sellers = $isMobileRoute
            ? User::where('deleted_at', '=', null)
                ->where('id', $user->id)
                ->get(['id', 'username', 'phone'])
            : User::where('deleted_at', '=', null)
                ->get(['id', 'username', 'phone']);

        // get warehouses assigned to user
        $user_auth = $user;
        if ($user_auth->is_all_warehouses) {
            $warehouses = Warehouse::where('deleted_at', '=', null)->get(['id', 'name']);
        } else {
            $warehouses_id = UserWarehouse::where('user_id', $user_auth->id)->pluck('warehouse_id')->toArray();
            $warehouses = Warehouse::where('deleted_at', '=', null)->whereIn('id', $warehouses_id)->get(['id', 'name']);
        }

        return response()->json(
            [
                'totalRows'    => $totalRows,
                'sales'        => $data,
                'sellers'      => $sellers,
                'customers'    => $customers,
                'warehouses'   => $warehouses,
                // FIX #4 & #5: Grand totals computed over ALL pages so frontend footer is always correct
                'grandTotals'  => [
                    'totalCost'       => round($grandTotalCost, 2),
                    'totalPaidAmount' => round($grandTotalPaid, 2),
                    'totalShipping'   => round($grandTotalShipping, 2),
                    'totalProfit'     => round($grandTotalProfit, 2),
                    'saleByCash'      => round($grandSaleByCash, 2),
                    'saleByKhqr'      => round($grandSaleByKhqr, 2),
                    'cashDifference'  => round($grandCashDifference, 2),
                ],
            ]
        );
    }

    /**
     * Warranty / Guarantee Report: sold items with warranty_date and guarantee_date.
     * Filters: date range (sale date), customer, warehouse, product, status (Active / Expiring Soon / Expired).
     */
    public function warrantyGuaranteeReport(Request $request)
    {
        $this->authorizeForUser($request->user('api'), 'report_warranty', Sale::class);

        $perPage = $request->limit ?? 10;
        $pageStart = (int) \Request::get('page', 1);
        $offSet = ($pageStart * $perPage) - $perPage;
        $order = $request->SortField ?? 'sale_date';
        $dir = in_array(strtolower($request->SortType ?? 'desc'), ['asc', 'desc'], true) ? $request->SortType : 'desc';
        $allowedSort = ['sale_date', 'Ref', 'product_name', 'quantity', 'client_name', 'warehouse_name', 'warranty_date', 'guarantee_date', 'days_remaining', 'status'];
        if (! in_array($order, $allowedSort, true)) {
            $order = 'sale_date';
        }

        $helpers = new helpers;
        $today = Carbon::today();
        // Normalize date filter to Y-m-d (avoid timezone/invalid input issues)
        $from = $request->filled('from')
            ? Carbon::parse($request->from)->toDateString()
            : $today->copy()->subDays(30)->toDateString();
        $to = $request->filled('to')
            ? Carbon::parse($request->to)->toDateString()
            : $today->toDateString();
        if ($from > $to) {
            $from = $to;
        }

        $baseQuery = SaleDetail::query()
            ->whereHas('sale', function ($q) use ($helpers, $from, $to) {
                $q->whereNull('sales.deleted_at')
                    ->whereBetween('sales.date', [$from, $to]);
                $helpers->Show_Records($q);
            });

        if ($request->filled('client_id')) {
            $baseQuery->whereHas('sale', fn ($q) => $q->where('sales.client_id', $request->client_id));
        }
        if ($request->filled('warehouse_id')) {
            $baseQuery->whereHas('sale', fn ($q) => $q->where('sales.warehouse_id', $request->warehouse_id));
        }
        if ($request->filled('product_id')) {
            $baseQuery->where('sale_details.product_id', $request->product_id);
        }
        if ($request->filled('search')) {
            $term = '%'.$request->search.'%';
            $baseQuery->where(function ($q) use ($term) {
                $q->whereHas('sale', fn ($sq) => $sq->where('Ref', 'like', $term)->orWhereHas('client', fn ($cq) => $cq->where('name', 'like', $term)))
                    ->orWhereHas('product', fn ($pq) => $pq->where('name', 'like', $term));
            });
        }

        $sortFieldMap = [
            'sale_date' => 'sales.date',
            'Ref' => 'sales.Ref',
            'product_name' => 'products.name',
            'quantity' => 'sale_details.quantity',
            'client_name' => 'clients.name',
            'warehouse_name' => 'warehouses.name',
            'warranty_date' => 'sale_details.warranty_date',
            'guarantee_date' => 'sale_details.guarantee_date',
        ];
        $orderColumn = $sortFieldMap[$order] ?? 'sales.date';
        if (in_array($order, ['days_remaining', 'status'], true)) {
            $orderColumn = 'sale_details.warranty_date';
        }

        // When status filter is set we must compute status in PHP, so fetch all matching rows then filter and paginate in memory
        $fetchLimit = $request->filled('status') ? 100000 : (int) $perPage;
        $fetchOffset = $request->filled('status') ? 0 : $offSet;

        $getQuery = (clone $baseQuery)->join('sales', 'sale_details.sale_id', '=', 'sales.id')
            ->join('products', 'sale_details.product_id', '=', 'products.id')
            ->join('clients', 'sales.client_id', '=', 'clients.id')
            ->join('warehouses', 'sales.warehouse_id', '=', 'warehouses.id')
            ->select([
                'sale_details.id',
                'sale_details.sale_id',
                'sale_details.product_id',
                'sale_details.quantity',
                'sale_details.warranty_date',
                'sale_details.guarantee_date',
                'sale_details.date as detail_date',
                'sales.date as sale_date',
                'sales.Ref',
                'products.name as product_name',
                'clients.name as client_name',
                'warehouses.name as warehouse_name',
            ])
            ->orderBy($orderColumn, $dir)
            ->offset($fetchOffset)
            ->limit($fetchLimit);
        $items = $getQuery->get();

        $data = [];
        $expiringDays = 30;
        $allFiltered = [];
        foreach ($items as $row) {
            $warrantyDate = $row->warranty_date ? Carbon::parse($row->warranty_date) : null;
            $guaranteeDate = $row->guarantee_date ? Carbon::parse($row->guarantee_date) : null;
            $futureDates = array_filter([
                $warrantyDate && $warrantyDate->gte($today) ? $today->diffInDays($warrantyDate) : null,
                $guaranteeDate && $guaranteeDate->gte($today) ? $today->diffInDays($guaranteeDate) : null,
            ], fn ($d) => $d !== null);
            $daysRemaining = $futureDates !== [] ? (int) min($futureDates) : (($warrantyDate && $warrantyDate->lt($today)) || ($guaranteeDate && $guaranteeDate->lt($today)) ? 0 : null);
            if ($daysRemaining === null && $warrantyDate && $guaranteeDate && $warrantyDate->lt($today) && $guaranteeDate->lt($today)) {
                $daysRemaining = 0;
            }
            $status = 'active';
            if ($daysRemaining === null) {
                $status = (! $warrantyDate && ! $guaranteeDate) ? 'no_coverage' : 'active';
            } elseif ($daysRemaining <= 0) {
                $status = 'expired';
            } elseif ($daysRemaining <= $expiringDays) {
                $status = 'expiring_soon';
            }

            if ($request->filled('status')) {
                $want = $request->status;
                if ($want !== $status) {
                    continue;
                }
            }

            $item = [
                'id' => $row->id,
                'sale_id' => $row->sale_id,
                'Ref' => $row->Ref,
                'sale_date' => $row->sale_date,
                'product_name' => $row->product_name,
                'quantity' => (float) $row->quantity,
                'client_name' => $row->client_name,
                'warehouse_name' => $row->warehouse_name,
                'warranty_date' => $row->warranty_date,
                'guarantee_date' => $row->guarantee_date,
                'days_remaining' => $daysRemaining,
                'status' => $status,
            ];
            $allFiltered[] = $item;
        }

        if ($request->filled('status')) {
            $totalRows = count($allFiltered);
            $data = array_slice($allFiltered, $offSet, (int) $perPage);
        } else {
            $totalRows = $baseQuery->count();
            $data = $allFiltered;
        }

        if ($perPage === '-1' || $perPage < 1) {
            $perPage = max(1, $totalRows);
        }

        $customers = Client::where('deleted_at', null)->get(['id', 'name']);
        $user_auth = auth()->user();
        if ($user_auth->is_all_warehouses) {
            $warehouses = Warehouse::where('deleted_at', null)->get(['id', 'name']);
        } else {
            $warehouses_id = UserWarehouse::where('user_id', $user_auth->id)->pluck('warehouse_id')->toArray();
            $warehouses = Warehouse::where('deleted_at', null)->whereIn('id', $warehouses_id)->get(['id', 'name']);
        }
        $products = Product::where('deleted_at', null)->get(['id', 'name']);

        return response()->json([
            'totalRows' => $totalRows,
            'rows' => $data,
            'customers' => $customers,
            'warehouses' => $warehouses,
            'products' => $products,
        ]);
    }

    // ----------------- Providers Report -----------------------\\

    public function Providers_Report(request $request)
    {

        $this->authorizeForUser($request->user('api'), 'Reports_suppliers', Provider::class);
        // How many items do you want to display.
        $perPage = $request->limit;
        $pageStart = \Request::get('page', 1);
        // Start displaying items from this number;
        $offSet = ($pageStart * $perPage) - $perPage;
        $order = $request->SortField;
        $dir = $request->SortType;
        $data = [];

        $providers = Provider::where('deleted_at', '=', null)
        // Search With Multiple Param
            ->where(function ($query) use ($request) {
                return $query->when($request->filled('search'), function ($query) use ($request) {
                    return $query->where('name', 'LIKE', "%{$request->search}%")
                        ->orWhere('code', 'LIKE', "%{$request->search}%")
                        ->orWhere('phone', 'LIKE', "%{$request->search}%");
                });
            });

        $totalRows = $providers->count();
        if ($perPage == '-1') {
            $perPage = $totalRows;
        }
        $providers = $providers->offset($offSet)
            ->limit($perPage)
            ->orderBy($order, $dir)
            ->get();

        foreach ($providers as $provider) {
            $item['total_purchase'] = DB::table('purchases')
                ->where('deleted_at', '=', null)
                ->where('provider_id', $provider->id)
                ->count();

            $item['total_amount'] = DB::table('purchases')
                ->where('deleted_at', '=', null)
                ->where('statut', 'received')
                ->where('provider_id', $provider->id)
                ->sum('GrandTotal');

            $item['total_paid'] = DB::table('purchases')
                ->where('deleted_at', '=', null)
                ->where('statut', 'received')
                ->where('provider_id', $provider->id)
                ->sum('paid_amount');

            $item['due'] = $item['total_amount'] - $item['total_paid'];

            $item['total_amount_return'] = DB::table('purchase_returns')
                ->where('deleted_at', '=', null)
                ->where('provider_id', $provider->id)
                ->sum('GrandTotal');

            $item['total_paid_return'] = DB::table('purchase_returns')
                ->where('deleted_at', '=', null)
                ->where('provider_id', $provider->id)
                ->sum('paid_amount');

            $item['return_Due'] = $item['total_amount_return'] - $item['total_paid_return'];

            $item['id'] = $provider->id;
            $item['name'] = $provider->name;
            $item['phone'] = $provider->phone;
            $item['code'] = $provider->code;

            $data[] = $item;
        }

        return response()->json([
            'report' => $data,
            'totalRows' => $totalRows,
        ]);

    }

    // -------------------- Get Purchases By Provider -------------\\

    public function Purchases_Provider(request $request)
    {

        $this->authorizeForUser($request->user('api'), 'Reports_suppliers', Provider::class);
        // How many items do you want to display.
        $perPage = $request->limit;
        $pageStart = \Request::get('page', 1);
        // Start displaying items from this number;
        $offSet = ($pageStart * $perPage) - $perPage;
        $data = [];

        $user = Auth::user();
        // New way: Check user's record_view field (user-level boolean)
        // Backward compatibility: If record_view is null, fall back to role permission check
        $ShowRecord = $user->hasRecordView();

        $purchases = Purchase::where('deleted_at', '=', null)
            ->with('provider', 'warehouse')
            ->where('provider_id', $request->id)
            ->where(function ($query) use ($ShowRecord) {
                if (! $ShowRecord) {
                    return $query->where('user_id', '=', Auth::user()->id);
                }
            })
             // Search With Multiple Param
            ->where(function ($query) use ($request) {
                return $query->when($request->filled('search'), function ($query) use ($request) {
                    return $query->where('Ref', 'LIKE', "%{$request->search}%")
                        ->orWhere('statut', 'LIKE', "%{$request->search}%")
                        ->orWhere('payment_statut', 'like', "$request->search")
                        ->orWhere(function ($query) use ($request) {
                            return $query->whereHas('provider', function ($q) use ($request) {
                                $q->where('name', 'LIKE', "%{$request->search}%");
                            });
                        })
                        ->orWhere(function ($query) use ($request) {
                            return $query->whereHas('warehouse', function ($q) use ($request) {
                                $q->where('name', 'LIKE', "%{$request->search}%");
                            });
                        });
                });
            });

        $totalRows = $purchases->count();
        if ($perPage == '-1') {
            $perPage = $totalRows;
        }
        $purchases = $purchases->offset($offSet)
            ->limit($perPage)
            ->orderBy('id', 'desc')
            ->get();

        foreach ($purchases as $purchase) {
            $item['id'] = $purchase->id;
            $item['Ref'] = $purchase->Ref;
            $item['warehouse_name'] = $purchase['warehouse']->name;
            $item['provider_name'] = $purchase['provider']->name;
            $item['statut'] = $purchase->statut;
            $item['GrandTotal'] = $purchase->GrandTotal;
            $item['paid_amount'] = $purchase->paid_amount;
            $item['due'] = $purchase->GrandTotal - $purchase->paid_amount;
            $item['payment_status'] = $purchase->payment_statut;

            $data[] = $item;
        }

        return response()->json([
            'totalRows' => $totalRows,
            'purchases' => $data,
        ]);

    }

    // -------------------- Get Payments By Provider -------------\\

    public function Payments_Provider(request $request)
    {

        $this->authorizeForUser($request->user('api'), 'Reports_suppliers', Provider::class);

        // How many items do you want to display.
        $perPage = $request->limit;
        $pageStart = \Request::get('page', 1);
        // Start displaying items from this number;
        $offSet = ($pageStart * $perPage) - $perPage;
        $data = [];

        $user = Auth::user();
        // New way: Check user's record_view field (user-level boolean)
        // Backward compatibility: If record_view is null, fall back to role permission check
        $ShowRecord = $user->hasRecordView();

        $payments = DB::table('payment_purchases')
            ->where(function ($query) use ($ShowRecord) {
                if (! $ShowRecord) {
                    return $query->where('user_id', '=', Auth::user()->id);
                }
            })
            ->where('payment_purchases.deleted_at', '=', null)
            ->join('purchases', 'payment_purchases.purchase_id', '=', 'purchases.id')
            ->join('payment_methods', 'payment_purchases.payment_method_id', '=', 'payment_methods.id')
            ->where('purchases.provider_id', $request->id)
             // Search With Multiple Param
            ->where(function ($query) use ($request) {
                return $query->when($request->filled('search'), function ($query) use ($request) {
                    return $query->where('payment_purchases.Ref', 'LIKE', "%{$request->search}%")
                        ->orWhere('payment_purchases.date', 'LIKE', "%{$request->search}%")
                        ->orWhere('payment_methods.name', 'LIKE', "%{$request->search}%");
                });
            })
            ->select(
                'payment_purchases.date', 'payment_purchases.Ref AS Ref', 'purchases.Ref AS purchase_Ref',
                'payment_methods.name as payment_method', 'payment_purchases.montant'
            );

        $totalRows = $payments->count();
        if ($perPage == '-1') {
            $perPage = $totalRows;
        }
        $payments = $payments->offset($offSet)
            ->limit($perPage)
            ->orderBy('payment_purchases.id', 'desc')
            ->get();

        return response()->json([
            'payments' => $payments,
            'totalRows' => $totalRows,
        ]);
    }

    // -------------------- Get Returns By Providers -------------\\

    public function Returns_Provider(request $request)
    {

        $this->authorizeForUser($request->user('api'), 'Reports_suppliers', Provider::class);

        // How many items do you want to display.
        $perPage = $request->limit;
        $pageStart = \Request::get('page', 1);
        // Start displaying items from this number;
        $offSet = ($pageStart * $perPage) - $perPage;
        $data = [];

        $user = Auth::user();
        // New way: Check user's record_view field (user-level boolean)
        // Backward compatibility: If record_view is null, fall back to role permission check
        $ShowRecord = $user->hasRecordView();

        $PurchaseReturn = PurchaseReturn::where('deleted_at', '=', null)
            ->with('purchase', 'provider', 'warehouse')
            ->where('provider_id', $request->id)
            ->where(function ($query) use ($ShowRecord) {
                if (! $ShowRecord) {
                    return $query->where('user_id', '=', Auth::user()->id);
                }
            })
            // Search With Multiple Param
            ->where(function ($query) use ($request) {
                return $query->when($request->filled('search'), function ($query) use ($request) {
                    return $query->where('Ref', 'LIKE', "%{$request->search}%")
                        ->orWhere('statut', 'LIKE', "%{$request->search}%")
                        ->orWhere('payment_statut', 'like', "$request->search")
                        ->orWhere(function ($query) use ($request) {
                            return $query->whereHas('provider', function ($q) use ($request) {
                                $q->where('name', 'LIKE', "%{$request->search}%");
                            });
                        })
                        ->orWhere(function ($query) use ($request) {
                            return $query->whereHas('purchase', function ($q) use ($request) {
                                $q->where('Ref', 'LIKE', "%{$request->search}%");
                            });
                        })
                        ->orWhere(function ($query) use ($request) {
                            return $query->whereHas('warehouse', function ($q) use ($request) {
                                $q->where('name', 'LIKE', "%{$request->search}%");
                            });
                        });
                });
            });

        $totalRows = $PurchaseReturn->count();
        if ($perPage == '-1') {
            $perPage = $totalRows;
        }
        $PurchaseReturn = $PurchaseReturn->offset($offSet)
            ->limit($perPage)
            ->orderBy('id', 'desc')
            ->get();

        foreach ($PurchaseReturn as $Purchase_Return) {
            $item['id'] = $Purchase_Return->id;
            $item['Ref'] = $Purchase_Return->Ref;
            $item['statut'] = $Purchase_Return->statut;
            $item['purchase_ref'] = $Purchase_Return['purchase'] ? $Purchase_Return['purchase']->Ref : '---';
            $item['purchase_id'] = $Purchase_Return['purchase'] ? $Purchase_Return['purchase']->id : null;
            $item['provider_name'] = $Purchase_Return['provider']->name;
            $item['warehouse_name'] = $Purchase_Return['warehouse']->name;
            $item['GrandTotal'] = $Purchase_Return->GrandTotal;
            $item['paid_amount'] = $Purchase_Return->paid_amount;
            $item['due'] = $Purchase_Return->GrandTotal - $Purchase_Return->paid_amount;
            $item['payment_status'] = $Purchase_Return->payment_statut;

            $data[] = $item;
        }

        return response()->json([
            'totalRows' => $totalRows,
            'returns_supplier' => $data,
        ]);

    }

    // -------------------- Top 5 Suppliers -------------\\

    public function ToProviders(Request $request)
    {

        $this->authorizeForUser($request->user('api'), 'Reports_suppliers', Provider::class);

        $results = DB::table('purchases')->where('purchases.deleted_at', '=', null)
            ->join('providers', 'purchases.provider_id', '=', 'providers.id')
            ->select(DB::raw('providers.name'), DB::raw('count(*) as count'))
            ->groupBy('providers.name')
            ->orderBy('count', 'desc')
            ->take(5)
            ->get();

        $data = [];
        $providers = [];
        foreach ($results as $result) {
            $providers[] = $result->name;
            $data[] = $result->count;
        }
        $data[] = 0;

        return response()->json(['providers' => $providers, 'data' => $data]);
    }

    // ----------------- Warehouse Report By ID-----------------------\\

    public function Warehouse_Report(request $request)
    {

        $this->authorizeForUser($request->user('api'), 'WarehouseStock', Product::class);

        $data['sales'] = Sale::where('deleted_at', '=', null)
            ->where(function ($query) use ($request) {
                return $query->when($request->filled('warehouse_id'), function ($query) use ($request) {
                    return $query->where('warehouse_id', $request->warehouse_id);
                });
            })->count();

        $data['purchases'] = Purchase::where('deleted_at', '=', null)
            ->where(function ($query) use ($request) {
                return $query->when($request->filled('warehouse_id'), function ($query) use ($request) {
                    return $query->where('warehouse_id', $request->warehouse_id);
                });
            })->count();

        $data['ReturnPurchase'] = PurchaseReturn::where('deleted_at', '=', null)
            ->where(function ($query) use ($request) {
                return $query->when($request->filled('warehouse_id'), function ($query) use ($request) {
                    return $query->where('warehouse_id', $request->warehouse_id);
                });
            })->count();

        $data['ReturnSale'] = SaleReturn::where('deleted_at', '=', null)
            ->where(function ($query) use ($request) {
                return $query->when($request->filled('warehouse_id'), function ($query) use ($request) {
                    return $query->where('warehouse_id', $request->warehouse_id);
                });
            })->count();

        // get warehouses assigned to user
        $user_auth = auth()->user();
        if ($user_auth->is_all_warehouses) {
            $warehouses = Warehouse::where('deleted_at', '=', null)->get(['id', 'name']);
        } else {
            $warehouses_id = UserWarehouse::where('user_id', $user_auth->id)->pluck('warehouse_id')->toArray();
            $warehouses = Warehouse::where('deleted_at', '=', null)->whereIn('id', $warehouses_id)->get(['id', 'name']);
        }

        return response()->json([
            'data' => $data,
            'warehouses' => $warehouses,
        ], 200);

    }

    // -------------------- Get Sales By Warehouse -------------\\

    public function Sales_Warehouse(request $request)
    {

        $this->authorizeForUser($request->user('api'), 'WarehouseStock', Product::class);
        // How many items do you want to display.
        $perPage = $request->limit;
        $pageStart = \Request::get('page', 1);
        // Start displaying items from this number;
        $offSet = ($pageStart * $perPage) - $perPage;
        $data = [];

        $user = Auth::user();
        // New way: Check user's record_view field (user-level boolean)
        // Backward compatibility: If record_view is null, fall back to role permission check
        $ShowRecord = $user->hasRecordView();

        $sales = Sale::where('deleted_at', '=', null)->with('client', 'warehouse')
            ->where(function ($query) use ($ShowRecord) {
                if (! $ShowRecord) {
                    return $query->where('user_id', '=', Auth::user()->id);
                }
            })
            ->where(function ($query) use ($request) {
                return $query->when($request->filled('warehouse_id'), function ($query) use ($request) {
                    return $query->where('warehouse_id', $request->warehouse_id);
                });
            })
        // Search With Multiple Param
            ->where(function ($query) use ($request) {
                return $query->when($request->filled('search'), function ($query) use ($request) {
                    return $query->where('Ref', 'LIKE', "%{$request->search}%")
                        ->orWhere('statut', 'LIKE', "%{$request->search}%")
                        ->orWhere('GrandTotal', $request->search)
                        ->orWhere('payment_statut', 'like', "$request->search")
                        ->orWhere(function ($query) use ($request) {
                            return $query->whereHas('client', function ($q) use ($request) {
                                $q->where('name', 'LIKE', "%{$request->search}%");
                            });
                        });
                });
            });

        $totalRows = $sales->count();
        if ($perPage == '-1') {
            $perPage = $totalRows;
        }
        $sales = $sales->offset($offSet)
            ->limit($perPage)
            ->orderBy('id', 'desc')
            ->get();

        foreach ($sales as $sale) {
            $item['id'] = $sale->id;
            $item['date'] = $sale->date;
            $item['Ref'] = $sale->Ref;
            $item['client_name'] = $sale['client']->name;
            $item['warehouse_name'] = $sale['warehouse']->name;
            $item['statut'] = $sale->statut;
            $item['GrandTotal'] = $sale->GrandTotal ?? 0;
            $item['paid_amount'] = $sale->paid_amount ?? 0;
            $item['due'] = ($item['GrandTotal'] ?? 0) - ($item['paid_amount'] ?? 0);
            $item['payment_status'] = $sale->payment_statut;
            $item['shipping_status'] = $sale->shipping_status;

            $data[] = $item;
        }

        return response()->json([
            'totalRows' => $totalRows,
            'sales' => $data,
        ]);

    }

    // -------------------- Get Quotations By Warehouse -------------\\

    public function Quotations_Warehouse(request $request)
    {

        $this->authorizeForUser($request->user('api'), 'WarehouseStock', Product::class);
        // How many items do you want to display.
        $perPage = $request->limit;
        $pageStart = \Request::get('page', 1);
        // Start displaying items from this number;
        $offSet = ($pageStart * $perPage) - $perPage;
        $data = [];

        $user = Auth::user();
        // New way: Check user's record_view field (user-level boolean)
        // Backward compatibility: If record_view is null, fall back to role permission check
        $ShowRecord = $user->hasRecordView();

        $Quotations = Quotation::where('deleted_at', '=', null)
            ->with('client', 'warehouse')
            ->where(function ($query) use ($ShowRecord) {
                if (! $ShowRecord) {
                    return $query->where('user_id', '=', Auth::user()->id);
                }
            })
            ->where(function ($query) use ($request) {
                return $query->when($request->filled('warehouse_id'), function ($query) use ($request) {
                    return $query->where('warehouse_id', $request->warehouse_id);
                });
            })
        // Search With Multiple Param
            ->where(function ($query) use ($request) {
                return $query->when($request->filled('search'), function ($query) use ($request) {
                    return $query->where('Ref', 'LIKE', "%{$request->search}%")
                        ->orWhere('statut', 'LIKE', "%{$request->search}%")
                        ->orWhere('GrandTotal', $request->search)
                        ->orWhere(function ($query) use ($request) {
                            return $query->whereHas('client', function ($q) use ($request) {
                                $q->where('name', 'LIKE', "%{$request->search}%");
                            });
                        });
                });
            });
        $totalRows = $Quotations->count();
        if ($perPage == '-1') {
            $perPage = $totalRows;
        }
        $Quotations = $Quotations->offset($offSet)
            ->limit($perPage)
            ->orderBy('id', 'desc')
            ->get();

        foreach ($Quotations as $Quotation) {
            $item['id'] = $Quotation->id;
            $item['date'] = $Quotation->date;
            $item['Ref'] = $Quotation->Ref;
            $item['warehouse_name'] = $Quotation['warehouse']->name;
            $item['client_name'] = $Quotation['client']->name;
            $item['statut'] = $Quotation->statut;
            $item['GrandTotal'] = $Quotation->GrandTotal;

            $data[] = $item;
        }

        return response()->json([
            'quotations' => $data,
            'totalRows' => $totalRows,
        ]);
    }

    // -------------------- Get Returns Sale By Warehouse -------------\\

    public function Returns_Sale_Warehouse(request $request)
    {

        $this->authorizeForUser($request->user('api'), 'WarehouseStock', Product::class);
        // How many items do you want to display.
        $perPage = $request->limit;
        $pageStart = \Request::get('page', 1);
        // Start displaying items from this number;
        $offSet = ($pageStart * $perPage) - $perPage;
        $data = [];

        //  Check If User Has Permission Show All Records
        $user = Auth::user();
        // New way: Check user's record_view field (user-level boolean)
        // Backward compatibility: If record_view is null, fall back to role permission check
        $ShowRecord = $user->hasRecordView();

        $SaleReturn = SaleReturn::where('deleted_at', '=', null)
            ->with('sale', 'client', 'warehouse')
            ->where(function ($query) use ($ShowRecord) {
                if (! $ShowRecord) {
                    return $query->where('user_id', '=', Auth::user()->id);
                }
            })
            ->where(function ($query) use ($request) {
                return $query->when($request->filled('warehouse_id'), function ($query) use ($request) {
                    return $query->where('warehouse_id', $request->warehouse_id);
                });
            })
        // Search With Multiple Param
            ->where(function ($query) use ($request) {
                return $query->when($request->filled('search'), function ($query) use ($request) {
                    return $query->where('Ref', 'LIKE', "%{$request->search}%")
                        ->orWhere('statut', 'LIKE', "%{$request->search}%")
                        ->orWhere('GrandTotal', $request->search)
                        ->orWhere('payment_statut', 'like', "$request->search")

                        ->orWhere(function ($query) use ($request) {
                            return $query->whereHas('sale', function ($q) use ($request) {
                                $q->where('Ref', 'LIKE', "%{$request->search}%");
                            });
                        })
                        ->orWhere(function ($query) use ($request) {
                            return $query->whereHas('client', function ($q) use ($request) {
                                $q->where('name', 'LIKE', "%{$request->search}%");
                            });
                        });
                });
            });

        $totalRows = $SaleReturn->count();
        if ($perPage == '-1') {
            $perPage = $totalRows;
        }
        $SaleReturn = $SaleReturn->offset($offSet)
            ->limit($perPage)
            ->orderBy('id', 'desc')
            ->get();

        foreach ($SaleReturn as $Sale_Return) {
            $item['id'] = $Sale_Return->id;
            $item['warehouse_name'] = $Sale_Return['warehouse']->name;
            $item['Ref'] = $Sale_Return->Ref;
            $item['statut'] = $Sale_Return->statut;
            $item['client_name'] = $Sale_Return['client']->name;
            $item['sale_ref'] = $Sale_Return['sale'] ? $Sale_Return['sale']->Ref : '---';
            $item['sale_id'] = $Sale_Return['sale'] ? $Sale_Return['sale']->id : null;
            $item['GrandTotal'] = $Sale_Return->GrandTotal ?? 0;
            $item['paid_amount'] = $Sale_Return->paid_amount ?? 0;
            $item['due'] = ($item['GrandTotal'] ?? 0) - ($item['paid_amount'] ?? 0);
            $item['payment_status'] = $Sale_Return->payment_statut;

            $data[] = $item;
        }

        return response()->json([
            'totalRows' => $totalRows,
            'returns_sale' => $data,
        ]);
    }

    // -------------------- Get Returns Purchase By Warehouse -------------\\

    public function Returns_Purchase_Warehouse(request $request)
    {

        $this->authorizeForUser($request->user('api'), 'WarehouseStock', Product::class);
        // How many items do you want to display.
        $perPage = $request->limit;
        $pageStart = \Request::get('page', 1);
        // Start displaying items from this number;
        $offSet = ($pageStart * $perPage) - $perPage;
        $data = [];

        //  Check If User Has Permission Show All Records
        $user = Auth::user();
        // New way: Check user's record_view field (user-level boolean)
        // Backward compatibility: If record_view is null, fall back to role permission check
        $ShowRecord = $user->hasRecordView();

        $PurchaseReturn = PurchaseReturn::where('deleted_at', '=', null)
            ->with('purchase', 'provider', 'warehouse')
            ->where(function ($query) use ($ShowRecord) {
                if (! $ShowRecord) {
                    return $query->where('user_id', '=', Auth::user()->id);
                }
            })
            ->orWhere(function ($query) use ($request) {
                return $query->whereHas('purchase', function ($q) use ($request) {
                    $q->where('Ref', 'LIKE', "%{$request->search}%");
                });
            })
            ->where(function ($query) use ($request) {
                return $query->when($request->filled('warehouse_id'), function ($query) use ($request) {
                    return $query->where('warehouse_id', $request->warehouse_id);
                });
            })
        // Search With Multiple Param
            ->where(function ($query) use ($request) {
                return $query->when($request->filled('search'), function ($query) use ($request) {
                    return $query->where('Ref', 'LIKE', "%{$request->search}%")
                        ->orWhere('statut', 'LIKE', "%{$request->search}%")
                        ->orWhere('GrandTotal', $request->search)
                        ->orWhere('payment_statut', 'like', "$request->search")
                        ->orWhere(function ($query) use ($request) {
                            return $query->whereHas('provider', function ($q) use ($request) {
                                $q->where('name', 'LIKE', "%{$request->search}%");
                            });
                        });
                });
            });

        $totalRows = $PurchaseReturn->count();
        if ($perPage == '-1') {
            $perPage = $totalRows;
        }
        $PurchaseReturn = $PurchaseReturn->offset($offSet)
            ->limit($perPage)
            ->orderBy('id', 'desc')
            ->get();

        foreach ($PurchaseReturn as $Purchase_Return) {
            $item['id'] = $Purchase_Return->id;
            $item['Ref'] = $Purchase_Return->Ref;
            $item['statut'] = $Purchase_Return->statut;
            $item['purchase_ref'] = $Purchase_Return['purchase'] ? $Purchase_Return['purchase']->Ref : '---';
            $item['purchase_id'] = $Purchase_Return['purchase'] ? $Purchase_Return['purchase']->id : null;
            $item['warehouse_name'] = $Purchase_Return['warehouse']->name;
            $item['provider_name'] = $Purchase_Return['provider']->name;
            $item['GrandTotal'] = $Purchase_Return->GrandTotal ?? 0;
            $item['paid_amount'] = $Purchase_Return->paid_amount ?? 0;
            $item['due'] = ($item['GrandTotal'] ?? 0) - ($item['paid_amount'] ?? 0);
            $item['payment_status'] = $Purchase_Return->payment_statut;

            $data[] = $item;
        }

        return response()->json([
            'totalRows' => $totalRows,
            'returns_purchase' => $data,
        ]);
    }

    // -------------------- Get Expenses By Warehouse -------------\\

    public function Expenses_Warehouse(request $request)
    {

        $this->authorizeForUser($request->user('api'), 'WarehouseStock', Product::class);
        // How many items do you want to display.
        $perPage = $request->limit;
        $pageStart = \Request::get('page', 1);
        // Start displaying items from this number;
        $offSet = ($pageStart * $perPage) - $perPage;
        $data = [];

        //  Check If User Has Permission Show All Records
        $user = Auth::user();
        // New way: Check user's record_view field (user-level boolean)
        // Backward compatibility: If record_view is null, fall back to role permission check
        $ShowRecord = $user->hasRecordView();

        $Expenses = Expense::where('deleted_at', '=', null)
            ->with('expense_category', 'warehouse')
            ->where(function ($query) use ($ShowRecord) {
                if (! $ShowRecord) {
                    return $query->where('user_id', '=', Auth::user()->id);
                }
            })
            ->where(function ($query) use ($request) {
                return $query->when($request->filled('warehouse_id'), function ($query) use ($request) {
                    return $query->where('warehouse_id', $request->warehouse_id);
                });
            })
        // Search With Multiple Param
            ->where(function ($query) use ($request) {
                return $query->when($request->filled('search'), function ($query) use ($request) {
                    return $query->where('Ref', 'LIKE', "%{$request->search}%")
                        ->orWhere('date', 'LIKE', "%{$request->search}%")
                        ->orWhere('details', 'LIKE', "%{$request->search}%")
                        ->orWhere(function ($query) use ($request) {
                            return $query->whereHas('expense_category', function ($q) use ($request) {
                                $q->where('name', 'LIKE', "%{$request->search}%");
                            });
                        });
                });
            });

        $totalRows = $Expenses->count();
        if ($perPage == '-1') {
            $perPage = $totalRows;
        }
        $Expenses = $Expenses->offset($offSet)
            ->limit($perPage)
            ->orderBy('id', 'desc')
            ->get();

        foreach ($Expenses as $Expense) {

            $item['date'] = $Expense->date;
            $item['Ref'] = $Expense->Ref;
            $item['details'] = $Expense->details;
            $item['amount'] = $Expense->amount;
            $item['warehouse_name'] = $Expense['warehouse']->name;
            $item['category_name'] = $Expense['expense_category']->name;
            $data[] = $item;
        }

        return response()->json([
            'totalRows' => $totalRows,
            'expenses' => $data,
        ]);
    }

    // ----------------- Warhouse Count Stock -----------------------\\

    public function Warhouse_Count_Stock(Request $request)
    {
        $this->authorizeForUser($request->user('api'), 'WarehouseStock', Product::class);

        $stock_count = product_warehouse::join('products', 'product_warehouse.product_id', '=', 'products.id')
            ->join('warehouses', 'product_warehouse.warehouse_id', '=', 'warehouses.id')
            ->where('product_warehouse.deleted_at', '=', null)
            ->select(
                DB::raw('count(DISTINCT products.id) as value'),
                DB::raw('warehouses.name as name'),
                DB::raw('(IFNULL(SUM(qte),0)) AS value1'),
            )
            ->where('qte', '>', 0)
            ->groupBy('warehouses.name')
            ->get();

        $stock_value = DB::table('product_warehouse')
            ->leftJoin('products', 'product_warehouse.product_id', '=', 'products.id')
            ->leftJoin('warehouses', 'product_warehouse.warehouse_id', '=', 'warehouses.id')
            ->leftJoin('product_variants', function ($join) {
                $join->on('product_warehouse.product_variant_id', '=', 'product_variants.id')
                    ->whereNotNull('product_warehouse.product_variant_id');
            })
            ->whereNull('product_warehouse.deleted_at')
            ->select(
                DB::raw('SUM(COALESCE(product_variants.price, products.price) * qte) as price'),
                DB::raw('SUM(COALESCE(product_variants.cost, products.cost) * qte) as cost'),
                'warehouses.name as name'
            )
            ->where('qte', '>', 0)
            ->groupBy('warehouses.name')
            ->get();

        $data = [];
        foreach ($stock_value as $key => $value) {
            $item['name'] = $value->name;
            $item['value'] = $value->price;
            $item['value1'] = $value->cost;
            $data[] = $item;
        }

        // get warehouses assigned to user
        $user_auth = auth()->user();
        if ($user_auth->is_all_warehouses) {
            $warehouses = Warehouse::where('deleted_at', '=', null)->get(['id', 'name']);
        } else {
            $warehouses_id = UserWarehouse::where('user_id', $user_auth->id)->pluck('warehouse_id')->toArray();
            $warehouses = Warehouse::where('deleted_at', '=', null)->whereIn('id', $warehouses_id)->get(['id', 'name']);
        }

        // Build Apex-friendly structures (labels + series arrays)
        $count_labels = $stock_count->pluck('name')->values();
        $count_items = $stock_count->pluck('value')->map(function ($v) {
            return (float) $v;
        })->values();
        $count_qty = $stock_count->pluck('value1')->map(function ($v) {
            return (float) $v;
        })->values();

        $value_labels = $stock_value->pluck('name')->values();
        $value_price = $stock_value->pluck('price')->map(function ($v) {
            return (float) $v;
        })->values();
        $value_cost = $stock_value->pluck('cost')->map(function ($v) {
            return (float) $v;
        })->values();

        return response()->json([
            // Original fields (backward compatible)
            'stock_count' => $stock_count,
            'stock_value' => $data,
            'warehouses' => $warehouses,
            // Apex helpers
            'count_labels' => $count_labels,
            'count_items' => $count_items,
            'count_qty' => $count_qty,
            'value_labels' => $value_labels,
            'value_price' => $value_price,
            'value_cost' => $value_cost,
            'warehouse_names' => $warehouses->pluck('name')->values(),
        ]);

    }

    // -------------- Count  Product Quantity Alerts ---------------\\

    public function count_quantity_alert(request $request)
    {

        $products_alerts = product_warehouse::join('products', 'product_warehouse.product_id', '=', 'products.id')
            ->whereRaw('qte <= stock_alert')
            ->count();

        return response()->json($products_alerts);
    }

    // -----------------Profit And Loss ---------------------------\\

    public function ProfitAndLoss(Request $request)
    {
        $this->authorizeForUser($request->user('api'), 'Reports_profit', Client::class);

        $start = Carbon::parse($request->from)->toDateString();
        $end = Carbon::parse($request->to)->toDateString();

        // Warehouses visible to user
        $user = $request->user('api');
        if ($user->is_all_warehouses) {
            $warehouses = Warehouse::whereNull('deleted_at')->get(['id', 'name']);
            $warehouseIds = $warehouses->pluck('id')->all();
        } else {
            $warehouseIds = UserWarehouse::where('user_id', $user->id)->pluck('warehouse_id')->all();
            $warehouses = Warehouse::whereNull('deleted_at')->whereIn('id', $warehouseIds)->get(['id', 'name']);
        }
        $warehouseId = (int) ($request->warehouse_id ?: 0);

        // Helper closures
        $applyWarehouse = fn ($q) => $warehouseId
            ? $q->where('warehouse_id', $warehouseId)
            : $q->whereIn('warehouse_id', $warehouseIds);

        // -------------------- Aggregates --------------------

        // Sales
        $salesAgg = Sale::whereNull('deleted_at')
            ->where('statut', 'completed')
            ->whereBetween('date', [$start, $end])
            ->where($applyWarehouse)
            ->selectRaw('COALESCE(SUM(GrandTotal),0) AS sum, COUNT(*) AS nmbr')
            ->first();

        // Purchases (received)
        $purchAgg = Purchase::whereNull('deleted_at')
            ->where('statut', 'received')
            ->whereBetween('date', [$start, $end])
            ->where($applyWarehouse)
            ->selectRaw('COALESCE(SUM(GrandTotal),0) AS sum, COUNT(*) AS nmbr')
            ->first();

        // Sales returns (received)
        $saleRetAgg = SaleReturn::whereNull('deleted_at')
            ->where('statut', 'received')
            ->whereBetween('date', [$start, $end])
            ->where($applyWarehouse)
            ->selectRaw('COALESCE(SUM(GrandTotal),0) AS sum, COUNT(*) AS nmbr')
            ->first();

        // Purchase returns (completed)
        $purchRetAgg = PurchaseReturn::whereNull('deleted_at')
            ->where('statut', 'completed')
            ->whereBetween('date', [$start, $end])
            ->where($applyWarehouse)
            ->selectRaw('COALESCE(SUM(GrandTotal),0) AS sum, COUNT(*) AS nmbr')
            ->first();

        // Payment sales (JOIN for warehouse filter)
        $paySales = PaymentSale::join('sales as s', 's.id', '=', 'payment_sales.sale_id')
            ->whereNull('payment_sales.deleted_at')
            ->whereBetween('payment_sales.date', [$start, $end])
            ->when($warehouseId, fn ($q) => $q->where('s.warehouse_id', $warehouseId),
                fn ($q) => $q->whereIn('s.warehouse_id', $warehouseIds))
            ->selectRaw('COALESCE(SUM(payment_sales.montant),0) AS sum')
            ->value('sum');

        // Payment sale returns
        $paySaleRet = PaymentSaleReturns::join('sale_returns as sr', 'sr.id', '=', 'payment_sale_returns.sale_return_id')
            ->whereNull('payment_sale_returns.deleted_at')
            ->whereBetween('payment_sale_returns.date', [$start, $end])
            ->when($warehouseId, fn ($q) => $q->where('sr.warehouse_id', $warehouseId),
                fn ($q) => $q->whereIn('sr.warehouse_id', $warehouseIds))
            ->selectRaw('COALESCE(SUM(payment_sale_returns.montant),0) AS sum')
            ->value('sum');

        // Payment purchase returns
        $payPurchRet = PaymentPurchaseReturns::join('purchase_returns as pr', 'pr.id', '=', 'payment_purchase_returns.purchase_return_id')
            ->whereNull('payment_purchase_returns.deleted_at')
            ->whereBetween('payment_purchase_returns.date', [$start, $end])
            ->when($warehouseId, fn ($q) => $q->where('pr.warehouse_id', $warehouseId),
                fn ($q) => $q->whereIn('pr.warehouse_id', $warehouseIds))
            ->selectRaw('COALESCE(SUM(payment_purchase_returns.montant),0) AS sum')
            ->value('sum');

        // Payment purchases
        $payPurch = PaymentPurchase::join('purchases as p', 'p.id', '=', 'payment_purchases.purchase_id')
            ->whereNull('payment_purchases.deleted_at')
            ->whereBetween('payment_purchases.date', [$start, $end])
            ->when($warehouseId, fn ($q) => $q->where('p.warehouse_id', $warehouseId),
                fn ($q) => $q->whereIn('p.warehouse_id', $warehouseIds))
            ->selectRaw('COALESCE(SUM(payment_purchases.montant),0) AS sum')
            ->value('sum');

        // Expenses
        $expenses = Expense::whereNull('deleted_at')
            ->whereBetween('date', [$start, $end])
            ->where($applyWarehouse)
            ->selectRaw('COALESCE(SUM(amount),0) AS sum')
            ->value('sum');

        // -------------------- COGS & Average Cost --------------------
        $cogsPack = $this->calcCogsAndAvgCostFast($start, $end, $warehouseId, $warehouseIds);
        $cogsFIFO = $cogsPack['fifo'];
        $avgCostTotal = $cogsPack['avg'];

        // -------------------- Compose response (numeric; format in UI) --------------------
        $salesSum = (float) $salesAgg->sum;
        $purchSum = (float) $purchAgg->sum;
        $saleRetSum = (float) $saleRetAgg->sum;
        $purchRetSum = (float) $purchRetAgg->sum;

        $data = [
            'sales_sum' => $salesSum,
            'sales_count' => (int) $salesAgg->nmbr,
            'purchases_sum' => (float) $purchSum,
            'purchases_count' => (int) $purchAgg->nmbr,
            'returns_sales_sum' => (float) $saleRetSum,
            'returns_sales_count' => (int) $saleRetAgg->nmbr,
            'returns_purchases_sum' => (float) $purchRetSum,
            'returns_purchases_count' => (int) $purchRetAgg->nmbr,

            'paiement_sales' => (float) $paySales,
            'PaymentSaleReturns' => (float) $paySaleRet,
            'PaymentPurchaseReturns' => (float) $payPurchRet,
            'paiement_purchases' => (float) $payPurch,
            'expenses_sum' => (float) $expenses,

            'product_cost_fifo' => (float) $cogsFIFO,
            'averagecost' => (float) $avgCostTotal,

            'profit_fifo' => $salesSum - $cogsFIFO - $expenses,
            'profit_average_cost' => $salesSum - $avgCostTotal - $expenses,

            'payment_received' => (float) ($paySales + $payPurchRet),
            'payment_sent' => (float) ($payPurch + $paySaleRet + $expenses),
            'paiement_net' => (float) (($paySales + $payPurchRet) - ($payPurch + $paySaleRet + $expenses)),

            'total_revenue' => (float) ($salesSum - $saleRetSum),
        ];

        return response()->json([
            'data' => $data,
            'warehouses' => $warehouses,
        ]);
    }

    // ----------------- Analytics Summary Report -----------------------\\

    public function analyticsSummary(Request $request)
    {
        $this->authorizeForUser($request->user('api'), 'analytics_report', Client::class);

        // Date range (default to last 30 days if not provided)
        $start = $request->filled('from')
            ? Carbon::parse($request->from)->toDateString()
            : Carbon::now()->subDays(29)->toDateString();
        $end = $request->filled('to')
            ? Carbon::parse($request->to)->toDateString()
            : Carbon::now()->toDateString();

        // Warehouses visible to user
        $user = $request->user('api');
        if ($user->is_all_warehouses) {
            $warehouses = Warehouse::whereNull('deleted_at')->get(['id', 'name']);
            $warehouseIds = $warehouses->pluck('id')->all();
        } else {
            $warehouseIds = UserWarehouse::where('user_id', $user->id)->pluck('warehouse_id')->all();
            $warehouses = Warehouse::whereNull('deleted_at')->whereIn('id', $warehouseIds)->get(['id', 'name']);
        }
        $warehouseId = (int) ($request->warehouse_id ?: 0);

        // Helper closures
        $applyWarehouse = fn ($q) => $warehouseId
            ? $q->where('warehouse_id', $warehouseId)
            : $q->whereIn('warehouse_id', $warehouseIds);

        // Helper for transfers (uses from_warehouse_id and to_warehouse_id)
        $applyTransferWarehouse = fn ($q) => $warehouseId
            ? $q->where(function ($query) use ($warehouseId) {
                $query->where('from_warehouse_id', $warehouseId)
                    ->orWhere('to_warehouse_id', $warehouseId);
            })
            : $q->where(function ($query) use ($warehouseIds) {
                $query->whereIn('from_warehouse_id', $warehouseIds)
                    ->orWhereIn('to_warehouse_id', $warehouseIds);
            });

        // -------------------- Closing Stock (Current Stock at End Date) --------------------
        // Closing Stock (By purchase price - using cost)
        $closingStockPurchase = DB::table('product_warehouse as pw')
            ->leftJoin('products as p', 'pw.product_id', '=', 'p.id')
            ->leftJoin('product_variants as pv', function ($join) {
                $join->on('pw.product_variant_id', '=', 'pv.id')
                    ->whereNotNull('pw.product_variant_id');
            })
            ->whereNull('pw.deleted_at')
            ->whereNull('p.deleted_at')
            ->where('p.type', '!=', 'is_service')
            ->when($warehouseId, fn ($q) => $q->where('pw.warehouse_id', $warehouseId),
                fn ($q) => $q->whereIn('pw.warehouse_id', $warehouseIds))
            ->selectRaw('COALESCE(SUM(COALESCE(pv.cost, p.cost, 0) * pw.qte), 0) as total')
            ->value('total');

        // Closing Stock (By sale price - using price)
        $closingStockSale = DB::table('product_warehouse as pw')
            ->leftJoin('products as p', 'pw.product_id', '=', 'p.id')
            ->leftJoin('product_variants as pv', function ($join) {
                $join->on('pw.product_variant_id', '=', 'pv.id')
                    ->whereNotNull('pw.product_variant_id');
            })
            ->whereNull('pw.deleted_at')
            ->whereNull('p.deleted_at')
            ->where('p.type', '!=', 'is_service')
            ->when($warehouseId, fn ($q) => $q->where('pw.warehouse_id', $warehouseId),
                fn ($q) => $q->whereIn('pw.warehouse_id', $warehouseIds))
            ->selectRaw('COALESCE(SUM(COALESCE(pv.price, p.price, 0) * pw.qte), 0) as total')
            ->value('total');

        // -------------------- Calculate Opening Stock by Reversing Period Transactions --------------------
        // Get purchase details for the period (to calculate stock value added)
        $purchaseDetailsValue = DB::table('purchase_details as pd')
            ->join('purchases as p', 'pd.purchase_id', '=', 'p.id')
            ->leftJoin('products as pr', 'pd.product_id', '=', 'pr.id')
            ->leftJoin('product_variants as pv', function ($join) {
                $join->on('pd.product_variant_id', '=', 'pv.id')
                    ->whereNotNull('pd.product_variant_id');
            })
            ->whereNull('p.deleted_at')
            ->where('p.statut', 'received')
            ->whereBetween('p.date', [$start, $end])
            ->where('pr.type', '!=', 'is_service')
            ->when($warehouseId, fn ($q) => $q->where('p.warehouse_id', $warehouseId),
                fn ($q) => $q->whereIn('p.warehouse_id', $warehouseIds))
            ->selectRaw('COALESCE(SUM(COALESCE(pv.cost, pr.cost, 0) * pd.quantity), 0) as total')
            ->value('total');

        // Get sale details for the period (to calculate stock value removed)
        $saleDetailsValue = DB::table('sale_details as sd')
            ->join('sales as s', 'sd.sale_id', '=', 's.id')
            ->leftJoin('products as pr', 'sd.product_id', '=', 'pr.id')
            ->leftJoin('product_variants as pv', function ($join) {
                $join->on('sd.product_variant_id', '=', 'pv.id')
                    ->whereNotNull('sd.product_variant_id');
            })
            ->whereNull('s.deleted_at')
            ->where('s.statut', 'completed')
            ->whereBetween('s.date', [$start, $end])
            ->where('pr.type', '!=', 'is_service')
            ->when($warehouseId, fn ($q) => $q->where('s.warehouse_id', $warehouseId),
                fn ($q) => $q->whereIn('s.warehouse_id', $warehouseIds))
            ->selectRaw('COALESCE(SUM(COALESCE(pv.cost, pr.cost, 0) * sd.quantity), 0) as total')
            ->value('total');

        // Get purchase return details (stock value removed)
        $purchaseReturnDetailsValue = DB::table('purchase_return_details as prd')
            ->join('purchase_returns as pr', 'prd.purchase_return_id', '=', 'pr.id')
            ->leftJoin('products as p', 'prd.product_id', '=', 'p.id')
            ->leftJoin('product_variants as pv', function ($join) {
                $join->on('prd.product_variant_id', '=', 'pv.id')
                    ->whereNotNull('prd.product_variant_id');
            })
            ->whereNull('pr.deleted_at')
            ->where('pr.statut', 'completed')
            ->whereBetween('pr.date', [$start, $end])
            ->where('p.type', '!=', 'is_service')
            ->when($warehouseId, fn ($q) => $q->where('pr.warehouse_id', $warehouseId),
                fn ($q) => $q->whereIn('pr.warehouse_id', $warehouseIds))
            ->selectRaw('COALESCE(SUM(COALESCE(pv.cost, p.cost, 0) * prd.quantity), 0) as total')
            ->value('total');

        // Get sale return details (stock value added back)
        $saleReturnDetailsValue = DB::table('sale_return_details as srd')
            ->join('sale_returns as sr', 'srd.sale_return_id', '=', 'sr.id')
            ->leftJoin('products as p', 'srd.product_id', '=', 'p.id')
            ->leftJoin('product_variants as pv', function ($join) {
                $join->on('srd.product_variant_id', '=', 'pv.id')
                    ->whereNotNull('srd.product_variant_id');
            })
            ->whereNull('sr.deleted_at')
            ->where('sr.statut', 'received')
            ->whereBetween('sr.date', [$start, $end])
            ->where('p.type', '!=', 'is_service')
            ->when($warehouseId, fn ($q) => $q->where('sr.warehouse_id', $warehouseId),
                fn ($q) => $q->whereIn('sr.warehouse_id', $warehouseIds))
            ->selectRaw('COALESCE(SUM(COALESCE(pv.cost, p.cost, 0) * srd.quantity), 0) as total')
            ->value('total');

        // Get adjustment details (net effect on stock)
        $adjustmentDetailsValue = DB::table('adjustment_details as ad')
            ->join('adjustments as a', 'ad.adjustment_id', '=', 'a.id')
            ->leftJoin('products as p', 'ad.product_id', '=', 'p.id')
            ->leftJoin('product_variants as pv', function ($join) {
                $join->on('ad.product_variant_id', '=', 'pv.id')
                    ->whereNotNull('ad.product_variant_id');
            })
            ->whereNull('a.deleted_at')
            ->whereBetween('a.date', [$start, $end])
            ->where('p.type', '!=', 'is_service')
            ->when($warehouseId, fn ($q) => $q->where('a.warehouse_id', $warehouseId),
                fn ($q) => $q->whereIn('a.warehouse_id', $warehouseIds))
            ->selectRaw('COALESCE(SUM(
                CASE 
                    WHEN ad.type = "add" THEN COALESCE(pv.cost, p.cost, 0) * ad.quantity
                    WHEN ad.type = "sub" THEN -COALESCE(pv.cost, p.cost, 0) * ad.quantity
                    ELSE 0
                END
            ), 0) as total')
            ->value('total');

        // Calculate opening stock by purchase price: Closing - Purchases + Sales - Purchase Returns + Sale Returns - Adjustments
        $openingStockPurchase = $closingStockPurchase
            - $purchaseDetailsValue
            + $saleDetailsValue
            - $purchaseReturnDetailsValue
            + $saleReturnDetailsValue
            - $adjustmentDetailsValue;

        // For sale price, we need to calculate similarly but using price instead of cost
        $purchaseDetailsPrice = DB::table('purchase_details as pd')
            ->join('purchases as p', 'pd.purchase_id', '=', 'p.id')
            ->leftJoin('products as pr', 'pd.product_id', '=', 'pr.id')
            ->leftJoin('product_variants as pv', function ($join) {
                $join->on('pd.product_variant_id', '=', 'pv.id')
                    ->whereNotNull('pd.product_variant_id');
            })
            ->whereNull('p.deleted_at')
            ->where('p.statut', 'received')
            ->whereBetween('p.date', [$start, $end])
            ->where('pr.type', '!=', 'is_service')
            ->when($warehouseId, fn ($q) => $q->where('p.warehouse_id', $warehouseId),
                fn ($q) => $q->whereIn('p.warehouse_id', $warehouseIds))
            ->selectRaw('COALESCE(SUM(COALESCE(pv.price, pr.price, 0) * pd.quantity), 0) as total')
            ->value('total');

        $saleDetailsPrice = DB::table('sale_details as sd')
            ->join('sales as s', 'sd.sale_id', '=', 's.id')
            ->leftJoin('products as pr', 'sd.product_id', '=', 'pr.id')
            ->leftJoin('product_variants as pv', function ($join) {
                $join->on('sd.product_variant_id', '=', 'pv.id')
                    ->whereNotNull('sd.product_variant_id');
            })
            ->whereNull('s.deleted_at')
            ->where('s.statut', 'completed')
            ->whereBetween('s.date', [$start, $end])
            ->where('pr.type', '!=', 'is_service')
            ->when($warehouseId, fn ($q) => $q->where('s.warehouse_id', $warehouseId),
                fn ($q) => $q->whereIn('s.warehouse_id', $warehouseIds))
            ->selectRaw('COALESCE(SUM(COALESCE(pv.price, pr.price, 0) * sd.quantity), 0) as total')
            ->value('total');

        $purchaseReturnDetailsPrice = DB::table('purchase_return_details as prd')
            ->join('purchase_returns as pr', 'prd.purchase_return_id', '=', 'pr.id')
            ->leftJoin('products as p', 'prd.product_id', '=', 'p.id')
            ->leftJoin('product_variants as pv', function ($join) {
                $join->on('prd.product_variant_id', '=', 'pv.id')
                    ->whereNotNull('prd.product_variant_id');
            })
            ->whereNull('pr.deleted_at')
            ->where('pr.statut', 'completed')
            ->whereBetween('pr.date', [$start, $end])
            ->where('p.type', '!=', 'is_service')
            ->when($warehouseId, fn ($q) => $q->where('pr.warehouse_id', $warehouseId),
                fn ($q) => $q->whereIn('pr.warehouse_id', $warehouseIds))
            ->selectRaw('COALESCE(SUM(COALESCE(pv.price, p.price, 0) * prd.quantity), 0) as total')
            ->value('total');

        $saleReturnDetailsPrice = DB::table('sale_return_details as srd')
            ->join('sale_returns as sr', 'srd.sale_return_id', '=', 'sr.id')
            ->leftJoin('products as p', 'srd.product_id', '=', 'p.id')
            ->leftJoin('product_variants as pv', function ($join) {
                $join->on('srd.product_variant_id', '=', 'pv.id')
                    ->whereNotNull('srd.product_variant_id');
            })
            ->whereNull('sr.deleted_at')
            ->where('sr.statut', 'received')
            ->whereBetween('sr.date', [$start, $end])
            ->where('p.type', '!=', 'is_service')
            ->when($warehouseId, fn ($q) => $q->where('sr.warehouse_id', $warehouseId),
                fn ($q) => $q->whereIn('sr.warehouse_id', $warehouseIds))
            ->selectRaw('COALESCE(SUM(COALESCE(pv.price, p.price, 0) * srd.quantity), 0) as total')
            ->value('total');

        $adjustmentDetailsPrice = DB::table('adjustment_details as ad')
            ->join('adjustments as a', 'ad.adjustment_id', '=', 'a.id')
            ->leftJoin('products as p', 'ad.product_id', '=', 'p.id')
            ->leftJoin('product_variants as pv', function ($join) {
                $join->on('ad.product_variant_id', '=', 'pv.id')
                    ->whereNotNull('ad.product_variant_id');
            })
            ->whereNull('a.deleted_at')
            ->whereBetween('a.date', [$start, $end])
            ->where('p.type', '!=', 'is_service')
            ->when($warehouseId, fn ($q) => $q->where('a.warehouse_id', $warehouseId),
                fn ($q) => $q->whereIn('a.warehouse_id', $warehouseIds))
            ->selectRaw('COALESCE(SUM(
                CASE 
                    WHEN ad.type = "add" THEN COALESCE(pv.price, p.price, 0) * ad.quantity
                    WHEN ad.type = "sub" THEN -COALESCE(pv.price, p.price, 0) * ad.quantity
                    ELSE 0
                END
            ), 0) as total')
            ->value('total');

        // -------------------- Transfer Details --------------------
        // Outgoing transfers (from_warehouse_id = our warehouse) - stock was removed, so add back for opening
        $transferOutDetailsCost = DB::table('transfer_details as td')
            ->join('transfers as t', 'td.transfer_id', '=', 't.id')
            ->leftJoin('products as p', 'td.product_id', '=', 'p.id')
            ->leftJoin('product_variants as pv', function ($join) {
                $join->on('td.product_variant_id', '=', 'pv.id')
                    ->whereNotNull('td.product_variant_id');
            })
            ->whereNull('t.deleted_at')
            ->where('t.statut', 'completed')
            ->whereBetween('t.date', [$start, $end])
            ->where('p.type', '!=', 'is_service')
            ->when($warehouseId, fn ($q) => $q->where('t.from_warehouse_id', $warehouseId),
                fn ($q) => $q->whereIn('t.from_warehouse_id', $warehouseIds))
            ->selectRaw('COALESCE(SUM(COALESCE(pv.cost, p.cost, 0) * td.quantity), 0) as total')
            ->value('total');

        // Incoming transfers (to_warehouse_id = our warehouse) - stock was added, so subtract for opening
        $transferInDetailsCost = DB::table('transfer_details as td')
            ->join('transfers as t', 'td.transfer_id', '=', 't.id')
            ->leftJoin('products as p', 'td.product_id', '=', 'p.id')
            ->leftJoin('product_variants as pv', function ($join) {
                $join->on('td.product_variant_id', '=', 'pv.id')
                    ->whereNotNull('td.product_variant_id');
            })
            ->whereNull('t.deleted_at')
            ->where('t.statut', 'completed')
            ->whereBetween('t.date', [$start, $end])
            ->where('p.type', '!=', 'is_service')
            ->when($warehouseId, fn ($q) => $q->where('t.to_warehouse_id', $warehouseId),
                fn ($q) => $q->whereIn('t.to_warehouse_id', $warehouseIds))
            ->selectRaw('COALESCE(SUM(COALESCE(pv.cost, p.cost, 0) * td.quantity), 0) as total')
            ->value('total');

        // Transfer details for sale price calculation
        $transferOutDetailsPrice = DB::table('transfer_details as td')
            ->join('transfers as t', 'td.transfer_id', '=', 't.id')
            ->leftJoin('products as p', 'td.product_id', '=', 'p.id')
            ->leftJoin('product_variants as pv', function ($join) {
                $join->on('td.product_variant_id', '=', 'pv.id')
                    ->whereNotNull('td.product_variant_id');
            })
            ->whereNull('t.deleted_at')
            ->where('t.statut', 'completed')
            ->whereBetween('t.date', [$start, $end])
            ->where('p.type', '!=', 'is_service')
            ->when($warehouseId, fn ($q) => $q->where('t.from_warehouse_id', $warehouseId),
                fn ($q) => $q->whereIn('t.from_warehouse_id', $warehouseIds))
            ->selectRaw('COALESCE(SUM(COALESCE(pv.price, p.price, 0) * td.quantity), 0) as total')
            ->value('total');

        $transferInDetailsPrice = DB::table('transfer_details as td')
            ->join('transfers as t', 'td.transfer_id', '=', 't.id')
            ->leftJoin('products as p', 'td.product_id', '=', 'p.id')
            ->leftJoin('product_variants as pv', function ($join) {
                $join->on('td.product_variant_id', '=', 'pv.id')
                    ->whereNotNull('td.product_variant_id');
            })
            ->whereNull('t.deleted_at')
            ->where('t.statut', 'completed')
            ->whereBetween('t.date', [$start, $end])
            ->where('p.type', '!=', 'is_service')
            ->when($warehouseId, fn ($q) => $q->where('t.to_warehouse_id', $warehouseId),
                fn ($q) => $q->whereIn('t.to_warehouse_id', $warehouseIds))
            ->selectRaw('COALESCE(SUM(COALESCE(pv.price, p.price, 0) * td.quantity), 0) as total')
            ->value('total');

        // Calculate opening stock by purchase price: Closing - Purchases + Sales - Purchase Returns + Sale Returns - Adjustments + Transfer Out - Transfer In
        $openingStockPurchase = $closingStockPurchase
            - $purchaseDetailsValue
            + $saleDetailsValue
            - $purchaseReturnDetailsValue
            + $saleReturnDetailsValue
            - $adjustmentDetailsValue
            + $transferOutDetailsCost
            - $transferInDetailsCost;

        // Calculate opening stock by sale price
        $openingStockSale = $closingStockSale
            - $purchaseDetailsPrice
            + $saleDetailsPrice
            - $purchaseReturnDetailsPrice
            + $saleReturnDetailsPrice
            - $adjustmentDetailsPrice
            + $transferOutDetailsPrice
            - $transferInDetailsPrice;

        // -------------------- Purchases --------------------
        // Total Purchase (Excl. tax, Discount) - Using TaxNet and discount
        $purchaseBase = Purchase::whereNull('deleted_at')
            ->where('statut', 'received')
            ->whereBetween('date', [$start, $end])
            ->where($applyWarehouse);

        $totalPurchaseExclTax = (float) (clone $purchaseBase)
            ->selectRaw('COALESCE(SUM(GrandTotal - COALESCE(TaxNet, 0) - COALESCE(discount, 0)), 0) as total')
            ->value('total');

        // Total purchase shipping charge
        $totalPurchaseShippingCharge = (float) (clone $purchaseBase)
            ->selectRaw('COALESCE(SUM(COALESCE(shipping, 0)), 0) as total')
            ->value('total');

        // Total Purchase discount
        $totalPurchaseDiscount = (float) (clone $purchaseBase)
            ->selectRaw('COALESCE(SUM(COALESCE(discount, 0)), 0) as total')
            ->value('total');

        // -------------------- Sales --------------------
        // Total Sales (Excl. tax, Discount) - Using TaxNet and discount
        $saleBase = Sale::whereNull('deleted_at')
            ->where('statut', 'completed')
            ->whereBetween('date', [$start, $end])
            ->where($applyWarehouse);

        $totalSalesExclTax = (float) (clone $saleBase)
            ->selectRaw('COALESCE(SUM(GrandTotal - COALESCE(TaxNet, 0) - COALESCE(discount, 0) - COALESCE(discount_from_points, 0)), 0) as total')
            ->value('total');

        // Total sell shipping charge
        $totalSellShippingCharge = (float) (clone $saleBase)
            ->selectRaw('COALESCE(SUM(COALESCE(shipping, 0)), 0) as total')
            ->value('total');

        // Total Sell discount (includes discount_from_points for customer rewards)
        $totalSellDiscount = (float) (clone $saleBase)
            ->selectRaw('COALESCE(SUM(COALESCE(discount, 0)), 0) as total')
            ->value('total');

        // Total customer reward (discount_from_points)
        $totalCustomerReward = (float) (clone $saleBase)
            ->selectRaw('COALESCE(SUM(COALESCE(discount_from_points, 0)), 0) as total')
            ->value('total');

        // -------------------- Returns --------------------
        // Total Sell Return
        $totalSellReturn = (float) SaleReturn::whereNull('deleted_at')
            ->where('statut', 'received')
            ->whereBetween('date', [$start, $end])
            ->where($applyWarehouse)
            ->selectRaw('COALESCE(SUM(GrandTotal), 0) as total')
            ->value('total');

        // Total Purchase Return
        $totalPurchaseReturn = (float) PurchaseReturn::whereNull('deleted_at')
            ->where('statut', 'completed')
            ->whereBetween('date', [$start, $end])
            ->where($applyWarehouse)
            ->selectRaw('COALESCE(SUM(GrandTotal), 0) as total')
            ->value('total');

        // -------------------- Adjustments & Expenses --------------------
        // Total Stock Adjustment - Use the adjustment details value we already calculated (by cost)
        // Note: adjustments table doesn't have GrandTotal, so we use the value from adjustment_details
        // This represents the net monetary value of stock adjustments
        $totalStockAdjustment = abs($adjustmentDetailsValue);

        // Total Expense
        $totalExpense = (float) Expense::whereNull('deleted_at')
            ->whereBetween('date', [$start, $end])
            ->where($applyWarehouse)
            ->selectRaw('COALESCE(SUM(amount), 0) as total')
            ->value('total');

        // Total transfer shipping charge
        $totalTransferShippingCharge = (float) Transfer::whereNull('deleted_at')
            ->whereBetween('date', [$start, $end])
            ->where($applyTransferWarehouse)
            ->selectRaw('COALESCE(SUM(COALESCE(shipping, 0)), 0) as total')
            ->value('total');

        // Ensure opening stock is not negative
        $openingStockPurchase = max(0, $openingStockPurchase);
        $openingStockSale = max(0, $openingStockSale);

        // -------------------- Compose response --------------------
        return response()->json([
            'opening_stock_purchase_price' => (float) $openingStockPurchase,
            'opening_stock_sale_price' => (float) $openingStockSale,
            'total_purchase_excl_tax' => $totalPurchaseExclTax,
            'total_stock_adjustment' => $totalStockAdjustment,
            'total_expense' => $totalExpense,
            'total_purchase_shipping_charge' => $totalPurchaseShippingCharge,
            'total_transfer_shipping_charge' => $totalTransferShippingCharge,
            'total_sell_discount' => $totalSellDiscount,
            'total_customer_reward' => $totalCustomerReward,
            'total_sell_return' => $totalSellReturn,
            'closing_stock_purchase_price' => (float) $closingStockPurchase,
            'closing_stock_sale_price' => (float) $closingStockSale,
            'total_sales_excl_tax' => $totalSalesExclTax,
            'total_sell_shipping_charge' => $totalSellShippingCharge,
            'total_purchase_return' => $totalPurchaseReturn,
            'total_purchase_discount' => $totalPurchaseDiscount,
            'warehouses' => $warehouses,
        ]);
    }

    // ----------------- Return Ratio Report -----------------------\\

    public function return_ratio_report(Request $request)
    {
        $this->authorizeForUser($request->user('api'), 'return_ratio_report', Client::class);

        $start = $request->filled('from') ? Carbon::parse($request->from)->toDateString() : '2000-01-01';
        $end = $request->filled('to') ? Carbon::parse($request->to)->toDateString() : Carbon::now()->toDateString();

        // Warehouses visible to user
        $user = $request->user('api');
        if ($user->is_all_warehouses) {
            $warehouses = Warehouse::whereNull('deleted_at')->get(['id', 'name']);
            $warehouseIds = $warehouses->pluck('id')->all();
        } else {
            $warehouseIds = UserWarehouse::where('user_id', $user->id)->pluck('warehouse_id')->all();
            $warehouses = Warehouse::whereNull('deleted_at')->whereIn('id', $warehouseIds)->get(['id', 'name']);
        }
        $warehouseId = (int) ($request->warehouse_id ?: 0);

        $applyWarehouse = fn ($q) => $warehouseId
            ? $q->where('warehouse_id', $warehouseId)
            : $q->whereIn('warehouse_id', $warehouseIds);

        // Totals
        $salesSum = (float) Sale::whereNull('deleted_at')
            ->where('statut', 'completed')
            ->whereBetween('date', [$start, $end])
            ->where($applyWarehouse)
            ->selectRaw('COALESCE(SUM(GrandTotal),0) AS sum')
            ->value('sum');

        $saleRetSum = (float) SaleReturn::whereNull('deleted_at')
            ->where('statut', 'received')
            ->whereBetween('date', [$start, $end])
            ->where($applyWarehouse)
            ->selectRaw('COALESCE(SUM(GrandTotal),0) AS sum')
            ->value('sum');

        $purchSum = (float) Purchase::whereNull('deleted_at')
            ->where('statut', 'received')
            ->whereBetween('date', [$start, $end])
            ->where($applyWarehouse)
            ->selectRaw('COALESCE(SUM(GrandTotal),0) AS sum')
            ->value('sum');

        $purchRetSum = (float) PurchaseReturn::whereNull('deleted_at')
            ->where('statut', 'completed')
            ->whereBetween('date', [$start, $end])
            ->where($applyWarehouse)
            ->selectRaw('COALESCE(SUM(GrandTotal),0) AS sum')
            ->value('sum');

        $salesRatio = $salesSum > 0 ? round(($saleRetSum / $salesSum) * 100, 2) : 0.0;
        $purchRatio = $purchSum > 0 ? round(($purchRetSum / $purchSum) * 100, 2) : 0.0;

        return response()->json([
            'data' => [
                'sales_sum' => $salesSum,
                'returns_sales_sum' => $saleRetSum,
                'sales_return_ratio_pct' => $salesRatio,

                'purchases_sum' => $purchSum,
                'returns_purchases_sum' => $purchRetSum,
                'purchase_return_ratio_pct' => $purchRatio,
            ],
            'warehouses' => $warehouses,
        ]);
    }

    // -------------------- report_top_products -------------\\

    public function report_top_products(request $request)
    {

        $this->authorizeForUser($request->user('api'), 'Top_products', Product::class);

        $Role = Auth::user()->roles()->first();
        $user = Auth::user();
        // New way: Check user's record_view field (user-level boolean)
        // Backward compatibility: If record_view is null, fall back to role permission check
        $view_records = $user->hasRecordView();
        // How many items do you want to display.
        $perPage = $request->limit;
        $pageStart = \Request::get('page', 1);
        // Start displaying items from this number;
        $offSet = ($pageStart * $perPage) - $perPage;

        $products_data = SaleDetail::join('sales', 'sale_details.sale_id', '=', 'sales.id')
            ->join('products', 'sale_details.product_id', '=', 'products.id')
            ->where(function ($query) use ($view_records) {
                if (! $view_records) {
                    return $query->where('sales.user_id', '=', Auth::user()->id);
                }
            })
            ->whereBetween('sale_details.date', [$request->from, $request->to])
            ->where(function ($query) use ($request) {
                return $query->when($request->filled('search'), function ($query) use ($request) {
                    return $query->where('products.name', 'LIKE', "%{$request->search}%")
                        ->orWhere('products.code', 'LIKE', "%{$request->search}%");
                });
            })
            ->select(
                DB::raw('products.name as name'),
                DB::raw('products.code as code'),
                DB::raw('count(*) as total_sales'),
                DB::raw('sum(total) as total'),
            )
            ->groupBy('products.name');

        $totalRows = $products_data->count();
        if ($perPage == '-1') {
            $perPage = $totalRows;
        }

        $products = $products_data->offset($offSet)
            ->limit($perPage)
            ->orderBy('total_sales', 'desc')
            ->get();

        return response()->json([
            'products' => $products,
            'totalRows' => $totalRows,
        ]);

    }

    // -------------------- report_top_customers -------------\\

    public function report_top_customers(request $request)
    {

        $this->authorizeForUser($request->user('api'), 'Top_customers', Client::class);

        $user = Auth::user();
        // New way: Check user's record_view field (user-level boolean)
        // Backward compatibility: If record_view is null, fall back to role permission check
        $view_records = $user->hasRecordView();
        // How many items do you want to display.
        $perPage = $request->limit;
        $pageStart = \Request::get('page', 1);
        // Start displaying items from this number;
        $offSet = ($pageStart * $perPage) - $perPage;

        $customers_count = Sale::where('sales.deleted_at', '=', null)
            ->where(function ($query) use ($view_records) {
                if (! $view_records) {
                    return $query->where('sales.user_id', '=', Auth::user()->id);
                }
            })
            ->join('clients', 'sales.client_id', '=', 'clients.id')
            ->select(DB::raw('clients.name'), DB::raw('count(*) as total_sales'))
            ->groupBy('clients.name')->get();

        $totalRows = $customers_count->count();
        if ($perPage == '-1') {
            $perPage = $totalRows;
        }

        $customers_data = Sale::where('sales.deleted_at', '=', null)
            ->where(function ($query) use ($view_records) {
                if (! $view_records) {
                    return $query->where('sales.user_id', '=', Auth::user()->id);
                }
            })
            ->join('clients', 'sales.client_id', '=', 'clients.id')
            ->select(
                DB::raw('clients.name as name'),
                DB::raw('clients.phone as phone'),
                DB::raw('clients.email as email'),
                DB::raw('count(*) as total_sales'),
                DB::raw('sum(GrandTotal) as total'),
            )
            ->groupBy('clients.name');

        $customers = $customers_data->offset($offSet)
            ->limit($perPage)
            ->orderBy('total_sales', 'desc')
            ->get();

        return response()->json([
            'customers' => $customers,
            'totalRows' => $totalRows,
        ]);

    }

    // ----------------- Users Report -----------------------\\

    public function users_Report(request $request)
    {

        $this->authorizeForUser($request->user('api'), 'users_report', User::class);

        // How many items do you want to display.
        $perPage = $request->limit;
        $pageStart = \Request::get('page', 1);
        // Start displaying items from this number;
        $offSet = ($pageStart * $perPage) - $perPage;
        $order = $request->SortField;
        $dir = $request->SortType;
        $data = [];

        $users = User::where(function ($query) use ($request) {
            return $query->when($request->filled('search'), function ($query) use ($request) {
                return $query->where('username', 'LIKE', "%{$request->search}%");
            });
        });

        $totalRows = $users->count();
        if ($perPage == '-1') {
            $perPage = $totalRows;
        }
        $users = $users->offset($offSet)
            ->limit($perPage)
            ->orderBy($order, $dir)
            ->get();

        foreach ($users as $user) {
            $item['total_sales'] = DB::table('sales')
                ->where('deleted_at', '=', null)
                ->where('user_id', $user->id)
                ->count();

            $item['total_purchases'] = DB::table('purchases')
                ->where('deleted_at', '=', null)
                ->where('user_id', $user->id)
                ->count();

            $item['total_quotations'] = DB::table('quotations')
                ->where('deleted_at', '=', null)
                ->where('user_id', $user->id)
                ->count();

            $item['total_return_sales'] = DB::table('sale_returns')
                ->where('deleted_at', '=', null)
                ->where('user_id', $user->id)
                ->count();

            $item['total_return_purchases'] = DB::table('purchase_returns')
                ->where('deleted_at', '=', null)
                ->where('user_id', $user->id)
                ->count();

            $item['total_transfers'] = DB::table('transfers')
                ->where('deleted_at', '=', null)
                ->where('user_id', $user->id)
                ->count();

            $item['total_adjustments'] = DB::table('adjustments')
                ->where('deleted_at', '=', null)
                ->where('user_id', $user->id)
                ->count();

            $item['id'] = $user->id;
            $item['username'] = $user->username;
            $data[] = $item;
        }

        return response()->json([
            'report' => $data,
            'totalRows' => $totalRows,
        ]);

    }

    // -------------------- Get Sales By user -------------\\

    public function get_sales_by_user(request $request)
    {

        $this->authorizeForUser($request->user('api'), 'users_report', User::class);
        // How many items do you want to display.
        $perPage = $request->limit;
        $pageStart = \Request::get('page', 1);
        // Start displaying items from this number;
        $offSet = ($pageStart * $perPage) - $perPage;

        $user = Auth::user();
        // New way: Check user's record_view field (user-level boolean)
        // Backward compatibility: If record_view is null, fall back to role permission check
        $ShowRecord = $user->hasRecordView();

        $sales = Sale::where('deleted_at', '=', null)->with('user', 'client', 'warehouse')
            ->where(function ($query) use ($ShowRecord) {
                if (! $ShowRecord) {
                    return $query->where('user_id', '=', Auth::user()->id);
                }
            })
            ->where('user_id', $request->id)
             // Search With Multiple Param
            ->where(function ($query) use ($request) {
                return $query->when($request->filled('search'), function ($query) use ($request) {
                    return $query->where('Ref', 'LIKE', "%{$request->search}%")
                        ->orWhere('statut', 'LIKE', "%{$request->search}%")
                        ->orWhere('payment_statut', 'like', "%{$request->search}%")
                        ->orWhere(function ($query) use ($request) {
                            return $query->whereHas('client', function ($q) use ($request) {
                                $q->where('name', 'LIKE', "%{$request->search}%");
                            });
                        })
                        ->orWhere(function ($query) use ($request) {
                            return $query->whereHas('warehouse', function ($q) use ($request) {
                                $q->where('name', 'LIKE', "%{$request->search}%");
                            });
                        });
                });
            });

        $totalRows = $sales->count();
        if ($perPage == '-1') {
            $perPage = $totalRows;
        }
        $sales = $sales->offset($offSet)
            ->limit($perPage)
            ->orderBy('id', 'desc')
            ->get();

        $data = [];
        foreach ($sales as $sale) {
            $item['username'] = $sale['user']->username;
            $item['client_name'] = $sale['client']->name;
            $item['warehouse_name'] = $sale['warehouse']->name;
            $item['date'] = $sale->date;
            $item['Ref'] = $sale->Ref;
            $item['sale_id'] = $sale->id;
            $item['statut'] = $sale->statut;
            $item['GrandTotal'] = $sale->GrandTotal;
            $item['paid_amount'] = $sale->paid_amount;
            $item['due'] = $sale->GrandTotal - $sale->paid_amount;
            $item['payment_status'] = $sale->payment_statut;
            $item['shipping_status'] = $sale->shipping_status;

            $data[] = $item;
        }

        return response()->json([
            'totalRows' => $totalRows,
            'sales' => $data,
        ]);

    }

    // -------------------- Get Quotations By user -------------\\

    public function get_quotations_by_user(request $request)
    {

        $this->authorizeForUser($request->user('api'), 'users_report', User::class);
        // How many items do you want to display.
        $perPage = $request->limit;
        $pageStart = \Request::get('page', 1);
        // Start displaying items from this number;
        $offSet = ($pageStart * $perPage) - $perPage;

        $user = Auth::user();
        // New way: Check user's record_view field (user-level boolean)
        // Backward compatibility: If record_view is null, fall back to role permission check
        $ShowRecord = $user->hasRecordView();
        $data = [];

        $Quotations = Quotation::with('client', 'warehouse', 'user')
            ->where('deleted_at', '=', null)
            ->where('user_id', $request->id)
            ->where(function ($query) use ($ShowRecord) {
                if (! $ShowRecord) {
                    return $query->where('user_id', '=', Auth::user()->id);
                }
            })
             // Search With Multiple Param
            ->where(function ($query) use ($request) {
                return $query->when($request->filled('search'), function ($query) use ($request) {
                    return $query->where('Ref', 'LIKE', "%{$request->search}%")
                        ->orWhere('statut', 'LIKE', "%{$request->search}%")
                        ->orWhere(function ($query) use ($request) {
                            return $query->whereHas('client', function ($q) use ($request) {
                                $q->where('name', 'LIKE', "%{$request->search}%");
                            });
                        })
                        ->orWhere(function ($query) use ($request) {
                            return $query->whereHas('warehouse', function ($q) use ($request) {
                                $q->where('name', 'LIKE', "%{$request->search}%");
                            });
                        });
                });
            });

        $totalRows = $Quotations->count();
        if ($perPage == '-1') {
            $perPage = $totalRows;
        }
        $Quotations = $Quotations->offset($offSet)
            ->limit($perPage)
            ->orderBy('id', 'desc')
            ->get();

        foreach ($Quotations as $Quotation) {

            $item['id'] = $Quotation->id;
            $item['date'] = $Quotation->date;
            $item['Ref'] = $Quotation->Ref;
            $item['statut'] = $Quotation->statut;
            $item['username'] = $Quotation['user']->username;
            $item['warehouse_name'] = $Quotation['warehouse']->name;
            $item['client_name'] = $Quotation['client']->name;
            $item['GrandTotal'] = $Quotation->GrandTotal;

            $data[] = $item;
        }

        return response()->json([
            'quotations' => $data,
            'totalRows' => $totalRows,
        ]);
    }

    // -------------------- Get Purchases By user -------------\\

    public function get_purchases_by_user(request $request)
    {

        $this->authorizeForUser($request->user('api'), 'users_report', User::class);
        // How many items do you want to display.
        $perPage = $request->limit;
        $pageStart = \Request::get('page', 1);
        // Start displaying items from this number;
        $offSet = ($pageStart * $perPage) - $perPage;
        $data = [];

        $user = Auth::user();
        // New way: Check user's record_view field (user-level boolean)
        // Backward compatibility: If record_view is null, fall back to role permission check
        $ShowRecord = $user->hasRecordView();

        $purchases = Purchase::where('deleted_at', '=', null)
            ->with('user', 'provider', 'warehouse')
            ->where('user_id', $request->id)
            ->where(function ($query) use ($ShowRecord) {
                if (! $ShowRecord) {
                    return $query->where('user_id', '=', Auth::user()->id);
                }
            })
            // Search With Multiple Param
            ->where(function ($query) use ($request) {
                return $query->when($request->filled('search'), function ($query) use ($request) {
                    return $query->where('Ref', 'LIKE', "%{$request->search}%")
                        ->orWhere('statut', 'LIKE', "%{$request->search}%")
                        ->orWhere('payment_statut', 'like', "$request->search")
                        ->orWhere(function ($query) use ($request) {
                            return $query->whereHas('provider', function ($q) use ($request) {
                                $q->where('name', 'LIKE', "%{$request->search}%");
                            });
                        })
                        ->orWhere(function ($query) use ($request) {
                            return $query->whereHas('warehouse', function ($q) use ($request) {
                                $q->where('name', 'LIKE', "%{$request->search}%");
                            });
                        });
                });
            });

        $totalRows = $purchases->count();
        if ($perPage == '-1') {
            $perPage = $totalRows;
        }
        $purchases = $purchases->offset($offSet)
            ->limit($perPage)
            ->orderBy('id', 'desc')
            ->get();

        foreach ($purchases as $purchase) {
            $item['Ref'] = $purchase->Ref;
            $item['purchase_id'] = $purchase->id;
            $item['username'] = $purchase['user']->username;
            $item['provider_name'] = $purchase['provider']->name;
            $item['warehouse_name'] = $purchase['warehouse']->name;
            $item['statut'] = $purchase->statut;
            $item['GrandTotal'] = $purchase->GrandTotal;
            $item['paid_amount'] = $purchase->paid_amount;
            $item['due'] = $purchase->GrandTotal - $purchase->paid_amount;
            $item['payment_status'] = $purchase->payment_statut;

            $data[] = $item;
        }

        return response()->json([
            'totalRows' => $totalRows,
            'purchases' => $data,
        ]);

    }

    // -------------------- Get sale Returns By user -------------\\

    public function get_sales_return_by_user(request $request)
    {

        $this->authorizeForUser($request->user('api'), 'users_report', User::class);
        // How many items do you want to display.
        $perPage = $request->limit;
        $pageStart = \Request::get('page', 1);
        // Start displaying items from this number;
        $offSet = ($pageStart * $perPage) - $perPage;
        $data = [];

        //  Check If User Has Permission Show All Records
        $user = Auth::user();
        // New way: Check user's record_view field (user-level boolean)
        // Backward compatibility: If record_view is null, fall back to role permission check
        $ShowRecord = $user->hasRecordView();

        $SaleReturn = SaleReturn::where('deleted_at', '=', null)->with('user', 'client', 'warehouse')
            ->where('user_id', $request->id)
            ->where(function ($query) use ($ShowRecord) {
                if (! $ShowRecord) {
                    return $query->where('user_id', '=', Auth::user()->id);
                }
            })
            // Search With Multiple Param
            ->where(function ($query) use ($request) {
                return $query->when($request->filled('search'), function ($query) use ($request) {
                    return $query->where('Ref', 'LIKE', "%{$request->search}%")
                        ->orWhere('statut', 'LIKE', "%{$request->search}%")
                        ->orWhere('payment_statut', 'like', "$request->search")
                        ->orWhere(function ($query) use ($request) {
                            return $query->whereHas('client', function ($q) use ($request) {
                                $q->where('name', 'LIKE', "%{$request->search}%");
                            });
                        })
                        ->orWhere(function ($query) use ($request) {
                            return $query->whereHas('warehouse', function ($q) use ($request) {
                                $q->where('name', 'LIKE', "%{$request->search}%");
                            });
                        });
                });
            });

        $totalRows = $SaleReturn->count();
        if ($perPage == '-1') {
            $perPage = $totalRows;
        }
        $SaleReturn = $SaleReturn->offset($offSet)
            ->limit($perPage)
            ->orderBy('id', 'desc')
            ->get();

        foreach ($SaleReturn as $Sale_Return) {
            $item['Ref'] = $Sale_Return->Ref;
            $item['return_sale_id'] = $Sale_Return->id;
            $item['statut'] = $Sale_Return->statut;
            $item['username'] = $Sale_Return['user']->username;
            $item['client_name'] = $Sale_Return['client']->name;
            $item['warehouse_name'] = $Sale_Return['warehouse']->name;
            $item['GrandTotal'] = $Sale_Return->GrandTotal;
            $item['paid_amount'] = $Sale_Return->paid_amount;
            $item['due'] = $Sale_Return->GrandTotal - $Sale_Return->paid_amount;
            $item['payment_status'] = $Sale_Return->payment_statut;

            $data[] = $item;
        }

        return response()->json([
            'totalRows' => $totalRows,
            'sales_return' => $data,
        ]);
    }

    // -------------------- Get purchase Returns By user -------------\\

    public function get_purchase_return_by_user(request $request)
    {

        $this->authorizeForUser($request->user('api'), 'users_report', User::class);

        // How many items do you want to display.
        $perPage = $request->limit;
        $pageStart = \Request::get('page', 1);
        // Start displaying items from this number;
        $offSet = ($pageStart * $perPage) - $perPage;
        $data = [];

        $user = Auth::user();
        // New way: Check user's record_view field (user-level boolean)
        // Backward compatibility: If record_view is null, fall back to role permission check
        $ShowRecord = $user->hasRecordView();

        $PurchaseReturn = PurchaseReturn::where('deleted_at', '=', null)
            ->with('user', 'provider', 'warehouse')
            ->where('user_id', $request->id)
            ->where(function ($query) use ($ShowRecord) {
                if (! $ShowRecord) {
                    return $query->where('user_id', '=', Auth::user()->id);
                }
            })
             // Search With Multiple Param
            ->where(function ($query) use ($request) {
                return $query->when($request->filled('search'), function ($query) use ($request) {
                    return $query->where('Ref', 'LIKE', "%{$request->search}%")
                        ->orWhere('statut', 'LIKE', "%{$request->search}%")
                        ->orWhere('payment_statut', 'like', "$request->search")
                        ->orWhere(function ($query) use ($request) {
                            return $query->whereHas('provider', function ($q) use ($request) {
                                $q->where('name', 'LIKE', "%{$request->search}%");
                            });
                        })
                        ->orWhere(function ($query) use ($request) {
                            return $query->whereHas('warehouse', function ($q) use ($request) {
                                $q->where('name', 'LIKE', "%{$request->search}%");
                            });
                        });
                });
            });

        $totalRows = $PurchaseReturn->count();
        if ($perPage == '-1') {
            $perPage = $totalRows;
        }
        $PurchaseReturn = $PurchaseReturn->offset($offSet)
            ->limit($perPage)
            ->orderBy('id', 'desc')
            ->get();

        foreach ($PurchaseReturn as $Purchase_Return) {
            $item['Ref'] = $Purchase_Return->Ref;
            $item['return_purchase_id'] = $Purchase_Return->id;
            $item['statut'] = $Purchase_Return->statut;
            $item['username'] = $Purchase_Return['user']->username;
            $item['provider_name'] = $Purchase_Return['provider']->name;
            $item['warehouse_name'] = $Purchase_Return['warehouse']->name;
            $item['GrandTotal'] = $Purchase_Return->GrandTotal;
            $item['paid_amount'] = $Purchase_Return->paid_amount;
            $item['due'] = $Purchase_Return->GrandTotal - $Purchase_Return->paid_amount;
            $item['payment_status'] = $Purchase_Return->payment_statut;

            $data[] = $item;
        }

        return response()->json([
            'totalRows' => $totalRows,
            'purchases_return' => $data,
        ]);

    }

    // -------------------- Get transfers By user -------------\\

    public function get_transfer_by_user(request $request)
    {

        $this->authorizeForUser($request->user('api'), 'users_report', User::class);

        // How many items do you want to display.
        $perPage = $request->limit;
        $pageStart = \Request::get('page', 1);
        // Start displaying items from this number;
        $offSet = ($pageStart * $perPage) - $perPage;
        $data = [];

        $user = Auth::user();
        // New way: Check user's record_view field (user-level boolean)
        // Backward compatibility: If record_view is null, fall back to role permission check
        $ShowRecord = $user->hasRecordView();

        $transfers = Transfer::with('from_warehouse', 'to_warehouse')
            ->with('user')
            ->where('user_id', $request->id)
            ->where(function ($query) use ($ShowRecord) {
                if (! $ShowRecord) {
                    return $query->where('user_id', '=', Auth::user()->id);
                }
            })
            // Search With Multiple Param
            ->where(function ($query) use ($request) {
                return $query->when($request->filled('search'), function ($query) use ($request) {
                    return $query->where('Ref', 'LIKE', "%{$request->search}%")
                        ->orWhere('statut', 'LIKE', "%{$request->search}%")
                        ->orWhere(function ($query) use ($request) {
                            return $query->whereHas('from_warehouse', function ($q) use ($request) {
                                $q->where('name', 'LIKE', "%{$request->search}%");
                            });
                        })
                        ->orWhere(function ($query) use ($request) {
                            return $query->whereHas('to_warehouse', function ($q) use ($request) {
                                $q->where('name', 'LIKE', "%{$request->search}%");
                            });
                        });
                });
            });

        $totalRows = $transfers->count();
        if ($perPage == '-1') {
            $perPage = $totalRows;
        }
        $transfers = $transfers->offset($offSet)
            ->limit($perPage)
            ->orderBy('id', 'desc')
            ->get();

        foreach ($transfers as $transfer) {
            $item['id'] = $transfer->id;
            $item['date'] = $transfer->date;
            $item['Ref'] = $transfer->Ref;
            $item['username'] = $transfer['user']->username;
            $item['from_warehouse'] = $transfer['from_warehouse']->name;
            $item['to_warehouse'] = $transfer['to_warehouse']->name;
            $item['GrandTotal'] = $transfer->GrandTotal;
            $item['items'] = $transfer->items;
            $item['statut'] = $transfer->statut;

            $data[] = $item;
        }

        return response()->json([
            'totalRows' => $totalRows,
            'transfers' => $data,
        ]);

    }

    // -------------------- Get adjustment By user -------------\\

    public function get_adjustment_by_user(request $request)
    {

        $this->authorizeForUser($request->user('api'), 'users_report', User::class);

        // How many items do you want to display.
        $perPage = $request->limit;
        $pageStart = \Request::get('page', 1);
        // Start displaying items from this number;
        $offSet = ($pageStart * $perPage) - $perPage;
        $data = [];

        $user = Auth::user();
        // New way: Check user's record_view field (user-level boolean)
        // Backward compatibility: If record_view is null, fall back to role permission check
        $ShowRecord = $user->hasRecordView();

        $Adjustments = Adjustment::with('warehouse')
            ->with('user')
            ->where('user_id', $request->id)
            ->where(function ($query) use ($ShowRecord) {
                if (! $ShowRecord) {
                    return $query->where('user_id', '=', Auth::user()->id);
                }
            })
            // Search With Multiple Param
            ->where(function ($query) use ($request) {
                return $query->when($request->filled('search'), function ($query) use ($request) {
                    return $query->where('Ref', 'LIKE', "%{$request->search}%")
                        ->orWhere(function ($query) use ($request) {
                            return $query->whereHas('warehouse', function ($q) use ($request) {
                                $q->where('name', 'LIKE', "%{$request->search}%");
                            });
                        });
                });
            });

        $totalRows = $Adjustments->count();
        if ($perPage == '-1') {
            $perPage = $totalRows;
        }
        $Adjustments = $Adjustments->offset($offSet)
            ->limit($perPage)
            ->orderBy('id', 'desc')
            ->get();

        foreach ($Adjustments as $Adjustment) {
            $item['id'] = $Adjustment->id;
            $item['username'] = $Adjustment['user']->username;
            $item['date'] = $Adjustment->date;
            $item['Ref'] = $Adjustment->Ref;
            $item['warehouse_name'] = $Adjustment['warehouse']->name;
            $item['items'] = $Adjustment->items;
            $data[] = $item;
        }

        return response()->json([
            'totalRows' => $totalRows,
            'adjustments' => $data,
        ]);

    }

    // ----------------- stock Report -----------------------\\

    public function stock_Report(request $request)
    {

        $this->authorizeForUser($request->user('api'), 'stock_report', Product::class);

        // How many items do you want to display.
        $perPage = $request->limit;
        $pageStart = \Request::get('page', 1);
        // Start displaying items from this number;
        $offSet = ($pageStart * $perPage) - $perPage;
        $order = $request->SortField;
        $dir = $request->SortType;
        $data = [];

        // get warehouses assigned to user
        $user_auth = auth()->user();
        if ($user_auth->is_all_warehouses) {
            $warehouses = Warehouse::where('deleted_at', '=', null)->get(['id', 'name']);
            $warehouses_id = Warehouse::where('deleted_at', '=', null)->pluck('id')->toArray();
        } else {
            $warehouses_id = UserWarehouse::where('user_id', $user_auth->id)->pluck('warehouse_id')->toArray();
            $warehouses = Warehouse::where('deleted_at', '=', null)->whereIn('id', $warehouses_id)->get(['id', 'name']);
        }

        $products_data = Product::with('unit', 'category', 'brand')
            ->where('deleted_at', '=', null)
        // ->where('type', '!=', 'is_service')
        // Search With Multiple Param
            ->where(function ($query) use ($request) {
                return $query->when($request->filled('search'), function ($query) use ($request) {
                    return $query->where('products.name', 'LIKE', "%{$request->search}%")
                        ->orWhere('products.code', 'LIKE', "%{$request->search}%")
                        ->orWhere(function ($query) use ($request) {
                            return $query->whereHas('category', function ($q) use ($request) {
                                $q->where('name', 'LIKE', "%{$request->search}%");
                            });
                        });
                });
            });

        $totalRows = $products_data->count();
        if ($perPage == '-1') {
            $perPage = $totalRows;
        }
        $products = $products_data->offset($offSet)
            ->limit($perPage)
            ->orderBy($order, $dir)
            ->get();

        foreach ($products as $product) {

            if ($product->type != 'is_service') {

                $item['id'] = $product->id;
                $item['code'] = $product->code;
                $item['name'] = $product->name;
                $item['category'] = $product['category']->name;

                $current_stock = product_warehouse::where('product_id', $product->id)
                    ->where('deleted_at', '=', null)
                    ->whereIn('warehouse_id', $warehouses_id)
                    ->where(function ($query) use ($request) {
                        return $query->when($request->filled('warehouse_id'), function ($query) use ($request) {
                            return $query->where('warehouse_id', $request->warehouse_id);
                        });
                    })
                    ->sum('qte');

                $item['quantity'] = $current_stock.' '.$product['unit']->ShortName;

                $data[] = $item;

            } else {

                $item['id'] = $product->id;
                $item['code'] = $product->code;
                $item['name'] = $product->name;
                $item['category'] = $product['category']->name;
                $item['quantity'] = 0;

                $data[] = $item;
            }

        }

        return response()->json([
            'report' => $data,
            'totalRows' => $totalRows,
            'warehouses' => $warehouses,
        ]);

    }

    // -------------------- Get Sales By product -------------\\

    public function get_sales_by_product(request $request)
    {

        $this->authorizeForUser($request->user('api'), 'stock_report', Product::class);
        // How many items do you want to display.
        $perPage = $request->limit;
        $pageStart = \Request::get('page', 1);
        // Start displaying items from this number;
        $offSet = ($pageStart * $perPage) - $perPage;

        $user = Auth::user();
        // New way: Check user's record_view field (user-level boolean)
        // Backward compatibility: If record_view is null, fall back to role permission check
        $ShowRecord = $user->hasRecordView();

        $sale_details_data = SaleDetail::with('product', 'sale', 'sale.client', 'sale.warehouse')
            ->where(function ($query) use ($ShowRecord) {
                if (! $ShowRecord) {
                    return $query->whereHas('sale', function ($q) {
                        $q->where('user_id', '=', Auth::user()->id);
                    });
                }
            })
            ->where('product_id', $request->id)
             // Search With Multiple Param
            ->where(function ($query) use ($request) {
                return $query->when($request->filled('search'), function ($query) use ($request) {
                    return $query->where(function ($query) use ($request) {
                        return $query->whereHas('sale.client', function ($q) use ($request) {
                            $q->where('name', 'LIKE', "%{$request->search}%");
                        });
                    })
                        ->orWhere(function ($query) use ($request) {
                            return $query->whereHas('sale.warehouse', function ($q) use ($request) {
                                $q->where('name', 'LIKE', "%{$request->search}%");
                            });
                        })
                        ->orWhere(function ($query) use ($request) {
                            return $query->whereHas('sale', function ($q) use ($request) {
                                $q->where('Ref', 'LIKE', "%{$request->search}%");
                            });
                        })
                        ->orWhere(function ($query) use ($request) {
                            return $query->whereHas('product', function ($q) use ($request) {
                                $q->where('name', 'LIKE', "%{$request->search}%");
                            });
                        });
                });
            });

        $totalRows = $sale_details_data->count();
        if ($perPage == '-1') {
            $perPage = $totalRows;
        }
        $sale_details = $sale_details_data->offset($offSet)
            ->limit($perPage)
            ->orderBy('id', 'desc')
            ->get();

        $data = [];
        foreach ($sale_details as $detail) {

            // check if detail has sale_unit_id Or Null
            if ($detail->sale_unit_id !== null) {
                $unit = Unit::where('id', $detail->sale_unit_id)->first();
            } else {
                $product_unit_sale_id = Product::with('unitSale')
                    ->where('id', $detail->product_id)
                    ->first();

                if ($product_unit_sale_id['unitSale']) {
                    $unit = Unit::where('id', $product_unit_sale_id['unitSale']->id)->first();
                }
                $unit = null;

            }

            if ($detail->product_variant_id) {
                $productsVariants = ProductVariant::where('product_id', $detail->product_id)
                    ->where('id', $detail->product_variant_id)->first();

                $product_name = '['.$productsVariants->name.']'.$detail['product']['name'];

            } else {
                $product_name = $detail['product']['name'];
            }

            $item['date'] = $detail->date;
            $item['Ref'] = $detail['sale']->Ref;
            $item['sale_id'] = $detail['sale']->id;
            $item['client_name'] = $detail['sale']['client']->name;
            $item['unit_sale'] = $unit ? $unit->ShortName : '';
            $item['warehouse_name'] = $detail['sale']['warehouse']->name;
            $item['quantity'] = $detail->quantity.' '.$item['unit_sale'];
            $item['total'] = $detail->total;
            $item['product_name'] = $product_name;

            $data[] = $item;
        }

        return response()->json([
            'totalRows' => $totalRows,
            'sales' => $data,
        ]);

    }

    // -------------------- Get quotations By product -------------\\

    public function get_quotations_by_product(request $request)
    {

        $this->authorizeForUser($request->user('api'), 'stock_report', Product::class);
        // How many items do you want to display.
        $perPage = $request->limit;
        $pageStart = \Request::get('page', 1);
        // Start displaying items from this number;
        $offSet = ($pageStart * $perPage) - $perPage;

        $user = Auth::user();
        // New way: Check user's record_view field (user-level boolean)
        // Backward compatibility: If record_view is null, fall back to role permission check
        $ShowRecord = $user->hasRecordView();

        $quotation_details_data = QuotationDetail::with('product', 'quotation', 'quotation.client', 'quotation.warehouse')
            ->where(function ($query) use ($ShowRecord) {
                if (! $ShowRecord) {
                    return $query->whereHas('quotation', function ($q) {
                        $q->where('user_id', '=', Auth::user()->id);
                    });
                }
            })
            ->where('product_id', $request->id)
            // Search With Multiple Param
            ->where(function ($query) use ($request) {
                return $query->when($request->filled('search'), function ($query) use ($request) {
                    return $query->where(function ($query) use ($request) {
                        return $query->whereHas('quotation.client', function ($q) use ($request) {
                            $q->where('name', 'LIKE', "%{$request->search}%");
                        });
                    })
                        ->orWhere(function ($query) use ($request) {
                            return $query->whereHas('quotation.warehouse', function ($q) use ($request) {
                                $q->where('name', 'LIKE', "%{$request->search}%");
                            });
                        })
                        ->orWhere(function ($query) use ($request) {
                            return $query->whereHas('quotation', function ($q) use ($request) {
                                $q->where('Ref', 'LIKE', "%{$request->search}%");
                            });
                        })
                        ->orWhere(function ($query) use ($request) {
                            return $query->whereHas('product', function ($q) use ($request) {
                                $q->where('name', 'LIKE', "%{$request->search}%");
                            });
                        });
                });
            });

        $totalRows = $quotation_details_data->count();
        if ($perPage == '-1') {
            $perPage = $totalRows;
        }
        $quotation_details = $quotation_details_data->offset($offSet)
            ->limit($perPage)
            ->orderBy('id', 'desc')
            ->get();

        $data = [];
        foreach ($quotation_details as $detail) {

            // check if detail has sale_unit_id Or Null
            if ($detail->sale_unit_id !== null) {
                $unit = Unit::where('id', $detail->sale_unit_id)->first();
            } else {
                $product_unit_sale_id = Product::with('unitSale')
                    ->where('id', $detail->product_id)
                    ->first();
                if ($product_unit_sale_id['unitSale']) {
                    $unit = Unit::where('id', $product_unit_sale_id['unitSale']->id)->first();
                }
                $unit = null;

            }

            if ($detail->product_variant_id) {
                $productsVariants = ProductVariant::where('product_id', $detail->product_id)
                    ->where('id', $detail->product_variant_id)->first();

                $product_name = '['.$productsVariants->name.']'.$detail['product']['name'];

            } else {
                $product_name = $detail['product']['name'];
            }

            $item['date'] = $detail['quotation']->date;
            $item['Ref'] = $detail['quotation']->Ref;
            $item['quotation_id'] = $detail['quotation']->id;
            $item['client_name'] = $detail['quotation']['client']->name;
            $item['warehouse_name'] = $detail['quotation']['warehouse']->name;
            $item['unit_sale'] = $unit ? $unit->ShortName : '';
            $item['quantity'] = $detail->quantity.' '.$item['unit_sale'];
            $item['total'] = $detail->total;
            $item['product_name'] = $product_name;

            $data[] = $item;
        }

        return response()->json([
            'totalRows' => $totalRows,
            'quotations' => $data,
        ]);

    }

    // -------------------- Get purchases By product -------------\\

    public function get_purchases_by_product(request $request)
    {

        $this->authorizeForUser($request->user('api'), 'stock_report', Product::class);
        // How many items do you want to display.
        $perPage = $request->limit;
        $pageStart = \Request::get('page', 1);
        // Start displaying items from this number;
        $offSet = ($pageStart * $perPage) - $perPage;

        $user = Auth::user();
        // New way: Check user's record_view field (user-level boolean)
        // Backward compatibility: If record_view is null, fall back to role permission check
        $ShowRecord = $user->hasRecordView();

        $purchase_details_data = PurchaseDetail::with('product', 'purchase', 'purchase.provider', 'purchase.warehouse')
            ->where(function ($query) use ($ShowRecord) {
                if (! $ShowRecord) {
                    return $query->whereHas('purchase', function ($q) {
                        $q->where('user_id', '=', Auth::user()->id);
                    });
                }
            })
            ->where('product_id', $request->id)
            // Search With Multiple Param
            ->where(function ($query) use ($request) {
                return $query->when($request->filled('search'), function ($query) use ($request) {
                    return $query->where(function ($query) use ($request) {
                        return $query->whereHas('purchase.provider', function ($q) use ($request) {
                            $q->where('name', 'LIKE', "%{$request->search}%");
                        });
                    })
                        ->orWhere(function ($query) use ($request) {
                            return $query->whereHas('purchase.warehouse', function ($q) use ($request) {
                                $q->where('name', 'LIKE', "%{$request->search}%");
                            });
                        })
                        ->orWhere(function ($query) use ($request) {
                            return $query->whereHas('purchase', function ($q) use ($request) {
                                $q->where('Ref', 'LIKE', "%{$request->search}%");
                            });
                        })
                        ->orWhere(function ($query) use ($request) {
                            return $query->whereHas('product', function ($q) use ($request) {
                                $q->where('name', 'LIKE', "%{$request->search}%");
                            });
                        });
                });
            });

        $totalRows = $purchase_details_data->count();
        if ($perPage == '-1') {
            $perPage = $totalRows;
        }
        $purchase_details = $purchase_details_data->offset($offSet)
            ->limit($perPage)
            ->orderBy('id', 'desc')
            ->get();

        $data = [];
        foreach ($purchase_details as $detail) {

            // -------check if detail has purchase_unit_id Or Null
            if ($detail->purchase_unit_id !== null) {
                $unit = Unit::where('id', $detail->purchase_unit_id)->first();
            } else {
                $product_unit_purchase_id = Product::with('unitPurchase')
                    ->where('id', $detail->product_id)
                    ->first();
                $unit = Unit::where('id', $product_unit_purchase_id['unitPurchase']->id)->first();
            }

            if ($detail->product_variant_id) {
                $productsVariants = ProductVariant::where('product_id', $detail->product_id)
                    ->where('id', $detail->product_variant_id)->first();

                $product_name = '['.$productsVariants->name.']'.$detail['product']['name'];

            } else {
                $product_name = $detail['product']['name'];
            }

            $item['date'] = $detail['purchase']->date;
            $item['Ref'] = $detail['purchase']->Ref;
            $item['purchase_id'] = $detail['purchase']->id;
            $item['provider_name'] = $detail['purchase']['provider']->name;
            $item['warehouse_name'] = $detail['purchase']['warehouse']->name;
            $item['quantity'] = $detail->quantity.' '.$unit->ShortName;
            $item['total'] = $detail->total;
            $item['product_name'] = $product_name;
            $item['unit_purchase'] = $unit->ShortName;

            $data[] = $item;
        }

        return response()->json([
            'totalRows' => $totalRows,
            'purchases' => $data,
        ]);

    }

    // -------------------- Get purchases return By product -------------\\

    public function get_purchase_return_by_product(request $request)
    {

        $this->authorizeForUser($request->user('api'), 'stock_report', Product::class);
        // How many items do you want to display.
        $perPage = $request->limit;
        $pageStart = \Request::get('page', 1);
        // Start displaying items from this number;
        $offSet = ($pageStart * $perPage) - $perPage;

        $user = Auth::user();
        // New way: Check user's record_view field (user-level boolean)
        // Backward compatibility: If record_view is null, fall back to role permission check
        $ShowRecord = $user->hasRecordView();

        $purchase_return_details_data = PurchaseReturnDetails::with('product', 'PurchaseReturn', 'PurchaseReturn.provider', 'PurchaseReturn.warehouse')
            ->where(function ($query) use ($ShowRecord) {
                if (! $ShowRecord) {
                    return $query->whereHas('PurchaseReturn', function ($q) {
                        $q->where('user_id', '=', Auth::user()->id);
                    });
                }
            })
            ->where('quantity', '>', 0)
            ->where('product_id', $request->id)
            // Search With Multiple Param
            ->where(function ($query) use ($request) {
                return $query->when($request->filled('search'), function ($query) use ($request) {
                    return $query->where(function ($query) use ($request) {
                        return $query->whereHas('PurchaseReturn.provider', function ($q) use ($request) {
                            $q->where('name', 'LIKE', "%{$request->search}%");
                        });
                    })
                        ->orWhere(function ($query) use ($request) {
                            return $query->whereHas('PurchaseReturn.warehouse', function ($q) use ($request) {
                                $q->where('name', 'LIKE', "%{$request->search}%");
                            });
                        })
                        ->orWhere(function ($query) use ($request) {
                            return $query->whereHas('PurchaseReturn', function ($q) use ($request) {
                                $q->where('Ref', 'LIKE', "%{$request->search}%");
                            });
                        })
                        ->orWhere(function ($query) use ($request) {
                            return $query->whereHas('product', function ($q) use ($request) {
                                $q->where('name', 'LIKE', "%{$request->search}%");
                            });
                        });
                });
            });

        $totalRows = $purchase_return_details_data->count();
        if ($perPage == '-1') {
            $perPage = $totalRows;
        }
        $purchase_return_details = $purchase_return_details_data->offset($offSet)
            ->limit($perPage)
            ->orderBy('id', 'desc')
            ->get();

        $data = [];
        foreach ($purchase_return_details as $detail) {

            // -------check if detail has purchase_unit_id Or Null
            if ($detail->purchase_unit_id !== null) {
                $unit = Unit::where('id', $detail->purchase_unit_id)->first();
            } else {
                $product_unit_purchase_id = Product::with('unitPurchase')
                    ->where('id', $detail->product_id)
                    ->first();
                $unit = Unit::where('id', $product_unit_purchase_id['unitPurchase']->id)->first();
            }

            if ($detail->product_variant_id) {
                $productsVariants = ProductVariant::where('product_id', $detail->product_id)
                    ->where('id', $detail->product_variant_id)->first();

                $product_name = '['.$productsVariants->name.']'.$detail['product']['name'];

            } else {
                $product_name = $detail['product']['name'];
            }

            $item['date'] = $detail['PurchaseReturn']->date;
            $item['Ref'] = $detail['PurchaseReturn']->Ref;
            $item['return_purchase_id'] = $detail['PurchaseReturn']->id;
            $item['provider_name'] = $detail['PurchaseReturn']['provider']->name;
            $item['warehouse_name'] = $detail['PurchaseReturn']['warehouse']->name;
            $item['quantity'] = $detail->quantity.' '.$unit->ShortName;
            $item['total'] = $detail->total;
            $item['product_name'] = $product_name;
            $item['unit_purchase'] = $unit->ShortName;

            $data[] = $item;
        }

        return response()->json([
            'totalRows' => $totalRows,
            'purchases_return' => $data,
        ]);

    }

    // ----------------- Negative Stock Report -----------------------\\

    public function negative_stock_report(Request $request)
    {
        $this->authorizeForUser($request->user('api'), 'negative_stock_report', Product::class);

        $perPage = $request->limit ?? 10;
        $pageStart = \Request::get('page', 1);
        $offSet = ($pageStart * $perPage) - $perPage;

        // Warehouses visible to user
        $user = $request->user('api');
        if ($user->is_all_warehouses) {
            $warehouses = Warehouse::whereNull('deleted_at')->get(['id', 'name']);
            $warehouseIds = $warehouses->pluck('id')->all();
        } else {
            $warehouseIds = UserWarehouse::where('user_id', $user->id)->pluck('warehouse_id')->all();
            $warehouses = Warehouse::whereNull('deleted_at')->whereIn('id', $warehouseIds)->get(['id', 'name']);
        }
        $warehouseId = (int) ($request->warehouse_id ?: 0);

        $rowsQuery = product_warehouse::query()
            ->join('products', 'products.id', '=', 'product_warehouse.product_id')
            ->leftJoin('product_variants', 'product_variants.id', '=', 'product_warehouse.product_variant_id')
            ->join('warehouses', 'warehouses.id', '=', 'product_warehouse.warehouse_id')
            ->whereNull('product_warehouse.deleted_at')
            ->where('product_warehouse.qte', '<', 0)
            ->when($warehouseId, fn ($q) => $q->where('product_warehouse.warehouse_id', $warehouseId),
                fn ($q) => $q->whereIn('product_warehouse.warehouse_id', $warehouseIds))
            ->where(function ($q) use ($request) {
                if ($request->filled('search')) {
                    $s = '%'.$request->search.'%';
                    $q->where('products.name', 'LIKE', $s)
                        ->orWhere('products.code', 'LIKE', $s)
                        ->orWhere('warehouses.name', 'LIKE', $s)
                        ->orWhere('product_variants.name', 'LIKE', $s);
                }
            })
            ->select([
                'product_warehouse.id',
                'products.id as product_id',
                'products.code as product_code',
                'products.name as product_name',
                'product_variants.name as variant_name',
                'warehouses.name as warehouse_name',
                'product_warehouse.qte as quantity',
            ]);

        $totalRows = (clone $rowsQuery)->count();
        if ($perPage == '-1') {
            $perPage = $totalRows;
        }
        $rows = $rowsQuery->orderBy('product_warehouse.qte', 'asc')
            ->offset($offSet)
            ->limit($perPage)
            ->get();

        $data = [];
        foreach ($rows as $r) {
            $name = $r->variant_name ? ('['.$r->variant_name.'] '.$r->product_name) : $r->product_name;
            $data[] = [
                'id' => $r->id,
                'product_id' => $r->product_id,
                'code' => $r->product_code,
                'name' => $name,
                'warehouse_name' => $r->warehouse_name,
                'quantity' => (float) $r->quantity,
            ];
        }

        return response()->json([
            'totalRows' => $totalRows,
            'rows' => $data,
            'warehouses' => $warehouses,
        ]);
    }

    // -------------------- Get sales return By product -------------\\

    public function get_sales_return_by_product(request $request)
    {

        $this->authorizeForUser($request->user('api'), 'stock_report', Product::class);
        // How many items do you want to display.
        $perPage = $request->limit;
        $pageStart = \Request::get('page', 1);
        // Start displaying items from this number;
        $offSet = ($pageStart * $perPage) - $perPage;

        $user = Auth::user();
        // New way: Check user's record_view field (user-level boolean)
        // Backward compatibility: If record_view is null, fall back to role permission check
        $ShowRecord = $user->hasRecordView();

        $Sale_Return_details_data = SaleReturnDetails::with('product', 'SaleReturn', 'SaleReturn.client', 'SaleReturn.warehouse')
            ->where(function ($query) use ($ShowRecord) {
                if (! $ShowRecord) {
                    return $query->whereHas('SaleReturn', function ($q) {
                        $q->where('user_id', '=', Auth::user()->id);
                    });
                }
            })
            ->where('quantity', '>', 0)
            ->where('product_id', $request->id)
            // Search With Multiple Param
            ->where(function ($query) use ($request) {
                return $query->when($request->filled('search'), function ($query) use ($request) {
                    return $query->where(function ($query) use ($request) {
                        return $query->whereHas('SaleReturn.client', function ($q) use ($request) {
                            $q->where('name', 'LIKE', "%{$request->search}%");
                        });
                    })
                        ->orWhere(function ($query) use ($request) {
                            return $query->whereHas('SaleReturn.warehouse', function ($q) use ($request) {
                                $q->where('name', 'LIKE', "%{$request->search}%");
                            });
                        })
                        ->orWhere(function ($query) use ($request) {
                            return $query->whereHas('SaleReturn', function ($q) use ($request) {
                                $q->where('Ref', 'LIKE', "%{$request->search}%");
                            });
                        })
                        ->orWhere(function ($query) use ($request) {
                            return $query->whereHas('product', function ($q) use ($request) {
                                $q->where('name', 'LIKE', "%{$request->search}%");
                            });
                        });
                });
            });

        $totalRows = $Sale_Return_details_data->count();
        if ($perPage == '-1') {
            $perPage = $totalRows;
        }
        $Sale_Return_details = $Sale_Return_details_data->offset($offSet)
            ->limit($perPage)
            ->orderBy('id', 'desc')
            ->get();

        $data = [];
        foreach ($Sale_Return_details as $detail) {

            // check if detail has sale_unit_id Or Null
            if ($detail->sale_unit_id !== null) {
                $unit = Unit::where('id', $detail->sale_unit_id)->first();
            } else {
                $product_unit_sale_id = Product::with('unitSale')
                    ->where('id', $detail->product_id)
                    ->first();

                if ($product_unit_sale_id['unitSale']) {
                    $unit = Unit::where('id', $product_unit_sale_id['unitSale']->id)->first();
                }
                $unit = null;

            }

            if ($detail->product_variant_id) {
                $productsVariants = ProductVariant::where('product_id', $detail->product_id)
                    ->where('id', $detail->product_variant_id)->first();

                $product_name = '['.$productsVariants->name.']'.$detail['product']['name'];

            } else {
                $product_name = $detail['product']['name'];
            }

            $item['date'] = $detail['SaleReturn']->date;
            $item['Ref'] = $detail['SaleReturn']->Ref;
            $item['return_sale_id'] = $detail['SaleReturn']->id;
            $item['client_name'] = $detail['SaleReturn']['client']->name;
            $item['warehouse_name'] = $detail['SaleReturn']['warehouse']->name;
            $item['unit_sale'] = $unit ? $unit->ShortName : '';
            $item['quantity'] = $detail->quantity.' '.$item['unit_sale'];
            $item['total'] = $detail->total;
            $item['product_name'] = $product_name;

            $data[] = $item;
        }

        return response()->json([
            'totalRows' => $totalRows,
            'sales_return' => $data,
        ]);

    }

    // -------------------- Get transfers By product -------------\\

    public function get_transfer_by_product(request $request)
    {

        $this->authorizeForUser($request->user('api'), 'stock_report', Product::class);
        // How many items do you want to display.
        $perPage = $request->limit;
        $pageStart = \Request::get('page', 1);
        // Start displaying items from this number;
        $offSet = ($pageStart * $perPage) - $perPage;

        $user = Auth::user();
        // New way: Check user's record_view field (user-level boolean)
        // Backward compatibility: If record_view is null, fall back to role permission check
        $ShowRecord = $user->hasRecordView();

        $transfer_details_data = TransferDetail::with('product', 'transfer', 'transfer.from_warehouse', 'transfer.to_warehouse')
            ->where(function ($query) use ($ShowRecord) {
                if (! $ShowRecord) {
                    return $query->whereHas('transfer', function ($q) {
                        $q->where('user_id', '=', Auth::user()->id);
                    });
                }
            })
            ->where('product_id', $request->id)
            // Search With Multiple Param
            ->where(function ($query) use ($request) {
                return $query->when($request->filled('search'), function ($query) use ($request) {
                    return $query->where(function ($query) use ($request) {
                        return $query->whereHas('transfer.from_warehouse', function ($q) use ($request) {
                            $q->where('name', 'LIKE', "%{$request->search}%");
                        });
                    })
                        ->orWhere(function ($query) use ($request) {
                            return $query->whereHas('transfer.to_warehouse', function ($q) use ($request) {
                                $q->where('name', 'LIKE', "%{$request->search}%");
                            });
                        })
                        ->orWhere(function ($query) use ($request) {
                            return $query->whereHas('transfer', function ($q) use ($request) {
                                $q->where('Ref', 'LIKE', "%{$request->search}%");
                            });
                        })
                        ->orWhere(function ($query) use ($request) {
                            return $query->whereHas('product', function ($q) use ($request) {
                                $q->where('name', 'LIKE', "%{$request->search}%");
                            });
                        });
                });
            });

        $totalRows = $transfer_details_data->count();
        if ($perPage == '-1') {
            $perPage = $totalRows;
        }
        $transfer_details = $transfer_details_data->offset($offSet)
            ->limit($perPage)
            ->orderBy('id', 'desc')
            ->get();

        $data = [];
        foreach ($transfer_details as $detail) {

            if ($detail->product_variant_id) {
                $productsVariants = ProductVariant::where('product_id', $detail->product_id)
                    ->where('id', $detail->product_variant_id)->first();

                $product_name = '['.$productsVariants->name.']'.$detail['product']['name'];

            } else {
                $product_name = $detail['product']['name'];
            }

            $item['date'] = $detail['transfer']->date;
            $item['Ref'] = $detail['transfer']->Ref;
            $item['from_warehouse'] = $detail['transfer']['from_warehouse']->name;
            $item['to_warehouse'] = $detail['transfer']['to_warehouse']->name;
            $item['product_name'] = $product_name;

            $data[] = $item;
        }

        return response()->json([
            'totalRows' => $totalRows,
            'transfers' => $data,
        ]);

    }

    // -------------------- Get adjustments By product -------------\\

    public function get_adjustment_by_product(request $request)
    {

        $this->authorizeForUser($request->user('api'), 'stock_report', Product::class);
        // How many items do you want to display.
        $perPage = $request->limit;
        $pageStart = \Request::get('page', 1);
        // Start displaying items from this number;
        $offSet = ($pageStart * $perPage) - $perPage;

        $user = Auth::user();
        // New way: Check user's record_view field (user-level boolean)
        // Backward compatibility: If record_view is null, fall back to role permission check
        $ShowRecord = $user->hasRecordView();

        $adjustment_details_data = AdjustmentDetail::with('product', 'adjustment', 'adjustment.warehouse')
            ->where(function ($query) use ($ShowRecord) {
                if (! $ShowRecord) {
                    return $query->whereHas('adjustment', function ($q) {
                        $q->where('user_id', '=', Auth::user()->id);
                    });
                }
            })
            ->where('product_id', $request->id)
                // Search With Multiple Param
            ->where(function ($query) use ($request) {
                return $query->when($request->filled('search'), function ($query) use ($request) {
                    return $query->where(function ($query) use ($request) {
                        return $query->whereHas('adjustment.warehouse', function ($q) use ($request) {
                            $q->where('name', 'LIKE', "%{$request->search}%");
                        });
                    })
                        ->orWhere(function ($query) use ($request) {
                            return $query->whereHas('adjustment', function ($q) use ($request) {
                                $q->where('Ref', 'LIKE', "%{$request->search}%");
                            });
                        })
                        ->orWhere(function ($query) use ($request) {
                            return $query->whereHas('product', function ($q) use ($request) {
                                $q->where('name', 'LIKE', "%{$request->search}%");
                            });
                        });
                });
            });

        $totalRows = $adjustment_details_data->count();
        if ($perPage == '-1') {
            $perPage = $totalRows;
        }
        $adjustment_details = $adjustment_details_data->offset($offSet)
            ->limit($perPage)
            ->orderBy('id', 'desc')
            ->get();

        $data = [];
        foreach ($adjustment_details as $detail) {

            if ($detail->product_variant_id) {
                $productsVariants = ProductVariant::where('product_id', $detail->product_id)
                    ->where('id', $detail->product_variant_id)->first();

                $product_name = '['.$productsVariants->name.']'.$detail['product']['name'];

            } else {
                $product_name = $detail['product']['name'];
            }

            $item['date'] = $detail['adjustment']->date;
            $item['Ref'] = $detail['adjustment']->Ref;
            $item['warehouse_name'] = $detail['adjustment']['warehouse']->name;
            $item['product_name'] = $product_name;

            $data[] = $item;
        }

        return response()->json([
            'totalRows' => $totalRows,
            'adjustments' => $data,
        ]);

    }

    // ------------- download_report_client_pdf -----------\\

    public function download_report_client_pdf(Request $request, $id)
    {

        $this->authorizeForUser($request->user('api'), 'Reports_customers', Client::class);

        $helpers = new helpers;
        $client = Client::where('deleted_at', '=', null)->findOrFail($id);

        $Sales = Sale::where('deleted_at', '=', null)
            ->where([
                ['payment_statut', '!=', 'paid'],
                ['client_id', $id],
            ])->get();

        $sales_details = [];

        foreach ($Sales as $Sale) {

            $item_sale['date'] = $Sale['date'];
            $item_sale['Ref'] = $Sale['Ref'];
            $item_sale['GrandTotal'] = number_format($Sale['GrandTotal'], 2, '.', '');
            $item_sale['paid_amount'] = number_format($Sale['paid_amount'], 2, '.', '');
            $item_sale['due'] = number_format($item_sale['GrandTotal'] - $item_sale['paid_amount'], 2, '.', '');
            $item_sale['payment_status'] = $Sale['payment_statut'];

            $sales_details[] = $item_sale;
        }

        $data['client_name'] = $client->name;
        $data['phone'] = $client->phone;

        $data['total_sales'] = DB::table('sales')->where('deleted_at', '=', null)->where('client_id', $id)->count();

        $data['total_amount'] = DB::table('sales')
            ->where('deleted_at', '=', null)
            ->where('statut', 'completed')
            ->where('client_id', $client->id)
            ->sum('GrandTotal');

        $data['total_paid'] = DB::table('sales')
            ->where('deleted_at', '=', null)
            ->where('statut', 'completed')
            ->where('client_id', $client->id)
            ->sum('paid_amount');

        $data['due'] = $data['total_amount'] - $data['total_paid'];

        $data['total_amount_return'] = DB::table('sale_returns')
            ->where('deleted_at', '=', null)
            ->where('client_id', $client->id)
            ->sum('GrandTotal');

        $data['total_paid_return'] = DB::table('sale_returns')
            ->where('deleted_at', '=', null)
            ->where('client_id', $client->id)
            ->sum('paid_amount');

        $data['return_Due'] = $data['total_amount_return'] - $data['total_paid_return'];

        $symbol = $helpers->Get_Currency();
        $settings = Setting::where('deleted_at', '=', null)->first();

        $pdf = \PDF::loadView('pdf.report_client_pdf', [
            'symbol' => $symbol,
            'client' => $data,
            'sales' => $sales_details,
            'setting' => $settings,
        ]);

        return $pdf->download('report_client.pdf');

    }

    // ------------- download_report_provider_pdf -----------\\

    public function download_report_provider_pdf(Request $request, $id)
    {

        $this->authorizeForUser($request->user('api'), 'Reports_suppliers', Provider::class);

        $helpers = new helpers;
        $provider = Provider::where('deleted_at', '=', null)->findOrFail($id);

        $purchases = Purchase::where('deleted_at', '=', null)
            ->where('payment_statut', '!=', 'paid')
            ->where('provider_id', $id)
            ->get();

        $purchases_details = [];

        foreach ($purchases as $purchase) {

            $item_purchase['date'] = $purchase['date'];
            $item_purchase['Ref'] = $purchase['Ref'];
            $item_purchase['GrandTotal'] = number_format($purchase['GrandTotal'], 2, '.', '');
            $item_purchase['paid_amount'] = number_format($purchase['paid_amount'], 2, '.', '');
            $item_purchase['due'] = number_format($item_purchase['GrandTotal'] - $item_purchase['paid_amount'], 2, '.', '');
            $item_purchase['payment_status'] = $purchase['payment_statut'];

            $purchases_details[] = $item_purchase;
        }

        $data['provider_name'] = $provider->name;
        $data['phone'] = $provider->phone;

        $data['total_purchase'] = DB::table('purchases')->where('deleted_at', '=', null)->where('provider_id', $id)->count();

        $data['total_amount'] = DB::table('purchases')
            ->where('deleted_at', '=', null)
            ->where('statut', 'received')
            ->where('provider_id', $id)
            ->sum('GrandTotal');

        $data['total_paid'] = DB::table('purchases')
            ->where('deleted_at', '=', null)
            ->where('statut', 'received')
            ->where('provider_id', $id)
            ->sum('paid_amount');

        $data['due'] = $data['total_amount'] - $data['total_paid'];

        $data['total_amount_return'] = DB::table('purchase_returns')
            ->where('deleted_at', '=', null)
            ->where('provider_id', $id)
            ->sum('GrandTotal');

        $data['total_paid_return'] = DB::table('purchase_returns')
            ->where('deleted_at', '=', null)
            ->where('provider_id', $id)
            ->sum('paid_amount');

        $data['return_Due'] = $data['total_amount_return'] - $data['total_paid_return'];

        $symbol = $helpers->Get_Currency();
        $settings = Setting::where('deleted_at', '=', null)->first();

        $pdf = \PDF::loadView('pdf.report_provider_pdf', [
            'symbol' => $symbol,
            'provider' => $data,
            'purchases' => $purchases_details,
            'setting' => $settings,
        ]);

        return $pdf->download('report_provider.pdf');

    }

    // -------------------- product_report -------------\\

    public function product_report(request $request)
    {
        $this->authorizeForUser($request->user('api'), 'product_report', Product::class);

        $Role = Auth::user()->roles()->first();
        $user = Auth::user();
        // New way: Check user's record_view field (user-level boolean)
        // Backward compatibility: If record_view is null, fall back to role permission check
        $view_records = $user->hasRecordView();
        // How many items do you want to display.
        $perPage = $request->limit;
        $pageStart = \Request::get('page', 1);
        // Start displaying items from this number;
        $offSet = ($pageStart * $perPage) - $perPage;

        // get warehouses assigned to user
        $user_auth = auth()->user();
        if ($user_auth->is_all_warehouses) {
            $warehouses = Warehouse::where('deleted_at', '=', null)->get(['id', 'name']);
            $array_warehouses_id = Warehouse::where('deleted_at', '=', null)->pluck('id')->toArray();
        } else {
            $array_warehouses_id = UserWarehouse::where('user_id', $user_auth->id)->pluck('warehouse_id')->toArray();
            $warehouses = Warehouse::where('deleted_at', '=', null)->whereIn('id', $array_warehouses_id)->get(['id', 'name']);
        }

        $products_data = Product::where('deleted_at', '=', null)->select('id', 'name', 'code', 'is_variant', 'unit_id', 'type')
            ->where(function ($query) use ($request) {
                return $query->when($request->filled('search'), function ($query) use ($request) {
                    return $query->where('name', 'LIKE', "%{$request->search}%")
                        ->orWhere('code', 'LIKE', "%{$request->search}%");
                });
            });

        $totalRows = $products_data->count();
        if ($perPage == '-1') {
            $perPage = $totalRows;
        }

        $products = $products_data->offset($offSet)
            ->limit($perPage)
            ->get();

        $product_details = [];
        $total_sales = 0;
        foreach ($products as $product) {

            if ($product->type != 'is_service') {
                $nestedData['id'] = $product->id;
                $nestedData['name'] = $product->name;
                $nestedData['code'] = $product->code;

                $nestedData['sold_amount'] = SaleDetail::with('sale')->where('product_id', $product->id)
                    ->where(function ($query) use ($view_records) {
                        if (! $view_records) {
                            return $query->whereHas('sale', function ($q) {
                                $q->where('user_id', '=', Auth::user()->id);
                            });

                        }
                    })
                    ->where(function ($query) use ($request, $array_warehouses_id) {
                        if ($request->warehouse_id) {
                            return $query->whereHas('sale', function ($q) use ($request) {
                                $q->where('warehouse_id', $request->warehouse_id);
                            });
                        } else {
                            return $query->whereHas('sale', function ($q) use ($array_warehouses_id) {
                                $q->whereIn('warehouse_id', $array_warehouses_id);
                            });

                        }
                    })
                    ->whereBetween('date', [$request->from, $request->to])
                    ->sum('total');

                $lims_product_sale_data = SaleDetail::select('sale_unit_id', 'quantity')->with('sale')->where('product_id', $product->id)
                    ->where(function ($query) use ($view_records) {
                        if (! $view_records) {
                            return $query->whereHas('sale', function ($q) {
                                $q->where('user_id', '=', Auth::user()->id);
                            });

                        }
                    })
                    ->where(function ($query) use ($request, $array_warehouses_id) {
                        if ($request->warehouse_id) {
                            return $query->whereHas('sale', function ($q) use ($request) {
                                $q->where('warehouse_id', $request->warehouse_id);
                            });
                        } else {
                            return $query->whereHas('sale', function ($q) use ($array_warehouses_id) {
                                $q->whereIn('warehouse_id', $array_warehouses_id);
                            });

                        }
                    })
                    ->whereBetween('date', [$request->from, $request->to])
                    ->get();

                $sold_qty = 0;
                if (count($lims_product_sale_data)) {
                    foreach ($lims_product_sale_data as $product_sale) {
                        $unit = Unit::find($product_sale->sale_unit_id);

                        if ($unit->operator == '*') {
                            $sold_qty += $product_sale->quantity * $unit->operator_value;
                        } elseif ($unit->operator == '/') {
                            $sold_qty += $product_sale->quantity / $unit->operator_value;
                        }

                    }
                }

                $unit_shortname = Unit::where('id', $product->unit_id)->first();

                $nestedData['sold_qty'] = $sold_qty.' '.$unit_shortname->ShortName;

                $product_details[] = $nestedData;

            } else {

                $nestedData['id'] = $product->id;
                $nestedData['name'] = $product->name;
                $nestedData['code'] = $product->code;

                $nestedData['sold_amount'] = SaleDetail::with('sale')->where('product_id', $product->id)
                    ->where(function ($query) use ($view_records) {
                        if (! $view_records) {
                            return $query->whereHas('sale', function ($q) {
                                $q->where('user_id', '=', Auth::user()->id);
                            });

                        }
                    })
                    ->where(function ($query) use ($request, $array_warehouses_id) {
                        if ($request->warehouse_id) {
                            return $query->whereHas('sale', function ($q) use ($request) {
                                $q->where('warehouse_id', $request->warehouse_id);
                            });
                        } else {
                            return $query->whereHas('sale', function ($q) use ($array_warehouses_id) {
                                $q->whereIn('warehouse_id', $array_warehouses_id);
                            });

                        }
                    })
                    ->whereBetween('date', [$request->from, $request->to])
                    ->sum('total');

                $sold_qty = SaleDetail::select('sale_unit_id', 'quantity')->with('sale')->where('product_id', $product->id)
                    ->where(function ($query) use ($view_records) {
                        if (! $view_records) {
                            return $query->whereHas('sale', function ($q) {
                                $q->where('user_id', '=', Auth::user()->id);
                            });

                        }
                    })
                    ->where(function ($query) use ($request, $array_warehouses_id) {
                        if ($request->warehouse_id) {
                            return $query->whereHas('sale', function ($q) use ($request) {
                                $q->where('warehouse_id', $request->warehouse_id);
                            });
                        } else {
                            return $query->whereHas('sale', function ($q) use ($array_warehouses_id) {
                                $q->whereIn('warehouse_id', $array_warehouses_id);
                            });

                        }
                    })
                    ->whereBetween('date', [$request->from, $request->to])
                    ->sum('quantity');

                $nestedData['sold_qty'] = $sold_qty;

                $product_details[] = $nestedData;
            }
        }

        return response()->json([
            'products' => $product_details,
            'totalRows' => $totalRows,
            'warehouses' => $warehouses,
        ]);

    }

    // -------------------- sale product details -------------\\

    public function sale_products_details(request $request)
    {

        $this->authorizeForUser($request->user('api'), 'product_report', Product::class);
        // How many items do you want to display.
        $perPage = $request->limit;
        $pageStart = \Request::get('page', 1);
        // Start displaying items from this number;
        $offSet = ($pageStart * $perPage) - $perPage;

        $user = Auth::user();
        // New way: Check user's record_view field (user-level boolean)
        // Backward compatibility: If record_view is null, fall back to role permission check
        $ShowRecord = $user->hasRecordView();

        $sale_details_data = SaleDetail::with('product', 'sale', 'sale.client', 'sale.warehouse', 'sale.user')
            ->where(function ($query) use ($ShowRecord) {
                if (! $ShowRecord) {
                    return $query->whereHas('sale', function ($q) {
                        $q->where('user_id', '=', Auth::user()->id);
                    });
                }
            })
            ->whereBetween('date', [$request->from, $request->to])
            ->where('product_id', $request->id)

             // Filters
            ->where(function ($query) use ($request) {
                return $query->when($request->filled('Ref'), function ($query) use ($request) {
                    return $query->where(function ($query) use ($request) {
                        return $query->whereHas('sale', function ($q) use ($request) {
                            $q->where('Ref', 'LIKE', "{$request->Ref}");
                        });
                    });
                });
            })

            ->where(function ($query) use ($request) {
                return $query->when($request->filled('client_id'), function ($query) use ($request) {
                    return $query->where(function ($query) use ($request) {
                        return $query->whereHas('sale.client', function ($q) use ($request) {
                            $q->where('client_id', $request->client_id);
                        });
                    });
                });
            })

            ->where(function ($query) use ($request) {
                return $query->when($request->filled('warehouse_id'), function ($query) use ($request) {
                    return $query->where(function ($query) use ($request) {
                        return $query->whereHas('sale.warehouse', function ($q) use ($request) {
                            $q->where('warehouse_id', $request->warehouse_id);
                        });
                    });
                });
            })

            ->where(function ($query) use ($request) {
                return $query->when($request->filled('user_id'), function ($query) use ($request) {
                    return $query->where(function ($query) use ($request) {
                        return $query->whereHas('sale.user', function ($q) use ($request) {
                            $q->where('user_id', $request->user_id);
                        });
                    });
                });
            })

            // search
            ->where(function ($query) use ($request) {
                return $query->when($request->filled('search'), function ($query) use ($request) {
                    return $query->where(function ($query) use ($request) {
                        return $query->whereHas('sale.client', function ($q) use ($request) {
                            $q->where('name', 'LIKE', "%{$request->search}%");
                        });
                    })
                        ->orWhere(function ($query) use ($request) {
                            return $query->whereHas('sale.warehouse', function ($q) use ($request) {
                                $q->where('name', 'LIKE', "%{$request->search}%");
                            });
                        })
                        ->orWhere(function ($query) use ($request) {
                            return $query->whereHas('sale', function ($q) use ($request) {
                                $q->where('Ref', 'LIKE', "%{$request->search}%");
                            });
                        })
                        ->orWhere(function ($query) use ($request) {
                            return $query->whereHas('product', function ($q) use ($request) {
                                $q->where('name', 'LIKE', "%{$request->search}%");
                            });
                        });
                });
            });

        $totalRows = $sale_details_data->count();
        if ($perPage == '-1') {
            $perPage = $totalRows;
        }
        $sale_details = $sale_details_data->offset($offSet)
            ->limit($perPage)
            ->orderBy('id', 'desc')
            ->get();

        $data = [];
        foreach ($sale_details as $detail) {

            // check if detail has sale_unit_id Or Null
            if ($detail->sale_unit_id !== null) {
                $unit = Unit::where('id', $detail->sale_unit_id)->first();
            } else {
                $product_unit_sale_id = Product::with('unitSale')
                    ->where('id', $detail->product_id)
                    ->first();

                if ($product_unit_sale_id['unitSale']) {
                    $unit = Unit::where('id', $product_unit_sale_id['unitSale']->id)->first();
                }
                $unit = null;

            }

            if ($detail->product_variant_id) {
                $productsVariants = ProductVariant::where('product_id', $detail->product_id)
                    ->where('id', $detail->product_variant_id)->first();

                $product_name = '['.$productsVariants->name.']'.$detail['product']['name'];

            } else {
                $product_name = $detail['product']['name'];
            }

            $item['date'] = $detail->date;
            $item['Ref'] = $detail['sale']->Ref;
            $item['created_by'] = $detail['sale']['user']->username;
            $item['sale_id'] = $detail['sale']->id;
            $item['client_name'] = $detail['sale']['client']->name;
            $item['warehouse_name'] = $detail['sale']['warehouse']->name;
            $item['unit_sale'] = $unit ? $unit->ShortName : '';
            $item['quantity'] = $detail->quantity.' '.$item['unit_sale'];
            $item['total'] = $detail->total;
            $item['product_name'] = $product_name;

            $data[] = $item;
        }

        $customers = client::where('deleted_at', '=', null)->get(['id', 'name']);
        $users = User::get(['id', 'username']);

        // get warehouses assigned to user
        $user_auth = auth()->user();
        if ($user_auth->is_all_warehouses) {
            $warehouses = Warehouse::where('deleted_at', '=', null)->get(['id', 'name']);
        } else {
            $warehouses_id = UserWarehouse::where('user_id', $user_auth->id)->pluck('warehouse_id')->toArray();
            $warehouses = Warehouse::where('deleted_at', '=', null)->whereIn('id', $warehouses_id)->get(['id', 'name']);
        }

        return response()->json([
            'totalRows' => $totalRows,
            'sales' => $data,
            'customers' => $customers,
            'warehouses' => $warehouses,
            'users' => $users,
        ]);

    }

    // -------------------- product_sales_report  -------------\\

    public function product_sales_report(request $request)
    {

        $this->authorizeForUser($request->user('api'), 'product_sales_report', Sale::class);

        // Normalize date filter to Y-m-d (avoid timezone/invalid input issues)
        $today = Carbon::today();
        $from = $request->filled('from')
            ? Carbon::parse($request->from)->toDateString()
            : $today->copy()->subDays(29)->toDateString();
        $to = $request->filled('to')
            ? Carbon::parse($request->to)->toDateString()
            : $today->toDateString();
        if ($from > $to) {
            $from = $to;
        }

        $user = Auth::user();
        // New way: Check user's record_view field (user-level boolean)
        // Backward compatibility: If record_view is null, fall back to role permission check
        $view_records = $user->hasRecordView();
        // How many items do you want to display.
        $perPage = $request->limit;

        $pageStart = \Request::get('page', 1);
        // Start displaying items from this number;
        $offSet = ($pageStart * $perPage) - $perPage;
        $order = $request->SortField;
        $dir = $request->SortType;
        $helpers = new helpers;
        // Filter fields With Params to retrieve
        $param = [
            0 => '=',
            1 => '=',
        ];
        $columns = [
            0 => 'client_id',
            1 => 'warehouse_id',
        ];
        $data = [];

        $sale_details_data = SaleDetail::with('product', 'sale', 'sale.client', 'sale.warehouse')
            ->where(function ($query) use ($view_records) {
                if (! $view_records) {
                    return $query->whereHas('sale', function ($q) {
                        $q->where('user_id', '=', Auth::user()->id);
                    });
                }
            })
            ->whereBetween('date', [$from, $to]);

        // Filter
        $sale_details_Filtred = $sale_details_data->where(function ($query) use ($request) {
            return $query->when($request->filled('client_id'), function ($query) use ($request) {
                return $query->whereHas('sale.client', function ($q) use ($request) {
                    $q->where('client_id', '=', $request->client_id);
                });
            });
        })
            ->where(function ($query) use ($request) {
                return $query->when($request->filled('warehouse_id'), function ($query) use ($request) {
                    return $query->whereHas('sale.warehouse', function ($q) use ($request) {
                        $q->where('warehouse_id', '=', $request->warehouse_id);
                    });
                });
            })

        // Search With Multiple Param
            ->where(function ($query) use ($request) {
                return $query->when($request->filled('search'), function ($query) use ($request) {
                    return $query->where(function ($query) use ($request) {
                        return $query->whereHas('sale.client', function ($q) use ($request) {
                            $q->where('name', 'LIKE', "%{$request->search}%");
                        });
                    })
                        ->orWhere(function ($query) use ($request) {
                            return $query->whereHas('sale.warehouse', function ($q) use ($request) {
                                $q->where('name', 'LIKE', "%{$request->search}%");
                            });
                        })
                        ->orWhere(function ($query) use ($request) {
                            return $query->whereHas('sale', function ($q) use ($request) {
                                $q->where('Ref', 'LIKE', "%{$request->search}%");
                            });
                        })
                        ->orWhere(function ($query) use ($request) {
                            return $query->whereHas('product', function ($q) use ($request) {
                                $q->where('name', 'LIKE', "%{$request->search}%");
                            });
                        });
                });
            });

        $totalRows = $sale_details_Filtred->count();
        if ($perPage == '-1') {
            $perPage = $totalRows;
        }

        $sale_details = $sale_details_Filtred
            ->offset($offSet)
            ->limit($perPage)
            ->orderBy($order, $dir)
            ->get();

        foreach ($sale_details as $detail) {

            // check if detail has sale_unit_id Or Null
            if ($detail->sale_unit_id !== null) {
                $unit = Unit::where('id', $detail->sale_unit_id)->first();
            } else {
                $product_unit_sale_id = Product::with('unitSale')
                    ->where('id', $detail->product_id)
                    ->first();

                if ($product_unit_sale_id['unitSale']) {
                    $unit = Unit::where('id', $product_unit_sale_id['unitSale']->id)->first();
                }
                $unit = null;

            }

            if ($detail->product_variant_id) {
                $productsVariants = ProductVariant::where('product_id', $detail->product_id)
                    ->where('id', $detail->product_variant_id)->first();

                $product_name = '['.$productsVariants->name.']'.$detail['product']['name'];

            } else {
                $product_name = $detail['product']['name'];
            }

            $item['date'] = $detail->date;
            $item['Ref'] = $detail['sale']->Ref;
            $item['client_name'] = $detail['sale']['client']->name;
            $item['warehouse_name'] = $detail['sale']['warehouse']->name;
            $item['quantity'] = $detail->quantity;
            $item['total'] = $detail->total;
            $item['product_name'] = $product_name;
            $item['unit_sale'] = $unit ? $unit->ShortName : '';

            $data[] = $item;
        }

        // get warehouses assigned to user
        $user_auth = auth()->user();
        if ($user_auth->is_all_warehouses) {
            $warehouses = Warehouse::where('deleted_at', '=', null)->get(['id', 'name']);
        } else {
            $warehouses_id = UserWarehouse::where('user_id', $user_auth->id)->pluck('warehouse_id')->toArray();
            $warehouses = Warehouse::where('deleted_at', '=', null)->whereIn('id', $warehouses_id)->get(['id', 'name']);
        }

        $customers = client::where('deleted_at', '=', null)->get(['id', 'name']);

        return response()->json([
            'totalRows' => $totalRows,
            'sales' => $data,
            'customers' => $customers,
            'warehouses' => $warehouses,
        ]);

    }

    // -------------------- product_purchases_report  -------------\\

    public function product_purchases_report(request $request)
    {

        $this->authorizeForUser($request->user('api'), 'product_purchases_report', Purchase::class);

        // Normalize date filter to Y-m-d (avoid timezone/invalid input issues)
        $today = Carbon::today();
        $from = $request->filled('from')
            ? Carbon::parse($request->from)->toDateString()
            : $today->copy()->subDays(29)->toDateString();
        $to = $request->filled('to')
            ? Carbon::parse($request->to)->toDateString()
            : $today->toDateString();
        if ($from > $to) {
            $from = $to;
        }

        $user = Auth::user();
        // New way: Check user's record_view field (user-level boolean)
        // Backward compatibility: If record_view is null, fall back to role permission check
        $view_records = $user->hasRecordView();
        // How many items do you want to display.
        $perPage = $request->limit;

        $pageStart = \Request::get('page', 1);
        // Start displaying items from this number;
        $offSet = ($pageStart * $perPage) - $perPage;
        $order = $request->SortField;
        $dir = $request->SortType;
        $helpers = new helpers;
        // Filter fields With Params to retrieve
        $param = [
            0 => '=',
            1 => '=',
        ];
        $columns = [
            0 => 'provider_id',
            1 => 'warehouse_id',
        ];
        $data = [];

        $purchase_details_data = PurchaseDetail::with('product', 'purchase', 'purchase.provider', 'purchase.warehouse')
            ->where(function ($query) use ($view_records) {
                if (! $view_records) {
                    return $query->whereHas('purchase', function ($q) {
                        $q->where('user_id', '=', Auth::user()->id);
                    });
                }
            })
            ->where(function ($query) use ($from, $to) {
                return $query->whereHas('purchase', function ($q) use ($from, $to) {
                    $q->whereBetween('date', [$from, $to]);
                });
            });

        // Filter
        $purchase_details_Filtred = $purchase_details_data->where(function ($query) use ($request) {
            return $query->when($request->filled('provider_id'), function ($query) use ($request) {
                return $query->whereHas('purchase.provider', function ($q) use ($request) {
                    $q->where('provider_id', '=', $request->provider_id);
                });
            });
        })
            ->where(function ($query) use ($request) {
                return $query->when($request->filled('warehouse_id'), function ($query) use ($request) {
                    return $query->whereHas('purchase.warehouse', function ($q) use ($request) {
                        $q->where('warehouse_id', '=', $request->warehouse_id);
                    });
                });
            })

        // Search With Multiple Param
            ->where(function ($query) use ($request) {
                return $query->when($request->filled('search'), function ($query) use ($request) {
                    return $query->where(function ($query) use ($request) {
                        return $query->whereHas('purchase.provider', function ($q) use ($request) {
                            $q->where('name', 'LIKE', "%{$request->search}%");
                        });
                    })
                        ->orWhere(function ($query) use ($request) {
                            return $query->whereHas('purchase', function ($q) use ($request) {
                                $q->where('Ref', 'LIKE', "%{$request->search}%");
                            });
                        })
                        ->orWhere(function ($query) use ($request) {
                            return $query->whereHas('product', function ($q) use ($request) {
                                $q->where('name', 'LIKE', "%{$request->search}%");
                            });
                        })
                        ->orWhere(function ($query) use ($request) {
                            return $query->whereHas('purchase.warehouse', function ($q) use ($request) {
                                $q->where('name', 'LIKE', "%{$request->search}%");
                            });
                        });
                });
            });

        $totalRows = $purchase_details_Filtred->count();
        if ($perPage == '-1') {
            $perPage = $totalRows;
        }

        $purchase_details = $purchase_details_Filtred
            ->offset($offSet)
            ->limit($perPage)
            ->orderBy($order, $dir)
            ->get();

        foreach ($purchase_details as $detail) {

            // -------check if detail has purchase_unit_id Or Null
            if ($detail->purchase_unit_id !== null) {
                $unit = Unit::where('id', $detail->purchase_unit_id)->first();
            } else {
                $product_unit_purchase_id = Product::with('unitPurchase')
                    ->where('id', $detail->product_id)
                    ->first();
                $unit = Unit::where('id', $product_unit_purchase_id['unitPurchase']->id)->first();
            }

            if ($detail->product_variant_id) {
                $productsVariants = ProductVariant::where('product_id', $detail->product_id)
                    ->where('id', $detail->product_variant_id)->first();

                $product_name = '['.$productsVariants->name.']'.$detail['product']['name'];

            } else {
                $product_name = $detail['product']['name'];
            }

            $item['date'] = $detail['purchase']->date;
            $item['Ref'] = $detail['purchase']->Ref;
            $item['provider_name'] = $detail['purchase']['provider']->name;
            $item['warehouse_name'] = $detail['purchase']['warehouse']->name;
            $item['quantity'] = $detail->quantity;
            $item['total'] = $detail->total;
            $item['product_name'] = $product_name;
            $item['unit_purchase'] = $unit->ShortName;

            $data[] = $item;
        }

        // get warehouses assigned to user
        $user_auth = auth()->user();
        if ($user_auth->is_all_warehouses) {
            $warehouses = Warehouse::where('deleted_at', '=', null)->get(['id', 'name']);
        } else {
            $warehouses_id = UserWarehouse::where('user_id', $user_auth->id)->pluck('warehouse_id')->toArray();
            $warehouses = Warehouse::where('deleted_at', '=', null)->whereIn('id', $warehouses_id)->get(['id', 'name']);
        }

        $suppliers = Provider::where('deleted_at', '=', null)->get(['id', 'name']);

        return response()->json([
            'totalRows' => $totalRows,
            'purchases' => $data,
            'suppliers' => $suppliers,
            'warehouses' => $warehouses,
        ]);

    }

    // ----------------- inventory_valuation_summary -----------------------\\

    public function inventory_valuation_summary(Request $request)
    {
        $this->authorizeForUser($request->user('api'), 'inventory_valuation', Product::class);

        // pagination
        $perPage = (int) ($request->limit ?? 10);
        $pageStart = (int) ($request->get('page', 1));
        $offSet = ($pageStart * max($perPage, 1)) - max($perPage, 1);
        $order = $request->get('SortField', 'id');
        $dir = $request->get('SortType', 'desc');

        // warehouses
        $warehouses = Warehouse::whereNull('deleted_at')->get(['id', 'name']);
        $allWarehouseIds = $warehouses->pluck('id')->toArray();
        $warehouse_id = (int) ($request->warehouse_id ?? 0);
        $selectedWarehouseIds = $warehouse_id !== 0 ? [$warehouse_id] : $allWarehouseIds;

        // base query + search
        $productsQuery = Product::with('unit')
            ->whereNull('deleted_at')
            ->when($request->filled('search'), function ($q) use ($request) {
                $s = $request->search;
                $q->where(function ($qq) use ($s) {
                    $qq->where('products.name', 'LIKE', "%{$s}%")
                        ->orWhere('products.code', 'LIKE', "%{$s}%");
                });
            });

        $totalRows = (clone $productsQuery)->count();
        if ($perPage === -1) {
            $perPage = $totalRows;
        }

        $products = $productsQuery
            ->orderBy($order ?: 'id', $dir ?: 'desc')
            ->offset($offSet)
            ->limit($perPage)
            ->get();

        // prefetch variants for page products
        $productIds = $products->pluck('id')->all();
        $variantsByProduct = ProductVariant::whereIn('product_id', $productIds)
            ->whereNull('deleted_at')
            ->get()
            ->groupBy('product_id');

        // one grouped query for stock across selected warehouses
        $stockRows = product_warehouse::select(
            'product_id',
            'product_variant_id',
            DB::raw('SUM(qte) as qty')
        )
            ->whereIn('product_id', $productIds)
            ->whereNull('deleted_at')
            ->when(! empty($selectedWarehouseIds), function ($q) use ($selectedWarehouseIds) {
                $q->whereIn('warehouse_id', $selectedWarehouseIds);
            })
            ->groupBy('product_id', 'product_variant_id')
            ->get();

        // build lookups: $stockMap[product_id][variant_id or 0] = qty
        $stockMap = [];
        foreach ($stockRows as $r) {
            $pid = (int) $r->product_id;
            $vid = (int) ($r->product_variant_id ?? 0);
            $stockMap[$pid][$vid] = (float) $r->qty;
        }

        $data = [];

        foreach ($products as $product) {
            $item = [
                'id' => $product->id,
                'code' => $product->code,
                'name' => $product->name, // plain text (escaped on client)
                'unit_name' => optional($product->unit)->ShortName ?: '',
            ];

            // default values (newline-delimited strings, no HTML)
            $item['variant_name'] = '---';
            $item['stock_hand'] = '0.00';
            $item['inventory_value'] = '0.00';

            if ($product->type === 'is_variant') {
                $variants = $variantsByProduct->get($product->id, collect());

                $names = [];
                $stocks = [];
                $values = [];

                foreach ($variants as $variant) {
                    $vid = (int) $variant->id;
                    $qty = (float) ($stockMap[$product->id][$vid] ?? 0.0);
                    $cost = (float) $variant->cost;               // ✅ default cost from variant
                    $value = $qty * $cost;

                    $names[] = $variant->name.' ('.$item['unit_name'].')';
                    $stocks[] = number_format($qty, 2, '.', '');   // no thousands sep
                    $values[] = number_format($value, 2, '.', '');
                }

                if (! empty($names)) {
                    $item['variant_name'] = implode("\n", $names);
                    $item['stock_hand'] = implode("\n", $stocks);
                    $item['inventory_value'] = implode("\n", $values);
                }
            } else {
                // non-variant product (Single/Combo/Service)
                $qty = (float) ($stockMap[$product->id][0] ?? 0.0);
                $cost = (float) $product->cost;                   // ✅ default cost from product
                $value = $product->type === 'is_service' ? 0.0 : ($qty * $cost);

                $item['variant_name'] = '---';
                $item['stock_hand'] = $product->type !== 'is_service'
                    ? number_format($qty, 2, '.', '')
                    : '0.00';

                $item['inventory_value'] = $product->type !== 'is_service'
                    ? number_format($value, 2, '.', '')
                    : '0.00';
            }

            $data[] = $item;
        }

        return response()->json([
            'reports' => $data,
            'totalRows' => $totalRows,
            'warehouses' => $warehouses,
        ]);
    }

    // ----------------- stock_inventory_valuation -----------------------\\

    public function stock_inventory_valuation(Request $request)
    {
        $this->authorizeForUser($request->user('api'), 'Stock_Inventory_Valuation', Product::class);

        // pagination
        $perPage = (int) ($request->limit ?? 10);
        $pageStart = (int) ($request->get('page', 1));
        $offSet = ($pageStart * max($perPage, 1)) - max($perPage, 1);
        $order = $request->get('SortField', 'id');
        $dir = $request->get('SortType', 'desc');

        // warehouses
        $user_auth = auth()->user();
        if ($user_auth->is_all_warehouses) {
            $warehouses = Warehouse::whereNull('deleted_at')->get(['id', 'name']);
            $allWarehouseIds = $warehouses->pluck('id')->toArray();
        } else {
            $allWarehouseIds = UserWarehouse::where('user_id', $user_auth->id)->pluck('warehouse_id')->toArray();
            $warehouses = Warehouse::whereNull('deleted_at')->whereIn('id', $allWarehouseIds)->get(['id', 'name']);
        }

        $warehouse_id = (int) ($request->warehouse_id ?? 0);
        $selectedWarehouseIds = $warehouse_id !== 0 ? [$warehouse_id] : $allWarehouseIds;

        // base query + search
        $productsQuery = Product::with('unit', 'category')
            ->whereNull('deleted_at')
            ->when($request->filled('search'), function ($q) use ($request) {
                $s = $request->search;
                $q->where(function ($qq) use ($s) {
                    $qq->where('products.name', 'LIKE', "%{$s}%")
                        ->orWhere('products.code', 'LIKE', "%{$s}%");
                });
            });

        $totalRows = (clone $productsQuery)->count();
        if ($perPage === -1) {
            $perPage = $totalRows;
        }

        $products = $productsQuery
            ->orderBy($order ?: 'id', $dir ?: 'desc')
            ->offset($offSet)
            ->limit($perPage)
            ->get();

        // prefetch variants
        $productIds = $products->pluck('id')->all();
        $variantsByProduct = ProductVariant::whereIn('product_id', $productIds)
            ->whereNull('deleted_at')
            ->get()
            ->groupBy('product_id');

        // Get stock data per warehouse
        $stockRows = product_warehouse::select(
            'product_id',
            'product_variant_id',
            'warehouse_id',
            DB::raw('SUM(qte) as qty')
        )
            ->whereIn('product_id', $productIds)
            ->whereNull('deleted_at')
            ->whereIn('warehouse_id', $selectedWarehouseIds)
            ->groupBy('product_id', 'product_variant_id', 'warehouse_id')
            ->get();

        // Date range filter — normalize to Y-m-d and default to last 30 days if missing
        $today = Carbon::today();
        $dateFromStr = $request->filled('date_from')
            ? Carbon::parse($request->date_from)->toDateString()
            : $today->copy()->subDays(29)->toDateString();
        $dateToStr = $request->filled('date_to')
            ? Carbon::parse($request->date_to)->toDateString()
            : $today->toDateString();
        if ($dateFromStr > $dateToStr) {
            $dateFromStr = $dateToStr;
        }
        $dateFrom = Carbon::parse($dateFromStr)->startOfDay();
        $dateTo = Carbon::parse($dateToStr)->endOfDay();

        // Get totals for sold, transferred, adjusted per warehouse
        $soldQuery = SaleDetail::select(
            'sale_details.product_id',
            'sale_details.product_variant_id',
            'sales.warehouse_id',
            DB::raw('SUM(sale_details.quantity) as total')
        )
            ->join('sales', 'sales.id', '=', 'sale_details.sale_id')
            ->whereIn('sale_details.product_id', $productIds)
            ->whereIn('sales.warehouse_id', $selectedWarehouseIds)
            ->whereNull('sales.deleted_at');

        if ($dateFrom && $dateTo) {
            $soldQuery->whereBetween('sales.date', [$dateFrom->toDateString(), $dateTo->toDateString()]);
        }

        $soldTotals = $soldQuery
            ->groupBy('sale_details.product_id', 'sale_details.product_variant_id', 'sales.warehouse_id')
            ->get()
            ->keyBy(function ($item) {
                return $item->product_id.'_'.($item->product_variant_id ?? 0).'_'.$item->warehouse_id;
            });

        // Get most common sale_unit_id per product/variant/warehouse
        $soldUnitsQuery = SaleDetail::select(
            'sale_details.product_id',
            'sale_details.product_variant_id',
            'sales.warehouse_id',
            'sale_details.sale_unit_id',
            DB::raw('COUNT(*) as count')
        )
            ->join('sales', 'sales.id', '=', 'sale_details.sale_id')
            ->whereIn('sale_details.product_id', $productIds)
            ->whereIn('sales.warehouse_id', $selectedWarehouseIds)
            ->whereNotNull('sale_details.sale_unit_id')
            ->whereNull('sales.deleted_at');

        if ($dateFrom && $dateTo) {
            $soldUnitsQuery->whereBetween('sales.date', [$dateFrom->toDateString(), $dateTo->toDateString()]);
        }

        $soldUnits = $soldUnitsQuery
            ->groupBy('sale_details.product_id', 'sale_details.product_variant_id', 'sales.warehouse_id', 'sale_details.sale_unit_id')
            ->get()
            ->groupBy(function ($item) {
                return $item->product_id.'_'.($item->product_variant_id ?? 0).'_'.$item->warehouse_id;
            })
            ->map(function ($group) {
                return $group->sortByDesc('count')->first()->sale_unit_id;
            });

        $transferredQuery = TransferDetail::select(
            'transfer_details.product_id',
            'transfer_details.product_variant_id',
            'transfers.from_warehouse_id as warehouse_id',
            DB::raw('SUM(transfer_details.quantity) as total')
        )
            ->join('transfers', 'transfers.id', '=', 'transfer_details.transfer_id')
            ->whereIn('transfer_details.product_id', $productIds)
            ->whereIn('transfers.from_warehouse_id', $selectedWarehouseIds)
            ->whereNull('transfers.deleted_at');

        if ($dateFrom && $dateTo) {
            $transferredQuery->whereBetween('transfers.date', [$dateFrom->toDateString(), $dateTo->toDateString()]);
        }

        $transferredTotals = $transferredQuery
            ->groupBy('transfer_details.product_id', 'transfer_details.product_variant_id', 'transfers.from_warehouse_id')
            ->get()
            ->keyBy(function ($item) {
                return $item->product_id.'_'.($item->product_variant_id ?? 0).'_'.$item->warehouse_id;
            });

        // Get most common purchase_unit_id per product/variant/warehouse
        $transferredUnitsQuery = TransferDetail::select(
            'transfer_details.product_id',
            'transfer_details.product_variant_id',
            'transfers.from_warehouse_id as warehouse_id',
            'transfer_details.purchase_unit_id',
            DB::raw('COUNT(*) as count')
        )
            ->join('transfers', 'transfers.id', '=', 'transfer_details.transfer_id')
            ->whereIn('transfer_details.product_id', $productIds)
            ->whereIn('transfers.from_warehouse_id', $selectedWarehouseIds)
            ->whereNotNull('transfer_details.purchase_unit_id')
            ->whereNull('transfers.deleted_at');

        if ($dateFrom && $dateTo) {
            $transferredUnitsQuery->whereBetween('transfers.date', [$dateFrom->toDateString(), $dateTo->toDateString()]);
        }

        $transferredUnits = $transferredUnitsQuery
            ->groupBy('transfer_details.product_id', 'transfer_details.product_variant_id', 'transfers.from_warehouse_id', 'transfer_details.purchase_unit_id')
            ->get()
            ->groupBy(function ($item) {
                return $item->product_id.'_'.($item->product_variant_id ?? 0).'_'.$item->warehouse_id;
            })
            ->map(function ($group) {
                return $group->sortByDesc('count')->first()->purchase_unit_id;
            });

        $adjustedQuery = AdjustmentDetail::select(
            'adjustment_details.product_id',
            'adjustment_details.product_variant_id',
            'adjustments.warehouse_id',
            DB::raw('SUM(CASE WHEN adjustment_details.type = "add" THEN adjustment_details.quantity ELSE -adjustment_details.quantity END) as total')
        )
            ->join('adjustments', 'adjustments.id', '=', 'adjustment_details.adjustment_id')
            ->whereIn('adjustment_details.product_id', $productIds)
            ->whereIn('adjustments.warehouse_id', $selectedWarehouseIds)
            ->whereNull('adjustments.deleted_at');

        if ($dateFrom && $dateTo) {
            $adjustedQuery->whereBetween('adjustments.date', [$dateFrom->toDateString(), $dateTo->toDateString()]);
        }

        $adjustedTotals = $adjustedQuery
            ->groupBy('adjustment_details.product_id', 'adjustment_details.product_variant_id', 'adjustments.warehouse_id')
            ->get()
            ->keyBy(function ($item) {
                return $item->product_id.'_'.($item->product_variant_id ?? 0).'_'.$item->warehouse_id;
            });

        $data = [];

        foreach ($products as $product) {
            // Handle variant products
            if ($product->type === 'is_variant') {
                $variants = $variantsByProduct->get($product->id, collect());

                foreach ($variants as $variant) {
                    $vid = (int) $variant->id;

                    // Get stock per warehouse
                    $warehouseStocks = $stockRows->where('product_id', $product->id)
                        ->where('product_variant_id', $vid)
                        ->groupBy('warehouse_id');

                    foreach ($warehouseStocks as $whId => $whStocks) {
                        $warehouse = $warehouses->firstWhere('id', $whId);
                        if (! $warehouse) {
                            continue;
                        }

                        $currentQty = (float) $whStocks->sum('qty');
                        $costPrice = (float) $variant->cost;
                        $sellingPrice = (float) $variant->price;

                        $stockValueCost = $currentQty * $costPrice;
                        $stockValueSelling = $currentQty * $sellingPrice;
                        $potentialProfit = $stockValueSelling - $stockValueCost;

                        $key = $product->id.'_'.$vid.'_'.$whId;
                        $soldTotal = $soldTotals->get($key);
                        $transferredTotal = $transferredTotals->get($key);
                        $totalSold = (float) ($soldTotal->total ?? 0);
                        $totalTransferred = (float) ($transferredTotal->total ?? 0);
                        $totalAdjusted = (float) ($adjustedTotals->get($key)->total ?? 0);

                        // Get units
                        $currentQtyUnit = optional($product->unit)->ShortName ?? 'Pcs';
                        $soldUnitId = $soldUnits->get($key) ?? $product->unit_sale_id ?? $product->unit_id;
                        $soldUnit = $soldUnitId ? optional(Unit::find($soldUnitId))->ShortName ?? 'Pcs' : 'Pcs';
                        $transferredUnitId = $transferredUnits->get($key) ?? $product->unit_purchase_id ?? $product->unit_id;
                        $transferredUnit = $transferredUnitId ? optional(Unit::find($transferredUnitId))->ShortName ?? 'Pcs' : 'Pcs';
                        $adjustedUnit = $currentQtyUnit; // Adjusted uses product unit_id

                        $data[] = [
                            'sku' => $product->code,
                            'product_name' => $product->name,
                            'variant' => $variant->name,
                            'category' => optional($product->category)->name ?? '',
                            'warehouse' => $warehouse->name,
                            'selling_price' => $sellingPrice,
                            'current_quantity' => $currentQty,
                            'current_quantity_unit' => $currentQtyUnit,
                            'stock_value_cost' => $stockValueCost,
                            'stock_value_selling' => $stockValueSelling,
                            'potential_profit' => $potentialProfit,
                            'total_units_sold' => $totalSold,
                            'total_units_sold_unit' => $soldUnit,
                            'total_units_transferred' => $totalTransferred,
                            'total_units_transferred_unit' => $transferredUnit,
                            'total_units_adjusted' => abs($totalAdjusted),
                            'total_units_adjusted_unit' => $adjustedUnit,
                        ];
                    }
                }
            } else {
                // Non-variant products
                $warehouseStocks = $stockRows->where('product_id', $product->id)
                    ->whereNull('product_variant_id')
                    ->groupBy('warehouse_id');

                foreach ($warehouseStocks as $whId => $whStocks) {
                    $warehouse = $warehouses->firstWhere('id', $whId);
                    if (! $warehouse) {
                        continue;
                    }

                    $currentQty = (float) $whStocks->sum('qty');
                    $costPrice = (float) $product->cost;
                    $sellingPrice = (float) $product->price;

                    $stockValueCost = $currentQty * $costPrice;
                    $stockValueSelling = $currentQty * $sellingPrice;
                    $potentialProfit = $stockValueSelling - $stockValueCost;

                    $key = $product->id.'_0_'.$whId;
                    $soldTotal = $soldTotals->get($key);
                    $transferredTotal = $transferredTotals->get($key);
                    $totalSold = (float) ($soldTotal->total ?? 0);
                    $totalTransferred = (float) ($transferredTotal->total ?? 0);
                    $totalAdjusted = (float) ($adjustedTotals->get($key)->total ?? 0);

                    // Get units
                    $currentQtyUnit = optional($product->unit)->ShortName ?? 'Pcs';
                    $soldUnitId = $soldUnits->get($key) ?? $product->unit_sale_id ?? $product->unit_id;
                    $soldUnit = $soldUnitId ? optional(Unit::find($soldUnitId))->ShortName ?? 'Pcs' : 'Pcs';
                    $transferredUnitId = $transferredUnits->get($key) ?? $product->unit_purchase_id ?? $product->unit_id;
                    $transferredUnit = $transferredUnitId ? optional(Unit::find($transferredUnitId))->ShortName ?? 'Pcs' : 'Pcs';
                    $adjustedUnit = $currentQtyUnit; // Adjusted uses product unit_id

                    $data[] = [
                        'sku' => $product->code,
                        'product_name' => $product->name,
                        'variant' => '---',
                        'category' => optional($product->category)->name ?? '',
                        'warehouse' => $warehouse->name,
                        'selling_price' => $sellingPrice,
                        'current_quantity' => $currentQty,
                        'current_quantity_unit' => $currentQtyUnit,
                        'stock_value_cost' => $stockValueCost,
                        'stock_value_selling' => $stockValueSelling,
                        'potential_profit' => $potentialProfit,
                        'total_units_sold' => $totalSold,
                        'total_units_sold_unit' => $soldUnit,
                        'total_units_transferred' => $totalTransferred,
                        'total_units_transferred_unit' => $transferredUnit,
                        'total_units_adjusted' => abs($totalAdjusted),
                        'total_units_adjusted_unit' => $adjustedUnit,
                    ];
                }
            }
        }

        return response()->json([
            'reports' => $data,
            'totalRows' => count($data),
            'warehouses' => $warehouses,
        ]);
    }

    // Calculate the average cost of a product.
    public function get_average_cost_by_product($product_id, $product_variant_id, $warehouse_id)
    {
        // Get the cost of the product
        if ($product_variant_id) {
            $product = ProductVariant::where('product_id', $product_id)->find($product_variant_id);
            $product_cost = $product->cost;
        } else {
            $product = Product::find($product_id);
            $product_cost = $product->cost;
        }

        $array_warehouses_id = Warehouse::where('deleted_at', '=', null)->pluck('id')->toArray();

        $purchases = PurchaseDetail::where('product_id', $product_id)
            ->where('product_variant_id', $product_variant_id)
            ->join('purchases', 'purchases.id', '=', 'purchase_details.purchase_id')
            ->where('purchases.statut', 'received')
            ->where(function ($query) use ($warehouse_id, $array_warehouses_id) {
                if ($warehouse_id !== 0) {
                    return $query->where('purchases.warehouse_id', $warehouse_id);
                } else {
                    return $query->whereIn('purchases.warehouse_id', $array_warehouses_id);

                }
            })
            ->select('purchase_details.quantity as quantity',
                'purchase_details.cost as cost',
                'purchase_details.purchase_unit_id as purchase_unit_id')
            ->get();

        $purchase_cost = 0;
        $purchase_quantity = 0;
        foreach ($purchases as $purchase) {

            $unit = Unit::where('id', $purchase->purchase_unit_id)->first();

            if ($unit) {
                if ($unit->operator == '/') {
                    $purchase_quantity += $purchase->quantity / $unit->operator_value;
                    $purchase_cost += ($purchase->quantity / $unit->operator_value) * ($purchase->cost / $unit->operator_value);
                } else {
                    $purchase_quantity += $purchase->quantity * $unit->operator_value;
                    $purchase_cost += ($purchase->quantity * $unit->operator_value) * ($purchase->cost * $unit->operator_value);

                }
            } else {
                $purchase_quantity += $purchase->quantity;
                $purchase_cost += $purchase->quantity * $purchase->cost;
            }

        }

        // Get the total cost and quantity for all adjustments of the product
        $adjustments = AdjustmentDetail::with('adjustment')
            ->where(function ($query) use ($warehouse_id, $array_warehouses_id) {
                if ($warehouse_id !== 0) {
                    return $query->whereHas('adjustment', function ($q) use ($warehouse_id) {
                        $q->where('warehouse_id', $warehouse_id);
                    });
                } else {
                    return $query->whereHas('adjustment', function ($q) use ($array_warehouses_id) {
                        $q->whereIn('warehouse_id', $array_warehouses_id);
                    });

                }
            })
            ->where('product_id', $product_id)
            ->where('product_variant_id', $product_variant_id)
            ->get();

        $adjustment_cost = 0;
        $adjustment_quantity = 0;
        foreach ($adjustments as $adjustment) {
            if ($adjustment->type == 'add') {
                $adjustment_quantity += $adjustment->quantity;
            } else {
                $adjustment_quantity -= $adjustment->quantity;
            }
        }

        // Calculate the average cost of purchase

        if ($purchase_quantity === 0 || $purchase_quantity == 0 || $purchase_quantity == '0') {
            $average_cost_purchase = $product_cost;
        } else {
            $average_cost_purchase = $purchase_cost / $purchase_quantity;
        }

        // Calculate adjustment_cost multiply by the average cost of purchase
        if ($adjustment_quantity === 0 || $adjustment_quantity == 0 || $adjustment_quantity == '0') {
            $adjustment_cost = 0;
        } else {
            $adjustment_cost = $adjustment_quantity * $average_cost_purchase;
        }

        // Calculate the total  average cost
        $total_cost = $purchase_cost + $adjustment_cost;
        $total_quantity = $purchase_quantity + $adjustment_quantity;

        if ($total_quantity === 0 || $total_quantity == 0 || $total_quantity == '0') {
            $average_cost = $product_cost;
        } else {
            $average_cost = $total_cost / $total_quantity;
        }

        return $average_cost;
    }

    // ----------------- expenses_report -----------------------\\

    public function expenses_report(request $request)
    {

        $this->authorizeForUser($request->user('api'), 'expenses_report', Expense::class);

        // Normalize date filter to Y-m-d (avoid timezone/invalid input issues)
        $today = Carbon::today();
        $from = $request->filled('from')
            ? Carbon::parse($request->from)->toDateString()
            : $today->copy()->subDays(29)->toDateString();
        $to = $request->filled('to')
            ? Carbon::parse($request->to)->toDateString()
            : $today->toDateString();
        if ($from > $to) {
            $from = $to;
        }

        // How many items do you want to display.
        $perPage = $request->limit;
        $pageStart = \Request::get('page', 1);
        // Start displaying items from this number;
        $offSet = ($pageStart * $perPage) - $perPage;
        $order = $request->SortField;
        $dir = $request->SortType;
        $data = [];

        $helpers = new helpers;

        // get warehouses assigned to user
        $user_auth = auth()->user();
        $warehouses = Warehouse::where('deleted_at', '=', null)->get(['id', 'name']);
        $array_warehouses_id = Warehouse::where('deleted_at', '=', null)->pluck('id')->toArray();

        if (empty($request->warehouse_id) || $request->warehouse_id === 0) {
            $warehouse_id = 0;
        } else {
            $warehouse_id = $request->warehouse_id;
        }

        $expenses_data = Expense::join('expense_categories', 'expenses.expense_category_id', '=', 'expense_categories.id')
            ->where('expenses.deleted_at', '=', null)
            ->where(function ($query) use ($warehouse_id, $array_warehouses_id) {
                if ($warehouse_id !== 0) {
                    return $query->where('expenses.warehouse_id', $warehouse_id);
                } else {
                    return $query->whereIn('expenses.warehouse_id', $array_warehouses_id);

                }
            })
            ->whereBetween('expenses.date', [$from, $to])

        // Search With Multiple Param
            ->where(function ($query) use ($request) {
                return $query->when($request->filled('search'), function ($query) use ($request) {
                    return $query->where(function ($query) use ($request) {
                        return $query->whereHas('expense_category', function ($q) use ($request) {
                            $q->where('name', 'LIKE', "%{$request->search}%");
                        });
                    });
                });
            })
            ->select(
                DB::raw('expense_categories.name as category_name'),
                DB::raw('SUM(expenses.amount) as total_expenses')
            )
            ->groupBy('expense_categories.name');

        // Get the total number of grouped rows correctly
        $totalRows = DB::table(DB::raw("({$expenses_data->toSql()}) as sub"))
            ->mergeBindings($expenses_data->getQuery())
            ->count();

        if ($perPage == '-1') {
            $perPage = $totalRows;
        }

        $expenses = $expenses_data
            ->offset($offSet)
            ->limit($perPage)
            ->orderBy('total_expenses', 'desc') // Order by total amount
            ->get();

        foreach ($expenses as $expense) {

            $item['category_name'] = $expense->category_name;
            $item['total_expenses'] = $expense->total_expenses;

            $data[] = $item;
        }

        return response()->json([
            'reports' => $data,
            'totalRows' => $totalRows,
            'warehouses' => $warehouses,
        ]);

    }

    // ----------------- deposits_report -----------------------\\

    public function deposits_report(request $request)
    {

        $this->authorizeForUser($request->user('api'), 'deposits_report', Deposit::class);

        // Normalize date filter to Y-m-d (avoid timezone/invalid input issues)
        $today = Carbon::today();
        $from = $request->filled('from')
            ? Carbon::parse($request->from)->toDateString()
            : $today->copy()->subDays(29)->toDateString();
        $to = $request->filled('to')
            ? Carbon::parse($request->to)->toDateString()
            : $today->toDateString();
        if ($from > $to) {
            $from = $to;
        }

        // How many items do you want to display.
        $perPage = $request->limit;
        $pageStart = \Request::get('page', 1);
        // Start displaying items from this number;
        $offSet = ($pageStart * $perPage) - $perPage;
        $order = $request->SortField;
        $dir = $request->SortType;
        $data = [];

        $helpers = new helpers;

        $deposits_data = Deposit::join('deposit_categories', 'deposits.deposit_category_id', '=', 'deposit_categories.id')
            ->where('deposits.deleted_at', '=', null)
            ->whereBetween('deposits.date', [$from, $to])

        // Search With Multiple Param
            ->where(function ($query) use ($request) {
                return $query->when($request->filled('search'), function ($query) use ($request) {
                    return $query->where(function ($query) use ($request) {
                        return $query->whereHas('deposit_categories', function ($q) use ($request) {
                            $q->where('title', 'LIKE', "%{$request->search}%");
                        });
                    });
                });
            })
            ->select(
                DB::raw('deposits.id as id'),
                DB::raw('deposit_categories.title as category_name'),
                DB::raw('sum(deposits.amount) as total_deposits'),
            )
            ->groupBy('deposit_categories.title');

        $totalRows = $deposits_data->count();
        if ($perPage == '-1') {
            $perPage = $totalRows;
        }
        $deposits = $deposits_data->offset($offSet)
            ->limit($perPage)
            ->orderBy('id', 'desc')
            ->get();

        foreach ($deposits as $deposit) {

            $item['id'] = $deposit->id;
            $item['category_name'] = $deposit->category_name;
            $item['total_deposits'] = $deposit->total_deposits;

            $data[] = $item;
        }

        return response()->json([
            'reports' => $data,
            'totalRows' => $totalRows,
        ]);

    }

    public function report_transactions(Request $request)
    {
        $this->authorizeForUser($request->user('api'), 'report_transactions', PaymentSale::class);

        // Normalize date filter to Y-m-d (avoid timezone/invalid input issues)
        $today = Carbon::today();
        $from = $request->filled('from')
            ? Carbon::parse($request->from)->toDateString()
            : $today->copy()->subDays(29)->toDateString();
        $to = $request->filled('to')
            ? Carbon::parse($request->to)->toDateString()
            : $today->toDateString();
        if ($from > $to) {
            $from = $to;
        }

        $perPage = $request->limit;
        $pageStart = \Request::get('page', 1);
        $offSet = ($pageStart * $perPage) - $perPage;
        $order = $request->SortField;
        $dir = $request->SortType;

        $helpers = new helpers;
        $user = Auth::user();
        // New way: Check user's record_view field (user-level boolean)
        // Backward compatibility: If record_view is null, fall back to role permission check
        $view_records = $user->hasRecordView();

        $allPayments = collect();

        $onlyClientFilter = $request->filled('client_id') && ! $request->filled('provider_id');
        $onlyProviderFilter = $request->filled('provider_id') && ! $request->filled('client_id');

        // Load Payment Sales if provider_id is not exclusively set
        if (! $onlyProviderFilter) {
            $paymentSales = PaymentSale::with(['sale.client', 'account', 'payment_method', 'user'])
                ->whereNull('deleted_at')
                ->whereBetween('date', [$from, $to])
                ->when(! $view_records, fn ($q) => $q->where('user_id', Auth::id()))
                ->when($request->filled('client_id'), function ($q) use ($request) {
                    $q->whereHas('sale.client', fn ($q2) => $q2->where('id', $request->client_id));
                })
                ->when($request->filled('sale_id'), fn ($q) => $q->where('sale_id', $request->sale_id))
                ->when($request->filled('payment_method_id'), fn ($q) => $q->where('payment_method_id', $request->payment_method_id))
                ->when($request->filled('search'), function ($q) use ($request) {
                    $q->where(function ($query) use ($request) {
                        $query->where('Ref', 'LIKE', "%{$request->search}%")
                            ->orWhere('date', 'LIKE', "%{$request->search}%")
                            ->orWhereHas('sale', fn ($q2) => $q2->where('Ref', 'LIKE', "%{$request->search}%"))
                            ->orWhereHas('payment_method', fn ($q2) => $q2->where('name', 'LIKE', "%{$request->search}%"))
                            ->orWhereHas('sale.client', fn ($q2) => $q2->where('name', 'LIKE', "%{$request->search}%"));
                    });
                });

            $salesMapped = $paymentSales->get()->map(function ($payment) {
                return [
                    'date' => $payment->date,
                    'Ref' => $payment->Ref,
                    'Ref_Sale' => '(sale)'.' '.optional($payment->sale)->Ref,
                    'sale_id' => optional($payment->sale)->id,
                    'client_name' => optional($payment->sale->client)->name,
                    'payment_method' => optional($payment->payment_method)->name,
                    'montant' => $payment->montant,
                    'account_name' => optional($payment->account)->account_name ?? '---',
                    'user_name' => optional($payment->user)->username ?? '---',
                    'type' => 'sale',
                    'created_at' => $payment->created_at,
                ];
            });

            $allPayments = $allPayments->merge($salesMapped);
        }

        // Load Payment Purchases if client_id is not exclusively set
        if (! $onlyClientFilter) {
            $paymentPurchases = PaymentPurchase::with(['purchase.provider', 'account', 'payment_method', 'user'])
                ->whereNull('deleted_at')
                ->whereBetween('date', [$from, $to])
                ->when(! $view_records, fn ($q) => $q->where('user_id', Auth::id()))
                ->when($request->filled('provider_id'), function ($q) use ($request) {
                    $q->whereHas('purchase.provider', fn ($q2) => $q2->where('id', $request->provider_id));
                })
                ->when($request->filled('purchase_id'), fn ($q) => $q->where('purchase_id', $request->purchase_id))
                ->when($request->filled('payment_method_id'), fn ($q) => $q->where('payment_method_id', $request->payment_method_id))
                ->when($request->filled('search'), function ($q) use ($request) {
                    $q->where(function ($query) use ($request) {
                        $query->where('Ref', 'LIKE', "%{$request->search}%")
                            ->orWhere('date', 'LIKE', "%{$request->search}%")
                            ->orWhereHas('purchase', fn ($q2) => $q2->where('Ref', 'LIKE', "%{$request->search}%"))
                            ->orWhereHas('payment_method', fn ($q2) => $q2->where('name', 'LIKE', "%{$request->search}%"))
                            ->orWhereHas('purchase.provider', fn ($q2) => $q2->where('name', 'LIKE', "%{$request->search}%"));
                    });
                });

            $purchaseMapped = $paymentPurchases->get()->map(function ($payment) {
                return [
                    'date' => $payment->date,
                    'Ref' => $payment->Ref,
                    'Ref_Sale' => '(purchase)'.' '.optional($payment->purchase)->Ref,
                    'purchase_id' => optional($payment->purchase)->id,
                    'client_name' => optional($payment->purchase->provider)->name,
                    'payment_method' => optional($payment->payment_method)->name,
                    'montant' => $payment->montant,
                    'account_name' => optional($payment->account)->account_name ?? '---',
                    'user_name' => optional($payment->user)->username ?? '---',
                    'type' => 'purchase',
                    'created_at' => $payment->created_at,
                ];
            });

            $allPayments = $allPayments->merge($purchaseMapped);
        }

        $totalRows = $allPayments->count();
        if ($perPage == '-1') {
            $perPage = $totalRows;
        }

        $sortedPayments = $allPayments->sortByDesc('created_at')
            ->slice($offSet, $perPage)
            ->values();

        $clients = Client::whereNull('deleted_at')->get(['id', 'name']);
        $suppliers = Provider::whereNull('deleted_at')->get(['id', 'name']);
        $sales = Sale::whereNull('deleted_at')->get(['id', 'Ref']);
        $purchases = Purchase::whereNull('deleted_at')->get(['id', 'Ref']);
        $payment_methods = PaymentMethod::whereNull('deleted_at')->get(['id', 'name']);

        // Summary Totals By Payment Method
        $paymentSummary = PaymentMethod::whereNull('deleted_at')->withCount([])->get()->map(function ($method) use ($from, $to) {
            $purchaseTotal = PaymentPurchase::whereNull('deleted_at')->where('payment_method_id', $method->id)
                ->whereBetween('date', [$from, $to])
                ->sum('montant');

            $saleTotal = PaymentSale::whereNull('deleted_at')->where('payment_method_id', $method->id)
                ->whereBetween('date', [$from, $to])
                ->sum('montant');

            $expenseTotal = Expense::whereNull('deleted_at')->where('payment_method_id', $method->id)
                ->whereBetween('date', [$from, $to])
                ->sum('amount');

            return [
                'payment_method' => $method->name,
                'purchase_total' => (float) $purchaseTotal,
                'sale_total' => (float) $saleTotal,
                'expense_total' => (float) $expenseTotal,
            ];
        });

        return response()->json([
            'totalRows' => $totalRows,
            'payments' => $sortedPayments,
            'sales' => $sales,
            'clients' => $clients,
            'payment_methods' => $payment_methods,
            'suppliers' => $suppliers,
            'purchases' => $purchases,
            'payment_summary' => $paymentSummary,
        ]);
    }

    // ----------------- Cash Flow Report -----------------------\\

    public function cash_flow_report(Request $request)
    {
        // Reuse an existing report permission to avoid DB/permission changes
        $this->authorizeForUser($request->user('api'), 'cash_flow_report', PaymentSale::class);

        $from = $request->from;
        $to = $request->to;
        $groupBy = $request->group_by === 'method' ? 'method' : 'account';
        $warehouseId = $request->warehouse_id ? (int) $request->warehouse_id : null;
        $accountId = $request->account_id ? (int) $request->account_id : null;
        $paymentMethodId = $request->payment_method_id ? (int) $request->payment_method_id : null;

        // Respect user visibility for own records if enabled
        $user = Auth::user();
        // New way: Check user's record_view field (user-level boolean)
        // Backward compatibility: If record_view is null, fall back to role permission check
        $viewRecords = $user->hasRecordView();

        // Helpers for group label
        $groupLabel = function (string $prefix, ?string $name): string {
            return $name ?? $prefix.' ---';
        };

        // ---------- Build inflow/outflow grouped data ----------
        $groupTotals = [];

        $addAmount = function (string $groupName, string $type, float $amount) use (&$groupTotals) {
            if (! isset($groupTotals[$groupName])) {
                $groupTotals[$groupName] = ['inflow' => 0.0, 'outflow' => 0.0];
            }
            $groupTotals[$groupName][$type] += (float) $amount;
        };

        // Inflows: Payment Sales (customer payments)
        if ($groupBy === 'method') {
            $q = PaymentSale::query()
                ->leftJoin('sales', 'payment_sales.sale_id', '=', 'sales.id')
                ->leftJoin('payment_methods', 'payment_sales.payment_method_id', '=', 'payment_methods.id')
                ->whereNull('payment_sales.deleted_at')
                ->whereBetween('payment_sales.date', [$from, $to])
                ->when(! $viewRecords, fn ($q) => $q->where('payment_sales.user_id', Auth::id()))
                ->when($paymentMethodId, fn ($q) => $q->where('payment_sales.payment_method_id', $paymentMethodId))
                ->when($warehouseId, fn ($q) => $q->where('sales.warehouse_id', $warehouseId))
                ->select(DB::raw('COALESCE(payment_methods.name, "---") as g'), DB::raw('SUM(payment_sales.montant) as total'))
                ->groupBy('g')
                ->get();
            foreach ($q as $row) {
                $addAmount($groupLabel('', $row->g), 'inflow', (float) $row->total);
            }
        } else {
            $q = PaymentSale::query()
                ->leftJoin('sales', 'payment_sales.sale_id', '=', 'sales.id')
                ->leftJoin('accounts', 'payment_sales.account_id', '=', 'accounts.id')
                ->whereNull('payment_sales.deleted_at')
                ->whereBetween('payment_sales.date', [$from, $to])
                ->when(! $viewRecords, fn ($q) => $q->where('payment_sales.user_id', Auth::id()))
                ->when($accountId, fn ($q) => $q->where('payment_sales.account_id', $accountId))
                ->when($warehouseId, fn ($q) => $q->where('sales.warehouse_id', $warehouseId))
                ->select(DB::raw('COALESCE(accounts.account_name, "---") as g'), DB::raw('SUM(payment_sales.montant) as total'))
                ->groupBy('g')
                ->get();
            foreach ($q as $row) {
                $addAmount($groupLabel('', $row->g), 'inflow', (float) $row->total);
            }
        }

        // Inflows: Deposits (income)
        if ($groupBy === 'account') {
            $q = Deposit::query()
                ->leftJoin('accounts', 'deposits.account_id', '=', 'accounts.id')
                ->whereNull('deposits.deleted_at')
                ->whereBetween('deposits.date', [$from, $to])
                ->when($accountId, fn ($q) => $q->where('deposits.account_id', $accountId))
                ->select(DB::raw('COALESCE(accounts.account_name, "---") as g'), DB::raw('SUM(deposits.amount) as total'))
                ->groupBy('g')
                ->get();
            foreach ($q as $row) {
                $addAmount($groupLabel('', $row->g), 'inflow', (float) $row->total);
            }
        } else {
            // When grouping by method, deposits have no payment method; show under a synthetic group
            $depositTotal = Deposit::query()
                ->whereNull('deleted_at')
                ->whereBetween('date', [$from, $to])
                ->sum('amount');
            if ($depositTotal) {
                $addAmount('Deposit', 'inflow', (float) $depositTotal);
            }
        }

        // Outflows: Payment Purchases (supplier payments)
        if ($groupBy === 'method') {
            $q = PaymentPurchase::query()
                ->leftJoin('purchases', 'payment_purchases.purchase_id', '=', 'purchases.id')
                ->leftJoin('payment_methods', 'payment_purchases.payment_method_id', '=', 'payment_methods.id')
                ->whereNull('payment_purchases.deleted_at')
                ->whereBetween('payment_purchases.date', [$from, $to])
                ->when(! $viewRecords, fn ($q) => $q->where('payment_purchases.user_id', Auth::id()))
                ->when($paymentMethodId, fn ($q) => $q->where('payment_purchases.payment_method_id', $paymentMethodId))
                ->when($warehouseId, fn ($q) => $q->where('purchases.warehouse_id', $warehouseId))
                ->select(DB::raw('COALESCE(payment_methods.name, "---") as g'), DB::raw('SUM(payment_purchases.montant) as total'))
                ->groupBy('g')
                ->get();
            foreach ($q as $row) {
                $addAmount($groupLabel('', $row->g), 'outflow', (float) $row->total);
            }
        } else {
            $q = PaymentPurchase::query()
                ->leftJoin('purchases', 'payment_purchases.purchase_id', '=', 'purchases.id')
                ->leftJoin('accounts', 'payment_purchases.account_id', '=', 'accounts.id')
                ->whereNull('payment_purchases.deleted_at')
                ->whereBetween('payment_purchases.date', [$from, $to])
                ->when(! $viewRecords, fn ($q) => $q->where('payment_purchases.user_id', Auth::id()))
                ->when($accountId, fn ($q) => $q->where('payment_purchases.account_id', $accountId))
                ->when($warehouseId, fn ($q) => $q->where('purchases.warehouse_id', $warehouseId))
                ->select(DB::raw('COALESCE(accounts.account_name, "---") as g'), DB::raw('SUM(payment_purchases.montant) as total'))
                ->groupBy('g')
                ->get();
            foreach ($q as $row) {
                $addAmount($groupLabel('', $row->g), 'outflow', (float) $row->total);
            }
        }

        // Outflows: Expenses
        if ($groupBy === 'method') {
            $q = Expense::query()
                ->leftJoin('payment_methods', 'expenses.payment_method_id', '=', 'payment_methods.id')
                ->whereNull('expenses.deleted_at')
                ->whereBetween('expenses.date', [$from, $to])
                ->when($paymentMethodId, fn ($q) => $q->where('expenses.payment_method_id', $paymentMethodId))
                ->when($warehouseId, fn ($q) => $q->where('expenses.warehouse_id', $warehouseId))
                ->select(DB::raw('COALESCE(payment_methods.name, "---") as g'), DB::raw('SUM(expenses.amount) as total'))
                ->groupBy('g')
                ->get();
            foreach ($q as $row) {
                $addAmount($groupLabel('', $row->g), 'outflow', (float) $row->total);
            }
        } else {
            $q = Expense::query()
                ->leftJoin('accounts', 'expenses.account_id', '=', 'accounts.id')
                ->whereNull('expenses.deleted_at')
                ->whereBetween('expenses.date', [$from, $to])
                ->when($accountId, fn ($q) => $q->where('expenses.account_id', $accountId))
                ->when($warehouseId, fn ($q) => $q->where('expenses.warehouse_id', $warehouseId))
                ->select(DB::raw('COALESCE(accounts.account_name, "---") as g'), DB::raw('SUM(expenses.amount) as total'))
                ->groupBy('g')
                ->get();
            foreach ($q as $row) {
                $addAmount($groupLabel('', $row->g), 'outflow', (float) $row->total);
            }
        }

        // ---------- Build table rows and totals ----------
        $rows = [];
        $totalInflow = 0.0;
        $totalOutflow = 0.0;
        ksort($groupTotals);
        foreach ($groupTotals as $name => $io) {
            $net = (float) $io['inflow'] - (float) $io['outflow'];
            $rows[] = [
                'group' => $name,
                'inflow' => round((float) $io['inflow'], 2),
                'outflow' => round((float) $io['outflow'], 2),
                'net' => round($net, 2),
            ];
            $totalInflow += (float) $io['inflow'];
            $totalOutflow += (float) $io['outflow'];
        }

        // ---------- Time series for charts ----------
        // Inflow per day: payment_sales + deposits
        $inflowByDate = collect();

        $psByDate = PaymentSale::query()
            ->leftJoin('sales', 'payment_sales.sale_id', '=', 'sales.id')
            ->whereNull('payment_sales.deleted_at')
            ->whereBetween('payment_sales.date', [$from, $to])
            ->when(! $viewRecords, fn ($q) => $q->where('payment_sales.user_id', Auth::id()))
            ->when($warehouseId, fn ($q) => $q->where('sales.warehouse_id', $warehouseId))
            ->select(DB::raw('payment_sales.date as d'), DB::raw('SUM(payment_sales.montant) as t'))
            ->groupBy('d')->get();
        foreach ($psByDate as $r) {
            $inflowByDate[$r->d] = ($inflowByDate[$r->d] ?? 0) + (float) $r->t;
        }

        $depByDate = Deposit::query()
            ->whereNull('deleted_at')
            ->whereBetween('date', [$from, $to])
            ->select(DB::raw('date as d'), DB::raw('SUM(amount) as t'))
            ->groupBy('d')->get();
        foreach ($depByDate as $r) {
            $inflowByDate[$r->d] = ($inflowByDate[$r->d] ?? 0) + (float) $r->t;
        }

        // Outflow per day: payment_purchases + expenses
        $outflowByDate = collect();

        $ppByDate = PaymentPurchase::query()
            ->leftJoin('purchases', 'payment_purchases.purchase_id', '=', 'purchases.id')
            ->whereNull('payment_purchases.deleted_at')
            ->whereBetween('payment_purchases.date', [$from, $to])
            ->when(! $viewRecords, fn ($q) => $q->where('payment_purchases.user_id', Auth::id()))
            ->when($warehouseId, fn ($q) => $q->where('purchases.warehouse_id', $warehouseId))
            ->select(DB::raw('payment_purchases.date as d'), DB::raw('SUM(payment_purchases.montant) as t'))
            ->groupBy('d')->get();
        foreach ($ppByDate as $r) {
            $outflowByDate[$r->d] = ($outflowByDate[$r->d] ?? 0) + (float) $r->t;
        }

        $expByDate = Expense::query()
            ->whereNull('deleted_at')
            ->whereBetween('date', [$from, $to])
            ->when($warehouseId, fn ($q) => $q->where('warehouse_id', $warehouseId))
            ->select(DB::raw('date as d'), DB::raw('SUM(amount) as t'))
            ->groupBy('d')->get();
        foreach ($expByDate as $r) {
            $outflowByDate[$r->d] = ($outflowByDate[$r->d] ?? 0) + (float) $r->t;
        }

        // Produce unified sorted date series
        $allDates = collect(array_unique(array_merge($inflowByDate->keys()->all(), $outflowByDate->keys()->all())))->sort()->values();
        $ts = $allDates->map(function ($d) use ($inflowByDate, $outflowByDate) {
            $in = (float) ($inflowByDate[$d] ?? 0);
            $out = (float) ($outflowByDate[$d] ?? 0);

            return [
                'd' => $d,
                'inflow' => round($in, 2),
                'outflow' => round($out, 2),
                'net' => round($in - $out, 2),
            ];
        });

        // ---------- Support data for filters ----------
        $warehouses = Warehouse::whereNull('deleted_at')->get(['id', 'name']);
        $payment_methods = PaymentMethod::whereNull('deleted_at')->get(['id', 'name']);
        $accounts = Account::whereNull('deleted_at')->get(['id', 'account_name']);

        return response()->json([
            'rows' => $rows,
            'total_inflow' => round($totalInflow, 2),
            'total_outflow' => round($totalOutflow, 2),
            'net_cash_flow' => round($totalInflow - $totalOutflow, 2),
            'group_by' => $groupBy,
            'timeseries' => $ts,
            'warehouses' => $warehouses,
            'payment_methods' => $payment_methods,
            'accounts' => $accounts,
        ]);
    }

    public function sales_by_category_report(Request $request)
    {
        $this->authorizeForUser($request->user('api'), 'report_sales_by_category', Sale::class);

        // Normalize date filter to Y-m-d (avoid timezone/invalid input issues)
        $today = Carbon::today();
        $from = $request->filled('from')
            ? Carbon::parse($request->from)->toDateString()
            : $today->copy()->subDays(29)->toDateString();
        $to = $request->filled('to')
            ? Carbon::parse($request->to)->toDateString()
            : $today->toDateString();
        if ($from > $to) {
            $from = $to;
        }

        $perPage = $request->limit;
        $pageStart = \Request::get('page', 1);
        $offSet = ($pageStart * $perPage) - $perPage;
        $order = $request->SortField ?? 'category_name';
        $dir = $request->SortType ?? 'asc';

        $data = [];

        $salesQuery = Category::leftJoin('products', 'categories.id', '=', 'products.category_id')
            ->leftJoin('sale_details', 'products.id', '=', 'sale_details.product_id')
            ->leftJoin('sales', 'sale_details.sale_id', '=', 'sales.id')
            ->where(function ($query) use ($from, $to) {
                $query->whereNull('sales.deleted_at')
                    ->whereBetween('sales.date', [$from, $to])
                    ->orWhereNull('sales.date'); // Ensures categories without sales are included
            })
            ->when($request->filled('search'), function ($query) use ($request) {
                $query->where('categories.name', 'like', "%{$request->search}%");
            })
            ->select(
                'categories.id as id',
                'categories.name as category_name',
                DB::raw('COALESCE(SUM(sale_details.total), 0) as total_sales')
            )
            ->groupBy('categories.id', 'categories.name');

        $totalRows = $salesQuery->get()->count();

        if ($perPage == '-1') {
            $perPage = $totalRows;
        }

        $sales = $salesQuery
            ->offset($offSet)
            ->limit($perPage)
            ->orderBy($order, $dir)
            ->get();

        foreach ($sales as $sale) {
            $data[] = [
                'id' => $sale->id,
                'category_name' => $sale->category_name,
                'total_sales' => round($sale->total_sales, 2),
            ];
        }

        $helpers = new helpers;
        $currency = $helpers->Get_Currency_Code();

        return response()->json([
            'reports' => $data,
            'totalRows' => $totalRows,
            'currency' => $currency,
        ]);
    }

    public function sales_by_brand_report(Request $request)
    {
        $this->authorizeForUser($request->user('api'), 'report_sales_by_brand', Sale::class);

        // Normalize date filter to Y-m-d (avoid timezone/invalid input issues)
        $today = Carbon::today();
        $from = $request->filled('from')
            ? Carbon::parse($request->from)->toDateString()
            : $today->copy()->subDays(29)->toDateString();
        $to = $request->filled('to')
            ? Carbon::parse($request->to)->toDateString()
            : $today->toDateString();
        if ($from > $to) {
            $from = $to;
        }

        $perPage = $request->limit;
        $pageStart = \Request::get('page', 1);
        $offSet = ($pageStart * $perPage) - $perPage;
        $order = $request->SortField ?? 'brand_name';
        $dir = $request->SortType ?? 'asc';

        $data = [];

        $salesQuery = Brand::leftJoin('products', 'brands.id', '=', 'products.brand_id')
            ->leftJoin('sale_details', 'products.id', '=', 'sale_details.product_id')
            ->leftJoin('sales', 'sale_details.sale_id', '=', 'sales.id')
            ->where(function ($query) use ($from, $to) {
                $query->whereNull('sales.deleted_at')
                    ->whereBetween('sales.date', [$from, $to])
                    ->orWhereNull('sales.date'); // Ensures brands without sales are included
            })
            ->when($request->filled('search'), function ($query) use ($request) {
                $query->where('brands.name', 'like', "%{$request->search}%");
            })
            ->select(
                'brands.id as id',
                'brands.name as brand_name',
                DB::raw('COALESCE(SUM(sale_details.total), 0) as total_sales')
            )
            ->groupBy('brands.id', 'brands.name');

        $totalRows = $salesQuery->get()->count();

        if ($perPage == '-1') {
            $perPage = $totalRows;
        }

        $sales = $salesQuery
            ->offset($offSet)
            ->limit($perPage)
            ->orderBy($order, $dir)
            ->get();

        foreach ($sales as $sale) {
            $data[] = [
                'id' => $sale->id,
                'brand_name' => $sale->brand_name,
                'total_sales' => round($sale->total_sales, 2),
            ];
        }

        $helpers = new helpers;
        $currency = $helpers->Get_Currency_Code();

        return response()->json([
            'reports' => $data,
            'totalRows' => $totalRows,
            'currency' => $currency,
        ]);
    }

    public function seller_report(Request $request)
    {
        $this->authorizeForUser($request->user('api'), 'seller_report', User::class);

        $start_date = $request->start_date;
        $end_date = $request->end_date;

        // Normalise dates to 'Y-m-d' (database format)
        if (! empty($start_date)) {
            $start_date = date('Y-m-d', strtotime($start_date));
        }

        if (! empty($end_date)) {
            $end_date = date('Y-m-d', strtotime($end_date));
        }

        $start_time = $request->start_time;
        $end_time = $request->end_time;

        // Normalise times to 'H:i:s', accepting both 'HH:MM' and 'HH:MM:SS' from the UI
        if (! empty($start_time) && strlen($start_time) === 5) {
            // e.g. '08:00' -> '08:00:00'
            $start_time .= ':00';
        }

        if (! empty($end_time) && strlen($end_time) === 5) {
            // e.g. '17:00' -> '17:00:59' to include the full last minute
            $end_time .= ':59';
        }

        // Build combined datetime strings so we can filter correctly across midnight
        $startDateTime = null;
        $endDateTime = null;

        if (! empty($start_date)) {
            $startDateTime = $start_date.' '.(! empty($start_time) ? $start_time : '00:00:00');
        }

        if (! empty($end_date)) {
            $endDateTime = $end_date.' '.(! empty($end_time) ? $end_time : '23:59:59');
        }

        // dd($start_time);
        $perPage = $request->limit;
        $pageStart = \Request::get('page', 1);
        $offSet = ($pageStart * $perPage) - $perPage;
        $order = $request->SortField ?? 'id';
        $dir = $request->SortType ?? 'desc';

        // Filter users
        $usersQuery = User::when($request->filled('search'), function ($query) use ($request) {
            $query->where('username', 'LIKE', "%{$request->search}%");
        });

        $totalRows = $usersQuery->count();
        if ($perPage == '-1') {
            $perPage = $totalRows;
        }

        $users = $usersQuery
            ->offset($offSet)
            ->limit($perPage)
            ->orderBy($order, $dir)
            ->get();

        // Get all payment method names
        $paymentMethods = DB::table('payment_methods')->whereNull('deleted_at')->pluck('name', 'id');

        $report = [];
        $warehouse_id = $request->warehouse_id; // may be null

        foreach ($users as $user) {
            $salesQuery = DB::table('sales')
                ->whereNull('deleted_at')
                ->where('user_id', $user->id)
                ->when($warehouse_id, fn ($q) => $q->where('warehouse_id', $warehouse_id));

            // If we have full datetime bounds, filter on combined date+time
            if ($startDateTime && $endDateTime) {
                $salesQuery->whereBetween(
                    DB::raw("CONCAT(date, ' ', time)"),
                    [$startDateTime, $endDateTime]
                );
            } elseif ($start_date && $end_date) {
                // Fallback: only dates provided
                $salesQuery->whereBetween('date', [$start_date, $end_date]);
            }

            $row = [
                'id' => $user->id,
                'username' => $user->username,
                'total_sales' => number_format($salesQuery->sum('GrandTotal'), 2, '.', ','),
            ];

            foreach ($paymentMethods as $methodName) {
                $row[$methodName] = 0;
            }

            $paymentsQuery = DB::table('payment_sales')
                ->join('sales', 'payment_sales.sale_id', '=', 'sales.id')
                ->whereNull('payment_sales.deleted_at')
                ->whereNull('sales.deleted_at')
                ->where('payment_sales.user_id', $user->id)
                ->when($warehouse_id, function ($q) use ($warehouse_id) {
                    $q->where('sales.warehouse_id', $warehouse_id);
                });

            if ($startDateTime && $endDateTime) {
                // Filter joined rows using combined payment date + sale time
                $paymentsQuery->whereBetween(
                    DB::raw("CONCAT(payment_sales.date, ' ', sales.time)"),
                    [$startDateTime, $endDateTime]
                );
            } elseif ($start_date && $end_date) {
                $paymentsQuery->whereBetween('payment_sales.date', [$start_date, $end_date]);
            }

            $payments = $paymentsQuery
                ->select('payment_sales.payment_method_id', DB::raw('SUM(payment_sales.montant) as total'))
                ->groupBy('payment_sales.payment_method_id')
                ->get();

            foreach ($payments as $payment) {
                $methodName = $paymentMethods[$payment->payment_method_id] ?? 'Unknown';
                $row[$methodName] = number_format((float) $payment->total, 2, '.', ',');

            }

            $report[] = $row;
        }

        $warehouses = Warehouse::whereNull('deleted_at')->get(['id', 'name']);

        return response()->json([
            'report' => $report,
            'warehouses' => $warehouses,
            'paymentMethods' => array_values($paymentMethods->toArray()),
            'totalRows' => $totalRows,
        ]);
    }

    // ----------------- Attendance Summary (Daily / Monthly) -----------------------\\

    public function attendance_summary(Request $request)
    {
        // Reuse attendance view permission
        $this->authorizeForUser($request->user('api'), 'report_attendance_summary', Attendance::class);

        $scope = strtolower($request->get('scope', 'daily'));
        $date = $request->get('date');
        $monthParam = $request->get('month'); // supports 'YYYY-MM' or 'MM'
        $yearParam = $request->get('year');

        // Resolve date range
        if ($scope === 'monthly') {
            if ($monthParam && strpos($monthParam, '-') !== false) {
                // 'YYYY-MM' supplied
                $from = Carbon::parse($monthParam.'-01')->startOfMonth()->toDateString();
                $to = Carbon::parse($monthParam.'-01')->endOfMonth()->toDateString();
            } else {
                $year = $yearParam ? (int) $yearParam : (int) date('Y');
                $month = $monthParam ? (int) $monthParam : (int) date('m');
                $from = Carbon::create($year, $month, 1)->startOfMonth()->toDateString();
                $to = Carbon::create($year, $month, 1)->endOfMonth()->toDateString();
            }
        } else { // daily
            $day = $date ? Carbon::parse($date) : Carbon::now();
            $from = $day->toDateString();
            $to = $day->toDateString();
        }

        $companyId = $request->get('company_id');
        $employeeId = $request->get('employee_id');

        $perPage = $request->limit ?? 10;
        $pageStart = (int) ($request->page ?? 1);
        $offSet = ($pageStart * $perPage) - $perPage;
        $order = $request->SortField ?? 'employee_username';
        $dir = $request->SortType ?? 'asc';

        $Role = Auth::user()->roles()->first();
        $user = Auth::user();
        // New way: Check user's record_view field (user-level boolean)
        // Backward compatibility: If record_view is null, fall back to role permission check
        $viewRecords = $user->hasRecordView();

        $base = DB::table('attendances')
            ->join('employees', 'attendances.employee_id', '=', 'employees.id')
            ->join('companies', 'attendances.company_id', '=', 'companies.id')
            ->whereNull('attendances.deleted_at')
            ->whereBetween('attendances.date', [$from, $to])
            ->when(! $viewRecords, function ($q) {
                $q->where('attendances.user_id', Auth::id());
            })
            ->when($companyId, function ($q) use ($companyId) {
                $q->where('attendances.company_id', $companyId);
            })
            ->when($employeeId, function ($q) use ($employeeId) {
                $q->where('attendances.employee_id', $employeeId);
            })
            ->select(
                'attendances.employee_id',
                DB::raw('employees.username as employee_username'),
                DB::raw('companies.name as company_name'),
                DB::raw('SUM(TIME_TO_SEC(attendances.total_work)) as sum_seconds'),
                DB::raw('SEC_TO_TIME(SUM(TIME_TO_SEC(attendances.total_work))) as total_work')
            )
            ->groupBy('attendances.employee_id', 'employees.username', 'companies.name');

        // Total groups count
        $totalRows = DB::query()->fromSub($base, 't')->count();

        if ($perPage == '-1') {
            $perPage = $totalRows;
        }

        // Normalize order field
        $orderField = match ($order) {
            'total_work', 'sum_seconds' => 'sum_seconds',
            'company_name' => 'company_name',
            default => 'employee_username',
        };

        $rows = $base
            ->orderBy($orderField, $dir)
            ->offset($offSet)
            ->limit($perPage)
            ->get();

        $data = [];
        foreach ($rows as $r) {
            $data[] = [
                'employee_id' => $r->employee_id,
                'employee_username' => $r->employee_username,
                'company_name' => $r->company_name,
                'total_work' => $r->total_work, // HH:MM:SS
                'total_hours' => round(((float) $r->sum_seconds) / 3600, 2),
            ];
        }

        // Basic filter data (companies, employees)
        $companies = Company::whereNull('deleted_at')->get(['id', 'name']);
        $employees = Employee::whereNull('deleted_at')->get(['id', 'username']);

        return response()->json([
            'report' => $data,
            'totalRows' => $totalRows,
            'companies' => $companies,
            'employees' => $employees,
            'from' => $from,
            'to' => $to,
            'scope' => $scope,
        ]);
    }

    public function inactiveCustomers(Request $request)
    {
        // Reuse your customers report permission or add a new one
        $this->authorizeForUser($request->user('api'), 'inactive_customers_report', Client::class);
        // OR: $this->authorizeForUser($request->user('api'), 'Reports_inactive_customers', Client::class);

        // ---- Inputs (with sane defaults) ----
        $perPage = (int) ($request->limit ?? 10);
        $pageStart = (int) ($request->page ?? 1);
        $offSet = ($pageStart * $perPage) - $perPage;

        $order = $request->SortField ?: 'name';
        $dir = $request->SortType ?: 'asc';

        // Only allow 30/60/90 (default 30)
        $period = (int) $request->period;
        if (! in_array($period, [30, 60, 90], true)) {
            $period = 30;
        }
        $cutoff = now()->subDays($period); // customers with last sale < cutoff (or null)

        // ---- Subquery: last completed sale per client ----
        // NOTE: you store sale date/time separately; concat to get proper latest datetime.
        $salesAgg = DB::table('sales')
            ->select([
                'client_id',
                DB::raw('MAX(CONCAT(date, " ", IFNULL(time,"00:00:00"))) AS last_sale_dt'),
                DB::raw('COUNT(*) AS sales_count'),
            ])
            ->whereNull('deleted_at')
            ->where('statut', 'completed')
            ->groupBy('client_id');

        // ---- Base query: clients left-joined to last sale ----
        $clientsBase = Client::query()
            ->from('clients')
            ->leftJoinSub($salesAgg, 's', 's.client_id', '=', 'clients.id')
            ->whereNull('clients.deleted_at')
            // global search (name/code/phone)
            ->when($request->filled('search'), function ($q) use ($request) {
                $s = $request->search;
                $q->where(function ($qq) use ($s) {
                    $qq->where('clients.name', 'LIKE', "%{$s}%")
                        ->orWhere('clients.code', 'LIKE', "%{$s}%")
                        ->orWhere('clients.phone', 'LIKE', "%{$s}%");
                });
            })
            // inactivity filter
            ->where(function ($q) use ($cutoff) {
                $q->whereNull('s.last_sale_dt')
                    ->orWhere('s.last_sale_dt', '<', $cutoff->toDateTimeString());
            });

        // ---- Total rows (before pagination) ----
        $totalRows = (clone $clientsBase)->count();

        // ---- Sorting (support computed column) ----
        $sortableComputed = [
            'days_inactive' => 'COALESCE(TIMESTAMPDIFF(DAY, s.last_sale_dt, NOW()), 99999)',
            'last_sale_at' => 's.last_sale_dt',
        ];

        if (isset($sortableComputed[$order])) {
            $clientsBase->orderByRaw($sortableComputed[$order].' '.($dir === 'desc' ? 'DESC' : 'ASC'));
        } else {
            // default to clients table columns
            $clientsBase->orderBy($order, $dir);
        }

        // ---- Fetch page ----
        $clients = $clientsBase
            ->select([
                'clients.id',
                'clients.name',
                'clients.code',
                'clients.phone',
                DB::raw('s.last_sale_dt'),
                DB::raw('COALESCE(s.sales_count, 0) AS total_sales'),
            ])
            ->when($perPage !== -1, fn ($q) => $q->offset($offSet)->limit($perPage))
            ->get();

        // ---- Shape payload ----
        $data = [];
        foreach ($clients as $c) {
            $lastAt = $c->last_sale_dt ? Carbon::parse($c->last_sale_dt) : null;
            $daysInactive = $lastAt ? $lastAt->diffInDays(now()) : null;

            $data[] = [
                'id' => $c->id,
                'name' => $c->name,
                'code' => $c->code,
                'phone' => $c->phone,
                'last_sale_at' => $lastAt ? $lastAt->format('Y-m-d H:i') : null,
                'days_inactive' => $daysInactive ?? 99999, // for sorting; front-end can show "—" if null
                'total_sales' => (int) $c->total_sales,
                'status' => $lastAt ? 'Inactive' : 'Never Purchased',
            ];
        }

        return response()->json([
            'report' => $data,
            'totalRows' => $totalRows,
        ]);
    }

    public function zeroSalesProducts(Request $request)
    {
        $this->authorizeForUser($request->user('api'), 'zeroSalesProducts', Product::class);

        $perPage = (int) ($request->input('limit', 10));
        $page = max(1, (int) $request->input('page', 1));
        $offSet = ($page - 1) * ($perPage === -1 ? 0 : $perPage);

        $order = $request->input('SortField', 'last_sale_at');
        $dirRaw = strtolower($request->input('SortType', 'asc'));
        $dir = $dirRaw === 'desc' ? 'desc' : 'asc';

        // --- Period handling ---
        $periodRaw = $request->input('period', 30);
        $isAllTime = ($periodRaw === 'all' || $periodRaw === 'ALL' || (int) $periodRaw === -1 || (int) $periodRaw === 0);

        if ($isAllTime) {
            $cutoff = null; // no cutoff => 'never sold ever'
        } else {
            $period = (int) $periodRaw;
            if (! in_array($period, [30, 60, 90], true)) {
                $period = 30;
            }
            $cutoff = now()->subDays($period)->toDateTimeString();
        }

        // Optional filters
        $warehouseId = $request->input('warehouse_id');
        $brandId = $request->input('brand_id');
        $categoryId = $request->input('category_id');

        // Sales within window (or lifetime if $cutoff null)
        $periodAgg = DB::table('sale_details as sd')
            ->join('sales as s', 's.id', '=', 'sd.sale_id')
            ->whereNull('s.deleted_at')
            ->where('s.statut', 'completed')
            ->when($warehouseId, fn ($q) => $q->where('s.warehouse_id', $warehouseId))
            ->when($cutoff, fn ($q) => $q->whereRaw('CONCAT(s.date, " ", IFNULL(s.time, "00:00:00")) >= ?', [$cutoff]))
            ->groupBy('sd.product_id')
            ->select([
                'sd.product_id',
                DB::raw('SUM(sd.quantity) as period_qty'),
            ]);

        // Lifetime last sale timestamp
        $lastAgg = DB::table('sale_details as sd2')
            ->join('sales as s2', 's2.id', '=', 'sd2.sale_id')
            ->whereNull('s2.deleted_at')
            ->where('s2.statut', 'completed')
            ->when($warehouseId, fn ($q) => $q->where('s2.warehouse_id', $warehouseId))
            ->groupBy('sd2.product_id')
            ->select([
                'sd2.product_id',
                DB::raw('MAX(CONCAT(s2.date, " ", IFNULL(s2.time, "00:00:00"))) as last_sale_dt'),
            ]);

        $base = Product::query()
            ->from('products')
            ->leftJoinSub($periodAgg, 'p', 'p.product_id', '=', 'products.id')
            ->leftJoinSub($lastAgg, 'l', 'l.product_id', '=', 'products.id')
            ->whereNull('products.deleted_at')
            ->where('products.type', '!=', 'ingredient') // exclude non-stock
            ->when($brandId, fn ($q) => $q->where('products.brand_id', $brandId))
            ->when($categoryId, fn ($q) => $q->where('products.category_id', $categoryId))
            // zero sales in the chosen window (or ever if "all")
            ->where(function ($q) {
                $q->whereNull('p.period_qty')->orWhere('p.period_qty', '=', 0);
            })
            // search
            ->when($request->filled('search'), function ($q) use ($request) {
                $s = $request->input('search');
                $q->where(function ($qq) use ($s) {
                    $qq->where('products.name', 'LIKE', "%{$s}%")
                        ->orWhere('products.code', 'LIKE', "%{$s}%");
                });
            });

        // total rows (before pagination)
        $totalRows = (clone $base)->count();

        // Sorting (support computed)
        $sortableComputed = [
            'last_sale_at' => 'l.last_sale_dt',
            'days_since_last_sale' => 'COALESCE(TIMESTAMPDIFF(DAY, l.last_sale_dt, NOW()), 99999)',
            'period_qty' => 'COALESCE(p.period_qty, 0)',
        ];

        if (array_key_exists($order, $sortableComputed)) {
            if ($order === 'last_sale_at') {
                // Put "Never sold" first on ASC (NULLs first)
                $base->orderByRaw('l.last_sale_dt IS NULL DESC, l.last_sale_dt '.($dir === 'desc' ? 'DESC' : 'ASC'));
            } else {
                $base->orderByRaw($sortableComputed[$order].' '.strtoupper($dir));
            }
        } else {
            // default column sorting
            $base->orderBy($order, $dir);
        }

        $rows = $base
            ->select([
                'products.id',
                'products.code',
                'products.name',
                'products.price',
                DB::raw('COALESCE(p.period_qty, 0) as period_qty'),
                DB::raw('l.last_sale_dt'),
            ])
            ->when($perPage !== -1, fn ($q) => $q->offset($offSet)->limit($perPage))
            ->get();

        $data = $rows->map(function ($r) {
            $last = $r->last_sale_dt ? \Carbon\Carbon::parse($r->last_sale_dt) : null;

            return [
                'id' => (int) $r->id,
                'code' => $r->code,
                'name' => $r->name,
                'price' => (float) $r->price,
                'period_qty' => (int) $r->period_qty, // 0 or null
                'last_sale_at' => $last ? $last->format('Y-m-d H:i') : null,
                'days_since_last_sale' => $last ? $last->diffInDays(now()) : null,
                'status' => $last ? 'InactiveInPeriod' : 'NeverSold',
            ];
        })->all();

        return response()->json([
            'report' => $data,
            'totalRows' => $totalRows,
        ]);
    }

    public function deadStock(Request $request)
    {
        $this->authorizeForUser($request->user('api'), 'Dead_Stock_Report', Product::class);

        // ---- Inputs
        $perPage = (int) ($request->limit ?? 10);           // -1 => ALL
        if ($perPage === 0) {
            $perPage = 10;
        }
        $page = max(1, (int) ($request->page ?? 1));
        $offset = $perPage === -1 ? 0 : ($page - 1) * $perPage;

        $order = $request->SortField ?: 'days_since_last_movement';
        $dir = strtolower($request->SortType ?: 'desc') === 'asc' ? 'asc' : 'desc';

        $period = (int) $request->period;
        if (! in_array($period, [30, 60, 90], true)) {
            $period = 60;
        }
        $cutoff = now()->subDays($period)->toDateTimeString();

        $warehouseId = $request->warehouse_id;
        $brandId = $request->brand_id;
        $categoryId = $request->category_id;
        $search = trim((string) $request->search);

        // ---------------- Movement WITHIN the period (product-level) ----------------
        $saleWithin = DB::table('sale_details as d')
            ->join('sales as h', 'h.id', '=', 'd.sale_id')
            ->whereNull('h.deleted_at')
            ->where('h.statut', 'completed')
            ->when($warehouseId, fn ($q) => $q->where('h.warehouse_id', $warehouseId))
            ->whereRaw('CONCAT(h.date," ",IFNULL(h.time,"00:00:00")) >= ?', [$cutoff])
            ->groupBy('d.product_id')
            ->select('d.product_id', DB::raw('MAX(CONCAT(h.date," ",IFNULL(h.time,"00:00:00"))) as last_dt'));

        $purchaseWithin = DB::table('purchase_details as d')
            ->join('purchases as h', 'h.id', '=', 'd.purchase_id')
            ->whereNull('h.deleted_at')
            ->when($warehouseId, fn ($q) => $q->where('h.warehouse_id', $warehouseId))
            ->whereRaw('COALESCE(CONCAT(h.date," ",IFNULL(h.time,"00:00:00")), h.created_at) >= ?', [$cutoff])
            ->groupBy('d.product_id')
            ->select('d.product_id', DB::raw('MAX(COALESCE(CONCAT(h.date," ",IFNULL(h.time,"00:00:00")), h.created_at)) as last_dt'));

        $transferWithin = DB::table('transfer_details as d')
            ->join('transfers as h', 'h.id', '=', 'd.transfer_id')
            ->whereNull('h.deleted_at')
            ->when($warehouseId, function ($q) use ($warehouseId) {
                $q->where(function ($qq) use ($warehouseId) {
                    $qq->where('h.from_warehouse_id', $warehouseId)
                        ->orWhere('h.to_warehouse_id', $warehouseId);
                });
            })
            ->whereRaw('COALESCE(CONCAT(h.date," ",IFNULL(h.time,"00:00:00")), h.created_at) >= ?', [$cutoff])
            ->groupBy('d.product_id')
            ->select('d.product_id', DB::raw('MAX(COALESCE(CONCAT(h.date," ",IFNULL(h.time,"00:00:00")), h.created_at)) as last_dt'));

        $adjustWithin = DB::table('adjustment_details as d')
            ->join('adjustments as h', 'h.id', '=', 'd.adjustment_id')
            ->whereNull('h.deleted_at')
            ->when($warehouseId, fn ($q) => $q->where('h.warehouse_id', $warehouseId))
            ->whereRaw('COALESCE(CONCAT(h.date," ",IFNULL(h.time,"00:00:00")), h.created_at) >= ?', [$cutoff])
            ->groupBy('d.product_id')
            ->select('d.product_id', DB::raw('MAX(COALESCE(CONCAT(h.date," ",IFNULL(h.time,"00:00:00")), h.created_at)) as last_dt'));

        // ---------------- Lifetime LAST movement (all-time, product-level) ----------------
        $saleAll = DB::table('sale_details as d')->join('sales as h', 'h.id', '=', 'd.sale_id')
            ->whereNull('h.deleted_at')->where('h.statut', 'completed')
            ->when($warehouseId, fn ($q) => $q->where('h.warehouse_id', $warehouseId))
            ->groupBy('d.product_id')
            ->select('d.product_id', DB::raw('MAX(CONCAT(h.date," ",IFNULL(h.time,"00:00:00"))) as last_dt'));

        $purchaseAll = DB::table('purchase_details as d')->join('purchases as h', 'h.id', '=', 'd.purchase_id')
            ->whereNull('h.deleted_at')
            ->when($warehouseId, fn ($q) => $q->where('h.warehouse_id', $warehouseId))
            ->groupBy('d.product_id')
            ->select('d.product_id', DB::raw('MAX(COALESCE(CONCAT(h.date," ",IFNULL(h.time,"00:00:00")), h.created_at)) as last_dt'));

        $transferAll = DB::table('transfer_details as d')->join('transfers as h', 'h.id', '=', 'd.transfer_id')
            ->whereNull('h.deleted_at')
            ->when($warehouseId, function ($q) use ($warehouseId) {
                $q->where(function ($qq) use ($warehouseId) {
                    $qq->where('h.from_warehouse_id', $warehouseId)
                        ->orWhere('h.to_warehouse_id', $warehouseId);
                });
            })
            ->groupBy('d.product_id')
            ->select('d.product_id', DB::raw('MAX(COALESCE(CONCAT(h.date," ",IFNULL(h.time,"00:00:00")), h.created_at)) as last_dt'));

        $adjustAll = DB::table('adjustment_details as d')->join('adjustments as h', 'h.id', '=', 'd.adjustment_id')
            ->whereNull('h.deleted_at')
            ->when($warehouseId, fn ($q) => $q->where('h.warehouse_id', $warehouseId))
            ->groupBy('d.product_id')
            ->select('d.product_id', DB::raw('MAX(COALESCE(CONCAT(h.date," ",IFNULL(h.time,"00:00:00")), h.created_at)) as last_dt'));

        // ---------------- BASE (product-level only) ----------------
        $base = DB::table('products as pr')
            ->leftJoinSub($saleWithin, 'sw', 'sw.product_id', '=', 'pr.id')
            ->leftJoinSub($purchaseWithin, 'pw', 'pw.product_id', '=', 'pr.id')
            ->leftJoinSub($transferWithin, 'tw', 'tw.product_id', '=', 'pr.id')
            ->leftJoinSub($adjustWithin, 'aw', 'aw.product_id', '=', 'pr.id')
            ->leftJoinSub($saleAll, 'sa', 'sa.product_id', '=', 'pr.id')
            ->leftJoinSub($purchaseAll, 'pa', 'pa.product_id', '=', 'pr.id')
            ->leftJoinSub($transferAll, 'ta', 'ta.product_id', '=', 'pr.id')
            ->leftJoinSub($adjustAll, 'aa', 'aa.product_id', '=', 'pr.id')
            ->leftJoin('product_warehouse as pwh', function ($j) use ($warehouseId) {
                $j->on('pwh.product_id', '=', 'pr.id');
                if ($warehouseId) {
                    $j->where('pwh.warehouse_id', $warehouseId);
                }
            })
            ->whereNull('pr.deleted_at')
            ->where('pr.type', '!=', 'ingredient')
            ->when($brandId, fn ($q) => $q->where('pr.brand_id', $brandId))
            ->when($categoryId, fn ($q) => $q->where('pr.category_id', $categoryId))
            // Dead in period: no movement from ANY source
            ->whereRaw('(sw.last_dt IS NULL AND pw.last_dt IS NULL AND tw.last_dt IS NULL AND aw.last_dt IS NULL)');

        if ($search !== '') {
            $base->where(function ($q) use ($search) {
                $q->where('pr.name', 'LIKE', "%{$search}%")
                    ->orWhere('pr.code', 'LIKE', "%{$search}%");
            });
        }

        $select = [
            'pr.id as product_id',
            DB::raw('NULL as product_variant_id'),
            'pr.code',
            'pr.name as product_name',
            DB::raw('NULL as variant_name'),
            DB::raw('COALESCE(SUM(pwh.qte),0) as on_hand'),
            DB::raw('GREATEST(
                IFNULL(sa.last_dt,"0000-01-01 00:00:00"),
                IFNULL(pa.last_dt,"0000-01-01 00:00:00"),
                IFNULL(ta.last_dt,"0000-01-01 00:00:00"),
                IFNULL(aa.last_dt,"0000-01-01 00:00:00")
            ) as last_movement_dt'),
        ];

        $base->groupBy('pr.id', 'pr.code', 'pr.name');

        // ---------- total rows ----------
        $totalRows = DB::query()
            ->fromSub((clone $base)->select(DB::raw('1')), 't')
            ->count();

        // ---------- sorting ----------
        $rowsQ = (clone $base)->select($select);
        if ($order === 'days_since_last_movement') {
            $rowsQ->orderByRaw(
                ' (CASE WHEN last_movement_dt = "0000-01-01 00:00:00" THEN 99999 ELSE TIMESTAMPDIFF(DAY, last_movement_dt, NOW()) END) '.
                ($dir === 'asc' ? 'ASC' : 'DESC')
            );
        } elseif ($order === 'last_movement_dt' || $order === 'last_movement_at') {
            $rowsQ->orderByRaw(
                ' (last_movement_dt = "0000-01-01 00:00:00") DESC, last_movement_dt '.
                ($dir === 'asc' ? 'ASC' : 'DESC')
            );
        } else {
            $safe = ['code', 'product_name', 'on_hand'];
            if (in_array($order, $safe, true)) {
                $rowsQ->orderBy($order, $dir);
            } else {
                $rowsQ->orderBy('product_name', 'asc');
            }
        }

        // ---------- pagination ----------
        if ($perPage !== -1) {
            $rowsQ->offset($offset)->limit($perPage);
        }

        $rows = $rowsQ->get();

        // ---------- map ----------
        $data = $rows->map(function ($r) {
            $last = ($r->last_movement_dt === '0000-01-01 00:00:00') ? null : Carbon::parse($r->last_movement_dt);

            return [
                'product_id' => (int) $r->product_id,
                'product_variant_id' => null,
                'code' => $r->code,
                'product_name' => $r->product_name,
                'variant_name' => null,
                'on_hand' => (float) $r->on_hand,
                'last_movement_at' => $last ? $last->format('Y-m-d H:i') : null,
                'days_since_last_movement' => $last ? $last->diffInDays(now()) : null,
                'status' => $last ? 'NoMovementInPeriod' : 'NeverMoved',
            ];
        })->all();

        // ---------- explicit range for the UI ----------
        if ($totalRows === 0) {
            $from = 0;
            $to = 0;
        } else {
            if ($perPage === -1) {
                $from = 1;
                $to = (int) $totalRows;
            } else {
                $from = $offset + 1;
                $to = min($offset + $perPage, (int) $totalRows);
            }
        }

        return response()->json([
            'report' => $data,
            'totalRows' => (int) $totalRows,
            'page' => (int) $page,
            'perPage' => (int) $perPage,                 // -1 when “All”
            'range' => ['from' => (int) $from, 'to' => (int) $to],
        ]);
    }

    public function draftInvoices(Request $request)
    {
        $this->authorizeForUser($request->user('api'), 'draft_invoices_report', Sale::class);

        // Paging/sort
        $perPage = (int) ($request->limit ?? 10);
        $pageStart = (int) ($request->page ?? 1);
        $offSet = ($pageStart * $perPage) - $perPage;

        $order = $request->get('SortField', 'age_days');
        $dir = strtolower($request->get('SortType', 'desc')) === 'asc' ? 'asc' : 'desc';

        // Date range
        $start = $request->filled('from') ? Carbon::parse($request->get('from'))->startOfDay()
                                        : now()->subDays(29)->startOfDay();
        $end = $request->filled('to') ? Carbon::parse($request->get('to'))->endOfDay()
                                        : now()->endOfDay();

        // Filters
        $warehouseId = $request->integer('warehouse_id') ?: null;
        $search = trim((string) $request->get('search', ''));

        // Date expression (prefer d.date; fallback to created_at)
        $dtExpr = "COALESCE(CONCAT(d.date,' 00:00:00'), d.created_at)";
        $ageExpr = 'DATEDIFF(CURDATE(), COALESCE(d.date, DATE(d.created_at)))';

        $base = DB::table('draft_sales as d')
            ->leftJoin('clients as c', 'c.id', '=', 'd.client_id')
            ->leftJoin('warehouses as w', 'w.id', '=', 'd.warehouse_id')
            ->leftJoin('users as u', 'u.id', '=', 'd.user_id')
            ->whereNull('d.deleted_at')
            ->whereBetween(DB::raw($dtExpr), [$start, $end])
            ->when($warehouseId, fn ($q) => $q->where('d.warehouse_id', $warehouseId))
            ->when($search !== '', function ($q) use ($search) {
                $q->where(function ($qq) use ($search) {
                    $qq->where('d.Ref', 'LIKE', "%{$search}%")
                        ->orWhere('c.name', 'LIKE', "%{$search}%")
                        ->orWhere('c.code', 'LIKE', "%{$search}%")
                        ->orWhere('w.name', 'LIKE', "%{$search}%")
                        ->orWhere('u.username', 'LIKE', "%{$search}%");
                });
            });

        $totalRows = (clone $base)->count();

        $select = [
            'd.id', 'd.Ref', 'd.date', 'd.created_at', 'd.GrandTotal', 'd.TaxNet', 'd.tax_rate', 'd.discount', 'd.shipping',
            'c.name as client_name', 'w.name as warehouse_name', 'u.username as user_name',
            DB::raw("$ageExpr as age_days"),
        ];

        $rowsQ = (clone $base)->select($select);

        $sortableComputed = [
            'age_days' => $ageExpr,
            'client' => 'c.name',
            'warehouse' => 'w.name',
            'user' => 'u.username',
            'created_at' => 'd.created_at',
            'date' => 'd.date',
            'Ref' => 'd.Ref',
            'GrandTotal' => 'd.GrandTotal',
            'TaxNet' => 'd.TaxNet',
            'discount' => 'd.discount',
            'shipping' => 'd.shipping',
        ];

        if (isset($sortableComputed[$order])) {
            $rowsQ->orderByRaw($sortableComputed[$order].' '.($dir === 'asc' ? 'ASC' : 'DESC'));
        } else {
            $rowsQ->orderByRaw($ageExpr.' DESC');
        }

        if ($perPage !== -1) {
            $rowsQ->offset($offSet)->limit($perPage);
        }

        $rows = $rowsQ->get();

        $data = $rows->map(function ($r) {
            $when = $r->date ?: $r->created_at;
            $dateFormatted = $when ? Carbon::parse($when)->format('Y-m-d') : null;

            return [
                'id' => (int) $r->id,
                'Ref' => $r->Ref,
                'date' => $dateFormatted,
                'client' => $r->client_name,
                'warehouse' => $r->warehouse_name,
                'user' => $r->user_name,
                'GrandTotal' => (float) $r->GrandTotal,
                'TaxNet' => (float) $r->TaxNet,
                'tax_rate' => (float) $r->tax_rate,
                'discount' => (float) $r->discount,
                'shipping' => (float) $r->shipping,
                'age_days' => (int) $r->age_days,
                'status' => 'Draft',
            ];
        })->all();

        // Warehouses for dropdown
        $warehouses = \App\Models\Warehouse::whereNull('deleted_at')
            ->orderBy('name')
            ->get(['id', 'name']);

        return response()->json([
            'report' => $data,
            'totalRows' => $totalRows,
            'warehouses' => $warehouses,
        ]);
    }

    public function discountSummary(Request $request)
    {
        $this->authorizeForUser($request->user('api'), 'discount_summary_report', \App\Models\Sale::class);

        // Date range (default last 30 days)
        $start = $request->filled('from') ? \Carbon\Carbon::parse($request->get('from'))->startOfDay()
                                        : now()->subDays(29)->startOfDay();
        $end = $request->filled('to') ? \Carbon\Carbon::parse($request->get('to'))->endOfDay()
                                        : now()->endOfDay();

        $search = trim((string) $request->get('search', ''));

        // paging/sort
        $perPage = max(1, (int) ($request->get('limit', 10)));
        $page = max(1, (int) ($request->get('page', 1)));
        $offset = ($page - 1) * $perPage;

        $order = $request->get('SortField', 'date_time');
        $dir = strtolower($request->get('SortType', 'desc')) === 'asc' ? 'asc' : 'desc';
        $allowed = ['sale_id', 'date_time', 'user_name', 'total_discount'];
        if (! in_array($order, $allowed, true)) {
            $order = 'date_time';
        }

        // Date expr (handles optional time)
        $dateExpr = "COALESCE(CONCAT(s.date,' ',IFNULL(s.time,'00:00:00')), s.created_at)";
        $between = [$start->toDateTimeString(), $end->toDateTimeString()];

        // ---- LINE discount value on each detail row ----
        // Handles both numeric (1/2) and string ('percent'/'fixed') methods.
        $lineDiscountExpr = "
        CASE
            WHEN sd.discount IS NULL THEN 0
            WHEN (sd.discount_method IN ('percent','percentage','%') OR sd.discount_method = 1)
            THEN COALESCE(sd.price,0) * COALESCE(sd.quantity,0) * COALESCE(sd.discount,0)/100
            WHEN (sd.discount_method IN ('fixed','amount','value') OR sd.discount_method = 2)
            THEN COALESCE(sd.discount,0) * COALESCE(sd.quantity,0)
            ELSE 0
        END
        ";

        // ---- HEADER discount per sale (manual + points, tracked separately) ----
        // headerManualExpr: monetary value of order-level (header) discount, respecting discount method.
        // For fixed discounts: use s.discount as-is.
        // For percentage discounts: derive the monetary amount from stored fields.
        //
        // Let:
        //  - T  = GrandTotal
        //  - Tx = TaxNet
        //  - Sh = shipping
        //  - Dp = discount_from_points
        //  - P  = discount (percentage, e.g. 10 for 10%)
        //
        // Then subtotal AFTER header discounts but BEFORE tax/shipping is:
        //    S0 = T - Tx - Sh
        //
        // If header discount is percentage P applied on subtotal BEFORE discount+points, with extra points discount Dp:
        //    Let Dm = manual (percentage) discount amount.
        //    Let S  = subtotal BEFORE header discounts = S0 + Dm + Dp
        //
        //    Dm = P/100 * S = P/100 * (S0 + Dm + Dp)
        // => Dm * (1 - P/100) = (P/100) * (S0 + Dp)
        // => Dm = (P/100) * (S0 + Dp) / (1 - P/100)
        //
        // We compute that in SQL when discount method is percentage, else fall back to fixed amount.
        $headerManualExpr = "
        CASE
            WHEN s.discount IS NULL THEN 0
            WHEN (s.discount_Method IN ('1','percent','percentage','%') OR s.discount_Method = 1)
            THEN
                (COALESCE(s.discount,0) / 100.0)
                * (
                    (COALESCE(s.GrandTotal,0) - COALESCE(s.TaxNet,0) - COALESCE(s.shipping,0) + COALESCE(s.discount_from_points,0))
                )
                / NULLIF(1 - (COALESCE(s.discount,0) / 100.0), 0)
            ELSE COALESCE(s.discount,0)
        END
        ";

        // headerPointsExpr: monetary value of points-based discount (always a fixed amount)
        $headerPointsExpr = 'COALESCE(s.discount_from_points,0)';

        // Base: completed sales within date range
        $detailsBase = DB::table('sale_details as sd')
            ->join('sales as s', 's.id', '=', 'sd.sale_id')
            ->leftJoin('users as u', 'u.id', '=', 's.user_id')
            ->whereNull('s.deleted_at')
            ->where('s.statut', 'completed')
            ->whereBetween(DB::raw($dateExpr), $between);

        if ($search !== '') {
            $detailsBase->where(function ($q) use ($search) {
                $q->where('u.username', 'LIKE', "%{$search}%")
                    ->orWhere('s.id', 'LIKE', "%{$search}%");
            });
        }

        // A. OVERALL TOTAL = sum(line) + sum(header manual) + sum(header points)
        $overallLine = (clone $detailsBase)->selectRaw("COALESCE(SUM($lineDiscountExpr),0) as t")->value('t') ?? 0;

        // Use header-only aggregation to avoid multiplying header by line count
        $headerBase = DB::table('sales as s')
            ->whereNull('s.deleted_at')
            ->where('s.statut', 'completed')
            ->whereBetween(DB::raw($dateExpr), $between);

        if ($search !== '') {
            $headerBase->leftJoin('users as u', 'u.id', '=', 's.user_id')
                ->where(function ($q) use ($search) {
                    $q->where('u.username', 'LIKE', "%{$search}%")
                        ->orWhere('s.id', 'LIKE', "%{$search}%");
                });
        }

        $overallHeaderManual = (clone $headerBase)->selectRaw("COALESCE(SUM($headerManualExpr),0) as t")->value('t') ?? 0;
        $overallHeaderPoints = (clone $headerBase)->selectRaw("COALESCE(SUM($headerPointsExpr),0) as t")->value('t') ?? 0;
        $overallTotal = (float) $overallLine + (float) $overallHeaderManual + (float) $overallHeaderPoints;

        // B. TIMESERIES per day = (sum line per day) + (sum header manual per day) + (sum header points per day)
        $tsLine = (clone $detailsBase)
            ->selectRaw('DATE(s.date) as d')
            ->selectRaw("COALESCE(SUM($lineDiscountExpr),0) as line_total")
            ->groupBy('d')->get()->keyBy('d');

        $tsHeaderManual = (clone $headerBase)
            ->selectRaw('DATE(s.date) as d')
            ->selectRaw("COALESCE(SUM($headerManualExpr),0) as header_manual_total")
            ->groupBy('d')->get()->keyBy('d');

        $tsHeaderPoints = (clone $headerBase)
            ->selectRaw('DATE(s.date) as d')
            ->selectRaw("COALESCE(SUM($headerPointsExpr),0) as header_points_total")
            ->groupBy('d')->get()->keyBy('d');

        // merge days
        $allDays = collect($tsLine->keys())
            ->merge($tsHeaderManual->keys())
            ->merge($tsHeaderPoints->keys())
            ->unique()
            ->sort();
        $timeseries = $allDays->map(function ($d) use ($tsLine, $tsHeaderManual, $tsHeaderPoints) {
            $l = (float) ($tsLine[$d]->line_total ?? 0);
            $hm = (float) ($tsHeaderManual[$d]->header_manual_total ?? 0);
            $hp = (float) ($tsHeaderPoints[$d]->header_points_total ?? 0);

            return (object) ['d' => $d, 'total_discount' => $l + $hm + $hp];
        })->values();

        // C. TABLE rows — one row per sale with BOTH components (no duplication)
        $tableBase = (clone $detailsBase)
            ->groupBy('s.id', 'u.username', 's.date', 's.time', 's.created_at')
            ->selectRaw('s.id as sale_id')
            ->selectRaw("$dateExpr as dt")
            ->selectRaw('COALESCE(u.username,"—") as user_name')
            ->selectRaw("COALESCE(SUM($lineDiscountExpr),0) as line_discount")
            ->selectRaw("MAX($headerManualExpr) as header_manual_discount") // manual header value once per sale
            ->selectRaw("MAX($headerPointsExpr) as header_points_discount") // points header value once per sale
            ->selectRaw("(COALESCE(SUM($lineDiscountExpr),0) + COALESCE(MAX($headerManualExpr),0) + COALESCE(MAX($headerPointsExpr),0)) as total_discount");

        // Count rows safely
        $totalRows = DB::query()->fromSub($tableBase, 'x')->count();

        // Fetch page
        $sortCol = $order === 'date_time' ? 'dt' : $order;
        $rows = $tableBase
            ->orderBy($sortCol, $dir)
            ->offset($offset)->limit($perPage)
            ->get()
            ->map(function ($r) {
                return [
                    'sale_id' => (int) $r->sale_id,
                    'date_time' => \Carbon\Carbon::parse($r->dt)->format('Y-m-d H:i'),
                    'user_name' => $r->user_name,
                    'total_discount' => (float) $r->total_discount,
                    // expose components: line, manual header, points header
                    'line_discount' => (float) $r->line_discount,
                    'header_manual_discount' => (float) $r->header_manual_discount,
                    'header_points_discount' => (float) $r->header_points_discount,
                ];
            });

        return response()->json([
            'report' => $rows,
            'totalRows' => $totalRows,
            'overall_total' => (float) $overallTotal,
            'timeseries' => $timeseries,
        ]);
    }

    public function taxSummary(Request $request)
    {
        $this->authorizeForUser($request->user('api'), 'tax_summary_report', \App\Models\Sale::class);

        $start = $request->filled('from') ? \Carbon\Carbon::parse($request->get('from'))->startOfDay()
                                        : now()->subDays(29)->startOfDay();
        $end = $request->filled('to') ? \Carbon\Carbon::parse($request->get('to'))->endOfDay()
                                        : now()->endOfDay();

        $search = trim((string) $request->get('search', ''));
        $perPage = max(1, (int) ($request->get('limit', 10)));
        $page = max(1, (int) ($request->get('page', 1)));
        $offset = ($page - 1) * $perPage;

        $order = $request->get('SortField', 'date_time');
        $dir = strtolower($request->get('SortType', 'desc')) === 'asc' ? 'asc' : 'desc';
        $allowed = ['sale_id', 'date_time', 'user_name', 'taxable_base', 'tax_collected', 'effective_rate'];
        if (! in_array($order, $allowed, true)) {
            $order = 'date_time';
        }

        $dateExpr = "COALESCE(CONCAT(s.date,' ',IFNULL(s.time,'00:00:00')), s.created_at)";
        $dExpr = 'DATE(COALESCE(s.date, DATE(s.created_at)))';
        $between = [$start->toDateTimeString(), $end->toDateTimeString()];

        // === expressions (paste from block above) ===
        $unitSubtotalExpr = 'COALESCE(sd.price,0)';
        $discountPerUnitExpr = "
        CASE
            WHEN sd.discount IS NULL THEN 0
            WHEN (sd.discount_method IN ('fixed','amount','value') OR sd.discount_method = 2) 
            THEN COALESCE(sd.discount,0)
            ELSE COALESCE(sd.price,0) * COALESCE(sd.discount,0) / 100
        END
        ";
        $unitAfterDiscExpr = "GREATEST( COALESCE(sd.price,0) - ($discountPerUnitExpr), 0 )";
        $rateExpr = 'COALESCE(sd.TaxNet,0) / 100';
        $taxPerUnitExpr = "($unitAfterDiscExpr) * ($rateExpr)";
        $basePerUnitExpr = "
        CASE
            WHEN (sd.tax_method IN ('2','Inclusive')) 
            THEN GREATEST(($unitAfterDiscExpr) - ($taxPerUnitExpr), 0)
            ELSE ($unitAfterDiscExpr)
        END
        ";
        $qtyExpr = 'COALESCE(sd.quantity,0)';
        $taxableBaseExpr = "($basePerUnitExpr) * $qtyExpr";
        $taxAmountExpr = "($taxPerUnitExpr) * $qtyExpr";

        $base = DB::table('sale_details as sd')
            ->join('sales as s', 's.id', '=', 'sd.sale_id')
            ->leftJoin('users as u', 'u.id', '=', 's.user_id')
            ->whereNull('s.deleted_at')
            ->where('s.statut', 'completed')
            ->whereBetween(DB::raw($dateExpr), $between);

        if ($search !== '') {
            $base->where(function ($q) use ($search) {
                $q->where('u.username', 'LIKE', "%{$search}%")
                    ->orWhere('s.id', 'LIKE', "%{$search}%");
            });
        }

        // Totals for filtered range
        $totalsRow = (clone $base)
            ->selectRaw("COALESCE(SUM($taxableBaseExpr),0) as base_total")
            ->selectRaw("COALESCE(SUM($taxAmountExpr),0)   as tax_total")
            ->first();

        $totals = [
            'base' => (float) ($totalsRow->base_total ?? 0),
            'tax' => (float) ($totalsRow->tax_total ?? 0),
        ];

        // Timeseries per day
        $timeseries = (clone $base)
            ->selectRaw("$dExpr as d")
            ->selectRaw("COALESCE(SUM($taxableBaseExpr),0) as taxable_base")
            ->selectRaw("COALESCE(SUM($taxAmountExpr),0)   as tax_collected")
            ->groupBy('d')->orderBy('d', 'asc')->get();

        // Table: one row per sale
        $tableBase = (clone $base)
            ->groupBy('s.id', 'u.username', 's.date', 's.time', 's.created_at')
            ->selectRaw('s.id as sale_id')
            ->selectRaw("$dateExpr as dt")
            ->selectRaw('COALESCE(u.username,"—") as user_name')
            ->selectRaw("COALESCE(SUM($taxableBaseExpr),0) as taxable_base")
            ->selectRaw("COALESCE(SUM($taxAmountExpr),0)   as tax_collected")
            ->selectRaw("CASE WHEN SUM($taxableBaseExpr)=0 
                    THEN NULL 
                    ELSE (SUM($taxAmountExpr)/SUM($taxableBaseExpr))*100 
                END as effective_rate");

        $totalRows = DB::query()->fromSub($tableBase, 'x')->count();
        $sortCol = $order === 'date_time' ? 'dt' : $order;

        $rows = $tableBase
            ->orderBy($sortCol, $dir)
            ->offset($offset)->limit($perPage)
            ->get()
            ->map(function ($r) {
                return [
                    'sale_id' => (int) $r->sale_id,
                    'date_time' => \Carbon\Carbon::parse($r->dt)->format('Y-m-d H:i'),
                    'user_name' => $r->user_name,
                    'taxable_base' => (float) $r->taxable_base,
                    'tax_collected' => (float) $r->tax_collected,
                    'effective_rate' => is_null($r->effective_rate) ? null : round((float) $r->effective_rate, 2),
                ];
            });

        return response()->json([
            'report' => $rows,
            'totalRows' => $totalRows,
            'totals' => $totals,
            'timeseries' => $timeseries,
        ]);
    }

    // ===================== CUSTOMER LOYALTY POINTS REPORT =====================
    public function customerLoyaltyPoints(Request $request)
    {
        // Permission (create a permission key for this report if needed)
        try {
            $this->authorizeForUser($request->user('api'), 'customer_loyalty_points_report', \App\Models\Sale::class);
        } catch (\Throwable $e) { /* fallback allow if no policy */
        }

        // Date range
        $start = $request->filled('from') ? \Carbon\Carbon::parse($request->get('from'))->startOfDay() : now()->subDays(29)->startOfDay();
        $end = $request->filled('to') ? \Carbon\Carbon::parse($request->get('to'))->endOfDay() : now()->endOfDay();

        $search = trim((string) $request->get('search', ''));
        $perPage = max(1, (int) ($request->get('limit', 10)));
        $page = max(1, (int) ($request->get('page', 1)));
        $offset = ($page - 1) * $perPage;

        $order = $request->get('SortField', 'earned_points');
        $dir = strtolower($request->get('SortType', 'desc')) === 'asc' ? 'asc' : 'desc';
        $allowed = ['client_id', 'client_name', 'earned_points', 'redeemed_points', 'current_points'];
        if (! in_array($order, $allowed, true)) {
            $order = 'earned_points';
        }

        // Use created_at OR date/time on sales
        $dateExpr = "COALESCE(CONCAT(s.date,' ',IFNULL(s.time,'00:00:00')), s.created_at)";
        $between = [$start->toDateTimeString(), $end->toDateTimeString()];

        // Base completed sales in range, grouped by client
        $base = \DB::table('sales as s')
            ->join('clients as c', 'c.id', '=', 's.client_id')
            ->whereNull('s.deleted_at')
            ->where('s.statut', 'completed')
            ->whereBetween(\DB::raw($dateExpr), $between);

        if ($search !== '') {
            $base->where(function ($q) use ($search) {
                $q->where('c.name', 'LIKE', "%{$search}%")
                    ->orWhere('c.email', 'LIKE', "%{$search}%")
                    ->orWhere('c.phone', 'LIKE', "%{$search}%");
            });
        }

        $select = $base
            ->groupBy('c.id', 'c.name', 'c.points')
            ->selectRaw('c.id as client_id')
            ->selectRaw('c.name as client_name')
            ->selectRaw('COALESCE(SUM(s.earned_points),0) as earned_points')
            ->selectRaw('COALESCE(SUM(s.used_points),0) as redeemed_points')
            ->selectRaw('COALESCE(MAX(c.points),0) as current_points');

        // total rows
        $totalRows = \DB::query()->fromSub($select, 'x')->count();

        // page rows
        $rows = (clone $select)
            ->orderBy($order, $dir)
            ->offset($offset)->limit($perPage)
            ->get()
            ->map(function ($r) {
                return [
                    'client_id' => (int) $r->client_id,
                    'client_name' => $r->client_name,
                    'earned_points' => (float) $r->earned_points,
                    'redeemed_points' => (float) $r->redeemed_points,
                    'current_points' => (float) $r->current_points,
                ];
            });

        // overall totals in the same range
        $totals = (array) (\DB::query()->fromSub($select, 't')
            ->selectRaw('COALESCE(SUM(earned_points),0) as earned_total')
            ->selectRaw('COALESCE(SUM(redeemed_points),0) as redeemed_total')
            ->selectRaw('COALESCE(SUM(current_points),0) as balance_total')
            ->first() ?? []);

        return response()->json([
            'rows' => $rows,
            'totalRows' => $totalRows,
            'totals' => [
                'earned_total' => (float) ($totals['earned_total'] ?? 0),
                'redeemed_total' => (float) ($totals['redeemed_total'] ?? 0),
                'balance_total' => (float) ($totals['balance_total'] ?? 0),
            ],
        ]);
    }

    public function stockAging(Request $request)
    {
        $this->authorizeForUser($request->user('api'), 'Stock_Aging_Report', Product::class);

        // ---- paging/sort ----
        $perPage = (int) ($request->limit ?? 10);
        if ($perPage === 0) {
            $perPage = 10;
        }
        $pageStart = max((int) ($request->page ?? 1), 1);
        $offSet = ($pageStart * $perPage) - $perPage;

        $order = $request->get('SortField', 'age_days');
        if ($order === 'last_inbound_at') {
            $order = 'last_inbound_dt';
        }
        $dir = strtolower($request->get('SortType', 'desc')) === 'asc' ? 'asc' : 'desc';

        // ---- filters ----
        $dimension = in_array($request->dimension, ['product', 'variant'], true) ? $request->dimension : 'product';
        $warehouseId = $request->filled('warehouse_id') ? $request->warehouse_id : null;
        $brandId = $request->filled('brand_id') ? $request->brand_id : null;
        $categoryId = $request->filled('category_id') ? $request->category_id : null;
        $search = trim((string) $request->search);

        // ---- buckets ----
        $cuts = collect(explode(',', (string) $request->buckets))
            ->map(fn ($x) => (int) trim($x))
            ->filter(fn ($n) => $n > 0)
            ->sort()->values();
        if ($cuts->isEmpty()) {
            $cuts = collect([30, 60, 90]);
        }

        // ---------- helpers to build inbound subqueries ----------
        $buildPurchaseInbound = function (array $groupCols) use ($warehouseId) {
            return DB::table('purchase_details as d')
                ->join('purchases as h', 'h.id', '=', 'd.purchase_id')
                ->whereNull('h.deleted_at')
                ->when($warehouseId, fn ($q) => $q->where('h.warehouse_id', $warehouseId))
                ->groupBy($groupCols)
                ->select(array_merge($groupCols, [
                    DB::raw("MAX(COALESCE(TIMESTAMP(h.`date`, IFNULL(h.`time`,'00:00:00')), h.`created_at`)) as in_dt"),
                ]));
        };

        $buildTransferInbound = function (array $groupCols) use ($warehouseId) {
            return DB::table('transfer_details as d')
                ->join('transfers as h', 'h.id', '=', 'd.transfer_id')
                ->whereNull('h.deleted_at')
                ->when($warehouseId, fn ($q) => $q->where('h.to_warehouse_id', $warehouseId))
                ->groupBy($groupCols)
                ->select(array_merge($groupCols, [
                    DB::raw("MAX(COALESCE(TIMESTAMP(h.`date`, IFNULL(h.`time`,'00:00:00')), h.`created_at`)) as in_dt"),
                ]));
        };

        $buildAdjustInbound = function (array $groupCols) use ($warehouseId) {
            return DB::table('adjustment_details as d')
                ->join('adjustments as h', 'h.id', '=', 'd.adjustment_id')
                ->whereNull('h.deleted_at')
                ->when($warehouseId, fn ($q) => $q->where('h.warehouse_id', $warehouseId))
                ->where(function ($q) {
                    $q->where('d.type', '=', 'add')
                        ->orWhere('d.quantity', '>', 0);
                })
                ->groupBy($groupCols)
                ->select(array_merge($groupCols, [
                    DB::raw("MAX(COALESCE(TIMESTAMP(h.`date`, IFNULL(h.`time`,'00:00:00')), h.`created_at`)) as in_dt"),
                ]));
        };

        if ($dimension === 'variant') {
            // ---------------- VARIANT dimension ----------------
            $cols = ['product_id', 'product_variant_id'];

            $purchaseInbound = $buildPurchaseInbound($cols);
            $transferInbound = $buildTransferInbound($cols);
            $adjustInbound = $buildAdjustInbound($cols);

            $base = DB::table('product_variants as pv')
                ->join('products as pr', 'pr.id', '=', 'pv.product_id')
                ->leftJoinSub($purchaseInbound, 'pi', fn ($j) => $j
                    ->on('pi.product_id', '=', 'pv.product_id')
                    ->on('pi.product_variant_id', '=', 'pv.id'))
                ->leftJoinSub($transferInbound, 'ti', fn ($j) => $j
                    ->on('ti.product_id', '=', 'pv.product_id')
                    ->on('ti.product_variant_id', '=', 'pv.id'))
                ->leftJoinSub($adjustInbound, 'ai', fn ($j) => $j
                    ->on('ai.product_id', '=', 'pv.product_id')
                    ->on('ai.product_variant_id', '=', 'pv.id'))
                ->leftJoin('product_warehouse as pwh', function ($j) use ($warehouseId) {
                    $j->on('pwh.product_id', '=', 'pv.product_id')
                        ->on('pwh.product_variant_id', '=', 'pv.id');
                    if ($warehouseId) {
                        $j->where('pwh.warehouse_id', $warehouseId);
                    }
                })
                ->whereNull('pr.deleted_at')
                ->where('pr.type', '!=', 'ingredient')
                ->when($brandId, fn ($q) => $q->where('pr.brand_id', $brandId))
                ->when($categoryId, fn ($q) => $q->where('pr.category_id', $categoryId));

            if ($search !== '') {
                $base->where(function ($q) use ($search) {
                    $q->where('pr.name', 'LIKE', "%{$search}%")
                        ->orWhere('pr.code', 'LIKE', "%{$search}%")
                        ->orWhere('pv.name', 'LIKE', "%{$search}%");
                });
            }

            // COUNT via subquery (1 row per variant)
            $totalRows = DB::query()
                ->fromSub(
                    (clone $base)->select('pv.id')->groupBy('pv.id'),
                    't'
                )->count();

            $rowsQ = (clone $base)->select([
                'pr.id as product_id',
                'pv.id as product_variant_id',
                'pr.code',
                'pr.name as product_name',
                'pv.name as variant_name',
                DB::raw('COALESCE(SUM(pwh.qte),0) as on_hand'),
                DB::raw("GREATEST(
                    IFNULL(pi.in_dt,'1970-01-01 00:00:00'),
                    IFNULL(ti.in_dt,'1970-01-01 00:00:00'),
                    IFNULL(ai.in_dt,'1970-01-01 00:00:00')
                ) as last_inbound_dt"),
            ])->groupBy('pr.id', 'pv.id');

        } else {
            // ---------------- PRODUCT dimension ----------------
            // Build product-level inbound subqueries directly (so alias `in_dt` exists here)
            $pi = DB::table('purchase_details as d')
                ->join('purchases as h', 'h.id', '=', 'd.purchase_id')
                ->whereNull('h.deleted_at')
                ->when($warehouseId, fn ($q) => $q->where('h.warehouse_id', $warehouseId))
                ->groupBy('product_id')
                ->select([
                    'product_id',
                    DB::raw("MAX(COALESCE(TIMESTAMP(h.`date`, IFNULL(h.`time`,'00:00:00')), h.`created_at`)) as in_dt"),
                ]);

            $ti = DB::table('transfer_details as d')
                ->join('transfers as h', 'h.id', '=', 'd.transfer_id')
                ->whereNull('h.deleted_at')
                ->when($warehouseId, fn ($q) => $q->where('h.to_warehouse_id', $warehouseId))
                ->groupBy('product_id')
                ->select([
                    'product_id',
                    DB::raw("MAX(COALESCE(TIMESTAMP(h.`date`, IFNULL(h.`time`,'00:00:00')), h.`created_at`)) as in_dt"),
                ]);

            $ai = DB::table('adjustment_details as d')
                ->join('adjustments as h', 'h.id', '=', 'd.adjustment_id')
                ->whereNull('h.deleted_at')
                ->when($warehouseId, fn ($q) => $q->where('h.warehouse_id', $warehouseId))
                ->where(function ($q) {
                    $q->where('d.type', '=', 'add')
                        ->orWhere('d.quantity', '>', 0);
                })
                ->groupBy('product_id')
                ->select([
                    'product_id',
                    DB::raw("MAX(COALESCE(TIMESTAMP(h.`date`, IFNULL(h.`time`,'00:00:00')), h.`created_at`)) as in_dt"),
                ]);

            $base = DB::table('products as pr')
                ->leftJoinSub($pi, 'pi', 'pi.product_id', '=', 'pr.id')
                ->leftJoinSub($ti, 'ti', 'ti.product_id', '=', 'pr.id')
                ->leftJoinSub($ai, 'ai', 'ai.product_id', '=', 'pr.id')
                ->leftJoin('product_warehouse as pwh', function ($j) use ($warehouseId) {
                    $j->on('pwh.product_id', '=', 'pr.id');
                    if ($warehouseId) {
                        $j->where('pwh.warehouse_id', $warehouseId);
                    }
                })
                ->whereNull('pr.deleted_at')
                ->where('pr.type', '!=', 'ingredient')
                ->when($brandId, fn ($q) => $q->where('pr.brand_id', $brandId))
                ->when($categoryId, fn ($q) => $q->where('pr.category_id', $categoryId));

            if ($search !== '') {
                $base->where(function ($q) use ($search) {
                    $q->where('pr.name', 'LIKE', "%{$search}%")
                        ->orWhere('pr.code', 'LIKE', "%{$search}%");
                });
            }

            // COUNT via subquery (1 row per product)
            $totalRows = DB::query()
                ->fromSub(
                    (clone $base)->select('pr.id')->groupBy('pr.id'),
                    't'
                )->count();

            $rowsQ = (clone $base)->select([
                'pr.id as product_id',
                DB::raw('NULL as product_variant_id'),
                'pr.code',
                'pr.name as product_name',
                DB::raw('NULL as variant_name'),
                DB::raw('COALESCE(SUM(pwh.qte),0) as on_hand'),
                DB::raw("GREATEST(
                    IFNULL(pi.in_dt,'1970-01-01 00:00:00'),
                    IFNULL(ti.in_dt,'1970-01-01 00:00:00'),
                    IFNULL(ai.in_dt,'1970-01-01 00:00:00')
                ) as last_inbound_dt"),
            ])->groupBy('pr.id');
        }

        // ---- sorting ----
        if ($order === 'age_days') {
            $rowsQ->orderByRaw(
                " (CASE WHEN last_inbound_dt = '1970-01-01 00:00:00'
                        THEN 99999
                        ELSE TIMESTAMPDIFF(DAY, last_inbound_dt, NOW())
                END) ".($dir === 'asc' ? 'ASC' : 'DESC')
            );
        } elseif ($order === 'last_inbound_dt') {
            $rowsQ->orderByRaw(
                " (last_inbound_dt = '1970-01-01 00:00:00') DESC, last_inbound_dt ".($dir === 'asc' ? 'ASC' : 'DESC')
            );
        } else {
            $safe = ['code', 'product_name', 'variant_name', 'on_hand'];
            if (in_array($order, $safe, true)) {
                $rowsQ->orderBy($order, $dir);
            } else {
                $rowsQ->orderBy('product_name', 'asc');
            }
        }

        if ($perPage !== -1) {
            $rowsQ->offset($offSet)->limit($perPage);
        }

        $rows = $rowsQ->get();

        // ---- bucket label helper ----
        $labelBucket = function (?int $age) use ($cuts) {
            if ($age === null) {
                return null;
            }
            $c = $cuts->all(); // ascending
            if ($age <= $c[0]) {
                return "0–{$c[0]}";
            }
            if (count($c) === 1) {
                return ">{$c[0]}";
            }
            if ($age <= $c[1]) {
                return ($c[0] + 1)."–{$c[1]}";
            }
            if (count($c) === 2) {
                return ">{$c[1]}";
            }
            if ($age <= $c[2]) {
                return ($c[1] + 1)."–{$c[2]}";
            }

            return ">{$c[2]}";
        };

        $data = $rows->map(function ($r) use ($labelBucket) {
            $last = ($r->last_inbound_dt === '1970-01-01 00:00:00') ? null : Carbon::parse($r->last_inbound_dt);
            $ageDays = $last ? $last->diffInDays(now()) : null;

            return [
                'product_id' => (int) $r->product_id,
                'product_variant_id' => $r->product_variant_id ? (int) $r->product_variant_id : null,
                'code' => $r->code,
                'product_name' => $r->product_name,
                'variant_name' => $r->variant_name,
                'on_hand' => (float) $r->on_hand,
                'last_inbound_at' => $last ? $last->format('Y-m-d H:i') : null,
                'age_days' => $ageDays,
                'age_bucket' => $labelBucket($ageDays),
            ];
        })->all();

        return response()->json([
            'report' => $data,
            'totalRows' => (int) $totalRows,
        ]);
    }

    public function stockAgingFilters(Request $request)
    {
        $this->authorizeForUser($request->user('api'), 'Stock_Aging_Report', Product::class);

        // Fetch visible options; adjust table/column names if yours differ
        $warehouses = DB::table('warehouses')
            ->whereNull('deleted_at')
            ->select('id', 'name')
            ->orderBy('name')
            ->get();

        $brands = DB::table('brands')
            ->whereNull('deleted_at')
            ->select('id', 'name')
            ->orderBy('name')
            ->get();

        $categories = DB::table('categories')
            ->whereNull('deleted_at')
            ->select('id', 'name')
            ->orderBy('name')
            ->get();

        return response()->json([
            'warehouses' => $warehouses,
            'brands' => $brands,
            'categories' => $categories,
        ]);
    }

    public function stockTransferReport(Request $request)
    {
        $this->authorizeForUser($request->user('api'), 'Stock_Transfer_Report', Transfer::class);

        $start = Carbon::parse($request->from ?? now()->subDays(6))->startOfDay();
        $end = Carbon::parse($request->to ?? now())->endOfDay();

        // Filters
        $fromWarehouseId = $request->integer('from_warehouse_id') ?: null;
        $toWarehouseId = $request->integer('to_warehouse_id') ?: null;
        $warehouseId = $request->integer('warehouse_id') ?: null; // if set, “direction” applies
        $direction = in_array($request->direction, ['all', 'inbound', 'outbound'], true) ? $request->direction : 'all';
        $statut = $request->get('statut'); // optional: pending/completed/etc.
        $search = trim((string) $request->get('search', ''));

        // Table params
        $perPage = max(1, (int) ($request->get('limit', 10)));
        $page = max(1, (int) ($request->get('page', 1)));
        $offset = ($page - 1) * $perPage;

        $sortField = $request->get('SortField', 'dt');
        $sortType = strtolower($request->get('SortType', 'desc')) === 'asc' ? 'asc' : 'desc';

        // Warehouses (for dropdowns)
        $warehouses = Warehouse::whereNull('deleted_at')->orderBy('name')->get(['id', 'name']);

        // Base join (details + header)
        $base = TransferDetail::from('transfer_details as d')
            ->join('transfers as t', 't.id', '=', 'd.transfer_id')
            ->whereNull('t.deleted_at')
            ->whereBetween(DB::raw('COALESCE(CONCAT(t.date," ",IFNULL(t.time,"00:00:00")), t.created_at)'), [$start, $end])
            ->when($statut, fn ($q) => $q->where('t.statut', $statut))
            ->when($fromWarehouseId, fn ($q) => $q->where('t.from_warehouse_id', $fromWarehouseId))
            ->when($toWarehouseId, fn ($q) => $q->where('t.to_warehouse_id', $toWarehouseId))
            ->when($warehouseId && $direction === 'inbound', fn ($q) => $q->where('t.to_warehouse_id', $warehouseId))
            ->when($warehouseId && $direction === 'outbound', fn ($q) => $q->where('t.from_warehouse_id', $warehouseId))
            ->when($warehouseId && $direction === 'all', fn ($q) => $q->where(function ($qq) use ($warehouseId) {
                $qq->where('t.from_warehouse_id', $warehouseId)->orWhere('t.to_warehouse_id', $warehouseId);
            }))
            ->when($search !== '', function ($q) use ($search) {
                $q->where(function ($w) use ($search) {
                    $w->where('t.notes', 'LIKE', "%{$search}%")
                        ->orWhere('t.id', 'LIKE', "%{$search}%");
                });
            });

        // ---------- KPIs ----------
        $kpi = (clone $base)
            ->selectRaw('COUNT(DISTINCT t.id) as transfers_count')
            ->selectRaw('COUNT(d.id) as lines_count')
            ->selectRaw('COALESCE(SUM(d.quantity),0) as qty_sum')
            ->selectRaw('COALESCE(SUM(d.total),0) as value_sum')
            ->first();

        // ---------- Time-series (day) ----------
        $timeseries = (clone $base)
            ->selectRaw('DATE(COALESCE(t.date, DATE(t.created_at))) as d')
            ->selectRaw('COALESCE(SUM(d.quantity),0) as qty')
            ->selectRaw('COALESCE(SUM(d.total),0) as val')
            ->groupBy('d')->orderBy('d', 'asc')->get();

        // ---------- Top routes ----------
        $routes = (clone $base)
            ->join('warehouses as wf', 'wf.id', '=', 't.from_warehouse_id')
            ->join('warehouses as wt', 'wt.id', '=', 't.to_warehouse_id')
            ->selectRaw('t.from_warehouse_id, wf.name as from_name')
            ->selectRaw('t.to_warehouse_id, wt.name as to_name')
            ->selectRaw('COUNT(DISTINCT t.id) as transfers')
            ->selectRaw('COALESCE(SUM(d.quantity),0) as qty')
            ->selectRaw('COALESCE(SUM(d.total),0) as val')
            ->groupBy('t.from_warehouse_id', 'wf.name', 't.to_warehouse_id', 'wt.name')
            ->orderBy('val', 'desc')
            ->limit(10)->get();

        // ---------- Table (one row per transfer) ----------
        $tableBase = (clone $base)
            ->leftJoin('warehouses as wf', 'wf.id', '=', 't.from_warehouse_id')
            ->leftJoin('warehouses as wt', 'wt.id', '=', 't.to_warehouse_id')
            ->selectRaw('t.id as transfer_id')
            ->selectRaw('COALESCE(CONCAT(t.date," ",IFNULL(t.time,"00:00:00")), t.created_at) as dt')
            ->selectRaw('wf.name as from_wh, wt.name as to_wh')
            ->selectRaw('COALESCE(SUM(d.quantity),0) as qty')
            ->selectRaw('COALESCE(SUM(d.total),0) as val')
            ->selectRaw('t.statut as statut')
            ->groupBy('t.id', 'dt', 'from_wh', 'to_wh', 't.statut');

        $totalRows = DB::table(DB::raw("({$tableBase->toSql()}) as x"))
            ->mergeBindings($tableBase->getQuery())
            ->count();

        $sortable = ['dt', 'from_wh', 'to_wh', 'qty', 'val', 'statut', 'transfer_id'];
        if (! in_array($sortField, $sortable, true)) {
            $sortField = 'dt';
        }

        $rows = $tableBase
            ->orderBy($sortField, $sortType)
            ->offset($offset)->limit($perPage)
            ->get()
            ->map(function ($r) {
                return [
                    'transfer_id' => (int) $r->transfer_id,
                    'date_time' => Carbon::parse($r->dt)->format('Y-m-d H:i'),
                    'from' => $r->from_wh,
                    'to' => $r->to_wh,
                    'qty' => (float) $r->qty,
                    'value' => (float) $r->val,
                    'statut' => $r->statut,
                ];
            });

        return response()->json([
            'data' => [
                'kpis' => [
                    'transfers_count' => (int) $kpi->transfers_count,
                    'lines_count' => (int) $kpi->lines_count,
                    'qty_sum' => (float) $kpi->qty_sum,
                    'value_sum' => (float) $kpi->value_sum,
                    'avg_items_per_transfer' => $kpi->transfers_count ? round($kpi->qty_sum / $kpi->transfers_count, 2) : 0,
                    'avg_value_per_transfer' => $kpi->transfers_count ? round($kpi->value_sum / $kpi->transfers_count, 2) : 0,
                ],
                'timeseries' => $timeseries,
                'routes' => $routes,
                'rows' => $rows,
                'totalRows' => $totalRows,
            ],
            'warehouses' => $warehouses,
        ]);
    }

    public function stockAdjustmentReport(Request $request)
    {
        // Permission (adjust to your policy/ability name if different)
        $this->authorizeForUser($request->user('api'), 'Stock_Adjustment_Report', Adjustment::class);

        // Dates
        $start = $request->from ? Carbon::parse($request->from.' 00:00:00') : now()->subDays(6)->startOfDay();
        $end = $request->to ? Carbon::parse($request->to.' 23:59:59') : now()->endOfDay();

        // Warehouse scope (user)
        $user = auth()->user();
        if ($user->is_all_warehouses) {
            $warehouses = Warehouse::whereNull('deleted_at')->orderBy('name')->get(['id', 'name']);
            $array_warehouses_id = $warehouses->pluck('id')->all();
        } else {
            $array_warehouses_id = UserWarehouse::where('user_id', $user->id)->pluck('warehouse_id')->all();
            $warehouses = Warehouse::whereNull('deleted_at')->whereIn('id', $array_warehouses_id)->orderBy('name')->get(['id', 'name']);
        }

        // Filters
        $warehouseId = $request->integer('warehouse_id') ?: null;
        $search = trim((string) $request->get('search', ''));

        // Base (details + header)
        $base = AdjustmentDetail::from('adjustment_details as d')
            ->join('adjustments as a', 'a.id', '=', 'd.adjustment_id')
            ->whereNull('a.deleted_at')
            ->whereBetween(
                DB::raw("COALESCE(CONCAT(a.date,' ',IFNULL(a.time,'00:00:00')), a.created_at)"),
                [$start->toDateTimeString(), $end->toDateTimeString()]
            )
            ->when($warehouseId, fn ($q) => $q->where('a.warehouse_id', $warehouseId))
            ->when(! $warehouseId, fn ($q) => $q->whereIn('a.warehouse_id', $array_warehouses_id))
            ->when($search !== '', function ($q) use ($search) {
                $q->where(function ($w) use ($search) {
                    $w->where('a.Ref', 'LIKE', "%{$search}%")
                        ->orWhere('a.notes', 'LIKE', "%{$search}%");
                });
            });

        // ---- KPIs
        $kpi = (clone $base)
            ->selectRaw('COUNT(DISTINCT a.id) as adjustments_count')
            ->selectRaw("SUM(CASE WHEN d.type='add' THEN d.quantity ELSE 0 END) as qty_added")
            ->selectRaw("SUM(CASE WHEN d.type='sub' THEN d.quantity ELSE 0 END) as qty_removed")
            ->first();

        // ---- Time series (by day)
        $timeseries = (clone $base)
            ->selectRaw('DATE(COALESCE(a.date, DATE(a.created_at))) as d')
            ->selectRaw("SUM(CASE WHEN d.type='add' THEN d.quantity ELSE -d.quantity END) as net_qty")
            ->groupBy('d')->orderBy('d', 'asc')->get();

        // ---- By type (pie)  ✅ alias renamed from `lines` to `total_lines`
        $byType = (clone $base)
            ->select('d.type')
            ->selectRaw('COUNT(d.id) as total_lines')
            ->selectRaw('SUM(d.quantity) as qty')
            ->groupBy('d.type')->get();

        // ---- Table (paginated)
        $perPage = max(1, (int) ($request->get('limit', 10)));
        $page = max(1, (int) ($request->get('page', 1)));
        $offset = ($page - 1) * $perPage;
        $sortField = $request->get('SortField', 'dt');
        $sortType = strtolower($request->get('SortType', 'desc')) === 'asc' ? 'asc' : 'desc';
        $sortable = ['dt', 'warehouse', 'qty', 'net_qty', 'ref', 'adj_id'];

        $tableBase = (clone $base)
            ->leftJoin('warehouses as w', 'w.id', '=', 'a.warehouse_id')
            ->selectRaw('a.id as adj_id, a.Ref as ref')
            ->selectRaw('COALESCE(CONCAT(a.date," ",IFNULL(a.time,"00:00:00")), a.created_at) as dt')
            ->selectRaw('w.name as warehouse')
            ->selectRaw('SUM(d.quantity) as qty')
            ->selectRaw('SUM(CASE WHEN d.type="add" THEN d.quantity ELSE -d.quantity END) as net_qty')
            ->groupBy('a.id', 'a.Ref', 'dt', 'w.name');

        // total rows (count groups)
        $totalRows = DB::table(DB::raw("({$tableBase->toSql()}) as t"))
            ->mergeBindings($tableBase->getQuery())
            ->count();

        $rows = (clone $tableBase)
            ->orderBy(in_array($sortField, $sortable, true) ? $sortField : 'dt', $sortType)
            ->offset($offset)->limit($perPage)
            ->get()
            ->map(function ($r) {
                return [
                    'adj_id' => (int) $r->adj_id,
                    'ref' => $r->ref,
                    'date' => Carbon::parse($r->dt)->format('Y-m-d H:i'),
                    'warehouse' => $r->warehouse,
                    'qty' => (float) $r->qty,
                    'net_qty' => (float) $r->net_qty,
                ];
            });

        return response()->json([
            'data' => [
                'kpis' => [
                    'adjustments_count' => (int) $kpi->adjustments_count,
                    'qty_added' => (float) $kpi->qty_added,
                    'qty_removed' => (float) $kpi->qty_removed,
                    'net_qty' => (float) $kpi->qty_added - (float) $kpi->qty_removed,
                ],
                'timeseries' => $timeseries,
                'byType' => $byType,
                'rows' => $rows,
                'totalRows' => $totalRows,
            ],
            'warehouses' => $warehouses,
        ]);
    }

    public function topSuppliersReport(Request $request)
    {
        $this->authorizeForUser($request->user('api'), 'Top_Suppliers_Report', Provider::class);

        // Dates (safe, quoted)
        $start = $request->from ? Carbon::parse($request->from.' 00:00:00') : now()->startOfMonth();
        $end = $request->to ? Carbon::parse($request->to.' 23:59:59') : now()->endOfMonth();

        // User warehouse scope
        $user = auth()->user();
        if ($user->is_all_warehouses) {
            $warehouses = Warehouse::whereNull('deleted_at')->orderBy('name')->get(['id', 'name']);
            $array_warehouses_id = $warehouses->pluck('id')->all();
        } else {
            $array_warehouses_id = UserWarehouse::where('user_id', $user->id)->pluck('warehouse_id')->all();
            $warehouses = Warehouse::whereNull('deleted_at')->whereIn('id', $array_warehouses_id)->orderBy('name')->get(['id', 'name']);
        }

        // Filters
        $warehouseId = $request->integer('warehouse_id') ?: null;
        $search = trim((string) $request->get('search', ''));

        // Header base (purchases)
        $hdr = DB::table('purchases as h')
            ->whereNull('h.deleted_at')
            ->where('h.statut', 'received')
            ->whereBetween(DB::raw("COALESCE(CONCAT(h.date,' ',IFNULL(h.time,'00:00:00')), h.created_at)"), [$start->toDateTimeString(), $end->toDateTimeString()])
            ->when($warehouseId, fn ($q) => $q->where('h.warehouse_id', $warehouseId))
            ->when(! $warehouseId, fn ($q) => $q->whereIn('h.warehouse_id', $array_warehouses_id));

        // VALUE by supplier (sum GrandTotal, count orders)
        $valueAgg = (clone $hdr)
            ->groupBy('h.provider_id')
            ->selectRaw('h.provider_id, SUM(h.GrandTotal) as value_sum, COUNT(*) as orders_count');

        // QTY by supplier (sum details quantity)
        $qtyAgg = DB::table('purchase_details as d')
            ->join('purchases as h', 'h.id', '=', 'd.purchase_id')
            ->whereNull('h.deleted_at')
            ->where('h.statut', 'received')
            ->whereBetween(DB::raw("COALESCE(CONCAT(h.date,' ',IFNULL(h.time,'00:00:00')), h.created_at)"), [$start->toDateTimeString(), $end->toDateTimeString()])
            ->when($warehouseId, fn ($q) => $q->where('h.warehouse_id', $warehouseId))
            ->when(! $warehouseId, fn ($q) => $q->whereIn('h.warehouse_id', $array_warehouses_id))
            ->groupBy('h.provider_id')
            ->selectRaw('h.provider_id, COALESCE(SUM(d.quantity),0) as qty_sum');

        // Join + supplier names (assuming table 'providers')
        $base = DB::query()
            ->fromSub($valueAgg, 'v')
            ->leftJoinSub($qtyAgg, 'q', 'q.provider_id', '=', 'v.provider_id')
            ->join('providers as s', 's.id', '=', 'v.provider_id')
            ->selectRaw('s.id as supplier_id, s.name as supplier')
            ->selectRaw('v.orders_count, v.value_sum, COALESCE(q.qty_sum,0) as qty_sum')
            ->selectRaw('CASE WHEN v.orders_count>0 THEN v.value_sum / v.orders_count ELSE 0 END as avg_value')
            ->when($search !== '', fn ($q) => $q->where('s.name', 'LIKE', "%{$search}%"));

        // KPIs
        $kpis = [
            'vendors_count' => (clone $base)->count(),
            'total_purchases' => (clone $hdr)->count(),
            'total_qty' => (float) DB::query()->fromSub($qtyAgg, 'qq')->sum('qty_sum'),
            'total_spend' => (float) DB::query()->fromSub($valueAgg, 'vv')->sum('value_sum'),
        ];

        // Charts: Top 10 by value & qty
        $topByValue = (clone $base)->orderBy('value_sum', 'desc')->limit(10)->get();
        $topByQty = (clone $base)->orderBy('qty_sum', 'desc')->limit(10)->get();

        // Table (pagination + sorting)
        $perPage = max(1, (int) ($request->get('limit', 10)));
        $page = max(1, (int) ($request->get('page', 1)));
        $offset = ($page - 1) * $perPage;
        $sortField = $request->get('SortField', 'value_sum');
        $sortType = strtolower($request->get('SortType', 'desc')) === 'asc' ? 'asc' : 'desc';
        $sortable = ['supplier', 'orders_count', 'qty_sum', 'value_sum', 'avg_value'];

        $tableTotal = (clone $base)->count();

        $rows = (clone $base)
            ->orderBy(in_array($sortField, $sortable, true) ? $sortField : 'value_sum', $sortType)
            ->offset($offset)->limit($perPage)
            ->get()
            ->map(function ($r) {
                return [
                    'supplier_id' => (int) $r->supplier_id,
                    'supplier' => $r->supplier,
                    'orders_count' => (int) $r->orders_count,
                    'qty_sum' => (float) $r->qty_sum,
                    'value_sum' => (float) $r->value_sum,
                    'avg_value' => (float) $r->avg_value,
                ];
            });

        return response()->json([
            'data' => [
                'kpis' => $kpis,
                'topByValue' => $topByValue,
                'topByQty' => $topByQty,
                'rows' => $rows,
                'totalRows' => $tableTotal,
                'range' => ['from' => $start->toDateString(), 'to' => $end->toDateString()],
            ],
            'warehouses' => $warehouses,
        ]);
    }
}
