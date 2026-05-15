export class KnowledgeRepository {
    items = new Map();
    /**
     * Stores a new knowledge item in the repository.
     */
    upsert(item) {
        this.items.set(item.id, {
            ...item,
            lastUpdated: new Date().toISOString()
        });
        console.log(`[KNOWLEDGE] Preserved: ${item.id} (${item.category})`);
    }
    /**
     * Retrieves knowledge items by category or tags.
     */
    search(query) {
        return Array.from(this.items.values()).filter(item => {
            const matchCategory = !query.category || item.category === query.category;
            const matchTag = !query.tag || item.tags.includes(query.tag);
            return matchCategory && matchTag;
        });
    }
}
