export class StructuredLogger {
    /**
     * Logs a structured message in JSON format for enterprise log aggregators.
     */
    static log(entry) {
        const fullEntry = {
            ...entry,
            timestamp: new Date().toISOString(),
        };
        // Output as structured JSON in production/CI, human-readable in dev
        if (process.env.CI || process.env.NODE_ENV === 'production') {
            console.log(JSON.stringify(fullEntry));
        }
        else {
            const color = this.getLogColor(entry.level);
            console.log(`${color}[${fullEntry.level.toUpperCase()}]\x1b[0m ${fullEntry.message}`);
        }
    }
    static getLogColor(level) {
        switch (level) {
            case 'error': return '\x1b[31m';
            case 'warn': return '\x1b[33m';
            default: return '\x1b[32m';
        }
    }
}
