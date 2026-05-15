import fs from 'fs-extra';
import path from 'node:path';

export class FileSystemLayer {
  private readonly backupDir: string;

  constructor(projectPath: string) {
    this.backupDir = path.join(projectPath, '.ngxsmk-backups');
  }

  async createBackup(filePath: string) {
    const relativePath = path.relative(process.cwd(), filePath);
    const backupPath = path.join(this.backupDir, relativePath);

    await fs.ensureDir(path.dirname(backupPath));
    await fs.copy(filePath, backupPath);
  }

  async rollback(projectPath: string) {
    if (await fs.pathExists(this.backupDir)) {
      await fs.copy(this.backupDir, projectPath);
      console.log('Rollback successful.');
    }
  }

  async clearBackups() {
    await fs.remove(this.backupDir);
  }
}
