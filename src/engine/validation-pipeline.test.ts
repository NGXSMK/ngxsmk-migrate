import { Project } from 'ts-morph';
import { ValidationPipeline } from './validation-pipeline.js';

describe('ValidationPipeline', () => {
  let project: Project;
  let pipeline: ValidationPipeline;

  beforeEach(() => {
    project = new Project({ useInMemoryFileSystem: true });
    pipeline = new ValidationPipeline();
  });

  it('should validate valid TypeScript code', async () => {
    const sourceFile = project.createSourceFile('test.ts', 'const x: number = 10;');
    const isValid = await pipeline.validateTypeScript(sourceFile);
    expect(isValid).toBe(true);
  });

  it('should fail on invalid TypeScript code', async () => {
    const sourceFile = project.createSourceFile('test.ts', 'const x: number = "string";');
    const isValid = await pipeline.validateTypeScript(sourceFile);
    expect(isValid).toBe(false);
  });

  it('should verify presence of Angular metadata', async () => {
    const sourceFile = project.createSourceFile('test.component.ts', `
      import { Component } from '@angular/core';
      @Component({ selector: 'app-root', template: '' })
      export class AppComponent {}
    `);
    const hasMetadata = await pipeline.verifyAngularMetadata(sourceFile);
    expect(hasMetadata).toBe(true);
  });
});
