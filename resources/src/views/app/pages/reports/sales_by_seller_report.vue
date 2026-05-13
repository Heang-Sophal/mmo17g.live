<template>
  <div class="main-content">
    <breadcumb :page="$t('SalesBySellerReport')" :folder="$t('Reports')"/>

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
        :pagination-options="{
        enabled: true,
        mode: 'records',
        nextLabel: 'next',
        prevLabel: 'prev',
      }"
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
          <b-button @click="Sales_PDF()" size="sm" variant="outline-success ripple m-1">
            <i class="i-File-Copy"></i> PDF
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
            {{ props.row.payment_method || 'N/A' }}
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
            <small class="text-muted">Total Cost</small>
            <h5 class="text-danger mb-0">{{ formatPriceWithSymbol(currentUser && currentUser.currency, footerTotals.totalCost, 2) }}</h5>
          </div>
          <div class="col-md-2 text-center">
            <small class="text-muted">Total Paid Amount</small>
            <h5 class="text-primary mb-0">{{ formatPriceWithSymbol(currentUser && currentUser.currency, footerTotals.totalPaidAmount, 2) }}</h5>
          </div>
          <div class="col-md-2 text-center">
            <small class="text-muted">Total Shipping</small>
            <h5 class="text-warning mb-0">{{ formatPriceWithSymbol(currentUser && currentUser.currency, footerTotals.totalShipping, 2) }}</h5>
          </div>
          <div class="col-md-2 text-center">
            <small class="text-muted">Sale By Cash</small>
            <h5 class="text-success mb-0">{{ formatPriceWithSymbol(currentUser && currentUser.currency, footerTotals.saleByCash, 2) }}</h5>
          </div>
          <div class="col-md-2 text-center">
            <small class="text-muted">Sale By KHQR</small>
            <h5 class="text-info mb-0">{{ formatPriceWithSymbol(currentUser && currentUser.currency, footerTotals.saleByKhqr, 2) }}</h5>
          </div>
          <div class="col-md-2 text-center">
            <small class="text-muted">Profit</small>
            <h5 :class="footerTotals.totalProfit >= 0 ? 'text-success' : 'text-danger'" class="mb-0">
              {{ formatPriceWithSymbol(currentUser && currentUser.currency, Math.abs(footerTotals.totalProfit), 2) }}
              <small v-if="footerTotals.totalProfit < 0">(Loss)</small>
            </h5>
          </div>
        </div>
        <!-- Cash From/To Boss -->
        <div class="row mt-3">
          <div class="col-12 text-center">
            <div v-if="footerTotals.cashDifference >= 0" style="padding: 12px; border-radius: 8px; background-color: #d4edda; border: 2px solid #28a745;">
              <span style="font-size: 18px; font-weight: bold; color: #0a2e12;">
                😊 Cash From Boss: {{ formatPriceWithSymbol(currentUser && currentUser.currency, footerTotals.cashDifference, 2) }}
              </span>
            </div>
            <div v-else style="padding: 12px; border-radius: 8px; background-color: #f8d7da; border: 2px solid #dc3545;">
              <span style="font-size: 18px; font-weight: bold; color: #3d0c10;">
                😢 Cash to Boss! {{ formatPriceWithSymbol(currentUser && currentUser.currency, Math.abs(footerTotals.cashDifference), 2) }}
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
              <b-form-input label="Reference" :placeholder="$t('Reference')" v-model="Filter_Ref"></b-form-input>
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
            <b-form-group label="Seller">
              <v-select
                :reduce="label => label.value"
                placeholder="Choose Seller"
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
                <option value selected>All</option>
                <option value="completed">Completed</option>
                <option value="pending">Pending</option>
                <option value="ordered">Ordered</option>
              </select>
            </b-form-group>
          </b-col>

          <!-- Payment Status  -->
          <b-col md="12">
            <b-form-group :label="$t('PaymentStatus')">
              <select v-model="Filter_Payment" type="text" class="form-control">
                <option value selected>All</option>
                <option value="paid">Paid</option>
                <option value="partial">partial</option>
                <option value="unpaid">UnPaid</option>
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
import autoTable from "jspdf-autotable";
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

export default {
  metaInfo: {
    title: "Sales By Seller Report"
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
          Label: "Apply",
          cancelLabel: "Cancel",
          weekLabel: "W",
          customRangeLabel: "Custom Range",
          daysOfWeek: moment.weekdaysMin(),
          //array of days - see moment documenations for details
          monthNames: moment.monthsShort(), //array of month names - see moment documenations for details
          firstDay: 1 //ISO first day of week - see moment documenations for details
        },
      isLoading: true,
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
          statut: 'Total',
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
    columns() {
      return [
        {
          label: 'Date Time',
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
          label: 'Customer Address',
          field: "customer_address",
          tdClass: "text-left",
          thClass: "text-left"
        },
        {
          label: 'Customer Phone',
          field: "customer_phone",
          tdClass: "text-left",
          thClass: "text-left"
        },
        {
          label: 'Product Name',
          field: "product_name",
          tdClass: "text-left",
          thClass: "text-left"
        },
        {
          label: 'Product QTY',
          field: "product_qty",
          tdClass: "text-left",
          thClass: "text-left"
        },
        {
          label: 'Product Unit',
          field: "product_unit",
          tdClass: "text-left",
          thClass: "text-left"
        },
        {
          label: 'Product Cost',
          field: "product_cost",
          headerField: this.sumCost,
          tdClass: "text-left",
          thClass: "text-left"
        },
        {
          label: 'Paid Amount',
          field: "paid_amount",
          headerField: this.sumPaidAmount,
          tdClass: "text-left",
          thClass: "text-left"
        },
        {
          label: 'Shipping',
          field: "shipping",
          headerField: this.sumShipping,
          tdClass: "text-left",
          thClass: "text-left"
        },
        {
          label: 'Payment Method',
          field: "payment_method",
          tdClass: "text-left",
          thClass: "text-left"
        },
        {
          label: 'Seller Name',
          field: "seller_name",
          tdClass: "text-left",
          thClass: "text-left"
        },
        {
          label: 'Seller Phone',
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
        datetime: 'TOTAL',
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
        payment_method: profit >= 0 ? `Profit: ${profit.toFixed(2)}` : `Loss: ${Math.abs(profit).toFixed(2)}`,
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
      const title = `${this.$t("Reports")} / ${this.$t("SalesBySellerReport")}`;
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
            cellValue = sale.payment_method || 'N/A';
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
        <td colspan="8" style="border: 1px solid #ddd; padding: 8px; text-align: right;">Summary:</td>
        <td style="border: 1px solid #ddd; padding: 8px; color: #dc3545;">${this.formatPriceWithSymbol(this.currentUser && this.currentUser.currency, ft.totalCost, 2)}</td>
        <td style="border: 1px solid #ddd; padding: 8px; color: #007bff;">${this.formatPriceWithSymbol(this.currentUser && this.currentUser.currency, ft.totalPaidAmount, 2)}</td>
        <td style="border: 1px solid #ddd; padding: 8px; color: #ffc107;">${this.formatPriceWithSymbol(this.currentUser && this.currentUser.currency, ft.totalShipping, 2)}</td>
        <td style="border: 1px solid #ddd; padding: 8px; color: #28a745;">${this.formatPriceWithSymbol(this.currentUser && this.currentUser.currency, ft.saleByCash, 2)}</td>
        <td style="border: 1px solid #ddd; padding: 8px; color: #17a2b8;">${this.formatPriceWithSymbol(this.currentUser && this.currentUser.currency, ft.saleByKhqr, 2)}</td>
        <td style="border: 1px solid #ddd; padding: 8px; color: ${profit >= 0 ? '#28a745' : '#dc3545'};">${this.formatPriceWithSymbol(this.currentUser && this.currentUser.currency, Math.abs(profit), 2)}${profit < 0 ? ' (Loss)' : ''}</td>
        <td colspan="2" style="border: 1px solid #ddd; padding: 8px;"></td>
      </tr>`;

      tableHTML += '</tbody></table>';

      const w = window.open("", "_blank");
      if (!w) {
        alert("Please allow popups to print");
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

    //----------------------------------- Sales PDF ------------------------------\\
    Sales_PDF() {
      var self = this;
      let pdf = new jsPDF("p", "pt");

      const fontPath = "/fonts/Vazirmatn-Bold.ttf";
      try {
        pdf.addFont(fontPath, "Vazirmatn", "normal");
        pdf.addFont(fontPath, "Vazirmatn", "bold");
      } catch(e) {}
      pdf.setFont("Vazirmatn", "normal");

      const headers = [
        'Date Time',
        self.$t("Reference"),
        self.$t("warehouse"),
        'Customer Address',
        'Customer Phone',
        'Product Name',
        'Product QTY',
        'Product Unit',
        'Product Cost',
        'Paid Amount',
        'Shipping',
        'Payment Method',
        'Seller Name',
        'Seller Phone',
      ];

      const body = (self.sales || []).map(sale => ([
        sale.datetime || '',
        sale.Ref,
        sale.warehouse_name,
        sale.customer_address || '',
        sale.customer_phone || '',
        sale.product_name || '',
        sale.product_qty || '',
        sale.product_unit || '',
        sale.product_cost || 0,
        sale.paid_amount || 0,
        sale.shipping || 0,
        sale.payment_method || 'N/A',
        sale.seller_name || '',
        sale.seller_phone || ''
      ]));

      // Calculate totals
      let totalProductCost = self.sales.reduce((sum, sale) => sum + parseFloat(sale.product_cost || 0), 0);
      let totalPaidAmount = self.sales.reduce((sum, sale) => sum + parseFloat(sale.paid_amount || 0), 0);
      let totalShipping = self.sales.reduce((sum, sale) => sum + parseFloat(sale.shipping || 0), 0);
      let totalProfit = totalPaidAmount - (totalProductCost + totalShipping);
      let saleByCash = 0;
      let saleByKhqr = 0;

      self.sales.forEach(sale => {
        const paidAmount = parseFloat(sale.paid_amount) || 0;
        const shipping = parseFloat(sale.shipping) || 0;
        const pm = (sale.payment_method || '').toLowerCase();
        if (pm === 'cash') {
          saleByCash += paidAmount + shipping;
        } else if (pm === 'khqr') {
          saleByKhqr += paidAmount + shipping;
        }
      });

      const footer = [[
        self.$t("Total"),
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        totalProductCost.toFixed(2),
        totalPaidAmount.toFixed(2),
        totalShipping.toFixed(2),
        saleByCash.toFixed(2),
        saleByKhqr.toFixed(2),
        totalProfit.toFixed(2),
        ''
      ]];

      const marginX = 40;
      const rtl =
        (self.$i18n && ['ar','fa','ur','he'].includes(self.$i18n.locale)) ||
        (typeof document !== 'undefined' && document.documentElement.dir === 'rtl');

      autoTable(pdf, {
        head: [headers],
        body: body,
        foot: footer,
        startY: 110,
        theme: 'striped',
        margin: { left: marginX, right: marginX },
        styles: { font: 'Vazirmatn', fontSize: 9, cellPadding: 4, halign: rtl ? 'right' : 'left', textColor: 33 },
        headStyles: { font: 'Vazirmatn', fontStyle: 'bold', fillColor: [26,86,219], textColor: 255 },
        alternateRowStyles: { fillColor: [245,247,250] },
        footStyles: { font: 'Vazirmatn', fontStyle: 'bold', fillColor: [26,86,219], textColor: 255 },
        didDrawPage: (d) => {
          const pageW = pdf.internal.pageSize.getWidth();
          const pageH = pdf.internal.pageSize.getHeight();

          // Header banner
          pdf.setFillColor(26,86,219);
          pdf.rect(0, 0, pageW, 60, 'F');

          // Title
          pdf.setTextColor(255);
          pdf.setFont('Vazirmatn', 'bold');
          pdf.setFontSize(16);
          const title = 'Sales By Seller Report';
          rtl ? pdf.text(title, pageW - marginX, 38, { align: 'right' })
              : pdf.text(title, marginX, 38);

          // Reset text color
          pdf.setTextColor(33);

          // Footer page numbers
          pdf.setFontSize(8);
          const pn = `${d.pageNumber} / ${pdf.internal.getNumberOfPages()}`;
          rtl ? pdf.text(pn, marginX, pageH - 14, { align: 'left' })
              : pdf.text(pn, pageW - marginX, pageH - 14, { align: 'right' });
        }
      });

      pdf.save("Sales_By_Seller_Report.pdf");

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
        .get(
          "/report/sales_by_seller?page=" +
            page +
            "&Ref=" +
            this.Filter_Ref +
            "&client_id=" +
            this.Filter_Client +
            "&warehouse_id=" +
            this.Filter_warehouse +
            "&user_id=" +
            this.Filter_seller +
            "&statut=" +
            this.Filter_status +
            "&payment_statut=" +
            this.Filter_Payment +
            "&SortField=" +
            this.serverParams.sort.field +
            "&SortType=" +
            this.serverParams.sort.type +
            "&search=" +
            this.search +
            "&limit=" +
            this.limit+
            "&to=" +
            this.endDate +
            "&from=" +
            this.startDate
        )
        .then(response => {
          this.sales = response.data.sales;
          this.customers = response.data.customers;
          this.warehouses = response.data.warehouses;
          this.sellers = response.data.sellers;
          this.totalRows = response.data.totalRows;
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
    this.Get_Sales(1);
  }
};
</script>
