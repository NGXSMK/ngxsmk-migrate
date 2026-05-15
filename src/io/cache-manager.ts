import fs from 'fs-extra';
import path from 'node:path';

export class CacheManager {
  private readonly cacheDir: string;

  constructor(projectPath: string) {
    this.cacheDir = path.join(projectPath, '.ngxsmk-cache');
  }

  async set(key: string, value: any) {
    const cachePath = path.join(this.cacheDir, `${key}.json`);
    await fs.ensureDir(this.cacheDir);
    await fs.writeJson(cachePath, value);
  }

  async get(key: string) {
    const cachePath = path.join(this.cacheDir, `${key}.json`);
    if (await fs.pathExists(cachePath)) {
      return await fs.readJson(cachePath);
    }
    return null;
  }

  async clear() {
    await fs.remove(this.cacheDir);
  }
}
