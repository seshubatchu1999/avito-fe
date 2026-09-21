import { Component, ChangeDetectorRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { UploaderComponent } from './features/logistics/components/uploader/uploader.component';
import { WifiLoaderComponent } from './shared/components/wifi-loader/wifi-loader.component';
import { HblDraftComponent } from './features/logistics/components/hbl-draft/hbl-draft.component';
import { MblSectionComponent } from './features/logistics/components/mbl-section/mbl-section.component';
import { ToastComponent } from './shared/components/toast/toast.component';
import { ToastService } from './core/services/toast.service';
import { DocumentExtractionService } from './core/services/document-extraction.service';
import { ReviewDraft, MblReview, PackingList } from './core/models/schemas';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule, UploaderComponent, WifiLoaderComponent, HblDraftComponent, MblSectionComponent, ToastComponent],
  templateUrl: './app.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('uploader') uploaderComponent!: UploaderComponent;
  
  isExtracting = false;
  isGenerating = false;
  
  hblReviews: ReviewDraft[] = [];
  mblReview: MblReview | null = null;
  selectedDraftIndices = new Set<number>([0]);

  constructor(
    private extractionService: DocumentExtractionService, 
    private cdr: ChangeDetectorRef,
    private toast: ToastService
  ) {}

  processFiles(files: File[]) {
    const existingNames = new Set(this.hblReviews.map(r => r.source_name));
    const newFiles = files.filter(f => !existingNames.has(f.name));

    if (newFiles.length === 0) {
      this.toast.show('All selected files have already been extracted.', 'info');
      return;
    }

    this.isExtracting = true;
    this.cdr.detectChanges();
    
    import('rxjs').then(({ forkJoin }) => {
      const requests = newFiles.map(file => this.extractionService.extractPackingList(file));
      
      forkJoin(requests).subscribe(results => {
        this.selectedDraftIndices = new Set([0]);
        results.forEach((packingList, index) => {
          const file = newFiles[index]; // Use newFiles instead of files!
          const newDraft: ReviewDraft = {
            draft_id: Math.random().toString(36).substring(7),
            source_name: file.name,
            source_document: URL.createObjectURL(file), // Generate a blob URL for preview
            mime_type: file.type || 'application/pdf',
            packing_list: packingList,
            details_confirmed: false,
            hbl_details: {
              hbl_number: null,
              notify_party: JSON.parse(JSON.stringify(packingList.notify_party || { name: null, address: null, tax_id: null })),
              container_number: packingList.containers?.[0]?.container_number || null,
              seal_number: packingList.containers?.[0]?.seal_numbers?.[0] || null,
              freight_terms: packingList.freight_terms
            }
          };
          this.hblReviews.push(newDraft);
        });
        
        this.isExtracting = false;
        this.toast.show(`Successfully extracted ${results.length} packing list(s)`, 'success');
        this.cdr.detectChanges();
      });
    });
  }

  getSelectedDrafts(): ReviewDraft[] {
    const selected = [];
    for (let i = 0; i < this.hblReviews.length; i++) {
      if (this.selectedDraftIndices.has(i)) {
        selected.push(this.hblReviews[i]);
      }
    }
    return selected;
  }

  generateHbl(drafts: ReviewDraft[]) {
    this.isGenerating = true;
    this.cdr.detectChanges();
    
    // For demo purposes, we will just use the first draft to generate the PDF 
    // and assign the same PDF to all of them, or just generate one and assign it.
    // Assuming backend will handle merging.
    this.extractionService.generateHbl(drafts[0]).subscribe(pdfUrl => {
      drafts.forEach(draft => {
        draft.hbl_pdf = pdfUrl;
        draft.hbl_filename = `Merged-${drafts[0].hbl_number}-HBL.pdf`;
      });
      
      this.toast.show(`Merged HBL Generated for ${drafts.length} packing list(s)`, 'success');
      
      this.checkMblReadiness();
      this.isGenerating = false;
      this.cdr.detectChanges();
    });
  }

  canShowMbl(): boolean {
    return this.hblReviews.length > 0 && this.hblReviews.every(r => !!r.hbl_pdf);
  }

  checkMblReadiness() {
    if (this.canShowMbl()) {
      if (!this.mblReview) {
        this.mblReview = {
          draft_id: Math.random().toString(36).substring(7),
          draft_ids: this.hblReviews.map(r => r.draft_id),
          details_confirmed: true, // Auto confirm for demo
          mbl_details: {
            mbl_number: 'MBL-' + Math.floor(Math.random() * 1000000),
            vessel_name: 'MSC MOCK',
            voyage_number: '001W',
            port_of_loading: 'Shanghai',
            port_of_discharge: 'Los Angeles',
            verified_gross_mass: '15000 kg',
            carrier_booking_reference: 'BKG-123',
            shipper: { name: 'Shipper', address: 'Address', tax_id: null },
            consignee: { name: 'Consignee', address: 'Address', tax_id: null },
            cargo_description: 'Mock Cargo',
            total_packages: '50',
            total_gross_weight: '15000 kg',
            total_measurement: '35 CBM'
          }
        };
      }
    }
  }

  generateMbl() {
    if (this.mblReview) {
      this.isGenerating = true;
      this.cdr.detectChanges();
      // Using the same blank pdf service call for demo
      this.extractionService.generateHbl(this.hblReviews[0]).subscribe(pdfUrl => {
        this.mblReview!.mbl_pdf = pdfUrl;
        this.mblReview!.mbl_filename = `${this.mblReview!.mbl_details.mbl_number}-MBL.pdf`;
        this.toast.show('MBL Generated Successfully', 'success');
        this.isGenerating = false;
        this.cdr.detectChanges();
      });
    }
  }

  clearResults() {
    this.hblReviews = [];
    this.mblReview = null;
    this.selectedDraftIndices = new Set<number>([0]);
    if (this.uploaderComponent) {
      this.uploaderComponent.clearAll();
    }
    this.cdr.detectChanges();
  }

  toggleSelection(index: number) {
    if (this.selectedDraftIndices.has(index)) {
      this.selectedDraftIndices.delete(index);
    } else {
      this.selectedDraftIndices.add(index);
    }
  }

  isDraftSelected(index: number): boolean {
    return this.selectedDraftIndices.has(index);
  }
}
