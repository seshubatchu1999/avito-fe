import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReviewDraft, MblReview } from '../../../../core/models/schemas';
import { DocumentModalComponent } from '../../../../shared/components/document-modal/document-modal.component';
import { ToastService } from '../../../../core/services/toast.service';

@Component({
  selector: 'app-mbl-section',
  standalone: true,
  imports: [CommonModule, FormsModule, DocumentModalComponent],
  templateUrl: './mbl-section.component.html',

  styleUrls: ['./mbl-section.component.css'],
})
export class MblSectionComponent {
  @Input() reviews!: ReviewDraft[];
  @Input() mblReview!: MblReview;
  @Output() generateRequested = new EventEmitter<void>();

  viewMbl = false;

  constructor(private toast: ToastService) {}

  getIncludedHblNumbers(): string {
    const hblNumbers = this.reviews.map(r => r.hbl_number).filter(n => !!n);
    return Array.from(new Set(hblNumbers)).join(', ');
  }

  saveDetails(form: any) {
    if (form.invalid) {
      this.toast.show('Please complete all required MBL fields.', 'error');
      return;
    }
    this.mblReview.details_confirmed = true;
    this.generateRequested.emit();
  }
}
