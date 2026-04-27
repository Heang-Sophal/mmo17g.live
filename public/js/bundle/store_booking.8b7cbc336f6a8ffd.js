"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["store_booking"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/bookings/store_booking.vue?vue&type=script&lang=js":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/bookings/store_booking.vue?vue&type=script&lang=js ***!
  \**********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! nprogress */ "./node_modules/nprogress/nprogress.js");
/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(nprogress__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  metaInfo: {
    title: "Create Booking"
  },
  data: function data() {
    return {
      isLoading: true,
      submitProcessing: false,
      customers: [],
      products: [],
      statusOptions: [{
        label: this.$t("Pending") || "Pending",
        value: "pending"
      }, {
        label: this.$t("Confirmed") || "Confirmed",
        value: "confirmed"
      }, {
        label: this.$t("Cancelled") || "Cancelled",
        value: "cancelled"
      }, {
        label: this.$t("complete") || "Completed",
        value: "completed"
      }],
      booking: {
        customer_id: null,
        product_id: null,
        price: null,
        booking_date: new Date().toISOString().slice(0, 10),
        booking_time: "",
        booking_end_time: "",
        status: "pending",
        notes: ""
      }
    };
  },
  methods: {
    submitBooking: function submitBooking() {
      var _this = this;
      this.$refs.ref_create_booking.validate().then(function (success) {
        if (!success) {
          _this.makeToast("danger", _this.$t("Please_fill_the_form_correctly"), _this.$t("Failed"));
        } else {
          _this.createBooking();
        }
      });
    },
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
    createBooking: function createBooking() {
      var _this2 = this;
      this.submitProcessing = true;
      nprogress__WEBPACK_IMPORTED_MODULE_0___default().start();
      nprogress__WEBPACK_IMPORTED_MODULE_0___default().set(0.1);
      var payload = {
        customer_id: this.booking.customer_id,
        product_id: this.booking.product_id,
        price: this.booking.price ? parseFloat(this.booking.price) : null,
        booking_date: this.booking.booking_date,
        booking_time: this.booking.booking_time,
        booking_end_time: this.booking.booking_end_time || null,
        status: this.booking.status,
        notes: this.booking.notes
      };
      axios.post("bookings", payload).then(function () {
        nprogress__WEBPACK_IMPORTED_MODULE_0___default().done();
        _this2.submitProcessing = false;
        _this2.$router.push({
          name: "index_booking"
        });
        _this2.makeToast("success", _this2.$t("Successfully_Created"), _this2.$t("Success"));
      })["catch"](function () {
        nprogress__WEBPACK_IMPORTED_MODULE_0___default().done();
        _this2.makeToast("danger", _this2.$t("InvalidData"), _this2.$t("Failed"));
        _this2.submitProcessing = false;
      });
    },
    loadMeta: function loadMeta() {
      var _this3 = this;
      axios.get("bookings/create").then(function (response) {
        _this3.customers = response.data.customers || [];
        _this3.products = response.data.products || [];
        _this3.isLoading = false;
      })["catch"](function () {
        setTimeout(function () {
          _this3.isLoading = false;
        }, 500);
      });
    },
    onProductChange: function onProductChange(productId) {
      if (productId) {
        var selectedProduct = this.products.find(function (p) {
          return p.id === productId;
        });
        if (selectedProduct && selectedProduct.price) {
          // Prefill price from product, but allow editing
          this.booking.price = selectedProduct.price;
        }
      } else {
        // Clear price if product is deselected
        this.booking.price = null;
      }
    }
  },
  created: function created() {
    this.loadMeta();
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/bookings/store_booking.vue?vue&type=template&id=5ceed9fa":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/bookings/store_booking.vue?vue&type=template&id=5ceed9fa ***!
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
      page: _vm.$t("Create_Booking"),
      folder: _vm.$t("Bookings")
    }
  }), _vm._v(" "), _vm.isLoading ? _c("div", {
    staticClass: "loading_page spinner spinner-primary mr-3"
  }) : _vm._e(), _vm._v(" "), !_vm.isLoading ? _c("validation-observer", {
    ref: "ref_create_booking"
  }, [_c("b-form", {
    on: {
      submit: function submit($event) {
        $event.preventDefault();
        return _vm.submitBooking.apply(null, arguments);
      }
    }
  }, [_c("b-row", [_c("b-col", {
    attrs: {
      lg: "12",
      md: "12",
      sm: "12"
    }
  }, [_c("b-card", [_c("b-row", [_c("b-col", {
    attrs: {
      lg: "4",
      md: "6",
      sm: "12"
    }
  }, [_c("validation-provider", {
    attrs: {
      name: "Customer",
      rules: {
        required: true
      }
    },
    scopedSlots: _vm._u([{
      key: "default",
      fn: function fn(validationContext) {
        return [_c("b-form-group", {
          attrs: {
            label: _vm.$t("Customer") + " *"
          }
        }, [_c("v-select", {
          "class": {
            "is-invalid": validationContext.errors.length
          },
          attrs: {
            state: _vm.getValidationState(validationContext),
            reduce: function reduce(c) {
              return c.id;
            },
            label: "name",
            placeholder: _vm.$t("Choose_Customer"),
            options: _vm.customers
          },
          model: {
            value: _vm.booking.customer_id,
            callback: function callback($$v) {
              _vm.$set(_vm.booking, "customer_id", $$v);
            },
            expression: "booking.customer_id"
          }
        }), _vm._v(" "), _c("b-form-invalid-feedback", [_vm._v("\n                      " + _vm._s(validationContext.errors[0]) + "\n                    ")])], 1)];
      }
    }], null, false, 2330144853)
  })], 1), _vm._v(" "), _c("b-col", {
    attrs: {
      lg: "4",
      md: "6",
      sm: "12"
    }
  }, [_c("validation-provider", {
    attrs: {
      name: "Product"
    },
    scopedSlots: _vm._u([{
      key: "default",
      fn: function fn(validationContext) {
        return [_c("b-form-group", {
          attrs: {
            label: _vm.$t("Product")
          }
        }, [_c("v-select", {
          "class": {
            "is-invalid": validationContext.errors.length
          },
          attrs: {
            state: _vm.getValidationState(validationContext),
            reduce: function reduce(p) {
              return p.id;
            },
            label: "name",
            placeholder: _vm.$t("Choose_Product"),
            options: _vm.products
          },
          on: {
            input: _vm.onProductChange
          },
          model: {
            value: _vm.booking.product_id,
            callback: function callback($$v) {
              _vm.$set(_vm.booking, "product_id", $$v);
            },
            expression: "booking.product_id"
          }
        }), _vm._v(" "), _c("small", {
          staticClass: "text-muted d-block mt-1"
        }, [_c("span", {
          staticClass: "text-muted"
        }, [_vm._v("Only products type service")])]), _vm._v(" "), _c("b-form-invalid-feedback", [_vm._v("\n                      " + _vm._s(validationContext.errors[0]) + "\n                    ")])], 1)];
      }
    }], null, false, 3848273274)
  })], 1), _vm._v(" "), _c("b-col", {
    attrs: {
      lg: "4",
      md: "6",
      sm: "12"
    }
  }, [_c("validation-provider", {
    attrs: {
      name: "Price",
      rules: {
        numeric: true,
        min_value: 0
      }
    },
    scopedSlots: _vm._u([{
      key: "default",
      fn: function fn(validationContext) {
        return [_c("b-form-group", {
          attrs: {
            label: _vm.$t("Price")
          }
        }, [_c("b-form-input", {
          attrs: {
            type: "number",
            step: "0.01",
            min: "0",
            state: _vm.getValidationState(validationContext),
            "aria-describedby": "booking-price-feedback",
            placeholder: _vm.$t("Enter_Price")
          },
          model: {
            value: _vm.booking.price,
            callback: function callback($$v) {
              _vm.$set(_vm.booking, "price", $$v);
            },
            expression: "booking.price"
          }
        }), _vm._v(" "), _c("b-form-invalid-feedback", {
          attrs: {
            id: "booking-price-feedback"
          }
        }, [_vm._v("\n                      " + _vm._s(validationContext.errors[0]) + "\n                    ")])], 1)];
      }
    }], null, false, 3812956915)
  })], 1), _vm._v(" "), _c("b-col", {
    attrs: {
      lg: "4",
      md: "6",
      sm: "12"
    }
  }, [_c("validation-provider", {
    attrs: {
      name: "Booking Date",
      rules: {
        required: true
      }
    },
    scopedSlots: _vm._u([{
      key: "default",
      fn: function fn(validationContext) {
        return [_c("b-form-group", {
          attrs: {
            label: _vm.$t("Date") + " *"
          }
        }, [_c("b-form-input", {
          attrs: {
            type: "date",
            state: _vm.getValidationState(validationContext),
            "aria-describedby": "booking-date-feedback"
          },
          model: {
            value: _vm.booking.booking_date,
            callback: function callback($$v) {
              _vm.$set(_vm.booking, "booking_date", $$v);
            },
            expression: "booking.booking_date"
          }
        }), _vm._v(" "), _c("b-form-invalid-feedback", {
          attrs: {
            id: "booking-date-feedback"
          }
        }, [_vm._v("\n                      " + _vm._s(validationContext.errors[0]) + "\n                    ")])], 1)];
      }
    }], null, false, 1313682042)
  })], 1), _vm._v(" "), _c("b-col", {
    attrs: {
      lg: "4",
      md: "6",
      sm: "12"
    }
  }, [_c("validation-provider", {
    attrs: {
      name: "Start Time",
      rules: {
        required: true
      }
    },
    scopedSlots: _vm._u([{
      key: "default",
      fn: function fn(validationContext) {
        return [_c("b-form-group", {
          attrs: {
            label: _vm.$t("Start_Time") + " *"
          }
        }, [_c("b-form-input", {
          attrs: {
            type: "time",
            state: _vm.getValidationState(validationContext),
            "aria-describedby": "booking-time-feedback"
          },
          model: {
            value: _vm.booking.booking_time,
            callback: function callback($$v) {
              _vm.$set(_vm.booking, "booking_time", $$v);
            },
            expression: "booking.booking_time"
          }
        }), _vm._v(" "), _c("b-form-invalid-feedback", {
          attrs: {
            id: "booking-time-feedback"
          }
        }, [_vm._v("\n                      " + _vm._s(validationContext.errors[0]) + "\n                    ")])], 1)];
      }
    }], null, false, 2814157828)
  })], 1), _vm._v(" "), _c("b-col", {
    attrs: {
      lg: "4",
      md: "6",
      sm: "12"
    }
  }, [_c("validation-provider", {
    attrs: {
      name: "End Time"
    },
    scopedSlots: _vm._u([{
      key: "default",
      fn: function fn(validationContext) {
        return [_c("b-form-group", {
          attrs: {
            label: _vm.$t("End_Time")
          }
        }, [_c("b-form-input", {
          attrs: {
            type: "time",
            state: _vm.getValidationState(validationContext),
            "aria-describedby": "booking-end-time-feedback"
          },
          model: {
            value: _vm.booking.booking_end_time,
            callback: function callback($$v) {
              _vm.$set(_vm.booking, "booking_end_time", $$v);
            },
            expression: "booking.booking_end_time"
          }
        }), _vm._v(" "), _c("b-form-invalid-feedback", {
          attrs: {
            id: "booking-end-time-feedback"
          }
        }, [_vm._v("\n                      " + _vm._s(validationContext.errors[0]) + "\n                    ")])], 1)];
      }
    }], null, false, 3155492698)
  })], 1), _vm._v(" "), _c("b-col", {
    attrs: {
      lg: "4",
      md: "6",
      sm: "12"
    }
  }, [_c("validation-provider", {
    attrs: {
      name: "Status",
      rules: {
        required: true
      }
    },
    scopedSlots: _vm._u([{
      key: "default",
      fn: function fn(validationContext) {
        return [_c("b-form-group", {
          attrs: {
            label: _vm.$t("Status") + " *"
          }
        }, [_c("v-select", {
          "class": {
            "is-invalid": validationContext.errors.length
          },
          attrs: {
            state: _vm.getValidationState(validationContext),
            reduce: function reduce(s) {
              return s.value;
            },
            placeholder: _vm.$t("Choose_Status"),
            options: _vm.statusOptions
          },
          model: {
            value: _vm.booking.status,
            callback: function callback($$v) {
              _vm.$set(_vm.booking, "status", $$v);
            },
            expression: "booking.status"
          }
        }), _vm._v(" "), _c("b-form-invalid-feedback", [_vm._v("\n                      " + _vm._s(validationContext.errors[0]) + "\n                    ")])], 1)];
      }
    }], null, false, 3879769941)
  })], 1), _vm._v(" "), _c("b-col", {
    attrs: {
      lg: "8",
      md: "8",
      sm: "12"
    }
  }, [_c("validation-provider", {
    attrs: {
      name: "Notes"
    },
    scopedSlots: _vm._u([{
      key: "default",
      fn: function fn(validationContext) {
        return [_c("b-form-group", {
          attrs: {
            label: _vm.$t("Details")
          }
        }, [_c("textarea", {
          directives: [{
            name: "model",
            rawName: "v-model",
            value: _vm.booking.notes,
            expression: "booking.notes"
          }],
          staticClass: "form-control",
          "class": {
            "is-invalid": validationContext.errors.length
          },
          attrs: {
            rows: "4",
            state: _vm.getValidationState(validationContext),
            placeholder: _vm.$t("Afewwords")
          },
          domProps: {
            value: _vm.booking.notes
          },
          on: {
            input: function input($event) {
              if ($event.target.composing) return;
              _vm.$set(_vm.booking, "notes", $event.target.value);
            }
          }
        }), _vm._v(" "), _c("b-form-invalid-feedback", [_vm._v("\n                      " + _vm._s(validationContext.errors[0]) + "\n                    ")])], 1)];
      }
    }], null, false, 2673309578)
  })], 1), _vm._v(" "), _c("b-col", {
    attrs: {
      md: "12"
    }
  }, [_c("b-form-group", [_c("b-button", {
    attrs: {
      variant: "primary",
      type: "submit",
      disabled: _vm.submitProcessing
    }
  }, [_c("i", {
    staticClass: "i-Yes me-2 font-weight-bold"
  }), _vm._v("\n                    " + _vm._s(_vm.$t("submit")) + "\n                  ")]), _vm._v(" "), _vm.submitProcessing ? _vm._m(0) : _vm._e()], 1)], 1)], 1)], 1)], 1)], 1)], 1)], 1) : _vm._e()], 1);
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

/***/ "./resources/src/views/app/pages/bookings/store_booking.vue":
/*!******************************************************************!*\
  !*** ./resources/src/views/app/pages/bookings/store_booking.vue ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _store_booking_vue_vue_type_template_id_5ceed9fa__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./store_booking.vue?vue&type=template&id=5ceed9fa */ "./resources/src/views/app/pages/bookings/store_booking.vue?vue&type=template&id=5ceed9fa");
/* harmony import */ var _store_booking_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./store_booking.vue?vue&type=script&lang=js */ "./resources/src/views/app/pages/bookings/store_booking.vue?vue&type=script&lang=js");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _store_booking_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _store_booking_vue_vue_type_template_id_5ceed9fa__WEBPACK_IMPORTED_MODULE_0__.render,
  _store_booking_vue_vue_type_template_id_5ceed9fa__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) // removed by dead control flow
{ var api; }
component.options.__file = "resources/src/views/app/pages/bookings/store_booking.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/src/views/app/pages/bookings/store_booking.vue?vue&type=script&lang=js":
/*!******************************************************************************************!*\
  !*** ./resources/src/views/app/pages/bookings/store_booking.vue?vue&type=script&lang=js ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_store_booking_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./store_booking.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/bookings/store_booking.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_store_booking_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/src/views/app/pages/bookings/store_booking.vue?vue&type=template&id=5ceed9fa":
/*!************************************************************************************************!*\
  !*** ./resources/src/views/app/pages/bookings/store_booking.vue?vue&type=template&id=5ceed9fa ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_store_booking_vue_vue_type_template_id_5ceed9fa__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_store_booking_vue_vue_type_template_id_5ceed9fa__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_store_booking_vue_vue_type_template_id_5ceed9fa__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./store_booking.vue?vue&type=template&id=5ceed9fa */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/bookings/store_booking.vue?vue&type=template&id=5ceed9fa");


/***/ })

}]);