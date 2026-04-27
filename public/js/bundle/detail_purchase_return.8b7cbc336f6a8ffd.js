"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["detail_purchase_return"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/purchase_return/detail_purchase_return.vue?vue&type=script&lang=js":
/*!**************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/purchase_return/detail_purchase_return.vue?vue&type=script&lang=js ***!
  \**************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! nprogress */ "./node_modules/nprogress/nprogress.js");
/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(nprogress__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_priceFormat__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../utils/priceFormat */ "./resources/src/utils/priceFormat.js");



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  computed: (0,vuex__WEBPACK_IMPORTED_MODULE_0__.mapGetters)(["currentUserPermissions", "currentUser"]),
  metaInfo: {
    title: "Detail Return Purchase"
  },
  data: function data() {
    return {
      isLoading: true,
      purchase_return: {},
      details: [],
      company: {},
      email: {
        to: "",
        subject: "",
        message: ""
      },
      // Optional price format key for frontend display (loaded from system settings/localStorage)
      price_format_key: null
    };
  },
  methods: {
    //----------------------------------- Return PDF -------------------------\\
    Return_PDF: function Return_PDF() {
      var _this = this;
      // Start the progress bar.
      nprogress__WEBPACK_IMPORTED_MODULE_1___default().start();
      nprogress__WEBPACK_IMPORTED_MODULE_1___default().set(0.1);
      var id = this.$route.params.id;
      axios.get("return_purchase_pdf/".concat(id), {
        responseType: "blob",
        // important
        headers: {
          "Content-Type": "application/json"
        }
      }).then(function (response) {
        var url = window.URL.createObjectURL(new Blob([response.data]));
        var link = document.createElement("a");
        link.href = url;
        link.setAttribute("download", "Return_Purchase_" + _this.purchase_return.Ref + ".pdf");
        document.body.appendChild(link);
        link.click();
        // Complete the animation of the  progress bar.
        setTimeout(function () {
          return nprogress__WEBPACK_IMPORTED_MODULE_1___default().done();
        }, 500);
      })["catch"](function () {
        // Complete the animation of the  progress bar.
        setTimeout(function () {
          return nprogress__WEBPACK_IMPORTED_MODULE_1___default().done();
        }, 500);
      });
    },
    //------------------------------ Print -------------------------\\
    print: function print() {
      this.$htmlToPaper('print_Invoice');
    },
    //------------------------------Formetted Numbers -------------------------\\
    formatNumber: function formatNumber(number, dec) {
      var value = (typeof number === "string" ? number : number.toString()).split(".");
      if (dec <= 0) return value[0];
      var formated = value[1] || "";
      if (formated.length > dec) return "".concat(value[0], ".").concat(formated.substr(0, dec));
      while (formated.length < dec) formated += "0";
      return "".concat(value[0], ".").concat(formated);
    },
    // Price formatting for display only (does NOT affect calculations or stored values)
    // Uses the global/system price_format setting when available; otherwise falls back
    // to the existing formatNumber helper to preserve current behavior.
    formatPriceDisplay: function formatPriceDisplay(number, dec) {
      try {
        var decimals = Number.isInteger(dec) ? dec : 0;
        var key = this.price_format_key || (0,_utils_priceFormat__WEBPACK_IMPORTED_MODULE_2__.getPriceFormatSetting)({
          store: this.$store
        });
        if (key) {
          this.price_format_key = key;
        }
        var effectiveKey = key || null;
        return (0,_utils_priceFormat__WEBPACK_IMPORTED_MODULE_2__.formatPriceDisplay)(number, decimals, effectiveKey);
      } catch (e) {
        return this.formatNumber(number, dec);
      }
    },
    formatPriceWithSymbol: function formatPriceWithSymbol(symbol, number, dec) {
      var safeSymbol = symbol || "";
      var value = this.formatPriceDisplay(number, dec);
      return safeSymbol ? "".concat(safeSymbol, " ").concat(value) : value;
    },
    //------ Toast
    makeToast: function makeToast(variant, msg, title) {
      this.$root.$bvToast.toast(msg, {
        title: title,
        variant: variant,
        solid: true
      });
    },
    //----------------------------------- Get Details Product ------------------------------\\
    Get_Details: function Get_Details() {
      var _this2 = this;
      var id = this.$route.params.id;
      axios.get("returns/purchase/".concat(id)).then(function (response) {
        _this2.purchase_return = response.data.purchase_return;
        _this2.details = response.data.details;
        _this2.company = response.data.company;
        _this2.isLoading = false;
      })["catch"](function (response) {
        setTimeout(function () {
          _this2.isLoading = false;
        }, 500);
      });
    },
    //---------------------  Delete Return ------------------------\\
    Delete_Return: function Delete_Return() {
      var _this3 = this;
      var id = this.$route.params.id;
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
          axios["delete"]("returns/purchase/" + id).then(function () {
            _this3.$swal(_this3.$t("Delete_Deleted"), _this3.$t("Deleted_in_successfully"), "success");
            _this3.$router.push({
              name: "index_purchase_return"
            });
          })["catch"](function () {
            _this3.$swal(_this3.$t("Delete_Failed"), _this3.$t("Delete_Therewassomethingwronge"), "warning");
          });
        }
      });
    }
  },
  //end Methods

  //----------------------------- Created function-------------------

  created: function created() {
    this.Get_Details();
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/purchase_return/detail_purchase_return.vue?vue&type=template&id=2ba12444":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/purchase_return/detail_purchase_return.vue?vue&type=template&id=2ba12444 ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
      page: _vm.$t("ReturnDetail"),
      folder: _vm.$t("ListReturns")
    }
  }), _vm._v(" "), _vm.isLoading ? _c("div", {
    staticClass: "loading_page spinner spinner-primary mr-3"
  }) : _vm._e(), _vm._v(" "), !_vm.isLoading ? _c("b-card", [_c("b-row", [_c("b-col", {
    staticClass: "mb-5",
    attrs: {
      md: "12"
    }
  }, [_vm.currentUserPermissions && _vm.currentUserPermissions.includes("Purchase_Returns_edit") ? _c("router-link", {
    staticClass: "btn btn-success btn-icon ripple btn-sm",
    attrs: {
      title: "Edit",
      to: "/app/purchase_return/edit/" + _vm.$route.params.id + "/" + _vm.purchase_return.purchase_id
    }
  }, [_c("i", {
    staticClass: "i-Edit"
  }), _vm._v(" "), _c("span", [_vm._v(_vm._s(_vm.$t("EditReturn")))])]) : _vm._e(), _vm._v(" "), _c("button", {
    staticClass: "btn btn-primary btn-icon ripple btn-sm",
    on: {
      click: function click($event) {
        return _vm.Return_PDF();
      }
    }
  }, [_c("i", {
    staticClass: "i-File-TXT"
  }), _vm._v(" PDF\n        ")]), _vm._v(" "), _c("button", {
    staticClass: "btn btn-warning btn-icon ripple btn-sm",
    on: {
      click: function click($event) {
        return _vm.print();
      }
    }
  }, [_c("i", {
    staticClass: "i-Billing"
  }), _vm._v("\n          " + _vm._s(_vm.$t("print")) + "\n        ")]), _vm._v(" "), _vm.currentUserPermissions && _vm.currentUserPermissions.includes("Purchase_Returns_delete") ? _c("button", {
    staticClass: "btn btn-danger btn-icon ripple btn-sm",
    on: {
      click: function click($event) {
        return _vm.Delete_Return();
      }
    }
  }, [_c("i", {
    staticClass: "i-Close-Window"
  }), _vm._v("\n          " + _vm._s(_vm.$t("Del")) + "\n        ")]) : _vm._e()], 1)], 1), _vm._v(" "), _c("div", {
    staticClass: "invoice",
    attrs: {
      id: "print_Invoice"
    }
  }, [_c("div", {
    staticClass: "invoice-print"
  }, [_c("b-row", {
    staticClass: "justify-content-md-center"
  }, [_c("h4", {
    staticClass: "font-weight-bold"
  }, [_vm._v(_vm._s(_vm.$t("ReturnDetail")) + " : " + _vm._s(_vm.purchase_return.Ref))])]), _vm._v(" "), _c("hr"), _vm._v(" "), _c("b-row", {
    staticClass: "mt-5"
  }, [_c("b-col", {
    staticClass: "mb-4",
    attrs: {
      lg: "4",
      md: "4",
      sm: "12"
    }
  }, [_c("h5", {
    staticClass: "font-weight-bold"
  }, [_vm._v(_vm._s(_vm.$t("Supplier_Info")))]), _vm._v(" "), _c("div", [_vm._v(_vm._s(_vm.purchase_return.supplier_name))]), _vm._v(" "), _c("div", [_vm._v(_vm._s(_vm.purchase_return.supplier_email))]), _vm._v(" "), _c("div", [_vm._v(_vm._s(_vm.purchase_return.supplier_phone))]), _vm._v(" "), _c("div", [_vm._v(_vm._s(_vm.purchase_return.supplier_adr))])]), _vm._v(" "), _c("b-col", {
    staticClass: "mb-4",
    attrs: {
      lg: "4",
      md: "4",
      sm: "12"
    }
  }, [_c("h5", {
    staticClass: "font-weight-bold"
  }, [_vm._v(_vm._s(_vm.$t("Company_Info")))]), _vm._v(" "), _c("div", [_vm._v(_vm._s(_vm.company.CompanyName))]), _vm._v(" "), _c("div", [_vm._v(_vm._s(_vm.company.email))]), _vm._v(" "), _c("div", [_vm._v(_vm._s(_vm.company.CompanyPhone))]), _vm._v(" "), _c("div", [_vm._v(_vm._s(_vm.company.CompanyAdress))])]), _vm._v(" "), _c("b-col", {
    staticClass: "mb-4",
    attrs: {
      lg: "4",
      md: "4",
      sm: "12"
    }
  }, [_c("h5", {
    staticClass: "font-weight-bold"
  }, [_vm._v(_vm._s(_vm.$t("Return_Info")))]), _vm._v(" "), _c("div", [_vm._v(_vm._s(_vm.$t("Reference")) + " : " + _vm._s(_vm.purchase_return.Ref))]), _vm._v(" "), _c("div", [_vm._v(_vm._s(_vm.$t("Purchase_Ref")) + " : " + _vm._s(_vm.purchase_return.purchase_ref))]), _vm._v(" "), _c("div", [_vm._v("\n              " + _vm._s(_vm.$t("Status")) + " :\n              "), _vm.purchase_return.statut == "completed" ? _c("span", {
    staticClass: "badge badge-outline-success"
  }, [_vm._v(_vm._s(_vm.$t("complete")))]) : _c("span", {
    staticClass: "badge badge-outline-warning"
  }, [_vm._v(_vm._s(_vm.$t("Pending")))])]), _vm._v(" "), _c("div", [_vm._v(_vm._s(_vm.$t("warehouse")) + " : " + _vm._s(_vm.purchase_return.warehouse))]), _vm._v(" "), _c("div", [_vm._v("\n              " + _vm._s(_vm.$t("PaymentStatus")) + " :\n              "), _vm.purchase_return.payment_status == "paid" ? _c("span", {
    staticClass: "badge badge-outline-success"
  }, [_vm._v(_vm._s(_vm.$t("Paid")))]) : _vm.purchase_return.payment_status == "partial" ? _c("span", {
    staticClass: "badge badge-outline-info"
  }, [_vm._v(_vm._s(_vm.$t("partial")))]) : _c("span", {
    staticClass: "badge badge-outline-warning"
  }, [_vm._v(_vm._s(_vm.$t("Unpaid")))])])])], 1), _vm._v(" "), _c("b-row", {
    staticClass: "mt-3"
  }, [_c("b-col", {
    attrs: {
      md: "12"
    }
  }, [_c("h5", {
    staticClass: "font-weight-bold"
  }, [_vm._v(_vm._s(_vm.$t("list_product_returns")))]), _vm._v(" "), _c("div", {
    staticClass: "alert alert-danger"
  }, [_vm._v(_vm._s(_vm.$t("products_refunded_alert")))]), _vm._v(" "), _c("div", {
    staticClass: "table-responsive"
  }, [_c("table", {
    staticClass: "table table-hover table-md"
  }, [_c("thead", {
    staticClass: "bg-gray-300"
  }, [_c("tr", [_c("th", {
    attrs: {
      scope: "col"
    }
  }, [_vm._v(_vm._s(_vm.$t("ProductName")))]), _vm._v(" "), _c("th", {
    attrs: {
      scope: "col"
    }
  }, [_vm._v(_vm._s(_vm.$t("Net_Unit_Cost")))]), _vm._v(" "), _c("th", {
    attrs: {
      scope: "col"
    }
  }, [_vm._v(_vm._s(_vm.$t("Qty_return")))]), _vm._v(" "), _c("th", {
    attrs: {
      scope: "col"
    }
  }, [_vm._v(_vm._s(_vm.$t("Unitcost")))]), _vm._v(" "), _c("th", {
    attrs: {
      scope: "col"
    }
  }, [_vm._v(_vm._s(_vm.$t("Discount")))]), _vm._v(" "), _c("th", {
    attrs: {
      scope: "col"
    }
  }, [_vm._v(_vm._s(_vm.$t("Tax")))]), _vm._v(" "), _c("th", {
    attrs: {
      scope: "col"
    }
  }, [_vm._v(_vm._s(_vm.$t("SubTotal")))])])]), _vm._v(" "), _c("tbody", _vm._l(_vm.details, function (detail) {
    return _c("tr", [_c("td", [_c("span", [_vm._v(_vm._s(detail.code) + " (" + _vm._s(detail.name) + ")")]), _vm._v(" "), _c("p", {
      directives: [{
        name: "show",
        rawName: "v-show",
        value: detail.is_imei && detail.imei_number !== null,
        expression: "detail.is_imei && detail.imei_number !==null "
      }]
    }, [_vm._v(_vm._s(_vm.$t("IMEI_SN")) + " : " + _vm._s(detail.imei_number))])]), _vm._v(" "), _c("td", [_vm._v(_vm._s(_vm.formatPriceWithSymbol(_vm.currentUser.currency, detail.Net_cost, 3)))]), _vm._v(" "), _c("td", [_vm._v(_vm._s(_vm.formatNumber(detail.quantity, 2)) + " " + _vm._s(detail.unit_purchase))]), _vm._v(" "), _c("td", [_vm._v(_vm._s(_vm.formatPriceWithSymbol(_vm.currentUser.currency, detail.cost, 2)))]), _vm._v(" "), _c("td", [_vm._v(_vm._s(_vm.formatPriceWithSymbol(_vm.currentUser.currency, detail.DiscountNet, 2)))]), _vm._v(" "), _c("td", [_vm._v(_vm._s(_vm.formatPriceWithSymbol(_vm.currentUser.currency, detail.taxe, 2)))]), _vm._v(" "), _c("td", [_vm._v(_vm._s(_vm.formatPriceWithSymbol(_vm.currentUser.currency, detail.total, 2)))])]);
  }), 0)])])]), _vm._v(" "), _c("div", {
    staticClass: "offset-md-9 col-md-3 mt-4"
  }, [_c("table", {
    staticClass: "table table-striped table-sm"
  }, [_c("tbody", [_c("tr", [_c("td", [_c("span", [_vm._v(_vm._s(_vm.$t("OrderTax")))])]), _vm._v(" "), _c("td", [_c("span", [_vm._v(_vm._s(_vm.formatPriceWithSymbol(_vm.currentUser.currency, _vm.purchase_return.TaxNet, 2)) + " (" + _vm._s(_vm.formatNumber(_vm.purchase_return.tax_rate, 2)) + " %)")])])]), _vm._v(" "), _c("tr", [_c("td", [_c("span", [_vm._v(_vm._s(_vm.$t("Discount")))])]), _vm._v(" "), _c("td", [_c("span", [_vm._v(_vm._s(_vm.formatPriceWithSymbol(_vm.currentUser.currency, _vm.purchase_return.discount, 2)))])])]), _vm._v(" "), _c("tr", [_c("td", [_c("span", [_vm._v(_vm._s(_vm.$t("Shipping")))])]), _vm._v(" "), _c("td", [_c("span", [_vm._v(_vm._s(_vm.formatPriceWithSymbol(_vm.currentUser.currency, _vm.purchase_return.shipping, 2)))])])]), _vm._v(" "), _c("tr", [_c("td", [_c("span", {
    staticClass: "font-weight-bold"
  }, [_vm._v(_vm._s(_vm.$t("Total")))])]), _vm._v(" "), _c("td", [_c("span", {
    staticClass: "font-weight-bold"
  }, [_vm._v(_vm._s(_vm.formatPriceWithSymbol(_vm.currentUser.currency, _vm.purchase_return.GrandTotal, 2)))])])]), _vm._v(" "), _c("tr", [_c("td", [_c("span", {
    staticClass: "font-weight-bold"
  }, [_vm._v(_vm._s(_vm.$t("Paid")))])]), _vm._v(" "), _c("td", [_c("span", {
    staticClass: "font-weight-bold"
  }, [_vm._v(_vm._s(_vm.formatPriceWithSymbol(_vm.currentUser.currency, _vm.purchase_return.paid_amount, 2)))])])]), _vm._v(" "), _c("tr", [_c("td", [_c("span", {
    staticClass: "font-weight-bold"
  }, [_vm._v(_vm._s(_vm.$t("Due")))])]), _vm._v(" "), _c("td", [_c("span", {
    staticClass: "font-weight-bold"
  }, [_vm._v(_vm._s(_vm.formatPriceWithSymbol(_vm.currentUser.currency, _vm.purchase_return.due, 2)))])])])])])])], 1), _vm._v(" "), _c("hr", {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: _vm.purchase_return.note,
      expression: "purchase_return.note"
    }]
  }), _vm._v(" "), _c("b-row", {
    staticClass: "mt-4"
  }, [_c("b-col", {
    attrs: {
      md: "12"
    }
  }, [_c("p", [_vm._v(_vm._s(_vm.purchase_return.note))])])], 1)], 1)])], 1) : _vm._e()], 1);
};
var staticRenderFns = [];
render._withStripped = true;


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

/***/ "./resources/src/views/app/pages/purchase_return/detail_purchase_return.vue":
/*!**********************************************************************************!*\
  !*** ./resources/src/views/app/pages/purchase_return/detail_purchase_return.vue ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _detail_purchase_return_vue_vue_type_template_id_2ba12444__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./detail_purchase_return.vue?vue&type=template&id=2ba12444 */ "./resources/src/views/app/pages/purchase_return/detail_purchase_return.vue?vue&type=template&id=2ba12444");
/* harmony import */ var _detail_purchase_return_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./detail_purchase_return.vue?vue&type=script&lang=js */ "./resources/src/views/app/pages/purchase_return/detail_purchase_return.vue?vue&type=script&lang=js");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _detail_purchase_return_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _detail_purchase_return_vue_vue_type_template_id_2ba12444__WEBPACK_IMPORTED_MODULE_0__.render,
  _detail_purchase_return_vue_vue_type_template_id_2ba12444__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) // removed by dead control flow
{ var api; }
component.options.__file = "resources/src/views/app/pages/purchase_return/detail_purchase_return.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/src/views/app/pages/purchase_return/detail_purchase_return.vue?vue&type=script&lang=js":
/*!**********************************************************************************************************!*\
  !*** ./resources/src/views/app/pages/purchase_return/detail_purchase_return.vue?vue&type=script&lang=js ***!
  \**********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_detail_purchase_return_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./detail_purchase_return.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/purchase_return/detail_purchase_return.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_detail_purchase_return_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/src/views/app/pages/purchase_return/detail_purchase_return.vue?vue&type=template&id=2ba12444":
/*!****************************************************************************************************************!*\
  !*** ./resources/src/views/app/pages/purchase_return/detail_purchase_return.vue?vue&type=template&id=2ba12444 ***!
  \****************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_detail_purchase_return_vue_vue_type_template_id_2ba12444__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_detail_purchase_return_vue_vue_type_template_id_2ba12444__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_detail_purchase_return_vue_vue_type_template_id_2ba12444__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./detail_purchase_return.vue?vue&type=template&id=2ba12444 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/purchase_return/detail_purchase_return.vue?vue&type=template&id=2ba12444");


/***/ })

}]);