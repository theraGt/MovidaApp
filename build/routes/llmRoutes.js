"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = require("express");
var _llmController = require("../controllers/llmController.js");
var router = (0, _express.Router)();

// POST /generar-visita - Genera contenido a partir de datos de visita
router.post('/generar-visita', _llmController.generarContenidoVisita);

// POST /generar-noticia - Genera una noticia completa
router.post('/generar-noticia', _llmController.generarContenidoNoticia);

// POST /mejorar-texto - Mejora o modifica texto existente
router.post('/mejorar-texto', _llmController.mejorarTexto);

// POST /copiloto-emocional - Copiloto emocional con guía bíblica
router.post('/copiloto-emocional', _llmController.copilotoEmocional);

// POST /login - Login de usuario del Copiloto
router.post('/login', _llmController.loginCopiloto);

// POST /register - Registro de nuevo usuario
router.post('/register', _llmController.registerCopiloto);

// POST /actions - Obtener acciones del usuario
router.post('/actions', _llmController.getUserActions);

// POST /toggle-action - Marcar acción como completada
router.post('/toggle-action', _llmController.toggleAction);

// POST /update-action - Actualizar acción
router.post('/update-action', _llmController.updateAction);

// POST /delete-action - Eliminar acción
router.post('/delete-action', _llmController.deleteAction);

// POST /create-action - Crear nueva acción
router.post('/create-action', _llmController.createAction);

// POST /conversations - Obtener conversaciones por área
router.post('/conversations', _llmController.getUserConversations);

// POST /all-conversations - Obtener todas las conversaciones
router.post('/all-conversations', _llmController.getAllUserConversations);
var _default = exports["default"] = router;