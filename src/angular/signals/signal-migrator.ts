import { ClassDeclaration } from 'ts-morph';
import { AIOrchestrator } from '../../orchestrator/ai-orchestrator.js';

export class SignalMigrator {
  constructor(private ai: AIOrchestrator) {}

  async suggestSignalMigration(component: ClassDeclaration) {
    const content = component.getSourceFile().getText();
    const prompt = `
      Analyze this Angular component and suggest how to migrate RxJS state (BehaviorSubjects) to Angular Signals.
      
      Code:
      ${content}
    `;
    
    return await this.ai.ask(prompt);
  }
}