"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.llmService = void 0;
var _openai = _interopRequireDefault(require("openai"));
var _config = _interopRequireDefault(require("../config.js"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var LLMService = /*#__PURE__*/function () {
  function LLMService() {
    _classCallCheck(this, LLMService);
    this.openrouter = new _openai["default"]({
      baseURL: "https://openrouter.ai/api/v1",
      apiKey: _config["default"].openrouterApiKey,
      defaultHeaders: {
        "HTTP-Referer": _config["default"].appUrl || "http://localhost:3000",
        "X-Title": "Movida App"
      }
    });
    this.groq = new _openai["default"]({
      baseURL: "https://api.groq.com/openai/v1",
      apiKey: _config["default"].groqApiKey
    });
    this.currentProvider = 'openrouter';
  }
  return _createClass(LLMService, [{
    key: "generateWithFallback",
    value: function () {
      var _generateWithFallback = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(messages) {
        var _lastError;
        var options,
          _options$temperature,
          temperature,
          _options$max_tokens,
          max_tokens,
          providers,
          lastError,
          _i,
          _providers,
          provider,
          completion,
          _args = arguments;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              options = _args.length > 1 && _args[1] !== undefined ? _args[1] : {};
              _options$temperature = options.temperature, temperature = _options$temperature === void 0 ? 0.7 : _options$temperature, _options$max_tokens = options.max_tokens, max_tokens = _options$max_tokens === void 0 ? 1000 : _options$max_tokens;
              providers = [{
                name: 'groq-llama-3.3',
                client: this.groq,
                model: "llama-3.3-70b-versatile"
              }, {
                name: 'groq-llama-3.1',
                client: this.groq,
                model: "llama-3.1-8b-instant"
              }, {
                name: 'groq-gpt-oss-20b',
                client: this.groq,
                model: "openai/gpt-oss-20b"
              }, {
                name: 'groq-qwen3',
                client: this.groq,
                model: "qwen/qwen3-32b"
              }, {
                name: 'openrouter',
                client: this.openrouter,
                model: "meta-llama/llama-3.2-3b-instruct:free"
              }];
              lastError = null;
              _i = 0, _providers = providers;
            case 5:
              if (!(_i < _providers.length)) {
                _context.next = 31;
                break;
              }
              provider = _providers[_i];
              _context.prev = 7;
              console.log("Intentando generar con ".concat(provider.name, "..."));
              _context.next = 11;
              return provider.client.chat.completions.create({
                model: provider.model,
                messages: messages,
                temperature: 0.8,
                max_tokens: max_tokens
              });
            case 11:
              completion = _context.sent;
              console.log("\xC9xito con ".concat(provider.name));
              this.currentProvider = provider.name;
              return _context.abrupt("return", {
                success: true,
                content: completion.choices[0].message.content,
                model: completion.model,
                provider: provider.name
              });
            case 17:
              _context.prev = 17;
              _context.t0 = _context["catch"](7);
              console.error("Error con ".concat(provider.name, ":"), _context.t0.message);
              lastError = _context.t0;

              // Si es rate limit (429) o error de proveedor (402), continuar con el siguiente proveedor
              if (!(_context.t0.status === 429 || _context.t0.status === 402 || _context.t0.message && _context.t0.message.includes('rate-limited') || _context.t0.message && _context.t0.message.includes('rate limit') || _context.t0.message && _context.t0.message.includes('Provider returned error'))) {
                _context.next = 24;
                break;
              }
              console.log("".concat(provider.name, " tiene l\xEDmite o error, probando siguiente proveedor..."));
              return _context.abrupt("continue", 28);
            case 24:
              if (!(_context.t0.status === 404 || _context.t0.status === 400)) {
                _context.next = 27;
                break;
              }
              console.log("".concat(provider.name, " no disponible, probando siguiente proveedor..."));
              return _context.abrupt("continue", 28);
            case 27:
              throw _context.t0;
            case 28:
              _i++;
              _context.next = 5;
              break;
            case 31:
              return _context.abrupt("return", {
                success: false,
                error: 'Todos los proveedores de IA están temporalmente no disponibles',
                details: ((_lastError = lastError) === null || _lastError === void 0 ? void 0 : _lastError.message) || 'Rate limit en todos los proveedores',
                code: 429
              });
            case 32:
            case "end":
              return _context.stop();
          }
        }, _callee, this, [[7, 17]]);
      }));
      function generateWithFallback(_x) {
        return _generateWithFallback.apply(this, arguments);
      }
      return generateWithFallback;
    }()
  }, {
    key: "generateEnsemble",
    value: function () {
      var _generateEnsemble = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(messages) {
        var options,
          _options$max_tokens2,
          max_tokens,
          groqModels,
          promises,
          results,
          successfulResponses,
          _args3 = arguments;
        return _regeneratorRuntime().wrap(function _callee3$(_context3) {
          while (1) switch (_context3.prev = _context3.next) {
            case 0:
              options = _args3.length > 1 && _args3[1] !== undefined ? _args3[1] : {};
              _options$max_tokens2 = options.max_tokens, max_tokens = _options$max_tokens2 === void 0 ? 1500 : _options$max_tokens2;
              groqModels = [{
                name: 'Llama-3.3-70B',
                client: this.groq,
                model: "llama-3.3-70b-versatile"
              }, {
                name: 'Llama-3.1-8B',
                client: this.groq,
                model: "llama-3.1-8b-instant"
              }, {
                name: 'GPT-OSS-20B',
                client: this.groq,
                model: "openai/gpt-oss-20b"
              }, {
                name: 'Qwen3-32B',
                client: this.groq,
                model: "qwen/qwen3-32b"
              }];
              console.log('🚀 Ejecutando ensemble con 4 modelos en paralelo...');
              promises = groqModels.map( /*#__PURE__*/function () {
                var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(modelConfig) {
                  var completion;
                  return _regeneratorRuntime().wrap(function _callee2$(_context2) {
                    while (1) switch (_context2.prev = _context2.next) {
                      case 0:
                        _context2.prev = 0;
                        _context2.next = 3;
                        return modelConfig.client.chat.completions.create({
                          model: modelConfig.model,
                          messages: messages,
                          temperature: 0.8,
                          max_tokens: max_tokens
                        });
                      case 3:
                        completion = _context2.sent;
                        console.log("\u2705 ".concat(modelConfig.name, " respondi\xF3"));
                        return _context2.abrupt("return", {
                          success: true,
                          name: modelConfig.name,
                          content: completion.choices[0].message.content,
                          model: completion.model
                        });
                      case 8:
                        _context2.prev = 8;
                        _context2.t0 = _context2["catch"](0);
                        console.error("\u274C Error con ".concat(modelConfig.name, ":"), _context2.t0.message);
                        return _context2.abrupt("return", {
                          success: false,
                          name: modelConfig.name,
                          error: _context2.t0.message
                        });
                      case 12:
                      case "end":
                        return _context2.stop();
                    }
                  }, _callee2, null, [[0, 8]]);
                }));
                return function (_x3) {
                  return _ref.apply(this, arguments);
                };
              }());
              _context3.next = 7;
              return Promise.all(promises);
            case 7:
              results = _context3.sent;
              successfulResponses = results.filter(function (r) {
                return r.success;
              });
              if (!(successfulResponses.length === 0)) {
                _context3.next = 11;
                break;
              }
              return _context3.abrupt("return", {
                success: false,
                error: 'Ningún modelo pudo generar una respuesta',
                results: results
              });
            case 11:
              console.log("\uD83D\uDCCA ".concat(successfulResponses.length, "/4 modelos respondieron correctamente"));
              return _context3.abrupt("return", {
                success: true,
                results: successfulResponses,
                count: successfulResponses.length
              });
            case 13:
            case "end":
              return _context3.stop();
          }
        }, _callee3, this);
      }));
      function generateEnsemble(_x2) {
        return _generateEnsemble.apply(this, arguments);
      }
      return generateEnsemble;
    }()
  }]);
}();
var llmService = exports.llmService = new LLMService();