"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["report_error_logs"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/reports/report_error_logs.vue?vue&type=script&lang=js":
/*!*************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/reports/report_error_logs.vue?vue&type=script&lang=js ***!
  \*************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      logs: [],
      totalRows: 0,
      isLoading: true,
      perPage: 10,
      currentPage: 1,
      columns: [
      // { label: "ID", field: "id", sortable: true },
      {
        label: this.$t("Context"),
        field: "context",
        sortable: true
      }, {
        label: this.$t("Message"),
        field: "message",
        sortable: false
      }, {
        label: this.$t("Details"),
        field: "details",
        sortable: false
      }, {
        label: this.$t("Occurred_At"),
        field: "occurred_at",
        sortable: true
      }]
    };
  },
  mounted: function mounted() {
    this.fetchLogs();
  },
  methods: {
    fetchLogs: function fetchLogs() {
      var _this = this;
      var page = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
      this.isLoading = true;
      axios.get("/error-logs", {
        params: {
          page: page,
          per_page: this.perPage
        }
      }).then(function (response) {
        _this.logs = response.data.logs;
        _this.totalRows = response.data.total;
      })["catch"](function (error) {})["finally"](function () {
        _this.isLoading = false;
      });
    },
    onPageChange: function onPageChange(params) {
      this.currentPage = params.currentPage;
      this.fetchLogs(this.currentPage);
    },
    onPerPageChange: function onPerPageChange(params) {
      this.perPage = params.currentPerPage;
      this.fetchLogs(this.currentPage);
    },
    //------ Print Table Only
    printTableOnly: function printTableOnly() {
      var _this2 = this;
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

      // Get logs data
      var logsData = this.logs || [];

      // Manually construct the table HTML from logs data
      var tableHtml = "<table class=\"vgt-table table table-hover tableOne\">";

      // Table Header
      tableHtml += "<thead><tr>";
      this.columns.forEach(function (col) {
        tableHtml += "<th class=\"text-left\">".concat(col.label, "</th>");
      });
      tableHtml += "</tr></thead>";

      // Table Body
      tableHtml += "<tbody>";
      logsData.forEach(function (row) {
        tableHtml += "<tr>";
        _this2.columns.forEach(function (col) {
          var cellContent = row[col.field] || '';
          // Handle details field with special formatting for long text
          if (col.field === 'details') {
            // Escape HTML and preserve whitespace
            cellContent = String(cellContent).replace(/</g, '&lt;').replace(/>/g, '&gt;');
          }
          tableHtml += "<td class=\"text-left\" style=\"".concat(col.field === 'details' ? 'max-width: 400px; word-wrap: break-word; white-space: pre-wrap;' : '', "\">").concat(cellContent, "</td>");
        });
        tableHtml += "</tr>";
      });
      tableHtml += "</tbody>";
      tableHtml += "</table>";
      var w = window.open("", "_blank");
      if (!w) {
        window.print();
        return;
      }
      var title = "".concat(this.$t("Reports"), " / ").concat(this.$t("Error_Logs"));
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
      doc.write("<!doctype html>\n<html>\n  <head>\n    <meta charset=\"utf-8\" />\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\" />\n    <base href=\"".concat(window.location.origin, "/\" />\n    <title>").concat(title, "</title>\n    ").concat(links, "\n    ").concat(inlineStyles, "\n    <style>\n      @media print { \n        body, body * { visibility: visible !important; }\n        @page { size: A4 landscape; margin: 0.5cm; }\n      }\n      body { margin: 0.3cm; font-family: monospace; }\n      .print-header { font-weight: 600; margin-bottom: 8px; }\n      table { width: 100%; border-collapse: collapse; font-size: 10px; }\n      th, td { border: 1px solid #ddd; padding: 6px; text-align: left; }\n      th { background-color: #f2f2f2; font-weight: bold; }\n      td pre { margin: 0; font-size: 9px; white-space: pre-wrap; word-wrap: break-word; }\n    </style>\n  </head>\n  <body>\n    <div class=\"print-header\">").concat(title, "</div>\n    ").concat(tableHtml, "\n  </body>\n</html>"));
      doc.close();
      w.focus();
      setTimeout(function () {
        w.print();
        w.close();
      }, 400);
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/reports/report_error_logs.vue?vue&type=template&id=1edc6a94":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/reports/report_error_logs.vue?vue&type=template&id=1edc6a94 ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************/
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
      page: _vm.$t("Error_Logs"),
      folder: _vm.$t("Reports")
    }
  }), _vm._v(" "), _vm.isLoading ? _c("div", {
    staticClass: "loading_page spinner spinner-primary mr-3"
  }) : _vm._e(), _vm._v(" "), !_vm.isLoading ? _c("b-card", {
    staticClass: "print-table-only"
  }, [_c("vue-good-table", {
    attrs: {
      mode: "remote",
      columns: _vm.columns,
      totalRows: _vm.totalRows,
      rows: _vm.logs,
      "pagination-options": {
        enabled: true,
        mode: "records",
        perPage: _vm.perPage,
        nextLabel: "Next",
        prevLabel: "Prev"
      },
      styleClass: "table-hover tableOne vgt-table"
    },
    on: {
      "on-page-change": _vm.onPageChange,
      "on-per-page-change": _vm.onPerPageChange
    },
    scopedSlots: _vm._u([{
      key: "table-row",
      fn: function fn(props) {
        return [props.column.field === "details" ? _c("div", [_c("pre", {
          staticStyle: {
            "max-height": "100px",
            "overflow-y": "auto",
            "white-space": "pre-wrap"
          }
        }, [_vm._v(_vm._s(props.row.details))])]) : _vm._e()];
      }
    }], null, false, 245573088)
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

/***/ "./resources/src/views/app/pages/reports/report_error_logs.vue":
/*!*********************************************************************!*\
  !*** ./resources/src/views/app/pages/reports/report_error_logs.vue ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _report_error_logs_vue_vue_type_template_id_1edc6a94__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./report_error_logs.vue?vue&type=template&id=1edc6a94 */ "./resources/src/views/app/pages/reports/report_error_logs.vue?vue&type=template&id=1edc6a94");
/* harmony import */ var _report_error_logs_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./report_error_logs.vue?vue&type=script&lang=js */ "./resources/src/views/app/pages/reports/report_error_logs.vue?vue&type=script&lang=js");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _report_error_logs_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _report_error_logs_vue_vue_type_template_id_1edc6a94__WEBPACK_IMPORTED_MODULE_0__.render,
  _report_error_logs_vue_vue_type_template_id_1edc6a94__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) // removed by dead control flow
{ var api; }
component.options.__file = "resources/src/views/app/pages/reports/report_error_logs.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/src/views/app/pages/reports/report_error_logs.vue?vue&type=script&lang=js":
/*!*********************************************************************************************!*\
  !*** ./resources/src/views/app/pages/reports/report_error_logs.vue?vue&type=script&lang=js ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_report_error_logs_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./report_error_logs.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/reports/report_error_logs.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_report_error_logs_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/src/views/app/pages/reports/report_error_logs.vue?vue&type=template&id=1edc6a94":
/*!***************************************************************************************************!*\
  !*** ./resources/src/views/app/pages/reports/report_error_logs.vue?vue&type=template&id=1edc6a94 ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_report_error_logs_vue_vue_type_template_id_1edc6a94__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_report_error_logs_vue_vue_type_template_id_1edc6a94__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_report_error_logs_vue_vue_type_template_id_1edc6a94__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./report_error_logs.vue?vue&type=template&id=1edc6a94 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/reports/report_error_logs.vue?vue&type=template&id=1edc6a94");


/***/ })

}]);