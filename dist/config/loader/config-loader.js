import { DEFAULT_CONFIG } from '../defaults/default-config.js';
export class ConfigLoader {
    /**
     * Loads and merges configuration from multiple sources.
     * Priority: Environment > User Config > Defaults
     */
    static load(userConfig = {}) {
        const config = {
            ...DEFAULT_CONFIG,
            ...userConfig,
            ai: {
                ...DEFAULT_CONFIG.ai,
                ...userConfig.ai,
            },
            migrations: {
                ...DEFAULT_CONFIG.migrations,
                ...userConfig.migrations,
            },
            safety: {
                ...DEFAULT_CONFIG.safety,
                ...userConfig.safety,
            },
        };
        // Environment Overrides
        if (process.env.NGXSMK_DRY_RUN === 'true') {
            config.safety.dryRun = true;
        }
        return config;
    }
}
