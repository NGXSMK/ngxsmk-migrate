export interface MigrationPlugin {
  name: string;
  description: string;
  analyze(context: any): Promise<any>;
  migrate(context: any): Promise<any>;
}
