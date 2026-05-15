export class CategorizationEngine {
  /**
   * Automatically assigns categories and tags to raw knowledge data based on content analysis.
   */
  static categorize(content: string): { category: 'ANGULAR' | 'AI' | 'ENTERPRISE' | 'GOVERNANCE'; tags: string[] } {
    const lowerContent = content.toLowerCase();
    const tags: string[] = [];
    
    let category: 'ANGULAR' | 'AI' | 'ENTERPRISE' | 'GOVERNANCE' = 'ANGULAR';
    
    if (lowerContent.includes('governance') || lowerContent.includes('policy')) {
      category = 'GOVERNANCE';
    } else if (lowerContent.includes('ai') || lowerContent.includes('agent')) {
      category = 'AI';
    } else if (lowerContent.includes('enterprise') || lowerContent.includes('monorepo')) {
      category = 'ENTERPRISE';
    }
    
    // Auto-tagging logic
    if (lowerContent.includes('standalone')) tags.push('standalone');
    if (lowerContent.includes('signals')) tags.push('signals');
    if (lowerContent.includes('nx')) tags.push('nx');
    
    return { category, tags };
  }
}