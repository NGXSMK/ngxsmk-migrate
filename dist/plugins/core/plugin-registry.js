export class PluginRegistry {
    plugins = new Map();
    register(plugin) {
        if (this.plugins.has(plugin.name)) {
            throw new Error(`Plugin with name "${plugin.name}" is already registered.`);
        }
        this.plugins.set(plugin.name, plugin);
        console.log(`[PLUGINS] Registered: ${plugin.name} v${plugin.version}`);
    }
    getPlugin(name) {
        return this.plugins.get(name);
    }
    getAllPlugins() {
        return Array.from(this.plugins.values());
    }
}
