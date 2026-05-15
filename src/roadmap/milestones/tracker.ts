export interface Milestone {
  id: string;
  title: string;
  status: 'PLANNED' | 'IN_PROGRESS' | 'COMPLETED';
  progress: number; // 0-100
}

export class MilestoneTracker {
  private readonly milestones: Milestone[] = [];

  registerMilestone(milestone: Milestone) {
    this.milestones.push(milestone);
  }

  updateProgress(id: string, progress: number) {
    const milestone = this.milestones.find(m => m.id === id);
    if (milestone) {
      milestone.progress = progress;
      if (progress === 100) milestone.status = 'COMPLETED';
      else if (progress > 0) milestone.status = 'IN_PROGRESS';
    }
  }

  getRoadmapSummary() {
    return this.milestones.map(m => `[${m.status}] ${m.title} (${m.progress}%)`);
  }
}