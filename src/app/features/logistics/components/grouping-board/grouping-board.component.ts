import { Component, ChangeDetectionStrategy, inject, Output, EventEmitter, effect, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CdkDragDrop, DragDropModule } from '@angular/cdk/drag-drop';
import { forkJoin } from 'rxjs';
import { WorkflowStateService } from '../../../../core/services/workflow-state.service';
import { BackendApiService } from '../../../../core/services/backend-api.service';
import { ReviewDraft } from '../../../../core/models/schemas';
import { WifiLoaderComponent } from '../../../../shared/components/wifi-loader/wifi-loader.component';

@Component({
  selector: 'app-grouping-board',
  standalone: true,
  imports: [CommonModule, DragDropModule, WifiLoaderComponent],
  templateUrl: './grouping-board.component.html',
  styleUrls: ['./grouping-board.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GroupingBoardComponent {
  workflow = inject(WorkflowStateService);
  backendApi = inject(BackendApiService);
  isMultiSelectOpen = false;
  isUpdatingGroup = false;
  
  persistedState: Record<string, string | null> = {};
  localGroupOverrides = signal<Record<string, string | null>>({});

  localEnrichedDrafts = computed(() => {
    const globalDrafts = this.workflow.enrichedHblReviews();
    const overrides = this.localGroupOverrides();
    const colors = this.workflow.groupColors();
    return globalDrafts.map(d => {
       const finalGroupId = d.draft_id in overrides ? overrides[d.draft_id] : d.group_id;
       const gColor = finalGroupId ? (colors[finalGroupId] || null) : null;
       return {
         ...d,
         group_id: finalGroupId === null ? undefined : finalGroupId,
         uiGroupStyle: gColor ? { 'border-left': `4px solid ${gColor}` } : null
       };
    });
  });

  localUngroupedDrafts = computed(() => {
     return this.localEnrichedDrafts().filter(d => !d.group_id || !this.workflow.groupColors()[d.group_id]);
  });

  localGroupedAllDrafts = computed(() => {
     const drafts = this.localEnrichedDrafts();
     const colors = this.workflow.groupColors();
     const allResult: any[] = [];
     Object.keys(colors).forEach(groupId => {
       allResult.push({
         groupId,
         color: colors[groupId],
         drafts: drafts.filter(d => d.group_id === groupId)
       });
     });
     return allResult;
  });

  @Output() docClicked = new EventEmitter<ReviewDraft>();

  constructor() {
    effect(() => {
      // Auto-add any new drafts to persistedState so they don't count as "pending updates"
      const drafts = this.workflow.hblReviews();
      drafts.forEach(d => {
        if (!(d.draft_id in this.persistedState)) {
          this.persistedState[d.draft_id] = d.group_id || null;
        }
      });
    });
  }

  get hasPendingUpdates(): boolean {
    const drafts = this.workflow.hblReviews();
    const overrides = this.localGroupOverrides();
    for (const d of drafts) {
      const currentGroup = d.draft_id in overrides ? overrides[d.draft_id] : d.group_id;
      if (this.persistedState[d.draft_id] !== (currentGroup || null)) {
        return true;
      }
    }
    return false;
  }

  drop(event: CdkDragDrop<any[]>, targetGroupId: string | null) {
    if (this.workflow.isGroupSaved(targetGroupId)) return;
    
    if (event.previousContainer !== event.container) {
      const movedDraft = event.previousContainer.data[event.previousIndex];
      // Check if dragging out of a saved group
      const currentGroup = movedDraft.draft_id in this.localGroupOverrides() 
        ? this.localGroupOverrides()[movedDraft.draft_id] 
        : movedDraft.group_id;
      if (this.workflow.isGroupSaved(currentGroup || null)) return;
      
      // Update local override instead of global workflow
      this.localGroupOverrides.update(overrides => {
        return { ...overrides, [movedDraft.draft_id]: targetGroupId };
      });
      
      // Automatically update groups after drop
      this.updateGroups();
    }
  }

  updateGroups(event?: Event) {
    if (event) {
      event.stopPropagation();
    }
    const drafts = this.workflow.hblReviews();
    const overrides = this.localGroupOverrides();
    const groupedPayloads: Record<string, any> = {};
    const batchId = this.workflow.batchId();

    // Group the moves by source and target
    drafts.forEach(d => {
      const sourceGroup = this.persistedState[d.draft_id];
      const targetGroup = d.draft_id in overrides ? overrides[d.draft_id] : d.group_id;

      if (sourceGroup !== targetGroup) {
        const key = `${sourceGroup}->${targetGroup}`;
        if (!groupedPayloads[key]) {
          groupedPayloads[key] = {
            batch_id: batchId,
            source_group_id: sourceGroup,
            target_group_id: targetGroup,
            added_document_ids: []
          };
        }
        groupedPayloads[key].added_document_ids.push(d.document_id || d.draft_id);
      }
    });

    // Send API calls for each group change
    const requests = Object.values(groupedPayloads).map(payload => 
      this.backendApi.updateGroup(payload)
    );

    if (requests.length > 0) {
      this.isUpdatingGroup = true;
      forkJoin(requests).subscribe(responses => {
        // We assume all responses in this mock are the same (REASSIGN_MOCK_EXTRACTION_RESPONSE)
        const response = responses[0];
        
        console.log('Group updates successful:', groupedPayloads, response);
        
        if (response && response.hbl_groups) {
          const currentDrafts = this.workflow.hblReviews();
          let currentColors = { ...this.workflow.groupColors() };

          response.hbl_groups.forEach((group: any) => {
            const groupId = group.group_id;
            
            if (!currentColors[groupId]) {
               const colorIndex = Object.keys(currentColors).length % this.workflow.availableColors.length;
               currentColors[groupId] = this.workflow.availableColors[colorIndex];
            }

            group.document_ids.forEach((docId: string) => {
               const draft = currentDrafts.find(d => d.document_id === docId || d.draft_id === docId);
               if (draft) {
                 this.workflow.updateDraft(draft.draft_id, {
                   group_id: groupId,
                   // Assign the new extraction data from the mock
                   packing_list: group.combined_extraction
                 });
                 // Persist the new state locally
                 this.persistedState[draft.draft_id] = groupId;
               }
            });
          });
          
          this.workflow.setGroupColors(currentColors);
          this.localGroupOverrides.set({}); // Clear local overrides, we are fully in sync now
        }
        
        this.isUpdatingGroup = false;
      }, err => {
        console.error('Update groups failed', err);
        this.isUpdatingGroup = false;
      });
    }
  }

  addGroup(event: Event) {
    event.stopPropagation();
    this.workflow.addGroup();
  }

  removeGroup(groupId: string) {
    this.workflow.removeGroup(groupId);
  }

  clearSuggestions(event: Event) {
    event.stopPropagation();
    this.workflow.clearSuggestions();
  }

  clearAll(event: Event) {
    event.stopPropagation();
    this.workflow.clearAll();
  }
}

