export interface FeatureIdea {
  title: string;
  impact: 'LOW' | 'MEDIUM' | 'HIGH';
  effort: 'LOW' | 'MEDIUM' | 'HIGH';
  communityDemand: number; // 0-10
}

export class FeatureEvaluator {
  /**
   * Evaluates a feature idea based on impact, effort, and community demand.
   * Higher score means higher priority.
   */
  static evaluate(feature: FeatureIdea): number {
    const impactMap = { LOW: 1, MEDIUM: 2, HIGH: 3 };
    const effortMap = { LOW: 3, MEDIUM: 2, HIGH: 1 }; // Lower effort is better
    
    return (impactMap[feature.impact] * 10) + 
           (effortMap[feature.effort] * 5) + 
           (feature.communityDemand * 2);
  }
}