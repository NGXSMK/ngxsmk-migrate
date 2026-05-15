import { SyntaxKind } from 'ts-morph';
export class ASTTransformationEngine {
    /**
     * Safely adds or updates an import in a source file.
     */
    updateImport(sourceFile, moduleName, namedImports) {
        const existingImport = sourceFile.getImportDeclaration(moduleName);
        if (existingImport) {
            const currentNamedImports = existingImport.getNamedImports().map(ni => ni.getName());
            const newImports = [...new Set([...currentNamedImports, ...namedImports])];
            existingImport.removeNamedImports();
            existingImport.addNamedImports(newImports);
        }
        else {
            sourceFile.addImportDeclaration({
                moduleSpecifier: moduleName,
                namedImports: namedImports
            });
        }
    }
    /**
     * Finds a decorator (like @Component) and extracts its metadata object.
     */
    getDecoratorMetadata(decorator) {
        const args = decorator.getArguments();
        if (args.length > 0 && args[0].getKind() === SyntaxKind.ObjectLiteralExpression) {
            return args[0];
        }
        return null;
    }
    /**
     * Safely updates metadata in an Angular decorator.
     */
    updateMetadata(decorator, key, value) {
        const metadata = this.getDecoratorMetadata(decorator);
        if (!metadata)
            return;
        const property = metadata.getProperty(key);
        if (property) {
            property.remove();
        }
        metadata.addPropertyAssignment({
            name: key,
            initializer: typeof value === 'string' ? `'${value}'` : value.toString()
        });
    }
    /**
     * Saves changes while preserving formatting.
     */
    async saveSafely(sourceFile) {
        sourceFile.formatText();
        await sourceFile.save();
    }
}
