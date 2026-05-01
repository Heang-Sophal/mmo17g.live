"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["Edit_User"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/people/EditUser.vue?vue&type=script&lang=js":
/*!***************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/people/EditUser.vue?vue&type=script&lang=js ***!
  \***************************************************************************************************************************************************************************************************************/
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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  metaInfo: {
    title: "Edit User"
  },
  data: function data() {
    return {
      isLoading: true,
      SubmitProcessing: false,
      email_exist: "",
      roles: [],
      warehouses: [],
      data: new FormData(),
      user: {
        id: "",
        firstname: "",
        lastname: "",
        username: "",
        NewPassword: null,
        email: "",
        phone: "",
        statut: "",
        role_id: "",
        avatar: "",
        is_all_warehouses: 1,
        record_view: false
      },
      assigned_warehouses: []
    };
  },
  computed: {
    selectedRole: function selectedRole() {
      var _this = this;
      return this.roles.find(function (role) {
        return Number(role.id) === Number(_this.user.role_id);
      }) || null;
    },
    isDeliveryRole: function isDeliveryRole() {
      return this.isDeliveryRoleName(this.selectedRole);
    },
    deliveryWarehouseId: {
      get: function get() {
        return this.assigned_warehouses.length ? this.assigned_warehouses[0] : null;
      },
      set: function set(value) {
        this.assigned_warehouses = value ? [value] : [];
      }
    }
  },
  watch: {
    selectedRole: {
      immediate: true,
      handler: function handler() {
        if (this.isDeliveryRole) {
          this.user.is_all_warehouses = 0;
          if (this.assigned_warehouses.length > 1) {
            this.assigned_warehouses = [this.assigned_warehouses[0]];
          }
        }
      }
    },
    "user.role_id": function userRole_id() {
      if (this.isDeliveryRole) {
        this.user.is_all_warehouses = 0;
        if (this.assigned_warehouses.length > 1) {
          this.assigned_warehouses = [this.assigned_warehouses[0]];
        }
      }
    },
    "user.is_all_warehouses": function userIs_all_warehouses(value) {
      if (this.isDeliveryRole && value) {
        this.user.is_all_warehouses = 0;
      }
    }
  },
  methods: {
    isDeliveryRoleName: function isDeliveryRoleName(role) {
      var roleName = String(role && (role.name || role.label) ? role.name || role.label : "").trim().toLowerCase();
      return ["delivery", "laivrison", "recorder"].includes(roleName);
    },
    getFirstErrorMessage: function getFirstErrorMessage(error) {
      if (error && error.response && error.response.data) {
        var data = error.response.data;
        if (data.errors) {
          var firstField = Object.keys(data.errors)[0];
          if (firstField && data.errors[firstField] && data.errors[firstField][0]) {
            return data.errors[firstField][0];
          }
        }
        if (data.message) {
          return data.message;
        }
      }
      return this.$t("InvalidData");
    },
    //------------- Submit Validation Edit User
    Submit_User: function Submit_User() {
      var _this2 = this;
      this.$refs.Create_User.validate().then(function (success) {
        if (!success) {
          _this2.makeToast("danger", _this2.$t("Please_fill_the_form_correctly"), _this2.$t("Failed"));
        } else {
          if (_this2.isDeliveryRole && !_this2.assigned_warehouses.length) {
            _this2.makeToast("danger", "Delivery user must be assigned to one warehouse.", _this2.$t("Failed"));
            return;
          }
          _this2.Update_User();
        }
      });
    },
    //----------------------- Update User ---------------------------\\
    Update_User: function Update_User() {
      var _this3 = this;
      var self = this;
      self.SubmitProcessing = true;
      self.data = new FormData();
      self.data.append("firstname", self.user.firstname);
      self.data.append("lastname", self.user.lastname);
      self.data.append("username", self.user.username);
      self.data.append("email", self.user.email);
      self.data.append("NewPassword", self.user.NewPassword);
      self.data.append("phone", self.user.phone);
      self.data.append("role", self.user.role_id);
      self.data.append("statut", self.user.statut);
      self.data.append("is_all_warehouses", self.user.is_all_warehouses);
      self.data.append("record_view", self.user.record_view ? 1 : 0);
      self.data.append("avatar", self.user.avatar);

      // append array assigned_warehouses
      if (self.assigned_warehouses.length) {
        for (var i = 0; i < self.assigned_warehouses.length; i++) {
          self.data.append("assigned_to[" + i + "]", self.assigned_warehouses[i]);
        }
      } else {
        self.data.append("assigned_to", []);
      }
      self.data.append("_method", "put");
      axios.post("users/" + this.user.id, self.data).then(function (response) {
        _this3.makeToast("success", _this3.$t("Successfully_Updated"), _this3.$t("Success"));
        self.SubmitProcessing = false;
        // Redirect to users list after successful update
        _this3.$router.push({
          name: 'Users'
        });
      })["catch"](function (error) {
        if (error.response && error.response.data && error.response.data.errors && error.response.data.errors.email) {
          self.email_exist = error.response.data.errors.email[0];
        }
        _this3.makeToast("danger", _this3.getFirstErrorMessage(error), _this3.$t("Failed"));
        self.SubmitProcessing = false;
      });
    },
    //----------------------------------- Get User Data ---------------------------\\
    Get_User: function Get_User() {
      var _this4 = this;
      nprogress__WEBPACK_IMPORTED_MODULE_0___default().start();
      nprogress__WEBPACK_IMPORTED_MODULE_0___default().set(0.1);
      var id = this.$route.params.id;
      axios.get("users/" + id + "/edit").then(function (response) {
        _this4.user = response.data.user;
        _this4.roles = response.data.roles;
        _this4.warehouses = response.data.warehouses;
        _this4.assigned_warehouses = response.data.assigned_warehouses || [];
        if (_this4.isDeliveryRole && _this4.assigned_warehouses.length > 1) {
          _this4.assigned_warehouses = [_this4.assigned_warehouses[0]];
          _this4.user.is_all_warehouses = 0;
        }
        _this4.user.NewPassword = null;
        nprogress__WEBPACK_IMPORTED_MODULE_0___default().done();
        _this4.isLoading = false;
      })["catch"](function (error) {
        nprogress__WEBPACK_IMPORTED_MODULE_0___default().done();
        _this4.makeToast("danger", _this4.$t("Failed_to_load_user"), _this4.$t("Failed"));
        setTimeout(function () {
          _this4.isLoading = false;
          _this4.$router.push({
            name: 'Users'
          });
        }, 500);
      });
    },
    Selected_Warehouse: function Selected_Warehouse(value) {
      if (this.isDeliveryRole) {
        if (Array.isArray(value)) {
          this.assigned_warehouses = value.length ? [value[value.length - 1]] : [];
        } else {
          this.assigned_warehouses = value ? [value] : [];
        }
        return;
      }
      if (!value || !value.length) {
        this.assigned_warehouses = [];
      }
    },
    //------------------------------ Event Upload Avatar -------------------------------\\
    onFileSelected: function onFileSelected(e) {
      var _this5 = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee() {
        var _yield$_this5$$refs$A, valid;
        return _regenerator().w(function (_context) {
          while (1) switch (_context.n) {
            case 0:
              _context.n = 1;
              return _this5.$refs.Avatar.validate(e);
            case 1:
              _yield$_this5$$refs$A = _context.v;
              valid = _yield$_this5$$refs$A.valid;
              if (valid) {
                _this5.user.avatar = e.target.files[0];
              } else {
                _this5.user.avatar = "";
              }
            case 2:
              return _context.a(2);
          }
        }, _callee);
      }))();
    },
    //------ Event Validation State
    getValidationState: function getValidationState(_ref) {
      var dirty = _ref.dirty,
        validated = _ref.validated,
        _ref$valid = _ref.valid,
        valid = _ref$valid === void 0 ? null : _ref$valid;
      return dirty || validated ? valid : null;
    },
    //------ Toast
    makeToast: function makeToast(variant, msg, title) {
      this.$root.$bvToast.toast(msg, {
        title: title,
        variant: variant,
        solid: true
      });
    }
  },
  //----------------------------- Created function-------------------
  created: function created() {
    this.Get_User();
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/people/EditUser.vue?vue&type=template&id=b3e3f470":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/people/EditUser.vue?vue&type=template&id=b3e3f470 ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************/
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
      page: _vm.$t("Edit"),
      folder: _vm.$t("Users")
    }
  }), _vm._v(" "), _vm.isLoading ? _c("div", {
    staticClass: "loading_page spinner spinner-primary mr-3"
  }) : _vm._e(), _vm._v(" "), !_vm.isLoading ? _c("validation-observer", {
    ref: "Create_User"
  }, [_c("b-card", [_c("b-form", {
    attrs: {
      enctype: "multipart/form-data"
    },
    on: {
      submit: function submit($event) {
        $event.preventDefault();
        return _vm.Submit_User.apply(null, arguments);
      }
    }
  }, [_c("b-row", [_c("b-col", {
    attrs: {
      md: "6",
      sm: "12"
    }
  }, [_c("validation-provider", {
    attrs: {
      name: "Firstname",
      rules: {
        required: true,
        min: 3,
        max: 30
      }
    },
    scopedSlots: _vm._u([{
      key: "default",
      fn: function fn(validationContext) {
        return [_c("b-form-group", {
          attrs: {
            label: _vm.$t("Firstname") + " " + "*"
          }
        }, [_c("b-form-input", {
          attrs: {
            state: _vm.getValidationState(validationContext),
            "aria-describedby": "Firstname-feedback",
            label: "Firstname",
            placeholder: _vm.$t("Firstname")
          },
          model: {
            value: _vm.user.firstname,
            callback: function callback($$v) {
              _vm.$set(_vm.user, "firstname", $$v);
            },
            expression: "user.firstname"
          }
        }), _vm._v(" "), _c("b-form-invalid-feedback", {
          attrs: {
            id: "Firstname-feedback"
          }
        }, [_vm._v(_vm._s(validationContext.errors[0]))])], 1)];
      }
    }], null, false, 2502027793)
  })], 1), _vm._v(" "), _c("b-col", {
    attrs: {
      md: "6",
      sm: "12"
    }
  }, [_c("validation-provider", {
    attrs: {
      name: "lastname",
      rules: {
        required: true,
        min: 3,
        max: 30
      }
    },
    scopedSlots: _vm._u([{
      key: "default",
      fn: function fn(validationContext) {
        return [_c("b-form-group", {
          attrs: {
            label: _vm.$t("lastname") + " " + "*"
          }
        }, [_c("b-form-input", {
          attrs: {
            state: _vm.getValidationState(validationContext),
            "aria-describedby": "lastname-feedback",
            label: "lastname",
            placeholder: _vm.$t("lastname")
          },
          model: {
            value: _vm.user.lastname,
            callback: function callback($$v) {
              _vm.$set(_vm.user, "lastname", $$v);
            },
            expression: "user.lastname"
          }
        }), _vm._v(" "), _c("b-form-invalid-feedback", {
          attrs: {
            id: "lastname-feedback"
          }
        }, [_vm._v(_vm._s(validationContext.errors[0]))])], 1)];
      }
    }], null, false, 2753886097)
  })], 1), _vm._v(" "), _c("b-col", {
    attrs: {
      md: "6",
      sm: "12"
    }
  }, [_c("validation-provider", {
    attrs: {
      name: "username",
      rules: {
        required: true,
        min: 3,
        max: 30
      }
    },
    scopedSlots: _vm._u([{
      key: "default",
      fn: function fn(validationContext) {
        return [_c("b-form-group", {
          attrs: {
            label: _vm.$t("username") + " " + "*"
          }
        }, [_c("b-form-input", {
          attrs: {
            state: _vm.getValidationState(validationContext),
            "aria-describedby": "username-feedback",
            label: "username",
            placeholder: _vm.$t("username")
          },
          model: {
            value: _vm.user.username,
            callback: function callback($$v) {
              _vm.$set(_vm.user, "username", $$v);
            },
            expression: "user.username"
          }
        }), _vm._v(" "), _c("b-form-invalid-feedback", {
          attrs: {
            id: "username-feedback"
          }
        }, [_vm._v(_vm._s(validationContext.errors[0]))])], 1)];
      }
    }], null, false, 1395837873)
  })], 1), _vm._v(" "), _c("b-col", {
    attrs: {
      md: "6",
      sm: "12"
    }
  }, [_c("validation-provider", {
    attrs: {
      name: "Phone",
      rules: {
        required: true
      }
    },
    scopedSlots: _vm._u([{
      key: "default",
      fn: function fn(validationContext) {
        return [_c("b-form-group", {
          attrs: {
            label: _vm.$t("Phone") + " " + "*"
          }
        }, [_c("b-form-input", {
          attrs: {
            state: _vm.getValidationState(validationContext),
            "aria-describedby": "Phone-feedback",
            label: "Phone",
            placeholder: _vm.$t("Phone")
          },
          model: {
            value: _vm.user.phone,
            callback: function callback($$v) {
              _vm.$set(_vm.user, "phone", $$v);
            },
            expression: "user.phone"
          }
        }), _vm._v(" "), _c("b-form-invalid-feedback", {
          attrs: {
            id: "Phone-feedback"
          }
        }, [_vm._v(_vm._s(validationContext.errors[0]))])], 1)];
      }
    }], null, false, 110264049)
  })], 1), _vm._v(" "), _c("b-col", {
    attrs: {
      md: "6",
      sm: "12"
    }
  }, [_c("validation-provider", {
    attrs: {
      name: "Email",
      rules: {
        required: true
      }
    },
    scopedSlots: _vm._u([{
      key: "default",
      fn: function fn(validationContext) {
        return [_c("b-form-group", {
          attrs: {
            label: _vm.$t("Email") + " " + "*"
          }
        }, [_c("b-form-input", {
          attrs: {
            state: _vm.getValidationState(validationContext),
            "aria-describedby": "Email-feedback",
            label: "Email",
            placeholder: _vm.$t("Email")
          },
          model: {
            value: _vm.user.email,
            callback: function callback($$v) {
              _vm.$set(_vm.user, "email", $$v);
            },
            expression: "user.email"
          }
        }), _vm._v(" "), _c("b-form-invalid-feedback", {
          attrs: {
            id: "Email-feedback"
          }
        }, [_vm._v(_vm._s(validationContext.errors[0]))]), _vm._v(" "), _vm.email_exist != "" ? _c("b-alert", {
          staticClass: "error mt-1",
          attrs: {
            show: "",
            variant: "danger"
          }
        }, [_vm._v(_vm._s(_vm.email_exist))]) : _vm._e()], 1)];
      }
    }], null, false, 921727233)
  })], 1), _vm._v(" "), _c("b-col", {
    staticClass: "mb-3",
    attrs: {
      md: "6",
      sm: "12"
    }
  }, [_c("validation-provider", {
    attrs: {
      name: "role",
      rules: {
        required: true
      }
    },
    scopedSlots: _vm._u([{
      key: "default",
      fn: function fn(_ref) {
        var valid = _ref.valid,
          errors = _ref.errors;
        return _c("b-form-group", {
          attrs: {
            label: _vm.$t("RoleName") + " " + "*"
          }
        }, [_c("v-select", {
          "class": {
            "is-invalid": !!errors.length
          },
          attrs: {
            state: errors[0] ? false : valid ? true : null,
            reduce: function reduce(label) {
              return label.value;
            },
            placeholder: _vm.$t("PleaseSelect"),
            options: _vm.roles.map(function (roles) {
              return {
                label: roles.name,
                value: roles.id
              };
            })
          },
          model: {
            value: _vm.user.role_id,
            callback: function callback($$v) {
              _vm.$set(_vm.user, "role_id", $$v);
            },
            expression: "user.role_id"
          }
        }), _vm._v(" "), _c("b-form-invalid-feedback", [_vm._v(_vm._s(errors[0]))])], 1);
      }
    }], null, false, 3236387259)
  })], 1), _vm._v(" "), _c("b-col", {
    staticClass: "mb-3",
    attrs: {
      md: "6",
      sm: "12"
    }
  }, [_c("validation-provider", {
    ref: "Avatar",
    attrs: {
      name: "Avatar",
      rules: "mimes:image/*|size:200"
    },
    scopedSlots: _vm._u([{
      key: "default",
      fn: function fn(_ref2) {
        var validate = _ref2.validate,
          valid = _ref2.valid,
          errors = _ref2.errors;
        return _c("b-form-group", {
          attrs: {
            label: _vm.$t("UserImage")
          }
        }, [_c("input", {
          "class": {
            "is-invalid": !!errors.length
          },
          attrs: {
            state: errors[0] ? false : valid ? true : null,
            label: "Choose Avatar",
            type: "file"
          },
          on: {
            change: _vm.onFileSelected
          }
        }), _vm._v(" "), _c("b-form-invalid-feedback", {
          attrs: {
            id: "Avatar-feedback"
          }
        }, [_vm._v(_vm._s(errors[0]))])], 1);
      }
    }], null, false, 2117094513)
  })], 1), _vm._v(" "), _c("b-col", {
    staticClass: "mb-3",
    attrs: {
      md: "6"
    }
  }, [_c("validation-provider", {
    attrs: {
      name: "New password",
      rules: {
        min: 6
      }
    },
    scopedSlots: _vm._u([{
      key: "default",
      fn: function fn(validationContext) {
        return [_c("b-form-group", {
          attrs: {
            label: _vm.$t("Newpassword")
          }
        }, [_c("b-form-input", {
          attrs: {
            state: _vm.getValidationState(validationContext),
            "aria-describedby": "Nawpassword-feedback",
            placeholder: _vm.$t("LeaveBlank"),
            label: "New password",
            type: "password"
          },
          model: {
            value: _vm.user.NewPassword,
            callback: function callback($$v) {
              _vm.$set(_vm.user, "NewPassword", $$v);
            },
            expression: "user.NewPassword"
          }
        }), _vm._v(" "), _c("b-form-invalid-feedback", {
          attrs: {
            id: "Nawpassword-feedback"
          }
        }, [_vm._v(_vm._s(validationContext.errors[0]))])], 1)];
      }
    }], null, false, 762998968)
  })], 1), _vm._v(" "), _c("b-col", {
    staticClass: "mb-3",
    attrs: {
      md: "6",
      sm: "12"
    }
  }, [_c("b-card", {
    staticClass: "h-100"
  }, [_c("b-card-header", {
    staticClass: "pb-2"
  }, [_c("h6", {
    staticClass: "mb-0"
  }, [_vm._v(_vm._s(_vm.$t("ShowAll")))])]), _vm._v(" "), _c("b-card-body", {
    staticClass: "pt-3"
  }, [_c("div", {
    staticClass: "psx-form-check"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.user.record_view,
      expression: "user.record_view"
    }],
    staticClass: "psx-checkbox psx-form-check-input",
    attrs: {
      type: "checkbox",
      id: "record_view"
    },
    domProps: {
      checked: Array.isArray(_vm.user.record_view) ? _vm._i(_vm.user.record_view, null) > -1 : _vm.user.record_view
    },
    on: {
      change: function change($event) {
        var $$a = _vm.user.record_view,
          $$el = $event.target,
          $$c = $$el.checked ? true : false;
        if (Array.isArray($$a)) {
          var $$v = null,
            $$i = _vm._i($$a, $$v);
          if ($$el.checked) {
            $$i < 0 && _vm.$set(_vm.user, "record_view", $$a.concat([$$v]));
          } else {
            $$i > -1 && _vm.$set(_vm.user, "record_view", $$a.slice(0, $$i).concat($$a.slice($$i + 1)));
          }
        } else {
          _vm.$set(_vm.user, "record_view", $$c);
        }
      }
    }
  }), _vm._v(" "), _c("label", {
    staticClass: "psx-form-check-label",
    attrs: {
      "for": "record_view"
    }
  }, [_c("span", {
    staticClass: "font-weight-normal"
  }, [_vm._v(_vm._s(_vm.$t("ShowAll")) + " "), _c("i", {
    directives: [{
      name: "b-tooltip",
      rawName: "v-b-tooltip.hover.bottom",
      modifiers: {
        hover: true,
        bottom: true
      }
    }],
    staticClass: "text-info font-weight-bold i-Speach-BubbleAsking",
    attrs: {
      title: "Allow user to view all records, not just their own"
    }
  })])])]), _vm._v(" "), _c("small", {
    staticClass: "text-muted d-block mt-2"
  }, [_vm._v("Allow user to view all records, not just their own")])])], 1)], 1), _vm._v(" "), _c("b-col", {
    staticClass: "mb-3",
    attrs: {
      md: "6",
      sm: "12"
    }
  }, [_c("b-card", {
    staticClass: "h-100"
  }, [_c("b-card-header", {
    staticClass: "pb-2"
  }, [_c("h6", {
    staticClass: "mb-0"
  }, [_vm._v(_vm._s(_vm.$t("Assigned_warehouses")))])]), _vm._v(" "), _c("b-card-body", {
    staticClass: "pt-3"
  }, [!_vm.isDeliveryRole ? _c("div", {
    staticClass: "psx-form-check mb-3"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.user.is_all_warehouses,
      expression: "user.is_all_warehouses"
    }],
    staticClass: "psx-checkbox psx-form-check-input",
    attrs: {
      type: "checkbox",
      id: "is_all_warehouses"
    },
    domProps: {
      checked: Array.isArray(_vm.user.is_all_warehouses) ? _vm._i(_vm.user.is_all_warehouses, null) > -1 : _vm.user.is_all_warehouses
    },
    on: {
      change: function change($event) {
        var $$a = _vm.user.is_all_warehouses,
          $$el = $event.target,
          $$c = $$el.checked ? true : false;
        if (Array.isArray($$a)) {
          var $$v = null,
            $$i = _vm._i($$a, $$v);
          if ($$el.checked) {
            $$i < 0 && _vm.$set(_vm.user, "is_all_warehouses", $$a.concat([$$v]));
          } else {
            $$i > -1 && _vm.$set(_vm.user, "is_all_warehouses", $$a.slice(0, $$i).concat($$a.slice($$i + 1)));
          }
        } else {
          _vm.$set(_vm.user, "is_all_warehouses", $$c);
        }
      }
    }
  }), _vm._v(" "), _c("label", {
    staticClass: "psx-form-check-label",
    attrs: {
      "for": "is_all_warehouses"
    }
  }, [_c("span", {
    staticClass: "font-weight-normal"
  }, [_vm._v(_vm._s(_vm.$t("All_Warehouses")) + " "), _c("i", {
    directives: [{
      name: "b-tooltip",
      rawName: "v-b-tooltip.hover.bottom",
      modifiers: {
        hover: true,
        bottom: true
      }
    }],
    staticClass: "text-info font-weight-bold i-Speach-BubbleAsking",
    attrs: {
      title: "If 'All Warehouses' Selected , User Can access all data for the selected Warehouses"
    }
  })])])]) : _vm._e(), _vm._v(" "), _vm.isDeliveryRole || !_vm.user.is_all_warehouses ? _c("b-form-group", {
    staticClass: "mb-0",
    attrs: {
      label: _vm.isDeliveryRole ? "Assigned warehouse *" : _vm.$t("Some_warehouses")
    }
  }, [_vm.isDeliveryRole ? _c("v-select", {
    attrs: {
      reduce: function reduce(label) {
        return label.value;
      },
      placeholder: _vm.$t("PleaseSelect"),
      options: _vm.warehouses.map(function (warehouses) {
        return {
          label: warehouses.name,
          value: warehouses.id
        };
      })
    },
    on: {
      input: _vm.Selected_Warehouse
    },
    model: {
      value: _vm.deliveryWarehouseId,
      callback: function callback($$v) {
        _vm.deliveryWarehouseId = $$v;
      },
      expression: "deliveryWarehouseId"
    }
  }) : _c("v-select", {
    attrs: {
      multiple: "",
      reduce: function reduce(label) {
        return label.value;
      },
      placeholder: _vm.$t("PleaseSelect"),
      options: _vm.warehouses.map(function (warehouses) {
        return {
          label: warehouses.name,
          value: warehouses.id
        };
      })
    },
    on: {
      input: _vm.Selected_Warehouse
    },
    model: {
      value: _vm.assigned_warehouses,
      callback: function callback($$v) {
        _vm.assigned_warehouses = $$v;
      },
      expression: "assigned_warehouses"
    }
  }), _vm._v(" "), _vm.isDeliveryRole ? _c("small", {
    staticClass: "text-muted d-block mt-2"
  }, [_vm._v("Delivery users receive alerts from one assigned warehouse only.")]) : _vm._e()], 1) : _vm._e()], 1)], 1)], 1), _vm._v(" "), _c("b-col", {
    staticClass: "mt-3",
    attrs: {
      md: "12"
    }
  }, [_c("b-button", {
    attrs: {
      variant: "primary",
      type: "submit",
      disabled: _vm.SubmitProcessing
    }
  }, [_c("i", {
    staticClass: "i-Yes me-2 font-weight-bold"
  }), _vm._v(" " + _vm._s(_vm.$t("submit")))]), _vm._v(" "), _c("b-button", {
    staticClass: "ml-2",
    attrs: {
      variant: "secondary"
    },
    on: {
      click: function click($event) {
        return _vm.$router.push({
          name: "Users"
        });
      }
    }
  }, [_vm._v(_vm._s(_vm.$t("Cancel")))]), _vm._v(" "), _vm.SubmitProcessing ? _vm._m(0) : _vm._e()], 1)], 1)], 1)], 1)], 1) : _vm._e()], 1);
};
var staticRenderFns = [function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "typo__p"
  }, [_c("div", {
    staticClass: "spinner sm spinner-primary mt-3"
  })]);
}];
render._withStripped = true;


/***/ }),

/***/ "./resources/src/views/app/pages/people/EditUser.vue":
/*!***********************************************************!*\
  !*** ./resources/src/views/app/pages/people/EditUser.vue ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _EditUser_vue_vue_type_template_id_b3e3f470__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./EditUser.vue?vue&type=template&id=b3e3f470 */ "./resources/src/views/app/pages/people/EditUser.vue?vue&type=template&id=b3e3f470");
/* harmony import */ var _EditUser_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./EditUser.vue?vue&type=script&lang=js */ "./resources/src/views/app/pages/people/EditUser.vue?vue&type=script&lang=js");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _EditUser_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _EditUser_vue_vue_type_template_id_b3e3f470__WEBPACK_IMPORTED_MODULE_0__.render,
  _EditUser_vue_vue_type_template_id_b3e3f470__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) // removed by dead control flow
{ var api; }
component.options.__file = "resources/src/views/app/pages/people/EditUser.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/src/views/app/pages/people/EditUser.vue?vue&type=script&lang=js":
/*!***********************************************************************************!*\
  !*** ./resources/src/views/app/pages/people/EditUser.vue?vue&type=script&lang=js ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_EditUser_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./EditUser.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/people/EditUser.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_EditUser_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/src/views/app/pages/people/EditUser.vue?vue&type=template&id=b3e3f470":
/*!*****************************************************************************************!*\
  !*** ./resources/src/views/app/pages/people/EditUser.vue?vue&type=template&id=b3e3f470 ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_EditUser_vue_vue_type_template_id_b3e3f470__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_EditUser_vue_vue_type_template_id_b3e3f470__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_EditUser_vue_vue_type_template_id_b3e3f470__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./EditUser.vue?vue&type=template&id=b3e3f470 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/people/EditUser.vue?vue&type=template&id=b3e3f470");


/***/ })

}]);