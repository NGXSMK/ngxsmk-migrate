import { Project, SourceFile, SyntaxKind, ClassDeclaration, ObjectLiteralExpression } from 'ts-morph';
import { CacheManager } from '../io/cache-manager.js';

export class AngularIntelligence {
  private project: Project;
  private cache: CacheManager;

  constructor(projectPath: string) {
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
  async scanIncrementally(path: string): Promise<SourceFile[]> {
    console.time('IncrementalScan');
    this.project.addSourceFilesAtPaths(`${path}/src/**/*.ts`);
    const files = this.project.getSourceFiles();
    console.timeEnd('IncrementalScan');
    return files;
  }

  getDecoratedClasses(decoratorName: string): ClassDeclaration[] {
    const classes: ClassDeclaration[] = [];
    this.project.getSourceFiles().forEach(file => {
      file.getClasses().forEach(cls => {
        if (cls.getDecorator(decoratorName)) {
          classes.push(cls);
        }
      });
    });
    return classes;
  }

  getComponentMetadata(cls: ClassDeclaration) {
    const decorator = cls.getDecorator('Component');
    if (!decorator) return null;

    const args = decorator.getArguments();
    if (args.length > 0 && args[0].getKind() === SyntaxKind.ObjectLiteralExpression) {
      const obj = args[0] as ObjectLiteralExpression;
      return {
        selector: obj.getProperty('selector')?.getText(),
        templateUrl: obj.getProperty('templateUrl')?.getText(),
        standalone: obj.getProperty('standalone')?.getText() === 'true',
      };
    }
    return null;
  }
}
