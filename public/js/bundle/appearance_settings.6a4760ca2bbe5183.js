"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["appearance_settings"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/settings/appearance_settings.vue?vue&type=script&lang=js":
/*!****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/settings/appearance_settings.vue?vue&type=script&lang=js ***!
  \****************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! nprogress */ "./node_modules/nprogress/nprogress.js");
/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(nprogress__WEBPACK_IMPORTED_MODULE_1__);
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
    title: "Appearance Settings"
  },
  data: function data() {
    return {
      isLoading: true,
      data: new FormData(),
      setting: {
        logo: "",
        favicon: "",
        footer: "",
        app_name: "",
        page_title_suffix: "",
        developed_by: "",
        // Login page appearance
        login_hero_title: "",
        login_hero_subtitle: "",
        login_panel_title: "",
        login_panel_subtitle: ""
      }
    };
  },
  methods: _objectSpread(_objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_0__.mapActions)(["refreshUserPermissions"])), {}, {
    //------------- Submit Validation Setting
    Submit_Setting: function Submit_Setting() {
      var _this = this;
      this.$refs.form_setting.validate().then(function (success) {
        if (!success) {
          _this.makeToast("danger", _this.$t("Please_fill_the_form_correctly"), _this.$t("Failed"));
        } else {
          _this.Update_Settings();
        }
      });
    },
    //------ Toast
    makeToast: function makeToast(variant, msg, title) {
      this.$root.$bvToast.toast(msg, {
        title: title,
        variant: variant,
        solid: true
      });
    },
    getValidationState: function getValidationState(_ref) {
      var dirty = _ref.dirty,
        validated = _ref.validated,
        _ref$valid = _ref.valid,
        valid = _ref$valid === void 0 ? null : _ref$valid;
      return dirty || validated ? valid : null;
    },
    //------------------------------ Event Upload Logo -------------------------------\\
    onFileSelected: function onFileSelected(e) {
      var _this2 = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee() {
        var _yield$_this2$$refs$L, valid;
        return _regenerator().w(function (_context) {
          while (1) switch (_context.n) {
            case 0:
              _context.n = 1;
              return _this2.$refs.Logo.validate(e);
            case 1:
              _yield$_this2$$refs$L = _context.v;
              valid = _yield$_this2$$refs$L.valid;
              if (valid) {
                _this2.setting.logo = e.target.files[0];
              } else {
                _this2.setting.logo = "";
              }
            case 2:
              return _context.a(2);
          }
        }, _callee);
      }))();
    },
    onFaviconSelected: function onFaviconSelected(e) {
      var _this3 = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2() {
        var _yield$_this3$$refs$F, valid;
        return _regenerator().w(function (_context2) {
          while (1) switch (_context2.n) {
            case 0:
              _context2.n = 1;
              return _this3.$refs.Favicon.validate(e);
            case 1:
              _yield$_this3$$refs$F = _context2.v;
              valid = _yield$_this3$$refs$F.valid;
              if (valid) {
                _this3.setting.favicon = e.target.files[0];
              } else {
                _this3.setting.favicon = "";
              }
            case 2:
              return _context2.a(2);
          }
        }, _callee2);
      }))();
    },
    //---------------------------------- Update Settings ----------------\\
    Update_Settings: function Update_Settings() {
      var _this4 = this;
      nprogress__WEBPACK_IMPORTED_MODULE_1___default().start();
      nprogress__WEBPACK_IMPORTED_MODULE_1___default().set(0.1);
      var self = this;
      self.data.append("favicon", self.setting.favicon);
      self.data.append("logo", self.setting.logo);
      self.data.append("app_name", self.setting.app_name);
      self.data.append("page_title_suffix", self.setting.page_title_suffix);
      self.data.append("developed_by", self.setting.developed_by);
      self.data.append("footer", self.setting.footer);
      // Login page appearance
      self.data.append("login_hero_title", self.setting.login_hero_title || "");
      self.data.append("login_hero_subtitle", self.setting.login_hero_subtitle || "");
      self.data.append("login_panel_title", self.setting.login_panel_title || "");
      self.data.append("login_panel_subtitle", self.setting.login_panel_subtitle || "");
      self.data.append("_method", "put");
      axios.post("update_appearance_settings/" + self.setting.id, self.data).then(function (response) {
        Fire.$emit("Event_Setting");
        _this4.makeToast("success", _this4.$t("Successfully_Updated"), _this4.$t("Success"));
        nprogress__WEBPACK_IMPORTED_MODULE_1___default().done();
        // 🔄 Reload the page
        setTimeout(function () {
          window.location.reload();
        }, 500); // optional short delay to show toast
      })["catch"](function (error) {
        _this4.makeToast("danger", _this4.$t("InvalidData"), _this4.$t("Failed"));
        nprogress__WEBPACK_IMPORTED_MODULE_1___default().done();
      });
    },
    //---------------------------------- Get SETTINGS ----------------\\
    Get_Settings: function Get_Settings() {
      var _this5 = this;
      axios.get("get_appearance_settings").then(function (response) {
        _this5.setting = response.data.settings;
        _this5.isLoading = false;
      })["catch"](function (error) {
        setTimeout(function () {
          _this5.isLoading = false;
        }, 500);
      });
    }
  }),
  //end Methods

  //----------------------------- Created function-------------------

  created: function created() {
    var _this6 = this;
    this.Get_Settings();
    Fire.$on("Event_Setting", function () {
      _this6.Get_Settings();
    });
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/settings/appearance_settings.vue?vue&type=template&id=92bde3e2":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/settings/appearance_settings.vue?vue&type=template&id=92bde3e2 ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************/
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
      page: _vm.$t("Appearance_Settings"),
      folder: _vm.$t("Settings")
    }
  }), _vm._v(" "), _vm.isLoading ? _c("div", {
    staticClass: "loading_page spinner spinner-primary mr-3"
  }) : _vm._e(), _vm._v(" "), !_vm.isLoading ? _c("validation-observer", {
    ref: "form_setting"
  }, [_c("b-form", {
    on: {
      submit: function submit($event) {
        $event.preventDefault();
        return _vm.Submit_Setting.apply(null, arguments);
      }
    }
  }, [_c("b-row", [_c("b-col", {
    attrs: {
      lg: "12",
      md: "12",
      sm: "12"
    }
  }, [_c("b-card", {
    attrs: {
      "no-body": "",
      header: _vm.$t("Appearance_Settings")
    }
  }, [_c("b-card-body", [_c("b-row", [_c("b-col", {
    attrs: {
      lg: "4",
      md: "4",
      sm: "12"
    }
  }, [_c("validation-provider", {
    attrs: {
      name: "App Name",
      rules: {
        required: true
      }
    },
    scopedSlots: _vm._u([{
      key: "default",
      fn: function fn(validationContext) {
        return [_c("b-form-group", {
          attrs: {
            label: _vm.$t("app_name") + " *"
          }
        }, [_c("b-form-input", {
          staticClass: "form-control",
          attrs: {
            state: _vm.getValidationState(validationContext),
            "aria-describedby": "app-name-feedback"
          },
          model: {
            value: _vm.setting.app_name,
            callback: function callback($$v) {
              _vm.$set(_vm.setting, "app_name", $$v);
            },
            expression: "setting.app_name"
          }
        }), _vm._v(" "), _c("b-form-invalid-feedback", {
          attrs: {
            id: "app-name-feedback"
          }
        }, [_vm._v("\n                      " + _vm._s(validationContext.errors[0]) + "\n                    ")])], 1)];
      }
    }], null, false, 2230904661)
  })], 1), _vm._v(" "), _c("b-col", {
    attrs: {
      lg: "4",
      md: "4",
      sm: "12"
    }
  }, [_c("validation-provider", {
    attrs: {
      name: "Page Title Suffix",
      rules: {
        required: true
      }
    },
    scopedSlots: _vm._u([{
      key: "default",
      fn: function fn(validationContext) {
        return [_c("b-form-group", {
          attrs: {
            label: _vm.$t("page_title_suffix") + " *"
          }
        }, [_c("b-form-input", {
          staticClass: "form-control",
          attrs: {
            state: _vm.getValidationState(validationContext),
            "aria-describedby": "page-title-feedback"
          },
          model: {
            value: _vm.setting.page_title_suffix,
            callback: function callback($$v) {
              _vm.$set(_vm.setting, "page_title_suffix", $$v);
            },
            expression: "setting.page_title_suffix"
          }
        }), _vm._v(" "), _c("b-form-invalid-feedback", {
          attrs: {
            id: "page-title-feedback"
          }
        }, [_vm._v("\n                    " + _vm._s(validationContext.errors[0]) + "\n                  ")])], 1)];
      }
    }], null, false, 403069973)
  })], 1), _vm._v(" "), _c("b-col", {
    attrs: {
      lg: "4",
      md: "4",
      sm: "12"
    }
  }, [_c("validation-provider", {
    ref: "Logo",
    attrs: {
      name: "Logo",
      rules: "mimes:image/*|size:200"
    },
    scopedSlots: _vm._u([{
      key: "default",
      fn: function fn(_ref) {
        var validate = _ref.validate,
          valid = _ref.valid,
          errors = _ref.errors;
        return _c("b-form-group", {
          attrs: {
            label: _vm.$t("ChangeLogo")
          }
        }, [_c("input", {
          "class": {
            "is-invalid": !!errors.length
          },
          attrs: {
            state: errors[0] ? false : valid ? true : null,
            label: "Choose Logo",
            type: "file"
          },
          on: {
            change: _vm.onFileSelected
          }
        }), _vm._v(" "), _c("b-form-invalid-feedback", {
          attrs: {
            id: "Logo-feedback"
          }
        }, [_vm._v(_vm._s(errors[0]))])], 1);
      }
    }], null, false, 3189141354)
  })], 1), _vm._v(" "), _c("b-col", {
    attrs: {
      lg: "4",
      md: "4",
      sm: "12"
    }
  }, [_c("validation-provider", {
    ref: "Favicon",
    attrs: {
      name: "Favicon",
      rules: "mimes:image/*|size:100"
    },
    scopedSlots: _vm._u([{
      key: "default",
      fn: function fn(_ref2) {
        var validate = _ref2.validate,
          valid = _ref2.valid,
          errors = _ref2.errors;
        return _c("b-form-group", {
          attrs: {
            label: _vm.$t("ChangeFavicon")
          }
        }, [_c("input", {
          "class": {
            "is-invalid": !!errors.length
          },
          attrs: {
            state: errors[0] ? false : valid ? true : null,
            type: "file"
          },
          on: {
            change: _vm.onFaviconSelected
          }
        }), _vm._v(" "), _c("b-form-invalid-feedback", {
          attrs: {
            id: "favicon-feedback"
          }
        }, [_vm._v(_vm._s(errors[0]))])], 1);
      }
    }], null, false, 2008003600)
  })], 1), _vm._v(" "), _c("b-col", {
    attrs: {
      lg: "4",
      md: "4",
      sm: "12"
    }
  }, [_c("validation-provider", {
    attrs: {
      name: "developed by",
      rules: {
        required: true
      }
    },
    scopedSlots: _vm._u([{
      key: "default",
      fn: function fn(validationContext) {
        return [_c("b-form-group", {
          attrs: {
            label: _vm.$t("developed_by") + " " + "*"
          }
        }, [_c("b-form-input", {
          staticClass: "form-control",
          attrs: {
            state: _vm.getValidationState(validationContext),
            "aria-describedby": "developed_by-feedback"
          },
          model: {
            value: _vm.setting.developed_by,
            callback: function callback($$v) {
              _vm.$set(_vm.setting, "developed_by", $$v);
            },
            expression: "setting.developed_by"
          }
        }), _vm._v(" "), _c("b-form-invalid-feedback", {
          attrs: {
            id: "developed_by-feedback"
          }
        }, [_vm._v(_vm._s(validationContext.errors[0]))])], 1)];
      }
    }], null, false, 4204870398)
  })], 1), _vm._v(" "), _c("b-col", {
    attrs: {
      lg: "4",
      md: "4",
      sm: "12"
    }
  }, [_c("validation-provider", {
    attrs: {
      name: "footer",
      rules: {
        required: true
      }
    },
    scopedSlots: _vm._u([{
      key: "default",
      fn: function fn(validationContext) {
        return [_c("b-form-group", {
          attrs: {
            label: _vm.$t("footer") + " " + "*"
          }
        }, [_c("b-form-input", {
          staticClass: "form-control",
          attrs: {
            state: _vm.getValidationState(validationContext),
            "aria-describedby": "footer-feedback"
          },
          model: {
            value: _vm.setting.footer,
            callback: function callback($$v) {
              _vm.$set(_vm.setting, "footer", $$v);
            },
            expression: "setting.footer"
          }
        }), _vm._v(" "), _c("b-form-invalid-feedback", {
          attrs: {
            id: "footer-feedback"
          }
        }, [_vm._v(_vm._s(validationContext.errors[0]))])], 1)];
      }
    }], null, false, 3264557662)
  })], 1), _vm._v(" "), _c("b-col", {
    attrs: {
      md: "12"
    }
  }, [_c("b-form-group", [_c("b-button", {
    attrs: {
      variant: "primary",
      type: "submit"
    }
  }, [_c("i", {
    staticClass: "i-Yes me-2 font-weight-bold"
  }), _vm._v(" " + _vm._s(_vm.$t("submit")))])], 1)], 1)], 1)], 1)], 1)], 1), _vm._v(" "), _c("b-col", {
    staticClass: "mt-3",
    attrs: {
      lg: "12",
      md: "12",
      sm: "12"
    }
  }, [_c("b-card", {
    attrs: {
      "no-body": ""
    }
  }, [_c("b-card-header", {
    staticClass: "d-flex justify-content-between align-items-center"
  }, [_c("h6", {
    staticClass: "mb-0"
  }, [_vm._v(_vm._s(_vm.$t("Appearance_Settings")) + " - Login Page")])]), _vm._v(" "), _c("b-card-body", [_c("b-row", [_c("b-col", {
    attrs: {
      lg: "6",
      md: "6",
      sm: "12"
    }
  }, [_c("b-form-group", {
    attrs: {
      label: "Login hero title"
    }
  }, [_c("b-form-input", {
    staticClass: "form-control",
    model: {
      value: _vm.setting.login_hero_title,
      callback: function callback($$v) {
        _vm.$set(_vm.setting, "login_hero_title", $$v);
      },
      expression: "setting.login_hero_title"
    }
  })], 1)], 1), _vm._v(" "), _c("b-col", {
    attrs: {
      lg: "6",
      md: "6",
      sm: "12"
    }
  }, [_c("b-form-group", {
    attrs: {
      label: "Login hero subtitle"
    }
  }, [_c("b-form-input", {
    staticClass: "form-control",
    model: {
      value: _vm.setting.login_hero_subtitle,
      callback: function callback($$v) {
        _vm.$set(_vm.setting, "login_hero_subtitle", $$v);
      },
      expression: "setting.login_hero_subtitle"
    }
  })], 1)], 1), _vm._v(" "), _c("b-col", {
    attrs: {
      lg: "6",
      md: "6",
      sm: "12"
    }
  }, [_c("b-form-group", {
    attrs: {
      label: "Login panel title"
    }
  }, [_c("b-form-input", {
    staticClass: "form-control",
    model: {
      value: _vm.setting.login_panel_title,
      callback: function callback($$v) {
        _vm.$set(_vm.setting, "login_panel_title", $$v);
      },
      expression: "setting.login_panel_title"
    }
  })], 1)], 1), _vm._v(" "), _c("b-col", {
    attrs: {
      lg: "6",
      md: "6",
      sm: "12"
    }
  }, [_c("b-form-group", {
    attrs: {
      label: "Login panel subtitle"
    }
  }, [_c("b-form-input", {
    staticClass: "form-control",
    model: {
      value: _vm.setting.login_panel_subtitle,
      callback: function callback($$v) {
        _vm.$set(_vm.setting, "login_panel_subtitle", $$v);
      },
      expression: "setting.login_panel_subtitle"
    }
  })], 1)], 1), _vm._v(" "), _c("b-col", {
    attrs: {
      md: "12"
    }
  }, [_c("b-form-group", [_c("b-button", {
    attrs: {
      variant: "primary",
      type: "submit"
    }
  }, [_c("i", {
    staticClass: "i-Yes me-2 font-weight-bold"
  }), _vm._v(" " + _vm._s(_vm.$t("submit")) + "\n                    ")])], 1)], 1)], 1)], 1)], 1)], 1)], 1)], 1)], 1) : _vm._e()], 1);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./resources/src/views/app/pages/settings/appearance_settings.vue":
/*!************************************************************************!*\
  !*** ./resources/src/views/app/pages/settings/appearance_settings.vue ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _appearance_settings_vue_vue_type_template_id_92bde3e2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./appearance_settings.vue?vue&type=template&id=92bde3e2 */ "./resources/src/views/app/pages/settings/appearance_settings.vue?vue&type=template&id=92bde3e2");
/* harmony import */ var _appearance_settings_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./appearance_settings.vue?vue&type=script&lang=js */ "./resources/src/views/app/pages/settings/appearance_settings.vue?vue&type=script&lang=js");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _appearance_settings_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _appearance_settings_vue_vue_type_template_id_92bde3e2__WEBPACK_IMPORTED_MODULE_0__.render,
  _appearance_settings_vue_vue_type_template_id_92bde3e2__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) // removed by dead control flow
{ var api; }
component.options.__file = "resources/src/views/app/pages/settings/appearance_settings.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/src/views/app/pages/settings/appearance_settings.vue?vue&type=script&lang=js":
/*!************************************************************************************************!*\
  !*** ./resources/src/views/app/pages/settings/appearance_settings.vue?vue&type=script&lang=js ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_appearance_settings_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./appearance_settings.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/settings/appearance_settings.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_appearance_settings_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/src/views/app/pages/settings/appearance_settings.vue?vue&type=template&id=92bde3e2":
/*!******************************************************************************************************!*\
  !*** ./resources/src/views/app/pages/settings/appearance_settings.vue?vue&type=template&id=92bde3e2 ***!
  \******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_appearance_settings_vue_vue_type_template_id_92bde3e2__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_appearance_settings_vue_vue_type_template_id_92bde3e2__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_appearance_settings_vue_vue_type_template_id_92bde3e2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./appearance_settings.vue?vue&type=template&id=92bde3e2 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/settings/appearance_settings.vue?vue&type=template&id=92bde3e2");


/***/ })

}]);