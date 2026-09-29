import { Component, ChangeDetectionStrategy, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ToastService } from '../../core/services/toast.service';
import { UploaderComponent } from '../../features/logistics/components/uploader/uploader.component';
import { WifiLoaderComponent } from '../../shared/components/wifi-loader/wifi-loader.component';
import { DocumentExtractionService } from '../../core/services/document-extraction.service';
import { BatchExtractionResponse, PackingList, PackingListItem } from '../../core/models/schemas';

interface ExtractedInvoice {
  name: string;
  date: string;
  amount: number;
  [key: string]: any;
}

@Component({
  selector: 'app-invoice-flow',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule, UploaderComponent, WifiLoaderComponent],
  template: `
    <div class="layout-container">
      <main class="main-layout">
        <!-- Left Column: Uploader -->
        <div class="left-panel">
          <header class="app-header" style="justify-content: center; width: 100%; position: relative;">
            <a routerLink="/" style="position: absolute; left: 0; display: flex; align-items: center; gap: 4px; text-decoration: none; color: #64748b; font-weight: 500; font-size: 14px;">
               <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M19 12H5"></path><polyline points="12 19 5 12 12 5"></polyline></svg>
               Back
            </a>
            <div class="logo-container" style="justify-content: center;">
              <img src="avito.png" alt="Avito Logo" class="header-logo" />
            </div>
          </header>

          <app-uploader buttonText="Extract Invoices" (filesSelected)="onFilesSelected($event)"></app-uploader>
        </div>

        <!-- Right Column: Results -->
        <div class="right-panel" [class.panel-disabled]="!hasProcessed()">
          <div class="review-content" style="padding-top: 24px;">
            
            <!-- Result Table Structure (always visible, disabled if not processed) -->
            <div style="background: white; border-radius: 8px; padding: 2rem; box-shadow: 0 1px 3px rgba(0,0,0,0.05);">
              <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1rem;">
                <h3 style="margin: 0; color: #1a2b4c; font-weight: 600;">Extracted Invoices</h3>
                <button (click)="downloadSpreadsheet()" [disabled]="!hasProcessed()" style="padding: 0.5rem 1rem; background: #fef1eb; color: #f26d21; border: 1px solid #f26d21; border-radius: 4px; font-weight: bold; cursor: pointer; display: flex; align-items: center; gap: 0.5rem;">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
                  Download Spreadsheet
                </button>
              </div>

              <table style="width: 100%; border-collapse: separate; border-spacing: 0; margin-top: 1.5rem; border-radius: 8px; overflow: hidden; border: 1px solid #e2e8f0;">
                <thead>
                  <tr style="background: #f8fafc;">
                    <th style="padding: 1rem 1.25rem; text-align: center; font-weight: 600; color: #475569; width: 60px; border-bottom: 1px solid #e2e8f0; font-size: 0.875rem; text-transform: uppercase; letter-spacing: 0.05em;">S.No</th>
                    <th style="padding: 1rem 1.25rem; text-align: left; font-weight: 600; color: #475569; border-bottom: 1px solid #e2e8f0; font-size: 0.875rem; text-transform: uppercase; letter-spacing: 0.05em;">File Name</th>
                    <th style="padding: 1rem 1.25rem; text-align: left; font-weight: 600; color: #475569; border-bottom: 1px solid #e2e8f0; font-size: 0.875rem; text-transform: uppercase; letter-spacing: 0.05em;">Date</th>
                    <th style="padding: 1rem 1.25rem; text-align: right; font-weight: 600; color: #475569; border-bottom: 1px solid #e2e8f0; font-size: 0.875rem; text-transform: uppercase; letter-spacing: 0.05em;">Amount</th>
                  </tr>
                </thead>
                <tbody>
                  <tr *ngFor="let invoice of extractedInvoices(); let i = index" style="background: #ffffff; transition: background 0.2s;" onmouseover="this.style.background='#f1f5f9'" onmouseout="this.style.background='#ffffff'">
                    <td style="padding: 1rem 1.25rem; color: #64748b; text-align: center; font-weight: 500; border-bottom: 1px solid #e2e8f0;">{{ i + 1 }}</td>
                    <td style="padding: 1rem 1.25rem; color: #1e293b; font-weight: 600; border-bottom: 1px solid #e2e8f0;">{{ invoice.name }}</td>
                    <td style="padding: 1rem 1.25rem; color: #64748b; border-bottom: 1px solid #e2e8f0;">{{ invoice.date }}</td>
                    <td style="padding: 1rem 1.25rem; text-align: right; color: #1e293b; font-weight: 600; border-bottom: 1px solid #e2e8f0;">{{ invoice.amount | currency }}</td>
                  </tr>
                  <tr *ngIf="!hasProcessed()">
                     <td colspan="4" style="padding: 3rem 2rem; text-align: center; color: #94a3b8; background: #ffffff;">Awaiting extraction...</td>
                  </tr>
                </tbody>
              </table>

              <div style="margin-top: 2rem; text-align: left; border-top: 1px solid #e2e8f0; padding-top: 1.5rem;">
                <button (click)="reset()" [disabled]="!hasProcessed()" style="padding: 0.5rem 1rem; background: transparent; color: #64748b; border: 1px solid #cbd5e1; border-radius: 4px; cursor: pointer; font-weight: 500;">
                  Clear All
                </button>
              </div>
            </div>
          </div>

        </div>
      </main>
    </div>

    <app-wifi-loader [show]="isProcessing()" text="processing invoices"></app-wifi-loader>
  `,
  styleUrls: ['../mbl-flow/mbl-flow.component.css'],
  styles: [`
    .primary-btn:disabled {
      opacity: 0.5;
      cursor: not-allowed;
    }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class InvoiceFlowComponent {
  selectedFiles = signal<File[]>([]);
  isProcessing = signal<boolean>(false);
  hasProcessed = signal<boolean>(false);
  extractedInvoices = signal<ExtractedInvoice[]>([]);
  batchId = signal<string | null>(null);

  constructor(
    private toast: ToastService,
    private extractionService: DocumentExtractionService
  ) {}

  onFilesSelected(files: File[]) {
    this.selectedFiles.set(files);
    this.processInvoices();
  }

  processInvoices() {
    if (this.selectedFiles().length === 0) return;

    this.isProcessing.set(true);

    this.extractionService.uploadFiles(this.selectedFiles()).subscribe({
      next: (response: BatchExtractionResponse) => {
        this.batchId.set(response.batch_id);
        this.extractedInvoices.set(
          response.documents.map((document) => this.toInvoiceRow(document.extraction, document.filename))
        );
        this.isProcessing.set(false);
        this.hasProcessed.set(true);
        this.toast.show('Invoices processed successfully', 'success');
      },
      error: (error) => {
        this.isProcessing.set(false);
        const errorDetail = error?.error?.detail;
        const msg = typeof errorDetail === 'string'
          ? errorDetail
          : (Array.isArray(errorDetail) ? errorDetail.map((e: any) => e.msg).join(', ') : 'Failed to extract data from files. Please try again.');
        this.toast.show(msg, 'error');
        console.error('Invoice extraction error:', error);
      }
    });
  }

  downloadSpreadsheet() {
    const batchId = this.batchId();
    if (!batchId) return;

    this.extractionService.downloadInvoiceSheet(batchId).subscribe({
      next: (blob) => {
        const url = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.download = 'invoice-sheets.xlsx';
        link.style.visibility = 'hidden';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        URL.revokeObjectURL(url);
      },
      error: (error) => {
        const errorDetail = error?.error?.detail;
        const msg = typeof errorDetail === 'string'
          ? errorDetail
          : (Array.isArray(errorDetail) ? errorDetail.map((e: any) => e.msg).join(', ') : 'Failed to generate the spreadsheet. Please try again.');
        this.toast.show(msg, 'error');
        console.error('Invoice sheet error:', error);
      }
    });
  }

  reset() {
    this.selectedFiles.set([]);
    this.hasProcessed.set(false);
    this.extractedInvoices.set([]);
    this.batchId.set(null);
  }

  private toInvoiceRow(extraction: PackingList, filename: string): ExtractedInvoice {
    const items: PackingListItem[] = extraction?.items ?? [];
    return {
      name: filename,
      date: extraction?.invoice_date || extraction?.date_of_issue || extraction?.packing_list_date || '-',
      amount: this.totalAmount(items),
      invoice_number: extraction?.invoice_number || '',
      issued_to: extraction?.buyer?.name || extraction?.consignee?.name || ''
    };
  }

  /** Sums the printed line amounts only when every one of them is a parsable number. */
  private totalAmount(items: PackingListItem[]): number {
    const printed = items
      .map((item) => (typeof item?.amount === 'string' ? item.amount.trim() : ''))
      .filter((value) => value.length > 0);

    if (printed.length === 0) return 0;

    const parsed = printed.map((value) => this.parseAmount(value));
    if (parsed.some((value) => value === null)) return 0;
    return (parsed as number[]).reduce((sum, value) => sum + value, 0);
  }

  private parseAmount(value: string): number | null {
    const match = value.replace(/[\s ]/g, '').match(/[+-]?[\d.,]+/);
    if (!match) return null;
    const raw = match[0];
    const normalized = /\d[.,]\d{1,2}$/.test(raw)
      ? raw.replace(/[.,](?=\D*$)/, '.').replace(/[.,](?=\D)/g, '')
      : raw.replace(/[.,]/g, '');
    const parsed = Number.parseFloat(normalized);
    return Number.isFinite(parsed) ? parsed : null;
  }
}
