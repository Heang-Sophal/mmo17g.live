<?php

namespace App\Http\Controllers;

use App\Models\Expense;
use App\Models\PaymentPurchase;
use App\Models\PaymentPurchaseReturns;
use App\Models\PaymentSale;
use App\Models\PaymentSaleReturns;
use App\Models\Product;
use App\Models\product_warehouse;
use App\Models\Purchase;
use App\Models\PurchaseReturn;
use App\Models\Role;
use App\Models\Sale;
use App\Models\SaleDetail;
use App\Models\SaleReturn;
use App\Models\UserWarehouse;
use App\Models\Warehouse;
use App\Traits\CalculatesCogsAndAverageCost;
use Carbon\Carbon;
use DB;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class DashboardController extends Controller
{
    use CalculatesCogsAndAverageCost;
    // ----------------- dashboard_data -----------------------\\

    public function dashboard_data(Request $request)
    {
        $user_auth = auth()->user();
        if ($user_auth->is_all_warehouses) {
            $array_warehouses_id = Warehouse::where('deleted_at', '=', null)->pluck('id')->toArray();
            $warehouses = Warehouse::where('deleted_at', '=', null)->get(['id', 'name']);
        } else {
            $array_warehouses_id = UserWarehouse::where('user_id', $user_auth->id)->pluck('warehouse_id')->toArray();
            $warehouses = Warehouse::where('deleted_at', '=', null)->whereIn('id', $array_warehouses_id)->get(['id', 'name']);
        }

        if (empty($request->warehouse_id)) {
            $warehouse_id = 0;
        } else {
            $warehouse_id = $request->warehouse_id;
        }

        // Sales & Purchases chart: use header date range + warehouse filter
        $dataSales = $this->SalesChart($warehouse_id, $array_warehouses_id, $request->from, $request->to);
        $datapurchases = $this->PurchasesChart($warehouse_id, $array_warehouses_id, $request->from, $request->to);

        // Payment Sent & Received chart: also use header date range + warehouse filter
        $Payment_chart = $this->Payment_chart($warehouse_id, $array_warehouses_id, $request->from, $request->to);
        $TopCustomers = $this->TopCustomers($warehouse_id, $array_warehouses_id);
        $Top_Products_Year = $this->Top_Products_Year($warehouse_id, $array_warehouses_id);
        
        // Stat cards and Sales by Payment: Use date range + warehouse filter
        $report_dashboard = $this->report_dashboard($request, $warehouse_id, $array_warehouses_id);
        $sales_by_payment = $this->SalesByPayment($warehouse_id, $array_warehouses_id, $request->from, $request->to);
        
        // Stock Value: Only warehouse filter (no date range)
        $stock_value = $this->StockValue($warehouse_id, $array_warehouses_id);

        return response()->json([
            'warehouses' => $warehouses,
            'sales' => $dataSales,
            'purchases' => $datapurchases,
            'payments' => $Payment_chart,
            'customers' => $TopCustomers,
            'product_report' => $Top_Products_Year,
            'report_dashboard' => $report_dashboard,
            'sales_by_payment' => $sales_by_payment,
            'stock_value' => $stock_value,
        ]);

    }

    // ----------------- Sales Chart js -----------------------\\

    public function SalesChart($warehouse_id, $array_warehouses_id, $from = null, $to = null)
    {
        $user = Auth::user();
        // New way: Check user's record_view field (user-level boolean)
        // Backward compatibility: If record_view is null, fall back to role permission check
        $view_records = $user->hasRecordView();

        // Determine date window: either custom [from, to] or default last 7 days
        if (! empty($from) && ! empty($to)) {
            $start = Carbon::parse($from)->startOfDay();
            $end = Carbon::parse($to)->endOfDay();
        } else {
            $end = Carbon::today()->endOfDay();
            $start = $end->copy()->subDays(6)->startOfDay();
        }

        // Build an array of the dates we want to show, oldest first
        $dates = collect();
        $cursor = $start->copy();
        while ($cursor->lte($end)) {
            $date = $cursor->format('Y-m-d');
            $dates->put($date, 0);
            $cursor->addDay();
        }

        // Get the sales counts within the same window used for the dashboard filter
        $sales = Sale::whereBetween('date', [$start->toDateString(), $end->toDateString()])
            ->where('deleted_at', '=', null)
            ->where(function ($query) use ($view_records) {
                if (! $view_records) {
                    return $query->where('user_id', '=', Auth::user()->id);
                }
            })
            ->where(function ($query) use ($warehouse_id, $array_warehouses_id) {
                if ($warehouse_id !== 0) {
                    return $query->where('warehouse_id', $warehouse_id);
                } else {
                    return $query->whereIn('warehouse_id', $array_warehouses_id);
                }
            })
            ->groupBy(DB::raw("DATE_FORMAT(date,'%Y-%m-%d')"))
            ->orderBy('date', 'asc')
            ->get([
                DB::raw(DB::raw("DATE_FORMAT(date,'%Y-%m-%d') as date")),
                DB::raw('SUM(GrandTotal) AS count'),
            ])
            ->pluck('count', 'date');

        // Merge the two collections;
        $dates = $dates->merge($sales);

        $data = [];
        $days = [];
        foreach ($dates as $key => $value) {
            $data[] = $value;
            $days[] = $key;
        }

        return response()->json(['data' => $data, 'days' => $days]);

    }

    // ----------------- Purchases Chart -----------------------\\

    public function PurchasesChart($warehouse_id, $array_warehouses_id, $from = null, $to = null)
    {

        $user = Auth::user();
        // New way: Check user's record_view field (user-level boolean)
        // Backward compatibility: If record_view is null, fall back to role permission check
        $view_records = $user->hasRecordView();

        // Determine date window: either custom [from, to] or default last 7 days
        if (! empty($from) && ! empty($to)) {
            $start = Carbon::parse($from)->startOfDay();
            $end = Carbon::parse($to)->endOfDay();
        } else {
            $end = Carbon::today()->endOfDay();
            $start = $end->copy()->subDays(6)->startOfDay();
        }

        // Build an array of the dates we want to show, oldest first
        $dates = collect();
        $cursor = $start->copy();
        while ($cursor->lte($end)) {
            $date = $cursor->format('Y-m-d');
            $dates->put($date, 0);
            $cursor->addDay();
        }

        // Get the purchases counts within the same window used for the dashboard filter
        $purchases = Purchase::whereBetween('date', [$start->toDateString(), $end->toDateString()])
            ->where('deleted_at', '=', null)
            ->where(function ($query) use ($view_records) {
                if (! $view_records) {
                    return $query->where('user_id', '=', Auth::user()->id);
                }
            })
            ->where(function ($query) use ($warehouse_id, $array_warehouses_id) {
                if ($warehouse_id !== 0) {
                    return $query->where('warehouse_id', $warehouse_id);
                } else {
                    return $query->whereIn('warehouse_id', $array_warehouses_id);
                }
            })
            ->groupBy(DB::raw("DATE_FORMAT(date,'%Y-%m-%d')"))
            ->orderBy('date', 'asc')
            ->get([
                DB::raw(DB::raw("DATE_FORMAT(date,'%Y-%m-%d') as date")),
                DB::raw('SUM(GrandTotal) AS count'),
            ])
            ->pluck('count', 'date');

        // Merge the two collections;
        $dates = $dates->merge($purchases);

        $data = [];
        $days = [];
        foreach ($dates as $key => $value) {
            $data[] = $value;
            $days[] = $key;
        }

        return response()->json(['data' => $data, 'days' => $days]);

    }

    // -------------------- Get Top 5 Customers -------------\\

    public function TopCustomers($warehouse_id, $array_warehouses_id)
    {
        $user = Auth::user();
        // New way: Check user's record_view field (user-level boolean)
        // Backward compatibility: If record_view is null, fall back to role permission check
        $view_records = $user->hasRecordView();

        $data = Sale::whereBetween('date', [
            Carbon::now()->startOfMonth(),
            Carbon::now()->endOfMonth(),
        ])->where('sales.deleted_at', '=', null)
            ->where(function ($query) use ($view_records) {
                if (! $view_records) {
                    return $query->where('sales.user_id', '=', Auth::user()->id);
                }
            })

            ->where(function ($query) use ($warehouse_id, $array_warehouses_id) {
                if ($warehouse_id !== 0) {
                    return $query->where('sales.warehouse_id', $warehouse_id);
                } else {
                    return $query->whereIn('sales.warehouse_id', $array_warehouses_id);
                }
            })

            ->join('clients', 'sales.client_id', '=', 'clients.id')
            ->select(DB::raw('clients.name'), DB::raw('count(*) as value'))
            ->groupBy('clients.name')
            ->orderBy('value', 'desc')
            ->take(5)
            ->get();

        return response()->json($data);
    }

    // -------------------- Get Top 5 Products This YEAR -------------\\

    public function Top_Products_Year($warehouse_id, $array_warehouses_id)
    {

        $user = Auth::user();
        // New way: Check user's record_view field (user-level boolean)
        // Backward compatibility: If record_view is null, fall back to role permission check
        $view_records = $user->hasRecordView();

        $products = SaleDetail::join('sales', 'sale_details.sale_id', '=', 'sales.id')
            ->join('products', 'sale_details.product_id', '=', 'products.id')
            ->whereBetween('sale_details.date', [
                Carbon::now()->startOfYear(),
                Carbon::now()->endOfYear(),
            ])
            ->where(function ($query) use ($view_records) {
                if (! $view_records) {
                    return $query->where('sales.user_id', '=', Auth::user()->id);
                }
            })

            ->where(function ($query) use ($warehouse_id, $array_warehouses_id) {
                if ($warehouse_id !== 0) {
                    return $query->where('sales.warehouse_id', $warehouse_id);
                } else {
                    return $query->whereIn('sales.warehouse_id', $array_warehouses_id);
                }
            })
            ->select(
                DB::raw('products.name as name'),
                DB::raw('count(*) as value'),
            )
            ->groupBy('products.name')
            ->orderBy('value', 'desc')
            ->take(5)
            ->get();

        return response()->json($products);
    }

    // -------------------- General Report dashboard -------------\\

    public function report_dashboard($request, $warehouse_id, $array_warehouses_id)
    {

        $user = Auth::user();
        // New way: Check user's record_view field (user-level boolean)
        // Backward compatibility: If record_view is null, fall back to role permission check
        $view_records = $user->hasRecordView();

        // top selling product this month
        $products = SaleDetail::join('sales', 'sale_details.sale_id', '=', 'sales.id')
            ->join('products', 'sale_details.product_id', '=', 'products.id')
            ->whereBetween('sale_details.date', [
                Carbon::now()->startOfMonth(),
                Carbon::now()->endOfMonth(),
            ])
            ->where(function ($query) use ($view_records) {
                if (! $view_records) {
                    return $query->where('sales.user_id', '=', Auth::user()->id);
                }
            })
            ->where(function ($query) use ($warehouse_id, $array_warehouses_id) {
                if ($warehouse_id !== 0) {
                    return $query->where('sales.warehouse_id', $warehouse_id);
                } else {
                    return $query->whereIn('sales.warehouse_id', $array_warehouses_id);
                }
            })
            ->select(
                DB::raw('products.name as name'),
                DB::raw('count(*) as total_sales'),
                DB::raw('sum(total) as total'),
            )
            ->groupBy('products.name')
            ->orderBy('total_sales', 'desc')
            ->take(5)
            ->get();

        // Stock Alerts
        $product_warehouse_data = product_warehouse::with('warehouse', 'product', 'productVariant')
            ->join('products', 'product_warehouse.product_id', '=', 'products.id')
            ->where('manage_stock', true)
            ->whereRaw('qte <= stock_alert')
            ->where('product_warehouse.deleted_at', null)
            ->where(function ($query) use ($warehouse_id, $array_warehouses_id) {
                if ($warehouse_id !== 0) {
                    return $query->where('product_warehouse.warehouse_id', $warehouse_id);
                } else {
                    return $query->whereIn('product_warehouse.warehouse_id', $array_warehouses_id);
                }
            })
            ->take('5')->get();

        $stock_alert = [];
        if ($product_warehouse_data->isNotEmpty()) {

            foreach ($product_warehouse_data as $product_warehouse) {
                if ($product_warehouse->qte <= $product_warehouse['product']->stock_alert) {
                    if ($product_warehouse->product_variant_id !== null) {
                        $item['code'] = $product_warehouse['productVariant']->name.'-'.$product_warehouse['product']->code;
                    } else {
                        $item['code'] = $product_warehouse['product']->code;
                    }
                    $item['quantity'] = $product_warehouse->qte;
                    $item['name'] = $product_warehouse['product']->name;
                    $item['warehouse'] = $product_warehouse['warehouse']->name;
                    $item['stock_alert'] = $product_warehouse['product']->stock_alert;
                    $stock_alert[] = $item;
                }
            }

        }

        // ---------------- sales + payments (for due) -------------

        $salesBase = Sale::where('deleted_at', '=', null)
            ->whereBetween('date', [$request->from, $request->to])
            ->where(function ($query) use ($view_records) {
                if (! $view_records) {
                    return $query->where('user_id', '=', Auth::user()->id);
                }
            })
            ->where(function ($query) use ($warehouse_id, $array_warehouses_id) {
                if ($warehouse_id !== 0) {
                    return $query->where('warehouse_id', $warehouse_id);
                } else {
                    return $query->whereIn('warehouse_id', $array_warehouses_id);
                }
            });

        $salesAgg = (clone $salesBase)
            ->select(
                DB::raw('COALESCE(SUM(GrandTotal),0) AS total'),
                DB::raw('COALESCE(SUM(paid_amount),0) AS paid')
            )
            ->first();

        $today_sales_total = (float) ($salesAgg->total ?? 0);
        $today_sales_paid = (float) ($salesAgg->paid ?? 0);
        $today_sales_due_amount = $today_sales_total - $today_sales_paid;

        /**
         * 🔹 Completed sales only
        */
        $completedSalesTotal = (clone $salesBase)
            ->where('statut', 'completed')
            ->sum('GrandTotal');

        // Return raw numeric values for frontend price formatting
        $data['today_sales'] = $today_sales_total;
        $data['sales_due'] = $today_sales_due_amount;

        // --------------- return_sales

        $return_sales_total = SaleReturn::where('deleted_at', '=', null)
            ->whereBetween('date', [$request->from, $request->to])
            ->where(function ($query) use ($view_records) {
                if (! $view_records) {
                    return $query->where('user_id', '=', Auth::user()->id);
                }
            })
            ->where(function ($query) use ($warehouse_id, $array_warehouses_id) {
                if ($warehouse_id !== 0) {
                    return $query->where('warehouse_id', $warehouse_id);
                } else {
                    return $query->whereIn('warehouse_id', $array_warehouses_id);
                }
            })
            ->sum('GrandTotal');

        // Return raw numeric value for frontend price formatting
        $data['return_sales'] = (float) $return_sales_total;

        // ------------------- purchases + payments (for due) ------

        $purchasesBase = Purchase::where('deleted_at', '=', null)
            ->whereBetween('date', [$request->from, $request->to])
            ->where(function ($query) use ($view_records) {
                if (! $view_records) {
                    return $query->where('user_id', '=', Auth::user()->id);
                }
            })
            ->where(function ($query) use ($warehouse_id, $array_warehouses_id) {
                if ($warehouse_id !== 0) {
                    return $query->where('warehouse_id', $warehouse_id);
                } else {
                    return $query->whereIn('warehouse_id', $array_warehouses_id);
                }
            });

        $purchasesAgg = (clone $purchasesBase)
            ->select(
                DB::raw('COALESCE(SUM(GrandTotal),0) AS total'),
                DB::raw('COALESCE(SUM(paid_amount),0) AS paid')
            )
            ->first();

        $today_purchases_total = (float) ($purchasesAgg->total ?? 0);
        $today_purchases_paid = (float) ($purchasesAgg->paid ?? 0);
        $today_purchases_due_amount = $today_purchases_total - $today_purchases_paid;

        // Return raw numeric values for frontend price formatting
        $data['today_purchases'] = $today_purchases_total;
        $data['purchase_due'] = $today_purchases_due_amount;

        // ------------------------- return_purchases --------------

        $return_purchases_total = PurchaseReturn::where('deleted_at', '=', null)
            ->whereBetween('date', [$request->from, $request->to])
            ->where(function ($query) use ($view_records) {
                if (! $view_records) {
                    return $query->where('user_id', '=', Auth::user()->id);
                }
            })
            ->where(function ($query) use ($warehouse_id, $array_warehouses_id) {
                if ($warehouse_id !== 0) {
                    return $query->where('warehouse_id', $warehouse_id);
                } else {
                    return $query->whereIn('warehouse_id', $array_warehouses_id);
                }
            })
            ->sum('GrandTotal');

        $data['return_purchases'] = number_format($return_purchases_total, 2, '.', ',');

        // ------------------------- today invoices (count) --------

        $data['today_invoices'] = Sale::where('deleted_at', '=', null)
            ->whereBetween('date', [$request->from, $request->to])
            ->where(function ($query) use ($view_records) {
                if (! $view_records) {
                    return $query->where('user_id', '=', Auth::user()->id);
                }
            })
            ->where(function ($query) use ($warehouse_id, $array_warehouses_id) {
                if ($warehouse_id !== 0) {
                    return $query->where('warehouse_id', $warehouse_id);
                } else {
                    return $query->whereIn('warehouse_id', $array_warehouses_id);
                }
            })
            ->count();

        // ------------------------- today profit (ProfitNet FIFO) ------------------
        // Use same ProfitNet (FIFO) logic as the Profit & Loss report:
        // profit_fifo = salesSum - COGS_FIFO - expenses

        $expenses_total = Expense::where('deleted_at', '=', null)
            ->whereBetween('date', [$request->from, $request->to])
            ->where(function ($query) use ($view_records) {
                if (! $view_records) {
                    return $query->where('user_id', '=', Auth::user()->id);
                }
            })
            ->where(function ($query) use ($warehouse_id, $array_warehouses_id) {
                if ($warehouse_id !== 0) {
                    return $query->where('warehouse_id', $warehouse_id);
                } else {
                    return $query->whereIn('warehouse_id', $array_warehouses_id);
                }
            })
            ->sum('amount');

        // COGS using fast FIFO helper shared with Profit & Loss report
        $cogsPack = $this->calcCogsAndAvgCostFast($request->from, $request->to, (int) $warehouse_id, $array_warehouses_id);
        $cogsFIFO = (float) ($cogsPack['fifo'] ?? 0.0);

        $today_profit_numeric = $completedSalesTotal - $cogsFIFO - $expenses_total;
        // Return raw numeric value for frontend price formatting
        $data['today_profit'] = $today_profit_numeric;

        $last_sales = [];

        // last sales
        $Sales = Sale::with('details', 'client', 'facture', 'warehouse')->where('deleted_at', '=', null)
            ->where(function ($query) use ($view_records) {
                if (! $view_records) {
                    return $query->where('user_id', '=', Auth::user()->id);
                }
            })
            ->where(function ($query) use ($warehouse_id, $array_warehouses_id) {
                if ($warehouse_id !== 0) {
                    return $query->where('warehouse_id', $warehouse_id);
                } else {
                    return $query->whereIn('warehouse_id', $array_warehouses_id);
                }
            })
            ->orderBy('id', 'desc')
            ->take(5)
            ->get();

        foreach ($Sales as $Sale) {

            $item_sale['Ref'] = $Sale['Ref'];
            $item_sale['statut'] = $Sale['statut'];
            $item_sale['client_name'] = $Sale['client']['name'];
            $item_sale['warehouse_name'] = $Sale['warehouse']['name'];
            $item_sale['GrandTotal'] = $Sale['GrandTotal'];
            $item_sale['paid_amount'] = $Sale['paid_amount'];
            $item_sale['due'] = $Sale['GrandTotal'] - $Sale['paid_amount'];
            $item_sale['payment_status'] = $Sale['payment_statut'];

            $last_sales[] = $item_sale;
        }

        return response()->json([
            'products' => $products,
            'stock_alert' => $stock_alert,
            'report' => $data,
            'last_sales' => $last_sales,
        ]);

    }

    // ----------------- Payment Chart js -----------------------\\

    public function Payment_chart($warehouse_id, $array_warehouses_id, $from = null, $to = null)
    {

        $user = Auth::user();
        // New way: Check user's record_view field (user-level boolean)
        // Backward compatibility: If record_view is null, fall back to role permission check
        $view_records = $user->hasRecordView();

        // Determine date window: either custom [from, to] or default last 7 days
        if (! empty($from) && ! empty($to)) {
            $start = Carbon::parse($from)->startOfDay();
            $end = Carbon::parse($to)->endOfDay();
        } else {
            $end = Carbon::today()->endOfDay();
            $start = $end->copy()->subDays(6)->startOfDay();
        }

        // Build an array of the dates we want to show, oldest first
        $dates = collect();
        $cursor = $start->copy();
        while ($cursor->lte($end)) {
            $date = $cursor->format('Y-m-d');
            $dates->put($date, 0);
            $cursor->addDay();
        }

        // Get the sales counts
        $Payment_Sale = PaymentSale::with('sale')
            ->whereBetween('date', [$start->toDateString(), $end->toDateString()])
            ->where(function ($query) use ($view_records) {
                if (! $view_records) {
                    return $query->where('user_id', '=', Auth::user()->id);
                }
            })
            ->where(function ($query) use ($warehouse_id, $array_warehouses_id) {
                if ($warehouse_id !== 0) {
                    return $query->whereHas('sale', function ($q) use ($warehouse_id) {
                        $q->where('warehouse_id', $warehouse_id);
                    });
                } else {
                    return $query->whereHas('sale', function ($q) use ($array_warehouses_id) {
                        $q->whereIn('warehouse_id', $array_warehouses_id);
                    });

                }
            })
            ->groupBy(DB::raw("DATE_FORMAT(date,'%Y-%m-%d')"))
            ->orderBy('date', 'asc')
            ->get([
                DB::raw(DB::raw("DATE_FORMAT(date,'%Y-%m-%d') as date")),
                DB::raw('SUM(montant) AS count'),
            ])
            ->pluck('count', 'date');

        $Payment_Sale_Returns = PaymentSaleReturns::with('SaleReturn')
            ->whereBetween('date', [$start->toDateString(), $end->toDateString()])
            ->where(function ($query) use ($view_records) {
                if (! $view_records) {
                    return $query->where('user_id', '=', Auth::user()->id);
                }
            })
            ->where(function ($query) use ($warehouse_id, $array_warehouses_id) {
                if ($warehouse_id !== 0) {
                    return $query->whereHas('SaleReturn', function ($q) use ($warehouse_id) {
                        $q->where('warehouse_id', $warehouse_id);
                    });
                } else {
                    return $query->whereHas('SaleReturn', function ($q) use ($array_warehouses_id) {
                        $q->whereIn('warehouse_id', $array_warehouses_id);
                    });

                }
            })
            ->groupBy(DB::raw("DATE_FORMAT(date,'%Y-%m-%d')"))
            ->orderBy('date', 'asc')
            ->get([
                DB::raw(DB::raw("DATE_FORMAT(date,'%Y-%m-%d') as date")),
                DB::raw('SUM(montant) AS count'),
            ])
            ->pluck('count', 'date');

        $Payment_Purchases = PaymentPurchase::with('purchase')
            ->whereBetween('date', [$start->toDateString(), $end->toDateString()])
            ->where(function ($query) use ($view_records) {
                if (! $view_records) {
                    return $query->where('user_id', '=', Auth::user()->id);
                }
            })
            ->where(function ($query) use ($warehouse_id, $array_warehouses_id) {
                if ($warehouse_id !== 0) {
                    return $query->whereHas('purchase', function ($q) use ($warehouse_id) {
                        $q->where('warehouse_id', $warehouse_id);
                    });
                } else {
                    return $query->whereHas('purchase', function ($q) use ($array_warehouses_id) {
                        $q->whereIn('warehouse_id', $array_warehouses_id);
                    });

                }
            })
            ->groupBy(DB::raw("DATE_FORMAT(date,'%Y-%m-%d')"))
            ->orderBy('date', 'asc')
            ->get([
                DB::raw(DB::raw("DATE_FORMAT(date,'%Y-%m-%d') as date")),
                DB::raw('SUM(montant) AS count'),
            ])
            ->pluck('count', 'date');

        $Payment_Purchase_Returns = PaymentPurchaseReturns::with('PurchaseReturn')
            ->whereBetween('date', [$start->toDateString(), $end->toDateString()])
            ->where(function ($query) use ($view_records) {
                if (! $view_records) {
                    return $query->where('user_id', '=', Auth::user()->id);
                }
            })
            ->where(function ($query) use ($warehouse_id, $array_warehouses_id) {
                if ($warehouse_id !== 0) {
                    return $query->whereHas('PurchaseReturn', function ($q) use ($warehouse_id) {
                        $q->where('warehouse_id', $warehouse_id);
                    });
                } else {
                    return $query->whereHas('PurchaseReturn', function ($q) use ($array_warehouses_id) {
                        $q->whereIn('warehouse_id', $array_warehouses_id);
                    });

                }
            })
            ->groupBy(DB::raw("DATE_FORMAT(date,'%Y-%m-%d')"))
            ->orderBy('date', 'asc')
            ->get([
                DB::raw(DB::raw("DATE_FORMAT(date,'%Y-%m-%d') as date")),
                DB::raw('SUM(montant) AS count'),
            ])
            ->pluck('count', 'date');

        $Payment_Expense = Expense::whereBetween('date', [$start->toDateString(), $end->toDateString()])
            ->where(function ($query) use ($view_records) {
                if (! $view_records) {
                    return $query->where('user_id', '=', Auth::user()->id);
                }
            })
            ->where(function ($query) use ($warehouse_id, $array_warehouses_id) {
                if ($warehouse_id !== 0) {
                    return $query->where('warehouse_id', $warehouse_id);
                } else {
                    return $query->whereIn('warehouse_id', $array_warehouses_id);
                }
            })
            ->groupBy(DB::raw("DATE_FORMAT(date,'%Y-%m-%d')"))
            ->orderBy('date', 'asc')
            ->get([
                DB::raw(DB::raw("DATE_FORMAT(date,'%Y-%m-%d') as date")),
                DB::raw('SUM(amount) AS count'),
            ])
            ->pluck('count', 'date');

        $paymen_recieved = $this->array_merge_numeric_values($Payment_Sale, $Payment_Purchase_Returns);
        $payment_sent = $this->array_merge_numeric_values($Payment_Purchases, $Payment_Sale_Returns, $Payment_Expense);

        $dates_recieved = $dates->merge($paymen_recieved);
        $dates_sent = $dates->merge($payment_sent);

        $data_recieved = [];
        $data_sent = [];
        $days = [];
        foreach ($dates_recieved as $key => $value) {
            $data_recieved[] = $value;
            $days[] = $key;
        }

        foreach ($dates_sent as $key => $value) {
            $data_sent[] = $value;
        }

        return response()->json([
            'payment_sent' => $data_sent,
            'payment_received' => $data_recieved,
            'days' => $days,
        ]);

    }

    // ----------------- array merge -----------------------\\

    public function array_merge_numeric_values()
    {
        $arrays = func_get_args();
        $merged = [];
        foreach ($arrays as $array) {
            foreach ($array as $key => $value) {
                if (! is_numeric($value)) {
                    continue;
                }
                if (! isset($merged[$key])) {
                    $merged[$key] = $value;
                } else {
                    $merged[$key] += $value;
                }
            }
        }

        return $merged;
    }

    // ----------------- Sales by Payment -----------------------\\
    //
    // Return ALL payment methods with their sales amounts and percentages
    // for the selected date range + warehouse filter.
    public function SalesByPayment($warehouse_id, $array_warehouses_id, $from = null, $to = null)
    {
        $user = Auth::user();
        $view_records = $user->hasRecordView();

        // Determine date window: either custom [from, to] or default last 7 days
        if (! empty($from) && ! empty($to)) {
            $start = Carbon::parse($from)->startOfDay();
            $end = Carbon::parse($to)->endOfDay();
        } else {
            $end = Carbon::today()->endOfDay();
            $start = $end->copy()->subDays(6)->startOfDay();
        }

        // Fetch all active payment methods (we will show every one of them)
        $paymentMethods = \App\Models\PaymentMethod::where('deleted_at', '=', null)
            ->get(['id', 'name']);

        // Base result keyed by payment_method_id so that every method is present,
        // even if it has 0 sales in the selected period.
        $result = [];
        foreach ($paymentMethods as $pm) {
            $result[$pm->id] = [
                'name'   => $pm->name,
                'amount' => 0.0,
            ];
        }

        // Get sales payments grouped by payment method
        $payments = PaymentSale::with('sale', 'payment_method')
            ->whereBetween('date', [$start->toDateString(), $end->toDateString()])
            ->where(function ($query) use ($view_records) {
                if (! $view_records) {
                    return $query->where('user_id', '=', Auth::user()->id);
                }
            })
            ->where(function ($query) use ($warehouse_id, $array_warehouses_id) {
                if ($warehouse_id !== 0) {
                    return $query->whereHas('sale', function ($q) use ($warehouse_id) {
                        $q->where('warehouse_id', $warehouse_id)
                          ->where('deleted_at', '=', null);
                    });
                } else {
                    return $query->whereHas('sale', function ($q) use ($array_warehouses_id) {
                        $q->whereIn('warehouse_id', $array_warehouses_id)
                          ->where('deleted_at', '=', null);
                    });
                }
            })
            ->whereNotNull('payment_method_id')
            ->select(
                'payment_method_id',
                DB::raw('SUM(montant) as amount')
            )
            ->groupBy('payment_method_id')
            ->get();

        // Aggregate amounts per payment method id
        foreach ($payments as $payment) {
            $id = $payment->payment_method_id;
            if (isset($result[$id])) {
                $result[$id]['amount'] += (float) $payment->amount;
            }
        }

        // Calculate grand total to derive percentages
        $total = 0.0;
        foreach ($result as $entry) {
            $total += (float) $entry['amount'];
        }

        // Assign colors in a simple repeating palette so the existing
        // frontend CSS dot/progress classes continue to work.
        $colorPalette = ['orange', 'blue', 'green', 'grey'];
        $formattedResult = [];
        $index = 0;

        foreach ($result as $entry) {
            $amount = (float) $entry['amount'];
            $percentage = $total > 0 ? round(($amount / $total) * 100, 0) : 0;
            $color = $colorPalette[$index % count($colorPalette)];

            $formattedResult[] = [
                'name'       => $entry['name'],
                'amount'     => $amount,
                'percentage' => (int) $percentage,
                'color'      => $color,
            ];

            $index++;
        }

        return $formattedResult;
    }

    // ----------------- Stock Value -----------------------\\

    public function StockValue($warehouse_id, $array_warehouses_id)
    {
        $user = Auth::user();
        $view_records = $user->hasRecordView();

        // Build warehouse filter
        $warehouseFilter = function ($query) use ($warehouse_id, $array_warehouses_id) {
            if ($warehouse_id !== 0) {
                return $query->where('product_warehouse.warehouse_id', $warehouse_id);
            } else {
                return $query->whereIn('product_warehouse.warehouse_id', $array_warehouses_id);
            }
        };

        // Calculate stock value by cost
        $stockByCost = product_warehouse::join('products', 'product_warehouse.product_id', '=', 'products.id')
            ->leftJoin('product_variants', function ($join) {
                $join->on('product_warehouse.product_variant_id', '=', 'product_variants.id')
                     ->where('products.is_variant', '=', 1);
            })
            ->where('product_warehouse.deleted_at', '=', null)
            ->where('products.deleted_at', '=', null)
            ->where('product_warehouse.qte', '>', 0)
            ->where(function ($query) use ($warehouseFilter) {
                $warehouseFilter($query);
            })
            ->select(DB::raw('SUM(
                CASE 
                    WHEN products.is_variant = 1 AND product_variants.id IS NOT NULL 
                    THEN product_warehouse.qte * COALESCE(product_variants.cost, 0)
                    ELSE product_warehouse.qte * COALESCE(products.cost, 0)
                END
            ) as total_value'))
            ->first();

        // Calculate stock value by retail (price)
        $stockByRetail = product_warehouse::join('products', 'product_warehouse.product_id', '=', 'products.id')
            ->leftJoin('product_variants', function ($join) {
                $join->on('product_warehouse.product_variant_id', '=', 'product_variants.id')
                     ->where('products.is_variant', '=', 1);
            })
            ->where('product_warehouse.deleted_at', '=', null)
            ->where('products.deleted_at', '=', null)
            ->where('product_warehouse.qte', '>', 0)
            ->where(function ($query) use ($warehouseFilter) {
                $warehouseFilter($query);
            })
            ->select(DB::raw('SUM(
                CASE 
                    WHEN products.is_variant = 1 AND product_variants.id IS NOT NULL 
                    THEN product_warehouse.qte * COALESCE(product_variants.price, 0)
                    ELSE product_warehouse.qte * COALESCE(products.price, 0)
                END
            ) as total_value'))
            ->first();

        // Calculate stock value by wholesale
        $stockByWholesale = product_warehouse::join('products', 'product_warehouse.product_id', '=', 'products.id')
            ->leftJoin('product_variants', function ($join) {
                $join->on('product_warehouse.product_variant_id', '=', 'product_variants.id')
                     ->where('products.is_variant', '=', 1);
            })
            ->where('product_warehouse.deleted_at', '=', null)
            ->where('products.deleted_at', '=', null)
            ->where('product_warehouse.qte', '>', 0)
            ->where(function ($query) use ($warehouseFilter) {
                $warehouseFilter($query);
            })
            ->select(DB::raw('SUM(
                CASE 
                    WHEN products.is_variant = 1 AND product_variants.id IS NOT NULL 
                    THEN product_warehouse.qte * COALESCE(product_variants.wholesale, product_variants.price, 0)
                    ELSE product_warehouse.qte * COALESCE(products.wholesale_price, products.price, 0)
                END
            ) as total_value'))
            ->first();

        return [
            'by_cost' => (float) ($stockByCost->total_value ?? 0),
            'by_retail' => (float) ($stockByRetail->total_value ?? 0),
            'by_wholesale' => (float) ($stockByWholesale->total_value ?? 0),
        ];
    }
}

