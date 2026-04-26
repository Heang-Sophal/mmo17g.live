"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["woo-stock-tab"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/settings/woocommerce/StockTab.vue?vue&type=script&lang=js":
/*!*****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/settings/woocommerce/StockTab.vue?vue&type=script&lang=js ***!
  \*****************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      syncing: false,
      stopping: false,
      refreshing: false,
      resetting: false,
      token: '',
      poller: null,
      progress: {
        total_products: 0,
        processed: 0,
        synced_products: 0,
        failed_products: 0,
        percentage: 0
      },
      metrics: {
        in_stock: 0,
        out_stock: 0,
        last_sync: null
      },
      autoSync: false
    };
  },
  computed: {
    displayTotal: function displayTotal() {
      var _this$progress$total_, _this$progress;
      var v = Number((_this$progress$total_ = (_this$progress = this.progress) === null || _this$progress === void 0 ? void 0 : _this$progress.total_products) !== null && _this$progress$total_ !== void 0 ? _this$progress$total_ : 0);
      return Number.isFinite(v) ? v : 0;
    },
    displayProcessed: function displayProcessed() {
      var _this$progress2, _this$progress$synced, _this$progress3, _this$progress$failed, _this$progress4;
      var direct = Number((_this$progress2 = this.progress) === null || _this$progress2 === void 0 ? void 0 : _this$progress2.processed);
      if (Number.isFinite(direct) && direct > 0) return direct;
      var s = Number((_this$progress$synced = (_this$progress3 = this.progress) === null || _this$progress3 === void 0 ? void 0 : _this$progress3.synced_products) !== null && _this$progress$synced !== void 0 ? _this$progress$synced : 0);
      var f = Number((_this$progress$failed = (_this$progress4 = this.progress) === null || _this$progress4 === void 0 ? void 0 : _this$progress4.failed_products) !== null && _this$progress$failed !== void 0 ? _this$progress$failed : 0);
      var p = (Number.isFinite(s) ? s : 0) + (Number.isFinite(f) ? f : 0);
      return p;
    },
    displayPercentage: function displayPercentage() {
      var _this$progress5;
      var direct = Number((_this$progress5 = this.progress) === null || _this$progress5 === void 0 ? void 0 : _this$progress5.percentage);
      if (Number.isFinite(direct) && direct > 0) return Math.max(0, Math.min(100, direct));
      var total = this.displayTotal;
      var processed = this.displayProcessed;
      if (!total) return 0;
      return Math.max(0, Math.min(100, Math.floor(processed / total * 100)));
    }
  },
  methods: {
    load: function load() {
      return this.fetchMetrics();
    },
    fetchMetrics: function fetchMetrics() {
      var _this = this;
      return axios.get('woocommerce/stock-metrics').then(function (_ref) {
        var data = _ref.data;
        _this.metrics = data || {
          in_stock: 0,
          out_stock: 0,
          last_sync: null
        };
      })["catch"](function () {
        _this.metrics = {
          in_stock: 0,
          out_stock: 0,
          last_sync: null
        };
      });
    },
    syncStock: function syncStock() {
      var _this2 = this;
      if (this.syncing) return;
      this.syncing = true;
      this.stopping = false;
      this.refreshing = false;
      this.lastProgressSignature = '';
      this.lastProgressChangeAt = Date.now();
      this.progress = {
        total_products: 0,
        processed: 0,
        synced_products: 0,
        failed_products: 0,
        percentage: 0
      };
      axios.post('woocommerce/sync/stock').then(function (_ref2) {
        var data = _ref2.data;
        if (data.ok && data.token) {
          _this2.token = data.token;
          _this2.startPolling();
        } else {
          _this2.toast('danger', _this2.$t('Sync_Failed'));
          _this2.syncing = false;
        }
      })["catch"](function () {
        _this2.toast('danger', _this2.$t('Sync_Failed'));
        _this2.syncing = false;
      });
    },
    stopStock: function stopStock() {
      var _this3 = this;
      if (!this.token || this.stopping) return;
      this.stopping = true;
      axios.post('woocommerce/sync/stock/stop', {
        token: this.token
      })["catch"](function () {})["finally"](function () {
        // Let polling observe finished/cancelled state.
        _this3.stopping = false;
      });
    },
    startPolling: function startPolling() {
      if (this.poller) clearInterval(this.poller);
      this.poller = setInterval(this.fetchProgress, 5000);
      this.fetchProgress();
    },
    fetchProgress: function fetchProgress() {
      var _this4 = this;
      if (this.refreshing) return;
      if (!this.token) {
        this.syncing = false;
        if (this.poller) {
          clearInterval(this.poller);
          this.poller = null;
        }
        return;
      }
      this.refreshing = true;
      axios.get('woocommerce/sync/stock/progress', {
        params: {
          token: this.token
        }
      }).then(function (_ref3) {
        var data = _ref3.data;
        if (data && data.state) {
          _this4.progress = data.state;
          if (_this4.progress.finished) {
            clearInterval(_this4.poller);
            _this4.poller = null;
            _this4.token = '';
            _this4.syncing = false;
            _this4.progress = {
              total_products: 0,
              processed: 0,
              synced_products: 0,
              failed_products: 0,
              percentage: 0
            };
            var hadError = !!(data.state && data.state.error);
            _this4.toast(hadError ? 'danger' : 'success', hadError ? _this4.$t('Sync_Failed') : _this4.$t('Sync_Completed'));
            _this4.fetchMetrics();
            _this4.$emit('refreshed');
          }
        } else {
          // Token expired or invalid, stop polling
          clearInterval(_this4.poller);
          _this4.poller = null;
          _this4.token = '';
          _this4.syncing = false;
          _this4.progress = {
            total_products: 0,
            processed: 0,
            synced_products: 0,
            failed_products: 0,
            percentage: 0
          };
        }
      })["catch"](function () {
        // On error, stop polling and reset state
        clearInterval(_this4.poller);
        _this4.poller = null;
        _this4.token = '';
        _this4.syncing = false;
        _this4.progress = {
          total_products: 0,
          processed: 0,
          synced_products: 0,
          failed_products: 0,
          percentage: 0
        };
      })["finally"](function () {
        _this4.refreshing = false;
      });
    },
    toast: function toast(variant, msg) {
      this.$root.$bvToast.toast(msg, {
        title: this.$t('WooCommerce'),
        variant: variant,
        solid: true
      });
    },
    formatDate: function formatDate(v) {
      return v ? moment__WEBPACK_IMPORTED_MODULE_0___default()(v).format('YYYY-MM-DD HH:mm') : '';
    },
    resetSync: function resetSync() {
      var _this5 = this;
      if (this.resetting) return;
      this.resetting = true;
      axios.post('woocommerce/reset-stock-sync').then(function () {
        _this5.toast('success', _this5.$t('Successfully_Updated'));
        _this5.load();
        _this5.$emit('refreshed');
      })["catch"](function () {
        _this5.toast('danger', _this5.$t('Sync_Failed'));
      })["finally"](function () {
        _this5.resetting = false;
      });
    }
  },
  created: function created() {
    var _this6 = this;
    // Reset any stale state on component creation
    this.syncing = false;
    this.token = '';
    if (this.poller) {
      clearInterval(this.poller);
      this.poller = null;
    }
    this.progress = {
      total_products: 0,
      synced_products: 0,
      failed_products: 0,
      percentage: 0
    };
    this.load()["finally"](function () {
      _this6.$emit('ready');
    });
  },
  beforeDestroy: function beforeDestroy() {
    if (this.poller) {
      clearInterval(this.poller);
      this.poller = null;
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/settings/woocommerce/StockTab.vue?vue&type=template&id=4d1afc9b&scoped=true":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/settings/woocommerce/StockTab.vue?vue&type=template&id=4d1afc9b&scoped=true ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render),
/* harmony export */   staticRenderFns: () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", [_c("div", {
    staticClass: "stats-dashboard"
  }, [_c("div", {
    staticClass: "stat-card in-stock"
  }, [_vm._m(0), _vm._v(" "), _c("div", {
    staticClass: "stat-content"
  }, [_c("div", {
    staticClass: "stat-value"
  }, [_vm._v(_vm._s(_vm.metrics.in_stock))]), _vm._v(" "), _c("div", {
    staticClass: "stat-label"
  }, [_vm._v(_vm._s(_vm.$t("In_Stock")))])]), _vm._v(" "), _c("div", {
    staticClass: "stat-decoration"
  })]), _vm._v(" "), _c("div", {
    staticClass: "stat-card out-stock"
  }, [_vm._m(1), _vm._v(" "), _c("div", {
    staticClass: "stat-content"
  }, [_c("div", {
    staticClass: "stat-value"
  }, [_vm._v(_vm._s(_vm.metrics.out_stock))]), _vm._v(" "), _c("div", {
    staticClass: "stat-label"
  }, [_vm._v(_vm._s(_vm.$t("Out_of_Stock")))])]), _vm._v(" "), _c("div", {
    staticClass: "stat-decoration"
  })])]), _vm._v(" "), _c("b-card", {
    staticClass: "action-card shadow-sm"
  }, [_c("div", {
    staticClass: "d-flex flex-wrap align-items-center"
  }, [_c("b-button", {
    staticClass: "btn-action-primary mr-3 mb-2 d-inline-flex align-items-center",
    attrs: {
      variant: "primary",
      disabled: _vm.syncing
    },
    on: {
      click: _vm.syncStock
    }
  }, [!_vm.syncing ? [_c("i", {
    staticClass: "i-Play-Button mr-2"
  }), _vm._v("\n          " + _vm._s(_vm.$t("Sync_Stock_Now")) + "\n        ")] : [_c("span", {
    staticClass: "mini-spinner mr-2"
  }), _vm._v("\n          " + _vm._s(_vm.$t("Syncing")) + "\n        ")]], 2), _vm._v(" "), _vm.syncing && _vm.token ? _c("b-button", {
    staticClass: "btn-action-warning mr-2 mb-2",
    attrs: {
      variant: "warning",
      size: "sm",
      disabled: _vm.stopping
    },
    on: {
      click: _vm.stopStock
    }
  }, [_c("i", {
    staticClass: "i-Stop mr-1"
  }), _vm._v(" "), !_vm.stopping ? _c("span", [_vm._v(_vm._s(_vm.$t("Stop") || "Stop"))]) : _c("span", [_vm._v(_vm._s(_vm.$t("Stopping") || "Stopping") + "...")])]) : _vm._e(), _vm._v(" "), _c("b-button", {
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
  }), _vm._v(" "), !_vm.resetting ? _c("span", [_vm._v(_vm._s(_vm.$t("Reset_Sync_State")))]) : _c("span", [_vm._v(_vm._s(_vm.$t("Resetting")) + "...")])]), _vm._v(" "), _c("b-button", {
    staticClass: "ml-auto mb-2 btn-action-refresh",
    attrs: {
      variant: "outline-secondary",
      size: "sm"
    },
    on: {
      click: function click($event) {
        return _vm.$emit("refreshed");
      }
    }
  }, [_c("i", {
    staticClass: "i-Reload mr-1"
  }), _vm._v("\n        " + _vm._s(_vm.$t("Refresh")) + "\n      ")])], 1)]), _vm._v(" "), _vm.syncing && !_vm.progress.finished ? _c("b-card", {
    staticClass: "progress-card shadow-sm"
  }, [_c("div", {
    staticClass: "progress-header mb-3"
  }, [_c("h6", {
    staticClass: "mb-0 font-weight-bold"
  }, [_c("i", {
    staticClass: "i-Loading-3 mr-2 text-primary"
  }), _vm._v("\n        " + _vm._s(_vm.$t("Syncing_Products")) + "\n      ")])]), _vm._v(" "), _c("b-progress", {
    staticClass: "progress-modern mb-3",
    attrs: {
      value: _vm.displayPercentage,
      max: 100,
      height: "32px",
      "show-progress": "",
      animated: ""
    }
  }, [_c("span", {
    staticClass: "progress-text"
  }, [_vm._v("\n        " + _vm._s(_vm.displayPercentage) + "%\n        "), _vm.displayTotal > 0 ? _c("span", [_vm._v(" (" + _vm._s(_vm.displayProcessed) + "/" + _vm._s(_vm.displayTotal) + ")")]) : _vm._e()])]), _vm._v(" "), _vm.progress.failed_products > 0 ? _c("div", {
    staticClass: "progress-details"
  }, [_c("div", {
    staticClass: "progress-detail-item"
  }, [_c("i", {
    staticClass: "i-Close mr-2 text-danger"
  }), _vm._v(" "), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.$t("Errors")) + ": " + _vm._s(_vm.progress.failed_products))]), _vm._v(" "), _c("b-link", {
    staticClass: "ml-2",
    on: {
      click: function click($event) {
        return _vm.$emit("view-logs");
      }
    }
  }, [_c("i", {
    staticClass: "i-File-Clipboard-Text-Image mr-1"
  }), _vm._v("\n          " + _vm._s(_vm.$t("View_Logs")) + "\n        ")])], 1)]) : _vm._e()], 1) : _vm._e()], 1);
};
var staticRenderFns = [function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "stat-icon-wrapper"
  }, [_c("i", {
    staticClass: "i-Check-2 stat-icon"
  })]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "stat-icon-wrapper"
  }, [_c("i", {
    staticClass: "i-Close stat-icon"
  })]);
}];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-8.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-8.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/settings/woocommerce/StockTab.vue?vue&type=style&index=0&id=4d1afc9b&scoped=true&lang=css":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-8.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-8.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/settings/woocommerce/StockTab.vue?vue&type=style&index=0&id=4d1afc9b&scoped=true&lang=css ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, "\n.stats-dashboard[data-v-4d1afc9b] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));\n  gap: 1.5rem;\n  margin-bottom: 2rem;\n}\n.stat-card[data-v-4d1afc9b] {\n  position: relative;\n  background: white;\n  border-radius: 16px;\n  padding: 1.75rem;\n  display: flex;\n  align-items: center;\n  gap: 1.25rem;\n  overflow: hidden;\n  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.06);\n  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);\n}\n.stat-card[data-v-4d1afc9b]:hover {\n  transform: translateY(-8px);\n  box-shadow: 0 12px 32px rgba(0, 0, 0, 0.12);\n}\n.stat-decoration[data-v-4d1afc9b] {\n  position: absolute;\n  width: 120px;\n  height: 120px;\n  border-radius: 50%;\n  opacity: 0.08;\n  top: -30px;\n  right: -30px;\n}\n.stat-icon-wrapper[data-v-4d1afc9b] {\n  width: 64px;\n  height: 64px;\n  border-radius: 14px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  position: relative;\n  z-index: 1;\n  flex-shrink: 0;\n}\n.stat-icon[data-v-4d1afc9b] {\n  font-size: 28px;\n  color: white;\n}\n.stat-content[data-v-4d1afc9b] {\n  flex: 1;\n  z-index: 1;\n}\n.stat-value[data-v-4d1afc9b] {\n  font-size: 2.25rem;\n  font-weight: 800;\n  line-height: 1;\n  margin-bottom: 0.5rem;\n  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n  background-clip: text;\n}\n.stat-value-small[data-v-4d1afc9b] {\n  font-size: 1.5rem;\n  font-weight: 800;\n  line-height: 1;\n  margin-bottom: 0.5rem;\n  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n  background-clip: text;\n}\n.stat-label[data-v-4d1afc9b] {\n  font-size: 0.9rem;\n  font-weight: 600;\n  color: #64748b;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.stat-card.in-stock .stat-icon-wrapper[data-v-4d1afc9b] {\n  background: linear-gradient(135deg, #10b981 0%, #059669 100%);\n}\n.stat-card.in-stock .stat-decoration[data-v-4d1afc9b] {\n  background: #10b981;\n}\n.stat-card.in-stock .stat-value[data-v-4d1afc9b] {\n  background: linear-gradient(135deg, #10b981 0%, #059669 100%);\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n  background-clip: text;\n}\n.stat-card.out-stock .stat-icon-wrapper[data-v-4d1afc9b] {\n  background: linear-gradient(135deg, #ef4444 0%, #dc2626 100%);\n}\n.stat-card.out-stock .stat-decoration[data-v-4d1afc9b] {\n  background: #ef4444;\n}\n.stat-card.out-stock .stat-value[data-v-4d1afc9b] {\n  background: linear-gradient(135deg, #ef4444 0%, #dc2626 100%);\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n  background-clip: text;\n}\n.action-card[data-v-4d1afc9b] {\n  border-radius: 12px;\n  border: none;\n  padding: 1.5rem;\n  background: #f8f9fa;\n}\n.btn-action-primary[data-v-4d1afc9b] {\n  border-radius: 8px;\n  padding: 0.75rem 1.5rem;\n  font-weight: 600;\n  box-shadow: 0 4px 12px rgba(0, 123, 255, 0.3);\n  transition: all 0.3s ease;\n}\n.btn-action-primary[data-v-4d1afc9b]:hover:not(:disabled) {\n  transform: translateY(-2px);\n  box-shadow: 0 6px 16px rgba(0, 123, 255, 0.4);\n}\n.btn-action-warning[data-v-4d1afc9b],\n.btn-action-refresh[data-v-4d1afc9b],\n.btn-action-danger[data-v-4d1afc9b] {\n  border-radius: 8px;\n  font-weight: 600;\n  transition: all 0.3s ease;\n}\n.btn-action-warning[data-v-4d1afc9b]:hover:not(:disabled),\n.btn-action-refresh[data-v-4d1afc9b]:hover:not(:disabled),\n.btn-action-danger[data-v-4d1afc9b]:hover:not(:disabled) {\n  transform: translateY(-2px);\n}\n.progress-card[data-v-4d1afc9b] {\n  border-radius: 12px;\n  border: none;\n  padding: 1.5rem;\n  background: linear-gradient(135deg, #f8f9ff 0%, #ffffff 100%);\n}\n.progress-header[data-v-4d1afc9b] {\n  display: flex;\n  align-items: center;\n}\n.progress-modern[data-v-4d1afc9b] {\n  border-radius: 10px;\n  overflow: hidden;\n  background: #e9ecef;\n}\n.progress-modern[data-v-4d1afc9b] .progress-bar {\n  background: linear-gradient(90deg, #667eea 0%, #764ba2 100%);\n  border-radius: 10px;\n}\n.progress-text[data-v-4d1afc9b] {\n  font-weight: 700;\n  font-size: 14px;\n  color: white;\n  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);\n}\n.progress-details[data-v-4d1afc9b] {\n  padding-top: 0.5rem;\n}\n.progress-detail-item[data-v-4d1afc9b] {\n  display: flex;\n  align-items: center;\n  font-size: 14px;\n}\n.mini-spinner[data-v-4d1afc9b] {\n  display: inline-block;\n  width: 16px;\n  height: 16px;\n  border: 2px solid rgba(0, 123, 255, 0.2);\n  border-top-color: #007bff;\n  border-radius: 50%;\n  animation: spin-4d1afc9b 0.6s linear infinite;\n}\n@keyframes spin-4d1afc9b {\nto { transform: rotate(360deg);\n}\n}\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-8.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-8.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/settings/woocommerce/StockTab.vue?vue&type=style&index=0&id=4d1afc9b&scoped=true&lang=css":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-8.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-8.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/settings/woocommerce/StockTab.vue?vue&type=style&index=0&id=4d1afc9b&scoped=true&lang=css ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_8_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_8_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_StockTab_vue_vue_type_style_index_0_id_4d1afc9b_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-8.use[1]!../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-8.use[2]!../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./StockTab.vue?vue&type=style&index=0&id=4d1afc9b&scoped=true&lang=css */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-8.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-8.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/settings/woocommerce/StockTab.vue?vue&type=style&index=0&id=4d1afc9b&scoped=true&lang=css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_8_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_8_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_StockTab_vue_vue_type_style_index_0_id_4d1afc9b_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_8_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_8_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_StockTab_vue_vue_type_style_index_0_id_4d1afc9b_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/src/views/app/pages/settings/woocommerce/StockTab.vue":
/*!*************************************************************************!*\
  !*** ./resources/src/views/app/pages/settings/woocommerce/StockTab.vue ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _StockTab_vue_vue_type_template_id_4d1afc9b_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./StockTab.vue?vue&type=template&id=4d1afc9b&scoped=true */ "./resources/src/views/app/pages/settings/woocommerce/StockTab.vue?vue&type=template&id=4d1afc9b&scoped=true");
/* harmony import */ var _StockTab_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./StockTab.vue?vue&type=script&lang=js */ "./resources/src/views/app/pages/settings/woocommerce/StockTab.vue?vue&type=script&lang=js");
/* harmony import */ var _StockTab_vue_vue_type_style_index_0_id_4d1afc9b_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./StockTab.vue?vue&type=style&index=0&id=4d1afc9b&scoped=true&lang=css */ "./resources/src/views/app/pages/settings/woocommerce/StockTab.vue?vue&type=style&index=0&id=4d1afc9b&scoped=true&lang=css");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _StockTab_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _StockTab_vue_vue_type_template_id_4d1afc9b_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render,
  _StockTab_vue_vue_type_template_id_4d1afc9b_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "4d1afc9b",
  null
  
)

/* hot reload */
if (false) // removed by dead control flow
{ var api; }
component.options.__file = "resources/src/views/app/pages/settings/woocommerce/StockTab.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/src/views/app/pages/settings/woocommerce/StockTab.vue?vue&type=script&lang=js":
/*!*************************************************************************************************!*\
  !*** ./resources/src/views/app/pages/settings/woocommerce/StockTab.vue?vue&type=script&lang=js ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_StockTab_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./StockTab.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/settings/woocommerce/StockTab.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_StockTab_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/src/views/app/pages/settings/woocommerce/StockTab.vue?vue&type=style&index=0&id=4d1afc9b&scoped=true&lang=css":
/*!*********************************************************************************************************************************!*\
  !*** ./resources/src/views/app/pages/settings/woocommerce/StockTab.vue?vue&type=style&index=0&id=4d1afc9b&scoped=true&lang=css ***!
  \*********************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_8_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_8_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_StockTab_vue_vue_type_style_index_0_id_4d1afc9b_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/style-loader/dist/cjs.js!../../../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-8.use[1]!../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-8.use[2]!../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./StockTab.vue?vue&type=style&index=0&id=4d1afc9b&scoped=true&lang=css */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-8.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-8.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/settings/woocommerce/StockTab.vue?vue&type=style&index=0&id=4d1afc9b&scoped=true&lang=css");


/***/ }),

/***/ "./resources/src/views/app/pages/settings/woocommerce/StockTab.vue?vue&type=template&id=4d1afc9b&scoped=true":
/*!*******************************************************************************************************************!*\
  !*** ./resources/src/views/app/pages/settings/woocommerce/StockTab.vue?vue&type=template&id=4d1afc9b&scoped=true ***!
  \*******************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_StockTab_vue_vue_type_template_id_4d1afc9b_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_StockTab_vue_vue_type_template_id_4d1afc9b_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_StockTab_vue_vue_type_template_id_4d1afc9b_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./StockTab.vue?vue&type=template&id=4d1afc9b&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/settings/woocommerce/StockTab.vue?vue&type=template&id=4d1afc9b&scoped=true");


/***/ })

}]);