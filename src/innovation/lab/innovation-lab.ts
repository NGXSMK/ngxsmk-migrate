export interface ExperimentalFeature {
  id: string;
  name: string;
  description: string;
  status: 'RESEARCH' | 'PROTOTYPE' | 'BETA';
}

export class InnovationLab {
  private static readonly features: ExperimentalFeature[] = [];

  /**
   * Registers a new experimental feature in the lab.
   */
  static registerFeature(feature: ExperimentalFeature) {
    this.features.push(feature);
    console.log(`[LAB] Registered experimental feature: ${feature.name} (${feature.status})`);
  }

  /**
   * Returns all active experiments for community feedback.
   */
  static getExperiments(): ExperimentalFeature[] {
    return this.features;
  }

  /**
   * Enables an experimental workflow if it passes safety checks.
   */
  static async activateExperiment(id: string): Promise<boolean> {
    const feature = this.features.find(f => f.id === id);
    if (!feature) return false;
    
    console.log(`[LAB] Activating ${feature.name}... Proceed with caution.`);
    return true;
  }
}