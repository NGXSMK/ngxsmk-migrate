import { AIOrchestrator } from '../../orchestrator/ai-orchestrator.js';

export interface MigrationStep {
  priority: number;
  description: string;
  files: string[];
}

export class PlanningAgent {
  constructor(private readonly ai: AIOrchestrator) { }

  /**
   * Analyzes project state and creates a multi-step migration plan.
   */
  async createPlan(projectSummary: string): Promise<MigrationStep[]> {
    const prompt = `
      Based on this Angular project summary, create a prioritized migration plan.
      
      Summary:
      ${projectSummary}
      
      Output the plan as a JSON list of steps, each with: priority (1-5), description, and target files.
    `;

    await this.ai.explain(prompt);
    // In a real implementation, this would parse the JSON response
    console.log('[AGENT] Migration Plan Created');
    return [];
  }
}