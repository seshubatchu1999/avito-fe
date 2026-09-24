import { Component, ChangeDetectionStrategy, inject } from '@angular/core';
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

  drop(event: CdkDragDrop<any[]>, targetGroupId: string | null) {
    if (this.workflow.isGroupSaved(targetGroupId)) return;
    
    if (event.previousContainer === event.container) {
      // Just reordering, but our backend doesn't care about order inside the group.
      // We can still do it visually if we want by updating hblReviews array, but it's complex 
      // since hblReviews is a flat array. We will just ignore intra-group reordering for now.
    } else {
      const movedDraft = event.previousContainer.data[event.previousIndex];
      // Check if dragging out of a saved group
      if (this.workflow.isGroupSaved(movedDraft.group_id || null)) return;
      
      this.workflow.moveDraftToGroup(movedDraft.draft_id, targetGroupId);
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

