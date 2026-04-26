"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["System_settings"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/settings/system_settings.vue?vue&type=script&lang=js":
/*!************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/settings/system_settings.vue?vue&type=script&lang=js ***!
  \************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! nprogress */ "./node_modules/nprogress/nprogress.js");
/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(nprogress__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _utils_priceFormat__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../utils/priceFormat */ "./resources/src/utils/priceFormat.js");
function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }
function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t["return"] || t["return"](); } finally { if (u) throw o; } } }; }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  metaInfo: {
    title: "System Settings"
  },
  data: function data() {
    return _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty({
      activeTab: 'general',
      isLoading: true,
      data: new FormData(),
      settings: [],
      currencies: [],
      clients: [],
      warehouses: [],
      sms_gateway: [],
      accounts: [],
      payment_methods: [],
      zones_array: [],
      languages: [],
      sidebarLayoutOptions: [{
        value: 'vertical',
        text: 'Vertical'
      }, {
        value: 'horizontal',
        text: 'Horizontal'
      }],
      dateFormatOptions: [{
        label: 'DD/MM/YYYY',
        value: 'DD/MM/YYYY'
      }, {
        label: 'MM/DD/YYYY',
        value: 'MM/DD/YYYY'
      }, {
        label: 'YYYY-MM-DD',
        value: 'YYYY-MM-DD'
      }],
      // Invoice format options for POS printing
      invoiceFormatOptions: [{
        value: 'thermal',
        textKey: 'Invoice_Thermal'
      }, {
        value: 'a4',
        textKey: 'Invoice_A4'
      }],
      // Price format options for frontend display (POS, etc.)
      priceFormatOptions: [{
        label: "1,234.56 (thousand , decimal .)",
        value: "comma_dot"
      }, {
        label: "1.234,56 (thousand . decimal ,)",
        value: "dot_comma"
      }, {
        label: "1 234,56 (thousand space, decimal ,)",
        value: "space_comma"
      }],
      setting: {
        client_id: "",
        warehouse_id: "",
        default_account_id: "",
        default_payment_method_id: "",
        currency_id: "",
        email: "",
        logo: "",
        CompanyName: "",
        CompanyPhone: "",
        CompanyAdress: "",
        footer: "",
        developed_by: "",
        default_language: "",
        date_format: 'YYYY-MM-DD',
        // Optional price format for frontend display
        price_format: "",
        sms_gateway: "",
        is_invoice_footer: '',
        invoice_footer: '',
        quotation_with_stock: '',
        show_language: '',
        point_to_amount_rate: '',
        default_tax: 0,
        dark_mode: false,
        rtl: false,
        debug_mode: false,
        sale_prefix: '',
        purchase_prefix: '',
        quotation_prefix: '',
        adjustment_prefix: '',
        transfer_prefix: '',
        sale_return_prefix: '',
        purchase_return_prefix: '',
        // ZATCA (Fatoorah)
        company_name_ar: '',
        vat_number: '',
        zatca_enabled: false,
        // Invoice format for POS printing ('thermal' or 'a4')
        invoice_format: 'thermal',
        // Security: inactivity auto-logout (minutes) - null means disabled
        session_timeout_minutes: null,
        // Optional cloud backup destination (local backup remains default)
        backup_cloud_enabled: false,
        backup_cloud_provider: null,
        backup_cloud_path: "",
        // S3-compatible
        backup_s3_bucket: "",
        backup_s3_region: "",
        backup_s3_access_key: "",
        backup_s3_secret_key: "",
        backup_s3_endpoint: "",
        backup_s3_path_style: false,
        // Google Drive
        backup_gdrive_folder_id: "",
        backup_gdrive_access_token: "",
        backup_gdrive_refresh_token: "",
        backup_gdrive_client_id: "",
        backup_gdrive_client_secret: "",
        // Dropbox
        backup_dropbox_path: "",
        backup_dropbox_access_token: "",
        // Flags (populated by API) to show if secrets are already saved (but hidden)
        backup_s3_has_secret_key: false,
        backup_gdrive_has_access_token: false,
        backup_gdrive_has_refresh_token: false,
        backup_gdrive_has_client_secret: false,
        backup_dropbox_has_access_token: false
      },
      // Custom Fields data
      customFieldsActiveTab: 0,
      customerFields: [],
      supplierFields: [],
      customFieldEditmode: false,
      customFieldSubmitProcessing: false,
      customField: {
        id: "",
        name: "",
        field_type: "",
        entity_type: "",
        is_required: false,
        default_value: "",
        sort_order: 0
      },
      calendarForm: {
        google_calendar_connected: false,
        google_calendar_connect_url: "",
        google_calendar_disconnect_url: "",
        google_calendar_client_id: "",
        google_calendar_client_secret: "",
        google_calendar_client_secret_set: false,
        google_calendar_redirect_uri: "",
        google_calendar_calendar_id: ""
      },
      calendarSaving: false,
      selectOptionsText: "",
      gateway: {
        stripe_key: "",
        stripe_secret: "",
        deleted: false
      },
      pos_settings: {
        note_customer: "",
        show_logo: "",
        logo_size: 60,
        show_store_name: "",
        show_reference: "",
        show_date: "",
        show_seller: "",
        show_note: "",
        show_barcode: "",
        show_discount: "",
        show_tax: 0,
        show_shipping: 0,
        show_phone: "",
        show_email: "",
        show_address: "",
        show_customer: "",
        show_Warehouse: "",
        is_printable: '',
        products_per_page: '',
        quick_add_customer: false,
        barcode_scanning_sound: false,
        show_product_images: false,
        show_stock_quantity: false,
        enable_hold_sales: false,
        enable_customer_points: false,
        show_categories: false,
        show_brands: false,
        receipt_layout: 1,
        show_paid: "",
        show_due: "",
        show_payments: "",
        show_zatca_qr: "",
        receipt_paper_size: 80
      },
      logoSizeType: 'medium',
      // Track the selected logo size type
      sms_settings: {
        sms_gateway: [],
        default_sms_gateway: '',
        twilio: {
          TWILIO_SID: '',
          TWILIO_TOKEN: '',
          TWILIO_FROM: ''
        },
        termi: {
          TERMI_KEY: '',
          TERMI_SECRET: '',
          TERMI_SENDER: ''
        },
        infobip: {
          base_url: '',
          api_key: '',
          sender_from: ''
        }
      },
      appearance_settings: {
        logo: "",
        favicon: "",
        footer: "",
        app_name: "",
        mobile_app_name: "",
        mobile_app_logo: "",
        mobile_app_logo_url: "",
        mobile_app_logo_file: null,
        seller_mobile_app_name: "",
        seller_mobile_app_logo: "",
        seller_mobile_app_logo_url: "",
        seller_mobile_app_logo_file: null,
        delivery_mobile_app_name: "",
        delivery_mobile_app_logo: "",
        delivery_mobile_app_logo_url: "",
        delivery_mobile_app_logo_file: null,
        page_title_suffix: "",
        developed_by: "",
        login_hero_title: "",
        login_hero_subtitle: "",
        login_panel_title: "",
        login_panel_subtitle: ""
      },
      appearance_data: new FormData(),
      mail_settings: {
        host: "",
        port: "",
        username: "",
        password: "",
        encryption: "",
        sender_name: "",
        sender_email: "",
        mail_mailer: ""
      },
      isTestingMail: false,
      backups: [],
      backupError: null,
      totalRows: 0,
      // Security tab
      securitySessions: [],
      securitySessionsLoading: false,
      securitySessionsActionLoading: false,
      sessionTimeoutCustom: null
    }, "customFieldsActiveTab", 0), "customerFields", []), "supplierFields", []), "customFieldsTableKey", 0), "customFieldEditmode", false), "customFieldSubmitProcessing", false), "customField", {
      id: "",
      name: "",
      field_type: "",
      entity_type: "",
      is_required: false,
      default_value: "",
      sort_order: 0
    }), "selectOptionsText", "");
  },
  computed: _objectSpread(_objectSpread(_objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_1__.mapGetters)("config", ["getThemeMode"])), (0,vuex__WEBPACK_IMPORTED_MODULE_1__.mapGetters)(["currentUser", "getSidebarLayout", "getSideBarToggleProperties"])), {}, {
    // Check if sidebar is open on mobile (for large sidebar layout)
    isSidebarOpenOnMobile: function isSidebarOpenOnMobile() {
      if (this.getSidebarLayout === 'vertical') {
        // For vertical sidebar, check if mobile sidebar is open
        return false; // Vertical sidebar uses different mechanism, adjust if needed
      }
      // For large sidebar layout, check if either sidebar is open
      var props = this.getSideBarToggleProperties;
      return props && (props.isSideNavOpen || props.isSecondarySideNavOpen);
    },
    // Backup destination selector (simple UI):
    // - local => no cloud upload, keep local
    // - cloud => upload to cloud, delete local after successful upload
    // - both  => upload to cloud, keep local
    backupDestination: {
      get: function get() {
        var cloudRaw = this.setting ? this.setting.backup_cloud_enabled : false;
        var cloud = cloudRaw === true || cloudRaw === 1 || cloudRaw === '1' || cloudRaw === 'true';
        return cloud ? 'cloud' : 'local';
      },
      set: function set(v) {
        if (!this.setting) return;
        this.setting.backup_cloud_enabled = v === 'cloud';
      }
    },
    // Sidebar layout (same source as the app customizer; persists via Vuex->localStorage)
    sidebarLayoutModel: {
      get: function get() {
        return this.getSidebarLayout || 'vertical';
      },
      set: function set(layout) {
        try {
          this.setSidebarLayout(layout);
        } catch (e) {}
      }
    },
    // Normalize POS receipt layout selection (1, 2, or 3) for demo preview
    currentReceiptLayout: function currentReceiptLayout() {
      var raw = this.pos_settings && this.pos_settings.receipt_layout != null ? this.pos_settings.receipt_layout : 1;
      var n = Number(raw) || 1;
      return [1, 2, 3].includes(n) ? n : 1;
    },
    // Security: map stored minutes <-> UI dropdown
    sessionTimeoutPreset: {
      get: function get() {
        var v = this.setting ? this.setting.session_timeout_minutes : null;
        var n = v === '' || v === null || typeof v === 'undefined' ? null : Number(v);
        if (!n || isNaN(n) || n < 1) return 'disabled';
        if ([15, 30, 60].includes(n)) return String(n);
        return 'custom';
      },
      set: function set(v) {
        if (!this.setting) return;
        if (v === 'disabled') {
          this.setting.session_timeout_minutes = null;
          return;
        }
        if (v === 'custom') {
          if (!this.sessionTimeoutCustom) {
            var current = Number(this.setting.session_timeout_minutes);
            this.sessionTimeoutCustom = !isNaN(current) && current > 0 ? current : 15;
          }
          this.setting.session_timeout_minutes = Number(this.sessionTimeoutCustom) || 15;
          return;
        }
        this.setting.session_timeout_minutes = Number(v);
      }
    },
    hasOtherSessions: function hasOtherSessions() {
      return (this.securitySessions || []).some(function (s) {
        return !s.is_current;
      });
    },
    securitySessionFields: function securitySessionFields() {
      return [{
        key: 'device',
        label: 'Device / Browser',
        tdClass: 'text-left',
        thClass: 'text-left'
      }, {
        key: 'ip_address',
        label: 'IP Address',
        tdClass: 'text-left',
        thClass: 'text-left'
      }, {
        key: 'login_at',
        label: 'Login date & time',
        tdClass: 'text-left',
        thClass: 'text-left'
      }, {
        key: 'last_activity_at',
        label: 'Last activity',
        tdClass: 'text-left',
        thClass: 'text-left'
      }, {
        key: 'actions',
        label: 'Action',
        tdClass: 'text-right',
        thClass: 'text-right'
      }];
    },
    backupColumns: function backupColumns() {
      return [{
        label: this.$t("date"),
        field: "date",
        tdClass: "text-left",
        thClass: "text-left"
      }, {
        label: this.$t("Filesize"),
        field: "size",
        tdClass: "text-left",
        thClass: "text-left"
      }, {
        label: this.$t("Action"),
        field: "actions",
        tdClass: "text-right",
        thClass: "text-right",
        sortable: false
      }];
    },
    tabs: function tabs() {
      // Base tabs definition (kept for compatibility)
      var baseTabs = [{
        id: 'general',
        label: this.$t('General'),
        icon: 'i-Settings-Window',
        description: 'Company information and basic settings'
      }, {
        id: 'appearance',
        label: this.$t('Appearance_Settings'),
        icon: 'i-Paint-Brush',
        description: 'App branding, logos, and login page customization'
      }, {
        id: 'localization',
        label: this.$t('Localization'),
        icon: 'i-Globe',
        description: 'Language, currency, and timezone settings'
      }, {
        id: 'defaults',
        label: this.$t('Defaults'),
        icon: 'i-Data-Settings',
        description: 'Default customer, warehouse, and gateway settings'
      }, {
        id: 'tax',
        label: this.$t('Tax_Pricing'),
        icon: 'i-Money-2',
        description: 'Tax rates and pricing configurations'
      }, {
        id: 'prefixes',
        label: this.$t('Prefixes'),
        icon: 'i-Tag',
        description: 'Manage prefixes for sales and purchases reference numbers'
      }, {
        id: 'payment',
        label: this.$t('Payment_Gateway'),
        icon: 'i-Credit-Card',
        description: 'Stripe payment gateway configuration'
      }, {
        id: 'mail',
        label: this.$t('mail_settings'),
        icon: 'i-Mail-Settings',
        description: 'SMTP mail server configuration'
      }, {
        id: 'sms',
        label: this.$t('sms_settings'),
        icon: 'i-Speach-Bubble',
        description: 'SMS gateway and provider configurations'
      }, {
        id: 'pos',
        label: this.$t('POS_Receipt'),
        icon: 'i-Cash-Register',
        description: 'POS receipt configuration'
      }, {
        id: 'pos_settings',
        label: this.$t('Pos_Settings'),
        icon: 'i-Data-Settings',
        description: 'POS functionality and display settings'
      }, {
        id: 'zatca',
        label: 'ZATCA',
        icon: 'i-File-ClipboardFileText',
        description: 'ZATCA (Fatoorah) integration settings'
      }, {
        id: 'invoice',
        label: this.$t('Invoice'),
        icon: 'i-Billing',
        description: 'Invoice and quotation settings'
      }, {
        id: 'backup',
        label: this.$t('BackupDatabase'),
        icon: 'i-Data-Backup',
        description: 'Database backup and restore management'
      }, {
        id: 'security',
        label: this.$t('Security_Settings'),
        icon: 'i-Security-Settings',
        description: 'Session timeout and active login sessions'
      }, {
        id: 'system',
        label: this.$t('System'),
        icon: 'i-Gear',
        description: 'System maintenance and cache management'
      }, {
        id: 'custom_fields',
        label: this.$t('CustomFields') || 'Custom Fields',
        icon: 'i-Data-Settings',
        description: 'Manage custom fields for customers and suppliers'
      }];

      // Hide the legacy "Tax & Pricing" tab now that its fields live under "Defaults"
      return baseTabs.filter(function (t) {
        return t.id !== 'tax';
      });
    },
    customFieldsColumns: function customFieldsColumns() {
      return [{
        label: this.$t("FieldName") || "Field Name",
        field: "name",
        tdClass: "text-left",
        thClass: "text-left"
      }, {
        label: this.$t("FieldType") || "Field Type",
        field: "field_type",
        tdClass: "text-left",
        thClass: "text-left"
      }, {
        label: this.$t("Required") || "Required",
        field: "is_required",
        tdClass: "text-center",
        thClass: "text-center"
      }, {
        label: this.$t("Status") || "Status",
        field: "is_active",
        tdClass: "text-center",
        thClass: "text-center"
      }, {
        label: this.$t("Action") || "Action",
        field: "actions",
        tdClass: "text-right",
        thClass: "text-right",
        sortable: false
      }];
    },
    fieldTypes: function fieldTypes() {
      return [{
        label: this.$t('Text') || 'Text',
        value: 'text'
      }, {
        label: this.$t('Number') || 'Number',
        value: 'number'
      }, {
        label: this.$t('Textarea') || 'Textarea',
        value: 'textarea'
      }, {
        label: this.$t('Date') || 'Date',
        value: 'date'
      }, {
        label: this.$t('Select') || 'Select',
        value: 'select'
      }, {
        label: this.$t('Checkbox') || 'Checkbox',
        value: 'checkbox'
      }];
    },
    direction: function direction() {
      if (this.$i18n.locale == "ar") {
        return "rtl";
      } else {
        return "ltr";
      }
    }
  }),
  watch: {
    logoSizeType: function logoSizeType(newVal) {
      // Watch for changes to logoSizeType and update logo_size accordingly
      this.onLogoSizeTypeChange(newVal);
    },
    activeTab: function activeTab(val) {
      if (val === 'security') {
        this.LoadSecuritySessions();
      }
      if (val === 'calendar') {
        this.Load_Calendar_Settings();
      }
      if (val === 'custom_fields') {
        this.Get_CustomFields();
      }
      // Persist last active tab for navigation within the same session
      // Note: This is separate from submitted_tab which is used after form submissions
      try {
        if (typeof window !== 'undefined' && window.localStorage) {
          window.localStorage.setItem('system_settings_active_tab', val);
        }
      } catch (e) {}
    },
    sessionTimeoutCustom: function sessionTimeoutCustom(val) {
      if (this.sessionTimeoutPreset === 'custom' && this.setting) {
        var n = Number(val);
        this.setting.session_timeout_minutes = !isNaN(n) && n > 0 ? n : 15;
      }
    }
  },
  methods: _objectSpread(_objectSpread({
    // ---------------- Security Settings ----------------
    formatDateTime: function formatDateTime(v) {
      try {
        if (!v) return '';
        var d = new Date(v);
        if (isNaN(d.getTime())) return String(v);
        return d.toLocaleString();
      } catch (e) {
        return String(v || '');
      }
    },
    LoadSecuritySessions: function LoadSecuritySessions() {
      var _this = this;
      if (this.securitySessionsLoading) return;
      this.securitySessionsLoading = true;
      axios.get("security/sessions").then(function (response) {
        _this.securitySessions = response && response.data && response.data.sessions ? response.data.sessions : [];
      })["catch"](function (error) {
        var msg = error && error.response && error.response.data && (error.response.data.message || error.response.data.error) || _this.$t("Failed");
        _this.makeToast("danger", msg, _this.$t("Failed"));
      })["finally"](function () {
        _this.securitySessionsLoading = false;
      });
    },
    LogoutSession: function LogoutSession(tokenId) {
      var _this2 = this;
      if (!tokenId) return;
      if (this.securitySessionsActionLoading) return;
      this.securitySessionsActionLoading = true;
      axios["delete"]("security/sessions/".concat(encodeURIComponent(tokenId))).then(function () {
        _this2.makeToast("success", "Session logged out successfully.", _this2.$t("Success"));
        _this2.LoadSecuritySessions();
      })["catch"](function (error) {
        var msg = error && error.response && error.response.data && (error.response.data.message || error.response.data.error) || _this2.$t("Failed");
        _this2.makeToast("danger", msg, _this2.$t("Failed"));
      })["finally"](function () {
        _this2.securitySessionsActionLoading = false;
      });
    },
    LogoutAllOtherDevices: function LogoutAllOtherDevices() {
      var _this3 = this;
      if (this.securitySessionsActionLoading) return;
      this.securitySessionsActionLoading = true;
      axios.post("security/sessions/logout-other").then(function (response) {
        var revoked = response && response.data && typeof response.data.revoked !== "undefined" ? response.data.revoked : null;
        var msg = revoked === null ? "Logged out other devices." : "Logged out ".concat(revoked, " other device(s).");
        _this3.makeToast("success", msg, _this3.$t("Success"));
        _this3.LoadSecuritySessions();
      })["catch"](function (error) {
        var msg = error && error.response && error.response.data && (error.response.data.message || error.response.data.error) || _this3.$t("Failed");
        _this3.makeToast("danger", msg, _this3.$t("Failed"));
      })["finally"](function () {
        _this3.securitySessionsActionLoading = false;
      });
    },
    Load_Calendar_Settings: function Load_Calendar_Settings() {
      var _this4 = this;
      axios.get("settings/calendar").then(function (response) {
        var d = response && response.data;
        if (d) {
          _this4.calendarForm.google_calendar_connected = !!d.google_calendar_connected;
          _this4.calendarForm.google_calendar_connect_url = d.google_calendar_connect_url || "";
          _this4.calendarForm.google_calendar_disconnect_url = d.google_calendar_disconnect_url || "";
          _this4.calendarForm.google_calendar_client_id = d.google_calendar_client_id || "";
          _this4.calendarForm.google_calendar_client_secret = "";
          _this4.calendarForm.google_calendar_client_secret_set = !!d.google_calendar_client_secret_set;
          _this4.calendarForm.google_calendar_redirect_uri = d.google_calendar_redirect_uri || "";
          _this4.calendarForm.google_calendar_calendar_id = d.google_calendar_calendar_id || "";
        }
      })["catch"](function () {
        _this4.makeToast("danger", _this4.$t("Failed") || "Failed", _this4.$t("Failed"));
      });
    },
    Submit_Calendar_Settings: function Submit_Calendar_Settings() {
      var _this5 = this;
      if (this.calendarSaving) return;
      this.calendarSaving = true;
      axios.patch("settings/calendar", {
        google_calendar_client_id: this.calendarForm.google_calendar_client_id || null,
        google_calendar_client_secret: this.calendarForm.google_calendar_client_secret || null,
        google_calendar_redirect_uri: this.calendarForm.google_calendar_redirect_uri || null,
        google_calendar_calendar_id: this.calendarForm.google_calendar_calendar_id || null
      }).then(function () {
        _this5.makeToast("success", _this5.$t("Success") || "Saved", _this5.$t("Success"));
      })["catch"](function (error) {
        var msg = error && error.response && error.response.data && (error.response.data.message || error.response.data.errors) || _this5.$t("Failed");
        _this5.makeToast("danger", _typeof(msg) === "object" ? JSON.stringify(msg) : msg, _this5.$t("Failed"));
      })["finally"](function () {
        _this5.calendarSaving = false;
      });
    }
  }, (0,vuex__WEBPACK_IMPORTED_MODULE_1__.mapActions)(["refreshUserPermissions", "setSidebarLayout"])), {}, {
    getActiveTabLabel: function getActiveTabLabel() {
      var _this6 = this;
      var tab = this.tabs.find(function (t) {
        return t.id === _this6.activeTab;
      });
      return tab ? tab.label : '';
    },
    // Handle logo size type change
    onLogoSizeTypeChange: function onLogoSizeTypeChange(value) {
      // value is already set to logoSizeType via v-model, but we use it to update logo_size
      // Update logo_size based on the selected type
      if (!this.pos_settings) return;
      var selectedValue = value || this.logoSizeType;
      if (selectedValue === 'small') {
        this.pos_settings.logo_size = 40;
      } else if (selectedValue === 'medium') {
        this.pos_settings.logo_size = 60;
      } else if (selectedValue === 'large') {
        this.pos_settings.logo_size = 80;
      }
      // If 'custom', don't change logo_size, let user input handle it
      // But ensure logo_size has a valid value if it's empty
      if (selectedValue === 'custom' && (!this.pos_settings.logo_size || this.pos_settings.logo_size === '')) {
        this.pos_settings.logo_size = 60; // Default to 60 if empty
      }
    },
    getActiveTabDescription: function getActiveTabDescription() {
      var _this7 = this;
      var tab = this.tabs.find(function (t) {
        return t.id === _this7.activeTab;
      });
      return tab ? tab.description : '';
    },
    SetLocal: function SetLocal(locale) {
      this.$i18n.locale = locale;
      this.$store.dispatch("setLanguage", locale);
      Fire.$emit("ChangeLanguage");
      window.location.reload();
    },
    //------------- Submit General Settings (General tab only)
    Submit_General_Settings: function Submit_General_Settings() {
      var _this8 = this;
      // Validate only the General tab fields via its own observer
      if (this.$refs.generalObserver && this.$refs.generalObserver.validate) {
        this.$refs.generalObserver.validate().then(function (success) {
          if (!success) {
            _this8.makeToast("danger", _this8.$t("Please_fill_the_form_correctly"), _this8.$t("Failed"));
          } else {
            _this8.Update_Settings();
          }
        });
      } else {
        // Fallback: if observer is missing, still attempt to save
        this.Update_Settings();
      }
    },
    //------------- Submit Appearance Settings
    Submit_Appearance_Settings: function Submit_Appearance_Settings() {
      var _this9 = this;
      if (this.$refs.appearanceObserver && this.$refs.appearanceObserver.validate) {
        this.$refs.appearanceObserver.validate().then(function (success) {
          if (!success) {
            _this9.makeToast("danger", _this9.$t("Please_fill_the_form_correctly"), _this9.$t("Failed"));
          } else {
            _this9.Update_Appearance_Settings();
          }
        });
      } else {
        this.Update_Appearance_Settings();
      }
    },
    //------------- Submit POS Settings
    Submit_POS_Settings: function Submit_POS_Settings() {
      // POS Settings tabs don't have required fields, so skip validation
      this.Update_Pos_Settings();
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
    //------ Toast
    makeToast: function makeToast(variant, msg, title) {
      this.$root.$bvToast.toast(msg, {
        title: title,
        variant: variant,
        solid: true
      });
    },
    getValidationState: function getValidationState(_ref2) {
      var dirty = _ref2.dirty,
        validated = _ref2.validated,
        _ref2$valid = _ref2.valid,
        valid = _ref2$valid === void 0 ? null : _ref2$valid;
      return dirty || validated ? valid : null;
    },
    normalizeSelectedFile: function normalizeSelectedFile(fileOrFiles) {
      if (!fileOrFiles) {
        return null;
      }
      if (Array.isArray(fileOrFiles)) {
        return fileOrFiles[0] || null;
      }
      return fileOrFiles;
    },
    buildImageFilename: function buildImageFilename(originalName, mimeType) {
      var baseName = (originalName || "upload").replace(/\.[^/.]+$/, "");
      var extensionMap = {
        "image/jpeg": "jpg",
        "image/png": "png",
        "image/webp": "webp"
      };
      var extension = extensionMap[mimeType] || "png";
      return "".concat(baseName, ".").concat(extension);
    },
    loadImageElement: function loadImageElement(file) {
      return new Promise(function (resolve, reject) {
        var imageUrl = URL.createObjectURL(file);
        var image = new Image();
        image.onload = function () {
          URL.revokeObjectURL(imageUrl);
          resolve(image);
        };
        image.onerror = function (error) {
          URL.revokeObjectURL(imageUrl);
          reject(error);
        };
        image.src = imageUrl;
      });
    },
    canvasToBlob: function canvasToBlob(canvas, mimeType, quality) {
      return new Promise(function (resolve, reject) {
        canvas.toBlob(function (blob) {
          if (blob) {
            resolve(blob);
            return;
          }
          reject(new Error("Unable to create image blob"));
        }, mimeType, quality);
      });
    },
    optimizeImageUpload: function optimizeImageUpload(fileOrFiles) {
      var _arguments = arguments,
        _this0 = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee() {
        var options, file, _options$maxWidth, maxWidth, _options$maxHeight, maxHeight, _options$outputType, outputType, _options$qualitySteps, qualitySteps, _options$maxBytes, maxBytes, _options$label, label, image, width, height, ratio, targetWidth, targetHeight, canvas, ctx, bestBlob, _iterator, _step, quality, blob, _t, _t2;
        return _regenerator().w(function (_context) {
          while (1) switch (_context.p = _context.n) {
            case 0:
              options = _arguments.length > 1 && _arguments[1] !== undefined ? _arguments[1] : {};
              file = _this0.normalizeSelectedFile(fileOrFiles);
              if (file) {
                _context.n = 1;
                break;
              }
              return _context.a(2, null);
            case 1:
              if (!(!file.type || !file.type.match("image.*"))) {
                _context.n = 2;
                break;
              }
              _this0.makeToast("danger", _this0.$t("Invalid_file_type"), _this0.$t("Failed"));
              return _context.a(2, null);
            case 2:
              _options$maxWidth = options.maxWidth, maxWidth = _options$maxWidth === void 0 ? 1024 : _options$maxWidth, _options$maxHeight = options.maxHeight, maxHeight = _options$maxHeight === void 0 ? 1024 : _options$maxHeight, _options$outputType = options.outputType, outputType = _options$outputType === void 0 ? "image/webp" : _options$outputType, _options$qualitySteps = options.qualitySteps, qualitySteps = _options$qualitySteps === void 0 ? [0.9, 0.82, 0.74, 0.66] : _options$qualitySteps, _options$maxBytes = options.maxBytes, maxBytes = _options$maxBytes === void 0 ? 512 * 1024 : _options$maxBytes, _options$label = options.label, label = _options$label === void 0 ? "image" : _options$label;
              _context.p = 3;
              _context.n = 4;
              return _this0.loadImageElement(file);
            case 4:
              image = _context.v;
              width = image.naturalWidth || image.width;
              height = image.naturalHeight || image.height;
              ratio = Math.min(1, maxWidth / width, maxHeight / height);
              targetWidth = Math.max(1, Math.round(width * ratio));
              targetHeight = Math.max(1, Math.round(height * ratio));
              canvas = document.createElement("canvas");
              canvas.width = targetWidth;
              canvas.height = targetHeight;
              ctx = canvas.getContext("2d");
              ctx.clearRect(0, 0, targetWidth, targetHeight);
              ctx.drawImage(image, 0, 0, targetWidth, targetHeight);
              bestBlob = null;
              _iterator = _createForOfIteratorHelper(qualitySteps);
              _context.p = 5;
              _iterator.s();
            case 6:
              if ((_step = _iterator.n()).done) {
                _context.n = 9;
                break;
              }
              quality = _step.value;
              _context.n = 7;
              return _this0.canvasToBlob(canvas, outputType, quality);
            case 7:
              blob = _context.v;
              if (!bestBlob || blob.size < bestBlob.size) {
                bestBlob = blob;
              }
              if (!(blob.size <= maxBytes)) {
                _context.n = 8;
                break;
              }
              return _context.a(2, new File([blob], _this0.buildImageFilename(file.name, outputType), {
                type: outputType
              }));
            case 8:
              _context.n = 6;
              break;
            case 9:
              _context.n = 11;
              break;
            case 10:
              _context.p = 10;
              _t = _context.v;
              _iterator.e(_t);
            case 11:
              _context.p = 11;
              _iterator.f();
              return _context.f(11);
            case 12:
              if (!bestBlob) {
                _context.n = 13;
                break;
              }
              if (bestBlob.size > maxBytes) {
                _this0.makeToast("warning", "".concat(label, " was optimized before upload because the original file was too large."), _this0.$t("Success"));
              }
              return _context.a(2, new File([bestBlob], _this0.buildImageFilename(file.name, outputType), {
                type: outputType
              }));
            case 13:
              _context.n = 15;
              break;
            case 14:
              _context.p = 14;
              _t2 = _context.v;
              _this0.makeToast("danger", "Unable to process ".concat(label.toLowerCase(), " file."), _this0.$t("Failed"));
            case 15:
              return _context.a(2, null);
          }
        }, _callee, null, [[5, 10, 11, 12], [3, 14]]);
      }))();
    },
    //------------------------------ Event Upload Logo -------------------------------\\
    onFileSelected: function onFileSelected(e) {
      var _this1 = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2() {
        var file;
        return _regenerator().w(function (_context2) {
          while (1) switch (_context2.n) {
            case 0:
              file = e.target.files[0];
              if (!file) {
                _context2.n = 3;
                break;
              }
              if (file.type.match('image.*')) {
                _context2.n = 1;
                break;
              }
              _this1.makeToast("danger", _this1.$t("Invalid_file_type"), _this1.$t("Failed"));
              e.target.value = '';
              _this1.setting.logo = "";
              return _context2.a(2);
            case 1:
              if (!(file.size > 200 * 1024)) {
                _context2.n = 2;
                break;
              }
              _this1.makeToast("danger", _this1.$t("File_size_must_be_less_than_200KB"), _this1.$t("Failed"));
              e.target.value = '';
              _this1.setting.logo = "";
              return _context2.a(2);
            case 2:
              _this1.setting.logo = file;
              _context2.n = 4;
              break;
            case 3:
              _this1.setting.logo = "";
            case 4:
              return _context2.a(2);
          }
        }, _callee2);
      }))();
    },
    //------------------------------ Event Upload Appearance Logo -------------------------------\\
    onAppearanceLogoSelected: function onAppearanceLogoSelected(e) {
      var _this10 = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee3() {
        var _yield$_this10$$refs$, valid, file;
        return _regenerator().w(function (_context3) {
          while (1) switch (_context3.n) {
            case 0:
              _context3.n = 1;
              return _this10.$refs.AppearanceLogo.validate(e);
            case 1:
              _yield$_this10$$refs$ = _context3.v;
              valid = _yield$_this10$$refs$.valid;
              file = e.target.files[0];
              if (!(valid && file)) {
                _context3.n = 3;
                break;
              }
              _context3.n = 2;
              return _this10.optimizeImageUpload(file, {
                maxWidth: 800,
                maxHeight: 800,
                outputType: "image/webp",
                maxBytes: 450 * 1024,
                label: "Logo"
              });
            case 2:
              _this10.appearance_settings.logo = _context3.v;
              _context3.n = 4;
              break;
            case 3:
              _this10.appearance_settings.logo = "";
            case 4:
              return _context3.a(2);
          }
        }, _callee3);
      }))();
    },
    //------------------------------ Event Upload Appearance Favicon -------------------------------\\
    onAppearanceFaviconSelected: function onAppearanceFaviconSelected(e) {
      var _this11 = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee4() {
        var _yield$_this11$$refs$, valid, file;
        return _regenerator().w(function (_context4) {
          while (1) switch (_context4.n) {
            case 0:
              _context4.n = 1;
              return _this11.$refs.AppearanceFavicon.validate(e);
            case 1:
              _yield$_this11$$refs$ = _context4.v;
              valid = _yield$_this11$$refs$.valid;
              file = e.target.files[0];
              if (!(valid && file)) {
                _context4.n = 3;
                break;
              }
              _context4.n = 2;
              return _this11.optimizeImageUpload(file, {
                maxWidth: 256,
                maxHeight: 256,
                outputType: "image/png",
                qualitySteps: [0.92],
                maxBytes: 90 * 1024,
                label: "Favicon"
              });
            case 2:
              _this11.appearance_settings.favicon = _context4.v;
              _context4.n = 4;
              break;
            case 3:
              _this11.appearance_settings.favicon = "";
            case 4:
              return _context4.a(2);
          }
        }, _callee4);
      }))();
    },
    onSellerMobileAppLogoSelected: function onSellerMobileAppLogoSelected(file) {
      var _this12 = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee5() {
        var optimizedFile;
        return _regenerator().w(function (_context5) {
          while (1) switch (_context5.n) {
            case 0:
              _context5.n = 1;
              return _this12.optimizeImageUpload(file, {
                maxWidth: 512,
                maxHeight: 512,
                outputType: "image/webp",
                maxBytes: 350 * 1024,
                label: "Seller App Logo"
              });
            case 1:
              optimizedFile = _context5.v;
              _this12.appearance_settings.seller_mobile_app_logo_file = optimizedFile;
              if (optimizedFile) {
                _this12.appearance_settings.seller_mobile_app_logo_url = URL.createObjectURL(optimizedFile);
              }
            case 2:
              return _context5.a(2);
          }
        }, _callee5);
      }))();
    },
    onDeliveryMobileAppLogoSelected: function onDeliveryMobileAppLogoSelected(file) {
      var _this13 = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee6() {
        var optimizedFile;
        return _regenerator().w(function (_context6) {
          while (1) switch (_context6.n) {
            case 0:
              _context6.n = 1;
              return _this13.optimizeImageUpload(file, {
                maxWidth: 512,
                maxHeight: 512,
                outputType: "image/webp",
                maxBytes: 350 * 1024,
                label: "Delivery App Logo"
              });
            case 1:
              optimizedFile = _context6.v;
              _this13.appearance_settings.delivery_mobile_app_logo_file = optimizedFile;
              if (optimizedFile) {
                _this13.appearance_settings.delivery_mobile_app_logo_url = URL.createObjectURL(optimizedFile);
              }
            case 2:
              return _context6.a(2);
          }
        }, _callee6);
      }))();
    },
    Selected_Time_Zone: function Selected_Time_Zone(value) {
      if (value === null) {
        this.setting.timezone = "";
      }
    },
    //---------------------------------- Update Settings ----------------\\
    Update_Settings: function Update_Settings() {
      var _this14 = this;
      nprogress__WEBPACK_IMPORTED_MODULE_0___default().start();
      nprogress__WEBPACK_IMPORTED_MODULE_0___default().set(0.1);
      var self = this;
      self.data = new FormData(); // Reset FormData
      self.data.append("client", self.setting.client_id);
      self.data.append("warehouse", self.setting.warehouse_id);
      self.data.append("default_account", self.setting.default_account_id || "");
      self.data.append("default_payment_method", self.setting.default_payment_method_id || "");
      self.data.append("currency", self.setting.currency_id);
      self.data.append("email", self.setting.email);
      self.data.append("logo", self.setting.logo);
      self.data.append("CompanyName", self.setting.CompanyName);
      self.data.append("CompanyPhone", self.setting.CompanyPhone);
      self.data.append("CompanyAdress", self.setting.CompanyAdress);
      self.data.append("company_name_ar", self.setting.company_name_ar || '');
      self.data.append("vat_number", self.setting.vat_number || '');
      self.data.append("zatca_enabled", self.setting.zatca_enabled ? 1 : 0);
      self.data.append("footer", self.setting.footer);
      self.data.append("developed_by", self.setting.developed_by);
      self.data.append("default_language", self.setting.default_language);
      self.data.append("sms_gateway", self.setting.sms_gateway);
      self.data.append("is_invoice_footer", self.setting.is_invoice_footer);
      self.data.append("invoice_footer", self.setting.invoice_footer);
      self.data.append("invoice_format", self.setting.invoice_format || "thermal");
      self.data.append("quotation_with_stock", self.setting.quotation_with_stock);
      self.data.append("show_language", self.setting.show_language);
      self.data.append("timezone", self.setting.timezone);
      self.data.append("date_format", self.setting.date_format || 'YYYY-MM-DD');
      // Optional price format for frontend display (POS, etc.)
      self.data.append("price_format", self.setting.price_format || "");
      self.data.append("point_to_amount_rate", self.setting.point_to_amount_rate);
      self.data.append("default_tax", self.setting.default_tax || 0);
      self.data.append("dark_mode", self.setting.dark_mode ? 1 : 0);
      self.data.append("rtl", self.setting.rtl ? 1 : 0);
      self.data.append("debug_mode", self.setting.debug_mode ? 1 : 0);
      self.data.append("sale_prefix", self.setting.sale_prefix || '');
      self.data.append("purchase_prefix", self.setting.purchase_prefix || '');
      self.data.append("quotation_prefix", self.setting.quotation_prefix || '');
      self.data.append("adjustment_prefix", self.setting.adjustment_prefix || '');
      self.data.append("transfer_prefix", self.setting.transfer_prefix || '');
      self.data.append("sale_return_prefix", self.setting.sale_return_prefix || '');
      self.data.append("purchase_return_prefix", self.setting.purchase_return_prefix || '');
      // Security: inactivity auto-logout (minutes) - empty => disabled/null
      self.data.append("session_timeout_minutes", self.setting.session_timeout_minutes === null || typeof self.setting.session_timeout_minutes === "undefined" ? "" : self.setting.session_timeout_minutes);

      // Cloud backup destination settings (optional)
      self.data.append("backup_cloud_enabled", self.setting.backup_cloud_enabled ? 1 : 0);
      self.data.append("backup_cloud_provider", self.setting.backup_cloud_provider || "");
      self.data.append("backup_cloud_path", self.setting.backup_cloud_path || "");

      // S3-compatible
      self.data.append("backup_s3_bucket", self.setting.backup_s3_bucket || "");
      self.data.append("backup_s3_region", self.setting.backup_s3_region || "");
      self.data.append("backup_s3_access_key", self.setting.backup_s3_access_key || "");
      self.data.append("backup_s3_secret_key", self.setting.backup_s3_secret_key || "");
      self.data.append("backup_s3_endpoint", self.setting.backup_s3_endpoint || "");
      self.data.append("backup_s3_path_style", self.setting.backup_s3_path_style ? 1 : 0);

      // Google Drive
      self.data.append("backup_gdrive_folder_id", self.setting.backup_gdrive_folder_id || "");
      self.data.append("backup_gdrive_access_token", self.setting.backup_gdrive_access_token || "");
      self.data.append("backup_gdrive_refresh_token", self.setting.backup_gdrive_refresh_token || "");
      self.data.append("backup_gdrive_client_id", self.setting.backup_gdrive_client_id || "");
      self.data.append("backup_gdrive_client_secret", self.setting.backup_gdrive_client_secret || "");

      // Dropbox
      self.data.append("backup_dropbox_path", self.setting.backup_dropbox_path || "");
      self.data.append("backup_dropbox_access_token", self.setting.backup_dropbox_access_token || "");
      self.data.append("_method", "put");
      axios.post("settings/" + self.setting.id, self.data).then(function (response) {
        Fire.$emit("Event_Setting");

        // Sync Vuex store with saved settings by directly setting the values
        if (self.setting.dark_mode !== undefined && self.setting.dark_mode !== null) {
          _this14.$store.state.config.themeMode.dark = self.setting.dark_mode;
        }
        if (self.setting.rtl !== undefined && self.setting.rtl !== null) {
          _this14.$store.state.config.themeMode.rtl = self.setting.rtl;
        }
        _this14.makeToast("success", _this14.$t("Successfully_Updated"), _this14.$t("Success"));
        // Update date_format in Vuex store and localStorage cache
        try {
          if (self.setting.date_format) {
            // Update Vuex store (primary source)
            _this14.$store.commit('setDateFormat', self.setting.date_format);
            // Also update localStorage as cache
            localStorage.setItem('app_date_format', self.setting.date_format);
          }
        } catch (e) {}

        // Cache price_format in localStorage for frontend-only display helpers (e.g., POS)
        try {
          if (self.setting.price_format) {
            (0,_utils_priceFormat__WEBPACK_IMPORTED_MODULE_2__.cachePriceFormat)(self.setting.price_format);
          }
        } catch (e) {}
        _this14.refreshUserPermissions();
        // Save the active tab so it can be restored after reload (must be before SetLocal which may reload)
        try {
          if (typeof window !== 'undefined' && window.localStorage) {
            window.localStorage.setItem('system_settings_submitted_tab', _this14.activeTab);
          }
        } catch (e) {}
        nprogress__WEBPACK_IMPORTED_MODULE_0___default().done();
        _this14.SetLocal(self.setting.default_language);
      })["catch"](function (error) {
        var msg = error && error.response && error.response.data && (error.response.data.message || error.response.data.error) || _this14.$t("InvalidData");
        _this14.makeToast("danger", msg, _this14.$t("Failed"));
        nprogress__WEBPACK_IMPORTED_MODULE_0___default().done();
      });
    },
    //---------------------------------- Update Payment Gateway ----------------\\
    Update_Payment: function Update_Payment() {
      var _this15 = this;
      nprogress__WEBPACK_IMPORTED_MODULE_0___default().start();
      nprogress__WEBPACK_IMPORTED_MODULE_0___default().set(0.1);
      axios.post("payment_gateway", {
        stripe_key: this.gateway.stripe_key,
        stripe_secret: this.gateway.stripe_secret,
        deleted: this.gateway.deleted
      }).then(function (response) {
        Fire.$emit("Event_payment");
        _this15.makeToast("success", _this15.$t("Successfully_Updated"), _this15.$t("Success"));
        nprogress__WEBPACK_IMPORTED_MODULE_0___default().done();
      })["catch"](function (error) {
        nprogress__WEBPACK_IMPORTED_MODULE_0___default().done();
        _this15.makeToast("danger", _this15.$t("InvalidData"), _this15.$t("Failed"));
      });
    },
    //---------------------------------- GET Payment_Gateway ----------------\\
    Get_Payment_Gateway: function Get_Payment_Gateway() {
      var _this16 = this;
      axios.get("get_payment_gateway_ws").then(function (response) {
        _this16.gateway = response.data.gateway;
      })["catch"](function (error) {
        // Silently fail if payment gateway endpoint doesn't exist
      });
    },
    //---------------------------------- Update_Pos_Settings ----------------\\
    Update_Pos_Settings: function Update_Pos_Settings() {
      var _this17 = this;
      nprogress__WEBPACK_IMPORTED_MODULE_0___default().start();
      nprogress__WEBPACK_IMPORTED_MODULE_0___default().set(0.1);
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
        products_per_page: this.pos_settings.products_per_page,
        quick_add_customer: this.pos_settings.quick_add_customer,
        barcode_scanning_sound: this.pos_settings.barcode_scanning_sound,
        show_product_images: this.pos_settings.show_product_images,
        show_stock_quantity: this.pos_settings.show_stock_quantity,
        enable_hold_sales: this.pos_settings.enable_hold_sales,
        enable_customer_points: this.pos_settings.enable_customer_points,
        show_categories: this.pos_settings.show_categories,
        show_brands: this.pos_settings.show_brands,
        show_paid: this.pos_settings.show_paid,
        show_due: this.pos_settings.show_due,
        show_payments: this.pos_settings.show_payments,
        show_zatca_qr: this.pos_settings.show_zatca_qr,
        receipt_paper_size: this.pos_settings.receipt_paper_size,
        receipt_layout: this.pos_settings.receipt_layout,
        invoice_format: this.setting.invoice_format || "thermal"
      }).then(function (response) {
        Fire.$emit("Event_Pos_Settings");
        // Save the active tab so it can be restored after reload
        try {
          if (typeof window !== 'undefined' && window.localStorage) {
            window.localStorage.setItem('system_settings_submitted_tab', _this17.activeTab);
          }
        } catch (e) {}
        _this17.makeToast("success", _this17.$t("Successfully_Updated"), _this17.$t("Success"));
        nprogress__WEBPACK_IMPORTED_MODULE_0___default().done();
      })["catch"](function (error) {
        nprogress__WEBPACK_IMPORTED_MODULE_0___default().done();
        _this17.makeToast("danger", _this17.$t("InvalidData"), _this17.$t("Failed"));
      });
    },
    //---------------------------------- Get_pos_Settings ----------------\\
    Get_Pos_Settings: function Get_Pos_Settings() {
      var _this18 = this;
      axios.get("get_pos_Settings").then(function (response) {
        _this18.pos_settings = _objectSpread(_objectSpread({}, _this18.pos_settings), response.data.pos_settings || {});
        // Ensure show_tax and show_shipping have default values if not present
        if (_this18.pos_settings.show_tax === undefined || _this18.pos_settings.show_tax === null || _this18.pos_settings.show_tax === '') {
          _this18.pos_settings.show_tax = _this18.pos_settings.show_discount || 0;
        }
        if (_this18.pos_settings.show_shipping === undefined || _this18.pos_settings.show_shipping === null || _this18.pos_settings.show_shipping === '') {
          _this18.pos_settings.show_shipping = _this18.pos_settings.show_discount || 0;
        }
        // Ensure logo_size has a default value if not present
        if (_this18.pos_settings.logo_size === undefined || _this18.pos_settings.logo_size === null || _this18.pos_settings.logo_size === '') {
          _this18.pos_settings.logo_size = 60;
        }
        // Set logoSizeType based on logo_size value
        var size = Number(_this18.pos_settings.logo_size);
        if (size === 40) {
          _this18.logoSizeType = 'small';
        } else if (size === 60) {
          _this18.logoSizeType = 'medium';
        } else if (size === 80) {
          _this18.logoSizeType = 'large';
        } else {
          _this18.logoSizeType = 'custom';
        }
      })["catch"](function (error) {
        // Silently fail if POS settings endpoint doesn't exist
      });
    },
    //---------------------------------- Update_Default_SMS ----------------\\
    Update_Default_SMS: function Update_Default_SMS() {
      var _this19 = this;
      nprogress__WEBPACK_IMPORTED_MODULE_0___default().start();
      nprogress__WEBPACK_IMPORTED_MODULE_0___default().set(0.1);
      axios.put("update_Default_SMS", {
        default_sms_gateway: this.sms_settings.default_sms_gateway
      }).then(function (response) {
        // Save the active tab so it can be restored after reload
        try {
          if (typeof window !== 'undefined' && window.localStorage) {
            window.localStorage.setItem('system_settings_submitted_tab', _this19.activeTab);
          }
        } catch (e) {}
        _this19.makeToast("success", _this19.$t("Successfully_Updated"), _this19.$t("Success"));
        nprogress__WEBPACK_IMPORTED_MODULE_0___default().done();
      })["catch"](function (error) {
        nprogress__WEBPACK_IMPORTED_MODULE_0___default().done();
        _this19.makeToast("danger", _this19.$t("InvalidData"), _this19.$t("Failed"));
      });
    },
    //---------------------------------- Update_Termi_SMS ----------------\\
    Update_Termi_SMS: function Update_Termi_SMS() {
      var _this20 = this;
      if (this.$refs.smsObserver && this.$refs.smsObserver.validate) {
        this.$refs.smsObserver.validate().then(function (success) {
          if (!success) {
            _this20.makeToast("danger", _this20.$t("Please_fill_the_form_correctly"), _this20.$t("Failed"));
            return;
          }
          _this20.submitTermiSMS();
        });
      } else {
        this.submitTermiSMS();
      }
    },
    submitTermiSMS: function submitTermiSMS() {
      var _this21 = this;
      nprogress__WEBPACK_IMPORTED_MODULE_0___default().start();
      nprogress__WEBPACK_IMPORTED_MODULE_0___default().set(0.1);
      axios.post("update_termi_config", {
        TERMI_KEY: this.sms_settings.termi.TERMI_KEY,
        TERMI_SECRET: this.sms_settings.termi.TERMI_SECRET,
        TERMI_SENDER: this.sms_settings.termi.TERMI_SENDER
      }).then(function (response) {
        Fire.$emit("Event_sms");
        // Save the active tab so it can be restored after reload
        try {
          if (typeof window !== 'undefined' && window.localStorage) {
            window.localStorage.setItem('system_settings_submitted_tab', _this21.activeTab);
          }
        } catch (e) {}
        _this21.makeToast("success", _this21.$t("Successfully_Updated"), _this21.$t("Success"));
        nprogress__WEBPACK_IMPORTED_MODULE_0___default().done();
      })["catch"](function (error) {
        nprogress__WEBPACK_IMPORTED_MODULE_0___default().done();
        _this21.makeToast("danger", _this21.$t("InvalidData"), _this21.$t("Failed"));
      });
    },
    //---------------------------------- Update_Twilio_SMS ----------------\\
    Update_Twilio_SMS: function Update_Twilio_SMS() {
      var _this22 = this;
      if (this.$refs.smsObserver && this.$refs.smsObserver.validate) {
        this.$refs.smsObserver.validate().then(function (success) {
          if (!success) {
            _this22.makeToast("danger", _this22.$t("Please_fill_the_form_correctly"), _this22.$t("Failed"));
            return;
          }
          _this22.submitTwilioSMS();
        });
      } else {
        this.submitTwilioSMS();
      }
    },
    submitTwilioSMS: function submitTwilioSMS() {
      var _this23 = this;
      nprogress__WEBPACK_IMPORTED_MODULE_0___default().start();
      nprogress__WEBPACK_IMPORTED_MODULE_0___default().set(0.1);
      axios.post("update_twilio_config", {
        TWILIO_SID: this.sms_settings.twilio.TWILIO_SID,
        TWILIO_TOKEN: this.sms_settings.twilio.TWILIO_TOKEN,
        TWILIO_FROM: this.sms_settings.twilio.TWILIO_FROM
      }).then(function (response) {
        Fire.$emit("Event_sms");
        // Save the active tab so it can be restored after reload
        try {
          if (typeof window !== 'undefined' && window.localStorage) {
            window.localStorage.setItem('system_settings_submitted_tab', _this23.activeTab);
          }
        } catch (e) {}
        _this23.makeToast("success", _this23.$t("Successfully_Updated"), _this23.$t("Success"));
        nprogress__WEBPACK_IMPORTED_MODULE_0___default().done();
      })["catch"](function (error) {
        nprogress__WEBPACK_IMPORTED_MODULE_0___default().done();
        _this23.makeToast("danger", _this23.$t("InvalidData"), _this23.$t("Failed"));
      });
    },
    //---------------------------------- Update_Infobip_SMS ----------------\\
    Update_Infobip_SMS: function Update_Infobip_SMS() {
      var _this24 = this;
      nprogress__WEBPACK_IMPORTED_MODULE_0___default().start();
      nprogress__WEBPACK_IMPORTED_MODULE_0___default().set(0.1);
      axios.post("update_infobip_config", {
        base_url: this.sms_settings.infobip.base_url,
        api_key: this.sms_settings.infobip.api_key,
        sender_from: this.sms_settings.infobip.sender_from
      }).then(function (response) {
        Fire.$emit("Event_sms");
        // Save the active tab so it can be restored after reload
        try {
          if (typeof window !== 'undefined' && window.localStorage) {
            window.localStorage.setItem('system_settings_submitted_tab', _this24.activeTab);
          }
        } catch (e) {}
        _this24.makeToast("success", _this24.$t("Successfully_Updated"), _this24.$t("Success"));
        nprogress__WEBPACK_IMPORTED_MODULE_0___default().done();
      })["catch"](function (error) {
        nprogress__WEBPACK_IMPORTED_MODULE_0___default().done();
        _this24.makeToast("danger", _this24.$t("InvalidData"), _this24.$t("Failed"));
      });
    },
    //---------------------------------- Get_SMS_Settings ----------------\\
    Get_SMS_Settings: function Get_SMS_Settings() {
      var _this25 = this;
      axios.get("get_sms_config").then(function (response) {
        _this25.sms_settings.twilio = response.data.twilio || _this25.sms_settings.twilio;
        _this25.sms_settings.termi = response.data.termi || _this25.sms_settings.termi;
        _this25.sms_settings.infobip = response.data.infobip || _this25.sms_settings.infobip;
        _this25.sms_settings.sms_gateway = response.data.sms_gateway || [];
        _this25.sms_settings.default_sms_gateway = response.data.default_sms_gateway || '';
      })["catch"](function (error) {
        // Silently fail if SMS settings endpoint doesn't exist
      });
    },
    //---------------------------------- Update_Appearance_Settings ----------------\\
    Update_Appearance_Settings: function Update_Appearance_Settings() {
      var _this26 = this;
      nprogress__WEBPACK_IMPORTED_MODULE_0___default().start();
      nprogress__WEBPACK_IMPORTED_MODULE_0___default().set(0.1);
      var self = this;
      self.appearance_data = new FormData();
      self.appearance_data.append("favicon", self.appearance_settings.favicon);
      self.appearance_data.append("logo", self.appearance_settings.logo);
      self.appearance_data.append("app_name", self.appearance_settings.app_name);
      self.appearance_data.append("seller_mobile_app_name", self.appearance_settings.seller_mobile_app_name || "");
      if (self.appearance_settings.seller_mobile_app_logo_file) {
        self.appearance_data.append("seller_mobile_app_logo", self.appearance_settings.seller_mobile_app_logo_file);
      }
      self.appearance_data.append("delivery_mobile_app_name", self.appearance_settings.delivery_mobile_app_name || "");
      if (self.appearance_settings.delivery_mobile_app_logo_file) {
        self.appearance_data.append("delivery_mobile_app_logo", self.appearance_settings.delivery_mobile_app_logo_file);
      }
      self.appearance_data.append("page_title_suffix", self.appearance_settings.page_title_suffix);
      self.appearance_data.append("developed_by", self.appearance_settings.developed_by);
      self.appearance_data.append("footer", self.appearance_settings.footer);
      self.appearance_data.append("login_hero_title", self.appearance_settings.login_hero_title || "");
      self.appearance_data.append("login_hero_subtitle", self.appearance_settings.login_hero_subtitle || "");
      self.appearance_data.append("login_panel_title", self.appearance_settings.login_panel_title || "");
      self.appearance_data.append("login_panel_subtitle", self.appearance_settings.login_panel_subtitle || "");
      self.appearance_data.append("_method", "put");
      axios.post("update_appearance_settings/" + self.appearance_settings.id, self.appearance_data).then(function (response) {
        Fire.$emit("Event_Appearance_Setting");
        _this26.makeToast("success", _this26.$t("Successfully_Updated"), _this26.$t("Success"));
        nprogress__WEBPACK_IMPORTED_MODULE_0___default().done();
        // Reload the page to reflect appearance changes
        setTimeout(function () {
          window.location.reload();
        }, 500);
      })["catch"](function (error) {
        var _error$response, _error$response2, _error$response3;
        var statusCode = error === null || error === void 0 || (_error$response = error.response) === null || _error$response === void 0 ? void 0 : _error$response.status;
        var responseMessage = error === null || error === void 0 || (_error$response2 = error.response) === null || _error$response2 === void 0 || (_error$response2 = _error$response2.data) === null || _error$response2 === void 0 ? void 0 : _error$response2.message;
        var validationErrors = error === null || error === void 0 || (_error$response3 = error.response) === null || _error$response3 === void 0 || (_error$response3 = _error$response3.data) === null || _error$response3 === void 0 ? void 0 : _error$response3.errors;
        var firstValidationMessage = validationErrors ? Object.values(validationErrors).flat()[0] : null;
        _this26.makeToast("danger", statusCode === 413 ? "Uploaded images are too large. Please choose the files again and they will be optimized automatically." : firstValidationMessage || responseMessage || _this26.$t("InvalidData"), _this26.$t("Failed"));
        nprogress__WEBPACK_IMPORTED_MODULE_0___default().done();
      });
    },
    //---------------------------------- Get_Appearance_Settings ----------------\\
    Get_Appearance_Settings: function Get_Appearance_Settings() {
      var _this27 = this;
      axios.get("get_appearance_settings").then(function (response) {
        _this27.appearance_settings = _objectSpread(_objectSpread({}, _this27.appearance_settings), response.data.settings || {});
      })["catch"](function (error) {
        // Silently fail if appearance settings endpoint doesn't exist
      });
    },
    //---------------------------------- Update_Mail_Settings ----------------\\
    Update_Mail_Settings: function Update_Mail_Settings() {
      var _this28 = this;
      if (this.$refs.mailObserver && this.$refs.mailObserver.validate) {
        this.$refs.mailObserver.validate().then(function (success) {
          if (!success) {
            _this28.makeToast("danger", _this28.$t("Please_fill_the_form_correctly"), _this28.$t("Failed"));
            return;
          }
          _this28.submitMailSettings();
        });
      } else {
        this.submitMailSettings();
      }
    },
    submitMailSettings: function submitMailSettings() {
      var _this29 = this;
      var silent = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
      nprogress__WEBPACK_IMPORTED_MODULE_0___default().start();
      nprogress__WEBPACK_IMPORTED_MODULE_0___default().set(0.1);
      return axios.put("update_config_mail/" + this.mail_settings.id, {
        mail_mailer: this.mail_settings.mail_mailer,
        host: this.mail_settings.host,
        port: this.mail_settings.port,
        sender_name: this.mail_settings.sender_name,
        sender_email: this.mail_settings.sender_email,
        username: this.mail_settings.username,
        password: this.mail_settings.password,
        encryption: this.mail_settings.encryption
      }).then(function (response) {
        Fire.$emit("Event_Smtp");
        // Save the active tab so it can be restored after reload
        try {
          if (typeof window !== 'undefined' && window.localStorage) {
            window.localStorage.setItem('system_settings_submitted_tab', _this29.activeTab);
          }
        } catch (e) {}
        if (!silent) {
          _this29.makeToast("success", _this29.$t("Successfully_Updated"), _this29.$t("Success"));
        }
        nprogress__WEBPACK_IMPORTED_MODULE_0___default().done();
        return response;
      })["catch"](function (error) {
        nprogress__WEBPACK_IMPORTED_MODULE_0___default().done();
        if (!silent) {
          _this29.makeToast("danger", _this29.$t("InvalidData"), _this29.$t("Failed"));
        }
        throw error;
      });
    },
    //---------------------------------- Get_Mail_Settings ----------------\\
    Get_Mail_Settings: function Get_Mail_Settings() {
      var _this30 = this;
      axios.get("get_config_mail").then(function (response) {
        _this30.mail_settings = response.data.server || _this30.mail_settings;
      })["catch"](function (error) {
        // Silently fail if mail settings endpoint doesn't exist
      });
    },
    //---------------------------------- Test_Mail_Settings ----------------\\
    Test_Mail_Settings: function Test_Mail_Settings() {
      var _this31 = this;
      if (this.isTestingMail) return;

      // First validate the form
      if (this.$refs.mailObserver && this.$refs.mailObserver.validate) {
        this.$refs.mailObserver.validate().then(function (success) {
          if (!success) {
            _this31.makeToast("danger", _this31.$t("Please_fill_the_form_correctly"), _this31.$t("Failed"));
            return;
          }

          // Save first, then test
          _this31.isTestingMail = true;
          nprogress__WEBPACK_IMPORTED_MODULE_0___default().start();
          nprogress__WEBPACK_IMPORTED_MODULE_0___default().set(0.1);

          // Save settings first (silently, without showing success toast)
          _this31.submitMailSettings(true).then(function () {
            // After saving, test the mail
            return axios.post("test_config_mail");
          }).then(function (response) {
            var msg = response.data && (response.data.message || response.data.msg) || _this31.$t("Successfully_Updated");
            _this31.makeToast("success", msg, _this31.$t("Success"));
          })["catch"](function (error) {
            var msg = error.response && error.response.data && (error.response.data.message || error.response.data.errors) || _this31.$t("InvalidData");
            _this31.makeToast("danger", msg, _this31.$t("Failed"));
          })["finally"](function () {
            _this31.isTestingMail = false;
            nprogress__WEBPACK_IMPORTED_MODULE_0___default().done();
          });
        });
      } else {
        // Fallback if validation observer is not available
        this.isTestingMail = true;
        nprogress__WEBPACK_IMPORTED_MODULE_0___default().start();
        nprogress__WEBPACK_IMPORTED_MODULE_0___default().set(0.1);
        this.submitMailSettings(true).then(function () {
          return axios.post("test_config_mail");
        }).then(function (response) {
          var msg = response.data && (response.data.message || response.data.msg) || _this31.$t("Successfully_Updated");
          _this31.makeToast("success", msg, _this31.$t("Success"));
        })["catch"](function (error) {
          var msg = error.response && error.response.data && (error.response.data.message || error.response.data.errors) || _this31.$t("InvalidData");
          _this31.makeToast("danger", msg, _this31.$t("Failed"));
        })["finally"](function () {
          _this31.isTestingMail = false;
          nprogress__WEBPACK_IMPORTED_MODULE_0___default().done();
        });
      }
    },
    //---------------------------------- Generate Backup --------------------\\
    GenerateBackup: function GenerateBackup() {
      var _this32 = this;
      nprogress__WEBPACK_IMPORTED_MODULE_0___default().start();
      nprogress__WEBPACK_IMPORTED_MODULE_0___default().set(0.1);
      axios.get("generate_new_backup").then(function (response) {
        Fire.$emit("Generate_Backup");

        // Check if backup was successful
        if (response.data && response.data.success === false) {
          // Backup generation failed
          var errorMsg = response.data.error || response.data.message || _this32.$t("Failed_to_generate_backup") || "Failed to generate backup";

          // Check if it's a mysqldump not found error
          if (errorMsg.includes('mysqldump') && errorMsg.includes('not found')) {
            _this32.backupError = true;
          }
          _this32.makeToast("danger", errorMsg, _this32.$t("Failed"));
        } else {
          // Clear any previous errors on success
          _this32.backupError = null;
          // Backup successful
          var message = _this32.$t("Backup_generated_successfully") || "Backup generated successfully";
          _this32.makeToast("success", message, _this32.$t("Success"));
        }
        setTimeout(function () {
          return nprogress__WEBPACK_IMPORTED_MODULE_0___default().done();
        }, 500);
      })["catch"](function (error) {
        // Handle error response
        var errorMsg = _this32.$t("Failed_to_generate_backup") || "Failed to generate backup";
        if (error.response && error.response.data) {
          if (error.response.data.error) {
            errorMsg = error.response.data.error;
          } else if (error.response.data.message) {
            errorMsg = error.response.data.message;
          }
        } else if (error.message) {
          errorMsg = error.message;
        }

        // Check if it's a mysqldump not found error
        if (errorMsg.includes('mysqldump') && errorMsg.includes('not found')) {
          _this32.backupError = true;
        }
        _this32.makeToast("danger", errorMsg, _this32.$t("Failed"));
        setTimeout(function () {
          return nprogress__WEBPACK_IMPORTED_MODULE_0___default().done();
        }, 500);
      });
    },
    //----------------------------------------  Get All backups -------------------------\\
    Get_Backups: function Get_Backups() {
      var _this33 = this;
      nprogress__WEBPACK_IMPORTED_MODULE_0___default().start();
      nprogress__WEBPACK_IMPORTED_MODULE_0___default().set(0.1);
      axios.get("get_backup").then(function (response) {
        _this33.backups = response.data.backups || [];
        _this33.totalRows = response.data.totalRows || 0;
        nprogress__WEBPACK_IMPORTED_MODULE_0___default().done();
      })["catch"](function (response) {
        nprogress__WEBPACK_IMPORTED_MODULE_0___default().done();
        // Silently fail if backup endpoint doesn't exist
      });
    },
    //--------------------------------- Delete Backup --------------------\\
    DeleteBackup: function DeleteBackup(date) {
      var _this34 = this;
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
          axios["delete"]("delete_backup/" + date).then(function () {
            _this34.$swal(_this34.$t("Delete_Deleted"), _this34.$t("Deleted_in_successfully"), "success");
            Fire.$emit("Delete_Backup");
          })["catch"](function () {
            _this34.$swal(_this34.$t("Delete_Failed"), _this34.$t("Delete_Therewassomethingwronge"), "warning");
          });
        }
      });
    },
    //---------------------------------- Clear_Cache ----------------\\
    Clear_Cache: function Clear_Cache() {
      var _this35 = this;
      nprogress__WEBPACK_IMPORTED_MODULE_0___default().start();
      nprogress__WEBPACK_IMPORTED_MODULE_0___default().set(0.1);
      axios.get("clear_cache").then(function (response) {
        _this35.makeToast("success", _this35.$t("Cache_cleared_successfully"), _this35.$t("Success"));
        nprogress__WEBPACK_IMPORTED_MODULE_0___default().done();
      })["catch"](function (error) {
        nprogress__WEBPACK_IMPORTED_MODULE_0___default().done();
        _this35.makeToast("danger", _this35.$t("Failed_to_clear_cache"), _this35.$t("Failed"));
      });
    },
    //---------------------------------- Get SETTINGS ----------------\\
    Get_Settings: function Get_Settings() {
      var _this36 = this;
      axios.get("get_Settings_data_api", {
        params: {
          include_secrets: 1
        }
      }).then(function (response) {
        // Merge to preserve default keys/reactivity for newly added settings fields
        _this36.setting = _objectSpread(_objectSpread({}, _this36.setting), response.data.settings || {});
        // Update date_format in Vuex store and localStorage cache
        try {
          if (_this36.setting.date_format) {
            // Update Vuex store (primary source from database)
            _this36.$store.commit('setDateFormat', _this36.setting.date_format);
            // Also update localStorage as cache
            localStorage.setItem('app_date_format', _this36.setting.date_format);
          }
        } catch (e) {}
        // Cache price_format in localStorage for frontend-only display helpers (e.g., POS)
        try {
          if (_this36.setting.price_format) {
            (0,_utils_priceFormat__WEBPACK_IMPORTED_MODULE_2__.cachePriceFormat)(_this36.setting.price_format);
          }
        } catch (e) {}
        // If current timeout is a custom value, keep it in the custom input
        try {
          var stm = Number(_this36.setting.session_timeout_minutes);
          if (!isNaN(stm) && stm > 0 && ![15, 30, 60].includes(stm)) {
            _this36.sessionTimeoutCustom = stm;
          }
        } catch (e) {}

        // Sync dark_mode and rtl with Vuex store if they exist in settings
        // If not in settings, use current Vuex store values
        if (_this36.setting.dark_mode !== undefined && _this36.setting.dark_mode !== null) {
          // Sync Vuex store with backend setting by directly setting the value
          if (_this36.getThemeMode.dark !== _this36.setting.dark_mode) {
            _this36.$store.state.config.themeMode.dark = _this36.setting.dark_mode;
          }
        } else {
          // If not in backend, initialize from Vuex store
          _this36.setting.dark_mode = _this36.getThemeMode.dark || false;
        }
        if (_this36.setting.rtl !== undefined && _this36.setting.rtl !== null) {
          // Sync Vuex store with backend setting by directly setting the value
          if (_this36.getThemeMode.rtl !== _this36.setting.rtl) {
            _this36.$store.state.config.themeMode.rtl = _this36.setting.rtl;
          }
        } else {
          // If not in backend, initialize from Vuex store
          _this36.setting.rtl = _this36.getThemeMode.rtl || false;
        }
        _this36.currencies = response.data.currencies;
        _this36.clients = response.data.clients;
        _this36.warehouses = response.data.warehouses;
        _this36.sms_gateway = response.data.sms_gateway;
        _this36.accounts = response.data.accounts || [];
        _this36.payment_methods = response.data.payment_methods || [];
        _this36.zones_array = response.data.zones_array;
        _this36.languages = response.data.languages;
        _this36.isLoading = false;
      })["catch"](function (error) {
        setTimeout(function () {
          _this36.isLoading = false;
        }, 500);
      });
    },
    //----------------------------------- Custom Fields Methods -------------------------------\\
    Get_CustomFields: function Get_CustomFields() {
      var _this37 = this;
      // Get customer fields
      var customerPromise = axios.get("custom-fields?entity_type=client").then(function (response) {
        _this37.customerFields = response.data.custom_fields || [];
      })["catch"](function (error) {
        console.error('Error loading customer fields:', error);
        // Return resolved promise even on error to allow Promise.all to complete
        return Promise.resolve();
      });

      // Get supplier fields
      var supplierPromise = axios.get("custom-fields?entity_type=provider").then(function (response) {
        _this37.supplierFields = response.data.custom_fields || [];
      })["catch"](function (error) {
        console.error('Error loading supplier fields:', error);
        // Return resolved promise even on error to allow Promise.all to complete
        return Promise.resolve();
      });

      // Return promise that resolves when both requests complete (even if one fails)
      return Promise.all([customerPromise, supplierPromise]);
    },
    New_CustomField: function New_CustomField(entityType) {
      var _this38 = this;
      this.reset_CustomField_Form();
      this.customField.entity_type = entityType;
      this.customFieldEditmode = false;
      setTimeout(function () {
        _this38.$bvModal.show("New_CustomField");
      }, 500);
    },
    Edit_CustomField: function Edit_CustomField(customField) {
      var _this39 = this;
      this.reset_CustomField_Form();
      this.customField = {
        id: customField.id,
        name: customField.name,
        field_type: customField.field_type,
        entity_type: customField.entity_type,
        is_required: customField.is_required,
        is_active: customField.is_active !== undefined ? customField.is_active : true,
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
      this.customFieldEditmode = true;
      setTimeout(function () {
        _this39.$bvModal.show("Edit_CustomField");
      }, 500);
    },
    Submit_CustomField: function Submit_CustomField() {
      var _this40 = this;
      this.$refs.Create_CustomField.validate().then(function (success) {
        if (!success) {
          _this40.makeToast("danger", _this40.$t("Please_fill_the_form_correctly"), _this40.$t("Failed"));
          return;
        }
        _this40.customFieldSubmitProcessing = true;
        var payload = {
          name: _this40.customField.name,
          field_type: _this40.customField.field_type,
          entity_type: _this40.customField.entity_type,
          is_required: _this40.customField.is_required,
          is_active: _this40.customField.is_active !== undefined ? _this40.customField.is_active : true,
          default_value: _this40.customField.default_value || null,
          sort_order: _this40.customField.sort_order || 0
        };

        // Handle select options
        if (_this40.customField.field_type === 'select') {
          var options = _this40.selectOptionsText.split('\n').map(function (opt) {
            return opt.trim();
          }).filter(function (opt) {
            return opt.length > 0;
          });
          payload.default_value = JSON.stringify(options);
        }
        var url = _this40.customFieldEditmode ? "custom-fields/".concat(_this40.customField.id) : "custom-fields";
        var method = _this40.customFieldEditmode ? "put" : "post";
        axios[method](url, payload).then(function (response) {
          _this40.makeToast("success", _this40.customFieldEditmode ? _this40.$t("Successfully_Updated") : _this40.$t("Successfully_Created"), _this40.$t("Success"));
          _this40.customFieldSubmitProcessing = false;
          _this40.$bvModal.hide(_this40.customFieldEditmode ? "Edit_CustomField" : "New_CustomField");
          _this40.Get_CustomFields().then(function () {
            // Force table re-render after data is refreshed
            _this40.$nextTick(function () {
              _this40.customFieldsTableKey += 1;
            });
          });
        })["catch"](function (error) {
          _this40.customFieldSubmitProcessing = false;
          _this40.makeToast("danger", _this40.$t("InvalidData"), _this40.$t("Failed"));
        });
      });
    },
    Delete_CustomField: function Delete_CustomField(id) {
      var _this41 = this;
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
          axios["delete"]("custom-fields/" + id).then(function (response) {
            _this41.makeToast("success", _this41.$t("Deleted_in_successfully"), _this41.$t("Success"));
            // Remove the item from local arrays immediately (optimistic update)
            _this41.customerFields = _this41.customerFields.filter(function (field) {
              return field.id !== id;
            });
            _this41.supplierFields = _this41.supplierFields.filter(function (field) {
              return field.id !== id;
            });
            // Refresh the data from server to ensure consistency
            _this41.Get_CustomFields().then(function () {
              // Force table re-render after data is refreshed
              _this41.$nextTick(function () {
                _this41.customFieldsTableKey += 1;
              });
            });
          })["catch"](function (error) {
            _this41.makeToast("danger", _this41.$t("InvalidData"), _this41.$t("Failed"));
          });
        }
      });
    },
    reset_CustomField_Form: function reset_CustomField_Form() {
      this.customField = {
        id: "",
        name: "",
        field_type: "",
        entity_type: "",
        is_required: false,
        is_active: true,
        default_value: "",
        sort_order: 0
      };
      this.selectOptionsText = "";
      this.customFieldEditmode = false;
    },
    onFieldTypeChange: function onFieldTypeChange() {
      if (this.customField.field_type !== 'select') {
        this.selectOptionsText = "";
      }
      if (this.customField.field_type === 'checkbox') {
        this.customField.default_value = "";
      }
    },
    updateSelectOptions: function updateSelectOptions() {
      // This is handled in Submit_CustomField
    },
    getFieldTypeLabel: function getFieldTypeLabel(type) {
      var field = this.fieldTypes.find(function (f) {
        return f.value === type;
      });
      return field ? field.label : type;
    }
  }),
  //end Methods

  //----------------------------- Created function-------------------

  created: function created() {
    var _this42 = this;
    // Determine which tab to show first (before loading data)
    // If route has ?tab=pos or ?tab=pos_settings, open that tab by default
    if (this.$route && this.$route.query && this.$route.query.tab) {
      var tabId = this.$route.query.tab;
      if (this.tabs && this.tabs.some(function (t) {
        return t.id === tabId;
      })) {
        this.activeTab = tabId;
        // Clear submission flag when explicitly navigating to a tab
        try {
          if (typeof window !== 'undefined' && window.localStorage) {
            window.localStorage.removeItem('system_settings_submitted_tab');
          }
        } catch (e) {}
      }
    } else {
      // Check if we're returning after a form submission
      try {
        if (typeof window !== 'undefined' && window.localStorage) {
          var submittedTab = window.localStorage.getItem('system_settings_submitted_tab');
          if (submittedTab) {
            // Valid tab IDs that can be restored
            var validTabs = ['general', 'appearance', 'localization', 'defaults', 'prefixes', 'payment', 'mail', 'sms', 'pos', 'pos_settings', 'zatca', 'invoice', 'backup', 'security', 'system'];
            if (validTabs.includes(submittedTab)) {
              // Restore the tab that was active when form was submitted
              this.activeTab = submittedTab;
              // Clear the submission flag after restoring
              window.localStorage.removeItem('system_settings_submitted_tab');
            } else {
              // Invalid tab, clear it
              window.localStorage.removeItem('system_settings_submitted_tab');
              this.activeTab = 'general';
            }
          } else {
            // Default to 'general' when coming from other pages (no route tab, no submitted tab)
            this.activeTab = 'general';
          }
        } else {
          // Default to 'general' if localStorage is not available
          this.activeTab = 'general';
        }
      } catch (e) {
        // Default to 'general' on error
        this.activeTab = 'general';
      }
    }

    // Always load data regardless of which tab is active
    this.Get_Settings();
    this.Get_Payment_Gateway();
    this.Get_Pos_Settings();
    this.Get_SMS_Settings();
    this.Get_Appearance_Settings();
    this.Get_Mail_Settings();
    this.Get_Backups();
    Fire.$on("Event_Setting", function () {
      _this42.Get_Settings();
    });
    Fire.$on("Event_payment", function () {
      _this42.Get_Payment_Gateway();
    });
    Fire.$on("Event_Pos_Settings", function () {
      _this42.Get_Pos_Settings();
    });
    Fire.$on("Event_sms", function () {
      _this42.Get_SMS_Settings();
    });
    Fire.$on("Event_Appearance_Setting", function () {
      _this42.Get_Appearance_Settings();
    });
    Fire.$on("Event_Smtp", function () {
      _this42.Get_Mail_Settings();
    });
    Fire.$on("Generate_Backup", function () {
      setTimeout(function () {
        _this42.Get_Backups();
      }, 500);
    });
    Fire.$on("Delete_Backup", function () {
      setTimeout(function () {
        _this42.Get_Backups();
        nprogress__WEBPACK_IMPORTED_MODULE_0___default().done();
      }, 500);
    });
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/settings/system_settings.vue?vue&type=template&id=7bd1aea4&scoped=true":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/settings/system_settings.vue?vue&type=template&id=7bd1aea4&scoped=true ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render),
/* harmony export */   staticRenderFns: () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render=function render(){var _vm=this,_c=_vm._self._c;return _c("div",{staticClass:"main-content"},[_c("breadcumb",{attrs:{page:_vm.$t("SystemSettings"),folder:_vm.$t("Settings")}}),_vm._v(" "),_vm.isLoading?_c("div",{staticClass:"loading_page spinner spinner-primary mr-3"}):_vm._e(),_vm._v(" "),!_vm.isLoading?_c("div",[_c("b-card",{staticClass:"settings-container",attrs:{"no-body":""}},[_c("b-row",{attrs:{"no-gutters":""}},[_c("b-col",{staticClass:"d-md-none mobile-tab-selector","class":{"sidebar-open":_vm.isSidebarOpenOnMobile},attrs:{cols:"12"}},[_c("b-form-select",{staticClass:"mobile-tab-select",attrs:{options:_vm.tabs.map(function(tab){return{value:tab.id,text:tab.label};}),size:"lg"},model:{value:_vm.activeTab,callback:function callback($$v){_vm.activeTab=$$v;},expression:"activeTab"}})],1),_vm._v(" "),_c("b-col",{staticClass:"settings-sidebar d-none d-md-block",attrs:{cols:"12",md:"3"}},[_c("div",{staticClass:"settings-tabs-nav"},[_c("div",{staticClass:"settings-header"},[_c("h5",{staticClass:"mb-0"},[_vm._v(_vm._s(_vm.$t("SystemSettings")))])]),_vm._v(" "),_c("nav",{staticClass:"settings-nav"},_vm._l(_vm.tabs,function(tab){return _c("button",{key:tab.id,"class":["settings-nav-item",{active:_vm.activeTab===tab.id}],attrs:{type:"button"},on:{click:function click($event){_vm.activeTab=tab.id;}}},[_c("i",{"class":tab.icon}),_vm._v(" "),_c("span",[_vm._v(_vm._s(tab.label))])]);}),0)])]),_vm._v(" "),_c("b-col",{staticClass:"settings-content",attrs:{cols:"12",md:"9"}},[_c("div",{staticClass:"settings-content-wrapper"},[_c("div",{staticClass:"settings-content-header"},[_c("h4",{staticClass:"mb-0"},[_vm._v(_vm._s(_vm.getActiveTabLabel()))]),_vm._v(" "),_c("p",{staticClass:"text-muted mb-0"},[_vm._v(_vm._s(_vm.getActiveTabDescription()))])]),_vm._v(" "),_c("div",{staticClass:"settings-content-body"},[_vm.activeTab==="general"?_c("div",{staticClass:"tab-content"},[_c("validation-observer",{ref:"generalObserver"},[_c("b-row",[_c("b-col",{staticClass:"mb-3",attrs:{lg:"6",md:"6",sm:"12"}},[_c("validation-provider",{attrs:{name:"Company Name",rules:{required:true}},scopedSlots:_vm._u([{key:"default",fn:function fn(validationContext){return[_c("b-form-group",{attrs:{label:_vm.$t("CompanyName")+" "+"*"}},[_c("b-form-input",{attrs:{state:_vm.getValidationState(validationContext),"aria-describedby":"Company-feedback",placeholder:_vm.$t("CompanyName")},model:{value:_vm.setting.CompanyName,callback:function callback($$v){_vm.$set(_vm.setting,"CompanyName",$$v);},expression:"setting.CompanyName"}}),_vm._v(" "),_c("b-form-invalid-feedback",{attrs:{id:"Company-feedback"}},[_vm._v(_vm._s(validationContext.errors[0]))])],1)];}}],null,false,261751878)})],1),_vm._v(" "),_c("b-col",{staticClass:"mb-3",attrs:{lg:"6",md:"6",sm:"12"}},[_c("validation-provider",{attrs:{name:"Company Phone",rules:{required:true}},scopedSlots:_vm._u([{key:"default",fn:function fn(validationContext){return[_c("b-form-group",{attrs:{label:_vm.$t("CompanyPhone")+" "+"*"}},[_c("b-form-input",{attrs:{state:_vm.getValidationState(validationContext),"aria-describedby":"Phone-feedback",placeholder:_vm.$t("CompanyPhone")},model:{value:_vm.setting.CompanyPhone,callback:function callback($$v){_vm.$set(_vm.setting,"CompanyPhone",$$v);},expression:"setting.CompanyPhone"}}),_vm._v(" "),_c("b-form-invalid-feedback",{attrs:{id:"Phone-feedback"}},[_vm._v(_vm._s(validationContext.errors[0]))])],1)];}}],null,false,3761040285)})],1),_vm._v(" "),_c("b-col",{staticClass:"mb-3",attrs:{lg:"6",md:"6",sm:"12"}},[_c("validation-provider",{attrs:{name:"Email",rules:{required:true}},scopedSlots:_vm._u([{key:"default",fn:function fn(validationContext){return[_c("b-form-group",{attrs:{label:_vm.$t("DefaultEmail")+" "+"*"}},[_c("b-form-input",{attrs:{state:_vm.getValidationState(validationContext),"aria-describedby":"Email-feedback",placeholder:_vm.$t("DefaultEmail")},model:{value:_vm.setting.email,callback:function callback($$v){_vm.$set(_vm.setting,"email",$$v);},expression:"setting.email"}}),_vm._v(" "),_c("b-form-invalid-feedback",{attrs:{id:"Email-feedback"}},[_vm._v(_vm._s(validationContext.errors[0]))])],1)];}}],null,false,3474835978)})],1),_vm._v(" "),_c("b-col",{staticClass:"mb-3",attrs:{lg:"6",md:"6",sm:"12"}},[_c("b-form-group",{attrs:{label:_vm.$t("ChangeLogo")}},[_c("input",{staticClass:"form-control",attrs:{type:"file",accept:"image/*"},on:{change:_vm.onFileSelected}}),_vm._v(" "),_c("small",{staticClass:"text-muted d-block mt-1"},[_vm._v("Max file size: 200KB")])])],1),_vm._v(" "),_c("b-col",{staticClass:"mb-3",attrs:{lg:"12",md:"12",sm:"12"}},[_c("validation-provider",{attrs:{name:"Adress",rules:{required:true}},scopedSlots:_vm._u([{key:"default",fn:function fn(validationContext){return[_c("b-form-group",{attrs:{label:_vm.$t("Adress")+" "+"*"}},[_c("textarea",{directives:[{name:"model",rawName:"v-model",value:_vm.setting.CompanyAdress,expression:"setting.CompanyAdress"}],staticClass:"form-control",attrs:{state:_vm.getValidationState(validationContext),"aria-describedby":"Adress-feedback",placeholder:_vm.$t("Afewwords"),rows:"3"},domProps:{value:_vm.setting.CompanyAdress},on:{input:function input($event){if($event.target.composing)return;_vm.$set(_vm.setting,"CompanyAdress",$event.target.value);}}}),_vm._v(" "),_c("b-form-invalid-feedback",{attrs:{id:"Adress-feedback"}},[_vm._v(_vm._s(validationContext.errors[0]))])],1)];}}],null,false,2578883557)})],1),_vm._v(" "),_c("b-col",{staticClass:"mb-3",attrs:{lg:"6",md:"6",sm:"12"}},[_c("validation-provider",{attrs:{name:"footer",rules:{required:true}},scopedSlots:_vm._u([{key:"default",fn:function fn(validationContext){return[_c("b-form-group",{attrs:{label:_vm.$t("footer")+" "+"*"}},[_c("b-form-input",{attrs:{state:_vm.getValidationState(validationContext),"aria-describedby":"footer-feedback"},model:{value:_vm.setting.footer,callback:function callback($$v){_vm.$set(_vm.setting,"footer",$$v);},expression:"setting.footer"}}),_vm._v(" "),_c("b-form-invalid-feedback",{attrs:{id:"footer-feedback"}},[_vm._v(_vm._s(validationContext.errors[0]))])],1)];}}],null,false,4134237762)})],1),_vm._v(" "),_c("b-col",{staticClass:"mb-3",attrs:{lg:"6",md:"6",sm:"12"}},[_c("validation-provider",{attrs:{name:"developed by",rules:{required:true}},scopedSlots:_vm._u([{key:"default",fn:function fn(validationContext){return[_c("b-form-group",{attrs:{label:_vm.$t("developed_by")+" "+"*"}},[_c("b-form-input",{attrs:{state:_vm.getValidationState(validationContext),"aria-describedby":"developed_by-feedback"},model:{value:_vm.setting.developed_by,callback:function callback($$v){_vm.$set(_vm.setting,"developed_by",$$v);},expression:"setting.developed_by"}}),_vm._v(" "),_c("b-form-invalid-feedback",{attrs:{id:"developed_by-feedback"}},[_vm._v(_vm._s(validationContext.errors[0]))])],1)];}}],null,false,2560948866)})],1)],1),_vm._v(" "),_c("b-row",{staticClass:"mt-4"},[_c("b-col",{staticClass:"d-flex justify-content-end",attrs:{lg:"12"}},[_c("b-button",{attrs:{variant:"primary",size:"lg"},on:{click:function click($event){return _vm.Submit_General_Settings();}}},[_vm._v("\n"+_vm._s(_vm.$t("submit"))+"\n                        ")])],1)],1)],1)],1):_vm._e(),_vm._v(" "),_c("div",{directives:[{name:"show",rawName:"v-show",value:_vm.activeTab==="appearance",expression:"activeTab === 'appearance'"}],staticClass:"tab-content"},[_c("div",{staticClass:"mb-4"},[_c("h5",{staticClass:"mb-3"},[_vm._v(_vm._s(_vm.$t("Appearance_Settings")))]),_vm._v(" "),_c("b-row",[_c("b-col",{staticClass:"mb-3",attrs:{lg:"6",md:"6",sm:"12"}},[_c("validation-provider",{attrs:{name:"App Name",rules:{required:true}},scopedSlots:_vm._u([{key:"default",fn:function fn(validationContext){return[_c("b-form-group",{attrs:{label:_vm.$t("app_name")+" *"}},[_c("b-form-input",{attrs:{state:_vm.getValidationState(validationContext),"aria-describedby":"app-name-feedback"},model:{value:_vm.appearance_settings.app_name,callback:function callback($$v){_vm.$set(_vm.appearance_settings,"app_name",$$v);},expression:"appearance_settings.app_name"}}),_vm._v(" "),_c("b-form-invalid-feedback",{attrs:{id:"app-name-feedback"}},[_vm._v(_vm._s(validationContext.errors[0]))])],1)];}}],null,false,839005243)})],1),_vm._v(" "),_c("b-col",{staticClass:"mb-2",attrs:{cols:"12"}},[_c("div",{staticClass:"font-weight-bold text-primary"},[_vm._v("Seller App Branding")]),_vm._v(" "),_c("small",{staticClass:"text-muted"},[_vm._v("Customize the seller mobile app name and logo shown on the login screen.")])]),_vm._v(" "),_c("b-col",{staticClass:"mb-3",attrs:{lg:"6",md:"6",sm:"12"}},[_c("b-form-group",{attrs:{label:"Seller App Name"}},[_c("b-form-input",{attrs:{placeholder:"e.g., 17G Seller"},model:{value:_vm.appearance_settings.seller_mobile_app_name,callback:function callback($$v){_vm.$set(_vm.appearance_settings,"seller_mobile_app_name",$$v);},expression:"appearance_settings.seller_mobile_app_name"}}),_vm._v(" "),_c("small",{staticClass:"form-text text-muted"},[_vm._v("Leave empty to fallback to the main app name.")])],1)],1),_vm._v(" "),_c("b-col",{staticClass:"mb-3",attrs:{lg:"6",md:"6",sm:"12"}},[_c("b-form-group",{attrs:{label:"Seller App Logo"}},[_c("div",{staticClass:"d-flex align-items-center"},[_vm.appearance_settings.seller_mobile_app_logo_url||_vm.appearance_settings.seller_mobile_app_logo?_c("div",{staticClass:"mr-3"},[_c("img",{staticStyle:{width:"80px",height:"80px","object-fit":"contain",border:"1px solid #ddd","border-radius":"12px"},attrs:{src:_vm.appearance_settings.seller_mobile_app_logo_url||"/images/"+_vm.appearance_settings.seller_mobile_app_logo,alt:"Seller App Logo"}})]):_vm._e(),_vm._v(" "),_c("div",[_c("b-form-file",{attrs:{accept:"image/png,image/jpeg,image/webp",placeholder:_vm.$t("Choose file..."),"browse-text":_vm.$t("Browse")},on:{input:_vm.onSellerMobileAppLogoSelected},model:{value:_vm.appearance_settings.seller_mobile_app_logo_file,callback:function callback($$v){_vm.$set(_vm.appearance_settings,"seller_mobile_app_logo_file",$$v);},expression:"appearance_settings.seller_mobile_app_logo_file"}}),_vm._v(" "),_c("small",{staticClass:"form-text text-muted"},[_vm._v("Recommended: 512x512px PNG with transparent background. Large files are optimized automatically.")])],1)])])],1),_vm._v(" "),_c("b-col",{staticClass:"mb-2 mt-2",attrs:{cols:"12"}},[_c("div",{staticClass:"font-weight-bold text-primary"},[_vm._v("Delivery App Branding")]),_vm._v(" "),_c("small",{staticClass:"text-muted"},[_vm._v("Customize the delivery mobile app name and logo shown on the login screen.")])]),_vm._v(" "),_c("b-col",{staticClass:"mb-3",attrs:{lg:"6",md:"6",sm:"12"}},[_c("b-form-group",{attrs:{label:"Delivery App Name"}},[_c("b-form-input",{attrs:{placeholder:"e.g., 17G Delivery"},model:{value:_vm.appearance_settings.delivery_mobile_app_name,callback:function callback($$v){_vm.$set(_vm.appearance_settings,"delivery_mobile_app_name",$$v);},expression:"appearance_settings.delivery_mobile_app_name"}}),_vm._v(" "),_c("small",{staticClass:"form-text text-muted"},[_vm._v("Leave empty to keep the delivery app default name.")])],1)],1),_vm._v(" "),_c("b-col",{staticClass:"mb-3",attrs:{lg:"6",md:"6",sm:"12"}},[_c("b-form-group",{attrs:{label:"Delivery App Logo"}},[_c("div",{staticClass:"d-flex align-items-center"},[_vm.appearance_settings.delivery_mobile_app_logo_url||_vm.appearance_settings.delivery_mobile_app_logo?_c("div",{staticClass:"mr-3"},[_c("img",{staticStyle:{width:"80px",height:"80px","object-fit":"contain",border:"1px solid #ddd","border-radius":"12px"},attrs:{src:_vm.appearance_settings.delivery_mobile_app_logo_url||"/images/"+_vm.appearance_settings.delivery_mobile_app_logo,alt:"Delivery App Logo"}})]):_vm._e(),_vm._v(" "),_c("div",[_c("b-form-file",{attrs:{accept:"image/png,image/jpeg,image/webp",placeholder:_vm.$t("Choose file..."),"browse-text":_vm.$t("Browse")},on:{input:_vm.onDeliveryMobileAppLogoSelected},model:{value:_vm.appearance_settings.delivery_mobile_app_logo_file,callback:function callback($$v){_vm.$set(_vm.appearance_settings,"delivery_mobile_app_logo_file",$$v);},expression:"appearance_settings.delivery_mobile_app_logo_file"}}),_vm._v(" "),_c("small",{staticClass:"form-text text-muted"},[_vm._v("Recommended: 512x512px PNG with transparent background. Large files are optimized automatically.")])],1)])])],1),_vm._v(" "),_c("b-col",{staticClass:"mb-3",attrs:{lg:"6",md:"6",sm:"12"}},[_c("validation-provider",{attrs:{name:"Page Title Suffix",rules:{required:true}},scopedSlots:_vm._u([{key:"default",fn:function fn(validationContext){return[_c("b-form-group",{attrs:{label:_vm.$t("page_title_suffix")+" *"}},[_c("b-form-input",{attrs:{state:_vm.getValidationState(validationContext),"aria-describedby":"page-title-feedback"},model:{value:_vm.appearance_settings.page_title_suffix,callback:function callback($$v){_vm.$set(_vm.appearance_settings,"page_title_suffix",$$v);},expression:"appearance_settings.page_title_suffix"}}),_vm._v(" "),_c("b-form-invalid-feedback",{attrs:{id:"page-title-feedback"}},[_vm._v(_vm._s(validationContext.errors[0]))])],1)];}}],null,false,1351427163)})],1),_vm._v(" "),_c("b-col",{staticClass:"mb-3",attrs:{lg:"6",md:"6",sm:"12"}},[_c("validation-provider",{ref:"AppearanceLogo",attrs:{name:"Logo",rules:"mimes:image/*"},scopedSlots:_vm._u([{key:"default",fn:function fn(_ref){var validate=_ref.validate,valid=_ref.valid,errors=_ref.errors;return _c("b-form-group",{attrs:{label:_vm.$t("ChangeLogo")}},[_c("input",{staticClass:"form-control","class":{"is-invalid":!!errors.length},attrs:{state:errors[0]?false:valid?true:null,type:"file"},on:{change:_vm.onAppearanceLogoSelected}}),_vm._v(" "),_c("b-form-invalid-feedback",{attrs:{id:"AppearanceLogo-feedback"}},[_vm._v(_vm._s(errors[0]))])],1);}}],null,false,1032366109)})],1),_vm._v(" "),_c("b-col",{staticClass:"mb-3",attrs:{lg:"6",md:"6",sm:"12"}},[_c("validation-provider",{ref:"AppearanceFavicon",attrs:{name:"Favicon",rules:"mimes:image/*"},scopedSlots:_vm._u([{key:"default",fn:function fn(_ref2){var validate=_ref2.validate,valid=_ref2.valid,errors=_ref2.errors;return _c("b-form-group",{attrs:{label:_vm.$t("ChangeFavicon")}},[_c("input",{staticClass:"form-control","class":{"is-invalid":!!errors.length},attrs:{state:errors[0]?false:valid?true:null,type:"file"},on:{change:_vm.onAppearanceFaviconSelected}}),_vm._v(" "),_c("b-form-invalid-feedback",{attrs:{id:"AppearanceFavicon-feedback"}},[_vm._v(_vm._s(errors[0]))])],1);}}],null,false,3067286732)})],1),_vm._v(" "),_c("b-col",{staticClass:"mb-3",attrs:{lg:"6",md:"6",sm:"12"}},[_c("validation-provider",{attrs:{name:"developed by",rules:{required:true}},scopedSlots:_vm._u([{key:"default",fn:function fn(validationContext){return[_c("b-form-group",{attrs:{label:_vm.$t("developed_by")+" "+"*"}},[_c("b-form-input",{attrs:{state:_vm.getValidationState(validationContext),"aria-describedby":"appearance-developed_by-feedback"},model:{value:_vm.appearance_settings.developed_by,callback:function callback($$v){_vm.$set(_vm.appearance_settings,"developed_by",$$v);},expression:"appearance_settings.developed_by"}}),_vm._v(" "),_c("b-form-invalid-feedback",{attrs:{id:"appearance-developed_by-feedback"}},[_vm._v(_vm._s(validationContext.errors[0]))])],1)];}}],null,false,4262986384)})],1),_vm._v(" "),_c("b-col",{staticClass:"mb-3",attrs:{lg:"6",md:"6",sm:"12"}},[_c("validation-provider",{attrs:{name:"footer",rules:{required:true}},scopedSlots:_vm._u([{key:"default",fn:function fn(validationContext){return[_c("b-form-group",{attrs:{label:_vm.$t("footer")+" "+"*"}},[_c("b-form-input",{attrs:{state:_vm.getValidationState(validationContext),"aria-describedby":"appearance-footer-feedback"},model:{value:_vm.appearance_settings.footer,callback:function callback($$v){_vm.$set(_vm.appearance_settings,"footer",$$v);},expression:"appearance_settings.footer"}}),_vm._v(" "),_c("b-form-invalid-feedback",{attrs:{id:"appearance-footer-feedback"}},[_vm._v(_vm._s(validationContext.errors[0]))])],1)];}}],null,false,3819795728)})],1)],1)],1),_vm._v(" "),_c("hr",{staticClass:"my-4"}),_vm._v(" "),_c("div",{staticClass:"mb-4"},[_c("h5",{staticClass:"mb-3"},[_vm._v(_vm._s(_vm.$t("Appearance_Settings"))+" - Login Page")]),_vm._v(" "),_c("b-row",[_c("b-col",{staticClass:"mb-3",attrs:{lg:"6",md:"6",sm:"12"}},[_c("b-form-group",{attrs:{label:"Login hero title"}},[_c("b-form-input",{model:{value:_vm.appearance_settings.login_hero_title,callback:function callback($$v){_vm.$set(_vm.appearance_settings,"login_hero_title",$$v);},expression:"appearance_settings.login_hero_title"}})],1)],1),_vm._v(" "),_c("b-col",{staticClass:"mb-3",attrs:{lg:"6",md:"6",sm:"12"}},[_c("b-form-group",{attrs:{label:"Login hero subtitle"}},[_c("b-form-input",{model:{value:_vm.appearance_settings.login_hero_subtitle,callback:function callback($$v){_vm.$set(_vm.appearance_settings,"login_hero_subtitle",$$v);},expression:"appearance_settings.login_hero_subtitle"}})],1)],1),_vm._v(" "),_c("b-col",{staticClass:"mb-3",attrs:{lg:"6",md:"6",sm:"12"}},[_c("b-form-group",{attrs:{label:"Login panel title"}},[_c("b-form-input",{model:{value:_vm.appearance_settings.login_panel_title,callback:function callback($$v){_vm.$set(_vm.appearance_settings,"login_panel_title",$$v);},expression:"appearance_settings.login_panel_title"}})],1)],1),_vm._v(" "),_c("b-col",{staticClass:"mb-3",attrs:{lg:"6",md:"6",sm:"12"}},[_c("b-form-group",{attrs:{label:"Login panel subtitle"}},[_c("b-form-input",{model:{value:_vm.appearance_settings.login_panel_subtitle,callback:function callback($$v){_vm.$set(_vm.appearance_settings,"login_panel_subtitle",$$v);},expression:"appearance_settings.login_panel_subtitle"}})],1)],1)],1)],1),_vm._v(" "),_c("b-row",{staticClass:"mt-4"},[_c("b-col",{staticClass:"d-flex justify-content-end",attrs:{lg:"12"}},[_c("b-button",{attrs:{variant:"primary",size:"lg"},on:{click:function click($event){return _vm.Submit_Appearance_Settings();}}},[_vm._v("\n"+_vm._s(_vm.$t("submit"))+"\n                        ")])],1)],1)],1),_vm._v(" "),_c("div",{directives:[{name:"show",rawName:"v-show",value:_vm.activeTab==="localization",expression:"activeTab === 'localization'"}],staticClass:"tab-content"},[_c("b-row",[_c("b-col",{staticClass:"mb-3",attrs:{lg:"6",md:"6",sm:"12"}},[_c("b-form-group",{attrs:{label:_vm.$t("DefaultCurrency")}},[_c("v-select",{attrs:{reduce:function reduce(label){return label.value;},placeholder:_vm.$t("Choose_Currency"),options:_vm.currencies.map(function(currencies){return{label:currencies.name,value:currencies.id};}),clearable:false},model:{value:_vm.setting.currency_id,callback:function callback($$v){_vm.$set(_vm.setting,"currency_id",$$v);},expression:"setting.currency_id"}})],1)],1),_vm._v(" "),_c("b-col",{staticClass:"mb-3",attrs:{lg:"6",md:"6",sm:"12"}},[_c("b-form-group",{attrs:{label:_vm.$t("DefaultLanguage")}},[_c("v-select",{attrs:{reduce:function reduce(label){return label.value;},placeholder:_vm.$t("DefaultLanguage"),options:_vm.languages.map(function(languages){return{label:languages.name,value:languages.locale};})},model:{value:_vm.setting.default_language,callback:function callback($$v){_vm.$set(_vm.setting,"default_language",$$v);},expression:"setting.default_language"}})],1)],1),_vm._v(" "),_c("b-col",{staticClass:"mb-3",attrs:{lg:"6",md:"6",sm:"12"}},[_c("b-form-group",{attrs:{label:_vm.$t("Time_Zone")}},[_c("v-select",{attrs:{placeholder:_vm.$t("Time_Zone"),reduce:function reduce(label){return label.value;},options:_vm.zones_array.map(function(zones_array){return{label:zones_array.label,value:zones_array.zone};})},on:{input:_vm.Selected_Time_Zone},model:{value:_vm.setting.timezone,callback:function callback($$v){_vm.$set(_vm.setting,"timezone",$$v);},expression:"setting.timezone"}})],1)],1),_vm._v(" "),_c("b-col",{staticClass:"mb-3",attrs:{lg:"6",md:"6",sm:"12"}},[_c("b-form-group",{attrs:{label:_vm.$t("Date_Format")||"Date Format"}},[_c("v-select",{attrs:{reduce:function reduce(label){return label.value;},placeholder:_vm.$t("Date_Format")||"Choose Date Format",options:_vm.dateFormatOptions,clearable:false},model:{value:_vm.setting.date_format,callback:function callback($$v){_vm.$set(_vm.setting,"date_format",$$v);},expression:"setting.date_format"}})],1)],1),_vm._v(" "),_c("b-col",{staticClass:"mb-3",attrs:{lg:"6",md:"6",sm:"12"}},[_c("b-form-group",{attrs:{label:_vm.$t("Price_Format")}},[_c("b-form-select",{attrs:{options:_vm.priceFormatOptions,"value-field":"value","text-field":"label"},model:{value:_vm.setting.price_format,callback:function callback($$v){_vm.$set(_vm.setting,"price_format",$$v);},expression:"setting.price_format"}})],1)],1),_vm._v(" "),_c("b-col",{staticClass:"mb-3",attrs:{lg:"6",md:"6",sm:"12"}},[_c("b-form-group",{attrs:{label:_vm.$t("Show_Languages")}},[_c("label",{staticClass:"switch switch-primary mr-3"},[_vm._v("\n                            "+_vm._s(_vm.$t("Show_Languages"))+"\n                            "),_c("input",{directives:[{name:"model",rawName:"v-model",value:_vm.setting.show_language,expression:"setting.show_language"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(_vm.setting.show_language)?_vm._i(_vm.setting.show_language,null)>-1:_vm.setting.show_language},on:{change:function change($event){var $$a=_vm.setting.show_language,$$el=$event.target,$$c=$$el.checked?true:false;if(Array.isArray($$a)){var $$v=null,$$i=_vm._i($$a,$$v);if($$el.checked){$$i<0&&_vm.$set(_vm.setting,"show_language",$$a.concat([$$v]));}else{$$i>-1&&_vm.$set(_vm.setting,"show_language",$$a.slice(0,$$i).concat($$a.slice($$i+1)));}}else{_vm.$set(_vm.setting,"show_language",$$c);}}}}),_vm._v(" "),_c("span",{staticClass:"slider"})])])],1),_vm._v(" "),_c("b-col",{staticClass:"mb-3",attrs:{lg:"6",md:"6",sm:"12"}},[_c("b-form-group",{attrs:{label:"Sidebar Layout"}},[_c("b-form-select",{attrs:{options:_vm.sidebarLayoutOptions},model:{value:_vm.sidebarLayoutModel,callback:function callback($$v){_vm.sidebarLayoutModel=$$v;},expression:"sidebarLayoutModel"}})],1)],1),_vm._v(" "),_c("b-col",{staticClass:"mb-3",attrs:{lg:"6",md:"6",sm:"12"}},[_c("b-form-group",{attrs:{label:_vm.$t("DarkMode")||"Dark Mode"}},[_c("label",{staticClass:"switch switch-primary mr-3"},[_vm._v("\n                            "+_vm._s(_vm.$t("DarkMode")||"Dark Mode")+"\n                            "),_c("input",{directives:[{name:"model",rawName:"v-model",value:_vm.setting.dark_mode,expression:"setting.dark_mode"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(_vm.setting.dark_mode)?_vm._i(_vm.setting.dark_mode,null)>-1:_vm.setting.dark_mode},on:{change:function change($event){var $$a=_vm.setting.dark_mode,$$el=$event.target,$$c=$$el.checked?true:false;if(Array.isArray($$a)){var $$v=null,$$i=_vm._i($$a,$$v);if($$el.checked){$$i<0&&_vm.$set(_vm.setting,"dark_mode",$$a.concat([$$v]));}else{$$i>-1&&_vm.$set(_vm.setting,"dark_mode",$$a.slice(0,$$i).concat($$a.slice($$i+1)));}}else{_vm.$set(_vm.setting,"dark_mode",$$c);}}}}),_vm._v(" "),_c("span",{staticClass:"slider"})])])],1),_vm._v(" "),_c("b-col",{staticClass:"mb-3",attrs:{lg:"6",md:"6",sm:"12"}},[_c("b-form-group",{attrs:{label:_vm.$t("RTL")||"RTL (Right-to-Left)"}},[_c("label",{staticClass:"switch switch-primary mr-3"},[_vm._v("\n                            "+_vm._s(_vm.$t("RTL")||"RTL (Right-to-Left)")+"\n                            "),_c("input",{directives:[{name:"model",rawName:"v-model",value:_vm.setting.rtl,expression:"setting.rtl"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(_vm.setting.rtl)?_vm._i(_vm.setting.rtl,null)>-1:_vm.setting.rtl},on:{change:function change($event){var $$a=_vm.setting.rtl,$$el=$event.target,$$c=$$el.checked?true:false;if(Array.isArray($$a)){var $$v=null,$$i=_vm._i($$a,$$v);if($$el.checked){$$i<0&&_vm.$set(_vm.setting,"rtl",$$a.concat([$$v]));}else{$$i>-1&&_vm.$set(_vm.setting,"rtl",$$a.slice(0,$$i).concat($$a.slice($$i+1)));}}else{_vm.$set(_vm.setting,"rtl",$$c);}}}}),_vm._v(" "),_c("span",{staticClass:"slider"})])])],1)],1),_vm._v(" "),_c("b-row",{staticClass:"mt-4"},[_c("b-col",{staticClass:"d-flex justify-content-end",attrs:{lg:"12"}},[_c("b-button",{attrs:{variant:"primary",size:"lg"},on:{click:function click($event){return _vm.Submit_General_Settings();}}},[_vm._v("\n"+_vm._s(_vm.$t("submit"))+"\n                        ")])],1)],1)],1),_vm._v(" "),_c("div",{directives:[{name:"show",rawName:"v-show",value:_vm.activeTab==="defaults",expression:"activeTab === 'defaults'"}],staticClass:"tab-content"},[_c("b-row",[_c("b-col",{staticClass:"mb-3",attrs:{lg:"6",md:"6",sm:"12"}},[_c("b-form-group",{attrs:{label:_vm.$t("DefaultCustomer")}},[_c("v-select",{attrs:{reduce:function reduce(label){return label.value;},placeholder:_vm.$t("Choose_Customer"),options:_vm.clients.map(function(clients){return{label:clients.name,value:clients.id};})},model:{value:_vm.setting.client_id,callback:function callback($$v){_vm.$set(_vm.setting,"client_id",$$v);},expression:"setting.client_id"}})],1)],1),_vm._v(" "),_c("b-col",{staticClass:"mb-3",attrs:{lg:"6",md:"6",sm:"12"}},[_c("b-form-group",{attrs:{label:_vm.$t("DefaultWarehouse")}},[_c("v-select",{attrs:{reduce:function reduce(label){return label.value;},placeholder:_vm.$t("Choose_Warehouse"),options:_vm.warehouses.map(function(warehouses){return{label:warehouses.name,value:warehouses.id};})},model:{value:_vm.setting.warehouse_id,callback:function callback($$v){_vm.$set(_vm.setting,"warehouse_id",$$v);},expression:"setting.warehouse_id"}})],1)],1),_vm._v(" "),_c("b-col",{staticClass:"mb-3",attrs:{lg:"6",md:"6",sm:"12"}},[_c("b-form-group",{attrs:{label:_vm.$t("Default_SMS_Gateway")}},[_c("v-select",{attrs:{reduce:function reduce(label){return label.value;},placeholder:_vm.$t("Choose_SMS_Gateway"),options:_vm.sms_gateway.map(function(sms_gateway){return{label:sms_gateway.title,value:sms_gateway.id};})},model:{value:_vm.setting.sms_gateway,callback:function callback($$v){_vm.$set(_vm.setting,"sms_gateway",$$v);},expression:"setting.sms_gateway"}})],1)],1),_vm._v(" "),_c("b-col",{staticClass:"mb-3",attrs:{lg:"6",md:"6",sm:"12"}},[_c("b-form-group",{attrs:{label:_vm.$t("Default_Account")}},[_c("v-select",{attrs:{reduce:function reduce(label){return label.value;},placeholder:_vm.$t("Choose_Account"),options:_vm.accounts.map(function(acc){return{label:(acc.account_name||"")+(acc.account_num?" ("+acc.account_num+")":""),value:acc.id};})},model:{value:_vm.setting.default_account_id,callback:function callback($$v){_vm.$set(_vm.setting,"default_account_id",$$v);},expression:"setting.default_account_id"}})],1)],1),_vm._v(" "),_c("b-col",{staticClass:"mb-3",attrs:{lg:"6",md:"6",sm:"12"}},[_c("b-form-group",{attrs:{label:_vm.$t("Default_Payment_Method")}},[_c("v-select",{attrs:{reduce:function reduce(label){return label.value;},placeholder:_vm.$t("Choose_Payment_Method"),options:_vm.payment_methods.map(function(pm){return{label:pm.name,value:pm.id};})},model:{value:_vm.setting.default_payment_method_id,callback:function callback($$v){_vm.$set(_vm.setting,"default_payment_method_id",$$v);},expression:"setting.default_payment_method_id"}})],1)],1),_vm._v(" "),_c("b-col",{staticClass:"mb-3",attrs:{lg:"6",md:"6",sm:"12"}},[_c("validation-provider",{attrs:{name:"products_per_page",rules:{required:true}},scopedSlots:_vm._u([{key:"default",fn:function fn(validationContext){return[_c("b-form-group",{attrs:{label:_vm.$t("How_many_items_do_you_want_to_display_in_POS")}},[_c("b-form-input",{attrs:{state:_vm.getValidationState(validationContext),"aria-describedby":"products_per_page-feedback",label:"How many items do you want to display in POS.",placeholder:"How many items do you want to display in POS.",type:"text"},model:{value:_vm.pos_settings.products_per_page,callback:function callback($$v){_vm.$set(_vm.pos_settings,"products_per_page",$$v);},expression:"pos_settings.products_per_page"}}),_vm._v(" "),_c("b-form-invalid-feedback",{attrs:{id:"products_per_page-feedback"}},[_vm._v(_vm._s(validationContext.errors[0]))])],1)];}}],null,false,3746662830)})],1),_vm._v(" "),_c("b-col",{staticClass:"mb-3",attrs:{lg:"6",md:"6",sm:"12"}},[_c("validation-provider",{attrs:{name:"Default Tax",rules:{regex:/^\d*\.?\d*$/}},scopedSlots:_vm._u([{key:"default",fn:function fn(validationContext){return[_c("b-form-group",{attrs:{label:_vm.$t("Default_Tax")+" (%)"}},[_c("b-form-input",{attrs:{state:_vm.getValidationState(validationContext),"aria-describedby":"default-tax-feedback",placeholder:"0.00",type:"number",step:"0.01",min:"0"},model:{value:_vm.setting.default_tax,callback:function callback($$v){_vm.$set(_vm.setting,"default_tax",_vm._n($$v));},expression:"setting.default_tax"}}),_vm._v(" "),_c("b-form-invalid-feedback",{attrs:{id:"default-tax-feedback"}},[_vm._v(_vm._s(validationContext.errors[0]))])],1)];}}],null,false,3058746822)})],1),_vm._v(" "),_c("b-col",{staticClass:"mb-3",attrs:{lg:"6",md:"6",sm:"12"}},[_c("validation-provider",{attrs:{name:"Point To Amount Rate",rules:{regex:/^\d*\.?\d*$/}},scopedSlots:_vm._u([{key:"default",fn:function fn(validationContext){return[_c("b-form-group",{attrs:{label:"Point To Amount Rate * (Example: 1 Point = 0.10$)"}},[_c("b-input-group",{attrs:{append:_vm.currentUser.currency}},[_c("b-form-input",{attrs:{state:_vm.getValidationState(validationContext),"aria-describedby":"point-to-amount-feedback",placeholder:"Example: 1 Point = 0.10$"},model:{value:_vm.setting.point_to_amount_rate,callback:function callback($$v){_vm.$set(_vm.setting,"point_to_amount_rate",_vm._n($$v));},expression:"setting.point_to_amount_rate"}})],1),_vm._v(" "),_c("b-form-invalid-feedback",{attrs:{id:"point-to-amount-feedback"}},[_vm._v(_vm._s(validationContext.errors[0]))])],1)];}}],null,false,3512265242)})],1)],1),_vm._v(" "),_c("b-row",{staticClass:"mt-4"},[_c("b-col",{staticClass:"d-flex justify-content-end",attrs:{lg:"12"}},[_c("b-button",{attrs:{variant:"primary",size:"lg"},on:{click:function click($event){return _vm.Submit_General_Settings();}}},[_vm._v("\n"+_vm._s(_vm.$t("submit"))+"\n                        ")])],1)],1)],1),_vm._v(" "),_c("div",{directives:[{name:"show",rawName:"v-show",value:_vm.activeTab==="prefixes",expression:"activeTab === 'prefixes'"}],staticClass:"tab-content"},[_c("b-row",[_c("b-col",{staticClass:"mb-3",attrs:{lg:"6",md:"6",sm:"12"}},[_c("b-form-group",{attrs:{label:"Sale Prefix"}},[_c("b-form-input",{attrs:{placeholder:"SL",maxlength:"10"},model:{value:_vm.setting.sale_prefix,callback:function callback($$v){_vm.$set(_vm.setting,"sale_prefix",$$v);},expression:"setting.sale_prefix"}}),_vm._v(" "),_c("small",{staticClass:"text-muted"},[_vm._v("Example: SL (will be prepended to sale reference numbers like SL_0001)")])],1)],1),_vm._v(" "),_c("b-col",{staticClass:"mb-3",attrs:{lg:"6",md:"6",sm:"12"}},[_c("b-form-group",{attrs:{label:"Purchase Prefix"}},[_c("b-form-input",{attrs:{placeholder:"PR",maxlength:"10"},model:{value:_vm.setting.purchase_prefix,callback:function callback($$v){_vm.$set(_vm.setting,"purchase_prefix",$$v);},expression:"setting.purchase_prefix"}}),_vm._v(" "),_c("small",{staticClass:"text-muted"},[_vm._v("Example: PR (will be prepended to purchase reference numbers like PR_0001)")])],1)],1),_vm._v(" "),_c("b-col",{staticClass:"mb-3",attrs:{lg:"6",md:"6",sm:"12"}},[_c("b-form-group",{attrs:{label:"Quotation Prefix"}},[_c("b-form-input",{attrs:{placeholder:"QT",maxlength:"10"},model:{value:_vm.setting.quotation_prefix,callback:function callback($$v){_vm.$set(_vm.setting,"quotation_prefix",$$v);},expression:"setting.quotation_prefix"}}),_vm._v(" "),_c("small",{staticClass:"text-muted"},[_vm._v("Example: QT (will be prepended to quotation reference numbers like QT_0001)")])],1)],1),_vm._v(" "),_c("b-col",{staticClass:"mb-3",attrs:{lg:"6",md:"6",sm:"12"}},[_c("b-form-group",{attrs:{label:"Adjustment Prefix"}},[_c("b-form-input",{attrs:{placeholder:"AD",maxlength:"10"},model:{value:_vm.setting.adjustment_prefix,callback:function callback($$v){_vm.$set(_vm.setting,"adjustment_prefix",$$v);},expression:"setting.adjustment_prefix"}}),_vm._v(" "),_c("small",{staticClass:"text-muted"},[_vm._v("Example: AD (will be prepended to adjustment reference numbers like AD_0001)")])],1)],1),_vm._v(" "),_c("b-col",{staticClass:"mb-3",attrs:{lg:"6",md:"6",sm:"12"}},[_c("b-form-group",{attrs:{label:"Transfer Prefix"}},[_c("b-form-input",{attrs:{placeholder:"TR",maxlength:"10"},model:{value:_vm.setting.transfer_prefix,callback:function callback($$v){_vm.$set(_vm.setting,"transfer_prefix",$$v);},expression:"setting.transfer_prefix"}}),_vm._v(" "),_c("small",{staticClass:"text-muted"},[_vm._v("Example: TR (will be prepended to transfer reference numbers like TR_0001)")])],1)],1),_vm._v(" "),_c("b-col",{staticClass:"mb-3",attrs:{lg:"6",md:"6",sm:"12"}},[_c("b-form-group",{attrs:{label:"Sale Return Prefix"}},[_c("b-form-input",{attrs:{placeholder:"RT",maxlength:"10"},model:{value:_vm.setting.sale_return_prefix,callback:function callback($$v){_vm.$set(_vm.setting,"sale_return_prefix",$$v);},expression:"setting.sale_return_prefix"}}),_vm._v(" "),_c("small",{staticClass:"text-muted"},[_vm._v("Example: RT (will be prepended to sale return reference numbers like RT_0001)")])],1)],1),_vm._v(" "),_c("b-col",{staticClass:"mb-3",attrs:{lg:"6",md:"6",sm:"12"}},[_c("b-form-group",{attrs:{label:"Purchase Return Prefix"}},[_c("b-form-input",{attrs:{placeholder:"RT",maxlength:"10"},model:{value:_vm.setting.purchase_return_prefix,callback:function callback($$v){_vm.$set(_vm.setting,"purchase_return_prefix",$$v);},expression:"setting.purchase_return_prefix"}}),_vm._v(" "),_c("small",{staticClass:"text-muted"},[_vm._v("Example: RT (will be prepended to purchase return reference numbers like RT_0001)")])],1)],1)],1),_vm._v(" "),_c("b-row",[_c("b-col",{staticClass:"mb-3",attrs:{lg:"12"}},[_c("div",{staticClass:"alert alert-info"},[_c("strong",[_vm._v("Note:")]),_vm._v(" If a prefix is empty, the system will use the default prefix (SL for sales, PR for purchases, QT for quotations, AD for adjustments, TR for transfers, RT for returns). \n                          Prefixes only apply to newly created records.\n                        ")])])],1),_vm._v(" "),_c("b-row",{staticClass:"mt-4"},[_c("b-col",{staticClass:"d-flex justify-content-end",attrs:{lg:"12"}},[_c("b-button",{attrs:{variant:"primary",size:"lg"},on:{click:function click($event){return _vm.Submit_General_Settings();}}},[_vm._v("\n"+_vm._s(_vm.$t("submit"))+"\n                        ")])],1)],1)],1),_vm._v(" "),_c("div",{directives:[{name:"show",rawName:"v-show",value:_vm.activeTab==="mail",expression:"activeTab === 'mail'"}],staticClass:"tab-content"},[_c("validation-observer",{ref:"mailObserver"},[_c("b-row",[_c("b-col",{staticClass:"mb-3",attrs:{lg:"6",md:"6",sm:"12"}},[_c("validation-provider",{attrs:{name:"MAIL_MAILER",rules:{required:true}},scopedSlots:_vm._u([{key:"default",fn:function fn(validationContext){return[_c("b-form-group",{attrs:{label:"MAIL_MAILER *"}},[_c("b-form-input",{attrs:{state:_vm.getValidationState(validationContext),"aria-describedby":"MAIL_MAILER-feedback",placeholder:"MAIL_MAILER"},model:{value:_vm.mail_settings.mail_mailer,callback:function callback($$v){_vm.$set(_vm.mail_settings,"mail_mailer",$$v);},expression:"mail_settings.mail_mailer"}}),_vm._v(" "),_c("b-form-invalid-feedback",{attrs:{id:"MAIL_MAILER-feedback"}},[_vm._v(_vm._s(validationContext.errors[0]))]),_vm._v(" "),_c("small",{staticClass:"text-danger"},[_vm._v('Supported: "smtp", "sendmail", "mailgun", "ses","postmark", "log"')])],1)];}}],null,false,2402562240)})],1),_vm._v(" "),_c("b-col",{staticClass:"mb-3",attrs:{lg:"6",md:"6",sm:"12"}},[_c("validation-provider",{attrs:{name:"HOST",rules:{required:true}},scopedSlots:_vm._u([{key:"default",fn:function fn(validationContext){return[_c("b-form-group",{attrs:{label:"MAIL_HOST *"}},[_c("b-form-input",{attrs:{state:_vm.getValidationState(validationContext),"aria-describedby":"HOST-feedback",placeholder:"MAIL_HOST"},model:{value:_vm.mail_settings.host,callback:function callback($$v){_vm.$set(_vm.mail_settings,"host",$$v);},expression:"mail_settings.host"}}),_vm._v(" "),_c("b-form-invalid-feedback",{attrs:{id:"HOST-feedback"}},[_vm._v(_vm._s(validationContext.errors[0]))])],1)];}}],null,false,2729954723)})],1),_vm._v(" "),_c("b-col",{staticClass:"mb-3",attrs:{lg:"6",md:"6",sm:"12"}},[_c("validation-provider",{attrs:{name:"PORT",rules:{required:true}},scopedSlots:_vm._u([{key:"default",fn:function fn(validationContext){return[_c("b-form-group",{attrs:{label:"MAIL_PORT *"}},[_c("b-form-input",{attrs:{state:_vm.getValidationState(validationContext),"aria-describedby":"PORT-feedback",placeholder:"MAIL_PORT"},model:{value:_vm.mail_settings.port,callback:function callback($$v){_vm.$set(_vm.mail_settings,"port",$$v);},expression:"mail_settings.port"}}),_vm._v(" "),_c("b-form-invalid-feedback",{attrs:{id:"PORT-feedback"}},[_vm._v(_vm._s(validationContext.errors[0]))])],1)];}}],null,false,2883512410)})],1),_vm._v(" "),_c("b-col",{staticClass:"mb-3",attrs:{lg:"6",md:"6",sm:"12"}},[_c("validation-provider",{attrs:{name:"sender",rules:{required:true}},scopedSlots:_vm._u([{key:"default",fn:function fn(validationContext){return[_c("b-form-group",{attrs:{label:"Sender Name *"}},[_c("b-form-input",{attrs:{state:_vm.getValidationState(validationContext),"aria-describedby":"sender-feedback",placeholder:"Sender Name"},model:{value:_vm.mail_settings.sender_name,callback:function callback($$v){_vm.$set(_vm.mail_settings,"sender_name",$$v);},expression:"mail_settings.sender_name"}}),_vm._v(" "),_c("b-form-invalid-feedback",{attrs:{id:"sender-feedback"}},[_vm._v(_vm._s(validationContext.errors[0]))])],1)];}}],null,false,4141202032)})],1),_vm._v(" "),_c("b-col",{staticClass:"mb-3",attrs:{lg:"6",md:"6",sm:"12"}},[_c("validation-provider",{attrs:{name:"sender_email",rules:{required:true,email:true}},scopedSlots:_vm._u([{key:"default",fn:function fn(validationContext){return[_c("b-form-group",{attrs:{label:"Sender Email *"}},[_c("b-form-input",{attrs:{type:"email",state:_vm.getValidationState(validationContext),"aria-describedby":"sender_email-feedback",placeholder:"Sender Email"},model:{value:_vm.mail_settings.sender_email,callback:function callback($$v){_vm.$set(_vm.mail_settings,"sender_email",$$v);},expression:"mail_settings.sender_email"}}),_vm._v(" "),_c("b-form-invalid-feedback",{attrs:{id:"sender_email-feedback"}},[_vm._v(_vm._s(validationContext.errors[0]))])],1)];}}],null,false,4069127577)})],1),_vm._v(" "),_c("b-col",{staticClass:"mb-3",attrs:{lg:"6",md:"6",sm:"12"}},[_c("validation-provider",{attrs:{name:"Username",rules:{required:true}},scopedSlots:_vm._u([{key:"default",fn:function fn(validationContext){return[_c("b-form-group",{attrs:{label:"MAIL_USERNAME *"}},[_c("b-form-input",{attrs:{state:_vm.getValidationState(validationContext),"aria-describedby":"Username-feedback",placeholder:"MAIL_USERNAME"},model:{value:_vm.mail_settings.username,callback:function callback($$v){_vm.$set(_vm.mail_settings,"username",$$v);},expression:"mail_settings.username"}}),_vm._v(" "),_c("b-form-invalid-feedback",{attrs:{id:"Username-feedback"}},[_vm._v(_vm._s(validationContext.errors[0]))])],1)];}}],null,false,2392933365)})],1),_vm._v(" "),_c("b-col",{staticClass:"mb-3",attrs:{lg:"6",md:"6",sm:"12"}},[_c("validation-provider",{attrs:{name:"Password",rules:{required:true}},scopedSlots:_vm._u([{key:"default",fn:function fn(validationContext){return[_c("b-form-group",{attrs:{label:"MAIL_PASSWORD *"}},[_c("b-form-input",{attrs:{type:"password",state:_vm.getValidationState(validationContext),"aria-describedby":"Password-feedback",placeholder:"MAIL_PASSWORD"},model:{value:_vm.mail_settings.password,callback:function callback($$v){_vm.$set(_vm.mail_settings,"password",$$v);},expression:"mail_settings.password"}}),_vm._v(" "),_c("b-form-invalid-feedback",{attrs:{id:"Password-feedback"}},[_vm._v(_vm._s(validationContext.errors[0]))])],1)];}}],null,false,3853334093)})],1),_vm._v(" "),_c("b-col",{staticClass:"mb-3",attrs:{lg:"6",md:"6",sm:"12"}},[_c("validation-provider",{attrs:{name:"encryption",rules:{required:true}},scopedSlots:_vm._u([{key:"default",fn:function fn(validationContext){return[_c("b-form-group",{attrs:{label:"MAIL_ENCRYPTION *"}},[_c("b-form-input",{attrs:{state:_vm.getValidationState(validationContext),"aria-describedby":"encryption-feedback",placeholder:"MAIL_ENCRYPTION"},model:{value:_vm.mail_settings.encryption,callback:function callback($$v){_vm.$set(_vm.mail_settings,"encryption",$$v);},expression:"mail_settings.encryption"}}),_vm._v(" "),_c("b-form-invalid-feedback",{attrs:{id:"encryption-feedback"}},[_vm._v(_vm._s(validationContext.errors[0]))])],1)];}}],null,false,1824051788)})],1),_vm._v(" "),_c("b-col",{staticClass:"mb-3",attrs:{lg:"12",md:"12",sm:"12"}},[_c("b-form-group",{staticClass:"d-flex align-items-center gap-2"},[_c("b-button",{attrs:{variant:"primary"},on:{click:function click($event){return _vm.Update_Mail_Settings();}}},[_vm._v("\n                            "+_vm._s(_vm.$t("submit"))+"\n                          ")]),_vm._v(" "),_c("b-button",{attrs:{variant:"outline-secondary",disabled:_vm.isTestingMail},on:{click:function click($event){return _vm.Test_Mail_Settings();}}},[!_vm.isTestingMail?_c("span",[_vm._v("\n                              Save & Test Mail\n                            ")]):_c("span",[_vm._v("\n                              "+_vm._s(_vm.$t("Loading"))+"...\n                            ")])])],1)],1)],1)],1)],1),_vm._v(" "),_c("div",{directives:[{name:"show",rawName:"v-show",value:_vm.activeTab==="payment",expression:"activeTab === 'payment'"}],staticClass:"tab-content"},[_c("b-row",[_c("b-col",{staticClass:"mb-3",attrs:{lg:"6",md:"6",sm:"12"}},[_c("b-form-group",{attrs:{label:"STRIPE_KEY"}},[_c("b-form-input",{attrs:{type:"password",placeholder:_vm.$t("LeaveBlank")},model:{value:_vm.gateway.stripe_key,callback:function callback($$v){_vm.$set(_vm.gateway,"stripe_key",$$v);},expression:"gateway.stripe_key"}}),_vm._v(" "),_c("small",{staticClass:"text-muted"},[_vm._v(_vm._s(_vm.$t("LeaveBlank"))+" "+_vm._s(_vm.$t("to_keep_current_value")))])],1)],1),_vm._v(" "),_c("b-col",{staticClass:"mb-3",attrs:{lg:"6",md:"6",sm:"12"}},[_c("b-form-group",{attrs:{label:"STRIPE_SECRET"}},[_c("b-form-input",{attrs:{type:"password",placeholder:_vm.$t("LeaveBlank")},model:{value:_vm.gateway.stripe_secret,callback:function callback($$v){_vm.$set(_vm.gateway,"stripe_secret",$$v);},expression:"gateway.stripe_secret"}}),_vm._v(" "),_c("small",{staticClass:"text-muted"},[_vm._v(_vm._s(_vm.$t("LeaveBlank"))+" "+_vm._s(_vm.$t("to_keep_current_value")))])],1)],1),_vm._v(" "),_c("b-col",{staticClass:"mb-3",attrs:{lg:"12",md:"12",sm:"12"}},[_c("b-form-group",[_c("b-form-checkbox",{attrs:{"switch":""},model:{value:_vm.gateway.deleted,callback:function callback($$v){_vm.$set(_vm.gateway,"deleted",$$v);},expression:"gateway.deleted"}},[_vm._v("\n                            "+_vm._s(_vm.$t("Remove_Stripe_Key_Secret"))+"\n                          ")]),_vm._v(" "),_c("small",{staticClass:"text-muted d-block mt-1"},[_vm._v(_vm._s(_vm.$t("Enable_to_remove_stored_credentials")))])],1)],1)],1),_vm._v(" "),_c("b-row",{staticClass:"mt-4"},[_c("b-col",{staticClass:"d-flex justify-content-end",attrs:{lg:"12"}},[_c("b-button",{attrs:{variant:"primary",size:"lg"},on:{click:function click($event){return _vm.Update_Payment();}}},[_vm._v("\n"+_vm._s(_vm.$t("submit"))+"\n                        ")])],1)],1)],1),_vm._v(" "),_c("div",{directives:[{name:"show",rawName:"v-show",value:_vm.activeTab==="sms",expression:"activeTab === 'sms'"}],staticClass:"tab-content"},[_c("div",{staticClass:"sms-section mb-4"},[_c("h5",{staticClass:"mb-3"},[_vm._v(_vm._s(_vm.$t("Default_SMS_Gateway")))]),_vm._v(" "),_c("b-row",[_c("b-col",{staticClass:"mb-3",attrs:{lg:"6",md:"6",sm:"12"}},[_c("b-form-group",{attrs:{label:_vm.$t("Default_SMS_Gateway")}},[_c("v-select",{attrs:{reduce:function reduce(label){return label.value;},placeholder:_vm.$t("Choose_SMS_Gateway"),options:_vm.sms_settings.sms_gateway.map(function(gateway){return{label:gateway.title,value:gateway.id};})},model:{value:_vm.sms_settings.default_sms_gateway,callback:function callback($$v){_vm.$set(_vm.sms_settings,"default_sms_gateway",$$v);},expression:"sms_settings.default_sms_gateway"}})],1)],1)],1),_vm._v(" "),_c("b-row",[_c("b-col",{staticClass:"mb-3",attrs:{lg:"12"}},[_c("b-button",{attrs:{variant:"primary"},on:{click:function click($event){return _vm.Update_Default_SMS();}}},[_vm._v("\n                            "+_vm._s(_vm.$t("submit"))+"\n                          ")])],1)],1)],1),_vm._v(" "),_c("hr",{staticClass:"my-4"}),_vm._v(" "),_c("div",{staticClass:"sms-section mb-4"},[_c("h5",{staticClass:"mb-3"},[_vm._v("Termii")]),_vm._v(" "),_c("b-row",[_c("b-col",{staticClass:"mb-3",attrs:{lg:"6",md:"6",sm:"12"}},[_c("validation-provider",{attrs:{name:"TERMI_KEY",rules:{required:true}},scopedSlots:_vm._u([{key:"default",fn:function fn(validationContext){return[_c("b-form-group",{attrs:{label:"Termii KEY *"}},[_c("b-form-input",{attrs:{state:_vm.getValidationState(validationContext),"aria-describedby":"TERMI_KEY-feedback"},model:{value:_vm.sms_settings.termi.TERMI_KEY,callback:function callback($$v){_vm.$set(_vm.sms_settings.termi,"TERMI_KEY",$$v);},expression:"sms_settings.termi.TERMI_KEY"}}),_vm._v(" "),_c("b-form-invalid-feedback",{attrs:{id:"TERMI_KEY-feedback"}},[_vm._v(_vm._s(validationContext.errors[0]))])],1)];}}],null,false,3697070093)})],1),_vm._v(" "),_c("b-col",{staticClass:"mb-3",attrs:{lg:"6",md:"6",sm:"12"}},[_c("validation-provider",{attrs:{name:"TERMI_SECRET",rules:{required:true}},scopedSlots:_vm._u([{key:"default",fn:function fn(validationContext){return[_c("b-form-group",{attrs:{label:"Termii SECRET *"}},[_c("b-form-input",{attrs:{state:_vm.getValidationState(validationContext),"aria-describedby":"TERMI_SECRET-feedback"},model:{value:_vm.sms_settings.termi.TERMI_SECRET,callback:function callback($$v){_vm.$set(_vm.sms_settings.termi,"TERMI_SECRET",$$v);},expression:"sms_settings.termi.TERMI_SECRET"}}),_vm._v(" "),_c("b-form-invalid-feedback",{attrs:{id:"TERMI_SECRET-feedback"}},[_vm._v(_vm._s(validationContext.errors[0]))])],1)];}}],null,false,3777322093)})],1),_vm._v(" "),_c("b-col",{staticClass:"mb-3",attrs:{lg:"6",md:"6",sm:"12"}},[_c("validation-provider",{attrs:{name:"TERMI_SENDER",rules:{required:true}},scopedSlots:_vm._u([{key:"default",fn:function fn(validationContext){return[_c("b-form-group",{attrs:{label:"Termii Sender *"}},[_c("b-form-input",{attrs:{state:_vm.getValidationState(validationContext),"aria-describedby":"TERMI_SENDER-feedback"},model:{value:_vm.sms_settings.termi.TERMI_SENDER,callback:function callback($$v){_vm.$set(_vm.sms_settings.termi,"TERMI_SENDER",$$v);},expression:"sms_settings.termi.TERMI_SENDER"}}),_vm._v(" "),_c("b-form-invalid-feedback",{attrs:{id:"TERMI_SENDER-feedback"}},[_vm._v(_vm._s(validationContext.errors[0]))])],1)];}}],null,false,1072914253)})],1)],1),_vm._v(" "),_c("b-row",[_c("b-col",{staticClass:"mb-3",attrs:{lg:"12"}},[_c("b-button",{attrs:{variant:"primary"},on:{click:function click($event){return _vm.Update_Termi_SMS();}}},[_vm._v("\n                            "+_vm._s(_vm.$t("submit"))+"\n                          ")])],1)],1)],1),_vm._v(" "),_c("hr",{staticClass:"my-4"}),_vm._v(" "),_c("div",{staticClass:"sms-section mb-4"},[_c("h5",{staticClass:"mb-3"},[_vm._v("TWILIO SMS")]),_vm._v(" "),_c("b-row",[_c("b-col",{staticClass:"mb-3",attrs:{lg:"6",md:"6",sm:"12"}},[_c("validation-provider",{attrs:{name:"TWILIO_SID",rules:{required:true}},scopedSlots:_vm._u([{key:"default",fn:function fn(validationContext){return[_c("b-form-group",{attrs:{label:"TWILIO SID *"}},[_c("b-form-input",{attrs:{state:_vm.getValidationState(validationContext),"aria-describedby":"TWILIO_SID-feedback"},model:{value:_vm.sms_settings.twilio.TWILIO_SID,callback:function callback($$v){_vm.$set(_vm.sms_settings.twilio,"TWILIO_SID",$$v);},expression:"sms_settings.twilio.TWILIO_SID"}}),_vm._v(" "),_c("b-form-invalid-feedback",{attrs:{id:"TWILIO_SID-feedback"}},[_vm._v(_vm._s(validationContext.errors[0]))])],1)];}}],null,false,2416046467)})],1),_vm._v(" "),_c("b-col",{staticClass:"mb-3",attrs:{lg:"6",md:"6",sm:"12"}},[_c("b-form-group",{attrs:{label:"TWILIO TOKEN *"}},[_c("b-form-input",{attrs:{placeholder:_vm.$t("LeaveBlank")},model:{value:_vm.sms_settings.twilio.TWILIO_TOKEN,callback:function callback($$v){_vm.$set(_vm.sms_settings.twilio,"TWILIO_TOKEN",$$v);},expression:"sms_settings.twilio.TWILIO_TOKEN"}}),_vm._v(" "),_c("small",{staticClass:"text-muted"},[_vm._v(_vm._s(_vm.$t("LeaveBlank"))+" "+_vm._s(_vm.$t("to_keep_current_value")))])],1)],1),_vm._v(" "),_c("b-col",{staticClass:"mb-3",attrs:{lg:"6",md:"6",sm:"12"}},[_c("validation-provider",{attrs:{name:"TWILIO_FROM",rules:{required:true}},scopedSlots:_vm._u([{key:"default",fn:function fn(validationContext){return[_c("b-form-group",{attrs:{label:"TWILIO FROM *"}},[_c("b-form-input",{attrs:{state:_vm.getValidationState(validationContext),"aria-describedby":"TWILIO_FROM-feedback"},model:{value:_vm.sms_settings.twilio.TWILIO_FROM,callback:function callback($$v){_vm.$set(_vm.sms_settings.twilio,"TWILIO_FROM",$$v);},expression:"sms_settings.twilio.TWILIO_FROM"}}),_vm._v(" "),_c("b-form-invalid-feedback",{attrs:{id:"TWILIO_FROM-feedback"}},[_vm._v(_vm._s(validationContext.errors[0]))])],1)];}}],null,false,3720590339)})],1)],1),_vm._v(" "),_c("b-row",[_c("b-col",{staticClass:"mb-3",attrs:{lg:"12"}},[_c("b-button",{attrs:{variant:"primary"},on:{click:function click($event){return _vm.Update_Twilio_SMS();}}},[_vm._v("\n                            "+_vm._s(_vm.$t("submit"))+"\n                          ")])],1)],1)],1),_vm._v(" "),_c("hr",{staticClass:"my-4"}),_vm._v(" "),_c("div",{staticClass:"sms-section mb-4"},[_c("h5",{staticClass:"mb-3"},[_vm._v("InfoBip")]),_vm._v(" "),_c("b-row",[_c("b-col",{staticClass:"mb-3",attrs:{lg:"6",md:"6",sm:"12"}},[_c("b-form-group",{attrs:{label:"BASE URL"}},[_c("b-form-input",{model:{value:_vm.sms_settings.infobip.base_url,callback:function callback($$v){_vm.$set(_vm.sms_settings.infobip,"base_url",$$v);},expression:"sms_settings.infobip.base_url"}})],1)],1),_vm._v(" "),_c("b-col",{staticClass:"mb-3",attrs:{lg:"6",md:"6",sm:"12"}},[_c("b-form-group",{attrs:{label:"API KEY"}},[_c("b-form-input",{model:{value:_vm.sms_settings.infobip.api_key,callback:function callback($$v){_vm.$set(_vm.sms_settings.infobip,"api_key",$$v);},expression:"sms_settings.infobip.api_key"}})],1)],1),_vm._v(" "),_c("b-col",{staticClass:"mb-3",attrs:{lg:"6",md:"6",sm:"12"}},[_c("b-form-group",{attrs:{label:"SMS sender number Or Name"}},[_c("b-form-input",{model:{value:_vm.sms_settings.infobip.sender_from,callback:function callback($$v){_vm.$set(_vm.sms_settings.infobip,"sender_from",$$v);},expression:"sms_settings.infobip.sender_from"}})],1)],1)],1),_vm._v(" "),_c("b-row",[_c("b-col",{staticClass:"mb-3",attrs:{lg:"12"}},[_c("b-button",{attrs:{variant:"primary"},on:{click:function click($event){return _vm.Update_Infobip_SMS();}}},[_vm._v("\n                            "+_vm._s(_vm.$t("submit"))+"\n                          ")])],1)],1),_vm._v(" "),_c("b-row",{staticClass:"mt-3"},[_c("b-col",{attrs:{lg:"12"}},[_c("div",{staticClass:"info-box p-3 bg-light rounded"},[_c("p",{staticClass:"mb-2"},[_c("strong",[_vm._v("BASE_URL :")]),_vm._v(" The Infobip data center used for API traffic.")]),_vm._v(" "),_c("p",{staticClass:"mb-2"},[_c("strong",[_vm._v("API_KEY :")]),_vm._v(" Authentication method. See API documentation")]),_vm._v(" "),_c("p",{staticClass:"mb-2"},[_c("strong",[_vm._v("SMS sender number Or Name :")]),_vm._v(" displayed on recipient's device as message sender.")]),_vm._v(" "),_c("p",{staticClass:"mb-0"},[_c("strong",[_vm._v("API Reference:")]),_vm._v(" "),_c("a",{attrs:{href:"https://www.infobip.com/docs/api",target:"_blank"}},[_vm._v("https://www.infobip.com/docs/api")])])])])],1)],1)]),_vm._v(" "),_c("div",{directives:[{name:"show",rawName:"v-show",value:_vm.activeTab==="pos",expression:"activeTab === 'pos'"}],staticClass:"tab-content"},[_c("b-row",[_c("b-col",{staticClass:"mb-4",attrs:{cols:"12"}},[_c("b-alert",{staticClass:"mb-0",attrs:{show:"",variant:"info"}},[_vm._v("\n                      POS receipt configuration – choose a layout and toggle what appears on the printed receipt.\n                    ")])],1)],1),_vm._v(" "),_c("b-row",[_c("b-col",{staticClass:"mb-2",attrs:{lg:"12",md:"12",sm:"12"}},[_c("b-form-group",{attrs:{label:"POS receipt layout"}},[_c("b-form-radio-group",{attrs:{options:[{value:1,text:"Layout 1 - Standard"},{value:2,text:"Layout 2 - Compact"},{value:3,text:"Layout 3 - Detailed"}],buttons:"","button-variant":"outline-primary",size:"sm"},model:{value:_vm.pos_settings.receipt_layout,callback:function callback($$v){_vm.$set(_vm.pos_settings,"receipt_layout",$$v);},expression:"pos_settings.receipt_layout"}})],1)],1),_vm._v(" "),_c("b-col",{staticClass:"mb-3",attrs:{lg:"12",md:"12",sm:"12"}},[_c("b-form-group",{attrs:{label:_vm.$t("POS_receipt_layout_default")}},[_c("b-form-select",{attrs:{options:[{value:1,text:_vm.$t("Layout_1_Standard")},{value:2,text:_vm.$t("Layout_2_Compact")},{value:3,text:_vm.$t("Layout_3_Detailed")}]},model:{value:_vm.pos_settings.receipt_layout,callback:function callback($$v){_vm.$set(_vm.pos_settings,"receipt_layout",$$v);},expression:"pos_settings.receipt_layout"}})],1)],1),_vm._v(" "),_c("b-col",{staticClass:"mb-4",attrs:{lg:"12",md:"12",sm:"12"}},[_c("b-card",[_c("div",{staticClass:"d-flex justify-content-between align-items-center mb-2"},[_c("h6",{staticClass:"mb-0"},[_vm._v("Receipt preview")]),_vm._v(" "),_c("b-button",{attrs:{size:"sm",variant:"outline-primary"},on:{click:_vm.printPosDemo}},[_c("i",{staticClass:"i-Billing mr-1"}),_vm._v(" Print demo receipt\n                        ")])],1),_vm._v(" "),_c("div",{staticClass:"pos-receipt-demo",attrs:{id:"pos-receipt-demo"}},[_vm.currentReceiptLayout===1?_c("div",{staticClass:"receipt-layout-1"},[_c("div",{staticClass:"info text-center mb-2"},[_c("div",{directives:[{name:"show",rawName:"v-show",value:_vm.pos_settings.show_logo!==0,expression:"pos_settings.show_logo !== 0"}],staticClass:"invoice_logo mb-1"},[_c("div",{staticClass:"demo-logo-circle"},[_vm._v("LOGO")])]),_vm._v(" "),_c("div",{directives:[{name:"show",rawName:"v-show",value:_vm.pos_settings.show_store_name!==0,expression:"pos_settings.show_store_name !== 0"}]},[_vm._v("Demo Store")]),_vm._v(" "),_c("small",{directives:[{name:"show",rawName:"v-show",value:_vm.pos_settings.show_reference!==0,expression:"pos_settings.show_reference !== 0"}]},[_vm._v("Ref: REF-12345")]),_c("br",{directives:[{name:"show",rawName:"v-show",value:_vm.pos_settings.show_reference!==0,expression:"pos_settings.show_reference !== 0"}]}),_vm._v(" "),_c("small",{directives:[{name:"show",rawName:"v-show",value:_vm.pos_settings.show_address,expression:"pos_settings.show_address"}]},[_vm._v("123 Demo Street")]),_c("br",{directives:[{name:"show",rawName:"v-show",value:_vm.pos_settings.show_address,expression:"pos_settings.show_address"}]}),_vm._v(" "),_c("small",{directives:[{name:"show",rawName:"v-show",value:_vm.pos_settings.show_phone,expression:"pos_settings.show_phone"}]},[_vm._v("+123 456 789")]),_c("br",{directives:[{name:"show",rawName:"v-show",value:_vm.pos_settings.show_phone,expression:"pos_settings.show_phone"}]}),_vm._v(" "),_c("small",{directives:[{name:"show",rawName:"v-show",value:_vm.pos_settings.show_email,expression:"pos_settings.show_email"}]},[_vm._v("demo@example.com")]),_vm._v(" "),_c("div",{staticClass:"mt-2"},[_c("small",{directives:[{name:"show",rawName:"v-show",value:_vm.pos_settings.show_date!==0,expression:"pos_settings.show_date !== 0"}]},[_vm._v("Date: 2025-12-10 12:34")]),_c("br"),_vm._v(" "),_c("small",{directives:[{name:"show",rawName:"v-show",value:_vm.pos_settings.show_seller!==0,expression:"pos_settings.show_seller !== 0"}]},[_vm._v("Seller: John Doe")]),_c("br"),_vm._v(" "),_c("small",{directives:[{name:"show",rawName:"v-show",value:_vm.pos_settings.show_customer,expression:"pos_settings.show_customer"}]},[_vm._v("Customer: Jane Smith")]),_c("br"),_vm._v(" "),_c("small",{directives:[{name:"show",rawName:"v-show",value:_vm.pos_settings.show_Warehouse,expression:"pos_settings.show_Warehouse"}]},[_vm._v("Warehouse: Main Store")])])]),_vm._v(" "),_c("table",{staticClass:"table_data w-100 mb-2",staticStyle:{"font-size":"11px"}},[_c("tbody",[_c("tr",[_c("td",{attrs:{colspan:"3"}},[_vm._v("\n                                  Demo Product A"),_c("br"),_vm._v(" "),_c("small",[_vm._v("2 x 10.00")])]),_vm._v(" "),_c("td",{staticStyle:{"text-align":"right"}},[_vm._v("20.00")])]),_vm._v(" "),_c("tr",[_c("td",{attrs:{colspan:"3"}},[_vm._v("\n                                  Demo Product B"),_c("br"),_vm._v(" "),_c("small",[_vm._v("1 x 5.00")])]),_vm._v(" "),_c("td",{staticStyle:{"text-align":"right"}},[_vm._v("5.00")])])])]),_vm._v(" "),_c("table",{staticClass:"table_data w-100",staticStyle:{"font-size":"11px"}},[_c("tbody",[_c("tr",[_c("td",{staticClass:"total"},[_vm._v("Total")]),_vm._v(" "),_c("td",{staticClass:"total",staticStyle:{"text-align":"right"}},[_vm._v("25.00")])]),_vm._v(" "),_c("tr",{directives:[{name:"show",rawName:"v-show",value:_vm.pos_settings.show_paid!==0,expression:"pos_settings.show_paid !== 0"}]},[_c("td",{staticClass:"total"},[_vm._v("Paid")]),_vm._v(" "),_c("td",{staticClass:"total",staticStyle:{"text-align":"right"}},[_vm._v("20.00")])]),_vm._v(" "),_c("tr",{directives:[{name:"show",rawName:"v-show",value:_vm.pos_settings.show_due!==0,expression:"pos_settings.show_due !== 0"}]},[_c("td",{staticClass:"total"},[_vm._v("Due")]),_vm._v(" "),_c("td",{staticClass:"total",staticStyle:{"text-align":"right"}},[_vm._v("5.00")])])])]),_vm._v(" "),_c("table",{directives:[{name:"show",rawName:"v-show",value:_vm.pos_settings.show_payments!==0,expression:"pos_settings.show_payments !== 0"}],staticClass:"table_data w-100 mt-1",staticStyle:{"font-size":"11px"}},[_c("thead",[_c("tr",[_c("th",{staticStyle:{"text-align":"left"}},[_vm._v("Pay By")]),_vm._v(" "),_c("th",{staticStyle:{"text-align":"right"}},[_vm._v("Amount")]),_vm._v(" "),_c("th",{staticStyle:{"text-align":"right"}},[_vm._v("Change")])])]),_vm._v(" "),_c("tbody",[_c("tr",[_c("td",[_vm._v("Cash")]),_vm._v(" "),_c("td",{staticStyle:{"text-align":"right"}},[_vm._v("20.00")]),_vm._v(" "),_c("td",{staticStyle:{"text-align":"right"}},[_vm._v("0.00")])])])]),_vm._v(" "),_c("p",{directives:[{name:"show",rawName:"v-show",value:_vm.pos_settings.show_note,expression:"pos_settings.show_note"}],staticClass:"mt-2 mb-0 text-center"},[_c("small",[_c("strong",[_vm._v(_vm._s(_vm.pos_settings.note_customer||"Thank you for your purchase!"))])])]),_vm._v(" "),_c("div",{directives:[{name:"show",rawName:"v-show",value:_vm.pos_settings.show_zatca_qr!==0,expression:"pos_settings.show_zatca_qr !== 0"}],staticClass:"mt-2 text-center"},[_c("div",{staticClass:"zatca-qr"},[_c("div",{staticClass:"zatca-qr-title"},[_vm._v("ZATCA")]),_vm._v(" "),_c("div",{staticClass:"demo-qr-box"})])])]):_vm.currentReceiptLayout===2?_c("div",{staticClass:"receipt-layout-2"},[_c("div",{staticClass:"info text-center mb-2"},[_c("div",{directives:[{name:"show",rawName:"v-show",value:_vm.pos_settings.show_logo!==0,expression:"pos_settings.show_logo !== 0"}],staticClass:"demo-logo-circle small mb-1"},[_vm._v("\n                              LOGO\n                            ")]),_vm._v(" "),_c("div",{directives:[{name:"show",rawName:"v-show",value:_vm.pos_settings.show_store_name!==0,expression:"pos_settings.show_store_name !== 0"}]},[_vm._v("Demo Store")]),_vm._v(" "),_c("small",{directives:[{name:"show",rawName:"v-show",value:_vm.pos_settings.show_reference!==0,expression:"pos_settings.show_reference !== 0"}]},[_vm._v("Ref: REF-12345")]),_c("br",{directives:[{name:"show",rawName:"v-show",value:_vm.pos_settings.show_reference!==0,expression:"pos_settings.show_reference !== 0"}]}),_vm._v(" "),_c("small",{directives:[{name:"show",rawName:"v-show",value:_vm.pos_settings.show_address,expression:"pos_settings.show_address"}]},[_vm._v("123 Demo Street")]),_c("br",{directives:[{name:"show",rawName:"v-show",value:_vm.pos_settings.show_address,expression:"pos_settings.show_address"}]}),_vm._v(" "),_c("small",{directives:[{name:"show",rawName:"v-show",value:_vm.pos_settings.show_phone,expression:"pos_settings.show_phone"}]},[_vm._v("+123 456 789")]),_c("br",{directives:[{name:"show",rawName:"v-show",value:_vm.pos_settings.show_phone,expression:"pos_settings.show_phone"}]}),_vm._v(" "),_c("small",{directives:[{name:"show",rawName:"v-show",value:_vm.pos_settings.show_email,expression:"pos_settings.show_email"}]},[_vm._v("demo@example.com")]),_vm._v(" "),_c("div",{staticClass:"mt-1"},[_c("small",{directives:[{name:"show",rawName:"v-show",value:_vm.pos_settings.show_date!==0,expression:"pos_settings.show_date !== 0"}]},[_vm._v("Date: 2025-12-10 12:34")]),_c("br"),_vm._v(" "),_c("small",{directives:[{name:"show",rawName:"v-show",value:_vm.pos_settings.show_seller!==0,expression:"pos_settings.show_seller !== 0"}]},[_vm._v("Seller: John Doe")]),_c("br"),_vm._v(" "),_c("small",{directives:[{name:"show",rawName:"v-show",value:_vm.pos_settings.show_customer,expression:"pos_settings.show_customer"}]},[_vm._v("Customer: Jane Smith")]),_c("br"),_vm._v(" "),_c("small",{directives:[{name:"show",rawName:"v-show",value:_vm.pos_settings.show_Warehouse,expression:"pos_settings.show_Warehouse"}]},[_vm._v("Warehouse: Main Store")])])]),_vm._v(" "),_c("table",{staticClass:"table_data w-100 mb-2",staticStyle:{"font-size":"11px"}},[_c("thead",[_c("tr",[_c("th",{staticStyle:{"text-align":"left"}},[_vm._v("Item")]),_vm._v(" "),_c("th",{staticStyle:{"text-align":"center"}},[_vm._v("Qty")]),_vm._v(" "),_c("th",{staticStyle:{"text-align":"right"}},[_vm._v("Price")]),_vm._v(" "),_c("th",{staticStyle:{"text-align":"right"}},[_vm._v("Total")])])]),_vm._v(" "),_c("tbody",[_c("tr",[_c("td",[_vm._v("Demo A")]),_vm._v(" "),_c("td",{staticStyle:{"text-align":"center"}},[_vm._v("2")]),_vm._v(" "),_c("td",{staticStyle:{"text-align":"right"}},[_vm._v("10.00")]),_vm._v(" "),_c("td",{staticStyle:{"text-align":"right"}},[_vm._v("20.00")])]),_vm._v(" "),_c("tr",[_c("td",[_vm._v("Demo B")]),_vm._v(" "),_c("td",{staticStyle:{"text-align":"center"}},[_vm._v("1")]),_vm._v(" "),_c("td",{staticStyle:{"text-align":"right"}},[_vm._v("5.00")]),_vm._v(" "),_c("td",{staticStyle:{"text-align":"right"}},[_vm._v("5.00")])])])]),_vm._v(" "),_c("table",{staticClass:"table_data w-100",staticStyle:{"font-size":"11px"}},[_c("tbody",[_c("tr",{directives:[{name:"show",rawName:"v-show",value:_vm.pos_settings.show_tax,expression:"pos_settings.show_tax"}]},[_c("td",{staticClass:"total"},[_vm._v("Tax")]),_vm._v(" "),_c("td",{staticClass:"total",staticStyle:{"text-align":"right"}},[_vm._v("1.25")])]),_vm._v(" "),_c("tr",{directives:[{name:"show",rawName:"v-show",value:_vm.pos_settings.show_discount,expression:"pos_settings.show_discount"}]},[_c("td",{staticClass:"total"},[_vm._v("Discount")]),_vm._v(" "),_c("td",{staticClass:"total",staticStyle:{"text-align":"right"}},[_vm._v("0.00")])]),_vm._v(" "),_c("tr",{directives:[{name:"show",rawName:"v-show",value:_vm.pos_settings.show_shipping,expression:"pos_settings.show_shipping"}]},[_c("td",{staticClass:"total"},[_vm._v("Shipping")]),_vm._v(" "),_c("td",{staticClass:"total",staticStyle:{"text-align":"right"}},[_vm._v("1.25")])]),_vm._v(" "),_c("tr",[_c("td",{staticClass:"total"},[_vm._v("Total")]),_vm._v(" "),_c("td",{staticClass:"total",staticStyle:{"text-align":"right"}},[_vm._v("25.00")])]),_vm._v(" "),_c("tr",{directives:[{name:"show",rawName:"v-show",value:_vm.pos_settings.show_paid!==0,expression:"pos_settings.show_paid !== 0"}]},[_c("td",{staticClass:"total"},[_vm._v("Paid")]),_vm._v(" "),_c("td",{staticClass:"total",staticStyle:{"text-align":"right"}},[_vm._v("20.00")])]),_vm._v(" "),_c("tr",{directives:[{name:"show",rawName:"v-show",value:_vm.pos_settings.show_due!==0,expression:"pos_settings.show_due !== 0"}]},[_c("td",{staticClass:"total"},[_vm._v("Due")]),_vm._v(" "),_c("td",{staticClass:"total",staticStyle:{"text-align":"right"}},[_vm._v("5.00")])])])]),_vm._v(" "),_c("table",{directives:[{name:"show",rawName:"v-show",value:_vm.pos_settings.show_payments!==0,expression:"pos_settings.show_payments !== 0"}],staticClass:"table_data w-100 mt-1",staticStyle:{"font-size":"11px"}},[_c("thead",[_c("tr",[_c("th",{staticStyle:{"text-align":"left"}},[_vm._v("Pay By")]),_vm._v(" "),_c("th",{staticStyle:{"text-align":"right"}},[_vm._v("Amount")]),_vm._v(" "),_c("th",{staticStyle:{"text-align":"right"}},[_vm._v("Change")])])]),_vm._v(" "),_c("tbody",[_c("tr",[_c("td",[_vm._v("Cash")]),_vm._v(" "),_c("td",{staticStyle:{"text-align":"right"}},[_vm._v("20.00")]),_vm._v(" "),_c("td",{staticStyle:{"text-align":"right"}},[_vm._v("0.00")])])])]),_vm._v(" "),_c("p",{directives:[{name:"show",rawName:"v-show",value:_vm.pos_settings.show_note,expression:"pos_settings.show_note"}],staticClass:"mt-2 mb-0 text-center"},[_c("small",[_c("strong",[_vm._v(_vm._s(_vm.pos_settings.note_customer||"Thank you for your purchase!"))])])]),_vm._v(" "),_c("div",{directives:[{name:"show",rawName:"v-show",value:_vm.pos_settings.show_zatca_qr!==0,expression:"pos_settings.show_zatca_qr !== 0"}],staticClass:"mt-2 text-center"},[_c("div",{staticClass:"zatca-qr"},[_c("div",{staticClass:"zatca-qr-title"},[_vm._v("ZATCA")]),_vm._v(" "),_c("div",{staticClass:"demo-qr-box"})])])]):_c("div",{staticClass:"receipt-layout-3"},[_c("div",{staticClass:"info mb-2"},[_c("div",{staticClass:"d-flex justify-content-between"},[_c("div",[_c("strong",{directives:[{name:"show",rawName:"v-show",value:_vm.pos_settings.show_store_name!==0,expression:"pos_settings.show_store_name !== 0"}]},[_vm._v("Demo Store")]),_c("br"),_vm._v(" "),_c("small",{directives:[{name:"show",rawName:"v-show",value:_vm.pos_settings.show_reference!==0,expression:"pos_settings.show_reference !== 0"}]},[_vm._v("Ref: REF-12345")]),_c("br",{directives:[{name:"show",rawName:"v-show",value:_vm.pos_settings.show_reference!==0,expression:"pos_settings.show_reference !== 0"}]}),_vm._v(" "),_c("small",{directives:[{name:"show",rawName:"v-show",value:_vm.pos_settings.show_address,expression:"pos_settings.show_address"}]},[_vm._v("123 Demo Street")]),_c("br"),_vm._v(" "),_c("small",{directives:[{name:"show",rawName:"v-show",value:_vm.pos_settings.show_phone,expression:"pos_settings.show_phone"}]},[_vm._v("+123 456 789")])]),_vm._v(" "),_c("div",{directives:[{name:"show",rawName:"v-show",value:_vm.pos_settings.show_logo!==0,expression:"pos_settings.show_logo !== 0"}],staticClass:"demo-logo-rect"},[_vm._v("LOGO")])]),_vm._v(" "),_c("div",{staticClass:"mt-2",staticStyle:{"font-size":"11px"}},[_c("div",{directives:[{name:"show",rawName:"v-show",value:_vm.pos_settings.show_date!==0,expression:"pos_settings.show_date !== 0"}]},[_vm._v("Date: 2025-12-10 12:34")]),_vm._v(" "),_c("div",{directives:[{name:"show",rawName:"v-show",value:_vm.pos_settings.show_seller!==0,expression:"pos_settings.show_seller !== 0"}]},[_vm._v("Seller: John Doe")]),_vm._v(" "),_c("div",{directives:[{name:"show",rawName:"v-show",value:_vm.pos_settings.show_customer,expression:"pos_settings.show_customer"}]},[_vm._v("Customer: Jane Smith")]),_vm._v(" "),_c("div",{directives:[{name:"show",rawName:"v-show",value:_vm.pos_settings.show_Warehouse,expression:"pos_settings.show_Warehouse"}]},[_vm._v("Warehouse: Main Store")])])]),_vm._v(" "),_c("table",{staticClass:"table_data w-100 mb-2",staticStyle:{"font-size":"11px"}},[_c("tbody",[_c("tr",[_c("td",[_c("strong",[_vm._v("Demo Product A")]),_c("br"),_vm._v(" "),_c("small",[_vm._v("2 x 10.00")])]),_vm._v(" "),_c("td",{staticStyle:{"text-align":"right"}},[_vm._v("20.00")])]),_vm._v(" "),_c("tr",[_c("td",[_c("strong",[_vm._v("Demo Product B")]),_c("br"),_vm._v(" "),_c("small",[_vm._v("1 x 5.00")])]),_vm._v(" "),_c("td",{staticStyle:{"text-align":"right"}},[_vm._v("5.00")])])])]),_vm._v(" "),_c("table",{staticClass:"table_data w-100",staticStyle:{"font-size":"11px"}},[_c("tbody",[_c("tr",{directives:[{name:"show",rawName:"v-show",value:_vm.pos_settings.show_tax,expression:"pos_settings.show_tax"}]},[_c("td",{staticClass:"total"},[_vm._v("Tax")]),_vm._v(" "),_c("td",{staticClass:"total",staticStyle:{"text-align":"right"}},[_vm._v("1.25")])]),_vm._v(" "),_c("tr",{directives:[{name:"show",rawName:"v-show",value:_vm.pos_settings.show_discount,expression:"pos_settings.show_discount"}]},[_c("td",{staticClass:"total"},[_vm._v("Discount")]),_vm._v(" "),_c("td",{staticClass:"total",staticStyle:{"text-align":"right"}},[_vm._v("0.00")])]),_vm._v(" "),_c("tr",{directives:[{name:"show",rawName:"v-show",value:_vm.pos_settings.show_shipping,expression:"pos_settings.show_shipping"}]},[_c("td",{staticClass:"total"},[_vm._v("Shipping")]),_vm._v(" "),_c("td",{staticClass:"total",staticStyle:{"text-align":"right"}},[_vm._v("1.25")])]),_vm._v(" "),_c("tr",[_c("td",{staticClass:"total"},[_vm._v("Total")]),_vm._v(" "),_c("td",{staticClass:"total",staticStyle:{"text-align":"right"}},[_vm._v("26.25")])]),_vm._v(" "),_c("tr",{directives:[{name:"show",rawName:"v-show",value:_vm.pos_settings.show_paid!==0,expression:"pos_settings.show_paid !== 0"}]},[_c("td",{staticClass:"total"},[_vm._v("Paid")]),_vm._v(" "),_c("td",{staticClass:"total",staticStyle:{"text-align":"right"}},[_vm._v("25.00")])]),_vm._v(" "),_c("tr",{directives:[{name:"show",rawName:"v-show",value:_vm.pos_settings.show_due!==0,expression:"pos_settings.show_due !== 0"}]},[_c("td",{staticClass:"total"},[_vm._v("Due")]),_vm._v(" "),_c("td",{staticClass:"total",staticStyle:{"text-align":"right"}},[_vm._v("1.25")])])])]),_vm._v(" "),_c("table",{directives:[{name:"show",rawName:"v-show",value:_vm.pos_settings.show_payments!==0,expression:"pos_settings.show_payments !== 0"}],staticClass:"table_data w-100 mt-1",staticStyle:{"font-size":"11px"}},[_c("thead",[_c("tr",[_c("th",{staticStyle:{"text-align":"left"}},[_vm._v("Pay By")]),_vm._v(" "),_c("th",{staticStyle:{"text-align":"right"}},[_vm._v("Amount")]),_vm._v(" "),_c("th",{staticStyle:{"text-align":"right"}},[_vm._v("Change")])])]),_vm._v(" "),_c("tbody",[_c("tr",[_c("td",[_vm._v("Cash")]),_vm._v(" "),_c("td",{staticStyle:{"text-align":"right"}},[_vm._v("25.00")]),_vm._v(" "),_c("td",{staticStyle:{"text-align":"right"}},[_vm._v("0.00")])])])]),_vm._v(" "),_c("p",{directives:[{name:"show",rawName:"v-show",value:_vm.pos_settings.show_note,expression:"pos_settings.show_note"}],staticClass:"mt-2 mb-0 text-center"},[_c("small",[_c("strong",[_vm._v(_vm._s(_vm.pos_settings.note_customer||"Thank you for your purchase!"))])])]),_vm._v(" "),_c("div",{directives:[{name:"show",rawName:"v-show",value:_vm.pos_settings.show_zatca_qr!==0,expression:"pos_settings.show_zatca_qr !== 0"}],staticClass:"mt-2 text-center"},[_c("div",{staticClass:"zatca-qr"},[_c("div",{staticClass:"zatca-qr-title"},[_vm._v("ZATCA")]),_vm._v(" "),_c("div",{staticClass:"demo-qr-box"})])])])])])],1),_vm._v(" "),_c("b-col",{attrs:{lg:"12",md:"12",sm:"12"}},[_c("validation-provider",{attrs:{name:"note",rules:{required:true}},scopedSlots:_vm._u([{key:"default",fn:function fn(validationContext){return[_c("b-form-group",{attrs:{label:_vm.$t("Note_to_customer")+" "+"*"}},[_c("b-form-input",{attrs:{state:_vm.getValidationState(validationContext),"aria-describedby":"note-feedback",label:"Note to customer",placeholder:_vm.$t("Note_to_customer")},model:{value:_vm.pos_settings.note_customer,callback:function callback($$v){_vm.$set(_vm.pos_settings,"note_customer",$$v);},expression:"pos_settings.note_customer"}}),_vm._v(" "),_c("b-form-invalid-feedback",{attrs:{id:"note-feedback"}},[_vm._v(_vm._s(validationContext.errors[0]))])],1)];}}],null,false,1637698482)})],1),_vm._v(" "),_c("b-col",{staticClass:"mt-3 mb-3",attrs:{md:"4"}},[_c("label",{staticClass:"switch switch-primary mr-3"},[_vm._v("\n                          "+_vm._s(_vm.$t("Show_Logo"))+"\n                          "),_c("input",{directives:[{name:"model",rawName:"v-model",value:_vm.pos_settings.show_logo,expression:"pos_settings.show_logo"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(_vm.pos_settings.show_logo)?_vm._i(_vm.pos_settings.show_logo,null)>-1:_vm.pos_settings.show_logo},on:{change:function change($event){var $$a=_vm.pos_settings.show_logo,$$el=$event.target,$$c=$$el.checked?true:false;if(Array.isArray($$a)){var $$v=null,$$i=_vm._i($$a,$$v);if($$el.checked){$$i<0&&_vm.$set(_vm.pos_settings,"show_logo",$$a.concat([$$v]));}else{$$i>-1&&_vm.$set(_vm.pos_settings,"show_logo",$$a.slice(0,$$i).concat($$a.slice($$i+1)));}}else{_vm.$set(_vm.pos_settings,"show_logo",$$c);}}}}),_vm._v(" "),_c("span",{staticClass:"slider"})])]),_vm._v(" "),_c("b-col",{staticClass:"mt-3 mb-3",attrs:{md:"4"}},[_c("label",{staticClass:"switch switch-primary mr-3"},[_vm._v("\n                          "+_vm._s(_vm.$t("Show_Store_Name"))+"\n                          "),_c("input",{directives:[{name:"model",rawName:"v-model",value:_vm.pos_settings.show_store_name,expression:"pos_settings.show_store_name"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(_vm.pos_settings.show_store_name)?_vm._i(_vm.pos_settings.show_store_name,null)>-1:_vm.pos_settings.show_store_name},on:{change:function change($event){var $$a=_vm.pos_settings.show_store_name,$$el=$event.target,$$c=$$el.checked?true:false;if(Array.isArray($$a)){var $$v=null,$$i=_vm._i($$a,$$v);if($$el.checked){$$i<0&&_vm.$set(_vm.pos_settings,"show_store_name",$$a.concat([$$v]));}else{$$i>-1&&_vm.$set(_vm.pos_settings,"show_store_name",$$a.slice(0,$$i).concat($$a.slice($$i+1)));}}else{_vm.$set(_vm.pos_settings,"show_store_name",$$c);}}}}),_vm._v(" "),_c("span",{staticClass:"slider"})])]),_vm._v(" "),_c("b-col",{staticClass:"mt-3 mb-3",attrs:{md:"4"}},[_c("label",{staticClass:"switch switch-primary mr-3"},[_vm._v("\n                          "+_vm._s(_vm.$t("Show_Reference"))+"\n                          "),_c("input",{directives:[{name:"model",rawName:"v-model",value:_vm.pos_settings.show_reference,expression:"pos_settings.show_reference"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(_vm.pos_settings.show_reference)?_vm._i(_vm.pos_settings.show_reference,null)>-1:_vm.pos_settings.show_reference},on:{change:function change($event){var $$a=_vm.pos_settings.show_reference,$$el=$event.target,$$c=$$el.checked?true:false;if(Array.isArray($$a)){var $$v=null,$$i=_vm._i($$a,$$v);if($$el.checked){$$i<0&&_vm.$set(_vm.pos_settings,"show_reference",$$a.concat([$$v]));}else{$$i>-1&&_vm.$set(_vm.pos_settings,"show_reference",$$a.slice(0,$$i).concat($$a.slice($$i+1)));}}else{_vm.$set(_vm.pos_settings,"show_reference",$$c);}}}}),_vm._v(" "),_c("span",{staticClass:"slider"})])]),_vm._v(" "),_c("b-col",{staticClass:"mt-3 mb-3",attrs:{md:"4"}},[_c("label",{staticClass:"switch switch-primary mr-3"},[_vm._v("\n                          "+_vm._s(_vm.$t("Show_Date"))+"\n                          "),_c("input",{directives:[{name:"model",rawName:"v-model",value:_vm.pos_settings.show_date,expression:"pos_settings.show_date"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(_vm.pos_settings.show_date)?_vm._i(_vm.pos_settings.show_date,null)>-1:_vm.pos_settings.show_date},on:{change:function change($event){var $$a=_vm.pos_settings.show_date,$$el=$event.target,$$c=$$el.checked?true:false;if(Array.isArray($$a)){var $$v=null,$$i=_vm._i($$a,$$v);if($$el.checked){$$i<0&&_vm.$set(_vm.pos_settings,"show_date",$$a.concat([$$v]));}else{$$i>-1&&_vm.$set(_vm.pos_settings,"show_date",$$a.slice(0,$$i).concat($$a.slice($$i+1)));}}else{_vm.$set(_vm.pos_settings,"show_date",$$c);}}}}),_vm._v(" "),_c("span",{staticClass:"slider"})])]),_vm._v(" "),_c("b-col",{staticClass:"mt-3 mb-3",attrs:{md:"4"}},[_c("label",{staticClass:"switch switch-primary mr-3"},[_vm._v("\n                          "+_vm._s(_vm.$t("Show_Seller"))+"\n                          "),_c("input",{directives:[{name:"model",rawName:"v-model",value:_vm.pos_settings.show_seller,expression:"pos_settings.show_seller"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(_vm.pos_settings.show_seller)?_vm._i(_vm.pos_settings.show_seller,null)>-1:_vm.pos_settings.show_seller},on:{change:function change($event){var $$a=_vm.pos_settings.show_seller,$$el=$event.target,$$c=$$el.checked?true:false;if(Array.isArray($$a)){var $$v=null,$$i=_vm._i($$a,$$v);if($$el.checked){$$i<0&&_vm.$set(_vm.pos_settings,"show_seller",$$a.concat([$$v]));}else{$$i>-1&&_vm.$set(_vm.pos_settings,"show_seller",$$a.slice(0,$$i).concat($$a.slice($$i+1)));}}else{_vm.$set(_vm.pos_settings,"show_seller",$$c);}}}}),_vm._v(" "),_c("span",{staticClass:"slider"})])]),_vm._v(" "),_c("b-col",{staticClass:"mt-3 mb-3",attrs:{md:"4"}},[_c("label",{staticClass:"switch switch-primary mr-3"},[_vm._v("\n                          "+_vm._s(_vm.$t("Show_Phone"))+"\n                          "),_c("input",{directives:[{name:"model",rawName:"v-model",value:_vm.pos_settings.show_phone,expression:"pos_settings.show_phone"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(_vm.pos_settings.show_phone)?_vm._i(_vm.pos_settings.show_phone,null)>-1:_vm.pos_settings.show_phone},on:{change:function change($event){var $$a=_vm.pos_settings.show_phone,$$el=$event.target,$$c=$$el.checked?true:false;if(Array.isArray($$a)){var $$v=null,$$i=_vm._i($$a,$$v);if($$el.checked){$$i<0&&_vm.$set(_vm.pos_settings,"show_phone",$$a.concat([$$v]));}else{$$i>-1&&_vm.$set(_vm.pos_settings,"show_phone",$$a.slice(0,$$i).concat($$a.slice($$i+1)));}}else{_vm.$set(_vm.pos_settings,"show_phone",$$c);}}}}),_vm._v(" "),_c("span",{staticClass:"slider"})])]),_vm._v(" "),_c("b-col",{staticClass:"mt-3 mb-3",attrs:{md:"4"}},[_c("label",{staticClass:"switch switch-primary mr-3"},[_vm._v("\n                          "+_vm._s(_vm.$t("Show_Address"))+"\n                          "),_c("input",{directives:[{name:"model",rawName:"v-model",value:_vm.pos_settings.show_address,expression:"pos_settings.show_address"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(_vm.pos_settings.show_address)?_vm._i(_vm.pos_settings.show_address,null)>-1:_vm.pos_settings.show_address},on:{change:function change($event){var $$a=_vm.pos_settings.show_address,$$el=$event.target,$$c=$$el.checked?true:false;if(Array.isArray($$a)){var $$v=null,$$i=_vm._i($$a,$$v);if($$el.checked){$$i<0&&_vm.$set(_vm.pos_settings,"show_address",$$a.concat([$$v]));}else{$$i>-1&&_vm.$set(_vm.pos_settings,"show_address",$$a.slice(0,$$i).concat($$a.slice($$i+1)));}}else{_vm.$set(_vm.pos_settings,"show_address",$$c);}}}}),_vm._v(" "),_c("span",{staticClass:"slider"})])]),_vm._v(" "),_c("b-col",{staticClass:"mt-3 mb-3",attrs:{md:"4"}},[_c("label",{staticClass:"switch switch-primary mr-3"},[_vm._v("\n                          "+_vm._s(_vm.$t("Show_Email"))+"\n                          "),_c("input",{directives:[{name:"model",rawName:"v-model",value:_vm.pos_settings.show_email,expression:"pos_settings.show_email"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(_vm.pos_settings.show_email)?_vm._i(_vm.pos_settings.show_email,null)>-1:_vm.pos_settings.show_email},on:{change:function change($event){var $$a=_vm.pos_settings.show_email,$$el=$event.target,$$c=$$el.checked?true:false;if(Array.isArray($$a)){var $$v=null,$$i=_vm._i($$a,$$v);if($$el.checked){$$i<0&&_vm.$set(_vm.pos_settings,"show_email",$$a.concat([$$v]));}else{$$i>-1&&_vm.$set(_vm.pos_settings,"show_email",$$a.slice(0,$$i).concat($$a.slice($$i+1)));}}else{_vm.$set(_vm.pos_settings,"show_email",$$c);}}}}),_vm._v(" "),_c("span",{staticClass:"slider"})])]),_vm._v(" "),_c("b-col",{staticClass:"mt-3 mb-3",attrs:{md:"4"}},[_c("label",{staticClass:"switch switch-primary mr-3"},[_vm._v("\n                          "+_vm._s(_vm.$t("Show_Customer"))+"\n                          "),_c("input",{directives:[{name:"model",rawName:"v-model",value:_vm.pos_settings.show_customer,expression:"pos_settings.show_customer"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(_vm.pos_settings.show_customer)?_vm._i(_vm.pos_settings.show_customer,null)>-1:_vm.pos_settings.show_customer},on:{change:function change($event){var $$a=_vm.pos_settings.show_customer,$$el=$event.target,$$c=$$el.checked?true:false;if(Array.isArray($$a)){var $$v=null,$$i=_vm._i($$a,$$v);if($$el.checked){$$i<0&&_vm.$set(_vm.pos_settings,"show_customer",$$a.concat([$$v]));}else{$$i>-1&&_vm.$set(_vm.pos_settings,"show_customer",$$a.slice(0,$$i).concat($$a.slice($$i+1)));}}else{_vm.$set(_vm.pos_settings,"show_customer",$$c);}}}}),_vm._v(" "),_c("span",{staticClass:"slider"})])]),_vm._v(" "),_c("b-col",{staticClass:"mt-3 mb-3",attrs:{md:"4"}},[_c("label",{staticClass:"switch switch-primary mr-3"},[_vm._v("\n                          "+_vm._s(_vm.$t("Show_Warehouse"))+"\n                          "),_c("input",{directives:[{name:"model",rawName:"v-model",value:_vm.pos_settings.show_Warehouse,expression:"pos_settings.show_Warehouse"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(_vm.pos_settings.show_Warehouse)?_vm._i(_vm.pos_settings.show_Warehouse,null)>-1:_vm.pos_settings.show_Warehouse},on:{change:function change($event){var $$a=_vm.pos_settings.show_Warehouse,$$el=$event.target,$$c=$$el.checked?true:false;if(Array.isArray($$a)){var $$v=null,$$i=_vm._i($$a,$$v);if($$el.checked){$$i<0&&_vm.$set(_vm.pos_settings,"show_Warehouse",$$a.concat([$$v]));}else{$$i>-1&&_vm.$set(_vm.pos_settings,"show_Warehouse",$$a.slice(0,$$i).concat($$a.slice($$i+1)));}}else{_vm.$set(_vm.pos_settings,"show_Warehouse",$$c);}}}}),_vm._v(" "),_c("span",{staticClass:"slider"})])]),_vm._v(" "),_c("b-col",{staticClass:"mt-3 mb-3",attrs:{md:"4"}},[_c("label",{staticClass:"switch switch-primary mr-3"},[_vm._v("\n                          "+_vm._s(_vm.$t("Show_Tax"))+"\n                          "),_c("input",{directives:[{name:"model",rawName:"v-model",value:_vm.pos_settings.show_tax,expression:"pos_settings.show_tax"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(_vm.pos_settings.show_tax)?_vm._i(_vm.pos_settings.show_tax,null)>-1:_vm.pos_settings.show_tax},on:{change:function change($event){var $$a=_vm.pos_settings.show_tax,$$el=$event.target,$$c=$$el.checked?true:false;if(Array.isArray($$a)){var $$v=null,$$i=_vm._i($$a,$$v);if($$el.checked){$$i<0&&_vm.$set(_vm.pos_settings,"show_tax",$$a.concat([$$v]));}else{$$i>-1&&_vm.$set(_vm.pos_settings,"show_tax",$$a.slice(0,$$i).concat($$a.slice($$i+1)));}}else{_vm.$set(_vm.pos_settings,"show_tax",$$c);}}}}),_vm._v(" "),_c("span",{staticClass:"slider"})])]),_vm._v(" "),_c("b-col",{staticClass:"mt-3 mb-3",attrs:{md:"4"}},[_c("label",{staticClass:"switch switch-primary mr-3"},[_vm._v("\n                          "+_vm._s(_vm.$t("Show_Discount"))+"\n                          "),_c("input",{directives:[{name:"model",rawName:"v-model",value:_vm.pos_settings.show_discount,expression:"pos_settings.show_discount"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(_vm.pos_settings.show_discount)?_vm._i(_vm.pos_settings.show_discount,null)>-1:_vm.pos_settings.show_discount},on:{change:function change($event){var $$a=_vm.pos_settings.show_discount,$$el=$event.target,$$c=$$el.checked?true:false;if(Array.isArray($$a)){var $$v=null,$$i=_vm._i($$a,$$v);if($$el.checked){$$i<0&&_vm.$set(_vm.pos_settings,"show_discount",$$a.concat([$$v]));}else{$$i>-1&&_vm.$set(_vm.pos_settings,"show_discount",$$a.slice(0,$$i).concat($$a.slice($$i+1)));}}else{_vm.$set(_vm.pos_settings,"show_discount",$$c);}}}}),_vm._v(" "),_c("span",{staticClass:"slider"})])]),_vm._v(" "),_c("b-col",{staticClass:"mt-3 mb-3",attrs:{md:"4"}},[_c("label",{staticClass:"switch switch-primary mr-3"},[_vm._v("\n                          "+_vm._s(_vm.$t("Show_Shipping"))+"\n                          "),_c("input",{directives:[{name:"model",rawName:"v-model",value:_vm.pos_settings.show_shipping,expression:"pos_settings.show_shipping"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(_vm.pos_settings.show_shipping)?_vm._i(_vm.pos_settings.show_shipping,null)>-1:_vm.pos_settings.show_shipping},on:{change:function change($event){var $$a=_vm.pos_settings.show_shipping,$$el=$event.target,$$c=$$el.checked?true:false;if(Array.isArray($$a)){var $$v=null,$$i=_vm._i($$a,$$v);if($$el.checked){$$i<0&&_vm.$set(_vm.pos_settings,"show_shipping",$$a.concat([$$v]));}else{$$i>-1&&_vm.$set(_vm.pos_settings,"show_shipping",$$a.slice(0,$$i).concat($$a.slice($$i+1)));}}else{_vm.$set(_vm.pos_settings,"show_shipping",$$c);}}}}),_vm._v(" "),_c("span",{staticClass:"slider"})])]),_vm._v(" "),_c("b-col",{staticClass:"mt-3 mb-3",attrs:{md:"4"}},[_c("label",{staticClass:"switch switch-primary mr-3"},[_vm._v("\n                          "+_vm._s(_vm.$t("Show_barcode"))+"\n                          "),_c("input",{directives:[{name:"model",rawName:"v-model",value:_vm.pos_settings.show_barcode,expression:"pos_settings.show_barcode"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(_vm.pos_settings.show_barcode)?_vm._i(_vm.pos_settings.show_barcode,null)>-1:_vm.pos_settings.show_barcode},on:{change:function change($event){var $$a=_vm.pos_settings.show_barcode,$$el=$event.target,$$c=$$el.checked?true:false;if(Array.isArray($$a)){var $$v=null,$$i=_vm._i($$a,$$v);if($$el.checked){$$i<0&&_vm.$set(_vm.pos_settings,"show_barcode",$$a.concat([$$v]));}else{$$i>-1&&_vm.$set(_vm.pos_settings,"show_barcode",$$a.slice(0,$$i).concat($$a.slice($$i+1)));}}else{_vm.$set(_vm.pos_settings,"show_barcode",$$c);}}}}),_vm._v(" "),_c("span",{staticClass:"slider"})])]),_vm._v(" "),_c("b-col",{staticClass:"mt-3 mb-3",attrs:{md:"4"}},[_c("label",{staticClass:"switch switch-primary mr-3"},[_vm._v("\n                          "+_vm._s(_vm.$t("Show_Note_to_customer"))+"\n                          "),_c("input",{directives:[{name:"model",rawName:"v-model",value:_vm.pos_settings.show_note,expression:"pos_settings.show_note"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(_vm.pos_settings.show_note)?_vm._i(_vm.pos_settings.show_note,null)>-1:_vm.pos_settings.show_note},on:{change:function change($event){var $$a=_vm.pos_settings.show_note,$$el=$event.target,$$c=$$el.checked?true:false;if(Array.isArray($$a)){var $$v=null,$$i=_vm._i($$a,$$v);if($$el.checked){$$i<0&&_vm.$set(_vm.pos_settings,"show_note",$$a.concat([$$v]));}else{$$i>-1&&_vm.$set(_vm.pos_settings,"show_note",$$a.slice(0,$$i).concat($$a.slice($$i+1)));}}else{_vm.$set(_vm.pos_settings,"show_note",$$c);}}}}),_vm._v(" "),_c("span",{staticClass:"slider"})])]),_vm._v(" "),_c("b-col",{staticClass:"mt-3 mb-3",attrs:{md:"4"}},[_c("label",{staticClass:"switch switch-primary mr-3"},[_vm._v("\n                          "+_vm._s(_vm.$t("Show_Paid_Line"))+"\n                          "),_c("input",{directives:[{name:"model",rawName:"v-model",value:_vm.pos_settings.show_paid,expression:"pos_settings.show_paid"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(_vm.pos_settings.show_paid)?_vm._i(_vm.pos_settings.show_paid,null)>-1:_vm.pos_settings.show_paid},on:{change:function change($event){var $$a=_vm.pos_settings.show_paid,$$el=$event.target,$$c=$$el.checked?true:false;if(Array.isArray($$a)){var $$v=null,$$i=_vm._i($$a,$$v);if($$el.checked){$$i<0&&_vm.$set(_vm.pos_settings,"show_paid",$$a.concat([$$v]));}else{$$i>-1&&_vm.$set(_vm.pos_settings,"show_paid",$$a.slice(0,$$i).concat($$a.slice($$i+1)));}}else{_vm.$set(_vm.pos_settings,"show_paid",$$c);}}}}),_vm._v(" "),_c("span",{staticClass:"slider"})])]),_vm._v(" "),_c("b-col",{staticClass:"mt-3 mb-3",attrs:{md:"4"}},[_c("label",{staticClass:"switch switch-primary mr-3"},[_vm._v("\n                          "+_vm._s(_vm.$t("Show_Due_Line"))+"\n                          "),_c("input",{directives:[{name:"model",rawName:"v-model",value:_vm.pos_settings.show_due,expression:"pos_settings.show_due"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(_vm.pos_settings.show_due)?_vm._i(_vm.pos_settings.show_due,null)>-1:_vm.pos_settings.show_due},on:{change:function change($event){var $$a=_vm.pos_settings.show_due,$$el=$event.target,$$c=$$el.checked?true:false;if(Array.isArray($$a)){var $$v=null,$$i=_vm._i($$a,$$v);if($$el.checked){$$i<0&&_vm.$set(_vm.pos_settings,"show_due",$$a.concat([$$v]));}else{$$i>-1&&_vm.$set(_vm.pos_settings,"show_due",$$a.slice(0,$$i).concat($$a.slice($$i+1)));}}else{_vm.$set(_vm.pos_settings,"show_due",$$c);}}}}),_vm._v(" "),_c("span",{staticClass:"slider"})])]),_vm._v(" "),_c("b-col",{staticClass:"mt-3 mb-3",attrs:{md:"4"}},[_c("label",{staticClass:"switch switch-primary mr-3"},[_vm._v("\n                          "+_vm._s(_vm.$t("Show_Payments_Table"))+"\n                          "),_c("input",{directives:[{name:"model",rawName:"v-model",value:_vm.pos_settings.show_payments,expression:"pos_settings.show_payments"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(_vm.pos_settings.show_payments)?_vm._i(_vm.pos_settings.show_payments,null)>-1:_vm.pos_settings.show_payments},on:{change:function change($event){var $$a=_vm.pos_settings.show_payments,$$el=$event.target,$$c=$$el.checked?true:false;if(Array.isArray($$a)){var $$v=null,$$i=_vm._i($$a,$$v);if($$el.checked){$$i<0&&_vm.$set(_vm.pos_settings,"show_payments",$$a.concat([$$v]));}else{$$i>-1&&_vm.$set(_vm.pos_settings,"show_payments",$$a.slice(0,$$i).concat($$a.slice($$i+1)));}}else{_vm.$set(_vm.pos_settings,"show_payments",$$c);}}}}),_vm._v(" "),_c("span",{staticClass:"slider"})])]),_vm._v(" "),_c("b-col",{staticClass:"mt-3 mb-3",attrs:{md:"4"}},[_c("label",{staticClass:"switch switch-primary mr-3"},[_vm._v("\n                          "+_vm._s(_vm.$t("Show_ZATCA_QR"))+"\n                          "),_c("input",{directives:[{name:"model",rawName:"v-model",value:_vm.pos_settings.show_zatca_qr,expression:"pos_settings.show_zatca_qr"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(_vm.pos_settings.show_zatca_qr)?_vm._i(_vm.pos_settings.show_zatca_qr,null)>-1:_vm.pos_settings.show_zatca_qr},on:{change:function change($event){var $$a=_vm.pos_settings.show_zatca_qr,$$el=$event.target,$$c=$$el.checked?true:false;if(Array.isArray($$a)){var $$v=null,$$i=_vm._i($$a,$$v);if($$el.checked){$$i<0&&_vm.$set(_vm.pos_settings,"show_zatca_qr",$$a.concat([$$v]));}else{$$i>-1&&_vm.$set(_vm.pos_settings,"show_zatca_qr",$$a.slice(0,$$i).concat($$a.slice($$i+1)));}}else{_vm.$set(_vm.pos_settings,"show_zatca_qr",$$c);}}}}),_vm._v(" "),_c("span",{staticClass:"slider"})])])],1),_vm._v(" "),_c("b-row",{staticClass:"mt-4"},[_c("b-col",{staticClass:"mb-3",attrs:{md:"12"}},[_c("hr",{staticClass:"my-4"}),_vm._v(" "),_c("h6",{staticClass:"mb-3"},[_vm._v(_vm._s(_vm.$t("Receipt_Settings")))])]),_vm._v(" "),_c("b-col",{staticClass:"mt-3 mb-3",attrs:{md:"6"}},[_c("b-form-group",{attrs:{label:_vm.$t("Receipt_Paper_Size")}},[_c("b-form-select",{attrs:{options:[{value:58,text:_vm.$t("Paper_58mm")},{value:80,text:_vm.$t("Paper_80mm")},{value:88,text:_vm.$t("Paper_88mm")}]},model:{value:_vm.pos_settings.receipt_paper_size,callback:function callback($$v){_vm.$set(_vm.pos_settings,"receipt_paper_size",$$v);},expression:"pos_settings.receipt_paper_size"}})],1)],1),_vm._v(" "),_c("b-col",{staticClass:"mt-3 mb-3",attrs:{md:"6"}},[_c("b-form-group",{attrs:{label:_vm.$t("Logo_Size")}},[_c("b-form-select",{attrs:{options:[{value:"small",text:_vm.$t("Small")+" (40px)"},{value:"medium",text:_vm.$t("Medium")+" (60px)"},{value:"large",text:_vm.$t("Large")+" (80px)"},{value:"custom",text:_vm.$t("Custom")}]},model:{value:_vm.logoSizeType,callback:function callback($$v){_vm.logoSizeType=$$v;},expression:"logoSizeType"}})],1)],1),_vm._v(" "),_vm.logoSizeType==="custom"?_c("b-col",{staticClass:"mt-3 mb-3",attrs:{md:"6"}},[_c("b-form-group",{attrs:{label:_vm.$t("Custom_Logo_Size")+" (px)"}},[_c("b-form-input",{attrs:{type:"number",placeholder:"Enter size in pixels",min:"20",max:"200"},model:{value:_vm.pos_settings.logo_size,callback:function callback($$v){_vm.$set(_vm.pos_settings,"logo_size",$$v);},expression:"pos_settings.logo_size"}}),_vm._v(" "),_c("small",{staticClass:"text-muted"},[_vm._v(_vm._s(_vm.$t("Logo_Size_Description")))])],1)],1):_vm._e()],1),_vm._v(" "),_c("b-row",{staticClass:"mt-4"},[_c("b-col",{staticClass:"d-flex justify-content-end",attrs:{lg:"12"}},[_c("b-button",{attrs:{variant:"primary",size:"lg"},on:{click:function click($event){return _vm.Submit_POS_Settings();}}},[_vm._v("\n"+_vm._s(_vm.$t("submit"))+"\n                        ")])],1)],1)],1),_vm._v(" "),_c("div",{directives:[{name:"show",rawName:"v-show",value:_vm.activeTab==="pos_settings",expression:"activeTab === 'pos_settings'"}],staticClass:"tab-content"},[_c("b-row",[_c("b-col",{staticClass:"mt-3 mb-3",attrs:{md:"4"}},[_c("label",{staticClass:"switch switch-primary mr-3"},[_vm._v("\n                          "+_vm._s(_vm.$t("Quick_Add_Customer"))+"\n                          "),_c("input",{directives:[{name:"model",rawName:"v-model",value:_vm.pos_settings.quick_add_customer,expression:"pos_settings.quick_add_customer"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(_vm.pos_settings.quick_add_customer)?_vm._i(_vm.pos_settings.quick_add_customer,null)>-1:_vm.pos_settings.quick_add_customer},on:{change:function change($event){var $$a=_vm.pos_settings.quick_add_customer,$$el=$event.target,$$c=$$el.checked?true:false;if(Array.isArray($$a)){var $$v=null,$$i=_vm._i($$a,$$v);if($$el.checked){$$i<0&&_vm.$set(_vm.pos_settings,"quick_add_customer",$$a.concat([$$v]));}else{$$i>-1&&_vm.$set(_vm.pos_settings,"quick_add_customer",$$a.slice(0,$$i).concat($$a.slice($$i+1)));}}else{_vm.$set(_vm.pos_settings,"quick_add_customer",$$c);}}}}),_vm._v(" "),_c("span",{staticClass:"slider"})]),_vm._v(" "),_c("small",{staticClass:"text-muted d-block mt-2"},[_vm._v(_vm._s(_vm.$t("Enable_Quick_Add_Customer_popup_in_POS")))])]),_vm._v(" "),_c("b-col",{staticClass:"mt-3 mb-3",attrs:{md:"4"}},[_c("label",{staticClass:"switch switch-primary mr-3"},[_vm._v("\n                          "+_vm._s(_vm.$t("Barcode_Scanning_Sound"))+"\n                          "),_c("input",{directives:[{name:"model",rawName:"v-model",value:_vm.pos_settings.barcode_scanning_sound,expression:"pos_settings.barcode_scanning_sound"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(_vm.pos_settings.barcode_scanning_sound)?_vm._i(_vm.pos_settings.barcode_scanning_sound,null)>-1:_vm.pos_settings.barcode_scanning_sound},on:{change:function change($event){var $$a=_vm.pos_settings.barcode_scanning_sound,$$el=$event.target,$$c=$$el.checked?true:false;if(Array.isArray($$a)){var $$v=null,$$i=_vm._i($$a,$$v);if($$el.checked){$$i<0&&_vm.$set(_vm.pos_settings,"barcode_scanning_sound",$$a.concat([$$v]));}else{$$i>-1&&_vm.$set(_vm.pos_settings,"barcode_scanning_sound",$$a.slice(0,$$i).concat($$a.slice($$i+1)));}}else{_vm.$set(_vm.pos_settings,"barcode_scanning_sound",$$c);}}}}),_vm._v(" "),_c("span",{staticClass:"slider"})]),_vm._v(" "),_c("small",{staticClass:"text-muted d-block mt-2"},[_vm._v(_vm._s(_vm.$t("Enable_sound_when_scanning_barcodes_in_POS")))])]),_vm._v(" "),_c("b-col",{staticClass:"mt-3 mb-3",attrs:{md:"4"}},[_c("label",{staticClass:"switch switch-primary mr-3"},[_vm._v("\n                          "+_vm._s(_vm.$t("Show_Product_Images_in_POS"))+"\n                          "),_c("input",{directives:[{name:"model",rawName:"v-model",value:_vm.pos_settings.show_product_images,expression:"pos_settings.show_product_images"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(_vm.pos_settings.show_product_images)?_vm._i(_vm.pos_settings.show_product_images,null)>-1:_vm.pos_settings.show_product_images},on:{change:function change($event){var $$a=_vm.pos_settings.show_product_images,$$el=$event.target,$$c=$$el.checked?true:false;if(Array.isArray($$a)){var $$v=null,$$i=_vm._i($$a,$$v);if($$el.checked){$$i<0&&_vm.$set(_vm.pos_settings,"show_product_images",$$a.concat([$$v]));}else{$$i>-1&&_vm.$set(_vm.pos_settings,"show_product_images",$$a.slice(0,$$i).concat($$a.slice($$i+1)));}}else{_vm.$set(_vm.pos_settings,"show_product_images",$$c);}}}}),_vm._v(" "),_c("span",{staticClass:"slider"})]),_vm._v(" "),_c("small",{staticClass:"text-muted d-block mt-2"},[_vm._v(_vm._s(_vm.$t("Show_hide_product_images_in_POS_product_listing")))])]),_vm._v(" "),_c("b-col",{staticClass:"mt-3 mb-3",attrs:{md:"4"}},[_c("label",{staticClass:"switch switch-primary mr-3"},[_vm._v("\n                          "+_vm._s(_vm.$t("Show_Stock_Quantity_in_POS"))+"\n                          "),_c("input",{directives:[{name:"model",rawName:"v-model",value:_vm.pos_settings.show_stock_quantity,expression:"pos_settings.show_stock_quantity"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(_vm.pos_settings.show_stock_quantity)?_vm._i(_vm.pos_settings.show_stock_quantity,null)>-1:_vm.pos_settings.show_stock_quantity},on:{change:function change($event){var $$a=_vm.pos_settings.show_stock_quantity,$$el=$event.target,$$c=$$el.checked?true:false;if(Array.isArray($$a)){var $$v=null,$$i=_vm._i($$a,$$v);if($$el.checked){$$i<0&&_vm.$set(_vm.pos_settings,"show_stock_quantity",$$a.concat([$$v]));}else{$$i>-1&&_vm.$set(_vm.pos_settings,"show_stock_quantity",$$a.slice(0,$$i).concat($$a.slice($$i+1)));}}else{_vm.$set(_vm.pos_settings,"show_stock_quantity",$$c);}}}}),_vm._v(" "),_c("span",{staticClass:"slider"})]),_vm._v(" "),_c("small",{staticClass:"text-muted d-block mt-2"},[_vm._v(_vm._s(_vm.$t("Show_hide_stock_quantity_in_POS")))])]),_vm._v(" "),_c("b-col",{staticClass:"mt-3 mb-3",attrs:{md:"4"}},[_c("label",{staticClass:"switch switch-primary mr-3"},[_vm._v("\n                          "+_vm._s(_vm.$t("Enable_Print_Invoice"))+"\n                          "),_c("input",{directives:[{name:"model",rawName:"v-model",value:_vm.pos_settings.is_printable,expression:"pos_settings.is_printable"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(_vm.pos_settings.is_printable)?_vm._i(_vm.pos_settings.is_printable,null)>-1:_vm.pos_settings.is_printable},on:{change:function change($event){var $$a=_vm.pos_settings.is_printable,$$el=$event.target,$$c=$$el.checked?true:false;if(Array.isArray($$a)){var $$v=null,$$i=_vm._i($$a,$$v);if($$el.checked){$$i<0&&_vm.$set(_vm.pos_settings,"is_printable",$$a.concat([$$v]));}else{$$i>-1&&_vm.$set(_vm.pos_settings,"is_printable",$$a.slice(0,$$i).concat($$a.slice($$i+1)));}}else{_vm.$set(_vm.pos_settings,"is_printable",$$c);}}}}),_vm._v(" "),_c("span",{staticClass:"slider"})]),_vm._v(" "),_c("small",{staticClass:"text-muted d-block mt-2"},[_vm._v(_vm._s(_vm.$t("Enable_Print_Invoice_help")))])]),_vm._v(" "),_c("b-col",{staticClass:"mt-3 mb-3",attrs:{md:"4"}},[_c("label",{staticClass:"switch switch-primary mr-3"},[_vm._v("\n                          "+_vm._s(_vm.$t("Enable_Hold_Sales"))+"\n                          "),_c("input",{directives:[{name:"model",rawName:"v-model",value:_vm.pos_settings.enable_hold_sales,expression:"pos_settings.enable_hold_sales"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(_vm.pos_settings.enable_hold_sales)?_vm._i(_vm.pos_settings.enable_hold_sales,null)>-1:_vm.pos_settings.enable_hold_sales},on:{change:function change($event){var $$a=_vm.pos_settings.enable_hold_sales,$$el=$event.target,$$c=$$el.checked?true:false;if(Array.isArray($$a)){var $$v=null,$$i=_vm._i($$a,$$v);if($$el.checked){$$i<0&&_vm.$set(_vm.pos_settings,"enable_hold_sales",$$a.concat([$$v]));}else{$$i>-1&&_vm.$set(_vm.pos_settings,"enable_hold_sales",$$a.slice(0,$$i).concat($$a.slice($$i+1)));}}else{_vm.$set(_vm.pos_settings,"enable_hold_sales",$$c);}}}}),_vm._v(" "),_c("span",{staticClass:"slider"})]),_vm._v(" "),_c("small",{staticClass:"text-muted d-block mt-2"},[_vm._v(_vm._s(_vm.$t("Enable_disable_Hold_Sales_feature_in_POS")))])]),_vm._v(" "),_c("b-col",{staticClass:"mt-3 mb-3",attrs:{md:"4"}},[_c("label",{staticClass:"switch switch-primary mr-3"},[_vm._v("\n                          "+_vm._s(_vm.$t("Enable_Customer_Points_in_POS"))+"\n                          "),_c("input",{directives:[{name:"model",rawName:"v-model",value:_vm.pos_settings.enable_customer_points,expression:"pos_settings.enable_customer_points"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(_vm.pos_settings.enable_customer_points)?_vm._i(_vm.pos_settings.enable_customer_points,null)>-1:_vm.pos_settings.enable_customer_points},on:{change:function change($event){var $$a=_vm.pos_settings.enable_customer_points,$$el=$event.target,$$c=$$el.checked?true:false;if(Array.isArray($$a)){var $$v=null,$$i=_vm._i($$a,$$v);if($$el.checked){$$i<0&&_vm.$set(_vm.pos_settings,"enable_customer_points",$$a.concat([$$v]));}else{$$i>-1&&_vm.$set(_vm.pos_settings,"enable_customer_points",$$a.slice(0,$$i).concat($$a.slice($$i+1)));}}else{_vm.$set(_vm.pos_settings,"enable_customer_points",$$c);}}}}),_vm._v(" "),_c("span",{staticClass:"slider"})]),_vm._v(" "),_c("small",{staticClass:"text-muted d-block mt-2"},[_vm._v(_vm._s(_vm.$t("Enable_disable_customer_points_system_in_POS")))])]),_vm._v(" "),_c("b-col",{staticClass:"mt-3 mb-3",attrs:{md:"4"}},[_c("label",{staticClass:"switch switch-primary mr-3"},[_vm._v("\n                          "+_vm._s(_vm.$t("Show_Categories_in_POS"))+"\n                          "),_c("input",{directives:[{name:"model",rawName:"v-model",value:_vm.pos_settings.show_categories,expression:"pos_settings.show_categories"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(_vm.pos_settings.show_categories)?_vm._i(_vm.pos_settings.show_categories,null)>-1:_vm.pos_settings.show_categories},on:{change:function change($event){var $$a=_vm.pos_settings.show_categories,$$el=$event.target,$$c=$$el.checked?true:false;if(Array.isArray($$a)){var $$v=null,$$i=_vm._i($$a,$$v);if($$el.checked){$$i<0&&_vm.$set(_vm.pos_settings,"show_categories",$$a.concat([$$v]));}else{$$i>-1&&_vm.$set(_vm.pos_settings,"show_categories",$$a.slice(0,$$i).concat($$a.slice($$i+1)));}}else{_vm.$set(_vm.pos_settings,"show_categories",$$c);}}}}),_vm._v(" "),_c("span",{staticClass:"slider"})]),_vm._v(" "),_c("small",{staticClass:"text-muted d-block mt-2"},[_vm._v(_vm._s(_vm.$t("Show_hide_categories_in_POS")))])]),_vm._v(" "),_c("b-col",{staticClass:"mt-3 mb-3",attrs:{md:"4"}},[_c("label",{staticClass:"switch switch-primary mr-3"},[_vm._v("\n                          "+_vm._s(_vm.$t("Show_Brands_in_POS"))+"\n                          "),_c("input",{directives:[{name:"model",rawName:"v-model",value:_vm.pos_settings.show_brands,expression:"pos_settings.show_brands"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(_vm.pos_settings.show_brands)?_vm._i(_vm.pos_settings.show_brands,null)>-1:_vm.pos_settings.show_brands},on:{change:function change($event){var $$a=_vm.pos_settings.show_brands,$$el=$event.target,$$c=$$el.checked?true:false;if(Array.isArray($$a)){var $$v=null,$$i=_vm._i($$a,$$v);if($$el.checked){$$i<0&&_vm.$set(_vm.pos_settings,"show_brands",$$a.concat([$$v]));}else{$$i>-1&&_vm.$set(_vm.pos_settings,"show_brands",$$a.slice(0,$$i).concat($$a.slice($$i+1)));}}else{_vm.$set(_vm.pos_settings,"show_brands",$$c);}}}}),_vm._v(" "),_c("span",{staticClass:"slider"})]),_vm._v(" "),_c("small",{staticClass:"text-muted d-block mt-2"},[_vm._v(_vm._s(_vm.$t("Show_hide_brands_in_POS")))])]),_vm._v(" "),_c("b-col",{staticClass:"mb-3",attrs:{lg:"12",md:"12",sm:"12"}},[_c("b-form-group",{attrs:{label:_vm.$t("Invoice_Format")}},[_c("b-form-radio-group",{attrs:{options:_vm.invoiceFormatOptions.map(function(opt){return{value:opt.value,text:_vm.$t(opt.textKey)};}),buttons:"","button-variant":"outline-primary",size:"sm"},model:{value:_vm.setting.invoice_format,callback:function callback($$v){_vm.$set(_vm.setting,"invoice_format",$$v);},expression:"setting.invoice_format"}}),_vm._v(" "),_c("small",{staticClass:"text-muted d-block mt-1"},[_vm._v("\n                            "+_vm._s(_vm.$t("Invoice_Format_help"))+"\n                          ")])],1)],1)],1),_vm._v(" "),_c("b-row",{staticClass:"mt-4"},[_c("b-col",{staticClass:"d-flex justify-content-end",attrs:{lg:"12"}},[_c("b-button",{attrs:{variant:"primary",size:"lg"},on:{click:function click($event){return _vm.Submit_POS_Settings();}}},[_vm._v("\n                          "+_vm._s(_vm.$t("submit"))+"\n                        ")])],1)],1)],1),_vm._v(" "),_c("div",{directives:[{name:"show",rawName:"v-show",value:_vm.activeTab==="zatca",expression:"activeTab === 'zatca'"}],staticClass:"tab-content"},[_c("b-row",[_c("b-col",{staticClass:"mb-3",attrs:{lg:"6",md:"6",sm:"12"}},[_c("b-form-group",{attrs:{label:_vm.$t("CompanyNameArabic")}},[_c("b-form-input",{attrs:{placeholder:_vm.$t("Optional")},model:{value:_vm.setting.company_name_ar,callback:function callback($$v){_vm.$set(_vm.setting,"company_name_ar",$$v);},expression:"setting.company_name_ar"}})],1)],1),_vm._v(" "),_c("b-col",{staticClass:"mb-3",attrs:{lg:"6",md:"6",sm:"12"}},[_c("b-form-group",{attrs:{label:_vm.$t("VAT_Number")}},[_c("b-form-input",{model:{value:_vm.setting.vat_number,callback:function callback($$v){_vm.$set(_vm.setting,"vat_number",$$v);},expression:"setting.vat_number"}})],1)],1),_vm._v(" "),_c("b-col",{staticClass:"mb-3",attrs:{lg:"12",md:"12",sm:"12"}},[_c("b-form-group",{attrs:{label:_vm.$t("ZATCA_Enabled")}},[_c("b-form-checkbox",{attrs:{"switch":""},model:{value:_vm.setting.zatca_enabled,callback:function callback($$v){_vm.$set(_vm.setting,"zatca_enabled",$$v);},expression:"setting.zatca_enabled"}},[_vm._v(_vm._s(_vm.$t("Enable_ZATCA_QR_on_Sales_Receipts")))])],1)],1)],1),_vm._v(" "),_c("b-row",{staticClass:"mt-4"},[_c("b-col",{staticClass:"d-flex justify-content-end",attrs:{lg:"12"}},[_c("b-button",{attrs:{variant:"primary",size:"lg"},on:{click:function click($event){return _vm.Submit_General_Settings();}}},[_vm._v("\n"+_vm._s(_vm.$t("submit"))+"\n                        ")])],1)],1)],1),_vm._v(" "),_c("div",{directives:[{name:"show",rawName:"v-show",value:_vm.activeTab==="invoice",expression:"activeTab === 'invoice'"}],staticClass:"tab-content"},[_c("b-row",[_c("b-col",{staticClass:"mb-3",attrs:{lg:"12",md:"12",sm:"12"}},[_c("b-form-group",{attrs:{label:_vm.$t("Invoice_Format")}},[_c("b-form-radio-group",{attrs:{options:_vm.invoiceFormatOptions.map(function(opt){return{value:opt.value,text:_vm.$t(opt.textKey)};}),buttons:"","button-variant":"outline-primary",size:"sm"},model:{value:_vm.setting.invoice_format,callback:function callback($$v){_vm.$set(_vm.setting,"invoice_format",$$v);},expression:"setting.invoice_format"}}),_vm._v(" "),_c("small",{staticClass:"text-muted d-block mt-1"},[_vm._v("\n                            "+_vm._s(_vm.$t("Invoice_Format_help"))+"\n                          ")])],1)],1),_vm._v(" "),_c("b-col",{staticClass:"mb-3",attrs:{lg:"12",md:"12",sm:"12"}},[_c("b-form-group",[_c("b-form-checkbox",{attrs:{"switch":""},model:{value:_vm.setting.is_invoice_footer,callback:function callback($$v){_vm.$set(_vm.setting,"is_invoice_footer",$$v);},expression:"setting.is_invoice_footer"}},[_vm._v(_vm._s(_vm.$t("invoice_footer")))])],1)],1),_vm._v(" "),_vm.setting.is_invoice_footer?_c("b-col",{staticClass:"mb-3",attrs:{lg:"12",md:"12",sm:"12"}},[_c("validation-provider",{attrs:{name:"invoice_footer",rules:{required:true}},scopedSlots:_vm._u([{key:"default",fn:function fn(validationContext){return[_c("b-form-group",{attrs:{label:_vm.$t("invoice_footer")+" "+"*"}},[_c("textarea",{directives:[{name:"model",rawName:"v-model",value:_vm.setting.invoice_footer,expression:"setting.invoice_footer"}],staticClass:"form-control",attrs:{state:_vm.getValidationState(validationContext),"aria-describedby":"invoice_footer-feedback",placeholder:_vm.$t("invoice_footer"),rows:"4"},domProps:{value:_vm.setting.invoice_footer},on:{input:function input($event){if($event.target.composing)return;_vm.$set(_vm.setting,"invoice_footer",$event.target.value);}}}),_vm._v(" "),_c("b-form-invalid-feedback",{attrs:{id:"invoice_footer-feedback"}},[_vm._v(_vm._s(validationContext.errors[0]))])],1)];}}],null,false,2235164856)})],1):_vm._e(),_vm._v(" "),_c("b-col",{staticClass:"mb-3",attrs:{lg:"12",md:"12",sm:"12"}},[_c("b-form-group",[_c("b-form-checkbox",{attrs:{"switch":""},model:{value:_vm.setting.quotation_with_stock,callback:function callback($$v){_vm.$set(_vm.setting,"quotation_with_stock",$$v);},expression:"setting.quotation_with_stock"}},[_vm._v(_vm._s(_vm.$t("Create_Quotation_with_Stock")))])],1)],1)],1),_vm._v(" "),_c("b-row",{staticClass:"mt-4"},[_c("b-col",{staticClass:"d-flex justify-content-end",attrs:{lg:"12"}},[_c("b-button",{attrs:{variant:"primary",size:"lg"},on:{click:function click($event){return _vm.Submit_General_Settings();}}},[_vm._v("\n"+_vm._s(_vm.$t("submit"))+"\n                        ")])],1)],1)],1),_vm._v(" "),_c("div",{directives:[{name:"show",rawName:"v-show",value:_vm.activeTab==="backup",expression:"activeTab === 'backup'"}],staticClass:"tab-content"},[_c("b-row",[_c("b-col",{staticClass:"mb-3",attrs:{lg:"12",md:"12",sm:"12"}},[_vm.backupDestination==="local"?_c("b-alert",{staticClass:"mb-3",attrs:{show:"",variant:"warning"}},[_c("strong",[_vm._v(_vm._s(_vm.$t("You_will_find_your_backup_on")))]),_vm._v(" "),_c("code",[_vm._v("/storage/app/public/backup")]),_vm._v(" "+_vm._s(_vm.$t("and_save_it_to_your_pc"))+"\n                        ")]):_c("b-alert",{staticClass:"mb-3",attrs:{show:"",variant:"info"}},[_vm._v("\n                          Cloud: backups will be uploaded to the selected provider after they are generated locally.\n                        ")]),_vm._v(" "),_vm.backupDestination==="cloud"?_c("small",{staticClass:"text-muted d-block"},[_vm._v("Note: the list below shows local backups.")]):_vm._e()],1)],1),_vm._v(" "),_c("b-row",{staticClass:"mb-4"},[_c("b-col",{attrs:{lg:"12",md:"12",sm:"12"}},[_c("b-card",{staticClass:"mb-0",attrs:{"no-body":""}},[_c("b-card-body",[_c("div",{staticClass:"d-flex justify-content-between align-items-center mb-3"},[_c("h5",{staticClass:"mb-0"},[_vm._v("Backup destination")])]),_vm._v(" "),_c("b-row",[_c("b-col",{staticClass:"mb-3",attrs:{lg:"6",md:"6",sm:"12"}},[_c("b-form-group",{attrs:{label:"Destination"}},[_c("b-form-radio-group",{attrs:{options:[{value:"local",text:"Local only"},{value:"cloud",text:"Cloud (upload after local backup)"}],stacked:""},model:{value:_vm.backupDestination,callback:function callback($$v){_vm.backupDestination=$$v;},expression:"backupDestination"}}),_vm._v(" "),_c("small",{staticClass:"text-muted d-block mt-1"},[_vm._v("\n                                    Local backups path: "),_c("code",[_vm._v("/storage/app/public/backup")]),_vm._v(".\n                                  ")])],1)],1),_vm._v(" "),_c("b-col",{staticClass:"mb-3",attrs:{lg:"6",md:"6",sm:"12"}},[_vm.backupDestination==="cloud"?_c("b-form-group",{attrs:{label:"Cloud path / folder (optional)"}},[_c("b-form-input",{attrs:{placeholder:"e.g. StockyBackups/"},model:{value:_vm.setting.backup_cloud_path,callback:function callback($$v){_vm.$set(_vm.setting,"backup_cloud_path",$$v);},expression:"setting.backup_cloud_path"}})],1):_vm._e()],1)],1),_vm._v(" "),_vm.backupDestination==="cloud"?_c("b-row",[_c("b-col",{staticClass:"mb-3",attrs:{lg:"6",md:"6",sm:"12"}},[_c("b-form-group",{attrs:{label:"Cloud provider"}},[_c("b-form-select",{attrs:{options:[{value:null,text:"Select provider"},{value:"google_drive",text:"Google Drive"},{value:"dropbox",text:"Dropbox"},{value:"s3",text:"S3-compatible (AWS/MinIO/etc.)"}]},model:{value:_vm.setting.backup_cloud_provider,callback:function callback($$v){_vm.$set(_vm.setting,"backup_cloud_provider",$$v);},expression:"setting.backup_cloud_provider"}}),_vm._v(" "),_c("small",{staticClass:"text-muted d-block mt-1"},[_vm._v("\n                                    Cloud upload runs after the backup is generated locally.\n                                  ")])],1)],1)],1):_vm._e(),_vm._v(" "),_vm.backupDestination==="cloud"&&_vm.setting.backup_cloud_provider==="s3"?_c("b-row",[_c("b-col",{staticClass:"mb-3",attrs:{lg:"6",md:"6",sm:"12"}},[_c("b-form-group",{attrs:{label:"Bucket"}},[_c("b-form-input",{attrs:{placeholder:"Bucket name"},model:{value:_vm.setting.backup_s3_bucket,callback:function callback($$v){_vm.$set(_vm.setting,"backup_s3_bucket",$$v);},expression:"setting.backup_s3_bucket"}})],1)],1),_vm._v(" "),_c("b-col",{staticClass:"mb-3",attrs:{lg:"6",md:"6",sm:"12"}},[_c("b-form-group",{attrs:{label:"Region"}},[_c("b-form-input",{attrs:{placeholder:"e.g. us-east-1"},model:{value:_vm.setting.backup_s3_region,callback:function callback($$v){_vm.$set(_vm.setting,"backup_s3_region",$$v);},expression:"setting.backup_s3_region"}})],1)],1),_vm._v(" "),_c("b-col",{staticClass:"mb-3",attrs:{lg:"6",md:"6",sm:"12"}},[_c("b-form-group",{attrs:{label:"Access key"}},[_c("b-form-input",{attrs:{placeholder:"Access key"},model:{value:_vm.setting.backup_s3_access_key,callback:function callback($$v){_vm.$set(_vm.setting,"backup_s3_access_key",$$v);},expression:"setting.backup_s3_access_key"}})],1)],1),_vm._v(" "),_c("b-col",{staticClass:"mb-3",attrs:{lg:"6",md:"6",sm:"12"}},[_c("b-form-group",{attrs:{label:"Secret key (leave blank to keep current)"}},[_c("b-form-input",{attrs:{type:"text",placeholder:"Secret key"},model:{value:_vm.setting.backup_s3_secret_key,callback:function callback($$v){_vm.$set(_vm.setting,"backup_s3_secret_key",$$v);},expression:"setting.backup_s3_secret_key"}})],1)],1),_vm._v(" "),_c("b-col",{staticClass:"mb-3",attrs:{lg:"6",md:"6",sm:"12"}},[_c("b-form-group",{attrs:{label:"Endpoint (optional for MinIO)"}},[_c("b-form-input",{attrs:{placeholder:"e.g. https://minio.example.com"},model:{value:_vm.setting.backup_s3_endpoint,callback:function callback($$v){_vm.$set(_vm.setting,"backup_s3_endpoint",$$v);},expression:"setting.backup_s3_endpoint"}})],1)],1),_vm._v(" "),_c("b-col",{staticClass:"mb-3",attrs:{lg:"6",md:"6",sm:"12"}},[_c("b-form-group",{attrs:{label:"Path-style URLs (MinIO often requires this)"}},[_c("b-form-checkbox",{attrs:{"switch":""},model:{value:_vm.setting.backup_s3_path_style,callback:function callback($$v){_vm.$set(_vm.setting,"backup_s3_path_style",$$v);},expression:"setting.backup_s3_path_style"}},[_vm._v("Enable")])],1)],1)],1):_vm._e(),_vm._v(" "),_vm.backupDestination==="cloud"&&_vm.setting.backup_cloud_provider==="google_drive"?_c("b-row",[_c("b-col",{staticClass:"mb-3",attrs:{lg:"6",md:"6",sm:"12"}},[_c("b-form-group",{attrs:{label:"Folder ID (optional)"}},[_c("b-form-input",{attrs:{placeholder:"Google Drive folder id"},model:{value:_vm.setting.backup_gdrive_folder_id,callback:function callback($$v){_vm.$set(_vm.setting,"backup_gdrive_folder_id",$$v);},expression:"setting.backup_gdrive_folder_id"}})],1)],1),_vm._v(" "),_c("b-col",{staticClass:"mb-3",attrs:{lg:"6",md:"6",sm:"12"}},[_c("b-form-group",{attrs:{label:"Access token (optional, short-lived)"}},[_c("b-form-input",{attrs:{type:"text",placeholder:"Bearer token"},model:{value:_vm.setting.backup_gdrive_access_token,callback:function callback($$v){_vm.$set(_vm.setting,"backup_gdrive_access_token",$$v);},expression:"setting.backup_gdrive_access_token"}})],1)],1),_vm._v(" "),_c("b-col",{staticClass:"mb-3",attrs:{lg:"6",md:"6",sm:"12"}},[_c("b-form-group",{attrs:{label:"Refresh token (recommended)"}},[_c("b-form-input",{attrs:{type:"text",placeholder:"Refresh token"},model:{value:_vm.setting.backup_gdrive_refresh_token,callback:function callback($$v){_vm.$set(_vm.setting,"backup_gdrive_refresh_token",$$v);},expression:"setting.backup_gdrive_refresh_token"}})],1)],1),_vm._v(" "),_c("b-col",{staticClass:"mb-3",attrs:{lg:"6",md:"6",sm:"12"}},[_c("b-form-group",{attrs:{label:"Client ID"}},[_c("b-form-input",{attrs:{placeholder:"OAuth client id"},model:{value:_vm.setting.backup_gdrive_client_id,callback:function callback($$v){_vm.$set(_vm.setting,"backup_gdrive_client_id",$$v);},expression:"setting.backup_gdrive_client_id"}})],1)],1),_vm._v(" "),_c("b-col",{staticClass:"mb-3",attrs:{lg:"6",md:"6",sm:"12"}},[_c("b-form-group",{attrs:{label:"Client secret (leave blank to keep current)"}},[_c("b-form-input",{attrs:{type:"text",placeholder:"OAuth client secret"},model:{value:_vm.setting.backup_gdrive_client_secret,callback:function callback($$v){_vm.$set(_vm.setting,"backup_gdrive_client_secret",$$v);},expression:"setting.backup_gdrive_client_secret"}})],1)],1)],1):_vm._e(),_vm._v(" "),_vm.backupDestination==="cloud"&&_vm.setting.backup_cloud_provider==="dropbox"?_c("b-row",[_c("b-col",{staticClass:"mb-3",attrs:{lg:"6",md:"6",sm:"12"}},[_c("b-form-group",{attrs:{label:"Dropbox folder path (optional)"}},[_c("b-form-input",{attrs:{placeholder:"e.g. /StockyBackups"},model:{value:_vm.setting.backup_dropbox_path,callback:function callback($$v){_vm.$set(_vm.setting,"backup_dropbox_path",$$v);},expression:"setting.backup_dropbox_path"}})],1)],1),_vm._v(" "),_c("b-col",{staticClass:"mb-3",attrs:{lg:"6",md:"6",sm:"12"}},[_c("b-form-group",{attrs:{label:"Access token (leave blank to keep current)"}},[_c("b-form-input",{attrs:{type:"text",placeholder:"Dropbox token"},model:{value:_vm.setting.backup_dropbox_access_token,callback:function callback($$v){_vm.$set(_vm.setting,"backup_dropbox_access_token",$$v);},expression:"setting.backup_dropbox_access_token"}})],1)],1)],1):_vm._e(),_vm._v(" "),_c("div",{staticClass:"d-flex justify-content-end"},[_c("b-button",{attrs:{variant:"primary"},on:{click:function click($event){return _vm.Submit_General_Settings();}}},[_vm._v("\n                                Save backup settings\n                              ")])],1)],1)],1)],1)],1),_vm._v(" "),_c("b-row",[_c("b-col",{staticClass:"mb-3",attrs:{lg:"12",md:"12",sm:"12"}},[_c("div",{staticClass:"d-flex justify-content-between align-items-center mb-3"},[_c("h5",{staticClass:"mb-0"},[_vm._v(_vm._s(_vm.$t("BackupDatabase")))]),_vm._v(" "),_c("b-button",{staticClass:"btn-generate-backup",attrs:{variant:"primary"},on:{click:function click($event){return _vm.GenerateBackup();}}},[_c("i",{staticClass:"i-Add me-2"}),_vm._v(_vm._s(_vm.$t("GenerateBackup"))+"\n                          ")])],1),_vm._v(" "),_vm.backupError?_c("b-alert",{staticClass:"mb-3",attrs:{show:"",variant:"danger",dismissible:""},on:{dismissed:function dismissed($event){_vm.backupError=null;}}},[_c("h6",{staticClass:"alert-heading"},[_vm._v("Backup Configuration Required")]),_vm._v(" "),_c("p",{staticClass:"mb-2"},[_c("strong",[_vm._v("mysqldump not found.")]),_vm._v(" Please configure DUMP_PATH in your .env file.")]),_vm._v(" "),_c("p",{staticClass:"mb-2"},[_c("strong",[_vm._v("For Laragon on Windows:")])]),_vm._v(" "),_c("ol",{staticClass:"mb-2 pl-3"},[_c("li",[_vm._v("Open your "),_c("code",[_vm._v(".env")]),_vm._v(" file in the project root")]),_vm._v(" "),_c("li",[_vm._v("Find your MySQL version folder in "),_c("code",[_vm._v("C:\\laragon\\bin\\mysql\\")])]),_vm._v(" "),_c("li",[_vm._v("Add this line (replace with your actual version):")])]),_vm._v(" "),_c("pre",{staticClass:"bg-light p-2 mb-2"},[_c("code",[_vm._v('DUMP_PATH="C:\\\\laragon\\\\bin\\\\mysql\\\\mysql-8.0.30\\\\bin\\\\mysqldump.exe"')])]),_vm._v(" "),_c("p",{staticClass:"mb-0"},[_vm._v("Or use forward slashes: "),_c("code",[_vm._v('DUMP_PATH="C:/laragon/bin/mysql/mysql-8.0.30/bin/mysqldump.exe"')])]),_vm._v(" "),_c("p",{staticClass:"mb-0 mt-2"},[_c("small",[_vm._v("After updating .env, run: "),_c("code",[_vm._v("php artisan config:clear")])])])]):_vm._e(),_vm._v(" "),_c("div",{staticClass:"backup-table-wrapper"},[_vm.backups.length>0?_c("vue-good-table",{attrs:{mode:"remote",columns:_vm.backupColumns,totalRows:_vm.totalRows,rows:_vm.backups,styleClass:"table-hover tableOne vgt-table"},scopedSlots:_vm._u([{key:"table-row",fn:function fn(props){return[props.column.field=="actions"?_c("span",[_c("b-button",{staticClass:"btn-delete-backup",attrs:{variant:"danger",size:"sm"},on:{click:function click($event){return _vm.DeleteBackup(props.row.date);}}},[_c("i",{staticClass:"i-Close-Window"})])],1):_vm._e()];}}],null,false,2680657001)}):_c("div",{staticClass:"text-center py-5 text-muted"},[_c("i",{staticClass:"i-Data-Backup text-50 mb-3 d-block"}),_vm._v(" "),_c("p",[_vm._v(_vm._s(_vm.$t("No_backups_found")))]),_vm._v(" "),_c("p",{staticClass:"small"},[_vm._v(_vm._s(_vm.$t("Click_Generate_Backup_to_create_your_first_backup")))])])],1)],1)],1)],1),_vm._v(" "),_c("div",{directives:[{name:"show",rawName:"v-show",value:_vm.activeTab==="security",expression:"activeTab === 'security'"}],staticClass:"tab-content"},[_c("b-row",[_c("b-col",{attrs:{lg:"12",md:"12",sm:"12"}},[_c("div",{staticClass:"system-actions-card"},[_c("div",{staticClass:"d-flex justify-content-between align-items-center mb-2"},[_c("div",[_c("h5",{staticClass:"mb-1"},[_vm._v("Login Device Management")]),_vm._v(" "),_c("p",{staticClass:"text-muted mb-0"},[_vm._v("\n                                Active login sessions for your user (per device / browser).\n                              ")])]),_vm._v(" "),_c("div",{staticClass:"d-flex"},[_c("b-button",{staticClass:"mr-2",attrs:{variant:"outline-primary",disabled:_vm.securitySessionsLoading||_vm.securitySessionsActionLoading},on:{click:function click($event){return _vm.LoadSecuritySessions();}}},[_vm._v("\n                                Refresh\n                              ")]),_vm._v(" "),_c("b-button",{attrs:{variant:"danger",disabled:_vm.securitySessionsLoading||_vm.securitySessionsActionLoading||!_vm.hasOtherSessions},on:{click:function click($event){return _vm.LogoutAllOtherDevices();}}},[_vm._v("\n                                Logout All Other Devices\n                              ")])],1)]),_vm._v(" "),_vm.securitySessionsLoading?_c("div",{staticClass:"py-4 text-center text-muted"},[_c("div",{staticClass:"spinner spinner-primary mr-3"})]):_c("b-table",{staticClass:"mt-3",attrs:{items:_vm.securitySessions,fields:_vm.securitySessionFields,responsive:"sm",small:"","show-empty":"","empty-text":"No active sessions found."},scopedSlots:_vm._u([{key:"cell(device)",fn:function fn(row){return[_c("div",{staticClass:"d-flex align-items-center"},[_c("span",[_vm._v(_vm._s(row.item.device))]),_vm._v(" "),row.item.is_current?_c("b-badge",{staticClass:"ms-2",attrs:{variant:"success"}},[_vm._v("Current")]):_vm._e()],1)];}},{key:"cell(ip_address)",fn:function fn(row){return[_c("span",[_vm._v(_vm._s(row.item.ip_address||"-"))])];}},{key:"cell(login_at)",fn:function fn(row){return[_c("span",[_vm._v(_vm._s(_vm.formatDateTime(row.item.login_at)))])];}},{key:"cell(last_activity_at)",fn:function fn(row){return[_c("span",[_vm._v(_vm._s(row.item.last_activity_at?_vm.formatDateTime(row.item.last_activity_at):"-"))])];}},{key:"cell(actions)",fn:function fn(row){return[_c("b-button",{attrs:{size:"sm",variant:"danger",disabled:_vm.securitySessionsLoading||_vm.securitySessionsActionLoading||row.item.is_current},on:{click:function click($event){return _vm.LogoutSession(row.item.token_id);}}},[_vm._v("\n                                Logout\n                              ")])];}}],null,false,752624946)})],1)])],1)],1),_vm._v(" "),_c("div",{directives:[{name:"show",rawName:"v-show",value:_vm.activeTab==="system",expression:"activeTab === 'system'"}],staticClass:"tab-content"},[_c("b-row",[_c("b-col",{staticClass:"mb-3",attrs:{lg:"6",md:"6",sm:"12"}},[_c("div",{staticClass:"system-actions-card"},[_c("h5",{staticClass:"mb-3"},[_vm._v(_vm._s(_vm.$t("DebugMode")||"Debug Mode"))]),_vm._v(" "),_c("label",{staticClass:"switch switch-primary mr-3"},[_vm._v("\n                            "+_vm._s(_vm.$t("DebugMode")||"Debug Mode")+"\n                            "),_c("input",{directives:[{name:"model",rawName:"v-model",value:_vm.setting.debug_mode,expression:"setting.debug_mode"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(_vm.setting.debug_mode)?_vm._i(_vm.setting.debug_mode,null)>-1:_vm.setting.debug_mode},on:{change:function change($event){var $$a=_vm.setting.debug_mode,$$el=$event.target,$$c=$$el.checked?true:false;if(Array.isArray($$a)){var $$v=null,$$i=_vm._i($$a,$$v);if($$el.checked){$$i<0&&_vm.$set(_vm.setting,"debug_mode",$$a.concat([$$v]));}else{$$i>-1&&_vm.$set(_vm.setting,"debug_mode",$$a.slice(0,$$i).concat($$a.slice($$i+1)));}}else{_vm.$set(_vm.setting,"debug_mode",$$c);}}}}),_vm._v(" "),_c("span",{staticClass:"slider"})]),_vm._v(" "),_c("div",{staticClass:"mt-3"},[_c("b-button",{attrs:{variant:"primary"},on:{click:function click($event){return _vm.Submit_General_Settings();}}},[_vm._v("\n                              "+_vm._s(_vm.$t("submit"))+"\n                            ")])],1)])]),_vm._v(" "),_c("b-col",{staticClass:"mb-3",attrs:{lg:"6",md:"6",sm:"12"}},[_c("div",{staticClass:"system-actions-card"},[_c("h5",{staticClass:"mb-3"},[_vm._v(_vm._s(_vm.$t("Clear_Cache")))]),_vm._v(" "),_c("b-button",{staticClass:"action-btn-system",attrs:{variant:"primary"},on:{click:function click($event){return _vm.Clear_Cache();}}},[_c("i",{staticClass:"i-Refresh me-2"}),_vm._v(_vm._s(_vm.$t("Clear_Cache"))+"\n                          ")])],1)])],1)],1),_vm._v(" "),_c("div",{directives:[{name:"show",rawName:"v-show",value:_vm.activeTab==="custom_fields",expression:"activeTab === 'custom_fields'"}],staticClass:"tab-content"},[_c("b-tabs",{attrs:{"content-class":"mt-3"},model:{value:_vm.customFieldsActiveTab,callback:function callback($$v){_vm.customFieldsActiveTab=$$v;},expression:"customFieldsActiveTab"}},[_c("b-tab",{attrs:{title:_vm.$t("Customers")}},[_c("div",{staticClass:"d-flex justify-content-between align-items-center mb-3"},[_c("h5",[_vm._v(_vm._s(_vm.$t("CustomerCustomFields")||"Customer Custom Fields"))]),_vm._v(" "),_c("b-button",{attrs:{variant:"primary"},on:{click:function click($event){return _vm.New_CustomField("client");}}},[_c("i",{staticClass:"i-Add"}),_vm._v(" "+_vm._s(_vm.$t("Add"))+"\n                          ")])],1),_vm._v(" "),_c("vue-good-table",{key:"customer-fields-"+_vm.customFieldsTableKey,attrs:{columns:_vm.customFieldsColumns,rows:_vm.customerFields,rtl:_vm.direction,"sort-options":{enabled:true,initialSortBy:{field:"sort_order",type:"asc"}},"search-options":{enabled:true,placeholder:_vm.$t("SearchThisTable")},"pagination-options":{enabled:true,mode:"records",perPage:10},styleClass:"tableOne vgt-table"},scopedSlots:_vm._u([{key:"table-row",fn:function fn(props){return[props.column.field=="field_type"?_c("span",[_vm._v("\n                              "+_vm._s(_vm.getFieldTypeLabel(props.row.field_type))+"\n                            ")]):props.column.field=="is_required"?_c("span",[_c("b-badge",{attrs:{variant:props.row.is_required?"success":"secondary"}},[_vm._v("\n                                "+_vm._s(props.row.is_required?_vm.$t("Required"):_vm.$t("Optional"))+"\n                              ")])],1):props.column.field=="is_active"?_c("span",[_c("b-badge",{attrs:{variant:props.row.is_active?"success":"danger"}},[_vm._v("\n                                "+_vm._s(props.row.is_active?_vm.$t("Enabled"):_vm.$t("Disabled"))+"\n                              ")])],1):props.column.field=="actions"?_c("span",[_c("b-button",{staticClass:"mr-2",attrs:{variant:"outline-primary",size:"sm"},on:{click:function click($event){return _vm.Edit_CustomField(props.row);}}},[_c("i",{staticClass:"i-Edit"})]),_vm._v(" "),_c("b-button",{attrs:{variant:"outline-danger",size:"sm"},on:{click:function click($event){return _vm.Delete_CustomField(props.row.id);}}},[_c("i",{staticClass:"i-Close-Window"})])],1):_c("span",[_vm._v("\n                              "+_vm._s(props.formattedRow[props.column.field])+"\n                            ")])];}}],null,false,2755096302)})],1),_vm._v(" "),_c("b-tab",{attrs:{title:_vm.$t("Suppliers")}},[_c("div",{staticClass:"d-flex justify-content-between align-items-center mb-3"},[_c("h5",[_vm._v(_vm._s(_vm.$t("SupplierCustomFields")||"Supplier Custom Fields"))]),_vm._v(" "),_c("b-button",{attrs:{variant:"primary"},on:{click:function click($event){return _vm.New_CustomField("provider");}}},[_c("i",{staticClass:"i-Add"}),_vm._v(" "+_vm._s(_vm.$t("Add"))+"\n                          ")])],1),_vm._v(" "),_c("vue-good-table",{key:"supplier-fields-"+_vm.customFieldsTableKey,attrs:{columns:_vm.customFieldsColumns,rows:_vm.supplierFields,rtl:_vm.direction,"sort-options":{enabled:true,initialSortBy:{field:"sort_order",type:"asc"}},"search-options":{enabled:true,placeholder:_vm.$t("SearchThisTable")},"pagination-options":{enabled:true,mode:"records",perPage:10},styleClass:"tableOne vgt-table"},scopedSlots:_vm._u([{key:"table-row",fn:function fn(props){return[props.column.field=="field_type"?_c("span",[_vm._v("\n                              "+_vm._s(_vm.getFieldTypeLabel(props.row.field_type))+"\n                            ")]):props.column.field=="is_required"?_c("span",[_c("b-badge",{attrs:{variant:props.row.is_required?"success":"secondary"}},[_vm._v("\n                                "+_vm._s(props.row.is_required?_vm.$t("Required"):_vm.$t("Optional"))+"\n                              ")])],1):props.column.field=="is_active"?_c("span",[_c("b-badge",{attrs:{variant:props.row.is_active?"success":"danger"}},[_vm._v("\n                                "+_vm._s(props.row.is_active?_vm.$t("Enabled"):_vm.$t("Disabled"))+"\n                              ")])],1):props.column.field=="actions"?_c("span",[_c("b-button",{staticClass:"mr-2",attrs:{variant:"outline-primary",size:"sm"},on:{click:function click($event){return _vm.Edit_CustomField(props.row);}}},[_c("i",{staticClass:"i-Edit"})]),_vm._v(" "),_c("b-button",{attrs:{variant:"outline-danger",size:"sm"},on:{click:function click($event){return _vm.Delete_CustomField(props.row.id);}}},[_c("i",{staticClass:"i-Close-Window"})])],1):_c("span",[_vm._v("\n                              "+_vm._s(props.formattedRow[props.column.field])+"\n                            ")])];}}],null,false,2755096302)})],1)],1),_vm._v(" "),_c("validation-observer",{ref:"Create_CustomField"},[_c("b-modal",{attrs:{"hide-footer":"",size:"lg",id:_vm.customFieldEditmode?"Edit_CustomField":"New_CustomField",title:_vm.customFieldEditmode?_vm.$t("Edit"):_vm.$t("Add")}},[_c("b-form",{on:{submit:function submit($event){$event.preventDefault();return _vm.Submit_CustomField.apply(null,arguments);}}},[_c("b-row",[_c("b-col",{staticClass:"mb-3",attrs:{md:"12",sm:"12"}},[_c("validation-provider",{attrs:{name:"Field Name",rules:{required:true}},scopedSlots:_vm._u([{key:"default",fn:function fn(validationContext){return[_c("b-form-group",{attrs:{label:_vm.$t("FieldName")+" "+"*"}},[_c("b-form-input",{attrs:{state:_vm.getValidationState(validationContext),"aria-describedby":"name-feedback",placeholder:_vm.$t("FieldName")},model:{value:_vm.customField.name,callback:function callback($$v){_vm.$set(_vm.customField,"name",$$v);},expression:"customField.name"}}),_vm._v(" "),_c("b-form-invalid-feedback",{attrs:{id:"name-feedback"}},[_vm._v("\n                                    "+_vm._s(validationContext.errors[0])+"\n                                  ")])],1)];}}],null,false,4243657286)})],1),_vm._v(" "),_c("b-col",{staticClass:"mb-3",attrs:{md:"6",sm:"12"}},[_c("validation-provider",{attrs:{name:"Field Type",rules:{required:true}},scopedSlots:_vm._u([{key:"default",fn:function fn(validationContext){return[_c("b-form-group",{attrs:{label:_vm.$t("FieldType")+" "+"*"}},[_c("v-select",{"class":{"is-invalid":!!validationContext.errors[0]},attrs:{state:validationContext.errors[0]?false:validationContext.valid?true:null,reduce:function reduce(label){return label.value;},options:_vm.fieldTypes,placeholder:_vm.$t("PleaseSelect")},on:{input:_vm.onFieldTypeChange},model:{value:_vm.customField.field_type,callback:function callback($$v){_vm.$set(_vm.customField,"field_type",$$v);},expression:"customField.field_type"}}),_vm._v(" "),_c("b-form-invalid-feedback",[_vm._v("\n                                    "+_vm._s(validationContext.errors[0])+"\n                                  ")])],1)];}}],null,false,1160883493)})],1),_vm._v(" "),_c("b-col",{staticClass:"mb-3",attrs:{md:"6",sm:"12"}},[_c("b-form-group",{attrs:{label:_vm.$t("Required")}},[_c("b-form-checkbox",{attrs:{"switch":""},model:{value:_vm.customField.is_required,callback:function callback($$v){_vm.$set(_vm.customField,"is_required",$$v);},expression:"customField.is_required"}},[_vm._v("\n                                  "+_vm._s(_vm.customField.is_required?_vm.$t("Required"):_vm.$t("Optional"))+"\n                                ")])],1)],1),_vm._v(" "),_vm.customField.field_type==="select"?_c("b-col",{staticClass:"mb-3",attrs:{md:"12",sm:"12"}},[_c("b-form-group",{attrs:{label:_vm.$t("SelectOptions")}},[_c("b-form-textarea",{attrs:{placeholder:_vm.$t("EnterOptionsOnePerLine")||"Enter options, one per line",rows:"4"},on:{blur:_vm.updateSelectOptions},model:{value:_vm.selectOptionsText,callback:function callback($$v){_vm.selectOptionsText=$$v;},expression:"selectOptionsText"}}),_vm._v(" "),_c("small",{staticClass:"text-muted"},[_vm._v(_vm._s(_vm.$t("EnterOptionsOnePerLine")||"Enter options, one per line"))])],1)],1):_vm.customField.field_type!=="select"&&_vm.customField.field_type?_c("b-col",{staticClass:"mb-3",attrs:{md:"12",sm:"12"}},[_c("b-form-group",{attrs:{label:_vm.$t("DefaultValue")}},[_vm.customField.field_type==="text"||_vm.customField.field_type==="number"?_c("b-form-input",{attrs:{type:_vm.customField.field_type==="number"?"number":"text",placeholder:_vm.$t("DefaultValue")},model:{value:_vm.customField.default_value,callback:function callback($$v){_vm.$set(_vm.customField,"default_value",$$v);},expression:"customField.default_value"}}):_vm.customField.field_type==="textarea"?_c("b-form-textarea",{attrs:{placeholder:_vm.$t("DefaultValue"),rows:"3"},model:{value:_vm.customField.default_value,callback:function callback($$v){_vm.$set(_vm.customField,"default_value",$$v);},expression:"customField.default_value"}}):_vm.customField.field_type==="date"?_c("b-form-datepicker",{attrs:{placeholder:_vm.$t("DefaultValue")},model:{value:_vm.customField.default_value,callback:function callback($$v){_vm.$set(_vm.customField,"default_value",$$v);},expression:"customField.default_value"}}):_vm._e()],1)],1):_vm._e(),_vm._v(" "),_c("b-col",{staticClass:"mb-3",attrs:{md:"6",sm:"12"}},[_c("b-form-group",{attrs:{label:_vm.$t("Status")}},[_c("b-form-checkbox",{attrs:{"switch":""},model:{value:_vm.customField.is_active,callback:function callback($$v){_vm.$set(_vm.customField,"is_active",$$v);},expression:"customField.is_active"}},[_vm._v("\n                                  "+_vm._s(_vm.customField.is_active?_vm.$t("Enabled"):_vm.$t("Disabled"))+"\n                                ")])],1)],1),_vm._v(" "),_c("b-col",{staticClass:"mt-3",attrs:{md:"12"}},[_c("b-button",{attrs:{variant:"primary",type:"submit",disabled:_vm.customFieldSubmitProcessing}},[_c("i",{staticClass:"i-Yes me-2 font-weight-bold"}),_vm._v(" "+_vm._s(_vm.$t("submit"))+"\n                              ")]),_vm._v(" "),_c("b-button",{staticClass:"ml-2",attrs:{variant:"secondary"},on:{click:_vm.reset_CustomField_Form}},[_vm._v("\n                                "+_vm._s(_vm.$t("Cancel"))+"\n                              ")]),_vm._v(" "),_vm.customFieldSubmitProcessing?_vm._m(0):_vm._e()],1)],1)],1)],1)],1)],1)])]),_vm._v(" "),_c("div",{directives:[{name:"show",rawName:"v-show",value:_vm.activeTab==="calendar",expression:"activeTab === 'calendar'"}],staticClass:"tab-content"},[_c("b-row",[_c("b-col",{staticClass:"mb-3",attrs:{lg:"12"}},[_c("p",{staticClass:"text-muted"},[_vm._v("\n                          "+_vm._s(_vm.$t("Google_Calendar_Booking_Description")||"When a booking is confirmed, an event is created in your Google Calendar with date/time, service, customer details, and reminders. Enter your Google API credentials below and connect your account.")+"\n                        ")])]),_vm._v(" "),_c("b-col",{staticClass:"mb-3",attrs:{lg:"6",md:"6",sm:"12"}},[_c("b-form-group",{attrs:{label:_vm.$t("Client_ID")||"Client ID"}},[_c("b-form-input",{attrs:{placeholder:"xxxxx.apps.googleusercontent.com",type:"text",autocomplete:"off"},model:{value:_vm.calendarForm.google_calendar_client_id,callback:function callback($$v){_vm.$set(_vm.calendarForm,"google_calendar_client_id",$$v);},expression:"calendarForm.google_calendar_client_id"}}),_vm._v(" "),_c("small",{staticClass:"text-muted d-block mt-1"},[_vm._v(_vm._s(_vm.$t("Google_Calendar_Client_ID_Help")||"From Google Cloud Console → APIs & Services → Credentials."))])],1)],1),_vm._v(" "),_c("b-col",{staticClass:"mb-3",attrs:{lg:"6",md:"6",sm:"12"}},[_c("b-form-group",{attrs:{label:_vm.$t("Client_Secret")||"Client Secret"}},[_c("b-form-input",{attrs:{placeholder:_vm.calendarForm.google_calendar_client_secret_set?"********":"",type:"password",autocomplete:"new-password"},model:{value:_vm.calendarForm.google_calendar_client_secret,callback:function callback($$v){_vm.$set(_vm.calendarForm,"google_calendar_client_secret",$$v);},expression:"calendarForm.google_calendar_client_secret"}}),_vm._v(" "),_c("small",{staticClass:"text-muted d-block mt-1"},[_vm._v(_vm._s(_vm.$t("Google_Calendar_Client_Secret_Help")||"Leave blank to keep existing secret."))])],1)],1),_vm._v(" "),_c("b-col",{staticClass:"mb-3",attrs:{lg:"6",md:"6",sm:"12"}},[_c("b-form-group",{attrs:{label:_vm.$t("Redirect_URI")||"Redirect URI"}},[_c("b-form-input",{attrs:{placeholder:"https://yourdomain.com/google-calendar/callback",type:"url"},model:{value:_vm.calendarForm.google_calendar_redirect_uri,callback:function callback($$v){_vm.$set(_vm.calendarForm,"google_calendar_redirect_uri",$$v);},expression:"calendarForm.google_calendar_redirect_uri"}}),_vm._v(" "),_c("small",{staticClass:"text-muted d-block mt-1"},[_vm._v(_vm._s(_vm.$t("Google_Calendar_Redirect_URI_Help")||"Must match the URI configured in Google Cloud Console. Leave blank to use default."))])],1)],1),_vm._v(" "),_c("b-col",{staticClass:"mb-3",attrs:{lg:"6",md:"6",sm:"12"}},[_c("b-form-group",{attrs:{label:_vm.$t("Status")||"Status"}},[_vm.calendarForm.google_calendar_connected?_c("span",{staticClass:"text-success"},[_c("i",{staticClass:"i-Yes"}),_vm._v(" "+_vm._s(_vm.$t("Connected")||"Connected")+"\n                          ")]):_c("span",{staticClass:"text-muted"},[_vm._v(_vm._s(_vm.$t("Not_connected")||"Not connected"))]),_vm._v(" "),_c("div",{staticClass:"mt-2"},[!_vm.calendarForm.google_calendar_connected?_c("a",{staticClass:"btn btn-sm btn-outline-primary",attrs:{href:_vm.calendarForm.google_calendar_connect_url}},[_vm._v("\n                              "+_vm._s(_vm.$t("Connect_Google_Calendar")||"Connect Google Calendar")+"\n                            ")]):_c("a",{staticClass:"btn btn-sm btn-outline-secondary",attrs:{href:_vm.calendarForm.google_calendar_disconnect_url}},[_vm._v("\n                              "+_vm._s(_vm.$t("Disconnect")||"Disconnect")+"\n                            ")])])])],1),_vm._v(" "),_vm.calendarForm.google_calendar_connected?_c("b-col",{staticClass:"mb-3",attrs:{lg:"6",md:"6",sm:"12"}},[_c("b-form-group",{attrs:{label:_vm.$t("Calendar_ID")||"Calendar ID"}},[_c("b-form-input",{attrs:{placeholder:"primary"},model:{value:_vm.calendarForm.google_calendar_calendar_id,callback:function callback($$v){_vm.$set(_vm.calendarForm,"google_calendar_calendar_id",$$v);},expression:"calendarForm.google_calendar_calendar_id"}}),_vm._v(" "),_c("small",{staticClass:"text-muted d-block mt-1"},[_vm._v(_vm._s(_vm.$t("Leave_primary_for_default")||'Leave as "primary" for your main calendar.'))])],1)],1):_vm._e(),_vm._v(" "),_c("b-col",{staticClass:"mb-3",attrs:{lg:"12"}},[_c("b-button",{attrs:{variant:"primary",disabled:_vm.calendarSaving},on:{click:function click($event){return _vm.Submit_Calendar_Settings();}}},[_vm.calendarSaving?_c("span",{staticClass:"spinner-border spinner-border-sm mr-2"}):_vm._e(),_vm._v(" "),_c("i",{staticClass:"i-Yes"}),_vm._v(" "+_vm._s(_vm.$t("Save"))+"\n                        ")])],1)],1)],1)])],1)],1)],1):_vm._e()],1);};var staticRenderFns=[function(){var _vm=this,_c=_vm._self._c;return _c("div",{staticClass:"typo__p"},[_c("div",{staticClass:"spinner sm spinner-primary mt-3"})]);}];render._withStripped=true;

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-8.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-8.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/settings/system_settings.vue?vue&type=style&index=0&id=7bd1aea4&scoped=true&lang=css":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-8.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-8.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/settings/system_settings.vue?vue&type=style&index=0&id=7bd1aea4&scoped=true&lang=css ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, "\n.settings-container[data-v-7bd1aea4] {\n  border-radius: 0.5rem;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);\n  overflow: hidden;\n}\n\n/* Left Sidebar - Vertical Tabs */\n.settings-sidebar[data-v-7bd1aea4] {\n  background: linear-gradient(180deg, #f8f9fa 0%, #ffffff 100%);\n  border-right: 1px solid #e9ecef;\n  min-height: 600px;\n}\n.settings-tabs-nav[data-v-7bd1aea4] {\n  padding: 0;\n}\n.settings-header[data-v-7bd1aea4] {\n  padding: 1.5rem;\n  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);\n  color: #ffffff;\n  border-bottom: 1px solid rgba(255, 255, 255, 0.1);\n}\n.settings-header h5[data-v-7bd1aea4] {\n  color: #ffffff;\n  font-weight: 600;\n  margin: 0;\n}\n.settings-nav[data-v-7bd1aea4] {\n  padding: 1rem 0;\n  display: flex;\n  flex-direction: column;\n}\n.settings-nav-item[data-v-7bd1aea4] {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n  padding: 0.875rem 1.5rem;\n  border: none;\n  background: transparent;\n  color: #495057;\n  font-size: 0.9375rem;\n  font-weight: 500;\n  cursor: pointer;\n  transition: all 0.3s ease;\n  text-align: left;\n  width: 100%;\n  position: relative;\n  border-left: 3px solid transparent;\n}\n.settings-nav-item i[data-v-7bd1aea4] {\n  font-size: 1.125rem;\n  width: 20px;\n  text-align: center;\n}\n.settings-nav-item[data-v-7bd1aea4]:hover {\n  background: rgba(102, 126, 234, 0.08);\n  color: #667eea;\n  border-left-color: #667eea;\n}\n.settings-nav-item.active[data-v-7bd1aea4] {\n  background: linear-gradient(90deg, rgba(102, 126, 234, 0.15) 0%, rgba(118, 75, 162, 0.1) 100%);\n  color: #667eea;\n  border-left-color: #667eea;\n  font-weight: 600;\n}\n.settings-nav-item.active[data-v-7bd1aea4]::before {\n  content: '';\n  position: absolute;\n  right: 0;\n  top: 50%;\n  transform: translateY(-50%);\n  width: 0;\n  height: 0;\n  border-top: 8px solid transparent;\n  border-bottom: 8px solid transparent;\n  border-right: 8px solid #ffffff;\n}\n\n/* Right Content Panel */\n.settings-content[data-v-7bd1aea4] {\n  background: #ffffff;\n}\n.settings-content-wrapper[data-v-7bd1aea4] {\n  padding: 2rem;\n  min-height: 600px;\n}\n.settings-content-header[data-v-7bd1aea4] {\n  margin-bottom: 2rem;\n  padding-bottom: 1rem;\n  border-bottom: 2px solid #e9ecef;\n}\n.settings-content-header h4[data-v-7bd1aea4] {\n  color: #2c3e50;\n  font-weight: 600;\n  margin-bottom: 0.5rem;\n}\n.settings-content-header p[data-v-7bd1aea4] {\n  font-size: 0.875rem;\n  margin: 0;\n}\n.settings-content-body[data-v-7bd1aea4] {\n  position: relative;\n}\n.tab-content[data-v-7bd1aea4] {\n  animation: fadeIn-7bd1aea4 0.3s ease-in;\n}\n@keyframes fadeIn-7bd1aea4 {\nfrom {\n    opacity: 0;\n    transform: translateY(10px);\n}\nto {\n    opacity: 1;\n    transform: translateY(0);\n}\n}\n\n/* Form Styling */\n.tab-content .form-group[data-v-7bd1aea4] {\n  margin-bottom: 1.5rem;\n}\n.tab-content label[data-v-7bd1aea4] {\n  font-weight: 600;\n  color: #495057;\n  margin-bottom: 0.5rem;\n  font-size: 0.875rem;\n}\n.tab-content .form-control[data-v-7bd1aea4],\n.tab-content .vs__dropdown-toggle[data-v-7bd1aea4] {\n  border-radius: 0.375rem;\n  border: 1px solid #ced4da;\n  transition: all 0.3s ease;\n}\n.tab-content .form-control[data-v-7bd1aea4]:focus,\n.tab-content .vs__dropdown-toggle[data-v-7bd1aea4]:focus {\n  border-color: #667eea;\n  box-shadow: 0 0 0 0.2rem rgba(102, 126, 234, 0.25);\n}\n\n/* System Actions Card */\n.system-actions-card[data-v-7bd1aea4] {\n  background: #f8f9fa;\n  border-radius: 0.5rem;\n  padding: 2rem;\n  border: 1px solid #e9ecef;\n}\n.system-actions-card h5[data-v-7bd1aea4] {\n  color: #2c3e50;\n  font-weight: 600;\n}\n.action-btn-system[data-v-7bd1aea4] {\n  padding: 0.75rem 2rem;\n  font-weight: 500;\n  border-radius: 0.375rem;\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);\n  transition: all 0.3s ease;\n}\n.action-btn-system[data-v-7bd1aea4]:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);\n}\n\n/* Footer Submit Button */\n.settings-footer[data-v-7bd1aea4] {\n  margin-top: 2.5rem;\n  padding-top: 2rem;\n  border-top: 2px solid #e9ecef;\n  display: flex;\n  justify-content: flex-end;\n}\n.submit-btn[data-v-7bd1aea4] {\n  padding: 0.75rem 2.5rem;\n  font-weight: 600;\n  border-radius: 0.375rem;\n  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);\n  border: none;\n  box-shadow: 0 4px 12px rgba(102, 126, 234, 0.4);\n  transition: all 0.3s ease;\n}\n.submit-btn[data-v-7bd1aea4]:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 6px 16px rgba(102, 126, 234, 0.5);\n}\n.submit-btn[data-v-7bd1aea4]:active {\n  transform: translateY(0);\n}\n\n/* Custom Checkbox Switch Styling */\n.custom-switch[data-v-7bd1aea4] {\n  padding-left: 2.5rem;\n}\n\n/* Mobile Tab Selector */\n.mobile-tab-selector[data-v-7bd1aea4] {\n  padding: 1rem;\n  background: #ffffff;\n  border-bottom: 1px solid #e9ecef;\n  position: relative;\n  z-index: 1000;\n}\n\n/* Hide mobile tab selector when sidebar is open on mobile */\n@media (max-width: 767.98px) {\n.mobile-tab-selector.sidebar-open[data-v-7bd1aea4] {\n    display: none !important;\n}\n}\n.mobile-tab-select[data-v-7bd1aea4] {\n  width: 100%;\n  padding: 0.75rem 1rem;\n  padding-right: 2.5rem;\n  border: 1px solid #ced4da;\n  border-radius: 0.375rem;\n  font-size: 0.9375rem;\n  font-weight: 500;\n  background: #ffffff;\n  color: #495057;\n  cursor: pointer;\n  min-height: 48px;\n  -webkit-appearance: menulist;\n  -moz-appearance: menulist;\n  appearance: menulist;\n  text-align: left;\n  direction: ltr;\n}\n.mobile-tab-select[data-v-7bd1aea4]:focus {\n  border-color: #667eea;\n  box-shadow: 0 0 0 0.2rem rgba(102, 126, 234, 0.25);\n  outline: none;\n}\n\n/* Ensure dropdown options display fully */\n.mobile-tab-select option[data-v-7bd1aea4] {\n  padding: 0.75rem 1rem;\n  font-size: 0.9375rem;\n  white-space: normal;\n  word-wrap: break-word;\n  overflow-wrap: break-word;\n  height: auto;\n  line-height: 1.5;\n  display: block;\n  text-align: left;\n  direction: ltr;\n  min-height: 44px;\n}\n\n/* Fix for Bootstrap select dropdown */\n.mobile-tab-selector .custom-select[data-v-7bd1aea4],\n.mobile-tab-selector select[data-v-7bd1aea4] {\n  background-image: none;\n  background-position: right 0.75rem center;\n  background-repeat: no-repeat;\n  background-size: 8px 10px;\n  padding-right: 2.5rem;\n}\n\n/* Ensure the select wrapper doesn't constrain the dropdown */\n.mobile-tab-selector[data-v-7bd1aea4] {\n  overflow: visible !important;\n}\n.mobile-tab-selector *[data-v-7bd1aea4] {\n  overflow: visible !important;\n}\n\n/* Fix for mobile browsers that might clip the dropdown */\n@media (max-width: 767.98px) {\n.mobile-tab-selector[data-v-7bd1aea4] {\n    position: relative;\n    z-index: 1050;\n}\n.mobile-tab-select[data-v-7bd1aea4] {\n    position: relative;\n    z-index: 1051;\n}\n  \n  /* Ensure dropdown menu appears above other content */\n.mobile-tab-select[data-v-7bd1aea4]:focus {\n    z-index: 1052;\n}\n}\n\n/* Responsive Design */\n@media (max-width: 991.98px) {\n.settings-sidebar[data-v-7bd1aea4] {\n    border-right: none;\n    border-bottom: 1px solid #e9ecef;\n    min-height: auto;\n}\n.settings-content-wrapper[data-v-7bd1aea4] {\n    padding: 1.5rem;\n}\n.settings-content-header[data-v-7bd1aea4] {\n    margin-bottom: 1.5rem;\n    padding-bottom: 0.75rem;\n}\n.settings-content-header h4[data-v-7bd1aea4] {\n    font-size: 1.25rem;\n}\n.settings-content-header p[data-v-7bd1aea4] {\n    font-size: 0.8125rem;\n}\n}\n@media (max-width: 767.98px) {\n.settings-container[data-v-7bd1aea4] {\n    margin: 0 -15px;\n}\n.settings-content-wrapper[data-v-7bd1aea4] {\n    padding: 1rem;\n}\n.settings-content-header[data-v-7bd1aea4] {\n    margin-bottom: 1rem;\n    padding-bottom: 0.5rem;\n}\n.settings-content-header h4[data-v-7bd1aea4] {\n    font-size: 1.125rem;\n}\n.settings-footer[data-v-7bd1aea4] {\n    flex-direction: column;\n    gap: 1rem;\n}\n.submit-btn[data-v-7bd1aea4] {\n    width: 100%;\n}\n.settings-tabs-nav[data-v-7bd1aea4] {\n    max-height: none;\n}\n.settings-header[data-v-7bd1aea4] {\n    padding: 1rem;\n}\n.settings-header h5[data-v-7bd1aea4] {\n    font-size: 1rem;\n}\n}\n@media (max-width: 575.98px) {\n.settings-content-wrapper[data-v-7bd1aea4] {\n    padding: 0.75rem;\n}\n.settings-content-header h4[data-v-7bd1aea4] {\n    font-size: 1rem;\n}\n.mobile-tab-selector[data-v-7bd1aea4] {\n    padding: 0.75rem;\n    position: sticky !important;\n    top: 0;\n    z-index: unset !important;\n    background: #ffffff;\n    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);\n    overflow: visible !important;\n}\n.mobile-tab-select[data-v-7bd1aea4] {\n    font-size: 0.875rem;\n    padding: 0.625rem 0.875rem;\n    min-height: 44px;\n    width: 100%;\n}\n.mobile-tab-select option[data-v-7bd1aea4] {\n    padding: 0.625rem 0.875rem;\n    font-size: 0.875rem;\n    white-space: normal;\n    word-wrap: break-word;\n    overflow-wrap: break-word;\n    max-width: 100%;\n}\n\n  /* Make form elements more mobile-friendly */\n.tab-content .form-group[data-v-7bd1aea4] {\n    margin-bottom: 1rem;\n}\n.tab-content label[data-v-7bd1aea4] {\n    font-size: 0.8125rem;\n}\n\n  /* Adjust card padding on mobile */\n.system-actions-card[data-v-7bd1aea4] {\n    padding: 1.5rem;\n}\n\n  /* Make tables responsive on mobile */\n.tab-content .vgt-table[data-v-7bd1aea4] {\n    font-size: 0.8125rem;\n}\n\n  /* Stack form columns on mobile */\n.tab-content .row > [class*=\"col-\"][data-v-7bd1aea4] {\n    margin-bottom: 1rem;\n}\n\n  /* Adjust button sizes on mobile */\n.tab-content .btn[data-v-7bd1aea4] {\n    font-size: 0.875rem;\n    padding: 0.5rem 1rem;\n}\n}\n\n/* Custom Scrollbar for Sidebar */\n.settings-nav[data-v-7bd1aea4]::-webkit-scrollbar {\n  height: 4px;\n}\n.settings-nav[data-v-7bd1aea4]::-webkit-scrollbar-track {\n  background: #f1f1f1;\n}\n.settings-nav[data-v-7bd1aea4]::-webkit-scrollbar-thumb {\n  background: #667eea;\n  border-radius: 2px;\n}\n.settings-nav[data-v-7bd1aea4]::-webkit-scrollbar-thumb:hover {\n  background: #764ba2;\n}\n.pos-receipt-demo[data-v-7bd1aea4] {\n  /* Approximate 88mm receipt width at 96dpi: ~332px */\n  width: 330px;\n  max-width: 100%;\n  margin: 0 auto;\n  background: #ffffff;\n  padding: 10px;\n  border: 1px dashed #dee2e6;\n  font-size: 11px;\n}\n.pos-receipt-demo .info[data-v-7bd1aea4] {\n  text-align: center;\n}\n.pos-receipt-demo .table_data[data-v-7bd1aea4] {\n  width: 100%;\n}\n\n/* Responsive styles for POS receipt layout controls and preview (System Settings -> POS tab) */\n@media (max-width: 768px) {\n  /* Make layout radio buttons responsive */\n.tab-content .form-group[data-v-7bd1aea4] {\n    width: 100%;\n}\n.tab-content .btn-group-toggle.btn-group[data-v-7bd1aea4] {\n    display: flex;\n    flex-wrap: wrap;\n    width: 100%;\n}\n.tab-content .btn-group-toggle.btn-group .btn[data-v-7bd1aea4] {\n    flex: 1;\n    min-width: 0;\n    font-size: 0.875rem;\n    padding: 0.25rem 0.5rem;\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n}\n.pos-receipt-demo[data-v-7bd1aea4] {\n    width: 100%;\n    padding: 12px;\n    font-size: 10px;\n}\n.pos-receipt-demo .table_data[data-v-7bd1aea4] {\n    font-size: 10px !important;\n}\n}\n@media (max-width: 480px) {\n  /* Stack layout buttons vertically on small screens */\n.tab-content .btn-group-toggle.btn-group[data-v-7bd1aea4] {\n    flex-direction: column;\n}\n.tab-content .btn-group-toggle.btn-group .btn[data-v-7bd1aea4] {\n    width: 100%;\n    margin-bottom: 4px;\n    border-radius: 0.25rem !important;\n    font-size: 0.8rem;\n    padding: 0.375rem 0.5rem;\n    white-space: normal;\n    word-wrap: break-word;\n}\n.tab-content .btn-group-toggle.btn-group .btn[data-v-7bd1aea4]:last-child {\n    margin-bottom: 0;\n}\n.pos-receipt-demo[data-v-7bd1aea4] {\n    padding: 8px;\n    font-size: 9px;\n}\n.pos-receipt-demo .table_data[data-v-7bd1aea4] {\n    font-size: 9px !important;\n}\n.pos-receipt-demo small[data-v-7bd1aea4] {\n    word-wrap: break-word;\n    overflow-wrap: break-word;\n}\n}\n@media (max-width: 360px) {\n.pos-receipt-demo[data-v-7bd1aea4] {\n    font-size: 8px;\n    padding: 6px;\n}\n.pos-receipt-demo .table_data[data-v-7bd1aea4] {\n    font-size: 8px !important;\n}\n.pos-receipt-demo td[data-v-7bd1aea4],\n  .pos-receipt-demo th[data-v-7bd1aea4] {\n    padding: 2px 4px;\n}\n}\n\n/* Backup Tab Styles */\n.backup-table-wrapper[data-v-7bd1aea4] {\n  background: #ffffff;\n  border-radius: 0.5rem;\n  overflow: hidden;\n  border: 1px solid #e9ecef;\n}\n.btn-generate-backup[data-v-7bd1aea4] {\n  padding: 0.625rem 1.5rem;\n  font-weight: 500;\n  border-radius: 0.375rem;\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);\n  transition: all 0.3s ease;\n}\n.btn-generate-backup[data-v-7bd1aea4]:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);\n}\n.btn-delete-backup[data-v-7bd1aea4] {\n  padding: 0.375rem 0.75rem;\n  border-radius: 0.375rem;\n}\n.btn-delete-backup[data-v-7bd1aea4]:hover {\n  transform: scale(1.05);\n}\n", ""]);
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

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-8.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-8.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/settings/system_settings.vue?vue&type=style&index=0&id=7bd1aea4&scoped=true&lang=css":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-8.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-8.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/settings/system_settings.vue?vue&type=style&index=0&id=7bd1aea4&scoped=true&lang=css ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_8_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_8_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_system_settings_vue_vue_type_style_index_0_id_7bd1aea4_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-8.use[1]!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-8.use[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./system_settings.vue?vue&type=style&index=0&id=7bd1aea4&scoped=true&lang=css */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-8.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-8.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/settings/system_settings.vue?vue&type=style&index=0&id=7bd1aea4&scoped=true&lang=css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_8_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_8_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_system_settings_vue_vue_type_style_index_0_id_7bd1aea4_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_8_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_8_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_system_settings_vue_vue_type_style_index_0_id_7bd1aea4_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

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

/***/ "./resources/src/utils/priceFormat.js":
/*!********************************************!*\
  !*** ./resources/src/utils/priceFormat.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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

/***/ "./resources/src/views/app/pages/settings/system_settings.vue":
/*!********************************************************************!*\
  !*** ./resources/src/views/app/pages/settings/system_settings.vue ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _system_settings_vue_vue_type_template_id_7bd1aea4_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./system_settings.vue?vue&type=template&id=7bd1aea4&scoped=true */ "./resources/src/views/app/pages/settings/system_settings.vue?vue&type=template&id=7bd1aea4&scoped=true");
/* harmony import */ var _system_settings_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./system_settings.vue?vue&type=script&lang=js */ "./resources/src/views/app/pages/settings/system_settings.vue?vue&type=script&lang=js");
/* harmony import */ var _system_settings_vue_vue_type_style_index_0_id_7bd1aea4_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./system_settings.vue?vue&type=style&index=0&id=7bd1aea4&scoped=true&lang=css */ "./resources/src/views/app/pages/settings/system_settings.vue?vue&type=style&index=0&id=7bd1aea4&scoped=true&lang=css");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _system_settings_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _system_settings_vue_vue_type_template_id_7bd1aea4_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render,
  _system_settings_vue_vue_type_template_id_7bd1aea4_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "7bd1aea4",
  null
  
)

/* hot reload */
if (false) // removed by dead control flow
{ var api; }
component.options.__file = "resources/src/views/app/pages/settings/system_settings.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/src/views/app/pages/settings/system_settings.vue?vue&type=script&lang=js":
/*!********************************************************************************************!*\
  !*** ./resources/src/views/app/pages/settings/system_settings.vue?vue&type=script&lang=js ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_system_settings_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./system_settings.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/settings/system_settings.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_system_settings_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/src/views/app/pages/settings/system_settings.vue?vue&type=style&index=0&id=7bd1aea4&scoped=true&lang=css":
/*!****************************************************************************************************************************!*\
  !*** ./resources/src/views/app/pages/settings/system_settings.vue?vue&type=style&index=0&id=7bd1aea4&scoped=true&lang=css ***!
  \****************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_8_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_8_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_system_settings_vue_vue_type_style_index_0_id_7bd1aea4_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/style-loader/dist/cjs.js!../../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-8.use[1]!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-8.use[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./system_settings.vue?vue&type=style&index=0&id=7bd1aea4&scoped=true&lang=css */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-8.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-8.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/settings/system_settings.vue?vue&type=style&index=0&id=7bd1aea4&scoped=true&lang=css");


/***/ }),

/***/ "./resources/src/views/app/pages/settings/system_settings.vue?vue&type=template&id=7bd1aea4&scoped=true":
/*!**************************************************************************************************************!*\
  !*** ./resources/src/views/app/pages/settings/system_settings.vue?vue&type=template&id=7bd1aea4&scoped=true ***!
  \**************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_system_settings_vue_vue_type_template_id_7bd1aea4_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_system_settings_vue_vue_type_template_id_7bd1aea4_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_system_settings_vue_vue_type_template_id_7bd1aea4_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./system_settings.vue?vue&type=template&id=7bd1aea4&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/settings/system_settings.vue?vue&type=template&id=7bd1aea4&scoped=true");


/***/ })

}]);