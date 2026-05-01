"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["Zero_Sales_Products_Report"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/reports/Zero_Sales_Products_Report.vue?vue&type=script&lang=js":
/*!**********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/reports/Zero_Sales_Products_Report.vue?vue&type=script&lang=js ***!
  \**********************************************************************************************************************************************************************************************************************************/
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
function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }



// axios assumed globally available

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  metaInfo: {
    title: "Zero Sales Products Report"
  },
  data: function data() {
    return {
      isLoading: true,
      serverParams: {
        sort: {
          field: "last_sale_at",
          type: "asc"
        },
        // NULL last first (handled server-side)
        page: 1,
        perPage: 10
      },
      limit: 10,
      search: "",
      totalRows: 0,
      products: [],
      rows: [{
        statut: '',
        children: []
      }],
      // filters
      period: 30,
      periodOptions: [{
        value: 'all',
        text: this.$t('All_time') || 'All time'
      },
      // "never sold ever"
      {
        value: 30,
        text: this.$t('Last_30_days') || 'Last 30 days'
      }, {
        value: 60,
        text: this.$t('Last_60_days') || 'Last 60 days'
      }, {
        value: 90,
        text: this.$t('Last_90_days') || 'Last 90 days'
      }],
      // optional extra filters (wire later if needed)
      warehouse_id: null,
      brand_id: null,
      category_id: null
    };
  },
  computed: _objectSpread(_objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_1__.mapGetters)(["currentUser"])), {}, {
    columns: function columns() {
      return [{
        label: this.$t("Code"),
        field: "code",
        tdClass: "text-left",
        thClass: "text-left",
        sortable: true
      }, {
        label: this.$t("Product"),
        field: "name",
        tdClass: "text-left",
        thClass: "text-left",
        sortable: true
      }, {
        label: this.$t("Price"),
        field: "price",
        headerField: this.sumPrice,
        tdClass: "text-left",
        thClass: "text-left",
        sortable: true
      }, {
        label: this.$t("LastSale"),
        field: "last_sale_at",
        tdClass: "text-left",
        thClass: "text-left",
        sortable: true
      }, {
        label: this.$t("DaysSinceLastSale"),
        field: "days_since_last_sale",
        type: "number",
        tdClass: "text-left",
        thClass: "text-left",
        sortable: true
      }];
    }
  }),
  methods: {
    // ---- table param helpers
    updateParams: function updateParams(newProps) {
      this.serverParams = Object.assign({}, this.serverParams, newProps);
    },
    onPageChange: function onPageChange(_ref) {
      var currentPage = _ref.currentPage;
      if (this.serverParams.page !== currentPage) {
        this.updateParams({
          page: currentPage
        });
        this.Get_Zero_Sales_Products(currentPage);
      }
    },
    onPerPageChange: function onPerPageChange(_ref2) {
      var currentPerPage = _ref2.currentPerPage;
      if (this.limit !== currentPerPage) {
        this.limit = currentPerPage;
        this.updateParams({
          page: 1,
          perPage: currentPerPage
        });
        this.Get_Zero_Sales_Products(1);
      }
    },
    onSortChange: function onSortChange(params) {
      var p = Array.isArray(params) && params.length ? params[0] : null;
      if (!p) return;
      this.updateParams({
        sort: {
          type: p.type,
          field: p.field
        }
      });
      this.Get_Zero_Sales_Products(this.serverParams.page);
    },
    onSearch: function onSearch(value) {
      this.search = value.searchTerm || "";
      this.updateParams({
        page: 1
      });
      this.Get_Zero_Sales_Products(1);
    },
    onPeriodChange: function onPeriodChange() {
      this.updateParams({
        page: 1
      });
      this.Get_Zero_Sales_Products(1);
    },
    formatPriceDisplay: function formatPriceDisplay(number) {
      var decimals = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 2;
      return (0,_utils_priceFormat__WEBPACK_IMPORTED_MODULE_2__.formatPriceDisplay)(number, decimals, (0,_utils_priceFormat__WEBPACK_IMPORTED_MODULE_2__.getPriceFormatSetting)(this.currentUser));
    },
    formatPriceWithSymbol: function formatPriceWithSymbol(symbol, number, dec) {
      var safeSymbol = symbol || "";
      var value = this.formatPriceDisplay(number, dec);
      return safeSymbol ? "".concat(safeSymbol, " ").concat(value) : value;
    },
    // Group footer helpers for vue-good-table
    sumPrice: function sumPrice(rowObj) {
      if (!rowObj || !Array.isArray(rowObj.children)) {
        return this.formatPriceWithSymbol(this.currentUser && this.currentUser.currency, 0, 2);
      }
      var sum = 0;
      for (var i = 0; i < rowObj.children.length; i++) {
        var value = Number(rowObj.children[i].price) || 0;
        if (Number.isFinite(value)) {
          sum += value;
        }
      }
      return this.formatPriceWithSymbol(this.currentUser && this.currentUser.currency, sum, 2);
    },
    //--------------------------- Fetch -------------------------------\\
    Get_Zero_Sales_Products: function Get_Zero_Sales_Products(page) {
      var _this = this;
      nprogress__WEBPACK_IMPORTED_MODULE_0___default().start();
      nprogress__WEBPACK_IMPORTED_MODULE_0___default().set(0.1);
      var qp = new URLSearchParams({
        page: String(page),
        SortField: this.serverParams.sort.field || 'last_sale_at',
        SortType: this.serverParams.sort.type || 'asc',
        search: this.search || '',
        limit: String(this.limit),
        period: String(this.period)
      });
      if (this.warehouse_id) qp.append('warehouse_id', this.warehouse_id);
      if (this.brand_id) qp.append('brand_id', this.brand_id);
      if (this.category_id) qp.append('category_id', this.category_id);
      axios.get("report/zero_sales_products?".concat(qp.toString())).then(function (_ref3) {
        var data = _ref3.data;
        _this.products = data.report || [];
        _this.totalRows = data.totalRows || 0;
        _this.rows[0].children = _this.products;
        nprogress__WEBPACK_IMPORTED_MODULE_0___default().done();
        _this.isLoading = false;
      })["catch"](function () {
        nprogress__WEBPACK_IMPORTED_MODULE_0___default().done();
        setTimeout(function () {
          _this.isLoading = false;
        }, 300);
      });
    },
    // ------------------------ Export PDF (NO i18n calls) ------------------------ \\
    exportPdf: function exportPdf() {
      var _this2 = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee() {
        var _this2$serverParams, _this2$serverParams2, _find, _yield$import, jsPDF, autoTable, qp, _yield$axios$get$catc, data, items, pdf, fontPath, rtl, margin, pageW, title, periodLabel, filtersLine, wrapped, hCode, hProd, hPrice, hLast, hDays, neverTx, head, body, stamp, fname, _t;
        return _regenerator().w(function (_context) {
          while (1) switch (_context.p = _context.n) {
            case 0:
              _context.p = 0;
              nprogress__WEBPACK_IMPORTED_MODULE_0___default().start();
              nprogress__WEBPACK_IMPORTED_MODULE_0___default().set(0.2);

              // Lazy-load libs (keeps your current pattern for this page)
              _context.n = 1;
              return __webpack_require__.e(/*! import() */ "node_modules_jspdf_dist_jspdf_es_min_js").then(__webpack_require__.bind(__webpack_require__, /*! jspdf */ "./node_modules/jspdf/dist/jspdf.es.min.js"));
            case 1:
              _yield$import = _context.v;
              jsPDF = _yield$import.jsPDF;
              _context.n = 2;
              return __webpack_require__.e(/*! import() */ "node_modules_jspdf-autotable_dist_jspdf_plugin_autotable_mjs").then(__webpack_require__.bind(__webpack_require__, /*! jspdf-autotable */ "./node_modules/jspdf-autotable/dist/jspdf.plugin.autotable.mjs"));
            case 2:
              autoTable = _context.v["default"];
              // --- gather current filters & fetch ALL rows (limit=-1)
              qp = new URLSearchParams({
                page: '1',
                limit: '-1',
                SortField: ((_this2$serverParams = _this2.serverParams) === null || _this2$serverParams === void 0 || (_this2$serverParams = _this2$serverParams.sort) === null || _this2$serverParams === void 0 ? void 0 : _this2$serverParams.field) || 'last_sale_at',
                SortType: ((_this2$serverParams2 = _this2.serverParams) === null || _this2$serverParams2 === void 0 || (_this2$serverParams2 = _this2$serverParams2.sort) === null || _this2$serverParams2 === void 0 ? void 0 : _this2$serverParams2.type) || 'asc',
                search: _this2.search || '',
                period: String(_this2.period)
              });
              if (_this2.warehouse_id) qp.append('warehouse_id', _this2.warehouse_id);
              if (_this2.brand_id) qp.append('brand_id', _this2.brand_id);
              if (_this2.category_id) qp.append('category_id', _this2.category_id);
              _context.n = 3;
              return axios.get("report/zero_sales_products?".concat(qp.toString()))["catch"](function () {
                return {
                  data: {}
                };
              });
            case 3:
              _yield$axios$get$catc = _context.v;
              data = _yield$axios$get$catc.data;
              items = Array.isArray(data === null || data === void 0 ? void 0 : data.report) ? data.report : []; // --- PDF setup (landscape A4) + RTL + font
              pdf = new jsPDF({
                orientation: 'landscape',
                unit: 'pt',
                format: 'a4'
              }); // Use your only font file for both normal & bold (Arabic-safe)
              fontPath = '/fonts/Vazirmatn-Bold.ttf';
              try {
                pdf.addFont(fontPath, 'Vazirmatn', 'normal');
                pdf.addFont(fontPath, 'Vazirmatn', 'bold');
              } catch (e) {/* ignore if already added */}
              pdf.setFont('Vazirmatn', 'normal');
              rtl = _this2.$i18n && ['ar', 'fa', 'ur', 'he'].includes(_this2.$i18n.locale) || typeof document !== 'undefined' && document.documentElement.dir === 'rtl';
              margin = 40;
              pageW = pdf.internal.pageSize.getWidth(); // --- Header (title + filters)
              pdf.setFont('Vazirmatn', 'bold');
              pdf.setFontSize(16);
              title = 'Zero Sales Products Report';
              rtl ? pdf.text(title, pageW - margin, 36, {
                align: 'right'
              }) : pdf.text(title, margin, 36);
              pdf.setFont('Vazirmatn', 'normal');
              pdf.setFontSize(10);

              // Period label from your dropdown text (already localized)
              periodLabel = ((_find = (_this2.periodOptions || []).find(function (o) {
                return String(o.value) === String(_this2.period);
              })) === null || _find === void 0 ? void 0 : _find.text) || String(_this2.period);
              filtersLine = ["".concat(_this2.$t ? _this2.$t('Period') : 'Period', ": ").concat(periodLabel), _this2.warehouse_id ? "".concat(_this2.$t ? _this2.$t('warehouse') : 'Warehouse', ": ").concat(_this2.warehouse_id) : null, _this2.brand_id ? "".concat(_this2.$t ? _this2.$t('Brand') : 'Brand', ": ").concat(_this2.brand_id) : null, _this2.category_id ? "".concat(_this2.$t ? _this2.$t('Category') : 'Category', ": ").concat(_this2.category_id) : null, _this2.search ? "".concat(_this2.$t ? _this2.$t('Search_this_table') : 'Search', ": \"").concat(_this2.search, "\"") : null].filter(Boolean).join('   •   ');
              wrapped = pdf.splitTextToSize(filtersLine, pageW - margin * 2);
              rtl ? pdf.text(wrapped, pageW - margin, 56, {
                align: 'right'
              }) : pdf.text(wrapped, margin, 56);

              // --- Table
              hCode = _this2.$t ? _this2.$t('Code') : 'Code';
              hProd = _this2.$t ? _this2.$t('Product') : 'Product';
              hPrice = _this2.$t ? _this2.$t('Price') : 'Price';
              hLast = _this2.$t ? _this2.$t('LastSale') : 'Last sale';
              hDays = _this2.$t ? _this2.$t('DaysSinceLastSale') : 'Days since last sale';
              neverTx = _this2.$t ? _this2.$t('Never_Sold') : 'Never Sold';
              head = [[hCode, hProd, hPrice, hLast, hDays]];
              body = items.map(function (r) {
                var _r$price, _r$last_sale_at, _r$days_since_last_sa;
                return [r.code || '', r.name || '', typeof r.price === 'number' ? r.price.toFixed(2) : (_r$price = r.price) !== null && _r$price !== void 0 ? _r$price : '', (_r$last_sale_at = r.last_sale_at) !== null && _r$last_sale_at !== void 0 ? _r$last_sale_at : '—', r.last_sale_at ? (_r$days_since_last_sa = r.days_since_last_sale) !== null && _r$days_since_last_sa !== void 0 ? _r$days_since_last_sa : '' : neverTx];
              });
              autoTable(pdf, {
                startY: 74,
                head: head,
                body: body,
                margin: {
                  left: margin,
                  right: margin
                },
                theme: 'striped',
                styles: {
                  font: 'Vazirmatn',
                  fontStyle: 'normal',
                  fontSize: 9,
                  cellPadding: 6,
                  overflow: 'linebreak',
                  halign: rtl ? 'right' : 'left'
                },
                headStyles: {
                  font: 'Vazirmatn',
                  fontStyle: 'bold',
                  fillColor: [26, 86, 219],
                  textColor: 255,
                  halign: rtl ? 'right' : 'left'
                },
                columnStyles: {
                  2: {
                    halign: 'right'
                  },
                  // Price
                  4: {
                    halign: 'right'
                  } // Days since last sale
                },
                didDrawPage: function didDrawPage(d) {
                  pdf.setFont('Vazirmatn', 'normal');
                  pdf.setFontSize(8);
                  var ph = pdf.internal.pageSize.getHeight();
                  var pn = "".concat(d.pageNumber, " / ").concat(pdf.internal.getNumberOfPages());
                  rtl ? pdf.text(pn, margin, ph - 14, {
                    align: 'left'
                  }) : pdf.text(pn, pageW - margin, ph - 14, {
                    align: 'right'
                  });
                }
              });
              stamp = new Date().toISOString().slice(0, 19).replace(/[:T]/g, '-');
              fname = "zero_sales_products_".concat(String(_this2.period), "_").concat(stamp, ".pdf");
              pdf.save(fname);
              _context.n = 5;
              break;
            case 4:
              _context.p = 4;
              _t = _context.v;
              // optional toast
              _this2.$bvToast && _this2.$bvToast.toast(_this2.$t ? _this2.$t('Export_Failed') : 'Export failed', {
                variant: 'danger',
                solid: true
              });
              // console.error(e);
            case 5:
              _context.p = 5;
              nprogress__WEBPACK_IMPORTED_MODULE_0___default().done();
              return _context.f(5);
            case 6:
              return _context.a(2);
          }
        }, _callee, null, [[0, 4, 5, 6]]);
      }))();
    },
    //------ Print Table Only
    printTableOnly: function printTableOnly() {
      var _this3 = this,
        _find2;
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
      var rowsData = this.rows && this.rows[0] && this.rows[0].children ? this.rows[0].children : this.products || [];

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
          var cellContent = '';
          if (col.field === 'price') {
            cellContent = _this3.formatPriceWithSymbol(_this3.currentUser && _this3.currentUser.currency, row.price, 2);
          } else if (col.field === 'last_sale_at') {
            cellContent = row.last_sale_at || '—';
          } else if (col.field === 'days_since_last_sale') {
            if (!row.last_sale_at) {
              cellContent = _this3.$t('Never_Sold');
            } else {
              cellContent = row.days_since_last_sale || '';
            }
          } else {
            cellContent = row[col.field] || '';
          }
          tableHtml += "<td class=\"text-left\">".concat(cellContent, "</td>");
        });
        tableHtml += "</tr>";
      });
      tableHtml += "</tbody>";

      // Table Footer (Totals)
      var totalPrice = rowsData.reduce(function (sum, row) {
        return sum + parseFloat(row.price || 0);
      }, 0);
      tableHtml += "<tfoot><tr>";
      tableHtml += "<td class=\"text-left font-weight-bold\" colspan=\"2\">".concat(this.$t('Total'), "</td>");
      tableHtml += "<td class=\"text-left font-weight-bold\">".concat(this.formatPriceWithSymbol(this.currentUser && this.currentUser.currency, totalPrice, 2), "</td>");
      tableHtml += "<td colspan=\"2\"></td>"; // Span for LastSale and DaysSinceLastSale
      tableHtml += "</tr></tfoot>";
      tableHtml += "</table>";
      var w = window.open("", "_blank");
      if (!w) {
        window.print();
        return;
      }
      var title = "".concat(this.$t("Reports"), " / ").concat(this.$t("Zero_Sales_Products_Report"));
      var periodLabel = ((_find2 = (this.periodOptions || []).find(function (o) {
        return String(o.value) === String(_this3.period);
      })) === null || _find2 === void 0 ? void 0 : _find2.text) || String(this.period);
      var periodText = "".concat(this.$t('Period'), ": ").concat(periodLabel);
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
      doc.write("<!doctype html>\n<html>\n  <head>\n    <meta charset=\"utf-8\" />\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\" />\n    <base href=\"".concat(window.location.origin, "/\" />\n    <title>").concat(title, "</title>\n    ").concat(links, "\n    ").concat(inlineStyles, "\n    <style>\n      @media print { body, body * { visibility: visible !important; } }\n      body { margin: 0.3cm; }\n      .print-header { font-weight: 600; margin-bottom: 8px; }\n      .print-meta { font-size: 10px; margin-bottom: 15px; color: #666; }\n      table { width: 100%; border-collapse: collapse; }\n      th, td { border: 1px solid #ddd; padding: 8px; text-align: left; }\n      th { background-color: #f2f2f2; }\n    </style>\n  </head>\n  <body>\n    <div class=\"print-header\">").concat(title, "</div>\n    <div class=\"print-meta\">").concat(periodText, "</div>\n    ").concat(tableHtml, "\n  </body>\n</html>"));
      doc.close();
      w.focus();
      setTimeout(function () {
        w.print();
        w.close();
      }, 400);
    }
  },
  created: function created() {
    this.Get_Zero_Sales_Products(1);
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/reports/Zero_Sales_Products_Report.vue?vue&type=template&id=0e229652&scoped=true":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/reports/Zero_Sales_Products_Report.vue?vue&type=template&id=0e229652&scoped=true ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
      page: _vm.$t("Zero_Sales_Products_Report"),
      folder: _vm.$t("Reports")
    }
  }), _vm._v(" "), _vm.isLoading ? _c("div", {
    staticClass: "loading_page spinner spinner-primary mr-3"
  }) : _vm._e(), _vm._v(" "), !_vm.isLoading ? _c("b-card", {
    staticClass: "wrapper print-table-only"
  }, [_c("div", {
    staticClass: "d-flex flex-wrap align-items-center mb-2"
  }, [_c("div", {
    staticClass: "d-flex align-items-center mr-3 mb-2"
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
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "ml-auto mb-2"
  }, [_c("b-button", {
    staticClass: "btn-pill mr-2",
    attrs: {
      size: "sm",
      variant: "outline-secondary"
    },
    on: {
      click: function click($event) {
        return _vm.printTableOnly();
      }
    }
  }, [_c("i", {
    staticClass: "i-Printer mr-1"
  }), _vm._v(_vm._s(_vm.$t("print")) + "\n        ")]), _vm._v(" "), _c("b-button", {
    staticClass: "btn-pill",
    attrs: {
      size: "sm",
      variant: "danger"
    },
    on: {
      click: _vm.exportPdf
    }
  }, [_c("i", {
    staticClass: "i-File-PDF mr-1"
  }), _vm._v(" Export PDF\n        ")])], 1)]), _vm._v(" "), _c("vue-good-table", {
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
        perPage: _vm.serverParams.perPage,
        perPageDropdown: [10, 20, 50, 100],
        dropdownAllowAll: true,
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
        return [props.column.field === "last_sale_at" ? _c("span", [_vm._v("\n          " + _vm._s(props.row.last_sale_at ? props.row.last_sale_at : "—") + "\n        ")]) : props.column.field === "days_since_last_sale" ? _c("span", [!props.row.last_sale_at ? _c("b-badge", {
          attrs: {
            variant: "warning"
          }
        }, [_vm._v("\n            " + _vm._s(_vm.$t("Never_Sold")) + "\n          ")]) : _c("span", [_vm._v(_vm._s(props.row.days_since_last_sale))])], 1) : _c("span", [_vm._v("\n          " + _vm._s(props.formattedRow[props.column.field]) + "\n        ")])];
      }
    }], null, false, 624551675)
  })], 1) : _vm._e()], 1);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-8.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-8.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/reports/Zero_Sales_Products_Report.vue?vue&type=style&index=0&id=0e229652&scoped=true&lang=css":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-8.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-8.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/reports/Zero_Sales_Products_Report.vue?vue&type=style&index=0&id=0e229652&scoped=true&lang=css ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, "\n.btn-pill[data-v-0e229652] { border-radius: 999px;\n}\n", ""]);
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

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-8.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-8.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/reports/Zero_Sales_Products_Report.vue?vue&type=style&index=0&id=0e229652&scoped=true&lang=css":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-8.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-8.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/reports/Zero_Sales_Products_Report.vue?vue&type=style&index=0&id=0e229652&scoped=true&lang=css ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_8_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_8_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Zero_Sales_Products_Report_vue_vue_type_style_index_0_id_0e229652_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-8.use[1]!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-8.use[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Zero_Sales_Products_Report.vue?vue&type=style&index=0&id=0e229652&scoped=true&lang=css */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-8.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-8.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/reports/Zero_Sales_Products_Report.vue?vue&type=style&index=0&id=0e229652&scoped=true&lang=css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_8_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_8_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Zero_Sales_Products_Report_vue_vue_type_style_index_0_id_0e229652_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_8_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_8_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Zero_Sales_Products_Report_vue_vue_type_style_index_0_id_0e229652_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

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

/***/ "./resources/src/views/app/pages/reports/Zero_Sales_Products_Report.vue":
/*!******************************************************************************!*\
  !*** ./resources/src/views/app/pages/reports/Zero_Sales_Products_Report.vue ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Zero_Sales_Products_Report_vue_vue_type_template_id_0e229652_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Zero_Sales_Products_Report.vue?vue&type=template&id=0e229652&scoped=true */ "./resources/src/views/app/pages/reports/Zero_Sales_Products_Report.vue?vue&type=template&id=0e229652&scoped=true");
/* harmony import */ var _Zero_Sales_Products_Report_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Zero_Sales_Products_Report.vue?vue&type=script&lang=js */ "./resources/src/views/app/pages/reports/Zero_Sales_Products_Report.vue?vue&type=script&lang=js");
/* harmony import */ var _Zero_Sales_Products_Report_vue_vue_type_style_index_0_id_0e229652_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Zero_Sales_Products_Report.vue?vue&type=style&index=0&id=0e229652&scoped=true&lang=css */ "./resources/src/views/app/pages/reports/Zero_Sales_Products_Report.vue?vue&type=style&index=0&id=0e229652&scoped=true&lang=css");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Zero_Sales_Products_Report_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _Zero_Sales_Products_Report_vue_vue_type_template_id_0e229652_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render,
  _Zero_Sales_Products_Report_vue_vue_type_template_id_0e229652_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "0e229652",
  null
  
)

/* hot reload */
if (false) // removed by dead control flow
{ var api; }
component.options.__file = "resources/src/views/app/pages/reports/Zero_Sales_Products_Report.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/src/views/app/pages/reports/Zero_Sales_Products_Report.vue?vue&type=script&lang=js":
/*!******************************************************************************************************!*\
  !*** ./resources/src/views/app/pages/reports/Zero_Sales_Products_Report.vue?vue&type=script&lang=js ***!
  \******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Zero_Sales_Products_Report_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Zero_Sales_Products_Report.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/reports/Zero_Sales_Products_Report.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Zero_Sales_Products_Report_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/src/views/app/pages/reports/Zero_Sales_Products_Report.vue?vue&type=style&index=0&id=0e229652&scoped=true&lang=css":
/*!**************************************************************************************************************************************!*\
  !*** ./resources/src/views/app/pages/reports/Zero_Sales_Products_Report.vue?vue&type=style&index=0&id=0e229652&scoped=true&lang=css ***!
  \**************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_8_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_8_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Zero_Sales_Products_Report_vue_vue_type_style_index_0_id_0e229652_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/style-loader/dist/cjs.js!../../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-8.use[1]!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-8.use[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Zero_Sales_Products_Report.vue?vue&type=style&index=0&id=0e229652&scoped=true&lang=css */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-8.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-8.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/reports/Zero_Sales_Products_Report.vue?vue&type=style&index=0&id=0e229652&scoped=true&lang=css");


/***/ }),

/***/ "./resources/src/views/app/pages/reports/Zero_Sales_Products_Report.vue?vue&type=template&id=0e229652&scoped=true":
/*!************************************************************************************************************************!*\
  !*** ./resources/src/views/app/pages/reports/Zero_Sales_Products_Report.vue?vue&type=template&id=0e229652&scoped=true ***!
  \************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Zero_Sales_Products_Report_vue_vue_type_template_id_0e229652_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Zero_Sales_Products_Report_vue_vue_type_template_id_0e229652_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Zero_Sales_Products_Report_vue_vue_type_template_id_0e229652_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Zero_Sales_Products_Report.vue?vue&type=template&id=0e229652&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/reports/Zero_Sales_Products_Report.vue?vue&type=template&id=0e229652&scoped=true");


/***/ })

}]);