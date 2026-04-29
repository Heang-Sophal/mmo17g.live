"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["woo-logs-tab"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/settings/woocommerce/LogsTab.vue?vue&type=script&lang=js":
/*!****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/settings/woocommerce/LogsTab.vue?vue&type=script&lang=js ***!
  \****************************************************************************************************************************************************************************************************************************/
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
      processing: false,
      logs: [],
      filterAction: 'all',
      filterStatus: 'all',
      filterFrom: '',
      filterTo: '',
      currentLogPage: 1,
      logsPerPage: 10,
      actionOptions: [{
        label: this.$t('All'),
        value: 'all'
      }, {
        label: this.$t('Product'),
        value: 'products'
      }, {
        label: this.$t('Stock'),
        value: 'stock'
      }, {
        label: this.$t('Order'),
        value: 'orders'
      }],
      statusOptions: [{
        label: this.$t('All'),
        value: 'all'
      }, {
        label: this.$t('Success'),
        value: 'info'
      }, {
        label: this.$t('Warning'),
        value: 'warning'
      }, {
        label: this.$t('Failed'),
        value: 'error'
      }],
      logFields: [{
        key: 'date',
        label: this.$t('date')
      }, {
        key: 'action',
        label: this.$t('Action')
      }, {
        key: 'direction',
        label: this.$t('Direction')
      }, {
        key: 'status',
        label: this.$t('Status')
      }, {
        key: 'message',
        label: this.$t('Message')
      }]
    };
  },
  computed: {
    filteredLogs: function filteredLogs() {
      var _this = this;
      var out = Array.isArray(this.logs) ? this.logs.slice() : [];
      if (this.filterAction !== 'all') out = out.filter(function (l) {
        return (l.action || '').startsWith(_this.filterAction);
      });
      if (this.filterStatus !== 'all') out = out.filter(function (l) {
        return (l.level || '') === _this.filterStatus;
      });
      if (this.filterFrom) {
        var from = new Date(this.filterFrom + 'T00:00:00');
        out = out.filter(function (l) {
          return new Date(l.created_at) >= from;
        });
      }
      if (this.filterTo) {
        var to = new Date(this.filterTo + 'T23:59:59');
        out = out.filter(function (l) {
          return new Date(l.created_at) <= to;
        });
      }
      out.sort(function (a, b) {
        return new Date(b.created_at) - new Date(a.created_at);
      });
      return out;
    },
    pagedLogs: function pagedLogs() {
      var start = (this.currentLogPage - 1) * this.logsPerPage;
      return this.filteredLogs.slice(start, start + this.logsPerPage);
    }
  },
  methods: {
    load: function load() {
      var _this2 = this;
      return axios.get('woocommerce/logs').then(function (_ref) {
        var data = _ref.data;
        _this2.logs = data.data || [];
      });
    },
    clearLogs: function clearLogs() {
      var _this3 = this;
      this.processing = true;
      axios["delete"]('woocommerce/logs').then(function () {
        _this3.toast('success', _this3.$t('Successfully_Updated'));
        _this3.load();
      })["catch"](function () {
        _this3.toast('danger', _this3.$t('Not_Available'));
      })["finally"](function () {
        _this3.processing = false;
      });
    },
    formatDate: function formatDate(val) {
      return val ? moment__WEBPACK_IMPORTED_MODULE_0___default()(val).format('YYYY-MM-DD HH:mm') : '';
    },
    formatAction: function formatAction(action) {
      if (!action) return '';
      var key = String(action).split('.')[0];
      if (key === 'products') return this.$t('Product');
      if (key === 'orders') return this.$t('Order');
      if (key === 'stock') return this.$t('Stock');
      return key;
    },
    formatDirection: function formatDirection(action) {
      var key = String(action || '').split('.')[0];
      if (key === 'orders') return this.$t('WooCommerce_to_POS');
      return this.$t('POS_to_WooCommerce');
    },
    levelToVariant: function levelToVariant(level) {
      if (level === 'error') return 'danger';
      if (level === 'warning') return 'warning';
      return 'success';
    },
    formatStatus: function formatStatus(level) {
      if (level === 'error') return this.$t('Failed');
      if (level === 'warning') return this.$t('Warning');
      return this.$t('Success');
    },
    getDirectionIcon: function getDirectionIcon(action) {
      var key = String(action || '').split('.')[0];
      return key === 'orders' ? 'i-Arrow-Left' : 'i-Arrow-Right';
    },
    getStatusIcon: function getStatusIcon(level) {
      if (level === 'error') return 'i-Close-Circle';
      if (level === 'warning') return 'i-Warning-2';
      return 'i-Check-Circle';
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
    this.load()["finally"](function () {
      _this4.$emit('ready');
    });
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/settings/woocommerce/LogsTab.vue?vue&type=template&id=605fdccc&scoped=true":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/settings/woocommerce/LogsTab.vue?vue&type=template&id=605fdccc&scoped=true ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render),
/* harmony export */   staticRenderFns: () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", [_c("b-card", {
    staticClass: "filters-card shadow-sm mb-4",
    scopedSlots: _vm._u([{
      key: "header",
      fn: function fn() {
        return [_c("div", {
          staticClass: "d-flex align-items-center"
        }, [_c("i", {
          staticClass: "i-Filter-2 mr-2 text-primary"
        }), _vm._v(" "), _c("h6", {
          staticClass: "mb-0 font-weight-bold"
        }, [_vm._v("Filter Logs")])])];
      },
      proxy: true
    }])
  }, [_vm._v(" "), _c("b-row", [_c("b-col", {
    staticClass: "mb-3",
    attrs: {
      md: "3",
      sm: "6"
    }
  }, [_c("b-form-group", {
    staticClass: "form-group-modern",
    attrs: {
      label: _vm.$t("Action")
    }
  }, [_c("v-select", {
    staticClass: "v-select-modern",
    attrs: {
      options: _vm.actionOptions,
      reduce: function reduce(o) {
        return o.value;
      },
      clearable: false
    },
    model: {
      value: _vm.filterAction,
      callback: function callback($$v) {
        _vm.filterAction = $$v;
      },
      expression: "filterAction"
    }
  })], 1)], 1), _vm._v(" "), _c("b-col", {
    staticClass: "mb-3",
    attrs: {
      md: "3",
      sm: "6"
    }
  }, [_c("b-form-group", {
    staticClass: "form-group-modern",
    attrs: {
      label: _vm.$t("Status")
    }
  }, [_c("v-select", {
    staticClass: "v-select-modern",
    attrs: {
      options: _vm.statusOptions,
      reduce: function reduce(o) {
        return o.value;
      },
      clearable: false
    },
    model: {
      value: _vm.filterStatus,
      callback: function callback($$v) {
        _vm.filterStatus = $$v;
      },
      expression: "filterStatus"
    }
  })], 1)], 1), _vm._v(" "), _c("b-col", {
    staticClass: "mb-3",
    attrs: {
      md: "3",
      sm: "6"
    }
  }, [_c("b-form-group", {
    staticClass: "form-group-modern",
    attrs: {
      label: _vm.$t("From")
    }
  }, [_c("b-form-input", {
    staticClass: "form-control-modern",
    attrs: {
      type: "date"
    },
    model: {
      value: _vm.filterFrom,
      callback: function callback($$v) {
        _vm.filterFrom = $$v;
      },
      expression: "filterFrom"
    }
  })], 1)], 1), _vm._v(" "), _c("b-col", {
    staticClass: "mb-3",
    attrs: {
      md: "3",
      sm: "6"
    }
  }, [_c("b-form-group", {
    staticClass: "form-group-modern",
    attrs: {
      label: _vm.$t("To")
    }
  }, [_c("b-form-input", {
    staticClass: "form-control-modern",
    attrs: {
      type: "date"
    },
    model: {
      value: _vm.filterTo,
      callback: function callback($$v) {
        _vm.filterTo = $$v;
      },
      expression: "filterTo"
    }
  })], 1)], 1)], 1)], 1), _vm._v(" "), _c("b-card", {
    staticClass: "logs-card shadow-sm",
    scopedSlots: _vm._u([{
      key: "header",
      fn: function fn() {
        return [_c("div", {
          staticClass: "d-flex align-items-center justify-content-between"
        }, [_c("div", {
          staticClass: "d-flex align-items-center"
        }, [_c("i", {
          staticClass: "i-File-Clipboard-Text-Image mr-2 text-primary"
        }), _vm._v(" "), _c("h6", {
          staticClass: "mb-0 font-weight-bold"
        }, [_vm._v("Sync Logs")]), _vm._v(" "), _c("b-badge", {
          staticClass: "ml-3",
          attrs: {
            variant: "light"
          }
        }, [_vm._v(_vm._s(_vm.filteredLogs.length) + " entries")])], 1), _vm._v(" "), _c("div", [_c("b-button", {
          staticClass: "btn-action-refresh mr-2",
          attrs: {
            size: "sm",
            variant: "outline-secondary"
          },
          on: {
            click: _vm.load
          }
        }, [_c("i", {
          staticClass: "i-Reload mr-1"
        }), _vm._v("\n            " + _vm._s(_vm.$t("Refresh")) + "\n          ")]), _vm._v(" "), _c("b-button", {
          staticClass: "btn-action-danger",
          attrs: {
            size: "sm",
            variant: "danger",
            disabled: _vm.processing
          },
          on: {
            click: _vm.clearLogs
          }
        }, [_c("i", {
          staticClass: "i-Trash-2 mr-1"
        }), _vm._v("\n            " + _vm._s(_vm.$t("Clear_Logs")) + "\n          ")])], 1)])];
      },
      proxy: true
    }])
  }, [_vm._v(" "), _c("b-table", {
    staticClass: "logs-table",
    attrs: {
      items: _vm.pagedLogs,
      fields: _vm.logFields,
      small: "",
      responsive: "sm",
      "thead-class": "logs-table-header"
    },
    scopedSlots: _vm._u([{
      key: "cell(date)",
      fn: function fn(_ref) {
        var item = _ref.item;
        return [_c("div", {
          staticClass: "d-flex align-items-center"
        }, [_c("i", {
          staticClass: "i-Calendar mr-2 text-muted"
        }), _vm._v("\n          " + _vm._s(_vm.formatDate(item.created_at)) + "\n        ")])];
      }
    }, {
      key: "cell(action)",
      fn: function fn(_ref2) {
        var item = _ref2.item;
        return [_c("div", {
          staticClass: "d-flex align-items-center"
        }, [_c("i", {
          staticClass: "i-Box mr-2 text-primary"
        }), _vm._v("\n          " + _vm._s(_vm.formatAction(item.action)) + "\n        ")])];
      }
    }, {
      key: "cell(direction)",
      fn: function fn(_ref3) {
        var item = _ref3.item;
        return [_c("div", {
          staticClass: "d-flex align-items-center"
        }, [_c("i", {
          staticClass: "mr-2 text-info",
          "class": _vm.getDirectionIcon(item.action)
        }), _vm._v("\n          " + _vm._s(_vm.formatDirection(item.action)) + "\n        ")])];
      }
    }, {
      key: "cell(status)",
      fn: function fn(_ref4) {
        var item = _ref4.item;
        return [_c("b-badge", {
          staticClass: "status-badge",
          attrs: {
            variant: _vm.levelToVariant(item.level)
          }
        }, [_c("i", {
          staticClass: "mr-1",
          "class": _vm.getStatusIcon(item.level)
        }), _vm._v("\n          " + _vm._s(_vm.formatStatus(item.level)) + "\n        ")])];
      }
    }, {
      key: "cell(message)",
      fn: function fn(_ref5) {
        var item = _ref5.item;
        return [_c("span", {
          staticClass: "log-message"
        }, [_vm._v(_vm._s(item.message))])];
      }
    }])
  }), _vm._v(" "), _c("div", {
    staticClass: "d-flex justify-content-end mt-3"
  }, [_c("b-pagination", {
    staticClass: "pagination-modern",
    attrs: {
      "total-rows": _vm.filteredLogs.length,
      "per-page": _vm.logsPerPage,
      size: "sm",
      align: "right"
    },
    model: {
      value: _vm.currentLogPage,
      callback: function callback($$v) {
        _vm.currentLogPage = $$v;
      },
      expression: "currentLogPage"
    }
  })], 1)], 1)], 1);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-8.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-8.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/settings/woocommerce/LogsTab.vue?vue&type=style&index=0&id=605fdccc&scoped=true&lang=css":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-8.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-8.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/settings/woocommerce/LogsTab.vue?vue&type=style&index=0&id=605fdccc&scoped=true&lang=css ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, "\n.filters-card[data-v-605fdccc] {\n  border-radius: 12px;\n  border: none;\n}\n.filters-card[data-v-605fdccc] .card-header {\n  background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);\n  border-bottom: 2px solid #e9ecef;\n  padding: 1rem 1.5rem;\n  border-radius: 12px 12px 0 0;\n}\n.form-group-modern[data-v-605fdccc] label {\n  font-weight: 600;\n  color: #495057;\n  margin-bottom: 0.5rem;\n  font-size: 13px;\n}\n.form-control-modern[data-v-605fdccc] {\n  border-radius: 8px;\n  border: 1px solid #dee2e6;\n  transition: all 0.3s ease;\n  height: 40px;\n}\n.form-control-modern[data-v-605fdccc]:focus {\n  border-color: #667eea;\n  box-shadow: 0 0 0 0.2rem rgba(102, 126, 234, 0.15);\n}\n.v-select-modern[data-v-605fdccc] .vs__dropdown-toggle {\n  border-radius: 8px;\n  border: 1px solid #dee2e6;\n  min-height: 40px;\n}\n.v-select-modern[data-v-605fdccc] .vs__dropdown-toggle:focus {\n  border-color: #667eea;\n}\n.logs-card[data-v-605fdccc] {\n  border-radius: 12px;\n  border: none;\n}\n.logs-card[data-v-605fdccc] .card-header {\n  background: linear-gradient(135deg, #f8f9ff 0%, #ffffff 100%);\n  border-bottom: 2px solid #e9ecef;\n  padding: 1.25rem 1.5rem;\n  border-radius: 12px 12px 0 0;\n}\n.logs-table[data-v-605fdccc] thead.logs-table-header th {\n  background: #f8f9fa;\n  font-weight: 700;\n  color: #495057;\n  text-transform: uppercase;\n  font-size: 12px;\n  letter-spacing: 0.5px;\n  border-bottom: 2px solid #dee2e6;\n  padding: 1rem;\n}\n.logs-table[data-v-605fdccc] tbody tr {\n  transition: all 0.2s ease;\n}\n.logs-table[data-v-605fdccc] tbody tr:hover {\n  background: #f8f9ff;\n  transform: scale(1.01);\n}\n.logs-table[data-v-605fdccc] tbody td {\n  padding: 1rem;\n  vertical-align: middle;\n}\n.log-message[data-v-605fdccc] {\n  font-size: 13px;\n  color: #6c757d;\n  max-width: 400px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.status-badge[data-v-605fdccc] {\n  font-weight: 600;\n  padding: 0.4rem 0.8rem;\n  border-radius: 20px;\n  font-size: 12px;\n}\n.btn-action-refresh[data-v-605fdccc],\n.btn-action-danger[data-v-605fdccc] {\n  border-radius: 8px;\n  font-weight: 600;\n  transition: all 0.3s ease;\n}\n.btn-action-refresh[data-v-605fdccc]:hover:not(:disabled),\n.btn-action-danger[data-v-605fdccc]:hover:not(:disabled) {\n  transform: translateY(-2px);\n}\n.pagination-modern[data-v-605fdccc] .page-link {\n  border-radius: 8px;\n  margin: 0 2px;\n  border: 1px solid #dee2e6;\n  color: #667eea;\n}\n.pagination-modern[data-v-605fdccc] .page-item.active .page-link {\n  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);\n  border-color: #667eea;\n  color: white;\n}\n.pagination-modern[data-v-605fdccc] .page-link:hover {\n  background: #f8f9ff;\n  border-color: #667eea;\n}\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-8.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-8.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/settings/woocommerce/LogsTab.vue?vue&type=style&index=0&id=605fdccc&scoped=true&lang=css":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-8.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-8.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/settings/woocommerce/LogsTab.vue?vue&type=style&index=0&id=605fdccc&scoped=true&lang=css ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_8_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_8_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_LogsTab_vue_vue_type_style_index_0_id_605fdccc_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-8.use[1]!../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-8.use[2]!../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./LogsTab.vue?vue&type=style&index=0&id=605fdccc&scoped=true&lang=css */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-8.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-8.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/settings/woocommerce/LogsTab.vue?vue&type=style&index=0&id=605fdccc&scoped=true&lang=css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_8_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_8_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_LogsTab_vue_vue_type_style_index_0_id_605fdccc_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_8_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_8_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_LogsTab_vue_vue_type_style_index_0_id_605fdccc_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/src/views/app/pages/settings/woocommerce/LogsTab.vue":
/*!************************************************************************!*\
  !*** ./resources/src/views/app/pages/settings/woocommerce/LogsTab.vue ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _LogsTab_vue_vue_type_template_id_605fdccc_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./LogsTab.vue?vue&type=template&id=605fdccc&scoped=true */ "./resources/src/views/app/pages/settings/woocommerce/LogsTab.vue?vue&type=template&id=605fdccc&scoped=true");
/* harmony import */ var _LogsTab_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./LogsTab.vue?vue&type=script&lang=js */ "./resources/src/views/app/pages/settings/woocommerce/LogsTab.vue?vue&type=script&lang=js");
/* harmony import */ var _LogsTab_vue_vue_type_style_index_0_id_605fdccc_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./LogsTab.vue?vue&type=style&index=0&id=605fdccc&scoped=true&lang=css */ "./resources/src/views/app/pages/settings/woocommerce/LogsTab.vue?vue&type=style&index=0&id=605fdccc&scoped=true&lang=css");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _LogsTab_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _LogsTab_vue_vue_type_template_id_605fdccc_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render,
  _LogsTab_vue_vue_type_template_id_605fdccc_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "605fdccc",
  null
  
)

/* hot reload */
if (false) // removed by dead control flow
{ var api; }
component.options.__file = "resources/src/views/app/pages/settings/woocommerce/LogsTab.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/src/views/app/pages/settings/woocommerce/LogsTab.vue?vue&type=script&lang=js":
/*!************************************************************************************************!*\
  !*** ./resources/src/views/app/pages/settings/woocommerce/LogsTab.vue?vue&type=script&lang=js ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LogsTab_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./LogsTab.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/settings/woocommerce/LogsTab.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LogsTab_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/src/views/app/pages/settings/woocommerce/LogsTab.vue?vue&type=style&index=0&id=605fdccc&scoped=true&lang=css":
/*!********************************************************************************************************************************!*\
  !*** ./resources/src/views/app/pages/settings/woocommerce/LogsTab.vue?vue&type=style&index=0&id=605fdccc&scoped=true&lang=css ***!
  \********************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_8_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_8_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_LogsTab_vue_vue_type_style_index_0_id_605fdccc_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/style-loader/dist/cjs.js!../../../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-8.use[1]!../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-8.use[2]!../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./LogsTab.vue?vue&type=style&index=0&id=605fdccc&scoped=true&lang=css */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-8.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-8.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/settings/woocommerce/LogsTab.vue?vue&type=style&index=0&id=605fdccc&scoped=true&lang=css");


/***/ }),

/***/ "./resources/src/views/app/pages/settings/woocommerce/LogsTab.vue?vue&type=template&id=605fdccc&scoped=true":
/*!******************************************************************************************************************!*\
  !*** ./resources/src/views/app/pages/settings/woocommerce/LogsTab.vue?vue&type=template&id=605fdccc&scoped=true ***!
  \******************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_LogsTab_vue_vue_type_template_id_605fdccc_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_LogsTab_vue_vue_type_template_id_605fdccc_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_LogsTab_vue_vue_type_template_id_605fdccc_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./LogsTab.vue?vue&type=template&id=605fdccc&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/settings/woocommerce/LogsTab.vue?vue&type=template&id=605fdccc&scoped=true");


/***/ })

}]);