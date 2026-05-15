export class PrivacyAnonymizer {
    /**
     * Anonymizes file paths to protect enterprise repository structure.
     */
    static anonymizePath(filePath) {
        // Replace sensitive workspace parts with generic placeholders
        const parts = filePath.split(/[\\/]/);
        if (parts.length > 2) {
            return `.../${parts.at(-2)}/${parts.at(-1)}`;
        }
        return filePath;
    }
    /**
     * Strips potentially sensitive code or comments from telemetry events.
     */
    static scrubMetadata(metadata) {
        const scrubbed = { ...metadata };
        delete scrubbed.author;
        delete scrubbed.email;
        return scrubbed;
    }
}
