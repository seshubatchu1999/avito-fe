import {
  DocumentExtractionService,
  UploaderComponent,
  WifiLoaderComponent
} from "./chunk-N3WTCS2V.js";
import {
  RouterLink,
  RouterModule
} from "./chunk-2II2K2OC.js";
import {
  FormsModule
} from "./chunk-TTGW4AYQ.js";
import {
  ToastService
} from "./chunk-VY4JNFW2.js";
import {
  ChangeDetectionStrategy,
  CommonModule,
  Component,
  CurrencyPipe,
  NgForOf,
  NgIf,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener,
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-YEYBPR5L.js";

// src/app/pages/invoice-flow/invoice-flow.component.ts
function InvoiceFlowComponent_tr_36_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr", 31)(1, "td", 32);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td", 33);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td", 34);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "td", 35);
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "currency");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const invoice_r1 = ctx.$implicit;
    const i_r2 = ctx.index;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(i_r2 + 1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(invoice_r1.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(invoice_r1.date);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(9, 4, invoice_r1.amount));
  }
}
function InvoiceFlowComponent_tr_37_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 36);
    \u0275\u0275text(2, "Awaiting extraction...");
    \u0275\u0275elementEnd()();
  }
}
var InvoiceFlowComponent = class _InvoiceFlowComponent {
  constructor(toast, extractionService) {
    this.toast = toast;
    this.extractionService = extractionService;
  }
  toast;
  extractionService;
  selectedFiles = signal(
    [],
    ...ngDevMode ? [{ debugName: "selectedFiles" }] : (
      /* istanbul ignore next */
      []
    )
  );
  isProcessing = signal(
    false,
    ...ngDevMode ? [{ debugName: "isProcessing" }] : (
      /* istanbul ignore next */
      []
    )
  );
  hasProcessed = signal(
    false,
    ...ngDevMode ? [{ debugName: "hasProcessed" }] : (
      /* istanbul ignore next */
      []
    )
  );
  extractedInvoices = signal(
    [],
    ...ngDevMode ? [{ debugName: "extractedInvoices" }] : (
      /* istanbul ignore next */
      []
    )
  );
  batchId = signal(
    null,
    ...ngDevMode ? [{ debugName: "batchId" }] : (
      /* istanbul ignore next */
      []
    )
  );
  onFilesSelected(files) {
    this.selectedFiles.set(files);
    this.processInvoices();
  }
  processInvoices() {
    if (this.selectedFiles().length === 0)
      return;
    this.isProcessing.set(true);
    this.extractionService.uploadFiles(this.selectedFiles()).subscribe({
      next: (response) => {
        this.batchId.set(response.batch_id);
        this.extractedInvoices.set(response.documents.map((document2) => this.toInvoiceRow(document2.extraction, document2.filename)));
        this.isProcessing.set(false);
        this.hasProcessed.set(true);
        this.toast.show("Invoices processed successfully", "success");
      },
      error: (error) => {
        this.isProcessing.set(false);
        const errorDetail = error?.error?.detail;
        const msg = typeof errorDetail === "string" ? errorDetail : Array.isArray(errorDetail) ? errorDetail.map((e) => e.msg).join(", ") : "Failed to extract data from files. Please try again.";
        this.toast.show(msg, "error");
        console.error("Invoice extraction error:", error);
      }
    });
  }
  downloadSpreadsheet() {
    const batchId = this.batchId();
    if (!batchId)
      return;
    this.extractionService.downloadInvoiceSheet(batchId).subscribe({
      next: (blob) => {
        const url = URL.createObjectURL(blob);
        const link = document.createElement("a");
        link.href = url;
        link.download = "invoice-sheets.xlsx";
        link.style.visibility = "hidden";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        URL.revokeObjectURL(url);
      },
      error: (error) => {
        const errorDetail = error?.error?.detail;
        const msg = typeof errorDetail === "string" ? errorDetail : Array.isArray(errorDetail) ? errorDetail.map((e) => e.msg).join(", ") : "Failed to generate the spreadsheet. Please try again.";
        this.toast.show(msg, "error");
        console.error("Invoice sheet error:", error);
      }
    });
  }
  reset() {
    this.selectedFiles.set([]);
    this.hasProcessed.set(false);
    this.extractedInvoices.set([]);
    this.batchId.set(null);
  }
  toInvoiceRow(extraction, filename) {
    const items = extraction?.items ?? [];
    return {
      name: filename,
      date: extraction?.invoice_date || extraction?.date_of_issue || extraction?.packing_list_date || "-",
      amount: this.totalAmount(items),
      invoice_number: extraction?.invoice_number || "",
      issued_to: extraction?.buyer?.name || extraction?.consignee?.name || ""
    };
  }
  /** Sums the printed line amounts only when every one of them is a parsable number. */
  totalAmount(items) {
    const printed = items.map((item) => typeof item?.amount === "string" ? item.amount.trim() : "").filter((value) => value.length > 0);
    if (printed.length === 0)
      return 0;
    const parsed = printed.map((value) => this.parseAmount(value));
    if (parsed.some((value) => value === null))
      return 0;
    return parsed.reduce((sum, value) => sum + value, 0);
  }
  parseAmount(value) {
    const match = value.replace(/[\s ]/g, "").match(/[+-]?[\d.,]+/);
    if (!match)
      return null;
    const raw = match[0];
    const normalized = /\d[.,]\d{1,2}$/.test(raw) ? raw.replace(/[.,](?=\D*$)/, ".").replace(/[.,](?=\D)/g, "") : raw.replace(/[.,]/g, "");
    const parsed = Number.parseFloat(normalized);
    return Number.isFinite(parsed) ? parsed : null;
  }
  static \u0275fac = function InvoiceFlowComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _InvoiceFlowComponent)(\u0275\u0275directiveInject(ToastService), \u0275\u0275directiveInject(DocumentExtractionService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _InvoiceFlowComponent, selectors: [["app-invoice-flow"]], decls: 42, vars: 7, consts: [[1, "layout-container"], [1, "main-layout"], [1, "left-panel"], [1, "app-header", 2, "justify-content", "center", "width", "100%", "position", "relative"], ["routerLink", "/", 2, "position", "absolute", "left", "0", "display", "flex", "align-items", "center", "gap", "4px", "text-decoration", "none", "color", "#64748b", "font-weight", "500", "font-size", "14px"], ["width", "20", "height", "20", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2"], ["d", "M19 12H5"], ["points", "12 19 5 12 12 5"], [1, "logo-container", 2, "justify-content", "center"], ["src", "avito.png", "alt", "Avito Logo", 1, "header-logo"], ["buttonText", "Extract Invoices", 3, "filesSelected"], [1, "right-panel"], [1, "review-content", 2, "padding-top", "24px"], [2, "background", "white", "border-radius", "8px", "padding", "2rem", "box-shadow", "0 1px 3px rgba(0,0,0,0.05)"], [2, "display", "flex", "justify-content", "space-between", "align-items", "center", "margin-bottom", "1rem"], [2, "margin", "0", "color", "#1a2b4c", "font-weight", "600"], [2, "padding", "0.5rem 1rem", "background", "#fef1eb", "color", "#f26d21", "border", "1px solid #f26d21", "border-radius", "4px", "font-weight", "bold", "cursor", "pointer", "display", "flex", "align-items", "center", "gap", "0.5rem", 3, "click", "disabled"], ["width", "16", "height", "16", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2"], ["d", "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"], ["points", "7 10 12 15 17 10"], ["x1", "12", "y1", "15", "x2", "12", "y2", "3"], [2, "width", "100%", "border-collapse", "separate", "border-spacing", "0", "margin-top", "1.5rem", "border-radius", "8px", "overflow", "hidden", "border", "1px solid #e2e8f0"], [2, "background", "#f8fafc"], [2, "padding", "1rem 1.25rem", "text-align", "center", "font-weight", "600", "color", "#475569", "width", "60px", "border-bottom", "1px solid #e2e8f0", "font-size", "0.875rem", "text-transform", "uppercase", "letter-spacing", "0.05em"], [2, "padding", "1rem 1.25rem", "text-align", "left", "font-weight", "600", "color", "#475569", "border-bottom", "1px solid #e2e8f0", "font-size", "0.875rem", "text-transform", "uppercase", "letter-spacing", "0.05em"], [2, "padding", "1rem 1.25rem", "text-align", "right", "font-weight", "600", "color", "#475569", "border-bottom", "1px solid #e2e8f0", "font-size", "0.875rem", "text-transform", "uppercase", "letter-spacing", "0.05em"], ["style", "background: #ffffff; transition: background 0.2s;", "onmouseover", "this.style.background='#f1f5f9'", "onmouseout", "this.style.background='#ffffff'", 4, "ngFor", "ngForOf"], [4, "ngIf"], [2, "margin-top", "2rem", "text-align", "left", "border-top", "1px solid #e2e8f0", "padding-top", "1.5rem"], [2, "padding", "0.5rem 1rem", "background", "transparent", "color", "#64748b", "border", "1px solid #cbd5e1", "border-radius", "4px", "cursor", "pointer", "font-weight", "500", 3, "click", "disabled"], ["text", "processing invoices", 3, "show"], ["onmouseover", "this.style.background='#f1f5f9'", "onmouseout", "this.style.background='#ffffff'", 2, "background", "#ffffff", "transition", "background 0.2s"], [2, "padding", "1rem 1.25rem", "color", "#64748b", "text-align", "center", "font-weight", "500", "border-bottom", "1px solid #e2e8f0"], [2, "padding", "1rem 1.25rem", "color", "#1e293b", "font-weight", "600", "border-bottom", "1px solid #e2e8f0"], [2, "padding", "1rem 1.25rem", "color", "#64748b", "border-bottom", "1px solid #e2e8f0"], [2, "padding", "1rem 1.25rem", "text-align", "right", "color", "#1e293b", "font-weight", "600", "border-bottom", "1px solid #e2e8f0"], ["colspan", "4", 2, "padding", "3rem 2rem", "text-align", "center", "color", "#94a3b8", "background", "#ffffff"]], template: function InvoiceFlowComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "main", 1)(2, "div", 2)(3, "header", 3)(4, "a", 4);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(5, "svg", 5);
      \u0275\u0275element(6, "path", 6)(7, "polyline", 7);
      \u0275\u0275elementEnd();
      \u0275\u0275text(8, " Back ");
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(9, "div", 8);
      \u0275\u0275element(10, "img", 9);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(11, "app-uploader", 10);
      \u0275\u0275listener("filesSelected", function InvoiceFlowComponent_Template_app_uploader_filesSelected_11_listener($event) {
        return ctx.onFilesSelected($event);
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(12, "div", 11)(13, "div", 12)(14, "div", 13)(15, "div", 14)(16, "h3", 15);
      \u0275\u0275text(17, "Extracted Invoices");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(18, "button", 16);
      \u0275\u0275listener("click", function InvoiceFlowComponent_Template_button_click_18_listener() {
        return ctx.downloadSpreadsheet();
      });
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(19, "svg", 17);
      \u0275\u0275element(20, "path", 18)(21, "polyline", 19)(22, "line", 20);
      \u0275\u0275elementEnd();
      \u0275\u0275text(23, " Download Spreadsheet ");
      \u0275\u0275elementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(24, "table", 21)(25, "thead")(26, "tr", 22)(27, "th", 23);
      \u0275\u0275text(28, "S.No");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(29, "th", 24);
      \u0275\u0275text(30, "File Name");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(31, "th", 24);
      \u0275\u0275text(32, "Date");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(33, "th", 25);
      \u0275\u0275text(34, "Amount");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(35, "tbody");
      \u0275\u0275template(36, InvoiceFlowComponent_tr_36_Template, 10, 6, "tr", 26)(37, InvoiceFlowComponent_tr_37_Template, 3, 0, "tr", 27);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(38, "div", 28)(39, "button", 29);
      \u0275\u0275listener("click", function InvoiceFlowComponent_Template_button_click_39_listener() {
        return ctx.reset();
      });
      \u0275\u0275text(40, " Clear All ");
      \u0275\u0275elementEnd()()()()()()();
      \u0275\u0275element(41, "app-wifi-loader", 30);
    }
    if (rf & 2) {
      \u0275\u0275advance(12);
      \u0275\u0275classProp("panel-disabled", !ctx.hasProcessed());
      \u0275\u0275advance(6);
      \u0275\u0275property("disabled", !ctx.hasProcessed());
      \u0275\u0275advance(18);
      \u0275\u0275property("ngForOf", ctx.extractedInvoices());
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.hasProcessed());
      \u0275\u0275advance(2);
      \u0275\u0275property("disabled", !ctx.hasProcessed());
      \u0275\u0275advance(2);
      \u0275\u0275property("show", ctx.isProcessing());
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, FormsModule, RouterModule, RouterLink, UploaderComponent, WifiLoaderComponent, CurrencyPipe], styles: ["\n.header-logo[_ngcontent-%COMP%] {\n  height: 48px;\n  object-fit: contain;\n}\n.header-subtitle[_ngcontent-%COMP%] {\n  margin-top: 4px;\n  font-size: 14px;\n}\n.main-layout[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 24px;\n  flex: 1;\n  overflow: hidden;\n  padding: 10px;\n  background-color: #f1f5f9;\n  max-width: 1536px;\n  margin: 0 auto;\n  width: 100%;\n}\n.left-panel[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  flex: 0 0 380px;\n  overflow-y: auto;\n  overflow-y: hidden;\n  padding-right: 12px;\n  transition: all 0.3s;\n}\n.left-panel.full-width[_ngcontent-%COMP%] {\n  flex: 1;\n  max-width: 800px;\n  margin: 0 auto;\n}\n.right-panel[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  overflow-y: auto;\n  background: transparent;\n  position: relative;\n}\n.review-content[_ngcontent-%COMP%] {\n  flex: 1;\n  overflow-y: auto;\n  padding-right: 12px;\n}\n.app-header[_ngcontent-%COMP%] {\n  padding: 12px 0 24px 0;\n  display: flex;\n  align-items: center;\n  gap: 24px;\n}\n.logo-container[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 24px;\n}\n.wizard-header[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 8px;\n  padding: 16px 24px;\n  margin-bottom: 24px;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);\n}\n.wizard-step[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  gap: 12px;\n  cursor: pointer;\n  transition: opacity 0.2s;\n}\n.wizard-step.disabled[_ngcontent-%COMP%] {\n  opacity: 0.6;\n}\n.wizard-step-number[_ngcontent-%COMP%] {\n  background-color: #f1f5f9;\n  color: #94a3b8;\n  width: 32px;\n  height: 32px;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-weight: 600;\n  font-size: 14px;\n}\n.wizard-step-number.active[_ngcontent-%COMP%] {\n  background-color: #f26d21;\n  color: #ffffff;\n}\n.wizard-step-title[_ngcontent-%COMP%] {\n  font-weight: 500;\n  color: #94a3b8;\n  font-size: 15px;\n}\n.wizard-step-title.active[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: #1a2b4c;\n}\n.wizard-step-divider[_ngcontent-%COMP%] {\n  height: 1px;\n  width: 64px;\n  background-color: #e2e8f0;\n  margin: 0 8px;\n}\n.hidden[_ngcontent-%COMP%] {\n  display: none !important;\n}\n.layout-container[_ngcontent-%COMP%] {\n  width: 100%;\n  margin: 0 auto;\n  height: 100vh;\n  display: flex;\n  flex-direction: column;\n  overflow: hidden;\n  background-color: #f1f5f9;\n}\n.header-title[_ngcontent-%COMP%] {\n  font-size: 20px;\n  font-weight: 700;\n  color: #1a2b4c;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.panel-disabled[_ngcontent-%COMP%] {\n  opacity: 0.5;\n  pointer-events: none;\n  filter: grayscale(100%);\n  transition: all 0.3s ease;\n}\n/*# sourceMappingURL=mbl-flow.component.css.map */", "\n.primary-btn[_ngcontent-%COMP%]:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n/*# sourceMappingURL=invoice-flow.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(InvoiceFlowComponent, [{
    type: Component,
    args: [{ selector: "app-invoice-flow", standalone: true, imports: [CommonModule, FormsModule, RouterModule, UploaderComponent, WifiLoaderComponent], template: `
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
  `, changeDetection: ChangeDetectionStrategy.OnPush, styles: ["/* src/app/pages/mbl-flow/mbl-flow.component.css */\n.header-logo {\n  height: 48px;\n  object-fit: contain;\n}\n.header-subtitle {\n  margin-top: 4px;\n  font-size: 14px;\n}\n.main-layout {\n  display: flex;\n  gap: 24px;\n  flex: 1;\n  overflow: hidden;\n  padding: 10px;\n  background-color: #f1f5f9;\n  max-width: 1536px;\n  margin: 0 auto;\n  width: 100%;\n}\n.left-panel {\n  display: flex;\n  flex-direction: column;\n  flex: 0 0 380px;\n  overflow-y: auto;\n  overflow-y: hidden;\n  padding-right: 12px;\n  transition: all 0.3s;\n}\n.left-panel.full-width {\n  flex: 1;\n  max-width: 800px;\n  margin: 0 auto;\n}\n.right-panel {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  overflow-y: auto;\n  background: transparent;\n  position: relative;\n}\n.review-content {\n  flex: 1;\n  overflow-y: auto;\n  padding-right: 12px;\n}\n.app-header {\n  padding: 12px 0 24px 0;\n  display: flex;\n  align-items: center;\n  gap: 24px;\n}\n.logo-container {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 24px;\n}\n.wizard-header {\n  background: white;\n  border-radius: 8px;\n  padding: 16px 24px;\n  margin-bottom: 24px;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);\n}\n.wizard-step {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  gap: 12px;\n  cursor: pointer;\n  transition: opacity 0.2s;\n}\n.wizard-step.disabled {\n  opacity: 0.6;\n}\n.wizard-step-number {\n  background-color: #f1f5f9;\n  color: #94a3b8;\n  width: 32px;\n  height: 32px;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-weight: 600;\n  font-size: 14px;\n}\n.wizard-step-number.active {\n  background-color: #f26d21;\n  color: #ffffff;\n}\n.wizard-step-title {\n  font-weight: 500;\n  color: #94a3b8;\n  font-size: 15px;\n}\n.wizard-step-title.active {\n  font-weight: 600;\n  color: #1a2b4c;\n}\n.wizard-step-divider {\n  height: 1px;\n  width: 64px;\n  background-color: #e2e8f0;\n  margin: 0 8px;\n}\n.hidden {\n  display: none !important;\n}\n.layout-container {\n  width: 100%;\n  margin: 0 auto;\n  height: 100vh;\n  display: flex;\n  flex-direction: column;\n  overflow: hidden;\n  background-color: #f1f5f9;\n}\n.header-title {\n  font-size: 20px;\n  font-weight: 700;\n  color: #1a2b4c;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.panel-disabled {\n  opacity: 0.5;\n  pointer-events: none;\n  filter: grayscale(100%);\n  transition: all 0.3s ease;\n}\n/*# sourceMappingURL=mbl-flow.component.css.map */\n", "/* angular:styles/component:css;fe1eb6551995ff16ec15b25c30ff99ab6a3f3b50c0a49588c607e8d1779e6ffe;C:/Users/VenkataSai-I/Desktop/doc_proc/frontend/avito-fe/src/app/pages/invoice-flow/invoice-flow.component.ts */\n.primary-btn:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n/*# sourceMappingURL=invoice-flow.component.css.map */\n"] }]
  }], () => [{ type: ToastService }, { type: DocumentExtractionService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(InvoiceFlowComponent, { className: "InvoiceFlowComponent", filePath: "src/app/pages/invoice-flow/invoice-flow.component.ts", lineNumber: 99 });
})();
export {
  InvoiceFlowComponent
};
//# debugId=570e8743-dcd0-551a-9d76-49d6e52da349
//# sourceMappingURL=chunk-RCMU2P75.js.map
