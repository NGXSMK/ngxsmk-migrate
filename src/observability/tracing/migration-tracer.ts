import { randomUUID } from 'node:crypto';

export class MigrationTracer {
  private readonly currentTraceId: string;

  constructor() {
    this.currentTraceId = randomUUID();
  }

  /**
   * Returns the current trace ID for correlating logs and events.
   */
  getTraceId(): string {
    return this.currentTraceId;
  }

  /**
   * Starts a new logical trace for a migration sub-operation.
   */
  startSpan(name: string) {
    console.log(`[TRACE] [${this.currentTraceId}] Starting span: ${name}`);
    return {
      stop: () => console.log(`[TRACE] [${this.currentTraceId}] Completed span: ${name}`)
    };
  }
}