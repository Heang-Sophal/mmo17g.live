"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["woo-products-tab"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/settings/woocommerce/ProductsTab.vue?vue&type=script&lang=js":
/*!********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/settings/woocommerce/ProductsTab.vue?vue&type=script&lang=js ***!
  \********************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_0__);
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      activeMiniTab: 0,
      syncMode: null,
      // 'push' | 'pull'
      syncing: false,
      resetting: false,
      fixingCategories: false,
      stopping: false,
      pendingCancel: false,
      refreshing: false,
      lastProgressFetchStartedAt: 0,
      syncOnlyUnsynced: false,
      token: '',
      syncJobId: null,
      syncStatus: null,
      poller: null,
      fastPoller: null,
      fastPollsRemaining: 0,
      lastProgressSignature: '',
      lastProgressChangeAt: 0,
      progress: {
        total_products: 0,
        processed: 0,
        synced_products: 0,
        failed_products: 0,
        percentage: 0,
        created: 0,
        updated: 0
      },
      totalProducts: null,
      unsyncedCount: null,
      pullStats: {
        total_woo: null,
        imported: null,
        not_imported: null
      }
    };
  },
  computed: {
    totalProductsDisplay: function totalProductsDisplay() {
      return this.totalProducts != null ? this.totalProducts : '—';
    },
    unsyncedCountDisplay: function unsyncedCountDisplay() {
      return this.unsyncedCount != null ? this.unsyncedCount : '—';
    },
    syncedProducts: function syncedProducts() {
      if (this.totalProducts == null || this.unsyncedCount == null) return null;
      return Math.max(0, (this.totalProducts || 0) - (this.unsyncedCount || 0));
    },
    syncedProductsDisplay: function syncedProductsDisplay() {
      return this.syncedProducts != null ? this.syncedProducts : '—';
    },
    unsyncedAvailable: function unsyncedAvailable() {
      return this.unsyncedCount != null && this.unsyncedCount > 0;
    },
    displayTotal: function displayTotal() {
      var _this$progress$total_, _this$progress;
      var v = Number((_this$progress$total_ = (_this$progress = this.progress) === null || _this$progress === void 0 ? void 0 : _this$progress.total_products) !== null && _this$progress$total_ !== void 0 ? _this$progress$total_ : 0);
      return Number.isFinite(v) ? v : 0;
    },
    displayProcessed: function displayProcessed() {
      var _ref, _this$progress$proces, _this$progress2, _this$progress3;
      var v = Number((_ref = (_this$progress$proces = (_this$progress2 = this.progress) === null || _this$progress2 === void 0 ? void 0 : _this$progress2.processed) !== null && _this$progress$proces !== void 0 ? _this$progress$proces : (_this$progress3 = this.progress) === null || _this$progress3 === void 0 ? void 0 : _this$progress3.synced_products) !== null && _ref !== void 0 ? _ref : 0);
      return Number.isFinite(v) ? v : 0;
    },
    displayPercentage: function displayPercentage() {
      var _this$progress4;
      var direct = Number((_this$progress4 = this.progress) === null || _this$progress4 === void 0 ? void 0 : _this$progress4.percentage);
      // If backend still reports 0 but we have processed/total, compute from processed to avoid “stuck at 0%”.
      if (Number.isFinite(direct) && direct > 0) return Math.max(0, Math.min(100, direct));
      var total = this.displayTotal;
      var processed = this.displayProcessed;
      if (!total) return 0;
      return Math.max(0, Math.min(100, Math.floor(processed / total * 100)));
    },
    showStopSync: function showStopSync() {
      var _this$progress5, _this$progress7;
      var st = String(this.syncStatus || '').toLowerCase();
      // Show immediately once user starts sync (even before API responds with job id/token).
      if (this.syncing && !((_this$progress5 = this.progress) !== null && _this$progress5 !== void 0 && _this$progress5.finished)) return true;

      // DB-based
      if (this.syncJobId) {
        var _this$progress6;
        if (st === 'running' || st === 'cancelling') return true;
        // If status hasn't been fetched yet, but we know we're syncing, show the button.
        return !st && this.syncing && !((_this$progress6 = this.progress) !== null && _this$progress6 !== void 0 && _this$progress6.finished);
      }

      // Legacy token-based fallback: if a token-based sync is running, still allow stopping.
      return !!this.token && this.syncing && !((_this$progress7 = this.progress) !== null && _this$progress7 !== void 0 && _this$progress7.finished);
    },
    isSyncActive: function isSyncActive() {
      // DB-based: if we have a sync job id, treat sync as active even after reload.
      return !!this.syncJobId || this.syncing;
    }
  },
  watch: {
    syncOnlyUnsynced: function syncOnlyUnsynced(val) {
      try {
        localStorage.setItem('woo_products_push_only_unsynced', val ? '1' : '0');
      } catch (e) {}
    }
  },
  methods: {
    storageKey: function storageKey() {
      return this.syncMode === 'pull' ? 'woo_products_pull_job_id' : 'woo_products_push_job_id';
    },
    trySendCancelSignal: function trySendCancelSignal() {
      var token = this.token;
      var jobId = this.syncJobId;
      if (jobId) {
        axios.post("woo-sync/".concat(jobId, "/cancel"))["catch"](function () {});
        return true;
      }
      if (token) {
        axios.post('woocommerce/sync/products/stop', {
          token: token
        })["catch"](function () {});
        return true;
      }
      return false;
    },
    restoreRunningJob: function restoreRunningJob() {
      // Restore last running job (supports reload during sync).
      try {
        var pullStored = localStorage.getItem('woo_products_pull_job_id');
        var pushStored = localStorage.getItem('woo_products_push_job_id');
        var pullId = pullStored ? Number(pullStored) : null;
        var pushId = pushStored ? Number(pushStored) : null;
        if (pullId && Number.isFinite(pullId) && pullId > 0) {
          this.syncMode = 'pull';
          this.syncJobId = pullId;
        } else if (pushId && Number.isFinite(pushId) && pushId > 0) {
          this.syncMode = 'push';
          this.syncJobId = pushId;
        }
        if (this.syncJobId) {
          this.syncing = true;
          this.syncStatus = 'running';
          this.startPolling();
          return;
        }
      } catch (e) {}
    },
    normalizeProgressState: function normalizeProgressState(state) {
      var _ref2, _s$total_products, _ref3, _ref4, _s$processed, _s$percentage;
      var s = state || {};
      var total = Number((_ref2 = (_s$total_products = s.total_products) !== null && _s$total_products !== void 0 ? _s$total_products : s.total) !== null && _ref2 !== void 0 ? _ref2 : 0);
      var processed = Number((_ref3 = (_ref4 = (_s$processed = s.processed) !== null && _s$processed !== void 0 ? _s$processed : s.synced_products) !== null && _ref4 !== void 0 ? _ref4 : s.synced) !== null && _ref3 !== void 0 ? _ref3 : 0);
      var percentage = Number((_s$percentage = s.percentage) !== null && _s$percentage !== void 0 ? _s$percentage : s.percent);
      if (!Number.isFinite(percentage)) {
        percentage = total > 0 ? Math.floor(processed / total * 100) : 0;
      }
      return _objectSpread(_objectSpread({}, s), {}, {
        total_products: Number.isFinite(total) ? total : 0,
        processed: Number.isFinite(processed) ? processed : 0,
        percentage: Math.max(0, Math.min(100, Number.isFinite(percentage) ? percentage : 0))
      });
    },
    load: function load() {
      var _this = this;
      var p1 = axios.get('products', {
        params: {
          limit: 1
        }
      }).then(function (_ref5) {
        var data = _ref5.data;
        _this.totalProducts = data.totalRows != null ? data.totalRows : null;
      });
      var p2 = axios.get('woocommerce/unsynced-count').then(function (_ref6) {
        var data = _ref6.data;
        _this.unsyncedCount = data.count;
        if (!(_this.unsyncedCount != null && _this.unsyncedCount > 0)) {
          _this.syncOnlyUnsynced = false;
        }
      });
      var p3 = this.loadPullStats();
      return Promise.all([p1, p2, p3]);
    },
    loadPullStats: function loadPullStats() {
      var _this2 = this;
      return axios.get('woocommerce/products/pull-stats').then(function (_ref7) {
        var data = _ref7.data;
        _this2.pullStats = {
          total_woo: data.total_woo != null ? data.total_woo : null,
          imported: data.imported != null ? data.imported : 0,
          not_imported: data.not_imported != null ? data.not_imported : null
        };
      })["catch"](function () {
        _this2.pullStats = {
          total_woo: null,
          imported: null,
          not_imported: null
        };
      });
    },
    manualSync: function manualSync(mode, onlyUnsynced) {
      var _this3 = this;
      if (this.syncing) return;
      this.syncMode = mode === 'pull' ? 'pull' : 'push';
      this.syncing = true;
      this.stopping = false;
      this.pendingCancel = false;
      this.refreshing = false;
      this.syncStatus = 'starting';
      this.lastProgressSignature = '';
      this.lastProgressChangeAt = Date.now();
      this.progress = {
        total_products: 0,
        processed: 0,
        synced_products: 0,
        failed_products: 0,
        percentage: 0,
        created: 0,
        updated: 0
      };
      // Start polling immediately so progress appears/updates without manual Refresh,
      // even during the short window before POST returns ids.
      this.startPolling(true);
      var url = "woocommerce/sync/products?mode=".concat(this.syncMode);
      if (onlyUnsynced) url += '&only_unsynced=1';
      // Ensure UI updates (spinner/stop button) before network work begins.
      this.$nextTick(function () {
        axios.post(url).then(function (_ref8) {
          var _ref9, _data$sync_job_id;
          var data = _ref8.data;
          var jobId = data ? (_ref9 = (_data$sync_job_id = data.sync_job_id) !== null && _data$sync_job_id !== void 0 ? _data$sync_job_id : data.syncJobId) !== null && _ref9 !== void 0 ? _ref9 : null : null;
          if (data && data.ok && (jobId || data.token)) {
            _this3.token = data.token || '';
            _this3.syncJobId = jobId || null;
            _this3.syncStatus = 'running';
            if (_this3.syncJobId) {
              try {
                localStorage.setItem(_this3.storageKey(), String(_this3.syncJobId));
              } catch (e) {}
            }
            // Polling is already running; do a fresh fetch now that we have an id/token.
            _this3.fetchProgress();
            // If user already clicked Stop while we were "starting", send cancel now.
            if (_this3.pendingCancel) _this3.stopSync();
          } else {
            _this3.toast('danger', _this3.$t('Sync_Failed'));
            _this3.syncing = false;
            _this3.syncStatus = null;
            _this3.syncMode = null;
          }
        })["catch"](function () {
          _this3.toast('danger', _this3.$t('Sync_Failed'));
          _this3.syncing = false;
          _this3.syncStatus = null;
          _this3.syncMode = null;
        });
      });
    },
    stopSync: function stopSync() {
      // Allow clicking Stop even before token/jobId arrives.
      // If we can't send the cancel signal yet, mark it as pending and send once ids arrive.
      if (this.stopping && !this.pendingCancel) return;
      this.stopping = true;
      this.syncStatus = 'cancelling';
      var sent = this.trySendCancelSignal();
      this.pendingCancel = !sent;
    },
    startPolling: function startPolling() {
      var _this4 = this;
      var immediate = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
      if (this.poller) clearInterval(this.poller);
      if (this.fastPoller) clearInterval(this.fastPoller);
      this.lastProgressSignature = '';
      this.lastProgressChangeAt = Date.now();

      // Short "bootstrap" polling right after start so progress moves without manual Refresh.
      // (Not tight polling: limited count, 4s interval, then falls back to 20s.)
      this.fastPollsRemaining = 8;
      this.fastPoller = setInterval(function () {
        if (_this4.fastPollsRemaining <= 0) {
          clearInterval(_this4.fastPoller);
          _this4.fastPoller = null;
          return;
        }
        _this4.fastPollsRemaining -= 1;
        _this4.fetchProgress();
      }, 4000);

      // Refresh progress every 10 seconds during sync
      this.poller = setInterval(function () {
        return _this4.fetchProgress();
      }, 10000);
      if (immediate) this.fetchProgress();
    },
    fetchProgress: function fetchProgress() {
      var _this5 = this;
      // Guard against stuck refreshing state (network hiccup / cancelled request).
      if (this.refreshing) {
        var started = Number(this.lastProgressFetchStartedAt || 0);
        if (started && Date.now() - started < 30000) return;
        this.refreshing = false;
      }
      this.refreshing = true;
      this.lastProgressFetchStartedAt = Date.now();

      // Prefer DB-based sync progress when available
      if (this.syncJobId) {
        // Ensure progress card renders after reload (default to push if unknown).
        if (!this.syncMode) this.syncMode = 'push';
        axios.get("woo-sync/status/".concat(this.syncJobId)).then(function (_ref0) {
          var data = _ref0.data;
          var st = data || {};
          _this5.syncStatus = st.status || null;
          _this5.progress = _this5.normalizeProgressState({
            total_products: st.total_items || 0,
            processed: st.processed_items || 0,
            failed_products: st.failed_items || 0,
            synced_products: st.success_items || 0,
            percentage: st.percentage || 0,
            stage: st.stage || null,
            current_product_id: st.current_product_id || null,
            current_sku: st.current_sku || null,
            finished: ['completed', 'failed', 'cancelled'].includes(String(st.status || '').toLowerCase()),
            error: st.last_error || null,
            worker_heartbeat_at: st.worker_heartbeat_at || null
          });
          var status = String(st.status || '').toLowerCase();
          if (['completed', 'failed', 'cancelled'].includes(status)) {
            if (_this5.poller) {
              clearInterval(_this5.poller);
              _this5.poller = null;
            }
            if (_this5.fastPoller) {
              clearInterval(_this5.fastPoller);
              _this5.fastPoller = null;
            }
            _this5.syncing = false;
            _this5.token = '';
            // Clear DB job id so the main button stops showing "Syncing"
            _this5.syncJobId = null;
            _this5.syncStatus = null;
            _this5.stopping = false;
            _this5.pendingCancel = false;
            try {
              localStorage.removeItem(_this5.storageKey());
            } catch (e) {}
            _this5.syncMode = null;
            if (status === 'completed') {
              _this5.toast('success', _this5.$t('Sync_Completed'));
            } else if (status === 'cancelled') {
              _this5.toast('warning', _this5.$t && _this5.$t('Cancelled') ? _this5.$t('Cancelled') : 'Cancelled');
            } else {
              _this5.toast('danger', _this5.$t('Sync_Failed'));
            }
            _this5.load();
            _this5.$emit('refreshed');
          }
        })["catch"](function () {
          // Don't freeze the UI if status call fails.
          // Keep syncing=true so user can retry via Refresh.
        })["finally"](function () {
          _this5.refreshing = false;
        });
        return;
      }

      // Legacy token-based fallback
      if (!this.token) {
        // If we don't have token/jobId, don't kill UI; the job may still be starting.
        // Next refresh/poll will retry discovery.
        this.refreshing = false;
        return;
      }
      axios.get('woocommerce/sync/products/progress', {
        params: {
          token: this.token
        }
      }).then(function (_ref1) {
        var data = _ref1.data;
        if (data && data.state) {
          _this5.progress = _this5.normalizeProgressState(data.state);

          // Detect stuck sync (queue worker not running / no progress updates).
          // If state doesn't change for 60s, stop polling and unblock UI.
          var sigObj = {
            finished: !!_this5.progress.finished,
            percentage: _this5.displayPercentage,
            processed: _this5.displayProcessed,
            total: _this5.displayTotal,
            stage: _this5.progress.stage || null,
            sku: _this5.progress.current_sku || null,
            id: _this5.progress.current_product_id || null,
            hb: _this5.progress.worker_heartbeat_at || null,
            err: _this5.progress.error || null
          };
          var signature = JSON.stringify(sigObj);
          if (signature !== _this5.lastProgressSignature) {
            _this5.lastProgressSignature = signature;
            _this5.lastProgressChangeAt = Date.now();
          } else if (Date.now() - (_this5.lastProgressChangeAt || 0) > 60000) {
            clearInterval(_this5.poller);
            _this5.poller = null;
            _this5.token = '';
            _this5.syncing = false;
            _this5.progress = {
              total_products: 0,
              processed: 0,
              synced_products: 0,
              failed_products: 0,
              percentage: 0,
              created: 0,
              updated: 0
            };
            _this5.toast('danger', _this5.$t('Sync_Failed'));
            return;
          }
          if (_this5.progress.finished) {
            var finishedState = _this5.progress || {};
            var hadError = !!finishedState.error;
            clearInterval(_this5.poller);
            _this5.poller = null;
            _this5.token = '';
            _this5.syncing = false;
            _this5.progress = {
              total_products: 0,
              processed: 0,
              synced_products: 0,
              failed_products: 0,
              percentage: 0,
              created: 0,
              updated: 0
            };
            _this5.toast(hadError ? 'danger' : 'success', hadError ? _this5.$t('Sync_Failed') : _this5.$t('Sync_Completed'));
            _this5.load();
            _this5.$emit('refreshed');
          }
        } else {
          // Token expired or invalid, stop polling
          clearInterval(_this5.poller);
          _this5.poller = null;
          _this5.token = '';
          _this5.syncing = false;
          _this5.progress = {
            total_products: 0,
            processed: 0,
            synced_products: 0,
            failed_products: 0,
            percentage: 0,
            created: 0,
            updated: 0
          };
        }
      })["catch"](function () {
        // On error, stop polling and reset state
        clearInterval(_this5.poller);
        _this5.poller = null;
        _this5.token = '';
        _this5.syncing = false;
        _this5.syncMode = null;
        _this5.progress = {
          total_products: 0,
          processed: 0,
          synced_products: 0,
          failed_products: 0,
          percentage: 0,
          created: 0,
          updated: 0
        };
      })["finally"](function () {
        _this5.refreshing = false;
      });
    },
    toast: function toast(variant, msg) {
      this.$root.$bvToast.toast(msg, {
        title: this.$t('WooCommerce'),
        variant: variant,
        solid: true
      });
    },
    fixProductCategories: function fixProductCategories() {
      var _this6 = this;
      if (this.fixingCategories) return;
      this.fixingCategories = true;
      axios.post('woocommerce/products/fix-categories').then(function (_ref10) {
        var data = _ref10.data;
        if (data && data.ok) {
          var b = data.skipped_breakdown || {};
          var extra = b.missing_category_mapping != null || b.already_categorized != null ? " (no mapping: ".concat(b.missing_category_mapping || 0, ", already ok: ").concat(b.already_categorized || 0, ")") : '';
          var sampleNote = '';
          if ((data.skipped || 0) > 0 && Array.isArray(data.samples) && data.samples.length > 0) {
            var s = data.samples[0] || {};
            sampleNote = " \xB7 Example skipped: product #".concat(s.product_id || '?', " (").concat(s.reason || 'unknown', ")");
          }
          _this6.toast('success', "Fixed: ".concat(data.fixed || 0, " \xB7 Skipped: ").concat(data.skipped || 0).concat(extra, " \xB7 Errors: ").concat(data.errors || 0).concat(sampleNote));
        } else {
          _this6.toast('danger', "Fix failed: ".concat(data.error || 'Unknown error'));
        }
      })["catch"](function (error) {
        _this6.toast('danger', "Fix failed: ".concat(error.message || 'Network error'));
      })["finally"](function () {
        _this6.fixingCategories = false;
      });
    },
    resetSync: function resetSync() {
      var _this7 = this;
      if (this.resetting) return;
      this.resetting = true;
      // If a sync is running, cancel it first so the worker stops ASAP
      if (this.syncing) {
        try {
          this.stopSync();
        } catch (e) {}
      }
      axios.post('woocommerce/reset-products-sync').then(function () {
        _this7.toast('success', _this7.$t('Successfully_Updated'));
        _this7.load();
        _this7.$emit('refreshed');
      })["catch"](function () {
        _this7.toast('danger', _this7.$t('Sync_Failed'));
      })["finally"](function () {
        _this7.resetting = false;
      });
    }
  },
  created: function created() {
    var _this8 = this;
    // Reset any stale state on component creation
    this.syncing = false;
    this.stopping = false;
    this.token = '';
    this.syncStatus = null;
    this.syncMode = null;
    if (this.poller) {
      clearInterval(this.poller);
      this.poller = null;
    }
    if (this.fastPoller) {
      clearInterval(this.fastPoller);
      this.fastPoller = null;
    }
    this.progress = {
      total_products: 0,
      processed: 0,
      synced_products: 0,
      failed_products: 0,
      percentage: 0,
      created: 0,
      updated: 0
    };
    // Restore user preference (Stocky -> Woo push)
    try {
      var pref = localStorage.getItem('woo_products_push_only_unsynced');
      if (pref === '1' || pref === 'true') {
        this.syncOnlyUnsynced = true;
      }
    } catch (e) {}
    // Restore last running job (localStorage or backend)
    this.restoreRunningJob();
    this.load()["finally"](function () {
      _this8.$emit('ready');
    });
  },
  beforeDestroy: function beforeDestroy() {
    if (this.poller) {
      clearInterval(this.poller);
      this.poller = null;
    }
    if (this.fastPoller) {
      clearInterval(this.fastPoller);
      this.fastPoller = null;
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/settings/woocommerce/ProductsTab.vue?vue&type=template&id=69529b76&scoped=true":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/settings/woocommerce/ProductsTab.vue?vue&type=template&id=69529b76&scoped=true ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render),
/* harmony export */   staticRenderFns: () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", [_c("b-tabs", {
    attrs: {
      "content-class": "mt-3"
    },
    model: {
      value: _vm.activeMiniTab,
      callback: function callback($$v) {
        _vm.activeMiniTab = $$v;
      },
      expression: "activeMiniTab"
    }
  }, [_c("b-tab", {
    attrs: {
      active: ""
    },
    scopedSlots: _vm._u([{
      key: "title",
      fn: function fn() {
        return [_c("i", {
          staticClass: "i-Arrow-Right mr-2"
        }), _vm._v("\n        Stocky → WooCommerce\n      ")];
      },
      proxy: true
    }])
  }, [_vm._v(" "), _c("div", {
    staticClass: "d-flex justify-content-end mb-2"
  }, [_c("b-form-checkbox", {
    attrs: {
      "switch": "",
      disabled: _vm.isSyncActive
    },
    model: {
      value: _vm.syncOnlyUnsynced,
      callback: function callback($$v) {
        _vm.syncOnlyUnsynced = $$v;
      },
      expression: "syncOnlyUnsynced"
    }
  }, [_vm._v("\n          " + _vm._s(_vm.$t("Sync_Only_Unsynced")) + "\n        ")])], 1), _vm._v(" "), _c("div", {
    staticClass: "stats-dashboard"
  }, [_c("div", {
    staticClass: "stat-card total-products"
  }, [_c("div", {
    staticClass: "stat-icon-wrapper"
  }, [_c("i", {
    staticClass: "i-Bar-Code stat-icon"
  })]), _vm._v(" "), _c("div", {
    staticClass: "stat-content"
  }, [_c("div", {
    staticClass: "stat-value"
  }, [_vm._v(_vm._s(_vm.totalProductsDisplay))]), _vm._v(" "), _c("div", {
    staticClass: "stat-label"
  }, [_vm._v(_vm._s(_vm.$t("Total_Products")))])]), _vm._v(" "), _c("div", {
    staticClass: "stat-decoration"
  })]), _vm._v(" "), _c("div", {
    staticClass: "stat-card synced-products"
  }, [_c("div", {
    staticClass: "stat-icon-wrapper"
  }, [_c("i", {
    staticClass: "i-Check-2 stat-icon"
  })]), _vm._v(" "), _c("div", {
    staticClass: "stat-content"
  }, [_c("div", {
    staticClass: "stat-value"
  }, [_vm._v(_vm._s(_vm.syncedProductsDisplay))]), _vm._v(" "), _c("div", {
    staticClass: "stat-label"
  }, [_vm._v(_vm._s(_vm.$t("Synced_Products")))])]), _vm._v(" "), _c("div", {
    staticClass: "stat-decoration"
  })]), _vm._v(" "), _c("div", {
    staticClass: "stat-card unsynced-products"
  }, [_c("div", {
    staticClass: "stat-icon-wrapper"
  }, [_c("i", {
    staticClass: "i-Pause stat-icon"
  })]), _vm._v(" "), _c("div", {
    staticClass: "stat-content"
  }, [_c("div", {
    staticClass: "stat-value"
  }, [_vm._v(_vm._s(_vm.unsyncedCountDisplay))]), _vm._v(" "), _c("div", {
    staticClass: "stat-label"
  }, [_vm._v(_vm._s(_vm.$t("Not_Synced")))])]), _vm._v(" "), _c("div", {
    staticClass: "stat-decoration"
  })])]), _vm._v(" "), _c("b-card", {
    staticClass: "action-card shadow-sm mb-4"
  }, [_c("div", {
    staticClass: "d-flex flex-wrap align-items-center"
  }, [_c("b-button", {
    staticClass: "btn-action-primary mr-3 mb-2 d-inline-flex align-items-center",
    attrs: {
      variant: "info",
      disabled: _vm.isSyncActive
    },
    on: {
      click: function click($event) {
        return _vm.manualSync("push", _vm.syncOnlyUnsynced);
      }
    }
  }, [!_vm.isSyncActive ? [_c("i", {
    staticClass: "i-Play-Button mr-2"
  }), _vm._v("\n              " + _vm._s(_vm.$t("Run_Manual_Sync_Now")) + "\n            ")] : [_c("span", {
    staticClass: "mini-spinner mr-2"
  }), _vm._v("\n              " + _vm._s(_vm.$t("Syncing")) + "\n            ")]], 2), _vm._v(" "), _vm.showStopSync ? _c("b-button", {
    staticClass: "btn-action-warning mr-2 mb-2",
    attrs: {
      variant: "warning",
      size: "sm",
      disabled: _vm.stopping
    },
    on: {
      click: _vm.stopSync
    }
  }, [_c("i", {
    staticClass: "i-Stop mr-1"
  }), _vm._v(" "), !_vm.stopping ? _c("span", [_vm._v("Stop Sync")]) : _c("span", [_vm._v("Stopping...")])]) : _vm._e(), _vm._v(" "), _vm.isSyncActive ? _c("b-button", {
    staticClass: "btn-action-refresh mr-2 mb-2",
    attrs: {
      variant: "outline-secondary",
      size: "sm",
      disabled: _vm.refreshing
    },
    on: {
      click: _vm.fetchProgress
    }
  }, [_c("i", {
    staticClass: "i-Reload mr-1"
  }), _vm._v(" "), !_vm.refreshing ? _c("span", [_vm._v(_vm._s(_vm.$t("Refresh")))]) : _c("span", [_vm._v(_vm._s(_vm.$t("Refresh")) + "...")])]) : _vm._e(), _vm._v(" "), _c("b-button", {
    staticClass: "btn-action-danger mr-2 mb-2",
    attrs: {
      variant: "danger",
      size: "sm",
      disabled: _vm.resetting
    },
    on: {
      click: _vm.resetSync
    }
  }, [_c("i", {
    staticClass: "i-Reset mr-1"
  }), _vm._v(" "), !_vm.resetting ? _c("span", [_vm._v(_vm._s(_vm.$t("Reset_Sync_State")))]) : _c("span", [_vm._v(_vm._s(_vm.$t("Resetting")) + "...")])]), _vm._v(" "), _c("b-button", {
    staticClass: "mr-2 mb-2",
    attrs: {
      variant: "secondary",
      size: "sm",
      disabled: _vm.fixingCategories
    },
    on: {
      click: _vm.fixProductCategories
    }
  }, [!_vm.fixingCategories ? [_c("i", {
    staticClass: "i-Folder mr-1"
  }), _vm._v("\n              Fix Uncategorized Products\n            ")] : [_c("span", {
    staticClass: "mini-spinner mr-2"
  }), _vm._v("\n              Fixing...\n            ")]], 2)], 1)]), _vm._v(" "), _vm.isSyncActive && _vm.syncMode === "push" && !_vm.progress.finished ? _c("b-card", {
    staticClass: "progress-card shadow-sm"
  }, [_c("div", {
    staticClass: "progress-header mb-3"
  }, [_c("h6", {
    staticClass: "mb-0 font-weight-bold"
  }, [_c("i", {
    staticClass: "i-Loading-3 mr-2 text-primary"
  }), _vm._v("\n            " + _vm._s(_vm.$t("Syncing_Products")) + "\n          ")])]), _vm._v(" "), _c("b-progress", {
    staticClass: "progress-modern mb-3",
    attrs: {
      value: _vm.displayPercentage,
      max: 100,
      height: "32px",
      "show-progress": "",
      animated: ""
    }
  }, [_c("span", {
    staticClass: "progress-text"
  }, [_vm._v("\n            " + _vm._s(_vm.displayPercentage) + "%\n            "), _vm.displayTotal > 0 ? _c("span", [_vm._v(" · " + _vm._s(_vm.displayProcessed) + "/" + _vm._s(_vm.displayTotal) + " products")]) : _vm._e()])]), _vm._v(" "), _c("div", {
    staticClass: "progress-details"
  }, [_vm.displayTotal > 0 ? _c("div", {
    staticClass: "progress-detail-item mb-2"
  }, [_c("i", {
    staticClass: "i-Information mr-2 text-primary"
  }), _vm._v(" "), _c("span", {
    staticClass: "text-muted"
  }, [_vm._v("Progress:")]), _vm._v(" "), _c("strong", {
    staticClass: "ml-1"
  }, [_vm._v(_vm._s(_vm.displayProcessed) + "/" + _vm._s(_vm.displayTotal) + " products")])]) : _vm._e(), _vm._v(" "), _vm.progress.current_sku || _vm.progress.current_product_id ? _c("div", {
    staticClass: "progress-detail-item mb-2"
  }, [_c("i", {
    staticClass: "i-Bar-Code mr-2 text-primary"
  }), _vm._v(" "), _c("span", {
    staticClass: "text-muted"
  }, [_vm._v(_vm._s(_vm.$t("Product")) + ":")]), _vm._v(" "), _c("strong", {
    staticClass: "ml-1"
  }, [_vm._v(_vm._s(_vm.progress.current_sku || "#".concat(_vm.progress.current_product_id)))])]) : _vm._e(), _vm._v(" "), _vm.progress.stage ? _c("div", {
    staticClass: "progress-detail-item mb-2"
  }, [_c("i", {
    staticClass: "i-Information mr-2 text-info"
  }), _vm._v(" "), _c("span", {
    staticClass: "text-muted"
  }, [_vm._v("Stage:")]), _vm._v(" "), _c("strong", {
    staticClass: "ml-1"
  }, [_vm._v(_vm._s(_vm.progress.stage))])]) : _vm._e(), _vm._v(" "), _vm.stopping ? _c("div", {
    staticClass: "progress-detail-item mb-2"
  }, [_c("i", {
    staticClass: "i-Information mr-2 text-warning"
  }), _vm._v(" "), _c("span", {
    staticClass: "text-warning"
  }, [_vm._v("Stopping… current item will finish then the sync will stop.")])]) : _vm._e(), _vm._v(" "), _vm.progress.failed_products > 0 ? _c("div", {
    staticClass: "progress-detail-item"
  }, [_c("i", {
    staticClass: "i-Close-Circle mr-2 text-danger"
  }), _vm._v(" "), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.$t("Errors")) + ": " + _vm._s(_vm.progress.failed_products))]), _vm._v(" "), _c("b-link", {
    staticClass: "ml-2",
    on: {
      click: function click($event) {
        return _vm.$emit("view-logs");
      }
    }
  }, [_c("i", {
    staticClass: "i-File-Clipboard-Text-Image mr-1"
  }), _vm._v("\n              " + _vm._s(_vm.$t("View_Logs")) + "\n            ")])], 1) : _vm._e()])], 1) : _vm._e()], 1), _vm._v(" "), _c("b-tab", {
    scopedSlots: _vm._u([{
      key: "title",
      fn: function fn() {
        return [_c("i", {
          staticClass: "i-Arrow-Left mr-2"
        }), _vm._v("\n        WooCommerce → Stocky\n      ")];
      },
      proxy: true
    }])
  }, [_vm._v(" "), _c("div", {
    staticClass: "stats-dashboard"
  }, [_c("div", {
    staticClass: "stat-card total-products"
  }, [_c("div", {
    staticClass: "stat-icon-wrapper"
  }, [_c("i", {
    staticClass: "i-Shopping-Cart stat-icon"
  })]), _vm._v(" "), _c("div", {
    staticClass: "stat-content"
  }, [_c("div", {
    staticClass: "stat-value"
  }, [_vm._v(_vm._s(_vm.pullStats.total_woo != null ? _vm.pullStats.total_woo : "—"))]), _vm._v(" "), _c("div", {
    staticClass: "stat-label"
  }, [_vm._v("Total in WooCommerce")])]), _vm._v(" "), _c("div", {
    staticClass: "stat-decoration"
  })]), _vm._v(" "), _c("div", {
    staticClass: "stat-card synced-products"
  }, [_c("div", {
    staticClass: "stat-icon-wrapper"
  }, [_c("i", {
    staticClass: "i-Check-2 stat-icon"
  })]), _vm._v(" "), _c("div", {
    staticClass: "stat-content"
  }, [_c("div", {
    staticClass: "stat-value"
  }, [_vm._v(_vm._s(_vm.pullStats.imported != null ? _vm.pullStats.imported : "—"))]), _vm._v(" "), _c("div", {
    staticClass: "stat-label"
  }, [_vm._v("Imported to Stocky")])]), _vm._v(" "), _c("div", {
    staticClass: "stat-decoration"
  })]), _vm._v(" "), _c("div", {
    staticClass: "stat-card unsynced-products"
  }, [_c("div", {
    staticClass: "stat-icon-wrapper"
  }, [_c("i", {
    staticClass: "i-Download stat-icon"
  })]), _vm._v(" "), _c("div", {
    staticClass: "stat-content"
  }, [_c("div", {
    staticClass: "stat-value"
  }, [_vm._v(_vm._s(_vm.pullStats.not_imported != null ? _vm.pullStats.not_imported : "—"))]), _vm._v(" "), _c("div", {
    staticClass: "stat-label"
  }, [_vm._v("Not Yet Imported")])]), _vm._v(" "), _c("div", {
    staticClass: "stat-decoration"
  })])]), _vm._v(" "), _c("b-card", {
    staticClass: "action-card shadow-sm mb-4"
  }, [_c("div", {
    staticClass: "d-flex flex-wrap align-items-center"
  }, [_c("b-button", {
    staticClass: "btn-action-secondary mr-3 mb-2 d-inline-flex align-items-center",
    attrs: {
      variant: "success",
      disabled: _vm.isSyncActive
    },
    on: {
      click: function click($event) {
        return _vm.manualSync("pull", false);
      }
    }
  }, [!_vm.isSyncActive ? [_c("i", {
    staticClass: "i-Play-Button mr-2"
  }), _vm._v("\n              Sync WooCommerce to Stocky\n            ")] : [_c("span", {
    staticClass: "mini-spinner mr-2"
  }), _vm._v("\n              " + _vm._s(_vm.$t("Syncing")) + "\n            ")]], 2), _vm._v(" "), _vm.showStopSync ? _c("b-button", {
    staticClass: "btn-action-warning mr-2 mb-2",
    attrs: {
      variant: "warning",
      size: "sm",
      disabled: _vm.stopping
    },
    on: {
      click: _vm.stopSync
    }
  }, [_c("i", {
    staticClass: "i-Stop mr-1"
  }), _vm._v(" "), !_vm.stopping ? _c("span", [_vm._v("Stop Sync")]) : _c("span", [_vm._v("Stopping...")])]) : _vm._e(), _vm._v(" "), _vm.isSyncActive ? _c("b-button", {
    staticClass: "btn-action-refresh mr-2 mb-2",
    attrs: {
      variant: "outline-secondary",
      size: "sm",
      disabled: _vm.refreshing
    },
    on: {
      click: _vm.fetchProgress
    }
  }, [_c("i", {
    staticClass: "i-Reload mr-1"
  }), _vm._v(" "), !_vm.refreshing ? _c("span", [_vm._v(_vm._s(_vm.$t("Refresh")))]) : _c("span", [_vm._v(_vm._s(_vm.$t("Refresh")) + "...")])]) : _vm._e(), _vm._v(" "), _c("b-button", {
    staticClass: "btn-action-danger mr-2 mb-2",
    attrs: {
      variant: "danger",
      size: "sm",
      disabled: _vm.resetting
    },
    on: {
      click: _vm.resetSync
    }
  }, [_c("i", {
    staticClass: "i-Reset mr-1"
  }), _vm._v(" "), !_vm.resetting ? _c("span", [_vm._v(_vm._s(_vm.$t("Reset_Sync_State")))]) : _c("span", [_vm._v(_vm._s(_vm.$t("Resetting")) + "...")])])], 1)]), _vm._v(" "), _vm.isSyncActive && _vm.syncMode === "pull" && !_vm.progress.finished ? _c("b-card", {
    staticClass: "progress-card shadow-sm"
  }, [_c("div", {
    staticClass: "progress-header mb-3"
  }, [_c("h6", {
    staticClass: "mb-0 font-weight-bold"
  }, [_c("i", {
    staticClass: "i-Loading-3 mr-2 text-primary"
  }), _vm._v("\n            Syncing Products (Woo → Stocky)\n          ")])]), _vm._v(" "), _c("b-progress", {
    staticClass: "progress-modern mb-3",
    attrs: {
      value: _vm.displayPercentage,
      max: 100,
      height: "32px",
      "show-progress": "",
      animated: ""
    }
  }, [_c("span", {
    staticClass: "progress-text"
  }, [_vm._v("\n            " + _vm._s(_vm.displayPercentage) + "%\n            "), _vm.displayTotal > 0 ? _c("span", [_vm._v(" (" + _vm._s(_vm.displayProcessed) + "/" + _vm._s(_vm.displayTotal) + ")")]) : _vm._e()])]), _vm._v(" "), _c("div", {
    staticClass: "progress-details"
  }, [_vm.progress.current_sku || _vm.progress.current_woocommerce_id ? _c("div", {
    staticClass: "progress-detail-item mb-2"
  }, [_c("i", {
    staticClass: "i-Bar-Code mr-2 text-primary"
  }), _vm._v(" "), _c("span", {
    staticClass: "text-muted"
  }, [_vm._v(_vm._s(_vm.$t("Product")) + ":")]), _vm._v(" "), _c("strong", {
    staticClass: "ml-1"
  }, [_vm._v(_vm._s(_vm.progress.current_sku || "#".concat(_vm.progress.current_woocommerce_id)))])]) : _vm._e(), _vm._v(" "), _vm.progress.stage ? _c("div", {
    staticClass: "progress-detail-item mb-2"
  }, [_c("i", {
    staticClass: "i-Information mr-2 text-info"
  }), _vm._v(" "), _c("span", {
    staticClass: "text-muted"
  }, [_vm._v("Stage:")]), _vm._v(" "), _c("strong", {
    staticClass: "ml-1"
  }, [_vm._v(_vm._s(_vm.progress.stage))])]) : _vm._e(), _vm._v(" "), _vm.stopping ? _c("div", {
    staticClass: "progress-detail-item mb-2"
  }, [_c("i", {
    staticClass: "i-Information mr-2 text-warning"
  }), _vm._v(" "), _c("span", {
    staticClass: "text-warning"
  }, [_vm._v("Stopping… current item will finish then the sync will stop.")])]) : _vm._e(), _vm._v(" "), _vm.progress.failed_products > 0 ? _c("div", {
    staticClass: "progress-detail-item"
  }, [_c("i", {
    staticClass: "i-Close-Circle mr-2 text-danger"
  }), _vm._v(" "), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.$t("Errors")) + ": " + _vm._s(_vm.progress.failed_products))]), _vm._v(" "), _c("b-link", {
    staticClass: "ml-2",
    on: {
      click: function click($event) {
        return _vm.$emit("view-logs");
      }
    }
  }, [_c("i", {
    staticClass: "i-File-Clipboard-Text-Image mr-1"
  }), _vm._v("\n              " + _vm._s(_vm.$t("View_Logs")) + "\n            ")])], 1) : _vm._e()])], 1) : _vm._e()], 1)], 1)], 1);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-8.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-8.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/settings/woocommerce/ProductsTab.vue?vue&type=style&index=0&id=69529b76&scoped=true&lang=css":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-8.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-8.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/settings/woocommerce/ProductsTab.vue?vue&type=style&index=0&id=69529b76&scoped=true&lang=css ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n.stats-dashboard[data-v-69529b76] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));\n  gap: 1.5rem;\n  margin-bottom: 2rem;\n}\n.stat-card[data-v-69529b76] {\n  position: relative;\n  background: white;\n  border-radius: 16px;\n  padding: 1.75rem;\n  display: flex;\n  align-items: center;\n  gap: 1.25rem;\n  overflow: hidden;\n  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.06);\n  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);\n}\n.stat-card[data-v-69529b76]:hover {\n  transform: translateY(-8px);\n  box-shadow: 0 12px 32px rgba(0, 0, 0, 0.12);\n}\n.stat-decoration[data-v-69529b76] {\n  position: absolute;\n  width: 120px;\n  height: 120px;\n  border-radius: 50%;\n  opacity: 0.08;\n  top: -30px;\n  right: -30px;\n}\n.stat-icon-wrapper[data-v-69529b76] {\n  width: 64px;\n  height: 64px;\n  border-radius: 14px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  position: relative;\n  z-index: 1;\n  flex-shrink: 0;\n}\n.stat-icon[data-v-69529b76] {\n  font-size: 28px;\n  color: white;\n}\n.stat-content[data-v-69529b76] {\n  flex: 1;\n  z-index: 1;\n}\n.stat-value[data-v-69529b76] {\n  font-size: 2.25rem;\n  font-weight: 800;\n  line-height: 1;\n  margin-bottom: 0.5rem;\n  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n  background-clip: text;\n}\n.stat-value-small[data-v-69529b76] {\n  font-size: 1.5rem;\n  font-weight: 800;\n  line-height: 1;\n  margin-bottom: 0.5rem;\n  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n  background-clip: text;\n}\n.stat-label[data-v-69529b76] {\n  font-size: 0.9rem;\n  font-weight: 600;\n  color: #64748b;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.stat-card.total-products .stat-icon-wrapper[data-v-69529b76] {\n  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);\n}\n.stat-card.total-products .stat-decoration[data-v-69529b76] {\n  background: #667eea;\n}\n.stat-card.synced-products .stat-icon-wrapper[data-v-69529b76] {\n  background: linear-gradient(135deg, #10b981 0%, #059669 100%);\n}\n.stat-card.synced-products .stat-decoration[data-v-69529b76] {\n  background: #10b981;\n}\n.stat-card.synced-products .stat-value[data-v-69529b76] {\n  background: linear-gradient(135deg, #10b981 0%, #059669 100%);\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n  background-clip: text;\n}\n.stat-card.unsynced-products .stat-icon-wrapper[data-v-69529b76] {\n  background: linear-gradient(135deg, #f59e0b 0%, #d97706 100%);\n}\n.stat-card.unsynced-products .stat-decoration[data-v-69529b76] {\n  background: #f59e0b;\n}\n.stat-card.unsynced-products .stat-value[data-v-69529b76] {\n  background: linear-gradient(135deg, #f59e0b 0%, #d97706 100%);\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n  background-clip: text;\n}\n.action-card[data-v-69529b76] {\n  border-radius: 12px;\n  border: none;\n  padding: 1.5rem;\n  background: #f8f9fa;\n}\n.btn-action-primary[data-v-69529b76] {\n  border-radius: 8px;\n  padding: 0.75rem 1.5rem;\n  font-weight: 600;\n  box-shadow: 0 4px 12px rgba(23, 162, 184, 0.3);\n  transition: all 0.3s ease;\n}\n.btn-action-primary[data-v-69529b76]:hover:not(:disabled) {\n  transform: translateY(-2px);\n  box-shadow: 0 6px 16px rgba(23, 162, 184, 0.4);\n}\n.btn-action-warning[data-v-69529b76],\n.btn-action-refresh[data-v-69529b76],\n.btn-action-danger[data-v-69529b76] {\n  border-radius: 8px;\n  font-weight: 600;\n  transition: all 0.3s ease;\n}\n.btn-action-warning[data-v-69529b76]:hover:not(:disabled),\n.btn-action-refresh[data-v-69529b76]:hover:not(:disabled),\n.btn-action-danger[data-v-69529b76]:hover:not(:disabled) {\n  transform: translateY(-2px);\n}\n.progress-card[data-v-69529b76] {\n  border-radius: 12px;\n  border: none;\n  padding: 1.5rem;\n  background: linear-gradient(135deg, #f8f9ff 0%, #ffffff 100%);\n}\n.progress-header[data-v-69529b76] {\n  display: flex;\n  align-items: center;\n}\n.progress-modern[data-v-69529b76] {\n  border-radius: 10px;\n  overflow: hidden;\n  background: #e9ecef;\n}\n.progress-modern[data-v-69529b76] .progress-bar {\n  background: linear-gradient(90deg, #667eea 0%, #764ba2 100%);\n  border-radius: 10px;\n}\n.progress-text[data-v-69529b76] {\n  font-weight: 700;\n  font-size: 14px;\n  color: white;\n  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);\n}\n.progress-details[data-v-69529b76] {\n  padding-top: 0.5rem;\n}\n.progress-detail-item[data-v-69529b76] {\n  display: flex;\n  align-items: center;\n  font-size: 14px;\n}\n.mini-spinner[data-v-69529b76] {\n  display: inline-block;\n  width: 16px;\n  height: 16px;\n  border: 2px solid rgba(23, 162, 184, 0.2);\n  border-top-color: #17a2b8;\n  border-radius: 50%;\n  animation: spin-69529b76 0.6s linear infinite;\n}\n@keyframes spin-69529b76 {\nto { transform: rotate(360deg);\n}\n}\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-8.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-8.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/settings/woocommerce/ProductsTab.vue?vue&type=style&index=0&id=69529b76&scoped=true&lang=css":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-8.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-8.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/settings/woocommerce/ProductsTab.vue?vue&type=style&index=0&id=69529b76&scoped=true&lang=css ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_8_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_8_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductsTab_vue_vue_type_style_index_0_id_69529b76_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-8.use[1]!../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-8.use[2]!../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ProductsTab.vue?vue&type=style&index=0&id=69529b76&scoped=true&lang=css */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-8.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-8.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/settings/woocommerce/ProductsTab.vue?vue&type=style&index=0&id=69529b76&scoped=true&lang=css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_8_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_8_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductsTab_vue_vue_type_style_index_0_id_69529b76_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_8_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_8_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductsTab_vue_vue_type_style_index_0_id_69529b76_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/src/views/app/pages/settings/woocommerce/ProductsTab.vue":
/*!****************************************************************************!*\
  !*** ./resources/src/views/app/pages/settings/woocommerce/ProductsTab.vue ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ProductsTab_vue_vue_type_template_id_69529b76_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ProductsTab.vue?vue&type=template&id=69529b76&scoped=true */ "./resources/src/views/app/pages/settings/woocommerce/ProductsTab.vue?vue&type=template&id=69529b76&scoped=true");
/* harmony import */ var _ProductsTab_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ProductsTab.vue?vue&type=script&lang=js */ "./resources/src/views/app/pages/settings/woocommerce/ProductsTab.vue?vue&type=script&lang=js");
/* harmony import */ var _ProductsTab_vue_vue_type_style_index_0_id_69529b76_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ProductsTab.vue?vue&type=style&index=0&id=69529b76&scoped=true&lang=css */ "./resources/src/views/app/pages/settings/woocommerce/ProductsTab.vue?vue&type=style&index=0&id=69529b76&scoped=true&lang=css");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _ProductsTab_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _ProductsTab_vue_vue_type_template_id_69529b76_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render,
  _ProductsTab_vue_vue_type_template_id_69529b76_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "69529b76",
  null
  
)

/* hot reload */
if (false) // removed by dead control flow
{ var api; }
component.options.__file = "resources/src/views/app/pages/settings/woocommerce/ProductsTab.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/src/views/app/pages/settings/woocommerce/ProductsTab.vue?vue&type=script&lang=js":
/*!****************************************************************************************************!*\
  !*** ./resources/src/views/app/pages/settings/woocommerce/ProductsTab.vue?vue&type=script&lang=js ***!
  \****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductsTab_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ProductsTab.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/settings/woocommerce/ProductsTab.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductsTab_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/src/views/app/pages/settings/woocommerce/ProductsTab.vue?vue&type=style&index=0&id=69529b76&scoped=true&lang=css":
/*!************************************************************************************************************************************!*\
  !*** ./resources/src/views/app/pages/settings/woocommerce/ProductsTab.vue?vue&type=style&index=0&id=69529b76&scoped=true&lang=css ***!
  \************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_8_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_8_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductsTab_vue_vue_type_style_index_0_id_69529b76_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/style-loader/dist/cjs.js!../../../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-8.use[1]!../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-8.use[2]!../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ProductsTab.vue?vue&type=style&index=0&id=69529b76&scoped=true&lang=css */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-8.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-8.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/settings/woocommerce/ProductsTab.vue?vue&type=style&index=0&id=69529b76&scoped=true&lang=css");


/***/ }),

/***/ "./resources/src/views/app/pages/settings/woocommerce/ProductsTab.vue?vue&type=template&id=69529b76&scoped=true":
/*!**********************************************************************************************************************!*\
  !*** ./resources/src/views/app/pages/settings/woocommerce/ProductsTab.vue?vue&type=template&id=69529b76&scoped=true ***!
  \**********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductsTab_vue_vue_type_template_id_69529b76_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductsTab_vue_vue_type_template_id_69529b76_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductsTab_vue_vue_type_template_id_69529b76_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ProductsTab.vue?vue&type=template&id=69529b76&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/settings/woocommerce/ProductsTab.vue?vue&type=template&id=69529b76&scoped=true");


/***/ })

}]);