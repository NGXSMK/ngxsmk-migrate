import { execSync } from 'node:child_process';

export class NxAdapter {
  /**
   * Detects affected projects in an Nx workspace.
   */
  static getAffectedProjects(): string[] {
    try {
      const output = execSync('npx nx show projects --affected', { encoding: 'utf-8' });
      return output.split('\n').filter(p => !!p.trim());
    } catch {
      return [];
    }
  }

  /**
   * Executes a migration across all affected projects in the monorepo.
   */
  static async migrateAffected(migrationCmd: string) {
    console.log(`[INTEGRATION] Running Nx migration: ${migrationCmd} for affected projects...`);
    // Logic to bridge ngxsmk-migrate with Nx affected commands would go here
  }
}