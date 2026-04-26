(self["webpackChunk"] = self["webpackChunk"] || []).push([["pos"],{

/***/ "./node_modules/@stripe/stripe-js/dist/stripe.esm.js":
/*!***********************************************************!*\
  !*** ./node_modules/@stripe/stripe-js/dist/stripe.esm.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   loadStripe: () => (/* binding */ loadStripe)
/* harmony export */ });
var V3_URL = 'https://js.stripe.com/v3';
var V3_URL_REGEX = /^https:\/\/js\.stripe\.com\/v3\/?(\?.*)?$/;
var EXISTING_SCRIPT_MESSAGE = 'loadStripe.setLoadParameters was called but an existing Stripe.js script already exists in the document; existing script parameters will be used';
var findScript = function findScript() {
  var scripts = document.querySelectorAll("script[src^=\"".concat(V3_URL, "\"]"));

  for (var i = 0; i < scripts.length; i++) {
    var script = scripts[i];

    if (!V3_URL_REGEX.test(script.src)) {
      continue;
    }

    return script;
  }

  return null;
};

var injectScript = function injectScript(params) {
  var queryString = params && !params.advancedFraudSignals ? '?advancedFraudSignals=false' : '';
  var script = document.createElement('script');
  script.src = "".concat(V3_URL).concat(queryString);
  var headOrBody = document.head || document.body;

  if (!headOrBody) {
    throw new Error('Expected document.body not to be null. Stripe.js requires a <body> element.');
  }

  headOrBody.appendChild(script);
  return script;
};

var registerWrapper = function registerWrapper(stripe, startTime) {
  if (!stripe || !stripe._registerWrapper) {
    return;
  }

  stripe._registerWrapper({
    name: 'stripe-js',
    version: "1.54.2",
    startTime: startTime
  });
};

var stripePromise = null;
var loadScript = function loadScript(params) {
  // Ensure that we only attempt to load Stripe.js at most once
  if (stripePromise !== null) {
    return stripePromise;
  }

  stripePromise = new Promise(function (resolve, reject) {
    if (typeof window === 'undefined' || typeof document === 'undefined') {
      // Resolve to null when imported server side. This makes the module
      // safe to import in an isomorphic code base.
      resolve(null);
      return;
    }

    if (window.Stripe && params) {
      console.warn(EXISTING_SCRIPT_MESSAGE);
    }

    if (window.Stripe) {
      resolve(window.Stripe);
      return;
    }

    try {
      var script = findScript();

      if (script && params) {
        console.warn(EXISTING_SCRIPT_MESSAGE);
      } else if (!script) {
        script = injectScript(params);
      }

      script.addEventListener('load', function () {
        if (window.Stripe) {
          resolve(window.Stripe);
        } else {
          reject(new Error('Stripe.js not available'));
        }
      });
      script.addEventListener('error', function () {
        reject(new Error('Failed to load Stripe.js'));
      });
    } catch (error) {
      reject(error);
      return;
    }
  });
  return stripePromise;
};
var initStripe = function initStripe(maybeStripe, args, startTime) {
  if (maybeStripe === null) {
    return null;
  }

  var stripe = maybeStripe.apply(undefined, args);
  registerWrapper(stripe, startTime);
  return stripe;
}; // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types

// own script injection.

var stripePromise$1 = Promise.resolve().then(function () {
  return loadScript(null);
});
var loadCalled = false;
stripePromise$1["catch"](function (err) {
  if (!loadCalled) {
    console.warn(err);
  }
});
var loadStripe = function loadStripe() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  loadCalled = true;
  var startTime = Date.now();
  return stripePromise$1.then(function (maybeStripe) {
    return initStripe(maybeStripe, args, startTime);
  });
};




/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/components/CustomFieldsForm.vue?vue&type=script&lang=js":
/*!***********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/components/CustomFieldsForm.vue?vue&type=script&lang=js ***!
  \***********************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/components/ModernPaymentModal.vue?vue&type=script&lang=js":
/*!***********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/components/ModernPaymentModal.vue?vue&type=script&lang=js ***!
  \***********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _stripe_stripe_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @stripe/stripe-js */ "./node_modules/@stripe/stripe-js/dist/stripe.esm.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../utils */ "./resources/src/utils/index.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t["return"] || t["return"](); } finally { if (u) throw o; } } }; }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'ModernPaymentModal',
  props: {
    paymentMethods: {
      type: Array,
      "default": function _default() {
        return [];
      }
    },
    accounts: {
      type: Array,
      "default": function _default() {
        return [];
      }
    },
    savedPaymentMethods: {
      type: Array,
      "default": function _default() {
        return [];
      }
    },
    currency: {
      type: String,
      "default": '$'
    },
    // Data required to submit payment like in old POS logic
    clientId: {
      type: [Number, String],
      "default": null
    },
    warehouseId: {
      type: [Number, String],
      "default": null
    },
    sale: {
      type: Object,
      "default": function _default() {
        return {};
      }
    },
    details: {
      type: Array,
      "default": function _default() {
        return [];
      }
    },
    grandTotal: {
      type: Number,
      "default": 0
    },
    discountFromPoints: {
      type: Number,
      "default": 0
    },
    usedPoints: {
      type: Number,
      "default": 0
    },
    // Client credit control
    clientCreditLimit: {
      type: Number,
      "default": 0
    },
    clientNetBalance: {
      type: Number,
      "default": 0
    },
    // API endpoints
    createPosUrl: {
      type: String,
      "default": 'pos/create_pos'
    },
    // Optional Stripe publishable key (to mirror old POS behavior)
    stripeKey: {
      type: String,
      "default": ''
    },
    // Optional: when paying from a loaded draft sale
    draftSaleId: {
      type: [Number, String],
      "default": null
    },
    // POS online/offline state (controls some UI like email/SMS options)
    isOnline: {
      type: Boolean,
      "default": true
    },
    // System defaults from settings (used when opening modal and when adding new payment lines)
    defaultAccountId: {
      type: [Number, String],
      "default": null
    },
    defaultPaymentMethodId: {
      type: [Number, String],
      "default": null
    }
  },
  data: function data() {
    return {
      isEditMode: false,
      isSubmitting: false,
      paymentProcessing: false,
      // Stable identifier for the current checkout; generated once via crypto.randomUUID()
      // and reused for:
      //  - immediate online API request
      //  - offline save payload
      //  - offline sync retries
      currentSaleUuid: null,
      transactionId: 'TRX-20251017-001',
      transactionStatus: 'Pending',
      stripe: null,
      cardElement: null,
      cardElementsByLine: {},
      activeCardLineIndex: 0,
      paymentLines: [],
      sendEmail: false,
      sendSMS: false,
      paymentNote: '',
      saleNote: '',
      isCardInputComplete: false,
      paymentForm: {
        amountDue: 0,
        accountId: '',
        date: new Date().toISOString().split('T')[0],
        // Will be updated in created() or openModal()
        reference: '',
        notes: ''
      }
    };
  },
  watch: {},
  computed: {
    totalPaid: function totalPaid() {
      return (this.paymentLines || []).reduce(function (sum, line) {
        return sum + (Number(line.amount) || 0);
      }, 0);
    },
    balance: function balance() {
      var amountDue = this.paymentForm.amountDue || 0;
      var paid = this.totalPaid;
      return Math.max(0, amountDue - paid);
    },
    changeReturn: function changeReturn() {
      var over = this.totalPaid - (this.paymentForm.amountDue || 0);
      return over > 0 ? over : 0;
    },
    resolvedPaymentMethods: function resolvedPaymentMethods() {
      var _this = this;
      var methods = (this.paymentMethods || []).map(function (m) {
        return _objectSpread(_objectSpread({}, m), {}, {
          icon: m.icon || _this.getPaymentIcon(m)
        });
      });
      var isCash = function isCash(m) {
        return !!(m && m.name && m.name.toLowerCase().includes('cash'));
      };
      var cash = methods.filter(isCash);
      var others = methods.filter(function (m) {
        return !isCash(m);
      });
      return cash.concat(others);
    },
    resolvedAccounts: function resolvedAccounts() {
      return this.accounts || [];
    },
    anyCreditCardUsed: function anyCreditCardUsed() {
      var _this2 = this;
      return (this.paymentLines || []).some(function (line) {
        var pm = _this2.resolvedPaymentMethods.find(function (m) {
          return String(m.id) === String(line.paymentMethodId);
        });
        return pm && pm.name && pm.name.toLowerCase().includes('card');
      });
    },
    quickAmountOptions: function quickAmountOptions() {
      var base = [this.paymentForm && this.paymentForm.amountDue, 15, 20, 50, 100, 200].map(function (v) {
        return Number(v);
      }).filter(function (v) {
        return Number.isFinite(v);
      });
      var seen = new Set();
      var unique = [];
      var _iterator = _createForOfIteratorHelper(base),
        _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var v = _step.value;
          var key = v.toFixed(2);
          if (!seen.has(key)) {
            seen.add(key);
            unique.push(parseFloat(key));
          }
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
      return unique;
    }
  },
  methods: {
    // Get current date in configured timezone (YYYY-MM-DD format)
    getCurrentDateInTimezone: function getCurrentDateInTimezone() {
      try {
        // Get timezone from Vuex store getter (from get_user_auth API)
        // or default to UTC
        var timezone = this.$store && this.$store.getters && this.$store.getters.getTimezone || 'UTC';

        // Format current date in the specified timezone
        var now = new Date();
        var formatter = new Intl.DateTimeFormat('en-CA', {
          timeZone: timezone,
          year: 'numeric',
          month: '2-digit',
          day: '2-digit'
        });
        return formatter.format(now);
      } catch (e) {
        // Fallback to UTC if timezone is invalid or formatting fails
        return new Date().toISOString().split('T')[0];
      }
    },
    hasAnyNewCardToTokenize: function hasAnyNewCardToTokenize() {
      var _this3 = this;
      // Saved cards are disabled; any credit card line requires a fresh token.
      return (this.paymentLines || []).some(function (line) {
        return _this3.isLineCreditCard(line);
      });
    },
    isCreditCardMethod: function isCreditCardMethod(method) {
      return !!(method && method.name && method.name.toLowerCase().includes('card'));
    },
    isLineCreditCard: function isLineCreditCard(line) {
      if (!line) return false;
      var pm = this.resolvedPaymentMethods.find(function (m) {
        return String(m.id) === String(line.paymentMethodId);
      });
      return this.isCreditCardMethod(pm);
    },
    changePaymentMethod: function changePaymentMethod(line, method) {
      var _this4 = this;
      // If attempting to select credit card without Stripe config, block and notify
      if (this.isCreditCardMethod(method) && !this.stripeKey) {
        this.makeToast('warning', this.$t ? this.$t('credit_card_account_not_available') : 'Credit card account not available', this.$t ? this.$t('Warning') : 'Warning');
        // keep existing selection; if none, fallback to cash
        if (!line.paymentMethodId) {
          var cashId = this.getCashMethodId();
          if (cashId) line.paymentMethodId = cashId;
        }
        return;
      }
      line.paymentMethodId = method.id;
      var idx = (this.paymentLines || []).indexOf(line);
      if (this.isCreditCardMethod(method)) {
        // When a credit card method is selected, mount a Stripe Elements card input
        this.activeCardLineIndex = idx >= 0 ? idx : 0;
        this.$nextTick(function () {
          return _this4.loadStripePayment(_this4.activeCardLineIndex);
        });
      } else if (idx >= 0) {
        // Clean up any existing card element if switching away from credit card
        this.destroyCardElementForLine(idx);
      }
    },
    //------ Toast (mirror old POS behavior)
    makeToast: function makeToast(variant, msg, title) {
      if (this.$root && this.$root.$bvToast) {
        this.$root.$bvToast.toast(msg, {
          title: title,
          variant: variant,
          solid: true
        });
      } else {
        // Fallback
        console && console.warn && console.warn("[".concat(variant, "] ").concat(title, ": ").concat(msg));
      }
    },
    getPaymentIcon: function getPaymentIcon(method) {
      var name = (method && method.name || '').toLowerCase();
      if (name.includes('cash')) return 'i-Money-Bag';
      if (name.includes('card') || name.includes('credit')) return 'i-Credit-Card';
      if (name.includes('bank') || name.includes('transfer')) return 'i-Bank';
      if (name.includes('cheque') || name.includes('check')) return 'i-File';
      return 'i-Wallet';
    },
    getCashMethodId: function getCashMethodId() {
      var list = this.resolvedPaymentMethods || [];
      var found = list.find(function (m) {
        return m && m.name && m.name.toLowerCase().includes('cash');
      });
      return found ? found.id : null;
    },
    getDefaultPaymentMethodId: function getDefaultPaymentMethodId() {
      var id = this.defaultPaymentMethodId;
      if (id !== null && id !== undefined && id !== '') {
        var list = this.resolvedPaymentMethods || [];
        var found = list.find(function (m) {
          return m && String(m.id) === String(id);
        });
        if (found) return found.id;
      }
      return this.getCashMethodId();
    },
    getDefaultAccountId: function getDefaultAccountId() {
      var id = this.defaultAccountId;
      if (id !== null && id !== undefined && id !== '') {
        var list = this.resolvedAccounts || [];
        var found = list.find(function (a) {
          return a && String(a.id) === String(id);
        });
        if (found) return String(found.id);
      }
      return '';
    },
    selectPaymentMethod: function selectPaymentMethod(method) {
      this.paymentForm.paymentMethodId = method.id;
    },
    calculateChange: function calculateChange() {
      // With multiple payment lines, change is derived from totalPaid vs amountDue
      return;
    },
    formatCurrency: function formatCurrency(value) {
      var num = Number(value);
      var isValid = !isNaN(num);
      var amount = isValid ? Math.abs(num) : 0;
      var formattedNumber = new Intl.NumberFormat('en-US', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
      }).format(amount);
      var sign = isValid && num < 0 ? '-' : '';
      return "".concat(sign).concat(this.currency, " ").concat(formattedNumber);
    },
    addPaymentLine: function addPaymentLine() {
      if (Number(this.paymentForm.amountDue) === 0) {
        this.makeToast('warning', this.$t ? this.$t('Zero_total_no_payment_required') : 'Zero total sale: no payment needed', this.$t ? this.$t('Warning') : 'Warning');
        return;
      }
      var defaultMethodId = this.getDefaultPaymentMethodId();
      var defaultAccountId = this.getDefaultAccountId();
      this.paymentLines.push({
        amount: 0,
        paymentMethodId: defaultMethodId,
        accountId: defaultAccountId || this.paymentForm.accountId || ''
      });
    },
    removePaymentLine: function removePaymentLine(index) {
      // Never allow removing the last remaining line – there must always be at least one payment method
      if (!this.paymentLines || this.paymentLines.length <= 1) {
        return;
      }
      // Remove the line
      this.paymentLines.splice(index, 1);
      // Destroy any Stripe element tied to this line and clear all to avoid index drift
      try {
        this.destroyCardElementForLine(index);
      } catch (e) {/* ignore */}
      try {
        this.destroyAllCardElements && this.destroyAllCardElements();
      } catch (e) {/* ignore */}
    },
    setQuickAmount: function setQuickAmount(amount) {
      if (Number(this.paymentForm.amountDue) === 0) {
        this.makeToast('warning', this.$t ? this.$t('Zero_total_no_payment_required') : 'Zero total sale: no payment needed', this.$t ? this.$t('Warning') : 'Warning');
        return;
      }
      if (!this.paymentLines.length) this.addPaymentLine();
      this.paymentLines[0].amount = Number(amount) || 0;
    },
    onAmountInput: function onAmountInput(idx) {
      var line = this.paymentLines && this.paymentLines[idx];
      if (!line) return;
      var val = line.amount;
      // Coerce to finite non-negative number with 2 decimals
      val = Number(val);
      if (!Number.isFinite(val) || val < 0) val = 0;
      // Avoid editing when zero due
      if (Number(this.paymentForm.amountDue) === 0) val = 0;
      this.$set ? this.$set(this.paymentLines[idx], 'amount', Number(val.toFixed ? val.toFixed(2) : val)) : this.paymentLines[idx].amount = val;
    },
    loadStripePayment: function loadStripePayment(lineIndex) {
      var _this5 = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee() {
        var idx, containerId, _tryMount, _t;
        return _regenerator().w(function (_context) {
          while (1) switch (_context.p = _context.n) {
            case 0:
              _context.p = 0;
              if (_this5.stripeKey) {
                _context.n = 1;
                break;
              }
              return _context.a(2);
            case 1:
              if (_this5.stripe) {
                _context.n = 3;
                break;
              }
              _context.n = 2;
              return (0,_stripe_stripe_js__WEBPACK_IMPORTED_MODULE_0__.loadStripe)("".concat(_this5.stripeKey));
            case 2:
              _this5.stripe = _context.v;
            case 3:
              if (_this5.stripe) {
                _context.n = 4;
                break;
              }
              return _context.a(2);
            case 4:
              idx = typeof lineIndex === 'number' ? lineIndex : _this5.activeCardLineIndex || 0;
              containerId = "card-element-".concat(idx); // Mount helper with small retry window so that when the modal is
              // re‑opened (or during transitions) the Stripe Element still mounts
              // once the DOM node is actually present.
              _tryMount = function tryMount() {
                var attempt = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
                var container = document.getElementById(containerId);
                if (!container) {
                  // Retry a few times in case the element isn't in the DOM yet
                  if (attempt < 5) {
                    setTimeout(function () {
                      return _tryMount(attempt + 1);
                    }, 60);
                  }
                  return;
                }
                if (!_this5.cardElementsByLine[idx]) {
                  var elements = _this5.stripe.elements();
                  var element = elements.create('card', {
                    hidePostalCode: true
                  });
                  element.mount(container);
                  try {
                    element.on && element.on('change', function (event) {
                      _this5.isCardInputComplete = !!(event && event.complete);
                    });
                  } catch (e) {/* ignore */}
                  _this5.cardElementsByLine[idx] = element;
                }
              };
              _tryMount();
              _context.n = 6;
              break;
            case 5:
              _context.p = 5;
              _t = _context.v;
            case 6:
              return _context.a(2);
          }
        }, _callee, null, [[0, 5]]);
      }))();
    },
    destroyCardElementForLine: function destroyCardElementForLine(lineIndex) {
      try {
        var _idx = typeof lineIndex === 'number' ? lineIndex : this.activeCardLineIndex || 0;
        var el = this.cardElementsByLine && this.cardElementsByLine[_idx];
        if (el && el.unmount) {
          el.unmount();
        }
        if (this.cardElementsByLine) {
          delete this.cardElementsByLine[_idx];
        }
      } catch (e) {/* ignore */}
    },
    destroyAllCardElements: function destroyAllCardElements() {
      var _this6 = this;
      try {
        var keys = Object.keys(this.cardElementsByLine || {});
        keys.forEach(function (k) {
          var el = _this6.cardElementsByLine[k];
          if (el && el.unmount) {
            try {
              el.unmount();
            } catch (e) {/* ignore */}
          }
        });
        this.cardElementsByLine = {};
      } catch (e) {/* ignore */}
    },
    // Keep template hook but delegate to CreatePOS to mirror old logic
    submitPayment: function submitPayment() {
      var _this7 = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2() {
        return _regenerator().w(function (_context2) {
          while (1) switch (_context2.n) {
            case 0:
              _context2.n = 1;
              return _this7.CreatePOS();
            case 1:
              return _context2.a(2);
          }
        }, _callee2);
      }))();
    },
    //-------------------------------- Invoice POS (mirror old) ------------------------------\\
    Invoice_POS: function Invoice_POS(id) {
      var _this8 = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee3() {
        var response, invoicePayload, _t2;
        return _regenerator().w(function (_context3) {
          while (1) switch (_context3.p = _context3.n) {
            case 0:
              _context3.p = 0;
              if (typeof NProgress !== 'undefined') {
                NProgress.start();
                NProgress.set(0.1);
              }
              _context3.n = 1;
              return axios.get("sales_print_invoice/".concat(id));
            case 1:
              response = _context3.v;
              invoicePayload = {
                invoice: response.data,
                payments: response.data && response.data.payments ? response.data.payments : [],
                pos_settings: response.data && response.data.pos_settings ? response.data.pos_settings : {}
              }; // Emit upwards so parent can decide how to present invoice
              _this8.$emit('invoice-ready', invoicePayload);
              if (typeof NProgress !== 'undefined') {
                NProgress.done();
              }
              // Directly trigger print dialog without showing any modal
              setTimeout(function () {
                return _this8.print_pos();
              }, 300);
              _context3.n = 3;
              break;
            case 2:
              _context3.p = 2;
              _t2 = _context3.v;
              if (typeof NProgress !== 'undefined') {
                setTimeout(function () {
                  return NProgress.done();
                }, 300);
              }
            case 3:
              return _context3.a(2);
          }
        }, _callee3, null, [[0, 2]]);
      }))();
    },
    //------------------------------ Print (fallback) -------------------------\\
    print_pos: function print_pos() {
      var el = document.getElementById('invoice-POS');
      if (!el) {
        return;
      }
      var divContents = el.innerHTML;
      var a = window.open('', '', 'height=600, width=480');
      if (!a) {
        return;
      }
      a.document.write('<html><head><link rel="stylesheet" href="/css/pos_print.css"></head><body>');
      a.document.write(divContents);
      a.document.write('</body></html>');
      a.document.close();
      var _reloadParent = function reloadParent() {
        try {
          window.removeEventListener('focus', _reloadParent);
        } catch (e) {}
        try {
          a.close();
        } catch (e) {}
      };
      try {
        window.addEventListener('focus', _reloadParent);
      } catch (e) {}
      try {
        a.onafterprint = _reloadParent;
      } catch (e) {}
      setTimeout(function () {
        try {
          a.focus();
        } catch (e) {}
        try {
          a.print();
        } catch (e) {
          _reloadParent();
        }
      }, 300);
    },
    //----------------------------------Process Payment (mirror old) ------------------------------\\
    ensureSaleUuid: function ensureSaleUuid() {
      if (this.currentSaleUuid) {
        return this.currentSaleUuid;
      }
      var uuid = null;
      try {
        if (typeof window !== 'undefined' && window.crypto && typeof window.crypto.randomUUID === 'function') {
          uuid = window.crypto.randomUUID();
        }
      } catch (e) {
        uuid = null;
      }
      if (!uuid) {
        uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
          var r = Math.random() * 16 | 0;
          var v = c === 'x' ? r : r & 0x3 | 0x8;
          return v.toString(16);
        });
      }
      this.currentSaleUuid = uuid;
      return uuid;
    },
    processPayment: function processPayment() {
      var _this9 = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee5() {
        var saleUuid, newCardIndices, missing, tokenResults, tokensByLine, _idx2, lineKey, res, token, firstIdx, payload, response, _t4;
        return _regenerator().w(function (_context5) {
          while (1) switch (_context5.p = _context5.n) {
            case 0:
              saleUuid = _this9.ensureSaleUuid();
              _this9.paymentProcessing = true;
              _this9.isSubmitting = true;
              _context5.p = 1;
              if (_this9.stripeKey) {
                _context5.n = 2;
                break;
              }
              _this9.paymentProcessing = false;
              _this9.isSubmitting = false;
              if (typeof NProgress !== 'undefined') NProgress.done();
              _this9.makeToast('danger', _this9.$t ? _this9.$t('credit_card_account_not_available') : 'Credit card not available', _this9.$t ? _this9.$t('Failed') : 'Failed');
              return _context5.a(2);
            case 2:
              if (_this9.stripe) {
                _context5.n = 3;
                break;
              }
              _this9.paymentProcessing = false;
              _this9.isSubmitting = false;
              if (typeof NProgress !== 'undefined') NProgress.done();
              _this9.makeToast('danger', _this9.$t ? _this9.$t('Failed_to_load') : 'Failed to load.', _this9.$t ? _this9.$t('Failed') : 'Failed');
              return _context5.a(2);
            case 3:
              // Determine which lines require a new card (not saved)
              newCardIndices = (_this9.paymentLines || []).map(function (line, i) {
                var needsNew = _this9.isLineCreditCard(line);
                return needsNew ? i : null;
              }).filter(function (i) {
                return i !== null;
              }); // Validate that each such line has a mounted element
              missing = newCardIndices.find(function (i) {
                return !_this9.cardElementsByLine || !_this9.cardElementsByLine[i];
              });
              if (!(missing !== undefined)) {
                _context5.n = 4;
                break;
              }
              _this9.paymentProcessing = false;
              _this9.isSubmitting = false;
              if (typeof NProgress !== 'undefined') NProgress.done();
              _this9.makeToast('danger', _this9.$t ? _this9.$t('Please_enter_credit_card_details') : 'Please enter credit card details', _this9.$t ? _this9.$t('Warning') : 'Warning');
              return _context5.a(2);
            case 4:
              _context5.n = 5;
              return Promise.all(newCardIndices.map(/*#__PURE__*/function () {
                var _ref = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee4(i) {
                  var _t3;
                  return _regenerator().w(function (_context4) {
                    while (1) switch (_context4.p = _context4.n) {
                      case 0:
                        _context4.p = 0;
                        _context4.n = 1;
                        return _this9.stripe.createToken(_this9.cardElementsByLine[i]);
                      case 1:
                        return _context4.a(2, _context4.v);
                      case 2:
                        _context4.p = 2;
                        _t3 = _context4.v;
                        return _context4.a(2, {
                          error: _t3
                        });
                    }
                  }, _callee4, null, [[0, 2]]);
                }));
                return function (_x) {
                  return _ref.apply(this, arguments);
                };
              }()));
            case 5:
              tokenResults = _context5.v;
              tokensByLine = {};
              _idx2 = 0;
            case 6:
              if (!(_idx2 < tokenResults.length)) {
                _context5.n = 9;
                break;
              }
              lineKey = newCardIndices[_idx2];
              res = tokenResults[_idx2] || {};
              if (!res.error) {
                _context5.n = 7;
                break;
              }
              _this9.paymentProcessing = false;
              _this9.isSubmitting = false;
              if (typeof NProgress !== 'undefined') NProgress.done();
              _this9.makeToast('danger', _this9.$t ? _this9.$t('InvalidData') : 'Invalid data', _this9.$t ? _this9.$t('Failed') : 'Failed');
              return _context5.a(2);
            case 7:
              if (res.token && res.token.id) {
                tokensByLine[lineKey] = res.token.id;
              }
            case 8:
              _idx2++;
              _context5.n = 6;
              break;
            case 9:
              // Backward compatibility single token: prefer active line's token if any, else first
              token = null;
              if (_this9.activeCardLineIndex != null && tokensByLine[_this9.activeCardLineIndex]) {
                token = {
                  id: tokensByLine[_this9.activeCardLineIndex]
                };
              } else {
                firstIdx = newCardIndices && newCardIndices.length ? newCardIndices[0] : null;
                if (firstIdx != null && tokensByLine[firstIdx]) {
                  token = {
                    id: tokensByLine[firstIdx]
                  };
                }
              }
              payload = {
                client_id: _this9.clientId,
                warehouse_id: _this9.warehouseId,
                tax_rate: _this9.sale && _this9.sale.tax_rate ? _this9.sale.tax_rate : 0,
                TaxNet: _this9.sale && _this9.sale.TaxNet ? _this9.sale.TaxNet : 0,
                discount: _this9.sale && _this9.sale.discount ? _this9.sale.discount : 0,
                // Ensure order-level discount method is sent: '1' = percent, '2' = fixed (default)
                discount_Method: _this9.sale && _this9.sale.discount_Method ? String(_this9.sale.discount_Method) : '2',
                shipping: _this9.sale && _this9.sale.shipping ? _this9.sale.shipping : 0,
                details: _this9.details,
                GrandTotal: _this9.grandTotal || _this9.paymentForm.amountDue || _this9.totalPaid,
                // Multi-payment array with optional per-line account and saved card
                payments: (_this9.paymentLines || []).map(function (l) {
                  return {
                    amount: Number(l.amount) || 0,
                    payment_method_id: l.paymentMethodId,
                    account_id: l.accountId || _this9.paymentForm.accountId || null
                  };
                }),
                send_email: _this9.sendEmail,
                send_sms: _this9.sendSMS,
                account_id: _this9.paymentForm.accountId,
                payment_note: _this9.paymentNote || '',
                token: token && token.id ? token.id : null,
                is_new_credit_card: _this9.hasAnyNewCardToTokenize(),
                card_tokens_by_line: tokensByLine,
                discount_from_points: _this9.discountFromPoints || 0,
                used_points: _this9.usedPoints || 0,
                draft_sale_id: _this9.draftSaleId || null,
                sale_uuid: saleUuid || null
              };
              _context5.n = 10;
              return axios.post(_this9.createPosUrl, payload);
            case 10:
              response = _context5.v;
              _this9.paymentProcessing = false;
              _this9.isSubmitting = false;
              if (!(response && response.data && response.data.success === true)) {
                _context5.n = 14;
                break;
              }
              if (typeof NProgress !== 'undefined') NProgress.done();
              // Prefer parent's Invoice_POS if available (ensures existing invoice modal/printing works)
              if (!(_this9.$parent && typeof _this9.$parent.Invoice_POS === 'function')) {
                _context5.n = 12;
                break;
              }
              _context5.n = 11;
              return _this9.$parent.Invoice_POS(response.data.id);
            case 11:
              _context5.n = 13;
              break;
            case 12:
              _context5.n = 13;
              return _this9.Invoice_POS(response.data.id);
            case 13:
              _this9.$emit('payment-success', {
                id: response.data.id,
                payload: payload
              });
              _this9.$refs.paymentModal && _this9.$refs.paymentModal.hide && _this9.$refs.paymentModal.hide();
              _context5.n = 15;
              break;
            case 14:
              if (typeof NProgress !== 'undefined') NProgress.done();
              _this9.makeToast('danger', _this9.$t ? _this9.$t('InvalidData') : 'Invalid data', _this9.$t ? _this9.$t('Failed') : 'Failed');
            case 15:
              _context5.n = 17;
              break;
            case 16:
              _context5.p = 16;
              _t4 = _context5.v;
              _this9.paymentProcessing = false;
              _this9.isSubmitting = false;
              if (typeof NProgress !== 'undefined') NProgress.done();
              _this9.makeToast('danger', _this9.$t ? _this9.$t('InvalidData') : 'Invalid data', _this9.$t ? _this9.$t('Failed') : 'Failed');
            case 17:
              return _context5.a(2);
          }
        }, _callee5, null, [[1, 16]]);
      }))();
    },
    //----------------------------------Create POS (mirror old, with offline queue) ------------------------------\\
    CreatePOS: function CreatePOS() {
      var _this0 = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee6() {
        var saleUuid, zeroTotal, total, due, multi, currentDue, newSaleDue, newTotalDue, exceededAmount, t, buildPayload, isOnline, usingCard, payload, msg, anyNewCard, needsNewCard, _payload, response, isNetworkError, _msg, _t5;
        return _regenerator().w(function (_context6) {
          while (1) switch (_context6.p = _context6.n) {
            case 0:
              if (typeof NProgress !== 'undefined') {
                NProgress.start();
                NProgress.set(0.1);
              }
              saleUuid = _this0.ensureSaleUuid(); // Basic validations: allow 0 total only if exactly one payment line
              zeroTotal = _this0.totalPaid <= 0;
              if (!(!_this0.paymentLines.length || zeroTotal && _this0.paymentLines.length > 1)) {
                _context6.n = 1;
                break;
              }
              if (typeof NProgress !== 'undefined') NProgress.done();
              _this0.makeToast('danger', _this0.$t ? _this0.$t('InvalidData') : 'Invalid data', _this0.$t ? _this0.$t('Failed') : 'Failed');
              return _context6.a(2);
            case 1:
              // Account selection is optional per line; proceed even if unset
              // Validate multi-payment overpay like old POS
              total = parseFloat(_this0.totalPaid);
              due = parseFloat((_this0.paymentForm.amountDue || _this0.grandTotal || 0).toFixed(2));
              multi = _this0.paymentLines.length > 1;
              if (!(multi && total > due)) {
                _context6.n = 2;
                break;
              }
              _this0.makeToast('warning', _this0.$t ? _this0.$t('TotalPaidExceedsGrandTotalForMultiPayment') : 'Total paid exceeds grand total for multiple payments', _this0.$t ? _this0.$t('Warning') : 'Warning');
              if (typeof NProgress !== 'undefined') NProgress.done();
              return _context6.a(2);
            case 2:
              if (!(_this0.clientId && Number(_this0.clientCreditLimit || 0) > 0 && total < due)) {
                _context6.n = 3;
                break;
              }
              currentDue = parseFloat(_this0.clientNetBalance || 0);
              newSaleDue = due - total; // Remaining due from this sale
              newTotalDue = currentDue + newSaleDue;
              if (!(newTotalDue > Number(_this0.clientCreditLimit))) {
                _context6.n = 3;
                break;
              }
              if (typeof NProgress !== 'undefined') NProgress.done();
              exceededAmount = newTotalDue - Number(_this0.clientCreditLimit);
              t = _this0.$t ? _this0.$t.bind(_this0) : function (k) {
                return k;
              };
              _this0.makeToast('danger', t('Credit_Limit_Exceeded') + ': ' + _this0.formatCurrency(exceededAmount) + ' ' + t('exceeds_credit_limit_of') + ' ' + _this0.formatCurrency(_this0.clientCreditLimit), _this0.$t ? _this0.$t('Warning') : 'Warning');
              return _context6.a(2);
            case 3:
              buildPayload = function buildPayload() {
                // Ensure each detail line carries a sale_unit_id so offline sync can rely on it
                var normalizedDetails = (_this0.details || []).map(function (d) {
                  return _objectSpread(_objectSpread({}, d), {}, {
                    sale_unit_id: d && d.sale_unit_id !== undefined && d.sale_unit_id !== null && d.sale_unit_id !== '' ? d.sale_unit_id : d && d.sale_unit_id
                  });
                });
                return {
                  client_id: _this0.clientId,
                  warehouse_id: _this0.warehouseId,
                  tax_rate: _this0.sale && _this0.sale.tax_rate ? _this0.sale.tax_rate : 0,
                  TaxNet: _this0.sale && _this0.sale.TaxNet ? _this0.sale.TaxNet : 0,
                  discount: _this0.sale && _this0.sale.discount ? _this0.sale.discount : 0,
                  // Ensure order-level discount method is sent: '1' = percent, '2' = fixed (default)
                  discount_Method: _this0.sale && _this0.sale.discount_Method ? String(_this0.sale.discount_Method) : '2',
                  shipping: _this0.sale && _this0.sale.shipping ? _this0.sale.shipping : 0,
                  notes: _this0.saleNote || _this0.sale && _this0.sale.notes || '',
                  details: normalizedDetails,
                  GrandTotal: _this0.grandTotal || _this0.paymentForm.amountDue || total,
                  // Multi-payment array including per-line account (no global)
                  payments: (_this0.paymentLines || []).map(function (l) {
                    return {
                      amount: Number(l.amount) || 0,
                      payment_method_id: l.paymentMethodId,
                      account_id: l.accountId || null
                    };
                  }),
                  send_email: _this0.sendEmail,
                  send_sms: _this0.sendSMS,
                  // No global account_id
                  payment_note: _this0.paymentNote || '',
                  discount_from_points: _this0.discountFromPoints || 0,
                  used_points: _this0.usedPoints || 0,
                  draft_sale_id: _this0.draftSaleId || null,
                  sale_uuid: saleUuid || null
                };
              }; // Prefer explicit POS online state from parent; fall back to navigator.
              isOnline = _this0.isOnline !== false ? true : typeof window === 'undefined' || !window.navigator ? true : window.navigator.onLine !== false;
              usingCard = _this0.anyCreditCardUsed; // If we are offline and no credit card is involved, queue sale locally instead of calling API
              if (!(!isOnline && !usingCard)) {
                _context6.n = 4;
                break;
              }
              payload = buildPayload();
              if (typeof NProgress !== 'undefined') NProgress.done();
              _this0.paymentProcessing = false;
              _this0.isSubmitting = false;
              _this0.queueOfflineSale(payload);
              return _context6.a(2);
            case 4:
              if (!(!isOnline && usingCard)) {
                _context6.n = 5;
                break;
              }
              if (typeof NProgress !== 'undefined') NProgress.done();
              _this0.paymentProcessing = false;
              _this0.isSubmitting = false;
              msg = _this0.$t ? _this0.$t('pos.CreditCard_Requires_Online') || 'Credit card payments require an internet connection.' : 'Credit card payments require an internet connection.';
              _this0.makeToast && _this0.makeToast('warning', msg, _this0.$t ? _this0.$t('Warning') : 'Warning');
              return _context6.a(2);
            case 5:
              // Determine if any line requires a new card entry (no saved card selected)
              anyNewCard = _this0.hasAnyNewCardToTokenize();
              if (!anyNewCard) {
                _context6.n = 10;
                break;
              }
              if (_this0.stripeKey) {
                _context6.n = 6;
                break;
              }
              _this0.makeToast('danger', _this0.$t ? _this0.$t('credit_card_account_not_available') : 'Credit card not available', _this0.$t ? _this0.$t('Failed') : 'Failed');
              if (typeof NProgress !== 'undefined') NProgress.done();
              return _context6.a(2);
            case 6:
              if (_this0.stripe) {
                _context6.n = 7;
                break;
              }
              _this0.makeToast('danger', _this0.$t ? _this0.$t('Failed_to_load') : 'Failed to load.', _this0.$t ? _this0.$t('Failed') : 'Failed');
              if (typeof NProgress !== 'undefined') NProgress.done();
              return _context6.a(2);
            case 7:
              // Ensure at least one card element exists for any card lines requiring new card entry
              needsNewCard = Object.keys(_this0.cardElementsByLine || {}).some(function (i) {
                var li = Number(i);
                var line = (_this0.paymentLines || [])[li];
                return _this0.isLineCreditCard(line);
              });
              if (needsNewCard) {
                _context6.n = 8;
                break;
              }
              _this0.makeToast('danger', _this0.$t ? _this0.$t('Please_enter_credit_card_details') : 'Please enter credit card details', _this0.$t ? _this0.$t('Warning') : 'Warning');
              if (typeof NProgress !== 'undefined') NProgress.done();
              return _context6.a(2);
            case 8:
              _context6.n = 9;
              return _this0.processPayment();
            case 9:
              return _context6.a(2);
            case 10:
              // Non-card / saved card path
              _this0.paymentProcessing = true;
              _this0.isSubmitting = true;
              _context6.p = 11;
              _payload = buildPayload();
              _context6.n = 12;
              return axios.post(_this0.createPosUrl, _payload);
            case 12:
              response = _context6.v;
              if (!(response && response.data && response.data.success === true)) {
                _context6.n = 16;
                break;
              }
              if (typeof NProgress !== 'undefined') NProgress.done();
              _this0.paymentProcessing = false;
              _this0.isSubmitting = false;
              // Prefer parent's Invoice_POS if available (ensures existing invoice modal/printing works)
              if (!(_this0.$parent && typeof _this0.$parent.Invoice_POS === 'function')) {
                _context6.n = 14;
                break;
              }
              _context6.n = 13;
              return _this0.$parent.Invoice_POS(response.data.id);
            case 13:
              _context6.n = 15;
              break;
            case 14:
              _context6.n = 15;
              return _this0.Invoice_POS(response.data.id);
            case 15:
              _this0.$emit('payment-success', {
                id: response.data.id,
                payload: _payload
              });
              _this0.$refs.paymentModal && _this0.$refs.paymentModal.hide && _this0.$refs.paymentModal.hide();
              _context6.n = 17;
              break;
            case 16:
              if (typeof NProgress !== 'undefined') NProgress.done();
              _this0.paymentProcessing = false;
              _this0.isSubmitting = false;
              _this0.makeToast('danger', _this0.$t ? _this0.$t('InvalidData') : 'Invalid data', _this0.$t ? _this0.$t('Failed') : 'Failed');
            case 17:
              _context6.n = 19;
              break;
            case 18:
              _context6.p = 18;
              _t5 = _context6.v;
              if (typeof NProgress !== 'undefined') NProgress.done();
              _this0.paymentProcessing = false;
              _this0.isSubmitting = false;
              isNetworkError = !_t5.response || _t5.message === 'Network Error'; // In this non-card branch, true offline handling is already covered by the
              // explicit (!isOnline && !usingCard) path above. Here we are effectively
              // in "online" mode, so do NOT silently queue a new offline sale; instead
              // surface an error toast so the cashier can react.
              if (isNetworkError) {
                _msg = _this0.$t ? _this0.$t('pos.NetworkError') || 'Network error, please try again.' : 'Network error, please try again.';
                _this0.makeToast && _this0.makeToast('danger', _msg, _this0.$t ? _this0.$t('Failed') : 'Failed');
              } else {
                _this0.makeToast('danger', _this0.$t ? _this0.$t('InvalidData') : 'Invalid data', _this0.$t ? _this0.$t('Failed') : 'Failed');
              }
            case 19:
              return _context6.a(2);
          }
        }, _callee6, null, [[11, 18]]);
      }))();
    },
    queueOfflineSale: function queueOfflineSale(payload) {
      var record = null;
      try {
        if (_utils__WEBPACK_IMPORTED_MODULE_1__["default"] && _utils__WEBPACK_IMPORTED_MODULE_1__["default"].offlinePos && _utils__WEBPACK_IMPORTED_MODULE_1__["default"].offlinePos.addOfflineSale) {
          record = _utils__WEBPACK_IMPORTED_MODULE_1__["default"].offlinePos.addOfflineSale(payload);
        }
      } catch (e) {}
      // Record shadow stock deductions in IndexedDB for this offline sale (best-effort)
      try {
        var offlineId = record && record.id ? record.id : payload && payload.offline_id || null;
        if (offlineId && _utils__WEBPACK_IMPORTED_MODULE_1__["default"] && _utils__WEBPACK_IMPORTED_MODULE_1__["default"].shadowStock && _utils__WEBPACK_IMPORTED_MODULE_1__["default"].shadowStock.recordDeductions) {
          _utils__WEBPACK_IMPORTED_MODULE_1__["default"].shadowStock.recordDeductions(payload.warehouse_id, offlineId, payload.details || []);
        }
      } catch (e) {}
      try {
        var msg = this.$t ? this.$t('pos.Offline_Sale_Saved') || 'Sale saved offline. It will sync when you are back online.' : 'Sale saved offline. It will sync when you are back online.';
        this.makeToast && this.makeToast('success', msg, this.$t ? this.$t('Success') : 'Success');
      } catch (e) {}
      this.$emit('payment-success', {
        id: null,
        payload: payload,
        offline: true,
        offlineId: record && record.id ? record.id : null
      });
      this.$refs.paymentModal && this.$refs.paymentModal.hide && this.$refs.paymentModal.hide();
    },
    resetForm: function resetForm() {
      this.paymentForm = {
        amountDue: this.grandTotal || 0,
        accountId: '',
        date: this.getCurrentDateInTimezone(),
        reference: '',
        notes: ''
      };
      // Clear lines and any per-line state
      this.paymentLines = [];
      this.destroyAllCardElements && this.destroyAllCardElements();
      this.activeCardLineIndex = 0;
      this.sendEmail = false;
      this.sendSMS = false;
      this.paymentNote = '';
      this.saleNote = '';
      this.isCardInputComplete = false;
      this.isSubmitting = false;
      this.currentSaleUuid = null;
    },
    openModal: function openModal() {
      var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      if (data.id) {
        this.isEditMode = true;
        // Load edit data
        Object.assign(this.paymentForm, data);
      } else {
        this.isEditMode = false;
        // Set payment date to current date in configured timezone
        this.paymentForm.date = this.getCurrentDateInTimezone();
        if (data.reference) {
          this.paymentForm.reference = data.reference;
        }
        if (data.notes) {
          this.paymentForm.notes = data.notes;
        }
      }
      // Derive amountDue: prefer explicit data, then prop grandTotal, else 0
      if (Object.prototype.hasOwnProperty.call(data, 'amountDue') && data.amountDue !== undefined && data.amountDue !== null) {
        this.paymentForm.amountDue = Number(data.amountDue) || 0;
      } else {
        this.paymentForm.amountDue = this.grandTotal || 0;
      }
      // Initialize one payment line prefilled with amount due; use system defaults when available
      this.paymentLines = [];
      this.destroyAllCardElements && this.destroyAllCardElements();
      this.activeCardLineIndex = 0;
      var defaultMethodId = this.getDefaultPaymentMethodId();
      var defaultAccountId = this.getDefaultAccountId();
      this.paymentForm.accountId = defaultAccountId;
      this.paymentLines.push({
        amount: Number(this.paymentForm.amountDue || 0),
        paymentMethodId: defaultMethodId,
        accountId: defaultAccountId
      });
      this.paymentNote = '';
      this.saleNote = '';
      this.sendEmail = false;
      this.sendSMS = false;
      this.$refs.paymentModal.show();
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/pos.vue?vue&type=script&lang=js":
/*!***************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/pos.vue?vue&type=script&lang=js ***!
  \***************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! nprogress */ "./node_modules/nprogress/nprogress.js");
/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(nprogress__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var vue_easy_print__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vue-easy-print */ "./node_modules/vue-easy-print/src/index.js");
/* harmony import */ var vue_barcode__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vue-barcode */ "./node_modules/vue-barcode/index.js");
/* harmony import */ var vue_barcode__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(vue_barcode__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../utils */ "./resources/src/utils/index.js");
/* harmony import */ var _utils_priceFormat__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../utils/priceFormat */ "./resources/src/utils/priceFormat.js");
/* harmony import */ var _stripe_stripe_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @stripe/stripe-js */ "./node_modules/@stripe/stripe-js/dist/stripe.esm.js");
/* harmony import */ var _components_ModernPaymentModal_vue__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/ModernPaymentModal.vue */ "./resources/src/views/app/components/ModernPaymentModal.vue");
/* harmony import */ var _components_CustomFieldsForm_vue__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../components/CustomFieldsForm.vue */ "./resources/src/components/CustomFieldsForm.vue");
var _objectSpread2;
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t["return"] || t["return"](); } finally { if (u) throw o; } } }; }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }









/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty({
  components: {
    vueEasyPrint: vue_easy_print__WEBPACK_IMPORTED_MODULE_2__["default"],
    barcode: (vue_barcode__WEBPACK_IMPORTED_MODULE_3___default()),
    ModernPaymentModal: _components_ModernPaymentModal_vue__WEBPACK_IMPORTED_MODULE_7__["default"],
    CustomFieldsForm: _components_CustomFieldsForm_vue__WEBPACK_IMPORTED_MODULE_8__["default"]
  },
  metaInfo: {
    title: "POS"
  },
  data: function data() {
    return _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty({
      sendEmail: false,
      sendSMS: false,
      stripe: {},
      stripe_key: "",
      cardElement: {},
      paymentProcessing: false,
      DraftProcessing: false,
      hasSavedPaymentMethod: false,
      useSavedPaymentMethod: false,
      selectedCard: null,
      card_id: '',
      is_new_credit_card: false,
      submit_showing_credit_card: false,
      totalRows_draft_sales: "",
      draft_sales: [],
      draft_sales_page: 1,
      limit: "10",
      draft_sale_id: '',
      openingDraftId: null,
      serverParams: {
        sort: {
          field: "id",
          type: "desc"
        },
        page: 1,
        perPage: 10
      },
      client_name: '',
      paymentLines: [{
        // only the first line shows Received Amount
        amount: 0,
        payment_method_id: ''
      }],
      globalPaymentNote: '',
      selectedAccount: null,
      payment_methods: [],
      SubmitProcessing: false,
      // --- Customer Display (broadcast, multi-screen) ---
      _cd_broadcast_timer: null,
      customer_display_screen_id: function () {
        try {
          var s = localStorage.getItem('pos_customer_display_screen_id');
          if (s !== null && s !== '') return String(s);
        } catch (e) {}
        return '1';
      }(),
      search_category: '',
      search_brand: '',
      focused: false,
      timer: null,
      search_input: '',
      product_filter: [],
      isLoading: true,
      load_product: true,
      GrandTotal: 0,
      total: 0,
      Ref: "",
      clients: [],
      units: [],
      unitsByProductId: {},
      warehouses: [],
      payments: [],
      products: [],
      products_pos: [],
      details: [],
      detail: {},
      categories: [],
      brands: [],
      accounts: [],
      default_account_id: null,
      default_payment_method_id: null,
      pos_settings: {
        quick_add_customer: false,
        barcode_scanning_sound: true,
        show_product_images: true,
        show_stock_quantity: true,
        enable_hold_sales: true,
        enable_customer_points: true,
        show_categories: true,
        show_brands: true,
        receipt_paper_size: 80
      },
      product_currentPage: 1,
      paginated_Products: [],
      product_perPage: 12,
      product_totalRows: 0,
      productsLoading: false,
      paginated_Brands: "",
      brand_currentPage: 1,
      brand_perPage: 3,
      paginated_Category: "",
      category_currentPage: 1,
      category_perPage: 3,
      barcodeFormat: "CODE128",
      today_sales: {
        total_sales_amount: "",
        total_amount_paid: "",
        today: "",
        total_cash: "",
        total_credit_card: "",
        total_cheque: "",
        payment_methods: []
      },
      // Optional price format key for frontend display (loaded from system settings/localStorage)
      price_format_key: null,
      // Preferred invoice format for POS printing: 'thermal' (default) or 'a4'
      invoice_format: 'thermal',
      invoice_pos: {
        sale: {
          Ref: "",
          client_name: "",
          discount: "",
          taxe: "",
          date: "",
          tax_rate: "",
          shipping: "",
          GrandTotal: "",
          paid_amount: ""
        },
        details: [],
        setting: {
          logo: "",
          CompanyName: "",
          CompanyAdress: "",
          email: "",
          CompanyPhone: "",
          vat_number: "",
          company_name_ar: "",
          zatca_enabled: false,
          // Preferred invoice format for POS printing: 'thermal' (default) or 'a4'
          invoice_format: "thermal"
        },
        zatca_qr: ""
      },
      selectedClientPoints: 0,
      showPointsSection: false,
      points_to_convert: 0,
      discount_from_points: 0,
      used_points: 0,
      clientIsEligible: false,
      pointsConverted: false,
      selectedClientCreditLimit: 0,
      selectedClientNetBalance: 0,
      point_to_amount_rate: 0,
      zatcaRenderedPos: false,
      sale: {
        warehouse_id: "",
        client_id: "",
        tax_rate: 0,
        shipping: 2,
        discount: 0,
        discount_Method: "2",
        // "1" for percentage, "2" for fixed (default)
        TaxNet: 0,
        notes: ''
      },
      client: {
        id: "",
        name: "",
        code: "",
        email: "",
        phone: "",
        country: "",
        tax_number: "",
        city: "",
        adresse: "",
        is_royalty_eligible: ""
      },
      quickAddCustomFieldValues: {},
      category_id: "",
      brand_id: "",
      default_tax: 0,
      languages_available: [],
      product: {
        id: "",
        code: "",
        product_type: "",
        current: "",
        quantity: "",
        check_qty: "",
        discount: "",
        DiscountNet: "",
        discount_Method: "",
        sale_unit_id: "",
        fix_stock: "",
        fix_price: "",
        name: "",
        unitSale: "",
        Net_price: "",
        Unit_price: "",
        Unit_price_wholesale: "",
        wholesale_Net_price: "",
        min_price: 0,
        price_type: 'retail',
        retail_unit_price: "",
        wholesale_unit_price: "",
        Total_price: "",
        subtotal: "",
        product_id: "",
        detail_id: "",
        taxe: "",
        tax_percent: "",
        tax_method: "",
        product_variant_id: "",
        is_imei: "",
        imei_number: ""
      },
      sound: "/audio/Beep.wav",
      audio: new Audio("/audio/Beep.wav"),
      // Cash Register state (optional module)
      registerEnabled: true,
      currentRegister: null,
      registerBusy: false,
      registerForm: {
        warehouse_id: '',
        opening_balance: 0,
        notes: ''
      },
      closeForm: {
        counted_cash: 0,
        notes: ''
      },
      cashMove: {
        type: 'in',
        amount: 0,
        notes: ''
      },
      warehouseOptions: [],
      selectedClientId: "",
      productsReady: false,
      uiLoadingProductId: null,
      detailLoading: false,
      uiLoadingDetailId: null
    }, "detailLoading", false), "isOnline", true), "offlineSyncInProgress", false), "offlineSalesCount", 0), "offlineLastSyncError", null), "onlineReloadModalVisible", false), "onlineReloadAfterSale", false), "reloadAfterOfflineSync", false);
  },
  computed: _objectSpread(_objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_1__.mapGetters)(["currentUser", "currentUserPermissions", "show_language"])), {}, {
    // Receipt subtotal (sum of invoice detail totals; before order tax/discount/shipping)
    invoiceSubtotal: function invoiceSubtotal() {
      try {
        var details = this.invoice_pos && Array.isArray(this.invoice_pos.details) ? this.invoice_pos.details : [];
        return details.reduce(function (sum, d) {
          var n = Number(d && d.total != null ? d.total : 0);
          return sum + (Number.isFinite(n) ? n : 0);
        }, 0);
      } catch (e) {
        return 0;
      }
    },
    // Normalize POS receipt layout selection (1, 2, or 3)
    currentReceiptLayout: function currentReceiptLayout() {
      var raw = this.pos_settings && this.pos_settings.receipt_layout != null ? this.pos_settings.receipt_layout : 1;
      var n = Number(raw) || 1;
      return [1, 2, 3].includes(n) ? n : 1;
    },
    // Normalize receipt paper size (58mm, 80mm, 88mm)
    currentReceiptPaperSize: function currentReceiptPaperSize() {
      var raw = this.pos_settings && this.pos_settings.receipt_paper_size != null ? this.pos_settings.receipt_paper_size : 80;
      var n = Number(raw) || 80;
      return [58, 80, 88].includes(n) ? n : 80;
    },
    currentReceiptPaperSizeClass: function currentReceiptPaperSizeClass() {
      var size = this.currentReceiptPaperSize;
      if (size === 58) return 'receipt-58';
      if (size === 88) return 'receipt-88';
      return 'receipt-80';
    },
    // Customer options for v-select with phone search capability
    customerOptions: function customerOptions() {
      return this.clients.map(function (client) {
        return {
          label: client.name,
          value: client.id,
          phone: client.phone || '',
          name: client.name || ''
        };
      });
    },
    // Customer display screen options (multi-screen support)
    customerDisplayScreenOptions: function customerDisplayScreenOptions() {
      var _this = this;
      return [1, 2, 3, 4, 5].map(function (n) {
        return {
          label: _this.$t('Screen') + ' ' + n,
          value: String(n)
        };
      });
    },
    // Check if Quick Add Customer is enabled (handles both boolean and integer values)
    isQuickAddCustomerEnabled: function isQuickAddCustomerEnabled() {
      var value = this.pos_settings.quick_add_customer;
      // Handle both boolean and integer (0/1) values
      if (typeof value === 'number') {
        return value === 1;
      }
      return value === true || value === 'true' || value === '1';
    },
    // Total pages for product list
    product_lastPage: function product_lastPage() {
      var total = Number(this.product_totalRows || 0);
      var per = Number(this.product_perPage || 1);
      var pages = Math.ceil(total / per);
      return pages > 0 ? pages : 1;
    },
    // Windowed list of page items with ellipses, e.g. [1, '…', 4, 5, 6, '…', 20]
    product_visiblePageItems: function product_visiblePageItems() {
      var current = Number(this.product_currentPage || 1);
      var last = this.product_lastPage;
      var windowSize = 1; // pages to show on each side of current
      var pages = new Set([1, last]);
      for (var p = current - windowSize; p <= current + windowSize; p++) {
        if (p >= 1 && p <= last) pages.add(p);
      }
      var sorted = Array.from(pages).sort(function (a, b) {
        return a - b;
      });
      var out = [];
      var prev = null;
      var _iterator = _createForOfIteratorHelper(sorted),
        _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var _p = _step.value;
          if (prev !== null && _p - prev > 1) out.push('…');
          out.push(_p);
          prev = _p;
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
      return out;
    },
    anyCreditCardUsed: function anyCreditCardUsed() {
      return this.paymentLines.some(function (p) {
        return p.payment_method_id === '1' || p.payment_method_id === 1;
      });
    },
    // Sum of all entered payment lines
    totalPaid: function totalPaid() {
      return this.paymentLines.reduce(function (sum, p) {
        return sum + Number(p.amount || 0);
      }, 0).toFixed(2);
    },
    // Calculate manual discount amount only (excluding points) for receipt display
    calculatedManualDiscountAmount: function calculatedManualDiscountAmount() {
      try {
        // For invoice_pos (receipt display), use invoice_pos data
        var saleData = this.invoice_pos && this.invoice_pos.sale ? this.invoice_pos.sale : this.sale;
        var discountMethod = String(saleData.discount_Method || '2'); // Default to fixed for backward compatibility
        var discountValue = Number(saleData.discount || 0);
        var subtotal = this.invoiceSubtotal || this.total || 0;
        if (discountMethod === '1') {
          // Percentage discount on subtotal (manual discount only, no points)
          return parseFloat((subtotal * (discountValue / 100)).toFixed(2));
        } else {
          // Fixed discount (manual discount only, no points)
          return parseFloat(Math.min(discountValue, subtotal).toFixed(2));
        }
      } catch (e) {
        return 0;
      }
    },
    // Calculate actual discount amount for display (handles both percentage and fixed, includes points)
    calculatedDiscountAmount: function calculatedDiscountAmount() {
      try {
        // For invoice_pos (receipt display), use invoice_pos data
        var saleData = this.invoice_pos && this.invoice_pos.sale ? this.invoice_pos.sale : this.sale;
        var discountMethod = String(saleData.discount_Method || '2'); // Default to fixed for backward compatibility
        var discountValue = Number(saleData.discount || 0);
        var subtotal = this.invoiceSubtotal || this.total || 0;

        // Get discount_from_points from invoice_pos.sale if available, otherwise use current sale's discount_from_points
        var pointsDiscount = Number(saleData.discount_from_points !== undefined && saleData.discount_from_points !== null ? saleData.discount_from_points : this.discount_from_points || 0);
        if (discountMethod === '1') {
          // Percentage discount on subtotal
          var percentAmount = parseFloat((subtotal * (discountValue / 100)).toFixed(2));
          // Points-based discount is always a fixed amount; apply it in addition, but never exceed remaining subtotal
          var remainingAfterPercent = Math.max(subtotal - percentAmount, 0);
          var pointsAmount = parseFloat(Math.min(pointsDiscount, remainingAfterPercent).toFixed(2));
          return percentAmount + pointsAmount;
        } else {
          // Fixed discount: apply both manual discount and points discount separately
          var manualDiscount = parseFloat(Math.min(discountValue, subtotal).toFixed(2));
          var remainingAfterManual = Math.max(subtotal - manualDiscount, 0);
          var _pointsAmount = parseFloat(Math.min(pointsDiscount, remainingAfterManual).toFixed(2));
          return manualDiscount + _pointsAmount;
        }
      } catch (e) {
        return 0;
      }
    },
    // What's still due (never negative)
    balance: function balance() {
      var b = this.GrandTotal - this.totalPaid;
      return (b > 0 ? b : 0).toFixed(2);
    },
    // How much to return if over-paid
    changeReturn: function changeReturn() {
      var c = this.totalPaid - this.GrandTotal;
      return (c > 0 ? c : 0).toFixed(2);
    },
    brand_totalRows: function brand_totalRows() {
      return this.brands.length;
    },
    category_totalRows: function category_totalRows() {
      return this.categories.length;
    },
    offlineStatusTitle: function offlineStatusTitle() {
      try {
        if (!this.isOnline) {
          return this.$t ? this.$t('pos.Offline_Mode') : 'Offline mode';
        }
        if (this.offlineSalesCount > 0) {
          return this.$t ? this.$t('pos.Sync_Offline_Sales') : 'Sync offline sales';
        }
        return this.$t ? this.$t('Online') : 'Online';
      } catch (e) {
        return 'POS';
      }
    },
    filteredCategories: function filteredCategories() {
      var _this2 = this;
      if (this.search_category.trim() === '') {
        return this.paginated_Category;
      }
      return this.paginated_Category.filter(function (category) {
        return category.name.toLowerCase().includes(_this2.search_category.toLowerCase());
      });
    },
    filteredBrands: function filteredBrands() {
      var _this3 = this;
      if (this.search_brand.trim() === '') {
        return this.paginated_Brands;
      }
      return this.paginated_Brands.filter(function (brand) {
        return brand.name.toLowerCase().includes(_this3.search_brand.toLowerCase());
      });
    },
    displaySavedPaymentMethods: function displaySavedPaymentMethods() {
      if (this.hasSavedPaymentMethod) {
        return true;
      } else {
        return false;
      }
    },
    displayFormNewCard: function displayFormNewCard() {
      if (this.useSavedPaymentMethod) {
        return false;
      } else {
        return true;
      }
    },
    isSelectedCard: function isSelectedCard() {
      var _this4 = this;
      return function (card) {
        return _this4.selectedCard === card;
      };
    },
    columns_draft_sales: function columns_draft_sales() {
      return [{
        label: this.$t("date"),
        field: "date",
        tdClass: "text-left",
        thClass: "text-left",
        sortable: false
      }, {
        label: this.$t("Reference"),
        field: "Ref",
        tdClass: "text-left",
        thClass: "text-left",
        sortable: false
      }, {
        label: this.$t("Customer"),
        field: "client_name",
        tdClass: "text-left",
        thClass: "text-left",
        sortable: false
      }, {
        label: this.$t("warehouse"),
        field: "warehouse_name",
        tdClass: "text-left",
        thClass: "text-left",
        sortable: false
      }, {
        label: this.$t("Total"),
        field: "GrandTotal",
        tdClass: "text-left",
        thClass: "text-left",
        sortable: false
      }, {
        label: this.$t("Action"),
        field: "actions",
        html: true,
        tdClass: "text-right",
        thClass: "text-right",
        sortable: false
      }];
    }
  }),
  watch: {
    // When the warehouse changes (including being cleared), clear the current
    // checkout so we never mix products/stock from different warehouses.
    'sale.warehouse_id': function saleWarehouse_id(newVal, oldVal) {
      // Only react when there was a previously selected warehouse and it
      // actually changed.
      if (!oldVal || oldVal === newVal) {
        return;
      }

      // Clear cart lines and totals but keep current client and general UI state.
      this.details = [];
      this.product = {};
      this.GrandTotal = 0;
      this.total = 0;

      // Notify any external listeners (dashboard widgets, etc.) that the
      // checkout has been cleared.
      try {
        this._cd_emit && this._cd_emit({
          currency: this.currentUser && this.currentUser.currency || '',
          details: [],
          discount: 0,
          TaxNet: 0,
          GrandTotal: 0
        }, true);
      } catch (e) {}
    }
  }
}, "watch", {
  'invoice_pos.zatca_qr': function invoice_posZatca_qr(val) {
    var _this5 = this;
    if (val) {
      this.$nextTick(function () {
        return _this5.renderZatcaQrPos();
      });
    }
  }
}), "mounted", function mounted() {
  this.changeSidebarProperties();
  this.paginate_products(this.product_perPage, 0);
}), "methods", _objectSpread(_objectSpread({
  // Custom filter function for customer v-select to search by name and phone
  filterCustomerByPhone: function filterCustomerByPhone(option, label, search) {
    if (!search) return true;
    var searchLower = search.toLowerCase();
    var name = (option.name || '').toLowerCase();
    var phone = (option.phone || '').toLowerCase();
    return name.includes(searchLower) || phone.includes(searchLower);
  },
  refreshCurrentRegister: function refreshCurrentRegister() {
    var _this6 = this;
    return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee() {
      var params, _yield$axios$get, data, _t;
      return _regenerator().w(function (_context) {
        while (1) switch (_context.p = _context.n) {
          case 0:
            _context.p = 0;
            if (_this6.currentUser) {
              _context.n = 1;
              break;
            }
            return _context.a(2);
          case 1:
            params = {};
            if (_this6.sale && _this6.sale.warehouse_id) params.warehouse_id = _this6.sale.warehouse_id;
            _context.n = 2;
            return axios.get("cash-registers/current/".concat(_this6.currentUser.id), {
              params: params
            });
          case 2:
            _yield$axios$get = _context.v;
            data = _yield$axios$get.data;
            _this6.currentRegister = data.register || null;
            _context.n = 4;
            break;
          case 3:
            _context.p = 3;
            _t = _context.v;
            _this6.currentRegister = null;
          case 4:
            return _context.a(2);
        }
      }, _callee, null, [[0, 3]]);
    }))();
  },
  // ---------- Customer Display helpers ----------
  _cd_emit: function _cd_emit(payload) {
    var completed = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
    var screenId = this.customer_display_screen_id || '1';
    try {
      if (window.Echo && window.Echo.channel) {
        var ch = 'pos-cart.' + screenId;
        window.Echo.channel(ch).whisper('cart-updated', payload);
        if (completed) window.Echo.channel(ch).whisper('sale-completed', true);
        return;
      }
    } catch (e) {/* ignore */}
    try {
      window.axios && window.axios.post('pos/customer-display/broadcast', {
        cart: payload,
        completed: completed,
        screen_id: screenId
      });
    } catch (e) {/* ignore */}
  },
  _cd_queue_broadcast: function _cd_queue_broadcast() {
    var _this7 = this;
    if (this._cd_broadcast_timer) clearTimeout(this._cd_broadcast_timer);
    this._cd_broadcast_timer = setTimeout(function () {
      var payload = {
        currency: _this7.currentUser && _this7.currentUser.currency || '',
        discount: _this7.sale && _this7.sale.discount ? _this7.sale.discount : 0,
        TaxNet: _this7.sale && _this7.sale.TaxNet ? _this7.sale.TaxNet : 0,
        shipping: _this7.normalizeShippingAmount(_this7.sale && _this7.sale.shipping),
        GrandTotal: _this7.GrandTotal || 0,
        details: (_this7.details || []).map(function (d) {
          return {
            name: d.name,
            quantity: d.quantity,
            // Back-compat: keep total, but also send unit_price and line_total explicitly
            total: d.total != null ? d.total : d.Net_price || 0,
            unit_price: d.Net_price != null ? d.Net_price : d.Unit_price != null ? d.Unit_price : d.price != null ? d.price : 0,
            line_total: d.total != null ? d.total : (d.Net_price || 0) * (d.quantity || 0)
          };
        })
      };
      _this7._cd_emit(payload);
    }, 200); // small debounce
  },
  submitOpenRegister: function submitOpenRegister() {
    var _this8 = this;
    return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2() {
      var _yield$axios$post, data, _e$response, msg, _t2;
      return _regenerator().w(function (_context2) {
        while (1) switch (_context2.p = _context2.n) {
          case 0:
            if (_this8.registerForm.warehouse_id) {
              _context2.n = 1;
              break;
            }
            _this8.makeToast('warning', _this8.$t('Please_select_warehouse'), _this8.$t('Warning'));
            return _context2.a(2);
          case 1:
            _this8.registerBusy = true;
            _context2.p = 2;
            _context2.n = 3;
            return axios.post('cash-registers/open', {
              user_id: _this8.currentUser.id,
              warehouse_id: _this8.registerForm.warehouse_id,
              opening_balance: _this8.registerForm.opening_balance || 0,
              notes: _this8.registerForm.notes || ''
            });
          case 3:
            _yield$axios$post = _context2.v;
            data = _yield$axios$post.data;
            _this8.$bvModal.hide('OpenRegisterModal');
            _this8.makeToast('success', _this8.$t('RegisterOpened'), _this8.$t('Success'));
            // Immediately reflect UI without waiting for fetch
            _this8.currentRegister = data && data.register ? data.register : _this8.currentRegister;
            // Fallback refresh to ensure latest from server
            _this8.refreshCurrentRegister();
            _context2.n = 5;
            break;
          case 4:
            _context2.p = 4;
            _t2 = _context2.v;
            msg = ((_e$response = _t2.response) === null || _e$response === void 0 || (_e$response = _e$response.data) === null || _e$response === void 0 ? void 0 : _e$response.message) || _this8.$t('OperationFailed');
            _this8.makeToast('danger', msg, _this8.$t('Failed'));
          case 5:
            _context2.p = 5;
            _this8.registerBusy = false;
            return _context2.f(5);
          case 6:
            return _context2.a(2);
        }
      }, _callee2, null, [[2, 4, 5, 6]]);
    }))();
  },
  submitCloseRegister: function submitCloseRegister() {
    var _this9 = this;
    return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee3() {
      var _e$response2, msg, _t3;
      return _regenerator().w(function (_context3) {
        while (1) switch (_context3.p = _context3.n) {
          case 0:
            if (_this9.currentRegister) {
              _context3.n = 1;
              break;
            }
            return _context3.a(2);
          case 1:
            _this9.registerBusy = true;
            _context3.p = 2;
            _context3.n = 3;
            return axios.post('cash-registers/close', {
              register_id: _this9.currentRegister.id,
              counted_cash: _this9.closeForm.counted_cash || 0,
              notes: _this9.closeForm.notes || ''
            });
          case 3:
            _this9.$bvModal.hide('CloseRegisterModal');
            _this9.makeToast('success', _this9.$t('RegisterClosed'), _this9.$t('Success'));
            _this9.refreshCurrentRegister();
            _context3.n = 5;
            break;
          case 4:
            _context3.p = 4;
            _t3 = _context3.v;
            msg = ((_e$response2 = _t3.response) === null || _e$response2 === void 0 || (_e$response2 = _e$response2.data) === null || _e$response2 === void 0 ? void 0 : _e$response2.message) || _this9.$t('OperationFailed');
            _this9.makeToast('danger', msg, _this9.$t('Failed'));
          case 5:
            _context3.p = 5;
            _this9.registerBusy = false;
            return _context3.f(5);
          case 6:
            return _context3.a(2);
        }
      }, _callee3, null, [[2, 4, 5, 6]]);
    }))();
  },
  resolveProductImage: function resolveProductImage(imagePath) {
    if (!imagePath) return '';
    // If already an absolute URL, return as is
    if (/^https?:\/\//i.test(imagePath)) return imagePath;
    // Normalize and prefix with public images directory
    var clean = String(imagePath).replace(/^\/+/, '');
    return "/images/products/".concat(clean);
  },
  getResultValue: function getResultValue(result) {
    return result.code + " (" + result.name + ")";
  },
  SearchProduct: function SearchProduct(result) {
    if (this.load_product) {
      this.load_product = false;
      this.product = {};
      if (result.product_type == 'is_service') {
        this.product.quantity = 1;
        this.product.code = result.code;
      } else {
        this.product.code = result.code;
        this.product.current = result.qte_sale;
        this.product.fix_stock = result.qte;
        this.product.quantity = result.qte_sale < 1 ? result.qte_sale : 1;
      }
      this.product.product_variant_id = result.product_variant_id;
      this.Get_Product_Details(result.id, result.product_variant_id, result);
      this.search_input = '';
      this.product_filter = [];
    } else {
      this.makeToast("warning", this.$t("Please_wait_until_the_product_is_loaded"), this.$t("Warning"));
    }
  }
}, (0,vuex__WEBPACK_IMPORTED_MODULE_1__.mapActions)(["changeSidebarProperties", "changeThemeMode", "logout"])), {}, (_objectSpread2 = {
  // ... All methods from old_pos will be injected here
  logoutUser: function logoutUser() {
    this.$store.dispatch("logout");
  },
  handleFocus: function handleFocus() {
    this.focused = true;
  },
  handleBlur: function handleBlur() {
    this.focused = false;
  },
  showModal: function showModal() {
    this.$bvModal.show('open_scan');
  },
  onScan: function onScan(decodedText, decodedResult) {
    var code = decodedText;
    this.search_input = code;
    this.search();
    this.$bvModal.hide('open_scan');
  },
  addPaymentLine: function addPaymentLine() {
    this.paymentLines.push({
      amount: 0,
      payment_method_id: ''
    });
  },
  removePaymentLine: function removePaymentLine(idx) {
    if (this.paymentLines.length > 1) {
      this.paymentLines.splice(idx, 1);
    }
  },
  setQuickAmount: function setQuickAmount(val) {
    // assign to current active line (e.g. last)
    var line = this.paymentLines[this.paymentLines.length - 1];
    line.amount = val;
  },
  appendDigit: function appendDigit(d) {
    // append to the last line's amount
    var line = this.paymentLines[this.paymentLines.length - 1];
    var s = String(line.amount || '');
    if (s === '0') s = d;else s += d;
    line.amount = parseFloat(s);
  },
  clearInput: function clearInput() {
    this.paymentLines[this.paymentLines.length - 1].amount = 0;
  },
  backspace: function backspace() {
    var line = this.paymentLines[this.paymentLines.length - 1];
    var s = String(line.amount || '');
    s = s.slice(0, -1) || '0';
    line.amount = parseFloat(s);
  },
  Selected_PaymentMethod: function Selected_PaymentMethod(value) {
    var _this0 = this;
    return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee4() {
      return _regenerator().w(function (_context4) {
        while (1) switch (_context4.n) {
          case 0:
            if (!(value == '1' || value == 1)) {
              _context4.n = 2;
              break;
            }
            _this0.savedPaymentMethods = [];
            _this0.submit_showing_credit_card = true;
            _this0.selectedCard = null;
            _this0.card_id = '';
            // Check if the customer has saved payment methods
            _context4.n = 1;
            return axios.get("/retrieve-customer?customerId=".concat(_this0.selectedClientId)).then(function (response) {
              // If the customer has saved payment methods, display them
              _this0.savedPaymentMethods = response.data.data;
              _this0.card_id = response.data.customer_default_source;
              _this0.hasSavedPaymentMethod = true;
              _this0.useSavedPaymentMethod = true;
              _this0.is_new_credit_card = false;
              _this0.submit_showing_credit_card = false;
            })["catch"](function (error) {
              // If the customer does not have saved payment methods, show the card element for them to enter their payment information
              _this0.hasSavedPaymentMethod = false;
              _this0.useSavedPaymentMethod = false;
              _this0.is_new_credit_card = true;
              _this0.card_id = '';
              setTimeout(function () {
                _this0.loadStripe_payment();
              }, 1000);
              _this0.submit_showing_credit_card = false;
            });
          case 1:
            _context4.n = 3;
            break;
          case 2:
            _this0.hasSavedPaymentMethod = false;
            _this0.useSavedPaymentMethod = false;
            _this0.is_new_credit_card = false;
          case 3:
            return _context4.a(2);
        }
      }, _callee4);
    }))();
  },
  show_saved_credit_card: function show_saved_credit_card() {
    this.hasSavedPaymentMethod = true;
    this.useSavedPaymentMethod = true;
    this.is_new_credit_card = false;
    this.Selected_PaymentMethod(1);
  },
  show_new_credit_card: function show_new_credit_card() {
    var _this1 = this;
    this.selectedCard = null;
    this.card_id = '';
    this.useSavedPaymentMethod = false;
    this.hasSavedPaymentMethod = false;
    this.is_new_credit_card = true;
    setTimeout(function () {
      _this1.loadStripe_payment();
    }, 500);
  },
  selectCard: function selectCard(card) {
    this.selectedCard = card;
    this.card_id = card.card_id;
  },
  loadStripe_payment: function loadStripe_payment() {
    var _this10 = this;
    return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee5() {
      var elements;
      return _regenerator().w(function (_context5) {
        while (1) switch (_context5.n) {
          case 0:
            _context5.n = 1;
            return (0,_stripe_stripe_js__WEBPACK_IMPORTED_MODULE_6__.loadStripe)("".concat(_this10.stripe_key));
          case 1:
            _this10.stripe = _context5.v;
            elements = _this10.stripe.elements();
            _this10.cardElement = elements.create("card", {
              classes: {
                base: "bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 text-base outline-none text-gray-700 p-3 leading-8 transition-colors duration-200 ease-in-out"
              }
            });
            _this10.cardElement.mount("#card-element");
          case 2:
            return _context5.a(2);
        }
      }, _callee5);
    }))();
  },
  SetLocal: function SetLocal(locale) {
    this.$i18n.locale = locale;
    this.$store.dispatch("setLanguage", locale);
    Fire.$emit("ChangeLanguage");
    window.location.reload();
  },
  handleFullScreen: function handleFullScreen() {
    _utils__WEBPACK_IMPORTED_MODULE_4__["default"].toggleFullScreen();
  }
}, _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_objectSpread2, "logoutUser", function logoutUser() {
  this.logout();
}), "Product_paginatePerPage", function Product_paginatePerPage() {
  // Always paginate from the full in‑memory list; backend now returns
  // the entire filtered collection and we handle pagination here.
  this.paginate_products(this.product_perPage, 0);
}), "onProductPageItemClick", function onProductPageItemClick(item) {
  if (typeof item === 'number' && item >= 1 && item <= this.product_lastPage && item !== this.product_currentPage) {
    this.Product_onPageChanged(item);
  }
}), "paginate_products", function paginate_products(pageSize, pageNumber) {
  var itemsToParse = Array.isArray(this.products) ? this.products : [];
  this.paginated_Products = itemsToParse.slice(pageNumber * pageSize, (pageNumber + 1) * pageSize);
}), "Product_onPageChanged", function Product_onPageChanged(page) {
  // Pure frontend pagination: just change the visible slice,
  // do not refetch since we already hold the full filtered list.
  this.product_currentPage = page;
  this.paginate_products(this.product_perPage, page - 1);
}), "BrandpaginatePerPage", function BrandpaginatePerPage() {
  this.paginate_Brands(this.brand_perPage, 0);
}), "paginate_Brands", function paginate_Brands(pageSize, pageNumber) {
  var itemsToParse = this.brands;
  this.paginated_Brands = itemsToParse.slice(pageNumber * pageSize, (pageNumber + 1) * pageSize);
}), "BrandonPageChanged", function BrandonPageChanged(page) {
  this.paginate_Brands(this.brand_perPage, page - 1);
}), "Category_paginatePerPage", function Category_paginatePerPage() {
  this.paginate_Category(this.category_perPage, 0);
}), "paginate_Category", function paginate_Category(pageSize, pageNumber) {
  var itemsToParse = this.categories;
  this.paginated_Category = itemsToParse.slice(pageNumber * pageSize, (pageNumber + 1) * pageSize);
}), _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_objectSpread2, "Category_onPageChanged", function Category_onPageChanged(page) {
  this.paginate_Category(this.category_perPage, page - 1);
}), "Submit_Pos", function Submit_Pos() {
  nprogress__WEBPACK_IMPORTED_MODULE_0___default().start();
  nprogress__WEBPACK_IMPORTED_MODULE_0___default().set(0.1);
  if (this.verifiedForm()) {
    Fire.$emit("pay_now");
  } else {
    nprogress__WEBPACK_IMPORTED_MODULE_0___default().done();
  }
}), "Submit_Draft", function Submit_Draft() {
  nprogress__WEBPACK_IMPORTED_MODULE_0___default().start();
  nprogress__WEBPACK_IMPORTED_MODULE_0___default().set(0.1);
  if (this.verifiedForm()) {
    this.Create_Draft();
  } else {
    nprogress__WEBPACK_IMPORTED_MODULE_0___default().done();
  }
}), "verifiedForm", function verifiedForm() {
  if (this.selectedClientId == "" || this.selectedClientId === null) {
    this.makeToast("danger", this.$t("Choose_Customer"), this.$t("Failed"));
    return false;
  } else if (this.sale.warehouse_id == "" || this.sale.warehouse_id === null) {
    this.makeToast("danger", this.$t("Choose_Warehouse"), this.$t("Failed"));
    return false;
  } else if (this.details.length === 0) {
    this.makeToast("danger", this.$t("PleaseAddProducts"), this.$t("Failed"));
    return false;
  }
  return true;
}), "Create_Draft", function Create_Draft() {
  var _this11 = this;
  nprogress__WEBPACK_IMPORTED_MODULE_0___default().start();
  nprogress__WEBPACK_IMPORTED_MODULE_0___default().set(0.1);
  this.DraftProcessing = true;
  var shipping = this.ensureShippingAmount();
  axios.post("pos/create_draft", {
    draft_sale_id: this.draft_sale_id || undefined,
    client_id: this.selectedClientId,
    warehouse_id: this.sale.warehouse_id,
    tax_rate: this.sale.tax_rate ? this.sale.tax_rate : 0,
    TaxNet: this.sale.TaxNet ? this.sale.TaxNet : 0,
    discount: this.sale.discount ? this.sale.discount : 0,
    discount_Method: String(this.sale.discount_Method || '2'),
    // Ensure it's always a string: '1' for percentage, '2' for fixed
    shipping: shipping,
    notes: this.sale.notes,
    details: this.details,
    GrandTotal: this.GrandTotal
  }).then(function (response) {
    if (response.data.success === true) {
      _this11.makeToast("success", _this11.$t("Draft_Created_successfully"), _this11.$t("Success"));
      nprogress__WEBPACK_IMPORTED_MODULE_0___default().done();
      _this11.DraftProcessing = false;
      _this11.Reset_Pos();
    }
  })["catch"](function (error) {
    nprogress__WEBPACK_IMPORTED_MODULE_0___default().done();
    _this11.DraftProcessing = false;
    _this11.makeToast("danger", _this11.$t("InvalidData"), _this11.$t("Failed"));
  });
}), "Submit_Payment", function Submit_Payment() {
  nprogress__WEBPACK_IMPORTED_MODULE_0___default().start();
  nprogress__WEBPACK_IMPORTED_MODULE_0___default().set(0.1);
  var total = parseFloat(this.totalPaid);
  var due = parseFloat(this.GrandTotal.toFixed(2));
  var multi = this.paymentLines.length > 1;
  if (multi && total > due) {
    nprogress__WEBPACK_IMPORTED_MODULE_0___default().done();
    this.makeToast("warning", this.$t("TotalPaidExceedsGrandTotalForMultiPayment"), this.$t("Warning"));
    return;
  }
  this.CreatePOS();
}), "CreatePOS", function CreatePOS() {
  var _this12 = this;
  nprogress__WEBPACK_IMPORTED_MODULE_0___default().start();
  nprogress__WEBPACK_IMPORTED_MODULE_0___default().set(0.1);
  var shipping = this.ensureShippingAmount();
  if (this.paymentLines.length > 1 && this.totalPaid > this.GrandTotal) {
    this.makeToast("warning", this.$t("TotalPaidExceedsGrandTotalForMultiPayment"), this.$t("Warning"));
    nprogress__WEBPACK_IMPORTED_MODULE_0___default().done();
    return;
  }

  // Credit Limit Validation (0 means no limit)
  // Only applies when this sale is adding new credit (paid amount < sale total)
  if (this.selectedClientId && this.selectedClientCreditLimit > 0) {
    var total = parseFloat(this.totalPaid);
    var due = parseFloat(this.GrandTotal.toFixed(2));
    if (total < due) {
      // Calculate the new due amount after this sale
      var currentDue = parseFloat(this.selectedClientNetBalance || 0);
      var newSaleDue = due - total; // Remaining due from this sale
      var newTotalDue = currentDue + newSaleDue;
      if (newTotalDue > this.selectedClientCreditLimit) {
        nprogress__WEBPACK_IMPORTED_MODULE_0___default().done();
        var exceededAmount = newTotalDue - this.selectedClientCreditLimit;
        this.makeToast("danger", this.$t("Credit_Limit_Exceeded") + ": " + this.formatPriceWithCurrentCurrency(exceededAmount, 2) + " " + this.$t("exceeds_credit_limit_of") + " " + this.formatPriceWithCurrentCurrency(this.selectedClientCreditLimit, 2), this.$t("Warning"));
        return;
      }
    }
  }
  var anyNewCard = this.paymentLines.some(function (p) {
    return (p.payment_method_id === '1' || p.payment_method_id === 1) && _this12.is_new_credit_card;
  });
  if (anyNewCard) {
    if (this.stripe_key !== '') {
      this.processPayment();
    } else {
      this.makeToast('danger', this.$t('credit_card_account_not_available'), this.$t('Failed'));
      nprogress__WEBPACK_IMPORTED_MODULE_0___default().done();
    }
  } else {
    this.paymentProcessing = true;
    axios.post("pos/create_pos", {
      client_id: this.selectedClientId,
      warehouse_id: this.sale.warehouse_id,
      tax_rate: this.sale.tax_rate ? this.sale.tax_rate : 0,
      TaxNet: this.sale.TaxNet ? this.sale.TaxNet : 0,
      discount: this.sale.discount ? this.sale.discount : 0,
      discount_Method: String(this.sale.discount_Method || '2'),
      // Ensure it's always a string: '1' for percentage, '2' for fixed
      shipping: shipping,
      notes: this.sale.notes,
      details: this.details,
      GrandTotal: this.GrandTotal,
      payments: this.paymentLines,
      send_email: this.sendEmail,
      send_sms: this.sendSMS,
      account_id: this.selectedAccount,
      payment_note: this.globalPaymentNote || '',
      is_new_credit_card: this.is_new_credit_card,
      selectedCard: this.selectedCard,
      card_id: this.card_id,
      discount_from_points: this.discount_from_points,
      used_points: this.used_points,
      draft_sale_id: this.draft_sale_id || undefined
    }).then(function (response) {
      if (response.data.success === true) {
        nprogress__WEBPACK_IMPORTED_MODULE_0___default().done();
        _this12.paymentProcessing = false;
        var saleId = response.data.id;
        var draftId = _this12.draft_sale_id;
        var afterCleanup = function afterCleanup() {
          _this12.Invoice_POS(saleId);
          _this12.$bvModal.hide("Add_Payment");
          _this12.Reset_Pos();
        };
        if (draftId) {
          axios["delete"]("remove_draft_sale/" + draftId).then(function () {
            try {
              Fire.$emit("event_delete_draft_sale");
            } catch (e) {}
          })["catch"](function () {})["finally"](function () {
            _this12.draft_sale_id = '';
            afterCleanup();
          });
        } else {
          afterCleanup();
        }
      }
    })["catch"](function (error) {
      nprogress__WEBPACK_IMPORTED_MODULE_0___default().done();
      _this12.paymentProcessing = false;
      _this12.makeToast("danger", _this12.$t("InvalidData"), _this12.$t("Failed"));
    });
  }
}), "processPayment", function processPayment() {
  var _this13 = this;
  return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee6() {
    var shipping, _yield$_this13$stripe, paymentMethod, error, paymentsWithMethod;
    return _regenerator().w(function (_context6) {
      while (1) switch (_context6.n) {
        case 0:
          _this13.paymentProcessing = true;
          shipping = _this13.ensureShippingAmount();
          _context6.n = 1;
          return _this13.stripe.createPaymentMethod({
            type: "card",
            card: _this13.cardElement,
            billing_details: {
              name: _this13.client_name || ""
            }
          });
        case 1:
          _yield$_this13$stripe = _context6.v;
          paymentMethod = _yield$_this13$stripe.paymentMethod;
          error = _yield$_this13$stripe.error;
          if (error) {
            _this13.paymentProcessing = false;
            nprogress__WEBPACK_IMPORTED_MODULE_0___default().done();
            _this13.makeToast("danger", _this13.$t("InvalidData"), _this13.$t("Failed"));
          } else {
            // Attach the Stripe Payment Method ID (pm_...) to all credit‑card lines
            paymentsWithMethod = _this13.paymentLines.map(function (p) {
              if (p.payment_method_id === "1" || p.payment_method_id === 1) {
                return _objectSpread(_objectSpread({}, p), {}, {
                  payment_method_id_stripe: paymentMethod.id
                });
              }
              return p;
            });
            axios.post("pos/create_pos", {
              client_id: _this13.selectedClientId,
              warehouse_id: _this13.sale.warehouse_id,
              tax_rate: _this13.sale.tax_rate ? _this13.sale.tax_rate : 0,
              TaxNet: _this13.sale.TaxNet ? _this13.sale.TaxNet : 0,
              discount: _this13.sale.discount ? _this13.sale.discount : 0,
              shipping: shipping,
              details: _this13.details,
              GrandTotal: _this13.GrandTotal,
              notes: _this13.sale.notes,
              payments: paymentsWithMethod,
              send_email: _this13.sendEmail,
              send_sms: _this13.sendSMS,
              account_id: _this13.selectedAccount,
              payment_note: _this13.globalPaymentNote || "",
              is_new_credit_card: _this13.is_new_credit_card,
              selectedCard: _this13.selectedCard,
              card_id: _this13.card_id,
              discount_from_points: _this13.discount_from_points,
              used_points: _this13.used_points,
              draft_sale_id: _this13.draft_sale_id || undefined
            }).then(function (response) {
              _this13.paymentProcessing = false;
              if (response.data.success === true) {
                nprogress__WEBPACK_IMPORTED_MODULE_0___default().done();
                var saleId = response.data.id;
                var draftId = _this13.draft_sale_id;
                var afterCleanup = function afterCleanup() {
                  _this13.Invoice_POS(saleId);
                  _this13.$bvModal.hide("Add_Payment");
                  _this13.Reset_Pos();
                };
                if (draftId) {
                  axios["delete"]("remove_draft_sale/" + draftId).then(function () {
                    try {
                      Fire.$emit("event_delete_draft_sale");
                    } catch (e) {}
                  })["catch"](function () {})["finally"](function () {
                    _this13.draft_sale_id = "";
                    afterCleanup();
                  });
                } else {
                  afterCleanup();
                }
              }
            })["catch"](function (error) {
              _this13.paymentProcessing = false;
              nprogress__WEBPACK_IMPORTED_MODULE_0___default().done();
              _this13.makeToast("danger", _this13.$t("InvalidData"), _this13.$t("Failed"));
            });
          }
        case 2:
          return _context6.a(2);
      }
    }, _callee6);
  }))();
}), "formatNumber", function formatNumber(number, dec) {
  var decimals = Number.isInteger(dec) ? dec : 0;
  var n = Number(number);
  var safe = Number.isFinite(n) ? n : 0;
  try {
    return safe.toLocaleString('en-US', {
      minimumFractionDigits: decimals,
      maximumFractionDigits: decimals
    });
  } catch (e) {
    // Fallback for environments without Intl
    var fixed = safe.toFixed(decimals);
    var _fixed$split = fixed.split('.'),
      _fixed$split2 = _slicedToArray(_fixed$split, 2),
      intPart = _fixed$split2[0],
      fracPart = _fixed$split2[1];
    var withCommas = intPart.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    return fracPart ? "".concat(withCommas, ".").concat(fracPart) : withCommas;
  }
}), "formatPriceDisplay", function formatPriceDisplay(number, dec) {
  try {
    var decimals = Number.isInteger(dec) ? dec : 0;
    // Prefer cached key, otherwise read from helpers/localStorage
    var key = this.price_format_key || (0,_utils_priceFormat__WEBPACK_IMPORTED_MODULE_5__.getPriceFormatSetting)({
      store: this.$store
    });
    if (key) {
      this.price_format_key = key;
    }
    var effectiveKey = key || null;
    return (0,_utils_priceFormat__WEBPACK_IMPORTED_MODULE_5__.formatPriceDisplay)(number, decimals, effectiveKey);
  } catch (e) {
    // Fallback: keep legacy behavior
    return this.formatNumber(number, dec);
  }
}), _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_objectSpread2, "formatPriceWithCurrentCurrency", function formatPriceWithCurrentCurrency(number, dec) {
  var symbol = this.currentUser && this.currentUser.currency ? this.currentUser.currency : '';
  var value = this.formatPriceDisplay(number, dec);
  return symbol ? "".concat(symbol, " ").concat(value) : value;
}), "formatPriceWithSymbol", function formatPriceWithSymbol(symbol, number, dec) {
  var safeSymbol = symbol || '';
  var value = this.formatPriceDisplay(number, dec);
  return safeSymbol ? "".concat(safeSymbol, " ").concat(value) : value;
}), "makeToast", function makeToast(variant, msg, title) {
  this.$root.$bvToast.toast(msg, {
    title: title,
    variant: variant,
    solid: true
  });
}), "CalculTotal", function CalculTotal() {
  this.total = 0;
  for (var i = 0; i < this.details.length; i++) {
    var tax = this.details[i].taxe * this.details[i].quantity;
    this.details[i].subtotal = parseFloat(this.details[i].quantity * this.details[i].Net_price + tax);
    this.total = parseFloat(this.total + this.details[i].subtotal);
  }
  // Calculate discount based on type (backward compatible: default to fixed if not set)
  var discountMethod = String(this.sale.discount_Method || '2');
  var discountValue = Number(this.sale.discount || 0);
  var discountAmount = 0;
  if (discountMethod === '1') {
    // Percentage discount on subtotal
    var percentAmount = parseFloat((this.total * (discountValue / 100)).toFixed(2));
    // Points-based discount is always a fixed amount; apply it in addition, but never exceed remaining subtotal
    var remainingAfterPercent = Math.max(this.total - percentAmount, 0);
    var pointsAmount = parseFloat(Math.min(Number(this.discount_from_points || 0), remainingAfterPercent).toFixed(2));
    discountAmount = percentAmount + pointsAmount;
  } else {
    // Fixed discount: apply both manual discount and points discount separately
    var manualDiscount = parseFloat(Math.min(discountValue, this.total).toFixed(2));
    var remainingAfterManual = Math.max(this.total - manualDiscount, 0);
    var pointsDiscount = parseFloat(Math.min(Number(this.discount_from_points || 0), remainingAfterManual).toFixed(2));
    discountAmount = manualDiscount + pointsDiscount;
  }
  var total_without_discount = parseFloat((this.total - discountAmount).toFixed(2));
  this.sale.TaxNet = parseFloat(total_without_discount * this.sale.tax_rate / 100);
  var shipping = this.normalizeShippingAmount(this.sale.shipping);
  this.sale.shipping = shipping;
  this.GrandTotal = parseFloat(total_without_discount + this.sale.TaxNet + shipping);
  var grand_total = this.GrandTotal.toFixed(2);
  this.GrandTotal = parseFloat(grand_total);
  try {
    this._cd_queue_broadcast && this._cd_queue_broadcast();
  } catch (e) {}
}), "keyup_OrderTax", function keyup_OrderTax() {
  if (isNaN(this.sale.tax_rate)) {
    this.sale.tax_rate = 0;
  } else if (this.sale.tax_rate == '') {
    this.sale.tax_rate = 0;
    this.CalculTotal();
  } else {
    this.CalculTotal();
  }
}), "keyup_Discount", function keyup_Discount() {
  if (isNaN(this.sale.discount)) {
    this.sale.discount = 0;
  } else if (this.sale.discount == '') {
    this.sale.discount = 0;
    this.CalculTotal();
  } else {
    this.CalculTotal();
  }
}), "toggleDiscountType", function toggleDiscountType() {
  // Toggle between '1' (percentage) and '2' (fixed)
  this.sale.discount_Method = this.sale.discount_Method === '1' ? '2' : '1';
  this.CalculTotal();
}), "getCurrentSaleDiscountAmount", function getCurrentSaleDiscountAmount() {
  try {
    var discountMethod = String(this.sale.discount_Method || '2'); // Default to fixed for backward compatibility
    var discountValue = Number(this.sale.discount || 0);
    var subtotal = this.total || 0;
    if (discountMethod === '1') {
      // Percentage discount on subtotal
      var percentAmount = parseFloat((subtotal * (discountValue / 100)).toFixed(2));
      // Points-based discount is always a fixed amount; add it for display
      var remainingAfterPercent = Math.max(subtotal - percentAmount, 0);
      var pointsAmount = parseFloat(Math.min(Number(this.discount_from_points || 0), remainingAfterPercent).toFixed(2));
      return percentAmount + pointsAmount;
    } else {
      // Fixed discount: apply both manual discount and points discount separately
      var manualDiscount = parseFloat(Math.min(discountValue, subtotal).toFixed(2));
      var remainingAfterManual = Math.max(subtotal - manualDiscount, 0);
      var pointsDiscount = parseFloat(Math.min(Number(this.discount_from_points || 0), remainingAfterManual).toFixed(2));
      return manualDiscount + pointsDiscount;
    }
  } catch (e) {
    return Number(this.sale.discount || 0);
  }
}), "keyup_Shipping", function keyup_Shipping() {
  if (isNaN(this.sale.shipping)) {
    this.sale.shipping = this.getDefaultShippingAmount();
    this.CalculTotal();
  } else if (this.sale.shipping == '') {
    this.sale.shipping = this.getDefaultShippingAmount();
    this.CalculTotal();
  } else {
    this.CalculTotal();
  }
}), "getDefaultShippingAmount", function getDefaultShippingAmount() {
  return 2;
}), _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_objectSpread2, "normalizeShippingAmount", function normalizeShippingAmount(value) {
  if (value === '' || value === null || typeof value === 'undefined') {
    return this.getDefaultShippingAmount();
  }
  var shipping = Number(value);
  return Number.isNaN(shipping) ? this.getDefaultShippingAmount() : shipping;
}), "ensureShippingAmount", function ensureShippingAmount() {
  var shipping = this.normalizeShippingAmount(this.sale.shipping);
  this.sale.shipping = shipping;
  return shipping;
}), "Get_Product_Details", function Get_Product_Details(product_id, variant_id) {
  var _arguments = arguments,
    _this14 = this;
  return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee9() {
    var sourceProduct, warehouseId, applyDetail, reallyOffline, buildDetailFromSource, loadFromOfflineCacheOrSource, loaded, fromSourceOnline;
    return _regenerator().w(function (_context9) {
      while (1) switch (_context9.n) {
        case 0:
          sourceProduct = _arguments.length > 2 && _arguments[2] !== undefined ? _arguments[2] : null;
          warehouseId = _this14.sale && _this14.sale.warehouse_id ? _this14.sale.warehouse_id : null;
          applyDetail = function applyDetail(data) {
            if (!data) return;
            _this14.product.discount = data.discount;
            _this14.product.DiscountNet = data.DiscountNet;
            _this14.product.discount_Method = data.discount_method;
            _this14.product.product_id = data.id;
            _this14.product.product_type = data.product_type;
            _this14.product.name = data.name;
            _this14.product.Net_price = data.Net_price;
            _this14.product.Total_price = data.Total_price;
            _this14.product.Unit_price = data.Unit_price;
            _this14.product.Unit_price_wholesale = data.Unit_price_wholesale;
            _this14.product.wholesale_Net_price = data.wholesale_Net_price;
            _this14.product.min_price = data.min_price || 0;
            _this14.product.retail_unit_price = data.Unit_price;
            _this14.product.wholesale_unit_price = data.Unit_price_wholesale;
            _this14.product.price_type = 'retail';
            _this14.product.taxe = data.tax_price;
            _this14.product.tax_method = data.tax_method;
            _this14.product.tax_percent = data.tax_percent;
            _this14.product.unitSale = data.unitSale;
            _this14.product.product_variant_id = variant_id;
            _this14.product.code = data.code;
            _this14.product.fix_price = data.fix_price;
            _this14.product.sale_unit_id = data.sale_unit_id;
            _this14.product.is_imei = data.is_imei;
            _this14.product.imei_number = '';

            // Set current stock quantity from warehouse data (already adjusted for shadow stock if applied below)
            _this14.product.current = data.qte_sale || 0;
            _this14.product.fix_stock = data.qte || 0;

            // Ensure a valid default quantity when adding directly from the grid
            if (_this14.product.product_type === 'is_service') {
              _this14.product.quantity = 1;
            } else if (_this14.product.quantity === undefined || _this14.product.quantity === null || _this14.product.quantity <= 0) {
              _this14.product.quantity = _this14.product.current < 1 ? _this14.product.current : 1;
            }
            _this14.add_product(data.code);
            _this14.CalculTotal();
          };
          reallyOffline = !_this14.isOnline || typeof window !== 'undefined' && window.navigator && window.navigator.onLine === false; // Helper: build a detail object from a sourceProduct row that came
          // directly from the backend (get_products_pos). This is used in BOTH
          // online and offline modes, but in online mode we *only* use this and
          // do not read from any offline cache.
          buildDetailFromSource = function buildDetailFromSource() {
            var p = sourceProduct;
            if (!p || _typeof(p) !== 'object') return null;
            var detail = {
              id: p.id,
              product_type: p.product_type,
              name: p.name,
              // Pricing fields – prefer Net_price, then Unit_price/price
              Net_price: p.Net_price != null ? p.Net_price : p.Unit_price != null ? p.Unit_price : p.price != null ? p.price : 0,
              Unit_price: p.Unit_price != null ? p.Unit_price : p.Net_price != null ? p.Net_price : p.price != null ? p.price : 0,
              Unit_price_wholesale: p.Unit_price_wholesale != null ? p.Unit_price_wholesale : p.Unit_price != null ? p.Unit_price : p.Net_price != null ? p.Net_price : 0,
              wholesale_Net_price: p.wholesale_Net_price != null ? p.wholesale_Net_price : p.Net_price != null ? p.Net_price : 0,
              min_price: p.min_price != null ? p.min_price : 0,
              // Discount & tax
              discount: p.discount != null ? p.discount : 0,
              DiscountNet: p.DiscountNet != null ? p.DiscountNet : 0,
              discount_method: p.discount_Method != null ? p.discount_Method : '2',
              tax_price: p.tax_price != null ? p.tax_price : 0,
              tax_method: p.tax_method != null ? p.tax_method : 1,
              tax_percent: p.tax_percent != null ? p.tax_percent : 0,
              // Units & codes
              unitSale: p.unitSale,
              code: p.code,
              sale_unit_id: p.sale_unit_id,
              // Stock
              qte_sale: p.qte_sale != null ? p.qte_sale : 0,
              qte: p.qte != null ? p.qte : 0,
              // Other flags
              fix_price: p.fix_price,
              is_imei: p.is_imei
            };

            // Ensure price fields (Net_price, taxe, Total_price) are consistent,
            // using the same logic as draft loading.
            try {
              var unitPrice = Number(detail.Unit_price || 0);
              var discountVal = Number(detail.discount || 0);
              var discountMethod = String(detail.discount_method || '2'); // 1: %, 2: fixed
              var taxPercent = Number(detail.tax_percent || 0);
              var taxMethod = String(detail.tax_method || '1'); // 1: Exclusive, 2: Inclusive

              if (!detail.DiscountNet && discountVal) {
                detail.DiscountNet = discountMethod === '2' ? discountVal : unitPrice * (discountVal / 100);
              } else if (detail.DiscountNet == null) {
                detail.DiscountNet = 0;
              }
              if (!detail.Net_price || !detail.Total_price) {
                if (taxMethod === '1') {
                  // Tax exclusive
                  var net = unitPrice - detail.DiscountNet;
                  var taxe = (unitPrice - detail.DiscountNet) * (taxPercent / 100);
                  detail.Net_price = parseFloat(net.toFixed(2));
                  detail.taxe = parseFloat(taxe.toFixed(2));
                  detail.Total_price = parseFloat((net + taxe).toFixed(2));
                } else {
                  // Tax inclusive
                  var _taxe = (unitPrice - detail.DiscountNet) * (taxPercent / 100);
                  var _net = unitPrice - _taxe - detail.DiscountNet;
                  detail.taxe = parseFloat(_taxe.toFixed(2));
                  detail.Net_price = parseFloat(_net.toFixed(2));
                  detail.Total_price = parseFloat((_net + _taxe).toFixed(2));
                }
              }
            } catch (e2) {}
            return detail;
          }; // Helper function to load from OFFLINE cache first, then fall back to
          // sourceProduct. This is used only when reallyOffline is true so that
          // existing offline behaviour remains unchanged.
          loadFromOfflineCacheOrSource = /*#__PURE__*/function () {
            var _ref2 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee7() {
              var cached, detail, baseQte, detailFromSource, _t4, _t5;
              return _regenerator().w(function (_context7) {
                while (1) switch (_context7.p = _context7.n) {
                  case 0:
                    _context7.p = 0;
                    if (!(_utils__WEBPACK_IMPORTED_MODULE_4__["default"] && _utils__WEBPACK_IMPORTED_MODULE_4__["default"].offlinePos && _utils__WEBPACK_IMPORTED_MODULE_4__["default"].offlinePos.getProductDetail)) {
                      _context7.n = 6;
                      break;
                    }
                    cached = _utils__WEBPACK_IMPORTED_MODULE_4__["default"].offlinePos.getProductDetail(warehouseId, product_id, variant_id);
                    if (!cached) {
                      _context7.n = 6;
                      break;
                    }
                    detail = _objectSpread({}, cached);
                    if (!reallyOffline) {
                      _context7.n = 5;
                      break;
                    }
                    _context7.p = 1;
                    if (!(_utils__WEBPACK_IMPORTED_MODULE_4__["default"] && _utils__WEBPACK_IMPORTED_MODULE_4__["default"].shadowStock && _utils__WEBPACK_IMPORTED_MODULE_4__["default"].shadowStock.getAvailableQuantity && warehouseId && product_id)) {
                      _context7.n = 3;
                      break;
                    }
                    baseQte = detail.qte_sale || 0;
                    _context7.n = 2;
                    return _utils__WEBPACK_IMPORTED_MODULE_4__["default"].shadowStock.getAvailableQuantity(warehouseId, product_id, variant_id, baseQte);
                  case 2:
                    detail.qte_sale = _context7.v;
                  case 3:
                    _context7.n = 5;
                    break;
                  case 4:
                    _context7.p = 4;
                    _t4 = _context7.v;
                  case 5:
                    applyDetail(detail);
                    nprogress__WEBPACK_IMPORTED_MODULE_0___default().done();
                    return _context7.a(2, true);
                  case 6:
                    _context7.n = 8;
                    break;
                  case 7:
                    _context7.p = 7;
                    _t5 = _context7.v;
                  case 8:
                    detailFromSource = buildDetailFromSource();
                    if (!detailFromSource) {
                      _context7.n = 9;
                      break;
                    }
                    applyDetail(detailFromSource);
                    nprogress__WEBPACK_IMPORTED_MODULE_0___default().done();
                    return _context7.a(2, true);
                  case 9:
                    return _context7.a(2, false);
                }
              }, _callee7, null, [[1, 4], [0, 7]]);
            }));
            return function loadFromOfflineCacheOrSource() {
              return _ref2.apply(this, arguments);
            };
          }(); // OFFLINE MODE: keep existing behaviour – use offline cache and
          // sourceProduct, never call the backend.
          if (!reallyOffline) {
            _context9.n = 2;
            break;
          }
          _context9.n = 1;
          return loadFromOfflineCacheOrSource();
        case 1:
          loaded = _context9.v;
          if (!loaded) {
            _this14.makeToast("danger", _this14.$t("InvalidData"), _this14.$t("Failed"));
            nprogress__WEBPACK_IMPORTED_MODULE_0___default().done();
          }
          return _context9.a(2, Promise.resolve());
        case 2:
          // ONLINE MODE: product data should come directly from the backend and
          // not from any offline cache. We therefore ignore `offlinePos` here and
          // use only:
          //   1) The preloaded backend rows (sourceProduct from get_products_pos)
          //   2) As a fallback, a direct `/show_product_data` request for this
          //      specific product.
          fromSourceOnline = buildDetailFromSource();
          if (!fromSourceOnline) {
            _context9.n = 3;
            break;
          }
          applyDetail(fromSourceOnline);
          nprogress__WEBPACK_IMPORTED_MODULE_0___default().done();
          return _context9.a(2, Promise.resolve());
        case 3:
          return _context9.a(2, axios.get("/show_product_data/" + product_id + "/" + variant_id + "/" + warehouseId).then(/*#__PURE__*/function () {
            var _ref3 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee8(response) {
              var detail;
              return _regenerator().w(function (_context8) {
                while (1) switch (_context8.n) {
                  case 0:
                    detail = response.data;
                    applyDetail(detail);
                    // Cache for offline usage (writing cache is fine; online paths do
                    // not read from it).
                    try {
                      if (_utils__WEBPACK_IMPORTED_MODULE_4__["default"] && _utils__WEBPACK_IMPORTED_MODULE_4__["default"].offlinePos && _utils__WEBPACK_IMPORTED_MODULE_4__["default"].offlinePos.cacheProductDetail) {
                        _utils__WEBPACK_IMPORTED_MODULE_4__["default"].offlinePos.cacheProductDetail(warehouseId, product_id, variant_id, detail);
                      }
                    } catch (e) {}
                    nprogress__WEBPACK_IMPORTED_MODULE_0___default().done();
                  case 1:
                    return _context8.a(2);
                }
              }, _callee8);
            }));
            return function (_x) {
              return _ref3.apply(this, arguments);
            };
          }())["catch"](function () {
            _this14.makeToast("danger", _this14.$t("InvalidData"), _this14.$t("Failed"));
            nprogress__WEBPACK_IMPORTED_MODULE_0___default().done();
          }));
      }
    }, _callee9);
  }))();
}), "add_product", function add_product(code) {
  var _this15 = this;
  // Play sound only if barcode scanning sound is enabled
  if (this.pos_settings.barcode_scanning_sound) {
    this.audio.play();
  }
  // 1) If product already exists in the list (ignore price_type), merge and just increase quantity
  var hasProductIds = this.product.product_id !== undefined && this.product.product_id !== null;
  var targetVariantId = this.product.product_variant_id === undefined || this.product.product_variant_id === null ? null : this.product.product_variant_id;
  var existingIndex = this.details.findIndex(function (d) {
    var dVariant = d.product_variant_id === undefined || d.product_variant_id === null ? null : d.product_variant_id;
    var rowHasId = d.product_id !== undefined && d.product_id !== null;
    // Prefer strict match by ids when both sides have ids
    if (hasProductIds && rowHasId) {
      return d.product_id === _this15.product.product_id && dVariant === targetVariantId && d.sale_unit_id === _this15.product.sale_unit_id;
    }
    // Fallback to matching by code + unit when ids are not available
    return d.code === _this15.product.code && d.sale_unit_id === _this15.product.sale_unit_id;
  });
  if (existingIndex !== -1) {
    var row = this.details[existingIndex];
    var addQty = typeof this.product.quantity === 'number' && this.product.quantity > 0 ? this.product.quantity : 1;
    if (row.product_type !== 'is_service') {
      var desiredQty = row.quantity + addQty;
      if (desiredQty > row.current) {
        this.makeToast("warning", this.$t("LowStock"), this.$t("Warning"));
        row.quantity = row.current;
      } else {
        row.quantity = desiredQty;
      }
    } else {
      row.quantity = row.quantity + addQty;
    }
    this.CalculTotal();
    this.$forceUpdate();
    setTimeout(function () {
      _this15.load_product = true;
    }, 300);
    if (row.is_imei) {
      this.Modal_Updat_Detail(row);
    }
    return;
  }

  // 2) No existing row → create a new one
  if (this.details.length > 0) {
    this.order_detail_id();
  } else if (this.details.length === 0) {
    this.product.detail_id = 1;
  }
  // initialize price type fields before pushing
  if (!this.product.price_type) {
    this.product.price_type = 'retail';
  }
  if (!this.product.retail_unit_price) {
    this.product.retail_unit_price = this.product.Unit_price;
  }
  if (!this.product.wholesale_unit_price) {
    this.product.wholesale_unit_price = this.product.Unit_price_wholesale;
  }

  // push a cloned object to avoid accidental reference sharing
  var newItem = JSON.parse(JSON.stringify(this.product));
  if (!newItem.price_type) newItem.price_type = 'retail';
  // ensure reactivity for newly-added prop on some browsers
  this.$set(newItem, 'price_type', newItem.price_type || 'retail');
  // Apply min_price on add: ensure Net_price >= min_price by adjusting Unit_price if required
  try {
    var min = Number(newItem.min_price || 0);
    var taxMethod = String(newItem.tax_method || '1');
    var discountMethod = String(newItem.discount_Method || '2');
    var discountVal = Number(newItem.discount || 0);
    var taxRate = Number(newItem.tax_percent || 0) / 100;
    var currentNet = Number(newItem.Net_price || 0);
    if (min > 0 && currentNet < min) {
      var unitPriceCandidate = Number(newItem.Unit_price || 0);
      if (taxMethod === '1') {
        if (discountMethod === '1') {
          var denom = 1 - discountVal / 100;
          unitPriceCandidate = denom > 0 ? min / denom : min;
        } else {
          unitPriceCandidate = min + discountVal;
        }
        var discountNet = discountMethod === '1' ? unitPriceCandidate * (discountVal / 100) : discountVal;
        var net = unitPriceCandidate - discountNet;
        var tax = (unitPriceCandidate - discountNet) * taxRate;
        newItem.Unit_price = parseFloat(unitPriceCandidate.toFixed(2));
        newItem.DiscountNet = parseFloat(discountNet.toFixed(2));
        newItem.Net_price = parseFloat(net.toFixed(2));
        newItem.taxe = parseFloat(tax.toFixed(2));
        newItem.Total_price = parseFloat((net + tax).toFixed(2));
      } else {
        if (discountMethod === '1') {
          var _denom = (1 - discountVal / 100) * (1 - taxRate);
          unitPriceCandidate = _denom > 0 ? min / _denom : min;
        } else {
          var _denom2 = 1 - taxRate;
          unitPriceCandidate = (_denom2 > 0 ? min / _denom2 : min) + discountVal;
        }
        var _discountNet = discountMethod === '1' ? unitPriceCandidate * (discountVal / 100) : discountVal;
        var taxBase = unitPriceCandidate - _discountNet;
        var _tax = taxBase * taxRate;
        var _net2 = taxBase - _tax;
        newItem.Unit_price = parseFloat(unitPriceCandidate.toFixed(2));
        newItem.DiscountNet = parseFloat(_discountNet.toFixed(2));
        newItem.taxe = parseFloat(_tax.toFixed(2));
        newItem.Net_price = parseFloat(_net2.toFixed(2));
        newItem.Total_price = parseFloat((_net2 + _tax).toFixed(2));
      }
      if (newItem.price_type === 'wholesale') {
        newItem.wholesale_unit_price = newItem.Unit_price;
      } else {
        newItem.retail_unit_price = newItem.Unit_price;
      }
    }
  } catch (e) {}
  this.details.unshift(newItem);
  setTimeout(function () {
    _this15.load_product = true;
  }, 300);
  if (newItem.is_imei) {
    this.Modal_Updat_Detail(newItem);
  }
}), "order_detail_id", function order_detail_id() {
  var id = 0;
  for (var i = 0; i < this.details.length; i++) {
    if (this.details[i].detail_id > id) {
      id = this.details[i].detail_id;
    }
  }
  this.product.detail_id = id + 1;
}), "increment_qty_scanner", function increment_qty_scanner(code) {
  var _this16 = this;
  // Play sound only if barcode scanning sound is enabled
  if (this.pos_settings.barcode_scanning_sound) {
    this.audio.play();
  }
  for (var i = 0; i < this.details.length; i++) {
    if (this.details[i].code === code) {
      if (this.details[i].product_type !== 'is_service' && this.details[i].quantity + 1 > this.details[i].current) {
        this.makeToast("warning", this.$t("LowStock"), this.$t("Warning"));
      } else {
        this.details[i].quantity++;
      }
    }
  }
  this.CalculTotal();
  this.$forceUpdate();
  nprogress__WEBPACK_IMPORTED_MODULE_0___default().done();
  setTimeout(function () {
    _this16.load_product = true;
  }, 300);
}), "increment", function increment(id) {
  for (var i = 0; i < this.details.length; i++) {
    if (this.details[i].detail_id == id) {
      if (this.details[i].product_type !== 'is_service' && this.details[i].quantity + 1 > this.details[i].current) {
        this.makeToast("warning", this.$t("LowStock"), this.$t("Warning"));
      } else {
        this.details[i].quantity++;
      }
    }
  }
  this.CalculTotal();
  this.$forceUpdate();
}), "handleProductClick", function handleProductClick(product) {
  var _this17 = this;
  if (!product || product.product_type !== 'is_service' && product.qte_sale <= 0) return;
  // Use composite key for variants to avoid overlay conflicting across variants
  var key = product.product_variant_id ? product.id + '-' + product.product_variant_id : product.id;
  this.uiLoadingProductId = key;
  this.Get_Product_Details(product.id, product.product_variant_id, product)["catch"](function () {})["finally"](function () {
    // Clear only if still the same key (guard against fast double clicks)
    if (_this17.uiLoadingProductId === key) _this17.uiLoadingProductId = null;
  });
}), "decrement", function decrement(detail, id) {
  for (var i = 0; i < this.details.length; i++) {
    if (this.details[i].detail_id == id) {
      // Prevent quantity from going negative, but allow zero and fractional quantities
      if (detail.quantity - 1 < 0) {
        this.makeToast("warning", this.$t("MinimumQuantity"), this.$t("Warning"));
      } else {
        this.details[i].quantity--;
      }
    }
  }
  this.CalculTotal();
  this.$forceUpdate();
}), "Verified_Qty", function Verified_Qty(detail, id) {
  for (var i = 0; i < this.details.length; i++) {
    if (this.details[i].detail_id === id) {
      var qty = parseFloat(detail.quantity);

      // If empty or not a number, fall back to 1 without warning
      if (isNaN(qty) || detail.quantity === null || detail.quantity === '') {
        this.details[i].quantity = 1;
        // Enforce only that quantity must not be negative (zero is allowed)
      } else if (qty < 0) {
        this.makeToast("warning", this.$t("MinimumQuantity"), this.$t("Warning"));
        this.details[i].quantity = 1;
      } else if (this.details[i].product_type !== 'is_service' && qty > detail.current) {
        this.makeToast("warning", this.$t("LowStock"), this.$t("Warning"));
        this.details[i].quantity = detail.current;
      } else {
        this.details[i].quantity = qty;
      }
    }
  }
  this.$forceUpdate();
  this.CalculTotal();
}), _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_objectSpread2, "delete_Product_Detail", function delete_Product_Detail(id) {
  for (var i = 0; i < this.details.length; i++) {
    if (id === this.details[i].detail_id) {
      this.details.splice(i, 1);
      this.CalculTotal();
      try {
        this._cd_queue_broadcast && this._cd_queue_broadcast();
      } catch (e) {}
    }
  }
}), "Modal_Updat_Detail", function Modal_Updat_Detail(detail) {
  var _this18 = this;
  this.detailLoading = true;
  this.detail = {};
  this.detail.name = detail.name;
  this.$bvModal.show("form_Update_Detail");
  this.get_units(detail.product_id)["catch"](function () {})["finally"](function () {
    _this18.detail.detail_id = detail.detail_id;
    _this18.detail.sale_unit_id = detail.sale_unit_id;
    _this18.detail.product_type = detail.product_type;
    _this18.detail.Unit_price = detail.Unit_price;
    _this18.detail.price_type = detail.price_type || 'retail';
    _this18.detail.retail_unit_price = detail.retail_unit_price !== undefined ? detail.retail_unit_price : detail.Unit_price;
    _this18.detail.wholesale_unit_price = detail.wholesale_unit_price !== undefined ? detail.wholesale_unit_price : detail.Unit_price_wholesale;
    _this18.detail.min_price = detail.min_price !== undefined ? detail.min_price : 0;
    _this18.detail.fix_price = detail.fix_price;
    _this18.detail.fix_stock = detail.fix_stock;
    _this18.detail.current = detail.current;
    _this18.detail.tax_method = detail.tax_method;
    _this18.detail.discount_Method = detail.discount_Method;
    _this18.detail.discount = detail.discount;
    _this18.detail.quantity = detail.quantity;
    _this18.detail.tax_percent = detail.tax_percent;
    _this18.detail.is_imei = detail.is_imei;
    _this18.detail.imei_number = detail.imei_number;
    _this18.detailLoading = false;
  });
  console.log(detail);
}), "submit_Update_Detail", function submit_Update_Detail() {
  var _this19 = this;
  for (var i = 0; i < this.details.length; i++) {
    if (this.details[i].detail_id === this.detail.detail_id) {
      // 1) Compute proposed pricing WITHOUT mutating the row yet
      var proposedUnitPrice = this.detail.Unit_price;
      var rawMinCandidate = this.details[i].min_price !== undefined && this.details[i].min_price !== null ? this.details[i].min_price : this.detail.min_price || 0;
      var minPriceRow = parseFloat(String(rawMinCandidate).toString().replace(/,/g, '')) || 0;
      var unitPriceNum = parseFloat(String(proposedUnitPrice).toString().replace(/,/g, '')) || 0;
      // 1.a) Block if unit price is not strictly greater than min price
      if (minPriceRow > 0 && unitPriceNum <= minPriceRow) {
        this.makeToast('warning', this.$t('Price_below_min_not_allowed'), this.$t('Warning'));
        return;
      }
      var proposedDiscountNet = this.detail.discount_Method == "2" ? this.detail.discount : parseFloat(proposedUnitPrice * this.detail.discount / 100);
      var proposedNet = void 0,
        proposedTax = void 0;
      if (this.detail.tax_method == "1") {
        proposedNet = parseFloat(proposedUnitPrice - proposedDiscountNet);
        proposedTax = parseFloat(this.detail.tax_percent * (proposedUnitPrice - proposedDiscountNet) / 100);
      } else {
        proposedTax = parseFloat((proposedUnitPrice - proposedDiscountNet) * (this.detail.tax_percent / 100));
        proposedNet = parseFloat(proposedUnitPrice - proposedTax - proposedDiscountNet);
      }

      // 2) Enforce min price by net as a fallback: if invalid, show toast and ABORT update (keep modal open)
      if (minPriceRow > 0 && proposedNet < minPriceRow) {
        this.makeToast('warning', this.$t('Price_below_min_not_allowed'), this.$t('Warning'));
        return;
      }

      // 3) Apply unit conversion now that price is valid (skip stock logic for services)
      if (this.details[i].product_type !== 'is_service') {
        for (var k = 0; k < this.units.length; k++) {
          if (this.units[k].id == this.detail.sale_unit_id) {
            if (this.units[k].operator == "/") {
              this.details[i].current = this.detail.fix_stock * this.units[k].operator_value;
              this.details[i].unitSale = this.units[k].ShortName;
            } else {
              this.details[i].current = this.detail.fix_stock / this.units[k].operator_value;
              this.details[i].unitSale = this.units[k].ShortName;
            }
          }
        }
      }

      // 4) Persist values to the row
      this.details[i].Unit_price = proposedUnitPrice;
      // update baseline for the NEWLY selected price type
      if (this.detail.price_type === 'wholesale') {
        this.details[i].wholesale_unit_price = proposedUnitPrice;
      } else {
        this.details[i].retail_unit_price = proposedUnitPrice;
      }
      this.details[i].price_type = this.detail.price_type;
      this.details[i].tax_percent = this.detail.tax_percent;
      this.details[i].tax_method = this.detail.tax_method;
      this.details[i].discount_Method = this.detail.discount_Method;
      this.details[i].discount = this.detail.discount;
      this.details[i].sale_unit_id = this.detail.sale_unit_id;
      this.details[i].imei_number = this.detail.imei_number;
      this.details[i].product_type = this.detail.product_type;

      // 5) Apply computed values
      this.details[i].DiscountNet = proposedDiscountNet;
      this.details[i].taxe = proposedTax;
      this.details[i].Net_price = proposedNet;
      this.details[i].Total_price = parseFloat(proposedNet + proposedTax);
      this.$forceUpdate();
    }
  }
  this.CalculTotal();
  setTimeout(function () {
    _this19.$bvModal.hide("form_Update_Detail");
  }, 1000);
}), "onChangePriceType", function onChangePriceType(detail) {
  var isWholesale = detail.price_type === 'wholesale';
  var wholesaleBase = detail.wholesale_unit_price;
  var retailBase = detail.retail_unit_price;

  // 1) Apply selected baseline
  if (isWholesale) {
    detail.Unit_price = wholesaleBase !== undefined && wholesaleBase !== null && wholesaleBase !== '' ? wholesaleBase : detail.Unit_price;
  } else {
    detail.Unit_price = retailBase !== undefined && retailBase !== null && retailBase !== '' ? retailBase : detail.Unit_price;
  }

  // 2) Recompute derived values
  if (detail.discount_Method == "2") {
    detail.DiscountNet = detail.discount;
  } else {
    detail.DiscountNet = parseFloat(detail.Unit_price * detail.discount / 100);
  }
  if (detail.tax_method == "1") {
    detail.Net_price = parseFloat(detail.Unit_price - detail.DiscountNet);
    detail.taxe = parseFloat(detail.tax_percent * (detail.Unit_price - detail.DiscountNet) / 100);
    detail.Total_price = parseFloat(detail.Net_price + detail.taxe);
  } else {
    detail.taxe = parseFloat((detail.Unit_price - detail.DiscountNet) * (detail.tax_percent / 100));
    detail.Net_price = parseFloat(detail.Unit_price - detail.taxe - detail.DiscountNet);
    detail.Total_price = parseFloat(detail.Net_price + detail.taxe);
  }

  // 3) Enforce min price
  if ((detail.min_price || 0) > 0 && detail.Net_price < detail.min_price) {
    this.makeToast('warning', this.$t('Price_below_min_not_allowed'), this.$t('Warning'));
    // revert to retail
    detail.price_type = 'retail';
    detail.Unit_price = retailBase !== undefined && retailBase !== null && retailBase !== '' ? retailBase : detail.Unit_price;
    // recompute again
    if (detail.discount_Method == "2") {
      detail.DiscountNet = detail.discount;
    } else {
      detail.DiscountNet = parseFloat(detail.Unit_price * detail.discount / 100);
    }
    if (detail.tax_method == "1") {
      detail.Net_price = parseFloat(detail.Unit_price - detail.DiscountNet);
      detail.taxe = parseFloat(detail.tax_percent * (detail.Unit_price - detail.DiscountNet) / 100);
      detail.Total_price = parseFloat(detail.Net_price + detail.taxe);
    } else {
      detail.taxe = parseFloat((detail.Unit_price - detail.DiscountNet) * (detail.tax_percent / 100));
      detail.Net_price = parseFloat(detail.Unit_price - detail.taxe - detail.DiscountNet);
      detail.Total_price = parseFloat(detail.Net_price + detail.taxe);
    }
  }

  // 4) Update baseline for the (final) selected type
  if (detail.price_type === 'wholesale') {
    detail.wholesale_unit_price = detail.Unit_price;
  } else {
    detail.retail_unit_price = detail.Unit_price;
  }
  this.$forceUpdate();
  this.CalculTotal();
}), "ensurePriceType", function ensurePriceType(detail) {
  if (!detail) return;
  if (!detail.price_type) this.$set(detail, 'price_type', 'retail');
}), "Reset_Pos", function Reset_Pos() {
  var _this20 = this;
  return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee0() {
    var previousPage, client, response, data, _t6, _t7;
    return _regenerator().w(function (_context0) {
      while (1) switch (_context0.p = _context0.n) {
        case 0:
          previousPage = _this20.product_currentPage || 1;
          _this20.details = [];
          _this20.product = {};
          _this20.draft_sale_id = '';
          _this20.paymentLines = [{
            amount: 0,
            payment_method_id: '2'
          }];
          _this20.selectedAccount = null;
          _this20.globalPaymentNote = '';
          _this20.savedPaymentMethods = [], _this20.hasSavedPaymentMethod = false, _this20.useSavedPaymentMethod = false, _this20.selectedCard = null, _this20.card_id = '', _this20.is_new_credit_card = false, _this20.submit_showing_credit_card = false, _this20.sale.tax_rate = _this20.default_tax;
          _this20.sale.TaxNet = 0;
          _this20.sale.shipping = _this20.getDefaultShippingAmount();
          _this20.sale.discount = 0;
          _this20.sale.discount_Method = '2'; // Reset to fixed (default)
          _this20.sale.notes = '';
          _this20.GrandTotal = 0;
          _this20.total = 0;
          _this20.category_id = "";
          _this20.brand_id = "";
          _this20.selectedClientPoints = 0;
          _this20.points_to_convert = 0;
          _this20.used_points = 0;
          _this20.discount_from_points = 0;
          _this20.clientIsEligible = false;
          _this20.pointsConverted = false;
          try {
            _this20._cd_emit && _this20._cd_emit({
              currency: _this20.currentUser && _this20.currentUser.currency || '',
              details: [],
              discount: 0,
              TaxNet: 0,
              GrandTotal: 0
            }, true);
          } catch (e) {}
          client = _this20.clients.find(function (client) {
            return client.id === 1;
          });
          if (!client) {
            _context0.n = 4;
            break;
          }
          _this20.client_name = client.name;
          _this20.selectedClientId = 1;
          _context0.p = 1;
          _context0.n = 2;
          return axios.get("/get_points_client/".concat(_this20.selectedClientId));
        case 2:
          response = _context0.v;
          data = response.data;
          if (data.is_royalty_eligible) {
            _this20.selectedClientPoints = data.points;
            _this20.clientIsEligible = true;
          } else {
            _this20.selectedClientPoints = 0;
            _this20.clientIsEligible = false;
          }
          _context0.n = 4;
          break;
        case 3:
          _context0.p = 3;
          _t6 = _context0.v;
        case 4:
          _context0.p = 4;
          _context0.n = 5;
          return _this20.getProducts();
        case 5:
          _context0.n = 7;
          break;
        case 6:
          _context0.p = 6;
          _t7 = _context0.v;
        case 7:
          if (!_this20.isOnline && previousPage > 1) {
            _this20.product_currentPage = previousPage;
            _this20.paginate_products(_this20.product_perPage, previousPage - 1);
          }
        case 8:
          return _context0.a(2);
      }
    }, _callee0, null, [[4, 6], [1, 3]]);
  }))();
}), "search", function search() {
  var _this21 = this;
  if (this.timer) {
    clearTimeout(this.timer);
    this.timer = null;
  }
  if (this.search_input.length < 2) {
    return this.product_filter = [];
  }
  if (this.sale.warehouse_id != "" && this.sale.warehouse_id != null) {
    this.timer = setTimeout(function () {
      var barcode = _this21.search_input.trim();
      var weight = null;
      if (barcode.length === 13 && !isNaN(barcode)) {
        // Play sound only if barcode scanning sound is enabled
        if (_this21.pos_settings.barcode_scanning_sound) {
          _this21.audio.play();
        }
        // Play sound only if barcode scanning sound is enabled
        if (_this21.pos_settings.barcode_scanning_sound) {
          _this21.audio.play();
        }
        var product = _this21.products_pos.find(function (prod) {
          return prod.code === barcode && (prod.product_type === 'is_service' || Number(prod.qte_sale || 0) > 0);
        });
        if (product) {
          _this21.Check_Product_Exist(product, product.id, weight);
          return;
        } else {
          var productCode = barcode.substring(0, 7);
          var _weight = parseFloat(barcode.substring(7, 12)) / 1000;
          var _product = _this21.products_pos.find(function (prod) {
            return prod.code === productCode && (prod.product_type === 'is_service' || Number(prod.qte_sale || 0) > 0);
          });
          if (_product) {
            // Play sound only if barcode scanning sound is enabled
            if (_this21.pos_settings.barcode_scanning_sound) {
              _this21.audio.play();
            }
            // Ensure weight does not exceed available quantity
            var available = Number(_product.qte_sale || 0);
            if (available > 0 && _weight > available) {
              _this21.makeToast("warning", _this21.$t("LowStock"), _this21.$t("Warning"));
              _weight = available;
            }
            _product.quantity = _weight;
            _this21.Check_Product_Exist(_product, _product.id, _weight);
            return;
          }
        }
        _this21.makeToast("danger", "Invalid product code scanned", _this21.$t("Error"));
        _this21.search_input = '';
        _this21.product_filter = [];
      }
      var product_filter = _this21.products_pos.filter(function (product) {
        return (product.product_type === 'is_service' || Number(product.qte_sale || 0) > 0) && (product.code === _this21.search_input || String(product.barcode || '').includes(_this21.search_input));
      });
      if (product_filter.length === 1) {
        // Play sound only if barcode scanning sound is enabled
        if (_this21.pos_settings.barcode_scanning_sound) {
          _this21.audio.play();
        }
        _this21.Check_Product_Exist(product_filter[0], product_filter[0].id, weight = null);
      } else {
        _this21.product_filter = _this21.products_pos.filter(function (product) {
          if (product.product_type !== 'is_service' && Number(product.qte_sale || 0) <= 0) return false;
          var name = String(product.name || '').toLowerCase();
          var code = String(product.code || '').toLowerCase();
          var barcodeStr = String(product.barcode || '').toLowerCase();
          var term = _this21.search_input.toLowerCase();
          return name.includes(term) || code.includes(term) || barcodeStr.includes(term);
        });
      }
    }, 800);
  } else {
    this.makeToast("warning", this.$t("SelectWarehouse"), this.$t("Warning"));
  }
}), "Check_Product_Exist", function Check_Product_Exist(product, id) {
  var weight = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
  if (this.load_product) {
    this.load_product = false;
    nprogress__WEBPACK_IMPORTED_MODULE_0___default().start();
    nprogress__WEBPACK_IMPORTED_MODULE_0___default().set(0.1);
    this.product = {};
    if (product.product_type == 'is_service') {
      this.product.quantity = 1;
    } else {
      this.product.current = product.qte_sale;
      this.product.fix_stock = product.qte;
      if (weight !== null) {
        this.product.quantity = weight;
      } else {
        this.product.quantity = product.qte_sale < 1 ? product.qte_sale : 1;
      }
    }
    this.Get_Product_Details(id, product.product_variant_id, product);
    nprogress__WEBPACK_IMPORTED_MODULE_0___default().done();
    this.search_input = '';
    this.product_filter = [];
  } else {
    this.makeToast("warning", this.$t("Please_wait_until_the_product_is_loaded"), this.$t("Warning"));
  }
}), "Products_by_Category", function Products_by_Category(id) {
  this.category_id = id;
  this.getProducts();
}), "Products_by_Brands", function Products_by_Brands(id) {
  this.brand_id = id;
  this.getProducts();
}), _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_objectSpread2, "getAllCategory", function getAllCategory() {
  this.category_id = "";
  this.search_category = '';
  this.getProducts();
}), "GetAllBrands", function GetAllBrands() {
  this.brand_id = "";
  this.search_brand = '';
  this.getProducts(1);
}), "Show_Draft_Sales", function Show_Draft_Sales() {
  var _this22 = this;
  this.draft_sales_page = 1;
  this.get_Draft_Sales(1);
  setTimeout(function () {
    _this22.$bvModal.show("show_draft_sales");
  }, 1000);
}), "onPageChangeDraftSales", function onPageChangeDraftSales(page) {
  this.draft_sales_page = page;
  this.get_Draft_Sales(page);
}), "get_Draft_Sales", function get_Draft_Sales(page) {
  var _this23 = this;
  nprogress__WEBPACK_IMPORTED_MODULE_0___default().start();
  nprogress__WEBPACK_IMPORTED_MODULE_0___default().set(0.1);
  axios.get("get_draft_sales?page=" + page + "&limit=" + this.limit).then(function (response) {
    _this23.draft_sales = response.data.draft_sales;
    _this23.totalRows_draft_sales = response.data.totalRows;

    // If current page is empty but we have data and we're not on page 1, go to previous page
    if (_this23.draft_sales.length === 0 && _this23.totalRows_draft_sales > 0 && page > 1) {
      _this23.draft_sales_page = page - 1;
      _this23.get_Draft_Sales(_this23.draft_sales_page);
      return;
    }
    nprogress__WEBPACK_IMPORTED_MODULE_0___default().done();
  })["catch"](function () {
    nprogress__WEBPACK_IMPORTED_MODULE_0___default().done();
  });
}), "loadDraftSale", function loadDraftSale(id) {
  var _this24 = this;
  this.openingDraftId = id;
  // If this draft is already loaded, do nothing (do not update on open)
  if (this.draft_sale_id && String(this.draft_sale_id) === String(id)) {
    this.openingDraftId = null;
    return;
  }
  nprogress__WEBPACK_IMPORTED_MODULE_0___default().start();
  nprogress__WEBPACK_IMPORTED_MODULE_0___default().set(0.1);
  axios.get("pos/data_draft_convert_sale/".concat(id)).then(function (response) {
    var _data$default_account, _data$default_payment;
    _this24.draft_sale_id = id;
    var data = response.data || {};

    // Basic references (keep layout/logic unchanged; just inject data)
    if (Array.isArray(data.clients)) _this24.clients = data.clients;
    if (Array.isArray(data.accounts)) _this24.accounts = data.accounts;
    if (Array.isArray(data.warehouses)) _this24.warehouses = data.warehouses;
    if (Array.isArray(data.categories)) _this24.categories = data.categories;
    if (Array.isArray(data.brands)) _this24.brands = data.brands;
    if (Array.isArray(data.payment_methods)) _this24.payment_methods = data.payment_methods;
    if (data.default_account_id !== undefined) _this24.default_account_id = (_data$default_account = data.default_account_id) !== null && _data$default_account !== void 0 ? _data$default_account : null;
    if (data.default_payment_method_id !== undefined) _this24.default_payment_method_id = (_data$default_payment = data.default_payment_method_id) !== null && _data$default_payment !== void 0 ? _data$default_payment : null;

    // Customer & loyalty
    _this24.selectedClientId = data.client_id || data.sale && data.sale.client_id || _this24.selectedClientId;
    _this24.client_name = data.client_name || _this24.client_name;
    _this24.clientIsEligible = data.default_client_eligible === true || data.default_client_eligible === 1;
    _this24.selectedClientPoints = _this24.clientIsEligible ? parseFloat(data.default_client_points || 0) : 0;
    if (typeof data.point_to_amount_rate !== 'undefined') {
      _this24.point_to_amount_rate = data.point_to_amount_rate;
    }

    // Sale-level fields
    var saleData = data.sale || {};
    _this24.sale.warehouse_id = data.warehouse_id !== undefined && data.warehouse_id !== null ? data.warehouse_id : saleData.warehouse_id || _this24.sale.warehouse_id;
    _this24.sale.tax_rate = saleData.tax_rate || 0;
    _this24.sale.TaxNet = saleData.TaxNet || 0;
    _this24.sale.discount = saleData.discount || 0;
    // Backward compatibility: default to fixed ('2') if discount_Method is not present
    _this24.sale.discount_Method = saleData.discount_Method || '2';
    _this24.sale.shipping = _this24.normalizeShippingAmount(saleData.shipping);
    _this24.sale.notes = saleData.notes || '';

    // Map draft details to POS details shape (ensuring fields required by POS)
    var incoming = Array.isArray(data.details) ? data.details : [];
    var mapped = incoming.map(function (it, idx) {
      var d = _objectSpread({}, it);
      if (d.detail_id === undefined || d.detail_id === null) d.detail_id = idx + 1;
      if (!d.price_type) d.price_type = 'retail';
      if (d.retail_unit_price === undefined) d.retail_unit_price = d.Unit_price;
      if (d.wholesale_unit_price === undefined) d.wholesale_unit_price = d.Unit_price_wholesale !== undefined ? d.Unit_price_wholesale : d.Unit_price;
      if (d.min_price === undefined) d.min_price = 0;
      if (d.current === undefined || d.current === null) d.current = d.fix_stock !== undefined ? d.fix_stock : d.quantity;
      if (d.fix_stock === undefined || d.fix_stock === null) d.fix_stock = d.current;
      var unitPrice = Number(d.Unit_price || 0);
      var discountVal = Number(d.discount || 0);
      var discountMethod = String(d.discount_Method || '2'); // 1: %, 2: fixed
      var taxPercent = Number(d.tax_percent || 0);
      var taxMethod = String(d.tax_method || '1'); // 1: Exclusive, 2: Inclusive

      if (typeof d.DiscountNet === 'undefined') {
        d.DiscountNet = discountMethod === '2' ? discountVal : unitPrice * (discountVal / 100);
      }
      if (taxMethod === '1') {
        d.Net_price = parseFloat((unitPrice - d.DiscountNet).toFixed(2));
        d.taxe = parseFloat(((unitPrice - d.DiscountNet) * taxPercent / 100).toFixed(2));
        d.Total_price = parseFloat((d.Net_price + d.taxe).toFixed(2));
      } else {
        d.taxe = parseFloat(((unitPrice - d.DiscountNet) * (taxPercent / 100)).toFixed(2));
        d.Net_price = parseFloat((unitPrice - d.taxe - d.DiscountNet).toFixed(2));
        d.Total_price = parseFloat((d.Net_price + d.taxe).toFixed(2));
      }
      return d;
    });
    _this24.details = mapped;

    // Totals
    _this24.GrandTotal = Number(data.GrandTotal || 0);
    _this24.CalculTotal();

    // Refresh product lists for the chosen warehouse (unified API)
    if (_this24.sale.warehouse_id) {
      _this24.getProducts();
    }

    // Close draft list modal
    try {
      _this24.$bvModal.hide('show_draft_sales');
    } catch (e) {}
    nprogress__WEBPACK_IMPORTED_MODULE_0___default().done();
  })["catch"](function () {
    nprogress__WEBPACK_IMPORTED_MODULE_0___default().done();
  })["finally"](function () {
    _this24.openingDraftId = null;
  });
}), "Remove_Draft_Sale", function Remove_Draft_Sale(id) {
  var _this25 = this;
  this.$swal({
    title: this.$t("Delete_Title"),
    text: this.$t("Delete_Text"),
    type: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    cancelButtonText: this.$t("Delete_cancelButtonText"),
    confirmButtonText: this.$t("Delete_confirmButtonText")
  }).then(function (result) {
    if (result.value) {
      nprogress__WEBPACK_IMPORTED_MODULE_0___default().start();
      nprogress__WEBPACK_IMPORTED_MODULE_0___default().set(0.1);
      axios["delete"]("remove_draft_sale/" + id).then(function () {
        _this25.$swal(_this25.$t("Delete_Deleted"), _this25.$t("Deleted_in_successfully"), "success");
        Fire.$emit("event_delete_draft_sale");
      })["catch"](function () {
        setTimeout(function () {
          return nprogress__WEBPACK_IMPORTED_MODULE_0___default().done();
        }, 500);
        _this25.$swal(_this25.$t("Delete_Failed"), _this25.$t("Delete_Therewassomethingwronge"), "warning");
      });
    }
  });
}), "updateParams", function updateParams(newProps) {
  this.serverParams = Object.assign({}, this.serverParams, newProps);
}), "onPageChange", function onPageChange(_ref4) {
  var currentPage = _ref4.currentPage;
  if (this.serverParams.page !== currentPage) {
    this.updateParams({
      page: currentPage
    });
    this.get_Draft_Sales(currentPage);
  }
}), "onPerPageChange", function onPerPageChange(_ref5) {
  var currentPerPage = _ref5.currentPerPage;
  if (this.limit !== currentPerPage) {
    this.limit = currentPerPage;
    this.updateParams({
      page: 1,
      perPage: currentPerPage
    });
    this.get_Draft_Sales(1);
  }
}), _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_objectSpread2, "getProducts", function getProducts() {
  var _this26 = this;
  this.productsLoading = true;
  nprogress__WEBPACK_IMPORTED_MODULE_0___default().start();
  nprogress__WEBPACK_IMPORTED_MODULE_0___default().set(0.1);
  return axios.get("pos/get_products_pos" + "?category_id=" + this.category_id + "&brand_id=" + this.brand_id + "&warehouse_id=" + this.sale.warehouse_id + "&stock=" + 1 + "&product_service=" + 1 + "&product_combo=" + 1).then(function (response) {
    var rawProducts = Array.isArray(response.data.products) ? response.data.products : [];
    // Always show real backend stock in online mode;
    // only apply shadow stock adjustments when we are offline.
    _this26.products = rawProducts.map(function (p) {
      return _objectSpread({}, p);
    });
    // Use the same unified list for barcode scanning / quick search.
    _this26.products_pos = rawProducts.map(function (p) {
      return _objectSpread({}, p);
    });
    _this26.product_totalRows = response.data.totalRows;
    _this26.Product_paginatePerPage();
    var reallyOffline = !_this26.isOnline || typeof window !== 'undefined' && window.navigator && window.navigator.onLine === false;
    if (reallyOffline) {
      try {
        if (_utils__WEBPACK_IMPORTED_MODULE_4__["default"] && _utils__WEBPACK_IMPORTED_MODULE_4__["default"].shadowStock && _utils__WEBPACK_IMPORTED_MODULE_4__["default"].shadowStock.applyToList && _this26.sale.warehouse_id) {
          _utils__WEBPACK_IMPORTED_MODULE_4__["default"].shadowStock.applyToList(_this26.sale.warehouse_id, _this26.products);
        }
      } catch (e) {}
    }
    _this26.productsReady = true;
    // Cache grid products for offline usage (per warehouse) using RAW server data
    try {
      if (_utils__WEBPACK_IMPORTED_MODULE_4__["default"] && _utils__WEBPACK_IMPORTED_MODULE_4__["default"].offlinePos && _utils__WEBPACK_IMPORTED_MODULE_4__["default"].offlinePos.cacheWarehouseSnapshot && _this26.sale.warehouse_id) {
        _utils__WEBPACK_IMPORTED_MODULE_4__["default"].offlinePos.cacheWarehouseSnapshot(_this26.sale.warehouse_id, {
          products: rawProducts,
          products_pos: rawProducts,
          product_totalRows: _this26.product_totalRows,
          lastLoadedPage: 1,
          category_id: _this26.category_id,
          brand_id: _this26.brand_id
        });
      }
    } catch (e) {}
    nprogress__WEBPACK_IMPORTED_MODULE_0___default().done();
  })["catch"](function () {
    // Offline/failed request: try to hydrate from cached snapshot
    try {
      if (_utils__WEBPACK_IMPORTED_MODULE_4__["default"] && _utils__WEBPACK_IMPORTED_MODULE_4__["default"].offlinePos && _utils__WEBPACK_IMPORTED_MODULE_4__["default"].offlinePos.getWarehouseSnapshot && _this26.sale.warehouse_id) {
        var snap = _utils__WEBPACK_IMPORTED_MODULE_4__["default"].offlinePos.getWarehouseSnapshot(_this26.sale.warehouse_id);
        if (snap && Array.isArray(snap.products)) {
          var baseProducts = snap.products;
          _this26.products = baseProducts.map(function (p) {
            return _objectSpread({}, p);
          });
          // Hydrate scan/search list from cached unified products if available
          if (Array.isArray(snap.products_pos)) {
            _this26.products_pos = snap.products_pos.map(function (p) {
              return _objectSpread({}, p);
            });
          } else {
            _this26.products_pos = baseProducts.map(function (p) {
              return _objectSpread({}, p);
            });
          }
          _this26.product_totalRows = snap.product_totalRows || baseProducts.length;
          _this26.Product_paginatePerPage();
          var reallyOffline = !_this26.isOnline || typeof window !== 'undefined' && window.navigator && window.navigator.onLine === false;
          if (reallyOffline) {
            // When truly offline, apply shadow stock on top of cached data
            try {
              if (_utils__WEBPACK_IMPORTED_MODULE_4__["default"] && _utils__WEBPACK_IMPORTED_MODULE_4__["default"].shadowStock && _utils__WEBPACK_IMPORTED_MODULE_4__["default"].shadowStock.applyToList) {
                _utils__WEBPACK_IMPORTED_MODULE_4__["default"].shadowStock.applyToList(_this26.sale.warehouse_id, _this26.products);
              }
            } catch (e2) {}
          }
        }
      }
    } catch (e) {}
    _this26.productsReady = true; // avoid blocking UI forever on error
    nprogress__WEBPACK_IMPORTED_MODULE_0___default().done();
  })["finally"](function () {
    _this26.productsLoading = false;
  });
}), "onCustomerDisplayScreenChange", function onCustomerDisplayScreenChange(value) {
  var screenId = value || '1';
  this.customer_display_screen_id = String(screenId);
  try {
    localStorage.setItem('pos_customer_display_screen_id', this.customer_display_screen_id);
  } catch (e) {}
  this._cd_queue_broadcast && this._cd_queue_broadcast();
}), "Selected_Warehouse", function Selected_Warehouse(value) {
  this.search_input = '';
  this.product_filter = [];

  // If warehouse is cleared, reset product lists and avoid calling API/cache.
  if (!value) {
    this.products = [];
    this.products_pos = [];
    this.product_totalRows = 0;
    this.paginated_Products = [];
    this.product_currentPage = 1;
    this.productsLoading = false;
    return;
  }

  // With unified API, a single call loads both grid and scan lists.
  this.getProducts();
}), "onOnlineReloadNow", function onOnlineReloadNow() {
  this.onlineReloadModalVisible = false;
  this.onlineReloadAfterSale = false;
  if (typeof window !== 'undefined' && window.location && typeof window.location.reload === 'function') {
    try {
      window.location.reload();
    } catch (e) {}
  }
}), "onOnlineReloadAfterSale", function onOnlineReloadAfterSale() {
  this.onlineReloadAfterSale = true;
  this.onlineReloadModalVisible = false;
}), "onOnlineReloadDismiss", function onOnlineReloadDismiss() {
  this.onlineReloadModalVisible = false;
  this.onlineReloadAfterSale = false;
}), "get_units", function get_units(value) {
  var _this27 = this;
  var UNITS_CACHE_KEY = 'pos_units_by_product';
  var loadUnitsCache = function loadUnitsCache() {
    try {
      var raw = typeof window !== 'undefined' ? window.localStorage.getItem(UNITS_CACHE_KEY) : null;
      return raw ? JSON.parse(raw) : {};
    } catch (e) {
      return {};
    }
  };
  var saveUnitsCache = function saveUnitsCache(map) {
    try {
      if (typeof window !== 'undefined') {
        window.localStorage.setItem(UNITS_CACHE_KEY, JSON.stringify(map || {}));
      }
    } catch (e) {}
  };
  var reallyOffline = !this.isOnline || typeof window !== 'undefined' && window.navigator && window.navigator.onLine === false;
  var pid = String(value);
  if (reallyOffline) {
    // 1) Try in-memory cache first
    if (this.unitsByProductId && this.unitsByProductId[pid]) {
      var units = this.unitsByProductId[pid];
      this.units = units;
      if (!this.detail.sale_unit_id && Array.isArray(units) && units[0] && units[0].id) {
        this.detail.sale_unit_id = units[0].id;
      }
      return Promise.resolve(units);
    }

    // 2) Try persisted localStorage cache
    var stored = loadUnitsCache();
    if (stored && stored[pid]) {
      var _units = stored[pid];
      this.unitsByProductId = Object.assign({}, this.unitsByProductId || {}, _defineProperty({}, pid, _units));
      this.units = _units;
      if (!this.detail.sale_unit_id && Array.isArray(_units) && _units[0] && _units[0].id) {
        this.detail.sale_unit_id = _units[0].id;
      }
      return Promise.resolve(_units);
    }

    // 3) Fallback: synthesize a minimal units array from the existing detail row
    try {
      var row = (this.details || []).find(function (d) {
        return d.product_id === value;
      });
      if (row) {
        var syntheticId = row.sale_unit_id || row.product_id || 0;
        var name = row.unitSale || row.unitSaleName || '';
        var _units2 = [{
          id: syntheticId,
          name: name || (this.$t ? this.$t('UnitSale') : 'Unit'),
          ShortName: name || '',
          operator: '*',
          operator_value: 1
        }];
        this.units = _units2;
        this.unitsByProductId = Object.assign({}, this.unitsByProductId || {}, _defineProperty({}, pid, _units2));
        if (!this.detail.sale_unit_id) {
          this.detail.sale_unit_id = syntheticId;
        }
        return Promise.resolve(_units2);
      }
    } catch (e) {}

    // 4) Last resort: keep whatever units we already have (may be empty),
    // but do not reject so the caller's .finally() still runs.
    return Promise.resolve(this.units || []);
  }

  // Online mode: fetch from API and cache by product_id for future offline use
  return axios.get("get_units?id=" + value).then(function (_ref6) {
    var data = _ref6.data;
    var units = Array.isArray(data) ? data : [];
    _this27.units = units;
    var map = Object.assign({}, _this27.unitsByProductId || {}, _defineProperty({}, pid, units));
    _this27.unitsByProductId = map;
    var stored = loadUnitsCache();
    stored[pid] = units;
    saveUnitsCache(stored);
    return units;
  });
}), "Modal_Updat_Detail", function Modal_Updat_Detail(detail) {
  var _this28 = this;
  this.detailLoading = true;
  this.detail = {};
  this.detail.name = detail.name;
  this.$bvModal.show("form_Update_Detail");
  this.get_units(detail.product_id)["catch"](function () {})["finally"](function () {
    _this28.detail.detail_id = detail.detail_id;
    _this28.detail.sale_unit_id = detail.sale_unit_id;
    _this28.detail.product_type = detail.product_type;
    _this28.detail.Unit_price = detail.Unit_price;
    _this28.detail.price_type = detail.price_type || 'retail';
    var baseRetail = detail.retail_unit_price !== undefined && detail.retail_unit_price !== null ? detail.retail_unit_price : detail.Unit_price;
    var baseWholesale = detail.wholesale_unit_price !== undefined && detail.wholesale_unit_price !== null ? detail.wholesale_unit_price : detail.Unit_price_wholesale;
    if (baseWholesale === undefined || baseWholesale === null || baseWholesale === 0) {
      baseWholesale = baseRetail;
    }
    _this28.detail.retail_unit_price = baseRetail;
    _this28.detail.wholesale_unit_price = baseWholesale;
    _this28.detail.min_price = detail.min_price !== undefined ? detail.min_price : 0;
    _this28.detail.fix_price = detail.fix_price;
    _this28.detail.fix_stock = detail.fix_stock;
    _this28.detail.current = detail.current;
    // Normalize tax_method so v-select shows the correct label in both
    // online and offline modes (1 => Exclusive, 2 => Inclusive).
    var rawTaxMethod = detail.tax_method;
    _this28.detail.tax_method = rawTaxMethod === 2 || rawTaxMethod === '2' ? 2 : 1;
    _this28.detail.discount_Method = detail.discount_Method;
    _this28.detail.discount = detail.discount;
    _this28.detail.quantity = detail.quantity;
    _this28.detail.tax_percent = detail.tax_percent;
    _this28.detail.is_imei = detail.is_imei;
    _this28.detail.imei_number = detail.imei_number;
    _this28.detailLoading = false;
  });
}), "submit_Update_Detail", function submit_Update_Detail() {
  var _this29 = this;
  this.$refs.Update_Detail && this.$refs.Update_Detail.validate().then(function (success) {
    if (!success) {
      return;
    } else {
      _this29.Update_Detail();
    }
  })["catch"](function () {
    // Fallback: proceed without form validation if ref is absent in new design
    _this29.Update_Detail();
  });
}), "Update_Detail", function Update_Detail() {
  var _this30 = this;
  for (var i = 0; i < this.details.length; i++) {
    if (this.details[i].detail_id === this.detail.detail_id) {
      // Min price validation (unit and net)
      var rawMinCandidate = this.details[i].min_price !== undefined && this.details[i].min_price !== null ? this.details[i].min_price : this.detail.min_price || 0;
      var minPriceRow = parseFloat(String(rawMinCandidate).toString().replace(/,/g, '')) || 0;
      var unitPriceNum = parseFloat(String(this.detail.Unit_price).toString().replace(/,/g, '')) || 0;
      if (minPriceRow > 0 && unitPriceNum < minPriceRow) {
        this.makeToast('warning', this.$t('Price_below_min_not_allowed'), this.$t('Warning'));
        return;
      }
      // compute proposed net to check against min price
      var proposedDiscountNet = this.detail.discount_Method == "2" ? this.detail.discount : parseFloat(unitPriceNum * this.detail.discount / 100);
      var proposedNet = void 0,
        proposedTax = void 0;
      if (this.detail.tax_method == "1") {
        proposedNet = parseFloat(unitPriceNum - proposedDiscountNet);
        proposedTax = parseFloat(this.detail.tax_percent * (unitPriceNum - proposedDiscountNet) / 100);
      } else {
        proposedTax = parseFloat((unitPriceNum - proposedDiscountNet) * (this.detail.tax_percent / 100));
        proposedNet = parseFloat(unitPriceNum - proposedTax - proposedDiscountNet);
      }
      if (minPriceRow > 0 && proposedNet < minPriceRow) {
        this.makeToast('warning', this.$t('Price_below_min_not_allowed'), this.$t('Warning'));
        return;
      }
      if (this.details[i].product_type !== 'is_service') {
        for (var k = 0; k < this.units.length; k++) {
          if (this.units[k].id == this.detail.sale_unit_id) {
            if (this.units[k].operator == "/") {
              this.details[i].current = this.detail.fix_stock * this.units[k].operator_value;
              this.details[i].unitSale = this.units[k].ShortName;
            } else {
              this.details[i].current = this.detail.fix_stock / this.units[k].operator_value;
              this.details[i].unitSale = this.units[k].ShortName;
            }
          }
        }
        if (this.details[i].current < this.details[i].quantity) {
          this.details[i].quantity = this.details[i].current;
        }
      }
      this.details[i].Unit_price = unitPriceNum;
      this.details[i].price_type = this.detail.price_type;
      this.details[i].tax_percent = this.detail.tax_percent;
      this.details[i].tax_method = this.detail.tax_method;
      this.details[i].discount_Method = this.detail.discount_Method;
      this.details[i].discount = this.detail.discount;
      this.details[i].sale_unit_id = this.detail.sale_unit_id;
      this.details[i].imei_number = this.detail.imei_number;
      this.details[i].product_type = this.detail.product_type;

      // reuse computed values
      this.details[i].DiscountNet = proposedDiscountNet;
      this.details[i].taxe = proposedTax;
      this.details[i].Net_price = proposedNet;
      this.details[i].Total_price = parseFloat(proposedNet + proposedTax);
      this.$forceUpdate();
    }
  }
  this.CalculTotal();
  setTimeout(function () {
    _this30.$bvModal.hide("form_Update_Detail");
  }, 1000);
}), _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_objectSpread2, "onClientSelected", function onClientSelected(selectedClientId) {
  var _this31 = this;
  return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee1() {
    var client, response, data, briefResponse, briefData, _t8, _t9;
    return _regenerator().w(function (_context1) {
      while (1) switch (_context1.p = _context1.n) {
        case 0:
          _this31.client_name = '';
          _this31.selectedClientPoints = 0;
          _this31.points_to_convert = 0;
          _this31.discount_from_points = 0;
          _this31.used_points = 0;
          _this31.clientIsEligible = false;
          _this31.pointsConverted = false;
          _this31.sale.discount = 0;
          _this31.selectedClientCreditLimit = 0;
          _this31.selectedClientNetBalance = 0;
          if (selectedClientId) {
            _context1.n = 1;
            break;
          }
          _this31.selectedClientId = "";
          _this31.CalculTotal();
          return _context1.a(2);
        case 1:
          client = _this31.clients.find(function (c) {
            return c.id === selectedClientId;
          });
          if (!client) {
            _context1.n = 9;
            break;
          }
          _this31.client_name = client.name;
          _this31.selectedClientId = selectedClientId;
          _context1.p = 2;
          _context1.n = 3;
          return axios.get("/get_points_client/".concat(selectedClientId));
        case 3:
          response = _context1.v;
          data = response.data;
          if (data.is_royalty_eligible) {
            _this31.selectedClientPoints = data.points;
            _this31.clientIsEligible = true;
          } else {
            _this31.selectedClientPoints = 0;
            _this31.clientIsEligible = false;
          }
          _context1.n = 5;
          break;
        case 4:
          _context1.p = 4;
          _t8 = _context1.v;
          console.error('Error fetching client points:', _t8);
        case 5:
          _context1.p = 5;
          _context1.n = 6;
          return axios.get("/clients/".concat(selectedClientId, "/brief"));
        case 6:
          briefResponse = _context1.v;
          briefData = briefResponse.data;
          _this31.selectedClientCreditLimit = parseFloat(briefData.credit_limit || 0);
          _this31.selectedClientNetBalance = parseFloat(briefData.netBalance || 0);
          _context1.n = 8;
          break;
        case 7:
          _context1.p = 7;
          _t9 = _context1.v;
          console.error('Error fetching client credit limit:', _t9);
          _this31.selectedClientCreditLimit = 0;
          _this31.selectedClientNetBalance = 0;
        case 8:
          _context1.n = 10;
          break;
        case 9:
          _this31.selectedClientId = "";
          _this31.selectedClientCreditLimit = 0;
          _this31.selectedClientNetBalance = 0;
        case 10:
          _this31.CalculTotal();
        case 11:
          return _context1.a(2);
      }
    }, _callee1, null, [[5, 7], [2, 4]]);
  }))();
}), "convertPointsToDiscount", function convertPointsToDiscount() {
  if (this.pointsConverted) {
    var current = Number(this.sale.discount || 0);
    var toRemove = Number(this.discount_from_points || 0);
    // For fixed discounts, revert the combined fixed discount amount
    if (String(this.sale.discount_Method || '2') !== '1') {
      this.sale.discount = Math.max(0, parseFloat((current - toRemove).toFixed(2)));
    }
    this.discount_from_points = 0;
    this.used_points = 0;
    this.points_to_convert = 0;
    this.pointsConverted = false;
  } else {
    var maxPoints = Number(this.selectedClientPoints) || 0;
    var pts = Number(this.points_to_convert);
    if (!Number.isFinite(pts) || pts <= 0) {
      this.makeToast('warning', this.$t ? this.$t('Please_enter_points_to_convert') : 'Please enter points to convert', this.$t ? this.$t('Warning') : 'Warning');
      return;
    }
    if (pts > maxPoints) pts = maxPoints;
    var discount = parseFloat((pts * this.point_to_amount_rate).toFixed(2));
    this.discount_from_points = discount;
    // Don't merge points into sale.discount - keep them separate so input shows only manual discount
    // Points discount is stored in discount_from_points and applied separately in calculations
    this.used_points = pts;
    this.pointsConverted = true;
  }
  this.CalculTotal();
}), "onPointsToConvertInput", function onPointsToConvertInput() {
  var max = Number(this.selectedClientPoints) || 0;
  var val = Number(this.points_to_convert);
  if (!Number.isFinite(val)) val = 0;
  if (val < 0) val = 0;
  // enforce integer points
  val = Math.floor(val);
  if (val > max) {
    val = max;
    this.makeToast('warning', this.$t ? this.$t('Entered_points_exceed_available') : 'Entered points exceed available', this.$t ? this.$t('Warning') : 'Warning');
  }
  this.points_to_convert = val;
}), "Invoice_POS", function Invoice_POS(id) {
  var _this32 = this;
  // Determine preferred invoice format from settings; default to thermal
  var format = 'thermal';
  try {
    // Prefer explicit invoice_format cached from POS bootstrap
    if (typeof this.invoice_format === 'string' && ['thermal', 'a4'].includes(this.invoice_format)) {
      format = this.invoice_format;
    } else {
      var s = this.invoice_pos && this.invoice_pos.setting ? this.invoice_pos.setting : null;
      if (s && typeof s.invoice_format === 'string' && ['thermal', 'a4'].includes(s.invoice_format)) {
        format = s.invoice_format;
      }
    }
  } catch (e) {}

  // If A4 is selected, print using the existing A4 PDF endpoint (`/api/sale_pdf/{id}`)
  // but keep the UX similar to the thermal POS invoice:
  // - open a print popup window
  // - show the PDF inside it
  // - trigger print
  // - reload after Print/Cancel when "After this sale" is selected
  if (format === 'a4') {
    if (typeof window !== 'undefined') {
      var vm = this;
      var reloadAfterSale = !!vm.onlineReloadAfterSale;

      // Create (or refresh) a same-origin hook so the popup can request a reload immediately
      // after Print/Cancel without relying on the POS window focus changing.
      try {
        window.__posReloadAfterA4Print = function () {
          try {
            if (vm.onlineReloadAfterSale && window.location && typeof window.location.reload === 'function') {
              vm.onlineReloadAfterSale = false;
              vm.onlineReloadModalVisible = false;
              try {
                window.location.reload();
              } catch (e) {}
            }
          } catch (e) {}
        };
      } catch (e) {}

      // Open the popup immediately (before async axios resolves) so it is not blocked,
      // and so the user always sees the print window (like the thermal POS invoice).
      var sw = 1200,
        sh = 800;
      try {
        sw = window.screen && window.screen.availWidth ? window.screen.availWidth : sw;
        sh = window.screen && window.screen.availHeight ? window.screen.availHeight : sh;
      } catch (e) {}
      var width = Math.max(700, Math.min(1200, Math.floor(sw * 0.9)));
      var height = Math.max(600, Math.min(900, Math.floor(sh * 0.9)));
      var left = Math.max(0, Math.floor((sw - width) / 2));
      var top = Math.max(0, Math.floor((sh - height) / 2));
      var features = "height=".concat(height, ",width=").concat(width, ",left=").concat(left, ",top=").concat(top, ",toolbar=0,location=0,menubar=0,status=0,scrollbars=1,resizable=1");
      var win = window.open('', 'A4Invoice', features);
      if (!win) {
        return;
      }

      // Bootstrap the popup with a loading screen and print/reload wiring.
      try {
        win.document.open();
        win.document.write('<!doctype html><html><head><title>Print</title>');
        win.document.write('<meta name="viewport" content="width=device-width, initial-scale=1.0">');
        win.document.write('<style>html,body{margin:0;padding:0;height:100%;overflow:hidden;background:#fff;}');
        win.document.write('#loading{height:100%;display:flex;align-items:center;justify-content:center;font-family:Arial;color:#444;}');
        win.document.write('embed,object,iframe{width:100%;height:100%;border:0;display:none;}</style>');
        win.document.write('</head><body>');
        win.document.write('<div id="loading">Loading invoice…</div>');
        win.document.write('<object id="pdfObject" type="application/pdf"></object>');
        win.document.write('<embed id="pdfEmbed" type="application/pdf" />');
        win.document.write('<iframe id="pdfFrame"></iframe>');
        win.document.write('<script>(function(){');
        win.document.write('var reloadAfterSale=' + (reloadAfterSale ? 'true' : 'false') + ';');
        win.document.write('var printed=false;');
        win.document.write('function done(){try{if(window.opener){try{if(reloadAfterSale){try{window.opener.__posReloadAfterA4Print && window.opener.__posReloadAfterA4Print();}catch(e){}}}catch(e){}}}catch(e){} try{window.close();}catch(e){} }');
        win.document.write('window.onafterprint=function(){done();};');
        // Do NOT close on initial focus; only after printing was initiated.
        win.document.write('window.addEventListener("focus", function(){try{if(printed){setTimeout(done, 150);}}catch(e){}});');
        win.document.write('function doPrint(){ if(printed) return; printed=true; try{window.focus();}catch(e){} try{window.print();}catch(e){} }');
        win.document.write('window.__setPdf=function(src){');
        win.document.write('try{document.getElementById("loading").style.display="none";}catch(e){}');
        // Prefer object (native viewer). If it fails, embed/iframe can still show.
        win.document.write('try{var o=document.getElementById("pdfObject"); if(o){o.data=src; o.style.display="block";}}catch(e){}');
        win.document.write('try{var e=document.getElementById("pdfEmbed"); if(e){e.src=src;}}catch(e){}');
        win.document.write('try{var f=document.getElementById("pdfFrame"); if(f){f.src=src; f.onload=function(){setTimeout(doPrint,300);};}}catch(e){}');
        // Timed fallbacks: PDFs can take time to render before print dialog appears.
        win.document.write('setTimeout(doPrint, 900); setTimeout(doPrint, 1800); setTimeout(doPrint, 2800);');
        win.document.write('};');
        win.document.write('window.__setError=function(msg){try{document.getElementById("loading").innerText=msg||"Failed to load invoice";}catch(e){}};');
        win.document.write('})();<\/script>');
        win.document.write('</body></html>');
        win.document.close();
      } catch (e) {}

      // Fetch the existing A4 layout as HTML using the current Bearer token (axios default header),
      // then inject it into the already-open popup so we can call window.print() reliably
      // (same pattern as the POS thermal invoice).
      axios.get("sale_print_html/".concat(id), {
        responseType: 'text',
        headers: {
          'Content-Type': 'application/json'
        }
      }).then(function (response) {
        try {
          var html = typeof response.data === 'string' ? response.data : response.request && typeof response.request.responseText === 'string' ? response.request.responseText : '';
          if (!html) {
            try {
              win.__setError && win.__setError('Empty invoice HTML');
            } catch (_) {}
            return;
          }
          // Replace popup content with the A4 HTML and trigger print (mirrors index_sale.print_it)
          try {
            win.document.open();
            win.document.write(html);
            win.document.close();
          } catch (e) {
            try {
              win.__setError && win.__setError('Failed to render invoice');
            } catch (_) {}
            return;
          }
          // Ensure the popup preview (screen) and print dialog use the same A4 sizing.
          // We do NOT modify the template content; we only inject extra CSS rules.
          try {
            var style = win.document.createElement('style');
            style.type = 'text/css';
            style.innerHTML = '@media screen {' + '  body { width: 210mm; margin: 0 auto; }' + '}' + '@media print {' + '  @page { size: A4; margin: 10mm 15mm; }' + '  body { width: auto; margin: 0; }' + '}';
            (win.document.head || win.document.getElementsByTagName("head")[0]).appendChild(style);
          } catch (e) {}

          // Close/hide the preview popup after the user clicks Print or Cancel
          // (mirroring the thermal invoice flow).
          var closed = false;
          var closePreview = function closePreview() {
            if (closed) return;
            closed = true;
            try {
              win.close();
            } catch (_) {}
          };
          // Browsers do not expose a reliable "print job finished" event.
          // `afterprint` fires when the print dialog closes (Print OR Cancel).
          // Heuristic:
          // - If the dialog closes almost immediately (< 800ms) we treat it as Cancel and close at once.
          // - Otherwise we assume "Print" and keep the preview a bit longer (2s) before closing.
          var CANCEL_THRESHOLD_MS = 800;
          var PRINT_CLOSE_DELAY_MS = 2000;
          // Track whether we actually initiated printing, and whether the popup lost focus
          // (print dialog typically causes a blur). This prevents premature closing.
          var printInitiated = false;
          var blurredAfterPrint = false;
          var printStartAt = 0;
          try {
            win.onafterprint = function () {
              var elapsed = printStartAt ? Date.now() - printStartAt : 0;
              var delay = elapsed > CANCEL_THRESHOLD_MS ? PRINT_CLOSE_DELAY_MS : 0;
              setTimeout(function () {
                try {
                  if (reloadAfterSale && window.__posReloadAfterA4Print) {
                    window.__posReloadAfterA4Print();
                  }
                } catch (e) {}
                closePreview();
              }, delay);
            };
          } catch (e) {}
          // Fallback: some browsers don't fire afterprint; close only after a blur->focus cycle
          // that happens AFTER print() was called (i.e. after Print/Cancel dialog closes).
          try {
            var onBlur = function onBlur() {
              try {
                if (printInitiated) blurredAfterPrint = true;
              } catch (e) {}
            };
            var onFocus = function onFocus() {
              try {
                if (!printInitiated || !blurredAfterPrint) return;
              } catch (e) {
                return;
              }
              var elapsed = printStartAt ? Date.now() - printStartAt : 0;
              var delay = elapsed > CANCEL_THRESHOLD_MS ? PRINT_CLOSE_DELAY_MS : 0;
              setTimeout(function () {
                try {
                  if (reloadAfterSale && window.__posReloadAfterA4Print) {
                    window.__posReloadAfterA4Print();
                  }
                } catch (e) {}
                closePreview();
              }, delay);
            };
            win.addEventListener && win.addEventListener('blur', onBlur);
            win.addEventListener && win.addEventListener('focus', onFocus);
          } catch (e) {}

          // Give browser a moment to render, then show system print dialog
          setTimeout(function () {
            try {
              win.focus();
            } catch (_) {}
            try {
              printInitiated = true;
              printStartAt = Date.now();
            } catch (e) {}
            try {
              win.print();
            } catch (_) {}
          }, 700);
        } catch (e) {
          try {
            win.__setError && win.__setError('Failed to load invoice');
          } catch (_) {}
        }
      })["catch"](function () {
        try {
          win.__setError && win.__setError('Failed to load invoice');
        } catch (_) {}
      });
    }
    return;
  }

  // Default: thermal POS invoice (existing behavior)
  axios.get("sales_print_invoice/".concat(id)).then(function (response) {
    _this32.invoice_pos.sale = response.data.sale || {};
    // Backward compatibility: ensure discount_Method defaults to '2' (fixed) if not present
    if (_this32.invoice_pos.sale && !_this32.invoice_pos.sale.discount_Method) {
      _this32.invoice_pos.sale.discount_Method = '2';
    }
    _this32.invoice_pos.details = response.data.details;
    _this32.invoice_pos.setting = response.data.setting;
    _this32.invoice_pos.symbol = response.data.symbol;
    _this32.invoice_pos.zatca_qr = response.data.zatca_qr;
    _this32.payments = response.data.payments;
    if (response.data.pos_settings) {
      // Merge with existing pos_settings to preserve defaults
      _this32.pos_settings = _objectSpread(_objectSpread({}, _this32.pos_settings), response.data.pos_settings);
      // Convert integer values to boolean for proper condition checking
      if (typeof _this32.pos_settings.quick_add_customer === 'number') {
        _this32.pos_settings.quick_add_customer = _this32.pos_settings.quick_add_customer === 1;
      }
    }
    // Mirror index_sale behavior: show modal first, then optionally auto-print
    setTimeout(function () {
      try {
        _this32.$bvModal.show('Show_invoice');
      } catch (e) {}
      _this32.$nextTick(function () {
        return _this32.renderZatcaQrPos();
      });
    }, 500);

    // Respect "Print Invoice automatically" POS setting for online sales.
    // Fallback default is enabled (1) if the flag is missing.
    try {
      var rawPrintable = _this32.pos_settings && _this32.pos_settings.is_printable !== undefined ? _this32.pos_settings.is_printable : response.data.pos_settings && response.data.pos_settings.is_printable !== undefined ? response.data.pos_settings.is_printable : 1;
      var autoPrintable = rawPrintable === true || rawPrintable === 1 || rawPrintable === '1';
      if (autoPrintable) {
        setTimeout(function () {
          try {
            if (typeof window !== 'undefined' && (window.innerWidth <= 768 || window.matchMedia('(max-width: 768px)').matches)) {
              _this32.print_pos_mobile();
            } else {
              _this32.print_pos();
            }
          } catch (e) {
            try {
              _this32.print_pos();
            } catch (_) {}
          }
        }, 1000);
      }
    } catch (e) {}
  });
}), "renderZatcaQrPos", function renderZatcaQrPos() {
  var _this33 = this;
  try {
    if (!this.invoice_pos || !this.invoice_pos.setting || !this.invoice_pos.setting.zatca_enabled || !this.invoice_pos.zatca_qr) return;
    var mount = this.$refs.zatcaQrcodePos;
    if (!mount) return;
    mount.innerHTML = '';
    var draw = function draw() {
      try {
        if (!window.QRCode) return;
        var text = String(_this33.invoice_pos.zatca_qr || '');
        try {
          var m = _this33.$refs.zatcaQrcodePos;
          if (m) m.setAttribute('title', text);
        } catch (e) {}
        try {
          new window.QRCode(mount, {
            text: text,
            width: 180,
            height: 180,
            colorDark: '#000000',
            colorLight: '#ffffff',
            correctLevel: window.QRCode.CorrectLevel ? window.QRCode.CorrectLevel.H : undefined
          });
        } catch (e1) {
          new window.QRCode(mount, text);
        }
        _this33.zatcaRenderedPos = true;
        setTimeout(function () {
          if (mount && !mount.childNodes.length && window.QRCode) {
            try {
              new window.QRCode(mount, text);
            } catch (e2) {}
          }
          try {
            var img = mount.querySelector('img');
            if (img) {
              img.style.display = '';
              img.style.marginLeft = 'auto';
              img.style.marginRight = 'auto';
            }
          } catch (e3) {}
        }, 150);
      } catch (e) {}
    };
    if (window.QRCode) {
      draw();
    } else {
      var loadScript = function loadScript(src, onload, onerror) {
        var s = document.createElement('script');
        s.src = src;
        s.onload = onload;
        s.onerror = onerror;
        document.head.appendChild(s);
      };

      // Prefer CDN, then vendor, then assets_setup
      loadScript('https://cdnjs.cloudflare.com/ajax/libs/qrcodejs/1.0.0/qrcode.min.js', function () {
        if (window.QRCode) return draw();
        loadScript('/vendor/qrcode/qrcode.min.js', function () {
          if (window.QRCode) return draw();
          loadScript('/assets_setup/js/qrcode.js', draw, draw);
        }, function () {
          return loadScript('/assets_setup/js/qrcode.js', draw, function () {});
        });
      }, function () {
        loadScript('/vendor/qrcode/qrcode.min.js', function () {
          if (window.QRCode) return draw();
          loadScript('/assets_setup/js/qrcode.js', draw, function () {});
        }, function () {
          return loadScript('/assets_setup/js/qrcode.js', draw, function () {});
        });
      });
    }
  } catch (e) {}
}), "getValidationState", function getValidationState(_ref7) {
  var dirty = _ref7.dirty,
    validated = _ref7.validated,
    _ref7$valid = _ref7.valid,
    valid = _ref7$valid === void 0 ? null : _ref7$valid;
  return dirty || validated ? valid : null;
}), "Submit_Customer", function Submit_Customer() {
  var _this34 = this;
  nprogress__WEBPACK_IMPORTED_MODULE_0___default().start();
  nprogress__WEBPACK_IMPORTED_MODULE_0___default().set(0.1);
  this.$refs.Create_Customer && this.$refs.Create_Customer.validate().then(function (success) {
    if (!success) {
      nprogress__WEBPACK_IMPORTED_MODULE_0___default().done();
      _this34.makeToast("danger", _this34.$t("Please_fill_the_form_correctly"), _this34.$t("Failed"));
    } else {
      _this34.Create_Client();
    }
  })["catch"](function () {
    // Fallback when ref not present in new design
    nprogress__WEBPACK_IMPORTED_MODULE_0___default().done();
  });
}), "Create_Client", function Create_Client() {
  var _this35 = this;
  axios.post("clients", {
    name: this.client.name,
    email: this.client.email,
    phone: this.client.phone,
    tax_number: this.client.tax_number,
    country: this.client.country,
    city: this.client.city,
    adresse: this.client.adresse,
    is_royalty_eligible: this.client.is_royalty_eligible
  }).then(function (response) {
    nprogress__WEBPACK_IMPORTED_MODULE_0___default().done();
    var newClient = response.data;
    _this35.clients.push({
      id: newClient.id,
      name: newClient.name
    });
    _this35.selectedClientId = newClient.id;
    _this35.client_name = newClient.name;
    _this35.onClientSelected(newClient.id);
    _this35.makeToast("success", _this35.$t("Successfully_Created"), _this35.$t("Success"));
    _this35.Get_Client_Without_Paginate();
    _this35.$bvModal.hide("New_Customer");
  })["catch"](function () {
    nprogress__WEBPACK_IMPORTED_MODULE_0___default().done();
    _this35.makeToast("danger", _this35.$t("InvalidData"), _this35.$t("Failed"));
  });
}), "Submit_Quick_Add_Customer", function Submit_Quick_Add_Customer() {
  var _this36 = this;
  nprogress__WEBPACK_IMPORTED_MODULE_0___default().start();
  nprogress__WEBPACK_IMPORTED_MODULE_0___default().set(0.1);
  this.SubmitProcessing = true;
  this.$refs.Quick_Add_Customer_Form && this.$refs.Quick_Add_Customer_Form.validate().then(function (success) {
    if (!success) {
      nprogress__WEBPACK_IMPORTED_MODULE_0___default().done();
      _this36.SubmitProcessing = false;
      _this36.makeToast("danger", _this36.$t("Please_fill_the_form_correctly"), _this36.$t("Failed"));
      return;
    }
    axios.post("clients", {
      name: _this36.client.name,
      email: _this36.client.email || '',
      phone: _this36.client.phone || '',
      tax_number: _this36.client.tax_number || '',
      country: _this36.client.country || '',
      city: _this36.client.city || '',
      adresse: _this36.client.adresse || '',
      is_royalty_eligible: _this36.client.is_royalty_eligible || false
    }).then(function (response) {
      var _newClient$client;
      var newClient = response.data;

      // If there are custom field values from the quick-add form, persist them
      var clientId = newClient.id || ((_newClient$client = newClient.client) === null || _newClient$client === void 0 ? void 0 : _newClient$client.id);
      var hasCustoms = clientId && _this36.quickAddCustomFieldValues && Object.keys(_this36.quickAddCustomFieldValues).length > 0;
      var afterCustoms = function afterCustoms() {
        nprogress__WEBPACK_IMPORTED_MODULE_0___default().done();
        _this36.SubmitProcessing = false;
        _this36.clients.push({
          id: newClient.id,
          name: newClient.name,
          phone: newClient.phone || ''
        });
        _this36.selectedClientId = newClient.id;
        _this36.client_name = newClient.name;
        _this36.onClientSelected(newClient.id);
        _this36.makeToast("success", _this36.$t("Successfully_Created"), _this36.$t("Success"));
        _this36.Get_Client_Without_Paginate();
        _this36.$bvModal.hide("Quick_Add_Customer");
        _this36.reset_Form_client();
        _this36.quickAddCustomFieldValues = {};
      };
      if (hasCustoms) {
        axios.post("custom-field-values", {
          entity_type: "App\\Models\\Client",
          entity_id: clientId,
          values: _this36.quickAddCustomFieldValues
        }).then(afterCustoms)["catch"](function () {
          return afterCustoms();
        });
      } else {
        afterCustoms();
      }
    })["catch"](function () {
      nprogress__WEBPACK_IMPORTED_MODULE_0___default().done();
      _this36.SubmitProcessing = false;
      _this36.makeToast("danger", _this36.$t("InvalidData"), _this36.$t("Failed"));
    });
  });
}), "New_Client", function New_Client() {
  this.reset_Form_client();
  this.$bvModal.show("New_Customer");
}), _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_objectSpread2, "Quick_Add_Client", function Quick_Add_Client() {
  this.reset_Form_client();
  this.$bvModal.show("Quick_Add_Customer");
}), "reset_Form_client", function reset_Form_client() {
  this.client = {
    id: "",
    name: "",
    email: "",
    phone: "",
    country: "",
    city: "",
    tax_number: "",
    adresse: "",
    is_royalty_eligible: false
  };
}), "Get_Client_Without_Paginate", function Get_Client_Without_Paginate() {
  var _this37 = this;
  axios.get("get_clients_without_paginate").then(function (_ref8) {
    var data = _ref8.data;
    return _this37.clients = data;
  });
}), "get_today_sales", function get_today_sales() {
  var _this38 = this;
  nprogress__WEBPACK_IMPORTED_MODULE_0___default().start();
  nprogress__WEBPACK_IMPORTED_MODULE_0___default().set(0.1);
  axios.get("get_today_sales").then(function (response) {
    _this38.today_sales = response.data;
    setTimeout(function () {
      _this38.$bvModal.show("modal_today_sales");
      nprogress__WEBPACK_IMPORTED_MODULE_0___default().done();
    }, 1000);
  })["catch"](function () {});
}), "getResultValue", function getResultValue(result) {
  return result.code + " " + "(" + result.name + ")";
}), "SearchProduct", function SearchProduct(result) {
  if (this.load_product) {
    this.load_product = false;
    this.product = {};
    if (result.product_type == 'is_service') {
      this.product.quantity = 1;
      this.product.code = result.code;
    } else {
      this.product.code = result.code;
      this.product.current = result.qte_sale;
      this.product.fix_stock = result.qte;
      if (result.qte_sale < 1) {
        this.product.quantity = result.qte_sale;
      } else {
        this.product.quantity = 1;
      }
    }
    this.product.product_variant_id = result.product_variant_id;
    this.Get_Product_Details(result.id, result.product_variant_id, result);
    this.search_input = '';
    if (this.$refs && this.$refs.product_autocomplete) {
      this.$refs.product_autocomplete.value = "";
    }
    this.product_filter = [];
  } else {
    this.makeToast("warning", this.$t("Please_wait_until_the_product_is_loaded"), this.$t("Warning"));
  }
}), "print_pos", function print_pos() {
  var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  if (typeof window !== 'undefined' && (window.innerWidth <= 768 || window.matchMedia('(max-width: 768px)').matches)) {
    return this.print_pos_mobile();
  }
  // Try to grab existing DOM markup; if not present, we will not print here.
  var el = document.getElementById('invoice-POS');
  if (!el) {
    return;
  }
  var divContents = el.innerHTML;
  var a = window.open('', '', 'height=600,width=480');
  if (!a) {
    return;
  }
  var bodyClass = this.currentReceiptPaperSizeClass || '';
  a.document.write('<html><head><link rel="stylesheet" href="/css/pos_print.css"></head><body class="' + bodyClass + '">');
  // Wrap in #invoice-POS so print CSS applies correctly and centers content
  a.document.write('<div id="invoice-POS">');
  a.document.write(divContents);
  a.document.write('</div></body></html>');
  a.document.close();
  var vm = this;
  var _afterPrint = function afterPrint() {
    try {
      window.removeEventListener('focus', _afterPrint);
    } catch (e) {}
    try {
      a.close();
    } catch (e) {}
    // If user chose to reload after this sale, do it once printing is done.
    if (vm.onlineReloadAfterSale && typeof window !== 'undefined' && window.location && typeof window.location.reload === 'function') {
      vm.onlineReloadAfterSale = false;
      vm.onlineReloadModalVisible = false;
      try {
        window.location.reload();
      } catch (e) {}
    }
  };
  try {
    window.addEventListener('focus', _afterPrint);
  } catch (e) {}
  try {
    a.onafterprint = _afterPrint;
  } catch (e) {}
  setTimeout(function () {
    try {
      a.focus();
    } catch (e) {}
    try {
      a.print();
    } catch (e) {
      _afterPrint();
    }
  }, 300);
}), "print_pos_mobile", function print_pos_mobile() {
  try {
    var el = document.getElementById('invoice-POS');
    if (!el) {
      return;
    }
    var bodyClass = this.currentReceiptPaperSizeClass || '';
    var html = "<!doctype html><html><head>\n          <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n          <link rel=\"stylesheet\" href=\"/css/pos_print.css\">\n        </head><body class=\"".concat(bodyClass, "\"><div id=\"invoice-POS\">").concat(el.innerHTML, "</div></body></html>");
    var iframe = document.createElement('iframe');
    iframe.style.position = 'fixed';
    iframe.style.right = '0';
    iframe.style.bottom = '0';
    iframe.style.width = '0';
    iframe.style.height = '0';
    iframe.style.border = '0';
    document.body.appendChild(iframe);
    var doc = iframe.contentWindow ? iframe.contentWindow.document : iframe.contentDocument || null;
    if (!doc) {
      return;
    }
    doc.open();
    doc.write(html);
    doc.close();
    var vm = this;
    var doPrint = function doPrint() {
      try {
        (iframe.contentWindow || iframe).focus();
      } catch (e) {}
      try {
        (iframe.contentWindow || iframe).print();
      } catch (e) {}
      setTimeout(function () {
        try {
          document.body.removeChild(iframe);
        } catch (_) {}
        // If user chose to reload after this sale, do it once mobile printing is done.
        if (vm.onlineReloadAfterSale && typeof window !== 'undefined' && window.location && typeof window.location.reload === 'function') {
          vm.onlineReloadAfterSale = false;
          vm.onlineReloadModalVisible = false;
          try {
            window.location.reload();
          } catch (e) {}
        }
      }, 1500);
    };

    // Give time for stylesheet to load
    setTimeout(doPrint, 500);
  } catch (e) {}
}), "printInvoiceFromData", function printInvoiceFromData(data) {
  var _this39 = this;
  try {
    var s = data && data.sale ? data.sale : {};
    var set = data && data.setting ? data.setting : {};
    var ps = data && data.pos_settings ? data.pos_settings : null;
    var symbol = data && data.symbol ? data.symbol : '';
    var details = Array.isArray(data && data.details) ? data.details : [];
    var payments = Array.isArray(data && data.payments) ? data.payments : [];
    var zatca_qr = data && data.zatca_qr ? data.zatca_qr : '';

    // Company setting fallback (needed so Address/Email/Phone show in offline receipts)
    var cachedSetting = null;
    try {
      cachedSetting = _utils__WEBPACK_IMPORTED_MODULE_4__["default"] && _utils__WEBPACK_IMPORTED_MODULE_4__["default"].offlinePos && _utils__WEBPACK_IMPORTED_MODULE_4__["default"].offlinePos.getCachedBootstrap ? (_utils__WEBPACK_IMPORTED_MODULE_4__["default"].offlinePos.getCachedBootstrap() || {}).setting : null;
    } catch (e) {}
    if (!cachedSetting) {
      try {
        var raw = localStorage.getItem('pos_receipt_company_setting');
        if (raw) cachedSetting = JSON.parse(raw);
      } catch (e) {}
    }
    var normalizedSetting = _objectSpread(_objectSpread({}, cachedSetting || {}), set || {});

    // Keep receipt behavior consistent: use the same modal/template for both online and offline.
    try {
      if (ps && _typeof(ps) === 'object') {
        this.pos_settings = _objectSpread(_objectSpread({}, this.pos_settings || {}), ps);
      }
    } catch (e) {}
    try {
      this.invoice_pos.sale = s || {};
      // Backward compatibility: ensure discount_Method defaults to '2' (fixed) if not present
      if (this.invoice_pos.sale && !this.invoice_pos.sale.discount_Method) {
        this.invoice_pos.sale.discount_Method = '2';
      }
    } catch (e) {}
    try {
      this.invoice_pos.details = details;
    } catch (e) {}
    try {
      this.invoice_pos.setting = normalizedSetting || {};
    } catch (e) {}
    try {
      this.$set(this.invoice_pos, 'symbol', symbol);
    } catch (e) {
      try {
        this.invoice_pos.symbol = symbol;
      } catch (_) {}
    }
    try {
      this.invoice_pos.zatca_qr = zatca_qr;
    } catch (e) {}
    try {
      this.payments = payments;
    } catch (e) {}

    // Ensure QR (if enabled) is rendered before printing
    try {
      this.$nextTick(function () {
        try {
          _this39.renderZatcaQrPos();
        } catch (e) {}
      });
    } catch (e) {}

    // Respect "Print Invoice automatically" POS setting for offline / data-driven printing.
    // If auto-print is disabled, just show the invoice modal and let the user print manually.
    var autoPrintable = true;
    try {
      var rawPrintable = this.pos_settings && this.pos_settings.is_printable !== undefined ? this.pos_settings.is_printable : ps && ps.is_printable !== undefined ? ps.is_printable : 1; // default enabled
      autoPrintable = rawPrintable === true || rawPrintable === 1 || rawPrintable === '1';
    } catch (e) {
      autoPrintable = true;
    }
    var doPrint = function doPrint() {
      try {
        _this39.print_pos({
          reloadAfterPrint: false
        });
      } catch (e) {}
    };

    // If auto-print is disabled, just ensure the invoice modal/DOM is available and skip printing.
    if (!autoPrintable) {
      try {
        this.$bvModal && this.$bvModal.show && this.$bvModal.show('Show_invoice');
      } catch (e) {}
    } else {
      // Wait for Vue to render invoice values into #invoice-POS
      try {
        this.$nextTick(function () {
          var el = typeof document !== 'undefined' ? document.getElementById('invoice-POS') : null;
          if (!el) {
            // As a fallback, show the modal once so its DOM is guaranteed to exist, then print.
            try {
              _this39.$bvModal && _this39.$bvModal.show && _this39.$bvModal.show('Show_invoice');
            } catch (e) {}
            setTimeout(doPrint, 300);
            return;
          }
          doPrint();
        });
      } catch (e) {
        doPrint();
      }
    }
  } catch (e) {
    // In offline mode, do not reload the main page; just ignore print failures.
  }
}), "GetElementsPos", function GetElementsPos() {
  var _this40 = this;
  axios.get("pos/data_create_pos").then(function (response) {
    var _response$data$defaul, _response$data$defaul2;
    _this40.clients = response.data.clients;
    _this40.accounts = response.data.accounts;
    _this40.warehouses = response.data.warehouses;
    _this40.categories = response.data.categories;
    _this40.brands = response.data.brands;
    _this40.payment_methods = response.data.payment_methods;
    _this40.default_account_id = (_response$data$defaul = response.data.default_account_id) !== null && _response$data$defaul !== void 0 ? _response$data$defaul : null;
    _this40.default_payment_method_id = (_response$data$defaul2 = response.data.default_payment_method_id) !== null && _response$data$defaul2 !== void 0 ? _response$data$defaul2 : null;
    _this40.sale.warehouse_id = response.data.defaultWarehouse;
    _this40.selectedClientId = response.data.defaultClient;
    _this40.client_name = response.data.default_client_name;
    _this40.clientIsEligible = response.data.default_client_eligible === true || response.data.default_client_eligible === 1;
    _this40.selectedClientPoints = _this40.clientIsEligible ? parseFloat(response.data.default_client_points) : 0;
    _this40.point_to_amount_rate = response.data.point_to_amount_rate;

    // Set default tax from settings
    if (response.data.default_tax !== undefined && response.data.default_tax !== null) {
      _this40.sale.tax_rate = parseFloat(response.data.default_tax) || 0;
      _this40.default_tax = parseFloat(response.data.default_tax) || 0;
      _this40.CalculTotal();
    }
    _this40.product_perPage = response.data.products_per_page;
    _this40.languages_available = response.data.languages_available;

    // Hydrate company/receipt header info (also used for offline printing)
    try {
      if (response.data && response.data.setting) {
        var merged = _objectSpread(_objectSpread({}, _this40.invoice_pos && _this40.invoice_pos.setting ? _this40.invoice_pos.setting : {}), response.data.setting);
        _this40.invoice_pos.setting = merged;
        // Cache preferred invoice format for POS printing
        if (merged && typeof merged.invoice_format === 'string' && ['thermal', 'a4'].includes(merged.invoice_format)) {
          _this40.invoice_format = merged.invoice_format;
        } else {
          _this40.invoice_format = 'thermal';
        }
        // Cache for offline usage even if the page later goes offline
        try {
          localStorage.setItem('pos_receipt_company_setting', JSON.stringify(merged));
        } catch (e) {}
      }
    } catch (e) {}

    // Ensure we always have a currency symbol fallback for receipts
    try {
      var sym = _this40.currentUser && _this40.currentUser.currency ? _this40.currentUser.currency : '';
      if (!_this40.invoice_pos.symbol) {
        try {
          _this40.$set(_this40.invoice_pos, 'symbol', sym);
        } catch (e) {
          _this40.invoice_pos.symbol = sym;
        }
      }
    } catch (e) {}

    // Load POS settings if available
    if (response.data.pos_settings) {
      _this40.pos_settings = response.data.pos_settings;
      // Convert integer values (0/1) to boolean for proper condition checking
      if (typeof _this40.pos_settings.quick_add_customer === 'number') {
        _this40.pos_settings.quick_add_customer = _this40.pos_settings.quick_add_customer === 1;
      }
      if (typeof _this40.pos_settings.barcode_scanning_sound === 'number') {
        _this40.pos_settings.barcode_scanning_sound = _this40.pos_settings.barcode_scanning_sound === 1;
      }
      if (typeof _this40.pos_settings.show_product_images === 'number') {
        _this40.pos_settings.show_product_images = _this40.pos_settings.show_product_images === 1;
      }
      if (typeof _this40.pos_settings.show_stock_quantity === 'number') {
        _this40.pos_settings.show_stock_quantity = _this40.pos_settings.show_stock_quantity === 1;
      }
      if (typeof _this40.pos_settings.enable_hold_sales === 'number') {
        _this40.pos_settings.enable_hold_sales = _this40.pos_settings.enable_hold_sales === 1;
      }
      if (typeof _this40.pos_settings.enable_customer_points === 'number') {
        _this40.pos_settings.enable_customer_points = _this40.pos_settings.enable_customer_points === 1;
      }
      if (typeof _this40.pos_settings.show_categories === 'number') {
        _this40.pos_settings.show_categories = _this40.pos_settings.show_categories === 1;
      }
      if (typeof _this40.pos_settings.show_brands === 'number') {
        _this40.pos_settings.show_brands = _this40.pos_settings.show_brands === 1;
      }
    }
    _this40.getProducts();
    _this40.paginate_Brands(_this40.brand_perPage, 0);
    _this40.paginate_Category(_this40.category_perPage, 0);
    _this40.stripe_key = response.data.stripe_key;
    // Cache bootstrap payload for offline usage
    try {
      if (_utils__WEBPACK_IMPORTED_MODULE_4__["default"] && _utils__WEBPACK_IMPORTED_MODULE_4__["default"].offlinePos && _utils__WEBPACK_IMPORTED_MODULE_4__["default"].offlinePos.cacheBootstrap) {
        _utils__WEBPACK_IMPORTED_MODULE_4__["default"].offlinePos.cacheBootstrap(response.data);
      }
    } catch (e) {}
    _this40.isLoading = false;
  })["catch"](function () {
    // Offline/failed bootstrap: hydrate from cached data where possible
    try {
      var cached = _utils__WEBPACK_IMPORTED_MODULE_4__["default"] && _utils__WEBPACK_IMPORTED_MODULE_4__["default"].offlinePos && _utils__WEBPACK_IMPORTED_MODULE_4__["default"].offlinePos.getCachedBootstrap ? _utils__WEBPACK_IMPORTED_MODULE_4__["default"].offlinePos.getCachedBootstrap() : null;
      if (cached) {
        var _cached$default_accou, _cached$default_payme;
        _this40.clients = cached.clients || [];
        _this40.accounts = cached.accounts || [];
        _this40.warehouses = cached.warehouses || [];
        _this40.categories = cached.categories || [];
        _this40.brands = cached.brands || [];
        _this40.payment_methods = cached.payment_methods || [];
        _this40.default_account_id = (_cached$default_accou = cached.default_account_id) !== null && _cached$default_accou !== void 0 ? _cached$default_accou : null;
        _this40.default_payment_method_id = (_cached$default_payme = cached.default_payment_method_id) !== null && _cached$default_payme !== void 0 ? _cached$default_payme : null;
        if (!_this40.sale.warehouse_id && cached.defaultWarehouse) {
          _this40.sale.warehouse_id = cached.defaultWarehouse;
        }
        if (!_this40.selectedClientId && cached.defaultClient) {
          _this40.selectedClientId = cached.defaultClient;
        }
        if (!_this40.client_name && cached.default_client_name) {
          _this40.client_name = cached.default_client_name;
        }
        _this40.clientIsEligible = cached.default_client_eligible === true || cached.default_client_eligible === 1;
        _this40.selectedClientPoints = _this40.clientIsEligible ? parseFloat(cached.default_client_points || 0) : 0;
        _this40.point_to_amount_rate = cached.point_to_amount_rate || _this40.point_to_amount_rate;
        if (cached.default_tax !== undefined && cached.default_tax !== null) {
          _this40.sale.tax_rate = parseFloat(cached.default_tax) || 0;
          _this40.default_tax = parseFloat(cached.default_tax) || 0;
          _this40.CalculTotal();
        }
        if (cached.products_per_page) {
          _this40.product_perPage = cached.products_per_page;
        }
        if (Array.isArray(cached.languages_available)) {
          _this40.languages_available = cached.languages_available;
        }
        if (cached.stripe_key) {
          _this40.stripe_key = cached.stripe_key;
        }

        // Hydrate cached company/receipt header info for offline receipts
        try {
          var cachedSetting = cached.setting || null;
          var setting = cachedSetting;
          if (!setting) {
            try {
              var raw = localStorage.getItem('pos_receipt_company_setting');
              if (raw) setting = JSON.parse(raw);
            } catch (e) {}
          }
          if (setting) {
            _this40.invoice_pos.setting = _objectSpread(_objectSpread({}, _this40.invoice_pos && _this40.invoice_pos.setting ? _this40.invoice_pos.setting : {}), setting);
          }
        } catch (e) {}

        // Ensure receipt symbol exists offline too
        try {
          var sym = _this40.currentUser && _this40.currentUser.currency ? _this40.currentUser.currency : '';
          if (!_this40.invoice_pos.symbol) {
            try {
              _this40.$set(_this40.invoice_pos, 'symbol', sym);
            } catch (e) {
              _this40.invoice_pos.symbol = sym;
            }
          }
        } catch (e) {}
        _this40.paginate_Brands(_this40.brand_perPage, 0);
        _this40.paginate_Category(_this40.category_perPage, 0);
        if (_this40.sale.warehouse_id) {
          // This call will fall back to cached snapshots in offline mode
          _this40.getProducts();
        } else {
          _this40.productsReady = true;
        }
      } else {
        _this40.productsReady = true;
      }
    } catch (e) {
      _this40.productsReady = true;
    }
    _this40.isLoading = false;
  });
}), _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_objectSpread2, "onModernPaymentSuccess", function onModernPaymentSuccess(evt) {
  var _this41 = this;
  // If this was an offline-queued sale, build a local invoice and print it
  try {
    if (evt && evt.offline && evt.payload) {
      var payload = evt.payload;
      var now = new Date();
      var saleDate = now.toISOString().slice(0, 19).replace('T', ' ');
      // Generate an internal offline reference if needed, but do not print it on the receipt
      var offlineRef = evt.offlineId ? "OFF-".concat(evt.offlineId) : "OFF-".concat(now.getTime());

      // Resolve client & warehouse names from cached lists
      var clientName = this.client_name || '';
      try {
        var cId = payload.client_id || this.selectedClientId;
        var c = (this.clients || []).find(function (x) {
          return String(x.id) === String(cId);
        });
        if (c && c.name) clientName = c.name;
      } catch (e2) {}
      var warehouseName = '';
      try {
        var wId = payload.warehouse_id || this.sale.warehouse_id;
        var w = (this.warehouses || []).find(function (x) {
          return String(x.id) === String(wId);
        });
        if (w && w.name) warehouseName = w.name;
      } catch (e2) {}

      // Resolve seller name from current user (prefer name, then username, then email)
      var sellerName = '';
      try {
        if (this.currentUser) {
          sellerName = this.currentUser.name || this.currentUser.username || this.currentUser.email || '';
        }
      } catch (e2) {}
      var sale = {
        // Do not set Ref so offline receipts have no "Ref: ..." line
        client_name: clientName,
        warehouse_name: warehouseName,
        discount: payload.discount || 0,
        taxe: payload.TaxNet || 0,
        tax_rate: payload.tax_rate || 0,
        shipping: this.normalizeShippingAmount(payload.shipping),
        GrandTotal: payload.GrandTotal || 0,
        paid_amount: Array.isArray(payload.payments) ? payload.payments.reduce(function (s, p) {
          return s + Number(p.amount || 0);
        }, 0) : 0,
        date: saleDate,
        seller_name: sellerName
      };

      // Map details into invoice shape
      var details = Array.isArray(payload.details) ? payload.details.map(function (d) {
        return {
          name: d.name,
          quantity: d.quantity,
          unit_sale: d.unitSale || d.unit_sale || '',
          total: d.subtotal != null ? d.subtotal : d.total != null ? d.total : (d.Net_price || 0) * (d.quantity || 0),
          is_imei: d.is_imei,
          imei_number: d.imei_number
        };
      }) : [];

      // Map payments into invoice shape
      var payments = Array.isArray(payload.payments) ? payload.payments.map(function (p) {
        var method = (_this41.payment_methods || []).find(function (m) {
          return String(m.id) === String(p.payment_method_id);
        });
        return {
          payment_method: method ? {
            name: method.name
          } : null,
          montant: Number(p.amount || 0),
          change: 0
        };
      }) : [];

      // Fallback settings & POS print options (reuse latest online invoice/pos settings when available)
      var symbol = this.currentUser && this.currentUser.currency ? this.currentUser.currency : '';

      // Prefer full setting object from last loaded invoice (online), else fall back to currentUser logo
      var baseSetting = this.invoice_pos && this.invoice_pos.setting && (this.invoice_pos.setting.logo || this.invoice_pos.setting.CompanyAdress || this.invoice_pos.setting.email || this.invoice_pos.setting.CompanyPhone) ? this.invoice_pos.setting : null;
      var setting = baseSetting || {
        logo: this.currentUser && this.currentUser.logo || '',
        CompanyAdress: '',
        email: '',
        CompanyPhone: ''
      };

      // Prefer live pos_settings (including note_customer/show_note) when available
      var ps = this.pos_settings && Object.keys(this.pos_settings).length ? this.pos_settings : {
        show_address: false,
        show_email: false,
        show_phone: false,
        show_customer: true,
        show_Warehouse: true,
        show_discount: true,
        show_tax: true,
        show_shipping: true,
        logo_size: 60,
        // In absence of explicit POS settings, still show a generic note
        show_note: true,
        note_customer: this.$t ? this.$t('Thank_you_for_your_business') : 'Thank you for your business'
      };
      this.printInvoiceFromData({
        sale: sale,
        details: details,
        payments: payments,
        setting: setting,
        pos_settings: ps,
        symbol: symbol
      });
    }
  } catch (e) {}

  // After successful payment via modal, refresh drafts if needed and reset
  if (this.draft_sale_id) {
    try {
      Fire.$emit('event_delete_draft_sale');
    } catch (e) {}
    this.draft_sale_id = '';
  }
  try {
    this.Reset_Pos();
  } catch (e) {}
  try {
    this.refreshOfflineSalesCount();
  } catch (e) {}
}), "initOfflineStatus", function initOfflineStatus() {
  if (typeof window === 'undefined') {
    this.isOnline = true;
    this.offlineSyncInProgress = false;
    this.offlineLastSyncError = null;
    this.refreshOfflineSalesCount();
    return;
  }
  try {
    this.isOnline = window.navigator ? window.navigator.onLine !== false : true;
  } catch (e) {
    this.isOnline = true;
  }
  try {
    window.addEventListener('online', this.handleOnline);
    window.addEventListener('offline', this.handleOffline);
  } catch (e) {}
  this.refreshOfflineSalesCount();
}), "handleOnline", function handleOnline() {
  // When the browser reports that we're back online, check if there is an
  // active checkout. If so, we'll offer the user a non-blocking choice to
  // reload now or after completing the sale.
  var hadActiveCart = this.details && this.details.length > 0;
  this.isOnline = true;
  // When the cart is empty, we auto-sync offline sales in the background and
  // then reload the page afterwards (even if there were no pending sales).
  // We still let the global offline sync handler perform the actual API work.
  if (!hadActiveCart) {
    try {
      if (_utils__WEBPACK_IMPORTED_MODULE_4__["default"] && _utils__WEBPACK_IMPORTED_MODULE_4__["default"].offlinePos && _utils__WEBPACK_IMPORTED_MODULE_4__["default"].offlinePos.getOfflineSales) {
        var queue = _utils__WEBPACK_IMPORTED_MODULE_4__["default"].offlinePos.getOfflineSales() || [];
        var pendingCount = queue.filter(function (s) {
          return s && (s.status === 'pending' || s.status === 'syncing');
        }).length;
        if (pendingCount > 0) {
          var msg = pendingCount === 1 ? this.$t ? this.$t('pos.Syncing_offline_sales') : 'Syncing offline sales' : this.$t ? "".concat(this.$t('pos.Syncing_offline_sales'), " (").concat(pendingCount, ")") : "Syncing ".concat(pendingCount, " offline sales...");
          this.makeToast && this.makeToast('info', msg, this.$t ? this.$t('Notice') : 'Notice');
          // Ask POS to reload after global offline sync completes successfully.
          this.reloadAfterOfflineSync = true;
        } else {
          // No pending offline sales: nothing to sync, so reload immediately.
          this.reloadAfterOfflineSync = false;
          if (typeof window !== 'undefined' && window.location && typeof window.location.reload === 'function') {
            try {
              window.location.reload();
            } catch (e) {}
          }
        }
      }
    } catch (e) {}
  }
  // If there is an active checkout when the connection is restored, show a
  // non-blocking confirmation modal offering to reload now or after
  // completing the current sale.
  if (hadActiveCart) {
    this.onlineReloadModalVisible = true;
    this.onlineReloadAfterSale = false;
  }
  // Do NOT call this.trySyncOfflineSales() here; globalOfflineSync will run
  // the sync once per online event, which prevents duplicate submissions.
}), "handleOffline", function handleOffline() {
  this.isOnline = false;
  try {
    var msg = this.$t ? this.$t('pos.Offline_Mode') : 'Offline mode enabled';
    this.makeToast && this.makeToast('warning', msg, this.$t ? this.$t('Warning') : 'Warning');
  } catch (e) {}
  // Any time we go offline, reset the online reload modal state.
  this.onlineReloadModalVisible = false;
  this.onlineReloadAfterSale = false;
  this.reloadAfterOfflineSync = false;
}), "refreshOfflineSalesCount", function refreshOfflineSalesCount() {
  try {
    if (!_utils__WEBPACK_IMPORTED_MODULE_4__["default"] || !_utils__WEBPACK_IMPORTED_MODULE_4__["default"].offlinePos || !_utils__WEBPACK_IMPORTED_MODULE_4__["default"].offlinePos.getOfflineSales) {
      this.offlineSalesCount = 0;
      return;
    }
    var list = _utils__WEBPACK_IMPORTED_MODULE_4__["default"].offlinePos.getOfflineSales() || [];
    // Only count sales that are still pending or actively syncing.
    this.offlineSalesCount = list.filter(function (s) {
      return s && (s.status === 'pending' || s.status === 'syncing');
    }).length;
    // If there are no pending/syncing offline sales, clear any residual shadow stock
    if (this.offlineSalesCount === 0) {
      try {
        if (_utils__WEBPACK_IMPORTED_MODULE_4__["default"] && _utils__WEBPACK_IMPORTED_MODULE_4__["default"].shadowStock && _utils__WEBPACK_IMPORTED_MODULE_4__["default"].shadowStock.clearAll) {
          _utils__WEBPACK_IMPORTED_MODULE_4__["default"].shadowStock.clearAll();
        }
      } catch (e2) {}
    }
  } catch (e) {
    this.offlineSalesCount = 0;
  }
}), "handleAutoOfflineSyncResult", function handleAutoOfflineSyncResult(payload) {
  try {
    // Always refresh badge/count after any sync attempt
    this.refreshOfflineSalesCount();
  } catch (e) {}
  if (!payload || typeof this.makeToast !== 'function') return;
  var syncedCount = Number(payload.syncedCount || 0);
  var lastError = payload.lastError || null;
  if (syncedCount > 0) {
    var successMsg = syncedCount === 1 ? '1 offline sale synced successfully' : "".concat(syncedCount, " offline sales synced successfully");
    this.makeToast('success', successMsg, this.$t ? this.$t('Success') : 'Success');
    // If we came back online with an empty cart and requested an
    // auto-reload after offline sync, perform it now.
    if (this.reloadAfterOfflineSync && this.details && this.details.length === 0) {
      this.reloadAfterOfflineSync = false;
      if (typeof window !== 'undefined' && window.location && typeof window.location.reload === 'function') {
        try {
          window.location.reload();
        } catch (e) {}
      }
    }
  } else if (lastError) {
    var errDetail = String(lastError || '');
    // Some old/invalid offline records may produce low‑level validation
    // messages (e.g. "validation.required"). These are not actionable for
    // the cashier and the records are marked as "failed" and skipped on
    // future syncs, so we silently ignore them to avoid noisy toasts.
    var lower = errDetail.toLowerCase();
    var looksLikeValidationKey = lower.includes('validation.') || lower.includes('validation_required') || lower === 'validation.required';
    if (looksLikeValidationKey) {
      return;
    }
    var _short = errDetail.slice(0, 200);
    var baseMsg = 'Failed to sync offline sales';
    var fullMsg = _short ? "".concat(baseMsg, ": ").concat(_short) : baseMsg;
    this.makeToast('danger', fullMsg, this.$t ? this.$t('Failed') : 'Failed');
  }
}), "trySyncOfflineSales", function trySyncOfflineSales() {
  var _this42 = this;
  return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee10() {
    var syncedCount, queue, i, sale, basePayload, normalizedDetails, payload, response, isNetworkError, msg, _t0, _t1;
    return _regenerator().w(function (_context10) {
      while (1) switch (_context10.p = _context10.n) {
        case 0:
          if (!_this42.offlineSyncInProgress) {
            _context10.n = 1;
            break;
          }
          return _context10.a(2);
        case 1:
          if (!(typeof window !== 'undefined')) {
            _context10.n = 5;
            break;
          }
          _context10.p = 2;
          if (!(window.navigator && window.navigator.onLine === false)) {
            _context10.n = 3;
            break;
          }
          _this42.isOnline = false;
          return _context10.a(2);
        case 3:
          _context10.n = 5;
          break;
        case 4:
          _context10.p = 4;
          _t0 = _context10.v;
        case 5:
          _this42.offlineSyncInProgress = true;
          // Notify UI (via global event bus) that POS offline sync has started
          try {
            if (typeof window !== 'undefined' && window.Fire && window.Fire.$emit) {
              window.Fire.$emit('offline-sync:start');
            }
          } catch (e) {}
          _this42.offlineLastSyncError = null;
          syncedCount = 0;
          _context10.p = 6;
          if (!(!_utils__WEBPACK_IMPORTED_MODULE_4__["default"] || !_utils__WEBPACK_IMPORTED_MODULE_4__["default"].offlinePos || !_utils__WEBPACK_IMPORTED_MODULE_4__["default"].offlinePos.getOfflineSales)) {
            _context10.n = 7;
            break;
          }
          return _context10.a(2);
        case 7:
          queue = _utils__WEBPACK_IMPORTED_MODULE_4__["default"].offlinePos.getOfflineSales() || [];
          i = 0;
        case 8:
          if (!(i < queue.length)) {
            _context10.n = 14;
            break;
          }
          sale = queue[i]; // Skip already-synced, failed or in-progress records
          if (!(!sale || !sale.payload || sale.status === 'synced' || sale.status === 'syncing' || sale.status === 'failed')) {
            _context10.n = 9;
            break;
          }
          return _context10.a(3, 13);
        case 9:
          _context10.p = 9;
          // Mark this sale as "syncing" in the shared offline queue so that
          // other sync workers (global/offline, other tabs) do not submit it
          // concurrently.
          try {
            if (_utils__WEBPACK_IMPORTED_MODULE_4__["default"] && _utils__WEBPACK_IMPORTED_MODULE_4__["default"].offlinePos && _utils__WEBPACK_IMPORTED_MODULE_4__["default"].offlinePos.markSaleAsSyncing) {
              _utils__WEBPACK_IMPORTED_MODULE_4__["default"].offlinePos.markSaleAsSyncing(sale.id);
            }
          } catch (e) {}

          // Normalize payload to ensure required keys such as sale_unit_id exist
          basePayload = sale.payload || {};
          normalizedDetails = Array.isArray(basePayload.details) ? basePayload.details.map(function (d) {
            return _objectSpread(_objectSpread({}, d), {}, {
              sale_unit_id: d && Object.prototype.hasOwnProperty.call(d, 'sale_unit_id') ? d.sale_unit_id : d && d.sale_unit_id || null
            });
          }) : basePayload.details;
          payload = _objectSpread(_objectSpread({}, basePayload), {}, {
            // Include offline_id so backend can optionally enforce idempotency
            offline_id: sale.id,
            shipping: _this42.normalizeShippingAmount(basePayload.shipping),
            details: normalizedDetails
          }); // Use absolute API path to avoid hitting SPA routes (e.g. /app/pos/create_pos)
          _context10.n = 10;
          return axios.post('/pos/create_pos', payload);
        case 10:
          response = _context10.v;
          if (response && response.data && response.data.success === true) {
            _utils__WEBPACK_IMPORTED_MODULE_4__["default"].offlinePos.markSaleAsSynced(sale.id, response.data.id);
            syncedCount++;
            // On success, clear shadow stock deductions for this sale so we don't double-subtract
            try {
              if (_utils__WEBPACK_IMPORTED_MODULE_4__["default"] && _utils__WEBPACK_IMPORTED_MODULE_4__["default"].shadowStock && _utils__WEBPACK_IMPORTED_MODULE_4__["default"].shadowStock.revertDeductions) {
                _utils__WEBPACK_IMPORTED_MODULE_4__["default"].shadowStock.revertDeductions(sale.id);
              }
            } catch (e) {}
          } else {
            _utils__WEBPACK_IMPORTED_MODULE_4__["default"].offlinePos.markSaleAsFailed(sale.id, 'Invalid response from server', response && response.status);
            // Restore shadow stock for this failed sale
            try {
              if (_utils__WEBPACK_IMPORTED_MODULE_4__["default"] && _utils__WEBPACK_IMPORTED_MODULE_4__["default"].shadowStock && _utils__WEBPACK_IMPORTED_MODULE_4__["default"].shadowStock.revertDeductions) {
                _utils__WEBPACK_IMPORTED_MODULE_4__["default"].shadowStock.revertDeductions(sale.id);
              }
            } catch (e) {}
          }
          _context10.n = 13;
          break;
        case 11:
          _context10.p = 11;
          _t1 = _context10.v;
          isNetworkError = !_t1.response || _t1.message === 'Network Error';
          if (typeof window !== 'undefined') {
            try {
              if (window.navigator && window.navigator.onLine === false) {
                _this42.isOnline = false;
              }
            } catch (e) {}
          }
          if (!(isNetworkError && !_this42.isOnline)) {
            _context10.n = 12;
            break;
          }
          return _context10.a(3, 14);
        case 12:
          msg = _t1.response && _t1.response.data && (_t1.response.data.message || _t1.response.data.error) || _t1.message || 'Unknown error';
          _utils__WEBPACK_IMPORTED_MODULE_4__["default"].offlinePos.markSaleAsFailed(sale.id, msg, _t1.response && _t1.response.status);
          _this42.offlineLastSyncError = msg;
          // For non-network errors, rollback local shadow stock to keep UI consistent
          if (!isNetworkError) {
            try {
              if (_utils__WEBPACK_IMPORTED_MODULE_4__["default"] && _utils__WEBPACK_IMPORTED_MODULE_4__["default"].shadowStock && _utils__WEBPACK_IMPORTED_MODULE_4__["default"].shadowStock.revertDeductions) {
                _utils__WEBPACK_IMPORTED_MODULE_4__["default"].shadowStock.revertDeductions(sale.id);
              }
            } catch (e) {}
          }
        case 13:
          i++;
          _context10.n = 8;
          break;
        case 14:
          _context10.p = 14;
          _this42.offlineSyncInProgress = false;
          _this42.refreshOfflineSalesCount();
          // Notify UI that POS offline sync has finished
          try {
            if (typeof window !== 'undefined' && window.Fire && window.Fire.$emit) {
              window.Fire.$emit('offline-sync:end', {
                syncedCount: syncedCount,
                lastError: _this42.offlineLastSyncError
              });
            }
          } catch (e) {}
          // Show same feedback as auto-sync handler
          _this42.handleAutoOfflineSyncResult({
            syncedCount: syncedCount,
            lastError: _this42.offlineLastSyncError
          });
          return _context10.f(14);
        case 15:
          return _context10.a(2);
      }
    }, _callee10, null, [[9, 11], [6,, 14, 15], [2, 4]]);
  }))();
}), "syncOfflineSales", function syncOfflineSales() {
  if (!this.isOnline) {
    var msg = this.$t ? this.$t('pos.Offline_Mode') : 'You are currently offline';
    this.makeToast && this.makeToast('warning', msg, this.$t ? this.$t('Warning') : 'Warning');
    return;
  }
  this.trySyncOfflineSales();
}), "verifyAllItemsInStock", function verifyAllItemsInStock() {
  for (var i = 0; i < this.details.length; i++) {
    var d = this.details[i];
    if (d && d.product_type !== 'is_service') {
      var available = Number(d.current || 0);
      var qty = Number(d.quantity || 0);
      if (isNaN(available) || isNaN(qty) || qty > available) {
        return {
          ok: false,
          productName: d.name || d.code || 'item'
        };
      }
    }
  }
  return {
    ok: true,
    productName: null
  };
}), "openModernPaymentModal", function openModernPaymentModal() {
  // Guard: client and warehouse must be selected
  if (!this.selectedClientId) {
    var msg = this.$t ? this.$t('Select_Customer') : 'Please select a customer before paying.';
    this.makeToast && this.makeToast('warning', msg, this.$t ? this.$t('Warning') : 'Warning');
    return;
  }
  if (!this.sale || !this.sale.warehouse_id) {
    var _msg = this.$t ? this.$t('SelectWarehouse') : 'Please select a warehouse before paying.';
    this.makeToast && this.makeToast('warning', _msg, this.$t ? this.$t('Warning') : 'Warning');
    return;
  }
  // Guard: stock validation before opening payment modal
  var stockCheck = this.verifyAllItemsInStock();
  if (!stockCheck.ok) {
    var _msg2 = this.$t ? "".concat(this.$t('InsufficientStock'), " ").concat(stockCheck.productName) : "Insufficient stock for ".concat(stockCheck.productName);
    this.makeToast('danger', _msg2, this.$t ? this.$t('Failed') : 'Failed');
    return;
  }
  // Guard: total payable must not be negative (zero allowed)
  if (Number(this.GrandTotal) < 0) {
    var _msg3 = this.$t ? "".concat(this.$t('pos.Total_Payable'), " cannot be negative") : 'Total Payable cannot be negative';
    this.makeToast('warning', _msg3, this.$t ? this.$t('Warning') : 'Warning');
    return;
  }
  // Open modern payment modal with current sale data
  this.$refs.modernPaymentModal.openModal({
    amountDue: this.GrandTotal,
    reference: this.sale.Ref || "POS-" + new Date().getTime(),
    notes: this.selectedClientId ? "Payment for Customer #".concat(this.selectedClientId) : 'POS Payment'
  });
})))), "created", function created() {
  var _this43 = this;
  // Clear cached POS data on page reload when online to avoid stale/outdated data
  // Fresh data will be fetched and cache rebuilt via GetElementsPos()
  // Only clear when online - when offline, preserve cache as it's needed for offline functionality
  try {
    // Check if we're online before clearing cache
    var isOnline = typeof window !== 'undefined' && window.navigator && window.navigator.onLine !== false;
    if (isOnline && _utils__WEBPACK_IMPORTED_MODULE_4__["default"] && _utils__WEBPACK_IMPORTED_MODULE_4__["default"].offlinePos && _utils__WEBPACK_IMPORTED_MODULE_4__["default"].offlinePos.clearCache) {
      _utils__WEBPACK_IMPORTED_MODULE_4__["default"].offlinePos.clearCache();
    }
  } catch (e) {
    // Ignore errors during cache clearing
  }
  this.initOfflineStatus();
  // Ensure offline sales badge is accurate immediately after POS refresh,
  // even before any user interaction.
  try {
    this.refreshOfflineSalesCount();
  } catch (e) {}
  this.GetElementsPos(); // This will fetch fresh data and rebuild the cache when online
  this.addPaymentLine();
  // Initialize warehouse options and sync selection once data is loaded
  this.$watch('warehouses', function (ws) {
    _this43.warehouseOptions = (ws || []).map(function (w) {
      return {
        value: w.id,
        text: w.name
      };
    });
    if (!_this43.registerForm.warehouse_id && _this43.sale && _this43.sale.warehouse_id) {
      _this43.registerForm.warehouse_id = _this43.sale.warehouse_id;
    }
    // Always check current register after initial data load
    _this43.refreshCurrentRegister();
  });
  // refresh register when warehouse changes
  this.$watch(function () {
    return _this43.sale.warehouse_id;
  }, function () {
    _this43.registerForm.warehouse_id = _this43.sale.warehouse_id || '';
    _this43.refreshCurrentRegister();
  });
  // Reset POS after successful payment from ModernPaymentModal
  if (this.$refs && this.$refs.modernPaymentModal) {
    try {
      this.$refs.modernPaymentModal.$on('payment-success', function () {
        _this43.Reset_Pos();
      });
    } catch (e) {}
  }
  Fire.$on("pay_now", function () {
    setTimeout(function () {
      // Guard: prevent opening legacy payment modal if total is negative
      if (Number(_this43.GrandTotal) < 0) {
        var msg = _this43.$t ? "".concat(_this43.$t('pos.Total_Payable'), " cannot be negative") : 'Total Payable cannot be negative';
        _this43.makeToast('warning', msg, _this43.$t ? _this43.$t('Warning') : 'Warning');
        // Complete the animation of the progress bar.
        nprogress__WEBPACK_IMPORTED_MODULE_0___default().done();
        return;
      }
      _this43.paymentLines = [{
        amount: parseFloat(_this43.GrandTotal.toFixed(2)),
        payment_method_id: 2
      }];
      _this43.globalPaymentNote = '';
      _this43.selectedAccount = null;
      _this43.$bvModal.show("Add_Payment");
      // Complete the animation of theprogress bar.
      nprogress__WEBPACK_IMPORTED_MODULE_0___default().done();
    }, 500);
  });
  Fire.$on("event_delete_draft_sale", function () {
    // Calculate if current page would be empty after deletion
    var itemsOnCurrentPage = _this43.draft_sales.length;
    var pageToLoad = _this43.draft_sales_page;

    // If we're deleting the last item on a page that's not page 1, go to previous page
    if (itemsOnCurrentPage === 1 && _this43.draft_sales_page > 1) {
      pageToLoad = _this43.draft_sales_page - 1;
      _this43.draft_sales_page = pageToLoad;
    }
    _this43.get_Draft_Sales(pageToLoad);
    // Complete the animation of theprogress bar.
    setTimeout(function () {
      return nprogress__WEBPACK_IMPORTED_MODULE_0___default().done();
    }, 500);
  });

  // Listen for global auto-sync result so we can display the same
  // feedback as when the user clicks the offline sync button.
  try {
    if (typeof window !== 'undefined' && window.Fire && window.Fire.$on) {
      window.Fire.$on('offline-sync:auto-result', this.handleAutoOfflineSyncResult);
    }
  } catch (e) {}
}), "beforeDestroy", function beforeDestroy() {
  try {
    if (typeof window !== 'undefined') {
      window.removeEventListener('online', this.handleOnline);
      window.removeEventListener('offline', this.handleOffline);
    }
  } catch (e) {}
  // Clean up global auto-sync listener
  try {
    if (typeof window !== 'undefined' && window.Fire && window.Fire.$off) {
      window.Fire.$off('offline-sync:auto-result', this.handleAutoOfflineSyncResult);
    }
  } catch (e) {}
}));

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/components/CustomFieldsForm.vue?vue&type=template&id=6b5d7f34&scoped=true":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/components/CustomFieldsForm.vue?vue&type=template&id=6b5d7f34&scoped=true ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/components/ModernPaymentModal.vue?vue&type=template&id=866dec86":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/components/ModernPaymentModal.vue?vue&type=template&id=866dec86 ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render),
/* harmony export */   staticRenderFns: () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "modern-payment-modal"
  }, [_c("b-modal", {
    ref: "paymentModal",
    staticClass: "payment-modal-wrapper premium-payment-modal-large",
    attrs: {
      "hide-footer": "",
      "hide-header": "",
      size: "xl",
      id: "modern_payment_modal",
      centered: "",
      "body-class": "modal-body-custom",
      "modal-class": "premium-modal"
    },
    on: {
      hidden: _vm.resetForm
    }
  }, [_c("div", {
    staticClass: "payment-container"
  }, [_c("div", {
    staticClass: "payment-header"
  }, [_c("div", {
    staticClass: "header-left"
  }, [_c("div", {
    staticClass: "icon-wrapper"
  }, [_c("i", {
    staticClass: "i-Money-Bag"
  })]), _vm._v(" "), _c("div", {
    staticClass: "header-text"
  }, [_c("h2", {
    staticClass: "modal-title"
  }, [_vm._v(_vm._s(_vm.isEditMode ? _vm.$t("Edit_Payment") : _vm.$t("Payment_Checkout")))])])]), _vm._v(" "), _c("button", {
    staticClass: "close-button",
    attrs: {
      type: "button"
    },
    on: {
      click: function click($event) {
        return _vm.$refs.paymentModal.hide();
      }
    }
  }, [_c("svg", {
    attrs: {
      width: "20",
      height: "20",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      "stroke-width": "2.5"
    }
  }, [_c("line", {
    attrs: {
      x1: "18",
      y1: "6",
      x2: "6",
      y2: "18"
    }
  }), _vm._v(" "), _c("line", {
    attrs: {
      x1: "6",
      y1: "6",
      x2: "18",
      y2: "18"
    }
  })])])]), _vm._v(" "), _c("div", {
    staticClass: "payment-content"
  }, [_c("div", {
    staticClass: "transaction-info"
  }, [_c("div", {
    staticClass: "amount-card"
  }, [_c("div", {
    staticClass: "amount-card-header"
  }, [_c("svg", {
    attrs: {
      width: "24",
      height: "24",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      "stroke-width": "2"
    }
  }, [_c("circle", {
    attrs: {
      cx: "12",
      cy: "12",
      r: "10"
    }
  }), _vm._v(" "), _c("path", {
    attrs: {
      d: "M12 6v6l4 2"
    }
  })]), _vm._v(" "), _c("span", [_vm._v(_vm._s(_vm.$t("Transaction_Summary")))])]), _vm._v(" "), _c("div", {
    staticClass: "amount-display"
  }, [_c("span", {
    staticClass: "currency-label"
  }, [_vm._v(_vm._s(_vm.$t("Total_Amount")))]), _vm._v(" "), _c("span", {
    staticClass: "amount-large"
  }, [_vm._v(_vm._s(_vm.formatCurrency(_vm.paymentForm.amountDue)))])])]), _vm._v(" "), _c("div", {
    staticClass: "payment-status-card"
  }, [_c("h3", {
    staticClass: "card-title"
  }, [_vm._v(_vm._s(_vm.$t("Payment_Breakdown")))]), _vm._v(" "), _c("div", {
    staticClass: "status-grid"
  }, [_c("div", {
    staticClass: "status-box"
  }, [_c("div", {
    staticClass: "status-icon paying"
  }, [_c("svg", {
    attrs: {
      width: "18",
      height: "18",
      viewBox: "0 0 24 24",
      fill: "currentColor"
    }
  }, [_c("path", {
    attrs: {
      d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"
    }
  })])]), _vm._v(" "), _c("div", {
    staticClass: "status-details"
  }, [_c("span", {
    staticClass: "status-name"
  }, [_vm._v(_vm._s(_vm.$t("Paying")))]), _vm._v(" "), _c("span", {
    staticClass: "status-amount"
  }, [_vm._v(_vm._s(_vm.formatCurrency(_vm.totalPaid)))])])]), _vm._v(" "), _c("div", {
    staticClass: "status-box"
  }, [_c("div", {
    staticClass: "status-icon balance"
  }, [_c("svg", {
    attrs: {
      width: "18",
      height: "18",
      viewBox: "0 0 24 24",
      fill: "currentColor"
    }
  }, [_c("path", {
    attrs: {
      d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"
    }
  })])]), _vm._v(" "), _c("div", {
    staticClass: "status-details"
  }, [_c("span", {
    staticClass: "status-name"
  }, [_vm._v(_vm._s(_vm.$t("Balance")))]), _vm._v(" "), _c("span", {
    staticClass: "status-amount balance-text"
  }, [_vm._v(_vm._s(_vm.formatCurrency(_vm.balance)))])])]), _vm._v(" "), _c("div", {
    staticClass: "status-box"
  }, [_c("div", {
    staticClass: "status-icon change"
  }, [_c("svg", {
    attrs: {
      width: "18",
      height: "18",
      viewBox: "0 0 24 24",
      fill: "currentColor"
    }
  }, [_c("path", {
    attrs: {
      d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"
    }
  })])]), _vm._v(" "), _c("div", {
    staticClass: "status-details"
  }, [_c("span", {
    staticClass: "status-name"
  }, [_vm._v(_vm._s(_vm.$t("Change")))]), _vm._v(" "), _c("span", {
    staticClass: "status-amount change-text"
  }, [_vm._v(_vm._s(_vm.formatCurrency(_vm.changeReturn)))])])])])])]), _vm._v(" "), _c("div", {
    staticClass: "payment-form-area"
  }, [_c("form", {
    staticClass: "enhanced-form",
    on: {
      submit: function submit($event) {
        $event.preventDefault();
        return _vm.submitPayment.apply(null, arguments);
      }
    }
  }, [_c("div", {
    staticClass: "form-group"
  }, [_c("div", {
    staticClass: "payment-lines-layout"
  }, [_c("div", {
    staticClass: "payment-lines-list"
  }, [_vm._l(_vm.paymentLines, function (p, idx) {
    return _c("div", {
      key: idx,
      staticClass: "payment-line-card"
    }, [_c("div", {
      staticClass: "payment-line-header"
    }, [_c("div", {
      staticClass: "line-badge"
    }, [_vm._v(_vm._s(idx + 1))]), _vm._v(" "), _c("span", {
      staticClass: "line-title"
    }, [_vm._v(_vm._s(_vm.$t("Payment")) + " #" + _vm._s(idx + 1))]), _vm._v(" "), _vm.paymentLines.length > 1 && idx > 0 ? _c("button", {
      staticClass: "line-remove-btn",
      attrs: {
        type: "button",
        "aria-label": _vm.$t("Remove_Payment_Line")
      },
      on: {
        click: function click($event) {
          return _vm.removePaymentLine(idx);
        }
      }
    }, [_c("svg", {
      attrs: {
        width: "16",
        height: "16",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2"
      }
    }, [_c("line", {
      attrs: {
        x1: "18",
        y1: "6",
        x2: "6",
        y2: "18"
      }
    }), _vm._v(" "), _c("line", {
      attrs: {
        x1: "6",
        y1: "6",
        x2: "18",
        y2: "18"
      }
    })])]) : _vm._e()]), _vm._v(" "), _c("div", {
      staticClass: "payment-line-body"
    }, [_c("div", {
      staticClass: "input-field"
    }, [_c("label", {
      staticClass: "field-label"
    }, [_vm._v(_vm._s(_vm.$t("Amount")))]), _vm._v(" "), _c("div", {
      staticClass: "input-with-icon"
    }, [_c("input", {
      directives: [{
        name: "model",
        rawName: "v-model.number",
        value: p.amount,
        expression: "p.amount",
        modifiers: {
          number: true
        }
      }],
      staticClass: "form-input",
      attrs: {
        type: "text",
        step: "0.01",
        min: "0",
        inputmode: "decimal",
        pattern: "\\\\d*(\\\\.\\\\d*)?",
        disabled: Number(_vm.paymentForm.amountDue) === 0,
        placeholder: "0.00"
      },
      domProps: {
        value: p.amount
      },
      on: {
        input: [function ($event) {
          if ($event.target.composing) return;
          _vm.$set(p, "amount", _vm._n($event.target.value));
        }, function ($event) {
          return _vm.onAmountInput(idx);
        }],
        blur: function blur($event) {
          return _vm.$forceUpdate();
        }
      }
    })])]), _vm._v(" "), _c("div", {
      staticClass: "input-field"
    }, [_c("label", {
      staticClass: "field-label"
    }, [_vm._v(_vm._s(_vm.$t("Account")))]), _vm._v(" "), _c("select", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: p.accountId,
        expression: "p.accountId"
      }],
      staticClass: "form-select",
      on: {
        change: function change($event) {
          var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
            return o.selected;
          }).map(function (o) {
            var val = "_value" in o ? o._value : o.value;
            return val;
          });
          _vm.$set(p, "accountId", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
        }
      }
    }, [_c("option", {
      attrs: {
        value: ""
      }
    }, [_vm._v(_vm._s(_vm.$t("Select_Account")))]), _vm._v(" "), _vm._l(_vm.resolvedAccounts, function (a) {
      return _c("option", {
        key: a.id,
        domProps: {
          value: a.id
        }
      }, [_vm._v(_vm._s(a.account_name || a.name))]);
    })], 2)]), _vm._v(" "), _c("div", {
      staticClass: "form-group"
    }, [_c("div", {
      staticClass: "payment-methods"
    }, _vm._l(_vm.resolvedPaymentMethods, function (m) {
      return _c("div", {
        key: m.id,
        staticClass: "method-card",
        "class": {
          selected: String(p.paymentMethodId) === String(m.id)
        },
        on: {
          click: function click($event) {
            return _vm.changePaymentMethod(p, m);
          }
        }
      }, [_c("div", {
        staticClass: "method-content"
      }, [_c("div", {
        staticClass: "method-icon-wrapper"
      }, [_c("i", {
        "class": m.icon
      })]), _vm._v(" "), _c("span", {
        staticClass: "method-label"
      }, [_vm._v(_vm._s(m.name))])]), _vm._v(" "), String(p.paymentMethodId) === String(m.id) ? _c("div", {
        staticClass: "selected-indicator"
      }, [_c("svg", {
        attrs: {
          width: "16",
          height: "16",
          viewBox: "0 0 24 24",
          fill: "currentColor"
        }
      }, [_c("path", {
        attrs: {
          d: "M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"
        }
      })])]) : _vm._e()]);
    }), 0)]), _vm._v(" "), _vm.isLineCreditCard(p) && _vm.stripeKey ? _c("div", {
      staticClass: "form-group"
    }, [_c("div", {
      staticClass: "credit-card-section"
    }, [_c("div", {
      staticClass: "cc-header"
    }, [_c("span", {
      staticClass: "field-label"
    }, [_vm._v(_vm._s(_vm.$t("Credit_Card")))])]), _vm._v(" "), _c("div", {
      staticClass: "new-card-form"
    }, [_c("div", {
      staticClass: "stripe-card-element",
      attrs: {
        id: "card-element-" + idx
      }
    }), _vm._v(" "), _c("small", {
      staticClass: "text-muted"
    }, [_vm._v(_vm._s(_vm.$t("Card_Info_Secure_Stripe")))])])])]) : _vm._e()])]);
  }), _vm._v(" "), Number(_vm.paymentForm.amountDue) > 0 ? _c("button", {
    staticClass: "action-btn cancel-btn add-line-btn",
    attrs: {
      type: "button"
    },
    on: {
      click: _vm.addPaymentLine
    }
  }, [_c("i", {
    staticClass: "i-Plus"
  }), _vm._v(" " + _vm._s(_vm.$t("Add_Payment_Method")) + "\n                  ")]) : _vm._e()], 2), _vm._v(" "), _c("div", {
    staticClass: "quick-amount-rail"
  }, [_c("div", {
    staticClass: "quick-amount-vertical"
  }, _vm._l(_vm.quickAmountOptions, function (amt) {
    return _c("button", {
      key: amt,
      staticClass: "quick-btn",
      attrs: {
        type: "button"
      },
      on: {
        click: function click($event) {
          return _vm.setQuickAmount(amt);
        }
      }
    }, [_vm._v("\n                      " + _vm._s(_vm.formatCurrency(amt)) + "\n                    ")]);
  }), 0)])])]), _vm._v(" "), _c("div", {
    staticClass: "form-group"
  }, [_c("div", {
    staticClass: "input-field"
  }, [_c("label", {
    staticClass: "field-label"
  }, [_vm._v(_vm._s(_vm.$t("Payment_Date")) + " *")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.paymentForm.date,
      expression: "paymentForm.date"
    }],
    staticClass: "form-select",
    attrs: {
      type: "date"
    },
    domProps: {
      value: _vm.paymentForm.date
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.paymentForm, "date", $event.target.value);
      }
    }
  })])]), _vm._v(" "), _c("div", {
    staticClass: "form-group"
  }, [_c("div", {
    staticClass: "dual-input"
  }, [_c("div", {
    staticClass: "input-field"
  }, [_c("label", {
    staticClass: "field-label"
  }, [_vm._v(_vm._s(_vm.$t("Payment_note")))]), _vm._v(" "), _c("textarea", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.paymentNote,
      expression: "paymentNote"
    }],
    staticClass: "form-textarea",
    attrs: {
      rows: "3",
      placeholder: _vm.$t("Add_Payment_Note")
    },
    domProps: {
      value: _vm.paymentNote
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.paymentNote = $event.target.value;
      }
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "input-field"
  }, [_c("label", {
    staticClass: "field-label"
  }, [_vm._v(_vm._s(_vm.$t("sale_note")))]), _vm._v(" "), _c("textarea", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.saleNote,
      expression: "saleNote"
    }],
    staticClass: "form-textarea",
    attrs: {
      rows: "3",
      placeholder: _vm.$t("Add_Sale_Note")
    },
    domProps: {
      value: _vm.saleNote
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.saleNote = $event.target.value;
      }
    }
  })])])]), _vm._v(" "), _vm.isOnline ? _c("div", {
    staticClass: "form-group"
  }, [_c("div", {
    staticClass: "checkboxes-group"
  }, [_c("label", {
    staticClass: "checkbox-item"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.sendEmail,
      expression: "sendEmail"
    }],
    attrs: {
      type: "checkbox"
    },
    domProps: {
      checked: Array.isArray(_vm.sendEmail) ? _vm._i(_vm.sendEmail, null) > -1 : _vm.sendEmail
    },
    on: {
      change: function change($event) {
        var $$a = _vm.sendEmail,
          $$el = $event.target,
          $$c = $$el.checked ? true : false;
        if (Array.isArray($$a)) {
          var $$v = null,
            $$i = _vm._i($$a, $$v);
          if ($$el.checked) {
            $$i < 0 && (_vm.sendEmail = $$a.concat([$$v]));
          } else {
            $$i > -1 && (_vm.sendEmail = $$a.slice(0, $$i).concat($$a.slice($$i + 1)));
          }
        } else {
          _vm.sendEmail = $$c;
        }
      }
    }
  }), _vm._v("\n                  " + _vm._s(_vm.$t("Send_Email_Receipt")) + "\n                ")]), _vm._v(" "), _c("label", {
    staticClass: "checkbox-item"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.sendSMS,
      expression: "sendSMS"
    }],
    attrs: {
      type: "checkbox"
    },
    domProps: {
      checked: Array.isArray(_vm.sendSMS) ? _vm._i(_vm.sendSMS, null) > -1 : _vm.sendSMS
    },
    on: {
      change: function change($event) {
        var $$a = _vm.sendSMS,
          $$el = $event.target,
          $$c = $$el.checked ? true : false;
        if (Array.isArray($$a)) {
          var $$v = null,
            $$i = _vm._i($$a, $$v);
          if ($$el.checked) {
            $$i < 0 && (_vm.sendSMS = $$a.concat([$$v]));
          } else {
            $$i > -1 && (_vm.sendSMS = $$a.slice(0, $$i).concat($$a.slice($$i + 1)));
          }
        } else {
          _vm.sendSMS = $$c;
        }
      }
    }
  }), _vm._v("\n                  " + _vm._s(_vm.$t("Send_SMS_Receipt")) + "\n                ")])])]) : _vm._e()])])])]), _vm._v(" "), _c("div", {
    staticClass: "payment-footer"
  }, [_c("button", {
    staticClass: "footer-btn footer-cancel",
    attrs: {
      type: "button"
    },
    on: {
      click: function click($event) {
        return _vm.$refs.paymentModal.hide();
      }
    }
  }, [_c("svg", {
    attrs: {
      width: "18",
      height: "18",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      "stroke-width": "2"
    }
  }, [_c("line", {
    attrs: {
      x1: "18",
      y1: "6",
      x2: "6",
      y2: "18"
    }
  }), _vm._v(" "), _c("line", {
    attrs: {
      x1: "6",
      y1: "6",
      x2: "18",
      y2: "18"
    }
  })]), _vm._v("\n        " + _vm._s(_vm.$t("Cancel")) + "\n      ")]), _vm._v(" "), _c("button", {
    staticClass: "footer-btn footer-submit",
    attrs: {
      type: "button",
      disabled: _vm.isSubmitting
    },
    on: {
      click: _vm.submitPayment
    }
  }, [!_vm.isSubmitting ? _c("span", {
    staticClass: "btn-content"
  }, [_c("svg", {
    attrs: {
      width: "18",
      height: "18",
      viewBox: "0 0 24 24",
      fill: "currentColor"
    }
  }, [_c("path", {
    attrs: {
      d: "M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"
    }
  })]), _vm._v("\n          " + _vm._s(_vm.isEditMode ? _vm.$t("Update_Payment") : _vm.$t("Complete_Payment")) + "\n        ")]) : _c("span", {
    staticClass: "btn-content"
  }, [_c("span", {
    staticClass: "loading-spinner"
  }), _vm._v("\n          " + _vm._s(_vm.$t("Processing")) + "...\n        ")])])])])], 1);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/pos.vue?vue&type=template&id=4cc49487&scoped=true":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/pos.vue?vue&type=template&id=4cc49487&scoped=true ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render),
/* harmony export */   staticRenderFns: () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "pos-codecanyon"
  }, [_vm.productsReady ? _c("nav", {
    staticClass: "pos-header"
  }, [_c("div", {
    staticClass: "header-left"
  }, [_c("div", {
    staticClass: "brand"
  }, [_c("div", {
    staticClass: "brand-icon"
  }, [_vm.currentUser && _vm.currentUser.logo ? _c("img", {
    staticStyle: {
      width: "100%",
      height: "100%",
      "object-fit": "cover",
      "border-radius": "12px"
    },
    attrs: {
      src: "/images/" + _vm.currentUser.logo,
      alt: "logo"
    }
  }) : _c("span", [_vm._v(_vm._s(_vm.currentUser && _vm.currentUser.company ? _vm.currentUser.company[0] || "S" : "S"))])])])]), _vm._v(" "), _c("div", {
    staticClass: "header-right"
  }, [_vm.registerEnabled && _vm.isOnline ? _c("div", {
    staticClass: "register-status"
  }, [_c("button", {
    staticClass: "register-toggle-icon",
    attrs: {
      title: _vm.isOnline ? _vm.currentRegister && _vm.currentRegister.status === "open" ? _vm.$t("Close Register") : _vm.$t("Open Register") : _vm.$t("pos.Offline_Mode")
    },
    on: {
      click: function click($event) {
        _vm.currentRegister && _vm.currentRegister.status === "open" ? _vm.$bvModal.show("CloseRegisterModal") : _vm.$bvModal.show("OpenRegisterModal");
      }
    }
  }, [_vm.currentRegister && _vm.currentRegister.status === "open" ? _c("span", [_vm._v("🟢")]) : _c("span", [_vm._v("🔴")])]), _vm._v(" "), _vm.isOnline ? _c("b-button", {
    staticClass: "register-toggle-btn mr-1",
    attrs: {
      size: "sm"
    },
    on: {
      click: function click($event) {
        _vm.currentRegister && _vm.currentRegister.status === "open" ? _vm.$bvModal.show("CloseRegisterModal") : _vm.$bvModal.show("OpenRegisterModal");
      }
    }
  }, [_vm.currentRegister && _vm.currentRegister.status === "open" ? _c("span", [_vm._v(_vm._s(_vm.$t("Close Register")))]) : _c("span", [_vm._v(_vm._s(_vm.$t("Open Register")))])]) : _vm._e(), _vm._v(" "), _vm.isQuickAddCustomerEnabled && _vm.isOnline ? _c("button", {
    staticClass: "action-btn-icon btn-new-customer quick-add-customer--in-register",
    attrs: {
      title: _vm.$t("Quick_Add_Customer")
    },
    on: {
      click: _vm.Quick_Add_Client
    }
  }, [_c("i", {
    staticClass: "i-Add-User"
  })]) : _vm._e()], 1) : _vm._e(), _vm._v(" "), _c("v-select", {
    staticClass: "warehouse-select",
    attrs: {
      reduce: function reduce(label) {
        return label.value;
      },
      placeholder: _vm.$t("Select_Warehouse"),
      options: _vm.warehouses.map(function (wh) {
        return {
          label: wh.name,
          value: wh.id
        };
      }),
      clearable: true
    },
    on: {
      input: function input($event) {
        return _vm.Selected_Warehouse(_vm.sale.warehouse_id);
      }
    },
    model: {
      value: _vm.sale.warehouse_id,
      callback: function callback($$v) {
        _vm.$set(_vm.sale, "warehouse_id", $$v);
      },
      expression: "sale.warehouse_id"
    }
  }), _vm._v(" "), (_vm.pos_settings.show_categories || _vm.pos_settings.show_brands) && _vm.isOnline ? [_vm.pos_settings.show_categories ? _c("v-select", {
    staticClass: "category-select-header",
    attrs: {
      value: _vm.category_id || null,
      placeholder: _vm.$t("pos.All_Categories"),
      options: _vm.categories.map(function (c) {
        return {
          label: c.name,
          value: c.id
        };
      }),
      reduce: function reduce(o) {
        return o.value;
      },
      clearable: true
    },
    on: {
      input: function input(val) {
        _vm.category_id = val != null ? val : "";
        _vm.getProducts();
      }
    }
  }) : _vm._e(), _vm._v(" "), _vm.pos_settings.show_brands ? _c("v-select", {
    staticClass: "brand-select-header",
    attrs: {
      value: _vm.brand_id || null,
      placeholder: _vm.$t("pos.All_Brands"),
      options: _vm.brands.map(function (b) {
        return {
          label: b.name,
          value: b.id
        };
      }),
      reduce: function reduce(o) {
        return o.value;
      },
      clearable: true
    },
    on: {
      input: function input(val) {
        _vm.brand_id = val != null ? val : "";
        _vm.getProducts();
      }
    }
  }) : _vm._e()] : _vm._e(), _vm._v(" "), _c("v-select", {
    "class": ["customer-select-header", {
      "has-selected-customer": _vm.selectedClientId
    }],
    attrs: {
      reduce: function reduce(label) {
        return label.value;
      },
      placeholder: _vm.$t("Select_Customer"),
      options: _vm.customerOptions,
      filterable: true,
      "filter-by": _vm.filterCustomerByPhone,
      clearable: true
    },
    on: {
      input: function input($event) {
        return _vm.onClientSelected(_vm.selectedClientId);
      }
    },
    model: {
      value: _vm.selectedClientId,
      callback: function callback($$v) {
        _vm.selectedClientId = $$v;
      },
      expression: "selectedClientId"
    }
  }), _vm._v(" "), _vm.isQuickAddCustomerEnabled && _vm.isOnline ? _c("button", {
    staticClass: "action-btn-icon btn-new-customer quick-add-customer--in-header",
    attrs: {
      title: _vm.$t("Quick_Add_Customer")
    },
    on: {
      click: _vm.Quick_Add_Client
    }
  }, [_c("i", {
    staticClass: "i-Add-User"
  })]) : _vm._e(), _vm._v(" "), _vm.isOnline ? _c("button", {
    staticClass: "action-btn-icon",
    attrs: {
      title: _vm.$t("Today_Sales")
    },
    on: {
      click: _vm.get_today_sales
    }
  }, [_c("i", {
    staticClass: "i-Receipt"
  })]) : _vm._e(), _vm._v(" "), !_vm.isOnline || _vm.offlineSalesCount > 0 ? _c("button", {
    staticClass: "action-btn-icon btn-offline-status",
    "class": {
      "is-offline": !_vm.isOnline
    },
    attrs: {
      title: _vm.offlineStatusTitle
    },
    on: {
      click: _vm.syncOfflineSales
    }
  }, [_c("i", {
    staticClass: "i-Cloud"
  }), _vm._v(" "), _vm.offlineSalesCount > 0 ? _c("span", {
    staticClass: "offline-badge"
  }, [_vm._v("\n          " + _vm._s(_vm.offlineSalesCount) + "\n        ")]) : _vm._e()]) : _vm._e(), _vm._v(" "), _vm.currentUserPermissions && _vm.currentUserPermissions.includes("pos_settings") && _vm.isOnline ? _c("router-link", {
    staticClass: "action-btn-icon btn-pos-settings",
    attrs: {
      to: "/app/settings/pos_settings",
      title: _vm.$t("POS_Settings")
    }
  }, [_c("i", {
    staticClass: "i-Gear"
  })]) : _vm._e(), _vm._v(" "), _vm.show_language && _vm.isOnline ? _c("div", {
    staticClass: "dropdown action-btn-icon"
  }, [_c("b-dropdown", {
    attrs: {
      id: "lang-dd",
      right: "",
      offset: "8",
      boundary: "window",
      "toggle-class": "action-btn-icon dropdown-toggle-no-caret",
      "no-caret": ""
    },
    scopedSlots: _vm._u([{
      key: "button-content",
      fn: function fn() {
        return [_c("a", {
          staticClass: "action-btn-icon",
          attrs: {
            href: "#"
          },
          on: {
            click: function click($event) {
              $event.preventDefault();
            }
          }
        }, [_c("i", {
          staticClass: "i-Globe"
        })])];
      },
      proxy: true
    }], null, false, 1046040878)
  }, [_vm._v(" "), _c("div", {
    staticClass: "menu-icon-grid lang-menu"
  }, _vm._l(_vm.languages_available, function (lang) {
    return _c("button", {
      key: lang.locale,
      staticClass: "lang-item",
      on: {
        click: function click($event) {
          return _vm.SetLocal(lang.locale);
        }
      }
    }, [_c("img", {
      staticClass: "flag-icon",
      attrs: {
        src: "/flags/".concat(lang.flag),
        alt: lang.name
      }
    }), _vm._v(" "), _c("span", {
      staticClass: "title-lang"
    }, [_vm._v(_vm._s(lang.name))])]);
  }), 0)])], 1) : _vm._e(), _vm._v(" "), _c("div", {
    staticClass: "dropdown action-btn-icon display-screen-after-globe"
  }, [_c("b-dropdown", {
    attrs: {
      id: "display-screen-dd",
      right: "",
      offset: "8",
      boundary: "window",
      "toggle-class": "action-btn-icon dropdown-toggle-no-caret",
      "no-caret": ""
    },
    scopedSlots: _vm._u([{
      key: "button-content",
      fn: function fn() {
        return [_c("a", {
          staticClass: "action-btn-icon",
          attrs: {
            href: "#",
            title: _vm.$t("Display")
          },
          on: {
            click: function click($event) {
              $event.preventDefault();
            }
          }
        }, [_c("i", {
          staticClass: "i-Monitor"
        })])];
      },
      proxy: true
    }], null, false, 1526154588)
  }, [_vm._v(" "), _c("div", {
    staticClass: "dropdown-menu-left py-2",
    staticStyle: {
      "min-width": "140px"
    }
  }, _vm._l(_vm.customerDisplayScreenOptions, function (opt) {
    return _c("button", {
      key: opt.value,
      staticClass: "dropdown-item",
      "class": {
        active: _vm.customer_display_screen_id === opt.value
      },
      attrs: {
        type: "button"
      },
      on: {
        click: function click($event) {
          return _vm.onCustomerDisplayScreenChange(opt.value);
        }
      }
    }, [_vm._v("\n              " + _vm._s(opt.label) + "\n            ")]);
  }), 0)])], 1), _vm._v(" "), _c("button", {
    staticClass: "action-btn-icon btn-fullscreen",
    attrs: {
      title: _vm.$t("Fullscreen")
    },
    on: {
      click: _vm.handleFullScreen
    }
  }, [_c("i", {
    staticClass: "i-Full-Screen"
  })]), _vm._v(" "), _c("div", {
    staticClass: "dropdown"
  }, [_c("b-dropdown", {
    attrs: {
      id: "user-dd",
      right: "",
      "toggle-class": "dropdown-toggle-no-caret p-0 bg-transparent border-0",
      "no-caret": "",
      variant: "link"
    },
    scopedSlots: _vm._u([{
      key: "button-content",
      fn: function fn() {
        return [_vm.currentUser && _vm.currentUser.avatar ? _c("img", {
          staticClass: "user-profile",
          attrs: {
            src: "/images/avatar/" + _vm.currentUser.avatar,
            alt: "avatar"
          }
        }) : _c("div", {
          staticClass: "user-profile"
        }, [_vm._v(_vm._s(_vm.currentUser && _vm.currentUser.name ? _vm.currentUser.name.charAt(0).toUpperCase() : "U"))])];
      },
      proxy: true
    }], null, false, 274776675)
  }, [_vm._v(" "), _c("div", {
    staticClass: "dropdown-menu-left",
    attrs: {
      "aria-labelledby": "userDropdown"
    }
  }, [_c("div", {
    staticClass: "dropdown-header"
  }, [_c("i", {
    staticClass: "i-Lock-User mr-1"
  }), _vm._v(" "), _c("span", [_vm._v(_vm._s(_vm.currentUser && (_vm.currentUser.username || _vm.currentUser.name)))])]), _vm._v(" "), _c("router-link", {
    staticClass: "dropdown-item",
    attrs: {
      to: "/app/profile"
    }
  }, [_vm._v(_vm._s(_vm.$t("profil")))]), _vm._v(" "), _vm.currentUserPermissions && _vm.currentUserPermissions.includes("setting_system") ? _c("router-link", {
    staticClass: "dropdown-item",
    attrs: {
      to: "/app/settings/System_settings"
    }
  }, [_vm._v(_vm._s(_vm.$t("Settings")))]) : _vm._e(), _vm._v(" "), _c("a", {
    staticClass: "dropdown-item",
    attrs: {
      href: "#"
    },
    on: {
      click: function click($event) {
        $event.preventDefault();
        return _vm.logoutUser.apply(null, arguments);
      }
    }
  }, [_vm._v(_vm._s(_vm.$t("logout")))])], 1)])], 1)], 2)]) : _vm._e(), _vm._v(" "), _vm.productsReady ? _c("nav", {
    staticClass: "pos-header-mobile"
  }, [_c("div", {
    staticClass: "mobile-row mobile-top"
  }, [_c("div", {
    staticClass: "brand"
  }, [_c("div", {
    staticClass: "brand-icon"
  }, [_vm.currentUser && _vm.currentUser.logo ? _c("img", {
    staticStyle: {
      width: "100%",
      height: "100%",
      "object-fit": "cover",
      "border-radius": "12px"
    },
    attrs: {
      src: "/images/" + _vm.currentUser.logo,
      alt: "logo"
    }
  }) : _c("span", [_vm._v(_vm._s(_vm.currentUser && _vm.currentUser.company ? _vm.currentUser.company[0] || "S" : "S"))])])]), _vm._v(" "), _c("div", {
    staticClass: "top-icons"
  }, [_vm.isOnline ? _c("router-link", {
    staticClass: "action-btn-icon",
    attrs: {
      to: "/app/dashboard",
      title: _vm.$t("pos.Home")
    }
  }, [_c("i", {
    staticClass: "i-Home"
  })]) : _vm._e(), _vm._v(" "), _vm.isOnline ? _c("button", {
    staticClass: "action-btn-icon",
    attrs: {
      title: _vm.$t("Today_Sales")
    },
    on: {
      click: _vm.get_today_sales
    }
  }, [_c("i", {
    staticClass: "i-Receipt"
  })]) : _vm._e(), _vm._v(" "), !_vm.isOnline || _vm.offlineSalesCount > 0 ? _c("button", {
    staticClass: "action-btn-icon btn-offline-status",
    "class": {
      "is-offline": !_vm.isOnline
    },
    attrs: {
      title: _vm.offlineStatusTitle
    },
    on: {
      click: _vm.syncOfflineSales
    }
  }, [_c("i", {
    staticClass: "i-Cloud"
  }), _vm._v(" "), _vm.offlineSalesCount > 0 ? _c("span", {
    staticClass: "offline-badge"
  }, [_vm._v("\n            " + _vm._s(_vm.offlineSalesCount) + "\n          ")]) : _vm._e()]) : _vm._e(), _vm._v(" "), _vm.show_language && _vm.isOnline ? _c("div", {
    staticClass: "dropdown action-btn-icon"
  }, [_c("b-dropdown", {
    attrs: {
      id: "lang-dd-mobile",
      right: "",
      offset: "8",
      boundary: "window",
      "toggle-class": "action-btn-icon dropdown-toggle-no-caret",
      "no-caret": ""
    },
    scopedSlots: _vm._u([{
      key: "button-content",
      fn: function fn() {
        return [_c("a", {
          staticClass: "action-btn-icon",
          attrs: {
            href: "#"
          },
          on: {
            click: function click($event) {
              $event.preventDefault();
            }
          }
        }, [_c("i", {
          staticClass: "i-Globe"
        })])];
      },
      proxy: true
    }], null, false, 1046040878)
  }, [_vm._v(" "), _c("div", {
    staticClass: "menu-icon-grid lang-menu"
  }, _vm._l(_vm.languages_available, function (lang) {
    return _c("button", {
      key: lang.locale,
      staticClass: "lang-item",
      on: {
        click: function click($event) {
          return _vm.SetLocal(lang.locale);
        }
      }
    }, [_c("img", {
      staticClass: "flag-icon",
      attrs: {
        src: "/flags/".concat(lang.flag),
        alt: lang.name
      }
    }), _vm._v(" "), _c("span", {
      staticClass: "title-lang"
    }, [_vm._v(_vm._s(lang.name))])]);
  }), 0)])], 1) : _vm._e(), _vm._v(" "), _vm.currentUserPermissions && _vm.currentUserPermissions.includes("pos_settings") && _vm.isOnline ? _c("router-link", {
    staticClass: "action-btn-icon btn-pos-settings",
    attrs: {
      to: "/app/settings/pos_settings",
      title: _vm.$t("POS_Settings")
    }
  }, [_c("i", {
    staticClass: "i-Gear"
  })]) : _vm._e(), _vm._v(" "), _c("div", {
    staticClass: "dropdown"
  }, [_c("b-dropdown", {
    attrs: {
      id: "user-dd-mobile",
      right: "",
      "toggle-class": "dropdown-toggle-no-caret p-0 bg-transparent border-0",
      "no-caret": "",
      variant: "link"
    },
    scopedSlots: _vm._u([{
      key: "button-content",
      fn: function fn() {
        return [_vm.currentUser && _vm.currentUser.avatar ? _c("img", {
          staticClass: "user-profile",
          attrs: {
            src: "/images/avatar/" + _vm.currentUser.avatar,
            alt: "avatar"
          }
        }) : _c("div", {
          staticClass: "user-profile"
        }, [_vm._v(_vm._s(_vm.currentUser && _vm.currentUser.name ? _vm.currentUser.name.charAt(0).toUpperCase() : "U"))])];
      },
      proxy: true
    }], null, false, 274776675)
  }, [_vm._v(" "), _c("div", {
    staticClass: "dropdown-menu-left",
    attrs: {
      "aria-labelledby": "userDropdown"
    }
  }, [_c("div", {
    staticClass: "dropdown-header"
  }, [_c("i", {
    staticClass: "i-Lock-User mr-1"
  }), _vm._v(" "), _c("span", [_vm._v(_vm._s(_vm.currentUser && (_vm.currentUser.username || _vm.currentUser.name)))])]), _vm._v(" "), _c("router-link", {
    staticClass: "dropdown-item",
    attrs: {
      to: "/app/profile"
    }
  }, [_vm._v(_vm._s(_vm.$t("profil")))]), _vm._v(" "), _vm.currentUserPermissions && _vm.currentUserPermissions.includes("setting_system") ? _c("router-link", {
    staticClass: "dropdown-item",
    attrs: {
      to: "/app/settings/System_settings"
    }
  }, [_vm._v(_vm._s(_vm.$t("Settings")))]) : _vm._e(), _vm._v(" "), _c("a", {
    staticClass: "dropdown-item",
    attrs: {
      href: "#"
    },
    on: {
      click: function click($event) {
        $event.preventDefault();
        return _vm.logoutUser.apply(null, arguments);
      }
    }
  }, [_vm._v(_vm._s(_vm.$t("logout")))])], 1)])], 1)], 1)]), _vm._v(" "), _vm.registerEnabled && _vm.isOnline ? _c("div", {
    staticClass: "mobile-row"
  }, [_c("div", {
    staticClass: "register-status"
  }, [_c("button", {
    staticClass: "register-toggle-icon",
    attrs: {
      title: _vm.isOnline ? _vm.currentRegister && _vm.currentRegister.status === "open" ? _vm.$t("Close Register") : _vm.$t("Open Register") : _vm.$t("pos.Offline_Mode")
    },
    on: {
      click: function click($event) {
        _vm.currentRegister && _vm.currentRegister.status === "open" ? _vm.$bvModal.show("CloseRegisterModal") : _vm.$bvModal.show("OpenRegisterModal");
      }
    }
  }, [_vm.currentRegister && _vm.currentRegister.status === "open" ? _c("span", [_vm._v("🟢")]) : _c("span", [_vm._v("🔴")])]), _vm._v(" "), _vm.isOnline ? _c("b-button", {
    staticClass: "register-toggle-btn",
    attrs: {
      size: "sm"
    },
    on: {
      click: function click($event) {
        _vm.currentRegister && _vm.currentRegister.status === "open" ? _vm.$bvModal.show("CloseRegisterModal") : _vm.$bvModal.show("OpenRegisterModal");
      }
    }
  }, [_vm.currentRegister && _vm.currentRegister.status === "open" ? _c("span", [_vm._v(_vm._s(_vm.$t("Close Register")))]) : _c("span", [_vm._v(_vm._s(_vm.$t("Open Register")))])]) : _vm._e(), _vm._v(" "), _vm.isQuickAddCustomerEnabled && _vm.isOnline ? _c("button", {
    staticClass: "action-btn-icon btn-new-customer quick-add-customer--in-register",
    attrs: {
      title: _vm.$t("Quick_Add_Customer")
    },
    on: {
      click: _vm.Quick_Add_Client
    }
  }, [_c("i", {
    staticClass: "i-Add-User"
  })]) : _vm._e(), _vm._v(" "), _c("div", {
    staticClass: "dropdown action-btn-icon register-status-display"
  }, [_c("b-dropdown", {
    attrs: {
      id: "display-screen-dd-mobile",
      right: "",
      offset: "8",
      boundary: "window",
      "toggle-class": "action-btn-icon dropdown-toggle-no-caret",
      "no-caret": ""
    },
    scopedSlots: _vm._u([{
      key: "button-content",
      fn: function fn() {
        return [_c("a", {
          staticClass: "action-btn-icon",
          attrs: {
            href: "#",
            title: _vm.$t("Display")
          },
          on: {
            click: function click($event) {
              $event.preventDefault();
            }
          }
        }, [_c("i", {
          staticClass: "i-Monitor"
        })])];
      },
      proxy: true
    }], null, false, 1526154588)
  }, [_vm._v(" "), _c("div", {
    staticClass: "dropdown-menu-left py-2",
    staticStyle: {
      "min-width": "140px"
    }
  }, _vm._l(_vm.customerDisplayScreenOptions, function (opt) {
    return _c("button", {
      key: opt.value,
      staticClass: "dropdown-item",
      "class": {
        active: _vm.customer_display_screen_id === opt.value
      },
      attrs: {
        type: "button"
      },
      on: {
        click: function click($event) {
          return _vm.onCustomerDisplayScreenChange(opt.value);
        }
      }
    }, [_vm._v("\n                " + _vm._s(opt.label) + "\n              ")]);
  }), 0)])], 1)], 1)]) : _vm._e(), _vm._v(" "), _c("div", {
    staticClass: "mobile-row"
  }, [_c("v-select", {
    staticClass: "warehouse-select",
    attrs: {
      reduce: function reduce(label) {
        return label.value;
      },
      placeholder: _vm.$t("Select_Warehouse"),
      options: _vm.warehouses.map(function (wh) {
        return {
          label: wh.name,
          value: wh.id
        };
      }),
      clearable: true
    },
    on: {
      input: function input($event) {
        return _vm.Selected_Warehouse(_vm.sale.warehouse_id);
      }
    },
    model: {
      value: _vm.sale.warehouse_id,
      callback: function callback($$v) {
        _vm.$set(_vm.sale, "warehouse_id", $$v);
      },
      expression: "sale.warehouse_id"
    }
  })], 1), _vm._v(" "), _vm.pos_settings.show_categories && _vm.isOnline ? _c("div", {
    staticClass: "mobile-row mobile-row-category"
  }, [_c("v-select", {
    staticClass: "category-select-header",
    attrs: {
      value: _vm.category_id || null,
      placeholder: _vm.$t("pos.All_Categories"),
      options: _vm.categories.map(function (c) {
        return {
          label: c.name,
          value: c.id
        };
      }),
      reduce: function reduce(o) {
        return o.value;
      },
      clearable: true
    },
    on: {
      input: function input(val) {
        _vm.category_id = val != null ? val : "";
        _vm.getProducts();
      }
    }
  })], 1) : _vm._e(), _vm._v(" "), _vm.pos_settings.show_brands && _vm.isOnline ? _c("div", {
    staticClass: "mobile-row mobile-row-brand"
  }, [_c("v-select", {
    staticClass: "brand-select-header",
    attrs: {
      value: _vm.brand_id || null,
      placeholder: _vm.$t("pos.All_Brands"),
      options: _vm.brands.map(function (b) {
        return {
          label: b.name,
          value: b.id
        };
      }),
      reduce: function reduce(o) {
        return o.value;
      },
      clearable: true
    },
    on: {
      input: function input(val) {
        _vm.brand_id = val != null ? val : "";
        _vm.getProducts();
      }
    }
  })], 1) : _vm._e(), _vm._v(" "), _c("div", {
    staticClass: "mobile-row"
  }, [_c("v-select", {
    "class": ["customer-select-header", {
      "has-selected-customer": _vm.selectedClientId
    }],
    attrs: {
      reduce: function reduce(label) {
        return label.value;
      },
      placeholder: _vm.$t("Select_Customer"),
      options: _vm.customerOptions,
      filterable: true,
      "filter-by": _vm.filterCustomerByPhone,
      clearable: true
    },
    on: {
      input: function input($event) {
        return _vm.onClientSelected(_vm.selectedClientId);
      }
    },
    model: {
      value: _vm.selectedClientId,
      callback: function callback($$v) {
        _vm.selectedClientId = $$v;
      },
      expression: "selectedClientId"
    }
  })], 1)]) : _c("div", {
    staticClass: "pos-gate-loader"
  }, [_c("div", {
    staticClass: "text-center"
  }, [_c("div", {
    staticClass: "spinner lg spinner-primary"
  }), _vm._v(" "), _c("div", {
    staticClass: "mt-2"
  }, [_vm._v(_vm._s(_vm.$t("Loading")) + "...")])])]), _vm._v(" "), _vm.productsReady ? _c("div", {
    staticClass: "pos-container"
  }, [_c("div", {
    staticClass: "pos-column-left"
  }, [_c("div", {
    staticClass: "card card-unified-checkout"
  }, [_c("div", {
    staticClass: "card-header"
  }, [_c("h3", [_vm._v(_vm._s(_vm.$t("pos.Checkout")))]), _vm._v(" "), _vm.details.length > 0 ? _c("span", {
    staticClass: "badge-count"
  }, [_vm._v(_vm._s(_vm.details.length) + " " + _vm._s(_vm.$t("pos.items")))]) : _vm._e()]), _vm._v(" "), _c("div", {
    staticClass: "cart-section"
  }, [_vm.details.length === 0 ? _c("div", {
    staticClass: "empty-state"
  }, [_c("svg", {
    attrs: {
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor"
    }
  }, [_c("circle", {
    attrs: {
      cx: "9",
      cy: "21",
      r: "1"
    }
  }), _vm._v(" "), _c("circle", {
    attrs: {
      cx: "20",
      cy: "21",
      r: "1"
    }
  }), _vm._v(" "), _c("path", {
    attrs: {
      d: "M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"
    }
  })]), _vm._v(" "), _c("p", [_vm._v(_vm._s(_vm.$t("pos.No_items_added")))]), _vm._v(" "), _c("span", {
    staticClass: "empty-hint"
  }, [_vm._v(_vm._s(_vm.$t("pos.Select_products_from_right_panel")))])]) : _c("div", {
    staticClass: "cart-items-grid"
  }, _vm._l(_vm.details, function (item, index) {
    return _c("div", {
      key: index,
      staticClass: "cart-item-card"
    }, [_vm.currentUserPermissions && _vm.currentUserPermissions.includes("edit_product_sale") ? _c("div", {
      staticClass: "item-header"
    }, [_c("h4", {
      staticClass: "item-name"
    }, [_vm._v(_vm._s(item.name))]), _vm._v(" "), _c("button", {
      staticClass: "edit-btn",
      attrs: {
        type: "button",
        title: _vm.$t("pos.Edit")
      },
      on: {
        mousedown: function mousedown($event) {
          $event.preventDefault();
        },
        click: function click($event) {
          return _vm.Modal_Updat_Detail(item);
        }
      }
    }, [_c("svg", {
      attrs: {
        viewBox: "0 0 24 24",
        fill: "currentColor"
      }
    }, [_c("path", {
      attrs: {
        d: "M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04a1.003 1.003 0 0 0 0-1.42l-2.34-2.34a1.003 1.003 0 0 0-1.42 0l-1.83 1.83 3.75 3.75 1.84-1.82z"
      }
    })])]), _vm._v(" "), _c("button", {
      staticClass: "remove-btn",
      attrs: {
        type: "button",
        title: _vm.$t("pos.Remove")
      },
      on: {
        mousedown: function mousedown($event) {
          $event.preventDefault();
        },
        click: function click($event) {
          return _vm.delete_Product_Detail(item.detail_id);
        }
      }
    }, [_c("svg", {
      attrs: {
        viewBox: "0 0 24 24",
        fill: "currentColor"
      }
    }, [_c("path", {
      attrs: {
        d: "M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z"
      }
    })])])]) : _vm._e(), _vm._v(" "), _c("p", {
      staticClass: "item-sku"
    }, [_vm._v(_vm._s(item.code))]), _vm._v(" "), _c("div", {
      staticClass: "item-qty-section"
    }, [_c("div", {
      staticClass: "qty-controller"
    }, [_c("button", {
      staticClass: "qty-btn",
      attrs: {
        title: _vm.$t("pos.Decrease")
      },
      on: {
        click: function click($event) {
          return _vm.decrement(item, item.detail_id);
        }
      }
    }, [_vm._v("−")]), _vm._v(" "), _c("input", {
      directives: [{
        name: "model",
        rawName: "v-model.number",
        value: item.quantity,
        expression: "item.quantity",
        modifiers: {
          number: true
        }
      }],
      staticClass: "qty-input",
      attrs: {
        type: "text"
      },
      domProps: {
        value: item.quantity
      },
      on: {
        change: function change($event) {
          return _vm.Verified_Qty(item, item.detail_id);
        },
        input: function input($event) {
          if ($event.target.composing) return;
          _vm.$set(item, "quantity", _vm._n($event.target.value));
        },
        blur: function blur($event) {
          return _vm.$forceUpdate();
        }
      }
    }), _vm._v(" "), _c("button", {
      staticClass: "qty-btn",
      attrs: {
        title: _vm.$t("pos.Increase")
      },
      on: {
        click: function click($event) {
          return _vm.increment(item.detail_id);
        }
      }
    }, [_vm._v("+")])])]), _vm._v(" "), _c("div", {
      staticClass: "item-price"
    }, [_c("div", {
      staticClass: "d-flex align-items-center justify-content-end pos-price-container"
    }, [_c("span", {
      staticClass: "mr-2 item-amount"
    }, [_vm._v(_vm._s(_vm.formatPriceWithCurrentCurrency(item.Total_price, 2)))]), _vm._v(" "), _c("select", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: item.price_type,
        expression: "item.price_type"
      }],
      staticClass: "form-control ml-2 pos-price-select",
      on: {
        change: [function ($event) {
          var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
            return o.selected;
          }).map(function (o) {
            var val = "_value" in o ? o._value : o.value;
            return val;
          });
          _vm.$set(item, "price_type", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
        }, function ($event) {
          return _vm.onChangePriceType(item);
        }]
      }
    }, [_c("option", {
      attrs: {
        value: "retail"
      }
    }, [_vm._v(_vm._s(_vm.$t("Retail Price")))]), _vm._v(" "), _c("option", {
      attrs: {
        value: "wholesale"
      }
    }, [_vm._v(_vm._s(_vm.$t("Wholesale Price")))])])]), _vm._v(" "), _c("div", {
      staticClass: "item-subtotal"
    }, [_c("span", {
      staticClass: "subtotal-label"
    }, [_vm._v(_vm._s(_vm.$t("pos.Subtotal")) + ":")]), _vm._v(" "), _c("span", {
      staticClass: "subtotal-value"
    }, [_vm._v("\n                    " + _vm._s(_vm.formatPriceWithCurrentCurrency(item.subtotal, 2)) + "\n                  ")])])])]);
  }), 0)]), _vm._v(" "), _c("div", {
    staticClass: "summary-section"
  }, [_c("div", {
    staticClass: "charges-section"
  }, [_c("div", {
    staticClass: "charge-row"
  }, [_c("label", [_vm._v(_vm._s(_vm.$t("pos.Tax")))]), _vm._v(" "), _c("div", {
    staticClass: "charge-input-group"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model.number",
      value: _vm.sale.tax_rate,
      expression: "sale.tax_rate",
      modifiers: {
        number: true
      }
    }],
    staticClass: "flat-input",
    attrs: {
      type: "text",
      placeholder: "0"
    },
    domProps: {
      value: _vm.sale.tax_rate
    },
    on: {
      keyup: _vm.keyup_OrderTax,
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.sale, "tax_rate", _vm._n($event.target.value));
      },
      blur: function blur($event) {
        return _vm.$forceUpdate();
      }
    }
  }), _vm._v(" "), _c("span", {
    staticClass: "input-suffix"
  }, [_vm._v("%")])])]), _vm._v(" "), _c("div", {
    staticClass: "charge-row"
  }, [_c("label", [_vm._v(_vm._s(_vm.$t("Discount")))]), _vm._v(" "), _c("div", {
    staticClass: "charge-input-group discount-input-group"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model.number",
      value: _vm.sale.discount,
      expression: "sale.discount",
      modifiers: {
        number: true
      }
    }],
    staticClass: "flat-input",
    attrs: {
      type: "text",
      placeholder: "0"
    },
    domProps: {
      value: _vm.sale.discount
    },
    on: {
      keyup: _vm.keyup_Discount,
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.sale, "discount", _vm._n($event.target.value));
      },
      blur: function blur($event) {
        return _vm.$forceUpdate();
      }
    }
  }), _vm._v(" "), _c("button", {
    staticClass: "discount-type-toggle",
    attrs: {
      type: "button",
      title: _vm.sale.discount_Method === "1" ? _vm.$t("Switch_to_Fixed") : _vm.$t("Switch_to_Percentage")
    },
    on: {
      click: _vm.toggleDiscountType
    }
  }, [_vm._v("\n                  " + _vm._s(_vm.sale.discount_Method === "1" ? "%" : _vm.currentUser.currency) + "\n                ")])])]), _vm._v(" "), _c("div", {
    staticClass: "charge-row no-border-bottom"
  }, [_c("label", [_vm._v(_vm._s(_vm.$t("Shipping")) + " *")]), _vm._v(" "), _c("div", {
    staticClass: "charge-input-group"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model.number",
      value: _vm.sale.shipping,
      expression: "sale.shipping",
      modifiers: {
        number: true
      }
    }],
    staticClass: "flat-input",
    attrs: {
      type: "text",
      placeholder: "2",
      required: ""
    },
    domProps: {
      value: _vm.sale.shipping
    },
    on: {
      keyup: _vm.keyup_Shipping,
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.sale, "shipping", _vm._n($event.target.value));
      },
      blur: function blur($event) {
        return _vm.$forceUpdate();
      }
    }
  }), _vm._v(" "), _c("span", {
    staticClass: "input-suffix"
  }, [_vm._v(_vm._s(_vm.currentUser.currency))])])]), _vm._v(" "), _vm.isOnline && _vm.pos_settings.enable_customer_points && _vm.clientIsEligible && _vm.currentUserPermissions && _vm.currentUserPermissions.includes("edit_tax_discount_shipping_sale") ? _c("div", {
    staticClass: "charge-row points-convert-row",
    "class": {
      converted: _vm.pointsConverted
    }
  }, [_c("div", {
    staticClass: "points-left"
  }, [_c("div", {
    staticClass: "points-header"
  }, [_c("div", {
    staticClass: "label-line"
  }, [_vm.pointsConverted ? _c("i", {
    staticClass: "i-Yes"
  }) : _vm._e(), _vm._v(" "), _c("span", [_vm._v(_vm._s(_vm.$t("Available_Points")))])]), _vm._v(" "), _c("div", {
    staticClass: "points-value"
  }, [_vm._v(_vm._s(_vm.selectedClientPoints))])]), _vm._v(" "), _vm.discount_from_points > 0 ? _c("div", {
    staticClass: "discount-hint"
  }, [_vm._v("\n              ✅ " + _vm._s(_vm.$t("Discount")) + " " + _vm._s(_vm.discount_from_points) + " " + _vm._s(_vm.currentUser.currency) + " " + _vm._s(_vm.$t("pos.will_be_applied")) + "\n            ")]) : _vm._e()]), _vm._v(" "), _c("div", {
    staticClass: "points-actions"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model.number",
      value: _vm.points_to_convert,
      expression: "points_to_convert",
      modifiers: {
        number: true
      }
    }],
    staticClass: "flat-input mr-2",
    attrs: {
      type: "text",
      min: "0",
      max: _vm.selectedClientPoints,
      step: "1",
      disabled: _vm.selectedClientPoints === 0 || _vm.pointsConverted,
      inputmode: "numeric",
      pattern: "[0-9]*",
      placeholder: "0"
    },
    domProps: {
      value: _vm.points_to_convert
    },
    on: {
      input: [function ($event) {
        if ($event.target.composing) return;
        _vm.points_to_convert = _vm._n($event.target.value);
      }, _vm.onPointsToConvertInput],
      blur: function blur($event) {
        return _vm.$forceUpdate();
      }
    }
  }), _vm._v(" "), _c("button", {
    staticClass: "convert-btn",
    "class": {
      converted: _vm.pointsConverted
    },
    attrs: {
      disabled: _vm.selectedClientPoints === 0
    },
    on: {
      click: _vm.convertPointsToDiscount
    }
  }, [!_vm.pointsConverted ? [_c("i", {
    staticClass: "i-Money"
  }), _vm._v(" " + _vm._s(_vm.$t("Convert")) + "\n                  ")] : [_c("i", {
    staticClass: "i-Yes"
  }), _vm._v(" " + _vm._s(_vm.$t("Unconverted")) + "\n                  ")]], 2)])]) : _vm._e()]), _vm._v(" "), _c("div", {
    staticClass: "summary-totals"
  }, [_c("div", {
    staticClass: "total-row"
  }, [_c("span", {
    staticClass: "total-label"
  }, [_vm._v(_vm._s(_vm.$t("pos.Subtotal")))]), _vm._v(" "), _c("span", {
    staticClass: "total-value"
  }, [_vm._v(_vm._s(_vm.formatPriceWithCurrentCurrency(_vm.total, 2)))])]), _vm._v(" "), _c("div", {
    staticClass: "total-row"
  }, [_c("span", {
    staticClass: "total-label"
  }, [_vm._v(_vm._s(_vm.$t("pos.Tax")))]), _vm._v(" "), _c("span", {
    staticClass: "total-value"
  }, [_vm._v(_vm._s(_vm.formatPriceWithCurrentCurrency(_vm.sale.TaxNet, 2)))])]), _vm._v(" "), _c("div", {
    staticClass: "total-row"
  }, [_c("span", {
    staticClass: "total-label discount-row"
  }, [_vm._v(_vm._s(_vm.$t("pos.Discount")))]), _vm._v(" "), _c("span", {
    staticClass: "total-value discount-value"
  }, [_vm._v("-" + _vm._s(_vm.formatPriceWithCurrentCurrency(_vm.getCurrentSaleDiscountAmount(), 2)))])]), _vm._v(" "), _c("div", {
    staticClass: "total-row"
  }, [_c("span", {
    staticClass: "total-label"
  }, [_vm._v(_vm._s(_vm.$t("pos.Shipping")))]), _vm._v(" "), _c("span", {
    staticClass: "total-value"
  }, [_vm._v(_vm._s(_vm.formatPriceWithCurrentCurrency(_vm.sale.shipping, 2)))])]), _vm._v(" "), _c("div", {
    staticClass: "summary-divider"
  }), _vm._v(" "), _c("div", {
    staticClass: "total-row grand-total"
  }, [_c("span", {
    staticClass: "total-label"
  }, [_vm._v(_vm._s(_vm.$t("pos.Grand_Total")))]), _vm._v(" "), _c("span", {
    staticClass: "total-value gradient-text"
  }, [_vm._v(_vm._s(_vm.formatPriceWithCurrentCurrency(_vm.GrandTotal, 2)))])])])])])]), _vm._v(" "), _c("div", {
    staticClass: "card card-products",
    "class": {
      "is-loading": _vm.productsLoading
    }
  }, [_c("div", {
    staticClass: "card-header"
  }, [_c("div", {
    staticClass: "products-search-wrapper"
  }, [_c("div", {
    staticClass: "search-wrapper"
  }, [_c("svg", {
    staticClass: "search-icon",
    attrs: {
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor"
    }
  }, [_c("circle", {
    attrs: {
      cx: "11",
      cy: "11",
      r: "8"
    }
  }), _vm._v(" "), _c("path", {
    attrs: {
      d: "m21 21-4.35-4.35"
    }
  })]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.search_input,
      expression: "search_input"
    }],
    staticClass: "search-input",
    attrs: {
      type: "text",
      placeholder: _vm.$t("Scan_Search_Product_by_Code_Name")
    },
    domProps: {
      value: _vm.search_input
    },
    on: {
      keyup: _vm.search,
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.search_input = $event.target.value;
      }
    }
  }), _vm._v(" "), _c("button", {
    staticClass: "action-btn-icon",
    attrs: {
      title: _vm.$t("Scan")
    },
    on: {
      click: _vm.showModal
    }
  }, [_c("i", {
    staticClass: "i-QR-Code"
  })]), _vm._v(" "), _vm.product_filter && _vm.product_filter.length ? _c("ul", {
    staticClass: "pos-autocomplete-results"
  }, _vm._l(_vm.product_filter, function (product_fil) {
    return _c("li", {
      key: product_fil.id,
      staticClass: "pos-autocomplete-item",
      on: {
        mousedown: function mousedown($event) {
          return _vm.SearchProduct(product_fil);
        }
      }
    }, [_vm._v("\n                " + _vm._s(_vm.getResultValue(product_fil)) + "\n              ")]);
  }), 0) : _vm._e()])]), _vm._v(" "), (_vm.pos_settings.show_categories || _vm.pos_settings.show_brands) && _vm.isOnline ? _c("div", {
    staticClass: "card-products-mobile-filters"
  }, [_vm.pos_settings.show_categories ? _c("v-select", {
    staticClass: "category-select-header",
    attrs: {
      value: _vm.category_id || null,
      placeholder: _vm.$t("pos.All_Categories"),
      options: _vm.categories.map(function (c) {
        return {
          label: c.name,
          value: c.id
        };
      }),
      reduce: function reduce(o) {
        return o.value;
      },
      clearable: true
    },
    on: {
      input: function input(val) {
        _vm.category_id = val != null ? val : "";
        _vm.getProducts();
      }
    }
  }) : _vm._e(), _vm._v(" "), _vm.pos_settings.show_brands ? _c("v-select", {
    staticClass: "brand-select-header",
    attrs: {
      value: _vm.brand_id || null,
      placeholder: _vm.$t("pos.All_Brands"),
      options: _vm.brands.map(function (b) {
        return {
          label: b.name,
          value: b.id
        };
      }),
      reduce: function reduce(o) {
        return o.value;
      },
      clearable: true
    },
    on: {
      input: function input(val) {
        _vm.brand_id = val != null ? val : "";
        _vm.getProducts();
      }
    }
  }) : _vm._e()], 1) : _vm._e()]), _vm._v(" "), _c("b-modal", {
    attrs: {
      id: "open_scan",
      "hide-footer": "",
      title: _vm.$t("Scan")
    }
  }, [_c("qrcode-scanner", {
    staticStyle: {
      width: "100%",
      height: "calc(100vh - 56px)"
    },
    attrs: {
      qrbox: 250,
      fps: 10
    },
    on: {
      result: _vm.onScan
    }
  }), _vm._v(" "), _c("div", {
    staticClass: "text-center mt-2"
  }, [_c("b-button", {
    attrs: {
      variant: "primary"
    },
    on: {
      click: function click($event) {
        return _vm.$bvModal.hide("open_scan");
      }
    }
  }, [_vm._v(_vm._s(_vm.$t("Close")))])], 1)], 1), _vm._v(" "), _c("modern-payment-modal", {
    ref: "modernPaymentModal",
    attrs: {
      "payment-methods": _vm.payment_methods,
      accounts: _vm.accounts,
      "default-account-id": _vm.default_account_id,
      "default-payment-method-id": _vm.default_payment_method_id,
      currency: _vm.currentUser.currency,
      "client-id": _vm.selectedClientId,
      "warehouse-id": _vm.sale.warehouse_id,
      sale: _vm.sale,
      details: _vm.details,
      "grand-total": _vm.GrandTotal,
      "stripe-key": _vm.stripe_key,
      "discount-from-points": _vm.discount_from_points,
      "used-points": _vm.used_points,
      "draft-sale-id": _vm.draft_sale_id,
      "client-credit-limit": _vm.selectedClientCreditLimit,
      "client-net-balance": _vm.selectedClientNetBalance,
      "is-online": _vm.isOnline
    },
    on: {
      "payment-success": _vm.onModernPaymentSuccess
    }
  }), _vm._v(" "), _c("b-modal", {
    attrs: {
      "hide-footer": "",
      size: "sm",
      scrollable: "",
      id: "Show_invoice",
      title: _vm.$t("Invoice_POS")
    },
    on: {
      shown: _vm.renderZatcaQrPos
    }
  }, [_c("div", {
    attrs: {
      id: "invoice-POS"
    }
  }, [_c("div", {
    staticStyle: {
      "max-width": "400px",
      margin: "0px auto"
    }
  }, [_vm.currentReceiptLayout === 1 ? _c("div", [_c("div", {
    staticClass: "info"
  }, [_c("div", {
    staticClass: "invoice_logo text-center mb-2"
  }, [_c("img", {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: _vm.pos_settings.show_logo !== 0,
      expression: "pos_settings.show_logo !== 0"
    }],
    attrs: {
      src: "/images/" + _vm.invoice_pos.setting.logo,
      alt: "",
      width: _vm.pos_settings.logo_size || 60,
      height: _vm.pos_settings.logo_size || 60
    }
  })]), _vm._v(" "), _c("p", [_c("span", {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: _vm.pos_settings.show_store_name !== 0,
      expression: "pos_settings.show_store_name !== 0"
    }]
  }, [_c("strong", [_vm._v(_vm._s(_vm.invoice_pos.setting.CompanyName))]), _c("br")]), _vm._v(" "), _vm.invoice_pos.sale && _vm.invoice_pos.sale.Ref && _vm.pos_settings.show_reference !== 0 ? _c("span", [_vm._v(_vm._s(_vm.$t("Reference")) + " : " + _vm._s(_vm.invoice_pos.sale.Ref) + " "), _c("br")]) : _vm._e(), _vm._v(" "), _c("span", {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: _vm.pos_settings.show_date !== 0,
      expression: "pos_settings.show_date !== 0"
    }]
  }, [_vm._v(_vm._s(_vm.$t("date")) + " : " + _vm._s(_vm.invoice_pos.sale.date) + " "), _c("br")]), _vm._v(" "), _c("span", {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: _vm.pos_settings.show_seller !== 0,
      expression: "pos_settings.show_seller !== 0"
    }]
  }, [_vm._v(_vm._s(_vm.$t("Seller")) + " : " + _vm._s(_vm.invoice_pos.sale.seller_name) + " "), _c("br")]), _vm._v(" "), _c("span", {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: _vm.pos_settings.show_address,
      expression: "pos_settings.show_address"
    }]
  }, [_vm._v(_vm._s(_vm.$t("Adress")) + " : " + _vm._s(_vm.invoice_pos.setting.CompanyAdress) + " "), _c("br")]), _vm._v(" "), _c("span", {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: _vm.pos_settings.show_email,
      expression: "pos_settings.show_email"
    }]
  }, [_vm._v(_vm._s(_vm.$t("Email")) + " : " + _vm._s(_vm.invoice_pos.setting.email) + " "), _c("br")]), _vm._v(" "), _c("span", {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: _vm.pos_settings.show_phone,
      expression: "pos_settings.show_phone"
    }]
  }, [_vm._v(_vm._s(_vm.$t("Phone")) + " : " + _vm._s(_vm.invoice_pos.setting.CompanyPhone) + " "), _c("br")]), _vm._v(" "), _c("span", {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: _vm.pos_settings.show_customer,
      expression: "pos_settings.show_customer"
    }]
  }, [_vm._v(_vm._s(_vm.$t("Customer")) + " : " + _vm._s(_vm.invoice_pos.sale.client_name) + " "), _c("br")]), _vm._v(" "), _c("span", {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: _vm.pos_settings.show_Warehouse,
      expression: "pos_settings.show_Warehouse"
    }]
  }, [_vm._v(_vm._s(_vm.$t("warehouse")) + " : " + _vm._s(_vm.invoice_pos.sale.warehouse_name) + " "), _c("br")])])]), _vm._v(" "), _c("table", {
    staticClass: "table_data",
    staticStyle: {
      width: "100%"
    }
  }, [_c("tbody", [_vm._l(_vm.invoice_pos.details, function (detail_invoice) {
    return _c("tr", [_c("td", {
      attrs: {
        colspan: "3"
      }
    }, [_vm._v("\n                    " + _vm._s(detail_invoice.name) + "\n                    "), _c("br", {
      directives: [{
        name: "show",
        rawName: "v-show",
        value: detail_invoice.is_imei && detail_invoice.imei_number !== null,
        expression: "detail_invoice.is_imei && detail_invoice.imei_number !==null"
      }]
    }), _vm._v(" "), _c("span", {
      directives: [{
        name: "show",
        rawName: "v-show",
        value: detail_invoice.is_imei && detail_invoice.imei_number !== null,
        expression: "detail_invoice.is_imei && detail_invoice.imei_number !==null "
      }]
    }, [_vm._v(_vm._s(_vm.$t("IMEI_SN")) + " : " + _vm._s(detail_invoice.imei_number))]), _vm._v(" "), _c("br"), _vm._v(" "), _c("span", [_vm._v(_vm._s(_vm.formatNumber(detail_invoice.quantity, 2)) + " " + _vm._s(detail_invoice.unit_sale) + " x " + _vm._s(_vm.formatPriceDisplay(detail_invoice.total / detail_invoice.quantity, 2)))])]), _vm._v(" "), _c("td", {
      staticStyle: {
        "text-align": "right",
        "vertical-align": "bottom"
      }
    }, [_vm._v("\n                    " + _vm._s(_vm.formatPriceDisplay(detail_invoice.total, 2)) + "\n                  ")])]);
  }), _vm._v(" "), _c("tr", {
    staticStyle: {
      "margin-top": "10px"
    }
  }, [_c("td", {
    staticClass: "total",
    attrs: {
      colspan: "3"
    }
  }, [_vm._v(_vm._s(_vm.$t("pos.Subtotal")))]), _vm._v(" "), _c("td", {
    staticClass: "total",
    staticStyle: {
      "text-align": "right"
    }
  }, [_vm._v("\n                    " + _vm._s(_vm.formatPriceWithSymbol(_vm.invoice_pos.symbol, _vm.invoiceSubtotal, 2)) + "\n                  ")])]), _vm._v(" "), _c("tr", {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: _vm.pos_settings.show_tax,
      expression: "pos_settings.show_tax"
    }],
    staticStyle: {
      "margin-top": "10px"
    }
  }, [_c("td", {
    staticClass: "total",
    attrs: {
      colspan: "3"
    }
  }, [_vm._v(_vm._s(_vm.$t("OrderTax")))]), _vm._v(" "), _c("td", {
    staticClass: "total",
    staticStyle: {
      "text-align": "right"
    }
  }, [_vm._v("\n                    " + _vm._s(_vm.formatPriceWithSymbol(_vm.invoice_pos.symbol, _vm.invoice_pos.sale.taxe, 2)) + " (" + _vm._s(_vm.formatNumber(_vm.invoice_pos.sale.tax_rate, 2)) + " %)\n                  ")])]), _vm._v(" "), _c("tr", {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: _vm.pos_settings.show_discount,
      expression: "pos_settings.show_discount"
    }],
    staticStyle: {
      "margin-top": "10px"
    }
  }, [_c("td", {
    staticClass: "total",
    attrs: {
      colspan: "3"
    }
  }, [_vm._v(_vm._s(_vm.$t("Discount")))]), _vm._v(" "), _c("td", {
    staticClass: "total",
    staticStyle: {
      "text-align": "right"
    }
  }, [String(_vm.invoice_pos.sale.discount_Method || "2") === "1" ? [_vm._v("\n                      " + _vm._s(_vm.formatNumber(_vm.invoice_pos.sale.discount, 2)) + "% (" + _vm._s(_vm.formatPriceWithSymbol(_vm.invoice_pos.symbol, _vm.calculatedManualDiscountAmount, 2)) + ")\n                    ")] : [_vm._v("\n                      " + _vm._s(_vm.formatPriceWithSymbol(_vm.invoice_pos.symbol, _vm.calculatedManualDiscountAmount, 2)) + "\n                    ")]], 2)]), _vm._v(" "), _c("tr", {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: _vm.pos_settings.show_discount && _vm.invoice_pos.sale.discount_from_points && Number(_vm.invoice_pos.sale.discount_from_points) > 0,
      expression: "pos_settings.show_discount && invoice_pos.sale.discount_from_points && Number(invoice_pos.sale.discount_from_points) > 0"
    }]
  }, [_c("td", {
    staticClass: "total",
    attrs: {
      colspan: "3"
    }
  }, [_vm._v(_vm._s(_vm.$t("Discount_from_Points")))]), _vm._v(" "), _c("td", {
    staticClass: "total",
    staticStyle: {
      "text-align": "right"
    }
  }, [_vm._v("\n                    " + _vm._s(_vm.formatPriceWithSymbol(_vm.invoice_pos.symbol, _vm.invoice_pos.sale.discount_from_points, 2)) + "\n                  ")])]), _vm._v(" "), _c("tr", {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: _vm.pos_settings.show_shipping,
      expression: "pos_settings.show_shipping"
    }],
    staticStyle: {
      "margin-top": "10px"
    }
  }, [_c("td", {
    staticClass: "total",
    attrs: {
      colspan: "3"
    }
  }, [_vm._v(_vm._s(_vm.$t("Shipping")))]), _vm._v(" "), _c("td", {
    staticClass: "total",
    staticStyle: {
      "text-align": "right"
    }
  }, [_vm._v("\n                    " + _vm._s(_vm.formatPriceWithSymbol(_vm.invoice_pos.symbol, _vm.invoice_pos.sale.shipping, 2)) + "\n                  ")])]), _vm._v(" "), _c("tr", {
    staticStyle: {
      "margin-top": "10px"
    }
  }, [_c("td", {
    staticClass: "total",
    attrs: {
      colspan: "3"
    }
  }, [_vm._v(_vm._s(_vm.$t("Total")))]), _vm._v(" "), _c("td", {
    staticClass: "total",
    staticStyle: {
      "text-align": "right"
    }
  }, [_vm._v("\n                    " + _vm._s(_vm.formatPriceWithSymbol(_vm.invoice_pos.symbol, _vm.invoice_pos.sale.GrandTotal, 2)) + "\n                  ")])]), _vm._v(" "), _c("tr", {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: _vm.pos_settings.show_paid !== 0,
      expression: "pos_settings.show_paid !== 0"
    }]
  }, [_c("td", {
    staticClass: "total",
    attrs: {
      colspan: "3"
    }
  }, [_vm._v(_vm._s(_vm.$t("Paid")))]), _vm._v(" "), _c("td", {
    staticClass: "total",
    staticStyle: {
      "text-align": "right"
    }
  }, [_vm._v("\n                    " + _vm._s(_vm.formatPriceWithSymbol(_vm.invoice_pos.symbol, _vm.invoice_pos.sale.paid_amount, 2)) + "\n                  ")])]), _vm._v(" "), _c("tr", {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: _vm.pos_settings.show_due !== 0,
      expression: "pos_settings.show_due !== 0"
    }]
  }, [_c("td", {
    staticClass: "total",
    attrs: {
      colspan: "3"
    }
  }, [_vm._v(_vm._s(_vm.$t("Due")))]), _vm._v(" "), _c("td", {
    staticClass: "total",
    staticStyle: {
      "text-align": "right"
    }
  }, [_vm._v("\n                    " + _vm._s(_vm.formatPriceWithSymbol(_vm.invoice_pos.symbol, _vm.invoice_pos.sale.GrandTotal - _vm.invoice_pos.sale.paid_amount, 2)) + "\n                  ")])])], 2)]), _vm._v(" "), _c("table", {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: _vm.pos_settings.show_payments !== 0 && _vm.invoice_pos.sale.paid_amount > 0,
      expression: "pos_settings.show_payments !== 0 && invoice_pos.sale.paid_amount > 0"
    }],
    staticClass: "change mt-3",
    staticStyle: {
      "font-size": "10px",
      width: "100%"
    }
  }, [_c("thead", [_c("tr", {
    staticStyle: {
      background: "#eee"
    }
  }, [_c("th", {
    staticStyle: {
      "text-align": "left"
    },
    attrs: {
      colspan: "1"
    }
  }, [_vm._v(_vm._s(_vm.$t("PayeBy")) + ":")]), _vm._v(" "), _c("th", {
    staticStyle: {
      "text-align": "center"
    },
    attrs: {
      colspan: "2"
    }
  }, [_vm._v(_vm._s(_vm.$t("Amount")) + ":")]), _vm._v(" "), _c("th", {
    staticStyle: {
      "text-align": "right"
    },
    attrs: {
      colspan: "1"
    }
  }, [_vm._v(_vm._s(_vm.$t("Change")) + ":")])])]), _vm._v(" "), _c("tbody", _vm._l(_vm.payments, function (payment_pos) {
    return _c("tr", [_c("td", {
      staticStyle: {
        "text-align": "left"
      },
      attrs: {
        colspan: "1"
      }
    }, [_vm._v(_vm._s(payment_pos.payment_method ? payment_pos.payment_method.name : "---"))]), _vm._v(" "), _c("td", {
      staticStyle: {
        "text-align": "center"
      },
      attrs: {
        colspan: "2"
      }
    }, [_vm._v("\n                    " + _vm._s(_vm.formatPriceDisplay(payment_pos.montant, 2)) + "\n                  ")]), _vm._v(" "), _c("td", {
      staticStyle: {
        "text-align": "right"
      },
      attrs: {
        colspan: "1"
      }
    }, [_vm._v("\n                    " + _vm._s(_vm.formatPriceDisplay(payment_pos.change, 2)) + "\n                  ")])]);
  }), 0)]), _vm._v(" "), _c("div", {
    staticClass: "ml-2",
    attrs: {
      id: "legalcopy"
    }
  }, [_c("p", {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: _vm.pos_settings.show_note,
      expression: "pos_settings.show_note"
    }],
    staticClass: "legal"
  }, [_c("strong", [_vm._v(_vm._s(_vm.pos_settings.note_customer))])]), _vm._v(" "), _vm.invoice_pos.setting && _vm.invoice_pos.setting.zatca_enabled && _vm.invoice_pos.zatca_qr && _vm.pos_settings.show_zatca_qr !== 0 ? _c("div", {
    staticClass: "mt-2 text-center"
  }, [_c("div", {
    staticClass: "zatca-qr"
  }, [_c("div", {
    staticClass: "zatca-qr-title"
  }, [_vm._v("ZATCA")]), _vm._v(" "), _c("div", {
    ref: "zatcaQrcodePos"
  })])]) : _vm._e(), _vm._v(" "), _vm.pos_settings.show_barcode !== 0 && _vm.invoice_pos.sale && _vm.invoice_pos.sale.Ref ? _c("div", {
    staticClass: "mt-2 text-center"
  }, [_c("barcode", {
    attrs: {
      value: _vm.invoice_pos.sale.Ref,
      format: _vm.barcodeFormat,
      textmargin: "0",
      fontSize: "12",
      height: "40",
      width: "1"
    }
  })], 1) : _vm._e()])]) : _vm.currentReceiptLayout === 2 ? _c("div", [_c("div", {
    staticClass: "info text-center"
  }, [_c("div", {
    staticClass: "invoice_logo mb-1"
  }, [_c("img", {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: _vm.pos_settings.show_logo !== 0,
      expression: "pos_settings.show_logo !== 0"
    }],
    attrs: {
      src: "/images/" + _vm.invoice_pos.setting.logo,
      alt: "",
      width: _vm.pos_settings.logo_size || 60,
      height: _vm.pos_settings.logo_size || 60
    }
  })]), _vm._v(" "), _c("div", [_c("div", {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: _vm.pos_settings.show_store_name !== 0,
      expression: "pos_settings.show_store_name !== 0"
    }]
  }, [_vm._v(_vm._s(_vm.invoice_pos.setting.CompanyName))]), _vm._v(" "), _c("div", {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: _vm.pos_settings.show_address,
      expression: "pos_settings.show_address"
    }]
  }, [_vm._v(_vm._s(_vm.invoice_pos.setting.CompanyAdress))]), _vm._v(" "), _c("div", {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: _vm.pos_settings.show_phone,
      expression: "pos_settings.show_phone"
    }]
  }, [_vm._v(_vm._s(_vm.invoice_pos.setting.CompanyPhone))]), _vm._v(" "), _c("div", {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: _vm.pos_settings.show_email,
      expression: "pos_settings.show_email"
    }]
  }, [_vm._v(_vm._s(_vm.invoice_pos.setting.email))])]), _vm._v(" "), _c("div", {
    staticClass: "mt-1"
  }, [_vm.invoice_pos.sale && _vm.invoice_pos.sale.Ref && _vm.pos_settings.show_reference !== 0 ? _c("small", [_vm._v("\n                  " + _vm._s(_vm.$t("Reference")) + " : " + _vm._s(_vm.invoice_pos.sale.Ref) + "\n                ")]) : _vm._e(), _vm._v(" "), _vm.invoice_pos.sale && _vm.invoice_pos.sale.Ref && _vm.pos_settings.show_reference !== 0 ? _c("br") : _vm._e(), _vm._v(" "), _c("small", {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: _vm.pos_settings.show_date !== 0,
      expression: "pos_settings.show_date !== 0"
    }]
  }, [_vm._v("\n                  " + _vm._s(_vm.$t("date")) + " : " + _vm._s(_vm.invoice_pos.sale.date) + "\n                ")]), _c("br"), _vm._v(" "), _c("small", {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: _vm.pos_settings.show_seller !== 0,
      expression: "pos_settings.show_seller !== 0"
    }]
  }, [_vm._v("\n                  " + _vm._s(_vm.$t("Seller")) + " : " + _vm._s(_vm.invoice_pos.sale.seller_name) + "\n                ")]), _c("br"), _vm._v(" "), _c("small", {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: _vm.pos_settings.show_customer,
      expression: "pos_settings.show_customer"
    }]
  }, [_vm._v("\n                  " + _vm._s(_vm.$t("Customer")) + " : " + _vm._s(_vm.invoice_pos.sale.client_name) + "\n                ")]), _c("br"), _vm._v(" "), _c("small", {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: _vm.pos_settings.show_Warehouse,
      expression: "pos_settings.show_Warehouse"
    }]
  }, [_vm._v("\n                  " + _vm._s(_vm.$t("warehouse")) + " : " + _vm._s(_vm.invoice_pos.sale.warehouse_name) + "\n                ")])])]), _vm._v(" "), _c("table", {
    staticClass: "table_data mt-2",
    staticStyle: {
      width: "100%",
      "font-size": "11px"
    }
  }, [_c("thead", [_c("tr", [_c("th", {
    staticStyle: {
      "text-align": "left"
    }
  }, [_vm._v(_vm._s(_vm.$t("ProductName")))]), _vm._v(" "), _c("th", {
    staticStyle: {
      "text-align": "center"
    }
  }, [_vm._v(_vm._s(_vm.$t("Quantity")))]), _vm._v(" "), _c("th", {
    staticStyle: {
      "text-align": "right"
    }
  }, [_vm._v(_vm._s(_vm.$t("Price")))]), _vm._v(" "), _c("th", {
    staticStyle: {
      "text-align": "right"
    }
  }, [_vm._v(_vm._s(_vm.$t("Total")))])])]), _vm._v(" "), _c("tbody", _vm._l(_vm.invoice_pos.details, function (detail_invoice) {
    return _c("tr", [_c("td", [_vm._v("\n                    " + _vm._s(detail_invoice.name) + "\n                    "), _c("br", {
      directives: [{
        name: "show",
        rawName: "v-show",
        value: detail_invoice.is_imei && detail_invoice.imei_number !== null,
        expression: "detail_invoice.is_imei && detail_invoice.imei_number !==null"
      }]
    }), _vm._v(" "), _c("small", {
      directives: [{
        name: "show",
        rawName: "v-show",
        value: detail_invoice.is_imei && detail_invoice.imei_number !== null,
        expression: "detail_invoice.is_imei && detail_invoice.imei_number !==null "
      }]
    }, [_vm._v(_vm._s(_vm.$t("IMEI_SN")) + " : " + _vm._s(detail_invoice.imei_number))])]), _vm._v(" "), _c("td", {
      staticStyle: {
        "text-align": "center"
      }
    }, [_vm._v("\n                    " + _vm._s(_vm.formatNumber(detail_invoice.quantity, 2)) + " " + _vm._s(detail_invoice.unit_sale) + "\n                  ")]), _vm._v(" "), _c("td", {
      staticStyle: {
        "text-align": "right"
      }
    }, [_vm._v("\n                    " + _vm._s(_vm.formatNumber(detail_invoice.total / detail_invoice.quantity, 2)) + "\n                  ")]), _vm._v(" "), _c("td", {
      staticStyle: {
        "text-align": "right"
      }
    }, [_vm._v("\n                    " + _vm._s(_vm.formatNumber(detail_invoice.total, 2)) + "\n                  ")])]);
  }), 0)]), _vm._v(" "), _c("table", {
    staticClass: "table_data mt-2",
    staticStyle: {
      width: "100%",
      "font-size": "11px"
    }
  }, [_c("tbody", [_c("tr", [_c("td", {
    staticClass: "total"
  }, [_vm._v(_vm._s(_vm.$t("pos.Subtotal")))]), _vm._v(" "), _c("td", {
    staticClass: "total",
    staticStyle: {
      "text-align": "right"
    }
  }, [_vm._v("\n                    " + _vm._s(_vm.formatPriceWithSymbol(_vm.invoice_pos.symbol, _vm.invoiceSubtotal, 2)) + "\n                  ")])]), _vm._v(" "), _c("tr", {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: _vm.pos_settings.show_tax,
      expression: "pos_settings.show_tax"
    }]
  }, [_c("td", {
    staticClass: "total"
  }, [_vm._v(_vm._s(_vm.$t("OrderTax")))]), _vm._v(" "), _c("td", {
    staticClass: "total",
    staticStyle: {
      "text-align": "right"
    }
  }, [_vm._v("\n                    " + _vm._s(_vm.formatPriceWithSymbol(_vm.invoice_pos.symbol, _vm.invoice_pos.sale.taxe, 2)) + " (" + _vm._s(_vm.formatNumber(_vm.invoice_pos.sale.tax_rate, 2)) + " %)\n                  ")])]), _vm._v(" "), _c("tr", {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: _vm.pos_settings.show_discount,
      expression: "pos_settings.show_discount"
    }]
  }, [_c("td", {
    staticClass: "total"
  }, [_vm._v(_vm._s(_vm.$t("Discount")))]), _vm._v(" "), _c("td", {
    staticClass: "total",
    staticStyle: {
      "text-align": "right"
    }
  }, [String(_vm.invoice_pos.sale.discount_Method || "2") === "1" ? [_vm._v("\n                      " + _vm._s(_vm.formatNumber(_vm.invoice_pos.sale.discount, 2)) + "% (" + _vm._s(_vm.formatPriceWithSymbol(_vm.invoice_pos.symbol, _vm.calculatedManualDiscountAmount, 2)) + ")\n                    ")] : [_vm._v("\n                      " + _vm._s(_vm.formatPriceWithSymbol(_vm.invoice_pos.symbol, _vm.calculatedManualDiscountAmount, 2)) + "\n                    ")]], 2)]), _vm._v(" "), _c("tr", {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: _vm.pos_settings.show_discount && _vm.invoice_pos.sale.discount_from_points && Number(_vm.invoice_pos.sale.discount_from_points) > 0,
      expression: "pos_settings.show_discount && invoice_pos.sale.discount_from_points && Number(invoice_pos.sale.discount_from_points) > 0"
    }]
  }, [_c("td", {
    staticClass: "total"
  }, [_vm._v(_vm._s(_vm.$t("Discount_from_Points")))]), _vm._v(" "), _c("td", {
    staticClass: "total",
    staticStyle: {
      "text-align": "right"
    }
  }, [_vm._v("\n                    " + _vm._s(_vm.formatPriceWithSymbol(_vm.invoice_pos.symbol, _vm.invoice_pos.sale.discount_from_points, 2)) + "\n                  ")])]), _vm._v(" "), _c("tr", {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: _vm.pos_settings.show_shipping,
      expression: "pos_settings.show_shipping"
    }]
  }, [_c("td", {
    staticClass: "total"
  }, [_vm._v(_vm._s(_vm.$t("Shipping")))]), _vm._v(" "), _c("td", {
    staticClass: "total",
    staticStyle: {
      "text-align": "right"
    }
  }, [_vm._v("\n                    " + _vm._s(_vm.formatPriceWithSymbol(_vm.invoice_pos.symbol, _vm.invoice_pos.sale.shipping, 2)) + "\n                  ")])]), _vm._v(" "), _c("tr", [_c("td", {
    staticClass: "total"
  }, [_vm._v(_vm._s(_vm.$t("Total")))]), _vm._v(" "), _c("td", {
    staticClass: "total",
    staticStyle: {
      "text-align": "right"
    }
  }, [_vm._v("\n                    " + _vm._s(_vm.formatPriceWithSymbol(_vm.invoice_pos.symbol, _vm.invoice_pos.sale.GrandTotal, 2)) + "\n                  ")])]), _vm._v(" "), _c("tr", {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: _vm.pos_settings.show_paid !== 0,
      expression: "pos_settings.show_paid !== 0"
    }]
  }, [_c("td", {
    staticClass: "total"
  }, [_vm._v(_vm._s(_vm.$t("Paid")))]), _vm._v(" "), _c("td", {
    staticClass: "total",
    staticStyle: {
      "text-align": "right"
    }
  }, [_vm._v("\n                    " + _vm._s(_vm.formatPriceWithSymbol(_vm.invoice_pos.symbol, _vm.invoice_pos.sale.paid_amount, 2)) + "\n                  ")])]), _vm._v(" "), _c("tr", {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: _vm.pos_settings.show_due !== 0,
      expression: "pos_settings.show_due !== 0"
    }]
  }, [_c("td", {
    staticClass: "total"
  }, [_vm._v(_vm._s(_vm.$t("Due")))]), _vm._v(" "), _c("td", {
    staticClass: "total",
    staticStyle: {
      "text-align": "right"
    }
  }, [_vm._v("\n                    " + _vm._s(_vm.formatPriceWithSymbol(_vm.invoice_pos.symbol, _vm.invoice_pos.sale.GrandTotal - _vm.invoice_pos.sale.paid_amount, 2)) + "\n                  ")])])])]), _vm._v(" "), _c("table", {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: _vm.pos_settings.show_payments !== 0 && _vm.invoice_pos.sale.paid_amount > 0,
      expression: "pos_settings.show_payments !== 0 && invoice_pos.sale.paid_amount > 0"
    }],
    staticClass: "change mt-2",
    staticStyle: {
      "font-size": "10px",
      width: "100%"
    }
  }, [_c("thead", [_c("tr", {
    staticStyle: {
      background: "#eee"
    }
  }, [_c("th", {
    staticStyle: {
      "text-align": "left"
    },
    attrs: {
      colspan: "1"
    }
  }, [_vm._v(_vm._s(_vm.$t("PayeBy")) + ":")]), _vm._v(" "), _c("th", {
    staticStyle: {
      "text-align": "center"
    },
    attrs: {
      colspan: "2"
    }
  }, [_vm._v(_vm._s(_vm.$t("Amount")) + ":")]), _vm._v(" "), _c("th", {
    staticStyle: {
      "text-align": "right"
    },
    attrs: {
      colspan: "1"
    }
  }, [_vm._v(_vm._s(_vm.$t("Change")) + ":")])])]), _vm._v(" "), _c("tbody", _vm._l(_vm.payments, function (payment_pos) {
    return _c("tr", [_c("td", {
      staticStyle: {
        "text-align": "left"
      },
      attrs: {
        colspan: "1"
      }
    }, [_vm._v(_vm._s(payment_pos.payment_method ? payment_pos.payment_method.name : "---"))]), _vm._v(" "), _c("td", {
      staticStyle: {
        "text-align": "center"
      },
      attrs: {
        colspan: "2"
      }
    }, [_vm._v("\n                    " + _vm._s(_vm.formatNumber(payment_pos.montant, 2)) + "\n                  ")]), _vm._v(" "), _c("td", {
      staticStyle: {
        "text-align": "right"
      },
      attrs: {
        colspan: "1"
      }
    }, [_vm._v("\n                    " + _vm._s(_vm.formatNumber(payment_pos.change, 2)) + "\n                  ")])]);
  }), 0)]), _vm._v(" "), _c("div", {
    staticClass: "ml-2",
    attrs: {
      id: "legalcopy"
    }
  }, [_c("p", {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: _vm.pos_settings.show_note,
      expression: "pos_settings.show_note"
    }],
    staticClass: "legal"
  }, [_c("strong", [_vm._v(_vm._s(_vm.pos_settings.note_customer))])]), _vm._v(" "), _vm.invoice_pos.setting && _vm.invoice_pos.setting.zatca_enabled && _vm.invoice_pos.zatca_qr && _vm.pos_settings.show_zatca_qr !== 0 ? _c("div", {
    staticClass: "mt-2 text-center"
  }, [_c("div", {
    staticClass: "zatca-qr"
  }, [_c("div", {
    staticClass: "zatca-qr-title"
  }, [_vm._v("ZATCA")]), _vm._v(" "), _c("div", {
    ref: "zatcaQrcodePos"
  })])]) : _vm._e(), _vm._v(" "), _vm.pos_settings.show_barcode !== 0 && _vm.invoice_pos.sale && _vm.invoice_pos.sale.Ref ? _c("div", {
    staticClass: "mt-2 text-center"
  }, [_c("barcode", {
    attrs: {
      value: _vm.invoice_pos.sale.Ref,
      format: _vm.barcodeFormat,
      textmargin: "0",
      fontSize: "12",
      height: "40",
      width: "1"
    }
  })], 1) : _vm._e()])]) : _c("div", [_c("div", {
    staticClass: "info mb-2"
  }, [_c("div", {
    staticClass: "d-flex justify-content-between"
  }, [_c("div", [_c("strong", {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: _vm.pos_settings.show_store_name !== 0,
      expression: "pos_settings.show_store_name !== 0"
    }]
  }, [_vm._v(_vm._s(_vm.invoice_pos.setting.CompanyName))]), _c("br"), _vm._v(" "), _c("span", {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: _vm.pos_settings.show_address,
      expression: "pos_settings.show_address"
    }]
  }, [_vm._v(_vm._s(_vm.invoice_pos.setting.CompanyAdress))]), _c("br", {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: _vm.pos_settings.show_address,
      expression: "pos_settings.show_address"
    }]
  }), _vm._v(" "), _c("span", {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: _vm.pos_settings.show_phone,
      expression: "pos_settings.show_phone"
    }]
  }, [_vm._v(_vm._s(_vm.invoice_pos.setting.CompanyPhone))]), _c("br", {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: _vm.pos_settings.show_phone,
      expression: "pos_settings.show_phone"
    }]
  }), _vm._v(" "), _c("span", {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: _vm.pos_settings.show_email,
      expression: "pos_settings.show_email"
    }]
  }, [_vm._v(_vm._s(_vm.invoice_pos.setting.email))])]), _vm._v(" "), _c("div", {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: _vm.pos_settings.show_logo !== 0,
      expression: "pos_settings.show_logo !== 0"
    }],
    staticClass: "invoice_logo text-center mb-2"
  }, [_c("img", {
    attrs: {
      src: "/images/" + _vm.invoice_pos.setting.logo,
      alt: "",
      width: _vm.pos_settings.logo_size || 60,
      height: _vm.pos_settings.logo_size || 60
    }
  })])]), _vm._v(" "), _c("div", {
    staticClass: "mt-2",
    staticStyle: {
      "font-size": "11px"
    }
  }, [_vm.invoice_pos.sale && _vm.invoice_pos.sale.Ref && _vm.pos_settings.show_reference !== 0 ? _c("div", [_vm._v("\n                  " + _vm._s(_vm.$t("Reference")) + " : " + _vm._s(_vm.invoice_pos.sale.Ref) + "\n                ")]) : _vm._e(), _vm._v(" "), _c("div", {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: _vm.pos_settings.show_date !== 0,
      expression: "pos_settings.show_date !== 0"
    }]
  }, [_vm._v("\n                  " + _vm._s(_vm.$t("date")) + " : " + _vm._s(_vm.invoice_pos.sale.date) + "\n                ")]), _vm._v(" "), _c("div", {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: _vm.pos_settings.show_seller !== 0,
      expression: "pos_settings.show_seller !== 0"
    }]
  }, [_vm._v("\n                  " + _vm._s(_vm.$t("Seller")) + " : " + _vm._s(_vm.invoice_pos.sale.seller_name) + "\n                ")]), _vm._v(" "), _c("div", {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: _vm.pos_settings.show_customer,
      expression: "pos_settings.show_customer"
    }]
  }, [_vm._v("\n                  " + _vm._s(_vm.$t("Customer")) + " : " + _vm._s(_vm.invoice_pos.sale.client_name) + "\n                ")]), _vm._v(" "), _c("div", {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: _vm.pos_settings.show_Warehouse,
      expression: "pos_settings.show_Warehouse"
    }]
  }, [_vm._v("\n                  " + _vm._s(_vm.$t("warehouse")) + " : " + _vm._s(_vm.invoice_pos.sale.warehouse_name) + "\n                ")])])]), _vm._v(" "), _c("table", {
    staticClass: "table_data w-100 mb-2",
    staticStyle: {
      "font-size": "11px"
    }
  }, [_c("tbody", _vm._l(_vm.invoice_pos.details, function (detail_invoice) {
    return _c("tr", [_c("td", {
      attrs: {
        colspan: "2"
      }
    }, [_c("strong", [_vm._v(_vm._s(detail_invoice.name))]), _vm._v(" "), _c("br", {
      directives: [{
        name: "show",
        rawName: "v-show",
        value: detail_invoice.is_imei && detail_invoice.imei_number !== null,
        expression: "detail_invoice.is_imei && detail_invoice.imei_number !==null"
      }]
    }), _vm._v(" "), _c("span", {
      directives: [{
        name: "show",
        rawName: "v-show",
        value: detail_invoice.is_imei && detail_invoice.imei_number !== null,
        expression: "detail_invoice.is_imei && detail_invoice.imei_number !==null "
      }]
    }, [_vm._v(_vm._s(_vm.$t("IMEI_SN")) + " : " + _vm._s(detail_invoice.imei_number))]), _vm._v(" "), _c("br"), _vm._v(" "), _c("small", [_vm._v(_vm._s(_vm.formatNumber(detail_invoice.quantity, 2)) + " " + _vm._s(detail_invoice.unit_sale) + " x " + _vm._s(_vm.formatPriceDisplay(detail_invoice.total / detail_invoice.quantity, 2)))])]), _vm._v(" "), _c("td", {
      staticStyle: {
        "text-align": "right",
        "vertical-align": "bottom"
      }
    }, [_vm._v("\n                    " + _vm._s(_vm.formatPriceWithSymbol(_vm.invoice_pos.symbol, detail_invoice.total, 2)) + "\n                  ")])]);
  }), 0)]), _vm._v(" "), _c("table", {
    staticClass: "table_data w-100 mt-2",
    staticStyle: {
      "font-size": "11px"
    }
  }, [_c("tbody", [_c("tr", [_c("td", {
    staticClass: "total"
  }, [_vm._v(_vm._s(_vm.$t("pos.Subtotal")))]), _vm._v(" "), _c("td", {
    staticClass: "total",
    staticStyle: {
      "text-align": "right"
    }
  }, [_vm._v("\n                    " + _vm._s(_vm.formatPriceWithSymbol(_vm.invoice_pos.symbol, _vm.invoiceSubtotal, 2)) + "\n                  ")])]), _vm._v(" "), _c("tr", {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: _vm.pos_settings.show_tax,
      expression: "pos_settings.show_tax"
    }]
  }, [_c("td", {
    staticClass: "total"
  }, [_vm._v(_vm._s(_vm.$t("OrderTax")))]), _vm._v(" "), _c("td", {
    staticClass: "total",
    staticStyle: {
      "text-align": "right"
    }
  }, [_vm._v("\n                    " + _vm._s(_vm.formatPriceWithSymbol(_vm.invoice_pos.symbol, _vm.invoice_pos.sale.taxe, 2)) + " (" + _vm._s(_vm.formatNumber(_vm.invoice_pos.sale.tax_rate, 2)) + " %)\n                  ")])]), _vm._v(" "), _c("tr", {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: _vm.pos_settings.show_discount,
      expression: "pos_settings.show_discount"
    }]
  }, [_c("td", {
    staticClass: "total"
  }, [_vm._v(_vm._s(_vm.$t("Discount")))]), _vm._v(" "), _c("td", {
    staticClass: "total",
    staticStyle: {
      "text-align": "right"
    }
  }, [String(_vm.invoice_pos.sale.discount_Method || "2") === "1" ? [_vm._v("\n                      " + _vm._s(_vm.formatNumber(_vm.invoice_pos.sale.discount, 2)) + "% (" + _vm._s(_vm.formatPriceWithSymbol(_vm.invoice_pos.symbol, _vm.calculatedManualDiscountAmount, 2)) + ")\n                    ")] : [_vm._v("\n                      " + _vm._s(_vm.formatPriceWithSymbol(_vm.invoice_pos.symbol, _vm.calculatedManualDiscountAmount, 2)) + "\n                    ")]], 2)]), _vm._v(" "), _c("tr", {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: _vm.pos_settings.show_discount && _vm.invoice_pos.sale.discount_from_points && Number(_vm.invoice_pos.sale.discount_from_points) > 0,
      expression: "pos_settings.show_discount && invoice_pos.sale.discount_from_points && Number(invoice_pos.sale.discount_from_points) > 0"
    }]
  }, [_c("td", {
    staticClass: "total"
  }, [_vm._v(_vm._s(_vm.$t("Discount_from_Points")))]), _vm._v(" "), _c("td", {
    staticClass: "total",
    staticStyle: {
      "text-align": "right"
    }
  }, [_vm._v("\n                    " + _vm._s(_vm.formatPriceWithSymbol(_vm.invoice_pos.symbol, _vm.invoice_pos.sale.discount_from_points, 2)) + "\n                  ")])]), _vm._v(" "), _c("tr", {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: _vm.pos_settings.show_shipping,
      expression: "pos_settings.show_shipping"
    }]
  }, [_c("td", {
    staticClass: "total"
  }, [_vm._v(_vm._s(_vm.$t("Shipping")))]), _vm._v(" "), _c("td", {
    staticClass: "total",
    staticStyle: {
      "text-align": "right"
    }
  }, [_vm._v("\n                    " + _vm._s(_vm.formatPriceWithSymbol(_vm.invoice_pos.symbol, _vm.invoice_pos.sale.shipping, 2)) + "\n                  ")])]), _vm._v(" "), _c("tr", [_c("td", {
    staticClass: "total"
  }, [_vm._v(_vm._s(_vm.$t("Total")))]), _vm._v(" "), _c("td", {
    staticClass: "total",
    staticStyle: {
      "text-align": "right"
    }
  }, [_vm._v("\n                    " + _vm._s(_vm.formatPriceWithSymbol(_vm.invoice_pos.symbol, _vm.invoice_pos.sale.GrandTotal, 2)) + "\n                  ")])]), _vm._v(" "), _c("tr", {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: _vm.pos_settings.show_paid !== 0,
      expression: "pos_settings.show_paid !== 0"
    }]
  }, [_c("td", {
    staticClass: "total"
  }, [_vm._v(_vm._s(_vm.$t("Paid")))]), _vm._v(" "), _c("td", {
    staticClass: "total",
    staticStyle: {
      "text-align": "right"
    }
  }, [_vm._v("\n                    " + _vm._s(_vm.formatPriceWithSymbol(_vm.invoice_pos.symbol, _vm.invoice_pos.sale.paid_amount, 2)) + "\n                  ")])]), _vm._v(" "), _c("tr", {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: _vm.pos_settings.show_due !== 0,
      expression: "pos_settings.show_due !== 0"
    }]
  }, [_c("td", {
    staticClass: "total"
  }, [_vm._v(_vm._s(_vm.$t("Due")))]), _vm._v(" "), _c("td", {
    staticClass: "total",
    staticStyle: {
      "text-align": "right"
    }
  }, [_vm._v("\n                    " + _vm._s(_vm.formatPriceWithSymbol(_vm.invoice_pos.symbol, _vm.invoice_pos.sale.GrandTotal - _vm.invoice_pos.sale.paid_amount, 2)) + "\n                  ")])])])]), _vm._v(" "), _c("table", {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: _vm.pos_settings.show_payments !== 0 && _vm.invoice_pos.sale.paid_amount > 0,
      expression: "pos_settings.show_payments !== 0 && invoice_pos.sale.paid_amount > 0"
    }],
    staticClass: "change mt-3",
    staticStyle: {
      "font-size": "10px",
      width: "100%"
    }
  }, [_c("thead", [_c("tr", {
    staticStyle: {
      background: "#eee"
    }
  }, [_c("th", {
    staticStyle: {
      "text-align": "left"
    },
    attrs: {
      colspan: "1"
    }
  }, [_vm._v(_vm._s(_vm.$t("PayeBy")) + ":")]), _vm._v(" "), _c("th", {
    staticStyle: {
      "text-align": "center"
    },
    attrs: {
      colspan: "2"
    }
  }, [_vm._v(_vm._s(_vm.$t("Amount")) + ":")]), _vm._v(" "), _c("th", {
    staticStyle: {
      "text-align": "right"
    },
    attrs: {
      colspan: "1"
    }
  }, [_vm._v(_vm._s(_vm.$t("Change")) + ":")])])]), _vm._v(" "), _c("tbody", _vm._l(_vm.payments, function (payment_pos) {
    return _c("tr", [_c("td", {
      staticStyle: {
        "text-align": "left"
      },
      attrs: {
        colspan: "1"
      }
    }, [_vm._v(_vm._s(payment_pos.payment_method ? payment_pos.payment_method.name : "---"))]), _vm._v(" "), _c("td", {
      staticStyle: {
        "text-align": "center"
      },
      attrs: {
        colspan: "2"
      }
    }, [_vm._v("\n                    " + _vm._s(_vm.formatNumber(payment_pos.montant, 2)) + "\n                  ")]), _vm._v(" "), _c("td", {
      staticStyle: {
        "text-align": "right"
      },
      attrs: {
        colspan: "1"
      }
    }, [_vm._v("\n                    " + _vm._s(_vm.formatNumber(payment_pos.change, 2)) + "\n                  ")])]);
  }), 0)]), _vm._v(" "), _c("div", {
    staticClass: "ml-2",
    attrs: {
      id: "legalcopy"
    }
  }, [_c("p", {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: _vm.pos_settings.show_note,
      expression: "pos_settings.show_note"
    }],
    staticClass: "legal"
  }, [_c("strong", [_vm._v(_vm._s(_vm.pos_settings.note_customer))])]), _vm._v(" "), _vm.invoice_pos.setting && _vm.invoice_pos.setting.zatca_enabled && _vm.invoice_pos.zatca_qr && _vm.pos_settings.show_zatca_qr !== 0 ? _c("div", {
    staticClass: "mt-2 text-center"
  }, [_c("div", {
    staticClass: "zatca-qr"
  }, [_c("div", {
    staticClass: "zatca-qr-title"
  }, [_vm._v("ZATCA")]), _vm._v(" "), _c("div", {
    ref: "zatcaQrcodePos"
  })])]) : _vm._e(), _vm._v(" "), _vm.pos_settings.show_barcode !== 0 && _vm.invoice_pos.sale && _vm.invoice_pos.sale.Ref ? _c("div", {
    staticClass: "mt-2 text-center"
  }, [_c("barcode", {
    attrs: {
      value: _vm.invoice_pos.sale.Ref,
      format: _vm.barcodeFormat,
      textmargin: "0",
      fontSize: "12",
      height: "40",
      width: "1"
    }
  })], 1) : _vm._e()])])])]), _vm._v(" "), _c("button", {
    staticClass: "btn btn-outline-primary",
    on: {
      click: function click($event) {
        return _vm.print_pos();
      }
    }
  }, [_c("i", {
    staticClass: "i-Billing"
  }), _vm._v("\n          " + _vm._s(_vm.$t("print")) + "\n        ")])]), _vm._v(" "), _c("b-modal", {
    attrs: {
      id: "show_draft_sales",
      size: "lg",
      "hide-footer": "",
      title: _vm.$t("Recent_Drafts")
    }
  }, [_c("div", [_c("table", {
    staticClass: "table table-sm"
  }, [_c("thead", [_c("tr", [_c("th", [_vm._v(_vm._s(_vm.$t("date")))]), _vm._v(" "), _c("th", [_vm._v(_vm._s(_vm.$t("Reference")))]), _vm._v(" "), _c("th", [_vm._v(_vm._s(_vm.$t("Customer")))]), _vm._v(" "), _c("th", {
    staticClass: "text-right"
  }, [_vm._v(_vm._s(_vm.$t("Total")))]), _vm._v(" "), _c("th", {
    staticClass: "text-right"
  }, [_vm._v(_vm._s(_vm.$t("Action")))])])]), _vm._v(" "), _c("tbody", [_vm.draft_sales.length === 0 ? _c("tr", [_c("td", {
    staticClass: "text-center text-muted py-3",
    attrs: {
      colspan: "5"
    }
  }, [_vm._v(_vm._s(_vm.$t("NodataAvailable")))])]) : _vm._e(), _vm._v(" "), _vm._l(_vm.draft_sales, function (d) {
    return _c("tr", {
      key: d.id
    }, [_c("td", [_vm._v(_vm._s(d.date))]), _vm._v(" "), _c("td", [_vm._v(_vm._s(d.Ref))]), _vm._v(" "), _c("td", [_vm._v(_vm._s(d.client_name))]), _vm._v(" "), _c("td", {
      staticClass: "text-right"
    }, [_vm._v(_vm._s(_vm.formatNumber(d.GrandTotal, 2)))]), _vm._v(" "), _c("td", {
      staticClass: "text-right"
    }, [_c("b-button", {
      staticClass: "mr-2",
      attrs: {
        size: "sm",
        variant: "outline-success",
        disabled: _vm.openingDraftId === d.id,
        title: _vm.openingDraftId === d.id ? _vm.$t("Loading") : _vm.$t("Open")
      },
      on: {
        click: function click($event) {
          return _vm.loadDraftSale(d.id);
        }
      }
    }, [_vm.openingDraftId === d.id ? [_c("span", {
      staticClass: "spinner sm spinner-primary"
    })] : [_c("i", {
      staticClass: "i-Arrow-Right"
    })]], 2), _vm._v(" "), _c("b-button", {
      attrs: {
        size: "sm",
        variant: "outline-danger",
        title: _vm.$t("Delete")
      },
      on: {
        click: function click($event) {
          return _vm.Remove_Draft_Sale(d.id);
        }
      }
    }, [_c("i", {
      staticClass: "i-Remove"
    })])], 1)]);
  })], 2)]), _vm._v(" "), _vm.totalRows_draft_sales > _vm.limit ? _c("div", {
    staticClass: "d-flex justify-content-between align-items-center mt-3"
  }, [_c("div", {
    staticClass: "text-muted"
  }, [_vm._v("\n        " + _vm._s(_vm.$t("Showing")) + " " + _vm._s(_vm.draft_sales.length) + " " + _vm._s(_vm.$t("of")) + " " + _vm._s(_vm.totalRows_draft_sales) + " " + _vm._s(_vm.$t("entries")) + "\n      ")]), _vm._v(" "), _c("b-pagination", {
    attrs: {
      "total-rows": _vm.totalRows_draft_sales,
      "per-page": parseInt(_vm.limit),
      align: "right",
      size: "sm"
    },
    on: {
      change: _vm.onPageChangeDraftSales
    },
    model: {
      value: _vm.draft_sales_page,
      callback: function callback($$v) {
        _vm.draft_sales_page = $$v;
      },
      expression: "draft_sales_page"
    }
  })], 1) : _vm._e()])]), _vm._v(" "), _c("validation-observer", {
    ref: "Update_Detail"
  }, [_c("b-modal", {
    attrs: {
      "hide-footer": "",
      size: "lg",
      id: "form_Update_Detail",
      title: _vm.detail.name
    }
  }, [_c("b-form", {
    on: {
      submit: function submit($event) {
        $event.preventDefault();
        return _vm.submit_Update_Detail.apply(null, arguments);
      }
    }
  }, [_c("b-row", [_vm.detailLoading ? _c("b-col", {
    staticClass: "mb-2",
    attrs: {
      lg: "12"
    }
  }, [_c("div", {
    staticClass: "text-center py-3"
  }, [_c("div", {
    staticClass: "spinner sm spinner-primary"
  })])]) : _vm._e(), _vm._v(" "), _c("b-col", {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: !_vm.detailLoading,
      expression: "!detailLoading"
    }],
    attrs: {
      lg: "6",
      md: "6",
      sm: "12"
    }
  }, [_c("validation-provider", {
    attrs: {
      name: "Product Price",
      rules: {
        required: true,
        regex: /^\d*\.?\d*$/
      }
    },
    scopedSlots: _vm._u([{
      key: "default",
      fn: function fn(validationContext) {
        return [_c("b-form-group", {
          attrs: {
            label: _vm.$t("ProductPrice") + " " + "*",
            id: "Price-input"
          }
        }, [_c("div", {
          staticClass: "d-flex align-items-center"
        }, [_c("b-form-input", {
          staticClass: "mr-2",
          attrs: {
            label: "Product Price",
            state: _vm.getValidationState(validationContext),
            "aria-describedby": "Price-feedback"
          },
          model: {
            value: _vm.detail.Unit_price,
            callback: function callback($$v) {
              _vm.$set(_vm.detail, "Unit_price", $$v);
            },
            expression: "detail.Unit_price"
          }
        }), _vm._v(" "), _c("select", {
          directives: [{
            name: "model",
            rawName: "v-model",
            value: _vm.detail.price_type,
            expression: "detail.price_type"
          }],
          staticClass: "form-control pos-price-select",
          on: {
            change: [function ($event) {
              var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
                return o.selected;
              }).map(function (o) {
                var val = "_value" in o ? o._value : o.value;
                return val;
              });
              _vm.$set(_vm.detail, "price_type", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
            }, function ($event) {
              return _vm.onChangePriceType(_vm.detail);
            }]
          }
        }, [_c("option", {
          domProps: {
            value: "retail"
          }
        }, [_vm._v(_vm._s(_vm.$t("Retail Price")))]), _vm._v(" "), _c("option", {
          domProps: {
            value: "wholesale"
          }
        }, [_vm._v(_vm._s(_vm.$t("Wholesale Price")))])])], 1), _vm._v(" "), _c("b-form-invalid-feedback", {
          attrs: {
            id: "Price-feedback"
          }
        }, [_vm._v(_vm._s(validationContext.errors[0]))])], 1)];
      }
    }], null, false, 1104695017)
  })], 1), _vm._v(" "), _vm.detail.product_type != "is_service" ? _c("b-col", {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: !_vm.detailLoading,
      expression: "!detailLoading"
    }],
    attrs: {
      lg: "6",
      md: "6",
      sm: "12"
    }
  }, [_c("validation-provider", {
    attrs: {
      name: "Unit Sale",
      rules: {
        required: true
      }
    },
    scopedSlots: _vm._u([{
      key: "default",
      fn: function fn(_ref) {
        var valid = _ref.valid,
          errors = _ref.errors;
        return _c("b-form-group", {
          attrs: {
            label: _vm.$t("UnitSale") + " " + "*"
          }
        }, [_c("v-select", {
          "class": {
            "is-invalid": !!errors.length
          },
          attrs: {
            state: errors[0] ? false : valid ? true : null,
            placeholder: _vm.$t("Choose_Unit_Sale"),
            reduce: function reduce(label) {
              return label.value;
            },
            options: _vm.units.map(function (units) {
              return {
                label: units.name,
                value: units.id
              };
            })
          },
          model: {
            value: _vm.detail.sale_unit_id,
            callback: function callback($$v) {
              _vm.$set(_vm.detail, "sale_unit_id", $$v);
            },
            expression: "detail.sale_unit_id"
          }
        }), _vm._v(" "), _c("b-form-invalid-feedback", [_vm._v(_vm._s(errors[0]))])], 1);
      }
    }], null, false, 1636962053)
  })], 1) : _vm._e(), _vm._v(" "), _c("b-col", {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: !_vm.detailLoading,
      expression: "!detailLoading"
    }],
    attrs: {
      lg: "6",
      md: "6",
      sm: "12"
    }
  }, [_c("validation-provider", {
    attrs: {
      name: "Tax",
      rules: {
        required: true,
        regex: /^\d*\.?\d*$/
      }
    },
    scopedSlots: _vm._u([{
      key: "default",
      fn: function fn(validationContext) {
        return [_c("b-form-group", {
          attrs: {
            label: _vm.$t("Tax") + " " + "*"
          }
        }, [_c("b-input-group", {
          attrs: {
            append: "%"
          }
        }, [_c("b-form-input", {
          attrs: {
            label: "Tax",
            state: _vm.getValidationState(validationContext),
            "aria-describedby": "Tax-feedback"
          },
          model: {
            value: _vm.detail.tax_percent,
            callback: function callback($$v) {
              _vm.$set(_vm.detail, "tax_percent", $$v);
            },
            expression: "detail.tax_percent"
          }
        })], 1), _vm._v(" "), _c("b-form-invalid-feedback", {
          attrs: {
            id: "Tax-feedback"
          }
        }, [_vm._v(_vm._s(validationContext.errors[0]))])], 1)];
      }
    }], null, false, 3285426138)
  })], 1), _vm._v(" "), _c("b-col", {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: !_vm.detailLoading,
      expression: "!detailLoading"
    }],
    attrs: {
      lg: "6",
      md: "6",
      sm: "12"
    }
  }, [_c("validation-provider", {
    attrs: {
      name: "Tax Method",
      rules: {
        required: true
      }
    },
    scopedSlots: _vm._u([{
      key: "default",
      fn: function fn(_ref2) {
        var valid = _ref2.valid,
          errors = _ref2.errors;
        return _c("b-form-group", {
          attrs: {
            label: _vm.$t("TaxMethod") + " " + "*"
          }
        }, [_c("v-select", {
          "class": {
            "is-invalid": !!errors.length
          },
          attrs: {
            state: errors[0] ? false : valid ? true : null,
            reduce: function reduce(label) {
              return label.value;
            },
            placeholder: _vm.$t("Choose_Method"),
            options: [{
              label: "Exclusive",
              value: 1
            }, {
              label: "Inclusive",
              value: 2
            }]
          },
          model: {
            value: _vm.detail.tax_method,
            callback: function callback($$v) {
              _vm.$set(_vm.detail, "tax_method", $$v);
            },
            expression: "detail.tax_method"
          }
        }), _vm._v(" "), _c("b-form-invalid-feedback", [_vm._v(_vm._s(errors[0]))])], 1);
      }
    }], null, false, 136883503)
  })], 1), _vm._v(" "), _c("b-col", {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: !_vm.detailLoading,
      expression: "!detailLoading"
    }],
    attrs: {
      lg: "6",
      md: "6",
      sm: "12"
    }
  }, [_c("validation-provider", {
    attrs: {
      name: "Discount Rate",
      rules: {
        required: true,
        regex: /^\d*\.?\d*$/
      }
    },
    scopedSlots: _vm._u([{
      key: "default",
      fn: function fn(validationContext) {
        return [_c("b-form-group", {
          attrs: {
            label: _vm.$t("Discount") + " " + "*"
          }
        }, [_c("b-form-input", {
          attrs: {
            label: "Discount",
            state: _vm.getValidationState(validationContext),
            "aria-describedby": "Discount-feedback"
          },
          model: {
            value: _vm.detail.discount,
            callback: function callback($$v) {
              _vm.$set(_vm.detail, "discount", $$v);
            },
            expression: "detail.discount"
          }
        }), _vm._v(" "), _c("b-form-invalid-feedback", {
          attrs: {
            id: "Discount-feedback"
          }
        }, [_vm._v(_vm._s(validationContext.errors[0]))])], 1)];
      }
    }], null, false, 378765320)
  })], 1), _vm._v(" "), _c("b-col", {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: !_vm.detailLoading,
      expression: "!detailLoading"
    }],
    attrs: {
      lg: "6",
      md: "6",
      sm: "12"
    }
  }, [_c("validation-provider", {
    attrs: {
      name: "Discount Method",
      rules: {
        required: true
      }
    },
    scopedSlots: _vm._u([{
      key: "default",
      fn: function fn(_ref3) {
        var valid = _ref3.valid,
          errors = _ref3.errors;
        return _c("b-form-group", {
          attrs: {
            label: _vm.$t("Discount_Method") + " " + "*"
          }
        }, [_c("v-select", {
          "class": {
            "is-invalid": !!errors.length
          },
          attrs: {
            reduce: function reduce(label) {
              return label.value;
            },
            placeholder: _vm.$t("Choose_Method"),
            state: errors[0] ? false : valid ? true : null,
            options: [{
              label: "Percent %",
              value: "1"
            }, {
              label: "Fixed",
              value: "2"
            }]
          },
          model: {
            value: _vm.detail.discount_Method,
            callback: function callback($$v) {
              _vm.$set(_vm.detail, "discount_Method", $$v);
            },
            expression: "detail.discount_Method"
          }
        }), _vm._v(" "), _c("b-form-invalid-feedback", [_vm._v(_vm._s(errors[0]))])], 1);
      }
    }], null, false, 115683714)
  })], 1), _vm._v(" "), _c("b-col", {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: _vm.detail.is_imei && !_vm.detailLoading,
      expression: "detail.is_imei && !detailLoading"
    }],
    attrs: {
      lg: "12",
      md: "12",
      sm: "12"
    }
  }, [_c("b-form-group", {
    attrs: {
      label: _vm.$t("Add_product_IMEI_Serial_number")
    }
  }, [_c("b-form-input", {
    attrs: {
      label: "Add_product_IMEI_Serial_number",
      placeholder: _vm.$t("Add_product_IMEI_Serial_number")
    },
    model: {
      value: _vm.detail.imei_number,
      callback: function callback($$v) {
        _vm.$set(_vm.detail, "imei_number", $$v);
      },
      expression: "detail.imei_number"
    }
  })], 1)], 1), _vm._v(" "), _c("b-col", {
    attrs: {
      md: "12"
    }
  }, [_c("b-form-group", [_c("b-button", {
    attrs: {
      variant: "primary",
      type: "submit"
    }
  }, [_vm._v(_vm._s(_vm.$t("submit")))])], 1)], 1)], 1)], 1)], 1)], 1), _vm._v(" "), _c("validation-observer", {
    ref: "Create_Customer"
  }, [_c("b-modal", {
    attrs: {
      id: "New_Customer",
      "hide-footer": "",
      size: "lg",
      title: _vm.$t("New_Customer")
    }
  }, [_c("b-form", {
    staticClass: "new-customer-form",
    on: {
      submit: function submit($event) {
        $event.preventDefault();
        return _vm.Submit_Customer.apply(null, arguments);
      }
    }
  }, [_c("b-row", [_c("b-col", {
    attrs: {
      md: "6",
      sm: "12"
    }
  }, [_c("b-form-group", {
    attrs: {
      label: _vm.$t("Name")
    }
  }, [_c("b-form-input", {
    attrs: {
      placeholder: _vm.$t("Name"),
      required: ""
    },
    model: {
      value: _vm.client.name,
      callback: function callback($$v) {
        _vm.$set(_vm.client, "name", $$v);
      },
      expression: "client.name"
    }
  })], 1)], 1), _vm._v(" "), _c("b-col", {
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
      type: "email",
      placeholder: _vm.$t("Email")
    },
    model: {
      value: _vm.client.email,
      callback: function callback($$v) {
        _vm.$set(_vm.client, "email", $$v);
      },
      expression: "client.email"
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
      placeholder: _vm.$t("Phone")
    },
    model: {
      value: _vm.client.phone,
      callback: function callback($$v) {
        _vm.$set(_vm.client, "phone", $$v);
      },
      expression: "client.phone"
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
      placeholder: _vm.$t("Tax_Number")
    },
    model: {
      value: _vm.client.tax_number,
      callback: function callback($$v) {
        _vm.$set(_vm.client, "tax_number", $$v);
      },
      expression: "client.tax_number"
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
      placeholder: _vm.$t("Country")
    },
    model: {
      value: _vm.client.country,
      callback: function callback($$v) {
        _vm.$set(_vm.client, "country", $$v);
      },
      expression: "client.country"
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
      placeholder: _vm.$t("City")
    },
    model: {
      value: _vm.client.city,
      callback: function callback($$v) {
        _vm.$set(_vm.client, "city", $$v);
      },
      expression: "client.city"
    }
  })], 1)], 1), _vm._v(" "), _c("b-col", {
    attrs: {
      md: "12"
    }
  }, [_c("b-form-group", {
    attrs: {
      label: _vm.$t("Adress")
    }
  }, [_c("b-form-input", {
    attrs: {
      placeholder: _vm.$t("Adress")
    },
    model: {
      value: _vm.client.adresse,
      callback: function callback($$v) {
        _vm.$set(_vm.client, "adresse", $$v);
      },
      expression: "client.adresse"
    }
  })], 1)], 1), _vm._v(" "), _c("b-col", {
    attrs: {
      md: "12"
    }
  }, [_c("b-form-group", [_c("div", {
    staticClass: "loyalty-eligible-row"
  }, [_c("b-form-checkbox", {
    staticClass: "mb-0 loyalty-switch",
    attrs: {
      "switch": ""
    },
    model: {
      value: _vm.client.is_royalty_eligible,
      callback: function callback($$v) {
        _vm.$set(_vm.client, "is_royalty_eligible", $$v);
      },
      expression: "client.is_royalty_eligible"
    }
  }, [_vm._v("\n              " + _vm._s(_vm.$t("Loyalty_Eligible")) + "\n            ")]), _vm._v(" "), _c("small", {
    staticClass: "loyalty-help text-muted"
  }, [_vm._v(_vm._s(_vm.$t("Loyalty_Points_Help")))])], 1)])], 1), _vm._v(" "), _c("b-col", {
    staticClass: "d-flex justify-content-end",
    attrs: {
      cols: "12"
    }
  }, [_c("b-button", {
    staticClass: "mr-2",
    attrs: {
      variant: "secondary"
    },
    on: {
      click: function click($event) {
        return _vm.$bvModal.hide("New_Customer");
      }
    }
  }, [_vm._v(_vm._s(_vm.$t("Close")))]), _vm._v(" "), _c("b-button", {
    attrs: {
      variant: "primary",
      type: "submit"
    }
  }, [_vm._v(_vm._s(_vm.$t("Save")))])], 1)], 1)], 1)], 1)], 1), _vm._v(" "), _c("validation-observer", {
    ref: "Quick_Add_Customer_Form"
  }, [_c("b-modal", {
    attrs: {
      "hide-footer": "",
      size: "lg",
      id: "Quick_Add_Customer",
      title: _vm.$t("Quick_Add_Customer")
    }
  }, [_c("b-form", {
    staticClass: "quick-add-customer-form",
    on: {
      submit: function submit($event) {
        $event.preventDefault();
        return _vm.Submit_Quick_Add_Customer.apply(null, arguments);
      }
    }
  }, [_c("b-row", [_c("b-col", {
    attrs: {
      md: "6",
      sm: "12"
    }
  }, [_c("validation-provider", {
    attrs: {
      name: "Name Customer",
      rules: {
        required: true
      }
    },
    scopedSlots: _vm._u([{
      key: "default",
      fn: function fn(validationContext) {
        return [_c("b-form-group", {
          attrs: {
            label: _vm.$t("CustomerName") + " " + "*"
          }
        }, [_c("b-form-input", {
          attrs: {
            state: _vm.getValidationState(validationContext),
            "aria-describedby": "name-feedback",
            label: "name",
            placeholder: _vm.$t("CustomerName")
          },
          model: {
            value: _vm.client.name,
            callback: function callback($$v) {
              _vm.$set(_vm.client, "name", $$v);
            },
            expression: "client.name"
          }
        }), _vm._v(" "), _c("b-form-invalid-feedback", {
          attrs: {
            id: "name-feedback"
          }
        }, [_vm._v(_vm._s(validationContext.errors[0]))])], 1)];
      }
    }], null, false, 1765869017)
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
      value: _vm.client.email,
      callback: function callback($$v) {
        _vm.$set(_vm.client, "email", $$v);
      },
      expression: "client.email"
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
      value: _vm.client.phone,
      callback: function callback($$v) {
        _vm.$set(_vm.client, "phone", $$v);
      },
      expression: "client.phone"
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
      value: _vm.client.country,
      callback: function callback($$v) {
        _vm.$set(_vm.client, "country", $$v);
      },
      expression: "client.country"
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
      value: _vm.client.city,
      callback: function callback($$v) {
        _vm.$set(_vm.client, "city", $$v);
      },
      expression: "client.city"
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
      label: "Tax Number",
      placeholder: _vm.$t("Tax_Number")
    },
    model: {
      value: _vm.client.tax_number,
      callback: function callback($$v) {
        _vm.$set(_vm.client, "tax_number", $$v);
      },
      expression: "client.tax_number"
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
      value: _vm.client.adresse,
      expression: "client.adresse"
    }],
    staticClass: "form-control",
    attrs: {
      label: "Adress",
      rows: "4",
      placeholder: _vm.$t("Adress")
    },
    domProps: {
      value: _vm.client.adresse
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.client, "adresse", $event.target.value);
      }
    }
  })])], 1), _vm._v(" "), _c("b-col", {
    staticClass: "mt-4 mb-4",
    attrs: {
      md: "6",
      sm: "12"
    }
  }, [_c("div", {
    staticClass: "psx-form-check"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.client.is_royalty_eligible,
      expression: "client.is_royalty_eligible"
    }],
    staticClass: "psx-checkbox psx-form-check-input",
    attrs: {
      type: "checkbox",
      id: "is_royalty_eligible"
    },
    domProps: {
      checked: Array.isArray(_vm.client.is_royalty_eligible) ? _vm._i(_vm.client.is_royalty_eligible, null) > -1 : _vm.client.is_royalty_eligible
    },
    on: {
      change: function change($event) {
        var $$a = _vm.client.is_royalty_eligible,
          $$el = $event.target,
          $$c = $$el.checked ? true : false;
        if (Array.isArray($$a)) {
          var $$v = null,
            $$i = _vm._i($$a, $$v);
          if ($$el.checked) {
            $$i < 0 && _vm.$set(_vm.client, "is_royalty_eligible", $$a.concat([$$v]));
          } else {
            $$i > -1 && _vm.$set(_vm.client, "is_royalty_eligible", $$a.slice(0, $$i).concat($$a.slice($$i + 1)));
          }
        } else {
          _vm.$set(_vm.client, "is_royalty_eligible", $$c);
        }
      }
    }
  }), _vm._v(" "), _c("label", {
    staticClass: "psx-form-check-label",
    attrs: {
      "for": "is_royalty_eligible"
    }
  }, [_c("h5", [_vm._v(_vm._s(_vm.$t("Is_Royalty_Eligible")))])])])]), _vm._v(" "), _c("b-col", {
    staticClass: "mt-3",
    attrs: {
      md: "12",
      sm: "12"
    }
  }, [_c("CustomFieldsForm", {
    attrs: {
      "entity-type": "client"
    },
    model: {
      value: _vm.quickAddCustomFieldValues,
      callback: function callback($$v) {
        _vm.quickAddCustomFieldValues = $$v;
      },
      expression: "quickAddCustomFieldValues"
    }
  })], 1), _vm._v(" "), _c("b-col", {
    staticClass: "mt-3",
    attrs: {
      md: "12"
    }
  }, [_c("b-button", {
    staticClass: "mr-2",
    attrs: {
      variant: "secondary"
    },
    on: {
      click: function click($event) {
        return _vm.$bvModal.hide("Quick_Add_Customer");
      }
    }
  }, [_vm._v(_vm._s(_vm.$t("Cancel")))]), _vm._v(" "), _c("b-button", {
    attrs: {
      variant: "primary",
      type: "submit",
      disabled: _vm.SubmitProcessing
    }
  }, [_vm._v(_vm._s(_vm.$t("submit")))]), _vm._v(" "), _vm.SubmitProcessing ? _vm._m(0) : _vm._e()], 1)], 1)], 1)], 1)], 1), _vm._v(" "), _c("b-modal", {
    attrs: {
      id: "modal_today_sales",
      "hide-footer": "",
      size: "lg",
      title: _vm.$t("Today_Sales")
    }
  }, [_c("div", {
    staticClass: "today-sales-grid"
  }, [_c("div", {
    staticClass: "ts-card"
  }, [_c("div", {
    staticClass: "ts-icon primary"
  }, [_c("i", {
    staticClass: "i-Money-2"
  })]), _vm._v(" "), _c("div", {
    staticClass: "ts-content"
  }, [_c("div", {
    staticClass: "ts-label"
  }, [_vm._v(_vm._s(_vm.$t("Total_Sales")))]), _vm._v(" "), _c("div", {
    staticClass: "ts-value"
  }, [_vm._v(_vm._s(_vm.formatPriceWithCurrentCurrency(_vm.today_sales.total_sales_amount || 0, 2)))])])]), _vm._v(" "), _c("div", {
    staticClass: "ts-card"
  }, [_c("div", {
    staticClass: "ts-icon success"
  }, [_c("i", {
    staticClass: "i-Yes"
  })]), _vm._v(" "), _c("div", {
    staticClass: "ts-content"
  }, [_c("div", {
    staticClass: "ts-label"
  }, [_vm._v(_vm._s(_vm.$t("Total_Amount_Paid")))]), _vm._v(" "), _c("div", {
    staticClass: "ts-value"
  }, [_vm._v(_vm._s(_vm.formatPriceWithCurrentCurrency(_vm.today_sales.total_amount_paid || 0, 2)))])])]), _vm._v(" "), _vm._l(_vm.today_sales.payment_methods || [], function (method) {
    return _c("div", {
      key: method.id,
      staticClass: "ts-card"
    }, [_c("div", {
      staticClass: "ts-icon info"
    }, [_c("i", {
      staticClass: "i-Credit-Card"
    })]), _vm._v(" "), _c("div", {
      staticClass: "ts-content"
    }, [_c("div", {
      staticClass: "ts-label"
    }, [_vm._v(_vm._s(method.name))]), _vm._v(" "), _c("div", {
      staticClass: "ts-value"
    }, [_vm._v("\n          " + _vm._s(_vm.formatPriceWithCurrentCurrency(method.total || 0, 2)) + "\n        ")])])]);
  })], 2)]), _vm._v(" "), _c("div", {
    staticClass: "products-container"
  }, [_vm.paginated_Products.length === 0 ? _c("div", {
    staticClass: "empty-state"
  }, [_c("svg", {
    attrs: {
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor"
    }
  }, [_c("circle", {
    attrs: {
      cx: "11",
      cy: "11",
      r: "8"
    }
  }), _vm._v(" "), _c("path", {
    attrs: {
      d: "m21 21-4.35-4.35"
    }
  })]), _vm._v(" "), _c("p", [_vm._v(_vm._s(_vm.$t("pos.No_products_found")))])]) : _c("div", {
    staticClass: "products-grid"
  }, _vm._l(_vm.paginated_Products, function (product) {
    return _c("div", {
      key: product.product_variant_id ? product.id + "-" + product.product_variant_id : product.id,
      staticClass: "product-card",
      on: {
        click: function click($event) {
          return _vm.handleProductClick(product);
        }
      }
    }, [_vm.uiLoadingProductId === (product.product_variant_id ? product.id + "-" + product.product_variant_id : product.id) ? _c("div", {
      staticClass: "card-loading-overlay"
    }, [_c("div", {
      staticClass: "spinner sm spinner-primary"
    })]) : _vm._e(), _vm._v(" "), _vm.pos_settings.show_product_images ? _c("div", {
      staticClass: "product-image-wrapper"
    }, [product.image ? _c("img", {
      staticClass: "product-image",
      attrs: {
        src: product.image_url || _vm.resolveProductImage(product.image),
        alt: product.name
      },
      on: {
        error: function error($event) {
          product.image_url ? product.image_url = null : product.image = null;
        }
      }
    }) : _c("div", {
      staticClass: "product-image-placeholder"
    }, [_vm._v(_vm._s(product.category ? product.category[0] : "P"))]), _vm._v(" "), product.discount ? _c("div", {
      staticClass: "discount-badge"
    }, [_vm._v("-" + _vm._s(product.discount) + "%")]) : _vm._e()]) : _vm._e(), _vm._v(" "), _c("div", {
      staticClass: "product-details"
    }, [_c("h4", {
      staticClass: "product-name"
    }, [_vm._v(_vm._s(product.name))]), _vm._v(" "), _c("p", {
      staticClass: "product-brand"
    }, [_vm._v(_vm._s(product.code))]), _vm._v(" "), product.product_type !== "is_service" && _vm.pos_settings.show_stock_quantity ? _c("p", {
      staticClass: "product-stock"
    }, [_vm._v("\n                " + _vm._s(_vm.formatNumber(product.qte_sale, 2)) + " " + _vm._s(product.unitSale) + "\n              ")]) : _vm._e(), _vm._v(" "), _c("div", {
      staticClass: "product-footer"
    }, [_c("span", {
      staticClass: "product-price"
    }, [_vm._v(_vm._s(_vm.formatPriceWithCurrentCurrency(product.Net_price, 2)))]), _vm._v(" "), _c("button", {
      staticClass: "add-to-cart-btn",
      attrs: {
        disabled: product.product_type !== "is_service" && product.qte_sale <= 0,
        title: _vm.$t("pos.Add_to_cart")
      },
      on: {
        click: function click($event) {
          $event.stopPropagation();
          return _vm.handleProductClick(product);
        }
      }
    }, [_c("svg", {
      attrs: {
        viewBox: "0 0 24 24",
        fill: "currentColor"
      }
    }, [_c("path", {
      attrs: {
        d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5 11h-4v4h-2v-4H7v-2h4V7h2v4h4v2z"
      }
    })])])])])]);
  }), 0)]), _vm._v(" "), _vm.paginated_Products.length > 0 ? _c("div", {
    staticClass: "pagination-footer"
  }, [_c("button", {
    staticClass: "pagination-btn",
    attrs: {
      disabled: _vm.product_currentPage === 1,
      title: _vm.$t("pos.Previous_Page")
    },
    on: {
      click: function click($event) {
        return _vm.Product_onPageChanged(_vm.product_currentPage - 1);
      }
    }
  }, [_c("svg", {
    attrs: {
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      "stroke-width": "2"
    }
  }, [_c("polyline", {
    attrs: {
      points: "15 18 9 12 15 6"
    }
  })])]), _vm._v(" "), _c("div", {
    staticClass: "pagination-info"
  }, [_c("span", {
    staticClass: "page-number"
  }, [_vm._v(_vm._s(_vm.$t("pos.Page")) + " " + _vm._s(_vm.product_currentPage))]), _vm._v(" "), _c("span", {
    staticClass: "products-count"
  }, [_vm._v(_vm._s(_vm.product_totalRows) + " " + _vm._s(_vm.$t("pos.products")))])]), _vm._v(" "), _c("div", {
    staticClass: "pagination-dots"
  }, _vm._l(_vm.product_visiblePageItems, function (item, idx) {
    return _c("button", {
      key: "pp-".concat(idx, "-").concat(item),
      staticClass: "pagination-dot",
      "class": {
        active: item === _vm.product_currentPage,
        ellipsis: item === "…"
      },
      attrs: {
        disabled: item === "…",
        title: item === "…" ? "" : "".concat(_vm.$t("pos.Go_to_page"), " ").concat(item)
      },
      on: {
        click: function click($event) {
          return _vm.onProductPageItemClick(item);
        }
      }
    }, [_vm._v("\n            " + _vm._s(item) + "\n          ")]);
  }), 0), _vm._v(" "), _c("button", {
    staticClass: "pagination-btn",
    attrs: {
      disabled: _vm.product_currentPage === _vm.product_lastPage,
      title: _vm.$t("pos.Next_Page")
    },
    on: {
      click: function click($event) {
        return _vm.Product_onPageChanged(_vm.product_currentPage + 1);
      }
    }
  }, [_c("svg", {
    attrs: {
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      "stroke-width": "2"
    }
  }, [_c("polyline", {
    attrs: {
      points: "9 18 15 12 9 6"
    }
  })])])]) : _vm._e()], 1)]) : _vm._e(), _vm._v(" "), _c("b-modal", {
    attrs: {
      id: "OpenRegisterModal",
      title: _vm.$t("Open Register"),
      "hide-footer": ""
    }
  }, [_c("div", {
    staticClass: "form-group"
  }, [_c("label", [_vm._v(_vm._s(_vm.$t("warehouse")))]), _vm._v(" "), _c("b-form-select", {
    attrs: {
      options: _vm.warehouseOptions
    },
    model: {
      value: _vm.registerForm.warehouse_id,
      callback: function callback($$v) {
        _vm.$set(_vm.registerForm, "warehouse_id", $$v);
      },
      expression: "registerForm.warehouse_id"
    }
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "form-group"
  }, [_c("label", [_vm._v(_vm._s(_vm.$t("Opening_Balance")))]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model.number",
      value: _vm.registerForm.opening_balance,
      expression: "registerForm.opening_balance",
      modifiers: {
        number: true
      }
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      min: "0",
      step: "0.01"
    },
    domProps: {
      value: _vm.registerForm.opening_balance
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.registerForm, "opening_balance", _vm._n($event.target.value));
      },
      blur: function blur($event) {
        return _vm.$forceUpdate();
      }
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "form-group"
  }, [_c("label", [_vm._v(_vm._s(_vm.$t("notes")))]), _vm._v(" "), _c("textarea", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.registerForm.notes,
      expression: "registerForm.notes"
    }],
    staticClass: "form-control",
    domProps: {
      value: _vm.registerForm.notes
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.registerForm, "notes", $event.target.value);
      }
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "text-right"
  }, [_c("b-button", {
    staticClass: "mr-2",
    attrs: {
      variant: "secondary"
    },
    on: {
      click: function click($event) {
        return _vm.$bvModal.hide("OpenRegisterModal");
      }
    }
  }, [_vm._v(_vm._s(_vm.$t("Cancel")))]), _vm._v(" "), _c("b-button", {
    attrs: {
      variant: "success",
      disabled: _vm.registerBusy
    },
    on: {
      click: _vm.submitOpenRegister
    }
  }, [_vm._v(_vm._s(_vm.$t("Open Register")))])], 1)]), _vm._v(" "), _c("b-modal", {
    attrs: {
      id: "CloseRegisterModal",
      title: _vm.$t("Close Register"),
      "hide-footer": ""
    }
  }, [_c("div", {
    staticClass: "form-group"
  }, [_c("label", [_vm._v(_vm._s(_vm.$t("Counted_Cash")))]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model.number",
      value: _vm.closeForm.counted_cash,
      expression: "closeForm.counted_cash",
      modifiers: {
        number: true
      }
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      min: "0",
      step: "0.01"
    },
    domProps: {
      value: _vm.closeForm.counted_cash
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.closeForm, "counted_cash", _vm._n($event.target.value));
      },
      blur: function blur($event) {
        return _vm.$forceUpdate();
      }
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "form-group"
  }, [_c("label", [_vm._v(_vm._s(_vm.$t("Closing_Notes")))]), _vm._v(" "), _c("textarea", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.closeForm.notes,
      expression: "closeForm.notes"
    }],
    staticClass: "form-control",
    domProps: {
      value: _vm.closeForm.notes
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.closeForm, "notes", $event.target.value);
      }
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "text-right"
  }, [_c("b-button", {
    staticClass: "mr-2",
    attrs: {
      variant: "secondary"
    },
    on: {
      click: function click($event) {
        return _vm.$bvModal.hide("CloseRegisterModal");
      }
    }
  }, [_vm._v(_vm._s(_vm.$t("Cancel")))]), _vm._v(" "), _c("b-button", {
    attrs: {
      variant: "danger",
      disabled: _vm.registerBusy
    },
    on: {
      click: _vm.submitCloseRegister
    }
  }, [_vm._v(_vm._s(_vm.$t("Close Register")))])], 1)]), _vm._v(" "), _c("b-modal", {
    attrs: {
      id: "OnlineReloadModal",
      "hide-footer": true,
      "hide-header-close": true,
      "no-close-on-backdrop": true,
      "no-close-on-esc": true,
      size: "md",
      centered: "",
      title: _vm.$t("pos.InternetRestored") || "Internet connection restored"
    },
    model: {
      value: _vm.onlineReloadModalVisible,
      callback: function callback($$v) {
        _vm.onlineReloadModalVisible = $$v;
      },
      expression: "onlineReloadModalVisible"
    }
  }, [_c("p", {
    staticClass: "mb-3"
  }, [_vm._v("\n      " + _vm._s(_vm.$t("pos.ActiveCheckoutReloadQuestion") || "You have an active checkout. Would you like to reload the page now or after completing the sale?") + "\n    ")]), _vm._v(" "), _c("div", {
    staticClass: "d-flex justify-content-end"
  }, [_c("b-button", {
    staticClass: "mr-2",
    attrs: {
      variant: "outline-primary"
    },
    on: {
      click: _vm.onOnlineReloadAfterSale
    }
  }, [_vm._v("\n        " + _vm._s(_vm.$t("pos.ReloadAfterSale") || "After this sale") + "\n      ")]), _vm._v(" "), _c("b-button", {
    attrs: {
      variant: "primary"
    },
    on: {
      click: _vm.onOnlineReloadNow
    }
  }, [_vm._v("\n        " + _vm._s(_vm.$t("pos.ReloadNow") || "Reload now") + "\n      ")])], 1)]), _vm._v(" "), _vm.productsReady ? _c("div", {
    staticClass: "pos-footer-bar"
  }, [_c("div", {
    staticClass: "footer-status-indicator",
    "class": {
      "is-offline": !_vm.isOnline
    },
    attrs: {
      title: _vm.offlineStatusTitle
    }
  }, [_c("svg", {
    attrs: {
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      "stroke-width": "2"
    }
  }, [_vm.isOnline ? _c("path", {
    attrs: {
      d: "M5 12l4 4 10-10"
    }
  }) : _c("g", [_c("circle", {
    attrs: {
      cx: "12",
      cy: "12",
      r: "9"
    }
  }), _vm._v(" "), _c("line", {
    attrs: {
      x1: "8",
      y1: "8",
      x2: "16",
      y2: "16"
    }
  })])]), _vm._v(" "), _c("span", {
    staticClass: "status-text"
  }, [_vm._v("\n        " + _vm._s(_vm.isOnline ? _vm.$t("Online") || "Online" : _vm.$t("pos.Offline_Mode")) + "\n      ")])]), _vm._v(" "), _c("div", {
    staticClass: "footer-main-group"
  }, [_vm.isOnline ? _c("router-link", {
    staticClass: "action-btn action-btn-secondary",
    attrs: {
      to: "/app/dashboard",
      title: _vm.$t("pos.Home")
    }
  }, [_c("svg", {
    attrs: {
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      "stroke-width": "2"
    }
  }, [_c("path", {
    attrs: {
      d: "M3 11l9-8 9 8"
    }
  }), _vm._v(" "), _c("path", {
    attrs: {
      d: "M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-7"
    }
  })]), _vm._v(" "), _c("span", [_vm._v(_vm._s(_vm.$t("pos.Home")))])]) : _vm._e(), _vm._v(" "), _vm.isOnline ? _c("button", {
    staticClass: "action-btn action-btn-secondary",
    attrs: {
      title: _vm.$t("pos.Clear_all_items")
    },
    on: {
      click: _vm.Reset_Pos
    }
  }, [_c("svg", {
    attrs: {
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      "stroke-width": "2"
    }
  }, [_c("path", {
    attrs: {
      d: "M1 4v6h6"
    }
  }), _vm._v(" "), _c("path", {
    attrs: {
      d: "M23 20v-6h-6"
    }
  }), _vm._v(" "), _c("path", {
    attrs: {
      d: "M20.49 9A9 9 0 0 0 5.64 5.64"
    }
  }), _vm._v(" "), _c("path", {
    attrs: {
      d: "M3.51 15A9 9 0 0 0 18.36 18.36"
    }
  })]), _vm._v(" "), _c("span", [_vm._v(_vm._s(_vm.$t("pos.Reset")))])]) : _vm._e(), _vm._v(" "), _vm.isOnline ? _c("button", {
    staticClass: "action-btn action-btn-secondary",
    attrs: {
      title: _vm.$t("pos.Drafts_list")
    },
    on: {
      click: _vm.Show_Draft_Sales
    }
  }, [_c("svg", {
    attrs: {
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      "stroke-width": "2"
    }
  }, [_c("rect", {
    attrs: {
      x: "3",
      y: "4",
      width: "18",
      height: "14",
      rx: "2",
      ry: "2"
    }
  }), _vm._v(" "), _c("path", {
    attrs: {
      d: "M7 8h10M7 12h8"
    }
  })]), _vm._v(" "), _c("span", [_vm._v(_vm._s(_vm.$t("pos.Recent_Drafts")))])]) : _vm._e(), _vm._v(" "), _vm.pos_settings.enable_hold_sales && _vm.isOnline ? _c("button", {
    staticClass: "action-btn action-btn-secondary",
    attrs: {
      disabled: _vm.DraftProcessing,
      title: _vm.$t("pos.Hold_this_sale")
    },
    on: {
      click: _vm.Submit_Draft
    }
  }, [_c("svg", {
    attrs: {
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      "stroke-width": "2"
    }
  }, [_c("circle", {
    attrs: {
      cx: "12",
      cy: "12",
      r: "10"
    }
  }), _vm._v(" "), _c("path", {
    attrs: {
      d: "M10 9v6"
    }
  }), _vm._v(" "), _c("path", {
    attrs: {
      d: "M14 9v6"
    }
  })]), _vm._v(" "), _c("span", [_vm._v(_vm._s(_vm.DraftProcessing ? _vm.$t("pos.Saving") : _vm.$t("pos.Hold")))])]) : _vm._e(), _vm._v(" "), _c("div", {
    staticClass: "footer-space"
  }), _vm._v(" "), _c("div", {
    staticClass: "total-payable-section"
  }, [_c("span", {
    staticClass: "payable-label"
  }, [_vm._v(_vm._s(_vm.$t("pos.Total_Payable")))]), _vm._v(" "), _c("span", {
    staticClass: "payable-amount"
  }, [_vm._v(_vm._s(_vm.formatPriceWithCurrentCurrency(_vm.GrandTotal, 2)))])]), _vm._v(" "), _c("button", {
    staticClass: "action-btn action-btn-primary",
    attrs: {
      disabled: _vm.paymentProcessing || _vm.details.length === 0,
      title: _vm.$t("pos.Complete_and_process_payment")
    },
    on: {
      click: _vm.openModernPaymentModal
    }
  }, [_c("svg", {
    attrs: {
      viewBox: "0 0 24 24",
      fill: "currentColor"
    }
  }, [_c("path", {
    attrs: {
      d: "M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"
    }
  })]), _vm._v(" "), _c("span", [_vm._v(_vm._s(_vm.paymentProcessing ? _vm.$t("pos.Processing") : _vm.$t("pos.Pay_Now")))])])], 1)]) : _vm._e()], 1);
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

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-11.use[3]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-21.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/components/ModernPaymentModal.vue?vue&type=style&index=0&id=866dec86&lang=scss":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-11.use[3]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-21.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/components/ModernPaymentModal.vue?vue&type=style&index=0&id=866dec86&lang=scss ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/* ========================================\n   PREMIUM PAYMENT MODAL DESIGN\n   ======================================== */\n.modern-payment-modal .modal-dialog {\n  max-width: 1100px !important;\n  width: 90vw !important;\n}\n.modern-payment-modal .modal-content {\n  border: none !important;\n  border-radius: 18px !important;\n  box-shadow: 0 15px 50px rgba(0, 0, 0, 0.15) !important;\n  overflow: hidden !important;\n}\n.modern-payment-modal .modal-body-custom {\n  padding: 0 !important;\n}\n.modern-payment-modal.premium-payment-modal-large .modal-dialog {\n  max-width: 1100px !important;\n}\n\n/* Global modal override for this specific modal */\n#modern_payment_modal .modal-dialog {\n  max-width: 1100px !important;\n  width: 90vw !important;\n}\n#modern_payment_modal .modal-content {\n  border: none !important;\n  border-radius: 18px !important;\n  box-shadow: 0 15px 50px rgba(0, 0, 0, 0.15) !important;\n  overflow: hidden !important;\n}\n#modern_payment_modal .modal-body {\n  padding: 0 !important;\n}\n\n/* ========================================\n   PAYMENT CONTAINER\n   ======================================== */\n.payment-container {\n  background: #ffffff;\n  min-height: 450px;\n  max-height: 85vh;\n  display: flex;\n  flex-direction: column;\n}\n\n/* ========================================\n   HEADER SECTION\n   ======================================== */\n.payment-header {\n  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);\n  padding: 14px 24px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  position: relative;\n  overflow: hidden;\n}\n.payment-header::before {\n  content: \"\";\n  position: absolute;\n  top: -50%;\n  right: -10%;\n  width: 400px;\n  height: 400px;\n  background: radial-gradient(circle, rgba(255, 255, 255, 0.1) 0%, transparent 70%);\n  border-radius: 50%;\n}\n.payment-header .header-left {\n  display: flex;\n  align-items: center;\n  gap: 14px;\n  z-index: 1;\n}\n.payment-header .icon-wrapper {\n  width: 40px;\n  height: 40px;\n  background: rgba(255, 255, 255, 0.2);\n  backdrop-filter: blur(10px);\n  border-radius: 10px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 20px;\n  color: white;\n  box-shadow: 0 6px 18px rgba(0, 0, 0, 0.15);\n}\n.payment-header .header-text .modal-title {\n  margin: 0;\n  font-size: 18px;\n  font-weight: 700;\n  color: white;\n  letter-spacing: -0.5px;\n}\n.payment-header .close-button {\n  width: 36px;\n  height: 36px;\n  background: rgba(255, 255, 255, 0.15);\n  backdrop-filter: blur(10px);\n  border: 2px solid rgba(255, 255, 255, 0.2);\n  border-radius: 12px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  transition: all 0.3s ease;\n  z-index: 1;\n  color: white;\n}\n.payment-header .close-button:hover {\n  background: rgba(255, 255, 255, 0.25);\n  transform: rotate(90deg);\n}\n\n/* ========================================\n   CONTENT AREA\n   ======================================== */\n.payment-content {\n  display: grid;\n  grid-template-columns: 300px 1fr;\n  min-height: 400px;\n  flex: 1;\n  overflow: hidden;\n}\n@media (max-width: 992px) {\n.payment-content {\n    display: block;\n    grid-template-columns: none;\n    overflow-y: auto;\n}\n}\n/* ========================================\n   TRANSACTION INFO SIDEBAR\n   ======================================== */\n.transaction-info {\n  background: linear-gradient(180deg, #f8f9fc 0%, #eef2f7 100%);\n  padding: 14px 12px;\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n  border-right: 1px solid rgba(0, 0, 0, 0.06);\n  overflow-y: auto;\n  overflow-x: hidden;\n  /* Custom scrollbar */\n}\n.transaction-info::-webkit-scrollbar {\n  width: 6px;\n}\n.transaction-info::-webkit-scrollbar-track {\n  background: transparent;\n}\n.transaction-info::-webkit-scrollbar-thumb {\n  background: #d1d5db;\n  border-radius: 3px;\n}\n.transaction-info::-webkit-scrollbar-thumb:hover {\n  background: #9ca3af;\n}\n.amount-card {\n  background: white;\n  border-radius: 12px;\n  padding: 12px;\n  box-shadow: 0 3px 15px rgba(0, 0, 0, 0.08);\n  border: 1px solid rgba(0, 0, 0, 0.04);\n}\n.amount-card .amount-card-header {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  margin-bottom: 10px;\n  color: #667eea;\n  font-weight: 600;\n  font-size: 10px;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.amount-card .amount-card-header svg {\n  flex-shrink: 0;\n  width: 16px;\n  height: 16px;\n}\n.amount-card .amount-display {\n  text-align: center;\n  padding: 12px 0;\n  border-radius: 10px;\n  background: linear-gradient(135deg, rgba(102, 126, 234, 0.05) 0%, rgba(118, 75, 162, 0.05) 100%);\n}\n.amount-card .amount-display .currency-label {\n  display: block;\n  font-size: 10px;\n  color: #6b7280;\n  font-weight: 500;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n  margin-bottom: 4px;\n}\n.amount-card .amount-display .amount-large {\n  display: block;\n  font-size: 26px;\n  font-weight: 800;\n  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n  background-clip: text;\n}\n.amount-card .transaction-meta {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-top: 14px;\n  padding-top: 14px;\n  border-top: 1px solid rgba(0, 0, 0, 0.06);\n}\n.amount-card .transaction-meta .meta-item {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n}\n.amount-card .transaction-meta .meta-item .meta-label {\n  font-size: 9px;\n  color: #9ca3af;\n  font-weight: 500;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.amount-card .transaction-meta .meta-item .meta-value {\n  font-size: 12px;\n  font-weight: 700;\n  color: #1f2937;\n}\n.amount-card .transaction-meta .meta-divider {\n  width: 1px;\n  height: 24px;\n  background: rgba(0, 0, 0, 0.06);\n}\n.amount-card .transaction-meta .status-badge {\n  display: flex;\n  align-items: center;\n  gap: 4px;\n  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);\n  color: white;\n  padding: 4px 10px;\n  border-radius: 16px;\n  font-size: 10px;\n  font-weight: 600;\n}\n.amount-card .transaction-meta .status-badge .status-dot {\n  width: 5px;\n  height: 5px;\n  background: white;\n  border-radius: 50%;\n  animation: pulse 2s ease infinite;\n}\n.payment-status-card {\n  background: white;\n  border-radius: 12px;\n  padding: 12px;\n  box-shadow: 0 3px 15px rgba(0, 0, 0, 0.08);\n  border: 1px solid rgba(0, 0, 0, 0.04);\n}\n.payment-status-card .card-title {\n  font-size: 11px;\n  font-weight: 700;\n  color: #1f2937;\n  margin: 0 0 10px 0;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.payment-status-card .status-grid {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\n.payment-status-card .status-box {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 10px;\n  background: #f9fafb;\n  border-radius: 10px;\n  transition: all 0.3s ease;\n}\n.payment-status-card .status-box:hover {\n  background: #f3f4f6;\n  transform: translateX(4px);\n}\n.payment-status-card .status-box .status-icon {\n  width: 30px;\n  height: 30px;\n  border-radius: 8px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n}\n.payment-status-card .status-box .status-icon.paying {\n  background: linear-gradient(135deg, #10b981 0%, #059669 100%);\n  color: white;\n}\n.payment-status-card .status-box .status-icon.balance {\n  background: linear-gradient(135deg, #f59e0b 0%, #d97706 100%);\n  color: white;\n}\n.payment-status-card .status-box .status-icon.change {\n  background: linear-gradient(135deg, #3b82f6 0%, #2563eb 100%);\n  color: white;\n}\n.payment-status-card .status-box .status-icon svg {\n  width: 14px;\n  height: 14px;\n}\n.payment-status-card .status-box .status-details {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n}\n.payment-status-card .status-box .status-details .status-name {\n  font-size: 9px;\n  color: #6b7280;\n  font-weight: 500;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.payment-status-card .status-box .status-details .status-amount {\n  font-size: 14px;\n  font-weight: 700;\n  color: #1f2937;\n}\n.payment-status-card .status-box .status-details .status-amount.balance-text {\n  color: #f59e0b;\n}\n.payment-status-card .status-box .status-details .status-amount.change-text {\n  color: #3b82f6;\n}\n\n/* ========================================\n   PAYMENT FORM AREA\n   ======================================== */\n.payment-form-area {\n  padding: 16px 20px;\n  overflow-y: auto;\n  overflow-x: hidden;\n  max-height: calc(85vh - 120px);\n  position: relative;\n  /* Custom scrollbar */\n}\n.payment-form-area::-webkit-scrollbar {\n  width: 6px;\n}\n.payment-form-area::-webkit-scrollbar-track {\n  background: #f3f4f6;\n  border-radius: 4px;\n}\n.payment-form-area::-webkit-scrollbar-thumb {\n  background: #d1d5db;\n  border-radius: 4px;\n}\n.payment-form-area::-webkit-scrollbar-thumb:hover {\n  background: #9ca3af;\n}\n@media (max-width: 992px) {\n.payment-form-area {\n    max-height: none;\n    padding: 16px 16px;\n}\n}\n.enhanced-form {\n  display: flex;\n  flex-direction: column;\n  gap: 14px;\n}\n.form-group {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\n.form-label {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  font-size: 11px;\n  font-weight: 700;\n  color: #1f2937;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.form-label svg {\n  color: #667eea;\n  flex-shrink: 0;\n  width: 13px;\n  height: 13px;\n}\n.field-label {\n  font-size: 11px;\n  font-weight: 600;\n  color: #4b5563;\n  margin-bottom: 4px;\n}\n\n/* Payment Methods */\n.payment-methods {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  gap: 8px;\n}\n@media (max-width: 1024px) {\n.payment-methods {\n    grid-template-columns: repeat(2, 1fr);\n}\n}\n.method-card {\n  position: relative;\n  padding: 10px 8px;\n  background: white;\n  border: 2px solid #e5e7eb;\n  border-radius: 10px;\n  cursor: pointer;\n  transition: all 0.3s ease;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  text-align: center;\n  min-height: 70px;\n}\n.method-card:hover {\n  border-color: #667eea;\n  background: linear-gradient(135deg, rgba(102, 126, 234, 0.03) 0%, rgba(118, 75, 162, 0.03) 100%);\n  transform: translateY(-2px);\n  box-shadow: 0 6px 16px rgba(102, 126, 234, 0.12);\n}\n.method-card.selected {\n  border-color: #667eea;\n  background: linear-gradient(135deg, rgba(102, 126, 234, 0.08) 0%, rgba(118, 75, 162, 0.08) 100%);\n  box-shadow: 0 6px 16px rgba(102, 126, 234, 0.15);\n}\n.method-card .method-content {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 6px;\n  width: 100%;\n}\n.method-card .method-icon-wrapper {\n  width: 32px;\n  height: 32px;\n  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);\n  border-radius: 8px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 16px;\n  color: white;\n  box-shadow: 0 2px 8px rgba(102, 126, 234, 0.25);\n}\n.method-card .method-label {\n  font-size: 11px;\n  font-weight: 600;\n  color: #1f2937;\n}\n.method-card .selected-indicator {\n  position: absolute;\n  top: 4px;\n  right: 4px;\n  width: 18px;\n  height: 18px;\n  background: #10b981;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: white;\n  box-shadow: 0 2px 6px rgba(16, 185, 129, 0.3);\n}\n.method-card .selected-indicator svg {\n  width: 10px;\n  height: 10px;\n}\n\n/* Amount Inputs */\n.amount-row {\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  gap: 12px;\n}\n@media (max-width: 1024px) {\n.amount-row {\n    grid-template-columns: 1fr;\n}\n}\n.input-field {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n}\n.input-with-icon {\n  position: relative;\n  display: flex;\n  align-items: center;\n}\n.input-with-icon .input-icon {\n  position: absolute;\n  left: 16px;\n  font-size: 16px;\n  font-weight: 700;\n  color: #667eea;\n  pointer-events: none;\n}\n.input-with-icon .form-input {\n  width: 100%;\n  padding: 10px 12px 10px 10px;\n  border: 2px solid #e5e7eb;\n  border-radius: 8px;\n  font-size: 13px;\n  font-weight: 600;\n  color: #1f2937;\n  transition: all 0.3s ease;\n  background: white;\n}\n.input-with-icon .form-input:focus {\n  outline: none;\n  border-color: #667eea;\n  box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);\n}\n.input-with-icon .form-input::-moz-placeholder {\n  color: #9ca3af;\n  font-weight: 400;\n}\n.input-with-icon .form-input::placeholder {\n  color: #9ca3af;\n  font-weight: 400;\n}\n\n/* Change Notification */\n.change-notification {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 10px 14px;\n  background: linear-gradient(135deg, rgba(16, 185, 129, 0.062745098) 0%, rgba(5, 150, 105, 0.062745098) 100%);\n  border: 2px solid #10b981;\n  border-radius: 8px;\n  margin-top: 8px;\n  animation: slideIn 0.4s ease;\n}\n.change-notification .change-icon {\n  width: 30px;\n  height: 30px;\n  background: #10b981;\n  border-radius: 8px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: white;\n  flex-shrink: 0;\n}\n.change-notification .change-icon svg {\n  width: 16px;\n  height: 16px;\n}\n.change-notification .change-content {\n  flex: 1;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.change-notification .change-content .change-title {\n  font-size: 10px;\n  font-weight: 600;\n  color: #047857;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.change-notification .change-content .change-amount {\n  font-size: 16px;\n  font-weight: 800;\n  color: #10b981;\n}\n\n/* Dual Input */\n.dual-input {\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  gap: 12px;\n}\n@media (max-width: 1024px) {\n.dual-input {\n    grid-template-columns: 1fr;\n}\n}\n.form-select {\n  width: 100%;\n  padding: 10px 12px;\n  border: 2px solid #e5e7eb;\n  border-radius: 8px;\n  font-size: 12px;\n  font-weight: 500;\n  color: #1f2937;\n  transition: all 0.3s ease;\n  background: white;\n  cursor: pointer;\n}\n.form-select:focus {\n  outline: none;\n  border-color: #667eea;\n  box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);\n}\n.form-textarea {\n  width: 100%;\n  padding: 10px 12px;\n  border: 2px solid #e5e7eb;\n  border-radius: 8px;\n  font-size: 12px;\n  font-weight: 500;\n  color: #1f2937;\n  transition: all 0.3s ease;\n  background: white;\n  resize: vertical;\n  min-height: 60px;\n  font-family: inherit;\n}\n.form-textarea:focus {\n  outline: none;\n  border-color: #667eea;\n  box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);\n}\n.form-textarea::-moz-placeholder {\n  color: #9ca3af;\n}\n.form-textarea::placeholder {\n  color: #9ca3af;\n}\n\n/* Payment lines layout: left list + right vertical quick amounts */\n.payment-lines-layout {\n  display: grid;\n  grid-template-columns: 1fr 180px;\n  gap: 12px;\n}\n@media (max-width: 992px) {\n.payment-lines-layout {\n    grid-template-columns: 1fr;\n}\n}\n.payment-lines-list {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n}\n.payment-line-card {\n  background: #f9fafb;\n  border: 1px solid #e5e7eb;\n  border-radius: 8px;\n  overflow: hidden;\n}\n.payment-line-header {\n  background: white;\n  border-bottom: 1px solid #e5e7eb;\n  padding: 10px 12px;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.line-badge {\n  background: #667eea;\n  color: white;\n  width: 22px;\n  height: 22px;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 11px;\n  font-weight: 700;\n}\n.line-title {\n  flex: 1;\n  font-size: 12px;\n  font-weight: 700;\n  color: #1f2937;\n}\n.line-remove-btn {\n  color: #ef4444;\n  padding: 0;\n  background: none;\n  border: none;\n  cursor: pointer;\n  transition: all 0.2s ease;\n  font-size: 18px;\n}\n.line-remove-btn:hover {\n  color: #dc2626;\n  transform: scale(1.1);\n}\n.payment-line-body {\n  padding: 12px;\n  display: grid;\n  grid-template-columns: 1fr;\n  gap: 10px;\n}\n@media (max-width: 1024px) {\n.payment-line-body {\n    grid-template-columns: 1fr;\n}\n}\n.method-pills {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 6px;\n}\n.method-pill {\n  padding: 8px 10px;\n  border: 2px solid #e5e7eb;\n  background: #fff;\n  border-radius: 999px;\n  font-size: 12px;\n  font-weight: 600;\n  cursor: pointer;\n  transition: all 0.2s ease;\n}\n.method-pill:hover {\n  border-color: #667eea;\n  background: rgba(102, 126, 234, 0.06);\n}\n.method-pill.selected {\n  border-color: #667eea;\n  background: rgba(102, 126, 234, 0.12);\n  color: #2b2e83;\n}\n.add-line-btn {\n  margin-top: 8px;\n  outline: none !important;\n  box-shadow: none !important;\n}\n.add-line-btn:focus, .add-line-btn:active, .add-line-btn:focus-visible {\n  outline: none !important;\n  box-shadow: none !important;\n}\n.quick-amount-rail {\n  display: flex;\n  flex-direction: column;\n  align-items: stretch;\n  gap: 8px;\n}\n.quick-amount-title {\n  font-size: 11px;\n  font-weight: 700;\n  color: #1f2937;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.quick-amount-vertical {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\n.quick-btn {\n  outline: none !important;\n  box-shadow: none !important;\n}\n.quick-btn:focus, .quick-btn:active, .quick-btn:focus-visible {\n  outline: none !important;\n  box-shadow: none !important;\n}\n\n/* Action Buttons */\n.form-actions-new {\n  position: sticky;\n  bottom: 0;\n  display: flex;\n  gap: 10px;\n  padding: 12px 20px;\n  margin: 16px -20px -16px -20px;\n  background: white;\n  border-top: 2px solid #e5e7eb;\n  box-shadow: 0 -4px 12px rgba(0, 0, 0, 0.08);\n  z-index: 10;\n}\n@media (max-width: 1024px) {\n.form-actions-new {\n    flex-direction: row;\n    gap: 8px;\n    padding: 10px 16px;\n    margin: 16px -16px -16px -16px;\n}\n}\n.action-btn {\n  flex: 1;\n  padding: 12px 20px;\n  border: none;\n  border-radius: 8px;\n  font-size: 12px;\n  font-weight: 700;\n  cursor: pointer;\n  transition: all 0.3s ease;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 6px;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n  min-height: 42px;\n}\n.action-btn:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n.action-btn .btn-content {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.action-btn svg {\n  width: 16px;\n  height: 16px;\n}\n.cancel-btn {\n  background: #f3f4f6;\n  color: #4b5563;\n  border: 2px solid #e5e7eb;\n}\n.cancel-btn:hover:not(:disabled) {\n  background: #e5e7eb;\n  border-color: #d1d5db;\n  transform: none;\n}\n.submit-btn {\n  background: linear-gradient(135deg, #10b981 0%, #059669 100%);\n  color: white;\n  box-shadow: 0 4px 12px rgba(16, 185, 129, 0.25);\n}\n.submit-btn:hover:not(:disabled) {\n  box-shadow: 0 6px 16px rgba(16, 185, 129, 0.35);\n  transform: none;\n}\n.submit-btn:active:not(:disabled) {\n  transform: scale(0.98);\n}\n\n/* Fixed footer buttons */\n.payment-footer {\n  position: sticky;\n  bottom: 0;\n  display: flex;\n  gap: 10px;\n  padding: 12px 20px;\n  background: white;\n  border-top: 2px solid #e5e7eb;\n  box-shadow: 0 -4px 12px rgba(0, 0, 0, 0.08);\n  z-index: 20;\n}\n\n/* Saved Cards minimal styling */\n.saved-cards {\n  background: #ffffff;\n  border: 1px solid #e5e7eb;\n  border-radius: 10px;\n  overflow: hidden;\n}\n.saved-cards-header {\n  padding: 10px 12px;\n  font-size: 11px;\n  font-weight: 700;\n  color: #1f2937;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n  background: #f9fafb;\n  border-bottom: 1px solid #e5e7eb;\n}\n.saved-cards-table {\n  margin: 0;\n  width: 100%;\n}\n.saved-cards-table thead th {\n  font-size: 11px;\n  font-weight: 700;\n  color: #6b7280;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n  background: #f9fafb;\n  border-bottom: 1px solid #e5e7eb;\n}\n.saved-cards-table tbody td {\n  vertical-align: middle;\n  font-size: 12px;\n}\n.bg-selected-card {\n  background: linear-gradient(135deg, rgba(102, 126, 234, 0.06) 0%, rgba(118, 75, 162, 0.06) 100%);\n}\n.default-badge {\n  display: inline-block;\n  margin-left: 8px;\n  padding: 2px 6px;\n  border-radius: 999px;\n  background: #ecfeff;\n  color: #0369a1;\n  border: 1px solid #67e8f9;\n  font-size: 10px;\n  font-weight: 700;\n  vertical-align: middle;\n}\n.selected-badge {\n  display: inline-block;\n  margin-left: 6px;\n  padding: 2px 6px;\n  border-radius: 999px;\n  background: #e8fff3;\n  color: #065f46;\n  border: 1px solid #6ee7b7;\n  font-size: 10px;\n  font-weight: 700;\n  vertical-align: middle;\n}\n.footer-btn {\n  flex: 1;\n  padding: 12px 20px;\n  border: none;\n  border-radius: 8px;\n  font-size: 12px;\n  font-weight: 700;\n  cursor: pointer;\n  transition: all 0.3s ease;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 6px;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n  min-height: 42px;\n}\n.footer-cancel {\n  background: #f3f4f6;\n  color: #4b5563;\n  border: 2px solid #e5e7eb;\n}\n.footer-submit {\n  background: linear-gradient(135deg, #10b981 0%, #059669 100%);\n  color: white;\n  box-shadow: 0 4px 12px rgba(16, 185, 129, 0.25);\n}\n\n/* Loading Spinner */\n.loading-spinner {\n  display: inline-block;\n  width: 16px;\n  height: 16px;\n  border: 2px solid rgba(255, 255, 255, 0.3);\n  border-top-color: white;\n  border-radius: 50%;\n  animation: spin 0.8s linear infinite;\n}\n\n/* Animations */\n@keyframes spin {\nto {\n    transform: rotate(360deg);\n}\n}\n@keyframes pulse {\n0%, 100% {\n    opacity: 1;\n}\n50% {\n    opacity: 0.5;\n}\n}\n@keyframes slideIn {\nfrom {\n    opacity: 0;\n    transform: translateY(-10px);\n}\nto {\n    opacity: 1;\n    transform: translateY(0);\n}\n}\n/* Responsive Design */\n@media (max-width: 992px) {\n.payment-header {\n    padding: 14px 20px;\n}\n.payment-header .icon-wrapper {\n    width: 40px;\n    height: 40px;\n    font-size: 20px;\n}\n.payment-header .header-text .modal-title {\n    font-size: 18px;\n}\n.transaction-info {\n    padding: 14px 12px;\n}\n.payment-form-area {\n    padding: 16px 20px;\n}\n}\n@media (max-width: 1024px) {\n.payment-header {\n    padding: 12px 16px;\n}\n.payment-header .header-left {\n    gap: 10px;\n}\n.payment-header .icon-wrapper {\n    width: 36px;\n    height: 36px;\n    font-size: 18px;\n}\n.payment-header .header-text .modal-title {\n    font-size: 16px;\n}\n.payment-header .header-text .modal-subtitle {\n    font-size: 10px;\n}\n.payment-header .close-button {\n    width: 32px;\n    height: 32px;\n}\n.payment-form-area {\n    padding: 14px 16px;\n}\n  /* Ensure transaction info doesn't scroll vertically on small screens */\n.transaction-info {\n    overflow-y: visible;\n    max-height: none;\n}\n}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-11.use[3]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-21.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/pos.vue?vue&type=style&index=0&id=4cc49487&scoped=true&lang=scss":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-11.use[3]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-21.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/pos.vue?vue&type=style&index=0&id=4cc49487&scoped=true&lang=scss ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "@charset \"UTF-8\";\n.pos-codecanyon[data-v-4cc49487] {\n  display: flex;\n  flex-direction: column;\n  height: 100vh;\n  background: #f8f9fb;\n  font-family: \"Inter\", \"Poppins\", \"Nunito\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", sans-serif;\n  color: #1a1a2e;\n  overflow: hidden;\n  /* Custom Scrollbar */\n}\n.pos-codecanyon[data-v-4cc49487] ::-webkit-scrollbar {\n  width: 8px;\n  height: 8px;\n}\n.pos-codecanyon[data-v-4cc49487] ::-webkit-scrollbar-track {\n  background: rgba(0, 0, 0, 0.02);\n}\n.pos-codecanyon[data-v-4cc49487] ::-webkit-scrollbar-thumb {\n  background: rgba(0, 0, 0, 0.08);\n  border-radius: 4px;\n}\n.pos-codecanyon[data-v-4cc49487] ::-webkit-scrollbar-thumb:hover {\n  background: rgba(0, 0, 0, 0.12);\n}\n\n/* ============================================\n   HEADER STYLES\n   ============================================ */\n.pos-header[data-v-4cc49487] {\n  display: flex;\n  align-items: center;\n  align-items: center;\n  gap: 16px;\n  padding: 16px 24px;\n  background: #ffffff;\n  border-bottom: 1px solid #e5e7eb;\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);\n  min-height: 70px;\n}\n\n/* Mobile header base styles (hidden by default; shown only on ≤480px) */\n.pos-header-mobile[data-v-4cc49487] {\n  display: none;\n}\n.header-left[data-v-4cc49487] {\n  display: flex;\n  align-items: center;\n  height: 100%;\n}\n.brand[data-v-4cc49487] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n}\n.brand .brand-icon[data-v-4cc49487] {\n  width: 40px;\n  height: 40px;\n  border-radius: 12px;\n  background: none;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 20px;\n  font-weight: 700;\n  color: inherit;\n  box-shadow: none;\n  flex-shrink: 0;\n}\n.brand .brand-info h2[data-v-4cc49487] {\n  margin: 0;\n  font-size: 16px;\n  font-weight: 700;\n  color: #1a1a2e;\n  letter-spacing: -0.3px;\n  line-height: 1.2;\n}\n.brand .brand-info p[data-v-4cc49487] {\n  margin: 2px 0 0 0;\n  font-size: 11px;\n  color: #9ca3af;\n  font-weight: 400;\n  line-height: 1.2;\n}\n.header-center[data-v-4cc49487] {\n  display: flex;\n  align-items: center;\n  height: 100%;\n  flex: 1 1 auto;\n}\n.header-center .search-wrapper[data-v-4cc49487] {\n  position: relative;\n  display: flex;\n  align-items: center;\n  height: 40px;\n  width: 100%;\n}\n.header-center .search-wrapper .search-icon[data-v-4cc49487] {\n  position: absolute;\n  left: 12px;\n  width: 18px;\n  height: 18px;\n  color: #9ca3af;\n  pointer-events: none;\n}\n.header-center .search-wrapper .search-input[data-v-4cc49487] {\n  width: 100%;\n  height: 100%;\n  padding: 0 50px 0 40px;\n  background: #f8f9fb;\n  border: none;\n  border-radius: 12px;\n  font-size: 14px;\n  color: #1a1a2e;\n  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);\n}\n.header-center .search-wrapper .search-input[data-v-4cc49487]:focus {\n  outline: none;\n  background: white;\n  box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);\n}\n.header-center .search-wrapper[data-v-4cc49487] {\n  /* Style the Scan button like an input-group append */\n}\n.header-center .search-wrapper > .action-btn-icon[data-v-4cc49487] {\n  position: absolute;\n  right: 0;\n  top: 0;\n  height: 100% !important;\n  width: 44px !important;\n  padding: 0 !important;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  background: white;\n  border: 1px solid #e5e7eb;\n  border-left: 1px solid #e5e7eb;\n  border-radius: 0 12px 12px 0;\n  box-shadow: none;\n}\n\n/* Autocomplete dropdown: visible list below search input */\n.pos-autocomplete-results[data-v-4cc49487] {\n  position: absolute;\n  top: 100%;\n  right: 0;\n  left: 0;\n  margin: 0;\n  padding: 0;\n  list-style: none;\n  background: white;\n  border: 1px solid #e5e7eb;\n  border-top: none;\n  border-radius: 0 0 12px 12px;\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);\n  max-height: 280px;\n  overflow-y: auto;\n  z-index: 1000;\n}\n.pos-autocomplete-item[data-v-4cc49487] {\n  padding: 10px 14px;\n  font-size: 14px;\n  color: #1a1a2e;\n  cursor: pointer;\n  border-bottom: 1px solid rgba(0, 0, 0, 0.06);\n}\n.pos-autocomplete-item[data-v-4cc49487]:last-child {\n  border-bottom: none;\n}\n.pos-autocomplete-item[data-v-4cc49487]:hover {\n  background: #f8f9fb;\n}\n.pos-autocomplete-item[data-v-4cc49487]:active {\n  background: rgba(102, 126, 234, 0.08);\n}\n.header-right[data-v-4cc49487] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  flex: 1 1 auto;\n  justify-content: flex-end;\n}\n\n/* Category & Brand filters row (mobile); desktop uses same v-selects as warehouse/customer */\n.pos-header-filters[data-v-4cc49487] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  flex: 0 0 auto;\n}\n\n/* Register status unified button styling */\n.register-status[data-v-4cc49487] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n}\n\n/* Quick Add Customer placement:\n   - 320px–768px: show inside the 320px-style header layout (Register Status)\n   - >768px: keep it in the header-right area (unchanged position) */\n.quick-add-customer--in-register[data-v-4cc49487] {\n  display: none !important;\n}\n.quick-add-customer--in-header[data-v-4cc49487] {\n  display: inline-flex !important;\n}\n@media (max-width: 768px) {\n.quick-add-customer--in-register[data-v-4cc49487] {\n    display: inline-flex !important;\n}\n.quick-add-customer--in-header[data-v-4cc49487] {\n    display: none !important;\n}\n}\n/* Display inside register-status: mobile only (pos-header-mobile) */\n.register-status .register-status-display[data-v-4cc49487] {\n  display: inline-flex;\n  align-items: center;\n}\n.register-status .register-toggle-btn[data-v-4cc49487] {\n  background: #f8f9fb;\n  color: #1a1a2e;\n  border: 1px solid #e5e7eb;\n  padding: 4px 10px;\n  font-weight: 600;\n}\n.register-status .register-toggle-btn[data-v-4cc49487]:hover {\n  background: white;\n  box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.08);\n}\n.register-status .register-toggle-btn[data-v-4cc49487]:focus {\n  outline: none;\n  box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.12);\n}\n\n/* POS only: v-select one-line + ellipsis (selected value + search on one line) */\n.pos-codecanyon[data-v-4cc49487] .vs__selected-options {\n  flex-wrap: nowrap !important;\n  align-items: center;\n  overflow: hidden;\n}\n.pos-codecanyon[data-v-4cc49487] .vs__selected {\n  flex: 1 1 auto;\n  min-width: 0;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.pos-codecanyon[data-v-4cc49487] .vs__search {\n  flex: 1 1 auto;\n  min-width: 0;\n}\n\n/* All POS v-selects: same width and min-width, flexible + truncate */\n.warehouse-select[data-v-4cc49487],\n.display-screen-select[data-v-4cc49487],\n.customer-select-header[data-v-4cc49487],\n.category-select-header[data-v-4cc49487],\n.brand-select-header[data-v-4cc49487] {\n  flex: 1 1 0;\n  min-width: 160px;\n}\n.warehouse-select[data-v-4cc49487] .vs__dropdown-toggle,\n.display-screen-select[data-v-4cc49487] .vs__dropdown-toggle,\n.customer-select-header[data-v-4cc49487] .vs__dropdown-toggle,\n.category-select-header[data-v-4cc49487] .vs__dropdown-toggle,\n.brand-select-header[data-v-4cc49487] .vs__dropdown-toggle {\n  width: 100%;\n  min-width: 0;\n  border: 1px solid #e5e7eb;\n}\n.warehouse-select[data-v-4cc49487] .vs__selected-options,\n.display-screen-select[data-v-4cc49487] .vs__selected-options,\n.customer-select-header[data-v-4cc49487] .vs__selected-options,\n.category-select-header[data-v-4cc49487] .vs__selected-options,\n.brand-select-header[data-v-4cc49487] .vs__selected-options {\n  width: 100%;\n  flex: 1;\n  min-width: 0;\n  max-width: 100%;\n  overflow: hidden;\n}\n.warehouse-select[data-v-4cc49487] .vs__placeholder,\n.display-screen-select[data-v-4cc49487] .vs__placeholder,\n.customer-select-header[data-v-4cc49487] .vs__placeholder,\n.category-select-header[data-v-4cc49487] .vs__placeholder,\n.brand-select-header[data-v-4cc49487] .vs__placeholder {\n  width: 100%;\n  white-space: nowrap;\n  overflow: visible;\n  max-width: 100%;\n}\n.warehouse-select[data-v-4cc49487] .vs__selected,\n.display-screen-select[data-v-4cc49487] .vs__selected,\n.customer-select-header[data-v-4cc49487] .vs__selected,\n.category-select-header[data-v-4cc49487] .vs__selected,\n.brand-select-header[data-v-4cc49487] .vs__selected {\n  display: block;\n  max-width: 100%;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.header-right .action-btn-icon[data-v-4cc49487],\n.header-right .btn-new-customer[data-v-4cc49487],\n.header-right .btn-pos-settings[data-v-4cc49487],\n.header-right .btn-offline-status[data-v-4cc49487],\n.header-right .register-status[data-v-4cc49487] {\n  flex: 0 0 auto;\n  flex-shrink: 0;\n  min-width: auto;\n}\n.header-right .warehouse-select[data-v-4cc49487],\n.header-right .display-screen-select[data-v-4cc49487],\n.header-right .customer-select-header[data-v-4cc49487],\n.header-right .category-select-header[data-v-4cc49487],\n.header-right .brand-select-header[data-v-4cc49487] {\n  flex: 1 1 0;\n  min-width: 160px;\n}\n.user-profile[data-v-4cc49487] {\n  width: 40px;\n  height: 40px;\n  border-radius: 50%;\n  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-weight: 600;\n  color: white;\n  font-size: 14px;\n  box-shadow: 0 2px 8px rgba(102, 126, 234, 0.25);\n  cursor: pointer;\n  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);\n  flex-shrink: 0;\n}\n.user-profile[data-v-4cc49487]:hover {\n  transform: scale(1.05);\n}\n\n/* ============================================\n   MAIN CONTAINER & LAYOUT\n   ============================================ */\n.pos-container[data-v-4cc49487] {\n  display: grid;\n  grid-template-columns: 1fr 1.4fr;\n  gap: 24px;\n  padding: 24px;\n  padding-bottom: 100px;\n  flex: 1;\n  overflow: hidden;\n  height: 100%;\n}\n.pos-column-left[data-v-4cc49487] {\n  display: flex;\n  flex-direction: column;\n  gap: 24px;\n  overflow: hidden;\n  height: 100%;\n  min-height: 0;\n}\n\n/* ============================================\n   CARD STYLING\n   ============================================ */\n.card[data-v-4cc49487] {\n  background: #ffffff;\n  border-radius: 16px;\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);\n  border: 1px solid #e5e7eb;\n  display: flex;\n  flex-direction: column;\n  overflow: hidden;\n  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n}\n.card[data-v-4cc49487]:hover {\n  box-shadow: 0 10px 32px rgba(0, 0, 0, 0.12);\n}\n.card-header[data-v-4cc49487] {\n  padding: 14px 20px;\n  border-bottom: 1px solid #e5e7eb;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  background: linear-gradient(to right, #fafbfc 0%, white 100%);\n  flex-shrink: 0;\n}\n.card-header h3[data-v-4cc49487] {\n  margin: 0;\n  font-size: 18px;\n  font-weight: 600;\n  color: #1a1a2e;\n  letter-spacing: -0.2px;\n}\n.card-header .badge-count[data-v-4cc49487] {\n  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);\n  color: white;\n  padding: 6px 12px;\n  border-radius: 20px;\n  font-size: 12px;\n  font-weight: 600;\n  box-shadow: 0 2px 8px rgba(102, 126, 234, 0.2);\n}\n.card-header .filter-section[data-v-4cc49487] {\n  display: flex;\n  gap: 10px;\n  align-items: center;\n}\n\n/* ============================================\n   FLAT INPUTS & SELECTS\n   ============================================ */\n.flat-input[data-v-4cc49487],\n.flat-select[data-v-4cc49487] {\n  padding: 10px 12px;\n  background: #f8f9fb;\n  border: none;\n  border-radius: 6px;\n  font-size: 14px;\n  color: #1a1a2e;\n  font-family: \"Inter\", \"Poppins\", \"Nunito\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", sans-serif;\n  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);\n  cursor: pointer;\n}\n.flat-input[data-v-4cc49487]:focus,\n.flat-select[data-v-4cc49487]:focus {\n  outline: none;\n  background: white;\n  box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);\n}\n.flat-input[data-v-4cc49487]::-moz-placeholder, .flat-select[data-v-4cc49487]::-moz-placeholder {\n  color: #9ca3af;\n}\n.flat-input[data-v-4cc49487]::placeholder,\n.flat-select[data-v-4cc49487]::placeholder {\n  color: #9ca3af;\n}\n.flat-select[data-v-4cc49487] {\n  -webkit-appearance: none;\n     -moz-appearance: none;\n          appearance: none;\n  background-image: url('data:image/svg+xml;charset=UTF-8,%3csvg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"rgb(107, 114, 128)\" stroke-width=\"2\"%3e%3cpolyline points=\"6 9 12 15 18 9\"%3e%3c/polyline%3e%3c/svg%3e');\n  background-repeat: no-repeat;\n  background-position: right 8px center;\n  background-size: 20px;\n  padding-right: 36px;\n}\n\n/* ============================================\n   CARD: UNIFIED CHECKOUT\n   ============================================ */\n.card-unified-checkout[data-v-4cc49487] {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  overflow: hidden;\n  min-height: 0;\n}\n.cart-section[data-v-4cc49487] {\n  flex: 0 0 auto;\n  overflow-y: auto;\n  max-height: 45%;\n  padding: 12px 16px;\n  border-bottom: 1px solid #e5e7eb;\n  min-height: 80px;\n}\n.cart-items-grid[data-v-4cc49487] {\n  display: grid;\n  grid-template-columns: 1fr;\n  gap: 8px;\n}\n.cart-item-card[data-v-4cc49487] {\n  padding: 10px;\n  background: linear-gradient(to right, #f9fafb 0%, white 100%);\n  border: 1px solid #e5e7eb;\n  border-radius: 6px;\n  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n  display: grid;\n  grid-template-columns: 1fr auto;\n  gap: 8px;\n  grid-template-areas: \"header header\" \"sku sku\" \"qty price\";\n}\n.cart-item-card[data-v-4cc49487]:hover {\n  border-color: #667eea;\n  background: white;\n  box-shadow: 0 2px 8px rgba(102, 126, 234, 0.1);\n}\n.cart-item-card .item-header[data-v-4cc49487] {\n  grid-area: header;\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  gap: 6px;\n}\n.cart-item-card .item-header .item-name[data-v-4cc49487] {\n  margin: 0;\n  font-size: 12px;\n  font-weight: 600;\n  color: #1a1a2e;\n  flex: 1;\n  word-break: break-word;\n}\n.cart-item-card .item-header .edit-btn[data-v-4cc49487] {\n  width: 24px;\n  height: 24px;\n  min-width: 24px;\n  border: 1px solid #e5e7eb;\n  background: white;\n  color: #6b7280;\n  border-radius: 4px;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);\n  padding: 0;\n  -webkit-tap-highlight-color: transparent;\n}\n.cart-item-card .item-header .edit-btn svg[data-v-4cc49487] {\n  width: 14px;\n  height: 14px;\n  display: block;\n}\n.cart-item-card .item-header .edit-btn[data-v-4cc49487]:hover {\n  border-color: #667eea;\n  background: rgba(102, 126, 234, 0.06);\n  color: #667eea;\n  transform: scale(1.05);\n}\n.cart-item-card .item-header .edit-btn[data-v-4cc49487]:focus, .cart-item-card .item-header .edit-btn[data-v-4cc49487]:active, .cart-item-card .item-header .edit-btn[data-v-4cc49487]:focus-visible {\n  outline: none !important;\n  box-shadow: none !important;\n}\n.cart-item-card .item-header .remove-btn[data-v-4cc49487] {\n  width: 24px;\n  height: 24px;\n  min-width: 24px;\n  border: 1px solid #e5e7eb;\n  background: white;\n  color: #ef4444;\n  border-radius: 4px;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);\n  padding: 0;\n  -webkit-tap-highlight-color: transparent;\n}\n.cart-item-card .item-header .remove-btn svg[data-v-4cc49487] {\n  width: 14px;\n  height: 14px;\n  display: block;\n}\n.cart-item-card .item-header .remove-btn[data-v-4cc49487]:hover {\n  border-color: #ef4444;\n  background: rgba(239, 68, 68, 0.06);\n  color: #ef4444;\n  transform: scale(1.05);\n}\n.cart-item-card .item-header .remove-btn[data-v-4cc49487]:focus, .cart-item-card .item-header .remove-btn[data-v-4cc49487]:active, .cart-item-card .item-header .remove-btn[data-v-4cc49487]:focus-visible {\n  outline: none !important;\n  box-shadow: none !important;\n}\n.cart-item-card .item-sku[data-v-4cc49487] {\n  grid-area: sku;\n  margin: 0;\n  font-size: 10px;\n  color: #9ca3af;\n  font-weight: 500;\n}\n.cart-item-card .item-qty-section[data-v-4cc49487] {\n  grid-area: qty;\n  display: flex;\n  align-items: center;\n  gap: 6px;\n}\n.cart-item-card .item-qty-section .qty-controller[data-v-4cc49487] {\n  display: flex;\n  align-items: center;\n  gap: 4px;\n}\n.cart-item-card .item-qty-section .qty-controller .qty-btn[data-v-4cc49487] {\n  width: 24px;\n  height: 24px;\n  border: 1px solid #e5e7eb;\n  background: white;\n  border-radius: 3px;\n  cursor: pointer;\n  font-size: 12px;\n  font-weight: 600;\n  color: #1a1a2e;\n  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);\n  padding: 0;\n  -webkit-tap-highlight-color: transparent;\n  appearance: none;\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  outline: none;\n}\n.cart-item-card .item-qty-section .qty-controller .qty-btn[data-v-4cc49487]:hover {\n  border-color: #667eea;\n  background: rgba(102, 126, 234, 0.05);\n}\n.cart-item-card .item-qty-section .qty-controller .qty-btn[data-v-4cc49487]:focus, .cart-item-card .item-qty-section .qty-controller .qty-btn[data-v-4cc49487]:focus-visible, .cart-item-card .item-qty-section .qty-controller .qty-btn[data-v-4cc49487]:active {\n  outline: none !important;\n  box-shadow: none !important;\n  -webkit-box-shadow: none !important;\n  border-color: #e5e7eb !important;\n}\n.cart-item-card .item-qty-section .qty-controller .qty-btn[data-v-4cc49487]::-moz-focus-inner {\n  border: 0;\n}\n.cart-item-card .item-qty-section .qty-controller .qty-btn[data-v-4cc49487]:-moz-focusring {\n  outline: none;\n}\n.cart-item-card .item-qty-section .qty-controller .qty-input[data-v-4cc49487] {\n  width: 40px;\n  padding: 4px 6px;\n  background: #f8f9fb;\n  border: none;\n  border-radius: 3px;\n  text-align: center;\n  font-size: 11px;\n  font-weight: 600;\n  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);\n}\n.cart-item-card .item-qty-section .qty-controller .qty-input[data-v-4cc49487]:focus {\n  outline: none;\n  background: white;\n  box-shadow: 0 0 0 2px rgba(102, 126, 234, 0.1);\n}\n.cart-item-card[data-v-4cc49487] {\n  /* (Online reload confirmation now uses a Bootstrap-Vue modal; no extra styles required) */\n}\n.cart-item-card .pos-price-container[data-v-4cc49487] {\n  max-width: 220px;\n}\n.cart-item-card .pos-price-select[data-v-4cc49487] {\n  min-width: 120px;\n  padding: 2px 6px;\n  height: 28px;\n}\n.cart-item-card .item-price[data-v-4cc49487] {\n  grid-area: price;\n  text-align: right;\n  font-size: 12px;\n  font-weight: 700;\n  white-space: nowrap;\n}\n.cart-item-card .item-price .item-amount[data-v-4cc49487] {\n  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);\n  background-clip: text;\n  background-clip: text;\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n}\n.cart-item-card .item-price .pos-price-select[data-v-4cc49487] {\n  -webkit-text-fill-color: initial;\n  -webkit-background-clip: initial;\n  background-clip: initial;\n  color: #1a1a2e;\n}\n.cart-item-card .item-price .item-subtotal[data-v-4cc49487] {\n  font-size: 11px;\n  font-weight: 400;\n  color: #6b7280;\n  margin-top: 2px;\n}\n.cart-item-card .item-price .item-subtotal .subtotal-label[data-v-4cc49487] {\n  margin-right: 4px;\n}\n.summary-section[data-v-4cc49487] {\n  flex: 1;\n  overflow-y: auto;\n  display: flex;\n  flex-direction: column;\n  min-height: 0;\n  padding-bottom: 80px;\n}\n\n/* ============================================\n   CARD: SUMMARY\n   ============================================ */\n.card-summary[data-v-4cc49487] {\n  flex: 1;\n  min-height: auto;\n  overflow-y: auto;\n  display: flex;\n  flex-direction: column;\n  padding-bottom: 0;\n}\n.charges-section[data-v-4cc49487] {\n  padding: 12px 20px;\n  border-bottom: 1px solid #e5e7eb;\n  display: flex;\n  flex-direction: column;\n  gap: 0px;\n  flex-shrink: 0;\n}\n.charge-row[data-v-4cc49487] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 0;\n  padding: 3px 0;\n  border-bottom: 1px solid #e5e7eb;\n}\n.charge-row[data-v-4cc49487]:last-child {\n  border-bottom: none;\n}\n.charge-row.no-border-bottom[data-v-4cc49487] {\n  border-bottom: none;\n}\n.charge-row label[data-v-4cc49487] {\n  font-size: 12px;\n  font-weight: 600;\n  color: #6b7280;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n  flex-shrink: 0;\n}\n.charge-row .charge-input-group[data-v-4cc49487] {\n  position: relative;\n  display: flex;\n  align-items: center;\n  width: 100px;\n}\n.charge-row .charge-input-group .flat-input[data-v-4cc49487] {\n  width: 100%;\n  text-align: left;\n  font-size: 13px;\n  padding: 5px 10px;\n}\n.charge-row .charge-input-group .input-suffix[data-v-4cc49487] {\n  position: absolute;\n  right: 10px;\n  font-size: 10px;\n  color: #9ca3af;\n  pointer-events: none;\n  font-weight: 600;\n}\n.charge-row .charge-input-group.discount-input-group .discount-type-toggle[data-v-4cc49487] {\n  position: absolute;\n  right: 8px;\n  background: white;\n  border: 1px solid #e5e7eb;\n  border-radius: 4px;\n  padding: 2px 6px;\n  font-size: 11px;\n  font-weight: 700;\n  color: #1a1a2e;\n  cursor: pointer;\n  pointer-events: auto;\n  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);\n  min-width: 32px;\n  text-align: center;\n}\n.charge-row .charge-input-group.discount-input-group .discount-type-toggle[data-v-4cc49487]:hover {\n  border-color: #667eea;\n  background: rgba(102, 126, 234, 0.06);\n  color: #667eea;\n}\n.charge-row .charge-input-group.discount-input-group .discount-type-toggle[data-v-4cc49487]:active {\n  transform: scale(0.95);\n}\n.charge-row .charge-input-group.discount-input-group .discount-type-toggle[data-v-4cc49487]:focus, .charge-row .charge-input-group.discount-input-group .discount-type-toggle[data-v-4cc49487]:focus-visible {\n  outline: none;\n  box-shadow: 0 0 0 2px rgba(102, 126, 234, 0.2);\n}\n.summary-totals[data-v-4cc49487] {\n  padding: 12px 20px;\n  flex-shrink: 0;\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n  background: #ffffff;\n  border-top: 2px solid #e5e7eb;\n  margin-top: auto;\n}\n.total-row[data-v-4cc49487] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  font-size: 13px;\n  gap: 8px;\n}\n.total-row .total-label[data-v-4cc49487] {\n  color: #6b7280;\n  font-weight: 500;\n  flex: 1;\n  min-width: 0;\n}\n.total-row .total-label.discount-row[data-v-4cc49487] {\n  color: #ef4444;\n}\n.total-row .total-value[data-v-4cc49487] {\n  color: #1a1a2e;\n  font-weight: 600;\n  text-align: right;\n  flex-shrink: 0;\n}\n.total-row .total-value.discount-value[data-v-4cc49487] {\n  color: #ef4444;\n}\n.total-row.grand-total[data-v-4cc49487] {\n  margin-top: 4px;\n  padding-top: 6px;\n  border-top: 1px solid #e5e7eb;\n  margin-bottom: 0;\n}\n.total-row.grand-total .total-label[data-v-4cc49487] {\n  font-weight: 700;\n  color: #1a1a2e;\n}\n.total-row.grand-total .total-value[data-v-4cc49487] {\n  font-size: 15px;\n  font-weight: 700;\n}\n.summary-divider[data-v-4cc49487] {\n  height: 1px;\n  background: #e5e7eb;\n  margin: 2px 0;\n}\n.gradient-text[data-v-4cc49487] {\n  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n  background-clip: text;\n}\n\n/* ============================================\n   EMPTY STATE\n   ============================================ */\n.empty-state[data-v-4cc49487] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  flex: 1;\n  color: #9ca3af;\n  text-align: center;\n  padding: 20px;\n  min-height: 80px;\n}\n.empty-state svg[data-v-4cc49487] {\n  width: 40px;\n  height: 40px;\n  margin-bottom: 10px;\n  opacity: 0.15;\n  stroke-width: 1.5;\n}\n.empty-state p[data-v-4cc49487] {\n  margin: 0 0 4px 0;\n  font-size: 13px;\n  font-weight: 500;\n  color: #6b7280;\n}\n.empty-state .empty-hint[data-v-4cc49487] {\n  font-size: 11px;\n  color: #9ca3af;\n}\n.register-toggle-icon[data-v-4cc49487] {\n  border: none;\n  background: transparent;\n  padding: 0;\n  margin-right: 4px;\n  cursor: pointer;\n  font-size: 16px;\n}\n\n/* ============================================\n   CARD: PRODUCTS\n   ============================================ */\n.card-products[data-v-4cc49487] {\n  display: flex;\n  flex-direction: column;\n  flex: 1;\n}\n.card-products .card-header[data-v-4cc49487] {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  gap: 12px;\n}\n.card-products .products-search-wrapper[data-v-4cc49487] {\n  flex: 1;\n  min-width: 200px;\n  position: relative;\n}\n.card-products .products-search-wrapper .search-wrapper[data-v-4cc49487] {\n  position: relative;\n  height: 40px;\n  display: flex;\n  align-items: center;\n  background: #f8f9fb;\n  border: 1px solid #e5e7eb;\n  border-radius: 12px;\n  overflow: visible;\n}\n.card-products .products-search-wrapper .search-icon[data-v-4cc49487] {\n  position: absolute;\n  left: 12px;\n  width: 18px;\n  height: 18px;\n  color: #6b7280;\n  pointer-events: none;\n}\n.card-products .products-search-wrapper .search-input[data-v-4cc49487] {\n  flex: 1;\n  height: 100%;\n  padding: 0 50px 0 38px;\n  border: none;\n  background: transparent;\n  font-size: 14px;\n  color: #1a1a2e;\n}\n.card-products .products-search-wrapper .search-input[data-v-4cc49487]:focus, .card-products .products-search-wrapper .search-input[data-v-4cc49487]:active, .card-products .products-search-wrapper .search-input[data-v-4cc49487]:focus-visible {\n  outline: none !important;\n  box-shadow: none !important;\n  border: none;\n}\n.card-products .products-search-wrapper .action-btn-icon[data-v-4cc49487] {\n  position: absolute;\n  right: 0;\n  top: 0;\n  height: 100%;\n  width: 40px;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  background: white;\n  border: none;\n  border-left: 1px solid #e5e7eb;\n}\n.card-products .products-search-wrapper .pos-autocomplete-results[data-v-4cc49487] {\n  left: 0;\n  right: 0;\n}\n\n/* Category & brand below autocomplete: hidden on laptop (1366px+), shown on tablet and smaller */\n.card-products-mobile-filters[data-v-4cc49487] {\n  display: none;\n}\n@media (max-width: 1365px) {\n  /* Show categories and brands below search (all non-laptop sizes) */\n.card-products-mobile-filters[data-v-4cc49487] {\n    display: flex;\n    flex-direction: column;\n    width: 100%;\n    gap: 8px;\n    margin-top: 10px;\n}\n.card-products-mobile-filters .category-select-header[data-v-4cc49487],\n  .card-products-mobile-filters .brand-select-header[data-v-4cc49487] {\n    width: 100%;\n}\n  /* Hide categories and brands in desktop header when below search */\n.header-right .category-select-header[data-v-4cc49487],\n  .header-right .brand-select-header[data-v-4cc49487] {\n    display: none !important;\n}\n}\n.card-products.is-loading[data-v-4cc49487] {\n  position: relative;\n}\n.card-products.is-loading[data-v-4cc49487]::after {\n  content: \"\";\n  position: absolute;\n  inset: 0;\n  background: rgba(255, 255, 255, 0.6);\n  pointer-events: auto;\n}\n.card-products.is-loading[data-v-4cc49487]::before {\n  content: \"\";\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  width: 32px;\n  height: 32px;\n  margin-top: -16px;\n  margin-left: -16px;\n  border-radius: 50%;\n  border: 3px solid rgba(102, 126, 234, 0.25);\n  border-top-color: #667eea;\n  animation: spinner-rotate-4cc49487 0.8s linear infinite;\n}\n@keyframes spinner-rotate-4cc49487 {\nfrom {\n    transform: rotate(0deg);\n}\nto {\n    transform: rotate(360deg);\n}\n}\n.reset-filters-btn[data-v-4cc49487] {\n  width: 36px;\n  height: 36px;\n  border: 1px solid #e5e7eb;\n  background: white;\n  border-radius: 6px;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);\n  outline: none;\n  box-shadow: none;\n}\n.reset-filters-btn svg[data-v-4cc49487] {\n  width: 16px;\n  height: 16px;\n  color: #6b7280;\n}\n.reset-filters-btn[data-v-4cc49487]:hover {\n  border-color: #667eea;\n  background: rgba(102, 126, 234, 0.05);\n}\n.reset-filters-btn:hover svg[data-v-4cc49487] {\n  color: #667eea;\n}\n.reset-filters-btn[data-v-4cc49487]:focus, .reset-filters-btn[data-v-4cc49487]:active, .reset-filters-btn[data-v-4cc49487]:focus-visible {\n  outline: none !important;\n  box-shadow: none !important;\n}\n.reset-filters-btn[data-v-4cc49487] {\n  -webkit-tap-highlight-color: transparent;\n}\n.products-container[data-v-4cc49487] {\n  flex: 1;\n  overflow-y: auto;\n  padding: 20px 24px;\n  padding-bottom: 100px;\n}\n.products-grid[data-v-4cc49487] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));\n  gap: 16px;\n}\n.product-card[data-v-4cc49487] {\n  background: #ffffff;\n  border: 1px solid #e5e7eb;\n  border-radius: 12px;\n  overflow: hidden;\n  cursor: pointer;\n  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n}\n.product-card[data-v-4cc49487]:hover {\n  border-color: #667eea;\n  box-shadow: 0 12px 32px rgba(102, 126, 234, 0.15);\n  transform: translateY(-6px);\n}\n.product-card:hover .add-to-cart-btn[data-v-4cc49487] {\n  transform: scale(1.15);\n}\n.product-image-wrapper[data-v-4cc49487] {\n  position: relative;\n  width: 100%;\n  height: 140px;\n  background: linear-gradient(135deg, rgba(102, 126, 234, 0.05) 0%, rgba(118, 75, 162, 0.05) 100%);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-bottom: 1px solid #e5e7eb;\n}\n.product-image-wrapper .product-image[data-v-4cc49487] {\n  width: 100%;\n  height: 100%;\n  -o-object-fit: cover;\n     object-fit: cover;\n  -o-object-position: center;\n     object-position: center;\n  display: block;\n}\n.product-image-wrapper .product-image-placeholder[data-v-4cc49487] {\n  font-size: 48px;\n  font-weight: 700;\n  color: rgba(102, 126, 234, 0.2);\n}\n.product-image-wrapper .discount-badge[data-v-4cc49487] {\n  position: absolute;\n  top: 8px;\n  right: 8px;\n  background: linear-gradient(135deg, #f59e0b 0%, #ef4444 100%);\n  color: white;\n  padding: 6px 10px;\n  border-radius: 6px;\n  font-size: 11px;\n  font-weight: 700;\n  box-shadow: 0 3px 10px rgba(239, 68, 68, 0.25);\n}\n.product-details[data-v-4cc49487] {\n  padding: 12px;\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n}\n.product-details .product-name[data-v-4cc49487] {\n  margin: 0 0 4px 0;\n  font-size: 13px;\n  font-weight: 600;\n  color: #1a1a2e;\n  line-height: 1.4;\n  display: -webkit-box;\n  -webkit-line-clamp: 2;\n  line-clamp: 2;\n  -webkit-box-orient: vertical;\n  overflow: hidden;\n}\n.product-details .product-brand[data-v-4cc49487] {\n  margin: 0 0 4px 0;\n  font-size: 11px;\n  color: #9ca3af;\n  text-transform: uppercase;\n  letter-spacing: 0.3px;\n  font-weight: 500;\n}\n.product-details .product-stock[data-v-4cc49487] {\n  margin: 0 0 8px 0;\n  font-size: 11px;\n  color: #10b981;\n  font-weight: 600;\n}\n.product-details .product-stock.low-stock[data-v-4cc49487] {\n  color: #f59e0b;\n}\n.product-details .product-footer[data-v-4cc49487] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-top: auto;\n  padding-top: 10px;\n  border-top: 1px solid #e5e7eb;\n}\n.product-details .product-footer .product-price[data-v-4cc49487] {\n  font-size: 14px;\n  font-weight: 700;\n  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n  background-clip: text;\n}\n.product-details .product-footer .add-to-cart-btn[data-v-4cc49487] {\n  width: 32px;\n  height: 32px;\n  border: none;\n  background: rgba(102, 126, 234, 0.1);\n  color: #667eea;\n  border-radius: 6px;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);\n  outline: none;\n  box-shadow: none;\n}\n.product-details .product-footer .add-to-cart-btn svg[data-v-4cc49487] {\n  width: 16px;\n  height: 16px;\n}\n.product-details .product-footer .add-to-cart-btn[data-v-4cc49487]:hover:not(:disabled) {\n  background: rgba(102, 126, 234, 0.2);\n}\n.product-details .product-footer .add-to-cart-btn[data-v-4cc49487]:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n.product-details .product-footer .add-to-cart-btn[data-v-4cc49487]:focus, .product-details .product-footer .add-to-cart-btn[data-v-4cc49487]:active, .product-details .product-footer .add-to-cart-btn[data-v-4cc49487]:focus-visible {\n  outline: none !important;\n  box-shadow: none !important;\n}\n.product-details .product-footer .add-to-cart-btn[data-v-4cc49487] {\n  -webkit-tap-highlight-color: transparent;\n}\n\n/* ============================================\n   FIXED FOOTER BAR\n   ============================================ */\n.pos-footer-bar[data-v-4cc49487] {\n  position: fixed;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  gap: 12px;\n  padding: 12px 24px;\n  background: #ffffff;\n  border-top: 1px solid #e5e7eb;\n  box-shadow: 0 -4px 16px rgba(0, 0, 0, 0.08);\n  z-index: 1000;\n  height: auto;\n}\n.footer-status-indicator[data-v-4cc49487] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  font-size: 15px;\n  color: #10b981;\n}\n.footer-status-indicator svg[data-v-4cc49487] {\n  width: 16px;\n  height: 16px;\n}\n.footer-status-indicator.is-offline[data-v-4cc49487] {\n  color: #f59e0b;\n}\n.footer-main-group[data-v-4cc49487] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  flex: 1;\n  justify-content: center;\n}\n.footer-main-group .action-btn[data-v-4cc49487] {\n  padding: 12px 0;\n}\n.action-btn[data-v-4cc49487] {\n  padding: 12px 20px;\n  border: none;\n  border-radius: 12px;\n  font-size: 14px;\n  font-weight: 600;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n  font-family: \"Inter\", \"Poppins\", \"Nunito\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", sans-serif;\n  outline: none;\n  box-shadow: none;\n}\n.action-btn svg[data-v-4cc49487] {\n  width: 18px;\n  height: 18px;\n}\n.action-btn[data-v-4cc49487]:hover {\n  transform: translateY(-2px);\n}\n.action-btn[data-v-4cc49487]:active {\n  transform: translateY(0);\n}\n.action-btn[data-v-4cc49487]:focus, .action-btn[data-v-4cc49487]:active, .action-btn[data-v-4cc49487]:focus-visible {\n  outline: none !important;\n  box-shadow: none !important;\n}\n.action-btn[data-v-4cc49487] {\n  -webkit-tap-highlight-color: transparent;\n}\n.action-btn-secondary[data-v-4cc49487] {\n  border: 1.5px solid #e5e7eb;\n  background: white;\n  color: #6b7280;\n}\n.action-btn-secondary[data-v-4cc49487]:hover {\n  border-color: #667eea;\n  background: rgba(102, 126, 234, 0.05);\n  color: #667eea;\n}\n[data-v-4cc49487] .action-btn-icon {\n  width: 44px;\n  height: 44px;\n  padding: 0;\n  border: 1px solid #e5e7eb;\n  background: white;\n  color: #6b7280;\n  border-radius: 12px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  line-height: 1;\n  cursor: pointer;\n}\n[data-v-4cc49487] .action-btn-icon i {\n  font-size: 18px;\n  line-height: 1;\n  display: inline-block;\n  vertical-align: middle;\n}\n[data-v-4cc49487] .action-btn-icon:hover {\n  border-color: #667eea;\n  background: rgba(102, 126, 234, 0.05);\n  color: #667eea;\n}\n[data-v-4cc49487] .action-btn-icon:focus,[data-v-4cc49487] .action-btn-icon:active,[data-v-4cc49487] .action-btn-icon:focus-visible {\n  outline: none !important;\n  box-shadow: none !important;\n}\n[data-v-4cc49487] .action-btn-icon {\n  -webkit-tap-highlight-color: transparent;\n}\n\n/* Offline status button - always red */\n.btn-offline-status[data-v-4cc49487] {\n  border-color: #ef4444 !important;\n  background: #ef4444 !important;\n  color: #fff !important;\n}\n.btn-offline-status i[data-v-4cc49487] {\n  color: #fff !important;\n}\n.btn-offline-status[data-v-4cc49487]:hover {\n  border-color: rgb(236.9901477833, 44.5098522167, 44.5098522167) !important;\n  background: rgb(236.9901477833, 44.5098522167, 44.5098522167) !important;\n  color: #fff !important;\n}\n\n/* Ensure icomoon icons render consistently inside this component */\n[data-v-4cc49487] i[class^=\"i-\"] {\n  line-height: 1;\n  display: inline-block;\n  vertical-align: middle;\n}\n.action-btn-primary[data-v-4cc49487] {\n  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);\n  color: white;\n  box-shadow: 0 4px 16px rgba(102, 126, 234, 0.25);\n  flex: 1;\n  max-width: 300px;\n  justify-content: center;\n}\n.action-btn-primary[data-v-4cc49487]:hover:not(:disabled) {\n  box-shadow: 0 6px 24px rgba(102, 126, 234, 0.35);\n  background: linear-gradient(135deg, #5568d3 0%, #69408f 100%);\n}\n.action-btn-primary[data-v-4cc49487]:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n.footer-space[data-v-4cc49487] {\n  flex: 1;\n}\n\n/* Languages dropdown */\n[data-v-4cc49487] #lang-dd .dropdown-menu {\n  min-width: 220px;\n  padding: 8px;\n}\n.lang-menu[data-v-4cc49487] {\n  display: grid;\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n  gap: 6px;\n}\n.lang-item[data-v-4cc49487] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 8px;\n  border: 1px solid #e5e7eb;\n  border-radius: 8px;\n  background: #fff;\n  cursor: pointer;\n  width: 100%;\n  text-align: left;\n}\n.lang-item[data-v-4cc49487]:hover {\n  border-color: #667eea;\n  background: rgba(102, 126, 234, 0.06);\n}\n.lang-item .flag-icon[data-v-4cc49487] {\n  width: 20px;\n  height: 14px;\n  -o-object-fit: cover;\n     object-fit: cover;\n}\n.lang-item .title-lang[data-v-4cc49487] {\n  font-size: 12px;\n  color: #1a1a2e;\n}\n\n/* New Customer Modal improvements */\n[data-v-4cc49487] .new-customer-form .form-group {\n  margin-bottom: 12px;\n}\n[data-v-4cc49487] .new-customer-form input.form-control {\n  height: 38px;\n  border-radius: 8px;\n}\n[data-v-4cc49487] .new-customer-form .custom-control-label {\n  -webkit-user-select: none;\n     -moz-user-select: none;\n          user-select: none;\n}\n[data-v-4cc49487] .new-customer-form .loyalty-eligible-row {\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n  padding: 10px 12px;\n  border: 1px solid #e5e7eb;\n  border-radius: 10px;\n  background: #fff;\n}\n[data-v-4cc49487] .new-customer-form .loyalty-info {\n  display: flex;\n  flex-direction: column;\n}\n[data-v-4cc49487] .new-customer-form .loyalty-title {\n  font-weight: 700;\n  color: #1a1a2e;\n  margin-bottom: 2px;\n}\n[data-v-4cc49487] .new-customer-form .loyalty-help {\n  font-size: 12px;\n}\n.pos-gate-loader[data-v-4cc49487] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 100vh;\n  width: 100vw;\n}\n.card-loading-overlay[data-v-4cc49487] {\n  position: absolute;\n  inset: 0;\n  background: rgba(255, 255, 255, 0.6);\n  backdrop-filter: saturate(150%) blur(2px);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: inherit;\n  z-index: 2;\n}\n\n/* Today Sales modal */\n.today-sales-grid[data-v-4cc49487] {\n  display: grid;\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n  gap: 12px;\n}\n.ts-card[data-v-4cc49487] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  border: 1px solid #e5e7eb;\n  border-radius: 10px;\n  padding: 12px;\n  background: #fff;\n}\n.ts-icon[data-v-4cc49487] {\n  width: 40px;\n  height: 40px;\n  border-radius: 10px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: #fff;\n}\n.ts-icon i[data-v-4cc49487] {\n  font-size: 18px;\n}\n.ts-icon.primary[data-v-4cc49487] {\n  background: #667eea;\n}\n.ts-icon.success[data-v-4cc49487] {\n  background: #10b981;\n}\n.ts-icon.warning[data-v-4cc49487] {\n  background: #f59e0b;\n}\n.ts-icon.info[data-v-4cc49487] {\n  background: #3b82f6;\n}\n.ts-icon.danger[data-v-4cc49487] {\n  background: #ef4444;\n}\n.ts-content[data-v-4cc49487] {\n  display: flex;\n  flex-direction: column;\n}\n.ts-label[data-v-4cc49487] {\n  font-size: 12px;\n  color: #9ca3af;\n}\n.ts-value[data-v-4cc49487] {\n  font-weight: 700;\n  color: #1a1a2e;\n}\n\n/* ============================================\n   TOTAL PAYABLE SECTION\n   ============================================ */\n.total-payable-section[data-v-4cc49487] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 4px;\n  padding: 0 20px;\n  border-radius: 12px;\n  background: linear-gradient(135deg, rgba(102, 126, 234, 0.08) 0%, rgba(118, 75, 162, 0.08) 100%);\n  padding: 12px 20px;\n}\n\n/* Points convert UI */\n.points-group[data-v-4cc49487] {\n  display: grid;\n  grid-template-columns: 1fr auto;\n  gap: 8px;\n  align-items: center;\n}\n.convert-points-btn[data-v-4cc49487] {\n  border: 1px solid #e5e7eb;\n  background: white;\n  color: #111827;\n  border-radius: 8px;\n  padding: 6px 10px;\n  font-size: 12px;\n  font-weight: 600;\n  cursor: pointer;\n}\n.convert-points-btn[data-v-4cc49487]:hover {\n  border-color: #667eea;\n  background: rgba(102, 126, 234, 0.06);\n}\n.convert-points-btn.converted[data-v-4cc49487] {\n  border: 1px solid #9CA3AF;\n  color: #6B7280;\n}\n\n/* Redesigned points row */\n.points-convert-row[data-v-4cc49487] {\n  display: grid;\n  grid-template-columns: 1fr;\n  gap: 10px;\n  align-items: stretch;\n  padding: 10px;\n  border: 1px solid #e5e7eb;\n  border-radius: 10px;\n  background: #fff;\n}\n.points-convert-row.converted[data-v-4cc49487] {\n  border-color: #9CA3AF;\n  background: #f9fafb;\n}\n.points-left[data-v-4cc49487] {\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n}\n.points-header[data-v-4cc49487] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 10px;\n}\n.label-line[data-v-4cc49487] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  font-weight: 600;\n  color: #1a1a2e;\n}\n.points-value[data-v-4cc49487] {\n  font-weight: 700;\n  color: #1a1a2e;\n  text-align: right;\n}\n.discount-hint[data-v-4cc49487] {\n  grid-column: 1/-1;\n  font-size: 12px;\n  color: #10b981;\n}\n.points-actions[data-v-4cc49487] {\n  display: flex;\n  align-items: center;\n  flex-wrap: wrap;\n  gap: 8px;\n}\n.points-actions .flat-input[data-v-4cc49487] {\n  width: 140px;\n  max-width: 100%;\n}\n.convert-btn[data-v-4cc49487] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  border: 1px solid #e5e7eb;\n  background: white;\n  color: #111827;\n  border-radius: 8px;\n  padding: 8px 12px;\n  font-size: 12px;\n  font-weight: 700;\n  cursor: pointer;\n}\n.convert-btn[data-v-4cc49487]:hover {\n  border-color: #667eea;\n  background: rgba(102, 126, 234, 0.06);\n}\n.convert-btn.converted[data-v-4cc49487] {\n  border-color: #9CA3AF;\n  color: #6B7280;\n}\n.convert-btn[data-v-4cc49487]:focus,\n.convert-btn[data-v-4cc49487]:active,\n.convert-btn[data-v-4cc49487]:focus-visible {\n  outline: none !important;\n  box-shadow: none !important;\n}\n.convert-btn[data-v-4cc49487] {\n  -webkit-tap-highlight-color: transparent;\n}\n\n/* Backward compatibility for earlier class name */\n.convert-points-btn[data-v-4cc49487]:focus,\n.convert-points-btn[data-v-4cc49487]:active,\n.convert-points-btn[data-v-4cc49487]:focus-visible {\n  outline: none !important;\n  box-shadow: none !important;\n}\n.convert-points-btn[data-v-4cc49487] {\n  -webkit-tap-highlight-color: transparent;\n}\n@media (max-width: 576px) {\n.points-actions[data-v-4cc49487] {\n    justify-content: flex-start;\n    flex-direction: column;\n    align-items: stretch;\n}\n.points-actions .flat-input[data-v-4cc49487] {\n    width: 100%;\n}\n.convert-btn[data-v-4cc49487] {\n    width: 100%;\n    justify-content: center;\n}\n}\n.payable-label[data-v-4cc49487] {\n  font-size: 11px;\n  font-weight: 600;\n  color: #9ca3af;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.payable-amount[data-v-4cc49487] {\n  font-size: 20px;\n  font-weight: 700;\n  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n  background-clip: text;\n}\n.footer-divider[data-v-4cc49487] {\n  width: 1px;\n  height: 40px;\n  background: #e5e7eb;\n  margin: 0 8px;\n}\n\n/* ============================================\n   PAGINATION FOOTER\n   ============================================ */\n.pagination-footer[data-v-4cc49487] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 16px;\n  padding: 12px 16px;\n  border-top: 1px solid #e5e7eb;\n  background: linear-gradient(to right, #fafbfc 0%, white 100%);\n  flex-shrink: 0;\n  position: sticky;\n  bottom: 0;\n  z-index: 50;\n}\n.pagination-btn[data-v-4cc49487] {\n  width: 36px;\n  height: 36px;\n  border: 1px solid #e5e7eb;\n  background: white;\n  border-radius: 6px;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);\n  color: #6b7280;\n  flex-shrink: 0;\n}\n.pagination-btn svg[data-v-4cc49487] {\n  width: 16px;\n  height: 16px;\n}\n.pagination-btn[data-v-4cc49487]:hover:not(:disabled) {\n  border-color: #667eea;\n  background: rgba(102, 126, 234, 0.05);\n  color: #667eea;\n}\n.pagination-btn[data-v-4cc49487]:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n.pagination-info[data-v-4cc49487] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 4px;\n  min-width: 140px;\n}\n.pagination-info .page-number[data-v-4cc49487] {\n  font-size: 12px;\n  font-weight: 600;\n  color: #1a1a2e;\n}\n.pagination-info .products-count[data-v-4cc49487] {\n  font-size: 11px;\n  color: #9ca3af;\n}\n.pagination-dots[data-v-4cc49487] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  flex-wrap: wrap;\n  justify-content: center;\n  max-width: 300px;\n}\n.pagination-dot[data-v-4cc49487] {\n  width: 32px;\n  height: 32px;\n  border: 1px solid #e5e7eb;\n  background: white;\n  border-radius: 6px;\n  cursor: pointer;\n  font-size: 11px;\n  font-weight: 600;\n  color: #6b7280;\n  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.pagination-dot[data-v-4cc49487]:hover {\n  border-color: #667eea;\n  background: rgba(102, 126, 234, 0.05);\n  color: #667eea;\n}\n.pagination-dot.active[data-v-4cc49487] {\n  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);\n  color: white;\n  border-color: transparent;\n  box-shadow: 0 2px 8px rgba(102, 126, 234, 0.25);\n}\n\n/* ============================================\n   RESPONSIVE DESIGN\n   ============================================ */\n@media (max-width: 1400px) {\n.pos-container[data-v-4cc49487] {\n    grid-template-columns: 400px 1fr;\n    gap: 20px;\n}\n.products-grid[data-v-4cc49487] {\n    grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));\n}\n.pos-header[data-v-4cc49487] {\n    gap: 16px;\n}\n.header-right[data-v-4cc49487] {\n    gap: 8px;\n}\n}\n@media (max-width: 1200px) {\n.pos-header[data-v-4cc49487] {\n    gap: 12px;\n}\n.summary-breakdown[data-v-4cc49487] {\n    margin-top: 8px;\n    padding-top: 8px;\n    border-top: 1px dashed var(--color-border);\n    display: grid;\n    grid-template-columns: 1fr;\n    gap: 6px;\n}\n.bd-item[data-v-4cc49487] {\n    display: flex;\n    justify-content: space-between;\n    font-size: 12px;\n    color: #6b7280;\n}\n.brand-icon[data-v-4cc49487] {\n    width: 36px;\n    height: 36px;\n    font-size: 18px;\n}\n.brand-info h2[data-v-4cc49487] {\n    font-size: 16px;\n}\n.brand-info p[data-v-4cc49487] {\n    font-size: 10px;\n}\n}\n@media (max-width: 1000px) {\n.pos-header[data-v-4cc49487] {\n    gap: 10px;\n    align-items: stretch;\n    flex-wrap: wrap;\n}\n.header-left[data-v-4cc49487] {\n    min-width: 0;\n}\n.brand-info h2[data-v-4cc49487] {\n    font-size: 15px;\n}\n.header-center[data-v-4cc49487] {\n    order: 3;\n    flex: 1 1 100%;\n    grid-column: 1/-1;\n}\n.header-center .search-wrapper[data-v-4cc49487] {\n    width: 100%;\n}\n.header-right[data-v-4cc49487] {\n    gap: 6px;\n    flex-wrap: wrap;\n    width: 100%;\n}\n.header-right .user-profile[data-v-4cc49487] {\n    width: 36px;\n    height: 36px;\n    font-size: 12px;\n    flex-shrink: 0;\n}\n.pos-codecanyon[data-v-4cc49487] {\n    height: auto;\n    min-height: 100vh;\n    overflow: visible;\n}\n.pos-container[data-v-4cc49487] {\n    grid-template-columns: 1fr;\n    gap: 16px;\n    padding-bottom: 24px;\n    height: auto;\n    overflow: visible;\n}\n.pos-column-left[data-v-4cc49487] {\n    gap: 16px;\n    height: auto;\n    flex-direction: row;\n    overflow-x: auto;\n}\n.card-added-products[data-v-4cc49487] {\n    max-height: none;\n    flex: 0 0 45%;\n    min-width: 0;\n}\n.card-summary[data-v-4cc49487] {\n    flex: 0 0 55%;\n    min-width: 0;\n}\n.products-grid[data-v-4cc49487] {\n    grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));\n}\n.products-container[data-v-4cc49487] {\n    padding-bottom: 16px;\n}\n.cart-section[data-v-4cc49487] {\n    max-height: none;\n}\n.pos-footer-bar[data-v-4cc49487] {\n    position: static;\n}\n}\n@media (max-width: 1024px) {\n.pos-header[data-v-4cc49487] {\n    gap: 12px;\n    padding: 12px 16px;\n    min-height: auto;\n    position: static !important;\n    height: auto;\n    align-items: stretch;\n    flex-wrap: wrap;\n}\n.pos-footer-bar[data-v-4cc49487] {\n    position: static;\n}\n  /* Tablet layout: stack checkout above Available Products (single column) */\n.pos-codecanyon[data-v-4cc49487] {\n    height: auto;\n    min-height: 100vh;\n    overflow: visible;\n}\n.pos-container[data-v-4cc49487] {\n    grid-template-columns: 1fr;\n    height: auto;\n    overflow: visible;\n}\n.pos-column-left[data-v-4cc49487] {\n    height: auto;\n    overflow: visible;\n}\n  /* Checkout card: avoid cramped internal scroll on tablet */\n.cart-section[data-v-4cc49487] {\n    max-height: none;\n}\n.summary-section[data-v-4cc49487] {\n    padding-bottom: 16px;\n}\n  /* Available Products card: remove excessive bottom padding on tablet */\n.products-container[data-v-4cc49487] {\n    padding-bottom: 16px;\n}\n  /* Show brand icon at tablet size */\n.header-left[data-v-4cc49487] {\n    order: 1;\n    display: flex !important;\n    width: 100%;\n    height: auto;\n}\n.header-center[data-v-4cc49487] {\n    order: 3;\n    width: 100%;\n    height: 40px;\n}\n.header-center .search-wrapper[data-v-4cc49487] {\n    height: 40px;\n    margin-top: 20px;\n}\n.header-center .search-wrapper > .action-btn-icon[data-v-4cc49487] {\n    width: 36px !important;\n}\n.header-right[data-v-4cc49487] {\n    order: 2;\n    width: 100%;\n    height: 40px;\n    gap: 6px;\n    flex-wrap: wrap;\n}\n.header-right .user-profile[data-v-4cc49487] {\n    width: 40px;\n    height: 40px;\n    flex-shrink: 0;\n}\n  /* Small size language dropdown toggle (override Bootstrap-Vue) */\n[data-v-4cc49487] button#lang-dd__BV_toggle_ {\n    width: 30px !important;\n    height: 30px !important;\n    min-width: 30px !important;\n    min-height: 30px !important;\n    line-height: 30px !important;\n    padding: 0 !important;\n    display: inline-flex !important;\n    align-items: center !important;\n    justify-content: center !important;\n}\n[data-v-4cc49487] button#lang-dd__BV_toggle_ > a.action-btn-icon,[data-v-4cc49487] button#lang-dd__BV_toggle_ .action-btn-icon {\n    width: 30px !important;\n    height: 30px !important;\n    padding: 0 !important;\n    line-height: 30px !important;\n}\n.brand[data-v-4cc49487] {\n    gap: 8px;\n}\n.brand-icon[data-v-4cc49487] {\n    width: 32px;\n    height: 32px;\n    font-size: 16px;\n}\n.brand-info h2[data-v-4cc49487] {\n    font-size: 14px;\n}\n.brand-info p[data-v-4cc49487] {\n    font-size: 10px;\n}\n.pos-container[data-v-4cc49487] {\n    padding: 12px 16px;\n    gap: 12px;\n}\n  /* Small screen spacing removed per request */\n  /* Compact header icons on small screens */\n[data-v-4cc49487] .action-btn-icon {\n    width: 30px !important;\n    height: 30px !important;\n}\n.pos-footer-bar[data-v-4cc49487] {\n    padding: 12px 16px;\n    gap: 8px;\n    flex-wrap: wrap;\n    flex-direction: column;\n    align-items: stretch;\n}\n.footer-status-indicator[data-v-4cc49487] {\n    width: 100%;\n    justify-content: center;\n    margin-bottom: 4px;\n}\n.footer-main-group[data-v-4cc49487] {\n    width: 100%;\n    flex-wrap: wrap;\n    justify-content: center;\n}\n.action-btn[data-v-4cc49487] {\n    padding: 10px 53px;\n    font-size: 12px;\n}\n.action-btn-primary[data-v-4cc49487] {\n    flex: 1;\n    min-width: 100%;\n}\n.total-payable-section[data-v-4cc49487] {\n    order: -1;\n    width: 100%;\n    margin-bottom: 8px;\n}\n.footer-divider[data-v-4cc49487] {\n    display: none;\n}\n.products-grid[data-v-4cc49487] {\n    grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));\n}\n.pos-autocomplete-results[data-v-4cc49487] {\n    left: 0;\n    right: 0;\n}\n  /* Filter section full width with 40/40/20 layout */\n.pos-header-filters[data-v-4cc49487] {\n    width: 100%;\n    flex: 1 1 100%;\n}\n.pos-header-filters .category-select-header[data-v-4cc49487],\n  .pos-header-filters .brand-select-header[data-v-4cc49487] {\n    flex: 1 1 0;\n    min-width: 0;\n}\n.header-right .btn-offline-status[data-v-4cc49487] {\n    position: relative;\n}\n.header-right .btn-offline-status.is-offline[data-v-4cc49487] {\n    border-color: #ef4444;\n    background: #ef4444;\n    color: #fff;\n}\n.header-right .btn-offline-status.is-offline i[data-v-4cc49487] {\n    color: #fff;\n}\n.header-right .btn-offline-status .offline-badge[data-v-4cc49487] {\n    position: absolute;\n    top: -4px;\n    right: -2px;\n    background: #ef4444;\n    color: #fff;\n    border-radius: 999px;\n    padding: 0 4px;\n    font-size: 10px;\n    line-height: 1.4;\n}\n  /* Hide Available Products heading on small screens */\n.card.card-products .card-header > h3[data-v-4cc49487] {\n    display: none !important;\n}\n}\n@media (max-width: 640px) {\n.pos-header[data-v-4cc49487] {\n    padding: 10px 12px;\n    gap: 10px;\n    min-height: auto;\n}\n.header-center[data-v-4cc49487] {\n    height: 38px;\n}\n.header-center .search-wrapper[data-v-4cc49487] {\n    height: 38px;\n}\n.header-center .search-input[data-v-4cc49487] {\n    padding: 0 10px 0 36px;\n    font-size: 12px;\n}\n.header-center .search-icon[data-v-4cc49487] {\n    width: 16px;\n    height: 16px;\n    left: 10px;\n}\n.header-right[data-v-4cc49487] {\n    height: 38px;\n    gap: 6px;\n}\n.header-right .user-profile[data-v-4cc49487] {\n    width: 38px;\n    height: 38px;\n    font-size: 11px;\n}\n.pos-container[data-v-4cc49487] {\n    padding: 12px 12px;\n    gap: 10px;\n}\n.card-header[data-v-4cc49487] {\n    padding: 14px 16px;\n}\n.card-header h3[data-v-4cc49487] {\n    font-size: 15px;\n}\n.charge-row[data-v-4cc49487] {\n    gap: 0;\n}\n.charge-row label[data-v-4cc49487] {\n    font-size: 10px;\n}\n.charge-row .charge-input-group[data-v-4cc49487] {\n    width: 100px;\n}\n.products-grid[data-v-4cc49487] {\n    grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));\n    gap: 12px;\n}\n  /* Hide elements on small screens */\n.header-left[data-v-4cc49487] {\n    display: none !important;\n}\n.card.card-products .card-header > h3[data-v-4cc49487] {\n    display: none !important;\n}\n.pagination-footer[data-v-4cc49487] {\n    gap: 8px;\n    padding: 10px 12px;\n}\n.pagination-dots[data-v-4cc49487] {\n    max-width: 250px;\n}\n.pos-footer-bar[data-v-4cc49487] {\n    padding: 10px 12px;\n    gap: 6px;\n}\n.total-payable-section[data-v-4cc49487] {\n    padding: 10px 12px;\n}\n.payable-amount[data-v-4cc49487] {\n    font-size: 18px;\n}\n  /* Header filters full width on ≤640px */\n.pos-header-filters[data-v-4cc49487] {\n    width: 100%;\n    flex: 1 1 100%;\n}\n.pos-header-filters .category-select-header[data-v-4cc49487],\n  .pos-header-filters .brand-select-header[data-v-4cc49487] {\n    flex: 1 1 0;\n    min-width: 0;\n}\n}\n@media (max-width: 768px) {\n.pos-header[data-v-4cc49487] {\n    padding: 20px 10px;\n    gap: 1px;\n    min-height: auto;\n}\n  /* Swap headers: hide desktop header, show mobile header */\n.pos-header[data-v-4cc49487] {\n    display: none !important;\n}\n.pos-header-mobile[data-v-4cc49487] {\n    display: block;\n    padding: 12px 10px;\n    background: #ffffff;\n    border-bottom: 1px solid #e5e7eb;\n    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);\n}\n.pos-header-mobile .mobile-row[data-v-4cc49487] {\n    display: flex;\n    align-items: center;\n    gap: 8px;\n    margin-bottom: 8px;\n}\n.pos-header-mobile .mobile-row[data-v-4cc49487]:last-child {\n    margin-bottom: 0;\n}\n.pos-header-mobile .mobile-top[data-v-4cc49487] {\n    justify-content: space-between;\n}\n.pos-header-mobile .mobile-top .brand[data-v-4cc49487] {\n    display: flex;\n    align-items: center;\n}\n.pos-header-mobile .mobile-top .brand .brand-icon[data-v-4cc49487] {\n    width: 44px;\n    height: 44px;\n    border-radius: 12px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    font-weight: 700;\n}\n.pos-header-mobile .mobile-top .top-icons[data-v-4cc49487] {\n    display: inline-flex;\n    align-items: center;\n    gap: 6px;\n}\n  /* Keep icon containers same size as desktop */\n.pos-header-mobile .mobile-top .top-icons .action-btn-icon[data-v-4cc49487] {\n    width: 40px !important;\n    height: 40px !important;\n    display: inline-flex;\n    align-items: center;\n    justify-content: center;\n}\n.pos-header-mobile .mobile-top .top-icons .btn-pos-settings[data-v-4cc49487] {\n    width: 40px !important;\n    height: 40px !important;\n}\n.pos-header-mobile .mobile-top .top-icons .btn-offline-status[data-v-4cc49487] {\n    width: 40px !important;\n    height: 40px !important;\n}\n.pos-header-mobile .mobile-top .top-icons .btn-offline-status.is-offline[data-v-4cc49487] {\n    border-color: #ef4444;\n    background: #ef4444;\n    color: #fff;\n}\n.pos-header-mobile .mobile-top .top-icons .btn-offline-status.is-offline i[data-v-4cc49487] {\n    color: #fff;\n}\n.pos-header-mobile .mobile-top .top-icons .btn-offline-status .offline-badge[data-v-4cc49487] {\n    top: -4px;\n    right: -2px;\n    background: #ef4444;\n    color: #fff;\n    border-radius: 999px;\n    padding: 0 4px;\n    font-size: 10px;\n    line-height: 1.4;\n}\n.pos-header-mobile .mobile-top .top-icons .user-profile[data-v-4cc49487] {\n    width: 40px !important;\n    height: 40px !important;\n}\n  /* Bootstrap-Vue language toggle button size */\n[data-v-4cc49487] button#lang-dd-mobile__BV_toggle_ {\n    width: 40px !important;\n    height: 40px !important;\n    min-width: 40px !important;\n    min-height: 40px !important;\n    padding: 0 !important;\n    display: inline-flex !important;\n    align-items: center !important;\n    justify-content: center !important;\n}\n[data-v-4cc49487] button#lang-dd-mobile__BV_toggle_ > a.action-btn-icon,[data-v-4cc49487] button#lang-dd-mobile__BV_toggle_ .action-btn-icon {\n    width: 40px !important;\n    height: 40px !important;\n}\n  /* Bootstrap-Vue user dropdown container and toggle size */\n.pos-header-mobile #user-dd-mobile[data-v-4cc49487] {\n    width: 40px !important;\n    height: 40px !important;\n}\n[data-v-4cc49487] button#user-dd-mobile__BV_toggle_ {\n    width: 40px !important;\n    height: 40px !important;\n    min-width: 40px !important;\n    min-height: 40px !important;\n    padding: 0 !important;\n    display: inline-flex !important;\n    align-items: center !important;\n    justify-content: center !important;\n}\n.pos-header-mobile .warehouse-select[data-v-4cc49487],\n  .pos-header-mobile .customer-select-header[data-v-4cc49487],\n  .pos-header-mobile .category-select-header[data-v-4cc49487],\n  .pos-header-mobile .brand-select-header[data-v-4cc49487] {\n    width: 100%;\n}\n  /* On mobile hide category/brand in header; they appear below search in products card */\n.pos-header-mobile .mobile-row-category[data-v-4cc49487],\n  .pos-header-mobile .mobile-row-brand[data-v-4cc49487] {\n    display: none !important;\n}\n  /* Show category & brand below autocomplete search in products card */\n.card-products-mobile-filters[data-v-4cc49487] {\n    display: flex;\n    flex-direction: column;\n    width: 100%;\n    gap: 8px;\n    margin-top: 10px;\n}\n.card-products-mobile-filters .category-select-header[data-v-4cc49487],\n  .card-products-mobile-filters .brand-select-header[data-v-4cc49487] {\n    width: 100%;\n}\n  /* Reuse existing register button neutral style */\n.pos-header-mobile .register-status[data-v-4cc49487] {\n    display: inline-flex;\n    align-items: center;\n    gap: 6px;\n    margin-left: auto;\n}\n.pos-header-mobile .register-toggle-btn[data-v-4cc49487] {\n    background: #f8f9fb;\n    color: #1a1a2e;\n    border: 1px solid #e5e7eb;\n    padding: 4px 10px;\n    font-weight: 600;\n}\n  /* Mobile-only POS header layout */\n.pos-header[data-v-4cc49487] {\n    position: static !important;\n    height: auto !important;\n    flex-wrap: wrap; /* allow stacking below top row */\n    align-items: center; /* align brand with icons on the top row */\n}\n  /* Ensure brand is visible and first */\n.header-left[data-v-4cc49487] {\n    display: flex !important;\n    order: 0;\n    width: auto;\n    height: 36px;\n    align-items: center;\n}\n.header-center[data-v-4cc49487] {\n    height: 36px;\n}\n.header-center .search-wrapper[data-v-4cc49487] {\n    height: 36px;\n}\n.header-center .search-input[data-v-4cc49487] {\n    padding: 0 8px 0 32px;\n    font-size: 11px;\n}\n.header-center .search-icon[data-v-4cc49487] {\n    width: 14px;\n    height: 14px;\n    left: 8px;\n}\n  /* Place search right below register-status */\n.header-center[data-v-4cc49487] {\n    order: 5;\n    width: 100%;\n}\n.header-center .search-wrapper[data-v-4cc49487] {\n    margin-top: 0;\n}\n.header-center .search-wrapper > .action-btn-icon[data-v-4cc49487] {\n    width: 32px !important;\n}\n.header-center .search-input[data-v-4cc49487] {\n    padding: 0 36px 0 32px;\n}\n.header-right[data-v-4cc49487] {\n    height: 36px;\n    gap: 6px;\n}\n.header-right .user-profile[data-v-4cc49487] {\n    width: 36px;\n    height: 36px;\n    font-size: 10px;\n}\n  /* Arrange header-right content rows and ordering */\n.header-right[data-v-4cc49487] {\n    order: 1;\n    width: auto;\n    flex: 1 1 auto;\n    display: flex;\n    flex-wrap: wrap;\n    align-content: flex-start;\n    min-width: 0;\n}\n  /* Top row items: i-Receipt, language, profile (brand is separate in .header-left) */\n.header-right > .action-btn-icon[data-v-4cc49487] {\n    order: 1;\n}\n.header-right > .dropdown.action-btn-icon[data-v-4cc49487] {\n    order: 2;\n    display: inline-flex !important;\n}\n.header-right > .dropdown[data-v-4cc49487]:not(.action-btn-icon) {\n    order: 3;\n}\n  /* Next rows: register, search (as sibling), then selects full width; move POS settings below */\n.header-right > .register-status[data-v-4cc49487] {\n    order: 4;\n    flex: 1 1 100%;\n    min-width: 0;\n}\n.header-right > .warehouse-select[data-v-4cc49487] {\n    order: 6;\n    flex: 1 1 100%;\n    min-width: 0;\n}\n.header-right > .customer-select-header[data-v-4cc49487] {\n    order: 7;\n    flex: 1 1 100%;\n    min-width: 0;\n}\n.header-right > .btn-pos-settings[data-v-4cc49487] {\n    order: 8;\n    display: inline-flex !important;\n}\n  /* Keep brand and icons on the same row */\n.header-left[data-v-4cc49487] {\n    flex: 0 0 auto;\n}\n.header-right[data-v-4cc49487] {\n    flex: 1 1 auto;\n}\n.brand[data-v-4cc49487] {\n    gap: 6px;\n}\n.brand-icon[data-v-4cc49487] {\n    width: 28px;\n    height: 28px;\n    font-size: 14px;\n}\n.brand-info h2[data-v-4cc49487] {\n    font-size: 12px;\n}\n.brand-info p[data-v-4cc49487] {\n    font-size: 9px;\n}\n.pos-container[data-v-4cc49487] {\n    padding: 8px 10px;\n    padding-bottom: 100px;\n    gap: 8px;\n}\n.pos-column-left[data-v-4cc49487] {\n    gap: 12px;\n}\n.card-header[data-v-4cc49487] {\n    padding: 12px 12px;\n}\n.card-header h3[data-v-4cc49487] {\n    font-size: 13px;\n}\n.charge-row[data-v-4cc49487] {\n    gap: 0;\n}\n.charge-row label[data-v-4cc49487] {\n    font-size: 10px;\n}\n.charge-row .charge-input-group[data-v-4cc49487] {\n    width: 100px;\n}\n.products-grid[data-v-4cc49487] {\n    grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));\n    gap: 10px;\n}\n.pagination-footer[data-v-4cc49487] {\n    gap: 6px;\n    padding: 8px 10px;\n}\n.pagination-info[data-v-4cc49487] {\n    min-width: 120px;\n}\n.pagination-dots[data-v-4cc49487] {\n    max-width: 200px;\n}\n.pagination-dot[data-v-4cc49487] {\n    width: 28px;\n    height: 28px;\n    font-size: 10px;\n}\n.product-image-wrapper[data-v-4cc49487] {\n    height: 120px;\n}\n.product-details[data-v-4cc49487] {\n    padding: 10px;\n}\n.product-details .product-name[data-v-4cc49487] {\n    font-size: 11px;\n}\n.product-details .product-brand[data-v-4cc49487] {\n    font-size: 9px;\n}\n.product-details .product-stock[data-v-4cc49487] {\n    font-size: 10px;\n}\n.product-details .product-footer .product-price[data-v-4cc49487] {\n    font-size: 12px;\n}\n.pos-footer-bar[data-v-4cc49487] {\n    padding: 8px 10px;\n    gap: 4px;\n    /* 2x2 footer buttons grid (Home / Reset / Recent Drafts / Hold) */\n}\n.pos-footer-bar .footer-main-group[data-v-4cc49487] {\n    width: 100%;\n    display: grid;\n    grid-template-columns: repeat(2, minmax(0, 1fr));\n    gap: 8px;\n    justify-content: stretch;\n    align-items: stretch;\n}\n.pos-footer-bar[data-v-4cc49487] {\n    /* Remove spacer in grid layout */\n}\n.pos-footer-bar .footer-space[data-v-4cc49487] {\n    display: none;\n}\n.pos-footer-bar[data-v-4cc49487] {\n    /* Secondary actions: 50% / 50% */\n}\n.pos-footer-bar .footer-main-group .action-btn.action-btn-secondary[data-v-4cc49487] {\n    width: 100%;\n    justify-content: center;\n    padding: 8px 10px;\n    font-size: 10px;\n}\n.pos-footer-bar[data-v-4cc49487] {\n    /* Total + Pay Now full width below the 2x2 button grid */\n}\n.pos-footer-bar .total-payable-section[data-v-4cc49487],\n  .pos-footer-bar .action-btn-primary[data-v-4cc49487] {\n    grid-column: 1/-1;\n    width: 100%;\n}\n.pos-footer-bar .action-btn[data-v-4cc49487] {\n    padding: 8px 12px;\n    font-size: 10px;\n}\n.pos-footer-bar .action-btn-icon[data-v-4cc49487] {\n    width: 36px;\n    height: 36px;\n}\n.pos-footer-bar .action-btn-icon svg[data-v-4cc49487] {\n    width: 14px;\n    height: 14px;\n}\n.pos-footer-bar .action-btn-primary[data-v-4cc49487] {\n    min-width: 100%;\n    padding: 8px 12px;\n}\n}\n.premium-payment-modal[data-v-4cc49487] {\n  --color-primary: #667eea;\n  --color-secondary: #764ba2;\n  --color-success: #10b981;\n  --color-danger: #ef4444;\n  --color-warning: #f59e0b;\n  --color-border: #e5e7eb;\n  --color-bg: #f8f9fb;\n  --color-text: #1a1a2e;\n  --color-gray: #6b7280;\n}\n.payment-checkout-wrapper[data-v-4cc49487] {\n  display: flex;\n  flex-direction: column;\n  max-height: 90vh;\n  background: white;\n  border-radius: 16px;\n  overflow: hidden;\n}\n\n/* HEADER */\n.checkout-header[data-v-4cc49487] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 28px 32px;\n  background: linear-gradient(135deg, var(--color-primary) 0%, var(--color-secondary) 100%);\n  color: white;\n  box-shadow: 0 8px 24px rgba(102, 126, 234, 0.2);\n}\n.checkout-header-content[data-v-4cc49487] {\n  flex: 1;\n}\n.checkout-title[data-v-4cc49487] {\n  margin: 0;\n  font-size: 28px;\n  font-weight: 700;\n  letter-spacing: -0.5px;\n}\n.checkout-subtitle[data-v-4cc49487] {\n  margin: 4px 0 0 0;\n  font-size: 14px;\n  opacity: 0.95;\n}\n.checkout-close[data-v-4cc49487] {\n  background: none;\n  border: none;\n  color: white;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 44px;\n  height: 44px;\n  border-radius: 10px;\n  transition: all 0.2s;\n}\n.checkout-close[data-v-4cc49487]:hover {\n  background: rgba(255, 255, 255, 0.1);\n  transform: scale(1.1);\n}\n.checkout-close svg[data-v-4cc49487] {\n  width: 24px;\n  height: 24px;\n  stroke-width: 2.5;\n}\n\n/* BODY */\n.checkout-body[data-v-4cc49487] {\n  flex: 1;\n  overflow-y: auto;\n  padding: 24px 32px;\n}\n.checkout-form[data-v-4cc49487] {\n  display: contents;\n}\n.checkout-row[data-v-4cc49487] {\n  display: grid;\n  grid-template-columns: 1fr 1.3fr;\n  gap: 28px;\n}\n@media (max-width: 1024px) {\n.checkout-row[data-v-4cc49487] {\n    grid-template-columns: 1fr;\n    gap: 20px;\n}\n}\n/* ORDER SUMMARY */\n.order-summary-card[data-v-4cc49487] {\n  background: linear-gradient(135deg, var(--color-bg) 0%, #ffffff 100%);\n  border: 1px solid var(--color-border);\n  border-radius: 12px;\n  padding: 20px;\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n  height: -moz-fit-content;\n  height: fit-content;\n  position: sticky;\n  top: 0;\n}\n.summary-card-title[data-v-4cc49487] {\n  margin: 0;\n  font-size: 14px;\n  font-weight: 700;\n  color: var(--color-text);\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.summary-items[data-v-4cc49487] {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n}\n.summary-row[data-v-4cc49487] {\n  display: flex;\n  justify-content: space-between;\n  font-size: 13px;\n}\n.summary-label[data-v-4cc49487] {\n  color: var(--color-gray);\n  font-weight: 500;\n}\n.summary-value[data-v-4cc49487] {\n  color: var(--color-text);\n  font-weight: 600;\n}\n.summary-value.text-danger[data-v-4cc49487] {\n  color: var(--color-danger);\n}\n.summary-divider[data-v-4cc49487] {\n  height: 1px;\n  background: var(--color-border);\n  margin: 4px 0;\n}\n.summary-total[data-v-4cc49487] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 12px;\n  background: linear-gradient(135deg, rgba(102, 126, 234, 0.1) 0%, rgba(118, 75, 162, 0.1) 100%);\n  border-radius: 8px;\n}\n.total-label[data-v-4cc49487] {\n  font-size: 13px;\n  font-weight: 600;\n  color: var(--color-gray);\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.total-amount[data-v-4cc49487] {\n  font-size: 20px;\n  font-weight: 700;\n  background: linear-gradient(135deg, var(--color-primary) 0%, var(--color-secondary) 100%);\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n  background-clip: text;\n}\n.payment-status[data-v-4cc49487] {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 12px;\n}\n.status-item[data-v-4cc49487] {\n  text-align: center;\n  padding: 10px;\n  background: var(--color-bg);\n  border-radius: 8px;\n}\n.status-label[data-v-4cc49487] {\n  display: block;\n  font-size: 11px;\n  color: var(--color-gray);\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n  font-weight: 600;\n  margin-bottom: 4px;\n}\n.status-value[data-v-4cc49487] {\n  display: block;\n  font-size: 15px;\n  font-weight: 700;\n  color: var(--color-text);\n}\n.status-value.text-warning[data-v-4cc49487] {\n  color: var(--color-warning);\n}\n.status-value.text-success[data-v-4cc49487] {\n  color: var(--color-success);\n}\n\n/* PAYMENT FORM */\n.payment-form-card[data-v-4cc49487] {\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n}\n.form-section[data-v-4cc49487] {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n}\n.section-header[data-v-4cc49487] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.section-title[data-v-4cc49487] {\n  margin: 0;\n  font-size: 13px;\n  font-weight: 700;\n  color: var(--color-text);\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.line-count[data-v-4cc49487] {\n  font-size: 12px;\n  color: var(--color-gray);\n  background: var(--color-bg);\n  padding: 4px 8px;\n  border-radius: 4px;\n}\n\n/* PAYMENT METHOD TABS */\n.payment-method-tabs[data-v-4cc49487] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));\n  gap: 10px;\n}\n.method-tab[data-v-4cc49487] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 8px;\n  padding: 12px;\n  border: 2px solid var(--color-border);\n  background: white;\n  border-radius: 10px;\n  cursor: pointer;\n  transition: all 0.2s;\n  font-size: 12px;\n  font-weight: 600;\n  color: var(--color-text);\n}\n.method-tab[data-v-4cc49487]:hover {\n  border-color: var(--color-primary);\n  background: linear-gradient(135deg, rgba(102, 126, 234, 0.04) 0%, rgba(118, 75, 162, 0.04) 100%);\n}\n.method-tab.active[data-v-4cc49487] {\n  border-color: var(--color-primary);\n  background: linear-gradient(135deg, rgba(102, 126, 234, 0.1) 0%, rgba(118, 75, 162, 0.1) 100%);\n  color: var(--color-primary);\n}\n.method-icon[data-v-4cc49487] {\n  width: 32px;\n  height: 32px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.method-icon svg[data-v-4cc49487] {\n  width: 100%;\n  height: 100%;\n  stroke-width: 1.5;\n}\n.method-name[data-v-4cc49487] {\n  text-align: center;\n  font-size: 11px;\n}\n\n/* PAYMENT LINES */\n.payment-lines-list[data-v-4cc49487] {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n}\n.payment-line[data-v-4cc49487] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 12px;\n  background: var(--color-bg);\n  border: 1px solid var(--color-border);\n  border-radius: 8px;\n  transition: all 0.2s;\n}\n.payment-line[data-v-4cc49487]:hover {\n  background: white;\n  border-color: var(--color-primary);\n}\n.line-badge[data-v-4cc49487] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 32px;\n  height: 32px;\n  min-width: 32px;\n  background: linear-gradient(135deg, var(--color-primary) 0%, var(--color-secondary) 100%);\n  color: white;\n  border-radius: 8px;\n  font-size: 13px;\n  font-weight: 700;\n}\n.line-content[data-v-4cc49487] {\n  flex: 1;\n}\n.amount-input-group[data-v-4cc49487] {\n  font-size: 13px;\n}\n.line-amount-input[data-v-4cc49487] {\n  border: none;\n  background: white;\n  border-radius: 6px;\n  font-weight: 600;\n  font-size: 14px;\n}\n.line-amount-input[data-v-4cc49487]:focus {\n  box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);\n}\n.line-remove-btn[data-v-4cc49487] {\n  padding: 4px 8px !important;\n  color: var(--color-danger);\n  font-size: 16px;\n}\n.add-line-btn[data-v-4cc49487] {\n  border-color: var(--color-primary);\n  color: var(--color-primary);\n  margin-top: 4px;\n  font-weight: 600;\n}\n\n/* QUICK AMOUNT */\n.quick-amount-grid[data-v-4cc49487] {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 8px;\n}\n.quick-btn[data-v-4cc49487] {\n  font-weight: 600;\n  border-color: var(--color-border);\n  transition: all 0.2s;\n}\n.quick-btn[data-v-4cc49487]:hover {\n  border-color: var(--color-primary);\n  color: var(--color-primary);\n}\n\n/* KEYPAD */\n.keypad[data-v-4cc49487] {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  gap: 8px;\n}\n.keypad-key[data-v-4cc49487] {\n  padding: 12px;\n  background: var(--color-bg);\n  border: 1px solid var(--color-border);\n  border-radius: 8px;\n  font-size: 14px;\n  font-weight: 600;\n  color: var(--color-text);\n  cursor: pointer;\n  transition: all 0.2s;\n}\n.keypad-key[data-v-4cc49487]:hover {\n  border-color: var(--color-primary);\n  background: white;\n  transform: translateY(-2px);\n  box-shadow: 0 4px 12px rgba(102, 126, 234, 0.1);\n}\n.keypad-key[data-v-4cc49487]:active {\n  transform: translateY(0);\n}\n\n/* CREDIT CARD */\n.saved-cards[data-v-4cc49487] {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n}\n.saved-cards-header[data-v-4cc49487] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  font-size: 13px;\n  font-weight: 600;\n}\n.cards-grid[data-v-4cc49487] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));\n  gap: 12px;\n}\n.card-option[data-v-4cc49487] {\n  padding: 16px 12px;\n  background: white;\n  border: 2px solid var(--color-border);\n  border-radius: 10px;\n  cursor: pointer;\n  transition: all 0.2s;\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n  align-items: center;\n  position: relative;\n}\n.card-option[data-v-4cc49487]:hover {\n  border-color: var(--color-primary);\n  box-shadow: 0 4px 12px rgba(102, 126, 234, 0.1);\n}\n.card-option.selected[data-v-4cc49487] {\n  border-color: var(--color-primary);\n  background: linear-gradient(135deg, rgba(102, 126, 234, 0.05) 0%, rgba(118, 75, 162, 0.05) 100%);\n}\n.card-chip[data-v-4cc49487] {\n  width: 40px;\n  height: 30px;\n  background: linear-gradient(135deg, #ffd700 0%, #ffed4e 100%);\n  border-radius: 4px;\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);\n}\n.card-last-four[data-v-4cc49487] {\n  font-size: 14px;\n  font-weight: 700;\n  color: var(--color-text);\n}\n.card-exp[data-v-4cc49487] {\n  font-size: 11px;\n  color: var(--color-gray);\n}\n.card-checkmark[data-v-4cc49487] {\n  position: absolute;\n  top: 8px;\n  right: 8px;\n  width: 24px;\n  height: 24px;\n  background: var(--color-success);\n  color: white;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 14px;\n}\n.new-card-form[data-v-4cc49487] {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n}\n.card-form-label[data-v-4cc49487] {\n  font-size: 12px;\n  font-weight: 600;\n  color: var(--color-gray);\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.stripe-card-element[data-v-4cc49487] {\n  padding: 12px;\n  border: 1px solid var(--color-border);\n  border-radius: 8px;\n  background: white;\n}\n.card-errors[data-v-4cc49487] {\n  color: var(--color-danger);\n  font-size: 12px;\n}\n\n/* FORM ELEMENTS */\n.form-label-sm[data-v-4cc49487] {\n  font-size: 12px !important;\n  font-weight: 600 !important;\n  color: var(--color-gray) !important;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.form-textarea-sm[data-v-4cc49487] {\n  font-size: 13px;\n  border: 1px solid var(--color-border);\n  border-radius: 6px;\n}\n.form-textarea-sm[data-v-4cc49487]:focus {\n  border-color: var(--color-primary);\n  box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);\n}\n.checkboxes-group[data-v-4cc49487] {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n}\n.checkbox-item[data-v-4cc49487] {\n  font-size: 13px;\n  color: var(--color-text);\n}\n.checkbox-item i[data-v-4cc49487] {\n  margin-right: 8px;\n  font-size: 14px;\n}\n\n/* FOOTER */\n.checkout-footer[data-v-4cc49487] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 16px;\n  padding: 16px 32px;\n  border-top: 1px solid var(--color-border);\n  background: var(--color-bg);\n  flex-wrap: wrap;\n}\n.footer-info[data-v-4cc49487] {\n  display: flex;\n  align-items: center;\n  gap: 24px;\n  flex-wrap: wrap;\n}\n.footer-amount[data-v-4cc49487] {\n  display: flex;\n  flex-direction: column;\n}\n.footer-amount .label[data-v-4cc49487] {\n  font-size: 11px;\n  color: var(--color-gray);\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n  font-weight: 600;\n}\n.footer-amount .amount[data-v-4cc49487] {\n  font-size: 16px;\n  font-weight: 700;\n  color: var(--color-text);\n}\n.footer-amount .amount.text-warning[data-v-4cc49487] {\n  color: var(--color-warning);\n}\n.footer-amount .amount.text-success[data-v-4cc49487] {\n  color: var(--color-success);\n}\n.footer-actions[data-v-4cc49487] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n}\n.btn-cancel[data-v-4cc49487] {\n  padding: 10px 24px;\n  font-weight: 600;\n  font-size: 13px;\n}\n.btn-pay[data-v-4cc49487] {\n  padding: 10px 32px;\n  background: linear-gradient(135deg, var(--color-success) 0%, #059669 100%);\n  border: none;\n  color: white;\n  font-weight: 600;\n  min-width: 160px;\n  box-shadow: 0 4px 12px rgba(16, 185, 129, 0.25);\n}\n.btn-pay[data-v-4cc49487]:hover:not(:disabled) {\n  transform: translateY(-2px);\n  box-shadow: 0 8px 20px rgba(16, 185, 129, 0.35);\n}\n.btn-pay[data-v-4cc49487]:disabled {\n  opacity: 0.6;\n}\n.btn-pay i[data-v-4cc49487] {\n  margin-right: 8px;\n}\n\n/* RESPONSIVE */\n@media (max-width: 1024px) {\n.payment-checkout-wrapper[data-v-4cc49487] {\n    max-height: 100vh;\n}\n.checkout-body[data-v-4cc49487] {\n    padding: 16px;\n}\n.checkout-row[data-v-4cc49487] {\n    gap: 16px;\n}\n.order-summary-card[data-v-4cc49487] {\n    position: static;\n    padding: 16px;\n}\n.payment-method-tabs[data-v-4cc49487] {\n    grid-template-columns: repeat(2, 1fr);\n}\n.quick-amount-grid[data-v-4cc49487] {\n    grid-template-columns: repeat(2, 1fr);\n}\n.keypad[data-v-4cc49487] {\n    grid-template-columns: repeat(3, 1fr);\n}\n.checkout-footer[data-v-4cc49487] {\n    flex-direction: column;\n    align-items: flex-end;\n    padding: 12px 16px;\n}\n.footer-info[data-v-4cc49487] {\n    width: 100%;\n    justify-content: space-around;\n}\n.footer-actions[data-v-4cc49487] {\n    width: 100%;\n    gap: 8px;\n}\n.footer-actions button[data-v-4cc49487] {\n    flex: 1;\n}\n}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-8.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-8.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/components/CustomFieldsForm.vue?vue&type=style&index=0&id=6b5d7f34&scoped=true&lang=css":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-8.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-8.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/components/CustomFieldsForm.vue?vue&type=style&index=0&id=6b5d7f34&scoped=true&lang=css ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

"use strict";


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

/***/ "./node_modules/jsbarcode/bin/JsBarcode.js":
/*!*************************************************!*\
  !*** ./node_modules/jsbarcode/bin/JsBarcode.js ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var _barcodes = __webpack_require__(/*! ./barcodes/ */ "./node_modules/jsbarcode/bin/barcodes/index.js");

var _barcodes2 = _interopRequireDefault(_barcodes);

var _merge = __webpack_require__(/*! ./help/merge.js */ "./node_modules/jsbarcode/bin/help/merge.js");

var _merge2 = _interopRequireDefault(_merge);

var _linearizeEncodings = __webpack_require__(/*! ./help/linearizeEncodings.js */ "./node_modules/jsbarcode/bin/help/linearizeEncodings.js");

var _linearizeEncodings2 = _interopRequireDefault(_linearizeEncodings);

var _fixOptions = __webpack_require__(/*! ./help/fixOptions.js */ "./node_modules/jsbarcode/bin/help/fixOptions.js");

var _fixOptions2 = _interopRequireDefault(_fixOptions);

var _getRenderProperties = __webpack_require__(/*! ./help/getRenderProperties.js */ "./node_modules/jsbarcode/bin/help/getRenderProperties.js");

var _getRenderProperties2 = _interopRequireDefault(_getRenderProperties);

var _optionsFromStrings = __webpack_require__(/*! ./help/optionsFromStrings.js */ "./node_modules/jsbarcode/bin/help/optionsFromStrings.js");

var _optionsFromStrings2 = _interopRequireDefault(_optionsFromStrings);

var _ErrorHandler = __webpack_require__(/*! ./exceptions/ErrorHandler.js */ "./node_modules/jsbarcode/bin/exceptions/ErrorHandler.js");

var _ErrorHandler2 = _interopRequireDefault(_ErrorHandler);

var _exceptions = __webpack_require__(/*! ./exceptions/exceptions.js */ "./node_modules/jsbarcode/bin/exceptions/exceptions.js");

var _defaults = __webpack_require__(/*! ./options/defaults.js */ "./node_modules/jsbarcode/bin/options/defaults.js");

var _defaults2 = _interopRequireDefault(_defaults);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// The protype of the object returned from the JsBarcode() call


// Help functions
var API = function API() {};

// The first call of the library API
// Will return an object with all barcodes calls and the data that is used
// by the renderers


// Default values


// Exceptions
// Import all the barcodes
var JsBarcode = function JsBarcode(element, text, options) {
	var api = new API();

	if (typeof element === "undefined") {
		throw Error("No element to render on was provided.");
	}

	// Variables that will be pased through the API calls
	api._renderProperties = (0, _getRenderProperties2.default)(element);
	api._encodings = [];
	api._options = _defaults2.default;
	api._errorHandler = new _ErrorHandler2.default(api);

	// If text is set, use the simple syntax (render the barcode directly)
	if (typeof text !== "undefined") {
		options = options || {};

		if (!options.format) {
			options.format = autoSelectBarcode();
		}

		api.options(options)[options.format](text, options).render();
	}

	return api;
};

// To make tests work TODO: remove
JsBarcode.getModule = function (name) {
	return _barcodes2.default[name];
};

// Register all barcodes
for (var name in _barcodes2.default) {
	if (_barcodes2.default.hasOwnProperty(name)) {
		// Security check if the propery is a prototype property
		registerBarcode(_barcodes2.default, name);
	}
}
function registerBarcode(barcodes, name) {
	API.prototype[name] = API.prototype[name.toUpperCase()] = API.prototype[name.toLowerCase()] = function (text, options) {
		var api = this;
		return api._errorHandler.wrapBarcodeCall(function () {
			// Ensure text is options.text
			options.text = typeof options.text === 'undefined' ? undefined : '' + options.text;

			var newOptions = (0, _merge2.default)(api._options, options);
			newOptions = (0, _optionsFromStrings2.default)(newOptions);
			var Encoder = barcodes[name];
			var encoded = encode(text, Encoder, newOptions);
			api._encodings.push(encoded);

			return api;
		});
	};
}

// encode() handles the Encoder call and builds the binary string to be rendered
function encode(text, Encoder, options) {
	// Ensure that text is a string
	text = "" + text;

	var encoder = new Encoder(text, options);

	// If the input is not valid for the encoder, throw error.
	// If the valid callback option is set, call it instead of throwing error
	if (!encoder.valid()) {
		throw new _exceptions.InvalidInputException(encoder.constructor.name, text);
	}

	// Make a request for the binary data (and other infromation) that should be rendered
	var encoded = encoder.encode();

	// Encodings can be nestled like [[1-1, 1-2], 2, [3-1, 3-2]
	// Convert to [1-1, 1-2, 2, 3-1, 3-2]
	encoded = (0, _linearizeEncodings2.default)(encoded);

	// Merge
	for (var i = 0; i < encoded.length; i++) {
		encoded[i].options = (0, _merge2.default)(options, encoded[i].options);
	}

	return encoded;
}

function autoSelectBarcode() {
	// If CODE128 exists. Use it
	if (_barcodes2.default["CODE128"]) {
		return "CODE128";
	}

	// Else, take the first (probably only) barcode
	return Object.keys(_barcodes2.default)[0];
}

// Sets global encoder options
// Added to the api by the JsBarcode function
API.prototype.options = function (options) {
	this._options = (0, _merge2.default)(this._options, options);
	return this;
};

// Will create a blank space (usually in between barcodes)
API.prototype.blank = function (size) {
	var zeroes = new Array(size + 1).join("0");
	this._encodings.push({ data: zeroes });
	return this;
};

// Initialize JsBarcode on all HTML elements defined.
API.prototype.init = function () {
	// Should do nothing if no elements where found
	if (!this._renderProperties) {
		return;
	}

	// Make sure renderProperies is an array
	if (!Array.isArray(this._renderProperties)) {
		this._renderProperties = [this._renderProperties];
	}

	var renderProperty;
	for (var i in this._renderProperties) {
		renderProperty = this._renderProperties[i];
		var options = (0, _merge2.default)(this._options, renderProperty.options);

		if (options.format == "auto") {
			options.format = autoSelectBarcode();
		}

		this._errorHandler.wrapBarcodeCall(function () {
			var text = options.value;
			var Encoder = _barcodes2.default[options.format.toUpperCase()];
			var encoded = encode(text, Encoder, options);

			render(renderProperty, encoded, options);
		});
	}
};

// The render API call. Calls the real render function.
API.prototype.render = function () {
	if (!this._renderProperties) {
		throw new _exceptions.NoElementException();
	}

	if (Array.isArray(this._renderProperties)) {
		for (var i = 0; i < this._renderProperties.length; i++) {
			render(this._renderProperties[i], this._encodings, this._options);
		}
	} else {
		render(this._renderProperties, this._encodings, this._options);
	}

	return this;
};

API.prototype._defaults = _defaults2.default;

// Prepares the encodings and calls the renderer
function render(renderProperties, encodings, options) {
	encodings = (0, _linearizeEncodings2.default)(encodings);

	for (var i = 0; i < encodings.length; i++) {
		encodings[i].options = (0, _merge2.default)(options, encodings[i].options);
		(0, _fixOptions2.default)(encodings[i].options);
	}

	(0, _fixOptions2.default)(options);

	var Renderer = renderProperties.renderer;
	var renderer = new Renderer(renderProperties.element, encodings, options);
	renderer.render();

	if (renderProperties.afterRender) {
		renderProperties.afterRender();
	}
}

// Export to browser
if (typeof window !== "undefined") {
	window.JsBarcode = JsBarcode;
}

// Export to jQuery
/*global jQuery */
if (typeof jQuery !== 'undefined') {
	jQuery.fn.JsBarcode = function (content, options) {
		var elementArray = [];
		jQuery(this).each(function () {
			elementArray.push(this);
		});
		return JsBarcode(elementArray, content, options);
	};
}

// Export to commonJS
module.exports = JsBarcode;

/***/ }),

/***/ "./node_modules/jsbarcode/bin/barcodes/Barcode.js":
/*!********************************************************!*\
  !*** ./node_modules/jsbarcode/bin/barcodes/Barcode.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
	value: true
}));

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Barcode = function Barcode(data, options) {
	_classCallCheck(this, Barcode);

	this.data = data;
	this.text = options.text || data;
	this.options = options;
};

exports["default"] = Barcode;

/***/ }),

/***/ "./node_modules/jsbarcode/bin/barcodes/CODE128/CODE128.js":
/*!****************************************************************!*\
  !*** ./node_modules/jsbarcode/bin/barcodes/CODE128/CODE128.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
	value: true
}));

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Barcode2 = __webpack_require__(/*! ../Barcode.js */ "./node_modules/jsbarcode/bin/barcodes/Barcode.js");

var _Barcode3 = _interopRequireDefault(_Barcode2);

var _constants = __webpack_require__(/*! ./constants */ "./node_modules/jsbarcode/bin/barcodes/CODE128/constants.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// This is the master class,
// it does require the start code to be included in the string
var CODE128 = function (_Barcode) {
	_inherits(CODE128, _Barcode);

	function CODE128(data, options) {
		_classCallCheck(this, CODE128);

		// Get array of ascii codes from data
		var _this = _possibleConstructorReturn(this, (CODE128.__proto__ || Object.getPrototypeOf(CODE128)).call(this, data.substring(1), options));

		_this.bytes = data.split('').map(function (char) {
			return char.charCodeAt(0);
		});
		return _this;
	}

	_createClass(CODE128, [{
		key: 'valid',
		value: function valid() {
			// ASCII value ranges 0-127, 200-211
			return (/^[\x00-\x7F\xC8-\xD3]+$/.test(this.data)
			);
		}

		// The public encoding function

	}, {
		key: 'encode',
		value: function encode() {
			var bytes = this.bytes;
			// Remove the start code from the bytes and set its index
			var startIndex = bytes.shift() - 105;
			// Get start set by index
			var startSet = _constants.SET_BY_CODE[startIndex];

			if (startSet === undefined) {
				throw new RangeError('The encoding does not start with a start character.');
			}

			if (this.shouldEncodeAsEan128() === true) {
				bytes.unshift(_constants.FNC1);
			}

			// Start encode with the right type
			var encodingResult = CODE128.next(bytes, 1, startSet);

			return {
				text: this.text === this.data ? this.text.replace(/[^\x20-\x7E]/g, '') : this.text,
				data:
				// Add the start bits
				CODE128.getBar(startIndex) +
				// Add the encoded bits
				encodingResult.result +
				// Add the checksum
				CODE128.getBar((encodingResult.checksum + startIndex) % _constants.MODULO) +
				// Add the end bits
				CODE128.getBar(_constants.STOP)
			};
		}

		// GS1-128/EAN-128

	}, {
		key: 'shouldEncodeAsEan128',
		value: function shouldEncodeAsEan128() {
			var isEAN128 = this.options.ean128 || false;
			if (typeof isEAN128 === 'string') {
				isEAN128 = isEAN128.toLowerCase() === 'true';
			}
			return isEAN128;
		}

		// Get a bar symbol by index

	}], [{
		key: 'getBar',
		value: function getBar(index) {
			return _constants.BARS[index] ? _constants.BARS[index].toString() : '';
		}

		// Correct an index by a set and shift it from the bytes array

	}, {
		key: 'correctIndex',
		value: function correctIndex(bytes, set) {
			if (set === _constants.SET_A) {
				var charCode = bytes.shift();
				return charCode < 32 ? charCode + 64 : charCode - 32;
			} else if (set === _constants.SET_B) {
				return bytes.shift() - 32;
			} else {
				return (bytes.shift() - 48) * 10 + bytes.shift() - 48;
			}
		}
	}, {
		key: 'next',
		value: function next(bytes, pos, set) {
			if (!bytes.length) {
				return { result: '', checksum: 0 };
			}

			var nextCode = void 0,
			    index = void 0;

			// Special characters
			if (bytes[0] >= 200) {
				index = bytes.shift() - 105;
				var nextSet = _constants.SWAP[index];

				// Swap to other set
				if (nextSet !== undefined) {
					nextCode = CODE128.next(bytes, pos + 1, nextSet);
				}
				// Continue on current set but encode a special character
				else {
						// Shift
						if ((set === _constants.SET_A || set === _constants.SET_B) && index === _constants.SHIFT) {
							// Convert the next character so that is encoded correctly
							bytes[0] = set === _constants.SET_A ? bytes[0] > 95 ? bytes[0] - 96 : bytes[0] : bytes[0] < 32 ? bytes[0] + 96 : bytes[0];
						}
						nextCode = CODE128.next(bytes, pos + 1, set);
					}
			}
			// Continue encoding
			else {
					index = CODE128.correctIndex(bytes, set);
					nextCode = CODE128.next(bytes, pos + 1, set);
				}

			// Get the correct binary encoding and calculate the weight
			var enc = CODE128.getBar(index);
			var weight = index * pos;

			return {
				result: enc + nextCode.result,
				checksum: weight + nextCode.checksum
			};
		}
	}]);

	return CODE128;
}(_Barcode3.default);

exports["default"] = CODE128;

/***/ }),

/***/ "./node_modules/jsbarcode/bin/barcodes/CODE128/CODE128A.js":
/*!*****************************************************************!*\
  !*** ./node_modules/jsbarcode/bin/barcodes/CODE128/CODE128A.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
	value: true
}));

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _CODE2 = __webpack_require__(/*! ./CODE128.js */ "./node_modules/jsbarcode/bin/barcodes/CODE128/CODE128.js");

var _CODE3 = _interopRequireDefault(_CODE2);

var _constants = __webpack_require__(/*! ./constants */ "./node_modules/jsbarcode/bin/barcodes/CODE128/constants.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CODE128A = function (_CODE) {
	_inherits(CODE128A, _CODE);

	function CODE128A(string, options) {
		_classCallCheck(this, CODE128A);

		return _possibleConstructorReturn(this, (CODE128A.__proto__ || Object.getPrototypeOf(CODE128A)).call(this, _constants.A_START_CHAR + string, options));
	}

	_createClass(CODE128A, [{
		key: 'valid',
		value: function valid() {
			return new RegExp('^' + _constants.A_CHARS + '+$').test(this.data);
		}
	}]);

	return CODE128A;
}(_CODE3.default);

exports["default"] = CODE128A;

/***/ }),

/***/ "./node_modules/jsbarcode/bin/barcodes/CODE128/CODE128B.js":
/*!*****************************************************************!*\
  !*** ./node_modules/jsbarcode/bin/barcodes/CODE128/CODE128B.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
	value: true
}));

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _CODE2 = __webpack_require__(/*! ./CODE128.js */ "./node_modules/jsbarcode/bin/barcodes/CODE128/CODE128.js");

var _CODE3 = _interopRequireDefault(_CODE2);

var _constants = __webpack_require__(/*! ./constants */ "./node_modules/jsbarcode/bin/barcodes/CODE128/constants.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CODE128B = function (_CODE) {
	_inherits(CODE128B, _CODE);

	function CODE128B(string, options) {
		_classCallCheck(this, CODE128B);

		return _possibleConstructorReturn(this, (CODE128B.__proto__ || Object.getPrototypeOf(CODE128B)).call(this, _constants.B_START_CHAR + string, options));
	}

	_createClass(CODE128B, [{
		key: 'valid',
		value: function valid() {
			return new RegExp('^' + _constants.B_CHARS + '+$').test(this.data);
		}
	}]);

	return CODE128B;
}(_CODE3.default);

exports["default"] = CODE128B;

/***/ }),

/***/ "./node_modules/jsbarcode/bin/barcodes/CODE128/CODE128C.js":
/*!*****************************************************************!*\
  !*** ./node_modules/jsbarcode/bin/barcodes/CODE128/CODE128C.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
	value: true
}));

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _CODE2 = __webpack_require__(/*! ./CODE128.js */ "./node_modules/jsbarcode/bin/barcodes/CODE128/CODE128.js");

var _CODE3 = _interopRequireDefault(_CODE2);

var _constants = __webpack_require__(/*! ./constants */ "./node_modules/jsbarcode/bin/barcodes/CODE128/constants.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CODE128C = function (_CODE) {
	_inherits(CODE128C, _CODE);

	function CODE128C(string, options) {
		_classCallCheck(this, CODE128C);

		return _possibleConstructorReturn(this, (CODE128C.__proto__ || Object.getPrototypeOf(CODE128C)).call(this, _constants.C_START_CHAR + string, options));
	}

	_createClass(CODE128C, [{
		key: 'valid',
		value: function valid() {
			return new RegExp('^' + _constants.C_CHARS + '+$').test(this.data);
		}
	}]);

	return CODE128C;
}(_CODE3.default);

exports["default"] = CODE128C;

/***/ }),

/***/ "./node_modules/jsbarcode/bin/barcodes/CODE128/CODE128_AUTO.js":
/*!*********************************************************************!*\
  !*** ./node_modules/jsbarcode/bin/barcodes/CODE128/CODE128_AUTO.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
	value: true
}));

var _CODE2 = __webpack_require__(/*! ./CODE128 */ "./node_modules/jsbarcode/bin/barcodes/CODE128/CODE128.js");

var _CODE3 = _interopRequireDefault(_CODE2);

var _auto = __webpack_require__(/*! ./auto */ "./node_modules/jsbarcode/bin/barcodes/CODE128/auto.js");

var _auto2 = _interopRequireDefault(_auto);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CODE128AUTO = function (_CODE) {
	_inherits(CODE128AUTO, _CODE);

	function CODE128AUTO(data, options) {
		_classCallCheck(this, CODE128AUTO);

		// ASCII value ranges 0-127, 200-211
		if (/^[\x00-\x7F\xC8-\xD3]+$/.test(data)) {
			var _this = _possibleConstructorReturn(this, (CODE128AUTO.__proto__ || Object.getPrototypeOf(CODE128AUTO)).call(this, (0, _auto2.default)(data), options));
		} else {
			var _this = _possibleConstructorReturn(this, (CODE128AUTO.__proto__ || Object.getPrototypeOf(CODE128AUTO)).call(this, data, options));
		}
		return _possibleConstructorReturn(_this);
	}

	return CODE128AUTO;
}(_CODE3.default);

exports["default"] = CODE128AUTO;

/***/ }),

/***/ "./node_modules/jsbarcode/bin/barcodes/CODE128/auto.js":
/*!*************************************************************!*\
  !*** ./node_modules/jsbarcode/bin/barcodes/CODE128/auto.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
	value: true
}));

var _constants = __webpack_require__(/*! ./constants */ "./node_modules/jsbarcode/bin/barcodes/CODE128/constants.js");

// Match Set functions
var matchSetALength = function matchSetALength(string) {
	return string.match(new RegExp('^' + _constants.A_CHARS + '*'))[0].length;
};
var matchSetBLength = function matchSetBLength(string) {
	return string.match(new RegExp('^' + _constants.B_CHARS + '*'))[0].length;
};
var matchSetC = function matchSetC(string) {
	return string.match(new RegExp('^' + _constants.C_CHARS + '*'))[0];
};

// CODE128A or CODE128B
function autoSelectFromAB(string, isA) {
	var ranges = isA ? _constants.A_CHARS : _constants.B_CHARS;
	var untilC = string.match(new RegExp('^(' + ranges + '+?)(([0-9]{2}){2,})([^0-9]|$)'));

	if (untilC) {
		return untilC[1] + String.fromCharCode(204) + autoSelectFromC(string.substring(untilC[1].length));
	}

	var chars = string.match(new RegExp('^' + ranges + '+'))[0];

	if (chars.length === string.length) {
		return string;
	}

	return chars + String.fromCharCode(isA ? 205 : 206) + autoSelectFromAB(string.substring(chars.length), !isA);
}

// CODE128C
function autoSelectFromC(string) {
	var cMatch = matchSetC(string);
	var length = cMatch.length;

	if (length === string.length) {
		return string;
	}

	string = string.substring(length);

	// Select A/B depending on the longest match
	var isA = matchSetALength(string) >= matchSetBLength(string);
	return cMatch + String.fromCharCode(isA ? 206 : 205) + autoSelectFromAB(string, isA);
}

// Detect Code Set (A, B or C) and format the string

exports["default"] = function (string) {
	var newString = void 0;
	var cLength = matchSetC(string).length;

	// Select 128C if the string start with enough digits
	if (cLength >= 2) {
		newString = _constants.C_START_CHAR + autoSelectFromC(string);
	} else {
		// Select A/B depending on the longest match
		var isA = matchSetALength(string) > matchSetBLength(string);
		newString = (isA ? _constants.A_START_CHAR : _constants.B_START_CHAR) + autoSelectFromAB(string, isA);
	}

	return newString.replace(/[\xCD\xCE]([^])[\xCD\xCE]/, // Any sequence between 205 and 206 characters
	function (match, char) {
		return String.fromCharCode(203) + char;
	});
};

/***/ }),

/***/ "./node_modules/jsbarcode/bin/barcodes/CODE128/constants.js":
/*!******************************************************************!*\
  !*** ./node_modules/jsbarcode/bin/barcodes/CODE128/constants.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
	value: true
}));

var _SET_BY_CODE;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// constants for internal usage
var SET_A = exports.SET_A = 0;
var SET_B = exports.SET_B = 1;
var SET_C = exports.SET_C = 2;

// Special characters
var SHIFT = exports.SHIFT = 98;
var START_A = exports.START_A = 103;
var START_B = exports.START_B = 104;
var START_C = exports.START_C = 105;
var MODULO = exports.MODULO = 103;
var STOP = exports.STOP = 106;
var FNC1 = exports.FNC1 = 207;

// Get set by start code
var SET_BY_CODE = exports.SET_BY_CODE = (_SET_BY_CODE = {}, _defineProperty(_SET_BY_CODE, START_A, SET_A), _defineProperty(_SET_BY_CODE, START_B, SET_B), _defineProperty(_SET_BY_CODE, START_C, SET_C), _SET_BY_CODE);

// Get next set by code
var SWAP = exports.SWAP = {
	101: SET_A,
	100: SET_B,
	99: SET_C
};

var A_START_CHAR = exports.A_START_CHAR = String.fromCharCode(208); // START_A + 105
var B_START_CHAR = exports.B_START_CHAR = String.fromCharCode(209); // START_B + 105
var C_START_CHAR = exports.C_START_CHAR = String.fromCharCode(210); // START_C + 105

// 128A (Code Set A)
// ASCII characters 00 to 95 (0–9, A–Z and control codes), special characters, and FNC 1–4
var A_CHARS = exports.A_CHARS = "[\x00-\x5F\xC8-\xCF]";

// 128B (Code Set B)
// ASCII characters 32 to 127 (0–9, A–Z, a–z), special characters, and FNC 1–4
var B_CHARS = exports.B_CHARS = "[\x20-\x7F\xC8-\xCF]";

// 128C (Code Set C)
// 00–99 (encodes two digits with a single code point) and FNC1
var C_CHARS = exports.C_CHARS = "(\xCF*[0-9]{2}\xCF*)";

// CODE128 includes 107 symbols:
// 103 data symbols, 3 start symbols (A, B and C), and 1 stop symbol (the last one)
// Each symbol consist of three black bars (1) and three white spaces (0).
var BARS = exports.BARS = [11011001100, 11001101100, 11001100110, 10010011000, 10010001100, 10001001100, 10011001000, 10011000100, 10001100100, 11001001000, 11001000100, 11000100100, 10110011100, 10011011100, 10011001110, 10111001100, 10011101100, 10011100110, 11001110010, 11001011100, 11001001110, 11011100100, 11001110100, 11101101110, 11101001100, 11100101100, 11100100110, 11101100100, 11100110100, 11100110010, 11011011000, 11011000110, 11000110110, 10100011000, 10001011000, 10001000110, 10110001000, 10001101000, 10001100010, 11010001000, 11000101000, 11000100010, 10110111000, 10110001110, 10001101110, 10111011000, 10111000110, 10001110110, 11101110110, 11010001110, 11000101110, 11011101000, 11011100010, 11011101110, 11101011000, 11101000110, 11100010110, 11101101000, 11101100010, 11100011010, 11101111010, 11001000010, 11110001010, 10100110000, 10100001100, 10010110000, 10010000110, 10000101100, 10000100110, 10110010000, 10110000100, 10011010000, 10011000010, 10000110100, 10000110010, 11000010010, 11001010000, 11110111010, 11000010100, 10001111010, 10100111100, 10010111100, 10010011110, 10111100100, 10011110100, 10011110010, 11110100100, 11110010100, 11110010010, 11011011110, 11011110110, 11110110110, 10101111000, 10100011110, 10001011110, 10111101000, 10111100010, 11110101000, 11110100010, 10111011110, 10111101110, 11101011110, 11110101110, 11010000100, 11010010000, 11010011100, 1100011101011];

/***/ }),

/***/ "./node_modules/jsbarcode/bin/barcodes/CODE128/index.js":
/*!**************************************************************!*\
  !*** ./node_modules/jsbarcode/bin/barcodes/CODE128/index.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.CODE128C = exports.CODE128B = exports.CODE128A = exports.CODE128 = undefined;

var _CODE128_AUTO = __webpack_require__(/*! ./CODE128_AUTO.js */ "./node_modules/jsbarcode/bin/barcodes/CODE128/CODE128_AUTO.js");

var _CODE128_AUTO2 = _interopRequireDefault(_CODE128_AUTO);

var _CODE128A = __webpack_require__(/*! ./CODE128A.js */ "./node_modules/jsbarcode/bin/barcodes/CODE128/CODE128A.js");

var _CODE128A2 = _interopRequireDefault(_CODE128A);

var _CODE128B = __webpack_require__(/*! ./CODE128B.js */ "./node_modules/jsbarcode/bin/barcodes/CODE128/CODE128B.js");

var _CODE128B2 = _interopRequireDefault(_CODE128B);

var _CODE128C = __webpack_require__(/*! ./CODE128C.js */ "./node_modules/jsbarcode/bin/barcodes/CODE128/CODE128C.js");

var _CODE128C2 = _interopRequireDefault(_CODE128C);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.CODE128 = _CODE128_AUTO2.default;
exports.CODE128A = _CODE128A2.default;
exports.CODE128B = _CODE128B2.default;
exports.CODE128C = _CODE128C2.default;

/***/ }),

/***/ "./node_modules/jsbarcode/bin/barcodes/CODE39/index.js":
/*!*************************************************************!*\
  !*** ./node_modules/jsbarcode/bin/barcodes/CODE39/index.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
	value: true
}));
exports.CODE39 = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Barcode2 = __webpack_require__(/*! ../Barcode.js */ "./node_modules/jsbarcode/bin/barcodes/Barcode.js");

var _Barcode3 = _interopRequireDefault(_Barcode2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // Encoding documentation:
// https://en.wikipedia.org/wiki/Code_39#Encoding

var CODE39 = function (_Barcode) {
	_inherits(CODE39, _Barcode);

	function CODE39(data, options) {
		_classCallCheck(this, CODE39);

		data = data.toUpperCase();

		// Calculate mod43 checksum if enabled
		if (options.mod43) {
			data += getCharacter(mod43checksum(data));
		}

		return _possibleConstructorReturn(this, (CODE39.__proto__ || Object.getPrototypeOf(CODE39)).call(this, data, options));
	}

	_createClass(CODE39, [{
		key: "encode",
		value: function encode() {
			// First character is always a *
			var result = getEncoding("*");

			// Take every character and add the binary representation to the result
			for (var i = 0; i < this.data.length; i++) {
				result += getEncoding(this.data[i]) + "0";
			}

			// Last character is always a *
			result += getEncoding("*");

			return {
				data: result,
				text: this.text
			};
		}
	}, {
		key: "valid",
		value: function valid() {
			return this.data.search(/^[0-9A-Z\-\.\ \$\/\+\%]+$/) !== -1;
		}
	}]);

	return CODE39;
}(_Barcode3.default);

// All characters. The position in the array is the (checksum) value


var characters = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "-", ".", " ", "$", "/", "+", "%", "*"];

// The decimal representation of the characters, is converted to the
// corresponding binary with the getEncoding function
var encodings = [20957, 29783, 23639, 30485, 20951, 29813, 23669, 20855, 29789, 23645, 29975, 23831, 30533, 22295, 30149, 24005, 21623, 29981, 23837, 22301, 30023, 23879, 30545, 22343, 30161, 24017, 21959, 30065, 23921, 22385, 29015, 18263, 29141, 17879, 29045, 18293, 17783, 29021, 18269, 17477, 17489, 17681, 20753, 35770];

// Get the binary representation of a character by converting the encodings
// from decimal to binary
function getEncoding(character) {
	return getBinary(characterValue(character));
}

function getBinary(characterValue) {
	return encodings[characterValue].toString(2);
}

function getCharacter(characterValue) {
	return characters[characterValue];
}

function characterValue(character) {
	return characters.indexOf(character);
}

function mod43checksum(data) {
	var checksum = 0;
	for (var i = 0; i < data.length; i++) {
		checksum += characterValue(data[i]);
	}

	checksum = checksum % 43;
	return checksum;
}

exports.CODE39 = CODE39;

/***/ }),

/***/ "./node_modules/jsbarcode/bin/barcodes/CODE93/CODE93.js":
/*!**************************************************************!*\
  !*** ./node_modules/jsbarcode/bin/barcodes/CODE93/CODE93.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
	value: true
}));

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _constants = __webpack_require__(/*! ./constants */ "./node_modules/jsbarcode/bin/barcodes/CODE93/constants.js");

var _Barcode2 = __webpack_require__(/*! ../Barcode.js */ "./node_modules/jsbarcode/bin/barcodes/Barcode.js");

var _Barcode3 = _interopRequireDefault(_Barcode2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // Encoding documentation:
// https://en.wikipedia.org/wiki/Code_93#Detailed_outline

var CODE93 = function (_Barcode) {
	_inherits(CODE93, _Barcode);

	function CODE93(data, options) {
		_classCallCheck(this, CODE93);

		return _possibleConstructorReturn(this, (CODE93.__proto__ || Object.getPrototypeOf(CODE93)).call(this, data, options));
	}

	_createClass(CODE93, [{
		key: 'valid',
		value: function valid() {
			return (/^[0-9A-Z\-. $/+%]+$/.test(this.data)
			);
		}
	}, {
		key: 'encode',
		value: function encode() {
			var symbols = this.data.split('').flatMap(function (c) {
				return _constants.MULTI_SYMBOLS[c] || c;
			});
			var encoded = symbols.map(function (s) {
				return CODE93.getEncoding(s);
			}).join('');

			// Compute checksum symbols
			var csumC = CODE93.checksum(symbols, 20);
			var csumK = CODE93.checksum(symbols.concat(csumC), 15);

			return {
				text: this.text,
				data:
				// Add the start bits
				CODE93.getEncoding('\xff') +
				// Add the encoded bits
				encoded +
				// Add the checksum
				CODE93.getEncoding(csumC) + CODE93.getEncoding(csumK) +
				// Add the stop bits
				CODE93.getEncoding('\xff') +
				// Add the termination bit
				'1'
			};
		}

		// Get the binary encoding of a symbol

	}], [{
		key: 'getEncoding',
		value: function getEncoding(symbol) {
			return _constants.BINARIES[CODE93.symbolValue(symbol)];
		}

		// Get the symbol for a symbol value

	}, {
		key: 'getSymbol',
		value: function getSymbol(symbolValue) {
			return _constants.SYMBOLS[symbolValue];
		}

		// Get the symbol value of a symbol

	}, {
		key: 'symbolValue',
		value: function symbolValue(symbol) {
			return _constants.SYMBOLS.indexOf(symbol);
		}

		// Calculate a checksum symbol

	}, {
		key: 'checksum',
		value: function checksum(symbols, maxWeight) {
			var csum = symbols.slice().reverse().reduce(function (sum, symbol, idx) {
				var weight = idx % maxWeight + 1;
				return sum + CODE93.symbolValue(symbol) * weight;
			}, 0);

			return CODE93.getSymbol(csum % 47);
		}
	}]);

	return CODE93;
}(_Barcode3.default);

exports["default"] = CODE93;

/***/ }),

/***/ "./node_modules/jsbarcode/bin/barcodes/CODE93/CODE93FullASCII.js":
/*!***********************************************************************!*\
  !*** ./node_modules/jsbarcode/bin/barcodes/CODE93/CODE93FullASCII.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
	value: true
}));

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _CODE2 = __webpack_require__(/*! ./CODE93.js */ "./node_modules/jsbarcode/bin/barcodes/CODE93/CODE93.js");

var _CODE3 = _interopRequireDefault(_CODE2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // Encoding documentation
// https://en.wikipedia.org/wiki/Code_93#Full_ASCII_Code_93

var CODE93FullASCII = function (_CODE) {
	_inherits(CODE93FullASCII, _CODE);

	function CODE93FullASCII(data, options) {
		_classCallCheck(this, CODE93FullASCII);

		return _possibleConstructorReturn(this, (CODE93FullASCII.__proto__ || Object.getPrototypeOf(CODE93FullASCII)).call(this, data, options));
	}

	_createClass(CODE93FullASCII, [{
		key: 'valid',
		value: function valid() {
			return (/^[\x00-\x7f]+$/.test(this.data)
			);
		}
	}]);

	return CODE93FullASCII;
}(_CODE3.default);

exports["default"] = CODE93FullASCII;

/***/ }),

/***/ "./node_modules/jsbarcode/bin/barcodes/CODE93/constants.js":
/*!*****************************************************************!*\
  !*** ./node_modules/jsbarcode/bin/barcodes/CODE93/constants.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
	value: true
}));
// The position in the array is the (checksum) value
var SYMBOLS = exports.SYMBOLS = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', '-', '.', ' ', '$', '/', '+', '%',
// Only used for csum and multi-symbols character encodings
'($)', '(%)', '(/)', '(+)',
// Start/Stop
'\xff'];

// Order matches SYMBOLS array
var BINARIES = exports.BINARIES = ['100010100', '101001000', '101000100', '101000010', '100101000', '100100100', '100100010', '101010000', '100010010', '100001010', '110101000', '110100100', '110100010', '110010100', '110010010', '110001010', '101101000', '101100100', '101100010', '100110100', '100011010', '101011000', '101001100', '101000110', '100101100', '100010110', '110110100', '110110010', '110101100', '110100110', '110010110', '110011010', '101101100', '101100110', '100110110', '100111010', '100101110', '111010100', '111010010', '111001010', '101101110', '101110110', '110101110', '100100110', '111011010', '111010110', '100110010', '101011110'];

// Multi-symbol characters (Full ASCII Code 93)
var MULTI_SYMBOLS = exports.MULTI_SYMBOLS = {
	'\x00': ['(%)', 'U'],
	'\x01': ['($)', 'A'],
	'\x02': ['($)', 'B'],
	'\x03': ['($)', 'C'],
	'\x04': ['($)', 'D'],
	'\x05': ['($)', 'E'],
	'\x06': ['($)', 'F'],
	'\x07': ['($)', 'G'],
	'\x08': ['($)', 'H'],
	'\x09': ['($)', 'I'],
	'\x0a': ['($)', 'J'],
	'\x0b': ['($)', 'K'],
	'\x0c': ['($)', 'L'],
	'\x0d': ['($)', 'M'],
	'\x0e': ['($)', 'N'],
	'\x0f': ['($)', 'O'],
	'\x10': ['($)', 'P'],
	'\x11': ['($)', 'Q'],
	'\x12': ['($)', 'R'],
	'\x13': ['($)', 'S'],
	'\x14': ['($)', 'T'],
	'\x15': ['($)', 'U'],
	'\x16': ['($)', 'V'],
	'\x17': ['($)', 'W'],
	'\x18': ['($)', 'X'],
	'\x19': ['($)', 'Y'],
	'\x1a': ['($)', 'Z'],
	'\x1b': ['(%)', 'A'],
	'\x1c': ['(%)', 'B'],
	'\x1d': ['(%)', 'C'],
	'\x1e': ['(%)', 'D'],
	'\x1f': ['(%)', 'E'],
	'!': ['(/)', 'A'],
	'"': ['(/)', 'B'],
	'#': ['(/)', 'C'],
	'&': ['(/)', 'F'],
	'\'': ['(/)', 'G'],
	'(': ['(/)', 'H'],
	')': ['(/)', 'I'],
	'*': ['(/)', 'J'],
	',': ['(/)', 'L'],
	':': ['(/)', 'Z'],
	';': ['(%)', 'F'],
	'<': ['(%)', 'G'],
	'=': ['(%)', 'H'],
	'>': ['(%)', 'I'],
	'?': ['(%)', 'J'],
	'@': ['(%)', 'V'],
	'[': ['(%)', 'K'],
	'\\': ['(%)', 'L'],
	']': ['(%)', 'M'],
	'^': ['(%)', 'N'],
	'_': ['(%)', 'O'],
	'`': ['(%)', 'W'],
	'a': ['(+)', 'A'],
	'b': ['(+)', 'B'],
	'c': ['(+)', 'C'],
	'd': ['(+)', 'D'],
	'e': ['(+)', 'E'],
	'f': ['(+)', 'F'],
	'g': ['(+)', 'G'],
	'h': ['(+)', 'H'],
	'i': ['(+)', 'I'],
	'j': ['(+)', 'J'],
	'k': ['(+)', 'K'],
	'l': ['(+)', 'L'],
	'm': ['(+)', 'M'],
	'n': ['(+)', 'N'],
	'o': ['(+)', 'O'],
	'p': ['(+)', 'P'],
	'q': ['(+)', 'Q'],
	'r': ['(+)', 'R'],
	's': ['(+)', 'S'],
	't': ['(+)', 'T'],
	'u': ['(+)', 'U'],
	'v': ['(+)', 'V'],
	'w': ['(+)', 'W'],
	'x': ['(+)', 'X'],
	'y': ['(+)', 'Y'],
	'z': ['(+)', 'Z'],
	'{': ['(%)', 'P'],
	'|': ['(%)', 'Q'],
	'}': ['(%)', 'R'],
	'~': ['(%)', 'S'],
	'\x7f': ['(%)', 'T']
};

/***/ }),

/***/ "./node_modules/jsbarcode/bin/barcodes/CODE93/index.js":
/*!*************************************************************!*\
  !*** ./node_modules/jsbarcode/bin/barcodes/CODE93/index.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.CODE93FullASCII = exports.CODE93 = undefined;

var _CODE = __webpack_require__(/*! ./CODE93.js */ "./node_modules/jsbarcode/bin/barcodes/CODE93/CODE93.js");

var _CODE2 = _interopRequireDefault(_CODE);

var _CODE93FullASCII = __webpack_require__(/*! ./CODE93FullASCII.js */ "./node_modules/jsbarcode/bin/barcodes/CODE93/CODE93FullASCII.js");

var _CODE93FullASCII2 = _interopRequireDefault(_CODE93FullASCII);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.CODE93 = _CODE2.default;
exports.CODE93FullASCII = _CODE93FullASCII2.default;

/***/ }),

/***/ "./node_modules/jsbarcode/bin/barcodes/EAN_UPC/EAN.js":
/*!************************************************************!*\
  !*** ./node_modules/jsbarcode/bin/barcodes/EAN_UPC/EAN.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
	value: true
}));

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _constants = __webpack_require__(/*! ./constants */ "./node_modules/jsbarcode/bin/barcodes/EAN_UPC/constants.js");

var _encoder = __webpack_require__(/*! ./encoder */ "./node_modules/jsbarcode/bin/barcodes/EAN_UPC/encoder.js");

var _encoder2 = _interopRequireDefault(_encoder);

var _Barcode2 = __webpack_require__(/*! ../Barcode */ "./node_modules/jsbarcode/bin/barcodes/Barcode.js");

var _Barcode3 = _interopRequireDefault(_Barcode2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// Base class for EAN8 & EAN13
var EAN = function (_Barcode) {
	_inherits(EAN, _Barcode);

	function EAN(data, options) {
		_classCallCheck(this, EAN);

		// Make sure the font is not bigger than the space between the guard bars
		var _this = _possibleConstructorReturn(this, (EAN.__proto__ || Object.getPrototypeOf(EAN)).call(this, data, options));

		_this.fontSize = !options.flat && options.fontSize > options.width * 10 ? options.width * 10 : options.fontSize;

		// Make the guard bars go down half the way of the text
		_this.guardHeight = options.height + _this.fontSize / 2 + options.textMargin;
		return _this;
	}

	_createClass(EAN, [{
		key: 'encode',
		value: function encode() {
			return this.options.flat ? this.encodeFlat() : this.encodeGuarded();
		}
	}, {
		key: 'leftText',
		value: function leftText(from, to) {
			return this.text.substr(from, to);
		}
	}, {
		key: 'leftEncode',
		value: function leftEncode(data, structure) {
			return (0, _encoder2.default)(data, structure);
		}
	}, {
		key: 'rightText',
		value: function rightText(from, to) {
			return this.text.substr(from, to);
		}
	}, {
		key: 'rightEncode',
		value: function rightEncode(data, structure) {
			return (0, _encoder2.default)(data, structure);
		}
	}, {
		key: 'encodeGuarded',
		value: function encodeGuarded() {
			var textOptions = { fontSize: this.fontSize };
			var guardOptions = { height: this.guardHeight };

			return [{ data: _constants.SIDE_BIN, options: guardOptions }, { data: this.leftEncode(), text: this.leftText(), options: textOptions }, { data: _constants.MIDDLE_BIN, options: guardOptions }, { data: this.rightEncode(), text: this.rightText(), options: textOptions }, { data: _constants.SIDE_BIN, options: guardOptions }];
		}
	}, {
		key: 'encodeFlat',
		value: function encodeFlat() {
			var data = [_constants.SIDE_BIN, this.leftEncode(), _constants.MIDDLE_BIN, this.rightEncode(), _constants.SIDE_BIN];

			return {
				data: data.join(''),
				text: this.text
			};
		}
	}]);

	return EAN;
}(_Barcode3.default);

exports["default"] = EAN;

/***/ }),

/***/ "./node_modules/jsbarcode/bin/barcodes/EAN_UPC/EAN13.js":
/*!**************************************************************!*\
  !*** ./node_modules/jsbarcode/bin/barcodes/EAN_UPC/EAN13.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
	value: true
}));

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _constants = __webpack_require__(/*! ./constants */ "./node_modules/jsbarcode/bin/barcodes/EAN_UPC/constants.js");

var _EAN2 = __webpack_require__(/*! ./EAN */ "./node_modules/jsbarcode/bin/barcodes/EAN_UPC/EAN.js");

var _EAN3 = _interopRequireDefault(_EAN2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // Encoding documentation:
// https://en.wikipedia.org/wiki/International_Article_Number_(EAN)#Binary_encoding_of_data_digits_into_EAN-13_barcode

// Calculate the checksum digit
// https://en.wikipedia.org/wiki/International_Article_Number_(EAN)#Calculation_of_checksum_digit
var checksum = function checksum(number) {
	var res = number.substr(0, 12).split('').map(function (n) {
		return +n;
	}).reduce(function (sum, a, idx) {
		return idx % 2 ? sum + a * 3 : sum + a;
	}, 0);

	return (10 - res % 10) % 10;
};

var EAN13 = function (_EAN) {
	_inherits(EAN13, _EAN);

	function EAN13(data, options) {
		_classCallCheck(this, EAN13);

		// Add checksum if it does not exist
		if (data.search(/^[0-9]{12}$/) !== -1) {
			data += checksum(data);
		}

		// Adds a last character to the end of the barcode
		var _this = _possibleConstructorReturn(this, (EAN13.__proto__ || Object.getPrototypeOf(EAN13)).call(this, data, options));

		_this.lastChar = options.lastChar;
		return _this;
	}

	_createClass(EAN13, [{
		key: 'valid',
		value: function valid() {
			return this.data.search(/^[0-9]{13}$/) !== -1 && +this.data[12] === checksum(this.data);
		}
	}, {
		key: 'leftText',
		value: function leftText() {
			return _get(EAN13.prototype.__proto__ || Object.getPrototypeOf(EAN13.prototype), 'leftText', this).call(this, 1, 6);
		}
	}, {
		key: 'leftEncode',
		value: function leftEncode() {
			var data = this.data.substr(1, 6);
			var structure = _constants.EAN13_STRUCTURE[this.data[0]];
			return _get(EAN13.prototype.__proto__ || Object.getPrototypeOf(EAN13.prototype), 'leftEncode', this).call(this, data, structure);
		}
	}, {
		key: 'rightText',
		value: function rightText() {
			return _get(EAN13.prototype.__proto__ || Object.getPrototypeOf(EAN13.prototype), 'rightText', this).call(this, 7, 6);
		}
	}, {
		key: 'rightEncode',
		value: function rightEncode() {
			var data = this.data.substr(7, 6);
			return _get(EAN13.prototype.__proto__ || Object.getPrototypeOf(EAN13.prototype), 'rightEncode', this).call(this, data, 'RRRRRR');
		}

		// The "standard" way of printing EAN13 barcodes with guard bars

	}, {
		key: 'encodeGuarded',
		value: function encodeGuarded() {
			var data = _get(EAN13.prototype.__proto__ || Object.getPrototypeOf(EAN13.prototype), 'encodeGuarded', this).call(this);

			// Extend data with left digit & last character
			if (this.options.displayValue) {
				data.unshift({
					data: '000000000000',
					text: this.text.substr(0, 1),
					options: { textAlign: 'left', fontSize: this.fontSize }
				});

				if (this.options.lastChar) {
					data.push({
						data: '00'
					});
					data.push({
						data: '00000',
						text: this.options.lastChar,
						options: { fontSize: this.fontSize }
					});
				}
			}

			return data;
		}
	}]);

	return EAN13;
}(_EAN3.default);

exports["default"] = EAN13;

/***/ }),

/***/ "./node_modules/jsbarcode/bin/barcodes/EAN_UPC/EAN2.js":
/*!*************************************************************!*\
  !*** ./node_modules/jsbarcode/bin/barcodes/EAN_UPC/EAN2.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
	value: true
}));

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _constants = __webpack_require__(/*! ./constants */ "./node_modules/jsbarcode/bin/barcodes/EAN_UPC/constants.js");

var _encoder = __webpack_require__(/*! ./encoder */ "./node_modules/jsbarcode/bin/barcodes/EAN_UPC/encoder.js");

var _encoder2 = _interopRequireDefault(_encoder);

var _Barcode2 = __webpack_require__(/*! ../Barcode */ "./node_modules/jsbarcode/bin/barcodes/Barcode.js");

var _Barcode3 = _interopRequireDefault(_Barcode2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // Encoding documentation:
// https://en.wikipedia.org/wiki/EAN_2#Encoding

var EAN2 = function (_Barcode) {
	_inherits(EAN2, _Barcode);

	function EAN2(data, options) {
		_classCallCheck(this, EAN2);

		return _possibleConstructorReturn(this, (EAN2.__proto__ || Object.getPrototypeOf(EAN2)).call(this, data, options));
	}

	_createClass(EAN2, [{
		key: 'valid',
		value: function valid() {
			return this.data.search(/^[0-9]{2}$/) !== -1;
		}
	}, {
		key: 'encode',
		value: function encode() {
			// Choose the structure based on the number mod 4
			var structure = _constants.EAN2_STRUCTURE[parseInt(this.data) % 4];
			return {
				// Start bits + Encode the two digits with 01 in between
				data: '1011' + (0, _encoder2.default)(this.data, structure, '01'),
				text: this.text
			};
		}
	}]);

	return EAN2;
}(_Barcode3.default);

exports["default"] = EAN2;

/***/ }),

/***/ "./node_modules/jsbarcode/bin/barcodes/EAN_UPC/EAN5.js":
/*!*************************************************************!*\
  !*** ./node_modules/jsbarcode/bin/barcodes/EAN_UPC/EAN5.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
	value: true
}));

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _constants = __webpack_require__(/*! ./constants */ "./node_modules/jsbarcode/bin/barcodes/EAN_UPC/constants.js");

var _encoder = __webpack_require__(/*! ./encoder */ "./node_modules/jsbarcode/bin/barcodes/EAN_UPC/encoder.js");

var _encoder2 = _interopRequireDefault(_encoder);

var _Barcode2 = __webpack_require__(/*! ../Barcode */ "./node_modules/jsbarcode/bin/barcodes/Barcode.js");

var _Barcode3 = _interopRequireDefault(_Barcode2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // Encoding documentation:
// https://en.wikipedia.org/wiki/EAN_5#Encoding

var checksum = function checksum(data) {
	var result = data.split('').map(function (n) {
		return +n;
	}).reduce(function (sum, a, idx) {
		return idx % 2 ? sum + a * 9 : sum + a * 3;
	}, 0);
	return result % 10;
};

var EAN5 = function (_Barcode) {
	_inherits(EAN5, _Barcode);

	function EAN5(data, options) {
		_classCallCheck(this, EAN5);

		return _possibleConstructorReturn(this, (EAN5.__proto__ || Object.getPrototypeOf(EAN5)).call(this, data, options));
	}

	_createClass(EAN5, [{
		key: 'valid',
		value: function valid() {
			return this.data.search(/^[0-9]{5}$/) !== -1;
		}
	}, {
		key: 'encode',
		value: function encode() {
			var structure = _constants.EAN5_STRUCTURE[checksum(this.data)];
			return {
				data: '1011' + (0, _encoder2.default)(this.data, structure, '01'),
				text: this.text
			};
		}
	}]);

	return EAN5;
}(_Barcode3.default);

exports["default"] = EAN5;

/***/ }),

/***/ "./node_modules/jsbarcode/bin/barcodes/EAN_UPC/EAN8.js":
/*!*************************************************************!*\
  !*** ./node_modules/jsbarcode/bin/barcodes/EAN_UPC/EAN8.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
	value: true
}));

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _EAN2 = __webpack_require__(/*! ./EAN */ "./node_modules/jsbarcode/bin/barcodes/EAN_UPC/EAN.js");

var _EAN3 = _interopRequireDefault(_EAN2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // Encoding documentation:
// http://www.barcodeisland.com/ean8.phtml

// Calculate the checksum digit
var checksum = function checksum(number) {
	var res = number.substr(0, 7).split('').map(function (n) {
		return +n;
	}).reduce(function (sum, a, idx) {
		return idx % 2 ? sum + a : sum + a * 3;
	}, 0);

	return (10 - res % 10) % 10;
};

var EAN8 = function (_EAN) {
	_inherits(EAN8, _EAN);

	function EAN8(data, options) {
		_classCallCheck(this, EAN8);

		// Add checksum if it does not exist
		if (data.search(/^[0-9]{7}$/) !== -1) {
			data += checksum(data);
		}

		return _possibleConstructorReturn(this, (EAN8.__proto__ || Object.getPrototypeOf(EAN8)).call(this, data, options));
	}

	_createClass(EAN8, [{
		key: 'valid',
		value: function valid() {
			return this.data.search(/^[0-9]{8}$/) !== -1 && +this.data[7] === checksum(this.data);
		}
	}, {
		key: 'leftText',
		value: function leftText() {
			return _get(EAN8.prototype.__proto__ || Object.getPrototypeOf(EAN8.prototype), 'leftText', this).call(this, 0, 4);
		}
	}, {
		key: 'leftEncode',
		value: function leftEncode() {
			var data = this.data.substr(0, 4);
			return _get(EAN8.prototype.__proto__ || Object.getPrototypeOf(EAN8.prototype), 'leftEncode', this).call(this, data, 'LLLL');
		}
	}, {
		key: 'rightText',
		value: function rightText() {
			return _get(EAN8.prototype.__proto__ || Object.getPrototypeOf(EAN8.prototype), 'rightText', this).call(this, 4, 4);
		}
	}, {
		key: 'rightEncode',
		value: function rightEncode() {
			var data = this.data.substr(4, 4);
			return _get(EAN8.prototype.__proto__ || Object.getPrototypeOf(EAN8.prototype), 'rightEncode', this).call(this, data, 'RRRR');
		}
	}]);

	return EAN8;
}(_EAN3.default);

exports["default"] = EAN8;

/***/ }),

/***/ "./node_modules/jsbarcode/bin/barcodes/EAN_UPC/UPC.js":
/*!************************************************************!*\
  !*** ./node_modules/jsbarcode/bin/barcodes/EAN_UPC/UPC.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
	value: true
}));

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

exports.checksum = checksum;

var _encoder = __webpack_require__(/*! ./encoder */ "./node_modules/jsbarcode/bin/barcodes/EAN_UPC/encoder.js");

var _encoder2 = _interopRequireDefault(_encoder);

var _Barcode2 = __webpack_require__(/*! ../Barcode.js */ "./node_modules/jsbarcode/bin/barcodes/Barcode.js");

var _Barcode3 = _interopRequireDefault(_Barcode2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // Encoding documentation:
// https://en.wikipedia.org/wiki/Universal_Product_Code#Encoding

var UPC = function (_Barcode) {
	_inherits(UPC, _Barcode);

	function UPC(data, options) {
		_classCallCheck(this, UPC);

		// Add checksum if it does not exist
		if (data.search(/^[0-9]{11}$/) !== -1) {
			data += checksum(data);
		}

		var _this = _possibleConstructorReturn(this, (UPC.__proto__ || Object.getPrototypeOf(UPC)).call(this, data, options));

		_this.displayValue = options.displayValue;

		// Make sure the font is not bigger than the space between the guard bars
		if (options.fontSize > options.width * 10) {
			_this.fontSize = options.width * 10;
		} else {
			_this.fontSize = options.fontSize;
		}

		// Make the guard bars go down half the way of the text
		_this.guardHeight = options.height + _this.fontSize / 2 + options.textMargin;
		return _this;
	}

	_createClass(UPC, [{
		key: "valid",
		value: function valid() {
			return this.data.search(/^[0-9]{12}$/) !== -1 && this.data[11] == checksum(this.data);
		}
	}, {
		key: "encode",
		value: function encode() {
			if (this.options.flat) {
				return this.flatEncoding();
			} else {
				return this.guardedEncoding();
			}
		}
	}, {
		key: "flatEncoding",
		value: function flatEncoding() {
			var result = "";

			result += "101";
			result += (0, _encoder2.default)(this.data.substr(0, 6), "LLLLLL");
			result += "01010";
			result += (0, _encoder2.default)(this.data.substr(6, 6), "RRRRRR");
			result += "101";

			return {
				data: result,
				text: this.text
			};
		}
	}, {
		key: "guardedEncoding",
		value: function guardedEncoding() {
			var result = [];

			// Add the first digit
			if (this.displayValue) {
				result.push({
					data: "00000000",
					text: this.text.substr(0, 1),
					options: { textAlign: "left", fontSize: this.fontSize }
				});
			}

			// Add the guard bars
			result.push({
				data: "101" + (0, _encoder2.default)(this.data[0], "L"),
				options: { height: this.guardHeight }
			});

			// Add the left side
			result.push({
				data: (0, _encoder2.default)(this.data.substr(1, 5), "LLLLL"),
				text: this.text.substr(1, 5),
				options: { fontSize: this.fontSize }
			});

			// Add the middle bits
			result.push({
				data: "01010",
				options: { height: this.guardHeight }
			});

			// Add the right side
			result.push({
				data: (0, _encoder2.default)(this.data.substr(6, 5), "RRRRR"),
				text: this.text.substr(6, 5),
				options: { fontSize: this.fontSize }
			});

			// Add the end bits
			result.push({
				data: (0, _encoder2.default)(this.data[11], "R") + "101",
				options: { height: this.guardHeight }
			});

			// Add the last digit
			if (this.displayValue) {
				result.push({
					data: "00000000",
					text: this.text.substr(11, 1),
					options: { textAlign: "right", fontSize: this.fontSize }
				});
			}

			return result;
		}
	}]);

	return UPC;
}(_Barcode3.default);

// Calulate the checksum digit
// https://en.wikipedia.org/wiki/International_Article_Number_(EAN)#Calculation_of_checksum_digit


function checksum(number) {
	var result = 0;

	var i;
	for (i = 1; i < 11; i += 2) {
		result += parseInt(number[i]);
	}
	for (i = 0; i < 11; i += 2) {
		result += parseInt(number[i]) * 3;
	}

	return (10 - result % 10) % 10;
}

exports["default"] = UPC;

/***/ }),

/***/ "./node_modules/jsbarcode/bin/barcodes/EAN_UPC/UPCE.js":
/*!*************************************************************!*\
  !*** ./node_modules/jsbarcode/bin/barcodes/EAN_UPC/UPCE.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
	value: true
}));

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _encoder = __webpack_require__(/*! ./encoder */ "./node_modules/jsbarcode/bin/barcodes/EAN_UPC/encoder.js");

var _encoder2 = _interopRequireDefault(_encoder);

var _Barcode2 = __webpack_require__(/*! ../Barcode.js */ "./node_modules/jsbarcode/bin/barcodes/Barcode.js");

var _Barcode3 = _interopRequireDefault(_Barcode2);

var _UPC = __webpack_require__(/*! ./UPC.js */ "./node_modules/jsbarcode/bin/barcodes/EAN_UPC/UPC.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // Encoding documentation:
// https://en.wikipedia.org/wiki/Universal_Product_Code#Encoding
//
// UPC-E documentation:
// https://en.wikipedia.org/wiki/Universal_Product_Code#UPC-E

var EXPANSIONS = ["XX00000XXX", "XX10000XXX", "XX20000XXX", "XXX00000XX", "XXXX00000X", "XXXXX00005", "XXXXX00006", "XXXXX00007", "XXXXX00008", "XXXXX00009"];

var PARITIES = [["EEEOOO", "OOOEEE"], ["EEOEOO", "OOEOEE"], ["EEOOEO", "OOEEOE"], ["EEOOOE", "OOEEEO"], ["EOEEOO", "OEOOEE"], ["EOOEEO", "OEEOOE"], ["EOOOEE", "OEEEOO"], ["EOEOEO", "OEOEOE"], ["EOEOOE", "OEOEEO"], ["EOOEOE", "OEEOEO"]];

var UPCE = function (_Barcode) {
	_inherits(UPCE, _Barcode);

	function UPCE(data, options) {
		_classCallCheck(this, UPCE);

		var _this = _possibleConstructorReturn(this, (UPCE.__proto__ || Object.getPrototypeOf(UPCE)).call(this, data, options));
		// Code may be 6 or 8 digits;
		// A 7 digit code is ambiguous as to whether the extra digit
		// is a UPC-A check or number system digit.


		_this.isValid = false;
		if (data.search(/^[0-9]{6}$/) !== -1) {
			_this.middleDigits = data;
			_this.upcA = expandToUPCA(data, "0");
			_this.text = options.text || '' + _this.upcA[0] + data + _this.upcA[_this.upcA.length - 1];
			_this.isValid = true;
		} else if (data.search(/^[01][0-9]{7}$/) !== -1) {
			_this.middleDigits = data.substring(1, data.length - 1);
			_this.upcA = expandToUPCA(_this.middleDigits, data[0]);

			if (_this.upcA[_this.upcA.length - 1] === data[data.length - 1]) {
				_this.isValid = true;
			} else {
				// checksum mismatch
				return _possibleConstructorReturn(_this);
			}
		} else {
			return _possibleConstructorReturn(_this);
		}

		_this.displayValue = options.displayValue;

		// Make sure the font is not bigger than the space between the guard bars
		if (options.fontSize > options.width * 10) {
			_this.fontSize = options.width * 10;
		} else {
			_this.fontSize = options.fontSize;
		}

		// Make the guard bars go down half the way of the text
		_this.guardHeight = options.height + _this.fontSize / 2 + options.textMargin;
		return _this;
	}

	_createClass(UPCE, [{
		key: 'valid',
		value: function valid() {
			return this.isValid;
		}
	}, {
		key: 'encode',
		value: function encode() {
			if (this.options.flat) {
				return this.flatEncoding();
			} else {
				return this.guardedEncoding();
			}
		}
	}, {
		key: 'flatEncoding',
		value: function flatEncoding() {
			var result = "";

			result += "101";
			result += this.encodeMiddleDigits();
			result += "010101";

			return {
				data: result,
				text: this.text
			};
		}
	}, {
		key: 'guardedEncoding',
		value: function guardedEncoding() {
			var result = [];

			// Add the UPC-A number system digit beneath the quiet zone
			if (this.displayValue) {
				result.push({
					data: "00000000",
					text: this.text[0],
					options: { textAlign: "left", fontSize: this.fontSize }
				});
			}

			// Add the guard bars
			result.push({
				data: "101",
				options: { height: this.guardHeight }
			});

			// Add the 6 UPC-E digits
			result.push({
				data: this.encodeMiddleDigits(),
				text: this.text.substring(1, 7),
				options: { fontSize: this.fontSize }
			});

			// Add the end bits
			result.push({
				data: "010101",
				options: { height: this.guardHeight }
			});

			// Add the UPC-A check digit beneath the quiet zone
			if (this.displayValue) {
				result.push({
					data: "00000000",
					text: this.text[7],
					options: { textAlign: "right", fontSize: this.fontSize }
				});
			}

			return result;
		}
	}, {
		key: 'encodeMiddleDigits',
		value: function encodeMiddleDigits() {
			var numberSystem = this.upcA[0];
			var checkDigit = this.upcA[this.upcA.length - 1];
			var parity = PARITIES[parseInt(checkDigit)][parseInt(numberSystem)];
			return (0, _encoder2.default)(this.middleDigits, parity);
		}
	}]);

	return UPCE;
}(_Barcode3.default);

function expandToUPCA(middleDigits, numberSystem) {
	var lastUpcE = parseInt(middleDigits[middleDigits.length - 1]);
	var expansion = EXPANSIONS[lastUpcE];

	var result = "";
	var digitIndex = 0;
	for (var i = 0; i < expansion.length; i++) {
		var c = expansion[i];
		if (c === 'X') {
			result += middleDigits[digitIndex++];
		} else {
			result += c;
		}
	}

	result = '' + numberSystem + result;
	return '' + result + (0, _UPC.checksum)(result);
}

exports["default"] = UPCE;

/***/ }),

/***/ "./node_modules/jsbarcode/bin/barcodes/EAN_UPC/constants.js":
/*!******************************************************************!*\
  !*** ./node_modules/jsbarcode/bin/barcodes/EAN_UPC/constants.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
	value: true
}));
// Standard start end and middle bits
var SIDE_BIN = exports.SIDE_BIN = '101';
var MIDDLE_BIN = exports.MIDDLE_BIN = '01010';

var BINARIES = exports.BINARIES = {
	'L': [// The L (left) type of encoding
	'0001101', '0011001', '0010011', '0111101', '0100011', '0110001', '0101111', '0111011', '0110111', '0001011'],
	'G': [// The G type of encoding
	'0100111', '0110011', '0011011', '0100001', '0011101', '0111001', '0000101', '0010001', '0001001', '0010111'],
	'R': [// The R (right) type of encoding
	'1110010', '1100110', '1101100', '1000010', '1011100', '1001110', '1010000', '1000100', '1001000', '1110100'],
	'O': [// The O (odd) encoding for UPC-E
	'0001101', '0011001', '0010011', '0111101', '0100011', '0110001', '0101111', '0111011', '0110111', '0001011'],
	'E': [// The E (even) encoding for UPC-E
	'0100111', '0110011', '0011011', '0100001', '0011101', '0111001', '0000101', '0010001', '0001001', '0010111']
};

// Define the EAN-2 structure
var EAN2_STRUCTURE = exports.EAN2_STRUCTURE = ['LL', 'LG', 'GL', 'GG'];

// Define the EAN-5 structure
var EAN5_STRUCTURE = exports.EAN5_STRUCTURE = ['GGLLL', 'GLGLL', 'GLLGL', 'GLLLG', 'LGGLL', 'LLGGL', 'LLLGG', 'LGLGL', 'LGLLG', 'LLGLG'];

// Define the EAN-13 structure
var EAN13_STRUCTURE = exports.EAN13_STRUCTURE = ['LLLLLL', 'LLGLGG', 'LLGGLG', 'LLGGGL', 'LGLLGG', 'LGGLLG', 'LGGGLL', 'LGLGLG', 'LGLGGL', 'LGGLGL'];

/***/ }),

/***/ "./node_modules/jsbarcode/bin/barcodes/EAN_UPC/encoder.js":
/*!****************************************************************!*\
  !*** ./node_modules/jsbarcode/bin/barcodes/EAN_UPC/encoder.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
	value: true
}));

var _constants = __webpack_require__(/*! ./constants */ "./node_modules/jsbarcode/bin/barcodes/EAN_UPC/constants.js");

// Encode data string
var encode = function encode(data, structure, separator) {
	var encoded = data.split('').map(function (val, idx) {
		return _constants.BINARIES[structure[idx]];
	}).map(function (val, idx) {
		return val ? val[data[idx]] : '';
	});

	if (separator) {
		var last = data.length - 1;
		encoded = encoded.map(function (val, idx) {
			return idx < last ? val + separator : val;
		});
	}

	return encoded.join('');
};

exports["default"] = encode;

/***/ }),

/***/ "./node_modules/jsbarcode/bin/barcodes/EAN_UPC/index.js":
/*!**************************************************************!*\
  !*** ./node_modules/jsbarcode/bin/barcodes/EAN_UPC/index.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.UPCE = exports.UPC = exports.EAN2 = exports.EAN5 = exports.EAN8 = exports.EAN13 = undefined;

var _EAN = __webpack_require__(/*! ./EAN13.js */ "./node_modules/jsbarcode/bin/barcodes/EAN_UPC/EAN13.js");

var _EAN2 = _interopRequireDefault(_EAN);

var _EAN3 = __webpack_require__(/*! ./EAN8.js */ "./node_modules/jsbarcode/bin/barcodes/EAN_UPC/EAN8.js");

var _EAN4 = _interopRequireDefault(_EAN3);

var _EAN5 = __webpack_require__(/*! ./EAN5.js */ "./node_modules/jsbarcode/bin/barcodes/EAN_UPC/EAN5.js");

var _EAN6 = _interopRequireDefault(_EAN5);

var _EAN7 = __webpack_require__(/*! ./EAN2.js */ "./node_modules/jsbarcode/bin/barcodes/EAN_UPC/EAN2.js");

var _EAN8 = _interopRequireDefault(_EAN7);

var _UPC = __webpack_require__(/*! ./UPC.js */ "./node_modules/jsbarcode/bin/barcodes/EAN_UPC/UPC.js");

var _UPC2 = _interopRequireDefault(_UPC);

var _UPCE = __webpack_require__(/*! ./UPCE.js */ "./node_modules/jsbarcode/bin/barcodes/EAN_UPC/UPCE.js");

var _UPCE2 = _interopRequireDefault(_UPCE);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.EAN13 = _EAN2.default;
exports.EAN8 = _EAN4.default;
exports.EAN5 = _EAN6.default;
exports.EAN2 = _EAN8.default;
exports.UPC = _UPC2.default;
exports.UPCE = _UPCE2.default;

/***/ }),

/***/ "./node_modules/jsbarcode/bin/barcodes/GenericBarcode/index.js":
/*!*********************************************************************!*\
  !*** ./node_modules/jsbarcode/bin/barcodes/GenericBarcode/index.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
	value: true
}));
exports.GenericBarcode = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Barcode2 = __webpack_require__(/*! ../Barcode.js */ "./node_modules/jsbarcode/bin/barcodes/Barcode.js");

var _Barcode3 = _interopRequireDefault(_Barcode2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var GenericBarcode = function (_Barcode) {
	_inherits(GenericBarcode, _Barcode);

	function GenericBarcode(data, options) {
		_classCallCheck(this, GenericBarcode);

		return _possibleConstructorReturn(this, (GenericBarcode.__proto__ || Object.getPrototypeOf(GenericBarcode)).call(this, data, options)); // Sets this.data and this.text
	}

	// Return the corresponding binary numbers for the data provided


	_createClass(GenericBarcode, [{
		key: "encode",
		value: function encode() {
			return {
				data: "10101010101010101010101010101010101010101",
				text: this.text
			};
		}

		// Resturn true/false if the string provided is valid for this encoder

	}, {
		key: "valid",
		value: function valid() {
			return true;
		}
	}]);

	return GenericBarcode;
}(_Barcode3.default);

exports.GenericBarcode = GenericBarcode;

/***/ }),

/***/ "./node_modules/jsbarcode/bin/barcodes/ITF/ITF.js":
/*!********************************************************!*\
  !*** ./node_modules/jsbarcode/bin/barcodes/ITF/ITF.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
	value: true
}));

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _constants = __webpack_require__(/*! ./constants */ "./node_modules/jsbarcode/bin/barcodes/ITF/constants.js");

var _Barcode2 = __webpack_require__(/*! ../Barcode */ "./node_modules/jsbarcode/bin/barcodes/Barcode.js");

var _Barcode3 = _interopRequireDefault(_Barcode2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ITF = function (_Barcode) {
	_inherits(ITF, _Barcode);

	function ITF() {
		_classCallCheck(this, ITF);

		return _possibleConstructorReturn(this, (ITF.__proto__ || Object.getPrototypeOf(ITF)).apply(this, arguments));
	}

	_createClass(ITF, [{
		key: 'valid',
		value: function valid() {
			return this.data.search(/^([0-9]{2})+$/) !== -1;
		}
	}, {
		key: 'encode',
		value: function encode() {
			var _this2 = this;

			// Calculate all the digit pairs
			var encoded = this.data.match(/.{2}/g).map(function (pair) {
				return _this2.encodePair(pair);
			}).join('');

			return {
				data: _constants.START_BIN + encoded + _constants.END_BIN,
				text: this.text
			};
		}

		// Calculate the data of a number pair

	}, {
		key: 'encodePair',
		value: function encodePair(pair) {
			var second = _constants.BINARIES[pair[1]];

			return _constants.BINARIES[pair[0]].split('').map(function (first, idx) {
				return (first === '1' ? '111' : '1') + (second[idx] === '1' ? '000' : '0');
			}).join('');
		}
	}]);

	return ITF;
}(_Barcode3.default);

exports["default"] = ITF;

/***/ }),

/***/ "./node_modules/jsbarcode/bin/barcodes/ITF/ITF14.js":
/*!**********************************************************!*\
  !*** ./node_modules/jsbarcode/bin/barcodes/ITF/ITF14.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
	value: true
}));

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _ITF2 = __webpack_require__(/*! ./ITF */ "./node_modules/jsbarcode/bin/barcodes/ITF/ITF.js");

var _ITF3 = _interopRequireDefault(_ITF2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// Calculate the checksum digit
var checksum = function checksum(data) {
	var res = data.substr(0, 13).split('').map(function (num) {
		return parseInt(num, 10);
	}).reduce(function (sum, n, idx) {
		return sum + n * (3 - idx % 2 * 2);
	}, 0);

	return Math.ceil(res / 10) * 10 - res;
};

var ITF14 = function (_ITF) {
	_inherits(ITF14, _ITF);

	function ITF14(data, options) {
		_classCallCheck(this, ITF14);

		// Add checksum if it does not exist
		if (data.search(/^[0-9]{13}$/) !== -1) {
			data += checksum(data);
		}
		return _possibleConstructorReturn(this, (ITF14.__proto__ || Object.getPrototypeOf(ITF14)).call(this, data, options));
	}

	_createClass(ITF14, [{
		key: 'valid',
		value: function valid() {
			return this.data.search(/^[0-9]{14}$/) !== -1 && +this.data[13] === checksum(this.data);
		}
	}]);

	return ITF14;
}(_ITF3.default);

exports["default"] = ITF14;

/***/ }),

/***/ "./node_modules/jsbarcode/bin/barcodes/ITF/constants.js":
/*!**************************************************************!*\
  !*** ./node_modules/jsbarcode/bin/barcodes/ITF/constants.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
	value: true
}));
var START_BIN = exports.START_BIN = '1010';
var END_BIN = exports.END_BIN = '11101';

var BINARIES = exports.BINARIES = ['00110', '10001', '01001', '11000', '00101', '10100', '01100', '00011', '10010', '01010'];

/***/ }),

/***/ "./node_modules/jsbarcode/bin/barcodes/ITF/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/jsbarcode/bin/barcodes/ITF/index.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.ITF14 = exports.ITF = undefined;

var _ITF = __webpack_require__(/*! ./ITF */ "./node_modules/jsbarcode/bin/barcodes/ITF/ITF.js");

var _ITF2 = _interopRequireDefault(_ITF);

var _ITF3 = __webpack_require__(/*! ./ITF14 */ "./node_modules/jsbarcode/bin/barcodes/ITF/ITF14.js");

var _ITF4 = _interopRequireDefault(_ITF3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.ITF = _ITF2.default;
exports.ITF14 = _ITF4.default;

/***/ }),

/***/ "./node_modules/jsbarcode/bin/barcodes/MSI/MSI.js":
/*!********************************************************!*\
  !*** ./node_modules/jsbarcode/bin/barcodes/MSI/MSI.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
	value: true
}));

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Barcode2 = __webpack_require__(/*! ../Barcode.js */ "./node_modules/jsbarcode/bin/barcodes/Barcode.js");

var _Barcode3 = _interopRequireDefault(_Barcode2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // Encoding documentation
// https://en.wikipedia.org/wiki/MSI_Barcode#Character_set_and_binary_lookup

var MSI = function (_Barcode) {
	_inherits(MSI, _Barcode);

	function MSI(data, options) {
		_classCallCheck(this, MSI);

		return _possibleConstructorReturn(this, (MSI.__proto__ || Object.getPrototypeOf(MSI)).call(this, data, options));
	}

	_createClass(MSI, [{
		key: "encode",
		value: function encode() {
			// Start bits
			var ret = "110";

			for (var i = 0; i < this.data.length; i++) {
				// Convert the character to binary (always 4 binary digits)
				var digit = parseInt(this.data[i]);
				var bin = digit.toString(2);
				bin = addZeroes(bin, 4 - bin.length);

				// Add 100 for every zero and 110 for every 1
				for (var b = 0; b < bin.length; b++) {
					ret += bin[b] == "0" ? "100" : "110";
				}
			}

			// End bits
			ret += "1001";

			return {
				data: ret,
				text: this.text
			};
		}
	}, {
		key: "valid",
		value: function valid() {
			return this.data.search(/^[0-9]+$/) !== -1;
		}
	}]);

	return MSI;
}(_Barcode3.default);

function addZeroes(number, n) {
	for (var i = 0; i < n; i++) {
		number = "0" + number;
	}
	return number;
}

exports["default"] = MSI;

/***/ }),

/***/ "./node_modules/jsbarcode/bin/barcodes/MSI/MSI10.js":
/*!**********************************************************!*\
  !*** ./node_modules/jsbarcode/bin/barcodes/MSI/MSI10.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
	value: true
}));

var _MSI2 = __webpack_require__(/*! ./MSI.js */ "./node_modules/jsbarcode/bin/barcodes/MSI/MSI.js");

var _MSI3 = _interopRequireDefault(_MSI2);

var _checksums = __webpack_require__(/*! ./checksums.js */ "./node_modules/jsbarcode/bin/barcodes/MSI/checksums.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MSI10 = function (_MSI) {
	_inherits(MSI10, _MSI);

	function MSI10(data, options) {
		_classCallCheck(this, MSI10);

		return _possibleConstructorReturn(this, (MSI10.__proto__ || Object.getPrototypeOf(MSI10)).call(this, data + (0, _checksums.mod10)(data), options));
	}

	return MSI10;
}(_MSI3.default);

exports["default"] = MSI10;

/***/ }),

/***/ "./node_modules/jsbarcode/bin/barcodes/MSI/MSI1010.js":
/*!************************************************************!*\
  !*** ./node_modules/jsbarcode/bin/barcodes/MSI/MSI1010.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
	value: true
}));

var _MSI2 = __webpack_require__(/*! ./MSI.js */ "./node_modules/jsbarcode/bin/barcodes/MSI/MSI.js");

var _MSI3 = _interopRequireDefault(_MSI2);

var _checksums = __webpack_require__(/*! ./checksums.js */ "./node_modules/jsbarcode/bin/barcodes/MSI/checksums.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MSI1010 = function (_MSI) {
	_inherits(MSI1010, _MSI);

	function MSI1010(data, options) {
		_classCallCheck(this, MSI1010);

		data += (0, _checksums.mod10)(data);
		data += (0, _checksums.mod10)(data);
		return _possibleConstructorReturn(this, (MSI1010.__proto__ || Object.getPrototypeOf(MSI1010)).call(this, data, options));
	}

	return MSI1010;
}(_MSI3.default);

exports["default"] = MSI1010;

/***/ }),

/***/ "./node_modules/jsbarcode/bin/barcodes/MSI/MSI11.js":
/*!**********************************************************!*\
  !*** ./node_modules/jsbarcode/bin/barcodes/MSI/MSI11.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
	value: true
}));

var _MSI2 = __webpack_require__(/*! ./MSI.js */ "./node_modules/jsbarcode/bin/barcodes/MSI/MSI.js");

var _MSI3 = _interopRequireDefault(_MSI2);

var _checksums = __webpack_require__(/*! ./checksums.js */ "./node_modules/jsbarcode/bin/barcodes/MSI/checksums.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MSI11 = function (_MSI) {
	_inherits(MSI11, _MSI);

	function MSI11(data, options) {
		_classCallCheck(this, MSI11);

		return _possibleConstructorReturn(this, (MSI11.__proto__ || Object.getPrototypeOf(MSI11)).call(this, data + (0, _checksums.mod11)(data), options));
	}

	return MSI11;
}(_MSI3.default);

exports["default"] = MSI11;

/***/ }),

/***/ "./node_modules/jsbarcode/bin/barcodes/MSI/MSI1110.js":
/*!************************************************************!*\
  !*** ./node_modules/jsbarcode/bin/barcodes/MSI/MSI1110.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
	value: true
}));

var _MSI2 = __webpack_require__(/*! ./MSI.js */ "./node_modules/jsbarcode/bin/barcodes/MSI/MSI.js");

var _MSI3 = _interopRequireDefault(_MSI2);

var _checksums = __webpack_require__(/*! ./checksums.js */ "./node_modules/jsbarcode/bin/barcodes/MSI/checksums.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MSI1110 = function (_MSI) {
	_inherits(MSI1110, _MSI);

	function MSI1110(data, options) {
		_classCallCheck(this, MSI1110);

		data += (0, _checksums.mod11)(data);
		data += (0, _checksums.mod10)(data);
		return _possibleConstructorReturn(this, (MSI1110.__proto__ || Object.getPrototypeOf(MSI1110)).call(this, data, options));
	}

	return MSI1110;
}(_MSI3.default);

exports["default"] = MSI1110;

/***/ }),

/***/ "./node_modules/jsbarcode/bin/barcodes/MSI/checksums.js":
/*!**************************************************************!*\
  !*** ./node_modules/jsbarcode/bin/barcodes/MSI/checksums.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
	value: true
}));
exports.mod10 = mod10;
exports.mod11 = mod11;
function mod10(number) {
	var sum = 0;
	for (var i = 0; i < number.length; i++) {
		var n = parseInt(number[i]);
		if ((i + number.length) % 2 === 0) {
			sum += n;
		} else {
			sum += n * 2 % 10 + Math.floor(n * 2 / 10);
		}
	}
	return (10 - sum % 10) % 10;
}

function mod11(number) {
	var sum = 0;
	var weights = [2, 3, 4, 5, 6, 7];
	for (var i = 0; i < number.length; i++) {
		var n = parseInt(number[number.length - 1 - i]);
		sum += weights[i % weights.length] * n;
	}
	return (11 - sum % 11) % 11;
}

/***/ }),

/***/ "./node_modules/jsbarcode/bin/barcodes/MSI/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/jsbarcode/bin/barcodes/MSI/index.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.MSI1110 = exports.MSI1010 = exports.MSI11 = exports.MSI10 = exports.MSI = undefined;

var _MSI = __webpack_require__(/*! ./MSI.js */ "./node_modules/jsbarcode/bin/barcodes/MSI/MSI.js");

var _MSI2 = _interopRequireDefault(_MSI);

var _MSI3 = __webpack_require__(/*! ./MSI10.js */ "./node_modules/jsbarcode/bin/barcodes/MSI/MSI10.js");

var _MSI4 = _interopRequireDefault(_MSI3);

var _MSI5 = __webpack_require__(/*! ./MSI11.js */ "./node_modules/jsbarcode/bin/barcodes/MSI/MSI11.js");

var _MSI6 = _interopRequireDefault(_MSI5);

var _MSI7 = __webpack_require__(/*! ./MSI1010.js */ "./node_modules/jsbarcode/bin/barcodes/MSI/MSI1010.js");

var _MSI8 = _interopRequireDefault(_MSI7);

var _MSI9 = __webpack_require__(/*! ./MSI1110.js */ "./node_modules/jsbarcode/bin/barcodes/MSI/MSI1110.js");

var _MSI10 = _interopRequireDefault(_MSI9);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.MSI = _MSI2.default;
exports.MSI10 = _MSI4.default;
exports.MSI11 = _MSI6.default;
exports.MSI1010 = _MSI8.default;
exports.MSI1110 = _MSI10.default;

/***/ }),

/***/ "./node_modules/jsbarcode/bin/barcodes/codabar/index.js":
/*!**************************************************************!*\
  !*** ./node_modules/jsbarcode/bin/barcodes/codabar/index.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
	value: true
}));
exports.codabar = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Barcode2 = __webpack_require__(/*! ../Barcode.js */ "./node_modules/jsbarcode/bin/barcodes/Barcode.js");

var _Barcode3 = _interopRequireDefault(_Barcode2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // Encoding specification:
// http://www.barcodeisland.com/codabar.phtml

var codabar = function (_Barcode) {
	_inherits(codabar, _Barcode);

	function codabar(data, options) {
		_classCallCheck(this, codabar);

		if (data.search(/^[0-9\-\$\:\.\+\/]+$/) === 0) {
			data = "A" + data + "A";
		}

		var _this = _possibleConstructorReturn(this, (codabar.__proto__ || Object.getPrototypeOf(codabar)).call(this, data.toUpperCase(), options));

		_this.text = _this.options.text || _this.text.replace(/[A-D]/g, '');
		return _this;
	}

	_createClass(codabar, [{
		key: "valid",
		value: function valid() {
			return this.data.search(/^[A-D][0-9\-\$\:\.\+\/]+[A-D]$/) !== -1;
		}
	}, {
		key: "encode",
		value: function encode() {
			var result = [];
			var encodings = this.getEncodings();
			for (var i = 0; i < this.data.length; i++) {
				result.push(encodings[this.data.charAt(i)]);
				// for all characters except the last, append a narrow-space ("0")
				if (i !== this.data.length - 1) {
					result.push("0");
				}
			}
			return {
				text: this.text,
				data: result.join('')
			};
		}
	}, {
		key: "getEncodings",
		value: function getEncodings() {
			return {
				"0": "101010011",
				"1": "101011001",
				"2": "101001011",
				"3": "110010101",
				"4": "101101001",
				"5": "110101001",
				"6": "100101011",
				"7": "100101101",
				"8": "100110101",
				"9": "110100101",
				"-": "101001101",
				"$": "101100101",
				":": "1101011011",
				"/": "1101101011",
				".": "1101101101",
				"+": "1011011011",
				"A": "1011001001",
				"B": "1001001011",
				"C": "1010010011",
				"D": "1010011001"
			};
		}
	}]);

	return codabar;
}(_Barcode3.default);

exports.codabar = codabar;

/***/ }),

/***/ "./node_modules/jsbarcode/bin/barcodes/index.js":
/*!******************************************************!*\
  !*** ./node_modules/jsbarcode/bin/barcodes/index.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
	value: true
}));

var _CODE = __webpack_require__(/*! ./CODE39/ */ "./node_modules/jsbarcode/bin/barcodes/CODE39/index.js");

var _CODE2 = __webpack_require__(/*! ./CODE128/ */ "./node_modules/jsbarcode/bin/barcodes/CODE128/index.js");

var _EAN_UPC = __webpack_require__(/*! ./EAN_UPC/ */ "./node_modules/jsbarcode/bin/barcodes/EAN_UPC/index.js");

var _ITF = __webpack_require__(/*! ./ITF/ */ "./node_modules/jsbarcode/bin/barcodes/ITF/index.js");

var _MSI = __webpack_require__(/*! ./MSI/ */ "./node_modules/jsbarcode/bin/barcodes/MSI/index.js");

var _pharmacode = __webpack_require__(/*! ./pharmacode/ */ "./node_modules/jsbarcode/bin/barcodes/pharmacode/index.js");

var _codabar = __webpack_require__(/*! ./codabar */ "./node_modules/jsbarcode/bin/barcodes/codabar/index.js");

var _CODE3 = __webpack_require__(/*! ./CODE93/ */ "./node_modules/jsbarcode/bin/barcodes/CODE93/index.js");

var _GenericBarcode = __webpack_require__(/*! ./GenericBarcode/ */ "./node_modules/jsbarcode/bin/barcodes/GenericBarcode/index.js");

exports["default"] = {
	CODE39: _CODE.CODE39,
	CODE128: _CODE2.CODE128, CODE128A: _CODE2.CODE128A, CODE128B: _CODE2.CODE128B, CODE128C: _CODE2.CODE128C,
	EAN13: _EAN_UPC.EAN13, EAN8: _EAN_UPC.EAN8, EAN5: _EAN_UPC.EAN5, EAN2: _EAN_UPC.EAN2, UPC: _EAN_UPC.UPC, UPCE: _EAN_UPC.UPCE,
	ITF14: _ITF.ITF14,
	ITF: _ITF.ITF,
	MSI: _MSI.MSI, MSI10: _MSI.MSI10, MSI11: _MSI.MSI11, MSI1010: _MSI.MSI1010, MSI1110: _MSI.MSI1110,
	pharmacode: _pharmacode.pharmacode,
	codabar: _codabar.codabar,
	CODE93: _CODE3.CODE93, CODE93FullASCII: _CODE3.CODE93FullASCII,
	GenericBarcode: _GenericBarcode.GenericBarcode
};

/***/ }),

/***/ "./node_modules/jsbarcode/bin/barcodes/pharmacode/index.js":
/*!*****************************************************************!*\
  !*** ./node_modules/jsbarcode/bin/barcodes/pharmacode/index.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
	value: true
}));
exports.pharmacode = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Barcode2 = __webpack_require__(/*! ../Barcode.js */ "./node_modules/jsbarcode/bin/barcodes/Barcode.js");

var _Barcode3 = _interopRequireDefault(_Barcode2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // Encoding documentation
// http://www.gomaro.ch/ftproot/Laetus_PHARMA-CODE.pdf

var pharmacode = function (_Barcode) {
	_inherits(pharmacode, _Barcode);

	function pharmacode(data, options) {
		_classCallCheck(this, pharmacode);

		var _this = _possibleConstructorReturn(this, (pharmacode.__proto__ || Object.getPrototypeOf(pharmacode)).call(this, data, options));

		_this.number = parseInt(data, 10);
		return _this;
	}

	_createClass(pharmacode, [{
		key: "encode",
		value: function encode() {
			var z = this.number;
			var result = "";

			// http://i.imgur.com/RMm4UDJ.png
			// (source: http://www.gomaro.ch/ftproot/Laetus_PHARMA-CODE.pdf, page: 34)
			while (!isNaN(z) && z != 0) {
				if (z % 2 === 0) {
					// Even
					result = "11100" + result;
					z = (z - 2) / 2;
				} else {
					// Odd
					result = "100" + result;
					z = (z - 1) / 2;
				}
			}

			// Remove the two last zeroes
			result = result.slice(0, -2);

			return {
				data: result,
				text: this.text
			};
		}
	}, {
		key: "valid",
		value: function valid() {
			return this.number >= 3 && this.number <= 131070;
		}
	}]);

	return pharmacode;
}(_Barcode3.default);

exports.pharmacode = pharmacode;

/***/ }),

/***/ "./node_modules/jsbarcode/bin/exceptions/ErrorHandler.js":
/*!***************************************************************!*\
  !*** ./node_modules/jsbarcode/bin/exceptions/ErrorHandler.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
	value: true
}));

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/*eslint no-console: 0 */

var ErrorHandler = function () {
	function ErrorHandler(api) {
		_classCallCheck(this, ErrorHandler);

		this.api = api;
	}

	_createClass(ErrorHandler, [{
		key: "handleCatch",
		value: function handleCatch(e) {
			// If babel supported extending of Error in a correct way instanceof would be used here
			if (e.name === "InvalidInputException") {
				if (this.api._options.valid !== this.api._defaults.valid) {
					this.api._options.valid(false);
				} else {
					throw e.message;
				}
			} else {
				throw e;
			}

			this.api.render = function () {};
		}
	}, {
		key: "wrapBarcodeCall",
		value: function wrapBarcodeCall(func) {
			try {
				var result = func.apply(undefined, arguments);
				this.api._options.valid(true);
				return result;
			} catch (e) {
				this.handleCatch(e);

				return this.api;
			}
		}
	}]);

	return ErrorHandler;
}();

exports["default"] = ErrorHandler;

/***/ }),

/***/ "./node_modules/jsbarcode/bin/exceptions/exceptions.js":
/*!*************************************************************!*\
  !*** ./node_modules/jsbarcode/bin/exceptions/exceptions.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
	value: true
}));

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var InvalidInputException = function (_Error) {
	_inherits(InvalidInputException, _Error);

	function InvalidInputException(symbology, input) {
		_classCallCheck(this, InvalidInputException);

		var _this = _possibleConstructorReturn(this, (InvalidInputException.__proto__ || Object.getPrototypeOf(InvalidInputException)).call(this));

		_this.name = "InvalidInputException";

		_this.symbology = symbology;
		_this.input = input;

		_this.message = '"' + _this.input + '" is not a valid input for ' + _this.symbology;
		return _this;
	}

	return InvalidInputException;
}(Error);

var InvalidElementException = function (_Error2) {
	_inherits(InvalidElementException, _Error2);

	function InvalidElementException() {
		_classCallCheck(this, InvalidElementException);

		var _this2 = _possibleConstructorReturn(this, (InvalidElementException.__proto__ || Object.getPrototypeOf(InvalidElementException)).call(this));

		_this2.name = "InvalidElementException";
		_this2.message = "Not supported type to render on";
		return _this2;
	}

	return InvalidElementException;
}(Error);

var NoElementException = function (_Error3) {
	_inherits(NoElementException, _Error3);

	function NoElementException() {
		_classCallCheck(this, NoElementException);

		var _this3 = _possibleConstructorReturn(this, (NoElementException.__proto__ || Object.getPrototypeOf(NoElementException)).call(this));

		_this3.name = "NoElementException";
		_this3.message = "No element to render on.";
		return _this3;
	}

	return NoElementException;
}(Error);

exports.InvalidInputException = InvalidInputException;
exports.InvalidElementException = InvalidElementException;
exports.NoElementException = NoElementException;

/***/ }),

/***/ "./node_modules/jsbarcode/bin/help/fixOptions.js":
/*!*******************************************************!*\
  !*** ./node_modules/jsbarcode/bin/help/fixOptions.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
	value: true
}));
exports["default"] = fixOptions;


function fixOptions(options) {
	// Fix the margins
	options.marginTop = options.marginTop || options.margin;
	options.marginBottom = options.marginBottom || options.margin;
	options.marginRight = options.marginRight || options.margin;
	options.marginLeft = options.marginLeft || options.margin;

	return options;
}

/***/ }),

/***/ "./node_modules/jsbarcode/bin/help/getOptionsFromElement.js":
/*!******************************************************************!*\
  !*** ./node_modules/jsbarcode/bin/help/getOptionsFromElement.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
	value: true
}));

var _optionsFromStrings = __webpack_require__(/*! ./optionsFromStrings.js */ "./node_modules/jsbarcode/bin/help/optionsFromStrings.js");

var _optionsFromStrings2 = _interopRequireDefault(_optionsFromStrings);

var _defaults = __webpack_require__(/*! ../options/defaults.js */ "./node_modules/jsbarcode/bin/options/defaults.js");

var _defaults2 = _interopRequireDefault(_defaults);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getOptionsFromElement(element) {
	var options = {};
	for (var property in _defaults2.default) {
		if (_defaults2.default.hasOwnProperty(property)) {
			// jsbarcode-*
			if (element.hasAttribute("jsbarcode-" + property.toLowerCase())) {
				options[property] = element.getAttribute("jsbarcode-" + property.toLowerCase());
			}

			// data-*
			if (element.hasAttribute("data-" + property.toLowerCase())) {
				options[property] = element.getAttribute("data-" + property.toLowerCase());
			}
		}
	}

	options["value"] = element.getAttribute("jsbarcode-value") || element.getAttribute("data-value");

	// Since all atributes are string they need to be converted to integers
	options = (0, _optionsFromStrings2.default)(options);

	return options;
}

exports["default"] = getOptionsFromElement;

/***/ }),

/***/ "./node_modules/jsbarcode/bin/help/getRenderProperties.js":
/*!****************************************************************!*\
  !*** ./node_modules/jsbarcode/bin/help/getRenderProperties.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
	value: true
}));

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; /* global HTMLImageElement */
/* global HTMLCanvasElement */
/* global SVGElement */

var _getOptionsFromElement = __webpack_require__(/*! ./getOptionsFromElement.js */ "./node_modules/jsbarcode/bin/help/getOptionsFromElement.js");

var _getOptionsFromElement2 = _interopRequireDefault(_getOptionsFromElement);

var _renderers = __webpack_require__(/*! ../renderers */ "./node_modules/jsbarcode/bin/renderers/index.js");

var _renderers2 = _interopRequireDefault(_renderers);

var _exceptions = __webpack_require__(/*! ../exceptions/exceptions.js */ "./node_modules/jsbarcode/bin/exceptions/exceptions.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Takes an element and returns an object with information about how
// it should be rendered
// This could also return an array with these objects
// {
//   element: The element that the renderer should draw on
//   renderer: The name of the renderer
//   afterRender (optional): If something has to done after the renderer
//     completed, calls afterRender (function)
//   options (optional): Options that can be defined in the element
// }

function getRenderProperties(element) {
	// If the element is a string, query select call again
	if (typeof element === "string") {
		return querySelectedRenderProperties(element);
	}
	// If element is array. Recursivly call with every object in the array
	else if (Array.isArray(element)) {
			var returnArray = [];
			for (var i = 0; i < element.length; i++) {
				returnArray.push(getRenderProperties(element[i]));
			}
			return returnArray;
		}
		// If element, render on canvas and set the uri as src
		else if (typeof HTMLCanvasElement !== 'undefined' && element instanceof HTMLImageElement) {
				return newCanvasRenderProperties(element);
			}
			// If SVG
			else if (element && element.nodeName && element.nodeName.toLowerCase() === 'svg' || typeof SVGElement !== 'undefined' && element instanceof SVGElement) {
					return {
						element: element,
						options: (0, _getOptionsFromElement2.default)(element),
						renderer: _renderers2.default.SVGRenderer
					};
				}
				// If canvas (in browser)
				else if (typeof HTMLCanvasElement !== 'undefined' && element instanceof HTMLCanvasElement) {
						return {
							element: element,
							options: (0, _getOptionsFromElement2.default)(element),
							renderer: _renderers2.default.CanvasRenderer
						};
					}
					// If canvas (in node)
					else if (element && element.getContext) {
							return {
								element: element,
								renderer: _renderers2.default.CanvasRenderer
							};
						} else if (element && (typeof element === "undefined" ? "undefined" : _typeof(element)) === 'object' && !element.nodeName) {
							return {
								element: element,
								renderer: _renderers2.default.ObjectRenderer
							};
						} else {
							throw new _exceptions.InvalidElementException();
						}
}

function querySelectedRenderProperties(string) {
	var selector = document.querySelectorAll(string);
	if (selector.length === 0) {
		return undefined;
	} else {
		var returnArray = [];
		for (var i = 0; i < selector.length; i++) {
			returnArray.push(getRenderProperties(selector[i]));
		}
		return returnArray;
	}
}

function newCanvasRenderProperties(imgElement) {
	var canvas = document.createElement('canvas');
	return {
		element: canvas,
		options: (0, _getOptionsFromElement2.default)(imgElement),
		renderer: _renderers2.default.CanvasRenderer,
		afterRender: function afterRender() {
			imgElement.setAttribute("src", canvas.toDataURL());
		}
	};
}

exports["default"] = getRenderProperties;

/***/ }),

/***/ "./node_modules/jsbarcode/bin/help/linearizeEncodings.js":
/*!***************************************************************!*\
  !*** ./node_modules/jsbarcode/bin/help/linearizeEncodings.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
	value: true
}));
exports["default"] = linearizeEncodings;

// Encodings can be nestled like [[1-1, 1-2], 2, [3-1, 3-2]
// Convert to [1-1, 1-2, 2, 3-1, 3-2]

function linearizeEncodings(encodings) {
	var linearEncodings = [];
	function nextLevel(encoded) {
		if (Array.isArray(encoded)) {
			for (var i = 0; i < encoded.length; i++) {
				nextLevel(encoded[i]);
			}
		} else {
			encoded.text = encoded.text || "";
			encoded.data = encoded.data || "";
			linearEncodings.push(encoded);
		}
	}
	nextLevel(encodings);

	return linearEncodings;
}

/***/ }),

/***/ "./node_modules/jsbarcode/bin/help/merge.js":
/*!**************************************************!*\
  !*** ./node_modules/jsbarcode/bin/help/merge.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports["default"] = function (old, replaceObj) {
  return _extends({}, old, replaceObj);
};

/***/ }),

/***/ "./node_modules/jsbarcode/bin/help/optionsFromStrings.js":
/*!***************************************************************!*\
  !*** ./node_modules/jsbarcode/bin/help/optionsFromStrings.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
	value: true
}));
exports["default"] = optionsFromStrings;

// Convert string to integers/booleans where it should be

function optionsFromStrings(options) {
	var intOptions = ["width", "height", "textMargin", "fontSize", "margin", "marginTop", "marginBottom", "marginLeft", "marginRight"];

	for (var intOption in intOptions) {
		if (intOptions.hasOwnProperty(intOption)) {
			intOption = intOptions[intOption];
			if (typeof options[intOption] === "string") {
				options[intOption] = parseInt(options[intOption], 10);
			}
		}
	}

	if (typeof options["displayValue"] === "string") {
		options["displayValue"] = options["displayValue"] != "false";
	}

	return options;
}

/***/ }),

/***/ "./node_modules/jsbarcode/bin/options/defaults.js":
/*!********************************************************!*\
  !*** ./node_modules/jsbarcode/bin/options/defaults.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
	value: true
}));
var defaults = {
	width: 2,
	height: 100,
	format: "auto",
	displayValue: true,
	fontOptions: "",
	font: "monospace",
	text: undefined,
	textAlign: "center",
	textPosition: "bottom",
	textMargin: 2,
	fontSize: 20,
	background: "#ffffff",
	lineColor: "#000000",
	margin: 10,
	marginTop: undefined,
	marginBottom: undefined,
	marginLeft: undefined,
	marginRight: undefined,
	valid: function valid() {}
};

exports["default"] = defaults;

/***/ }),

/***/ "./node_modules/jsbarcode/bin/renderers/canvas.js":
/*!********************************************************!*\
  !*** ./node_modules/jsbarcode/bin/renderers/canvas.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
	value: true
}));

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _merge = __webpack_require__(/*! ../help/merge.js */ "./node_modules/jsbarcode/bin/help/merge.js");

var _merge2 = _interopRequireDefault(_merge);

var _shared = __webpack_require__(/*! ./shared.js */ "./node_modules/jsbarcode/bin/renderers/shared.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var CanvasRenderer = function () {
	function CanvasRenderer(canvas, encodings, options) {
		_classCallCheck(this, CanvasRenderer);

		this.canvas = canvas;
		this.encodings = encodings;
		this.options = options;
	}

	_createClass(CanvasRenderer, [{
		key: "render",
		value: function render() {
			// Abort if the browser does not support HTML5 canvas
			if (!this.canvas.getContext) {
				throw new Error('The browser does not support canvas.');
			}

			this.prepareCanvas();
			for (var i = 0; i < this.encodings.length; i++) {
				var encodingOptions = (0, _merge2.default)(this.options, this.encodings[i].options);

				this.drawCanvasBarcode(encodingOptions, this.encodings[i]);
				this.drawCanvasText(encodingOptions, this.encodings[i]);

				this.moveCanvasDrawing(this.encodings[i]);
			}

			this.restoreCanvas();
		}
	}, {
		key: "prepareCanvas",
		value: function prepareCanvas() {
			// Get the canvas context
			var ctx = this.canvas.getContext("2d");

			ctx.save();

			(0, _shared.calculateEncodingAttributes)(this.encodings, this.options, ctx);
			var totalWidth = (0, _shared.getTotalWidthOfEncodings)(this.encodings);
			var maxHeight = (0, _shared.getMaximumHeightOfEncodings)(this.encodings);

			this.canvas.width = totalWidth + this.options.marginLeft + this.options.marginRight;

			this.canvas.height = maxHeight;

			// Paint the canvas
			ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
			if (this.options.background) {
				ctx.fillStyle = this.options.background;
				ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
			}

			ctx.translate(this.options.marginLeft, 0);
		}
	}, {
		key: "drawCanvasBarcode",
		value: function drawCanvasBarcode(options, encoding) {
			// Get the canvas context
			var ctx = this.canvas.getContext("2d");

			var binary = encoding.data;

			// Creates the barcode out of the encoded binary
			var yFrom;
			if (options.textPosition == "top") {
				yFrom = options.marginTop + options.fontSize + options.textMargin;
			} else {
				yFrom = options.marginTop;
			}

			ctx.fillStyle = options.lineColor;

			for (var b = 0; b < binary.length; b++) {
				var x = b * options.width + encoding.barcodePadding;

				if (binary[b] === "1") {
					ctx.fillRect(x, yFrom, options.width, options.height);
				} else if (binary[b]) {
					ctx.fillRect(x, yFrom, options.width, options.height * binary[b]);
				}
			}
		}
	}, {
		key: "drawCanvasText",
		value: function drawCanvasText(options, encoding) {
			// Get the canvas context
			var ctx = this.canvas.getContext("2d");

			var font = options.fontOptions + " " + options.fontSize + "px " + options.font;

			// Draw the text if displayValue is set
			if (options.displayValue) {
				var x, y;

				if (options.textPosition == "top") {
					y = options.marginTop + options.fontSize - options.textMargin;
				} else {
					y = options.height + options.textMargin + options.marginTop + options.fontSize;
				}

				ctx.font = font;

				// Draw the text in the correct X depending on the textAlign option
				if (options.textAlign == "left" || encoding.barcodePadding > 0) {
					x = 0;
					ctx.textAlign = 'left';
				} else if (options.textAlign == "right") {
					x = encoding.width - 1;
					ctx.textAlign = 'right';
				}
				// In all other cases, center the text
				else {
						x = encoding.width / 2;
						ctx.textAlign = 'center';
					}

				ctx.fillText(encoding.text, x, y);
			}
		}
	}, {
		key: "moveCanvasDrawing",
		value: function moveCanvasDrawing(encoding) {
			var ctx = this.canvas.getContext("2d");

			ctx.translate(encoding.width, 0);
		}
	}, {
		key: "restoreCanvas",
		value: function restoreCanvas() {
			// Get the canvas context
			var ctx = this.canvas.getContext("2d");

			ctx.restore();
		}
	}]);

	return CanvasRenderer;
}();

exports["default"] = CanvasRenderer;

/***/ }),

/***/ "./node_modules/jsbarcode/bin/renderers/index.js":
/*!*******************************************************!*\
  !*** ./node_modules/jsbarcode/bin/renderers/index.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));

var _canvas = __webpack_require__(/*! ./canvas.js */ "./node_modules/jsbarcode/bin/renderers/canvas.js");

var _canvas2 = _interopRequireDefault(_canvas);

var _svg = __webpack_require__(/*! ./svg.js */ "./node_modules/jsbarcode/bin/renderers/svg.js");

var _svg2 = _interopRequireDefault(_svg);

var _object = __webpack_require__(/*! ./object.js */ "./node_modules/jsbarcode/bin/renderers/object.js");

var _object2 = _interopRequireDefault(_object);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports["default"] = { CanvasRenderer: _canvas2.default, SVGRenderer: _svg2.default, ObjectRenderer: _object2.default };

/***/ }),

/***/ "./node_modules/jsbarcode/bin/renderers/object.js":
/*!********************************************************!*\
  !*** ./node_modules/jsbarcode/bin/renderers/object.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
	value: true
}));

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ObjectRenderer = function () {
	function ObjectRenderer(object, encodings, options) {
		_classCallCheck(this, ObjectRenderer);

		this.object = object;
		this.encodings = encodings;
		this.options = options;
	}

	_createClass(ObjectRenderer, [{
		key: "render",
		value: function render() {
			this.object.encodings = this.encodings;
		}
	}]);

	return ObjectRenderer;
}();

exports["default"] = ObjectRenderer;

/***/ }),

/***/ "./node_modules/jsbarcode/bin/renderers/shared.js":
/*!********************************************************!*\
  !*** ./node_modules/jsbarcode/bin/renderers/shared.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
	value: true
}));
exports.getTotalWidthOfEncodings = exports.calculateEncodingAttributes = exports.getBarcodePadding = exports.getEncodingHeight = exports.getMaximumHeightOfEncodings = undefined;

var _merge = __webpack_require__(/*! ../help/merge.js */ "./node_modules/jsbarcode/bin/help/merge.js");

var _merge2 = _interopRequireDefault(_merge);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getEncodingHeight(encoding, options) {
	return options.height + (options.displayValue && encoding.text.length > 0 ? options.fontSize + options.textMargin : 0) + options.marginTop + options.marginBottom;
}

function getBarcodePadding(textWidth, barcodeWidth, options) {
	if (options.displayValue && barcodeWidth < textWidth) {
		if (options.textAlign == "center") {
			return Math.floor((textWidth - barcodeWidth) / 2);
		} else if (options.textAlign == "left") {
			return 0;
		} else if (options.textAlign == "right") {
			return Math.floor(textWidth - barcodeWidth);
		}
	}
	return 0;
}

function calculateEncodingAttributes(encodings, barcodeOptions, context) {
	for (var i = 0; i < encodings.length; i++) {
		var encoding = encodings[i];
		var options = (0, _merge2.default)(barcodeOptions, encoding.options);

		// Calculate the width of the encoding
		var textWidth;
		if (options.displayValue) {
			textWidth = messureText(encoding.text, options, context);
		} else {
			textWidth = 0;
		}

		var barcodeWidth = encoding.data.length * options.width;
		encoding.width = Math.ceil(Math.max(textWidth, barcodeWidth));

		encoding.height = getEncodingHeight(encoding, options);

		encoding.barcodePadding = getBarcodePadding(textWidth, barcodeWidth, options);
	}
}

function getTotalWidthOfEncodings(encodings) {
	var totalWidth = 0;
	for (var i = 0; i < encodings.length; i++) {
		totalWidth += encodings[i].width;
	}
	return totalWidth;
}

function getMaximumHeightOfEncodings(encodings) {
	var maxHeight = 0;
	for (var i = 0; i < encodings.length; i++) {
		if (encodings[i].height > maxHeight) {
			maxHeight = encodings[i].height;
		}
	}
	return maxHeight;
}

function messureText(string, options, context) {
	var ctx;

	if (context) {
		ctx = context;
	} else if (typeof document !== "undefined") {
		ctx = document.createElement("canvas").getContext("2d");
	} else {
		// If the text cannot be messured we will return 0.
		// This will make some barcode with big text render incorrectly
		return 0;
	}
	ctx.font = options.fontOptions + " " + options.fontSize + "px " + options.font;

	// Calculate the width of the encoding
	var measureTextResult = ctx.measureText(string);
	if (!measureTextResult) {
		// Some implementations don't implement measureText and return undefined.
		// If the text cannot be measured we will return 0.
		// This will make some barcode with big text render incorrectly
		return 0;
	}
	var size = measureTextResult.width;
	return size;
}

exports.getMaximumHeightOfEncodings = getMaximumHeightOfEncodings;
exports.getEncodingHeight = getEncodingHeight;
exports.getBarcodePadding = getBarcodePadding;
exports.calculateEncodingAttributes = calculateEncodingAttributes;
exports.getTotalWidthOfEncodings = getTotalWidthOfEncodings;

/***/ }),

/***/ "./node_modules/jsbarcode/bin/renderers/svg.js":
/*!*****************************************************!*\
  !*** ./node_modules/jsbarcode/bin/renderers/svg.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
	value: true
}));

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _merge = __webpack_require__(/*! ../help/merge.js */ "./node_modules/jsbarcode/bin/help/merge.js");

var _merge2 = _interopRequireDefault(_merge);

var _shared = __webpack_require__(/*! ./shared.js */ "./node_modules/jsbarcode/bin/renderers/shared.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var svgns = "http://www.w3.org/2000/svg";

var SVGRenderer = function () {
	function SVGRenderer(svg, encodings, options) {
		_classCallCheck(this, SVGRenderer);

		this.svg = svg;
		this.encodings = encodings;
		this.options = options;
		this.document = options.xmlDocument || document;
	}

	_createClass(SVGRenderer, [{
		key: "render",
		value: function render() {
			var currentX = this.options.marginLeft;

			this.prepareSVG();
			for (var i = 0; i < this.encodings.length; i++) {
				var encoding = this.encodings[i];
				var encodingOptions = (0, _merge2.default)(this.options, encoding.options);

				var group = this.createGroup(currentX, encodingOptions.marginTop, this.svg);

				this.setGroupOptions(group, encodingOptions);

				this.drawSvgBarcode(group, encodingOptions, encoding);
				this.drawSVGText(group, encodingOptions, encoding);

				currentX += encoding.width;
			}
		}
	}, {
		key: "prepareSVG",
		value: function prepareSVG() {
			// Clear the SVG
			while (this.svg.firstChild) {
				this.svg.removeChild(this.svg.firstChild);
			}

			(0, _shared.calculateEncodingAttributes)(this.encodings, this.options);
			var totalWidth = (0, _shared.getTotalWidthOfEncodings)(this.encodings);
			var maxHeight = (0, _shared.getMaximumHeightOfEncodings)(this.encodings);

			var width = totalWidth + this.options.marginLeft + this.options.marginRight;
			this.setSvgAttributes(width, maxHeight);

			if (this.options.background) {
				this.drawRect(0, 0, width, maxHeight, this.svg).setAttribute("style", "fill:" + this.options.background + ";");
			}
		}
	}, {
		key: "drawSvgBarcode",
		value: function drawSvgBarcode(parent, options, encoding) {
			var binary = encoding.data;

			// Creates the barcode out of the encoded binary
			var yFrom;
			if (options.textPosition == "top") {
				yFrom = options.fontSize + options.textMargin;
			} else {
				yFrom = 0;
			}

			var barWidth = 0;
			var x = 0;
			for (var b = 0; b < binary.length; b++) {
				x = b * options.width + encoding.barcodePadding;

				if (binary[b] === "1") {
					barWidth++;
				} else if (barWidth > 0) {
					this.drawRect(x - options.width * barWidth, yFrom, options.width * barWidth, options.height, parent);
					barWidth = 0;
				}
			}

			// Last draw is needed since the barcode ends with 1
			if (barWidth > 0) {
				this.drawRect(x - options.width * (barWidth - 1), yFrom, options.width * barWidth, options.height, parent);
			}
		}
	}, {
		key: "drawSVGText",
		value: function drawSVGText(parent, options, encoding) {
			var textElem = this.document.createElementNS(svgns, 'text');

			// Draw the text if displayValue is set
			if (options.displayValue) {
				var x, y;

				textElem.setAttribute("style", "font:" + options.fontOptions + " " + options.fontSize + "px " + options.font);

				if (options.textPosition == "top") {
					y = options.fontSize - options.textMargin;
				} else {
					y = options.height + options.textMargin + options.fontSize;
				}

				// Draw the text in the correct X depending on the textAlign option
				if (options.textAlign == "left" || encoding.barcodePadding > 0) {
					x = 0;
					textElem.setAttribute("text-anchor", "start");
				} else if (options.textAlign == "right") {
					x = encoding.width - 1;
					textElem.setAttribute("text-anchor", "end");
				}
				// In all other cases, center the text
				else {
						x = encoding.width / 2;
						textElem.setAttribute("text-anchor", "middle");
					}

				textElem.setAttribute("x", x);
				textElem.setAttribute("y", y);

				textElem.appendChild(this.document.createTextNode(encoding.text));

				parent.appendChild(textElem);
			}
		}
	}, {
		key: "setSvgAttributes",
		value: function setSvgAttributes(width, height) {
			var svg = this.svg;
			svg.setAttribute("width", width + "px");
			svg.setAttribute("height", height + "px");
			svg.setAttribute("x", "0px");
			svg.setAttribute("y", "0px");
			svg.setAttribute("viewBox", "0 0 " + width + " " + height);

			svg.setAttribute("xmlns", svgns);
			svg.setAttribute("version", "1.1");

			svg.setAttribute("style", "transform: translate(0,0)");
		}
	}, {
		key: "createGroup",
		value: function createGroup(x, y, parent) {
			var group = this.document.createElementNS(svgns, 'g');
			group.setAttribute("transform", "translate(" + x + ", " + y + ")");

			parent.appendChild(group);

			return group;
		}
	}, {
		key: "setGroupOptions",
		value: function setGroupOptions(group, options) {
			group.setAttribute("style", "fill:" + options.lineColor + ";");
		}
	}, {
		key: "drawRect",
		value: function drawRect(x, y, width, height, parent) {
			var rect = this.document.createElementNS(svgns, 'rect');

			rect.setAttribute("x", x);
			rect.setAttribute("y", y);
			rect.setAttribute("width", width);
			rect.setAttribute("height", height);

			parent.appendChild(rect);

			return rect;
		}
	}]);

	return SVGRenderer;
}();

exports["default"] = SVGRenderer;

/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-11.use[3]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-21.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/components/ModernPaymentModal.vue?vue&type=style&index=0&id=866dec86&lang=scss":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-11.use[3]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-21.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/components/ModernPaymentModal.vue?vue&type=style&index=0&id=866dec86&lang=scss ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_11_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_11_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_11_use_3_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_21_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ModernPaymentModal_vue_vue_type_style_index_0_id_866dec86_lang_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!../../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-11.use[3]!../../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-21.use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ModernPaymentModal.vue?vue&type=style&index=0&id=866dec86&lang=scss */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-11.use[3]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-21.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/components/ModernPaymentModal.vue?vue&type=style&index=0&id=866dec86&lang=scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_11_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_11_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_11_use_3_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_21_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ModernPaymentModal_vue_vue_type_style_index_0_id_866dec86_lang_scss__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_11_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_11_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_11_use_3_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_21_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ModernPaymentModal_vue_vue_type_style_index_0_id_866dec86_lang_scss__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-11.use[3]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-21.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/pos.vue?vue&type=style&index=0&id=4cc49487&scoped=true&lang=scss":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-11.use[3]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-21.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/pos.vue?vue&type=style&index=0&id=4cc49487&scoped=true&lang=scss ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_11_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_11_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_11_use_3_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_21_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_pos_vue_vue_type_style_index_0_id_4cc49487_scoped_true_lang_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!../../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-11.use[3]!../../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-21.use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./pos.vue?vue&type=style&index=0&id=4cc49487&scoped=true&lang=scss */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-11.use[3]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-21.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/pos.vue?vue&type=style&index=0&id=4cc49487&scoped=true&lang=scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_11_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_11_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_11_use_3_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_21_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_pos_vue_vue_type_style_index_0_id_4cc49487_scoped_true_lang_scss__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_11_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_11_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_11_use_3_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_21_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_pos_vue_vue_type_style_index_0_id_4cc49487_scoped_true_lang_scss__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-8.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-8.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/components/CustomFieldsForm.vue?vue&type=style&index=0&id=6b5d7f34&scoped=true&lang=css":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-8.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-8.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/components/CustomFieldsForm.vue?vue&type=style&index=0&id=6b5d7f34&scoped=true&lang=css ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

"use strict";


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

/***/ "./node_modules/vue-barcode/index.js":
/*!*******************************************!*\
  !*** ./node_modules/vue-barcode/index.js ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var JsBarcode = __webpack_require__(/*! jsbarcode */ "./node_modules/jsbarcode/bin/JsBarcode.js");

var VueBarcode = {
   render: function (createElement) {
    return createElement('div', [
      createElement(this.elementTag, {
        style: { display: this.valid ? undefined : 'none' },
        'class': ['vue-barcode-element']
      }),
      createElement('div', {
        style: { display: this.valid ? 'none' : undefined }
      }, this.$slots.default),
    ]);
  },
  props: {
    value: [String, Number],
    format: [String],
    width: [String, Number],
    height: [String, Number],
    displayValue: {
      type:  [String, Boolean],
      default: true
    },
    text: [String, Number],
    fontOptions : [String],
    font: [String],
    textAlign: [String],
    textPosition: [String],
    textMargin: [String, Number],
    fontSize: [String, Number],
    background: [String],
    lineColor: [String],
    margin: [String, Number],
    marginTop: [String, Number],
    marginBottom: [String, Number],
    marginLeft: [String, Number],
    marginRight: [String, Number],
    flat: [Boolean],
    ean128: [String, Boolean],
    elementTag: {
      type: String,
      default: 'svg',
      validator: function (value) {
          return ['canvas', 'svg', 'img'].indexOf(value) !== -1
      }
    }
  },
  mounted: function(){
    this.$watch('$props', render, { deep: true, immediate: true });
    render.call(this);
  },
  data: function(){
    return {valid: true};
  }
};

function render(){
  var that = this;

  var settings = {
    format: this.format,
    width: this.width,
    height: this.height,
    displayValue: this.displayValue,
    text: this.text,
    fontOptions: this.fontOptions,
    font: this.font,
    textAlign: this.textAlign,
    textPosition: this.textPosition,
    textMargin: this.textMargin,
    fontSize: this.fontSize,
    background: this.background,
    lineColor: this.lineColor,
    margin: this.margin,
    marginTop: this.marginTop,
    marginBottom: this.marginBottom,
    marginLeft: this.marginLeft,
    marginRight: this.marginRight,
    flat: this.flat,
    ean128: this.ean128,
    valid: function (valid) {
      that.valid = valid;
    },
    elementTag: this.elementTag
  };

  removeUndefinedProps(settings);

  JsBarcode(this.$el.querySelector('.vue-barcode-element'), String(this.value), settings);
}

function removeUndefinedProps(obj) {
  for (var prop in obj) {
    if (obj.hasOwnProperty(prop) && obj[prop] === undefined) {
      delete obj[prop];
    }
  }
}

module.exports = VueBarcode;


/***/ }),

/***/ "./node_modules/vue-easy-print/src/index.js":
/*!**************************************************!*\
  !*** ./node_modules/vue-easy-print/src/index.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   install: () => (/* binding */ install)
/* harmony export */ });
/* harmony import */ var _lib_vue_easy_print_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/vue-easy-print.vue */ "./node_modules/vue-easy-print/src/lib/vue-easy-print.vue");

function install(Vue) {
  Vue.component(_lib_vue_easy_print_vue__WEBPACK_IMPORTED_MODULE_0__["default"].name, _lib_vue_easy_print_vue__WEBPACK_IMPORTED_MODULE_0__["default"])
  /* -- Add more components here -- */
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_lib_vue_easy_print_vue__WEBPACK_IMPORTED_MODULE_0__["default"]);



/***/ }),

/***/ "./node_modules/vue-easy-print/src/lib/vue-easy-print.vue":
/*!****************************************************************!*\
  !*** ./node_modules/vue-easy-print/src/lib/vue-easy-print.vue ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _vue_easy_print_vue_vue_type_template_id_670c23a6__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./vue-easy-print.vue?vue&type=template&id=670c23a6 */ "./node_modules/vue-easy-print/src/lib/vue-easy-print.vue?vue&type=template&id=670c23a6");
/* harmony import */ var _vue_easy_print_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./vue-easy-print.vue?vue&type=script&lang=js */ "./node_modules/vue-easy-print/src/lib/vue-easy-print.vue?vue&type=script&lang=js");
/* harmony import */ var _vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _vue_easy_print_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _vue_easy_print_vue_vue_type_template_id_670c23a6__WEBPACK_IMPORTED_MODULE_0__.render,
  _vue_easy_print_vue_vue_type_template_id_670c23a6__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) // removed by dead control flow
{ var api; }
component.options.__file = "node_modules/vue-easy-print/src/lib/vue-easy-print.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./node_modules/vue-easy-print/src/lib/vue-easy-print.vue?vue&type=script&lang=js":
/*!****************************************************************************************!*\
  !*** ./node_modules/vue-easy-print/src/lib/vue-easy-print.vue?vue&type=script&lang=js ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _vue_loader_lib_index_js_vue_loader_options_vue_easy_print_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../vue-loader/lib/index.js??vue-loader-options!./vue-easy-print.vue?vue&type=script&lang=js */ "./node_modules/vue-loader/lib/index.js??vue-loader-options!./node_modules/vue-easy-print/src/lib/vue-easy-print.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_vue_loader_lib_index_js_vue_loader_options_vue_easy_print_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./node_modules/vue-easy-print/src/lib/vue-easy-print.vue?vue&type=template&id=670c23a6":
/*!**********************************************************************************************!*\
  !*** ./node_modules/vue-easy-print/src/lib/vue-easy-print.vue?vue&type=template&id=670c23a6 ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_vue_loader_lib_index_js_vue_loader_options_vue_easy_print_vue_vue_type_template_id_670c23a6__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_vue_loader_lib_index_js_vue_loader_options_vue_easy_print_vue_vue_type_template_id_670c23a6__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_vue_loader_lib_index_js_vue_loader_options_vue_easy_print_vue_vue_type_template_id_670c23a6__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../vue-loader/lib/index.js??vue-loader-options!./vue-easy-print.vue?vue&type=template&id=670c23a6 */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./node_modules/vue-easy-print/src/lib/vue-easy-print.vue?vue&type=template&id=670c23a6");


/***/ }),

/***/ "./node_modules/vue-loader/lib/index.js??vue-loader-options!./node_modules/vue-easy-print/src/lib/vue-easy-print.vue?vue&type=script&lang=js":
/*!***************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/index.js??vue-loader-options!./node_modules/vue-easy-print/src/lib/vue-easy-print.vue?vue&type=script&lang=js ***!
  \***************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
    name: "vue-easy-print",
    components: {},
    props: {
        // 针对分页表格模式：末尾空白行插入
        spaceRow: {
            type: Boolean,
            default: false
        },

        // 针对分页表格模式：传入的打印数据。
        tableData: {
            type: Object,
            default() {
                return undefined;
            }
        },
        // 是否显示表格
        tableShow: {
            type: Boolean,
            default: false
        },
        // 是否显示默认的打印按钮
        buttonShow: {
            type: Boolean,
            default: false
        },
        buttonClass: {
            type: String,
            default: "el-button el-button--default"
        },
        // 每页多少行
        onePageRow: {
            type: Number,
            default: 5
        },

        beforeCopy: Function,
        beforePrint: Function
    },
    data() {
        return {
        };
    },
    mounted() {
        this.init();
    },
    methods: {
        init() {
            let printI = document.getElementById("easyPrintIframe");
            if (!printI) {
                printI = document.createElement("iframe");
                printI.id = "easyPrintIframe";
                printI.style.position = 'fixed'
                printI.style.width = '0'
                printI.style.height = '0'
                printI.style.top = '-100px'

                // 兼容ie
                if (
                    window.location.hostname !== document.domain &&
                    navigator.userAgent.match(/msie/i)
                ) {
                    
                    printI.src =
                        'javascript:document.write("<head><script>document.domain=\\"' +
                        document.domain +
                        '\\";</s' +
                        'cript></head><body></body>")';
                   
                }
                printI.onload = () => {
                    this.getStyle();
                }
                 
                document.body.appendChild(printI);
            }else{
                this.getStyle();
            } 
        },
        print() {
            if (typeof this.beforeCopy === "function") {
                // 检测到有复制前需要执行的功能
                this.beforeCopy();
            }

            let $iframe = document.getElementById("easyPrintIframe");
            // 复制body，打印内容
            $iframe.contentDocument.body.innerHTML = this.$refs.template.innerHTML;

            if (typeof this.beforePrint === "function") {
                // 检测到有打印前需要执行的功能
                // 比如有些二维码组件无法直接复制dom完成。
                this.beforePrint();
            }
            
            // 执行打印
            this.$nextTick(() => { 
                setTimeout(() => {
                    $iframe.contentWindow.print();
                }, 100);
             })
        },
        getStyle() {
            let printI = document.getElementById("easyPrintIframe");
            var str = "",
                styles1 = document.querySelectorAll("style");
            for (var i = 0; i < styles1.length; i++) {
                str += styles1[i].outerHTML;
            }

            printI.contentDocument.head.innerHTML = str;
            // 添加link引入
            let styles = document.querySelectorAll("link");
            for (let i = 0; i < styles.length; i++) {
                // chrome 正常，firefox不正常，能执行到，但是添加没结果
                let link = document.createElement("link");
                link.setAttribute("rel", "stylesheet");
                if(styles[i].type) link.setAttribute("type", styles[i].type);
                else link.setAttribute("type", 'text/css');
                link.setAttribute("href", styles[i].href);
                link.setAttribute('media','all');
                printI.contentDocument.head.appendChild(link);
            }
            
        },
        getChineseNumber(currencyDigits) {
            // 转换数字到中文大写，请用prop传递给模版组件，这个函数在网上扣的。
            var MAXIMUM_NUMBER = 99999999999.99;
            // Predefine the radix characters and currency symbols for output:
            var CN_ZERO = "零";
            var CN_ONE = "壹";
            var CN_TWO = "贰";
            var CN_THREE = "叁";
            var CN_FOUR = "肆";
            var CN_FIVE = "伍";
            var CN_SIX = "陆";
            var CN_SEVEN = "柒";
            var CN_EIGHT = "捌";
            var CN_NINE = "玖";
            var CN_TEN = "拾";
            var CN_HUNDRED = "佰";
            var CN_THOUSAND = "仟";
            var CN_TEN_THOUSAND = "万";
            var CN_HUNDRED_MILLION = "亿";
            var CN_SYMBOL = ""; // 可以设置前缀 比如 人民币
            var CN_DOLLAR = "元";
            var CN_TEN_CENT = "角";
            var CN_CENT = "分";
            var CN_INTEGER = "整";

            // Variables:
            var integral; // Represent integral part of digit number.
            var decimal; // Represent decimal part of digit number.
            var outputCharacters; // The output result.
            var parts;
            var digits, radices, bigRadices, decimals;
            var zeroCount;
            var i, p, d;
            var quotient, modulus;

            // Validate input string:
            if (currencyDigits === undefined) {
                return "";
            }
            currencyDigits = currencyDigits.toString();
            if (currencyDigits == "") {
                // alert("Empty input!");
                return "";
            }
            if (currencyDigits.match(/[^,.\d]/) != null) {
                // alert("Invalid characters in the input string!");
                return "";
            }
            if (
                currencyDigits.match(
                    /^((\d{1,3}(,\d{3})*(.((\d{3},)*\d{1,3}))?)|(\d+(.\d+)?))$/
                ) == null
            ) {
                // alert("Illegal format of digit number!");
                return "";
            }

            // Normalize the format of input digits:
            currencyDigits = currencyDigits.replace(/,/g, ""); // Remove comma delimiters.
            currencyDigits = currencyDigits.replace(/^0+/, ""); // Trim zeros at the beginning.
            // Assert the number is not greater than the maximum number.
            if (Number(currencyDigits) > MAXIMUM_NUMBER) {
                alert("您输入的金额太大，请重新输入!");
                return "";
            }

            // Process the coversion from currency digits to characters:
            // Separate integral and decimal parts before processing coversion:
            parts = currencyDigits.split(".");
            if (parts.length > 1) {
                integral = parts[0];
                decimal = parts[1];
                // Cut down redundant decimal digits that are after the second.
                decimal = decimal.substr(0, 2);
            } else {
                integral = parts[0];
                decimal = "";
            }
            // Prepare the characters corresponding to the digits:
            digits = new Array(
                CN_ZERO,
                CN_ONE,
                CN_TWO,
                CN_THREE,
                CN_FOUR,
                CN_FIVE,
                CN_SIX,
                CN_SEVEN,
                CN_EIGHT,
                CN_NINE
            );
            radices = new Array("", CN_TEN, CN_HUNDRED, CN_THOUSAND);
            bigRadices = new Array("", CN_TEN_THOUSAND, CN_HUNDRED_MILLION);
            decimals = new Array(CN_TEN_CENT, CN_CENT);
            // Start processing:
            outputCharacters = "";
            // Process integral part if it is larger than 0:
            if (Number(integral) > 0) {
                zeroCount = 0;
                for (i = 0; i < integral.length; i++) {
                    p = integral.length - i - 1;
                    d = integral.substr(i, 1);
                    quotient = p / 4;
                    modulus = p % 4;
                    if (d == "0") {
                        zeroCount++;
                    } else {
                        if (zeroCount > 0) {
                            outputCharacters += digits[0];
                        }
                        zeroCount = 0;
                        outputCharacters +=
                            digits[Number(d)] + radices[modulus];
                    }
                    if (modulus == 0 && zeroCount < 4) {
                        outputCharacters += bigRadices[quotient];
                    }
                }
                outputCharacters += CN_DOLLAR;
            }
            // Process decimal part if there is:
            if (decimal != "") {
                for (i = 0; i < decimal.length; i++) {
                    d = decimal.substr(i, 1);
                    if (d != "0") {
                        outputCharacters += digits[Number(d)] + decimals[i];
                    }
                }
            }
            // Confirm and return the final output string:
            if (outputCharacters == "") {
                outputCharacters = CN_ZERO + CN_DOLLAR;
            }
            if (decimal == "") {
                outputCharacters += CN_INTEGER;
            }
            outputCharacters = CN_SYMBOL + outputCharacters;
            return outputCharacters;
        }
    }
});


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./node_modules/vue-easy-print/src/lib/vue-easy-print.vue?vue&type=template&id=670c23a6":
/*!**************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./node_modules/vue-easy-print/src/lib/vue-easy-print.vue?vue&type=template&id=670c23a6 ***!
  \**************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render),
/* harmony export */   staticRenderFns: () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c
  return _c("div", [
    _c(
      "div",
      {
        directives: [
          {
            name: "show",
            rawName: "v-show",
            value: _vm.tableShow,
            expression: "tableShow",
          },
        ],
        ref: "template",
      },
      [
        _vm._t(
          "default",
          function () {
            return [
              _c("span", [
                _vm._v(
                  "编写你自己的打印区域组件，然后slot插入到vue-easy-print"
                ),
              ]),
            ]
          },
          { getChineseNumber: _vm.getChineseNumber }
        ),
      ],
      2
    ),
    _vm._v(" "),
    _vm.buttonShow
      ? _c(
          "button",
          {
            class: _vm.buttonClass,
            attrs: { type: "button" },
            on: { click: _vm.print },
          },
          [_c("span", [_vm._v("开始打印")])]
        )
      : _vm._e(),
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/src/components/CustomFieldsForm.vue":
/*!*******************************************************!*\
  !*** ./resources/src/components/CustomFieldsForm.vue ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

"use strict";
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

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_8_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_8_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CustomFieldsForm_vue_vue_type_style_index_0_id_6b5d7f34_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader/dist/cjs.js!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-8.use[1]!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-8.use[2]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./CustomFieldsForm.vue?vue&type=style&index=0&id=6b5d7f34&scoped=true&lang=css */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-8.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-8.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/components/CustomFieldsForm.vue?vue&type=style&index=0&id=6b5d7f34&scoped=true&lang=css");


/***/ }),

/***/ "./resources/src/components/CustomFieldsForm.vue?vue&type=template&id=6b5d7f34&scoped=true":
/*!*************************************************************************************************!*\
  !*** ./resources/src/components/CustomFieldsForm.vue?vue&type=template&id=6b5d7f34&scoped=true ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CustomFieldsForm_vue_vue_type_template_id_6b5d7f34_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CustomFieldsForm_vue_vue_type_template_id_6b5d7f34_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CustomFieldsForm_vue_vue_type_template_id_6b5d7f34_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./CustomFieldsForm.vue?vue&type=template&id=6b5d7f34&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/components/CustomFieldsForm.vue?vue&type=template&id=6b5d7f34&scoped=true");


/***/ }),

/***/ "./resources/src/utils/index.js":
/*!**************************************!*\
  !*** ./resources/src/utils/index.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   formatDisplayDate: () => (/* binding */ formatDisplayDate),
/* harmony export */   getDateFormat: () => (/* binding */ getDateFormat)
/* harmony export */ });
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
// ---------- Fullscreen helper ----------
var toggleFullScreen = function toggleFullScreen() {
  if (typeof window === 'undefined') return;
  var doc = window.document;
  var docEl = doc.documentElement;
  var requestFullScreen = docEl.requestFullscreen || docEl.mozRequestFullScreen || docEl.webkitRequestFullScreen || docEl.msRequestFullscreen;
  var cancelFullScreen = doc.exitFullscreen || doc.mozCancelFullScreen || doc.webkitExitFullscreen || doc.msExitFullscreen;
  if (!requestFullScreen || !cancelFullScreen) return;
  if (!doc.fullscreenElement && !doc.mozFullScreenElement && !doc.webkitFullscreenElement && !doc.msFullscreenElement) {
    requestFullScreen.call(docEl);
  } else {
    cancelFullScreen.call(doc);
  }
};

// ---------- Offline POS helpers (localStorage-based) ----------
var hasWindow = typeof window !== 'undefined';
var getStorage = function getStorage() {
  if (!hasWindow) return null;
  try {
    if (window.localStorage) {
      return window.localStorage;
    }
  } catch (e) {
    // Access to localStorage can throw in some environments; fail gracefully
  }
  return null;
};
var readJSON = function readJSON(key, fallback) {
  var storage = getStorage();
  if (!storage) return fallback;
  try {
    var raw = storage.getItem(key);
    if (!raw) return fallback;
    return JSON.parse(raw);
  } catch (e) {
    return fallback;
  }
};
var writeJSON = function writeJSON(key, value) {
  var storage = getStorage();
  if (!storage) return;
  try {
    if (value === undefined || value === null) {
      storage.removeItem(key);
    } else {
      storage.setItem(key, JSON.stringify(value));
    }
  } catch (e) {
    // Ignore quota and other errors – offline is best-effort
  }
};
var POS_BOOTSTRAP_KEY = 'pos_bootstrap_v1';
var POS_WAREHOUSE_SNAPSHOTS_KEY = 'pos_warehouse_snapshots_v1';
var POS_OFFLINE_SALES_KEY = 'pos_offline_sales_v1';
var POS_PRODUCT_DETAILS_KEY = 'pos_product_details_v1';
var makeDetailKey = function makeDetailKey(warehouseId, productId, variantId) {
  var w = warehouseId != null ? String(warehouseId) : '0';
  var p = productId != null ? String(productId) : '0';
  var v = variantId != null && variantId !== 'null' ? String(variantId) : 'null';
  return "w:".concat(w, ":p:").concat(p, ":v:").concat(v);
};
var generateId = function generateId() {
  try {
    return Date.now().toString(36) + '-' + Math.random().toString(36).substr(2, 6);
  } catch (e) {
    return String(Date.now());
  }
};
var offlinePos = {
  // ---- Bootstrap (clients, warehouses, settings, etc.) ----
  cacheBootstrap: function cacheBootstrap(data) {
    if (!data || _typeof(data) !== 'object') return;
    writeJSON(POS_BOOTSTRAP_KEY, {
      clients: data.clients || [],
      accounts: data.accounts || [],
      warehouses: data.warehouses || [],
      categories: data.categories || [],
      brands: data.brands || [],
      payment_methods: data.payment_methods || [],
      defaultWarehouse: data.defaultWarehouse || '',
      defaultClient: data.defaultClient || '',
      default_client_name: data.default_client_name || '',
      default_client_eligible: data.default_client_eligible,
      default_client_points: data.default_client_points,
      point_to_amount_rate: data.point_to_amount_rate,
      default_tax: data.default_tax,
      products_per_page: data.products_per_page,
      languages_available: data.languages_available || [],
      stripe_key: data.stripe_key || ''
    });
  },
  getCachedBootstrap: function getCachedBootstrap() {
    return readJSON(POS_BOOTSTRAP_KEY, null);
  },
  // ---- Per-warehouse products snapshots (grid + scan data) ----
  cacheWarehouseSnapshot: function cacheWarehouseSnapshot(warehouseId, snapshot) {
    if (!warehouseId) return;
    var key = String(warehouseId);
    var existing = readJSON(POS_WAREHOUSE_SNAPSHOTS_KEY, {});
    var prev = existing[key] || {};
    existing[key] = Object.assign({}, prev, snapshot || {}, {
      updatedAt: new Date().toISOString()
    });
    writeJSON(POS_WAREHOUSE_SNAPSHOTS_KEY, existing);
  },
  getWarehouseSnapshot: function getWarehouseSnapshot(warehouseId) {
    if (!warehouseId) return null;
    var key = String(warehouseId);
    var all = readJSON(POS_WAREHOUSE_SNAPSHOTS_KEY, {});
    return all[key] || null;
  },
  // ---- Product detail cache (show_product_data) ----
  cacheProductDetail: function cacheProductDetail(warehouseId, productId, variantId, detail) {
    if (!detail || _typeof(detail) !== 'object') return;
    var key = makeDetailKey(warehouseId, productId, variantId);
    var current = readJSON(POS_PRODUCT_DETAILS_KEY, {});
    current[key] = Object.assign({}, detail, {
      _cachedAt: new Date().toISOString()
    });
    writeJSON(POS_PRODUCT_DETAILS_KEY, current);
  },
  getProductDetail: function getProductDetail(warehouseId, productId, variantId) {
    var key = makeDetailKey(warehouseId, productId, variantId);
    var current = readJSON(POS_PRODUCT_DETAILS_KEY, {});
    return current[key] || null;
  },
  // ---- Offline sales queue ----
  getOfflineSales: function getOfflineSales() {
    var list = readJSON(POS_OFFLINE_SALES_KEY, []);
    if (!Array.isArray(list)) return [];
    return list;
  },
  addOfflineSale: function addOfflineSale(payload) {
    var list = this.getOfflineSales();
    var now = new Date().toISOString();
    var safePayload = payload || {};
    // Normalize details to ensure sale_unit_id is always present on each line
    try {
      if (Array.isArray(safePayload.details)) {
        var normalizedDetails = safePayload.details.map(function (d) {
          return _objectSpread(_objectSpread({}, d), {}, {
            sale_unit_id: d && d.sale_unit_id !== undefined && d.sale_unit_id !== null && d.sale_unit_id !== '' ? d.sale_unit_id : d && d.sale_unit_id
          });
        });
        safePayload = _objectSpread(_objectSpread({}, safePayload), {}, {
          details: normalizedDetails
        });
      }
    } catch (e) {}
    var record = {
      id: generateId(),
      // status lifecycle:
      // 'pending'  -> waiting to be synced
      // 'syncing'  -> a sync worker is currently sending this sale
      // 'synced'   -> successfully created on the server
      // 'failed'   -> last sync attempt failed (can be retried)
      createdAt: now,
      updatedAt: now,
      status: 'pending',
      lastError: null,
      payload: safePayload
    };
    list.push(record);
    writeJSON(POS_OFFLINE_SALES_KEY, list);
    return record;
  },
  _updateSale: function _updateSale(id, updater) {
    if (!id) return;
    var list = this.getOfflineSales();
    var changed = false;
    var next = list.map(function (s) {
      if (!s || s.id !== id) return s;
      var updated = typeof updater === 'function' ? updater(Object.assign({}, s)) : s;
      changed = true;
      return Object.assign({}, s, updated, {
        updatedAt: new Date().toISOString()
      });
    });
    if (changed) {
      writeJSON(POS_OFFLINE_SALES_KEY, next);
    }
  },
  // Mark a sale as "in progress" so multiple sync workers (tabs/components)
  // do not submit the same offline record concurrently.
  markSaleAsSyncing: function markSaleAsSyncing(id) {
    this._updateSale(id, function (s) {
      return {
        status: 'syncing',
        lastError: null
      };
    });
  },
  markSaleAsSynced: function markSaleAsSynced(id, remoteId) {
    this._updateSale(id, function (s) {
      return {
        status: 'synced',
        remoteId: remoteId != null ? remoteId : s.remoteId || null,
        lastError: null
      };
    });
  },
  markSaleAsFailed: function markSaleAsFailed(id, message, statusCode) {
    this._updateSale(id, function () {
      return {
        status: 'failed',
        lastError: {
          message: message || 'Unknown error',
          statusCode: statusCode || null
        }
      };
    });
  },
  pruneSyncedSales: function pruneSyncedSales() {
    var list = this.getOfflineSales();
    var next = list.filter(function (s) {
      return !s || s.status !== 'synced';
    });
    writeJSON(POS_OFFLINE_SALES_KEY, next);
  },
  // ---- Clear cache (for page reload) ----
  // Clears POS cache data (products, warehouse snapshots, bootstrap) to avoid stale/outdated data
  // This should be called when online so fresh data can be fetched and cache rebuilt
  // Note: We do NOT clear POS_OFFLINE_SALES_KEY (offline sales queue) as it needs to persist for sync
  // Note: We do NOT clear IndexedDB shadow stock as it's managed separately for offline functionality
  clearCache: function clearCache() {
    try {
      var storage = getStorage();
      if (storage) {
        // Clear bootstrap cache (clients, warehouses, settings, etc.)
        storage.removeItem(POS_BOOTSTRAP_KEY);
        // Clear warehouse snapshots (cached product lists per warehouse)
        storage.removeItem(POS_WAREHOUSE_SNAPSHOTS_KEY);
        // Clear product detail cache (individual product details)
        storage.removeItem(POS_PRODUCT_DETAILS_KEY);
        // Clear receipt company setting cache
        storage.removeItem('pos_receipt_company_setting');
      }
    } catch (e) {
      // Ignore errors during cache clearing
    }
  }
};

// ---------- IndexedDB-based shadow stock for offline sales ----------
var hasIndexedDB = hasWindow && !!window.indexedDB;
var SHADOW_DB_NAME = 'pos_shadow_stock_v1';
var SHADOW_DB_VERSION = 1;
var SHADOW_STOCK_STORE = 'shadow_stock';
var SHADOW_DEDUCTIONS_STORE = 'shadow_deductions';
var openShadowDb = function openShadowDb() {
  if (!hasIndexedDB) return Promise.resolve(null);
  return new Promise(function (resolve, reject) {
    try {
      var request = window.indexedDB.open(SHADOW_DB_NAME, SHADOW_DB_VERSION);
      request.onerror = function () {
        return reject(request.error || new Error('IndexedDB open failed'));
      };
      request.onsuccess = function () {
        return resolve(request.result || null);
      };
      request.onupgradeneeded = function (event) {
        var db = event.target.result;
        try {
          if (!db.objectStoreNames.contains(SHADOW_STOCK_STORE)) {
            db.createObjectStore(SHADOW_STOCK_STORE, {
              keyPath: 'key'
            });
          }
          if (!db.objectStoreNames.contains(SHADOW_DEDUCTIONS_STORE)) {
            db.createObjectStore(SHADOW_DEDUCTIONS_STORE, {
              keyPath: 'saleId'
            });
          }
        } catch (e) {
          // ignore upgrade errors; db may be partially usable
        }
      };
    } catch (e) {
      reject(e);
    }
  });
};
var shadowStock = {
  /**
   * Record per-line quantity deductions for an offline sale in IndexedDB.
   * - warehouseId: current warehouse
   * - saleId: offline queue id (string) – used to rollback later
   * - details: array of POS detail lines (must include product_id, product_variant_id, quantity, product_type)
   */
  recordDeductions: function recordDeductions(warehouseId, saleId, details) {
    return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee() {
      var db, tx, stockStore, dedStore, items, now, dedRecord;
      return _regenerator().w(function (_context) {
        while (1) switch (_context.n) {
          case 0:
            if (!(!hasIndexedDB || !warehouseId || !saleId || !Array.isArray(details) || !details.length)) {
              _context.n = 1;
              break;
            }
            return _context.a(2);
          case 1:
            _context.n = 2;
            return openShadowDb();
          case 2:
            db = _context.v;
            if (db) {
              _context.n = 3;
              break;
            }
            return _context.a(2);
          case 3:
            try {
              tx = db.transaction([SHADOW_STOCK_STORE, SHADOW_DEDUCTIONS_STORE], 'readwrite');
              stockStore = tx.objectStore(SHADOW_STOCK_STORE);
              dedStore = tx.objectStore(SHADOW_DEDUCTIONS_STORE);
              items = [];
              now = new Date().toISOString();
              details.forEach(function (d) {
                if (!d || d.product_type === 'is_service') return;
                var productId = d.product_id || d.id;
                if (!productId) return;
                var variantId = d.product_variant_id != null ? d.product_variant_id : null;
                var qty = Number(d.quantity || 0);
                if (!qty || qty <= 0) return;
                var key = makeDetailKey(warehouseId, productId, variantId);
                items.push({
                  key: key,
                  warehouse_id: warehouseId,
                  product_id: productId,
                  product_variant_id: variantId,
                  quantity: qty
                });
                var getReq = stockStore.get(key);
                getReq.onsuccess = function (ev) {
                  try {
                    var existing = ev.target.result || {
                      key: key,
                      warehouse_id: warehouseId,
                      product_id: productId,
                      product_variant_id: variantId,
                      sold: 0
                    };
                    existing.sold = Number(existing.sold || 0) + qty;
                    existing.updatedAt = now;
                    stockStore.put(existing);
                  } catch (e) {
                    // ignore per-row errors
                  }
                };
              });

              // Store mapping saleId -> affected items so we can rollback precisely
              dedRecord = {
                saleId: saleId,
                warehouse_id: warehouseId,
                items: items,
                createdAt: now
              };
              try {
                dedStore.put(dedRecord);
              } catch (e) {
                // ignore mapping errors
              }
            } catch (e) {
              // fail silently; shadow stock is best-effort
            }
          case 4:
            return _context.a(2);
        }
      }, _callee);
    }))();
  },
  /**
   * Rollback previously recorded deductions for an offline sale.
   * Called when sync to backend fails permanently (non-network error).
   */
  revertDeductions: function revertDeductions(saleId) {
    return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2() {
      var db, tx, stockStore, dedStore, getReq;
      return _regenerator().w(function (_context2) {
        while (1) switch (_context2.n) {
          case 0:
            if (!(!hasIndexedDB || !saleId)) {
              _context2.n = 1;
              break;
            }
            return _context2.a(2);
          case 1:
            _context2.n = 2;
            return openShadowDb();
          case 2:
            db = _context2.v;
            if (db) {
              _context2.n = 3;
              break;
            }
            return _context2.a(2);
          case 3:
            try {
              tx = db.transaction([SHADOW_STOCK_STORE, SHADOW_DEDUCTIONS_STORE], 'readwrite');
              stockStore = tx.objectStore(SHADOW_STOCK_STORE);
              dedStore = tx.objectStore(SHADOW_DEDUCTIONS_STORE);
              getReq = dedStore.get(saleId);
              getReq.onsuccess = function (ev) {
                try {
                  var rec = ev.target.result;
                  if (!rec || !Array.isArray(rec.items) || !rec.items.length) {
                    try {
                      dedStore["delete"](saleId);
                    } catch (e2) {}
                    return;
                  }
                  var now = new Date().toISOString();
                  rec.items.forEach(function (item) {
                    if (!item || !item.key) return;
                    var qty = Number(item.quantity || 0);
                    if (!qty || qty <= 0) return;
                    var sReq = stockStore.get(item.key);
                    sReq.onsuccess = function (sev) {
                      try {
                        var row = sev.target.result;
                        if (!row) return;
                        var currentSold = Number(row.sold || 0) - qty;
                        if (currentSold <= 0) {
                          stockStore["delete"](item.key);
                        } else {
                          row.sold = currentSold;
                          row.updatedAt = now;
                          stockStore.put(row);
                        }
                      } catch (e3) {}
                    };
                  });
                  try {
                    dedStore["delete"](saleId);
                  } catch (e4) {}
                } catch (e) {
                  // ignore rollback errors
                }
              };
            } catch (e) {
              // ignore db errors
            }
          case 4:
            return _context2.a(2);
        }
      }, _callee2);
    }))();
  },
  /**
   * Apply current shadow stock (unsynced offline sales) to a given products list.
   * For each non-service item in the list, qte_sale is reduced by the recorded 'sold' amount (never below 0).
   */
  applyToList: function applyToList(warehouseId, list) {
    return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee3() {
      var db, tx, stockStore, request;
      return _regenerator().w(function (_context3) {
        while (1) switch (_context3.n) {
          case 0:
            if (!(!hasIndexedDB || !warehouseId || !Array.isArray(list) || !list.length)) {
              _context3.n = 1;
              break;
            }
            return _context3.a(2);
          case 1:
            _context3.n = 2;
            return openShadowDb();
          case 2:
            db = _context3.v;
            if (db) {
              _context3.n = 3;
              break;
            }
            return _context3.a(2);
          case 3:
            try {
              tx = db.transaction([SHADOW_STOCK_STORE], 'readonly');
              stockStore = tx.objectStore(SHADOW_STOCK_STORE);
              request = stockStore.openCursor();
              request.onsuccess = function (event) {
                var cursor = event.target.result;
                if (!cursor) return;
                try {
                  var row = cursor.value;
                  if (row && String(row.warehouse_id) === String(warehouseId)) {
                    var sold = Number(row.sold || 0);
                    if (sold > 0) {
                      var pid = row.product_id;
                      var vid = row.product_variant_id != null ? row.product_variant_id : null;
                      for (var i = 0; i < list.length; i++) {
                        var item = list[i];
                        if (!item || item.product_type === 'is_service') continue;
                        var itemPid = item.product_id || item.id;
                        var itemVid = item.product_variant_id != null ? item.product_variant_id : null;
                        if (String(itemPid) === String(pid) && String(itemVid) === String(vid)) {
                          var cur = Number(item.qte_sale || 0);
                          var next = cur - sold;
                          item.qte_sale = next > 0 ? next : 0;
                        }
                      }
                    }
                  }
                } catch (e) {
                  // ignore per-row failures
                }
                cursor["continue"]();
              };
            } catch (e) {
              // ignore
            }
          case 4:
            return _context3.a(2);
        }
      }, _callee3);
    }))();
  },
  /**
   * Return the available quantity for a single product/variant in sale units,
   * given the base qte_sale reported by the server/cache.
   */
  getAvailableQuantity: function getAvailableQuantity(warehouseId, productId, variantId, baseQteSale) {
    return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee4() {
      var base, db, tx, stockStore, key, _t;
      return _regenerator().w(function (_context4) {
        while (1) switch (_context4.p = _context4.n) {
          case 0:
            base = Number(baseQteSale || 0);
            if (!(!hasIndexedDB || !warehouseId || !productId || base <= 0)) {
              _context4.n = 1;
              break;
            }
            return _context4.a(2, base);
          case 1:
            _context4.n = 2;
            return openShadowDb();
          case 2:
            db = _context4.v;
            if (db) {
              _context4.n = 3;
              break;
            }
            return _context4.a(2, base);
          case 3:
            _context4.p = 3;
            tx = db.transaction([SHADOW_STOCK_STORE], 'readonly');
            stockStore = tx.objectStore(SHADOW_STOCK_STORE);
            key = makeDetailKey(warehouseId, productId, variantId);
            _context4.n = 4;
            return new Promise(function (resolve) {
              var req = stockStore.get(key);
              req.onsuccess = function (ev) {
                try {
                  var row = ev.target.result;
                  var sold = row ? Number(row.sold || 0) : 0;
                  var next = base - sold;
                  resolve(next > 0 ? next : 0);
                } catch (e) {
                  resolve(base);
                }
              };
              req.onerror = function () {
                return resolve(base);
              };
            });
          case 4:
            return _context4.a(2, _context4.v);
          case 5:
            _context4.p = 5;
            _t = _context4.v;
            return _context4.a(2, base);
        }
      }, _callee4, null, [[3, 5]]);
    }))();
  },
  /**
   * Clear all shadow stock and deduction records.
   * Used when there are no pending offline sales, so local adjustments
   * must not affect displayed stock anymore.
   */
  clearAll: function clearAll() {
    return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee5() {
      var db, tx;
      return _regenerator().w(function (_context5) {
        while (1) switch (_context5.n) {
          case 0:
            if (hasIndexedDB) {
              _context5.n = 1;
              break;
            }
            return _context5.a(2);
          case 1:
            _context5.n = 2;
            return openShadowDb();
          case 2:
            db = _context5.v;
            if (db) {
              _context5.n = 3;
              break;
            }
            return _context5.a(2);
          case 3:
            try {
              tx = db.transaction([SHADOW_STOCK_STORE, SHADOW_DEDUCTIONS_STORE], 'readwrite');
              try {
                tx.objectStore(SHADOW_STOCK_STORE).clear();
              } catch (e) {}
              try {
                tx.objectStore(SHADOW_DEDUCTIONS_STORE).clear();
              } catch (e) {}
            } catch (e) {
              // ignore
            }
          case 4:
            return _context5.a(2);
        }
      }, _callee5);
    }))();
  }
};

// ---------- Date Formatting Utility ----------

/**
 * Safely format a date (and optional time) for display without timezone shifts.
 * Supports:
 * - YYYY-MM-DD
 * - YYYY-MM-DD HH:mm[:ss]
 * - YYYY-MM-DDTHH:mm[:ss]Z
 * - DD/MM/YYYY
 * - DD-MM-YYYY
 */
var formatDisplayDate = function formatDisplayDate(input) {
  var format = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'YYYY-MM-DD';
  if (!input) return '';
  var pad = function pad(n) {
    return String(n).padStart(2, '0');
  };
  var original = input;
  var dateStr = '';
  var timeStr = '';
  try {
    // If it's a real Date object, format using local components (safe)
    if (input instanceof Date) {
      var y = String(input.getFullYear());
      var m = pad(input.getMonth() + 1);
      var d = pad(input.getDate());
      var hh = pad(input.getHours());
      var mm = pad(input.getMinutes());
      var ss = pad(input.getSeconds());
      var _formattedDate = formatDateParts(y, m, d, format);
      var hasTime = hh !== '00' || mm !== '00' || ss !== '00';
      return hasTime ? "".concat(_formattedDate, " ").concat(hh, ":").concat(mm) : _formattedDate;
    }
    var str = String(input).trim();
    original = str;

    // Split date/time without parsing timezone
    if (str.includes('T')) {
      var _str$split = str.split('T'),
        _str$split2 = _slicedToArray(_str$split, 2),
        dPart = _str$split2[0],
        _str$split2$ = _str$split2[1],
        tPartRaw = _str$split2$ === void 0 ? '' : _str$split2$;
      dateStr = dPart;
      timeStr = tPartRaw.replace(/Z$/i, '').split('.')[0]; // remove Z and ms
    } else if (str.includes(' ')) {
      var _str$split3 = str.split(' '),
        _str$split4 = _slicedToArray(_str$split3, 2),
        _dPart = _str$split4[0],
        _str$split4$ = _str$split4[1],
        tPart = _str$split4$ === void 0 ? '' : _str$split4$;
      dateStr = _dPart;
      timeStr = tPart;
    } else {
      dateStr = str;
      timeStr = '';
    }

    // Parse date part safely (NO browser Date parsing)
    var parsed = parseDateOnlySafely(dateStr);
    if (!parsed) return original;
    var year = parsed.year,
      month = parsed.month,
      day = parsed.day;
    var formattedDate = formatDateParts(year, month, day, format);

    // Keep HH:mm only
    if (timeStr) {
      var _timeStr$split = timeStr.split(':'),
        _timeStr$split2 = _slicedToArray(_timeStr$split, 2),
        _timeStr$split2$ = _timeStr$split2[0],
        _hh = _timeStr$split2$ === void 0 ? '00' : _timeStr$split2$,
        _timeStr$split2$2 = _timeStr$split2[1],
        _mm = _timeStr$split2$2 === void 0 ? '00' : _timeStr$split2$2;
      return "".concat(formattedDate, " ").concat(pad(_hh), ":").concat(pad(_mm));
    }
    return formattedDate;
  } catch (e) {
    return String(original !== null && original !== void 0 ? original : input);
  }
  function formatDateParts(year, month, day, fmt) {
    switch (fmt) {
      case 'DD/MM/YYYY':
        return "".concat(day, "/").concat(month, "/").concat(year);
      case 'MM/DD/YYYY':
        return "".concat(month, "/").concat(day, "/").concat(year);
      case 'YYYY-MM-DD':
      default:
        return "".concat(year, "-").concat(month, "-").concat(day);
    }
  }

  /**
   * Parse date part only, safely, without timezone shifts.
   * IMPORTANT: no "new Date(ds)" fallback here.
   */
  function parseDateOnlySafely(ds) {
    if (!ds) return null;

    // YYYY-MM-DD
    var m = ds.match(/^(\d{4})-(\d{2})-(\d{2})$/);
    if (m) return {
      year: m[1],
      month: m[2],
      day: m[3]
    };

    // DD/MM/YYYY
    m = ds.match(/^(\d{2})\/(\d{2})\/(\d{4})$/);
    if (m) return {
      year: m[3],
      month: m[2],
      day: m[1]
    };

    // DD-MM-YYYY
    m = ds.match(/^(\d{2})-(\d{2})-(\d{4})$/);
    if (m) return {
      year: m[3],
      month: m[2],
      day: m[1]
    };

    // If we can't parse, return null (better than wrong date)
    return null;
  }
};

/**
 * Get the date format from database (Vuex getter) or localStorage cache
 * @param {Object|null} store
 * @returns {'DD/MM/YYYY'|'MM/DD/YYYY'|'YYYY-MM-DD'}
 */
var getDateFormat = function getDateFormat() {
  var store = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
  var allowed = ['DD/MM/YYYY', 'MM/DD/YYYY', 'YYYY-MM-DD'];
  try {
    var _store$getters;
    // 1) Vuex store getter
    if (store !== null && store !== void 0 && (_store$getters = store.getters) !== null && _store$getters !== void 0 && _store$getters.getDateFormat) {
      var fmt = store.getters.getDateFormat;
      if (allowed.includes(fmt)) return fmt;
    }

    // 2) localStorage fallback
    var stored = localStorage.getItem('app_date_format');
    if (allowed.includes(stored)) return stored;
  } catch (e) {
    // ignore
  }
  return 'YYYY-MM-DD';
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  toggleFullScreen: toggleFullScreen,
  offlinePos: offlinePos,
  shadowStock: shadowStock,
  formatDisplayDate: formatDisplayDate,
  getDateFormat: getDateFormat
});

/***/ }),

/***/ "./resources/src/utils/priceFormat.js":
/*!********************************************!*\
  !*** ./resources/src/utils/priceFormat.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PRICE_FORMATS: () => (/* binding */ PRICE_FORMATS),
/* harmony export */   cachePriceFormat: () => (/* binding */ cachePriceFormat),
/* harmony export */   formatPriceDisplay: () => (/* binding */ formatPriceDisplay),
/* harmony export */   getPriceFormatSetting: () => (/* binding */ getPriceFormatSetting),
/* harmony export */   normalizePriceFormatKey: () => (/* binding */ normalizePriceFormatKey)
/* harmony export */ });
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
// Price formatting helper for frontend display (e.g., POS)
// This helper is purely presentational and does NOT affect calculations or stored values.

// Internal map of supported formats:
// - 'comma_dot'   => 1,234.56 (thousand ',', decimal '.')
// - 'dot_comma'   => 1.234,56 (thousand '.', decimal ',')
// - 'space_comma' => 1 234,56 (thousand ' ', decimal ',')
var PRICE_FORMATS = {
  comma_dot: {
    thousands: ',',
    decimal: '.'
  },
  dot_comma: {
    thousands: '.',
    decimal: ','
  },
  space_comma: {
    thousands: ' ',
    decimal: ','
  }
};

// Normalize a stored value/label into one of our internal keys
function normalizePriceFormatKey(input) {
  if (!input) return null;
  var raw = String(input).trim();

  // Direct key
  if (PRICE_FORMATS[raw]) {
    return raw;
  }

  // Allow matching by exact label text (for safety if something stored the label)
  var labelMap = {
    "1,234.56 (thousand , decimal .)": "comma_dot",
    "1.234,56 (thousand . decimal ,)": "dot_comma",
    "1 234,56 (thousand space, decimal ,)": "space_comma"
  };
  if (labelMap[raw]) {
    return labelMap[raw];
  }
  return null;
}

// Format a numeric value according to the selected price format.
// - value: number or numeric-like
// - decimals: integer number of decimal places
// - formatKey: one of PRICE_FORMATS keys or label text; if falsy/unknown, falls back to legacy formatting
function formatPriceDisplay(value) {
  var decimals = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 2;
  var formatKey = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
  var d = Number.isInteger(decimals) ? decimals : 0;
  var n = Number(value);
  var safe = Number.isFinite(n) ? n : 0;
  var key = normalizePriceFormatKey(formatKey);

  // Fallback: keep current/default behavior (en-US locale style)
  if (!key) {
    try {
      return safe.toLocaleString('en-US', {
        minimumFractionDigits: d,
        maximumFractionDigits: d
      });
    } catch (e) {
      var _fixed = safe.toFixed(d);
      var parts = _fixed.split('.');
      var _intPart = parts[0];
      var _fracPart = parts[1] || '';
      var withCommas = _intPart.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
      return d > 0 ? "".concat(withCommas, ".").concat(_fracPart) : withCommas;
    }
  }
  var cfg = PRICE_FORMATS[key];
  var fixed = safe.toFixed(d);
  var _fixed$split = fixed.split('.'),
    _fixed$split2 = _slicedToArray(_fixed$split, 2),
    intPart = _fixed$split2[0],
    _fixed$split2$ = _fixed$split2[1],
    fracPart = _fixed$split2$ === void 0 ? '' : _fixed$split2$;

  // Thousands grouping
  var re = /\B(?=(\d{3})+(?!\d))/g;
  intPart = intPart.replace(re, cfg.thousands);
  if (d <= 0) {
    return intPart;
  }
  if (fracPart.length < d) {
    fracPart = fracPart.padEnd(d, '0');
  }
  return "".concat(intPart).concat(cfg.decimal).concat(fracPart);
}

// Get the selected price format from:
// - explicit settings object (preferred)
// - Vuex store getter (getPriceFormat) - from get_user_auth API
// This helper never throws; it returns null if no valid format is found.
function getPriceFormatSetting() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
    _ref$settings = _ref.settings,
    settings = _ref$settings === void 0 ? null : _ref$settings,
    _ref$store = _ref.store,
    store = _ref$store === void 0 ? null : _ref$store;
  // 1) Explicit settings object (e.g., System Settings API payload)
  if (settings && settings.price_format) {
    var key = normalizePriceFormatKey(settings.price_format);
    if (key) {
      return key;
    }
  }

  // 2) Vuex store getter (from get_user_auth API)
  if (store && _typeof(store.getters) === 'object' && store.getters.getPriceFormat) {
    try {
      var priceFormat = store.getters.getPriceFormat;
      var _key = normalizePriceFormatKey(priceFormat);
      if (_key) {
        return _key;
      }
    } catch (e) {
      // ignore
    }
  }

  // No valid setting => use default behavior (caller should treat null as "legacy" formatting)
  return null;
}

// Cache a selected price format key into localStorage for quick frontend access
function cachePriceFormat(formatKey) {
  var key = normalizePriceFormatKey(formatKey);
  if (!key) return;
  if (typeof window === 'undefined' || !window.localStorage) return;
  try {
    window.localStorage.setItem('app_price_format', key);
  } catch (e) {
    // ignore quota or storage errors
  }
}

/***/ }),

/***/ "./resources/src/views/app/components/ModernPaymentModal.vue":
/*!*******************************************************************!*\
  !*** ./resources/src/views/app/components/ModernPaymentModal.vue ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ModernPaymentModal_vue_vue_type_template_id_866dec86__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ModernPaymentModal.vue?vue&type=template&id=866dec86 */ "./resources/src/views/app/components/ModernPaymentModal.vue?vue&type=template&id=866dec86");
/* harmony import */ var _ModernPaymentModal_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ModernPaymentModal.vue?vue&type=script&lang=js */ "./resources/src/views/app/components/ModernPaymentModal.vue?vue&type=script&lang=js");
/* harmony import */ var _ModernPaymentModal_vue_vue_type_style_index_0_id_866dec86_lang_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ModernPaymentModal.vue?vue&type=style&index=0&id=866dec86&lang=scss */ "./resources/src/views/app/components/ModernPaymentModal.vue?vue&type=style&index=0&id=866dec86&lang=scss");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _ModernPaymentModal_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _ModernPaymentModal_vue_vue_type_template_id_866dec86__WEBPACK_IMPORTED_MODULE_0__.render,
  _ModernPaymentModal_vue_vue_type_template_id_866dec86__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) // removed by dead control flow
{ var api; }
component.options.__file = "resources/src/views/app/components/ModernPaymentModal.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/src/views/app/components/ModernPaymentModal.vue?vue&type=script&lang=js":
/*!*******************************************************************************************!*\
  !*** ./resources/src/views/app/components/ModernPaymentModal.vue?vue&type=script&lang=js ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ModernPaymentModal_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ModernPaymentModal.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/components/ModernPaymentModal.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ModernPaymentModal_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/src/views/app/components/ModernPaymentModal.vue?vue&type=style&index=0&id=866dec86&lang=scss":
/*!****************************************************************************************************************!*\
  !*** ./resources/src/views/app/components/ModernPaymentModal.vue?vue&type=style&index=0&id=866dec86&lang=scss ***!
  \****************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_11_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_11_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_11_use_3_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_21_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ModernPaymentModal_vue_vue_type_style_index_0_id_866dec86_lang_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader/dist/cjs.js!../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!../../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-11.use[3]!../../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-21.use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ModernPaymentModal.vue?vue&type=style&index=0&id=866dec86&lang=scss */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-11.use[3]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-21.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/components/ModernPaymentModal.vue?vue&type=style&index=0&id=866dec86&lang=scss");


/***/ }),

/***/ "./resources/src/views/app/components/ModernPaymentModal.vue?vue&type=template&id=866dec86":
/*!*************************************************************************************************!*\
  !*** ./resources/src/views/app/components/ModernPaymentModal.vue?vue&type=template&id=866dec86 ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ModernPaymentModal_vue_vue_type_template_id_866dec86__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ModernPaymentModal_vue_vue_type_template_id_866dec86__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ModernPaymentModal_vue_vue_type_template_id_866dec86__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ModernPaymentModal.vue?vue&type=template&id=866dec86 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/components/ModernPaymentModal.vue?vue&type=template&id=866dec86");


/***/ }),

/***/ "./resources/src/views/app/pages/pos.vue":
/*!***********************************************!*\
  !*** ./resources/src/views/app/pages/pos.vue ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _pos_vue_vue_type_template_id_4cc49487_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pos.vue?vue&type=template&id=4cc49487&scoped=true */ "./resources/src/views/app/pages/pos.vue?vue&type=template&id=4cc49487&scoped=true");
/* harmony import */ var _pos_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pos.vue?vue&type=script&lang=js */ "./resources/src/views/app/pages/pos.vue?vue&type=script&lang=js");
/* harmony import */ var _pos_vue_vue_type_style_index_0_id_4cc49487_scoped_true_lang_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pos.vue?vue&type=style&index=0&id=4cc49487&scoped=true&lang=scss */ "./resources/src/views/app/pages/pos.vue?vue&type=style&index=0&id=4cc49487&scoped=true&lang=scss");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _pos_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _pos_vue_vue_type_template_id_4cc49487_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render,
  _pos_vue_vue_type_template_id_4cc49487_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "4cc49487",
  null
  
)

/* hot reload */
if (false) // removed by dead control flow
{ var api; }
component.options.__file = "resources/src/views/app/pages/pos.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/src/views/app/pages/pos.vue?vue&type=script&lang=js":
/*!***********************************************************************!*\
  !*** ./resources/src/views/app/pages/pos.vue?vue&type=script&lang=js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_pos_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./pos.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/pos.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_pos_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/src/views/app/pages/pos.vue?vue&type=style&index=0&id=4cc49487&scoped=true&lang=scss":
/*!********************************************************************************************************!*\
  !*** ./resources/src/views/app/pages/pos.vue?vue&type=style&index=0&id=4cc49487&scoped=true&lang=scss ***!
  \********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_11_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_11_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_11_use_3_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_21_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_pos_vue_vue_type_style_index_0_id_4cc49487_scoped_true_lang_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader/dist/cjs.js!../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!../../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-11.use[3]!../../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-21.use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./pos.vue?vue&type=style&index=0&id=4cc49487&scoped=true&lang=scss */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-11.use[3]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-21.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/pos.vue?vue&type=style&index=0&id=4cc49487&scoped=true&lang=scss");


/***/ }),

/***/ "./resources/src/views/app/pages/pos.vue?vue&type=template&id=4cc49487&scoped=true":
/*!*****************************************************************************************!*\
  !*** ./resources/src/views/app/pages/pos.vue?vue&type=template&id=4cc49487&scoped=true ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_pos_vue_vue_type_template_id_4cc49487_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_pos_vue_vue_type_template_id_4cc49487_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_pos_vue_vue_type_template_id_4cc49487_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./pos.vue?vue&type=template&id=4cc49487&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/pos.vue?vue&type=template&id=4cc49487&scoped=true");


/***/ })

}]);