import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { ReviewDraft } from '../../../../core/models/schemas';
import { DocumentModalComponent } from '../../../../shared/components/document-modal/document-modal.component';
import { ToastService } from '../../../../core/services/toast.service';

@Component({
  selector: 'app-hbl-draft',
  standalone: true,
  imports: [CommonModule, FormsModule, DocumentModalComponent],
  templateUrl: './hbl-draft.component.html',
  styleUrls: ['./hbl-draft.component.css'],
})
export class HblDraftComponent {
  @Input() drafts: ReviewDraft[] = [];
  @Input() expanded = false;
  @Input() groupColor: string | null = null;
  
  @Output() draftsUpdated = new EventEmitter<ReviewDraft[]>();
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
    }
    if (!this.formData && this.drafts.length > 0) {
      this.formData = JSON.parse(JSON.stringify(this.drafts[0]?.hbl_details || {}));
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
      this.drafts.forEach(d => d.details_confirmed = false);
      this.toast.show('Please complete all required fields.', 'error');
      return;
    }
    
    this.drafts.forEach(d => {
      d.details_confirmed = true;
      d.hbl_details = JSON.parse(JSON.stringify(this.formData));
      d.hbl_number = d.hbl_details.hbl_number || undefined;
    });
    this.draftsUpdated.emit(this.drafts);
    this.toast.show('HBL Details Saved successfully for selected packing lists', 'success');
  }

  generateHbl() {
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
}
