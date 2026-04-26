"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["Backup"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/settings/backup.vue?vue&type=script&lang=js":
/*!***************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/settings/backup.vue?vue&type=script&lang=js ***!
  \***************************************************************************************************************************************************************************************************************/
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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  metaInfo: {
    title: "Backup"
  },
  data: function data() {
    return {
      backups: [],
      isLoading: true,
      totalRows: "",
      backupError: null,
      setting: {
        id: "",
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
      }
    };
  },
  computed: {
    columns: function columns() {
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
    // Backup destination selector (simple UI):
    // - local => no cloud upload, keep local
    // - cloud => upload to cloud, delete local after successful upload
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
    }
  },
  methods: {
    //---------------------------------- Get Settings --------------------\\
    Get_Settings: function Get_Settings() {
      var _this = this;
      axios.get("get_Settings_data", {
        params: {
          include_secrets: 1
        }
      }).then(function (response) {
        // Merge to preserve default keys/reactivity for newly added settings fields
        _this.setting = _objectSpread(_objectSpread({}, _this.setting), response.data.settings || {});
      })["catch"](function (error) {
        // Silently fail if settings endpoint doesn't exist
      });
    },
    //---------------------------------- Submit Backup Settings --------------------\\
    Submit_Backup_Settings: function Submit_Backup_Settings() {
      var _this2 = this;
      nprogress__WEBPACK_IMPORTED_MODULE_0___default().start();
      nprogress__WEBPACK_IMPORTED_MODULE_0___default().set(0.1);
      var self = this;
      self.data = new FormData();
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
        _this2.makeToast("success", _this2.$t("Successfully_Updated"), _this2.$t("Success"));
        nprogress__WEBPACK_IMPORTED_MODULE_0___default().done();
      })["catch"](function (error) {
        var msg = error && error.response && error.response.data && (error.response.data.message || error.response.data.error) || _this2.$t("InvalidData");
        _this2.makeToast("danger", msg, _this2.$t("Failed"));
        nprogress__WEBPACK_IMPORTED_MODULE_0___default().done();
      });
    },
    //---------------------------------- Generate Backup --------------------\\
    GenerateBackup: function GenerateBackup() {
      var _this3 = this;
      // Start the progress bar.
      nprogress__WEBPACK_IMPORTED_MODULE_0___default().start();
      nprogress__WEBPACK_IMPORTED_MODULE_0___default().set(0.1);
      axios.get("generate_new_backup").then(function (response) {
        Fire.$emit("Generate_Backup");

        // Check if backup was successful
        if (response.data && response.data.success === false) {
          // Backup generation failed
          var errorMsg = response.data.error || response.data.message || _this3.$t("Failed_to_generate_backup") || "Failed to generate backup";

          // Check if it's a mysqldump not found error
          if (errorMsg.includes('mysqldump') && errorMsg.includes('not found')) {
            _this3.backupError = true;
          }
          _this3.makeToast("danger", errorMsg, _this3.$t("Failed"));
        } else {
          // Clear any previous errors on success
          _this3.backupError = null;
          // Backup successful
          var message = _this3.$t("Backup_generated_successfully") || "Backup generated successfully";
          _this3.makeToast("success", message, _this3.$t("Success"));
        }

        // Complete the animation of the  progress bar.
        setTimeout(function () {
          return nprogress__WEBPACK_IMPORTED_MODULE_0___default().done();
        }, 500);
      })["catch"](function (error) {
        // Handle error response
        var errorMsg = _this3.$t("Failed_to_generate_backup") || "Failed to generate backup";
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
          _this3.backupError = true;
        }
        _this3.makeToast("danger", errorMsg, _this3.$t("Failed"));
        // Complete the animation of the  progress bar.
        setTimeout(function () {
          return nprogress__WEBPACK_IMPORTED_MODULE_0___default().done();
        }, 500);
      });
    },
    //----------------------------------------  Get All backups -------------------------\\
    Get_Backups: function Get_Backups() {
      var _this4 = this;
      // Start the progress bar.
      nprogress__WEBPACK_IMPORTED_MODULE_0___default().start();
      nprogress__WEBPACK_IMPORTED_MODULE_0___default().set(0.1);
      axios.get("get_backup").then(function (response) {
        _this4.backups = response.data.backups;
        _this4.totalRows = response.data.totalRows;

        // Complete the animation of theprogress bar.
        nprogress__WEBPACK_IMPORTED_MODULE_0___default().done();
        _this4.isLoading = false;
      })["catch"](function (response) {
        // Complete the animation of theprogress bar.
        nprogress__WEBPACK_IMPORTED_MODULE_0___default().done();
        setTimeout(function () {
          _this4.isLoading = false;
        }, 500);
      });
    },
    //---------------------------------- Make Toast --------------------\\
    makeToast: function makeToast(variant, msg, title) {
      this.$root.$bvToast.toast(msg, {
        title: title,
        variant: variant,
        solid: true
      });
    },
    //--------------------------------- Delete Backup --------------------\\
    DeleteBackup: function DeleteBackup(date) {
      var _this5 = this;
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
            _this5.$swal(_this5.$t("Delete_Deleted"), _this5.$t("Deleted_in_successfully"), "success");
            Fire.$emit("Delete_Backup");
          })["catch"](function () {
            _this5.$swal(_this5.$t("Delete_Failed"), _this5.$t("Delete_Therewassomethingwronge"), "warning");
          });
        }
      });
    }
  },
  //end Method

  //----------------------------- Created function-------------------
  created: function created() {
    var _this6 = this;
    this.Get_Settings();
    this.Get_Backups();
    Fire.$on("Generate_Backup", function () {
      setTimeout(function () {
        _this6.Get_Backups();
      }, 500);
    });
    Fire.$on("Delete_Backup", function () {
      setTimeout(function () {
        _this6.Get_Backups();
        // Complete the animation of the  progress bar.
        nprogress__WEBPACK_IMPORTED_MODULE_0___default().done();
      }, 500);
    });
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/settings/backup.vue?vue&type=template&id=3a5591e1":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/settings/backup.vue?vue&type=template&id=3a5591e1 ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************/
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
      page: _vm.$t("BackupDatabase"),
      folder: _vm.$t("Settings")
    }
  }), _vm._v(" "), _vm.isLoading ? _c("div", {
    staticClass: "loading_page spinner spinner-primary mr-3"
  }) : _vm._e(), _vm._v(" "), !_vm.isLoading ? _c("b-card", {
    staticClass: "wrapper"
  }, [_c("b-row", {
    staticClass: "mb-4"
  }, [_c("b-col", {
    attrs: {
      lg: "12",
      md: "12",
      sm: "12"
    }
  }, [_c("b-card", {
    staticClass: "mb-0",
    attrs: {
      "no-body": ""
    }
  }, [_c("b-card-body", [_c("div", {
    staticClass: "d-flex justify-content-between align-items-center mb-3"
  }, [_c("h5", {
    staticClass: "mb-0"
  }, [_vm._v("Backup destination")])]), _vm._v(" "), _c("b-row", [_c("b-col", {
    staticClass: "mb-3",
    attrs: {
      lg: "6",
      md: "6",
      sm: "12"
    }
  }, [_c("b-form-group", {
    attrs: {
      label: "Destination"
    }
  }, [_c("b-form-radio-group", {
    attrs: {
      options: [{
        value: "local",
        text: "Local only"
      }, {
        value: "cloud",
        text: "Cloud (upload after local backup)"
      }],
      stacked: ""
    },
    model: {
      value: _vm.backupDestination,
      callback: function callback($$v) {
        _vm.backupDestination = $$v;
      },
      expression: "backupDestination"
    }
  }), _vm._v(" "), _c("small", {
    staticClass: "text-muted d-block mt-1"
  }, [_vm._v("\n                    Local backups path: "), _c("code", [_vm._v("/storage/app/public/backup")]), _vm._v(".\n                  ")])], 1)], 1), _vm._v(" "), _c("b-col", {
    staticClass: "mb-3",
    attrs: {
      lg: "6",
      md: "6",
      sm: "12"
    }
  }, [_vm.backupDestination === "cloud" ? _c("b-form-group", {
    attrs: {
      label: "Cloud path / folder (optional)"
    }
  }, [_c("b-form-input", {
    attrs: {
      placeholder: "e.g. StockyBackups/"
    },
    model: {
      value: _vm.setting.backup_cloud_path,
      callback: function callback($$v) {
        _vm.$set(_vm.setting, "backup_cloud_path", $$v);
      },
      expression: "setting.backup_cloud_path"
    }
  })], 1) : _vm._e()], 1)], 1), _vm._v(" "), _vm.backupDestination === "cloud" ? _c("b-row", [_c("b-col", {
    staticClass: "mb-3",
    attrs: {
      lg: "6",
      md: "6",
      sm: "12"
    }
  }, [_c("b-form-group", {
    attrs: {
      label: "Cloud provider"
    }
  }, [_c("b-form-select", {
    attrs: {
      options: [{
        value: null,
        text: "Select provider"
      }, {
        value: "google_drive",
        text: "Google Drive"
      }, {
        value: "dropbox",
        text: "Dropbox"
      }, {
        value: "s3",
        text: "S3-compatible (AWS/MinIO/etc.)"
      }]
    },
    model: {
      value: _vm.setting.backup_cloud_provider,
      callback: function callback($$v) {
        _vm.$set(_vm.setting, "backup_cloud_provider", $$v);
      },
      expression: "setting.backup_cloud_provider"
    }
  }), _vm._v(" "), _c("small", {
    staticClass: "text-muted d-block mt-1"
  }, [_vm._v("\n                    Cloud upload runs after the backup is generated locally.\n                  ")])], 1)], 1)], 1) : _vm._e(), _vm._v(" "), _vm.backupDestination === "cloud" && _vm.setting.backup_cloud_provider === "s3" ? _c("b-row", [_c("b-col", {
    staticClass: "mb-3",
    attrs: {
      lg: "6",
      md: "6",
      sm: "12"
    }
  }, [_c("b-form-group", {
    attrs: {
      label: "Bucket"
    }
  }, [_c("b-form-input", {
    attrs: {
      placeholder: "Bucket name"
    },
    model: {
      value: _vm.setting.backup_s3_bucket,
      callback: function callback($$v) {
        _vm.$set(_vm.setting, "backup_s3_bucket", $$v);
      },
      expression: "setting.backup_s3_bucket"
    }
  })], 1)], 1), _vm._v(" "), _c("b-col", {
    staticClass: "mb-3",
    attrs: {
      lg: "6",
      md: "6",
      sm: "12"
    }
  }, [_c("b-form-group", {
    attrs: {
      label: "Region"
    }
  }, [_c("b-form-input", {
    attrs: {
      placeholder: "e.g. us-east-1"
    },
    model: {
      value: _vm.setting.backup_s3_region,
      callback: function callback($$v) {
        _vm.$set(_vm.setting, "backup_s3_region", $$v);
      },
      expression: "setting.backup_s3_region"
    }
  })], 1)], 1), _vm._v(" "), _c("b-col", {
    staticClass: "mb-3",
    attrs: {
      lg: "6",
      md: "6",
      sm: "12"
    }
  }, [_c("b-form-group", {
    attrs: {
      label: "Access key"
    }
  }, [_c("b-form-input", {
    attrs: {
      placeholder: "Access key"
    },
    model: {
      value: _vm.setting.backup_s3_access_key,
      callback: function callback($$v) {
        _vm.$set(_vm.setting, "backup_s3_access_key", $$v);
      },
      expression: "setting.backup_s3_access_key"
    }
  })], 1)], 1), _vm._v(" "), _c("b-col", {
    staticClass: "mb-3",
    attrs: {
      lg: "6",
      md: "6",
      sm: "12"
    }
  }, [_c("b-form-group", {
    attrs: {
      label: "Secret key (leave blank to keep current)"
    }
  }, [_c("b-form-input", {
    attrs: {
      type: "text",
      placeholder: "Secret key"
    },
    model: {
      value: _vm.setting.backup_s3_secret_key,
      callback: function callback($$v) {
        _vm.$set(_vm.setting, "backup_s3_secret_key", $$v);
      },
      expression: "setting.backup_s3_secret_key"
    }
  })], 1)], 1), _vm._v(" "), _c("b-col", {
    staticClass: "mb-3",
    attrs: {
      lg: "6",
      md: "6",
      sm: "12"
    }
  }, [_c("b-form-group", {
    attrs: {
      label: "Endpoint (optional for MinIO)"
    }
  }, [_c("b-form-input", {
    attrs: {
      placeholder: "e.g. https://minio.example.com"
    },
    model: {
      value: _vm.setting.backup_s3_endpoint,
      callback: function callback($$v) {
        _vm.$set(_vm.setting, "backup_s3_endpoint", $$v);
      },
      expression: "setting.backup_s3_endpoint"
    }
  })], 1)], 1), _vm._v(" "), _c("b-col", {
    staticClass: "mb-3",
    attrs: {
      lg: "6",
      md: "6",
      sm: "12"
    }
  }, [_c("b-form-group", {
    attrs: {
      label: "Path-style URLs (MinIO often requires this)"
    }
  }, [_c("b-form-checkbox", {
    attrs: {
      "switch": ""
    },
    model: {
      value: _vm.setting.backup_s3_path_style,
      callback: function callback($$v) {
        _vm.$set(_vm.setting, "backup_s3_path_style", $$v);
      },
      expression: "setting.backup_s3_path_style"
    }
  }, [_vm._v("Enable")])], 1)], 1)], 1) : _vm._e(), _vm._v(" "), _vm.backupDestination === "cloud" && _vm.setting.backup_cloud_provider === "google_drive" ? _c("b-row", [_c("b-col", {
    staticClass: "mb-3",
    attrs: {
      lg: "6",
      md: "6",
      sm: "12"
    }
  }, [_c("b-form-group", {
    attrs: {
      label: "Folder ID (optional)"
    }
  }, [_c("b-form-input", {
    attrs: {
      placeholder: "Google Drive folder id"
    },
    model: {
      value: _vm.setting.backup_gdrive_folder_id,
      callback: function callback($$v) {
        _vm.$set(_vm.setting, "backup_gdrive_folder_id", $$v);
      },
      expression: "setting.backup_gdrive_folder_id"
    }
  })], 1)], 1), _vm._v(" "), _c("b-col", {
    staticClass: "mb-3",
    attrs: {
      lg: "6",
      md: "6",
      sm: "12"
    }
  }, [_c("b-form-group", {
    attrs: {
      label: "Access token (optional, short-lived)"
    }
  }, [_c("b-form-input", {
    attrs: {
      type: "text",
      placeholder: "Bearer token"
    },
    model: {
      value: _vm.setting.backup_gdrive_access_token,
      callback: function callback($$v) {
        _vm.$set(_vm.setting, "backup_gdrive_access_token", $$v);
      },
      expression: "setting.backup_gdrive_access_token"
    }
  })], 1)], 1), _vm._v(" "), _c("b-col", {
    staticClass: "mb-3",
    attrs: {
      lg: "6",
      md: "6",
      sm: "12"
    }
  }, [_c("b-form-group", {
    attrs: {
      label: "Refresh token (recommended)"
    }
  }, [_c("b-form-input", {
    attrs: {
      type: "text",
      placeholder: "Refresh token"
    },
    model: {
      value: _vm.setting.backup_gdrive_refresh_token,
      callback: function callback($$v) {
        _vm.$set(_vm.setting, "backup_gdrive_refresh_token", $$v);
      },
      expression: "setting.backup_gdrive_refresh_token"
    }
  })], 1)], 1), _vm._v(" "), _c("b-col", {
    staticClass: "mb-3",
    attrs: {
      lg: "6",
      md: "6",
      sm: "12"
    }
  }, [_c("b-form-group", {
    attrs: {
      label: "Client ID"
    }
  }, [_c("b-form-input", {
    attrs: {
      placeholder: "OAuth client id"
    },
    model: {
      value: _vm.setting.backup_gdrive_client_id,
      callback: function callback($$v) {
        _vm.$set(_vm.setting, "backup_gdrive_client_id", $$v);
      },
      expression: "setting.backup_gdrive_client_id"
    }
  })], 1)], 1), _vm._v(" "), _c("b-col", {
    staticClass: "mb-3",
    attrs: {
      lg: "6",
      md: "6",
      sm: "12"
    }
  }, [_c("b-form-group", {
    attrs: {
      label: "Client secret (leave blank to keep current)"
    }
  }, [_c("b-form-input", {
    attrs: {
      type: "text",
      placeholder: "OAuth client secret"
    },
    model: {
      value: _vm.setting.backup_gdrive_client_secret,
      callback: function callback($$v) {
        _vm.$set(_vm.setting, "backup_gdrive_client_secret", $$v);
      },
      expression: "setting.backup_gdrive_client_secret"
    }
  })], 1)], 1)], 1) : _vm._e(), _vm._v(" "), _vm.backupDestination === "cloud" && _vm.setting.backup_cloud_provider === "dropbox" ? _c("b-row", [_c("b-col", {
    staticClass: "mb-3",
    attrs: {
      lg: "6",
      md: "6",
      sm: "12"
    }
  }, [_c("b-form-group", {
    attrs: {
      label: "Dropbox folder path (optional)"
    }
  }, [_c("b-form-input", {
    attrs: {
      placeholder: "e.g. /StockyBackups"
    },
    model: {
      value: _vm.setting.backup_dropbox_path,
      callback: function callback($$v) {
        _vm.$set(_vm.setting, "backup_dropbox_path", $$v);
      },
      expression: "setting.backup_dropbox_path"
    }
  })], 1)], 1), _vm._v(" "), _c("b-col", {
    staticClass: "mb-3",
    attrs: {
      lg: "6",
      md: "6",
      sm: "12"
    }
  }, [_c("b-form-group", {
    attrs: {
      label: "Access token (leave blank to keep current)"
    }
  }, [_c("b-form-input", {
    attrs: {
      type: "text",
      placeholder: "Dropbox token"
    },
    model: {
      value: _vm.setting.backup_dropbox_access_token,
      callback: function callback($$v) {
        _vm.$set(_vm.setting, "backup_dropbox_access_token", $$v);
      },
      expression: "setting.backup_dropbox_access_token"
    }
  })], 1)], 1)], 1) : _vm._e(), _vm._v(" "), _c("div", {
    staticClass: "d-flex justify-content-end"
  }, [_c("b-button", {
    attrs: {
      variant: "primary"
    },
    on: {
      click: function click($event) {
        return _vm.Submit_Backup_Settings();
      }
    }
  }, [_vm._v("\n                Save backup settings\n              ")])], 1)], 1)], 1)], 1)], 1), _vm._v(" "), _vm.backupError ? _c("b-alert", {
    staticClass: "mb-3",
    attrs: {
      show: "",
      variant: "danger",
      dismissible: ""
    },
    on: {
      dismissed: function dismissed($event) {
        _vm.backupError = null;
      }
    }
  }, [_c("h6", {
    staticClass: "alert-heading"
  }, [_vm._v("Backup Configuration Required")]), _vm._v(" "), _c("p", {
    staticClass: "mb-2"
  }, [_c("strong", [_vm._v("mysqldump not found.")]), _vm._v(" Please configure DUMP_PATH in your .env file.")]), _vm._v(" "), _c("p", {
    staticClass: "mb-2"
  }, [_c("strong", [_vm._v("For Laragon on Windows:")])]), _vm._v(" "), _c("ol", {
    staticClass: "mb-2 pl-3"
  }, [_c("li", [_vm._v("Open your "), _c("code", [_vm._v(".env")]), _vm._v(" file in the project root")]), _vm._v(" "), _c("li", [_vm._v("Find your MySQL version folder in "), _c("code", [_vm._v("C:\\laragon\\bin\\mysql\\")])]), _vm._v(" "), _c("li", [_vm._v("Add this line (replace with your actual version):")])]), _vm._v(" "), _c("pre", {
    staticClass: "bg-light p-2 mb-2"
  }, [_c("code", [_vm._v('DUMP_PATH="C:\\\\laragon\\\\bin\\\\mysql\\\\mysql-8.0.30\\\\bin\\\\mysqldump.exe"')])]), _vm._v(" "), _c("p", {
    staticClass: "mb-0"
  }, [_vm._v("Or use forward slashes: "), _c("code", [_vm._v('DUMP_PATH="C:/laragon/bin/mysql/mysql-8.0.30/bin/mysqldump.exe"')])]), _vm._v(" "), _c("p", {
    staticClass: "mb-0 mt-2"
  }, [_c("small", [_vm._v("After updating .env, run: "), _c("code", [_vm._v("php artisan config:clear")])])])]) : _vm._e(), _vm._v(" "), _c("span", {
    staticClass: "alert alert-danger"
  }, [_vm._v(_vm._s(_vm.$t("You_will_find_your_backup_on")) + " "), _c("strong", [_vm._v("/storage/app/public/backup")]), _vm._v(" " + _vm._s(_vm.$t("and_save_it_to_your_pc")))]), _vm._v(" "), _c("vue-good-table", {
    attrs: {
      mode: "remote",
      columns: _vm.columns,
      totalRows: _vm.totalRows,
      rows: _vm.backups,
      styleClass: "table-hover tableOne vgt-table"
    },
    scopedSlots: _vm._u([{
      key: "table-row",
      fn: function fn(props) {
        return [props.column.field == "actions" ? _c("span", [_c("a", {
          directives: [{
            name: "b-tooltip",
            rawName: "v-b-tooltip.hover",
            modifiers: {
              hover: true
            }
          }],
          attrs: {
            title: "Delete"
          },
          on: {
            click: function click($event) {
              return _vm.DeleteBackup(props.row.date);
            }
          }
        }, [_c("i", {
          staticClass: "i-Close-Window text-25 text-danger"
        })])]) : _vm._e()];
      }
    }], null, false, 2132012496)
  }, [_c("div", {
    staticClass: "mt-2 mb-3",
    attrs: {
      slot: "table-actions"
    },
    slot: "table-actions"
  }, [_c("b-button", {
    staticClass: "btn-rounded",
    attrs: {
      size: "sm",
      variant: "btn btn-primary btn-icon m-1"
    },
    on: {
      click: function click($event) {
        return _vm.GenerateBackup();
      }
    }
  }, [_c("i", {
    staticClass: "i-Add"
  }), _vm._v("\n          " + _vm._s(_vm.$t("GenerateBackup")) + "\n        ")])], 1)])], 1) : _vm._e()], 1);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./resources/src/views/app/pages/settings/backup.vue":
/*!***********************************************************!*\
  !*** ./resources/src/views/app/pages/settings/backup.vue ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _backup_vue_vue_type_template_id_3a5591e1__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./backup.vue?vue&type=template&id=3a5591e1 */ "./resources/src/views/app/pages/settings/backup.vue?vue&type=template&id=3a5591e1");
/* harmony import */ var _backup_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./backup.vue?vue&type=script&lang=js */ "./resources/src/views/app/pages/settings/backup.vue?vue&type=script&lang=js");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _backup_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _backup_vue_vue_type_template_id_3a5591e1__WEBPACK_IMPORTED_MODULE_0__.render,
  _backup_vue_vue_type_template_id_3a5591e1__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) // removed by dead control flow
{ var api; }
component.options.__file = "resources/src/views/app/pages/settings/backup.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/src/views/app/pages/settings/backup.vue?vue&type=script&lang=js":
/*!***********************************************************************************!*\
  !*** ./resources/src/views/app/pages/settings/backup.vue?vue&type=script&lang=js ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_backup_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./backup.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/settings/backup.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_backup_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/src/views/app/pages/settings/backup.vue?vue&type=template&id=3a5591e1":
/*!*****************************************************************************************!*\
  !*** ./resources/src/views/app/pages/settings/backup.vue?vue&type=template&id=3a5591e1 ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_backup_vue_vue_type_template_id_3a5591e1__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_backup_vue_vue_type_template_id_3a5591e1__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_backup_vue_vue_type_template_id_3a5591e1__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./backup.vue?vue&type=template&id=3a5591e1 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/settings/backup.vue?vue&type=template&id=3a5591e1");


/***/ })

}]);