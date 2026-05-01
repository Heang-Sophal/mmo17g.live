"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["CustomerDetails"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/people/CustomerDetails.vue?vue&type=script&lang=js":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/people/CustomerDetails.vue?vue&type=script&lang=js ***!
  \**********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! nprogress */ "./node_modules/nprogress/nprogress.js");
/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(nprogress__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _utils_priceFormat__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../utils/priceFormat */ "./resources/src/utils/priceFormat.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  metaInfo: {
    title: "Customer Details"
  },
  data: function data() {
    return {
      isLoading: true,
      client: {},
      activeTab: 0,
      price_format_key: null,
      // Sales
      sales: [],
      salesLoading: false,
      salesSearch: "",
      salesPage: 1,
      salesLimit: 10,
      salesTotalRows: 0,
      salesFields: [{
        key: "Ref",
        label: this.$t("Ref"),
        sortable: true
      }, {
        key: "date",
        label: this.$t("date"),
        sortable: true
      }, {
        key: "warehouse_name",
        label: this.$t("warehouse"),
        sortable: false
      }, {
        key: "GrandTotal",
        label: this.$t("Grand_Total"),
        sortable: true
      }, {
        key: "paid_amount",
        label: this.$t("Paid"),
        sortable: true
      }, {
        key: "due",
        label: this.$t("Due"),
        sortable: true
      }, {
        key: "payment_status",
        label: this.$t("Payment_Status"),
        sortable: true
      }, {
        key: "statut",
        label: this.$t("Status"),
        sortable: true
      }],
      // Payments
      payments: [],
      paymentsLoading: false,
      paymentsSearch: "",
      paymentsPage: 1,
      paymentsLimit: 10,
      paymentsTotalRows: 0,
      paymentsFields: [{
        key: "Ref",
        label: this.$t("Ref"),
        sortable: true
      }, {
        key: "date",
        label: this.$t("date"),
        sortable: true
      }, {
        key: "payment_type",
        label: this.$t("Type"),
        sortable: false
      }, {
        key: "Sale_Ref",
        label: this.$t("Sale_Ref"),
        sortable: false
      }, {
        key: "payment_method",
        label: this.$t("Payment_Method"),
        sortable: false
      }, {
        key: "montant",
        label: this.$t("Amount"),
        sortable: true
      }],
      // Returns
      returns: [],
      returnsLoading: false,
      returnsSearch: "",
      returnsPage: 1,
      returnsLimit: 10,
      returnsTotalRows: 0,
      returnsFields: [{
        key: "Ref",
        label: this.$t("Ref"),
        sortable: true
      }, {
        key: "date",
        label: this.$t("date"),
        sortable: true
      }, {
        key: "sale_ref",
        label: this.$t("Sale_Ref"),
        sortable: false
      }, {
        key: "warehouse_name",
        label: this.$t("warehouse"),
        sortable: false
      }, {
        key: "GrandTotal",
        label: this.$t("Grand_Total"),
        sortable: true
      }, {
        key: "paid_amount",
        label: this.$t("Paid"),
        sortable: true
      }, {
        key: "due",
        label: this.$t("Due"),
        sortable: true
      }, {
        key: "payment_status",
        label: this.$t("Payment_Status"),
        sortable: true
      }, {
        key: "statut",
        label: this.$t("Status"),
        sortable: true
      }],
      // Payment Returns
      paymentReturns: [],
      paymentReturnsLoading: false,
      paymentReturnsSearch: "",
      paymentReturnsPage: 1,
      paymentReturnsLimit: 10,
      paymentReturnsTotalRows: 0,
      paymentReturnsFields: [{
        key: "Ref",
        label: this.$t("Ref"),
        sortable: true
      }, {
        key: "date",
        label: this.$t("date"),
        sortable: true
      }, {
        key: "Sale_Return_Ref",
        label: this.$t("Sale_Return_Ref"),
        sortable: false
      }, {
        key: "payment_method",
        label: this.$t("Payment_Method"),
        sortable: false
      }, {
        key: "montant",
        label: this.$t("Amount"),
        sortable: true
      }],
      // Payment
      payment: {
        client_id: "",
        client_name: "",
        account_id: "",
        date: "",
        due: "",
        opening_balance: 0,
        amount: "",
        notes: "",
        payment_method_id: ""
      },
      payment_methods: [],
      accounts: [],
      paymentProcessing: false,
      // Custom Fields
      clientCustomFields: [],
      // Company Info for Receipt
      company_info: {}
    };
  },
  computed: _objectSpread(_objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_1__.mapGetters)(["currentUserPermissions", "currentUser"])), {}, {
    salesDue: function salesDue() {
      return this.sales.reduce(function (sum, sale) {
        return sum + (parseFloat(sale.due) || 0);
      }, 0);
    },
    totalDue: function totalDue() {
      // Use payment data if available (for modal display), otherwise use client data (for button visibility)
      if (this.payment.due !== "" && this.payment.due !== null && this.payment.due !== undefined) {
        var openingBalance = parseFloat(this.payment.opening_balance) || 0;
        var salesDue = parseFloat(this.payment.due) || 0;
        return openingBalance + salesDue;
      } else {
        // Use client data for button visibility and display
        var _openingBalance = parseFloat(this.client.opening_balance) || 0;
        return _openingBalance + this.salesDue;
      }
    },
    paymentMethodName: function paymentMethodName() {
      if (!this.payment.payment_method_id || !this.payment_methods.length) {
        return '-';
      }
      var methodId = parseInt(this.payment.payment_method_id);
      var method = this.payment_methods.find(function (m) {
        return parseInt(m.id) === methodId;
      });
      return method ? method.name : '-';
    }
  }),
  methods: {
    // Get Customer Data
    Get_Customer: function Get_Customer() {
      var _this = this;
      nprogress__WEBPACK_IMPORTED_MODULE_0___default().start();
      this.isLoading = true;
      var id = this.$route.params.id;

      // Fetch all data in parallel with error handling for each request
      Promise.allSettled([axios.get("clients/" + id), axios.get("custom-fields?entity_type=client"), axios.get("custom-field-values", {
        params: {
          entity_type: "App\\Models\\Client",
          entity_id: id
        }
      }), axios.get("sales_client?id=".concat(id, "&page=").concat(this.salesPage, "&limit=").concat(this.salesLimit, "&search=").concat(this.salesSearch)), axios.get("payments_client?id=".concat(id, "&page=").concat(this.paymentsPage, "&limit=").concat(this.paymentsLimit, "&search=").concat(this.paymentsSearch)), axios.get("returns_client?id=".concat(id, "&page=").concat(this.returnsPage, "&limit=").concat(this.returnsLimit, "&search=").concat(this.returnsSearch)), axios.get("payment_returns_client?id=".concat(id, "&page=").concat(this.paymentReturnsPage, "&limit=").concat(this.paymentReturnsLimit, "&search=").concat(this.paymentReturnsSearch))]).then(function (results) {
        // Process client data (required)
        if (results[0].status === 'fulfilled' && results[0].value.data.client) {
          _this.client = results[0].value.data.client;
          // Extract payment_methods and accounts from the client response
          _this.payment_methods = results[0].value.data.payment_methods || [];
          _this.accounts = results[0].value.data.accounts || [];
        } else {
          throw new Error('Failed to load client data');
        }

        // Process custom fields (optional)
        if (results[1].status === 'fulfilled' && results[2].status === 'fulfilled') {
          var allFields = results[1].value.data.custom_fields || [];
          var fieldValues = results[2].value.data.success && results[2].value.data.values ? results[2].value.data.values : {};
          _this.clientCustomFields = allFields.map(function (field) {
            var fieldValue = fieldValues[field.id];
            return {
              id: field.id,
              name: field.name,
              field_type: field.field_type,
              value: fieldValue ? fieldValue.value : null
            };
          });
        } else {
          _this.clientCustomFields = [];
          console.error('Error loading custom fields:', results[1].reason || results[2].reason);
        }

        // Process sales data (optional)
        if (results[3].status === 'fulfilled') {
          _this.sales = results[3].value.data.sales || [];
          _this.salesTotalRows = results[3].value.data.totalRows || 0;
        } else {
          _this.sales = [];
          _this.salesTotalRows = 0;
          console.error('Error loading sales:', results[3].reason);
        }
        _this.salesLoading = false;

        // Process payments data (optional)
        if (results[4].status === 'fulfilled') {
          _this.payments = results[4].value.data.payments || [];
          _this.paymentsTotalRows = results[4].value.data.totalRows || 0;
        } else {
          _this.payments = [];
          _this.paymentsTotalRows = 0;
          console.error('Error loading payments:', results[4].reason);
        }
        _this.paymentsLoading = false;

        // Process returns data (optional)
        if (results[5].status === 'fulfilled') {
          _this.returns = results[5].value.data.returns || [];
          _this.returnsTotalRows = results[5].value.data.totalRows || 0;
        } else {
          _this.returns = [];
          _this.returnsTotalRows = 0;
          console.error('Error loading returns:', results[5].reason);
        }
        _this.returnsLoading = false;

        // Process payment returns data (optional)
        if (results[6].status === 'fulfilled') {
          _this.paymentReturns = results[6].value.data.payment_returns || [];
          _this.paymentReturnsTotalRows = results[6].value.data.totalRows || 0;
        } else {
          _this.paymentReturns = [];
          _this.paymentReturnsTotalRows = 0;
          console.error('Error loading payment returns:', results[6].reason);
        }
        _this.paymentReturnsLoading = false;

        // Fetch company info from settings
        axios.get("get_Settings_data").then(function (response) {
          if (response.data && response.data.setting) {
            _this.company_info = {
              CompanyName: response.data.setting.CompanyName || '',
              CompanyAdress: response.data.setting.CompanyAdress || '',
              CompanyPhone: response.data.setting.CompanyPhone || ''
            };
          }
        })["catch"](function () {
          // If settings endpoint fails, use empty values
          _this.company_info = {
            CompanyName: '',
            CompanyAdress: '',
            CompanyPhone: ''
          };
        });
        nprogress__WEBPACK_IMPORTED_MODULE_0___default().done();
        _this.isLoading = false;
      })["catch"](function (error) {
        console.error('Error loading customer data:', error);
        nprogress__WEBPACK_IMPORTED_MODULE_0___default().done();
        _this.isLoading = false;
        _this.makeToast("danger", _this.$t("Failed_to_load_customer"), _this.$t("Failed"));
        setTimeout(function () {
          _this.$router.push({
            name: 'Customers'
          });
        }, 500);
      });
    },
    // Fetch Sales
    fetchSales: function fetchSales() {
      var _this2 = this;
      this.salesLoading = true;
      axios.get("sales_client?id=".concat(this.$route.params.id, "&page=").concat(this.salesPage, "&limit=").concat(this.salesLimit, "&search=").concat(this.salesSearch)).then(function (response) {
        _this2.sales = response.data.sales;
        _this2.salesTotalRows = response.data.totalRows;
        _this2.salesLoading = false;
      })["catch"](function (error) {
        _this2.salesLoading = false;
      });
    },
    // Fetch Payments
    fetchPayments: function fetchPayments() {
      var _this3 = this;
      this.paymentsLoading = true;
      axios.get("payments_client?id=".concat(this.$route.params.id, "&page=").concat(this.paymentsPage, "&limit=").concat(this.paymentsLimit, "&search=").concat(this.paymentsSearch)).then(function (response) {
        _this3.payments = response.data.payments;
        _this3.paymentsTotalRows = response.data.totalRows;
        _this3.paymentsLoading = false;
      })["catch"](function (error) {
        _this3.paymentsLoading = false;
      });
    },
    // Fetch Returns
    fetchReturns: function fetchReturns() {
      var _this4 = this;
      this.returnsLoading = true;
      axios.get("returns_client?id=".concat(this.$route.params.id, "&page=").concat(this.returnsPage, "&limit=").concat(this.returnsLimit, "&search=").concat(this.returnsSearch)).then(function (response) {
        _this4.returns = response.data.returns;
        _this4.returnsTotalRows = response.data.totalRows;
        _this4.returnsLoading = false;
      })["catch"](function (error) {
        _this4.returnsLoading = false;
      });
    },
    // Fetch Payment Returns
    fetchPaymentReturns: function fetchPaymentReturns() {
      var _this5 = this;
      this.paymentReturnsLoading = true;
      // Note: You may need to create this endpoint or use existing one
      axios.get("payment_returns_client?id=".concat(this.$route.params.id, "&page=").concat(this.paymentReturnsPage, "&limit=").concat(this.paymentReturnsLimit, "&search=").concat(this.paymentReturnsSearch)).then(function (response) {
        _this5.paymentReturns = response.data.payment_returns || [];
        _this5.paymentReturnsTotalRows = response.data.totalRows || 0;
        _this5.paymentReturnsLoading = false;
      })["catch"](function (error) {
        _this5.paymentReturnsLoading = false;
      });
    },
    // Get Payment Methods and Accounts (now loaded in Get_Customer)
    Get_Payment_Methods_Accounts: function Get_Payment_Methods_Accounts() {
      // This method is now called within Get_Customer to load all data together
      // Keeping the method for backwards compatibility if needed elsewhere
    },
    // Show Pay Due Modal
    showPayDueModal: function showPayDueModal() {
      var _this6 = this;
      this.reset_Form_payment();
      this.payment.client_id = this.client.id;
      this.payment.client_name = this.client.name;
      this.payment.due = this.salesDue;
      this.payment.opening_balance = this.client.opening_balance || 0;
      this.payment.date = new Date().toISOString().slice(0, 10);
      setTimeout(function () {
        _this6.$bvModal.show("modal_Pay_due");
      }, 500);
    },
    // Submit Payment
    Submit_Payment_sell_due: function Submit_Payment_sell_due() {
      var _this7 = this;
      this.$refs.ref_pay_due.validate().then(function (success) {
        if (!success) {
          _this7.makeToast("danger", _this7.$t("Please_fill_the_form_correctly"), _this7.$t("Failed"));
        } else if (_this7.payment.amount > _this7.totalDue) {
          _this7.makeToast("warning", _this7.$t("Paying_amount_is_greater_than_Total_Due"), _this7.$t("Warning"));
          _this7.payment.amount = 0;
        } else {
          _this7.Submit_Pay_due();
        }
      });
    },
    // Submit Pay Due
    Submit_Pay_due: function Submit_Pay_due() {
      var _this8 = this;
      this.paymentProcessing = true;
      // Store payment data for receipt before closing modal
      var paymentDataForReceipt = {
        client_id: this.payment.client_id,
        client_name: this.payment.client_name,
        account_id: this.payment.account_id,
        date: this.payment.date,
        due: this.payment.due,
        opening_balance: this.payment.opening_balance,
        amount: this.payment.amount,
        notes: this.payment.notes,
        payment_method_id: this.payment.payment_method_id
      };
      axios.post("clients_pay_due", {
        client_id: this.payment.client_id,
        amount: this.payment.amount,
        notes: this.payment.notes,
        payment_method_id: this.payment.payment_method_id,
        account_id: this.payment.account_id
      }).then(function (response) {
        // Update payment object with stored data for receipt
        Object.assign(_this8.payment, paymentDataForReceipt);

        // Close payment modal and show receipt
        _this8.$bvModal.hide("modal_Pay_due");
        setTimeout(function () {
          _this8.$bvModal.show("Show_invoice");
        }, 300);

        // Refresh data without affecting receipt
        _this8.Get_Customer();
        _this8.makeToast("success", _this8.$t("Successfully_Created"), _this8.$t("Success"));
        _this8.paymentProcessing = false;
      })["catch"](function (error) {
        _this8.makeToast("danger", _this8.$t("InvalidData"), _this8.$t("Failed"));
        _this8.paymentProcessing = false;
      });
    },
    // Verified Paid Amount
    Verified_paidAmount: function Verified_paidAmount() {
      if (isNaN(this.payment.amount)) {
        this.payment.amount = 0;
      } else if (this.payment.amount > this.totalDue) {
        this.makeToast("warning", this.$t("Paying_amount_is_greater_than_Total_Due"), this.$t("Warning"));
        this.payment.amount = 0;
      }
    },
    // Reset Form Payment
    reset_Form_payment: function reset_Form_payment() {
      this.payment = {
        client_id: "",
        client_name: "",
        account_id: "",
        date: "",
        due: "",
        opening_balance: 0,
        amount: "",
        notes: "",
        payment_method_id: ""
      };
    },
    // Price formatting using global price settings
    formatPriceDisplay: function formatPriceDisplay(number, dec) {
      try {
        var decimals = Number.isInteger(dec) ? dec : 2;
        var key = this.price_format_key || (0,_utils_priceFormat__WEBPACK_IMPORTED_MODULE_2__.getPriceFormatSetting)({
          store: this.$store
        });
        if (key) {
          this.price_format_key = key;
        }
        var effectiveKey = key || null;
        return (0,_utils_priceFormat__WEBPACK_IMPORTED_MODULE_2__.formatPriceDisplay)(number, decimals, effectiveKey);
      } catch (e) {
        var n = Number(number || 0);
        return n.toLocaleString(undefined, {
          minimumFractionDigits: dec || 2,
          maximumFractionDigits: dec || 2
        });
      }
    },
    formatPriceWithSymbol: function formatPriceWithSymbol(symbol, number, dec) {
      var safeSymbol = symbol || "";
      var value = this.formatPriceDisplay(number, dec);
      return safeSymbol ? "".concat(safeSymbol, " ").concat(value) : value;
    },
    // Fallback simple formatter (kept for non-money cases if needed)
    formatNumber: function formatNumber(value) {
      if (value === null || value === undefined) return '0.00';
      var num = parseFloat(value) || 0;
      return num.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    },
    // Get Payment Status Badge
    getPaymentStatusBadge: function getPaymentStatusBadge(status) {
      var s = (status || '').toLowerCase();
      if (s.includes('paid')) return 'success';
      if (s.includes('partial')) return 'warning';
      if (s.includes('unpaid')) return 'danger';
      return 'secondary';
    },
    // Get Validation State
    getValidationState: function getValidationState(_ref) {
      var dirty = _ref.dirty,
        validated = _ref.validated,
        _ref$valid = _ref.valid,
        valid = _ref$valid === void 0 ? null : _ref$valid;
      return dirty || validated ? valid : null;
    },
    // Make Toast
    makeToast: function makeToast(variant, msg, title) {
      this.$root.$bvToast.toast(msg, {
        title: title,
        variant: variant,
        solid: true
      });
    },
    // Print Receipt
    print_it: function print_it() {
      var divContents = document.getElementById("invoice-POS").innerHTML;
      var a = window.open("", "", "height=500, width=500");
      a.document.write('<link rel="stylesheet" href="/css/pos_print.css"><html>');
      a.document.write("<body >");
      a.document.write(divContents);
      a.document.write("</body></html>");
      a.document.close();
      setTimeout(function () {
        a.print();
      }, 1000);
    },
    // Get Custom Field Display Value
    getCustomFieldDisplayValue: function getCustomFieldDisplayValue(field) {
      if (!field.value && field.value !== 0 && field.value !== false) {
        return '-';
      }
      if (field.field_type === 'checkbox') {
        return field.value === '1' || field.value === 1 || field.value === true ? this.$t('Yes') : this.$t('No');
      }
      return field.value;
    }
  },
  created: function created() {
    this.Get_Customer();
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/people/CustomerDetails.vue?vue&type=template&id=4b97dffe&scoped=true":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/people/CustomerDetails.vue?vue&type=template&id=4b97dffe&scoped=true ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render),
/* harmony export */   staticRenderFns: () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "main-content"
  }, [_c("breadcumb", {
    attrs: {
      page: _vm.$t("Customer_details"),
      folder: _vm.$t("Customers")
    }
  }), _vm._v(" "), _vm.isLoading ? _c("div", {
    staticClass: "full-page-loading"
  }, [_c("div", {
    staticClass: "loading-content"
  }, [_c("div", {
    staticClass: "spinner spinner-primary"
  }), _vm._v(" "), _c("div", {
    staticClass: "loading-text mt-3"
  }, [_vm._v(_vm._s(_vm.$t("Loading")) + "...")])])]) : _vm._e(), _vm._v(" "), _c("div", {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: !_vm.isLoading,
      expression: "!isLoading"
    }]
  }, [_c("b-card", {
    staticClass: "mb-4 shadow-sm"
  }, [_c("b-row", {
    staticClass: "align-items-center"
  }, [_c("b-col", {
    attrs: {
      md: "8"
    }
  }, [_c("h4", {
    staticClass: "mb-2"
  }, [_c("i", {
    staticClass: "i-User mr-2 text-primary"
  }), _vm._v(_vm._s(_vm.client.name))]), _vm._v(" "), _c("div", {
    staticClass: "text-muted"
  }, [_c("span", {
    staticClass: "mr-3"
  }, [_c("strong", [_vm._v(_vm._s(_vm.$t("Code")) + ":")]), _vm._v(" " + _vm._s(_vm.client.code))]), _vm._v(" "), _c("span", {
    staticClass: "mr-3"
  }, [_c("strong", [_vm._v(_vm._s(_vm.$t("Email")) + ":")]), _vm._v(" " + _vm._s(_vm.client.email || "-"))]), _vm._v(" "), _c("span", {
    staticClass: "mr-3"
  }, [_c("strong", [_vm._v(_vm._s(_vm.$t("Phone")) + ":")]), _vm._v(" " + _vm._s(_vm.client.phone || "-"))])]), _vm._v(" "), _c("div", {
    staticClass: "text-muted mt-2"
  }, [_c("span", {
    staticClass: "mr-3"
  }, [_c("strong", [_vm._v(_vm._s(_vm.$t("City")) + ":")]), _vm._v(" " + _vm._s(_vm.client.city || "-"))]), _vm._v(" "), _c("span", {
    staticClass: "mr-3"
  }, [_c("strong", [_vm._v(_vm._s(_vm.$t("Country")) + ":")]), _vm._v(" " + _vm._s(_vm.client.country || "-"))]), _vm._v(" "), _c("span", {
    staticClass: "mr-3"
  }, [_c("strong", [_vm._v(_vm._s(_vm.$t("Tax_Number")) + ":")]), _vm._v(" " + _vm._s(_vm.client.tax_number || "-"))]), _vm._v(" "), _c("span", {
    staticClass: "mr-3"
  }, [_c("strong", [_vm._v(_vm._s(_vm.$t("Credit_Limit")) + ":")]), _vm._v("\n              " + _vm._s(_vm.client.credit_limit && _vm.client.credit_limit > 0 ? _vm.formatPriceWithSymbol(_vm.currentUser.currency, _vm.client.credit_limit, 2) : _vm.$t("No_limit")) + "\n            ")])])]), _vm._v(" "), _c("b-col", {
    staticClass: "text-right",
    attrs: {
      md: "4"
    }
  }, [_c("b-button", {
    staticClass: "mr-2",
    attrs: {
      variant: "secondary"
    },
    on: {
      click: function click($event) {
        return _vm.$router.push({
          name: "Customers"
        });
      }
    }
  }, [_c("i", {
    staticClass: "i-Left mr-1"
  }), _vm._v(" " + _vm._s(_vm.$t("Back")) + "\n          ")]), _vm._v(" "), _vm.totalDue > 0 && _vm.currentUserPermissions && _vm.currentUserPermissions.includes("pay_due") ? _c("b-button", {
    attrs: {
      variant: "primary"
    },
    on: {
      click: _vm.showPayDueModal
    }
  }, [_c("i", {
    staticClass: "i-Dollar mr-1"
  }), _vm._v(" " + _vm._s(_vm.$t("Pay_Due")) + "\n          ")]) : _vm._e()], 1)], 1)], 1), _vm._v(" "), _c("b-row", {
    staticClass: "mb-4"
  }, [_c("b-col", {
    staticClass: "mb-3",
    attrs: {
      lg: "4",
      md: "4",
      sm: "12"
    }
  }, [_c("b-card", {
    staticClass: "text-center shadow-sm border-left-primary h-100",
    "class": {
      "border-left-danger": _vm.client.opening_balance > 0
    }
  }, [_c("div", {
    staticClass: "mb-2"
  }, [_c("i", {
    staticClass: "i-Calendar-4 text-primary",
    staticStyle: {
      "font-size": "2.5rem"
    }
  })]), _vm._v(" "), _c("h6", {
    staticClass: "text-muted mb-2"
  }, [_vm._v(_vm._s(_vm.$t("Opening_Balance")))]), _vm._v(" "), _c("h3", {
    staticClass: "mb-0",
    "class": _vm.client.opening_balance > 0 ? "text-danger font-weight-bold" : "text-success"
  }, [_vm._v("\n            " + _vm._s(_vm.formatPriceWithSymbol(_vm.currentUser.currency, _vm.client.opening_balance || 0, 2)) + "\n          ")]), _vm._v(" "), _c("small", {
    staticClass: "text-muted"
  }, [_vm._v(_vm._s(_vm.$t("Previous_Dues")))])])], 1), _vm._v(" "), _c("b-col", {
    staticClass: "mb-3",
    attrs: {
      lg: "4",
      md: "4",
      sm: "12"
    }
  }, [_c("b-card", {
    staticClass: "text-center shadow-sm border-left-warning h-100",
    "class": {
      "border-left-danger": _vm.salesDue > 0
    }
  }, [_c("div", {
    staticClass: "mb-2"
  }, [_c("i", {
    staticClass: "i-Shopping-Cart text-warning",
    staticStyle: {
      "font-size": "2.5rem"
    }
  })]), _vm._v(" "), _c("h6", {
    staticClass: "text-muted mb-2"
  }, [_vm._v(_vm._s(_vm.$t("Sales_Due")))]), _vm._v(" "), _c("h3", {
    staticClass: "mb-0",
    "class": _vm.salesDue > 0 ? "text-danger font-weight-bold" : "text-success"
  }, [_vm._v("\n            " + _vm._s(_vm.formatPriceWithSymbol(_vm.currentUser.currency, _vm.salesDue, 2)) + "\n          ")]), _vm._v(" "), _c("small", {
    staticClass: "text-muted"
  }, [_vm._v(_vm._s(_vm.$t("Current_Sales")))])])], 1), _vm._v(" "), _c("b-col", {
    staticClass: "mb-3",
    attrs: {
      lg: "4",
      md: "4",
      sm: "12"
    }
  }, [_c("b-card", {
    staticClass: "text-center shadow-sm border-left-info h-100"
  }, [_c("div", {
    staticClass: "mb-2"
  }, [_c("i", {
    staticClass: "i-Credit-Card text-info",
    staticStyle: {
      "font-size": "2.5rem"
    }
  })]), _vm._v(" "), _c("h6", {
    staticClass: "text-muted mb-2"
  }, [_vm._v(_vm._s(_vm.$t("Credit_Limit")))]), _vm._v(" "), _c("h3", {
    staticClass: "mb-0 text-info font-weight-bold"
  }, [_vm._v("\n            " + _vm._s(_vm.client.credit_limit && _vm.client.credit_limit > 0 ? _vm.formatPriceWithSymbol(_vm.currentUser.currency, _vm.client.credit_limit, 2) : _vm.$t("No_limit")) + "\n          ")]), _vm._v(" "), _c("small", {
    staticClass: "text-muted"
  }, [_vm._v(_vm._s(_vm.$t("Maximum_credit_amount_allowed_for_this_customer")))])])], 1)], 1), _vm._v(" "), _c("b-card", {
    staticClass: "shadow-sm"
  }, [_c("b-tabs", {
    attrs: {
      lazy: ""
    },
    model: {
      value: _vm.activeTab,
      callback: function callback($$v) {
        _vm.activeTab = $$v;
      },
      expression: "activeTab"
    }
  }, [_c("b-tab", {
    attrs: {
      title: _vm.$t("Sales")
    }
  }, [_c("div", {
    staticClass: "mb-3"
  }, [_c("b-input-group", [_c("b-form-input", {
    attrs: {
      placeholder: _vm.$t("Search")
    },
    on: {
      input: _vm.fetchSales
    },
    model: {
      value: _vm.salesSearch,
      callback: function callback($$v) {
        _vm.salesSearch = $$v;
      },
      expression: "salesSearch"
    }
  }), _vm._v(" "), _c("b-input-group-append", [_c("b-button", {
    attrs: {
      variant: "primary"
    },
    on: {
      click: _vm.fetchSales
    }
  }, [_vm._v(_vm._s(_vm.$t("Search")))])], 1)], 1)], 1), _vm._v(" "), _c("b-table", {
    attrs: {
      items: _vm.sales,
      fields: _vm.salesFields,
      striped: "",
      hover: "",
      responsive: "",
      busy: _vm.salesLoading
    },
    scopedSlots: _vm._u([{
      key: "table-busy",
      fn: function fn() {
        return [_c("div", {
          staticClass: "text-center text-danger my-2"
        }, [_c("b-spinner", {
          staticClass: "align-middle"
        }), _vm._v(" "), _c("strong", [_vm._v(" Loading...")])], 1)];
      },
      proxy: true
    }, {
      key: "cell(GrandTotal)",
      fn: function fn(_ref) {
        var item = _ref.item;
        return [_vm._v("\n              " + _vm._s(_vm.formatPriceWithSymbol(_vm.currentUser.currency, item.GrandTotal, 2)) + "\n            ")];
      }
    }, {
      key: "cell(paid_amount)",
      fn: function fn(_ref2) {
        var item = _ref2.item;
        return [_vm._v("\n              " + _vm._s(_vm.formatPriceWithSymbol(_vm.currentUser.currency, item.paid_amount, 2)) + "\n            ")];
      }
    }, {
      key: "cell(due)",
      fn: function fn(_ref3) {
        var item = _ref3.item;
        return [_c("span", {
          "class": item.due > 0 ? "text-danger font-weight-bold" : "text-success"
        }, [_vm._v("\n                " + _vm._s(_vm.formatPriceWithSymbol(_vm.currentUser.currency, item.due, 2)) + "\n              ")])];
      }
    }, {
      key: "cell(payment_status)",
      fn: function fn(_ref4) {
        var item = _ref4.item;
        return [_c("b-badge", {
          attrs: {
            variant: _vm.getPaymentStatusBadge(item.payment_status)
          }
        }, [_vm._v("\n                " + _vm._s(item.payment_status) + "\n              ")])];
      }
    }])
  }), _vm._v(" "), _c("b-pagination", {
    staticClass: "mt-3",
    attrs: {
      "total-rows": _vm.salesTotalRows,
      "per-page": _vm.salesLimit
    },
    on: {
      change: _vm.fetchSales
    },
    model: {
      value: _vm.salesPage,
      callback: function callback($$v) {
        _vm.salesPage = $$v;
      },
      expression: "salesPage"
    }
  })], 1), _vm._v(" "), _c("b-tab", {
    attrs: {
      title: _vm.$t("Payments")
    }
  }, [_c("div", {
    staticClass: "mb-3"
  }, [_c("b-input-group", [_c("b-form-input", {
    attrs: {
      placeholder: _vm.$t("Search")
    },
    on: {
      input: _vm.fetchPayments
    },
    model: {
      value: _vm.paymentsSearch,
      callback: function callback($$v) {
        _vm.paymentsSearch = $$v;
      },
      expression: "paymentsSearch"
    }
  }), _vm._v(" "), _c("b-input-group-append", [_c("b-button", {
    attrs: {
      variant: "primary"
    },
    on: {
      click: _vm.fetchPayments
    }
  }, [_vm._v(_vm._s(_vm.$t("Search")))])], 1)], 1)], 1), _vm._v(" "), _c("b-table", {
    attrs: {
      items: _vm.payments,
      fields: _vm.paymentsFields,
      striped: "",
      hover: "",
      responsive: "",
      busy: _vm.paymentsLoading
    },
    scopedSlots: _vm._u([{
      key: "table-busy",
      fn: function fn() {
        return [_c("div", {
          staticClass: "text-center text-danger my-2"
        }, [_c("b-spinner", {
          staticClass: "align-middle"
        }), _vm._v(" "), _c("strong", [_vm._v(" Loading...")])], 1)];
      },
      proxy: true
    }, {
      key: "cell(payment_type)",
      fn: function fn(_ref5) {
        var item = _ref5.item;
        return [item.payment_type === "opening_balance" ? _c("b-badge", {
          attrs: {
            variant: "info"
          }
        }, [_vm._v(_vm._s(_vm.$t("Opening_Balance")))]) : _c("b-badge", {
          attrs: {
            variant: "success"
          }
        }, [_vm._v(_vm._s(_vm.$t("Sale")))])];
      }
    }, {
      key: "cell(Sale_Ref)",
      fn: function fn(_ref6) {
        var item = _ref6.item;
        return [item.Sale_Ref ? _c("span", [_vm._v(_vm._s(item.Sale_Ref))]) : _c("span", {
          staticClass: "text-muted"
        }, [_vm._v("-")])];
      }
    }, {
      key: "cell(montant)",
      fn: function fn(_ref7) {
        var item = _ref7.item;
        return [_c("span", {
          staticClass: "text-success font-weight-bold"
        }, [_vm._v("\n                " + _vm._s(_vm.formatPriceWithSymbol(_vm.currentUser.currency, item.montant, 2)) + "\n              ")])];
      }
    }])
  }), _vm._v(" "), _c("b-pagination", {
    staticClass: "mt-3",
    attrs: {
      "total-rows": _vm.paymentsTotalRows,
      "per-page": _vm.paymentsLimit
    },
    on: {
      change: _vm.fetchPayments
    },
    model: {
      value: _vm.paymentsPage,
      callback: function callback($$v) {
        _vm.paymentsPage = $$v;
      },
      expression: "paymentsPage"
    }
  })], 1), _vm._v(" "), _c("b-tab", {
    attrs: {
      title: _vm.$t("Returns")
    }
  }, [_c("div", {
    staticClass: "mb-3"
  }, [_c("b-input-group", [_c("b-form-input", {
    attrs: {
      placeholder: _vm.$t("Search")
    },
    on: {
      input: _vm.fetchReturns
    },
    model: {
      value: _vm.returnsSearch,
      callback: function callback($$v) {
        _vm.returnsSearch = $$v;
      },
      expression: "returnsSearch"
    }
  }), _vm._v(" "), _c("b-input-group-append", [_c("b-button", {
    attrs: {
      variant: "primary"
    },
    on: {
      click: _vm.fetchReturns
    }
  }, [_vm._v(_vm._s(_vm.$t("Search")))])], 1)], 1)], 1), _vm._v(" "), _c("b-table", {
    attrs: {
      items: _vm.returns,
      fields: _vm.returnsFields,
      striped: "",
      hover: "",
      responsive: "",
      busy: _vm.returnsLoading
    },
    scopedSlots: _vm._u([{
      key: "table-busy",
      fn: function fn() {
        return [_c("div", {
          staticClass: "text-center text-danger my-2"
        }, [_c("b-spinner", {
          staticClass: "align-middle"
        }), _vm._v(" "), _c("strong", [_vm._v(" Loading...")])], 1)];
      },
      proxy: true
    }, {
      key: "cell(GrandTotal)",
      fn: function fn(_ref8) {
        var item = _ref8.item;
        return [_vm._v("\n              " + _vm._s(_vm.formatPriceWithSymbol(_vm.currentUser.currency, item.GrandTotal, 2)) + "\n            ")];
      }
    }, {
      key: "cell(paid_amount)",
      fn: function fn(_ref9) {
        var item = _ref9.item;
        return [_vm._v("\n              " + _vm._s(_vm.formatPriceWithSymbol(_vm.currentUser.currency, item.paid_amount, 2)) + "\n            ")];
      }
    }, {
      key: "cell(due)",
      fn: function fn(_ref0) {
        var item = _ref0.item;
        return [_c("span", {
          "class": item.due > 0 ? "text-warning font-weight-bold" : "text-success"
        }, [_vm._v("\n                " + _vm._s(_vm.formatPriceWithSymbol(_vm.currentUser.currency, item.due, 2)) + "\n              ")])];
      }
    }])
  }), _vm._v(" "), _c("b-pagination", {
    staticClass: "mt-3",
    attrs: {
      "total-rows": _vm.returnsTotalRows,
      "per-page": _vm.returnsLimit
    },
    on: {
      change: _vm.fetchReturns
    },
    model: {
      value: _vm.returnsPage,
      callback: function callback($$v) {
        _vm.returnsPage = $$v;
      },
      expression: "returnsPage"
    }
  })], 1), _vm._v(" "), _c("b-tab", {
    attrs: {
      title: _vm.$t("Payment_Returns")
    }
  }, [_c("div", {
    staticClass: "mb-3"
  }, [_c("b-input-group", [_c("b-form-input", {
    attrs: {
      placeholder: _vm.$t("Search")
    },
    on: {
      input: _vm.fetchPaymentReturns
    },
    model: {
      value: _vm.paymentReturnsSearch,
      callback: function callback($$v) {
        _vm.paymentReturnsSearch = $$v;
      },
      expression: "paymentReturnsSearch"
    }
  }), _vm._v(" "), _c("b-input-group-append", [_c("b-button", {
    attrs: {
      variant: "primary"
    },
    on: {
      click: _vm.fetchPaymentReturns
    }
  }, [_vm._v(_vm._s(_vm.$t("Search")))])], 1)], 1)], 1), _vm._v(" "), _c("b-table", {
    attrs: {
      items: _vm.paymentReturns,
      fields: _vm.paymentReturnsFields,
      striped: "",
      hover: "",
      responsive: "",
      busy: _vm.paymentReturnsLoading
    },
    scopedSlots: _vm._u([{
      key: "table-busy",
      fn: function fn() {
        return [_c("div", {
          staticClass: "text-center text-danger my-2"
        }, [_c("b-spinner", {
          staticClass: "align-middle"
        }), _vm._v(" "), _c("strong", [_vm._v(" Loading...")])], 1)];
      },
      proxy: true
    }, {
      key: "cell(montant)",
      fn: function fn(_ref1) {
        var item = _ref1.item;
        return [_c("span", {
          staticClass: "text-warning font-weight-bold"
        }, [_vm._v("\n                " + _vm._s(_vm.formatPriceWithSymbol(_vm.currentUser.currency, item.montant, 2)) + "\n              ")])];
      }
    }])
  }), _vm._v(" "), _c("b-pagination", {
    staticClass: "mt-3",
    attrs: {
      "total-rows": _vm.paymentReturnsTotalRows,
      "per-page": _vm.paymentReturnsLimit
    },
    on: {
      change: _vm.fetchPaymentReturns
    },
    model: {
      value: _vm.paymentReturnsPage,
      callback: function callback($$v) {
        _vm.paymentReturnsPage = $$v;
      },
      expression: "paymentReturnsPage"
    }
  })], 1)], 1)], 1), _vm._v(" "), _vm.clientCustomFields && _vm.clientCustomFields.length > 0 ? _c("b-card", {
    staticClass: "shadow-sm mt-4"
  }, [_c("h6", {
    staticClass: "text-primary mb-3"
  }, [_c("i", {
    staticClass: "i-Data-Settings mr-2"
  }), _vm._v("\n        " + _vm._s(_vm.$t("CustomFields")) + "\n      ")]), _vm._v(" "), _c("b-row", _vm._l(_vm.clientCustomFields, function (field) {
    return _c("b-col", {
      key: field.id,
      staticClass: "mb-3",
      attrs: {
        md: "6",
        sm: "12"
      }
    }, [_c("div", {
      staticClass: "custom-field-item"
    }, [_c("strong", {
      staticClass: "text-muted d-block mb-1"
    }, [_vm._v(_vm._s(field.name))]), _vm._v(" "), _c("span", {
      staticClass: "d-block"
    }, [_vm._v(_vm._s(_vm.getCustomFieldDisplayValue(field)))])])]);
  }), 1)], 1) : _vm._e()], 1), _vm._v(" "), _c("validation-observer", {
    ref: "ref_pay_due"
  }, [_c("b-modal", {
    attrs: {
      "hide-footer": "",
      size: "lg",
      id: "modal_Pay_due",
      title: "Pay Due"
    }
  }, [_c("b-form", {
    on: {
      submit: function submit($event) {
        $event.preventDefault();
        return _vm.Submit_Payment_sell_due.apply(null, arguments);
      }
    }
  }, [_c("b-row", [_c("b-col", {
    staticClass: "mb-3",
    attrs: {
      lg: "12",
      md: "12",
      sm: "12"
    }
  }, [_c("h5", {
    staticClass: "text-primary"
  }, [_c("i", {
    staticClass: "i-User mr-2"
  }), _vm._v(_vm._s(_vm.client.name))])]), _vm._v(" "), _c("b-col", {
    staticClass: "mb-4",
    attrs: {
      lg: "12",
      md: "12",
      sm: "12"
    }
  }, [_c("b-row", [_c("b-col", {
    staticClass: "mb-3",
    attrs: {
      lg: "4",
      md: "4",
      sm: "12"
    }
  }, [_c("b-card", {
    staticClass: "text-center shadow-sm border-left-primary",
    "class": {
      "border-left-danger": _vm.client.opening_balance > 0
    }
  }, [_c("div", {
    staticClass: "mb-2"
  }, [_c("i", {
    staticClass: "i-Calendar-4 text-primary",
    staticStyle: {
      "font-size": "2rem"
    }
  })]), _vm._v(" "), _c("h6", {
    staticClass: "text-muted mb-2"
  }, [_vm._v(_vm._s(_vm.$t("Opening_Balance")))]), _vm._v(" "), _c("h4", {
    staticClass: "mb-0",
    "class": _vm.client.opening_balance > 0 ? "text-danger font-weight-bold" : "text-success"
  }, [_vm._v("\n                    " + _vm._s(_vm.formatPriceWithSymbol(_vm.currentUser.currency, _vm.client.opening_balance || 0, 2)) + "\n                  ")]), _vm._v(" "), _c("small", {
    staticClass: "text-muted"
  }, [_vm._v(_vm._s(_vm.$t("Previous_Dues")))])])], 1), _vm._v(" "), _c("b-col", {
    staticClass: "mb-3",
    attrs: {
      lg: "4",
      md: "4",
      sm: "12"
    }
  }, [_c("b-card", {
    staticClass: "text-center shadow-sm border-left-warning",
    "class": {
      "border-left-danger": _vm.salesDue > 0
    }
  }, [_c("div", {
    staticClass: "mb-2"
  }, [_c("i", {
    staticClass: "i-Shopping-Cart text-warning",
    staticStyle: {
      "font-size": "2rem"
    }
  })]), _vm._v(" "), _c("h6", {
    staticClass: "text-muted mb-2"
  }, [_vm._v(_vm._s(_vm.$t("Sales_Due")))]), _vm._v(" "), _c("h4", {
    staticClass: "mb-0",
    "class": _vm.salesDue > 0 ? "text-danger font-weight-bold" : "text-success"
  }, [_vm._v("\n                    " + _vm._s(_vm.formatPriceWithSymbol(_vm.currentUser.currency, _vm.salesDue, 2)) + "\n                  ")]), _vm._v(" "), _c("small", {
    staticClass: "text-muted"
  }, [_vm._v(_vm._s(_vm.$t("Current_Sales")))])])], 1), _vm._v(" "), _c("b-col", {
    staticClass: "mb-3",
    attrs: {
      lg: "4",
      md: "4",
      sm: "12"
    }
  }, [_c("b-card", {
    staticClass: "text-center shadow-sm border-left-danger",
    "class": {
      "border-left-success": _vm.totalDue <= 0
    }
  }, [_c("div", {
    staticClass: "mb-2"
  }, [_c("i", {
    staticClass: "i-Money-Bag text-danger",
    staticStyle: {
      "font-size": "2rem"
    }
  })]), _vm._v(" "), _c("h6", {
    staticClass: "text-muted mb-2"
  }, [_vm._v(_vm._s(_vm.$t("Total_Due")))]), _vm._v(" "), _c("h4", {
    staticClass: "mb-0 font-weight-bold",
    "class": _vm.totalDue > 0 ? "text-danger" : "text-success"
  }, [_vm._v("\n                    " + _vm._s(_vm.formatPriceWithSymbol(_vm.currentUser.currency, _vm.totalDue, 2)) + "\n                  ")]), _vm._v(" "), _c("small", {
    staticClass: "text-muted"
  }, [_vm._v(_vm._s(_vm.$t("Grand_Total")))])])], 1)], 1)], 1), _vm._v(" "), _c("b-col", {
    staticClass: "mb-3",
    attrs: {
      lg: "12",
      md: "12",
      sm: "12"
    }
  }, [_c("b-alert", {
    staticClass: "mb-0",
    attrs: {
      variant: "info",
      show: ""
    }
  }, [_c("div", {
    staticClass: "d-flex align-items-center"
  }, [_c("i", {
    staticClass: "i-Information mr-2",
    staticStyle: {
      "font-size": "1.5rem"
    }
  }), _vm._v(" "), _c("div", [_c("strong", [_vm._v(_vm._s(_vm.$t("Payment_Allocation")) + ":")]), _vm._v(" " + _vm._s(_vm.$t("Payment_Allocation_description")) + "\n                ")])])])], 1), _vm._v(" "), _c("b-col", {
    staticClass: "mt-3",
    attrs: {
      lg: "12",
      md: "12",
      sm: "12"
    }
  }, [_c("validation-provider", {
    attrs: {
      name: "Amount",
      rules: {
        required: true,
        regex: /^\d*\.?\d*$/
      }
    },
    scopedSlots: _vm._u([{
      key: "default",
      fn: function fn(validationContext) {
        return [_c("b-form-group", {
          attrs: {
            label: _vm.$t("Paying_Amount") + " " + "*"
          }
        }, [_c("b-form-input", {
          attrs: {
            label: "Amount",
            placeholder: _vm.$t("Paying_Amount"),
            state: _vm.getValidationState(validationContext),
            "aria-describedby": "Amount-feedback"
          },
          on: {
            keyup: function keyup($event) {
              return _vm.Verified_paidAmount(_vm.payment.amount);
            }
          },
          model: {
            value: _vm.payment.amount,
            callback: function callback($$v) {
              _vm.$set(_vm.payment, "amount", _vm._n($$v));
            },
            expression: "payment.amount"
          }
        }), _vm._v(" "), _c("b-form-invalid-feedback", {
          attrs: {
            id: "Amount-feedback"
          }
        }, [_vm._v(_vm._s(validationContext.errors[0]))]), _vm._v(" "), _c("small", {
          staticClass: "text-muted mt-1 d-block"
        }, [_vm._v("\n                  " + _vm._s(_vm.$t("Maximum_payment")) + ": "), _c("strong", [_vm._v(_vm._s(_vm.formatPriceWithSymbol(_vm.currentUser.currency, _vm.totalDue, 2)))])])], 1)];
      }
    }])
  })], 1), _vm._v(" "), _c("b-col", {
    attrs: {
      lg: "12",
      md: "12",
      sm: "12"
    }
  }, [_c("validation-provider", {
    attrs: {
      name: "Payment choice",
      rules: {
        required: true
      }
    },
    scopedSlots: _vm._u([{
      key: "default",
      fn: function fn(_ref10) {
        var valid = _ref10.valid,
          errors = _ref10.errors;
        return _c("b-form-group", {
          attrs: {
            label: _vm.$t("Paymentchoice") + " " + "*"
          }
        }, [_c("v-select", {
          "class": {
            "is-invalid": !!errors.length
          },
          attrs: {
            state: errors[0] ? false : valid ? true : null,
            reduce: function reduce(label) {
              return label.value;
            },
            placeholder: _vm.$t("PleaseSelect"),
            options: _vm.payment_methods.map(function (payment_methods) {
              return {
                label: payment_methods.name,
                value: payment_methods.id
              };
            })
          },
          model: {
            value: _vm.payment.payment_method_id,
            callback: function callback($$v) {
              _vm.$set(_vm.payment, "payment_method_id", $$v);
            },
            expression: "payment.payment_method_id"
          }
        }), _vm._v(" "), _c("b-form-invalid-feedback", [_vm._v(_vm._s(errors[0]))])], 1);
      }
    }])
  })], 1), _vm._v(" "), _c("b-col", {
    attrs: {
      lg: "12",
      md: "6",
      sm: "12"
    }
  }, [_c("validation-provider", {
    attrs: {
      name: "Account"
    },
    scopedSlots: _vm._u([{
      key: "default",
      fn: function fn(_ref11) {
        var valid = _ref11.valid,
          errors = _ref11.errors;
        return _c("b-form-group", {
          attrs: {
            label: _vm.$t("Account")
          }
        }, [_c("v-select", {
          "class": {
            "is-invalid": !!errors.length
          },
          attrs: {
            state: errors[0] ? false : valid ? true : null,
            reduce: function reduce(label) {
              return label.value;
            },
            placeholder: _vm.$t("Choose_Account"),
            options: _vm.accounts.map(function (accounts) {
              return {
                label: accounts.account_name,
                value: accounts.id
              };
            })
          },
          model: {
            value: _vm.payment.account_id,
            callback: function callback($$v) {
              _vm.$set(_vm.payment, "account_id", $$v);
            },
            expression: "payment.account_id"
          }
        }), _vm._v(" "), _c("b-form-invalid-feedback", [_vm._v(_vm._s(errors[0]))])], 1);
      }
    }])
  })], 1), _vm._v(" "), _c("b-col", {
    staticClass: "mt-3",
    attrs: {
      lg: "12",
      md: "12",
      sm: "12"
    }
  }, [_c("b-form-group", {
    attrs: {
      label: _vm.$t("Please_provide_any_details")
    }
  }, [_c("b-form-textarea", {
    attrs: {
      id: "textarea",
      rows: "3",
      "max-rows": "6"
    },
    model: {
      value: _vm.payment.notes,
      callback: function callback($$v) {
        _vm.$set(_vm.payment, "notes", $$v);
      },
      expression: "payment.notes"
    }
  })], 1)], 1), _vm._v(" "), _c("b-col", {
    staticClass: "mt-3",
    attrs: {
      md: "12"
    }
  }, [_c("b-button", {
    attrs: {
      variant: "primary",
      type: "submit",
      disabled: _vm.paymentProcessing
    }
  }, [_c("i", {
    staticClass: "i-Yes me-2 font-weight-bold"
  }), _vm._v(" " + _vm._s(_vm.$t("submit")))]), _vm._v(" "), _vm.paymentProcessing ? _vm._m(0) : _vm._e()], 1)], 1)], 1)], 1)], 1), _vm._v(" "), _c("b-modal", {
    attrs: {
      "hide-footer": "",
      size: "sm",
      scrollable: "",
      id: "Show_invoice",
      title: _vm.$t("Customer_Credit_Note")
    }
  }, [_c("div", {
    attrs: {
      id: "invoice-POS"
    }
  }, [_c("div", {
    staticStyle: {
      "max-width": "400px",
      margin: "0px auto"
    }
  }, [_c("div", {
    staticClass: "info"
  }, [_c("h2", {
    staticClass: "text-center"
  }, [_vm._v(_vm._s(_vm.company_info.CompanyName))]), _vm._v(" "), _c("p", [_c("span", [_vm._v(_vm._s(_vm.$t("date")) + " : " + _vm._s(_vm.payment.date) + " "), _c("br")]), _vm._v(" "), _c("span", [_vm._v(_vm._s(_vm.$t("Adress")) + " : " + _vm._s(_vm.company_info.CompanyAdress) + " "), _c("br")]), _vm._v(" "), _c("span", [_vm._v(_vm._s(_vm.$t("Phone")) + " : " + _vm._s(_vm.company_info.CompanyPhone) + " "), _c("br")]), _vm._v(" "), _c("span", [_vm._v(_vm._s(_vm.$t("Customer")) + " : " + _vm._s(_vm.payment.client_name) + " "), _c("br")])])]), _vm._v(" "), _c("table", {
    staticClass: "change mt-3",
    staticStyle: {
      "font-size": "10px",
      width: "100%"
    }
  }, [_c("tbody", [_c("tr", [_c("th", {
    staticStyle: {
      "text-align": "left",
      background: "#eee",
      width: "50%"
    }
  }, [_vm._v(_vm._s(_vm.$t("Payment_Method")) + ":")]), _vm._v(" "), _c("td", {
    staticStyle: {
      "text-align": "right",
      width: "50%"
    }
  }, [_vm._v(_vm._s(_vm.paymentMethodName))])]), _vm._v(" "), _c("tr", [_c("th", {
    staticStyle: {
      "text-align": "left",
      background: "#eee"
    }
  }, [_vm._v(_vm._s(_vm.$t("Amount")) + ":")]), _vm._v(" "), _c("td", {
    staticStyle: {
      "text-align": "right"
    }
  }, [_vm._v(_vm._s(_vm.formatPriceWithSymbol(_vm.currentUser.currency, _vm.payment.amount, 2)))])]), _vm._v(" "), _c("tr", [_c("th", {
    staticStyle: {
      "text-align": "left",
      background: "#eee"
    }
  }, [_vm._v(_vm._s(_vm.$t("Due_Before")) + ":")]), _vm._v(" "), _c("td", {
    staticStyle: {
      "text-align": "right"
    }
  }, [_vm._v(_vm._s(_vm.formatPriceWithSymbol(_vm.currentUser.currency, _vm.totalDue, 2)))])]), _vm._v(" "), _c("tr", [_c("th", {
    staticStyle: {
      "text-align": "left",
      background: "#eee"
    }
  }, [_vm._v(_vm._s(_vm.$t("Due_After")) + ":")]), _vm._v(" "), _c("td", {
    staticStyle: {
      "text-align": "right"
    }
  }, [_vm._v(_vm._s(_vm.formatPriceWithSymbol(_vm.currentUser.currency, _vm.totalDue - (parseFloat(_vm.payment.amount) || 0), 2)))])])])])])]), _vm._v(" "), _c("button", {
    staticClass: "btn btn-outline-primary",
    on: {
      click: function click($event) {
        return _vm.print_it();
      }
    }
  }, [_c("i", {
    staticClass: "i-Billing"
  }), _vm._v("\n      " + _vm._s(_vm.$t("print")) + "\n    ")])])], 1);
};
var staticRenderFns = [function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "typo__p"
  }, [_c("div", {
    staticClass: "spinner sm spinner-primary mt-3"
  })]);
}];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-8.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-8.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/people/CustomerDetails.vue?vue&type=style&index=0&id=4b97dffe&scoped=true&lang=css":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-8.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-8.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/people/CustomerDetails.vue?vue&type=style&index=0&id=4b97dffe&scoped=true&lang=css ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n.border-left-primary[data-v-4b97dffe] {\n  border-left: 4px solid #007bff !important;\n}\n.border-left-warning[data-v-4b97dffe] {\n  border-left: 4px solid #ffc107 !important;\n}\n.border-left-danger[data-v-4b97dffe] {\n  border-left: 4px solid #dc3545 !important;\n}\n.border-left-success[data-v-4b97dffe] {\n  border-left: 4px solid #28a745 !important;\n}\n.shadow-sm[data-v-4b97dffe] {\n  box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.075) !important;\n}\n.card[data-v-4b97dffe] {\n  transition: transform 0.2s;\n}\n.card[data-v-4b97dffe]:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15) !important;\n}\n.custom-field-item[data-v-4b97dffe] {\n  padding: 0.75rem;\n  background-color: #f8f9fa;\n  border-radius: 0.25rem;\n  border-left: 3px solid #007bff;\n}\n.custom-field-item strong[data-v-4b97dffe] {\n  font-size: 0.875rem;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.custom-field-item span[data-v-4b97dffe] {\n  font-size: 1rem;\n  color: #212529;\n  font-weight: 500;\n}\n\n/* Full Page Loading Overlay */\n.full-page-loading[data-v-4b97dffe] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background: rgba(255, 255, 255, 0.95);\n  z-index: 9999;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  backdrop-filter: blur(2px);\n}\n.loading-content[data-v-4b97dffe] {\n  text-align: center;\n}\n.loading-text[data-v-4b97dffe] {\n  color: #6b7280;\n  font-size: 16px;\n  font-weight: 500;\n}\n.full-page-loading .spinner[data-v-4b97dffe] {\n  width: 50px;\n  height: 50px;\n  border-width: 4px;\n}\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join("");
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === "string") {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, ""]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-8.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-8.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/people/CustomerDetails.vue?vue&type=style&index=0&id=4b97dffe&scoped=true&lang=css":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-8.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-8.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/people/CustomerDetails.vue?vue&type=style&index=0&id=4b97dffe&scoped=true&lang=css ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_8_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_8_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CustomerDetails_vue_vue_type_style_index_0_id_4b97dffe_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-8.use[1]!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-8.use[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./CustomerDetails.vue?vue&type=style&index=0&id=4b97dffe&scoped=true&lang=css */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-8.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-8.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/people/CustomerDetails.vue?vue&type=style&index=0&id=4b97dffe&scoped=true&lang=css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_8_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_8_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CustomerDetails_vue_vue_type_style_index_0_id_4b97dffe_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_8_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_8_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CustomerDetails_vue_vue_type_style_index_0_id_4b97dffe_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : 0;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && typeof btoa !== 'undefined') {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./resources/src/utils/priceFormat.js":
/*!********************************************!*\
  !*** ./resources/src/utils/priceFormat.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PRICE_FORMATS: () => (/* binding */ PRICE_FORMATS),
/* harmony export */   cachePriceFormat: () => (/* binding */ cachePriceFormat),
/* harmony export */   formatPriceDisplay: () => (/* binding */ formatPriceDisplay),
/* harmony export */   getPriceFormatSetting: () => (/* binding */ getPriceFormatSetting),
/* harmony export */   normalizePriceFormatKey: () => (/* binding */ normalizePriceFormatKey)
/* harmony export */ });
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
// Price formatting helper for frontend display (e.g., POS)
// This helper is purely presentational and does NOT affect calculations or stored values.

// Internal map of supported formats:
// - 'comma_dot'   => 1,234.56 (thousand ',', decimal '.')
// - 'dot_comma'   => 1.234,56 (thousand '.', decimal ',')
// - 'space_comma' => 1 234,56 (thousand ' ', decimal ',')
var PRICE_FORMATS = {
  comma_dot: {
    thousands: ',',
    decimal: '.'
  },
  dot_comma: {
    thousands: '.',
    decimal: ','
  },
  space_comma: {
    thousands: ' ',
    decimal: ','
  }
};

// Normalize a stored value/label into one of our internal keys
function normalizePriceFormatKey(input) {
  if (!input) return null;
  var raw = String(input).trim();

  // Direct key
  if (PRICE_FORMATS[raw]) {
    return raw;
  }

  // Allow matching by exact label text (for safety if something stored the label)
  var labelMap = {
    "1,234.56 (thousand , decimal .)": "comma_dot",
    "1.234,56 (thousand . decimal ,)": "dot_comma",
    "1 234,56 (thousand space, decimal ,)": "space_comma"
  };
  if (labelMap[raw]) {
    return labelMap[raw];
  }
  return null;
}

// Format a numeric value according to the selected price format.
// - value: number or numeric-like
// - decimals: integer number of decimal places
// - formatKey: one of PRICE_FORMATS keys or label text; if falsy/unknown, falls back to legacy formatting
function formatPriceDisplay(value) {
  var decimals = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 2;
  var formatKey = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
  var d = Number.isInteger(decimals) ? decimals : 0;
  var n = Number(value);
  var safe = Number.isFinite(n) ? n : 0;
  var key = normalizePriceFormatKey(formatKey);

  // Fallback: keep current/default behavior (en-US locale style)
  if (!key) {
    try {
      return safe.toLocaleString('en-US', {
        minimumFractionDigits: d,
        maximumFractionDigits: d
      });
    } catch (e) {
      var _fixed = safe.toFixed(d);
      var parts = _fixed.split('.');
      var _intPart = parts[0];
      var _fracPart = parts[1] || '';
      var withCommas = _intPart.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
      return d > 0 ? "".concat(withCommas, ".").concat(_fracPart) : withCommas;
    }
  }
  var cfg = PRICE_FORMATS[key];
  var fixed = safe.toFixed(d);
  var _fixed$split = fixed.split('.'),
    _fixed$split2 = _slicedToArray(_fixed$split, 2),
    intPart = _fixed$split2[0],
    _fixed$split2$ = _fixed$split2[1],
    fracPart = _fixed$split2$ === void 0 ? '' : _fixed$split2$;

  // Thousands grouping
  var re = /\B(?=(\d{3})+(?!\d))/g;
  intPart = intPart.replace(re, cfg.thousands);
  if (d <= 0) {
    return intPart;
  }
  if (fracPart.length < d) {
    fracPart = fracPart.padEnd(d, '0');
  }
  return "".concat(intPart).concat(cfg.decimal).concat(fracPart);
}

// Get the selected price format from:
// - explicit settings object (preferred)
// - Vuex store getter (getPriceFormat) - from get_user_auth API
// This helper never throws; it returns null if no valid format is found.
function getPriceFormatSetting() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
    _ref$settings = _ref.settings,
    settings = _ref$settings === void 0 ? null : _ref$settings,
    _ref$store = _ref.store,
    store = _ref$store === void 0 ? null : _ref$store;
  // 1) Explicit settings object (e.g., System Settings API payload)
  if (settings && settings.price_format) {
    var key = normalizePriceFormatKey(settings.price_format);
    if (key) {
      return key;
    }
  }

  // 2) Vuex store getter (from get_user_auth API)
  if (store && _typeof(store.getters) === 'object' && store.getters.getPriceFormat) {
    try {
      var priceFormat = store.getters.getPriceFormat;
      var _key = normalizePriceFormatKey(priceFormat);
      if (_key) {
        return _key;
      }
    } catch (e) {
      // ignore
    }
  }

  // No valid setting => use default behavior (caller should treat null as "legacy" formatting)
  return null;
}

// Cache a selected price format key into localStorage for quick frontend access
function cachePriceFormat(formatKey) {
  var key = normalizePriceFormatKey(formatKey);
  if (!key) return;
  if (typeof window === 'undefined' || !window.localStorage) return;
  try {
    window.localStorage.setItem('app_price_format', key);
  } catch (e) {
    // ignore quota or storage errors
  }
}

/***/ }),

/***/ "./resources/src/views/app/pages/people/CustomerDetails.vue":
/*!******************************************************************!*\
  !*** ./resources/src/views/app/pages/people/CustomerDetails.vue ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _CustomerDetails_vue_vue_type_template_id_4b97dffe_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CustomerDetails.vue?vue&type=template&id=4b97dffe&scoped=true */ "./resources/src/views/app/pages/people/CustomerDetails.vue?vue&type=template&id=4b97dffe&scoped=true");
/* harmony import */ var _CustomerDetails_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CustomerDetails.vue?vue&type=script&lang=js */ "./resources/src/views/app/pages/people/CustomerDetails.vue?vue&type=script&lang=js");
/* harmony import */ var _CustomerDetails_vue_vue_type_style_index_0_id_4b97dffe_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./CustomerDetails.vue?vue&type=style&index=0&id=4b97dffe&scoped=true&lang=css */ "./resources/src/views/app/pages/people/CustomerDetails.vue?vue&type=style&index=0&id=4b97dffe&scoped=true&lang=css");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _CustomerDetails_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _CustomerDetails_vue_vue_type_template_id_4b97dffe_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render,
  _CustomerDetails_vue_vue_type_template_id_4b97dffe_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "4b97dffe",
  null
  
)

/* hot reload */
if (false) // removed by dead control flow
{ var api; }
component.options.__file = "resources/src/views/app/pages/people/CustomerDetails.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/src/views/app/pages/people/CustomerDetails.vue?vue&type=script&lang=js":
/*!******************************************************************************************!*\
  !*** ./resources/src/views/app/pages/people/CustomerDetails.vue?vue&type=script&lang=js ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CustomerDetails_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./CustomerDetails.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/people/CustomerDetails.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CustomerDetails_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/src/views/app/pages/people/CustomerDetails.vue?vue&type=style&index=0&id=4b97dffe&scoped=true&lang=css":
/*!**************************************************************************************************************************!*\
  !*** ./resources/src/views/app/pages/people/CustomerDetails.vue?vue&type=style&index=0&id=4b97dffe&scoped=true&lang=css ***!
  \**************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_8_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_8_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CustomerDetails_vue_vue_type_style_index_0_id_4b97dffe_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/style-loader/dist/cjs.js!../../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-8.use[1]!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-8.use[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./CustomerDetails.vue?vue&type=style&index=0&id=4b97dffe&scoped=true&lang=css */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-8.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-8.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/people/CustomerDetails.vue?vue&type=style&index=0&id=4b97dffe&scoped=true&lang=css");


/***/ }),

/***/ "./resources/src/views/app/pages/people/CustomerDetails.vue?vue&type=template&id=4b97dffe&scoped=true":
/*!************************************************************************************************************!*\
  !*** ./resources/src/views/app/pages/people/CustomerDetails.vue?vue&type=template&id=4b97dffe&scoped=true ***!
  \************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CustomerDetails_vue_vue_type_template_id_4b97dffe_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CustomerDetails_vue_vue_type_template_id_4b97dffe_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CustomerDetails_vue_vue_type_template_id_4b97dffe_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./CustomerDetails.vue?vue&type=template&id=4b97dffe&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/people/CustomerDetails.vue?vue&type=template&id=4b97dffe&scoped=true");


/***/ })

}]);