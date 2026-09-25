import { Component, ChangeDetectionStrategy, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ToastService } from './core/services/toast.service';
import { BackendApiService } from './core/services/backend-api.service';
import { DocumentExtractionService } from './core/services/document-extraction.service';
import { UploaderComponent } from './features/logistics/components/uploader/uploader.component';
import { HblDraftComponent } from './features/logistics/components/hbl-draft/hbl-draft.component';
import { MblSectionComponent } from './features/logistics/components/mbl-section/mbl-section.component';
import { GroupingBoardComponent } from './features/logistics/components/grouping-board/grouping-board.component';
import { WifiLoaderComponent } from './shared/components/wifi-loader/wifi-loader.component';
import { ToastComponent } from './shared/components/toast/toast.component';
import { ReviewDraft } from './core/models/schemas';
import { WorkflowStateService } from './core/services/workflow-state.service';

import { DocumentModalComponent } from './shared/components/document-modal/document-modal.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    UploaderComponent,
    HblDraftComponent,
    MblSectionComponent,
    GroupingBoardComponent,
    WifiLoaderComponent,
    ToastComponent,
    DocumentModalComponent
  ],
  templateUrl: './app.html',
  styleUrls: ['./app.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  workflow = inject(WorkflowStateService);

  isExtracting = signal<boolean>(false);
  isGenerating = signal<boolean>(false);
  
  selectedDocUrl = signal<string | null>(null);
  selectedDocName = signal<string>('');
  selectedDocMime = signal<string>('');

  constructor(
    private toast: ToastService,
    private backendService: BackendApiService,
    private extractionService: DocumentExtractionService
  ) {}

  viewDoc(draft: ReviewDraft) {
    console.log(draft,'draft')
    this.selectedDocUrl.set(draft.source_document || null);
    this.selectedDocName.set(draft.source_name);
    this.selectedDocMime.set(draft.mime_type);
  }

  closeDoc() {
    this.selectedDocUrl.set(null);
  }

  processFiles(files: File[]) {
    const existingNames = new Set(this.workflow.hblReviews().map(r => r.source_name));
    const newFiles = files.filter(f => !existingNames.has(f.name));

    if (newFiles.length === 0) {
      this.toast.show('All selected files have already been extracted.', 'info');
      return;
    }

    const isSubsequentUpload = this.workflow.hblReviews().length > 0;

    this.isExtracting.set(true);
    
    this.backendService.uploadFiles(newFiles).subscribe((response: any) => {
      let currentColors = { ...this.workflow.groupColors() };
      const currentDrafts = [...this.workflow.hblReviews()];
      console.log(response,'response')
      if (response.batch_id) {
        this.workflow.setBatchId(response.batch_id);
      }
      response.hbl_groups.forEach((group: any) => {

        const groupId = group.group_id;
console.log(groupId,'grpid')
        if (!currentColors[groupId]) {
           const colorIndex = Object.keys(currentColors).length % this.workflow.availableColors.length;
           currentColors[groupId] = this.workflow.availableColors[colorIndex];
        }

        group.document_ids.forEach((docId: string) => {
          const doc = response.documents.find((d: any) => d.document_id === docId);
          if (!doc) return;

          // Try to map back to uploaded file, else fake one (for mock scenario)
          let file = newFiles.find(f => f.name === doc.filename);
          if (!file) {
             // If mock doesn't match actual file names, assign sequentially if possible, or fallback
             file = newFiles[currentDrafts.length % newFiles.length];
          }
          if (!file) return;

          const packingList = doc.extraction;
          const newDraft: ReviewDraft = {
            draft_id: Math.random().toString(36).substring(7),
            document_id: doc.document_id,
            source_name: doc.filename,
            source_document: URL.createObjectURL(file),
            mime_type: doc.mime_type || 'application/pdf',
            group_id: groupId,
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
          currentDrafts.push(newDraft);
        });
      });

      this.workflow.setGroupColors(currentColors);
      this.workflow.setHblReviews(currentDrafts);
      
      this.toast.show(`Extracted data from ${newFiles.length} files successfully`, 'success');
      this.workflow.setCurrentStep(1);
      this.isExtracting.set(false);
    });
  }

  generateHbl(drafts: ReviewDraft[]) {
    this.isGenerating.set(true);
    
    this.extractionService.generateHbl(drafts[0]).subscribe((pdfUrl: string) => {
      drafts.forEach(draft => {
        this.workflow.updateDraft(draft.draft_id, {
          hbl_pdf: pdfUrl,
          hbl_filename: `Merged-${drafts[0].hbl_number}-HBL.pdf`
        });
      });
      
      this.toast.show('Final HBL generated. Saved HBL details are locked.', 'success');
      this.isGenerating.set(false);
      this.checkMblReadiness();
    });
  }

  checkMblReadiness() {
    if (this.workflow.canShowMbl()) {
      if (!this.workflow.mblReview()) {
        const drafts = this.workflow.hblReviews();
        this.workflow.setMblReview({
          draft_id: Math.random().toString(36).substring(7),
          draft_ids: drafts.map(r => r.draft_id),
          details_confirmed: true,
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
            total_packages: '100',
            total_gross_weight: '15000 kg',
            total_measurement: '20 CBM'
          }
        });
      }
      this.workflow.setCurrentStep(2);
    }
  }

  generateMbl() {
    const mblReview = this.workflow.mblReview();
    if (mblReview) {
      this.isGenerating.set(true);
      
      this.extractionService.generateHbl(this.workflow.hblReviews()[0]).subscribe((pdfUrl: string) => {
        this.workflow.setMblReview({
          ...mblReview,
          mbl_pdf: pdfUrl,
          mbl_filename: `${mblReview.mbl_details.mbl_number}-MBL.pdf`
        });
        this.toast.show('MBL Generated Successfully', 'success');
        this.isGenerating.set(false);
      });
    }
  }
}
