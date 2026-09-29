import {
  CommonModule,
  Component,
  DomSanitizer,
  EventEmitter,
  Input,
  Output,
  inject,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵdomElement,
  ɵɵdomElementEnd,
  ɵɵdomElementStart,
  ɵɵdomListener,
  ɵɵdomProperty,
  ɵɵgetCurrentView,
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeResourceUrl,
  ɵɵsanitizeUrl,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-YEYBPR5L.js";

// src/app/shared/components/document-modal/document-modal.component.ts
function DocumentModalComponent_Conditional_0_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "object", 9)(1, "p");
    \u0275\u0275text(2, "It appears you don't have a PDF plugin for this browser. ");
    \u0275\u0275domElementStart(3, "a", 11);
    \u0275\u0275text(4, "Click here to download the PDF file.");
    \u0275\u0275domElementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275domProperty("data", ctx_r1.safeUrl, \u0275\u0275sanitizeResourceUrl);
    \u0275\u0275advance(3);
    \u0275\u0275domProperty("href", ctx_r1.safeUrl, \u0275\u0275sanitizeUrl);
  }
}
function DocumentModalComponent_Conditional_0_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElement(0, "img", 10);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275domProperty("src", ctx_r1.safeUrl, \u0275\u0275sanitizeUrl);
  }
}
function DocumentModalComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275domElementStart(0, "div", 1);
    \u0275\u0275domListener("click", function DocumentModalComponent_Conditional_0_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.close());
    });
    \u0275\u0275domElementStart(1, "div", 2);
    \u0275\u0275domListener("click", function DocumentModalComponent_Conditional_0_Template_div_click_1_listener($event) {
      return $event.stopPropagation();
    });
    \u0275\u0275domElementStart(2, "div", 3)(3, "h3", 4);
    \u0275\u0275text(4);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(5, "button", 5);
    \u0275\u0275domListener("click", function DocumentModalComponent_Conditional_0_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.close());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275domElementStart(6, "svg", 6);
    \u0275\u0275domElement(7, "path", 7);
    \u0275\u0275domElementEnd()()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275domElementStart(8, "div", 8);
    \u0275\u0275conditionalCreate(9, DocumentModalComponent_Conditional_0_Conditional_9_Template, 5, 2, "object", 9)(10, DocumentModalComponent_Conditional_0_Conditional_10_Template, 1, 1, "img", 10);
    \u0275\u0275domElementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.title);
    \u0275\u0275advance(5);
    \u0275\u0275conditional(ctx_r1.mimeType === "application/pdf" ? 9 : 10);
  }
}
var DocumentModalComponent = class _DocumentModalComponent {
  sanitizer = inject(DomSanitizer);
  isOpen = false;
  title = "Document Preview";
  set documentUrl(url) {
    this.safeUrl = this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
  mimeType = "application/pdf";
  closed = new EventEmitter();
  safeUrl = null;
  close() {
    this.isOpen = false;
    this.closed.emit();
  }
  static \u0275fac = function DocumentModalComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _DocumentModalComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DocumentModalComponent, selectors: [["app-document-modal"]], inputs: { isOpen: "isOpen", title: "title", documentUrl: "documentUrl", mimeType: "mimeType" }, outputs: { closed: "closed" }, decls: 1, vars: 1, consts: [[1, "modal-overlay"], [1, "modal-overlay", 3, "click"], [1, "modal-content", 3, "click"], [1, "modal-header"], [1, "modal-title"], [1, "modal-close-btn", 3, "click"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "icon-lg"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M6 18L18 6M6 6l12 12"], [1, "modal-body"], ["type", "application/pdf", 1, "doc-object", 3, "data"], ["alt", "Document Preview", 1, "doc-img", 3, "src"], [3, "href"]], template: function DocumentModalComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275conditionalCreate(0, DocumentModalComponent_Conditional_0_Template, 11, 2, "div", 0);
    }
    if (rf & 2) {
      \u0275\u0275conditional(ctx.isOpen ? 0 : -1);
    }
  }, dependencies: [CommonModule], styles: ["\n.modal-title[_ngcontent-%COMP%] {\n  font-size: 20px;\n  font-weight: 600;\n  color: #1a2b4c;\n}\n.icon-lg[_ngcontent-%COMP%] {\n  width: 24px;\n  height: 24px;\n}\n.doc-object[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  border: 1px solid #e2e8f0;\n  border-radius: 4px;\n}\n.doc-img[_ngcontent-%COMP%] {\n  max-width: 100%;\n  object-fit: contain;\n  border: 1px solid #e2e8f0;\n}\n/*# sourceMappingURL=document-modal.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DocumentModalComponent, [{
    type: Component,
    args: [{ selector: "app-document-modal", standalone: true, imports: [CommonModule], template: `@if (isOpen) {\r
  <div class="modal-overlay" (click)="close()">\r
    <div class="modal-content" (click)="$event.stopPropagation()">\r
      <!-- Header -->\r
      <div class="modal-header">\r
        <h3 class="modal-title">{{ title }}</h3>\r
        <button (click)="close()" class="modal-close-btn">\r
          <svg class="icon-lg" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>\r
        </button>\r
      </div>\r
      <!-- Body -->\r
      <div class="modal-body">\r
        @if (mimeType === 'application/pdf') {\r
          <object [data]="safeUrl" type="application/pdf" class="doc-object">\r
            <p>It appears you don't have a PDF plugin for this browser. <a [href]="safeUrl">Click here to download the PDF file.</a></p>\r
          </object>\r
        } @else {\r
          <img [src]="safeUrl" class="doc-img" alt="Document Preview"/>\r
        }\r
      </div>\r
    </div>\r
  </div>\r
}`, styles: ["/* src/app/shared/components/document-modal/document-modal.component.css */\n.modal-title {\n  font-size: 20px;\n  font-weight: 600;\n  color: #1a2b4c;\n}\n.icon-lg {\n  width: 24px;\n  height: 24px;\n}\n.doc-object {\n  width: 100%;\n  height: 100%;\n  border: 1px solid #e2e8f0;\n  border-radius: 4px;\n}\n.doc-img {\n  max-width: 100%;\n  object-fit: contain;\n  border: 1px solid #e2e8f0;\n}\n/*# sourceMappingURL=document-modal.component.css.map */\n"] }]
  }], null, { isOpen: [{
    type: Input
  }], title: [{
    type: Input
  }], documentUrl: [{
    type: Input
  }], mimeType: [{
    type: Input
  }], closed: [{
    type: Output
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DocumentModalComponent, { className: "DocumentModalComponent", filePath: "src/app/shared/components/document-modal/document-modal.component.ts", lineNumber: 13 });
})();

export {
  DocumentModalComponent
};
//# debugId=8a930f40-88fd-5c71-a8c2-7eba94b0a361
//# sourceMappingURL=chunk-LE65J6VZ.js.map
