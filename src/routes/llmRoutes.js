import { Router } from 'express';
import { 
    generarContenidoVisita, 
    generarContenidoNoticia, 
    mejorarTexto,
    copilotoEmocional,
    loginCopiloto,
    registerCopiloto,
    getUserActions,
    toggleAction,
    updateAction,
    deleteAction,
    createAction,
    getUserConversations,
    getAllUserConversations
} from '../controllers/llmController.js';

const router = Router();

// POST /generar-visita - Genera contenido a partir de datos de visita
router.post('/generar-visita', generarContenidoVisita);

// POST /generar-noticia - Genera una noticia completa
router.post('/generar-noticia', generarContenidoNoticia);

// POST /mejorar-texto - Mejora o modifica texto existente
router.post('/mejorar-texto', mejorarTexto);

// POST /copiloto-emocional - Copiloto emocional con guía bíblica
router.post('/copiloto-emocional', copilotoEmocional);

// POST /login - Login de usuario del Copiloto
router.post('/login', loginCopiloto);

// POST /register - Registro de nuevo usuario
router.post('/register', registerCopiloto);

// POST /actions - Obtener acciones del usuario
router.post('/actions', getUserActions);

// POST /toggle-action - Marcar acción como completada
router.post('/toggle-action', toggleAction);

// POST /update-action - Actualizar acción
router.post('/update-action', updateAction);

// POST /delete-action - Eliminar acción
router.post('/delete-action', deleteAction);

// POST /create-action - Crear nueva acción
router.post('/create-action', createAction);

// POST /conversations - Obtener conversaciones por área
router.post('/conversations', getUserConversations);

// POST /all-conversations - Obtener todas las conversaciones
router.post('/all-conversations', getAllUserConversations);

export default router;
