"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = _interopRequireDefault(require("express"));
var _config = _interopRequireDefault(require("./config.js"));
var _voluntariosRoutes = _interopRequireDefault(require("./routes/voluntariosRoutes.js"));
var _accesosRoutes = _interopRequireDefault(require("./routes/accesosRoutes.js"));
var _activitiesRoutes = _interopRequireDefault(require("./routes/activitiesRoutes.js"));
var _visitasRoutes = _interopRequireDefault(require("./routes/visitasRoutes.js"));
var _llmRoutes = _interopRequireDefault(require("./routes/llmRoutes.js"));
var _cors = _interopRequireDefault(require("cors"));
var _bodyParser = _interopRequireDefault(require("body-parser"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var app = (0, _express["default"])();
var options = {
  origin: "https://thera-ia-movida-app.9zx1zd.easypanel.host",
  methods: ["OPTIONS", "POST", "GET", "DELETE", "PUT"],
  allowedHeaders: "Content-Type",
  optionsSuccessStatus: 204
};

//settings
app.use((0, _cors["default"])(options));
app.set('port', _config["default"].port);
app.use(_express["default"].urlencoded({
  extended: true
}));
app.use(_express["default"].json());
app.use(_bodyParser["default"].urlencoded({
  extended: false
}));
app.use(_bodyParser["default"].json());
app.use('/api/voluntarios', _voluntariosRoutes["default"]);
app.use('/api/acceso', _accesosRoutes["default"]);
app.use('/api/activities', _activitiesRoutes["default"]);
app.use('/api/visitas', _visitasRoutes["default"]);
app.use('/api/llm', _llmRoutes["default"]);
var _default = exports["default"] = app;