<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Client;
use App\Models\PaymentSale;
use App\Models\Product;
use App\Models\Sale;
use Illuminate\Http\JsonResponse;
use Illuminate\Support\Facades\DB;

class DashboardApiController extends Controller
{
    /**
     * ទាញទិន្នន័យ Dashboard សម្រាប់ Seller App
     * GET /api/dashboard/seller
     */
    public function sellerDashboard(): JsonResponse
    {
        try {
            $today = now()->startOfDay();
            $thisWeek = now()->startOfWeek();
            $thisMonth = now()->startOfMonth();

            // ស្ថិតិលក់
            $totalSales = Sale::where('statut', '!=', 'cancelled')->sum('GrandTotal');
            $totalOrders = Sale::count();
            $pendingOrders = Sale::where('statut', 'pending')->count();
            $completedOrders = Sale::where('statut', 'completed')->count();

            // លក់ថ្ងៃនេះ
            $todaySales = Sale::where('statut', '!=', 'cancelled')
                ->where('created_at', '>=', $today)
                ->sum('GrandTotal');
            $todayOrders = Sale::where('created_at', '>=', $today)->count();

            // ផលិតផល
            $totalProducts = Product::where('is_active', 1)->count();

            // ទាញទិន្នន័យ low stock ពី product_warehouse
            $lowStockProducts = \DB::table('products')
                ->join('product_warehouse', 'products.id', '=', 'product_warehouse.product_id')
                ->where('products.is_active', 1)
                ->whereColumn('product_warehouse.qte', '<=', 'products.stock_alert')
                ->count();

            $outOfStockProducts = \DB::table('products')
                ->join('product_warehouse', 'products.id', '=', 'product_warehouse.product_id')
                ->where('products.is_active', 1)
                ->where('product_warehouse.qte', 0)
                ->count();

            // អតិថិជន
            $totalCustomers = Client::count();

            // ការទូទាត់ថ្ងៃនេះ
            $todayPayments = PaymentSale::where('date', '>=', $today)->sum('montant');

            // លក់ល្អបំផុត (Top Products)
            $topProducts = DB::table('sale_details')
                ->join('sales', 'sale_details.sale_id', '=', 'sales.id')
                ->join('products', 'sale_details.product_id', '=', 'products.id')
                ->where('sales.statut', '!=', 'cancelled')
                ->select('sale_details.product_id', 'products.name as product_name', DB::raw('SUM(sale_details.quantity) as total_quantity'))
                ->groupBy('sale_details.product_id', 'products.name')
                ->orderBy('total_quantity', 'desc')
                ->limit(5)
                ->get();

            // លក់ចុងក្រោយ (Recent Orders)
            $recentOrders = Sale::with(['client', 'details'])
                ->orderBy('created_at', 'desc')
                ->limit(10)
                ->get()
                ->map(function ($sale) {
                    return [
                        'id' => $sale->id,
                        'reference' => $sale->Ref,
                        'customer_name' => $sale->client?->name ?? 'Walk-in Customer',
                        'total_amount' => (float) $sale->GrandTotal,
                        'status' => $sale->statut,
                        'created_at' => $sale->created_at->toIso8601String(),
                    ];
                });

            return response()->json([
                'success' => true,
                'data' => [
                    'sales' => [
                        'total' => (float) $totalSales,
                        'today' => (float) $todaySales,
                        'week' => (float) Sale::where('statut', '!=', 'cancelled')
                            ->where('created_at', '>=', $thisWeek)
                            ->sum('GrandTotal'),
                        'month' => (float) Sale::where('statut', '!=', 'cancelled')
                            ->where('created_at', '>=', $thisMonth)
                            ->sum('GrandTotal'),
                    ],
                    'orders' => [
                        'total' => (int) $totalOrders,
                        'today' => (int) $todayOrders,
                        'pending' => (int) $pendingOrders,
                        'completed' => (int) $completedOrders,
                    ],
                    'products' => [
                        'total' => (int) $totalProducts,
                        'low_stock' => (int) $lowStockProducts,
                        'out_of_stock' => (int) $outOfStockProducts,
                    ],
                    'customers' => [
                        'total' => (int) $totalCustomers,
                    ],
                    'payments' => [
                        'today' => (float) $todayPayments,
                    ],
                    'top_products' => $topProducts,
                    'recent_orders' => $recentOrders,
                ],
            ]);
        } catch (\Exception $e) {
            return response()->json([
                'success' => false,
                'message' => 'Failed to load dashboard data',
                'error' => $e->getMessage(),
            ], 500);
        }
    }

    /**
     * ទាញទិន្នន័យស្ថិតិសម្រាប់ Chart
     * GET /api/dashboard/chart-data
     */
    public function chartData(Request $request): JsonResponse
    {
        try {
            $period = $request->get('period', 'week'); // day, week, month, year
            $endDate = now();

            switch ($period) {
                case 'day':
                    $startDate = now()->subDay();
                    $format = 'H:00';
                    break;
                case 'week':
                    $startDate = now()->subWeek();
                    $format = 'D';
                    break;
                case 'month':
                    $startDate = now()->subMonth();
                    $format = 'M d';
                    break;
                default:
                    $startDate = now()->subYear();
                    $format = 'M';
            }

            $salesData = Sale::where('statut', '!=', 'cancelled')
                ->whereBetween('created_at', [$startDate, $endDate])
                ->selectRaw("DATE_FORMAT(created_at, '%Y-%m-%d %H:00') as date, SUM(GrandTotal) as total, COUNT(*) as count")
                ->groupBy('date')
                ->orderBy('date')
                ->get();

            return response()->json([
                'success' => true,
                'data' => $salesData->map(function ($item) {
                    return [
                        'date' => $item->date,
                        'sales' => (float) $item->total,
                        'orders' => (int) $item->count,
                    ];
                }),
            ]);
        } catch (\Exception $e) {
            return response()->json([
                'success' => false,
                'message' => 'Failed to load chart data',
                'error' => $e->getMessage(),
            ], 500);
        }
    }
}
