import chalk from 'chalk';

export class UILogger {
  static success(message: string) {
    console.log(`${chalk.green('✔')} ${message}`);
  }

  static info(message: string) {
    console.log(`${chalk.blue('ℹ')} ${message}`);
  }

  static warning(message: string) {
    console.log(`${chalk.yellow('⚠')} ${message}`);
  }

  static error(message: string) {
    console.log(`${chalk.red('✖')} ${message}`);
  }

  static stage(name: string) {
    console.log(`\n${chalk.bold.magenta('>>>')} ${chalk.bold(name.toUpperCase())}`);
  }
}