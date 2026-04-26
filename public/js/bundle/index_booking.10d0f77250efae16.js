"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["index_booking"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/bookings/index_booking.vue?vue&type=script&lang=js":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/bookings/index_booking.vue?vue&type=script&lang=js ***!
  \**********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! nprogress */ "./node_modules/nprogress/nprogress.js");
/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(nprogress__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  metaInfo: {
    title: "Bookings"
  },
  data: function data() {
    return {
      isLoading: true,
      isPdfLoading: false,
      bookings: [],
      totalRows: 0,
      serverParams: {
        sort: {
          field: "id",
          type: "desc"
        },
        page: 1,
        perPage: 10
      },
      search: "",
      limit: "10",
      filterDate: "",
      filterStatus: "",
      selectedBooking: null,
      statusOptions: [{
        label: this.$t("Pending") || "Pending",
        value: "pending"
      }, {
        label: this.$t("Confirmed") || "Confirmed",
        value: "confirmed"
      }, {
        label: this.$t("Cancelled") || "Cancelled",
        value: "cancelled"
      }, {
        label: this.$t("complete") || "Completed",
        value: "completed"
      }]
    };
  },
  computed: {
    columns: function columns() {
      return [{
        label: this.$t("Reference") || "Reference",
        field: "Ref",
        tdClass: "text-left",
        thClass: "text-left"
      }, {
        label: this.$t("Customer"),
        field: "customer_name",
        tdClass: "text-left",
        thClass: "text-left"
      }, {
        label: this.$t("Product"),
        field: "product_name",
        tdClass: "text-left",
        thClass: "text-left"
      }, {
        label: this.$t("Price"),
        field: "price",
        tdClass: "text-left",
        thClass: "text-left"
      }, {
        label: this.$t("Date"),
        field: "booking_date",
        tdClass: "text-left",
        thClass: "text-left"
      }, {
        label: this.$t("Start_Time") || "Start Time",
        field: "booking_time",
        tdClass: "text-left",
        thClass: "text-left"
      }, {
        label: this.$t("End_Time") || "End Time",
        field: "booking_end_time",
        tdClass: "text-left",
        thClass: "text-left"
      }, {
        label: this.$t("Status"),
        field: "status",
        tdClass: "text-left",
        thClass: "text-left"
      }, {
        label: this.$t("Action"),
        field: "actions",
        tdClass: "text-right",
        thClass: "text-right",
        sortable: false
      }];
    }
  },
  methods: {
    updateParams: function updateParams(newProps) {
      this.serverParams = Object.assign({}, this.serverParams, newProps);
    },
    onPageChange: function onPageChange(_ref) {
      var currentPage = _ref.currentPage;
      if (this.serverParams.page !== currentPage) {
        this.updateParams({
          page: currentPage
        });
        this.getBookings(currentPage);
      }
    },
    onPerPageChange: function onPerPageChange(_ref2) {
      var currentPerPage = _ref2.currentPerPage;
      if (this.limit !== currentPerPage) {
        this.limit = currentPerPage;
        this.updateParams({
          page: 1,
          perPage: currentPerPage
        });
        this.getBookings(1);
      }
    },
    onSortChange: function onSortChange(params) {
      var field = params[0].field || "id";
      this.updateParams({
        sort: {
          type: params[0].type,
          field: field
        }
      });
      this.getBookings(this.serverParams.page);
    },
    onSearch: function onSearch(value) {
      this.search = value.searchTerm;
      this.getBookings(this.serverParams.page);
    },
    resetFilter: function resetFilter() {
      this.search = "";
      this.filterDate = "";
      this.filterStatus = "";
      this.getBookings(this.serverParams.page);
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
    getBookings: function getBookings(page) {
      var _this = this;
      nprogress__WEBPACK_IMPORTED_MODULE_0___default().start();
      nprogress__WEBPACK_IMPORTED_MODULE_0___default().set(0.1);
      var params = "page=" + page + "&status=" + (this.filterStatus || "") + "&date=" + (this.filterDate || "") + "&SortField=" + this.serverParams.sort.field + "&SortType=" + this.serverParams.sort.type + "&search=" + this.search + "&limit=" + this.limit;
      axios.get("bookings?" + params).then(function (response) {
        _this.bookings = response.data.bookings || [];
        _this.totalRows = response.data.totalRows || 0;
        nprogress__WEBPACK_IMPORTED_MODULE_0___default().done();
        _this.isLoading = false;
      })["catch"](function () {
        nprogress__WEBPACK_IMPORTED_MODULE_0___default().done();
        setTimeout(function () {
          _this.isLoading = false;
        }, 500);
      });
    },
    removeBooking: function removeBooking(id) {
      var _this2 = this;
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
          axios["delete"]("bookings/" + id).then(function () {
            _this2.$swal(_this2.$t("Delete_Deleted"), _this2.$t("Deleted_in_successfully"), "success");
            _this2.getBookings(_this2.serverParams.page);
          })["catch"](function () {
            setTimeout(function () {
              return nprogress__WEBPACK_IMPORTED_MODULE_0___default().done();
            }, 500);
            _this2.$swal(_this2.$t("Delete_Failed"), _this2.$t("Delete_Therewassomethingwronge"), "warning");
          });
        }
      });
    },
    showBookingDetails: function showBookingDetails(row) {
      this.selectedBooking = Object.assign({}, row);
      this.$bvModal.show("booking-detail-modal");
    },
    formatPrice: function formatPrice(price) {
      if (price === null || price === undefined || price === '') {
        return '-';
      }
      // Format as currency with 2 decimal places
      return parseFloat(price).toFixed(2);
    },
    //----------------------------------- Booking PDF  -------------------------\\
    Booking_PDF: function Booking_PDF(id) {
      var _this3 = this;
      // Show full page loading overlay
      this.isPdfLoading = true;
      nprogress__WEBPACK_IMPORTED_MODULE_0___default().start();
      nprogress__WEBPACK_IMPORTED_MODULE_0___default().set(0.1);
      axios.get("booking_pdf/".concat(id), {
        responseType: "blob",
        // important
        headers: {
          "Content-Type": "application/json"
        }
      }).then(function (response) {
        var url = window.URL.createObjectURL(new Blob([response.data]));
        var link = document.createElement("a");
        link.href = url;
        link.setAttribute("download", "Booking_" + id + ".pdf");
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
    printBooking: function printBooking() {
      this.$htmlToPaper('print_Booking');
    },
    makeToast: function makeToast(variant, msg, title) {
      this.$root.$bvToast.toast(msg, {
        title: title,
        variant: variant,
        solid: true
      });
    },
    sendBookingEmail: function sendBookingEmail(row) {
      var _this4 = this;
      nprogress__WEBPACK_IMPORTED_MODULE_0___default().start();
      nprogress__WEBPACK_IMPORTED_MODULE_0___default().set(0.1);
      axios.post("bookings_send_email", {
        id: row.id
      }).then(function (response) {
        nprogress__WEBPACK_IMPORTED_MODULE_0___default().done();
        var msg = response.data && response.data.message || _this4.$t("SendEmail") || _this4.$t("Send_Email") || "Email sent successfully";
        _this4.makeToast("success", msg, _this4.$t("Success") || "Success");
      })["catch"](function (err) {
        nprogress__WEBPACK_IMPORTED_MODULE_0___default().done();
        var msg = err.response && err.response.data && err.response.data.message || _this4.$t("InvalidData");
        _this4.makeToast("danger", msg, _this4.$t("Failed"));
      });
    }
  },
  created: function created() {
    this.getBookings(1);
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/bookings/index_booking.vue?vue&type=template&id=7ef93d18&scoped=true":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/bookings/index_booking.vue?vue&type=template&id=7ef93d18&scoped=true ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************/
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
      page: _vm.$t("Booking_List"),
      folder: _vm.$t("Bookings")
    }
  }), _vm._v(" "), _vm.isLoading ? _c("div", {
    staticClass: "loading_page spinner spinner-primary mr-3"
  }) : _vm._e(), _vm._v(" "), _vm.isPdfLoading ? _c("div", {
    staticClass: "pdf-loading-overlay"
  }, [_c("div", {
    staticClass: "pdf-loading-content"
  }, [_vm._m(0), _vm._v(" "), _c("h3", {
    staticClass: "pdf-loading-title"
  }, [_vm._v(_vm._s(_vm.$t("Generating_PDF") || "Generating PDF"))]), _vm._v(" "), _c("p", {
    staticClass: "pdf-loading-message"
  }, [_vm._v(_vm._s(_vm.$t("Please_wait") || "Please wait while we prepare your document..."))])])]) : _c("div", {
    staticClass: "page-wrapper"
  }, [_c("div", {
    staticClass: "control-bar"
  }, [_c("div", {
    staticClass: "control-left"
  }, [_c("h5", {
    staticClass: "mb-0 page-title"
  }, [_vm._v("\n          " + _vm._s(_vm.$t("Bookings") || "Bookings") + "\n        ")])]), _vm._v(" "), _c("div", {
    staticClass: "control-right"
  }, [_c("button", {
    directives: [{
      name: "b-toggle",
      rawName: "v-b-toggle.booking-filter-sidebar",
      modifiers: {
        "booking-filter-sidebar": true
      }
    }],
    staticClass: "action-btn filter-btn"
  }, [_c("i", {
    staticClass: "i-Filter-2"
  }), _vm._v(" "), _c("span", [_vm._v(_vm._s(_vm.$t("Filter")))])]), _vm._v(" "), _c("router-link", {
    staticClass: "action-btn",
    attrs: {
      to: {
        name: "calendar_booking"
      }
    }
  }, [_c("i", {
    staticClass: "i-Calendar-4"
  }), _vm._v(" "), _c("span", [_vm._v(_vm._s(_vm.$t("Calendar_View") || "Calendar"))])]), _vm._v(" "), _c("router-link", {
    staticClass: "action-btn add-btn",
    attrs: {
      to: "/app/bookings/store"
    }
  }, [_c("i", {
    staticClass: "i-Add"
  }), _vm._v(" "), _c("span", [_vm._v(_vm._s(_vm.$t("Add")))])])], 1)]), _vm._v(" "), _c("div", {
    staticClass: "table-card"
  }, [_c("vue-good-table", {
    attrs: {
      mode: "remote",
      columns: _vm.columns,
      totalRows: _vm.totalRows,
      rows: _vm.bookings,
      "search-options": {
        enabled: true,
        placeholder: _vm.$t("Search_this_table")
      },
      "pagination-options": {
        enabled: true,
        mode: "records",
        nextLabel: "next",
        prevLabel: "prev"
      },
      styleClass: "modern-table table-hover vgt-table"
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
        return [props.column.field === "actions" ? _c("span", [_c("div", {
          staticClass: "action-buttons-cell"
        }, [_c("a", {
          directives: [{
            name: "b-tooltip",
            rawName: "v-b-tooltip.hover",
            modifiers: {
              hover: true
            }
          }],
          staticClass: "action-icon view",
          attrs: {
            title: _vm.$t("Details")
          },
          on: {
            click: function click($event) {
              return _vm.showBookingDetails(props.row);
            }
          }
        }, [_c("i", {
          staticClass: "i-Eye"
        })]), _vm._v(" "), _c("router-link", {
          directives: [{
            name: "b-tooltip",
            rawName: "v-b-tooltip.hover",
            modifiers: {
              hover: true
            }
          }],
          staticClass: "action-icon edit",
          attrs: {
            title: _vm.$t("Edit"),
            to: "/app/bookings/edit/".concat(props.row.id)
          }
        }, [_c("i", {
          staticClass: "i-Edit"
        })]), _vm._v(" "), _c("a", {
          directives: [{
            name: "b-tooltip",
            rawName: "v-b-tooltip.hover",
            modifiers: {
              hover: true
            }
          }],
          staticClass: "action-icon email",
          attrs: {
            title: _vm.$t("Send_Email") || "Send Email"
          },
          on: {
            click: function click($event) {
              return _vm.sendBookingEmail(props.row);
            }
          }
        }, [_c("i", {
          staticClass: "i-Envelope-2"
        })]), _vm._v(" "), _c("a", {
          directives: [{
            name: "b-tooltip",
            rawName: "v-b-tooltip.hover",
            modifiers: {
              hover: true
            }
          }],
          staticClass: "action-icon delete",
          attrs: {
            title: _vm.$t("Delete")
          },
          on: {
            click: function click($event) {
              return _vm.removeBooking(props.row.id);
            }
          }
        }, [_c("i", {
          staticClass: "i-Close-Window"
        })])], 1)]) : props.column.field === "status" ? _c("span", [_c("span", {
          staticClass: "status-badge",
          "class": _vm.statusClass(props.row.status)
        }, [_vm._v("\n              " + _vm._s(_vm.statusLabel(props.row.status)) + "\n            ")])]) : props.column.field === "price" ? _c("span", [_vm._v("\n            " + _vm._s(_vm.formatPrice(props.row.price)) + "\n          ")]) : _c("span", [_vm._v("\n            " + _vm._s(props.formattedRow[props.column.field]) + "\n          ")])];
      }
    }])
  })], 1)]), _vm._v(" "), _c("b-sidebar", {
    attrs: {
      id: "booking-filter-sidebar",
      title: _vm.$t("Filter"),
      "bg-variant": "white",
      right: "",
      shadow: "",
      "sidebar-class": "modern-sidebar"
    }
  }, [_c("div", {
    staticClass: "sidebar-content"
  }, [_c("b-row", [_c("b-col", {
    attrs: {
      md: "12"
    }
  }, [_c("b-form-group", {
    staticClass: "modern-form-group",
    attrs: {
      label: _vm.$t("Date") || "Date"
    }
  }, [_c("b-form-input", {
    staticClass: "modern-input",
    attrs: {
      type: "date"
    },
    model: {
      value: _vm.filterDate,
      callback: function callback($$v) {
        _vm.filterDate = $$v;
      },
      expression: "filterDate"
    }
  })], 1)], 1), _vm._v(" "), _c("b-col", {
    attrs: {
      md: "12"
    }
  }, [_c("b-form-group", {
    staticClass: "modern-form-group",
    attrs: {
      label: _vm.$t("Status")
    }
  }, [_c("v-select", {
    staticClass: "modern-select",
    attrs: {
      reduce: function reduce(option) {
        return option.value;
      },
      placeholder: _vm.$t("Choose_Status"),
      options: _vm.statusOptions
    },
    model: {
      value: _vm.filterStatus,
      callback: function callback($$v) {
        _vm.filterStatus = $$v;
      },
      expression: "filterStatus"
    }
  })], 1)], 1), _vm._v(" "), _c("b-col", {
    attrs: {
      md: "6",
      sm: "12"
    }
  }, [_c("b-button", {
    staticClass: "modern-btn",
    attrs: {
      variant: "primary",
      size: "md",
      block: ""
    },
    on: {
      click: function click($event) {
        return _vm.getBookings(_vm.serverParams.page);
      }
    }
  }, [_c("i", {
    staticClass: "i-Filter-2"
  }), _vm._v("\n            " + _vm._s(_vm.$t("Filter")) + "\n          ")])], 1), _vm._v(" "), _c("b-col", {
    attrs: {
      md: "6",
      sm: "12"
    }
  }, [_c("b-button", {
    staticClass: "modern-btn",
    attrs: {
      variant: "danger",
      size: "md",
      block: ""
    },
    on: {
      click: _vm.resetFilter
    }
  }, [_c("i", {
    staticClass: "i-Power-2"
  }), _vm._v("\n            " + _vm._s(_vm.$t("Reset")) + "\n          ")])], 1)], 1)], 1)]), _vm._v(" "), _c("b-modal", {
    attrs: {
      id: "booking-detail-modal",
      "hide-header": "",
      "hide-footer": "",
      size: "xl",
      "body-class": "p-0",
      "modal-class": "booking-detail-modal-wrapper",
      centered: ""
    }
  }, [_vm.selectedBooking ? _c("div", {
    staticClass: "booking-detail-container"
  }, [_c("div", {
    staticClass: "booking-header"
  }, [_c("div", {
    staticClass: "header-content"
  }, [_c("div", {
    staticClass: "header-icon"
  }, [_c("i", {
    staticClass: "i-Calendar-4"
  })]), _vm._v(" "), _c("div", {
    staticClass: "header-text"
  }, [_c("h2", {
    staticClass: "booking-title"
  }, [_vm._v(_vm._s(_vm.$t("Booking_Details") || "Booking Details"))]), _vm._v(" "), _c("p", {
    staticClass: "booking-id"
  }, [_vm._v(_vm._s(_vm.selectedBooking.Ref || "#" + _vm.selectedBooking.id))])])]), _vm._v(" "), _c("div", {
    staticClass: "header-actions"
  }, [_c("button", {
    staticClass: "action-btn pdf-btn",
    attrs: {
      title: "Download PDF"
    },
    on: {
      click: function click($event) {
        return _vm.Booking_PDF(_vm.selectedBooking.id);
      }
    }
  }, [_c("i", {
    staticClass: "i-File-TXT"
  })]), _vm._v(" "), _c("button", {
    staticClass: "action-btn print-btn",
    attrs: {
      title: "Print"
    },
    on: {
      click: function click($event) {
        return _vm.printBooking();
      }
    }
  }, [_c("i", {
    staticClass: "i-Billing"
  })]), _vm._v(" "), _c("button", {
    staticClass: "action-btn close-btn",
    attrs: {
      title: "Close"
    },
    on: {
      click: function click($event) {
        return _vm.$bvModal.hide("booking-detail-modal");
      }
    }
  }, [_c("i", {
    staticClass: "i-Close"
  })])])]), _vm._v(" "), _c("div", {
    staticClass: "booking-content",
    attrs: {
      id: "booking-display-view"
    }
  }, [_c("div", {
    staticClass: "booking-grid"
  }, [_c("div", {
    staticClass: "info-card customer-card"
  }, [_c("div", {
    staticClass: "card-header"
  }, [_c("div", {
    staticClass: "card-icon customer-icon"
  }, [_c("i", {
    staticClass: "i-Administrator"
  })]), _vm._v(" "), _c("h3", {
    staticClass: "card-title"
  }, [_vm._v(_vm._s(_vm.$t("Customer") || "Customer"))])]), _vm._v(" "), _c("div", {
    staticClass: "card-body"
  }, [_c("div", {
    staticClass: "info-value"
  }, [_vm._v(_vm._s(_vm.selectedBooking.customer_name || "-"))])])]), _vm._v(" "), _c("div", {
    staticClass: "info-card service-card"
  }, [_c("div", {
    staticClass: "card-header"
  }, [_c("div", {
    staticClass: "card-icon service-icon"
  }, [_c("i", {
    staticClass: "i-Box-Full"
  })]), _vm._v(" "), _c("h3", {
    staticClass: "card-title"
  }, [_vm._v(_vm._s(_vm.$t("Service") || "Service"))])]), _vm._v(" "), _c("div", {
    staticClass: "card-body"
  }, [_c("div", {
    staticClass: "info-value"
  }, [_vm._v(_vm._s(_vm.selectedBooking.product_name || _vm.$t("Not_Applicable") || "-"))])])]), _vm._v(" "), _c("div", {
    staticClass: "info-card price-card"
  }, [_c("div", {
    staticClass: "card-header"
  }, [_c("div", {
    staticClass: "card-icon price-icon"
  }, [_c("i", {
    staticClass: "i-Money-Bag"
  })]), _vm._v(" "), _c("h3", {
    staticClass: "card-title"
  }, [_vm._v(_vm._s(_vm.$t("Price") || "Price"))])]), _vm._v(" "), _c("div", {
    staticClass: "card-body"
  }, [_c("div", {
    staticClass: "price-value"
  }, [_c("span", {
    staticClass: "currency-symbol"
  }, [_vm._v("$")]), _vm._v(" "), _c("span", {
    staticClass: "price-amount"
  }, [_vm._v(_vm._s(_vm.formatPrice(_vm.selectedBooking.price)))])])])]), _vm._v(" "), _c("div", {
    staticClass: "info-card reference-card"
  }, [_c("div", {
    staticClass: "card-header"
  }, [_c("div", {
    staticClass: "card-icon reference-icon"
  }, [_c("i", {
    staticClass: "i-Tag"
  })]), _vm._v(" "), _c("h3", {
    staticClass: "card-title"
  }, [_vm._v(_vm._s(_vm.$t("Reference") || "Reference"))])]), _vm._v(" "), _c("div", {
    staticClass: "card-body"
  }, [_c("div", {
    staticClass: "info-value"
  }, [_vm._v(_vm._s(_vm.selectedBooking.Ref || "N/A"))])])]), _vm._v(" "), _c("div", {
    staticClass: "info-card status-card"
  }, [_c("div", {
    staticClass: "card-header"
  }, [_c("div", {
    staticClass: "card-icon status-icon"
  }, [_c("i", {
    staticClass: "i-Flag"
  })]), _vm._v(" "), _c("h3", {
    staticClass: "card-title"
  }, [_vm._v(_vm._s(_vm.$t("Status") || "Status"))])]), _vm._v(" "), _c("div", {
    staticClass: "card-body"
  }, [_c("span", {
    staticClass: "status-badge-modern",
    "class": _vm.statusClass(_vm.selectedBooking.status)
  }, [_c("span", {
    staticClass: "status-dot"
  }), _vm._v("\n                " + _vm._s(_vm.statusLabel(_vm.selectedBooking.status)) + "\n              ")])])]), _vm._v(" "), _c("div", {
    staticClass: "info-card datetime-card"
  }, [_c("div", {
    staticClass: "card-header"
  }, [_c("div", {
    staticClass: "card-icon datetime-icon"
  }, [_c("i", {
    staticClass: "i-Calendar"
  })]), _vm._v(" "), _c("h3", {
    staticClass: "card-title"
  }, [_vm._v(_vm._s(_vm.$t("Date_Time") || "Date & Time"))])]), _vm._v(" "), _c("div", {
    staticClass: "card-body"
  }, [_c("div", {
    staticClass: "datetime-grid"
  }, [_c("div", {
    staticClass: "datetime-item"
  }, [_c("div", {
    staticClass: "datetime-label"
  }, [_vm._v(_vm._s(_vm.$t("Date") || "Date"))]), _vm._v(" "), _c("div", {
    staticClass: "datetime-value"
  }, [_vm._v(_vm._s(_vm.selectedBooking.booking_date))])]), _vm._v(" "), _c("div", {
    staticClass: "datetime-item"
  }, [_c("div", {
    staticClass: "datetime-label"
  }, [_vm._v(_vm._s(_vm.$t("Start_Time") || "Start Time"))]), _vm._v(" "), _c("div", {
    staticClass: "datetime-value"
  }, [_vm._v(_vm._s(_vm.selectedBooking.booking_time))])]), _vm._v(" "), _vm.selectedBooking.booking_end_time ? _c("div", {
    staticClass: "datetime-item"
  }, [_c("div", {
    staticClass: "datetime-label"
  }, [_vm._v(_vm._s(_vm.$t("End_Time") || "End Time"))]), _vm._v(" "), _c("div", {
    staticClass: "datetime-value"
  }, [_vm._v(_vm._s(_vm.selectedBooking.booking_end_time))])]) : _vm._e()])])]), _vm._v(" "), _vm.selectedBooking.notes ? _c("div", {
    staticClass: "info-card notes-card"
  }, [_c("div", {
    staticClass: "card-header"
  }, [_c("div", {
    staticClass: "card-icon notes-icon"
  }, [_c("i", {
    staticClass: "i-File-Clipboard-File--Text"
  })]), _vm._v(" "), _c("h3", {
    staticClass: "card-title"
  }, [_vm._v(_vm._s(_vm.$t("Details") || "Notes"))])]), _vm._v(" "), _c("div", {
    staticClass: "card-body"
  }, [_c("div", {
    staticClass: "notes-content white-space-preline"
  }, [_vm._v(_vm._s(_vm.selectedBooking.notes))])])]) : _vm._e()])]), _vm._v(" "), _c("div", {
    staticStyle: {
      display: "none"
    },
    attrs: {
      id: "print_Booking"
    }
  }, [_c("div", {
    staticClass: "invoice-print"
  }, [_c("div", {
    staticStyle: {
      "text-align": "center",
      "margin-bottom": "30px",
      "padding-bottom": "20px",
      "border-bottom": "3px solid #667eea"
    }
  }, [_c("h2", {
    staticStyle: {
      color: "#667eea",
      margin: "0 0 10px 0",
      "font-weight": "700"
    }
  }, [_vm._v(_vm._s(_vm.$t("Booking_Details") || "Booking Details"))]), _vm._v(" "), _c("p", {
    staticStyle: {
      color: "#64748b",
      margin: "0",
      "font-size": "16px",
      "font-weight": "600"
    }
  }, [_vm._v(_vm._s(_vm.selectedBooking.Ref || "#" + _vm.selectedBooking.id))])]), _vm._v(" "), _c("div", {
    staticStyle: {
      display: "grid",
      "grid-template-columns": "1fr 1fr",
      gap: "30px",
      "margin-bottom": "30px"
    }
  }, [_c("div", {
    staticStyle: {
      background: "#f8f9fc",
      padding: "20px",
      "border-radius": "12px",
      "border-left": "4px solid #667eea"
    }
  }, [_c("h3", {
    staticStyle: {
      color: "#667eea",
      margin: "0 0 15px 0",
      "font-size": "14px",
      "text-transform": "uppercase",
      "letter-spacing": "1px"
    }
  }, [_vm._v(_vm._s(_vm.$t("Customer_Info") || "Customer Information"))]), _vm._v(" "), _c("p", {
    staticStyle: {
      margin: "0",
      "font-size": "16px",
      "font-weight": "600",
      color: "#1e293b"
    }
  }, [_vm._v(_vm._s(_vm.selectedBooking.customer_name || "-"))])]), _vm._v(" "), _c("div", {
    staticStyle: {
      background: "#f8f9fc",
      padding: "20px",
      "border-radius": "12px",
      "border-left": "4px solid #764ba2"
    }
  }, [_c("h3", {
    staticStyle: {
      color: "#764ba2",
      margin: "0 0 15px 0",
      "font-size": "14px",
      "text-transform": "uppercase",
      "letter-spacing": "1px"
    }
  }, [_vm._v(_vm._s(_vm.$t("Booking_Info") || "Booking Information"))]), _vm._v(" "), _c("div", {
    staticStyle: {
      "font-size": "14px",
      color: "#475569",
      "line-height": "1.8"
    }
  }, [_c("div", [_c("strong", [_vm._v("Reference:")]), _vm._v(" #" + _vm._s(_vm.selectedBooking.id))]), _vm._v(" "), _c("div", [_c("strong", [_vm._v("Date:")]), _vm._v(" " + _vm._s(_vm.selectedBooking.booking_date))]), _vm._v(" "), _c("div", [_c("strong", [_vm._v("Status:")]), _vm._v(" " + _vm._s(_vm.statusLabel(_vm.selectedBooking.status)))])])])]), _vm._v(" "), _c("div", {
    staticStyle: {
      background: "white",
      border: "2px solid #e2e8f0",
      "border-radius": "12px",
      padding: "25px",
      "margin-bottom": "30px"
    }
  }, [_c("h3", {
    staticStyle: {
      color: "#1e293b",
      margin: "0 0 20px 0",
      "font-size": "16px",
      "font-weight": "700",
      "text-transform": "uppercase",
      "letter-spacing": "1px",
      "border-bottom": "2px solid #f1f5f9",
      "padding-bottom": "10px"
    }
  }, [_vm._v(_vm._s(_vm.$t("Service_Details") || "Service Details"))]), _vm._v(" "), _c("table", {
    staticStyle: {
      width: "100%",
      "border-collapse": "collapse"
    }
  }, [_c("tbody", [_c("tr", {
    staticStyle: {
      "border-bottom": "1px solid #f1f5f9"
    }
  }, [_c("td", {
    staticStyle: {
      padding: "12px 0",
      "font-weight": "600",
      color: "#64748b",
      width: "40%"
    }
  }, [_vm._v(_vm._s(_vm.$t("Service") || "Service"))]), _vm._v(" "), _c("td", {
    staticStyle: {
      padding: "12px 0",
      color: "#1e293b",
      "font-weight": "600"
    }
  }, [_vm._v(_vm._s(_vm.selectedBooking.product_name || _vm.$t("Not_Applicable") || "-"))])]), _vm._v(" "), _c("tr", {
    staticStyle: {
      "border-bottom": "1px solid #f1f5f9"
    }
  }, [_c("td", {
    staticStyle: {
      padding: "12px 0",
      "font-weight": "600",
      color: "#64748b"
    }
  }, [_vm._v(_vm._s(_vm.$t("Price")))]), _vm._v(" "), _c("td", {
    staticStyle: {
      padding: "12px 0",
      color: "#667eea",
      "font-size": "18px",
      "font-weight": "700"
    }
  }, [_vm._v("$" + _vm._s(_vm.formatPrice(_vm.selectedBooking.price)))])]), _vm._v(" "), _c("tr", {
    staticStyle: {
      "border-bottom": "1px solid #f1f5f9"
    }
  }, [_c("td", {
    staticStyle: {
      padding: "12px 0",
      "font-weight": "600",
      color: "#64748b"
    }
  }, [_vm._v(_vm._s(_vm.$t("Date")))]), _vm._v(" "), _c("td", {
    staticStyle: {
      padding: "12px 0",
      color: "#1e293b",
      "font-weight": "600"
    }
  }, [_vm._v(_vm._s(_vm.selectedBooking.booking_date))])]), _vm._v(" "), _c("tr", {
    staticStyle: {
      "border-bottom": "1px solid #f1f5f9"
    }
  }, [_c("td", {
    staticStyle: {
      padding: "12px 0",
      "font-weight": "600",
      color: "#64748b"
    }
  }, [_vm._v(_vm._s(_vm.$t("Start_Time") || "Start Time"))]), _vm._v(" "), _c("td", {
    staticStyle: {
      padding: "12px 0",
      color: "#1e293b",
      "font-weight": "600"
    }
  }, [_vm._v(_vm._s(_vm.selectedBooking.booking_time))])]), _vm._v(" "), _vm.selectedBooking.booking_end_time ? _c("tr", {
    staticStyle: {
      "border-bottom": "1px solid #f1f5f9"
    }
  }, [_c("td", {
    staticStyle: {
      padding: "12px 0",
      "font-weight": "600",
      color: "#64748b"
    }
  }, [_vm._v(_vm._s(_vm.$t("End_Time") || "End Time"))]), _vm._v(" "), _c("td", {
    staticStyle: {
      padding: "12px 0",
      color: "#1e293b",
      "font-weight": "600"
    }
  }, [_vm._v(_vm._s(_vm.selectedBooking.booking_end_time))])]) : _vm._e(), _vm._v(" "), _c("tr", [_c("td", {
    staticStyle: {
      padding: "12px 0",
      "font-weight": "600",
      color: "#64748b"
    }
  }, [_vm._v(_vm._s(_vm.$t("Status")))]), _vm._v(" "), _c("td", {
    staticStyle: {
      padding: "12px 0"
    }
  }, [_c("span", {
    "class": "status-" + _vm.selectedBooking.status,
    staticStyle: {
      display: "inline-block",
      padding: "6px 14px",
      "border-radius": "20px",
      "font-size": "12px",
      "font-weight": "600",
      "text-transform": "uppercase",
      "letter-spacing": "0.5px"
    }
  }, [_vm._v("\n                      " + _vm._s(_vm.statusLabel(_vm.selectedBooking.status)) + "\n                    ")])])])])])]), _vm._v(" "), _vm.selectedBooking.notes ? _c("div", {
    staticStyle: {
      background: "#f8f9fc",
      "border-left": "4px solid #667eea",
      padding: "20px",
      "border-radius": "12px"
    }
  }, [_c("h3", {
    staticStyle: {
      color: "#667eea",
      margin: "0 0 15px 0",
      "font-size": "14px",
      "text-transform": "uppercase",
      "letter-spacing": "1px"
    }
  }, [_vm._v(_vm._s(_vm.$t("Details") || "Notes"))]), _vm._v(" "), _c("p", {
    staticStyle: {
      margin: "0",
      color: "#475569",
      "line-height": "1.8",
      "white-space": "pre-line"
    }
  }, [_vm._v(_vm._s(_vm.selectedBooking.notes))])]) : _vm._e()])])]) : _vm._e()])], 1);
};
var staticRenderFns = [function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "pdf-spinner-wrapper"
  }, [_c("div", {
    staticClass: "pdf-spinner"
  })]);
}];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-11.use[3]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-21.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/bookings/index_booking.vue?vue&type=style&index=0&id=7ef93d18&scoped=true&lang=scss":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-11.use[3]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-21.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/bookings/index_booking.vue?vue&type=style&index=0&id=7ef93d18&scoped=true&lang=scss ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, "/* ========================================\n   BOOKING DETAIL MODAL\n   ======================================== */\n[data-v-7ef93d18] .booking-detail-modal-wrapper .modal-dialog {\n  max-width: 900px !important;\n  margin: 0.5rem !important;\n}\n@media (max-width: 768px) {\n[data-v-7ef93d18] .booking-detail-modal-wrapper .modal-dialog {\n    max-width: 100% !important;\n    margin: 0 !important;\n    width: 100% !important;\n}\n}\n[data-v-7ef93d18] .booking-detail-modal-wrapper .modal-content {\n  border: none !important;\n  border-radius: 20px !important;\n  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.15) !important;\n  overflow: hidden !important;\n}\n@media (max-width: 768px) {\n[data-v-7ef93d18] .booking-detail-modal-wrapper .modal-content {\n    border-radius: 0 !important;\n    min-height: 100vh !important;\n    height: 100vh !important;\n    display: flex !important;\n    flex-direction: column !important;\n}\n}\n@media (max-width: 768px) {\n[data-v-7ef93d18] .booking-detail-modal-wrapper .modal-body {\n    padding: 0 !important;\n    overflow-y: auto !important;\n    flex: 1 !important;\n}\n}\n.booking-detail-container[data-v-7ef93d18] {\n  background: #ffffff;\n  min-height: 500px;\n}\n@media (max-width: 768px) {\n.booking-detail-container[data-v-7ef93d18] {\n    min-height: auto;\n    display: flex;\n    flex-direction: column;\n    height: 100%;\n}\n}\n/* Header */\n.booking-header[data-v-7ef93d18] {\n  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);\n  padding: 20px 28px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  position: relative;\n  overflow: hidden;\n}\n.booking-header[data-v-7ef93d18]::before {\n  content: \"\";\n  position: absolute;\n  top: -50%;\n  right: -10%;\n  width: 400px;\n  height: 400px;\n  background: radial-gradient(circle, rgba(255, 255, 255, 0.1) 0%, transparent 70%);\n  border-radius: 50%;\n}\n.booking-header .header-content[data-v-7ef93d18] {\n  display: flex;\n  align-items: center;\n  gap: 16px;\n  z-index: 1;\n}\n.booking-header .header-icon[data-v-7ef93d18] {\n  width: 48px;\n  height: 48px;\n  background: rgba(255, 255, 255, 0.2);\n  backdrop-filter: blur(10px);\n  border-radius: 12px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 24px;\n  color: white;\n  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);\n}\n.booking-header .header-text .booking-title[data-v-7ef93d18] {\n  margin: 0;\n  font-size: 20px;\n  font-weight: 700;\n  color: white;\n  letter-spacing: -0.5px;\n}\n.booking-header .header-text .booking-id[data-v-7ef93d18] {\n  margin: 4px 0 0 0;\n  font-size: 13px;\n  color: rgba(255, 255, 255, 0.9);\n  font-weight: 500;\n}\n.booking-header .header-actions[data-v-7ef93d18] {\n  display: flex;\n  gap: 8px;\n  z-index: 1;\n}\n.booking-header .action-btn[data-v-7ef93d18] {\n  width: 40px;\n  height: 40px;\n  background: rgba(255, 255, 255, 0.15);\n  backdrop-filter: blur(10px);\n  border: 2px solid rgba(255, 255, 255, 0.2);\n  border-radius: 10px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  transition: all 0.3s ease;\n  color: white;\n  font-size: 18px;\n}\n.booking-header .action-btn[data-v-7ef93d18]:hover {\n  background: rgba(255, 255, 255, 0.25);\n  transform: translateY(-2px);\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);\n}\n.booking-header .action-btn.pdf-btn[data-v-7ef93d18]:hover {\n  background: rgba(239, 68, 68, 0.9);\n  border-color: rgba(239, 68, 68, 0.9);\n}\n.booking-header .action-btn.print-btn[data-v-7ef93d18]:hover {\n  background: rgba(59, 130, 246, 0.9);\n  border-color: rgba(59, 130, 246, 0.9);\n}\n.booking-header .action-btn.close-btn[data-v-7ef93d18]:hover {\n  background: rgba(239, 68, 68, 0.9);\n  border-color: rgba(239, 68, 68, 0.9);\n  transform: rotate(90deg);\n}\n\n/* Content */\n.booking-content[data-v-7ef93d18] {\n  padding: 28px;\n  background: #f8f9fc;\n}\n.booking-grid[data-v-7ef93d18] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));\n  gap: 20px;\n}\n\n/* Info Cards */\n.info-card[data-v-7ef93d18] {\n  background: white;\n  border-radius: 16px;\n  padding: 20px;\n  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.06);\n  border: 1px solid rgba(0, 0, 0, 0.04);\n  transition: all 0.3s ease;\n  position: relative;\n  overflow: hidden;\n}\n.info-card[data-v-7ef93d18]::before {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  height: 4px;\n  background: linear-gradient(90deg, #667eea 0%, #764ba2 100%);\n  transform: scaleX(0);\n  transition: transform 0.3s ease;\n}\n.info-card[data-v-7ef93d18]:hover {\n  transform: translateY(-4px);\n  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.1);\n}\n.info-card[data-v-7ef93d18]:hover::before {\n  transform: scaleX(1);\n}\n.info-card .card-header[data-v-7ef93d18] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  margin-bottom: 16px;\n  padding-bottom: 12px;\n  border-bottom: 2px solid #f1f5f9;\n}\n.info-card .card-icon[data-v-7ef93d18] {\n  width: 40px;\n  height: 40px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 20px;\n  color: #667eea;\n  flex-shrink: 0;\n}\n.info-card .customer-icon[data-v-7ef93d18] {\n  color: #667eea;\n}\n.info-card .service-icon[data-v-7ef93d18] {\n  color: #f5576c;\n}\n.info-card .price-icon[data-v-7ef93d18] {\n  color: #4facfe;\n}\n.info-card .status-icon[data-v-7ef93d18] {\n  color: #43e97b;\n}\n.info-card .datetime-icon[data-v-7ef93d18] {\n  color: #fa709a;\n}\n.info-card .notes-icon[data-v-7ef93d18] {\n  color: #30cfd0;\n}\n.info-card .reference-icon[data-v-7ef93d18] {\n  color: #8b5cf6;\n}\n.info-card .card-title[data-v-7ef93d18] {\n  margin: 0;\n  font-size: 13px;\n  font-weight: 700;\n  color: #64748b;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.info-card .card-body .info-value[data-v-7ef93d18] {\n  font-size: 16px;\n  font-weight: 600;\n  color: #1e293b;\n  line-height: 1.5;\n}\n.info-card .card-body .price-value[data-v-7ef93d18] {\n  display: flex;\n  align-items: baseline;\n  gap: 4px;\n}\n.info-card .card-body .price-value .currency-symbol[data-v-7ef93d18] {\n  font-size: 18px;\n  font-weight: 600;\n  color: #64748b;\n}\n.info-card .card-body .price-value .price-amount[data-v-7ef93d18] {\n  font-size: 28px;\n  font-weight: 700;\n  color: #667eea;\n  line-height: 1;\n}\n.info-card .card-body .status-badge-modern[data-v-7ef93d18] {\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n  padding: 8px 16px;\n  border-radius: 20px;\n  font-size: 12px;\n  font-weight: 600;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.info-card .card-body .status-badge-modern .status-dot[data-v-7ef93d18] {\n  width: 8px;\n  height: 8px;\n  border-radius: 50%;\n  animation: pulse-7ef93d18 2s ease infinite;\n}\n.info-card .card-body .status-badge-modern.pending[data-v-7ef93d18] {\n  background: linear-gradient(135deg, #fef3c7 0%, #fde68a 100%);\n  color: #92400e;\n}\n.info-card .card-body .status-badge-modern.pending .status-dot[data-v-7ef93d18] {\n  background: #f59e0b;\n}\n.info-card .card-body .status-badge-modern.confirmed[data-v-7ef93d18] {\n  background: linear-gradient(135deg, #d1fae5 0%, #a7f3d0 100%);\n  color: #065f46;\n}\n.info-card .card-body .status-badge-modern.confirmed .status-dot[data-v-7ef93d18] {\n  background: #10b981;\n}\n.info-card .card-body .status-badge-modern.cancelled[data-v-7ef93d18] {\n  background: linear-gradient(135deg, #fee2e2 0%, #fecaca 100%);\n  color: #991b1b;\n}\n.info-card .card-body .status-badge-modern.cancelled .status-dot[data-v-7ef93d18] {\n  background: #ef4444;\n}\n.info-card .card-body .status-badge-modern.completed[data-v-7ef93d18] {\n  background: linear-gradient(135deg, #dbeafe 0%, #bfdbfe 100%);\n  color: #1e40af;\n}\n.info-card .card-body .status-badge-modern.completed .status-dot[data-v-7ef93d18] {\n  background: #3b82f6;\n}\n.info-card .card-body .datetime-grid[data-v-7ef93d18] {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n}\n.info-card .card-body .datetime-item .datetime-label[data-v-7ef93d18] {\n  font-size: 11px;\n  font-weight: 600;\n  color: #64748b;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n  margin-bottom: 4px;\n}\n.info-card .card-body .datetime-item .datetime-value[data-v-7ef93d18] {\n  font-size: 15px;\n  font-weight: 600;\n  color: #1e293b;\n}\n.info-card .card-body .notes-content[data-v-7ef93d18] {\n  font-size: 14px;\n  color: #475569;\n  line-height: 1.6;\n  padding: 12px;\n  background: #f8fafc;\n  border-radius: 8px;\n  border-left: 3px solid #667eea;\n}\n\n/* Full width cards */\n.datetime-card[data-v-7ef93d18],\n.notes-card[data-v-7ef93d18] {\n  grid-column: 1/-1;\n}\n@keyframes pulse-7ef93d18 {\n0%, 100% {\n    opacity: 1;\n}\n50% {\n    opacity: 0.5;\n}\n}\n/* Responsive */\n@media (max-width: 768px) {\n.booking-grid[data-v-7ef93d18] {\n    grid-template-columns: 1fr;\n    gap: 16px;\n}\n.booking-header[data-v-7ef93d18] {\n    padding: 16px 20px;\n    flex-direction: column;\n    align-items: flex-start;\n    gap: 16px;\n    position: sticky;\n    top: 0;\n    z-index: 10;\n}\n.booking-header .header-content[data-v-7ef93d18] {\n    width: 100%;\n    gap: 12px;\n}\n.booking-header .header-icon[data-v-7ef93d18] {\n    width: 40px;\n    height: 40px;\n    font-size: 20px;\n    border-radius: 10px;\n}\n.booking-header .header-text[data-v-7ef93d18] {\n    flex: 1;\n    min-width: 0;\n}\n.booking-header .header-text .booking-title[data-v-7ef93d18] {\n    font-size: 18px;\n    line-height: 1.3;\n}\n.booking-header .header-text .booking-id[data-v-7ef93d18] {\n    font-size: 12px;\n    margin-top: 2px;\n}\n.booking-header .header-actions[data-v-7ef93d18] {\n    width: 100%;\n    justify-content: flex-end;\n    gap: 6px;\n}\n.booking-header .action-btn[data-v-7ef93d18] {\n    width: 36px;\n    height: 36px;\n    font-size: 16px;\n    border-radius: 8px;\n}\n.booking-content[data-v-7ef93d18] {\n    padding: 16px;\n    flex: 1;\n    overflow-y: auto;\n}\n.info-card[data-v-7ef93d18] {\n    padding: 16px;\n    border-radius: 12px;\n}\n.info-card .card-header[data-v-7ef93d18] {\n    gap: 10px;\n    margin-bottom: 12px;\n    padding-bottom: 10px;\n}\n.info-card .card-icon[data-v-7ef93d18] {\n    width: 36px;\n    height: 36px;\n    font-size: 18px;\n}\n.info-card .card-title[data-v-7ef93d18] {\n    font-size: 12px;\n}\n.info-card .card-body .info-value[data-v-7ef93d18] {\n    font-size: 14px;\n}\n.info-card .card-body .price-value .currency-symbol[data-v-7ef93d18] {\n    font-size: 16px;\n}\n.info-card .card-body .price-value .price-amount[data-v-7ef93d18] {\n    font-size: 24px;\n}\n.info-card .card-body .status-badge-modern[data-v-7ef93d18] {\n    padding: 6px 12px;\n    font-size: 11px;\n    gap: 6px;\n}\n.info-card .card-body .status-badge-modern .status-dot[data-v-7ef93d18] {\n    width: 6px;\n    height: 6px;\n}\n.info-card .card-body .datetime-item .datetime-label[data-v-7ef93d18] {\n    font-size: 10px;\n}\n.info-card .card-body .datetime-item .datetime-value[data-v-7ef93d18] {\n    font-size: 14px;\n}\n.info-card .card-body .notes-content[data-v-7ef93d18] {\n    font-size: 13px;\n    padding: 10px;\n}\n}\n@media (max-width: 480px) {\n.booking-header[data-v-7ef93d18] {\n    padding: 12px 16px;\n}\n.booking-header .header-icon[data-v-7ef93d18] {\n    width: 36px;\n    height: 36px;\n    font-size: 18px;\n}\n.booking-header .header-text .booking-title[data-v-7ef93d18] {\n    font-size: 16px;\n}\n.booking-header .header-text .booking-id[data-v-7ef93d18] {\n    font-size: 11px;\n}\n.booking-header .action-btn[data-v-7ef93d18] {\n    width: 32px;\n    height: 32px;\n    font-size: 14px;\n}\n.booking-content[data-v-7ef93d18] {\n    padding: 12px;\n}\n.booking-grid[data-v-7ef93d18] {\n    gap: 12px;\n}\n.info-card[data-v-7ef93d18] {\n    padding: 12px;\n}\n.info-card .card-header[data-v-7ef93d18] {\n    margin-bottom: 10px;\n    padding-bottom: 8px;\n}\n.info-card .card-icon[data-v-7ef93d18] {\n    width: 32px;\n    height: 32px;\n    font-size: 16px;\n}\n.info-card .card-title[data-v-7ef93d18] {\n    font-size: 11px;\n}\n.info-card .card-body .info-value[data-v-7ef93d18] {\n    font-size: 13px;\n}\n.info-card .card-body .price-value .currency-symbol[data-v-7ef93d18] {\n    font-size: 14px;\n}\n.info-card .card-body .price-value .price-amount[data-v-7ef93d18] {\n    font-size: 20px;\n}\n}\n/* ========================================\n   PDF LOADING OVERLAY\n   ======================================== */\n.pdf-loading-overlay[data-v-7ef93d18] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background: rgba(0, 0, 0, 0.75);\n  backdrop-filter: blur(8px);\n  z-index: 9999;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  animation: fadeIn-7ef93d18 0.3s ease;\n}\n.pdf-loading-content[data-v-7ef93d18] {\n  text-align: center;\n  background: white;\n  padding: 40px 50px;\n  border-radius: 20px;\n  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);\n  max-width: 400px;\n  width: 90%;\n  animation: slideUp-7ef93d18 0.4s ease;\n}\n.pdf-spinner-wrapper[data-v-7ef93d18] {\n  margin-bottom: 24px;\n  display: flex;\n  justify-content: center;\n}\n.pdf-spinner[data-v-7ef93d18] {\n  width: 60px;\n  height: 60px;\n  border: 5px solid #f1f5f9;\n  border-top: 5px solid #667eea;\n  border-radius: 50%;\n  animation: spin-7ef93d18 1s linear infinite;\n  margin: 0 auto;\n}\n.pdf-loading-title[data-v-7ef93d18] {\n  margin: 0 0 12px 0;\n  font-size: 22px;\n  font-weight: 700;\n  color: #1e293b;\n  letter-spacing: -0.5px;\n}\n.pdf-loading-message[data-v-7ef93d18] {\n  margin: 0;\n  font-size: 14px;\n  color: #64748b;\n  line-height: 1.6;\n}\n@keyframes fadeIn-7ef93d18 {\nfrom {\n    opacity: 0;\n}\nto {\n    opacity: 1;\n}\n}\n@keyframes slideUp-7ef93d18 {\nfrom {\n    opacity: 0;\n    transform: translateY(20px);\n}\nto {\n    opacity: 1;\n    transform: translateY(0);\n}\n}\n@keyframes spin-7ef93d18 {\n0% {\n    transform: rotate(0deg);\n}\n100% {\n    transform: rotate(360deg);\n}\n}\n.bookings-page-modern[data-v-7ef93d18] {\n  padding: 1.5rem;\n  background: linear-gradient(135deg, #f5f7fa 0%, #e8ecf1 100%);\n  min-height: 100vh;\n}\n.page-wrapper[data-v-7ef93d18] {\n  max-width: 1400px;\n  margin: 0 auto;\n}\n.control-bar[data-v-7ef93d18] {\n  background: white;\n  border-radius: 16px;\n  padding: 1.25rem 1.5rem;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 1.5rem;\n  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.06);\n  flex-wrap: wrap;\n  gap: 1rem;\n}\n.page-title[data-v-7ef93d18] {\n  font-size: 1.125rem;\n  font-weight: 700;\n  color: #1e293b;\n}\n.control-left[data-v-7ef93d18] {\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n}\n.control-right[data-v-7ef93d18] {\n  display: flex;\n  gap: 0.75rem;\n  flex-wrap: wrap;\n}\n.action-btn[data-v-7ef93d18] {\n  background: white;\n  border: 2px solid #e2e8f0;\n  border-radius: 8px;\n  padding: 0.4rem 0.875rem;\n  font-weight: 600;\n  font-size: 0.75rem;\n  color: #475569;\n  cursor: pointer;\n  transition: all 0.3s ease;\n  display: inline-flex;\n  align-items: center;\n  gap: 0.375rem;\n  text-decoration: none;\n}\n.action-btn i[data-v-7ef93d18] {\n  font-size: 0.875rem;\n}\n.action-btn span[data-v-7ef93d18] {\n  font-size: 0.75rem;\n}\n.action-btn[data-v-7ef93d18]:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);\n}\n.action-btn.filter-btn[data-v-7ef93d18]:hover {\n  border-color: #3b82f6;\n  color: #3b82f6;\n  background: #eff6ff;\n}\n.action-btn.add-btn[data-v-7ef93d18] {\n  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);\n  color: white;\n  border: none;\n}\n.action-btn.add-btn[data-v-7ef93d18]:hover {\n  box-shadow: 0 8px 24px rgba(102, 126, 234, 0.4);\n}\n.table-card[data-v-7ef93d18] {\n  background: white;\n  border-radius: 16px;\n  padding: 1.5rem;\n  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.06);\n  overflow: hidden;\n}\n.modern-table[data-v-7ef93d18] .vgt-table {\n  border: none;\n}\n.modern-table[data-v-7ef93d18] .vgt-table thead {\n  background: #f8fafc;\n}\n.modern-table[data-v-7ef93d18] .vgt-table thead th {\n  border: none;\n  padding: 1rem;\n  font-weight: 700;\n  color: #334155;\n  text-transform: uppercase;\n  font-size: 0.75rem;\n  letter-spacing: 0.05em;\n}\n.modern-table[data-v-7ef93d18] .vgt-table tbody tr {\n  border-bottom: 1px solid #f1f5f9;\n  transition: all 0.2s ease;\n}\n.modern-table[data-v-7ef93d18] .vgt-table tbody tr:hover {\n  background: #f8fafc;\n}\n.modern-table[data-v-7ef93d18] .vgt-table tbody tr td {\n  padding: 1rem;\n  color: #475569;\n  font-size: 0.9rem;\n}\n.action-buttons-cell[data-v-7ef93d18] {\n  display: flex;\n  gap: 0.5rem;\n  justify-content: flex-end;\n}\n.action-icon[data-v-7ef93d18] {\n  width: 32px;\n  height: 32px;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 8px;\n  cursor: pointer;\n  transition: all 0.3s ease;\n  text-decoration: none;\n}\n.action-icon.view[data-v-7ef93d18] {\n  color: #0ea5e9;\n  background: #e0f2fe;\n}\n.action-icon.view[data-v-7ef93d18]:hover {\n  background: #0ea5e9;\n  color: white;\n  transform: scale(1.05);\n}\n.action-icon.edit[data-v-7ef93d18] {\n  color: #10b981;\n  background: #d1fae5;\n}\n.action-icon.edit[data-v-7ef93d18]:hover {\n  background: #10b981;\n  color: white;\n  transform: scale(1.05);\n}\n.action-icon.email[data-v-7ef93d18] {\n  color: #6366f1;\n  background: #e0e7ff;\n}\n.action-icon.email[data-v-7ef93d18]:hover {\n  background: #6366f1;\n  color: white;\n  transform: scale(1.05);\n}\n.action-icon.delete[data-v-7ef93d18] {\n  color: #ef4444;\n  background: #fee2e2;\n}\n.action-icon.delete[data-v-7ef93d18]:hover {\n  background: #ef4444;\n  color: white;\n  transform: scale(1.05);\n}\n.status-badge[data-v-7ef93d18] {\n  display: inline-flex;\n  align-items: center;\n  padding: 0.45rem 0.9rem;\n  border-radius: 999px;\n  font-weight: 600;\n  font-size: 0.75rem;\n  text-transform: uppercase;\n  letter-spacing: 0.05em;\n}\n.status-badge.pending[data-v-7ef93d18] {\n  background: #fed7aa; /* soft orange */\n  color: #9a3412;\n}\n.status-badge.confirmed[data-v-7ef93d18] {\n  background: #dbeafe; /* blue */\n  color: #1d4ed8;\n}\n.status-badge.cancelled[data-v-7ef93d18] {\n  background: #fee2e2; /* red */\n  color: #b91c1c;\n}\n.status-badge.completed[data-v-7ef93d18] {\n  background: #bbf7d0; /* green */\n  color: #15803d;\n}\n.modern-sidebar[data-v-7ef93d18] .b-sidebar-header {\n  padding: 1.5rem;\n  border-bottom: 2px solid #f1f5f9;\n}\n.sidebar-content[data-v-7ef93d18] {\n  padding: 1.5rem;\n}\n.modern-form-group[data-v-7ef93d18] {\n  margin-bottom: 1.5rem;\n}\n.modern-form-group[data-v-7ef93d18] label {\n  font-weight: 600;\n  color: #334155;\n  font-size: 0.875rem;\n  margin-bottom: 0.5rem;\n}\n.modern-input[data-v-7ef93d18] {\n  border-radius: 10px;\n  border: 2px solid #e2e8f0;\n  padding: 0.75rem 1rem;\n  transition: all 0.3s ease;\n}\n.modern-input[data-v-7ef93d18]:focus {\n  border-color: #667eea;\n  box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);\n}\n.modern-select[data-v-7ef93d18] .vs__dropdown-toggle {\n  border-radius: 10px;\n  border: 2px solid #e2e8f0;\n  padding: 0.5rem 1rem;\n}\n.modern-select[data-v-7ef93d18].vs--open .vs__dropdown-toggle {\n  border-color: #667eea;\n  box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);\n}\n.modern-btn[data-v-7ef93d18] {\n  border-radius: 10px;\n  font-weight: 600;\n  padding: 0.75rem 1.5rem;\n  transition: all 0.3s ease;\n  border: none;\n}\n.modern-btn[data-v-7ef93d18]:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);\n}\n.modern-btn i[data-v-7ef93d18] {\n  margin-right: 0.5rem;\n}\n.white-space-preline[data-v-7ef93d18] {\n  white-space: pre-line;\n}\n@media (max-width: 991px) {\n.bookings-page-modern[data-v-7ef93d18] {\n    padding: 1rem;\n}\n.control-bar[data-v-7ef93d18] {\n    flex-direction: column;\n    align-items: stretch;\n}\n.control-left[data-v-7ef93d18],\n  .control-right[data-v-7ef93d18] {\n    width: 100%;\n    justify-content: center;\n}\n.control-right[data-v-7ef93d18] {\n    flex-direction: column;\n}\n.control-right .action-btn[data-v-7ef93d18] {\n    width: 100%;\n    justify-content: center;\n}\n}", ""]);
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

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-11.use[3]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-21.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/bookings/index_booking.vue?vue&type=style&index=0&id=7ef93d18&scoped=true&lang=scss":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-11.use[3]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-21.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/bookings/index_booking.vue?vue&type=style&index=0&id=7ef93d18&scoped=true&lang=scss ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_11_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_11_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_11_use_3_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_21_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_booking_vue_vue_type_style_index_0_id_7ef93d18_scoped_true_lang_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!../../../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-11.use[3]!../../../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-21.use[0]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./index_booking.vue?vue&type=style&index=0&id=7ef93d18&scoped=true&lang=scss */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-11.use[3]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-21.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/bookings/index_booking.vue?vue&type=style&index=0&id=7ef93d18&scoped=true&lang=scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_11_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_11_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_11_use_3_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_21_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_booking_vue_vue_type_style_index_0_id_7ef93d18_scoped_true_lang_scss__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_11_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_11_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_11_use_3_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_21_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_booking_vue_vue_type_style_index_0_id_7ef93d18_scoped_true_lang_scss__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

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

/***/ "./resources/src/views/app/pages/bookings/index_booking.vue":
/*!******************************************************************!*\
  !*** ./resources/src/views/app/pages/bookings/index_booking.vue ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _index_booking_vue_vue_type_template_id_7ef93d18_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index_booking.vue?vue&type=template&id=7ef93d18&scoped=true */ "./resources/src/views/app/pages/bookings/index_booking.vue?vue&type=template&id=7ef93d18&scoped=true");
/* harmony import */ var _index_booking_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index_booking.vue?vue&type=script&lang=js */ "./resources/src/views/app/pages/bookings/index_booking.vue?vue&type=script&lang=js");
/* harmony import */ var _index_booking_vue_vue_type_style_index_0_id_7ef93d18_scoped_true_lang_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index_booking.vue?vue&type=style&index=0&id=7ef93d18&scoped=true&lang=scss */ "./resources/src/views/app/pages/bookings/index_booking.vue?vue&type=style&index=0&id=7ef93d18&scoped=true&lang=scss");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _index_booking_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _index_booking_vue_vue_type_template_id_7ef93d18_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render,
  _index_booking_vue_vue_type_template_id_7ef93d18_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "7ef93d18",
  null
  
)

/* hot reload */
if (false) // removed by dead control flow
{ var api; }
component.options.__file = "resources/src/views/app/pages/bookings/index_booking.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/src/views/app/pages/bookings/index_booking.vue?vue&type=script&lang=js":
/*!******************************************************************************************!*\
  !*** ./resources/src/views/app/pages/bookings/index_booking.vue?vue&type=script&lang=js ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_booking_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./index_booking.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/bookings/index_booking.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_booking_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/src/views/app/pages/bookings/index_booking.vue?vue&type=style&index=0&id=7ef93d18&scoped=true&lang=scss":
/*!***************************************************************************************************************************!*\
  !*** ./resources/src/views/app/pages/bookings/index_booking.vue?vue&type=style&index=0&id=7ef93d18&scoped=true&lang=scss ***!
  \***************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_11_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_11_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_11_use_3_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_21_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_booking_vue_vue_type_style_index_0_id_7ef93d18_scoped_true_lang_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/style-loader/dist/cjs.js!../../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!../../../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-11.use[3]!../../../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-21.use[0]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./index_booking.vue?vue&type=style&index=0&id=7ef93d18&scoped=true&lang=scss */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-11.use[3]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-21.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/bookings/index_booking.vue?vue&type=style&index=0&id=7ef93d18&scoped=true&lang=scss");


/***/ }),

/***/ "./resources/src/views/app/pages/bookings/index_booking.vue?vue&type=template&id=7ef93d18&scoped=true":
/*!************************************************************************************************************!*\
  !*** ./resources/src/views/app/pages/bookings/index_booking.vue?vue&type=template&id=7ef93d18&scoped=true ***!
  \************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_booking_vue_vue_type_template_id_7ef93d18_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_booking_vue_vue_type_template_id_7ef93d18_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_booking_vue_vue_type_template_id_7ef93d18_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./index_booking.vue?vue&type=template&id=7ef93d18&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/bookings/index_booking.vue?vue&type=template&id=7ef93d18&scoped=true");


/***/ })

}]);