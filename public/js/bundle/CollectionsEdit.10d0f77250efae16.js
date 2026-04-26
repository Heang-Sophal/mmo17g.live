"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["CollectionsEdit"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/store/CollectionsEdit.vue?vue&type=script&lang=js":
/*!*********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/store/CollectionsEdit.vue?vue&type=script&lang=js ***!
  \*********************************************************************************************************************************************************************************************************************/
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
  metaInfo: {
    title: "Store Collections Edit"
  },
  props: {
    id: {
      type: [String, Number],
      required: false
    }
  },
  data: function data() {
    return {
      isLoading: true,
      saving: false,
      // search
      searching: false,
      productQuery: '',
      results: [],
      // form
      form: {
        title: '',
        slug: '',
        description: '',
        limit: 8,
        sort_order: 0
      },
      // selected products [{product_id, name, sku, pinned, thumb}]
      selected: [],
      // debounce timer
      t: null
    };
  },
  mounted: function mounted() {
    this.fetch();
  },
  methods: {
    makeToast: function makeToast(variant, msg, title) {
      if (this.$root && this.$root.$bvToast) {
        this.$root.$bvToast.toast(msg, {
          title: title,
          variant: variant,
          solid: true
        });
      }
    },
    slugify: function slugify(v) {
      return String(v || '').toLowerCase().trim().replace(/['"]/g, '').replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '');
    },
    autoSlugIfEmpty: function autoSlugIfEmpty() {
      if (!this.form.slug) this.form.slug = this.slugify(this.form.title);
    },
    // ---------- Fetch existing data ----------
    fetch: function fetch() {
      var _this = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee() {
        var collectionId, resp, c, prods, pivotMap, k, pp, _t;
        return _regenerator().w(function (_context) {
          while (1) switch (_context.p = _context.n) {
            case 0:
              _this.isLoading = true;
              _context.p = 1;
              collectionId = _this.id || _this.$route.params.id;
              _context.n = 2;
              return axios.get("/admin/store/collections/".concat(collectionId));
            case 2:
              resp = _context.v;
              c = resp && resp.data && resp.data.data ? resp.data.data : resp ? resp.data : null;
              if (!c) c = {};
              _this.form = {
                title: c.title || '',
                slug: c.slug || '',
                description: c.description || '',
                limit: c.limit != null ? c.limit : 8,
                sort_order: c.sort_order != null ? c.sort_order : 0
              };
              prods = Array.isArray(c.products) ? c.products.slice() : [];
              pivotMap = {};
              for (k = 0; k < prods.length; k++) {
                pp = prods[k];
                if (pp && pp.id && pp.pivot) {
                  pivotMap[pp.id] = {
                    sort_order: pp.pivot.sort_order != null ? pp.pivot.sort_order : 0,
                    pinned: !!pp.pivot.pinned
                  };
                }
              }
              _this.selected = prods.map(function (p) {
                return {
                  product_id: p.id,
                  name: p.name || p.title || '#' + p.id,
                  sku: p.sku || p.code || '',
                  pinned: !!(p.pivot && p.pivot.pinned)
                };
              }).sort(function (a, b) {
                var ao = pivotMap[a.product_id] ? pivotMap[a.product_id].sort_order : 0;
                var bo = pivotMap[b.product_id] ? pivotMap[b.product_id].sort_order : 0;
                return ao - bo;
              });
              _context.n = 4;
              break;
            case 3:
              _context.p = 3;
              _t = _context.v;
              _this.makeToast('danger', _this.$t('Failed_to_load'), _this.$t('Failed'));
            case 4:
              _context.p = 4;
              _this.isLoading = false;
              return _context.f(4);
            case 5:
              return _context.a(2);
          }
        }, _callee, null, [[1, 3, 4, 5]]);
      }))();
    },
    // ---------- Search ----------
    debouncedSearch: function debouncedSearch() {
      var _this2 = this;
      if (this.t) clearTimeout(this.t);
      this.t = setTimeout(function () {
        _this2.searchProducts();
      }, 300);
    },
    searchProducts: function searchProducts() {
      var _this3 = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2() {
        var q, _resp, _resp2, resp, payload, _t2, _t3;
        return _regenerator().w(function (_context2) {
          while (1) switch (_context2.p = _context2.n) {
            case 0:
              q = (_this3.productQuery || '').trim();
              if (q) {
                _context2.n = 1;
                break;
              }
              _this3.results = [];
              return _context2.a(2);
            case 1:
              _this3.searching = true;
              _context2.p = 2;
              resp = null;
              _context2.p = 3;
              _context2.n = 4;
              return axios.get('/admin/store/products', {
                params: {
                  q: q,
                  limit: 20
                }
              });
            case 4:
              resp = _context2.v;
              _context2.n = 6;
              break;
            case 5:
              _context2.p = 5;
              _t2 = _context2.v;
            case 6:
              payload = Array.isArray((_resp = resp) === null || _resp === void 0 || (_resp = _resp.data) === null || _resp === void 0 ? void 0 : _resp.data) ? resp.data.data : Array.isArray((_resp2 = resp) === null || _resp2 === void 0 ? void 0 : _resp2.data) ? resp.data : [];
              _this3.results = Array.isArray(payload) ? payload : [];
              _context2.n = 8;
              break;
            case 7:
              _context2.p = 7;
              _t3 = _context2.v;
              _this3.makeToast('danger', _this3.$t('Failed_to_load'), _this3.$t('Failed'));
            case 8:
              _context2.p = 8;
              _this3.searching = false;
              return _context2.f(8);
            case 9:
              return _context2.a(2);
          }
        }, _callee2, null, [[3, 5], [2, 7, 8, 9]]);
      }))();
    },
    hasProduct: function hasProduct(id) {
      return this.selected.some(function (x) {
        return x.product_id === id;
      });
    },
    addProduct: function addProduct(p) {
      if (!p || this.hasProduct(p.id)) return;
      this.selected.push({
        product_id: p.id,
        name: p.name ? p.name : p.title ? p.title : '#' + p.id,
        sku: p.sku || p.code || '',
        pinned: false
      });
    },
    remove: function remove(idx) {
      this.selected.splice(idx, 1);
    },
    move: function move(idx, dir) {
      var j = idx + dir;
      if (j < 0 || j >= this.selected.length) return;
      var row = this.selected.splice(idx, 1)[0];
      this.selected.splice(j, 0, row);
    },
    clearSelected: function clearSelected() {
      if (!this.selected.length) return;
      if (confirm(this.$t('Confirm_Clear_All'))) this.selected = [];
    },
    itemsPayload: function itemsPayload() {
      return this.selected.map(function (x, i) {
        return {
          product_id: x.product_id,
          sort_order: (i + 1) * 10,
          pinned: !!x.pinned
        };
      });
    },
    // ---------- Update ----------
    update: function update() {
      var _this4 = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee3() {
        var collectionId, _t4, _t5;
        return _regenerator().w(function (_context3) {
          while (1) switch (_context3.p = _context3.n) {
            case 0:
              if (!(!_this4.form.title || !_this4.form.slug)) {
                _context3.n = 1;
                break;
              }
              _this4.makeToast('danger', _this4.$t('Title_and_Slug_required'), _this4.$t('Invalid'));
              return _context3.a(2);
            case 1:
              _this4.saving = true;
              _context3.p = 2;
              collectionId = _this4.id || _this4.$route.params.id;
              _context3.n = 3;
              return axios.put("/admin/store/collections/".concat(collectionId), _this4.form);
            case 3:
              if (!_this4.selected.length) {
                _context3.n = 7;
                break;
              }
              _context3.p = 4;
              _context3.n = 5;
              return axios.post("/admin/store/collections/".concat(collectionId, "/products"), {
                items: _this4.itemsPayload()
              });
            case 5:
              _context3.n = 7;
              break;
            case 6:
              _context3.p = 6;
              _t4 = _context3.v;
              _this4.makeToast('warning', _this4.$t('Collection_saved_but_products_not_synced'), _this4.$t('Warning'));
            case 7:
              _this4.makeToast('success', _this4.$t('Successfully_Updated'), _this4.$t('Success'));
              _context3.n = 9;
              break;
            case 8:
              _context3.p = 8;
              _t5 = _context3.v;
              _this4.makeToast('danger', _this4.$t('InvalidData'), _this4.$t('Failed'));
            case 9:
              _context3.p = 9;
              _this4.saving = false;
              return _context3.f(9);
            case 10:
              return _context3.a(2);
          }
        }, _callee3, null, [[4, 6], [2, 8, 9, 10]]);
      }))();
    },
    updateAndClose: function updateAndClose() {
      var _this5 = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee4() {
        return _regenerator().w(function (_context4) {
          while (1) switch (_context4.n) {
            case 0:
              _context4.n = 1;
              return _this5.update();
            case 1:
              _this5.$router.push({
                name: 'StoreCollections'
              });
            case 2:
              return _context4.a(2);
          }
        }, _callee4);
      }))();
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/store/CollectionsEdit.vue?vue&type=template&id=bf9d0a38&scoped=true":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/store/CollectionsEdit.vue?vue&type=template&id=bf9d0a38&scoped=true ***!
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
      page: _vm.$t("Edit_Collection"),
      folder: _vm.$t("Store")
    }
  }), _vm._v(" "), _vm.isLoading ? _c("div", {
    staticClass: "loading_page spinner spinner-primary mr-3"
  }) : _c("b-card", {
    staticClass: "px-0"
  }, [_c("b-form", {
    on: {
      submit: function submit($event) {
        $event.preventDefault();
        return _vm.update.apply(null, arguments);
      }
    }
  }, [_c("div", {
    staticClass: "row no-gutters"
  }, [_c("div", {
    staticClass: "col-lg-8 p-3 p-lg-4"
  }, [_c("div", {
    staticClass: "card card-soft shadow-sm mb-4"
  }, [_c("div", {
    staticClass: "card-body"
  }, [_c("div", {
    staticClass: "d-flex align-items-center justify-content-between flex-wrap mb-2"
  }, [_c("h5", {
    staticClass: "mb-0"
  }, [_vm._v(_vm._s(_vm.$t("Collection_Details")))])]), _vm._v(" "), _c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col-md-8"
  }, [_c("b-form-group", {
    attrs: {
      label: _vm.$t("Title")
    }
  }, [_c("b-form-input", {
    attrs: {
      required: ""
    },
    on: {
      input: _vm.autoSlugIfEmpty
    },
    model: {
      value: _vm.form.title,
      callback: function callback($$v) {
        _vm.$set(_vm.form, "title", typeof $$v === "string" ? $$v.trim() : $$v);
      },
      expression: "form.title"
    }
  })], 1)], 1)]), _vm._v(" "), _c("b-form-group", {
    attrs: {
      label: _vm.$t("Slug")
    }
  }, [_c("b-input-group", [_c("b-input-group-prepend", {
    attrs: {
      "is-text": ""
    }
  }, [_vm._v("/collections/")]), _vm._v(" "), _c("b-form-input", {
    attrs: {
      required: ""
    },
    model: {
      value: _vm.form.slug,
      callback: function callback($$v) {
        _vm.$set(_vm.form, "slug", typeof $$v === "string" ? $$v.trim() : $$v);
      },
      expression: "form.slug"
    }
  })], 1)], 1), _vm._v(" "), _c("b-form-group", {
    attrs: {
      label: _vm.$t("Description")
    }
  }, [_c("b-form-textarea", {
    attrs: {
      rows: "3"
    },
    model: {
      value: _vm.form.description,
      callback: function callback($$v) {
        _vm.$set(_vm.form, "description", typeof $$v === "string" ? $$v.trim() : $$v);
      },
      expression: "form.description"
    }
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col-md-4"
  }, [_c("b-form-group", {
    attrs: {
      label: _vm.$t("Limit")
    }
  }, [_c("b-form-input", {
    attrs: {
      type: "text",
      min: "1"
    },
    model: {
      value: _vm.form.limit,
      callback: function callback($$v) {
        _vm.$set(_vm.form, "limit", _vm._n($$v));
      },
      expression: "form.limit"
    }
  })], 1)], 1)])], 1)])]), _vm._v(" "), _c("div", {
    staticClass: "col-lg-4 p-3 p-lg-4"
  }, [_c("div", {
    staticClass: "side sticky-top"
  }, [_c("div", {
    staticClass: "card shadow-sm"
  }, [_c("div", {
    staticClass: "card-body"
  }, [_c("div", {
    staticClass: "d-grid gap-2"
  }, [_c("b-button", {
    attrs: {
      disabled: _vm.saving,
      type: "submit",
      variant: "btn btn-primary btn-block"
    }
  }, [_vm.saving ? _c("span", {
    staticClass: "spinner-border spinner-border-sm mr-2"
  }) : _vm._e(), _vm._v(" "), _c("i", {
    staticClass: "i-Yes"
  }), _vm._v(" " + _vm._s(_vm.$t("Save")) + "\n                  ")]), _vm._v(" "), _c("b-button", {
    attrs: {
      disabled: _vm.saving,
      variant: "btn btn-outline-secondary btn-block"
    },
    on: {
      click: _vm.updateAndClose
    }
  }, [_c("i", {
    staticClass: "i-Yes"
  }), _vm._v(" " + _vm._s(_vm.$t("Save_and_Close")) + "\n                  ")]), _vm._v(" "), _c("router-link", {
    staticClass: "btn btn-outline-dark btn-block",
    attrs: {
      to: {
        name: "StoreCollections"
      }
    }
  }, [_vm._v("\n                    " + _vm._s(_vm.$t("Cancel")) + "\n                  ")])], 1)])]), _vm._v(" "), _c("div", {
    staticClass: "helper mt-3"
  }, [_c("div", {
    staticClass: "small text-muted"
  }, [_vm._v("\n                💡 " + _vm._s(_vm.$t("Tip_reorder_products_for_priority")) + "\n              ")])])])])]), _vm._v(" "), _c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col-12 p-3 p-lg-4"
  }, [_c("div", {
    staticClass: "card card-soft shadow-sm"
  }, [_c("div", {
    staticClass: "card-body"
  }, [_c("div", {
    staticClass: "d-flex align-items-center justify-content-between flex-wrap"
  }, [_c("h5", {
    staticClass: "mb-2"
  }, [_vm._v(_vm._s(_vm.$t("Products_in_Collection")))]), _vm._v(" "), _c("div", {
    staticClass: "small text-muted"
  }, [_vm._v("\n                  " + _vm._s(_vm.selected.length) + " " + _vm._s(_vm.$t("selected")) + "\n                  "), _vm.form.limit ? _c("span", [_vm._v(" • " + _vm._s(_vm.$t("Display_limit")) + ": " + _vm._s(_vm.form.limit))]) : _vm._e()])]), _vm._v(" "), _c("div", {
    staticClass: "row mt-2"
  }, [_c("div", {
    staticClass: "col-lg-6"
  }, [_c("div", {
    staticClass: "finder border rounded p-3"
  }, [_c("div", {
    staticClass: "d-flex align-items-center justify-content-between"
  }, [_c("b-input-group", [_c("b-form-input", {
    attrs: {
      placeholder: _vm.$t("Search_products") + "…"
    },
    on: {
      input: _vm.debouncedSearch
    },
    model: {
      value: _vm.productQuery,
      callback: function callback($$v) {
        _vm.productQuery = typeof $$v === "string" ? $$v.trim() : $$v;
      },
      expression: "productQuery"
    }
  }), _vm._v(" "), _c("b-input-group-append", [_c("b-button", {
    attrs: {
      disabled: _vm.searching,
      variant: "outline-secondary"
    },
    on: {
      click: _vm.searchProducts
    }
  }, [_vm.searching ? _c("span", {
    staticClass: "spinner-border spinner-border-sm mr-1"
  }) : _c("i", {
    staticClass: "i-Search-People"
  })])], 1)], 1)], 1), _vm._v(" "), !_vm.searching && _vm.productQuery && !_vm.results.length ? _c("div", {
    staticClass: "small text-muted mt-1"
  }, [_vm._v("\n                      " + _vm._s(_vm.$t("No_results")) + "\n                    ")]) : _vm._e(), _vm._v(" "), _c("div", {
    staticClass: "results-list mt-3"
  }, [_vm._l(_vm.results, function (p) {
    return _c("div", {
      key: "r-" + p.id,
      staticClass: "result-row"
    }, [_c("div", {
      staticClass: "d-flex align-items-center"
    }, [_c("div", {
      staticClass: "text-truncate"
    }, [_c("div", {
      staticClass: "fw-600"
    }, [_vm._v("\n                              " + _vm._s(p.name ? p.name : p.title ? p.title : "#" + p.id) + "\n                            ")]), _vm._v(" "), _c("div", {
      staticClass: "small text-muted"
    }, [_vm._v("\n                              #" + _vm._s(p.id) + "\n                              "), p.code || p.sku ? _c("span", [_vm._v("• " + _vm._s(p.code || p.sku))]) : _vm._e(), _vm._v(" "), Array.isArray(p.variants) && p.variants.length ? _c("span", [_vm._v("• " + _vm._s(p.variants.length) + " " + _vm._s(_vm.$t("variants")))]) : _vm._e()])])]), _vm._v(" "), _c("div", [_c("b-button", {
      attrs: {
        size: "sm",
        variant: "outline-primary",
        disabled: _vm.hasProduct(p.id)
      },
      on: {
        click: function click($event) {
          return _vm.addProduct(p);
        }
      }
    }, [_vm._v("\n                            " + _vm._s(_vm.hasProduct(p.id) ? _vm.$t("Added") : _vm.$t("Add")) + "\n                          ")])], 1)]);
  }), _vm._v(" "), !_vm.productQuery && !_vm.results.length && !_vm.searching ? _c("div", {
    staticClass: "empty-state mt-3"
  }, [_c("div", {
    staticClass: "emoji"
  }, [_vm._v("🔎")]), _vm._v(" "), _c("div", {
    staticClass: "title"
  }, [_vm._v(_vm._s(_vm.$t("Start_typing_to_search")))]), _vm._v(" "), _c("div", {
    staticClass: "subtitle"
  }, [_vm._v(_vm._s(_vm.$t("Search_by_name_SKU_or_ID")))])]) : _vm._e()], 2)])]), _vm._v(" "), _c("div", {
    staticClass: "col-lg-6 mt-3 mt-lg-0"
  }, [_c("div", {
    staticClass: "border rounded p-3"
  }, [!_vm.selected.length ? _c("div", {
    staticClass: "empty-state"
  }, [_c("div", {
    staticClass: "emoji"
  }, [_vm._v("🧺")]), _vm._v(" "), _c("div", {
    staticClass: "title"
  }, [_vm._v(_vm._s(_vm.$t("No_products_in_collection_yet")))]), _vm._v(" "), _c("div", {
    staticClass: "subtitle"
  }, [_vm._v(_vm._s(_vm.$t("Use_search_to_add_products")))])]) : _c("div", {
    staticClass: "table-responsive"
  }, [_c("table", {
    staticClass: "table table-sm align-middle"
  }, [_c("thead", [_c("tr", [_c("th", {
    staticStyle: {
      width: "60px"
    }
  }, [_vm._v("#")]), _vm._v(" "), _c("th", [_vm._v(_vm._s(_vm.$t("Product")))]), _vm._v(" "), _c("th", {
    staticClass: "text-right",
    staticStyle: {
      width: "220px"
    }
  }, [_vm._v(_vm._s(_vm.$t("Actions")))])])]), _vm._v(" "), _c("tbody", _vm._l(_vm.selected, function (item, idx) {
    return _c("tr", {
      key: "s-" + item.product_id
    }, [_c("td", [_c("code", {
      staticClass: "small"
    }, [_vm._v(_vm._s(idx + 1))])]), _vm._v(" "), _c("td", [_c("div", {
      staticClass: "d-flex align-items-center"
    }, [item.thumb ? _c("div", {
      staticClass: "thumb mr-2"
    }, [_c("img", {
      attrs: {
        src: item.thumb,
        alt: "thumb"
      }
    })]) : _vm._e(), _vm._v(" "), _c("div", [_c("div", {
      staticClass: "fw-600"
    }, [_vm._v(_vm._s(item.name))]), _vm._v(" "), _c("small", {
      staticClass: "text-muted"
    }, [_vm._v("#" + _vm._s(item.product_id) + " "), item.sku ? _c("span", [_vm._v("• " + _vm._s(item.sku))]) : _vm._e()])])])]), _vm._v(" "), _c("td", {
      staticClass: "text-right"
    }, [_c("div", {
      staticClass: "btn-group btn-group-sm"
    }, [_c("b-button", {
      attrs: {
        variant: "outline-secondary",
        disabled: idx === 0
      },
      on: {
        click: function click($event) {
          return _vm.move(idx, -1);
        }
      }
    }, [_vm._v("↑")]), _vm._v(" "), _c("b-button", {
      attrs: {
        variant: "outline-secondary",
        disabled: idx === _vm.selected.length - 1
      },
      on: {
        click: function click($event) {
          return _vm.move(idx, 1);
        }
      }
    }, [_vm._v("↓")]), _vm._v(" "), _c("b-button", {
      attrs: {
        variant: "outline-danger"
      },
      on: {
        click: function click($event) {
          return _vm.remove(idx);
        }
      }
    }, [_vm._v(_vm._s(_vm.$t("Remove")))])], 1)])]);
  }), 0)]), _vm._v(" "), _c("div", {
    staticClass: "d-flex align-items-center justify-content-between mt-2"
  }, [_c("div", {
    staticClass: "small text-muted"
  }, [_vm._v("\n                          " + _vm._s(_vm.$t("Order_determines_display_priority")) + "\n                        ")]), _vm._v(" "), _c("div", [_c("b-button", {
    attrs: {
      size: "sm",
      variant: "outline-danger",
      disabled: !_vm.selected.length
    },
    on: {
      click: _vm.clearSelected
    }
  }, [_vm._v("\n                            " + _vm._s(_vm.$t("Clear_all")) + "\n                          ")])], 1)])])])])])])])])])])], 1)], 1);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-8.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-8.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/store/CollectionsEdit.vue?vue&type=style&index=0&id=bf9d0a38&scoped=true&lang=css":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-8.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-8.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/store/CollectionsEdit.vue?vue&type=style&index=0&id=bf9d0a38&scoped=true&lang=css ***!
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
___CSS_LOADER_EXPORT___.push([module.id, "\n.text-mono[data-v-bf9d0a38] { font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, \"Liberation Mono\", \"Courier New\", monospace;\n}\n.card-soft[data-v-bf9d0a38] { border: 1px solid #edf2f7; border-radius: 12px;\n}\n.finder[data-v-bf9d0a38] { background: #fbfbfd;\n}\n.results-list[data-v-bf9d0a38] { max-height: 420px; overflow: auto;\n}\n\n/* Result row */\n.result-row[data-v-bf9d0a38] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: .75rem;\n  padding: .5rem 0;\n  border-bottom: 1px dashed #e5e7eb;\n}\n.result-row[data-v-bf9d0a38]:last-child { border-bottom: 0;\n}\n.result-row .thumb[data-v-bf9d0a38] {\n  width: 40px; height: 40px; border-radius: 6px; overflow: hidden;\n  background: #f3f4f6; margin-right: .5rem; border: 1px solid #eef2f7;\n}\n.result-row .thumb img[data-v-bf9d0a38] { width: 100%; height: 100%; -o-object-fit: cover; object-fit: cover;\n}\n\n/* Selected table thumb */\n.table .thumb[data-v-bf9d0a38] {\n  width: 36px; height: 36px; border-radius: 6px; overflow: hidden;\n  background: #f3f4f6; border: 1px solid #eef2f7;\n}\n.table .thumb img[data-v-bf9d0a38] { width: 100%; height: 100%; -o-object-fit: cover; object-fit: cover;\n}\n\n/* Empty state */\n.empty-state[data-v-bf9d0a38] {\n  border: 2px dashed #e2e8f0;\n  border-radius: 1rem;\n  padding: 2rem;\n  text-align: center;\n  background: #fafafa;\n}\n.empty-state .emoji[data-v-bf9d0a38] { font-size: 1.8rem;\n}\n.empty-state .title[data-v-bf9d0a38] { font-weight: 700; margin-top: .25rem;\n}\n.empty-state .subtitle[data-v-bf9d0a38] { color: #6b7280;\n}\n\n/* Sticky side */\n.side[data-v-bf9d0a38] { top: 88px;\n}\n.btn-block[data-v-bf9d0a38] { width: 100%;\n}\n\n/* Helpers */\n.fw-600[data-v-bf9d0a38] { font-weight: 600;\n}\n", ""]);
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

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-8.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-8.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/store/CollectionsEdit.vue?vue&type=style&index=0&id=bf9d0a38&scoped=true&lang=css":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-8.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-8.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/store/CollectionsEdit.vue?vue&type=style&index=0&id=bf9d0a38&scoped=true&lang=css ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_8_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_8_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CollectionsEdit_vue_vue_type_style_index_0_id_bf9d0a38_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-8.use[1]!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-8.use[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./CollectionsEdit.vue?vue&type=style&index=0&id=bf9d0a38&scoped=true&lang=css */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-8.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-8.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/store/CollectionsEdit.vue?vue&type=style&index=0&id=bf9d0a38&scoped=true&lang=css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_8_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_8_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CollectionsEdit_vue_vue_type_style_index_0_id_bf9d0a38_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_8_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_8_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CollectionsEdit_vue_vue_type_style_index_0_id_bf9d0a38_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

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

/***/ "./resources/src/views/app/pages/store/CollectionsEdit.vue":
/*!*****************************************************************!*\
  !*** ./resources/src/views/app/pages/store/CollectionsEdit.vue ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _CollectionsEdit_vue_vue_type_template_id_bf9d0a38_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CollectionsEdit.vue?vue&type=template&id=bf9d0a38&scoped=true */ "./resources/src/views/app/pages/store/CollectionsEdit.vue?vue&type=template&id=bf9d0a38&scoped=true");
/* harmony import */ var _CollectionsEdit_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CollectionsEdit.vue?vue&type=script&lang=js */ "./resources/src/views/app/pages/store/CollectionsEdit.vue?vue&type=script&lang=js");
/* harmony import */ var _CollectionsEdit_vue_vue_type_style_index_0_id_bf9d0a38_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./CollectionsEdit.vue?vue&type=style&index=0&id=bf9d0a38&scoped=true&lang=css */ "./resources/src/views/app/pages/store/CollectionsEdit.vue?vue&type=style&index=0&id=bf9d0a38&scoped=true&lang=css");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _CollectionsEdit_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _CollectionsEdit_vue_vue_type_template_id_bf9d0a38_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render,
  _CollectionsEdit_vue_vue_type_template_id_bf9d0a38_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "bf9d0a38",
  null
  
)

/* hot reload */
if (false) // removed by dead control flow
{ var api; }
component.options.__file = "resources/src/views/app/pages/store/CollectionsEdit.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/src/views/app/pages/store/CollectionsEdit.vue?vue&type=script&lang=js":
/*!*****************************************************************************************!*\
  !*** ./resources/src/views/app/pages/store/CollectionsEdit.vue?vue&type=script&lang=js ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CollectionsEdit_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./CollectionsEdit.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/store/CollectionsEdit.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CollectionsEdit_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/src/views/app/pages/store/CollectionsEdit.vue?vue&type=style&index=0&id=bf9d0a38&scoped=true&lang=css":
/*!*************************************************************************************************************************!*\
  !*** ./resources/src/views/app/pages/store/CollectionsEdit.vue?vue&type=style&index=0&id=bf9d0a38&scoped=true&lang=css ***!
  \*************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_8_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_8_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CollectionsEdit_vue_vue_type_style_index_0_id_bf9d0a38_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/style-loader/dist/cjs.js!../../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-8.use[1]!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-8.use[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./CollectionsEdit.vue?vue&type=style&index=0&id=bf9d0a38&scoped=true&lang=css */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-8.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-8.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/store/CollectionsEdit.vue?vue&type=style&index=0&id=bf9d0a38&scoped=true&lang=css");


/***/ }),

/***/ "./resources/src/views/app/pages/store/CollectionsEdit.vue?vue&type=template&id=bf9d0a38&scoped=true":
/*!***********************************************************************************************************!*\
  !*** ./resources/src/views/app/pages/store/CollectionsEdit.vue?vue&type=template&id=bf9d0a38&scoped=true ***!
  \***********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CollectionsEdit_vue_vue_type_template_id_bf9d0a38_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CollectionsEdit_vue_vue_type_template_id_bf9d0a38_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CollectionsEdit_vue_vue_type_template_id_bf9d0a38_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./CollectionsEdit.vue?vue&type=template&id=bf9d0a38&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/store/CollectionsEdit.vue?vue&type=template&id=bf9d0a38&scoped=true");


/***/ })

}]);