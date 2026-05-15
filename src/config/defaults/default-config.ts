export interface NgxSmkConfig {
  ai: {
    provider: 'gemini' | 'ollama';
    model: string;
    temperature: number;
  };
  migrations: {
    standalone: boolean;
    signals: boolean;
    rxjs: boolean;
  };
  safety: {
    dryRun: boolean;
    backup: boolean;
  };
}

export const DEFAULT_CONFIG: NgxSmkConfig = {
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