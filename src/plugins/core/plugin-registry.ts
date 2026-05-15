import { MigrationPlugin } from './plugin-interface.js';

export class PluginRegistry {
  private readonly plugins: Map<string, MigrationPlugin> = new Map();

  register(plugin: MigrationPlugin) {
    if (this.plugins.has(plugin.name)) {
      throw new Error(`Plugin with name "${plugin.name}" is already registered.`);
    }
    this.plugins.set(plugin.name, plugin);
    console.log(`[PLUGINS] Registered: ${plugin.name} v${plugin.version}`);
  }

  getPlugin(name: string): MigrationPlugin | undefined {
    return this.plugins.get(name);
  }

  getAllPlugins(): MigrationPlugin[] {
    return Array.from(this.plugins.values());
  }
}