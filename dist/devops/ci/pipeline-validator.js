export class PipelineValidator {
    /**
     * Detects if the current process is running within a CI environment.
     */
    static isCI() {
        return !!process.env.CI || !!process.env.GITHUB_ACTIONS || !!process.env.GITLAB_CI;
    }
    /**
     * Enforces CI-specific constraints (e.g., non-interactive mode).
     */
    static enforceCIConstraints() {
        if (this.isCI()) {
            console.log('[DEVOPS] CI Environment detected. Enabling non-interactive mode.');
            // Logic to disable spinners and interactive prompts would go here
        }
    }
}
