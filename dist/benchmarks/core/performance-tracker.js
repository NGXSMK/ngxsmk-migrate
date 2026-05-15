export class PerformanceTracker {
    startTime = 0;
    startMemory = 0;
    start() {
        this.startTime = performance.now();
        this.startMemory = process.memoryUsage().heapUsed / 1024 / 1024;
    }
    stop(name) {
        const durationMs = performance.now() - this.startTime;
        const memoryUsedMb = (process.memoryUsage().heapUsed / 1024 / 1024) - this.startMemory;
        const result = {
            name,
            durationMs,
            memoryUsedMb,
            timestamp: new Date().toISOString()
        };
        console.log(`[BENCHMARK] ${name}: ${durationMs.toFixed(2)}ms | ${memoryUsedMb.toFixed(2)}MB`);
        return result;
    }
}
