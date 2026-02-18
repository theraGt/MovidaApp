import { Router } from 'express';
import { 
    generarContenidoVisita, 
    generarContenidoNoticia, 
    mejorarTexto 
} from '../controllers/llmController.js';

const router = Router();

// POST /api/llm/generar-visita - Genera contenido a partir de datos de visita
router.post('/api/llm/generar-visita', generarContenidoVisita);

// POST /api/llm/generar-noticia - Genera una noticia completa
router.post('/api/llm/generar-noticia', generarContenidoNoticia);

// POST /api/llm/mejorar-texto - Mejora o modifica texto existente
router.post('/api/llm/mejorar-texto', mejorarTexto);

export default router;
