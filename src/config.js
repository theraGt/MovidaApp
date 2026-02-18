import { config } from 'dotenv';

config()

export default {
    port: process.env.PORT,
    openrouterApiKey: process.env.OPENROUTER_API_KEY,
    groqApiKey: process.env.GROQ_API_KEY,
    appUrl: process.env.APP_URL || 'http://localhost:3000'
}
