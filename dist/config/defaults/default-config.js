export const DEFAULT_CONFIG = {
    ai: {
        provider: 'gemini',
        model: 'gemini-1.5-flash',
        temperature: 0.2,
    },
    migrations: {
        standalone: true,
        signals: true,
        rxjs: false,
    },
    safety: {
        dryRun: false,
        backup: true,
    },
};
