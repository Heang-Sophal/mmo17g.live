"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["Inactive_Customers_Report"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/reports/Inactive_Customers_Report.vue?vue&type=script&lang=js":
/*!*********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/reports/Inactive_Customers_Report.vue?vue&type=script&lang=js ***!
  \*********************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! nprogress */ "./node_modules/nprogress/nprogress.js");
/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(nprogress__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }


// axios assumed globally available as in your current code

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  metaInfo: {
    title: "Inactive Customers Report"
  },
  data: function data() {
    return {
      isLoading: true,
      serverParams: {
        sort: {
          field: "days_inactive",
          type: "desc"
        },
        page: 1,
        perPage: 10
      },
      limit: "10",
      search: "",
      totalRows: 0,
      clients: [],
      rows: [{
        total_sales: 'Total',
        children: []
      }],
      // new: period filter
      period: 30,
      periodOptions: [{
        value: 30,
        text: this.$t('Last_30_days')
      }, {
        value: 60,
        text: this.$t('Last_60_days')
      }, {
        value: 90,
        text: this.$t('Last_90_days')
      }]
    };
  },
  computed: _objectSpread(_objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_1__.mapGetters)(["currentUser"])), {}, {
    columns: function columns() {
      return [{
        label: this.$t("CustomerName"),
        field: "name",
        tdClass: "text-left",
        thClass: "text-left",
        sortable: true
      }, {
        label: this.$t("Phone"),
        field: "phone",
        tdClass: "text-left",
        thClass: "text-left",
        sortable: true
      }, {
        label: this.$t("TotalSales"),
        field: "total_sales",
        type: "number",
        headerField: this.sumCountSales,
        // sum total sales in group header
        tdClass: "text-left",
        thClass: "text-left",
        sortable: true
      }, {
        label: this.$t("LastPurchase"),
        field: "last_sale_at",
        tdClass: "text-left",
        thClass: "text-left",
        sortable: true
      }, {
        label: this.$t("DaysInactive"),
        field: "days_inactive",
        type: "number",
        tdClass: "text-left",
        thClass: "text-left",
        sortable: true
      }, {
        label: this.$t("Action"),
        field: "actions",
        tdClass: "text-right",
        thClass: "text-right",
        sortable: false
      }];
    }
  }),
  methods: {
    // --- header aggregator for total_sales
    sumCountSales: function sumCountSales(rowObj) {
      var sum = 0;
      if (!rowObj || !rowObj.children || !Array.isArray(rowObj.children)) return sum;
      for (var i = 0; i < rowObj.children.length; i++) {
        var v = rowObj.children[i].total_sales;
        if (typeof v === 'number') sum += v;
      }
      return sum;
    },
    //--------------------------- Download_PDF (reuse your endpoint) -------------------------------\\
    Download_PDF: function Download_PDF(client, id) {
      nprogress__WEBPACK_IMPORTED_MODULE_0___default().start();
      nprogress__WEBPACK_IMPORTED_MODULE_0___default().set(0.1);
      axios.get("report/client_pdf/" + id, {
        responseType: "blob",
        headers: {
          "Content-Type": "application/json"
        }
      }).then(function (response) {
        var url = window.URL.createObjectURL(new Blob([response.data]));
        var link = document.createElement("a");
        link.href = url;
        link.setAttribute("download", "report-" + client.name + ".pdf");
        document.body.appendChild(link);
        link.click();
        setTimeout(function () {
          return nprogress__WEBPACK_IMPORTED_MODULE_0___default().done();
        }, 500);
      })["catch"](function () {
        return setTimeout(function () {
          return nprogress__WEBPACK_IMPORTED_MODULE_0___default().done();
        }, 500);
      });
    },
    //---- update Params Table
    updateParams: function updateParams(newProps) {
      this.serverParams = Object.assign({}, this.serverParams, newProps);
    },
    //---- Event Page Change
    onPageChange: function onPageChange(_ref) {
      var currentPage = _ref.currentPage;
      if (this.serverParams.page !== currentPage) {
        this.updateParams({
          page: currentPage
        });
        this.Get_Inactive_Customers_Report(currentPage);
      }
    },
    //---- Event Per Page Change
    onPerPageChange: function onPerPageChange(_ref2) {
      var currentPerPage = _ref2.currentPerPage;
      if (this.limit !== currentPerPage) {
        this.limit = currentPerPage;
        this.updateParams({
          page: 1,
          perPage: currentPerPage
        });
        this.Get_Inactive_Customers_Report(1);
      }
    },
    //---- Event on Sort Change
    onSortChange: function onSortChange(params) {
      this.updateParams({
        sort: {
          type: params[0].type,
          field: params[0].field
        }
      });
      this.Get_Inactive_Customers_Report(this.serverParams.page);
    },
    //---- Event on Search
    onSearch: function onSearch(value) {
      this.search = value.searchTerm;
      this.Get_Inactive_Customers_Report(this.serverParams.page);
    },
    //--------------------------- Fetch Inactive Customers -------------------------------\\
    Get_Inactive_Customers_Report: function Get_Inactive_Customers_Report(page) {
      var _this = this;
      nprogress__WEBPACK_IMPORTED_MODULE_0___default().start();
      nprogress__WEBPACK_IMPORTED_MODULE_0___default().set(0.1);
      axios.get("report/inactive_customers" +
      // ⬅️ adjust if your route differs
      "?page=" + page + "&SortField=" + this.serverParams.sort.field + "&SortType=" + this.serverParams.sort.type + "&search=" + encodeURIComponent(this.search || "") + "&limit=" + this.limit + "&period=" + this.period).then(function (response) {
        _this.clients = response.data.report;
        _this.totalRows = response.data.totalRows;
        _this.rows[0].children = _this.clients;
        nprogress__WEBPACK_IMPORTED_MODULE_0___default().done();
        _this.isLoading = false;
      })["catch"](function () {
        nprogress__WEBPACK_IMPORTED_MODULE_0___default().done();
        setTimeout(function () {
          _this.isLoading = false;
        }, 500);
      });
    },
    onPeriodChange: function onPeriodChange() {
      this.updateParams({
        page: 1
      });
      this.Get_Inactive_Customers_Report(1);
    },
    //------ Print Table Only - Print ALL inactive customers data with all columns
    printTableOnly: function printTableOnly() {
      var _this$rows$,
        _this2 = this;
      var title = "".concat(this.$t("Reports"), " / ").concat(this.$t("Inactive_Customers_Report"));
      var clients = Array.isArray((_this$rows$ = this.rows[0]) === null || _this$rows$ === void 0 ? void 0 : _this$rows$.children) ? this.rows[0].children : [];

      // Build table header with all columns (excluding actions)
      var tableHTML = '<table style="width: 100%; border-collapse: collapse; font-size: 10px;">';
      tableHTML += '<thead><tr>';

      // Filter out the actions column for printing
      this.columns.filter(function (col) {
        return col.field !== 'actions';
      }).forEach(function (col) {
        tableHTML += "<th style=\"border: 1px solid #ddd; padding: 6px 8px; background-color: #f5f5f5; font-weight: bold; text-align: left;\">".concat(col.label, "</th>");
      });
      tableHTML += '</tr></thead><tbody>';

      // Build table rows with all data - format each cell according to column type
      clients.forEach(function (client) {
        tableHTML += '<tr>';
        _this2.columns.filter(function (col) {
          return col.field !== 'actions';
        }).forEach(function (col) {
          var cellValue = '';
          if (col.field === 'name') {
            cellValue = client.name || '';
          } else if (col.field === 'phone') {
            cellValue = client.phone || '';
          } else if (col.field === 'total_sales') {
            cellValue = client.total_sales || 0;
          } else if (col.field === 'last_sale_at') {
            cellValue = client.last_sale_at || '—';
          } else if (col.field === 'days_inactive') {
            if (!client.last_sale_at) {
              cellValue = _this2.$t('Never_Purchased') || 'Never Purchased';
            } else {
              cellValue = client.days_inactive || '';
            }
          } else {
            // Default: get value directly from client object
            cellValue = client[col.field] || '';
          }
          tableHTML += "<td style=\"border: 1px solid #ddd; padding: 6px 8px; text-align: left;\">".concat(cellValue, "</td>");
        });
        tableHTML += '</tr>';
      });
      tableHTML += '</tbody></table>';
      var w = window.open("", "_blank");
      if (!w) {
        alert("Please allow popups to print");
        return;
      }
      var links = Array.from(document.querySelectorAll('link[rel="stylesheet"]')).map(function (l) {
        return l.outerHTML;
      }).join("\n");
      var doc = w.document;
      doc.open();
      doc.write("<!doctype html>\n<html>\n  <head>\n    <meta charset=\"utf-8\" />\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\" />\n    <base href=\"".concat(window.location.origin, "/\" />\n    <title>").concat(title, "</title>\n    ").concat(links, "\n    <style>\n      /* Force visibility in print (some global POS print CSS hides body) */\n      @media print { \n        body, body * { visibility: visible !important; }\n        @page { size: A4 landscape; margin: 0.3cm; }\n      }\n      body { margin: 0.3cm; font-family: Arial, sans-serif; }\n      .print-header { font-weight: 600; margin-bottom: 10px; font-size: 14px; }\n      table { width: 100%; border-collapse: collapse; }\n      th, td { border: 1px solid #ddd; padding: 6px 8px; text-align: left; font-size: 10px; }\n      th { background-color: #f5f5f5; font-weight: bold; }\n      tr:nth-child(even) { background-color: #f9f9f9; }\n    </style>\n  </head>\n  <body>\n    <div class=\"print-header\">").concat(title, "</div>\n    ").concat(tableHTML, "\n  </body>\n</html>"));
      doc.close();
      w.focus();
      setTimeout(function () {
        w.print();
        w.close();
      }, 400);
    },
    //------------------------------ Helpers -------------------------\\
    formatNumber: function formatNumber(number, dec) {
      var value = (typeof number === "string" ? number : number.toString()).split(".");
      if (dec <= 0) return value[0];
      var formated = value[1] || "";
      if (formated.length > dec) return "".concat(value[0], ".").concat(formated.substr(0, dec));
      while (formated.length < dec) formated += "0";
      return "".concat(value[0], ".").concat(formated);
    }
  },
  created: function created() {
    this.Get_Inactive_Customers_Report(1);
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/reports/Inactive_Customers_Report.vue?vue&type=template&id=4b97c375":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/reports/Inactive_Customers_Report.vue?vue&type=template&id=4b97c375 ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************/
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
      page: _vm.$t("Inactive_Customers_Report"),
      folder: _vm.$t("Reports")
    }
  }), _vm._v(" "), _vm.isLoading ? _c("div", {
    staticClass: "loading_page spinner spinner-primary mr-3"
  }) : _vm._e(), _vm._v(" "), !_vm.isLoading ? _c("b-card", {
    staticClass: "wrapper"
  }, [_c("div", {
    staticClass: "d-flex align-items-center mb-2"
  }, [_c("label", {
    staticClass: "mb-0 mr-2"
  }, [_vm._v(_vm._s(_vm.$t("Period")) + ":")]), _vm._v(" "), _c("b-form-select", {
    staticClass: "w-auto",
    attrs: {
      options: _vm.periodOptions,
      size: "sm"
    },
    on: {
      change: _vm.onPeriodChange
    },
    model: {
      value: _vm.period,
      callback: function callback($$v) {
        _vm.period = $$v;
      },
      expression: "period"
    }
  })], 1), _vm._v(" "), _c("vue-good-table", {
    attrs: {
      mode: "remote",
      columns: _vm.columns,
      totalRows: _vm.totalRows,
      rows: _vm.rows,
      "group-options": {
        enabled: true,
        headerPosition: "bottom"
      },
      "search-options": {
        placeholder: _vm.$t("Search_this_table"),
        enabled: true
      },
      "pagination-options": {
        enabled: true,
        mode: "records",
        nextLabel: "next",
        prevLabel: "prev"
      },
      styleClass: "tableOne table-hover vgt-table mt-3"
    },
    on: {
      "on-page-change": _vm.onPageChange,
      "on-per-page-change": _vm.onPerPageChange,
      "on-sort-change": _vm.onSortChange,
      "on-search": _vm.onSearch
    },
    scopedSlots: _vm._u([{
      key: "table-row",
      fn: function fn(props) {
        return [props.column.field === "last_sale_at" ? _c("span", [_vm._v("\n          " + _vm._s(props.row.last_sale_at ? props.row.last_sale_at : "—") + "\n        ")]) : props.column.field === "days_inactive" ? _c("span", [!props.row.last_sale_at ? _c("b-badge", {
          attrs: {
            variant: "warning"
          }
        }, [_vm._v("\n            " + _vm._s(_vm.$t("Never_Purchased")) + "\n          ")]) : _c("span", [_vm._v(_vm._s(props.row.days_inactive))])], 1) : props.column.field === "actions" ? _c("span", [_c("router-link", {
          attrs: {
            title: "Report",
            to: "/app/reports/detail_customer/" + props.row.id
          }
        }, [_c("i", {
          staticClass: "i-Eye text-25 text-info"
        })])], 1) : _c("span", [_vm._v("\n          " + _vm._s(props.formattedRow[props.column.field]) + "\n        ")])];
      }
    }], null, false, 1271655972)
  }, [_c("div", {
    staticClass: "mt-2 mb-3",
    attrs: {
      slot: "table-actions"
    },
    slot: "table-actions"
  }, [_c("b-button", {
    attrs: {
      size: "sm",
      variant: "outline-secondary ripple m-1"
    },
    on: {
      click: function click($event) {
        return _vm.printTableOnly();
      }
    }
  }, [_c("i", {
    staticClass: "i-Printer"
  }), _vm._v(" " + _vm._s(_vm.$t("print")) + "\n        ")])], 1)])], 1) : _vm._e()], 1);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./resources/src/views/app/pages/reports/Inactive_Customers_Report.vue":
/*!*****************************************************************************!*\
  !*** ./resources/src/views/app/pages/reports/Inactive_Customers_Report.vue ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Inactive_Customers_Report_vue_vue_type_template_id_4b97c375__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Inactive_Customers_Report.vue?vue&type=template&id=4b97c375 */ "./resources/src/views/app/pages/reports/Inactive_Customers_Report.vue?vue&type=template&id=4b97c375");
/* harmony import */ var _Inactive_Customers_Report_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Inactive_Customers_Report.vue?vue&type=script&lang=js */ "./resources/src/views/app/pages/reports/Inactive_Customers_Report.vue?vue&type=script&lang=js");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Inactive_Customers_Report_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _Inactive_Customers_Report_vue_vue_type_template_id_4b97c375__WEBPACK_IMPORTED_MODULE_0__.render,
  _Inactive_Customers_Report_vue_vue_type_template_id_4b97c375__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) // removed by dead control flow
{ var api; }
component.options.__file = "resources/src/views/app/pages/reports/Inactive_Customers_Report.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/src/views/app/pages/reports/Inactive_Customers_Report.vue?vue&type=script&lang=js":
/*!*****************************************************************************************************!*\
  !*** ./resources/src/views/app/pages/reports/Inactive_Customers_Report.vue?vue&type=script&lang=js ***!
  \*****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Inactive_Customers_Report_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Inactive_Customers_Report.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/reports/Inactive_Customers_Report.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Inactive_Customers_Report_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/src/views/app/pages/reports/Inactive_Customers_Report.vue?vue&type=template&id=4b97c375":
/*!***********************************************************************************************************!*\
  !*** ./resources/src/views/app/pages/reports/Inactive_Customers_Report.vue?vue&type=template&id=4b97c375 ***!
  \***********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Inactive_Customers_Report_vue_vue_type_template_id_4b97c375__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Inactive_Customers_Report_vue_vue_type_template_id_4b97c375__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Inactive_Customers_Report_vue_vue_type_template_id_4b97c375__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Inactive_Customers_Report.vue?vue&type=template&id=4b97c375 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/reports/Inactive_Customers_Report.vue?vue&type=template&id=4b97c375");


/***/ })

}]);