import { GoogleGenerativeAI } from '@google/generative-ai';
import { PromptBuilder } from './prompt-builder.js';
import { SecretMasker } from '../security/ai/masking.js';
export class AIOrchestrator {
    genAI;
    apiKey;
    constructor(apiKey) {
        this.apiKey = apiKey;
        this.genAI = new GoogleGenerativeAI(apiKey);
    }
    /**
     * Performs a context-aware migration ask.
     */
    async migrate(context, modelName = 'gemini-1.5-flash') {
        const rawPrompt = PromptBuilder.buildMigrationPrompt(context);
        // Safety: Mask the prompt before any logging or potential exposure
        const safePrompt = SecretMasker.mask(rawPrompt, [this.apiKey]);
        const model = this.genAI.getGenerativeModel({ model: modelName });
        const result = await model.generateContent(safePrompt);
        return result.response.text();
    }
    /**
     * Simple explain ask.
     */
    async explain(topic, modelName = 'gemini-1.5-flash') {
        const model = this.genAI.getGenerativeModel({ model: modelName });
        const result = await model.generateContent(`Explain this Angular concept: ${topic}`);
        return result.response.text();
    }
    /**
     * General purpose AI ask.
     */
    async ask(prompt, modelName = 'gemini-1.5-flash') {
        const model = this.genAI.getGenerativeModel({ model: modelName });
        const result = await model.generateContent(prompt);
        return result.response.text();
    }
}
