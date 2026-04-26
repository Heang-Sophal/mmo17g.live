"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["asset_category"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/assets/index_asset_category.vue?vue&type=script&lang=js":
/*!***************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/assets/index_asset_category.vue?vue&type=script&lang=js ***!
  \***************************************************************************************************************************************************************************************************************************/
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
  name: 'AssetCategoryIndex',
  data: function data() {
    return {
      isLoading: true,
      SubmitProcessing: false,
      serverParams: {
        sort: {
          field: 'id',
          type: 'desc'
        },
        page: 1,
        perPage: 10
      },
      search: '',
      limit: '10',
      totalRows: 0,
      categories: [],
      editmode: false,
      category: {
        id: '',
        name: '',
        description: ''
      }
    };
  },
  computed: _objectSpread(_objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_0__.mapGetters)(['currentUserPermissions'])), {}, {
    columns: function columns() {
      return [{
        label: this.$t('Name'),
        field: 'name',
        tdClass: 'text-left',
        thClass: 'text-left'
      }, {
        label: this.$t('Description'),
        field: 'description',
        tdClass: 'text-left',
        thClass: 'text-left'
      }, {
        label: this.$t('Action'),
        field: 'actions',
        tdClass: 'text-right',
        thClass: 'text-right',
        sortable: false
      }];
    }
  }),
  created: function created() {
    var _this = this;
    this.Get_Categories(1);
    Fire.$on('Create_Asset_Category', function () {
      _this.Get_Categories(_this.serverParams.page);
      _this.$bvModal.hide('New_Asset_Category');
    });
    Fire.$on('Delete_Asset_Category', function () {
      _this.Get_Categories(_this.serverParams.page);
    });
  },
  methods: {
    Submit_Category: function Submit_Category() {
      var _this2 = this;
      this.$refs.Create_Category.validate().then(function (success) {
        if (!success) {
          _this2.makeToast('danger', _this2.$t('Please_fill_the_form_correctly'), _this2.$t('Failed'));
        } else {
          if (!_this2.editmode) _this2.Create_Category();else _this2.Update_Category();
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
    onPageChange: function onPageChange(_ref) {
      var currentPage = _ref.currentPage;
      this.serverParams.page = currentPage;
      this.Get_Categories(currentPage);
    },
    onPerPageChange: function onPerPageChange(_ref2) {
      var currentPerPage = _ref2.currentPerPage;
      this.limit = currentPerPage;
      this.serverParams.page = 1;
      this.serverParams.perPage = currentPerPage;
      this.Get_Categories(1);
    },
    onSortChange: function onSortChange(params) {
      this.serverParams.sort.type = params[0].type;
      this.serverParams.sort.field = params[0].field;
      this.Get_Categories(this.serverParams.page);
    },
    onSearch: function onSearch(params) {
      this.search = params.searchTerm;
      this.Get_Categories(this.serverParams.page);
    },
    getValidationState: function getValidationState(_ref3) {
      var dirty = _ref3.dirty,
        validated = _ref3.validated,
        _ref3$valid = _ref3.valid,
        valid = _ref3$valid === void 0 ? null : _ref3$valid;
      return dirty || validated ? valid : null;
    },
    New_Category: function New_Category() {
      this.reset_Form();
      this.editmode = false;
      this.$bvModal.show('New_Asset_Category');
    },
    Edit_Category: function Edit_Category(cat) {
      this.reset_Form();
      this.category = {
        id: cat.id,
        name: cat.name,
        description: cat.description
      };
      this.editmode = true;
      this.$bvModal.show('New_Asset_Category');
    },
    reset_Form: function reset_Form() {
      this.category = {
        id: '',
        name: '',
        description: ''
      };
    },
    Get_Categories: function Get_Categories(page) {
      var _this3 = this;
      nprogress__WEBPACK_IMPORTED_MODULE_1___default().start();
      nprogress__WEBPACK_IMPORTED_MODULE_1___default().set(0.1);
      axios.get('assets_category?page=' + page + '&SortField=' + this.serverParams.sort.field + '&SortType=' + this.serverParams.sort.type + '&search=' + this.search + '&limit=' + this.limit).then(function (response) {
        var payload = response.data || {};
        _this3.categories = payload.data || payload.asset_categories || [];
        _this3.totalRows = payload.totalRows || _this3.categories.length;
        nprogress__WEBPACK_IMPORTED_MODULE_1___default().done();
        _this3.isLoading = false;
      })["catch"](function () {
        nprogress__WEBPACK_IMPORTED_MODULE_1___default().done();
        setTimeout(function () {
          _this3.isLoading = false;
        }, 300);
      });
    },
    Create_Category: function Create_Category() {
      var _this4 = this;
      this.SubmitProcessing = true;
      axios.post('assets_category', {
        name: this.category.name,
        description: this.category.description
      }).then(function () {
        Fire.$emit('Create_Asset_Category');
        _this4.makeToast('success', _this4.$t('Successfully_Created'), _this4.$t('Success'));
        _this4.SubmitProcessing = false;
      })["catch"](function () {
        _this4.makeToast('danger', _this4.$t('InvalidData'), _this4.$t('Failed'));
        _this4.SubmitProcessing = false;
      });
    },
    Update_Category: function Update_Category() {
      var _this5 = this;
      this.SubmitProcessing = true;
      axios.put('assets_category/' + this.category.id, {
        name: this.category.name,
        description: this.category.description
      }).then(function () {
        Fire.$emit('Create_Asset_Category');
        _this5.makeToast('success', _this5.$t('Successfully_Updated'), _this5.$t('Success'));
        _this5.SubmitProcessing = false;
      })["catch"](function () {
        _this5.makeToast('danger', _this5.$t('InvalidData'), _this5.$t('Failed'));
        _this5.SubmitProcessing = false;
      });
    },
    Delete_Category: function Delete_Category(id) {
      var _this6 = this;
      this.$swal({
        title: this.$t('Delete_Title'),
        text: this.$t('Delete_Text'),
        type: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        cancelButtonText: this.$t('Delete_cancelButtonText'),
        confirmButtonText: this.$t('Delete_confirmButtonText')
      }).then(function (result) {
        if (result.value) {
          axios["delete"]('assets_category/' + id).then(function () {
            _this6.$swal(_this6.$t('Delete_Deleted'), _this6.$t('Deleted_in_successfully'), 'success');
            Fire.$emit('Delete_Asset_Category');
          })["catch"](function () {
            _this6.$swal(_this6.$t('Delete_Failed'), _this6.$t('Delete_Therewassomethingwronge'), 'warning');
          });
        }
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/assets/index_asset_category.vue?vue&type=template&id=2cf62fb9":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/assets/index_asset_category.vue?vue&type=template&id=2cf62fb9 ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************/
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
      page: _vm.$t("Asset_Category"),
      folder: _vm.$t("Assets")
    }
  }), _vm._v(" "), _vm.isLoading ? _c("div", {
    staticClass: "loading_page spinner spinner-primary mr-3"
  }) : _c("div", {
    staticClass: "page-wrapper"
  }, [_c("vue-good-table", {
    attrs: {
      mode: "remote",
      columns: _vm.columns,
      totalRows: _vm.totalRows,
      rows: _vm.categories,
      "search-options": {
        enabled: true,
        placeholder: _vm.$t("Search_this_table")
      },
      "pagination-options": {
        enabled: true,
        mode: "records"
      },
      styleClass: "tableOne vgt-table"
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
        return [props.column.field == "actions" ? _c("span", [_vm.currentUserPermissions && _vm.currentUserPermissions.includes("assets") ? _c("a", {
          directives: [{
            name: "b-tooltip",
            rawName: "v-b-tooltip.hover",
            modifiers: {
              hover: true
            }
          }],
          staticClass: "cursor-pointer",
          attrs: {
            title: "Edit"
          },
          on: {
            click: function click($event) {
              return _vm.Edit_Category(props.row);
            }
          }
        }, [_c("i", {
          staticClass: "i-Edit text-25 text-success"
        })]) : _vm._e(), _vm._v(" "), _vm.currentUserPermissions && _vm.currentUserPermissions.includes("assets") ? _c("a", {
          directives: [{
            name: "b-tooltip",
            rawName: "v-b-tooltip.hover",
            modifiers: {
              hover: true
            }
          }],
          staticClass: "cursor-pointer",
          attrs: {
            title: "Delete"
          },
          on: {
            click: function click($event) {
              return _vm.Delete_Category(props.row.id);
            }
          }
        }, [_c("i", {
          staticClass: "i-Close-Window text-25 text-danger"
        })]) : _vm._e()]) : _vm._e()];
      }
    }])
  }, [_c("div", {
    staticClass: "mt-2 mb-3",
    attrs: {
      slot: "table-actions"
    },
    slot: "table-actions"
  }, [_vm.currentUserPermissions && _vm.currentUserPermissions.includes("assets") ? _c("b-button", {
    attrs: {
      size: "sm",
      variant: "primary ripple m-1"
    },
    on: {
      click: function click($event) {
        return _vm.New_Category();
      }
    }
  }, [_c("i", {
    staticClass: "i-Add"
  }), _vm._v("\n          " + _vm._s(_vm.$t("Add")) + "\n        ")]) : _vm._e()], 1)])], 1), _vm._v(" "), _c("validation-observer", {
    ref: "Create_Category"
  }, [_c("b-modal", {
    attrs: {
      "hide-footer": "",
      size: "lg",
      id: "New_Asset_Category",
      title: _vm.editmode ? _vm.$t("Edit") : _vm.$t("Add")
    }
  }, [_c("b-form", {
    on: {
      submit: function submit($event) {
        $event.preventDefault();
        return _vm.Submit_Category.apply(null, arguments);
      }
    }
  }, [_c("b-row", [_c("b-col", {
    attrs: {
      md: "12"
    }
  }, [_c("validation-provider", {
    attrs: {
      name: "Name",
      rules: {
        required: true
      }
    },
    scopedSlots: _vm._u([{
      key: "default",
      fn: function fn(validationContext) {
        return [_c("b-form-group", {
          attrs: {
            label: _vm.$t("Name") + " *"
          }
        }, [_c("b-form-input", {
          attrs: {
            state: _vm.getValidationState(validationContext),
            "aria-describedby": "name-feedback"
          },
          model: {
            value: _vm.category.name,
            callback: function callback($$v) {
              _vm.$set(_vm.category, "name", $$v);
            },
            expression: "category.name"
          }
        }), _vm._v(" "), _c("b-form-invalid-feedback", {
          attrs: {
            id: "name-feedback"
          }
        }, [_vm._v(_vm._s(validationContext.errors[0]))])], 1)];
      }
    }])
  })], 1), _vm._v(" "), _c("b-col", {
    attrs: {
      md: "12"
    }
  }, [_c("b-form-group", {
    attrs: {
      label: _vm.$t("Description")
    }
  }, [_c("textarea", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.category.description,
      expression: "category.description"
    }],
    staticClass: "form-control",
    attrs: {
      rows: "4",
      placeholder: _vm.$t("Afewwords")
    },
    domProps: {
      value: _vm.category.description
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.category, "description", $event.target.value);
      }
    }
  })])], 1), _vm._v(" "), _c("b-col", {
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
  }), _vm._v(" " + _vm._s(_vm.$t("submit")))]), _vm._v(" "), _vm.SubmitProcessing ? _vm._m(0) : _vm._e()], 1)], 1)], 1)], 1)], 1)], 1);
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

/***/ "./resources/src/views/app/pages/assets/index_asset_category.vue":
/*!***********************************************************************!*\
  !*** ./resources/src/views/app/pages/assets/index_asset_category.vue ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _index_asset_category_vue_vue_type_template_id_2cf62fb9__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index_asset_category.vue?vue&type=template&id=2cf62fb9 */ "./resources/src/views/app/pages/assets/index_asset_category.vue?vue&type=template&id=2cf62fb9");
/* harmony import */ var _index_asset_category_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index_asset_category.vue?vue&type=script&lang=js */ "./resources/src/views/app/pages/assets/index_asset_category.vue?vue&type=script&lang=js");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _index_asset_category_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _index_asset_category_vue_vue_type_template_id_2cf62fb9__WEBPACK_IMPORTED_MODULE_0__.render,
  _index_asset_category_vue_vue_type_template_id_2cf62fb9__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) // removed by dead control flow
{ var api; }
component.options.__file = "resources/src/views/app/pages/assets/index_asset_category.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/src/views/app/pages/assets/index_asset_category.vue?vue&type=script&lang=js":
/*!***********************************************************************************************!*\
  !*** ./resources/src/views/app/pages/assets/index_asset_category.vue?vue&type=script&lang=js ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_asset_category_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./index_asset_category.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/assets/index_asset_category.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_asset_category_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/src/views/app/pages/assets/index_asset_category.vue?vue&type=template&id=2cf62fb9":
/*!*****************************************************************************************************!*\
  !*** ./resources/src/views/app/pages/assets/index_asset_category.vue?vue&type=template&id=2cf62fb9 ***!
  \*****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_asset_category_vue_vue_type_template_id_2cf62fb9__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_asset_category_vue_vue_type_template_id_2cf62fb9__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_asset_category_vue_vue_type_template_id_2cf62fb9__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./index_asset_category.vue?vue&type=template&id=2cf62fb9 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/assets/index_asset_category.vue?vue&type=template&id=2cf62fb9");


/***/ })

}]);