export interface AuditEvent {
  timestamp: string;
  action: string;
  actor: string;
  target: string;
  status: 'SUCCESS' | 'FAILURE' | 'PENDING';
  details?: string;
}

export class AuditTrail {
  private events: AuditEvent[] = [];

  /**
   * Records a migration or analysis event for compliance and governance.
   */
  logEvent(event: Omit<AuditEvent, 'timestamp'>) {
    const fullEvent: AuditEvent = {
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