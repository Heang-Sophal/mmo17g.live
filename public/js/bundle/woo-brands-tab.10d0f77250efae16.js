"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["woo-brands-tab"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/settings/woocommerce/BrandsTab.vue?vue&type=script&lang=js":
/*!******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/settings/woocommerce/BrandsTab.vue?vue&type=script&lang=js ***!
  \******************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      activeMiniTab: 0,
      syncing: false,
      resetting: false,
      totalBrands: null,
      unsyncedCount: null,
      pullStats: {
        total_woo: null,
        imported: null,
        not_imported: null
      }
    };
  },
  computed: {
    totalBrandsDisplay: function totalBrandsDisplay() {
      return this.totalBrands != null ? this.totalBrands : '—';
    },
    unsyncedCountDisplay: function unsyncedCountDisplay() {
      return this.unsyncedCount != null ? this.unsyncedCount : '—';
    },
    syncedBrands: function syncedBrands() {
      if (this.totalBrands == null || this.unsyncedCount == null) return null;
      return Math.max(0, (this.totalBrands || 0) - (this.unsyncedCount || 0));
    },
    syncedBrandsDisplay: function syncedBrandsDisplay() {
      return this.syncedBrands != null ? this.syncedBrands : '—';
    },
    unsyncedAvailable: function unsyncedAvailable() {
      return this.unsyncedCount != null && this.unsyncedCount > 0;
    }
  },
  methods: {
    load: function load() {
      var _this = this;
      var p1 = axios.get('brands', {
        params: {
          limit: 1,
          SortField: 'id',
          SortType: 'desc'
        }
      }).then(function (_ref) {
        var data = _ref.data;
        _this.totalBrands = data.totalRows != null ? data.totalRows : null;
      });
      var p2 = axios.get('woocommerce/brands/unsynced-count').then(function (_ref2) {
        var data = _ref2.data;
        _this.unsyncedCount = data.count;
      });
      var p3 = this.loadPullStats();
      return Promise.all([p1, p2, p3]);
    },
    loadPullStats: function loadPullStats() {
      var _this2 = this;
      return axios.get('woocommerce/brands/pull-stats').then(function (_ref3) {
        var data = _ref3.data;
        _this2.pullStats = {
          total_woo: data.total_woo != null ? data.total_woo : null,
          imported: data.imported != null ? data.imported : 0,
          not_imported: data.not_imported != null ? data.not_imported : null
        };
      })["catch"](function () {
        _this2.pullStats = {
          total_woo: null,
          imported: null,
          not_imported: null
        };
      });
    },
    manualSync: function manualSync(mode, onlyUnsynced) {
      var _this3 = this;
      this.syncing = true;
      var m = mode === 'pull' ? 'pull' : 'push';
      var url = "woocommerce/sync/brands?mode=".concat(m);
      if (m === 'push' && onlyUnsynced) url += '&only_unsynced=1';
      axios.post(url).then(function (_ref4) {
        var data = _ref4.data;
        if (data.ok) _this3.toast('success', _this3.$t('Sync_Completed'));else _this3.toast('danger', _this3.$t('Sync_Failed'));
      })["catch"](function () {
        _this3.toast('danger', _this3.$t('Sync_Failed'));
      })["finally"](function () {
        _this3.syncing = false;
        _this3.load();
        _this3.$emit('refreshed');
      });
    },
    toast: function toast(variant, msg) {
      this.$root.$bvToast.toast(msg, {
        title: this.$t('WooCommerce'),
        variant: variant,
        solid: true
      });
    },
    resetSync: function resetSync() {
      var _this4 = this;
      if (this.resetting) return;
      this.resetting = true;
      axios.post('woocommerce/reset-brands-sync').then(function () {
        _this4.toast('success', _this4.$t('Successfully_Updated'));
        _this4.load();
        _this4.$emit('refreshed');
      })["catch"](function () {
        _this4.toast('danger', _this4.$t('Sync_Failed'));
      })["finally"](function () {
        _this4.resetting = false;
      });
    }
  },
  created: function created() {
    var _this5 = this;
    this.load()["finally"](function () {
      _this5.$emit('ready');
    });
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/settings/woocommerce/BrandsTab.vue?vue&type=template&id=bae0e046&scoped=true":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/settings/woocommerce/BrandsTab.vue?vue&type=template&id=bae0e046&scoped=true ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render),
/* harmony export */   staticRenderFns: () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", [_c("b-tabs", {
    attrs: {
      "content-class": "mt-3"
    },
    model: {
      value: _vm.activeMiniTab,
      callback: function callback($$v) {
        _vm.activeMiniTab = $$v;
      },
      expression: "activeMiniTab"
    }
  }, [_c("b-tab", {
    attrs: {
      active: ""
    },
    scopedSlots: _vm._u([{
      key: "title",
      fn: function fn() {
        return [_c("i", {
          staticClass: "i-Arrow-Right mr-2"
        }), _vm._v("\n        Stocky → WooCommerce\n      ")];
      },
      proxy: true
    }])
  }, [_vm._v(" "), _c("div", {
    staticClass: "stats-dashboard"
  }, [_c("div", {
    staticClass: "stat-card total-brands"
  }, [_c("div", {
    staticClass: "stat-icon-wrapper"
  }, [_c("i", {
    staticClass: "i-Tag stat-icon"
  })]), _vm._v(" "), _c("div", {
    staticClass: "stat-content"
  }, [_c("div", {
    staticClass: "stat-value"
  }, [_vm._v(_vm._s(_vm.totalBrandsDisplay))]), _vm._v(" "), _c("div", {
    staticClass: "stat-label"
  }, [_vm._v(_vm._s(_vm.$t("Total_Brands")))])]), _vm._v(" "), _c("div", {
    staticClass: "stat-decoration"
  })]), _vm._v(" "), _c("div", {
    staticClass: "stat-card synced-brands"
  }, [_c("div", {
    staticClass: "stat-icon-wrapper"
  }, [_c("i", {
    staticClass: "i-Check-2 stat-icon"
  })]), _vm._v(" "), _c("div", {
    staticClass: "stat-content"
  }, [_c("div", {
    staticClass: "stat-value"
  }, [_vm._v(_vm._s(_vm.syncedBrandsDisplay))]), _vm._v(" "), _c("div", {
    staticClass: "stat-label"
  }, [_vm._v(_vm._s(_vm.$t("Synced_Brands")))])]), _vm._v(" "), _c("div", {
    staticClass: "stat-decoration"
  })]), _vm._v(" "), _c("div", {
    staticClass: "stat-card unsynced-brands"
  }, [_c("div", {
    staticClass: "stat-icon-wrapper"
  }, [_c("i", {
    staticClass: "i-Pause stat-icon"
  })]), _vm._v(" "), _c("div", {
    staticClass: "stat-content"
  }, [_c("div", {
    staticClass: "stat-value"
  }, [_vm._v(_vm._s(_vm.unsyncedCountDisplay))]), _vm._v(" "), _c("div", {
    staticClass: "stat-label"
  }, [_vm._v(_vm._s(_vm.$t("Not_Synced")))])]), _vm._v(" "), _c("div", {
    staticClass: "stat-decoration"
  })])]), _vm._v(" "), _c("b-card", {
    staticClass: "action-card shadow-sm"
  }, [_c("div", {
    staticClass: "d-flex flex-wrap align-items-center"
  }, [_c("b-button", {
    staticClass: "btn-action-primary mr-3 mb-2 d-inline-flex align-items-center",
    attrs: {
      variant: "info",
      disabled: _vm.syncing
    },
    on: {
      click: function click($event) {
        return _vm.manualSync("push", false);
      }
    }
  }, [!_vm.syncing ? [_c("i", {
    staticClass: "i-Play-Button mr-2"
  }), _vm._v("\n              " + _vm._s(_vm.$t("Run_Manual_Sync_Now")) + "\n            ")] : [_c("span", {
    staticClass: "mini-spinner mr-2"
  }), _vm._v("\n              " + _vm._s(_vm.$t("Syncing")) + "\n            ")]], 2), _vm._v(" "), _c("b-button", {
    staticClass: "btn-action-danger mr-2 mb-2",
    attrs: {
      variant: "danger",
      size: "sm",
      disabled: _vm.resetting
    },
    on: {
      click: _vm.resetSync
    }
  }, [_c("i", {
    staticClass: "i-Reset mr-1"
  }), _vm._v(" "), !_vm.resetting ? _c("span", [_vm._v(_vm._s(_vm.$t("Reset_Sync_State")))]) : _c("span", [_vm._v(_vm._s(_vm.$t("Resetting")) + "...")])])], 1)])], 1), _vm._v(" "), _c("b-tab", {
    scopedSlots: _vm._u([{
      key: "title",
      fn: function fn() {
        return [_c("i", {
          staticClass: "i-Arrow-Left mr-2"
        }), _vm._v("\n        WooCommerce → Stocky\n      ")];
      },
      proxy: true
    }])
  }, [_vm._v(" "), _c("div", {
    staticClass: "stats-dashboard"
  }, [_c("div", {
    staticClass: "stat-card total-brands"
  }, [_c("div", {
    staticClass: "stat-icon-wrapper"
  }, [_c("i", {
    staticClass: "i-Tag stat-icon"
  })]), _vm._v(" "), _c("div", {
    staticClass: "stat-content"
  }, [_c("div", {
    staticClass: "stat-value"
  }, [_vm._v(_vm._s(_vm.pullStats.total_woo != null ? _vm.pullStats.total_woo : "—"))]), _vm._v(" "), _c("div", {
    staticClass: "stat-label"
  }, [_vm._v("Total in WooCommerce")])]), _vm._v(" "), _c("div", {
    staticClass: "stat-decoration"
  })]), _vm._v(" "), _c("div", {
    staticClass: "stat-card synced-brands"
  }, [_c("div", {
    staticClass: "stat-icon-wrapper"
  }, [_c("i", {
    staticClass: "i-Check-2 stat-icon"
  })]), _vm._v(" "), _c("div", {
    staticClass: "stat-content"
  }, [_c("div", {
    staticClass: "stat-value"
  }, [_vm._v(_vm._s(_vm.pullStats.imported != null ? _vm.pullStats.imported : "—"))]), _vm._v(" "), _c("div", {
    staticClass: "stat-label"
  }, [_vm._v("Imported to Stocky")])]), _vm._v(" "), _c("div", {
    staticClass: "stat-decoration"
  })]), _vm._v(" "), _c("div", {
    staticClass: "stat-card unsynced-brands"
  }, [_c("div", {
    staticClass: "stat-icon-wrapper"
  }, [_c("i", {
    staticClass: "i-Download stat-icon"
  })]), _vm._v(" "), _c("div", {
    staticClass: "stat-content"
  }, [_c("div", {
    staticClass: "stat-value"
  }, [_vm._v(_vm._s(_vm.pullStats.not_imported != null ? _vm.pullStats.not_imported : "—"))]), _vm._v(" "), _c("div", {
    staticClass: "stat-label"
  }, [_vm._v("Not Yet Imported")])]), _vm._v(" "), _c("div", {
    staticClass: "stat-decoration"
  })])]), _vm._v(" "), _c("b-card", {
    staticClass: "action-card shadow-sm"
  }, [_c("div", {
    staticClass: "d-flex flex-wrap align-items-center"
  }, [_c("b-button", {
    staticClass: "btn-action-secondary mr-3 mb-2 d-inline-flex align-items-center",
    attrs: {
      variant: "success",
      disabled: _vm.syncing
    },
    on: {
      click: function click($event) {
        return _vm.manualSync("pull", false);
      }
    }
  }, [!_vm.syncing ? [_c("i", {
    staticClass: "i-Play-Button mr-2"
  }), _vm._v("\n              Sync WooCommerce to Stocky\n            ")] : [_c("span", {
    staticClass: "mini-spinner mr-2"
  }), _vm._v("\n              " + _vm._s(_vm.$t("Syncing")) + "\n            ")]], 2), _vm._v(" "), _c("b-button", {
    staticClass: "btn-action-danger mr-2 mb-2",
    attrs: {
      variant: "danger",
      size: "sm",
      disabled: _vm.resetting
    },
    on: {
      click: _vm.resetSync
    }
  }, [_c("i", {
    staticClass: "i-Reset mr-1"
  }), _vm._v(" "), !_vm.resetting ? _c("span", [_vm._v(_vm._s(_vm.$t("Reset_Sync_State")))]) : _c("span", [_vm._v(_vm._s(_vm.$t("Resetting")) + "...")])])], 1)])], 1)], 1)], 1);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-8.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-8.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/settings/woocommerce/BrandsTab.vue?vue&type=style&index=0&id=bae0e046&scoped=true&lang=css":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-8.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-8.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/settings/woocommerce/BrandsTab.vue?vue&type=style&index=0&id=bae0e046&scoped=true&lang=css ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, "\n.stats-dashboard[data-v-bae0e046] {\r\n  display: grid;\r\n  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));\r\n  gap: 1.5rem;\r\n  margin-bottom: 2rem;\n}\n.stat-card[data-v-bae0e046] {\r\n  position: relative;\r\n  background: white;\r\n  border-radius: 16px;\r\n  padding: 1.75rem;\r\n  display: flex;\r\n  align-items: center;\r\n  gap: 1.25rem;\r\n  overflow: hidden;\r\n  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.06);\r\n  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);\n}\n.stat-card[data-v-bae0e046]:hover {\r\n  transform: translateY(-8px);\r\n  box-shadow: 0 12px 32px rgba(0, 0, 0, 0.12);\n}\n.stat-decoration[data-v-bae0e046] {\r\n  position: absolute;\r\n  width: 120px;\r\n  height: 120px;\r\n  border-radius: 50%;\r\n  opacity: 0.08;\r\n  top: -30px;\r\n  right: -30px;\n}\n.stat-icon-wrapper[data-v-bae0e046] {\r\n  width: 64px;\r\n  height: 64px;\r\n  border-radius: 14px;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  position: relative;\r\n  z-index: 1;\r\n  flex-shrink: 0;\n}\n.stat-icon[data-v-bae0e046] {\r\n  font-size: 28px;\r\n  color: white;\n}\n.stat-content[data-v-bae0e046] {\r\n  flex: 1;\r\n  z-index: 1;\n}\n.stat-value[data-v-bae0e046] {\r\n  font-size: 2.25rem;\r\n  font-weight: 800;\r\n  line-height: 1;\r\n  margin-bottom: 0.5rem;\r\n  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);\r\n  -webkit-background-clip: text;\r\n  -webkit-text-fill-color: transparent;\r\n  background-clip: text;\n}\n.stat-label[data-v-bae0e046] {\r\n  font-size: 0.9rem;\r\n  font-weight: 600;\r\n  color: #64748b;\r\n  text-transform: uppercase;\r\n  letter-spacing: 0.5px;\n}\n.stat-card.total-brands .stat-icon-wrapper[data-v-bae0e046] {\r\n  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);\n}\n.stat-card.total-brands .stat-decoration[data-v-bae0e046] {\r\n  background: #667eea;\n}\n.stat-card.synced-brands .stat-icon-wrapper[data-v-bae0e046] {\r\n  background: linear-gradient(135deg, #10b981 0%, #059669 100%);\n}\n.stat-card.synced-brands .stat-decoration[data-v-bae0e046] {\r\n  background: #10b981;\n}\n.stat-card.synced-brands .stat-value[data-v-bae0e046] {\r\n  background: linear-gradient(135deg, #10b981 0%, #059669 100%);\r\n  -webkit-background-clip: text;\r\n  -webkit-text-fill-color: transparent;\r\n  background-clip: text;\n}\n.stat-card.unsynced-brands .stat-icon-wrapper[data-v-bae0e046] {\r\n  background: linear-gradient(135deg, #f59e0b 0%, #d97706 100%);\n}\n.stat-card.unsynced-brands .stat-decoration[data-v-bae0e046] {\r\n  background: #f59e0b;\n}\n.stat-card.unsynced-brands .stat-value[data-v-bae0e046] {\r\n  background: linear-gradient(135deg, #f59e0b 0%, #d97706 100%);\r\n  -webkit-background-clip: text;\r\n  -webkit-text-fill-color: transparent;\r\n  background-clip: text;\n}\n.action-card[data-v-bae0e046] {\r\n  border-radius: 12px;\r\n  border: none;\r\n  padding: 1.5rem;\r\n  background: #f8f9fa;\n}\n.btn-action-primary[data-v-bae0e046] {\r\n  border-radius: 8px;\r\n  padding: 0.75rem 1.5rem;\r\n  font-weight: 600;\r\n  box-shadow: 0 4px 12px rgba(23, 162, 184, 0.3);\r\n  transition: all 0.3s ease;\n}\n.btn-action-primary[data-v-bae0e046]:hover:not(:disabled) {\r\n  transform: translateY(-2px);\r\n  box-shadow: 0 6px 16px rgba(23, 162, 184, 0.4);\n}\n.btn-action-danger[data-v-bae0e046] {\r\n  border-radius: 8px;\r\n  font-weight: 600;\r\n  transition: all 0.3s ease;\n}\n.btn-action-danger[data-v-bae0e046]:hover:not(:disabled) {\r\n  transform: translateY(-2px);\n}\n.mini-spinner[data-v-bae0e046] {\r\n  display: inline-block;\r\n  width: 16px;\r\n  height: 16px;\r\n  border: 2px solid rgba(23, 162, 184, 0.2);\r\n  border-top-color: #17a2b8;\r\n  border-radius: 50%;\r\n  animation: spin-bae0e046 0.6s linear infinite;\n}\n@keyframes spin-bae0e046 {\nto { transform: rotate(360deg);\n}\n}\r\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-8.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-8.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/settings/woocommerce/BrandsTab.vue?vue&type=style&index=0&id=bae0e046&scoped=true&lang=css":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-8.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-8.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/settings/woocommerce/BrandsTab.vue?vue&type=style&index=0&id=bae0e046&scoped=true&lang=css ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_8_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_8_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_BrandsTab_vue_vue_type_style_index_0_id_bae0e046_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-8.use[1]!../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-8.use[2]!../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./BrandsTab.vue?vue&type=style&index=0&id=bae0e046&scoped=true&lang=css */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-8.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-8.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/settings/woocommerce/BrandsTab.vue?vue&type=style&index=0&id=bae0e046&scoped=true&lang=css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_8_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_8_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_BrandsTab_vue_vue_type_style_index_0_id_bae0e046_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_8_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_8_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_BrandsTab_vue_vue_type_style_index_0_id_bae0e046_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/src/views/app/pages/settings/woocommerce/BrandsTab.vue":
/*!**************************************************************************!*\
  !*** ./resources/src/views/app/pages/settings/woocommerce/BrandsTab.vue ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _BrandsTab_vue_vue_type_template_id_bae0e046_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BrandsTab.vue?vue&type=template&id=bae0e046&scoped=true */ "./resources/src/views/app/pages/settings/woocommerce/BrandsTab.vue?vue&type=template&id=bae0e046&scoped=true");
/* harmony import */ var _BrandsTab_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./BrandsTab.vue?vue&type=script&lang=js */ "./resources/src/views/app/pages/settings/woocommerce/BrandsTab.vue?vue&type=script&lang=js");
/* harmony import */ var _BrandsTab_vue_vue_type_style_index_0_id_bae0e046_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./BrandsTab.vue?vue&type=style&index=0&id=bae0e046&scoped=true&lang=css */ "./resources/src/views/app/pages/settings/woocommerce/BrandsTab.vue?vue&type=style&index=0&id=bae0e046&scoped=true&lang=css");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _BrandsTab_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _BrandsTab_vue_vue_type_template_id_bae0e046_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render,
  _BrandsTab_vue_vue_type_template_id_bae0e046_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "bae0e046",
  null
  
)

/* hot reload */
if (false) // removed by dead control flow
{ var api; }
component.options.__file = "resources/src/views/app/pages/settings/woocommerce/BrandsTab.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/src/views/app/pages/settings/woocommerce/BrandsTab.vue?vue&type=script&lang=js":
/*!**************************************************************************************************!*\
  !*** ./resources/src/views/app/pages/settings/woocommerce/BrandsTab.vue?vue&type=script&lang=js ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BrandsTab_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./BrandsTab.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/settings/woocommerce/BrandsTab.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BrandsTab_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/src/views/app/pages/settings/woocommerce/BrandsTab.vue?vue&type=style&index=0&id=bae0e046&scoped=true&lang=css":
/*!**********************************************************************************************************************************!*\
  !*** ./resources/src/views/app/pages/settings/woocommerce/BrandsTab.vue?vue&type=style&index=0&id=bae0e046&scoped=true&lang=css ***!
  \**********************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_8_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_8_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_BrandsTab_vue_vue_type_style_index_0_id_bae0e046_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/style-loader/dist/cjs.js!../../../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-8.use[1]!../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-8.use[2]!../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./BrandsTab.vue?vue&type=style&index=0&id=bae0e046&scoped=true&lang=css */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-8.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-8.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/settings/woocommerce/BrandsTab.vue?vue&type=style&index=0&id=bae0e046&scoped=true&lang=css");


/***/ }),

/***/ "./resources/src/views/app/pages/settings/woocommerce/BrandsTab.vue?vue&type=template&id=bae0e046&scoped=true":
/*!********************************************************************************************************************!*\
  !*** ./resources/src/views/app/pages/settings/woocommerce/BrandsTab.vue?vue&type=template&id=bae0e046&scoped=true ***!
  \********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_BrandsTab_vue_vue_type_template_id_bae0e046_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_BrandsTab_vue_vue_type_template_id_bae0e046_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_BrandsTab_vue_vue_type_template_id_bae0e046_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./BrandsTab.vue?vue&type=template&id=bae0e046&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/settings/woocommerce/BrandsTab.vue?vue&type=template&id=bae0e046&scoped=true");


/***/ })

}]);