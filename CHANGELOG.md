# Changelog

All notable changes to this project will be documented in this file.

## [1.2.0] - 2026-05-15

### 🤖 Multi-Provider AI Revolution
This version introduces a vendor-neutral AI architecture, empowering you to modernize Angular projects using the world's most powerful LLMs.

### ✨ Key Features
- **Multi-LLM Support**: Native integration with **OpenAI (ChatGPT)** and **Anthropic (Claude)** alongside Google Gemini.
- **Interactive Configuration**: New `config` command with masked password inputs for secure, project-level API key setup.
- **Environment Parity**: Full support for `.env` files with prioritized configuration loading.
- **Synchronized Reporting**: Refined analysis reports (`ngxsmk-report.md`) with zero redundant logging and enriched component metadata.
- **Architecture Hardening**: Internal refactoring to a provider-agnostic interface, ensuring future-proof expansion for new AI models.

### 🛠️ Improvements & Fixes
- **Security**: Added masked inputs for sensitive API keys during CLI setup.
- **Developer Experience**: Resolved several TypeScript "implicit any" warnings and fixed missing `dotenv` dependency.
- **Reliability**: Optimized `ReportGenerator` to prevent duplicate console output while maintaining detailed markdown logging.


## [1.0.0] - 2026-05-15

### 🚀 Initial Release: The Future of Angular Modernization

This version marks the official launch of **ngxsmk-migrate**, an enterprise-grade toolkit for AI-powered Angular transformation.

### ✨ Key Features
- **AI Orchestration**: Integrated Gemini 1.5 for intelligent code refactoring and contextual explanations.
- **AST Transformation Engine**: Type-aware code modifications for Standalone Components and Signals.
- **Enterprise Governance**: Architecture checkers, audit logging, and AI safety rules.
- **Scalable Infrastructure**: Distributed worker pools and incremental scanning for large-scale migrations.
- **Observability & Analytics**: Structured logging, migration tracing, and privacy-focused anonymization.

### 🏗️ Systemic Modules
- **Innovation Lab**: Prototyping environment for experimental AI workflows.
- **Knowledge Management**: Centralized repository for migration patterns and learning extraction.
- **Sustainability Tracker**: Automated technical debt monitoring and project health metrics.
- **Compliance & Audit**: Traceable policy validation and governance auditing.

---
*Built with ❤️ by the **ngxsmk** team.*
