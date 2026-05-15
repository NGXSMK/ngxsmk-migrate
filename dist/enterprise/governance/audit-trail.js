export class AuditTrail {
    events = [];
    /**
     * Records a migration or analysis event for compliance and governance.
     */
    logEvent(event) {
        const fullEvent = {
            ...event,
            timestamp: new Date().toISOString(),
        };
        this.events.push(fullEvent);
        console.log(`[AUDIT] ${fullEvent.timestamp} - ${fullEvent.action}: ${fullEvent.target} (${fullEvent.status})`);
    }
    getEvents() {
        return this.events;
    }
}
