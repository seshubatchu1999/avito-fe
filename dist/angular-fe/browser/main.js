import {
  WorkflowStateService
} from "./chunk-LCHLSDMN.js";
import {
  RouterOutlet,
  provideRouter
} from "./chunk-2II2K2OC.js";
import {
  ToastService
} from "./chunk-VY4JNFW2.js";
import {
  CommonModule,
  Component,
  NgClass,
  bootstrapApplication,
  provideBrowserGlobalErrorListeners,
  provideHttpClient,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-YEYBPR5L.js";

// src/app/app.routes.ts
var routes = [
  {
    path: "",
    loadComponent: () => import("./chunk-BPOTYFCF.js").then((m) => m.HomeComponent)
  },
  {
    path: "mbl-processing",
    // Scoped to this route so a fresh instance is created on every visit. The service is
    // otherwise a root singleton, which made this page accumulate packing lists from
    // earlier visits and share them with the other workflows.
    providers: [WorkflowStateService],
    loadComponent: () => import("./chunk-IHCRINXJ.js").then((m) => m.MblFlowComponent)
  },
  {
    path: "invoice-processing",
    loadComponent: () => import("./chunk-RCMU2P75.js").then((m) => m.InvoiceFlowComponent)
  },
  {
    path: "**",
    redirectTo: ""
  }
];

// src/app/app.config.ts
var appConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes),
    provideHttpClient()
  ]
};

// src/app/shared/components/toast/toast.component.ts
var _forTrack0 = ($index, $item) => $item.id;
function ToastComponent_For_2_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 3);
    \u0275\u0275element(1, "path", 7);
    \u0275\u0275elementEnd();
  }
}
function ToastComponent_For_2_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 3);
    \u0275\u0275element(1, "path", 6);
    \u0275\u0275elementEnd();
  }
}
function ToastComponent_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 1)(1, "div", 2);
    \u0275\u0275conditionalCreate(2, ToastComponent_For_2_Conditional_2_Template, 2, 0, ":svg:svg", 3);
    \u0275\u0275conditionalCreate(3, ToastComponent_For_2_Conditional_3_Template, 2, 0, ":svg:svg", 3);
    \u0275\u0275elementStart(4, "span");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "button", 4);
    \u0275\u0275listener("click", function ToastComponent_For_2_Template_button_click_6_listener() {
      const toast_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.close(toast_r2.id));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(7, "svg", 5);
    \u0275\u0275element(8, "path", 6);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const toast_r2 = ctx.$implicit;
    \u0275\u0275property("ngClass", toast_r2.type);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(toast_r2.type === "success" ? 2 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(toast_r2.type === "error" ? 3 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(toast_r2.message);
  }
}
var ToastComponent = class _ToastComponent {
  constructor(toastService) {
    this.toastService = toastService;
  }
  toastService;
  close(id) {
    this.toastService.remove(id);
  }
  static \u0275fac = function ToastComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ToastComponent)(\u0275\u0275directiveInject(ToastService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ToastComponent, selectors: [["app-toast"]], decls: 3, vars: 0, consts: [[1, "toast-container"], [1, "toast-item", 3, "ngClass"], [1, "toast-content"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "toast-icon"], [1, "toast-close", 3, "click"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "toast-close-icon"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M6 18L18 6M6 6l12 12"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M5 13l4 4L19 7"]], template: function ToastComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0);
      \u0275\u0275repeaterCreate(1, ToastComponent_For_2_Template, 9, 4, "div", 1, _forTrack0);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance();
      \u0275\u0275repeater(ctx.toastService.toasts());
    }
  }, dependencies: [CommonModule, NgClass], styles: ["\n.toast-container[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 24px;\n  right: 24px;\n  z-index: 999999;\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n}\n.toast-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  min-width: 300px;\n  max-width: 450px;\n  padding: 16px;\n  border-radius: 8px;\n  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);\n  animation: _ngcontent-%COMP%_slideIn 0.3s ease-out forwards;\n}\n.toast-content[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  font-weight: 500;\n  font-size: 15px;\n}\n.toast-icon[_ngcontent-%COMP%] {\n  width: 20px;\n  height: 20px;\n  margin-right: 8px;\n}\n.toast-close[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  cursor: pointer;\n  margin-left: 16px;\n  opacity: 0.7;\n  display: flex;\n  align-items: center;\n  padding: 4px;\n}\n.toast-close[_ngcontent-%COMP%]:hover {\n  opacity: 1;\n}\n.toast-close-icon[_ngcontent-%COMP%] {\n  width: 16px;\n  height: 16px;\n}\n.success[_ngcontent-%COMP%] {\n  background-color: #f0fdf4;\n  color: #15803d;\n  border: 1px solid #bbf7d0;\n}\n.success[_ngcontent-%COMP%]   .toast-close[_ngcontent-%COMP%] {\n  color: #15803d;\n}\n.error[_ngcontent-%COMP%] {\n  background-color: #fef2f2;\n  color: #dc2626;\n  border: 1px solid #fecaca;\n}\n.error[_ngcontent-%COMP%]   .toast-close[_ngcontent-%COMP%] {\n  color: #dc2626;\n}\n.info[_ngcontent-%COMP%] {\n  background-color: #eff6ff;\n  color: #1d4ed8;\n  border: 1px solid #bfdbfe;\n}\n.info[_ngcontent-%COMP%]   .toast-close[_ngcontent-%COMP%] {\n  color: #1d4ed8;\n}\n@keyframes _ngcontent-%COMP%_slideIn {\n  from {\n    transform: translateX(100%);\n    opacity: 0;\n  }\n  to {\n    transform: translateX(0);\n    opacity: 1;\n  }\n}\n/*# sourceMappingURL=toast.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ToastComponent, [{
    type: Component,
    args: [{ selector: "app-toast", standalone: true, imports: [CommonModule], template: `<div class="toast-container">\r
      @for (toast of toastService.toasts(); track toast.id) {\r
        <div class="toast-item" [ngClass]="toast.type">\r
          <div class="toast-content">\r
            @if (toast.type === 'success') {\r
              <svg class="toast-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>\r
            }\r
            @if (toast.type === 'error') {\r
              <svg class="toast-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>\r
            }\r
            <span>{{ toast.message }}</span>\r
          </div>\r
          <button class="toast-close" (click)="close(toast.id)">\r
            <svg class="toast-close-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>\r
          </button>\r
        </div>\r
      }\r
    </div>`, styles: ["/* src/app/shared/components/toast/toast.component.css */\n.toast-container {\n  position: fixed;\n  top: 24px;\n  right: 24px;\n  z-index: 999999;\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n}\n.toast-item {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  min-width: 300px;\n  max-width: 450px;\n  padding: 16px;\n  border-radius: 8px;\n  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);\n  animation: slideIn 0.3s ease-out forwards;\n}\n.toast-content {\n  display: flex;\n  align-items: center;\n  font-weight: 500;\n  font-size: 15px;\n}\n.toast-icon {\n  width: 20px;\n  height: 20px;\n  margin-right: 8px;\n}\n.toast-close {\n  background: none;\n  border: none;\n  cursor: pointer;\n  margin-left: 16px;\n  opacity: 0.7;\n  display: flex;\n  align-items: center;\n  padding: 4px;\n}\n.toast-close:hover {\n  opacity: 1;\n}\n.toast-close-icon {\n  width: 16px;\n  height: 16px;\n}\n.success {\n  background-color: #f0fdf4;\n  color: #15803d;\n  border: 1px solid #bbf7d0;\n}\n.success .toast-close {\n  color: #15803d;\n}\n.error {\n  background-color: #fef2f2;\n  color: #dc2626;\n  border: 1px solid #fecaca;\n}\n.error .toast-close {\n  color: #dc2626;\n}\n.info {\n  background-color: #eff6ff;\n  color: #1d4ed8;\n  border: 1px solid #bfdbfe;\n}\n.info .toast-close {\n  color: #1d4ed8;\n}\n@keyframes slideIn {\n  from {\n    transform: translateX(100%);\n    opacity: 0;\n  }\n  to {\n    transform: translateX(0);\n    opacity: 1;\n  }\n}\n/*# sourceMappingURL=toast.component.css.map */\n"] }]
  }], () => [{ type: ToastService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ToastComponent, { className: "ToastComponent", filePath: "src/app/shared/components/toast/toast.component.ts", lineNumber: 12 });
})();

// src/app/app.component.ts
var AppComponent = class _AppComponent {
  static \u0275fac = function AppComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AppComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AppComponent, selectors: [["app-root"]], decls: 6, vars: 0, consts: [[2, "position", "fixed", "bottom", "24px", "right", "24px", "text-align", "right", "z-index", "1000", "pointer-events", "none"], [2, "display", "block", "font-size", "0.75rem", "color", "#64748b", "margin-bottom", "4px", "font-weight", "500"], ["src", "https://logisticsstudio.com/wp-content/uploads/2024/04/Logistics-Studio-logo_hd-1-250x88.png", "alt", "Logistics Studio", 2, "height", "45px", "opacity", "0.85"]], template: function AppComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275element(0, "app-toast")(1, "router-outlet");
      \u0275\u0275elementStart(2, "div", 0)(3, "span", 1);
      \u0275\u0275text(4, "Powered by");
      \u0275\u0275elementEnd();
      \u0275\u0275element(5, "img", 2);
      \u0275\u0275elementEnd();
    }
  }, dependencies: [RouterOutlet, ToastComponent], styles: ["\n.header-logo[_ngcontent-%COMP%] {\n  height: 48px;\n  object-fit: contain;\n}\n.header-subtitle[_ngcontent-%COMP%] {\n  margin-top: 4px;\n  font-size: 14px;\n}\n.main-layout[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 24px;\n  flex: 1;\n  overflow: hidden;\n  padding: 10px;\n  background-color: #f1f5f9;\n  max-width: 1536px;\n  margin: 0 auto;\n  width: 100%;\n}\n.left-panel[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  flex: 0 0 380px;\n  overflow-y: auto;\n  overflow-y: hidden;\n  padding-right: 12px;\n  transition: all 0.3s;\n}\n.left-panel.full-width[_ngcontent-%COMP%] {\n  flex: 1;\n  max-width: 800px;\n  margin: 0 auto;\n}\n.right-panel[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  overflow-y: auto;\n  background: transparent;\n  position: relative;\n}\n.review-content[_ngcontent-%COMP%] {\n  flex: 1;\n  overflow-y: auto;\n  padding-right: 12px;\n}\n.app-header[_ngcontent-%COMP%] {\n  padding: 12px 0 24px 0;\n  display: flex;\n  align-items: center;\n  gap: 24px;\n}\n.logo-container[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 24px;\n}\n.wizard-header[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 8px;\n  padding: 16px 24px;\n  margin-bottom: 24px;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);\n}\n.wizard-step[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  gap: 12px;\n  cursor: pointer;\n  transition: opacity 0.2s;\n}\n.wizard-step.disabled[_ngcontent-%COMP%] {\n  opacity: 0.6;\n}\n.wizard-step-number[_ngcontent-%COMP%] {\n  background-color: #f1f5f9;\n  color: #94a3b8;\n  width: 32px;\n  height: 32px;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-weight: 600;\n  font-size: 14px;\n}\n.wizard-step-number.active[_ngcontent-%COMP%] {\n  background-color: #f26d21;\n  color: #ffffff;\n}\n.wizard-step-title[_ngcontent-%COMP%] {\n  font-weight: 500;\n  color: #94a3b8;\n  font-size: 15px;\n}\n.wizard-step-title.active[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: #1a2b4c;\n}\n.wizard-step-divider[_ngcontent-%COMP%] {\n  height: 1px;\n  width: 64px;\n  background-color: #e2e8f0;\n  margin: 0 8px;\n}\n.hidden[_ngcontent-%COMP%] {\n  display: none !important;\n}\n.layout-container[_ngcontent-%COMP%] {\n  width: 100%;\n  margin: 0 auto;\n  height: 100vh;\n  display: flex;\n  flex-direction: column;\n  overflow: hidden;\n  background-color: #f1f5f9;\n}\n.header-title[_ngcontent-%COMP%] {\n  font-size: 20px;\n  font-weight: 700;\n  color: #1a2b4c;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.panel-disabled[_ngcontent-%COMP%] {\n  opacity: 0.5;\n  pointer-events: none;\n  filter: grayscale(100%);\n  transition: all 0.3s ease;\n}\n/*# sourceMappingURL=app.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AppComponent, [{
    type: Component,
    args: [{ selector: "app-root", standalone: true, imports: [RouterOutlet, ToastComponent], template: `
    <app-toast></app-toast>
    <router-outlet></router-outlet>
    
    <!-- Global Powered By Logo -->
    <div style="position: fixed; bottom: 24px; right: 24px; text-align: right; z-index: 1000; pointer-events: none;">
      <span style="display: block; font-size: 0.75rem; color: #64748b; margin-bottom: 4px; font-weight: 500;">Powered by</span>
      <img src="https://logisticsstudio.com/wp-content/uploads/2024/04/Logistics-Studio-logo_hd-1-250x88.png" alt="Logistics Studio" style="height: 45px; opacity: 0.85;" />
    </div>
  `, styles: ["/* src/app/app.component.css */\n.header-logo {\n  height: 48px;\n  object-fit: contain;\n}\n.header-subtitle {\n  margin-top: 4px;\n  font-size: 14px;\n}\n.main-layout {\n  display: flex;\n  gap: 24px;\n  flex: 1;\n  overflow: hidden;\n  padding: 10px;\n  background-color: #f1f5f9;\n  max-width: 1536px;\n  margin: 0 auto;\n  width: 100%;\n}\n.left-panel {\n  display: flex;\n  flex-direction: column;\n  flex: 0 0 380px;\n  overflow-y: auto;\n  overflow-y: hidden;\n  padding-right: 12px;\n  transition: all 0.3s;\n}\n.left-panel.full-width {\n  flex: 1;\n  max-width: 800px;\n  margin: 0 auto;\n}\n.right-panel {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  overflow-y: auto;\n  background: transparent;\n  position: relative;\n}\n.review-content {\n  flex: 1;\n  overflow-y: auto;\n  padding-right: 12px;\n}\n.app-header {\n  padding: 12px 0 24px 0;\n  display: flex;\n  align-items: center;\n  gap: 24px;\n}\n.logo-container {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 24px;\n}\n.wizard-header {\n  background: white;\n  border-radius: 8px;\n  padding: 16px 24px;\n  margin-bottom: 24px;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);\n}\n.wizard-step {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  gap: 12px;\n  cursor: pointer;\n  transition: opacity 0.2s;\n}\n.wizard-step.disabled {\n  opacity: 0.6;\n}\n.wizard-step-number {\n  background-color: #f1f5f9;\n  color: #94a3b8;\n  width: 32px;\n  height: 32px;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-weight: 600;\n  font-size: 14px;\n}\n.wizard-step-number.active {\n  background-color: #f26d21;\n  color: #ffffff;\n}\n.wizard-step-title {\n  font-weight: 500;\n  color: #94a3b8;\n  font-size: 15px;\n}\n.wizard-step-title.active {\n  font-weight: 600;\n  color: #1a2b4c;\n}\n.wizard-step-divider {\n  height: 1px;\n  width: 64px;\n  background-color: #e2e8f0;\n  margin: 0 8px;\n}\n.hidden {\n  display: none !important;\n}\n.layout-container {\n  width: 100%;\n  margin: 0 auto;\n  height: 100vh;\n  display: flex;\n  flex-direction: column;\n  overflow: hidden;\n  background-color: #f1f5f9;\n}\n.header-title {\n  font-size: 20px;\n  font-weight: 700;\n  color: #1a2b4c;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.panel-disabled {\n  opacity: 0.5;\n  pointer-events: none;\n  filter: grayscale(100%);\n  transition: all 0.3s ease;\n}\n/*# sourceMappingURL=app.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AppComponent, { className: "AppComponent", filePath: "src/app/app.component.ts", lineNumber: 21 });
})();

// src/main.ts
bootstrapApplication(AppComponent, appConfig).catch((err) => console.error(err));
//# debugId=8b11e0c3-c72c-52aa-a97c-9b6f32620964
//# sourceMappingURL=main.js.map
