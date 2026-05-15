import { AIOrchestrator } from '../../orchestrator/ai-orchestrator.js';

export class RepairAgent {
  constructor(private readonly ai: AIOrchestrator) { }

  /**
   * Attempts to fix TypeScript/Angular compilation errors after a migration.
   */
  async repair(fileContent: string, errors: string[]) {
    const prompt = `
      The following Angular file has compilation errors after a migration. 
      Please fix the code to resolve the errors while maintaining the modernization intent.
      
      Errors:
      ${errors.join('\n')}
      
      Code:
      ${fileContent}
    `;

    return await this.ai.explain(prompt);
  }
}