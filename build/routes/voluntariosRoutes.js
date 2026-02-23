"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = require("express");
var _voluntariosController = require("../controllers/voluntariosController.js");
var router = (0, _express.Router)();
router.get('/voluntarios', _voluntariosController.getVoluntarios);
var _default = exports["default"] = router;