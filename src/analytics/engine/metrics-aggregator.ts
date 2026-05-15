export interface MigrationEvent {
  type: string;
  duration: number;
  success: boolean;
  fileCount: number;
}

export class MetricsAggregator {
  private readonly events: MigrationEvent[] = [];

  recordEvent(event: MigrationEvent) {
    this.events.push(event);
  }

  getSummary() {
    const totalDuration = this.events.reduce((sum, e) => sum + e.duration, 0);
    const successCount = this.events.filter(e => e.success).length;

    return {
      totalMigrations: this.events.length,
      averageDurationMs: this.events.length ? totalDuration / this.events.length : 0,
      successRate: this.events.length ? (successCount / this.events.length) * 100 : 0,
      totalFilesAffected: this.events.reduce((sum, e) => sum + e.fileCount, 0)
    };
  }
}