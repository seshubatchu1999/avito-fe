import { Component, EventEmitter, Input, Output, inject, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { ReviewDraft } from '../../../../core/models/schemas';
import { DocumentModalComponent } from '../../../../shared/components/document-modal/document-modal.component';
import { ToastService } from '../../../../core/services/toast.service';
import { WorkflowStateService } from '../../../../core/services/workflow-state.service';
import { MOCK_EXTRACTION_RESPONSE } from '../../../../core/services/mock-data';
import { REASSIGN_MOCK_EXTRACTION_RESPONSE } from '../../../../core/services/reassign-groups-mock-data';

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
    if (!this.primaryDraft) return [];
    
    let pl: any = this.primaryDraft.packing_list;
    
    if (this.primaryDraft.group_id) {
      const currentDocIds = [...this.drafts.map(d => d.document_id || d.draft_id)].sort();
      // Need to cast MOCK_EXTRACTION_RESPONSE as any because it might not have typed hbl_groups
      const originalGroup = (MOCK_EXTRACTION_RESPONSE as any).hbl_groups?.find((g: any) => g.group_id === this.primaryDraft.group_id);
      
      let isChanged = true;
      if (originalGroup) {
        const originalDocIds = [...originalGroup.document_ids].sort();
        isChanged = JSON.stringify(currentDocIds) !== JSON.stringify(originalDocIds);
      }
      
      if (isChanged) {
        const reassignedGroup = REASSIGN_MOCK_EXTRACTION_RESPONSE.hbl_groups.find((g: any) => g.group_id === this.primaryDraft.group_id);
        if (reassignedGroup && reassignedGroup.combined_extraction) {
          pl = reassignedGroup.combined_extraction;
        }
      } else {
        if (originalGroup && originalGroup.combined_extraction) {
          pl = originalGroup.combined_extraction;
        }
      }
    }

    if (!pl) return [];
    
    const result: { key: string, value: string }[] = [];

    const allowedKeys = [
      'invoice_number',
      'notify_party',
      'country_of_origin',
      'country_of_final_destination',
      'total_gross_weight',
      'total_package_count',
      'total_net_weight',
      'quantity',
      'package_numbers',
      'net_weight'
    ];

    const pushItem = (k: string, v: any) => {
      const formattedKey = this.formatKey(k);
      if (result.some(r => r.key === formattedKey)) return;
      const val = (v === null || v === undefined || v === '') ? '--' : String(v);
      result.push({ key: formattedKey, value: val });
    };

    const processValue = (prefix: string, leafKey: string, val: any) => {
      if (Array.isArray(val)) {
        if (val.length > 0 && typeof val[0] !== 'object') {
          if (allowedKeys.includes(leafKey) || leafKey.endsWith('_date')) {
            pushItem(leafKey, val.join(', '));
          }
        } else {
          val.forEach((item, index) => {
            if (item && typeof item === 'object') {
              for (const k of Object.keys(item)) {
                processValue(`${prefix}_${index + 1}_${k}`, k, item[k]);
              }
            }
          });
        }
      } else if (val && typeof val === 'object') {
        if (allowedKeys.includes(leafKey) || leafKey.endsWith('_date')) {
          pushItem(leafKey, val.name || '--');
        }
      } else {
        if (allowedKeys.includes(leafKey) || leafKey.endsWith('_date')) {
          pushItem(leafKey, val);
        }
      }
    };

    for (const key of Object.keys(pl)) {
      processValue(key, key, pl[key]);
    }

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
