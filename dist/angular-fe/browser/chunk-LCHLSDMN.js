import {
  Injectable,
  __spreadProps,
  __spreadValues,
  computed,
  setClassMetadata,
  signal,
  ɵɵdefineInjectable
} from "./chunk-YEYBPR5L.js";

// src/app/core/services/workflow-state.service.ts
var WorkflowStateService = class _WorkflowStateService {
  // Core state
  hblReviews = signal(
    [],
    ...ngDevMode ? [{ debugName: "hblReviews" }] : (
      /* istanbul ignore next */
      []
    )
  );
  mblReview = signal(
    null,
    ...ngDevMode ? [{ debugName: "mblReview" }] : (
      /* istanbul ignore next */
      []
    )
  );
  groupColors = signal(
    {},
    ...ngDevMode ? [{ debugName: "groupColors" }] : (
      /* istanbul ignore next */
      []
    )
  );
  /**
   * Group ids the server created for the uploaded batches. Locally added groups are not in
   * this set, which is how the grouping board tells a server group from a local one before
   * deciding whether a move can be persisted.
   */
  serverGroupIds = signal(
    /* @__PURE__ */ new Set(),
    ...ngDevMode ? [{ debugName: "serverGroupIds" }] : (
      /* istanbul ignore next */
      []
    )
  );
  currentStep = signal(
    1,
    ...ngDevMode ? [{ debugName: "currentStep" }] : (
      /* istanbul ignore next */
      []
    )
  );
  availableColors = ["#ef4444", "#f97316", "#f59e0b", "#84cc16", "#22c55e", "#06b6d4", "#3b82f6", "#8b5cf6", "#d946ef", "#f43f5e"];
  // Derived state (computed)
  enrichedHblReviews = computed(
    () => {
      const drafts = this.hblReviews();
      const colors = this.groupColors();
      return drafts.map((draft, index) => {
        const gColor = draft.group_id ? colors[draft.group_id] : null;
        return __spreadProps(__spreadValues({}, draft), {
          uiGlobalIndex: index,
          uiGroupStyle: gColor ? { "border-left": `4px solid ${gColor}` } : null
        });
      });
    },
    ...ngDevMode ? [{ debugName: "enrichedHblReviews" }] : (
      /* istanbul ignore next */
      []
    )
  );
  ungroupedDrafts = computed(
    () => this.enrichedHblReviews().filter((d) => !d.group_id || !this.groupColors()[d.group_id]),
    ...ngDevMode ? [{ debugName: "ungroupedDrafts" }] : (
      /* istanbul ignore next */
      []
    )
  );
  groupedAllDrafts = computed(
    () => {
      const drafts = this.enrichedHblReviews();
      const colors = this.groupColors();
      const allResult = [];
      Object.keys(colors).forEach((groupId) => {
        allResult.push({
          groupId,
          color: colors[groupId],
          drafts: drafts.filter((d) => d.group_id === groupId)
        });
      });
      return allResult;
    },
    ...ngDevMode ? [{ debugName: "groupedAllDrafts" }] : (
      /* istanbul ignore next */
      []
    )
  );
  groupedSelectedDrafts = computed(
    () => {
      const allResult = this.groupedAllDrafts().filter((g) => g.drafts.length > 0);
      const singles = this.ungroupedDrafts().map((draft) => ({
        groupId: draft.group_id || null,
        color: null,
        drafts: [draft]
      }));
      return [...allResult, ...singles];
    },
    ...ngDevMode ? [{ debugName: "groupedSelectedDrafts" }] : (
      /* istanbul ignore next */
      []
    )
  );
  canShowMbl = computed(
    () => {
      const reviews = this.enrichedHblReviews();
      return reviews.length > 0 && reviews.every((r) => !!r.hbl_pdf);
    },
    ...ngDevMode ? [{ debugName: "canShowMbl" }] : (
      /* istanbul ignore next */
      []
    )
  );
  // Actions
  setHblReviews(reviews) {
    this.hblReviews.set(reviews);
  }
  setGroupColors(colors) {
    this.groupColors.set(colors);
  }
  /** Merges newly returned server group ids into the known set. */
  addServerGroupIds(groupIds) {
    if (groupIds.length === 0)
      return;
    this.serverGroupIds.update((existing) => /* @__PURE__ */ new Set([...existing, ...groupIds]));
  }
  isServerGroup(groupId) {
    return !!groupId && this.serverGroupIds().has(groupId);
  }
  setMblReview(review) {
    this.mblReview.set(review);
  }
  setCurrentStep(step) {
    this.currentStep.set(step);
  }
  getGroupIndex(groupId) {
    return Object.keys(this.groupColors()).indexOf(groupId);
  }
  updateDraft(draftId, changes) {
    this.hblReviews.update((drafts) => drafts.map((d) => d.draft_id === draftId ? __spreadValues(__spreadValues({}, d), changes) : d));
  }
  moveDraftToGroup(draftId, groupId) {
    this.hblReviews.update((drafts) => drafts.map((d) => {
      if (d.draft_id === draftId) {
        return __spreadProps(__spreadValues({}, d), { group_id: groupId || d.group_id });
      }
      return d;
    }));
  }
  addGroup() {
    this.groupColors.update((colors) => {
      const nextIndex = Object.keys(colors).length;
      const newGroupId = `group_${Math.random().toString(36).substring(7)}`;
      return __spreadProps(__spreadValues({}, colors), {
        [newGroupId]: this.availableColors[nextIndex % this.availableColors.length]
      });
    });
  }
  removeGroup(groupId) {
    this.groupColors.update((colors) => {
      const newColors = __spreadValues({}, colors);
      delete newColors[groupId];
      return newColors;
    });
  }
  clearSuggestions() {
    this.groupColors.set({});
    this.hblReviews.update((drafts) => drafts.map((draft) => __spreadProps(__spreadValues({}, draft), {
      details_confirmed: false,
      hbl_details: {
        hbl_number: null,
        notify_party: JSON.parse(JSON.stringify(draft.packing_list.notify_party || { name: null, address: null, tax_id: null })),
        container_number: draft.packing_list.containers?.[0]?.container_number || null,
        seal_number: draft.packing_list.containers?.[0]?.seal_numbers?.[0] || null,
        freight_terms: draft.packing_list.freight_terms
      },
      hbl_number: void 0,
      hbl_pdf: void 0,
      hbl_filename: void 0
    })));
    this.mblReview.set(null);
    this.currentStep.set(1);
  }
  clearAll() {
    this.hblReviews.set([]);
    this.mblReview.set(null);
    this.currentStep.set(1);
    this.groupColors.set({});
    this.serverGroupIds.set(/* @__PURE__ */ new Set());
  }
  isGroupSaved(groupId) {
    if (!groupId)
      return false;
    return this.enrichedHblReviews().some((d) => d.group_id === groupId && d.details_confirmed);
  }
  static \u0275fac = function WorkflowStateService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _WorkflowStateService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _WorkflowStateService, factory: _WorkflowStateService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(WorkflowStateService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();

export {
  WorkflowStateService
};
//# debugId=ff492f4c-445c-534d-be46-a3557dab13b0
//# sourceMappingURL=chunk-LCHLSDMN.js.map
