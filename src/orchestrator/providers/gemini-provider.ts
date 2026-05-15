import { GoogleGenerativeAI } from '@google/generative-ai';
import { AIProvider } from './ai-provider.interface.js';

export class GeminiProvider implements AIProvider {
  name = 'Gemini';
  private genAI: GoogleGenerativeAI;
  private defaultModel: string;

  constructor(apiKey: string, model: string = 'gemini-1.5-flash') {
    this.genAI = new GoogleGenerativeAI(apiKey);
    this.defaultModel = model;
  }

  async ask(prompt: string, model: string = this.defaultModel): Promise<string> {
    const genModel = this.genAI.getGenerativeModel({ model });
    const result = await genModel.generateContent(prompt);
    return result.response.text();
  }

  async explain(topic: string, model: string = this.defaultModel): Promise<string> {
    return this.ask(`Explain this Angular concept: ${topic}`, model);
  }
}
