"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["Stock_Aging_Report"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/reports/Stock_Aging_Report.vue?vue&type=script&lang=js":
/*!**************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/reports/Stock_Aging_Report.vue?vue&type=script&lang=js ***!
  \**************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! nprogress */ "./node_modules/nprogress/nprogress.js");
/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(nprogress__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  metaInfo: {
    title: "Stock Aging Report"
  },
  data: function data() {
    return {
      isLoading: true,
      serverParams: {
        sort: {
          field: "age_days",
          type: "desc"
        },
        page: 1,
        perPage: 10
      },
      limit: "10",
      search: "",
      totalRows: 0,
      rows: [{
        statut: '',
        children: []
      }],
      // filters
      dimension: "product",
      dimensionOptions: [{
        value: "product",
        text: "By Product"
      }, {
        value: "variant",
        text: "By Variant"
      }],
      buckets: [30, 60, 90],
      bucketsInput: "30,60,90",
      warehouse_id: null,
      brand_id: null,
      category_id: null,
      warehouseOptions: [{
        value: null,
        text: this.$t('All')
      }],
      brandOptions: [{
        value: null,
        text: this.$t('All')
      }],
      categoryOptions: [{
        value: null,
        text: this.$t('All')
      }]
    };
  },
  computed: _objectSpread(_objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_1__.mapGetters)(["currentUser"])), {}, {
    columns: function columns() {
      var base = [{
        label: this.$t("Code"),
        field: "code",
        sortable: true,
        tdClass: "text-left",
        thClass: "text-left"
      }, {
        label: this.$t("Product"),
        field: "product_name",
        sortable: true,
        tdClass: "text-left",
        thClass: "text-left"
      }];
      if (this.dimension === "variant") {
        base.push({
          label: this.$t("Variant"),
          field: "variant_name",
          sortable: true,
          tdClass: "text-left",
          thClass: "text-left"
        });
      }
      base.push({
        label: this.$t("OnHand"),
        field: "on_hand",
        headerField: this.sumOnHand,
        sortable: true,
        tdClass: "text-left",
        thClass: "text-left"
      }, {
        label: this.$t("LastInbound"),
        field: "last_inbound_at",
        sortable: true,
        tdClass: "text-left",
        thClass: "text-left"
      }, {
        label: this.$t("AgeDays"),
        field: "age_days",
        type: "number",
        sortable: true,
        tdClass: "text-left",
        thClass: "text-left"
      }, {
        label: this.$t("Bucket"),
        field: "age_bucket",
        sortable: true,
        tdClass: "text-left",
        thClass: "text-left"
      });
      return base;
    }
  }),
  methods: {
    formatAgeDays: function formatAgeDays(v) {
      var n = Number(v);
      if (isNaN(n)) return '—';
      return Math.floor(n);
    },
    // Group footer helpers for vue-good-table
    sumOnHand: function sumOnHand(rowObj) {
      if (!rowObj || !Array.isArray(rowObj.children)) {
        return '0';
      }
      var sum = 0;
      for (var i = 0; i < rowObj.children.length; i++) {
        var value = Number(rowObj.children[i].on_hand) || 0;
        if (Number.isFinite(value)) {
          sum += value;
        }
      }
      return sum.toLocaleString();
    },
    // --- NEW: load select options
    fetchFilters: function fetchFilters() {
      var _this = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee() {
        var _yield$axios$get, data, first, _t;
        return _regenerator().w(function (_context) {
          while (1) switch (_context.p = _context.n) {
            case 0:
              _context.p = 0;
              _context.n = 1;
              return axios.get('report/stock_aging/filters');
            case 1:
              _yield$axios$get = _context.v;
              data = _yield$axios$get.data;
              first = {
                value: null,
                text: _this.$t('All')
              };
              _this.warehouseOptions = [first].concat((data.warehouses || []).map(function (w) {
                return {
                  value: Number(w.id),
                  text: String(w.name)
                };
              }));
              _this.brandOptions = [first].concat((data.brands || []).map(function (b) {
                return {
                  value: Number(b.id),
                  text: String(b.name)
                };
              }));
              _this.categoryOptions = [first].concat((data.categories || []).map(function (c) {
                return {
                  value: Number(c.id),
                  text: String(c.name)
                };
              }));
              _context.n = 3;
              break;
            case 2:
              _context.p = 2;
              _t = _context.v;
            case 3:
              return _context.a(2);
          }
        }, _callee, null, [[0, 2]]);
      }))();
    },
    bucketVariant: function bucketVariant(bucket) {
      if (!bucket) return "secondary";
      if (bucket.includes("0–")) return "success";
      if (bucket.includes("31–") || bucket.includes("30–")) return "info";
      if (bucket.includes("61–")) return "warning";
      return "danger";
    },
    updateParams: function updateParams(newProps) {
      this.serverParams = Object.assign({}, this.serverParams, newProps);
    },
    onPageChange: function onPageChange(_ref) {
      var currentPage = _ref.currentPage;
      if (this.serverParams.page !== currentPage) {
        this.updateParams({
          page: currentPage
        });
        this.fetch(currentPage);
      }
    },
    onPerPageChange: function onPerPageChange(_ref2) {
      var currentPerPage = _ref2.currentPerPage;
      if (this.limit !== currentPerPage) {
        this.limit = currentPerPage.toString();
        this.updateParams({
          page: 1,
          perPage: currentPerPage
        });
        this.fetch(1);
      }
    },
    onSortChange: function onSortChange(params) {
      if (params && params[0]) {
        this.updateParams({
          sort: {
            type: params[0].type,
            field: params[0].field
          }
        });
        this.fetch(this.serverParams.page);
      }
    },
    onSearch: function onSearch(value) {
      this.search = value.searchTerm || "";
      this.fetch(this.serverParams.page);
    },
    onDimensionChange: function onDimensionChange() {
      if (this.serverParams.sort.field === "variant_name" && this.dimension !== "variant") {
        this.serverParams.sort.field = "product_name";
      }
      this.updateParams({
        page: 1
      });
      this.fetch(1);
    },
    onBucketsChange: function onBucketsChange() {
      var parts = (this.bucketsInput || "").split(",").map(function (s) {
        return parseInt(String(s).trim(), 10);
      }).filter(function (n) {
        return !isNaN(n) && n > 0;
      }).sort(function (a, b) {
        return a - b;
      });
      this.buckets = parts.length ? parts : [30, 60, 90];
      this.bucketsInput = this.buckets.join(",");
      this.refresh();
    },
    refresh: function refresh() {
      this.updateParams({
        page: 1
      });
      this.fetch(1);
    },
    fetch: function fetch(page) {
      var _this2 = this;
      nprogress__WEBPACK_IMPORTED_MODULE_0___default().start();
      nprogress__WEBPACK_IMPORTED_MODULE_0___default().set(0.1);
      var params = "page=" + page + "&SortField=" + encodeURIComponent(this.serverParams.sort.field) + "&SortType=" + encodeURIComponent(this.serverParams.sort.type) + "&search=" + encodeURIComponent(this.search || "") + "&limit=" + encodeURIComponent(this.limit) + "&dimension=" + encodeURIComponent(this.dimension) + "&buckets=" + encodeURIComponent(this.buckets.join(",")) + (this.warehouse_id != null ? "&warehouse_id=" + encodeURIComponent(this.warehouse_id) : "") + (this.brand_id != null ? "&brand_id=" + encodeURIComponent(this.brand_id) : "") + (this.category_id != null ? "&category_id=" + encodeURIComponent(this.category_id) : "");
      axios.get("report/stock_aging?" + params).then(function (_ref3) {
        var data = _ref3.data;
        var items = Array.isArray(data.report) ? data.report : [];
        _this2.totalRows = Number(data.totalRows || 0);
        _this2.rows[0].children = items;
        nprogress__WEBPACK_IMPORTED_MODULE_0___default().done();
        _this2.isLoading = false;
      })["catch"](function () {
        nprogress__WEBPACK_IMPORTED_MODULE_0___default().done();
        setTimeout(function () {
          _this2.isLoading = false;
        }, 400);
      });
    },
    init: function init() {
      var _this3 = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2() {
        return _regenerator().w(function (_context2) {
          while (1) switch (_context2.n) {
            case 0:
              _this3.isLoading = true;
              _context2.n = 1;
              return _this3.fetchFilters();
            case 1:
              _this3.fetch(1);
            case 2:
              return _context2.a(2);
          }
        }, _callee2);
      }))();
    },
    //------ Print Table Only
    printTableOnly: function printTableOnly() {
      var _this$rows$,
        _this4 = this;
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

      // Get rows data from rows[0].children
      var rowsData = Array.isArray((_this$rows$ = this.rows[0]) === null || _this$rows$ === void 0 ? void 0 : _this$rows$.children) && this.rows[0].children.length > 0 ? this.rows[0].children : [];

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
        _this4.columns.forEach(function (col) {
          var cellContent = row[col.field];
          if (col.field === 'last_inbound_at') {
            cellContent = row.last_inbound_at || '—';
          } else if (col.field === 'age_bucket') {
            cellContent = row.age_bucket || '—';
          } else if (col.field === 'age_days') {
            cellContent = _this4.formatAgeDays(row.age_days);
          }
          tableHtml += "<td class=\"text-left\">".concat(cellContent || '', "</td>");
        });
        tableHtml += "</tr>";
      });
      tableHtml += "</tbody>";

      // Table Footer (Totals)
      var totalOnHand = this.sumOnHand(this.rows[0]);
      tableHtml += "<tfoot><tr>";
      tableHtml += "<td class=\"text-left font-weight-bold\">".concat(this.$t('Total'), "</td>");
      tableHtml += "<td colspan=\"".concat(this.dimension === 'variant' ? 2 : 1, "\"></td>"); // Span for Product (and Variant if dimension is variant)
      tableHtml += "<td class=\"text-left font-weight-bold\">".concat(totalOnHand, "</td>");
      tableHtml += "<td colspan=\"3\"></td>"; // Span for LastInbound, AgeDays, Bucket
      tableHtml += "</tr></tfoot>";
      tableHtml += "</table>";
      var w = window.open("", "_blank");
      if (!w) {
        window.print();
        return;
      }
      var title = "".concat(this.$t("Reports"), " / ").concat(this.$t("Stock_Aging_Report"));
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
  },
  created: function created() {
    // Load options then data
    this.init();
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/reports/Stock_Aging_Report.vue?vue&type=template&id=dead96a6":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/reports/Stock_Aging_Report.vue?vue&type=template&id=dead96a6 ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************/
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
      page: _vm.$t("Stock_Aging_Report"),
      folder: _vm.$t("Reports")
    }
  }), _vm._v(" "), _vm.isLoading ? _c("div", {
    staticClass: "loading_page spinner spinner-primary mr-3"
  }) : _vm._e(), _vm._v(" "), !_vm.isLoading ? _c("b-card", {
    staticClass: "wrapper print-table-only"
  }, [_c("div", {
    staticClass: "d-flex flex-wrap align-items-center mb-3"
  }, [_c("div", {
    staticClass: "mr-3 mb-2"
  }, [_c("label", {
    staticClass: "mb-0 mr-2"
  }, [_vm._v(_vm._s(_vm.$t("Dimension")) + ":")]), _vm._v(" "), _c("b-form-select", {
    staticClass: "w-auto",
    attrs: {
      options: _vm.dimensionOptions,
      size: "sm"
    },
    on: {
      change: _vm.onDimensionChange
    },
    model: {
      value: _vm.dimension,
      callback: function callback($$v) {
        _vm.dimension = $$v;
      },
      expression: "dimension"
    }
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "mr-3 mb-2"
  }, [_c("label", {
    staticClass: "mb-0 mr-2"
  }, [_vm._v(_vm._s(_vm.$t("warehouse")) + ":")]), _vm._v(" "), _c("b-form-select", {
    staticClass: "w-auto",
    attrs: {
      options: _vm.warehouseOptions,
      size: "sm"
    },
    on: {
      change: _vm.refresh
    },
    model: {
      value: _vm.warehouse_id,
      callback: function callback($$v) {
        _vm.warehouse_id = $$v;
      },
      expression: "warehouse_id"
    }
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "mr-3 mb-2"
  }, [_c("label", {
    staticClass: "mb-0 mr-2"
  }, [_vm._v(_vm._s(_vm.$t("Buckets")) + ":")]), _vm._v(" "), _c("b-form-input", {
    staticClass: "w-auto",
    attrs: {
      size: "sm",
      placeholder: _vm.$t("e.g. 30,60,90")
    },
    on: {
      change: _vm.onBucketsChange
    },
    model: {
      value: _vm.bucketsInput,
      callback: function callback($$v) {
        _vm.bucketsInput = $$v;
      },
      expression: "bucketsInput"
    }
  }), _vm._v(" "), _c("small", {
    staticClass: "text-muted d-block",
    staticStyle: {
      "margin-top": "0px"
    }
  }, [_vm._v("\n          " + _vm._s(_vm.$t("Comma_separated_cutoffs_default")) + ": 30,60,90\n        ")])], 1), _vm._v(" "), _c("div", {
    staticClass: "mr-3 mb-2"
  }, [_c("label", {
    staticClass: "mb-0 mr-2"
  }, [_vm._v(_vm._s(_vm.$t("Brand")) + ":")]), _vm._v(" "), _c("b-form-select", {
    staticClass: "w-auto",
    attrs: {
      options: _vm.brandOptions,
      size: "sm"
    },
    on: {
      change: _vm.refresh
    },
    model: {
      value: _vm.brand_id,
      callback: function callback($$v) {
        _vm.brand_id = $$v;
      },
      expression: "brand_id"
    }
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "mr-3 mb-2"
  }, [_c("label", {
    staticClass: "mb-0 mr-2"
  }, [_vm._v(_vm._s(_vm.$t("Category")) + ":")]), _vm._v(" "), _c("b-form-select", {
    staticClass: "w-auto",
    attrs: {
      options: _vm.categoryOptions,
      size: "sm"
    },
    on: {
      change: _vm.refresh
    },
    model: {
      value: _vm.category_id,
      callback: function callback($$v) {
        _vm.category_id = $$v;
      },
      expression: "category_id"
    }
  })], 1)]), _vm._v(" "), _c("vue-good-table", {
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
        return [props.column.field === "last_inbound_at" ? _c("span", [_vm._v("\n          " + _vm._s(props.row.last_inbound_at || "—") + "\n        ")]) : props.column.field === "age_bucket" ? _c("span", [_c("b-badge", {
          attrs: {
            variant: _vm.bucketVariant(props.row.age_bucket)
          }
        }, [_vm._v(_vm._s(props.row.age_bucket || "—"))])], 1) : props.column.field === "age_days" ? _c("span", [_vm._v("\n          " + _vm._s(_vm.formatAgeDays(props.row.age_days)) + "\n        ")]) : _c("span", [_vm._v("\n          " + _vm._s(props.formattedRow[props.column.field]) + "\n        ")])];
      }
    }], null, false, 3760987666)
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

/***/ "./resources/src/views/app/pages/reports/Stock_Aging_Report.vue":
/*!**********************************************************************!*\
  !*** ./resources/src/views/app/pages/reports/Stock_Aging_Report.vue ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Stock_Aging_Report_vue_vue_type_template_id_dead96a6__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Stock_Aging_Report.vue?vue&type=template&id=dead96a6 */ "./resources/src/views/app/pages/reports/Stock_Aging_Report.vue?vue&type=template&id=dead96a6");
/* harmony import */ var _Stock_Aging_Report_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Stock_Aging_Report.vue?vue&type=script&lang=js */ "./resources/src/views/app/pages/reports/Stock_Aging_Report.vue?vue&type=script&lang=js");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Stock_Aging_Report_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _Stock_Aging_Report_vue_vue_type_template_id_dead96a6__WEBPACK_IMPORTED_MODULE_0__.render,
  _Stock_Aging_Report_vue_vue_type_template_id_dead96a6__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) // removed by dead control flow
{ var api; }
component.options.__file = "resources/src/views/app/pages/reports/Stock_Aging_Report.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/src/views/app/pages/reports/Stock_Aging_Report.vue?vue&type=script&lang=js":
/*!**********************************************************************************************!*\
  !*** ./resources/src/views/app/pages/reports/Stock_Aging_Report.vue?vue&type=script&lang=js ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Stock_Aging_Report_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Stock_Aging_Report.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/reports/Stock_Aging_Report.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Stock_Aging_Report_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/src/views/app/pages/reports/Stock_Aging_Report.vue?vue&type=template&id=dead96a6":
/*!****************************************************************************************************!*\
  !*** ./resources/src/views/app/pages/reports/Stock_Aging_Report.vue?vue&type=template&id=dead96a6 ***!
  \****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Stock_Aging_Report_vue_vue_type_template_id_dead96a6__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Stock_Aging_Report_vue_vue_type_template_id_dead96a6__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Stock_Aging_Report_vue_vue_type_template_id_dead96a6__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Stock_Aging_Report.vue?vue&type=template&id=dead96a6 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/reports/Stock_Aging_Report.vue?vue&type=template&id=dead96a6");


/***/ })

}]);