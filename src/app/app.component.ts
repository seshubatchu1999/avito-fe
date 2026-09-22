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
import { BackendApiService } from './core/services/backend-api.service';
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
  isMultiSelectOpen: boolean = false;
  
  // Group coloring
  groupColors: { [key: string]: string } = {};
  availableColors = ['#ef4444', '#3b82f6', '#f59e0b', '#8b5cf6', '#10b981', '#ec4899']; // Red, Blue, Amber, Violet, Emerald, Pink

  constructor(
    private extractionService: DocumentExtractionService, 
    private backendService: BackendApiService,
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
    
    this.backendService.uploadFiles(newFiles).subscribe((response: any) => {
      
      Object.keys(response).forEach(groupId => {
        const groupItems = response[groupId];
        if (groupItems.length > 1) {
          // Assign a color if not already assigned
          if (!this.groupColors[groupId]) {
             const colorIndex = Object.keys(this.groupColors).length % this.availableColors.length;
             this.groupColors[groupId] = this.availableColors[colorIndex];
          }
        }
        
        groupItems.forEach((item: any) => {
          const file = newFiles.find(f => f.name === item.file_name);
          if (!file) return;

          const packingList = item.packing_list;
          const newDraft: ReviewDraft = {
            draft_id: Math.random().toString(36).substring(7),
            source_name: file.name,
            source_document: URL.createObjectURL(file),
            mime_type: file.type || 'application/pdf',
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
          this.hblReviews.push(newDraft);
        });
      });
      
      const numGroupsFound = Object.keys(response).filter(k => response[k].length > 1).length;
      if (numGroupsFound > 0) {
        this.toast.show(`${numGroupsFound} group(s) found`, 'info');
      } else {
        this.toast.show(`Successfully extracted ${newFiles.length} packing list(s)`, 'success');
      }

      // Default selection logic: select all by default to show all n groups and singles
      this.selectedDraftIndices = new Set(this.hblReviews.map((_, i) => i));

      this.updateGroupedDrafts();
      this.isExtracting = false;
      this.cdr.detectChanges();
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
    this.groupColors = {};
    if (this.uploaderComponent) {
      this.uploaderComponent.clearAll();
    }
    this.updateGroupedDrafts();
    this.cdr.detectChanges();
  }

  clearSuggestions() {
    this.groupColors = {};
    this.hblReviews.forEach(draft => {
      draft.group_id = 'single_' + Math.random().toString(36).substring(7);
    });
    this.selectedDraftIndices = new Set(this.hblReviews.map((_, i) => i));
    this.toast.show('Suggestion groups cleared', 'info');
    this.updateGroupedDrafts();
    this.cdr.detectChanges();
  }

  addGroup() {
    const nextIndex = Object.keys(this.groupColors).length;
    const newGroupId = 'group_' + Math.random().toString(36).substring(7);
    this.groupColors[newGroupId] = this.availableColors[nextIndex % this.availableColors.length];
    this.updateGroupedDrafts();
  }

  isDraftSelected(index: number): boolean {
    return this.selectedDraftIndices.has(index);
  }

  getGroupStyle(review: ReviewDraft, index: number): { [key: string]: string } | null {
    const style: { [key: string]: string } = {};
    const groupId = review.group_id;
    const gColor = (groupId && this.groupColors[groupId]) ? this.groupColors[groupId] : null;

    if (gColor) {
      style['border-left'] = `4px solid ${gColor}`;
    }
    
    return Object.keys(style).length > 0 ? style : null;
  }

  hasGroupColors(): boolean {
    return Object.keys(this.groupColors).length > 0;
  }

  // Drag and drop state
  draggedDraftIndex: number | null = null;

  onDragStart(event: DragEvent, index: number) {
    this.draggedDraftIndex = index;
    if (event.dataTransfer) {
      event.dataTransfer.effectAllowed = 'move';
      event.dataTransfer.setData('text/plain', index.toString());
    }
  }

  onDragOver(event: DragEvent) {
    event.preventDefault();
    if (event.dataTransfer) {
      event.dataTransfer.dropEffect = 'move';
    }
  }

  onDrop(event: DragEvent, targetGroupId: string | null) {
    event.preventDefault();
    if (this.draggedDraftIndex !== null) {
      const draft = this.hblReviews[this.draggedDraftIndex];
      const oldGroupId = draft.group_id;

      if (targetGroupId !== null) {
        draft.group_id = targetGroupId;
      } else {
        draft.group_id = 'single_' + Math.random().toString(36).substring(7);
      }

      if (oldGroupId && this.groupColors[oldGroupId] && oldGroupId !== targetGroupId) {
        const hasRemaining = this.hblReviews.some(d => d.group_id === oldGroupId);
        if (!hasRemaining) {
          delete this.groupColors[oldGroupId];
        }
      }

      this.updateGroupedDrafts();
      this.draggedDraftIndex = null;
    }
  }

  removeGroup(groupId: string | null) {
    if (!groupId) return;
    this.hblReviews.forEach(draft => {
      if (draft.group_id === groupId) {
        draft.group_id = 'single_' + Math.random().toString(36).substring(7);
      }
    });
    delete this.groupColors[groupId];
    this.updateGroupedDrafts();
  }

  groupedSelectedDrafts: { groupId: string | null, color: string | null, drafts: ReviewDraft[] }[] = [];
  groupedAllDrafts: { groupId: string | null, color: string | null, drafts: ReviewDraft[] }[] = [];
  ungroupedDrafts: ReviewDraft[] = [];

  getDraftIndex(draft: ReviewDraft): number {
    return this.hblReviews.indexOf(draft);
  }

  updateGroupedDrafts() {
    // 1. Compute groupedAllDrafts for the drag-and-drop tree zones (shows everything)
    const allGroupsMap = new Map<string, ReviewDraft[]>();
    this.ungroupedDrafts = [];

    this.hblReviews.forEach(draft => {
       if (draft.group_id && this.groupColors[draft.group_id]) {
           if (!allGroupsMap.has(draft.group_id)) {
               allGroupsMap.set(draft.group_id, []);
           }
           allGroupsMap.get(draft.group_id)!.push(draft);
       } else {
           this.ungroupedDrafts.push(draft);
       }
    });

    const allResult: { groupId: string | null, color: string | null, drafts: ReviewDraft[] }[] = [];
    Object.keys(this.groupColors).forEach(groupId => {
       allResult.push({ 
         groupId, 
         color: this.groupColors[groupId], 
         drafts: allGroupsMap.get(groupId) || [] 
       });
    });
    this.groupedAllDrafts = allResult;

    // 2. Compute groupedSelectedDrafts for the HBL Accordions below (shows only selected)
    const selected = this.getSelectedDrafts();
    if (selected.length === 0) {
      this.groupedSelectedDrafts = [];
      return;
    }

    const groupsMap = new Map<string, ReviewDraft[]>();
    const singles: ReviewDraft[][] = [];

    selected.forEach(draft => {
       if (draft.group_id && this.groupColors[draft.group_id]) {
           if (!groupsMap.has(draft.group_id)) {
               groupsMap.set(draft.group_id, []);
           }
           groupsMap.get(draft.group_id)!.push(draft);
       } else {
           singles.push([draft]);
       }
    });

    const result: { groupId: string | null, color: string | null, drafts: ReviewDraft[] }[] = [];
    
    // Only include groups that have selected drafts for the accordions
    groupsMap.forEach((drafts, groupId) => {
       result.push({ 
         groupId, 
         color: this.groupColors[groupId], 
         drafts 
       });
    });

    singles.forEach(drafts => {
       result.push({ groupId: null, color: null, drafts });
    });

    this.groupedSelectedDrafts = result;
  }
}
