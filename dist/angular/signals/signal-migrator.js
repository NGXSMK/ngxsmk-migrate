export class SignalMigrator {
    ai;
    constructor(ai) {
        this.ai = ai;
    }
    async suggestSignalMigration(component) {
        const content = component.getSourceFile().getText();
        const prompt = `
      Analyze this Angular component and suggest how to migrate RxJS state (BehaviorSubjects) to Angular Signals.
      
      Code:
      ${content}
    `;
        return await this.ai.ask(prompt);
    }
}
