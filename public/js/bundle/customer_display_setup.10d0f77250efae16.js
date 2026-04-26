"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["customer_display_setup"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/customer/CustomerDisplaySetup.vue?vue&type=script&lang=js":
/*!*****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/customer/CustomerDisplaySetup.vue?vue&type=script&lang=js ***!
  \*****************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'CustomerDisplaySetup',
  data: function data() {
    return {
      loading: false,
      token: '',
      url: '',
      qr: null,
      error: '',
      tokenExpiry: null,
      qrModalScreen: null
    };
  },
  mounted: function mounted() {
    // Load existing token if it's still valid
    this.loadExistingToken();
  },
  methods: {
    loadExistingToken: function loadExistingToken() {
      var _this = this;
      try {
        var stored = localStorage.getItem('cd_token_data');
        if (!stored) return;
        var data = JSON.parse(stored);
        var now = new Date().getTime();

        // Check if token is still valid (24 hours = 86400000 milliseconds)
        if (data.expiry && now < data.expiry) {
          this.token = data.token;
          this.url = data.url;
          this.qr = data.qr || null;
          this.tokenExpiry = data.expiry;

          // If no QR but URL exists, generate it
          this.$nextTick(function () {
            if (!_this.qr && _this.url) {
              _this.generateQrCode(_this.url);
            }
          });
        } else {
          // Token expired, clear it
          localStorage.removeItem('cd_token_data');
        }
      } catch (e) {
        console.error('Error loading existing token:', e);
      }
    },
    saveTokenData: function saveTokenData() {
      try {
        var expiry = new Date().getTime() + 24 * 60 * 60 * 1000; // 24 hours
        var data = {
          token: this.token,
          url: this.url,
          qr: this.qr,
          expiry: expiry
        };
        localStorage.setItem('cd_token_data', JSON.stringify(data));
        this.tokenExpiry = expiry;
      } catch (e) {
        console.error('Error saving token data:', e);
      }
    },
    generate: function generate() {
      var _this2 = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee() {
        var _yield$axios$post, data, _t;
        return _regenerator().w(function (_context) {
          while (1) switch (_context.p = _context.n) {
            case 0:
              _this2.loading = true;
              _this2.error = '';
              _context.p = 1;
              _context.n = 2;
              return axios.post('/customer-display/generate');
            case 2:
              _yield$axios$post = _context.v;
              data = _yield$axios$post.data;
              _this2.token = data.token;
              _this2.url = data.url;
              _this2.qr = data.qr || null;
              _this2.tokenExpiry = new Date().getTime() + 24 * 60 * 60 * 1000; // Set expiry for new token
              _this2.$nextTick(function () {
                if (!_this2.qr && _this2.url) {
                  _this2.generateQrCode(_this2.url);
                }
              });
              _this2.saveTokenData(); // Save new token data
              _context.n = 4;
              break;
            case 3:
              _context.p = 3;
              _t = _context.v;
              _this2.error = _t && _t.response && _t.response.data && _t.response.data.message || _this2.$t('Failed_to_generate_token');
            case 4:
              _context.p = 4;
              _this2.loading = false;
              return _context.f(4);
            case 5:
              return _context.a(2);
          }
        }, _callee, null, [[1, 3, 4, 5]]);
      }))();
    },
    generateQrCode: function generateQrCode(text) {
      var _this3 = this;
      var canvas = this.$refs.qrcanvas;
      if (!canvas) return;

      // Load QR code library from CDN if not already loaded
      if (!window.QRCode) {
        var script = document.createElement('script');
        script.src = 'https://cdnjs.cloudflare.com/ajax/libs/qrcodejs/1.0.0/qrcode.min.js';
        script.onload = function () {
          _this3.drawQrCanvas(text);
        };
        script.onerror = function () {
          _this3.drawQrCanvasFallback(text);
        };
        document.head.appendChild(script);
      } else {
        this.drawQrCanvas(text);
      }
    },
    drawQrCanvas: function drawQrCanvas(text) {
      var canvas = this.$refs.qrcanvas;
      if (!canvas) return;
      try {
        if (window.QRCode) {
          // Clear previous content
          canvas.innerHTML = '';

          // Generate QR code
          var qr = new window.QRCode(canvas, {
            text: text,
            width: 200,
            height: 200,
            colorDark: '#000000',
            colorLight: '#ffffff',
            correctLevel: window.QRCode.CorrectLevel.H
          });
          return;
        }
      } catch (e) {
        console.error('QR Code generation error:', e);
        this.drawQrCanvasFallback(text);
      }
    },
    drawQrCanvasFallback: function drawQrCanvasFallback(text) {
      var canvas = this.$refs.qrcanvas;
      if (!canvas) return;
      try {
        // Create a canvas element if it doesn't exist
        var canvasElement = canvas.querySelector('canvas');
        if (!canvasElement) {
          canvasElement = document.createElement('canvas');
          canvas.appendChild(canvasElement);
        }
        var ctx = canvasElement.getContext('2d');
        canvasElement.width = 250;
        canvasElement.height = 250;

        // Draw white background
        ctx.fillStyle = '#ffffff';
        ctx.fillRect(0, 0, canvasElement.width, canvasElement.height);

        // Draw border
        ctx.strokeStyle = '#cccccc';
        ctx.lineWidth = 2;
        ctx.strokeRect(0, 0, canvasElement.width, canvasElement.height);

        // Draw text
        ctx.fillStyle = '#333333';
        ctx.font = 'bold 16px Arial';
        ctx.textAlign = 'center';

        // Wrap text
        var lines = [this.$t('QR_Code'), this.$t('Not_Available'), '', this.$t('Scan_URL_with_your_camera')];
        var y = 50;
        lines.forEach(function (line) {
          ctx.fillText(line, canvasElement.width / 2, y);
          y += 30;
        });

        // Draw the URL shortened
        ctx.font = '12px Arial';
        ctx.fillStyle = '#666666';
        var shortUrl = text.length > 40 ? text.substring(0, 40) + '...' : text;
        ctx.fillText(shortUrl, canvasElement.width / 2, y + 30);
      } catch (e) {
        console.error('Canvas fallback error:', e);
      }
    },
    copy: function copy(text) {
      var _this4 = this;
      if (!text) return;

      // Try modern Clipboard API first
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(text).then(function () {
          _this4.showCopySuccess();
        })["catch"](function (err) {
          console.error('Clipboard API failed:', err);
          _this4.copyFallback(text);
        });
      } else {
        // Fallback for older browsers
        this.copyFallback(text);
      }
    },
    copyFallback: function copyFallback(text) {
      try {
        var textArea = document.createElement('textarea');
        textArea.value = text;
        textArea.style.position = 'fixed';
        textArea.style.top = '0';
        textArea.style.left = '0';
        textArea.style.opacity = '0';
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();
        var successful = document.execCommand('copy');
        document.body.removeChild(textArea);
        if (successful) {
          this.showCopySuccess();
        } else {
          alert(this.$t('Failed_to_copy_to_clipboard'));
        }
      } catch (err) {
        console.error('Fallback copy failed:', err);
        alert(this.$t('Failed_to_copy_to_clipboard'));
      }
    },
    showCopySuccess: function showCopySuccess() {
      // Create a temporary success message
      var message = document.createElement('div');
      message.textContent = '✓ ' + this.$t('Copied_to_clipboard');
      message.style.cssText = "\n        position: fixed;\n        top: 20px;\n        right: 20px;\n        background: #10b981;\n        color: white;\n        padding: 12px 20px;\n        border-radius: 8px;\n        font-size: 14px;\n        font-weight: 600;\n        z-index: 9999;\n        animation: slideIn 0.3s ease-out;\n      ";
      document.body.appendChild(message);

      // Remove message after 2 seconds
      setTimeout(function () {
        message.style.animation = 'fadeOut 0.3s ease-out';
        setTimeout(function () {
          document.body.removeChild(message);
        }, 300);
      }, 2000);
    },
    select: function select(e) {
      e.target.select();
    },
    screenUrl: function screenUrl(screenNumber) {
      if (!this.url) return '';
      var sep = this.url.indexOf('?') >= 0 ? '&' : '?';
      return this.url + sep + 'screen=' + screenNumber;
    },
    openScreenQrModal: function openScreenQrModal(n) {
      var _this5 = this;
      this.qrModalScreen = n;
      this.$nextTick(function () {
        _this5.drawQrIntoModal(_this5.screenUrl(n));
      });
    },
    closeScreenQrModal: function closeScreenQrModal() {
      this.qrModalScreen = null;
      var el = this.$refs.qrModalContainer;
      if (el) el.innerHTML = '';
    },
    drawQrIntoModal: function drawQrIntoModal(text) {
      var _this6 = this;
      var container = this.$refs.qrModalContainer;
      if (!container || !text) return;
      container.innerHTML = '';
      var draw = function draw() {
        try {
          if (window.QRCode) {
            new window.QRCode(container, {
              text: text,
              width: 200,
              height: 200,
              colorDark: '#000000',
              colorLight: '#ffffff',
              correctLevel: window.QRCode.CorrectLevel.H
            });
            return;
          }
        } catch (e) {
          console.error('QR generation error:', e);
        }
        _this6.drawQrCanvasFallbackInto(container, text);
      };
      if (!window.QRCode) {
        var script = document.createElement('script');
        script.src = 'https://cdnjs.cloudflare.com/ajax/libs/qrcodejs/1.0.0/qrcode.min.js';
        script.onload = draw;
        script.onerror = function () {
          return _this6.drawQrCanvasFallbackInto(container, text);
        };
        document.head.appendChild(script);
      } else {
        draw();
      }
    },
    drawQrCanvasFallbackInto: function drawQrCanvasFallbackInto(container, text) {
      if (!container) return;
      container.innerHTML = '';
      try {
        var canvas = document.createElement('canvas');
        container.appendChild(canvas);
        var ctx = canvas.getContext('2d');
        canvas.width = 200;
        canvas.height = 200;
        ctx.fillStyle = '#ffffff';
        ctx.fillRect(0, 0, 200, 200);
        ctx.strokeStyle = '#ccc';
        ctx.lineWidth = 2;
        ctx.strokeRect(0, 0, 200, 200);
        ctx.fillStyle = '#333';
        ctx.font = '14px Arial';
        ctx.textAlign = 'center';
        ctx.fillText(this.$t('QR_Code'), 100, 90);
        ctx.fillText(this.$t('Not_Available'), 100, 110);
        ctx.font = '11px Arial';
        ctx.fillStyle = '#666';
        var _short = text.length > 35 ? text.substring(0, 35) + '...' : text;
        ctx.fillText(_short, 100, 160);
      } catch (e) {
        console.error(e);
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/customer/CustomerDisplaySetup.vue?vue&type=template&id=afaeea06&scoped=true":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/customer/CustomerDisplaySetup.vue?vue&type=template&id=afaeea06&scoped=true ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
    staticClass: "customer-display-setup-container"
  }, [_c("div", {
    staticClass: "setup-header"
  }, [_c("div", {
    staticClass: "header-content"
  }, [_c("div", {
    staticClass: "header-icon"
  }, [_c("svg", {
    attrs: {
      width: "48",
      height: "48",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      "stroke-width": "2"
    }
  }, [_c("rect", {
    attrs: {
      x: "2",
      y: "3",
      width: "20",
      height: "14",
      rx: "2",
      ry: "2"
    }
  }), _vm._v(" "), _c("line", {
    attrs: {
      x1: "8",
      y1: "21",
      x2: "16",
      y2: "21"
    }
  }), _vm._v(" "), _c("line", {
    attrs: {
      x1: "12",
      y1: "17",
      x2: "12",
      y2: "21"
    }
  })])]), _vm._v(" "), _c("div", {
    staticClass: "header-text"
  }, [_c("h1", {
    staticClass: "header-title"
  }, [_vm._v(_vm._s(_vm.$t("Customer_Display_Configuration")))]), _vm._v(" "), _c("p", {
    staticClass: "header-subtitle"
  }, [_vm._v(_vm._s(_vm.$t("Customer_Display_Configuration_Subtitle")))])])])]), _vm._v(" "), _c("div", {
    staticClass: "setup-content"
  }, [_vm.error ? _c("div", {
    staticClass: "alert alert-error"
  }, [_c("svg", {
    attrs: {
      width: "20",
      height: "20",
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
  }), _vm._v(" "), _c("line", {
    attrs: {
      x1: "12",
      y1: "8",
      x2: "12",
      y2: "12"
    }
  }), _vm._v(" "), _c("line", {
    attrs: {
      x1: "12",
      y1: "16",
      x2: "12.01",
      y2: "16"
    }
  })]), _vm._v(" "), _c("span", [_vm._v(_vm._s(_vm.error))])]) : _vm._e(), _vm._v(" "), _c("div", {
    staticClass: "setup-card"
  }, [_c("div", {
    staticClass: "card-header"
  }, [_c("div", {
    staticClass: "header-top"
  }, [_c("h2", {
    staticClass: "card-title"
  }, [_c("svg", {
    attrs: {
      width: "24",
      height: "24",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      "stroke-width": "2"
    }
  }, [_c("path", {
    attrs: {
      d: "M12 1v22M1 12h22"
    }
  })]), _vm._v("\n            " + _vm._s(_vm.$t("Generate_Access_Token")) + "\n          ")]), _vm._v(" "), _c("button", {
    staticClass: "btn btn-generate",
    attrs: {
      disabled: _vm.loading
    },
    on: {
      click: _vm.generate
    }
  }, [!_vm.loading ? _c("svg", {
    attrs: {
      width: "18",
      height: "18",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      "stroke-width": "2"
    }
  }, [_c("polyline", {
    attrs: {
      points: "23 4 23 10 17 10"
    }
  }), _vm._v(" "), _c("path", {
    attrs: {
      d: "M20.49 15a9 9 0 1 1-2-8.83"
    }
  })]) : _c("svg", {
    staticClass: "spinner-icon",
    attrs: {
      width: "18",
      height: "18",
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
  })]), _vm._v(" "), !_vm.loading ? _c("span", [_vm._v(_vm._s(_vm.$t("Generate_New_Token")))]) : _c("span", [_vm._v(_vm._s(_vm.$t("Generating")) + "…")])])]), _vm._v(" "), _c("p", {
    staticClass: "card-subtitle"
  }, [_vm._v(_vm._s(_vm.$t("Create_secure_token_info")))])]), _vm._v(" "), _c("div", {
    staticClass: "card-body"
  }, [_vm.url ? _c("div", {
    staticClass: "info-section url-section"
  }, [_c("div", {
    staticClass: "section-header"
  }, [_c("svg", {
    attrs: {
      width: "20",
      height: "20",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      "stroke-width": "2"
    }
  }, [_c("path", {
    attrs: {
      d: "M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"
    }
  }), _vm._v(" "), _c("path", {
    attrs: {
      d: "M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"
    }
  })]), _vm._v(" "), _c("label", [_vm._v(_vm._s(_vm.$t("Display_URL")))])]), _vm._v(" "), _c("div", {
    staticClass: "url-input-wrapper"
  }, [_c("input", {
    staticClass: "url-input",
    attrs: {
      readonly: "",
      placeholder: _vm.$t("Display_URL_Placeholder")
    },
    domProps: {
      value: _vm.url
    },
    on: {
      focus: function focus($event) {
        return _vm.select($event);
      }
    }
  }), _vm._v(" "), _c("button", {
    staticClass: "btn btn-copy",
    attrs: {
      title: _vm.$t("Copy_to_clipboard")
    },
    on: {
      click: function click($event) {
        return _vm.copy(_vm.url);
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
  }, [_c("path", {
    attrs: {
      d: "M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"
    }
  }), _vm._v(" "), _c("rect", {
    attrs: {
      x: "8",
      y: "2",
      width: "8",
      height: "4",
      rx: "1",
      ry: "1"
    }
  })]), _vm._v("\n              " + _vm._s(_vm.$t("Copy")) + "\n            ")])]), _vm._v(" "), _c("p", {
    staticClass: "url-hint"
  }, [_vm._v(_vm._s(_vm.$t("Click_input_to_select_then_use_copy_button")))])]) : _vm._e(), _vm._v(" "), _vm.url ? _c("div", {
    staticClass: "info-section multi-screen-section"
  }, [_c("div", {
    staticClass: "section-header"
  }, [_c("svg", {
    attrs: {
      width: "20",
      height: "20",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      "stroke-width": "2"
    }
  }, [_c("rect", {
    attrs: {
      x: "2",
      y: "3",
      width: "20",
      height: "14",
      rx: "2",
      ry: "2"
    }
  }), _vm._v(" "), _c("line", {
    attrs: {
      x1: "8",
      y1: "21",
      x2: "16",
      y2: "21"
    }
  }), _vm._v(" "), _c("line", {
    attrs: {
      x1: "12",
      y1: "17",
      x2: "12",
      y2: "21"
    }
  })]), _vm._v(" "), _c("label", [_vm._v(_vm._s(_vm.$t("Multiple_Displays")))])]), _vm._v(" "), _c("p", {
    staticClass: "multi-screen-hint"
  }, [_vm._v(_vm._s(_vm.$t("Use_one_URL_per_screen_In_POS_select_matching_screen")))]), _vm._v(" "), _c("div", {
    staticClass: "screen-url-list"
  }, _vm._l(5, function (n) {
    return _c("div", {
      key: n,
      staticClass: "screen-url-row"
    }, [_c("span", {
      staticClass: "screen-label"
    }, [_vm._v(_vm._s(_vm.$t("Screen")) + " " + _vm._s(n))]), _vm._v(" "), _c("input", {
      staticClass: "url-input url-input-sm",
      attrs: {
        readonly: ""
      },
      domProps: {
        value: _vm.screenUrl(n)
      },
      on: {
        focus: function focus($event) {
          return _vm.select($event);
        }
      }
    }), _vm._v(" "), _c("button", {
      staticClass: "btn btn-copy btn-copy-sm",
      attrs: {
        type: "button",
        title: _vm.$t("Copy_to_clipboard")
      },
      on: {
        click: function click($event) {
          _vm.copy(_vm.screenUrl(n));
        }
      }
    }, [_vm._v("\n                " + _vm._s(_vm.$t("Copy")) + "\n              ")]), _vm._v(" "), _c("button", {
      staticClass: "btn btn-qr-icon",
      attrs: {
        type: "button",
        title: _vm.$t("Show_QR_Code")
      },
      on: {
        click: function click($event) {
          return _vm.openScreenQrModal(n);
        }
      }
    }, [_c("svg", {
      attrs: {
        width: "20",
        height: "20",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2"
      }
    }, [_c("rect", {
      attrs: {
        x: "3",
        y: "3",
        width: "7",
        height: "7"
      }
    }), _vm._v(" "), _c("rect", {
      attrs: {
        x: "14",
        y: "3",
        width: "7",
        height: "7"
      }
    }), _vm._v(" "), _c("rect", {
      attrs: {
        x: "14",
        y: "14",
        width: "7",
        height: "7"
      }
    }), _vm._v(" "), _c("rect", {
      attrs: {
        x: "3",
        y: "14",
        width: "7",
        height: "7"
      }
    })])])]);
  }), 0)]) : _vm._e(), _vm._v(" "), _vm.qrModalScreen !== null ? _c("div", {
    staticClass: "qr-modal-overlay",
    on: {
      click: function click($event) {
        if ($event.target !== $event.currentTarget) return null;
        return _vm.closeScreenQrModal.apply(null, arguments);
      }
    }
  }, [_c("div", {
    staticClass: "qr-modal-card"
  }, [_c("div", {
    staticClass: "qr-modal-header"
  }, [_c("h4", [_vm._v(_vm._s(_vm.$t("Screen")) + " " + _vm._s(_vm.qrModalScreen) + " – " + _vm._s(_vm.$t("QR_Code")))]), _vm._v(" "), _c("button", {
    staticClass: "btn btn-close-modal",
    attrs: {
      type: "button",
      title: _vm.$t("Close")
    },
    on: {
      click: _vm.closeScreenQrModal
    }
  }, [_c("svg", {
    attrs: {
      width: "24",
      height: "24",
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
  })])])]), _vm._v(" "), _c("div", {
    staticClass: "qr-modal-body"
  }, [_c("div", {
    ref: "qrModalContainer",
    staticClass: "qr-modal-container"
  }), _vm._v(" "), _c("p", {
    staticClass: "qr-modal-hint"
  }, [_vm._v(_vm._s(_vm.$t("Scan_QR_to_open_display")))])])])]) : _vm._e(), _vm._v(" "), _vm.url ? _c("div", {
    staticClass: "info-section qr-section"
  }, [_c("div", {
    staticClass: "section-header"
  }, [_c("svg", {
    attrs: {
      width: "20",
      height: "20",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      "stroke-width": "2"
    }
  }, [_c("rect", {
    attrs: {
      x: "3",
      y: "3",
      width: "7",
      height: "7"
    }
  }), _vm._v(" "), _c("rect", {
    attrs: {
      x: "14",
      y: "3",
      width: "7",
      height: "7"
    }
  }), _vm._v(" "), _c("rect", {
    attrs: {
      x: "14",
      y: "14",
      width: "7",
      height: "7"
    }
  }), _vm._v(" "), _c("rect", {
    attrs: {
      x: "3",
      y: "14",
      width: "7",
      height: "7"
    }
  })]), _vm._v(" "), _c("label", [_vm._v(_vm._s(_vm.$t("QR_Code")))])]), _vm._v(" "), _c("p", {
    staticClass: "qr-description"
  }, [_vm._v(_vm._s(_vm.$t("Scan_QR_to_open_display")))]), _vm._v(" "), _c("div", {
    staticClass: "qr-container"
  }, [_vm.qr ? _c("div", {
    staticClass: "qr-html",
    domProps: {
      innerHTML: _vm._s(_vm.qr)
    }
  }) : _c("div", {
    ref: "qrcanvas",
    staticClass: "qr-canvas-container"
  })])]) : _vm._e(), _vm._v(" "), !_vm.url ? _c("div", {
    staticClass: "empty-state"
  }, [_c("svg", {
    attrs: {
      width: "64",
      height: "64",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      "stroke-width": "1.5"
    }
  }, [_c("path", {
    attrs: {
      d: "M12 1v22M1 12h22"
    }
  })]), _vm._v(" "), _c("h3", [_vm._v(_vm._s(_vm.$t("No_Token_Generated_Yet")))]), _vm._v(" "), _c("p", [_vm._v(_vm._s(_vm.$t("Click_Generate_New_Token_to_create")))])]) : _vm._e()])]), _vm._v(" "), _c("div", {
    staticClass: "info-cards-grid"
  }, [_c("div", {
    staticClass: "info-card"
  }, [_c("div", {
    staticClass: "card-icon"
  }, [_c("svg", {
    attrs: {
      width: "32",
      height: "32",
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
  }), _vm._v(" "), _c("line", {
    attrs: {
      x1: "12",
      y1: "16",
      x2: "12",
      y2: "12"
    }
  }), _vm._v(" "), _c("line", {
    attrs: {
      x1: "12",
      y1: "8",
      x2: "12.01",
      y2: "8"
    }
  })])]), _vm._v(" "), _c("h3", [_vm._v(_vm._s(_vm.$t("How_to_Use")))]), _vm._v(" "), _c("ul", [_c("li", [_vm._v(_vm._s(_vm.$t("Open_URL_on_display_device")))]), _vm._v(" "), _c("li", [_vm._v(_vm._s(_vm.$t("Items_appear_realtime")))]), _vm._v(" "), _c("li", [_vm._v(_vm._s(_vm.$t("Display_updates_automatically")))]), _vm._v(" "), _c("li", [_vm._v(_vm._s(_vm.$t("Perfect_for_showing_purchases")))])])]), _vm._v(" "), _c("div", {
    staticClass: "info-card"
  }, [_c("div", {
    staticClass: "card-icon"
  }, [_c("svg", {
    attrs: {
      width: "32",
      height: "32",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      "stroke-width": "2"
    }
  }, [_c("path", {
    attrs: {
      d: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"
    }
  })])]), _vm._v(" "), _c("h3", [_vm._v(_vm._s(_vm.$t("Security")))]), _vm._v(" "), _c("ul", [_c("li", [_vm._v(_vm._s(_vm.$t("Tokens_secure_time_limited")))]), _vm._v(" "), _c("li", [_vm._v(_vm._s(_vm.$t("Token_expires_24h")))]), _vm._v(" "), _c("li", [_vm._v(_vm._s(_vm.$t("Generate_new_tokens_anytime")))]), _vm._v(" "), _c("li", [_vm._v(_vm._s(_vm.$t("Old_tokens_invalid_immediately")))])])]), _vm._v(" "), _c("div", {
    staticClass: "info-card"
  }, [_c("div", {
    staticClass: "card-icon"
  }, [_c("svg", {
    attrs: {
      width: "32",
      height: "32",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      "stroke-width": "2"
    }
  }, [_c("path", {
    attrs: {
      d: "M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
    }
  })])]), _vm._v(" "), _c("h3", [_vm._v(_vm._s(_vm.$t("Features")))]), _vm._v(" "), _c("ul", [_c("li", [_vm._v(_vm._s(_vm.$t("Real_time_item_updates")))]), _vm._v(" "), _c("li", [_vm._v(_vm._s(_vm.$t("Automatic_cart_sync")))]), _vm._v(" "), _c("li", [_vm._v(_vm._s(_vm.$t("Theme_support_dark_light")))]), _vm._v(" "), _c("li", [_vm._v(_vm._s(_vm.$t("Professional_responsive_design")))])])])]), _vm._v(" "), _c("div", {
    staticClass: "troubleshooting-card"
  }, [_c("h3", [_c("svg", {
    attrs: {
      width: "20",
      height: "20",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      "stroke-width": "2"
    }
  }, [_c("path", {
    attrs: {
      d: "M18.36 6.64a9 9 0 1 1-12.73 0"
    }
  }), _vm._v(" "), _c("line", {
    attrs: {
      x1: "12",
      y1: "2",
      x2: "12",
      y2: "12"
    }
  })]), _vm._v("\n        " + _vm._s(_vm.$t("Troubleshooting")) + "\n      ")]), _vm._v(" "), _c("div", {
    staticClass: "troubleshooting-items"
  }, [_c("div", {
    staticClass: "troubleshooting-item"
  }, [_c("span", {
    staticClass: "question"
  }, [_vm._v(_vm._s(_vm.$t("Display_not_connecting_Q")))]), _vm._v(" "), _c("span", {
    staticClass: "answer"
  }, [_vm._v(_vm._s(_vm.$t("Display_not_connecting_A")))])]), _vm._v(" "), _c("div", {
    staticClass: "troubleshooting-item"
  }, [_c("span", {
    staticClass: "question"
  }, [_vm._v(_vm._s(_vm.$t("Items_not_updating_Q")))]), _vm._v(" "), _c("span", {
    staticClass: "answer"
  }, [_vm._v(_vm._s(_vm.$t("Items_not_updating_A")))])]), _vm._v(" "), _c("div", {
    staticClass: "troubleshooting-item"
  }, [_c("span", {
    staticClass: "question"
  }, [_vm._v(_vm._s(_vm.$t("Token_expired_Q")))]), _vm._v(" "), _c("span", {
    staticClass: "answer"
  }, [_vm._v(_vm._s(_vm.$t("Token_expired_A")))])])])])])]);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-8.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-8.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/customer/CustomerDisplaySetup.vue?vue&type=style&index=0&id=afaeea06&scoped=true&lang=css":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-8.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-8.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/customer/CustomerDisplaySetup.vue?vue&type=style&index=0&id=afaeea06&scoped=true&lang=css ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, "\n/* ================== ROOT STYLES ================== */\n.customer-display-setup-container[data-v-afaeea06] {\n  background: linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%);\n  min-height: 100vh;\n  padding: 40px 20px;\n  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\n}\n\n/* ================== HEADER ================== */\n.setup-header[data-v-afaeea06] {\n  max-width: 1200px;\n  margin: 0 auto 40px;\n  padding: 40px;\n  background: linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%);\n  border-radius: 20px;\n  color: white;\n  box-shadow: 0 20px 60px rgba(59, 130, 246, 0.2);\n  animation: slideInDown-afaeea06 0.6s cubic-bezier(0.34, 1.56, 0.64, 1);\n}\n.header-content[data-v-afaeea06] {\n  display: flex;\n  align-items: center;\n  gap: 24px;\n}\n.header-icon[data-v-afaeea06] {\n  flex-shrink: 0;\n  width: 80px;\n  height: 80px;\n  background: rgba(255, 255, 255, 0.2);\n  border-radius: 16px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  backdrop-filter: blur(10px);\n}\n.header-text[data-v-afaeea06] {\n  flex: 1;\n}\n.header-title[data-v-afaeea06] {\n  font-size: 32px;\n  font-weight: 700;\n  margin: 0 0 8px 0;\n}\n.header-subtitle[data-v-afaeea06] {\n  font-size: 16px;\n  margin: 0;\n  opacity: 0.9;\n}\n\n/* ================== CONTENT ================== */\n.setup-content[data-v-afaeea06] {\n  max-width: 1200px;\n  margin: 0 auto;\n}\n\n/* Alert */\n.alert[data-v-afaeea06] {\n  padding: 16px 20px;\n  border-radius: 12px;\n  margin-bottom: 24px;\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  font-size: 15px;\n  animation: slideInDown-afaeea06 0.4s ease-out;\n}\n.alert-error[data-v-afaeea06] {\n  background: linear-gradient(135deg, rgba(239, 68, 68, 0.1) 0%, rgba(239, 68, 68, 0.05) 100%);\n  border: 1px solid rgba(239, 68, 68, 0.3);\n  color: #dc2626;\n}\n\n/* Setup Card */\n.setup-card[data-v-afaeea06] {\n  background: white;\n  border-radius: 16px;\n  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);\n  margin-bottom: 32px;\n  overflow: hidden;\n  animation: slideInUp-afaeea06 0.6s cubic-bezier(0.34, 1.56, 0.64, 1);\n}\n.card-header[data-v-afaeea06] {\n  padding: 32px;\n  background: linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%);\n  border-bottom: 1px solid #e2e8f0;\n}\n.header-top[data-v-afaeea06] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 16px;\n  gap: 16px;\n}\n.card-title[data-v-afaeea06] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  font-size: 22px;\n  font-weight: 700;\n  margin: 0;\n  color: #1e293b;\n}\n.card-title svg[data-v-afaeea06] {\n  color: #3b82f6;\n}\n.card-subtitle[data-v-afaeea06] {\n  font-size: 14px;\n  color: #64748b;\n  margin: 0;\n  line-height: 1.5;\n}\n.btn-generate[data-v-afaeea06] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 10px 20px;\n  background: linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%);\n  color: white;\n  border: none;\n  border-radius: 10px;\n  font-size: 14px;\n  font-weight: 600;\n  cursor: pointer;\n  transition: all 0.3s ease;\n  white-space: nowrap;\n}\n.btn-generate[data-v-afaeea06]:hover:not(:disabled) {\n  transform: translateY(-2px);\n  box-shadow: 0 8px 20px rgba(59, 130, 246, 0.3);\n}\n.btn-generate[data-v-afaeea06]:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n.spinner-icon[data-v-afaeea06] {\n  animation: spin-afaeea06 1s linear infinite;\n}\n.card-body[data-v-afaeea06] {\n  padding: 32px;\n  display: flex;\n  flex-direction: column;\n  gap: 32px;\n}\n\n/* Sections */\n.info-section[data-v-afaeea06] {\n  animation: fadeIn-afaeea06 0.5s ease-out;\n}\n.section-header[data-v-afaeea06] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  margin-bottom: 16px;\n}\n.section-header svg[data-v-afaeea06] {\n  color: #3b82f6;\n  flex-shrink: 0;\n}\n.section-header label[data-v-afaeea06] {\n  font-size: 16px;\n  font-weight: 600;\n  color: #1e293b;\n  margin: 0;\n}\n\n/* URL Section */\n.url-input-wrapper[data-v-afaeea06] {\n  display: flex;\n  gap: 12px;\n  margin-bottom: 12px;\n}\n.url-input[data-v-afaeea06] {\n  flex: 1;\n  padding: 12px 16px;\n  border: 2px solid #e2e8f0;\n  border-radius: 10px;\n  font-size: 14px;\n  font-family: 'Monaco', 'Menlo', 'Ubuntu Mono', monospace;\n  background: #f8fafc;\n  color: #1e293b;\n  transition: all 0.3s ease;\n}\n.url-input[data-v-afaeea06]:focus {\n  outline: none;\n  border-color: #3b82f6;\n  background: white;\n  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);\n}\n.btn-copy[data-v-afaeea06] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 10px 16px;\n  background: white;\n  border: 2px solid #e2e8f0;\n  border-radius: 10px;\n  color: #1e293b;\n  font-weight: 600;\n  font-size: 14px;\n  cursor: pointer;\n  transition: all 0.3s ease;\n  white-space: nowrap;\n}\n.btn-copy[data-v-afaeea06]:hover {\n  border-color: #3b82f6;\n  color: #3b82f6;\n  box-shadow: 0 4px 12px rgba(59, 130, 246, 0.1);\n}\n.url-hint[data-v-afaeea06] {\n  font-size: 13px;\n  color: #94a3b8;\n  margin: 0;\n}\n\n/* Multiple screens */\n.multi-screen-section[data-v-afaeea06] {\n  margin-top: 8px;\n}\n.multi-screen-hint[data-v-afaeea06] {\n  font-size: 13px;\n  color: #64748b;\n  margin: 0 0 16px 0;\n  line-height: 1.5;\n}\n.screen-url-list[data-v-afaeea06] {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n}\n.screen-url-row[data-v-afaeea06] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  flex-wrap: wrap;\n}\n.screen-url-row .screen-label[data-v-afaeea06] {\n  font-weight: 600;\n  color: #475569;\n  min-width: 72px;\n  font-size: 14px;\n}\n.screen-url-row .url-input-sm[data-v-afaeea06] {\n  flex: 1;\n  min-width: 180px;\n  padding: 8px 12px;\n  font-size: 13px;\n}\n.screen-url-row .btn-copy-sm[data-v-afaeea06] {\n  padding: 8px 12px;\n  font-size: 13px;\n}\n.btn-qr-icon[data-v-afaeea06] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  width: 40px;\n  height: 40px;\n  padding: 0;\n  border: 2px solid #e2e8f0;\n  border-radius: 10px;\n  background: #fff;\n  color: #3b82f6;\n  cursor: pointer;\n  transition: all 0.2s ease;\n  flex-shrink: 0;\n}\n.btn-qr-icon[data-v-afaeea06]:hover {\n  border-color: #3b82f6;\n  background: rgba(59, 130, 246, 0.08);\n  color: #2563eb;\n}\n\n/* QR modal (per-screen) */\n.qr-modal-overlay[data-v-afaeea06] {\n  position: fixed;\n  inset: 0;\n  background: rgba(15, 23, 42, 0.5);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 9999;\n  padding: 20px;\n  animation: fadeIn-afaeea06 0.2s ease-out;\n}\n.qr-modal-card[data-v-afaeea06] {\n  background: white;\n  border-radius: 16px;\n  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.15);\n  max-width: 360px;\n  width: 100%;\n  overflow: hidden;\n  animation: slideInUp-afaeea06 0.3s ease-out;\n}\n.qr-modal-header[data-v-afaeea06] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 16px 20px;\n  border-bottom: 1px solid #e2e8f0;\n}\n.qr-modal-header h4[data-v-afaeea06] {\n  margin: 0;\n  font-size: 18px;\n  font-weight: 600;\n  color: #1e293b;\n}\n.btn-close-modal[data-v-afaeea06] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  width: 40px;\n  height: 40px;\n  padding: 0;\n  border: none;\n  border-radius: 10px;\n  background: transparent;\n  color: #64748b;\n  cursor: pointer;\n  transition: all 0.2s ease;\n}\n.btn-close-modal[data-v-afaeea06]:hover {\n  background: #f1f5f9;\n  color: #1e293b;\n}\n.qr-modal-body[data-v-afaeea06] {\n  padding: 24px;\n  text-align: center;\n}\n.qr-modal-container[data-v-afaeea06] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  min-height: 200px;\n  margin-bottom: 12px;\n}\n.qr-modal-container canvas[data-v-afaeea06],\n.qr-modal-container img[data-v-afaeea06],\n.qr-modal-container table[data-v-afaeea06] {\n  margin: 0 auto;\n}\n.qr-modal-hint[data-v-afaeea06] {\n  font-size: 13px;\n  color: #64748b;\n  margin: 0;\n  line-height: 1.4;\n}\n\n/* QR Section */\n.qr-description[data-v-afaeea06] {\n  font-size: 14px;\n  color: #64748b;\n  margin: 0 0 20px 0;\n  line-height: 1.5;\n}\n.qr-container[data-v-afaeea06] {\n  display: flex;\n  justify-content: center;\n  padding: 24px;\n  background: linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%);\n  border-radius: 12px;\n  border: 2px dashed #cbd5e1;\n}\n.qr-html[data-v-afaeea06],\n.qr-canvas[data-v-afaeea06] {\n  max-width: 100%;\n  height: auto;\n  border-radius: 8px;\n}\n.qr-canvas[data-v-afaeea06] {\n  background: white;\n  border: 1px solid #e2e8f0;\n}\n\n/* QR Canvas Container */\n.qr-canvas-container[data-v-afaeea06] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  min-height: 250px;\n}\n\n/* Style for QRCode library generated content */\n.qr-canvas-container table[data-v-afaeea06] {\n  border-collapse: collapse;\n  margin: auto;\n  background: white;\n  padding: 10px;\n  border-radius: 8px;\n}\n.qr-canvas-container table tr[data-v-afaeea06],\n.qr-canvas-container table td[data-v-afaeea06] {\n  padding: 0;\n  margin: 0;\n}\n.qr-canvas-container img[data-v-afaeea06] {\n  border-radius: 8px;\n}\n\n/* Empty State */\n.empty-state[data-v-afaeea06] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 60px 20px;\n  text-align: center;\n  color: #94a3b8;\n}\n.empty-state svg[data-v-afaeea06] {\n  opacity: 0.3;\n  margin-bottom: 16px;\n}\n.empty-state h3[data-v-afaeea06] {\n  font-size: 18px;\n  font-weight: 600;\n  color: #475569;\n  margin: 0 0 8px 0;\n}\n.empty-state p[data-v-afaeea06] {\n  font-size: 14px;\n  margin: 0;\n}\n\n/* ================== INFO CARDS GRID ================== */\n.info-cards-grid[data-v-afaeea06] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));\n  gap: 24px;\n  margin-bottom: 32px;\n}\n.info-card[data-v-afaeea06] {\n  background: white;\n  border-radius: 16px;\n  padding: 28px;\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.06);\n  transition: all 0.3s ease;\n  animation: slideInUp-afaeea06 0.6s cubic-bezier(0.34, 1.56, 0.64, 1);\n}\n.info-card[data-v-afaeea06]:hover {\n  transform: translateY(-4px);\n  box-shadow: 0 12px 28px rgba(0, 0, 0, 0.1);\n}\n.card-icon[data-v-afaeea06] {\n  width: 56px;\n  height: 56px;\n  background: linear-gradient(135deg, rgba(59, 130, 246, 0.1) 0%, rgba(139, 92, 246, 0.05) 100%);\n  border-radius: 12px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: #3b82f6;\n  margin-bottom: 16px;\n}\n.info-card h3[data-v-afaeea06] {\n  font-size: 18px;\n  font-weight: 700;\n  color: #1e293b;\n  margin: 0 0 16px 0;\n}\n.info-card ul[data-v-afaeea06] {\n  list-style: none;\n  padding: 0;\n  margin: 0;\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n}\n.info-card li[data-v-afaeea06] {\n  font-size: 14px;\n  color: #64748b;\n  display: flex;\n  align-items: flex-start;\n  gap: 8px;\n  line-height: 1.5;\n}\n.info-card li[data-v-afaeea06]:before {\n  content: '✓';\n  color: #10b981;\n  font-weight: 700;\n  flex-shrink: 0;\n  margin-top: 2px;\n}\n\n/* ================== TROUBLESHOOTING ================== */\n.troubleshooting-card[data-v-afaeea06] {\n  background: white;\n  border-radius: 16px;\n  padding: 32px;\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.06);\n  animation: slideInUp-afaeea06 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) 0.1s both;\n}\n.troubleshooting-card h3[data-v-afaeea06] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  font-size: 20px;\n  font-weight: 700;\n  color: #1e293b;\n  margin: 0 0 24px 0;\n}\n.troubleshooting-card h3 svg[data-v-afaeea06] {\n  color: #3b82f6;\n}\n.troubleshooting-items[data-v-afaeea06] {\n  display: grid;\n  gap: 16px;\n}\n.troubleshooting-item[data-v-afaeea06] {\n  padding: 16px;\n  background: linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%);\n  border-radius: 12px;\n  border-left: 4px solid #3b82f6;\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\n.troubleshooting-item .question[data-v-afaeea06] {\n  font-weight: 600;\n  color: #1e293b;\n  font-size: 14px;\n}\n.troubleshooting-item .answer[data-v-afaeea06] {\n  font-size: 13px;\n  color: #64748b;\n  line-height: 1.5;\n}\n\n/* ================== ANIMATIONS ================== */\n@keyframes slideInDown-afaeea06 {\nfrom {\n    opacity: 0;\n    transform: translateY(-30px);\n}\nto {\n    opacity: 1;\n    transform: translateY(0);\n}\n}\n@keyframes slideInUp-afaeea06 {\nfrom {\n    opacity: 0;\n    transform: translateY(30px);\n}\nto {\n    opacity: 1;\n    transform: translateY(0);\n}\n}\n@keyframes fadeIn-afaeea06 {\nfrom {\n    opacity: 0;\n}\nto {\n    opacity: 1;\n}\n}\n@keyframes spin-afaeea06 {\nfrom {\n    transform: rotate(0deg);\n}\nto {\n    transform: rotate(360deg);\n}\n}\n@keyframes slideIn-afaeea06 {\nfrom {\n    opacity: 0;\n    transform: translateX(100px);\n}\nto {\n    opacity: 1;\n    transform: translateX(0);\n}\n}\n@keyframes fadeOut-afaeea06 {\nfrom {\n    opacity: 1;\n}\nto {\n    opacity: 0;\n}\n}\n\n/* ================== RESPONSIVE ================== */\n@media (max-width: 768px) {\n.customer-display-setup-container[data-v-afaeea06] {\n    padding: 20px 16px;\n}\n.setup-header[data-v-afaeea06] {\n    margin: 0 auto 24px;\n    padding: 24px;\n}\n.header-content[data-v-afaeea06] {\n    flex-direction: column;\n    text-align: center;\n    gap: 16px;\n}\n.header-icon[data-v-afaeea06] {\n    width: 64px;\n    height: 64px;\n}\n.header-title[data-v-afaeea06] {\n    font-size: 24px;\n}\n.header-subtitle[data-v-afaeea06] {\n    font-size: 14px;\n}\n.card-header[data-v-afaeea06] {\n    padding: 24px;\n}\n.header-top[data-v-afaeea06] {\n    flex-direction: column;\n    align-items: flex-start;\n}\n.card-body[data-v-afaeea06] {\n    padding: 24px;\n    gap: 24px;\n}\n.url-input-wrapper[data-v-afaeea06] {\n    flex-direction: column;\n}\n.btn-copy[data-v-afaeea06] {\n    width: 100%;\n    justify-content: center;\n}\n.troubleshooting-card[data-v-afaeea06] {\n    padding: 24px;\n}\n.info-cards-grid[data-v-afaeea06] {\n    grid-template-columns: 1fr;\n}\n}\n@media (max-width: 480px) {\n.customer-display-setup-container[data-v-afaeea06] {\n    padding: 16px 12px;\n}\n.setup-header[data-v-afaeea06] {\n    padding: 20px;\n    border-radius: 16px;\n}\n.header-icon[data-v-afaeea06] {\n    width: 56px;\n    height: 56px;\n}\n.header-title[data-v-afaeea06] {\n    font-size: 20px;\n}\n.card-title[data-v-afaeea06] {\n    font-size: 18px;\n}\n.card-header[data-v-afaeea06] {\n    padding: 20px;\n}\n.card-body[data-v-afaeea06] {\n    padding: 20px;\n}\n.btn-generate[data-v-afaeea06] {\n    padding: 8px 16px;\n    font-size: 13px;\n}\n}\n", ""]);
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

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-8.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-8.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/customer/CustomerDisplaySetup.vue?vue&type=style&index=0&id=afaeea06&scoped=true&lang=css":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-8.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-8.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/customer/CustomerDisplaySetup.vue?vue&type=style&index=0&id=afaeea06&scoped=true&lang=css ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_8_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_8_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CustomerDisplaySetup_vue_vue_type_style_index_0_id_afaeea06_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-8.use[1]!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-8.use[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./CustomerDisplaySetup.vue?vue&type=style&index=0&id=afaeea06&scoped=true&lang=css */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-8.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-8.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/customer/CustomerDisplaySetup.vue?vue&type=style&index=0&id=afaeea06&scoped=true&lang=css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_8_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_8_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CustomerDisplaySetup_vue_vue_type_style_index_0_id_afaeea06_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_8_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_8_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CustomerDisplaySetup_vue_vue_type_style_index_0_id_afaeea06_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

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

/***/ "./resources/src/views/app/pages/customer/CustomerDisplaySetup.vue":
/*!*************************************************************************!*\
  !*** ./resources/src/views/app/pages/customer/CustomerDisplaySetup.vue ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _CustomerDisplaySetup_vue_vue_type_template_id_afaeea06_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CustomerDisplaySetup.vue?vue&type=template&id=afaeea06&scoped=true */ "./resources/src/views/app/pages/customer/CustomerDisplaySetup.vue?vue&type=template&id=afaeea06&scoped=true");
/* harmony import */ var _CustomerDisplaySetup_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CustomerDisplaySetup.vue?vue&type=script&lang=js */ "./resources/src/views/app/pages/customer/CustomerDisplaySetup.vue?vue&type=script&lang=js");
/* harmony import */ var _CustomerDisplaySetup_vue_vue_type_style_index_0_id_afaeea06_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./CustomerDisplaySetup.vue?vue&type=style&index=0&id=afaeea06&scoped=true&lang=css */ "./resources/src/views/app/pages/customer/CustomerDisplaySetup.vue?vue&type=style&index=0&id=afaeea06&scoped=true&lang=css");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _CustomerDisplaySetup_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _CustomerDisplaySetup_vue_vue_type_template_id_afaeea06_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render,
  _CustomerDisplaySetup_vue_vue_type_template_id_afaeea06_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "afaeea06",
  null
  
)

/* hot reload */
if (false) // removed by dead control flow
{ var api; }
component.options.__file = "resources/src/views/app/pages/customer/CustomerDisplaySetup.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/src/views/app/pages/customer/CustomerDisplaySetup.vue?vue&type=script&lang=js":
/*!*************************************************************************************************!*\
  !*** ./resources/src/views/app/pages/customer/CustomerDisplaySetup.vue?vue&type=script&lang=js ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CustomerDisplaySetup_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./CustomerDisplaySetup.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/customer/CustomerDisplaySetup.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CustomerDisplaySetup_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/src/views/app/pages/customer/CustomerDisplaySetup.vue?vue&type=style&index=0&id=afaeea06&scoped=true&lang=css":
/*!*********************************************************************************************************************************!*\
  !*** ./resources/src/views/app/pages/customer/CustomerDisplaySetup.vue?vue&type=style&index=0&id=afaeea06&scoped=true&lang=css ***!
  \*********************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_8_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_8_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CustomerDisplaySetup_vue_vue_type_style_index_0_id_afaeea06_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/style-loader/dist/cjs.js!../../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-8.use[1]!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-8.use[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./CustomerDisplaySetup.vue?vue&type=style&index=0&id=afaeea06&scoped=true&lang=css */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-8.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-8.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/customer/CustomerDisplaySetup.vue?vue&type=style&index=0&id=afaeea06&scoped=true&lang=css");


/***/ }),

/***/ "./resources/src/views/app/pages/customer/CustomerDisplaySetup.vue?vue&type=template&id=afaeea06&scoped=true":
/*!*******************************************************************************************************************!*\
  !*** ./resources/src/views/app/pages/customer/CustomerDisplaySetup.vue?vue&type=template&id=afaeea06&scoped=true ***!
  \*******************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CustomerDisplaySetup_vue_vue_type_template_id_afaeea06_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CustomerDisplaySetup_vue_vue_type_template_id_afaeea06_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CustomerDisplaySetup_vue_vue_type_template_id_afaeea06_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./CustomerDisplaySetup.vue?vue&type=template&id=afaeea06&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/customer/CustomerDisplaySetup.vue?vue&type=template&id=afaeea06&scoped=true");


/***/ })

}]);