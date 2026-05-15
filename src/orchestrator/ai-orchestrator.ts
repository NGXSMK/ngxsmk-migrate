import { AIProvider } from './ai-provider.interface.js';
import { PromptBuilder, PromptContext } from './prompt-builder.js';

export class AIOrchestrator {
  constructor(private provider: AIProvider) {}

  /**
   * Performs a context-aware migration ask.
   */
  async migrate(context: PromptContext, modelName?: string) {
    const rawPrompt = PromptBuilder.buildMigrationPrompt(context);
    return this.provider.ask(rawPrompt, modelName);
  }

  /**
   * Simple explain ask.
   */
  async explain(topic: string, modelName?: string) {
    return this.provider.explain(topic, modelName);
  }

  /**
   * General purpose AI ask.
   */
  async ask(prompt: string, modelName?: string) {
    return this.provider.ask(prompt, modelName);
  }
}
