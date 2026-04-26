"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["calendar_booking"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/bookings/BookingCalendar.vue?vue&type=script&lang=js":
/*!************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/bookings/BookingCalendar.vue?vue&type=script&lang=js ***!
  \************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! nprogress */ "./node_modules/nprogress/nprogress.js");
/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(nprogress__WEBPACK_IMPORTED_MODULE_0__);
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "BookingCalendar",
  metaInfo: {
    title: "Bookings Calendar"
  },
  data: function data() {
    return {
      isLoading: true,
      calendar: null,
      selectedBooking: null,
      calendarInitialized: false,
      statusColors: {
        pending: {
          bg: "#fed7aa",
          border: "#f97316",
          text: "#9a3412"
        },
        confirmed: {
          bg: "#dbeafe",
          border: "#3b82f6",
          text: "#1d4ed8"
        },
        cancelled: {
          bg: "#fee2e2",
          border: "#ef4444",
          text: "#b91c1c"
        },
        completed: {
          bg: "#bbf7d0",
          border: "#22c55e",
          text: "#15803d"
        }
      }
    };
  },
  watch: {
    isLoading: function isLoading(newVal) {
      var _this = this;
      // When isLoading becomes false, the calendar element should be available
      if (!newVal && !this.calendarInitialized) {
        this.$nextTick(function () {
          // Wait a bit more to ensure the element is in the DOM
          setTimeout(function () {
            if (_this.$refs.calendarEl && !_this.calendarInitialized) {
              _this.initCalendar();
            }
          }, 200);
        });
      }
    }
  },
  methods: {
    ensureFullCalendar: function ensureFullCalendar() {
      var _this2 = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee() {
        return _regenerator().w(function (_context) {
          while (1) switch (_context.n) {
            case 0:
              if (!(window.FullCalendar && window.FullCalendar.Calendar)) {
                _context.n = 1;
                break;
              }
              return _context.a(2);
            case 1:
              if (!_this2._loadingFullCalendar) {
                _this2._loadingFullCalendar = new Promise(function (resolve, reject) {
                  // CSS
                  var cssId = "fullcalendar-main-css";
                  if (!document.getElementById(cssId)) {
                    var link = document.createElement("link");
                    link.id = cssId;
                    link.rel = "stylesheet";
                    link.href = "https://cdn.jsdelivr.net/npm/fullcalendar@5.11.5/main.min.css";
                    document.head.appendChild(link);
                  }

                  // JS
                  var script = document.createElement("script");
                  script.src = "https://cdn.jsdelivr.net/npm/fullcalendar@5.11.5/main.min.js";
                  script.async = true;
                  script.onload = function () {
                    return resolve();
                  };
                  script.onerror = function (err) {
                    return reject(err);
                  };
                  document.head.appendChild(script);
                });
              }
              return _context.a(2, _this2._loadingFullCalendar);
          }
        }, _callee);
      }))();
    },
    initCalendar: function initCalendar() {
      var _this3 = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2() {
        var el, Calendar, isMobile, handleResize, _t;
        return _regenerator().w(function (_context2) {
          while (1) switch (_context2.p = _context2.n) {
            case 0:
              _context2.p = 0;
              nprogress__WEBPACK_IMPORTED_MODULE_0___default().start();
              nprogress__WEBPACK_IMPORTED_MODULE_0___default().set(0.1);

              // Wait for DOM to be ready
              _context2.n = 1;
              return _this3.$nextTick();
            case 1:
              _context2.n = 2;
              return new Promise(function (resolve) {
                return setTimeout(resolve, 100);
              });
            case 2:
              _context2.n = 3;
              return _this3.ensureFullCalendar();
            case 3:
              _context2.n = 4;
              return _this3.$nextTick();
            case 4:
              el = _this3.$refs.calendarEl;
              if (el) {
                _context2.n = 5;
                break;
              }
              console.error('Calendar element not found. Retrying...');
              // Retry after a delay
              setTimeout(function () {
                _this3.initCalendar();
              }, 500);
              return _context2.a(2);
            case 5:
              if (!(!window.FullCalendar || !window.FullCalendar.Calendar)) {
                _context2.n = 6;
                break;
              }
              console.error('FullCalendar library not loaded');
              _this3.isLoading = false;
              nprogress__WEBPACK_IMPORTED_MODULE_0___default().done();
              return _context2.a(2);
            case 6:
              Calendar = window.FullCalendar.Calendar; // Destroy existing calendar if it exists
              if (_this3.calendar) {
                _this3.calendar.destroy();
              }

              // Detect mobile view
              isMobile = window.innerWidth < 768;
              _this3.calendar = new Calendar(el, _objectSpread({
                initialView: isMobile ? "dayGridMonth" : "dayGridMonth",
                height: "auto",
                headerToolbar: {
                  left: isMobile ? "prev,next" : "prev,next today",
                  center: "title",
                  right: isMobile ? "dayGridMonth" : "dayGridMonth,timeGridWeek,timeGridDay"
                },
                firstDay: 1,
                selectable: false,
                navLinks: true,
                locale: 'en',
                eventTimeFormat: {
                  hour: "2-digit",
                  minute: "2-digit",
                  hour12: false
                },
                events: function events(info, success, failure) {
                  _this3.fetchEvents(info.startStr, info.endStr, success, failure);
                },
                eventClick: function eventClick(info) {
                  _this3.handleEventClick(info);
                },
                eventDisplay: 'block',
                displayEventTime: true,
                displayEventEnd: true
              }, isMobile && {
                dayMaxEvents: 2,
                moreLinkClick: 'popover'
              }));

              // Handle window resize
              handleResize = function handleResize() {
                if (_this3.calendar) {
                  var isMobileNow = window.innerWidth < 768;
                  var currentView = _this3.calendar.view.type;

                  // Update header toolbar based on screen size
                  if (isMobileNow) {
                    _this3.calendar.setOption('headerToolbar', {
                      left: "prev,next",
                      center: "title",
                      right: "dayGridMonth"
                    });
                  } else {
                    _this3.calendar.setOption('headerToolbar', {
                      left: "prev,next today",
                      center: "title",
                      right: "dayGridMonth,timeGridWeek,timeGridDay"
                    });
                  }
                  _this3.calendar.render();
                }
              };
              window.addEventListener('resize', handleResize);
              _this3._resizeHandler = handleResize;
              _this3.calendar.render();

              // Force a refresh after a short delay to ensure events load
              setTimeout(function () {
                if (_this3.calendar) {
                  _this3.calendar.refetchEvents();
                }
              }, 500);
              _this3.calendarInitialized = true;
              _context2.n = 8;
              break;
            case 7:
              _context2.p = 7;
              _t = _context2.v;
              console.error('Error initializing calendar:', _t);
              _this3.makeToast("danger", "Failed to load calendar. Please refresh the page.", "Error");
            case 8:
              _context2.p = 8;
              _this3.isLoading = false;
              nprogress__WEBPACK_IMPORTED_MODULE_0___default().done();
              return _context2.f(8);
            case 9:
              return _context2.a(2);
          }
        }, _callee2, null, [[0, 7, 8, 9]]);
      }))();
    },
    fetchEvents: function fetchEvents(startStr, endStr, successCallback, failureCallback) {
      var _this4 = this;
      axios.get("bookings", {
        params: {
          from: startStr,
          to: endStr,
          limit: -1,
          SortField: "booking_date",
          SortType: "asc"
        }
      }).then(function (_ref) {
        var data = _ref.data;
        var bookings = data.bookings || [];
        var events = bookings.map(function (b) {
          if (!b.booking_date) {
            return null; // Skip bookings without a date
          }
          var date = b.booking_date;
          // Normalize time format (handle H:i:s to H:i)
          var startTime = (b.booking_time || "00:00").slice(0, 5);
          var endTime = b.booking_end_time ? b.booking_end_time.slice(0, 5) : null;

          // Create ISO datetime strings
          var start = date + "T" + startTime + ":00";

          // For end time, if not provided, add 1 hour to start time for all-day events
          var end = null;
          if (endTime && endTime !== "") {
            end = date + "T" + endTime + ":00";
          } else {
            // If no end time, make it a 1-hour event
            var startDate = new Date(start);
            startDate.setHours(startDate.getHours() + 1);
            end = startDate.toISOString().slice(0, 19);
          }
          var colors = _this4.statusColors[b.status] || _this4.statusColors.pending;
          return {
            id: String(b.id),
            title: b.customer_name || "Booking #".concat(b.id),
            start: start,
            end: end,
            allDay: false,
            backgroundColor: colors.bg,
            borderColor: colors.border,
            textColor: colors.text,
            extendedProps: {
              booking: b
            }
          };
        }).filter(function (event) {
          return event !== null;
        }); // Remove any null events

        if (successCallback) {
          successCallback(events);
        }
      })["catch"](function (err) {
        console.error('Error fetching calendar events:', err);
        if (failureCallback) {
          failureCallback(err);
        } else {
          // If no failure callback, still call success with empty array
          if (successCallback) {
            successCallback([]);
          }
        }
      });
    },
    handleEventClick: function handleEventClick(info) {
      var data = info && info.event && info.event.extendedProps && info.event.extendedProps.booking || null;
      if (!data) return;
      this.selectedBooking = {
        id: data.id,
        customer_name: data.customer_name,
        product_name: data.product_name,
        booking_date: data.booking_date,
        booking_time: data.booking_time,
        booking_end_time: data.booking_end_time,
        status: data.status,
        notes: data.notes
      };
      this.$bvModal.show("booking-calendar-detail-modal");
    },
    statusLabel: function statusLabel(status) {
      if (status === "pending") {
        return this.$t("Pending") || "Pending";
      }
      if (status === "confirmed") {
        return this.$t("Confirmed") || "Confirmed";
      }
      if (status === "cancelled") {
        return this.$t("Cancelled") || "Cancelled";
      }
      if (status === "completed") {
        return this.$t("complete") || "Completed";
      }
      return status;
    },
    statusClass: function statusClass(status) {
      if (status === "pending") return "pending";
      if (status === "confirmed") return "confirmed";
      if (status === "cancelled") return "cancelled";
      if (status === "completed") return "completed";
      return "";
    },
    makeToast: function makeToast(variant, msg, title) {
      this.$root.$bvToast.toast(msg, {
        title: title,
        variant: variant,
        solid: true
      });
    },
    formatPrice: function formatPrice(price) {
      if (price === null || price === undefined || price === '') {
        return '-';
      }
      // Format as currency with 2 decimal places
      return parseFloat(price).toFixed(2);
    }
  },
  mounted: function mounted() {
    var _this5 = this;
    // Set isLoading to false so the calendar element is rendered
    // The watcher will then initialize the calendar once the element is available
    this.$nextTick(function () {
      _this5.isLoading = false;
    });
  },
  beforeDestroy: function beforeDestroy() {
    // Remove resize listener
    if (this._resizeHandler) {
      window.removeEventListener('resize', this._resizeHandler);
    }

    // Clean up calendar instance
    if (this.calendar) {
      this.calendar.destroy();
      this.calendar = null;
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/bookings/BookingCalendar.vue?vue&type=template&id=6261e89f&scoped=true":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/bookings/BookingCalendar.vue?vue&type=template&id=6261e89f&scoped=true ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************/
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
    staticClass: "main-content bookings-page-modern"
  }, [_c("breadcumb", {
    attrs: {
      page: _vm.$t("Calendar_View"),
      folder: _vm.$t("Bookings")
    }
  }), _vm._v(" "), _vm.isLoading ? _c("div", {
    staticClass: "loading_page spinner spinner-primary mr-3"
  }) : _c("div", {
    staticClass: "page-wrapper"
  }, [_c("div", {
    staticClass: "control-bar"
  }, [_c("div", {
    staticClass: "control-left"
  }, [_c("h5", {
    staticClass: "mb-0 page-title"
  }, [_vm._v("\n          " + _vm._s(_vm.$t("Calendar_View") || "Calendar View") + "\n        ")])]), _vm._v(" "), _c("div", {
    staticClass: "control-right"
  }, [_c("router-link", {
    staticClass: "action-btn",
    attrs: {
      to: {
        name: "index_booking"
      }
    }
  }, [_c("i", {
    staticClass: "i-List"
  }), _vm._v(" "), _c("span", [_vm._v(_vm._s(_vm.$t("Booking_List") || "List"))])]), _vm._v(" "), _c("router-link", {
    staticClass: "action-btn add-btn",
    attrs: {
      to: {
        name: "store_booking"
      }
    }
  }, [_c("i", {
    staticClass: "i-Add"
  }), _vm._v(" "), _c("span", [_vm._v(_vm._s(_vm.$t("Add")))])])], 1)]), _vm._v(" "), _c("div", {
    staticClass: "calendar-card"
  }, [_c("div", {
    ref: "calendarEl",
    staticClass: "fc-container"
  })])]), _vm._v(" "), _c("b-modal", {
    attrs: {
      id: "booking-calendar-detail-modal",
      title: _vm.$t("Booking_Details") || "Booking Details",
      "hide-footer": "",
      size: "lg",
      "modal-class": "booking-calendar-modal-wrapper"
    }
  }, [_vm.selectedBooking ? _c("div", [_c("b-row", [_c("b-col", {
    staticClass: "mb-2",
    attrs: {
      md: "6"
    }
  }, [_c("strong", [_vm._v(_vm._s(_vm.$t("Customer")) + ":")]), _vm._v(" "), _c("div", [_vm._v(_vm._s(_vm.selectedBooking.customer_name || "-"))])]), _vm._v(" "), _c("b-col", {
    staticClass: "mb-2",
    attrs: {
      md: "6"
    }
  }, [_c("strong", [_vm._v(_vm._s(_vm.$t("Product")) + ":")]), _vm._v(" "), _c("div", [_vm._v(_vm._s(_vm.selectedBooking.product_name || _vm.$t("Not_Applicable") || "-"))])]), _vm._v(" "), _c("b-col", {
    staticClass: "mb-2",
    attrs: {
      md: "6"
    }
  }, [_c("strong", [_vm._v(_vm._s(_vm.$t("Price")) + ":")]), _vm._v(" "), _c("div", [_vm._v(_vm._s(_vm.formatPrice(_vm.selectedBooking.price)))])]), _vm._v(" "), _c("b-col", {
    staticClass: "mb-2",
    attrs: {
      md: "4"
    }
  }, [_c("strong", [_vm._v(_vm._s(_vm.$t("Date")) + ":")]), _vm._v(" "), _c("div", [_vm._v(_vm._s(_vm.selectedBooking.booking_date))])]), _vm._v(" "), _c("b-col", {
    staticClass: "mb-2",
    attrs: {
      md: "4"
    }
  }, [_c("strong", [_vm._v(_vm._s(_vm.$t("Start_Time") || "Start Time") + ":")]), _vm._v(" "), _c("div", [_vm._v(_vm._s(_vm.selectedBooking.booking_time))])]), _vm._v(" "), _c("b-col", {
    staticClass: "mb-2",
    attrs: {
      md: "4"
    }
  }, [_c("strong", [_vm._v(_vm._s(_vm.$t("End_Time") || "End Time") + ":")]), _vm._v(" "), _c("div", [_vm._v(_vm._s(_vm.selectedBooking.booking_end_time || "-"))])]), _vm._v(" "), _c("b-col", {
    staticClass: "mb-2",
    attrs: {
      md: "4"
    }
  }, [_c("strong", [_vm._v(_vm._s(_vm.$t("Status")) + ":")]), _vm._v(" "), _c("div", [_c("span", {
    staticClass: "status-badge",
    "class": _vm.statusClass(_vm.selectedBooking.status)
  }, [_vm._v("\n              " + _vm._s(_vm.statusLabel(_vm.selectedBooking.status)) + "\n            ")])])]), _vm._v(" "), _c("b-col", {
    staticClass: "mt-3",
    attrs: {
      md: "12"
    }
  }, [_c("strong", [_vm._v(_vm._s(_vm.$t("Details") || "Notes") + ":")]), _vm._v(" "), _c("div", {
    staticClass: "text-muted white-space-preline"
  }, [_vm._v("\n            " + _vm._s(_vm.selectedBooking.notes || "-") + "\n          ")])])], 1)], 1) : _vm._e()])], 1);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-11.use[3]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-21.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/bookings/BookingCalendar.vue?vue&type=style&index=0&id=6261e89f&scoped=true&lang=scss":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-11.use[3]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-21.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/bookings/BookingCalendar.vue?vue&type=style&index=0&id=6261e89f&scoped=true&lang=scss ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, ".bookings-page-modern[data-v-6261e89f] {\n  padding: 1.5rem;\n  background: linear-gradient(135deg, #f5f7fa 0%, #e8ecf1 100%);\n  min-height: 100vh;\n}\n.page-wrapper[data-v-6261e89f] {\n  max-width: 1400px;\n  margin: 0 auto;\n}\n.control-bar[data-v-6261e89f] {\n  background: white;\n  border-radius: 16px;\n  padding: 1.25rem 1.5rem;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 1.5rem;\n  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.06);\n  flex-wrap: wrap;\n  gap: 1rem;\n}\n.page-title[data-v-6261e89f] {\n  font-size: 1.125rem;\n  font-weight: 700;\n  color: #1e293b;\n}\n.control-left[data-v-6261e89f] {\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n}\n.control-right[data-v-6261e89f] {\n  display: flex;\n  gap: 0.75rem;\n  flex-wrap: wrap;\n}\n.action-btn[data-v-6261e89f] {\n  background: white;\n  border: 2px solid #e2e8f0;\n  border-radius: 8px;\n  padding: 0.4rem 0.875rem;\n  font-weight: 600;\n  font-size: 0.75rem;\n  color: #475569;\n  cursor: pointer;\n  transition: all 0.3s ease;\n  display: inline-flex;\n  align-items: center;\n  gap: 0.375rem;\n  text-decoration: none;\n}\n.action-btn i[data-v-6261e89f] {\n  font-size: 0.875rem;\n}\n.action-btn span[data-v-6261e89f] {\n  font-size: 0.75rem;\n}\n.action-btn[data-v-6261e89f]:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);\n}\n.action-btn.add-btn[data-v-6261e89f] {\n  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);\n  color: white;\n  border: none;\n}\n.action-btn.add-btn[data-v-6261e89f]:hover {\n  box-shadow: 0 8px 24px rgba(102, 126, 234, 0.4);\n}\n.calendar-card[data-v-6261e89f] {\n  background: white;\n  border-radius: 16px;\n  padding: 1.5rem;\n  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.06);\n  overflow: hidden;\n}\n@media (max-width: 768px) {\n.calendar-card[data-v-6261e89f] {\n    border-radius: 12px;\n    padding: 1rem;\n}\n}\n@media (max-width: 480px) {\n.calendar-card[data-v-6261e89f] {\n    border-radius: 0;\n    padding: 0.75rem;\n    margin-left: -1rem;\n    margin-right: -1rem;\n}\n}\n.fc-container[data-v-6261e89f] {\n  min-height: 600px;\n  width: 100%;\n}\n@media (max-width: 768px) {\n.fc-container[data-v-6261e89f] {\n    min-height: 500px;\n}\n}\n@media (max-width: 480px) {\n.fc-container[data-v-6261e89f] {\n    min-height: 400px;\n}\n}\n/* FullCalendar custom styles */\n[data-v-6261e89f] .fc {\n  font-family: inherit;\n}\n@media (max-width: 768px) {\n[data-v-6261e89f] .fc {\n    font-size: 0.875rem;\n}\n}\n@media (max-width: 480px) {\n[data-v-6261e89f] .fc {\n    font-size: 0.75rem;\n}\n}\n/* Header Toolbar */\n@media (max-width: 768px) {\n[data-v-6261e89f] .fc-header-toolbar {\n    flex-direction: column;\n    gap: 0.5rem;\n    margin-bottom: 1rem !important;\n}\n[data-v-6261e89f] .fc-header-toolbar .fc-toolbar-chunk {\n    display: flex;\n    justify-content: center;\n    width: 100%;\n}\n[data-v-6261e89f] .fc-header-toolbar .fc-button-group button {\n    padding: 0.4rem 0.6rem;\n    font-size: 0.75rem;\n}\n[data-v-6261e89f] .fc-header-toolbar .fc-button {\n    padding: 0.4rem 0.8rem;\n    font-size: 0.75rem;\n}\n[data-v-6261e89f] .fc-header-toolbar .fc-toolbar-title {\n    font-size: 1rem !important;\n    margin: 0.5rem 0;\n}\n}\n@media (max-width: 480px) {\n[data-v-6261e89f] .fc-header-toolbar .fc-button-group button {\n    padding: 0.3rem 0.5rem;\n    font-size: 0.7rem;\n}\n[data-v-6261e89f] .fc-header-toolbar .fc-button {\n    padding: 0.3rem 0.6rem;\n    font-size: 0.7rem;\n}\n[data-v-6261e89f] .fc-header-toolbar .fc-toolbar-title {\n    font-size: 0.9rem !important;\n}\n}\n/* Calendar Grid */\n@media (max-width: 480px) {\n[data-v-6261e89f] .fc-daygrid-day-frame {\n    min-height: 60px !important;\n}\n}\n@media (max-width: 480px) {\n[data-v-6261e89f] .fc-daygrid-day-number {\n    padding: 2px 4px !important;\n    font-size: 0.75rem !important;\n}\n}\n@media (max-width: 480px) {\n[data-v-6261e89f] .fc-col-header-cell {\n    padding: 0.5rem 0.25rem !important;\n}\n[data-v-6261e89f] .fc-col-header-cell .fc-col-header-cell-cushion {\n    font-size: 0.7rem !important;\n}\n}\n[data-v-6261e89f] .fc-event {\n  cursor: pointer;\n  border-radius: 4px;\n}\n@media (max-width: 480px) {\n[data-v-6261e89f] .fc-event {\n    font-size: 0.7rem;\n    padding: 1px 2px;\n    margin: 1px 0;\n}\n}\n[data-v-6261e89f] .fc-daygrid-event {\n  border-radius: 4px;\n  padding: 2px 4px;\n}\n@media (max-width: 480px) {\n[data-v-6261e89f] .fc-daygrid-event {\n    padding: 1px 2px;\n    font-size: 0.7rem;\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n}\n}\n[data-v-6261e89f] .fc-timegrid-event {\n  border-radius: 4px;\n}\n@media (max-width: 480px) {\n[data-v-6261e89f] .fc-timegrid-event {\n    font-size: 0.7rem;\n}\n}\n@media (max-width: 480px) {\n[data-v-6261e89f] .fc-more-link {\n    font-size: 0.7rem;\n    padding: 2px 4px;\n}\n}\n.status-badge[data-v-6261e89f] {\n  display: inline-flex;\n  align-items: center;\n  padding: 0.45rem 0.9rem;\n  border-radius: 999px;\n  font-weight: 600;\n  font-size: 0.75rem;\n  text-transform: uppercase;\n  letter-spacing: 0.05em;\n}\n.status-badge.pending[data-v-6261e89f] {\n  background: #fed7aa;\n  color: #9a3412;\n}\n.status-badge.confirmed[data-v-6261e89f] {\n  background: #dbeafe;\n  color: #1d4ed8;\n}\n.status-badge.cancelled[data-v-6261e89f] {\n  background: #fee2e2;\n  color: #b91c1c;\n}\n.status-badge.completed[data-v-6261e89f] {\n  background: #bbf7d0;\n  color: #15803d;\n}\n.white-space-preline[data-v-6261e89f] {\n  white-space: pre-line;\n}\n\n/* Booking Detail Modal Responsive */\n@media (max-width: 768px) {\n[data-v-6261e89f] .booking-calendar-modal-wrapper .modal-dialog {\n    max-width: 100% !important;\n    margin: 0 !important;\n    width: 100% !important;\n}\n}\n@media (max-width: 768px) {\n[data-v-6261e89f] .booking-calendar-modal-wrapper .modal-content {\n    border-radius: 0 !important;\n    min-height: 100vh !important;\n    height: 100vh !important;\n}\n}\n@media (max-width: 768px) {\n[data-v-6261e89f] .booking-calendar-modal-wrapper .modal-body {\n    padding: 1rem !important;\n    overflow-y: auto !important;\n}\n}\n@media (max-width: 480px) {\n[data-v-6261e89f] .booking-calendar-modal-wrapper .modal-body {\n    padding: 0.75rem !important;\n}\n}\n@media (max-width: 768px) {\n[data-v-6261e89f] .booking-calendar-modal-wrapper .modal-header {\n    padding: 1rem !important;\n    border-bottom: 2px solid #f1f5f9;\n}\n}\n@media (max-width: 480px) {\n[data-v-6261e89f] .booking-calendar-modal-wrapper .modal-header {\n    padding: 0.75rem !important;\n}\n[data-v-6261e89f] .booking-calendar-modal-wrapper .modal-header .modal-title {\n    font-size: 1rem !important;\n}\n}\n/* Responsive columns in modal */\n@media (max-width: 768px) {\n[data-v-6261e89f] .booking-calendar-modal-wrapper .row {\n    margin-left: -0.5rem;\n    margin-right: -0.5rem;\n}\n[data-v-6261e89f] .booking-calendar-modal-wrapper [class*=col-] {\n    padding-left: 0.5rem;\n    padding-right: 0.5rem;\n    margin-bottom: 0.75rem;\n}\n[data-v-6261e89f] .booking-calendar-modal-wrapper strong {\n    font-size: 0.875rem;\n    display: block;\n    margin-bottom: 0.25rem;\n    color: #64748b;\n}\n[data-v-6261e89f] .booking-calendar-modal-wrapper .status-badge {\n    font-size: 0.7rem;\n    padding: 0.35rem 0.7rem;\n}\n}\n@media (max-width: 991px) {\n.bookings-page-modern[data-v-6261e89f] {\n    padding: 1rem;\n}\n.control-bar[data-v-6261e89f] {\n    flex-direction: column;\n    align-items: stretch;\n    padding: 1rem;\n}\n.control-left[data-v-6261e89f],\n  .control-right[data-v-6261e89f] {\n    width: 100%;\n    justify-content: center;\n}\n.control-right[data-v-6261e89f] {\n    flex-direction: column;\n}\n.control-right .action-btn[data-v-6261e89f] {\n    width: 100%;\n    justify-content: center;\n}\n}\n@media (max-width: 768px) {\n.bookings-page-modern[data-v-6261e89f] {\n    padding: 0.75rem;\n}\n.page-wrapper[data-v-6261e89f] {\n    max-width: 100%;\n}\n.control-bar[data-v-6261e89f] {\n    padding: 0.875rem;\n    border-radius: 12px;\n    margin-bottom: 1rem;\n}\n.page-title[data-v-6261e89f] {\n    font-size: 1rem;\n}\n.calendar-card[data-v-6261e89f] {\n    border-radius: 12px;\n    padding: 0.75rem;\n}\n}\n@media (max-width: 480px) {\n.bookings-page-modern[data-v-6261e89f] {\n    padding: 0.5rem;\n    background: #f5f7fa;\n}\n.control-bar[data-v-6261e89f] {\n    padding: 0.75rem;\n    border-radius: 8px;\n    margin-bottom: 0.75rem;\n}\n.page-title[data-v-6261e89f] {\n    font-size: 0.9rem;\n}\n.control-right[data-v-6261e89f] {\n    gap: 0.5rem;\n}\n.control-right .action-btn[data-v-6261e89f] {\n    padding: 0.35rem 0.75rem;\n    font-size: 0.7rem;\n}\n.control-right .action-btn i[data-v-6261e89f] {\n    font-size: 0.8rem;\n}\n.control-right .action-btn span[data-v-6261e89f] {\n    font-size: 0.7rem;\n}\n}", ""]);
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

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-11.use[3]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-21.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/bookings/BookingCalendar.vue?vue&type=style&index=0&id=6261e89f&scoped=true&lang=scss":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-11.use[3]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-21.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/bookings/BookingCalendar.vue?vue&type=style&index=0&id=6261e89f&scoped=true&lang=scss ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_11_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_11_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_11_use_3_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_21_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BookingCalendar_vue_vue_type_style_index_0_id_6261e89f_scoped_true_lang_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!../../../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-11.use[3]!../../../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-21.use[0]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./BookingCalendar.vue?vue&type=style&index=0&id=6261e89f&scoped=true&lang=scss */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-11.use[3]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-21.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/bookings/BookingCalendar.vue?vue&type=style&index=0&id=6261e89f&scoped=true&lang=scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_11_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_11_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_11_use_3_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_21_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BookingCalendar_vue_vue_type_style_index_0_id_6261e89f_scoped_true_lang_scss__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_11_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_11_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_11_use_3_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_21_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BookingCalendar_vue_vue_type_style_index_0_id_6261e89f_scoped_true_lang_scss__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

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

/***/ "./resources/src/views/app/pages/bookings/BookingCalendar.vue":
/*!********************************************************************!*\
  !*** ./resources/src/views/app/pages/bookings/BookingCalendar.vue ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _BookingCalendar_vue_vue_type_template_id_6261e89f_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BookingCalendar.vue?vue&type=template&id=6261e89f&scoped=true */ "./resources/src/views/app/pages/bookings/BookingCalendar.vue?vue&type=template&id=6261e89f&scoped=true");
/* harmony import */ var _BookingCalendar_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./BookingCalendar.vue?vue&type=script&lang=js */ "./resources/src/views/app/pages/bookings/BookingCalendar.vue?vue&type=script&lang=js");
/* harmony import */ var _BookingCalendar_vue_vue_type_style_index_0_id_6261e89f_scoped_true_lang_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./BookingCalendar.vue?vue&type=style&index=0&id=6261e89f&scoped=true&lang=scss */ "./resources/src/views/app/pages/bookings/BookingCalendar.vue?vue&type=style&index=0&id=6261e89f&scoped=true&lang=scss");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _BookingCalendar_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _BookingCalendar_vue_vue_type_template_id_6261e89f_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render,
  _BookingCalendar_vue_vue_type_template_id_6261e89f_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "6261e89f",
  null
  
)

/* hot reload */
if (false) // removed by dead control flow
{ var api; }
component.options.__file = "resources/src/views/app/pages/bookings/BookingCalendar.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/src/views/app/pages/bookings/BookingCalendar.vue?vue&type=script&lang=js":
/*!********************************************************************************************!*\
  !*** ./resources/src/views/app/pages/bookings/BookingCalendar.vue?vue&type=script&lang=js ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BookingCalendar_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./BookingCalendar.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/bookings/BookingCalendar.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BookingCalendar_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/src/views/app/pages/bookings/BookingCalendar.vue?vue&type=style&index=0&id=6261e89f&scoped=true&lang=scss":
/*!*****************************************************************************************************************************!*\
  !*** ./resources/src/views/app/pages/bookings/BookingCalendar.vue?vue&type=style&index=0&id=6261e89f&scoped=true&lang=scss ***!
  \*****************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_11_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_11_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_11_use_3_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_21_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BookingCalendar_vue_vue_type_style_index_0_id_6261e89f_scoped_true_lang_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/style-loader/dist/cjs.js!../../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!../../../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-11.use[3]!../../../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-21.use[0]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./BookingCalendar.vue?vue&type=style&index=0&id=6261e89f&scoped=true&lang=scss */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-11.use[3]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-21.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/bookings/BookingCalendar.vue?vue&type=style&index=0&id=6261e89f&scoped=true&lang=scss");


/***/ }),

/***/ "./resources/src/views/app/pages/bookings/BookingCalendar.vue?vue&type=template&id=6261e89f&scoped=true":
/*!**************************************************************************************************************!*\
  !*** ./resources/src/views/app/pages/bookings/BookingCalendar.vue?vue&type=template&id=6261e89f&scoped=true ***!
  \**************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_BookingCalendar_vue_vue_type_template_id_6261e89f_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_BookingCalendar_vue_vue_type_template_id_6261e89f_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_BookingCalendar_vue_vue_type_template_id_6261e89f_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./BookingCalendar.vue?vue&type=template&id=6261e89f&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/bookings/BookingCalendar.vue?vue&type=template&id=6261e89f&scoped=true");


/***/ })

}]);