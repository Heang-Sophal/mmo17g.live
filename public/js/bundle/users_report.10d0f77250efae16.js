"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["users_report"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/reports/users_report.vue?vue&type=script&lang=js":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/reports/users_report.vue?vue&type=script&lang=js ***!
  \********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! nprogress */ "./node_modules/nprogress/nprogress.js");
/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(nprogress__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  metaInfo: {
    title: "Report Users"
  },
  data: function data() {
    return {
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
      users: [],
      rows: [{
        statut: '',
        children: []
      }],
      user: {}
    };
  },
  computed: {
    columns: function columns() {
      return [{
        label: this.$t("username"),
        field: "username",
        tdClass: "text-left",
        thClass: "text-left"
      }, {
        label: this.$t("TotalSales"),
        field: "total_sales",
        headerField: this.sumTotalSales,
        tdClass: "text-left",
        thClass: "text-left",
        sortable: false
      }, {
        label: this.$t("TotalPurchases"),
        field: "total_purchases",
        headerField: this.sumTotalPurchases,
        tdClass: "text-left",
        thClass: "text-left",
        sortable: false
      }, {
        label: this.$t("Total_quotations"),
        field: "total_quotations",
        headerField: this.sumTotalQuotations,
        tdClass: "text-left",
        thClass: "text-left",
        sortable: false
      }, {
        label: this.$t("Total_return_sales"),
        field: "total_return_sales",
        headerField: this.sumTotalReturnSales,
        tdClass: "text-left",
        thClass: "text-left",
        sortable: false
      }, {
        label: this.$t("Total_return_purchases"),
        field: "total_return_purchases",
        headerField: this.sumTotalReturnPurchases,
        tdClass: "text-left",
        thClass: "text-left",
        sortable: false
      }, {
        label: this.$t("Total_transfers"),
        field: "total_transfers",
        headerField: this.sumTotalTransfers,
        tdClass: "text-left",
        thClass: "text-left",
        sortable: false
      }, {
        label: this.$t("Total_adjustments"),
        field: "total_adjustments",
        headerField: this.sumTotalAdjustments,
        tdClass: "text-left",
        thClass: "text-left",
        sortable: false
      }, {
        label: this.$t("Action"),
        field: "actions",
        tdClass: "text-right",
        thClass: "text-right",
        sortable: false
      }];
    }
  },
  methods: {
    //------ Print Table Only
    printTableOnly: function printTableOnly() {
      var _this = this;
      var root = this.$el;
      if (!root) {
        window.print();
        return;
      }
      var tableCard = root.querySelector(".print-table-only");
      if (!tableCard) {
        window.print();
        return;
      }

      // Get rows data from grouped structure
      var rowsData = this.rows && this.rows[0] && this.rows[0].children ? this.rows[0].children : this.users || [];

      // Manually construct the table HTML from rows data
      var tableHtml = "<table class=\"vgt-table table table-hover tableOne\">";

      // Table Header (excluding 'actions' column)
      tableHtml += "<thead><tr>";
      this.columns.filter(function (col) {
        return col.field !== 'actions';
      }).forEach(function (col) {
        tableHtml += "<th class=\"text-left\">".concat(col.label, "</th>");
      });
      tableHtml += "</tr></thead>";

      // Table Body
      tableHtml += "<tbody>";
      rowsData.forEach(function (row) {
        tableHtml += "<tr>";
        _this.columns.filter(function (col) {
          return col.field !== 'actions';
        }).forEach(function (col) {
          var cellContent = row[col.field] || '';
          tableHtml += "<td class=\"text-left\">".concat(cellContent, "</td>");
        });
        tableHtml += "</tr>";
      });
      tableHtml += "</tbody>";

      // Table Footer (Totals)
      var totalSales = rowsData.reduce(function (sum, row) {
        return sum + parseFloat(row.total_sales || 0);
      }, 0);
      var totalPurchases = rowsData.reduce(function (sum, row) {
        return sum + parseFloat(row.total_purchases || 0);
      }, 0);
      var totalQuotations = rowsData.reduce(function (sum, row) {
        return sum + parseFloat(row.total_quotations || 0);
      }, 0);
      var totalReturnSales = rowsData.reduce(function (sum, row) {
        return sum + parseFloat(row.total_return_sales || 0);
      }, 0);
      var totalReturnPurchases = rowsData.reduce(function (sum, row) {
        return sum + parseFloat(row.total_return_purchases || 0);
      }, 0);
      var totalTransfers = rowsData.reduce(function (sum, row) {
        return sum + parseFloat(row.total_transfers || 0);
      }, 0);
      var totalAdjustments = rowsData.reduce(function (sum, row) {
        return sum + parseFloat(row.total_adjustments || 0);
      }, 0);
      tableHtml += "<tfoot><tr>";
      tableHtml += "<td class=\"text-left font-weight-bold\">".concat(this.$t('Total'), "</td>");
      tableHtml += "<td class=\"text-left font-weight-bold\">".concat(totalSales.toLocaleString(), "</td>");
      tableHtml += "<td class=\"text-left font-weight-bold\">".concat(totalPurchases.toLocaleString(), "</td>");
      tableHtml += "<td class=\"text-left font-weight-bold\">".concat(totalQuotations.toLocaleString(), "</td>");
      tableHtml += "<td class=\"text-left font-weight-bold\">".concat(totalReturnSales.toLocaleString(), "</td>");
      tableHtml += "<td class=\"text-left font-weight-bold\">".concat(totalReturnPurchases.toLocaleString(), "</td>");
      tableHtml += "<td class=\"text-left font-weight-bold\">".concat(totalTransfers.toLocaleString(), "</td>");
      tableHtml += "<td class=\"text-left font-weight-bold\">".concat(totalAdjustments.toLocaleString(), "</td>");
      tableHtml += "</tr></tfoot>";
      tableHtml += "</table>";
      var w = window.open("", "_blank");
      if (!w) {
        window.print();
        return;
      }
      var title = "".concat(this.$t("Reports"), " / ").concat(this.$t("Users_Report"));
      var links = Array.from(document.querySelectorAll('link[rel="stylesheet"]')).map(function (l) {
        return l.outerHTML;
      }).join("\n");
      var inlineStyles = Array.from(document.querySelectorAll("style")).filter(function (s) {
        return !(s.textContent || "").includes("@media print");
      }).map(function (s) {
        return s.outerHTML;
      }).join("\n");
      var doc = w.document;
      doc.open();
      doc.write("<!doctype html>\n<html>\n  <head>\n    <meta charset=\"utf-8\" />\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\" />\n    <base href=\"".concat(window.location.origin, "/\" />\n    <title>").concat(title, "</title>\n    ").concat(links, "\n    ").concat(inlineStyles, "\n    <style>\n      @media print { body, body * { visibility: visible !important; } }\n      body { margin: 0.3cm; }\n      .print-header { font-weight: 600; margin-bottom: 8px; }\n      table { width: 100%; border-collapse: collapse; }\n      th, td { border: 1px solid #ddd; padding: 8px; text-align: left; }\n      th { background-color: #f2f2f2; }\n      @page { size: A4 landscape; }\n    </style>\n  </head>\n  <body>\n    <div class=\"print-header\">").concat(title, "</div>\n    ").concat(tableHtml, "\n  </body>\n</html>"));
      doc.close();
      w.focus();
      setTimeout(function () {
        w.print();
        w.close();
      }, 400);
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
        this.Get_Users_Report(currentPage);
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
        this.Get_Users_Report(1);
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
      this.Get_Users_Report(this.serverParams.page);
    },
    //---- Event on Search
    onSearch: function onSearch(value) {
      this.search = value.searchTerm;
      this.Get_Users_Report(this.serverParams.page);
    },
    //------------------------------Formetted Numbers -------------------------\\
    formatNumber: function formatNumber(number, dec) {
      var value = (typeof number === "string" ? number : number.toString()).split(".");
      if (dec <= 0) return value[0];
      var formated = value[1] || "";
      if (formated.length > dec) return "".concat(value[0], ".").concat(formated.substr(0, dec));
      while (formated.length < dec) formated += "0";
      return "".concat(value[0], ".").concat(formated);
    },
    // Group footer helpers for vue-good-table
    sumTotalSales: function sumTotalSales(rowObj) {
      if (!rowObj || !Array.isArray(rowObj.children)) {
        return '0';
      }
      var sum = 0;
      for (var i = 0; i < rowObj.children.length; i++) {
        var value = Number(rowObj.children[i].total_sales) || 0;
        if (Number.isFinite(value)) {
          sum += value;
        }
      }
      return sum.toLocaleString();
    },
    sumTotalPurchases: function sumTotalPurchases(rowObj) {
      if (!rowObj || !Array.isArray(rowObj.children)) {
        return '0';
      }
      var sum = 0;
      for (var i = 0; i < rowObj.children.length; i++) {
        var value = Number(rowObj.children[i].total_purchases) || 0;
        if (Number.isFinite(value)) {
          sum += value;
        }
      }
      return sum.toLocaleString();
    },
    sumTotalQuotations: function sumTotalQuotations(rowObj) {
      if (!rowObj || !Array.isArray(rowObj.children)) {
        return '0';
      }
      var sum = 0;
      for (var i = 0; i < rowObj.children.length; i++) {
        var value = Number(rowObj.children[i].total_quotations) || 0;
        if (Number.isFinite(value)) {
          sum += value;
        }
      }
      return sum.toLocaleString();
    },
    sumTotalReturnSales: function sumTotalReturnSales(rowObj) {
      if (!rowObj || !Array.isArray(rowObj.children)) {
        return '0';
      }
      var sum = 0;
      for (var i = 0; i < rowObj.children.length; i++) {
        var value = Number(rowObj.children[i].total_return_sales) || 0;
        if (Number.isFinite(value)) {
          sum += value;
        }
      }
      return sum.toLocaleString();
    },
    sumTotalReturnPurchases: function sumTotalReturnPurchases(rowObj) {
      if (!rowObj || !Array.isArray(rowObj.children)) {
        return '0';
      }
      var sum = 0;
      for (var i = 0; i < rowObj.children.length; i++) {
        var value = Number(rowObj.children[i].total_return_purchases) || 0;
        if (Number.isFinite(value)) {
          sum += value;
        }
      }
      return sum.toLocaleString();
    },
    sumTotalTransfers: function sumTotalTransfers(rowObj) {
      if (!rowObj || !Array.isArray(rowObj.children)) {
        return '0';
      }
      var sum = 0;
      for (var i = 0; i < rowObj.children.length; i++) {
        var value = Number(rowObj.children[i].total_transfers) || 0;
        if (Number.isFinite(value)) {
          sum += value;
        }
      }
      return sum.toLocaleString();
    },
    sumTotalAdjustments: function sumTotalAdjustments(rowObj) {
      if (!rowObj || !Array.isArray(rowObj.children)) {
        return '0';
      }
      var sum = 0;
      for (var i = 0; i < rowObj.children.length; i++) {
        var value = Number(rowObj.children[i].total_adjustments) || 0;
        if (Number.isFinite(value)) {
          sum += value;
        }
      }
      return sum.toLocaleString();
    },
    //--------------------------- Get Customer Report -------------\\
    Get_Users_Report: function Get_Users_Report(page) {
      var _this2 = this;
      // Start the progress bar.
      nprogress__WEBPACK_IMPORTED_MODULE_0___default().start();
      nprogress__WEBPACK_IMPORTED_MODULE_0___default().set(0.1);
      axios.get("report/users?page=" + page + "&SortField=" + this.serverParams.sort.field + "&SortType=" + this.serverParams.sort.type + "&search=" + this.search + "&limit=" + this.limit).then(function (response) {
        _this2.users = response.data.report;
        _this2.totalRows = response.data.totalRows;
        _this2.rows[0].children = _this2.users;
        // Complete the animation of theprogress bar.
        nprogress__WEBPACK_IMPORTED_MODULE_0___default().done();
        _this2.isLoading = false;
      })["catch"](function (response) {
        // Complete the animation of theprogress bar.
        nprogress__WEBPACK_IMPORTED_MODULE_0___default().done();
        setTimeout(function () {
          _this2.isLoading = false;
        }, 500);
      });
    }
  },
  //end Methods

  //----------------------------- Created function------------------- \\

  created: function created() {
    this.Get_Users_Report(1);
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/reports/users_report.vue?vue&type=template&id=18825678":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/reports/users_report.vue?vue&type=template&id=18825678 ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************/
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
      page: _vm.$t("Users_Report"),
      folder: _vm.$t("Reports")
    }
  }), _vm._v(" "), _vm.isLoading ? _c("div", {
    staticClass: "loading_page spinner spinner-primary mr-3"
  }) : _vm._e(), _vm._v(" "), !_vm.isLoading ? _c("b-card", {
    staticClass: "wrapper print-table-only"
  }, [_c("div", {
    staticClass: "d-flex justify-content-end mb-2",
    attrs: {
      slot: "header"
    },
    slot: "header"
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
  }), _vm._v(" " + _vm._s(_vm.$t("print")) + "\n      ")])], 1), _vm._v(" "), _c("vue-good-table", {
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
        return [props.column.field == "actions" ? _c("span", [_c("router-link", {
          attrs: {
            title: "Report",
            to: "/app/reports/detail_user/" + props.row.id
          }
        }, [_c("b-button", {
          attrs: {
            variant: "primary"
          }
        }, [_vm._v(_vm._s(_vm.$t("Reports")))])], 1)], 1) : _vm._e()];
      }
    }], null, false, 3369575762)
  })], 1) : _vm._e()], 1);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./resources/src/views/app/pages/reports/users_report.vue":
/*!****************************************************************!*\
  !*** ./resources/src/views/app/pages/reports/users_report.vue ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _users_report_vue_vue_type_template_id_18825678__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./users_report.vue?vue&type=template&id=18825678 */ "./resources/src/views/app/pages/reports/users_report.vue?vue&type=template&id=18825678");
/* harmony import */ var _users_report_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./users_report.vue?vue&type=script&lang=js */ "./resources/src/views/app/pages/reports/users_report.vue?vue&type=script&lang=js");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _users_report_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _users_report_vue_vue_type_template_id_18825678__WEBPACK_IMPORTED_MODULE_0__.render,
  _users_report_vue_vue_type_template_id_18825678__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) // removed by dead control flow
{ var api; }
component.options.__file = "resources/src/views/app/pages/reports/users_report.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/src/views/app/pages/reports/users_report.vue?vue&type=script&lang=js":
/*!****************************************************************************************!*\
  !*** ./resources/src/views/app/pages/reports/users_report.vue?vue&type=script&lang=js ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_users_report_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./users_report.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/reports/users_report.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_users_report_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/src/views/app/pages/reports/users_report.vue?vue&type=template&id=18825678":
/*!**********************************************************************************************!*\
  !*** ./resources/src/views/app/pages/reports/users_report.vue?vue&type=template&id=18825678 ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_users_report_vue_vue_type_template_id_18825678__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_users_report_vue_vue_type_template_id_18825678__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_users_report_vue_vue_type_template_id_18825678__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./users_report.vue?vue&type=template&id=18825678 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/reports/users_report.vue?vue&type=template&id=18825678");


/***/ })

}]);