import { MigrationPlugin } from '../plugins/plugin.interface.js';

export class MigrationEngine {
  private readonly plugins: MigrationPlugin[] = [];

  registerPlugin(plugin: MigrationPlugin) {
    this.plugins.push(plugin);
  }

  /**
   * Runs analysis using parallel processing where possible.
   */
  async runAnalysis(context: any) {
    console.time('ParallelAnalysis');
    const results = await Promise.all(
      this.plugins.map(plugin => plugin.analyze(context))
    );
    console.timeEnd('ParallelAnalysis');
    return results;
  }

  /**
   * Runs migration incrementally.
   */
  async runMigration(context: any) {
    for (const plugin of this.plugins) {
      // Plugins are run sequentially to maintain project state consistency,
      // but individual plugin operations can be parallelized.
      await plugin.migrate(context);
    }
  }
}
