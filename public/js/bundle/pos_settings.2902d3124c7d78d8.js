"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["pos_settings"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/settings/pos_settings.vue?vue&type=script&lang=js":
/*!*********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/settings/pos_settings.vue?vue&type=script&lang=js ***!
  \*********************************************************************************************************************************************************************************************************************/
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
    title: "POS Settings"
  },
  data: function data() {
    return {
      isLoading: true,
      pos_settings: {
        note_customer: "",
        show_logo: "",
        show_store_name: "",
        show_reference: "",
        show_date: "",
        show_seller: "",
        show_note: "",
        show_barcode: "",
        show_discount: "",
        show_tax: "",
        show_shipping: "",
        show_phone: "",
        show_email: "",
        show_address: "",
        show_customer: "",
        show_Warehouse: "",
        is_printable: '',
        products_per_page: '',
        receipt_layout: 1,
        receipt_paper_size: 80,
        show_paid: "",
        show_due: "",
        show_payments: "",
        show_zatca_qr: "",
        // POS behaviour/display settings (from System Settings -> POS Settings tab)
        quick_add_customer: false,
        barcode_scanning_sound: false,
        show_product_images: false,
        show_stock_quantity: false,
        enable_hold_sales: false,
        enable_customer_points: false,
        show_categories: false,
        show_brands: false
      },
      // Preferred invoice format for POS printing ('thermal' or 'a4')
      invoice_format: "thermal",
      invoiceFormatOptions: [{
        value: "thermal",
        textKey: "Invoice_Thermal"
      }, {
        value: "a4",
        textKey: "Invoice_A4"
      }]
    };
  },
  computed: _objectSpread(_objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_0__.mapGetters)(["currentUser"])), {}, {
    // Normalize POS receipt layout selection (1, 2, or 3) for demo preview
    currentReceiptLayout: function currentReceiptLayout() {
      var raw = this.pos_settings && this.pos_settings.receipt_layout != null ? this.pos_settings.receipt_layout : 1;
      var n = Number(raw) || 1;
      return [1, 2, 3].includes(n) ? n : 1;
    }
  }),
  methods: _objectSpread(_objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_0__.mapActions)(["refreshUserPermissions"])), {}, {
    //------------- Submit Validation Pos Setting
    Submit_Pos_Settings: function Submit_Pos_Settings() {
      var _this = this;
      this.$refs.Submit_Pos_Settings.validate().then(function (success) {
        if (!success) {
          _this.makeToast("danger", _this.$t("Please_fill_the_form_correctly"), _this.$t("Failed"));
        } else {
          _this.Update_Pos_Settings();
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
    //---------------------------------- Update_Pos_Settings ----------------\\
    Update_Pos_Settings: function Update_Pos_Settings() {
      var _this2 = this;
      nprogress__WEBPACK_IMPORTED_MODULE_1___default().start();
      nprogress__WEBPACK_IMPORTED_MODULE_1___default().set(0.1);
      axios.put("pos_settings/" + this.pos_settings.id, {
        note_customer: this.pos_settings.note_customer,
        show_logo: this.pos_settings.show_logo,
        logo_size: this.pos_settings.logo_size,
        show_store_name: this.pos_settings.show_store_name,
        show_reference: this.pos_settings.show_reference,
        show_date: this.pos_settings.show_date,
        show_seller: this.pos_settings.show_seller,
        show_note: this.pos_settings.show_note,
        show_barcode: this.pos_settings.show_barcode,
        show_discount: this.pos_settings.show_discount,
        show_tax: this.pos_settings.show_tax,
        show_shipping: this.pos_settings.show_shipping,
        show_phone: this.pos_settings.show_phone,
        show_email: this.pos_settings.show_email,
        show_address: this.pos_settings.show_address,
        show_customer: this.pos_settings.show_customer,
        show_Warehouse: this.pos_settings.show_Warehouse,
        is_printable: this.pos_settings.is_printable,
        receipt_paper_size: this.pos_settings.receipt_paper_size,
        show_paid: this.pos_settings.show_paid,
        show_due: this.pos_settings.show_due,
        show_payments: this.pos_settings.show_payments,
        show_zatca_qr: this.pos_settings.show_zatca_qr,
        products_per_page: this.pos_settings.products_per_page,
        receipt_layout: this.pos_settings.receipt_layout,
        quick_add_customer: this.pos_settings.quick_add_customer,
        barcode_scanning_sound: this.pos_settings.barcode_scanning_sound,
        show_product_images: this.pos_settings.show_product_images,
        show_stock_quantity: this.pos_settings.show_stock_quantity,
        enable_hold_sales: this.pos_settings.enable_hold_sales,
        enable_customer_points: this.pos_settings.enable_customer_points,
        show_categories: this.pos_settings.show_categories,
        show_brands: this.pos_settings.show_brands,
        invoice_format: this.invoice_format
      }).then(function (response) {
        Fire.$emit("Event_Pos_Settings");
        _this2.makeToast("success", _this2.$t("Successfully_Updated"), _this2.$t("Success"));
        nprogress__WEBPACK_IMPORTED_MODULE_1___default().done();
      })["catch"](function (error) {
        nprogress__WEBPACK_IMPORTED_MODULE_1___default().done();
        _this2.makeToast("danger", _this2.$t("InvalidData"), _this2.$t("Failed"));
      });
    },
    // Print the live POS receipt demo using the same print CSS as real POS receipts
    printPosDemo: function printPosDemo() {
      try {
        var el = document.getElementById("pos-receipt-demo");
        if (!el) return;
        var divContents = el.innerHTML;
        var w = window.open("", "", "height=600,width=400");
        w.document.write('<html><head>');
        w.document.write('<link rel="stylesheet" href="/css/pos_print.css">');
        w.document.write("</head><body>");
        w.document.write(divContents);
        w.document.write("</body></html>");
        w.document.close();
        setTimeout(function () {
          w.print();
        }, 500);
      } catch (e) {
        // silently ignore print errors in settings preview
      }
    },
    //---------------------------------- Get_pos_Settings ----------------\\ 
    get_pos_Settings: function get_pos_Settings() {
      var _this3 = this;
      axios.get("get_pos_Settings_api").then(function (response) {
        _this3.pos_settings = response.data.pos_settings;
        _this3.isLoading = false;
      })["catch"](function (error) {
        _this3.isLoading = false;
      });
    },
    //---------------------------------- Get global SETTINGS (for invoice_format) ----------------\\
    Get_Settings: function Get_Settings() {
      var _this4 = this;
      axios.get("get_Settings_data").then(function (response) {
        var settings = response && response.data && response.data.settings || {};
        var raw = settings.invoice_format;
        if (typeof raw === "string" && ["thermal", "a4"].includes(raw)) {
          _this4.invoice_format = raw;
        } else {
          _this4.invoice_format = "thermal";
        }
      })["catch"](function (error) {
        // Silent fail – POS Settings page will fall back to default 'thermal'
      });
    }
  }),
  //end Methods

  //----------------------------- Created function-------------------

  created: function created() {
    var _this5 = this;
    this.get_pos_Settings();
    this.Get_Settings();
    Fire.$on("Event_Pos_Settings", function () {
      _this5.get_pos_Settings();
      _this5.Get_Settings();
    });
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/settings/pos_settings.vue?vue&type=template&id=5e3e9e8d&scoped=true":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/settings/pos_settings.vue?vue&type=template&id=5e3e9e8d&scoped=true ***!
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
      page: _vm.$t("Pos_Settings"),
      folder: _vm.$t("Settings")
    }
  }), _vm._v(" "), _vm.isLoading ? _c("div", {
    staticClass: "loading_page spinner spinner-primary mr-3"
  }) : _vm._e(), _vm._v(" "), !_vm.isLoading ? _c("validation-observer", {
    ref: "Submit_Pos_Settings"
  }, [_c("b-form", {
    on: {
      submit: function submit($event) {
        $event.preventDefault();
        return _vm.Submit_Pos_Settings.apply(null, arguments);
      }
    }
  }, [_c("b-row", {
    staticClass: "mt-5"
  }, [_c("b-col", {
    attrs: {
      lg: "12",
      md: "12",
      sm: "12"
    }
  }, [_c("b-card", {
    attrs: {
      "no-body": "",
      header: _vm.$t("Pos_Settings")
    }
  }, [_c("b-card-body", [_c("b-row", [_c("b-col", {
    staticClass: "mt-3 mb-3",
    attrs: {
      md: "4"
    }
  }, [_c("label", {
    staticClass: "switch switch-primary mr-3"
  }, [_vm._v("\n                    " + _vm._s(_vm.$t("Quick_Add_Customer")) + "\n                    "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.pos_settings.quick_add_customer,
      expression: "pos_settings.quick_add_customer"
    }],
    attrs: {
      type: "checkbox"
    },
    domProps: {
      checked: Array.isArray(_vm.pos_settings.quick_add_customer) ? _vm._i(_vm.pos_settings.quick_add_customer, null) > -1 : _vm.pos_settings.quick_add_customer
    },
    on: {
      change: function change($event) {
        var $$a = _vm.pos_settings.quick_add_customer,
          $$el = $event.target,
          $$c = $$el.checked ? true : false;
        if (Array.isArray($$a)) {
          var $$v = null,
            $$i = _vm._i($$a, $$v);
          if ($$el.checked) {
            $$i < 0 && _vm.$set(_vm.pos_settings, "quick_add_customer", $$a.concat([$$v]));
          } else {
            $$i > -1 && _vm.$set(_vm.pos_settings, "quick_add_customer", $$a.slice(0, $$i).concat($$a.slice($$i + 1)));
          }
        } else {
          _vm.$set(_vm.pos_settings, "quick_add_customer", $$c);
        }
      }
    }
  }), _vm._v(" "), _c("span", {
    staticClass: "slider"
  })]), _vm._v(" "), _c("small", {
    staticClass: "text-muted d-block mt-2"
  }, [_vm._v("\n                    " + _vm._s(_vm.$t("Enable_Quick_Add_Customer_popup_in_POS")) + "\n                  ")])]), _vm._v(" "), _c("b-col", {
    staticClass: "mt-3 mb-3",
    attrs: {
      md: "4"
    }
  }, [_c("label", {
    staticClass: "switch switch-primary mr-3"
  }, [_vm._v("\n                    " + _vm._s(_vm.$t("Barcode_Scanning_Sound")) + "\n                    "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.pos_settings.barcode_scanning_sound,
      expression: "pos_settings.barcode_scanning_sound"
    }],
    attrs: {
      type: "checkbox"
    },
    domProps: {
      checked: Array.isArray(_vm.pos_settings.barcode_scanning_sound) ? _vm._i(_vm.pos_settings.barcode_scanning_sound, null) > -1 : _vm.pos_settings.barcode_scanning_sound
    },
    on: {
      change: function change($event) {
        var $$a = _vm.pos_settings.barcode_scanning_sound,
          $$el = $event.target,
          $$c = $$el.checked ? true : false;
        if (Array.isArray($$a)) {
          var $$v = null,
            $$i = _vm._i($$a, $$v);
          if ($$el.checked) {
            $$i < 0 && _vm.$set(_vm.pos_settings, "barcode_scanning_sound", $$a.concat([$$v]));
          } else {
            $$i > -1 && _vm.$set(_vm.pos_settings, "barcode_scanning_sound", $$a.slice(0, $$i).concat($$a.slice($$i + 1)));
          }
        } else {
          _vm.$set(_vm.pos_settings, "barcode_scanning_sound", $$c);
        }
      }
    }
  }), _vm._v(" "), _c("span", {
    staticClass: "slider"
  })]), _vm._v(" "), _c("small", {
    staticClass: "text-muted d-block mt-2"
  }, [_vm._v("\n                    " + _vm._s(_vm.$t("Enable_sound_when_scanning_barcodes_in_POS")) + "\n                  ")])]), _vm._v(" "), _c("b-col", {
    staticClass: "mt-3 mb-3",
    attrs: {
      md: "4"
    }
  }, [_c("label", {
    staticClass: "switch switch-primary mr-3"
  }, [_vm._v("\n                    " + _vm._s(_vm.$t("Show_Product_Images_in_POS")) + "\n                    "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.pos_settings.show_product_images,
      expression: "pos_settings.show_product_images"
    }],
    attrs: {
      type: "checkbox"
    },
    domProps: {
      checked: Array.isArray(_vm.pos_settings.show_product_images) ? _vm._i(_vm.pos_settings.show_product_images, null) > -1 : _vm.pos_settings.show_product_images
    },
    on: {
      change: function change($event) {
        var $$a = _vm.pos_settings.show_product_images,
          $$el = $event.target,
          $$c = $$el.checked ? true : false;
        if (Array.isArray($$a)) {
          var $$v = null,
            $$i = _vm._i($$a, $$v);
          if ($$el.checked) {
            $$i < 0 && _vm.$set(_vm.pos_settings, "show_product_images", $$a.concat([$$v]));
          } else {
            $$i > -1 && _vm.$set(_vm.pos_settings, "show_product_images", $$a.slice(0, $$i).concat($$a.slice($$i + 1)));
          }
        } else {
          _vm.$set(_vm.pos_settings, "show_product_images", $$c);
        }
      }
    }
  }), _vm._v(" "), _c("span", {
    staticClass: "slider"
  })]), _vm._v(" "), _c("small", {
    staticClass: "text-muted d-block mt-2"
  }, [_vm._v("\n                    " + _vm._s(_vm.$t("Show_hide_product_images_in_POS_product_listing")) + "\n                  ")])]), _vm._v(" "), _c("b-col", {
    staticClass: "mt-3 mb-3",
    attrs: {
      md: "4"
    }
  }, [_c("label", {
    staticClass: "switch switch-primary mr-3"
  }, [_vm._v("\n                    " + _vm._s(_vm.$t("Show_Stock_Quantity_in_POS")) + "\n                    "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.pos_settings.show_stock_quantity,
      expression: "pos_settings.show_stock_quantity"
    }],
    attrs: {
      type: "checkbox"
    },
    domProps: {
      checked: Array.isArray(_vm.pos_settings.show_stock_quantity) ? _vm._i(_vm.pos_settings.show_stock_quantity, null) > -1 : _vm.pos_settings.show_stock_quantity
    },
    on: {
      change: function change($event) {
        var $$a = _vm.pos_settings.show_stock_quantity,
          $$el = $event.target,
          $$c = $$el.checked ? true : false;
        if (Array.isArray($$a)) {
          var $$v = null,
            $$i = _vm._i($$a, $$v);
          if ($$el.checked) {
            $$i < 0 && _vm.$set(_vm.pos_settings, "show_stock_quantity", $$a.concat([$$v]));
          } else {
            $$i > -1 && _vm.$set(_vm.pos_settings, "show_stock_quantity", $$a.slice(0, $$i).concat($$a.slice($$i + 1)));
          }
        } else {
          _vm.$set(_vm.pos_settings, "show_stock_quantity", $$c);
        }
      }
    }
  }), _vm._v(" "), _c("span", {
    staticClass: "slider"
  })]), _vm._v(" "), _c("small", {
    staticClass: "text-muted d-block mt-2"
  }, [_vm._v("\n                    " + _vm._s(_vm.$t("Show_hide_stock_quantity_in_POS")) + "\n                  ")])]), _vm._v(" "), _c("b-col", {
    staticClass: "mt-3 mb-3",
    attrs: {
      md: "4"
    }
  }, [_c("label", {
    staticClass: "switch switch-primary mr-3"
  }, [_vm._v("\n                    " + _vm._s(_vm.$t("Enable_Print_Invoice")) + "\n                    "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.pos_settings.is_printable,
      expression: "pos_settings.is_printable"
    }],
    attrs: {
      type: "checkbox",
      "true-value": 1,
      "false-value": 0
    },
    domProps: {
      checked: Array.isArray(_vm.pos_settings.is_printable) ? _vm._i(_vm.pos_settings.is_printable, null) > -1 : _vm._q(_vm.pos_settings.is_printable, 1)
    },
    on: {
      change: function change($event) {
        var $$a = _vm.pos_settings.is_printable,
          $$el = $event.target,
          $$c = $$el.checked ? 1 : 0;
        if (Array.isArray($$a)) {
          var $$v = null,
            $$i = _vm._i($$a, $$v);
          if ($$el.checked) {
            $$i < 0 && _vm.$set(_vm.pos_settings, "is_printable", $$a.concat([$$v]));
          } else {
            $$i > -1 && _vm.$set(_vm.pos_settings, "is_printable", $$a.slice(0, $$i).concat($$a.slice($$i + 1)));
          }
        } else {
          _vm.$set(_vm.pos_settings, "is_printable", $$c);
        }
      }
    }
  }), _vm._v(" "), _c("span", {
    staticClass: "slider"
  })])]), _vm._v(" "), _c("b-col", {
    staticClass: "mt-3 mb-3",
    attrs: {
      md: "4"
    }
  }, [_c("label", {
    staticClass: "switch switch-primary mr-3"
  }, [_vm._v("\n                    " + _vm._s(_vm.$t("Enable_Hold_Sales")) + "\n                    "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.pos_settings.enable_hold_sales,
      expression: "pos_settings.enable_hold_sales"
    }],
    attrs: {
      type: "checkbox"
    },
    domProps: {
      checked: Array.isArray(_vm.pos_settings.enable_hold_sales) ? _vm._i(_vm.pos_settings.enable_hold_sales, null) > -1 : _vm.pos_settings.enable_hold_sales
    },
    on: {
      change: function change($event) {
        var $$a = _vm.pos_settings.enable_hold_sales,
          $$el = $event.target,
          $$c = $$el.checked ? true : false;
        if (Array.isArray($$a)) {
          var $$v = null,
            $$i = _vm._i($$a, $$v);
          if ($$el.checked) {
            $$i < 0 && _vm.$set(_vm.pos_settings, "enable_hold_sales", $$a.concat([$$v]));
          } else {
            $$i > -1 && _vm.$set(_vm.pos_settings, "enable_hold_sales", $$a.slice(0, $$i).concat($$a.slice($$i + 1)));
          }
        } else {
          _vm.$set(_vm.pos_settings, "enable_hold_sales", $$c);
        }
      }
    }
  }), _vm._v(" "), _c("span", {
    staticClass: "slider"
  })]), _vm._v(" "), _c("small", {
    staticClass: "text-muted d-block mt-2"
  }, [_vm._v("\n                    " + _vm._s(_vm.$t("Enable_disable_Hold_Sales_feature_in_POS")) + "\n                  ")])]), _vm._v(" "), _c("b-col", {
    staticClass: "mt-3 mb-3",
    attrs: {
      md: "4"
    }
  }, [_c("label", {
    staticClass: "switch switch-primary mr-3"
  }, [_vm._v("\n                    " + _vm._s(_vm.$t("Enable_Customer_Points_in_POS")) + "\n                    "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.pos_settings.enable_customer_points,
      expression: "pos_settings.enable_customer_points"
    }],
    attrs: {
      type: "checkbox"
    },
    domProps: {
      checked: Array.isArray(_vm.pos_settings.enable_customer_points) ? _vm._i(_vm.pos_settings.enable_customer_points, null) > -1 : _vm.pos_settings.enable_customer_points
    },
    on: {
      change: function change($event) {
        var $$a = _vm.pos_settings.enable_customer_points,
          $$el = $event.target,
          $$c = $$el.checked ? true : false;
        if (Array.isArray($$a)) {
          var $$v = null,
            $$i = _vm._i($$a, $$v);
          if ($$el.checked) {
            $$i < 0 && _vm.$set(_vm.pos_settings, "enable_customer_points", $$a.concat([$$v]));
          } else {
            $$i > -1 && _vm.$set(_vm.pos_settings, "enable_customer_points", $$a.slice(0, $$i).concat($$a.slice($$i + 1)));
          }
        } else {
          _vm.$set(_vm.pos_settings, "enable_customer_points", $$c);
        }
      }
    }
  }), _vm._v(" "), _c("span", {
    staticClass: "slider"
  })]), _vm._v(" "), _c("small", {
    staticClass: "text-muted d-block mt-2"
  }, [_vm._v("\n                    " + _vm._s(_vm.$t("Enable_disable_customer_points_system_in_POS")) + "\n                  ")])]), _vm._v(" "), _c("b-col", {
    staticClass: "mt-3 mb-3",
    attrs: {
      md: "4"
    }
  }, [_c("label", {
    staticClass: "switch switch-primary mr-3"
  }, [_vm._v("\n                    " + _vm._s(_vm.$t("Show_Categories_in_POS")) + "\n                    "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.pos_settings.show_categories,
      expression: "pos_settings.show_categories"
    }],
    attrs: {
      type: "checkbox"
    },
    domProps: {
      checked: Array.isArray(_vm.pos_settings.show_categories) ? _vm._i(_vm.pos_settings.show_categories, null) > -1 : _vm.pos_settings.show_categories
    },
    on: {
      change: function change($event) {
        var $$a = _vm.pos_settings.show_categories,
          $$el = $event.target,
          $$c = $$el.checked ? true : false;
        if (Array.isArray($$a)) {
          var $$v = null,
            $$i = _vm._i($$a, $$v);
          if ($$el.checked) {
            $$i < 0 && _vm.$set(_vm.pos_settings, "show_categories", $$a.concat([$$v]));
          } else {
            $$i > -1 && _vm.$set(_vm.pos_settings, "show_categories", $$a.slice(0, $$i).concat($$a.slice($$i + 1)));
          }
        } else {
          _vm.$set(_vm.pos_settings, "show_categories", $$c);
        }
      }
    }
  }), _vm._v(" "), _c("span", {
    staticClass: "slider"
  })]), _vm._v(" "), _c("small", {
    staticClass: "text-muted d-block mt-2"
  }, [_vm._v("\n                    " + _vm._s(_vm.$t("Show_hide_categories_in_POS")) + "\n                  ")])]), _vm._v(" "), _c("b-col", {
    staticClass: "mt-3 mb-3",
    attrs: {
      md: "4"
    }
  }, [_c("label", {
    staticClass: "switch switch-primary mr-3"
  }, [_vm._v("\n                    " + _vm._s(_vm.$t("Show_Brands_in_POS")) + "\n                    "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.pos_settings.show_brands,
      expression: "pos_settings.show_brands"
    }],
    attrs: {
      type: "checkbox"
    },
    domProps: {
      checked: Array.isArray(_vm.pos_settings.show_brands) ? _vm._i(_vm.pos_settings.show_brands, null) > -1 : _vm.pos_settings.show_brands
    },
    on: {
      change: function change($event) {
        var $$a = _vm.pos_settings.show_brands,
          $$el = $event.target,
          $$c = $$el.checked ? true : false;
        if (Array.isArray($$a)) {
          var $$v = null,
            $$i = _vm._i($$a, $$v);
          if ($$el.checked) {
            $$i < 0 && _vm.$set(_vm.pos_settings, "show_brands", $$a.concat([$$v]));
          } else {
            $$i > -1 && _vm.$set(_vm.pos_settings, "show_brands", $$a.slice(0, $$i).concat($$a.slice($$i + 1)));
          }
        } else {
          _vm.$set(_vm.pos_settings, "show_brands", $$c);
        }
      }
    }
  }), _vm._v(" "), _c("span", {
    staticClass: "slider"
  })]), _vm._v(" "), _c("small", {
    staticClass: "text-muted d-block mt-2"
  }, [_vm._v("\n                    " + _vm._s(_vm.$t("Show_hide_brands_in_POS")) + "\n                  ")])]), _vm._v(" "), _c("b-col", {
    staticClass: "mt-3 mb-3",
    attrs: {
      lg: "6",
      md: "6",
      sm: "12"
    }
  }, [_c("validation-provider", {
    attrs: {
      name: "products_per_page",
      rules: {
        required: true
      }
    },
    scopedSlots: _vm._u([{
      key: "default",
      fn: function fn(validationContext) {
        return [_c("b-form-group", {
          attrs: {
            label: "How many items do you want to display in POS *"
          }
        }, [_c("b-form-input", {
          attrs: {
            state: _vm.getValidationState(validationContext),
            "aria-describedby": "products_per_page-feedback",
            label: "How many items do you want to display in POS.",
            placeholder: "How many items do you want to display in POS.",
            type: "text"
          },
          model: {
            value: _vm.pos_settings.products_per_page,
            callback: function callback($$v) {
              _vm.$set(_vm.pos_settings, "products_per_page", $$v);
            },
            expression: "pos_settings.products_per_page"
          }
        }), _vm._v(" "), _c("b-form-invalid-feedback", {
          attrs: {
            id: "products_per_page-feedback"
          }
        }, [_vm._v("\n                        " + _vm._s(validationContext.errors[0]) + "\n                      ")])], 1)];
      }
    }], null, false, 245886410)
  })], 1), _vm._v(" "), _c("b-col", {
    staticClass: "mb-3",
    attrs: {
      lg: "12",
      md: "12",
      sm: "12"
    }
  }, [_c("b-form-group", {
    attrs: {
      label: _vm.$t("Invoice_Format")
    }
  }, [_c("b-form-radio-group", {
    attrs: {
      options: _vm.invoiceFormatOptions.map(function (opt) {
        return {
          value: opt.value,
          text: _vm.$t(opt.textKey)
        };
      }),
      buttons: "",
      "button-variant": "outline-primary",
      size: "sm"
    },
    model: {
      value: _vm.invoice_format,
      callback: function callback($$v) {
        _vm.invoice_format = $$v;
      },
      expression: "invoice_format"
    }
  }), _vm._v(" "), _c("small", {
    staticClass: "text-muted d-block mt-1"
  }, [_vm._v("\n                      " + _vm._s(_vm.$t("Invoice_Format_help")) + "\n                    ")])], 1)], 1), _vm._v(" "), _c("b-col", {
    staticClass: "mt-4",
    attrs: {
      md: "12"
    }
  }, [_c("div", {
    staticClass: "d-flex justify-content-end"
  }, [_c("b-button", {
    attrs: {
      variant: "primary",
      type: "submit",
      size: "lg"
    }
  }, [_vm._v("\n                      " + _vm._s(_vm.$t("submit")) + "\n                    ")])], 1)])], 1)], 1)], 1)], 1)], 1)], 1)], 1) : _vm._e()], 1);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-8.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-8.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/settings/pos_settings.vue?vue&type=style&index=0&id=5e3e9e8d&scoped=true&lang=css":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-8.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-8.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/settings/pos_settings.vue?vue&type=style&index=0&id=5e3e9e8d&scoped=true&lang=css ***!
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
___CSS_LOADER_EXPORT___.push([module.id, "\n.pos-receipt-demo[data-v-5e3e9e8d] {\n  /* Approximate 88mm receipt width at 96dpi: ~332px */\n  width: 330px;\n  max-width: 100%;\n  margin: 0 auto;\n  background: #ffffff;\n  padding: 10px;\n  border: 1px dashed #dee2e6;\n  font-size: 11px;\n}\n.pos-receipt-demo .info[data-v-5e3e9e8d] {\n  text-align: center;\n}\n.pos-receipt-demo .table_data[data-v-5e3e9e8d] {\n  width: 100%;\n}\n", ""]);
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

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-8.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-8.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/settings/pos_settings.vue?vue&type=style&index=0&id=5e3e9e8d&scoped=true&lang=css":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-8.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-8.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/settings/pos_settings.vue?vue&type=style&index=0&id=5e3e9e8d&scoped=true&lang=css ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_8_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_8_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_pos_settings_vue_vue_type_style_index_0_id_5e3e9e8d_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-8.use[1]!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-8.use[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./pos_settings.vue?vue&type=style&index=0&id=5e3e9e8d&scoped=true&lang=css */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-8.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-8.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/settings/pos_settings.vue?vue&type=style&index=0&id=5e3e9e8d&scoped=true&lang=css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_8_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_8_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_pos_settings_vue_vue_type_style_index_0_id_5e3e9e8d_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_8_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_8_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_pos_settings_vue_vue_type_style_index_0_id_5e3e9e8d_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

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

/***/ "./resources/src/views/app/pages/settings/pos_settings.vue":
/*!*****************************************************************!*\
  !*** ./resources/src/views/app/pages/settings/pos_settings.vue ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _pos_settings_vue_vue_type_template_id_5e3e9e8d_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pos_settings.vue?vue&type=template&id=5e3e9e8d&scoped=true */ "./resources/src/views/app/pages/settings/pos_settings.vue?vue&type=template&id=5e3e9e8d&scoped=true");
/* harmony import */ var _pos_settings_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pos_settings.vue?vue&type=script&lang=js */ "./resources/src/views/app/pages/settings/pos_settings.vue?vue&type=script&lang=js");
/* harmony import */ var _pos_settings_vue_vue_type_style_index_0_id_5e3e9e8d_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pos_settings.vue?vue&type=style&index=0&id=5e3e9e8d&scoped=true&lang=css */ "./resources/src/views/app/pages/settings/pos_settings.vue?vue&type=style&index=0&id=5e3e9e8d&scoped=true&lang=css");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _pos_settings_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _pos_settings_vue_vue_type_template_id_5e3e9e8d_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render,
  _pos_settings_vue_vue_type_template_id_5e3e9e8d_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "5e3e9e8d",
  null
  
)

/* hot reload */
if (false) // removed by dead control flow
{ var api; }
component.options.__file = "resources/src/views/app/pages/settings/pos_settings.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/src/views/app/pages/settings/pos_settings.vue?vue&type=script&lang=js":
/*!*****************************************************************************************!*\
  !*** ./resources/src/views/app/pages/settings/pos_settings.vue?vue&type=script&lang=js ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_pos_settings_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./pos_settings.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/settings/pos_settings.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_pos_settings_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/src/views/app/pages/settings/pos_settings.vue?vue&type=style&index=0&id=5e3e9e8d&scoped=true&lang=css":
/*!*************************************************************************************************************************!*\
  !*** ./resources/src/views/app/pages/settings/pos_settings.vue?vue&type=style&index=0&id=5e3e9e8d&scoped=true&lang=css ***!
  \*************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_8_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_8_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_pos_settings_vue_vue_type_style_index_0_id_5e3e9e8d_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/style-loader/dist/cjs.js!../../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-8.use[1]!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-8.use[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./pos_settings.vue?vue&type=style&index=0&id=5e3e9e8d&scoped=true&lang=css */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-8.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-8.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/settings/pos_settings.vue?vue&type=style&index=0&id=5e3e9e8d&scoped=true&lang=css");


/***/ }),

/***/ "./resources/src/views/app/pages/settings/pos_settings.vue?vue&type=template&id=5e3e9e8d&scoped=true":
/*!***********************************************************************************************************!*\
  !*** ./resources/src/views/app/pages/settings/pos_settings.vue?vue&type=template&id=5e3e9e8d&scoped=true ***!
  \***********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_pos_settings_vue_vue_type_template_id_5e3e9e8d_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_pos_settings_vue_vue_type_template_id_5e3e9e8d_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_pos_settings_vue_vue_type_template_id_5e3e9e8d_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./pos_settings.vue?vue&type=template&id=5e3e9e8d&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/settings/pos_settings.vue?vue&type=template&id=5e3e9e8d&scoped=true");


/***/ })

}]);