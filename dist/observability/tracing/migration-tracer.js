import { randomUUID } from 'node:crypto';
export class MigrationTracer {
    currentTraceId;
    constructor() {
        this.currentTraceId = randomUUID();
    }
    /**
     * Returns the current trace ID for correlating logs and events.
     */
    getTraceId() {
        return this.currentTraceId;
    }
    /**
     * Starts a new logical trace for a migration sub-operation.
     */
    startSpan(name) {
        console.log(`[TRACE] [${this.currentTraceId}] Starting span: ${name}`);
        return {
            stop: () => console.log(`[TRACE] [${this.currentTraceId}] Completed span: ${name}`)
        };
    }
}
