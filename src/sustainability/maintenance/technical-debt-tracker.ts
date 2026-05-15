export interface TechnicalDebt {
  id: string;
  category: 'CODE_QUALITY' | 'DOCUMENTATION' | 'TESTING' | 'ARCHITECTURE';
  impact: number; // 0-100
}

export class TechnicalDebtTracker {
  private issues: TechnicalDebt[] = [];

  /**
   * Records a piece of technical debt for long-term maintenance tracking.
   */
  recordIssue(issue: TechnicalDebt) {
    this.issues.push(issue);
    console.log(`[SUSTAINABILITY] Technical Debt Recorded: ${issue.category} (Impact: ${issue.impact})`);
  }

  /**
   * Calculates the overall project maintainability score.
   */
  getMaintainabilityScore(): number {
    const totalImpact = this.issues.reduce((sum, i) => sum + i.impact, 0);
    return Math.max(0, 100 - (totalImpact / 10)); // 0-100 score
  }
}