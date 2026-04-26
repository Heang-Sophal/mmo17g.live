"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["CustomerLedger"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/people/CustomerLedger.vue?vue&type=script&lang=js":
/*!*********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/people/CustomerLedger.vue?vue&type=script&lang=js ***!
  \*********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_priceFormat__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../utils/priceFormat */ "./resources/src/utils/priceFormat.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
// --- Small reusable toolbar for search + per-page ---
var ListToolbar = {
  name: 'ListToolbar',
  props: {
    placeholder: String,
    value: String,
    // v-model: search
    limit: Number,
    perPageOptions: {
      type: Array,
      "default": function _default() {
        return [10, 25, 50, 100].map(function (v) {
          return {
            value: v,
            text: String(v)
          };
        });
      }
    }
  },
  model: {
    prop: 'value',
    event: 'input'
  },
  methods: {
    emitSearch: function emitSearch() {
      this.$emit('search');
    },
    emitReset: function emitReset() {
      this.$emit('input', '');
      this.$emit('search');
      this.$emit('reset');
    }
  },
  render: function render(h) {
    var _this = this;
    return h('div', {
      "class": 'toolbar'
    }, [h('b-form-input', {
      "class": 'mr-2',
      props: {
        value: this.value,
        placeholder: this.placeholder
      },
      on: {
        input: function input(v) {
          return _this.$emit('input', v);
        },
        keyup: function keyup(e) {
          if (e.key === 'Enter') _this.emitSearch();
        }
      }
    }), h('b-button', {
      "class": 'mr-2 mt-2',
      props: {
        size: 'sm',
        variant: 'primary'
      },
      on: {
        click: this.emitSearch
      }
    }, this.$parent.$t('Search')), h('b-button', {
      "class": 'mr-2 mt-2',
      props: {
        size: 'sm',
        variant: 'outline-secondary'
      },
      on: {
        click: this.emitReset
      }
    }, this.$parent.$t('Reset')), h('div', {
      "class": 'ml-auto d-flex align-items-center'
    }, [h('span', {
      "class": 'mr-2 small text-muted'
    }, this.$parent.$t('Per_page')), h('b-form-select', {
      "class": 'w-auto',
      props: {
        value: this.limit,
        options: this.perPageOptions,
        size: 'sm'
      },
      on: {
        input: function input(v) {
          return _this.$emit('update:limit', v);
        }
      }
    })])]);
  }
};

// --- Simple pager wrapper ---
var Pager = {
  name: 'Pager',
  props: {
    page: Number,
    limit: Number,
    totalRows: Number
  },
  methods: {
    onInput: function onInput() {
      this.$emit('change');
    }
  },
  render: function render(h) {
    var _this2 = this;
    var totalPages = Math.max(1, Math.ceil((this.totalRows || 0) / (this.limit || 10)));
    return h('div', {
      "class": 'pager'
    }, [h('small', {
      "class": 'text-muted'
    }, "".concat(this.$parent.$t('Page'), " ").concat(this.page, " ").concat(this.$parent.$t('Of'), " ").concat(totalPages)), h('b-pagination', {
      props: {
        value: this.page,
        totalRows: this.totalRows,
        perPage: this.limit,
        size: 'sm',
        align: 'right'
      },
      on: {
        input: function input(v) {
          _this2.$emit('update:page', v);
          _this2.onInput();
        }
      }
    })]);
  }
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'CustomerLedgerRefactored',
  components: {
    ListToolbar: ListToolbar,
    Pager: Pager
  },
  props: {
    id: [String, Number]
  },
  metaInfo: function metaInfo() {
    return {
      title: this.$t('Customer_Ledger')
    };
  },
  data: function data() {
    var makeList = function makeList() {
      return {
        loading: false,
        items: [],
        totalRows: 0,
        page: 1,
        limit: 10,
        search: '',
        totals: {},
        pageTotal: 0
      };
    };
    return {
      pageLoading: false,
      exportingPdf: false,
      activeTab: 0,
      price_format_key: null,
      client: {
        id: null,
        name: '',
        email: '',
        phone: '',
        code: '',
        adresse: '',
        country: '',
        city: '',
        tax_number: '',
        salesGrand: 0,
        salesPaid: 0,
        sale_due: 0,
        paymentsTotal: 0,
        return_due: 0,
        opening_balance: 0,
        credit_limit: 0,
        netBalance: 0
      },
      sales: makeList(),
      payments: makeList(),
      quotations: makeList(),
      returns: makeList(),
      // timers for debounce
      _timers: {
        sales: null,
        payments: null,
        quotations: null,
        returns: null
      },
      perPageOptions: [{
        value: 10,
        text: '10'
      }, {
        value: 25,
        text: '25'
      }, {
        value: 50,
        text: '50'
      }, {
        value: 100,
        text: '100'
      }],
      // Table fields (translated)
      salesFields: [{
        key: 'date',
        label: this.$t('Date')
      }, {
        key: 'Ref',
        label: this.$t('Sale_Ref')
      }, {
        key: 'warehouse_name',
        label: this.$t('Warehouse')
      }, {
        key: 'statut',
        label: this.$t('Status')
      }, {
        key: 'GrandTotal',
        label: this.$t('Grand_Total'),
        "class": 'text-right'
      }, {
        key: 'paid_amount',
        label: this.$t('Paid'),
        "class": 'text-right'
      }, {
        key: 'due',
        label: this.$t('Due'),
        "class": 'text-right'
      }, {
        key: 'payment_status',
        label: this.$t('Payment_Status')
      }, {
        key: 'shipping_status',
        label: this.$t('Shipping_Status')
      }],
      paymentsFields: [{
        key: 'date',
        label: this.$t('Date')
      }, {
        key: 'Ref',
        label: this.$t('Payment_Ref')
      }, {
        key: 'payment_type',
        label: this.$t('Type')
      }, {
        key: 'Sale_Ref',
        label: this.$t('Sale_Ref')
      }, {
        key: 'payment_method',
        label: this.$t('Method')
      }, {
        key: 'montant',
        label: this.$t('Amount'),
        "class": 'text-right'
      }],
      quotationsFields: [{
        key: 'date',
        label: this.$t('Date')
      }, {
        key: 'Ref',
        label: this.$t('Quotation_Ref')
      }, {
        key: 'warehouse_name',
        label: this.$t('Warehouse')
      }, {
        key: 'statut',
        label: this.$t('Status')
      }, {
        key: 'GrandTotal',
        label: this.$t('Grand_Total'),
        "class": 'text-right'
      }],
      returnsFields: [{
        key: 'Ref',
        label: this.$t('Return_Ref')
      }, {
        key: 'statut',
        label: this.$t('Status')
      }, {
        key: 'client_name',
        label: this.$t('Customer')
      }, {
        key: 'sale_ref',
        label: this.$t('Sale_Ref')
      }, {
        key: 'warehouse_name',
        label: this.$t('Warehouse')
      }, {
        key: 'GrandTotal',
        label: this.$t('Grand_Total'),
        "class": 'text-right'
      }, {
        key: 'paid_amount',
        label: this.$t('Paid'),
        "class": 'text-right'
      }, {
        key: 'due',
        label: this.$t('Due'),
        "class": 'text-right'
      }, {
        key: 'payment_status',
        label: this.$t('Payment_Status')
      }]
    };
  },
  computed: {
    clientInitials: function clientInitials() {
      var _p$;
      var n = (this.client.name || '').trim();
      if (!n) return 'C';
      var p = n.split(' ').filter(Boolean);
      return ((((_p$ = p[0]) === null || _p$ === void 0 ? void 0 : _p$[0]) || '') + (p.length > 1 ? p[p.length - 1][0] : '')).toUpperCase() || 'C';
    },
    stats: function stats() {
      return {
        salesGrand: this.client.salesGrand || 0,
        salesPaid: this.client.salesPaid || 0,
        salesDue: this.client.sale_due || 0,
        returnsDue: this.client.return_due || 0,
        paymentsTotal: this.client.paymentsTotal || 0,
        openingBalance: this.client.opening_balance || 0,
        totalDue: this.client.netBalance || 0
      };
    }
  },
  watch: {
    // per-page changes
    'sales.limit': function salesLimit(v) {
      this.sales.page = 1;
      this.fetchSales();
    },
    'payments.limit': function paymentsLimit(v) {
      this.payments.page = 1;
      this.fetchPayments();
    },
    'quotations.limit': function quotationsLimit(v) {
      this.quotations.page = 1;
      this.fetchQuotations();
    },
    'returns.limit': function returnsLimit(v) {
      this.returns.page = 1;
      this.fetchReturns();
    },
    // debounced search
    'sales.search': function salesSearch(v) {
      this._debounce('sales', this.fetchSales);
    },
    'payments.search': function paymentsSearch(v) {
      this._debounce('payments', this.fetchPayments);
    },
    'quotations.search': function quotationsSearch(v) {
      this._debounce('quotations', this.fetchQuotations);
    },
    'returns.search': function returnsSearch(v) {
      this._debounce('returns', this.fetchReturns);
    }
  },
  created: function created() {
    var _this3 = this;
    this.pageLoading = true;
    this.fetchClientBrief().then(function () {
      return Promise.all([_this3.fetchSales(), _this3.fetchPayments(), _this3.fetchQuotations(), _this3.fetchReturns()]);
    })["finally"](function () {
      _this3.pageLoading = false;
    });
  },
  methods: {
    // ---- utils ----
    money: function money(v) {
      try {
        var decimals = 2;
        var key = this.price_format_key || (0,_utils_priceFormat__WEBPACK_IMPORTED_MODULE_0__.getPriceFormatSetting)({
          store: this.$store
        });
        if (key) {
          this.price_format_key = key;
        }
        var effectiveKey = key || null;
        return (0,_utils_priceFormat__WEBPACK_IMPORTED_MODULE_0__.formatPriceDisplay)(v, decimals, effectiveKey);
      } catch (e) {
        var n = Number(v || 0);
        return n.toLocaleString(undefined, {
          minimumFractionDigits: 2,
          maximumFractionDigits: 2
        });
      }
    },
    paymentBadge: function paymentBadge(status) {
      var s = String(status || '').toLowerCase().trim();
      if (s.includes('unpaid')) return 'danger';
      if (s.includes('partial')) return 'warning';
      if (s.includes('paid')) return 'success';
      return 'secondary';
    },
    docStatusBadge: function docStatusBadge(st) {
      var s = String(st || '').toLowerCase();
      if (s.includes('completed') || s.includes('approved')) return 'success';
      if (s.includes('pending')) return 'warning';
      if (s.includes('sent')) return 'info';
      if (s.includes('canceled') || s.includes('cancelled') || s.includes('rejected')) return 'danger';
      return 'secondary';
    },
    _debounce: function _debounce(key, fn) {
      var _this4 = this;
      var delay = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 350;
      clearTimeout(this._timers[key]);
      this._timers[key] = setTimeout(function () {
        return fn.call(_this4);
      }, delay);
    },
    // ---- header ----
    fetchClientBrief: function fetchClientBrief() {
      var _this5 = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee() {
        var _yield$axios$get, data, _t;
        return _regenerator().w(function (_context) {
          while (1) switch (_context.p = _context.n) {
            case 0:
              _context.p = 0;
              _context.n = 1;
              return axios.get("/clients/".concat(_this5.id, "/brief"));
            case 1:
              _yield$axios$get = _context.v;
              data = _yield$axios$get.data;
              _this5.client = _objectSpread(_objectSpread({}, _this5.client), data || {});
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
    // ---- list fetch helpers ----
    _fetchList: function _fetchList(endpoint, state) {
      var _arguments = arguments,
        _this6 = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2() {
        var extraParams, post, _yield$axios$get2, data;
        return _regenerator().w(function (_context2) {
          while (1) switch (_context2.p = _context2.n) {
            case 0:
              extraParams = _arguments.length > 2 && _arguments[2] !== undefined ? _arguments[2] : {};
              post = _arguments.length > 3 && _arguments[3] !== undefined ? _arguments[3] : null;
              state.loading = true;
              _context2.p = 1;
              _context2.n = 2;
              return axios.get(endpoint, {
                params: _objectSpread({
                  id: _this6.id,
                  limit: state.limit,
                  page: state.page,
                  search: state.search
                }, extraParams)
              });
            case 2:
              _yield$axios$get2 = _context2.v;
              data = _yield$axios$get2.data;
              return _context2.a(2, data);
            case 3:
              _context2.p = 3;
              state.loading = false;
              return _context2.f(3);
            case 4:
              return _context2.a(2);
          }
        }, _callee2, null, [[1,, 3, 4]]);
      }))();
    },
    // Sales
    fetchSales: function fetchSales() {
      var _this7 = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee3() {
        var data, items, grand, paid, due, i;
        return _regenerator().w(function (_context3) {
          while (1) switch (_context3.n) {
            case 0:
              _context3.n = 1;
              return _this7._fetchList('/sales_client', _this7.sales);
            case 1:
              data = _context3.v;
              items = Array.isArray(data === null || data === void 0 ? void 0 : data.sales) ? data.sales : [];
              _this7.sales.items = items;
              _this7.sales.totalRows = Number((data === null || data === void 0 ? void 0 : data.totalRows) || 0);
              // page totals
              grand = 0, paid = 0, due = 0;
              for (i = 0; i < items.length; i++) {
                grand += Number(items[i].GrandTotal || 0);
                paid += Number(items[i].paid_amount || 0);
                due += Number(items[i].due || 0);
              }
              _this7.sales.totals = {
                grand: grand,
                paid: paid,
                due: due
              };
              // backfill name if empty
              if (!_this7.client.name && items.length) {
                _this7.client.name = items[0].client_name || _this7.client.name;
              }
            case 2:
              return _context3.a(2);
          }
        }, _callee3);
      }))();
    },
    resetSales: function resetSales() {
      this.sales.search = '';
      this.sales.page = 1;
      this.fetchSales();
    },
    // Payments
    fetchPayments: function fetchPayments() {
      var _this8 = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee4() {
        var data, items;
        return _regenerator().w(function (_context4) {
          while (1) switch (_context4.n) {
            case 0:
              _context4.n = 1;
              return _this8._fetchList('/payments_client', _this8.payments);
            case 1:
              data = _context4.v;
              items = Array.isArray(data === null || data === void 0 ? void 0 : data.payments) ? data.payments : [];
              _this8.payments.items = items;
              _this8.payments.totalRows = Number((data === null || data === void 0 ? void 0 : data.totalRows) || 0);
              _this8.payments.pageTotal = items.reduce(function (t, x) {
                return t + Number(x.montant || 0);
              }, 0);
            case 2:
              return _context4.a(2);
          }
        }, _callee4);
      }))();
    },
    resetPayments: function resetPayments() {
      this.payments.search = '';
      this.payments.page = 1;
      this.fetchPayments();
    },
    // Quotations
    fetchQuotations: function fetchQuotations() {
      var _this9 = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee5() {
        var data, items;
        return _regenerator().w(function (_context5) {
          while (1) switch (_context5.n) {
            case 0:
              _context5.n = 1;
              return _this9._fetchList('/quotations_client', _this9.quotations);
            case 1:
              data = _context5.v;
              items = Array.isArray(data === null || data === void 0 ? void 0 : data.quotations) ? data.quotations : [];
              _this9.quotations.items = items;
              _this9.quotations.totalRows = Number((data === null || data === void 0 ? void 0 : data.totalRows) || 0);
              _this9.quotations.pageGrand = items.reduce(function (t, x) {
                return t + Number(x.GrandTotal || 0);
              }, 0);
            case 2:
              return _context5.a(2);
          }
        }, _callee5);
      }))();
    },
    resetQuotations: function resetQuotations() {
      this.quotations.search = '';
      this.quotations.page = 1;
      this.fetchQuotations();
    },
    // Returns
    fetchReturns: function fetchReturns() {
      var _this0 = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee6() {
        var data, items, grand, paid, due, i;
        return _regenerator().w(function (_context6) {
          while (1) switch (_context6.n) {
            case 0:
              _context6.n = 1;
              return _this0._fetchList('/returns_client', _this0.returns);
            case 1:
              data = _context6.v;
              items = Array.isArray(data === null || data === void 0 ? void 0 : data.returns_customer) ? data.returns_customer : [];
              _this0.returns.items = items;
              _this0.returns.totalRows = Number((data === null || data === void 0 ? void 0 : data.totalRows) || 0);
              grand = 0, paid = 0, due = 0;
              for (i = 0; i < items.length; i++) {
                grand += Number(items[i].GrandTotal || 0);
                paid += Number(items[i].paid_amount || 0);
                due += Number(items[i].due || 0);
              }
              _this0.returns.totals = {
                grand: grand,
                paid: paid,
                due: due
              };
            case 2:
              return _context6.a(2);
          }
        }, _callee6);
      }))();
    },
    resetReturns: function resetReturns() {
      this.returns.search = '';
      this.returns.page = 1;
      this.fetchReturns();
    },
    // PDF (full ledger)
    exportPdf: function exportPdf() {
      var _this1 = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee7() {
        var res, blob, url, a, fallbackMsg, _t2;
        return _regenerator().w(function (_context7) {
          while (1) switch (_context7.p = _context7.n) {
            case 0:
              _this1.exportingPdf = true;
              _context7.p = 1;
              _context7.n = 2;
              return axios.get('/client_ledger_pdf', {
                params: {
                  id: _this1.id
                },
                responseType: 'arraybuffer',
                headers: {
                  Accept: 'application/pdf'
                }
              });
            case 2:
              res = _context7.v;
              blob = new Blob([res.data], {
                type: 'application/pdf'
              });
              url = window.URL.createObjectURL(blob);
              a = document.createElement('a');
              a.href = url;
              a.download = "customer_ledger_".concat(_this1.id, ".pdf");
              document.body.appendChild(a);
              a.click();
              a.remove();
              window.URL.revokeObjectURL(url);
              _context7.n = 4;
              break;
            case 3:
              _context7.p = 3;
              _t2 = _context7.v;
              fallbackMsg = _this1.$t && _this1.$t('Failed_to_export') !== 'Failed_to_export' ? _this1.$t('Failed_to_export') : 'Failed to export PDF';
              if (_this1.$bvToast) {
                _this1.$bvToast.toast(fallbackMsg, {
                  title: _this1.$t ? _this1.$t('Error') : 'Error',
                  variant: 'danger',
                  solid: true
                });
              } else {
                // eslint-disable-next-line no-alert
                alert(fallbackMsg);
              }
            case 4:
              _context7.p = 4;
              _this1.exportingPdf = false;
              return _context7.f(4);
            case 5:
              return _context7.a(2);
          }
        }, _callee7, null, [[1, 3, 4, 5]]);
      }))();
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/people/CustomerLedger.vue?vue&type=template&id=307e867a&scoped=true":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/people/CustomerLedger.vue?vue&type=template&id=307e867a&scoped=true ***!
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
      page: _vm.$t("Customer_Ledger"),
      folder: _vm.$t("Customers")
    }
  }), _vm._v(" "), _vm.pageLoading ? _c("div", {
    staticClass: "full-page-loading"
  }, [_c("div", {
    staticClass: "loading-content"
  }, [_c("div", {
    staticClass: "spinner spinner-primary"
  }), _vm._v(" "), _c("div", {
    staticClass: "loading-text mt-3"
  }, [_vm._v(_vm._s(_vm.$t("Loading")) + "...")])])]) : _vm._e(), _vm._v(" "), _c("b-card", {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: !_vm.pageLoading,
      expression: "!pageLoading"
    }],
    staticClass: "mb-3 p-0 overflow-hidden soft-shadow"
  }, [_c("div", {
    staticClass: "header-hero d-flex align-items-center p-3"
  }, [_c("div", {
    staticClass: "avatar-circle mr-3"
  }, [_c("span", [_vm._v(_vm._s(_vm.clientInitials))])]), _vm._v(" "), _c("div", {
    staticClass: "flex-grow-1"
  }, [_c("h4", {
    staticClass: "mb-1"
  }, [_vm._v(_vm._s(_vm.client.name || "-"))]), _vm._v(" "), _c("div", {
    staticClass: "text-light small"
  }, [_c("span", {
    staticClass: "mr-3"
  }, [_vm._v(_vm._s(_vm.$t("Code")) + ": "), _c("b", [_vm._v(_vm._s(_vm.client.code || "-"))])]), _vm._v(" "), _c("span", {
    staticClass: "mr-3"
  }, [_vm._v(_vm._s(_vm.$t("City")) + ": "), _c("b", [_vm._v(_vm._s(_vm.client.city || "-"))])]), _vm._v(" "), _c("span", {
    staticClass: "mr-3"
  }, [_vm._v(_vm._s(_vm.$t("Country")) + ": "), _c("b", [_vm._v(_vm._s(_vm.client.country || "-"))])]), _vm._v(" "), _c("span", {
    staticClass: "mr-3"
  }, [_vm._v(_vm._s(_vm.$t("Tax_Number")) + ": "), _c("b", [_vm._v(_vm._s(_vm.client.tax_number || "-"))])])])]), _vm._v(" "), _c("div", {
    staticClass: "text-right"
  }, [_c("div", {
    staticClass: "text-white small mb-1"
  }, [_c("i", {
    staticClass: "i-Mail mr-1"
  }), _vm._v(_vm._s(_vm.client.email || "-") + "  | \n          "), _c("i", {
    staticClass: "i-Telephone mr-1"
  }), _vm._v(_vm._s(_vm.client.phone || "-") + "\n        ")]), _vm._v(" "), _c("b-button", {
    staticClass: "mr-2",
    attrs: {
      size: "sm",
      variant: "light"
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
  }), _vm._v(" " + _vm._s(_vm.$t("Back")) + "\n        ")]), _vm._v(" "), _c("b-button", {
    staticClass: "mr-2",
    attrs: {
      size: "sm",
      variant: "primary",
      disabled: _vm.exportingPdf
    },
    on: {
      click: _vm.exportPdf
    }
  }, [_c("i", {
    staticClass: "i-File-Download mr-1"
  }), _vm._v(" "), !_vm.exportingPdf ? _c("span", [_vm._v(_vm._s(_vm.$t("Download_PDF")))]) : _c("span", [_vm._v(_vm._s(_vm.$t("Generating")))])])], 1)]), _vm._v(" "), _c("div", {
    staticClass: "p-3"
  }, [_c("b-row", [_c("b-col", {
    staticClass: "mb-2",
    attrs: {
      md: "3"
    }
  }, [_c("div", {
    staticClass: "kpi-card"
  }, [_c("div", {
    staticClass: "kpi-label"
  }, [_vm._v(_vm._s(_vm.$t("Sales_Grand")))]), _vm._v(" "), _c("div", {
    staticClass: "kpi-value"
  }, [_vm._v(_vm._s(_vm.money(_vm.stats.salesGrand)))])])]), _vm._v(" "), _c("b-col", {
    staticClass: "mb-2",
    attrs: {
      md: "3"
    }
  }, [_c("div", {
    staticClass: "kpi-card"
  }, [_c("div", {
    staticClass: "kpi-label"
  }, [_vm._v(_vm._s(_vm.$t("Sales_Paid")))]), _vm._v(" "), _c("div", {
    staticClass: "kpi-value"
  }, [_vm._v(_vm._s(_vm.money(_vm.stats.salesPaid)))])])]), _vm._v(" "), _c("b-col", {
    staticClass: "mb-2",
    attrs: {
      md: "3"
    }
  }, [_c("div", {
    staticClass: "kpi-card"
  }, [_c("div", {
    staticClass: "kpi-label"
  }, [_vm._v(_vm._s(_vm.$t("Opening_Balance")))]), _vm._v(" "), _c("div", {
    staticClass: "kpi-value",
    "class": _vm.stats.openingBalance > 0 ? "text-danger" : "text-success"
  }, [_vm._v(_vm._s(_vm.money(_vm.stats.openingBalance)))])])]), _vm._v(" "), _c("b-col", {
    staticClass: "mb-2",
    attrs: {
      md: "3"
    }
  }, [_c("div", {
    staticClass: "kpi-card"
  }, [_c("div", {
    staticClass: "kpi-label"
  }, [_vm._v(_vm._s(_vm.$t("Sales_Due")))]), _vm._v(" "), _c("div", {
    staticClass: "kpi-value",
    "class": _vm.stats.salesDue > 0 ? "text-danger" : "text-success"
  }, [_vm._v(_vm._s(_vm.money(_vm.stats.salesDue)))])])]), _vm._v(" "), _c("b-col", {
    staticClass: "mb-2",
    attrs: {
      md: "3"
    }
  }, [_c("div", {
    staticClass: "kpi-card"
  }, [_c("div", {
    staticClass: "kpi-label"
  }, [_vm._v(_vm._s(_vm.$t("Total_Due")))]), _vm._v(" "), _c("div", {
    staticClass: "kpi-value",
    "class": _vm.stats.totalDue > 0 ? "text-danger" : "text-success"
  }, [_vm._v(_vm._s(_vm.money(_vm.stats.totalDue)))])])]), _vm._v(" "), _c("b-col", {
    staticClass: "mb-2",
    attrs: {
      md: "3"
    }
  }, [_c("div", {
    staticClass: "kpi-card"
  }, [_c("div", {
    staticClass: "kpi-label"
  }, [_vm._v(_vm._s(_vm.$t("Returns_Due")))]), _vm._v(" "), _c("div", {
    staticClass: "kpi-value text-warning"
  }, [_vm._v(_vm._s(_vm.money(_vm.stats.returnsDue)))])])]), _vm._v(" "), _c("b-col", {
    staticClass: "mb-2",
    attrs: {
      md: "3"
    }
  }, [_c("div", {
    staticClass: "kpi-card"
  }, [_c("div", {
    staticClass: "kpi-label"
  }, [_vm._v(_vm._s(_vm.$t("Payments_Total")))]), _vm._v(" "), _c("div", {
    staticClass: "kpi-value"
  }, [_vm._v(_vm._s(_vm.money(_vm.stats.paymentsTotal)))])])]), _vm._v(" "), _c("b-col", {
    staticClass: "mb-2",
    attrs: {
      md: "3"
    }
  }, [_c("div", {
    staticClass: "kpi-card"
  }, [_c("div", {
    staticClass: "kpi-label"
  }, [_vm._v(_vm._s(_vm.$t("Credit_Limit")))]), _vm._v(" "), _c("div", {
    staticClass: "kpi-value text-info"
  }, [_vm._v(_vm._s(_vm.client.credit_limit && _vm.client.credit_limit > 0 ? _vm.money(_vm.client.credit_limit) : _vm.$t("No_limit")))])])])], 1)], 1)]), _vm._v(" "), _c("div", {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: !_vm.pageLoading,
      expression: "!pageLoading"
    }]
  }, [_c("b-card", {
    staticClass: "soft-shadow"
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
  }, [_c("ListToolbar", {
    attrs: {
      placeholder: _vm.$t("Search_sales_ph"),
      limit: _vm.sales.limit,
      "per-page-options": _vm.perPageOptions
    },
    on: {
      "update:limit": function updateLimit($event) {
        return _vm.$set(_vm.sales, "limit", $event);
      },
      search: _vm.fetchSales,
      reset: _vm.resetSales
    },
    model: {
      value: _vm.sales.search,
      callback: function callback($$v) {
        _vm.$set(_vm.sales, "search", $$v);
      },
      expression: "sales.search"
    }
  }), _vm._v(" "), _c("div", {
    staticClass: "mb-2 small text-muted"
  }, [_vm._v("\n            " + _vm._s(_vm.$t("Page_totals")) + " —\n            " + _vm._s(_vm.$t("Grand")) + ": "), _c("b", [_vm._v(_vm._s(_vm.money(_vm.sales.totals.grand)))]), _vm._v(",\n            " + _vm._s(_vm.$t("Paid")) + ": "), _c("b", [_vm._v(_vm._s(_vm.money(_vm.sales.totals.paid)))]), _vm._v(",\n            " + _vm._s(_vm.$t("Due")) + ": "), _c("b", [_vm._v(_vm._s(_vm.money(_vm.sales.totals.due)))])]), _vm._v(" "), _vm.sales.loading ? _c("div", {
    staticClass: "text-center p-3"
  }, [_c("b-spinner")], 1) : _c("b-table", {
    staticClass: "table-modern",
    attrs: {
      items: _vm.sales.items,
      fields: _vm.salesFields,
      striped: "",
      hover: "",
      responsive: "",
      small: "",
      "head-variant": "light"
    },
    scopedSlots: _vm._u([{
      key: "cell(GrandTotal)",
      fn: function fn(_ref) {
        var item = _ref.item;
        return [_vm._v(_vm._s(_vm.money(item.GrandTotal)))];
      }
    }, {
      key: "cell(paid_amount)",
      fn: function fn(_ref2) {
        var item = _ref2.item;
        return [_vm._v(_vm._s(_vm.money(item.paid_amount)))];
      }
    }, {
      key: "cell(due)",
      fn: function fn(_ref3) {
        var item = _ref3.item;
        return [_vm._v(_vm._s(_vm.money(item.due)))];
      }
    }, {
      key: "cell(payment_status)",
      fn: function fn(_ref4) {
        var item = _ref4.item;
        return [_c("b-badge", {
          attrs: {
            variant: _vm.paymentBadge(item.payment_status)
          }
        }, [_vm._v(_vm._s(item.payment_status))])];
      }
    }, {
      key: "cell(statut)",
      fn: function fn(_ref5) {
        var item = _ref5.item;
        return [_c("b-badge", {
          attrs: {
            variant: _vm.docStatusBadge(item.statut)
          }
        }, [_vm._v(_vm._s(item.statut))])];
      }
    }])
  }), _vm._v(" "), _c("Pager", {
    attrs: {
      page: _vm.sales.page,
      limit: _vm.sales.limit,
      "total-rows": _vm.sales.totalRows
    },
    on: {
      "update:page": function updatePage($event) {
        return _vm.$set(_vm.sales, "page", $event);
      },
      change: _vm.fetchSales
    }
  })], 1), _vm._v(" "), _c("b-tab", {
    attrs: {
      title: _vm.$t("Payments")
    }
  }, [_c("ListToolbar", {
    attrs: {
      placeholder: _vm.$t("Search_payments_ph"),
      limit: _vm.payments.limit,
      "per-page-options": _vm.perPageOptions
    },
    on: {
      "update:limit": function updateLimit($event) {
        return _vm.$set(_vm.payments, "limit", $event);
      },
      search: _vm.fetchPayments,
      reset: _vm.resetPayments
    },
    model: {
      value: _vm.payments.search,
      callback: function callback($$v) {
        _vm.$set(_vm.payments, "search", $$v);
      },
      expression: "payments.search"
    }
  }), _vm._v(" "), _c("div", {
    staticClass: "mb-2 small text-muted"
  }, [_vm._v("\n            " + _vm._s(_vm.$t("Page_total")) + " — " + _vm._s(_vm.$t("Payments")) + ": "), _c("b", [_vm._v(_vm._s(_vm.money(_vm.payments.pageTotal)))])]), _vm._v(" "), _vm.payments.loading ? _c("div", {
    staticClass: "text-center p-3"
  }, [_c("b-spinner")], 1) : _c("b-table", {
    staticClass: "table-modern",
    attrs: {
      items: _vm.payments.items,
      fields: _vm.paymentsFields,
      striped: "",
      hover: "",
      responsive: "",
      small: "",
      "head-variant": "light"
    },
    scopedSlots: _vm._u([{
      key: "cell(payment_type)",
      fn: function fn(_ref6) {
        var item = _ref6.item;
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
      fn: function fn(_ref7) {
        var item = _ref7.item;
        return [item.Sale_Ref ? _c("span", [_vm._v(_vm._s(item.Sale_Ref))]) : _c("span", {
          staticClass: "text-muted"
        }, [_vm._v("-")])];
      }
    }, {
      key: "cell(montant)",
      fn: function fn(_ref8) {
        var item = _ref8.item;
        return [_vm._v(_vm._s(_vm.money(item.montant)))];
      }
    }])
  }), _vm._v(" "), _c("Pager", {
    attrs: {
      page: _vm.payments.page,
      limit: _vm.payments.limit,
      "total-rows": _vm.payments.totalRows
    },
    on: {
      "update:page": function updatePage($event) {
        return _vm.$set(_vm.payments, "page", $event);
      },
      change: _vm.fetchPayments
    }
  })], 1), _vm._v(" "), _c("b-tab", {
    attrs: {
      title: _vm.$t("Quotations")
    }
  }, [_c("ListToolbar", {
    attrs: {
      placeholder: _vm.$t("Search_quotations_ph"),
      limit: _vm.quotations.limit,
      "per-page-options": _vm.perPageOptions
    },
    on: {
      "update:limit": function updateLimit($event) {
        return _vm.$set(_vm.quotations, "limit", $event);
      },
      search: _vm.fetchQuotations,
      reset: _vm.resetQuotations
    },
    model: {
      value: _vm.quotations.search,
      callback: function callback($$v) {
        _vm.$set(_vm.quotations, "search", $$v);
      },
      expression: "quotations.search"
    }
  }), _vm._v(" "), _c("div", {
    staticClass: "mb-2 small text-muted"
  }, [_vm._v("\n            " + _vm._s(_vm.$t("Page_total")) + " — " + _vm._s(_vm.$t("Grand")) + ": "), _c("b", [_vm._v(_vm._s(_vm.money(_vm.quotations.pageGrand)))])]), _vm._v(" "), _vm.quotations.loading ? _c("div", {
    staticClass: "text-center p-3"
  }, [_c("b-spinner")], 1) : _c("b-table", {
    staticClass: "table-modern",
    attrs: {
      items: _vm.quotations.items,
      fields: _vm.quotationsFields,
      striped: "",
      hover: "",
      responsive: "",
      small: "",
      "head-variant": "light"
    },
    scopedSlots: _vm._u([{
      key: "cell(GrandTotal)",
      fn: function fn(_ref9) {
        var item = _ref9.item;
        return [_vm._v(_vm._s(_vm.money(item.GrandTotal)))];
      }
    }, {
      key: "cell(statut)",
      fn: function fn(_ref0) {
        var item = _ref0.item;
        return [_c("b-badge", {
          attrs: {
            variant: _vm.docStatusBadge(item.statut)
          }
        }, [_vm._v(_vm._s(item.statut))])];
      }
    }])
  }), _vm._v(" "), _c("Pager", {
    attrs: {
      page: _vm.quotations.page,
      limit: _vm.quotations.limit,
      "total-rows": _vm.quotations.totalRows
    },
    on: {
      "update:page": function updatePage($event) {
        return _vm.$set(_vm.quotations, "page", $event);
      },
      change: _vm.fetchQuotations
    }
  })], 1), _vm._v(" "), _c("b-tab", {
    attrs: {
      title: _vm.$t("Returns")
    }
  }, [_c("ListToolbar", {
    attrs: {
      placeholder: _vm.$t("Search_returns_ph"),
      limit: _vm.returns.limit,
      "per-page-options": _vm.perPageOptions
    },
    on: {
      "update:limit": function updateLimit($event) {
        return _vm.$set(_vm.returns, "limit", $event);
      },
      search: _vm.fetchReturns,
      reset: _vm.resetReturns
    },
    model: {
      value: _vm.returns.search,
      callback: function callback($$v) {
        _vm.$set(_vm.returns, "search", $$v);
      },
      expression: "returns.search"
    }
  }), _vm._v(" "), _c("div", {
    staticClass: "mb-2 small text-muted"
  }, [_vm._v("\n            " + _vm._s(_vm.$t("Page_totals")) + " —\n            " + _vm._s(_vm.$t("Grand")) + ": "), _c("b", [_vm._v(_vm._s(_vm.money(_vm.returns.totals.grand)))]), _vm._v(",\n            " + _vm._s(_vm.$t("Paid")) + ": "), _c("b", [_vm._v(_vm._s(_vm.money(_vm.returns.totals.paid)))]), _vm._v(",\n            " + _vm._s(_vm.$t("Due")) + ": "), _c("b", [_vm._v(_vm._s(_vm.money(_vm.returns.totals.due)))])]), _vm._v(" "), _vm.returns.loading ? _c("div", {
    staticClass: "text-center p-3"
  }, [_c("b-spinner")], 1) : _c("b-table", {
    staticClass: "table-modern",
    attrs: {
      items: _vm.returns.items,
      fields: _vm.returnsFields,
      striped: "",
      hover: "",
      responsive: "",
      small: "",
      "head-variant": "light"
    },
    scopedSlots: _vm._u([{
      key: "cell(GrandTotal)",
      fn: function fn(_ref1) {
        var item = _ref1.item;
        return [_vm._v(_vm._s(_vm.money(item.GrandTotal)))];
      }
    }, {
      key: "cell(paid_amount)",
      fn: function fn(_ref10) {
        var item = _ref10.item;
        return [_vm._v(_vm._s(_vm.money(item.paid_amount)))];
      }
    }, {
      key: "cell(due)",
      fn: function fn(_ref11) {
        var item = _ref11.item;
        return [_vm._v(_vm._s(_vm.money(item.due)))];
      }
    }, {
      key: "cell(payment_status)",
      fn: function fn(_ref12) {
        var item = _ref12.item;
        return [_c("b-badge", {
          attrs: {
            variant: _vm.paymentBadge(item.payment_status)
          }
        }, [_vm._v(_vm._s(item.payment_status))])];
      }
    }, {
      key: "cell(statut)",
      fn: function fn(_ref13) {
        var item = _ref13.item;
        return [_c("b-badge", {
          attrs: {
            variant: _vm.docStatusBadge(item.statut)
          }
        }, [_vm._v(_vm._s(item.statut))])];
      }
    }])
  }), _vm._v(" "), _c("Pager", {
    attrs: {
      page: _vm.returns.page,
      limit: _vm.returns.limit,
      "total-rows": _vm.returns.totalRows
    },
    on: {
      "update:page": function updatePage($event) {
        return _vm.$set(_vm.returns, "page", $event);
      },
      change: _vm.fetchReturns
    }
  })], 1)], 1)], 1)], 1)], 1);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-8.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-8.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/people/CustomerLedger.vue?vue&type=style&index=0&id=307e867a&scoped=true&lang=css":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-8.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-8.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/people/CustomerLedger.vue?vue&type=style&index=0&id=307e867a&scoped=true&lang=css ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, "\n.soft-shadow[data-v-307e867a] { box-shadow: 0 6px 18px rgba(0,0,0,0.06);\n}\n.header-hero[data-v-307e867a] { background: linear-gradient(135deg, #6b8dfc 0%, #88aafc 100%); color: #fff;\n}\n.avatar-circle[data-v-307e867a] { width:56px; height:56px; border-radius:50%; background:rgba(255,255,255,0.2); display:flex; align-items:center; justify-content:center; font-weight:700; font-size:20px; color:#fff; backdrop-filter: saturate(120%);\n}\n.kpi-card[data-v-307e867a] { background:#ffffff; border-radius:14px; padding:14px 16px; border:1px solid #eef2f7; box-shadow: 0 4px 16px rgba(17,24,39,0.06);\n}\n.kpi-label[data-v-307e867a] { font-size:12px; color:#6b7280;\n}\n.kpi-value[data-v-307e867a] { font-size:18px; font-weight:700; color:#111827; letter-spacing: 0.2px;\n}\n.toolbar[data-v-307e867a] { display:flex; align-items:center; margin-bottom:12px; flex-wrap:wrap; gap: 8px;\n}\n.toolbar .form-control[data-v-307e867a] { min-width: 260px;\n}\n.pager[data-v-307e867a] { display:flex; justify-content:space-between; align-items:center; margin-top:10px;\n}\n\n/* Modern table appearance */\n[data-v-307e867a] .table-modern thead th { background: #f8fafc; color:#374151; font-weight:600; border-bottom: 1px solid #e5e7eb;\n}\n[data-v-307e867a] .table-modern tbody tr:hover { background: #f9fbff;\n}\n[data-v-307e867a] .table-modern td,[data-v-307e867a] .table-modern th { vertical-align: middle;\n}\n[data-v-307e867a] .badge { font-weight: 600; letter-spacing: .2px;\n}\n\n/* Full Page Loading Overlay */\n.full-page-loading[data-v-307e867a] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background: rgba(255, 255, 255, 0.95);\n  z-index: 9999;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  backdrop-filter: blur(2px);\n}\n.loading-content[data-v-307e867a] {\n  text-align: center;\n}\n.loading-text[data-v-307e867a] {\n  color: #6b7280;\n  font-size: 16px;\n  font-weight: 500;\n}\n.full-page-loading .spinner[data-v-307e867a] {\n  width: 50px;\n  height: 50px;\n  border-width: 4px;\n}\n", ""]);
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

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-8.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-8.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/people/CustomerLedger.vue?vue&type=style&index=0&id=307e867a&scoped=true&lang=css":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-8.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-8.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/people/CustomerLedger.vue?vue&type=style&index=0&id=307e867a&scoped=true&lang=css ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_8_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_8_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CustomerLedger_vue_vue_type_style_index_0_id_307e867a_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-8.use[1]!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-8.use[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./CustomerLedger.vue?vue&type=style&index=0&id=307e867a&scoped=true&lang=css */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-8.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-8.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/people/CustomerLedger.vue?vue&type=style&index=0&id=307e867a&scoped=true&lang=css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_8_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_8_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CustomerLedger_vue_vue_type_style_index_0_id_307e867a_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_8_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_8_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CustomerLedger_vue_vue_type_style_index_0_id_307e867a_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

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

/***/ "./resources/src/views/app/pages/people/CustomerLedger.vue":
/*!*****************************************************************!*\
  !*** ./resources/src/views/app/pages/people/CustomerLedger.vue ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _CustomerLedger_vue_vue_type_template_id_307e867a_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CustomerLedger.vue?vue&type=template&id=307e867a&scoped=true */ "./resources/src/views/app/pages/people/CustomerLedger.vue?vue&type=template&id=307e867a&scoped=true");
/* harmony import */ var _CustomerLedger_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CustomerLedger.vue?vue&type=script&lang=js */ "./resources/src/views/app/pages/people/CustomerLedger.vue?vue&type=script&lang=js");
/* harmony import */ var _CustomerLedger_vue_vue_type_style_index_0_id_307e867a_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./CustomerLedger.vue?vue&type=style&index=0&id=307e867a&scoped=true&lang=css */ "./resources/src/views/app/pages/people/CustomerLedger.vue?vue&type=style&index=0&id=307e867a&scoped=true&lang=css");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _CustomerLedger_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _CustomerLedger_vue_vue_type_template_id_307e867a_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render,
  _CustomerLedger_vue_vue_type_template_id_307e867a_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "307e867a",
  null
  
)

/* hot reload */
if (false) // removed by dead control flow
{ var api; }
component.options.__file = "resources/src/views/app/pages/people/CustomerLedger.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/src/views/app/pages/people/CustomerLedger.vue?vue&type=script&lang=js":
/*!*****************************************************************************************!*\
  !*** ./resources/src/views/app/pages/people/CustomerLedger.vue?vue&type=script&lang=js ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CustomerLedger_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./CustomerLedger.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/people/CustomerLedger.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CustomerLedger_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/src/views/app/pages/people/CustomerLedger.vue?vue&type=style&index=0&id=307e867a&scoped=true&lang=css":
/*!*************************************************************************************************************************!*\
  !*** ./resources/src/views/app/pages/people/CustomerLedger.vue?vue&type=style&index=0&id=307e867a&scoped=true&lang=css ***!
  \*************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_8_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_8_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CustomerLedger_vue_vue_type_style_index_0_id_307e867a_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/style-loader/dist/cjs.js!../../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-8.use[1]!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-8.use[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./CustomerLedger.vue?vue&type=style&index=0&id=307e867a&scoped=true&lang=css */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-8.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-8.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/people/CustomerLedger.vue?vue&type=style&index=0&id=307e867a&scoped=true&lang=css");


/***/ }),

/***/ "./resources/src/views/app/pages/people/CustomerLedger.vue?vue&type=template&id=307e867a&scoped=true":
/*!***********************************************************************************************************!*\
  !*** ./resources/src/views/app/pages/people/CustomerLedger.vue?vue&type=template&id=307e867a&scoped=true ***!
  \***********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CustomerLedger_vue_vue_type_template_id_307e867a_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CustomerLedger_vue_vue_type_template_id_307e867a_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CustomerLedger_vue_vue_type_template_id_307e867a_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./CustomerLedger.vue?vue&type=template&id=307e867a&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/people/CustomerLedger.vue?vue&type=template&id=307e867a&scoped=true");


/***/ })

}]);