"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["Service_Jobs_Report"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/reports/Service_Jobs_Report.vue?vue&type=script&lang=js":
/*!***************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/reports/Service_Jobs_Report.vue?vue&type=script&lang=js ***!
  \***************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'ServiceJobsReport',
  data: function data() {
    return {
      isLoading: true,
      rows: [],
      totalRows: 0,
      customers: [],
      technicians: [],
      serverParams: {
        page: 1,
        perPage: 10
      },
      filters: {
        client_id: null,
        technician_id: null,
        from: '',
        to: ''
      },
      columns: [{
        label: this.$t('date'),
        field: 'scheduled_date'
      }, {
        label: this.$t('Customer'),
        field: 'client_name'
      }, {
        label: this.$t('Technician'),
        field: 'technician_name'
      }, {
        label: this.$t('Service_Item'),
        field: 'service_item'
      }, {
        label: this.$t('Job_Type'),
        field: 'job_type'
      }, {
        label: this.$t('Status'),
        field: 'status'
      }]
    };
  },
  mounted: function mounted() {
    var _this = this;
    return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee() {
      return _regenerator().w(function (_context) {
        while (1) switch (_context.n) {
          case 0:
            _context.n = 1;
            return _this.getReport(1);
          case 1:
            _this.isLoading = false;
          case 2:
            return _context.a(2);
        }
      }, _callee);
    }))();
  },
  methods: {
    getReport: function getReport(page) {
      var _this2 = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2() {
        var params, _yield$axios$get, data;
        return _regenerator().w(function (_context2) {
          while (1) switch (_context2.n) {
            case 0:
              if (page) _this2.serverParams.page = page;
              params = {
                page: _this2.serverParams.page,
                limit: _this2.serverParams.perPage,
                client_id: _this2.filters.client_id,
                technician_id: _this2.filters.technician_id,
                from: _this2.filters.from,
                to: _this2.filters.to
              };
              _context2.n = 1;
              return axios.get('report/service_jobs', {
                params: params
              });
            case 1:
              _yield$axios$get = _context2.v;
              data = _yield$axios$get.data;
              _this2.rows = data.rows || [];
              _this2.totalRows = data.totalRows || 0;
              _this2.customers = (data.clients || []).map(function (c) {
                return {
                  id: c.id,
                  name: c.name
                };
              });
              _this2.technicians = (data.technicians || []).map(function (t) {
                return {
                  id: t.id,
                  full_name: t.name || "#".concat(t.id)
                };
              });
            case 2:
              return _context2.a(2);
          }
        }, _callee2);
      }))();
    },
    onPageChange: function onPageChange(_ref) {
      var currentPage = _ref.currentPage;
      this.serverParams.page = currentPage;
      this.getReport();
    },
    onPerPageChange: function onPerPageChange(_ref2) {
      var currentPerPage = _ref2.currentPerPage;
      this.serverParams.perPage = currentPerPage;
      this.getReport();
    },
    //------ Print Table Only
    printTableOnly: function printTableOnly() {
      var _this3 = this;
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

      // Get rows data
      var rowsData = this.rows || [];

      // Manually construct the table HTML from rows data
      var tableHtml = "<table class=\"vgt-table table table-hover tableOne\">";

      // Table Header
      tableHtml += "<thead><tr>";
      this.columns.forEach(function (col) {
        tableHtml += "<th class=\"text-left\">".concat(col.label, "</th>");
      });
      tableHtml += "</tr></thead>";

      // Table Body
      tableHtml += "<tbody>";
      rowsData.forEach(function (row) {
        tableHtml += "<tr>";
        _this3.columns.forEach(function (col) {
          var cellContent = row[col.field] || '';
          tableHtml += "<td class=\"text-left\">".concat(cellContent, "</td>");
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
      var title = "".concat(this.$t("Reports"), " / ").concat(this.$t("Service_Jobs_Report"));
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
      doc.write("<!doctype html>\n<html>\n  <head>\n    <meta charset=\"utf-8\" />\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\" />\n    <base href=\"".concat(window.location.origin, "/\" />\n    <title>").concat(title, "</title>\n    ").concat(links, "\n    ").concat(inlineStyles, "\n    <style>\n      @media print { body, body * { visibility: visible !important; } }\n      body { margin: 0.3cm; }\n      .print-header { font-weight: 600; margin-bottom: 8px; }\n      table { width: 100%; border-collapse: collapse; }\n      th, td { border: 1px solid #ddd; padding: 8px; text-align: left; }\n      th { background-color: #f2f2f2; }\n    </style>\n  </head>\n  <body>\n    <div class=\"print-header\">").concat(title, "</div>\n    ").concat(tableHtml, "\n  </body>\n</html>"));
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

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/reports/Service_Jobs_Report.vue?vue&type=template&id=f3dd2814":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/reports/Service_Jobs_Report.vue?vue&type=template&id=f3dd2814 ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************/
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
      page: _vm.$t("Service_Jobs_Report"),
      folder: _vm.$t("Reports")
    }
  }), _vm._v(" "), _vm.isLoading ? _c("div", {
    staticClass: "loading_page spinner spinner-primary mr-3"
  }) : _c("b-card", {
    staticClass: "print-table-only"
  }, [_c("b-row", {
    staticClass: "mb-3"
  }, [_c("b-col", {
    attrs: {
      md: "4"
    }
  }, [_c("b-form-group", {
    attrs: {
      label: _vm.$t("Customer")
    }
  }, [_c("v-select", {
    attrs: {
      reduce: function reduce(c) {
        return c.id;
      },
      options: _vm.customers,
      label: "name",
      placeholder: _vm.$t("Choose_Customer")
    },
    on: {
      input: function input($event) {
        return _vm.getReport(1);
      }
    },
    model: {
      value: _vm.filters.client_id,
      callback: function callback($$v) {
        _vm.$set(_vm.filters, "client_id", $$v);
      },
      expression: "filters.client_id"
    }
  })], 1)], 1), _vm._v(" "), _c("b-col", {
    attrs: {
      md: "4"
    }
  }, [_c("b-form-group", {
    attrs: {
      label: _vm.$t("Technician")
    }
  }, [_c("v-select", {
    attrs: {
      reduce: function reduce(t) {
        return t.id;
      },
      options: _vm.technicians,
      label: "full_name",
      placeholder: _vm.$t("Choose_Technician")
    },
    on: {
      input: function input($event) {
        return _vm.getReport(1);
      }
    },
    model: {
      value: _vm.filters.technician_id,
      callback: function callback($$v) {
        _vm.$set(_vm.filters, "technician_id", $$v);
      },
      expression: "filters.technician_id"
    }
  })], 1)], 1), _vm._v(" "), _c("b-col", {
    attrs: {
      md: "2"
    }
  }, [_c("b-form-group", {
    attrs: {
      label: _vm.$t("From")
    }
  }, [_c("b-form-input", {
    attrs: {
      type: "date"
    },
    on: {
      change: function change($event) {
        return _vm.getReport(1);
      }
    },
    model: {
      value: _vm.filters.from,
      callback: function callback($$v) {
        _vm.$set(_vm.filters, "from", $$v);
      },
      expression: "filters.from"
    }
  })], 1)], 1), _vm._v(" "), _c("b-col", {
    attrs: {
      md: "2"
    }
  }, [_c("b-form-group", {
    attrs: {
      label: _vm.$t("To")
    }
  }, [_c("b-form-input", {
    attrs: {
      type: "date"
    },
    on: {
      change: function change($event) {
        return _vm.getReport(1);
      }
    },
    model: {
      value: _vm.filters.to,
      callback: function callback($$v) {
        _vm.$set(_vm.filters, "to", $$v);
      },
      expression: "filters.to"
    }
  })], 1)], 1)], 1), _vm._v(" "), _c("vue-good-table", {
    attrs: {
      mode: "remote",
      columns: _vm.columns,
      totalRows: _vm.totalRows,
      rows: _vm.rows,
      "pagination-options": {
        enabled: true,
        mode: "records"
      },
      styleClass: "tableOne vgt-table"
    },
    on: {
      "on-page-change": _vm.onPageChange,
      "on-per-page-change": _vm.onPerPageChange
    }
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
  }), _vm._v(" " + _vm._s(_vm.$t("print")) + "\n        ")])], 1)])], 1)], 1);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./resources/src/views/app/pages/reports/Service_Jobs_Report.vue":
/*!***********************************************************************!*\
  !*** ./resources/src/views/app/pages/reports/Service_Jobs_Report.vue ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Service_Jobs_Report_vue_vue_type_template_id_f3dd2814__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Service_Jobs_Report.vue?vue&type=template&id=f3dd2814 */ "./resources/src/views/app/pages/reports/Service_Jobs_Report.vue?vue&type=template&id=f3dd2814");
/* harmony import */ var _Service_Jobs_Report_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Service_Jobs_Report.vue?vue&type=script&lang=js */ "./resources/src/views/app/pages/reports/Service_Jobs_Report.vue?vue&type=script&lang=js");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Service_Jobs_Report_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _Service_Jobs_Report_vue_vue_type_template_id_f3dd2814__WEBPACK_IMPORTED_MODULE_0__.render,
  _Service_Jobs_Report_vue_vue_type_template_id_f3dd2814__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) // removed by dead control flow
{ var api; }
component.options.__file = "resources/src/views/app/pages/reports/Service_Jobs_Report.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/src/views/app/pages/reports/Service_Jobs_Report.vue?vue&type=script&lang=js":
/*!***********************************************************************************************!*\
  !*** ./resources/src/views/app/pages/reports/Service_Jobs_Report.vue?vue&type=script&lang=js ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Service_Jobs_Report_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Service_Jobs_Report.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/reports/Service_Jobs_Report.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Service_Jobs_Report_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/src/views/app/pages/reports/Service_Jobs_Report.vue?vue&type=template&id=f3dd2814":
/*!*****************************************************************************************************!*\
  !*** ./resources/src/views/app/pages/reports/Service_Jobs_Report.vue?vue&type=template&id=f3dd2814 ***!
  \*****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Service_Jobs_Report_vue_vue_type_template_id_f3dd2814__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Service_Jobs_Report_vue_vue_type_template_id_f3dd2814__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Service_Jobs_Report_vue_vue_type_template_id_f3dd2814__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Service_Jobs_Report.vue?vue&type=template&id=f3dd2814 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/reports/Service_Jobs_Report.vue?vue&type=template&id=f3dd2814");


/***/ })

}]);