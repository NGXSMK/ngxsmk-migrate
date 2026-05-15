import { execSync } from 'node:child_process';
export class AngularCliAdapter {
    /**
     * Executes an Angular CLI command and returns the output.
     */
    static runCommand(command) {
        try {
            console.log(`[INTEGRATION] Running ng ${command}...`);
            return execSync(`ng ${command}`, { encoding: 'utf-8' });
        }
        catch (error) {
            console.error(`[INTEGRATION] Error running ng ${command}: ${error.message}`);
            return '';
        }
    }
    /**
     * Verifies if the project is in a clean state before migration.
     */
    static isGitClean() {
        try {
            const status = execSync('git status --porcelain', { encoding: 'utf-8' });
            return status.trim() === '';
        }
        catch {
            return true; // Assume clean if git is not present
        }
    }
}
