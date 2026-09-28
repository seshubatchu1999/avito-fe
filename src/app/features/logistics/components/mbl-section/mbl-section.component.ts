import { Component, EventEmitter, Input, Output, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReviewDraft, MblReview } from '../../../../core/models/schemas';
import { DocumentModalComponent } from '../../../../shared/components/document-modal/document-modal.component';
import { ToastService } from '../../../../core/services/toast.service';
import { BackendApiService } from '../../../../core/services/backend-api.service';

@Component({
  selector: 'app-mbl-section',
  standalone: true,
  imports: [CommonModule, FormsModule, DocumentModalComponent],
  templateUrl: './mbl-section.component.html',
  styleUrls: ['./mbl-section.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MblSectionComponent {
  @Input() reviews!: ReviewDraft[];
  @Input() mblReview!: MblReview;
  @Output() generateRequested = new EventEmitter<void>();

  viewMbl = false;
  mblDocUrl: string | null = null;
  isPreviewing = false;

  constructor(private toast: ToastService, private backendService: BackendApiService, private cdr: ChangeDetectorRef) {}

  previewMblDoc() {
    this.isPreviewing = true;
    this.cdr.markForCheck(); // notify Angular of loading state
    this.backendService.previewMbl().subscribe(base64 => {
      this.mblDocUrl = base64;
      this.viewMbl = true;
      this.isPreviewing = false;
      this.cdr.markForCheck();
    });
  }

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
