"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["login_devices"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/settings/login_devices.vue?vue&type=script&lang=js":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/settings/login_devices.vue?vue&type=script&lang=js ***!
  \**********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  metaInfo: {
    title: "Login Device Management"
  },
  data: function data() {
    return {
      securitySessions: [],
      securitySessionsLoading: false,
      securitySessionsActionLoading: false
    };
  },
  computed: _objectSpread(_objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_0__.mapGetters)(["currentUserPermissions"])), {}, {
    hasOtherSessions: function hasOtherSessions() {
      return (this.securitySessions || []).some(function (s) {
        return !s.is_current;
      });
    },
    securitySessionFields: function securitySessionFields() {
      return [{
        key: "device",
        label: "Device / Browser",
        tdClass: "text-left",
        thClass: "text-left"
      }, {
        key: "ip_address",
        label: "IP Address",
        tdClass: "text-left",
        thClass: "text-left"
      }, {
        key: "login_at",
        label: "Login date & time",
        tdClass: "text-left",
        thClass: "text-left"
      }, {
        key: "last_activity_at",
        label: "Last activity",
        tdClass: "text-left",
        thClass: "text-left"
      }, {
        key: "actions",
        label: "Action",
        tdClass: "text-right",
        thClass: "text-right"
      }];
    }
  }),
  created: function created() {
    // Permission gate (UI). Backend also enforces.
    var perms = this.currentUserPermissions || [];
    var allowed = perms.includes("login_device_management") || perms.includes("setting_system");
    if (!allowed) {
      this.$router.push({
        name: "not_authorize"
      });
      return;
    }
    this.LoadSecuritySessions();
  },
  methods: {
    formatDateTime: function formatDateTime(v) {
      try {
        if (!v) return "";
        var d = new Date(v);
        if (isNaN(d.getTime())) return String(v);
        return d.toLocaleString();
      } catch (e) {
        return String(v || "");
      }
    },
    makeToast: function makeToast(variant, msg, title) {
      this.$root.$bvToast.toast(msg, {
        title: title,
        variant: variant,
        solid: true
      });
    },
    LoadSecuritySessions: function LoadSecuritySessions() {
      var _this = this;
      if (this.securitySessionsLoading) return;
      this.securitySessionsLoading = true;
      axios.get("security/sessions").then(function (response) {
        _this.securitySessions = response && response.data && response.data.sessions ? response.data.sessions : [];
      })["catch"](function (error) {
        var msg = error && error.response && error.response.data && (error.response.data.message || error.response.data.error) || _this.$t("Failed");
        _this.makeToast("danger", msg, _this.$t("Failed"));
      })["finally"](function () {
        _this.securitySessionsLoading = false;
      });
    },
    LogoutSession: function LogoutSession(tokenId) {
      var _this2 = this;
      if (!tokenId) return;
      if (this.securitySessionsActionLoading) return;
      this.securitySessionsActionLoading = true;
      axios["delete"]("security/sessions/".concat(encodeURIComponent(tokenId))).then(function () {
        _this2.makeToast("success", "Session logged out successfully.", _this2.$t("Success"));
        _this2.LoadSecuritySessions();
      })["catch"](function (error) {
        var msg = error && error.response && error.response.data && (error.response.data.message || error.response.data.error) || _this2.$t("Failed");
        _this2.makeToast("danger", msg, _this2.$t("Failed"));
      })["finally"](function () {
        _this2.securitySessionsActionLoading = false;
      });
    },
    LogoutAllOtherDevices: function LogoutAllOtherDevices() {
      var _this3 = this;
      if (this.securitySessionsActionLoading) return;
      this.securitySessionsActionLoading = true;
      axios.post("security/sessions/logout-other").then(function (response) {
        var revoked = response && response.data && typeof response.data.revoked !== "undefined" ? response.data.revoked : null;
        var msg = revoked === null ? "Logged out other devices." : "Logged out ".concat(revoked, " other device(s).");
        _this3.makeToast("success", msg, _this3.$t("Success"));
        _this3.LoadSecuritySessions();
      })["catch"](function (error) {
        var msg = error && error.response && error.response.data && (error.response.data.message || error.response.data.error) || _this3.$t("Failed");
        _this3.makeToast("danger", msg, _this3.$t("Failed"));
      })["finally"](function () {
        _this3.securitySessionsActionLoading = false;
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/settings/login_devices.vue?vue&type=template&id=33811e90":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/settings/login_devices.vue?vue&type=template&id=33811e90 ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************/
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
      page: _vm.$t("Login_Device_Management"),
      folder: _vm.$t("Settings")
    }
  }), _vm._v(" "), _c("b-card", [_c("div", {
    staticClass: "d-flex justify-content-between align-items-center mb-2"
  }, [_c("div", [_c("h5", {
    staticClass: "mb-1"
  }, [_vm._v("Login Device Management")]), _vm._v(" "), _c("p", {
    staticClass: "text-muted mb-0"
  }, [_vm._v("\n          Active login sessions for your user (per device / browser).\n        ")])]), _vm._v(" "), _c("div", {
    staticClass: "d-flex"
  }, [_c("b-button", {
    staticClass: "mr-2",
    attrs: {
      variant: "outline-primary",
      disabled: _vm.securitySessionsLoading || _vm.securitySessionsActionLoading
    },
    on: {
      click: function click($event) {
        return _vm.LoadSecuritySessions();
      }
    }
  }, [_vm._v("\n          Refresh\n        ")]), _vm._v(" "), _c("b-button", {
    attrs: {
      variant: "danger",
      disabled: _vm.securitySessionsLoading || _vm.securitySessionsActionLoading || !_vm.hasOtherSessions
    },
    on: {
      click: function click($event) {
        return _vm.LogoutAllOtherDevices();
      }
    }
  }, [_vm._v("\n          Logout All Other Devices\n        ")])], 1)]), _vm._v(" "), _vm.securitySessionsLoading ? _c("div", {
    staticClass: "py-4 text-center text-muted"
  }, [_c("div", {
    staticClass: "spinner spinner-primary mr-3"
  })]) : _c("b-table", {
    staticClass: "mt-3",
    attrs: {
      items: _vm.securitySessions,
      fields: _vm.securitySessionFields,
      responsive: "sm",
      small: "",
      "show-empty": "",
      "empty-text": "No active sessions found."
    },
    scopedSlots: _vm._u([{
      key: "cell(device)",
      fn: function fn(row) {
        return [_c("div", {
          staticClass: "d-flex align-items-center"
        }, [_c("span", [_vm._v(_vm._s(row.item.device))]), _vm._v(" "), row.item.is_current ? _c("b-badge", {
          staticClass: "ms-2",
          attrs: {
            variant: "success"
          }
        }, [_vm._v("Current")]) : _vm._e()], 1)];
      }
    }, {
      key: "cell(ip_address)",
      fn: function fn(row) {
        return [_c("span", [_vm._v(_vm._s(row.item.ip_address || "-"))])];
      }
    }, {
      key: "cell(login_at)",
      fn: function fn(row) {
        return [_c("span", [_vm._v(_vm._s(_vm.formatDateTime(row.item.login_at)))])];
      }
    }, {
      key: "cell(last_activity_at)",
      fn: function fn(row) {
        return [_c("span", [_vm._v(_vm._s(row.item.last_activity_at ? _vm.formatDateTime(row.item.last_activity_at) : "-"))])];
      }
    }, {
      key: "cell(actions)",
      fn: function fn(row) {
        return [_c("b-button", {
          attrs: {
            size: "sm",
            variant: "danger",
            disabled: _vm.securitySessionsLoading || _vm.securitySessionsActionLoading || row.item.is_current
          },
          on: {
            click: function click($event) {
              return _vm.LogoutSession(row.item.token_id);
            }
          }
        }, [_vm._v("\n          Logout\n        ")])];
      }
    }])
  })], 1)], 1);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./resources/src/views/app/pages/settings/login_devices.vue":
/*!******************************************************************!*\
  !*** ./resources/src/views/app/pages/settings/login_devices.vue ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _login_devices_vue_vue_type_template_id_33811e90__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login_devices.vue?vue&type=template&id=33811e90 */ "./resources/src/views/app/pages/settings/login_devices.vue?vue&type=template&id=33811e90");
/* harmony import */ var _login_devices_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login_devices.vue?vue&type=script&lang=js */ "./resources/src/views/app/pages/settings/login_devices.vue?vue&type=script&lang=js");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _login_devices_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _login_devices_vue_vue_type_template_id_33811e90__WEBPACK_IMPORTED_MODULE_0__.render,
  _login_devices_vue_vue_type_template_id_33811e90__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) // removed by dead control flow
{ var api; }
component.options.__file = "resources/src/views/app/pages/settings/login_devices.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/src/views/app/pages/settings/login_devices.vue?vue&type=script&lang=js":
/*!******************************************************************************************!*\
  !*** ./resources/src/views/app/pages/settings/login_devices.vue?vue&type=script&lang=js ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_login_devices_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./login_devices.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/settings/login_devices.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_login_devices_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/src/views/app/pages/settings/login_devices.vue?vue&type=template&id=33811e90":
/*!************************************************************************************************!*\
  !*** ./resources/src/views/app/pages/settings/login_devices.vue?vue&type=template&id=33811e90 ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_login_devices_vue_vue_type_template_id_33811e90__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_login_devices_vue_vue_type_template_id_33811e90__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_login_devices_vue_vue_type_template_id_33811e90__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./login_devices.vue?vue&type=template&id=33811e90 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/settings/login_devices.vue?vue&type=template&id=33811e90");


/***/ })

}]);