export class PlatformCore {
    services = [];
    /**
     * Registers a core platform service to enable "Platform Thinking".
     */
    registerService(service) {
        this.services.push(service);
        console.log(`[ECOSYSTEM] Core Platform Service Registered: ${service.name} (${service.status})`);
    }
    /**
     * Returns all active services that form the modernization platform.
     */
    getActiveServices() {
        return this.services.filter(s => s.status === 'ACTIVE');
    }
}
