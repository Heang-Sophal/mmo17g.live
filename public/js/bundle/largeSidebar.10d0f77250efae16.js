(self["webpackChunk"] = self["webpackChunk"] || []).push([["largeSidebar"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/containers/layouts/common/footer.vue?vue&type=script&lang=js":
/*!****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/containers/layouts/common/footer.vue?vue&type=script&lang=js ***!
  \****************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {};
  },
  computed: _objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_0__.mapGetters)(["currentUser"])),
  methods: {}
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/containers/layouts/largeSidebar/Sidebar.vue?vue&type=script&lang=js":
/*!***********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/containers/layouts/largeSidebar/Sidebar.vue?vue&type=script&lang=js ***!
  \***********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _TopNav__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TopNav */ "./resources/src/containers/layouts/largeSidebar/TopNav.vue");
/* harmony import */ var mobile_device_detect__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! mobile-device-detect */ "./node_modules/mobile-device-detect/dist/index.js");
/* harmony import */ var mobile_device_detect__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(mobile_device_detect__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  components: {
    Topnav: _TopNav__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  data: function data() {
    return {
      isDisplay: true,
      isMenuOver: false,
      isStyle: true,
      selectedParentMenu: "",
      isMobile: mobile_device_detect__WEBPACK_IMPORTED_MODULE_1__.isMobile
    };
  },
  mounted: function mounted() {
    this.toggleSelectedParentMenu();
    window.addEventListener("resize", this.handleWindowResize);
    document.addEventListener("click", this.returnSelectedParentMenu);
    this.handleWindowResize();
  },
  beforeDestroy: function beforeDestroy() {
    document.removeEventListener("click", this.returnSelectedParentMenu);
    window.removeEventListener("resize", this.handleWindowResize);
  },
  computed: _objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_2__.mapGetters)(["getSideBarToggleProperties", "currentUserPermissions"])),
  methods: _objectSpread(_objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_2__.mapActions)(["changeSecondarySidebarProperties", "changeSecondarySidebarPropertiesViaMenuItem", "changeSecondarySidebarPropertiesViaOverlay", "changeSidebarProperties"])), {}, {
    handleWindowResize: function handleWindowResize() {
      if (window.innerWidth <= 1200) {
        if (this.getSideBarToggleProperties.isSideNavOpen) {
          this.changeSidebarProperties();
        }
        if (this.getSideBarToggleProperties.isSecondarySideNavOpen) {
          this.changeSecondarySidebarProperties();
        }
      } else {
        if (!this.getSideBarToggleProperties.isSideNavOpen) {
          this.changeSidebarProperties();
        }
      }
    },
    toggleSelectedParentMenu: function toggleSelectedParentMenu() {
      var currentParentUrl = this.$route.path.split("/").filter(function (x) {
        return x !== "";
      })[1];
      if (currentParentUrl !== undefined || currentParentUrl !== null) {
        this.selectedParentMenu = currentParentUrl.toLowerCase();
      } else {
        this.selectedParentMenu = "dashboard";
      }
    },
    toggleSubMenu: function toggleSubMenu(e) {
      var hasSubmenu = e.target.dataset.submenu;
      var parent = e.target.dataset.item;
      if (hasSubmenu) {
        this.selectedParentMenu = parent;
        this.changeSecondarySidebarPropertiesViaMenuItem(true);
      } else {
        this.selectedParentMenu = parent;
        this.changeSecondarySidebarPropertiesViaMenuItem(false);
      }
    },
    removeOverlay: function removeOverlay() {
      this.changeSecondarySidebarPropertiesViaOverlay();
      if (window.innerWidth <= 1200) {
        this.changeSidebarProperties();
      }
      this.toggleSelectedParentMenu();
    },
    returnSelectedParentMenu: function returnSelectedParentMenu() {
      if (!this.isMenuOver) {
        this.toggleSelectedParentMenu();
      }
    },
    toggleSidebarDropdwon: function toggleSidebarDropdwon(event) {
      var dropdownMenus = this.$el.querySelectorAll(".dropdown-sidemenu.open");
      event.currentTarget.classList.toggle("open");
      dropdownMenus.forEach(function (dropdown) {
        dropdown.classList.remove("open");
      });
    }
  })
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/containers/layouts/largeSidebar/TopNav.vue?vue&type=script&lang=js":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/containers/layouts/largeSidebar/TopNav.vue?vue&type=script&lang=js ***!
  \**********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../../utils */ "./resources/src/utils/index.js");
/* harmony import */ var mobile_device_detect__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! mobile-device-detect */ "./node_modules/mobile-device-detect/dist/index.js");
/* harmony import */ var mobile_device_detect__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(mobile_device_detect__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var vue_clickaway__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vue-clickaway */ "./node_modules/vue-clickaway/dist/vue-clickaway.common.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

// import Sidebar from "./Sidebar";



// import { setTimeout } from 'timers';

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  mixins: [vue_clickaway__WEBPACK_IMPORTED_MODULE_3__.mixin],
  data: function data() {
    return {
      isDisplay: true,
      isStyle: true,
      isSearchOpen: false,
      isMouseOnMegaMenu: true,
      isMegaMenuOpen: false,
      is_Load: false
    };
  },
  computed: _objectSpread(_objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_2__.mapGetters)(["currentUser", "getSideBarToggleProperties", "currentUserPermissions", "notifs_alert", "show_language", "getAvailableLanguages"])), (0,vuex__WEBPACK_IMPORTED_MODULE_2__.mapGetters)("config", ["getThemeMode"])),
  methods: _objectSpread(_objectSpread(_objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_2__.mapActions)(["changeSecondarySidebarProperties", "changeSidebarProperties", "logout"])), (0,vuex__WEBPACK_IMPORTED_MODULE_2__.mapActions)("config", ["changeThemeMode"])), {}, {
    SetLocal: function SetLocal(locale) {
      this.$i18n.locale = locale;
      this.$store.dispatch("setLanguage", locale);
      Fire.$emit("ChangeLanguage");
      window.location.reload();
    },
    handleFullScreen: function handleFullScreen() {
      _utils__WEBPACK_IMPORTED_MODULE_0__["default"].toggleFullScreen();
    },
    toggleDarkMode: function toggleDarkMode() {
      this.changeThemeMode();
      // Apply dark theme class to body element
      if (this.getThemeMode.dark) {
        document.body.classList.add('dark-theme');
      } else {
        document.body.classList.remove('dark-theme');
      }
    },
    logoutUser: function logoutUser() {
      this.logout();
    },
    closeMegaMenu: function closeMegaMenu() {
      this.isMegaMenuOpen = false;
    },
    toggleMegaMenu: function toggleMegaMenu() {
      this.isMegaMenuOpen = !this.isMegaMenuOpen;
    },
    toggleSearch: function toggleSearch() {
      this.isSearchOpen = !this.isSearchOpen;
    },
    sideBarToggle: function sideBarToggle(el) {
      if (this.getSideBarToggleProperties.isSideNavOpen && this.getSideBarToggleProperties.isSecondarySideNavOpen && mobile_device_detect__WEBPACK_IMPORTED_MODULE_1__.isMobile) {
        this.changeSidebarProperties();
        this.changeSecondarySidebarProperties();
      } else if (this.getSideBarToggleProperties.isSideNavOpen && this.getSideBarToggleProperties.isSecondarySideNavOpen) {
        this.changeSecondarySidebarProperties();
      } else if (this.getSideBarToggleProperties.isSideNavOpen) {
        this.changeSidebarProperties();
      } else if (!this.getSideBarToggleProperties.isSideNavOpen && !this.getSideBarToggleProperties.isSecondarySideNavOpen && !this.getSideBarToggleProperties.isActiveSecondarySideNav) {
        this.changeSidebarProperties();
      } else if (!this.getSideBarToggleProperties.isSideNavOpen && !this.getSideBarToggleProperties.isSecondarySideNavOpen) {
        this.changeSidebarProperties();
        this.changeSecondarySidebarProperties();
      }
    }
  }),
  mounted: function mounted() {
    // Apply dark theme class on mount if dark mode is enabled
    if (this.getThemeMode.dark) {
      document.body.classList.add('dark-theme');
    } else {
      document.body.classList.remove('dark-theme');
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/containers/layouts/largeSidebar/VerticalSidebar.vue?vue&type=script&lang=js":
/*!*******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/containers/layouts/largeSidebar/VerticalSidebar.vue?vue&type=script&lang=js ***!
  \*******************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var mobile_device_detect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mobile-device-detect */ "./node_modules/mobile-device-detect/dist/index.js");
/* harmony import */ var mobile_device_detect__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mobile_device_detect__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "VerticalSidebar",
  data: function data() {
    return {
      isMobile: mobile_device_detect__WEBPACK_IMPORTED_MODULE_0__.isMobile,
      isCollapsed: false,
      openMenus: [],
      openNestedMenus: [],
      mobileOpen: false
    };
  },
  mounted: function mounted() {
    var _this = this;
    this.initializeActiveMenu();
    this.loadCollapsedState();

    // Ensure nav text is visible on mobile
    if (window.innerWidth <= 768 || this.isMobile) {
      this.isCollapsed = false;
    }

    // Keep collapse state synced with screen size
    window.addEventListener('resize', this.handleResize);

    // Listen for toggle event from top nav
    Fire.$on("toggleVerticalSidebar", function () {
      console.log('VerticalSidebar: Event received!');
      console.log('Window width:', window.innerWidth);
      console.log('Current mobileOpen state:', _this.mobileOpen);
      if (window.innerWidth <= 768) {
        // On mobile, toggle sidebar visibility and ensure text visible
        _this.mobileOpen = !_this.mobileOpen;
        _this.isCollapsed = false;
        console.log('Mobile: New mobileOpen state:', _this.mobileOpen);
      } else {
        // On desktop, toggle collapse
        _this.toggleCollapse();
        console.log('Desktop: Toggled collapse');
      }
    });
  },
  beforeDestroy: function beforeDestroy() {
    // Clean up event listener
    Fire.$off("toggleVerticalSidebar");
    window.removeEventListener('resize', this.handleResize);
  },
  computed: _objectSpread(_objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_1__.mapGetters)(["currentUserPermissions", "currentUser"])), {}, {
    hasReportsPermission: function hasReportsPermission() {
      var _this2 = this;
      if (!this.currentUserPermissions) return false;
      var reportPermissions = ['Reports_payments_Sales', 'Reports_payments_Purchases', 'Reports_payments_Sale_Returns', 'Reports_payments_purchase_Return', 'Warehouse_report', 'Reports_profit', 'inventory_valuation', 'expenses_report', 'deposits_report', 'Reports_purchase', 'Reports_quantity_alerts', 'Reports_sales', 'product_sales_report', 'sales_by_seller_report', 'product_purchases_report', 'Reports_suppliers', 'Top_Suppliers_Report', 'Reports_customers', 'Top_products', 'inactive_customers_report', 'Top_customers', 'users_report', 'product_report', 'zeroSalesProducts', 'Dead_Stock_Report', 'Stock_Aging_Report', 'Stock_Transfer_Report', 'discount_summary_report', 'Stock_Adjustment_Report', 'tax_summary_report', 'draft_invoices_report', 'report_transactions', 'seller_report', 'report_sales_by_category', 'report_sales_by_brand', 'report_error_logs', 'cash_register_report', 'report_warranty', 'stock_report', 'negative_stock_report', 'customer_loyalty_points_report', 'cash_flow_report', 'report_attendance_summary', 'return_ratio_report', 'service_jobs', 'service_jobs_report', 'checklist_completion_report', 'customer_maintenance_history_report', 'report_device_management', 'analytics_report', 'Stock_Inventory_Valuation'];
      return reportPermissions.some(function (perm) {
        return _this2.currentUserPermissions.includes(perm);
      });
    },
    hasPaymentReportsPermission: function hasPaymentReportsPermission() {
      var _this3 = this;
      if (!this.currentUserPermissions) return false;
      return ['Reports_payments_Purchases', 'Reports_payments_Sales', 'Reports_payments_Sale_Returns', 'Reports_payments_purchase_Return'].some(function (perm) {
        return _this3.currentUserPermissions.includes(perm);
      });
    }
  }),
  methods: _objectSpread(_objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_1__.mapActions)(["logout", "setSidebarLayout", "setVerticalSidebarCollapsed"])), {}, {
    navigateToDashboard: function navigateToDashboard() {
      this.$router.push("/app/dashboard");
    },
    handleResize: function handleResize() {
      if (window.innerWidth <= 768 || this.isMobile) {
        if (this.isCollapsed) this.isCollapsed = false;
      } else {
        // Restore desktop collapsed state from store when leaving mobile
        this.isCollapsed = this.$store.getters.getVerticalSidebarCollapsed;
      }
    },
    toggleCollapse: function toggleCollapse() {
      this.isCollapsed = !this.isCollapsed;
      this.setVerticalSidebarCollapsed(this.isCollapsed);
      if (this.isCollapsed) {
        this.openMenus = [];
        this.openNestedMenus = [];
      } else {
        this.initializeActiveMenu();
      }
    },
    loadCollapsedState: function loadCollapsedState() {
      // Load from Vuex store
      this.isCollapsed = this.$store.getters.getVerticalSidebarCollapsed;
    },
    toggleSubmenu: function toggleSubmenu(menu) {
      if (this.isCollapsed) return;
      var index = this.openMenus.indexOf(menu);
      if (index > -1) {
        this.openMenus.splice(index, 1);
      } else {
        this.openMenus.push(menu);
      }
    },
    toggleNestedSubmenu: function toggleNestedSubmenu(menu) {
      var index = this.openNestedMenus.indexOf(menu);
      if (index > -1) {
        this.openNestedMenus.splice(index, 1);
      } else {
        this.openNestedMenus.push(menu);
      }
    },
    initializeActiveMenu: function initializeActiveMenu() {
      var path = this.$route.path;
      var segments = path.split('/').filter(function (x) {
        return x !== '';
      });
      if (segments.length >= 2) {
        var parentMenu = segments[1].toLowerCase();
        if (!this.openMenus.includes(parentMenu)) {
          this.openMenus.push(parentMenu);
        }
      }
    },
    isActiveRoute: function isActiveRoute(menu) {
      var path = this.$route.path.toLowerCase();
      if (menu === 'User_Management') {
        return path.includes('/app/user_management/users') || path.includes('/app/user_management/permissions');
      }
      return path.includes("/app/".concat(menu.toLowerCase()));
    },
    logoutUser: function logoutUser() {
      var _this4 = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee() {
        var _t;
        return _regenerator().w(function (_context) {
          while (1) switch (_context.p = _context.n) {
            case 0:
              _context.p = 0;
              _context.n = 1;
              return _this4.logout();
            case 1:
              _this4.$router.push({
                name: "login"
              });
              _context.n = 3;
              break;
            case 2:
              _context.p = 2;
              _t = _context.v;
              console.error("Logout error:", _t);
            case 3:
              return _context.a(2);
          }
        }, _callee, null, [[0, 2]]);
      }))();
    },
    closeMobileSidebar: function closeMobileSidebar() {
      if (this.isMobile && this.mobileOpen) {
        this.mobileOpen = false;
      }
    }
  }),
  watch: {
    '$route': function $route() {
      this.initializeActiveMenu();
      // Close mobile sidebar on route change
      if (this.isMobile && this.mobileOpen) {
        this.mobileOpen = false;
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/containers/layouts/largeSidebar/VerticalTopNav.vue?vue&type=script&lang=js":
/*!******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/containers/layouts/largeSidebar/VerticalTopNav.vue?vue&type=script&lang=js ***!
  \******************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../../utils */ "./resources/src/utils/index.js");
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "VerticalTopNav",
  data: function data() {
    return {};
  },
  computed: _objectSpread(_objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_1__.mapGetters)(["currentUser", "currentUserPermissions", "notifs_alert", "show_language", "getAvailableLanguages"])), (0,vuex__WEBPACK_IMPORTED_MODULE_1__.mapGetters)("config", ["getThemeMode"])),
  methods: _objectSpread(_objectSpread(_objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_1__.mapActions)(["logout"])), (0,vuex__WEBPACK_IMPORTED_MODULE_1__.mapActions)("config", ["changeThemeMode"])), {}, {
    SetLocal: function SetLocal(locale) {
      this.$i18n.locale = locale;
      this.$store.dispatch("setLanguage", locale);
      Fire.$emit("ChangeLanguage");
      window.location.reload();
    },
    handleFullScreen: function handleFullScreen() {
      _utils__WEBPACK_IMPORTED_MODULE_0__["default"].toggleFullScreen();
    },
    toggleDarkMode: function toggleDarkMode() {
      this.changeThemeMode();
      // Apply dark theme class to body element
      if (this.getThemeMode.dark) {
        document.body.classList.add('dark-theme');
      } else {
        document.body.classList.remove('dark-theme');
      }
    },
    logoutUser: function logoutUser() {
      this.logout();
    },
    toggleSidebar: function toggleSidebar(event) {
      console.log('Menu toggle clicked!');
      console.log('Screen width:', window.innerWidth);
      console.log('Event:', event);
      // Emit event to VerticalSidebar to toggle collapse state
      Fire.$emit("toggleVerticalSidebar");
      console.log('Event emitted: toggleVerticalSidebar');
    }
  }),
  mounted: function mounted() {
    // Apply dark theme class on mount if dark mode is enabled
    if (this.getThemeMode.dark) {
      document.body.classList.add('dark-theme');
    } else {
      document.body.classList.remove('dark-theme');
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/containers/layouts/largeSidebar/index.vue?vue&type=script&lang=js":
/*!*********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/containers/layouts/largeSidebar/index.vue?vue&type=script&lang=js ***!
  \*********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Sidebar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Sidebar */ "./resources/src/containers/layouts/largeSidebar/Sidebar.vue");
/* harmony import */ var _VerticalSidebar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./VerticalSidebar */ "./resources/src/containers/layouts/largeSidebar/VerticalSidebar.vue");
/* harmony import */ var _TopNav__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./TopNav */ "./resources/src/containers/layouts/largeSidebar/TopNav.vue");
/* harmony import */ var _VerticalTopNav__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./VerticalTopNav */ "./resources/src/containers/layouts/largeSidebar/VerticalTopNav.vue");
/* harmony import */ var _common_footer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../common/footer */ "./resources/src/containers/layouts/common/footer.vue");
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }






/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  components: {
    Sidebar: _Sidebar__WEBPACK_IMPORTED_MODULE_0__["default"],
    VerticalSidebar: _VerticalSidebar__WEBPACK_IMPORTED_MODULE_1__["default"],
    TopNav: _TopNav__WEBPACK_IMPORTED_MODULE_2__["default"],
    VerticalTopNav: _VerticalTopNav__WEBPACK_IMPORTED_MODULE_3__["default"],
    appFooter: _common_footer__WEBPACK_IMPORTED_MODULE_4__["default"]
  },
  data: function data() {
    return {};
  },
  computed: _objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_5__.mapGetters)(["getSideBarToggleProperties", "getSidebarLayout", "getVerticalSidebarCollapsed"])),
  methods: {}
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/containers/layouts/common/footer.vue?vue&type=template&id=1dfb17ff&scoped=true":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/containers/layouts/common/footer.vue?vue&type=template&id=1dfb17ff&scoped=true ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************/
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
    staticClass: "footer_wrap"
  }, [_c("div", {
    staticClass: "flex-grow-1"
  }), _vm._v(" "), _vm.currentUser ? _c("div", {
    staticClass: "app-footer"
  }, [_c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col-md-9"
  }, [_c("p", [_c("strong", [_vm._v(_vm._s(_vm.currentUser.footer || ""))])])])]), _vm._v(" "), _c("div", {
    staticClass: "footer-bottom border-top pt-3 d-flex flex-column flex-sm-row align-items-center"
  }, [_c("div", {
    staticClass: "d-flex align-items-center"
  }, [_vm.currentUser.logo ? _c("img", {
    staticClass: "logo",
    attrs: {
      src: "/images/" + _vm.currentUser.logo,
      alt: "",
      width: "60",
      height: "60"
    }
  }) : _c("img", {
    staticClass: "logo",
    attrs: {
      src: "/images/logo.png",
      alt: "",
      width: "60",
      height: "60"
    }
  }), _vm._v(" "), _c("div", [_c("div", [_c("p", {
    staticClass: "m-0"
  }, [_vm._v("© " + _vm._s(new Date().getFullYear()) + " " + _vm._s(_vm.$t("developed_by")) + " " + _vm._s(_vm.currentUser.developed_by || "Stocky"))]), _vm._v(" "), _c("p", {
    staticClass: "m-0"
  }, [_vm._v("All rights reserved - v1.7")])])]), _vm._v(" "), _c("span", {
    staticClass: "flex-grow-1"
  })])])]) : _vm._e()]);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/containers/layouts/largeSidebar/Sidebar.vue?vue&type=template&id=696fbebe":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/containers/layouts/largeSidebar/Sidebar.vue?vue&type=template&id=696fbebe ***!
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
    staticClass: "side-content-wrap",
    on: {
      mouseenter: function mouseenter($event) {
        _vm.isMenuOver = true;
      },
      mouseleave: function mouseleave($event) {
        _vm.isMenuOver = false;
      },
      touchstart: function touchstart($event) {
        _vm.isMenuOver = true;
      }
    }
  }, [_c("vue-perfect-scrollbar", {
    ref: "myData",
    staticClass: "sidebar-left rtl-ps-none ps scroll",
    "class": {
      open: _vm.getSideBarToggleProperties.isSideNavOpen
    },
    attrs: {
      settings: {
        suppressScrollX: true,
        wheelPropagation: false
      }
    }
  }, [_c("div", [_c("ul", {
    staticClass: "navigation-left"
  }, [_c("li", {
    staticClass: "nav-item",
    "class": {
      active: _vm.selectedParentMenu == "dashboard"
    },
    attrs: {
      "data-item": "dashboard"
    },
    on: {
      mouseenter: _vm.toggleSubMenu
    }
  }, [_c("router-link", {
    staticClass: "nav-item-hold",
    attrs: {
      tag: "a",
      to: "/app/dashboard"
    }
  }, [_c("i", {
    staticClass: "nav-icon i-Bar-Chart"
  }), _vm._v(" "), _c("span", {
    staticClass: "nav-text"
  }, [_vm._v(_vm._s(_vm.$t("dashboard")))])])], 1), _vm._v(" "), _c("li", {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: _vm.currentUserPermissions && (_vm.currentUserPermissions.includes("Store_settings_view") || _vm.currentUserPermissions.includes("Orders_view") || _vm.currentUserPermissions.includes("Collections_view") || _vm.currentUserPermissions.includes("Banners_view") || _vm.currentUserPermissions.includes("Subscribers_view") || _vm.currentUserPermissions.includes("Messages_view")),
      expression: "currentUserPermissions && (\n                    currentUserPermissions.includes('Store_settings_view') ||\n                    currentUserPermissions.includes('Orders_view') ||\n                    currentUserPermissions.includes('Collections_view') ||\n                    currentUserPermissions.includes('Banners_view') ||\n                    currentUserPermissions.includes('Subscribers_view') ||\n                    currentUserPermissions.includes('Messages_view')\n                  )"
    }],
    staticClass: "nav-item",
    "class": {
      active: _vm.selectedParentMenu == "Store"
    },
    attrs: {
      "data-item": "Store",
      "data-submenu": true
    },
    on: {
      mouseenter: _vm.toggleSubMenu
    }
  }, [_c("a", {
    staticClass: "nav-item-hold",
    attrs: {
      href: "#"
    }
  }, [_c("i", {
    staticClass: "nav-icon i-Shopping-Bag"
  }), _vm._v(" "), _c("span", {
    staticClass: "nav-text"
  }, [_vm._v(_vm._s(_vm.$t("Store")))])]), _vm._v(" "), _c("div", {
    staticClass: "triangle"
  })]), _vm._v(" "), _c("li", {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: _vm.currentUserPermissions && (_vm.currentUserPermissions.includes("Customers_view") || _vm.currentUserPermissions.includes("Suppliers_view") || _vm.currentUserPermissions.includes("customers_import") || _vm.currentUserPermissions.includes("Suppliers_import") || _vm.currentUserPermissions.includes("Suppliers_import")),
      expression: "currentUserPermissions && (currentUserPermissions.includes('Customers_view')\n                      ||currentUserPermissions.includes('Suppliers_view')\n                      || currentUserPermissions.includes('customers_import')\n                      || currentUserPermissions.includes('Suppliers_import')\n                      || currentUserPermissions.includes('Suppliers_import'))"
    }],
    staticClass: "nav-item",
    "class": {
      active: _vm.selectedParentMenu == "People"
    },
    attrs: {
      "data-item": "People",
      "data-submenu": true
    },
    on: {
      mouseenter: _vm.toggleSubMenu
    }
  }, [_c("a", {
    staticClass: "nav-item-hold",
    attrs: {
      href: "#"
    }
  }, [_c("i", {
    staticClass: "nav-icon i-Business-Mens"
  }), _vm._v(" "), _c("span", {
    staticClass: "nav-text"
  }, [_vm._v(_vm._s(_vm.$t("People")))])]), _vm._v(" "), _c("div", {
    staticClass: "triangle"
  })]), _vm._v(" "), _c("li", {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: _vm.currentUserPermissions && (_vm.currentUserPermissions.includes("users_view") || _vm.currentUserPermissions.includes("permissions_view")),
      expression: "currentUserPermissions && (currentUserPermissions.includes('users_view')\n                      || currentUserPermissions.includes('permissions_view'))"
    }],
    staticClass: "nav-item",
    "class": {
      active: _vm.selectedParentMenu == "User_Management"
    },
    attrs: {
      "data-item": "User_Management",
      "data-submenu": true
    },
    on: {
      mouseenter: _vm.toggleSubMenu
    }
  }, [_c("a", {
    staticClass: "nav-item-hold",
    attrs: {
      href: "#"
    }
  }, [_c("i", {
    staticClass: "nav-icon i-Administrator"
  }), _vm._v(" "), _c("span", {
    staticClass: "nav-text"
  }, [_vm._v(_vm._s(_vm.$t("User_Management")))])]), _vm._v(" "), _c("div", {
    staticClass: "triangle"
  })]), _vm._v(" "), _c("li", {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: _vm.currentUserPermissions && (_vm.currentUserPermissions.includes("products_add") || _vm.currentUserPermissions.includes("products_view") || _vm.currentUserPermissions.includes("product_import") || _vm.currentUserPermissions.includes("opening_stock_import") || _vm.currentUserPermissions.includes("barcode_view") || _vm.currentUserPermissions.includes("brand") || _vm.currentUserPermissions.includes("unit") || _vm.currentUserPermissions.includes("count_stock") || _vm.currentUserPermissions.includes("category") || _vm.currentUserPermissions.includes("subcategory")),
      expression: "currentUserPermissions \n          && (currentUserPermissions.includes('products_add')\n          || currentUserPermissions.includes('products_view') \n          || currentUserPermissions.includes('product_import') \n          || currentUserPermissions.includes('opening_stock_import') \n          || currentUserPermissions.includes('barcode_view')\n           || currentUserPermissions.includes('brand') \n           || currentUserPermissions.includes('unit')  \n           || currentUserPermissions.includes('count_stock')  \n           || currentUserPermissions.includes('category')\n           || currentUserPermissions.includes('subcategory'))"
    }],
    staticClass: "nav-item",
    "class": {
      active: _vm.selectedParentMenu == "products"
    },
    attrs: {
      "data-item": "products",
      "data-submenu": true
    },
    on: {
      mouseenter: _vm.toggleSubMenu
    }
  }, [_c("a", {
    staticClass: "nav-item-hold",
    attrs: {
      href: "#"
    }
  }, [_c("i", {
    staticClass: "nav-icon i-Library-2"
  }), _vm._v(" "), _c("span", {
    staticClass: "nav-text"
  }, [_vm._v(_vm._s(_vm.$t("Products")))])]), _vm._v(" "), _c("div", {
    staticClass: "triangle"
  })]), _vm._v(" "), _c("li", {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: _vm.currentUserPermissions && (_vm.currentUserPermissions.includes("adjustment_view") || _vm.currentUserPermissions.includes("adjustment_add")),
      expression: "currentUserPermissions \n            && (currentUserPermissions.includes('adjustment_view')\n            || currentUserPermissions.includes('adjustment_add'))"
    }],
    staticClass: "nav-item",
    "class": {
      active: _vm.selectedParentMenu == "adjustments"
    },
    attrs: {
      "data-item": "adjustments",
      "data-submenu": true
    },
    on: {
      mouseenter: _vm.toggleSubMenu
    }
  }, [_c("a", {
    staticClass: "nav-item-hold",
    attrs: {
      href: "#"
    }
  }, [_c("i", {
    staticClass: "nav-icon i-Edit-Map"
  }), _vm._v(" "), _c("span", {
    staticClass: "nav-text"
  }, [_vm._v(_vm._s(_vm.$t("StockAdjustement")))])]), _vm._v(" "), _c("div", {
    staticClass: "triangle"
  })]), _vm._v(" "), _c("li", {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: _vm.currentUserPermissions && (_vm.currentUserPermissions.includes("Purchases_view") || _vm.currentUserPermissions.includes("Purchases_add")),
      expression: "currentUserPermissions && (currentUserPermissions.includes('Purchases_view') \n                      || currentUserPermissions.includes('Purchases_add'))"
    }],
    staticClass: "nav-item",
    "class": {
      active: _vm.selectedParentMenu == "purchases"
    },
    attrs: {
      "data-item": "purchases",
      "data-submenu": true
    },
    on: {
      mouseenter: _vm.toggleSubMenu
    }
  }, [_c("a", {
    staticClass: "nav-item-hold",
    attrs: {
      href: "#"
    }
  }, [_c("i", {
    staticClass: "nav-icon i-Receipt"
  }), _vm._v(" "), _c("span", {
    staticClass: "nav-text"
  }, [_vm._v(_vm._s(_vm.$t("Purchases")))])]), _vm._v(" "), _c("div", {
    staticClass: "triangle"
  })]), _vm._v(" "), _c("li", {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: _vm.currentUserPermissions && (_vm.currentUserPermissions.includes("Sales_view") || _vm.currentUserPermissions.includes("Sales_add") || _vm.currentUserPermissions.includes("Pos_view") || _vm.currentUserPermissions.includes("customer_display_screen_setup") || _vm.currentUserPermissions.includes("shipment")),
      expression: "currentUserPermissions && (currentUserPermissions.includes('Sales_view') \n                      || currentUserPermissions.includes('Sales_add')\n                      || currentUserPermissions.includes('Pos_view')\n                      || currentUserPermissions.includes('customer_display_screen_setup')\n                      || currentUserPermissions.includes('shipment'))"
    }],
    staticClass: "nav-item",
    "class": {
      active: _vm.selectedParentMenu == "sales"
    },
    attrs: {
      "data-item": "sales",
      "data-submenu": true
    },
    on: {
      mouseenter: _vm.toggleSubMenu
    }
  }, [_c("a", {
    staticClass: "nav-item-hold",
    attrs: {
      href: "#"
    }
  }, [_c("i", {
    staticClass: "nav-icon i-Full-Cart"
  }), _vm._v(" "), _c("span", {
    staticClass: "nav-text"
  }, [_vm._v(_vm._s(_vm.$t("Sales")))])]), _vm._v(" "), _c("div", {
    staticClass: "triangle"
  })]), _vm._v(" "), _vm.currentUserPermissions && _vm.currentUserPermissions.includes("Sale_Returns_view") ? _c("li", {
    staticClass: "nav-item",
    "class": {
      active: _vm.selectedParentMenu == "sale_return"
    },
    attrs: {
      "data-item": "sale_return"
    },
    on: {
      mouseenter: _vm.toggleSubMenu
    }
  }, [_c("router-link", {
    staticClass: "nav-item-hold",
    attrs: {
      tag: "a",
      to: "/app/sale_return/list"
    }
  }, [_c("i", {
    staticClass: "nav-icon i-Right"
  }), _vm._v(" "), _c("span", {
    staticClass: "nav-text"
  }, [_vm._v(_vm._s(_vm.$t("SalesReturn")))])])], 1) : _vm._e(), _vm._v(" "), _c("li", {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: _vm.currentUserPermissions && (_vm.currentUserPermissions.includes("Quotations_view") || _vm.currentUserPermissions.includes("Quotations_add")),
      expression: "currentUserPermissions && (currentUserPermissions.includes('Quotations_view')\n                    || currentUserPermissions.includes('Quotations_add'))"
    }],
    staticClass: "nav-item",
    "class": {
      active: _vm.selectedParentMenu == "quotations"
    },
    attrs: {
      "data-item": "quotations",
      "data-submenu": true
    },
    on: {
      mouseenter: _vm.toggleSubMenu
    }
  }, [_c("a", {
    staticClass: "nav-item-hold",
    attrs: {
      href: "#"
    }
  }, [_c("i", {
    staticClass: "nav-icon i-Checkout-Basket"
  }), _vm._v(" "), _c("span", {
    staticClass: "nav-text"
  }, [_vm._v(_vm._s(_vm.$t("Quotations")))])]), _vm._v(" "), _c("div", {
    staticClass: "triangle"
  })]), _vm._v(" "), _vm.currentUserPermissions && _vm.currentUserPermissions.includes("Purchase_Returns_view") ? _c("li", {
    staticClass: "nav-item",
    "class": {
      active: _vm.selectedParentMenu == "purchase_return"
    },
    attrs: {
      "data-item": "purchase_return"
    },
    on: {
      mouseenter: _vm.toggleSubMenu
    }
  }, [_c("router-link", {
    staticClass: "nav-item-hold",
    attrs: {
      tag: "a",
      to: "/app/purchase_return/list"
    }
  }, [_c("i", {
    staticClass: "nav-icon i-Left"
  }), _vm._v(" "), _c("span", {
    staticClass: "nav-text"
  }, [_vm._v(_vm._s(_vm.$t("PurchasesReturn")))])])], 1) : _vm._e(), _vm._v(" "), _c("li", {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: _vm.currentUserPermissions && (_vm.currentUserPermissions.includes("transfer_view") || _vm.currentUserPermissions.includes("transfer_add")),
      expression: "currentUserPermissions && (currentUserPermissions.includes('transfer_view')\n                   || currentUserPermissions.includes('transfer_add'))"
    }],
    staticClass: "nav-item",
    "class": {
      active: _vm.selectedParentMenu == "transfers"
    },
    attrs: {
      "data-item": "transfers",
      "data-submenu": true
    },
    on: {
      mouseenter: _vm.toggleSubMenu
    }
  }, [_c("a", {
    staticClass: "nav-item-hold",
    attrs: {
      href: "#"
    }
  }, [_c("i", {
    staticClass: "nav-icon i-Back"
  }), _vm._v(" "), _c("span", {
    staticClass: "nav-text"
  }, [_vm._v(_vm._s(_vm.$t("StockTransfers")))])]), _vm._v(" "), _c("div", {
    staticClass: "triangle"
  })]), _vm._v(" "), _c("li", {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: _vm.currentUserPermissions && _vm.currentUserPermissions.includes("damage_view"),
      expression: "currentUserPermissions \n            && (currentUserPermissions.includes('damage_view'))"
    }],
    staticClass: "nav-item",
    "class": {
      active: _vm.selectedParentMenu == "damages"
    },
    attrs: {
      "data-item": "damages",
      "data-submenu": true
    },
    on: {
      mouseenter: _vm.toggleSubMenu
    }
  }, [_c("a", {
    staticClass: "nav-item-hold",
    attrs: {
      href: "#"
    }
  }, [_c("i", {
    staticClass: "nav-icon i-Remove-Bag"
  }), _vm._v(" "), _c("span", {
    staticClass: "nav-text"
  }, [_vm._v(_vm._s(_vm.$t("Damages")))])]), _vm._v(" "), _c("div", {
    staticClass: "triangle"
  })]), _vm._v(" "), _c("li", {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: _vm.currentUserPermissions && (_vm.currentUserPermissions.includes("company") || _vm.currentUserPermissions.includes("department") || _vm.currentUserPermissions.includes("designation") || _vm.currentUserPermissions.includes("office_shift") || _vm.currentUserPermissions.includes("view_employee") || _vm.currentUserPermissions.includes("attendance") || _vm.currentUserPermissions.includes("leave") || _vm.currentUserPermissions.includes("holiday") || _vm.currentUserPermissions.includes("payroll")),
      expression: "currentUserPermissions && (currentUserPermissions.includes('company')\n                   || currentUserPermissions.includes('department')\n                   || currentUserPermissions.includes('designation')\n                   || currentUserPermissions.includes('office_shift')\n                   || currentUserPermissions.includes('view_employee')\n                   || currentUserPermissions.includes('attendance')\n                   || currentUserPermissions.includes('leave')\n                   || currentUserPermissions.includes('holiday')\n                   || currentUserPermissions.includes('payroll')\n                   )"
    }],
    staticClass: "nav-item",
    "class": {
      active: _vm.selectedParentMenu == "hrm"
    },
    attrs: {
      "data-item": "hrm",
      "data-submenu": true
    },
    on: {
      mouseenter: _vm.toggleSubMenu
    }
  }, [_c("a", {
    staticClass: "nav-item-hold",
    attrs: {
      href: "#"
    }
  }, [_c("i", {
    staticClass: "nav-icon i-Library"
  }), _vm._v(" "), _c("span", {
    staticClass: "nav-text"
  }, [_vm._v(_vm._s(_vm.$t("hrm")))])]), _vm._v(" "), _c("div", {
    staticClass: "triangle"
  })]), _vm._v(" "), _c("li", {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: _vm.currentUserPermissions && (_vm.currentUserPermissions.includes("expense_view") || _vm.currentUserPermissions.includes("expense_add") || _vm.currentUserPermissions.includes("deposit_view") || _vm.currentUserPermissions.includes("deposit_add") || _vm.currentUserPermissions.includes("account") || _vm.currentUserPermissions.includes("transfer_money") || _vm.currentUserPermissions.includes("accounting_dashboard") || _vm.currentUserPermissions.includes("chart_of_accounts") || _vm.currentUserPermissions.includes("journal_entries") || _vm.currentUserPermissions.includes("trial_balance") || _vm.currentUserPermissions.includes("accounting_profit_loss") || _vm.currentUserPermissions.includes("balance_sheet") || _vm.currentUserPermissions.includes("accounting_tax_report")),
      expression: "currentUserPermissions && (currentUserPermissions.includes('expense_view')\n            || currentUserPermissions.includes('expense_add')\n            || currentUserPermissions.includes('deposit_view')\n            || currentUserPermissions.includes('deposit_add')\n            || currentUserPermissions.includes('account')\n            || currentUserPermissions.includes('transfer_money')\n            || currentUserPermissions.includes('accounting_dashboard')\n            || currentUserPermissions.includes('chart_of_accounts')\n            || currentUserPermissions.includes('journal_entries')\n            || currentUserPermissions.includes('trial_balance')\n            || currentUserPermissions.includes('accounting_profit_loss')\n            || currentUserPermissions.includes('balance_sheet')\n            || currentUserPermissions.includes('accounting_tax_report')\n            )"
    }],
    staticClass: "nav-item",
    "class": {
      active: _vm.selectedParentMenu == "accounting"
    },
    attrs: {
      "data-item": "accounting",
      "data-submenu": true
    },
    on: {
      mouseenter: _vm.toggleSubMenu
    }
  }, [_c("a", {
    staticClass: "nav-item-hold",
    attrs: {
      href: "#"
    }
  }, [_c("i", {
    staticClass: "nav-icon i-Wallet"
  }), _vm._v(" "), _c("span", {
    staticClass: "nav-text"
  }, [_vm._v(_vm._s(_vm.$t("Accounting")))])]), _vm._v(" "), _c("div", {
    staticClass: "triangle"
  })]), _vm._v(" "), _vm.currentUserPermissions && _vm.currentUserPermissions.includes("subscription_product") ? _c("li", {
    staticClass: "nav-item",
    "class": {
      active: _vm.selectedParentMenu == "subscription_product"
    },
    attrs: {
      "data-item": "subscription_product"
    },
    on: {
      mouseenter: _vm.toggleSubMenu
    }
  }, [_c("router-link", {
    staticClass: "nav-item-hold",
    attrs: {
      tag: "a",
      to: "/app/subscription_product/list"
    }
  }, [_c("i", {
    staticClass: "nav-icon i-Dollar"
  }), _vm._v(" "), _c("span", {
    staticClass: "nav-text"
  }, [_vm._v(_vm._s(_vm.$t("Subscription_Product")))])])], 1) : _vm._e(), _vm._v(" "), _c("li", {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: _vm.currentUserPermissions && _vm.currentUserPermissions.includes("service_jobs"),
      expression: "currentUserPermissions && currentUserPermissions.includes('service_jobs')"
    }],
    staticClass: "nav-item",
    "class": {
      active: _vm.selectedParentMenu == "service"
    },
    attrs: {
      "data-item": "service",
      "data-submenu": true
    },
    on: {
      mouseenter: _vm.toggleSubMenu
    }
  }, [_c("a", {
    staticClass: "nav-item-hold",
    attrs: {
      href: "#"
    }
  }, [_c("i", {
    staticClass: "nav-icon i-Repair"
  }), _vm._v(" "), _c("span", {
    staticClass: "nav-text"
  }, [_vm._v(_vm._s(_vm.$t("Service_Maintenance")))])]), _vm._v(" "), _c("div", {
    staticClass: "triangle"
  })]), _vm._v(" "), _c("li", {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: _vm.currentUserPermissions && _vm.currentUserPermissions.includes("assets"),
      expression: "currentUserPermissions && currentUserPermissions.includes('assets')"
    }],
    staticClass: "nav-item",
    "class": {
      active: _vm.selectedParentMenu == "assets"
    },
    attrs: {
      "data-item": "assets",
      "data-submenu": true
    },
    on: {
      mouseenter: _vm.toggleSubMenu
    }
  }, [_c("a", {
    staticClass: "nav-item-hold",
    attrs: {
      href: "#"
    }
  }, [_c("i", {
    staticClass: "nav-icon i-Gear"
  }), _vm._v(" "), _c("span", {
    staticClass: "nav-text"
  }, [_vm._v(_vm._s(_vm.$t("Assets")))])]), _vm._v(" "), _c("div", {
    staticClass: "triangle"
  })]), _vm._v(" "), _c("li", {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: _vm.currentUserPermissions && _vm.currentUserPermissions.includes("projects"),
      expression: "currentUserPermissions && currentUserPermissions.includes('projects')"
    }],
    staticClass: "nav-item",
    "class": {
      active: _vm.selectedParentMenu == "projects"
    },
    attrs: {
      "data-item": "projects"
    },
    on: {
      mouseenter: _vm.toggleSubMenu
    }
  }, [_c("router-link", {
    staticClass: "nav-item-hold",
    attrs: {
      tag: "a",
      to: "/app/projects"
    }
  }, [_c("i", {
    staticClass: "nav-icon i-Dropbox"
  }), _vm._v(" "), _c("span", {
    staticClass: "nav-text"
  }, [_vm._v(_vm._s(_vm.$t("Projects")))])])], 1), _vm._v(" "), _c("li", {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: _vm.currentUserPermissions && _vm.currentUserPermissions.includes("tasks"),
      expression: "currentUserPermissions && currentUserPermissions.includes('tasks')"
    }],
    staticClass: "nav-item",
    "class": {
      active: _vm.selectedParentMenu == "tasks"
    },
    attrs: {
      "data-item": "tasks"
    },
    on: {
      mouseenter: _vm.toggleSubMenu
    }
  }, [_c("router-link", {
    staticClass: "nav-item-hold",
    attrs: {
      tag: "a",
      to: "/app/tasks"
    }
  }, [_c("i", {
    staticClass: "nav-icon i-Check"
  }), _vm._v(" "), _c("span", {
    staticClass: "nav-text"
  }, [_vm._v(_vm._s(_vm.$t("Tasks")))])])], 1), _vm._v(" "), _c("li", {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: _vm.currentUserPermissions && _vm.currentUserPermissions.includes("bookings"),
      expression: "currentUserPermissions && currentUserPermissions.includes('bookings')"
    }],
    staticClass: "nav-item",
    "class": {
      active: _vm.selectedParentMenu == "bookings"
    },
    attrs: {
      "data-item": "bookings",
      "data-submenu": true
    },
    on: {
      mouseenter: _vm.toggleSubMenu
    }
  }, [_c("a", {
    staticClass: "nav-item-hold",
    attrs: {
      href: "#"
    }
  }, [_c("i", {
    staticClass: "nav-icon i-Calendar-4"
  }), _vm._v(" "), _c("span", {
    staticClass: "nav-text"
  }, [_vm._v(_vm._s(_vm.$t("Bookings")))])]), _vm._v(" "), _c("div", {
    staticClass: "triangle"
  })]), _vm._v(" "), _c("li", {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: _vm.currentUserPermissions && _vm.currentUserPermissions.includes("woocommerce_settings"),
      expression: "currentUserPermissions && currentUserPermissions.includes('woocommerce_settings')"
    }],
    staticClass: "nav-item",
    "class": {
      active: _vm.selectedParentMenu == "woocommerce_settings"
    },
    attrs: {
      "data-item": "woocommerce_settings"
    }
  }, [_c("router-link", {
    staticClass: "nav-item-hold",
    attrs: {
      tag: "a",
      to: "/app/woocommerce"
    }
  }, [_c("i", {
    staticClass: "nav-icon i-Shopping-Cart"
  }), _vm._v(" "), _c("span", {
    staticClass: "nav-text"
  }, [_vm._v(_vm._s(_vm.$t("WooCommerce_Settings")))])])], 1), _vm._v(" "), _c("li", {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: _vm.currentUserPermissions && (_vm.currentUserPermissions.includes("setting_system") || _vm.currentUserPermissions.includes("update_settings") || _vm.currentUserPermissions.includes("sms_settings") || _vm.currentUserPermissions.includes("quickbooks_settings") || _vm.currentUserPermissions.includes("notification_template") || _vm.currentUserPermissions.includes("pos_settings") || _vm.currentUserPermissions.includes("appearance_settings") || _vm.currentUserPermissions.includes("translations_settings") || _vm.currentUserPermissions.includes("module_settings") || _vm.currentUserPermissions.includes("payment_gateway") || _vm.currentUserPermissions.includes("mail_settings") || _vm.currentUserPermissions.includes("warehouse") || _vm.currentUserPermissions.includes("backup") || _vm.currentUserPermissions.includes("payment_methods") || _vm.currentUserPermissions.includes("currency") || _vm.currentUserPermissions.includes("login_device_management")),
      expression: "currentUserPermissions && (currentUserPermissions.includes('setting_system')\n                      || currentUserPermissions.includes('update_settings')\n                      || currentUserPermissions.includes('sms_settings')\n                      || currentUserPermissions.includes('quickbooks_settings')\n                      || currentUserPermissions.includes('notification_template')\n                      || currentUserPermissions.includes('pos_settings')\n                      || currentUserPermissions.includes('appearance_settings')\n                      || currentUserPermissions.includes('translations_settings')\n                      || currentUserPermissions.includes('module_settings')\n                      || currentUserPermissions.includes('payment_gateway')\n                      || currentUserPermissions.includes('mail_settings')\n                      || currentUserPermissions.includes('warehouse')\n                      || currentUserPermissions.includes('backup')\n                      || currentUserPermissions.includes('payment_methods')\n                      || currentUserPermissions.includes('currency')\n                      || currentUserPermissions.includes('login_device_management'))"
    }],
    staticClass: "nav-item",
    "class": {
      active: _vm.selectedParentMenu == "settings"
    },
    attrs: {
      "data-item": "settings",
      "data-submenu": true
    },
    on: {
      mouseenter: _vm.toggleSubMenu
    }
  }, [_c("a", {
    staticClass: "nav-item-hold",
    attrs: {
      href: "#"
    }
  }, [_c("i", {
    staticClass: "nav-icon i-Data-Settings"
  }), _vm._v(" "), _c("span", {
    staticClass: "nav-text"
  }, [_vm._v(_vm._s(_vm.$t("Settings")))])]), _vm._v(" "), _c("div", {
    staticClass: "triangle"
  })]), _vm._v(" "), _c("li", {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: _vm.currentUserPermissions && _vm.currentUserPermissions.includes("AI_Reports"),
      expression: "currentUserPermissions && currentUserPermissions.includes('AI_Reports')"
    }],
    staticClass: "nav-item",
    "class": {
      active: _vm.selectedParentMenu == "ai_reports"
    },
    attrs: {
      "data-item": "ai_reports"
    }
  }, [_c("router-link", {
    staticClass: "nav-item-hold",
    attrs: {
      tag: "a",
      to: "/app/reports/ai_reports"
    }
  }, [_c("i", {
    staticClass: "nav-icon i-Light-Bulb"
  }), _vm._v(" "), _c("span", {
    staticClass: "nav-text"
  }, [_vm._v(_vm._s(_vm.$t("AI_Reports") || "AI Reports"))])])], 1), _vm._v(" "), _c("li", {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: _vm.currentUserPermissions && (_vm.currentUserPermissions.includes("Reports_payments_Sales") || _vm.currentUserPermissions.includes("Reports_payments_Purchases") || _vm.currentUserPermissions.includes("Reports_payments_Sale_Returns") || _vm.currentUserPermissions.includes("Reports_payments_purchase_Return") || _vm.currentUserPermissions.includes("Warehouse_report") || _vm.currentUserPermissions.includes("Reports_profit") || _vm.currentUserPermissions.includes("analytics_report") || _vm.currentUserPermissions.includes("Stock_Inventory_Valuation") || _vm.currentUserPermissions.includes("inventory_valuation") || _vm.currentUserPermissions.includes("expenses_report") || _vm.currentUserPermissions.includes("deposits_report") || _vm.currentUserPermissions.includes("Reports_purchase") || _vm.currentUserPermissions.includes("Reports_quantity_alerts") || _vm.currentUserPermissions.includes("Reports_sales") || _vm.currentUserPermissions.includes("product_sales_report") || _vm.currentUserPermissions.includes("sales_by_seller_report") || _vm.currentUserPermissions.includes("product_purchases_report") || _vm.currentUserPermissions.includes("Reports_suppliers") || _vm.currentUserPermissions.includes("Top_Suppliers_Report") || _vm.currentUserPermissions.includes("Reports_customers") || _vm.currentUserPermissions.includes("Top_products") || _vm.currentUserPermissions.includes("inactive_customers_report") || _vm.currentUserPermissions.includes("Top_customers") || _vm.currentUserPermissions.includes("report_device_management") || _vm.currentUserPermissions.includes("users_report") || _vm.currentUserPermissions.includes("product_report") || _vm.currentUserPermissions.includes("zeroSalesProducts") || _vm.currentUserPermissions.includes("Dead_Stock_Report") || _vm.currentUserPermissions.includes("Stock_Aging_Report") || _vm.currentUserPermissions.includes("Stock_Transfer_Report") || _vm.currentUserPermissions.includes("discount_summary_report") || _vm.currentUserPermissions.includes("Stock_Adjustment_Report") || _vm.currentUserPermissions.includes("customer_loyalty_points_report") || _vm.currentUserPermissions.includes("tax_summary_report") || _vm.currentUserPermissions.includes("draft_invoices_report") || _vm.currentUserPermissions.includes("report_transactions") || _vm.currentUserPermissions.includes("cash_flow_report") || _vm.currentUserPermissions.includes("report_attendance_summary") || _vm.currentUserPermissions.includes("seller_report") || _vm.currentUserPermissions.includes("report_sales_by_category") || _vm.currentUserPermissions.includes("report_sales_by_brand") || _vm.currentUserPermissions.includes("report_error_logs") || _vm.currentUserPermissions.includes("cash_register_report") || _vm.currentUserPermissions.includes("report_warranty") || _vm.currentUserPermissions.includes("stock_report") || _vm.currentUserPermissions.includes("negative_stock_report") || _vm.currentUserPermissions.includes("return_ratio_report") || _vm.currentUserPermissions.includes("service_jobs") || _vm.currentUserPermissions.includes("service_jobs_report") || _vm.currentUserPermissions.includes("checklist_completion_report") || _vm.currentUserPermissions.includes("customer_maintenance_history_report")),
      expression: "currentUserPermissions && \n                   (currentUserPermissions.includes('Reports_payments_Sales') \n                   || currentUserPermissions.includes('Reports_payments_Purchases')\n                   || currentUserPermissions.includes('Reports_payments_Sale_Returns')\n                   || currentUserPermissions.includes('Reports_payments_purchase_Return')\n                   || currentUserPermissions.includes('Warehouse_report')\n                   || currentUserPermissions.includes('Reports_profit')\n                   || currentUserPermissions.includes('analytics_report')\n                   || currentUserPermissions.includes('Stock_Inventory_Valuation')\n                   || currentUserPermissions.includes('inventory_valuation')\n                   || currentUserPermissions.includes('expenses_report')\n                   || currentUserPermissions.includes('deposits_report')\n                   || currentUserPermissions.includes('Reports_purchase') \n                   || currentUserPermissions.includes('Reports_quantity_alerts')\n                   || currentUserPermissions.includes('Reports_sales')\n                   || currentUserPermissions.includes('product_sales_report')\n                   || currentUserPermissions.includes('sales_by_seller_report')\n                   || currentUserPermissions.includes('product_purchases_report')\n                   || currentUserPermissions.includes('Reports_suppliers')\n                   || currentUserPermissions.includes('Top_Suppliers_Report')\n                   || currentUserPermissions.includes('Reports_customers')\n                   || currentUserPermissions.includes('Top_products')\n                   || currentUserPermissions.includes('inactive_customers_report')\n                   || currentUserPermissions.includes('Top_customers')\n                   || currentUserPermissions.includes('report_device_management')\n                   || currentUserPermissions.includes('users_report')\n                   || currentUserPermissions.includes('product_report')\n                    || currentUserPermissions.includes('zeroSalesProducts')\n                    || currentUserPermissions.includes('Dead_Stock_Report')\n                     || currentUserPermissions.includes('Stock_Aging_Report')\n                     || currentUserPermissions.includes('Stock_Transfer_Report')\n                     || currentUserPermissions.includes('discount_summary_report')\n                     || currentUserPermissions.includes('Stock_Adjustment_Report')\n                    || currentUserPermissions.includes('customer_loyalty_points_report')\n                    || currentUserPermissions.includes('tax_summary_report')\n                    || currentUserPermissions.includes('draft_invoices_report')\n                    || currentUserPermissions.includes('report_transactions')\n                    || currentUserPermissions.includes('cash_flow_report')\n                    || currentUserPermissions.includes('report_attendance_summary')\n                     || currentUserPermissions.includes('seller_report')\n                    || currentUserPermissions.includes('report_sales_by_category')\n                     || currentUserPermissions.includes('report_sales_by_brand')\n                    || currentUserPermissions.includes('report_error_logs')\n                    || currentUserPermissions.includes('cash_register_report')\n                    || currentUserPermissions.includes('report_warranty')\n                   || currentUserPermissions.includes('stock_report')\n                   || currentUserPermissions.includes('negative_stock_report')\n                   || currentUserPermissions.includes('return_ratio_report')\n                   || currentUserPermissions.includes('service_jobs')\n                   || currentUserPermissions.includes('service_jobs_report')\n                   || currentUserPermissions.includes('checklist_completion_report')\n                   || currentUserPermissions.includes('customer_maintenance_history_report'))"
    }],
    staticClass: "nav-item",
    "class": {
      active: _vm.selectedParentMenu == "reports"
    },
    attrs: {
      "data-item": "reports",
      "data-submenu": true
    },
    on: {
      mouseenter: _vm.toggleSubMenu
    }
  }, [_c("a", {
    staticClass: "nav-item-hold",
    attrs: {
      href: "#"
    }
  }, [_c("i", {
    staticClass: "nav-icon i-Line-Chart"
  }), _vm._v(" "), _c("span", {
    staticClass: "nav-text"
  }, [_vm._v(_vm._s(_vm.$t("Reports")))])]), _vm._v(" "), _c("div", {
    staticClass: "triangle"
  })])])])]), _vm._v(" "), _c("vue-perfect-scrollbar", {
    staticClass: "sidebar-left-secondary ps rtl-ps-none",
    "class": {
      open: _vm.getSideBarToggleProperties.isSecondarySideNavOpen
    },
    attrs: {
      settings: {
        suppressScrollX: true,
        wheelPropagation: false
      }
    }
  }, [_c("div", {
    ref: "sidebarChild"
  }, [_c("ul", {
    staticClass: "childNav d-none",
    "class": {
      "d-block": _vm.selectedParentMenu == "Store"
    },
    attrs: {
      "data-parent": "Store"
    }
  }, [_c("li", {
    staticClass: "nav-item"
  }, [_c("a", {
    staticClass: "nav-item-hold",
    attrs: {
      href: "/online_store",
      target: "_blank"
    }
  }, [_c("i", {
    staticClass: "nav-icon i-Shop-2"
  }), _vm._v(" "), _c("span", {
    staticClass: "item-name"
  }, [_vm._v(_vm._s(_vm.$t("Visit_Online_Store")))])])]), _vm._v(" "), _vm.currentUserPermissions && _vm.currentUserPermissions.includes("Store_settings_view") ? _c("li", {
    staticClass: "nav-item"
  }, [_c("router-link", {
    staticClass: "nav-item-hold",
    attrs: {
      tag: "a",
      to: "/app/Store/Settings"
    }
  }, [_c("i", {
    staticClass: "nav-icon i-Gear"
  }), _vm._v(" "), _c("span", {
    staticClass: "item-name"
  }, [_vm._v(_vm._s(_vm.$t("Settings")))])])], 1) : _vm._e(), _vm._v(" "), _vm.currentUserPermissions && _vm.currentUserPermissions.includes("Orders_view") ? _c("li", {
    staticClass: "nav-item"
  }, [_c("router-link", {
    staticClass: "nav-item-hold",
    attrs: {
      tag: "a",
      to: "/app/Store/Orders"
    }
  }, [_c("i", {
    staticClass: "nav-icon i-Receipt"
  }), _vm._v(" "), _c("span", {
    staticClass: "item-name"
  }, [_vm._v(_vm._s(_vm.$t("Online_Orders")))])])], 1) : _vm._e(), _vm._v(" "), _vm.currentUserPermissions && _vm.currentUserPermissions.includes("Collections_view") ? _c("li", {
    staticClass: "nav-item"
  }, [_c("router-link", {
    staticClass: "nav-item-hold",
    attrs: {
      tag: "a",
      to: "/app/Store/Collections"
    }
  }, [_c("i", {
    staticClass: "nav-icon i-Check"
  }), _vm._v(" "), _c("span", {
    staticClass: "item-name"
  }, [_vm._v(_vm._s(_vm.$t("Collections")))])])], 1) : _vm._e(), _vm._v(" "), _vm.currentUserPermissions && _vm.currentUserPermissions.includes("Banners_view") ? _c("li", {
    staticClass: "nav-item"
  }, [_c("router-link", {
    staticClass: "nav-item-hold",
    attrs: {
      tag: "a",
      to: "/app/Store/Banners"
    }
  }, [_c("i", {
    staticClass: "nav-icon i-Wallet"
  }), _vm._v(" "), _c("span", {
    staticClass: "item-name"
  }, [_vm._v(_vm._s(_vm.$t("Banners")))])])], 1) : _vm._e(), _vm._v(" "), _vm.currentUserPermissions && _vm.currentUserPermissions.includes("Subscribers_view") ? _c("li", {
    staticClass: "nav-item"
  }, [_c("router-link", {
    staticClass: "nav-item-hold",
    attrs: {
      tag: "a",
      to: "/app/Store/Subscribers"
    }
  }, [_c("i", {
    staticClass: "nav-icon i-MaleFemale"
  }), _vm._v(" "), _c("span", {
    staticClass: "item-name"
  }, [_vm._v(_vm._s(_vm.$t("Subscribers")))])])], 1) : _vm._e(), _vm._v(" "), _vm.currentUserPermissions && _vm.currentUserPermissions.includes("Messages_view") ? _c("li", {
    staticClass: "nav-item"
  }, [_c("router-link", {
    staticClass: "nav-item-hold",
    attrs: {
      tag: "a",
      to: "/app/Store/Messages"
    }
  }, [_c("i", {
    staticClass: "nav-icon i-Speach-Bubble"
  }), _vm._v(" "), _c("span", {
    staticClass: "item-name"
  }, [_vm._v(_vm._s(_vm.$t("Messages")))])])], 1) : _vm._e()]), _vm._v(" "), _c("ul", {
    staticClass: "childNav d-none",
    "class": {
      "d-block": _vm.selectedParentMenu == "products"
    },
    attrs: {
      "data-parent": "products"
    }
  }, [_vm.currentUserPermissions && _vm.currentUserPermissions.includes("products_add") ? _c("li", {
    staticClass: "nav-item"
  }, [_c("router-link", {
    attrs: {
      tag: "a",
      to: "/app/products/store"
    }
  }, [_c("i", {
    staticClass: "nav-icon i-Add-File"
  }), _vm._v(" "), _c("span", {
    staticClass: "item-name"
  }, [_vm._v(_vm._s(_vm.$t("AddProduct")))])])], 1) : _vm._e(), _vm._v(" "), _vm.currentUserPermissions && _vm.currentUserPermissions.includes("products_view") ? _c("li", {
    staticClass: "nav-item"
  }, [_c("router-link", {
    attrs: {
      tag: "a",
      to: "/app/products/list"
    }
  }, [_c("i", {
    staticClass: "nav-icon i-Files"
  }), _vm._v(" "), _c("span", {
    staticClass: "item-name"
  }, [_vm._v(_vm._s(_vm.$t("productsList")))])])], 1) : _vm._e(), _vm._v(" "), _vm.currentUserPermissions && _vm.currentUserPermissions.includes("product_import") ? _c("li", {
    staticClass: "nav-item"
  }, [_c("router-link", {
    attrs: {
      tag: "a",
      to: "/app/products/import"
    }
  }, [_c("i", {
    staticClass: "nav-icon i-Download"
  }), _vm._v(" "), _c("span", {
    staticClass: "item-name"
  }, [_vm._v(_vm._s(_vm.$t("import_products")))])])], 1) : _vm._e(), _vm._v(" "), _vm.currentUserPermissions && _vm.currentUserPermissions.includes("product_import") ? _c("li", {
    staticClass: "nav-item"
  }, [_c("router-link", {
    attrs: {
      tag: "a",
      to: "/app/products/import-update"
    }
  }, [_c("i", {
    staticClass: "nav-icon i-Edit"
  }), _vm._v(" "), _c("span", {
    staticClass: "item-name"
  }, [_vm._v("Import (Update Only)")])])], 1) : _vm._e(), _vm._v(" "), _vm.currentUserPermissions && _vm.currentUserPermissions.includes("opening_stock_import") ? _c("li", {
    staticClass: "nav-item"
  }, [_c("router-link", {
    attrs: {
      tag: "a",
      to: "/app/products/opening_stock_import"
    }
  }, [_c("i", {
    staticClass: "nav-icon i-Add-File"
  }), _vm._v(" "), _c("span", {
    staticClass: "item-name"
  }, [_vm._v(_vm._s(_vm.$t("Opening_Stock")))])])], 1) : _vm._e(), _vm._v(" "), _vm.currentUserPermissions && _vm.currentUserPermissions.includes("barcode_view") ? _c("li", {
    staticClass: "nav-item"
  }, [_c("router-link", {
    attrs: {
      tag: "a",
      to: "/app/products/barcode"
    }
  }, [_c("i", {
    staticClass: "nav-icon i-Bar-Code"
  }), _vm._v(" "), _c("span", {
    staticClass: "item-name"
  }, [_vm._v(_vm._s(_vm.$t("Printbarcode")))])])], 1) : _vm._e(), _vm._v(" "), _vm.currentUserPermissions && _vm.currentUserPermissions.includes("count_stock") ? _c("li", {
    staticClass: "nav-item"
  }, [_c("router-link", {
    attrs: {
      tag: "a",
      to: "/app/products/count_stock"
    }
  }, [_c("i", {
    staticClass: "nav-icon i-Check-2"
  }), _vm._v(" "), _c("span", {
    staticClass: "item-name"
  }, [_vm._v(_vm._s(_vm.$t("CountStock")))])])], 1) : _vm._e(), _vm._v(" "), _vm.currentUserPermissions && _vm.currentUserPermissions.includes("category") ? _c("li", {
    staticClass: "nav-item"
  }, [_c("router-link", {
    attrs: {
      tag: "a",
      to: "/app/products/Categories"
    }
  }, [_c("i", {
    staticClass: "nav-icon i-Duplicate-Layer"
  }), _vm._v(" "), _c("span", {
    staticClass: "item-name"
  }, [_vm._v(_vm._s(_vm.$t("Categories")))])])], 1) : _vm._e(), _vm._v(" "), _vm.currentUserPermissions && _vm.currentUserPermissions.includes("subcategory") ? _c("li", {
    staticClass: "nav-item"
  }, [_c("router-link", {
    attrs: {
      tag: "a",
      to: "/app/products/SubCategories"
    }
  }, [_c("i", {
    staticClass: "nav-icon i-Library"
  }), _vm._v(" "), _c("span", {
    staticClass: "item-name"
  }, [_vm._v(_vm._s(_vm.$t("SubCategory")))])])], 1) : _vm._e(), _vm._v(" "), _vm.currentUserPermissions && _vm.currentUserPermissions.includes("brand") ? _c("li", {
    staticClass: "nav-item"
  }, [_c("router-link", {
    attrs: {
      tag: "a",
      to: "/app/products/Brands"
    }
  }, [_c("i", {
    staticClass: "nav-icon i-Bookmark"
  }), _vm._v(" "), _c("span", {
    staticClass: "item-name"
  }, [_vm._v(_vm._s(_vm.$t("Brand")))])])], 1) : _vm._e(), _vm._v(" "), _vm.currentUserPermissions && _vm.currentUserPermissions.includes("unit") ? _c("li", {
    staticClass: "nav-item"
  }, [_c("router-link", {
    attrs: {
      tag: "a",
      to: "/app/products/Units"
    }
  }, [_c("i", {
    staticClass: "nav-icon i-Quotes"
  }), _vm._v(" "), _c("span", {
    staticClass: "item-name"
  }, [_vm._v(_vm._s(_vm.$t("Units")))])])], 1) : _vm._e()]), _vm._v(" "), _c("ul", {
    staticClass: "childNav d-none",
    "class": {
      "d-block": _vm.selectedParentMenu == "accounting"
    },
    attrs: {
      "data-parent": "accounting"
    }
  }, [_vm.currentUserPermissions && _vm.currentUserPermissions.includes("accounting_dashboard") ? _c("li", {
    staticClass: "nav-item"
  }, [_c("router-link", {
    attrs: {
      tag: "a",
      to: "/app/accounting-v2/dashboard"
    }
  }, [_c("i", {
    staticClass: "nav-icon i-Line-Chart"
  }), _vm._v(" "), _c("span", {
    staticClass: "item-name"
  }, [_vm._v(_vm._s(_vm.$t("dashboard")))])])], 1) : _vm._e(), _vm._v(" "), _vm.currentUserPermissions && _vm.currentUserPermissions.includes("chart_of_accounts") ? _c("li", {
    staticClass: "nav-item"
  }, [_c("router-link", {
    attrs: {
      tag: "a",
      to: "/app/accounting-v2/chart-of-accounts"
    }
  }, [_c("i", {
    staticClass: "nav-icon i-Data"
  }), _vm._v(" "), _c("span", {
    staticClass: "item-name"
  }, [_vm._v(_vm._s(_vm.$t("Chart_of_Accounts_Title")))])])], 1) : _vm._e(), _vm._v(" "), _vm.currentUserPermissions && _vm.currentUserPermissions.includes("journal_entries") ? _c("li", {
    staticClass: "nav-item"
  }, [_c("router-link", {
    attrs: {
      tag: "a",
      to: "/app/accounting-v2/journal-entries"
    }
  }, [_c("i", {
    staticClass: "nav-icon i-Files"
  }), _vm._v(" "), _c("span", {
    staticClass: "item-name"
  }, [_vm._v(_vm._s(_vm.$t("Journal_Entries_Title")))])])], 1) : _vm._e(), _vm._v(" "), _vm.currentUserPermissions && _vm.currentUserPermissions.includes("trial_balance") ? _c("li", {
    staticClass: "nav-item"
  }, [_c("router-link", {
    attrs: {
      tag: "a",
      to: "/app/accounting-v2/reports/trial-balance"
    }
  }, [_c("i", {
    staticClass: "nav-icon i-Line-Chart"
  }), _vm._v(" "), _c("span", {
    staticClass: "item-name"
  }, [_vm._v(_vm._s(_vm.$t("Trial_Balance_Title")))])])], 1) : _vm._e(), _vm._v(" "), _vm.currentUserPermissions && _vm.currentUserPermissions.includes("accounting_profit_loss") ? _c("li", {
    staticClass: "nav-item"
  }, [_c("router-link", {
    attrs: {
      tag: "a",
      to: "/app/accounting-v2/reports/profit-and-loss"
    }
  }, [_c("i", {
    staticClass: "nav-icon i-Money-Bag"
  }), _vm._v(" "), _c("span", {
    staticClass: "item-name"
  }, [_vm._v(_vm._s(_vm.$t("Profit_Loss_Title")))])])], 1) : _vm._e(), _vm._v(" "), _vm.currentUserPermissions && _vm.currentUserPermissions.includes("balance_sheet") ? _c("li", {
    staticClass: "nav-item"
  }, [_c("router-link", {
    attrs: {
      tag: "a",
      to: "/app/accounting-v2/reports/balance-sheet"
    }
  }, [_c("i", {
    staticClass: "nav-icon i-Pie-Chart"
  }), _vm._v(" "), _c("span", {
    staticClass: "item-name"
  }, [_vm._v(_vm._s(_vm.$t("Balance_Sheet_Title")))])])], 1) : _vm._e(), _vm._v(" "), _vm.currentUserPermissions && _vm.currentUserPermissions.includes("accounting_tax_report") ? _c("li", {
    staticClass: "nav-item"
  }, [_c("router-link", {
    attrs: {
      tag: "a",
      to: "/app/accounting-v2/reports/tax-report"
    }
  }, [_c("i", {
    staticClass: "nav-icon i-Files"
  }), _vm._v(" "), _c("span", {
    staticClass: "item-name"
  }, [_vm._v(_vm._s(_vm.$t("Tax_Summary_Report")))])])], 1) : _vm._e()]), _vm._v(" "), _c("ul", {
    staticClass: "childNav d-none",
    "class": {
      "d-block": _vm.selectedParentMenu == "adjustments"
    },
    attrs: {
      "data-parent": "adjustments"
    }
  }, [_vm.currentUserPermissions && _vm.currentUserPermissions.includes("adjustment_add") ? _c("li", {
    staticClass: "nav-item"
  }, [_c("router-link", {
    attrs: {
      tag: "a",
      to: "/app/adjustments/store"
    }
  }, [_c("i", {
    staticClass: "nav-icon i-Add-File"
  }), _vm._v(" "), _c("span", {
    staticClass: "item-name"
  }, [_vm._v(_vm._s(_vm.$t("CreateAdjustment")))])])], 1) : _vm._e(), _vm._v(" "), _vm.currentUserPermissions && _vm.currentUserPermissions.includes("adjustment_view") ? _c("li", {
    staticClass: "nav-item"
  }, [_c("router-link", {
    attrs: {
      tag: "a",
      to: "/app/adjustments/list"
    }
  }, [_c("i", {
    staticClass: "nav-icon i-Files"
  }), _vm._v(" "), _c("span", {
    staticClass: "item-name"
  }, [_vm._v(_vm._s(_vm.$t("ListAdjustments")))])])], 1) : _vm._e()]), _vm._v(" "), _c("ul", {
    staticClass: "childNav d-none",
    "class": {
      "d-block": _vm.selectedParentMenu == "transfers"
    },
    attrs: {
      "data-parent": "transfers"
    }
  }, [_vm.currentUserPermissions && _vm.currentUserPermissions.includes("transfer_add") ? _c("li", {
    staticClass: "nav-item"
  }, [_c("router-link", {
    attrs: {
      tag: "a",
      to: "/app/transfers/store"
    }
  }, [_c("i", {
    staticClass: "nav-icon i-Add-File"
  }), _vm._v(" "), _c("span", {
    staticClass: "item-name"
  }, [_vm._v(_vm._s(_vm.$t("CreateTransfer")))])])], 1) : _vm._e(), _vm._v(" "), _vm.currentUserPermissions && _vm.currentUserPermissions.includes("transfer_view") ? _c("li", {
    staticClass: "nav-item"
  }, [_c("router-link", {
    attrs: {
      tag: "a",
      to: "/app/transfers/list"
    }
  }, [_c("i", {
    staticClass: "nav-icon i-Files"
  }), _vm._v(" "), _c("span", {
    staticClass: "item-name"
  }, [_vm._v(_vm._s(_vm.$t("ListTransfers")))])])], 1) : _vm._e()]), _vm._v(" "), _c("ul", {
    staticClass: "childNav d-none",
    "class": {
      "d-block": _vm.selectedParentMenu == "damages"
    },
    attrs: {
      "data-parent": "damages"
    }
  }, [_vm.currentUserPermissions && _vm.currentUserPermissions.includes("damage_view") ? _c("li", {
    staticClass: "nav-item"
  }, [_c("router-link", {
    attrs: {
      tag: "a",
      to: "/app/damages/store"
    }
  }, [_c("i", {
    staticClass: "nav-icon i-Add-File"
  }), _vm._v(" "), _c("span", {
    staticClass: "item-name"
  }, [_vm._v(_vm._s(_vm.$t("Create_Damage")))])])], 1) : _vm._e(), _vm._v(" "), _vm.currentUserPermissions && _vm.currentUserPermissions.includes("damage_view") ? _c("li", {
    staticClass: "nav-item"
  }, [_c("router-link", {
    attrs: {
      tag: "a",
      to: "/app/damages/list"
    }
  }, [_c("i", {
    staticClass: "nav-icon i-Files"
  }), _vm._v(" "), _c("span", {
    staticClass: "item-name"
  }, [_vm._v(_vm._s(_vm.$t("Damages")))])])], 1) : _vm._e()]), _vm._v(" "), _c("ul", {
    staticClass: "childNav d-none",
    "class": {
      "d-block": _vm.selectedParentMenu == "accounting"
    },
    attrs: {
      "data-parent": "accounting"
    }
  }, [_vm.currentUserPermissions && _vm.currentUserPermissions.includes("account") ? _c("li", {
    staticClass: "nav-item"
  }, [_c("router-link", {
    attrs: {
      tag: "a",
      to: "/app/accounts"
    }
  }, [_c("i", {
    staticClass: "nav-icon i-Files"
  }), _vm._v(" "), _c("span", {
    staticClass: "item-name"
  }, [_vm._v(_vm._s(_vm.$t("List_accounts")))])])], 1) : _vm._e(), _vm._v(" "), _vm.currentUserPermissions && _vm.currentUserPermissions.includes("transfer_money") ? _c("li", {
    staticClass: "nav-item"
  }, [_c("router-link", {
    attrs: {
      tag: "a",
      to: "/app/transfer_money"
    }
  }, [_c("i", {
    staticClass: "nav-icon i-Files"
  }), _vm._v(" "), _c("span", {
    staticClass: "item-name"
  }, [_vm._v(_vm._s(_vm.$t("Transfers_Money")))])])], 1) : _vm._e(), _vm._v(" "), _vm.currentUserPermissions && _vm.currentUserPermissions.includes("expense_add") ? _c("li", {
    staticClass: "nav-item"
  }, [_c("router-link", {
    attrs: {
      tag: "a",
      to: "/app/expenses/store"
    }
  }, [_c("i", {
    staticClass: "nav-icon i-Add-File"
  }), _vm._v(" "), _c("span", {
    staticClass: "item-name"
  }, [_vm._v(_vm._s(_vm.$t("Create_Expense")))])])], 1) : _vm._e(), _vm._v(" "), _vm.currentUserPermissions && _vm.currentUserPermissions.includes("expense_view") ? _c("li", {
    staticClass: "nav-item"
  }, [_c("router-link", {
    attrs: {
      tag: "a",
      to: "/app/expenses/list"
    }
  }, [_c("i", {
    staticClass: "nav-icon i-Files"
  }), _vm._v(" "), _c("span", {
    staticClass: "item-name"
  }, [_vm._v(_vm._s(_vm.$t("ListExpenses")))])])], 1) : _vm._e(), _vm._v(" "), _vm.currentUserPermissions && _vm.currentUserPermissions.includes("deposit_add") ? _c("li", {
    staticClass: "nav-item"
  }, [_c("router-link", {
    attrs: {
      tag: "a",
      to: "/app/deposits/store"
    }
  }, [_c("i", {
    staticClass: "nav-icon i-Add-File"
  }), _vm._v(" "), _c("span", {
    staticClass: "item-name"
  }, [_vm._v(_vm._s(_vm.$t("Create_deposit")))])])], 1) : _vm._e(), _vm._v(" "), _vm.currentUserPermissions && _vm.currentUserPermissions.includes("deposit_view") ? _c("li", {
    staticClass: "nav-item"
  }, [_c("router-link", {
    attrs: {
      tag: "a",
      to: "/app/deposits/list"
    }
  }, [_c("i", {
    staticClass: "nav-icon i-Files"
  }), _vm._v(" "), _c("span", {
    staticClass: "item-name"
  }, [_vm._v(_vm._s(_vm.$t("List_Deposit")))])])], 1) : _vm._e(), _vm._v(" "), _vm.currentUserPermissions && _vm.currentUserPermissions.includes("expense_view") ? _c("li", {
    staticClass: "nav-item"
  }, [_c("router-link", {
    attrs: {
      tag: "a",
      to: "/app/expenses/category"
    }
  }, [_c("i", {
    staticClass: "nav-icon i-Files"
  }), _vm._v(" "), _c("span", {
    staticClass: "item-name"
  }, [_vm._v(_vm._s(_vm.$t("Expense_Category")))])])], 1) : _vm._e(), _vm._v(" "), _vm.currentUserPermissions && _vm.currentUserPermissions.includes("deposit_view") ? _c("li", {
    staticClass: "nav-item"
  }, [_c("router-link", {
    attrs: {
      tag: "a",
      to: "/app/deposits/category"
    }
  }, [_c("i", {
    staticClass: "nav-icon i-Files"
  }), _vm._v(" "), _c("span", {
    staticClass: "item-name"
  }, [_vm._v(_vm._s(_vm.$t("Deposit_Category")))])])], 1) : _vm._e()]), _vm._v(" "), _c("ul", {
    staticClass: "childNav d-none",
    "class": {
      "d-block": _vm.selectedParentMenu == "purchases"
    },
    attrs: {
      "data-parent": "purchases"
    }
  }, [_vm.currentUserPermissions && _vm.currentUserPermissions.includes("Purchases_add") ? _c("li", {
    staticClass: "nav-item"
  }, [_c("router-link", {
    attrs: {
      tag: "a",
      to: "/app/purchases/store"
    }
  }, [_c("i", {
    staticClass: "nav-icon i-Add-File"
  }), _vm._v(" "), _c("span", {
    staticClass: "item-name"
  }, [_vm._v(_vm._s(_vm.$t("AddPurchase")))])])], 1) : _vm._e(), _vm._v(" "), _vm.currentUserPermissions && _vm.currentUserPermissions.includes("Purchases_view") ? _c("li", {
    staticClass: "nav-item"
  }, [_c("router-link", {
    attrs: {
      tag: "a",
      to: "/app/purchases/list"
    }
  }, [_c("i", {
    staticClass: "nav-icon i-Files"
  }), _vm._v(" "), _c("span", {
    staticClass: "item-name"
  }, [_vm._v(_vm._s(_vm.$t("ListPurchases")))])])], 1) : _vm._e(), _vm._v(" "), _vm.currentUserPermissions && _vm.currentUserPermissions.includes("Purchases_add") ? _c("li", {
    staticClass: "nav-item"
  }, [_c("router-link", {
    attrs: {
      tag: "a",
      to: "/app/purchases/import_purchases"
    }
  }, [_c("i", {
    staticClass: "nav-icon i-Add-File"
  }), _vm._v(" "), _c("span", {
    staticClass: "item-name"
  }, [_vm._v(_vm._s(_vm.$t("Import_Purchases")))])])], 1) : _vm._e()]), _vm._v(" "), _c("ul", {
    staticClass: "childNav d-none",
    "class": {
      "d-block": _vm.selectedParentMenu == "service"
    },
    attrs: {
      "data-parent": "service"
    }
  }, [_c("li", {
    staticClass: "nav-item"
  }, [_c("router-link", {
    attrs: {
      tag: "a",
      to: "/app/service/jobs"
    }
  }, [_c("i", {
    staticClass: "nav-icon i-Files"
  }), _vm._v(" "), _c("span", {
    staticClass: "item-name"
  }, [_vm._v(_vm._s(_vm.$t("Service_Jobs")))])])], 1), _vm._v(" "), _c("li", {
    staticClass: "nav-item"
  }, [_c("router-link", {
    attrs: {
      tag: "a",
      to: "/app/service/technicians"
    }
  }, [_c("i", {
    staticClass: "nav-icon i-Files"
  }), _vm._v(" "), _c("span", {
    staticClass: "item-name"
  }, [_vm._v(_vm._s(_vm.$t("Service_Technicians")))])])], 1), _vm._v(" "), _c("li", {
    staticClass: "nav-item"
  }, [_c("router-link", {
    attrs: {
      tag: "a",
      to: "/app/service/checklist-categories"
    }
  }, [_c("i", {
    staticClass: "nav-icon i-Folder"
  }), _vm._v(" "), _c("span", {
    staticClass: "item-name"
  }, [_vm._v(_vm._s(_vm.$t("Checklist_Categories")))])])], 1), _vm._v(" "), _c("li", {
    staticClass: "nav-item"
  }, [_c("router-link", {
    attrs: {
      tag: "a",
      to: "/app/service/checklists"
    }
  }, [_c("i", {
    staticClass: "nav-icon i-Check"
  }), _vm._v(" "), _c("span", {
    staticClass: "item-name"
  }, [_vm._v(_vm._s(_vm.$t("Checklist_Items")))])])], 1), _vm._v(" "), _c("li", {
    staticClass: "nav-item"
  }, [_c("router-link", {
    attrs: {
      tag: "a",
      to: "/app/service/history"
    }
  }, [_c("i", {
    staticClass: "nav-icon i-Calendar-4"
  }), _vm._v(" "), _c("span", {
    staticClass: "item-name"
  }, [_vm._v(_vm._s(_vm.$t("Maintenance_History")))])])], 1)]), _vm._v(" "), _c("ul", {
    staticClass: "childNav d-none",
    "class": {
      "d-block": _vm.selectedParentMenu == "assets"
    },
    attrs: {
      "data-parent": "assets"
    }
  }, [_vm.currentUserPermissions && _vm.currentUserPermissions.includes("assets") ? _c("li", {
    staticClass: "nav-item"
  }, [_c("router-link", {
    attrs: {
      tag: "a",
      to: "/app/assets/store"
    }
  }, [_c("i", {
    staticClass: "nav-icon i-Add-File"
  }), _vm._v(" "), _c("span", {
    staticClass: "item-name"
  }, [_vm._v(_vm._s(_vm.$t("Add_Asset")))])])], 1) : _vm._e(), _vm._v(" "), _vm.currentUserPermissions && _vm.currentUserPermissions.includes("assets") ? _c("li", {
    staticClass: "nav-item"
  }, [_c("router-link", {
    attrs: {
      tag: "a",
      to: "/app/assets/list"
    }
  }, [_c("i", {
    staticClass: "nav-icon i-Files"
  }), _vm._v(" "), _c("span", {
    staticClass: "item-name"
  }, [_vm._v(_vm._s(_vm.$t("Assets_List")))])])], 1) : _vm._e(), _vm._v(" "), _vm.currentUserPermissions && _vm.currentUserPermissions.includes("assets") ? _c("li", {
    staticClass: "nav-item"
  }, [_c("router-link", {
    attrs: {
      tag: "a",
      to: "/app/assets/category"
    }
  }, [_c("i", {
    staticClass: "nav-icon i-Folder"
  }), _vm._v(" "), _c("span", {
    staticClass: "item-name"
  }, [_vm._v(_vm._s(_vm.$t("Asset_Category")))])])], 1) : _vm._e()]), _vm._v(" "), _c("ul", {
    staticClass: "childNav d-none",
    "class": {
      "d-block": _vm.selectedParentMenu == "sales"
    },
    attrs: {
      "data-parent": "sales"
    }
  }, [_vm.currentUserPermissions && _vm.currentUserPermissions.includes("Sales_add") ? _c("li", {
    staticClass: "nav-item"
  }, [_c("router-link", {
    attrs: {
      tag: "a",
      to: "/app/sales/store"
    }
  }, [_c("i", {
    staticClass: "nav-icon i-Add-File"
  }), _vm._v(" "), _c("span", {
    staticClass: "item-name"
  }, [_vm._v(_vm._s(_vm.$t("AddSale")))])])], 1) : _vm._e(), _vm._v(" "), _vm.currentUserPermissions && _vm.currentUserPermissions.includes("Sales_add") ? _c("li", {
    staticClass: "nav-item"
  }, [_c("router-link", {
    attrs: {
      tag: "a",
      to: "/app/sales/import_sales"
    }
  }, [_c("i", {
    staticClass: "nav-icon i-Add-File"
  }), _vm._v(" "), _c("span", {
    staticClass: "item-name"
  }, [_vm._v(_vm._s(_vm.$t("Import_Sales")))])])], 1) : _vm._e(), _vm._v(" "), _vm.currentUserPermissions && _vm.currentUserPermissions.includes("Sales_view") ? _c("li", {
    staticClass: "nav-item"
  }, [_c("router-link", {
    attrs: {
      tag: "a",
      to: "/app/sales/list"
    }
  }, [_c("i", {
    staticClass: "nav-icon i-Files"
  }), _vm._v(" "), _c("span", {
    staticClass: "item-name"
  }, [_vm._v(_vm._s(_vm.$t("ListSales")))])])], 1) : _vm._e(), _vm._v(" "), _vm.currentUserPermissions && _vm.currentUserPermissions.includes("Pos_view") ? _c("li", {
    staticClass: "nav-item"
  }, [_c("router-link", {
    attrs: {
      tag: "a",
      to: "/app/pos"
    }
  }, [_c("i", {
    staticClass: "nav-icon i-Files"
  }), _vm._v(" "), _c("span", {
    staticClass: "item-name"
  }, [_vm._v("POS")])])], 1) : _vm._e(), _vm._v(" "), _vm.currentUserPermissions && _vm.currentUserPermissions.includes("customer_display_screen_setup") ? _c("li", {
    staticClass: "nav-item"
  }, [_c("router-link", {
    attrs: {
      tag: "a",
      to: "/app/customer-display/setup"
    }
  }, [_c("i", {
    staticClass: "nav-icon i-Bar-Code"
  }), _vm._v(" "), _c("span", {
    staticClass: "item-name"
  }, [_vm._v(_vm._s(_vm.$t("Customer_Screen")))])])], 1) : _vm._e(), _vm._v(" "), _vm.currentUserPermissions && _vm.currentUserPermissions.includes("shipment") ? _c("li", {
    staticClass: "nav-item"
  }, [_c("router-link", {
    attrs: {
      tag: "a",
      to: "/app/sales/shipment"
    }
  }, [_c("i", {
    staticClass: "nav-icon i-Files"
  }), _vm._v(" "), _c("span", {
    staticClass: "item-name"
  }, [_vm._v(_vm._s(_vm.$t("Shipments")))])])], 1) : _vm._e()]), _vm._v(" "), _c("ul", {
    staticClass: "childNav d-none",
    "class": {
      "d-block": _vm.selectedParentMenu == "bookings"
    },
    attrs: {
      "data-parent": "bookings"
    }
  }, [_vm.currentUserPermissions && _vm.currentUserPermissions.includes("bookings") ? _c("li", {
    staticClass: "nav-item"
  }, [_c("router-link", {
    attrs: {
      tag: "a",
      to: "/app/bookings/list"
    }
  }, [_c("i", {
    staticClass: "nav-icon i-Files"
  }), _vm._v(" "), _c("span", {
    staticClass: "item-name"
  }, [_vm._v(_vm._s(_vm.$t("Booking_List") || "Booking List"))])])], 1) : _vm._e(), _vm._v(" "), _vm.currentUserPermissions && _vm.currentUserPermissions.includes("bookings") ? _c("li", {
    staticClass: "nav-item"
  }, [_c("router-link", {
    attrs: {
      tag: "a",
      to: "/app/bookings/calendar"
    }
  }, [_c("i", {
    staticClass: "nav-icon i-Calendar-4"
  }), _vm._v(" "), _c("span", {
    staticClass: "item-name"
  }, [_vm._v(_vm._s(_vm.$t("Calendar_View")))])])], 1) : _vm._e()]), _vm._v(" "), _c("ul", {
    staticClass: "childNav d-none",
    "class": {
      "d-block": _vm.selectedParentMenu == "quotations"
    },
    attrs: {
      "data-parent": "quotations"
    }
  }, [_vm.currentUserPermissions && _vm.currentUserPermissions.includes("Quotations_add") ? _c("li", {
    staticClass: "nav-item"
  }, [_c("router-link", {
    attrs: {
      tag: "a",
      to: "/app/quotations/store"
    }
  }, [_c("i", {
    staticClass: "nav-icon i-Add-File"
  }), _vm._v(" "), _c("span", {
    staticClass: "item-name"
  }, [_vm._v(_vm._s(_vm.$t("AddQuote")))])])], 1) : _vm._e(), _vm._v(" "), _vm.currentUserPermissions && _vm.currentUserPermissions.includes("Quotations_view") ? _c("li", {
    staticClass: "nav-item"
  }, [_c("router-link", {
    attrs: {
      tag: "a",
      to: "/app/quotations/list"
    }
  }, [_c("i", {
    staticClass: "nav-icon i-Files"
  }), _vm._v(" "), _c("span", {
    staticClass: "item-name"
  }, [_vm._v(_vm._s(_vm.$t("ListQuotations")))])])], 1) : _vm._e()]), _vm._v(" "), _c("ul", {
    staticClass: "childNav d-none",
    "class": {
      "d-block": _vm.selectedParentMenu == "hrm"
    },
    attrs: {
      "data-parent": "hrm"
    }
  }, [_vm.currentUserPermissions && _vm.currentUserPermissions.includes("company") ? _c("li", {
    staticClass: "nav-item"
  }, [_c("router-link", {
    attrs: {
      tag: "a",
      to: "/app/hrm/company"
    }
  }, [_c("i", {
    staticClass: "nav-icon i-Management"
  }), _vm._v(" "), _c("span", {
    staticClass: "item-name"
  }, [_vm._v(_vm._s(_vm.$t("Company")))])])], 1) : _vm._e(), _vm._v(" "), _vm.currentUserPermissions && _vm.currentUserPermissions.includes("department") ? _c("li", {
    staticClass: "nav-item"
  }, [_c("router-link", {
    attrs: {
      tag: "a",
      to: "/app/hrm/departments"
    }
  }, [_c("i", {
    staticClass: "nav-icon i-Shop"
  }), _vm._v(" "), _c("span", {
    staticClass: "item-name"
  }, [_vm._v(_vm._s(_vm.$t("Departments")))])])], 1) : _vm._e(), _vm._v(" "), _vm.currentUserPermissions && _vm.currentUserPermissions.includes("designation") ? _c("li", {
    staticClass: "nav-item"
  }, [_c("router-link", {
    attrs: {
      tag: "a",
      to: "/app/hrm/designations"
    }
  }, [_c("i", {
    staticClass: "nav-icon i-Shutter"
  }), _vm._v(" "), _c("span", {
    staticClass: "item-name"
  }, [_vm._v(_vm._s(_vm.$t("Designations")))])])], 1) : _vm._e(), _vm._v(" "), _vm.currentUserPermissions && _vm.currentUserPermissions.includes("office_shift") ? _c("li", {
    staticClass: "nav-item"
  }, [_c("router-link", {
    attrs: {
      tag: "a",
      to: "/app/hrm/office_Shift"
    }
  }, [_c("i", {
    staticClass: "nav-icon i-Clock"
  }), _vm._v(" "), _c("span", {
    staticClass: "item-name"
  }, [_vm._v(_vm._s(_vm.$t("Office_Shift")))])])], 1) : _vm._e(), _vm._v(" "), _vm.currentUserPermissions && _vm.currentUserPermissions.includes("view_employee") ? _c("li", {
    staticClass: "nav-item"
  }, [_c("router-link", {
    attrs: {
      tag: "a",
      to: "/app/hrm/employees"
    }
  }, [_c("i", {
    staticClass: "nav-icon i-Engineering"
  }), _vm._v(" "), _c("span", {
    staticClass: "item-name"
  }, [_vm._v(_vm._s(_vm.$t("Employees")))])])], 1) : _vm._e(), _vm._v(" "), _vm.currentUserPermissions && _vm.currentUserPermissions.includes("attendance") ? _c("li", {
    staticClass: "nav-item"
  }, [_c("router-link", {
    attrs: {
      tag: "a",
      to: "/app/hrm/attendance"
    }
  }, [_c("i", {
    staticClass: "nav-icon i-Clock"
  }), _vm._v(" "), _c("span", {
    staticClass: "item-name"
  }, [_vm._v(_vm._s(_vm.$t("Attendance")))])])], 1) : _vm._e(), _vm._v(" "), _vm.currentUserPermissions && _vm.currentUserPermissions.includes("leave") ? _c("li", {
    staticClass: "nav-item dropdown-sidemenu",
    on: {
      click: function click($event) {
        $event.preventDefault();
        return _vm.toggleSidebarDropdwon($event);
      }
    }
  }, [_c("a", {
    attrs: {
      href: "#"
    }
  }, [_c("i", {
    staticClass: "nav-icon i-Calendar"
  }), _vm._v(" "), _c("span", {
    staticClass: "item-name"
  }, [_vm._v(_vm._s(_vm.$t("Leave_request")))]), _vm._v(" "), _c("i", {
    staticClass: "dd-arrow i-Arrow-Down"
  })]), _vm._v(" "), _c("ul", {
    staticClass: "submenu"
  }, [_c("li", [_c("router-link", {
    attrs: {
      tag: "a",
      to: "/app/hrm/leaves/list"
    }
  }, [_c("i", {
    staticClass: "nav-icon i-ID-Card"
  }), _vm._v(" "), _c("span", {
    staticClass: "item-name"
  }, [_vm._v(_vm._s(_vm.$t("Leave_request")))])])], 1), _vm._v(" "), _c("li", [_c("router-link", {
    attrs: {
      tag: "a",
      to: "/app/hrm/leaves/type"
    }
  }, [_c("i", {
    staticClass: "nav-icon i-ID-Card"
  }), _vm._v(" "), _c("span", {
    staticClass: "item-name"
  }, [_vm._v(_vm._s(_vm.$t("Leave_type")))])])], 1)])]) : _vm._e(), _vm._v(" "), _vm.currentUserPermissions && _vm.currentUserPermissions.includes("holiday") ? _c("li", {
    staticClass: "nav-item"
  }, [_c("router-link", {
    attrs: {
      tag: "a",
      to: "/app/hrm/holidays"
    }
  }, [_c("i", {
    staticClass: "nav-icon i-Christmas-Bell"
  }), _vm._v(" "), _c("span", {
    staticClass: "item-name"
  }, [_vm._v(_vm._s(_vm.$t("Holidays")))])])], 1) : _vm._e(), _vm._v(" "), _vm.currentUserPermissions && _vm.currentUserPermissions.includes("payroll") ? _c("li", {
    staticClass: "nav-item"
  }, [_c("router-link", {
    attrs: {
      tag: "a",
      to: "/app/hrm/payrolls"
    }
  }, [_c("i", {
    staticClass: "nav-icon i-Money-2"
  }), _vm._v(" "), _c("span", {
    staticClass: "item-name"
  }, [_vm._v(_vm._s(_vm.$t("Payroll")))])])], 1) : _vm._e()]), _vm._v(" "), _c("ul", {
    staticClass: "childNav d-none",
    "class": {
      "d-block": _vm.selectedParentMenu == "People"
    },
    attrs: {
      "data-parent": "People"
    }
  }, [_vm.currentUserPermissions && _vm.currentUserPermissions.includes("Customers_view") ? _c("li", {
    staticClass: "nav-item"
  }, [_c("router-link", {
    attrs: {
      tag: "a",
      to: "/app/People/Customers"
    }
  }, [_c("i", {
    staticClass: "nav-icon i-Administrator"
  }), _vm._v(" "), _c("span", {
    staticClass: "item-name"
  }, [_vm._v(_vm._s(_vm.$t("Customers")))])])], 1) : _vm._e(), _vm._v(" "), _vm.currentUserPermissions && _vm.currentUserPermissions.includes("Customers_add") ? _c("li", {
    staticClass: "nav-item"
  }, [_c("router-link", {
    attrs: {
      tag: "a",
      to: "/app/People/Customers/create"
    }
  }, [_c("i", {
    staticClass: "nav-icon i-Add"
  }), _vm._v(" "), _c("span", {
    staticClass: "item-name"
  }, [_vm._v(_vm._s(_vm.$t("Add")) + " " + _vm._s(_vm.$t("Customer")))])])], 1) : _vm._e(), _vm._v(" "), _vm.currentUserPermissions && _vm.currentUserPermissions.includes("customers_import") ? _c("li", {
    staticClass: "nav-item"
  }, [_c("router-link", {
    attrs: {
      tag: "a",
      to: "/app/People/Customers_import"
    }
  }, [_c("i", {
    staticClass: "nav-icon i-Download"
  }), _vm._v(" "), _c("span", {
    staticClass: "item-name"
  }, [_vm._v(_vm._s(_vm.$t("Import_Customers")))])])], 1) : _vm._e(), _vm._v(" "), _vm.currentUserPermissions && _vm.currentUserPermissions.includes("Customers_view") ? _c("li", {
    staticClass: "nav-item"
  }, [_c("router-link", {
    attrs: {
      tag: "a",
      to: "/app/People/Customers_without_ecommerce"
    }
  }, [_c("i", {
    staticClass: "nav-icon i-Administrator"
  }), _vm._v(" "), _c("span", {
    staticClass: "item-name"
  }, [_vm._v(_vm._s(_vm.$t("Customers_without_Login")))])])], 1) : _vm._e(), _vm._v(" "), _vm.currentUserPermissions && _vm.currentUserPermissions.includes("Customers_view") ? _c("li", {
    staticClass: "nav-item"
  }, [_c("router-link", {
    attrs: {
      tag: "a",
      to: "/app/People/Customers_ecommerce"
    }
  }, [_c("i", {
    staticClass: "nav-icon i-Administrator"
  }), _vm._v(" "), _c("span", {
    staticClass: "item-name"
  }, [_vm._v(_vm._s(_vm.$t("Customers_with_Login")))])])], 1) : _vm._e(), _vm._v(" "), _vm.currentUserPermissions && _vm.currentUserPermissions.includes("Suppliers_view") ? _c("li", {
    staticClass: "nav-item"
  }, [_c("router-link", {
    attrs: {
      tag: "a",
      to: "/app/People/Suppliers"
    }
  }, [_c("i", {
    staticClass: "nav-icon i-Administrator"
  }), _vm._v(" "), _c("span", {
    staticClass: "item-name"
  }, [_vm._v(_vm._s(_vm.$t("Suppliers")))])])], 1) : _vm._e(), _vm._v(" "), _vm.currentUserPermissions && _vm.currentUserPermissions.includes("Suppliers_add") ? _c("li", {
    staticClass: "nav-item"
  }, [_c("router-link", {
    attrs: {
      tag: "a",
      to: "/app/People/Suppliers/create"
    }
  }, [_c("i", {
    staticClass: "nav-icon i-Add"
  }), _vm._v(" "), _c("span", {
    staticClass: "item-name"
  }, [_vm._v(_vm._s(_vm.$t("Add")) + " " + _vm._s(_vm.$t("Supplier")))])])], 1) : _vm._e(), _vm._v(" "), _vm.currentUserPermissions && _vm.currentUserPermissions.includes("Suppliers_import") ? _c("li", {
    staticClass: "nav-item"
  }, [_c("router-link", {
    attrs: {
      tag: "a",
      to: "/app/People/Suppliers_import"
    }
  }, [_c("i", {
    staticClass: "nav-icon i-Download"
  }), _vm._v(" "), _c("span", {
    staticClass: "item-name"
  }, [_vm._v(_vm._s(_vm.$t("Import_Suppliers")))])])], 1) : _vm._e()]), _vm._v(" "), _c("ul", {
    staticClass: "childNav d-none",
    "class": {
      "d-block": _vm.selectedParentMenu == "User_Management"
    },
    attrs: {
      "data-parent": "User_Management"
    }
  }, [_vm.currentUserPermissions && _vm.currentUserPermissions.includes("users_view") ? _c("li", {
    staticClass: "nav-item"
  }, [_c("router-link", {
    attrs: {
      tag: "a",
      to: "/app/User_Management/Users"
    }
  }, [_c("i", {
    staticClass: "nav-icon i-Administrator"
  }), _vm._v(" "), _c("span", {
    staticClass: "item-name"
  }, [_vm._v(_vm._s(_vm.$t("Users")))])])], 1) : _vm._e(), _vm._v(" "), _vm.currentUserPermissions && _vm.currentUserPermissions.includes("permissions_view") ? _c("li", {
    staticClass: "nav-item"
  }, [_c("router-link", {
    attrs: {
      tag: "a",
      to: "/app/User_Management/permissions"
    }
  }, [_c("i", {
    staticClass: "nav-icon i-Key"
  }), _vm._v(" "), _c("span", {
    staticClass: "item-name"
  }, [_vm._v(_vm._s(_vm.$t("GroupPermissions")))])])], 1) : _vm._e()]), _vm._v(" "), _c("ul", {
    staticClass: "childNav d-none",
    "class": {
      "d-block": _vm.selectedParentMenu == "settings"
    },
    attrs: {
      "data-parent": "settings"
    }
  }, [_vm.currentUserPermissions && _vm.currentUserPermissions.includes("setting_system") ? _c("li", {
    staticClass: "nav-item"
  }, [_c("router-link", {
    attrs: {
      tag: "a",
      to: "/app/settings/System_settings"
    }
  }, [_c("i", {
    staticClass: "nav-icon i-Gear"
  }), _vm._v(" "), _c("span", {
    staticClass: "item-name"
  }, [_vm._v(_vm._s(_vm.$t("SystemSettings")))])])], 1) : _vm._e(), _vm._v(" "), _vm.currentUserPermissions && _vm.currentUserPermissions.includes("quickbooks_settings") ? _c("li", {
    staticClass: "nav-item"
  }, [_c("router-link", {
    attrs: {
      tag: "a",
      to: "/app/settings/quickbooks_sync"
    }
  }, [_c("i", {
    staticClass: "nav-icon i-Money-2"
  }), _vm._v(" "), _c("span", {
    staticClass: "item-name"
  }, [_vm._v(_vm._s(_vm.$t("Quickbooks_Sync")))])])], 1) : _vm._e(), _vm._v(" "), _vm.currentUserPermissions && _vm.currentUserPermissions.includes("appearance_settings") ? _c("li", {
    staticClass: "nav-item"
  }, [_c("router-link", {
    attrs: {
      tag: "a",
      to: "/app/settings/appearance_settings"
    }
  }, [_c("i", {
    staticClass: "nav-icon i-Data-Settings"
  }), _vm._v(" "), _c("span", {
    staticClass: "item-name"
  }, [_vm._v(_vm._s(_vm.$t("Dynamic_Appearance")) + " ")])])], 1) : _vm._e(), _vm._v(" "), _vm.currentUserPermissions && _vm.currentUserPermissions.includes("translations_settings") ? _c("li", {
    staticClass: "nav-item"
  }, [_c("router-link", {
    attrs: {
      tag: "a",
      to: "/app/settings/translations_settings"
    }
  }, [_c("i", {
    staticClass: "nav-icon i-Data-Settings"
  }), _vm._v(" "), _c("span", {
    staticClass: "item-name"
  }, [_vm._v(_vm._s(_vm.$t("Languages")) + " ")])])], 1) : _vm._e(), _vm._v(" "), _vm.currentUserPermissions && _vm.currentUserPermissions.includes("payment_methods") ? _c("li", {
    staticClass: "nav-item"
  }, [_c("router-link", {
    attrs: {
      tag: "a",
      to: "/app/settings/payment_methods"
    }
  }, [_c("i", {
    staticClass: "nav-icon i-Money-2"
  }), _vm._v(" "), _c("span", {
    staticClass: "item-name"
  }, [_vm._v(_vm._s(_vm.$t("Payment_Methods")))])])], 1) : _vm._e(), _vm._v(" "), _vm.currentUserPermissions && _vm.currentUserPermissions.includes("sms_settings") ? _c("li", {
    staticClass: "nav-item"
  }, [_c("router-link", {
    attrs: {
      tag: "a",
      to: "/app/settings/sms_settings"
    }
  }, [_c("i", {
    staticClass: "nav-icon i-Speach-Bubble"
  }), _vm._v(" "), _c("span", {
    staticClass: "item-name"
  }, [_vm._v(_vm._s(_vm.$t("sms_settings")))])])], 1) : _vm._e(), _vm._v(" "), _vm.currentUserPermissions && _vm.currentUserPermissions.includes("notification_template") ? _c("li", {
    staticClass: "nav-item"
  }, [_c("router-link", {
    attrs: {
      tag: "a",
      to: "/app/settings/sms_templates"
    }
  }, [_c("i", {
    staticClass: "nav-icon i-Speach-Bubble"
  }), _vm._v(" "), _c("span", {
    staticClass: "item-name"
  }, [_vm._v(_vm._s(_vm.$t("sms_templates")))])])], 1) : _vm._e(), _vm._v(" "), _vm.currentUserPermissions && _vm.currentUserPermissions.includes("mail_settings") ? _c("li", {
    staticClass: "nav-item"
  }, [_c("router-link", {
    attrs: {
      tag: "a",
      to: "/app/settings/mail_settings"
    }
  }, [_c("i", {
    staticClass: "nav-icon i-Email"
  }), _vm._v(" "), _c("span", {
    staticClass: "item-name"
  }, [_vm._v(_vm._s(_vm.$t("mail_settings")))])])], 1) : _vm._e(), _vm._v(" "), _vm.currentUserPermissions && _vm.currentUserPermissions.includes("notification_template") ? _c("li", {
    staticClass: "nav-item"
  }, [_c("router-link", {
    attrs: {
      tag: "a",
      to: "/app/settings/email_templates"
    }
  }, [_c("i", {
    staticClass: "nav-icon i-Email"
  }), _vm._v(" "), _c("span", {
    staticClass: "item-name"
  }, [_vm._v(_vm._s(_vm.$t("email_templates")))])])], 1) : _vm._e(), _vm._v(" "), _vm.currentUserPermissions && _vm.currentUserPermissions.includes("pos_settings") ? _c("li", {
    staticClass: "nav-item"
  }, [_c("router-link", {
    attrs: {
      tag: "a",
      to: "/app/settings/pos_settings"
    }
  }, [_c("i", {
    staticClass: "nav-icon i-Data-Settings"
  }), _vm._v(" "), _c("span", {
    staticClass: "item-name"
  }, [_vm._v(_vm._s(_vm.$t("Pos_Settings")))])])], 1) : _vm._e(), _vm._v(" "), _vm.currentUserPermissions && _vm.currentUserPermissions.includes("pos_settings") ? _c("li", {
    staticClass: "nav-item"
  }, [_c("router-link", {
    attrs: {
      tag: "a",
      to: "/app/settings/pos_receipt"
    }
  }, [_c("i", {
    staticClass: "nav-icon i-Cash-Register"
  }), _vm._v(" "), _c("span", {
    staticClass: "item-name"
  }, [_vm._v(_vm._s(_vm.$t("POS_Receipt")))])])], 1) : _vm._e(), _vm._v(" "), _vm.currentUserPermissions && _vm.currentUserPermissions.includes("module_settings") ? _c("li", {
    staticClass: "nav-item"
  }, [_c("router-link", {
    attrs: {
      tag: "a",
      to: "/app/settings/module_settings"
    }
  }, [_c("i", {
    staticClass: "nav-icon i-Data-Settings"
  }), _vm._v(" "), _c("span", {
    staticClass: "item-name"
  }, [_vm._v(_vm._s(_vm.$t("module_settings")))])])], 1) : _vm._e(), _vm._v(" "), _vm.currentUserPermissions && _vm.currentUserPermissions.includes("update_settings") ? _c("li", {
    staticClass: "nav-item"
  }, [_c("router-link", {
    attrs: {
      tag: "a",
      to: "/app/settings/update_settings"
    }
  }, [_c("i", {
    staticClass: "nav-icon i-Upgrade"
  }), _vm._v(" "), _c("span", {
    staticClass: "item-name"
  }, [_vm._v(_vm._s(_vm.$t("update_settings")))])])], 1) : _vm._e(), _vm._v(" "), _vm.currentUserPermissions && _vm.currentUserPermissions.includes("payment_gateway") ? _c("li", {
    staticClass: "nav-item"
  }, [_c("router-link", {
    attrs: {
      tag: "a",
      to: "/app/settings/payment_gateway"
    }
  }, [_c("i", {
    staticClass: "nav-icon i-Money-2"
  }), _vm._v(" "), _c("span", {
    staticClass: "item-name"
  }, [_vm._v(_vm._s(_vm.$t("Payment_Gateway")))])])], 1) : _vm._e(), _vm._v(" "), _vm.currentUserPermissions && _vm.currentUserPermissions.includes("warehouse") ? _c("li", {
    staticClass: "nav-item"
  }, [_c("router-link", {
    attrs: {
      tag: "a",
      to: "/app/settings/Warehouses"
    }
  }, [_c("i", {
    staticClass: "nav-icon i-Clothing-Store"
  }), _vm._v(" "), _c("span", {
    staticClass: "item-name"
  }, [_vm._v(_vm._s(_vm.$t("Warehouses")))])])], 1) : _vm._e(), _vm._v(" "), _vm.currentUserPermissions && _vm.currentUserPermissions.includes("currency") ? _c("li", {
    staticClass: "nav-item"
  }, [_c("router-link", {
    attrs: {
      tag: "a",
      to: "/app/settings/Currencies"
    }
  }, [_c("i", {
    staticClass: "nav-icon i-Dollar-Sign"
  }), _vm._v(" "), _c("span", {
    staticClass: "item-name"
  }, [_vm._v(_vm._s(_vm.$t("Currencies")))])])], 1) : _vm._e(), _vm._v(" "), _vm.currentUserPermissions && _vm.currentUserPermissions.includes("backup") ? _c("li", {
    staticClass: "nav-item"
  }, [_c("router-link", {
    attrs: {
      tag: "a",
      to: "/app/settings/Backup"
    }
  }, [_c("i", {
    staticClass: "nav-icon i-Data-Backup"
  }), _vm._v(" "), _c("span", {
    staticClass: "item-name"
  }, [_vm._v(_vm._s(_vm.$t("Backup")))])])], 1) : _vm._e(), _vm._v(" "), _vm.currentUserPermissions && _vm.currentUserPermissions.includes("login_device_management") ? _c("li", {
    staticClass: "nav-item"
  }, [_c("router-link", {
    attrs: {
      tag: "a",
      to: "/app/settings/login_devices"
    }
  }, [_c("i", {
    staticClass: "nav-icon i-Lock-2"
  }), _vm._v(" "), _c("span", {
    staticClass: "item-name"
  }, [_vm._v(_vm._s(_vm.$t("Login_Device_Management")))])])], 1) : _vm._e()]), _vm._v(" "), _c("ul", {
    staticClass: "childNav d-none",
    "class": {
      "d-block": _vm.selectedParentMenu == "reports"
    },
    attrs: {
      "data-parent": "reports"
    }
  }, [_vm.currentUserPermissions && (_vm.currentUserPermissions.includes("Reports_payments_Purchases") || _vm.currentUserPermissions.includes("Reports_payments_Sales") || _vm.currentUserPermissions.includes("Reports_payments_Sale_Returns") || _vm.currentUserPermissions.includes("Reports_payments_purchase_Return")) ? _c("li", {
    staticClass: "nav-item dropdown-sidemenu",
    on: {
      click: function click($event) {
        $event.preventDefault();
        return _vm.toggleSidebarDropdwon($event);
      }
    }
  }, [_c("a", {
    attrs: {
      href: "#"
    }
  }, [_c("i", {
    staticClass: "nav-icon i-Credit-Card"
  }), _vm._v(" "), _c("span", {
    staticClass: "item-name"
  }, [_vm._v(_vm._s(_vm.$t("Payments")))]), _vm._v(" "), _c("i", {
    staticClass: "dd-arrow i-Arrow-Down"
  })]), _vm._v(" "), _c("ul", {
    staticClass: "submenu"
  }, [_vm.currentUserPermissions && _vm.currentUserPermissions.includes("Reports_payments_Purchases") ? _c("li", [_c("router-link", {
    attrs: {
      tag: "a",
      to: "/app/reports/payments_purchase"
    }
  }, [_c("i", {
    staticClass: "nav-icon i-ID-Card"
  }), _vm._v(" "), _c("span", {
    staticClass: "item-name"
  }, [_vm._v(_vm._s(_vm.$t("Purchases")))])])], 1) : _vm._e(), _vm._v(" "), _vm.currentUserPermissions && _vm.currentUserPermissions.includes("Reports_payments_Sales") ? _c("li", [_c("router-link", {
    attrs: {
      tag: "a",
      to: "/app/reports/payments_sale"
    }
  }, [_c("i", {
    staticClass: "nav-icon i-ID-Card"
  }), _vm._v(" "), _c("span", {
    staticClass: "item-name"
  }, [_vm._v(_vm._s(_vm.$t("Sales")))])])], 1) : _vm._e(), _vm._v(" "), _vm.currentUserPermissions && _vm.currentUserPermissions.includes("Reports_payments_Sale_Returns") ? _c("li", [_c("router-link", {
    attrs: {
      tag: "a",
      to: "/app/reports/payments_sales_returns"
    }
  }, [_c("i", {
    staticClass: "nav-icon i-ID-Card"
  }), _vm._v(" "), _c("span", {
    staticClass: "item-name"
  }, [_vm._v(_vm._s(_vm.$t("SalesReturn")))])])], 1) : _vm._e(), _vm._v(" "), _vm.currentUserPermissions && _vm.currentUserPermissions.includes("Reports_payments_purchase_Return") ? _c("li", [_c("router-link", {
    attrs: {
      tag: "a",
      to: "/app/reports/payments_purchases_returns"
    }
  }, [_c("i", {
    staticClass: "nav-icon i-ID-Card"
  }), _vm._v(" "), _c("span", {
    staticClass: "item-name"
  }, [_vm._v(_vm._s(_vm.$t("PurchasesReturn")))])])], 1) : _vm._e()])]) : _vm._e(), _vm._v(" "), _vm.currentUserPermissions && _vm.currentUserPermissions.includes("report_transactions") ? _c("li", {
    staticClass: "nav-item"
  }, [_c("router-link", {
    attrs: {
      tag: "a",
      to: "/app/reports/report_transactions"
    }
  }, [_c("i", {
    staticClass: "nav-icon i-Dollar"
  }), _vm._v(" "), _c("span", {
    staticClass: "item-name"
  }, [_vm._v(_vm._s(_vm.$t("Report_Transactions")))])])], 1) : _vm._e(), _vm._v(" "), _vm.currentUserPermissions && _vm.currentUserPermissions.includes("cash_flow_report") ? _c("li", {
    staticClass: "nav-item"
  }, [_c("router-link", {
    attrs: {
      tag: "a",
      to: "/app/reports/cash_flow_report"
    }
  }, [_c("i", {
    staticClass: "nav-icon i-Line-Chart"
  }), _vm._v(" "), _c("span", {
    staticClass: "item-name"
  }, [_vm._v(_vm._s(_vm.$t("Cash_Flow_Report")))])])], 1) : _vm._e(), _vm._v(" "), _vm.currentUserPermissions && _vm.currentUserPermissions.includes("seller_report") ? _c("li", {
    staticClass: "nav-item"
  }, [_c("router-link", {
    attrs: {
      tag: "a",
      to: "/app/reports/seller_report"
    }
  }, [_c("i", {
    staticClass: "nav-icon i-User"
  }), _vm._v(" "), _c("span", {
    staticClass: "item-name"
  }, [_vm._v(_vm._s(_vm.$t("Seller_report")))])])], 1) : _vm._e(), _vm._v(" "), _vm.currentUserPermissions && _vm.currentUserPermissions.includes("report_attendance_summary") ? _c("li", {
    staticClass: "nav-item"
  }, [_c("router-link", {
    attrs: {
      tag: "a",
      to: {
        name: "attendance_report"
      }
    }
  }, [_c("i", {
    staticClass: "nav-icon i-Clock"
  }), _vm._v(" "), _c("span", {
    staticClass: "item-name"
  }, [_vm._v(_vm._s(_vm.$t("attendance_summary")))])])], 1) : _vm._e(), _vm._v(" "), _vm.currentUserPermissions && _vm.currentUserPermissions.includes("Reports_profit") ? _c("li", {
    staticClass: "nav-item"
  }, [_c("router-link", {
    attrs: {
      tag: "a",
      to: "/app/reports/profit_and_loss"
    }
  }, [_c("i", {
    staticClass: "nav-icon i-Money-Bag"
  }), _vm._v(" "), _c("span", {
    staticClass: "item-name"
  }, [_vm._v(_vm._s(_vm.$t("ProfitandLoss")))])])], 1) : _vm._e(), _vm._v(" "), _vm.currentUserPermissions && _vm.currentUserPermissions.includes("analytics_report") ? _c("li", {
    staticClass: "nav-item"
  }, [_c("router-link", {
    attrs: {
      tag: "a",
      to: "/app/reports/analytics_report"
    }
  }, [_c("i", {
    staticClass: "nav-icon i-Bar-Chart"
  }), _vm._v(" "), _c("span", {
    staticClass: "item-name"
  }, [_vm._v(_vm._s(_vm.$t("Analytics_Report")))])])], 1) : _vm._e(), _vm._v(" "), _vm.currentUserPermissions && _vm.currentUserPermissions.includes("Stock_Inventory_Valuation") ? _c("li", {
    staticClass: "nav-item"
  }, [_c("router-link", {
    attrs: {
      tag: "a",
      to: "/app/reports/stock_inventory_valuation"
    }
  }, [_c("i", {
    staticClass: "nav-icon i-Line-Chart"
  }), _vm._v(" "), _c("span", {
    staticClass: "item-name"
  }, [_vm._v(_vm._s(_vm.$t("Stock_Inventory_Valuation")))])])], 1) : _vm._e(), _vm._v(" "), _vm.currentUserPermissions && _vm.currentUserPermissions.includes("cash_register_report") ? _c("li", {
    staticClass: "nav-item"
  }, [_c("router-link", {
    attrs: {
      tag: "a",
      to: {
        name: "cash_register_report"
      }
    }
  }, [_c("i", {
    staticClass: "nav-icon i-Money-2"
  }), _vm._v(" "), _c("span", {
    staticClass: "item-name"
  }, [_vm._v(_vm._s(_vm.$t("Cash_Register_Report")))])])], 1) : _vm._e(), _vm._v(" "), _vm.currentUserPermissions && _vm.currentUserPermissions.includes("report_warranty") ? _c("li", {
    staticClass: "nav-item"
  }, [_c("router-link", {
    attrs: {
      tag: "a",
      to: {
        name: "warranty_guarantee_report"
      }
    }
  }, [_c("i", {
    staticClass: "nav-icon i-Shield"
  }), _vm._v(" "), _c("span", {
    staticClass: "item-name"
  }, [_vm._v(_vm._s(_vm.$t("Warranty_Guarantee_Report")))])])], 1) : _vm._e(), _vm._v(" "), _vm.currentUserPermissions && _vm.currentUserPermissions.includes("inventory_valuation") ? _c("li", {
    staticClass: "nav-item"
  }, [_c("router-link", {
    attrs: {
      tag: "a",
      to: "/app/reports/inventory_valuation_summary"
    }
  }, [_c("i", {
    staticClass: "nav-icon i-Pie-Chart"
  }), _vm._v(" "), _c("span", {
    staticClass: "item-name"
  }, [_vm._v(_vm._s(_vm.$t("Inventory_Valuation")))])])], 1) : _vm._e(), _vm._v(" "), _vm.currentUserPermissions && _vm.currentUserPermissions.includes("expenses_report") ? _c("li", {
    staticClass: "nav-item"
  }, [_c("router-link", {
    attrs: {
      tag: "a",
      to: "/app/reports/expenses_report"
    }
  }, [_c("i", {
    staticClass: "nav-icon i-Receipt-3"
  }), _vm._v(" "), _c("span", {
    staticClass: "item-name"
  }, [_vm._v(_vm._s(_vm.$t("Expense_Report")))])])], 1) : _vm._e(), _vm._v(" "), _vm.currentUserPermissions && _vm.currentUserPermissions.includes("deposits_report") ? _c("li", {
    staticClass: "nav-item"
  }, [_c("router-link", {
    attrs: {
      tag: "a",
      to: "/app/reports/deposits_report"
    }
  }, [_c("i", {
    staticClass: "nav-icon i-Safe-Box"
  }), _vm._v(" "), _c("span", {
    staticClass: "item-name"
  }, [_vm._v(_vm._s(_vm.$t("Deposits_Report")))])])], 1) : _vm._e(), _vm._v(" "), _vm.currentUserPermissions && _vm.currentUserPermissions.includes("Reports_quantity_alerts") ? _c("li", {
    staticClass: "nav-item"
  }, [_c("router-link", {
    attrs: {
      tag: "a",
      to: "/app/reports/quantity_alerts"
    }
  }, [_c("i", {
    staticClass: "nav-icon i-Alarm"
  }), _vm._v(" "), _c("span", {
    staticClass: "item-name"
  }, [_vm._v(_vm._s(_vm.$t("ProductQuantityAlerts")))])])], 1) : _vm._e(), _vm._v(" "), _vm.currentUserPermissions && _vm.currentUserPermissions.includes("Warehouse_report") ? _c("li", {
    staticClass: "nav-item"
  }, [_c("router-link", {
    attrs: {
      tag: "a",
      to: "/app/reports/warehouse_report"
    }
  }, [_c("i", {
    staticClass: "nav-icon i-Warehouse"
  }), _vm._v(" "), _c("span", {
    staticClass: "item-name"
  }, [_vm._v(_vm._s(_vm.$t("Warehouse_report")))])])], 1) : _vm._e(), _vm._v(" "), _vm.currentUserPermissions && _vm.currentUserPermissions.includes("stock_report") ? _c("li", {
    staticClass: "nav-item"
  }, [_c("router-link", {
    attrs: {
      tag: "a",
      to: "/app/reports/stock_report"
    }
  }, [_c("i", {
    staticClass: "nav-icon i-Line-Chart"
  }), _vm._v(" "), _c("span", {
    staticClass: "item-name"
  }, [_vm._v(_vm._s(_vm.$t("stock_report")))])])], 1) : _vm._e(), _vm._v(" "), _vm.currentUserPermissions && _vm.currentUserPermissions.includes("negative_stock_report") ? _c("li", {
    staticClass: "nav-item"
  }, [_c("router-link", {
    attrs: {
      tag: "a",
      to: "/app/reports/negative_stock_report"
    }
  }, [_c("i", {
    staticClass: "nav-icon i-Line-Chart"
  }), _vm._v(" "), _c("span", {
    staticClass: "item-name"
  }, [_vm._v(_vm._s(_vm.$t("Negative_Stock_Report")))])])], 1) : _vm._e(), _vm._v(" "), _vm.currentUserPermissions && _vm.currentUserPermissions.includes("product_report") ? _c("li", {
    staticClass: "nav-item"
  }, [_c("router-link", {
    attrs: {
      tag: "a",
      to: "/app/reports/product_report"
    }
  }, [_c("i", {
    staticClass: "nav-icon i-Bar-Code"
  }), _vm._v(" "), _c("span", {
    staticClass: "item-name"
  }, [_vm._v(_vm._s(_vm.$t("product_report")))])])], 1) : _vm._e(), _vm._v(" "), _vm.currentUserPermissions && _vm.currentUserPermissions.includes("zeroSalesProducts") ? _c("li", {
    staticClass: "nav-item"
  }, [_c("router-link", {
    attrs: {
      tag: "a",
      to: {
        name: "zero_sales_products_report"
      }
    }
  }, [_c("i", {
    staticClass: "nav-icon i-Remove-Bag"
  }), _vm._v(" "), _c("span", {
    staticClass: "item-name"
  }, [_vm._v(_vm._s(_vm.$t("Zero_Sales_Products_Report")))])])], 1) : _vm._e(), _vm._v(" "), _vm.currentUserPermissions && _vm.currentUserPermissions.includes("Dead_Stock_Report") ? _c("li", {
    staticClass: "nav-item"
  }, [_c("router-link", {
    attrs: {
      tag: "a",
      to: {
        name: "dead_stock_report"
      }
    }
  }, [_c("i", {
    staticClass: "nav-icon i-Remove-Bag"
  }), _vm._v(" "), _c("span", {
    staticClass: "item-name"
  }, [_vm._v(_vm._s(_vm.$t("Dead_Stock_Report")))])])], 1) : _vm._e(), _vm._v(" "), _vm.currentUserPermissions && _vm.currentUserPermissions.includes("Stock_Aging_Report") ? _c("li", {
    staticClass: "nav-item"
  }, [_c("router-link", {
    attrs: {
      tag: "a",
      to: {
        name: "stock_aging_report"
      }
    }
  }, [_c("i", {
    staticClass: "nav-icon i-Clock"
  }), _vm._v(" "), _c("span", {
    staticClass: "item-name"
  }, [_vm._v(_vm._s(_vm.$t("Stock_Aging_Report")))])])], 1) : _vm._e(), _vm._v(" "), _vm.currentUserPermissions && _vm.currentUserPermissions.includes("Stock_Transfer_Report") ? _c("li", {
    staticClass: "nav-item"
  }, [_c("router-link", {
    attrs: {
      tag: "a",
      to: {
        name: "stock_transfer_report"
      }
    }
  }, [_c("i", {
    staticClass: "nav-icon i-Back"
  }), _vm._v(" "), _c("span", {
    staticClass: "item-name"
  }, [_vm._v(_vm._s(_vm.$t("Stock_Transfer_Report")))])])], 1) : _vm._e(), _vm._v(" "), _vm.currentUserPermissions && _vm.currentUserPermissions.includes("Stock_Adjustment_Report") ? _c("li", {
    staticClass: "nav-item"
  }, [_c("router-link", {
    attrs: {
      tag: "a",
      to: {
        name: "stock_adjustment_report"
      }
    }
  }, [_c("i", {
    staticClass: "nav-icon i-Edit"
  }), _vm._v(" "), _c("span", {
    staticClass: "item-name"
  }, [_vm._v(_vm._s(_vm.$t("Stock_Adjustment_Report")))])])], 1) : _vm._e(), _vm._v(" "), _vm.currentUserPermissions && _vm.currentUserPermissions.includes("discount_summary_report") ? _c("li", {
    staticClass: "nav-item"
  }, [_c("router-link", {
    attrs: {
      tag: "a",
      to: {
        name: "discount_summary_report"
      }
    }
  }, [_c("i", {
    staticClass: "nav-icon i-Billing"
  }), _vm._v(" "), _c("span", {
    staticClass: "item-name"
  }, [_vm._v(_vm._s(_vm.$t("Discount_Summary_Report")))])])], 1) : _vm._e(), _vm._v(" "), _vm.currentUserPermissions && _vm.currentUserPermissions.includes("customer_loyalty_points_report") ? _c("li", {
    staticClass: "nav-item"
  }, [_c("router-link", {
    attrs: {
      tag: "a",
      to: {
        name: "customer_loyalty_points_report"
      }
    }
  }, [_c("i", {
    staticClass: "nav-icon i-Love"
  }), _vm._v(" "), _c("span", {
    staticClass: "item-name"
  }, [_vm._v(_vm._s(_vm.$t("Customer_Loyalty_Points_Report")))])])], 1) : _vm._e(), _vm._v(" "), _vm.currentUserPermissions && _vm.currentUserPermissions.includes("tax_summary_report") ? _c("li", {
    staticClass: "nav-item"
  }, [_c("router-link", {
    attrs: {
      tag: "a",
      to: {
        name: "tax_summary_report"
      }
    }
  }, [_c("i", {
    staticClass: "nav-icon i-Files"
  }), _vm._v(" "), _c("span", {
    staticClass: "item-name"
  }, [_vm._v(_vm._s(_vm.$t("Tax_Summary_Report")))])])], 1) : _vm._e(), _vm._v(" "), _vm.currentUserPermissions && _vm.currentUserPermissions.includes("draft_invoices_report") ? _c("li", {
    staticClass: "nav-item"
  }, [_c("router-link", {
    attrs: {
      tag: "a",
      to: {
        name: "draft_invoices_report"
      }
    }
  }, [_c("i", {
    staticClass: "nav-icon i-Receipt"
  }), _vm._v(" "), _c("span", {
    staticClass: "item-name"
  }, [_vm._v(_vm._s(_vm.$t("Draft_Invoices_Report")))])])], 1) : _vm._e(), _vm._v(" "), _vm.currentUserPermissions && _vm.currentUserPermissions.includes("return_ratio_report") ? _c("li", {
    staticClass: "nav-item"
  }, [_c("router-link", {
    attrs: {
      tag: "a",
      to: "/app/reports/return_ratio_report"
    }
  }, [_c("i", {
    staticClass: "nav-icon i-Line-Chart"
  }), _vm._v(" "), _c("span", {
    staticClass: "item-name"
  }, [_vm._v(_vm._s(_vm.$t("Return_Ratio_Report")))])])], 1) : _vm._e(), _vm._v(" "), _vm.currentUserPermissions && _vm.currentUserPermissions.includes("Reports_sales") ? _c("li", {
    staticClass: "nav-item"
  }, [_c("router-link", {
    attrs: {
      tag: "a",
      to: "/app/reports/sales_report"
    }
  }, [_c("i", {
    staticClass: "nav-icon i-Bar-Chart"
  }), _vm._v(" "), _c("span", {
    staticClass: "item-name"
  }, [_vm._v(_vm._s(_vm.$t("SalesReport")))])])], 1) : _vm._e(), _vm._v(" "), _vm.currentUserPermissions && _vm.currentUserPermissions.includes("product_sales_report") ? _c("li", {
    staticClass: "nav-item"
  }, [_c("router-link", {
    attrs: {
      tag: "a",
      to: "/app/reports/product_sales_report"
    }
  }, [_c("i", {
    staticClass: "nav-icon i-Line-Chart"
  }), _vm._v(" "), _c("span", {
    staticClass: "item-name"
  }, [_vm._v(_vm._s(_vm.$t("product_sales_report")))])])], 1) : _vm._e(), _vm._v(" "), _vm.currentUserPermissions && _vm.currentUserPermissions.includes("sales_by_seller_report") ? _c("li", {
    staticClass: "nav-item"
  }, [_c("router-link", {
    attrs: {
      tag: "a",
      to: "/app/reports/sales_by_seller_report"
    }
  }, [_c("i", {
    staticClass: "nav-icon i-User"
  }), _vm._v(" "), _c("span", {
    staticClass: "item-name"
  }, [_vm._v(_vm._s(_vm.$t("SalesBySellerReport")))])])], 1) : _vm._e(), _vm._v(" "), _vm.currentUserPermissions && _vm.currentUserPermissions.includes("report_sales_by_category") ? _c("li", {
    staticClass: "nav-item"
  }, [_c("router-link", {
    attrs: {
      tag: "a",
      to: "/app/reports/report_sales_by_category"
    }
  }, [_c("i", {
    staticClass: "nav-icon i-Tag-3"
  }), _vm._v(" "), _c("span", {
    staticClass: "item-name"
  }, [_vm._v(_vm._s(_vm.$t("Sales_by_Category")))])])], 1) : _vm._e(), _vm._v(" "), _vm.currentUserPermissions && _vm.currentUserPermissions.includes("report_sales_by_brand") ? _c("li", {
    staticClass: "nav-item"
  }, [_c("router-link", {
    attrs: {
      tag: "a",
      to: "/app/reports/report_sales_by_brand"
    }
  }, [_c("i", {
    staticClass: "nav-icon i-Shop"
  }), _vm._v(" "), _c("span", {
    staticClass: "item-name"
  }, [_vm._v(_vm._s(_vm.$t("Sales_by_Brand")))])])], 1) : _vm._e(), _vm._v(" "), _vm.currentUserPermissions && _vm.currentUserPermissions.includes("Reports_purchase") ? _c("li", {
    staticClass: "nav-item"
  }, [_c("router-link", {
    attrs: {
      tag: "a",
      to: "/app/reports/purchase_report"
    }
  }, [_c("i", {
    staticClass: "nav-icon i-Checkout"
  }), _vm._v(" "), _c("span", {
    staticClass: "item-name"
  }, [_vm._v(_vm._s(_vm.$t("PurchasesReport")))])])], 1) : _vm._e(), _vm._v(" "), _vm.currentUserPermissions && _vm.currentUserPermissions.includes("product_purchases_report") ? _c("li", {
    staticClass: "nav-item"
  }, [_c("router-link", {
    attrs: {
      tag: "a",
      to: "/app/reports/product_purchases_report"
    }
  }, [_c("i", {
    staticClass: "nav-icon i-Shopping-Basket"
  }), _vm._v(" "), _c("span", {
    staticClass: "item-name"
  }, [_vm._v(_vm._s(_vm.$t("Product_purchases_report")))])])], 1) : _vm._e(), _vm._v(" "), _vm.currentUserPermissions && _vm.currentUserPermissions.includes("Reports_customers") ? _c("li", {
    staticClass: "nav-item"
  }, [_c("router-link", {
    attrs: {
      tag: "a",
      to: "/app/reports/customers_report"
    }
  }, [_c("i", {
    staticClass: "nav-icon i-User"
  }), _vm._v(" "), _c("span", {
    staticClass: "item-name"
  }, [_vm._v(_vm._s(_vm.$t("CustomersReport")))])])], 1) : _vm._e(), _vm._v(" "), _vm.currentUserPermissions && _vm.currentUserPermissions.includes("inactive_customers_report") ? _c("li", {
    staticClass: "nav-item"
  }, [_c("router-link", {
    attrs: {
      tag: "a",
      to: "/app/reports/inactive_customers"
    }
  }, [_c("i", {
    staticClass: "nav-icon i-Remove-User"
  }), _vm._v(" "), _c("span", {
    staticClass: "item-name"
  }, [_vm._v(_vm._s(_vm.$t("Inactive_Customers_Report")))])])], 1) : _vm._e(), _vm._v(" "), _vm.currentUserPermissions && _vm.currentUserPermissions.includes("Top_Suppliers_Report") ? _c("li", {
    staticClass: "nav-item"
  }, [_c("router-link", {
    attrs: {
      tag: "a",
      to: {
        name: "top_suppliers_report"
      }
    }
  }, [_c("i", {
    staticClass: "nav-icon i-Business-ManWoman"
  }), _vm._v(" "), _c("span", {
    staticClass: "item-name"
  }, [_vm._v(_vm._s(_vm.$t("Top_Suppliers_Report")))])])], 1) : _vm._e(), _vm._v(" "), _vm.currentUserPermissions && _vm.currentUserPermissions.includes("Reports_suppliers") ? _c("li", {
    staticClass: "nav-item"
  }, [_c("router-link", {
    attrs: {
      tag: "a",
      to: "/app/reports/providers_report"
    }
  }, [_c("i", {
    staticClass: "nav-icon i-User"
  }), _vm._v(" "), _c("span", {
    staticClass: "item-name"
  }, [_vm._v(_vm._s(_vm.$t("SuppliersReport")))])])], 1) : _vm._e(), _vm._v(" "), _vm.currentUserPermissions && _vm.currentUserPermissions.includes("Top_products") ? _c("li", {
    staticClass: "nav-item"
  }, [_c("router-link", {
    attrs: {
      tag: "a",
      to: "/app/reports/top_selling_products"
    }
  }, [_c("i", {
    staticClass: "nav-icon i-Trophy"
  }), _vm._v(" "), _c("span", {
    staticClass: "item-name"
  }, [_vm._v(_vm._s(_vm.$t("Top_Selling_Products")))])])], 1) : _vm._e(), _vm._v(" "), _vm.currentUserPermissions && _vm.currentUserPermissions.includes("Top_customers") ? _c("li", {
    staticClass: "nav-item"
  }, [_c("router-link", {
    attrs: {
      tag: "a",
      to: "/app/reports/top_customers"
    }
  }, [_c("i", {
    staticClass: "nav-icon i-Trophy"
  }), _vm._v(" "), _c("span", {
    staticClass: "item-name"
  }, [_vm._v(_vm._s(_vm.$t("Top_customers")))])])], 1) : _vm._e(), _vm._v(" "), _vm.currentUserPermissions && _vm.currentUserPermissions.includes("users_report") ? _c("li", {
    staticClass: "nav-item"
  }, [_c("router-link", {
    attrs: {
      tag: "a",
      to: "/app/reports/users_report"
    }
  }, [_c("i", {
    staticClass: "nav-icon i-User"
  }), _vm._v(" "), _c("span", {
    staticClass: "item-name"
  }, [_vm._v(_vm._s(_vm.$t("Users_Report")))])])], 1) : _vm._e(), _vm._v(" "), _vm.currentUserPermissions && _vm.currentUserPermissions.includes("report_device_management") ? _c("li", {
    staticClass: "nav-item"
  }, [_c("router-link", {
    attrs: {
      tag: "a",
      to: "/app/reports/login_activity_report"
    }
  }, [_c("i", {
    staticClass: "nav-icon i-Lock-2"
  }), _vm._v(" "), _c("span", {
    staticClass: "item-name"
  }, [_vm._v(_vm._s(_vm.$t("Login_Activity_Report")))])])], 1) : _vm._e(), _vm._v(" "), _vm.currentUserPermissions && _vm.currentUserPermissions.includes("report_error_logs") ? _c("li", {
    staticClass: "nav-item"
  }, [_c("router-link", {
    attrs: {
      tag: "a",
      to: "/app/reports/report_error_logs"
    }
  }, [_c("i", {
    staticClass: "nav-icon i-Bug"
  }), _vm._v(" "), _c("span", {
    staticClass: "item-name"
  }, [_vm._v(_vm._s(_vm.$t("Error_Logs")))])])], 1) : _vm._e(), _vm._v(" "), _vm.currentUserPermissions && _vm.currentUserPermissions.includes("service_jobs_report") ? _c("li", {
    staticClass: "nav-item"
  }, [_c("router-link", {
    attrs: {
      tag: "a",
      to: {
        name: "service_jobs_report"
      }
    }
  }, [_c("i", {
    staticClass: "nav-icon i-Repair"
  }), _vm._v(" "), _c("span", {
    staticClass: "item-name"
  }, [_vm._v(_vm._s(_vm.$t("Service_Jobs_Report")))])])], 1) : _vm._e(), _vm._v(" "), _vm.currentUserPermissions && _vm.currentUserPermissions.includes("checklist_completion_report") ? _c("li", {
    staticClass: "nav-item"
  }, [_c("router-link", {
    attrs: {
      tag: "a",
      to: {
        name: "checklist_completion_report"
      }
    }
  }, [_c("i", {
    staticClass: "nav-icon i-Check"
  }), _vm._v(" "), _c("span", {
    staticClass: "item-name"
  }, [_vm._v(_vm._s(_vm.$t("Checklist_Completion_Report")))])])], 1) : _vm._e(), _vm._v(" "), _vm.currentUserPermissions && _vm.currentUserPermissions.includes("customer_maintenance_history_report") ? _c("li", {
    staticClass: "nav-item"
  }, [_c("router-link", {
    attrs: {
      tag: "a",
      to: {
        name: "customer_maintenance_history_report"
      }
    }
  }, [_c("i", {
    staticClass: "nav-icon i-Calendar-4"
  }), _vm._v(" "), _c("span", {
    staticClass: "item-name"
  }, [_vm._v(_vm._s(_vm.$t("Customer_Maintenance_History_Report")))])])], 1) : _vm._e()])])]), _vm._v(" "), _c("div", {
    staticClass: "sidebar-overlay",
    "class": {
      open: _vm.getSideBarToggleProperties.isSecondarySideNavOpen
    },
    on: {
      click: function click($event) {
        return _vm.removeOverlay();
      }
    }
  })], 1);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/containers/layouts/largeSidebar/TopNav.vue?vue&type=template&id=7dfa9f1c&scoped=true":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/containers/layouts/largeSidebar/TopNav.vue?vue&type=template&id=7dfa9f1c&scoped=true ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************/
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
    staticClass: "main-header"
  }, [_c("div", {
    staticClass: "logo"
  }, [_c("router-link", {
    attrs: {
      to: "/app/dashboard"
    }
  }, [_vm.currentUser && _vm.currentUser.logo ? _c("img", {
    attrs: {
      src: "/images/" + _vm.currentUser.logo,
      alt: "",
      width: "60",
      height: "60"
    }
  }) : _c("img", {
    attrs: {
      src: "/images/logo.png",
      alt: "",
      width: "60",
      height: "60"
    }
  })])], 1), _vm._v(" "), _c("div", {
    staticClass: "menu-toggle",
    on: {
      click: _vm.sideBarToggle
    }
  }, [_c("div"), _vm._v(" "), _c("div"), _vm._v(" "), _c("div")]), _vm._v(" "), _c("div", {
    staticStyle: {
      margin: "auto"
    }
  }), _vm._v(" "), _c("div", {
    staticClass: "header-part-right nav-right"
  }, [_vm.currentUserPermissions && _vm.currentUserPermissions.includes("Pos_view") ? _c("router-link", {
    staticClass: "btn btn-primary btn-sm",
    attrs: {
      to: "/app/pos"
    }
  }, [_c("i", {
    staticClass: "i-Cash-Register"
  }), _vm._v(" "), _c("span", {
    staticClass: "btn-text"
  }, [_vm._v("POS")])]) : _vm._e(), _vm._v(" "), _c("button", {
    staticClass: "nav-icon-btn",
    attrs: {
      title: _vm.getThemeMode.dark ? "Light Mode" : "Dark Mode"
    },
    on: {
      click: _vm.toggleDarkMode
    }
  }, [_c("i", {
    "class": _vm.getThemeMode.dark ? "i-Sun" : "i-Cloud-Moon"
  })]), _vm._v(" "), _c("button", {
    staticClass: "nav-icon-btn fullscreen-btn d-none d-sm-inline-flex",
    attrs: {
      title: "Fullscreen"
    },
    on: {
      click: _vm.handleFullScreen
    }
  }, [_c("i", {
    staticClass: "i-Full-Screen"
  })]), _vm._v(" "), _vm.show_language ? _c("div", {
    staticClass: "dropdown"
  }, [_c("b-dropdown", {
    attrs: {
      id: "lang-dd",
      right: "",
      "toggle-class": "dropdown-toggle-no-caret",
      "no-caret": ""
    }
  }, [_c("template", {
    slot: "button-content"
  }, [_c("i", {
    staticClass: "i-Globe"
  })]), _vm._v(" "), _c("vue-perfect-scrollbar", {
    staticClass: "dropdown-scroll",
    attrs: {
      settings: {
        suppressScrollX: true,
        wheelPropagation: false
      }
    }
  }, [_c("div", {
    staticClass: "lang-menu"
  }, _vm._l(_vm.getAvailableLanguages, function (lang) {
    return _c("a", {
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
    }), _vm._v(" "), _c("span", [_vm._v(_vm._s(lang.name))])]);
  }), 0)])], 2)], 1) : _vm._e(), _vm._v(" "), _c("div", {
    staticClass: "dropdown"
  }, [_c("b-dropdown", {
    attrs: {
      id: "notif-dd",
      right: "",
      "toggle-class": "dropdown-toggle-no-caret",
      "no-caret": ""
    }
  }, [_c("template", {
    slot: "button-content"
  }, [_vm.notifs_alert > 0 ? _c("span", {
    staticClass: "badge badge-primary"
  }, [_vm._v("1")]) : _vm._e(), _vm._v(" "), _c("i", {
    staticClass: "i-Bell"
  })]), _vm._v(" "), _c("vue-perfect-scrollbar", {
    staticClass: "dropdown-scroll",
    attrs: {
      settings: {
        suppressScrollX: true,
        wheelPropagation: false
      }
    }
  }, [_vm.notifs_alert > 0 ? _c("div", {
    staticClass: "notification-item"
  }, [_c("div", {
    staticClass: "notif-icon"
  }, [_c("i", {
    staticClass: "i-Bell text-primary"
  })]), _vm._v(" "), _vm.currentUserPermissions && _vm.currentUserPermissions.includes("Reports_quantity_alerts") ? _c("div", {
    staticClass: "notif-content"
  }, [_c("router-link", {
    attrs: {
      tag: "a",
      to: "/app/reports/quantity_alerts"
    }
  }, [_c("p", [_vm._v(_vm._s(_vm.notifs_alert) + " " + _vm._s(_vm.$t("ProductQuantityAlerts")))])])], 1) : _vm._e()]) : _vm._e()])], 2)], 1), _vm._v(" "), _c("div", {
    staticClass: "dropdown"
  }, [_c("b-dropdown", {
    attrs: {
      id: "user-dd",
      right: "",
      "toggle-class": "user-dropdown-toggle",
      "no-caret": "",
      variant: "link"
    }
  }, [_c("template", {
    slot: "button-content"
  }, [_c("div", {
    staticClass: "user-avatar"
  }, [_vm.currentUser && _vm.currentUser.avatar ? _c("img", {
    attrs: {
      src: "/images/avatar/" + _vm.currentUser.avatar,
      alt: "user"
    }
  }) : _c("img", {
    attrs: {
      src: "/images/avatar/no_avatar.png",
      alt: "user"
    }
  })])]), _vm._v(" "), _c("div", {
    staticClass: "user-dropdown-menu"
  }, [_c("div", {
    staticClass: "dropdown-header"
  }, [_c("i", {
    staticClass: "i-Lock-User mr-1"
  }), _vm._v(" "), _vm.currentUser ? _c("span", [_vm._v(_vm._s(_vm.currentUser.username))]) : _vm._e()]), _vm._v(" "), _c("router-link", {
    staticClass: "dropdown-item",
    attrs: {
      to: "/app/profile"
    }
  }, [_vm._v("\n            " + _vm._s(_vm.$t("profil")) + "\n          ")]), _vm._v(" "), _vm.currentUserPermissions && _vm.currentUserPermissions.includes("setting_system") ? _c("router-link", {
    staticClass: "dropdown-item",
    attrs: {
      to: "/app/settings/System_settings"
    }
  }, [_vm._v("\n            " + _vm._s(_vm.$t("Settings")) + "\n          ")]) : _vm._e(), _vm._v(" "), _c("a", {
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
  }, [_vm._v("\n            " + _vm._s(_vm.$t("logout")) + "\n          ")])], 1)], 2)], 1)], 1)]);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/containers/layouts/largeSidebar/VerticalSidebar.vue?vue&type=template&id=1b1a6f68&scoped=true":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/containers/layouts/largeSidebar/VerticalSidebar.vue?vue&type=template&id=1b1a6f68&scoped=true ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
    staticClass: "vertical-sidebar-wrapper",
    "class": {
      "is-mobile": _vm.isMobile,
      collapsed: _vm.isCollapsed,
      "mobile-open": _vm.mobileOpen
    }
  }, [_c("vue-perfect-scrollbar", {
    ref: "ps",
    staticClass: "vertical-sidebar ps scroll",
    attrs: {
      settings: {
        suppressScrollX: true,
        wheelPropagation: false
      }
    }
  }, [_c("div", {
    staticClass: "vertical-sidebar-header"
  }, [_c("div", {
    staticClass: "header-brand",
    on: {
      click: _vm.navigateToDashboard
    }
  }, [_c("div", {
    staticClass: "sidebar-logo"
  }, [_vm.currentUser && _vm.currentUser.logo ? _c("img", {
    staticClass: "logo-image",
    attrs: {
      src: "/images/" + _vm.currentUser.logo,
      alt: "logo"
    }
  }) : _c("div", {
    staticClass: "logo-placeholder"
  }, [_vm._v("\n            " + _vm._s(_vm.currentUser && _vm.currentUser.company ? _vm.currentUser.company[0] : "S") + "\n          ")])]), _vm._v(" "), !_vm.isCollapsed && _vm.currentUser ? _c("div", {
    staticClass: "company-name"
  }, [_vm._v("\n          " + _vm._s(_vm.currentUser.company || "Stocky") + "\n        ")]) : _vm._e()])]), _vm._v(" "), _c("nav", {
    staticClass: "vertical-nav-menu"
  }, [_c("ul", {
    staticClass: "nav-list"
  }, [_c("li", {
    staticClass: "nav-item",
    "class": {
      active: _vm.isActiveRoute("dashboard")
    }
  }, [_c("router-link", {
    staticClass: "nav-link",
    attrs: {
      to: "/app/dashboard"
    }
  }, [_c("i", {
    staticClass: "nav-icon i-Bar-Chart"
  }), _vm._v(" "), !_vm.isCollapsed ? _c("span", {
    staticClass: "nav-text"
  }, [_vm._v(_vm._s(_vm.$t("dashboard")))]) : _vm._e()])], 1), _vm._v(" "), _c("li", {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: _vm.currentUserPermissions && (_vm.currentUserPermissions.includes("Store_settings_view") || _vm.currentUserPermissions.includes("Orders_view") || _vm.currentUserPermissions.includes("Collections_view") || _vm.currentUserPermissions.includes("Banners_view") || _vm.currentUserPermissions.includes("Subscribers_view") || _vm.currentUserPermissions.includes("Messages_view")),
      expression: "currentUserPermissions && (\n            currentUserPermissions.includes('Store_settings_view') ||\n            currentUserPermissions.includes('Orders_view') ||\n            currentUserPermissions.includes('Collections_view') ||\n            currentUserPermissions.includes('Banners_view') ||\n            currentUserPermissions.includes('Subscribers_view') ||\n            currentUserPermissions.includes('Messages_view')\n          )"
    }],
    staticClass: "nav-item",
    "class": {
      active: _vm.isActiveRoute("Store"),
      "has-submenu": true,
      open: _vm.openMenus.includes("Store")
    }
  }, [_c("a", {
    staticClass: "nav-link",
    attrs: {
      href: "#"
    },
    on: {
      click: function click($event) {
        $event.preventDefault();
        return _vm.toggleSubmenu("Store");
      }
    }
  }, [_c("i", {
    staticClass: "nav-icon i-Shopping-Bag"
  }), _vm._v(" "), !_vm.isCollapsed ? _c("span", {
    staticClass: "nav-text"
  }, [_vm._v(_vm._s(_vm.$t("Store")))]) : _vm._e(), _vm._v(" "), !_vm.isCollapsed ? _c("i", {
    staticClass: "submenu-arrow i-Arrow-Down"
  }) : _vm._e()]), _vm._v(" "), _vm.openMenus.includes("Store") && !_vm.isCollapsed ? _c("ul", {
    staticClass: "submenu"
  }, [_c("li", {
    staticClass: "submenu-item"
  }, [_c("a", {
    staticClass: "submenu-link",
    attrs: {
      href: "/online_store",
      target: "_blank"
    }
  }, [_c("i", {
    staticClass: "submenu-icon i-Shop-2"
  }), _vm._v(" "), _c("span", [_vm._v(_vm._s(_vm.$t("Visit_Online_Store")))])])]), _vm._v(" "), _vm.currentUserPermissions && _vm.currentUserPermissions.includes("Store_settings_view") ? _c("li", {
    staticClass: "submenu-item"
  }, [_c("router-link", {
    staticClass: "submenu-link",
    attrs: {
      to: "/app/Store/Settings"
    }
  }, [_c("i", {
    staticClass: "submenu-icon i-Gear"
  }), _vm._v(" "), _c("span", [_vm._v(_vm._s(_vm.$t("Settings")))])])], 1) : _vm._e(), _vm._v(" "), _vm.currentUserPermissions && _vm.currentUserPermissions.includes("Orders_view") ? _c("li", {
    staticClass: "submenu-item"
  }, [_c("router-link", {
    staticClass: "submenu-link",
    attrs: {
      to: "/app/Store/Orders"
    }
  }, [_c("i", {
    staticClass: "submenu-icon i-Receipt"
  }), _vm._v(" "), _c("span", [_vm._v(_vm._s(_vm.$t("Online_Orders")))])])], 1) : _vm._e(), _vm._v(" "), _vm.currentUserPermissions && _vm.currentUserPermissions.includes("Collections_view") ? _c("li", {
    staticClass: "submenu-item"
  }, [_c("router-link", {
    staticClass: "submenu-link",
    attrs: {
      to: "/app/Store/Collections"
    }
  }, [_c("i", {
    staticClass: "submenu-icon i-Check"
  }), _vm._v(" "), _c("span", [_vm._v(_vm._s(_vm.$t("Collections")))])])], 1) : _vm._e(), _vm._v(" "), _vm.currentUserPermissions && _vm.currentUserPermissions.includes("Banners_view") ? _c("li", {
    staticClass: "submenu-item"
  }, [_c("router-link", {
    staticClass: "submenu-link",
    attrs: {
      to: "/app/Store/Banners"
    }
  }, [_c("i", {
    staticClass: "submenu-icon i-Wallet"
  }), _vm._v(" "), _c("span", [_vm._v(_vm._s(_vm.$t("Banners")))])])], 1) : _vm._e(), _vm._v(" "), _vm.currentUserPermissions && _vm.currentUserPermissions.includes("Subscribers_view") ? _c("li", {
    staticClass: "submenu-item"
  }, [_c("router-link", {
    staticClass: "submenu-link",
    attrs: {
      to: "/app/Store/Subscribers"
    }
  }, [_c("i", {
    staticClass: "submenu-icon i-MaleFemale"
  }), _vm._v(" "), _c("span", [_vm._v(_vm._s(_vm.$t("Subscribers")))])])], 1) : _vm._e(), _vm._v(" "), _vm.currentUserPermissions && _vm.currentUserPermissions.includes("Messages_view") ? _c("li", {
    staticClass: "submenu-item"
  }, [_c("router-link", {
    staticClass: "submenu-link",
    attrs: {
      to: "/app/Store/Messages"
    }
  }, [_c("i", {
    staticClass: "submenu-icon i-Speach-Bubble"
  }), _vm._v(" "), _c("span", [_vm._v(_vm._s(_vm.$t("Messages")))])])], 1) : _vm._e()]) : _vm._e()]), _vm._v(" "), _c("li", {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: _vm.currentUserPermissions && (_vm.currentUserPermissions.includes("Customers_view") || _vm.currentUserPermissions.includes("Suppliers_view") || _vm.currentUserPermissions.includes("customers_import") || _vm.currentUserPermissions.includes("Suppliers_import")),
      expression: "currentUserPermissions && (\n            currentUserPermissions.includes('Customers_view') ||\n            currentUserPermissions.includes('Suppliers_view') ||\n            currentUserPermissions.includes('customers_import') ||\n            currentUserPermissions.includes('Suppliers_import')\n          )"
    }],
    staticClass: "nav-item",
    "class": {
      active: _vm.isActiveRoute("People"),
      "has-submenu": true,
      open: _vm.openMenus.includes("People")
    }
  }, [_c("a", {
    staticClass: "nav-link",
    attrs: {
      href: "#"
    },
    on: {
      click: function click($event) {
        $event.preventDefault();
        return _vm.toggleSubmenu("People");
      }
    }
  }, [_c("i", {
    staticClass: "nav-icon i-Business-Mens"
  }), _vm._v(" "), !_vm.isCollapsed ? _c("span", {
    staticClass: "nav-text"
  }, [_vm._v(_vm._s(_vm.$t("People")))]) : _vm._e(), _vm._v(" "), !_vm.isCollapsed ? _c("i", {
    staticClass: "submenu-arrow i-Arrow-Down"
  }) : _vm._e()]), _vm._v(" "), _vm.openMenus.includes("People") && !_vm.isCollapsed ? _c("ul", {
    staticClass: "submenu"
  }, [_vm.currentUserPermissions && _vm.currentUserPermissions.includes("Customers_view") ? _c("li", {
    staticClass: "submenu-item"
  }, [_c("router-link", {
    staticClass: "submenu-link",
    attrs: {
      to: "/app/People/Customers"
    }
  }, [_c("i", {
    staticClass: "submenu-icon i-Administrator"
  }), _vm._v(" "), _c("span", [_vm._v(_vm._s(_vm.$t("Customers")))])])], 1) : _vm._e(), _vm._v(" "), _vm.currentUserPermissions && _vm.currentUserPermissions.includes("Customers_add") ? _c("li", {
    staticClass: "submenu-item"
  }, [_c("router-link", {
    staticClass: "submenu-link",
    attrs: {
      to: "/app/People/Customers/create"
    }
  }, [_c("i", {
    staticClass: "submenu-icon i-Add"
  }), _vm._v(" "), _c("span", [_vm._v(_vm._s(_vm.$t("Add")) + " " + _vm._s(_vm.$t("Customer")))])])], 1) : _vm._e(), _vm._v(" "), _vm.currentUserPermissions && _vm.currentUserPermissions.includes("customers_import") ? _c("li", {
    staticClass: "submenu-item"
  }, [_c("router-link", {
    staticClass: "submenu-link",
    attrs: {
      to: "/app/People/Customers_import"
    }
  }, [_c("i", {
    staticClass: "submenu-icon i-Download"
  }), _vm._v(" "), _c("span", [_vm._v(_vm._s(_vm.$t("Import_Customers")))])])], 1) : _vm._e(), _vm._v(" "), _vm.currentUserPermissions && _vm.currentUserPermissions.includes("Customers_view") ? _c("li", {
    staticClass: "submenu-item"
  }, [_c("router-link", {
    staticClass: "submenu-link",
    attrs: {
      to: "/app/People/Customers_without_ecommerce"
    }
  }, [_c("i", {
    staticClass: "submenu-icon i-Administrator"
  }), _vm._v(" "), _c("span", [_vm._v(_vm._s(_vm.$t("Customers_without_Login")))])])], 1) : _vm._e(), _vm._v(" "), _vm.currentUserPermissions && _vm.currentUserPermissions.includes("Customers_view") ? _c("li", {
    staticClass: "submenu-item"
  }, [_c("router-link", {
    staticClass: "submenu-link",
    attrs: {
      to: "/app/People/Customers_ecommerce"
    }
  }, [_c("i", {
    staticClass: "submenu-icon i-Administrator"
  }), _vm._v(" "), _c("span", [_vm._v(_vm._s(_vm.$t("Customers_with_Login")))])])], 1) : _vm._e(), _vm._v(" "), _vm.currentUserPermissions && _vm.currentUserPermissions.includes("Suppliers_view") ? _c("li", {
    staticClass: "submenu-item"
  }, [_c("router-link", {
    staticClass: "submenu-link",
    attrs: {
      to: "/app/People/Suppliers"
    }
  }, [_c("i", {
    staticClass: "submenu-icon i-Administrator"
  }), _vm._v(" "), _c("span", [_vm._v(_vm._s(_vm.$t("Suppliers")))])])], 1) : _vm._e(), _vm._v(" "), _vm.currentUserPermissions && _vm.currentUserPermissions.includes("Suppliers_add") ? _c("li", {
    staticClass: "submenu-item"
  }, [_c("router-link", {
    staticClass: "submenu-link",
    attrs: {
      to: "/app/People/Suppliers/create"
    }
  }, [_c("i", {
    staticClass: "submenu-icon i-Add"
  }), _vm._v(" "), _c("span", [_vm._v(_vm._s(_vm.$t("Add")) + " " + _vm._s(_vm.$t("Supplier")))])])], 1) : _vm._e(), _vm._v(" "), _vm.currentUserPermissions && _vm.currentUserPermissions.includes("Suppliers_import") ? _c("li", {
    staticClass: "submenu-item"
  }, [_c("router-link", {
    staticClass: "submenu-link",
    attrs: {
      to: "/app/People/Suppliers_import"
    }
  }, [_c("i", {
    staticClass: "submenu-icon i-Download"
  }), _vm._v(" "), _c("span", [_vm._v(_vm._s(_vm.$t("Import_Suppliers")))])])], 1) : _vm._e()]) : _vm._e()]), _vm._v(" "), _c("li", {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: _vm.currentUserPermissions && (_vm.currentUserPermissions.includes("users_view") || _vm.currentUserPermissions.includes("permissions_view")),
      expression: "currentUserPermissions && (\n            currentUserPermissions.includes('users_view') ||\n            currentUserPermissions.includes('permissions_view')\n          )"
    }],
    staticClass: "nav-item",
    "class": {
      active: _vm.isActiveRoute("User_Management"),
      "has-submenu": true,
      open: _vm.openMenus.includes("User_Management")
    }
  }, [_c("a", {
    staticClass: "nav-link",
    attrs: {
      href: "#"
    },
    on: {
      click: function click($event) {
        $event.preventDefault();
        return _vm.toggleSubmenu("User_Management");
      }
    }
  }, [_c("i", {
    staticClass: "nav-icon i-Administrator"
  }), _vm._v(" "), !_vm.isCollapsed ? _c("span", {
    staticClass: "nav-text"
  }, [_vm._v(_vm._s(_vm.$t("User_Management")))]) : _vm._e(), _vm._v(" "), !_vm.isCollapsed ? _c("i", {
    staticClass: "submenu-arrow i-Arrow-Down"
  }) : _vm._e()]), _vm._v(" "), _vm.openMenus.includes("User_Management") && !_vm.isCollapsed ? _c("ul", {
    staticClass: "submenu"
  }, [_vm.currentUserPermissions && _vm.currentUserPermissions.includes("users_view") ? _c("li", {
    staticClass: "submenu-item"
  }, [_c("router-link", {
    staticClass: "submenu-link",
    attrs: {
      to: "/app/User_Management/Users"
    }
  }, [_c("i", {
    staticClass: "submenu-icon i-Administrator"
  }), _vm._v(" "), _c("span", [_vm._v(_vm._s(_vm.$t("Users")))])])], 1) : _vm._e(), _vm._v(" "), _vm.currentUserPermissions && _vm.currentUserPermissions.includes("permissions_view") ? _c("li", {
    staticClass: "submenu-item"
  }, [_c("router-link", {
    staticClass: "submenu-link",
    attrs: {
      to: "/app/User_Management/permissions"
    }
  }, [_c("i", {
    staticClass: "submenu-icon i-Key"
  }), _vm._v(" "), _c("span", [_vm._v(_vm._s(_vm.$t("GroupPermissions")))])])], 1) : _vm._e()]) : _vm._e()]), _vm._v(" "), _c("li", {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: _vm.currentUserPermissions && (_vm.currentUserPermissions.includes("products_add") || _vm.currentUserPermissions.includes("products_view") || _vm.currentUserPermissions.includes("product_import") || _vm.currentUserPermissions.includes("opening_stock_import") || _vm.currentUserPermissions.includes("barcode_view") || _vm.currentUserPermissions.includes("brand") || _vm.currentUserPermissions.includes("unit") || _vm.currentUserPermissions.includes("count_stock") || _vm.currentUserPermissions.includes("category") || _vm.currentUserPermissions.includes("subcategory")),
      expression: "currentUserPermissions && (\n            currentUserPermissions.includes('products_add') ||\n            currentUserPermissions.includes('products_view') ||\n            currentUserPermissions.includes('product_import') ||\n            currentUserPermissions.includes('opening_stock_import') ||\n            currentUserPermissions.includes('barcode_view') ||\n            currentUserPermissions.includes('brand') ||\n            currentUserPermissions.includes('unit') ||\n            currentUserPermissions.includes('count_stock') ||\n            currentUserPermissions.includes('category') ||\n            currentUserPermissions.includes('subcategory')\n          )"
    }],
    staticClass: "nav-item",
    "class": {
      active: _vm.isActiveRoute("products"),
      "has-submenu": true,
      open: _vm.openMenus.includes("products")
    }
  }, [_c("a", {
    staticClass: "nav-link",
    attrs: {
      href: "#"
    },
    on: {
      click: function click($event) {
        $event.preventDefault();
        return _vm.toggleSubmenu("products");
      }
    }
  }, [_c("i", {
    staticClass: "nav-icon i-Library-2"
  }), _vm._v(" "), !_vm.isCollapsed ? _c("span", {
    staticClass: "nav-text"
  }, [_vm._v(_vm._s(_vm.$t("Products")))]) : _vm._e(), _vm._v(" "), !_vm.isCollapsed ? _c("i", {
    staticClass: "submenu-arrow i-Arrow-Down"
  }) : _vm._e()]), _vm._v(" "), _vm.openMenus.includes("products") && !_vm.isCollapsed ? _c("ul", {
    staticClass: "submenu"
  }, [_vm.currentUserPermissions && _vm.currentUserPermissions.includes("products_add") ? _c("li", {
    staticClass: "submenu-item"
  }, [_c("router-link", {
    staticClass: "submenu-link",
    attrs: {
      to: "/app/products/store"
    }
  }, [_c("i", {
    staticClass: "submenu-icon i-Add-File"
  }), _vm._v(" "), _c("span", [_vm._v(_vm._s(_vm.$t("AddProduct")))])])], 1) : _vm._e(), _vm._v(" "), _vm.currentUserPermissions && _vm.currentUserPermissions.includes("products_view") ? _c("li", {
    staticClass: "submenu-item"
  }, [_c("router-link", {
    staticClass: "submenu-link",
    attrs: {
      to: "/app/products/list"
    }
  }, [_c("i", {
    staticClass: "submenu-icon i-Files"
  }), _vm._v(" "), _c("span", [_vm._v(_vm._s(_vm.$t("productsList")))])])], 1) : _vm._e(), _vm._v(" "), _vm.currentUserPermissions && _vm.currentUserPermissions.includes("product_import") ? _c("li", {
    staticClass: "submenu-item"
  }, [_c("router-link", {
    staticClass: "submenu-link",
    attrs: {
      to: "/app/products/import"
    }
  }, [_c("i", {
    staticClass: "submenu-icon i-Download"
  }), _vm._v(" "), _c("span", [_vm._v(_vm._s(_vm.$t("import_products")))])])], 1) : _vm._e(), _vm._v(" "), _vm.currentUserPermissions && _vm.currentUserPermissions.includes("product_import") ? _c("li", {
    staticClass: "submenu-item"
  }, [_c("router-link", {
    staticClass: "submenu-link",
    attrs: {
      to: "/app/products/import-update"
    }
  }, [_c("i", {
    staticClass: "submenu-icon i-Edit"
  }), _vm._v(" "), _c("span", [_vm._v("Import (Update Only)")])])], 1) : _vm._e(), _vm._v(" "), _vm.currentUserPermissions && _vm.currentUserPermissions.includes("opening_stock_import") ? _c("li", {
    staticClass: "submenu-item"
  }, [_c("router-link", {
    staticClass: "submenu-link",
    attrs: {
      to: "/app/products/opening_stock_import"
    }
  }, [_c("i", {
    staticClass: "submenu-icon i-Add-File"
  }), _vm._v(" "), _c("span", [_vm._v(_vm._s(_vm.$t("Opening_Stock")))])])], 1) : _vm._e(), _vm._v(" "), _vm.currentUserPermissions && _vm.currentUserPermissions.includes("barcode_view") ? _c("li", {
    staticClass: "submenu-item"
  }, [_c("router-link", {
    staticClass: "submenu-link",
    attrs: {
      to: "/app/products/barcode"
    }
  }, [_c("i", {
    staticClass: "submenu-icon i-Bar-Code"
  }), _vm._v(" "), _c("span", [_vm._v(_vm._s(_vm.$t("Printbarcode")))])])], 1) : _vm._e(), _vm._v(" "), _vm.currentUserPermissions && _vm.currentUserPermissions.includes("count_stock") ? _c("li", {
    staticClass: "submenu-item"
  }, [_c("router-link", {
    staticClass: "submenu-link",
    attrs: {
      to: "/app/products/count_stock"
    }
  }, [_c("i", {
    staticClass: "submenu-icon i-Check-2"
  }), _vm._v(" "), _c("span", [_vm._v(_vm._s(_vm.$t("CountStock")))])])], 1) : _vm._e(), _vm._v(" "), _vm.currentUserPermissions && _vm.currentUserPermissions.includes("category") ? _c("li", {
    staticClass: "submenu-item"
  }, [_c("router-link", {
    staticClass: "submenu-link",
    attrs: {
      to: "/app/products/Categories"
    }
  }, [_c("i", {
    staticClass: "submenu-icon i-Duplicate-Layer"
  }), _vm._v(" "), _c("span", [_vm._v(_vm._s(_vm.$t("Categories")))])])], 1) : _vm._e(), _vm._v(" "), _vm.currentUserPermissions && _vm.currentUserPermissions.includes("subcategory") ? _c("li", {
    staticClass: "submenu-item"
  }, [_c("router-link", {
    staticClass: "submenu-link",
    attrs: {
      to: "/app/products/SubCategories"
    }
  }, [_c("i", {
    staticClass: "submenu-icon i-Library"
  }), _vm._v(" "), _c("span", [_vm._v(_vm._s(_vm.$t("SubCategory")))])])], 1) : _vm._e(), _vm._v(" "), _vm.currentUserPermissions && _vm.currentUserPermissions.includes("brand") ? _c("li", {
    staticClass: "submenu-item"
  }, [_c("router-link", {
    staticClass: "submenu-link",
    attrs: {
      to: "/app/products/Brands"
    }
  }, [_c("i", {
    staticClass: "submenu-icon i-Bookmark"
  }), _vm._v(" "), _c("span", [_vm._v(_vm._s(_vm.$t("Brand")))])])], 1) : _vm._e(), _vm._v(" "), _vm.currentUserPermissions && _vm.currentUserPermissions.includes("unit") ? _c("li", {
    staticClass: "submenu-item"
  }, [_c("router-link", {
    staticClass: "submenu-link",
    attrs: {
      to: "/app/products/Units"
    }
  }, [_c("i", {
    staticClass: "submenu-icon i-Quotes"
  }), _vm._v(" "), _c("span", [_vm._v(_vm._s(_vm.$t("Units")))])])], 1) : _vm._e()]) : _vm._e()]), _vm._v(" "), _c("li", {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: _vm.currentUserPermissions && (_vm.currentUserPermissions.includes("adjustment_view") || _vm.currentUserPermissions.includes("adjustment_add")),
      expression: "currentUserPermissions && (\n            currentUserPermissions.includes('adjustment_view') ||\n            currentUserPermissions.includes('adjustment_add')\n          )"
    }],
    staticClass: "nav-item",
    "class": {
      active: _vm.isActiveRoute("adjustments"),
      "has-submenu": true,
      open: _vm.openMenus.includes("adjustments")
    }
  }, [_c("a", {
    staticClass: "nav-link",
    attrs: {
      href: "#"
    },
    on: {
      click: function click($event) {
        $event.preventDefault();
        return _vm.toggleSubmenu("adjustments");
      }
    }
  }, [_c("i", {
    staticClass: "nav-icon i-Edit-Map"
  }), _vm._v(" "), !_vm.isCollapsed ? _c("span", {
    staticClass: "nav-text"
  }, [_vm._v(_vm._s(_vm.$t("StockAdjustement")))]) : _vm._e(), _vm._v(" "), !_vm.isCollapsed ? _c("i", {
    staticClass: "submenu-arrow i-Arrow-Down"
  }) : _vm._e()]), _vm._v(" "), _vm.openMenus.includes("adjustments") && !_vm.isCollapsed ? _c("ul", {
    staticClass: "submenu"
  }, [_vm.currentUserPermissions && _vm.currentUserPermissions.includes("adjustment_add") ? _c("li", {
    staticClass: "submenu-item"
  }, [_c("router-link", {
    staticClass: "submenu-link",
    attrs: {
      to: "/app/adjustments/store"
    }
  }, [_c("i", {
    staticClass: "submenu-icon i-Add-File"
  }), _vm._v(" "), _c("span", [_vm._v(_vm._s(_vm.$t("CreateAdjustment")))])])], 1) : _vm._e(), _vm._v(" "), _vm.currentUserPermissions && _vm.currentUserPermissions.includes("adjustment_view") ? _c("li", {
    staticClass: "submenu-item"
  }, [_c("router-link", {
    staticClass: "submenu-link",
    attrs: {
      to: "/app/adjustments/list"
    }
  }, [_c("i", {
    staticClass: "submenu-icon i-Files"
  }), _vm._v(" "), _c("span", [_vm._v(_vm._s(_vm.$t("ListAdjustments")))])])], 1) : _vm._e()]) : _vm._e()]), _vm._v(" "), _c("li", {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: _vm.currentUserPermissions && (_vm.currentUserPermissions.includes("Purchases_view") || _vm.currentUserPermissions.includes("Purchases_add")),
      expression: "currentUserPermissions && (\n            currentUserPermissions.includes('Purchases_view') ||\n            currentUserPermissions.includes('Purchases_add')\n          )"
    }],
    staticClass: "nav-item",
    "class": {
      active: _vm.isActiveRoute("purchases"),
      "has-submenu": true,
      open: _vm.openMenus.includes("purchases")
    }
  }, [_c("a", {
    staticClass: "nav-link",
    attrs: {
      href: "#"
    },
    on: {
      click: function click($event) {
        $event.preventDefault();
        return _vm.toggleSubmenu("purchases");
      }
    }
  }, [_c("i", {
    staticClass: "nav-icon i-Receipt"
  }), _vm._v(" "), !_vm.isCollapsed ? _c("span", {
    staticClass: "nav-text"
  }, [_vm._v(_vm._s(_vm.$t("Purchases")))]) : _vm._e(), _vm._v(" "), !_vm.isCollapsed ? _c("i", {
    staticClass: "submenu-arrow i-Arrow-Down"
  }) : _vm._e()]), _vm._v(" "), _vm.openMenus.includes("purchases") && !_vm.isCollapsed ? _c("ul", {
    staticClass: "submenu"
  }, [_vm.currentUserPermissions && _vm.currentUserPermissions.includes("Purchases_add") ? _c("li", {
    staticClass: "submenu-item"
  }, [_c("router-link", {
    staticClass: "submenu-link",
    attrs: {
      to: "/app/purchases/store"
    }
  }, [_c("i", {
    staticClass: "submenu-icon i-Add-File"
  }), _vm._v(" "), _c("span", [_vm._v(_vm._s(_vm.$t("AddPurchase")))])])], 1) : _vm._e(), _vm._v(" "), _vm.currentUserPermissions && _vm.currentUserPermissions.includes("Purchases_view") ? _c("li", {
    staticClass: "submenu-item"
  }, [_c("router-link", {
    staticClass: "submenu-link",
    attrs: {
      to: "/app/purchases/list"
    }
  }, [_c("i", {
    staticClass: "submenu-icon i-Files"
  }), _vm._v(" "), _c("span", [_vm._v(_vm._s(_vm.$t("ListPurchases")))])])], 1) : _vm._e(), _vm._v(" "), _vm.currentUserPermissions && _vm.currentUserPermissions.includes("Purchases_add") ? _c("li", {
    staticClass: "submenu-item"
  }, [_c("router-link", {
    staticClass: "submenu-link",
    attrs: {
      to: "/app/purchases/import_purchases"
    }
  }, [_c("i", {
    staticClass: "submenu-icon i-Add-File"
  }), _vm._v(" "), _c("span", [_vm._v(_vm._s(_vm.$t("Import_Purchases")))])])], 1) : _vm._e()]) : _vm._e()]), _vm._v(" "), _c("li", {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: _vm.currentUserPermissions && (_vm.currentUserPermissions.includes("Sales_view") || _vm.currentUserPermissions.includes("Sales_add") || _vm.currentUserPermissions.includes("Pos_view") || _vm.currentUserPermissions.includes("customer_display_screen_setup") || _vm.currentUserPermissions.includes("shipment")),
      expression: "currentUserPermissions && (\n            currentUserPermissions.includes('Sales_view') ||\n            currentUserPermissions.includes('Sales_add') ||\n            currentUserPermissions.includes('Pos_view') ||\n            currentUserPermissions.includes('customer_display_screen_setup') ||\n            currentUserPermissions.includes('shipment')\n          )"
    }],
    staticClass: "nav-item",
    "class": {
      active: _vm.isActiveRoute("sales"),
      "has-submenu": true,
      open: _vm.openMenus.includes("sales")
    }
  }, [_c("a", {
    staticClass: "nav-link",
    attrs: {
      href: "#"
    },
    on: {
      click: function click($event) {
        $event.preventDefault();
        return _vm.toggleSubmenu("sales");
      }
    }
  }, [_c("i", {
    staticClass: "nav-icon i-Full-Cart"
  }), _vm._v(" "), !_vm.isCollapsed ? _c("span", {
    staticClass: "nav-text"
  }, [_vm._v(_vm._s(_vm.$t("Sales")))]) : _vm._e(), _vm._v(" "), !_vm.isCollapsed ? _c("i", {
    staticClass: "submenu-arrow i-Arrow-Down"
  }) : _vm._e()]), _vm._v(" "), _vm.openMenus.includes("sales") && !_vm.isCollapsed ? _c("ul", {
    staticClass: "submenu"
  }, [_vm.currentUserPermissions && _vm.currentUserPermissions.includes("Sales_add") ? _c("li", {
    staticClass: "submenu-item"
  }, [_c("router-link", {
    staticClass: "submenu-link",
    attrs: {
      to: "/app/sales/store"
    }
  }, [_c("i", {
    staticClass: "submenu-icon i-Add-File"
  }), _vm._v(" "), _c("span", [_vm._v(_vm._s(_vm.$t("AddSale")))])])], 1) : _vm._e(), _vm._v(" "), _vm.currentUserPermissions && _vm.currentUserPermissions.includes("Sales_add") ? _c("li", {
    staticClass: "submenu-item"
  }, [_c("router-link", {
    staticClass: "submenu-link",
    attrs: {
      to: "/app/sales/import_sales"
    }
  }, [_c("i", {
    staticClass: "submenu-icon i-Add-File"
  }), _vm._v(" "), _c("span", [_vm._v(_vm._s(_vm.$t("Import_Sales")))])])], 1) : _vm._e(), _vm._v(" "), _vm.currentUserPermissions && _vm.currentUserPermissions.includes("Sales_view") ? _c("li", {
    staticClass: "submenu-item"
  }, [_c("router-link", {
    staticClass: "submenu-link",
    attrs: {
      to: "/app/sales/list"
    }
  }, [_c("i", {
    staticClass: "submenu-icon i-Files"
  }), _vm._v(" "), _c("span", [_vm._v(_vm._s(_vm.$t("ListSales")))])])], 1) : _vm._e(), _vm._v(" "), _vm.currentUserPermissions && _vm.currentUserPermissions.includes("Pos_view") ? _c("li", {
    staticClass: "submenu-item"
  }, [_c("router-link", {
    staticClass: "submenu-link",
    attrs: {
      to: "/app/pos"
    }
  }, [_c("i", {
    staticClass: "submenu-icon i-Files"
  }), _vm._v(" "), _c("span", [_vm._v("POS")])])], 1) : _vm._e(), _vm._v(" "), _vm.currentUserPermissions && _vm.currentUserPermissions.includes("customer_display_screen_setup") ? _c("li", {
    staticClass: "submenu-item"
  }, [_c("router-link", {
    staticClass: "submenu-link",
    attrs: {
      to: "/app/customer-display/setup"
    }
  }, [_c("i", {
    staticClass: "submenu-icon i-Files"
  }), _vm._v(" "), _c("span", [_vm._v(_vm._s(_vm.$t("Customer_Screen")))])])], 1) : _vm._e(), _vm._v(" "), _vm.currentUserPermissions && _vm.currentUserPermissions.includes("shipment") ? _c("li", {
    staticClass: "submenu-item"
  }, [_c("router-link", {
    staticClass: "submenu-link",
    attrs: {
      to: "/app/sales/shipment"
    }
  }, [_c("i", {
    staticClass: "submenu-icon i-Files"
  }), _vm._v(" "), _c("span", [_vm._v(_vm._s(_vm.$t("Shipments")))])])], 1) : _vm._e()]) : _vm._e()]), _vm._v(" "), _vm.currentUserPermissions && _vm.currentUserPermissions.includes("Sale_Returns_view") ? _c("li", {
    staticClass: "nav-item",
    "class": {
      active: _vm.isActiveRoute("sale_return")
    }
  }, [_c("router-link", {
    staticClass: "nav-link",
    attrs: {
      to: "/app/sale_return/list"
    }
  }, [_c("i", {
    staticClass: "nav-icon i-Right"
  }), _vm._v(" "), !_vm.isCollapsed ? _c("span", {
    staticClass: "nav-text"
  }, [_vm._v(_vm._s(_vm.$t("SalesReturn")))]) : _vm._e()])], 1) : _vm._e(), _vm._v(" "), _c("li", {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: _vm.currentUserPermissions && (_vm.currentUserPermissions.includes("Quotations_view") || _vm.currentUserPermissions.includes("Quotations_add")),
      expression: "currentUserPermissions && (\n            currentUserPermissions.includes('Quotations_view') ||\n            currentUserPermissions.includes('Quotations_add')\n          )"
    }],
    staticClass: "nav-item",
    "class": {
      active: _vm.isActiveRoute("quotations"),
      "has-submenu": true,
      open: _vm.openMenus.includes("quotations")
    }
  }, [_c("a", {
    staticClass: "nav-link",
    attrs: {
      href: "#"
    },
    on: {
      click: function click($event) {
        $event.preventDefault();
        return _vm.toggleSubmenu("quotations");
      }
    }
  }, [_c("i", {
    staticClass: "nav-icon i-Checkout-Basket"
  }), _vm._v(" "), !_vm.isCollapsed ? _c("span", {
    staticClass: "nav-text"
  }, [_vm._v(_vm._s(_vm.$t("Quotations")))]) : _vm._e(), _vm._v(" "), !_vm.isCollapsed ? _c("i", {
    staticClass: "submenu-arrow i-Arrow-Down"
  }) : _vm._e()]), _vm._v(" "), _vm.openMenus.includes("quotations") && !_vm.isCollapsed ? _c("ul", {
    staticClass: "submenu"
  }, [_vm.currentUserPermissions && _vm.currentUserPermissions.includes("Quotations_add") ? _c("li", {
    staticClass: "submenu-item"
  }, [_c("router-link", {
    staticClass: "submenu-link",
    attrs: {
      to: "/app/quotations/store"
    }
  }, [_c("i", {
    staticClass: "submenu-icon i-Add-File"
  }), _vm._v(" "), _c("span", [_vm._v(_vm._s(_vm.$t("AddQuote")))])])], 1) : _vm._e(), _vm._v(" "), _vm.currentUserPermissions && _vm.currentUserPermissions.includes("Quotations_view") ? _c("li", {
    staticClass: "submenu-item"
  }, [_c("router-link", {
    staticClass: "submenu-link",
    attrs: {
      to: "/app/quotations/list"
    }
  }, [_c("i", {
    staticClass: "submenu-icon i-Files"
  }), _vm._v(" "), _c("span", [_vm._v(_vm._s(_vm.$t("ListQuotations")))])])], 1) : _vm._e()]) : _vm._e()]), _vm._v(" "), _vm.currentUserPermissions && _vm.currentUserPermissions.includes("Purchase_Returns_view") ? _c("li", {
    staticClass: "nav-item",
    "class": {
      active: _vm.isActiveRoute("purchase_return")
    }
  }, [_c("router-link", {
    staticClass: "nav-link",
    attrs: {
      to: "/app/purchase_return/list"
    }
  }, [_c("i", {
    staticClass: "nav-icon i-Left"
  }), _vm._v(" "), !_vm.isCollapsed ? _c("span", {
    staticClass: "nav-text"
  }, [_vm._v(_vm._s(_vm.$t("PurchasesReturn")))]) : _vm._e()])], 1) : _vm._e(), _vm._v(" "), _c("li", {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: _vm.currentUserPermissions && (_vm.currentUserPermissions.includes("transfer_view") || _vm.currentUserPermissions.includes("transfer_add")),
      expression: "currentUserPermissions && (\n            currentUserPermissions.includes('transfer_view') ||\n            currentUserPermissions.includes('transfer_add')\n          )"
    }],
    staticClass: "nav-item",
    "class": {
      active: _vm.isActiveRoute("transfers"),
      "has-submenu": true,
      open: _vm.openMenus.includes("transfers")
    }
  }, [_c("a", {
    staticClass: "nav-link",
    attrs: {
      href: "#"
    },
    on: {
      click: function click($event) {
        $event.preventDefault();
        return _vm.toggleSubmenu("transfers");
      }
    }
  }, [_c("i", {
    staticClass: "nav-icon i-Back"
  }), _vm._v(" "), !_vm.isCollapsed ? _c("span", {
    staticClass: "nav-text"
  }, [_vm._v(_vm._s(_vm.$t("StockTransfers")))]) : _vm._e(), _vm._v(" "), !_vm.isCollapsed ? _c("i", {
    staticClass: "submenu-arrow i-Arrow-Down"
  }) : _vm._e()]), _vm._v(" "), _vm.openMenus.includes("transfers") && !_vm.isCollapsed ? _c("ul", {
    staticClass: "submenu"
  }, [_vm.currentUserPermissions && _vm.currentUserPermissions.includes("transfer_add") ? _c("li", {
    staticClass: "submenu-item"
  }, [_c("router-link", {
    staticClass: "submenu-link",
    attrs: {
      to: "/app/transfers/store"
    }
  }, [_c("i", {
    staticClass: "submenu-icon i-Add-File"
  }), _vm._v(" "), _c("span", [_vm._v(_vm._s(_vm.$t("CreateTransfer")))])])], 1) : _vm._e(), _vm._v(" "), _vm.currentUserPermissions && _vm.currentUserPermissions.includes("transfer_view") ? _c("li", {
    staticClass: "submenu-item"
  }, [_c("router-link", {
    staticClass: "submenu-link",
    attrs: {
      to: "/app/transfers/list"
    }
  }, [_c("i", {
    staticClass: "submenu-icon i-Files"
  }), _vm._v(" "), _c("span", [_vm._v(_vm._s(_vm.$t("ListTransfers")))])])], 1) : _vm._e()]) : _vm._e()]), _vm._v(" "), _c("li", {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: _vm.currentUserPermissions && _vm.currentUserPermissions.includes("damage_view"),
      expression: "currentUserPermissions && (\n            currentUserPermissions.includes('damage_view')\n          )"
    }],
    staticClass: "nav-item",
    "class": {
      active: _vm.isActiveRoute("damages"),
      "has-submenu": true,
      open: _vm.openMenus.includes("damages")
    }
  }, [_c("a", {
    staticClass: "nav-link",
    attrs: {
      href: "#"
    },
    on: {
      click: function click($event) {
        $event.preventDefault();
        return _vm.toggleSubmenu("damages");
      }
    }
  }, [_c("i", {
    staticClass: "nav-icon i-Remove-Bag"
  }), _vm._v(" "), !_vm.isCollapsed ? _c("span", {
    staticClass: "nav-text"
  }, [_vm._v(_vm._s(_vm.$t("Damages")))]) : _vm._e(), _vm._v(" "), !_vm.isCollapsed ? _c("i", {
    staticClass: "submenu-arrow i-Arrow-Down"
  }) : _vm._e()]), _vm._v(" "), _vm.openMenus.includes("damages") && !_vm.isCollapsed ? _c("ul", {
    staticClass: "submenu"
  }, [_vm.currentUserPermissions && _vm.currentUserPermissions.includes("damage_view") ? _c("li", {
    staticClass: "submenu-item"
  }, [_c("router-link", {
    staticClass: "submenu-link",
    attrs: {
      to: "/app/damages/store"
    }
  }, [_c("i", {
    staticClass: "submenu-icon i-Add-File"
  }), _vm._v(" "), _c("span", [_vm._v(_vm._s(_vm.$t("Create_Damage")))])])], 1) : _vm._e(), _vm._v(" "), _vm.currentUserPermissions && _vm.currentUserPermissions.includes("damage_view") ? _c("li", {
    staticClass: "submenu-item"
  }, [_c("router-link", {
    staticClass: "submenu-link",
    attrs: {
      to: "/app/damages/list"
    }
  }, [_c("i", {
    staticClass: "submenu-icon i-Files"
  }), _vm._v(" "), _c("span", [_vm._v(_vm._s(_vm.$t("Damages")))])])], 1) : _vm._e()]) : _vm._e()]), _vm._v(" "), _c("li", {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: _vm.currentUserPermissions && (_vm.currentUserPermissions.includes("company") || _vm.currentUserPermissions.includes("department") || _vm.currentUserPermissions.includes("designation") || _vm.currentUserPermissions.includes("office_shift") || _vm.currentUserPermissions.includes("view_employee") || _vm.currentUserPermissions.includes("attendance") || _vm.currentUserPermissions.includes("leave") || _vm.currentUserPermissions.includes("holiday") || _vm.currentUserPermissions.includes("payroll")),
      expression: "currentUserPermissions && (\n            currentUserPermissions.includes('company') ||\n            currentUserPermissions.includes('department') ||\n            currentUserPermissions.includes('designation') ||\n            currentUserPermissions.includes('office_shift') ||\n            currentUserPermissions.includes('view_employee') ||\n            currentUserPermissions.includes('attendance') ||\n            currentUserPermissions.includes('leave') ||\n            currentUserPermissions.includes('holiday') ||\n            currentUserPermissions.includes('payroll')\n          )"
    }],
    staticClass: "nav-item",
    "class": {
      active: _vm.isActiveRoute("hrm"),
      "has-submenu": true,
      open: _vm.openMenus.includes("hrm")
    }
  }, [_c("a", {
    staticClass: "nav-link",
    attrs: {
      href: "#"
    },
    on: {
      click: function click($event) {
        $event.preventDefault();
        return _vm.toggleSubmenu("hrm");
      }
    }
  }, [_c("i", {
    staticClass: "nav-icon i-Library"
  }), _vm._v(" "), !_vm.isCollapsed ? _c("span", {
    staticClass: "nav-text"
  }, [_vm._v(_vm._s(_vm.$t("hrm")))]) : _vm._e(), _vm._v(" "), !_vm.isCollapsed ? _c("i", {
    staticClass: "submenu-arrow i-Arrow-Down"
  }) : _vm._e()]), _vm._v(" "), _vm.openMenus.includes("hrm") && !_vm.isCollapsed ? _c("ul", {
    staticClass: "submenu"
  }, [_vm.currentUserPermissions && _vm.currentUserPermissions.includes("company") ? _c("li", {
    staticClass: "submenu-item"
  }, [_c("router-link", {
    staticClass: "submenu-link",
    attrs: {
      to: "/app/hrm/company"
    }
  }, [_c("i", {
    staticClass: "submenu-icon i-Management"
  }), _vm._v(" "), _c("span", [_vm._v(_vm._s(_vm.$t("Company")))])])], 1) : _vm._e(), _vm._v(" "), _vm.currentUserPermissions && _vm.currentUserPermissions.includes("department") ? _c("li", {
    staticClass: "submenu-item"
  }, [_c("router-link", {
    staticClass: "submenu-link",
    attrs: {
      to: "/app/hrm/departments"
    }
  }, [_c("i", {
    staticClass: "submenu-icon i-Shop"
  }), _vm._v(" "), _c("span", [_vm._v(_vm._s(_vm.$t("Departments")))])])], 1) : _vm._e(), _vm._v(" "), _vm.currentUserPermissions && _vm.currentUserPermissions.includes("designation") ? _c("li", {
    staticClass: "submenu-item"
  }, [_c("router-link", {
    staticClass: "submenu-link",
    attrs: {
      to: "/app/hrm/designations"
    }
  }, [_c("i", {
    staticClass: "submenu-icon i-Shutter"
  }), _vm._v(" "), _c("span", [_vm._v(_vm._s(_vm.$t("Designations")))])])], 1) : _vm._e(), _vm._v(" "), _vm.currentUserPermissions && _vm.currentUserPermissions.includes("office_shift") ? _c("li", {
    staticClass: "submenu-item"
  }, [_c("router-link", {
    staticClass: "submenu-link",
    attrs: {
      to: "/app/hrm/office_Shift"
    }
  }, [_c("i", {
    staticClass: "submenu-icon i-Clock"
  }), _vm._v(" "), _c("span", [_vm._v(_vm._s(_vm.$t("Office_Shift")))])])], 1) : _vm._e(), _vm._v(" "), _vm.currentUserPermissions && _vm.currentUserPermissions.includes("view_employee") ? _c("li", {
    staticClass: "submenu-item"
  }, [_c("router-link", {
    staticClass: "submenu-link",
    attrs: {
      to: "/app/hrm/employees"
    }
  }, [_c("i", {
    staticClass: "submenu-icon i-Engineering"
  }), _vm._v(" "), _c("span", [_vm._v(_vm._s(_vm.$t("Employees")))])])], 1) : _vm._e(), _vm._v(" "), _vm.currentUserPermissions && _vm.currentUserPermissions.includes("attendance") ? _c("li", {
    staticClass: "submenu-item"
  }, [_c("router-link", {
    staticClass: "submenu-link",
    attrs: {
      to: "/app/hrm/attendance"
    }
  }, [_c("i", {
    staticClass: "submenu-icon i-Clock"
  }), _vm._v(" "), _c("span", [_vm._v(_vm._s(_vm.$t("Attendance")))])])], 1) : _vm._e(), _vm._v(" "), _vm.currentUserPermissions && _vm.currentUserPermissions.includes("leave") ? _c("li", {
    staticClass: "submenu-item has-nested"
  }, [_c("a", {
    staticClass: "submenu-link",
    attrs: {
      href: "#"
    },
    on: {
      click: function click($event) {
        $event.preventDefault();
        return _vm.toggleNestedSubmenu("leave");
      }
    }
  }, [_c("i", {
    staticClass: "submenu-icon i-Calendar"
  }), _vm._v(" "), _c("span", [_vm._v(_vm._s(_vm.$t("Leave_request")))]), _vm._v(" "), _c("i", {
    staticClass: "nested-arrow i-Arrow-Down"
  })]), _vm._v(" "), _vm.openNestedMenus.includes("leave") ? _c("ul", {
    staticClass: "nested-submenu"
  }, [_c("li", [_c("router-link", {
    staticClass: "nested-link",
    attrs: {
      to: "/app/hrm/leaves/list"
    }
  }, [_vm._v(_vm._s(_vm.$t("Leave_request")))])], 1), _vm._v(" "), _c("li", [_c("router-link", {
    staticClass: "nested-link",
    attrs: {
      to: "/app/hrm/leaves/type"
    }
  }, [_vm._v(_vm._s(_vm.$t("Leave_type")))])], 1)]) : _vm._e()]) : _vm._e(), _vm._v(" "), _vm.currentUserPermissions && _vm.currentUserPermissions.includes("holiday") ? _c("li", {
    staticClass: "submenu-item"
  }, [_c("router-link", {
    staticClass: "submenu-link",
    attrs: {
      to: "/app/hrm/holidays"
    }
  }, [_c("i", {
    staticClass: "submenu-icon i-Christmas-Bell"
  }), _vm._v(" "), _c("span", [_vm._v(_vm._s(_vm.$t("Holidays")))])])], 1) : _vm._e(), _vm._v(" "), _vm.currentUserPermissions && _vm.currentUserPermissions.includes("payroll") ? _c("li", {
    staticClass: "submenu-item"
  }, [_c("router-link", {
    staticClass: "submenu-link",
    attrs: {
      to: "/app/hrm/payrolls"
    }
  }, [_c("i", {
    staticClass: "submenu-icon i-Money-2"
  }), _vm._v(" "), _c("span", [_vm._v(_vm._s(_vm.$t("Payroll")))])])], 1) : _vm._e()]) : _vm._e()]), _vm._v(" "), _c("li", {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: _vm.currentUserPermissions && (_vm.currentUserPermissions.includes("expense_view") || _vm.currentUserPermissions.includes("expense_add") || _vm.currentUserPermissions.includes("deposit_view") || _vm.currentUserPermissions.includes("deposit_add") || _vm.currentUserPermissions.includes("account") || _vm.currentUserPermissions.includes("transfer_money") || _vm.currentUserPermissions.includes("accounting_dashboard") || _vm.currentUserPermissions.includes("chart_of_accounts") || _vm.currentUserPermissions.includes("journal_entries") || _vm.currentUserPermissions.includes("trial_balance") || _vm.currentUserPermissions.includes("accounting_profit_loss") || _vm.currentUserPermissions.includes("balance_sheet") || _vm.currentUserPermissions.includes("accounting_tax_report")),
      expression: "currentUserPermissions && (\n            currentUserPermissions.includes('expense_view') ||\n            currentUserPermissions.includes('expense_add') ||\n            currentUserPermissions.includes('deposit_view') ||\n            currentUserPermissions.includes('deposit_add') ||\n            currentUserPermissions.includes('account') ||\n            currentUserPermissions.includes('transfer_money') ||\n            currentUserPermissions.includes('accounting_dashboard') ||\n            currentUserPermissions.includes('chart_of_accounts') ||\n            currentUserPermissions.includes('journal_entries') ||\n            currentUserPermissions.includes('trial_balance') ||\n            currentUserPermissions.includes('accounting_profit_loss') ||\n            currentUserPermissions.includes('balance_sheet') ||\n            currentUserPermissions.includes('accounting_tax_report')\n          )"
    }],
    staticClass: "nav-item",
    "class": {
      active: _vm.isActiveRoute("accounting"),
      "has-submenu": true,
      open: _vm.openMenus.includes("accounting")
    }
  }, [_c("a", {
    staticClass: "nav-link",
    attrs: {
      href: "#"
    },
    on: {
      click: function click($event) {
        $event.preventDefault();
        return _vm.toggleSubmenu("accounting");
      }
    }
  }, [_c("i", {
    staticClass: "nav-icon i-Wallet"
  }), _vm._v(" "), !_vm.isCollapsed ? _c("span", {
    staticClass: "nav-text"
  }, [_vm._v(_vm._s(_vm.$t("Accounting")))]) : _vm._e(), _vm._v(" "), !_vm.isCollapsed ? _c("i", {
    staticClass: "submenu-arrow i-Arrow-Down"
  }) : _vm._e()]), _vm._v(" "), _vm.openMenus.includes("accounting") && !_vm.isCollapsed ? _c("ul", {
    staticClass: "submenu"
  }, [_vm.currentUserPermissions && _vm.currentUserPermissions.includes("accounting_dashboard") ? _c("li", {
    staticClass: "submenu-item"
  }, [_c("router-link", {
    staticClass: "submenu-link",
    attrs: {
      to: "/app/accounting-v2/dashboard"
    }
  }, [_c("i", {
    staticClass: "submenu-icon i-Line-Chart"
  }), _vm._v(" "), _c("span", [_vm._v(_vm._s(_vm.$t("dashboard")))])])], 1) : _vm._e(), _vm._v(" "), _vm.currentUserPermissions && _vm.currentUserPermissions.includes("chart_of_accounts") ? _c("li", {
    staticClass: "submenu-item"
  }, [_c("router-link", {
    staticClass: "submenu-link",
    attrs: {
      to: "/app/accounting-v2/chart-of-accounts"
    }
  }, [_c("i", {
    staticClass: "submenu-icon i-Data"
  }), _vm._v(" "), _c("span", [_vm._v(_vm._s(_vm.$t("Chart_of_Accounts_Title")))])])], 1) : _vm._e(), _vm._v(" "), _vm.currentUserPermissions && _vm.currentUserPermissions.includes("journal_entries") ? _c("li", {
    staticClass: "submenu-item"
  }, [_c("router-link", {
    staticClass: "submenu-link",
    attrs: {
      to: "/app/accounting-v2/journal-entries"
    }
  }, [_c("i", {
    staticClass: "submenu-icon i-Files"
  }), _vm._v(" "), _c("span", [_vm._v(_vm._s(_vm.$t("Journal_Entries_Title")))])])], 1) : _vm._e(), _vm._v(" "), _vm.currentUserPermissions && _vm.currentUserPermissions.includes("journal_entries") ? _c("li", {
    staticClass: "submenu-item"
  }, [_c("router-link", {
    staticClass: "submenu-link",
    attrs: {
      to: "/app/accounting-v2/reports/trial-balance"
    }
  }, [_c("i", {
    staticClass: "submenu-icon i-Line-Chart"
  }), _vm._v(" "), _c("span", [_vm._v(_vm._s(_vm.$t("Trial_Balance_Title")))])])], 1) : _vm._e(), _vm._v(" "), _vm.currentUserPermissions && _vm.currentUserPermissions.includes("journal_entries") ? _c("li", {
    staticClass: "submenu-item"
  }, [_c("router-link", {
    staticClass: "submenu-link",
    attrs: {
      to: "/app/accounting-v2/reports/profit-and-loss"
    }
  }, [_c("i", {
    staticClass: "submenu-icon i-Money-Bag"
  }), _vm._v(" "), _c("span", [_vm._v(_vm._s(_vm.$t("Profit_Loss_Title")))])])], 1) : _vm._e(), _vm._v(" "), _vm.currentUserPermissions && _vm.currentUserPermissions.includes("journal_entries") ? _c("li", {
    staticClass: "submenu-item"
  }, [_c("router-link", {
    staticClass: "submenu-link",
    attrs: {
      to: "/app/accounting-v2/reports/balance-sheet"
    }
  }, [_c("i", {
    staticClass: "submenu-icon i-Pie-Chart"
  }), _vm._v(" "), _c("span", [_vm._v(_vm._s(_vm.$t("Balance_Sheet_Title")))])])], 1) : _vm._e(), _vm._v(" "), _vm.currentUserPermissions && _vm.currentUserPermissions.includes("accounting_tax_report") ? _c("li", {
    staticClass: "submenu-item"
  }, [_c("router-link", {
    staticClass: "submenu-link",
    attrs: {
      to: "/app/accounting-v2/reports/tax-report"
    }
  }, [_c("i", {
    staticClass: "submenu-icon i-Receipt-4"
  }), _vm._v(" "), _c("span", [_vm._v(_vm._s(_vm.$t("Tax_Summary_Report")))])])], 1) : _vm._e(), _vm._v(" "), _vm.currentUserPermissions && _vm.currentUserPermissions.includes("account") ? _c("li", {
    staticClass: "submenu-item"
  }, [_c("router-link", {
    staticClass: "submenu-link",
    attrs: {
      to: "/app/accounts"
    }
  }, [_c("i", {
    staticClass: "submenu-icon i-Files"
  }), _vm._v(" "), _c("span", [_vm._v(_vm._s(_vm.$t("List_accounts")))])])], 1) : _vm._e(), _vm._v(" "), _vm.currentUserPermissions && _vm.currentUserPermissions.includes("transfer_money") ? _c("li", {
    staticClass: "submenu-item"
  }, [_c("router-link", {
    staticClass: "submenu-link",
    attrs: {
      to: "/app/transfer_money"
    }
  }, [_c("i", {
    staticClass: "submenu-icon i-Files"
  }), _vm._v(" "), _c("span", [_vm._v(_vm._s(_vm.$t("Transfers_Money")))])])], 1) : _vm._e(), _vm._v(" "), _vm.currentUserPermissions && _vm.currentUserPermissions.includes("expense_add") ? _c("li", {
    staticClass: "submenu-item"
  }, [_c("router-link", {
    staticClass: "submenu-link",
    attrs: {
      to: "/app/expenses/store"
    }
  }, [_c("i", {
    staticClass: "submenu-icon i-Add-File"
  }), _vm._v(" "), _c("span", [_vm._v(_vm._s(_vm.$t("Create_Expense")))])])], 1) : _vm._e(), _vm._v(" "), _vm.currentUserPermissions && _vm.currentUserPermissions.includes("expense_view") ? _c("li", {
    staticClass: "submenu-item"
  }, [_c("router-link", {
    staticClass: "submenu-link",
    attrs: {
      to: "/app/expenses/list"
    }
  }, [_c("i", {
    staticClass: "submenu-icon i-Files"
  }), _vm._v(" "), _c("span", [_vm._v(_vm._s(_vm.$t("ListExpenses")))])])], 1) : _vm._e(), _vm._v(" "), _vm.currentUserPermissions && _vm.currentUserPermissions.includes("deposit_add") ? _c("li", {
    staticClass: "submenu-item"
  }, [_c("router-link", {
    staticClass: "submenu-link",
    attrs: {
      to: "/app/deposits/store"
    }
  }, [_c("i", {
    staticClass: "submenu-icon i-Add-File"
  }), _vm._v(" "), _c("span", [_vm._v(_vm._s(_vm.$t("Create_deposit")))])])], 1) : _vm._e(), _vm._v(" "), _vm.currentUserPermissions && _vm.currentUserPermissions.includes("deposit_view") ? _c("li", {
    staticClass: "submenu-item"
  }, [_c("router-link", {
    staticClass: "submenu-link",
    attrs: {
      to: "/app/deposits/list"
    }
  }, [_c("i", {
    staticClass: "submenu-icon i-Files"
  }), _vm._v(" "), _c("span", [_vm._v(_vm._s(_vm.$t("List_Deposit")))])])], 1) : _vm._e(), _vm._v(" "), _vm.currentUserPermissions && _vm.currentUserPermissions.includes("expense_view") ? _c("li", {
    staticClass: "submenu-item"
  }, [_c("router-link", {
    staticClass: "submenu-link",
    attrs: {
      to: "/app/expenses/category"
    }
  }, [_c("i", {
    staticClass: "submenu-icon i-Files"
  }), _vm._v(" "), _c("span", [_vm._v(_vm._s(_vm.$t("Expense_Category")))])])], 1) : _vm._e(), _vm._v(" "), _vm.currentUserPermissions && _vm.currentUserPermissions.includes("deposit_view") ? _c("li", {
    staticClass: "submenu-item"
  }, [_c("router-link", {
    staticClass: "submenu-link",
    attrs: {
      to: "/app/deposits/category"
    }
  }, [_c("i", {
    staticClass: "submenu-icon i-Files"
  }), _vm._v(" "), _c("span", [_vm._v(_vm._s(_vm.$t("Deposit_Category")))])])], 1) : _vm._e()]) : _vm._e()]), _vm._v(" "), _vm.currentUserPermissions && _vm.currentUserPermissions.includes("subscription_product") ? _c("li", {
    staticClass: "nav-item",
    "class": {
      active: _vm.isActiveRoute("subscription_product")
    }
  }, [_c("router-link", {
    staticClass: "nav-link",
    attrs: {
      to: "/app/subscription_product/list"
    }
  }, [_c("i", {
    staticClass: "nav-icon i-Dollar"
  }), _vm._v(" "), !_vm.isCollapsed ? _c("span", {
    staticClass: "nav-text"
  }, [_vm._v(_vm._s(_vm.$t("Subscription_Product")))]) : _vm._e()])], 1) : _vm._e(), _vm._v(" "), _c("li", {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: _vm.currentUserPermissions && _vm.currentUserPermissions.includes("service_jobs"),
      expression: "currentUserPermissions && currentUserPermissions.includes('service_jobs')"
    }],
    staticClass: "nav-item",
    "class": {
      active: _vm.isActiveRoute("service"),
      "has-submenu": true,
      open: _vm.openMenus.includes("service")
    }
  }, [_c("a", {
    staticClass: "nav-link",
    attrs: {
      href: "#"
    },
    on: {
      click: function click($event) {
        $event.preventDefault();
        return _vm.toggleSubmenu("service");
      }
    }
  }, [_c("i", {
    staticClass: "nav-icon i-Repair"
  }), _vm._v(" "), !_vm.isCollapsed ? _c("span", {
    staticClass: "nav-text"
  }, [_vm._v(_vm._s(_vm.$t("Service_Maintenance")))]) : _vm._e(), _vm._v(" "), !_vm.isCollapsed ? _c("i", {
    staticClass: "submenu-arrow i-Arrow-Down"
  }) : _vm._e()]), _vm._v(" "), _vm.openMenus.includes("service") && !_vm.isCollapsed ? _c("ul", {
    staticClass: "submenu"
  }, [_c("li", {
    staticClass: "submenu-item"
  }, [_c("router-link", {
    staticClass: "submenu-link",
    attrs: {
      to: "/app/service/jobs"
    }
  }, [_c("i", {
    staticClass: "submenu-icon i-Files"
  }), _vm._v(" "), _c("span", [_vm._v(_vm._s(_vm.$t("Service_Jobs")))])])], 1), _vm._v(" "), _c("li", {
    staticClass: "submenu-item"
  }, [_c("router-link", {
    staticClass: "submenu-link",
    attrs: {
      to: "/app/service/technicians"
    }
  }, [_c("i", {
    staticClass: "submenu-icon i-Files"
  }), _vm._v(" "), _c("span", [_vm._v(_vm._s(_vm.$t("Service_Technicians")))])])], 1), _vm._v(" "), _c("li", {
    staticClass: "submenu-item"
  }, [_c("router-link", {
    staticClass: "submenu-link",
    attrs: {
      to: "/app/service/checklist-categories"
    }
  }, [_c("i", {
    staticClass: "submenu-icon i-Folder"
  }), _vm._v(" "), _c("span", [_vm._v(_vm._s(_vm.$t("Checklist_Categories")))])])], 1), _vm._v(" "), _c("li", {
    staticClass: "submenu-item"
  }, [_c("router-link", {
    staticClass: "submenu-link",
    attrs: {
      to: "/app/service/checklists"
    }
  }, [_c("i", {
    staticClass: "submenu-icon i-Check"
  }), _vm._v(" "), _c("span", [_vm._v(_vm._s(_vm.$t("Checklist_Items")))])])], 1), _vm._v(" "), _c("li", {
    staticClass: "submenu-item"
  }, [_c("router-link", {
    staticClass: "submenu-link",
    attrs: {
      to: "/app/service/history"
    }
  }, [_c("i", {
    staticClass: "submenu-icon i-Calendar-4"
  }), _vm._v(" "), _c("span", [_vm._v(_vm._s(_vm.$t("Maintenance_History")))])])], 1)]) : _vm._e()]), _vm._v(" "), _c("li", {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: _vm.currentUserPermissions && _vm.currentUserPermissions.includes("assets"),
      expression: "currentUserPermissions && currentUserPermissions.includes('assets')"
    }],
    staticClass: "nav-item",
    "class": {
      active: _vm.isActiveRoute("assets"),
      "has-submenu": true,
      open: _vm.openMenus.includes("assets")
    }
  }, [_c("a", {
    staticClass: "nav-link",
    attrs: {
      href: "#"
    },
    on: {
      click: function click($event) {
        $event.preventDefault();
        return _vm.toggleSubmenu("assets");
      }
    }
  }, [_c("i", {
    staticClass: "nav-icon i-Gear"
  }), _vm._v(" "), !_vm.isCollapsed ? _c("span", {
    staticClass: "nav-text"
  }, [_vm._v(_vm._s(_vm.$t("Assets")))]) : _vm._e(), _vm._v(" "), !_vm.isCollapsed ? _c("i", {
    staticClass: "submenu-arrow i-Arrow-Down"
  }) : _vm._e()]), _vm._v(" "), _vm.openMenus.includes("assets") && !_vm.isCollapsed ? _c("ul", {
    staticClass: "submenu"
  }, [_c("li", {
    staticClass: "submenu-item"
  }, [_c("router-link", {
    staticClass: "submenu-link",
    attrs: {
      to: "/app/assets/store"
    }
  }, [_c("i", {
    staticClass: "submenu-icon i-Add-File"
  }), _vm._v(" "), _c("span", [_vm._v(_vm._s(_vm.$t("Add_Asset")))])])], 1), _vm._v(" "), _c("li", {
    staticClass: "submenu-item"
  }, [_c("router-link", {
    staticClass: "submenu-link",
    attrs: {
      to: "/app/assets/list"
    }
  }, [_c("i", {
    staticClass: "submenu-icon i-Files"
  }), _vm._v(" "), _c("span", [_vm._v(_vm._s(_vm.$t("Assets_List")))])])], 1), _vm._v(" "), _c("li", {
    staticClass: "submenu-item"
  }, [_c("router-link", {
    staticClass: "submenu-link",
    attrs: {
      to: "/app/assets/category"
    }
  }, [_c("i", {
    staticClass: "submenu-icon i-Folder"
  }), _vm._v(" "), _c("span", [_vm._v(_vm._s(_vm.$t("Asset_Category")))])])], 1)]) : _vm._e()]), _vm._v(" "), _c("li", {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: _vm.currentUserPermissions && _vm.currentUserPermissions.includes("projects"),
      expression: "currentUserPermissions && currentUserPermissions.includes('projects')"
    }],
    staticClass: "nav-item",
    "class": {
      active: _vm.isActiveRoute("projects")
    }
  }, [_c("router-link", {
    staticClass: "nav-link",
    attrs: {
      to: "/app/projects"
    }
  }, [_c("i", {
    staticClass: "nav-icon i-Dropbox"
  }), _vm._v(" "), !_vm.isCollapsed ? _c("span", {
    staticClass: "nav-text"
  }, [_vm._v(_vm._s(_vm.$t("Projects")))]) : _vm._e()])], 1), _vm._v(" "), _c("li", {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: _vm.currentUserPermissions && _vm.currentUserPermissions.includes("tasks"),
      expression: "currentUserPermissions && currentUserPermissions.includes('tasks')"
    }],
    staticClass: "nav-item",
    "class": {
      active: _vm.isActiveRoute("tasks")
    }
  }, [_c("router-link", {
    staticClass: "nav-link",
    attrs: {
      to: "/app/tasks"
    }
  }, [_c("i", {
    staticClass: "nav-icon i-Check"
  }), _vm._v(" "), !_vm.isCollapsed ? _c("span", {
    staticClass: "nav-text"
  }, [_vm._v(_vm._s(_vm.$t("Tasks")))]) : _vm._e()])], 1), _vm._v(" "), _c("li", {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: _vm.currentUserPermissions && _vm.currentUserPermissions.includes("bookings"),
      expression: "currentUserPermissions && currentUserPermissions.includes('bookings')"
    }],
    staticClass: "nav-item",
    "class": {
      active: _vm.isActiveRoute("bookings"),
      "has-submenu": true,
      open: _vm.openMenus.includes("bookings")
    }
  }, [_c("a", {
    staticClass: "nav-link",
    attrs: {
      href: "#"
    },
    on: {
      click: function click($event) {
        $event.preventDefault();
        return _vm.toggleSubmenu("bookings");
      }
    }
  }, [_c("i", {
    staticClass: "nav-icon i-Calendar-4"
  }), _vm._v(" "), !_vm.isCollapsed ? _c("span", {
    staticClass: "nav-text"
  }, [_vm._v(_vm._s(_vm.$t("Bookings")))]) : _vm._e(), _vm._v(" "), !_vm.isCollapsed ? _c("i", {
    staticClass: "submenu-arrow i-Arrow-Down"
  }) : _vm._e()]), _vm._v(" "), _vm.openMenus.includes("bookings") && !_vm.isCollapsed ? _c("ul", {
    staticClass: "submenu"
  }, [_vm.currentUserPermissions && _vm.currentUserPermissions.includes("bookings") ? _c("li", {
    staticClass: "submenu-item"
  }, [_c("router-link", {
    staticClass: "submenu-link",
    attrs: {
      to: "/app/bookings/list"
    }
  }, [_c("i", {
    staticClass: "submenu-icon i-Files"
  }), _vm._v(" "), _c("span", [_vm._v(_vm._s(_vm.$t("Booking_List") || "Booking List"))])])], 1) : _vm._e(), _vm._v(" "), _vm.currentUserPermissions && _vm.currentUserPermissions.includes("bookings") ? _c("li", {
    staticClass: "submenu-item"
  }, [_c("router-link", {
    staticClass: "submenu-link",
    attrs: {
      to: "/app/bookings/calendar"
    }
  }, [_c("i", {
    staticClass: "submenu-icon i-Calendar-4"
  }), _vm._v(" "), _c("span", [_vm._v(_vm._s(_vm.$t("Calendar_View")))])])], 1) : _vm._e()]) : _vm._e()]), _vm._v(" "), _vm.currentUserPermissions && _vm.currentUserPermissions.includes("woocommerce_settings") ? _c("li", {
    staticClass: "nav-item",
    "class": {
      active: _vm.isActiveRoute("woocommerce_settings")
    }
  }, [_c("router-link", {
    staticClass: "nav-link",
    attrs: {
      to: "/app/woocommerce"
    }
  }, [_c("i", {
    staticClass: "nav-icon i-Shopping-Cart"
  }), _vm._v(" "), !_vm.isCollapsed ? _c("span", {
    staticClass: "nav-text"
  }, [_vm._v(_vm._s(_vm.$t("WooCommerce_Settings")))]) : _vm._e()])], 1) : _vm._e(), _vm._v(" "), _c("li", {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: _vm.currentUserPermissions && (_vm.currentUserPermissions.includes("setting_system") || _vm.currentUserPermissions.includes("update_settings") || _vm.currentUserPermissions.includes("sms_settings") || _vm.currentUserPermissions.includes("login_device_management") || _vm.currentUserPermissions.includes("notification_template") || _vm.currentUserPermissions.includes("pos_settings") || _vm.currentUserPermissions.includes("appearance_settings") || _vm.currentUserPermissions.includes("translations_settings") || _vm.currentUserPermissions.includes("module_settings") || _vm.currentUserPermissions.includes("quickbooks_settings") || _vm.currentUserPermissions.includes("payment_gateway") || _vm.currentUserPermissions.includes("mail_settings") || _vm.currentUserPermissions.includes("warehouse") || _vm.currentUserPermissions.includes("backup") || _vm.currentUserPermissions.includes("payment_methods") || _vm.currentUserPermissions.includes("currency")),
      expression: "currentUserPermissions && (  \n            currentUserPermissions.includes('setting_system') ||\n            currentUserPermissions.includes('update_settings') ||\n            currentUserPermissions.includes('sms_settings') ||\n            currentUserPermissions.includes('login_device_management') ||\n            currentUserPermissions.includes('notification_template') ||\n            currentUserPermissions.includes('pos_settings') ||\n            currentUserPermissions.includes('appearance_settings') ||\n            currentUserPermissions.includes('translations_settings') ||\n            currentUserPermissions.includes('module_settings') ||\n            currentUserPermissions.includes('quickbooks_settings') ||\n            currentUserPermissions.includes('payment_gateway') ||\n            currentUserPermissions.includes('mail_settings') ||\n            currentUserPermissions.includes('warehouse') ||\n            currentUserPermissions.includes('backup') ||\n            currentUserPermissions.includes('payment_methods') ||\n            currentUserPermissions.includes('currency')\n          )"
    }],
    staticClass: "nav-item",
    "class": {
      active: _vm.isActiveRoute("settings"),
      "has-submenu": true,
      open: _vm.openMenus.includes("settings")
    }
  }, [_c("a", {
    staticClass: "nav-link",
    attrs: {
      href: "#"
    },
    on: {
      click: function click($event) {
        $event.preventDefault();
        return _vm.toggleSubmenu("settings");
      }
    }
  }, [_c("i", {
    staticClass: "nav-icon i-Data-Settings"
  }), _vm._v(" "), !_vm.isCollapsed ? _c("span", {
    staticClass: "nav-text"
  }, [_vm._v(_vm._s(_vm.$t("Settings")))]) : _vm._e(), _vm._v(" "), !_vm.isCollapsed ? _c("i", {
    staticClass: "submenu-arrow i-Arrow-Down"
  }) : _vm._e()]), _vm._v(" "), _vm.openMenus.includes("settings") && !_vm.isCollapsed ? _c("ul", {
    staticClass: "submenu"
  }, [_vm.currentUserPermissions && _vm.currentUserPermissions.includes("setting_system") ? _c("li", {
    staticClass: "submenu-item"
  }, [_c("router-link", {
    staticClass: "submenu-link",
    attrs: {
      to: "/app/settings/System_settings"
    }
  }, [_c("i", {
    staticClass: "submenu-icon i-Gear"
  }), _vm._v(" "), _c("span", [_vm._v(_vm._s(_vm.$t("SystemSettings")))])])], 1) : _vm._e(), _vm._v(" "), _vm.currentUserPermissions && _vm.currentUserPermissions.includes("quickbooks_settings") ? _c("li", {
    staticClass: "submenu-item"
  }, [_c("router-link", {
    staticClass: "submenu-link",
    attrs: {
      to: "/app/settings/quickbooks_sync"
    }
  }, [_c("i", {
    staticClass: "submenu-icon i-Money-2"
  }), _vm._v(" "), _c("span", [_vm._v(_vm._s(_vm.$t("Quickbooks_Sync")))])])], 1) : _vm._e(), _vm._v(" "), _vm.currentUserPermissions && _vm.currentUserPermissions.includes("appearance_settings") ? _c("li", {
    staticClass: "submenu-item"
  }, [_c("router-link", {
    staticClass: "submenu-link",
    attrs: {
      to: "/app/settings/appearance_settings"
    }
  }, [_c("i", {
    staticClass: "submenu-icon i-Data-Settings"
  }), _vm._v(" "), _c("span", [_vm._v(_vm._s(_vm.$t("Dynamic_Appearance")))])])], 1) : _vm._e(), _vm._v(" "), _vm.currentUserPermissions && _vm.currentUserPermissions.includes("translations_settings") ? _c("li", {
    staticClass: "submenu-item"
  }, [_c("router-link", {
    staticClass: "submenu-link",
    attrs: {
      to: "/app/settings/translations_settings"
    }
  }, [_c("i", {
    staticClass: "submenu-icon i-Data-Settings"
  }), _vm._v(" "), _c("span", [_vm._v(_vm._s(_vm.$t("Languages")))])])], 1) : _vm._e(), _vm._v(" "), _vm.currentUserPermissions && _vm.currentUserPermissions.includes("payment_methods") ? _c("li", {
    staticClass: "submenu-item"
  }, [_c("router-link", {
    staticClass: "submenu-link",
    attrs: {
      to: "/app/settings/payment_methods"
    }
  }, [_c("i", {
    staticClass: "submenu-icon i-Money-2"
  }), _vm._v(" "), _c("span", [_vm._v(_vm._s(_vm.$t("Payment_Methods")))])])], 1) : _vm._e(), _vm._v(" "), _vm.currentUserPermissions && _vm.currentUserPermissions.includes("sms_settings") ? _c("li", {
    staticClass: "submenu-item"
  }, [_c("router-link", {
    staticClass: "submenu-link",
    attrs: {
      to: "/app/settings/sms_settings"
    }
  }, [_c("i", {
    staticClass: "submenu-icon i-Speach-Bubble"
  }), _vm._v(" "), _c("span", [_vm._v(_vm._s(_vm.$t("sms_settings")))])])], 1) : _vm._e(), _vm._v(" "), _vm.currentUserPermissions && _vm.currentUserPermissions.includes("notification_template") ? _c("li", {
    staticClass: "submenu-item"
  }, [_c("router-link", {
    staticClass: "submenu-link",
    attrs: {
      to: "/app/settings/sms_templates"
    }
  }, [_c("i", {
    staticClass: "submenu-icon i-Speach-Bubble"
  }), _vm._v(" "), _c("span", [_vm._v(_vm._s(_vm.$t("sms_templates")))])])], 1) : _vm._e(), _vm._v(" "), _vm.currentUserPermissions && _vm.currentUserPermissions.includes("mail_settings") ? _c("li", {
    staticClass: "submenu-item"
  }, [_c("router-link", {
    staticClass: "submenu-link",
    attrs: {
      to: "/app/settings/mail_settings"
    }
  }, [_c("i", {
    staticClass: "submenu-icon i-Email"
  }), _vm._v(" "), _c("span", [_vm._v(_vm._s(_vm.$t("mail_settings")))])])], 1) : _vm._e(), _vm._v(" "), _vm.currentUserPermissions && _vm.currentUserPermissions.includes("notification_template") ? _c("li", {
    staticClass: "submenu-item"
  }, [_c("router-link", {
    staticClass: "submenu-link",
    attrs: {
      to: "/app/settings/email_templates"
    }
  }, [_c("i", {
    staticClass: "submenu-icon i-Email"
  }), _vm._v(" "), _c("span", [_vm._v(_vm._s(_vm.$t("email_templates")))])])], 1) : _vm._e(), _vm._v(" "), _vm.currentUserPermissions && _vm.currentUserPermissions.includes("pos_settings") ? _c("li", {
    staticClass: "submenu-item"
  }, [_c("router-link", {
    staticClass: "submenu-link",
    attrs: {
      to: "/app/settings/pos_settings"
    }
  }, [_c("i", {
    staticClass: "submenu-icon i-Data-Settings"
  }), _vm._v(" "), _c("span", [_vm._v(_vm._s(_vm.$t("Pos_Settings")))])])], 1) : _vm._e(), _vm._v(" "), _vm.currentUserPermissions && _vm.currentUserPermissions.includes("pos_settings") ? _c("li", {
    staticClass: "submenu-item"
  }, [_c("router-link", {
    staticClass: "submenu-link",
    attrs: {
      to: "/app/settings/pos_receipt"
    }
  }, [_c("i", {
    staticClass: "submenu-icon i-Cash-Register"
  }), _vm._v(" "), _c("span", [_vm._v(_vm._s(_vm.$t("POS_Receipt")))])])], 1) : _vm._e(), _vm._v(" "), _vm.currentUserPermissions && _vm.currentUserPermissions.includes("module_settings") ? _c("li", {
    staticClass: "submenu-item"
  }, [_c("router-link", {
    staticClass: "submenu-link",
    attrs: {
      to: "/app/settings/module_settings"
    }
  }, [_c("i", {
    staticClass: "submenu-icon i-Data-Settings"
  }), _vm._v(" "), _c("span", [_vm._v(_vm._s(_vm.$t("module_settings")))])])], 1) : _vm._e(), _vm._v(" "), _vm.currentUserPermissions && _vm.currentUserPermissions.includes("update_settings") ? _c("li", {
    staticClass: "submenu-item"
  }, [_c("router-link", {
    staticClass: "submenu-link",
    attrs: {
      to: "/app/settings/update_settings"
    }
  }, [_c("i", {
    staticClass: "submenu-icon i-Upgrade"
  }), _vm._v(" "), _c("span", [_vm._v(_vm._s(_vm.$t("update_settings")))])])], 1) : _vm._e(), _vm._v(" "), _vm.currentUserPermissions && _vm.currentUserPermissions.includes("payment_gateway") ? _c("li", {
    staticClass: "submenu-item"
  }, [_c("router-link", {
    staticClass: "submenu-link",
    attrs: {
      to: "/app/settings/payment_gateway"
    }
  }, [_c("i", {
    staticClass: "submenu-icon i-Money-2"
  }), _vm._v(" "), _c("span", [_vm._v(_vm._s(_vm.$t("Payment_Gateway")))])])], 1) : _vm._e(), _vm._v(" "), _vm.currentUserPermissions && _vm.currentUserPermissions.includes("warehouse") ? _c("li", {
    staticClass: "submenu-item"
  }, [_c("router-link", {
    staticClass: "submenu-link",
    attrs: {
      to: "/app/settings/Warehouses"
    }
  }, [_c("i", {
    staticClass: "submenu-icon i-Clothing-Store"
  }), _vm._v(" "), _c("span", [_vm._v(_vm._s(_vm.$t("Warehouses")))])])], 1) : _vm._e(), _vm._v(" "), _vm.currentUserPermissions && _vm.currentUserPermissions.includes("currency") ? _c("li", {
    staticClass: "submenu-item"
  }, [_c("router-link", {
    staticClass: "submenu-link",
    attrs: {
      to: "/app/settings/Currencies"
    }
  }, [_c("i", {
    staticClass: "submenu-icon i-Dollar-Sign"
  }), _vm._v(" "), _c("span", [_vm._v(_vm._s(_vm.$t("Currencies")))])])], 1) : _vm._e(), _vm._v(" "), _vm.currentUserPermissions && _vm.currentUserPermissions.includes("backup") ? _c("li", {
    staticClass: "submenu-item"
  }, [_c("router-link", {
    staticClass: "submenu-link",
    attrs: {
      to: "/app/settings/Backup"
    }
  }, [_c("i", {
    staticClass: "submenu-icon i-Data-Backup"
  }), _vm._v(" "), _c("span", [_vm._v(_vm._s(_vm.$t("Backup")))])])], 1) : _vm._e(), _vm._v(" "), _vm.currentUserPermissions && _vm.currentUserPermissions.includes("login_device_management") ? _c("li", {
    staticClass: "submenu-item"
  }, [_c("router-link", {
    staticClass: "submenu-link",
    attrs: {
      to: "/app/settings/login_devices"
    }
  }, [_c("i", {
    staticClass: "submenu-icon i-Lock-2"
  }), _vm._v(" "), _c("span", [_vm._v(_vm._s(_vm.$t("Login_Device_Management")))])])], 1) : _vm._e()]) : _vm._e()]), _vm._v(" "), _c("li", {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: _vm.currentUserPermissions && _vm.currentUserPermissions.includes("AI_Reports"),
      expression: "currentUserPermissions && currentUserPermissions.includes('AI_Reports')"
    }],
    staticClass: "nav-item",
    "class": {
      active: _vm.isActiveRoute("ai_reports")
    }
  }, [_c("router-link", {
    staticClass: "nav-link",
    attrs: {
      to: "/app/reports/ai_reports"
    }
  }, [_c("i", {
    staticClass: "nav-icon i-Light-Bulb"
  }), _vm._v(" "), !_vm.isCollapsed ? _c("span", {
    staticClass: "nav-text"
  }, [_vm._v(_vm._s(_vm.$t("AI_Reports") || "AI Reports"))]) : _vm._e()])], 1), _vm._v(" "), _c("li", {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: _vm.hasReportsPermission,
      expression: "hasReportsPermission"
    }],
    staticClass: "nav-item",
    "class": {
      active: _vm.isActiveRoute("reports"),
      "has-submenu": true,
      open: _vm.openMenus.includes("reports")
    }
  }, [_c("a", {
    staticClass: "nav-link",
    attrs: {
      href: "#"
    },
    on: {
      click: function click($event) {
        $event.preventDefault();
        return _vm.toggleSubmenu("reports");
      }
    }
  }, [_c("i", {
    staticClass: "nav-icon i-Line-Chart"
  }), _vm._v(" "), !_vm.isCollapsed ? _c("span", {
    staticClass: "nav-text"
  }, [_vm._v(_vm._s(_vm.$t("Reports")))]) : _vm._e(), _vm._v(" "), !_vm.isCollapsed ? _c("i", {
    staticClass: "submenu-arrow i-Arrow-Down"
  }) : _vm._e()]), _vm._v(" "), _vm.openMenus.includes("reports") && !_vm.isCollapsed ? _c("ul", {
    staticClass: "submenu"
  }, [_vm.hasPaymentReportsPermission ? _c("li", {
    staticClass: "submenu-item has-nested"
  }, [_c("a", {
    staticClass: "submenu-link",
    attrs: {
      href: "#"
    },
    on: {
      click: function click($event) {
        $event.preventDefault();
        return _vm.toggleNestedSubmenu("payments");
      }
    }
  }, [_c("i", {
    staticClass: "submenu-icon i-Credit-Card"
  }), _vm._v(" "), _c("span", [_vm._v(_vm._s(_vm.$t("Payments")))]), _vm._v(" "), _c("i", {
    staticClass: "nested-arrow i-Arrow-Down"
  })]), _vm._v(" "), _vm.openNestedMenus.includes("payments") ? _c("ul", {
    staticClass: "nested-submenu"
  }, [_vm.currentUserPermissions && _vm.currentUserPermissions.includes("Reports_payments_Purchases") ? _c("li", [_c("router-link", {
    staticClass: "nested-link",
    attrs: {
      to: "/app/reports/payments_purchase"
    }
  }, [_vm._v(_vm._s(_vm.$t("Purchases")))])], 1) : _vm._e(), _vm._v(" "), _vm.currentUserPermissions && _vm.currentUserPermissions.includes("Reports_payments_Sales") ? _c("li", [_c("router-link", {
    staticClass: "nested-link",
    attrs: {
      to: "/app/reports/payments_sale"
    }
  }, [_vm._v(_vm._s(_vm.$t("Sales")))])], 1) : _vm._e(), _vm._v(" "), _vm.currentUserPermissions && _vm.currentUserPermissions.includes("Reports_payments_Sale_Returns") ? _c("li", [_c("router-link", {
    staticClass: "nested-link",
    attrs: {
      to: "/app/reports/payments_sales_returns"
    }
  }, [_vm._v(_vm._s(_vm.$t("SalesReturn")))])], 1) : _vm._e(), _vm._v(" "), _vm.currentUserPermissions && _vm.currentUserPermissions.includes("Reports_payments_purchase_Return") ? _c("li", [_c("router-link", {
    staticClass: "nested-link",
    attrs: {
      to: "/app/reports/payments_purchases_returns"
    }
  }, [_vm._v(_vm._s(_vm.$t("PurchasesReturn")))])], 1) : _vm._e()]) : _vm._e()]) : _vm._e(), _vm._v(" "), _vm.currentUserPermissions && _vm.currentUserPermissions.includes("report_transactions") ? _c("li", {
    staticClass: "submenu-item"
  }, [_c("router-link", {
    staticClass: "submenu-link",
    attrs: {
      to: "/app/reports/report_transactions"
    }
  }, [_c("i", {
    staticClass: "submenu-icon i-Dollar"
  }), _vm._v(" "), _c("span", [_vm._v(_vm._s(_vm.$t("Report_Transactions")))])])], 1) : _vm._e(), _vm._v(" "), _vm.currentUserPermissions && _vm.currentUserPermissions.includes("cash_flow_report") ? _c("li", {
    staticClass: "submenu-item"
  }, [_c("router-link", {
    staticClass: "submenu-link",
    attrs: {
      to: "/app/reports/cash_flow_report"
    }
  }, [_c("i", {
    staticClass: "submenu-icon i-Line-Chart"
  }), _vm._v(" "), _c("span", [_vm._v(_vm._s(_vm.$t("Cash_Flow_Report")))])])], 1) : _vm._e(), _vm._v(" "), _vm.currentUserPermissions && _vm.currentUserPermissions.includes("seller_report") ? _c("li", {
    staticClass: "submenu-item"
  }, [_c("router-link", {
    staticClass: "submenu-link",
    attrs: {
      to: "/app/reports/seller_report"
    }
  }, [_c("i", {
    staticClass: "submenu-icon i-User"
  }), _vm._v(" "), _c("span", [_vm._v(_vm._s(_vm.$t("Seller_report")))])])], 1) : _vm._e(), _vm._v(" "), _vm.currentUserPermissions && _vm.currentUserPermissions.includes("report_attendance_summary") ? _c("li", {
    staticClass: "submenu-item"
  }, [_c("router-link", {
    staticClass: "submenu-link",
    attrs: {
      to: {
        name: "attendance_report"
      }
    }
  }, [_c("i", {
    staticClass: "submenu-icon i-Clock"
  }), _vm._v(" "), _c("span", [_vm._v(_vm._s(_vm.$t("attendance_summary")))])])], 1) : _vm._e(), _vm._v(" "), _vm.currentUserPermissions && _vm.currentUserPermissions.includes("Reports_profit") ? _c("li", {
    staticClass: "submenu-item"
  }, [_c("router-link", {
    staticClass: "submenu-link",
    attrs: {
      to: "/app/reports/profit_and_loss"
    }
  }, [_c("i", {
    staticClass: "submenu-icon i-Money-Bag"
  }), _vm._v(" "), _c("span", [_vm._v(_vm._s(_vm.$t("ProfitandLoss")))])])], 1) : _vm._e(), _vm._v(" "), _vm.currentUserPermissions && _vm.currentUserPermissions.includes("return_ratio_report") ? _c("li", {
    staticClass: "submenu-item"
  }, [_c("router-link", {
    staticClass: "submenu-link",
    attrs: {
      to: "/app/reports/return_ratio_report"
    }
  }, [_c("i", {
    staticClass: "submenu-icon i-Line-Chart"
  }), _vm._v(" "), _c("span", [_vm._v(_vm._s(_vm.$t("Return_Ratio_Report")))])])], 1) : _vm._e(), _vm._v(" "), _vm.currentUserPermissions && _vm.currentUserPermissions.includes("cash_register_report") ? _c("li", {
    staticClass: "submenu-item"
  }, [_c("router-link", {
    staticClass: "submenu-link",
    attrs: {
      to: {
        name: "cash_register_report"
      }
    }
  }, [_c("i", {
    staticClass: "submenu-icon i-Money-2"
  }), _vm._v(" "), _c("span", [_vm._v(_vm._s(_vm.$t("Cash_Register_Report")))])])], 1) : _vm._e(), _vm._v(" "), _vm.currentUserPermissions && _vm.currentUserPermissions.includes("report_warranty") ? _c("li", {
    staticClass: "submenu-item"
  }, [_c("router-link", {
    staticClass: "submenu-link",
    attrs: {
      to: {
        name: "warranty_guarantee_report"
      }
    }
  }, [_c("i", {
    staticClass: "submenu-icon i-Shield"
  }), _vm._v(" "), _c("span", [_vm._v(_vm._s(_vm.$t("Warranty_Guarantee_Report")))])])], 1) : _vm._e(), _vm._v(" "), _vm.currentUserPermissions && _vm.currentUserPermissions.includes("inventory_valuation") ? _c("li", {
    staticClass: "submenu-item"
  }, [_c("router-link", {
    staticClass: "submenu-link",
    attrs: {
      to: "/app/reports/inventory_valuation_summary"
    }
  }, [_c("i", {
    staticClass: "submenu-icon i-Pie-Chart"
  }), _vm._v(" "), _c("span", [_vm._v(_vm._s(_vm.$t("Inventory_Valuation")))])])], 1) : _vm._e(), _vm._v(" "), _vm.currentUserPermissions && _vm.currentUserPermissions.includes("analytics_report") ? _c("li", {
    staticClass: "submenu-item"
  }, [_c("router-link", {
    staticClass: "submenu-link",
    attrs: {
      to: "/app/reports/analytics_report"
    }
  }, [_c("i", {
    staticClass: "submenu-icon i-Bar-Chart"
  }), _vm._v(" "), _c("span", [_vm._v(_vm._s(_vm.$t("Analytics_Report")))])])], 1) : _vm._e(), _vm._v(" "), _vm.currentUserPermissions && _vm.currentUserPermissions.includes("Stock_Inventory_Valuation") ? _c("li", {
    staticClass: "submenu-item"
  }, [_c("router-link", {
    staticClass: "submenu-link",
    attrs: {
      to: "/app/reports/stock_inventory_valuation"
    }
  }, [_c("i", {
    staticClass: "submenu-icon i-Line-Chart"
  }), _vm._v(" "), _c("span", [_vm._v(_vm._s(_vm.$t("Stock_Inventory_Valuation")))])])], 1) : _vm._e(), _vm._v(" "), _vm.currentUserPermissions && _vm.currentUserPermissions.includes("expenses_report") ? _c("li", {
    staticClass: "submenu-item"
  }, [_c("router-link", {
    staticClass: "submenu-link",
    attrs: {
      to: "/app/reports/expenses_report"
    }
  }, [_c("i", {
    staticClass: "submenu-icon i-Receipt-3"
  }), _vm._v(" "), _c("span", [_vm._v(_vm._s(_vm.$t("Expense_Report")))])])], 1) : _vm._e(), _vm._v(" "), _vm.currentUserPermissions && _vm.currentUserPermissions.includes("deposits_report") ? _c("li", {
    staticClass: "submenu-item"
  }, [_c("router-link", {
    staticClass: "submenu-link",
    attrs: {
      to: "/app/reports/deposits_report"
    }
  }, [_c("i", {
    staticClass: "submenu-icon i-Receipt-3"
  }), _vm._v(" "), _c("span", [_vm._v(_vm._s(_vm.$t("Deposits_Report")))])])], 1) : _vm._e(), _vm._v(" "), _vm.currentUserPermissions && _vm.currentUserPermissions.includes("Warehouse_report") ? _c("li", {
    staticClass: "submenu-item"
  }, [_c("router-link", {
    staticClass: "submenu-link",
    attrs: {
      to: "/app/reports/warehouse_report"
    }
  }, [_c("i", {
    staticClass: "submenu-icon i-Building"
  }), _vm._v(" "), _c("span", [_vm._v(_vm._s(_vm.$t("Warehouse_report")))])])], 1) : _vm._e(), _vm._v(" "), _vm.currentUserPermissions && _vm.currentUserPermissions.includes("stock_report") ? _c("li", {
    staticClass: "submenu-item"
  }, [_c("router-link", {
    staticClass: "submenu-link",
    attrs: {
      to: "/app/reports/stock_report"
    }
  }, [_c("i", {
    staticClass: "submenu-icon i-Line-Chart"
  }), _vm._v(" "), _c("span", [_vm._v(_vm._s(_vm.$t("stock_report")))])])], 1) : _vm._e(), _vm._v(" "), _vm.currentUserPermissions && _vm.currentUserPermissions.includes("negative_stock_report") ? _c("li", {
    staticClass: "submenu-item"
  }, [_c("router-link", {
    staticClass: "submenu-link",
    attrs: {
      to: "/app/reports/negative_stock_report"
    }
  }, [_c("i", {
    staticClass: "submenu-icon i-Line-Chart"
  }), _vm._v(" "), _c("span", [_vm._v(_vm._s(_vm.$t("Negative_Stock_Report")))])])], 1) : _vm._e(), _vm._v(" "), _vm.currentUserPermissions && _vm.currentUserPermissions.includes("Reports_quantity_alerts") ? _c("li", {
    staticClass: "submenu-item"
  }, [_c("router-link", {
    staticClass: "submenu-link",
    attrs: {
      to: "/app/reports/quantity_alerts"
    }
  }, [_c("i", {
    staticClass: "submenu-icon i-Bell"
  }), _vm._v(" "), _c("span", [_vm._v(_vm._s(_vm.$t("ProductQuantityAlerts")))])])], 1) : _vm._e(), _vm._v(" "), _vm.currentUserPermissions && _vm.currentUserPermissions.includes("Reports_purchase") ? _c("li", {
    staticClass: "submenu-item"
  }, [_c("router-link", {
    staticClass: "submenu-link",
    attrs: {
      to: "/app/reports/purchase_report"
    }
  }, [_c("i", {
    staticClass: "submenu-icon i-Receipt"
  }), _vm._v(" "), _c("span", [_vm._v(_vm._s(_vm.$t("PurchasesReport")))])])], 1) : _vm._e(), _vm._v(" "), _vm.currentUserPermissions && _vm.currentUserPermissions.includes("Reports_sales") ? _c("li", {
    staticClass: "submenu-item"
  }, [_c("router-link", {
    staticClass: "submenu-link",
    attrs: {
      to: "/app/reports/sales_report"
    }
  }, [_c("i", {
    staticClass: "submenu-icon i-Full-Cart"
  }), _vm._v(" "), _c("span", [_vm._v(_vm._s(_vm.$t("SalesReport")))])])], 1) : _vm._e(), _vm._v(" "), _vm.currentUserPermissions && _vm.currentUserPermissions.includes("product_sales_report") ? _c("li", {
    staticClass: "submenu-item"
  }, [_c("router-link", {
    staticClass: "submenu-link",
    attrs: {
      to: "/app/reports/product_sales_report"
    }
  }, [_c("i", {
    staticClass: "submenu-icon i-Full-Cart"
  }), _vm._v(" "), _c("span", [_vm._v(_vm._s(_vm.$t("product_sales_report")))])])], 1) : _vm._e(), _vm._v(" "), _vm.currentUserPermissions && _vm.currentUserPermissions.includes("sales_by_seller_report") ? _c("li", {
    staticClass: "submenu-item"
  }, [_c("router-link", {
    staticClass: "submenu-link",
    attrs: {
      to: "/app/reports/sales_by_seller_report"
    }
  }, [_c("i", {
    staticClass: "submenu-icon i-Business-Mens"
  }), _vm._v(" "), _c("span", [_vm._v(_vm._s(_vm.$t("SalesBySellerReport")))])])], 1) : _vm._e(), _vm._v(" "), _vm.currentUserPermissions && _vm.currentUserPermissions.includes("product_purchases_report") ? _c("li", {
    staticClass: "submenu-item"
  }, [_c("router-link", {
    staticClass: "submenu-link",
    attrs: {
      to: "/app/reports/product_purchases_report"
    }
  }, [_c("i", {
    staticClass: "submenu-icon i-Receipt"
  }), _vm._v(" "), _c("span", [_vm._v(_vm._s(_vm.$t("Product_purchases_report")))])])], 1) : _vm._e(), _vm._v(" "), _vm.currentUserPermissions && _vm.currentUserPermissions.includes("Reports_suppliers") ? _c("li", {
    staticClass: "submenu-item"
  }, [_c("router-link", {
    staticClass: "submenu-link",
    attrs: {
      to: "/app/reports/providers_report"
    }
  }, [_c("i", {
    staticClass: "submenu-icon i-Business-Mens"
  }), _vm._v(" "), _c("span", [_vm._v(_vm._s(_vm.$t("SuppliersReport")))])])], 1) : _vm._e(), _vm._v(" "), _vm.currentUserPermissions && _vm.currentUserPermissions.includes("Top_Suppliers_Report") ? _c("li", {
    staticClass: "submenu-item"
  }, [_c("router-link", {
    staticClass: "submenu-link",
    attrs: {
      to: {
        name: "top_suppliers_report"
      }
    }
  }, [_c("i", {
    staticClass: "submenu-icon i-Star"
  }), _vm._v(" "), _c("span", [_vm._v(_vm._s(_vm.$t("Top_Suppliers_Report")))])])], 1) : _vm._e(), _vm._v(" "), _vm.currentUserPermissions && _vm.currentUserPermissions.includes("Reports_customers") ? _c("li", {
    staticClass: "submenu-item"
  }, [_c("router-link", {
    staticClass: "submenu-link",
    attrs: {
      to: {
        name: "customers_report"
      }
    }
  }, [_c("i", {
    staticClass: "submenu-icon i-Business-Mens"
  }), _vm._v(" "), _c("span", [_vm._v(_vm._s(_vm.$t("CustomersReport")))])])], 1) : _vm._e(), _vm._v(" "), _vm.currentUserPermissions && _vm.currentUserPermissions.includes("Top_products") ? _c("li", {
    staticClass: "submenu-item"
  }, [_c("router-link", {
    staticClass: "submenu-link",
    attrs: {
      to: "/app/reports/top_selling_products"
    }
  }, [_c("i", {
    staticClass: "submenu-icon i-Star"
  }), _vm._v(" "), _c("span", [_vm._v(_vm._s(_vm.$t("Top_Selling_Products")))])])], 1) : _vm._e(), _vm._v(" "), _vm.currentUserPermissions && _vm.currentUserPermissions.includes("inactive_customers_report") ? _c("li", {
    staticClass: "submenu-item"
  }, [_c("router-link", {
    staticClass: "submenu-link",
    attrs: {
      to: "/app/reports/inactive_customers"
    }
  }, [_c("i", {
    staticClass: "submenu-icon i-Remove-User"
  }), _vm._v(" "), _c("span", [_vm._v(_vm._s(_vm.$t("Inactive_Customers_Report")))])])], 1) : _vm._e(), _vm._v(" "), _vm.currentUserPermissions && _vm.currentUserPermissions.includes("Top_customers") ? _c("li", {
    staticClass: "submenu-item"
  }, [_c("router-link", {
    staticClass: "submenu-link",
    attrs: {
      to: "/app/reports/Top_customers"
    }
  }, [_c("i", {
    staticClass: "submenu-icon i-Star"
  }), _vm._v(" "), _c("span", [_vm._v(_vm._s(_vm.$t("TopCustomers")))])])], 1) : _vm._e(), _vm._v(" "), _vm.currentUserPermissions && _vm.currentUserPermissions.includes("users_report") ? _c("li", {
    staticClass: "submenu-item"
  }, [_c("router-link", {
    staticClass: "submenu-link",
    attrs: {
      to: "/app/reports/users_report"
    }
  }, [_c("i", {
    staticClass: "submenu-icon i-Administrator"
  }), _vm._v(" "), _c("span", [_vm._v(_vm._s(_vm.$t("Users_Report")))])])], 1) : _vm._e(), _vm._v(" "), _vm.currentUserPermissions && _vm.currentUserPermissions.includes("report_device_management") ? _c("li", {
    staticClass: "submenu-item"
  }, [_c("router-link", {
    staticClass: "submenu-link",
    attrs: {
      to: "/app/reports/login_activity_report"
    }
  }, [_c("i", {
    staticClass: "submenu-icon i-Lock-2"
  }), _vm._v(" "), _c("span", [_vm._v(_vm._s(_vm.$t("Login_Activity_Report")))])])], 1) : _vm._e(), _vm._v(" "), _vm.currentUserPermissions && _vm.currentUserPermissions.includes("product_report") ? _c("li", {
    staticClass: "submenu-item"
  }, [_c("router-link", {
    staticClass: "submenu-link",
    attrs: {
      to: "/app/reports/product_report"
    }
  }, [_c("i", {
    staticClass: "submenu-icon i-Bar-Code"
  }), _vm._v(" "), _c("span", [_vm._v(_vm._s(_vm.$t("product_report")))])])], 1) : _vm._e(), _vm._v(" "), _vm.currentUserPermissions && _vm.currentUserPermissions.includes("zeroSalesProducts") ? _c("li", {
    staticClass: "submenu-item"
  }, [_c("router-link", {
    staticClass: "submenu-link",
    attrs: {
      to: {
        name: "zero_sales_products_report"
      }
    }
  }, [_c("i", {
    staticClass: "submenu-icon i-Remove-Bag"
  }), _vm._v(" "), _c("span", [_vm._v(_vm._s(_vm.$t("Zero_Sales_Products_Report")))])])], 1) : _vm._e(), _vm._v(" "), _vm.currentUserPermissions && _vm.currentUserPermissions.includes("Dead_Stock_Report") ? _c("li", {
    staticClass: "submenu-item"
  }, [_c("router-link", {
    staticClass: "submenu-link",
    attrs: {
      to: {
        name: "dead_stock_report"
      }
    }
  }, [_c("i", {
    staticClass: "submenu-icon i-Remove-Bag"
  }), _vm._v(" "), _c("span", [_vm._v(_vm._s(_vm.$t("Dead_Stock_Report")))])])], 1) : _vm._e(), _vm._v(" "), _vm.currentUserPermissions && _vm.currentUserPermissions.includes("Stock_Aging_Report") ? _c("li", {
    staticClass: "submenu-item"
  }, [_c("router-link", {
    staticClass: "submenu-link",
    attrs: {
      to: {
        name: "stock_aging_report"
      }
    }
  }, [_c("i", {
    staticClass: "submenu-icon i-Clock"
  }), _vm._v(" "), _c("span", [_vm._v(_vm._s(_vm.$t("Stock_Aging_Report")))])])], 1) : _vm._e(), _vm._v(" "), _vm.currentUserPermissions && _vm.currentUserPermissions.includes("Stock_Transfer_Report") ? _c("li", {
    staticClass: "submenu-item"
  }, [_c("router-link", {
    staticClass: "submenu-link",
    attrs: {
      to: {
        name: "stock_transfer_report"
      }
    }
  }, [_c("i", {
    staticClass: "submenu-icon i-Back"
  }), _vm._v(" "), _c("span", [_vm._v(_vm._s(_vm.$t("Stock_Transfer_Report")))])])], 1) : _vm._e(), _vm._v(" "), _vm.currentUserPermissions && _vm.currentUserPermissions.includes("Stock_Adjustment_Report") ? _c("li", {
    staticClass: "submenu-item"
  }, [_c("router-link", {
    staticClass: "submenu-link",
    attrs: {
      to: {
        name: "stock_adjustment_report"
      }
    }
  }, [_c("i", {
    staticClass: "submenu-icon i-Edit"
  }), _vm._v(" "), _c("span", [_vm._v(_vm._s(_vm.$t("Stock_Adjustment_Report")))])])], 1) : _vm._e(), _vm._v(" "), _vm.currentUserPermissions && _vm.currentUserPermissions.includes("discount_summary_report") ? _c("li", {
    staticClass: "submenu-item"
  }, [_c("router-link", {
    staticClass: "submenu-link",
    attrs: {
      to: {
        name: "discount_summary_report"
      }
    }
  }, [_c("i", {
    staticClass: "submenu-icon i-Billing"
  }), _vm._v(" "), _c("span", [_vm._v(_vm._s(_vm.$t("Discount_Summary_Report")))])])], 1) : _vm._e(), _vm._v(" "), _vm.currentUserPermissions && _vm.currentUserPermissions.includes("customer_loyalty_points_report") ? _c("li", {
    staticClass: "submenu-item"
  }, [_c("router-link", {
    staticClass: "submenu-link",
    attrs: {
      to: {
        name: "customer_loyalty_points_report"
      }
    }
  }, [_c("i", {
    staticClass: "submenu-icon i-Love"
  }), _vm._v(" "), _c("span", [_vm._v(_vm._s(_vm.$t("Customer_Loyalty_Points_Report")))])])], 1) : _vm._e(), _vm._v(" "), _vm.currentUserPermissions && _vm.currentUserPermissions.includes("tax_summary_report") ? _c("li", {
    staticClass: "submenu-item"
  }, [_c("router-link", {
    staticClass: "submenu-link",
    attrs: {
      to: {
        name: "tax_summary_report"
      }
    }
  }, [_c("i", {
    staticClass: "submenu-icon i-Receipt-4"
  }), _vm._v(" "), _c("span", [_vm._v(_vm._s(_vm.$t("Tax_Summary_Report")))])])], 1) : _vm._e(), _vm._v(" "), _vm.currentUserPermissions && _vm.currentUserPermissions.includes("draft_invoices_report") ? _c("li", {
    staticClass: "submenu-item"
  }, [_c("router-link", {
    staticClass: "submenu-link",
    attrs: {
      to: {
        name: "draft_invoices_report"
      }
    }
  }, [_c("i", {
    staticClass: "submenu-icon i-Receipt-3"
  }), _vm._v(" "), _c("span", [_vm._v(_vm._s(_vm.$t("Draft_Invoices_Report")))])])], 1) : _vm._e(), _vm._v(" "), _vm.currentUserPermissions && _vm.currentUserPermissions.includes("report_sales_by_category") ? _c("li", {
    staticClass: "submenu-item"
  }, [_c("router-link", {
    staticClass: "submenu-link",
    attrs: {
      to: {
        name: "report_sales_by_category"
      }
    }
  }, [_c("i", {
    staticClass: "submenu-icon i-Folder"
  }), _vm._v(" "), _c("span", [_vm._v(_vm._s(_vm.$t("Sales_by_Category")))])])], 1) : _vm._e(), _vm._v(" "), _vm.currentUserPermissions && _vm.currentUserPermissions.includes("report_sales_by_brand") ? _c("li", {
    staticClass: "submenu-item"
  }, [_c("router-link", {
    staticClass: "submenu-link",
    attrs: {
      to: {
        name: "report_sales_by_brand"
      }
    }
  }, [_c("i", {
    staticClass: "submenu-icon i-Bookmark"
  }), _vm._v(" "), _c("span", [_vm._v(_vm._s(_vm.$t("Sales_by_Brand")))])])], 1) : _vm._e(), _vm._v(" "), _vm.currentUserPermissions && _vm.currentUserPermissions.includes("report_error_logs") ? _c("li", {
    staticClass: "submenu-item"
  }, [_c("router-link", {
    staticClass: "submenu-link",
    attrs: {
      to: {
        name: "report_error_logs"
      }
    }
  }, [_c("i", {
    staticClass: "submenu-icon i-Close"
  }), _vm._v(" "), _c("span", [_vm._v(_vm._s(_vm.$t("Error_Logs")))])])], 1) : _vm._e(), _vm._v(" "), _vm.currentUserPermissions && _vm.currentUserPermissions.includes("service_jobs_report") ? _c("li", {
    staticClass: "submenu-item"
  }, [_c("router-link", {
    staticClass: "submenu-link",
    attrs: {
      to: {
        name: "service_jobs_report"
      }
    }
  }, [_c("i", {
    staticClass: "submenu-icon i-Repair"
  }), _vm._v(" "), _c("span", [_vm._v(_vm._s(_vm.$t("Service_Jobs_Report")))])])], 1) : _vm._e(), _vm._v(" "), _vm.currentUserPermissions && _vm.currentUserPermissions.includes("checklist_completion_report") ? _c("li", {
    staticClass: "submenu-item"
  }, [_c("router-link", {
    staticClass: "submenu-link",
    attrs: {
      to: {
        name: "checklist_completion_report"
      }
    }
  }, [_c("i", {
    staticClass: "submenu-icon i-Check"
  }), _vm._v(" "), _c("span", [_vm._v(_vm._s(_vm.$t("Checklist_Completion_Report")))])])], 1) : _vm._e(), _vm._v(" "), _vm.currentUserPermissions && _vm.currentUserPermissions.includes("customer_maintenance_history_report") ? _c("li", {
    staticClass: "submenu-item"
  }, [_c("router-link", {
    staticClass: "submenu-link",
    attrs: {
      to: {
        name: "customer_maintenance_history_report"
      }
    }
  }, [_c("i", {
    staticClass: "submenu-icon i-Calendar-4"
  }), _vm._v(" "), _c("span", [_vm._v(_vm._s(_vm.$t("Customer_Maintenance_History_Report")))])])], 1) : _vm._e()]) : _vm._e()])])])]), _vm._v(" "), _vm.mobileOpen && _vm.isMobile ? _c("div", {
    staticClass: "mobile-overlay",
    on: {
      click: _vm.closeMobileSidebar
    }
  }) : _vm._e()], 1);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/containers/layouts/largeSidebar/VerticalTopNav.vue?vue&type=template&id=957b9d9c&scoped=true":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/containers/layouts/largeSidebar/VerticalTopNav.vue?vue&type=template&id=957b9d9c&scoped=true ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
    staticClass: "vertical-top-nav"
  }, [_c("div", {
    staticClass: "nav-left"
  }, [_c("button", {
    staticClass: "menu-toggle",
    attrs: {
      type: "button",
      "aria-label": "Toggle menu"
    },
    on: {
      click: _vm.toggleSidebar
    }
  }, [_c("div"), _vm._v(" "), _c("div"), _vm._v(" "), _c("div")])]), _vm._v(" "), _c("div", {
    staticClass: "nav-right"
  }, [_vm.currentUserPermissions && _vm.currentUserPermissions.includes("Pos_view") ? _c("router-link", {
    staticClass: "btn btn-primary btn-sm",
    attrs: {
      to: "/app/pos"
    }
  }, [_c("i", {
    staticClass: "i-Cash-Register"
  }), _vm._v(" "), _c("span", {
    staticClass: "btn-text"
  }, [_vm._v("POS")])]) : _vm._e(), _vm._v(" "), _c("button", {
    staticClass: "nav-icon-btn",
    attrs: {
      title: _vm.getThemeMode.dark ? "Light Mode" : "Dark Mode"
    },
    on: {
      click: _vm.toggleDarkMode
    }
  }, [_c("i", {
    "class": _vm.getThemeMode.dark ? "i-Sun" : "i-Cloud-Moon"
  })]), _vm._v(" "), _c("button", {
    staticClass: "nav-icon-btn fullscreen-btn",
    attrs: {
      title: "Fullscreen"
    },
    on: {
      click: _vm.handleFullScreen
    }
  }, [_c("i", {
    staticClass: "i-Full-Screen"
  })]), _vm._v(" "), _vm.show_language ? _c("div", {
    staticClass: "dropdown"
  }, [_c("b-dropdown", {
    attrs: {
      id: "lang-dd",
      right: "",
      "toggle-class": "dropdown-toggle-no-caret",
      "no-caret": ""
    }
  }, [_c("template", {
    slot: "button-content"
  }, [_c("i", {
    staticClass: "i-Globe"
  })]), _vm._v(" "), _c("vue-perfect-scrollbar", {
    staticClass: "dropdown-scroll",
    attrs: {
      settings: {
        suppressScrollX: true,
        wheelPropagation: false
      }
    }
  }, [_c("div", {
    staticClass: "lang-menu"
  }, _vm._l(_vm.getAvailableLanguages, function (lang) {
    return _c("a", {
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
    }), _vm._v(" "), _c("span", [_vm._v(_vm._s(lang.name))])]);
  }), 0)])], 2)], 1) : _vm._e(), _vm._v(" "), _c("div", {
    staticClass: "dropdown"
  }, [_c("b-dropdown", {
    attrs: {
      id: "notif-dd",
      right: "",
      "toggle-class": "dropdown-toggle-no-caret",
      "no-caret": ""
    }
  }, [_c("template", {
    slot: "button-content"
  }, [_vm.notifs_alert > 0 ? _c("span", {
    staticClass: "badge badge-primary"
  }, [_vm._v("1")]) : _vm._e(), _vm._v(" "), _c("i", {
    staticClass: "i-Bell"
  })]), _vm._v(" "), _c("vue-perfect-scrollbar", {
    staticClass: "dropdown-scroll",
    attrs: {
      settings: {
        suppressScrollX: true,
        wheelPropagation: false
      }
    }
  }, [_vm.notifs_alert > 0 ? _c("div", {
    staticClass: "notification-item"
  }, [_c("div", {
    staticClass: "notif-icon"
  }, [_c("i", {
    staticClass: "i-Bell text-primary"
  })]), _vm._v(" "), _vm.currentUserPermissions && _vm.currentUserPermissions.includes("Reports_quantity_alerts") ? _c("div", {
    staticClass: "notif-content"
  }, [_c("router-link", {
    attrs: {
      tag: "a",
      to: "/app/reports/quantity_alerts"
    }
  }, [_c("p", [_vm._v(_vm._s(_vm.notifs_alert) + " " + _vm._s(_vm.$t("ProductQuantityAlerts")))])])], 1) : _vm._e()]) : _vm._e()])], 2)], 1), _vm._v(" "), _c("div", {
    staticClass: "dropdown"
  }, [_c("b-dropdown", {
    attrs: {
      id: "user-dd",
      right: "",
      "toggle-class": "user-dropdown-toggle",
      "no-caret": "",
      variant: "link"
    }
  }, [_c("template", {
    slot: "button-content"
  }, [_c("div", {
    staticClass: "user-avatar"
  }, [_vm.currentUser && _vm.currentUser.avatar ? _c("img", {
    attrs: {
      src: "/images/avatar/" + _vm.currentUser.avatar,
      alt: "user"
    }
  }) : _c("img", {
    attrs: {
      src: "/images/avatar/no_avatar.png",
      alt: "user"
    }
  })])]), _vm._v(" "), _c("div", {
    staticClass: "user-dropdown-menu"
  }, [_c("div", {
    staticClass: "dropdown-header"
  }, [_c("i", {
    staticClass: "i-Lock-User mr-1"
  }), _vm._v(" "), _vm.currentUser ? _c("span", [_vm._v(_vm._s(_vm.currentUser.username))]) : _vm._e()]), _vm._v(" "), _c("router-link", {
    staticClass: "dropdown-item",
    attrs: {
      to: "/app/profile"
    }
  }, [_vm._v("\n            " + _vm._s(_vm.$t("profil")) + "\n          ")]), _vm._v(" "), _vm.currentUserPermissions && _vm.currentUserPermissions.includes("setting_system") ? _c("router-link", {
    staticClass: "dropdown-item",
    attrs: {
      to: "/app/settings/System_settings"
    }
  }, [_vm._v("\n            " + _vm._s(_vm.$t("Settings")) + "\n          ")]) : _vm._e(), _vm._v(" "), _c("a", {
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
  }, [_vm._v("\n            " + _vm._s(_vm.$t("logout")) + "\n          ")])], 1)], 2)], 1)], 1)]);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/containers/layouts/largeSidebar/index.vue?vue&type=template&id=427f8858&scoped=true":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/containers/layouts/largeSidebar/index.vue?vue&type=template&id=427f8858&scoped=true ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************/
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
    staticClass: "app-admin-wrap layout-sidebar-large clearfix",
    "class": {
      "vertical-layout": _vm.getSidebarLayout === "vertical",
      "vertical-collapsed": _vm.getSidebarLayout === "vertical" && _vm.getVerticalSidebarCollapsed
    }
  }, [_vm.getSidebarLayout === "vertical" ? _c("vertical-top-nav") : _c("top-nav"), _vm._v(" "), _vm.getSidebarLayout === "vertical" ? _c("vertical-sidebar") : _c("sidebar"), _vm._v(" "), _c("main", {
    "class": {
      "with-vertical-sidebar": _vm.getSidebarLayout === "vertical"
    }
  }, [_c("div", {
    staticClass: "main-content-wrap d-flex flex-column flex-grow-1",
    "class": {
      "sidenav-open": _vm.getSideBarToggleProperties.isSideNavOpen && _vm.getSidebarLayout !== "vertical",
      "with-vertical-topnav": _vm.getSidebarLayout === "vertical"
    }
  }, [_c("transition", {
    attrs: {
      name: "page",
      mode: "out-in"
    }
  }, [_c("router-view")], 1), _vm._v(" "), _c("div", {
    staticClass: "flex-grow-1"
  }), _vm._v(" "), _c("appFooter")], 1)])], 1);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-8.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-8.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/containers/layouts/largeSidebar/Sidebar.vue?vue&type=style&index=0&id=696fbebe&lang=css":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-8.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-8.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/containers/layouts/largeSidebar/Sidebar.vue?vue&type=style&index=0&id=696fbebe&lang=css ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, "\n.navigation-left::after{\n  content:\"\";\n  display:block;\n  height: calc(80px + env(safe-area-inset-bottom, 0px));\n}\n\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-8.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-8.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/containers/layouts/largeSidebar/TopNav.vue?vue&type=style&index=0&id=7dfa9f1c&lang=css":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-8.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-8.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/containers/layouts/largeSidebar/TopNav.vue?vue&type=style&index=0&id=7dfa9f1c&lang=css ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, "\n/* Non-scoped styles for Bootstrap Vue dropdown buttons */\n.main-header .dropdown .dropdown-toggle-no-caret,\n.main-header .dropdown-toggle-no-caret,\n.main-header .dropdown-toggle-no-caret.btn,\n.main-header button.dropdown-toggle-no-caret {\n  padding: 0 !important;\n  background: white !important;\n  border: 1px solid #e5e7eb !important;\n  width: 44px !important;\n  height: 44px !important;\n  border-radius: 12px !important;\n  color: #6b7280 !important;\n  display: flex !important;\n  align-items: center !important;\n  justify-content: center !important;\n  line-height: 1 !important;\n  font-size: 20px !important;\n  transition: all 0.3s !important;\n  position: relative !important;\n}\n.main-header .dropdown .dropdown-toggle-no-caret:hover,\n.main-header .dropdown .dropdown-toggle-no-caret:focus,\n.main-header .dropdown .dropdown-toggle-no-caret:active,\n.main-header .dropdown-toggle-no-caret:hover,\n.main-header .dropdown-toggle-no-caret:focus,\n.main-header .dropdown-toggle-no-caret:active,\n.main-header .dropdown-toggle-no-caret.btn:hover,\n.main-header .dropdown-toggle-no-caret.btn:focus,\n.main-header .dropdown-toggle-no-caret.btn:active,\n.main-header button.dropdown-toggle-no-caret:hover,\n.main-header button.dropdown-toggle-no-caret:focus,\n.main-header button.dropdown-toggle-no-caret:active {\n  background: #f9fafb !important;\n  color: #663399 !important;\n  border-color: #663399 !important;\n  box-shadow: none !important;\n  outline: none !important;\n}\n\n/* Dark mode for dropdown buttons */\nbody.dark-theme .main-header .dropdown .dropdown-toggle-no-caret,\nbody.dark-theme .main-header .dropdown-toggle-no-caret,\nbody.dark-theme .main-header .dropdown-toggle-no-caret.btn,\nbody.dark-theme .main-header button.dropdown-toggle-no-caret {\n  background: #1a1a2e !important;\n  border-color: #2d2d44 !important;\n  color: #d0d0d0 !important;\n}\nbody.dark-theme .main-header .dropdown .dropdown-toggle-no-caret:hover,\nbody.dark-theme .main-header .dropdown .dropdown-toggle-no-caret:focus,\nbody.dark-theme .main-header .dropdown .dropdown-toggle-no-caret:active,\nbody.dark-theme .main-header .dropdown-toggle-no-caret:hover,\nbody.dark-theme .main-header .dropdown-toggle-no-caret:focus,\nbody.dark-theme .main-header .dropdown-toggle-no-caret:active,\nbody.dark-theme .main-header .dropdown-toggle-no-caret.btn:hover,\nbody.dark-theme .main-header .dropdown-toggle-no-caret.btn:focus,\nbody.dark-theme .main-header .dropdown-toggle-no-caret.btn:active,\nbody.dark-theme .main-header button.dropdown-toggle-no-caret:hover,\nbody.dark-theme .main-header button.dropdown-toggle-no-caret:focus,\nbody.dark-theme .main-header button.dropdown-toggle-no-caret:active {\n  background: #2d2d44 !important;\n  border-color: #764ba2 !important;\n  color: #fff !important;\n}\n\n/* Dropdown menu styling */\n.main-header .dropdown-menu {\n  border-radius: 12px !important;\n  border: 1px solid #e5e7eb !important;\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1) !important;\n  padding: 0 !important;\n  min-width: 280px !important;\n  margin-top: 8px !important;\n}\n.main-header #notif-dd .dropdown-menu {\n  min-width: 320px !important;\n}\n.main-header #lang-dd .dropdown-menu {\n  min-width: 220px !important;\n}\n.main-header #user-dd .dropdown-menu {\n  min-width: 200px !important;\n}\n\n/* Dark mode dropdown menu */\nbody.dark-theme .main-header .dropdown-menu {\n  background: #1a1a2e !important;\n  border-color: #2d2d44 !important;\n}\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-8.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-8.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/containers/layouts/largeSidebar/TopNav.vue?vue&type=style&index=1&id=7dfa9f1c&scoped=true&lang=css":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-8.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-8.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/containers/layouts/largeSidebar/TopNav.vue?vue&type=style&index=1&id=7dfa9f1c&scoped=true&lang=css ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, "\n.nav-right[data-v-7dfa9f1c] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n.btn-primary[data-v-7dfa9f1c] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  padding: 8px 16px;\n  border-radius: 6px;\n}\n.btn-text[data-v-7dfa9f1c] {\n  font-weight: 600;\n}\n/* Dark mode toggle button - same design as VerticalTopNav */\n.nav-icon-btn[data-v-7dfa9f1c] {\n  width: 44px;\n  height: 44px;\n  padding: 0;\n  border: 1px solid #e5e7eb;\n  background: white;\n  color: #6b7280;\n  border-radius: 12px;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  line-height: 1;\n  cursor: pointer;\n  font-size: 20px;\n  transition: all 0.3s;\n  position: relative;\n}\n.nav-icon-btn[data-v-7dfa9f1c]:hover {\n  background: #f9fafb;\n  color: #663399;\n  border-color: #663399;\n}\n.nav-icon-btn[data-v-7dfa9f1c]:focus,\n.nav-icon-btn[data-v-7dfa9f1c]:active {\n  outline: none !important;\n  box-shadow: none !important;\n}\n.nav-icon-btn[data-v-7dfa9f1c]:focus-visible {\n  outline: none !important;\n}\n.nav-icon-btn i[data-v-7dfa9f1c] {\n  font-size: 20px;\n  line-height: 1;\n}\n.nav-icon-btn i[data-v-7dfa9f1c] {\n  font-size: 20px;\n  line-height: 1;\n}\n.badge-container[data-v-7dfa9f1c] {\n  position: relative;\n}\n.badge[data-v-7dfa9f1c] {\n  position: absolute;\n  top: -8px;\n  right: -8px;\n  min-width: 18px;\n  height: 18px;\n  padding: 2px 6px;\n  border-radius: 10px;\n  font-size: 11px;\n  font-weight: 600;\n  line-height: 1.2;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.user-dropdown-toggle[data-v-7dfa9f1c] {\n  padding: 0;\n  background: transparent;\n  border: none;\n}\n.user-avatar[data-v-7dfa9f1c] {\n  width: 40px;\n  height: 40px;\n  overflow: hidden;\n  cursor: pointer;\n  transition: all 0.3s;\n  border-radius: 50%;\n}\n.user-avatar[data-v-7dfa9f1c]:hover {\n  opacity: 0.8;\n}\n.user-avatar img[data-v-7dfa9f1c] {\n  width: 100%;\n  height: 100%;\n  -o-object-fit: cover;\n     object-fit: cover;\n  border-radius: 50%;\n}\n.dropdown-scroll[data-v-7dfa9f1c] {\n  max-height: 300px;\n  overflow-y: auto;\n}\n.lang-menu[data-v-7dfa9f1c] {\n  padding: 10px;\n}\n.lang-item[data-v-7dfa9f1c] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 10px 15px;\n  border-radius: 6px;\n  cursor: pointer;\n  color: #333;\n  text-decoration: none;\n  transition: background 0.3s;\n}\n.lang-item[data-v-7dfa9f1c]:hover {\n  background: #f5f5f5;\n}\n.flag-icon[data-v-7dfa9f1c] {\n  width: 24px;\n  height: 24px;\n  border-radius: 50%;\n  -o-object-fit: cover;\n     object-fit: cover;\n}\n.notification-item[data-v-7dfa9f1c] {\n  display: flex;\n  align-items: flex-start;\n  gap: 12px;\n  padding: 15px 20px;\n  border-bottom: 1px solid #f0f0f0;\n  transition: background 0.3s;\n  cursor: pointer;\n}\n.notification-item[data-v-7dfa9f1c]:hover {\n  background: #f9fafb;\n}\n.notification-item[data-v-7dfa9f1c]:last-child {\n  border-bottom: none;\n}\n.notif-icon[data-v-7dfa9f1c] {\n  font-size: 24px;\n  line-height: 1;\n  flex-shrink: 0;\n}\n.notif-content[data-v-7dfa9f1c] {\n  flex: 1;\n}\n.notif-content p[data-v-7dfa9f1c] {\n  margin: 0;\n  font-size: 14px;\n  color: #666;\n  line-height: 1.5;\n}\n.notif-content a[data-v-7dfa9f1c] {\n  color: #663399;\n  text-decoration: none;\n  display: block;\n}\n.notif-content a[data-v-7dfa9f1c]:hover {\n  color: #5a2a80;\n}\n.user-dropdown-menu[data-v-7dfa9f1c] {\n  min-width: 200px;\n}\n.dropdown-header[data-v-7dfa9f1c] {\n  padding: 15px;\n  border-bottom: 1px solid #e0e0e0;\n  font-weight: 600;\n  color: #333;\n}\n.dropdown-item[data-v-7dfa9f1c] {\n  padding: 12px 20px;\n  color: #666;\n  text-decoration: none;\n  display: block;\n  transition: all 0.3s;\n}\n.dropdown-item[data-v-7dfa9f1c]:hover {\n  background: #f5f5f5;\n  color: #663399;\n}\n\n/* Dark Mode */\nbody.dark-theme .nav-icon-btn[data-v-7dfa9f1c] {\n  background: #1a1a2e;\n  border-color: #2d2d44;\n  color: #d0d0d0;\n}\nbody.dark-theme .nav-icon-btn[data-v-7dfa9f1c]:hover {\n  background: #2d2d44;\n  border-color: #764ba2;\n  color: #fff;\n}\nbody.dark-theme .lang-item[data-v-7dfa9f1c] {\n  color: #e0e0e0;\n}\nbody.dark-theme .lang-item[data-v-7dfa9f1c]:hover {\n  background: #2d2d44;\n}\nbody.dark-theme .notification-item[data-v-7dfa9f1c] {\n  border-bottom-color: #2d2d44;\n}\nbody.dark-theme .notification-item[data-v-7dfa9f1c]:hover {\n  background: #2d2d44;\n}\nbody.dark-theme .notif-content p[data-v-7dfa9f1c] {\n  color: #d0d0d0;\n}\nbody.dark-theme .notif-content a[data-v-7dfa9f1c] {\n  color: #a78bfa;\n}\nbody.dark-theme .notif-content a[data-v-7dfa9f1c]:hover {\n  color: #c4b5fd;\n}\nbody.dark-theme .dropdown-header[data-v-7dfa9f1c] {\n  border-bottom-color: #2d2d44;\n  color: #e0e0e0;\n}\nbody.dark-theme .dropdown-item[data-v-7dfa9f1c] {\n  color: #d0d0d0;\n}\nbody.dark-theme .dropdown-item[data-v-7dfa9f1c]:hover {\n  background: #2d2d44;\n  color: #fff;\n}\n\n/* Mobile adjustments */\n@media (max-width: 768px) {\n  /* Hide fullscreen button on mobile */\n.fullscreen-btn[data-v-7dfa9f1c] {\n    display: none !important;\n}\n.btn-text[data-v-7dfa9f1c] {\n    display: none;\n}\n.btn-primary[data-v-7dfa9f1c] {\n    padding: 8px 12px;\n    font-size: 13px;\n}\n\n  /* Make POS button look like icon buttons on mobile */\n.nav-right .btn.btn-primary[data-v-7dfa9f1c] {\n    width: 44px;\n    height: 44px;\n    padding: 0;\n    border-radius: 12px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    gap: 0;\n    background: #8b5cf6;\n    color: #fff;\n    border: 1px solid #8b5cf6;\n}\n.nav-right .btn.btn-primary i[data-v-7dfa9f1c] {\n    font-size: 20px;\n    color: #fff;\n    line-height: 1;\n}\n}\n\n/* Remove outline from header icons when clicked */\n.header-icon[data-v-7dfa9f1c]:focus,\n.header-icon[data-v-7dfa9f1c]:active {\n  outline: none !important;\n  box-shadow: none !important;\n}\n.header-icon[data-v-7dfa9f1c]:focus-visible {\n  outline: none !important;\n}\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-8.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-8.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/containers/layouts/largeSidebar/VerticalSidebar.vue?vue&type=style&index=0&id=1b1a6f68&scoped=true&lang=css":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-8.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-8.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/containers/layouts/largeSidebar/VerticalSidebar.vue?vue&type=style&index=0&id=1b1a6f68&scoped=true&lang=css ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, "\n/* Vertical Sidebar Container */\n.vertical-sidebar-wrapper[data-v-1b1a6f68] {\n  position: fixed;\n  left: 0;\n  top: 0;\n  bottom: 0;\n  width: 240px;\n  background: #fff;\n  box-shadow: 2px 0 8px rgba(0, 0, 0, 0.1);\n  z-index: 1000;\n  transition: width 0.3s ease, transform 0.3s ease;\n  transform: translateX(0);\n}\n.vertical-sidebar-wrapper.collapsed[data-v-1b1a6f68] {\n  transform: translateX(-100%);\n  width: 240px;\n}\n.vertical-sidebar[data-v-1b1a6f68] {\n  height: 100dvh;\n  max-height: 100dvh;\n  overflow-y: auto;\n  overflow-x: hidden;\n  -webkit-overflow-scrolling: touch;\n\n  /* key settings */\n  overscroll-behavior-y: contain; /* prevent accidental body scroll when hitting limits */\n  touch-action: pan-y;            /* allow smooth vertical scroll */\n  position: relative;             /* stay in layout, don’t force isolation */\n  z-index: 2;\n}\n.vertical-nav-menu[data-v-1b1a6f68]::after{\n  content:\"\";\n  display:block;\n  height: calc(24px + env(safe-area-inset-bottom, 0px));\n}\n.vertical-sidebar.ps[data-v-1b1a6f68] {\n  -webkit-overflow-scrolling: touch; /* smooth on iOS */\n  overscroll-behavior: contain;      /* ✅ prevent page scroll */\n  touch-action: pan-y;               /* ✅ allow only vertical scroll gestures */\n}\n\n/* Header with Logo */\n.vertical-sidebar-header[data-v-1b1a6f68] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 12px 15px;\n}\n.header-brand[data-v-1b1a6f68] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  cursor: pointer;\n  flex: 1;\n  overflow: hidden;\n}\n.sidebar-logo[data-v-1b1a6f68] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 45px;\n  height: 45px;\n  border-radius: 12px;\n  flex-shrink: 0;\n  transition: all 0.3s ease;\n}\n.vertical-sidebar-wrapper.collapsed .sidebar-logo[data-v-1b1a6f68] {\n  width: 40px;\n  height: 40px;\n  border-radius: 10px;\n}\n.vertical-sidebar-wrapper.collapsed .logo-placeholder[data-v-1b1a6f68] {\n  font-size: 20px;\n}\n.logo-image[data-v-1b1a6f68] {\n  width: 100%;\n  height: 100%;\n  -o-object-fit: cover;\n     object-fit: cover;\n}\n.logo-placeholder[data-v-1b1a6f68] {\n  color: white;\n  font-size: 22px;\n  font-weight: 700;\n  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);\n  width: 100%;\n  height: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 12px;\n}\n.company-name[data-v-1b1a6f68] {\n  font-size: 16px;\n  font-weight: 700;\n  color: #333;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  line-height: 1.2;\n}\n\n/* Navigation Menu */\n.vertical-nav-menu[data-v-1b1a6f68] {\n  padding: 10px 0;\n}\n.nav-list[data-v-1b1a6f68] {\n  list-style: none;\n  padding: 0;\n  margin: 0;\n}\n.nav-item[data-v-1b1a6f68] {\n  margin: 4px 10px;\n}\n.nav-link[data-v-1b1a6f68] {\n  display: flex;\n  align-items: center;\n  padding: 12px 15px;\n  color: #47404f;\n  text-decoration: none;\n  border-radius: 8px;\n  transition: all 0.3s;\n  position: relative;\n}\n.nav-link[data-v-1b1a6f68]:hover {\n  background: #f7f7f7;\n  color: #663399;\n}\n.nav-item.active > .nav-link[data-v-1b1a6f68] {\n  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);\n  color: white;\n}\n.nav-icon[data-v-1b1a6f68] {\n  font-size: 20px;\n  min-width: 24px;\n  margin-right: 12px;\n}\n.collapsed .nav-icon[data-v-1b1a6f68] {\n  margin-right: 0;\n}\n.nav-text[data-v-1b1a6f68] {\n  font-size: 14px;\n  font-weight: 500;\n  white-space: nowrap;\n}\n.submenu-arrow[data-v-1b1a6f68] {\n  margin-left: auto;\n  font-size: 12px;\n  transition: transform 0.3s;\n}\n.nav-item.open > .nav-link .submenu-arrow[data-v-1b1a6f68] {\n  transform: rotate(180deg);\n}\n\n/* Submenu */\n.submenu[data-v-1b1a6f68] {\n  list-style: none;\n  padding: 8px 0;\n  margin: 0;\n  background: rgba(0, 0, 0, 0.02);\n  border-radius: 8px;\n}\n.submenu-item[data-v-1b1a6f68] {\n  margin: 0;\n  padding: 0 8px;\n}\n.submenu-link[data-v-1b1a6f68] {\n  display: flex;\n  align-items: center;\n  padding: 10px 12px;\n  color: #666;\n  text-decoration: none;\n  border-radius: 6px;\n  font-size: 13px;\n  transition: all 0.3s;\n  position: relative;\n}\n.submenu-link[data-v-1b1a6f68]::before {\n  content: '';\n  position: absolute;\n  left: 0;\n  top: 50%;\n  transform: translateY(-50%);\n  width: 3px;\n  height: 0;\n  background: #663399;\n  border-radius: 0 2px 2px 0;\n  transition: height 0.3s;\n}\n.submenu-link[data-v-1b1a6f68]:hover {\n  background: rgba(102, 51, 153, 0.08);\n  color: #663399;\n  padding-left: 16px;\n}\n.submenu-link[data-v-1b1a6f68]:hover::before {\n  height: 70%;\n}\n.submenu-link.router-link-active[data-v-1b1a6f68] {\n  color: #663399;\n  font-weight: 600;\n  background: rgba(102, 51, 153, 0.1);\n  padding-left: 16px;\n}\n.submenu-link.router-link-active[data-v-1b1a6f68]::before {\n  height: 70%;\n}\n.submenu-icon[data-v-1b1a6f68] {\n  font-size: 15px;\n  min-width: 18px;\n  margin-right: 10px;\n  opacity: 0.8;\n}\n\n/* Nested Submenu */\n.nested-submenu[data-v-1b1a6f68] {\n  list-style: none;\n  padding: 8px 0 8px 20px;\n  margin: 4px 0;\n  border-left: 2px solid rgba(102, 51, 153, 0.15);\n}\n.nested-link[data-v-1b1a6f68] {\n  display: block;\n  padding: 8px 12px;\n  color: #666;\n  text-decoration: none;\n  border-radius: 4px;\n  font-size: 12px;\n  transition: all 0.3s;\n  position: relative;\n}\n.nested-link[data-v-1b1a6f68]:hover {\n  color: #663399;\n  background: rgba(102, 51, 153, 0.05);\n  padding-left: 16px;\n}\n.nested-link.router-link-active[data-v-1b1a6f68] {\n  color: #663399;\n  background: rgba(102, 51, 153, 0.1);\n  font-weight: 600;\n  padding-left: 16px;\n}\n.nested-arrow[data-v-1b1a6f68] {\n  margin-left: auto;\n  font-size: 10px;\n  transition: transform 0.3s;\n}\n.has-nested.open > .submenu-link .nested-arrow[data-v-1b1a6f68] {\n  transform: rotate(180deg);\n}\n\n/* Mobile Adjustments */\n@media (max-width: 768px) {\n.vertical-sidebar-wrapper[data-v-1b1a6f68] {\n    position: fixed;\n    left: 0;\n    top: 0;\n    bottom: 0;\n    width: 240px;\n    transform: translateX(-100%);\n    transition: transform 0.3s ease;\n    z-index: 90;\n}\n.vertical-sidebar-wrapper.mobile-open[data-v-1b1a6f68] {\n    transform: translateX(0);\n}\n.vertical-sidebar-wrapper.collapsed[data-v-1b1a6f68] {\n    width: 240px;\n}\n.sidebar-logo[data-v-1b1a6f68] {\n    width: 40px;\n    height: 40px;\n}\n}\n\n/* Fallback for mobile-device-detect library */\n.is-mobile.vertical-sidebar-wrapper[data-v-1b1a6f68] {\n  transform: translateX(-100%);\n  transition: transform 0.3s ease;\n  z-index: 90;\n}\n.is-mobile.vertical-sidebar-wrapper.mobile-open[data-v-1b1a6f68] {\n  transform: translateX(0);\n}\n\n/* Dark Mode Support */\nbody.dark-theme .vertical-sidebar-wrapper[data-v-1b1a6f68] {\n  background: #1a1a2e;\n  box-shadow: 2px 0 8px rgba(0, 0, 0, 0.5);\n}\nbody.dark-theme .company-name[data-v-1b1a6f68] {\n  color: #e0e0e0;\n}\nbody.dark-theme .nav-link[data-v-1b1a6f68] {\n  color: #e0e0e0;\n}\nbody.dark-theme .nav-link[data-v-1b1a6f68]:hover {\n  background: #2d2d44;\n  color: #fff;\n}\nbody.dark-theme .submenu[data-v-1b1a6f68] {\n  background: rgba(255, 255, 255, 0.03);\n}\nbody.dark-theme .submenu-link[data-v-1b1a6f68] {\n  color: #b0b0b0;\n}\nbody.dark-theme .submenu-link[data-v-1b1a6f68]::before {\n  background: #764ba2;\n}\nbody.dark-theme .submenu-link[data-v-1b1a6f68]:hover {\n  background: rgba(118, 75, 162, 0.15);\n  color: #fff;\n}\nbody.dark-theme .submenu-link.router-link-active[data-v-1b1a6f68] {\n  background: rgba(118, 75, 162, 0.25);\n  color: #fff;\n}\nbody.dark-theme .nested-submenu[data-v-1b1a6f68] {\n  border-left-color: rgba(118, 75, 162, 0.3);\n}\nbody.dark-theme .nested-link[data-v-1b1a6f68] {\n  color: #b0b0b0;\n}\nbody.dark-theme .nested-link[data-v-1b1a6f68]:hover {\n  background: rgba(118, 75, 162, 0.1);\n  color: #fff;\n}\nbody.dark-theme .nested-link.router-link-active[data-v-1b1a6f68] {\n  background: rgba(118, 75, 162, 0.2);\n  color: #fff;\n}\n\n/* RTL Support */\nhtml[dir=\"rtl\"] .vertical-sidebar-wrapper[data-v-1b1a6f68] {\n  left: auto;\n  right: 0;\n  box-shadow: -2px 0 8px rgba(0, 0, 0, 0.1);\n}\nhtml[dir=\"rtl\"] .nav-icon[data-v-1b1a6f68] {\n  margin-right: 0;\n  margin-left: 12px;\n}\nhtml[dir=\"rtl\"] .submenu[data-v-1b1a6f68] {\n  padding-left: 0;\n  padding-right: 40px;\n}\nhtml[dir=\"rtl\"] .submenu-icon[data-v-1b1a6f68] {\n  margin-right: 0;\n  margin-left: 10px;\n}\nhtml[dir=\"rtl\"] .submenu-arrow[data-v-1b1a6f68] {\n  margin-left: 0;\n  margin-right: auto;\n}\n\n/* Mobile Overlay */\n.mobile-overlay[data-v-1b1a6f68] {\n  position: fixed;\n  top: 0;\n  left: 240px;\n  right: 0;\n  bottom: 0;\n  background: rgba(0, 0, 0, 0.5);\n  z-index: 80;\n  animation: fadeIn-1b1a6f68 0.3s;\n  pointer-events: none;\n}\n@keyframes fadeIn-1b1a6f68 {\nfrom {\n    opacity: 0;\n}\nto {\n    opacity: 1;\n}\n}\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-8.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-8.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/containers/layouts/largeSidebar/VerticalTopNav.vue?vue&type=style&index=0&id=957b9d9c&lang=css":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-8.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-8.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/containers/layouts/largeSidebar/VerticalTopNav.vue?vue&type=style&index=0&id=957b9d9c&lang=css ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, "\n/* Non-scoped styles for Bootstrap Vue dropdown buttons */\n.vertical-top-nav .dropdown .dropdown-toggle-no-caret,\n.vertical-top-nav .dropdown-toggle-no-caret,\n.vertical-top-nav .dropdown-toggle-no-caret.btn,\n.vertical-top-nav button.dropdown-toggle-no-caret {\n  padding: 0 !important;\n  background: white !important;\n  border: 1px solid #e5e7eb !important;\n  width: 44px !important;\n  height: 44px !important;\n  border-radius: 12px !important;\n  color: #6b7280 !important;\n  display: flex !important;\n  align-items: center !important;\n  justify-content: center !important;\n  line-height: 1 !important;\n  font-size: 20px !important;\n  transition: all 0.3s !important;\n  position: relative !important;\n}\n.vertical-top-nav .dropdown .dropdown-toggle-no-caret:hover,\n.vertical-top-nav .dropdown .dropdown-toggle-no-caret:focus,\n.vertical-top-nav .dropdown .dropdown-toggle-no-caret:active,\n.vertical-top-nav .dropdown-toggle-no-caret:hover,\n.vertical-top-nav .dropdown-toggle-no-caret:focus,\n.vertical-top-nav .dropdown-toggle-no-caret:active,\n.vertical-top-nav .dropdown-toggle-no-caret.btn:hover,\n.vertical-top-nav .dropdown-toggle-no-caret.btn:focus,\n.vertical-top-nav .dropdown-toggle-no-caret.btn:active,\n.vertical-top-nav button.dropdown-toggle-no-caret:hover,\n.vertical-top-nav button.dropdown-toggle-no-caret:focus,\n.vertical-top-nav button.dropdown-toggle-no-caret:active {\n  background: #f9fafb !important;\n  color: #663399 !important;\n  border-color: #663399 !important;\n  box-shadow: none !important;\n  outline: none !important;\n}\n\n/* Dark mode for dropdown buttons */\nbody.dark-theme .vertical-top-nav .dropdown .dropdown-toggle-no-caret,\nbody.dark-theme .vertical-top-nav .dropdown-toggle-no-caret,\nbody.dark-theme .vertical-top-nav .dropdown-toggle-no-caret.btn,\nbody.dark-theme .vertical-top-nav button.dropdown-toggle-no-caret {\n  background: #1a1a2e !important;\n  border-color: #2d2d44 !important;\n  color: #d0d0d0 !important;\n}\nbody.dark-theme .vertical-top-nav .dropdown .dropdown-toggle-no-caret:hover,\nbody.dark-theme .vertical-top-nav .dropdown .dropdown-toggle-no-caret:focus,\nbody.dark-theme .vertical-top-nav .dropdown .dropdown-toggle-no-caret:active,\nbody.dark-theme .vertical-top-nav .dropdown-toggle-no-caret:hover,\nbody.dark-theme .vertical-top-nav .dropdown-toggle-no-caret:focus,\nbody.dark-theme .vertical-top-nav .dropdown-toggle-no-caret:active,\nbody.dark-theme .vertical-top-nav .dropdown-toggle-no-caret.btn:hover,\nbody.dark-theme .vertical-top-nav .dropdown-toggle-no-caret.btn:focus,\nbody.dark-theme .vertical-top-nav .dropdown-toggle-no-caret.btn:active,\nbody.dark-theme .vertical-top-nav button.dropdown-toggle-no-caret:hover,\nbody.dark-theme .vertical-top-nav button.dropdown-toggle-no-caret:focus,\nbody.dark-theme .vertical-top-nav button.dropdown-toggle-no-caret:active {\n  background: #2d2d44 !important;\n  border-color: #764ba2 !important;\n  color: #fff !important;\n}\n\n/* Dropdown menu styling */\n.vertical-top-nav .dropdown-menu {\n  border-radius: 12px !important;\n  border: 1px solid #e5e7eb !important;\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1) !important;\n  padding: 0 !important;\n  min-width: 280px !important;\n  margin-top: 8px !important;\n}\n.vertical-top-nav #notif-dd .dropdown-menu {\n  min-width: 320px !important;\n}\n.vertical-top-nav #lang-dd .dropdown-menu {\n  min-width: 220px !important;\n}\n.vertical-top-nav #user-dd .dropdown-menu {\n  min-width: 200px !important;\n}\n\n/* Dark mode dropdown menu */\nbody.dark-theme .vertical-top-nav .dropdown-menu {\n  background: #1a1a2e !important;\n  border-color: #2d2d44 !important;\n}\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-8.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-8.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/containers/layouts/largeSidebar/VerticalTopNav.vue?vue&type=style&index=1&id=957b9d9c&scoped=true&lang=css":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-8.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-8.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/containers/layouts/largeSidebar/VerticalTopNav.vue?vue&type=style&index=1&id=957b9d9c&scoped=true&lang=css ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, "\n.vertical-top-nav[data-v-957b9d9c] {\n  position: fixed;\n  top: 0;\n  left: 240px;\n  right: 0;\n  height: 70px;\n  background: #fff;\n  box-shadow: 0 1px 15px rgba(0, 0, 0, 0.04), 0 1px 6px rgba(0, 0, 0, 0.04);\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 0 25px;\n  z-index: 100;\n  transition: left 0.3s ease;\n}\n\n/* When sidebar is collapsed */\n.vertical-collapsed .vertical-top-nav[data-v-957b9d9c] {\n  left: 0;\n}\n.nav-left[data-v-957b9d9c] {\n  display: flex;\n  align-items: center;\n}\n.menu-toggle[data-v-957b9d9c] {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  align-items: center;\n  width: 44px;\n  height: 38px;\n  cursor: pointer;\n  transition: all 0.3s;\n  background: none;\n  border: none;\n  padding: 10px;\n  outline: none;\n  margin-right: 10px;\n  position: relative;\n  z-index: 1003;\n  pointer-events: auto;\n  border-radius: 6px;\n}\n.menu-toggle[data-v-957b9d9c]:hover {\n  background: rgba(102, 51, 153, 0.05);\n}\n.menu-toggle div[data-v-957b9d9c] {\n  width: 24px;\n  height: 2px;\n  background: #47404f;\n  border-radius: 2px;\n  transition: all 0.3s;\n  pointer-events: none;\n}\n.menu-toggle:hover div[data-v-957b9d9c] {\n  background: #663399;\n}\n.menu-toggle[data-v-957b9d9c]:focus,\n.menu-toggle[data-v-957b9d9c]:active {\n  outline: none !important;\n  box-shadow: none !important;\n}\n.nav-right[data-v-957b9d9c] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n.btn-primary[data-v-957b9d9c] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  padding: 8px 16px;\n  border-radius: 6px;\n}\n.btn-text[data-v-957b9d9c] {\n  font-weight: 600;\n}\n.nav-icon-btn[data-v-957b9d9c] {\n  width: 44px;\n  height: 44px;\n  padding: 0;\n  border: 1px solid #e5e7eb;\n  background: white;\n  color: #6b7280;\n  border-radius: 12px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  line-height: 1;\n  cursor: pointer;\n  font-size: 20px;\n  transition: all 0.3s;\n  position: relative;\n}\n.nav-icon-btn[data-v-957b9d9c]:hover {\n  background: #f9fafb;\n  color: #663399;\n  border-color: #663399;\n}\n.nav-icon-btn[data-v-957b9d9c]:focus,\n.nav-icon-btn[data-v-957b9d9c]:active {\n  outline: none !important;\n  box-shadow: none !important;\n}\n.nav-icon-btn[data-v-957b9d9c]:focus-visible {\n  outline: none !important;\n}\n.badge-container[data-v-957b9d9c] {\n  position: relative;\n}\n.badge[data-v-957b9d9c] {\n  position: absolute;\n  top: -8px;\n  right: -8px;\n  min-width: 18px;\n  height: 18px;\n  padding: 2px 6px;\n  border-radius: 10px;\n  font-size: 11px;\n  font-weight: 600;\n  line-height: 1.2;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n/* Badge inside dropdown button */\n.vertical-top-nav .dropdown .dropdown-toggle-no-caret .badge[data-v-957b9d9c] {\n  position: absolute;\n  top: -5px;\n  right: -5px;\n}\n.user-dropdown-toggle[data-v-957b9d9c] {\n  padding: 0;\n  background: transparent;\n  border: none;\n}\n.user-avatar[data-v-957b9d9c] {\n  width: 40px;\n  height: 40px;\n  overflow: hidden;\n  cursor: pointer;\n  transition: all 0.3s;\n}\n.user-avatar[data-v-957b9d9c]:hover {\n  opacity: 0.8;\n}\n.user-avatar img[data-v-957b9d9c] {\n  width: 100%;\n  height: 100%;\n  -o-object-fit: cover;\n     object-fit: cover;\n}\n.dropdown-scroll[data-v-957b9d9c] {\n  max-height: 300px;\n  overflow-y: auto;\n}\n.lang-menu[data-v-957b9d9c] {\n  padding: 10px;\n}\n.lang-item[data-v-957b9d9c] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 10px 15px;\n  border-radius: 6px;\n  cursor: pointer;\n  color: #333;\n  text-decoration: none;\n  transition: background 0.3s;\n}\n.lang-item[data-v-957b9d9c]:hover {\n  background: #f5f5f5;\n}\n.flag-icon[data-v-957b9d9c] {\n  width: 24px;\n  height: 24px;\n  border-radius: 50%;\n  -o-object-fit: cover;\n     object-fit: cover;\n}\n.notification-item[data-v-957b9d9c] {\n  display: flex;\n  align-items: flex-start;\n  gap: 12px;\n  padding: 15px 20px;\n  border-bottom: 1px solid #f0f0f0;\n  transition: background 0.3s;\n  cursor: pointer;\n}\n.notification-item[data-v-957b9d9c]:hover {\n  background: #f9fafb;\n}\n.notification-item[data-v-957b9d9c]:last-child {\n  border-bottom: none;\n}\n.notif-icon[data-v-957b9d9c] {\n  font-size: 24px;\n  line-height: 1;\n  flex-shrink: 0;\n}\n.notif-content[data-v-957b9d9c] {\n  flex: 1;\n}\n.notif-content p[data-v-957b9d9c] {\n  margin: 0;\n  font-size: 14px;\n  color: #666;\n  line-height: 1.5;\n}\n.notif-content a[data-v-957b9d9c] {\n  color: #663399;\n  text-decoration: none;\n  display: block;\n}\n.notif-content a[data-v-957b9d9c]:hover {\n  color: #5a2a80;\n}\n.user-dropdown-menu[data-v-957b9d9c] {\n  min-width: 200px;\n}\n.dropdown-header[data-v-957b9d9c] {\n  padding: 15px;\n  border-bottom: 1px solid #e0e0e0;\n  font-weight: 600;\n  color: #333;\n}\n.dropdown-item[data-v-957b9d9c] {\n  padding: 12px 20px;\n  color: #666;\n  text-decoration: none;\n  display: block;\n  transition: all 0.3s;\n}\n.dropdown-item[data-v-957b9d9c]:hover {\n  background: #f5f5f5;\n  color: #663399;\n}\n\n/* RTL Support */\nhtml[dir=\"rtl\"] .vertical-top-nav[data-v-957b9d9c] {\n  left: auto;\n  right: 240px;\n}\nhtml[dir=\"rtl\"] .vertical-collapsed .vertical-top-nav[data-v-957b9d9c] {\n  right: 70px;\n  left: auto;\n}\n\n/* Dark Mode */\nbody.dark-theme .vertical-top-nav[data-v-957b9d9c] {\n  background: #1a1a2e;\n  box-shadow: 0 1px 15px rgba(0, 0, 0, 0.2), 0 1px 6px rgba(0, 0, 0, 0.2);\n}\nbody.dark-theme .menu-toggle div[data-v-957b9d9c] {\n  background: #e0e0e0;\n}\nbody.dark-theme .menu-toggle[data-v-957b9d9c]:hover {\n  background: rgba(118, 75, 162, 0.1);\n}\nbody.dark-theme .menu-toggle:hover div[data-v-957b9d9c] {\n  background: #fff;\n}\nbody.dark-theme .nav-icon-btn[data-v-957b9d9c] {\n  background: #1a1a2e;\n  border-color: #2d2d44;\n  color: #d0d0d0;\n}\nbody.dark-theme .nav-icon-btn[data-v-957b9d9c]:hover {\n  background: #2d2d44;\n  border-color: #764ba2;\n  color: #fff;\n}\nbody.dark-theme .lang-item[data-v-957b9d9c] {\n  color: #e0e0e0;\n}\nbody.dark-theme .lang-item[data-v-957b9d9c]:hover {\n  background: #2d2d44;\n}\nbody.dark-theme .notification-item[data-v-957b9d9c] {\n  border-bottom-color: #2d2d44;\n}\nbody.dark-theme .notification-item[data-v-957b9d9c]:hover {\n  background: #2d2d44;\n}\nbody.dark-theme .notif-content p[data-v-957b9d9c] {\n  color: #d0d0d0;\n}\nbody.dark-theme .notif-content a[data-v-957b9d9c] {\n  color: #a78bfa;\n}\nbody.dark-theme .notif-content a[data-v-957b9d9c]:hover {\n  color: #c4b5fd;\n}\nbody.dark-theme .dropdown-header[data-v-957b9d9c] {\n  border-bottom-color: #2d2d44;\n  color: #e0e0e0;\n}\nbody.dark-theme .dropdown-item[data-v-957b9d9c] {\n  color: #d0d0d0;\n}\nbody.dark-theme .dropdown-item[data-v-957b9d9c]:hover {\n  background: #2d2d44;\n  color: #fff;\n}\n\n/* Mobile adjustments */\n@media (max-width: 768px) {\n.vertical-top-nav[data-v-957b9d9c] {\n    left: 0 !important;\n    padding: 0 15px;\n    z-index: 100 !important;\n    position: fixed !important;\n}\n\n  /* Hide fullscreen button on mobile */\n.fullscreen-btn[data-v-957b9d9c] {\n    display: none !important;\n}\n.nav-left[data-v-957b9d9c] {\n    display: flex !important;\n    align-items: center;\n    z-index: 1201 !important;\n    position: relative;\n}\n.menu-toggle[data-v-957b9d9c] {\n    display: flex !important;\n    flex-direction: column !important;\n    justify-content: space-between !important;\n    width: 44px !important;\n    height: 38px !important;\n    cursor: pointer !important;\n    margin-right: 10px !important;\n    background: none !important;\n    border: none !important;\n    padding: 10px !important;\n    outline: none !important;\n    z-index: 1202 !important;\n    pointer-events: auto !important;\n    position: relative !important;\n}\n.menu-toggle[data-v-957b9d9c]:focus,\n  .menu-toggle[data-v-957b9d9c]:active {\n    outline: none !important;\n    box-shadow: none !important;\n}\n.menu-toggle div[data-v-957b9d9c] {\n    display: block !important;\n    width: 24px !important;\n    height: 2px !important;\n    background: #47404f !important;\n    border-radius: 2px !important;\n    pointer-events: none !important;\n}\n.btn-text[data-v-957b9d9c] {\n    display: none;\n}\n.btn-primary[data-v-957b9d9c] {\n    padding: 8px 12px;\n    font-size: 13px;\n}\n\n  /* Make POS button look like icon buttons on mobile */\n.nav-right .btn.btn-primary[data-v-957b9d9c] {\n    width: 44px;\n    height: 44px;\n    padding: 0;\n    border-radius: 12px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    gap: 0;\n    background: #8b5cf6;\n    color: #fff;\n    border: 1px solid #8b5cf6;\n}\n.nav-right .btn.btn-primary i[data-v-957b9d9c] {\n    font-size: 20px;\n    color: #fff;\n    line-height: 1;\n}\nhtml[dir=\"rtl\"] .vertical-top-nav[data-v-957b9d9c] {\n    right: 0;\n    left: auto;\n}\n}\n\n/* Additional mobile breakpoints */\n@media (max-width: 480px) {\n.menu-toggle[data-v-957b9d9c] {\n    display: flex !important;\n    width: 44px !important;\n    height: 38px !important;\n}\n.menu-toggle[data-v-957b9d9c]:focus,\n  .menu-toggle[data-v-957b9d9c]:active {\n    outline: none !important;\n    box-shadow: none !important;\n}\n.menu-toggle div[data-v-957b9d9c] {\n    width: 24px !important;\n}\n}\n@media (max-width: 320px) {\n.menu-toggle[data-v-957b9d9c] {\n    display: flex !important;\n    width: 44px !important;\n    height: 38px !important;\n}\n.menu-toggle[data-v-957b9d9c]:focus,\n  .menu-toggle[data-v-957b9d9c]:active {\n    outline: none !important;\n    box-shadow: none !important;\n}\n.menu-toggle div[data-v-957b9d9c] {\n    width: 24px !important;\n}\n}\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-8.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-8.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/containers/layouts/largeSidebar/index.vue?vue&type=style&index=0&id=427f8858&scoped=true&lang=css":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-8.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-8.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/containers/layouts/largeSidebar/index.vue?vue&type=style&index=0&id=427f8858&scoped=true&lang=css ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, "\n/* Layout adjustments for vertical sidebar */\n.vertical-layout main.with-vertical-sidebar[data-v-427f8858] {\n  margin-left: 240px;\n  transition: margin-left 0.3s ease;\n}\n.vertical-layout.vertical-collapsed main.with-vertical-sidebar[data-v-427f8858] {\n  margin-left: 0;\n}\n\n/* Adjust content for vertical topnav */\n.with-vertical-topnav[data-v-427f8858] {\n  /* padding-top removed for flush layout */\n}\n\n/* Mobile adjustments */\n@media (max-width: 768px) {\n.vertical-layout main.with-vertical-sidebar[data-v-427f8858] {\n    margin-left: 0;\n}\n}\n\n/* RTL Support */\nhtml[dir=\"rtl\"] .vertical-layout main.with-vertical-sidebar[data-v-427f8858] {\n  margin-left: 0;\n  margin-right: 240px;\n}\nhtml[dir=\"rtl\"] .vertical-layout.vertical-collapsed main.with-vertical-sidebar[data-v-427f8858] {\n  margin-right: 70px;\n}\n", ""]);
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

/***/ "./node_modules/mobile-device-detect/dist/index.js":
/*!*********************************************************!*\
  !*** ./node_modules/mobile-device-detect/dist/index.js ***!
  \*********************************************************/
/***/ ((module) => {

module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __nested_webpack_require_187__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __nested_webpack_require_187__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__nested_webpack_require_187__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__nested_webpack_require_187__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__nested_webpack_require_187__.d = function(exports, name, getter) {
/******/ 		if(!__nested_webpack_require_187__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__nested_webpack_require_187__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__nested_webpack_require_187__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__nested_webpack_require_187__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__nested_webpack_require_187__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __nested_webpack_require_187__(__nested_webpack_require_187__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var DEVICE_TYPES = {
  MOBILE: "mobile",
  TABLET: "tablet",
  SMART_TV: "smarttv",
  CONSOLE: "console",
  WEARABLE: "wearable",
  BROWSER: undefined
};

var BROWSER_TYPES = {
  CHROME: "Chrome",
  FIREFOX: "Firefox",
  OPERA: "Opera",
  YANDEX: "Yandex",
  SAFARI: "Safari",
  INTERNET_EXPLORER: "Internet Explorer",
  EDGE: "Edge",
  CHROMIUM: "Chromium",
  IE: "IE",
  MOBILE_SAFARI: "Mobile Safari",
  EDGE_CHROMIUM: "Edge Chromium"
};

var OS_TYPES = {
  IOS: "iOS",
  ANDROID: "Android",
  WINDOWS_PHONE: "Windows Phone",
  WINDOWS: "Windows",
  MAC_OS: "Mac OS"
};

var defaultData = {
  isMobile: false,
  isTablet: false,
  isBrowser: false,
  isSmartTV: false,
  isConsole: false,
  isWearable: false
};

module.exports = { BROWSER_TYPES: BROWSER_TYPES, DEVICE_TYPES: DEVICE_TYPES, OS_TYPES: OS_TYPES, defaultData: defaultData };

/***/ }),
/* 1 */
/***/ (function(module, exports, __nested_webpack_require_3397__) {

"use strict";


var UAParser = __nested_webpack_require_3397__(2);

var _require = __nested_webpack_require_3397__(0),
    BROWSER_TYPES = _require.BROWSER_TYPES,
    OS_TYPES = _require.OS_TYPES,
    DEVICE_TYPES = _require.DEVICE_TYPES;

var _require2 = __nested_webpack_require_3397__(4),
    checkType = _require2.checkType,
    broPayload = _require2.broPayload,
    mobilePayload = _require2.mobilePayload,
    wearPayload = _require2.wearPayload,
    consolePayload = _require2.consolePayload,
    stvPayload = _require2.stvPayload,
    getNavigatorInstance = _require2.getNavigatorInstance,
    isIOS13Check = _require2.isIOS13Check;

var UA = new UAParser();

var browser = UA.getBrowser();
var device = UA.getDevice();
var engine = UA.getEngine();
var os = UA.getOS();
var ua = UA.getUA();

var CHROME = BROWSER_TYPES.CHROME,
    CHROMIUM = BROWSER_TYPES.CHROMIUM,
    IE = BROWSER_TYPES.IE,
    INTERNET_EXPLORER = BROWSER_TYPES.INTERNET_EXPLORER,
    OPERA = BROWSER_TYPES.OPERA,
    FIREFOX = BROWSER_TYPES.FIREFOX,
    SAFARI = BROWSER_TYPES.SAFARI,
    EDGE = BROWSER_TYPES.EDGE,
    YANDEX = BROWSER_TYPES.YANDEX,
    MOBILE_SAFARI = BROWSER_TYPES.MOBILE_SAFARI;
var MOBILE = DEVICE_TYPES.MOBILE,
    TABLET = DEVICE_TYPES.TABLET,
    SMART_TV = DEVICE_TYPES.SMART_TV,
    BROWSER = DEVICE_TYPES.BROWSER,
    WEARABLE = DEVICE_TYPES.WEARABLE,
    CONSOLE = DEVICE_TYPES.CONSOLE;
var ANDROID = OS_TYPES.ANDROID,
    WINDOWS_PHONE = OS_TYPES.WINDOWS_PHONE,
    IOS = OS_TYPES.IOS,
    WINDOWS = OS_TYPES.WINDOWS,
    MAC_OS = OS_TYPES.MAC_OS;


var isMobileType = function isMobileType() {
  return device.type === MOBILE;
};
var isTabletType = function isTabletType() {
  return device.type === TABLET;
};

var isMobileAndTabletType = function isMobileAndTabletType() {
  switch (device.type) {
    case MOBILE:
    case TABLET:
      return true;
    default:
      return false;
  }
};

var isEdgeChromiumType = function isEdgeChromiumType() {
  if (os.name === OS_TYPES.WINDOWS && os.version === '10') {
    return typeof ua === 'string' && ua.indexOf('Edg/') !== -1;
  }

  return false;
};

var isSmartTVType = function isSmartTVType() {
  return device.type === SMART_TV;
};
var isBrowserType = function isBrowserType() {
  return device.type === BROWSER;
};
var isWearableType = function isWearableType() {
  return device.type === WEARABLE;
};
var isConsoleType = function isConsoleType() {
  return device.type === CONSOLE;
};
var isAndroidType = function isAndroidType() {
  return os.name === ANDROID;
};
var isWindowsType = function isWindowsType() {
  return os.name === WINDOWS;
};
var isMacOsType = function isMacOsType() {
  return os.name === MAC_OS;
};
var isWinPhoneType = function isWinPhoneType() {
  return os.name === WINDOWS_PHONE;
};
var isIOSType = function isIOSType() {
  return os.name === IOS;
};
var isChromeType = function isChromeType() {
  return browser.name === CHROME;
};
var isFirefoxType = function isFirefoxType() {
  return browser.name === FIREFOX;
};
var isChromiumType = function isChromiumType() {
  return browser.name === CHROMIUM;
};
var isEdgeType = function isEdgeType() {
  return browser.name === EDGE;
};
var isYandexType = function isYandexType() {
  return browser.name === YANDEX;
};
var isSafariType = function isSafariType() {
  return browser.name === SAFARI || browser.name === MOBILE_SAFARI;
};

var isMobileSafariType = function isMobileSafariType() {
  return browser.name === MOBILE_SAFARI;
};
var isOperaType = function isOperaType() {
  return browser.name === OPERA;
};
var isIEType = function isIEType() {
  return browser.name === INTERNET_EXPLORER || browser.name === IE;
};

var isElectronType = function isElectronType() {
  var nav = getNavigatorInstance();
  var ua = nav && nav.userAgent.toLowerCase();

  return typeof ua === 'string' ? /electron/.test(ua) : false;
};

var getIOS13 = function getIOS13() {
  var nav = getNavigatorInstance();
  return nav && (/iPad|iPhone|iPod/.test(nav.platform) || nav.platform === 'MacIntel' && nav.maxTouchPoints > 1) && !window.MSStream;
};

var getIPad13 = function getIPad13() {
  return isIOS13Check('iPad');
};
var getIphone13 = function getIphone13() {
  return isIOS13Check('iPhone');
};
var getIPod13 = function getIPod13() {
  return isIOS13Check('iPod');
};

var getBrowserFullVersion = function getBrowserFullVersion() {
  return browser.major;
};
var getBrowserVersion = function getBrowserVersion() {
  return browser.version;
};
var getOsVersion = function getOsVersion() {
  return os.version ? os.version : "none";
};
var getOsName = function getOsName() {
  return os.name ? os.name : "none";
};
var getBrowserName = function getBrowserName() {
  return browser.name;
};
var getMobileVendor = function getMobileVendor() {
  return device.vendor ? device.vendor : "none";
};
var getMobileModel = function getMobileModel() {
  return device.model ? device.model : "none";
};
var getEngineName = function getEngineName() {
  return engine.name;
};
var getEngineVersion = function getEngineVersion() {
  return engine.version;
};
var getUseragent = function getUseragent() {
  return ua;
};
var getDeviceType = function getDeviceType() {
  return device.type;
};

var isSmartTV = isSmartTVType();
var isConsole = isConsoleType();
var isWearable = isWearableType();
var isMobileSafari = isMobileSafariType() || getIPad13();
var isChromium = isChromiumType();
var isMobile = isMobileAndTabletType() || getIPad13();
var isMobileOnly = isMobileType();
var isTablet = isTabletType() || getIPad13();
var isBrowser = isBrowserType();
var isAndroid = isAndroidType();
var isWinPhone = isWinPhoneType();
var isIOS = isIOSType() || getIPad13();
var isChrome = isChromeType();
var isFirefox = isFirefoxType();
var isSafari = isSafariType();
var isOpera = isOperaType();
var isIE = isIEType();
var osVersion = getOsVersion();
var osName = getOsName();
var fullBrowserVersion = getBrowserFullVersion();
var browserVersion = getBrowserVersion();
var browserName = getBrowserName();
var mobileVendor = getMobileVendor();
var mobileModel = getMobileModel();
var engineName = getEngineName();
var engineVersion = getEngineVersion();
var getUA = getUseragent();
var isEdge = isEdgeType() || isEdgeChromiumType();
var isYandex = isYandexType();
var deviceType = getDeviceType();
var isIOS13 = getIOS13();
var isIPad13 = getIPad13();
var isIPhone13 = getIphone13();
var isIPod13 = getIPod13();
var isElectron = isElectronType();
var isEdgeChromium = isEdgeChromiumType();
var isLegacyEdge = isEdgeType();
var isWindows = isWindowsType();
var isMacOs = isMacOsType();

var type = checkType(device.type);

function deviceDetect() {
  var isBrowser = type.isBrowser,
      isMobile = type.isMobile,
      isTablet = type.isTablet,
      isSmartTV = type.isSmartTV,
      isConsole = type.isConsole,
      isWearable = type.isWearable;

  if (isBrowser) {
    return broPayload(isBrowser, browser, engine, os, ua);
  }

  if (isSmartTV) {
    return stvPayload(isSmartTV, engine, os, ua);
  }

  if (isConsole) {
    return consolePayload(isConsole, engine, os, ua);
  }

  if (isMobile) {
    return mobilePayload(type, device, os, ua);
  }

  if (isTablet) {
    return mobilePayload(type, device, os, ua);
  }

  if (isWearable) {
    return wearPayload(isWearable, engine, os, ua);
  }
};

module.exports = {
  deviceDetect: deviceDetect,
  isSmartTV: isSmartTV,
  isConsole: isConsole,
  isWearable: isWearable,
  isMobileSafari: isMobileSafari,
  isChromium: isChromium,
  isMobile: isMobile,
  isMobileOnly: isMobileOnly,
  isTablet: isTablet,
  isBrowser: isBrowser,
  isAndroid: isAndroid,
  isWinPhone: isWinPhone,
  isIOS: isIOS,
  isChrome: isChrome,
  isFirefox: isFirefox,
  isSafari: isSafari,
  isOpera: isOpera,
  isIE: isIE,
  osVersion: osVersion,
  osName: osName,
  fullBrowserVersion: fullBrowserVersion,
  browserVersion: browserVersion,
  browserName: browserName,
  mobileVendor: mobileVendor,
  mobileModel: mobileModel,
  engineName: engineName,
  engineVersion: engineVersion,
  getUA: getUA,
  isEdge: isEdge,
  isYandex: isYandex,
  deviceType: deviceType,
  isIOS13: isIOS13,
  isIPad13: isIPad13,
  isIPhone13: isIPhone13,
  isIPod13: isIPod13,
  isElectron: isElectron,
  isEdgeChromium: isEdgeChromium,
  isLegacyEdge: isLegacyEdge,
  isWindows: isWindows,
  isMacOs: isMacOs
};

/***/ }),
/* 2 */
/***/ (function(module, exports, __nested_webpack_require_11768__) {

var __WEBPACK_AMD_DEFINE_RESULT__;/*!
 * UAParser.js v0.7.18
 * Lightweight JavaScript-based User-Agent string parser
 * https://github.com/faisalman/ua-parser-js
 *
 * Copyright © 2012-2016 Faisal Salman <fyzlman@gmail.com>
 * Dual licensed under GPLv2 or MIT
 */
(function(window,undefined){"use strict";var LIBVERSION="0.7.18",EMPTY="",UNKNOWN="?",FUNC_TYPE="function",UNDEF_TYPE="undefined",OBJ_TYPE="object",STR_TYPE="string",MAJOR="major",MODEL="model",NAME="name",TYPE="type",VENDOR="vendor",VERSION="version",ARCHITECTURE="architecture",CONSOLE="console",MOBILE="mobile",TABLET="tablet",SMARTTV="smarttv",WEARABLE="wearable",EMBEDDED="embedded";var util={extend:function(regexes,extensions){var margedRegexes={};for(var i in regexes){if(extensions[i]&&extensions[i].length%2===0){margedRegexes[i]=extensions[i].concat(regexes[i])}else{margedRegexes[i]=regexes[i]}}return margedRegexes},has:function(str1,str2){if(typeof str1==="string"){return str2.toLowerCase().indexOf(str1.toLowerCase())!==-1}else{return false}},lowerize:function(str){return str.toLowerCase()},major:function(version){return typeof version===STR_TYPE?version.replace(/[^\d\.]/g,"").split(".")[0]:undefined},trim:function(str){return str.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"")}};var mapper={rgx:function(ua,arrays){var i=0,j,k,p,q,matches,match;while(i<arrays.length&&!matches){var regex=arrays[i],props=arrays[i+1];j=k=0;while(j<regex.length&&!matches){matches=regex[j++].exec(ua);if(!!matches){for(p=0;p<props.length;p++){match=matches[++k];q=props[p];if(typeof q===OBJ_TYPE&&q.length>0){if(q.length==2){if(typeof q[1]==FUNC_TYPE){this[q[0]]=q[1].call(this,match)}else{this[q[0]]=q[1]}}else if(q.length==3){if(typeof q[1]===FUNC_TYPE&&!(q[1].exec&&q[1].test)){this[q[0]]=match?q[1].call(this,match,q[2]):undefined}else{this[q[0]]=match?match.replace(q[1],q[2]):undefined}}else if(q.length==4){this[q[0]]=match?q[3].call(this,match.replace(q[1],q[2])):undefined}}else{this[q]=match?match:undefined}}}}i+=2}},str:function(str,map){for(var i in map){if(typeof map[i]===OBJ_TYPE&&map[i].length>0){for(var j=0;j<map[i].length;j++){if(util.has(map[i][j],str)){return i===UNKNOWN?undefined:i}}}else if(util.has(map[i],str)){return i===UNKNOWN?undefined:i}}return str}};var maps={browser:{oldsafari:{version:{"1.0":"/8",1.2:"/1",1.3:"/3","2.0":"/412","2.0.2":"/416","2.0.3":"/417","2.0.4":"/419","?":"/"}}},device:{amazon:{model:{"Fire Phone":["SD","KF"]}},sprint:{model:{"Evo Shift 4G":"7373KT"},vendor:{HTC:"APA",Sprint:"Sprint"}}},os:{windows:{version:{ME:"4.90","NT 3.11":"NT3.51","NT 4.0":"NT4.0",2000:"NT 5.0",XP:["NT 5.1","NT 5.2"],Vista:"NT 6.0",7:"NT 6.1",8:"NT 6.2",8.1:"NT 6.3",10:["NT 6.4","NT 10.0"],RT:"ARM"}}}};var regexes={browser:[[/(opera\smini)\/([\w\.-]+)/i,/(opera\s[mobiletab]+).+version\/([\w\.-]+)/i,/(opera).+version\/([\w\.]+)/i,/(opera)[\/\s]+([\w\.]+)/i],[NAME,VERSION],[/(opios)[\/\s]+([\w\.]+)/i],[[NAME,"Opera Mini"],VERSION],[/\s(opr)\/([\w\.]+)/i],[[NAME,"Opera"],VERSION],[/(kindle)\/([\w\.]+)/i,/(lunascape|maxthon|netfront|jasmine|blazer)[\/\s]?([\w\.]*)/i,/(avant\s|iemobile|slim|baidu)(?:browser)?[\/\s]?([\w\.]*)/i,/(?:ms|\()(ie)\s([\w\.]+)/i,/(rekonq)\/([\w\.]*)/i,/(chromium|flock|rockmelt|midori|epiphany|silk|skyfire|ovibrowser|bolt|iron|vivaldi|iridium|phantomjs|bowser|quark)\/([\w\.-]+)/i],[NAME,VERSION],[/(trident).+rv[:\s]([\w\.]+).+like\sgecko/i],[[NAME,"IE"],VERSION],[/(edge|edgios|edgea)\/((\d+)?[\w\.]+)/i],[[NAME,"Edge"],VERSION],[/(yabrowser)\/([\w\.]+)/i],[[NAME,"Yandex"],VERSION],[/(puffin)\/([\w\.]+)/i],[[NAME,"Puffin"],VERSION],[/((?:[\s\/])uc?\s?browser|(?:juc.+)ucweb)[\/\s]?([\w\.]+)/i],[[NAME,"UCBrowser"],VERSION],[/(comodo_dragon)\/([\w\.]+)/i],[[NAME,/_/g," "],VERSION],[/(micromessenger)\/([\w\.]+)/i],[[NAME,"WeChat"],VERSION],[/(qqbrowserlite)\/([\w\.]+)/i],[NAME,VERSION],[/(QQ)\/([\d\.]+)/i],[NAME,VERSION],[/m?(qqbrowser)[\/\s]?([\w\.]+)/i],[NAME,VERSION],[/(BIDUBrowser)[\/\s]?([\w\.]+)/i],[NAME,VERSION],[/(2345Explorer)[\/\s]?([\w\.]+)/i],[NAME,VERSION],[/(MetaSr)[\/\s]?([\w\.]+)/i],[NAME],[/(LBBROWSER)/i],[NAME],[/xiaomi\/miuibrowser\/([\w\.]+)/i],[VERSION,[NAME,"MIUI Browser"]],[/;fbav\/([\w\.]+);/i],[VERSION,[NAME,"Facebook"]],[/headlesschrome(?:\/([\w\.]+)|\s)/i],[VERSION,[NAME,"Chrome Headless"]],[/\swv\).+(chrome)\/([\w\.]+)/i],[[NAME,/(.+)/,"$1 WebView"],VERSION],[/((?:oculus|samsung)browser)\/([\w\.]+)/i],[[NAME,/(.+(?:g|us))(.+)/,"$1 $2"],VERSION],[/android.+version\/([\w\.]+)\s+(?:mobile\s?safari|safari)*/i],[VERSION,[NAME,"Android Browser"]],[/(chrome|omniweb|arora|[tizenoka]{5}\s?browser)\/v?([\w\.]+)/i],[NAME,VERSION],[/(dolfin)\/([\w\.]+)/i],[[NAME,"Dolphin"],VERSION],[/((?:android.+)crmo|crios)\/([\w\.]+)/i],[[NAME,"Chrome"],VERSION],[/(coast)\/([\w\.]+)/i],[[NAME,"Opera Coast"],VERSION],[/fxios\/([\w\.-]+)/i],[VERSION,[NAME,"Firefox"]],[/version\/([\w\.]+).+?mobile\/\w+\s(safari)/i],[VERSION,[NAME,"Mobile Safari"]],[/version\/([\w\.]+).+?(mobile\s?safari|safari)/i],[VERSION,NAME],[/webkit.+?(gsa)\/([\w\.]+).+?(mobile\s?safari|safari)(\/[\w\.]+)/i],[[NAME,"GSA"],VERSION],[/webkit.+?(mobile\s?safari|safari)(\/[\w\.]+)/i],[NAME,[VERSION,mapper.str,maps.browser.oldsafari.version]],[/(konqueror)\/([\w\.]+)/i,/(webkit|khtml)\/([\w\.]+)/i],[NAME,VERSION],[/(navigator|netscape)\/([\w\.-]+)/i],[[NAME,"Netscape"],VERSION],[/(swiftfox)/i,/(icedragon|iceweasel|camino|chimera|fennec|maemo\sbrowser|minimo|conkeror)[\/\s]?([\w\.\+]+)/i,/(firefox|seamonkey|k-meleon|icecat|iceape|firebird|phoenix|palemoon|basilisk|waterfox)\/([\w\.-]+)$/i,/(mozilla)\/([\w\.]+).+rv\:.+gecko\/\d+/i,/(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf|sleipnir)[\/\s]?([\w\.]+)/i,/(links)\s\(([\w\.]+)/i,/(gobrowser)\/?([\w\.]*)/i,/(ice\s?browser)\/v?([\w\._]+)/i,/(mosaic)[\/\s]([\w\.]+)/i],[NAME,VERSION]],cpu:[[/(?:(amd|x(?:(?:86|64)[_-])?|wow|win)64)[;\)]/i],[[ARCHITECTURE,"amd64"]],[/(ia32(?=;))/i],[[ARCHITECTURE,util.lowerize]],[/((?:i[346]|x)86)[;\)]/i],[[ARCHITECTURE,"ia32"]],[/windows\s(ce|mobile);\sppc;/i],[[ARCHITECTURE,"arm"]],[/((?:ppc|powerpc)(?:64)?)(?:\smac|;|\))/i],[[ARCHITECTURE,/ower/,"",util.lowerize]],[/(sun4\w)[;\)]/i],[[ARCHITECTURE,"sparc"]],[/((?:avr32|ia64(?=;))|68k(?=\))|arm(?:64|(?=v\d+;))|(?=atmel\s)avr|(?:irix|mips|sparc)(?:64)?(?=;)|pa-risc)/i],[[ARCHITECTURE,util.lowerize]]],device:[[/\((ipad|playbook);[\w\s\);-]+(rim|apple)/i],[MODEL,VENDOR,[TYPE,TABLET]],[/applecoremedia\/[\w\.]+ \((ipad)/],[MODEL,[VENDOR,"Apple"],[TYPE,TABLET]],[/(apple\s{0,1}tv)/i],[[MODEL,"Apple TV"],[VENDOR,"Apple"]],[/(archos)\s(gamepad2?)/i,/(hp).+(touchpad)/i,/(hp).+(tablet)/i,/(kindle)\/([\w\.]+)/i,/\s(nook)[\w\s]+build\/(\w+)/i,/(dell)\s(strea[kpr\s\d]*[\dko])/i],[VENDOR,MODEL,[TYPE,TABLET]],[/(kf[A-z]+)\sbuild\/.+silk\//i],[MODEL,[VENDOR,"Amazon"],[TYPE,TABLET]],[/(sd|kf)[0349hijorstuw]+\sbuild\/.+silk\//i],[[MODEL,mapper.str,maps.device.amazon.model],[VENDOR,"Amazon"],[TYPE,MOBILE]],[/\((ip[honed|\s\w*]+);.+(apple)/i],[MODEL,VENDOR,[TYPE,MOBILE]],[/\((ip[honed|\s\w*]+);/i],[MODEL,[VENDOR,"Apple"],[TYPE,MOBILE]],[/(blackberry)[\s-]?(\w+)/i,/(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|meizu|motorola|polytron)[\s_-]?([\w-]*)/i,/(hp)\s([\w\s]+\w)/i,/(asus)-?(\w+)/i],[VENDOR,MODEL,[TYPE,MOBILE]],[/\(bb10;\s(\w+)/i],[MODEL,[VENDOR,"BlackBerry"],[TYPE,MOBILE]],[/android.+(transfo[prime\s]{4,10}\s\w+|eeepc|slider\s\w+|nexus 7|padfone)/i],[MODEL,[VENDOR,"Asus"],[TYPE,TABLET]],[/(sony)\s(tablet\s[ps])\sbuild\//i,/(sony)?(?:sgp.+)\sbuild\//i],[[VENDOR,"Sony"],[MODEL,"Xperia Tablet"],[TYPE,TABLET]],[/android.+\s([c-g]\d{4}|so[-l]\w+)\sbuild\//i],[MODEL,[VENDOR,"Sony"],[TYPE,MOBILE]],[/\s(ouya)\s/i,/(nintendo)\s([wids3u]+)/i],[VENDOR,MODEL,[TYPE,CONSOLE]],[/android.+;\s(shield)\sbuild/i],[MODEL,[VENDOR,"Nvidia"],[TYPE,CONSOLE]],[/(playstation\s[34portablevi]+)/i],[MODEL,[VENDOR,"Sony"],[TYPE,CONSOLE]],[/(sprint\s(\w+))/i],[[VENDOR,mapper.str,maps.device.sprint.vendor],[MODEL,mapper.str,maps.device.sprint.model],[TYPE,MOBILE]],[/(lenovo)\s?(S(?:5000|6000)+(?:[-][\w+]))/i],[VENDOR,MODEL,[TYPE,TABLET]],[/(htc)[;_\s-]+([\w\s]+(?=\))|\w+)*/i,/(zte)-(\w*)/i,/(alcatel|geeksphone|lenovo|nexian|panasonic|(?=;\s)sony)[_\s-]?([\w-]*)/i],[VENDOR,[MODEL,/_/g," "],[TYPE,MOBILE]],[/(nexus\s9)/i],[MODEL,[VENDOR,"HTC"],[TYPE,TABLET]],[/d\/huawei([\w\s-]+)[;\)]/i,/(nexus\s6p)/i],[MODEL,[VENDOR,"Huawei"],[TYPE,MOBILE]],[/(microsoft);\s(lumia[\s\w]+)/i],[VENDOR,MODEL,[TYPE,MOBILE]],[/[\s\(;](xbox(?:\sone)?)[\s\);]/i],[MODEL,[VENDOR,"Microsoft"],[TYPE,CONSOLE]],[/(kin\.[onetw]{3})/i],[[MODEL,/\./g," "],[VENDOR,"Microsoft"],[TYPE,MOBILE]],[/\s(milestone|droid(?:[2-4x]|\s(?:bionic|x2|pro|razr))?:?(\s4g)?)[\w\s]+build\//i,/mot[\s-]?(\w*)/i,/(XT\d{3,4}) build\//i,/(nexus\s6)/i],[MODEL,[VENDOR,"Motorola"],[TYPE,MOBILE]],[/android.+\s(mz60\d|xoom[\s2]{0,2})\sbuild\//i],[MODEL,[VENDOR,"Motorola"],[TYPE,TABLET]],[/hbbtv\/\d+\.\d+\.\d+\s+\([\w\s]*;\s*(\w[^;]*);([^;]*)/i],[[VENDOR,util.trim],[MODEL,util.trim],[TYPE,SMARTTV]],[/hbbtv.+maple;(\d+)/i],[[MODEL,/^/,"SmartTV"],[VENDOR,"Samsung"],[TYPE,SMARTTV]],[/\(dtv[\);].+(aquos)/i],[MODEL,[VENDOR,"Sharp"],[TYPE,SMARTTV]],[/android.+((sch-i[89]0\d|shw-m380s|gt-p\d{4}|gt-n\d+|sgh-t8[56]9|nexus 10))/i,/((SM-T\w+))/i],[[VENDOR,"Samsung"],MODEL,[TYPE,TABLET]],[/smart-tv.+(samsung)/i],[VENDOR,[TYPE,SMARTTV],MODEL],[/((s[cgp]h-\w+|gt-\w+|galaxy\snexus|sm-\w[\w\d]+))/i,/(sam[sung]*)[\s-]*(\w+-?[\w-]*)/i,/sec-((sgh\w+))/i],[[VENDOR,"Samsung"],MODEL,[TYPE,MOBILE]],[/sie-(\w*)/i],[MODEL,[VENDOR,"Siemens"],[TYPE,MOBILE]],[/(maemo|nokia).*(n900|lumia\s\d+)/i,/(nokia)[\s_-]?([\w-]*)/i],[[VENDOR,"Nokia"],MODEL,[TYPE,MOBILE]],[/android\s3\.[\s\w;-]{10}(a\d{3})/i],[MODEL,[VENDOR,"Acer"],[TYPE,TABLET]],[/android.+([vl]k\-?\d{3})\s+build/i],[MODEL,[VENDOR,"LG"],[TYPE,TABLET]],[/android\s3\.[\s\w;-]{10}(lg?)-([06cv9]{3,4})/i],[[VENDOR,"LG"],MODEL,[TYPE,TABLET]],[/(lg) netcast\.tv/i],[VENDOR,MODEL,[TYPE,SMARTTV]],[/(nexus\s[45])/i,/lg[e;\s\/-]+(\w*)/i,/android.+lg(\-?[\d\w]+)\s+build/i],[MODEL,[VENDOR,"LG"],[TYPE,MOBILE]],[/android.+(ideatab[a-z0-9\-\s]+)/i],[MODEL,[VENDOR,"Lenovo"],[TYPE,TABLET]],[/linux;.+((jolla));/i],[VENDOR,MODEL,[TYPE,MOBILE]],[/((pebble))app\/[\d\.]+\s/i],[VENDOR,MODEL,[TYPE,WEARABLE]],[/android.+;\s(oppo)\s?([\w\s]+)\sbuild/i],[VENDOR,MODEL,[TYPE,MOBILE]],[/crkey/i],[[MODEL,"Chromecast"],[VENDOR,"Google"]],[/android.+;\s(glass)\s\d/i],[MODEL,[VENDOR,"Google"],[TYPE,WEARABLE]],[/android.+;\s(pixel c)\s/i],[MODEL,[VENDOR,"Google"],[TYPE,TABLET]],[/android.+;\s(pixel xl|pixel)\s/i],[MODEL,[VENDOR,"Google"],[TYPE,MOBILE]],[/android.+;\s(\w+)\s+build\/hm\1/i,/android.+(hm[\s\-_]*note?[\s_]*(?:\d\w)?)\s+build/i,/android.+(mi[\s\-_]*(?:one|one[\s_]plus|note lte)?[\s_]*(?:\d?\w?)[\s_]*(?:plus)?)\s+build/i,/android.+(redmi[\s\-_]*(?:note)?(?:[\s_]*[\w\s]+))\s+build/i],[[MODEL,/_/g," "],[VENDOR,"Xiaomi"],[TYPE,MOBILE]],[/android.+(mi[\s\-_]*(?:pad)(?:[\s_]*[\w\s]+))\s+build/i],[[MODEL,/_/g," "],[VENDOR,"Xiaomi"],[TYPE,TABLET]],[/android.+;\s(m[1-5]\snote)\sbuild/i],[MODEL,[VENDOR,"Meizu"],[TYPE,TABLET]],[/android.+a000(1)\s+build/i,/android.+oneplus\s(a\d{4})\s+build/i],[MODEL,[VENDOR,"OnePlus"],[TYPE,MOBILE]],[/android.+[;\/]\s*(RCT[\d\w]+)\s+build/i],[MODEL,[VENDOR,"RCA"],[TYPE,TABLET]],[/android.+[;\/\s]+(Venue[\d\s]{2,7})\s+build/i],[MODEL,[VENDOR,"Dell"],[TYPE,TABLET]],[/android.+[;\/]\s*(Q[T|M][\d\w]+)\s+build/i],[MODEL,[VENDOR,"Verizon"],[TYPE,TABLET]],[/android.+[;\/]\s+(Barnes[&\s]+Noble\s+|BN[RT])(V?.*)\s+build/i],[[VENDOR,"Barnes & Noble"],MODEL,[TYPE,TABLET]],[/android.+[;\/]\s+(TM\d{3}.*\b)\s+build/i],[MODEL,[VENDOR,"NuVision"],[TYPE,TABLET]],[/android.+;\s(k88)\sbuild/i],[MODEL,[VENDOR,"ZTE"],[TYPE,TABLET]],[/android.+[;\/]\s*(gen\d{3})\s+build.*49h/i],[MODEL,[VENDOR,"Swiss"],[TYPE,MOBILE]],[/android.+[;\/]\s*(zur\d{3})\s+build/i],[MODEL,[VENDOR,"Swiss"],[TYPE,TABLET]],[/android.+[;\/]\s*((Zeki)?TB.*\b)\s+build/i],[MODEL,[VENDOR,"Zeki"],[TYPE,TABLET]],[/(android).+[;\/]\s+([YR]\d{2})\s+build/i,/android.+[;\/]\s+(Dragon[\-\s]+Touch\s+|DT)(\w{5})\sbuild/i],[[VENDOR,"Dragon Touch"],MODEL,[TYPE,TABLET]],[/android.+[;\/]\s*(NS-?\w{0,9})\sbuild/i],[MODEL,[VENDOR,"Insignia"],[TYPE,TABLET]],[/android.+[;\/]\s*((NX|Next)-?\w{0,9})\s+build/i],[MODEL,[VENDOR,"NextBook"],[TYPE,TABLET]],[/android.+[;\/]\s*(Xtreme\_)?(V(1[045]|2[015]|30|40|60|7[05]|90))\s+build/i],[[VENDOR,"Voice"],MODEL,[TYPE,MOBILE]],[/android.+[;\/]\s*(LVTEL\-)?(V1[12])\s+build/i],[[VENDOR,"LvTel"],MODEL,[TYPE,MOBILE]],[/android.+[;\/]\s*(V(100MD|700NA|7011|917G).*\b)\s+build/i],[MODEL,[VENDOR,"Envizen"],[TYPE,TABLET]],[/android.+[;\/]\s*(Le[\s\-]+Pan)[\s\-]+(\w{1,9})\s+build/i],[VENDOR,MODEL,[TYPE,TABLET]],[/android.+[;\/]\s*(Trio[\s\-]*.*)\s+build/i],[MODEL,[VENDOR,"MachSpeed"],[TYPE,TABLET]],[/android.+[;\/]\s*(Trinity)[\-\s]*(T\d{3})\s+build/i],[VENDOR,MODEL,[TYPE,TABLET]],[/android.+[;\/]\s*TU_(1491)\s+build/i],[MODEL,[VENDOR,"Rotor"],[TYPE,TABLET]],[/android.+(KS(.+))\s+build/i],[MODEL,[VENDOR,"Amazon"],[TYPE,TABLET]],[/android.+(Gigaset)[\s\-]+(Q\w{1,9})\s+build/i],[VENDOR,MODEL,[TYPE,TABLET]],[/\s(tablet|tab)[;\/]/i,/\s(mobile)(?:[;\/]|\ssafari)/i],[[TYPE,util.lowerize],VENDOR,MODEL],[/(android[\w\.\s\-]{0,9});.+build/i],[MODEL,[VENDOR,"Generic"]]],engine:[[/windows.+\sedge\/([\w\.]+)/i],[VERSION,[NAME,"EdgeHTML"]],[/(presto)\/([\w\.]+)/i,/(webkit|trident|netfront|netsurf|amaya|lynx|w3m)\/([\w\.]+)/i,/(khtml|tasman|links)[\/\s]\(?([\w\.]+)/i,/(icab)[\/\s]([23]\.[\d\.]+)/i],[NAME,VERSION],[/rv\:([\w\.]{1,9}).+(gecko)/i],[VERSION,NAME]],os:[[/microsoft\s(windows)\s(vista|xp)/i],[NAME,VERSION],[/(windows)\snt\s6\.2;\s(arm)/i,/(windows\sphone(?:\sos)*)[\s\/]?([\d\.\s\w]*)/i,/(windows\smobile|windows)[\s\/]?([ntce\d\.\s]+\w)/i],[NAME,[VERSION,mapper.str,maps.os.windows.version]],[/(win(?=3|9|n)|win\s9x\s)([nt\d\.]+)/i],[[NAME,"Windows"],[VERSION,mapper.str,maps.os.windows.version]],[/\((bb)(10);/i],[[NAME,"BlackBerry"],VERSION],[/(blackberry)\w*\/?([\w\.]*)/i,/(tizen)[\/\s]([\w\.]+)/i,/(android|webos|palm\sos|qnx|bada|rim\stablet\sos|meego|contiki)[\/\s-]?([\w\.]*)/i,/linux;.+(sailfish);/i],[NAME,VERSION],[/(symbian\s?os|symbos|s60(?=;))[\/\s-]?([\w\.]*)/i],[[NAME,"Symbian"],VERSION],[/\((series40);/i],[NAME],[/mozilla.+\(mobile;.+gecko.+firefox/i],[[NAME,"Firefox OS"],VERSION],[/(nintendo|playstation)\s([wids34portablevu]+)/i,/(mint)[\/\s\(]?(\w*)/i,/(mageia|vectorlinux)[;\s]/i,/(joli|[kxln]?ubuntu|debian|suse|opensuse|gentoo|(?=\s)arch|slackware|fedora|mandriva|centos|pclinuxos|redhat|zenwalk|linpus)[\/\s-]?(?!chrom)([\w\.-]*)/i,/(hurd|linux)\s?([\w\.]*)/i,/(gnu)\s?([\w\.]*)/i],[NAME,VERSION],[/(cros)\s[\w]+\s([\w\.]+\w)/i],[[NAME,"Chromium OS"],VERSION],[/(sunos)\s?([\w\.\d]*)/i],[[NAME,"Solaris"],VERSION],[/\s([frentopc-]{0,4}bsd|dragonfly)\s?([\w\.]*)/i],[NAME,VERSION],[/(haiku)\s(\w+)/i],[NAME,VERSION],[/cfnetwork\/.+darwin/i,/ip[honead]{2,4}(?:.*os\s([\w]+)\slike\smac|;\sopera)/i],[[VERSION,/_/g,"."],[NAME,"iOS"]],[/(mac\sos\sx)\s?([\w\s\.]*)/i,/(macintosh|mac(?=_powerpc)\s)/i],[[NAME,"Mac OS"],[VERSION,/_/g,"."]],[/((?:open)?solaris)[\/\s-]?([\w\.]*)/i,/(aix)\s((\d)(?=\.|\)|\s)[\w\.])*/i,/(plan\s9|minix|beos|os\/2|amigaos|morphos|risc\sos|openvms)/i,/(unix)\s?([\w\.]*)/i],[NAME,VERSION]]};var UAParser=function(uastring,extensions){if(typeof uastring==="object"){extensions=uastring;uastring=undefined}if(!(this instanceof UAParser)){return new UAParser(uastring,extensions).getResult()}var ua=uastring||(window&&window.navigator&&window.navigator.userAgent?window.navigator.userAgent:EMPTY);var rgxmap=extensions?util.extend(regexes,extensions):regexes;this.getBrowser=function(){var browser={name:undefined,version:undefined};mapper.rgx.call(browser,ua,rgxmap.browser);browser.major=util.major(browser.version);return browser};this.getCPU=function(){var cpu={architecture:undefined};mapper.rgx.call(cpu,ua,rgxmap.cpu);return cpu};this.getDevice=function(){var device={vendor:undefined,model:undefined,type:undefined};mapper.rgx.call(device,ua,rgxmap.device);return device};this.getEngine=function(){var engine={name:undefined,version:undefined};mapper.rgx.call(engine,ua,rgxmap.engine);return engine};this.getOS=function(){var os={name:undefined,version:undefined};mapper.rgx.call(os,ua,rgxmap.os);return os};this.getResult=function(){return{ua:this.getUA(),browser:this.getBrowser(),engine:this.getEngine(),os:this.getOS(),device:this.getDevice(),cpu:this.getCPU()}};this.getUA=function(){return ua};this.setUA=function(uastring){ua=uastring;return this};return this};UAParser.VERSION=LIBVERSION;UAParser.BROWSER={NAME:NAME,MAJOR:MAJOR,VERSION:VERSION};UAParser.CPU={ARCHITECTURE:ARCHITECTURE};UAParser.DEVICE={MODEL:MODEL,VENDOR:VENDOR,TYPE:TYPE,CONSOLE:CONSOLE,MOBILE:MOBILE,SMARTTV:SMARTTV,TABLET:TABLET,WEARABLE:WEARABLE,EMBEDDED:EMBEDDED};UAParser.ENGINE={NAME:NAME,VERSION:VERSION};UAParser.OS={NAME:NAME,VERSION:VERSION};if(typeof exports!==UNDEF_TYPE){if(typeof module!==UNDEF_TYPE&&module.exports){exports=module.exports=UAParser}exports.UAParser=UAParser}else{if("function"===FUNC_TYPE&&__nested_webpack_require_11768__(3)){!(__WEBPACK_AMD_DEFINE_RESULT__ = (function(){return UAParser}).call(exports, __nested_webpack_require_11768__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__))}else if(window){window.UAParser=UAParser}}var $=window&&(window.jQuery||window.Zepto);if(typeof $!==UNDEF_TYPE){var parser=new UAParser;$.ua=parser.getResult();$.ua.get=function(){return parser.getUA()};$.ua.set=function(uastring){parser.setUA(uastring);var result=parser.getResult();for(var prop in result){$.ua[prop]=result[prop]}}}})(typeof window==="object"?window:this);

/***/ }),
/* 3 */
/***/ (function(module, exports) {

/* WEBPACK VAR INJECTION */(function(__webpack_amd_options__) {/* globals __webpack_amd_options__ */
module.exports = __webpack_amd_options__;

/* WEBPACK VAR INJECTION */}.call(exports, {}))

/***/ }),
/* 4 */
/***/ (function(module, exports, __nested_webpack_require_29664__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _require = __nested_webpack_require_29664__(0),
    DEVICE_TYPES = _require.DEVICE_TYPES,
    defaultData = _require.defaultData;

var checkType = function checkType(type) {
    switch (type) {
        case DEVICE_TYPES.MOBILE:
            return { isMobile: true };
        case DEVICE_TYPES.TABLET:
            return { isTablet: true };
        case DEVICE_TYPES.SMART_TV:
            return { isSmartTV: true };
        case DEVICE_TYPES.CONSOLE:
            return { isConsole: true };
        case DEVICE_TYPES.WEARABLE:
            return { isWearable: true };
        case DEVICE_TYPES.BROWSER:
            return { isBrowser: true };
        default:
            return defaultData;
    }
};

var broPayload = function broPayload(isBrowser, browser, engine, os, ua) {
    return {
        isBrowser: isBrowser,
        browserMajorVersion: browser.major,
        browserFullVersion: browser.version,
        browserName: browser.name,
        engineName: engine.name || false,
        engineVersion: engine.version,
        osName: os.name,
        osVersion: os.version,
        userAgent: ua
    };
};

var mobilePayload = function mobilePayload(type, device, os, ua) {
    return _extends({}, type, {
        vendor: device.vendor,
        model: device.model,
        os: os.name,
        osVersion: os.version,
        ua: ua
    });
};

var stvPayload = function stvPayload(isSmartTV, engine, os, ua) {
    return {
        isSmartTV: isSmartTV,
        engineName: engine.name,
        engineVersion: engine.version,
        osName: os.name,
        osVersion: os.version,
        userAgent: ua
    };
};

var consolePayload = function consolePayload(isConsole, engine, os, ua) {
    return {
        isConsole: isConsole,
        engineName: engine.name,
        engineVersion: engine.version,
        osName: os.name,
        osVersion: os.version,
        userAgent: ua
    };
};

var wearPayload = function wearPayload(isWearable, engine, os, ua) {
    return {
        isWearable: isWearable,
        engineName: engine.name,
        engineVersion: engine.version,
        osName: os.name,
        osVersion: os.version,
        userAgent: ua
    };
};

var getNavigatorInstance = exports.getNavigatorInstance = function getNavigatorInstance() {
    if (typeof window !== 'undefined') {
        if (window.navigator || navigator) {
            return window.navigator || navigator;
        }
    }

    return false;
};

var isIOS13Check = exports.isIOS13Check = function isIOS13Check(type) {
    var nav = getNavigatorInstance();
    return nav && nav.platform && (nav.platform.indexOf(type) !== -1 || nav.platform === 'MacIntel' && nav.maxTouchPoints > 1 && !window.MSStream);
};

module.exports = {
    checkType: checkType,
    broPayload: broPayload,
    mobilePayload: mobilePayload,
    stvPayload: stvPayload,
    consolePayload: consolePayload,
    wearPayload: wearPayload,
    getNavigatorInstance: getNavigatorInstance,
    isIOS13Check: isIOS13Check
};

/***/ })
/******/ ]);

/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-8.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-8.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/containers/layouts/largeSidebar/Sidebar.vue?vue&type=style&index=0&id=696fbebe&lang=css":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-8.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-8.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/containers/layouts/largeSidebar/Sidebar.vue?vue&type=style&index=0&id=696fbebe&lang=css ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_8_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_8_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Sidebar_vue_vue_type_style_index_0_id_696fbebe_lang_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-8.use[1]!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-8.use[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Sidebar.vue?vue&type=style&index=0&id=696fbebe&lang=css */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-8.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-8.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/containers/layouts/largeSidebar/Sidebar.vue?vue&type=style&index=0&id=696fbebe&lang=css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_8_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_8_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Sidebar_vue_vue_type_style_index_0_id_696fbebe_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_8_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_8_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Sidebar_vue_vue_type_style_index_0_id_696fbebe_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-8.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-8.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/containers/layouts/largeSidebar/TopNav.vue?vue&type=style&index=0&id=7dfa9f1c&lang=css":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-8.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-8.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/containers/layouts/largeSidebar/TopNav.vue?vue&type=style&index=0&id=7dfa9f1c&lang=css ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_8_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_8_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_TopNav_vue_vue_type_style_index_0_id_7dfa9f1c_lang_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-8.use[1]!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-8.use[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./TopNav.vue?vue&type=style&index=0&id=7dfa9f1c&lang=css */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-8.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-8.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/containers/layouts/largeSidebar/TopNav.vue?vue&type=style&index=0&id=7dfa9f1c&lang=css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_8_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_8_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_TopNav_vue_vue_type_style_index_0_id_7dfa9f1c_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_8_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_8_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_TopNav_vue_vue_type_style_index_0_id_7dfa9f1c_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-8.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-8.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/containers/layouts/largeSidebar/TopNav.vue?vue&type=style&index=1&id=7dfa9f1c&scoped=true&lang=css":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-8.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-8.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/containers/layouts/largeSidebar/TopNav.vue?vue&type=style&index=1&id=7dfa9f1c&scoped=true&lang=css ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_8_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_8_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_TopNav_vue_vue_type_style_index_1_id_7dfa9f1c_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-8.use[1]!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-8.use[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./TopNav.vue?vue&type=style&index=1&id=7dfa9f1c&scoped=true&lang=css */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-8.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-8.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/containers/layouts/largeSidebar/TopNav.vue?vue&type=style&index=1&id=7dfa9f1c&scoped=true&lang=css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_8_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_8_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_TopNav_vue_vue_type_style_index_1_id_7dfa9f1c_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_8_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_8_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_TopNav_vue_vue_type_style_index_1_id_7dfa9f1c_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-8.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-8.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/containers/layouts/largeSidebar/VerticalSidebar.vue?vue&type=style&index=0&id=1b1a6f68&scoped=true&lang=css":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-8.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-8.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/containers/layouts/largeSidebar/VerticalSidebar.vue?vue&type=style&index=0&id=1b1a6f68&scoped=true&lang=css ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_8_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_8_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_VerticalSidebar_vue_vue_type_style_index_0_id_1b1a6f68_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-8.use[1]!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-8.use[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./VerticalSidebar.vue?vue&type=style&index=0&id=1b1a6f68&scoped=true&lang=css */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-8.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-8.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/containers/layouts/largeSidebar/VerticalSidebar.vue?vue&type=style&index=0&id=1b1a6f68&scoped=true&lang=css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_8_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_8_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_VerticalSidebar_vue_vue_type_style_index_0_id_1b1a6f68_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_8_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_8_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_VerticalSidebar_vue_vue_type_style_index_0_id_1b1a6f68_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-8.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-8.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/containers/layouts/largeSidebar/VerticalTopNav.vue?vue&type=style&index=0&id=957b9d9c&lang=css":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-8.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-8.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/containers/layouts/largeSidebar/VerticalTopNav.vue?vue&type=style&index=0&id=957b9d9c&lang=css ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_8_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_8_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_VerticalTopNav_vue_vue_type_style_index_0_id_957b9d9c_lang_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-8.use[1]!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-8.use[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./VerticalTopNav.vue?vue&type=style&index=0&id=957b9d9c&lang=css */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-8.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-8.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/containers/layouts/largeSidebar/VerticalTopNav.vue?vue&type=style&index=0&id=957b9d9c&lang=css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_8_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_8_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_VerticalTopNav_vue_vue_type_style_index_0_id_957b9d9c_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_8_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_8_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_VerticalTopNav_vue_vue_type_style_index_0_id_957b9d9c_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-8.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-8.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/containers/layouts/largeSidebar/VerticalTopNav.vue?vue&type=style&index=1&id=957b9d9c&scoped=true&lang=css":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-8.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-8.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/containers/layouts/largeSidebar/VerticalTopNav.vue?vue&type=style&index=1&id=957b9d9c&scoped=true&lang=css ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_8_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_8_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_VerticalTopNav_vue_vue_type_style_index_1_id_957b9d9c_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-8.use[1]!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-8.use[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./VerticalTopNav.vue?vue&type=style&index=1&id=957b9d9c&scoped=true&lang=css */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-8.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-8.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/containers/layouts/largeSidebar/VerticalTopNav.vue?vue&type=style&index=1&id=957b9d9c&scoped=true&lang=css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_8_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_8_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_VerticalTopNav_vue_vue_type_style_index_1_id_957b9d9c_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_8_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_8_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_VerticalTopNav_vue_vue_type_style_index_1_id_957b9d9c_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-8.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-8.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/containers/layouts/largeSidebar/index.vue?vue&type=style&index=0&id=427f8858&scoped=true&lang=css":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-8.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-8.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/containers/layouts/largeSidebar/index.vue?vue&type=style&index=0&id=427f8858&scoped=true&lang=css ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_8_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_8_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_427f8858_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-8.use[1]!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-8.use[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./index.vue?vue&type=style&index=0&id=427f8858&scoped=true&lang=css */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-8.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-8.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/containers/layouts/largeSidebar/index.vue?vue&type=style&index=0&id=427f8858&scoped=true&lang=css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_8_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_8_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_427f8858_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_8_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_8_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_427f8858_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

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

/***/ "./node_modules/vue-clickaway/dist/vue-clickaway.common.js":
/*!*****************************************************************!*\
  !*** ./node_modules/vue-clickaway/dist/vue-clickaway.common.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var Vue = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm.js");
Vue = 'default' in Vue ? Vue['default'] : Vue;

var version = '2.2.2';

var compatible = (/^2\./).test(Vue.version);
if (!compatible) {
  Vue.util.warn('VueClickaway ' + version + ' only supports Vue 2.x, and does not support Vue ' + Vue.version);
}



// @SECTION: implementation

var HANDLER = '_vue_clickaway_handler';

function bind(el, binding, vnode) {
  unbind(el);

  var vm = vnode.context;

  var callback = binding.value;
  if (typeof callback !== 'function') {
    if (true) {
      Vue.util.warn(
        'v-' + binding.name + '="' +
        binding.expression + '" expects a function value, ' +
        'got ' + callback
      );
    }
    return;
  }

  // @NOTE: Vue binds directives in microtasks, while UI events are dispatched
  //        in macrotasks. This causes the listener to be set up before
  //        the "origin" click event (the event that lead to the binding of
  //        the directive) arrives at the document root. To work around that,
  //        we ignore events until the end of the "initial" macrotask.
  // @REFERENCE: https://jakearchibald.com/2015/tasks-microtasks-queues-and-schedules/
  // @REFERENCE: https://github.com/simplesmiler/vue-clickaway/issues/8
  var initialMacrotaskEnded = false;
  setTimeout(function() {
    initialMacrotaskEnded = true;
  }, 0);

  el[HANDLER] = function(ev) {
    // @NOTE: this test used to be just `el.containts`, but working with path is better,
    //        because it tests whether the element was there at the time of
    //        the click, not whether it is there now, that the event has arrived
    //        to the top.
    // @NOTE: `.path` is non-standard, the standard way is `.composedPath()`
    var path = ev.path || (ev.composedPath ? ev.composedPath() : undefined);
    if (initialMacrotaskEnded && (path ? path.indexOf(el) < 0 : !el.contains(ev.target))) {
      return callback.call(vm, ev);
    }
  };

  document.documentElement.addEventListener('click', el[HANDLER], false);
}

function unbind(el) {
  document.documentElement.removeEventListener('click', el[HANDLER], false);
  delete el[HANDLER];
}

var directive = {
  bind: bind,
  update: function(el, binding) {
    if (binding.value === binding.oldValue) return;
    bind(el, binding);
  },
  unbind: unbind,
};

var mixin = {
  directives: { onClickaway: directive },
};

exports.version = version;
exports.directive = directive;
exports.mixin = mixin;

/***/ }),

/***/ "./resources/src/containers/layouts/common/footer.vue":
/*!************************************************************!*\
  !*** ./resources/src/containers/layouts/common/footer.vue ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _footer_vue_vue_type_template_id_1dfb17ff_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./footer.vue?vue&type=template&id=1dfb17ff&scoped=true */ "./resources/src/containers/layouts/common/footer.vue?vue&type=template&id=1dfb17ff&scoped=true");
/* harmony import */ var _footer_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./footer.vue?vue&type=script&lang=js */ "./resources/src/containers/layouts/common/footer.vue?vue&type=script&lang=js");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _footer_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _footer_vue_vue_type_template_id_1dfb17ff_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render,
  _footer_vue_vue_type_template_id_1dfb17ff_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "1dfb17ff",
  null
  
)

/* hot reload */
if (false) // removed by dead control flow
{ var api; }
component.options.__file = "resources/src/containers/layouts/common/footer.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/src/containers/layouts/common/footer.vue?vue&type=script&lang=js":
/*!************************************************************************************!*\
  !*** ./resources/src/containers/layouts/common/footer.vue?vue&type=script&lang=js ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_footer_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./footer.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/containers/layouts/common/footer.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_footer_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/src/containers/layouts/common/footer.vue?vue&type=template&id=1dfb17ff&scoped=true":
/*!******************************************************************************************************!*\
  !*** ./resources/src/containers/layouts/common/footer.vue?vue&type=template&id=1dfb17ff&scoped=true ***!
  \******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_footer_vue_vue_type_template_id_1dfb17ff_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_footer_vue_vue_type_template_id_1dfb17ff_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_footer_vue_vue_type_template_id_1dfb17ff_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./footer.vue?vue&type=template&id=1dfb17ff&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/containers/layouts/common/footer.vue?vue&type=template&id=1dfb17ff&scoped=true");


/***/ }),

/***/ "./resources/src/containers/layouts/largeSidebar/Sidebar.vue":
/*!*******************************************************************!*\
  !*** ./resources/src/containers/layouts/largeSidebar/Sidebar.vue ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Sidebar_vue_vue_type_template_id_696fbebe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Sidebar.vue?vue&type=template&id=696fbebe */ "./resources/src/containers/layouts/largeSidebar/Sidebar.vue?vue&type=template&id=696fbebe");
/* harmony import */ var _Sidebar_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Sidebar.vue?vue&type=script&lang=js */ "./resources/src/containers/layouts/largeSidebar/Sidebar.vue?vue&type=script&lang=js");
/* harmony import */ var _Sidebar_vue_vue_type_style_index_0_id_696fbebe_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Sidebar.vue?vue&type=style&index=0&id=696fbebe&lang=css */ "./resources/src/containers/layouts/largeSidebar/Sidebar.vue?vue&type=style&index=0&id=696fbebe&lang=css");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Sidebar_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _Sidebar_vue_vue_type_template_id_696fbebe__WEBPACK_IMPORTED_MODULE_0__.render,
  _Sidebar_vue_vue_type_template_id_696fbebe__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) // removed by dead control flow
{ var api; }
component.options.__file = "resources/src/containers/layouts/largeSidebar/Sidebar.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/src/containers/layouts/largeSidebar/Sidebar.vue?vue&type=script&lang=js":
/*!*******************************************************************************************!*\
  !*** ./resources/src/containers/layouts/largeSidebar/Sidebar.vue?vue&type=script&lang=js ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Sidebar_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Sidebar.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/containers/layouts/largeSidebar/Sidebar.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Sidebar_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/src/containers/layouts/largeSidebar/Sidebar.vue?vue&type=style&index=0&id=696fbebe&lang=css":
/*!***************************************************************************************************************!*\
  !*** ./resources/src/containers/layouts/largeSidebar/Sidebar.vue?vue&type=style&index=0&id=696fbebe&lang=css ***!
  \***************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_8_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_8_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Sidebar_vue_vue_type_style_index_0_id_696fbebe_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader/dist/cjs.js!../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-8.use[1]!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-8.use[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Sidebar.vue?vue&type=style&index=0&id=696fbebe&lang=css */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-8.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-8.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/containers/layouts/largeSidebar/Sidebar.vue?vue&type=style&index=0&id=696fbebe&lang=css");


/***/ }),

/***/ "./resources/src/containers/layouts/largeSidebar/Sidebar.vue?vue&type=template&id=696fbebe":
/*!*************************************************************************************************!*\
  !*** ./resources/src/containers/layouts/largeSidebar/Sidebar.vue?vue&type=template&id=696fbebe ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Sidebar_vue_vue_type_template_id_696fbebe__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Sidebar_vue_vue_type_template_id_696fbebe__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Sidebar_vue_vue_type_template_id_696fbebe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Sidebar.vue?vue&type=template&id=696fbebe */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/containers/layouts/largeSidebar/Sidebar.vue?vue&type=template&id=696fbebe");


/***/ }),

/***/ "./resources/src/containers/layouts/largeSidebar/TopNav.vue":
/*!******************************************************************!*\
  !*** ./resources/src/containers/layouts/largeSidebar/TopNav.vue ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _TopNav_vue_vue_type_template_id_7dfa9f1c_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TopNav.vue?vue&type=template&id=7dfa9f1c&scoped=true */ "./resources/src/containers/layouts/largeSidebar/TopNav.vue?vue&type=template&id=7dfa9f1c&scoped=true");
/* harmony import */ var _TopNav_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TopNav.vue?vue&type=script&lang=js */ "./resources/src/containers/layouts/largeSidebar/TopNav.vue?vue&type=script&lang=js");
/* harmony import */ var _TopNav_vue_vue_type_style_index_0_id_7dfa9f1c_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./TopNav.vue?vue&type=style&index=0&id=7dfa9f1c&lang=css */ "./resources/src/containers/layouts/largeSidebar/TopNav.vue?vue&type=style&index=0&id=7dfa9f1c&lang=css");
/* harmony import */ var _TopNav_vue_vue_type_style_index_1_id_7dfa9f1c_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./TopNav.vue?vue&type=style&index=1&id=7dfa9f1c&scoped=true&lang=css */ "./resources/src/containers/layouts/largeSidebar/TopNav.vue?vue&type=style&index=1&id=7dfa9f1c&scoped=true&lang=css");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;



/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_4__["default"])(
  _TopNav_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _TopNav_vue_vue_type_template_id_7dfa9f1c_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render,
  _TopNav_vue_vue_type_template_id_7dfa9f1c_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "7dfa9f1c",
  null
  
)

/* hot reload */
if (false) // removed by dead control flow
{ var api; }
component.options.__file = "resources/src/containers/layouts/largeSidebar/TopNav.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/src/containers/layouts/largeSidebar/TopNav.vue?vue&type=script&lang=js":
/*!******************************************************************************************!*\
  !*** ./resources/src/containers/layouts/largeSidebar/TopNav.vue?vue&type=script&lang=js ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TopNav_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./TopNav.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/containers/layouts/largeSidebar/TopNav.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TopNav_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/src/containers/layouts/largeSidebar/TopNav.vue?vue&type=style&index=0&id=7dfa9f1c&lang=css":
/*!**************************************************************************************************************!*\
  !*** ./resources/src/containers/layouts/largeSidebar/TopNav.vue?vue&type=style&index=0&id=7dfa9f1c&lang=css ***!
  \**************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_8_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_8_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_TopNav_vue_vue_type_style_index_0_id_7dfa9f1c_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader/dist/cjs.js!../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-8.use[1]!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-8.use[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./TopNav.vue?vue&type=style&index=0&id=7dfa9f1c&lang=css */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-8.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-8.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/containers/layouts/largeSidebar/TopNav.vue?vue&type=style&index=0&id=7dfa9f1c&lang=css");


/***/ }),

/***/ "./resources/src/containers/layouts/largeSidebar/TopNav.vue?vue&type=style&index=1&id=7dfa9f1c&scoped=true&lang=css":
/*!**************************************************************************************************************************!*\
  !*** ./resources/src/containers/layouts/largeSidebar/TopNav.vue?vue&type=style&index=1&id=7dfa9f1c&scoped=true&lang=css ***!
  \**************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_8_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_8_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_TopNav_vue_vue_type_style_index_1_id_7dfa9f1c_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader/dist/cjs.js!../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-8.use[1]!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-8.use[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./TopNav.vue?vue&type=style&index=1&id=7dfa9f1c&scoped=true&lang=css */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-8.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-8.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/containers/layouts/largeSidebar/TopNav.vue?vue&type=style&index=1&id=7dfa9f1c&scoped=true&lang=css");


/***/ }),

/***/ "./resources/src/containers/layouts/largeSidebar/TopNav.vue?vue&type=template&id=7dfa9f1c&scoped=true":
/*!************************************************************************************************************!*\
  !*** ./resources/src/containers/layouts/largeSidebar/TopNav.vue?vue&type=template&id=7dfa9f1c&scoped=true ***!
  \************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_TopNav_vue_vue_type_template_id_7dfa9f1c_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_TopNav_vue_vue_type_template_id_7dfa9f1c_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_TopNav_vue_vue_type_template_id_7dfa9f1c_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./TopNav.vue?vue&type=template&id=7dfa9f1c&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/containers/layouts/largeSidebar/TopNav.vue?vue&type=template&id=7dfa9f1c&scoped=true");


/***/ }),

/***/ "./resources/src/containers/layouts/largeSidebar/VerticalSidebar.vue":
/*!***************************************************************************!*\
  !*** ./resources/src/containers/layouts/largeSidebar/VerticalSidebar.vue ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _VerticalSidebar_vue_vue_type_template_id_1b1a6f68_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./VerticalSidebar.vue?vue&type=template&id=1b1a6f68&scoped=true */ "./resources/src/containers/layouts/largeSidebar/VerticalSidebar.vue?vue&type=template&id=1b1a6f68&scoped=true");
/* harmony import */ var _VerticalSidebar_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./VerticalSidebar.vue?vue&type=script&lang=js */ "./resources/src/containers/layouts/largeSidebar/VerticalSidebar.vue?vue&type=script&lang=js");
/* harmony import */ var _VerticalSidebar_vue_vue_type_style_index_0_id_1b1a6f68_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./VerticalSidebar.vue?vue&type=style&index=0&id=1b1a6f68&scoped=true&lang=css */ "./resources/src/containers/layouts/largeSidebar/VerticalSidebar.vue?vue&type=style&index=0&id=1b1a6f68&scoped=true&lang=css");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _VerticalSidebar_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _VerticalSidebar_vue_vue_type_template_id_1b1a6f68_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render,
  _VerticalSidebar_vue_vue_type_template_id_1b1a6f68_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "1b1a6f68",
  null
  
)

/* hot reload */
if (false) // removed by dead control flow
{ var api; }
component.options.__file = "resources/src/containers/layouts/largeSidebar/VerticalSidebar.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/src/containers/layouts/largeSidebar/VerticalSidebar.vue?vue&type=script&lang=js":
/*!***************************************************************************************************!*\
  !*** ./resources/src/containers/layouts/largeSidebar/VerticalSidebar.vue?vue&type=script&lang=js ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_VerticalSidebar_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./VerticalSidebar.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/containers/layouts/largeSidebar/VerticalSidebar.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_VerticalSidebar_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/src/containers/layouts/largeSidebar/VerticalSidebar.vue?vue&type=style&index=0&id=1b1a6f68&scoped=true&lang=css":
/*!***********************************************************************************************************************************!*\
  !*** ./resources/src/containers/layouts/largeSidebar/VerticalSidebar.vue?vue&type=style&index=0&id=1b1a6f68&scoped=true&lang=css ***!
  \***********************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_8_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_8_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_VerticalSidebar_vue_vue_type_style_index_0_id_1b1a6f68_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader/dist/cjs.js!../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-8.use[1]!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-8.use[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./VerticalSidebar.vue?vue&type=style&index=0&id=1b1a6f68&scoped=true&lang=css */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-8.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-8.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/containers/layouts/largeSidebar/VerticalSidebar.vue?vue&type=style&index=0&id=1b1a6f68&scoped=true&lang=css");


/***/ }),

/***/ "./resources/src/containers/layouts/largeSidebar/VerticalSidebar.vue?vue&type=template&id=1b1a6f68&scoped=true":
/*!*********************************************************************************************************************!*\
  !*** ./resources/src/containers/layouts/largeSidebar/VerticalSidebar.vue?vue&type=template&id=1b1a6f68&scoped=true ***!
  \*********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_VerticalSidebar_vue_vue_type_template_id_1b1a6f68_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_VerticalSidebar_vue_vue_type_template_id_1b1a6f68_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_VerticalSidebar_vue_vue_type_template_id_1b1a6f68_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./VerticalSidebar.vue?vue&type=template&id=1b1a6f68&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/containers/layouts/largeSidebar/VerticalSidebar.vue?vue&type=template&id=1b1a6f68&scoped=true");


/***/ }),

/***/ "./resources/src/containers/layouts/largeSidebar/VerticalTopNav.vue":
/*!**************************************************************************!*\
  !*** ./resources/src/containers/layouts/largeSidebar/VerticalTopNav.vue ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _VerticalTopNav_vue_vue_type_template_id_957b9d9c_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./VerticalTopNav.vue?vue&type=template&id=957b9d9c&scoped=true */ "./resources/src/containers/layouts/largeSidebar/VerticalTopNav.vue?vue&type=template&id=957b9d9c&scoped=true");
/* harmony import */ var _VerticalTopNav_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./VerticalTopNav.vue?vue&type=script&lang=js */ "./resources/src/containers/layouts/largeSidebar/VerticalTopNav.vue?vue&type=script&lang=js");
/* harmony import */ var _VerticalTopNav_vue_vue_type_style_index_0_id_957b9d9c_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./VerticalTopNav.vue?vue&type=style&index=0&id=957b9d9c&lang=css */ "./resources/src/containers/layouts/largeSidebar/VerticalTopNav.vue?vue&type=style&index=0&id=957b9d9c&lang=css");
/* harmony import */ var _VerticalTopNav_vue_vue_type_style_index_1_id_957b9d9c_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./VerticalTopNav.vue?vue&type=style&index=1&id=957b9d9c&scoped=true&lang=css */ "./resources/src/containers/layouts/largeSidebar/VerticalTopNav.vue?vue&type=style&index=1&id=957b9d9c&scoped=true&lang=css");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;



/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_4__["default"])(
  _VerticalTopNav_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _VerticalTopNav_vue_vue_type_template_id_957b9d9c_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render,
  _VerticalTopNav_vue_vue_type_template_id_957b9d9c_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "957b9d9c",
  null
  
)

/* hot reload */
if (false) // removed by dead control flow
{ var api; }
component.options.__file = "resources/src/containers/layouts/largeSidebar/VerticalTopNav.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/src/containers/layouts/largeSidebar/VerticalTopNav.vue?vue&type=script&lang=js":
/*!**************************************************************************************************!*\
  !*** ./resources/src/containers/layouts/largeSidebar/VerticalTopNav.vue?vue&type=script&lang=js ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_VerticalTopNav_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./VerticalTopNav.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/containers/layouts/largeSidebar/VerticalTopNav.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_VerticalTopNav_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/src/containers/layouts/largeSidebar/VerticalTopNav.vue?vue&type=style&index=0&id=957b9d9c&lang=css":
/*!**********************************************************************************************************************!*\
  !*** ./resources/src/containers/layouts/largeSidebar/VerticalTopNav.vue?vue&type=style&index=0&id=957b9d9c&lang=css ***!
  \**********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_8_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_8_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_VerticalTopNav_vue_vue_type_style_index_0_id_957b9d9c_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader/dist/cjs.js!../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-8.use[1]!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-8.use[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./VerticalTopNav.vue?vue&type=style&index=0&id=957b9d9c&lang=css */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-8.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-8.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/containers/layouts/largeSidebar/VerticalTopNav.vue?vue&type=style&index=0&id=957b9d9c&lang=css");


/***/ }),

/***/ "./resources/src/containers/layouts/largeSidebar/VerticalTopNav.vue?vue&type=style&index=1&id=957b9d9c&scoped=true&lang=css":
/*!**********************************************************************************************************************************!*\
  !*** ./resources/src/containers/layouts/largeSidebar/VerticalTopNav.vue?vue&type=style&index=1&id=957b9d9c&scoped=true&lang=css ***!
  \**********************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_8_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_8_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_VerticalTopNav_vue_vue_type_style_index_1_id_957b9d9c_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader/dist/cjs.js!../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-8.use[1]!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-8.use[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./VerticalTopNav.vue?vue&type=style&index=1&id=957b9d9c&scoped=true&lang=css */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-8.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-8.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/containers/layouts/largeSidebar/VerticalTopNav.vue?vue&type=style&index=1&id=957b9d9c&scoped=true&lang=css");


/***/ }),

/***/ "./resources/src/containers/layouts/largeSidebar/VerticalTopNav.vue?vue&type=template&id=957b9d9c&scoped=true":
/*!********************************************************************************************************************!*\
  !*** ./resources/src/containers/layouts/largeSidebar/VerticalTopNav.vue?vue&type=template&id=957b9d9c&scoped=true ***!
  \********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_VerticalTopNav_vue_vue_type_template_id_957b9d9c_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_VerticalTopNav_vue_vue_type_template_id_957b9d9c_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_VerticalTopNav_vue_vue_type_template_id_957b9d9c_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./VerticalTopNav.vue?vue&type=template&id=957b9d9c&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/containers/layouts/largeSidebar/VerticalTopNav.vue?vue&type=template&id=957b9d9c&scoped=true");


/***/ }),

/***/ "./resources/src/containers/layouts/largeSidebar/index.vue":
/*!*****************************************************************!*\
  !*** ./resources/src/containers/layouts/largeSidebar/index.vue ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _index_vue_vue_type_template_id_427f8858_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=427f8858&scoped=true */ "./resources/src/containers/layouts/largeSidebar/index.vue?vue&type=template&id=427f8858&scoped=true");
/* harmony import */ var _index_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js */ "./resources/src/containers/layouts/largeSidebar/index.vue?vue&type=script&lang=js");
/* harmony import */ var _index_vue_vue_type_style_index_0_id_427f8858_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.vue?vue&type=style&index=0&id=427f8858&scoped=true&lang=css */ "./resources/src/containers/layouts/largeSidebar/index.vue?vue&type=style&index=0&id=427f8858&scoped=true&lang=css");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _index_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _index_vue_vue_type_template_id_427f8858_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render,
  _index_vue_vue_type_template_id_427f8858_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "427f8858",
  null
  
)

/* hot reload */
if (false) // removed by dead control flow
{ var api; }
component.options.__file = "resources/src/containers/layouts/largeSidebar/index.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/src/containers/layouts/largeSidebar/index.vue?vue&type=script&lang=js":
/*!*****************************************************************************************!*\
  !*** ./resources/src/containers/layouts/largeSidebar/index.vue?vue&type=script&lang=js ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./index.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/containers/layouts/largeSidebar/index.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/src/containers/layouts/largeSidebar/index.vue?vue&type=style&index=0&id=427f8858&scoped=true&lang=css":
/*!*************************************************************************************************************************!*\
  !*** ./resources/src/containers/layouts/largeSidebar/index.vue?vue&type=style&index=0&id=427f8858&scoped=true&lang=css ***!
  \*************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_8_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_8_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_427f8858_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader/dist/cjs.js!../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-8.use[1]!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-8.use[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./index.vue?vue&type=style&index=0&id=427f8858&scoped=true&lang=css */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-8.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-8.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/containers/layouts/largeSidebar/index.vue?vue&type=style&index=0&id=427f8858&scoped=true&lang=css");


/***/ }),

/***/ "./resources/src/containers/layouts/largeSidebar/index.vue?vue&type=template&id=427f8858&scoped=true":
/*!***********************************************************************************************************!*\
  !*** ./resources/src/containers/layouts/largeSidebar/index.vue?vue&type=template&id=427f8858&scoped=true ***!
  \***********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_427f8858_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_427f8858_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_427f8858_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./index.vue?vue&type=template&id=427f8858&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/containers/layouts/largeSidebar/index.vue?vue&type=template&id=427f8858&scoped=true");


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

/***/ })

}]);