import { ClassDeclaration } from 'ts-morph';
import { ASTTransformationEngine } from '../../ast/transformation-engine.js';

export class StandaloneMigrator {
  constructor(private ast: ASTTransformationEngine) {}

  async migrateToStandalone(component: ClassDeclaration) {
    const decorator = component.getDecorator('Component');
    if (!decorator) return;

    console.log(`Migrating ${component.getName()} to standalone...`);
    
    // Set standalone: true
    this.ast.updateMetadata(decorator, 'standalone', true);
    
    // Initialize imports array if missing
    this.ast.updateMetadata(decorator, 'imports', '[]');
    
    // Add CommonModule to imports by default for safe migration
    this.ast.updateImport(component.getSourceFile(), '@angular/common', ['CommonModule']);
  }
}