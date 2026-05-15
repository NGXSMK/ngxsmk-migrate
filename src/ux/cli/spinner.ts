import ora, { Ora } from 'ora';

export class UISpinner {
  private spinner: Ora;

  constructor(text: string) {
    this.spinner = ora(text);
  }

  start() {
    this.spinner.start();
  }

  succeed(text?: string) {
    this.spinner.succeed(text);
  }

  fail(text?: string) {
    this.spinner.fail(text);
  }

  info(text: string) {
    this.spinner.info(text);
  }
}