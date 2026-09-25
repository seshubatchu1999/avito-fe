import { Component, ChangeDetectionStrategy, inject, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CdkDragDrop, DragDropModule } from '@angular/cdk/drag-drop';
import { WorkflowStateService } from '../../../../core/services/workflow-state.service';
import { DocumentExtractionService } from '../../../../core/services/document-extraction.service';
import { ReviewDraft } from '../../../../core/models/schemas';

@Component({
  selector: 'app-grouping-board',
  standalone: true,
  imports: [CommonModule, DragDropModule],
  templateUrl: './grouping-board.component.html',
  styleUrls: ['./grouping-board.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GroupingBoardComponent {
  workflow = inject(WorkflowStateService);
  extractionService = inject(DocumentExtractionService);
  isMultiSelectOpen = false;
  
  @Output() docClicked = new EventEmitter<ReviewDraft>();

  drop(event: CdkDragDrop<any[]>, targetGroupId: string | null) {
    if (this.workflow.isGroupSaved(targetGroupId)) return;
    
    if (event.previousContainer === event.container) {
      // Just reordering, but our backend doesn't care about order inside the group.
      // We can still do it visually if we want by updating hblReviews array, but it's complex 
      // since hblReviews is a flat array. We will just ignore intra-group reordering for now.
    } else {
      const movedDraft = event.previousContainer.data[event.previousIndex];
      const sourceGroupId = movedDraft.group_id || null;
      // Check if dragging out of a saved group
      if (this.workflow.isGroupSaved(sourceGroupId)) return;
      
      this.workflow.moveDraftToGroup(movedDraft.draft_id, targetGroupId);
      
      if (targetGroupId) {
        this.workflow.setGroupLoading(targetGroupId, true);
        const groupDrafts = this.workflow.enrichedHblReviews().filter(d => d.group_id === targetGroupId);
        this.extractionService.syncGroup(targetGroupId, groupDrafts).subscribe(() => {
          this.workflow.setGroupLoading(targetGroupId, false);
        });
      }

      // Also sync the source group if it was removed from one
      if (sourceGroupId && sourceGroupId !== targetGroupId) {
        const sourceDrafts = this.workflow.enrichedHblReviews().filter(d => d.group_id === sourceGroupId);
        if (sourceDrafts.length === 0) {
          // If the group is now empty, delete it automatically
          this.workflow.removeGroup(sourceGroupId);
        } else {
          this.workflow.setGroupLoading(sourceGroupId, true);
          this.extractionService.syncGroup(sourceGroupId, sourceDrafts).subscribe(() => {
            this.workflow.setGroupLoading(sourceGroupId, false);
          });
        }
      }
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

