export class SecretMasker {
    /**
     * Redacts sensitive information like API keys from strings.
     */
    static mask(content, secrets) {
        let maskedContent = content;
        for (const secret of secrets) {
            if (secret && secret.length > 5) {
                const replacement = `${secret.substring(0, 4)}...${secret.substring(secret.length - 4)}`;
                maskedContent = maskedContent.split(secret).join(`[REDACTED: ${replacement}]`);
            }
        }
        return maskedContent;
    }
}
