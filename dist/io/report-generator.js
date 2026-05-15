import chalk from 'chalk';
import fs from 'fs-extra';
import path from 'node:path';
export class ReportGenerator {
    logs = [];
    log(message) {
        this.logs.push(message);
        console.log(message);
    }
    async saveReport(projectPath) {
        const reportPath = path.join(projectPath, 'ngxsmk-report.md');
        const content = `# ngxsmk-migrate Analysis Report\n\n${this.logs.join('\n\n')}`;
        await fs.writeFile(reportPath, content);
        console.log(chalk.green(`\n📄 Report generated: ${reportPath}`));
    }
}
