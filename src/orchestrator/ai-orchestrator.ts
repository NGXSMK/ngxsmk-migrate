import { GoogleGenerativeAI } from '@google/generative-ai';
import { PromptBuilder, PromptContext } from './prompt-builder.js';
import { SecretMasker } from '../security/ai/masking.js';

export class AIOrchestrator {
  private readonly genAI: GoogleGenerativeAI;
  private readonly apiKey: string;
  private readonly defaultModel: string;

  constructor(apiKey: string, modelName: string = process.env.GEMINI_MODEL || 'gemini-1.5-flash') {
    this.apiKey = apiKey;
    this.defaultModel = modelName;
    this.genAI = new GoogleGenerativeAI(apiKey);
  }

  /**
   * Performs a context-aware migration ask.
   */
  async migrate(context: PromptContext, modelName: string = this.defaultModel) {
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
  async explain(topic: string, modelName: string = this.defaultModel) {
    const model = this.genAI.getGenerativeModel({ model: modelName });
    const result = await model.generateContent(`Explain this Angular concept: ${topic}`);
    return result.response.text();
  }

  /**
   * General purpose AI ask.
   */
  async ask(prompt: string, modelName: string = this.defaultModel) {
    const model = this.genAI.getGenerativeModel({ model: modelName });
    const result = await model.generateContent(prompt);
    return result.response.text();
  }
}
