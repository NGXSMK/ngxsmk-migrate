export class MarkdownBuilder {
    sections = [];
    addSection(title, content, level = 2) {
        this.sections.push({ title, content, level });
        return this;
    }
    build() {
        return this.sections
            .map(s => `${'#'.repeat(s.level)} ${s.title}\n\n${s.content}\n`)
            .join('\n');
    }
    /**
     * Generates a code block for the given language.
     */
    static codeBlock(code, language = 'typescript') {
        return `\`\`\`${language}\n${code}\n\`\`\``;
    }
}
