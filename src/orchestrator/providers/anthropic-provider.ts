import Anthropic from '@anthropic-ai/sdk';
import { AIProvider } from '../ai-provider.interface.js';

export class AnthropicProvider implements AIProvider {
  name = 'Anthropic';
  private readonly client: Anthropic;
  private readonly defaultModel: string;

  constructor(apiKey: string, model: string = 'claude-3-5-sonnet-20240620') {
    this.client = new Anthropic({ apiKey });
    this.defaultModel = model;
  }

  async ask(prompt: string, model: string = this.defaultModel): Promise<string> {
    const response = await this.client.messages.create({
      model,
      max_tokens: 4096,
      messages: [{ role: 'user', content: prompt }],
    });
    // @ts-ignore
    return response.content[0].text || '';
  }

  async explain(topic: string, model: string = this.defaultModel): Promise<string> {
    return this.ask(`Explain this Angular concept: ${topic}`, model);
  }
}
