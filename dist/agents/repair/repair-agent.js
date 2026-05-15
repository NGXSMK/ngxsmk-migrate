export class RepairAgent {
    ai;
    constructor(ai) {
        this.ai = ai;
    }
    /**
     * Attempts to fix TypeScript/Angular compilation errors after a migration.
     */
    async repair(fileContent, errors) {
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
