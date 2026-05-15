import * as vscode from 'vscode';

export class MigrationDiagnostics {
  static register(context: vscode.ExtensionContext, collection: vscode.DiagnosticCollection) {
    if (vscode.window.activeTextEditor) {
      this.updateDiagnostics(vscode.window.activeTextEditor.document, collection);
    }

    context.subscriptions.push(
      vscode.workspace.onDidSaveTextDocument(doc => this.updateDiagnostics(doc, collection))
    );
  }

  static updateDiagnostics(document: vscode.TextDocument, collection: vscode.DiagnosticCollection) {
    if (!document.fileName.endsWith('.ts')) return;

    const diagnostics: vscode.Diagnostic[] = [];
    const text = document.getText();

    // Example: Detect legacy NgModule usage
    if (text.includes('@NgModule')) {
      const range = new vscode.Range(0, 0, 0, 10); // Placeholder range
      const diagnostic = new vscode.Diagnostic(
        range,
        'Found legacy NgModule. Consider migrating to standalone components.',
        vscode.DiagnosticSeverity.Information
      );
      diagnostic.code = 'NGXSMK_STANDALONE';
      diagnostics.push(diagnostic);
    }

    collection.set(document.uri, diagnostics);
  }
}