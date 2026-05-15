# Getting Started

## Installation

Install `ngxsmk-migrate` globally to use the CLI:

```bash
npm install -g ngxsmk-migrate
```

## Configuration

To enable AI-powered refactoring and explanations, set your Google Gemini API key:

**Windows (PowerShell):**
```powershell
$env:GOOGLE_API_KEY="your_api_key_here"
```

**macOS / Linux:**
```bash
export GOOGLE_API_KEY="your_api_key_here"
```

## Quick Start

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

## Requirements
- **Angular**: v12+ (Optimized for v16+)
- **Node.js**: v18+
- **API Key**: A valid `GOOGLE_API_KEY` for AI features.
