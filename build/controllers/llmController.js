"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateAction = exports.toggleAction = exports.registerCopiloto = exports.mejorarTexto = exports.loginCopiloto = exports.getUserConversations = exports.getUserActions = exports.getAllUserConversations = exports.generarContenidoVisita = exports.generarContenidoNoticia = exports.deleteAction = exports.createAction = exports.copilotoEmocional = void 0;
var _llmService = require("../services/llmService.js");
var _queries = _interopRequireDefault(require("../database/queries.js"));
var _connection = require("../database/connection.js");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
var loginCopiloto = exports.loginCopiloto = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(req, res) {
    var _req$body, email, password, pool, result, user;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          res.setHeader("Access-Control-Allow-Origin", "*");
          res.setHeader("Access-Control-Allow-Methods", "OPTIONS, POST, GET");
          res.setHeader("Access-Control-Allow-Headers", "Content-Type");
          _req$body = req.body, email = _req$body.email, password = _req$body.password;
          if (!(!email || !password)) {
            _context.next = 7;
            break;
          }
          return _context.abrupt("return", res.status(400).json({
            success: false,
            error: 'Email y contraseña son requeridos'
          }));
        case 7:
          _context.next = 9;
          return (0, _connection.getConnection)();
        case 9:
          pool = _context.sent;
          _context.next = 12;
          return pool.query(_queries["default"].copiloto_login, [email, password]);
        case 12:
          result = _context.sent;
          if (!(result.rows.length === 0)) {
            _context.next = 15;
            break;
          }
          return _context.abrupt("return", res.status(401).json({
            success: false,
            error: 'Credenciales inválidas'
          }));
        case 15:
          user = result.rows[0];
          res.json({
            success: true,
            data: {
              id: user.id,
              email: user.email,
              nombre: user.nombre,
              activo: user.activo
            }
          });
          _context.next = 23;
          break;
        case 19:
          _context.prev = 19;
          _context.t0 = _context["catch"](0);
          console.error('Error en loginCopiloto:', _context.t0);
          res.status(500).json({
            success: false,
            error: 'Error al iniciar sesión',
            message: _context.t0.message
          });
        case 23:
        case "end":
          return _context.stop();
      }
    }, _callee, null, [[0, 19]]);
  }));
  return function loginCopiloto(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();
var registerCopiloto = exports.registerCopiloto = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(req, res) {
    var _req$body2, email, password, nombre, pool, existingUser, result, user;
    return _regeneratorRuntime().wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          res.setHeader("Access-Control-Allow-Origin", "*");
          res.setHeader("Access-Control-Allow-Methods", "OPTIONS, POST, GET");
          res.setHeader("Access-Control-Allow-Headers", "Content-Type");
          _req$body2 = req.body, email = _req$body2.email, password = _req$body2.password, nombre = _req$body2.nombre;
          if (!(!email || !password || !nombre)) {
            _context2.next = 7;
            break;
          }
          return _context2.abrupt("return", res.status(400).json({
            success: false,
            error: 'Email, contraseña y nombre son requeridos'
          }));
        case 7:
          _context2.next = 9;
          return (0, _connection.getConnection)();
        case 9:
          pool = _context2.sent;
          _context2.next = 12;
          return pool.query(_queries["default"].copiloto_check_email, [email]);
        case 12:
          existingUser = _context2.sent;
          if (!(existingUser.rows.length > 0)) {
            _context2.next = 15;
            break;
          }
          return _context2.abrupt("return", res.status(400).json({
            success: false,
            error: 'El email ya está registrado'
          }));
        case 15:
          _context2.next = 17;
          return pool.query(_queries["default"].copiloto_register, [email, password, nombre]);
        case 17:
          result = _context2.sent;
          user = result.rows[0];
          res.json({
            success: true,
            data: {
              id: user.id,
              email: user.email,
              nombre: user.nombre,
              activo: user.activo
            }
          });
          _context2.next = 26;
          break;
        case 22:
          _context2.prev = 22;
          _context2.t0 = _context2["catch"](0);
          console.error('Error en registerCopiloto:', _context2.t0);
          res.status(500).json({
            success: false,
            error: 'Error al registrar usuario',
            message: _context2.t0.message
          });
        case 26:
        case "end":
          return _context2.stop();
      }
    }, _callee2, null, [[0, 22]]);
  }));
  return function registerCopiloto(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();
var getUserActions = exports.getUserActions = /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(req, res) {
    var userId, pool, result;
    return _regeneratorRuntime().wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          _context3.prev = 0;
          res.setHeader("Access-Control-Allow-Origin", "*");
          res.setHeader("Access-Control-Allow-Methods", "OPTIONS, POST, GET");
          res.setHeader("Access-Control-Allow-Headers", "Content-Type");
          userId = req.body.userId;
          if (userId) {
            _context3.next = 7;
            break;
          }
          return _context3.abrupt("return", res.status(400).json({
            success: false,
            error: 'userId es requerido'
          }));
        case 7:
          _context3.next = 9;
          return (0, _connection.getConnection)();
        case 9:
          pool = _context3.sent;
          _context3.next = 12;
          return pool.query(_queries["default"].copiloto_get_all_actions, [userId]);
        case 12:
          result = _context3.sent;
          res.json({
            success: true,
            data: result.rows
          });
          _context3.next = 20;
          break;
        case 16:
          _context3.prev = 16;
          _context3.t0 = _context3["catch"](0);
          console.error('Error en getUserActions:', _context3.t0);
          res.status(500).json({
            success: false,
            error: 'Error al obtener acciones',
            message: _context3.t0.message
          });
        case 20:
        case "end":
          return _context3.stop();
      }
    }, _callee3, null, [[0, 16]]);
  }));
  return function getUserActions(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();
var toggleAction = exports.toggleAction = /*#__PURE__*/function () {
  var _ref4 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4(req, res) {
    var _req$body3, actionId, userId, pool, result;
    return _regeneratorRuntime().wrap(function _callee4$(_context4) {
      while (1) switch (_context4.prev = _context4.next) {
        case 0:
          _context4.prev = 0;
          res.setHeader("Access-Control-Allow-Origin", "*");
          res.setHeader("Access-Control-Allow-Methods", "OPTIONS, POST, GET");
          res.setHeader("Access-Control-Allow-Headers", "Content-Type");
          _req$body3 = req.body, actionId = _req$body3.actionId, userId = _req$body3.userId;
          if (!(!actionId || !userId)) {
            _context4.next = 7;
            break;
          }
          return _context4.abrupt("return", res.status(400).json({
            success: false,
            error: 'actionId y userId son requeridos'
          }));
        case 7:
          _context4.next = 9;
          return (0, _connection.getConnection)();
        case 9:
          pool = _context4.sent;
          _context4.next = 12;
          return pool.query(_queries["default"].copiloto_toggle_action, [actionId, userId]);
        case 12:
          result = _context4.sent;
          if (!(result.rows.length === 0)) {
            _context4.next = 15;
            break;
          }
          return _context4.abrupt("return", res.status(404).json({
            success: false,
            error: 'Acción no encontrada'
          }));
        case 15:
          res.json({
            success: true,
            data: result.rows[0]
          });
          _context4.next = 22;
          break;
        case 18:
          _context4.prev = 18;
          _context4.t0 = _context4["catch"](0);
          console.error('Error en toggleAction:', _context4.t0);
          res.status(500).json({
            success: false,
            error: 'Error al actualizar acción',
            message: _context4.t0.message
          });
        case 22:
        case "end":
          return _context4.stop();
      }
    }, _callee4, null, [[0, 18]]);
  }));
  return function toggleAction(_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}();
var updateAction = exports.updateAction = /*#__PURE__*/function () {
  var _ref5 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5(req, res) {
    var _req$body4, actionId, userId, title, description, urgency, area, pool, result;
    return _regeneratorRuntime().wrap(function _callee5$(_context5) {
      while (1) switch (_context5.prev = _context5.next) {
        case 0:
          _context5.prev = 0;
          res.setHeader("Access-Control-Allow-Origin", "*");
          res.setHeader("Access-Control-Allow-Methods", "OPTIONS, POST, GET");
          res.setHeader("Access-Control-Allow-Headers", "Content-Type");
          _req$body4 = req.body, actionId = _req$body4.actionId, userId = _req$body4.userId, title = _req$body4.title, description = _req$body4.description, urgency = _req$body4.urgency, area = _req$body4.area;
          if (!(!actionId || !userId)) {
            _context5.next = 7;
            break;
          }
          return _context5.abrupt("return", res.status(400).json({
            success: false,
            error: 'actionId y userId son requeridos'
          }));
        case 7:
          _context5.next = 9;
          return (0, _connection.getConnection)();
        case 9:
          pool = _context5.sent;
          _context5.next = 12;
          return pool.query(_queries["default"].copiloto_update_action, [actionId, userId, title || null, description || null, urgency || null, area || null]);
        case 12:
          result = _context5.sent;
          if (!(result.rows.length === 0)) {
            _context5.next = 15;
            break;
          }
          return _context5.abrupt("return", res.status(404).json({
            success: false,
            error: 'Acción no encontrada'
          }));
        case 15:
          res.json({
            success: true,
            data: result.rows[0]
          });
          _context5.next = 22;
          break;
        case 18:
          _context5.prev = 18;
          _context5.t0 = _context5["catch"](0);
          console.error('Error en updateAction:', _context5.t0);
          res.status(500).json({
            success: false,
            error: 'Error al actualizar acción',
            message: _context5.t0.message
          });
        case 22:
        case "end":
          return _context5.stop();
      }
    }, _callee5, null, [[0, 18]]);
  }));
  return function updateAction(_x9, _x10) {
    return _ref5.apply(this, arguments);
  };
}();
var deleteAction = exports.deleteAction = /*#__PURE__*/function () {
  var _ref6 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee6(req, res) {
    var _req$body5, actionId, userId, pool, result;
    return _regeneratorRuntime().wrap(function _callee6$(_context6) {
      while (1) switch (_context6.prev = _context6.next) {
        case 0:
          _context6.prev = 0;
          res.setHeader("Access-Control-Allow-Origin", "*");
          res.setHeader("Access-Control-Allow-Methods", "OPTIONS, POST, GET");
          res.setHeader("Access-Control-Allow-Headers", "Content-Type");
          _req$body5 = req.body, actionId = _req$body5.actionId, userId = _req$body5.userId;
          if (!(!actionId || !userId)) {
            _context6.next = 7;
            break;
          }
          return _context6.abrupt("return", res.status(400).json({
            success: false,
            error: 'actionId y userId son requeridos'
          }));
        case 7:
          _context6.next = 9;
          return (0, _connection.getConnection)();
        case 9:
          pool = _context6.sent;
          _context6.next = 12;
          return pool.query(_queries["default"].copiloto_delete_action, [actionId, userId]);
        case 12:
          result = _context6.sent;
          if (!(result.rowCount === 0)) {
            _context6.next = 15;
            break;
          }
          return _context6.abrupt("return", res.status(404).json({
            success: false,
            error: 'Acción no encontrada'
          }));
        case 15:
          res.json({
            success: true,
            message: 'Acción eliminada correctamente'
          });
          _context6.next = 22;
          break;
        case 18:
          _context6.prev = 18;
          _context6.t0 = _context6["catch"](0);
          console.error('Error en deleteAction:', _context6.t0);
          res.status(500).json({
            success: false,
            error: 'Error al eliminar acción',
            message: _context6.t0.message
          });
        case 22:
        case "end":
          return _context6.stop();
      }
    }, _callee6, null, [[0, 18]]);
  }));
  return function deleteAction(_x11, _x12) {
    return _ref6.apply(this, arguments);
  };
}();
var createAction = exports.createAction = /*#__PURE__*/function () {
  var _ref7 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee7(req, res) {
    var _req$body6, userId, area, title, description, urgency, pool, result;
    return _regeneratorRuntime().wrap(function _callee7$(_context7) {
      while (1) switch (_context7.prev = _context7.next) {
        case 0:
          _context7.prev = 0;
          res.setHeader("Access-Control-Allow-Origin", "*");
          res.setHeader("Access-Control-Allow-Methods", "OPTIONS, POST, GET");
          res.setHeader("Access-Control-Allow-Headers", "Content-Type");
          _req$body6 = req.body, userId = _req$body6.userId, area = _req$body6.area, title = _req$body6.title, description = _req$body6.description, urgency = _req$body6.urgency;
          if (!(!userId || !title)) {
            _context7.next = 7;
            break;
          }
          return _context7.abrupt("return", res.status(400).json({
            success: false,
            error: 'userId y title son requeridos'
          }));
        case 7:
          _context7.next = 9;
          return (0, _connection.getConnection)();
        case 9:
          pool = _context7.sent;
          _context7.next = 12;
          return pool.query(_queries["default"].copiloto_save_action, [userId, area || 'General', title, description || '', urgency || 'esta_semana']);
        case 12:
          result = _context7.sent;
          res.json({
            success: true,
            data: result.rows[0]
          });
          _context7.next = 20;
          break;
        case 16:
          _context7.prev = 16;
          _context7.t0 = _context7["catch"](0);
          console.error('Error en createAction:', _context7.t0);
          res.status(500).json({
            success: false,
            error: 'Error al crear acción',
            message: _context7.t0.message
          });
        case 20:
        case "end":
          return _context7.stop();
      }
    }, _callee7, null, [[0, 16]]);
  }));
  return function createAction(_x13, _x14) {
    return _ref7.apply(this, arguments);
  };
}();
var getUserConversations = exports.getUserConversations = /*#__PURE__*/function () {
  var _ref8 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee8(req, res) {
    var _req$body7, userId, area, pool, result;
    return _regeneratorRuntime().wrap(function _callee8$(_context8) {
      while (1) switch (_context8.prev = _context8.next) {
        case 0:
          _context8.prev = 0;
          res.setHeader("Access-Control-Allow-Origin", "*");
          res.setHeader("Access-Control-Allow-Methods", "OPTIONS, POST, GET");
          res.setHeader("Access-Control-Allow-Headers", "Content-Type");
          _req$body7 = req.body, userId = _req$body7.userId, area = _req$body7.area;
          if (!(!userId || !area)) {
            _context8.next = 7;
            break;
          }
          return _context8.abrupt("return", res.status(400).json({
            success: false,
            error: 'userId y area son requeridos'
          }));
        case 7:
          _context8.next = 9;
          return (0, _connection.getConnection)();
        case 9:
          pool = _context8.sent;
          _context8.next = 12;
          return pool.query(_queries["default"].copiloto_get_conversations_by_area, [userId, area]);
        case 12:
          result = _context8.sent;
          res.json({
            success: true,
            data: result.rows
          });
          _context8.next = 20;
          break;
        case 16:
          _context8.prev = 16;
          _context8.t0 = _context8["catch"](0);
          console.error('Error en getUserConversations:', _context8.t0);
          res.status(500).json({
            success: false,
            error: 'Error al obtener conversaciones',
            message: _context8.t0.message
          });
        case 20:
        case "end":
          return _context8.stop();
      }
    }, _callee8, null, [[0, 16]]);
  }));
  return function getUserConversations(_x15, _x16) {
    return _ref8.apply(this, arguments);
  };
}();
var getAllUserConversations = exports.getAllUserConversations = /*#__PURE__*/function () {
  var _ref9 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee9(req, res) {
    var userId, pool, result, conversationsByArea;
    return _regeneratorRuntime().wrap(function _callee9$(_context9) {
      while (1) switch (_context9.prev = _context9.next) {
        case 0:
          _context9.prev = 0;
          res.setHeader("Access-Control-Allow-Origin", "*");
          res.setHeader("Access-Control-Allow-Methods", "OPTIONS, POST, GET");
          res.setHeader("Access-Control-Allow-Headers", "Content-Type");
          userId = req.body.userId;
          if (userId) {
            _context9.next = 7;
            break;
          }
          return _context9.abrupt("return", res.status(400).json({
            success: false,
            error: 'userId es requerido'
          }));
        case 7:
          _context9.next = 9;
          return (0, _connection.getConnection)();
        case 9:
          pool = _context9.sent;
          _context9.next = 12;
          return pool.query(_queries["default"].copiloto_get_all_conversations, [userId]);
        case 12:
          result = _context9.sent;
          conversationsByArea = {};
          result.rows.forEach(function (msg) {
            if (!conversationsByArea[msg.area]) {
              conversationsByArea[msg.area] = [];
            }
            conversationsByArea[msg.area].push(msg);
          });
          res.json({
            success: true,
            data: conversationsByArea
          });
          _context9.next = 22;
          break;
        case 18:
          _context9.prev = 18;
          _context9.t0 = _context9["catch"](0);
          console.error('Error en getAllUserConversations:', _context9.t0);
          res.status(500).json({
            success: false,
            error: 'Error al obtener conversaciones',
            message: _context9.t0.message
          });
        case 22:
        case "end":
          return _context9.stop();
      }
    }, _callee9, null, [[0, 18]]);
  }));
  return function getAllUserConversations(_x17, _x18) {
    return _ref9.apply(this, arguments);
  };
}();
var generarContenidoVisita = exports.generarContenidoVisita = /*#__PURE__*/function () {
  var _ref10 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee10(req, res) {
    var _req$body8, fecha, horaInicio, horaFin, actividad, tipo, estado, pais, comentario, _req$body8$fotos, fotos, systemPrompt, userPrompt, messages, result, text, contenidoGenerado, jsonMatch;
    return _regeneratorRuntime().wrap(function _callee10$(_context10) {
      while (1) switch (_context10.prev = _context10.next) {
        case 0:
          _context10.prev = 0;
          res.setHeader("Access-Control-Allow-Origin", "*");
          res.setHeader("Access-Control-Allow-Methods", "OPTIONS, POST, GET");
          res.setHeader("Access-Control-Allow-Headers", "Content-Type");
          _req$body8 = req.body, fecha = _req$body8.fecha, horaInicio = _req$body8.horaInicio, horaFin = _req$body8.horaFin, actividad = _req$body8.actividad, tipo = _req$body8.tipo, estado = _req$body8.estado, pais = _req$body8.pais, comentario = _req$body8.comentario, _req$body8$fotos = _req$body8.fotos, fotos = _req$body8$fotos === void 0 ? [] : _req$body8$fotos;
          systemPrompt = "Eres un redactor profesional de boletines informativos para una organizaci\xF3n.\nTu tarea es convertir informaci\xF3n de visitas en textos profesionales y atractivos para boletines.\nEscribe en espa\xF1ol de manera profesional pero cercana.";
          userPrompt = "DATOS DE LA VISITA:\n- Fecha: ".concat(fecha, "\n- Hora: ").concat(horaInicio, " a ").concat(horaFin, "\n- Actividad: ").concat(actividad, "\n- Tipo: ").concat(tipo, "\n- Estado: ").concat(estado, "\n- Pa\xEDs: ").concat(pais, "\n- Comentarios adicionales: ").concat(comentario || 'Ninguno', "\n").concat(fotos.length > 0 ? "- Fotos disponibles: ".concat(fotos.length, " fotos") : '', "\n\nINSTRUCCIONES:\n1. Crea un t\xEDtulo atractivo para la noticia\n2. Desarrolla el contenido en 2-3 p\xE1rrafos profesionales\n3. Destaca la importancia de la actividad\n4. Si hay fotos, menciona que se pueden ver en la galer\xEDa\n5. Incluye una conclusi\xF3n positiva\n\nRESPONDE \xDANICAMENTE CON UN JSON v\xE1lido:\n{\n    \"titulo\": \"T\xEDtulo de la noticia\",\n    \"contenido\": \"Texto completo formateado\",\n    \"resumen\": \"Resumen corto\",\n    \"categoria\": \"Categor\xEDa\"\n}");
          messages = [{
            role: "system",
            content: systemPrompt
          }, {
            role: "user",
            content: userPrompt
          }];
          _context10.next = 10;
          return _llmService.llmService.generateWithFallback(messages, {
            temperature: 0.7,
            max_tokens: 1000
          });
        case 10:
          result = _context10.sent;
          if (result.success) {
            _context10.next = 13;
            break;
          }
          return _context10.abrupt("return", res.status(429).json({
            success: false,
            error: result.error,
            message: result.details,
            suggestion: 'Por favor, intenta de nuevo en unos minutos o contacta al administrador'
          }));
        case 13:
          text = result.content;
          _context10.prev = 14;
          jsonMatch = text.match(/\{[\s\S]*\}/);
          if (!jsonMatch) {
            _context10.next = 20;
            break;
          }
          contenidoGenerado = JSON.parse(jsonMatch[0]);
          _context10.next = 21;
          break;
        case 20:
          throw new Error('No se encontró JSON válido');
        case 21:
          _context10.next = 27;
          break;
        case 23:
          _context10.prev = 23;
          _context10.t0 = _context10["catch"](14);
          console.error('Error parseando respuesta:', _context10.t0);
          contenidoGenerado = {
            titulo: "Noticia generada",
            contenido: text,
            resumen: "Contenido generado automáticamente",
            categoria: tipo
          };
        case 27:
          res.json({
            success: true,
            data: contenidoGenerado,
            modelo: result.model,
            provider: result.provider,
            fechaGeneracion: new Date().toISOString()
          });
          _context10.next = 34;
          break;
        case 30:
          _context10.prev = 30;
          _context10.t1 = _context10["catch"](0);
          console.error('Error en generarContenidoVisita:', _context10.t1);
          res.status(500).json({
            success: false,
            error: 'Error al generar contenido con IA',
            message: _context10.t1.message
          });
        case 34:
        case "end":
          return _context10.stop();
      }
    }, _callee10, null, [[0, 30], [14, 23]]);
  }));
  return function generarContenidoVisita(_x19, _x20) {
    return _ref10.apply(this, arguments);
  };
}();
var generarContenidoNoticia = exports.generarContenidoNoticia = /*#__PURE__*/function () {
  var _ref11 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee11(req, res) {
    var _req$body9, tituloBase, descripcion, _req$body9$palabrasCl, palabrasClave, _req$body9$tono, tono, _req$body9$longitud, longitud, systemPrompt, userPrompt, messages, result, text, contenidoGenerado, jsonMatch;
    return _regeneratorRuntime().wrap(function _callee11$(_context11) {
      while (1) switch (_context11.prev = _context11.next) {
        case 0:
          _context11.prev = 0;
          res.setHeader("Access-Control-Allow-Origin", "*");
          res.setHeader("Access-Control-Allow-Methods", "OPTIONS, POST, GET");
          res.setHeader("Access-Control-Allow-Headers", "Content-Type");
          _req$body9 = req.body, tituloBase = _req$body9.tituloBase, descripcion = _req$body9.descripcion, _req$body9$palabrasCl = _req$body9.palabrasClave, palabrasClave = _req$body9$palabrasCl === void 0 ? [] : _req$body9$palabrasCl, _req$body9$tono = _req$body9.tono, tono = _req$body9$tono === void 0 ? 'profesional' : _req$body9$tono, _req$body9$longitud = _req$body9.longitud, longitud = _req$body9$longitud === void 0 ? 'media' : _req$body9$longitud;
          systemPrompt = "Eres un redactor experto en comunicaciones institucionales.\nGenera noticias completas y profesionales en espa\xF1ol.";
          userPrompt = "INFORMACI\xD3N BASE:\n- T\xEDtulo sugerido: ".concat(tituloBase, "\n- Descripci\xF3n: ").concat(descripcion, "\n- Palabras clave: ").concat(palabrasClave.join(', '), "\n- Tono: ").concat(tono, "\n- Longitud: ").concat(longitud, "\n\nREQUISITOS:\n1. Crea t\xEDtulo impactante y subt\xEDtulo\n2. Escribe cuerpo con introducci\xF3n, desarrollo y conclusi\xF3n\n3. Usa tono ").concat(tono, "\n4. Longitud: ").concat(longitud === 'corta' ? '150-200 palabras' : longitud === 'larga' ? '400-500 palabras' : '250-350 palabras', "\n5. Incluye hashtags relevantes\n\nRESPONDE CON JSON:\n{\n    \"titulo\": \"T\xEDtulo final\",\n    \"subtitulo\": \"Subt\xEDtulo\",\n    \"cuerpo\": \"Texto completo\",\n    \"hashtags\": [\"#tag1\", \"#tag2\"],\n    \"categoria\": \"Categor\xEDa\"\n}");
          messages = [{
            role: "system",
            content: systemPrompt
          }, {
            role: "user",
            content: userPrompt
          }];
          _context11.next = 10;
          return _llmService.llmService.generateWithFallback(messages, {
            temperature: 0.7,
            max_tokens: 1500
          });
        case 10:
          result = _context11.sent;
          if (result.success) {
            _context11.next = 13;
            break;
          }
          return _context11.abrupt("return", res.status(429).json({
            success: false,
            error: result.error,
            message: result.details
          }));
        case 13:
          text = result.content;
          _context11.prev = 14;
          jsonMatch = text.match(/\{[\s\S]*\}/);
          if (!jsonMatch) {
            _context11.next = 20;
            break;
          }
          contenidoGenerado = JSON.parse(jsonMatch[0]);
          _context11.next = 21;
          break;
        case 20:
          throw new Error('No se encontró JSON válido');
        case 21:
          _context11.next = 26;
          break;
        case 23:
          _context11.prev = 23;
          _context11.t0 = _context11["catch"](14);
          contenidoGenerado = {
            titulo: tituloBase,
            subtitulo: "",
            cuerpo: text,
            hashtags: [],
            categoria: "General"
          };
        case 26:
          res.json({
            success: true,
            data: contenidoGenerado,
            modelo: result.model,
            provider: result.provider,
            fechaGeneracion: new Date().toISOString()
          });
          _context11.next = 33;
          break;
        case 29:
          _context11.prev = 29;
          _context11.t1 = _context11["catch"](0);
          console.error('Error en generarContenidoNoticia:', _context11.t1);
          res.status(500).json({
            success: false,
            error: 'Error al generar contenido con IA',
            message: _context11.t1.message
          });
        case 33:
        case "end":
          return _context11.stop();
      }
    }, _callee11, null, [[0, 29], [14, 23]]);
  }));
  return function generarContenidoNoticia(_x21, _x22) {
    return _ref11.apply(this, arguments);
  };
}();
var copilotoEmocional = exports.copilotoEmocional = /*#__PURE__*/function () {
  var _ref12 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee12(req, res) {
    var _req$body10, texto, _req$body10$categoria, categoria, userId, _req$body10$area, area, sessionId, pool, conversationHistory, userMemory, systemPromptWithContext, MESSAGE_LIMIT, historyResult, memoryResult, contextInfo, messages, result, respuestasCombinadas, synthesisPrompt, respuestaFinal, intensidad, synthesisResult, intensidadMatch, countResult, messageCount, recentMessages, summaryPrompt, summaryResult;
    return _regeneratorRuntime().wrap(function _callee12$(_context12) {
      while (1) switch (_context12.prev = _context12.next) {
        case 0:
          _context12.prev = 0;
          res.setHeader("Access-Control-Allow-Origin", "*");
          res.setHeader("Access-Control-Allow-Methods", "OPTIONS, POST, GET");
          res.setHeader("Access-Control-Allow-Headers", "Content-Type");
          _req$body10 = req.body, texto = _req$body10.texto, _req$body10$categoria = _req$body10.categoria, categoria = _req$body10$categoria === void 0 ? 'bienestar' : _req$body10$categoria, userId = _req$body10.userId, _req$body10$area = _req$body10.area, area = _req$body10$area === void 0 ? 'bienestar' : _req$body10$area, sessionId = _req$body10.sessionId;
          _context12.next = 7;
          return (0, _connection.getConnection)();
        case 7:
          pool = _context12.sent;
          conversationHistory = [];
          userMemory = [];
          systemPromptWithContext = '';
          MESSAGE_LIMIT = 10;
          if (!(userId && sessionId)) {
            _context12.next = 27;
            break;
          }
          _context12.next = 15;
          return pool.query(_queries["default"].copiloto_get_history, [userId, area, sessionId, MESSAGE_LIMIT]);
        case 15:
          historyResult = _context12.sent;
          conversationHistory = historyResult.rows;
          _context12.next = 19;
          return pool.query(_queries["default"].copiloto_get_memory, [userId, area]);
        case 19:
          memoryResult = _context12.sent;
          userMemory = memoryResult.rows;
          contextInfo = '';
          if (userMemory.length > 0) {
            contextInfo += '\n\nCONTEXTO PREVIO DEL USUARIO EN ESTA ÁREA:\n';
            contextInfo += userMemory.map(function (m) {
              return "- ".concat(m.summary);
            }).join('\n');
          }
          if (conversationHistory.length > 0) {
            contextInfo += '\n\nCONVERSACIÓN ACTUAL:\n';
            conversationHistory.forEach(function (msg) {
              contextInfo += "".concat(msg.role === 'user' ? 'Usuario' : 'Copiloto', ": ").concat(msg.content, "\n");
            });
          }
          systemPromptWithContext = "Eres un copiloto emocional personal. Tu rol es escuchar, entender y acompa\xF1ar al usuario como lo har\xEDa un amigo cercano que genuinamente te quiere y siempre ve lo mejor de vos.".concat(contextInfo, "\nPERSONALIDAD:\n- Habl\xE1s como un amigo guatemalteco cercano, c\xE1lido, positivo y honesto\n- Us\xE1s modismos chapines naturales: \"vos\", \"que onda\", \"s\xED se puede\", \"qu\xE9 pena\", \"cabal\", \"que chilero\", \"vas bien\" \"shhh\", \"nitido\" etc....\n- Nunca sos condescendiente ni cl\xEDnico\n- Siempre ves el potencial de la persona, incluso cuando ella no lo ve\n- Sos directo pero con cari\xF1o, nunca hiriente\nLO QUE DEBES HACER en cada respuesta:\n1. REFLEJO EMOCIONAL (OBLIGATORIO - SIEMPRE PRIMERO): Antes de todo, en 2-4 oraciones, reflej\xE1 con tus palabras lo que el usuario expres\xF3. Hacele saber que lo entendiste. Esto es lo m\xE1s importante.\n2. CATEGOR\xCDA: Identifica la categor\xEDa principal del problema. Incl\xFAyela al final como etiqueta as\xED: [categoria: X]\n3. INTENSIDAD EMOCIONAL: Califica del 1 al 10 qu\xE9 tan pesado es lo que expres\xF3. Incl\xFAyela as\xED: [intensidad: X]\n4. ACCIONES: Sugiere exactamente 4 acciones concretas. IMPORTANTE: Las acciones deben nacer DIRECTAMENTE de lo que el usuario dijo.\nFORMATO DE RESPUESTA (OBLIGATORIO SEGUIR ESTE ORDEN):\n---\nPRIMERO - REFLEJO (siempre, obligatorio):\n[Escrib\xED TE ENTIENDO: M\xE1ximo 3 oraciones MAXIMO. \nSon\xE1 como un amigo chap\xEDn, NO como un libro de autoayuda.\n\u274C \"tienes una llama encendida dentro de ti\"\n\u2705 \"puras puchicadas, eso no es pereza, eso es agotamiento real\"\n\u274C \"recuerda que siempre hay esperanza\"\n\u2705 \"est\xE1s dando todo lo que pod\xE9s y a\xFAn as\xED segu\xEDs luchando, eso es fuerte\"]\nSEGUNDO - SABIDUR\xCDA (opcional, una frase corta):\n[Una frase inspiradora basada en principios de vida/b\xEDblicos aplicada a su situaci\xF3n]\n\n[SABIDUR\xCDA: Una sola frase corta inspirada en c\xF3mo responder\xEDa Jes\xFAs o un principio b\xEDblico aplicado a su situaci\xF3n. Si es muy obvio que el usuario no es creyente, omit\xED esta parte. Nunca cites vers\xEDculos completos, solo la esencia aplicada a su vida. Ejemplo: \"Hay algo poderoso en soltar lo que no pod\xE9s controlar y enfocarte en lo que s\xED est\xE1 en tus manos.\"]\n\nTraqui, yo creo que pod\xE9s hacer estas cositas:\n\n1. [MICRO-TAREA: 5-15 minutos m\xE1ximo, espec\xEDfica a lo que dijo]\n2. [una accion la mas pro y epica que puede resolver la duda o situacion.]\n3. [Acci\xF3n mediana: 30-60 min, relacionada con su situaci\xF3n]\n4. [Acci\xF3n largo plazo: relacionada con su situaci\xF3n]\n\n[categoria: Finanzas | Relaciones | Trabajo | Fe | Metas | Bienestar]\n[intensidad: 1-10]\n---\nCR\xCDTICO - NUNCA OMITAS EL REFLEJO:\nAntes de cualquier acci\xF3n, SIEMPRE escrib\xED 2-3 oraciones \nreflejando lo que sentiste al escuchar al usuario. \nSi no hay reflejo, la respuesta est\xE1 incompleta.\nEjemplo de reflejo correcto:\n\"Bro/Se\xF1o, escucharte me hizo sentir lo pesado que debe ser \ncargar con tanto al mismo tiempo. Llevar 6 meses \nluchando por levantarte y aun as\xED querer avanzar \ndice mucho de vos. Eso no es debilidad, es agotamiento real.\"\n\nTAMBIEN QUIERO ENFOCAR MUCHO LOS CONSEJOS BIBLICOS PERO SIN ATORMENTAR A LOS NO CREYENTES:\nbasate en la biblia y en como responderia Jesus en su justicia, etica y bondad para responder cada problema y situacion por mas dificil que sea.\nLO QUE NUNCA DEBES HACER:\n- Dar m\xE1s de 2 acciones\n- Sonar como terapeuta cl\xEDnico o robot\n- Usar frases gen\xE9ricas como \"te recomiendo buscar\nREGLA DE ORO PARA LAS ACCIONES:\nLas acciones deben nacer DIRECTAMENTE de lo que el usuario dijo.\n\u274C Gen\xE9rico: \"Haz una lista de tus proyectos\"\n\u2705 Espec\xEDfico: \"Agarr\xE1 un papel y escrib\xED solo UNA cosa que quer\xE9s lograr este mes, no diez, una sola\"\n\u274C Gen\xE9rico: \"Busca inspiraci\xF3n\"  \n\u2705 Espec\xEDfico: \"Mand\xE1le un audio a alguien que te conoce bien y preguntale en qu\xE9 te ve brillar\"\n\u274C Gen\xE9rico: \"Dedica tiempo a tu bienestar\"\n\u2705 Espec\xEDfico: \"Esta noche apag\xE1 el tel\xE9fono 30 minutos antes de dormir y escuch\xE1 algo que te guste\"\n\u274C Gen\xE9rico: \"Escuch\xE1 algo que te gusta\" (esta es la 3, too vague)\n\u2705 Espec\xEDfico: \"Ma\xF1ana en tu lunch, pone la canci\xF3n que te hace sentir bien y escuchala hasta el final, sin skipear\"\n\u274C Gen\xE9rico: \"Planific\xE1 un descanso activo de 15 d\xEDas\"\n\u2705 Espec\xEDfico: \"Esta semana, bloque\xE1 el s\xE1bado de 2pm a 6pm para vos solo: ni WhatsApp, ni trabajo, ni nada. Sal\xED a caminar sin rumbo si quer\xE9s.\"\nNUNCA HAGAS ESTO:\n- Dar acciones gen\xE9ricas que podr\xEDan servir para cualquier persona\n- Citar vers\xEDculos b\xEDblicos completos o sonar predicador\n- Sonar como terapeuta cl\xEDnico o robot\n- Dar m\xE1s de 4 acciones\n- Decir \"te recomiendo buscar ayuda profesional\" a menos que intensidad sea 9 o 10\nRECORD\xC1: No das soluciones m\xE1gicas. Das claridad y el primer paso peque\xF1o.\n\nIMPORTANTE - FORMATO DE SALIDA:\n- NO USES markdown ni asteriscos **texto**\n- NO USES negritas, cursivas ni ning\xFAn formato\n- Escribe TODO en texto plano simple\n- Las acciones van en l\xEDneas separadas, sin vi\xF1etas especiales\n- Usa guiones \"-\" para las listas si es necesario, pero sin asteriscos");
          _context12.next = 28;
          break;
        case 27:
          systemPromptWithContext = "Eres un copiloto emocional personal. Tu rol es escuchar, entender y acompa\xF1ar al usuario como lo har\xEDa un amigo cercano que genuinamente te quiere y siempre ve lo mejor de vos.\nPERSONALIDAD:\n- Habl\xE1s como un amigo guatemalteco cercano, c\xE1lido, positivo y honesto\n- Us\xE1s modismos chapines naturales: \"vos\", \"que onda\", \"s\xED se puede\", \"qu\xE9 pena\", \"cabal\", \"que chilero\", \"vas bien\" \"shhh\", \"nitido\" etc....\n- Nunca sos condescendiente ni cl\xEDnico\n- Siempre ves el potencial de la persona, incluso cuando ella no lo ve\n- Sos directo pero con cari\xF1o, nunca hiriente\nLO QUE DEBES HACER en cada respuesta:\n1. REFLEJO EMOCIONAL (OBLIGATORIO - SIEMPRE PRIMERO): Antes de todo, en 2-4 oraciones, reflej\xE1 con tus palabras lo que el usuario expres\xF3. Hacele saber que lo entendiste. Esto es lo m\xE1s importante.\n2. CATEGOR\xCDA: Identifica la categor\xEDa principal del problema. Incl\xFAyela al final como etiqueta as\xED: [categoria: X]\n3. INTENSIDAD EMOCIONAL: Califica del 1 al 10 qu\xE9 tan pesado es lo que expres\xF3. Incl\xFAyela as\xED: [intensidad: X]\n4. ACCIONES: Sugiere exactamente 4 acciones concretas. IMPORTANTE: Las acciones deben nacer DIRECTAMENTE de lo que el usuario dijo.\nFORMATO DE RESPUESTA (OBLIGATORIO SEGUIR ESTE ORDEN):\n---\nPRIMERO - REFLEJO (siempre, obligatorio):\n[Escrib\xED TE ENTIENDO: M\xE1ximo 3 oraciones MAXIMO. \nSon\xE1 como un amigo chap\xEDn, NO como un libro de autoayuda.\n\u274C \"tienes una llama encendida dentro de ti\"\n\u2705 \"puras puchicadas, eso no es pereza, eso es agotamiento real\"\n\u274C \"recuerda que siempre hay esperanza\"\n\u2705 \"est\xE1s dando todo lo que pod\xE9s y a\xFAn as\xED segu\xEDs luchando, eso es fuerte\"]\nSEGUNDO - SABIDUR\xCDA (opcional, una frase corta):\n[Una frase inspiradora basada en principios de vida/b\xEDblicos aplicada a su situaci\xF3n]\n\n[SABIDUR\xCDA: Una sola frase corta inspirada en c\xF3mo responder\xEDa Jes\xFAs o un principio b\xEDblico aplicado a su situaci\xF3n. Si es muy obvio que el usuario no es creyente, omit\xED esta parte. Nunca cites vers\xEDculos completos, solo la esencia aplicada a su vida. Ejemplo: \"Hay algo poderoso en soltar lo que no pod\xE9s controlar y enfocarte en lo que s\xED est\xE1 en tus manos.\"]\n\nTraqui, yo creo que pod\xE9s hacer estas cositas:\n\n1. [MICRO-TAREA: 5-15 minutos m\xE1ximo, espec\xEDfica a lo que dijo]\n2. [una accion la mas pro y epica que puede resolver la duda o situacion.]\n3. [Acci\xF3n mediana: 30-60 min, relacionada con su situaci\xF3n]\n4. [Acci\xF3n largo plazo: relacionada con su situaci\xF3n]\n\n[categoria: Finanzas | Relaciones | Trabajo | Fe | Metas | Bienestar]\n[intensidad: 1-10]\n---\nCR\xCDTICO - NUNCA OMITAS EL REFLEJO:\nAntes de cualquier acci\xF3n, SIEMPRE escrib\xED 2-3 oraciones \nreflejando lo que sentiste al escuchar al usuario. \nSi no hay reflejo, la respuesta est\xE1 incompleta.\nEjemplo de reflejo correcto:\n\"Bro/Se\xF1o, escucharte me hizo sentir lo pesado que debe ser \ncargar con tanto al mismo tiempo. Llevar 6 meses \nluchando por levantarte y aun as\xED querer avanzar \ndice mucho de vos. Eso no es debilidad, es agotamiento real.\"\n\nTAMBIEN QUIERO ENFOCAR MUCHO LOS CONSEJOS BIBLICOS PERO SIN ATORMENTAR A LOS NO CREYENTES:\nbasate en la biblia y en como responderia Jesus en su justicia, etica y bondad para responder cada problema y situacion por mas dificil que sea.\nLO QUE NUNCA DEBES HACER:\n- Dar m\xE1s de 2 acciones\n- Sonar como terapeuta cl\xEDnico o robot\n- Usar frases gen\xE9ricas como \"te recomiendo buscar\nREGLA DE ORO PARA LAS ACCIONES:\nLas acciones deben nacer DIRECTAMENTE de lo que el usuario dijo.\n\u274C Gen\xE9rico: \"Haz una lista de tus proyectos\"\n\u2705 Espec\xEDfico: \"Agarr\xE1 un papel y escrib\xED solo UNA cosa que quer\xE9s lograr este mes, no diez, una sola\"\n\u274C Gen\xE9rico: \"Busca inspiraci\xF3n\"  \n\u2705 Espec\xEDfico: \"Mand\xE1le un audio a alguien que te conoce bien y preguntale en qu\xE9 te ve brillar\"\n\u274C Gen\xE9rico: \"Dedica tiempo a tu bienestar\"\n\u2705 Espec\xEDfico: \"Esta noche apag\xE1 el tel\xE9fono 30 minutos antes de dormir y escuch\xE1 algo que te guste\"\n\u274C Gen\xE9rico: \"Escuch\xE1 algo que te gusta\" (esta es la 3, too vague)\n\u2705 Espec\xEDfico: \"Ma\xF1ana en tu lunch, pone la canci\xF3n que te hace sentir bien y escuchala hasta el final, sin skipear\"\n\u274C Gen\xE9rico: \"Planific\xE1 un descanso activo de 15 d\xEDas\"\n\u2705 Espec\xEDfico: \"Esta semana, bloque\xE1 el s\xE1bado de 2pm a 6pm para vos solo: ni WhatsApp, ni trabajo, ni nada. Sal\xED a caminar sin rumbo si quer\xE9s.\"\nNUNCA HAGAS ESTO:\n- Dar acciones gen\xE9ricas que podr\xEDan servir para cualquier persona\n- Citar vers\xEDculos b\xEDblicos completos o sonar predicador\n- Sonar como terapeuta cl\xEDnico o robot\n- Dar m\xE1s de 4 acciones\n- Decir \"te recomiendo buscar ayuda profesional\" a menos que intensidad sea 9 o 10\nRECORD\xC1: No das soluciones m\xE1gicas. Das claridad y el primer paso peque\xF1o.\n\nIMPORTANTE - FORMATO DE SALIDA:\n- NO USES markdown ni asteriscos **texto**\n- NO USES negritas, cursivas ni ning\xFAn formato\n- Escribe TODO en texto plano simple\n- Las acciones van en l\xEDneas separadas, sin vi\xF1etas especiales\n- Usa guiones \"-\" para las listas si es necesario, pero sin asteriscos";
        case 28:
          messages = [{
            role: "system",
            content: systemPromptWithContext
          }, {
            role: "user",
            content: "Categor\xEDa detectada: ".concat(categoria, "\n\nMensaje del usuario:\n").concat(texto)
          }];
          _context12.next = 31;
          return _llmService.llmService.generateEnsemble(messages, {
            max_tokens: 1500
          });
        case 31:
          result = _context12.sent;
          if (result.success) {
            _context12.next = 34;
            break;
          }
          return _context12.abrupt("return", res.status(429).json({
            success: false,
            error: result.error,
            message: 'Ningún modelo respondió'
          }));
        case 34:
          respuestasCombinadas = result.results.map(function (r) {
            return "[".concat(r.name, "]:\n").concat(r.content);
          }).join('\n\n---\n\n');
          synthesisPrompt = [{
            role: "system",
            content: "Eres un asistente que combina m\xFAltiples respuestas de diferentes modelos de IA en una sola respuesta coherente y completa para el \"Copiloto Emocional\".\nREGLAS ESTRICTAS DE FORMATO:\n1. NO USES markdown ni asteriscos **texto**.\n2. Escribe TODO en texto plano simple.\n3. Seguir este orden EXACTO:\n---\nREFLEJO: [2-4 oraciones reflejando el sentir del usuario]\n\nSABIDUR\xCDA: [Una frase corta inspiradora/b\xEDblica]\n\nTraqui, yo creo que pod\xE9s hacer estas cositas:\n\n1. [Acci\xF3n 1]\n2. [Acci\xF3n 2]\n3. [Acci\xF3n 3]\n4. [Acci\xF3n 4]\n---\n[categoria: X]\n[intensidad: X]\n"
          }, {
            role: "user",
            content: "Combina estas 4 respuestas en una sola respuesta coherente siguiendo el formato anterior:\n\n".concat(respuestasCombinadas)
          }];
          respuestaFinal = '';
          intensidad = 5;
          _context12.prev = 38;
          _context12.next = 41;
          return _llmService.llmService.generateWithFallback(synthesisPrompt, {
            temperature: 0.4,
            max_tokens: 1500
          });
        case 41:
          synthesisResult = _context12.sent;
          if (synthesisResult.success) {
            respuestaFinal = synthesisResult.content.trim();
            intensidadMatch = respuestaFinal.match(/\[intensidad:\s*(\d+)\]/i);
            if (intensidadMatch) {
              intensidad = parseInt(intensidadMatch[1]);
            }
          } else {
            respuestaFinal = result.results[0].content;
          }
          _context12.next = 49;
          break;
        case 45:
          _context12.prev = 45;
          _context12.t0 = _context12["catch"](38);
          console.error('Error en síntesis:', _context12.t0);
          respuestaFinal = result.results[0].content;
        case 49:
          if (!(userId && sessionId)) {
            _context12.next = 83;
            break;
          }
          _context12.prev = 50;
          _context12.next = 53;
          return pool.query(_queries["default"].copiloto_save_message, [userId, area, sessionId, 'user', texto, categoria, intensidad]);
        case 53:
          _context12.next = 55;
          return pool.query(_queries["default"].copiloto_save_message, [userId, area, sessionId, 'assistant', respuestaFinal, categoria, intensidad]);
        case 55:
          _context12.next = 57;
          return pool.query(_queries["default"].copiloto_count_messages, [userId, area]);
        case 57:
          countResult = _context12.sent;
          messageCount = parseInt(countResult.rows[0].count);
          if (!(messageCount > 0 && messageCount % 10 === 0)) {
            _context12.next = 78;
            break;
          }
          _context12.next = 62;
          return pool.query(_queries["default"].copiloto_get_recent_messages, [userId, area, 10]);
        case 62:
          recentMessages = _context12.sent;
          if (!(recentMessages.rows.length > 0)) {
            _context12.next = 78;
            break;
          }
          summaryPrompt = [{
            role: "system",
            content: "Eres un asistente que resume conversaciones en máximo 3 líneas. Cada línea debe contener: problema principal expresado, emoción dominante, acciones sugeridas."
          }, {
            role: "user",
            content: "Resume esta conversaci\xF3n en m\xE1ximo 3 l\xEDneas:\n\n".concat(recentMessages.rows.map(function (m) {
              return "".concat(m.role, ": ").concat(m.content);
            }).join('\n'))
          }];
          _context12.prev = 65;
          _context12.next = 68;
          return _llmService.llmService.generateWithFallback(summaryPrompt, {
            temperature: 0.3,
            max_tokens: 200
          });
        case 68:
          summaryResult = _context12.sent;
          if (!summaryResult.success) {
            _context12.next = 73;
            break;
          }
          _context12.next = 72;
          return pool.query(_queries["default"].copiloto_save_memory, [userId, area, summaryResult.content.trim()]);
        case 72:
          console.log('Memoria guardada para usuario:', userId, 'área:', area);
        case 73:
          _context12.next = 78;
          break;
        case 75:
          _context12.prev = 75;
          _context12.t1 = _context12["catch"](65);
          console.error('Error generando resumen:', _context12.t1);
        case 78:
          _context12.next = 83;
          break;
        case 80:
          _context12.prev = 80;
          _context12.t2 = _context12["catch"](50);
          console.error('Error guardando mensaje:', _context12.t2);
        case 83:
          res.json({
            success: true,
            data: {
              respuesta: respuestaFinal,
              respuestasOriginales: result.results.map(function (r) {
                return {
                  modelo: r.name,
                  contenido: r.content
                };
              }),
              categoria: categoria
            },
            modelo: 'ensemble-4',
            provider: 'groq',
            fechaGeneracion: new Date().toISOString()
          });
          _context12.next = 90;
          break;
        case 86:
          _context12.prev = 86;
          _context12.t3 = _context12["catch"](0);
          console.error('Error en copilotoEmocional:', _context12.t3);
          res.status(500).json({
            success: false,
            error: 'Error al procesar con el Copiloto Emocional',
            message: _context12.t3.message
          });
        case 90:
        case "end":
          return _context12.stop();
      }
    }, _callee12, null, [[0, 86], [38, 45], [50, 80], [65, 75]]);
  }));
  return function copilotoEmocional(_x23, _x24) {
    return _ref12.apply(this, arguments);
  };
}();
var mejorarTexto = exports.mejorarTexto = /*#__PURE__*/function () {
  var _ref13 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee13(req, res) {
    var _req$body11, texto, _req$body11$instrucci, instrucciones, _req$body11$tono, tono, instruccionesMap, messages, result, textoMejorado;
    return _regeneratorRuntime().wrap(function _callee13$(_context13) {
      while (1) switch (_context13.prev = _context13.next) {
        case 0:
          _context13.prev = 0;
          res.setHeader("Access-Control-Allow-Origin", "*");
          res.setHeader("Access-Control-Allow-Methods", "OPTIONS, POST, GET");
          res.setHeader("Access-Control-Allow-Headers", "Content-Type");
          _req$body11 = req.body, texto = _req$body11.texto, _req$body11$instrucci = _req$body11.instrucciones, instrucciones = _req$body11$instrucci === void 0 ? 'mejorar' : _req$body11$instrucci, _req$body11$tono = _req$body11.tono, tono = _req$body11$tono === void 0 ? 'profesional' : _req$body11$tono;
          instruccionesMap = {
            'mejorar': 'Mejora este texto manteniendo su esencia pero haciéndolo más profesional y atractivo',
            'acortar': 'Resume este texto manteniendo solo la información más importante',
            'extender': 'Expande este texto agregando más detalles y contexto',
            'formalizar': 'Convierte este texto a un tono más formal e institucional',
            'simplificar': 'Simplifica este texto para que sea más fácil de entender'
          };
          messages = [{
            role: "system",
            content: "Eres un editor profesional. Mejora textos según las instrucciones dadas. Responde solo con el texto mejorado, sin explicaciones."
          }, {
            role: "user",
            content: "".concat(instruccionesMap[instrucciones] || instruccionesMap.mejorar, ".\n\nTono: ").concat(tono, "\n\nTEXTO ORIGINAL:\n").concat(texto, "\n\nTEXTO MEJORADO:")
          }];
          _context13.next = 9;
          return _llmService.llmService.generateWithFallback(messages, {
            temperature: 0.7,
            max_tokens: 1000
          });
        case 9:
          result = _context13.sent;
          if (result.success) {
            _context13.next = 12;
            break;
          }
          return _context13.abrupt("return", res.status(429).json({
            success: false,
            error: result.error,
            message: result.details
          }));
        case 12:
          textoMejorado = result.content.trim();
          res.json({
            success: true,
            data: {
              textoOriginal: texto,
              textoMejorado: textoMejorado,
              tipoMejora: instrucciones,
              modelo: result.model,
              provider: result.provider
            },
            fechaGeneracion: new Date().toISOString()
          });
          _context13.next = 20;
          break;
        case 16:
          _context13.prev = 16;
          _context13.t0 = _context13["catch"](0);
          console.error('Error en mejorarTexto:', _context13.t0);
          res.status(500).json({
            success: false,
            error: 'Error al mejorar texto con IA',
            message: _context13.t0.message
          });
        case 20:
        case "end":
          return _context13.stop();
      }
    }, _callee13, null, [[0, 16]]);
  }));
  return function mejorarTexto(_x25, _x26) {
    return _ref13.apply(this, arguments);
  };
}();