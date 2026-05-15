import { AIOrchestrator } from '../../orchestrator/ai-orchestrator.js';

export class ExplanationGenerator {
  constructor(private readonly ai: AIOrchestrator) { }

  /**
   * Generates a developer-friendly explanation of an Angular modernization step.
   */
  async explainModernization(codeBefore: string, codeAfter: string): Promise<string> {
    const prompt = `
      As an Angular modernization expert, explain the architectural improvements made in this code transformation.
      Focus on why these changes (e.g. standalone, signals) make the application better.
      
      Before:
      ${codeBefore}
      
      After:
      ${codeAfter}
    `;

    return await this.ai.explain(prompt);
  }
}