export class RoiCalculator {
  /**
   * Calculates the estimated time saved (in hours) by using ngxsmk-migrate vs manual migration.
   */
  static calculateTimeSaved(fileCount: number, complexityFactor: number = 1): number {
    const manualTimePerFile = 2; // hours
    const aiTimePerFile = 0.1;     // hours

    const manualTotal = fileCount * manualTimePerFile * complexityFactor;
    const aiTotal = fileCount * aiTimePerFile * complexityFactor;

    return Math.round(manualTotal - aiTotal);
  }

  /**
   * Generates a value proposition message based on migration results.
   */
  static getValueProposition(timeSaved: number): string {
    return `By using ngxsmk-migrate, you have potentially saved ${timeSaved} hours of manual engineering effort.`;
  }
}