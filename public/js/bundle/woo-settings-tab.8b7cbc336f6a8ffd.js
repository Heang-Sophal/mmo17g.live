"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["woo-settings-tab"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/settings/woocommerce/SettingsTab.vue?vue&type=script&lang=js":
/*!********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/settings/woocommerce/SettingsTab.vue?vue&type=script&lang=js ***!
  \********************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! nprogress */ "./node_modules/nprogress/nprogress.js");
/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(nprogress__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_1__);


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      connecting: false,
      connectionOk: null,
      last_sync_at: null,
      form: {
        store_url: '',
        consumer_key: '',
        consumer_secret: '',
        wp_username: '',
        wp_app_password: ''
      },
      urlPattern: /^https?:\/\//
    };
  },
  computed: {
    lastSyncAtFromNow: function lastSyncAtFromNow() {
      return this.last_sync_at ? moment__WEBPACK_IMPORTED_MODULE_1___default()(this.last_sync_at).fromNow() : null;
    },
    connectionBadgeVariant: function connectionBadgeVariant() {
      if (this.connectionOk === true) return 'success';
      if (this.connectionOk === false) return 'danger';
      return 'secondary';
    },
    connectionBadgeText: function connectionBadgeText() {
      if (this.connectionOk === true) return this.$t('Connected');
      if (this.connectionOk === false) return this.$t('Disconnected');
      return this.$t('Unknown');
    },
    connectionIcon: function connectionIcon() {
      if (this.connectionOk === true) return 'i-Check-Circle';
      if (this.connectionOk === false) return 'i-Close-Circle';
      return 'i-Question-Circle';
    }
  },
  methods: {
    getState: function getState(v) {
      return v.validated ? v.valid : null;
    },
    loadSettings: function loadSettings() {
      var _this = this;
      return axios.get('woocommerce/settings').then(function (_ref) {
        var data = _ref.data;
        if (data.settings) {
          _this.form = Object.assign(_this.form, data.settings);
          _this.last_sync_at = data.settings.last_sync_at;
        }
      });
    },
    onSubmit: function onSubmit() {
      var _this2 = this;
      this.$refs.form.validate().then(function (valid) {
        if (!valid) {
          _this2.toast('danger', _this2.$t('Please_fill_the_form_correctly'));
          return;
        }
        nprogress__WEBPACK_IMPORTED_MODULE_0___default().start();
        nprogress__WEBPACK_IMPORTED_MODULE_0___default().set(0.1);
        axios.post('woocommerce/settings', _this2.form).then(function () {
          _this2.toast('success', _this2.$t('Successfully_Updated'));
          nprogress__WEBPACK_IMPORTED_MODULE_0___default().done();
          _this2.$emit('updated');
          _this2.testConnection();
        })["catch"](function () {
          _this2.toast('danger', _this2.$t('InvalidData'));
          nprogress__WEBPACK_IMPORTED_MODULE_0___default().done();
        });
      });
    },
    testConnection: function testConnection() {
      var _this3 = this;
      this.connecting = true;
      axios.post('woocommerce/test-connection').then(function (_ref2) {
        var data = _ref2.data;
        _this3.connectionOk = !!data.ok;
        _this3.$emit('connection', _this3.connectionOk);
        if (data.ok) _this3.toast('success', _this3.$t('Connection_successful'));else _this3.toast('danger', _this3.$t('Connection_failed'));
      })["catch"](function () {
        _this3.connectionOk = false;
        _this3.$emit('connection', false);
        _this3.toast('danger', _this3.$t('Connection_failed'));
      })["finally"](function () {
        _this3.connecting = false;
      });
    },
    toast: function toast(variant, msg) {
      this.$root.$bvToast.toast(msg, {
        title: this.$t('WooCommerce'),
        variant: variant,
        solid: true
      });
    }
  },
  created: function created() {
    var _this4 = this;
    this.loadSettings().then(function () {
      return _this4.testConnection();
    })["finally"](function () {
      _this4.$emit('ready');
    });
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/settings/woocommerce/SettingsTab.vue?vue&type=template&id=fd75fab4&scoped=true":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/settings/woocommerce/SettingsTab.vue?vue&type=template&id=fd75fab4&scoped=true ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render),
/* harmony export */   staticRenderFns: () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", [_c("validation-observer", {
    ref: "form"
  }, [_c("b-card", {
    staticClass: "settings-form-card shadow-sm mb-4",
    scopedSlots: _vm._u([{
      key: "header",
      fn: function fn() {
        return [_c("div", {
          staticClass: "d-flex align-items-center"
        }, [_c("i", {
          staticClass: "i-Gear mr-2 text-primary"
        }), _vm._v(" "), _c("h5", {
          staticClass: "mb-0 font-weight-bold"
        }, [_vm._v("Connection Settings")])])];
      },
      proxy: true
    }])
  }, [_vm._v(" "), _c("b-form", {
    on: {
      submit: function submit($event) {
        $event.preventDefault();
        return _vm.onSubmit.apply(null, arguments);
      }
    }
  }, [_c("b-row", [_c("b-col", {
    staticClass: "mb-3",
    attrs: {
      lg: "6",
      md: "6",
      sm: "12"
    }
  }, [_c("validation-provider", {
    attrs: {
      name: _vm.$t("Store_URL"),
      rules: {
        required: true,
        regex: _vm.urlPattern
      }
    },
    scopedSlots: _vm._u([{
      key: "default",
      fn: function fn(v) {
        return [_c("b-form-group", {
          staticClass: "form-group-modern",
          attrs: {
            label: _vm.$t("Store_URL") + " *"
          }
        }, [_c("div", {
          staticClass: "input-icon-wrapper"
        }, [_c("i", {
          staticClass: "i-Globe input-icon"
        }), _vm._v(" "), _c("b-form-input", {
          staticClass: "form-control-modern",
          attrs: {
            state: _vm.getState(v),
            placeholder: _vm.$t("Enter_Store_URL")
          },
          model: {
            value: _vm.form.store_url,
            callback: function callback($$v) {
              _vm.$set(_vm.form, "store_url", $$v);
            },
            expression: "form.store_url"
          }
        })], 1), _vm._v(" "), _c("b-form-invalid-feedback", [_vm._v(_vm._s(v.errors[0]))])], 1)];
      }
    }])
  })], 1), _vm._v(" "), _c("b-col", {
    staticClass: "mb-3",
    attrs: {
      lg: "6",
      md: "6",
      sm: "12"
    }
  }, [_c("validation-provider", {
    attrs: {
      name: _vm.$t("Consumer_Key"),
      rules: {
        required: true
      }
    },
    scopedSlots: _vm._u([{
      key: "default",
      fn: function fn(v) {
        return [_c("b-form-group", {
          staticClass: "form-group-modern",
          attrs: {
            label: _vm.$t("Consumer_Key") + " *"
          }
        }, [_c("div", {
          staticClass: "input-icon-wrapper"
        }, [_c("i", {
          staticClass: "i-Key input-icon"
        }), _vm._v(" "), _c("b-form-input", {
          staticClass: "form-control-modern",
          attrs: {
            state: _vm.getState(v)
          },
          model: {
            value: _vm.form.consumer_key,
            callback: function callback($$v) {
              _vm.$set(_vm.form, "consumer_key", $$v);
            },
            expression: "form.consumer_key"
          }
        })], 1), _vm._v(" "), _c("b-form-invalid-feedback", [_vm._v(_vm._s(v.errors[0]))])], 1)];
      }
    }])
  })], 1), _vm._v(" "), _c("b-col", {
    staticClass: "mb-3",
    attrs: {
      lg: "6",
      md: "6",
      sm: "12"
    }
  }, [_c("validation-provider", {
    attrs: {
      name: _vm.$t("Consumer_Secret"),
      rules: {
        required: true
      }
    },
    scopedSlots: _vm._u([{
      key: "default",
      fn: function fn(v) {
        return [_c("b-form-group", {
          staticClass: "form-group-modern",
          attrs: {
            label: _vm.$t("Consumer_Secret") + " *"
          }
        }, [_c("div", {
          staticClass: "input-icon-wrapper"
        }, [_c("i", {
          staticClass: "i-Lock input-icon"
        }), _vm._v(" "), _c("b-form-input", {
          staticClass: "form-control-modern",
          attrs: {
            type: "password",
            state: _vm.getState(v)
          },
          model: {
            value: _vm.form.consumer_secret,
            callback: function callback($$v) {
              _vm.$set(_vm.form, "consumer_secret", $$v);
            },
            expression: "form.consumer_secret"
          }
        })], 1), _vm._v(" "), _c("b-form-invalid-feedback", [_vm._v(_vm._s(v.errors[0]))])], 1)];
      }
    }])
  })], 1), _vm._v(" "), _c("b-col", {
    staticClass: "mb-3",
    attrs: {
      lg: "6",
      md: "6",
      sm: "12"
    }
  }, [_c("b-form-group", {
    staticClass: "form-group-modern",
    attrs: {
      label: _vm.$t("WP_Username_Optional")
    }
  }, [_c("div", {
    staticClass: "input-icon-wrapper"
  }, [_c("i", {
    staticClass: "i-User input-icon"
  }), _vm._v(" "), _c("b-form-input", {
    staticClass: "form-control-modern",
    attrs: {
      placeholder: _vm.$t("Enter_WP_Username")
    },
    model: {
      value: _vm.form.wp_username,
      callback: function callback($$v) {
        _vm.$set(_vm.form, "wp_username", $$v);
      },
      expression: "form.wp_username"
    }
  })], 1), _vm._v(" "), _c("small", {
    staticClass: "text-muted form-help-text"
  }, [_c("i", {
    staticClass: "i-Information mr-1"
  }), _vm._v("\n                " + _vm._s(_vm.$t("Used_for_media_upload_fallback")) + "\n              ")])])], 1), _vm._v(" "), _c("b-col", {
    staticClass: "mb-3",
    attrs: {
      lg: "6",
      md: "6",
      sm: "12"
    }
  }, [_c("b-form-group", {
    staticClass: "form-group-modern",
    attrs: {
      label: _vm.$t("WP_Application_Password_Optional")
    }
  }, [_c("div", {
    staticClass: "input-icon-wrapper"
  }, [_c("i", {
    staticClass: "i-Password input-icon"
  }), _vm._v(" "), _c("b-form-input", {
    staticClass: "form-control-modern",
    attrs: {
      type: "password",
      placeholder: _vm.$t("Enter_WP_Application_Password")
    },
    model: {
      value: _vm.form.wp_app_password,
      callback: function callback($$v) {
        _vm.$set(_vm.form, "wp_app_password", $$v);
      },
      expression: "form.wp_app_password"
    }
  })], 1), _vm._v(" "), _c("small", {
    staticClass: "text-muted form-help-text"
  }, [_c("i", {
    staticClass: "i-Information mr-1"
  }), _vm._v("\n                " + _vm._s(_vm.$t("Create_from_WordPress_Profile")) + "\n              ")])])], 1), _vm._v(" "), _c("b-col", {
    staticClass: "mb-3",
    attrs: {
      lg: "6",
      md: "6",
      sm: "12"
    }
  }, [_c("b-form-group", {
    staticClass: "form-group-modern",
    attrs: {
      label: _vm.$t("Connection_Status")
    }
  }, [_c("div", {
    staticClass: "connection-status-wrapper"
  }, [_c("b-badge", {
    staticClass: "connection-status-badge px-3 py-2",
    attrs: {
      variant: _vm.connectionBadgeVariant
    }
  }, [_c("i", {
    staticClass: "mr-2",
    "class": _vm.connectionIcon
  }), _vm._v("\n                  " + _vm._s(_vm.connectionBadgeText) + "\n                ")]), _vm._v(" "), _vm.connecting ? _c("span", {
    staticClass: "mini-spinner ml-3"
  }) : _vm._e()], 1)])], 1), _vm._v(" "), _c("b-col", {
    staticClass: "mt-2",
    attrs: {
      lg: "12",
      md: "12",
      sm: "12"
    }
  }, [_c("div", {
    staticClass: "d-flex flex-wrap align-items-center"
  }, [_c("b-button", {
    staticClass: "btn-modern-primary mr-3 mb-2",
    attrs: {
      variant: "primary",
      type: "submit"
    }
  }, [_c("i", {
    staticClass: "i-Yes mr-2"
  }), _vm._v(" " + _vm._s(_vm.$t("Save")) + "\n              ")]), _vm._v(" "), _c("b-button", {
    staticClass: "btn-modern-outline mr-2 mb-2 d-inline-flex align-items-center",
    attrs: {
      variant: "outline-success",
      disabled: _vm.connecting
    },
    on: {
      click: _vm.testConnection
    }
  }, [!_vm.connecting ? [_c("i", {
    staticClass: "i-Cloud-Check mr-2"
  }), _vm._v(" " + _vm._s(_vm.$t("Test_Connection")) + "\n                ")] : [_c("span", {
    staticClass: "mini-spinner mr-2"
  }), _vm._v("\n                  " + _vm._s(_vm.$t("Testing")) + "\n                ")]], 2)], 1)]), _vm._v(" "), _vm.last_sync_at ? _c("b-col", {
    staticClass: "mt-3",
    attrs: {
      lg: "12",
      md: "12",
      sm: "12"
    }
  }, [_c("b-alert", {
    staticClass: "sync-alert-modern",
    attrs: {
      show: "",
      variant: "light"
    }
  }, [_c("i", {
    staticClass: "i-Clock mr-2"
  }), _vm._v("\n              " + _vm._s(_vm.$t("Last_Sync")) + ": " + _vm._s(_vm.lastSyncAtFromNow) + "\n            ")])], 1) : _vm._e()], 1)], 1)], 1)], 1), _vm._v(" "), _c("b-card", {
    staticClass: "guide-card shadow-sm",
    scopedSlots: _vm._u([{
      key: "header",
      fn: function fn() {
        return [_c("div", {
          staticClass: "d-flex align-items-center"
        }, [_c("i", {
          staticClass: "i-Book mr-2 text-info"
        }), _vm._v(" "), _c("h5", {
          staticClass: "mb-0 font-weight-bold"
        }, [_vm._v("WooCommerce Sync Guide")])])];
      },
      proxy: true
    }])
  }, [_vm._v(" "), _c("b-card-text", [_c("div", {
    staticClass: "guide-section mb-4"
  }, [_c("h6", {
    staticClass: "guide-title"
  }, [_c("i", {
    staticClass: "i-Key mr-2 text-info"
  }), _vm._v("\n          Getting API keys\n        ")]), _vm._v(" "), _c("ul", {
    staticClass: "guide-list"
  }, [_c("li", [_c("i", {
    staticClass: "i-Cursor-Select mr-2 text-primary"
  }), _vm._v("In WooCommerce: WooCommerce → Settings → Advanced → REST API.")]), _vm._v(" "), _c("li", [_c("i", {
    staticClass: "i-Add mr-2 text-primary"
  }), _vm._v("Add key, choose Read/Write, then copy Consumer key and Consumer secret.")]), _vm._v(" "), _c("li", [_c("i", {
    staticClass: "i-Globe mr-2 text-primary"
  }), _vm._v("Store URL: your site URL with no trailing slash (e.g. "), _c("code", [_vm._v("https://yoursite.com")]), _vm._v(").")])])]), _vm._v(" "), _c("div", {
    staticClass: "guide-section mb-4"
  }, [_c("h6", {
    staticClass: "guide-title"
  }, [_c("i", {
    staticClass: "i-User mr-2 text-info"
  }), _vm._v("\n          WP Username and Application Password (optional)\n        ")]), _vm._v(" "), _c("p", {
    staticClass: "guide-intro mb-2"
  }, [_vm._v("These fields are used only for product images. The WooCommerce API (Store URL + Consumer key/secret) handles sync for products, stock, categories, brands, customers, and orders; the WordPress REST API handles the Media Library (search and upload images).")]), _vm._v(" "), _c("ul", {
    staticClass: "guide-list mb-2"
  }, [_c("li", [_c("i", {
    staticClass: "i-Image mr-2 text-primary"
  }), _vm._v("When syncing products or stock, Stocky can attach product images: it first searches the WordPress Media Library for an existing image by filename; if not found, it uploads the image via the WordPress API.")]), _vm._v(" "), _c("li", [_c("i", {
    staticClass: "i-Key mr-2 text-primary"
  }), _vm._v("Use a WordPress user that can manage media (e.g. Administrator). Create an Application Password in WordPress: Users → Profile (or your user) → Application Passwords — add a new one and paste it here.")]), _vm._v(" "), _c("li", [_c("i", {
    staticClass: "i-Information mr-2 text-primary"
  }), _vm._v("If you leave these blank, sync still works for all data (products, stock, categories, brands, customers, orders); only product image attachment (search/upload) is skipped.")])])]), _vm._v(" "), _c("div", {
    staticClass: "guide-section mb-4"
  }, [_c("h6", {
    staticClass: "guide-title"
  }, [_c("i", {
    staticClass: "i-Gear mr-2 text-info"
  }), _vm._v("\n          How to enable\n        ")]), _vm._v(" "), _c("ul", {
    staticClass: "guide-list"
  }, [_c("li", [_c("i", {
    staticClass: "i-Check mr-2 text-success"
  }), _vm._v("Enter Store URL, Consumer key, and Consumer secret above, then click Save.")]), _vm._v(" "), _c("li", [_c("i", {
    staticClass: "i-Cloud-Check mr-2 text-success"
  }), _vm._v("Use Test Connection to verify credentials.")]), _vm._v(" "), _c("li", [_c("i", {
    staticClass: "i-Clock mr-2 text-success"
  }), _vm._v("Use manual sync from any tab when you need to sync.")])])]), _vm._v(" "), _c("div", {
    staticClass: "guide-section mb-4"
  }, [_c("h6", {
    staticClass: "guide-title"
  }, [_c("i", {
    staticClass: "i-Cursor-Click mr-2 text-primary"
  }), _vm._v("\n          Manual sync (on demand)\n        ")]), _vm._v(" "), _c("ul", {
    staticClass: "guide-list"
  }, [_c("li", [_c("i", {
    staticClass: "i-Arrows-Right-Left mr-2 text-primary"
  }), _vm._v("Sync works in both directions: Stocky → WooCommerce and WooCommerce → Stocky.")]), _vm._v(" "), _c("li", [_c("i", {
    staticClass: "i-Menu mr-2 text-primary"
  }), _vm._v("Manual sync is available in all WooCommerce tabs (Products, Stock, etc.); use the sync actions in each tab to run sync on demand.")])])]), _vm._v(" "), _c("div", {
    staticClass: "guide-section"
  }, [_c("h6", {
    staticClass: "guide-title"
  }, [_c("i", {
    staticClass: "i-Information mr-2 text-info"
  }), _vm._v("\n          Notes\n        ")]), _vm._v(" "), _c("ul", {
    staticClass: "guide-list mb-0"
  }, [_c("li", [_c("i", {
    staticClass: "i-Warning-2 mr-2 text-warning"
  }), _vm._v("Changing Store URL or API keys resets mappings (products, categories, brands, customers); items will sync again to the (new) store.")]), _vm._v(" "), _c("li", [_c("i", {
    staticClass: "i-Warning-2 mr-2 text-warning"
  }), _vm._v("Keep SKUs consistent between Stocky and WooCommerce to avoid duplicate products and to relink safely.")])])])])], 1)], 1);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-8.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-8.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/settings/woocommerce/SettingsTab.vue?vue&type=style&index=0&id=fd75fab4&scoped=true&lang=css":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-8.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-8.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/settings/woocommerce/SettingsTab.vue?vue&type=style&index=0&id=fd75fab4&scoped=true&lang=css ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n.settings-form-card[data-v-fd75fab4] {\n  border-radius: 12px;\n  border: none;\n}\n.settings-form-card[data-v-fd75fab4] .card-header {\n  background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);\n  border-bottom: 2px solid #e9ecef;\n  padding: 1.25rem 1.5rem;\n  border-radius: 12px 12px 0 0;\n}\n.form-group-modern[data-v-fd75fab4] {\n  margin-bottom: 0;\n}\n.form-group-modern[data-v-fd75fab4] label {\n  font-weight: 600;\n  color: #495057;\n  margin-bottom: 0.5rem;\n  font-size: 14px;\n}\n.input-icon-wrapper[data-v-fd75fab4] {\n  position: relative;\n}\n.input-icon[data-v-fd75fab4] {\n  position: absolute;\n  left: 12px;\n  top: 50%;\n  transform: translateY(-50%);\n  color: #6c757d;\n  z-index: 1;\n}\n.form-control-modern[data-v-fd75fab4] {\n  padding-left: 40px;\n  border-radius: 8px;\n  border: 1px solid #dee2e6;\n  transition: all 0.3s ease;\n  height: 44px;\n}\n.form-control-modern[data-v-fd75fab4]:focus {\n  border-color: #667eea;\n  box-shadow: 0 0 0 0.2rem rgba(102, 126, 234, 0.15);\n}\n.form-help-text[data-v-fd75fab4] {\n  display: block;\n  margin-top: 0.5rem;\n  font-size: 12px;\n}\n.connection-status-wrapper[data-v-fd75fab4] {\n  display: flex;\n  align-items: center;\n}\n.connection-status-badge[data-v-fd75fab4] {\n  font-size: 14px;\n  font-weight: 600;\n  border-radius: 20px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);\n}\n.btn-modern-primary[data-v-fd75fab4] {\n  border-radius: 8px;\n  padding: 0.6rem 1.5rem;\n  font-weight: 600;\n  box-shadow: 0 4px 12px rgba(102, 126, 234, 0.3);\n  transition: all 0.3s ease;\n}\n.btn-modern-primary[data-v-fd75fab4]:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 6px 16px rgba(102, 126, 234, 0.4);\n}\n.btn-modern-outline[data-v-fd75fab4] {\n  border-radius: 8px;\n  padding: 0.6rem 1.5rem;\n  font-weight: 600;\n  border-width: 2px;\n  transition: all 0.3s ease;\n}\n.btn-modern-outline[data-v-fd75fab4]:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 4px 12px rgba(40, 167, 69, 0.2);\n}\n.sync-alert-modern[data-v-fd75fab4] {\n  border-radius: 8px;\n  border-left: 4px solid #667eea;\n  background: #f8f9ff;\n  padding: 1rem;\n}\n.guide-card[data-v-fd75fab4] {\n  border-radius: 12px;\n  border: none;\n}\n.guide-card[data-v-fd75fab4] .card-header {\n  background: linear-gradient(135deg, #e0f2fe 0%, #bae6fd 100%);\n  border-bottom: 2px solid #e9ecef;\n  padding: 1.25rem 1.5rem;\n  border-radius: 12px 12px 0 0;\n}\n.guide-section[data-v-fd75fab4] {\n  padding-bottom: 1rem;\n  border-bottom: 1px solid #f0f0f0;\n}\n.guide-section[data-v-fd75fab4]:last-child {\n  border-bottom: none;\n}\n.guide-title[data-v-fd75fab4] {\n  font-weight: 700;\n  color: #2d3748;\n  margin-bottom: 0.75rem;\n  font-size: 15px;\n  display: flex;\n  align-items: center;\n}\n.guide-intro[data-v-fd75fab4] {\n  font-size: 13px;\n  color: #4a5568;\n  line-height: 1.6;\n}\n.guide-intro code[data-v-fd75fab4],\n.guide-list code[data-v-fd75fab4] {\n  background: #e2e8f0;\n  color: #1e293b;\n  padding: 0.2em 0.4em;\n  border-radius: 4px;\n  font-size: 12px;\n  font-family: 'Courier New', monospace;\n}\n.guide-list[data-v-fd75fab4] {\n  list-style: none;\n  padding-left: 0;\n  margin-bottom: 0;\n}\n.guide-list li[data-v-fd75fab4] {\n  padding: 0.5rem 0;\n  display: flex;\n  align-items: flex-start;\n  color: #4a5568;\n  line-height: 1.6;\n}\n.code-block-wrapper[data-v-fd75fab4] {\n  margin-top: 0.75rem;\n}\n.code-label[data-v-fd75fab4] {\n  font-weight: 600;\n  color: #495057;\n  font-size: 13px;\n  margin-bottom: 0.5rem;\n  display: block;\n}\n.code-block[data-v-fd75fab4] {\n  background: #1e293b;\n  color: #e2e8f0;\n  border-radius: 8px;\n  padding: 1rem;\n  white-space: pre-wrap;\n  word-break: break-word;\n  font-size: 13px;\n  line-height: 1.6;\n  margin: 0;\n  border: 1px solid #334155;\n  font-family: 'Courier New', monospace;\n  overflow-x: auto;\n}\n.mini-spinner[data-v-fd75fab4] {\n  display: inline-block;\n  width: 16px;\n  height: 16px;\n  border: 2px solid rgba(102, 126, 234, 0.2);\n  border-top-color: #667eea;\n  border-radius: 50%;\n  animation: spin-fd75fab4 0.6s linear infinite;\n}\n@keyframes spin-fd75fab4 {\nto { transform: rotate(360deg);\n}\n}\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-8.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-8.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/settings/woocommerce/SettingsTab.vue?vue&type=style&index=0&id=fd75fab4&scoped=true&lang=css":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-8.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-8.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/settings/woocommerce/SettingsTab.vue?vue&type=style&index=0&id=fd75fab4&scoped=true&lang=css ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_8_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_8_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_SettingsTab_vue_vue_type_style_index_0_id_fd75fab4_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-8.use[1]!../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-8.use[2]!../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./SettingsTab.vue?vue&type=style&index=0&id=fd75fab4&scoped=true&lang=css */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-8.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-8.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/settings/woocommerce/SettingsTab.vue?vue&type=style&index=0&id=fd75fab4&scoped=true&lang=css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_8_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_8_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_SettingsTab_vue_vue_type_style_index_0_id_fd75fab4_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_8_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_8_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_SettingsTab_vue_vue_type_style_index_0_id_fd75fab4_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/src/views/app/pages/settings/woocommerce/SettingsTab.vue":
/*!****************************************************************************!*\
  !*** ./resources/src/views/app/pages/settings/woocommerce/SettingsTab.vue ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _SettingsTab_vue_vue_type_template_id_fd75fab4_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SettingsTab.vue?vue&type=template&id=fd75fab4&scoped=true */ "./resources/src/views/app/pages/settings/woocommerce/SettingsTab.vue?vue&type=template&id=fd75fab4&scoped=true");
/* harmony import */ var _SettingsTab_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SettingsTab.vue?vue&type=script&lang=js */ "./resources/src/views/app/pages/settings/woocommerce/SettingsTab.vue?vue&type=script&lang=js");
/* harmony import */ var _SettingsTab_vue_vue_type_style_index_0_id_fd75fab4_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SettingsTab.vue?vue&type=style&index=0&id=fd75fab4&scoped=true&lang=css */ "./resources/src/views/app/pages/settings/woocommerce/SettingsTab.vue?vue&type=style&index=0&id=fd75fab4&scoped=true&lang=css");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _SettingsTab_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _SettingsTab_vue_vue_type_template_id_fd75fab4_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render,
  _SettingsTab_vue_vue_type_template_id_fd75fab4_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "fd75fab4",
  null
  
)

/* hot reload */
if (false) // removed by dead control flow
{ var api; }
component.options.__file = "resources/src/views/app/pages/settings/woocommerce/SettingsTab.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/src/views/app/pages/settings/woocommerce/SettingsTab.vue?vue&type=script&lang=js":
/*!****************************************************************************************************!*\
  !*** ./resources/src/views/app/pages/settings/woocommerce/SettingsTab.vue?vue&type=script&lang=js ***!
  \****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SettingsTab_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./SettingsTab.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/settings/woocommerce/SettingsTab.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SettingsTab_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/src/views/app/pages/settings/woocommerce/SettingsTab.vue?vue&type=style&index=0&id=fd75fab4&scoped=true&lang=css":
/*!************************************************************************************************************************************!*\
  !*** ./resources/src/views/app/pages/settings/woocommerce/SettingsTab.vue?vue&type=style&index=0&id=fd75fab4&scoped=true&lang=css ***!
  \************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_8_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_8_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_SettingsTab_vue_vue_type_style_index_0_id_fd75fab4_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/style-loader/dist/cjs.js!../../../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-8.use[1]!../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-8.use[2]!../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./SettingsTab.vue?vue&type=style&index=0&id=fd75fab4&scoped=true&lang=css */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-8.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-8.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/settings/woocommerce/SettingsTab.vue?vue&type=style&index=0&id=fd75fab4&scoped=true&lang=css");


/***/ }),

/***/ "./resources/src/views/app/pages/settings/woocommerce/SettingsTab.vue?vue&type=template&id=fd75fab4&scoped=true":
/*!**********************************************************************************************************************!*\
  !*** ./resources/src/views/app/pages/settings/woocommerce/SettingsTab.vue?vue&type=template&id=fd75fab4&scoped=true ***!
  \**********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_SettingsTab_vue_vue_type_template_id_fd75fab4_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_SettingsTab_vue_vue_type_template_id_fd75fab4_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_SettingsTab_vue_vue_type_template_id_fd75fab4_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./SettingsTab.vue?vue&type=template&id=fd75fab4&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/settings/woocommerce/SettingsTab.vue?vue&type=template&id=fd75fab4&scoped=true");


/***/ })

}]);