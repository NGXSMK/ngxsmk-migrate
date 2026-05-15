export class StandaloneMigrator {
    ast;
    constructor(ast) {
        this.ast = ast;
    }
    async migrateToStandalone(component) {
        const decorator = component.getDecorator('Component');
        if (!decorator)
            return;
        console.log(`Migrating ${component.getName()} to standalone...`);
        // Set standalone: true
        this.ast.updateMetadata(decorator, 'standalone', true);
        // Initialize imports array if missing
        this.ast.updateMetadata(decorator, 'imports', '[]');
        // Add CommonModule to imports by default for safe migration
        this.ast.updateImport(component.getSourceFile(), '@angular/common', ['CommonModule']);
    }
}
