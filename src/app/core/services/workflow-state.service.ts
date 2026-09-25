import { Injectable, signal, computed } from '@angular/core';
import { ReviewDraft, MblReview } from '../models/schemas';

export interface GroupedDrafts {
  groupId: string | null;
  color: string | null;
  drafts: any[];
}

@Injectable({
  providedIn: 'root'
})
export class WorkflowStateService {
  // Core state
  readonly hblReviews = signal<ReviewDraft[]>([]);
  readonly mblReview = signal<MblReview | null>(null);
  readonly groupColors = signal<{ [groupId: string]: string }>({});
  readonly currentStep = signal<number>(1);
  readonly availableColors = ['#ef4444', '#f97316', '#f59e0b', '#84cc16', '#22c55e', '#06b6d4', '#3b82f6', '#8b5cf6', '#d946ef', '#f43f5e'];
  readonly loadingGroups = signal<{ [groupId: string]: boolean }>({});

  // Derived state (computed)
  readonly enrichedHblReviews = computed(() => {
    const drafts = this.hblReviews();
    const colors = this.groupColors();
    return drafts.map((draft, index) => {
      const gColor = draft.group_id ? colors[draft.group_id] : null;
      return {
        ...draft,
        uiGlobalIndex: index,
        uiGroupStyle: gColor ? { 'border-left': `4px solid ${gColor}` } : null
      };
    });
  });

  readonly ungroupedDrafts = computed(() => 
    this.enrichedHblReviews().filter(d => !d.group_id || !this.groupColors()[d.group_id])
  );

  readonly groupedAllDrafts = computed(() => {
    const drafts = this.enrichedHblReviews();
    const colors = this.groupColors();
    const allResult: GroupedDrafts[] = [];
    
    Object.keys(colors).forEach(groupId => {
      allResult.push({
        groupId,
        color: colors[groupId],
        drafts: drafts.filter(d => d.group_id === groupId)
      });
    });
    return allResult;
  });

  readonly groupedSelectedDrafts = computed(() => {
    // Return both actual groups and individual ungrouped files
    const allResult = this.groupedAllDrafts().filter(g => g.drafts.length > 0);
    const singles = this.ungroupedDrafts().map(draft => ({
      groupId: draft.group_id || null,
      color: null,
      drafts: [draft]
    }));
    return [...allResult, ...singles];
  });

  readonly canShowMbl = computed(() => {
    const reviews = this.enrichedHblReviews();
    return reviews.length > 0 && reviews.every(r => !!r.hbl_pdf);
  });

  // Actions
  setHblReviews(reviews: ReviewDraft[]) {
    this.hblReviews.set(reviews);
  }

  setGroupColors(colors: { [groupId: string]: string }) {
    this.groupColors.set(colors);
  }

  setMblReview(review: MblReview | null) {
    this.mblReview.set(review);
  }

  setCurrentStep(step: number) {
    this.currentStep.set(step);
  }

  setGroupLoading(groupId: string, isLoading: boolean) {
    this.loadingGroups.update(loads => ({ ...loads, [groupId]: isLoading }));
  }

  updateDraft(draftId: string, changes: Partial<ReviewDraft>) {
    this.hblReviews.update(drafts => 
      drafts.map(d => d.draft_id === draftId ? { ...d, ...changes } : d)
    );
  }

  moveDraftToGroup(draftId: string, groupId: string | null) {
    this.hblReviews.update(drafts => 
      drafts.map(d => {
        if (d.draft_id === draftId) {
          return { ...d, group_id: groupId || `single_${Math.random().toString(36).substring(7)}` };
        }
        return d;
      })
    );
  }

  addGroup() {
    this.groupColors.update(colors => {
      const nextIndex = Object.keys(colors).length;
      const newGroupId = `group_${Math.random().toString(36).substring(7)}`;
      return {
        ...colors,
        [newGroupId]: this.availableColors[nextIndex % this.availableColors.length]
      };
    });
  }

  removeGroup(groupId: string) {
    // Reassign drafts to ungrouped
    this.hblReviews.update(drafts => 
      drafts.map(d => {
        if (d.group_id === groupId) {
          return { ...d, group_id: `single_${Math.random().toString(36).substring(7)}` };
        }
        return d;
      })
    );
    // Remove group color
    this.groupColors.update(colors => {
      const newColors = { ...colors };
      delete newColors[groupId];
      return newColors;
    });
  }

  clearSuggestions() {
    this.groupColors.set({});
    this.hblReviews.update(drafts => 
      drafts.map(draft => ({
        ...draft,
        group_id: `single_${Math.random().toString(36).substring(7)}`,
        details_confirmed: false,
        hbl_details: {
          hbl_number: null,
          notify_party: JSON.parse(JSON.stringify(draft.packing_list.notify_party || { name: null, address: null, tax_id: null })),
          container_number: draft.packing_list.containers?.[0]?.container_number || null,
          seal_number: draft.packing_list.containers?.[0]?.seal_numbers?.[0] || null,
          freight_terms: draft.packing_list.freight_terms
        },
        hbl_number: undefined,
        hbl_pdf: undefined,
        hbl_filename: undefined
      }))
    );
    this.mblReview.set(null);
    this.currentStep.set(1);
  }

  clearAll() {
    this.hblReviews.set([]);
    this.mblReview.set(null);
    this.currentStep.set(1);
    this.groupColors.set({});
  }

  isGroupSaved(groupId: string | null): boolean {
    if (!groupId) return false;
    return this.enrichedHblReviews().some(d => d.group_id === groupId && d.details_confirmed);
  }
}

