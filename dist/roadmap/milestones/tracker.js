export class MilestoneTracker {
    milestones = [];
    registerMilestone(milestone) {
        this.milestones.push(milestone);
    }
    updateProgress(id, progress) {
        const milestone = this.milestones.find(m => m.id === id);
        if (milestone) {
            milestone.progress = progress;
            if (progress === 100)
                milestone.status = 'COMPLETED';
            else if (progress > 0)
                milestone.status = 'IN_PROGRESS';
        }
    }
    getRoadmapSummary() {
        return this.milestones.map(m => `[${m.status}] ${m.title} (${m.progress}%)`);
    }
}
