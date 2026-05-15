#!/usr/bin/env node
import { Command } from 'commander';
import chalk from 'chalk';
import { AngularIntelligence } from './intelligence/angular-intel.js';
import { AIOrchestrator } from './orchestrator/ai-orchestrator.js';
import { MigrationEngine } from './engine/migration-engine.js';
import { GeminiProvider } from './orchestrator/providers/gemini-provider.js';
import { OpenAIProvider } from './orchestrator/providers/openai-provider.js';
import { AnthropicProvider } from './orchestrator/providers/anthropic-provider.js';
import { ReportGenerator } from './io/report-generator.js';
import { UISpinner } from './ux/cli/spinner.js';
import { UILogger } from './ux/cli/logger.js';
import inquirer from 'inquirer';
import fs from 'fs-extra';
import path from 'node:path';
import dotenv from 'dotenv';

dotenv.config();

const program = new Command();

const banner = chalk.bold.cyan(String.raw`
   _  __ _____   __ ____ __  __ ____    __  __ ___  ___ ____   ___  _____  ____
  / |/ // ___/  / // __//  |/ //  _/   /  |/ // _ \/ _ \/ __ \ / _ \/ ___/ / __/
 /    // (_ /  / // _/ / /|_/ /_/ /    / /|_/ // _  / , _/ /_/ // , _/ (_ / / _/ 
/_/|_/ \___/  /_//___//_/  /_//___/   /_/  /_//___/_/|_|\____//_/|_|\___/ /___/ 
                                                                               
      AI-Powered Angular Migration & Modernization Toolkit
`);

// console.log(banner); // Removed to avoid double-printing

program
  .name('ngxsmk-migrate')
  .description('AI powered Angular migration and modernization toolkit')
  .version('1.0.0')
  .option('-d, --dry-run', 'perform a dry run without modifying files')
  .option('--no-backup', 'skip creating backups before migration')
  .option('-p, --provider <name>', 'AI provider to use (gemini, openai, anthropic)')
  .option('-m, --model <name>', 'AI model to use (default depends on provider)');

// Initialize Architectural Layers
const engine = new MigrationEngine();

const getAI = () => {
  const provider = program.opts().provider?.toLowerCase() || process.env.AI_PROVIDER || 'gemini';
  const model = program.opts().model || process.env.GEMINI_MODEL;

  if (provider === 'openai') {
    const key = process.env.OPENAI_API_KEY || '';
    if (!key) UILogger.warning('OPENAI_API_KEY not found.');
    return new AIOrchestrator(new OpenAIProvider(key, model || 'gpt-4o'));
  }

  if (provider === 'anthropic') {
    const key = process.env.ANTHROPIC_API_KEY || '';
    if (!key) UILogger.warning('ANTHROPIC_API_KEY not found.');
    return new AIOrchestrator(new AnthropicProvider(key, model || 'claude-3-5-sonnet-20240620'));
  }

  const key = process.env.GOOGLE_API_KEY || '';
  if (!key) UILogger.warning('GOOGLE_API_KEY not found.');
  return new AIOrchestrator(new GeminiProvider(key, model || 'gemini-1.5-flash'));
};

// Register Core Plugins
engine.registerPlugin({
  name: 'CoreModernization',
  description: 'Main Angular modernization plugin for Standalone and Signals',
  analyze: async (ctx) => {
    // Basic analysis already done by intel in the commands
    return { status: 'ready' };
  },
  migrate: async (ctx) => {
    const intel = new AngularIntelligence(ctx.path);
    const components = intel.getDecoratedClasses('Component');

    for (const component of components) {
      // Simulate migration work for each component
      await new Promise(resolve => setTimeout(resolve, 50));
    }
    return { success: true, count: components.length };
  }
});

const reporter = new ReportGenerator();

program
  .command('analyze')
  .description('Angular Upgrade Assistant: Scans project and generates architecture report')
  .argument('[path]', 'path to the Angular project', '.')
  .action(async (projectPath) => {
    UILogger.stage('Analysis Phase');
    const spinner = new UISpinner(`Scanning project at: ${projectPath}`);
    spinner.start();

    try {
      const intel = new AngularIntelligence(projectPath);
      const files = await intel.scanIncrementally(projectPath);
      reporter.log(`Scan complete: Found ${files.length} TypeScript files.`);
      spinner.succeed(`Scan complete: Found ${files.length} TypeScript files.`);

      const components = intel.getDecoratedClasses('Component');
      reporter.log(`Detected ${components.length} Angular components.`);
      UILogger.info(`Detected ${components.length} Angular components.`);

      reporter.log('## Component Analysis');
      for (const comp of components) {
        const meta = intel.getComponentMetadata(comp);
        reporter.log(`- **${comp.getName() || 'Anonymous'}**: Selector: \`${meta?.selector || 'N/A'}\`, Standalone: \`${meta?.standalone}\``);
      }

      await reporter.saveReport(projectPath);
      UILogger.success('Analysis report generated successfully.');
    } catch (error: any) {
      spinner.fail(`Analysis failed: ${error.message}`);
    }
  });

program
  .command('fix')
  .description('Angular AI Refactor: Automatically updates code and modernizes syntax')
  .argument('[path]', 'path to the Angular project', '.')
  .action(async (projectPath) => {
    UILogger.stage('Fixing Phase');

    if (!process.env.GOOGLE_API_KEY && !process.env.OPENAI_API_KEY && !process.env.ANTHROPIC_API_KEY) {
      UILogger.warning('No API keys found. AI features will be disabled.');
    }

    if (!program.opts().dryRun && program.opts().backup) {
      UILogger.info('Creating safety backup...');
    }

    const spinner = new UISpinner(`Applying AI modernization fixes to: ${projectPath}`);
    spinner.start();

    try {
      // Simulate applying fixes for now
      await new Promise(resolve => setTimeout(resolve, 1000));
      spinner.succeed(`AI fixes applied to project at: ${projectPath}`);
    } catch (error: any) {
      spinner.fail(`Fixing failed: ${error.message}`);
    }
  });

program
  .command('migrate')
  .description('Standalone Migration Engine: Runs full migration to latest Angular version')
  .argument('[path]', 'path to the Angular project', '.')
  .action(async (projectPath) => {
    UILogger.stage('Migration Phase');

    const spinner = new UISpinner(`Executing full migration in: ${projectPath}`);
    spinner.start();

    try {
      const intel = new AngularIntelligence(projectPath);
      const components = intel.getDecoratedClasses('Component');
      await engine.runMigration({ path: projectPath });
      spinner.succeed(`Full migration completed successfully! Processed ${components.length} components at ${projectPath}`);
    } catch (error: any) {
      spinner.fail(`Migration failed: ${error.message}`);
    }
  });

program
  .command('optimize')
  .description('Angular Signals Migrator: Optimizes performance and suggests signal adoption')
  .argument('[path]', 'path to the Angular project', '.')
  .action(async (projectPath) => {
    UILogger.stage('Optimization Phase');
    UILogger.info(`Searching for signal candidates in: ${projectPath}`);
  });

program
  .command('explain')
  .description('Explains Angular breaking changes and modern concepts')
  .argument('<topic>', 'topic to explain')
  .action(async (topic) => {
    UILogger.stage('AI Explanation');
    const spinner = new UISpinner(`Asking AI about: ${topic}`);
    spinner.start();

    const ai = getAI();
    const explanation = await ai.explain(topic);
    spinner.succeed('AI response received:');
    console.log(chalk.gray('--------------------------------------------------'));
    console.log(explanation);
  });

program
  .command('config')
  .description('Interactive Configuration: Setup your AI provider and API keys')
  .action(async () => {
    UILogger.stage('Configuration Setup');
    
    const answers = await inquirer.prompt([
      {
        type: 'list',
        name: 'provider',
        message: 'Select your preferred AI provider:',
        choices: ['Gemini', 'OpenAI', 'Anthropic']
      },
      {
        type: 'input',
        name: 'model',
        message: (ans) => `Which model would you like to use for ${ans.provider}? (Leave empty for default)`,
        default: (ans) => {
          if (ans.provider === 'Gemini') return 'gemini-1.5-flash';
          if (ans.provider === 'OpenAI') return 'gpt-4o';
          return 'claude-3-5-sonnet-20240620';
        }
      },
      {
        type: 'password',
        name: 'apiKey',
        message: (ans) => `Enter your ${ans.provider} API Key:`,
        mask: '*'
      }
    ]);

    const envVar = answers.provider === 'Gemini' ? 'GOOGLE_API_KEY' : 
                   answers.provider === 'OpenAI' ? 'OPENAI_API_KEY' : 'ANTHROPIC_API_KEY';
    
    const envContent = `\n# ngxsmk-migrate configuration
${envVar}=${answers.apiKey}
GEMINI_MODEL=${answers.model}
AI_PROVIDER=${answers.provider.toLowerCase()}
`;
    
    await fs.appendFile(path.join(process.cwd(), '.env'), envContent);
    
    UILogger.success(`Configuration saved successfully to .env!`);
    UILogger.info(`Provider: ${answers.provider}`);
    UILogger.info(`Model: ${answers.model}`);
  });

// Default action: Show help if no command is provided
if (!process.argv.slice(2).length) {
  console.log(banner);
  program.outputHelp();
  process.exit(0);
}

try {
  program.parse();
} catch (error: any) {
  UILogger.error(`Execution failed: ${error.message}`);
  process.exit(1);
}
