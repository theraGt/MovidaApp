import OpenAI from 'openai';
import config from '../config.js';

class LLMService {
  constructor() {
    this.openrouter = new OpenAI({
      baseURL: "https://openrouter.ai/api/v1",
      apiKey: config.openrouterApiKey,
      defaultHeaders: {
        "HTTP-Referer": config.appUrl || "http://localhost:3000",
        "X-Title": "Movida App",
      }
    });

    this.groq = new OpenAI({
      baseURL: "https://api.groq.com/openai/v1",
      apiKey: config.groqApiKey
    });

    this.currentProvider = 'openrouter';
  }

  async generateWithFallback(messages, options = {}) {
    const { temperature = 0.7, max_tokens = 1000 } = options;
    
    const providers = [
      {
        name: 'openrouter',
        client: this.openrouter,
        model: "meta-llama/llama-3.2-3b-instruct:free"
      },
      {
        name: 'groq',
        client: this.groq,
        model: "llama-3.1-8b-instant"
      }
    ];

    let lastError = null;

    for (const provider of providers) {
      try {
        console.log(`Intentando generar con ${provider.name}...`);
        
        const completion = await provider.client.chat.completions.create({
          model: provider.model,
          messages: messages,
          temperature: temperature,
          max_tokens: max_tokens
        });

        console.log(`Éxito con ${provider.name}`);
        this.currentProvider = provider.name;
        
        return {
          success: true,
          content: completion.choices[0].message.content,
          model: completion.model,
          provider: provider.name
        };

      } catch (error) {
        console.error(`Error con ${provider.name}:`, error.message);
        lastError = error;
        
        // Si es rate limit (429), continuar con el siguiente proveedor
        if (error.status === 429 || 
            (error.message && error.message.includes('rate-limited')) ||
            (error.message && error.message.includes('rate limit'))) {
          console.log(`${provider.name} tiene rate limit, probando siguiente proveedor...`);
          continue;
        }
        
        // Si es otro tipo de error, también intentar con el siguiente
        if (error.status === 404 || error.status === 400) {
          console.log(`${provider.name} no disponible, probando siguiente proveedor...`);
          continue;
        }
        
        // Para otros errores, lanzar el error
        throw error;
      }
    }

    // Si todos los proveedores fallaron
    return {
      success: false,
      error: 'Todos los proveedores de IA están temporalmente no disponibles',
      details: lastError?.message || 'Rate limit en todos los proveedores',
      code: 429
    };
  }
}

export const llmService = new LLMService();
