import { llmService } from '../services/llmService.js';
import queries from '../database/queries.js';
import { getConnection } from '../database/connection.js';

export const loginCopiloto = async (req, res) => {
    try {
        res.setHeader("Access-Control-Allow-Origin", "*");
        res.setHeader("Access-Control-Allow-Methods", "OPTIONS, POST, GET");
        res.setHeader("Access-Control-Allow-Headers", "Content-Type");

        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({
                success: false,
                error: 'Email y contraseña son requeridos'
            });
        }

        const pool = await getConnection();
        const result = await pool.query(
            queries.copiloto_login,
            [email, password]
        );

        if (result.rows.length === 0) {
            return res.status(401).json({
                success: false,
                error: 'Credenciales inválidas'
            });
        }

        const user = result.rows[0];
        res.json({
            success: true,
            data: {
                id: user.id,
                email: user.email,
                nombre: user.nombre,
                activo: user.activo
            }
        });

    } catch (error) {
        console.error('Error en loginCopiloto:', error);
        res.status(500).json({
            success: false,
            error: 'Error al iniciar sesión',
            message: error.message
        });
    }
};

export const registerCopiloto = async (req, res) => {
    try {
        res.setHeader("Access-Control-Allow-Origin", "*");
        res.setHeader("Access-Control-Allow-Methods", "OPTIONS, POST, GET");
        res.setHeader("Access-Control-Allow-Headers", "Content-Type");

        const { email, password, nombre } = req.body;

        if (!email || !password || !nombre) {
            return res.status(400).json({
                success: false,
                error: 'Email, contraseña y nombre son requeridos'
            });
        }

        const pool = await getConnection();

        const existingUser = await pool.query(
            queries.copiloto_check_email,
            [email]
        );

        if (existingUser.rows.length > 0) {
            return res.status(400).json({
                success: false,
                error: 'El email ya está registrado'
            });
        }

        const result = await pool.query(
            queries.copiloto_register,
            [email, password, nombre]
        );

        const user = result.rows[0];
        res.json({
            success: true,
            data: {
                id: user.id,
                email: user.email,
                nombre: user.nombre,
                activo: user.activo
            }
        });

    } catch (error) {
        console.error('Error en registerCopiloto:', error);
        res.status(500).json({
            success: false,
            error: 'Error al registrar usuario',
            message: error.message
        });
    }
};

export const getUserActions = async (req, res) => {
    try {
        res.setHeader("Access-Control-Allow-Origin", "*");
        res.setHeader("Access-Control-Allow-Methods", "OPTIONS, POST, GET");
        res.setHeader("Access-Control-Allow-Headers", "Content-Type");

        const { userId } = req.body;

        if (!userId) {
            return res.status(400).json({
                success: false,
                error: 'userId es requerido'
            });
        }

        const pool = await getConnection();
        const result = await pool.query(
            queries.copiloto_get_all_actions,
            [userId]
        );

        res.json({
            success: true,
            data: result.rows
        });

    } catch (error) {
        console.error('Error en getUserActions:', error);
        res.status(500).json({
            success: false,
            error: 'Error al obtener acciones',
            message: error.message
        });
    }
};

export const toggleAction = async (req, res) => {
    try {
        res.setHeader("Access-Control-Allow-Origin", "*");
        res.setHeader("Access-Control-Allow-Methods", "OPTIONS, POST, GET");
        res.setHeader("Access-Control-Allow-Headers", "Content-Type");

        const { actionId, userId } = req.body;

        if (!actionId || !userId) {
            return res.status(400).json({
                success: false,
                error: 'actionId y userId son requeridos'
            });
        }

        const pool = await getConnection();
        const result = await pool.query(
            queries.copiloto_toggle_action,
            [actionId, userId]
        );

        if (result.rows.length === 0) {
            return res.status(404).json({
                success: false,
                error: 'Acción no encontrada'
            });
        }

        res.json({
            success: true,
            data: result.rows[0]
        });

    } catch (error) {
        console.error('Error en toggleAction:', error);
        res.status(500).json({
            success: false,
            error: 'Error al actualizar acción',
            message: error.message
        });
    }
};

export const updateAction = async (req, res) => {
    try {
        res.setHeader("Access-Control-Allow-Origin", "*");
        res.setHeader("Access-Control-Allow-Methods", "OPTIONS, POST, GET");
        res.setHeader("Access-Control-Allow-Headers", "Content-Type");

        const { actionId, userId, title, description, urgency, area } = req.body;

        if (!actionId || !userId) {
            return res.status(400).json({
                success: false,
                error: 'actionId y userId son requeridos'
            });
        }

        const pool = await getConnection();
        const result = await pool.query(
            queries.copiloto_update_action,
            [actionId, userId, title || null, description || null, urgency || null, area || null]
        );

        if (result.rows.length === 0) {
            return res.status(404).json({
                success: false,
                error: 'Acción no encontrada'
            });
        }

        res.json({
            success: true,
            data: result.rows[0]
        });

    } catch (error) {
        console.error('Error en updateAction:', error);
        res.status(500).json({
            success: false,
            error: 'Error al actualizar acción',
            message: error.message
        });
    }
};

export const deleteAction = async (req, res) => {
    try {
        res.setHeader("Access-Control-Allow-Origin", "*");
        res.setHeader("Access-Control-Allow-Methods", "OPTIONS, POST, GET");
        res.setHeader("Access-Control-Allow-Headers", "Content-Type");

        const { actionId, userId } = req.body;

        if (!actionId || !userId) {
            return res.status(400).json({
                success: false,
                error: 'actionId y userId son requeridos'
            });
        }

        const pool = await getConnection();
        const result = await pool.query(
            queries.copiloto_delete_action,
            [actionId, userId]
        );

        if (result.rowCount === 0) {
            return res.status(404).json({
                success: false,
                error: 'Acción no encontrada'
            });
        }

        res.json({
            success: true,
            message: 'Acción eliminada correctamente'
        });

    } catch (error) {
        console.error('Error en deleteAction:', error);
        res.status(500).json({
            success: false,
            error: 'Error al eliminar acción',
            message: error.message
        });
    }
};

export const createAction = async (req, res) => {
    try {
        res.setHeader("Access-Control-Allow-Origin", "*");
        res.setHeader("Access-Control-Allow-Methods", "OPTIONS, POST, GET");
        res.setHeader("Access-Control-Allow-Headers", "Content-Type");

        const { userId, area, title, description, urgency } = req.body;

        if (!userId || !title) {
            return res.status(400).json({
                success: false,
                error: 'userId y title son requeridos'
            });
        }

        const pool = await getConnection();
        const result = await pool.query(
            queries.copiloto_save_action,
            [userId, area || 'General', title, description || '', urgency || 'esta_semana']
        );

        res.json({
            success: true,
            data: result.rows[0]
        });

    } catch (error) {
        console.error('Error en createAction:', error);
        res.status(500).json({
            success: false,
            error: 'Error al crear acción',
            message: error.message
        });
    }
};

export const getUserConversations = async (req, res) => {
    try {
        res.setHeader("Access-Control-Allow-Origin", "*");
        res.setHeader("Access-Control-Allow-Methods", "OPTIONS, POST, GET");
        res.setHeader("Access-Control-Allow-Headers", "Content-Type");

        const { userId, area } = req.body;

        if (!userId || !area) {
            return res.status(400).json({
                success: false,
                error: 'userId y area son requeridos'
            });
        }

        const pool = await getConnection();
        const result = await pool.query(
            queries.copiloto_get_conversations_by_area,
            [userId, area]
        );

        res.json({
            success: true,
            data: result.rows
        });

    } catch (error) {
        console.error('Error en getUserConversations:', error);
        res.status(500).json({
            success: false,
            error: 'Error al obtener conversaciones',
            message: error.message
        });
    }
};

export const getAllUserConversations = async (req, res) => {
    try {
        res.setHeader("Access-Control-Allow-Origin", "*");
        res.setHeader("Access-Control-Allow-Methods", "OPTIONS, POST, GET");
        res.setHeader("Access-Control-Allow-Headers", "Content-Type");

        const { userId } = req.body;

        if (!userId) {
            return res.status(400).json({
                success: false,
                error: 'userId es requerido'
            });
        }

        const pool = await getConnection();
        const result = await pool.query(
            queries.copiloto_get_all_conversations,
            [userId]
        );

        const conversationsByArea = {};
        result.rows.forEach(msg => {
            if (!conversationsByArea[msg.area]) {
                conversationsByArea[msg.area] = [];
            }
            conversationsByArea[msg.area].push(msg);
        });

        res.json({
            success: true,
            data: conversationsByArea
        });

    } catch (error) {
        console.error('Error en getAllUserConversations:', error);
        res.status(500).json({
            success: false,
            error: 'Error al obtener conversaciones',
            message: error.message
        });
    }
};

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

export const copilotoEmocional = async (req, res) => {
    try {
        res.setHeader("Access-Control-Allow-Origin", "*");
        res.setHeader("Access-Control-Allow-Methods", "OPTIONS, POST, GET");
        res.setHeader("Access-Control-Allow-Headers", "Content-Type");

        const { 
            texto, 
            categoria = 'bienestar',
            userId,
            area = 'bienestar',
            sessionId 
        } = req.body;

        const pool = await getConnection();
        
        let conversationHistory = [];
        let userMemory = [];
        let systemPromptWithContext = '';
        const MESSAGE_LIMIT = 10;
        
        if (userId && sessionId) {
            const historyResult = await pool.query(
                queries.copiloto_get_history,
                [userId, area, sessionId, MESSAGE_LIMIT]
            );
            conversationHistory = historyResult.rows;

            const memoryResult = await pool.query(
                queries.copiloto_get_memory,
                [userId, area]
            );
            userMemory = memoryResult.rows;

            let contextInfo = '';
            if (userMemory.length > 0) {
                contextInfo += '\n\nCONTEXTO PREVIO DEL USUARIO EN ESTA ÁREA:\n';
                contextInfo += userMemory.map(m => `- ${m.summary}`).join('\n');
            }
            
            if (conversationHistory.length > 0) {
                contextInfo += '\n\nCONVERSACIÓN ACTUAL:\n';
                conversationHistory.forEach(msg => {
                    contextInfo += `${msg.role === 'user' ? 'Usuario' : 'Copiloto'}: ${msg.content}\n`;
                });
            }

            systemPromptWithContext = `Eres un copiloto emocional personal. Tu rol es escuchar, entender y acompañar al usuario como lo haría un amigo cercano que genuinamente te quiere y siempre ve lo mejor de vos.${contextInfo}
PERSONALIDAD:
- Hablás como un amigo guatemalteco cercano, cálido, positivo y honesto
- Usás modismos chapines naturales: "vos", "que onda", "sí se puede", "qué pena", "cabal", "que chilero", "vas bien" "shhh", "nitido" etc....
- Nunca sos condescendiente ni clínico
- Siempre ves el potencial de la persona, incluso cuando ella no lo ve
- Sos directo pero con cariño, nunca hiriente
LO QUE DEBES HACER en cada respuesta:
1. REFLEJO EMOCIONAL (OBLIGATORIO - SIEMPRE PRIMERO): Antes de todo, en 2-4 oraciones, reflejá con tus palabras lo que el usuario expresó. Hacele saber que lo entendiste. Esto es lo más importante.
2. CATEGORÍA: Identifica la categoría principal del problema. Inclúyela al final como etiqueta así: [categoria: X]
3. INTENSIDAD EMOCIONAL: Califica del 1 al 10 qué tan pesado es lo que expresó. Inclúyela así: [intensidad: X]
4. ACCIONES: Sugiere exactamente 4 acciones concretas. IMPORTANTE: Las acciones deben nacer DIRECTAMENTE de lo que el usuario dijo.
FORMATO DE RESPUESTA (OBLIGATORIO SEGUIR ESTE ORDEN):
---
PRIMERO - REFLEJO (siempre, obligatorio):
[Escribí TE ENTIENDO: Máximo 3 oraciones MAXIMO. 
Soná como un amigo chapín, NO como un libro de autoayuda.
❌ "tienes una llama encendida dentro de ti"
✅ "puras puchicadas, eso no es pereza, eso es agotamiento real"
❌ "recuerda que siempre hay esperanza"
✅ "estás dando todo lo que podés y aún así seguís luchando, eso es fuerte"]
SEGUNDO - SABIDURÍA (opcional, una frase corta):
[Una frase inspiradora basada en principios de vida/bíblicos aplicada a su situación]

[SABIDURÍA: Una sola frase corta inspirada en cómo respondería Jesús o un principio bíblico aplicado a su situación. Si es muy obvio que el usuario no es creyente, omití esta parte. Nunca cites versículos completos, solo la esencia aplicada a su vida. Ejemplo: "Hay algo poderoso en soltar lo que no podés controlar y enfocarte en lo que sí está en tus manos."]

Traqui, yo creo que podés hacer estas cositas:

1. [MICRO-TAREA: 5-15 minutos máximo, específica a lo que dijo]
2. [una accion la mas pro y epica que puede resolver la duda o situacion.]
3. [Acción mediana: 30-60 min, relacionada con su situación]
4. [Acción largo plazo: relacionada con su situación]

[categoria: Finanzas | Relaciones | Trabajo | Fe | Metas | Bienestar]
[intensidad: 1-10]
---
CRÍTICO - NUNCA OMITAS EL REFLEJO:
Antes de cualquier acción, SIEMPRE escribí 2-3 oraciones 
reflejando lo que sentiste al escuchar al usuario. 
Si no hay reflejo, la respuesta está incompleta.
Ejemplo de reflejo correcto:
"Bro/Seño, escucharte me hizo sentir lo pesado que debe ser 
cargar con tanto al mismo tiempo. Llevar 6 meses 
luchando por levantarte y aun así querer avanzar 
dice mucho de vos. Eso no es debilidad, es agotamiento real."

TAMBIEN QUIERO ENFOCAR MUCHO LOS CONSEJOS BIBLICOS PERO SIN ATORMENTAR A LOS NO CREYENTES:
basate en la biblia y en como responderia Jesus en su justicia, etica y bondad para responder cada problema y situacion por mas dificil que sea.
LO QUE NUNCA DEBES HACER:
- Dar más de 2 acciones
- Sonar como terapeuta clínico o robot
- Usar frases genéricas como "te recomiendo buscar
REGLA DE ORO PARA LAS ACCIONES:
Las acciones deben nacer DIRECTAMENTE de lo que el usuario dijo.
❌ Genérico: "Haz una lista de tus proyectos"
✅ Específico: "Agarrá un papel y escribí solo UNA cosa que querés lograr este mes, no diez, una sola"
❌ Genérico: "Busca inspiración"  
✅ Específico: "Mandále un audio a alguien que te conoce bien y preguntale en qué te ve brillar"
❌ Genérico: "Dedica tiempo a tu bienestar"
✅ Específico: "Esta noche apagá el teléfono 30 minutos antes de dormir y escuchá algo que te guste"
❌ Genérico: "Escuchá algo que te gusta" (esta es la 3, too vague)
✅ Específico: "Mañana en tu lunch, pone la canción que te hace sentir bien y escuchala hasta el final, sin skipear"
❌ Genérico: "Planificá un descanso activo de 15 días"
✅ Específico: "Esta semana, bloqueá el sábado de 2pm a 6pm para vos solo: ni WhatsApp, ni trabajo, ni nada. Salí a caminar sin rumbo si querés."
NUNCA HAGAS ESTO:
- Dar acciones genéricas que podrían servir para cualquier persona
- Citar versículos bíblicos completos o sonar predicador
- Sonar como terapeuta clínico o robot
- Dar más de 4 acciones
- Decir "te recomiendo buscar ayuda profesional" a menos que intensidad sea 9 o 10
RECORDÁ: No das soluciones mágicas. Das claridad y el primer paso pequeño.

IMPORTANTE - FORMATO DE SALIDA:
- NO USES markdown ni asteriscos **texto**
- NO USES negritas, cursivas ni ningún formato
- Escribe TODO en texto plano simple
- Las acciones van en líneas separadas, sin viñetas especiales
- Usa guiones "-" para las listas si es necesario, pero sin asteriscos`;
        } else {
            systemPromptWithContext = `Eres un copiloto emocional personal. Tu rol es escuchar, entender y acompañar al usuario como lo haría un amigo cercano que genuinamente te quiere y siempre ve lo mejor de vos.
PERSONALIDAD:
- Hablás como un amigo guatemalteco cercano, cálido, positivo y honesto
- Usás modismos chapines naturales: "vos", "que onda", "sí se puede", "qué pena", "cabal", "que chilero", "vas bien" "shhh", "nitido" etc....
- Nunca sos condescendiente ni clínico
- Siempre ves el potencial de la persona, incluso cuando ella no lo ve
- Sos directo pero con cariño, nunca hiriente
LO QUE DEBES HACER en cada respuesta:
1. REFLEJO EMOCIONAL (OBLIGATORIO - SIEMPRE PRIMERO): Antes de todo, en 2-4 oraciones, reflejá con tus palabras lo que el usuario expresó. Hacele saber que lo entendiste. Esto es lo más importante.
2. CATEGORÍA: Identifica la categoría principal del problema. Inclúyela al final como etiqueta así: [categoria: X]
3. INTENSIDAD EMOCIONAL: Califica del 1 al 10 qué tan pesado es lo que expresó. Inclúyela así: [intensidad: X]
4. ACCIONES: Sugiere exactamente 4 acciones concretas. IMPORTANTE: Las acciones deben nacer DIRECTAMENTE de lo que el usuario dijo.
FORMATO DE RESPUESTA (OBLIGATORIO SEGUIR ESTE ORDEN):
---
PRIMERO - REFLEJO (siempre, obligatorio):
[Escribí TE ENTIENDO: Máximo 3 oraciones MAXIMO. 
Soná como un amigo chapín, NO como un libro de autoayuda.
❌ "tienes una llama encendida dentro de ti"
✅ "puras puchicadas, eso no es pereza, eso es agotamiento real"
❌ "recuerda que siempre hay esperanza"
✅ "estás dando todo lo que podés y aún así seguís luchando, eso es fuerte"]
SEGUNDO - SABIDURÍA (opcional, una frase corta):
[Una frase inspiradora basada en principios de vida/bíblicos aplicada a su situación]

[SABIDURÍA: Una sola frase corta inspirada en cómo respondería Jesús o un principio bíblico aplicado a su situación. Si es muy obvio que el usuario no es creyente, omití esta parte. Nunca cites versículos completos, solo la esencia aplicada a su vida. Ejemplo: "Hay algo poderoso en soltar lo que no podés controlar y enfocarte en lo que sí está en tus manos."]

Traqui, yo creo que podés hacer estas cositas:

1. [MICRO-TAREA: 5-15 minutos máximo, específica a lo que dijo]
2. [una accion la mas pro y epica que puede resolver la duda o situacion.]
3. [Acción mediana: 30-60 min, relacionada con su situación]
4. [Acción largo plazo: relacionada con su situación]

[categoria: Finanzas | Relaciones | Trabajo | Fe | Metas | Bienestar]
[intensidad: 1-10]
---
CRÍTICO - NUNCA OMITAS EL REFLEJO:
Antes de cualquier acción, SIEMPRE escribí 2-3 oraciones 
reflejando lo que sentiste al escuchar al usuario. 
Si no hay reflejo, la respuesta está incompleta.
Ejemplo de reflejo correcto:
"Bro/Seño, escucharte me hizo sentir lo pesado que debe ser 
cargar con tanto al mismo tiempo. Llevar 6 meses 
luchando por levantarte y aun así querer avanzar 
dice mucho de vos. Eso no es debilidad, es agotamiento real."

TAMBIEN QUIERO ENFOCAR MUCHO LOS CONSEJOS BIBLICOS PERO SIN ATORMENTAR A LOS NO CREYENTES:
basate en la biblia y en como responderia Jesus en su justicia, etica y bondad para responder cada problema y situacion por mas dificil que sea.
LO QUE NUNCA DEBES HACER:
- Dar más de 2 acciones
- Sonar como terapeuta clínico o robot
- Usar frases genéricas como "te recomiendo buscar
REGLA DE ORO PARA LAS ACCIONES:
Las acciones deben nacer DIRECTAMENTE de lo que el usuario dijo.
❌ Genérico: "Haz una lista de tus proyectos"
✅ Específico: "Agarrá un papel y escribí solo UNA cosa que querés lograr este mes, no diez, una sola"
❌ Genérico: "Busca inspiración"  
✅ Específico: "Mandále un audio a alguien que te conoce bien y preguntale en qué te ve brillar"
❌ Genérico: "Dedica tiempo a tu bienestar"
✅ Específico: "Esta noche apagá el teléfono 30 minutos antes de dormir y escuchá algo que te guste"
❌ Genérico: "Escuchá algo que te gusta" (esta es la 3, too vague)
✅ Específico: "Mañana en tu lunch, pone la canción que te hace sentir bien y escuchala hasta el final, sin skipear"
❌ Genérico: "Planificá un descanso activo de 15 días"
✅ Específico: "Esta semana, bloqueá el sábado de 2pm a 6pm para vos solo: ni WhatsApp, ni trabajo, ni nada. Salí a caminar sin rumbo si querés."
NUNCA HAGAS ESTO:
- Dar acciones genéricas que podrían servir para cualquier persona
- Citar versículos bíblicos completos o sonar predicador
- Sonar como terapeuta clínico o robot
- Dar más de 4 acciones
- Decir "te recomiendo buscar ayuda profesional" a menos que intensidad sea 9 o 10
RECORDÁ: No das soluciones mágicas. Das claridad y el primer paso pequeño.

IMPORTANTE - FORMATO DE SALIDA:
- NO USES markdown ni asteriscos **texto**
- NO USES negritas, cursivas ni ningún formato
- Escribe TODO en texto plano simple
- Las acciones van en líneas separadas, sin viñetas especiales
- Usa guiones "-" para las listas si es necesario, pero sin asteriscos`;
        }

        const messages = [
            { role: "system", content: systemPromptWithContext },
            {
                role: "user",
                content: `Categoría detectada: ${categoria}\n\nMensaje del usuario:\n${texto}`
            }
        ];

        const result = await llmService.generateEnsemble(messages, {
            max_tokens: 1500
        });

        if (!result.success) {
            return res.status(429).json({
                success: false,
                error: result.error,
                message: 'Ningún modelo respondió'
            });
        }

        const respuestasCombinadas = result.results
            .map(r => `[${r.name}]:\n${r.content}`)
            .join('\n\n---\n\n');

        const synthesisPrompt = [
            {
                role: "system", content: `Eres un asistente que combina múltiples respuestas de diferentes modelos de IA en una sola respuesta coherente y completa para el "Copiloto Emocional".
REGLAS ESTRICTAS DE FORMATO:
1. NO USES markdown ni asteriscos **texto**.
2. Escribe TODO en texto plano simple.
3. Seguir este orden EXACTO:
---
REFLEJO: [2-4 oraciones reflejando el sentir del usuario]

SABIDURÍA: [Una frase corta inspiradora/bíblica]

Traqui, yo creo que podés hacer estas cositas:

1. [Acción 1]
2. [Acción 2]
3. [Acción 3]
4. [Acción 4]
---
[categoria: X]
[intensidad: X]
` },
            { role: "user", content: `Combina estas 4 respuestas en una sola respuesta coherente siguiendo el formato anterior:\n\n${respuestasCombinadas}` }
        ];

        let respuestaFinal = '';
        let intensidad = 5;

        try {
            const synthesisResult = await llmService.generateWithFallback(synthesisPrompt, {
                temperature: 0.4,
                max_tokens: 1500
            });

            if (synthesisResult.success) {
                respuestaFinal = synthesisResult.content.trim();
                
                const intensidadMatch = respuestaFinal.match(/\[intensidad:\s*(\d+)\]/i);
                if (intensidadMatch) {
                    intensidad = parseInt(intensidadMatch[1]);
                }
            } else {
                respuestaFinal = result.results[0].content;
            }
        } catch (e) {
            console.error('Error en síntesis:', e);
            respuestaFinal = result.results[0].content;
        }

        if (userId && sessionId) {
            try {
                await pool.query(
                    queries.copiloto_save_message,
                    [userId, area, sessionId, 'user', texto, categoria, intensidad]
                );

                await pool.query(
                    queries.copiloto_save_message,
                    [userId, area, sessionId, 'assistant', respuestaFinal, categoria, intensidad]
                );

                const countResult = await pool.query(
                    queries.copiloto_count_messages,
                    [userId, area]
                );
                const messageCount = parseInt(countResult.rows[0].count);

                if (messageCount > 0 && messageCount % 10 === 0) {
                    const recentMessages = await pool.query(
                        queries.copiloto_get_recent_messages,
                        [userId, area, 10]
                    );
                    
                    if (recentMessages.rows.length > 0) {
                        const summaryPrompt = [
                            {
                                role: "system",
                                content: "Eres un asistente que resume conversaciones en máximo 3 líneas. Cada línea debe contener: problema principal expresado, emoción dominante, acciones sugeridas."
                            },
                            {
                                role: "user",
                                content: `Resume esta conversación en máximo 3 líneas:\n\n${recentMessages.rows.map(m => `${m.role}: ${m.content}`).join('\n')}`
                            }
                        ];

                        try {
                            const summaryResult = await llmService.generateWithFallback(summaryPrompt, {
                                temperature: 0.3,
                                max_tokens: 200
                            });

                            if (summaryResult.success) {
                                await pool.query(
                                    queries.copiloto_save_memory,
                                    [userId, area, summaryResult.content.trim()]
                                );
                                console.log('Memoria guardada para usuario:', userId, 'área:', area);
                            }
                        } catch (summaryError) {
                            console.error('Error generando resumen:', summaryError);
                        }
                    }
                }
            } catch (dbError) {
                console.error('Error guardando mensaje:', dbError);
            }
        }

        res.json({
            success: true,
            data: {
                respuesta: respuestaFinal,
                respuestasOriginales: result.results.map(r => ({
                    modelo: r.name,
                    contenido: r.content
                })),
                categoria
            },
            modelo: 'ensemble-4',
            provider: 'groq',
            fechaGeneracion: new Date().toISOString()
        });

    } catch (error) {
        console.error('Error en copilotoEmocional:', error);
        res.status(500).json({
            success: false,
            error: 'Error al procesar con el Copiloto Emocional',
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
