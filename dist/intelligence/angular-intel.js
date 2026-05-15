import { Project, SyntaxKind } from 'ts-morph';
import { CacheManager } from '../io/cache-manager.js';
export class AngularIntelligence {
    project;
    cache;
    constructor(projectPath) {
        this.project = new Project({
            tsConfigFilePath: `${projectPath}/tsconfig.json`,
            skipAddingFilesFromTsConfig: true,
        });
        this.cache = new CacheManager(projectPath);
    }
    /**
     * Scans files incrementally.
     * In a real implementation, this would compare file hashes against the cache.
     */
    async scanIncrementally(path) {
        console.time('IncrementalScan');
        this.project.addSourceFilesAtPaths(`${path}/src/**/*.ts`);
        const files = this.project.getSourceFiles();
        console.timeEnd('IncrementalScan');
        return files;
    }
    getDecoratedClasses(decoratorName) {
        const classes = [];
        this.project.getSourceFiles().forEach(file => {
            file.getClasses().forEach(cls => {
                if (cls.getDecorator(decoratorName)) {
                    classes.push(cls);
                }
            });
        });
        return classes;
    }
    getComponentMetadata(cls) {
        const decorator = cls.getDecorator('Component');
        if (!decorator)
            return null;
        const args = decorator.getArguments();
        if (args.length > 0 && args[0].getKind() === SyntaxKind.ObjectLiteralExpression) {
            const obj = args[0];
            return {
                selector: obj.getProperty('selector')?.getText(),
                templateUrl: obj.getProperty('templateUrl')?.getText(),
                standalone: obj.getProperty('standalone')?.getText() === 'true',
            };
        }
        return null;
    }
}
