export interface MigrationContext {
  projectPath: string;
  angularVersion: string;
}

export interface MigrationPlugin {
  name: string;
  version: string;
  description: string;
  
  /**
   * Called before the migration starts to analyze the project.
   */
  analyze(context: MigrationContext): Promise<void>;

  /**
   * Executes the migration logic.
   */
  migrate(context: MigrationContext): Promise<void>;

  /**
   * Validates the results of the migration.
   */
  validate(context: MigrationContext): Promise<boolean>;
}