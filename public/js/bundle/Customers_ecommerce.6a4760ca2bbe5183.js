"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["Customers_ecommerce"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/people/Customers_ecommerce.vue?vue&type=script&lang=js":
/*!**************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/people/Customers_ecommerce.vue?vue&type=script&lang=js ***!
  \**************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! nprogress */ "./node_modules/nprogress/nprogress.js");
/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(nprogress__WEBPACK_IMPORTED_MODULE_1__);
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  metaInfo: {
    title: "Online Store Accounts"
  },
  data: function data() {
    return {
      isLoading: true,
      SubmitProcessing: false,
      email_exist: "",
      showPassword: false,
      serverParams: {
        columnFilters: {},
        sort: {
          field: "id",
          type: "desc"
        },
        page: 1,
        perPage: 10
      },
      showDropdown: false,
      totalRows: "",
      search: "",
      limit: "10",
      accounts: [],
      form: {
        id: "",
        client_id: "",
        client_name: "",
        email: "",
        password: "",
        status: true
      }
    };
  },
  mounted: function mounted() {
    var _this = this;
    this.$root.$on("bv::dropdown::show", function () {
      _this.showDropdown = true;
    });
    this.$root.$on("bv::dropdown::hide", function () {
      _this.showDropdown = false;
    });
  },
  computed: _objectSpread(_objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_0__.mapGetters)(["currentUser"])), {}, {
    columns: function columns() {
      var _this2 = this;
      return [{
        label: this.$t("Code"),
        field: "client_code",
        tdClass: "text-left",
        thClass: "text-left"
      }, {
        label: this.$t("Name"),
        field: "client_name",
        tdClass: "text-left",
        thClass: "text-left"
      }, {
        label: this.$t("Phone"),
        field: "phone",
        tdClass: "text-left",
        thClass: "text-left"
      }, {
        label: this.$t("Email"),
        field: "email",
        tdClass: "text-left",
        thClass: "text-left"
      }, {
        label: this.$t("Status"),
        field: "status",
        tdClass: "text-left",
        thClass: "text-left",
        formatFn: function formatFn(val) {
          return val ? _this2.$t("Active") : _this2.$t("Inactive");
        }
      }, {
        label: this.$t("Action"),
        field: "actions",
        tdClass: "text-right",
        thClass: "text-right",
        sortable: false
      }];
    }
  }),
  methods: {
    // Validation state helper
    getValidationState: function getValidationState(_ref) {
      var dirty = _ref.dirty,
        validated = _ref.validated,
        _ref$valid = _ref.valid,
        valid = _ref$valid === void 0 ? null : _ref$valid;
      return dirty || validated ? valid : null;
    },
    makeToast: function makeToast(variant, msg, title) {
      this.$root.$bvToast.toast(msg, {
        title: title,
        variant: variant,
        solid: true
      });
    },
    // Remote table handlers
    updateParams: function updateParams(newProps) {
      this.serverParams = Object.assign({}, this.serverParams, newProps);
    },
    onPageChange: function onPageChange(_ref2) {
      var currentPage = _ref2.currentPage;
      if (this.serverParams.page !== currentPage) {
        this.updateParams({
          page: currentPage
        });
        this.getAccounts(currentPage);
      }
    },
    onPerPageChange: function onPerPageChange(_ref3) {
      var currentPerPage = _ref3.currentPerPage;
      if (this.limit !== currentPerPage) {
        this.limit = currentPerPage;
        this.updateParams({
          page: 1,
          perPage: currentPerPage
        });
        this.getAccounts(1);
      }
    },
    onSortChange: function onSortChange(params) {
      this.updateParams({
        sort: {
          type: params[0].type,
          field: params[0].field
        }
      });
      this.getAccounts(this.serverParams.page);
    },
    onSearch: function onSearch(value) {
      this.search = value.searchTerm;
      this.getAccounts(this.serverParams.page);
    },
    // Fetch accounts from API
    getAccounts: function getAccounts(page) {
      var _this3 = this;
      nprogress__WEBPACK_IMPORTED_MODULE_1___default().start();
      nprogress__WEBPACK_IMPORTED_MODULE_1___default().set(0.1);
      axios.get("ecommerce_clients?page=" + page + "&SortField=" + this.serverParams.sort.field + "&SortType=" + this.serverParams.sort.type + "&search=" + this.search + "&limit=" + this.limit).then(function (response) {
        _this3.accounts = response.data.accounts || [];
        _this3.totalRows = response.data.totalRows || 0;
        _this3.isLoading = false;
        nprogress__WEBPACK_IMPORTED_MODULE_1___default().done();
      })["catch"](function () {
        nprogress__WEBPACK_IMPORTED_MODULE_1___default().done();
        setTimeout(function () {
          _this3.isLoading = false;
        }, 500);
      });
    },
    // Edit account
    editAccount: function editAccount(row) {
      this.resetForm();
      this.form.id = row.id;
      this.form.client_id = row.client_id;
      this.form.client_name = row.client_name;
      this.form.email = row.email;
      this.form.status = !!row.status;
      this.$bvModal.show("Edit_Ecommerce_Account");
    },
    // Confirm delete
    confirmDelete: function confirmDelete(row) {
      var _this4 = this;
      this.$bvModal.msgBoxConfirm(this.$t("AreYouSure"), {
        title: this.$t("Confirm"),
        size: "sm",
        okVariant: "danger",
        okTitle: this.$t("Yes"),
        cancelTitle: this.$t("No"),
        footerClass: "p-2",
        centered: true
      }).then(function (value) {
        if (value) {
          _this4.deleteAccount(row);
        }
      });
    },
    deleteAccount: function deleteAccount(row) {
      var _this5 = this;
      this.SubmitProcessing = true;
      nprogress__WEBPACK_IMPORTED_MODULE_1___default().start();
      nprogress__WEBPACK_IMPORTED_MODULE_1___default().set(0.1);
      axios["delete"]("ecommerce_clients/" + row.id).then(function () {
        _this5.makeToast("success", _this5.$t("Deleted_in_successfully"), _this5.$t("Success"));
        _this5.getAccounts(_this5.serverParams.page);
      })["catch"](function () {
        _this5.makeToast("danger", _this5.$t("InvalidData"), _this5.$t("Failed"));
      })["finally"](function () {
        _this5.SubmitProcessing = false;
        nprogress__WEBPACK_IMPORTED_MODULE_1___default().done();
      });
    },
    // Submit edited account
    submitAccount: function submitAccount() {
      var _this6 = this;
      this.$refs.Edit_Account.validate().then(function (success) {
        if (!success) {
          _this6.makeToast("danger", _this6.$t("Please_fill_the_form_correctly"), _this6.$t("Failed"));
          return;
        }
        _this6.SubmitProcessing = true;
        _this6.email_exist = "";
        nprogress__WEBPACK_IMPORTED_MODULE_1___default().start();
        nprogress__WEBPACK_IMPORTED_MODULE_1___default().set(0.1);
        axios.put("ecommerce_clients/" + _this6.form.id, {
          email: _this6.form.email,
          password: _this6.form.password || null,
          status: _this6.form.status ? 1 : 0
        }).then(function () {
          _this6.makeToast("success", _this6.$t("Updated_in_successfully"), _this6.$t("Success"));
          _this6.$bvModal.hide("Edit_Ecommerce_Account");
          _this6.getAccounts(_this6.serverParams.page);
        })["catch"](function (error) {
          // Backend validation errors (same style as Add_product.vue)
          if (error && error.errors) {
            if (error.errors.email && error.errors.email.length > 0) {
              _this6.email_exist = error.errors.email[0];
              _this6.makeToast("danger", _this6.email_exist, _this6.$t("Failed"));
            } else {
              var firstKey = Object.keys(error.errors)[0];
              var firstVal = error.errors[firstKey];
              var msg = Array.isArray(firstVal) ? firstVal[0] : firstVal;
              _this6.makeToast("danger", msg || _this6.$t("InvalidData"), _this6.$t("Failed"));
            }
          } else {
            _this6.makeToast("danger", _this6.$t("InvalidData"), _this6.$t("Failed"));
          }
        })["finally"](function () {
          _this6.SubmitProcessing = false;
          nprogress__WEBPACK_IMPORTED_MODULE_1___default().done();
        });
      });
    },
    resetForm: function resetForm() {
      this.form = {
        id: "",
        client_id: "",
        client_name: "",
        email: "",
        password: "",
        status: true
      };
      this.email_exist = "";
    }
  },
  created: function created() {
    this.getAccounts(1);
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/people/Customers_ecommerce.vue?vue&type=template&id=22b80ed3":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/people/Customers_ecommerce.vue?vue&type=template&id=22b80ed3 ***!
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
      page: _vm.$t("Customers_with_Login"),
      folder: _vm.$t("Customers")
    }
  }), _vm._v(" "), _vm.isLoading ? _c("div", {
    staticClass: "loading_page spinner spinner-primary mr-3"
  }) : _c("div", [_c("div", {
    staticClass: "d-flex justify-content-end mb-3"
  }, [_c("b-button", {
    staticClass: "mr-2",
    attrs: {
      variant: "outline-primary",
      href: "/online_store",
      target: "_blank"
    }
  }, [_c("i", {
    staticClass: "i-Shopping-Bag mr-1"
  }), _vm._v(" "), _c("span", [_vm._v("Online Store")])])], 1), _vm._v(" "), _c("vue-good-table", {
    attrs: {
      mode: "remote",
      columns: _vm.columns,
      totalRows: _vm.totalRows,
      rows: _vm.accounts,
      "search-options": {
        enabled: true,
        placeholder: _vm.$t("Search_this_table")
      },
      "pagination-options": {
        enabled: true,
        mode: "records",
        nextLabel: "next",
        prevLabel: "prev"
      },
      styleClass: _vm.showDropdown ? "tableOne table-hover vgt-table full-height" : "tableOne table-hover vgt-table non-height"
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
          staticClass: "mr-2",
          attrs: {
            size: "sm",
            variant: "outline-primary"
          },
          on: {
            click: function click($event) {
              return _vm.editAccount(props.row);
            }
          }
        }, [_c("i", {
          staticClass: "i-Edit me-1"
        }), _vm._v(" " + _vm._s(_vm.$t("Edit")) + "\n          ")]), _vm._v(" "), _c("b-button", {
          attrs: {
            size: "sm",
            variant: "outline-danger"
          },
          on: {
            click: function click($event) {
              return _vm.confirmDelete(props.row);
            }
          }
        }, [_c("i", {
          staticClass: "i-Close me-1"
        }), _vm._v(" " + _vm._s(_vm.$t("Delete")) + "\n          ")])], 1) : _vm._e()];
      }
    }])
  })], 1), _vm._v(" "), _c("validation-observer", {
    ref: "Edit_Account"
  }, [_c("b-modal", {
    attrs: {
      "hide-footer": "",
      size: "md",
      id: "Edit_Ecommerce_Account",
      title: _vm.$t("Edit") + " - " + (_vm.form.client_name || "")
    }
  }, [_c("b-form", {
    on: {
      submit: function submit($event) {
        $event.preventDefault();
        return _vm.submitAccount.apply(null, arguments);
      }
    }
  }, [_c("b-row", [_c("b-col", {
    attrs: {
      md: "12",
      sm: "12"
    }
  }, [_c("b-form-group", {
    attrs: {
      label: _vm.$t("CustomerName")
    }
  }, [_c("b-form-input", {
    attrs: {
      readonly: ""
    },
    model: {
      value: _vm.form.client_name,
      callback: function callback($$v) {
        _vm.$set(_vm.form, "client_name", $$v);
      },
      expression: "form.client_name"
    }
  })], 1)], 1), _vm._v(" "), _c("b-col", {
    attrs: {
      md: "12",
      sm: "12"
    }
  }, [_c("validation-provider", {
    attrs: {
      name: "Email",
      rules: "required|email"
    },
    scopedSlots: _vm._u([{
      key: "default",
      fn: function fn(validationContext) {
        return [_c("b-form-group", {
          attrs: {
            label: _vm.$t("Email") + " *"
          }
        }, [_c("b-form-input", {
          attrs: {
            state: _vm.getValidationState(validationContext),
            "aria-describedby": "email-feedback"
          },
          on: {
            input: function input($event) {
              _vm.email_exist = "";
            }
          },
          model: {
            value: _vm.form.email,
            callback: function callback($$v) {
              _vm.$set(_vm.form, "email", $$v);
            },
            expression: "form.email"
          }
        }), _vm._v(" "), _c("b-form-invalid-feedback", {
          attrs: {
            id: "email-feedback"
          }
        }, [_vm._v("\n                  " + _vm._s(validationContext.errors[0]) + "\n                ")]), _vm._v(" "), _vm.email_exist ? _c("b-alert", {
          staticClass: "mt-1 py-1 px-2",
          attrs: {
            show: "",
            variant: "danger"
          }
        }, [_vm._v("\n                  " + _vm._s(_vm.email_exist) + "\n                ")]) : _vm._e()], 1)];
      }
    }])
  })], 1), _vm._v(" "), _c("b-col", {
    attrs: {
      md: "12",
      sm: "12"
    }
  }, [_c("validation-provider", {
    attrs: {
      name: "password",
      rules: {
        min: 6,
        max: 32
      }
    },
    scopedSlots: _vm._u([{
      key: "default",
      fn: function fn(validationContext) {
        return [_c("b-form-group", {
          attrs: {
            label: _vm.$t("password")
          }
        }, [_c("b-form-input", {
          attrs: {
            state: _vm.getValidationState(validationContext),
            type: _vm.showPassword ? "text" : "password",
            placeholder: _vm.$t("password")
          },
          model: {
            value: _vm.form.password,
            callback: function callback($$v) {
              _vm.$set(_vm.form, "password", $$v);
            },
            expression: "form.password"
          }
        }), _vm._v(" "), _c("b-form-invalid-feedback", [_vm._v("\n                  " + _vm._s(validationContext.errors[0]) + "\n                ")]), _vm._v(" "), _c("b-button", {
          staticClass: "position-absolute",
          staticStyle: {
            top: "56%",
            right: "0px",
            transform: "translateY(-50%)"
          },
          attrs: {
            variant: "link"
          },
          on: {
            click: function click($event) {
              _vm.showPassword = !_vm.showPassword;
            }
          }
        }, [_vm._v("\n                  " + _vm._s(_vm.showPassword ? "Hide" : "Show") + "\n                ")])], 1)];
      }
    }])
  })], 1), _vm._v(" "), _c("b-col", {
    attrs: {
      md: "12",
      sm: "12"
    }
  }, [_c("b-form-group", {
    attrs: {
      label: _vm.$t("Status")
    }
  }, [_c("b-form-checkbox", {
    attrs: {
      "switch": ""
    },
    model: {
      value: _vm.form.status,
      callback: function callback($$v) {
        _vm.$set(_vm.form, "status", $$v);
      },
      expression: "form.status"
    }
  }, [_vm._v("\n                " + _vm._s(_vm.form.status ? _vm.$t("Active") : _vm.$t("Inactive")) + "\n              ")])], 1)], 1), _vm._v(" "), _c("b-col", {
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
  }, [_vm._v("\n              " + _vm._s(_vm.$t("submit")) + "\n            ")]), _vm._v(" "), _vm.SubmitProcessing ? _vm._m(0) : _vm._e()], 1)], 1)], 1)], 1)], 1)], 1);
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

/***/ "./resources/src/views/app/pages/people/Customers_ecommerce.vue":
/*!**********************************************************************!*\
  !*** ./resources/src/views/app/pages/people/Customers_ecommerce.vue ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Customers_ecommerce_vue_vue_type_template_id_22b80ed3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Customers_ecommerce.vue?vue&type=template&id=22b80ed3 */ "./resources/src/views/app/pages/people/Customers_ecommerce.vue?vue&type=template&id=22b80ed3");
/* harmony import */ var _Customers_ecommerce_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Customers_ecommerce.vue?vue&type=script&lang=js */ "./resources/src/views/app/pages/people/Customers_ecommerce.vue?vue&type=script&lang=js");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Customers_ecommerce_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _Customers_ecommerce_vue_vue_type_template_id_22b80ed3__WEBPACK_IMPORTED_MODULE_0__.render,
  _Customers_ecommerce_vue_vue_type_template_id_22b80ed3__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) // removed by dead control flow
{ var api; }
component.options.__file = "resources/src/views/app/pages/people/Customers_ecommerce.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/src/views/app/pages/people/Customers_ecommerce.vue?vue&type=script&lang=js":
/*!**********************************************************************************************!*\
  !*** ./resources/src/views/app/pages/people/Customers_ecommerce.vue?vue&type=script&lang=js ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Customers_ecommerce_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Customers_ecommerce.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/people/Customers_ecommerce.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Customers_ecommerce_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/src/views/app/pages/people/Customers_ecommerce.vue?vue&type=template&id=22b80ed3":
/*!****************************************************************************************************!*\
  !*** ./resources/src/views/app/pages/people/Customers_ecommerce.vue?vue&type=template&id=22b80ed3 ***!
  \****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Customers_ecommerce_vue_vue_type_template_id_22b80ed3__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Customers_ecommerce_vue_vue_type_template_id_22b80ed3__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Customers_ecommerce_vue_vue_type_template_id_22b80ed3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Customers_ecommerce.vue?vue&type=template&id=22b80ed3 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/people/Customers_ecommerce.vue?vue&type=template&id=22b80ed3");


/***/ })

}]);