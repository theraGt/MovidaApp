"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = require("express");
var _visitasController = require("../controllers/visitasController.js");
var router = (0, _express.Router)();
router.get('/visitas', _visitasController.getVisitas);
var _default = exports["default"] = router;