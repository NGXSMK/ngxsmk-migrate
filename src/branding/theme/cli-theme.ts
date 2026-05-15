import chalk from 'chalk';

export const BRAND_COLORS = {
  primary: '#00D1FF',   // Cyber Blue
  secondary: '#FF00E5', // Neon Magenta
  success: '#00FF41',   // Matrix Green
  warning: '#FFB800',   // Warning Amber
  error: '#FF3131',     // Error Red
};

export class CliTheme {
  /**
   * Applies the primary brand styling to a message.
   */
  static primary(message: string): string {
    return chalk.hex(BRAND_COLORS.primary).bold(message);
  }

  /**
   * Applies the futuristic AI-themed styling to a header.
   */
  static header(message: string): string {
    return chalk.bgHex(BRAND_COLORS.primary).black.bold(` ${message} `);
  }

  /**
   * Highlights a transformation or modernization step.
   */
  static highlight(message: string): string {
    return chalk.hex(BRAND_COLORS.secondary).italic(message);
  }
}