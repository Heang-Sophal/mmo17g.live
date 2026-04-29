"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["opening_stock_import"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/products/opening_stock_import.vue?vue&type=script&lang=js":
/*!*****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/products/opening_stock_import.vue?vue&type=script&lang=js ***!
  \*****************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! nprogress */ "./node_modules/nprogress/nprogress.js");
/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(nprogress__WEBPACK_IMPORTED_MODULE_0__);
function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }

// axios assumed globally available

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'OpeningStockImportPage',
  data: function data() {
    return {
      // endpoints
      metaEndpoint: 'opening-stock/import/meta',
      singleEndpoint: 'opening-stock/import/single',
      variantEndpoint: 'opening-stock/import/variants',
      // selection
      importType: 'single',
      // single is default (and stays outline-primary)
      warehouse_id: '',
      warehouseTouched: false,
      warehouses: [],
      // file state
      file: null,
      fileName: '',
      fileSize: 0,
      // ui state
      uploading: false,
      progress: 0,
      // multi-error support
      errorMessages: [],
      warningMessages: [],
      // dnd
      isDragOver: false,
      // limits
      maxSize: 20 * 1024 * 1024,
      // 20MB
      accept: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet,application/vnd.ms-excel,.xlsx,.xls'
    };
  },
  computed: {
    warehouseOptions: function warehouseOptions() {
      var out = [];
      for (var i = 0; i < this.warehouses.length; i++) {
        var w = this.warehouses[i];
        out.push({
          label: w.name,
          value: w.id
        });
      }
      return out;
    },
    canSubmit: function canSubmit() {
      return !!this.file && !!this.warehouse_id && this.errorMessages.length === 0;
    },
    prettySize: function prettySize() {
      return this.formatBytes(this.fileSize);
    },
    exampleHref: function exampleHref() {
      return this.importType === 'single' ? '/import/exemples/opening_stock_single.xlsx' : '/import/exemples/opening_stock_variants.xlsx';
    }
  },
  methods: {
    toast: function toast(msg, title, variant) {
      if (this.$root && this.$root.$bvToast) {
        this.$root.$bvToast.toast(msg, {
          title: title,
          variant: variant,
          solid: true
        });
      }
    },
    switchType: function switchType(type) {
      this.importType = type;
      this.clearErrors();
    },
    // DnD + browse
    onDragOver: function onDragOver() {
      this.isDragOver = true;
    },
    onDragLeave: function onDragLeave() {
      this.isDragOver = false;
    },
    onDrop: function onDrop(e) {
      this.isDragOver = false;
      var files = e && e.dataTransfer && e.dataTransfer.files;
      var f = files && files[0] ? files[0] : null;
      if (f) this.loadFile(f);
    },
    browse: function browse() {
      if (this.uploading) return;
      if (this.$refs && this.$refs.file) this.$refs.file.click();
    },
    onFileSelected: function onFileSelected(e) {
      var files = e && e.target && e.target.files;
      var f = files && files[0] ? files[0] : null;
      if (!f) return;
      this.loadFile(f);
    },
    // File load + checks
    loadFile: function loadFile(f) {
      this.clearErrors();
      var msgs = [];
      if (f.size > this.maxSize) msgs.push('File is too large. Please upload a file under the 20MB limit.');
      var name = f.name || '';
      var ext = name.split('.').pop().toLowerCase();
      if (['xlsx', 'xls'].indexOf(ext) === -1) msgs.push('Unsupported file type. Please upload an .xlsx or .xls file.');
      if (msgs.length) {
        this.errorMessages = msgs;
        this.clearFile(false);
        return;
      }
      this.file = f;
      this.fileName = f.name;
      this.fileSize = f.size;
    },
    clearFile: function clearFile(resetInput) {
      if (typeof resetInput === 'undefined') resetInput = true;
      this.file = null;
      this.fileName = '';
      this.fileSize = 0;
      if (resetInput && this.$refs && this.$refs.file) this.$refs.file.value = '';
    },
    resetAll: function resetAll() {
      this.clearFile(true);
      this.warehouse_id = '';
      this.warehouseTouched = false;
      this.clearErrors();
    },
    clearErrors: function clearErrors() {
      this.errorMessages = [];
      this.warningMessages = [];
    },
    formatBytes: function formatBytes(bytes) {
      if (!bytes || bytes <= 0) return '0 B';
      var k = 1024;
      var sizes = ['B', 'KB', 'MB', 'GB', 'TB'];
      var i = Math.floor(Math.log(bytes) / Math.log(k));
      var v = (bytes / Math.pow(k, i)).toFixed(2);
      return v + ' ' + sizes[i];
    },
    // Error collectors (works with object OR array)
    flattenLaravelErrorsObject: function flattenLaravelErrorsObject(errorsObj) {
      var out = [];
      if (!errorsObj || _typeof(errorsObj) !== 'object') return out;
      for (var k in errorsObj) {
        if (!errorsObj.hasOwnProperty(k)) continue;
        var v = errorsObj[k];
        if (Array.isArray(v)) {
          for (var i = 0; i < v.length; i++) if (v[i]) out.push(String(v[i]));
        } else if (v) out.push(String(v));
      }
      return out;
    },
    collectErrorsFromResponse: function collectErrorsFromResponse(data) {
      var out = [];
      if (!data || _typeof(data) !== 'object') return out;

      // message
      if (data.message && typeof data.message === 'string') out.push(data.message);

      // errors as array of strings
      if (Array.isArray(data.errors)) {
        for (var i = 0; i < data.errors.length; i++) {
          if (data.errors[i]) out.push(String(data.errors[i]));
        }
      }
      // errors as object {field: [..]}
      else if (data.errors && _typeof(data.errors) === 'object') {
        out = out.concat(this.flattenLaravelErrorsObject(data.errors));
      }

      // details (sometimes)
      if (Array.isArray(data.details)) {
        for (var j = 0; j < data.details.length; j++) {
          if (data.details[j]) out.push(String(data.details[j]));
        }
      } else if (data.details && typeof data.details === 'string') {
        out.push(data.details);
      }

      // error
      if (data.error && typeof data.error === 'string') out.push(data.error);

      // unique
      var seen = {};
      var unique = [];
      for (var u = 0; u < out.length; u++) {
        if (!seen[out[u]]) {
          seen[out[u]] = true;
          unique.push(out[u]);
        }
      }
      return unique;
    },
    collectErrorsFromAxios: function collectErrorsFromAxios(err) {
      // Prefer 422
      if (err && err.response && err.response.status === 422) {
        var payload = err.response.data || {};
        var list = [];
        if (Array.isArray(payload.errors)) {
          list = list.concat(payload.errors);
        } else if (payload.errors && _typeof(payload.errors) === 'object') {
          list = list.concat(this.flattenLaravelErrorsObject(payload.errors));
        }
        if (payload.message) list.push(String(payload.message));
        return list.length ? list : ['Validation failed. Please check your file and try again.'];
      }

      // Generic
      var payload2 = err && err.response ? err.response.data : null;
      var list2 = this.collectErrorsFromResponse(payload2);
      if (list2.length) return list2;
      if (err && err.message) return [String(err.message)];
      return ['Something went wrong while uploading. Please try again.'];
    },
    // Submit
    submit: function submit() {
      var _this = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee() {
        var fd, endpoint, self, response, data, ok, msgs, _t;
        return _regenerator().w(function (_context) {
          while (1) switch (_context.p = _context.n) {
            case 0:
              _this.warehouseTouched = true;
              if (_this.warehouse_id) {
                _context.n = 1;
                break;
              }
              _this.errorMessages = ['Please choose a warehouse.'];
              return _context.a(2);
            case 1:
              if (_this.file) {
                _context.n = 2;
                break;
              }
              _this.errorMessages = ['Please choose a file to import.'];
              return _context.a(2);
            case 2:
              _this.clearErrors();
              _this.uploading = true;
              _this.progress = 0;
              nprogress__WEBPACK_IMPORTED_MODULE_0___default().start();
              nprogress__WEBPACK_IMPORTED_MODULE_0___default().set(0.2);
              _context.p = 3;
              fd = new FormData();
              fd.append('warehouse_id', _this.warehouse_id);
              fd.append('products', _this.file);
              endpoint = _this.importType === 'single' ? _this.singleEndpoint : _this.variantEndpoint;
              self = _this;
              _context.n = 4;
              return axios.post(endpoint, fd, {
                headers: {
                  'Content-Type': 'multipart/form-data'
                },
                onUploadProgress: function onUploadProgress(pe) {
                  if (pe && pe.total) self.progress = Math.round(pe.loaded * 100 / pe.total);
                }
              });
            case 4:
              response = _context.v;
              data = response && response.data ? response.data : null;
              ok = data && (data.status === true || data.success === true);
              if (ok) {
                _context.n = 5;
                break;
              }
              msgs = _this.collectErrorsFromResponse(data);
              _this.errorMessages = msgs.length ? msgs : ['Import failed. Please review your file and try again.'];
              _this.toast('Check the error list and fix your file.', 'Import failed', 'danger');
              return _context.a(2);
            case 5:
              _this.toast('Opening stock imported successfully.', 'Success', 'success');
              _this.$router.push({
                name: 'index_products'
              });
              _context.n = 7;
              break;
            case 6:
              _context.p = 6;
              _t = _context.v;
              _this.errorMessages = _this.collectErrorsFromAxios(_t);
              _this.toast('Check the error list and fix your file.', 'Import failed', 'danger');
            case 7:
              _context.p = 7;
              nprogress__WEBPACK_IMPORTED_MODULE_0___default().done();
              _this.uploading = false;
              _this.progress = 0;
              return _context.f(7);
            case 8:
              return _context.a(2);
          }
        }, _callee, null, [[3, 6, 7, 8]]);
      }))();
    },
    // Load warehouses
    loadWarehouses: function loadWarehouses() {
      var _this2 = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2() {
        var _yield$axios$get, data, _t2;
        return _regenerator().w(function (_context2) {
          while (1) switch (_context2.p = _context2.n) {
            case 0:
              _context2.p = 0;
              _context2.n = 1;
              return axios.get(_this2.metaEndpoint);
            case 1:
              _yield$axios$get = _context2.v;
              data = _yield$axios$get.data;
              _this2.warehouses = data && data.warehouses ? data.warehouses : [];
              _context2.n = 3;
              break;
            case 2:
              _context2.p = 2;
              _t2 = _context2.v;
              _this2.warehouses = [];
            case 3:
              return _context2.a(2);
          }
        }, _callee2, null, [[0, 2]]);
      }))();
    }
  },
  created: function created() {
    this.loadWarehouses();
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/products/opening_stock_import.vue?vue&type=template&id=6d0a9e9a&scoped=true":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/products/opening_stock_import.vue?vue&type=template&id=6d0a9e9a&scoped=true ***!
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
    staticClass: "main-content import-products"
  }, [_c("div", {
    staticClass: "hero shadow-sm mb-4"
  }, [_c("div", {
    staticClass: "hero-bg"
  }), _vm._v(" "), _c("div", {
    staticClass: "hero-body d-flex align-items-center justify-content-between flex-wrap"
  }, [_vm._m(0), _vm._v(" "), _c("router-link", {
    staticClass: "btn btn-outline-secondary btn-sm mt-3 mt-sm-0",
    attrs: {
      to: {
        name: "index_products"
      }
    }
  }, [_c("i", {
    staticClass: "i-Left"
  }), _vm._v(" Back to list\n      ")])], 1)]), _vm._v(" "), _c("b-card", {
    staticClass: "shadow-sm"
  }, [_c("div", {
    staticClass: "d-flex justify-content-center mb-3"
  }, [_c("b-button-group", {
    staticClass: "seg",
    attrs: {
      size: "sm"
    }
  }, [_c("b-button", {
    attrs: {
      variant: _vm.importType === "single" ? "primary" : "outline-primary"
    },
    on: {
      click: function click($event) {
        return _vm.switchType("single");
      }
    }
  }, [_c("i", {
    staticClass: "i-Shop mr-1"
  }), _vm._v("Single Products\n        ")]), _vm._v(" "), _c("b-button", {
    attrs: {
      variant: _vm.importType === "variant" ? "primary" : "outline-primary"
    },
    on: {
      click: function click($event) {
        return _vm.switchType("variant");
      }
    }
  }, [_c("i", {
    staticClass: "i-Library mr-1"
  }), _vm._v("Variant Products\n        ")])], 1)], 1), _vm._v(" "), _c("b-row", [_c("b-col", {
    staticClass: "mb-4",
    attrs: {
      md: "7"
    }
  }, [_c("b-card", {
    staticClass: "mb-3"
  }, [_c("label", {
    staticClass: "font-weight-600 mb-1"
  }, [_vm._v("Warehouse "), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v("*")])]), _vm._v(" "), _c("v-select", {
    "class": {
      "is-invalid": _vm.warehouseTouched && !_vm.warehouse_id
    },
    attrs: {
      reduce: function reduce(opt) {
        return opt.value;
      },
      options: _vm.warehouseOptions,
      placeholder: "Choose a warehouse..."
    },
    model: {
      value: _vm.warehouse_id,
      callback: function callback($$v) {
        _vm.warehouse_id = $$v;
      },
      expression: "warehouse_id"
    }
  }), _vm._v(" "), _c("small", {
    staticClass: "text-muted d-block mt-1"
  }, [_vm._v("Stock will be added to this warehouse.")]), _vm._v(" "), _vm.warehouseTouched && !_vm.warehouse_id ? _c("div", {
    staticClass: "invalid-feedback d-block"
  }, [_vm._v("Please choose a warehouse.")]) : _vm._e()], 1), _vm._v(" "), _c("div", {
    staticClass: "dropzone",
    "class": {
      "is-dragover": _vm.isDragOver,
      "has-file": !!_vm.file
    },
    on: {
      dragover: function dragover($event) {
        $event.preventDefault();
        return _vm.onDragOver.apply(null, arguments);
      },
      dragleave: function dragleave($event) {
        $event.preventDefault();
        return _vm.onDragLeave.apply(null, arguments);
      },
      drop: function drop($event) {
        $event.preventDefault();
        return _vm.onDrop.apply(null, arguments);
      },
      click: _vm.browse
    }
  }, [_c("input", {
    ref: "file",
    staticClass: "d-none",
    attrs: {
      type: "file",
      accept: _vm.accept
    },
    on: {
      change: _vm.onFileSelected
    }
  }), _vm._v(" "), _c("div", {
    staticClass: "dz-inner text-center"
  }, [_c("div", {
    staticClass: "dz-icon mb-2"
  }, [_c("i", {
    staticClass: "i-Download-Window"
  })]), _vm._v(" "), _c("h5", {
    staticClass: "mb-2"
  }, [_vm._v("Click or drop your Excel file here")]), _vm._v(" "), _c("div", {
    staticClass: "text-muted small"
  }, [_vm._v("\n              Allowed formats: XLSX, XLS · Max size: 20MB\n            ")]), _vm._v(" "), _vm.file ? _c("div", {
    staticClass: "file-pill mt-3 d-inline-flex align-items-center"
  }, [_c("div", {
    staticClass: "file-dot mr-2"
  }), _vm._v(" "), _c("div", {
    staticClass: "file-meta mr-3"
  }, [_c("div", {
    staticClass: "file-name"
  }, [_vm._v(_vm._s(_vm.fileName))]), _vm._v(" "), _c("div", {
    staticClass: "file-size text-muted small"
  }, [_vm._v(_vm._s(_vm.prettySize))])]), _vm._v(" "), _c("b-button", {
    attrs: {
      size: "sm",
      variant: "outline-danger"
    },
    on: {
      click: function click($event) {
        $event.stopPropagation();
        return _vm.clearFile.apply(null, arguments);
      }
    }
  }, [_vm._v("Remove")])], 1) : _vm._e()])]), _vm._v(" "), _c("b-card", {
    staticClass: "mt-3"
  }, [_c("div", {
    staticClass: "d-flex align-items-center mb-2"
  }, [_c("i", {
    staticClass: "i-Information mr-2 text-primary"
  }), _vm._v(" "), _c("h6", {
    staticClass: "mb-0"
  }, [_vm._v("Example format")])]), _vm._v(" "), _vm.importType === "single" ? _c("div", [_c("p", {
    staticClass: "small text-muted mb-2"
  }, [_vm._v("\n              One row per product. Columns in "), _c("span", {
    staticClass: "badge badge-success-soft"
  }, [_vm._v("green")]), _vm._v(" are required.\n            ")]), _vm._v(" "), _c("div", {
    staticClass: "table-responsive"
  }, [_c("table", {
    staticClass: "table table-sm table-bordered example-table"
  }, [_c("thead", {
    staticClass: "thead-light"
  }, [_c("tr", [_c("th", {
    staticClass: "req"
  }, [_vm._v("product_code")]), _vm._v(" "), _c("th", {
    staticClass: "req"
  }, [_vm._v("qty")])])]), _vm._v(" "), _c("tbody", [_c("tr", [_c("td", [_vm._v("TSHIRT-BLUE")]), _vm._v(" "), _c("td", [_vm._v("10")])]), _vm._v(" "), _c("tr", [_c("td", [_vm._v("MUG-COF-01")]), _vm._v(" "), _c("td", [_vm._v("25")])])])])]), _vm._v(" "), _c("ul", {
    staticClass: "mini-notes mt-2"
  }, [_c("li", [_c("strong", [_vm._v("product_code")]), _vm._v(" :must already exist.")]), _vm._v(" "), _c("li", [_c("strong", [_vm._v("qty")]), _vm._v(" : Quantity to added to current stock.")])])]) : _c("div", [_c("p", {
    staticClass: "small text-muted mb-2"
  }, [_vm._v("\n              One row per variant. Columns in "), _c("span", {
    staticClass: "badge badge-success-soft"
  }, [_vm._v("green")]), _vm._v(" are required.\n            ")]), _vm._v(" "), _c("div", {
    staticClass: "table-responsive"
  }, [_c("table", {
    staticClass: "table table-sm table-bordered example-table"
  }, [_c("thead", {
    staticClass: "thead-light"
  }, [_c("tr", [_c("th", {
    staticClass: "req"
  }, [_vm._v("product_code")]), _vm._v(" "), _c("th", {
    staticClass: "req"
  }, [_vm._v("variant_code")]), _vm._v(" "), _c("th", {
    staticClass: "req"
  }, [_vm._v("qty")])])]), _vm._v(" "), _c("tbody", [_c("tr", [_c("td", [_vm._v("TSHIRT-100")]), _vm._v(" "), _c("td", [_vm._v("TSHIRT-100-S")]), _vm._v(" "), _c("td", [_vm._v("5")])]), _vm._v(" "), _c("tr", [_c("td", [_vm._v("TSHIRT-100")]), _vm._v(" "), _c("td", [_vm._v("TSHIRT-100-M")]), _vm._v(" "), _c("td", [_vm._v("8")])]), _vm._v(" "), _c("tr", [_c("td", [_vm._v("TSHIRT-100")]), _vm._v(" "), _c("td", [_vm._v("TSHIRT-100-L")]), _vm._v(" "), _c("td", [_vm._v("7")])])])])]), _vm._v(" "), _c("ul", {
    staticClass: "mini-notes mt-2"
  }, [_c("li", [_c("strong", [_vm._v("product_code")]), _vm._v(" and "), _c("strong", [_vm._v("variant_code")]), _vm._v("  : must exist, and must match.")]), _vm._v(" "), _c("li", [_c("strong", [_vm._v("qty")]), _vm._v("  : Quantity to added to the variant’s stock.")])])]), _vm._v(" "), _c("div", {
    staticClass: "mt-2"
  }, [_c("a", {
    staticClass: "btn btn-outline-info btn-sm",
    attrs: {
      href: _vm.exampleHref,
      target: "_blank",
      rel: "noopener"
    }
  }, [_c("i", {
    staticClass: "i-File-Excel mr-1"
  }), _vm._v("Download example\n            ")])])]), _vm._v(" "), _vm.errorMessages.length ? _c("b-alert", {
    staticClass: "mt-3",
    attrs: {
      show: "",
      variant: "danger"
    }
  }, [_c("div", {
    staticClass: "d-flex align-items-start"
  }, [_c("i", {
    staticClass: "i-Close-Window mr-2 mt-1"
  }), _vm._v(" "), _c("div", [_c("div", {
    staticClass: "font-weight-bold mb-1"
  }, [_vm._v("Import failed. Fix the issues below:")]), _vm._v(" "), _c("ul", {
    staticClass: "mb-0 pl-3"
  }, _vm._l(_vm.errorMessages, function (err, idx) {
    return _c("li", {
      key: "err-" + idx
    }, [_vm._v(_vm._s(err))]);
  }), 0)])])]) : _vm._e(), _vm._v(" "), _vm.warningMessages.length ? _c("b-alert", {
    staticClass: "mt-3",
    attrs: {
      show: "",
      variant: "warning"
    }
  }, [_c("div", {
    staticClass: "d-flex align-items-start"
  }, [_c("i", {
    staticClass: "i-Information mr-2 mt-1"
  }), _vm._v(" "), _c("div", [_c("div", {
    staticClass: "font-weight-bold mb-1"
  }, [_vm._v("Warnings")]), _vm._v(" "), _c("ul", {
    staticClass: "mb-0 pl-3"
  }, _vm._l(_vm.warningMessages, function (w, idx) {
    return _c("li", {
      key: "warn-" + idx
    }, [_vm._v(_vm._s(w))]);
  }), 0)])])]) : _vm._e(), _vm._v(" "), _vm.uploading ? _c("div", {
    staticClass: "mt-3"
  }, [_c("div", {
    staticClass: "d-flex justify-content-between mb-1"
  }, [_c("small", {
    staticClass: "text-muted"
  }, [_vm._v("Uploading")]), _vm._v(" "), _c("small", [_vm._v(_vm._s(_vm.progress) + "%")])]), _vm._v(" "), _c("b-progress", {
    attrs: {
      value: _vm.progress,
      height: "8px"
    }
  })], 1) : _vm._e(), _vm._v(" "), _c("div", {
    staticClass: "d-flex flex-wrap align-items-center mt-3"
  }, [_c("b-button", {
    staticClass: "mr-2 mb-2",
    attrs: {
      variant: "primary",
      size: "sm",
      disabled: !_vm.canSubmit || _vm.uploading
    },
    on: {
      click: _vm.submit
    }
  }, [!_vm.uploading ? _c("span", [_c("i", {
    staticClass: "i-Upload mr-1"
  }), _vm._v("Import now")]) : _c("span", {
    staticClass: "d-inline-flex align-items-center"
  }, [_c("span", {
    staticClass: "spinner sm spinner-white mr-2"
  }), _vm._v("Processing…\n            ")])]), _vm._v(" "), _c("b-button", {
    staticClass: "mb-2",
    attrs: {
      variant: "outline-secondary",
      size: "sm",
      disabled: !_vm.file && !_vm.warehouse_id || _vm.uploading
    },
    on: {
      click: _vm.resetAll
    }
  }, [_c("i", {
    staticClass: "i-Power-2 mr-1"
  }), _vm._v("Reset\n          ")])], 1)], 1), _vm._v(" "), _c("b-col", {
    staticClass: "mb-4",
    attrs: {
      md: "5"
    }
  }, [_c("b-card", {
    staticClass: "mb-3"
  }, [_c("h6", {
    staticClass: "mb-2"
  }, [_vm._v("Required & optional columns")]), _vm._v(" "), _vm.importType === "single" ? _c("div", [_c("div", {
    staticClass: "chip-grid"
  }, [_c("span", {
    staticClass: "chip chip-req"
  }, [_vm._v("product_code")]), _vm._v(" "), _c("span", {
    staticClass: "chip chip-req"
  }, [_vm._v("qty")])]), _vm._v(" "), _c("ul", {
    staticClass: "mini-notes mt-3"
  }, [_c("li", [_c("strong", [_vm._v("product_code")]), _vm._v(" — Must exist in Products.")]), _vm._v(" "), _c("li", [_c("strong", [_vm._v("qty")]), _vm._v(" — Positive number.")])])]) : _c("div", [_c("div", {
    staticClass: "chip-grid"
  }, [_c("span", {
    staticClass: "chip chip-req"
  }, [_vm._v("product_code")]), _vm._v(" "), _c("span", {
    staticClass: "chip chip-req"
  }, [_vm._v("variant_code")]), _vm._v(" "), _c("span", {
    staticClass: "chip chip-req"
  }, [_vm._v("qty")])]), _vm._v(" "), _c("ul", {
    staticClass: "mini-notes mt-3"
  }, [_c("li", [_c("strong", [_vm._v("product_code")]), _vm._v(" — Must exist in Products.")]), _vm._v(" "), _c("li", [_c("strong", [_vm._v("variant_code")]), _vm._v(" — Must exist in Product Variants and belong to the product.")]), _vm._v(" "), _c("li", [_c("strong", [_vm._v("qty")]), _vm._v(" — Positive number.")])])])]), _vm._v(" "), _c("b-alert", {
    staticClass: "border",
    attrs: {
      show: "",
      variant: "light"
    }
  }, [_c("div", {
    staticClass: "d-flex"
  }, [_c("div", {
    staticClass: "tip-badge mr-2"
  }, [_c("i", {
    staticClass: "i-Information"
  })]), _vm._v(" "), _c("div", [_c("strong", [_vm._v("Heads up")]), _vm._v(" "), _c("div", {
    staticClass: "small text-muted"
  }, [_vm._v("Large files may take longer to process.")])])])])], 1)], 1)], 1)], 1);
};
var staticRenderFns = [function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "d-flex align-items-center"
  }, [_c("div", {
    staticClass: "hero-icon mr-3"
  }, [_c("i", {
    staticClass: "i-Upload"
  })]), _vm._v(" "), _c("div", [_c("h3", {
    staticClass: "mb-1"
  }, [_vm._v("Opening Stock Import")]), _vm._v(" "), _c("div", {
    staticClass: "text-muted small"
  }, [_vm._v("Add initial quantities from an Excel file.")])])]);
}];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-8.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-8.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/products/opening_stock_import.vue?vue&type=style&index=0&id=6d0a9e9a&scoped=true&lang=css":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-8.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-8.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/products/opening_stock_import.vue?vue&type=style&index=0&id=6d0a9e9a&scoped=true&lang=css ***!
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
___CSS_LOADER_EXPORT___.push([module.id, "\n/* Hero */\n.hero[data-v-6d0a9e9a]{position:relative;border-radius:12px;overflow:hidden}\n.hero-bg[data-v-6d0a9e9a]{position:absolute;inset:0;background:linear-gradient(135deg,#e6f0ff 0%,#f7fbff 60%,#ffffff 100%);opacity:.9}\n.hero-body[data-v-6d0a9e9a]{position:relative;padding:1.1rem 1.1rem}\n.hero-icon[data-v-6d0a9e9a]{width:44px;height:44px;border-radius:12px;background:#2667ff10;color:#2667ff;display:inline-grid;place-items:center;font-size:20px}\n\n/* Segmented control */\n.seg .btn[data-v-6d0a9e9a]{min-width:160px}\n\n/* Dropzone */\n.dropzone[data-v-6d0a9e9a]{border:2px dashed #cfd8e3;border-radius:14px;padding:28px 18px;cursor:pointer;transition:all .15s ease;background:#fbfdff}\n.dropzone[data-v-6d0a9e9a]:hover{border-color:#9cb4ff;background:#f7fbff;box-shadow:0 1px 6px rgba(38,103,255,.08)}\n.dropzone.is-dragover[data-v-6d0a9e9a]{border-color:#2667ff;background:#f1f6ff}\n.dropzone.has-file[data-v-6d0a9e9a]{border-color:#cfd8e3}\n.dz-icon[data-v-6d0a9e9a]{font-size:28px;color:#2667ff}\n\n/* File pill */\n.file-pill[data-v-6d0a9e9a]{border:1px solid #e6ebf2;border-radius:999px;padding:8px 12px;background:#fff}\n.file-dot[data-v-6d0a9e9a]{width:10px;height:10px;background:#2667ff;border-radius:999px}\n.file-name[data-v-6d0a9e9a]{font-weight:600}\n\n/* Example badges */\n.badge-success-soft[data-v-6d0a9e9a]{background:#eaf7ef;color:#0a7a2d;border:1px solid #cdebd7;font-weight:600}\n\n/* Example table */\n.example-table th.req[data-v-6d0a9e9a]{background:#eaf7ef;border-color:#cdebd7}\n.example-table thead th[data-v-6d0a9e9a]{font-weight:600}\n\n/* Chips grid */\n.chip-grid[data-v-6d0a9e9a]{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));grid-gap:8px}\n@media (min-width:992px){.chip-grid[data-v-6d0a9e9a]{grid-template-columns:repeat(3,minmax(0,1fr))}}\n.chip[data-v-6d0a9e9a]{display:inline-block;padding:6px 10px;border-radius:999px;font-size:.85rem;font-weight:600;border:1px solid transparent;white-space:nowrap;text-overflow:ellipsis;overflow:hidden}\n.chip-req[data-v-6d0a9e9a]{color:#0a7a2d;background:#eaf7ef;border-color:#cdebd7}\n.chip-opt[data-v-6d0a9e9a]{color:#475569;background:#f5f7fb;border-color:#e6e9f2}\n\n/* Notes */\n.mini-notes[data-v-6d0a9e9a]{padding-left:18px;margin:0}\n.mini-notes li[data-v-6d0a9e9a]{margin-bottom:6px}\n\n/* Tip badge */\n.tip-badge[data-v-6d0a9e9a]{width:28px;height:28px;border-radius:8px;background:#f1f5ff;color:#2667ff;display:inline-grid;place-items:center;font-size:14px}\n", ""]);
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

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-8.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-8.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/products/opening_stock_import.vue?vue&type=style&index=0&id=6d0a9e9a&scoped=true&lang=css":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-8.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-8.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/products/opening_stock_import.vue?vue&type=style&index=0&id=6d0a9e9a&scoped=true&lang=css ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_8_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_8_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_opening_stock_import_vue_vue_type_style_index_0_id_6d0a9e9a_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-8.use[1]!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-8.use[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./opening_stock_import.vue?vue&type=style&index=0&id=6d0a9e9a&scoped=true&lang=css */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-8.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-8.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/products/opening_stock_import.vue?vue&type=style&index=0&id=6d0a9e9a&scoped=true&lang=css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_8_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_8_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_opening_stock_import_vue_vue_type_style_index_0_id_6d0a9e9a_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_8_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_8_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_opening_stock_import_vue_vue_type_style_index_0_id_6d0a9e9a_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

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

/***/ "./resources/src/views/app/pages/products/opening_stock_import.vue":
/*!*************************************************************************!*\
  !*** ./resources/src/views/app/pages/products/opening_stock_import.vue ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _opening_stock_import_vue_vue_type_template_id_6d0a9e9a_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./opening_stock_import.vue?vue&type=template&id=6d0a9e9a&scoped=true */ "./resources/src/views/app/pages/products/opening_stock_import.vue?vue&type=template&id=6d0a9e9a&scoped=true");
/* harmony import */ var _opening_stock_import_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./opening_stock_import.vue?vue&type=script&lang=js */ "./resources/src/views/app/pages/products/opening_stock_import.vue?vue&type=script&lang=js");
/* harmony import */ var _opening_stock_import_vue_vue_type_style_index_0_id_6d0a9e9a_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./opening_stock_import.vue?vue&type=style&index=0&id=6d0a9e9a&scoped=true&lang=css */ "./resources/src/views/app/pages/products/opening_stock_import.vue?vue&type=style&index=0&id=6d0a9e9a&scoped=true&lang=css");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _opening_stock_import_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _opening_stock_import_vue_vue_type_template_id_6d0a9e9a_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render,
  _opening_stock_import_vue_vue_type_template_id_6d0a9e9a_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "6d0a9e9a",
  null
  
)

/* hot reload */
if (false) // removed by dead control flow
{ var api; }
component.options.__file = "resources/src/views/app/pages/products/opening_stock_import.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/src/views/app/pages/products/opening_stock_import.vue?vue&type=script&lang=js":
/*!*************************************************************************************************!*\
  !*** ./resources/src/views/app/pages/products/opening_stock_import.vue?vue&type=script&lang=js ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_opening_stock_import_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./opening_stock_import.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/products/opening_stock_import.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_opening_stock_import_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/src/views/app/pages/products/opening_stock_import.vue?vue&type=style&index=0&id=6d0a9e9a&scoped=true&lang=css":
/*!*********************************************************************************************************************************!*\
  !*** ./resources/src/views/app/pages/products/opening_stock_import.vue?vue&type=style&index=0&id=6d0a9e9a&scoped=true&lang=css ***!
  \*********************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_8_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_8_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_opening_stock_import_vue_vue_type_style_index_0_id_6d0a9e9a_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/style-loader/dist/cjs.js!../../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-8.use[1]!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-8.use[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./opening_stock_import.vue?vue&type=style&index=0&id=6d0a9e9a&scoped=true&lang=css */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-8.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-8.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/products/opening_stock_import.vue?vue&type=style&index=0&id=6d0a9e9a&scoped=true&lang=css");


/***/ }),

/***/ "./resources/src/views/app/pages/products/opening_stock_import.vue?vue&type=template&id=6d0a9e9a&scoped=true":
/*!*******************************************************************************************************************!*\
  !*** ./resources/src/views/app/pages/products/opening_stock_import.vue?vue&type=template&id=6d0a9e9a&scoped=true ***!
  \*******************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_opening_stock_import_vue_vue_type_template_id_6d0a9e9a_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_opening_stock_import_vue_vue_type_template_id_6d0a9e9a_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_opening_stock_import_vue_vue_type_template_id_6d0a9e9a_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./opening_stock_import.vue?vue&type=template&id=6d0a9e9a&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/products/opening_stock_import.vue?vue&type=template&id=6d0a9e9a&scoped=true");


/***/ })

}]);