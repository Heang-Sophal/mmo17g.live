"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["Create_Supplier"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/components/CustomFieldsForm.vue?vue&type=script&lang=js":
/*!***********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/components/CustomFieldsForm.vue?vue&type=script&lang=js ***!
  \***********************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "CustomFieldsForm",
  props: {
    entityType: {
      type: String,
      required: true,
      validator: function validator(value) {
        return ['client', 'provider'].includes(value);
      }
    },
    entityId: {
      type: [Number, String],
      "default": null
    },
    values: {
      type: Object,
      "default": function _default() {
        return {};
      }
    }
  },
  data: function data() {
    return {
      customFields: [],
      fieldValues: {},
      isLoading: false
    };
  },
  watch: {
    entityId: {
      handler: function handler(newId, oldId) {
        var _this = this;
        if (newId && newId !== oldId) {
          // Load values when entityId becomes available
          this.$nextTick(function () {
            if (_this.customFields.length > 0) {
              _this.loadFieldValues();
            }
          });
        }
      },
      immediate: false
    },
    values: {
      handler: function handler(newValues) {
        var _this2 = this;
        // Update fieldValues when values prop changes
        if (newValues && Object.keys(newValues).length > 0) {
          var updated = {};
          this.customFields.forEach(function (field) {
            if (newValues[field.id] !== undefined) {
              updated[field.id] = newValues[field.id].value || newValues[field.id];
            } else {
              updated[field.id] = _this2.getDefaultValue(field);
            }
          });
          this.fieldValues = updated;
        }
      },
      immediate: true,
      deep: true
    },
    fieldValues: {
      handler: function handler(newValues) {
        // Emit changes to parent
        this.$emit('input', newValues);
      },
      deep: true
    }
  },
  mounted: function mounted() {
    var _this3 = this;
    this.loadCustomFields().then(function () {
      // After custom fields are loaded, load values if entityId exists
      if (_this3.entityId) {
        _this3.loadFieldValues();
      }
    });
  },
  methods: {
    //----------------------------------- Load Custom Fields -------------------------------\\
    loadCustomFields: function loadCustomFields() {
      var _this4 = this;
      this.isLoading = true;
      return axios.get("custom-fields?entity_type=".concat(this.entityType)).then(function (response) {
        // Only show active custom fields
        _this4.customFields = (response.data.custom_fields || []).filter(function (field) {
          return field.is_active !== false;
        });
        // Initialize field values with defaults
        var initialValues = {};
        _this4.customFields.forEach(function (field) {
          initialValues[field.id] = _this4.getDefaultValue(field);
        });
        _this4.fieldValues = _objectSpread(_objectSpread({}, initialValues), _this4.fieldValues);
        _this4.isLoading = false;
        return Promise.resolve();
      })["catch"](function (error) {
        _this4.isLoading = false;
        console.error('Error loading custom fields:', error);
        return Promise.reject(error);
      });
    },
    //----------------------------------- Load Field Values -------------------------------\\
    loadFieldValues: function loadFieldValues() {
      var _this5 = this;
      if (!this.entityId) return;
      var entityTypeModel = this.entityType === 'client' ? 'App\\Models\\Client' : 'App\\Models\\Provider';
      axios.get('custom-field-values', {
        params: {
          entity_type: entityTypeModel,
          entity_id: this.entityId
        }
      }).then(function (response) {
        if (response.data.success && response.data.values) {
          var loadedValues = {};
          Object.keys(response.data.values).forEach(function (fieldId) {
            var value = response.data.values[fieldId];
            // Handle checkbox values
            if (value.field && value.field.field_type === 'checkbox') {
              loadedValues[fieldId] = value.value === '1' || value.value === 1 || value.value === true;
            } else {
              loadedValues[fieldId] = value.value;
            }
          });
          // Merge with existing fieldValues, but prioritize loaded values
          _this5.fieldValues = _objectSpread(_objectSpread({}, _this5.fieldValues), loadedValues);
        }
      })["catch"](function (error) {
        console.error('Error loading field values:', error);
      });
    },
    //----------------------------------- Get Default Value -------------------------------\\
    getDefaultValue: function getDefaultValue(field) {
      if (field.default_value) {
        if (field.field_type === 'checkbox') {
          return field.default_value === '1' || field.default_value === 1 || field.default_value === true;
        }
        return field.default_value;
      }

      // Return appropriate default based on field type
      switch (field.field_type) {
        case 'checkbox':
          return false;
        case 'number':
          return null;
        default:
          return '';
      }
    },
    //----------------------------------- Get Select Options -------------------------------\\
    getSelectOptions: function getSelectOptions(field) {
      if (field.field_type !== 'select' || !field.default_value) {
        return [];
      }
      var options = [];
      try {
        if (Array.isArray(field.default_value)) {
          options = field.default_value;
        } else {
          options = JSON.parse(field.default_value);
        }
      } catch (e) {
        console.error('Error parsing select options:', e);
        return [];
      }
      return options.map(function (opt) {
        return {
          label: opt,
          value: opt
        };
      });
    },
    //------ Event Validation State
    getValidationState: function getValidationState(_ref) {
      var dirty = _ref.dirty,
        validated = _ref.validated,
        _ref$valid = _ref.valid,
        valid = _ref$valid === void 0 ? null : _ref$valid;
      return dirty || validated ? valid : null;
    },
    //----------------------------------- Get Field Values for Submission -------------------------------\\
    getFieldValues: function getFieldValues() {
      return this.fieldValues;
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/people/CreateSupplier.vue?vue&type=script&lang=js":
/*!*********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/people/CreateSupplier.vue?vue&type=script&lang=js ***!
  \*********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _components_CustomFieldsForm_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../components/CustomFieldsForm.vue */ "./resources/src/components/CustomFieldsForm.vue");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  components: {
    CustomFieldsForm: _components_CustomFieldsForm_vue__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  metaInfo: {
    title: "Create Supplier"
  },
  data: function data() {
    return {
      SubmitProcessing: false,
      customFieldValues: {},
      provider: {
        id: "",
        name: "",
        phone: "",
        email: "",
        tax_number: "",
        country: "",
        city: "",
        adresse: ""
      }
    };
  },
  methods: {
    //------------- Submit Validation Create Provider
    Submit_Provider: function Submit_Provider() {
      var _this = this;
      this.$refs.Create_Provider.validate().then(function (success) {
        if (!success) {
          _this.makeToast("danger", _this.$t("Please_fill_the_form_correctly"), _this.$t("Failed"));
        } else {
          _this.Create_Provider();
        }
      });
    },
    //---------------------------- Create Provider  -----------------------\\
    Create_Provider: function Create_Provider() {
      var _this2 = this;
      this.SubmitProcessing = true;
      axios.post("providers", {
        name: this.provider.name,
        email: this.provider.email,
        phone: this.provider.phone,
        tax_number: this.provider.tax_number,
        country: this.provider.country,
        city: this.provider.city,
        adresse: this.provider.adresse
      }).then(function (response) {
        var _response$data$provid;
        var providerId = response.data.id || ((_response$data$provid = response.data.provider) === null || _response$data$provid === void 0 ? void 0 : _response$data$provid.id);
        if (!providerId) {
          _this2.makeToast("danger", _this2.$t("Failed_to_get_provider_id"), _this2.$t("Failed"));
          _this2.SubmitProcessing = false;
          return;
        }

        // Save custom field values if any (even if empty, to save default values)
        if (Object.keys(_this2.customFieldValues).length > 0) {
          return axios.post("custom-field-values", {
            entity_type: "App\\Models\\Provider",
            entity_id: providerId,
            values: _this2.customFieldValues
          }).then(function () {
            _this2.makeToast("success", _this2.$t("Successfully_Created"), _this2.$t("Success"));
            _this2.SubmitProcessing = false;
            _this2.$router.push({
              name: 'Suppliers'
            });
          })["catch"](function (cfError) {
            console.error('Error saving custom field values:', cfError);
            // Still show success for provider creation, but log the error
            _this2.makeToast("success", _this2.$t("Successfully_Created"), _this2.$t("Success"));
            _this2.SubmitProcessing = false;
            _this2.$router.push({
              name: 'Suppliers'
            });
          });
        } else {
          _this2.makeToast("success", _this2.$t("Successfully_Created"), _this2.$t("Success"));
          _this2.SubmitProcessing = false;
          _this2.$router.push({
            name: 'Suppliers'
          });
        }
      })["catch"](function (error) {
        console.error('Error creating provider:', error);
        _this2.makeToast("danger", _this2.$t("InvalidData"), _this2.$t("Failed"));
        _this2.SubmitProcessing = false;
      });
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
  },
  //----------------------------- Created function-------------------
  created: function created() {
    // Reset form on component creation
    this.provider = {
      id: "",
      name: "",
      phone: "",
      email: "",
      tax_number: "",
      country: "",
      city: "",
      adresse: ""
    };
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/components/CustomFieldsForm.vue?vue&type=template&id=6b5d7f34&scoped=true":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/components/CustomFieldsForm.vue?vue&type=template&id=6b5d7f34&scoped=true ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************/
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
    staticClass: "custom-fields-form"
  }, [_vm.isLoading ? _c("div", {
    staticClass: "text-center py-2"
  }, [_c("small", {
    staticClass: "text-muted"
  }, [_vm._v(_vm._s(_vm.$t("Loading") || "Loading..."))])]) : _vm.customFields.length > 0 ? _c("div", [_c("b-row", [_c("b-col", {
    staticClass: "mb-3",
    attrs: {
      md: "12"
    }
  }, [_c("h6", {
    staticClass: "text-primary"
  }, [_c("i", {
    staticClass: "i-Data-Settings mr-2"
  }), _vm._v("\n          " + _vm._s(_vm.$t("CustomFields")) + "\n        ")]), _vm._v(" "), _c("hr")])], 1), _vm._v(" "), _vm._l(_vm.customFields, function (field) {
    return _c("b-row", {
      key: field.id,
      staticClass: "mb-3"
    }, [_c("b-col", {
      attrs: {
        md: field.field_type === "textarea" ? 12 : 6,
        sm: "12"
      }
    }, [_c("validation-provider", {
      attrs: {
        name: field.name,
        rules: field.is_required ? {
          required: true
        } : {}
      },
      scopedSlots: _vm._u([{
        key: "default",
        fn: function fn(validationContext) {
          return [_c("b-form-group", {
            attrs: {
              label: field.name + (field.is_required ? " *" : "")
            }
          }, [field.field_type === "text" ? _c("b-form-input", {
            attrs: {
              state: _vm.getValidationState(validationContext),
              placeholder: field.name,
              "aria-describedby": "field-".concat(field.id, "-feedback")
            },
            model: {
              value: _vm.fieldValues[field.id],
              callback: function callback($$v) {
                _vm.$set(_vm.fieldValues, field.id, $$v);
              },
              expression: "fieldValues[field.id]"
            }
          }) : field.field_type === "number" ? _c("b-form-input", {
            attrs: {
              type: "number",
              state: _vm.getValidationState(validationContext),
              placeholder: field.name,
              "aria-describedby": "field-".concat(field.id, "-feedback")
            },
            model: {
              value: _vm.fieldValues[field.id],
              callback: function callback($$v) {
                _vm.$set(_vm.fieldValues, field.id, _vm._n($$v));
              },
              expression: "fieldValues[field.id]"
            }
          }) : field.field_type === "textarea" ? _c("b-form-textarea", {
            attrs: {
              state: _vm.getValidationState(validationContext),
              placeholder: field.name,
              rows: "3",
              "aria-describedby": "field-".concat(field.id, "-feedback")
            },
            model: {
              value: _vm.fieldValues[field.id],
              callback: function callback($$v) {
                _vm.$set(_vm.fieldValues, field.id, $$v);
              },
              expression: "fieldValues[field.id]"
            }
          }) : field.field_type === "date" ? _c("b-form-datepicker", {
            attrs: {
              state: _vm.getValidationState(validationContext),
              placeholder: field.name,
              "aria-describedby": "field-".concat(field.id, "-feedback")
            },
            model: {
              value: _vm.fieldValues[field.id],
              callback: function callback($$v) {
                _vm.$set(_vm.fieldValues, field.id, $$v);
              },
              expression: "fieldValues[field.id]"
            }
          }) : field.field_type === "select" ? _c("v-select", {
            "class": {
              "is-invalid": !!validationContext.errors[0]
            },
            attrs: {
              state: validationContext.errors[0] ? false : validationContext.valid ? true : null,
              reduce: function reduce(label) {
                return label.value;
              },
              options: _vm.getSelectOptions(field),
              placeholder: _vm.$t("PleaseSelect")
            },
            model: {
              value: _vm.fieldValues[field.id],
              callback: function callback($$v) {
                _vm.$set(_vm.fieldValues, field.id, $$v);
              },
              expression: "fieldValues[field.id]"
            }
          }) : field.field_type === "checkbox" ? _c("b-form-checkbox", {
            attrs: {
              value: true,
              "unchecked-value": false
            },
            model: {
              value: _vm.fieldValues[field.id],
              callback: function callback($$v) {
                _vm.$set(_vm.fieldValues, field.id, $$v);
              },
              expression: "fieldValues[field.id]"
            }
          }, [_vm._v("\n            " + _vm._s(field.name) + "\n          ")]) : _vm._e(), _vm._v(" "), _c("b-form-invalid-feedback", {
            attrs: {
              id: "field-".concat(field.id, "-feedback")
            }
          }, [_vm._v("\n            " + _vm._s(validationContext.errors[0]) + "\n          ")])], 1)];
        }
      }], null, true)
    })], 1)], 1);
  })], 2) : _vm._e()]);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/people/CreateSupplier.vue?vue&type=template&id=6e74b40a":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/people/CreateSupplier.vue?vue&type=template&id=6e74b40a ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************/
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
      page: _vm.$t("Add"),
      folder: _vm.$t("Suppliers")
    }
  }), _vm._v(" "), _c("validation-observer", {
    ref: "Create_Provider"
  }, [_c("b-card", [_c("b-form", {
    on: {
      submit: function submit($event) {
        $event.preventDefault();
        return _vm.Submit_Provider.apply(null, arguments);
      }
    }
  }, [_c("b-row", [_c("b-col", {
    attrs: {
      md: "6",
      sm: "12"
    }
  }, [_c("validation-provider", {
    attrs: {
      name: "Name Provider",
      rules: {
        required: true
      }
    },
    scopedSlots: _vm._u([{
      key: "default",
      fn: function fn(validationContext) {
        return [_c("b-form-group", {
          attrs: {
            label: _vm.$t("SupplierName") + " " + "*"
          }
        }, [_c("b-form-input", {
          attrs: {
            state: _vm.getValidationState(validationContext),
            "aria-describedby": "name-feedback",
            label: "name",
            placeholder: _vm.$t("SupplierName")
          },
          model: {
            value: _vm.provider.name,
            callback: function callback($$v) {
              _vm.$set(_vm.provider, "name", $$v);
            },
            expression: "provider.name"
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
      md: "6",
      sm: "12"
    }
  }, [_c("b-form-group", {
    attrs: {
      label: _vm.$t("Email")
    }
  }, [_c("b-form-input", {
    attrs: {
      label: "email",
      placeholder: _vm.$t("Email")
    },
    model: {
      value: _vm.provider.email,
      callback: function callback($$v) {
        _vm.$set(_vm.provider, "email", $$v);
      },
      expression: "provider.email"
    }
  })], 1)], 1), _vm._v(" "), _c("b-col", {
    attrs: {
      md: "6",
      sm: "12"
    }
  }, [_c("b-form-group", {
    attrs: {
      label: _vm.$t("Phone")
    }
  }, [_c("b-form-input", {
    attrs: {
      label: "Phone",
      placeholder: _vm.$t("Phone")
    },
    model: {
      value: _vm.provider.phone,
      callback: function callback($$v) {
        _vm.$set(_vm.provider, "phone", $$v);
      },
      expression: "provider.phone"
    }
  })], 1)], 1), _vm._v(" "), _c("b-col", {
    attrs: {
      md: "6",
      sm: "12"
    }
  }, [_c("b-form-group", {
    attrs: {
      label: _vm.$t("Country")
    }
  }, [_c("b-form-input", {
    attrs: {
      label: "Country",
      placeholder: _vm.$t("Country")
    },
    model: {
      value: _vm.provider.country,
      callback: function callback($$v) {
        _vm.$set(_vm.provider, "country", $$v);
      },
      expression: "provider.country"
    }
  })], 1)], 1), _vm._v(" "), _c("b-col", {
    attrs: {
      md: "6",
      sm: "12"
    }
  }, [_c("b-form-group", {
    attrs: {
      label: _vm.$t("City")
    }
  }, [_c("b-form-input", {
    attrs: {
      label: "City",
      placeholder: _vm.$t("City")
    },
    model: {
      value: _vm.provider.city,
      callback: function callback($$v) {
        _vm.$set(_vm.provider, "city", $$v);
      },
      expression: "provider.city"
    }
  })], 1)], 1), _vm._v(" "), _c("b-col", {
    attrs: {
      md: "6",
      sm: "12"
    }
  }, [_c("b-form-group", {
    attrs: {
      label: _vm.$t("Tax_Number")
    }
  }, [_c("b-form-input", {
    attrs: {
      label: "Tax_Number",
      placeholder: _vm.$t("Tax_Number")
    },
    model: {
      value: _vm.provider.tax_number,
      callback: function callback($$v) {
        _vm.$set(_vm.provider, "tax_number", $$v);
      },
      expression: "provider.tax_number"
    }
  })], 1)], 1), _vm._v(" "), _c("b-col", {
    attrs: {
      md: "12",
      sm: "12"
    }
  }, [_c("b-form-group", {
    attrs: {
      label: _vm.$t("Adress")
    }
  }, [_c("textarea", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.provider.adresse,
      expression: "provider.adresse"
    }],
    staticClass: "form-control",
    attrs: {
      label: "Adress",
      rows: "4",
      placeholder: _vm.$t("Adress")
    },
    domProps: {
      value: _vm.provider.adresse
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.provider, "adresse", $event.target.value);
      }
    }
  })])], 1), _vm._v(" "), _c("b-col", {
    staticClass: "mt-4",
    attrs: {
      md: "12",
      sm: "12"
    }
  }, [_c("CustomFieldsForm", {
    attrs: {
      "entity-type": "provider"
    },
    model: {
      value: _vm.customFieldValues,
      callback: function callback($$v) {
        _vm.customFieldValues = $$v;
      },
      expression: "customFieldValues"
    }
  })], 1), _vm._v(" "), _c("b-col", {
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
  }), _vm._v(" " + _vm._s(_vm.$t("submit")))]), _vm._v(" "), _c("b-button", {
    staticClass: "ml-2",
    attrs: {
      variant: "secondary"
    },
    on: {
      click: function click($event) {
        return _vm.$router.push({
          name: "Suppliers"
        });
      }
    }
  }, [_vm._v(_vm._s(_vm.$t("Cancel")))]), _vm._v(" "), _vm.SubmitProcessing ? _vm._m(0) : _vm._e()], 1)], 1)], 1)], 1)], 1)], 1);
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

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-8.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-8.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/components/CustomFieldsForm.vue?vue&type=style&index=0&id=6b5d7f34&scoped=true&lang=css":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-8.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-8.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/components/CustomFieldsForm.vue?vue&type=style&index=0&id=6b5d7f34&scoped=true&lang=css ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n.custom-fields-form[data-v-6b5d7f34] {\r\n  margin-top: 1rem;\n}\r\n", ""]);
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

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-8.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-8.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/components/CustomFieldsForm.vue?vue&type=style&index=0&id=6b5d7f34&scoped=true&lang=css":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-8.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-8.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/components/CustomFieldsForm.vue?vue&type=style&index=0&id=6b5d7f34&scoped=true&lang=css ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_8_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_8_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CustomFieldsForm_vue_vue_type_style_index_0_id_6b5d7f34_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-8.use[1]!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-8.use[2]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./CustomFieldsForm.vue?vue&type=style&index=0&id=6b5d7f34&scoped=true&lang=css */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-8.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-8.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/components/CustomFieldsForm.vue?vue&type=style&index=0&id=6b5d7f34&scoped=true&lang=css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_8_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_8_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CustomFieldsForm_vue_vue_type_style_index_0_id_6b5d7f34_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_8_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_8_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CustomFieldsForm_vue_vue_type_style_index_0_id_6b5d7f34_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

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

/***/ "./resources/src/components/CustomFieldsForm.vue":
/*!*******************************************************!*\
  !*** ./resources/src/components/CustomFieldsForm.vue ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _CustomFieldsForm_vue_vue_type_template_id_6b5d7f34_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CustomFieldsForm.vue?vue&type=template&id=6b5d7f34&scoped=true */ "./resources/src/components/CustomFieldsForm.vue?vue&type=template&id=6b5d7f34&scoped=true");
/* harmony import */ var _CustomFieldsForm_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CustomFieldsForm.vue?vue&type=script&lang=js */ "./resources/src/components/CustomFieldsForm.vue?vue&type=script&lang=js");
/* harmony import */ var _CustomFieldsForm_vue_vue_type_style_index_0_id_6b5d7f34_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./CustomFieldsForm.vue?vue&type=style&index=0&id=6b5d7f34&scoped=true&lang=css */ "./resources/src/components/CustomFieldsForm.vue?vue&type=style&index=0&id=6b5d7f34&scoped=true&lang=css");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _CustomFieldsForm_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _CustomFieldsForm_vue_vue_type_template_id_6b5d7f34_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render,
  _CustomFieldsForm_vue_vue_type_template_id_6b5d7f34_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "6b5d7f34",
  null
  
)

/* hot reload */
if (false) // removed by dead control flow
{ var api; }
component.options.__file = "resources/src/components/CustomFieldsForm.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/src/components/CustomFieldsForm.vue?vue&type=script&lang=js":
/*!*******************************************************************************!*\
  !*** ./resources/src/components/CustomFieldsForm.vue?vue&type=script&lang=js ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CustomFieldsForm_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./CustomFieldsForm.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/components/CustomFieldsForm.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CustomFieldsForm_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/src/components/CustomFieldsForm.vue?vue&type=style&index=0&id=6b5d7f34&scoped=true&lang=css":
/*!***************************************************************************************************************!*\
  !*** ./resources/src/components/CustomFieldsForm.vue?vue&type=style&index=0&id=6b5d7f34&scoped=true&lang=css ***!
  \***************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_8_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_8_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CustomFieldsForm_vue_vue_type_style_index_0_id_6b5d7f34_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader/dist/cjs.js!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-8.use[1]!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-8.use[2]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./CustomFieldsForm.vue?vue&type=style&index=0&id=6b5d7f34&scoped=true&lang=css */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-8.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-8.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/components/CustomFieldsForm.vue?vue&type=style&index=0&id=6b5d7f34&scoped=true&lang=css");


/***/ }),

/***/ "./resources/src/components/CustomFieldsForm.vue?vue&type=template&id=6b5d7f34&scoped=true":
/*!*************************************************************************************************!*\
  !*** ./resources/src/components/CustomFieldsForm.vue?vue&type=template&id=6b5d7f34&scoped=true ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CustomFieldsForm_vue_vue_type_template_id_6b5d7f34_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CustomFieldsForm_vue_vue_type_template_id_6b5d7f34_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CustomFieldsForm_vue_vue_type_template_id_6b5d7f34_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./CustomFieldsForm.vue?vue&type=template&id=6b5d7f34&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/components/CustomFieldsForm.vue?vue&type=template&id=6b5d7f34&scoped=true");


/***/ }),

/***/ "./resources/src/views/app/pages/people/CreateSupplier.vue":
/*!*****************************************************************!*\
  !*** ./resources/src/views/app/pages/people/CreateSupplier.vue ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _CreateSupplier_vue_vue_type_template_id_6e74b40a__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CreateSupplier.vue?vue&type=template&id=6e74b40a */ "./resources/src/views/app/pages/people/CreateSupplier.vue?vue&type=template&id=6e74b40a");
/* harmony import */ var _CreateSupplier_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CreateSupplier.vue?vue&type=script&lang=js */ "./resources/src/views/app/pages/people/CreateSupplier.vue?vue&type=script&lang=js");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _CreateSupplier_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _CreateSupplier_vue_vue_type_template_id_6e74b40a__WEBPACK_IMPORTED_MODULE_0__.render,
  _CreateSupplier_vue_vue_type_template_id_6e74b40a__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) // removed by dead control flow
{ var api; }
component.options.__file = "resources/src/views/app/pages/people/CreateSupplier.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/src/views/app/pages/people/CreateSupplier.vue?vue&type=script&lang=js":
/*!*****************************************************************************************!*\
  !*** ./resources/src/views/app/pages/people/CreateSupplier.vue?vue&type=script&lang=js ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CreateSupplier_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./CreateSupplier.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/people/CreateSupplier.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CreateSupplier_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/src/views/app/pages/people/CreateSupplier.vue?vue&type=template&id=6e74b40a":
/*!***********************************************************************************************!*\
  !*** ./resources/src/views/app/pages/people/CreateSupplier.vue?vue&type=template&id=6e74b40a ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CreateSupplier_vue_vue_type_template_id_6e74b40a__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CreateSupplier_vue_vue_type_template_id_6e74b40a__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CreateSupplier_vue_vue_type_template_id_6e74b40a__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./CreateSupplier.vue?vue&type=template&id=6e74b40a */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/people/CreateSupplier.vue?vue&type=template&id=6e74b40a");


/***/ })

}]);