import { llmService } from '../services/llmService.js';

export const generarContenidoVisita = async (req, res) => {
    try {
        res.setHeader("Access-Control-Allow-Origin", "*");
        res.setHeader("Access-Control-Allow-Methods", "OPTIONS, POST, GET");
        res.setHeader("Access-Control-Allow-Headers", "Content-Type");

        const { 
            fecha, 
            horaInicio, 
            horaFin,
            actividad, 
            tipo, 
            estado, 
            pais, 
            comentario,
            fotos = []
        } = req.body;

        const systemPrompt = `Eres un redactor profesional de boletines informativos para una organización.
Tu tarea es convertir información de visitas en textos profesionales y atractivos para boletines.
Escribe en español de manera profesional pero cercana.`;

        const userPrompt = `DATOS DE LA VISITA:
- Fecha: ${fecha}
- Hora: ${horaInicio} a ${horaFin}
- Actividad: ${actividad}
- Tipo: ${tipo}
- Estado: ${estado}
- País: ${pais}
- Comentarios adicionales: ${comentario || 'Ninguno'}
${fotos.length > 0 ? `- Fotos disponibles: ${fotos.length} fotos` : ''}

INSTRUCCIONES:
1. Crea un título atractivo para la noticia
2. Desarrolla el contenido en 2-3 párrafos profesionales
3. Destaca la importancia de la actividad
4. Si hay fotos, menciona que se pueden ver en la galería
5. Incluye una conclusión positiva

RESPONDE ÚNICAMENTE CON UN JSON válido:
{
    "titulo": "Título de la noticia",
    "contenido": "Texto completo formateado",
    "resumen": "Resumen corto",
    "categoria": "Categoría"
}`;

        const messages = [
            { role: "system", content: systemPrompt },
            { role: "user", content: userPrompt }
        ];

        const result = await llmService.generateWithFallback(messages, {
            temperature: 0.7,
            max_tokens: 1000
        });

        if (!result.success) {
            return res.status(429).json({
                success: false,
                error: result.error,
                message: result.details,
                suggestion: 'Por favor, intenta de nuevo en unos minutos o contacta al administrador'
            });
        }

        const text = result.content;

        let contenidoGenerado;
        try {
            const jsonMatch = text.match(/\{[\s\S]*\}/);
            if (jsonMatch) {
                contenidoGenerado = JSON.parse(jsonMatch[0]);
            } else {
                throw new Error('No se encontró JSON válido');
            }
        } catch (parseError) {
            console.error('Error parseando respuesta:', parseError);
            contenidoGenerado = {
                titulo: "Noticia generada",
                contenido: text,
                resumen: "Contenido generado automáticamente",
                categoria: tipo
            };
        }

        res.json({
            success: true,
            data: contenidoGenerado,
            modelo: result.model,
            provider: result.provider,
            fechaGeneracion: new Date().toISOString()
        });

    } catch (error) {
        console.error('Error en generarContenidoVisita:', error);
        res.status(500).json({
            success: false,
            error: 'Error al generar contenido con IA',
            message: error.message
        });
    }
};

export const generarContenidoNoticia = async (req, res) => {
    try {
        res.setHeader("Access-Control-Allow-Origin", "*");
        res.setHeader("Access-Control-Allow-Methods", "OPTIONS, POST, GET");
        res.setHeader("Access-Control-Allow-Headers", "Content-Type");

        const { 
            tituloBase,
            descripcion,
            palabrasClave = [],
            tono = 'profesional',
            longitud = 'media'
        } = req.body;

        const systemPrompt = `Eres un redactor experto en comunicaciones institucionales.
Genera noticias completas y profesionales en español.`;

        const userPrompt = `INFORMACIÓN BASE:
- Título sugerido: ${tituloBase}
- Descripción: ${descripcion}
- Palabras clave: ${palabrasClave.join(', ')}
- Tono: ${tono}
- Longitud: ${longitud}

REQUISITOS:
1. Crea título impactante y subtítulo
2. Escribe cuerpo con introducción, desarrollo y conclusión
3. Usa tono ${tono}
4. Longitud: ${longitud === 'corta' ? '150-200 palabras' : longitud === 'larga' ? '400-500 palabras' : '250-350 palabras'}
5. Incluye hashtags relevantes

RESPONDE CON JSON:
{
    "titulo": "Título final",
    "subtitulo": "Subtítulo",
    "cuerpo": "Texto completo",
    "hashtags": ["#tag1", "#tag2"],
    "categoria": "Categoría"
}`;

        const messages = [
            { role: "system", content: systemPrompt },
            { role: "user", content: userPrompt }
        ];

        const result = await llmService.generateWithFallback(messages, {
            temperature: 0.7,
            max_tokens: 1500
        });

        if (!result.success) {
            return res.status(429).json({
                success: false,
                error: result.error,
                message: result.details
            });
        }

        const text = result.content;

        let contenidoGenerado;
        try {
            const jsonMatch = text.match(/\{[\s\S]*\}/);
            if (jsonMatch) {
                contenidoGenerado = JSON.parse(jsonMatch[0]);
            } else {
                throw new Error('No se encontró JSON válido');
            }
        } catch (parseError) {
            contenidoGenerado = {
                titulo: tituloBase,
                subtitulo: "",
                cuerpo: text,
                hashtags: [],
                categoria: "General"
            };
        }

        res.json({
            success: true,
            data: contenidoGenerado,
            modelo: result.model,
            provider: result.provider,
            fechaGeneracion: new Date().toISOString()
        });

    } catch (error) {
        console.error('Error en generarContenidoNoticia:', error);
        res.status(500).json({
            success: false,
            error: 'Error al generar contenido con IA',
            message: error.message
        });
    }
};

export const mejorarTexto = async (req, res) => {
    try {
        res.setHeader("Access-Control-Allow-Origin", "*");
        res.setHeader("Access-Control-Allow-Methods", "OPTIONS, POST, GET");
        res.setHeader("Access-Control-Allow-Headers", "Content-Type");

        const { 
            texto,
            instrucciones = 'mejorar',
            tono = 'profesional'
        } = req.body;

        const instruccionesMap = {
            'mejorar': 'Mejora este texto manteniendo su esencia pero haciéndolo más profesional y atractivo',
            'acortar': 'Resume este texto manteniendo solo la información más importante',
            'extender': 'Expande este texto agregando más detalles y contexto',
            'formalizar': 'Convierte este texto a un tono más formal e institucional',
            'simplificar': 'Simplifica este texto para que sea más fácil de entender'
        };

        const messages = [
            {
                role: "system",
                content: "Eres un editor profesional. Mejora textos según las instrucciones dadas. Responde solo con el texto mejorado, sin explicaciones."
            },
            {
                role: "user",
                content: `${instruccionesMap[instrucciones] || instruccionesMap.mejorar}.

Tono: ${tono}

TEXTO ORIGINAL:
${texto}

TEXTO MEJORADO:`
            }
        ];

        const result = await llmService.generateWithFallback(messages, {
            temperature: 0.7,
            max_tokens: 1000
        });

        if (!result.success) {
            return res.status(429).json({
                success: false,
                error: result.error,
                message: result.details
            });
        }

        const textoMejorado = result.content.trim();

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

    } catch (error) {
        console.error('Error en mejorarTexto:', error);
        res.status(500).json({
            success: false,
            error: 'Error al mejorar texto con IA',
            message: error.message
        });
    }
};
