import {
  Injectable,
  setClassMetadata,
  signal,
  ɵɵdefineInjectable
} from "./chunk-YEYBPR5L.js";

// src/app/core/services/toast.service.ts
var ToastService = class _ToastService {
  toasts = signal(
    [],
    ...ngDevMode ? [{ debugName: "toasts" }] : (
      /* istanbul ignore next */
      []
    )
  );
  idCounter = 0;
  show(message, type = "info") {
    const id = this.idCounter++;
    const toast = { id, message, type };
    this.toasts.update((t) => [...t, toast]);
    setTimeout(() => {
      this.remove(id);
    }, 3e3);
  }
  remove(id) {
    this.toasts.update((t) => t.filter((toast) => toast.id !== id));
  }
  static \u0275fac = function ToastService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ToastService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ToastService, factory: _ToastService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ToastService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();

export {
  ToastService
};
//# debugId=1e95bcc1-0772-5a01-b769-825579db7ab3
//# sourceMappingURL=chunk-VY4JNFW2.js.map
