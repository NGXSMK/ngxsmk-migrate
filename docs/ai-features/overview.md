# AI Features

`ngxsmk-migrate` leverages Google Gemini to provide intelligent refactoring and migration logic.

## Angular Signals Migrator

The Signals Migrator scans your components for reactive patterns that can be modernized.

- **What it does**: Converts `BehaviorSubject` and RxJS-based state into Angular Signals.
- **Benefits**: Improved performance, cleaner templates, and future-proof code.

## Standalone Migration Engine

Automatically transitions your project from `NgModules` to a standalone architecture.

- **What it does**: Removes module declarations, updates imports, and bootstraps the application using `bootstrapApplication`.
- **Command**: `ngxsmk-migrate migrate`

## Angular AI Refactor

General purpose AI refactoring for component logic.

- **What it does**: Splits large components, optimizes imports, and modernizes template syntax.
- **Command**: `ngxsmk-migrate fix`
