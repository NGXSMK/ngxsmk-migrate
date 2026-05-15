export interface AIProvider {
  name: string;
  ask(prompt: string, model?: string): Promise<string>;
  explain(topic: string, model?: string): Promise<string>;
}
