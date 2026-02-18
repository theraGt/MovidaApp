# Configuración de OpenRouter - INSTRUCCIONES

## 1. Crear API Key en OpenRouter

1. Ve a https://openrouter.ai/keys
2. Crea una cuenta gratuita (puedes usar Google, GitHub o email)
3. Ve a "Create API Key"
4. Copia la API Key generada

## 2. Actualizar el archivo .env

Edita el archivo `.env` en tu backend:

```env
PORT=3030
OPENROUTER_API_KEY=sk-or-v1-tu-api-key-aqui
APP_URL=http://localhost:3000
```

Reemplaza `sk-or-v1-tu-api-key-aqui` con tu API Key real de OpenRouter.

## 3. Modelos Gratuitos Disponibles

El código está configurado para usar modelos gratuitos de OpenRouter:

### Modelo actual (gratuito):
- **meta-llama/llama-3.3-8b-instruct:free**
  - Buena calidad de texto
  - Razonablemente rápido
  - Límites: 20 requests/minuto, 200 requests/día
  - Compatible con mensajes de sistema

### Otros modelos gratuitos que puedes probar:
- `google/gemma-2-9b-it:free` - Modelo de Google
- `microsoft/phi-3-mini-128k-instruct:free` - Modelo de Microsoft
- `huggingfaceh4/zephyr-7b-beta:free` - Modelo ligero
- `nousresearch/hermes-3-llama-3.1-405b:free` - Modelo grande

Para cambiar de modelo, edita `src/controllers/llmController.js` y busca:
```javascript
model: "meta-llama/llama-3.3-8b-instruct:free"
```

### Alternativas si hay rate limit:
- `qwen/qwen-235b-a22b-instruct:free` - Modelo Qwen (muy capaz)
- `nousresearch/hermes-3-llama-3.1-405b:free` - Modelo grande
- `google/gemma-3-12b-it:free` - Modelo Google (puede tener rate limits)

## 4. Ventajas de OpenRouter vs Gemini

✅ **Múltiples modelos gratuitos** - No dependes de uno solo
✅ **Límites más generosos** - Hasta 200 requests/día gratis
✅ **Modelos de diferentes proveedores** - OpenAI, Meta, Google, etc.
✅ **No requiere tarjeta de crédito** - Solo para el tier gratuito
✅ **API compatible con OpenAI** - Fácil de usar

## 5. Límites del Tier Gratuito

- **Requests por minuto**: 20
- **Requests por día**: 200
- **Tokens por minuto**: 100,000
- **Tokens por día**: 1,000,000

## 6. Prueba Rápida

Una vez configurada tu API Key, prueba el endpoint:

```bash
curl -X POST http://localhost:3030/api/llm/generar-visita \
  -H "Content-Type: application/json" \
  -d '{
    "fecha": "2024-01-15",
    "horaInicio": "09:00",
    "horaFin": "12:00",
    "actividad": "Visita al centro de acopio",
    "tipo": "Voluntariado",
    "estado": "Completada",
    "pais": "España",
    "comentario": "Gran participación"
  }'
```

## 7. Si Agotas la Cuota

Si llegas al límite de 200 requests/día:

1. **Esperar 24 horas** - La cuota se reinicia diariamente
2. **Cambiar de modelo** - Prueba otro modelo gratuito
3. **Crear otra cuenta** - Puedes tener múltiples cuentas
4. **Upgrade a pago** - $5 te da muchos más requests

## Nota Importante

⚠️ **Nunca compartas tu API Key** - Cada key está asociada a tu cuenta
⚠️ **Guarda tu API Key en .env** - No la subas a git
⚠️ **Monitorea tu uso** - Ve a https://openrouter.ai/activity para ver tu consumo
