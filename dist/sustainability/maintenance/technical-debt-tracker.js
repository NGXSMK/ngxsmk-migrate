export class TechnicalDebtTracker {
    issues = [];
    /**
     * Records a piece of technical debt for long-term maintenance tracking.
     */
    recordIssue(issue) {
        this.issues.push(issue);
        console.log(`[SUSTAINABILITY] Technical Debt Recorded: ${issue.category} (Impact: ${issue.impact})`);
    }
    /**
     * Calculates the overall project maintainability score.
     */
    getMaintainabilityScore() {
        const totalImpact = this.issues.reduce((sum, i) => sum + i.impact, 0);
        return Math.max(0, 100 - (totalImpact / 10)); // 0-100 score
    }
}
