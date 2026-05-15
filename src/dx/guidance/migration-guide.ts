import chalk from 'chalk';

export class MigrationGuide {
  /**
   * Provides intelligent guidance for the next steps after an analysis or migration.
   */
  static provideGuidance(stage: 'analysis' | 'migration', results: any) {
    console.log(chalk.bold('\n💡 Next Steps & Guidance:'));
    
    if (stage === 'analysis') {
      console.log(`- Run ${chalk.cyan('ngxsmk migrate --standalone')} to modernize your components.`);
      console.log(`- Review the technical debt report in ${chalk.yellow('ngxsmk-report.md')}.`);
    } else {
      console.log(`- Verify your app with ${chalk.cyan('ng serve')}.`);
      console.log(`- Check ${chalk.yellow('.ngxsmk-backups')} if you need to revert any changes.`);
      console.log('- Consider enabling Signals for better performance.');
    }
  }
}