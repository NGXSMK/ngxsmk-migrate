export interface EcosystemExtension {
  id: string;
  type: 'PLUGIN' | 'INTEGRATION' | 'ENTERPRISE_TOOL';
  author: string;
  version: string;
}

export class ExtensionRegistry {
  private readonly extensions: EcosystemExtension[] = [];

  /**
   * Registers a community or enterprise extension to encourage "Open Extensibility".
   */
  register(extension: EcosystemExtension) {
    this.extensions.push(extension);
    console.log(`[ECOSYSTEM] Extension Registered: ${extension.id} by ${extension.author} v${extension.version}`);
  }

  /**
   * Returns all extensions that enhance the core platform.
   */
  getExtensions(): EcosystemExtension[] {
    return this.extensions;
  }
}