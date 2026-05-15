import * as vscode from 'vscode';

export class MigrationQuickFixProvider implements vscode.CodeActionProvider {
  provideCodeActions(
    document: vscode.TextDocument,
    range: vscode.Range | vscode.Selection,
    context: vscode.CodeActionContext
  ): vscode.CodeAction[] {
    return context.diagnostics
      .filter(d => d.code === 'NGXSMK_STANDALONE')
      .map(d => this.createFix(document, d));
  }

  private createFix(document: vscode.TextDocument, diagnostic: vscode.Diagnostic): vscode.CodeAction {
    const fix = new vscode.CodeAction('Migrate to Standalone (AI assisted)', vscode.CodeActionKind.QuickFix);
    fix.command = {
      command: 'ngxsmk-migrate.fixStandalone',
      title: 'Migrate to Standalone',
      arguments: [document.uri]
    };
    fix.diagnostics = [diagnostic];
    fix.isPreferred = true;
    return fix;
  }
}