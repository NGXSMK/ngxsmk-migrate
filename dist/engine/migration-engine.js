export class MigrationEngine {
    plugins = [];
    registerPlugin(plugin) {
        this.plugins.push(plugin);
    }
    /**
     * Runs analysis using parallel processing where possible.
     */
    async runAnalysis(context) {
        console.time('ParallelAnalysis');
        const results = await Promise.all(this.plugins.map(plugin => plugin.analyze(context)));
        console.timeEnd('ParallelAnalysis');
        return results;
    }
    /**
     * Runs migration incrementally.
     */
    async runMigration(context) {
        for (const plugin of this.plugins) {
            // Plugins are run sequentially to maintain project state consistency,
            // but individual plugin operations can be parallelized.
            await plugin.migrate(context);
        }
    }
}
