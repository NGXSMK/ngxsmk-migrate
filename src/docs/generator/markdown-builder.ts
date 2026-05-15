export interface DocSection {
  title: string;
  content: string;
  level: number;
}

export class MarkdownBuilder {
  private readonly sections: DocSection[] = [];

  addSection(title: string, content: string, level: number = 2) {
    this.sections.push({ title, content, level });
    return this;
  }

  build(): string {
    return this.sections
      .map(s => `${'#'.repeat(s.level)} ${s.title}\n\n${s.content}\n`)
      .join('\n');
  }

  /**
   * Generates a code block for the given language.
   */
  static codeBlock(code: string, language: string = 'typescript'): string {
    return `\`\`\`${language}\n${code}\n\`\`\``;
  }
}