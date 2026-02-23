import OpenAI from 'openai';
import config from '../config.js';

class LLMService {
  constructor() {
    this.openrouter = new OpenAI({
      baseURL: "https://openrouter.ai/api/v1",
      apiKey: config.openrouterApiKey,
      defaultHeaders: {
        "HTTP-Referer": config.appUrl || "https://thera-ia-movida-app.9zx1zd.easypanel.host/home",
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
        name: 'groq-llama-3.3',
        client: this.groq,
        model: "llama-3.3-70b-versatile"
      },
      {
        name: 'groq-llama-3.1',
        client: this.groq,
        model: "llama-3.1-8b-instant"
      },
      {
        name: 'groq-gpt-oss-20b',
        client: this.groq,
        model: "openai/gpt-oss-20b"
      },
      {
        name: 'groq-qwen3',
        client: this.groq,
        model: "qwen/qwen3-32b"
      },
      {
        name: 'openrouter',
        client: this.openrouter,
        model: "meta-llama/llama-3.2-3b-instruct:free"
      }
    ];

    let lastError = null;

    for (const provider of providers) {
      try {
        console.log(`Intentando generar con ${provider.name}...`);
        
        const completion = await provider.client.chat.completions.create({
          model: provider.model,
          messages: messages,
          temperature: 0.8,
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
        
        // Si es rate limit (429) o error de proveedor (402), continuar con el siguiente proveedor
        if (error.status === 429 || error.status === 402 ||
            (error.message && error.message.includes('rate-limited')) ||
            (error.message && error.message.includes('rate limit')) ||
            (error.message && error.message.includes('Provider returned error'))) {
          console.log(`${provider.name} tiene límite o error, probando siguiente proveedor...`);
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

  async generateEnsemble(messages, options = {}) {
    const { max_tokens = 1500 } = options;
    
    const groqModels = [
      {
        name: 'Llama-3.3-70B',
        client: this.groq,
        model: "llama-3.3-70b-versatile"
      },
      {
        name: 'Llama-3.1-8B',
        client: this.groq,
        model: "llama-3.1-8b-instant"
      },
      {
        name: 'GPT-OSS-20B',
        client: this.groq,
        model: "openai/gpt-oss-20b"
      },
      {
        name: 'Qwen3-32B',
        client: this.groq,
        model: "qwen/qwen3-32b"
      }
    ];

    console.log('🚀 Ejecutando ensemble con 4 modelos en paralelo...');
    
    const promises = groqModels.map(async (modelConfig) => {
      try {
        const completion = await modelConfig.client.chat.completions.create({
          model: modelConfig.model,
          messages: messages,
          temperature: 0.8,
          max_tokens: max_tokens
        });
        
        console.log(`✅ ${modelConfig.name} respondió`);
        
        return {
          success: true,
          name: modelConfig.name,
          content: completion.choices[0].message.content,
          model: completion.model
        };
      } catch (error) {
        console.error(`❌ Error con ${modelConfig.name}:`, error.message);
        return {
          success: false,
          name: modelConfig.name,
          error: error.message
        };
      }
    });

    const results = await Promise.all(promises);
    
    const successfulResponses = results.filter(r => r.success);
    
    if (successfulResponses.length === 0) {
      return {
        success: false,
        error: 'Ningún modelo pudo generar una respuesta',
        results
      };
    }

    console.log(`📊 ${successfulResponses.length}/4 modelos respondieron correctamente`);

    return {
      success: true,
      results: successfulResponses,
      count: successfulResponses.length
    };
  }
}

export const llmService = new LLMService();
