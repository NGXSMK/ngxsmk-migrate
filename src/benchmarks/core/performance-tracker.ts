export interface BenchmarkResult {
  name: string;
  durationMs: number;
  memoryUsedMb: number;
  timestamp: string;
}

export class PerformanceTracker {
  private startTime: number = 0;
  private startMemory: number = 0;

  start() {
    this.startTime = performance.now();
    this.startMemory = process.memoryUsage().heapUsed / 1024 / 1024;
  }

  stop(name: string): BenchmarkResult {
    const durationMs = performance.now() - this.startTime;
    const memoryUsedMb = (process.memoryUsage().heapUsed / 1024 / 1024) - this.startMemory;
    
    const result: BenchmarkResult = {
      name,
      durationMs,
      memoryUsedMb,
      timestamp: new Date().toISOString()
    };

    console.log(`[BENCHMARK] ${name}: ${durationMs.toFixed(2)}ms | ${memoryUsedMb.toFixed(2)}MB`);
    return result;
  }
}