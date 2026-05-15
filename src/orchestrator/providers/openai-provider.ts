import OpenAI from 'openai';
import { AIProvider } from '../ai-provider.interface.js';

export class OpenAIProvider implements AIProvider {
  name = 'OpenAI';
  private client: OpenAI;
  private defaultModel: string;

  constructor(apiKey: string, model: string = 'gpt-4o') {
    this.client = new OpenAI({ apiKey });
    this.defaultModel = model;
  }

  async ask(prompt: string, model: string = this.defaultModel): Promise<string> {
    const response = await this.client.chat.completions.create({
      model,
      messages: [{ role: 'user', content: prompt }],
    });
    return response.choices[0].message.content || '';
  }

  async explain(topic: string, model: string = this.defaultModel): Promise<string> {
    return this.ask(`Explain this Angular concept: ${topic}`, model);
  }
}
