import fs from 'fs-extra';
import path from 'node:path';

export class EnvironmentDetector {
  /**
   * Detects the type of Angular workspace (Standard CLI vs Nx).
   */
  static async detectWorkspaceType(projectPath: string): Promise<'cli' | 'nx' | 'unknown'> {
    if (await fs.pathExists(path.join(projectPath, 'nx.json'))) {
      return 'nx';
    }
    if (await fs.pathExists(path.join(projectPath, 'angular.json'))) {
      return 'cli';
    }
    return 'unknown';
  }

  /**
   * Identifies if the project is part of a monorepo.
   */
  static async isMonorepo(projectPath: string): Promise<boolean> {
    const type = await this.detectWorkspaceType(projectPath);
    return type === 'nx' || (type === 'cli' && await fs.pathExists(path.join(projectPath, 'projects')));
  }
}