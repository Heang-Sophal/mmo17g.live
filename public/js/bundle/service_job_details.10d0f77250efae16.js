"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["service_job_details"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/service/ServiceJobDetails.vue?vue&type=script&lang=js":
/*!*************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/service/ServiceJobDetails.vue?vue&type=script&lang=js ***!
  \*************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! nprogress */ "./node_modules/nprogress/nprogress.js");
/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(nprogress__WEBPACK_IMPORTED_MODULE_0__);
function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'ServiceJobDetails',
  metaInfo: {
    title: 'Service Job Details'
  },
  data: function data() {
    return {
      isLoading: true,
      isPdfLoading: false,
      job: null,
      checklist: []
    };
  },
  computed: {
    jobId: function jobId() {
      return this.$route.params.id ? Number(this.$route.params.id) : null;
    }
  },
  mounted: function mounted() {
    var _this = this;
    return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee() {
      return _regenerator().w(function (_context) {
        while (1) switch (_context.n) {
          case 0:
            if (!_this.jobId) {
              _context.n = 2;
              break;
            }
            _context.n = 1;
            return _this.loadJobDetails();
          case 1:
            _context.n = 3;
            break;
          case 2:
            _this.isLoading = false;
          case 3:
            return _context.a(2);
        }
      }, _callee);
    }))();
  },
  methods: {
    loadJobDetails: function loadJobDetails() {
      var _this2 = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2() {
        var _yield$axios$get, data, _t;
        return _regenerator().w(function (_context2) {
          while (1) switch (_context2.p = _context2.n) {
            case 0:
              _this2.isLoading = true;
              _context2.p = 1;
              _context2.n = 2;
              return axios.get("service_jobs/".concat(_this2.jobId));
            case 2:
              _yield$axios$get = _context2.v;
              data = _yield$axios$get.data;
              _this2.job = data.job || null;
              _this2.checklist = data.checklist || [];
              _context2.n = 4;
              break;
            case 3:
              _context2.p = 3;
              _t = _context2.v;
              console.error('Error loading job details:', _t);
              _this2.makeToast('danger', _this2.$t('InvalidData') || 'Failed to load job details', _this2.$t('Failed') || 'Failed');
            case 4:
              _context2.p = 4;
              _this2.isLoading = false;
              return _context2.f(4);
            case 5:
              return _context2.a(2);
          }
        }, _callee2, null, [[1, 3, 4, 5]]);
      }))();
    },
    statusLabel: function statusLabel(status) {
      var statusMap = {
        pending: this.$t('Pending') || 'Pending',
        in_progress: this.$t('In_Progress') || 'In Progress',
        completed: this.$t('complete') || 'Completed',
        cancelled: this.$t('Cancelled') || 'Cancelled'
      };
      return statusMap[status] || status;
    },
    statusClass: function statusClass(status) {
      if (status === 'pending') return 'pending';
      if (status === 'in_progress') return 'in-progress';
      if (status === 'completed') return 'completed';
      if (status === 'cancelled') return 'cancelled';
      return '';
    },
    formatDate: function formatDate(date) {
      if (!date) return '-';
      return new Date(date).toLocaleDateString();
    },
    formatDateTime: function formatDateTime(dateTime) {
      if (!dateTime) return '-';
      var date = new Date(dateTime);
      return date.toLocaleString();
    },
    makeToast: function makeToast(variant, msg, title) {
      this.$root.$bvToast.toast(msg, {
        title: title,
        variant: variant,
        solid: true
      });
    },
    //----------------------------------- Service Job PDF  -------------------------\\
    Service_Job_PDF: function Service_Job_PDF(id) {
      var _this3 = this;
      // Show full page loading overlay
      this.isPdfLoading = true;
      nprogress__WEBPACK_IMPORTED_MODULE_0___default().start();
      nprogress__WEBPACK_IMPORTED_MODULE_0___default().set(0.1);
      axios.get("service_job_pdf/".concat(id), {
        responseType: "blob",
        // important
        headers: {
          "Content-Type": "application/json"
        }
      }).then(function (response) {
        var url = window.URL.createObjectURL(new Blob([response.data]));
        var link = document.createElement("a");
        link.href = url;
        link.setAttribute("download", "Service_Job_" + id + ".pdf");
        document.body.appendChild(link);
        link.click();

        // Clean up
        document.body.removeChild(link);
        window.URL.revokeObjectURL(url);

        // Hide loading overlay after a short delay
        setTimeout(function () {
          _this3.isPdfLoading = false;
          nprogress__WEBPACK_IMPORTED_MODULE_0___default().done();
          _this3.makeToast("success", _this3.$t("PDF_downloaded_successfully") || "PDF downloaded successfully", _this3.$t("Success") || "Success");
        }, 500);
      })["catch"](function () {
        // Hide loading overlay on error
        _this3.isPdfLoading = false;
        nprogress__WEBPACK_IMPORTED_MODULE_0___default().done();
        _this3.makeToast("danger", _this3.$t("InvalidData"), _this3.$t("Failed"));
      });
    },
    //------------------------------ Print -------------------------\\
    printJob: function printJob() {
      this.$htmlToPaper('print_Service_Job');
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/service/ServiceJobDetails.vue?vue&type=template&id=116ae153&scoped=true":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/service/ServiceJobDetails.vue?vue&type=template&id=116ae153&scoped=true ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
      page: _vm.$t("Service_Job_Details") || "Service Job Details",
      folder: _vm.$t("Service_Maintenance")
    }
  }), _vm._v(" "), _vm.isLoading ? _c("div", {
    staticClass: "loading_page spinner spinner-primary mr-3"
  }) : _vm.job ? _c("div", {
    staticClass: "service-job-details-container"
  }, [_c("div", {
    staticClass: "job-header"
  }, [_c("div", {
    staticClass: "header-content"
  }, [_vm._m(0), _vm._v(" "), _c("div", {
    staticClass: "header-text"
  }, [_c("h1", {
    staticClass: "job-title"
  }, [_vm._v(_vm._s(_vm.$t("Service_Job_Details") || "Service Job Details"))]), _vm._v(" "), _c("p", {
    staticClass: "job-ref"
  }, [_vm._v("Reference: " + _vm._s(_vm.job.Ref))])])]), _vm._v(" "), _c("div", {
    staticClass: "header-actions"
  }, [_c("button", {
    staticClass: "action-btn pdf-btn",
    attrs: {
      title: _vm.$t("Download_PDF") || "Download PDF",
      disabled: _vm.isPdfLoading
    },
    on: {
      click: function click($event) {
        return _vm.Service_Job_PDF(_vm.job.id);
      }
    }
  }, [_c("i", {
    staticClass: "i-File-Download"
  })]), _vm._v(" "), _c("button", {
    staticClass: "action-btn print-btn",
    attrs: {
      title: _vm.$t("Print") || "Print"
    },
    on: {
      click: _vm.printJob
    }
  }, [_c("i", {
    staticClass: "i-Printer"
  })]), _vm._v(" "), _c("router-link", {
    staticClass: "action-btn edit-btn",
    attrs: {
      to: "/app/service/jobs/edit/".concat(_vm.job.id),
      title: _vm.$t("Edit") || "Edit"
    }
  }, [_c("i", {
    staticClass: "i-Edit"
  })]), _vm._v(" "), _c("button", {
    staticClass: "action-btn close-btn",
    attrs: {
      title: _vm.$t("Close") || "Close"
    },
    on: {
      click: function click($event) {
        return _vm.$router.back();
      }
    }
  }, [_c("i", {
    staticClass: "i-Close"
  })])], 1)]), _vm._v(" "), _c("div", {
    staticClass: "job-content"
  }, [_c("div", {
    staticClass: "job-grid"
  }, [_c("div", {
    staticClass: "info-card"
  }, [_c("div", {
    staticClass: "card-header"
  }, [_vm._m(1), _vm._v(" "), _c("h3", {
    staticClass: "card-title"
  }, [_vm._v(_vm._s(_vm.$t("Reference") || "Reference"))])]), _vm._v(" "), _c("div", {
    staticClass: "card-body"
  }, [_c("div", {
    staticClass: "info-value"
  }, [_vm._v(_vm._s(_vm.job.Ref))])])]), _vm._v(" "), _c("div", {
    staticClass: "info-card"
  }, [_c("div", {
    staticClass: "card-header"
  }, [_vm._m(2), _vm._v(" "), _c("h3", {
    staticClass: "card-title"
  }, [_vm._v(_vm._s(_vm.$t("Customer") || "Customer"))])]), _vm._v(" "), _c("div", {
    staticClass: "card-body"
  }, [_c("div", {
    staticClass: "info-value"
  }, [_vm._v(_vm._s(_vm.job.client_name || "-"))])])]), _vm._v(" "), _c("div", {
    staticClass: "info-card"
  }, [_c("div", {
    staticClass: "card-header"
  }, [_vm._m(3), _vm._v(" "), _c("h3", {
    staticClass: "card-title"
  }, [_vm._v(_vm._s(_vm.$t("Technician") || "Technician"))])]), _vm._v(" "), _c("div", {
    staticClass: "card-body"
  }, [_c("div", {
    staticClass: "info-value"
  }, [_vm._v(_vm._s(_vm.job.technician_name || "-"))])])]), _vm._v(" "), _c("div", {
    staticClass: "info-card"
  }, [_c("div", {
    staticClass: "card-header"
  }, [_vm._m(4), _vm._v(" "), _c("h3", {
    staticClass: "card-title"
  }, [_vm._v(_vm._s(_vm.$t("Service_Item") || "Service Item"))])]), _vm._v(" "), _c("div", {
    staticClass: "card-body"
  }, [_c("div", {
    staticClass: "info-value"
  }, [_vm._v(_vm._s(_vm.job.service_item || "-"))])])]), _vm._v(" "), _vm.job.job_type ? _c("div", {
    staticClass: "info-card"
  }, [_c("div", {
    staticClass: "card-header"
  }, [_vm._m(5), _vm._v(" "), _c("h3", {
    staticClass: "card-title"
  }, [_vm._v(_vm._s(_vm.$t("Job_Type") || "Job Type"))])]), _vm._v(" "), _c("div", {
    staticClass: "card-body"
  }, [_c("div", {
    staticClass: "info-value"
  }, [_vm._v(_vm._s(_vm.job.job_type))])])]) : _vm._e(), _vm._v(" "), _c("div", {
    staticClass: "info-card"
  }, [_c("div", {
    staticClass: "card-header"
  }, [_vm._m(6), _vm._v(" "), _c("h3", {
    staticClass: "card-title"
  }, [_vm._v(_vm._s(_vm.$t("Status") || "Status"))])]), _vm._v(" "), _c("div", {
    staticClass: "card-body"
  }, [_c("span", {
    "class": ["status-badge-modern", _vm.statusClass(_vm.job.status)]
  }, [_c("span", {
    staticClass: "status-dot"
  }), _vm._v("\n              " + _vm._s(_vm.statusLabel(_vm.job.status)) + "\n            ")])])]), _vm._v(" "), _vm.job.scheduled_date ? _c("div", {
    staticClass: "info-card"
  }, [_c("div", {
    staticClass: "card-header"
  }, [_vm._m(7), _vm._v(" "), _c("h3", {
    staticClass: "card-title"
  }, [_vm._v(_vm._s(_vm.$t("Scheduled_Date") || "Scheduled Date"))])]), _vm._v(" "), _c("div", {
    staticClass: "card-body"
  }, [_c("div", {
    staticClass: "info-value"
  }, [_vm._v(_vm._s(_vm.formatDate(_vm.job.scheduled_date)))])])]) : _vm._e(), _vm._v(" "), _vm.job.started_at ? _c("div", {
    staticClass: "info-card"
  }, [_c("div", {
    staticClass: "card-header"
  }, [_vm._m(8), _vm._v(" "), _c("h3", {
    staticClass: "card-title"
  }, [_vm._v(_vm._s(_vm.$t("Started_At") || "Started At"))])]), _vm._v(" "), _c("div", {
    staticClass: "card-body"
  }, [_c("div", {
    staticClass: "info-value"
  }, [_vm._v(_vm._s(_vm.formatDateTime(_vm.job.started_at)))])])]) : _vm._e(), _vm._v(" "), _vm.job.completed_at ? _c("div", {
    staticClass: "info-card"
  }, [_c("div", {
    staticClass: "card-header"
  }, [_vm._m(9), _vm._v(" "), _c("h3", {
    staticClass: "card-title"
  }, [_vm._v(_vm._s(_vm.$t("Completed_At") || "Completed At"))])]), _vm._v(" "), _c("div", {
    staticClass: "card-body"
  }, [_c("div", {
    staticClass: "info-value"
  }, [_vm._v(_vm._s(_vm.formatDateTime(_vm.job.completed_at)))])])]) : _vm._e()]), _vm._v(" "), _vm.job.notes ? _c("div", {
    staticClass: "notes-section"
  }, [_c("h3", {
    staticClass: "notes-title"
  }, [_c("i", {
    staticClass: "i-File-Text"
  }), _vm._v("\n          " + _vm._s(_vm.$t("Notes") || "Notes") + "\n        ")]), _vm._v(" "), _c("div", {
    staticClass: "notes-content"
  }, [_c("p", [_vm._v(_vm._s(_vm.job.notes))])])]) : _vm._e(), _vm._v(" "), _vm.checklist && _vm.checklist.length > 0 ? _c("div", {
    staticClass: "checklist-section"
  }, [_c("h3", {
    staticClass: "checklist-title"
  }, [_c("i", {
    staticClass: "i-Check"
  }), _vm._v("\n          " + _vm._s(_vm.$t("Checklist") || "Checklist") + "\n        ")]), _vm._v(" "), _c("div", {
    staticClass: "checklist-grid"
  }, _vm._l(_vm.checklist, function (item) {
    return _c("div", {
      key: item.id,
      "class": ["checklist-item", {
        completed: item.is_completed
      }]
    }, [_c("div", {
      staticClass: "checklist-item-header"
    }, [_c("div", {
      staticClass: "checklist-checkbox"
    }, [_c("i", {
      "class": item.is_completed ? "i-Check-Circle text-success" : "i-Circle text-muted"
    })]), _vm._v(" "), _c("div", {
      staticClass: "checklist-item-name"
    }, [_vm._v(_vm._s(item.item_name))])]), _vm._v(" "), item.category_name ? _c("div", {
      staticClass: "checklist-category"
    }, [_c("i", {
      staticClass: "i-Folder"
    }), _vm._v("\n              " + _vm._s(item.category_name) + "\n            ")]) : _vm._e()]);
  }), 0)]) : _c("div", {
    staticClass: "empty-checklist"
  }, [_c("i", {
    staticClass: "i-Info"
  }), _vm._v(" "), _c("p", [_vm._v(_vm._s(_vm.$t("No_checklist_items_defined") || "No checklist items defined for this job."))])])])]) : _c("div", {
    staticClass: "error-state"
  }, [_c("i", {
    staticClass: "i-Close-Window"
  }), _vm._v(" "), _c("p", [_vm._v(_vm._s(_vm.$t("Job_not_found") || "Service job not found."))]), _vm._v(" "), _c("router-link", {
    staticClass: "btn btn-primary",
    attrs: {
      to: "/app/service/jobs"
    }
  }, [_vm._v("\n      " + _vm._s(_vm.$t("Back_to_Jobs") || "Back to Jobs") + "\n    ")])], 1), _vm._v(" "), _vm.isPdfLoading ? _c("div", {
    staticClass: "pdf-loading-overlay"
  }, [_c("div", {
    staticClass: "loading-content"
  }, [_c("div", {
    staticClass: "spinner spinner-primary"
  }), _vm._v(" "), _c("p", [_vm._v(_vm._s(_vm.$t("Generating_PDF") || "Generating PDF..."))])])]) : _vm._e(), _vm._v(" "), _c("div", {
    staticStyle: {
      display: "none"
    },
    attrs: {
      id: "print_Service_Job"
    }
  }, [_c("div", {
    staticStyle: {
      padding: "20px",
      "font-family": "Arial, sans-serif"
    }
  }, [_c("div", {
    staticStyle: {
      "text-align": "center",
      "margin-bottom": "20px",
      "border-bottom": "2px solid #1a56db",
      "padding-bottom": "15px"
    }
  }, [_c("h1", {
    staticStyle: {
      color: "#1a56db",
      margin: "0 0 10px 0"
    }
  }, [_vm._v("SERVICE JOB")]), _vm._v(" "), _c("h2", {
    staticStyle: {
      color: "#4b5563",
      margin: "0"
    }
  }, [_vm._v(_vm._s(_vm.job ? _vm.job.Ref : ""))])]), _vm._v(" "), _c("table", {
    staticStyle: {
      width: "100%",
      "margin-bottom": "20px"
    },
    attrs: {
      cellpadding: "5",
      cellspacing: "0"
    }
  }, [_c("tr", [_c("td", {
    staticStyle: {
      width: "50%",
      "vertical-align": "top"
    }
  }, [_c("h3", {
    staticStyle: {
      color: "#1a56db",
      margin: "0 0 10px 0",
      "font-size": "14px"
    }
  }, [_vm._v("CUSTOMER")]), _vm._v(" "), _c("p", {
    staticStyle: {
      margin: "5px 0"
    }
  }, [_c("strong", [_vm._v("Name:")]), _vm._v(" " + _vm._s(_vm.job ? _vm.job.client_name : "-"))]), _vm._v(" "), _vm.job && _vm.job.client_phone ? _c("p", {
    staticStyle: {
      margin: "5px 0"
    }
  }, [_c("strong", [_vm._v("Phone:")]), _vm._v(" " + _vm._s(_vm.job.client_phone))]) : _vm._e(), _vm._v(" "), _vm.job && _vm.job.client_email ? _c("p", {
    staticStyle: {
      margin: "5px 0"
    }
  }, [_c("strong", [_vm._v("Email:")]), _vm._v(" " + _vm._s(_vm.job.client_email))]) : _vm._e()]), _vm._v(" "), _c("td", {
    staticStyle: {
      width: "50%",
      "vertical-align": "top"
    }
  }, [_c("h3", {
    staticStyle: {
      color: "#1a56db",
      margin: "0 0 10px 0",
      "font-size": "14px"
    }
  }, [_vm._v("JOB INFORMATION")]), _vm._v(" "), _c("p", {
    staticStyle: {
      margin: "5px 0"
    }
  }, [_c("strong", [_vm._v("Service Item:")]), _vm._v(" " + _vm._s(_vm.job ? _vm.job.service_item : "-"))]), _vm._v(" "), _vm.job && _vm.job.job_type ? _c("p", {
    staticStyle: {
      margin: "5px 0"
    }
  }, [_c("strong", [_vm._v("Job Type:")]), _vm._v(" " + _vm._s(_vm.job.job_type))]) : _vm._e(), _vm._v(" "), _c("p", {
    staticStyle: {
      margin: "5px 0"
    }
  }, [_c("strong", [_vm._v("Technician:")]), _vm._v(" " + _vm._s(_vm.job ? _vm.job.technician_name : "-"))]), _vm._v(" "), _vm.job && _vm.job.scheduled_date ? _c("p", {
    staticStyle: {
      margin: "5px 0"
    }
  }, [_c("strong", [_vm._v("Scheduled Date:")]), _vm._v(" " + _vm._s(_vm.formatDate(_vm.job.scheduled_date)))]) : _vm._e(), _vm._v(" "), _c("p", {
    staticStyle: {
      margin: "5px 0"
    }
  }, [_c("strong", [_vm._v("Status:")]), _vm._v(" " + _vm._s(_vm.job ? _vm.statusLabel(_vm.job.status) : "-"))])])])]), _vm._v(" "), _vm.job && _vm.job.notes ? _c("div", {
    staticStyle: {
      "margin-bottom": "20px",
      padding: "10px",
      background: "#f9fafb",
      "border-left": "3px solid #1a56db"
    }
  }, [_c("h3", {
    staticStyle: {
      color: "#1a56db",
      margin: "0 0 10px 0",
      "font-size": "14px"
    }
  }, [_vm._v("NOTES")]), _vm._v(" "), _c("p", {
    staticStyle: {
      margin: "0",
      "white-space": "pre-line"
    }
  }, [_vm._v(_vm._s(_vm.job.notes))])]) : _vm._e(), _vm._v(" "), _vm.checklist && _vm.checklist.length > 0 ? _c("div", {
    staticStyle: {
      "margin-bottom": "20px"
    }
  }, [_c("h3", {
    staticStyle: {
      color: "#1a56db",
      margin: "0 0 10px 0",
      "font-size": "14px"
    }
  }, [_vm._v("CHECKLIST")]), _vm._v(" "), _c("table", {
    staticStyle: {
      width: "100%",
      "border-collapse": "collapse"
    },
    attrs: {
      cellpadding: "5",
      cellspacing: "0",
      border: "1"
    }
  }, [_vm._m(10), _vm._v(" "), _c("tbody", _vm._l(_vm.checklist, function (item) {
    return _c("tr", {
      key: item.id
    }, [_c("td", {
      staticStyle: {
        padding: "8px"
      }
    }, [_vm._v(_vm._s(item.is_completed ? "✓ Completed" : "○ Pending"))]), _vm._v(" "), _c("td", {
      staticStyle: {
        padding: "8px"
      }
    }, [_vm._v(_vm._s(item.category_name || "-"))]), _vm._v(" "), _c("td", {
      staticStyle: {
        padding: "8px"
      }
    }, [_vm._v(_vm._s(item.item_name))])]);
  }), 0)])]) : _vm._e(), _vm._v(" "), _vm._m(11)])])], 1);
};
var staticRenderFns = [function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "header-icon"
  }, [_c("i", {
    staticClass: "i-Wrench"
  })]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "card-icon reference-icon"
  }, [_c("i", {
    staticClass: "i-Tag"
  })]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "card-icon customer-icon"
  }, [_c("i", {
    staticClass: "i-User"
  })]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "card-icon technician-icon"
  }, [_c("i", {
    staticClass: "i-Engineering"
  })]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "card-icon service-icon"
  }, [_c("i", {
    staticClass: "i-Box-Full"
  })]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "card-icon job-type-icon"
  }, [_c("i", {
    staticClass: "i-File-Clipboard-File--Text"
  })]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "card-icon status-icon"
  }, [_c("i", {
    staticClass: "i-Check-Circle"
  })]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "card-icon datetime-icon"
  }, [_c("i", {
    staticClass: "i-Calendar-4"
  })]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "card-icon datetime-icon"
  }, [_c("i", {
    staticClass: "i-Clock"
  })]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "card-icon datetime-icon"
  }, [_c("i", {
    staticClass: "i-Check"
  })]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("thead", [_c("tr", {
    staticStyle: {
      background: "#1a56db",
      color: "white"
    }
  }, [_c("th", {
    staticStyle: {
      padding: "8px",
      "text-align": "left"
    }
  }, [_vm._v("Status")]), _vm._v(" "), _c("th", {
    staticStyle: {
      padding: "8px",
      "text-align": "left"
    }
  }, [_vm._v("Category")]), _vm._v(" "), _c("th", {
    staticStyle: {
      padding: "8px",
      "text-align": "left"
    }
  }, [_vm._v("Item")])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticStyle: {
      "margin-top": "30px",
      "text-align": "center",
      "padding-top": "15px",
      "border-top": "2px solid #e5e7eb"
    }
  }, [_c("p", {
    staticStyle: {
      color: "#1a56db",
      "font-weight": "bold",
      margin: "0"
    }
  }, [_vm._v("Thank you for your business!")])]);
}];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-11.use[3]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-21.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/service/ServiceJobDetails.vue?vue&type=style&index=0&id=116ae153&scoped=true&lang=scss":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-11.use[3]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-21.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/service/ServiceJobDetails.vue?vue&type=style&index=0&id=116ae153&scoped=true&lang=scss ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, "/* ========================================\n   SERVICE JOB DETAILS PAGE\n   ======================================== */\n.service-job-details-container[data-v-116ae153] {\n  background: #ffffff;\n  border-radius: 20px;\n  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.06);\n  overflow: hidden;\n  margin-bottom: 30px;\n}\n\n/* Header */\n.job-header[data-v-116ae153] {\n  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);\n  padding: 24px 32px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  position: relative;\n  overflow: hidden;\n}\n.job-header[data-v-116ae153]::before {\n  content: \"\";\n  position: absolute;\n  top: -50%;\n  right: -10%;\n  width: 400px;\n  height: 400px;\n  background: radial-gradient(circle, rgba(255, 255, 255, 0.1) 0%, transparent 70%);\n  border-radius: 50%;\n}\n.job-header .header-content[data-v-116ae153] {\n  display: flex;\n  align-items: center;\n  gap: 16px;\n  z-index: 1;\n}\n.job-header .header-icon[data-v-116ae153] {\n  width: 56px;\n  height: 56px;\n  background: rgba(255, 255, 255, 0.2);\n  backdrop-filter: blur(10px);\n  border-radius: 14px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 28px;\n  color: white;\n  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);\n}\n.job-header .header-text .job-title[data-v-116ae153] {\n  margin: 0;\n  font-size: 24px;\n  font-weight: 700;\n  color: white;\n  letter-spacing: -0.5px;\n}\n.job-header .header-text .job-ref[data-v-116ae153] {\n  margin: 6px 0 0 0;\n  font-size: 14px;\n  color: rgba(255, 255, 255, 0.9);\n  font-weight: 500;\n}\n.job-header .header-actions[data-v-116ae153] {\n  display: flex;\n  gap: 8px;\n  z-index: 1;\n}\n.job-header .action-btn[data-v-116ae153] {\n  width: 44px;\n  height: 44px;\n  background: rgba(255, 255, 255, 0.15);\n  backdrop-filter: blur(10px);\n  border: 2px solid rgba(255, 255, 255, 0.2);\n  border-radius: 12px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  transition: all 0.3s ease;\n  color: white;\n  font-size: 18px;\n  text-decoration: none;\n}\n.job-header .action-btn[data-v-116ae153]:hover {\n  background: rgba(255, 255, 255, 0.25);\n  transform: translateY(-2px);\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);\n}\n.job-header .action-btn.pdf-btn[data-v-116ae153]:hover {\n  background: rgba(239, 68, 68, 0.9);\n  border-color: rgba(239, 68, 68, 0.9);\n}\n.job-header .action-btn.print-btn[data-v-116ae153]:hover {\n  background: rgba(59, 130, 246, 0.9);\n  border-color: rgba(59, 130, 246, 0.9);\n}\n.job-header .action-btn.edit-btn[data-v-116ae153]:hover {\n  background: rgba(16, 185, 129, 0.9);\n  border-color: rgba(16, 185, 129, 0.9);\n}\n.job-header .action-btn.close-btn[data-v-116ae153]:hover {\n  background: rgba(239, 68, 68, 0.9);\n  border-color: rgba(239, 68, 68, 0.9);\n  transform: rotate(90deg);\n}\n.job-header .action-btn[data-v-116ae153]:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n\n/* Content */\n.job-content[data-v-116ae153] {\n  padding: 32px;\n  background: #f8f9fc;\n}\n.job-grid[data-v-116ae153] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));\n  gap: 20px;\n  margin-bottom: 24px;\n}\n\n/* Info Cards */\n.info-card[data-v-116ae153] {\n  background: white;\n  border-radius: 16px;\n  padding: 20px;\n  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.06);\n  border: 1px solid rgba(0, 0, 0, 0.04);\n  transition: all 0.3s ease;\n  position: relative;\n  overflow: hidden;\n}\n.info-card[data-v-116ae153]::before {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  height: 4px;\n  background: linear-gradient(90deg, #667eea 0%, #764ba2 100%);\n  transform: scaleX(0);\n  transition: transform 0.3s ease;\n}\n.info-card[data-v-116ae153]:hover {\n  transform: translateY(-4px);\n  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.1);\n}\n.info-card[data-v-116ae153]:hover::before {\n  transform: scaleX(1);\n}\n.info-card .card-header[data-v-116ae153] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  margin-bottom: 16px;\n  padding-bottom: 12px;\n  border-bottom: 2px solid #f1f5f9;\n}\n.info-card .card-icon[data-v-116ae153] {\n  width: 40px;\n  height: 40px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 20px;\n  flex-shrink: 0;\n}\n.info-card .customer-icon[data-v-116ae153] {\n  color: #667eea;\n}\n.info-card .technician-icon[data-v-116ae153] {\n  color: #10b981;\n}\n.info-card .service-icon[data-v-116ae153] {\n  color: #f5576c;\n}\n.info-card .job-type-icon[data-v-116ae153] {\n  color: #8b5cf6;\n}\n.info-card .status-icon[data-v-116ae153] {\n  color: #43e97b;\n}\n.info-card .datetime-icon[data-v-116ae153] {\n  color: #fa709a;\n}\n.info-card .reference-icon[data-v-116ae153] {\n  color: #8b5cf6;\n}\n.info-card .card-title[data-v-116ae153] {\n  margin: 0;\n  font-size: 13px;\n  font-weight: 700;\n  color: #64748b;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.info-card .card-body .info-value[data-v-116ae153] {\n  font-size: 16px;\n  font-weight: 600;\n  color: #1e293b;\n  line-height: 1.5;\n}\n\n/* Status Badge */\n.status-badge-modern[data-v-116ae153] {\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n  padding: 8px 16px;\n  border-radius: 20px;\n  font-size: 12px;\n  font-weight: 600;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.status-badge-modern .status-dot[data-v-116ae153] {\n  width: 8px;\n  height: 8px;\n  border-radius: 50%;\n  animation: pulse-116ae153 2s ease infinite;\n}\n.status-badge-modern.pending[data-v-116ae153] {\n  background: linear-gradient(135deg, #fef3c7 0%, #fde68a 100%);\n  color: #92400e;\n}\n.status-badge-modern.pending .status-dot[data-v-116ae153] {\n  background: #f59e0b;\n}\n.status-badge-modern.in-progress[data-v-116ae153] {\n  background: linear-gradient(135deg, #dbeafe 0%, #bfdbfe 100%);\n  color: #1e40af;\n}\n.status-badge-modern.in-progress .status-dot[data-v-116ae153] {\n  background: #3b82f6;\n}\n.status-badge-modern.completed[data-v-116ae153] {\n  background: linear-gradient(135deg, #d1fae5 0%, #a7f3d0 100%);\n  color: #065f46;\n}\n.status-badge-modern.completed .status-dot[data-v-116ae153] {\n  background: #10b981;\n}\n.status-badge-modern.cancelled[data-v-116ae153] {\n  background: linear-gradient(135deg, #fee2e2 0%, #fecaca 100%);\n  color: #991b1b;\n}\n.status-badge-modern.cancelled .status-dot[data-v-116ae153] {\n  background: #ef4444;\n}\n@keyframes pulse-116ae153 {\n0%, 100% {\n    opacity: 1;\n}\n50% {\n    opacity: 0.5;\n}\n}\n/* Notes Section */\n.notes-section[data-v-116ae153] {\n  background: white;\n  border-radius: 16px;\n  padding: 24px;\n  margin-bottom: 24px;\n  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.06);\n  border-left: 4px solid #667eea;\n}\n.notes-section .notes-title[data-v-116ae153] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  margin: 0 0 16px 0;\n  font-size: 16px;\n  font-weight: 700;\n  color: #667eea;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.notes-section .notes-title i[data-v-116ae153] {\n  font-size: 20px;\n}\n.notes-section .notes-content p[data-v-116ae153] {\n  margin: 0;\n  color: #475569;\n  line-height: 1.8;\n  white-space: pre-line;\n}\n\n/* Checklist Section */\n.checklist-section[data-v-116ae153] {\n  background: white;\n  border-radius: 16px;\n  padding: 24px;\n  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.06);\n}\n.checklist-section .checklist-title[data-v-116ae153] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  margin: 0 0 20px 0;\n  font-size: 16px;\n  font-weight: 700;\n  color: #1e293b;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.checklist-section .checklist-title i[data-v-116ae153] {\n  font-size: 20px;\n  color: #667eea;\n}\n.checklist-section .checklist-grid[data-v-116ae153] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));\n  gap: 16px;\n}\n.checklist-section .checklist-item[data-v-116ae153] {\n  background: #f8f9fc;\n  border-radius: 12px;\n  padding: 16px;\n  border: 2px solid #e2e8f0;\n  transition: all 0.3s ease;\n}\n.checklist-section .checklist-item[data-v-116ae153]:hover {\n  border-color: #cbd5e1;\n  transform: translateY(-2px);\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);\n}\n.checklist-section .checklist-item.completed[data-v-116ae153] {\n  background: linear-gradient(135deg, #d1fae5 0%, #a7f3d0 100%);\n  border-color: #10b981;\n}\n.checklist-section .checklist-item.completed .checklist-item-name[data-v-116ae153] {\n  color: #065f46;\n}\n.checklist-section .checklist-item .checklist-item-header[data-v-116ae153] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  margin-bottom: 8px;\n}\n.checklist-section .checklist-item .checklist-checkbox[data-v-116ae153] {\n  font-size: 20px;\n  flex-shrink: 0;\n}\n.checklist-section .checklist-item .checklist-item-name[data-v-116ae153] {\n  font-size: 15px;\n  font-weight: 600;\n  color: #1e293b;\n  flex: 1;\n}\n.checklist-section .checklist-item .checklist-category[data-v-116ae153] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  font-size: 12px;\n  color: #64748b;\n  margin-top: 8px;\n}\n.checklist-section .checklist-item .checklist-category i[data-v-116ae153] {\n  font-size: 14px;\n}\n\n/* Empty Checklist */\n.empty-checklist[data-v-116ae153] {\n  background: white;\n  border-radius: 16px;\n  padding: 40px;\n  text-align: center;\n  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.06);\n}\n.empty-checklist i[data-v-116ae153] {\n  font-size: 48px;\n  color: #cbd5e1;\n  margin-bottom: 16px;\n}\n.empty-checklist p[data-v-116ae153] {\n  margin: 0;\n  color: #64748b;\n  font-size: 14px;\n}\n\n/* Error State */\n.error-state[data-v-116ae153] {\n  background: white;\n  border-radius: 16px;\n  padding: 60px;\n  text-align: center;\n  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.06);\n}\n.error-state i[data-v-116ae153] {\n  font-size: 64px;\n  color: #ef4444;\n  margin-bottom: 20px;\n}\n.error-state p[data-v-116ae153] {\n  margin: 0 0 24px 0;\n  color: #64748b;\n  font-size: 16px;\n}\n\n/* PDF Loading Overlay */\n.pdf-loading-overlay[data-v-116ae153] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background: rgba(0, 0, 0, 0.7);\n  backdrop-filter: blur(5px);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 9999;\n}\n.pdf-loading-overlay .loading-content[data-v-116ae153] {\n  background: white;\n  padding: 40px;\n  border-radius: 16px;\n  text-align: center;\n  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);\n}\n.pdf-loading-overlay .loading-content .spinner[data-v-116ae153] {\n  margin: 0 auto 20px;\n}\n.pdf-loading-overlay .loading-content p[data-v-116ae153] {\n  margin: 0;\n  color: #1e293b;\n  font-size: 16px;\n  font-weight: 600;\n}", ""]);
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

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-11.use[3]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-21.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/service/ServiceJobDetails.vue?vue&type=style&index=0&id=116ae153&scoped=true&lang=scss":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-11.use[3]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-21.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/service/ServiceJobDetails.vue?vue&type=style&index=0&id=116ae153&scoped=true&lang=scss ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_11_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_11_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_11_use_3_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_21_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ServiceJobDetails_vue_vue_type_style_index_0_id_116ae153_scoped_true_lang_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!../../../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-11.use[3]!../../../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-21.use[0]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ServiceJobDetails.vue?vue&type=style&index=0&id=116ae153&scoped=true&lang=scss */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-11.use[3]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-21.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/service/ServiceJobDetails.vue?vue&type=style&index=0&id=116ae153&scoped=true&lang=scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_11_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_11_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_11_use_3_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_21_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ServiceJobDetails_vue_vue_type_style_index_0_id_116ae153_scoped_true_lang_scss__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_11_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_11_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_11_use_3_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_21_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ServiceJobDetails_vue_vue_type_style_index_0_id_116ae153_scoped_true_lang_scss__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

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

/***/ "./resources/src/views/app/pages/service/ServiceJobDetails.vue":
/*!*********************************************************************!*\
  !*** ./resources/src/views/app/pages/service/ServiceJobDetails.vue ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ServiceJobDetails_vue_vue_type_template_id_116ae153_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ServiceJobDetails.vue?vue&type=template&id=116ae153&scoped=true */ "./resources/src/views/app/pages/service/ServiceJobDetails.vue?vue&type=template&id=116ae153&scoped=true");
/* harmony import */ var _ServiceJobDetails_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ServiceJobDetails.vue?vue&type=script&lang=js */ "./resources/src/views/app/pages/service/ServiceJobDetails.vue?vue&type=script&lang=js");
/* harmony import */ var _ServiceJobDetails_vue_vue_type_style_index_0_id_116ae153_scoped_true_lang_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ServiceJobDetails.vue?vue&type=style&index=0&id=116ae153&scoped=true&lang=scss */ "./resources/src/views/app/pages/service/ServiceJobDetails.vue?vue&type=style&index=0&id=116ae153&scoped=true&lang=scss");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _ServiceJobDetails_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _ServiceJobDetails_vue_vue_type_template_id_116ae153_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render,
  _ServiceJobDetails_vue_vue_type_template_id_116ae153_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "116ae153",
  null
  
)

/* hot reload */
if (false) // removed by dead control flow
{ var api; }
component.options.__file = "resources/src/views/app/pages/service/ServiceJobDetails.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/src/views/app/pages/service/ServiceJobDetails.vue?vue&type=script&lang=js":
/*!*********************************************************************************************!*\
  !*** ./resources/src/views/app/pages/service/ServiceJobDetails.vue?vue&type=script&lang=js ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ServiceJobDetails_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ServiceJobDetails.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/service/ServiceJobDetails.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ServiceJobDetails_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/src/views/app/pages/service/ServiceJobDetails.vue?vue&type=style&index=0&id=116ae153&scoped=true&lang=scss":
/*!******************************************************************************************************************************!*\
  !*** ./resources/src/views/app/pages/service/ServiceJobDetails.vue?vue&type=style&index=0&id=116ae153&scoped=true&lang=scss ***!
  \******************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_11_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_11_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_11_use_3_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_21_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ServiceJobDetails_vue_vue_type_style_index_0_id_116ae153_scoped_true_lang_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/style-loader/dist/cjs.js!../../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!../../../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-11.use[3]!../../../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-21.use[0]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ServiceJobDetails.vue?vue&type=style&index=0&id=116ae153&scoped=true&lang=scss */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-11.use[3]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-21.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/service/ServiceJobDetails.vue?vue&type=style&index=0&id=116ae153&scoped=true&lang=scss");


/***/ }),

/***/ "./resources/src/views/app/pages/service/ServiceJobDetails.vue?vue&type=template&id=116ae153&scoped=true":
/*!***************************************************************************************************************!*\
  !*** ./resources/src/views/app/pages/service/ServiceJobDetails.vue?vue&type=template&id=116ae153&scoped=true ***!
  \***************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ServiceJobDetails_vue_vue_type_template_id_116ae153_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ServiceJobDetails_vue_vue_type_template_id_116ae153_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ServiceJobDetails_vue_vue_type_template_id_116ae153_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ServiceJobDetails.vue?vue&type=template&id=116ae153&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/service/ServiceJobDetails.vue?vue&type=template&id=116ae153&scoped=true");


/***/ })

}]);