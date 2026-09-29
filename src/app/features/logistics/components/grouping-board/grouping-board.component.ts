import { Component, ChangeDetectionStrategy, inject, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CdkDragDrop, DragDropModule } from '@angular/cdk/drag-drop';
import { WorkflowStateService } from '../../../../core/services/workflow-state.service';
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

      // Auto-remove empty groups
      if (sourceGroupId && sourceGroupId !== targetGroupId) {
        const remainingDrafts = this.workflow.enrichedHblReviews().filter(d => d.group_id === sourceGroupId);
        if (remainingDrafts.length === 0) {
          this.workflow.removeGroup(sourceGroupId);
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

