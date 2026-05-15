export class PromptBuilder {
    /**
     * Constructs a deterministic, context-aware prompt for Angular migrations.
     */
    static buildMigrationPrompt(context) {
        return `
      You are an Expert Angular Modernization AI. 
      Your mission is to perform a safe, accurate migration for the provided code.

      ### Project Context:
      - Angular Version: ${context.angularVersion}
      - Target Architecture: ${context.isStandalone ? 'Standalone' : 'NgModule'}
      - Key Dependencies: ${JSON.stringify(context.dependencies)}

      ### Mission Task:
      ${context.task}

      ### Safety Constraints:
      1. DO NOT change logic unless requested.
      2. PRESERVE all comments.
      3. ENSURE type safety and valid TypeScript.
      4. USE modern Angular APIs (Signals, @if/@for) if applicable.

      ### Original Source Code:
      \`\`\`typescript
      ${context.fileContent}
      \`\`\`

      Provide ONLY the modernized TypeScript code within a single code block.
    `;
    }
}
