"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["store_asset"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/assets/store_asset.vue?vue&type=script&lang=js":
/*!******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/assets/store_asset.vue?vue&type=script&lang=js ***!
  \******************************************************************************************************************************************************************************************************************/
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
  name: 'AssetCreate',
  data: function data() {
    return {
      form: {
        tag: '',
        name: '',
        asset_category_id: null,
        serial_number: '',
        description: '',
        purchase_date: '',
        purchase_cost: null,
        status: 'in_use',
        warehouse_id: null
      },
      categories: [],
      warehouses: [],
      statusOptions: [{
        value: 'in_use',
        text: this.$t('In_Use')
      }, {
        value: 'maintenance',
        text: this.$t('Maintenance')
      }, {
        value: 'retired',
        text: this.$t('Retired')
      }],
      SubmitProcessing: false
    };
  },
  created: function created() {
    this.fetchElements();
  },
  methods: {
    getValidationState: function getValidationState(_ref) {
      var dirty = _ref.dirty,
        validated = _ref.validated,
        _ref$valid = _ref.valid,
        valid = _ref$valid === void 0 ? null : _ref$valid;
      return dirty || validated ? valid : null;
    },
    fetchElements: function fetchElements() {
      var _this = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee() {
        var _yield$axios$get, data;
        return _regenerator().w(function (_context) {
          while (1) switch (_context.n) {
            case 0:
              _context.n = 1;
              return axios.get('assets/create');
            case 1:
              _yield$axios$get = _context.v;
              data = _yield$axios$get.data;
              _this.categories = data.asset_categories || [];
              _this.warehouses = data.warehouses || [];
            case 2:
              return _context.a(2);
          }
        }, _callee);
      }))();
    },
    submitAsset: function submitAsset() {
      var _this2 = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2() {
        var valid, _t;
        return _regenerator().w(function (_context2) {
          while (1) switch (_context2.p = _context2.n) {
            case 0:
              _context2.n = 1;
              return _this2.$refs.create_asset.validate();
            case 1:
              valid = _context2.v;
              if (valid) {
                _context2.n = 2;
                break;
              }
              return _context2.a(2);
            case 2:
              _this2.SubmitProcessing = true;
              _context2.p = 3;
              _context2.n = 4;
              return axios.post('assets', _this2.form);
            case 4:
              _this2.$router.push('/app/assets/list');
              _context2.n = 6;
              break;
            case 5:
              _context2.p = 5;
              _t = _context2.v;
              _this2.SubmitProcessing = false;
              throw _t;
            case 6:
              return _context2.a(2);
          }
        }, _callee2, null, [[3, 5]]);
      }))();
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/assets/store_asset.vue?vue&type=template&id=5da53a23":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/assets/store_asset.vue?vue&type=template&id=5da53a23 ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************/
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
      page: _vm.$t("Add_Asset"),
      folder: _vm.$t("Assets")
    }
  }), _vm._v(" "), _c("validation-observer", {
    ref: "create_asset",
    scopedSlots: _vm._u([{
      key: "default",
      fn: function fn(_ref) {
        var validate = _ref.validate,
          reset = _ref.reset;
        return [_c("b-form", {
          on: {
            submit: function submit($event) {
              $event.preventDefault();
              return _vm.submitAsset.apply(null, arguments);
            }
          }
        }, [_c("b-row", [_c("b-col", {
          attrs: {
            md: "6"
          }
        }, [_c("b-form-group", {
          attrs: {
            label: _vm.$t("Tag") + " *"
          }
        }, [_c("validation-provider", {
          attrs: {
            name: "tag",
            rules: {
              required: true
            }
          },
          scopedSlots: _vm._u([{
            key: "default",
            fn: function fn(validationContext) {
              return [_c("b-form-input", {
                attrs: {
                  state: _vm.getValidationState(validationContext),
                  "aria-describedby": "tag-feedback"
                },
                model: {
                  value: _vm.form.tag,
                  callback: function callback($$v) {
                    _vm.$set(_vm.form, "tag", $$v);
                  },
                  expression: "form.tag"
                }
              }), _vm._v(" "), _c("b-form-invalid-feedback", {
                attrs: {
                  id: "tag-feedback"
                }
              }, [_vm._v(_vm._s(validationContext.errors[0]))])];
            }
          }], null, true)
        })], 1)], 1), _vm._v(" "), _c("b-col", {
          attrs: {
            md: "6"
          }
        }, [_c("b-form-group", {
          attrs: {
            label: _vm.$t("Name") + " *"
          }
        }, [_c("validation-provider", {
          attrs: {
            name: "name",
            rules: {
              required: true
            }
          },
          scopedSlots: _vm._u([{
            key: "default",
            fn: function fn(validationContext) {
              return [_c("b-form-input", {
                attrs: {
                  state: _vm.getValidationState(validationContext),
                  "aria-describedby": "name-feedback"
                },
                model: {
                  value: _vm.form.name,
                  callback: function callback($$v) {
                    _vm.$set(_vm.form, "name", $$v);
                  },
                  expression: "form.name"
                }
              }), _vm._v(" "), _c("b-form-invalid-feedback", {
                attrs: {
                  id: "name-feedback"
                }
              }, [_vm._v(_vm._s(validationContext.errors[0]))])];
            }
          }], null, true)
        })], 1)], 1), _vm._v(" "), _c("b-col", {
          attrs: {
            md: "6"
          }
        }, [_c("validation-provider", {
          attrs: {
            name: "asset_category_id",
            rules: {
              required: true
            }
          },
          scopedSlots: _vm._u([{
            key: "default",
            fn: function fn(_ref2) {
              var valid = _ref2.valid,
                errors = _ref2.errors;
              return [_c("b-form-group", {
                attrs: {
                  label: _vm.$t("Category") + " *"
                }
              }, [_c("v-select", {
                "class": {
                  "is-invalid": !!errors.length
                },
                attrs: {
                  state: errors[0] ? false : valid ? true : null,
                  reduce: function reduce(opt) {
                    return opt.value;
                  },
                  placeholder: _vm.$t("Choose_Category"),
                  options: _vm.categories.map(function (c) {
                    return {
                      label: c.name,
                      value: c.id
                    };
                  })
                },
                model: {
                  value: _vm.form.asset_category_id,
                  callback: function callback($$v) {
                    _vm.$set(_vm.form, "asset_category_id", $$v);
                  },
                  expression: "form.asset_category_id"
                }
              }), _vm._v(" "), _c("b-form-invalid-feedback", [_vm._v(_vm._s(errors[0]))])], 1)];
            }
          }], null, true)
        })], 1), _vm._v(" "), _c("b-col", {
          attrs: {
            md: "6"
          }
        }, [_c("b-form-group", {
          attrs: {
            label: _vm.$t("Serial")
          }
        }, [_c("b-form-input", {
          model: {
            value: _vm.form.serial_number,
            callback: function callback($$v) {
              _vm.$set(_vm.form, "serial_number", $$v);
            },
            expression: "form.serial_number"
          }
        })], 1)], 1), _vm._v(" "), _c("b-col", {
          attrs: {
            md: "6"
          }
        }, [_c("b-form-group", {
          attrs: {
            label: _vm.$t("Purchase_Date")
          }
        }, [_c("b-form-input", {
          attrs: {
            type: "date"
          },
          model: {
            value: _vm.form.purchase_date,
            callback: function callback($$v) {
              _vm.$set(_vm.form, "purchase_date", $$v);
            },
            expression: "form.purchase_date"
          }
        })], 1)], 1), _vm._v(" "), _c("b-col", {
          attrs: {
            md: "6"
          }
        }, [_c("b-form-group", {
          attrs: {
            label: _vm.$t("Purchase_Cost")
          }
        }, [_c("validation-provider", {
          attrs: {
            name: "purchase_cost",
            rules: {
              regex: /^\d*\.?\d*$/
            }
          },
          scopedSlots: _vm._u([{
            key: "default",
            fn: function fn(validationContext) {
              return [_c("b-form-input", {
                attrs: {
                  type: "text",
                  step: "0.01",
                  state: _vm.getValidationState(validationContext),
                  "aria-describedby": "purchase_cost-feedback"
                },
                model: {
                  value: _vm.form.purchase_cost,
                  callback: function callback($$v) {
                    _vm.$set(_vm.form, "purchase_cost", _vm._n($$v));
                  },
                  expression: "form.purchase_cost"
                }
              }), _vm._v(" "), _c("b-form-invalid-feedback", {
                attrs: {
                  id: "purchase_cost-feedback"
                }
              }, [_vm._v(_vm._s(validationContext.errors[0]))])];
            }
          }], null, true)
        })], 1)], 1), _vm._v(" "), _c("b-col", {
          attrs: {
            md: "6"
          }
        }, [_c("b-form-group", {
          attrs: {
            label: _vm.$t("Status")
          }
        }, [_c("b-form-select", {
          attrs: {
            options: _vm.statusOptions
          },
          model: {
            value: _vm.form.status,
            callback: function callback($$v) {
              _vm.$set(_vm.form, "status", $$v);
            },
            expression: "form.status"
          }
        })], 1)], 1), _vm._v(" "), _c("b-col", {
          attrs: {
            md: "6"
          }
        }, [_c("validation-provider", {
          attrs: {
            name: "warehouse_id",
            rules: {
              required: true
            }
          },
          scopedSlots: _vm._u([{
            key: "default",
            fn: function fn(_ref3) {
              var valid = _ref3.valid,
                errors = _ref3.errors;
              return [_c("b-form-group", {
                attrs: {
                  label: _vm.$t("Warehouse") + " *"
                }
              }, [_c("v-select", {
                "class": {
                  "is-invalid": !!errors.length
                },
                attrs: {
                  state: errors[0] ? false : valid ? true : null,
                  reduce: function reduce(opt) {
                    return opt.value;
                  },
                  placeholder: _vm.$t("Select_Warehouse"),
                  options: _vm.warehouses.map(function (w) {
                    return {
                      label: w.name,
                      value: w.id
                    };
                  })
                },
                model: {
                  value: _vm.form.warehouse_id,
                  callback: function callback($$v) {
                    _vm.$set(_vm.form, "warehouse_id", $$v);
                  },
                  expression: "form.warehouse_id"
                }
              }), _vm._v(" "), _c("b-form-invalid-feedback", [_vm._v(_vm._s(errors[0]))])], 1)];
            }
          }], null, true)
        })], 1), _vm._v(" "), _c("b-col", {
          attrs: {
            md: "12"
          }
        }, [_c("b-form-group", {
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
              _vm.$set(_vm.form, "description", $$v);
            },
            expression: "form.description"
          }
        })], 1)], 1)], 1), _vm._v(" "), _c("div", [_c("b-button", {
          attrs: {
            type: "submit",
            variant: "primary",
            disabled: _vm.SubmitProcessing
          }
        }, [!_vm.SubmitProcessing ? _c("span", [_vm._v(_vm._s(_vm.$t("Save")))]) : _c("span", [_c("span", {
          staticClass: "spinner sm spinner-primary align-middle mr-2"
        }), _vm._v("\n            " + _vm._s(_vm.$t("Processing")) + "\n          ")])]), _vm._v(" "), _c("router-link", {
          staticClass: "btn btn-outline-secondary ml-2",
          attrs: {
            to: "/app/assets/list"
          }
        }, [_vm._v(_vm._s(_vm.$t("Cancel")))])], 1)], 1)];
      }
    }])
  })], 1);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./resources/src/views/app/pages/assets/store_asset.vue":
/*!**************************************************************!*\
  !*** ./resources/src/views/app/pages/assets/store_asset.vue ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _store_asset_vue_vue_type_template_id_5da53a23__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./store_asset.vue?vue&type=template&id=5da53a23 */ "./resources/src/views/app/pages/assets/store_asset.vue?vue&type=template&id=5da53a23");
/* harmony import */ var _store_asset_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./store_asset.vue?vue&type=script&lang=js */ "./resources/src/views/app/pages/assets/store_asset.vue?vue&type=script&lang=js");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _store_asset_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _store_asset_vue_vue_type_template_id_5da53a23__WEBPACK_IMPORTED_MODULE_0__.render,
  _store_asset_vue_vue_type_template_id_5da53a23__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) // removed by dead control flow
{ var api; }
component.options.__file = "resources/src/views/app/pages/assets/store_asset.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/src/views/app/pages/assets/store_asset.vue?vue&type=script&lang=js":
/*!**************************************************************************************!*\
  !*** ./resources/src/views/app/pages/assets/store_asset.vue?vue&type=script&lang=js ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_store_asset_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./store_asset.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/assets/store_asset.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_store_asset_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/src/views/app/pages/assets/store_asset.vue?vue&type=template&id=5da53a23":
/*!********************************************************************************************!*\
  !*** ./resources/src/views/app/pages/assets/store_asset.vue?vue&type=template&id=5da53a23 ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_store_asset_vue_vue_type_template_id_5da53a23__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_store_asset_vue_vue_type_template_id_5da53a23__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_store_asset_vue_vue_type_template_id_5da53a23__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./store_asset.vue?vue&type=template&id=5da53a23 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/assets/store_asset.vue?vue&type=template&id=5da53a23");


/***/ })

}]);