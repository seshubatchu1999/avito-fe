import { Component, ChangeDetectionStrategy, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ToastService } from '../../core/services/toast.service';
import { UploaderComponent } from '../../features/logistics/components/uploader/uploader.component';
import { WifiLoaderComponent } from '../../shared/components/wifi-loader/wifi-loader.component';

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
                <h3 style="margin: 0; color: #1a2b4c; font-weight: 600;">Review Draft (Extracted Invoices)</h3>
                <button (click)="downloadSpreadsheet()" [disabled]="!hasProcessed()" style="padding: 0.5rem 1rem; background: #fef1eb; color: #f26d21; border: 1px solid #f26d21; border-radius: 4px; font-weight: bold; cursor: pointer; display: flex; align-items: center; gap: 0.5rem;">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
                  Download Spreadsheet
                </button>
              </div>

              <table style="width: 100%; border-collapse: collapse; margin-top: 1.5rem;">
                <thead>
                  <tr style="background: #f8fafc; border-bottom: 2px solid #e2e8f0;">
                    <th style="padding: 1rem 0.75rem; text-align: left; font-weight: 600; color: #475569;">File Name</th>
                    <th style="padding: 1rem 0.75rem; text-align: left; font-weight: 600; color: #475569;">Date</th>
                    <th style="padding: 1rem 0.75rem; text-align: right; font-weight: 600; color: #475569;">Amount</th>
                  </tr>
                </thead>
                <tbody>
                  <tr *ngFor="let invoice of extractedInvoices()" style="border-bottom: 1px solid #e2e8f0;">
                    <td style="padding: 1rem 0.75rem; color: #1e293b; font-weight: 500;">{{ invoice.name }}</td>
                    <td style="padding: 1rem 0.75rem; color: #64748b;">{{ invoice.date }}</td>
                    <td style="padding: 1rem 0.75rem; text-align: right; color: #1e293b; font-weight: 600;">{{ invoice.amount | currency }}</td>
                  </tr>
                  <tr *ngIf="!hasProcessed()">
                     <td colspan="3" style="padding: 2rem; text-align: center; color: #94a3b8;">Awaiting extraction...</td>
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

  constructor(private toast: ToastService) {}

  onFilesSelected(files: File[]) {
    this.selectedFiles.set(files);
    this.processInvoices();
  }

  processInvoices() {
    if (this.selectedFiles().length === 0) return;
    
    this.isProcessing.set(true);

    // Simulate processing
    setTimeout(() => {
      const mockResults = this.selectedFiles().map((file, idx) => ({
        name: file.name,
        date: new Date().toLocaleDateString(),
        amount: Math.floor(Math.random() * 5000) + 100,
        vendor: ['Acme Corp', 'Global Logistics', 'FastShip Inc'][idx % 3],
        tax: Math.floor(Math.random() * 500)
      }));
     
      this.extractedInvoices.set(mockResults);
      this.isProcessing.set(false);
      this.hasProcessed.set(true);
      this.toast.show('Invoices processed successfully', 'success');
    }, 2500);
  }

  downloadSpreadsheet() {
    const invoices = this.extractedInvoices();
    if (invoices.length === 0) return;

    // Create a simple CSV
    const headers = ['File Name', 'Invoice Date', 'Amount', 'Vendor', 'Tax'];
    const rows = invoices.map(i => [i.name, i.date, i.amount, i['vendor'], i['tax']]);
    
    const csvContent = [
      headers.join(','),
      ...rows.map(row => row.join(','))
    ].join('\n');

    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    const url = URL.createObjectURL(blob);
    
    link.setAttribute('href', url);
    link.setAttribute('download', 'extracted_invoices.csv');
    link.style.visibility = 'hidden';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  reset() {
    this.selectedFiles.set([]);
    this.hasProcessed.set(false);
    this.extractedInvoices.set([]);
  }
}

