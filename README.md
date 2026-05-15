# ngxsmk-migrate

AI-Powered Angular Migration and Modernization Toolkit.

[![npm version](https://img.shields.io/npm/v/ngxsmk-migrate.svg)](https://www.npmjs.com/package/ngxsmk-migrate)
[![license](https://img.shields.io/npm/l/ngxsmk-migrate.svg)](https://github.com/ngxsmk/ngxsmk-migrate/blob/main/LICENSE)

`ngxsmk-migrate` is the leading AI-powered toolkit designed to help developers automatically upgrade, refactor, and modernize Angular applications. Whether you're moving to **Standalone Components**, adopting **Angular Signals**, or upgrading from legacy versions, `ngxsmk-migrate` automates the heavy lifting.

---

## The Problem: Legacy Angular Technical Debt

Upgrading large Angular enterprise applications is often slow, manual, and error-prone. Developers face:
- **Deprecated APIs**: Keeping up with breaking changes in every Angular release.
- **Legacy Architecture**: Transitioning from NgModules to Standalone patterns.
- **Reactive Bottlenecks**: Migrating complex RxJS patterns to modern Angular Signals.
- **Manual Refactoring**: Spending weeks rewriting templates and components.

## The Solution: AI-Powered Angular Modernization

`ngxsmk-migrate` uses advanced AI (Gemini 1.5) and AST transformations to provide **one-click Angular migration**. It understands your project's unique architecture and suggests optimized, modern replacements.

### Core AI Features

- **Angular Signals Migrator**: Automatically convert BehaviorSubjects and computed state into `signal()`, `computed()`, and `effect()`.
- **Standalone Migration Engine**: Seamlessly transition from NgModules to a Standalone-first architecture.
- **Angular Template Modernizer**: Upgrade legacy `*ngIf` and `*ngFor` syntax to the latest `@if` and `@for` control flow.
- **AI-Powered Refactor**: Intelligently split large components and simplify complex RxJS logic.
- **Upgrade Assistant**: Get detailed reports on breaking changes and a step-by-step upgrade plan.

---

## Quick Start

### Installation

```bash
npm install -g ngxsmk-migrate
```

### Configuration

To enable AI-powered refactoring and explanations, set your Google Gemini API key:

**Windows (PowerShell):**
```powershell
$env:GOOGLE_API_KEY="your_api_key_here"
```

**macOS / Linux:**
```bash
export GOOGLE_API_KEY="your_api_key_here"
```

#### **Advanced: Switching Models**

By default, the toolkit uses `gemini-1.5-flash`. You can switch to other models (like `gemini-1.5-pro`) using:

1.  **Environment Variable**:
    ```bash
    export GEMINI_MODEL="gemini-1.5-pro"
    ```
2.  **CLI Option**:
    ```bash
    ngxsmk-migrate explain "Signals" --model gemini-1.5-pro
    ```

### Usage

1. **Analyze your project**:
   ```bash
   ngxsmk-migrate analyze .
   ```
2. **Automatically fix and modernize**:
   ```bash
   ngxsmk-migrate fix .
   ```
3. **Full Scale Migration**:
   ```bash
   ngxsmk-migrate migrate .
   ```

---

## Migration Examples

### Before (Legacy Component)
```typescript
@Component({
  selector: 'app-user',
  template: `
    <div *ngIf="user$ | async as user">
      {{ user.name }}
    </div>
  `
})
export class UserComponent {
  user$ = this.userService.user$;
}
```

### After (AI Modernized)
```typescript
@Component({
  selector: 'app-user',
  standalone: true,
  template: `
    @if (user()) {
      {{ user().name }}
    }
  `
})
export class UserComponent {
  user = signal(this.userService.user());
}
```

---

## Roadmap

- [x] CLI Infrastructure
- [x] AI Core Integration
- [ ] Automated Signal Migration (Alpha)
- [ ] Standalone Component Converter
- [ ] Performance Benchmark Reports

## Contributing

We welcome contributions! Please see our [Contributing Guide](CONTRIBUTING.md) to get started.

---

Built with ❤️ by [Sachin Dilshan](https://www.sachindilshan.com/) and the **ngxsmk** team. Modernize your Angular apps today with the power of AI.
