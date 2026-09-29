import {
  WorkflowStateService
} from "./chunk-LCHLSDMN.js";
import {
  DocumentModalComponent
} from "./chunk-LE65J6VZ.js";
import {
  BackendApiService,
  DocumentExtractionService,
  UploaderComponent,
  WifiLoaderComponent
} from "./chunk-N3WTCS2V.js";
import {
  RouterLink,
  RouterModule
} from "./chunk-2II2K2OC.js";
import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgControlStatusGroup,
  NgForm,
  NgModel,
  NgSelectOption,
  RequiredValidator,
  SelectControlValueAccessor,
  ɵNgNoValidate,
  ɵNgSelectMultipleOption
} from "./chunk-TTGW4AYQ.js";
import {
  ToastService
} from "./chunk-VY4JNFW2.js";
import {
  APP_ID,
  ApplicationRef,
  BehaviorSubject,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  CommonModule,
  Component,
  ConnectableObservable,
  DOCUMENT,
  DestroyRef,
  Directive,
  ElementRef,
  EnvironmentInjector,
  EventEmitter,
  InjectionToken,
  Injector,
  Input,
  IterableDiffers,
  NgModule,
  NgStyle,
  NgZone,
  Observable,
  Output,
  PLATFORM_ID,
  Renderer2,
  RendererFactory2,
  Service,
  Subject,
  Subscription,
  TemplateRef,
  ViewChild,
  ViewContainerRef,
  ViewEncapsulation,
  __spreadProps,
  __spreadValues,
  afterNextRender,
  animationFrameScheduler,
  asapScheduler,
  auditTime,
  booleanAttribute,
  createComponent,
  distinctUntilChanged,
  effect,
  filter,
  finalize,
  forwardRef,
  inject,
  interval,
  isObservable,
  isPlatformBrowser,
  map,
  merge,
  numberAttribute,
  of,
  pairwise,
  setClassMetadata,
  setClassMetadataAsync,
  shareReplay,
  signal,
  startWith,
  switchMap,
  take,
  takeUntil,
  tap,
  untracked,
  ɵsetClassDebugInfo,
  ɵɵInheritDefinitionFeature,
  ɵɵNgOnChangesFeature,
  ɵɵProvidersFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵcontrol,
  ɵɵcontrolCreate,
  ɵɵdefer,
  ɵɵdeferWhen,
  ɵɵdefineComponent,
  ɵɵdefineDirective,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdefineService,
  ɵɵdirectiveInject,
  ɵɵdomElement,
  ɵɵdomElementEnd,
  ɵɵdomElementStart,
  ɵɵdomTemplate,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵgetInheritedFactory,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵproperty,
  ɵɵqueryRefresh,
  ɵɵreference,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIndex,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵstyleProp,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtextInterpolate3,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty,
  ɵɵviewQuery
} from "./chunk-YEYBPR5L.js";

// src/app/features/logistics/components/hbl-draft/hbl-draft.component.ts
function HblDraftComponent_Conditional_9_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 14);
    \u0275\u0275text(1, " Final HBL generated. Saved HBL details are locked. ");
    \u0275\u0275elementEnd();
  }
}
function HblDraftComponent_Conditional_9_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 15);
    \u0275\u0275text(1, "Confirm the information received from shipping instructions.");
    \u0275\u0275elementEnd();
  }
}
function HblDraftComponent_Conditional_9_For_92_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 47)(1, "span", 58);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 59);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const item_r5 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r5.key);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r5.value);
  }
}
function HblDraftComponent_Conditional_9_Conditional_93_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 48);
    \u0275\u0275text(1, "No data extracted.");
    \u0275\u0275elementEnd();
  }
}
function HblDraftComponent_Conditional_9_For_141_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr", 54)(1, "td", 60);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td", 60);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td", 60);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "td", 61);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "td", 61);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "td", 61);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "td", 60);
    \u0275\u0275text(14, "0");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "td", 60);
    \u0275\u0275text(16, "0");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const item_r6 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r6.shipping_marks || item_r6.container_number || 0);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", item_r6.package_count || 0, " ", item_r6.package_type || "");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r6.item_product_description || 0);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r6.hsn_code || 0);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r6.net_weight || 0);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r6.quantity || 0);
  }
}
function HblDraftComponent_Conditional_9_Conditional_142_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 62);
    \u0275\u0275text(2, "0");
    \u0275\u0275elementEnd()();
  }
}
function HblDraftComponent_Conditional_9_Conditional_144_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "button", 56);
    \u0275\u0275text(1, "Save and Generate Final HBL");
    \u0275\u0275elementEnd();
  }
}
function HblDraftComponent_Conditional_9_Conditional_145_Conditional_8_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 68);
    \u0275\u0275text(1, "Preparing HBL preview...");
    \u0275\u0275elementEnd();
  }
}
function HblDraftComponent_Conditional_9_Conditional_145_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 65)(1, "span", 66);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "button", 67);
    \u0275\u0275listener("click", function HblDraftComponent_Conditional_9_Conditional_145_Conditional_8_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.viewHblPreview(ctx_r2.primaryDraft));
    });
    \u0275\u0275text(4, "\u{1F441}\uFE0F");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(5, HblDraftComponent_Conditional_9_Conditional_145_Conditional_8_Conditional_5_Template, 2, 0, "span", 68);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("\u{1F4C4} ", ctx_r2.primaryDraft.hbl_filename);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r2.isHblPreviewLoading());
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r2.isHblPreviewLoading() ? 5 : -1);
  }
}
function HblDraftComponent_Conditional_9_Conditional_145_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 57)(1, "h4", 18);
    \u0275\u0275text(2, "Generated Final HBL");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p", 15);
    \u0275\u0275text(4, "Final HBL number: ");
    \u0275\u0275elementStart(5, "code", 63);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 64);
    \u0275\u0275conditionalCreate(8, HblDraftComponent_Conditional_9_Conditional_145_Conditional_8_Template, 6, 3, "div", 65);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r2.primaryDraft?.hbl_number);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r2.primaryDraft?.hbl_pdf ? 8 : -1);
  }
}
function HblDraftComponent_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 11)(1, "div");
    \u0275\u0275conditionalCreate(2, HblDraftComponent_Conditional_9_Conditional_2_Template, 2, 0, "div", 14);
    \u0275\u0275conditionalCreate(3, HblDraftComponent_Conditional_9_Conditional_3_Template, 2, 0, "p", 15);
    \u0275\u0275elementStart(4, "form", 16, 0);
    \u0275\u0275listener("ngSubmit", function HblDraftComponent_Conditional_9_Template_form_ngSubmit_4_listener() {
      \u0275\u0275restoreView(_r1);
      const hblForm_r2 = \u0275\u0275reference(5);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.saveDetails(hblForm_r2));
    });
    \u0275\u0275elementStart(6, "div")(7, "div", 17)(8, "h4", 18);
    \u0275\u0275text(9, "Shipment Details");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "div", 19)(11, "div", 17)(12, "label", 20);
    \u0275\u0275text(13, "HBL Number *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "div", 21)(15, "span", 22);
    \u0275\u0275text(16, "#");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "input", 23, 1);
    \u0275\u0275twoWayListener("ngModelChange", function HblDraftComponent_Conditional_9_Template_input_ngModelChange_17_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.formData.hbl_number, $event) || (ctx_r2.formData.hbl_number = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("input", function HblDraftComponent_Conditional_9_Template_input_input_17_listener() {
      \u0275\u0275restoreView(_r1);
      const hblNumber_r4 = \u0275\u0275reference(18);
      return \u0275\u0275resetView(hblNumber_r4.control.setErrors(null));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "div", 24);
    \u0275\u0275text(20);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(21, "div", 17)(22, "label", 20);
    \u0275\u0275text(23, "Container Number *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "div", 21)(25, "span", 22);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(26, "svg", 25);
    \u0275\u0275element(27, "path", 26)(28, "polyline", 27)(29, "line", 28);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(30, "input", 29, 2);
    \u0275\u0275twoWayListener("ngModelChange", function HblDraftComponent_Conditional_9_Template_input_ngModelChange_30_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.formData.container_number, $event) || (ctx_r2.formData.container_number = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "div", 24);
    \u0275\u0275text(33, "Container Number is required");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(34, "div", 17)(35, "label", 20);
    \u0275\u0275text(36, "Seal Number *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(37, "div", 21)(38, "span", 22);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(39, "svg", 25);
    \u0275\u0275element(40, "rect", 30)(41, "path", 31);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(42, "input", 32, 3);
    \u0275\u0275twoWayListener("ngModelChange", function HblDraftComponent_Conditional_9_Template_input_ngModelChange_42_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.formData.seal_number, $event) || (ctx_r2.formData.seal_number = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(44, "div", 24);
    \u0275\u0275text(45, "Seal Number is required");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(46, "div", 17)(47, "label", 20);
    \u0275\u0275text(48, "Freight Terms *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(49, "div", 21)(50, "span", 22);
    \u0275\u0275text(51, "$");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(52, "select", 33, 4);
    \u0275\u0275twoWayListener("ngModelChange", function HblDraftComponent_Conditional_9_Template_select_ngModelChange_52_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.formData.freight_terms, $event) || (ctx_r2.formData.freight_terms = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(54, "option", 34);
    \u0275\u0275text(55, "Select");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(56, "option", 35);
    \u0275\u0275text(57, "Prepaid");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(58, "option", 36);
    \u0275\u0275text(59, "Collect");
    \u0275\u0275elementEnd()();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(60, "div", 24);
    \u0275\u0275text(61, "Freight Terms is required");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(62, "div")(63, "h4", 18);
    \u0275\u0275text(64, "Notify Party");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(65, "div", 37)(66, "div")(67, "label", 20);
    \u0275\u0275text(68, "Name *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(69, "input", 38, 5);
    \u0275\u0275twoWayListener("ngModelChange", function HblDraftComponent_Conditional_9_Template_input_ngModelChange_69_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.formData.notify_party.name, $event) || (ctx_r2.formData.notify_party.name = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementStart(71, "div", 24);
    \u0275\u0275text(72, "Name is required");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(73, "label", 20);
    \u0275\u0275text(74, "Tax / Registration ID");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(75, "input", 39);
    \u0275\u0275twoWayListener("ngModelChange", function HblDraftComponent_Conditional_9_Template_input_ngModelChange_75_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.formData.notify_party.tax_id, $event) || (ctx_r2.formData.notify_party.tax_id = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(76, "div")(77, "label", 20);
    \u0275\u0275text(78, "Address *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(79, "textarea", 40, 6);
    \u0275\u0275twoWayListener("ngModelChange", function HblDraftComponent_Conditional_9_Template_textarea_ngModelChange_79_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.formData.notify_party.address, $event) || (ctx_r2.formData.notify_party.address = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementStart(81, "div", 24);
    \u0275\u0275text(82, "Address is required");
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(83, "div", 41)(84, "details", 42)(85, "summary", 43)(86, "span", 44);
    \u0275\u0275text(87, "Extracted Data from PDF");
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(88, "svg", 45);
    \u0275\u0275element(89, "path", 10);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(90, "div", 46);
    \u0275\u0275repeaterCreate(91, HblDraftComponent_Conditional_9_For_92_Template, 5, 2, "div", 47, \u0275\u0275repeaterTrackByIndex);
    \u0275\u0275conditionalCreate(93, HblDraftComponent_Conditional_9_Conditional_93_Template, 2, 0, "div", 48);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(94, "div", 49)(95, "details", 42)(96, "summary", 43)(97, "span", 44);
    \u0275\u0275text(98, "Items Details");
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(99, "svg", 45);
    \u0275\u0275element(100, "path", 10);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(101, "div", 50)(102, "table", 51)(103, "thead")(104, "tr")(105, "th", 52);
    \u0275\u0275listener("click", function HblDraftComponent_Conditional_9_Template_th_click_105_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.toggleItemsSort("shipping_marks"));
    });
    \u0275\u0275elementStart(106, "div");
    \u0275\u0275text(107, "Marks & Nos/");
    \u0275\u0275element(108, "br");
    \u0275\u0275text(109, "Container No.");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(110, "th", 52);
    \u0275\u0275listener("click", function HblDraftComponent_Conditional_9_Template_th_click_110_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.toggleItemsSort("package_count"));
    });
    \u0275\u0275elementStart(111, "div");
    \u0275\u0275text(112, "No. & Kind");
    \u0275\u0275element(113, "br");
    \u0275\u0275text(114, "of Pkgs");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(115, "th", 52);
    \u0275\u0275listener("click", function HblDraftComponent_Conditional_9_Template_th_click_115_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.toggleItemsSort("item_product_description"));
    });
    \u0275\u0275elementStart(116, "div");
    \u0275\u0275text(117, "Description of Goods");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(118, "th", 52);
    \u0275\u0275listener("click", function HblDraftComponent_Conditional_9_Template_th_click_118_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.toggleItemsSort("hsn_code"));
    });
    \u0275\u0275elementStart(119, "div");
    \u0275\u0275text(120, "HSN Code");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(121, "th", 52);
    \u0275\u0275listener("click", function HblDraftComponent_Conditional_9_Template_th_click_121_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.toggleItemsSort("net_weight"));
    });
    \u0275\u0275elementStart(122, "div");
    \u0275\u0275text(123, "NET.wt");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(124, "th", 52);
    \u0275\u0275listener("click", function HblDraftComponent_Conditional_9_Template_th_click_124_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.toggleItemsSort("quantity"));
    });
    \u0275\u0275elementStart(125, "div");
    \u0275\u0275text(126, "Quantity");
    \u0275\u0275element(127, "br");
    \u0275\u0275text(128, "In PC'S");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(129, "th", 53)(130, "div");
    \u0275\u0275text(131, "Unit Rate/ 1 PC");
    \u0275\u0275element(132, "br");
    \u0275\u0275text(133, "in EUR");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(134, "th", 53)(135, "div");
    \u0275\u0275text(136, "Amount");
    \u0275\u0275element(137, "br");
    \u0275\u0275text(138, "in EUR");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(139, "tbody");
    \u0275\u0275repeaterCreate(140, HblDraftComponent_Conditional_9_For_141_Template, 17, 7, "tr", 54, \u0275\u0275repeaterTrackByIndex);
    \u0275\u0275conditionalCreate(142, HblDraftComponent_Conditional_9_Conditional_142_Template, 3, 0, "tr");
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(143, "div", 55);
    \u0275\u0275conditionalCreate(144, HblDraftComponent_Conditional_9_Conditional_144_Template, 2, 0, "button", 56);
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(145, HblDraftComponent_Conditional_9_Conditional_145_Template, 9, 2, "div", 57);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const hblForm_r2 = \u0275\u0275reference(5);
    const hblNumber_r4 = \u0275\u0275reference(18);
    const containerNumber_r8 = \u0275\u0275reference(31);
    const sealNumber_r9 = \u0275\u0275reference(43);
    const freightTerms_r10 = \u0275\u0275reference(53);
    const notifyName_r11 = \u0275\u0275reference(70);
    const notifyAddress_r12 = \u0275\u0275reference(80);
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r2.isLocked ? 2 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(!ctx_r2.isLocked ? 3 : -1);
    \u0275\u0275advance();
    \u0275\u0275classProp("form-submitted", hblForm_r2.submitted);
    \u0275\u0275advance(13);
    \u0275\u0275classProp("is-invalid", hblNumber_r4.invalid && (hblNumber_r4.touched || hblForm_r2.submitted));
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.formData.hbl_number);
    \u0275\u0275property("disabled", ctx_r2.isLocked);
    \u0275\u0275control();
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("visibility", hblNumber_r4.invalid && (hblNumber_r4.touched || hblForm_r2.submitted) ? "visible" : "hidden");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", hblNumber_r4.hasError("duplicate") ? "HBL Number must be unique." : "HBL Number is required", " ");
    \u0275\u0275advance(10);
    \u0275\u0275classProp("is-invalid", containerNumber_r8.invalid && (containerNumber_r8.touched || hblForm_r2.submitted));
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.formData.container_number);
    \u0275\u0275property("disabled", ctx_r2.isLocked);
    \u0275\u0275control();
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("visibility", containerNumber_r8.invalid && (containerNumber_r8.touched || hblForm_r2.submitted) ? "visible" : "hidden");
    \u0275\u0275advance(10);
    \u0275\u0275classProp("is-invalid", sealNumber_r9.invalid && (sealNumber_r9.touched || hblForm_r2.submitted));
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.formData.seal_number);
    \u0275\u0275property("disabled", ctx_r2.isLocked);
    \u0275\u0275control();
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("visibility", sealNumber_r9.invalid && (sealNumber_r9.touched || hblForm_r2.submitted) ? "visible" : "hidden");
    \u0275\u0275advance(8);
    \u0275\u0275classProp("is-invalid", freightTerms_r10.invalid && (freightTerms_r10.touched || hblForm_r2.submitted));
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.formData.freight_terms);
    \u0275\u0275property("disabled", ctx_r2.isLocked);
    \u0275\u0275control();
    \u0275\u0275advance(8);
    \u0275\u0275styleProp("visibility", freightTerms_r10.invalid && (freightTerms_r10.touched || hblForm_r2.submitted) ? "visible" : "hidden");
    \u0275\u0275advance(9);
    \u0275\u0275classProp("is-invalid", notifyName_r11.invalid && (notifyName_r11.touched || hblForm_r2.submitted));
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.formData.notify_party.name);
    \u0275\u0275property("disabled", ctx_r2.isLocked);
    \u0275\u0275control();
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("visibility", notifyName_r11.invalid && (notifyName_r11.touched || hblForm_r2.submitted) ? "visible" : "hidden");
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.formData.notify_party.tax_id);
    \u0275\u0275property("disabled", ctx_r2.isLocked);
    \u0275\u0275control();
    \u0275\u0275advance(4);
    \u0275\u0275classProp("is-invalid", notifyAddress_r12.invalid && (notifyAddress_r12.touched || hblForm_r2.submitted));
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.formData.notify_party.address);
    \u0275\u0275property("disabled", ctx_r2.isLocked);
    \u0275\u0275control();
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("visibility", notifyAddress_r12.invalid && (notifyAddress_r12.touched || hblForm_r2.submitted) ? "visible" : "hidden");
    \u0275\u0275advance(10);
    \u0275\u0275repeater(ctx_r2.getExtractedData());
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r2.getExtractedData().length === 0 ? 93 : -1);
    \u0275\u0275advance(12);
    \u0275\u0275classProp("sort-asc", ctx_r2.itemsSortColumn === "shipping_marks" && ctx_r2.itemsSortDirection === "asc")("sort-desc", ctx_r2.itemsSortColumn === "shipping_marks" && ctx_r2.itemsSortDirection === "desc");
    \u0275\u0275advance(5);
    \u0275\u0275classProp("sort-asc", ctx_r2.itemsSortColumn === "package_count" && ctx_r2.itemsSortDirection === "asc")("sort-desc", ctx_r2.itemsSortColumn === "package_count" && ctx_r2.itemsSortDirection === "desc");
    \u0275\u0275advance(5);
    \u0275\u0275classProp("sort-asc", ctx_r2.itemsSortColumn === "item_product_description" && ctx_r2.itemsSortDirection === "asc")("sort-desc", ctx_r2.itemsSortColumn === "item_product_description" && ctx_r2.itemsSortDirection === "desc");
    \u0275\u0275advance(3);
    \u0275\u0275classProp("sort-asc", ctx_r2.itemsSortColumn === "hsn_code" && ctx_r2.itemsSortDirection === "asc")("sort-desc", ctx_r2.itemsSortColumn === "hsn_code" && ctx_r2.itemsSortDirection === "desc");
    \u0275\u0275advance(3);
    \u0275\u0275classProp("sort-asc", ctx_r2.itemsSortColumn === "net_weight" && ctx_r2.itemsSortDirection === "asc")("sort-desc", ctx_r2.itemsSortColumn === "net_weight" && ctx_r2.itemsSortDirection === "desc");
    \u0275\u0275advance(3);
    \u0275\u0275classProp("sort-asc", ctx_r2.itemsSortColumn === "quantity" && ctx_r2.itemsSortDirection === "asc")("sort-desc", ctx_r2.itemsSortColumn === "quantity" && ctx_r2.itemsSortDirection === "desc");
    \u0275\u0275advance(16);
    \u0275\u0275repeater(ctx_r2.getItems());
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r2.getItems().length === 0 ? 142 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(!ctx_r2.isLocked ? 144 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.isLocked ? 145 : -1);
  }
}
function HblDraftComponent_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-document-modal", 69);
    \u0275\u0275listener("closed", function HblDraftComponent_Conditional_10_Template_app_document_modal_closed_0_listener() {
      \u0275\u0275restoreView(_r13);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.closeDoc());
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275property("isOpen", true)("title", ctx_r2.selectedDocName)("documentUrl", ctx_r2.selectedDocUrl)("mimeType", ctx_r2.selectedDocMime);
  }
}
function HblDraftComponent_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-document-modal", 70);
    \u0275\u0275listener("closed", function HblDraftComponent_Conditional_11_Template_app_document_modal_closed_0_listener() {
      \u0275\u0275restoreView(_r14);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.closeHblPreview());
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275property("isOpen", true)("title", ctx_r2.hblPreviewName() || "HBL PDF")("documentUrl", ctx_r2.hblPreviewUrl());
  }
}
var HblDraftComponent = class _HblDraftComponent {
  constructor(toast, extractionService) {
    this.toast = toast;
    this.extractionService = extractionService;
  }
  toast;
  extractionService;
  workflow = inject(WorkflowStateService);
  drafts = [];
  expanded = false;
  groupColor = null;
  groupTitle;
  generateRequested = new EventEmitter();
  formData;
  selectedDocUrl = null;
  selectedDocName = "";
  selectedDocMime = "";
  selectedPackingListIndex = 0;
  hblPreviewUrl = signal(
    null,
    ...ngDevMode ? [{ debugName: "hblPreviewUrl" }] : (
      /* istanbul ignore next */
      []
    )
  );
  hblPreviewName = signal(
    "",
    ...ngDevMode ? [{ debugName: "hblPreviewName" }] : (
      /* istanbul ignore next */
      []
    )
  );
  isHblPreviewLoading = signal(
    false,
    ...ngDevMode ? [{ debugName: "isHblPreviewLoading" }] : (
      /* istanbul ignore next */
      []
    )
  );
  ngOnInit() {
    this.formData = JSON.parse(JSON.stringify(this.drafts[0]?.hbl_details || {}));
    if (!this.formData.notify_party) {
      this.formData.notify_party = { name: "", address: "", tax_id: null };
    }
    this.selectedPackingListIndex = 0;
  }
  ngOnChanges(changes) {
    if (changes["drafts"]) {
      this.selectedPackingListIndex = 0;
      if (this.drafts.length > 0) {
        this.formData = JSON.parse(JSON.stringify(this.drafts[0]?.hbl_details || {}));
        if (!this.formData.notify_party) {
          this.formData.notify_party = { name: "", address: "", tax_id: null };
        }
      } else {
        this.formData = null;
      }
    }
  }
  viewSelectedDoc() {
    const draft = this.drafts[this.selectedPackingListIndex] || this.drafts[0];
    if (draft) {
      this.viewDoc(draft);
    }
  }
  viewDoc(draft) {
    this.selectedDocUrl = draft.source_document || null;
    this.selectedDocName = draft.source_name;
    this.selectedDocMime = draft.mime_type;
  }
  closeDoc() {
    this.selectedDocUrl = null;
  }
  viewHblPreview(draft) {
    const batchId = draft.batch_id;
    const groupId = draft.group_id;
    if (!batchId || !groupId) {
      this.toast.show("This HBL is missing its batch reference and cannot be previewed.", "error");
      return;
    }
    this.isHblPreviewLoading.set(true);
    this.extractionService.previewHbl(batchId, groupId).pipe(finalize(() => this.isHblPreviewLoading.set(false))).subscribe({
      next: (response) => {
        this.hblPreviewName.set(response.filename);
        this.hblPreviewUrl.set(`data:application/pdf;base64,${response.base64}`);
      },
      error: () => {
        this.toast.show("Could not build the HBL preview. Please try again.", "error");
      }
    });
  }
  closeHblPreview() {
    this.hblPreviewUrl.set(null);
    this.hblPreviewName.set("");
  }
  saveDetails(form) {
    if (form.invalid) {
      this.drafts.forEach((d) => {
        d.details_confirmed = false;
        this.workflow.updateDraft(d.draft_id, { details_confirmed: false });
      });
      this.toast.show("Please complete all required fields.", "error");
      return;
    }
    const savedData = JSON.parse(JSON.stringify(this.formData));
    if (!savedData.notify_party) {
      savedData.notify_party = { name: null, address: null, tax_id: null };
    }
    const newHblNumber = savedData.hbl_number;
    const currentDraftIds = new Set(this.drafts.map((d) => d.draft_id));
    const isDuplicate = this.workflow.hblReviews().some((r) => !currentDraftIds.has(r.draft_id) && r.hbl_number === newHblNumber);
    if (isDuplicate) {
      form.controls["hblNumber"]?.setErrors({ duplicate: true });
      this.toast.show("This HBL number is already in use by another group. Please enter a different HBL number.", "error");
      return;
    }
    this.drafts.forEach((d) => {
      d.details_confirmed = true;
      d.hbl_details = JSON.parse(JSON.stringify(savedData));
      d.hbl_number = savedData.hbl_number || void 0;
      this.workflow.updateDraft(d.draft_id, {
        details_confirmed: true,
        hbl_details: savedData,
        hbl_number: savedData.hbl_number || void 0
      });
    });
    this.toast.show("HBL Details Saved successfully for selected packing lists", "success");
    this.generateHbl();
  }
  generateHbl() {
    this.expanded = false;
    this.generateRequested.emit(this.drafts);
  }
  get primaryDraft() {
    return this.drafts[0];
  }
  get isLocked() {
    return this.drafts.some((d) => !!d.hbl_pdf);
  }
  get detailsConfirmed() {
    return this.drafts.every((d) => d.details_confirmed);
  }
  sortColumn = "key";
  sortDirection = "asc";
  toggleSort(column) {
    if (this.sortColumn === column) {
      this.sortDirection = this.sortDirection === "asc" ? "desc" : "asc";
    } else {
      this.sortColumn = column;
      this.sortDirection = "asc";
    }
  }
  itemsSortColumn = "";
  itemsSortDirection = "asc";
  toggleItemsSort(column) {
    if (this.itemsSortColumn === column) {
      this.itemsSortDirection = this.itemsSortDirection === "asc" ? "desc" : "asc";
    } else {
      this.itemsSortColumn = column;
      this.itemsSortDirection = "asc";
    }
  }
  getItems() {
    let items = [...this.primaryDraft?.packing_list?.items || []];
    if (this.itemsSortColumn) {
      items.sort((a, b) => {
        let valA = String(a[this.itemsSortColumn] || 0).toLowerCase();
        let valB = String(b[this.itemsSortColumn] || 0).toLowerCase();
        if (valA < valB)
          return this.itemsSortDirection === "asc" ? -1 : 1;
        if (valA > valB)
          return this.itemsSortDirection === "asc" ? 1 : -1;
        return 0;
      });
    }
    return items;
  }
  getExtractedData() {
    if (!this.primaryDraft?.packing_list)
      return [];
    const pl = this.primaryDraft.packing_list;
    const result = [];
    const allowedKeys = [
      "invoice_number",
      "notify_party",
      "country_of_origin",
      "country_of_final_destination",
      "total_gross_weight",
      "total_package_count",
      "total_net_weight",
      "quantity",
      "package_numbers",
      "net_weight"
    ];
    const pushItem = (k, v) => {
      const formattedKey = this.formatKey(k);
      if (result.some((r) => r.key === formattedKey))
        return;
      const val = v === null || v === void 0 || v === "" ? "--" : String(v);
      result.push({ key: formattedKey, value: val });
    };
    const processValue = (prefix, leafKey, val) => {
      if (Array.isArray(val)) {
        if (val.length > 0 && typeof val[0] !== "object") {
          if (allowedKeys.includes(leafKey) || leafKey.endsWith("_date")) {
            pushItem(leafKey, val.join(", "));
          }
        } else {
          val.forEach((item, index) => {
            if (item && typeof item === "object") {
              for (const k of Object.keys(item)) {
                processValue(`${prefix}_${index + 1}_${k}`, k, item[k]);
              }
            }
          });
        }
      } else if (val && typeof val === "object") {
        if (allowedKeys.includes(leafKey) || leafKey.endsWith("_date")) {
          pushItem(leafKey, val.name || "--");
        }
      } else {
        if (allowedKeys.includes(leafKey) || leafKey.endsWith("_date")) {
          pushItem(leafKey, val);
        }
      }
    };
    for (const key of Object.keys(pl)) {
      processValue(key, key, pl[key]);
    }
    if (pl.consignee) {
      const cName = pl.consignee.name || "--";
      const cAddress = pl.consignee.address || "--";
      const tnwIndex = result.findIndex((r) => r.key === "Total Net Weight");
      if (tnwIndex !== -1) {
        result.splice(tnwIndex + 1, 0, { key: "Consignee Name", value: cName }, { key: "Consignee Address", value: cAddress });
      } else {
        result.push({ key: "Consignee Name", value: cName }, { key: "Consignee Address", value: cAddress });
      }
    }
    return result;
  }
  formatKey(key) {
    return key.split(/[ _]/).filter((w) => w.length > 0).map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join(" ");
  }
  static \u0275fac = function HblDraftComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _HblDraftComponent)(\u0275\u0275directiveInject(ToastService), \u0275\u0275directiveInject(DocumentExtractionService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _HblDraftComponent, selectors: [["app-hbl-draft"]], inputs: { drafts: "drafts", expanded: "expanded", groupColor: "groupColor", groupTitle: "groupTitle" }, outputs: { generateRequested: "generateRequested" }, features: [\u0275\u0275NgOnChangesFeature], decls: 12, vars: 16, consts: [["hblForm", "ngForm"], ["hblNumber", "ngModel"], ["containerNumber", "ngModel"], ["sealNumber", "ngModel"], ["freightTerms", "ngModel"], ["notifyName", "ngModel"], ["notifyAddress", "ngModel"], [1, "card", "mb-6", "hbl-draft-card"], [1, "accordion-header", 3, "click"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "accordion-icon"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M19 9l-7 7-7-7"], [1, "accordion-body"], [3, "isOpen", "title", "documentUrl", "mimeType"], ["mimeType", "application/pdf", 3, "isOpen", "title", "documentUrl"], [1, "alert-success", "mb-6"], [1, "tab-subtitle"], [3, "ngSubmit"], [1, ""], [1, "mb-4", "pb-2", "border-b"], [1, "grid", "grid-cols-4", "gap-4"], [1, "form-label"], [1, "input-group"], [1, "input-group-text"], ["type", "text", "name", "hblNumber", "required", "", 1, "form-input", "group-input", 3, "ngModelChange", "input", "ngModel", "disabled"], [1, "error-text"], ["width", "16", "height", "16", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round"], ["d", "M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"], ["points", "3.27 6.96 12 12.01 20.73 6.96"], ["x1", "12", "y1", "22.08", "x2", "12", "y2", "12"], ["type", "text", "name", "containerNumber", "required", "", 1, "form-input", "group-input", 3, "ngModelChange", "ngModel", "disabled"], ["x", "3", "y", "11", "width", "18", "height", "11", "rx", "2", "ry", "2"], ["d", "M7 11V7a5 5 0 0 1 10 0v4"], ["type", "text", "name", "sealNumber", "required", "", 1, "form-input", "group-input", 3, "ngModelChange", "ngModel", "disabled"], ["name", "freightTerms", "required", "", 1, "form-input", "group-input", 3, "ngModelChange", "ngModel", "disabled"], ["value", "", "disabled", ""], ["value", "Prepaid"], ["value", "Collect"], [1, "grid", "grid-cols-2", "gap-4"], ["type", "text", "name", "notifyName", "required", "", 1, "form-input", 3, "ngModelChange", "ngModel", "disabled"], ["type", "text", "name", "notifyTax", 1, "form-input", 3, "ngModelChange", "ngModel", "disabled"], ["name", "notifyAddress", "required", "", "rows", "6", 1, "form-input", 2, "resize", "none", 3, "ngModelChange", "ngModel", "disabled"], [1, "border", "border-gray-200", "rounded-md", "overflow-hidden", "bg-white"], ["open", "", 1, "group"], [1, "border-b", "border-transparent", "group-open:border-gray-200", 2, "cursor", "pointer", "padding", "12px 16px", "background", "#f8fafc", "font-weight", "600", "display", "flex", "justify-content", "space-between", "align-items", "center", "list-style", "none"], [2, "color", "#0f172a", "font-size", "16px"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-5", "h-5", "text-gray-500", "transition-transform", "duration-200", "group-open:rotate-180", 2, "width", "20px", "height", "20px", "flex-shrink", "0"], [2, "background", "#fff", "max-height", "400px", "overflow-y", "auto", "display", "grid", "grid-template-columns", "repeat(6, minmax(0, 1fr))", "gap", "16px", "padding", "16px"], [2, "display", "flex", "flex-direction", "column", "align-items", "flex-start", "text-align", "left"], [1, "w-full", "text-left", "p-4", "text-gray-500", 2, "grid-column", "1 / -1"], [1, "mb-4", "border", "border-gray-200", "rounded-md", "overflow-hidden", "bg-white"], [1, "table-container", 2, "background", "#fff", "max-height", "400px", "overflow-y", "auto"], [1, "extracted-table", 2, "table-layout", "auto", "font-size", "13px"], [1, "header-cell", 3, "click"], [1, "header-cell", 2, "cursor", "default"], [1, "hover:bg-blue-50", "even:bg-slate-50", "transition-colors", "align-top"], [1, "flex", "form-actions-container"], ["type", "submit", 1, "btn-primary"], [1, "mt-8"], [2, "font-weight", "600", "color", "#003366", "font-size", "13px", "margin-bottom", "4px"], [2, "color", "#003366", "font-size", "13px"], [1, "cell", "font-semibold"], [1, "cell", "font-bold"], ["colspan", "8", 1, "cell", "p-6", "text-center", "text-gray-500", "font-semibold"], [1, "hbl-number-code"], [1, "generated-hbl-container"], [1, "doc-box", "final-hbl-doc-box", 2, "max-width", "fit-content", "gap", "16px"], [1, "doc-filename", 2, "white-space", "nowrap", "overflow", "hidden", "text-overflow", "ellipsis", "max-width", "300px"], ["type", "button", "title", "View Full HBL", 2, "border", "none", "background", "transparent", "cursor", "pointer", "padding", "4px", "display", "flex", "align-items", "center", "justify-content", "center", "font-size", "16px", 3, "click", "disabled"], [1, "doc-loading-text"], [3, "closed", "isOpen", "title", "documentUrl", "mimeType"], ["mimeType", "application/pdf", 3, "closed", "isOpen", "title", "documentUrl"]], template: function HblDraftComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 7)(1, "div", 8);
      \u0275\u0275listener("click", function HblDraftComponent_Template_div_click_1_listener() {
        return ctx.expanded = !ctx.expanded;
      });
      \u0275\u0275elementStart(2, "div");
      \u0275\u0275text(3);
      \u0275\u0275elementStart(4, "span");
      \u0275\u0275text(5);
      \u0275\u0275elementEnd();
      \u0275\u0275text(6);
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(7, "svg", 9);
      \u0275\u0275element(8, "path", 10);
      \u0275\u0275elementEnd()();
      \u0275\u0275conditionalCreate(9, HblDraftComponent_Conditional_9_Template, 146, 71, "div", 11);
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(10, HblDraftComponent_Conditional_10_Template, 1, 4, "app-document-modal", 12);
      \u0275\u0275conditionalCreate(11, HblDraftComponent_Conditional_11_Template, 1, 3, "app-document-modal", 13);
    }
    if (rf & 2) {
      \u0275\u0275styleProp("border-top", ctx.groupColor ? "4px solid " + ctx.groupColor : "1px solid #e2e8f0");
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate3(" ", ctx.groupTitle || "Merged HBL Draft", " (", ctx.drafts.length, " Packing List", ctx.drafts.length > 1 ? "s" : "", ") \xA0|\xA0 ");
      \u0275\u0275advance();
      \u0275\u0275classProp("text-ready", ctx.detailsConfirmed)("text-draft", !ctx.detailsConfirmed);
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1(" ", ctx.detailsConfirmed ? "Ready" : "Draft", " ");
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1(" \xA0|\xA0 HBL: ", ctx.primaryDraft?.hbl_number || "Pending", " ");
      \u0275\u0275advance();
      \u0275\u0275classProp("rotate-180", ctx.expanded);
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.expanded ? 9 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.selectedDocUrl ? 10 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.hblPreviewUrl() ? 11 : -1);
    }
  }, dependencies: [CommonModule, FormsModule, \u0275NgNoValidate, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, SelectControlValueAccessor, NgControlStatus, NgControlStatusGroup, RequiredValidator, NgModel, NgForm, DocumentModalComponent], styles: ['\n.tab-subtitle[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: #64748b;\n  margin-bottom: 16px;\n}\n.doc-box[_ngcontent-%COMP%] {\n  border: 1px solid #e2e8f0;\n  border-radius: 8px;\n  padding: 16px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  background: #fff;\n}\n.hbl-draft-card[_ngcontent-%COMP%] {\n  padding: 0;\n  overflow: hidden;\n}\n.text-ready[_ngcontent-%COMP%] {\n  color: #15803d;\n}\n.text-draft[_ngcontent-%COMP%] {\n  color: #f97316;\n}\n.accordion-icon[_ngcontent-%COMP%] {\n  width: 20px;\n  height: 20px;\n  transition: transform 0.2s;\n}\n.packing-list-select-container[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 12px;\n  align-items: center;\n  max-width: 550px;\n}\n.packing-list-select[_ngcontent-%COMP%] {\n  flex: 1;\n  cursor: pointer;\n  height: 48px;\n  min-height: 48px;\n  padding: 8px 16px;\n  font-size: 14px;\n  line-height: 1.5;\n  border-radius: 6px;\n}\n.packing-list-option[_ngcontent-%COMP%] {\n  padding: 8px;\n}\n.view-pdf-btn[_ngcontent-%COMP%] {\n  height: 48px;\n  min-height: 48px;\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n  white-space: nowrap;\n  padding: 0 20px;\n  font-size: 14px;\n  border-radius: 6px;\n}\n.divider[_ngcontent-%COMP%] {\n  border: none;\n  border-top: 1px solid #e2e8f0;\n}\n.form-actions-container[_ngcontent-%COMP%] {\n  align-items: center;\n}\n.btn-generate-pdf[_ngcontent-%COMP%] {\n  background-color: #0f172a;\n}\n.hbl-number-code[_ngcontent-%COMP%] {\n  background: #f1f5f9;\n  padding: 2px 4px;\n  border-radius: 4px;\n}\n.generated-hbl-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 16px;\n}\n.final-hbl-doc-box[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 250px;\n  padding: 12px;\n  max-width: 350px;\n}\n.doc-filename[_ngcontent-%COMP%] {\n  font-weight: 500;\n}\n.doc-loading-text[_ngcontent-%COMP%] {\n  color: #64748b;\n  font-size: 13px;\n  font-style: italic;\n  white-space: nowrap;\n}\n.extracted-table[_ngcontent-%COMP%] {\n  border: 1px solid #545454;\n  font-family: "Lato", sans-serif;\n  color: #3f3f3f;\n  width: 100%;\n  table-layout: auto;\n  border-collapse: collapse;\n}\n.extracted-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], \n.extracted-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  border: 1px solid #545454;\n  text-align: center;\n}\n.extracted-table[_ngcontent-%COMP%]   .cell[_ngcontent-%COMP%] {\n  padding: 12px 16px;\n}\n.extracted-table[_ngcontent-%COMP%]   .header-cell[_ngcontent-%COMP%] {\n  padding: 12px 30px 12px 12px;\n  position: relative;\n  cursor: pointer;\n  background: #f1f5f9;\n}\n.extracted-table[_ngcontent-%COMP%]   .header-cell[_ngcontent-%COMP%]::before, \n.extracted-table[_ngcontent-%COMP%]   .header-cell[_ngcontent-%COMP%]::after {\n  content: "";\n  position: absolute;\n  top: 50%;\n  right: 12px;\n  border: 4px solid transparent;\n}\n.extracted-table[_ngcontent-%COMP%]   .header-cell[_ngcontent-%COMP%]::before {\n  border-bottom-color: #bdbdbd;\n  margin-top: -8px;\n}\n.extracted-table[_ngcontent-%COMP%]   .header-cell[_ngcontent-%COMP%]::after {\n  border-top-color: #bdbdbd;\n  margin-top: 1px;\n}\n.extracted-table[_ngcontent-%COMP%]   .header-cell.sort-asc[_ngcontent-%COMP%]::before {\n  border-width: 6px;\n  margin-top: -9px;\n  right: 10px;\n  border-bottom-color: #3f3f3f;\n}\n.extracted-table[_ngcontent-%COMP%]   .header-cell.sort-asc[_ngcontent-%COMP%]::after {\n  display: none;\n}\n.extracted-table[_ngcontent-%COMP%]   .header-cell.sort-desc[_ngcontent-%COMP%]::before {\n  display: none;\n}\n.extracted-table[_ngcontent-%COMP%]   .header-cell.sort-desc[_ngcontent-%COMP%]::after {\n  border-width: 6px;\n  margin-top: -2px;\n  right: 10px;\n  border-top-color: #3f3f3f;\n}\n.extracted-table[_ngcontent-%COMP%]   .header-cell[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n}\n/*# sourceMappingURL=hbl-draft.component.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(HblDraftComponent, [{
    type: Component,
    args: [{ selector: "app-hbl-draft", standalone: true, imports: [CommonModule, FormsModule, DocumentModalComponent], changeDetection: ChangeDetectionStrategy.OnPush, template: `<div class="card mb-6 hbl-draft-card" [style.border-top]="groupColor ? '4px solid ' + groupColor : '1px solid #e2e8f0'">\r
      <!-- Accordion Header -->\r
      <div \r
        class="accordion-header"\r
        (click)="expanded = !expanded"\r
      >\r
        <div>\r
          {{ groupTitle || 'Merged HBL Draft' }} ({{ drafts.length }} Packing List{{ drafts.length > 1 ? 's' : '' }}) &nbsp;|&nbsp; \r
          <span [class.text-ready]="detailsConfirmed" [class.text-draft]="!detailsConfirmed">\r
            {{ detailsConfirmed ? 'Ready' : 'Draft' }}\r
          </span>\r
          &nbsp;|&nbsp; HBL: {{ primaryDraft?.hbl_number || 'Pending' }}\r
        </div>\r
        <svg class="accordion-icon" [class.rotate-180]="expanded" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>\r
      </div>\r
\r
      <!-- Accordion Body -->\r
      @if (expanded) {\r
        <div class="accordion-body">\r
          \r
\r
\r
        <!-- Form and Generated PDF Section -->\r
        <div>\r
          @if (isLocked) {\r
            <div class="alert-success mb-6">\r
              Final HBL generated. Saved HBL details are locked.\r
            </div>\r
          }\r
          @if (!isLocked) {\r
            <p class="tab-subtitle">Confirm the information received from shipping instructions.</p>\r
          }\r
          \r
          <form #hblForm="ngForm" (ngSubmit)="saveDetails(hblForm)" [class.form-submitted]="hblForm.submitted">\r
            <div>\r
              <!-- Shipment Details -->\r
              <div class="">\r
                <h4 class="mb-4 pb-2 border-b">Shipment Details</h4>\r
                <div class="grid grid-cols-4 gap-4">\r
                  <div class="">\r
                    <label class="form-label">HBL Number *</label>\r
                    <div class="input-group">\r
                      <span class="input-group-text">#</span>\r
                      <input type="text" name="hblNumber" [(ngModel)]="formData.hbl_number" required #hblNumber="ngModel"\r
                        class="form-input group-input" [class.is-invalid]="hblNumber.invalid && (hblNumber.touched || hblForm.submitted)" [disabled]="isLocked" (input)="hblNumber.control.setErrors(null)">\r
                    </div>\r
                    <div class="error-text" [style.visibility]="hblNumber.invalid && (hblNumber.touched || hblForm.submitted) ? 'visible' : 'hidden'">\r
                      {{ hblNumber.hasError('duplicate') ? 'HBL Number must be unique.' : 'HBL Number is required' }}\r
                    </div>\r
                  </div>\r
\r
                  <div class="">\r
                    <label class="form-label">Container Number *</label>\r
                    <div class="input-group">\r
                      <span class="input-group-text">\r
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line></svg>\r
                      </span>\r
                      <input type="text" name="containerNumber" [(ngModel)]="formData.container_number" required #containerNumber="ngModel"\r
                        class="form-input group-input" [class.is-invalid]="containerNumber.invalid && (containerNumber.touched || hblForm.submitted)" [disabled]="isLocked">\r
                    </div>\r
                    <div class="error-text" [style.visibility]="containerNumber.invalid && (containerNumber.touched || hblForm.submitted) ? 'visible' : 'hidden'">Container Number is required</div>\r
                  </div>\r
\r
                  <div class="">\r
                    <label class="form-label">Seal Number *</label>\r
                    <div class="input-group">\r
                      <span class="input-group-text">\r
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>\r
                      </span>\r
                      <input type="text" name="sealNumber" [(ngModel)]="formData.seal_number" required #sealNumber="ngModel"\r
                        class="form-input group-input" [class.is-invalid]="sealNumber.invalid && (sealNumber.touched || hblForm.submitted)" [disabled]="isLocked">\r
                    </div>\r
                    <div class="error-text" [style.visibility]="sealNumber.invalid && (sealNumber.touched || hblForm.submitted) ? 'visible' : 'hidden'">Seal Number is required</div>\r
                  </div>\r
\r
                  <div class="">\r
                    <label class="form-label">Freight Terms *</label>\r
                    <div class="input-group">\r
                      <span class="input-group-text">$</span>\r
                      <select name="freightTerms" [(ngModel)]="formData.freight_terms" required #freightTerms="ngModel"\r
                        class="form-input group-input" [class.is-invalid]="freightTerms.invalid && (freightTerms.touched || hblForm.submitted)" [disabled]="isLocked">\r
                        <option value="" disabled>Select</option>\r
                        <option value="Prepaid">Prepaid</option>\r
                        <option value="Collect">Collect</option>\r
                      </select>\r
                    </div>\r
                    <div class="error-text" [style.visibility]="freightTerms.invalid && (freightTerms.touched || hblForm.submitted) ? 'visible' : 'hidden'">Freight Terms is required</div>\r
                  </div>\r
                </div>\r
              </div>\r
\r
              <!-- Notify Party -->\r
              <div>\r
                <h4 class="mb-4 pb-2 border-b">Notify Party</h4>\r
                <div class="grid grid-cols-2 gap-4">\r
                  <div>\r
                    <label class="form-label">Name *</label>\r
                    <input type="text" name="notifyName" [(ngModel)]="formData.notify_party.name" required #notifyName="ngModel"\r
                      class="form-input" [class.is-invalid]="notifyName.invalid && (notifyName.touched || hblForm.submitted)" [disabled]="isLocked">\r
                    <div class="error-text" [style.visibility]="notifyName.invalid && (notifyName.touched || hblForm.submitted) ? 'visible' : 'hidden'">Name is required</div>\r
\r
                    <label class="form-label">Tax / Registration ID</label>\r
                    <input type="text" name="notifyTax" [(ngModel)]="formData.notify_party.tax_id" class="form-input" [disabled]="isLocked">\r
                  </div>\r
                  <div>\r
\r
                    <label class="form-label">Address *</label>\r
                  <textarea name="notifyAddress" [(ngModel)]="formData.notify_party.address" required #notifyAddress="ngModel" rows="6"\r
                    class="form-input" style="resize: none;" [class.is-invalid]="notifyAddress.invalid && (notifyAddress.touched || hblForm.submitted)" [disabled]="isLocked"></textarea>\r
                  <div class="error-text" [style.visibility]="notifyAddress.invalid && (notifyAddress.touched || hblForm.submitted) ? 'visible' : 'hidden'">Address is required</div>\r
                  </div>\r
                </div>\r
              </div>\r
            </div>\r
\r
            <!-- Extracted Data Table -->\r
            <div class="border border-gray-200 rounded-md overflow-hidden bg-white">\r
              <details class="group" open>\r
                <summary style="cursor: pointer; padding: 12px 16px; background: #f8fafc; font-weight: 600; display: flex; justify-content: space-between; align-items: center; list-style: none;" class="border-b border-transparent group-open:border-gray-200">\r
                  <span style="color: #0f172a; font-size: 16px;">Extracted Data from PDF</span>\r
                  <svg class="w-5 h-5 text-gray-500 transition-transform duration-200 group-open:rotate-180" style="width: 20px; height: 20px; flex-shrink: 0;" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>\r
                </summary>\r
                <div style="background: #fff; max-height: 400px; overflow-y: auto; display: grid; grid-template-columns: repeat(6, minmax(0, 1fr)); gap: 16px; padding: 16px;">\r
                  @for (item of getExtractedData(); track $index) {\r
                    <div style="display: flex; flex-direction: column; align-items: flex-start; text-align: left;">\r
                      <span style="font-weight: 600; color: #003366; font-size: 13px; margin-bottom: 4px;">{{ item.key }}</span>\r
                      <span style="color: #003366; font-size: 13px;">{{ item.value }}</span>\r
                    </div>\r
                  }\r
                  @if (getExtractedData().length === 0) {\r
                    <div class="w-full text-left p-4 text-gray-500" style="grid-column: 1 / -1;">No data extracted.</div>\r
                  }\r
                </div>\r
              </details>\r
            </div>\r
\r
            <!-- Items Details Table -->\r
            <div class="mb-4 border border-gray-200 rounded-md overflow-hidden bg-white">\r
              <details class="group" open>\r
                <summary style="cursor: pointer; padding: 12px 16px; background: #f8fafc; font-weight: 600; display: flex; justify-content: space-between; align-items: center; list-style: none;" class="border-b border-transparent group-open:border-gray-200">\r
                  <span style="color: #0f172a; font-size: 16px;">Items Details</span>\r
                  <svg class="w-5 h-5 text-gray-500 transition-transform duration-200 group-open:rotate-180" style="width: 20px; height: 20px; flex-shrink: 0;" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>\r
                </summary>\r
                <div class="table-container" style="background: #fff; max-height: 400px; overflow-y: auto;">\r
                  <table class="extracted-table" style="table-layout: auto; font-size: 13px;">\r
                    <thead>\r
                      <tr>\r
                        <th class="header-cell" (click)="toggleItemsSort('shipping_marks')" [class.sort-asc]="itemsSortColumn === 'shipping_marks' && itemsSortDirection === 'asc'" [class.sort-desc]="itemsSortColumn === 'shipping_marks' && itemsSortDirection === 'desc'">\r
                          <div>Marks & Nos/<br>Container No.</div>\r
                        </th>\r
                        <th class="header-cell" (click)="toggleItemsSort('package_count')" [class.sort-asc]="itemsSortColumn === 'package_count' && itemsSortDirection === 'asc'" [class.sort-desc]="itemsSortColumn === 'package_count' && itemsSortDirection === 'desc'">\r
                          <div>No. & Kind<br>of Pkgs</div>\r
                        </th>\r
                        <th class="header-cell" (click)="toggleItemsSort('item_product_description')" [class.sort-asc]="itemsSortColumn === 'item_product_description' && itemsSortDirection === 'asc'" [class.sort-desc]="itemsSortColumn === 'item_product_description' && itemsSortDirection === 'desc'">\r
                          <div>Description of Goods</div>\r
                        </th>\r
                        <th class="header-cell" (click)="toggleItemsSort('hsn_code')" [class.sort-asc]="itemsSortColumn === 'hsn_code' && itemsSortDirection === 'asc'" [class.sort-desc]="itemsSortColumn === 'hsn_code' && itemsSortDirection === 'desc'">\r
                          <div>HSN Code</div>\r
                        </th>\r
                        <th class="header-cell" (click)="toggleItemsSort('net_weight')" [class.sort-asc]="itemsSortColumn === 'net_weight' && itemsSortDirection === 'asc'" [class.sort-desc]="itemsSortColumn === 'net_weight' && itemsSortDirection === 'desc'">\r
                          <div>NET.wt</div>\r
                        </th>\r
                        <th class="header-cell" (click)="toggleItemsSort('quantity')" [class.sort-asc]="itemsSortColumn === 'quantity' && itemsSortDirection === 'asc'" [class.sort-desc]="itemsSortColumn === 'quantity' && itemsSortDirection === 'desc'">\r
                          <div>Quantity<br>In PC'S</div>\r
                        </th>\r
                        <th class="header-cell" style="cursor: default;">\r
                          <div>Unit Rate/ 1 PC<br>in EUR</div>\r
                        </th>\r
                        <th class="header-cell" style="cursor: default;">\r
                          <div>Amount<br>in EUR</div>\r
                        </th>\r
                      </tr>\r
                    </thead>\r
                    <tbody>\r
                      @for (item of getItems(); track $index) {\r
                        <tr class="hover:bg-blue-50 even:bg-slate-50 transition-colors align-top">\r
                          <td class="cell font-semibold">{{ item.shipping_marks || item.container_number || 0 }}</td>\r
                          <td class="cell font-semibold">{{ item.package_count || 0 }} {{ item.package_type || '' }}</td>\r
                          <td class="cell font-semibold">{{ item.item_product_description || 0 }}</td>\r
                          <td class="cell font-bold">{{ item.hsn_code || 0 }}</td>\r
                          <td class="cell font-bold">{{ item.net_weight || 0 }}</td>\r
                          <td class="cell font-bold">{{ item.quantity || 0 }}</td>\r
                          <td class="cell font-semibold">0</td>\r
                          <td class="cell font-semibold">0</td>\r
                        </tr>\r
                      }\r
                      @if (getItems().length === 0) {\r
                        <tr>\r
                          <td colspan="8" class="cell p-6 text-center text-gray-500 font-semibold">0</td>\r
                        </tr>\r
                      }\r
                    </tbody>\r
                  </table>\r
                </div>\r
              </details>\r
            </div>\r
            <div class="flex form-actions-container">\r
              @if (!isLocked) {\r
                <button type="submit" class="btn-primary">Save and Generate Final HBL</button>\r
              }\r
            </div>\r
          </form>\r
\r
          <!-- Generated HBLs -->\r
          @if (isLocked) {\r
            <div class="mt-8">\r
              <h4 class="mb-4 pb-2 border-b">Generated Final HBL</h4>\r
              <p class="tab-subtitle">Final HBL number: <code class="hbl-number-code">{{ primaryDraft?.hbl_number }}</code></p>\r
              <div class="generated-hbl-container">\r
                @if (primaryDraft?.hbl_pdf) {\r
                  <div class="doc-box final-hbl-doc-box" style="max-width: fit-content; gap: 16px;">\r
                    <span class="doc-filename" style="white-space: nowrap; overflow: hidden; text-overflow: ellipsis; max-width: 300px;">\u{1F4C4} {{ primaryDraft.hbl_filename }}</span>\r
                    <button type="button" title="View Full HBL" [disabled]="isHblPreviewLoading()" style="border: none; background: transparent; cursor: pointer; padding: 4px; display: flex; align-items: center; justify-content: center; font-size: 16px;" (click)="viewHblPreview(primaryDraft)">\u{1F441}\uFE0F</button>\r
                    @if (isHblPreviewLoading()) {\r
                      <span class="doc-loading-text">Preparing HBL preview...</span>\r
                    }\r
                  </div>\r
                }\r
              </div>\r
            </div>\r
          }\r
        </div>\r
        </div>\r
      }\r
    </div>\r
\r
    @if (selectedDocUrl) {\r
      <app-document-modal \r
        [isOpen]="true" \r
        [title]="selectedDocName" \r
        [documentUrl]="selectedDocUrl" \r
        [mimeType]="selectedDocMime"\r
        (closed)="closeDoc()">\r
      </app-document-modal>\r
    }\r
\r
    @if (hblPreviewUrl()) {\r
      <app-document-modal\r
        [isOpen]="true"\r
        [title]="hblPreviewName() || 'HBL PDF'"\r
        [documentUrl]="hblPreviewUrl()!"\r
        mimeType="application/pdf"\r
        (closed)="closeHblPreview()">\r
      </app-document-modal>\r
    }`, styles: ['/* src/app/features/logistics/components/hbl-draft/hbl-draft.component.css */\n.tab-subtitle {\n  font-size: 14px;\n  color: #64748b;\n  margin-bottom: 16px;\n}\n.doc-box {\n  border: 1px solid #e2e8f0;\n  border-radius: 8px;\n  padding: 16px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  background: #fff;\n}\n.hbl-draft-card {\n  padding: 0;\n  overflow: hidden;\n}\n.text-ready {\n  color: #15803d;\n}\n.text-draft {\n  color: #f97316;\n}\n.accordion-icon {\n  width: 20px;\n  height: 20px;\n  transition: transform 0.2s;\n}\n.packing-list-select-container {\n  display: flex;\n  gap: 12px;\n  align-items: center;\n  max-width: 550px;\n}\n.packing-list-select {\n  flex: 1;\n  cursor: pointer;\n  height: 48px;\n  min-height: 48px;\n  padding: 8px 16px;\n  font-size: 14px;\n  line-height: 1.5;\n  border-radius: 6px;\n}\n.packing-list-option {\n  padding: 8px;\n}\n.view-pdf-btn {\n  height: 48px;\n  min-height: 48px;\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n  white-space: nowrap;\n  padding: 0 20px;\n  font-size: 14px;\n  border-radius: 6px;\n}\n.divider {\n  border: none;\n  border-top: 1px solid #e2e8f0;\n}\n.form-actions-container {\n  align-items: center;\n}\n.btn-generate-pdf {\n  background-color: #0f172a;\n}\n.hbl-number-code {\n  background: #f1f5f9;\n  padding: 2px 4px;\n  border-radius: 4px;\n}\n.generated-hbl-container {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 16px;\n}\n.final-hbl-doc-box {\n  flex: 1;\n  min-width: 250px;\n  padding: 12px;\n  max-width: 350px;\n}\n.doc-filename {\n  font-weight: 500;\n}\n.doc-loading-text {\n  color: #64748b;\n  font-size: 13px;\n  font-style: italic;\n  white-space: nowrap;\n}\n.extracted-table {\n  border: 1px solid #545454;\n  font-family: "Lato", sans-serif;\n  color: #3f3f3f;\n  width: 100%;\n  table-layout: auto;\n  border-collapse: collapse;\n}\n.extracted-table th,\n.extracted-table td {\n  border: 1px solid #545454;\n  text-align: center;\n}\n.extracted-table .cell {\n  padding: 12px 16px;\n}\n.extracted-table .header-cell {\n  padding: 12px 30px 12px 12px;\n  position: relative;\n  cursor: pointer;\n  background: #f1f5f9;\n}\n.extracted-table .header-cell::before,\n.extracted-table .header-cell::after {\n  content: "";\n  position: absolute;\n  top: 50%;\n  right: 12px;\n  border: 4px solid transparent;\n}\n.extracted-table .header-cell::before {\n  border-bottom-color: #bdbdbd;\n  margin-top: -8px;\n}\n.extracted-table .header-cell::after {\n  border-top-color: #bdbdbd;\n  margin-top: 1px;\n}\n.extracted-table .header-cell.sort-asc::before {\n  border-width: 6px;\n  margin-top: -9px;\n  right: 10px;\n  border-bottom-color: #3f3f3f;\n}\n.extracted-table .header-cell.sort-asc::after {\n  display: none;\n}\n.extracted-table .header-cell.sort-desc::before {\n  display: none;\n}\n.extracted-table .header-cell.sort-desc::after {\n  border-width: 6px;\n  margin-top: -2px;\n  right: 10px;\n  border-top-color: #3f3f3f;\n}\n.extracted-table .header-cell div {\n}\n/*# sourceMappingURL=hbl-draft.component.css.map */\n'] }]
  }], () => [{ type: ToastService }, { type: DocumentExtractionService }], { drafts: [{
    type: Input
  }], expanded: [{
    type: Input
  }], groupColor: [{
    type: Input
  }], groupTitle: [{
    type: Input
  }], generateRequested: [{
    type: Output
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(HblDraftComponent, { className: "HblDraftComponent", filePath: "src/app/features/logistics/components/hbl-draft/hbl-draft.component.ts", lineNumber: 19 });
})();

// node_modules/@angular/cdk/fesm2022/_style-loader-chunk.mjs
var appsWithLoaders = /* @__PURE__ */ new WeakMap();
var _CdkPrivateStyleLoader = class __CdkPrivateStyleLoader {
  _appRef;
  _injector = inject(Injector);
  _environmentInjector = inject(EnvironmentInjector);
  load(loader) {
    const appRef = this._appRef = this._appRef || this._injector.get(ApplicationRef);
    let data = appsWithLoaders.get(appRef);
    if (!data) {
      data = {
        loaders: /* @__PURE__ */ new Set(),
        refs: []
      };
      appsWithLoaders.set(appRef, data);
      appRef.onDestroy(() => {
        appsWithLoaders.get(appRef)?.refs.forEach((ref) => ref.destroy());
        appsWithLoaders.delete(appRef);
      });
    }
    if (!data.loaders.has(loader)) {
      data.loaders.add(loader);
      data.refs.push(createComponent(loader, {
        environmentInjector: this._environmentInjector
      }));
    }
  }
  static \u0275fac = function _CdkPrivateStyleLoader_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || __CdkPrivateStyleLoader)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineService({
    token: __CdkPrivateStyleLoader,
    factory: __CdkPrivateStyleLoader.\u0275fac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(_CdkPrivateStyleLoader, [{
    type: Service
  }], null, null);
})();

// node_modules/@angular/cdk/fesm2022/_shadow-dom-chunk.mjs
var shadowDomIsSupported;
function _supportsShadowDom() {
  if (shadowDomIsSupported == null) {
    const head = typeof document !== "undefined" ? document.head : null;
    shadowDomIsSupported = !!(head && (head.createShadowRoot || head.attachShadow));
  }
  return shadowDomIsSupported;
}
function _getShadowRoot(element) {
  if (_supportsShadowDom()) {
    const rootNode = element.getRootNode ? element.getRootNode() : null;
    if (typeof ShadowRoot !== "undefined" && ShadowRoot && rootNode instanceof ShadowRoot) {
      return rootNode;
    }
  }
  return null;
}
function _getEventTarget(event) {
  if (event.composedPath) {
    try {
      return event.composedPath()[0];
    } catch {
    }
  }
  return event.target;
}

// node_modules/@angular/cdk/fesm2022/_fake-event-detection-chunk.mjs
function isFakeMousedownFromScreenReader(event) {
  return event.buttons === 0 || event.detail === 0;
}
function isFakeTouchstartFromScreenReader(event) {
  const touch = event.touches && event.touches[0] || event.changedTouches && event.changedTouches[0];
  return !!touch && touch.identifier === -1 && (touch.radiusX == null || touch.radiusX === 1) && (touch.radiusY == null || touch.radiusY === 1);
}

// node_modules/@angular/cdk/fesm2022/_element-chunk.mjs
function coerceNumberProperty(value, fallbackValue = 0) {
  if (_isNumberValue(value)) {
    return Number(value);
  }
  return arguments.length === 2 ? fallbackValue : 0;
}
function _isNumberValue(value) {
  return !isNaN(parseFloat(value)) && !isNaN(Number(value));
}
function coerceElement(elementOrRef) {
  return elementOrRef instanceof ElementRef ? elementOrRef.nativeElement : elementOrRef;
}

// node_modules/@angular/cdk/fesm2022/_platform-chunk.mjs
var hasV8BreakIterator;
try {
  hasV8BreakIterator = typeof Intl !== "undefined" && Intl.v8BreakIterator;
} catch {
  hasV8BreakIterator = false;
}
var Platform = class _Platform {
  _platformId = inject(PLATFORM_ID);
  isBrowser = this._platformId ? isPlatformBrowser(this._platformId) : typeof document === "object" && !!document;
  EDGE = this.isBrowser && /(edge)/i.test(navigator.userAgent);
  TRIDENT = this.isBrowser && /(msie|trident)/i.test(navigator.userAgent);
  BLINK = this.isBrowser && !!(window.chrome || hasV8BreakIterator) && typeof CSS !== "undefined" && !this.EDGE && !this.TRIDENT;
  WEBKIT = this.isBrowser && /AppleWebKit/i.test(navigator.userAgent) && !this.BLINK && !this.EDGE && !this.TRIDENT;
  IOS = this.isBrowser && /iPad|iPhone|iPod/.test(navigator.userAgent) && !("MSStream" in window);
  FIREFOX = this.isBrowser && /(firefox|minefield)/i.test(navigator.userAgent);
  ANDROID = this.isBrowser && /android/i.test(navigator.userAgent) && !this.TRIDENT;
  SAFARI = this.isBrowser && /safari/i.test(navigator.userAgent) && this.WEBKIT;
  static \u0275fac = function Platform_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _Platform)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineService({
    token: _Platform,
    factory: _Platform.\u0275fac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Platform, [{
    type: Service
  }], null, null);
})();

// node_modules/@angular/cdk/fesm2022/_directionality-chunk.mjs
var DIR_DOCUMENT = new InjectionToken("cdk-dir-doc", {
  providedIn: "root",
  factory: () => inject(DOCUMENT)
});
var RTL_LOCALE_PATTERN = /^(ar|ckb|dv|he|iw|fa|nqo|ps|sd|ug|ur|yi|.*[-_](Adlm|Arab|Hebr|Nkoo|Rohg|Thaa))(?!.*[-_](Latn|Cyrl)($|-|_))($|-|_)/i;
function _resolveDirectionality(rawValue) {
  const value = rawValue?.toLowerCase() || "";
  if (value === "auto" && typeof navigator !== "undefined" && navigator?.language) {
    return RTL_LOCALE_PATTERN.test(navigator.language) ? "rtl" : "ltr";
  }
  return value === "rtl" ? "rtl" : "ltr";
}
var Directionality = class _Directionality {
  get value() {
    return this.valueSignal();
  }
  valueSignal = signal("ltr", ...ngDevMode ? [{
    debugName: "valueSignal"
  }] : []);
  change = new EventEmitter();
  constructor() {
    const _document = inject(DIR_DOCUMENT, {
      optional: true
    });
    if (_document) {
      const bodyDir = _document.body ? _document.body.dir : null;
      const htmlDir = _document.documentElement ? _document.documentElement.dir : null;
      this.valueSignal.set(_resolveDirectionality(bodyDir || htmlDir || "ltr"));
    }
  }
  ngOnDestroy() {
    this.change.complete();
  }
  static \u0275fac = function Directionality_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _Directionality)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineService({
    token: _Directionality,
    factory: _Directionality.\u0275fac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Directionality, [{
    type: Service
  }], () => [], null);
})();

// node_modules/@angular/cdk/fesm2022/_scrolling-chunk.mjs
var RtlScrollAxisType;
(function(RtlScrollAxisType2) {
  RtlScrollAxisType2[RtlScrollAxisType2["NORMAL"] = 0] = "NORMAL";
  RtlScrollAxisType2[RtlScrollAxisType2["NEGATED"] = 1] = "NEGATED";
  RtlScrollAxisType2[RtlScrollAxisType2["INVERTED"] = 2] = "INVERTED";
})(RtlScrollAxisType || (RtlScrollAxisType = {}));
var rtlScrollAxisType;
var scrollBehaviorSupported;
function supportsScrollBehavior() {
  if (scrollBehaviorSupported == null) {
    if (typeof document !== "object" || !document || typeof Element !== "function" || !Element) {
      scrollBehaviorSupported = false;
      return scrollBehaviorSupported;
    }
    if (document.documentElement?.style && "scrollBehavior" in document.documentElement.style) {
      scrollBehaviorSupported = true;
    } else {
      const scrollToFunction = Element.prototype.scrollTo;
      if (scrollToFunction) {
        scrollBehaviorSupported = !/\{\s*\[native code\]\s*\}/.test(scrollToFunction.toString());
      } else {
        scrollBehaviorSupported = false;
      }
    }
  }
  return scrollBehaviorSupported;
}
function getRtlScrollAxisType() {
  if (typeof document !== "object" || !document) {
    return RtlScrollAxisType.NORMAL;
  }
  if (rtlScrollAxisType == null) {
    const scrollContainer = document.createElement("div");
    const containerStyle = scrollContainer.style;
    scrollContainer.dir = "rtl";
    containerStyle.width = "1px";
    containerStyle.overflow = "auto";
    containerStyle.visibility = "hidden";
    containerStyle.pointerEvents = "none";
    containerStyle.position = "absolute";
    const content = document.createElement("div");
    const contentStyle = content.style;
    contentStyle.width = "2px";
    contentStyle.height = "1px";
    scrollContainer.appendChild(content);
    document.body.appendChild(scrollContainer);
    rtlScrollAxisType = RtlScrollAxisType.NORMAL;
    if (scrollContainer.scrollLeft === 0) {
      scrollContainer.scrollLeft = 1;
      rtlScrollAxisType = scrollContainer.scrollLeft === 0 ? RtlScrollAxisType.NEGATED : RtlScrollAxisType.INVERTED;
    }
    scrollContainer.remove();
  }
  return rtlScrollAxisType;
}

// node_modules/@angular/cdk/fesm2022/_data-source-chunk.mjs
var DataSource = class {
};
function isDataSource(value) {
  return value && typeof value.connect === "function" && !(value instanceof ConnectableObservable);
}

// node_modules/@angular/cdk/fesm2022/_recycle-view-repeater-strategy-chunk.mjs
var ArrayDataSource = class extends DataSource {
  _data;
  constructor(_data) {
    super();
    this._data = _data;
  }
  connect() {
    return isObservable(this._data) ? this._data : of(this._data);
  }
  disconnect() {
  }
};
var _ViewRepeaterOperation;
(function(_ViewRepeaterOperation2) {
  _ViewRepeaterOperation2[_ViewRepeaterOperation2["REPLACED"] = 0] = "REPLACED";
  _ViewRepeaterOperation2[_ViewRepeaterOperation2["INSERTED"] = 1] = "INSERTED";
  _ViewRepeaterOperation2[_ViewRepeaterOperation2["MOVED"] = 2] = "MOVED";
  _ViewRepeaterOperation2[_ViewRepeaterOperation2["REMOVED"] = 3] = "REMOVED";
})(_ViewRepeaterOperation || (_ViewRepeaterOperation = {}));
var _RecycleViewRepeaterStrategy = class {
  viewCacheSize = 20;
  _viewCache = [];
  applyChanges(changes, viewContainerRef, itemContextFactory, itemValueResolver, itemViewChanged) {
    changes.forEachOperation((record, adjustedPreviousIndex, currentIndex) => {
      let view;
      let operation;
      if (record.previousIndex == null) {
        const viewArgsFactory = () => itemContextFactory(record, adjustedPreviousIndex, currentIndex);
        view = this._insertView(viewArgsFactory, currentIndex, viewContainerRef, itemValueResolver(record));
        operation = view ? _ViewRepeaterOperation.INSERTED : _ViewRepeaterOperation.REPLACED;
      } else if (currentIndex == null) {
        this._detachAndCacheView(adjustedPreviousIndex, viewContainerRef);
        operation = _ViewRepeaterOperation.REMOVED;
      } else {
        view = this._moveView(adjustedPreviousIndex, currentIndex, viewContainerRef, itemValueResolver(record));
        operation = _ViewRepeaterOperation.MOVED;
      }
      if (itemViewChanged) {
        itemViewChanged({
          context: view?.context,
          operation,
          record
        });
      }
    });
  }
  detach() {
    for (const view of this._viewCache) {
      view.destroy();
    }
    this._viewCache = [];
  }
  _insertView(viewArgsFactory, currentIndex, viewContainerRef, value) {
    const cachedView = this._insertViewFromCache(currentIndex, viewContainerRef);
    if (cachedView) {
      cachedView.context.$implicit = value;
      return void 0;
    }
    const viewArgs = viewArgsFactory();
    return viewContainerRef.createEmbeddedView(viewArgs.templateRef, viewArgs.context, viewArgs.index);
  }
  _detachAndCacheView(index, viewContainerRef) {
    const detachedView = viewContainerRef.detach(index);
    this._maybeCacheView(detachedView, viewContainerRef);
  }
  _moveView(adjustedPreviousIndex, currentIndex, viewContainerRef, value) {
    const view = viewContainerRef.get(adjustedPreviousIndex);
    viewContainerRef.move(view, currentIndex);
    view.context.$implicit = value;
    return view;
  }
  _maybeCacheView(view, viewContainerRef) {
    if (this._viewCache.length < this.viewCacheSize) {
      this._viewCache.push(view);
    } else {
      const index = viewContainerRef.indexOf(view);
      if (index === -1) {
        view.destroy();
      } else {
        viewContainerRef.remove(index);
      }
    }
  }
  _insertViewFromCache(index, viewContainerRef) {
    const cachedView = this._viewCache.pop();
    if (cachedView) {
      viewContainerRef.insert(cachedView, index);
    }
    return cachedView || null;
  }
};

// node_modules/@angular/cdk/fesm2022/bidi.mjs
var Dir = class _Dir {
  _isInitialized = false;
  _rawDir = "";
  change = new EventEmitter();
  get dir() {
    return this.valueSignal();
  }
  set dir(value) {
    const previousValue = this.valueSignal();
    this.valueSignal.set(_resolveDirectionality(value));
    this._rawDir = value;
    if (previousValue !== this.valueSignal() && this._isInitialized) {
      this.change.emit(this.valueSignal());
    }
  }
  get value() {
    return this.dir;
  }
  valueSignal = signal("ltr", ...ngDevMode ? [{
    debugName: "valueSignal"
  }] : []);
  ngAfterContentInit() {
    this._isInitialized = true;
  }
  ngOnDestroy() {
    this.change.complete();
  }
  static \u0275fac = function Dir_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _Dir)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _Dir,
    selectors: [["", "dir", ""]],
    hostVars: 1,
    hostBindings: function Dir_HostBindings(rf, ctx) {
      if (rf & 2) {
        \u0275\u0275attribute("dir", ctx._rawDir);
      }
    },
    inputs: {
      dir: "dir"
    },
    outputs: {
      change: "dirChange"
    },
    exportAs: ["dir"],
    features: [\u0275\u0275ProvidersFeature([{
      provide: Directionality,
      useExisting: _Dir
    }])]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Dir, [{
    type: Directive,
    args: [{
      selector: "[dir]",
      providers: [{
        provide: Directionality,
        useExisting: Dir
      }],
      host: {
        "[attr.dir]": "_rawDir"
      },
      exportAs: "dir"
    }]
  }], null, {
    change: [{
      type: Output,
      args: ["dirChange"]
    }],
    dir: [{
      type: Input
    }]
  });
})();
var BidiModule = class _BidiModule {
  static \u0275fac = function BidiModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _BidiModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _BidiModule,
    imports: [Dir],
    exports: [Dir]
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({});
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BidiModule, [{
    type: NgModule,
    args: [{
      imports: [Dir],
      exports: [Dir]
    }]
  }], null, null);
})();

// node_modules/@angular/cdk/fesm2022/scrolling.mjs
var _c0 = ["contentWrapper"];
var _c1 = ["*"];
var VIRTUAL_SCROLL_STRATEGY = new InjectionToken("VIRTUAL_SCROLL_STRATEGY");
var FixedSizeVirtualScrollStrategy = class {
  _scrolledIndexChange = new Subject();
  scrolledIndexChange = this._scrolledIndexChange.pipe(distinctUntilChanged());
  _viewport = null;
  _itemSize;
  _minBufferPx;
  _maxBufferPx;
  constructor(itemSize, minBufferPx, maxBufferPx) {
    this._itemSize = itemSize;
    this._minBufferPx = minBufferPx;
    this._maxBufferPx = maxBufferPx;
  }
  attach(viewport) {
    this._viewport = viewport;
    this._updateTotalContentSize();
    this._updateRenderedRange();
  }
  detach() {
    this._scrolledIndexChange.complete();
    this._viewport = null;
  }
  updateItemAndBufferSize(itemSize, minBufferPx, maxBufferPx) {
    if (maxBufferPx < minBufferPx && (typeof ngDevMode === "undefined" || ngDevMode)) {
      throw Error("CDK virtual scroll: maxBufferPx must be greater than or equal to minBufferPx");
    }
    this._itemSize = itemSize;
    this._minBufferPx = minBufferPx;
    this._maxBufferPx = maxBufferPx;
    this._updateTotalContentSize();
    this._updateRenderedRange();
  }
  onContentScrolled() {
    this._updateRenderedRange();
  }
  onDataLengthChanged() {
    this._updateTotalContentSize();
    this._updateRenderedRange();
  }
  onContentRendered() {
  }
  onRenderedOffsetChanged() {
  }
  scrollToIndex(index, behavior) {
    if (this._viewport) {
      this._viewport.scrollToOffset(index * this._itemSize, behavior);
    }
  }
  _updateTotalContentSize() {
    if (!this._viewport) {
      return;
    }
    this._viewport.setTotalContentSize(this._viewport.getDataLength() * this._itemSize);
  }
  _updateRenderedRange() {
    if (!this._viewport) {
      return;
    }
    const renderedRange = this._viewport.getRenderedRange();
    const newRange = {
      start: renderedRange.start,
      end: renderedRange.end
    };
    const viewportSize = this._viewport.getViewportSize();
    const dataLength = this._viewport.getDataLength();
    let scrollOffset = this._viewport.measureScrollOffset();
    let firstVisibleIndex = this._itemSize > 0 ? scrollOffset / this._itemSize : 0;
    if (newRange.end > dataLength) {
      const maxVisibleItems = Math.ceil(viewportSize / this._itemSize);
      const newVisibleIndex = Math.max(0, Math.min(firstVisibleIndex, dataLength - maxVisibleItems));
      if (firstVisibleIndex != newVisibleIndex) {
        firstVisibleIndex = newVisibleIndex;
        scrollOffset = newVisibleIndex * this._itemSize;
        newRange.start = Math.floor(firstVisibleIndex);
      }
      newRange.end = Math.max(0, Math.min(dataLength, newRange.start + maxVisibleItems));
    }
    const startBuffer = scrollOffset - newRange.start * this._itemSize;
    if (startBuffer < this._minBufferPx && newRange.start != 0) {
      const expandStart = Math.ceil((this._maxBufferPx - startBuffer) / this._itemSize);
      newRange.start = Math.max(0, newRange.start - expandStart);
      newRange.end = Math.min(dataLength, Math.ceil(firstVisibleIndex + (viewportSize + this._minBufferPx) / this._itemSize));
    } else {
      const endBuffer = newRange.end * this._itemSize - (scrollOffset + viewportSize);
      if (endBuffer < this._minBufferPx && newRange.end != dataLength) {
        const expandEnd = Math.ceil((this._maxBufferPx - endBuffer) / this._itemSize);
        if (expandEnd > 0) {
          newRange.end = Math.min(dataLength, newRange.end + expandEnd);
          newRange.start = Math.max(0, Math.floor(firstVisibleIndex - this._minBufferPx / this._itemSize));
        }
      }
    }
    this._viewport.setRenderedRange(newRange);
    this._viewport.setRenderedContentOffset(Math.round(this._itemSize * newRange.start));
    this._scrolledIndexChange.next(Math.floor(firstVisibleIndex));
  }
};
function _fixedSizeVirtualScrollStrategyFactory(fixedSizeDir) {
  return fixedSizeDir._scrollStrategy;
}
var CdkFixedSizeVirtualScroll = class _CdkFixedSizeVirtualScroll {
  get itemSize() {
    return this._itemSize;
  }
  set itemSize(value) {
    this._itemSize = coerceNumberProperty(value);
  }
  _itemSize = 20;
  get minBufferPx() {
    return this._minBufferPx;
  }
  set minBufferPx(value) {
    this._minBufferPx = coerceNumberProperty(value);
  }
  _minBufferPx = 100;
  get maxBufferPx() {
    return this._maxBufferPx;
  }
  set maxBufferPx(value) {
    this._maxBufferPx = coerceNumberProperty(value);
  }
  _maxBufferPx = 200;
  _scrollStrategy = new FixedSizeVirtualScrollStrategy(this.itemSize, this.minBufferPx, this.maxBufferPx);
  ngOnChanges() {
    this._scrollStrategy.updateItemAndBufferSize(this.itemSize, this.minBufferPx, this.maxBufferPx);
  }
  static \u0275fac = function CdkFixedSizeVirtualScroll_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CdkFixedSizeVirtualScroll)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _CdkFixedSizeVirtualScroll,
    selectors: [["cdk-virtual-scroll-viewport", "itemSize", ""]],
    inputs: {
      itemSize: "itemSize",
      minBufferPx: "minBufferPx",
      maxBufferPx: "maxBufferPx"
    },
    features: [\u0275\u0275ProvidersFeature([{
      provide: VIRTUAL_SCROLL_STRATEGY,
      useFactory: _fixedSizeVirtualScrollStrategyFactory,
      deps: [forwardRef(() => _CdkFixedSizeVirtualScroll)]
    }]), \u0275\u0275NgOnChangesFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CdkFixedSizeVirtualScroll, [{
    type: Directive,
    args: [{
      selector: "cdk-virtual-scroll-viewport[itemSize]",
      providers: [{
        provide: VIRTUAL_SCROLL_STRATEGY,
        useFactory: _fixedSizeVirtualScrollStrategyFactory,
        deps: [forwardRef(() => CdkFixedSizeVirtualScroll)]
      }]
    }]
  }], null, {
    itemSize: [{
      type: Input
    }],
    minBufferPx: [{
      type: Input
    }],
    maxBufferPx: [{
      type: Input
    }]
  });
})();
var DEFAULT_SCROLL_TIME = 20;
var ScrollDispatcher = class _ScrollDispatcher {
  _ngZone = inject(NgZone);
  _platform = inject(Platform);
  _renderer = inject(RendererFactory2).createRenderer(null, null);
  _cleanupGlobalListener;
  _scrolled = new Subject();
  _scrolledCount = 0;
  scrollContainers = /* @__PURE__ */ new Map();
  register(target) {
    if (!this.scrollContainers.has(target)) {
      this.scrollContainers.set(target, target.elementScrolled().subscribe(() => this._scrolled.next(target)));
    }
  }
  deregister(target) {
    const ref = this.scrollContainers.get(target);
    if (ref) {
      ref.unsubscribe();
      this.scrollContainers.delete(target);
    }
  }
  scrolled(auditTimeInMs = DEFAULT_SCROLL_TIME) {
    if (!this._platform.isBrowser) {
      return of();
    }
    return new Observable((observer) => {
      if (!this._cleanupGlobalListener) {
        this._cleanupGlobalListener = this._ngZone.runOutsideAngular(() => this._renderer.listen("document", "scroll", () => this._scrolled.next()));
      }
      const subscription = auditTimeInMs > 0 ? this._scrolled.pipe(auditTime(auditTimeInMs)).subscribe(observer) : this._scrolled.subscribe(observer);
      this._scrolledCount++;
      return () => {
        subscription.unsubscribe();
        this._scrolledCount--;
        if (!this._scrolledCount) {
          this._cleanupGlobalListener?.();
          this._cleanupGlobalListener = void 0;
        }
      };
    });
  }
  ngOnDestroy() {
    this._cleanupGlobalListener?.();
    this._cleanupGlobalListener = void 0;
    this.scrollContainers.forEach((_, container) => this.deregister(container));
    this._scrolled.complete();
  }
  ancestorScrolled(elementOrElementRef, auditTimeInMs) {
    const ancestors = this.getAncestorScrollContainers(elementOrElementRef);
    return this.scrolled(auditTimeInMs).pipe(filter((target) => !target || ancestors.indexOf(target) > -1));
  }
  getAncestorScrollContainers(elementOrElementRef) {
    const scrollingContainers = [];
    this.scrollContainers.forEach((_, target) => {
      if (this._targetContainsElement(target, elementOrElementRef)) {
        scrollingContainers.push(target);
      }
    });
    return scrollingContainers;
  }
  _targetContainsElement(scrollable, elementOrElementRef) {
    let element = coerceElement(elementOrElementRef);
    let targetElement = scrollable.getElementRef().nativeElement;
    do {
      if (element == targetElement) {
        return true;
      }
    } while (element = element.parentElement);
    return false;
  }
  static \u0275fac = function ScrollDispatcher_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ScrollDispatcher)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineService({
    token: _ScrollDispatcher,
    factory: _ScrollDispatcher.\u0275fac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ScrollDispatcher, [{
    type: Service
  }], null, null);
})();
var CdkScrollable = class _CdkScrollable {
  elementRef = inject(ElementRef);
  scrollDispatcher = inject(ScrollDispatcher);
  ngZone = inject(NgZone);
  dir = inject(Directionality, {
    optional: true
  });
  _scrollElement = this.elementRef.nativeElement;
  _destroyed = new Subject();
  _renderer = inject(Renderer2);
  _cleanupScroll;
  _elementScrolled = new Subject();
  ngOnInit() {
    this._cleanupScroll = this.ngZone.runOutsideAngular(() => this._renderer.listen(this._scrollElement, "scroll", (event) => this._elementScrolled.next(event)));
    this.scrollDispatcher.register(this);
  }
  ngOnDestroy() {
    this._cleanupScroll?.();
    this._elementScrolled.complete();
    this.scrollDispatcher.deregister(this);
    this._destroyed.next();
    this._destroyed.complete();
  }
  elementScrolled() {
    return this._elementScrolled;
  }
  getElementRef() {
    return this.elementRef;
  }
  scrollTo(options) {
    const el = this.elementRef.nativeElement;
    const isRtl = this.dir && this.dir.value == "rtl";
    if (options.left == null) {
      options.left = isRtl ? options.end : options.start;
    }
    if (options.right == null) {
      options.right = isRtl ? options.start : options.end;
    }
    if (options.bottom != null) {
      options.top = el.scrollHeight - el.clientHeight - options.bottom;
    }
    if (isRtl && getRtlScrollAxisType() != RtlScrollAxisType.NORMAL) {
      if (options.left != null) {
        options.right = el.scrollWidth - el.clientWidth - options.left;
      }
      if (getRtlScrollAxisType() == RtlScrollAxisType.INVERTED) {
        options.left = options.right;
      } else if (getRtlScrollAxisType() == RtlScrollAxisType.NEGATED) {
        options.left = options.right ? -options.right : options.right;
      }
    } else {
      if (options.right != null) {
        options.left = el.scrollWidth - el.clientWidth - options.right;
      }
    }
    this._applyScrollToOptions(options);
  }
  _applyScrollToOptions(options) {
    const el = this.elementRef.nativeElement;
    if (supportsScrollBehavior()) {
      el.scrollTo(options);
    } else {
      if (options.top != null) {
        el.scrollTop = options.top;
      }
      if (options.left != null) {
        el.scrollLeft = options.left;
      }
    }
  }
  measureScrollOffset(from) {
    const LEFT = "left";
    const RIGHT = "right";
    const el = this.elementRef.nativeElement;
    if (from == "top") {
      return el.scrollTop;
    }
    if (from == "bottom") {
      return el.scrollHeight - el.clientHeight - el.scrollTop;
    }
    const isRtl = this.dir && this.dir.value == "rtl";
    if (from == "start") {
      from = isRtl ? RIGHT : LEFT;
    } else if (from == "end") {
      from = isRtl ? LEFT : RIGHT;
    }
    if (isRtl && getRtlScrollAxisType() == RtlScrollAxisType.INVERTED) {
      if (from == LEFT) {
        return el.scrollWidth - el.clientWidth - el.scrollLeft;
      } else {
        return el.scrollLeft;
      }
    } else if (isRtl && getRtlScrollAxisType() == RtlScrollAxisType.NEGATED) {
      if (from == LEFT) {
        return el.scrollLeft + el.scrollWidth - el.clientWidth;
      } else {
        return -el.scrollLeft;
      }
    } else {
      if (from == LEFT) {
        return el.scrollLeft;
      } else {
        return el.scrollWidth - el.clientWidth - el.scrollLeft;
      }
    }
  }
  static \u0275fac = function CdkScrollable_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CdkScrollable)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _CdkScrollable,
    selectors: [["", "cdk-scrollable", ""], ["", "cdkScrollable", ""]]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CdkScrollable, [{
    type: Directive,
    args: [{
      selector: "[cdk-scrollable], [cdkScrollable]"
    }]
  }], null, null);
})();
var DEFAULT_RESIZE_TIME = 20;
var ViewportRuler = class _ViewportRuler {
  _platform = inject(Platform);
  _listeners;
  _viewportSize = null;
  _change = new Subject();
  _document = inject(DOCUMENT);
  constructor() {
    const ngZone = inject(NgZone);
    const renderer = inject(RendererFactory2).createRenderer(null, null);
    ngZone.runOutsideAngular(() => {
      if (this._platform.isBrowser) {
        const changeListener = (event) => this._change.next(event);
        this._listeners = [renderer.listen("window", "resize", changeListener), renderer.listen("window", "orientationchange", changeListener)];
      }
      this.change().subscribe(() => this._viewportSize = null);
    });
  }
  ngOnDestroy() {
    this._listeners?.forEach((cleanup) => cleanup());
    this._change.complete();
  }
  getViewportSize() {
    if (!this._viewportSize) {
      this._updateViewportSize();
    }
    const output = {
      width: this._viewportSize.width,
      height: this._viewportSize.height
    };
    if (!this._platform.isBrowser) {
      this._viewportSize = null;
    }
    return output;
  }
  getViewportRect() {
    const scrollPosition = this.getViewportScrollPosition();
    const {
      width,
      height
    } = this.getViewportSize();
    return {
      top: scrollPosition.top,
      left: scrollPosition.left,
      bottom: scrollPosition.top + height,
      right: scrollPosition.left + width,
      height,
      width
    };
  }
  getViewportScrollPosition() {
    if (!this._platform.isBrowser) {
      return {
        top: 0,
        left: 0
      };
    }
    const document2 = this._document;
    const window2 = this._getWindow();
    const documentElement = document2.documentElement;
    const documentRect = documentElement.getBoundingClientRect();
    const top = -documentRect.top || document2.body?.scrollTop || window2.scrollY || documentElement.scrollTop || 0;
    const left = -documentRect.left || document2.body?.scrollLeft || window2.scrollX || documentElement.scrollLeft || 0;
    return {
      top,
      left
    };
  }
  change(throttleTime = DEFAULT_RESIZE_TIME) {
    return throttleTime > 0 ? this._change.pipe(auditTime(throttleTime)) : this._change;
  }
  _getWindow() {
    return this._document.defaultView || window;
  }
  _updateViewportSize() {
    const window2 = this._getWindow();
    this._viewportSize = this._platform.isBrowser ? {
      width: window2.innerWidth,
      height: window2.innerHeight
    } : {
      width: 0,
      height: 0
    };
  }
  static \u0275fac = function ViewportRuler_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ViewportRuler)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineService({
    token: _ViewportRuler,
    factory: _ViewportRuler.\u0275fac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ViewportRuler, [{
    type: Service
  }], () => [], null);
})();
var VIRTUAL_SCROLLABLE = new InjectionToken("VIRTUAL_SCROLLABLE");
var CdkVirtualScrollable = class _CdkVirtualScrollable extends CdkScrollable {
  measureViewportSize(orientation) {
    const viewportEl = this.elementRef.nativeElement;
    return orientation === "horizontal" ? viewportEl.clientWidth : viewportEl.clientHeight;
  }
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275CdkVirtualScrollable_BaseFactory;
    return function CdkVirtualScrollable_Factory(__ngFactoryType__) {
      return (\u0275CdkVirtualScrollable_BaseFactory || (\u0275CdkVirtualScrollable_BaseFactory = \u0275\u0275getInheritedFactory(_CdkVirtualScrollable)))(__ngFactoryType__ || _CdkVirtualScrollable);
    };
  })();
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _CdkVirtualScrollable,
    features: [\u0275\u0275InheritDefinitionFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CdkVirtualScrollable, [{
    type: Directive
  }], null, null);
})();
function rangesEqual(r1, r2) {
  return r1.start == r2.start && r1.end == r2.end;
}
var SCROLL_SCHEDULER = typeof requestAnimationFrame !== "undefined" ? animationFrameScheduler : asapScheduler;
var CDK_VIRTUAL_SCROLL_VIEWPORT = new InjectionToken("CDK_VIRTUAL_SCROLL_VIEWPORT");
var CdkVirtualScrollViewport = class _CdkVirtualScrollViewport extends CdkVirtualScrollable {
  elementRef = inject(ElementRef);
  _changeDetectorRef = inject(ChangeDetectorRef);
  _scrollStrategy = inject(VIRTUAL_SCROLL_STRATEGY, {
    optional: true
  });
  scrollable = inject(VIRTUAL_SCROLLABLE, {
    optional: true
  });
  _platform = inject(Platform);
  _detachedSubject = new Subject();
  _renderedRangeSubject = new Subject();
  _renderedContentOffsetSubject = new Subject();
  get orientation() {
    return this._orientation;
  }
  set orientation(orientation) {
    if (this._orientation !== orientation) {
      this._orientation = orientation;
      this._calculateSpacerSize();
    }
  }
  _orientation = "vertical";
  appendOnly = false;
  scrolledIndexChange = new Observable((observer) => this._scrollStrategy.scrolledIndexChange.subscribe((index) => Promise.resolve().then(() => this.ngZone.run(() => observer.next(index)))));
  _contentWrapper;
  renderedRangeStream = this._renderedRangeSubject;
  renderedContentOffset = this._renderedContentOffsetSubject.pipe(filter((offset) => offset !== null), distinctUntilChanged());
  _totalContentSize = 0;
  _totalContentWidth = signal("", ...ngDevMode ? [{
    debugName: "_totalContentWidth"
  }] : []);
  _totalContentHeight = signal("", ...ngDevMode ? [{
    debugName: "_totalContentHeight"
  }] : []);
  _renderedContentTransform;
  _renderedRange = {
    start: 0,
    end: 0
  };
  _dataLength = 0;
  _viewportSize = 0;
  _forOf = null;
  _renderedContentOffset = 0;
  _renderedContentOffsetNeedsRewrite = false;
  _changeDetectionNeeded = signal(false, ...ngDevMode ? [{
    debugName: "_changeDetectionNeeded"
  }] : []);
  _runAfterChangeDetection = [];
  _viewportChanges = Subscription.EMPTY;
  _injector = inject(Injector);
  _isDestroyed = false;
  constructor() {
    super();
    const viewportRuler = inject(ViewportRuler);
    if (!this._scrollStrategy && (typeof ngDevMode === "undefined" || ngDevMode)) {
      throw Error('Error: cdk-virtual-scroll-viewport requires the "itemSize" property to be set.');
    }
    this._viewportChanges = viewportRuler.change().subscribe(() => {
      this.checkViewportSize();
    });
    if (!this.scrollable) {
      this.elementRef.nativeElement.classList.add("cdk-virtual-scrollable");
      this.scrollable = this;
    }
    const ref = effect(() => {
      if (this._changeDetectionNeeded()) {
        this._doChangeDetection();
      }
    }, __spreadProps(__spreadValues({}, ngDevMode ? {
      debugName: "ref"
    } : {}), {
      injector: inject(ApplicationRef).injector
    }));
    inject(DestroyRef).onDestroy(() => void ref.destroy());
  }
  ngOnInit() {
    if (!this._platform.isBrowser) {
      return;
    }
    if (this.scrollable === this) {
      super.ngOnInit();
    }
    this.ngZone.runOutsideAngular(() => Promise.resolve().then(() => {
      this._measureViewportSize();
      this._scrollStrategy.attach(this);
      this.scrollable.elementScrolled().pipe(startWith(null), auditTime(0, SCROLL_SCHEDULER), takeUntil(this._destroyed)).subscribe(() => this._scrollStrategy.onContentScrolled());
      this._markChangeDetectionNeeded();
    }));
  }
  ngOnDestroy() {
    this.detach();
    this._scrollStrategy.detach();
    this._renderedRangeSubject.complete();
    this._detachedSubject.complete();
    this._viewportChanges.unsubscribe();
    this._isDestroyed = true;
    super.ngOnDestroy();
  }
  attach(forOf) {
    if (this._forOf && (typeof ngDevMode === "undefined" || ngDevMode)) {
      throw Error("CdkVirtualScrollViewport is already attached.");
    }
    this.ngZone.runOutsideAngular(() => {
      this._forOf = forOf;
      this._forOf.dataStream.pipe(takeUntil(this._detachedSubject)).subscribe((data) => {
        const newLength = data.length;
        if (newLength !== this._dataLength) {
          this._dataLength = newLength;
          this._scrollStrategy.onDataLengthChanged();
        }
        this._doChangeDetection();
      });
    });
  }
  detach() {
    this._forOf = null;
    this._detachedSubject.next();
  }
  getDataLength() {
    return this._dataLength;
  }
  getViewportSize() {
    return this._viewportSize;
  }
  getRenderedRange() {
    return this._renderedRange;
  }
  measureBoundingClientRectWithScrollOffset(from) {
    return this.getElementRef().nativeElement.getBoundingClientRect()[from];
  }
  setTotalContentSize(size) {
    if (this._totalContentSize !== size) {
      this._totalContentSize = size;
      this._calculateSpacerSize();
      this._markChangeDetectionNeeded();
    }
  }
  setRenderedRange(range) {
    if (!rangesEqual(this._renderedRange, range)) {
      if (this.appendOnly) {
        range = {
          start: 0,
          end: Math.max(this._renderedRange.end, range.end)
        };
      }
      this._renderedRangeSubject.next(this._renderedRange = range);
      this._markChangeDetectionNeeded(() => this._scrollStrategy.onContentRendered());
    }
  }
  getOffsetToRenderedContentStart() {
    return this._renderedContentOffsetNeedsRewrite ? null : this._renderedContentOffset;
  }
  setRenderedContentOffset(offset, to = "to-start") {
    offset = this.appendOnly && to === "to-start" ? 0 : offset;
    const isRtl = this.dir && this.dir.value == "rtl";
    const isHorizontal = this.orientation == "horizontal";
    const axis = isHorizontal ? "X" : "Y";
    const axisDirection = isHorizontal && isRtl ? -1 : 1;
    let transform = `translate${axis}(${Number(axisDirection * offset)}px)`;
    this._renderedContentOffset = offset;
    if (to === "to-end") {
      transform += ` translate${axis}(-100%)`;
      this._renderedContentOffsetNeedsRewrite = true;
    }
    if (this._renderedContentTransform != transform) {
      this._renderedContentTransform = transform;
      this._markChangeDetectionNeeded(() => {
        if (this._renderedContentOffsetNeedsRewrite) {
          this._renderedContentOffset -= this.measureRenderedContentSize();
          this._renderedContentOffsetNeedsRewrite = false;
          this.setRenderedContentOffset(this._renderedContentOffset);
        } else {
          this._scrollStrategy.onRenderedOffsetChanged();
        }
      });
    }
  }
  scrollToOffset(offset, behavior = "auto") {
    const options = {
      behavior
    };
    if (this.orientation === "horizontal") {
      options.start = offset;
    } else {
      options.top = offset;
    }
    this.scrollable.scrollTo(options);
  }
  scrollToIndex(index, behavior = "auto") {
    this._scrollStrategy.scrollToIndex(index, behavior);
  }
  measureScrollOffset(from) {
    let measureScrollOffset;
    if (this.scrollable == this) {
      measureScrollOffset = (_from) => super.measureScrollOffset(_from);
    } else {
      measureScrollOffset = (_from) => this.scrollable.measureScrollOffset(_from);
    }
    return Math.max(0, measureScrollOffset(from ?? (this.orientation === "horizontal" ? "start" : "top")) - this.measureViewportOffset());
  }
  measureViewportOffset(from) {
    let fromRect;
    const LEFT = "left";
    const RIGHT = "right";
    const isRtl = this.dir?.value == "rtl";
    if (from == "start") {
      fromRect = isRtl ? RIGHT : LEFT;
    } else if (from == "end") {
      fromRect = isRtl ? LEFT : RIGHT;
    } else if (from) {
      fromRect = from;
    } else {
      fromRect = this.orientation === "horizontal" ? "left" : "top";
    }
    const scrollerClientRect = this.scrollable.measureBoundingClientRectWithScrollOffset(fromRect);
    const viewportClientRect = this.elementRef.nativeElement.getBoundingClientRect()[fromRect];
    return viewportClientRect - scrollerClientRect;
  }
  measureRenderedContentSize() {
    const contentEl = this._contentWrapper.nativeElement;
    return this.orientation === "horizontal" ? contentEl.offsetWidth : contentEl.offsetHeight;
  }
  measureRangeSize(range) {
    if (!this._forOf) {
      return 0;
    }
    return this._forOf.measureRangeSize(range, this.orientation);
  }
  checkViewportSize() {
    this._measureViewportSize();
    this._scrollStrategy.onDataLengthChanged();
  }
  _measureViewportSize() {
    this._viewportSize = this.scrollable.measureViewportSize(this.orientation);
  }
  _markChangeDetectionNeeded(runAfter) {
    if (runAfter) {
      this._runAfterChangeDetection.push(runAfter);
    }
    if (untracked(this._changeDetectionNeeded)) {
      return;
    }
    this.ngZone.runOutsideAngular(() => {
      Promise.resolve().then(() => {
        this.ngZone.run(() => {
          this._changeDetectionNeeded.set(true);
        });
      });
    });
  }
  _doChangeDetection() {
    if (this._isDestroyed) {
      return;
    }
    this.ngZone.run(() => {
      this._changeDetectorRef.markForCheck();
      this._contentWrapper.nativeElement.style.transform = this._renderedContentTransform;
      this._renderedContentOffsetSubject.next(this.getOffsetToRenderedContentStart());
      afterNextRender(() => {
        this._changeDetectionNeeded.set(false);
        const runAfterChangeDetection = this._runAfterChangeDetection;
        this._runAfterChangeDetection = [];
        for (const fn of runAfterChangeDetection) {
          fn();
        }
      }, {
        injector: this._injector
      });
    });
  }
  _calculateSpacerSize() {
    this._totalContentHeight.set(this.orientation === "horizontal" ? "" : `${this._totalContentSize}px`);
    this._totalContentWidth.set(this.orientation === "horizontal" ? `${this._totalContentSize}px` : "");
  }
  static \u0275fac = function CdkVirtualScrollViewport_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CdkVirtualScrollViewport)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _CdkVirtualScrollViewport,
    selectors: [["cdk-virtual-scroll-viewport"]],
    viewQuery: function CdkVirtualScrollViewport_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuery(_c0, 7);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx._contentWrapper = _t.first);
      }
    },
    hostAttrs: [1, "cdk-virtual-scroll-viewport"],
    hostVars: 4,
    hostBindings: function CdkVirtualScrollViewport_HostBindings(rf, ctx) {
      if (rf & 2) {
        \u0275\u0275classProp("cdk-virtual-scroll-orientation-horizontal", ctx.orientation === "horizontal")("cdk-virtual-scroll-orientation-vertical", ctx.orientation !== "horizontal");
      }
    },
    inputs: {
      orientation: "orientation",
      appendOnly: [2, "appendOnly", "appendOnly", booleanAttribute]
    },
    outputs: {
      scrolledIndexChange: "scrolledIndexChange"
    },
    features: [\u0275\u0275ProvidersFeature([{
      provide: CdkScrollable,
      useFactory: () => inject(VIRTUAL_SCROLLABLE, {
        optional: true
      }) || inject(_CdkVirtualScrollViewport)
    }, {
      provide: CDK_VIRTUAL_SCROLL_VIEWPORT,
      useExisting: _CdkVirtualScrollViewport
    }]), \u0275\u0275InheritDefinitionFeature],
    ngContentSelectors: _c1,
    decls: 4,
    vars: 4,
    consts: [["contentWrapper", ""], [1, "cdk-virtual-scroll-content-wrapper"], [1, "cdk-virtual-scroll-spacer"]],
    template: function CdkVirtualScrollViewport_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef();
        \u0275\u0275domElementStart(0, "div", 1, 0);
        \u0275\u0275projection(2);
        \u0275\u0275domElementEnd();
        \u0275\u0275domElement(3, "div", 2);
      }
      if (rf & 2) {
        \u0275\u0275advance(3);
        \u0275\u0275styleProp("width", ctx._totalContentWidth())("height", ctx._totalContentHeight());
      }
    },
    styles: ["cdk-virtual-scroll-viewport {\n  display: block;\n  position: relative;\n  transform: translateZ(0);\n}\n\n.cdk-virtual-scrollable {\n  overflow: auto;\n  will-change: scroll-position;\n  contain: strict;\n  overflow-anchor: none;\n  scroll-behavior: auto;\n}\n\n.cdk-virtual-scroll-content-wrapper {\n  position: absolute;\n  top: 0;\n  left: 0;\n  contain: content;\n}\n[dir=rtl] .cdk-virtual-scroll-content-wrapper {\n  right: 0;\n  left: auto;\n}\n\n.cdk-virtual-scroll-orientation-horizontal .cdk-virtual-scroll-content-wrapper {\n  min-height: 100%;\n}\n.cdk-virtual-scroll-orientation-horizontal .cdk-virtual-scroll-content-wrapper > dl:not([cdkVirtualFor]), .cdk-virtual-scroll-orientation-horizontal .cdk-virtual-scroll-content-wrapper > ol:not([cdkVirtualFor]), .cdk-virtual-scroll-orientation-horizontal .cdk-virtual-scroll-content-wrapper > table:not([cdkVirtualFor]), .cdk-virtual-scroll-orientation-horizontal .cdk-virtual-scroll-content-wrapper > ul:not([cdkVirtualFor]) {\n  padding-left: 0;\n  padding-right: 0;\n  margin-left: 0;\n  margin-right: 0;\n  border-left-width: 0;\n  border-right-width: 0;\n  outline: none;\n}\n\n.cdk-virtual-scroll-orientation-vertical .cdk-virtual-scroll-content-wrapper {\n  min-width: 100%;\n}\n.cdk-virtual-scroll-orientation-vertical .cdk-virtual-scroll-content-wrapper > dl:not([cdkVirtualFor]), .cdk-virtual-scroll-orientation-vertical .cdk-virtual-scroll-content-wrapper > ol:not([cdkVirtualFor]), .cdk-virtual-scroll-orientation-vertical .cdk-virtual-scroll-content-wrapper > table:not([cdkVirtualFor]), .cdk-virtual-scroll-orientation-vertical .cdk-virtual-scroll-content-wrapper > ul:not([cdkVirtualFor]) {\n  padding-top: 0;\n  padding-bottom: 0;\n  margin-top: 0;\n  margin-bottom: 0;\n  border-top-width: 0;\n  border-bottom-width: 0;\n  outline: none;\n}\n\n.cdk-virtual-scroll-spacer {\n  height: 1px;\n  transform-origin: 0 0;\n  flex: 0 0 auto;\n}\n[dir=rtl] .cdk-virtual-scroll-spacer {\n  transform-origin: 100% 0;\n}\n"],
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CdkVirtualScrollViewport, [{
    type: Component,
    args: [{
      selector: "cdk-virtual-scroll-viewport",
      host: {
        "class": "cdk-virtual-scroll-viewport",
        "[class.cdk-virtual-scroll-orientation-horizontal]": 'orientation === "horizontal"',
        "[class.cdk-virtual-scroll-orientation-vertical]": 'orientation !== "horizontal"'
      },
      encapsulation: ViewEncapsulation.None,
      providers: [{
        provide: CdkScrollable,
        useFactory: () => inject(VIRTUAL_SCROLLABLE, {
          optional: true
        }) || inject(CdkVirtualScrollViewport)
      }, {
        provide: CDK_VIRTUAL_SCROLL_VIEWPORT,
        useExisting: CdkVirtualScrollViewport
      }],
      template: '<!--\n  Wrap the rendered content in an element that will be used to offset it based on the scroll\n  position.\n-->\n<div #contentWrapper class="cdk-virtual-scroll-content-wrapper">\n  <ng-content></ng-content>\n</div>\n<!--\n  Spacer used to force the scrolling container to the correct size for the *total* number of items\n  so that the scrollbar captures the size of the entire data set.\n-->\n<div class="cdk-virtual-scroll-spacer"\n     [style.width]="_totalContentWidth()" [style.height]="_totalContentHeight()"></div>\n',
      styles: ["cdk-virtual-scroll-viewport {\n  display: block;\n  position: relative;\n  transform: translateZ(0);\n}\n\n.cdk-virtual-scrollable {\n  overflow: auto;\n  will-change: scroll-position;\n  contain: strict;\n  overflow-anchor: none;\n  scroll-behavior: auto;\n}\n\n.cdk-virtual-scroll-content-wrapper {\n  position: absolute;\n  top: 0;\n  left: 0;\n  contain: content;\n}\n[dir=rtl] .cdk-virtual-scroll-content-wrapper {\n  right: 0;\n  left: auto;\n}\n\n.cdk-virtual-scroll-orientation-horizontal .cdk-virtual-scroll-content-wrapper {\n  min-height: 100%;\n}\n.cdk-virtual-scroll-orientation-horizontal .cdk-virtual-scroll-content-wrapper > dl:not([cdkVirtualFor]), .cdk-virtual-scroll-orientation-horizontal .cdk-virtual-scroll-content-wrapper > ol:not([cdkVirtualFor]), .cdk-virtual-scroll-orientation-horizontal .cdk-virtual-scroll-content-wrapper > table:not([cdkVirtualFor]), .cdk-virtual-scroll-orientation-horizontal .cdk-virtual-scroll-content-wrapper > ul:not([cdkVirtualFor]) {\n  padding-left: 0;\n  padding-right: 0;\n  margin-left: 0;\n  margin-right: 0;\n  border-left-width: 0;\n  border-right-width: 0;\n  outline: none;\n}\n\n.cdk-virtual-scroll-orientation-vertical .cdk-virtual-scroll-content-wrapper {\n  min-width: 100%;\n}\n.cdk-virtual-scroll-orientation-vertical .cdk-virtual-scroll-content-wrapper > dl:not([cdkVirtualFor]), .cdk-virtual-scroll-orientation-vertical .cdk-virtual-scroll-content-wrapper > ol:not([cdkVirtualFor]), .cdk-virtual-scroll-orientation-vertical .cdk-virtual-scroll-content-wrapper > table:not([cdkVirtualFor]), .cdk-virtual-scroll-orientation-vertical .cdk-virtual-scroll-content-wrapper > ul:not([cdkVirtualFor]) {\n  padding-top: 0;\n  padding-bottom: 0;\n  margin-top: 0;\n  margin-bottom: 0;\n  border-top-width: 0;\n  border-bottom-width: 0;\n  outline: none;\n}\n\n.cdk-virtual-scroll-spacer {\n  height: 1px;\n  transform-origin: 0 0;\n  flex: 0 0 auto;\n}\n[dir=rtl] .cdk-virtual-scroll-spacer {\n  transform-origin: 100% 0;\n}\n"]
    }]
  }], () => [], {
    orientation: [{
      type: Input
    }],
    appendOnly: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    scrolledIndexChange: [{
      type: Output
    }],
    _contentWrapper: [{
      type: ViewChild,
      args: ["contentWrapper", {
        static: true
      }]
    }]
  });
})();
function getOffset(orientation, direction, node) {
  const el = node;
  if (!el.getBoundingClientRect) {
    return 0;
  }
  const rect = el.getBoundingClientRect();
  if (orientation === "horizontal") {
    return direction === "start" ? rect.left : rect.right;
  }
  return direction === "start" ? rect.top : rect.bottom;
}
var CdkVirtualForOf = class _CdkVirtualForOf {
  _viewContainerRef = inject(ViewContainerRef);
  _template = inject(TemplateRef);
  _differs = inject(IterableDiffers);
  _viewRepeater = new _RecycleViewRepeaterStrategy();
  _viewport = inject(CDK_VIRTUAL_SCROLL_VIEWPORT, {
    skipSelf: true
  });
  viewChange = new Subject();
  _dataSourceChanges = new Subject();
  get cdkVirtualForOf() {
    return this._cdkVirtualForOf;
  }
  set cdkVirtualForOf(value) {
    this._cdkVirtualForOf = value;
    if (isDataSource(value)) {
      this._dataSourceChanges.next(value);
    } else {
      this._dataSourceChanges.next(new ArrayDataSource(isObservable(value) ? value : Array.from(value || [])));
    }
  }
  _cdkVirtualForOf;
  get cdkVirtualForTrackBy() {
    return this._cdkVirtualForTrackBy;
  }
  set cdkVirtualForTrackBy(fn) {
    this._needsUpdate = true;
    this._cdkVirtualForTrackBy = fn ? (index, item) => fn(index + (this._renderedRange ? this._renderedRange.start : 0), item) : void 0;
  }
  _cdkVirtualForTrackBy;
  set cdkVirtualForTemplate(value) {
    if (value) {
      this._needsUpdate = true;
      this._template = value;
    }
  }
  get cdkVirtualForTemplateCacheSize() {
    return this._viewRepeater.viewCacheSize;
  }
  set cdkVirtualForTemplateCacheSize(size) {
    this._viewRepeater.viewCacheSize = coerceNumberProperty(size);
  }
  dataStream = this._dataSourceChanges.pipe(startWith(null), pairwise(), switchMap(([prev, cur]) => this._changeDataSource(prev, cur)), shareReplay(1));
  _differ = null;
  _data = [];
  _renderedItems = [];
  _renderedRange = {
    start: 0,
    end: 0
  };
  _needsUpdate = false;
  _destroyed = new Subject();
  constructor() {
    const ngZone = inject(NgZone);
    this.dataStream.subscribe((data) => {
      this._data = data;
      this._onRenderedDataChange();
    });
    this._viewport.renderedRangeStream.pipe(takeUntil(this._destroyed)).subscribe((range) => {
      this._renderedRange = range;
      if (this.viewChange.observers.length) {
        ngZone.run(() => this.viewChange.next(this._renderedRange));
      }
      this._onRenderedDataChange();
    });
    this._viewport.attach(this);
  }
  measureRangeSize(range, orientation) {
    if (range.start >= range.end) {
      return 0;
    }
    if ((range.start < this._renderedRange.start || range.end > this._renderedRange.end) && (typeof ngDevMode === "undefined" || ngDevMode)) {
      throw Error(`Error: attempted to measure an item that isn't rendered.`);
    }
    const renderedStartIndex = range.start - this._renderedRange.start;
    const rangeLen = range.end - range.start;
    let firstNode;
    let lastNode;
    for (let i = 0; i < rangeLen; i++) {
      const view = this._viewContainerRef.get(i + renderedStartIndex);
      if (view && view.rootNodes.length) {
        firstNode = lastNode = view.rootNodes[0];
        break;
      }
    }
    for (let i = rangeLen - 1; i > -1; i--) {
      const view = this._viewContainerRef.get(i + renderedStartIndex);
      if (view && view.rootNodes.length) {
        lastNode = view.rootNodes[view.rootNodes.length - 1];
        break;
      }
    }
    return firstNode && lastNode ? getOffset(orientation, "end", lastNode) - getOffset(orientation, "start", firstNode) : 0;
  }
  ngDoCheck() {
    if (this._differ && this._needsUpdate) {
      const changes = this._differ.diff(this._renderedItems);
      if (!changes) {
        this._updateContext();
      } else {
        this._applyChanges(changes);
      }
      this._needsUpdate = false;
    }
  }
  ngOnDestroy() {
    this._viewport.detach();
    this._dataSourceChanges.next(void 0);
    this._dataSourceChanges.complete();
    this.viewChange.complete();
    this._destroyed.next();
    this._destroyed.complete();
    this._viewRepeater.detach();
  }
  _onRenderedDataChange() {
    if (!this._renderedRange) {
      return;
    }
    this._renderedItems = this._data.slice(this._renderedRange.start, this._renderedRange.end);
    if (!this._differ) {
      this._differ = this._differs.find(this._renderedItems).create((index, item) => {
        return this.cdkVirtualForTrackBy ? this.cdkVirtualForTrackBy(index, item) : item;
      });
    }
    this._needsUpdate = true;
  }
  _changeDataSource(oldDs, newDs) {
    if (oldDs) {
      oldDs.disconnect(this);
    }
    this._needsUpdate = true;
    return newDs ? newDs.connect(this) : of();
  }
  _updateContext() {
    const count = this._data.length;
    let i = this._viewContainerRef.length;
    while (i--) {
      const view = this._viewContainerRef.get(i);
      view.context.index = this._renderedRange.start + i;
      view.context.count = count;
      this._updateComputedContextProperties(view.context);
      view.detectChanges();
    }
  }
  _applyChanges(changes) {
    this._viewRepeater.applyChanges(changes, this._viewContainerRef, (record, _adjustedPreviousIndex, currentIndex) => this._getEmbeddedViewArgs(record, currentIndex), (record) => record.item);
    changes.forEachIdentityChange((record) => {
      const view = this._viewContainerRef.get(record.currentIndex);
      view.context.$implicit = record.item;
    });
    const count = this._data.length;
    let i = this._viewContainerRef.length;
    while (i--) {
      const view = this._viewContainerRef.get(i);
      view.context.index = this._renderedRange.start + i;
      view.context.count = count;
      this._updateComputedContextProperties(view.context);
    }
  }
  _updateComputedContextProperties(context) {
    context.first = context.index === 0;
    context.last = context.index === context.count - 1;
    context.even = context.index % 2 === 0;
    context.odd = !context.even;
  }
  _getEmbeddedViewArgs(record, index) {
    return {
      templateRef: this._template,
      context: {
        $implicit: record.item,
        cdkVirtualForOf: this._cdkVirtualForOf,
        index: -1,
        count: -1,
        first: false,
        last: false,
        odd: false,
        even: false
      },
      index
    };
  }
  static ngTemplateContextGuard(directive, context) {
    return true;
  }
  static \u0275fac = function CdkVirtualForOf_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CdkVirtualForOf)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _CdkVirtualForOf,
    selectors: [["", "cdkVirtualFor", "", "cdkVirtualForOf", ""]],
    inputs: {
      cdkVirtualForOf: "cdkVirtualForOf",
      cdkVirtualForTrackBy: "cdkVirtualForTrackBy",
      cdkVirtualForTemplate: "cdkVirtualForTemplate",
      cdkVirtualForTemplateCacheSize: "cdkVirtualForTemplateCacheSize"
    }
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CdkVirtualForOf, [{
    type: Directive,
    args: [{
      selector: "[cdkVirtualFor][cdkVirtualForOf]"
    }]
  }], () => [], {
    cdkVirtualForOf: [{
      type: Input
    }],
    cdkVirtualForTrackBy: [{
      type: Input
    }],
    cdkVirtualForTemplate: [{
      type: Input
    }],
    cdkVirtualForTemplateCacheSize: [{
      type: Input
    }]
  });
})();
var CdkVirtualScrollableElement = class _CdkVirtualScrollableElement extends CdkVirtualScrollable {
  measureBoundingClientRectWithScrollOffset(from) {
    return this.getElementRef().nativeElement.getBoundingClientRect()[from] - this.measureScrollOffset(from);
  }
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275CdkVirtualScrollableElement_BaseFactory;
    return function CdkVirtualScrollableElement_Factory(__ngFactoryType__) {
      return (\u0275CdkVirtualScrollableElement_BaseFactory || (\u0275CdkVirtualScrollableElement_BaseFactory = \u0275\u0275getInheritedFactory(_CdkVirtualScrollableElement)))(__ngFactoryType__ || _CdkVirtualScrollableElement);
    };
  })();
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _CdkVirtualScrollableElement,
    selectors: [["", "cdkVirtualScrollingElement", ""]],
    hostAttrs: [1, "cdk-virtual-scrollable"],
    features: [\u0275\u0275ProvidersFeature([{
      provide: VIRTUAL_SCROLLABLE,
      useExisting: _CdkVirtualScrollableElement
    }]), \u0275\u0275InheritDefinitionFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CdkVirtualScrollableElement, [{
    type: Directive,
    args: [{
      selector: "[cdkVirtualScrollingElement]",
      providers: [{
        provide: VIRTUAL_SCROLLABLE,
        useExisting: CdkVirtualScrollableElement
      }],
      host: {
        "class": "cdk-virtual-scrollable"
      }
    }]
  }], null, null);
})();
var CdkVirtualScrollableWindow = class _CdkVirtualScrollableWindow extends CdkVirtualScrollable {
  constructor() {
    super();
    const document2 = inject(DOCUMENT);
    this.elementRef = new ElementRef(document2.documentElement);
    this._scrollElement = document2;
  }
  measureBoundingClientRectWithScrollOffset(from) {
    return this.getElementRef().nativeElement.getBoundingClientRect()[from];
  }
  static \u0275fac = function CdkVirtualScrollableWindow_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CdkVirtualScrollableWindow)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _CdkVirtualScrollableWindow,
    selectors: [["cdk-virtual-scroll-viewport", "scrollWindow", ""]],
    features: [\u0275\u0275ProvidersFeature([{
      provide: VIRTUAL_SCROLLABLE,
      useExisting: _CdkVirtualScrollableWindow
    }]), \u0275\u0275InheritDefinitionFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CdkVirtualScrollableWindow, [{
    type: Directive,
    args: [{
      selector: "cdk-virtual-scroll-viewport[scrollWindow]",
      providers: [{
        provide: VIRTUAL_SCROLLABLE,
        useExisting: CdkVirtualScrollableWindow
      }]
    }]
  }], () => [], null);
})();
var CdkScrollableModule = class _CdkScrollableModule {
  static \u0275fac = function CdkScrollableModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CdkScrollableModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _CdkScrollableModule,
    imports: [CdkScrollable],
    exports: [CdkScrollable]
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({});
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CdkScrollableModule, [{
    type: NgModule,
    args: [{
      exports: [CdkScrollable],
      imports: [CdkScrollable]
    }]
  }], null, null);
})();
var ScrollingModule = class _ScrollingModule {
  static \u0275fac = function ScrollingModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ScrollingModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _ScrollingModule,
    imports: [BidiModule, CdkScrollableModule, CdkVirtualScrollViewport, CdkFixedSizeVirtualScroll, CdkVirtualForOf, CdkVirtualScrollableWindow, CdkVirtualScrollableElement],
    exports: [BidiModule, CdkScrollableModule, CdkFixedSizeVirtualScroll, CdkVirtualForOf, CdkVirtualScrollViewport, CdkVirtualScrollableWindow, CdkVirtualScrollableElement]
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
    imports: [BidiModule, CdkScrollableModule, BidiModule, CdkScrollableModule]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ScrollingModule, [{
    type: NgModule,
    args: [{
      imports: [BidiModule, CdkScrollableModule, CdkVirtualScrollViewport, CdkFixedSizeVirtualScroll, CdkVirtualForOf, CdkVirtualScrollableWindow, CdkVirtualScrollableElement],
      exports: [BidiModule, CdkScrollableModule, CdkFixedSizeVirtualScroll, CdkVirtualForOf, CdkVirtualScrollViewport, CdkVirtualScrollableWindow, CdkVirtualScrollableElement]
    }]
  }], null, null);
})();

// node_modules/@angular/cdk/fesm2022/_id-generator-chunk.mjs
var counters = /* @__PURE__ */ new Map();
var _IdGenerator = class __IdGenerator {
  _appId = inject(APP_ID);
  static _infix = `a${Math.floor(Math.random() * 1e5).toString()}`;
  getId(prefix, randomize = false) {
    if (this._appId !== "ng") {
      prefix += this._appId;
    }
    let count = counters.get(prefix);
    if (count === void 0) {
      count = 0;
    } else {
      count++;
    }
    counters.set(prefix, count);
    return `${prefix}${randomize ? __IdGenerator._infix + "-" : ""}${count}`;
  }
  static \u0275fac = function _IdGenerator_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || __IdGenerator)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineService({
    token: __IdGenerator,
    factory: __IdGenerator.\u0275fac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(_IdGenerator, [{
    type: Service
  }], null, null);
})();

// node_modules/@angular/cdk/fesm2022/_array-chunk.mjs
function coerceArray(value) {
  return Array.isArray(value) ? value : [value];
}

// node_modules/@angular/cdk/fesm2022/drag-drop.mjs
function deepCloneNode(node) {
  const clone = node.cloneNode(true);
  const descendantsWithId = clone.querySelectorAll("[id]");
  const nodeName = node.nodeName.toLowerCase();
  clone.removeAttribute("id");
  for (let i = 0; i < descendantsWithId.length; i++) {
    descendantsWithId[i].removeAttribute("id");
  }
  if (nodeName === "canvas") {
    transferCanvasData(node, clone);
  } else if (nodeName === "input" || nodeName === "select" || nodeName === "textarea") {
    transferInputData(node, clone);
  }
  transferData("canvas", node, clone, transferCanvasData);
  transferData("input, textarea, select", node, clone, transferInputData);
  return clone;
}
function transferData(selector, node, clone, callback) {
  const descendantElements = node.querySelectorAll(selector);
  if (descendantElements.length) {
    const cloneElements = clone.querySelectorAll(selector);
    for (let i = 0; i < descendantElements.length; i++) {
      callback(descendantElements[i], cloneElements[i]);
    }
  }
}
var cloneUniqueId = 0;
function transferInputData(source, clone) {
  if (clone.type !== "file") {
    clone.value = source.value;
  }
  if (clone.type === "radio" && clone.name) {
    clone.name = `mat-clone-${clone.name}-${cloneUniqueId++}`;
  }
}
function transferCanvasData(source, clone) {
  const context = clone.getContext("2d");
  if (context) {
    try {
      context.drawImage(source, 0, 0);
    } catch {
    }
  }
}
function getMutableClientRect(element) {
  const rect = element.getBoundingClientRect();
  return {
    top: rect.top,
    right: rect.right,
    bottom: rect.bottom,
    left: rect.left,
    width: rect.width,
    height: rect.height,
    x: rect.x,
    y: rect.y
  };
}
function isInsideClientRect(clientRect, x, y) {
  const {
    top,
    bottom,
    left,
    right
  } = clientRect;
  return y >= top && y <= bottom && x >= left && x <= right;
}
function isOverflowingParent(parentRect, childRect) {
  const isLeftOverflowing = childRect.left < parentRect.left;
  const isRightOverflowing = childRect.left + childRect.width > parentRect.right;
  const isTopOverflowing = childRect.top < parentRect.top;
  const isBottomOverflowing = childRect.top + childRect.height > parentRect.bottom;
  return isLeftOverflowing || isRightOverflowing || isTopOverflowing || isBottomOverflowing;
}
function adjustDomRect(domRect, top, left) {
  domRect.top += top;
  domRect.bottom = domRect.top + domRect.height;
  domRect.left += left;
  domRect.right = domRect.left + domRect.width;
}
function isPointerNearDomRect(rect, threshold, pointerX, pointerY) {
  const {
    top,
    right,
    bottom,
    left,
    width,
    height
  } = rect;
  const xThreshold = width * threshold;
  const yThreshold = height * threshold;
  return pointerY > top - yThreshold && pointerY < bottom + yThreshold && pointerX > left - xThreshold && pointerX < right + xThreshold;
}
var ParentPositionTracker = class {
  _document;
  positions = /* @__PURE__ */ new Map();
  constructor(_document) {
    this._document = _document;
  }
  clear() {
    this.positions.clear();
  }
  cache(elements) {
    this.clear();
    this.positions.set(this._document, {
      scrollPosition: this.getViewportScrollPosition()
    });
    elements.forEach((element) => {
      this.positions.set(element, {
        scrollPosition: {
          top: element.scrollTop,
          left: element.scrollLeft
        },
        clientRect: getMutableClientRect(element)
      });
    });
  }
  handleScroll(event) {
    const target = _getEventTarget(event);
    const cachedPosition = this.positions.get(target);
    if (!cachedPosition) {
      return null;
    }
    const scrollPosition = cachedPosition.scrollPosition;
    let newTop;
    let newLeft;
    if (target === this._document) {
      const viewportScrollPosition = this.getViewportScrollPosition();
      newTop = viewportScrollPosition.top;
      newLeft = viewportScrollPosition.left;
    } else {
      newTop = target.scrollTop;
      newLeft = target.scrollLeft;
    }
    const topDifference = scrollPosition.top - newTop;
    const leftDifference = scrollPosition.left - newLeft;
    this.positions.forEach((position, node) => {
      if (position.clientRect && target !== node && target.contains(node)) {
        adjustDomRect(position.clientRect, topDifference, leftDifference);
      }
    });
    scrollPosition.top = newTop;
    scrollPosition.left = newLeft;
    return {
      top: topDifference,
      left: leftDifference
    };
  }
  getViewportScrollPosition() {
    return {
      top: window.scrollY,
      left: window.scrollX
    };
  }
};
function getRootNode(viewRef, _document) {
  const rootNodes = viewRef.rootNodes;
  if (rootNodes.length === 1 && rootNodes[0].nodeType === _document.ELEMENT_NODE) {
    return rootNodes[0];
  }
  const wrapper = _document.createElement("div");
  rootNodes.forEach((node) => wrapper.appendChild(node));
  return wrapper;
}
function extendStyles(dest, source, importantProperties2) {
  for (let key in source) {
    if (source.hasOwnProperty(key)) {
      const value = source[key];
      if (value) {
        dest.setProperty(key, value, importantProperties2?.has(key) ? "important" : "");
      } else {
        dest.removeProperty(key);
      }
    }
  }
  return dest;
}
function toggleNativeDragInteractions(element, enable) {
  const userSelect = enable ? "" : "none";
  extendStyles(element.style, {
    "touch-action": enable ? "" : "none",
    "-webkit-user-drag": enable ? "" : "none",
    "-webkit-tap-highlight-color": enable ? "" : "transparent",
    "user-select": userSelect,
    "-ms-user-select": userSelect,
    "-webkit-user-select": userSelect,
    "-moz-user-select": userSelect
  });
}
function toggleVisibility(element, enable, importantProperties2) {
  extendStyles(element.style, {
    position: enable ? "" : "fixed",
    top: enable ? "" : "0",
    opacity: enable ? "" : "0",
    left: enable ? "" : "-999em"
  }, importantProperties2);
}
function combineTransforms(transform, initialTransform) {
  return initialTransform && initialTransform != "none" ? transform + " " + initialTransform : transform;
}
function matchElementSize(target, sourceRect) {
  target.style.width = `${sourceRect.width}px`;
  target.style.height = `${sourceRect.height}px`;
  target.style.transform = getTransform(sourceRect.left, sourceRect.top);
}
function getTransform(x, y) {
  return `translate3d(${Math.round(x)}px, ${Math.round(y)}px, 0)`;
}
var capturingEventOptions = {
  capture: true
};
var activeCapturingEventOptions$1 = {
  passive: false,
  capture: true
};
var _ResetsLoader = class __ResetsLoader {
  static \u0275fac = function _ResetsLoader_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || __ResetsLoader)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: __ResetsLoader,
    selectors: [["ng-component"]],
    hostAttrs: ["cdk-drag-resets-container", ""],
    decls: 0,
    vars: 0,
    template: function _ResetsLoader_Template(rf, ctx) {
    },
    styles: ["@layer cdk-resets {\n  .cdk-drag-preview {\n    background: none;\n    border: none;\n    padding: 0;\n    color: inherit;\n    overflow: visible;\n    inset: auto;\n  }\n}\n.cdk-drag-placeholder *,\n.cdk-drag-preview * {\n  pointer-events: none !important;\n}\n"],
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(_ResetsLoader, [{
    type: Component,
    args: [{
      encapsulation: ViewEncapsulation.None,
      template: "",
      host: {
        "cdk-drag-resets-container": ""
      },
      styles: ["@layer cdk-resets {\n  .cdk-drag-preview {\n    background: none;\n    border: none;\n    padding: 0;\n    color: inherit;\n    overflow: visible;\n    inset: auto;\n  }\n}\n.cdk-drag-placeholder *,\n.cdk-drag-preview * {\n  pointer-events: none !important;\n}\n"]
    }]
  }], null, null);
})();
var DragDropRegistry = class _DragDropRegistry {
  _ngZone = inject(NgZone);
  _document = inject(DOCUMENT);
  _styleLoader = inject(_CdkPrivateStyleLoader);
  _renderer = inject(RendererFactory2).createRenderer(null, null);
  _cleanupDocumentTouchmove;
  _scroll = new Subject();
  _dropInstances = /* @__PURE__ */ new Set();
  _dragInstances = /* @__PURE__ */ new Set();
  _activeDragInstances = signal([], ...ngDevMode ? [{
    debugName: "_activeDragInstances"
  }] : []);
  _globalListeners;
  _draggingPredicate = (item) => item.isDragging();
  _domNodesToDirectives = null;
  pointerMove = new Subject();
  pointerUp = new Subject();
  registerDropContainer(drop) {
    if (!this._dropInstances.has(drop)) {
      this._dropInstances.add(drop);
    }
  }
  registerDragItem(drag) {
    this._dragInstances.add(drag);
    if (this._dragInstances.size === 1) {
      this._ngZone.runOutsideAngular(() => {
        this._cleanupDocumentTouchmove?.();
        this._cleanupDocumentTouchmove = this._renderer.listen(this._document, "touchmove", this._persistentTouchmoveListener, activeCapturingEventOptions$1);
      });
    }
  }
  removeDropContainer(drop) {
    this._dropInstances.delete(drop);
  }
  removeDragItem(drag) {
    this._dragInstances.delete(drag);
    this.stopDragging(drag);
    if (this._dragInstances.size === 0) {
      this._cleanupDocumentTouchmove?.();
    }
  }
  startDragging(drag, event) {
    if (this._activeDragInstances().indexOf(drag) > -1) {
      return;
    }
    this._styleLoader.load(_ResetsLoader);
    this._activeDragInstances.update((instances) => [...instances, drag]);
    if (this._activeDragInstances().length === 1) {
      const isTouchEvent2 = event.type.startsWith("touch");
      const endEventHandler = (e) => this.pointerUp.next(e);
      const toBind = [["scroll", (e) => this._scroll.next(e), capturingEventOptions], ["selectstart", this._preventDefaultWhileDragging, activeCapturingEventOptions$1]];
      if (isTouchEvent2) {
        toBind.push(["touchend", endEventHandler, capturingEventOptions], ["touchcancel", endEventHandler, capturingEventOptions]);
      } else {
        toBind.push(["mouseup", endEventHandler, capturingEventOptions]);
      }
      if (!isTouchEvent2) {
        toBind.push(["mousemove", (e) => this.pointerMove.next(e), activeCapturingEventOptions$1]);
      }
      this._ngZone.runOutsideAngular(() => {
        this._globalListeners = toBind.map(([name, handler, options]) => this._renderer.listen(this._document, name, handler, options));
      });
    }
  }
  stopDragging(drag) {
    this._activeDragInstances.update((instances) => {
      const index = instances.indexOf(drag);
      if (index > -1) {
        instances.splice(index, 1);
        return [...instances];
      }
      return instances;
    });
    if (this._activeDragInstances().length === 0) {
      this._clearGlobalListeners();
    }
  }
  isDragging(drag) {
    return this._activeDragInstances().indexOf(drag) > -1;
  }
  scrolled(shadowRoot) {
    const streams = [this._scroll];
    if (shadowRoot && shadowRoot !== this._document) {
      streams.push(new Observable((observer) => {
        return this._ngZone.runOutsideAngular(() => {
          const cleanup = this._renderer.listen(shadowRoot, "scroll", (event) => {
            if (this._activeDragInstances().length) {
              observer.next(event);
            }
          }, capturingEventOptions);
          return () => {
            cleanup();
          };
        });
      }));
    }
    return merge(...streams);
  }
  registerDirectiveNode(node, dragRef) {
    this._domNodesToDirectives ??= /* @__PURE__ */ new WeakMap();
    this._domNodesToDirectives.set(node, dragRef);
  }
  removeDirectiveNode(node) {
    this._domNodesToDirectives?.delete(node);
  }
  getDragDirectiveForNode(node) {
    return this._domNodesToDirectives?.get(node) || null;
  }
  ngOnDestroy() {
    this._dragInstances.forEach((instance) => this.removeDragItem(instance));
    this._dropInstances.forEach((instance) => this.removeDropContainer(instance));
    this._domNodesToDirectives = null;
    this._clearGlobalListeners();
    this.pointerMove.complete();
    this.pointerUp.complete();
  }
  _preventDefaultWhileDragging = (event) => {
    if (this._activeDragInstances().length > 0) {
      event.preventDefault();
    }
  };
  _persistentTouchmoveListener = (event) => {
    if (this._activeDragInstances().length > 0) {
      if (this._activeDragInstances().some(this._draggingPredicate)) {
        event.preventDefault();
      }
      this.pointerMove.next(event);
    }
  };
  _clearGlobalListeners() {
    this._globalListeners?.forEach((cleanup) => cleanup());
    this._globalListeners = void 0;
  }
  static \u0275fac = function DragDropRegistry_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _DragDropRegistry)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineService({
    token: _DragDropRegistry,
    factory: _DragDropRegistry.\u0275fac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DragDropRegistry, [{
    type: Service
  }], null, null);
})();
function parseCssTimeUnitsToMs(value) {
  const multiplier = value.toLowerCase().indexOf("ms") > -1 ? 1 : 1e3;
  return parseFloat(value) * multiplier;
}
function getTransformTransitionDurationInMs(element) {
  const computedStyle = getComputedStyle(element);
  const transitionedProperties = parseCssPropertyValue(computedStyle, "transition-property");
  const property = transitionedProperties.find((prop) => prop === "transform" || prop === "all");
  if (!property) {
    return 0;
  }
  const propertyIndex = transitionedProperties.indexOf(property);
  const rawDurations = parseCssPropertyValue(computedStyle, "transition-duration");
  const rawDelays = parseCssPropertyValue(computedStyle, "transition-delay");
  return parseCssTimeUnitsToMs(rawDurations[propertyIndex]) + parseCssTimeUnitsToMs(rawDelays[propertyIndex]);
}
function parseCssPropertyValue(computedStyle, name) {
  const value = computedStyle.getPropertyValue(name);
  return value.split(",").map((part) => part.trim());
}
var importantProperties = /* @__PURE__ */ new Set(["position"]);
var PreviewRef = class {
  _document;
  _rootElement;
  _direction;
  _initialDomRect;
  _previewTemplate;
  _previewClass;
  _pickupPositionOnPage;
  _initialTransform;
  _zIndex;
  _renderer;
  _previewEmbeddedView = null;
  _preview;
  get element() {
    return this._preview;
  }
  constructor(_document, _rootElement, _direction, _initialDomRect, _previewTemplate, _previewClass, _pickupPositionOnPage, _initialTransform, _zIndex, _renderer) {
    this._document = _document;
    this._rootElement = _rootElement;
    this._direction = _direction;
    this._initialDomRect = _initialDomRect;
    this._previewTemplate = _previewTemplate;
    this._previewClass = _previewClass;
    this._pickupPositionOnPage = _pickupPositionOnPage;
    this._initialTransform = _initialTransform;
    this._zIndex = _zIndex;
    this._renderer = _renderer;
  }
  attach(parent) {
    this._preview = this._createPreview();
    parent.appendChild(this._preview);
    if (supportsPopover(this._preview)) {
      this._preview["showPopover"]();
    }
  }
  destroy() {
    this._preview.remove();
    this._previewEmbeddedView?.destroy();
    this._preview = this._previewEmbeddedView = null;
  }
  setTransform(value) {
    this._preview.style.transform = value;
  }
  getBoundingClientRect() {
    return this._preview.getBoundingClientRect();
  }
  addClass(className) {
    this._preview.classList.add(className);
  }
  getTransitionDuration() {
    return getTransformTransitionDurationInMs(this._preview);
  }
  addEventListener(name, handler) {
    return this._renderer.listen(this._preview, name, handler);
  }
  _createPreview() {
    const previewConfig = this._previewTemplate;
    const previewClass = this._previewClass;
    const previewTemplate = previewConfig ? previewConfig.template : null;
    let preview;
    if (previewTemplate && previewConfig) {
      const rootRect = previewConfig.matchSize ? this._initialDomRect : null;
      const viewRef = previewConfig.viewContainer.createEmbeddedView(previewTemplate, previewConfig.context);
      viewRef.detectChanges();
      preview = getRootNode(viewRef, this._document);
      this._previewEmbeddedView = viewRef;
      if (previewConfig.matchSize) {
        matchElementSize(preview, rootRect);
      } else {
        preview.style.transform = getTransform(this._pickupPositionOnPage.x, this._pickupPositionOnPage.y);
      }
    } else {
      preview = deepCloneNode(this._rootElement);
      matchElementSize(preview, this._initialDomRect);
      if (this._initialTransform) {
        preview.style.transform = this._initialTransform;
      }
    }
    extendStyles(preview.style, {
      "pointer-events": "none",
      "margin": supportsPopover(preview) ? "0 auto 0 0" : "0",
      "position": "fixed",
      "top": "0",
      "left": "0",
      "z-index": this._zIndex + ""
    }, importantProperties);
    toggleNativeDragInteractions(preview, false);
    preview.classList.add("cdk-drag-preview");
    preview.setAttribute("popover", "manual");
    preview.setAttribute("dir", this._direction);
    if (previewClass) {
      if (Array.isArray(previewClass)) {
        previewClass.forEach((className) => preview.classList.add(className));
      } else {
        preview.classList.add(previewClass);
      }
    }
    return preview;
  }
};
function supportsPopover(element) {
  return "showPopover" in element;
}
var passiveEventListenerOptions = {
  passive: true
};
var activeEventListenerOptions = {
  passive: false
};
var activeCapturingEventOptions = {
  passive: false,
  capture: true
};
var MOUSE_EVENT_IGNORE_TIME = 800;
var PLACEHOLDER_CLASS = "cdk-drag-placeholder";
var dragImportantProperties = /* @__PURE__ */ new Set(["position"]);
function createDragRef(injector, element, config = {
  dragStartThreshold: 5,
  pointerDirectionChangeThreshold: 5
}) {
  const renderer = injector.get(Renderer2, null, {
    optional: true
  }) || injector.get(RendererFactory2).createRenderer(null, null);
  return new DragRef(element, config, injector.get(DOCUMENT), injector.get(NgZone), injector.get(ViewportRuler), injector.get(DragDropRegistry), renderer);
}
var DragRef = class {
  _config;
  _document;
  _ngZone;
  _viewportRuler;
  _dragDropRegistry;
  _renderer;
  _rootElementCleanups;
  _cleanupShadowRootSelectStart;
  _preview = null;
  _previewContainer;
  _placeholderRef = null;
  _placeholder;
  _pickupPositionInElement;
  _pickupPositionOnPage;
  _marker;
  _anchor = null;
  _passiveTransform = {
    x: 0,
    y: 0
  };
  _activeTransform = {
    x: 0,
    y: 0
  };
  _initialTransform;
  _hasStartedDragging = signal(false, ...ngDevMode ? [{
    debugName: "_hasStartedDragging"
  }] : []);
  _hasMoved = false;
  _initialContainer;
  _initialIndex;
  _parentPositions;
  _moveEvents = new Subject();
  _pointerDirectionDelta;
  _pointerPositionAtLastDirectionChange;
  _lastKnownPointerPosition;
  _rootElement;
  _ownerSVGElement = null;
  _rootElementTapHighlight;
  _pointerMoveSubscription = Subscription.EMPTY;
  _pointerUpSubscription = Subscription.EMPTY;
  _scrollSubscription = Subscription.EMPTY;
  _resizeSubscription = Subscription.EMPTY;
  _lastTouchEventTime;
  _dragStartTime;
  _boundaryElement = null;
  _nativeInteractionsEnabled = true;
  _initialDomRect;
  _previewRect;
  _boundaryRect;
  _previewTemplate;
  _placeholderTemplate;
  _handles = [];
  _disabledHandles = /* @__PURE__ */ new Set();
  _dropContainer;
  _direction = "ltr";
  _parentDragRef = null;
  _cachedShadowRoot;
  lockAxis = null;
  dragStartDelay = 0;
  previewClass;
  scale = 1;
  get disabled() {
    return this._disabled || !!(this._dropContainer && this._dropContainer.disabled);
  }
  set disabled(value) {
    if (value !== this._disabled) {
      this._disabled = value;
      this._toggleNativeDragInteractions();
      this._handles.forEach((handle) => toggleNativeDragInteractions(handle, value));
    }
  }
  _disabled = false;
  beforeStarted = new Subject();
  started = new Subject();
  released = new Subject();
  ended = new Subject();
  entered = new Subject();
  exited = new Subject();
  dropped = new Subject();
  moved = this._moveEvents;
  data;
  constrainPosition;
  constructor(element, _config, _document, _ngZone, _viewportRuler, _dragDropRegistry, _renderer) {
    this._config = _config;
    this._document = _document;
    this._ngZone = _ngZone;
    this._viewportRuler = _viewportRuler;
    this._dragDropRegistry = _dragDropRegistry;
    this._renderer = _renderer;
    this.withRootElement(element).withParent(_config.parentDragRef || null);
    this._parentPositions = new ParentPositionTracker(_document);
    _dragDropRegistry.registerDragItem(this);
  }
  getPlaceholderElement() {
    return this._placeholder;
  }
  getRootElement() {
    return this._rootElement;
  }
  getVisibleElement() {
    return this.isDragging() ? this.getPlaceholderElement() : this.getRootElement();
  }
  withHandles(handles) {
    this._handles = handles.map((handle) => coerceElement(handle));
    this._handles.forEach((handle) => toggleNativeDragInteractions(handle, this.disabled));
    this._toggleNativeDragInteractions();
    const disabledHandles = /* @__PURE__ */ new Set();
    this._disabledHandles.forEach((handle) => {
      if (this._handles.indexOf(handle) > -1) {
        disabledHandles.add(handle);
      }
    });
    this._disabledHandles = disabledHandles;
    return this;
  }
  withPreviewTemplate(template) {
    this._previewTemplate = template;
    return this;
  }
  withPlaceholderTemplate(template) {
    this._placeholderTemplate = template;
    return this;
  }
  withRootElement(rootElement) {
    const element = coerceElement(rootElement);
    if (element !== this._rootElement) {
      this._removeRootElementListeners();
      const renderer = this._renderer;
      this._rootElementCleanups = this._ngZone.runOutsideAngular(() => [renderer.listen(element, "mousedown", this._pointerDown, activeEventListenerOptions), renderer.listen(element, "touchstart", this._pointerDown, passiveEventListenerOptions), renderer.listen(element, "dragstart", this._nativeDragStart, activeEventListenerOptions)]);
      this._initialTransform = void 0;
      this._rootElement = element;
    }
    if (typeof SVGElement !== "undefined" && this._rootElement instanceof SVGElement) {
      this._ownerSVGElement = this._rootElement.ownerSVGElement;
    }
    return this;
  }
  withBoundaryElement(boundaryElement) {
    this._boundaryElement = boundaryElement ? coerceElement(boundaryElement) : null;
    this._resizeSubscription.unsubscribe();
    if (boundaryElement) {
      this._resizeSubscription = this._viewportRuler.change(10).subscribe(() => this._containInsideBoundaryOnResize());
    }
    return this;
  }
  withParent(parent) {
    this._parentDragRef = parent;
    return this;
  }
  dispose() {
    this._removeRootElementListeners();
    if (this.isDragging()) {
      this._rootElement?.remove();
    }
    this._marker?.remove();
    this._destroyPreview();
    this._destroyPlaceholder();
    this._dragDropRegistry.removeDragItem(this);
    this._removeListeners();
    this.beforeStarted.complete();
    this.started.complete();
    this.released.complete();
    this.ended.complete();
    this.entered.complete();
    this.exited.complete();
    this.dropped.complete();
    this._moveEvents.complete();
    this._handles = [];
    this._disabledHandles.clear();
    this._dropContainer = void 0;
    this._resizeSubscription.unsubscribe();
    this._parentPositions.clear();
    this._boundaryElement = this._rootElement = this._ownerSVGElement = this._placeholderTemplate = this._previewTemplate = this._marker = this._parentDragRef = null;
  }
  isDragging() {
    return this._hasStartedDragging() && this._dragDropRegistry.isDragging(this);
  }
  reset() {
    this._rootElement.style.transform = this._initialTransform || "";
    this._activeTransform = {
      x: 0,
      y: 0
    };
    this._passiveTransform = {
      x: 0,
      y: 0
    };
  }
  resetToBoundary() {
    if (this._boundaryElement && this._rootElement && isOverflowingParent(this._boundaryElement.getBoundingClientRect(), this._rootElement.getBoundingClientRect())) {
      const parentRect = this._boundaryElement.getBoundingClientRect();
      const childRect = this._rootElement.getBoundingClientRect();
      let offsetX = 0;
      let offsetY = 0;
      if (childRect.left < parentRect.left) {
        offsetX = parentRect.left - childRect.left;
      } else if (childRect.right > parentRect.right) {
        offsetX = parentRect.right - childRect.right;
      }
      if (childRect.top < parentRect.top) {
        offsetY = parentRect.top - childRect.top;
      } else if (childRect.bottom > parentRect.bottom) {
        offsetY = parentRect.bottom - childRect.bottom;
      }
      const currentLeft = this._activeTransform.x;
      const currentTop = this._activeTransform.y;
      let x = currentLeft + offsetX, y = currentTop + offsetY;
      this._rootElement.style.transform = getTransform(x, y);
      this._activeTransform = {
        x,
        y
      };
      this._passiveTransform = {
        x,
        y
      };
    }
  }
  disableHandle(handle) {
    if (!this._disabledHandles.has(handle) && this._handles.indexOf(handle) > -1) {
      this._disabledHandles.add(handle);
      toggleNativeDragInteractions(handle, true);
    }
  }
  enableHandle(handle) {
    if (this._disabledHandles.has(handle)) {
      this._disabledHandles.delete(handle);
      toggleNativeDragInteractions(handle, this.disabled);
    }
  }
  withDirection(direction) {
    this._direction = direction;
    return this;
  }
  _withDropContainer(container) {
    this._dropContainer = container;
  }
  getFreeDragPosition() {
    const position = this.isDragging() ? this._activeTransform : this._passiveTransform;
    return {
      x: position.x,
      y: position.y
    };
  }
  setFreeDragPosition(value) {
    this._activeTransform = {
      x: 0,
      y: 0
    };
    this._passiveTransform.x = value.x;
    this._passiveTransform.y = value.y;
    if (!this._dropContainer) {
      this._applyRootElementTransform(value.x, value.y);
    }
    return this;
  }
  withPreviewContainer(value) {
    this._previewContainer = value;
    return this;
  }
  _sortFromLastPointerPosition() {
    const position = this._lastKnownPointerPosition;
    if (position && this._dropContainer) {
      this._updateActiveDropContainer(this._getConstrainedPointerPosition(position), position);
    }
  }
  _removeListeners() {
    this._pointerMoveSubscription.unsubscribe();
    this._pointerUpSubscription.unsubscribe();
    this._scrollSubscription.unsubscribe();
    this._cleanupShadowRootSelectStart?.();
    this._cleanupShadowRootSelectStart = void 0;
  }
  _destroyPreview() {
    this._preview?.destroy();
    this._preview = null;
  }
  _destroyPlaceholder() {
    this._anchor?.remove();
    this._placeholder?.remove();
    this._placeholderRef?.destroy();
    this._placeholder = this._anchor = this._placeholderRef = null;
  }
  _pointerDown = (event) => {
    this.beforeStarted.next();
    if (this._handles.length) {
      const targetHandle = this._getTargetHandle(event);
      if (targetHandle && !this._disabledHandles.has(targetHandle) && !this.disabled) {
        this._initializeDragSequence(targetHandle, event);
      }
    } else if (!this.disabled) {
      this._initializeDragSequence(this._rootElement, event);
    }
  };
  _pointerMove = (event) => {
    const pointerPosition = this._getPointerPositionOnPage(event);
    if (!this._hasStartedDragging()) {
      const distanceX = Math.abs(pointerPosition.x - this._pickupPositionOnPage.x);
      const distanceY = Math.abs(pointerPosition.y - this._pickupPositionOnPage.y);
      const isOverThreshold = distanceX + distanceY >= this._config.dragStartThreshold;
      if (isOverThreshold) {
        const isDelayElapsed = Date.now() >= this._dragStartTime + this._getDragStartDelay(event);
        const container = this._dropContainer;
        if (!isDelayElapsed) {
          this._endDragSequence(event);
          return;
        }
        if (!container || !container.isDragging() && !container.isReceiving()) {
          if (event.cancelable) {
            event.preventDefault();
          }
          this._hasStartedDragging.set(true);
          this._ngZone.run(() => this._startDragSequence(event));
        }
      }
      return;
    }
    if (event.cancelable) {
      event.preventDefault();
    }
    const constrainedPointerPosition = this._getConstrainedPointerPosition(pointerPosition);
    this._hasMoved = true;
    this._lastKnownPointerPosition = pointerPosition;
    this._updatePointerDirectionDelta(constrainedPointerPosition);
    if (this._dropContainer) {
      this._updateActiveDropContainer(constrainedPointerPosition, pointerPosition);
    } else {
      const offset = this.constrainPosition ? this._initialDomRect : this._pickupPositionOnPage;
      const activeTransform = this._activeTransform;
      activeTransform.x = constrainedPointerPosition.x - offset.x + this._passiveTransform.x;
      activeTransform.y = constrainedPointerPosition.y - offset.y + this._passiveTransform.y;
      this._applyRootElementTransform(activeTransform.x, activeTransform.y);
    }
    if (this._moveEvents.observers.length) {
      this._ngZone.run(() => {
        this._moveEvents.next({
          source: this,
          pointerPosition: constrainedPointerPosition,
          event,
          distance: this._getDragDistance(constrainedPointerPosition),
          delta: this._pointerDirectionDelta
        });
      });
    }
  };
  _pointerUp = (event) => {
    this._endDragSequence(event);
  };
  _endDragSequence(event) {
    if (!this._dragDropRegistry.isDragging(this)) {
      return;
    }
    this._removeListeners();
    this._dragDropRegistry.stopDragging(this);
    this._toggleNativeDragInteractions();
    if (this._handles) {
      this._rootElement.style.webkitTapHighlightColor = this._rootElementTapHighlight;
    }
    if (!this._hasStartedDragging()) {
      return;
    }
    this.released.next({
      source: this,
      event
    });
    if (this._dropContainer) {
      this._dropContainer._stopScrolling();
      this._animatePreviewToPlaceholder().then(() => {
        this._cleanupDragArtifacts(event);
        this._cleanupCachedDimensions();
        this._dragDropRegistry.stopDragging(this);
      });
    } else {
      this._passiveTransform.x = this._activeTransform.x;
      const pointerPosition = this._getPointerPositionOnPage(event);
      this._passiveTransform.y = this._activeTransform.y;
      this._ngZone.run(() => {
        this.ended.next({
          source: this,
          distance: this._getDragDistance(pointerPosition),
          dropPoint: pointerPosition,
          event
        });
      });
      this._cleanupCachedDimensions();
      this._dragDropRegistry.stopDragging(this);
    }
  }
  _startDragSequence(event) {
    if (isTouchEvent(event)) {
      this._lastTouchEventTime = Date.now();
    }
    this._toggleNativeDragInteractions();
    const shadowRoot = this._getShadowRoot();
    const dropContainer = this._dropContainer;
    if (shadowRoot) {
      this._ngZone.runOutsideAngular(() => {
        this._cleanupShadowRootSelectStart = this._renderer.listen(shadowRoot, "selectstart", shadowDomSelectStart, activeCapturingEventOptions);
      });
    }
    if (dropContainer) {
      const element = this._rootElement;
      const parent = element.parentNode;
      const placeholder = this._placeholder = this._createPlaceholderElement();
      const marker = this._marker = this._marker || this._document.createComment(typeof ngDevMode === "undefined" || ngDevMode ? "cdk-drag-marker" : "");
      parent.insertBefore(marker, element);
      this._initialTransform = element.style.transform || "";
      this._preview = new PreviewRef(this._document, this._rootElement, this._direction, this._initialDomRect, this._previewTemplate || null, this.previewClass || null, this._pickupPositionOnPage, this._initialTransform, this._config.zIndex || 1e3, this._renderer);
      this._preview.attach(this._getPreviewInsertionPoint(parent, shadowRoot));
      toggleVisibility(element, false, dragImportantProperties);
      this._document.body.appendChild(parent.replaceChild(placeholder, element));
      this.started.next({
        source: this,
        event
      });
      dropContainer.start();
      this._initialContainer = dropContainer;
      this._initialIndex = dropContainer.getItemIndex(this);
    } else {
      this.started.next({
        source: this,
        event
      });
      this._initialContainer = this._initialIndex = void 0;
    }
    this._parentPositions.cache(dropContainer ? dropContainer.getScrollableParents() : []);
  }
  _initializeDragSequence(referenceElement, event) {
    if (this._parentDragRef) {
      event.stopPropagation();
    }
    const isDragging = this.isDragging();
    const isTouchSequence = isTouchEvent(event);
    const isAuxiliaryMouseButton = !isTouchSequence && event.button !== 0;
    const rootElement = this._rootElement;
    const target = _getEventTarget(event);
    const isSyntheticEvent = !isTouchSequence && this._lastTouchEventTime && this._lastTouchEventTime + MOUSE_EVENT_IGNORE_TIME > Date.now();
    const isFakeEvent = isTouchSequence ? isFakeTouchstartFromScreenReader(event) : isFakeMousedownFromScreenReader(event);
    if (target && target.draggable && event.type === "mousedown") {
      event.preventDefault();
    }
    if (isDragging || isAuxiliaryMouseButton || isSyntheticEvent || isFakeEvent) {
      return;
    }
    if (this._handles.length) {
      const rootStyles = rootElement.style;
      this._rootElementTapHighlight = rootStyles.webkitTapHighlightColor || "";
      rootStyles.webkitTapHighlightColor = "transparent";
    }
    this._hasMoved = false;
    this._hasStartedDragging.set(this._hasMoved);
    this._removeListeners();
    this._initialDomRect = this._rootElement.getBoundingClientRect();
    this._pointerMoveSubscription = this._dragDropRegistry.pointerMove.subscribe(this._pointerMove);
    this._pointerUpSubscription = this._dragDropRegistry.pointerUp.subscribe(this._pointerUp);
    this._scrollSubscription = this._dragDropRegistry.scrolled(this._getShadowRoot()).subscribe((scrollEvent) => this._updateOnScroll(scrollEvent));
    if (this._boundaryElement) {
      this._boundaryRect = getMutableClientRect(this._boundaryElement);
    }
    const previewTemplate = this._previewTemplate;
    this._pickupPositionInElement = previewTemplate && previewTemplate.template && !previewTemplate.matchSize ? {
      x: 0,
      y: 0
    } : this._getPointerPositionInElement(this._initialDomRect, referenceElement, event);
    const pointerPosition = this._pickupPositionOnPage = this._lastKnownPointerPosition = this._getPointerPositionOnPage(event);
    this._pointerDirectionDelta = {
      x: 0,
      y: 0
    };
    this._pointerPositionAtLastDirectionChange = {
      x: pointerPosition.x,
      y: pointerPosition.y
    };
    this._dragStartTime = Date.now();
    this._dragDropRegistry.startDragging(this, event);
  }
  _cleanupDragArtifacts(event) {
    toggleVisibility(this._rootElement, true, dragImportantProperties);
    this._marker.parentNode.replaceChild(this._rootElement, this._marker);
    this._destroyPreview();
    this._destroyPlaceholder();
    this._initialDomRect = this._boundaryRect = this._previewRect = this._initialTransform = void 0;
    this._ngZone.run(() => {
      const container = this._dropContainer;
      const currentIndex = container.getItemIndex(this);
      const pointerPosition = this._getPointerPositionOnPage(event);
      const distance = this._getDragDistance(pointerPosition);
      const isPointerOverContainer = container._isOverContainer(pointerPosition.x, pointerPosition.y);
      this.ended.next({
        source: this,
        distance,
        dropPoint: pointerPosition,
        event
      });
      this.dropped.next({
        item: this,
        currentIndex,
        previousIndex: this._initialIndex,
        container,
        previousContainer: this._initialContainer,
        isPointerOverContainer,
        distance,
        dropPoint: pointerPosition,
        event
      });
      container.drop(this, currentIndex, this._initialIndex, this._initialContainer, isPointerOverContainer, distance, pointerPosition, event);
      this._dropContainer = this._initialContainer;
    });
  }
  _updateActiveDropContainer({
    x,
    y
  }, {
    x: rawX,
    y: rawY
  }) {
    let newContainer = this._initialContainer._getSiblingContainerFromPosition(this, x, y);
    if (!newContainer && this._dropContainer !== this._initialContainer && this._initialContainer._isOverContainer(x, y)) {
      newContainer = this._initialContainer;
    }
    if (newContainer && newContainer !== this._dropContainer) {
      this._ngZone.run(() => {
        const exitIndex = this._dropContainer.getItemIndex(this);
        const nextItemElement = this._dropContainer.getItemAtIndex(exitIndex + 1)?.getVisibleElement() || null;
        this.exited.next({
          item: this,
          container: this._dropContainer
        });
        this._dropContainer.exit(this);
        this._conditionallyInsertAnchor(newContainer, this._dropContainer, nextItemElement);
        this._dropContainer = newContainer;
        this._dropContainer.enter(this, x, y, newContainer === this._initialContainer && newContainer.sortingDisabled ? this._initialIndex : void 0);
        this.entered.next({
          item: this,
          container: newContainer,
          currentIndex: newContainer.getItemIndex(this)
        });
      });
    }
    if (this.isDragging()) {
      this._dropContainer._startScrollingIfNecessary(rawX, rawY);
      this._dropContainer._sortItem(this, x, y, this._pointerDirectionDelta);
      if (this.constrainPosition) {
        this._applyPreviewTransform(x, y);
      } else {
        this._applyPreviewTransform(x - this._pickupPositionInElement.x, y - this._pickupPositionInElement.y);
      }
    }
  }
  _animatePreviewToPlaceholder() {
    if (!this._hasMoved) {
      return Promise.resolve();
    }
    const placeholderRect = this._placeholder.getBoundingClientRect();
    this._preview.addClass("cdk-drag-animating");
    this._applyPreviewTransform(placeholderRect.left, placeholderRect.top);
    const duration = this._preview.getTransitionDuration();
    if (duration === 0) {
      return Promise.resolve();
    }
    return this._ngZone.runOutsideAngular(() => {
      return new Promise((resolve) => {
        const handler = (event) => {
          if (!event || this._preview && _getEventTarget(event) === this._preview.element && event.propertyName === "transform") {
            cleanupListener();
            resolve();
            clearTimeout(timeout);
          }
        };
        const timeout = setTimeout(handler, duration * 1.5);
        const cleanupListener = this._preview.addEventListener("transitionend", handler);
      });
    });
  }
  _createPlaceholderElement() {
    const placeholderConfig = this._placeholderTemplate;
    const placeholderTemplate = placeholderConfig ? placeholderConfig.template : null;
    let placeholder;
    if (placeholderTemplate) {
      this._placeholderRef = placeholderConfig.viewContainer.createEmbeddedView(placeholderTemplate, placeholderConfig.context);
      this._placeholderRef.detectChanges();
      placeholder = getRootNode(this._placeholderRef, this._document);
    } else {
      placeholder = deepCloneNode(this._rootElement);
    }
    placeholder.style.pointerEvents = "none";
    placeholder.classList.add(PLACEHOLDER_CLASS);
    return placeholder;
  }
  _getPointerPositionInElement(elementRect, referenceElement, event) {
    const handleElement = referenceElement === this._rootElement ? null : referenceElement;
    const referenceRect = handleElement ? handleElement.getBoundingClientRect() : elementRect;
    const point = isTouchEvent(event) ? event.targetTouches[0] : event;
    const scrollPosition = this._getViewportScrollPosition();
    const x = point.pageX - referenceRect.left - scrollPosition.left;
    const y = point.pageY - referenceRect.top - scrollPosition.top;
    return {
      x: referenceRect.left - elementRect.left + x,
      y: referenceRect.top - elementRect.top + y
    };
  }
  _getPointerPositionOnPage(event) {
    const scrollPosition = this._getViewportScrollPosition();
    const point = isTouchEvent(event) ? event.touches[0] || event.changedTouches[0] || {
      pageX: 0,
      pageY: 0
    } : event;
    const x = point.pageX - scrollPosition.left;
    const y = point.pageY - scrollPosition.top;
    if (this._ownerSVGElement) {
      const svgMatrix = this._ownerSVGElement.getScreenCTM();
      if (svgMatrix) {
        const svgPoint = this._ownerSVGElement.createSVGPoint();
        svgPoint.x = x;
        svgPoint.y = y;
        return svgPoint.matrixTransform(svgMatrix.inverse());
      }
    }
    return {
      x,
      y
    };
  }
  _getConstrainedPointerPosition(point) {
    const dropContainerLock = this._dropContainer ? this._dropContainer.lockAxis : null;
    let {
      x,
      y
    } = this.constrainPosition ? this.constrainPosition(point, this, this._initialDomRect, this._pickupPositionInElement) : point;
    if (this.lockAxis === "x" || dropContainerLock === "x") {
      y = this._pickupPositionOnPage.y - (this.constrainPosition ? this._pickupPositionInElement.y : 0);
    } else if (this.lockAxis === "y" || dropContainerLock === "y") {
      x = this._pickupPositionOnPage.x - (this.constrainPosition ? this._pickupPositionInElement.x : 0);
    }
    if (this._boundaryRect) {
      const {
        x: pickupX,
        y: pickupY
      } = !this.constrainPosition ? this._pickupPositionInElement : {
        x: 0,
        y: 0
      };
      const boundaryRect = this._boundaryRect;
      const {
        width: previewWidth,
        height: previewHeight
      } = this._getPreviewRect();
      const minY = boundaryRect.top + pickupY;
      const maxY = boundaryRect.bottom - (previewHeight - pickupY);
      const minX = boundaryRect.left + pickupX;
      const maxX = boundaryRect.right - (previewWidth - pickupX);
      x = clamp$1(x, minX, maxX);
      y = clamp$1(y, minY, maxY);
    }
    return {
      x,
      y
    };
  }
  _updatePointerDirectionDelta(pointerPositionOnPage) {
    const {
      x,
      y
    } = pointerPositionOnPage;
    const delta = this._pointerDirectionDelta;
    const positionSinceLastChange = this._pointerPositionAtLastDirectionChange;
    const changeX = Math.abs(x - positionSinceLastChange.x);
    const changeY = Math.abs(y - positionSinceLastChange.y);
    if (changeX > this._config.pointerDirectionChangeThreshold) {
      delta.x = x > positionSinceLastChange.x ? 1 : -1;
      positionSinceLastChange.x = x;
    }
    if (changeY > this._config.pointerDirectionChangeThreshold) {
      delta.y = y > positionSinceLastChange.y ? 1 : -1;
      positionSinceLastChange.y = y;
    }
    return delta;
  }
  _toggleNativeDragInteractions() {
    if (!this._rootElement || !this._handles) {
      return;
    }
    const shouldEnable = this._handles.length > 0 || !this.isDragging();
    if (shouldEnable !== this._nativeInteractionsEnabled) {
      this._nativeInteractionsEnabled = shouldEnable;
      toggleNativeDragInteractions(this._rootElement, shouldEnable);
    }
  }
  _removeRootElementListeners() {
    this._rootElementCleanups?.forEach((cleanup) => cleanup());
    this._rootElementCleanups = void 0;
  }
  _applyRootElementTransform(x, y) {
    const scale = 1 / this.scale;
    const transform = getTransform(x * scale, y * scale);
    const styles = this._rootElement.style;
    if (this._initialTransform == null) {
      this._initialTransform = styles.transform && styles.transform != "none" ? styles.transform : "";
    }
    styles.transform = combineTransforms(transform, this._initialTransform);
  }
  _applyPreviewTransform(x, y) {
    const initialTransform = this._previewTemplate?.template ? void 0 : this._initialTransform;
    const transform = getTransform(x, y);
    this._preview.setTransform(combineTransforms(transform, initialTransform));
  }
  _getDragDistance(currentPosition) {
    const pickupPosition = this._pickupPositionOnPage;
    if (pickupPosition) {
      return {
        x: currentPosition.x - pickupPosition.x,
        y: currentPosition.y - pickupPosition.y
      };
    }
    return {
      x: 0,
      y: 0
    };
  }
  _cleanupCachedDimensions() {
    this._boundaryRect = this._previewRect = void 0;
    this._parentPositions.clear();
  }
  _containInsideBoundaryOnResize() {
    let {
      x,
      y
    } = this._passiveTransform;
    if (x === 0 && y === 0 || this.isDragging() || !this._boundaryElement) {
      return;
    }
    const elementRect = this._rootElement.getBoundingClientRect();
    const boundaryRect = this._boundaryElement.getBoundingClientRect();
    if (boundaryRect.width === 0 && boundaryRect.height === 0 || elementRect.width === 0 && elementRect.height === 0) {
      return;
    }
    const leftOverflow = boundaryRect.left - elementRect.left;
    const rightOverflow = elementRect.right - boundaryRect.right;
    const topOverflow = boundaryRect.top - elementRect.top;
    const bottomOverflow = elementRect.bottom - boundaryRect.bottom;
    if (boundaryRect.width > elementRect.width) {
      if (leftOverflow > 0) {
        x += leftOverflow;
      }
      if (rightOverflow > 0) {
        x -= rightOverflow;
      }
    } else {
      x = 0;
    }
    if (boundaryRect.height > elementRect.height) {
      if (topOverflow > 0) {
        y += topOverflow;
      }
      if (bottomOverflow > 0) {
        y -= bottomOverflow;
      }
    } else {
      y = 0;
    }
    if (x !== this._passiveTransform.x || y !== this._passiveTransform.y) {
      this.setFreeDragPosition({
        y,
        x
      });
    }
  }
  _getDragStartDelay(event) {
    const value = this.dragStartDelay;
    if (typeof value === "number") {
      return value;
    } else if (isTouchEvent(event)) {
      return value.touch;
    }
    return value ? value.mouse : 0;
  }
  _updateOnScroll(event) {
    const scrollDifference = this._parentPositions.handleScroll(event);
    if (scrollDifference) {
      const target = _getEventTarget(event);
      if (this._boundaryRect && target !== this._boundaryElement && target.contains(this._boundaryElement)) {
        adjustDomRect(this._boundaryRect, scrollDifference.top, scrollDifference.left);
      }
      this._pickupPositionOnPage.x += scrollDifference.left;
      this._pickupPositionOnPage.y += scrollDifference.top;
      if (!this._dropContainer) {
        this._activeTransform.x -= scrollDifference.left;
        this._activeTransform.y -= scrollDifference.top;
        this._applyRootElementTransform(this._activeTransform.x, this._activeTransform.y);
      }
    }
  }
  _getViewportScrollPosition() {
    return this._parentPositions.positions.get(this._document)?.scrollPosition || this._parentPositions.getViewportScrollPosition();
  }
  _getShadowRoot() {
    if (this._cachedShadowRoot === void 0) {
      this._cachedShadowRoot = _getShadowRoot(this._rootElement);
    }
    return this._cachedShadowRoot;
  }
  _getPreviewInsertionPoint(initialParent, shadowRoot) {
    const previewContainer = this._previewContainer || "global";
    if (previewContainer === "parent") {
      return initialParent;
    }
    if (previewContainer === "global") {
      const documentRef = this._document;
      return shadowRoot || documentRef.fullscreenElement || documentRef.webkitFullscreenElement || documentRef.mozFullScreenElement || documentRef.msFullscreenElement || documentRef.body;
    }
    return coerceElement(previewContainer);
  }
  _getPreviewRect() {
    if (!this._previewRect || !this._previewRect.width && !this._previewRect.height) {
      this._previewRect = this._preview ? this._preview.getBoundingClientRect() : this._initialDomRect;
    }
    return this._previewRect;
  }
  _nativeDragStart = (event) => {
    if (this._handles.length) {
      const targetHandle = this._getTargetHandle(event);
      if (targetHandle && !this._disabledHandles.has(targetHandle) && !this.disabled) {
        event.preventDefault();
      }
    } else if (!this.disabled) {
      event.preventDefault();
    }
  };
  _getTargetHandle(event) {
    return this._handles.find((handle) => {
      return event.target && (event.target === handle || handle.contains(event.target));
    });
  }
  _conditionallyInsertAnchor(newContainer, exitContainer, nextItemElement) {
    if (newContainer === this._initialContainer) {
      this._anchor?.remove();
      this._anchor = null;
    } else if (exitContainer === this._initialContainer && exitContainer.hasAnchor) {
      const anchor = this._anchor ??= deepCloneNode(this._placeholder);
      anchor.classList.remove(PLACEHOLDER_CLASS);
      anchor.classList.add("cdk-drag-anchor");
      anchor.style.transform = "";
      if (nextItemElement) {
        nextItemElement.before(anchor);
      } else {
        coerceElement(exitContainer.element).appendChild(anchor);
      }
    }
  }
};
function clamp$1(value, min, max) {
  return Math.max(min, Math.min(max, value));
}
function isTouchEvent(event) {
  return event.type[0] === "t";
}
function shadowDomSelectStart(event) {
  event.preventDefault();
}
function moveItemInArray(array, fromIndex, toIndex) {
  const from = clamp(fromIndex, array.length - 1);
  const to = clamp(toIndex, array.length - 1);
  if (from === to) {
    return;
  }
  const target = array[from];
  const delta = to < from ? -1 : 1;
  for (let i = from; i !== to; i += delta) {
    array[i] = array[i + delta];
  }
  array[to] = target;
}
function clamp(value, max) {
  return Math.max(0, Math.min(max, value));
}
var SingleAxisSortStrategy = class {
  _dragDropRegistry;
  _element;
  _sortPredicate;
  _itemPositions = [];
  _activeDraggables;
  orientation = "vertical";
  direction = "ltr";
  constructor(_dragDropRegistry) {
    this._dragDropRegistry = _dragDropRegistry;
  }
  _previousSwap = {
    drag: null,
    delta: 0,
    overlaps: false
  };
  start(items) {
    this.withItems(items);
  }
  sort(item, pointerX, pointerY, pointerDelta) {
    const siblings = this._itemPositions;
    const newIndex = this._getItemIndexFromPointerPosition(item, pointerX, pointerY, pointerDelta);
    if (newIndex === -1 && siblings.length > 0) {
      return null;
    }
    const isHorizontal = this.orientation === "horizontal";
    const currentIndex = siblings.findIndex((currentItem) => currentItem.drag === item);
    const siblingAtNewPosition = siblings[newIndex];
    const currentPosition = siblings[currentIndex].clientRect;
    const newPosition = siblingAtNewPosition.clientRect;
    const delta = currentIndex > newIndex ? 1 : -1;
    const itemOffset = this._getItemOffsetPx(currentPosition, newPosition, delta);
    const siblingOffset = this._getSiblingOffsetPx(currentIndex, siblings, delta);
    const oldOrder = siblings.slice();
    moveItemInArray(siblings, currentIndex, newIndex);
    siblings.forEach((sibling, index) => {
      if (oldOrder[index] === sibling) {
        return;
      }
      const isDraggedItem = sibling.drag === item;
      const offset = isDraggedItem ? itemOffset : siblingOffset;
      const elementToOffset = isDraggedItem ? item.getPlaceholderElement() : sibling.drag.getRootElement();
      sibling.offset += offset;
      const transformAmount = Math.round(sibling.offset * (1 / sibling.drag.scale));
      if (isHorizontal) {
        elementToOffset.style.transform = combineTransforms(`translate3d(${transformAmount}px, 0, 0)`, sibling.initialTransform);
        adjustDomRect(sibling.clientRect, 0, offset);
      } else {
        elementToOffset.style.transform = combineTransforms(`translate3d(0, ${transformAmount}px, 0)`, sibling.initialTransform);
        adjustDomRect(sibling.clientRect, offset, 0);
      }
    });
    this._previousSwap.overlaps = isInsideClientRect(newPosition, pointerX, pointerY);
    this._previousSwap.drag = siblingAtNewPosition.drag;
    this._previousSwap.delta = isHorizontal ? pointerDelta.x : pointerDelta.y;
    return {
      previousIndex: currentIndex,
      currentIndex: newIndex
    };
  }
  enter(item, pointerX, pointerY, index) {
    const activeDraggables = this._activeDraggables;
    const currentIndex = activeDraggables.indexOf(item);
    const placeholder = item.getPlaceholderElement();
    if (currentIndex > -1) {
      activeDraggables.splice(currentIndex, 1);
    }
    const newIndex = index == null || index < 0 ? this._getItemIndexFromPointerPosition(item, pointerX, pointerY) : index;
    let newPositionReference = activeDraggables[newIndex];
    if (newPositionReference === item) {
      newPositionReference = activeDraggables[newIndex + 1];
    }
    if (!newPositionReference && (newIndex == null || newIndex === -1 || newIndex < activeDraggables.length - 1) && this._shouldEnterAsFirstChild(pointerX, pointerY)) {
      newPositionReference = activeDraggables[0];
    }
    if (newPositionReference && !this._dragDropRegistry.isDragging(newPositionReference)) {
      const element = newPositionReference.getRootElement();
      element.parentElement.insertBefore(placeholder, element);
      activeDraggables.splice(newIndex, 0, item);
    } else {
      this._element.appendChild(placeholder);
      activeDraggables.push(item);
    }
    placeholder.style.transform = "";
    this._cacheItemPositions();
  }
  withItems(items) {
    this._activeDraggables = items.slice();
    this._cacheItemPositions();
  }
  withSortPredicate(predicate) {
    this._sortPredicate = predicate;
  }
  reset() {
    this._activeDraggables?.forEach((item) => {
      const rootElement = item.getRootElement();
      if (rootElement) {
        const initialTransform = this._itemPositions.find((p) => p.drag === item)?.initialTransform;
        rootElement.style.transform = initialTransform || "";
      }
    });
    this._itemPositions = [];
    this._activeDraggables = [];
    this._previousSwap.drag = null;
    this._previousSwap.delta = 0;
    this._previousSwap.overlaps = false;
  }
  getActiveItemsSnapshot() {
    return this._activeDraggables;
  }
  getItemIndex(item) {
    return this._getVisualItemPositions().findIndex((currentItem) => currentItem.drag === item);
  }
  getItemAtIndex(index) {
    return this._getVisualItemPositions()[index]?.drag || null;
  }
  updateOnScroll(topDifference, leftDifference) {
    this._itemPositions.forEach(({
      clientRect
    }) => {
      adjustDomRect(clientRect, topDifference, leftDifference);
    });
    this._itemPositions.forEach(({
      drag
    }) => {
      if (this._dragDropRegistry.isDragging(drag)) {
        drag._sortFromLastPointerPosition();
      }
    });
  }
  withElementContainer(container) {
    this._element = container;
  }
  _cacheItemPositions() {
    const isHorizontal = this.orientation === "horizontal";
    this._itemPositions = this._activeDraggables.map((drag) => {
      const elementToMeasure = drag.getVisibleElement();
      return {
        drag,
        offset: 0,
        initialTransform: elementToMeasure.style.transform || "",
        clientRect: getMutableClientRect(elementToMeasure)
      };
    }).sort((a, b) => {
      return isHorizontal ? a.clientRect.left - b.clientRect.left : a.clientRect.top - b.clientRect.top;
    });
  }
  _getVisualItemPositions() {
    return this.orientation === "horizontal" && this.direction === "rtl" ? this._itemPositions.slice().reverse() : this._itemPositions;
  }
  _getItemOffsetPx(currentPosition, newPosition, delta) {
    const isHorizontal = this.orientation === "horizontal";
    let itemOffset = isHorizontal ? newPosition.left - currentPosition.left : newPosition.top - currentPosition.top;
    if (delta === -1) {
      itemOffset += isHorizontal ? newPosition.width - currentPosition.width : newPosition.height - currentPosition.height;
    }
    return itemOffset;
  }
  _getSiblingOffsetPx(currentIndex, siblings, delta) {
    const isHorizontal = this.orientation === "horizontal";
    const currentPosition = siblings[currentIndex].clientRect;
    const immediateSibling = siblings[currentIndex + delta * -1];
    let siblingOffset = currentPosition[isHorizontal ? "width" : "height"] * delta;
    if (immediateSibling) {
      const start = isHorizontal ? "left" : "top";
      const end = isHorizontal ? "right" : "bottom";
      if (delta === -1) {
        siblingOffset -= immediateSibling.clientRect[start] - currentPosition[end];
      } else {
        siblingOffset += currentPosition[start] - immediateSibling.clientRect[end];
      }
    }
    return siblingOffset;
  }
  _shouldEnterAsFirstChild(pointerX, pointerY) {
    if (!this._activeDraggables.length) {
      return false;
    }
    const itemPositions = this._itemPositions;
    const isHorizontal = this.orientation === "horizontal";
    const reversed = itemPositions[0].drag !== this._activeDraggables[0];
    if (reversed) {
      const lastItemRect = itemPositions[itemPositions.length - 1].clientRect;
      return isHorizontal ? pointerX >= lastItemRect.right : pointerY >= lastItemRect.bottom;
    } else {
      const firstItemRect = itemPositions[0].clientRect;
      return isHorizontal ? pointerX <= firstItemRect.left : pointerY <= firstItemRect.top;
    }
  }
  _getItemIndexFromPointerPosition(item, pointerX, pointerY, delta) {
    const isHorizontal = this.orientation === "horizontal";
    const index = this._itemPositions.findIndex(({
      drag,
      clientRect
    }) => {
      if (drag === item) {
        return false;
      }
      if (delta) {
        const direction = isHorizontal ? delta.x : delta.y;
        if (drag === this._previousSwap.drag && this._previousSwap.overlaps && direction === this._previousSwap.delta) {
          return false;
        }
      }
      return isHorizontal ? pointerX >= Math.floor(clientRect.left) && pointerX < Math.floor(clientRect.right) : pointerY >= Math.floor(clientRect.top) && pointerY < Math.floor(clientRect.bottom);
    });
    return index === -1 || !this._sortPredicate(index, item) ? -1 : index;
  }
};
var MixedSortStrategy = class {
  _document;
  _dragDropRegistry;
  _element;
  _sortPredicate;
  _rootNode;
  _activeItems;
  _previousSwap = {
    drag: null,
    deltaX: 0,
    deltaY: 0,
    overlaps: false
  };
  _relatedNodes = [];
  constructor(_document, _dragDropRegistry) {
    this._document = _document;
    this._dragDropRegistry = _dragDropRegistry;
  }
  start(items) {
    const childNodes = this._element.childNodes;
    this._relatedNodes = [];
    for (let i = 0; i < childNodes.length; i++) {
      const node = childNodes[i];
      this._relatedNodes.push([node, node.nextSibling]);
    }
    this.withItems(items);
  }
  sort(item, pointerX, pointerY, pointerDelta) {
    const newIndex = this._getItemIndexFromPointerPosition(item, pointerX, pointerY);
    const previousSwap = this._previousSwap;
    if (newIndex === -1 || this._activeItems[newIndex] === item) {
      return null;
    }
    const toSwapWith = this._activeItems[newIndex];
    if (previousSwap.drag === toSwapWith && previousSwap.overlaps && previousSwap.deltaX === pointerDelta.x && previousSwap.deltaY === pointerDelta.y) {
      return null;
    }
    const previousIndex = this.getItemIndex(item);
    const current = item.getPlaceholderElement();
    const overlapElement = toSwapWith.getRootElement();
    if (newIndex > previousIndex) {
      overlapElement.after(current);
    } else {
      overlapElement.before(current);
    }
    moveItemInArray(this._activeItems, previousIndex, newIndex);
    const newOverlapElement = this._getRootNode().elementFromPoint(pointerX, pointerY);
    previousSwap.deltaX = pointerDelta.x;
    previousSwap.deltaY = pointerDelta.y;
    previousSwap.drag = toSwapWith;
    previousSwap.overlaps = overlapElement === newOverlapElement || overlapElement.contains(newOverlapElement);
    return {
      previousIndex,
      currentIndex: newIndex
    };
  }
  enter(item, pointerX, pointerY, index) {
    const currentIndex = this._activeItems.indexOf(item);
    if (currentIndex > -1) {
      this._activeItems.splice(currentIndex, 1);
    }
    let enterIndex = index == null || index < 0 ? this._getItemIndexFromPointerPosition(item, pointerX, pointerY) : index;
    if (enterIndex === -1) {
      enterIndex = this._getClosestItemIndexToPointer(item, pointerX, pointerY);
    }
    const targetItem = this._activeItems[enterIndex];
    if (targetItem && !this._dragDropRegistry.isDragging(targetItem)) {
      this._activeItems.splice(enterIndex, 0, item);
      targetItem.getRootElement().before(item.getPlaceholderElement());
    } else {
      this._activeItems.push(item);
      this._element.appendChild(item.getPlaceholderElement());
    }
  }
  withItems(items) {
    this._activeItems = items.slice();
  }
  withSortPredicate(predicate) {
    this._sortPredicate = predicate;
  }
  reset() {
    const root = this._element;
    const previousSwap = this._previousSwap;
    for (let i = this._relatedNodes.length - 1; i > -1; i--) {
      const [node, nextSibling] = this._relatedNodes[i];
      if (node.parentNode === root && node.nextSibling !== nextSibling) {
        if (nextSibling === null) {
          root.appendChild(node);
        } else if (nextSibling.parentNode === root) {
          root.insertBefore(node, nextSibling);
        }
      }
    }
    this._relatedNodes = [];
    this._activeItems = [];
    previousSwap.drag = null;
    previousSwap.deltaX = previousSwap.deltaY = 0;
    previousSwap.overlaps = false;
  }
  getActiveItemsSnapshot() {
    return this._activeItems;
  }
  getItemIndex(item) {
    return this._activeItems.indexOf(item);
  }
  getItemAtIndex(index) {
    return this._activeItems[index] || null;
  }
  updateOnScroll() {
    this._activeItems.forEach((item) => {
      if (this._dragDropRegistry.isDragging(item)) {
        item._sortFromLastPointerPosition();
      }
    });
  }
  withElementContainer(container) {
    if (container !== this._element) {
      this._element = container;
      this._rootNode = void 0;
    }
  }
  _getItemIndexFromPointerPosition(item, pointerX, pointerY) {
    const elementAtPoint = this._getRootNode().elementFromPoint(Math.floor(pointerX), Math.floor(pointerY));
    const index = elementAtPoint ? this._activeItems.findIndex((item2) => {
      const root = item2.getRootElement();
      return elementAtPoint === root || root.contains(elementAtPoint);
    }) : -1;
    return index === -1 || !this._sortPredicate(index, item) ? -1 : index;
  }
  _getRootNode() {
    if (!this._rootNode) {
      this._rootNode = _getShadowRoot(this._element) || this._document;
    }
    return this._rootNode;
  }
  _getClosestItemIndexToPointer(item, pointerX, pointerY) {
    if (this._activeItems.length === 0) {
      return -1;
    }
    if (this._activeItems.length === 1) {
      return 0;
    }
    let minDistance = Infinity;
    let minIndex = -1;
    for (let i = 0; i < this._activeItems.length; i++) {
      const current = this._activeItems[i];
      if (current !== item) {
        const {
          x,
          y
        } = current.getRootElement().getBoundingClientRect();
        const distance = Math.hypot(pointerX - x, pointerY - y);
        if (distance < minDistance) {
          minDistance = distance;
          minIndex = i;
        }
      }
    }
    return minIndex;
  }
};
var DROP_PROXIMITY_THRESHOLD = 0.05;
var SCROLL_PROXIMITY_THRESHOLD = 0.05;
var AutoScrollVerticalDirection;
(function(AutoScrollVerticalDirection2) {
  AutoScrollVerticalDirection2[AutoScrollVerticalDirection2["NONE"] = 0] = "NONE";
  AutoScrollVerticalDirection2[AutoScrollVerticalDirection2["UP"] = 1] = "UP";
  AutoScrollVerticalDirection2[AutoScrollVerticalDirection2["DOWN"] = 2] = "DOWN";
})(AutoScrollVerticalDirection || (AutoScrollVerticalDirection = {}));
var AutoScrollHorizontalDirection;
(function(AutoScrollHorizontalDirection2) {
  AutoScrollHorizontalDirection2[AutoScrollHorizontalDirection2["NONE"] = 0] = "NONE";
  AutoScrollHorizontalDirection2[AutoScrollHorizontalDirection2["LEFT"] = 1] = "LEFT";
  AutoScrollHorizontalDirection2[AutoScrollHorizontalDirection2["RIGHT"] = 2] = "RIGHT";
})(AutoScrollHorizontalDirection || (AutoScrollHorizontalDirection = {}));
function createDropListRef(injector, element) {
  return new DropListRef(element, injector.get(DragDropRegistry), injector.get(DOCUMENT), injector.get(NgZone), injector.get(ViewportRuler));
}
var DropListRef = class {
  _dragDropRegistry;
  _ngZone;
  _viewportRuler;
  element;
  disabled = false;
  sortingDisabled = false;
  lockAxis = null;
  autoScrollDisabled = false;
  autoScrollStep = 2;
  hasAnchor = false;
  enterPredicate = () => true;
  sortPredicate = () => true;
  beforeStarted = new Subject();
  entered = new Subject();
  exited = new Subject();
  dropped = new Subject();
  sorted = new Subject();
  receivingStarted = new Subject();
  receivingStopped = new Subject();
  data;
  _container;
  _isDragging = false;
  _parentPositions;
  _sortStrategy;
  _domRect;
  _draggables = [];
  _siblings = [];
  _activeSiblings = /* @__PURE__ */ new Set();
  _viewportScrollSubscription = Subscription.EMPTY;
  _verticalScrollDirection = AutoScrollVerticalDirection.NONE;
  _horizontalScrollDirection = AutoScrollHorizontalDirection.NONE;
  _scrollNode;
  _stopScrollTimers = new Subject();
  _cachedShadowRoot = null;
  _document;
  _scrollableElements = [];
  _initialScrollSnap;
  _direction = "ltr";
  constructor(element, _dragDropRegistry, _document, _ngZone, _viewportRuler) {
    this._dragDropRegistry = _dragDropRegistry;
    this._ngZone = _ngZone;
    this._viewportRuler = _viewportRuler;
    const coercedElement = this.element = coerceElement(element);
    this._document = _document;
    this.withOrientation("vertical").withElementContainer(coercedElement);
    _dragDropRegistry.registerDropContainer(this);
    this._parentPositions = new ParentPositionTracker(_document);
  }
  dispose() {
    this._stopScrolling();
    this._stopScrollTimers.complete();
    this._viewportScrollSubscription.unsubscribe();
    this.beforeStarted.complete();
    this.entered.complete();
    this.exited.complete();
    this.dropped.complete();
    this.sorted.complete();
    this.receivingStarted.complete();
    this.receivingStopped.complete();
    this._activeSiblings.clear();
    this._scrollNode = null;
    this._parentPositions.clear();
    this._dragDropRegistry.removeDropContainer(this);
  }
  isDragging() {
    return this._isDragging;
  }
  start() {
    this._draggingStarted();
    this._notifyReceivingSiblings();
  }
  enter(item, pointerX, pointerY, index) {
    this._draggingStarted();
    if (index == null && this.sortingDisabled) {
      index = this._draggables.indexOf(item);
    }
    this._sortStrategy.enter(item, pointerX, pointerY, index);
    this._cacheParentPositions();
    this._notifyReceivingSiblings();
    this.entered.next({
      item,
      container: this,
      currentIndex: this.getItemIndex(item)
    });
  }
  exit(item) {
    this._reset();
    this.exited.next({
      item,
      container: this
    });
  }
  drop(item, currentIndex, previousIndex, previousContainer, isPointerOverContainer, distance, dropPoint, event) {
    this._reset();
    this.dropped.next({
      item,
      currentIndex,
      previousIndex,
      container: this,
      previousContainer,
      isPointerOverContainer,
      distance,
      dropPoint,
      event
    });
  }
  withItems(items) {
    const previousItems = this._draggables;
    this._draggables = items;
    items.forEach((item) => item._withDropContainer(this));
    if (this.isDragging()) {
      const draggedItems = previousItems.filter((item) => item.isDragging());
      if (draggedItems.every((item) => items.indexOf(item) === -1)) {
        this._reset();
      } else {
        this._sortStrategy.withItems(this._draggables);
      }
    }
    return this;
  }
  withDirection(direction) {
    this._direction = direction;
    if (this._sortStrategy instanceof SingleAxisSortStrategy) {
      this._sortStrategy.direction = direction;
    }
    return this;
  }
  connectedTo(connectedTo) {
    this._siblings = connectedTo.slice();
    return this;
  }
  withOrientation(orientation) {
    if (orientation === "mixed") {
      this._sortStrategy = new MixedSortStrategy(this._document, this._dragDropRegistry);
    } else {
      const strategy = new SingleAxisSortStrategy(this._dragDropRegistry);
      strategy.direction = this._direction;
      strategy.orientation = orientation;
      this._sortStrategy = strategy;
    }
    this._sortStrategy.withElementContainer(this._container);
    this._sortStrategy.withSortPredicate((index, item) => this.sortPredicate(index, item, this));
    return this;
  }
  withScrollableParents(elements) {
    const element = this._container;
    this._scrollableElements = elements.indexOf(element) === -1 ? [element, ...elements] : elements.slice();
    return this;
  }
  withElementContainer(container) {
    if (container === this._container) {
      return this;
    }
    const element = coerceElement(this.element);
    if ((typeof ngDevMode === "undefined" || ngDevMode) && container !== element && !element.contains(container)) {
      throw new Error("Invalid DOM structure for drop list. Alternate container element must be a descendant of the drop list.");
    }
    const oldContainerIndex = this._scrollableElements.indexOf(this._container);
    const newContainerIndex = this._scrollableElements.indexOf(container);
    if (oldContainerIndex > -1) {
      this._scrollableElements.splice(oldContainerIndex, 1);
    }
    if (newContainerIndex > -1) {
      this._scrollableElements.splice(newContainerIndex, 1);
    }
    if (this._sortStrategy) {
      this._sortStrategy.withElementContainer(container);
    }
    this._cachedShadowRoot = null;
    this._scrollableElements.unshift(container);
    this._container = container;
    return this;
  }
  getScrollableParents() {
    return this._scrollableElements;
  }
  getItemIndex(item) {
    return this._isDragging ? this._sortStrategy.getItemIndex(item) : this._draggables.indexOf(item);
  }
  getItemAtIndex(index) {
    return this._isDragging ? this._sortStrategy.getItemAtIndex(index) : this._draggables[index] || null;
  }
  isReceiving() {
    return this._activeSiblings.size > 0;
  }
  _sortItem(item, pointerX, pointerY, pointerDelta) {
    if (this.sortingDisabled || !this._domRect || !isPointerNearDomRect(this._domRect, DROP_PROXIMITY_THRESHOLD, pointerX, pointerY)) {
      return;
    }
    const result = this._sortStrategy.sort(item, pointerX, pointerY, pointerDelta);
    if (result) {
      this.sorted.next({
        previousIndex: result.previousIndex,
        currentIndex: result.currentIndex,
        container: this,
        item
      });
    }
  }
  _startScrollingIfNecessary(pointerX, pointerY) {
    if (this.autoScrollDisabled) {
      return;
    }
    let scrollNode;
    let verticalScrollDirection = AutoScrollVerticalDirection.NONE;
    let horizontalScrollDirection = AutoScrollHorizontalDirection.NONE;
    this._parentPositions.positions.forEach((position, element) => {
      if (element === this._document || !position.clientRect || scrollNode) {
        return;
      }
      if (isPointerNearDomRect(position.clientRect, DROP_PROXIMITY_THRESHOLD, pointerX, pointerY)) {
        [verticalScrollDirection, horizontalScrollDirection] = getElementScrollDirections(element, position.clientRect, this._direction, pointerX, pointerY);
        if (verticalScrollDirection || horizontalScrollDirection) {
          scrollNode = element;
        }
      }
    });
    if (!verticalScrollDirection && !horizontalScrollDirection) {
      const {
        width,
        height
      } = this._viewportRuler.getViewportSize();
      const domRect = {
        width,
        height,
        top: 0,
        right: width,
        bottom: height,
        left: 0
      };
      verticalScrollDirection = getVerticalScrollDirection(domRect, pointerY);
      horizontalScrollDirection = getHorizontalScrollDirection(domRect, pointerX);
      scrollNode = window;
    }
    if (scrollNode && (verticalScrollDirection !== this._verticalScrollDirection || horizontalScrollDirection !== this._horizontalScrollDirection || scrollNode !== this._scrollNode)) {
      this._verticalScrollDirection = verticalScrollDirection;
      this._horizontalScrollDirection = horizontalScrollDirection;
      this._scrollNode = scrollNode;
      if ((verticalScrollDirection || horizontalScrollDirection) && scrollNode) {
        this._ngZone.runOutsideAngular(this._startScrollInterval);
      } else {
        this._stopScrolling();
      }
    }
  }
  _stopScrolling() {
    this._stopScrollTimers.next();
  }
  _draggingStarted() {
    const styles = this._container.style;
    this.beforeStarted.next();
    this._isDragging = true;
    if ((typeof ngDevMode === "undefined" || ngDevMode) && this._container !== coerceElement(this.element)) {
      for (const drag of this._draggables) {
        if (!drag.isDragging() && drag.getVisibleElement().parentNode !== this._container) {
          throw new Error("Invalid DOM structure for drop list. All items must be placed directly inside of the element container.");
        }
      }
    }
    this._initialScrollSnap = styles.msScrollSnapType || styles.scrollSnapType || "";
    styles.scrollSnapType = styles.msScrollSnapType = "none";
    this._sortStrategy.start(this._draggables);
    this._cacheParentPositions();
    this._viewportScrollSubscription.unsubscribe();
    this._listenToScrollEvents();
  }
  _cacheParentPositions() {
    this._parentPositions.cache(this._scrollableElements);
    this._domRect = this._parentPositions.positions.get(this._container).clientRect;
  }
  _reset() {
    this._isDragging = false;
    const styles = this._container.style;
    styles.scrollSnapType = styles.msScrollSnapType = this._initialScrollSnap;
    this._siblings.forEach((sibling) => sibling._stopReceiving(this));
    this._sortStrategy.reset();
    this._stopScrolling();
    this._viewportScrollSubscription.unsubscribe();
    this._parentPositions.clear();
  }
  _startScrollInterval = () => {
    this._stopScrolling();
    interval(0, animationFrameScheduler).pipe(takeUntil(this._stopScrollTimers)).subscribe(() => {
      const node = this._scrollNode;
      const scrollStep = this.autoScrollStep;
      if (this._verticalScrollDirection === AutoScrollVerticalDirection.UP) {
        node.scrollBy(0, -scrollStep);
      } else if (this._verticalScrollDirection === AutoScrollVerticalDirection.DOWN) {
        node.scrollBy(0, scrollStep);
      }
      if (this._horizontalScrollDirection === AutoScrollHorizontalDirection.LEFT) {
        node.scrollBy(-scrollStep, 0);
      } else if (this._horizontalScrollDirection === AutoScrollHorizontalDirection.RIGHT) {
        node.scrollBy(scrollStep, 0);
      }
    });
  };
  _isOverContainer(x, y) {
    return this._domRect != null && isInsideClientRect(this._domRect, x, y);
  }
  _getSiblingContainerFromPosition(item, x, y) {
    return this._siblings.find((sibling) => sibling._canReceive(item, x, y));
  }
  _canReceive(item, x, y) {
    if (!this._domRect || !isInsideClientRect(this._domRect, x, y) || !this.enterPredicate(item, this)) {
      return false;
    }
    const elementFromPoint = this._getShadowRoot().elementFromPoint(x, y);
    if (!elementFromPoint) {
      return false;
    }
    return elementFromPoint === this._container || this._container.contains(elementFromPoint);
  }
  _startReceiving(sibling, items) {
    const activeSiblings = this._activeSiblings;
    if (!activeSiblings.has(sibling) && items.every((item) => {
      return this.enterPredicate(item, this) || this._draggables.indexOf(item) > -1;
    })) {
      activeSiblings.add(sibling);
      this._cacheParentPositions();
      this._listenToScrollEvents();
      this.receivingStarted.next({
        initiator: sibling,
        receiver: this,
        items
      });
    }
  }
  _stopReceiving(sibling) {
    this._activeSiblings.delete(sibling);
    this._viewportScrollSubscription.unsubscribe();
    this.receivingStopped.next({
      initiator: sibling,
      receiver: this
    });
  }
  _listenToScrollEvents() {
    this._viewportScrollSubscription = this._dragDropRegistry.scrolled(this._getShadowRoot()).subscribe((event) => {
      if (this.isDragging()) {
        const scrollDifference = this._parentPositions.handleScroll(event);
        if (scrollDifference) {
          this._sortStrategy.updateOnScroll(scrollDifference.top, scrollDifference.left);
        }
      } else if (this.isReceiving()) {
        this._cacheParentPositions();
      }
    });
  }
  _getShadowRoot() {
    if (!this._cachedShadowRoot) {
      const shadowRoot = _getShadowRoot(this._container);
      this._cachedShadowRoot = shadowRoot || this._document;
    }
    return this._cachedShadowRoot;
  }
  _notifyReceivingSiblings() {
    const draggedItems = this._sortStrategy.getActiveItemsSnapshot().filter((item) => item.isDragging());
    this._siblings.forEach((sibling) => sibling._startReceiving(this, draggedItems));
  }
};
function getVerticalScrollDirection(clientRect, pointerY) {
  const {
    top,
    bottom,
    height
  } = clientRect;
  const yThreshold = height * SCROLL_PROXIMITY_THRESHOLD;
  if (pointerY >= top - yThreshold && pointerY <= top + yThreshold) {
    return AutoScrollVerticalDirection.UP;
  } else if (pointerY >= bottom - yThreshold && pointerY <= bottom + yThreshold) {
    return AutoScrollVerticalDirection.DOWN;
  }
  return AutoScrollVerticalDirection.NONE;
}
function getHorizontalScrollDirection(clientRect, pointerX) {
  const {
    left,
    right,
    width
  } = clientRect;
  const xThreshold = width * SCROLL_PROXIMITY_THRESHOLD;
  if (pointerX >= left - xThreshold && pointerX <= left + xThreshold) {
    return AutoScrollHorizontalDirection.LEFT;
  } else if (pointerX >= right - xThreshold && pointerX <= right + xThreshold) {
    return AutoScrollHorizontalDirection.RIGHT;
  }
  return AutoScrollHorizontalDirection.NONE;
}
function getElementScrollDirections(element, clientRect, direction, pointerX, pointerY) {
  const computedVertical = getVerticalScrollDirection(clientRect, pointerY);
  const computedHorizontal = getHorizontalScrollDirection(clientRect, pointerX);
  let verticalScrollDirection = AutoScrollVerticalDirection.NONE;
  let horizontalScrollDirection = AutoScrollHorizontalDirection.NONE;
  if (computedVertical) {
    const scrollTop = element.scrollTop;
    if (computedVertical === AutoScrollVerticalDirection.UP) {
      if (scrollTop > 0) {
        verticalScrollDirection = AutoScrollVerticalDirection.UP;
      }
    } else if (element.scrollHeight - scrollTop > element.clientHeight) {
      verticalScrollDirection = AutoScrollVerticalDirection.DOWN;
    }
  }
  if (computedHorizontal) {
    const scrollLeft = element.scrollLeft;
    if (direction === "rtl") {
      if (computedHorizontal === AutoScrollHorizontalDirection.RIGHT) {
        if (scrollLeft < 0) {
          horizontalScrollDirection = AutoScrollHorizontalDirection.RIGHT;
        }
      } else if (element.scrollWidth + scrollLeft > element.clientWidth) {
        horizontalScrollDirection = AutoScrollHorizontalDirection.LEFT;
      }
    } else {
      if (computedHorizontal === AutoScrollHorizontalDirection.LEFT) {
        if (scrollLeft > 0) {
          horizontalScrollDirection = AutoScrollHorizontalDirection.LEFT;
        }
      } else if (element.scrollWidth - scrollLeft > element.clientWidth) {
        horizontalScrollDirection = AutoScrollHorizontalDirection.RIGHT;
      }
    }
  }
  return [verticalScrollDirection, horizontalScrollDirection];
}
var DragDrop = class _DragDrop {
  _injector = inject(Injector);
  createDrag(element, config) {
    return createDragRef(this._injector, element, config);
  }
  createDropList(element) {
    return createDropListRef(this._injector, element);
  }
  static \u0275fac = function DragDrop_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _DragDrop)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineService({
    token: _DragDrop,
    factory: _DragDrop.\u0275fac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DragDrop, [{
    type: Service
  }], null, null);
})();
var CDK_DRAG_PARENT = new InjectionToken("CDK_DRAG_PARENT");
function assertElementNode(node, name) {
  if (node.nodeType !== 1) {
    throw Error(`${name} must be attached to an element node. Currently attached to "${node.nodeName}".`);
  }
}
var CDK_DRAG_HANDLE = new InjectionToken("CdkDragHandle");
var CdkDragHandle = class _CdkDragHandle {
  element = inject(ElementRef);
  _parentDrag = inject(CDK_DRAG_PARENT, {
    optional: true,
    skipSelf: true
  });
  _dragDropRegistry = inject(DragDropRegistry);
  _stateChanges = new Subject();
  get disabled() {
    return this._disabled;
  }
  set disabled(value) {
    this._disabled = value;
    this._stateChanges.next(this);
  }
  _disabled = false;
  constructor() {
    if (typeof ngDevMode === "undefined" || ngDevMode) {
      assertElementNode(this.element.nativeElement, "cdkDragHandle");
    }
    this._parentDrag?._addHandle(this);
  }
  ngAfterViewInit() {
    if (!this._parentDrag) {
      let parent = this.element.nativeElement.parentElement;
      while (parent) {
        const ref = this._dragDropRegistry.getDragDirectiveForNode(parent);
        if (ref) {
          this._parentDrag = ref;
          ref._addHandle(this);
          break;
        }
        parent = parent.parentElement;
      }
    }
  }
  ngOnDestroy() {
    this._parentDrag?._removeHandle(this);
    this._stateChanges.complete();
  }
  static \u0275fac = function CdkDragHandle_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CdkDragHandle)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _CdkDragHandle,
    selectors: [["", "cdkDragHandle", ""]],
    hostAttrs: [1, "cdk-drag-handle"],
    inputs: {
      disabled: [2, "cdkDragHandleDisabled", "disabled", booleanAttribute]
    },
    features: [\u0275\u0275ProvidersFeature([{
      provide: CDK_DRAG_HANDLE,
      useExisting: _CdkDragHandle
    }])]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CdkDragHandle, [{
    type: Directive,
    args: [{
      selector: "[cdkDragHandle]",
      host: {
        "class": "cdk-drag-handle"
      },
      providers: [{
        provide: CDK_DRAG_HANDLE,
        useExisting: CdkDragHandle
      }]
    }]
  }], () => [], {
    disabled: [{
      type: Input,
      args: [{
        alias: "cdkDragHandleDisabled",
        transform: booleanAttribute
      }]
    }]
  });
})();
var CDK_DRAG_CONFIG = new InjectionToken("CDK_DRAG_CONFIG");
var CDK_DROP_LIST = new InjectionToken("CdkDropList");
var CdkDrag = class _CdkDrag {
  element = inject(ElementRef);
  dropContainer = inject(CDK_DROP_LIST, {
    optional: true,
    skipSelf: true
  });
  _ngZone = inject(NgZone);
  _viewContainerRef = inject(ViewContainerRef);
  _dir = inject(Directionality, {
    optional: true
  });
  _changeDetectorRef = inject(ChangeDetectorRef);
  _selfHandle = inject(CDK_DRAG_HANDLE, {
    optional: true,
    self: true
  });
  _parentDrag = inject(CDK_DRAG_PARENT, {
    optional: true,
    skipSelf: true
  });
  _dragDropRegistry = inject(DragDropRegistry);
  _destroyed = new Subject();
  _handles = new BehaviorSubject([]);
  _previewTemplate = null;
  _placeholderTemplate = null;
  _dragRef;
  data;
  lockAxis = null;
  rootElementSelector;
  boundaryElement;
  dragStartDelay;
  freeDragPosition;
  get disabled() {
    return this._disabled || !!(this.dropContainer && this.dropContainer.disabled);
  }
  set disabled(value) {
    this._disabled = value;
    this._dragRef.disabled = this._disabled;
  }
  _disabled = false;
  constrainPosition;
  previewClass;
  previewContainer;
  scale = 1;
  started = new EventEmitter();
  released = new EventEmitter();
  ended = new EventEmitter();
  entered = new EventEmitter();
  exited = new EventEmitter();
  dropped = new EventEmitter();
  moved = new Observable((observer) => {
    const subscription = this._dragRef.moved.pipe(map((movedEvent) => ({
      source: this,
      pointerPosition: movedEvent.pointerPosition,
      event: movedEvent.event,
      delta: movedEvent.delta,
      distance: movedEvent.distance
    }))).subscribe(observer);
    return () => {
      subscription.unsubscribe();
    };
  });
  _injector = inject(Injector);
  constructor() {
    const dropContainer = this.dropContainer;
    const config = inject(CDK_DRAG_CONFIG, {
      optional: true
    });
    this._dragRef = createDragRef(this._injector, this.element, {
      dragStartThreshold: config && config.dragStartThreshold != null ? config.dragStartThreshold : 5,
      pointerDirectionChangeThreshold: config && config.pointerDirectionChangeThreshold != null ? config.pointerDirectionChangeThreshold : 5,
      zIndex: config?.zIndex
    });
    this._dragRef.data = this;
    this._dragDropRegistry.registerDirectiveNode(this.element.nativeElement, this);
    if (config) {
      this._assignDefaults(config);
    }
    if (dropContainer) {
      dropContainer.addItem(this);
      dropContainer._dropListRef.beforeStarted.pipe(takeUntil(this._destroyed)).subscribe(() => {
        this._dragRef.scale = this.scale;
      });
    }
    this._syncInputs(this._dragRef);
    this._handleEvents(this._dragRef);
  }
  getPlaceholderElement() {
    return this._dragRef.getPlaceholderElement();
  }
  getRootElement() {
    return this._dragRef.getRootElement();
  }
  reset() {
    this._dragRef.reset();
  }
  resetToBoundary() {
    this._dragRef.resetToBoundary();
  }
  getFreeDragPosition() {
    return this._dragRef.getFreeDragPosition();
  }
  setFreeDragPosition(value) {
    this._dragRef.setFreeDragPosition(value);
  }
  ngAfterViewInit() {
    afterNextRender(() => {
      this._updateRootElement();
      this._setupHandlesListener();
      this._dragRef.scale = this.scale;
      if (this.freeDragPosition) {
        this._dragRef.setFreeDragPosition(this.freeDragPosition);
      }
    }, {
      injector: this._injector
    });
  }
  ngOnChanges(changes) {
    const rootSelectorChange = changes["rootElementSelector"];
    const positionChange = changes["freeDragPosition"];
    if (rootSelectorChange && !rootSelectorChange.firstChange) {
      this._updateRootElement();
    }
    this._dragRef.scale = this.scale;
    if (positionChange && !positionChange.firstChange && this.freeDragPosition) {
      this._dragRef.setFreeDragPosition(this.freeDragPosition);
    }
  }
  ngOnDestroy() {
    if (this.dropContainer) {
      this.dropContainer.removeItem(this);
    }
    this._dragDropRegistry.removeDirectiveNode(this.element.nativeElement);
    this._ngZone.runOutsideAngular(() => {
      this._handles.complete();
      this._destroyed.next();
      this._destroyed.complete();
      this._dragRef.dispose();
    });
  }
  _addHandle(handle) {
    const handles = this._handles.getValue();
    handles.push(handle);
    this._handles.next(handles);
  }
  _removeHandle(handle) {
    const handles = this._handles.getValue();
    const index = handles.indexOf(handle);
    if (index > -1) {
      handles.splice(index, 1);
      this._handles.next(handles);
    }
  }
  _setPreviewTemplate(preview) {
    this._previewTemplate = preview;
  }
  _resetPreviewTemplate(preview) {
    if (preview === this._previewTemplate) {
      this._previewTemplate = null;
    }
  }
  _setPlaceholderTemplate(placeholder) {
    this._placeholderTemplate = placeholder;
  }
  _resetPlaceholderTemplate(placeholder) {
    if (placeholder === this._placeholderTemplate) {
      this._placeholderTemplate = null;
    }
  }
  _updateRootElement() {
    const element = this.element.nativeElement;
    let rootElement = element;
    if (this.rootElementSelector) {
      rootElement = element.closest !== void 0 ? element.closest(this.rootElementSelector) : element.parentElement?.closest(this.rootElementSelector);
    }
    if (rootElement && (typeof ngDevMode === "undefined" || ngDevMode)) {
      assertElementNode(rootElement, "cdkDrag");
    }
    this._dragRef.withRootElement(rootElement || element);
  }
  _getBoundaryElement() {
    const boundary = this.boundaryElement;
    if (!boundary) {
      return null;
    }
    if (typeof boundary === "string") {
      return this.element.nativeElement.closest(boundary);
    }
    return coerceElement(boundary);
  }
  _syncInputs(ref) {
    ref.beforeStarted.subscribe(() => {
      if (!ref.isDragging()) {
        const dir = this._dir;
        const dragStartDelay = this.dragStartDelay;
        const placeholder = this._placeholderTemplate ? {
          template: this._placeholderTemplate.templateRef,
          context: this._placeholderTemplate.data,
          viewContainer: this._viewContainerRef
        } : null;
        const preview = this._previewTemplate ? {
          template: this._previewTemplate.templateRef,
          context: this._previewTemplate.data,
          matchSize: this._previewTemplate.matchSize,
          viewContainer: this._viewContainerRef
        } : null;
        ref.disabled = this.disabled;
        ref.lockAxis = this.lockAxis;
        ref.scale = this.scale;
        ref.dragStartDelay = typeof dragStartDelay === "object" && dragStartDelay ? dragStartDelay : coerceNumberProperty(dragStartDelay);
        ref.constrainPosition = this.constrainPosition;
        ref.previewClass = this.previewClass;
        ref.withBoundaryElement(this._getBoundaryElement()).withPlaceholderTemplate(placeholder).withPreviewTemplate(preview).withPreviewContainer(this.previewContainer || "global");
        if (dir) {
          ref.withDirection(dir.value);
        }
      }
    });
    ref.beforeStarted.pipe(take(1)).subscribe(() => {
      if (this._parentDrag) {
        ref.withParent(this._parentDrag._dragRef);
        return;
      }
      let parent = this.element.nativeElement.parentElement;
      while (parent) {
        const parentDrag = this._dragDropRegistry.getDragDirectiveForNode(parent);
        if (parentDrag) {
          ref.withParent(parentDrag._dragRef);
          break;
        }
        parent = parent.parentElement;
      }
    });
  }
  _handleEvents(ref) {
    ref.started.subscribe((startEvent) => {
      this.started.emit({
        source: this,
        event: startEvent.event
      });
      this._changeDetectorRef.markForCheck();
    });
    ref.released.subscribe((releaseEvent) => {
      this.released.emit({
        source: this,
        event: releaseEvent.event
      });
    });
    ref.ended.subscribe((endEvent) => {
      this.ended.emit({
        source: this,
        distance: endEvent.distance,
        dropPoint: endEvent.dropPoint,
        event: endEvent.event
      });
      this._changeDetectorRef.markForCheck();
    });
    ref.entered.subscribe((enterEvent) => {
      this.entered.emit({
        container: enterEvent.container.data,
        item: this,
        currentIndex: enterEvent.currentIndex
      });
    });
    ref.exited.subscribe((exitEvent) => {
      this.exited.emit({
        container: exitEvent.container.data,
        item: this
      });
    });
    ref.dropped.subscribe((dropEvent) => {
      this.dropped.emit({
        previousIndex: dropEvent.previousIndex,
        currentIndex: dropEvent.currentIndex,
        previousContainer: dropEvent.previousContainer.data,
        container: dropEvent.container.data,
        isPointerOverContainer: dropEvent.isPointerOverContainer,
        item: this,
        distance: dropEvent.distance,
        dropPoint: dropEvent.dropPoint,
        event: dropEvent.event
      });
    });
  }
  _assignDefaults(config) {
    const {
      lockAxis,
      dragStartDelay,
      constrainPosition,
      previewClass,
      boundaryElement,
      draggingDisabled,
      rootElementSelector,
      previewContainer
    } = config;
    this.disabled = draggingDisabled == null ? false : draggingDisabled;
    this.dragStartDelay = dragStartDelay || 0;
    this.lockAxis = lockAxis || null;
    if (constrainPosition) {
      this.constrainPosition = constrainPosition;
    }
    if (previewClass) {
      this.previewClass = previewClass;
    }
    if (boundaryElement) {
      this.boundaryElement = boundaryElement;
    }
    if (rootElementSelector) {
      this.rootElementSelector = rootElementSelector;
    }
    if (previewContainer) {
      this.previewContainer = previewContainer;
    }
  }
  _setupHandlesListener() {
    this._handles.pipe(tap((handles) => {
      const handleElements = handles.map((handle) => handle.element);
      if (this._selfHandle && this.rootElementSelector) {
        handleElements.push(this.element);
      }
      this._dragRef.withHandles(handleElements);
    }), switchMap((handles) => {
      return merge(...handles.map((item) => item._stateChanges.pipe(startWith(item))));
    }), takeUntil(this._destroyed)).subscribe((handleInstance) => {
      const dragRef = this._dragRef;
      const handle = handleInstance.element.nativeElement;
      handleInstance.disabled ? dragRef.disableHandle(handle) : dragRef.enableHandle(handle);
    });
  }
  static \u0275fac = function CdkDrag_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CdkDrag)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _CdkDrag,
    selectors: [["", "cdkDrag", ""]],
    hostAttrs: [1, "cdk-drag"],
    hostVars: 4,
    hostBindings: function CdkDrag_HostBindings(rf, ctx) {
      if (rf & 2) {
        \u0275\u0275classProp("cdk-drag-disabled", ctx.disabled)("cdk-drag-dragging", ctx._dragRef.isDragging());
      }
    },
    inputs: {
      data: [0, "cdkDragData", "data"],
      lockAxis: [0, "cdkDragLockAxis", "lockAxis"],
      rootElementSelector: [0, "cdkDragRootElement", "rootElementSelector"],
      boundaryElement: [0, "cdkDragBoundary", "boundaryElement"],
      dragStartDelay: [0, "cdkDragStartDelay", "dragStartDelay"],
      freeDragPosition: [0, "cdkDragFreeDragPosition", "freeDragPosition"],
      disabled: [2, "cdkDragDisabled", "disabled", booleanAttribute],
      constrainPosition: [0, "cdkDragConstrainPosition", "constrainPosition"],
      previewClass: [0, "cdkDragPreviewClass", "previewClass"],
      previewContainer: [0, "cdkDragPreviewContainer", "previewContainer"],
      scale: [2, "cdkDragScale", "scale", numberAttribute]
    },
    outputs: {
      started: "cdkDragStarted",
      released: "cdkDragReleased",
      ended: "cdkDragEnded",
      entered: "cdkDragEntered",
      exited: "cdkDragExited",
      dropped: "cdkDragDropped",
      moved: "cdkDragMoved"
    },
    exportAs: ["cdkDrag"],
    features: [\u0275\u0275ProvidersFeature([{
      provide: CDK_DRAG_PARENT,
      useExisting: _CdkDrag
    }]), \u0275\u0275NgOnChangesFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CdkDrag, [{
    type: Directive,
    args: [{
      selector: "[cdkDrag]",
      exportAs: "cdkDrag",
      host: {
        "class": "cdk-drag",
        "[class.cdk-drag-disabled]": "disabled",
        "[class.cdk-drag-dragging]": "_dragRef.isDragging()"
      },
      providers: [{
        provide: CDK_DRAG_PARENT,
        useExisting: CdkDrag
      }]
    }]
  }], () => [], {
    data: [{
      type: Input,
      args: ["cdkDragData"]
    }],
    lockAxis: [{
      type: Input,
      args: ["cdkDragLockAxis"]
    }],
    rootElementSelector: [{
      type: Input,
      args: ["cdkDragRootElement"]
    }],
    boundaryElement: [{
      type: Input,
      args: ["cdkDragBoundary"]
    }],
    dragStartDelay: [{
      type: Input,
      args: ["cdkDragStartDelay"]
    }],
    freeDragPosition: [{
      type: Input,
      args: ["cdkDragFreeDragPosition"]
    }],
    disabled: [{
      type: Input,
      args: [{
        alias: "cdkDragDisabled",
        transform: booleanAttribute
      }]
    }],
    constrainPosition: [{
      type: Input,
      args: ["cdkDragConstrainPosition"]
    }],
    previewClass: [{
      type: Input,
      args: ["cdkDragPreviewClass"]
    }],
    previewContainer: [{
      type: Input,
      args: ["cdkDragPreviewContainer"]
    }],
    scale: [{
      type: Input,
      args: [{
        alias: "cdkDragScale",
        transform: numberAttribute
      }]
    }],
    started: [{
      type: Output,
      args: ["cdkDragStarted"]
    }],
    released: [{
      type: Output,
      args: ["cdkDragReleased"]
    }],
    ended: [{
      type: Output,
      args: ["cdkDragEnded"]
    }],
    entered: [{
      type: Output,
      args: ["cdkDragEntered"]
    }],
    exited: [{
      type: Output,
      args: ["cdkDragExited"]
    }],
    dropped: [{
      type: Output,
      args: ["cdkDragDropped"]
    }],
    moved: [{
      type: Output,
      args: ["cdkDragMoved"]
    }]
  });
})();
var CDK_DROP_LIST_GROUP = new InjectionToken("CdkDropListGroup");
var CdkDropListGroup = class _CdkDropListGroup {
  _items = /* @__PURE__ */ new Set();
  disabled = false;
  ngOnDestroy() {
    this._items.clear();
  }
  static \u0275fac = function CdkDropListGroup_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CdkDropListGroup)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _CdkDropListGroup,
    selectors: [["", "cdkDropListGroup", ""]],
    inputs: {
      disabled: [2, "cdkDropListGroupDisabled", "disabled", booleanAttribute]
    },
    exportAs: ["cdkDropListGroup"],
    features: [\u0275\u0275ProvidersFeature([{
      provide: CDK_DROP_LIST_GROUP,
      useExisting: _CdkDropListGroup
    }])]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CdkDropListGroup, [{
    type: Directive,
    args: [{
      selector: "[cdkDropListGroup]",
      exportAs: "cdkDropListGroup",
      providers: [{
        provide: CDK_DROP_LIST_GROUP,
        useExisting: CdkDropListGroup
      }]
    }]
  }], null, {
    disabled: [{
      type: Input,
      args: [{
        alias: "cdkDropListGroupDisabled",
        transform: booleanAttribute
      }]
    }]
  });
})();
var CdkDropList = class _CdkDropList {
  element = inject(ElementRef);
  _changeDetectorRef = inject(ChangeDetectorRef);
  _scrollDispatcher = inject(ScrollDispatcher);
  _dir = inject(Directionality, {
    optional: true
  });
  _group = inject(CDK_DROP_LIST_GROUP, {
    optional: true,
    skipSelf: true
  });
  _latestSortedRefs;
  _destroyed = new Subject();
  _scrollableParentsResolved = false;
  static _dropLists = [];
  _dropListRef;
  connectedTo = [];
  data;
  orientation = "vertical";
  id = inject(_IdGenerator).getId("cdk-drop-list-");
  lockAxis = null;
  get disabled() {
    return this._disabled || !!this._group && this._group.disabled;
  }
  set disabled(value) {
    this._dropListRef.disabled = this._disabled = value;
  }
  _disabled = false;
  sortingDisabled = false;
  enterPredicate = () => true;
  sortPredicate = () => true;
  autoScrollDisabled = false;
  autoScrollStep;
  elementContainerSelector = null;
  hasAnchor = false;
  dropped = new EventEmitter();
  entered = new EventEmitter();
  exited = new EventEmitter();
  sorted = new EventEmitter();
  _unsortedItems = /* @__PURE__ */ new Set();
  constructor() {
    const config = inject(CDK_DRAG_CONFIG, {
      optional: true
    });
    const injector = inject(Injector);
    if (typeof ngDevMode === "undefined" || ngDevMode) {
      assertElementNode(this.element.nativeElement, "cdkDropList");
    }
    this._dropListRef = createDropListRef(injector, this.element);
    this._dropListRef.data = this;
    if (config) {
      this._assignDefaults(config);
    }
    this._dropListRef.enterPredicate = (drag, drop) => {
      return this.enterPredicate(drag.data, drop.data);
    };
    this._dropListRef.sortPredicate = (index, drag, drop) => {
      return this.sortPredicate(index, drag.data, drop.data);
    };
    this._setupInputSyncSubscription(this._dropListRef);
    this._handleEvents(this._dropListRef);
    _CdkDropList._dropLists.push(this);
    if (this._group) {
      this._group._items.add(this);
    }
  }
  addItem(item) {
    this._unsortedItems.add(item);
    item._dragRef._withDropContainer(this._dropListRef);
    if (this._dropListRef.isDragging()) {
      this._syncItemsWithRef(this.getSortedItems().map((item2) => item2._dragRef));
    }
  }
  removeItem(item) {
    this._unsortedItems.delete(item);
    if (this._latestSortedRefs) {
      const index = this._latestSortedRefs.indexOf(item._dragRef);
      if (index > -1) {
        this._latestSortedRefs.splice(index, 1);
        this._syncItemsWithRef(this._latestSortedRefs);
      }
    }
  }
  getSortedItems() {
    return Array.from(this._unsortedItems).sort((a, b) => {
      const documentPosition = a._dragRef.getVisibleElement().compareDocumentPosition(b._dragRef.getVisibleElement());
      return documentPosition & Node.DOCUMENT_POSITION_FOLLOWING ? -1 : 1;
    });
  }
  ngOnDestroy() {
    const index = _CdkDropList._dropLists.indexOf(this);
    if (index > -1) {
      _CdkDropList._dropLists.splice(index, 1);
    }
    if (this._group) {
      this._group._items.delete(this);
    }
    this._latestSortedRefs = void 0;
    this._unsortedItems.clear();
    this._dropListRef.dispose();
    this._destroyed.next();
    this._destroyed.complete();
  }
  _setupInputSyncSubscription(ref) {
    if (this._dir) {
      this._dir.change.pipe(startWith(this._dir.value), takeUntil(this._destroyed)).subscribe((value) => ref.withDirection(value));
    }
    ref.beforeStarted.subscribe(() => {
      const siblings = coerceArray(this.connectedTo).map((drop) => {
        if (typeof drop === "string") {
          const correspondingDropList = _CdkDropList._dropLists.find((list) => list.id === drop);
          if (!correspondingDropList && (typeof ngDevMode === "undefined" || ngDevMode)) {
            console.warn(`CdkDropList could not find connected drop list with id "${drop}"`);
          }
          return correspondingDropList;
        }
        return drop;
      });
      if (this._group) {
        this._group._items.forEach((drop) => {
          if (siblings.indexOf(drop) === -1) {
            siblings.push(drop);
          }
        });
      }
      if (!this._scrollableParentsResolved) {
        const scrollableParents = this._scrollDispatcher.getAncestorScrollContainers(this.element).map((scrollable) => scrollable.getElementRef().nativeElement);
        this._dropListRef.withScrollableParents(scrollableParents);
        this._scrollableParentsResolved = true;
      }
      if (this.elementContainerSelector) {
        const container = this.element.nativeElement.querySelector(this.elementContainerSelector);
        if (!container && (typeof ngDevMode === "undefined" || ngDevMode)) {
          throw new Error(`CdkDropList could not find an element container matching the selector "${this.elementContainerSelector}"`);
        }
        ref.withElementContainer(container);
      }
      ref.disabled = this.disabled;
      ref.lockAxis = this.lockAxis;
      ref.sortingDisabled = this.sortingDisabled;
      ref.autoScrollDisabled = this.autoScrollDisabled;
      ref.autoScrollStep = coerceNumberProperty(this.autoScrollStep, 2);
      ref.hasAnchor = this.hasAnchor;
      ref.connectedTo(siblings.filter((drop) => drop && drop !== this).map((list) => list._dropListRef)).withOrientation(this.orientation);
    });
  }
  _handleEvents(ref) {
    ref.beforeStarted.subscribe(() => {
      this._syncItemsWithRef(this.getSortedItems().map((item) => item._dragRef));
      this._changeDetectorRef.markForCheck();
    });
    ref.entered.subscribe((event) => {
      this.entered.emit({
        container: this,
        item: event.item.data,
        currentIndex: event.currentIndex
      });
    });
    ref.exited.subscribe((event) => {
      this.exited.emit({
        container: this,
        item: event.item.data
      });
      this._changeDetectorRef.markForCheck();
    });
    ref.sorted.subscribe((event) => {
      this.sorted.emit({
        previousIndex: event.previousIndex,
        currentIndex: event.currentIndex,
        container: this,
        item: event.item.data
      });
    });
    ref.dropped.subscribe((dropEvent) => {
      this.dropped.emit({
        previousIndex: dropEvent.previousIndex,
        currentIndex: dropEvent.currentIndex,
        previousContainer: dropEvent.previousContainer.data,
        container: dropEvent.container.data,
        item: dropEvent.item.data,
        isPointerOverContainer: dropEvent.isPointerOverContainer,
        distance: dropEvent.distance,
        dropPoint: dropEvent.dropPoint,
        event: dropEvent.event
      });
      this._changeDetectorRef.markForCheck();
    });
    merge(ref.receivingStarted, ref.receivingStopped).subscribe(() => this._changeDetectorRef.markForCheck());
  }
  _assignDefaults(config) {
    const {
      lockAxis,
      draggingDisabled,
      sortingDisabled,
      listAutoScrollDisabled,
      listOrientation
    } = config;
    this.disabled = draggingDisabled == null ? false : draggingDisabled;
    this.sortingDisabled = sortingDisabled == null ? false : sortingDisabled;
    this.autoScrollDisabled = listAutoScrollDisabled == null ? false : listAutoScrollDisabled;
    this.orientation = listOrientation || "vertical";
    this.lockAxis = lockAxis || null;
  }
  _syncItemsWithRef(items) {
    this._latestSortedRefs = items;
    this._dropListRef.withItems(items);
  }
  static \u0275fac = function CdkDropList_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CdkDropList)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _CdkDropList,
    selectors: [["", "cdkDropList", ""], ["cdk-drop-list"]],
    hostAttrs: [1, "cdk-drop-list"],
    hostVars: 7,
    hostBindings: function CdkDropList_HostBindings(rf, ctx) {
      if (rf & 2) {
        \u0275\u0275attribute("id", ctx.id);
        \u0275\u0275classProp("cdk-drop-list-disabled", ctx.disabled)("cdk-drop-list-dragging", ctx._dropListRef.isDragging())("cdk-drop-list-receiving", ctx._dropListRef.isReceiving());
      }
    },
    inputs: {
      connectedTo: [0, "cdkDropListConnectedTo", "connectedTo"],
      data: [0, "cdkDropListData", "data"],
      orientation: [0, "cdkDropListOrientation", "orientation"],
      id: "id",
      lockAxis: [0, "cdkDropListLockAxis", "lockAxis"],
      disabled: [2, "cdkDropListDisabled", "disabled", booleanAttribute],
      sortingDisabled: [2, "cdkDropListSortingDisabled", "sortingDisabled", booleanAttribute],
      enterPredicate: [0, "cdkDropListEnterPredicate", "enterPredicate"],
      sortPredicate: [0, "cdkDropListSortPredicate", "sortPredicate"],
      autoScrollDisabled: [2, "cdkDropListAutoScrollDisabled", "autoScrollDisabled", booleanAttribute],
      autoScrollStep: [0, "cdkDropListAutoScrollStep", "autoScrollStep"],
      elementContainerSelector: [0, "cdkDropListElementContainer", "elementContainerSelector"],
      hasAnchor: [2, "cdkDropListHasAnchor", "hasAnchor", booleanAttribute]
    },
    outputs: {
      dropped: "cdkDropListDropped",
      entered: "cdkDropListEntered",
      exited: "cdkDropListExited",
      sorted: "cdkDropListSorted"
    },
    exportAs: ["cdkDropList"],
    features: [\u0275\u0275ProvidersFeature([{
      provide: CDK_DROP_LIST_GROUP,
      useValue: void 0
    }, {
      provide: CDK_DROP_LIST,
      useExisting: _CdkDropList
    }])]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CdkDropList, [{
    type: Directive,
    args: [{
      selector: "[cdkDropList], cdk-drop-list",
      exportAs: "cdkDropList",
      providers: [{
        provide: CDK_DROP_LIST_GROUP,
        useValue: void 0
      }, {
        provide: CDK_DROP_LIST,
        useExisting: CdkDropList
      }],
      host: {
        "class": "cdk-drop-list",
        "[attr.id]": "id",
        "[class.cdk-drop-list-disabled]": "disabled",
        "[class.cdk-drop-list-dragging]": "_dropListRef.isDragging()",
        "[class.cdk-drop-list-receiving]": "_dropListRef.isReceiving()"
      }
    }]
  }], () => [], {
    connectedTo: [{
      type: Input,
      args: ["cdkDropListConnectedTo"]
    }],
    data: [{
      type: Input,
      args: ["cdkDropListData"]
    }],
    orientation: [{
      type: Input,
      args: ["cdkDropListOrientation"]
    }],
    id: [{
      type: Input
    }],
    lockAxis: [{
      type: Input,
      args: ["cdkDropListLockAxis"]
    }],
    disabled: [{
      type: Input,
      args: [{
        alias: "cdkDropListDisabled",
        transform: booleanAttribute
      }]
    }],
    sortingDisabled: [{
      type: Input,
      args: [{
        alias: "cdkDropListSortingDisabled",
        transform: booleanAttribute
      }]
    }],
    enterPredicate: [{
      type: Input,
      args: ["cdkDropListEnterPredicate"]
    }],
    sortPredicate: [{
      type: Input,
      args: ["cdkDropListSortPredicate"]
    }],
    autoScrollDisabled: [{
      type: Input,
      args: [{
        alias: "cdkDropListAutoScrollDisabled",
        transform: booleanAttribute
      }]
    }],
    autoScrollStep: [{
      type: Input,
      args: ["cdkDropListAutoScrollStep"]
    }],
    elementContainerSelector: [{
      type: Input,
      args: ["cdkDropListElementContainer"]
    }],
    hasAnchor: [{
      type: Input,
      args: [{
        alias: "cdkDropListHasAnchor",
        transform: booleanAttribute
      }]
    }],
    dropped: [{
      type: Output,
      args: ["cdkDropListDropped"]
    }],
    entered: [{
      type: Output,
      args: ["cdkDropListEntered"]
    }],
    exited: [{
      type: Output,
      args: ["cdkDropListExited"]
    }],
    sorted: [{
      type: Output,
      args: ["cdkDropListSorted"]
    }]
  });
})();
var CDK_DRAG_PREVIEW = new InjectionToken("CdkDragPreview");
var CdkDragPreview = class _CdkDragPreview {
  templateRef = inject(TemplateRef);
  _drag = inject(CDK_DRAG_PARENT, {
    optional: true
  });
  data;
  matchSize = false;
  constructor() {
    this._drag?._setPreviewTemplate(this);
  }
  ngOnDestroy() {
    this._drag?._resetPreviewTemplate(this);
  }
  static \u0275fac = function CdkDragPreview_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CdkDragPreview)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _CdkDragPreview,
    selectors: [["ng-template", "cdkDragPreview", ""]],
    inputs: {
      data: "data",
      matchSize: [2, "matchSize", "matchSize", booleanAttribute]
    },
    features: [\u0275\u0275ProvidersFeature([{
      provide: CDK_DRAG_PREVIEW,
      useExisting: _CdkDragPreview
    }])]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CdkDragPreview, [{
    type: Directive,
    args: [{
      selector: "ng-template[cdkDragPreview]",
      providers: [{
        provide: CDK_DRAG_PREVIEW,
        useExisting: CdkDragPreview
      }]
    }]
  }], () => [], {
    data: [{
      type: Input
    }],
    matchSize: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }]
  });
})();
var CDK_DRAG_PLACEHOLDER = new InjectionToken("CdkDragPlaceholder");
var CdkDragPlaceholder = class _CdkDragPlaceholder {
  templateRef = inject(TemplateRef);
  _drag = inject(CDK_DRAG_PARENT, {
    optional: true
  });
  data;
  constructor() {
    this._drag?._setPlaceholderTemplate(this);
  }
  ngOnDestroy() {
    this._drag?._resetPlaceholderTemplate(this);
  }
  static \u0275fac = function CdkDragPlaceholder_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CdkDragPlaceholder)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _CdkDragPlaceholder,
    selectors: [["ng-template", "cdkDragPlaceholder", ""]],
    inputs: {
      data: "data"
    },
    features: [\u0275\u0275ProvidersFeature([{
      provide: CDK_DRAG_PLACEHOLDER,
      useExisting: _CdkDragPlaceholder
    }])]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CdkDragPlaceholder, [{
    type: Directive,
    args: [{
      selector: "ng-template[cdkDragPlaceholder]",
      providers: [{
        provide: CDK_DRAG_PLACEHOLDER,
        useExisting: CdkDragPlaceholder
      }]
    }]
  }], () => [], {
    data: [{
      type: Input
    }]
  });
})();
var DRAG_DROP_DIRECTIVES = [CdkDropList, CdkDropListGroup, CdkDrag, CdkDragHandle, CdkDragPreview, CdkDragPlaceholder];
var DragDropModule = class _DragDropModule {
  static \u0275fac = function DragDropModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _DragDropModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _DragDropModule,
    imports: [CdkDropList, CdkDropListGroup, CdkDrag, CdkDragHandle, CdkDragPreview, CdkDragPlaceholder],
    exports: [CdkScrollableModule, CdkDropList, CdkDropListGroup, CdkDrag, CdkDragHandle, CdkDragPreview, CdkDragPlaceholder]
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
    providers: [DragDrop],
    imports: [CdkScrollableModule]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DragDropModule, [{
    type: NgModule,
    args: [{
      imports: DRAG_DROP_DIRECTIVES,
      exports: [CdkScrollableModule, ...DRAG_DROP_DIRECTIVES],
      providers: [DragDrop]
    }]
  }], null, null);
})();

// src/app/features/logistics/components/grouping-board/grouping-board.component.ts
var _forTrack0 = ($index, $item) => $item.draft_id;
var _forTrack1 = ($index, $item) => $item.groupId;
function GroupingBoardComponent_Conditional_13_For_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 16)(1, "span");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 17)(4, "span", 18);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "button", 19);
    \u0275\u0275listener("click", function GroupingBoardComponent_Conditional_13_For_7_Template_button_click_6_listener($event) {
      const review_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      ctx_r1.docClicked.emit(review_r4);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275text(7, "\u{1F441}\uFE0F");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const review_r4 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("is-saved", ctx_r1.workflow.isGroupSaved(review_r4.group_id || null));
    \u0275\u0275property("cdkDragDisabled", ctx_r1.workflow.isGroupSaved(review_r4.group_id || null))("ngStyle", review_r4.uiGroupStyle);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", review_r4.uiGlobalIndex + 1, ". ", review_r4.source_name);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(review_r4.details_confirmed ? "Ready" : "Draft");
  }
}
function GroupingBoardComponent_Conditional_13_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 14);
    \u0275\u0275text(1, " Drag PDFs here to ungroup ");
    \u0275\u0275elementEnd();
  }
}
function GroupingBoardComponent_Conditional_13_For_10_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 24);
    \u0275\u0275listener("click", function GroupingBoardComponent_Conditional_13_For_10_Conditional_4_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r7);
      const group_r6 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.removeGroup(group_r6.groupId));
    });
    \u0275\u0275text(1, " Remove ");
    \u0275\u0275elementEnd();
  }
}
function GroupingBoardComponent_Conditional_13_For_10_For_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 16)(1, "span");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 17)(4, "span", 18);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "button", 19);
    \u0275\u0275listener("click", function GroupingBoardComponent_Conditional_13_For_10_For_7_Template_button_click_6_listener($event) {
      const review_r9 = \u0275\u0275restoreView(_r8).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      ctx_r1.docClicked.emit(review_r9);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275text(7, "\u{1F441}\uFE0F");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const review_r9 = ctx.$implicit;
    const group_r6 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("is-saved", ctx_r1.workflow.isGroupSaved(group_r6.groupId));
    \u0275\u0275property("cdkDragDisabled", ctx_r1.workflow.isGroupSaved(group_r6.groupId))("ngStyle", review_r9.uiGroupStyle);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", review_r9.uiGlobalIndex + 1, ". ", review_r9.source_name);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(review_r9.details_confirmed ? "Ready" : "Draft");
  }
}
function GroupingBoardComponent_Conditional_13_For_10_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 14);
    \u0275\u0275text(1, " Drag PDFs here ");
    \u0275\u0275elementEnd();
  }
}
function GroupingBoardComponent_Conditional_13_For_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 20);
    \u0275\u0275listener("cdkDropListDropped", function GroupingBoardComponent_Conditional_13_For_10_Template_div_cdkDropListDropped_0_listener($event) {
      const group_r6 = \u0275\u0275restoreView(_r5).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.drop($event, group_r6.groupId));
    });
    \u0275\u0275elementStart(1, "div", 21)(2, "div", 22);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(4, GroupingBoardComponent_Conditional_13_For_10_Conditional_4_Template, 2, 0, "button", 23);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 12);
    \u0275\u0275repeaterCreate(6, GroupingBoardComponent_Conditional_13_For_10_For_7_Template, 8, 7, "div", 13, _forTrack0);
    \u0275\u0275conditionalCreate(8, GroupingBoardComponent_Conditional_13_For_10_Conditional_8_Template, 2, 0, "div", 14);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const group_r6 = ctx.$implicit;
    const \u0275$index_53_r10 = ctx.$index;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275styleProp("border-top", group_r6.color ? "4px solid " + group_r6.color : null);
    \u0275\u0275classProp("is-saved", ctx_r1.workflow.isGroupSaved(group_r6.groupId));
    \u0275\u0275property("cdkDropListData", group_r6.drafts)("cdkDropListDisabled", ctx_r1.workflow.isGroupSaved(group_r6.groupId));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" Group ", \u0275$index_53_r10 + 1, " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(group_r6.color && !ctx_r1.workflow.isGroupSaved(group_r6.groupId) ? 4 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275repeater(group_r6.drafts);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(group_r6.drafts.length === 0 ? 8 : -1);
  }
}
function GroupingBoardComponent_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 8)(1, "div", 9)(2, "div", 10);
    \u0275\u0275listener("cdkDropListDropped", function GroupingBoardComponent_Conditional_13_Template_div_cdkDropListDropped_2_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.drop($event, null));
    });
    \u0275\u0275elementStart(3, "div", 11);
    \u0275\u0275text(4, " Ungrouped Files ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 12);
    \u0275\u0275repeaterCreate(6, GroupingBoardComponent_Conditional_13_For_7_Template, 8, 7, "div", 13, _forTrack0);
    \u0275\u0275conditionalCreate(8, GroupingBoardComponent_Conditional_13_Conditional_8_Template, 2, 0, "div", 14);
    \u0275\u0275elementEnd()();
    \u0275\u0275repeaterCreate(9, GroupingBoardComponent_Conditional_13_For_10_Template, 9, 9, "div", 15, _forTrack1);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("cdkDropListData", ctx_r1.workflow.ungroupedDrafts());
    \u0275\u0275advance(4);
    \u0275\u0275repeater(ctx_r1.workflow.ungroupedDrafts());
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.workflow.ungroupedDrafts().length === 0 ? 8 : -1);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.workflow.groupedAllDrafts());
  }
}
var GroupingBoardComponent = class _GroupingBoardComponent {
  constructor(extractionService, toast) {
    this.extractionService = extractionService;
    this.toast = toast;
  }
  extractionService;
  toast;
  workflow = inject(WorkflowStateService);
  isMultiSelectOpen = false;
  docClicked = new EventEmitter();
  drop(event, targetGroupId) {
    if (this.workflow.isGroupSaved(targetGroupId))
      return;
    if (event.previousContainer === event.container) {
      return;
    }
    const movedDraft = event.previousContainer.data[event.previousIndex];
    const sourceGroupId = movedDraft.group_id || null;
    if (this.workflow.isGroupSaved(sourceGroupId))
      return;
    const batchId = movedDraft.batch_id;
    const documentId = movedDraft.document_id;
    this.workflow.moveDraftToGroup(movedDraft.draft_id, targetGroupId);
    this.removeGroupIfEmpty(sourceGroupId, targetGroupId);
    if (sourceGroupId && targetGroupId && batchId && documentId && this.workflow.isServerGroup(sourceGroupId) && this.workflow.isServerGroup(targetGroupId)) {
      this.extractionService.reassignDocuments(batchId, sourceGroupId, targetGroupId, [documentId]).subscribe({
        next: () => {
        },
        error: () => {
          this.toast.show("Could not update the shipment groups on the server. Please try again.", "error");
        }
      });
    }
  }
  removeGroupIfEmpty(sourceGroupId, targetGroupId) {
    if (!sourceGroupId || sourceGroupId === targetGroupId)
      return;
    const remainingDrafts = this.workflow.enrichedHblReviews().filter((d) => d.group_id === sourceGroupId);
    if (remainingDrafts.length === 0) {
      this.workflow.removeGroup(sourceGroupId);
    }
  }
  addGroup(event) {
    event.stopPropagation();
    this.workflow.addGroup();
  }
  removeGroup(groupId) {
    this.workflow.removeGroup(groupId);
  }
  clearSuggestions(event) {
    event.stopPropagation();
    this.workflow.clearSuggestions();
  }
  clearAll(event) {
    event.stopPropagation();
    this.workflow.clearAll();
  }
  static \u0275fac = function GroupingBoardComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _GroupingBoardComponent)(\u0275\u0275directiveInject(DocumentExtractionService), \u0275\u0275directiveInject(ToastService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _GroupingBoardComponent, selectors: [["app-grouping-board"]], outputs: { docClicked: "docClicked" }, decls: 14, vars: 3, consts: [[1, "card", "mb-6", "grouping-card"], [1, "accordion-header", "grouping-accordion-header", 3, "click"], [1, "grouping-header-title"], [1, "grouping-header-actions"], [1, "btn-outline", "grouping-add-btn", 3, "click"], [1, "btn-outline", "grouping-clear-btn", 3, "click"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "grouping-chevron"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M19 9l-7 7-7-7"], [1, "accordion-body", "grouping-accordion-body"], ["cdkDropListGroup", "", 1, "grouping-drop-list-group"], ["cdkDropList", "", 1, "grouping-drop-zone", 3, "cdkDropListDropped", "cdkDropListData"], [1, "grouping-drop-zone-title"], [1, "grouping-drop-zone-list"], ["cdkDrag", "", 1, "pill-btn", 3, "cdkDragDisabled", "is-saved", "ngStyle"], [1, "grouping-empty-text"], ["cdkDropList", "", 1, "grouping-drop-zone", "group-drop-zone", 3, "cdkDropListData", "cdkDropListDisabled", "borderTop", "is-saved"], ["cdkDrag", "", 1, "pill-btn", 3, "cdkDragDisabled", "ngStyle"], [2, "display", "flex", "align-items", "center", "gap", "8px"], [1, "grouping-draft-status"], ["type", "button", "title", "View PDF", 2, "background", "none", "border", "none", "cursor", "pointer", "padding", "2px", "color", "#64748b", "display", "flex", "align-items", "center", 3, "click"], ["cdkDropList", "", 1, "grouping-drop-zone", "group-drop-zone", 3, "cdkDropListDropped", "cdkDropListData", "cdkDropListDisabled"], [1, "grouping-group-header"], [1, "grouping-group-title"], [1, "btn-outline-danger", "grouping-remove-btn"], [1, "btn-outline-danger", "grouping-remove-btn", 3, "click"]], template: function GroupingBoardComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1);
      \u0275\u0275listener("click", function GroupingBoardComponent_Template_div_click_1_listener() {
        return ctx.isMultiSelectOpen = !ctx.isMultiSelectOpen;
      });
      \u0275\u0275elementStart(2, "div", 2);
      \u0275\u0275text(3, " Review Draft (Multi-select) ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "div", 3)(5, "button", 4);
      \u0275\u0275listener("click", function GroupingBoardComponent_Template_button_click_5_listener($event) {
        return ctx.addGroup($event);
      });
      \u0275\u0275text(6, "+ Add Group");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(7, "button", 5);
      \u0275\u0275listener("click", function GroupingBoardComponent_Template_button_click_7_listener($event) {
        return ctx.clearSuggestions($event);
      });
      \u0275\u0275text(8, "Clear Suggestion Group");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(9, "button", 5);
      \u0275\u0275listener("click", function GroupingBoardComponent_Template_button_click_9_listener($event) {
        return ctx.clearAll($event);
      });
      \u0275\u0275text(10, "Clear All");
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(11, "svg", 6);
      \u0275\u0275element(12, "path", 7);
      \u0275\u0275elementEnd()()();
      \u0275\u0275conditionalCreate(13, GroupingBoardComponent_Conditional_13_Template, 11, 2, "div", 8);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(11);
      \u0275\u0275classProp("rotate-180", ctx.isMultiSelectOpen);
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.isMultiSelectOpen ? 13 : -1);
    }
  }, dependencies: [CommonModule, NgStyle, DragDropModule, CdkDropList, CdkDropListGroup, CdkDrag], styles: ["\n.pill-btn[_ngcontent-%COMP%] {\n  background-color: #ffffff;\n  border: 1px solid #cbd5e1;\n  color: #334155;\n  padding: 10px 14px;\n  border-radius: 6px;\n  font-size: 13px;\n  font-weight: 500;\n  cursor: grab;\n  transition: box-shadow 0.2s, background-color 0.2s;\n  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.02);\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  width: 100%;\n  margin-bottom: 8px;\n}\n.pill-btn[_ngcontent-%COMP%]:hover {\n  background-color: #f8fafc;\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);\n}\n.cdk-drag-preview[_ngcontent-%COMP%] {\n  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);\n  opacity: 0.9;\n}\n.cdk-drag-placeholder[_ngcontent-%COMP%] {\n  opacity: 0.3;\n}\n.cdk-drag-animating[_ngcontent-%COMP%] {\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\n}\n.grouping-card[_ngcontent-%COMP%] {\n  padding: 0;\n  overflow: hidden;\n  border: 1px solid #cbd5e1;\n  box-shadow: none;\n}\n.grouping-accordion-header[_ngcontent-%COMP%] {\n  background: white;\n  cursor: pointer;\n  justify-content: space-between;\n}\n.grouping-header-title[_ngcontent-%COMP%] {\n  font-weight: 500;\n  color: #475569;\n}\n.grouping-header-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 12px;\n  align-items: center;\n}\n.grouping-add-btn[_ngcontent-%COMP%] {\n  padding: 4px 12px;\n  font-size: 12px;\n  color: #0284c7;\n  border-color: #0284c7;\n}\n.grouping-clear-btn[_ngcontent-%COMP%] {\n  padding: 4px 12px;\n  font-size: 12px;\n}\n.grouping-chevron[_ngcontent-%COMP%] {\n  width: 20px;\n  height: 20px;\n  transition: transform 0.2s;\n  color: #64748b;\n}\n.grouping-accordion-body[_ngcontent-%COMP%] {\n  padding: 16px;\n  background: #f8fafc;\n  border-top: 1px solid #e2e8f0;\n}\n.grouping-drop-list-group[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));\n  gap: 16px;\n  align-items: start;\n}\n.grouping-drop-zone[_ngcontent-%COMP%] {\n  border: 1px solid #e2e8f0;\n  border-radius: 8px;\n  padding: 16px;\n  height: 260px;\n  display: flex;\n  flex-direction: column;\n  background-color: #ffffff;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);\n}\n.grouping-drop-zone.group-drop-zone[_ngcontent-%COMP%] {\n  transition: opacity 0.3s;\n}\n.grouping-drop-zone.is-saved[_ngcontent-%COMP%] {\n  opacity: 0.5;\n}\n.grouping-drop-zone-title[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 600;\n  color: #475569;\n  margin-bottom: 16px;\n  text-align: center;\n  flex-shrink: 0;\n}\n.grouping-group-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin-bottom: 16px;\n  position: relative;\n  flex-shrink: 0;\n}\n.grouping-group-title[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 600;\n  color: #475569;\n}\n.grouping-remove-btn[_ngcontent-%COMP%] {\n  position: absolute;\n  right: -8px;\n  top: -8px;\n  padding: 2px 8px;\n  font-size: 11px;\n  border: none;\n  background: transparent;\n  color: #ef4444;\n  cursor: pointer;\n}\n.grouping-drop-zone-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  flex: 1;\n  overflow-y: auto;\n  padding-right: 4px;\n  min-height: 50px;\n}\n.pill-btn.is-saved[_ngcontent-%COMP%] {\n  cursor: not-allowed;\n}\n.grouping-draft-status[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: #94a3b8;\n  background: #f1f5f9;\n  padding: 2px 6px;\n  border-radius: 4px;\n}\n.grouping-empty-text[_ngcontent-%COMP%] {\n  color: #94a3b8;\n  font-size: 12px;\n  font-style: italic;\n  padding: 6px;\n  text-align: center;\n}\n/*# sourceMappingURL=grouping-board.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(GroupingBoardComponent, [{
    type: Component,
    args: [{ selector: "app-grouping-board", standalone: true, imports: [CommonModule, DragDropModule], changeDetection: ChangeDetectionStrategy.OnPush, template: `<div class="card mb-6 grouping-card">\r
  <div class="accordion-header grouping-accordion-header" (click)="isMultiSelectOpen = !isMultiSelectOpen">\r
    <div class="grouping-header-title">\r
      Review Draft (Multi-select)\r
    </div>\r
    <div class="grouping-header-actions">\r
      <button class="btn-outline grouping-add-btn" (click)="addGroup($event)">+ Add Group</button>\r
      <button class="btn-outline grouping-clear-btn" (click)="clearSuggestions($event)">Clear Suggestion Group</button>\r
      <button class="btn-outline grouping-clear-btn" (click)="clearAll($event)">Clear All</button>\r
      <svg class="grouping-chevron" [class.rotate-180]="isMultiSelectOpen" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>\r
    </div>\r
  </div>\r
  \r
  @if (isMultiSelectOpen) {\r
    <div class="accordion-body grouping-accordion-body">\r
      <div cdkDropListGroup class="grouping-drop-list-group">\r
        \r
        <!-- Ungrouped Drop Zone -->\r
        <div cdkDropList\r
             [cdkDropListData]="workflow.ungroupedDrafts()"\r
             (cdkDropListDropped)="drop($event, null)"\r
             class="grouping-drop-zone">\r
          <div class="grouping-drop-zone-title">\r
            Ungrouped Files\r
          </div>\r
          \r
          <div class="grouping-drop-zone-list">\r
            @for (review of workflow.ungroupedDrafts(); track review.draft_id) {\r
              <div cdkDrag\r
                      [cdkDragDisabled]="workflow.isGroupSaved(review.group_id || null)"\r
                      class="pill-btn"\r
                      [class.is-saved]="workflow.isGroupSaved(review.group_id || null)"\r
                      [ngStyle]="review.uiGroupStyle">\r
                <span>{{ review.uiGlobalIndex + 1 }}. {{ review.source_name }}</span>\r
                <div style="display: flex; align-items: center; gap: 8px;">\r
                  <span class="grouping-draft-status">{{ review.details_confirmed ? 'Ready' : 'Draft' }}</span>\r
                  <button type="button" (click)="docClicked.emit(review); $event.stopPropagation()" style="background: none; border: none; cursor: pointer; padding: 2px; color: #64748b; display: flex; align-items: center;" title="View PDF">\u{1F441}\uFE0F</button>\r
                </div>\r
              </div>\r
            }\r
            @if (workflow.ungroupedDrafts().length === 0) {\r
              <div class="grouping-empty-text">\r
                Drag PDFs here to ungroup\r
              </div>\r
            }\r
          </div>\r
        </div>\r
\r
        <!-- Group Drop Zones -->\r
        @for (group of workflow.groupedAllDrafts(); track group.groupId; let gIdx = $index) {\r
          <div cdkDropList\r
               [cdkDropListData]="group.drafts"\r
               (cdkDropListDropped)="drop($event, group.groupId)"\r
               [cdkDropListDisabled]="workflow.isGroupSaved(group.groupId)"\r
               class="grouping-drop-zone group-drop-zone"\r
               [style.borderTop]="group.color ? '4px solid ' + group.color : null"\r
               [class.is-saved]="workflow.isGroupSaved(group.groupId)">\r
            <div class="grouping-group-header">\r
              <div class="grouping-group-title">\r
                 Group {{ gIdx + 1 }}\r
              </div>\r
              @if (group.color && !workflow.isGroupSaved(group.groupId)) {\r
                <button class="btn-outline-danger grouping-remove-btn" (click)="removeGroup(group.groupId!)">\r
                  Remove\r
                </button>\r
              }\r
            </div>\r
            \r
            <div class="grouping-drop-zone-list">\r
              @for (review of group.drafts; track review.draft_id) {\r
                <div cdkDrag\r
                        [cdkDragDisabled]="workflow.isGroupSaved(group.groupId)"\r
                        class="pill-btn"\r
                        [class.is-saved]="workflow.isGroupSaved(group.groupId)"\r
                        [ngStyle]="review.uiGroupStyle">\r
                  <span>{{ review.uiGlobalIndex + 1 }}. {{ review.source_name }}</span>\r
                  <div style="display: flex; align-items: center; gap: 8px;">\r
                    <span class="grouping-draft-status">{{ review.details_confirmed ? 'Ready' : 'Draft' }}</span>\r
                    <button type="button" (click)="docClicked.emit(review); $event.stopPropagation()" style="background: none; border: none; cursor: pointer; padding: 2px; color: #64748b; display: flex; align-items: center;" title="View PDF">\u{1F441}\uFE0F</button>\r
                  </div>\r
                </div>\r
              }\r
              @if (group.drafts.length === 0) {\r
                <div class="grouping-empty-text">\r
                  Drag PDFs here\r
                </div>\r
              }\r
            </div>\r
          </div>\r
        }\r
\r
      </div>\r
    </div>\r
  }\r
</div>\r
`, styles: ["/* src/app/features/logistics/components/grouping-board/grouping-board.component.css */\n.pill-btn {\n  background-color: #ffffff;\n  border: 1px solid #cbd5e1;\n  color: #334155;\n  padding: 10px 14px;\n  border-radius: 6px;\n  font-size: 13px;\n  font-weight: 500;\n  cursor: grab;\n  transition: box-shadow 0.2s, background-color 0.2s;\n  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.02);\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  width: 100%;\n  margin-bottom: 8px;\n}\n.pill-btn:hover {\n  background-color: #f8fafc;\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);\n}\n.cdk-drag-preview {\n  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);\n  opacity: 0.9;\n}\n.cdk-drag-placeholder {\n  opacity: 0.3;\n}\n.cdk-drag-animating {\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\n}\n.grouping-card {\n  padding: 0;\n  overflow: hidden;\n  border: 1px solid #cbd5e1;\n  box-shadow: none;\n}\n.grouping-accordion-header {\n  background: white;\n  cursor: pointer;\n  justify-content: space-between;\n}\n.grouping-header-title {\n  font-weight: 500;\n  color: #475569;\n}\n.grouping-header-actions {\n  display: flex;\n  gap: 12px;\n  align-items: center;\n}\n.grouping-add-btn {\n  padding: 4px 12px;\n  font-size: 12px;\n  color: #0284c7;\n  border-color: #0284c7;\n}\n.grouping-clear-btn {\n  padding: 4px 12px;\n  font-size: 12px;\n}\n.grouping-chevron {\n  width: 20px;\n  height: 20px;\n  transition: transform 0.2s;\n  color: #64748b;\n}\n.grouping-accordion-body {\n  padding: 16px;\n  background: #f8fafc;\n  border-top: 1px solid #e2e8f0;\n}\n.grouping-drop-list-group {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));\n  gap: 16px;\n  align-items: start;\n}\n.grouping-drop-zone {\n  border: 1px solid #e2e8f0;\n  border-radius: 8px;\n  padding: 16px;\n  height: 260px;\n  display: flex;\n  flex-direction: column;\n  background-color: #ffffff;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);\n}\n.grouping-drop-zone.group-drop-zone {\n  transition: opacity 0.3s;\n}\n.grouping-drop-zone.is-saved {\n  opacity: 0.5;\n}\n.grouping-drop-zone-title {\n  font-size: 14px;\n  font-weight: 600;\n  color: #475569;\n  margin-bottom: 16px;\n  text-align: center;\n  flex-shrink: 0;\n}\n.grouping-group-header {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin-bottom: 16px;\n  position: relative;\n  flex-shrink: 0;\n}\n.grouping-group-title {\n  font-size: 14px;\n  font-weight: 600;\n  color: #475569;\n}\n.grouping-remove-btn {\n  position: absolute;\n  right: -8px;\n  top: -8px;\n  padding: 2px 8px;\n  font-size: 11px;\n  border: none;\n  background: transparent;\n  color: #ef4444;\n  cursor: pointer;\n}\n.grouping-drop-zone-list {\n  display: flex;\n  flex-direction: column;\n  flex: 1;\n  overflow-y: auto;\n  padding-right: 4px;\n  min-height: 50px;\n}\n.pill-btn.is-saved {\n  cursor: not-allowed;\n}\n.grouping-draft-status {\n  font-size: 11px;\n  color: #94a3b8;\n  background: #f1f5f9;\n  padding: 2px 6px;\n  border-radius: 4px;\n}\n.grouping-empty-text {\n  color: #94a3b8;\n  font-size: 12px;\n  font-style: italic;\n  padding: 6px;\n  text-align: center;\n}\n/*# sourceMappingURL=grouping-board.component.css.map */\n"] }]
  }], () => [{ type: DocumentExtractionService }, { type: ToastService }], { docClicked: [{
    type: Output
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(GroupingBoardComponent, { className: "GroupingBoardComponent", filePath: "src/app/features/logistics/components/grouping-board/grouping-board.component.ts", lineNumber: 17 });
})();

// src/app/pages/mbl-flow/mbl-flow.component.ts
var MblFlowComponent_Conditional_30_Defer_1_DepsFn = () => [
  /* @ts-ignore */
  import("./chunk-ZIAVBY2A.js").then((m) => m.MblSectionComponent)
];
var _forTrack02 = ($index, $item) => ($item.groupId || "") + "_" + ($item.drafts[0]?.draft_id || $index);
function MblFlowComponent_Conditional_27_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-hbl-draft", 23);
    \u0275\u0275listener("generateRequested", function MblFlowComponent_Conditional_27_For_2_Template_app_hbl_draft_generateRequested_0_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.generateHbl($event));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const group_r3 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("drafts", group_r3.drafts)("groupColor", group_r3.color)("groupTitle", group_r3.color ? "Group " + (ctx_r1.workflow.getGroupIndex(group_r3.groupId) + 1) : "Ungrouped File")("expanded", false);
  }
}
function MblFlowComponent_Conditional_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275repeaterCreate(1, MblFlowComponent_Conditional_27_For_2_Template, 1, 4, "app-hbl-draft", 22, _forTrack02);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.workflow.groupedSelectedDrafts());
  }
}
function MblFlowComponent_Conditional_30_Defer_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-mbl-section", 24);
    \u0275\u0275listener("generateRequested", function MblFlowComponent_Conditional_30_Defer_0_Template_app_mbl_section_generateRequested_0_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.generateMbl());
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("reviews", ctx_r1.workflow.hblReviews())("mblReview", ctx_r1.workflow.mblReview());
  }
}
function MblFlowComponent_Conditional_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domTemplate(0, MblFlowComponent_Conditional_30_Defer_0_Template, 1, 2);
    \u0275\u0275defer(1, 0, MblFlowComponent_Conditional_30_Defer_1_DepsFn);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275deferWhen(ctx_r1.workflow.currentStep() === 2);
  }
}
function MblFlowComponent_Conditional_33_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-document-modal", 25);
    \u0275\u0275listener("closed", function MblFlowComponent_Conditional_33_Template_app_document_modal_closed_0_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeDoc());
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("isOpen", true)("title", ctx_r1.selectedDocName())("documentUrl", ctx_r1.selectedDocUrl())("mimeType", ctx_r1.selectedDocMime());
  }
}
var MblFlowComponent = class _MblFlowComponent {
  constructor(toast, backendService, extractionService) {
    this.toast = toast;
    this.backendService = backendService;
    this.extractionService = extractionService;
  }
  toast;
  backendService;
  extractionService;
  workflow = inject(WorkflowStateService);
  isExtracting = signal(
    false,
    ...ngDevMode ? [{ debugName: "isExtracting" }] : (
      /* istanbul ignore next */
      []
    )
  );
  isGenerating = signal(
    false,
    ...ngDevMode ? [{ debugName: "isGenerating" }] : (
      /* istanbul ignore next */
      []
    )
  );
  selectedDocUrl = signal(
    null,
    ...ngDevMode ? [{ debugName: "selectedDocUrl" }] : (
      /* istanbul ignore next */
      []
    )
  );
  selectedDocName = signal(
    "",
    ...ngDevMode ? [{ debugName: "selectedDocName" }] : (
      /* istanbul ignore next */
      []
    )
  );
  selectedDocMime = signal(
    "",
    ...ngDevMode ? [{ debugName: "selectedDocMime" }] : (
      /* istanbul ignore next */
      []
    )
  );
  viewDoc(draft) {
    this.selectedDocUrl.set(draft.source_document || null);
    this.selectedDocName.set(draft.source_name);
    this.selectedDocMime.set(draft.mime_type);
  }
  closeDoc() {
    this.selectedDocUrl.set(null);
  }
  processFiles(files) {
    const existingNames = new Set(this.workflow.hblReviews().map((r) => r.source_name));
    const newFiles = files.filter((f) => !existingNames.has(f.name));
    if (newFiles.length === 0) {
      this.toast.show("All selected files have already been extracted.", "info");
      return;
    }
    this.isExtracting.set(true);
    this.backendService.uploadFiles(newFiles).subscribe({
      next: (response) => {
        let currentColors = __spreadValues({}, this.workflow.groupColors());
        const currentDrafts = [...this.workflow.hblReviews()];
        response.hbl_groups.forEach((group) => {
          const groupItems = response.documents.filter((doc) => group.document_ids.includes(doc.document_id));
          if (!currentColors[group.group_id]) {
            const colorIndex = Object.keys(currentColors).length % this.workflow.availableColors.length;
            currentColors[group.group_id] = this.workflow.availableColors[colorIndex];
          }
          this.workflow.addServerGroupIds([group.group_id]);
          groupItems.forEach((item) => {
            const file = newFiles.find((f) => f.name === item.filename);
            if (!file)
              return;
            const newDraft = {
              draft_id: Math.random().toString(36).substring(7),
              source_name: file.name,
              source_document: URL.createObjectURL(file),
              mime_type: file.type || "application/pdf",
              group_id: group.group_id,
              batch_id: response.batch_id,
              document_id: item.document_id,
              packing_list: item.extraction,
              details_confirmed: false,
              hbl_details: {
                hbl_number: null,
                notify_party: JSON.parse(JSON.stringify(item.extraction?.notify_party || { name: null, address: null, tax_id: null })),
                container_number: item.extraction?.containers?.[0]?.container_number || null,
                seal_number: item.extraction?.containers?.[0]?.seal_numbers?.[0] || null,
                freight_terms: item.extraction?.freight_terms || null
              }
            };
            currentDrafts.push(newDraft);
          });
        });
        this.workflow.setGroupColors(currentColors);
        this.workflow.setHblReviews(currentDrafts);
        this.toast.show(`Extracted data from ${newFiles.length} files successfully`, "success");
        this.workflow.setCurrentStep(1);
        this.isExtracting.set(false);
      },
      error: (error) => {
        const errorDetail = error?.error?.detail;
        const msg = typeof errorDetail === "string" ? errorDetail : Array.isArray(errorDetail) ? errorDetail.map((e) => e.msg).join(", ") : "Failed to extract data from files. Please try again.";
        this.toast.show(msg, "error");
        this.isExtracting.set(false);
        console.error("Extraction error:", error);
      }
    });
  }
  generateHbl(drafts) {
    this.isGenerating.set(true);
    const firstDraft = drafts[0];
    if (!firstDraft.batch_id || !firstDraft.group_id) {
      this.toast.show("Missing batch or group ID. Please re-upload files.", "error");
      this.isGenerating.set(false);
      return;
    }
    this.extractionService.generateHblBase64(firstDraft).subscribe({
      next: (response) => {
        const pdfUrl = `data:application/pdf;base64,${response.base64}`;
        drafts.forEach((draft) => {
          this.workflow.updateDraft(draft.draft_id, {
            hbl_pdf: pdfUrl,
            hbl_filename: response.filename,
            hbl_number: firstDraft.hbl_details.hbl_number || void 0
          });
        });
        this.toast.show("Final HBL generated. Saved HBL details are locked.", "success");
        this.isGenerating.set(false);
        this.checkMblReadiness();
      },
      error: (error) => {
        const errorDetail = error?.error?.detail;
        const msg = typeof errorDetail === "string" ? errorDetail : Array.isArray(errorDetail) ? errorDetail.map((e) => e.msg).join(", ") : "Failed to generate HBL. Please try again.";
        this.toast.show(msg, "error");
        this.isGenerating.set(false);
        console.error("HBL generation error:", error);
      }
    });
  }
  checkMblReadiness() {
    if (this.workflow.canShowMbl()) {
      if (!this.workflow.mblReview()) {
        const drafts = this.workflow.hblReviews();
        const batchId = drafts[0]?.batch_id;
        if (!batchId) {
          this.toast.show("Missing batch ID. Please re-upload files.", "error");
          return;
        }
        const firstPl = drafts[0]?.packing_list;
        this.workflow.setMblReview({
          draft_id: Math.random().toString(36).substring(7),
          draft_ids: drafts.map((r) => r.draft_id),
          details_confirmed: true,
          mbl_details: {
            mbl_number: "MBL-" + Math.floor(Math.random() * 1e6),
            vessel_name: firstPl?.vessel_name || "MSC MOCK",
            voyage_number: firstPl?.voyage_or_flight_number || "001W",
            port_of_loading: firstPl?.port_of_loading || "Shanghai",
            port_of_discharge: firstPl?.port_of_discharge || "Los Angeles",
            tare_weight: null,
            verified_gross_mass: firstPl?.total_gross_weight || "15000 kg",
            carrier_booking_reference: firstPl?.exporter_reference || "BKG-123",
            shipper: firstPl?.shipper_exporter || { name: "Shipper", address: "Address", tax_id: null },
            consignee: firstPl?.consignee || { name: "Consignee", address: "Address", tax_id: null },
            cargo_description: firstPl?.items?.[0]?.item_product_description || "Mock Cargo",
            total_packages: firstPl?.total_package_count || "100",
            total_gross_weight: firstPl?.total_gross_weight || "15000 kg",
            total_measurement: firstPl?.total_measurement || "20 CBM"
          }
        });
      }
      this.workflow.setCurrentStep(2);
    }
  }
  generateMbl() {
    const mblReview = this.workflow.mblReview();
    const drafts = this.workflow.hblReviews();
    const batchId = drafts[0]?.batch_id;
    if (mblReview && batchId) {
      this.isGenerating.set(true);
      this.extractionService.generateMblBase64(mblReview.mbl_details, batchId).subscribe({
        next: (response) => {
          const pdfUrl = `data:application/pdf;base64,${response.base64}`;
          this.workflow.setMblReview(__spreadProps(__spreadValues({}, mblReview), {
            mbl_pdf: pdfUrl,
            mbl_filename: response.filename
          }));
          this.toast.show("MBL Generated Successfully", "success");
          this.isGenerating.set(false);
        },
        error: (error) => {
          const errorDetail = error?.error?.detail;
          const msg = typeof errorDetail === "string" ? errorDetail : Array.isArray(errorDetail) ? errorDetail.map((e) => e.msg).join(", ") : "Failed to generate MBL. Please try again.";
          this.toast.show(msg, "error");
          this.isGenerating.set(false);
          console.error("MBL generation error:", error);
        }
      });
    }
  }
  static \u0275fac = function MblFlowComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MblFlowComponent)(\u0275\u0275directiveInject(ToastService), \u0275\u0275directiveInject(BackendApiService), \u0275\u0275directiveInject(DocumentExtractionService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _MblFlowComponent, selectors: [["app-mbl-flow"]], decls: 34, vars: 21, consts: [[1, "layout-container"], [1, "main-layout"], [1, "left-panel"], [1, "app-header", 2, "justify-content", "center", "width", "100%", "position", "relative"], ["routerLink", "/", 2, "position", "absolute", "left", "0", "display", "flex", "align-items", "center", "gap", "4px", "text-decoration", "none", "color", "#64748b", "font-weight", "500", "font-size", "14px"], ["width", "20", "height", "20", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2"], ["d", "M19 12H5"], ["points", "12 19 5 12 12 5"], [1, "logo-container", 2, "justify-content", "center"], ["src", "avito.png", "alt", "Avito Logo", 1, "header-logo"], [3, "filesSelected"], [1, "right-panel"], [1, "wizard-header"], [1, "wizard-step", 3, "click"], [1, "wizard-step-number"], [1, "wizard-step-title"], [1, "wizard-step-divider"], [3, "docClicked"], [1, "review-content"], ["text", "extracting", 3, "show"], ["text", "generating", 3, "show"], [3, "isOpen", "title", "documentUrl", "mimeType"], [3, "drafts", "groupColor", "groupTitle", "expanded"], [3, "generateRequested", "drafts", "groupColor", "groupTitle", "expanded"], [3, "generateRequested", "reviews", "mblReview"], [3, "closed", "isOpen", "title", "documentUrl", "mimeType"]], template: function MblFlowComponent_Template(rf, ctx) {
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
      \u0275\u0275listener("filesSelected", function MblFlowComponent_Template_app_uploader_filesSelected_11_listener($event) {
        return ctx.processFiles($event);
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(12, "div", 11)(13, "div", 12)(14, "div", 13);
      \u0275\u0275listener("click", function MblFlowComponent_Template_div_click_14_listener() {
        return ctx.workflow.setCurrentStep(1);
      });
      \u0275\u0275elementStart(15, "div", 14);
      \u0275\u0275text(16, "1");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(17, "div", 15);
      \u0275\u0275text(18, "Packing List & Complete HBL Details");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(19, "div", 16);
      \u0275\u0275elementStart(20, "div", 13);
      \u0275\u0275listener("click", function MblFlowComponent_Template_div_click_20_listener() {
        return ctx.workflow.canShowMbl() && ctx.workflow.setCurrentStep(2);
      });
      \u0275\u0275elementStart(21, "div", 14);
      \u0275\u0275text(22, "2");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(23, "div", 15);
      \u0275\u0275text(24, "Complete MBL Details");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(25, "div")(26, "app-grouping-board", 17);
      \u0275\u0275listener("docClicked", function MblFlowComponent_Template_app_grouping_board_docClicked_26_listener($event) {
        return ctx.viewDoc($event);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(27, MblFlowComponent_Conditional_27_Template, 3, 0, "div");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(28, "div")(29, "div", 18);
      \u0275\u0275conditionalCreate(30, MblFlowComponent_Conditional_30_Template, 3, 1);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275element(31, "app-wifi-loader", 19)(32, "app-wifi-loader", 20);
      \u0275\u0275conditionalCreate(33, MblFlowComponent_Conditional_33_Template, 1, 4, "app-document-modal", 21);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(12);
      \u0275\u0275classProp("panel-disabled", ctx.workflow.hblReviews().length === 0);
      \u0275\u0275advance(3);
      \u0275\u0275classProp("active", ctx.workflow.currentStep() === 1);
      \u0275\u0275advance(2);
      \u0275\u0275classProp("active", ctx.workflow.currentStep() === 1);
      \u0275\u0275advance(3);
      \u0275\u0275classProp("disabled", !ctx.workflow.canShowMbl());
      \u0275\u0275advance();
      \u0275\u0275classProp("active", ctx.workflow.currentStep() === 2);
      \u0275\u0275advance(2);
      \u0275\u0275classProp("active", ctx.workflow.currentStep() === 2);
      \u0275\u0275advance(2);
      \u0275\u0275classProp("hidden", ctx.workflow.currentStep() !== 1);
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.workflow.groupedSelectedDrafts().length > 0 ? 27 : -1);
      \u0275\u0275advance();
      \u0275\u0275classProp("hidden", ctx.workflow.currentStep() !== 2);
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.workflow.canShowMbl() && ctx.workflow.mblReview() ? 30 : -1);
      \u0275\u0275advance();
      \u0275\u0275property("show", ctx.isExtracting());
      \u0275\u0275advance();
      \u0275\u0275property("show", ctx.isGenerating());
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.selectedDocUrl() ? 33 : -1);
    }
  }, dependencies: [
    CommonModule,
    FormsModule,
    RouterModule,
    RouterLink,
    UploaderComponent,
    HblDraftComponent,
    GroupingBoardComponent,
    WifiLoaderComponent,
    DocumentModalComponent
  ], styles: ["\n.header-logo[_ngcontent-%COMP%] {\n  height: 48px;\n  object-fit: contain;\n}\n.header-subtitle[_ngcontent-%COMP%] {\n  margin-top: 4px;\n  font-size: 14px;\n}\n.main-layout[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 24px;\n  flex: 1;\n  overflow: hidden;\n  padding: 10px;\n  background-color: #f1f5f9;\n  max-width: 1536px;\n  margin: 0 auto;\n  width: 100%;\n}\n.left-panel[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  flex: 0 0 380px;\n  overflow-y: auto;\n  overflow-y: hidden;\n  padding-right: 12px;\n  transition: all 0.3s;\n}\n.left-panel.full-width[_ngcontent-%COMP%] {\n  flex: 1;\n  max-width: 800px;\n  margin: 0 auto;\n}\n.right-panel[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  overflow-y: auto;\n  background: transparent;\n  position: relative;\n}\n.review-content[_ngcontent-%COMP%] {\n  flex: 1;\n  overflow-y: auto;\n  padding-right: 12px;\n}\n.app-header[_ngcontent-%COMP%] {\n  padding: 12px 0 24px 0;\n  display: flex;\n  align-items: center;\n  gap: 24px;\n}\n.logo-container[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 24px;\n}\n.wizard-header[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 8px;\n  padding: 16px 24px;\n  margin-bottom: 24px;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);\n}\n.wizard-step[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  gap: 12px;\n  cursor: pointer;\n  transition: opacity 0.2s;\n}\n.wizard-step.disabled[_ngcontent-%COMP%] {\n  opacity: 0.6;\n}\n.wizard-step-number[_ngcontent-%COMP%] {\n  background-color: #f1f5f9;\n  color: #94a3b8;\n  width: 32px;\n  height: 32px;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-weight: 600;\n  font-size: 14px;\n}\n.wizard-step-number.active[_ngcontent-%COMP%] {\n  background-color: #f26d21;\n  color: #ffffff;\n}\n.wizard-step-title[_ngcontent-%COMP%] {\n  font-weight: 500;\n  color: #94a3b8;\n  font-size: 15px;\n}\n.wizard-step-title.active[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: #1a2b4c;\n}\n.wizard-step-divider[_ngcontent-%COMP%] {\n  height: 1px;\n  width: 64px;\n  background-color: #e2e8f0;\n  margin: 0 8px;\n}\n.hidden[_ngcontent-%COMP%] {\n  display: none !important;\n}\n.layout-container[_ngcontent-%COMP%] {\n  width: 100%;\n  margin: 0 auto;\n  height: 100vh;\n  display: flex;\n  flex-direction: column;\n  overflow: hidden;\n  background-color: #f1f5f9;\n}\n.header-title[_ngcontent-%COMP%] {\n  font-size: 20px;\n  font-weight: 700;\n  color: #1a2b4c;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.panel-disabled[_ngcontent-%COMP%] {\n  opacity: 0.5;\n  pointer-events: none;\n  filter: grayscale(100%);\n  transition: all 0.3s ease;\n}\n/*# sourceMappingURL=mbl-flow.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadataAsync(MblFlowComponent, () => [
    /* @ts-ignore */
    import("./chunk-ZIAVBY2A.js").then((m) => m.MblSectionComponent)
  ], (MblSectionComponent) => {
    setClassMetadata(MblFlowComponent, [{
      type: Component,
      args: [{ selector: "app-mbl-flow", standalone: true, imports: [
        CommonModule,
        FormsModule,
        RouterModule,
        UploaderComponent,
        HblDraftComponent,
        MblSectionComponent,
        GroupingBoardComponent,
        WifiLoaderComponent,
        DocumentModalComponent
      ], changeDetection: ChangeDetectionStrategy.OnPush, template: `\r
<div class="layout-container">\r
\r
\r
  <main class="main-layout">\r
    <!-- Left Column: Uploader -->\r
    <div class="left-panel">\r
      <header class="app-header" style="justify-content: center; width: 100%; position: relative;">\r
        <a routerLink="/" style="position: absolute; left: 0; display: flex; align-items: center; gap: 4px; text-decoration: none; color: #64748b; font-weight: 500; font-size: 14px;">\r
           <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M19 12H5"></path><polyline points="12 19 5 12 12 5"></polyline></svg>\r
           Back\r
        </a>\r
        <div class="logo-container" style="justify-content: center;">\r
          <img src="avito.png" alt="Avito Logo" class="header-logo" />\r
        </div>\r
      </header>\r
\r
      <app-uploader \r
        (filesSelected)="processFiles($event)">\r
      </app-uploader>\r
    </div>\r
\r
    <!-- Right Column: Wizard Steps -->\r
    <div class="right-panel" [class.panel-disabled]="workflow.hblReviews().length === 0">\r
      \r
      <!-- Wizard Progress Header -->\r
      <div class="wizard-header">\r
        \r
        <!-- Step 1 -->\r
        <div class="wizard-step" (click)="workflow.setCurrentStep(1)">\r
          <div class="wizard-step-number" [class.active]="workflow.currentStep() === 1">1</div>\r
          <div class="wizard-step-title" [class.active]="workflow.currentStep() === 1">Packing List & Complete HBL Details</div>\r
        </div>\r
\r
        <div class="wizard-step-divider"></div>\r
\r
        <!-- Step 2 -->\r
        <div class="wizard-step" [class.disabled]="!workflow.canShowMbl()" (click)="workflow.canShowMbl() && workflow.setCurrentStep(2)">\r
          <div class="wizard-step-number" [class.active]="workflow.currentStep() === 2">2</div>\r
          <div class="wizard-step-title" [class.active]="workflow.currentStep() === 2">Complete MBL Details</div>\r
        </div>\r
      </div>\r
\r
      <!-- Step 1 Content -->\r
      <div [class.hidden]="workflow.currentStep() !== 1">\r
        <!-- The grouped drafts drop board -->\r
        <app-grouping-board (docClicked)="viewDoc($event)"></app-grouping-board>\r
\r
        <!-- Dynamic HBL Forms per Group -->\r
        @if (workflow.groupedSelectedDrafts().length > 0) {\r
          <div>\r
            @for (group of workflow.groupedSelectedDrafts(); track (group.groupId || '') + '_' + (group.drafts[0]?.draft_id || gIdx); let gIdx = $index) {\r
              <app-hbl-draft \r
                [drafts]="group.drafts"\r
                [groupColor]="group.color"\r
                [groupTitle]="group.color ? 'Group ' + (workflow.getGroupIndex(group.groupId!) + 1) : 'Ungrouped File'"\r
                [expanded]="false"\r
                (generateRequested)="generateHbl($event)"\r
              ></app-hbl-draft>\r
            }\r
          </div>\r
        }\r
      </div>\r
\r
      <!-- Step 2 Content -->\r
      <div [class.hidden]="workflow.currentStep() !== 2">\r
        <div class="review-content">\r
          @if (workflow.canShowMbl() && workflow.mblReview()) {\r
            @defer (when workflow.currentStep() === 2) {\r
              <app-mbl-section \r
                [reviews]="workflow.hblReviews()"\r
                [mblReview]="workflow.mblReview()!"\r
                (generateRequested)="generateMbl()"\r
              ></app-mbl-section>\r
            }\r
          }\r
        </div>\r
      </div>\r
    </div>\r
  </main>\r
  \r
  <app-wifi-loader [show]="isExtracting()" text="extracting"></app-wifi-loader>\r
  <app-wifi-loader [show]="isGenerating()" text="generating"></app-wifi-loader>\r
\r
  @if (selectedDocUrl()) {\r
    <app-document-modal \r
      [isOpen]="true" \r
      [title]="selectedDocName()" \r
      [documentUrl]="selectedDocUrl()!" \r
      [mimeType]="selectedDocMime()"\r
      (closed)="closeDoc()">\r
    </app-document-modal>\r
  }\r
</div>\r
`, styles: ["/* src/app/pages/mbl-flow/mbl-flow.component.css */\n.header-logo {\n  height: 48px;\n  object-fit: contain;\n}\n.header-subtitle {\n  margin-top: 4px;\n  font-size: 14px;\n}\n.main-layout {\n  display: flex;\n  gap: 24px;\n  flex: 1;\n  overflow: hidden;\n  padding: 10px;\n  background-color: #f1f5f9;\n  max-width: 1536px;\n  margin: 0 auto;\n  width: 100%;\n}\n.left-panel {\n  display: flex;\n  flex-direction: column;\n  flex: 0 0 380px;\n  overflow-y: auto;\n  overflow-y: hidden;\n  padding-right: 12px;\n  transition: all 0.3s;\n}\n.left-panel.full-width {\n  flex: 1;\n  max-width: 800px;\n  margin: 0 auto;\n}\n.right-panel {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  overflow-y: auto;\n  background: transparent;\n  position: relative;\n}\n.review-content {\n  flex: 1;\n  overflow-y: auto;\n  padding-right: 12px;\n}\n.app-header {\n  padding: 12px 0 24px 0;\n  display: flex;\n  align-items: center;\n  gap: 24px;\n}\n.logo-container {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 24px;\n}\n.wizard-header {\n  background: white;\n  border-radius: 8px;\n  padding: 16px 24px;\n  margin-bottom: 24px;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);\n}\n.wizard-step {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  gap: 12px;\n  cursor: pointer;\n  transition: opacity 0.2s;\n}\n.wizard-step.disabled {\n  opacity: 0.6;\n}\n.wizard-step-number {\n  background-color: #f1f5f9;\n  color: #94a3b8;\n  width: 32px;\n  height: 32px;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-weight: 600;\n  font-size: 14px;\n}\n.wizard-step-number.active {\n  background-color: #f26d21;\n  color: #ffffff;\n}\n.wizard-step-title {\n  font-weight: 500;\n  color: #94a3b8;\n  font-size: 15px;\n}\n.wizard-step-title.active {\n  font-weight: 600;\n  color: #1a2b4c;\n}\n.wizard-step-divider {\n  height: 1px;\n  width: 64px;\n  background-color: #e2e8f0;\n  margin: 0 8px;\n}\n.hidden {\n  display: none !important;\n}\n.layout-container {\n  width: 100%;\n  margin: 0 auto;\n  height: 100vh;\n  display: flex;\n  flex-direction: column;\n  overflow: hidden;\n  background-color: #f1f5f9;\n}\n.header-title {\n  font-size: 20px;\n  font-weight: 700;\n  color: #1a2b4c;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.panel-disabled {\n  opacity: 0.5;\n  pointer-events: none;\n  filter: grayscale(100%);\n  transition: all 0.3s ease;\n}\n/*# sourceMappingURL=mbl-flow.component.css.map */\n"] }]
    }], () => [{ type: ToastService }, { type: BackendApiService }, { type: DocumentExtractionService }], null);
  });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(MblFlowComponent, { className: "MblFlowComponent", filePath: "src/app/pages/mbl-flow/mbl-flow.component.ts", lineNumber: 38 });
})();
export {
  MblFlowComponent
};
//# debugId=c26833fd-59c6-52d6-9bcd-9b4e8dee86fa
//# sourceMappingURL=chunk-IHCRINXJ.js.map
