import {
  DocumentModalComponent
} from "./chunk-LE65J6VZ.js";
import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgControlStatusGroup,
  NgForm,
  NgModel,
  RequiredValidator,
  ɵNgNoValidate
} from "./chunk-TTGW4AYQ.js";
import {
  ToastService
} from "./chunk-VY4JNFW2.js";
import {
  ChangeDetectionStrategy,
  CommonModule,
  Component,
  EventEmitter,
  Input,
  Output,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵcontrol,
  ɵɵcontrolCreate,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-YEYBPR5L.js";

// src/app/features/logistics/components/mbl-section/mbl-section.component.ts
function MblSectionComponent_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 6)(1, "p", 8);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p", 9);
    \u0275\u0275text(4, "Final MBL number: ");
    \u0275\u0275elementStart(5, "code", 10);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "p", 11);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 12)(10, "span", 13);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "button", 14);
    \u0275\u0275listener("click", function MblSectionComponent_Conditional_5_Template_button_click_12_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.viewMbl = true);
    });
    \u0275\u0275text(13, "\u{1F441}\uFE0F");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("Final MBL generated from ", ctx_r1.mblReview.draft_ids.length, " HBL(s).");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.mblReview.mbl_number);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("Included HBLs: ", ctx_r1.getIncludedHblNumbers());
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("\u{1F4C4} ", ctx_r1.mblReview.mbl_filename);
  }
}
function MblSectionComponent_Conditional_6_Conditional_56_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 32);
    \u0275\u0275text(1, " Please complete all required MBL fields. ");
    \u0275\u0275elementEnd();
  }
}
function MblSectionComponent_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 6)(1, "p", 15);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "form", 16, 0);
    \u0275\u0275listener("ngSubmit", function MblSectionComponent_Conditional_6_Template_form_ngSubmit_3_listener() {
      \u0275\u0275restoreView(_r3);
      const mblForm_r4 = \u0275\u0275reference(4);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.saveDetails(mblForm_r4));
    });
    \u0275\u0275elementStart(5, "h4", 17);
    \u0275\u0275text(6, "MBL Details");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 18)(8, "div")(9, "label", 19);
    \u0275\u0275text(10, "MBL Number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "input", 20);
    \u0275\u0275twoWayListener("ngModelChange", function MblSectionComponent_Conditional_6_Template_input_ngModelChange_11_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.mblReview.mbl_details.mbl_number, $event) || (ctx_r1.mblReview.mbl_details.mbl_number = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "div")(13, "label", 19);
    \u0275\u0275text(14, "Carrier Booking Reference");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "input", 21);
    \u0275\u0275twoWayListener("ngModelChange", function MblSectionComponent_Conditional_6_Template_input_ngModelChange_15_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.mblReview.mbl_details.carrier_booking_reference, $event) || (ctx_r1.mblReview.mbl_details.carrier_booking_reference = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "div")(17, "label", 19);
    \u0275\u0275text(18, "Vessel Name");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "input", 22);
    \u0275\u0275twoWayListener("ngModelChange", function MblSectionComponent_Conditional_6_Template_input_ngModelChange_19_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.mblReview.mbl_details.vessel_name, $event) || (ctx_r1.mblReview.mbl_details.vessel_name = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "div")(21, "label", 19);
    \u0275\u0275text(22, "Voyage Number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "input", 23);
    \u0275\u0275twoWayListener("ngModelChange", function MblSectionComponent_Conditional_6_Template_input_ngModelChange_23_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.mblReview.mbl_details.voyage_number, $event) || (ctx_r1.mblReview.mbl_details.voyage_number = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "div")(25, "label", 19);
    \u0275\u0275text(26, "Port of Loading");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "input", 24);
    \u0275\u0275twoWayListener("ngModelChange", function MblSectionComponent_Conditional_6_Template_input_ngModelChange_27_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.mblReview.mbl_details.port_of_loading, $event) || (ctx_r1.mblReview.mbl_details.port_of_loading = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "div")(29, "label", 19);
    \u0275\u0275text(30, "Port of Discharge");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "input", 25);
    \u0275\u0275twoWayListener("ngModelChange", function MblSectionComponent_Conditional_6_Template_input_ngModelChange_31_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.mblReview.mbl_details.port_of_discharge, $event) || (ctx_r1.mblReview.mbl_details.port_of_discharge = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "div")(33, "label", 19);
    \u0275\u0275text(34, "Shipper Name *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "input", 26, 1);
    \u0275\u0275twoWayListener("ngModelChange", function MblSectionComponent_Conditional_6_Template_input_ngModelChange_35_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.mblReview.mbl_details.shipper.name, $event) || (ctx_r1.mblReview.mbl_details.shipper.name = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementStart(37, "div", 27);
    \u0275\u0275text(38, "Shipper Name is required");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(39, "div")(40, "label", 19);
    \u0275\u0275text(41, "Consignee Name *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(42, "input", 28, 2);
    \u0275\u0275twoWayListener("ngModelChange", function MblSectionComponent_Conditional_6_Template_input_ngModelChange_42_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.mblReview.mbl_details.consignee.name, $event) || (ctx_r1.mblReview.mbl_details.consignee.name = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementStart(44, "div", 27);
    \u0275\u0275text(45, "Consignee Name is required");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(46, "div")(47, "label", 19);
    \u0275\u0275text(48, "Tare Weight");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(49, "input", 29);
    \u0275\u0275twoWayListener("ngModelChange", function MblSectionComponent_Conditional_6_Template_input_ngModelChange_49_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.mblReview.mbl_details.tare_weight, $event) || (ctx_r1.mblReview.mbl_details.tare_weight = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(50, "div")(51, "label", 19);
    \u0275\u0275text(52, "Verified Gross Mass (VGM)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(53, "input", 30);
    \u0275\u0275twoWayListener("ngModelChange", function MblSectionComponent_Conditional_6_Template_input_ngModelChange_53_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.mblReview.mbl_details.verified_gross_mass, $event) || (ctx_r1.mblReview.mbl_details.verified_gross_mass = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(54, "button", 31);
    \u0275\u0275text(55, "Generate Final MBL PDF");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(56, MblSectionComponent_Conditional_6_Conditional_56_Template, 2, 0, "div", 32);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const mblForm_r4 = \u0275\u0275reference(4);
    const shipperName_r5 = \u0275\u0275reference(36);
    const consigneeName_r6 = \u0275\u0275reference(43);
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("Included HBLs: ", ctx_r1.getIncludedHblNumbers());
    \u0275\u0275advance();
    \u0275\u0275classProp("form-submitted", mblForm_r4.submitted);
    \u0275\u0275advance(8);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.mblReview.mbl_details.mbl_number);
    \u0275\u0275control();
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.mblReview.mbl_details.carrier_booking_reference);
    \u0275\u0275control();
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.mblReview.mbl_details.vessel_name);
    \u0275\u0275control();
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.mblReview.mbl_details.voyage_number);
    \u0275\u0275control();
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.mblReview.mbl_details.port_of_loading);
    \u0275\u0275control();
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.mblReview.mbl_details.port_of_discharge);
    \u0275\u0275control();
    \u0275\u0275advance(4);
    \u0275\u0275classProp("is-invalid", shipperName_r5.invalid);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.mblReview.mbl_details.shipper.name);
    \u0275\u0275control();
    \u0275\u0275advance(7);
    \u0275\u0275classProp("is-invalid", consigneeName_r6.invalid);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.mblReview.mbl_details.consignee.name);
    \u0275\u0275control();
    \u0275\u0275advance(7);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.mblReview.mbl_details.tare_weight);
    \u0275\u0275control();
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.mblReview.mbl_details.verified_gross_mass);
    \u0275\u0275control();
    \u0275\u0275advance(3);
    \u0275\u0275conditional(mblForm_r4.submitted && mblForm_r4.invalid ? 56 : -1);
  }
}
function MblSectionComponent_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-document-modal", 33);
    \u0275\u0275listener("closed", function MblSectionComponent_Conditional_7_Template_app_document_modal_closed_0_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.viewMbl = false);
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("isOpen", ctx_r1.viewMbl)("title", ctx_r1.mblReview.mbl_filename || "MBL PDF")("documentUrl", ctx_r1.mblReview.mbl_pdf);
  }
}
var MblSectionComponent = class _MblSectionComponent {
  constructor(toast) {
    this.toast = toast;
  }
  toast;
  reviews;
  mblReview;
  generateRequested = new EventEmitter();
  viewMbl = false;
  getIncludedHblNumbers() {
    const hblNumbers = this.reviews.map((r) => r.hbl_number).filter((n) => !!n);
    return Array.from(new Set(hblNumbers)).join(", ");
  }
  saveDetails(form) {
    if (form.invalid) {
      this.toast.show("Please complete all required MBL fields.", "error");
      return;
    }
    this.mblReview.details_confirmed = true;
    this.generateRequested.emit();
  }
  static \u0275fac = function MblSectionComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MblSectionComponent)(\u0275\u0275directiveInject(ToastService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _MblSectionComponent, selectors: [["app-mbl-section"]], inputs: { reviews: "reviews", mblReview: "mblReview" }, outputs: { generateRequested: "generateRequested" }, decls: 8, vars: 3, consts: [["mblForm", "ngForm"], ["shipperName", "ngModel"], ["consigneeName", "ngModel"], [1, "mt-12", "pt-8", "border-t"], [1, "mbl-title"], [1, "mbl-subtitle"], [1, "card"], ["mimeType", "application/pdf", 3, "isOpen", "title", "documentUrl"], [1, "success-text"], [1, "info-text"], [1, "code-block"], [1, "info-text-large"], [1, "doc-box", 2, "max-width", "fit-content", "gap", "16px"], [1, "doc-title", 2, "white-space", "nowrap", "overflow", "hidden", "text-overflow", "ellipsis", "max-width", "300px"], ["type", "button", "title", "View Full MBL", 2, "border", "none", "background", "transparent", "cursor", "pointer", "padding", "4px", "display", "flex", "align-items", "center", "justify-content", "center", "font-size", "16px", 3, "click"], [1, "info-text-large", "included-hbls-label"], [3, "ngSubmit"], [1, "form-section-title"], [2, "display", "grid", "grid-template-columns", "repeat(3, minmax(0, 1fr))", "gap", "32px", "margin-bottom", "32px"], [1, "form-label"], ["type", "text", "name", "mblNumber", 1, "form-input", 3, "ngModelChange", "ngModel"], ["type", "text", "name", "carrierBookingReference", 1, "form-input", 3, "ngModelChange", "ngModel"], ["type", "text", "name", "vesselName", 1, "form-input", 3, "ngModelChange", "ngModel"], ["type", "text", "name", "voyageNumber", 1, "form-input", 3, "ngModelChange", "ngModel"], ["type", "text", "name", "portOfLoading", 1, "form-input", 3, "ngModelChange", "ngModel"], ["type", "text", "name", "portOfDischarge", 1, "form-input", 3, "ngModelChange", "ngModel"], ["type", "text", "name", "shipperName", "required", "", 1, "form-input", 3, "ngModelChange", "ngModel"], [1, "error-text"], ["type", "text", "name", "consigneeName", "required", "", 1, "form-input", 3, "ngModelChange", "ngModel"], ["type", "text", "name", "tareWeight", 1, "form-input", 3, "ngModelChange", "ngModel"], ["type", "text", "name", "vgm", 1, "form-input", 3, "ngModelChange", "ngModel"], ["type", "submit", 1, "btn-primary"], [1, "alert-error", "mt-4"], ["mimeType", "application/pdf", 3, "closed", "isOpen", "title", "documentUrl"]], template: function MblSectionComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 3)(1, "h2", 4);
      \u0275\u0275text(2, "Master Bill of Lading");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(3, "p", 5);
      \u0275\u0275text(4, "This MBL includes every HBL created from the uploaded packing-list batch. Confirm the carrier booking, MBL-level parties, and VGM before generation.");
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(5, MblSectionComponent_Conditional_5_Template, 14, 4, "div", 6);
      \u0275\u0275conditionalCreate(6, MblSectionComponent_Conditional_6_Template, 57, 18, "div", 6);
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(7, MblSectionComponent_Conditional_7_Template, 1, 3, "app-document-modal", 7);
    }
    if (rf & 2) {
      \u0275\u0275advance(5);
      \u0275\u0275conditional(ctx.mblReview.mbl_pdf ? 5 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(!ctx.mblReview.mbl_pdf ? 6 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.mblReview.mbl_pdf ? 7 : -1);
    }
  }, dependencies: [CommonModule, FormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, RequiredValidator, NgModel, NgForm, DocumentModalComponent], styles: ["\n.mbl-title[_ngcontent-%COMP%] {\n  font-size: 24px;\n  font-weight: 600;\n  color: #1a2b4c;\n  margin-bottom: 8px;\n}\n.mbl-subtitle[_ngcontent-%COMP%] {\n  color: #64748b;\n  margin-bottom: 32px;\n}\n.success-text[_ngcontent-%COMP%] {\n  color: #15803d;\n  font-weight: 500;\n  margin-bottom: 8px;\n}\n.info-text[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: #64748b;\n  margin-bottom: 4px;\n}\n.info-text-large[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: #64748b;\n  margin-bottom: 24px;\n}\n.code-block[_ngcontent-%COMP%] {\n  background: #f1f5f9;\n  padding: 2px 4px;\n  border-radius: 4px;\n}\n.doc-box[_ngcontent-%COMP%] {\n  border: 1px solid #e2e8f0;\n  border-radius: 8px;\n  padding: 16px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  background: #f8fafc;\n  margin-bottom: 16px;\n}\n.doc-title[_ngcontent-%COMP%] {\n  font-weight: 500;\n  color: #334155;\n}\n.form-section-title[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: #1a2b4c;\n  margin-bottom: 16px;\n  padding-bottom: 8px;\n  border-bottom: 1px solid #e2e8f0;\n}\n.included-hbls-label[_ngcontent-%COMP%] {\n  font-weight: 500;\n}\n/*# sourceMappingURL=mbl-section.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MblSectionComponent, [{
    type: Component,
    args: [{ selector: "app-mbl-section", standalone: true, imports: [CommonModule, FormsModule, DocumentModalComponent], changeDetection: ChangeDetectionStrategy.OnPush, template: `<div class="mt-12 pt-8 border-t">\r
      <h2 class="mbl-title">Master Bill of Lading</h2>\r
      <p class="mbl-subtitle">This MBL includes every HBL created from the uploaded packing-list batch. Confirm the carrier booking, MBL-level parties, and VGM before generation.</p>\r
\r
      @if (mblReview.mbl_pdf) {\r
        <div class="card">\r
          <p class="success-text">Final MBL generated from {{ mblReview.draft_ids.length }} HBL(s).</p>\r
          <p class="info-text">Final MBL number: <code class="code-block">{{ mblReview.mbl_number }}</code></p>\r
          <p class="info-text-large">Included HBLs: {{ getIncludedHblNumbers() }}</p>\r
\r
          <div class="doc-box" style="max-width: fit-content; gap: 16px;">\r
            <span class="doc-title" style="white-space: nowrap; overflow: hidden; text-overflow: ellipsis; max-width: 300px;">\u{1F4C4} {{ mblReview.mbl_filename }}</span>\r
            <button type="button" title="View Full MBL" style="border: none; background: transparent; cursor: pointer; padding: 4px; display: flex; align-items: center; justify-content: center; font-size: 16px;" (click)="viewMbl = true">\u{1F441}\uFE0F</button>\r
          </div>\r
        </div>\r
      }\r
\r
      @if (!mblReview.mbl_pdf) {\r
        <div class="card">\r
          <p class="info-text-large included-hbls-label">Included HBLs: {{ getIncludedHblNumbers() }}</p>\r
\r
          <form #mblForm="ngForm" (ngSubmit)="saveDetails(mblForm)" [class.form-submitted]="mblForm.submitted">\r
            <h4 class="form-section-title">MBL Details</h4>\r
            <div style="display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 32px; margin-bottom: 32px;">\r
               <div>\r
                  <label class="form-label">MBL Number</label>\r
                  <input type="text" [(ngModel)]="mblReview.mbl_details.mbl_number" name="mblNumber" class="form-input">\r
               </div>\r
               <div>\r
                  <label class="form-label">Carrier Booking Reference</label>\r
                  <input type="text" [(ngModel)]="mblReview.mbl_details.carrier_booking_reference" name="carrierBookingReference" class="form-input">\r
               </div>\r
               <div>\r
                  <label class="form-label">Vessel Name</label>\r
                  <input type="text" [(ngModel)]="mblReview.mbl_details.vessel_name" name="vesselName" class="form-input">\r
               </div>\r
               <div>\r
                  <label class="form-label">Voyage Number</label>\r
                  <input type="text" [(ngModel)]="mblReview.mbl_details.voyage_number" name="voyageNumber" class="form-input">\r
               </div>\r
               <div>\r
                  <label class="form-label">Port of Loading</label>\r
                  <input type="text" [(ngModel)]="mblReview.mbl_details.port_of_loading" name="portOfLoading" class="form-input">\r
               </div>\r
               <div>\r
                  <label class="form-label">Port of Discharge</label>\r
                  <input type="text" [(ngModel)]="mblReview.mbl_details.port_of_discharge" name="portOfDischarge" class="form-input">\r
               </div>\r
               <div>\r
                  <label class="form-label">Shipper Name *</label>\r
                  <input type="text" [(ngModel)]="mblReview.mbl_details.shipper.name" name="shipperName" required #shipperName="ngModel" \r
                    class="form-input" [class.is-invalid]="shipperName.invalid">\r
                  <div class="error-text">Shipper Name is required</div>\r
               </div>\r
               <div>\r
                  <label class="form-label">Consignee Name *</label>\r
                  <input type="text" [(ngModel)]="mblReview.mbl_details.consignee.name" name="consigneeName" required #consigneeName="ngModel" \r
                    class="form-input" [class.is-invalid]="consigneeName.invalid">\r
                  <div class="error-text">Consignee Name is required</div>\r
               </div>\r
               <div>\r
                  <label class="form-label">Tare Weight</label>\r
                  <input type="text" [(ngModel)]="mblReview.mbl_details.tare_weight" name="tareWeight" class="form-input">\r
               </div>\r
               <div>\r
                  <label class="form-label">Verified Gross Mass (VGM)</label>\r
                  <input type="text" [(ngModel)]="mblReview.mbl_details.verified_gross_mass" name="vgm" class="form-input">\r
               </div>\r
            </div>\r
\r
            <button type="submit" class="btn-primary">Generate Final MBL PDF</button>\r
\r
            @if (mblForm.submitted && mblForm.invalid) {\r
              <div class="alert-error mt-4">\r
                Please complete all required MBL fields.\r
              </div>\r
            }\r
          </form>\r
        </div>\r
      }\r
    </div>\r
\r
    @if (mblReview.mbl_pdf) {\r
      <app-document-modal \r
        [isOpen]="viewMbl" \r
        [title]="mblReview.mbl_filename || 'MBL PDF'" \r
        [documentUrl]="mblReview.mbl_pdf" \r
        mimeType="application/pdf"\r
        (closed)="viewMbl = false">\r
      </app-document-modal>\r
    }`, styles: ["/* src/app/features/logistics/components/mbl-section/mbl-section.component.css */\n.mbl-title {\n  font-size: 24px;\n  font-weight: 600;\n  color: #1a2b4c;\n  margin-bottom: 8px;\n}\n.mbl-subtitle {\n  color: #64748b;\n  margin-bottom: 32px;\n}\n.success-text {\n  color: #15803d;\n  font-weight: 500;\n  margin-bottom: 8px;\n}\n.info-text {\n  font-size: 14px;\n  color: #64748b;\n  margin-bottom: 4px;\n}\n.info-text-large {\n  font-size: 14px;\n  color: #64748b;\n  margin-bottom: 24px;\n}\n.code-block {\n  background: #f1f5f9;\n  padding: 2px 4px;\n  border-radius: 4px;\n}\n.doc-box {\n  border: 1px solid #e2e8f0;\n  border-radius: 8px;\n  padding: 16px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  background: #f8fafc;\n  margin-bottom: 16px;\n}\n.doc-title {\n  font-weight: 500;\n  color: #334155;\n}\n.form-section-title {\n  font-weight: 600;\n  color: #1a2b4c;\n  margin-bottom: 16px;\n  padding-bottom: 8px;\n  border-bottom: 1px solid #e2e8f0;\n}\n.included-hbls-label {\n  font-weight: 500;\n}\n/*# sourceMappingURL=mbl-section.component.css.map */\n"] }]
  }], () => [{ type: ToastService }], { reviews: [{
    type: Input
  }], mblReview: [{
    type: Input
  }], generateRequested: [{
    type: Output
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(MblSectionComponent, { className: "MblSectionComponent", filePath: "src/app/features/logistics/components/mbl-section/mbl-section.component.ts", lineNumber: 16 });
})();
export {
  MblSectionComponent
};
//# debugId=3c5c714d-19d2-55b4-b94b-90e91fdbdeea
//# sourceMappingURL=chunk-ZIAVBY2A.js.map
