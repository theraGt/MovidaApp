# Integración LLM con Gemini - Instrucciones

## Configuración

### 1. Obtener API Key de Gemini

1. Ve a https://makersuite.google.com/app/apikey
2. Inicia sesión con tu cuenta de Google
3. Crea una nueva API Key
4. Copia la clave generada

### 2. Configurar Variables de Entorno

Crea o edita el archivo `.env` en la raíz de tu proyecto backend:

```env
PORT=3000
GEMINI_API_KEY=tu_api_key_aqui
```

**IMPORTANTE:** Nunca subas tu API Key al repositorio. El archivo `.env` debe estar en `.gitignore`.

### 3. Endpoints Disponibles

#### Generar contenido desde visita
```
POST /api/llm/generar-visita
Content-Type: application/json

{
  "fecha": "2024-01-15",
  "horaInicio": "09:00",
  "horaFin": "12:00",
  "actividad": "Visita al centro de acopio",
  "tipo": "Voluntariado",
  "estado": "Completada",
  "pais": "España",
  "comentario": "Gran participación de voluntarios",
  "fotos": ["url1", "url2"]
}
```

**Respuesta:**
```json
{
  "success": true,
  "data": {
    "titulo": "Exitosa visita al centro de acopio",
    "contenido": "Texto completo generado...",
    "resumen": "Resumen de una línea",
    "categoria": "Voluntariado"
  },
  "fechaGeneracion": "2024-01-15T10:30:00.000Z"
}
```

#### Generar noticia personalizada
```
POST /api/llm/generar-noticia
Content-Type: application/json

{
  "tituloBase": "Nuevo proyecto de reciclaje",
  "descripcion": "Iniciamos un programa de reciclaje en la comunidad",
  "palabrasClave": ["medio ambiente", "sostenibilidad", "comunidad"],
  "tono": "profesional",
  "longitud": "media"
}
```

#### Mejorar texto existente
```
POST /api/llm/mejorar-texto
Content-Type: application/json

{
  "texto": "Texto que quieres mejorar...",
  "instrucciones": "mejorar",
  "tono": "profesional"
}
```

**Opciones de instrucciones:**
- `mejorar`: Mejora general del texto
- `acortar`: Resume el texto
- `extender`: Agrega más detalles
- `formalizar`: Hace el texto más formal
- `simplificar`: Simplifica el lenguaje

## Uso en Frontend

### 1. Copiar el servicio
Copia el archivo `frontend-example/llmService.ts` a tu proyecto Ionic Vue en la carpeta `src/services/`.

### 2. Actualizar la URL del API
Edita el servicio y cambia `API_URL` por la URL de tu backend:

```typescript
const API_URL = 'https://tu-backend.com'; // URL de producción
```

### 3. Usar el componente de ejemplo
Copia `frontend-example/GeneradorNoticia.vue` a tu carpeta de componentes y úsalo en las páginas donde necesites generar contenido.

### 4. O usar el servicio directamente

```typescript
import { llmService } from '@/services/llmService';

// En tu método
async generarDesdeVisita(visitaData) {
  try {
    const resultado = await llmService.generarContenidoVisita({
      fecha: visitaData.fecha,
      horaInicio: visitaData.horaInicio,
      // ... otros campos
    });
    
    console.log('Contenido generado:', resultado.data);
    // Guardar en tu base de datos o mostrar al usuario
  } catch (error) {
    console.error('Error:', error);
  }
}
```

## Límites de la API Gratuita de Gemini

- **Requests por minuto:** 60
- **Requests por día:** 1,000
- **Tokens por minuto:** 1,000,000
- **Tokens por día:** 10,000,000

Para uso intensivo, considera:
1. Implementar caché de respuestas
2. Agregar rate limiting en tu backend
3. Upgrade al plan de pago si es necesario

## Estructura de Archivos Creados

```
src/
├── controllers/
│   └── llmController.js      # Controlador de LLM
├── routes/
│   └── llmRoutes.js          # Rutas de LLM
├── config.js                  # Actualizado con GEMINI_API_KEY
└── app.js                     # Actualizado con rutas LLM

frontend-example/
├── llmService.ts             # Servicio para frontend
└── GeneradorNoticia.vue      # Componente de ejemplo
```

## Seguridad

⚠️ **NUNCA expongas tu API Key en el frontend.**

Siempre usa un backend intermedio como has hecho. La API Key debe permanecer:
- En variables de entorno del servidor
- Nunca en código del cliente
- Nunca en repositorios públicos

## Solución de Problemas

### Error: "API Key no válida"
- Verifica que la variable de entorno `GEMINI_API_KEY` esté configurada
- Asegúrate de reiniciar el servidor después de cambiar el .env

### Error: "Quota exceeded"
- Has alcanzado el límite de la capa gratuita
- Espera un minuto o considera el plan de pago

### Error de CORS
- Verifica que tu backend tenga configurado CORS correctamente
- La configuración actual permite cualquier origen (`*`), ajusta según tu necesidad

## Modelos Disponibles

El código usa `gemini-pro` que es el modelo recomendado para texto. Opciones:

- `gemini-pro`: Mejor para texto y chat
- `gemini-pro-vision`: Para texto + imágenes (requiere modificación del código)

## Soporte

Para más información:
- Documentación oficial: https://ai.google.dev/docs
- Referencia de API: https://ai.google.dev/api
