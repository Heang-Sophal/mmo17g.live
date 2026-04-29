"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["translations_view"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/settings/translations_view.vue?vue&type=script&lang=js":
/*!**************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/settings/translations_view.vue?vue&type=script&lang=js ***!
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
  data: function data() {
    return {
      showAddModal: false,
      newTranslation: {
        key: '',
        value: ''
      },
      locale: this.$route.params.locale,
      language: '',
      translations: [],
      originalTranslations: [],
      totalRows: 0,
      currentPage: 1,
      perPage: 100,
      isLoading: false,
      searchQuery: '',
      // sent to backend
      searchInput: '' // input field
    };
  },
  computed: {
    filteredTranslations: function filteredTranslations() {
      var _this = this;
      if (!this.searchQuery) return this.translations;
      return this.translations.filter(function (item) {
        return item.key.toLowerCase().includes(_this.searchQuery.toLowerCase());
      });
    }
  },
  methods: {
    submitNewTranslation: function submitNewTranslation() {
      var _this2 = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee() {
        var _t;
        return _regenerator().w(function (_context) {
          while (1) switch (_context.p = _context.n) {
            case 0:
              if (_this2.newTranslation.key) {
                _context.n = 1;
                break;
              }
              return _context.a(2);
            case 1:
              _context.p = 1;
              _context.n = 2;
              return axios.put("/translations_setting/".concat(_this2.locale), {
                key: _this2.newTranslation.key,
                value: _this2.newTranslation.value
              });
            case 2:
              _this2.$bvToast.toast(_this2.$t("Translation added"), {
                title: _this2.$t("Success"),
                variant: 'success',
                solid: true
              });
              _this2.showAddModal = false;
              _this2.newTranslation.key = '';
              _this2.newTranslation.value = '';

              // Reload current page
              _this2.fetchTranslations(_this2.currentPage);
              _context.n = 4;
              break;
            case 3:
              _context.p = 3;
              _t = _context.v;
              _this2.$bvToast.toast(_this2.$t("Failed to add translation"), {
                title: _this2.$t("Failed"),
                variant: 'danger',
                solid: true
              });
            case 4:
              return _context.a(2);
          }
        }, _callee, null, [[1, 3]]);
      }))();
    },
    applySearch: function applySearch() {
      this.searchQuery = this.searchInput;
      this.currentPage = 1;
      this.fetchTranslations(1);
    },
    resetSearch: function resetSearch() {
      this.searchInput = '';
      this.searchQuery = '';
      this.currentPage = 1;
      this.fetchTranslations(1);
    },
    fetchTranslations: function fetchTranslations() {
      var _arguments = arguments,
        _this3 = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2() {
        var page, res, _t2;
        return _regenerator().w(function (_context2) {
          while (1) switch (_context2.p = _context2.n) {
            case 0:
              page = _arguments.length > 0 && _arguments[0] !== undefined ? _arguments[0] : 1;
              _this3.isLoading = true;
              _context2.p = 1;
              _context2.n = 2;
              return axios.get("/translations_setting/".concat(_this3.locale), {
                params: {
                  page: page,
                  per_page: _this3.perPage,
                  search: _this3.searchQuery
                }
              });
            case 2:
              res = _context2.v;
              _this3.translations = res.data.data;
              _this3.originalTranslations = JSON.parse(JSON.stringify(res.data.data));
              _this3.totalRows = res.data.total;
              _this3.currentPage = res.data.current_page;
              _this3.language = res.data.language;
              _context2.n = 4;
              break;
            case 3:
              _context2.p = 3;
              _t2 = _context2.v;
            case 4:
              _context2.p = 4;
              _this3.isLoading = false;
              return _context2.f(4);
            case 5:
              return _context2.a(2);
          }
        }, _callee2, null, [[1, 3, 4, 5]]);
      }))();
    },
    saveTranslation: function saveTranslation(entry) {
      var _this4 = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee3() {
        var _t3;
        return _regenerator().w(function (_context3) {
          while (1) switch (_context3.p = _context3.n) {
            case 0:
              _context3.p = 0;
              _context3.n = 1;
              return axios.put("/translations_setting/".concat(_this4.locale), {
                key: entry.key,
                value: entry.value
              });
            case 1:
              _this4.$bvToast.toast(_this4.$t("Translation updated"), {
                title: 'Success',
                variant: 'success',
                solid: true
              });
              _context3.n = 3;
              break;
            case 2:
              _context3.p = 2;
              _t3 = _context3.v;
              _this4.$bvToast.toast(_this4.$t("Failed to update"), {
                title: _this4.$t("Failed"),
                variant: 'danger',
                solid: true
              });
            case 3:
              return _context3.a(2);
          }
        }, _callee3, null, [[0, 2]]);
      }))();
    },
    bulkSave: function bulkSave() {
      var _this5 = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee4() {
        var changed, _t4;
        return _regenerator().w(function (_context4) {
          while (1) switch (_context4.p = _context4.n) {
            case 0:
              changed = _this5.translations.filter(function (t, i) {
                var _this5$originalTransl;
                return t.value !== ((_this5$originalTransl = _this5.originalTranslations[i]) === null || _this5$originalTransl === void 0 ? void 0 : _this5$originalTransl.value);
              });
              if (changed.length) {
                _context4.n = 1;
                break;
              }
              _this5.$bvToast.toast(_this5.$t("No changes to save"), {
                title: _this5.$t("Notice"),
                variant: 'info',
                solid: true
              });
              return _context4.a(2);
            case 1:
              _this5.isLoading = true;
              _context4.p = 2;
              _context4.n = 3;
              return Promise.all(changed.map(function (entry) {
                return axios.put("/translations_setting/".concat(_this5.locale), {
                  key: entry.key,
                  value: entry.value
                });
              }));
            case 3:
              _this5.$bvToast.toast(_this5.$t("All changes saved successfully"), {
                title: _this5.$t("Success"),
                variant: 'success',
                solid: true
              });
              _this5.fetchTranslations(_this5.currentPage);
              _context4.n = 5;
              break;
            case 4:
              _context4.p = 4;
              _t4 = _context4.v;
              _this5.$bvToast.toast(_this5.$t("Bulk save failed"), {
                title: _this5.$t("Failed"),
                variant: 'danger',
                solid: true
              });
            case 5:
              _context4.p = 5;
              _this5.isLoading = false;
              return _context4.f(5);
            case 6:
              return _context4.a(2);
          }
        }, _callee4, null, [[2, 4, 5, 6]]);
      }))();
    },
    deleteTranslation: function deleteTranslation(key) {
      var _this6 = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee6() {
        var translation;
        return _regenerator().w(function (_context6) {
          while (1) switch (_context6.n) {
            case 0:
              translation = _this6.translations.find(function (t) {
                return t.key === key;
              });
              if (translation) {
                _context6.n = 1;
                break;
              }
              return _context6.a(2);
            case 1:
              _this6.$swal({
                title: _this6.$t("Delete_Title"),
                text: _this6.$t("Delete_Text"),
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                cancelButtonText: _this6.$t("Delete_cancelButtonText"),
                confirmButtonText: _this6.$t("Delete_confirmButtonText")
              }).then(/*#__PURE__*/function () {
                var _ref = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee5(result) {
                  var _t5;
                  return _regenerator().w(function (_context5) {
                    while (1) switch (_context5.p = _context5.n) {
                      case 0:
                        if (!result.value) {
                          _context5.n = 5;
                          break;
                        }
                        _context5.p = 1;
                        _context5.n = 2;
                        return axios["delete"]("/translations_setting/".concat(_this6.locale, "/").concat(key));
                      case 2:
                        _this6.$swal(_this6.$t("Delete_Deleted"), _this6.$t("Deleted_in_successfully"), "success");
                        _this6.fetchTranslations(_this6.currentPage);
                        _context5.n = 4;
                        break;
                      case 3:
                        _context5.p = 3;
                        _t5 = _context5.v;
                        _this6.$swal(_this6.$t("Delete_Failed"), _this6.$t("Delete_Therewassomethingwronge"), "warning");
                      case 4:
                        _context5.p = 4;
                        return _context5.f(4);
                      case 5:
                        return _context5.a(2);
                    }
                  }, _callee5, null, [[1, 3, 4, 5]]);
                }));
                return function (_x) {
                  return _ref.apply(this, arguments);
                };
              }());
            case 2:
              return _context6.a(2);
          }
        }, _callee6);
      }))();
    }
  },
  watch: {
    currentPage: function currentPage(newPage) {
      this.fetchTranslations(newPage);
    },
    searchQuery: function searchQuery() {
      this.currentPage = 1;
      this.fetchTranslations(1);
    }
  },
  created: function created() {
    this.fetchTranslations();
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/settings/translations_view.vue?vue&type=template&id=357a0cda":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/settings/translations_view.vue?vue&type=template&id=357a0cda ***!
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
      page: _vm.$t("Translations"),
      folder: _vm.$t("Settings")
    }
  }), _vm._v(" "), _vm.isLoading ? _c("div", {
    staticClass: "loading_page spinner spinner-primary mr-3"
  }) : _vm._e(), _vm._v(" "), !_vm.isLoading ? _c("div", [_c("div", {
    staticClass: "d-flex justify-content-between align-items-center mb-3"
  }, [_c("div", [_c("b-button", {
    attrs: {
      variant: "secondary"
    },
    on: {
      click: function click($event) {
        return _vm.$router.push("/app/settings/translations_settings");
      }
    }
  }, [_vm._v("\n          ← " + _vm._s(_vm.$t("Back")) + "\n        ")])], 1), _vm._v(" "), _c("h4", {
    staticClass: "mb-0"
  }, [_vm._v(_vm._s(_vm.$t("Translations for")) + ' " ' + _vm._s(_vm.language) + ' "')]), _vm._v(" "), _c("div")]), _vm._v(" "), _c("b-alert", {
    staticClass: "w-100 mb-3 text-center",
    attrs: {
      variant: "info",
      show: ""
    }
  }, [_vm._v("\n      🔄 " + _vm._s(_vm.$t("Please reload the page after saving translations to apply the changes.")) + "\n    ")]), _vm._v(" "), _c("div", {
    staticClass: "mb-3"
  }, [_c("b-row", {
    staticClass: "gy-2 align-items-center"
  }, [_c("b-col", {
    staticClass: "mt-2",
    attrs: {
      cols: "12",
      md: "8"
    }
  }, [_c("b-input-group", [_c("b-form-input", {
    attrs: {
      placeholder: "Search by key or value..."
    },
    model: {
      value: _vm.searchInput,
      callback: function callback($$v) {
        _vm.searchInput = $$v;
      },
      expression: "searchInput"
    }
  }), _vm._v(" "), _c("b-input-group-append", [_c("b-button", {
    attrs: {
      variant: "primary"
    },
    on: {
      click: _vm.applySearch
    }
  }, [_vm._v("\n              🔍\n            ")]), _vm._v(" "), _c("b-button", {
    attrs: {
      variant: "warning"
    },
    on: {
      click: _vm.resetSearch
    }
  }, [_vm._v("\n              🔄\n            ")])], 1)], 1)], 1), _vm._v(" "), _c("b-col", {
    staticClass: "mt-2",
    attrs: {
      cols: "12",
      md: "4"
    }
  }, [_c("b-button", {
    staticClass: "mr-2",
    attrs: {
      variant: "info"
    },
    on: {
      click: function click($event) {
        _vm.showAddModal = true;
      }
    }
  }, [_vm._v("\n          ➕ " + _vm._s(_vm.$t("Add New")) + "\n        ")]), _vm._v(" "), _c("b-button", {
    attrs: {
      variant: "success"
    },
    on: {
      click: _vm.bulkSave
    }
  }, [_vm._v("\n          💾 " + _vm._s(_vm.$t("Save All Changes")) + "\n        ")])], 1)], 1)], 1), _vm._v(" "), _c("b-modal", {
    attrs: {
      title: _vm.$t("Add New Translation"),
      "ok-title": "Add",
      "cancel-title": "Cancel"
    },
    on: {
      ok: _vm.submitNewTranslation
    },
    model: {
      value: _vm.showAddModal,
      callback: function callback($$v) {
        _vm.showAddModal = $$v;
      },
      expression: "showAddModal"
    }
  }, [_c("b-form", {
    on: {
      submit: function submit($event) {
        $event.stopPropagation();
        $event.preventDefault();
      }
    }
  }, [_c("b-form-group", {
    attrs: {
      label: "Key"
    }
  }, [_c("b-form-input", {
    attrs: {
      required: ""
    },
    model: {
      value: _vm.newTranslation.key,
      callback: function callback($$v) {
        _vm.$set(_vm.newTranslation, "key", $$v);
      },
      expression: "newTranslation.key"
    }
  })], 1), _vm._v(" "), _c("b-form-group", {
    attrs: {
      label: "Value"
    }
  }, [_c("b-form-input", {
    model: {
      value: _vm.newTranslation.value,
      callback: function callback($$v) {
        _vm.$set(_vm.newTranslation, "value", $$v);
      },
      expression: "newTranslation.value"
    }
  })], 1)], 1)], 1), _vm._v(" "), _c("b-table", {
    attrs: {
      items: _vm.filteredTranslations,
      fields: ["key", "value", "actions"],
      busy: _vm.isLoading,
      responsive: "",
      bordered: "",
      striped: "",
      small: ""
    },
    scopedSlots: _vm._u([{
      key: "cell(key)",
      fn: function fn(data) {
        return [_c("b-form-input", {
          attrs: {
            value: data.item.key,
            disabled: ""
          }
        })];
      }
    }, {
      key: "cell(value)",
      fn: function fn(data) {
        return [_c("b-form-input", {
          model: {
            value: data.item.value,
            callback: function callback($$v) {
              _vm.$set(data.item, "value", $$v);
            },
            expression: "data.item.value"
          }
        })];
      }
    }, {
      key: "cell(actions)",
      fn: function fn(data) {
        return [_c("b-button", {
          attrs: {
            size: "sm",
            variant: "success"
          },
          on: {
            click: function click($event) {
              return _vm.saveTranslation(data.item);
            }
          }
        }, [_vm._v("\n      " + _vm._s(_vm.$t("Save")) + "\n    ")]), _vm._v(" "), data.item.locale != "en" ? _c("b-button", {
          attrs: {
            size: "sm",
            variant: "danger"
          },
          on: {
            click: function click($event) {
              return _vm.deleteTranslation(data.item.key);
            }
          }
        }, [_vm._v(_vm._s(_vm.$t("Delete")) + "\n    ")]) : _vm._e()];
      }
    }], null, false, 3471801801)
  }), _vm._v(" "), _c("b-pagination", {
    staticClass: "mt-3",
    attrs: {
      "total-rows": _vm.totalRows,
      "per-page": _vm.perPage,
      align: "center"
    },
    model: {
      value: _vm.currentPage,
      callback: function callback($$v) {
        _vm.currentPage = $$v;
      },
      expression: "currentPage"
    }
  }), _vm._v(" "), _c("div", {
    staticClass: "text-muted text-right mb-2"
  }, [_vm._v("\n  " + _vm._s(_vm.$t("Showing")) + " " + _vm._s(_vm.translations.length) + " of " + _vm._s(_vm.totalRows) + " " + _vm._s(_vm.$t("Translations")) + "\n")])], 1) : _vm._e()], 1);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./resources/src/views/app/pages/settings/translations_view.vue":
/*!**********************************************************************!*\
  !*** ./resources/src/views/app/pages/settings/translations_view.vue ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _translations_view_vue_vue_type_template_id_357a0cda__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./translations_view.vue?vue&type=template&id=357a0cda */ "./resources/src/views/app/pages/settings/translations_view.vue?vue&type=template&id=357a0cda");
/* harmony import */ var _translations_view_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./translations_view.vue?vue&type=script&lang=js */ "./resources/src/views/app/pages/settings/translations_view.vue?vue&type=script&lang=js");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _translations_view_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _translations_view_vue_vue_type_template_id_357a0cda__WEBPACK_IMPORTED_MODULE_0__.render,
  _translations_view_vue_vue_type_template_id_357a0cda__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) // removed by dead control flow
{ var api; }
component.options.__file = "resources/src/views/app/pages/settings/translations_view.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/src/views/app/pages/settings/translations_view.vue?vue&type=script&lang=js":
/*!**********************************************************************************************!*\
  !*** ./resources/src/views/app/pages/settings/translations_view.vue?vue&type=script&lang=js ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_translations_view_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./translations_view.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/settings/translations_view.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_translations_view_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/src/views/app/pages/settings/translations_view.vue?vue&type=template&id=357a0cda":
/*!****************************************************************************************************!*\
  !*** ./resources/src/views/app/pages/settings/translations_view.vue?vue&type=template&id=357a0cda ***!
  \****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_translations_view_vue_vue_type_template_id_357a0cda__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_translations_view_vue_vue_type_template_id_357a0cda__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_translations_view_vue_vue_type_template_id_357a0cda__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./translations_view.vue?vue&type=template&id=357a0cda */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/settings/translations_view.vue?vue&type=template&id=357a0cda");


/***/ })

}]);