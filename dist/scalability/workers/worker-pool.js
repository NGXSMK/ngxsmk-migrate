export class WorkerPool {
    activeWorkers = 0;
    maxWorkers;
    constructor(maxWorkers = 4) {
        this.maxWorkers = maxWorkers;
    }
    /**
     * Executes a task if a worker is available, otherwise waits.
     */
    async runTask(task) {
        while (this.activeWorkers >= this.maxWorkers) {
            await new Promise(resolve => setTimeout(resolve, 100));
        }
        this.activeWorkers++;
        try {
            console.log(`[SCALABILITY] Worker started (Active: ${this.activeWorkers}/${this.maxWorkers})`);
            return await task();
        }
        finally {
            this.activeWorkers--;
            console.log(`[SCALABILITY] Worker finished (Active: ${this.activeWorkers}/${this.maxWorkers})`);
        }
    }
}
