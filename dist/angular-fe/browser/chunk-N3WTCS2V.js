import {
  ToastService
} from "./chunk-VY4JNFW2.js";
import {
  CommonModule,
  Component,
  EventEmitter,
  HttpClient,
  Injectable,
  Input,
  Output,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵdirectiveInject,
  ɵɵdomElement,
  ɵɵdomElementEnd,
  ɵɵdomElementStart,
  ɵɵdomListener,
  ɵɵgetCurrentView,
  ɵɵinject,
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵreference,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIndex,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-YEYBPR5L.js";

// src/app/features/logistics/components/uploader/uploader.component.ts
function UploaderComponent_Conditional_18_For_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275domElementStart(0, "div", 17)(1, "div", 20)(2, "div", 21);
    \u0275\u0275namespaceSVG();
    \u0275\u0275domElementStart(3, "svg", 11);
    \u0275\u0275domElement(4, "path", 22);
    \u0275\u0275domElementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275domElementStart(5, "div", 23)(6, "div", 24);
    \u0275\u0275text(7);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(8, "div", 25);
    \u0275\u0275text(9);
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(10, "button", 26);
    \u0275\u0275domListener("click", function UploaderComponent_Conditional_18_For_10_Template_button_click_10_listener() {
      const \u0275$index_47_r6 = \u0275\u0275restoreView(_r5).$index;
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.removeFile(\u0275$index_47_r6));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275domElementStart(11, "svg", 11);
    \u0275\u0275domElement(12, "path", 27);
    \u0275\u0275domElementEnd()()()();
  }
  if (rf & 2) {
    const file_r7 = ctx.$implicit;
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(file_r7.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r3.formatSize(file_r7.size));
  }
}
function UploaderComponent_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275domElementStart(0, "div")(1, "div", 12)(2, "div", 13);
    \u0275\u0275text(3, " Upload Progress ");
    \u0275\u0275domElementStart(4, "span", 14);
    \u0275\u0275text(5);
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(6, "button", 15);
    \u0275\u0275domListener("click", function UploaderComponent_Conditional_18_Template_button_click_6_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.clearAll());
    });
    \u0275\u0275text(7, "Clear all");
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(8, "div", 16);
    \u0275\u0275repeaterCreate(9, UploaderComponent_Conditional_18_For_10_Template, 13, 2, "div", 17, \u0275\u0275repeaterTrackByIndex);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(11, "div", 18)(12, "button", 19);
    \u0275\u0275domListener("click", function UploaderComponent_Conditional_18_Template_button_click_12_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.extract());
    });
    \u0275\u0275text(13);
    \u0275\u0275domElementEnd()()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("Completed: ", ctx_r3.selectedFiles.length);
    \u0275\u0275advance(4);
    \u0275\u0275repeater(ctx_r3.selectedFiles);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r3.buttonText);
  }
}
var UploaderComponent = class _UploaderComponent {
  constructor(toast) {
    this.toast = toast;
  }
  toast;
  buttonText = "Extract Packing Lists";
  filesSelected = new EventEmitter();
  isDragging = false;
  selectedFiles = [];
  onDragOver(event) {
    event.preventDefault();
    this.isDragging = true;
  }
  onDragLeave(event) {
    event.preventDefault();
    this.isDragging = false;
  }
  onDrop(event) {
    event.preventDefault();
    this.isDragging = false;
    if (event.dataTransfer?.files) {
      this.addFiles(Array.from(event.dataTransfer.files));
    }
  }
  onFileSelected(event) {
    const input = event.target;
    if (input.files) {
      this.addFiles(Array.from(input.files));
    }
    input.value = "";
  }
  addFiles(files) {
    const existingNames = new Set(this.selectedFiles.map((f) => f.name));
    const newFiles = files.filter((f) => !existingNames.has(f.name));
    if (newFiles.length < files.length) {
      this.toast.show("Skipped duplicate files with the same name.", "info");
    }
    if (newFiles.length > 0) {
      this.selectedFiles = [...this.selectedFiles, ...newFiles];
    }
  }
  removeFile(index) {
    this.selectedFiles.splice(index, 1);
  }
  clearAll() {
    this.selectedFiles = [];
  }
  extract() {
    if (this.selectedFiles.length > 0) {
      this.filesSelected.emit([...this.selectedFiles]);
      console.log(this.selectedFiles);
    }
  }
  formatSize(bytes) {
    if (bytes === 0)
      return "0 Bytes";
    const k = 1024;
    const sizes = ["Bytes", "KB", "MB", "GB"];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + " " + sizes[i];
  }
  static \u0275fac = function UploaderComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _UploaderComponent)(\u0275\u0275directiveInject(ToastService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _UploaderComponent, selectors: [["app-uploader"]], inputs: { buttonText: "buttonText" }, outputs: { filesSelected: "filesSelected" }, decls: 19, vars: 3, consts: [["fileInput", ""], [1, "uploader-card"], [1, "uploader-box", 3, "click", "dragover", "drop", "dragleave"], ["type", "file", "multiple", "", "accept", "application/pdf,image/png,image/jpeg", 1, "file-input-hidden", 3, "change"], [1, "icon-circle"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "icon-md"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"], [1, "uploader-title"], [1, "uploader-subtitle"], [1, "uploader-hint"], [1, "btn-primary", "btn-with-icon", 3, "click"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "icon-sm"], [1, "upload-progress-header"], [1, "upload-progress-title"], [1, "badge-orange"], [1, "btn-outline", 3, "click"], [1, "file-list-container"], [1, "file-list-item"], [1, "extract-action-row"], [1, "btn-primary", 3, "click"], [1, "file-row"], [1, "file-icon-box"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"], [1, "file-info"], [1, "file-name"], [1, "file-size"], [1, "file-remove-btn", 3, "click"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M6 18L18 6M6 6l12 12"]], template: function UploaderComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275domElementStart(0, "div", 1)(1, "div", 2);
      \u0275\u0275domListener("click", function UploaderComponent_Template_div_click_1_listener() {
        \u0275\u0275restoreView(_r1);
        const fileInput_r2 = \u0275\u0275reference(3);
        return \u0275\u0275resetView(fileInput_r2.click());
      })("dragover", function UploaderComponent_Template_div_dragover_1_listener($event) {
        return ctx.onDragOver($event);
      })("drop", function UploaderComponent_Template_div_drop_1_listener($event) {
        return ctx.onDrop($event);
      })("dragleave", function UploaderComponent_Template_div_dragleave_1_listener($event) {
        return ctx.onDragLeave($event);
      });
      \u0275\u0275domElementStart(2, "input", 3, 0);
      \u0275\u0275domListener("change", function UploaderComponent_Template_input_change_2_listener($event) {
        return ctx.onFileSelected($event);
      });
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(4, "div", 4);
      \u0275\u0275namespaceSVG();
      \u0275\u0275domElementStart(5, "svg", 5);
      \u0275\u0275domElement(6, "path", 6);
      \u0275\u0275domElementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275domElementStart(7, "h3", 7);
      \u0275\u0275text(8, "Upload your files");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(9, "p", 8);
      \u0275\u0275text(10, "Drag and drop files here or click to browse");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(11, "p", 9);
      \u0275\u0275text(12, "Support for multiple file types up to 10MB each");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(13, "button", 10);
      \u0275\u0275domListener("click", function UploaderComponent_Template_button_click_13_listener($event) {
        \u0275\u0275restoreView(_r1);
        const fileInput_r2 = \u0275\u0275reference(3);
        fileInput_r2.click();
        return \u0275\u0275resetView($event.stopPropagation());
      });
      \u0275\u0275domElementStart(14, "span");
      \u0275\u0275namespaceSVG();
      \u0275\u0275domElementStart(15, "svg", 11);
      \u0275\u0275domElement(16, "path", 6);
      \u0275\u0275domElementEnd();
      \u0275\u0275text(17, " Select files ");
      \u0275\u0275domElementEnd()()();
      \u0275\u0275conditionalCreate(18, UploaderComponent_Conditional_18_Template, 14, 2, "div");
      \u0275\u0275domElementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance();
      \u0275\u0275classProp("dragging", ctx.isDragging);
      \u0275\u0275advance(17);
      \u0275\u0275conditional(ctx.selectedFiles.length > 0 ? 18 : -1);
    }
  }, dependencies: [CommonModule], styles: ["\n.file-input-hidden[_ngcontent-%COMP%] {\n  display: none;\n}\n.icon-md[_ngcontent-%COMP%] {\n  width: 20px;\n  height: 20px;\n}\n.icon-sm[_ngcontent-%COMP%] {\n  width: 16px;\n  height: 16px;\n}\n.uploader-title[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 700;\n  color: #1e293b;\n  margin-bottom: 4px;\n}\n.uploader-subtitle[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: #64748b;\n  margin-bottom: 4px;\n}\n.uploader-hint[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #94a3b8;\n  margin-bottom: 12px;\n}\n.btn-with-icon[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 4px;\n}\n.file-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  width: 100%;\n}\n.extract-action-row[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  margin-top: 12px;\n}\n.file-list-container[_ngcontent-%COMP%] {\n  max-height: 200px;\n  overflow-y: auto;\n  padding-right: 8px;\n}\n/*# sourceMappingURL=uploader.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UploaderComponent, [{
    type: Component,
    args: [{ selector: "app-uploader", standalone: true, imports: [CommonModule], template: '<div class="uploader-card">\r\n      <div \r\n        class="uploader-box"\r\n        (click)="fileInput.click()"\r\n        (dragover)="onDragOver($event)"\r\n        (drop)="onDrop($event)"\r\n        (dragleave)="onDragLeave($event)"\r\n        [class.dragging]="isDragging"\r\n      >\r\n        <input type="file" multiple #fileInput class="file-input-hidden" (change)="onFileSelected($event)" accept="application/pdf,image/png,image/jpeg">\r\n        \r\n        <div class="icon-circle">\r\n          <svg class="icon-md" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"></path></svg>\r\n        </div>\r\n        \r\n        <h3 class="uploader-title">Upload your files</h3>\r\n        <p class="uploader-subtitle">Drag and drop files here or click to browse</p>\r\n        <p class="uploader-hint">Support for multiple file types up to 10MB each</p>\r\n        \r\n        <button class="btn-primary btn-with-icon" (click)="fileInput.click(); $event.stopPropagation()">\r\n          <span>\r\n            <svg class="icon-sm" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"></path></svg>\r\n            Select files\r\n          </span>\r\n        </button>\r\n      </div>\r\n\r\n      @if (selectedFiles.length > 0) {\r\n        <div>\r\n          <div class="upload-progress-header">\r\n            <div class="upload-progress-title">\r\n              Upload Progress\r\n              <span class="badge-orange">Completed: {{ selectedFiles.length }}</span>\r\n            </div>\r\n            <button class="btn-outline" (click)="clearAll()">Clear all</button>\r\n          </div>\r\n\r\n          <div class="file-list-container">\r\n            @for (file of selectedFiles; track i; let i = $index) {\r\n              <div class="file-list-item">\r\n                <div class="file-row">\r\n                  <div class="file-icon-box">\r\n                    <svg class="icon-sm" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg>\r\n                  </div>\r\n                  <div class="file-info">\r\n                    <div class="file-name">{{ file.name }}</div>\r\n                    <div class="file-size">{{ formatSize(file.size) }}</div>\r\n                  </div>\r\n                  <button class="file-remove-btn" (click)="removeFile(i)">\r\n                    <svg class="icon-sm" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>\r\n                  </button>\r\n                </div>\r\n              </div>\r\n            }\r\n          </div>\r\n\r\n          <div class="extract-action-row">\r\n            <button class="btn-primary" (click)="extract()">{{ buttonText }}</button>\r\n          </div>\r\n        </div>\r\n      }\r\n    </div>', styles: ["/* src/app/features/logistics/components/uploader/uploader.component.css */\n.file-input-hidden {\n  display: none;\n}\n.icon-md {\n  width: 20px;\n  height: 20px;\n}\n.icon-sm {\n  width: 16px;\n  height: 16px;\n}\n.uploader-title {\n  font-size: 16px;\n  font-weight: 700;\n  color: #1e293b;\n  margin-bottom: 4px;\n}\n.uploader-subtitle {\n  font-size: 13px;\n  color: #64748b;\n  margin-bottom: 4px;\n}\n.uploader-hint {\n  font-size: 12px;\n  color: #94a3b8;\n  margin-bottom: 12px;\n}\n.btn-with-icon span {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 4px;\n}\n.file-row {\n  display: flex;\n  align-items: center;\n  width: 100%;\n}\n.extract-action-row {\n  display: flex;\n  justify-content: flex-end;\n  margin-top: 12px;\n}\n.file-list-container {\n  max-height: 200px;\n  overflow-y: auto;\n  padding-right: 8px;\n}\n/*# sourceMappingURL=uploader.component.css.map */\n"] }]
  }], () => [{ type: ToastService }], { buttonText: [{
    type: Input
  }], filesSelected: [{
    type: Output
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(UploaderComponent, { className: "UploaderComponent", filePath: "src/app/features/logistics/components/uploader/uploader.component.ts", lineNumber: 13 });
})();

// src/environments/environment.ts
var environment = {
  production: false,
  apiBaseUrl: "http://localhost:8000"
};

// src/app/core/services/backend-api.service.ts
var BackendApiService = class _BackendApiService {
  constructor(http) {
    this.http = http;
  }
  http;
  apiUrl = environment.apiBaseUrl;
  /**
   * Uploads packing lists for extraction.
   *
   * `groupIds` is optional and positionally aligned with `files`. Documents sharing an id
   * are grouped together on the server and keep that id as their HBL group id. Pass `null`
   * (or an empty string) for a document you want the server to group by shipper and
   * consignee instead. Omit the argument entirely to keep the automatic behaviour.
   */
  uploadFiles(files, groupIds) {
    const formData = new FormData();
    files.forEach((file, index) => {
      formData.append("documents", file, file.name);
      if (groupIds && index < groupIds.length) {
        formData.append("group_ids", groupIds[index] ?? "");
      }
    });
    return this.http.post(`${this.apiUrl}/v1/extractions/batch`, formData);
  }
  generateHbl(request) {
    return this.http.post(`${this.apiUrl}/v1/hbls`, request, { responseType: "blob" });
  }
  generateHblBase64(request) {
    return this.http.post(`${this.apiUrl}/v1/hbls?include_base64=true`, request);
  }
  previewHbl(batchId, groupId) {
    return this.http.post(`${this.apiUrl}/v1/hbl/preview`, { batch_id: batchId, group_id: groupId });
  }
  generateMbl(request) {
    return this.http.post(`${this.apiUrl}/v1/mbls`, request, { responseType: "blob" });
  }
  generateMblBase64(request) {
    return this.http.post(`${this.apiUrl}/v1/mbls?include_base64=true`, request);
  }
  previewMbl(batchId) {
    return this.http.post(`${this.apiUrl}/v1/mbl/preview`, { batch_id: batchId });
  }
  reassignDocuments(batchId, sourceGroupId, targetGroupId, documentIds) {
    return this.http.post(`${this.apiUrl}/v1/hbl-groups/reassign`, {
      batch_id: batchId,
      source_group_id: sourceGroupId,
      target_group_id: targetGroupId,
      added_document_ids: documentIds
    });
  }
  generateInvoiceSheet(batchId, format = "xlsx", includeBase64 = false) {
    const url = `${this.apiUrl}/v1/invoice-sheets?format=${format}&include_base64=${includeBase64}`;
    if (includeBase64) {
      return this.http.post(url, { batch_id: batchId });
    }
    return this.http.post(url, { batch_id: batchId }, { responseType: "blob" });
  }
  checkHealth() {
    return this.http.get(`${this.apiUrl}/health`);
  }
  static \u0275fac = function BackendApiService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _BackendApiService)(\u0275\u0275inject(HttpClient));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _BackendApiService, factory: _BackendApiService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BackendApiService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{ type: HttpClient }], null);
})();

// src/app/core/services/document-extraction.service.ts
var DocumentExtractionService = class _DocumentExtractionService {
  constructor(backendApi) {
    this.backendApi = backendApi;
  }
  backendApi;
  uploadFiles(files, groupIds) {
    return this.backendApi.uploadFiles(files, groupIds);
  }
  /** The API is called without `include_base64`, so the response is the spreadsheet file itself. */
  downloadInvoiceSheet(batchId, format = "xlsx") {
    return this.backendApi.generateInvoiceSheet(batchId, format, false);
  }
  generateHbl(draft) {
    const request = {
      batch_id: draft.batch_id || "",
      group_id: draft.group_id || "",
      manual_details: draft.hbl_details
    };
    return this.backendApi.generateHbl(request);
  }
  generateHblBase64(draft) {
    const request = {
      batch_id: draft.batch_id || "",
      group_id: draft.group_id || "",
      manual_details: draft.hbl_details
    };
    return this.backendApi.generateHblBase64(request);
  }
  previewHbl(batchId, groupId) {
    return this.backendApi.previewHbl(batchId, groupId);
  }
  generateMbl(mblDetails, batchId) {
    const request = {
      batch_id: batchId,
      manual_details: mblDetails
    };
    return this.backendApi.generateMbl(request);
  }
  generateMblBase64(mblDetails, batchId) {
    const request = {
      batch_id: batchId,
      manual_details: mblDetails
    };
    return this.backendApi.generateMblBase64(request);
  }
  previewMbl(batchId) {
    return this.backendApi.previewMbl(batchId);
  }
  /**
   * Tells the server that documents moved between two of its own HBL groups, so the stored
   * batch keeps the same grouping the UI shows. Without this the server still expects an
   * HBL for the group a document was dragged out of and refuses to build the MBL.
   */
  reassignDocuments(batchId, sourceGroupId, targetGroupId, documentIds) {
    return this.backendApi.reassignDocuments(batchId, sourceGroupId, targetGroupId, documentIds);
  }
  static \u0275fac = function DocumentExtractionService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _DocumentExtractionService)(\u0275\u0275inject(BackendApiService));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _DocumentExtractionService, factory: _DocumentExtractionService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DocumentExtractionService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{ type: BackendApiService }], null);
})();

// src/app/shared/components/wifi-loader/wifi-loader.component.ts
function WifiLoaderComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 0)(1, "div", 1);
    \u0275\u0275namespaceSVG();
    \u0275\u0275domElementStart(2, "svg", 2);
    \u0275\u0275domElement(3, "circle", 3)(4, "circle", 4)(5, "circle", 5);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(6, "svg", 6);
    \u0275\u0275domElement(7, "circle", 7)(8, "circle", 8);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(9, "svg", 9);
    \u0275\u0275domElement(10, "circle", 10)(11, "circle", 11);
    \u0275\u0275domElementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275domElement(12, "div", 12);
    \u0275\u0275domElementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(12);
    \u0275\u0275attribute("data-text", ctx_r0.text);
  }
}
var WifiLoaderComponent = class _WifiLoaderComponent {
  show = false;
  text = "extracting";
  static \u0275fac = function WifiLoaderComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _WifiLoaderComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _WifiLoaderComponent, selectors: [["app-wifi-loader"]], inputs: { show: "show", text: "text" }, decls: 1, vars: 1, consts: [["id", "fullscreen-loader-overlay"], ["id", "wifi-loader"], ["viewBox", "0 0 86 86", 1, "circle-outer"], ["cx", "43", "cy", "43", "r", "40", 1, "back"], ["cx", "43", "cy", "43", "r", "40", 1, "front"], ["cx", "43", "cy", "43", "r", "40", 1, "new"], ["viewBox", "0 0 60 60", 1, "circle-middle"], ["cx", "30", "cy", "30", "r", "27", 1, "back"], ["cx", "30", "cy", "30", "r", "27", 1, "front"], ["viewBox", "0 0 34 34", 1, "circle-inner"], ["cx", "17", "cy", "17", "r", "14", 1, "back"], ["cx", "17", "cy", "17", "r", "14", 1, "front"], [1, "text"]], template: function WifiLoaderComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275conditionalCreate(0, WifiLoaderComponent_Conditional_0_Template, 13, 1, "div", 0);
    }
    if (rf & 2) {
      \u0275\u0275conditional(ctx.show ? 0 : -1);
    }
  }, dependencies: [CommonModule], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(WifiLoaderComponent, [{
    type: Component,
    args: [{ selector: "app-wifi-loader", standalone: true, imports: [CommonModule], template: '@if (show) {\r\n  <div id="fullscreen-loader-overlay">\r\n    <div id="wifi-loader">\r\n        <svg class="circle-outer" viewBox="0 0 86 86">\r\n            <circle class="back" cx="43" cy="43" r="40"></circle>\r\n            <circle class="front" cx="43" cy="43" r="40"></circle>\r\n            <circle class="new" cx="43" cy="43" r="40"></circle>\r\n        </svg>\r\n        <svg class="circle-middle" viewBox="0 0 60 60">\r\n            <circle class="back" cx="30" cy="30" r="27"></circle>\r\n            <circle class="front" cx="30" cy="30" r="27"></circle>\r\n        </svg>\r\n        <svg class="circle-inner" viewBox="0 0 34 34">\r\n            <circle class="back" cx="17" cy="17" r="14"></circle>\r\n            <circle class="front" cx="17" cy="17" r="14"></circle>\r\n        </svg>\r\n        <div class="text" [attr.data-text]="text"></div>\r\n    </div>\r\n  </div>\r\n}' }]
  }], null, { show: [{
    type: Input
  }], text: [{
    type: Input
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(WifiLoaderComponent, { className: "WifiLoaderComponent", filePath: "src/app/shared/components/wifi-loader/wifi-loader.component.ts", lineNumber: 10 });
})();

export {
  UploaderComponent,
  BackendApiService,
  DocumentExtractionService,
  WifiLoaderComponent
};
//# debugId=479a202b-f23c-53bc-aee9-ebebfe17b98b
//# sourceMappingURL=chunk-N3WTCS2V.js.map
