export interface ModernizationMetrics {
  standaloneCoverage: number;
  signalsAdoption: number;
  deprecatedApiCount: number;
  overallScore: number;
}

export class ModernizationScore {
  /**
   * Calculates a modernization score (0-100) based on project metrics.
   */
  static calculate(metrics: Omit<ModernizationMetrics, 'overallScore'>): ModernizationMetrics {
    const overallScore = (metrics.standaloneCoverage * 0.4) + 
                         (metrics.signalsAdoption * 0.4) + 
                         (Math.max(0, 100 - metrics.deprecatedApiCount) * 0.2);
                         
    return {
      ...metrics,
      overallScore: Math.round(overallScore)
    };
  }
}