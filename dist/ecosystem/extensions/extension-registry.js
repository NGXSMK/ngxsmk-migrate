export class ExtensionRegistry {
    extensions = [];
    /**
     * Registers a community or enterprise extension to encourage "Open Extensibility".
     */
    register(extension) {
        this.extensions.push(extension);
        console.log(`[ECOSYSTEM] Extension Registered: ${extension.id} by ${extension.author} v${extension.version}`);
    }
    /**
     * Returns all extensions that enhance the core platform.
     */
    getExtensions() {
        return this.extensions;
    }
}
