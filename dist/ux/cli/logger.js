import chalk from 'chalk';
export class UILogger {
    static success(message) {
        console.log(`${chalk.green('✔')} ${message}`);
    }
    static info(message) {
        console.log(`${chalk.blue('ℹ')} ${message}`);
    }
    static warning(message) {
        console.log(`${chalk.yellow('⚠')} ${message}`);
    }
    static error(message) {
        console.log(`${chalk.red('✖')} ${message}`);
    }
    static stage(name) {
        console.log(`\n${chalk.bold.magenta('>>>')} ${chalk.bold(name.toUpperCase())}`);
    }
}
