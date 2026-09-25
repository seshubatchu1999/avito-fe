import { Component, EventEmitter, Input, Output, inject, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { ReviewDraft } from '../../../../core/models/schemas';
import { DocumentModalComponent } from '../../../../shared/components/document-modal/document-modal.component';
import { ToastService } from '../../../../core/services/toast.service';
import { WorkflowStateService } from '../../../../core/services/workflow-state.service';

@Component({
  selector: 'app-hbl-draft',
  standalone: true,
  imports: [CommonModule, FormsModule, DocumentModalComponent],
  templateUrl: './hbl-draft.component.html',
  styleUrls: ['./hbl-draft.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HblDraftComponent {
  workflow = inject(WorkflowStateService);

  @Input() drafts: ReviewDraft[] = [];
  @Input() expanded = false;
  @Input() groupColor: string | null = null;
  @Input() groupTitle?: string;
  
  @Output() generateRequested = new EventEmitter<ReviewDraft[]>();
  
  formData: any;
  
  selectedDocUrl: string | null = null;
  selectedDocName: string = '';
  selectedDocMime: string = '';
  selectedPackingListIndex: number = 0;

  constructor(private toast: ToastService) {}

  ngOnInit() {
    this.formData = JSON.parse(JSON.stringify(this.drafts[0]?.hbl_details || {}));
    this.selectedPackingListIndex = 0;
  }

  ngOnChanges(changes: any) {
    if (changes['drafts']) {
      this.selectedPackingListIndex = 0;
      if (this.drafts.length > 0) {
        this.formData = JSON.parse(JSON.stringify(this.drafts[0]?.hbl_details || {}));
      } else {
        this.formData = null;
      }
    }
  }

  viewSelectedDoc() {
    const draft = this.drafts[this.selectedPackingListIndex] || this.drafts[0];
    if (draft) {
      this.viewDoc(draft);
    }
  }

  viewDoc(draft: ReviewDraft) {
    this.selectedDocUrl = draft.source_document || null;
    this.selectedDocName = draft.source_name;
    this.selectedDocMime = draft.mime_type;
  }

  closeDoc() {
    this.selectedDocUrl = null;
  }

  saveDetails(form: NgForm) {
    if (form.invalid) {
      this.drafts.forEach(d => {
        this.workflow.updateDraft(d.draft_id, { details_confirmed: false });
      });
      this.toast.show('Please complete all required fields.', 'error');
      return;
    }
    
    const savedData = JSON.parse(JSON.stringify(this.formData));
    const newHblNumber = savedData.hbl_number;

    // Validation: HBL Number must be unique across different groups
    const currentDraftIds = new Set(this.drafts.map(d => d.draft_id));
    const isDuplicate = this.workflow.hblReviews().some(r => 
      !currentDraftIds.has(r.draft_id) && 
      r.hbl_number === newHblNumber
    );

    if (isDuplicate) {
      form.controls['hblNumber']?.setErrors({ duplicate: true });
      this.toast.show('This HBL number is already in use by another group. Please enter a different HBL number.', 'error');
      return;
    }

    this.drafts.forEach(d => {
      this.workflow.updateDraft(d.draft_id, {
        details_confirmed: true,
        hbl_details: savedData,
        hbl_number: savedData.hbl_number || undefined
      });
    });
    this.toast.show('HBL Details Saved successfully for selected packing lists', 'success');
    
    // Automatically trigger generation since the button was clicked
    this.generateHbl();
  }

  generateHbl() {
    this.expanded = false;
    this.generateRequested.emit(this.drafts);
  }

  get primaryDraft(): ReviewDraft {
    return this.drafts[0];
  }

  get isLocked(): boolean {
    return this.drafts.some(d => !!d.hbl_pdf);
  }

  get detailsConfirmed(): boolean {
    return this.drafts.every(d => d.details_confirmed);
  }

  sortColumn: 'key' | 'value' = 'key';
  sortDirection: 'asc' | 'desc' = 'asc';

  toggleSort(column: 'key' | 'value') {
    if (this.sortColumn === column) {
      this.sortDirection = this.sortDirection === 'asc' ? 'desc' : 'asc';
    } else {
      this.sortColumn = column;
      this.sortDirection = 'asc';
    }
  }

  getExtractedData(): { key: string, value: string }[] {
    if (!this.primaryDraft?.packing_list) return [];
    const pl = this.primaryDraft.packing_list as any;
    const result: { key: string, value: string }[] = [];

    const processValue = (prefix: string, val: any) => {
      if (val === null || val === undefined || val === '') return;
      if (Array.isArray(val)) {
        if (val.length === 0) return;
        if (typeof val[0] !== 'object') {
          result.push({ key: this.formatKey(prefix), value: val.join(', ') });
        } else {
          val.forEach((item, index) => processValue(`${prefix} ${index + 1}`, item));
        }
      } else if (typeof val === 'object') {
        for (const k of Object.keys(val)) {
          processValue(`${prefix} ${k}`, val[k]);
        }
      } else {
        result.push({ key: this.formatKey(prefix), value: String(val) });
      }
    };

    for (const key of Object.keys(pl)) {
      processValue(key, pl[key]);
    }

    result.sort((a, b) => {
      const valA = a[this.sortColumn].toLowerCase();
      const valB = b[this.sortColumn].toLowerCase();
      if (valA < valB) return this.sortDirection === 'asc' ? -1 : 1;
      if (valA > valB) return this.sortDirection === 'asc' ? 1 : -1;
      return 0;
    });

    return result;
  }

  formatKey(key: string): string {
    return key
      .split(/[ _]/)
      .filter(w => w.length > 0)
      .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
      .join(' ');
  }
}
