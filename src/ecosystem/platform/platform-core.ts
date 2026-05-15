export interface PlatformService {
  id: string;
  name: string;
  status: 'ACTIVE' | 'EXPERIMENTAL';
}

export class PlatformCore {
  private readonly services: PlatformService[] = [];

  /**
   * Registers a core platform service to enable "Platform Thinking".
   */
  registerService(service: PlatformService) {
    this.services.push(service);
    console.log(`[ECOSYSTEM] Core Platform Service Registered: ${service.name} (${service.status})`);
  }

  /**
   * Returns all active services that form the modernization platform.
   */
  getActiveServices(): PlatformService[] {
    return this.services.filter(s => s.status === 'ACTIVE');
  }
}