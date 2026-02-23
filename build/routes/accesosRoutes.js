"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = require("express");
var _accesosController = require("../controllers/accesosController.js");
var _cors = _interopRequireDefault(require("cors"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var router = (0, _express.Router)();
router.post('/loginMovida', (0, _cors["default"])(), _accesosController.LoginMovida);
var _default = exports["default"] = router;