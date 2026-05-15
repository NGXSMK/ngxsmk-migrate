import path from 'node:path';
export class PathValidator {
    /**
     * Ensures a path is within the project workspace to prevent path traversal.
     */
    static validate(projectPath, targetPath) {
        const resolvedPath = path.resolve(targetPath);
        const resolvedProject = path.resolve(projectPath);
        if (!resolvedPath.startsWith(resolvedProject)) {
            throw new Error(`Security Violation: Attempted to access file outside workspace: ${targetPath}`);
        }
        return resolvedPath;
    }
}
