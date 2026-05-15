import fs from 'fs-extra';
import path from 'node:path';
export class ChangelogGenerator {
    /**
     * Appends a new release entry to the CHANGELOG.md.
     */
    static async addEntry(version, changes) {
        const changelogPath = path.resolve('CHANGELOG.md');
        const date = new Date().toISOString().split('T')[0];
        const newEntry = `
## [${version}] - ${date}

### Added
${changes.filter(c => c.startsWith('feat')).map(c => `- ${c}`).join('\n')}

### Fixed
${changes.filter(c => c.startsWith('fix')).map(c => `- ${c}`).join('\n')}

### Modernization
${changes.filter(c => c.startsWith('angular')).map(c => `- ${c}`).join('\n')}
`;
        let content = '';
        if (await fs.pathExists(changelogPath)) {
            content = await fs.readFile(changelogPath, 'utf-8');
        }
        await fs.writeFile(changelogPath, newEntry + '\n' + content);
    }
}
