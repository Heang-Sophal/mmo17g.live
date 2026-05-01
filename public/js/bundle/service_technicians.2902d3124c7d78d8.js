"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["service_technicians"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/service/ServiceTechnicians.vue?vue&type=script&lang=js":
/*!**************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/service/ServiceTechnicians.vue?vue&type=script&lang=js ***!
  \**************************************************************************************************************************************************************************************************************************/
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
  name: 'ServiceTechnicians',
  data: function data() {
    return {
      isLoading: true,
      technicians: [],
      totalRows: 0,
      serverParams: {
        sort: {
          field: 'id',
          type: 'desc'
        },
        page: 1,
        perPage: 10,
        searchTerm: ''
      },
      form: {
        id: null,
        name: '',
        phone: '',
        email: '',
        notes: '',
        is_active: true
      },
      columns: [{
        label: this.$t('Name'),
        field: 'name'
      }, {
        label: this.$t('Phone'),
        field: 'phone'
      }, {
        label: this.$t('Email'),
        field: 'email'
      }, {
        label: this.$t('Status'),
        field: 'is_active'
      }, {
        label: this.$t('Actions'),
        field: 'actions',
        sortable: false
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
            return _this.fetchTechnicians();
          case 1:
            _this.isLoading = false;
          case 2:
            return _context.a(2);
        }
      }, _callee);
    }))();
  },
  methods: {
    fetchTechnicians: function fetchTechnicians() {
      var _this2 = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2() {
        var params, _yield$axios$get, data;
        return _regenerator().w(function (_context2) {
          while (1) switch (_context2.n) {
            case 0:
              params = {
                page: _this2.serverParams.page,
                limit: _this2.serverParams.perPage,
                SortField: _this2.serverParams.sort.field,
                SortType: _this2.serverParams.sort.type,
                search: _this2.serverParams.searchTerm
              };
              _context2.n = 1;
              return axios.get('service_technicians', {
                params: params
              });
            case 1:
              _yield$axios$get = _context2.v;
              data = _yield$axios$get.data;
              _this2.technicians = data.technicians || [];
              _this2.totalRows = data.totalRows || 0;
            case 2:
              return _context2.a(2);
          }
        }, _callee2);
      }))();
    },
    onPageChange: function onPageChange(_ref) {
      var currentPage = _ref.currentPage;
      this.serverParams.page = currentPage;
      this.fetchTechnicians();
    },
    onPerPageChange: function onPerPageChange(_ref2) {
      var currentPerPage = _ref2.currentPerPage;
      this.serverParams.perPage = currentPerPage;
      this.fetchTechnicians();
    },
    onSortChange: function onSortChange(params) {
      this.serverParams.sort.field = params[0].field;
      this.serverParams.sort.type = params[0].type;
      this.fetchTechnicians();
    },
    onSearch: function onSearch(params) {
      this.serverParams.searchTerm = params.searchTerm;
      this.fetchTechnicians();
    },
    resetForm: function resetForm() {
      this.form = {
        id: null,
        name: '',
        phone: '',
        email: '',
        notes: '',
        is_active: true
      };
    },
    editTechnician: function editTechnician(row) {
      this.form = {
        id: row.id,
        name: row.name,
        phone: row.phone,
        email: row.email,
        notes: row.notes,
        is_active: !!row.is_active
      };
    },
    saveTechnician: function saveTechnician() {
      var _this3 = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee3() {
        var payload;
        return _regenerator().w(function (_context3) {
          while (1) switch (_context3.n) {
            case 0:
              payload = {
                name: _this3.form.name,
                phone: _this3.form.phone,
                email: _this3.form.email,
                notes: _this3.form.notes,
                is_active: _this3.form.is_active
              };
              if (!_this3.form.id) {
                _context3.n = 2;
                break;
              }
              _context3.n = 1;
              return axios.put("service_technicians/".concat(_this3.form.id), payload);
            case 1:
              _context3.n = 3;
              break;
            case 2:
              _context3.n = 3;
              return axios.post('service_technicians', payload);
            case 3:
              _this3.resetForm();
              _context3.n = 4;
              return _this3.fetchTechnicians();
            case 4:
              return _context3.a(2);
          }
        }, _callee3);
      }))();
    },
    removeTechnician: function removeTechnician(row) {
      var _this4 = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee4() {
        var ok;
        return _regenerator().w(function (_context4) {
          while (1) switch (_context4.n) {
            case 0:
              _context4.n = 1;
              return _this4.$bvModal.msgBoxConfirm(_this4.$t('AreYouSure'), {
                size: 'sm'
              });
            case 1:
              ok = _context4.v;
              if (ok) {
                _context4.n = 2;
                break;
              }
              return _context4.a(2);
            case 2:
              _context4.n = 3;
              return axios["delete"]("service_technicians/".concat(row.id));
            case 3:
              _context4.n = 4;
              return _this4.fetchTechnicians();
            case 4:
              return _context4.a(2);
          }
        }, _callee4);
      }))();
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/service/ServiceTechnicians.vue?vue&type=template&id=6a01fbf1":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/service/ServiceTechnicians.vue?vue&type=template&id=6a01fbf1 ***!
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
      page: _vm.$t("Service_Technicians"),
      folder: _vm.$t("Service_Maintenance")
    }
  }), _vm._v(" "), _vm.isLoading ? _c("div", {
    staticClass: "loading_page spinner spinner-primary mr-3"
  }) : _c("div", {
    staticClass: "page-wrapper"
  }, [_c("b-row", [_c("b-col", {
    attrs: {
      md: "4"
    }
  }, [_c("b-card", {
    attrs: {
      title: _vm.$t("Technician_Details")
    }
  }, [_c("b-form", {
    on: {
      submit: function submit($event) {
        $event.preventDefault();
        return _vm.saveTechnician.apply(null, arguments);
      }
    }
  }, [_c("b-form-group", {
    attrs: {
      label: _vm.$t("Name")
    }
  }, [_c("b-form-input", {
    attrs: {
      required: ""
    },
    model: {
      value: _vm.form.name,
      callback: function callback($$v) {
        _vm.$set(_vm.form, "name", $$v);
      },
      expression: "form.name"
    }
  })], 1), _vm._v(" "), _c("b-form-group", {
    attrs: {
      label: _vm.$t("Phone")
    }
  }, [_c("b-form-input", {
    model: {
      value: _vm.form.phone,
      callback: function callback($$v) {
        _vm.$set(_vm.form, "phone", $$v);
      },
      expression: "form.phone"
    }
  })], 1), _vm._v(" "), _c("b-form-group", {
    attrs: {
      label: _vm.$t("Email")
    }
  }, [_c("b-form-input", {
    attrs: {
      type: "email"
    },
    model: {
      value: _vm.form.email,
      callback: function callback($$v) {
        _vm.$set(_vm.form, "email", $$v);
      },
      expression: "form.email"
    }
  })], 1), _vm._v(" "), _c("b-form-group", {
    attrs: {
      label: _vm.$t("Notes")
    }
  }, [_c("b-form-textarea", {
    attrs: {
      rows: "2"
    },
    model: {
      value: _vm.form.notes,
      callback: function callback($$v) {
        _vm.$set(_vm.form, "notes", $$v);
      },
      expression: "form.notes"
    }
  })], 1), _vm._v(" "), _c("b-form-group", {
    attrs: {
      label: _vm.$t("Status")
    }
  }, [_c("b-form-checkbox", {
    attrs: {
      "switch": ""
    },
    model: {
      value: _vm.form.is_active,
      callback: function callback($$v) {
        _vm.$set(_vm.form, "is_active", $$v);
      },
      expression: "form.is_active"
    }
  }, [_vm._v("\n                " + _vm._s(_vm.form.is_active ? _vm.$t("Actif") : _vm.$t("Inactif")) + "\n              ")])], 1), _vm._v(" "), _c("div", {
    staticClass: "text-right"
  }, [_c("b-button", {
    staticClass: "mr-2",
    attrs: {
      size: "sm",
      variant: "secondary"
    },
    on: {
      click: _vm.resetForm
    }
  }, [_vm._v("\n                " + _vm._s(_vm.$t("Reset")) + "\n              ")]), _vm._v(" "), _c("b-button", {
    attrs: {
      size: "sm",
      type: "submit",
      variant: "primary"
    }
  }, [_vm._v("\n                " + _vm._s(_vm.$t("Save")) + "\n              ")])], 1)], 1)], 1)], 1), _vm._v(" "), _c("b-col", {
    attrs: {
      md: "8"
    }
  }, [_c("b-card", {
    attrs: {
      title: _vm.$t("Service_Technicians")
    }
  }, [_c("vue-good-table", {
    attrs: {
      mode: "remote",
      columns: _vm.columns,
      totalRows: _vm.totalRows,
      rows: _vm.technicians,
      "search-options": {
        enabled: true,
        placeholder: _vm.$t("Search_this_table")
      },
      "pagination-options": {
        enabled: true,
        mode: "records"
      },
      styleClass: "tableOne vgt-table"
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
        return [props.column.field === "actions" ? _c("span", [_c("b-button", {
          staticClass: "mr-1",
          attrs: {
            size: "sm",
            variant: "outline-primary"
          },
          on: {
            click: function click($event) {
              return _vm.editTechnician(props.row);
            }
          }
        }, [_c("i", {
          staticClass: "i-Edit"
        })]), _vm._v(" "), _c("b-button", {
          attrs: {
            size: "sm",
            variant: "outline-danger"
          },
          on: {
            click: function click($event) {
              return _vm.removeTechnician(props.row);
            }
          }
        }, [_c("i", {
          staticClass: "i-Close-Window"
        })])], 1) : props.column.field === "is_active" ? _c("span", [props.row.is_active ? _c("span", {
          staticClass: "badge badge-outline-success"
        }, [_vm._v("\n                  " + _vm._s(_vm.$t("Actif")) + "\n                ")]) : _c("span", {
          staticClass: "badge badge-outline-danger"
        }, [_vm._v("\n                  " + _vm._s(_vm.$t("Inactif")) + "\n                ")])]) : _vm._e()];
      }
    }])
  })], 1)], 1)], 1)], 1)], 1);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./resources/src/views/app/pages/service/ServiceTechnicians.vue":
/*!**********************************************************************!*\
  !*** ./resources/src/views/app/pages/service/ServiceTechnicians.vue ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ServiceTechnicians_vue_vue_type_template_id_6a01fbf1__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ServiceTechnicians.vue?vue&type=template&id=6a01fbf1 */ "./resources/src/views/app/pages/service/ServiceTechnicians.vue?vue&type=template&id=6a01fbf1");
/* harmony import */ var _ServiceTechnicians_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ServiceTechnicians.vue?vue&type=script&lang=js */ "./resources/src/views/app/pages/service/ServiceTechnicians.vue?vue&type=script&lang=js");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ServiceTechnicians_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _ServiceTechnicians_vue_vue_type_template_id_6a01fbf1__WEBPACK_IMPORTED_MODULE_0__.render,
  _ServiceTechnicians_vue_vue_type_template_id_6a01fbf1__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) // removed by dead control flow
{ var api; }
component.options.__file = "resources/src/views/app/pages/service/ServiceTechnicians.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/src/views/app/pages/service/ServiceTechnicians.vue?vue&type=script&lang=js":
/*!**********************************************************************************************!*\
  !*** ./resources/src/views/app/pages/service/ServiceTechnicians.vue?vue&type=script&lang=js ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ServiceTechnicians_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ServiceTechnicians.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/service/ServiceTechnicians.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ServiceTechnicians_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/src/views/app/pages/service/ServiceTechnicians.vue?vue&type=template&id=6a01fbf1":
/*!****************************************************************************************************!*\
  !*** ./resources/src/views/app/pages/service/ServiceTechnicians.vue?vue&type=template&id=6a01fbf1 ***!
  \****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ServiceTechnicians_vue_vue_type_template_id_6a01fbf1__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ServiceTechnicians_vue_vue_type_template_id_6a01fbf1__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ServiceTechnicians_vue_vue_type_template_id_6a01fbf1__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ServiceTechnicians.vue?vue&type=template&id=6a01fbf1 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/service/ServiceTechnicians.vue?vue&type=template&id=6a01fbf1");


/***/ })

}]);