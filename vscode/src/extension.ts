import * as vscode from 'vscode';
import { MigrationDiagnostics } from './diagnostics.js';

export function activate(context: vscode.ExtensionContext) {
  console.log('ngxsmk-migrate extension is active');

  const diagnosticCollection = vscode.languages.createDiagnosticCollection('ngxsmk');
  context.subscriptions.push(diagnosticCollection);

  // Register a command to manually trigger migration analysis
  let disposable = vscode.commands.registerCommand('ngxsmk-migrate.analyze', () => {
    vscode.window.showInformationMessage('Starting Angular Migration Analysis...');
  });

  context.subscriptions.push(disposable);

  // Initialize live diagnostics
  MigrationDiagnostics.register(context, diagnosticCollection);
}

export function deactivate() {}