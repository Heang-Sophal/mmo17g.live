"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["detail_transfer"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/transfers/detail_transfer.vue?vue&type=script&lang=js":
/*!*************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/transfers/detail_transfer.vue?vue&type=script&lang=js ***!
  \*************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! nprogress */ "./node_modules/nprogress/nprogress.js");
/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(nprogress__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../utils */ "./resources/src/utils/index.js");



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  computed: (0,vuex__WEBPACK_IMPORTED_MODULE_0__.mapGetters)(["currentUserPermissions", "currentUser"]),
  metaInfo: {
    title: "Transfer Detail"
  },
  data: function data() {
    return {
      isLoading: true,
      transfer: {},
      details: []
    };
  },
  methods: {
    //----------------------------------- Print Transfer PDF -------------------------\\
    Print_Transfer_PDF: function Print_Transfer_PDF() {
      var _this = this;
      // Start the progress bar.
      nprogress__WEBPACK_IMPORTED_MODULE_1___default().start();
      nprogress__WEBPACK_IMPORTED_MODULE_1___default().set(0.1);
      var id = this.$route.params.id;
      axios.get("transfer_pdf/".concat(id), {
        responseType: "blob",
        // important
        headers: {
          "Content-Type": "application/json"
        }
      }).then(function (response) {
        var url = window.URL.createObjectURL(new Blob([response.data]));
        var link = document.createElement("a");
        link.href = url;
        link.setAttribute("download", "Transfer_" + _this.transfer.Ref + ".pdf");
        document.body.appendChild(link);
        link.click();
        // Complete the animation of the  progress bar.
        setTimeout(function () {
          return nprogress__WEBPACK_IMPORTED_MODULE_1___default().done();
        }, 500);
      })["catch"](function () {
        // Complete the animation of theprogress bar.
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
    //----------------------------------------- Format Display Date -------------------------------\\
    formatDisplayDate: function formatDisplayDate(value) {
      if (!value) return '';
      // Get date format from Vuex store (loaded from database) or fallback
      var dateFormat = this.$store.getters.getDateFormat || _utils__WEBPACK_IMPORTED_MODULE_2__["default"].getDateFormat(this.$store);
      return _utils__WEBPACK_IMPORTED_MODULE_2__["default"].formatDisplayDate(value, dateFormat);
    },
    //----------------------------------- Get Details Transfer ------------------------------\\
    Get_Transfer_Details: function Get_Transfer_Details() {
      var _this2 = this;
      // Start the progress bar.
      nprogress__WEBPACK_IMPORTED_MODULE_1___default().start();
      nprogress__WEBPACK_IMPORTED_MODULE_1___default().set(0.1);
      var id = this.$route.params.id;
      axios.get("transfers/" + id).then(function (response) {
        _this2.transfer = response.data.transfer;
        _this2.details = response.data.details;
        // Complete the animation of theprogress bar.
        nprogress__WEBPACK_IMPORTED_MODULE_1___default().done();
        _this2.isLoading = false;
      })["catch"](function (response) {
        // Complete the animation of theprogress bar.
        nprogress__WEBPACK_IMPORTED_MODULE_1___default().done();
        _this2.isLoading = false;
        _this2.$swal(_this2.$t("Failed"), _this2.$t("Failed_to_load_transfer_details"), "warning");
      });
    },
    //---------------------------------- Approve Transfer ----------------------\\
    Approve_Transfer: function Approve_Transfer() {
      var _this3 = this;
      this.$swal({
        title: this.$t("Approve_Transfer"),
        text: this.$t("Are_you_sure_you_want_to_approve_this_transfer"),
        type: "question",
        showCancelButton: true,
        confirmButtonColor: "#28a745",
        cancelButtonColor: "#6c757d",
        cancelButtonText: this.$t("Cancel"),
        confirmButtonText: this.$t("Approve")
      }).then(function (result) {
        if (result.value) {
          // Start the progress bar.
          nprogress__WEBPACK_IMPORTED_MODULE_1___default().start();
          nprogress__WEBPACK_IMPORTED_MODULE_1___default().set(0.1);
          var id = _this3.$route.params.id;
          axios.post("transfers/" + id + "/approve").then(function () {
            _this3.$swal(_this3.$t("Success"), _this3.$t("Transfer_approved_successfully"), "success");
            // Reload transfer details
            _this3.Get_Transfer_Details();
          })["catch"](function () {
            // Complete the animation of theprogress bar.
            setTimeout(function () {
              return nprogress__WEBPACK_IMPORTED_MODULE_1___default().done();
            }, 500);
            _this3.$swal(_this3.$t("Failed"), _this3.$t("Failed_to_approve_transfer"), "warning");
          });
        }
      });
    },
    //---------------------------------- Delete Transfer ----------------------\\
    Delete_Transfer: function Delete_Transfer() {
      var _this4 = this;
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
          // Start the progress bar.
          nprogress__WEBPACK_IMPORTED_MODULE_1___default().start();
          nprogress__WEBPACK_IMPORTED_MODULE_1___default().set(0.1);
          var id = _this4.$route.params.id;
          axios["delete"]("transfers/" + id).then(function () {
            _this4.$swal(_this4.$t("Delete_Deleted"), _this4.$t("Deleted_in_successfully"), "success");
            // Redirect to transfers list
            _this4.$router.push({
              name: "index_transfer"
            });
          })["catch"](function () {
            // Complete the animation of theprogress bar.
            setTimeout(function () {
              return nprogress__WEBPACK_IMPORTED_MODULE_1___default().done();
            }, 500);
            _this4.$swal(_this4.$t("Delete_Failed"), _this4.$t("Delete_Therewassomethingwronge"), "warning");
          });
        }
      });
    }
  },
  //-----------------------------Autoload function-------------------
  created: function created() {
    this.Get_Transfer_Details();
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/transfers/detail_transfer.vue?vue&type=template&id=2bdfbae5&scoped=true":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/transfers/detail_transfer.vue?vue&type=template&id=2bdfbae5&scoped=true ***!
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
      page: _vm.$t("TransferDetail"),
      folder: _vm.$t("ListTransfers")
    }
  }), _vm._v(" "), _vm.isLoading ? _c("div", {
    staticClass: "loading_page spinner spinner-primary mr-3"
  }) : _vm._e(), _vm._v(" "), !_vm.isLoading ? _c("b-card", {
    staticClass: "shadow-sm"
  }, [_c("b-row", [_c("b-col", {
    staticClass: "mb-3",
    attrs: {
      md: "12"
    }
  }, [_c("router-link", {
    staticClass: "btn btn-secondary btn-icon ripple btn-sm mr-2",
    attrs: {
      to: {
        name: "index_transfer"
      }
    }
  }, [_c("i", {
    staticClass: "i-Back"
  }), _vm._v(" "), _c("span", [_vm._v(_vm._s(_vm.$t("Back")))])]), _vm._v(" "), _vm.currentUserPermissions && _vm.currentUserPermissions.includes("transfer_edit") ? _c("router-link", {
    staticClass: "btn btn-success btn-icon ripple btn-sm mr-2",
    attrs: {
      title: "Edit",
      to: {
        name: "edit_transfer",
        params: {
          id: _vm.$route.params.id
        }
      }
    }
  }, [_c("i", {
    staticClass: "i-Edit"
  }), _vm._v(" "), _c("span", [_vm._v(_vm._s(_vm.$t("Edit")))])]) : _vm._e(), _vm._v(" "), _c("button", {
    staticClass: "btn btn-primary btn-icon ripple btn-sm mr-2",
    on: {
      click: function click($event) {
        return _vm.Print_Transfer_PDF();
      }
    }
  }, [_c("i", {
    staticClass: "i-File-TXT"
  }), _vm._v("\n          " + _vm._s(_vm.$t("PDF")) + "\n        ")]), _vm._v(" "), _c("button", {
    staticClass: "btn btn-warning btn-icon ripple btn-sm mr-2",
    on: {
      click: function click($event) {
        return _vm.print();
      }
    }
  }, [_c("i", {
    staticClass: "i-Billing"
  }), _vm._v("\n          " + _vm._s(_vm.$t("print")) + "\n        ")]), _vm._v(" "), _vm.transfer.approval_status === "pending" && _vm.currentUserPermissions && _vm.currentUserPermissions.includes("transfer_edit") ? _c("button", {
    staticClass: "btn btn-info btn-icon ripple btn-sm mr-2",
    on: {
      click: function click($event) {
        return _vm.Approve_Transfer();
      }
    }
  }, [_c("i", {
    staticClass: "i-Check"
  }), _vm._v("\n          " + _vm._s(_vm.$t("Approve")) + "\n        ")]) : _vm._e(), _vm._v(" "), _vm.currentUserPermissions && _vm.currentUserPermissions.includes("transfer_delete") ? _c("button", {
    staticClass: "btn btn-danger btn-icon ripple btn-sm",
    on: {
      click: function click($event) {
        return _vm.Delete_Transfer();
      }
    }
  }, [_c("i", {
    staticClass: "i-Close-Window"
  }), _vm._v("\n          " + _vm._s(_vm.$t("Del")) + "\n        ")]) : _vm._e()], 1)], 1), _vm._v(" "), _c("div", {
    staticClass: "invoice mt-5",
    attrs: {
      id: "print_Invoice"
    }
  }, [_c("div", {
    staticClass: "invoice-print"
  }, [_c("b-row", {
    staticClass: "justify-content-md-center mb-4"
  }, [_c("h4", {
    staticClass: "font-weight-bold"
  }, [_vm._v(_vm._s(_vm.$t("TransferDetail")) + " : " + _vm._s(_vm.transfer.Ref))])]), _vm._v(" "), _c("hr"), _vm._v(" "), _c("b-row", {
    staticClass: "mt-5"
  }, [_c("b-col", {
    staticClass: "mb-4",
    attrs: {
      lg: "4",
      md: "6",
      sm: "12"
    }
  }, [_c("b-card", {
    staticClass: "h-100 shadow-sm"
  }, [_c("h5", {
    staticClass: "font-weight-bold mb-3 text-primary"
  }, [_c("i", {
    staticClass: "i-Home1 mr-2"
  }), _vm._v(_vm._s(_vm.$t("FromWarehouse")) + "\n              ")]), _vm._v(" "), _c("div", {
    staticClass: "transfer-info"
  }, [_c("p", {
    staticClass: "mb-2"
  }, [_c("strong", [_vm._v(_vm._s(_vm.transfer.from_warehouse))])])])])], 1), _vm._v(" "), _c("b-col", {
    staticClass: "mb-4",
    attrs: {
      lg: "4",
      md: "6",
      sm: "12"
    }
  }, [_c("b-card", {
    staticClass: "h-100 shadow-sm"
  }, [_c("h5", {
    staticClass: "font-weight-bold mb-3 text-success"
  }, [_c("i", {
    staticClass: "i-Home1 mr-2"
  }), _vm._v(_vm._s(_vm.$t("ToWarehouse")) + "\n              ")]), _vm._v(" "), _c("div", {
    staticClass: "transfer-info"
  }, [_c("p", {
    staticClass: "mb-2"
  }, [_c("strong", [_vm._v(_vm._s(_vm.transfer.to_warehouse))])])])])], 1), _vm._v(" "), _c("b-col", {
    staticClass: "mb-4",
    attrs: {
      lg: "4",
      md: "6",
      sm: "12"
    }
  }, [_c("b-card", {
    staticClass: "h-100 shadow-sm"
  }, [_c("h5", {
    staticClass: "font-weight-bold mb-3 text-info"
  }, [_c("i", {
    staticClass: "i-File-Clipboard-File--Text mr-2"
  }), _vm._v(_vm._s(_vm.$t("Transfer_Info")) + "\n              ")]), _vm._v(" "), _c("div", {
    staticClass: "transfer-info"
  }, [_c("p", {
    staticClass: "mb-2"
  }, [_c("strong", [_vm._v(_vm._s(_vm.$t("Reference")) + ":")]), _vm._v(" " + _vm._s(_vm.transfer.Ref) + "\n                ")]), _vm._v(" "), _c("p", {
    staticClass: "mb-2"
  }, [_c("strong", [_vm._v(_vm._s(_vm.$t("date")) + ":")]), _vm._v(" " + _vm._s(_vm.formatDisplayDate(_vm.transfer.date)) + "\n                ")]), _vm._v(" "), _c("p", {
    staticClass: "mb-2"
  }, [_c("strong", [_vm._v(_vm._s(_vm.$t("Status")) + ":")]), _vm._v(" "), _vm.transfer.statut == "completed" ? _c("span", {
    staticClass: "badge badge-outline-success ml-2"
  }, [_vm._v(_vm._s(_vm.$t("complete")))]) : _vm.transfer.statut == "sent" ? _c("span", {
    staticClass: "badge badge-outline-warning ml-2"
  }, [_vm._v(_vm._s(_vm.$t("Sent")))]) : _c("span", {
    staticClass: "badge badge-outline-danger ml-2"
  }, [_vm._v(_vm._s(_vm.$t("Pending")))])]), _vm._v(" "), _c("p", {
    staticClass: "mb-2"
  }, [_c("strong", [_vm._v(_vm._s(_vm.$t("Approval")) + ":")]), _vm._v(" "), !_vm.transfer.approval_status || _vm.transfer.approval_status === "approved" ? _c("span", {
    staticClass: "badge badge-outline-success ml-2"
  }, [_vm._v(_vm._s(_vm.$t("Approved")))]) : _vm.transfer.approval_status === "pending" ? _c("span", {
    staticClass: "badge badge-outline-warning ml-2"
  }, [_vm._v(_vm._s(_vm.$t("Pending_Approval")))]) : _vm.transfer.approval_status === "rejected" ? _c("span", {
    staticClass: "badge badge-outline-danger ml-2"
  }, [_vm._v(_vm._s(_vm.$t("Rejected")))]) : _vm._e()])])])], 1)], 1), _vm._v(" "), _c("b-row", {
    staticClass: "mt-4"
  }, [_c("b-col", {
    attrs: {
      md: "12"
    }
  }, [_c("h5", {
    staticClass: "font-weight-bold mb-3"
  }, [_c("i", {
    staticClass: "i-Box-Full mr-2"
  }), _vm._v(_vm._s(_vm.$t("Order_Summary")) + "\n            ")]), _vm._v(" "), _c("div", {
    staticClass: "table-responsive"
  }, [_c("table", {
    staticClass: "table table-hover table-bordered"
  }, [_c("thead", {
    staticClass: "bg-light"
  }, [_c("tr", [_c("th", {
    staticClass: "text-left",
    attrs: {
      scope: "col"
    }
  }, [_vm._v(_vm._s(_vm.$t("ProductName")))]), _vm._v(" "), _c("th", {
    staticClass: "text-center",
    attrs: {
      scope: "col"
    }
  }, [_vm._v(_vm._s(_vm.$t("CodeProduct")))]), _vm._v(" "), _c("th", {
    staticClass: "text-center",
    attrs: {
      scope: "col"
    }
  }, [_vm._v(_vm._s(_vm.$t("Quantity")))]), _vm._v(" "), _c("th", {
    staticClass: "text-right",
    attrs: {
      scope: "col"
    }
  }, [_vm._v(_vm._s(_vm.$t("SubTotal")))])])]), _vm._v(" "), _c("tbody", _vm._l(_vm.details, function (detail, index) {
    return _c("tr", {
      key: index
    }, [_c("td", {
      staticClass: "text-left"
    }, [_c("span", {
      staticClass: "font-weight-bold"
    }, [_vm._v(_vm._s(detail.name))])]), _vm._v(" "), _c("td", {
      staticClass: "text-center"
    }, [_vm._v(_vm._s(detail.code))]), _vm._v(" "), _c("td", {
      staticClass: "text-center"
    }, [_c("span", {
      staticClass: "badge badge-primary"
    }, [_vm._v(_vm._s(_vm.formatNumber(detail.quantity, 2)) + " " + _vm._s(detail.unit))])]), _vm._v(" "), _c("td", {
      staticClass: "text-right font-weight-bold"
    }, [_vm._v("\n                      " + _vm._s(_vm.currentUser.currency) + " " + _vm._s(_vm.formatNumber(detail.total, 2)) + "\n                    ")])]);
  }), 0)])])])], 1), _vm._v(" "), _c("b-row", {
    staticClass: "mt-4"
  }, [_c("b-col", {
    staticClass: "text-right",
    attrs: {
      md: "12"
    }
  }, [_c("div", {
    staticClass: "offset-md-8 col-md-4"
  }, [_c("table", {
    staticClass: "table table-striped table-sm"
  }, [_c("tbody", [_c("tr", [_c("td", {
    staticClass: "font-weight-bold"
  }, [_vm._v(_vm._s(_vm.$t("Items")) + ":")]), _vm._v(" "), _c("td", {
    staticClass: "text-right"
  }, [_vm._v(_vm._s(_vm.transfer.items))])]), _vm._v(" "), _c("tr", [_c("td", {
    staticClass: "font-weight-bold"
  }, [_vm._v(_vm._s(_vm.$t("Total")) + ":")]), _vm._v(" "), _c("td", {
    staticClass: "text-right"
  }, [_c("span", {
    staticClass: "font-weight-bold text-primary",
    staticStyle: {
      "font-size": "1.2em"
    }
  }, [_vm._v("\n                        " + _vm._s(_vm.currentUser.currency) + " " + _vm._s(_vm.formatNumber(_vm.transfer.GrandTotal, 2)) + "\n                      ")])])])])])])])], 1), _vm._v(" "), _vm.transfer.note ? _c("hr", {
    staticClass: "mt-4"
  }) : _vm._e(), _vm._v(" "), _vm.transfer.note ? _c("b-row", {
    staticClass: "mt-4"
  }, [_c("b-col", {
    attrs: {
      md: "12"
    }
  }, [_c("h5", {
    staticClass: "font-weight-bold mb-2"
  }, [_c("i", {
    staticClass: "i-Notes mr-2"
  }), _vm._v(_vm._s(_vm.$t("Note")) + "\n            ")]), _vm._v(" "), _c("div", {
    staticClass: "p-3 bg-light rounded"
  }, [_c("p", {
    staticClass: "mb-0"
  }, [_vm._v(_vm._s(_vm.transfer.note))])])])], 1) : _vm._e()], 1)])], 1) : _vm._e()], 1);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-8.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-8.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/transfers/detail_transfer.vue?vue&type=style&index=0&id=2bdfbae5&scoped=true&lang=css":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-8.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-8.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/transfers/detail_transfer.vue?vue&type=style&index=0&id=2bdfbae5&scoped=true&lang=css ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, "\n.transfer-info p[data-v-2bdfbae5] {\n  margin-bottom: 0.5rem;\n}\n.invoice[data-v-2bdfbae5] {\n  background: #fff;\n  padding: 20px;\n}\n.invoice-print[data-v-2bdfbae5] {\n  background: #fff;\n}\n.table th[data-v-2bdfbae5] {\n  border-top: 1px solid #dee2e6;\n  font-weight: 600;\n}\n.bg-light[data-v-2bdfbae5] {\n  background-color: #f8f9fa !important;\n}\n.shadow-sm[data-v-2bdfbae5] {\n  box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.075) !important;\n}\n", ""]);
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

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-8.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-8.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/transfers/detail_transfer.vue?vue&type=style&index=0&id=2bdfbae5&scoped=true&lang=css":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-8.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-8.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/transfers/detail_transfer.vue?vue&type=style&index=0&id=2bdfbae5&scoped=true&lang=css ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_8_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_8_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_detail_transfer_vue_vue_type_style_index_0_id_2bdfbae5_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-8.use[1]!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-8.use[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./detail_transfer.vue?vue&type=style&index=0&id=2bdfbae5&scoped=true&lang=css */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-8.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-8.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/transfers/detail_transfer.vue?vue&type=style&index=0&id=2bdfbae5&scoped=true&lang=css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_8_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_8_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_detail_transfer_vue_vue_type_style_index_0_id_2bdfbae5_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_8_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_8_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_detail_transfer_vue_vue_type_style_index_0_id_2bdfbae5_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

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

/***/ "./resources/src/utils/index.js":
/*!**************************************!*\
  !*** ./resources/src/utils/index.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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

/***/ "./resources/src/views/app/pages/transfers/detail_transfer.vue":
/*!*********************************************************************!*\
  !*** ./resources/src/views/app/pages/transfers/detail_transfer.vue ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _detail_transfer_vue_vue_type_template_id_2bdfbae5_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./detail_transfer.vue?vue&type=template&id=2bdfbae5&scoped=true */ "./resources/src/views/app/pages/transfers/detail_transfer.vue?vue&type=template&id=2bdfbae5&scoped=true");
/* harmony import */ var _detail_transfer_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./detail_transfer.vue?vue&type=script&lang=js */ "./resources/src/views/app/pages/transfers/detail_transfer.vue?vue&type=script&lang=js");
/* harmony import */ var _detail_transfer_vue_vue_type_style_index_0_id_2bdfbae5_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./detail_transfer.vue?vue&type=style&index=0&id=2bdfbae5&scoped=true&lang=css */ "./resources/src/views/app/pages/transfers/detail_transfer.vue?vue&type=style&index=0&id=2bdfbae5&scoped=true&lang=css");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _detail_transfer_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _detail_transfer_vue_vue_type_template_id_2bdfbae5_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render,
  _detail_transfer_vue_vue_type_template_id_2bdfbae5_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "2bdfbae5",
  null
  
)

/* hot reload */
if (false) // removed by dead control flow
{ var api; }
component.options.__file = "resources/src/views/app/pages/transfers/detail_transfer.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/src/views/app/pages/transfers/detail_transfer.vue?vue&type=script&lang=js":
/*!*********************************************************************************************!*\
  !*** ./resources/src/views/app/pages/transfers/detail_transfer.vue?vue&type=script&lang=js ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_detail_transfer_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./detail_transfer.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/transfers/detail_transfer.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_detail_transfer_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/src/views/app/pages/transfers/detail_transfer.vue?vue&type=style&index=0&id=2bdfbae5&scoped=true&lang=css":
/*!*****************************************************************************************************************************!*\
  !*** ./resources/src/views/app/pages/transfers/detail_transfer.vue?vue&type=style&index=0&id=2bdfbae5&scoped=true&lang=css ***!
  \*****************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_8_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_8_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_detail_transfer_vue_vue_type_style_index_0_id_2bdfbae5_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/style-loader/dist/cjs.js!../../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-8.use[1]!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-8.use[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./detail_transfer.vue?vue&type=style&index=0&id=2bdfbae5&scoped=true&lang=css */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-8.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-8.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/transfers/detail_transfer.vue?vue&type=style&index=0&id=2bdfbae5&scoped=true&lang=css");


/***/ }),

/***/ "./resources/src/views/app/pages/transfers/detail_transfer.vue?vue&type=template&id=2bdfbae5&scoped=true":
/*!***************************************************************************************************************!*\
  !*** ./resources/src/views/app/pages/transfers/detail_transfer.vue?vue&type=template&id=2bdfbae5&scoped=true ***!
  \***************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_detail_transfer_vue_vue_type_template_id_2bdfbae5_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_detail_transfer_vue_vue_type_template_id_2bdfbae5_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_detail_transfer_vue_vue_type_template_id_2bdfbae5_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./detail_transfer.vue?vue&type=template&id=2bdfbae5&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/transfers/detail_transfer.vue?vue&type=template&id=2bdfbae5&scoped=true");


/***/ })

}]);