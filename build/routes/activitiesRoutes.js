"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = require("express");
var _activitiesController = require("../controllers/activitiesController.js");
var router = (0, _express.Router)();
router.get('/activities', _activitiesController.getActivities);
var _default = exports["default"] = router;