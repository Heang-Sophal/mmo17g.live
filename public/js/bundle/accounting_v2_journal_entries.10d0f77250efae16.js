"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["accounting_v2_journal_entries"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/accounting_v2/journal_entries.vue?vue&type=script&lang=js":
/*!*****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/accounting_v2/journal_entries.vue?vue&type=script&lang=js ***!
  \*****************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! nprogress */ "./node_modules/nprogress/nprogress.js");
/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(nprogress__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_priceFormat__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../utils/priceFormat */ "./resources/src/utils/priceFormat.js");
function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "JournalEntriesV2",
  data: function data() {
    return {
      isLoading: true,
      rows: [],
      accounts: [],
      totalRows: "",
      serverParams: {
        columnFilters: {},
        sort: {
          field: "date",
          type: "desc"
        },
        page: 1,
        perPage: 10
      },
      search: "",
      limit: "10",
      showModal: false,
      editing: false,
      entry: {
        id: null,
        date: "",
        description: "",
        lines: []
      },
      showView: false,
      current: null,
      btnLoading: false,
      postingId: null,
      showErrors: false
    };
  },
  computed: {
    columns: function columns() {
      return [{
        label: this.$t('Date'),
        field: 'date',
        tdClass: 'text-left',
        thClass: 'text-left'
      }, {
        label: this.$t('Description'),
        field: 'description',
        tdClass: 'text-left',
        thClass: 'text-left'
      }, {
        label: this.$t('Source'),
        field: 'reference_type',
        tdClass: 'text-left',
        thClass: 'text-left'
      }, {
        label: this.$t('Status'),
        field: 'status',
        sortable: false,
        tdClass: 'text-center',
        thClass: 'text-center'
      }, {
        label: this.$t('Action'),
        field: 'actions',
        sortable: false,
        tdClass: 'text-right',
        thClass: 'text-right'
      }];
    },
    totals: function totals() {
      return this.entry.lines.reduce(function (acc, l) {
        acc.debit += Number(l.debit || 0);
        acc.credit += Number(l.credit || 0);
        return acc;
      }, {
        debit: 0,
        credit: 0
      });
    },
    balanced: function balanced() {
      return Math.abs(this.totals.debit - this.totals.credit) < 0.0001;
    },
    linesValid: function linesValid() {
      var _this = this;
      return this.entry.lines.every(function (l) {
        return _this.validRow(l);
      });
    }
  },
  created: function created() {
    this.Get_Journals(1);
    this.fetchAccounts();
  },
  methods: {
    updateParams: function updateParams(newProps) {
      this.serverParams = Object.assign({}, this.serverParams, newProps);
    },
    onPageChange: function onPageChange(_ref) {
      var currentPage = _ref.currentPage;
      if (this.serverParams.page !== currentPage) {
        this.updateParams({
          page: currentPage
        });
        this.Get_Journals(currentPage);
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
        this.Get_Journals(1);
      }
    },
    onSortChange: function onSortChange(params) {
      if (!params || !params.length) return;
      this.updateParams({
        sort: {
          type: params[0].type,
          field: params[0].field
        }
      });
      this.Get_Journals(this.serverParams.page);
    },
    onSearch: function onSearch(value) {
      this.search = value.searchTerm;
      this.Get_Journals(this.serverParams.page);
    },
    Get_Journals: function Get_Journals(page) {
      var _this2 = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee() {
        return _regenerator().w(function (_context) {
          while (1) switch (_context.n) {
            case 0:
              nprogress__WEBPACK_IMPORTED_MODULE_0___default().start();
              nprogress__WEBPACK_IMPORTED_MODULE_0___default().set(0.1);
              axios.get("/accounting/v2/journal-entries?page=" + page + "&SortField=" + _this2.serverParams.sort.field + "&SortType=" + _this2.serverParams.sort.type + "&search=" + _this2.search + "&limit=" + _this2.limit).then(function (_ref3) {
                var _ref4, _data$total;
                var data = _ref3.data;
                // paginator shape (data, total) or custom
                _this2.rows = data && (data.data || data.rows || []) || [];
                _this2.totalRows = data && ((_ref4 = (_data$total = data.total) !== null && _data$total !== void 0 ? _data$total : data.totalRows) !== null && _ref4 !== void 0 ? _ref4 : _this2.rows.length) || 0;
                nprogress__WEBPACK_IMPORTED_MODULE_0___default().done();
                _this2.isLoading = false;
              })["catch"](function () {
                nprogress__WEBPACK_IMPORTED_MODULE_0___default().done();
                _this2.isLoading = false;
              });
            case 1:
              return _context.a(2);
          }
        }, _callee);
      }))();
    },
    fetchAccounts: function fetchAccounts() {
      var _this3 = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2() {
        var _yield$axios$get, data, _t;
        return _regenerator().w(function (_context2) {
          while (1) switch (_context2.p = _context2.n) {
            case 0:
              _context2.p = 0;
              _context2.n = 1;
              return axios.get("/accounting/v2/coa", {
                params: {
                  limit: -1,
                  SortField: 'code',
                  SortType: 'asc',
                  active: 1
                }
              });
            case 1:
              _yield$axios$get = _context2.v;
              data = _yield$axios$get.data;
              _this3.accounts = data && data.data || [];
              _context2.n = 3;
              break;
            case 2:
              _context2.p = 2;
              _t = _context2.v;
            case 3:
              return _context2.a(2);
          }
        }, _callee2, null, [[0, 2]]);
      }))();
    },
    openCreate: function openCreate() {
      this.editing = false;
      this.entry = {
        id: null,
        date: new Date().toISOString().slice(0, 10),
        description: "",
        lines: [{
          coa_id: null,
          debit: 0,
          credit: 0,
          memo: ""
        }, {
          coa_id: null,
          debit: 0,
          credit: 0,
          memo: ""
        }]
      };
      this.btnLoading = false;
      this.showErrors = false;
      this.showModal = true;
    },
    view: function view(j) {
      this.current = j;
      this.showView = true;
    },
    tryEdit: function tryEdit(j) {
      if (j.status === 'posted') return;
      this.editing = true;
      this.entry = {
        id: j.id,
        date: j.date,
        description: j.description || "",
        lines: (j.lines || []).map(function (l) {
          return {
            coa_id: l.coa_id,
            debit: l.debit,
            credit: l.credit,
            memo: l.memo
          };
        })
      };
      this.btnLoading = false;
      this.showErrors = false;
      this.showModal = true;
    },
    tryDelete: function tryDelete(j) {
      var _this4 = this;
      if (j.status === 'posted') return;
      this.$swal({
        title: this.$t('Delete'),
        text: this.$t('Delete_Draft_Entry_Question'),
        type: 'warning',
        showCancelButton: true,
        confirmButtonText: this.$t('Delete')
      }).then(function (r) {
        if (r.value) _this4.remove(j);
      });
    },
    addLine: function addLine() {
      this.entry.lines.push({
        coa_id: null,
        debit: 0,
        credit: 0,
        memo: ""
      });
    },
    closeModal: function closeModal() {
      this.btnLoading = false;
      this.showErrors = false;
      this.showModal = false;
    },
    save: function save() {
      var _this5 = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee3() {
        var payload, _t2;
        return _regenerator().w(function (_context3) {
          while (1) switch (_context3.p = _context3.n) {
            case 0:
              _context3.p = 0;
              _this5.btnLoading = true;
              _this5.showErrors = true;
              if (_this5.linesValid) {
                _context3.n = 1;
                break;
              }
              _this5.btnLoading = false;
              return _context3.a(2, _this5.makeToast('danger', _this5.$t('Complete_Lines_Message'), _this5.$t('Validation')));
            case 1:
              payload = {
                date: _this5.entry.date,
                description: _this5.entry.description,
                lines: _this5.entry.lines
              };
              if (!(_this5.editing && _this5.entry.id)) {
                _context3.n = 3;
                break;
              }
              _context3.n = 2;
              return axios.put("/accounting/v2/journal-entries/".concat(_this5.entry.id), payload);
            case 2:
              _this5.makeToast('success', _this5.$t('Entry_Updated'), _this5.$t('Success'));
              _context3.n = 5;
              break;
            case 3:
              _context3.n = 4;
              return axios.post("/accounting/v2/journal-entries", payload);
            case 4:
              _this5.makeToast('success', _this5.$t('Entry_Created_Draft'), _this5.$t('Success'));
            case 5:
              _this5.showModal = false;
              _this5.Get_Journals(_this5.serverParams.page);
              _context3.n = 7;
              break;
            case 6:
              _context3.p = 6;
              _t2 = _context3.v;
              _this5.makeToast('danger', _this5.$t('Operation_Failed'), _this5.$t('Error'));
            case 7:
              _context3.p = 7;
              _this5.btnLoading = false;
              return _context3.f(7);
            case 8:
              return _context3.a(2);
          }
        }, _callee3, null, [[0, 6, 7, 8]]);
      }))();
    },
    remove: function remove(j) {
      var _this6 = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee4() {
        var _t3;
        return _regenerator().w(function (_context4) {
          while (1) switch (_context4.p = _context4.n) {
            case 0:
              _context4.p = 0;
              _context4.n = 1;
              return axios["delete"]("/accounting/v2/journal-entries/".concat(j.id));
            case 1:
              _this6.makeToast('success', _this6.$t('Deleted_Successfully'), _this6.$t('Success'));
              _this6.Get_Journals(_this6.serverParams.page);
              _context4.n = 3;
              break;
            case 2:
              _context4.p = 2;
              _t3 = _context4.v;
              _this6.makeToast('danger', _this6.$t('Delete_Failed'), _this6.$t('Error'));
            case 3:
              return _context4.a(2);
          }
        }, _callee4, null, [[0, 2]]);
      }))();
    },
    post: function post(j) {
      var _this7 = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee5() {
        var fallback, msg, _t4;
        return _regenerator().w(function (_context5) {
          while (1) switch (_context5.p = _context5.n) {
            case 0:
              _this7.postingId = j.id;
              _context5.p = 1;
              _context5.n = 2;
              return axios.post("/accounting/v2/journal-entries/".concat(j.id, "/post"));
            case 2:
              _this7.makeToast('success', _this7.$t('Posted_Successfully'), _this7.$t('Success'));
              _this7.Get_Journals(_this7.serverParams.page);
              _context5.n = 4;
              break;
            case 3:
              _context5.p = 3;
              _t4 = _context5.v;
              fallback = _this7.$t('Post_Failed');
              msg = _t4 && _t4.response && _t4.response.data && (_t4.response.data.message || _t4.response.data.error) || fallback;
              _this7.makeToast('danger', msg, _this7.$t('Error'));
            case 4:
              _context5.p = 4;
              _this7.postingId = null;
              return _context5.f(4);
            case 5:
              return _context5.a(2);
          }
        }, _callee5, null, [[1, 3, 4, 5]]);
      }))();
    },
    // Price formatting for display only (does NOT affect calculations or stored values)
    // Uses the global/system price_format setting when available; otherwise falls back
    // to the existing toLocaleString behavior to preserve current behavior.
    toMoney: function toMoney(v) {
      try {
        var n = parseFloat(v || 0);
        var key = this.price_format_key || (0,_utils_priceFormat__WEBPACK_IMPORTED_MODULE_1__.getPriceFormatSetting)({
          store: this.$store
        });
        if (key) {
          this.price_format_key = key;
        }
        var effectiveKey = key || null;
        return (0,_utils_priceFormat__WEBPACK_IMPORTED_MODULE_1__.formatPriceDisplay)(n, 2, effectiveKey);
      } catch (e) {
        var _n = parseFloat(v || 0);
        return _n.toLocaleString(undefined, {
          minimumFractionDigits: 2,
          maximumFractionDigits: 2
        });
      }
    },
    accountName: function accountName(id) {
      var a = this.accounts.find(function (x) {
        return x.id === id;
      });
      return a ? "".concat(a.code, " \u2014 ").concat(a.name) : id;
    },
    statusLabel: function statusLabel(status) {
      if (!status) return '';
      if (status === 'posted') return this.$t('Journal_Status_Posted');
      if (status === 'draft') return this.$t('Journal_Status_Draft');
      return this.$t(status);
    },
    onAmountChange: function onAmountChange(idx, field) {
      var l = this.entry.lines[idx];
      var val = Number(l[field] || 0);
      if (val < 0 || isNaN(val)) l[field] = 0;
      if (field === 'debit' && val > 0) l.credit = 0;
      if (field === 'credit' && val > 0) l.debit = 0;
    },
    validRow: function validRow(l) {
      var debit = Number(l.debit || 0);
      var credit = Number(l.credit || 0);
      if (!l.coa_id) return false;
      var hasOne = debit > 0 !== credit > 0;
      var nonNegative = debit >= 0 && credit >= 0;
      return hasOne && nonNegative;
    },
    removeLine: function removeLine(idx) {
      if (this.entry.lines.length <= 1) {
        return this.makeToast('warning', this.$t('At_Least_One_Line'), this.$t('Notice'));
      }
      this.entry.lines.splice(idx, 1);
    },
    makeToast: function makeToast(variant, msg, title) {
      this.$root.$bvToast.toast(msg, {
        title: title,
        variant: variant,
        solid: true
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/accounting_v2/journal_entries.vue?vue&type=template&id=55a498d2&scoped=true":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/accounting_v2/journal_entries.vue?vue&type=template&id=55a498d2&scoped=true ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
  }, [_c("div", {
    staticClass: "d-flex align-items-center justify-content-between mb-3"
  }, [_c("div", [_c("h4", {
    staticClass: "mb-1"
  }, [_vm._v(_vm._s(_vm.$t("Journal_Entries_Title")))]), _vm._v(" "), _c("div", {
    staticClass: "text-muted small"
  }, [_vm._v(_vm._s(_vm.$t("Journal_Entries_Subtitle")))])])]), _vm._v(" "), _vm.isLoading ? _c("div", {
    staticClass: "loading_page spinner spinner-primary mr-3"
  }) : _vm._e(), _vm._v(" "), !_vm.isLoading ? _c("div", {
    staticClass: "card wrapper"
  }, [_c("vue-good-table", {
    attrs: {
      mode: "remote",
      columns: _vm.columns,
      totalRows: _vm.totalRows,
      rows: _vm.rows,
      "search-options": {
        enabled: true,
        placeholder: _vm.$t("Search_this_table")
      },
      "pagination-options": {
        enabled: true,
        mode: "records",
        nextLabel: _vm.$t("Next"),
        prevLabel: _vm.$t("Prev")
      },
      styleClass: "table-hover tableOne vgt-table"
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
        return [props.column.field == "status" ? _c("span", [_c("span", {
          staticClass: "badge",
          "class": props.row.status === "posted" ? "badge-success" : "badge-warning"
        }, [_vm._v(_vm._s(_vm.statusLabel(props.row.status)))])]) : props.column.field == "actions" ? _c("span", [_c("a", {
          directives: [{
            name: "b-tooltip",
            rawName: "v-b-tooltip.hover",
            modifiers: {
              hover: true
            }
          }],
          attrs: {
            title: _vm.$t("View")
          },
          on: {
            click: function click($event) {
              return _vm.view(props.row);
            }
          }
        }, [_c("i", {
          staticClass: "i-Eye text-25 text-primary cursor-pointer mr-2"
        })]), _vm._v(" "), props.row.status !== "posted" ? _c("a", {
          directives: [{
            name: "b-tooltip",
            rawName: "v-b-tooltip.hover",
            modifiers: {
              hover: true
            }
          }],
          attrs: {
            title: _vm.$t("Post"),
            disabled: _vm.postingId === props.row.id
          },
          on: {
            click: function click($event) {
              return _vm.post(props.row);
            }
          }
        }, [_vm.postingId !== props.row.id ? _c("i", {
          staticClass: "i-Yes text-25 text-success cursor-pointer mr-2"
        }) : _c("span", {
          staticClass: "spinner-border spinner-border-sm text-success mr-2"
        })]) : _vm._e(), _vm._v(" "), props.row.status !== "posted" ? _c("a", {
          directives: [{
            name: "b-tooltip",
            rawName: "v-b-tooltip.hover",
            modifiers: {
              hover: true
            }
          }],
          attrs: {
            title: _vm.$t("Edit")
          },
          on: {
            click: function click($event) {
              return _vm.tryEdit(props.row);
            }
          }
        }, [_c("i", {
          staticClass: "i-Edit text-25 text-primary"
        })]) : _vm._e(), _vm._v(" "), props.row.status !== "posted" ? _c("a", {
          directives: [{
            name: "b-tooltip",
            rawName: "v-b-tooltip.hover",
            modifiers: {
              hover: true
            }
          }],
          attrs: {
            title: _vm.$t("Delete")
          },
          on: {
            click: function click($event) {
              return _vm.tryDelete(props.row);
            }
          }
        }, [_c("i", {
          staticClass: "i-Close-Window text-25 text-danger"
        })]) : _vm._e()]) : _vm._e()];
      }
    }], null, false, 1724914017)
  }, [_c("div", {
    staticClass: "mt-2 mb-3",
    attrs: {
      slot: "table-actions"
    },
    slot: "table-actions"
  }, [_c("b-button", {
    staticClass: "btn-rounded",
    attrs: {
      variant: "btn btn-primary btn-icon m-1"
    },
    on: {
      click: function click($event) {
        return _vm.openCreate();
      }
    }
  }, [_c("i", {
    staticClass: "i-Add"
  }), _vm._v("\n          " + _vm._s(_vm.$t("Add")) + "\n        ")])], 1)])], 1) : _vm._e(), _vm._v(" "), _c("div", {
    staticClass: "modal fade",
    "class": {
      show: _vm.showModal
    },
    style: {
      display: _vm.showModal ? "block" : "none"
    },
    attrs: {
      tabindex: "-1",
      role: "dialog"
    }
  }, [_c("div", {
    staticClass: "modal-dialog modal-lg",
    attrs: {
      role: "document"
    }
  }, [_c("div", {
    staticClass: "modal-content"
  }, [_c("div", {
    staticClass: "modal-header"
  }, [_c("h5", {
    staticClass: "modal-title"
  }, [_vm._v(_vm._s(_vm.editing ? _vm.$t("Edit_Entry") : _vm.$t("New_Entry")))]), _vm._v(" "), _c("button", {
    staticClass: "close",
    attrs: {
      type: "button"
    },
    on: {
      click: _vm.closeModal
    }
  }, [_c("span", [_vm._v("×")])])]), _vm._v(" "), _c("div", {
    staticClass: "modal-body"
  }, [_c("div", {
    staticClass: "form-row"
  }, [_c("div", {
    staticClass: "form-group col-md-4"
  }, [_c("label", [_vm._v(_vm._s(_vm.$t("Date")))]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.entry.date,
      expression: "entry.date"
    }],
    staticClass: "form-control",
    attrs: {
      type: "date"
    },
    domProps: {
      value: _vm.entry.date
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.entry, "date", $event.target.value);
      }
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "form-group col-md-8"
  }, [_c("label", [_vm._v(_vm._s(_vm.$t("Description")))]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model.trim",
      value: _vm.entry.description,
      expression: "entry.description",
      modifiers: {
        trim: true
      }
    }],
    staticClass: "form-control",
    attrs: {
      placeholder: _vm.$t("Description_Placeholder")
    },
    domProps: {
      value: _vm.entry.description
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.entry, "description", $event.target.value.trim());
      },
      blur: function blur($event) {
        return _vm.$forceUpdate();
      }
    }
  })])]), _vm._v(" "), _c("div", {
    staticClass: "table-responsive border rounded"
  }, [_c("table", {
    staticClass: "table table-sm mb-0"
  }, [_c("thead", [_c("tr", {
    staticClass: "bg-light"
  }, [_c("th", {
    staticStyle: {
      width: "40%"
    }
  }, [_vm._v(_vm._s(_vm.$t("Account")))]), _vm._v(" "), _c("th", {
    staticClass: "text-right",
    staticStyle: {
      width: "20%"
    }
  }, [_vm._v(_vm._s(_vm.$t("Debit")))]), _vm._v(" "), _c("th", {
    staticClass: "text-right",
    staticStyle: {
      width: "20%"
    }
  }, [_vm._v(_vm._s(_vm.$t("Credit")))]), _vm._v(" "), _c("th", {
    staticStyle: {
      width: "18%"
    }
  }, [_vm._v(_vm._s(_vm.$t("Memo")))]), _vm._v(" "), _c("th", {
    staticStyle: {
      width: "2%"
    }
  })])]), _vm._v(" "), _c("tbody", _vm._l(_vm.entry.lines, function (l, idx) {
    return _c("tr", {
      key: idx
    }, [_c("td", [_c("select", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: l.coa_id,
        expression: "l.coa_id"
      }],
      staticClass: "form-control",
      "class": {
        "is-invalid": _vm.showErrors && !l.coa_id
      },
      on: {
        change: function change($event) {
          var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
            return o.selected;
          }).map(function (o) {
            var val = "_value" in o ? o._value : o.value;
            return val;
          });
          _vm.$set(l, "coa_id", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
        }
      }
    }, [_c("option", {
      attrs: {
        disabled: ""
      },
      domProps: {
        value: null
      }
    }, [_vm._v(_vm._s(_vm.$t("Select_Account")))]), _vm._v(" "), _vm._l(_vm.accounts, function (a) {
      return _c("option", {
        key: a.id,
        domProps: {
          value: a.id
        }
      }, [_vm._v(_vm._s(a.code) + " — " + _vm._s(a.name))]);
    })], 2)]), _vm._v(" "), _c("td", [_c("input", {
      directives: [{
        name: "model",
        rawName: "v-model.number",
        value: l.debit,
        expression: "l.debit",
        modifiers: {
          number: true
        }
      }],
      staticClass: "form-control text-right",
      "class": {
        "is-invalid": _vm.showErrors && !_vm.validRow(l)
      },
      attrs: {
        type: "text",
        min: "0",
        step: "0.01"
      },
      domProps: {
        value: l.debit
      },
      on: {
        input: [function ($event) {
          if ($event.target.composing) return;
          _vm.$set(l, "debit", _vm._n($event.target.value));
        }, function ($event) {
          return _vm.onAmountChange(idx, "debit");
        }],
        blur: function blur($event) {
          return _vm.$forceUpdate();
        }
      }
    })]), _vm._v(" "), _c("td", [_c("input", {
      directives: [{
        name: "model",
        rawName: "v-model.number",
        value: l.credit,
        expression: "l.credit",
        modifiers: {
          number: true
        }
      }],
      staticClass: "form-control text-right",
      "class": {
        "is-invalid": _vm.showErrors && !_vm.validRow(l)
      },
      attrs: {
        type: "text",
        min: "0",
        step: "0.01"
      },
      domProps: {
        value: l.credit
      },
      on: {
        input: [function ($event) {
          if ($event.target.composing) return;
          _vm.$set(l, "credit", _vm._n($event.target.value));
        }, function ($event) {
          return _vm.onAmountChange(idx, "credit");
        }],
        blur: function blur($event) {
          return _vm.$forceUpdate();
        }
      }
    })]), _vm._v(" "), _c("td", [_c("input", {
      directives: [{
        name: "model",
        rawName: "v-model.trim",
        value: l.memo,
        expression: "l.memo",
        modifiers: {
          trim: true
        }
      }],
      staticClass: "form-control",
      domProps: {
        value: l.memo
      },
      on: {
        input: function input($event) {
          if ($event.target.composing) return;
          _vm.$set(l, "memo", $event.target.value.trim());
        },
        blur: function blur($event) {
          return _vm.$forceUpdate();
        }
      }
    })]), _vm._v(" "), _c("td", {
      staticClass: "text-right"
    }, [_c("button", {
      staticClass: "btn btn-link p-0",
      attrs: {
        disabled: _vm.entry.lines.length <= 1
      },
      on: {
        click: function click($event) {
          return _vm.removeLine(idx);
        }
      }
    }, [_c("i", {
      staticClass: "i-Close text-danger"
    })])])]);
  }), 0)])]), _vm._v(" "), _c("div", {
    staticClass: "d-flex justify-content-between align-items-center mt-2"
  }, [_c("button", {
    staticClass: "btn btn-outline-secondary btn-sm",
    on: {
      click: _vm.addLine
    }
  }, [_c("i", {
    staticClass: "i-Add"
  }), _vm._v(" " + _vm._s(_vm.$t("Add_Line")))]), _vm._v(" "), _c("div", [_c("span", {
    staticClass: "mr-3"
  }, [_vm._v(_vm._s(_vm.$t("Total_Debit")) + ": "), _c("strong", [_vm._v(_vm._s(_vm.toMoney(_vm.totals.debit)))])]), _vm._v(" "), _c("span", [_vm._v(_vm._s(_vm.$t("Total_Credit")) + ": "), _c("strong", [_vm._v(_vm._s(_vm.toMoney(_vm.totals.credit)))])]), _vm._v(" "), _c("span", {
    staticClass: "ml-3 badge",
    "class": _vm.balanced ? "badge-success" : "badge-warning"
  }, [_vm._v(_vm._s(_vm.balanced ? _vm.$t("Balanced") : _vm.$t("Not_Balanced")))])])])]), _vm._v(" "), _c("div", {
    staticClass: "modal-footer"
  }, [_c("button", {
    staticClass: "btn btn-outline-secondary",
    attrs: {
      type: "button",
      disabled: _vm.btnLoading
    },
    on: {
      click: _vm.closeModal
    }
  }, [_vm._v(_vm._s(_vm.$t("Cancel")))]), _vm._v(" "), _c("button", {
    staticClass: "btn btn-primary",
    attrs: {
      type: "button",
      disabled: _vm.btnLoading || !_vm.entry.date || !_vm.linesValid
    },
    on: {
      click: _vm.save
    }
  }, [_vm.btnLoading ? _c("span", {
    staticClass: "spinner-border spinner-border-sm mr-2"
  }) : _vm._e(), _vm._v(" "), _c("span", [_vm._v(_vm._s(_vm.btnLoading ? _vm.$t("Saving") : _vm.$t("Save")))])])])])])]), _vm._v(" "), _c("div", {
    staticClass: "modal fade",
    "class": {
      show: _vm.showView
    },
    style: {
      display: _vm.showView ? "block" : "none"
    },
    attrs: {
      tabindex: "-1",
      role: "dialog"
    }
  }, [_c("div", {
    staticClass: "modal-dialog modal-lg",
    attrs: {
      role: "document"
    }
  }, [_c("div", {
    staticClass: "modal-content"
  }, [_c("div", {
    staticClass: "modal-header"
  }, [_c("h5", {
    staticClass: "modal-title"
  }, [_vm._v(_vm._s(_vm.$t("Journal_Number", {
    number: _vm.current && _vm.current.id
  })))]), _vm._v(" "), _c("button", {
    staticClass: "close",
    attrs: {
      type: "button"
    },
    on: {
      click: function click($event) {
        _vm.showView = false;
      }
    }
  }, [_c("span", [_vm._v("×")])])]), _vm._v(" "), _c("div", {
    staticClass: "modal-body"
  }, [_c("div", {
    staticClass: "mb-2"
  }, [_c("strong", [_vm._v(_vm._s(_vm.$t("Date")) + ":")]), _vm._v(" " + _vm._s(_vm.current && _vm.current.date))]), _vm._v(" "), _c("div", {
    staticClass: "mb-3"
  }, [_c("strong", [_vm._v(_vm._s(_vm.$t("Description")) + ":")]), _vm._v(" " + _vm._s(_vm.current && (_vm.current.description || "-")))]), _vm._v(" "), _c("div", {
    staticClass: "table-responsive border rounded"
  }, [_c("table", {
    staticClass: "table table-sm mb-0"
  }, [_c("thead", [_c("tr", {
    staticClass: "bg-light"
  }, [_c("th", [_vm._v(_vm._s(_vm.$t("Account")))]), _c("th", {
    staticClass: "text-right"
  }, [_vm._v(_vm._s(_vm.$t("Debit")))]), _c("th", {
    staticClass: "text-right"
  }, [_vm._v(_vm._s(_vm.$t("Credit")))]), _c("th", [_vm._v(_vm._s(_vm.$t("Memo")))])])]), _vm._v(" "), _c("tbody", _vm._l(_vm.current && _vm.current.lines || [], function (l, idx) {
    return _c("tr", {
      key: idx
    }, [_c("td", [_vm._v(_vm._s(_vm.accountName(l.coa_id)))]), _vm._v(" "), _c("td", {
      staticClass: "text-right"
    }, [_vm._v(_vm._s(_vm.toMoney(l.debit)))]), _vm._v(" "), _c("td", {
      staticClass: "text-right"
    }, [_vm._v(_vm._s(_vm.toMoney(l.credit)))]), _vm._v(" "), _c("td", [_vm._v(_vm._s(l.memo || ""))])]);
  }), 0)])])]), _vm._v(" "), _c("div", {
    staticClass: "modal-footer"
  }, [_c("button", {
    staticClass: "btn btn-outline-secondary",
    attrs: {
      type: "button"
    },
    on: {
      click: function click($event) {
        _vm.showView = false;
      }
    }
  }, [_vm._v(_vm._s(_vm.$t("Close")))])])])])])]);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-8.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-8.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/accounting_v2/journal_entries.vue?vue&type=style&index=0&id=55a498d2&scoped=true&lang=css":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-8.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-8.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/accounting_v2/journal_entries.vue?vue&type=style&index=0&id=55a498d2&scoped=true&lang=css ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, "\n.modal[data-v-55a498d2] { background: rgba(0,0,0,.35);\n}\n", ""]);
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

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-8.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-8.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/accounting_v2/journal_entries.vue?vue&type=style&index=0&id=55a498d2&scoped=true&lang=css":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-8.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-8.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/accounting_v2/journal_entries.vue?vue&type=style&index=0&id=55a498d2&scoped=true&lang=css ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_8_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_8_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_journal_entries_vue_vue_type_style_index_0_id_55a498d2_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-8.use[1]!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-8.use[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./journal_entries.vue?vue&type=style&index=0&id=55a498d2&scoped=true&lang=css */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-8.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-8.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/accounting_v2/journal_entries.vue?vue&type=style&index=0&id=55a498d2&scoped=true&lang=css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_8_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_8_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_journal_entries_vue_vue_type_style_index_0_id_55a498d2_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_8_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_8_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_journal_entries_vue_vue_type_style_index_0_id_55a498d2_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

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

/***/ "./resources/src/views/app/pages/accounting_v2/journal_entries.vue":
/*!*************************************************************************!*\
  !*** ./resources/src/views/app/pages/accounting_v2/journal_entries.vue ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _journal_entries_vue_vue_type_template_id_55a498d2_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./journal_entries.vue?vue&type=template&id=55a498d2&scoped=true */ "./resources/src/views/app/pages/accounting_v2/journal_entries.vue?vue&type=template&id=55a498d2&scoped=true");
/* harmony import */ var _journal_entries_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./journal_entries.vue?vue&type=script&lang=js */ "./resources/src/views/app/pages/accounting_v2/journal_entries.vue?vue&type=script&lang=js");
/* harmony import */ var _journal_entries_vue_vue_type_style_index_0_id_55a498d2_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./journal_entries.vue?vue&type=style&index=0&id=55a498d2&scoped=true&lang=css */ "./resources/src/views/app/pages/accounting_v2/journal_entries.vue?vue&type=style&index=0&id=55a498d2&scoped=true&lang=css");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _journal_entries_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _journal_entries_vue_vue_type_template_id_55a498d2_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render,
  _journal_entries_vue_vue_type_template_id_55a498d2_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "55a498d2",
  null
  
)

/* hot reload */
if (false) // removed by dead control flow
{ var api; }
component.options.__file = "resources/src/views/app/pages/accounting_v2/journal_entries.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/src/views/app/pages/accounting_v2/journal_entries.vue?vue&type=script&lang=js":
/*!*************************************************************************************************!*\
  !*** ./resources/src/views/app/pages/accounting_v2/journal_entries.vue?vue&type=script&lang=js ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_journal_entries_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./journal_entries.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/accounting_v2/journal_entries.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_journal_entries_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/src/views/app/pages/accounting_v2/journal_entries.vue?vue&type=style&index=0&id=55a498d2&scoped=true&lang=css":
/*!*********************************************************************************************************************************!*\
  !*** ./resources/src/views/app/pages/accounting_v2/journal_entries.vue?vue&type=style&index=0&id=55a498d2&scoped=true&lang=css ***!
  \*********************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_8_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_8_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_journal_entries_vue_vue_type_style_index_0_id_55a498d2_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/style-loader/dist/cjs.js!../../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-8.use[1]!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-8.use[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./journal_entries.vue?vue&type=style&index=0&id=55a498d2&scoped=true&lang=css */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-8.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-8.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/accounting_v2/journal_entries.vue?vue&type=style&index=0&id=55a498d2&scoped=true&lang=css");


/***/ }),

/***/ "./resources/src/views/app/pages/accounting_v2/journal_entries.vue?vue&type=template&id=55a498d2&scoped=true":
/*!*******************************************************************************************************************!*\
  !*** ./resources/src/views/app/pages/accounting_v2/journal_entries.vue?vue&type=template&id=55a498d2&scoped=true ***!
  \*******************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_journal_entries_vue_vue_type_template_id_55a498d2_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_journal_entries_vue_vue_type_template_id_55a498d2_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_journal_entries_vue_vue_type_template_id_55a498d2_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./journal_entries.vue?vue&type=template&id=55a498d2&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/accounting_v2/journal_entries.vue?vue&type=template&id=55a498d2&scoped=true");


/***/ })

}]);