"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["custom_fields"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/settings/custom_fields.vue?vue&type=script&lang=js":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/settings/custom_fields.vue?vue&type=script&lang=js ***!
  \**********************************************************************************************************************************************************************************************************************/
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
    title: "Custom Fields"
  },
  data: function data() {
    return {
      isLoading: true,
      SubmitProcessing: false,
      editmode: false,
      activeTab: 0,
      customerFields: [],
      supplierFields: [],
      customField: {
        id: "",
        name: "",
        field_type: "",
        entity_type: "",
        is_required: false,
        default_value: "",
        sort_order: 0
      },
      selectOptionsText: "",
      fieldTypes: [{
        label: this.$t('Text'),
        value: 'text'
      }, {
        label: this.$t('Number'),
        value: 'number'
      }, {
        label: this.$t('Textarea'),
        value: 'textarea'
      }, {
        label: this.$t('Date'),
        value: 'date'
      }, {
        label: this.$t('Select'),
        value: 'select'
      }, {
        label: this.$t('Checkbox'),
        value: 'checkbox'
      }]
    };
  },
  computed: _objectSpread(_objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_0__.mapGetters)(["currentUser"])), {}, {
    direction: function direction() {
      if (this.$i18n.locale == "ar") {
        return "rtl";
      } else {
        return "ltr";
      }
    },
    columns: function columns() {
      return [{
        label: this.$t("FieldName"),
        field: "name",
        tdClass: "text-left",
        thClass: "text-left"
      }, {
        label: this.$t("FieldType"),
        field: "field_type",
        tdClass: "text-left",
        thClass: "text-left"
      }, {
        label: this.$t("Required"),
        field: "is_required",
        tdClass: "text-center",
        thClass: "text-center"
      }, {
        label: this.$t("SortOrder"),
        field: "sort_order",
        tdClass: "text-center",
        thClass: "text-center"
      }, {
        label: this.$t("Action"),
        field: "actions",
        tdClass: "text-right",
        thClass: "text-right",
        sortable: false
      }];
    }
  }),
  mounted: function mounted() {
    this.Get_CustomFields();
  },
  methods: {
    //----------------------------------- Get Custom Fields -------------------------------\\
    Get_CustomFields: function Get_CustomFields() {
      var _this = this;
      nprogress__WEBPACK_IMPORTED_MODULE_1___default().start();
      nprogress__WEBPACK_IMPORTED_MODULE_1___default().set(0.1);

      // Get customer fields
      axios.get("custom-fields?entity_type=client").then(function (response) {
        _this.customerFields = response.data.custom_fields;
      })["catch"](function (error) {
        _this.makeToast("danger", _this.$t("InvalidData"), _this.$t("Failed"));
      });

      // Get supplier fields
      axios.get("custom-fields?entity_type=provider").then(function (response) {
        _this.supplierFields = response.data.custom_fields;
        nprogress__WEBPACK_IMPORTED_MODULE_1___default().done();
        _this.isLoading = false;
      })["catch"](function (error) {
        nprogress__WEBPACK_IMPORTED_MODULE_1___default().done();
        _this.isLoading = false;
        _this.makeToast("danger", _this.$t("InvalidData"), _this.$t("Failed"));
      });
    },
    //----------------------------------- New Custom Field -------------------------------\\
    New_CustomField: function New_CustomField(entityType) {
      var _this2 = this;
      this.reset_Form();
      this.customField.entity_type = entityType;
      this.editmode = false;
      setTimeout(function () {
        _this2.$bvModal.show("New_CustomField");
      }, 500);
    },
    //----------------------------------- Edit Custom Field -------------------------------\\
    Edit_CustomField: function Edit_CustomField(customField) {
      var _this3 = this;
      this.reset_Form();
      this.customField = {
        id: customField.id,
        name: customField.name,
        field_type: customField.field_type,
        entity_type: customField.entity_type,
        is_required: customField.is_required,
        default_value: customField.default_value || "",
        sort_order: customField.sort_order || 0
      };

      // Handle select options
      if (customField.field_type === 'select' && customField.default_value) {
        var options = Array.isArray(customField.default_value) ? customField.default_value : JSON.parse(customField.default_value || '[]');
        this.selectOptionsText = options.join('\n');
      } else {
        this.selectOptionsText = "";
      }
      this.editmode = true;
      setTimeout(function () {
        _this3.$bvModal.show("Edit_CustomField");
      }, 500);
    },
    //----------------------------------- Submit Custom Field -------------------------------\\
    Submit_CustomField: function Submit_CustomField() {
      var _this4 = this;
      this.$refs.Create_CustomField.validate().then(function (success) {
        if (!success) {
          _this4.makeToast("danger", _this4.$t("Please_fill_the_form_correctly"), _this4.$t("Failed"));
          return;
        }
        _this4.SubmitProcessing = true;
        var payload = {
          name: _this4.customField.name,
          field_type: _this4.customField.field_type,
          entity_type: _this4.customField.entity_type,
          is_required: _this4.customField.is_required,
          default_value: _this4.customField.default_value || null,
          sort_order: _this4.customField.sort_order || 0
        };

        // Handle select options
        if (_this4.customField.field_type === 'select') {
          var options = _this4.selectOptionsText.split('\n').map(function (opt) {
            return opt.trim();
          }).filter(function (opt) {
            return opt.length > 0;
          });
          payload.default_value = JSON.stringify(options);
        }
        var url = _this4.editmode ? "custom-fields/".concat(_this4.customField.id) : "custom-fields";
        var method = _this4.editmode ? "put" : "post";
        axios[method](url, payload).then(function (response) {
          _this4.makeToast("success", _this4.editmode ? _this4.$t("Successfully_Updated") : _this4.$t("Successfully_Created"), _this4.$t("Success"));
          _this4.SubmitProcessing = false;
          _this4.$bvModal.hide(_this4.editmode ? "Edit_CustomField" : "New_CustomField");
          _this4.Get_CustomFields();
        })["catch"](function (error) {
          _this4.SubmitProcessing = false;
          _this4.makeToast("danger", _this4.$t("InvalidData"), _this4.$t("Failed"));
        });
      });
    },
    //----------------------------------- Delete Custom Field -------------------------------\\
    Delete_CustomField: function Delete_CustomField(id) {
      var _this5 = this;
      this.$swal({
        title: this.$t("DeleteTitle"),
        text: this.$t("DeleteMessage"),
        type: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        cancelButtonText: this.$t("Cancel"),
        confirmButtonText: this.$t("Delete")
      }).then(function (result) {
        if (result.value) {
          axios["delete"]("custom-fields/" + id).then(function (response) {
            _this5.makeToast("success", _this5.$t("Successfully_Deleted"), _this5.$t("Success"));
            _this5.Get_CustomFields();
          })["catch"](function (error) {
            _this5.makeToast("danger", _this5.$t("InvalidData"), _this5.$t("Failed"));
          });
        }
      });
    },
    //----------------------------------- Reset Form -------------------------------\\
    reset_Form: function reset_Form() {
      this.customField = {
        id: "",
        name: "",
        field_type: "",
        entity_type: "",
        is_required: false,
        default_value: "",
        sort_order: 0
      };
      this.selectOptionsText = "";
      this.editmode = false;
    },
    //----------------------------------- Field Type Change -------------------------------\\
    onFieldTypeChange: function onFieldTypeChange() {
      if (this.customField.field_type !== 'select') {
        this.selectOptionsText = "";
      }
      if (this.customField.field_type === 'checkbox') {
        this.customField.default_value = "";
      }
    },
    //----------------------------------- Update Select Options -------------------------------\\
    updateSelectOptions: function updateSelectOptions() {
      // This is handled in Submit_CustomField
    },
    //----------------------------------- Get Field Type Label -------------------------------\\
    getFieldTypeLabel: function getFieldTypeLabel(type) {
      var field = this.fieldTypes.find(function (f) {
        return f.value === type;
      });
      return field ? field.label : type;
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
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/settings/custom_fields.vue?vue&type=template&id=5df365f8":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/settings/custom_fields.vue?vue&type=template&id=5df365f8 ***!
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
      page: _vm.$t("CustomFields"),
      folder: _vm.$t("Settings")
    }
  }), _vm._v(" "), _vm.isLoading ? _c("div", {
    staticClass: "loading_page spinner spinner-primary mr-3"
  }) : _vm._e(), _vm._v(" "), !_vm.isLoading ? _c("div", [_c("b-card", [_c("b-tabs", {
    attrs: {
      "content-class": "mt-3"
    },
    model: {
      value: _vm.activeTab,
      callback: function callback($$v) {
        _vm.activeTab = $$v;
      },
      expression: "activeTab"
    }
  }, [_c("b-tab", {
    attrs: {
      title: _vm.$t("Customers")
    }
  }, [_c("div", {
    staticClass: "d-flex justify-content-between align-items-center mb-3"
  }, [_c("h5", [_vm._v(_vm._s(_vm.$t("CustomerCustomFields")))]), _vm._v(" "), _c("b-button", {
    attrs: {
      variant: "primary"
    },
    on: {
      click: function click($event) {
        return _vm.New_CustomField("client");
      }
    }
  }, [_c("i", {
    staticClass: "i-Add"
  }), _vm._v(" " + _vm._s(_vm.$t("Add")) + "\n            ")])], 1), _vm._v(" "), _c("vue-good-table", {
    attrs: {
      columns: _vm.columns,
      rows: _vm.customerFields,
      rtl: _vm.direction,
      "search-options": {
        enabled: true,
        placeholder: _vm.$t("SearchThisTable")
      },
      "pagination-options": {
        enabled: true,
        mode: "records",
        perPage: 10
      },
      styleClass: "tableOne vgt-table"
    },
    scopedSlots: _vm._u([{
      key: "table-row",
      fn: function fn(props) {
        return [props.column.field == "field_type" ? _c("span", [_vm._v("\n                " + _vm._s(_vm.getFieldTypeLabel(props.row.field_type)) + "\n              ")]) : props.column.field == "is_required" ? _c("span", [_c("b-badge", {
          attrs: {
            variant: props.row.is_required ? "success" : "secondary"
          }
        }, [_vm._v("\n                  " + _vm._s(props.row.is_required ? _vm.$t("Required") : _vm.$t("Optional")) + "\n                ")])], 1) : props.column.field == "actions" ? _c("span", [_c("b-button", {
          staticClass: "mr-2",
          attrs: {
            variant: "outline-primary",
            size: "sm"
          },
          on: {
            click: function click($event) {
              return _vm.Edit_CustomField(props.row);
            }
          }
        }, [_c("i", {
          staticClass: "i-Edit"
        })]), _vm._v(" "), _c("b-button", {
          attrs: {
            variant: "outline-danger",
            size: "sm"
          },
          on: {
            click: function click($event) {
              return _vm.Delete_CustomField(props.row.id);
            }
          }
        }, [_c("i", {
          staticClass: "i-Close-Window"
        })])], 1) : _c("span", [_vm._v("\n                " + _vm._s(props.formattedRow[props.column.field]) + "\n              ")])];
      }
    }], null, false, 2925867985)
  })], 1), _vm._v(" "), _c("b-tab", {
    attrs: {
      title: _vm.$t("Suppliers")
    }
  }, [_c("div", {
    staticClass: "d-flex justify-content-between align-items-center mb-3"
  }, [_c("h5", [_vm._v(_vm._s(_vm.$t("SupplierCustomFields")))]), _vm._v(" "), _c("b-button", {
    attrs: {
      variant: "primary"
    },
    on: {
      click: function click($event) {
        return _vm.New_CustomField("provider");
      }
    }
  }, [_c("i", {
    staticClass: "i-Add"
  }), _vm._v(" " + _vm._s(_vm.$t("Add")) + "\n            ")])], 1), _vm._v(" "), _c("vue-good-table", {
    attrs: {
      columns: _vm.columns,
      rows: _vm.supplierFields,
      rtl: _vm.direction,
      "search-options": {
        enabled: true,
        placeholder: _vm.$t("SearchThisTable")
      },
      "pagination-options": {
        enabled: true,
        mode: "records",
        perPage: 10
      },
      styleClass: "tableOne vgt-table"
    },
    scopedSlots: _vm._u([{
      key: "table-row",
      fn: function fn(props) {
        return [props.column.field == "field_type" ? _c("span", [_vm._v("\n                " + _vm._s(_vm.getFieldTypeLabel(props.row.field_type)) + "\n              ")]) : props.column.field == "is_required" ? _c("span", [_c("b-badge", {
          attrs: {
            variant: props.row.is_required ? "success" : "secondary"
          }
        }, [_vm._v("\n                  " + _vm._s(props.row.is_required ? _vm.$t("Required") : _vm.$t("Optional")) + "\n                ")])], 1) : props.column.field == "actions" ? _c("span", [_c("b-button", {
          staticClass: "mr-2",
          attrs: {
            variant: "outline-primary",
            size: "sm"
          },
          on: {
            click: function click($event) {
              return _vm.Edit_CustomField(props.row);
            }
          }
        }, [_c("i", {
          staticClass: "i-Edit"
        })]), _vm._v(" "), _c("b-button", {
          attrs: {
            variant: "outline-danger",
            size: "sm"
          },
          on: {
            click: function click($event) {
              return _vm.Delete_CustomField(props.row.id);
            }
          }
        }, [_c("i", {
          staticClass: "i-Close-Window"
        })])], 1) : _c("span", [_vm._v("\n                " + _vm._s(props.formattedRow[props.column.field]) + "\n              ")])];
      }
    }], null, false, 2925867985)
  })], 1)], 1)], 1)], 1) : _vm._e(), _vm._v(" "), _c("validation-observer", {
    ref: "Create_CustomField"
  }, [_c("b-modal", {
    attrs: {
      "hide-footer": "",
      size: "lg",
      id: _vm.editmode ? "Edit_CustomField" : "New_CustomField",
      title: _vm.editmode ? _vm.$t("Edit") : _vm.$t("Add")
    }
  }, [_c("b-form", {
    on: {
      submit: function submit($event) {
        $event.preventDefault();
        return _vm.Submit_CustomField.apply(null, arguments);
      }
    }
  }, [_c("b-row", [_c("b-col", {
    staticClass: "mb-3",
    attrs: {
      md: "12",
      sm: "12"
    }
  }, [_c("validation-provider", {
    attrs: {
      name: "Field Name",
      rules: {
        required: true
      }
    },
    scopedSlots: _vm._u([{
      key: "default",
      fn: function fn(validationContext) {
        return [_c("b-form-group", {
          attrs: {
            label: _vm.$t("FieldName") + " " + "*"
          }
        }, [_c("b-form-input", {
          attrs: {
            state: _vm.getValidationState(validationContext),
            "aria-describedby": "name-feedback",
            placeholder: _vm.$t("FieldName")
          },
          model: {
            value: _vm.customField.name,
            callback: function callback($$v) {
              _vm.$set(_vm.customField, "name", $$v);
            },
            expression: "customField.name"
          }
        }), _vm._v(" "), _c("b-form-invalid-feedback", {
          attrs: {
            id: "name-feedback"
          }
        }, [_vm._v("\n                  " + _vm._s(validationContext.errors[0]) + "\n                ")])], 1)];
      }
    }])
  })], 1), _vm._v(" "), _c("b-col", {
    staticClass: "mb-3",
    attrs: {
      md: "6",
      sm: "12"
    }
  }, [_c("validation-provider", {
    attrs: {
      name: "Field Type",
      rules: {
        required: true
      }
    },
    scopedSlots: _vm._u([{
      key: "default",
      fn: function fn(validationContext) {
        return [_c("b-form-group", {
          attrs: {
            label: _vm.$t("FieldType") + " " + "*"
          }
        }, [_c("v-select", {
          "class": {
            "is-invalid": !!validationContext.errors[0]
          },
          attrs: {
            state: validationContext.errors[0] ? false : validationContext.valid ? true : null,
            reduce: function reduce(label) {
              return label.value;
            },
            options: _vm.fieldTypes,
            placeholder: _vm.$t("PleaseSelect")
          },
          on: {
            input: _vm.onFieldTypeChange
          },
          model: {
            value: _vm.customField.field_type,
            callback: function callback($$v) {
              _vm.$set(_vm.customField, "field_type", $$v);
            },
            expression: "customField.field_type"
          }
        }), _vm._v(" "), _c("b-form-invalid-feedback", [_vm._v("\n                  " + _vm._s(validationContext.errors[0]) + "\n                ")])], 1)];
      }
    }])
  })], 1), _vm._v(" "), _c("b-col", {
    staticClass: "mb-3",
    attrs: {
      md: "6",
      sm: "12"
    }
  }, [_c("b-form-group", {
    attrs: {
      label: _vm.$t("Required")
    }
  }, [_c("b-form-checkbox", {
    attrs: {
      "switch": ""
    },
    model: {
      value: _vm.customField.is_required,
      callback: function callback($$v) {
        _vm.$set(_vm.customField, "is_required", $$v);
      },
      expression: "customField.is_required"
    }
  }, [_vm._v("\n                " + _vm._s(_vm.customField.is_required ? _vm.$t("Required") : _vm.$t("Optional")) + "\n              ")])], 1)], 1), _vm._v(" "), _vm.customField.field_type === "select" ? _c("b-col", {
    staticClass: "mb-3",
    attrs: {
      md: "12",
      sm: "12"
    }
  }, [_c("b-form-group", {
    attrs: {
      label: _vm.$t("SelectOptions")
    }
  }, [_c("b-form-textarea", {
    attrs: {
      placeholder: _vm.$t("EnterOptionsOnePerLine"),
      rows: "4"
    },
    on: {
      blur: _vm.updateSelectOptions
    },
    model: {
      value: _vm.selectOptionsText,
      callback: function callback($$v) {
        _vm.selectOptionsText = $$v;
      },
      expression: "selectOptionsText"
    }
  }), _vm._v(" "), _c("small", {
    staticClass: "text-muted"
  }, [_vm._v(_vm._s(_vm.$t("EnterOptionsOnePerLine")))])], 1)], 1) : _vm.customField.field_type !== "select" && _vm.customField.field_type ? _c("b-col", {
    staticClass: "mb-3",
    attrs: {
      md: "12",
      sm: "12"
    }
  }, [_c("b-form-group", {
    attrs: {
      label: _vm.$t("DefaultValue")
    }
  }, [_vm.customField.field_type === "text" || _vm.customField.field_type === "number" ? _c("b-form-input", {
    attrs: {
      type: _vm.customField.field_type === "number" ? "number" : "text",
      placeholder: _vm.$t("DefaultValue")
    },
    model: {
      value: _vm.customField.default_value,
      callback: function callback($$v) {
        _vm.$set(_vm.customField, "default_value", $$v);
      },
      expression: "customField.default_value"
    }
  }) : _vm.customField.field_type === "textarea" ? _c("b-form-textarea", {
    attrs: {
      placeholder: _vm.$t("DefaultValue"),
      rows: "3"
    },
    model: {
      value: _vm.customField.default_value,
      callback: function callback($$v) {
        _vm.$set(_vm.customField, "default_value", $$v);
      },
      expression: "customField.default_value"
    }
  }) : _vm.customField.field_type === "date" ? _c("b-form-datepicker", {
    attrs: {
      placeholder: _vm.$t("DefaultValue")
    },
    model: {
      value: _vm.customField.default_value,
      callback: function callback($$v) {
        _vm.$set(_vm.customField, "default_value", $$v);
      },
      expression: "customField.default_value"
    }
  }) : _vm._e()], 1)], 1) : _vm._e(), _vm._v(" "), _c("b-col", {
    staticClass: "mb-3",
    attrs: {
      md: "6",
      sm: "12"
    }
  }, [_c("b-form-group", {
    attrs: {
      label: _vm.$t("SortOrder")
    }
  }, [_c("b-form-input", {
    attrs: {
      type: "number",
      placeholder: _vm.$t("SortOrder"),
      min: "0"
    },
    model: {
      value: _vm.customField.sort_order,
      callback: function callback($$v) {
        _vm.$set(_vm.customField, "sort_order", _vm._n($$v));
      },
      expression: "customField.sort_order"
    }
  })], 1)], 1), _vm._v(" "), _c("b-col", {
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
  }), _vm._v(" " + _vm._s(_vm.$t("submit")) + "\n            ")]), _vm._v(" "), _c("b-button", {
    staticClass: "ml-2",
    attrs: {
      variant: "secondary"
    },
    on: {
      click: _vm.reset_Form
    }
  }, [_vm._v("\n              " + _vm._s(_vm.$t("Cancel")) + "\n            ")]), _vm._v(" "), _vm.SubmitProcessing ? _vm._m(0) : _vm._e()], 1)], 1)], 1)], 1)], 1)], 1);
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

/***/ "./resources/src/views/app/pages/settings/custom_fields.vue":
/*!******************************************************************!*\
  !*** ./resources/src/views/app/pages/settings/custom_fields.vue ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _custom_fields_vue_vue_type_template_id_5df365f8__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./custom_fields.vue?vue&type=template&id=5df365f8 */ "./resources/src/views/app/pages/settings/custom_fields.vue?vue&type=template&id=5df365f8");
/* harmony import */ var _custom_fields_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./custom_fields.vue?vue&type=script&lang=js */ "./resources/src/views/app/pages/settings/custom_fields.vue?vue&type=script&lang=js");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _custom_fields_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _custom_fields_vue_vue_type_template_id_5df365f8__WEBPACK_IMPORTED_MODULE_0__.render,
  _custom_fields_vue_vue_type_template_id_5df365f8__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) // removed by dead control flow
{ var api; }
component.options.__file = "resources/src/views/app/pages/settings/custom_fields.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/src/views/app/pages/settings/custom_fields.vue?vue&type=script&lang=js":
/*!******************************************************************************************!*\
  !*** ./resources/src/views/app/pages/settings/custom_fields.vue?vue&type=script&lang=js ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_custom_fields_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./custom_fields.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/settings/custom_fields.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_custom_fields_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/src/views/app/pages/settings/custom_fields.vue?vue&type=template&id=5df365f8":
/*!************************************************************************************************!*\
  !*** ./resources/src/views/app/pages/settings/custom_fields.vue?vue&type=template&id=5df365f8 ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_custom_fields_vue_vue_type_template_id_5df365f8__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_custom_fields_vue_vue_type_template_id_5df365f8__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_custom_fields_vue_vue_type_template_id_5df365f8__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./custom_fields.vue?vue&type=template&id=5df365f8 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/settings/custom_fields.vue?vue&type=template&id=5df365f8");


/***/ })

}]);