export interface SuccessStory {
  projectId: string;
  filesMigrated: number;
  timeSaved: number;
  accuracy: number;
}

export class EvidenceCollector {
  private readonly stories: SuccessStory[] = [];

  /**
   * Records a successful migration story to build community and enterprise trust.
   */
  recordSuccess(story: SuccessStory) {
    this.stories.push(story);
    console.log(`[ADOPTION] New success story recorded: ${story.filesMigrated} files with ${story.accuracy * 100}% accuracy.`);
  }

  /**
   * Returns aggregated evidence for the project's landing page or README.
   */
  getAggregatedEvidence() {
    const totalFiles = this.stories.reduce((sum, s) => sum + s.filesMigrated, 0);
    const totalHours = this.stories.reduce((sum, s) => sum + s.timeSaved, 0);

    return {
      totalFilesMigrated: totalFiles,
      totalEngineeringHoursSaved: totalHours,
      averageAccuracy: this.stories.length ? this.stories.reduce((sum, s) => sum + s.accuracy, 0) / this.stories.length : 0
    };
  }
}