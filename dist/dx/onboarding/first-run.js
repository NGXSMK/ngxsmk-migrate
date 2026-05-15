import chalk from 'chalk';
import fs from 'fs-extra';
import path from 'node:path';
export class FirstRunExperience {
    /**
     * Welcomes the developer and ensures the environment is ready for the first migration.
     */
    static async welcome(projectPath) {
        console.log(chalk.bold.green('\n🚀 Welcome to ngxsmk-migrate!'));
        console.log('Your expert AI partner for Angular modernization.\n');
        const configPath = path.join(projectPath, 'ngxsmk.config.ts');
        if (!(await fs.pathExists(configPath))) {
            console.log(`${chalk.blue('ℹ')} No configuration found. Using sensible defaults.`);
            console.log(`- Run ${chalk.cyan('ngxsmk init')} to create a custom configuration.\n`);
        }
        console.log(chalk.bold('Quick Start:'));
        console.log(`1. ${chalk.cyan('ngxsmk analyze')} - Scan your project for technical debt.`);
        console.log(`2. ${chalk.cyan('ngxsmk migrate --standalone')} - Modernize your components.`);
        console.log(`3. ${chalk.cyan('ngxsmk report')} - View your modernization score.\n`);
    }
}
