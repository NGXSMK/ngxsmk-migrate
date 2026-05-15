export class PlanningAgent {
    ai;
    constructor(ai) {
        this.ai = ai;
    }
    /**
     * Analyzes project state and creates a multi-step migration plan.
     */
    async createPlan(projectSummary) {
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
