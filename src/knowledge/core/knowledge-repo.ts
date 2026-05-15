export interface KnowledgeItem {
  id: string;
  category: 'ANGULAR' | 'AI' | 'ENTERPRISE' | 'GOVERNANCE';
  tags: string[];
  content: string;
  lastUpdated: string;
}

export class KnowledgeRepository {
  private readonly items: Map<string, KnowledgeItem> = new Map();

  /**
   * Stores a new knowledge item in the repository.
   */
  upsert(item: KnowledgeItem) {
    this.items.set(item.id, {
      ...item,
      lastUpdated: new Date().toISOString()
    });
    console.log(`[KNOWLEDGE] Preserved: ${item.id} (${item.category})`);
  }

  /**
   * Retrieves knowledge items by category or tags.
   */
  search(query: { category?: string; tag?: string }): KnowledgeItem[] {
    return Array.from(this.items.values()).filter(item => {
      const matchCategory = !query.category || item.category === query.category;
      const matchTag = !query.tag || item.tags.includes(query.tag);
      return matchCategory && matchTag;
    });
  }
}