<template>
  <div class="main-content">
    <breadcumb :page="reportLabel('SellerReport_Title')" :folder="$t('Reports')"/>

    <div v-if="isLoading" class="loading_page spinner spinner-primary mr-3"></div>
      <b-col md="12" class="text-center" v-if="!isLoading">
        <date-range-picker
          v-model="dateRange"
          :startDate="startDate"
          :endDate="endDate"
           @update="Submit_filter_dateRange"
          :locale-data="locale" >

          <template v-slot:input="picker" style="min-width: 350px;">
              {{ fmt(picker.startDate) }} - {{ fmt(picker.endDate) }}
          </template>
        </date-range-picker>
      </b-col>

    <b-card class="wrapper print-table-only" v-if="!isLoading">
      <vue-good-table
        mode="remote"
        :columns="columns"
        :totalRows="totalRows"
        :rows="rows"
        :group-options="{
          enabled: true,
          headerPosition: 'bottom',
        }"
        @on-page-change="onPageChange"
        @on-per-page-change="onPerPageChange"
        @on-sort-change="onSortChange"
        @on-search="onSearch"
        :search-options="{
        placeholder: $t('Search_this_table'),
        enabled: true,
      }"
        :pagination-options="tablePaginationOptions"
        :styleClass="'mt-5 order-table vgt-table'"
      >
        <div slot="table-actions" class="mt-2 mb-3">
          <b-button variant="outline-info ripple m-1" size="sm" v-b-toggle.sidebar-right>
            <i class="i-Filter-2"></i>
            {{ $t("Filter") }}
          </b-button>
          <b-button @click="printTableOnly()" size="sm" variant="outline-secondary ripple m-1">
            <i class="i-Printer"></i> {{ $t("print") }}
          </b-button>
          <b-button @click="Sales_PDF()" :disabled="isExportingPdf" size="sm" variant="outline-success ripple m-1">
            <i class="i-File-Copy"></i> {{ isExportingPdf ? reportLabel('SellerReport_ExportingPdf') : 'PDF' }}
          </b-button>
           <vue-excel-xlsx
              class="btn btn-sm btn-outline-danger ripple m-1"
              :data="excelData"
              :columns="columns"
              :file-name="'sales_by_seller_report'"
              :file-type="'xlsx'"
              :sheet-name="'sales_by_seller_report'"
              >
              <i class="i-File-Excel"></i> EXCEL
          </vue-excel-xlsx>
        </div>

        <template slot="table-row" slot-scope="props">
          <span v-if="props.column.field == 'date'">
            {{ formatDisplayDate(props.row.date) }}
          </span>
          <span v-else-if="props.column.field == 'datetime'">
            {{ props.row.datetime }}
          </span>
          <span v-else-if="props.column.field == 'GrandTotal'">
            {{ formatPriceWithSymbol(currentUser && currentUser.currency, props.row.GrandTotal, 2) }}
          </span>
          <span v-else-if="props.column.field == 'product_cost'">
            {{ formatPriceWithSymbol(currentUser && currentUser.currency, props.row.product_cost, 2) }}
          </span>
          <span v-else-if="props.column.field == 'paid_amount'">
            {{ formatPriceWithSymbol(currentUser && currentUser.currency, props.row.paid_amount, 2) }}
          </span>
          <span v-else-if="props.column.field == 'shipping'">
            {{ formatPriceWithSymbol(currentUser && currentUser.currency, props.row.shipping, 2) }}
          </span>
          <span v-else-if="props.column.field == 'payment_method'">
            {{ formatPaymentMethod(props.row.payment_method) }}
          </span>
          <span v-else>
            {{ props.formattedRow[props.column.field] }}
          </span>
        </template>
      </vue-good-table>

      <!-- Profit Summary -->
      <div class="mt-3 p-3" style="background: #f8f9fa; border-radius: 8px;">
        <div class="row">
          <div class="col-md-2 text-center">
            <small class="text-muted">{{ reportLabel('SellerReport_TotalCost') }}</small>
            <h5 class="text-danger mb-0">{{ formatPriceWithSymbol(currentUser && currentUser.currency, footerTotals.totalCost, 2) }}</h5>
          </div>
          <div class="col-md-2 text-center">
            <small class="text-muted">{{ reportLabel('SellerReport_TotalPaidAmount') }}</small>
            <h5 class="text-primary mb-0">{{ formatPriceWithSymbol(currentUser && currentUser.currency, footerTotals.totalPaidAmount, 2) }}</h5>
          </div>
          <div class="col-md-2 text-center">
            <small class="text-muted">{{ reportLabel('SellerReport_TotalShipping') }}</small>
            <h5 class="text-warning mb-0">{{ formatPriceWithSymbol(currentUser && currentUser.currency, footerTotals.totalShipping, 2) }}</h5>
          </div>
          <div class="col-md-2 text-center">
            <small class="text-muted">{{ reportLabel('SellerReport_SaleByCash') }}</small>
            <h5 class="text-success mb-0">{{ formatPriceWithSymbol(currentUser && currentUser.currency, footerTotals.saleByCash, 2) }}</h5>
          </div>
          <div class="col-md-2 text-center">
            <small class="text-muted">{{ reportLabel('SellerReport_SaleByKhqr') }}</small>
            <h5 class="text-info mb-0">{{ formatPriceWithSymbol(currentUser && currentUser.currency, footerTotals.saleByKhqr, 2) }}</h5>
          </div>
          <div class="col-md-2 text-center">
            <small class="text-muted">{{ reportLabel('SellerReport_Profit') }}</small>
            <h5 :class="footerTotals.totalProfit >= 0 ? 'text-success' : 'text-danger'" class="mb-0">
              {{ formatPriceWithSymbol(currentUser && currentUser.currency, Math.abs(footerTotals.totalProfit), 2) }}
              <small v-if="footerTotals.totalProfit < 0">({{ reportLabel('SellerReport_Loss') }})</small>
            </h5>
          </div>
        </div>
        <!-- Cash From/To Boss -->
        <div class="row mt-3">
          <div class="col-12 text-center">
            <div v-if="footerTotals.cashDifference >= 0" style="padding: 12px; border-radius: 8px; background-color: #d4edda; border: 2px solid #28a745;">
              <span style="font-size: 18px; font-weight: bold; color: #0a2e12;">
                {{ reportLabel('SellerReport_CashFromBoss') }}: {{ formatPriceWithSymbol(currentUser && currentUser.currency, footerTotals.cashDifference, 2) }}
              </span>
            </div>
            <div v-else style="padding: 12px; border-radius: 8px; background-color: #f8d7da; border: 2px solid #dc3545;">
              <span style="font-size: 18px; font-weight: bold; color: #3d0c10;">
                {{ reportLabel('SellerReport_CashToBoss') }}: {{ formatPriceWithSymbol(currentUser && currentUser.currency, Math.abs(footerTotals.cashDifference), 2) }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </b-card>

    <!-- Sidebar Filter -->
    <b-sidebar id="sidebar-right" :title="$t('Filter')" bg-variant="white" right shadow>
      <div class="px-3 py-2">
        <b-row>
          <!-- Reference -->
          <b-col md="12">
            <b-form-group :label="$t('Reference')">
              <b-form-input :label="$t('Reference')" :placeholder="$t('Reference')" v-model="Filter_Ref"></b-form-input>
            </b-form-group>
          </b-col>

          <!-- Customer  -->
          <b-col md="12">
            <b-form-group :label="$t('Customer')">
              <v-select
                :reduce="label => label.value"
                :placeholder="$t('Choose_Customer')"
                v-model="Filter_Client"
                :options="customers.map(customers => ({label: customers.name, value: customers.id}))"
              />
            </b-form-group>
          </b-col>

           <!-- Seller  -->
           <b-col md="12">
            <b-form-group :label="reportLabel('SellerReport_Seller')">
              <v-select
                :reduce="label => label.value"
                :placeholder="reportLabel('SellerReport_ChooseSeller')"
                v-model="Filter_seller"
                :options="sellers.map(sellers => ({label: sellers.username, value: sellers.id}))"
              />
            </b-form-group>
          </b-col>

           <!-- warehouse -->
          <b-col md="12">
            <b-form-group :label="$t('warehouse')">
              <v-select
                v-model="Filter_warehouse"
                :reduce="label => label.value"
                :placeholder="$t('Choose_Warehouse')"
                :options="warehouses.map(warehouses => ({label: warehouses.name, value: warehouses.id}))"
              />
            </b-form-group>
          </b-col>

          <!-- Status  -->
          <b-col md="12">
            <b-form-group :label="$t('Status')">
              <select v-model="Filter_status" type="text" class="form-control">
                <option value selected>{{ reportLabel('SellerReport_All') }}</option>
                <option value="completed">{{ reportLabel('SellerReport_Completed') }}</option>
                <option value="pending">{{ reportLabel('SellerReport_Pending') }}</option>
                <option value="ordered">{{ reportLabel('SellerReport_Ordered') }}</option>
              </select>
            </b-form-group>
          </b-col>

          <!-- Payment Status  -->
          <b-col md="12">
            <b-form-group :label="$t('PaymentStatus')">
              <select v-model="Filter_Payment" type="text" class="form-control">
                <option value selected>{{ reportLabel('SellerReport_All') }}</option>
                <option value="paid">{{ reportLabel('SellerReport_Paid') }}</option>
                <option value="partial">{{ reportLabel('SellerReport_Partial') }}</option>
                <option value="unpaid">{{ reportLabel('SellerReport_Unpaid') }}</option>
              </select>
            </b-form-group>
          </b-col>

          <b-col md="6" sm="12">
            <b-button @click="Get_Sales(serverParams.page)" variant="primary ripple m-1" size="sm" block>
              <i class="i-Filter-2"></i>
              {{ $t("Filter") }}
            </b-button>
          </b-col>
          <b-col md="6" sm="12">
            <b-button @click="Reset_Filter()" variant="danger ripple m-1" size="sm" block>
              <i class="i-Power-2"></i>
              {{ $t("Reset") }}
            </b-button>
          </b-col>
        </b-row>
      </div>
    </b-sidebar>
  </div>
</template>

<script>
import NProgress from "nprogress";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import DateRangePicker from 'vue2-daterange-picker'
//you need to import the CSS manually
import 'vue2-daterange-picker/dist/vue2-daterange-picker.css'
import moment from 'moment'
import Util from '../../../../utils'
import { mapGetters } from "vuex";
import {
  formatPriceDisplay as formatPriceDisplayHelper,
  getPriceFormatSetting
} from "../../../../utils/priceFormat";

const SELLER_REPORT_LABELS = {
  en: {
    SellerReport_Title: 'Sales by seller report',
    SellerReport_DateTime: 'Date Time',
    SellerReport_CustomerAddress: 'Customer Address',
    SellerReport_CustomerPhone: 'Customer Phone',
    SellerReport_ProductName: 'Product Name',
    SellerReport_ProductQty: 'Product QTY',
    SellerReport_ProductUnit: 'Product Unit',
    SellerReport_ProductCost: 'Product Cost',
    SellerReport_PaidAmount: 'Paid Amount',
    SellerReport_Shipping: 'Shipping',
    SellerReport_PaymentMethod: 'Payment Method',
    SellerReport_Seller: 'Seller',
    SellerReport_SellerName: 'Seller Name',
    SellerReport_SellerPhone: 'Seller Phone',
    SellerReport_TotalCost: 'Total Cost',
    SellerReport_TotalPaidAmount: 'Total Paid Amount',
    SellerReport_TotalShipping: 'Total Shipping',
    SellerReport_SaleByCash: 'Sale By Cash',
    SellerReport_SaleByKhqr: 'Sale By KHQR',
    SellerReport_Profit: 'Profit',
    SellerReport_Loss: 'Loss',
    SellerReport_CashFromBoss: 'Cash From Boss',
    SellerReport_CashToBoss: 'Cash to Boss',
    SellerReport_ChooseSeller: 'Choose Seller',
    SellerReport_All: 'All',
    SellerReport_Completed: 'Completed',
    SellerReport_Pending: 'Pending',
    SellerReport_Ordered: 'Ordered',
    SellerReport_Paid: 'Paid',
    SellerReport_Partial: 'Partial',
    SellerReport_Unpaid: 'Unpaid',
    SellerReport_RowsPerPage: 'Rows per page',
    SellerReport_Of: 'of',
    SellerReport_Next: 'next',
    SellerReport_Prev: 'prev',
    SellerReport_Total: 'Total',
    SellerReport_Summary: 'Summary',
    SellerReport_Cash: 'Cash',
    SellerReport_Khqr: 'KHQR',
    SellerReport_Apply: 'Apply',
    SellerReport_Cancel: 'Cancel',
    SellerReport_CustomRange: 'Custom Range',
    SellerReport_AllowPopups: 'Please allow popups to print',
    SellerReport_DateRange: 'Date range',
    SellerReport_GeneratedAt: 'Generated at',
    SellerReport_Page: 'Page',
    SellerReport_NoDataToExport: 'No data to export',
    SellerReport_ExportFailed: 'Failed to export PDF',
    SellerReport_ExportingPdf: 'Exporting PDF...',
  },
  kh: {
    SellerReport_Title: 'របាយការណ៍លក់តាមអ្នកលក់',
    SellerReport_DateTime: 'កាលបរិច្ឆេទ និងម៉ោង',
    SellerReport_CustomerAddress: 'ទីតាំងអតិថិជន',
    SellerReport_CustomerPhone: 'លេខទូរស័ព្ទអតិថិជន',
    SellerReport_ProductName: 'ឈ្មោះផលិតផល',
    SellerReport_ProductQty: 'ចំនួនផលិតផល',
    SellerReport_ProductUnit: 'ឯកតាផលិតផល',
    SellerReport_ProductCost: 'ថ្លៃដើមផលិតផល',
    SellerReport_PaidAmount: 'ប្រាក់បានបង់',
    SellerReport_Shipping: 'ថ្លៃដឹកជញ្ជូន',
    SellerReport_PaymentMethod: 'វិធីបង់ប្រាក់',
    SellerReport_Seller: 'អ្នកលក់',
    SellerReport_SellerName: 'ឈ្មោះអ្នកលក់',
    SellerReport_SellerPhone: 'លេខទូរស័ព្ទអ្នកលក់',
    SellerReport_TotalCost: 'សរុបថ្លៃដើម',
    SellerReport_TotalPaidAmount: 'សរុបប្រាក់បានបង់',
    SellerReport_TotalShipping: 'សរុបថ្លៃដឹក',
    SellerReport_SaleByCash: 'លក់ដោយសាច់ប្រាក់',
    SellerReport_SaleByKhqr: 'លក់ដោយ KHQR',
    SellerReport_Profit: 'ប្រាក់ចំណេញ',
    SellerReport_Loss: 'ខាត',
    SellerReport_CashFromBoss: 'ប្រាក់ត្រូវទទួលពីក្រុមហ៊ុន',
    SellerReport_CashToBoss: 'ប្រាក់ត្រូវទូទាត់ឲ្យក្រុមហ៊ុន',
    SellerReport_ChooseSeller: 'ជ្រើសរើសអ្នកលក់',
    SellerReport_All: 'ទាំងអស់',
    SellerReport_Completed: 'បានបញ្ចប់',
    SellerReport_Pending: 'កំពុងរង់ចាំ',
    SellerReport_Ordered: 'បានបញ្ជាទិញ',
    SellerReport_Paid: 'បានបង់',
    SellerReport_Partial: 'បានបង់ខ្លះ',
    SellerReport_Unpaid: 'មិនទាន់បង់',
    SellerReport_RowsPerPage: 'ជួរដេកក្នុងមួយទំព័រ',
    SellerReport_Of: 'នៃ',
    SellerReport_Next: 'បន្ទាប់',
    SellerReport_Prev: 'មុន',
    SellerReport_Total: 'សរុប',
    SellerReport_Summary: 'សង្ខេប',
    SellerReport_Cash: 'សាច់ប្រាក់',
    SellerReport_Khqr: 'KHQR',
    SellerReport_Apply: 'អនុវត្ត',
    SellerReport_Cancel: 'បោះបង់',
    SellerReport_CustomRange: 'ជ្រើសរើសផ្ទាល់',
    SellerReport_AllowPopups: 'សូមអនុញ្ញាត popup ដើម្បីបោះពុម្ព',
    SellerReport_DateRange: 'រយៈពេល',
    SellerReport_GeneratedAt: 'បានបង្កើតនៅ',
    SellerReport_Page: 'ទំព័រ',
    SellerReport_NoDataToExport: 'គ្មានទិន្នន័យសម្រាប់នាំចេញ',
    SellerReport_ExportFailed: 'នាំចេញ PDF បរាជ័យ',
    SellerReport_ExportingPdf: 'កំពុងនាំចេញ PDF...',
  },
};
SELLER_REPORT_LABELS.km = SELLER_REPORT_LABELS.kh;

export default {
  metaInfo() {
    return {
      title: this.reportLabel('SellerReport_Title')
    };
  },
  components: { DateRangePicker },
  data() {
    return {
     startDate: "",
     endDate: "",
     dateRange: {
       startDate: "",
       endDate: ""
     },
      locale:{
          //separator between the two ranges apply
          Label: "",
          cancelLabel: "",
          weekLabel: "W",
          customRangeLabel: "",
          daysOfWeek: moment.weekdaysMin(),
          //array of days - see moment documenations for details
          monthNames: moment.monthsShort(), //array of month names - see moment documenations for details
          firstDay: 1 //ISO first day of week - see moment documenations for details
      },
      isLoading: true,
      isExportingPdf: false,
      serverParams: {
        sort: {
          field: "id",
          type: "desc"
        },
        page: 1,
        perPage: 10
      },
      limit: "10",
      search: "",
      totalRows: "",
      Filter_Client: "",
      Filter_warehouse: "",
      Filter_seller: "",
      Filter_Ref: "",
      Filter_status: "",
      Filter_Payment: "",
      customers: [],
      warehouses: [],
      sellers: [],
      rows: [{
          statut: '',
          children: [

          ],
      },],
      sales: [],
      today_mode: true,
      to: "",
      from: "",
      // Optional price format key for frontend display (loaded from system settings/localStorage)
      price_format_key: null,
      // FIX #4 & #5: Grand totals returned by server (computed over ALL pages, not just current page)
      grandTotals: {
        totalCost: 0,
        totalPaidAmount: 0,
        totalShipping: 0,
        totalProfit: 0,
        saleByCash: 0,
        saleByKhqr: 0,
        cashDifference: 0,
      }
    };
  },

  computed: {
    tablePaginationOptions() {
      return {
        enabled: true,
        mode: 'records',
        nextLabel: this.reportLabel('SellerReport_Next'),
        prevLabel: this.reportLabel('SellerReport_Prev'),
        rowsPerPageLabel: this.reportLabel('SellerReport_RowsPerPage'),
        ofLabel: this.reportLabel('SellerReport_Of'),
        allLabel: this.reportLabel('SellerReport_All'),
      };
    },
    columns() {
      return [
        {
          label: this.reportLabel('SellerReport_DateTime'),
          field: "datetime",
          tdClass: "text-left",
          thClass: "text-left"
        },
        {
          label: this.$t("Reference"),
          field: "Ref",
          tdClass: "text-left",
          thClass: "text-left"
        },
        {
          label: this.$t("warehouse"),
          field: "warehouse_name",
          tdClass: "text-left",
          thClass: "text-left"
        },
        {
          label: this.reportLabel('SellerReport_CustomerAddress'),
          field: "customer_address",
          tdClass: "text-left",
          thClass: "text-left"
        },
        {
          label: this.reportLabel('SellerReport_CustomerPhone'),
          field: "customer_phone",
          tdClass: "text-left",
          thClass: "text-left"
        },
        {
          label: this.reportLabel('SellerReport_ProductName'),
          field: "product_name",
          tdClass: "text-left",
          thClass: "text-left"
        },
        {
          label: this.reportLabel('SellerReport_ProductQty'),
          field: "product_qty",
          tdClass: "text-left",
          thClass: "text-left"
        },
        {
          label: this.reportLabel('SellerReport_ProductUnit'),
          field: "product_unit",
          tdClass: "text-left",
          thClass: "text-left"
        },
        {
          label: this.reportLabel('SellerReport_ProductCost'),
          field: "product_cost",
          headerField: this.sumCost,
          tdClass: "text-left",
          thClass: "text-left"
        },
        {
          label: this.reportLabel('SellerReport_PaidAmount'),
          field: "paid_amount",
          headerField: this.sumPaidAmount,
          tdClass: "text-left",
          thClass: "text-left"
        },
        {
          label: this.reportLabel('SellerReport_Shipping'),
          field: "shipping",
          headerField: this.sumShipping,
          tdClass: "text-left",
          thClass: "text-left"
        },
        {
          label: this.reportLabel('SellerReport_PaymentMethod'),
          field: "payment_method",
          tdClass: "text-left",
          thClass: "text-left"
        },
        {
          label: this.reportLabel('SellerReport_SellerName'),
          field: "seller_name",
          tdClass: "text-left",
          thClass: "text-left"
        },
        {
          label: this.reportLabel('SellerReport_SellerPhone'),
          field: "seller_phone",
          tdClass: "text-left",
          thClass: "text-left"
        }
      ];
    },
    ...mapGetters(["currentUser"]),

    // Excel data with summary row appended
    excelData() {
      const ft = this.footerTotals;
      const profit = ft.totalPaidAmount - (ft.totalCost + ft.totalShipping);

      const summaryRow = {
        datetime: this.reportLabel('SellerReport_Total'),
        Ref: '',
        warehouse_name: '',
        customer_address: '',
        customer_phone: '',
        product_name: '',
        product_qty: '',
        product_unit: '',
        product_cost: ft.totalCost,
        paid_amount: ft.totalPaidAmount,
        shipping: ft.totalShipping,
        payment_method: profit >= 0
          ? `${this.reportLabel('SellerReport_Profit')}: ${profit.toFixed(2)}`
          : `${this.reportLabel('SellerReport_Loss')}: ${Math.abs(profit).toFixed(2)}`,
        seller_name: '',
        seller_phone: ''
      };

      return [...this.sales, summaryRow];
    },

    // FIX #4 & #5: Use grand totals from the server (all pages), not just current page rows.
    footerTotals() {
      return {
        totalCost:       this.grandTotals.totalCost,
        totalPaidAmount: this.grandTotals.totalPaidAmount,
        totalShipping:   this.grandTotals.totalShipping,
        totalProfit:     this.grandTotals.totalProfit,
        saleByCash:      this.grandTotals.saleByCash,
        saleByKhqr:      this.grandTotals.saleByKhqr,
        cashDifference:  this.grandTotals.cashDifference,
      };
    }
  },

  methods: {
    reportLabel(key) {
      let translated = '';
      try {
        translated = this.$t ? this.$t(key) : '';
      } catch (e) {
        translated = '';
      }

      if (translated && translated !== key) {
        return translated;
      }

      const locale = (
        (this.$i18n && this.$i18n.locale) ||
        (typeof localStorage !== 'undefined' && localStorage.getItem('language')) ||
        'en'
      ).toLowerCase();
      const shortLocale = locale.substring(0, 2);
      const labels = SELLER_REPORT_LABELS[locale] || SELLER_REPORT_LABELS[shortLocale] || SELLER_REPORT_LABELS.en;

      return labels[key] || SELLER_REPORT_LABELS.en[key] || key;
    },

    buildDatePickerLocale() {
      return {
        Label: this.reportLabel('SellerReport_Apply'),
        cancelLabel: this.reportLabel('SellerReport_Cancel'),
        weekLabel: "W",
        customRangeLabel: this.reportLabel('SellerReport_CustomRange'),
        daysOfWeek: moment.weekdaysMin(),
        monthNames: moment.monthsShort(),
        firstDay: 1
      };
    },

    formatPaymentMethod(method) {
      if (!method) {
        return '-';
      }

      const value = String(method).trim();
      const normalized = value.toLowerCase();

      if (normalized === 'cash' || normalized === 'cod' || normalized === 'sale by cash') {
        return this.reportLabel('SellerReport_Cash');
      }

      if (normalized === 'khqr' || normalized === 'sale by khqr') {
        return this.reportLabel('SellerReport_Khqr');
      }

      let translated = '';
      try {
        translated = this.$t ? this.$t(value) : '';
      } catch (e) {
        translated = '';
      }

      return translated && translated !== value ? translated : value;
    },

    // Group footer helpers for vue-good-table.
    sumCost(rowObj) {
      if (!rowObj || !Array.isArray(rowObj.children)) {
        return this.formatPriceWithSymbol(this.currentUser && this.currentUser.currency, 0, 2);
      }
      let sum = 0;
      for (let i = 0; i < rowObj.children.length; i++) {
        const value = Number(rowObj.children[i].product_cost) || 0;
        if (Number.isFinite(value)) {
          sum += value;
        }
      }
      return this.formatPriceWithSymbol(this.currentUser && this.currentUser.currency, sum, 2);
    },
    sumPrice(rowObj) {
      if (!rowObj || !Array.isArray(rowObj.children)) {
        return this.formatPriceWithSymbol(this.currentUser && this.currentUser.currency, 0, 2);
      }
      let sum = 0;
      for (let i = 0; i < rowObj.children.length; i++) {
        const value = Number(rowObj.children[i].product_price) || 0;
        if (Number.isFinite(value)) {
          sum += value;
        }
      }
      return this.formatPriceWithSymbol(this.currentUser && this.currentUser.currency, sum, 2);
    },
    sumPaidAmount(rowObj) {
      if (!rowObj || !Array.isArray(rowObj.children)) {
        return this.formatPriceWithSymbol(this.currentUser && this.currentUser.currency, 0, 2);
      }
      let sum = 0;
      for (let i = 0; i < rowObj.children.length; i++) {
        const value = Number(rowObj.children[i].paid_amount) || 0;
        if (Number.isFinite(value)) {
          sum += value;
        }
      }
      return this.formatPriceWithSymbol(this.currentUser && this.currentUser.currency, sum, 2);
    },
    sumShipping(rowObj) {
      if (!rowObj || !Array.isArray(rowObj.children)) {
        return this.formatPriceWithSymbol(this.currentUser && this.currentUser.currency, 0, 2);
      }
      let sum = 0;
      for (let i = 0; i < rowObj.children.length; i++) {
        const value = Number(rowObj.children[i].shipping) || 0;
        if (Number.isFinite(value)) {
          sum += value;
        }
      }
      return this.formatPriceWithSymbol(this.currentUser && this.currentUser.currency, sum, 2);
    },

    //---- update Params Table
    updateParams(newProps) {
      this.serverParams = Object.assign({}, this.serverParams, newProps);
    },

    //---- Event Page Change
    onPageChange({ currentPage }) {
      if (this.serverParams.page !== currentPage) {
        this.updateParams({ page: currentPage });
        this.Get_Sales(currentPage);
      }
    },

    //---- Event Per Page Change
    onPerPageChange({ currentPerPage }) {
      if (this.limit !== currentPerPage) {
        this.limit = currentPerPage;
        this.updateParams({ page: 1, perPage: currentPerPage });
        this.Get_Sales(1);
      }
    },

    //---- Event on Sort Change
    onSortChange(params) {
      let field = "";
      if (params[0].field == "client_name") {
        field = "client_id";
      } else {
        field = params[0].field;
      }
      this.updateParams({
        sort: {
          type: params[0].type,
          field: field
        }
      });
      this.Get_Sales(this.serverParams.page);
    },

    //---- Event on Search
    onSearch(value) {
      this.search = value.searchTerm;
      this.Get_Sales(this.serverParams.page);
    },

    //------ Print Table Only - Print ALL sales data with all columns
    printTableOnly() {
      const title = `${this.$t("Reports")} / ${this.reportLabel('SellerReport_Title')}`;
      const sales = Array.isArray(this.sales) ? this.sales : [];
      const ft = this.footerTotals;

      // Build table header with all columns
      let tableHTML = '<table style="width: 100%; border-collapse: collapse; font-size: 10px;">';
      tableHTML += '<thead><tr>';

      this.columns.forEach(col => {
        tableHTML += `<th style="border: 1px solid #ddd; padding: 6px 8px; background-color: #f5f5f5; font-weight: bold; text-align: left;">${col.label}</th>`;
      });
      tableHTML += '</tr></thead><tbody>';

      // Build table rows with all data - format each cell according to column type
      sales.forEach(sale => {
        tableHTML += '<tr>';
        this.columns.forEach(col => {
          let cellValue = '';

          if (col.field === 'datetime') {
            cellValue = sale.datetime || '';
          } else if (col.field === 'Ref') {
            cellValue = sale.Ref || '';
          } else if (col.field === 'warehouse_name') {
            cellValue = sale.warehouse_name || '';
          } else if (col.field === 'customer_address') {
            cellValue = sale.customer_address || '';
          } else if (col.field === 'customer_phone') {
            cellValue = sale.customer_phone || '';
          } else if (col.field === 'product_name') {
            cellValue = sale.product_name || '';
          } else if (col.field === 'product_qty') {
            cellValue = sale.product_qty || '';
          } else if (col.field === 'product_unit') {
            cellValue = sale.product_unit || '';
          } else if (col.field === 'product_cost') {
            cellValue = this.formatPriceWithSymbol(this.currentUser && this.currentUser.currency, sale.product_cost, 2);
          } else if (col.field === 'paid_amount') {
            cellValue = this.formatPriceWithSymbol(this.currentUser && this.currentUser.currency, sale.paid_amount, 2);
          } else if (col.field === 'shipping') {
            cellValue = this.formatPriceWithSymbol(this.currentUser && this.currentUser.currency, sale.shipping, 2);
          } else if (col.field === 'payment_method') {
            cellValue = this.formatPaymentMethod(sale.payment_method);
          } else if (col.field === 'seller_name') {
            cellValue = sale.seller_name || '';
          } else if (col.field === 'seller_phone') {
            cellValue = sale.seller_phone || '';
          } else {
            // Default: get value directly from sale object
            cellValue = sale[col.field] || '';
          }

          tableHTML += `<td style="border: 1px solid #ddd; padding: 6px 8px; text-align: left;">${cellValue}</td>`;
        });
        tableHTML += '</tr>';
      });

      // Add summary row
      const profit = ft.totalPaidAmount - (ft.totalCost + ft.totalShipping);
      tableHTML += `<tr style="background-color: #f8f9fa; font-weight: bold;">
        <td colspan="8" style="border: 1px solid #ddd; padding: 8px; text-align: right;">${this.reportLabel('SellerReport_Summary')}:</td>
        <td style="border: 1px solid #ddd; padding: 8px; color: #dc3545;">${this.formatPriceWithSymbol(this.currentUser && this.currentUser.currency, ft.totalCost, 2)}</td>
        <td style="border: 1px solid #ddd; padding: 8px; color: #007bff;">${this.formatPriceWithSymbol(this.currentUser && this.currentUser.currency, ft.totalPaidAmount, 2)}</td>
        <td style="border: 1px solid #ddd; padding: 8px; color: #ffc107;">${this.formatPriceWithSymbol(this.currentUser && this.currentUser.currency, ft.totalShipping, 2)}</td>
        <td style="border: 1px solid #ddd; padding: 8px; color: #28a745;">${this.formatPriceWithSymbol(this.currentUser && this.currentUser.currency, ft.saleByCash, 2)}</td>
        <td style="border: 1px solid #ddd; padding: 8px; color: #17a2b8;">${this.formatPriceWithSymbol(this.currentUser && this.currentUser.currency, ft.saleByKhqr, 2)}</td>
        <td style="border: 1px solid #ddd; padding: 8px; color: ${profit >= 0 ? '#28a745' : '#dc3545'};">${this.formatPriceWithSymbol(this.currentUser && this.currentUser.currency, Math.abs(profit), 2)}${profit < 0 ? ` (${this.reportLabel('SellerReport_Loss')})` : ''}</td>
        <td colspan="2" style="border: 1px solid #ddd; padding: 8px;"></td>
      </tr>`;

      tableHTML += '</tbody></table>';

      const w = window.open("", "_blank");
      if (!w) {
        alert(this.reportLabel('SellerReport_AllowPopups'));
        return;
      }

      const links = Array.from(document.querySelectorAll('link[rel="stylesheet"]'))
        .map(l => l.outerHTML)
        .join("\n");

      const doc = w.document;
      doc.open();
      doc.write(`<!doctype html>
<html>
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <base href="${window.location.origin}/" />
    <title>${title}</title>
    ${links}
    <style>
      /* Force visibility in print (some global POS print CSS hides body) */
      @media print {
        body, body * { visibility: visible !important; }
        @page { size: A4 landscape; margin: 0.3cm; }
      }
      body { margin: 0.3cm; font-family: Arial, sans-serif; }
      .print-header { font-weight: 600; margin-bottom: 10px; font-size: 14px; }
      table { width: 100%; border-collapse: collapse; }
      th, td { border: 1px solid #ddd; padding: 6px 8px; text-align: left; font-size: 10px; }
      th { background-color: #f5f5f5; font-weight: bold; }
      tr:nth-child(even) { background-color: #f9f9f9; }
    </style>
  </head>
  <body>
    <div class="print-header">${title}</div>
    ${tableHTML}
  </body>
</html>`);
      doc.close();

      w.focus();
      setTimeout(() => {
        w.print();
        w.close();
      }, 400);
    },

    //------ Reset Filter
    Reset_Filter() {
      this.search = "";
      this.Filter_Client = "";
      this.Filter_status = "";
      this.Filter_Payment = "";
      this.Filter_Ref = "";
      this.Filter_warehouse = "";
      this.Filter_seller = "";
      this.Get_Sales(this.serverParams.page);
    },

    //------------------------------Formetted Numbers -------------------------\\
    formatNumber(number, dec) {
      const value = (typeof number === "string"
        ? number
        : number.toString()
      ).split(".");
      if (dec <= 0) return value[0];
      let formated = value[1] || "";
      if (formated.length > dec)
        return `${value[0]}.${formated.substr(0, dec)}`;
      while (formated.length < dec) formated += "0";
      return `${value[0]}.${formated}`;
    },

    // Price formatting for display only (does NOT affect calculations or stored values)
    // Uses the global/system price_format setting when available; otherwise falls back
    // to the existing formatNumber helper to preserve current behavior.
    formatPriceDisplay(number, dec) {
      try {
        // Handle null, undefined, empty string, or NaN
        if (number === null || number === undefined || number === '') {
          number = 0;
        }
        const n = Number(number);
        if (isNaN(n) || !isFinite(n)) {
          return this.formatNumber(0, dec || 2);
        }

        const decimals = Number.isInteger(dec) ? dec : (dec ? parseInt(dec) : 2);
        // Always check store directly to ensure we get the latest value
        const key = getPriceFormatSetting({ store: this.$store });
        if (key) {
          this.price_format_key = key;
        }
        const effectiveKey = key || null;
        return formatPriceDisplayHelper(n, decimals, effectiveKey);
      } catch (e) {
        // Fallback to formatNumber with safe value
        return this.formatNumber(0, dec || 2);
      }
    },

    formatPriceWithSymbol(symbol, number, dec) {
      try {
        const safeSymbol = symbol || (this.currentUser && this.currentUser.currency) || "";
        const value = this.formatPriceDisplay(number, dec);
        return safeSymbol ? `${safeSymbol} ${value}` : value;
      } catch (e) {
        const safeSymbol = symbol || "";
        const value = this.formatPriceDisplay(number, dec);
        return safeSymbol ? `${safeSymbol} ${value}` : value;
      }
    },

    buildSalesReportUrl(page, limit) {
      const params = [
        ["page", page],
        ["Ref", this.Filter_Ref],
        ["client_id", this.Filter_Client],
        ["warehouse_id", this.Filter_warehouse],
        ["user_id", this.Filter_seller],
        ["statut", this.Filter_status],
        ["payment_statut", this.Filter_Payment],
        ["SortField", this.serverParams.sort.field],
        ["SortType", this.serverParams.sort.type],
        ["search", this.search],
        ["limit", limit],
        ["to", this.endDate],
        ["from", this.startDate],
      ];

      return "/report/sales_by_seller?" + params.map(([key, value]) => {
        const safeValue = value === null || value === undefined ? "" : value;
        return `${key}=${encodeURIComponent(safeValue)}`;
      }).join("&");
    },

    showReportMessage(message, variant = "danger") {
      if (this.$bvToast) {
        this.$bvToast.toast(message, {
          title: this.reportLabel('SellerReport_Title'),
          variant,
          solid: true
        });
      } else {
        alert(message);
      }
    },

    normalizeReportTotals(totals) {
      const source = totals || {};

      return {
        totalCost: Number(source.totalCost) || 0,
        totalPaidAmount: Number(source.totalPaidAmount) || 0,
        totalShipping: Number(source.totalShipping) || 0,
        totalProfit: Number(source.totalProfit) || 0,
        saleByCash: Number(source.saleByCash) || 0,
        saleByKhqr: Number(source.saleByKhqr) || 0,
        cashDifference: Number(source.cashDifference) || 0,
      };
    },

    salesPdfColumns() {
      return [
        { label: this.reportLabel('SellerReport_DateTime'), field: "datetime", width: "8%" },
        { label: this.$t("Reference"), field: "Ref", width: "6%" },
        { label: this.$t("warehouse"), field: "warehouse_name", width: "6%" },
        { label: this.reportLabel('SellerReport_CustomerAddress'), field: "customer_address", width: "10%" },
        { label: this.reportLabel('SellerReport_CustomerPhone'), field: "customer_phone", width: "7%" },
        { label: this.reportLabel('SellerReport_ProductName'), field: "product_name", width: "10%" },
        { label: this.reportLabel('SellerReport_ProductQty'), field: "product_qty", width: "4%", className: "center" },
        { label: this.reportLabel('SellerReport_ProductUnit'), field: "product_unit", width: "5%" },
        { label: this.reportLabel('SellerReport_ProductCost'), field: "product_cost", width: "7%", className: "money" },
        { label: this.reportLabel('SellerReport_PaidAmount'), field: "paid_amount", width: "7%", className: "money" },
        { label: this.reportLabel('SellerReport_Shipping'), field: "shipping", width: "6%", className: "money" },
        { label: this.reportLabel('SellerReport_PaymentMethod'), field: "payment_method", width: "7%", className: "center" },
        { label: this.reportLabel('SellerReport_SellerName'), field: "seller_name", width: "9%" },
        { label: this.reportLabel('SellerReport_SellerPhone'), field: "seller_phone", width: "8%" },
      ];
    },

    escapeReportHtml(value) {
      return String(value === null || value === undefined ? "" : value)
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
    },

    salesPdfCellValue(sale, field) {
      if (field === "product_cost" || field === "paid_amount" || field === "shipping") {
        return this.formatPriceWithSymbol(this.currentUser && this.currentUser.currency, sale[field] || 0, 2);
      }

      if (field === "payment_method") {
        return this.formatPaymentMethod(sale.payment_method);
      }

      return sale[field] || "";
    },

    salesPdfTableHtml(sales) {
      const columns = this.salesPdfColumns();
      const colgroup = columns
        .map(column => `<col style="width:${column.width}">`)
        .join("");
      const header = columns
        .map(column => `<th>${this.escapeReportHtml(column.label)}</th>`)
        .join("");
      const rows = sales
        .map((sale, rowIndex) => {
          const cells = columns
            .map(column => {
              const className = column.className ? ` class="${column.className}"` : "";
              return `<td${className}>${this.escapeReportHtml(this.salesPdfCellValue(sale, column.field))}</td>`;
            })
            .join("");
          return `<tr class="${rowIndex % 2 === 0 ? "even" : "odd"}">${cells}</tr>`;
        })
        .join("");

      return `
        <table class="seller-pdf-table">
          <colgroup>${colgroup}</colgroup>
          <thead><tr>${header}</tr></thead>
          <tbody>${rows}</tbody>
        </table>
      `;
    },

    salesPdfSummaryHtml(totals) {
      const cards = [
        {
          label: this.reportLabel('SellerReport_TotalCost'),
          value: this.formatPriceWithSymbol(this.currentUser && this.currentUser.currency, totals.totalCost, 2),
          className: "danger",
        },
        {
          label: this.reportLabel('SellerReport_TotalPaidAmount'),
          value: this.formatPriceWithSymbol(this.currentUser && this.currentUser.currency, totals.totalPaidAmount, 2),
          className: "primary",
        },
        {
          label: this.reportLabel('SellerReport_TotalShipping'),
          value: this.formatPriceWithSymbol(this.currentUser && this.currentUser.currency, totals.totalShipping, 2),
          className: "warning",
        },
        {
          label: this.reportLabel('SellerReport_SaleByCash'),
          value: this.formatPriceWithSymbol(this.currentUser && this.currentUser.currency, totals.saleByCash, 2),
          className: "success",
        },
        {
          label: this.reportLabel('SellerReport_SaleByKhqr'),
          value: this.formatPriceWithSymbol(this.currentUser && this.currentUser.currency, totals.saleByKhqr, 2),
          className: "info",
        },
        {
          label: totals.totalProfit >= 0 ? this.reportLabel('SellerReport_Profit') : this.reportLabel('SellerReport_Loss'),
          value: this.formatPriceWithSymbol(this.currentUser && this.currentUser.currency, Math.abs(totals.totalProfit), 2),
          className: totals.totalProfit >= 0 ? "success" : "danger",
        },
      ];
      const isCashFromBoss = totals.cashDifference >= 0;
      const cashLabel = isCashFromBoss
        ? this.reportLabel('SellerReport_CashFromBoss')
        : this.reportLabel('SellerReport_CashToBoss');
      const cashValue = this.formatPriceWithSymbol(
        this.currentUser && this.currentUser.currency,
        Math.abs(totals.cashDifference),
        2
      );

      return `
        <section class="seller-pdf-summary">
          <div class="summary-grid">
            ${cards.map(card => `
              <div class="summary-card ${card.className}">
                <div class="summary-label">${this.escapeReportHtml(card.label)}</div>
                <div class="summary-value">${this.escapeReportHtml(card.value)}</div>
              </div>
            `).join("")}
          </div>
          <div class="cash-difference ${isCashFromBoss ? "positive" : "negative"}">
            ${this.escapeReportHtml(cashLabel)}: ${this.escapeReportHtml(cashValue)}
          </div>
        </section>
      `;
    },

    salesPdfPageHtml({ rows, totals, pageNumber, totalPages, includeSummary }) {
      const title = this.reportLabel('SellerReport_Title');
      const dateRange = `${this.reportLabel('SellerReport_DateRange')}: ${this.fmt(this.startDate)} - ${this.fmt(this.endDate)}`;
      const generatedAt = `${this.reportLabel('SellerReport_GeneratedAt')}: ${moment().format("YYYY-MM-DD HH:mm")}`;
      const hasRows = Array.isArray(rows) && rows.length > 0;

      return `
        <div class="seller-pdf-page">
          <header class="seller-pdf-header">
            <div>
              <h1>${this.escapeReportHtml(title)}</h1>
              <p>${this.escapeReportHtml(dateRange)}</p>
            </div>
            <div class="generated-at">${this.escapeReportHtml(generatedAt)}</div>
          </header>
          <main class="seller-pdf-body">
            ${hasRows ? this.salesPdfTableHtml(rows) : ""}
            ${includeSummary ? this.salesPdfSummaryHtml(totals) : ""}
          </main>
          <footer class="seller-pdf-footer">
            <span>MMO 17G</span>
            <span>${this.escapeReportHtml(this.reportLabel('SellerReport_Page'))} ${pageNumber} / ${totalPages}</span>
          </footer>
        </div>
      `;
    },

    salesPdfStyles() {
      return `
        <style>
          @font-face {
            font-family: "NotoSansKhmerPDF";
            src: url("/fonts/NotoSansKhmer-Regular.ttf") format("truetype");
            font-weight: 400;
            font-style: normal;
          }
          .sales-pdf-capture-root {
            position: fixed;
            left: -12000px;
            top: 0;
            width: 1123px;
            background: #fff;
            z-index: 9999;
            pointer-events: none;
          }
          .seller-pdf-page {
            width: 1123px;
            height: 794px;
            box-sizing: border-box;
            padding: 30px 32px 24px;
            background: #ffffff;
            color: #1f2937;
            font-family: "NotoSansKhmerPDF", "Kantumruy Pro", "Noto Sans Khmer", Arial, sans-serif;
            display: flex;
            flex-direction: column;
          }
          .seller-pdf-header {
            background: #314450;
            color: #ffffff;
            border-radius: 8px;
            padding: 17px 22px;
            min-height: 76px;
            display: flex;
            justify-content: space-between;
            align-items: flex-end;
          }
          .seller-pdf-header h1 {
            margin: 0 0 8px;
            font-size: 22px;
            line-height: 1.1;
            font-weight: 700;
          }
          .seller-pdf-header p,
          .generated-at {
            margin: 0;
            font-size: 12px;
            opacity: 0.88;
          }
          .seller-pdf-body {
            flex: 1;
            padding-top: 18px;
          }
          .seller-pdf-table {
            width: 100%;
            table-layout: fixed;
            border-collapse: collapse;
            font-size: 11px;
            line-height: 1.25;
          }
          .seller-pdf-table th {
            background: #314450;
            color: #ffffff;
            border: 1px solid #1f313d;
            padding: 8px 5px;
            text-align: left;
            font-weight: 700;
            vertical-align: middle;
            word-break: break-word;
          }
          .seller-pdf-table td {
            border: 1px solid #d8dee5;
            padding: 7px 5px;
            min-height: 28px;
            vertical-align: top;
            word-break: break-word;
            overflow-wrap: anywhere;
          }
          .seller-pdf-table tr.even td {
            background: #ffffff;
          }
          .seller-pdf-table tr.odd td {
            background: #f8fafc;
          }
          .seller-pdf-table .money {
            text-align: right;
            white-space: normal;
          }
          .seller-pdf-table .center {
            text-align: center;
          }
          .seller-pdf-summary {
            margin-top: 18px;
            border: 1px solid #d7dde3;
            border-radius: 8px;
            background: #f8fafc;
            padding: 16px;
          }
          .summary-grid {
            display: grid;
            grid-template-columns: repeat(6, 1fr);
            gap: 10px;
          }
          .summary-card {
            border-radius: 7px;
            padding: 10px 8px;
            text-align: center;
            background: #ffffff;
          }
          .summary-card.danger { background: #fff2f4; color: #dc3545; }
          .summary-card.primary { background: #eff6ff; color: #1a73e8; }
          .summary-card.warning { background: #fff7ed; color: #e67e22; }
          .summary-card.success { background: #edfdf4; color: #22a05b; }
          .summary-card.info { background: #ebf8ff; color: #1482be; }
          .summary-label {
            min-height: 30px;
            font-size: 11px;
            color: #596675;
          }
          .summary-value {
            margin-top: 5px;
            font-size: 15px;
            font-weight: 700;
          }
          .cash-difference {
            margin-top: 14px;
            border-radius: 7px;
            border: 2px solid;
            padding: 12px;
            text-align: center;
            font-size: 18px;
            font-weight: 700;
          }
          .cash-difference.positive {
            background: #d4edda;
            color: #1a7f37;
            border-color: #28a745;
          }
          .cash-difference.negative {
            background: #f8d7da;
            color: #b4232f;
            border-color: #dc3545;
          }
          .seller-pdf-footer {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding-top: 12px;
            color: #687381;
            font-size: 11px;
          }
        </style>
      `;
    },

    buildSalesPdfPages(sales, totals) {
      const rowsPerPage = 9;
      const chunks = [];

      for (let i = 0; i < sales.length; i += rowsPerPage) {
        chunks.push(sales.slice(i, i + rowsPerPage));
      }

      const summaryFitsLastPage = chunks.length > 0 && chunks[chunks.length - 1].length <= 4;
      const totalPages = chunks.length + (summaryFitsLastPage ? 0 : 1);
      const pages = chunks.map((rows, index) => this.salesPdfPageHtml({
        rows,
        totals,
        pageNumber: index + 1,
        totalPages,
        includeSummary: summaryFitsLastPage && index === chunks.length - 1,
      }));

      if (!summaryFitsLastPage) {
        pages.push(this.salesPdfPageHtml({
          rows: [],
          totals,
          pageNumber: totalPages,
          totalPages,
          includeSummary: true,
        }));
      }

      return pages;
    },

    createSalesPdfCaptureRoot(pages) {
      const root = document.createElement("div");
      root.className = "sales-pdf-capture-root";
      root.innerHTML = `${this.salesPdfStyles()}${pages.join("")}`;
      document.body.appendChild(root);
      return root;
    },

    //----------------------------------- Sales PDF ------------------------------\\
    async Sales_PDF() {
      if (this.isExportingPdf) {
        return;
      }

      this.isExportingPdf = true;
      NProgress.start();
      let captureRoot = null;

      try {
        this.setToStrings();
        this.get_data_loaded();

        const totalRows = parseInt(this.totalRows, 10) || 0;
        const currentRows = Array.isArray(this.sales) ? this.sales.length : 0;
        const currentLimit = parseInt(this.limit, 10) || 10;
        const exportLimit = Math.max(totalRows, currentRows, currentLimit, 1000);
        const response = await axios.get(this.buildSalesReportUrl(1, exportLimit));
        const reportSales = Array.isArray(response.data.sales) ? response.data.sales : [];
        const totals = this.normalizeReportTotals(response.data.grandTotals || this.footerTotals);

        if (!reportSales.length) {
          this.showReportMessage(this.reportLabel('SellerReport_NoDataToExport'), "warning");
          return;
        }

        const pages = this.buildSalesPdfPages(reportSales, totals);
        captureRoot = this.createSalesPdfCaptureRoot(pages);

        await this.$nextTick();
        if (document.fonts && document.fonts.ready) {
          await document.fonts.ready;
        }

        const pdf = new jsPDF("l", "pt", "a4");
        const pageW = pdf.internal.pageSize.getWidth();
        const pageH = pdf.internal.pageSize.getHeight();
        const pageElements = Array.from(captureRoot.querySelectorAll(".seller-pdf-page"));

        for (let index = 0; index < pageElements.length; index++) {
          const canvas = await html2canvas(pageElements[index], {
            scale: 2,
            backgroundColor: "#ffffff",
            useCORS: true,
            logging: false,
          });
          const imageData = canvas.toDataURL("image/jpeg", 0.96);

          if (index > 0) {
            pdf.addPage();
          }

          pdf.addImage(imageData, "JPEG", 0, 0, pageW, pageH);
        }
        pdf.save("Sales_By_Seller_Report.pdf");
      } catch (error) {
        console.error(error);
        this.showReportMessage(this.reportLabel('SellerReport_ExportFailed'), "danger");
      } finally {
        if (captureRoot && captureRoot.parentNode) {
          captureRoot.remove();
        }
        NProgress.done();
        this.isExportingPdf = false;
      }

    },

    //---------------------------------------- Set To Strings-------------------------\\
    setToStrings() {
      // Simply replaces null values with strings=''
      if (this.Filter_Client === null) {
        this.Filter_Client = "";
      }else if (this.Filter_warehouse === null) {
        this.Filter_warehouse = "";
      }else if (this.Filter_seller === null) {
        this.Filter_seller = "";
      }
    },

    //----------------------------- Submit Date Picker -------------------\\
    Submit_filter_dateRange() {
  const pad = (n) => String(n).padStart(2, "0");
  const formatLocalDate = (d) =>
    `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`;

  this.startDate = formatLocalDate(new Date(this.dateRange.startDate));
  this.endDate   = formatLocalDate(new Date(this.dateRange.endDate));

  this.Get_Sales(1);
},


    get_data_loaded() {
      var self = this;
      if (self.today_mode) {
        let startDate = new Date("01/01/2000");  // Set start date to "01/01/2000"
        let endDate = new Date();  // Set end date to current date

        self.startDate = startDate.toISOString();
        self.endDate = endDate.toISOString();

        self.dateRange.startDate = startDate.toISOString();
        self.dateRange.endDate = endDate.toISOString();
      }
    },


    //----------------------------------------- Get all Sales ------------------------------\\
    Get_Sales(page) {
      // Start the progress bar.
      NProgress.start();
      NProgress.set(0.1);
      this.setToStrings();
      this.get_data_loaded();
      axios
        .get(this.buildSalesReportUrl(page, this.limit))
        .then(response => {
          this.sales = response.data.sales;
          this.customers = response.data.customers;
          this.warehouses = response.data.warehouses;
          this.sellers = response.data.sellers;
          this.totalRows = response.data.totalRows;
          this.rows[0].statut = this.reportLabel('SellerReport_Total');
          this.rows[0].children = this.sales;
          // FIX #4 & #5: Update grand totals from server response
          if (response.data.grandTotals) {
            this.grandTotals = response.data.grandTotals;
          }

          // Complete the animation of theprogress bar.
          NProgress.done();
          this.isLoading = false;
          this.today_mode = false;
        })
        .catch(response => {
          // Complete the animation of theprogress bar.
          NProgress.done();
          setTimeout(() => {
            this.isLoading = false;
            this.today_mode = false;
          }, 500);
        });
    },
    //----------------------------------------- Format Display Date (for tables) -------------------------------\\
    formatDisplayDate(value) {
      if (!value) return '';
      // Get date format from Vuex store (loaded from database) or fallback
      const dateFormat = this.$store.getters.getDateFormat || Util.getDateFormat(this.$store);
      return Util.formatDisplayDate(value, dateFormat);
    },

    // Same as dashboard: format date for picker display (YYYY-MM-DD, local time via moment)
    fmt(d) {
      return moment(d).format("YYYY-MM-DD");
    }
  },
  //----------------------------- Created function-------------------\\
  created() {
    this.locale = this.buildDatePickerLocale();
    this.Get_Sales(1);
  }
};
</script>
