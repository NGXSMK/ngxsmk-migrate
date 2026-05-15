# Publishing ngxsmk-migrate to npm

Follow these steps to publish your AI-powered Angular modernization toolkit to the npm registry.

## 1. Prerequisites

- **npm Account**: Ensure you have an account at [npmjs.com](https://www.npmjs.com/).
- **Build Verification**: Run a final build locally to ensure everything is correct.
  ```bash
  npm run build
  ```

## 2. Authenticate with npm

Login to your npm account via the terminal:
```bash
npm login
```
Follow the prompts to enter your username, password, and email.

## 3. Configure Versioning

Ensure your version in `package.json` is correct. For a first release, `1.0.0` is standard. For subsequent updates, use semantic versioning:
- **Patch**: `npm version patch` (1.0.1)
- **Minor**: `npm version minor` (1.1.0)
- **Major**: `npm version major` (2.0.0)

## 4. Dry Run (Recommended)

Verify what files will be included in the package without actually publishing:
```bash
npm publish --dry-run
```
Check that only the `dist/` folder and essential markdown files are listed.

## 5. Publish

Publish the package to the registry:
```bash
npm publish
```

> [!NOTE]
> Since we've added a `prepublishOnly` script to your `package.json`, npm will automatically run `npm run build` before uploading, ensuring your latest code changes are always included.

## 6. Access Control (If Scoped)

If you decide to use a scoped name like `@ngxsmk/migrate`, you must specify public access on the first publish:
```bash
npm publish --access public
```

---

## Post-Publish Checklist

1. **Verify on npm**: Visit `https://www.npmjs.com/package/ngxsmk-migrate`.
2. **Install globally**: Test the installation in a fresh terminal:
   ```bash
   npm install -g ngxsmk-migrate
   ngxsmk-migrate --help
   ```
3. **GitHub Release**: Create a matching release on GitHub to keep your versions in sync.
