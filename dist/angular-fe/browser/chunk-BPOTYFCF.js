import {
  RouterLink,
  RouterModule
} from "./chunk-2II2K2OC.js";
import {
  CommonModule,
  Component,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
  ɵɵtext
} from "./chunk-YEYBPR5L.js";

// src/app/pages/home/home.component.ts
var HomeComponent = class _HomeComponent {
  static \u0275fac = function HomeComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _HomeComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _HomeComponent, selectors: [["app-home"]], decls: 73, vars: 0, consts: [[1, "home-container"], [1, "app-header"], [1, "header-inner"], ["src", "avito.png", "alt", "Avito Logo", 1, "header-logo"], [1, "main-content"], [1, "hero-section"], [1, "welcome-title"], [1, "brand-text"], [1, "subtitle"], [1, "options-grid"], ["routerLink", "/mbl-processing", 1, "option-card"], [1, "card-glow"], [1, "icon-wrapper"], ["xmlns", "http://www.w3.org/2000/svg", "width", "48", "height", "48", "viewBox", "0 0 64 64", "fill", "currentColor"], ["points", "2,38 2,54 52,54 62,38"], ["cx", "12", "cy", "46", "r", "2.5", "fill", "#eff6ff"], ["cx", "24", "cy", "46", "r", "2.5", "fill", "#eff6ff"], ["cx", "36", "cy", "46", "r", "2.5", "fill", "#eff6ff"], ["cx", "48", "cy", "46", "r", "2.5", "fill", "#eff6ff"], ["x", "11", "y", "25", "width", "2", "height", "13"], ["points", "8,22 16,22 13.5,25 10.5,25"], ["x", "11.5", "y", "17", "width", "1", "height", "5"], ["x", "16", "y", "33", "width", "10", "height", "4"], ["x", "16", "y", "28", "width", "10", "height", "4"], ["x", "16", "y", "23", "width", "10", "height", "4"], ["x", "27", "y", "33", "width", "10", "height", "4"], ["x", "27", "y", "28", "width", "10", "height", "4"], ["x", "27", "y", "23", "width", "10", "height", "4"], ["x", "37", "y", "34", "width", "7", "height", "4"], ["x", "39", "y", "10", "width", "3", "height", "26"], ["x", "22", "y", "10", "width", "17", "height", "2"], ["x", "23", "y", "12", "width", "1", "height", "4"], ["d", "M 22.5 16 C 22.5 18, 24.5 18, 24.5 16", "fill", "none", "stroke", "currentColor", "stroke-width", "1.5"], ["points", "43,38 45,22 55,22 57,38"], ["x", "46.5", "y", "24", "width", "1.5", "height", "2", "fill", "#eff6ff"], ["x", "49.25", "y", "24", "width", "1.5", "height", "2", "fill", "#eff6ff"], ["x", "52", "y", "24", "width", "1.5", "height", "2", "fill", "#eff6ff"], ["x", "46", "y", "28", "width", "1.5", "height", "2", "fill", "#eff6ff"], ["x", "49.25", "y", "28", "width", "1.5", "height", "2", "fill", "#eff6ff"], ["x", "52.5", "y", "28", "width", "1.5", "height", "2", "fill", "#eff6ff"], ["x", "45.5", "y", "32", "width", "1.5", "height", "2", "fill", "#eff6ff"], ["x", "49.25", "y", "32", "width", "1.5", "height", "2", "fill", "#eff6ff"], ["x", "53", "y", "32", "width", "1.5", "height", "2", "fill", "#eff6ff"], [1, "card-content"], [1, "card-arrow"], ["width", "24", "height", "24", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round"], ["x1", "5", "y1", "12", "x2", "19", "y2", "12"], ["points", "12 5 19 12 12 19"], ["routerLink", "/invoice-processing", 1, "option-card"], ["xmlns", "http://www.w3.org/2000/svg", "width", "48", "height", "48", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "1.5", "stroke-linecap", "round", "stroke-linejoin", "round"], ["d", "M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"], ["points", "14 2 14 8 20 8"], ["x1", "16", "y1", "13", "x2", "8", "y2", "13"], ["x1", "16", "y1", "17", "x2", "8", "y2", "17"], ["points", "10 9 9 9 8 9"]], template: function HomeComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "header", 1)(2, "div", 2);
      \u0275\u0275element(3, "img", 3);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(4, "main", 4)(5, "div", 5)(6, "h1", 6);
      \u0275\u0275text(7, "Welcome to ");
      \u0275\u0275elementStart(8, "span", 7);
      \u0275\u0275text(9, "Avito Processing");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(10, "p", 8);
      \u0275\u0275text(11, "Please select a workflow to begin your session");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(12, "div", 9)(13, "a", 10);
      \u0275\u0275element(14, "div", 11);
      \u0275\u0275elementStart(15, "div", 12);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(16, "svg", 13);
      \u0275\u0275element(17, "polygon", 14)(18, "circle", 15)(19, "circle", 16)(20, "circle", 17)(21, "circle", 18)(22, "rect", 19)(23, "polygon", 20)(24, "rect", 21)(25, "rect", 22)(26, "rect", 23)(27, "rect", 24)(28, "rect", 25)(29, "rect", 26)(30, "rect", 27)(31, "rect", 28)(32, "rect", 29)(33, "rect", 30)(34, "rect", 31)(35, "path", 32)(36, "polygon", 33)(37, "rect", 34)(38, "rect", 35)(39, "rect", 36)(40, "rect", 37)(41, "rect", 38)(42, "rect", 39)(43, "rect", 40)(44, "rect", 41)(45, "rect", 42);
      \u0275\u0275elementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(46, "div", 43)(47, "h2");
      \u0275\u0275text(48, "MBL Processing");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(49, "p");
      \u0275\u0275text(50, "Upload packing lists and complete HBL/MBL details efficiently through an automated workflow.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(51, "div", 44);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(52, "svg", 45);
      \u0275\u0275element(53, "line", 46)(54, "polyline", 47);
      \u0275\u0275elementEnd()()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(55, "a", 48);
      \u0275\u0275element(56, "div", 11);
      \u0275\u0275elementStart(57, "div", 12);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(58, "svg", 49);
      \u0275\u0275element(59, "path", 50)(60, "polyline", 51)(61, "line", 52)(62, "line", 53)(63, "polyline", 54);
      \u0275\u0275elementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(64, "div", 43)(65, "h2");
      \u0275\u0275text(66, "Invoice Processing");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(67, "p");
      \u0275\u0275text(68, "Upload invoices to automatically extract, review, and export structured financial data.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(69, "div", 44);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(70, "svg", 45);
      \u0275\u0275element(71, "line", 46)(72, "polyline", 47);
      \u0275\u0275elementEnd()()()()()();
    }
  }, dependencies: [CommonModule, RouterModule, RouterLink], styles: ['\n.home-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  height: 100vh;\n  overflow: hidden;\n  background:\n    radial-gradient(\n      circle at 0% 0%,\n      rgba(242, 109, 33, 0.04) 0%,\n      transparent 40%),\n    radial-gradient(\n      circle at 100% 100%,\n      rgba(26, 43, 76, 0.04) 0%,\n      transparent 40%),\n    #f8fafc;\n  font-family:\n    "Inter",\n    -apple-system,\n    BlinkMacSystemFont,\n    "Segoe UI",\n    Roboto,\n    Helvetica,\n    Arial,\n    sans-serif;\n}\n.app-header[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n  background: rgba(255, 255, 255, 0.7);\n  backdrop-filter: blur(12px);\n  -webkit-backdrop-filter: blur(12px);\n  padding: 1rem 2rem;\n  border-bottom: 1px solid rgba(0, 0, 0, 0.05);\n  z-index: 10;\n}\n.header-inner[_ngcontent-%COMP%] {\n  max-width: 1400px;\n  margin: 0 auto;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.header-logo[_ngcontent-%COMP%] {\n  height: 40px;\n  object-fit: contain;\n}\n.main-content[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  padding: 2rem;\n  overflow-y: auto;\n}\n.hero-section[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-bottom: 3.5rem;\n  animation: _ngcontent-%COMP%_fadeInDown 0.6s ease-out;\n}\n.welcome-title[_ngcontent-%COMP%] {\n  font-size: 3rem;\n  color: #1a2b4c;\n  margin-bottom: 1rem;\n  font-weight: 800;\n  letter-spacing: -0.025em;\n}\n.brand-text[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #f26d21,\n      #d95a16);\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n  background-clip: text;\n  color: transparent;\n}\n.subtitle[_ngcontent-%COMP%] {\n  font-size: 1.15rem;\n  color: #64748b;\n  margin: 0;\n  font-weight: 400;\n}\n.options-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(360px, 1fr));\n  gap: 2rem;\n  width: 100%;\n  max-width: 900px;\n  animation: _ngcontent-%COMP%_fadeInUp 0.6s ease-out;\n}\n.option-card[_ngcontent-%COMP%] {\n  position: relative;\n  background: #ffffff;\n  border-radius: 16px;\n  padding: 2.5rem;\n  text-decoration: none;\n  color: inherit;\n  border: 1px solid rgba(226, 232, 240, 0.8);\n  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -1px rgba(0, 0, 0, 0.03);\n  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  overflow: hidden;\n  z-index: 1;\n}\n.card-glow[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 4px;\n  background:\n    linear-gradient(\n      90deg,\n      #f26d21,\n      #fbd5c0);\n  opacity: 0;\n  transition: opacity 0.4s ease;\n}\n.option-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-6px);\n  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);\n  border-color: rgba(242, 109, 33, 0.2);\n}\n.option-card[_ngcontent-%COMP%]:hover   .card-glow[_ngcontent-%COMP%] {\n  opacity: 1;\n}\n.icon-wrapper[_ngcontent-%COMP%] {\n  color: #f26d21;\n  margin-bottom: 1.5rem;\n  padding: 1.25rem;\n  background: #fef1eb;\n  border: 1px solid rgba(242, 109, 33, 0.1);\n  border-radius: 14px;\n  display: inline-flex;\n  transition: transform 0.4s ease;\n}\n.option-card[_ngcontent-%COMP%]:hover   .icon-wrapper[_ngcontent-%COMP%] {\n  transform: scale(1.05);\n}\n.card-content[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.card-content[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  color: #1a2b4c;\n  margin: 0 0 0.75rem 0;\n  font-weight: 700;\n  letter-spacing: -0.015em;\n}\n.card-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #64748b;\n  margin: 0;\n  line-height: 1.6;\n  font-size: 1rem;\n}\n.card-arrow[_ngcontent-%COMP%] {\n  margin-top: 1.5rem;\n  align-self: flex-end;\n  color: #cbd5e1;\n  transition: all 0.3s ease;\n}\n.option-card[_ngcontent-%COMP%]:hover   .card-arrow[_ngcontent-%COMP%] {\n  color: #f26d21;\n  transform: translateX(6px);\n}\n@keyframes _ngcontent-%COMP%_fadeInUp {\n  from {\n    opacity: 0;\n    transform: translateY(20px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n@keyframes _ngcontent-%COMP%_fadeInDown {\n  from {\n    opacity: 0;\n    transform: translateY(-20px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n/*# sourceMappingURL=home.component.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(HomeComponent, [{
    type: Component,
    args: [{ selector: "app-home", standalone: true, imports: [CommonModule, RouterModule], template: `
    <div class="home-container">
      <header class="app-header">
        <div class="header-inner">
          <img src="avito.png" alt="Avito Logo" class="header-logo" />
        </div>
      </header>

      <main class="main-content">
        <div class="hero-section">
          <h1 class="welcome-title">Welcome to <span class="brand-text">Avito Processing</span></h1>
          <p class="subtitle">Please select a workflow to begin your session</p>
        </div>

        <div class="options-grid">
          
          <a routerLink="/mbl-processing" class="option-card">
            <div class="card-glow"></div>
            <div class="icon-wrapper">
              <!-- Ship Silhouette SVG -->
              <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 64 64" fill="currentColor">
                <!-- Hull -->
                <polygon points="2,38 2,54 52,54 62,38" />
                
                <!-- Portholes -->
                <circle cx="12" cy="46" r="2.5" fill="#eff6ff" />
                <circle cx="24" cy="46" r="2.5" fill="#eff6ff" />
                <circle cx="36" cy="46" r="2.5" fill="#eff6ff" />
                <circle cx="48" cy="46" r="2.5" fill="#eff6ff" />

                <!-- Rear Mast -->
                <rect x="11" y="25" width="2" height="13" />
                <polygon points="8,22 16,22 13.5,25 10.5,25" />
                <rect x="11.5" y="17" width="1" height="5" />

                <!-- Containers Left Stack -->
                <rect x="16" y="33" width="10" height="4" />
                <rect x="16" y="28" width="10" height="4" />
                <rect x="16" y="23" width="10" height="4" />

                <!-- Containers Right Stack -->
                <rect x="27" y="33" width="10" height="4" />
                <rect x="27" y="28" width="10" height="4" />
                <rect x="27" y="23" width="10" height="4" />

                <!-- Crane Base & Pillar -->
                <rect x="37" y="34" width="7" height="4" />
                <rect x="39" y="10" width="3" height="26" />
                
                <!-- Crane Arm -->
                <rect x="22" y="10" width="17" height="2" />
                
                <!-- Crane Hook Drop -->
                <rect x="23" y="12" width="1" height="4" />
                <!-- Hook Base -->
                <path d="M 22.5 16 C 22.5 18, 24.5 18, 24.5 16" fill="none" stroke="currentColor" stroke-width="1.5" />

                <!-- Bridge Structure -->
                <polygon points="43,38 45,22 55,22 57,38" />
                
                <!-- Bridge Windows -->
                <rect x="46.5" y="24" width="1.5" height="2" fill="#eff6ff" />
                <rect x="49.25" y="24" width="1.5" height="2" fill="#eff6ff" />
                <rect x="52" y="24" width="1.5" height="2" fill="#eff6ff" />
                <rect x="46" y="28" width="1.5" height="2" fill="#eff6ff" />
                <rect x="49.25" y="28" width="1.5" height="2" fill="#eff6ff" />
                <rect x="52.5" y="28" width="1.5" height="2" fill="#eff6ff" />
                <rect x="45.5" y="32" width="1.5" height="2" fill="#eff6ff" />
                <rect x="49.25" y="32" width="1.5" height="2" fill="#eff6ff" />
                <rect x="53" y="32" width="1.5" height="2" fill="#eff6ff" />
              </svg>
            </div>
            <div class="card-content">
              <h2>MBL Processing</h2>
              <p>Upload packing lists and complete HBL/MBL details efficiently through an automated workflow.</p>
            </div>
            <div class="card-arrow">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
            </div>
          </a>

          <a routerLink="/invoice-processing" class="option-card">
            <div class="card-glow"></div>
            <div class="icon-wrapper">
              <!-- Invoice SVG -->
              <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                <polyline points="14 2 14 8 20 8"></polyline>
                <line x1="16" y1="13" x2="8" y2="13"></line>
                <line x1="16" y1="17" x2="8" y2="17"></line>
                <polyline points="10 9 9 9 8 9"></polyline>
              </svg>
            </div>
            <div class="card-content">
              <h2>Invoice Processing</h2>
              <p>Upload invoices to automatically extract, review, and export structured financial data.</p>
            </div>
            <div class="card-arrow">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
            </div>
          </a>

        </div>
      </main>
    </div>
  `, styles: ['/* angular:styles/component:css;92875d01d0a019e83fa7a8ba39270818c0f634eeb7c42db1a8ea0f9e92485ad0;C:/Users/VenkataSai-I/Desktop/doc_proc/frontend/avito-fe/src/app/pages/home/home.component.ts */\n.home-container {\n  display: flex;\n  flex-direction: column;\n  height: 100vh;\n  overflow: hidden;\n  background:\n    radial-gradient(\n      circle at 0% 0%,\n      rgba(242, 109, 33, 0.04) 0%,\n      transparent 40%),\n    radial-gradient(\n      circle at 100% 100%,\n      rgba(26, 43, 76, 0.04) 0%,\n      transparent 40%),\n    #f8fafc;\n  font-family:\n    "Inter",\n    -apple-system,\n    BlinkMacSystemFont,\n    "Segoe UI",\n    Roboto,\n    Helvetica,\n    Arial,\n    sans-serif;\n}\n.app-header {\n  flex-shrink: 0;\n  background: rgba(255, 255, 255, 0.7);\n  backdrop-filter: blur(12px);\n  -webkit-backdrop-filter: blur(12px);\n  padding: 1rem 2rem;\n  border-bottom: 1px solid rgba(0, 0, 0, 0.05);\n  z-index: 10;\n}\n.header-inner {\n  max-width: 1400px;\n  margin: 0 auto;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.header-logo {\n  height: 40px;\n  object-fit: contain;\n}\n.main-content {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  padding: 2rem;\n  overflow-y: auto;\n}\n.hero-section {\n  text-align: center;\n  margin-bottom: 3.5rem;\n  animation: fadeInDown 0.6s ease-out;\n}\n.welcome-title {\n  font-size: 3rem;\n  color: #1a2b4c;\n  margin-bottom: 1rem;\n  font-weight: 800;\n  letter-spacing: -0.025em;\n}\n.brand-text {\n  background:\n    linear-gradient(\n      135deg,\n      #f26d21,\n      #d95a16);\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n  background-clip: text;\n  color: transparent;\n}\n.subtitle {\n  font-size: 1.15rem;\n  color: #64748b;\n  margin: 0;\n  font-weight: 400;\n}\n.options-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(360px, 1fr));\n  gap: 2rem;\n  width: 100%;\n  max-width: 900px;\n  animation: fadeInUp 0.6s ease-out;\n}\n.option-card {\n  position: relative;\n  background: #ffffff;\n  border-radius: 16px;\n  padding: 2.5rem;\n  text-decoration: none;\n  color: inherit;\n  border: 1px solid rgba(226, 232, 240, 0.8);\n  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -1px rgba(0, 0, 0, 0.03);\n  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  overflow: hidden;\n  z-index: 1;\n}\n.card-glow {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 4px;\n  background:\n    linear-gradient(\n      90deg,\n      #f26d21,\n      #fbd5c0);\n  opacity: 0;\n  transition: opacity 0.4s ease;\n}\n.option-card:hover {\n  transform: translateY(-6px);\n  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);\n  border-color: rgba(242, 109, 33, 0.2);\n}\n.option-card:hover .card-glow {\n  opacity: 1;\n}\n.icon-wrapper {\n  color: #f26d21;\n  margin-bottom: 1.5rem;\n  padding: 1.25rem;\n  background: #fef1eb;\n  border: 1px solid rgba(242, 109, 33, 0.1);\n  border-radius: 14px;\n  display: inline-flex;\n  transition: transform 0.4s ease;\n}\n.option-card:hover .icon-wrapper {\n  transform: scale(1.05);\n}\n.card-content {\n  flex: 1;\n}\n.card-content h2 {\n  font-size: 1.5rem;\n  color: #1a2b4c;\n  margin: 0 0 0.75rem 0;\n  font-weight: 700;\n  letter-spacing: -0.015em;\n}\n.card-content p {\n  color: #64748b;\n  margin: 0;\n  line-height: 1.6;\n  font-size: 1rem;\n}\n.card-arrow {\n  margin-top: 1.5rem;\n  align-self: flex-end;\n  color: #cbd5e1;\n  transition: all 0.3s ease;\n}\n.option-card:hover .card-arrow {\n  color: #f26d21;\n  transform: translateX(6px);\n}\n@keyframes fadeInUp {\n  from {\n    opacity: 0;\n    transform: translateY(20px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n@keyframes fadeInDown {\n  from {\n    opacity: 0;\n    transform: translateY(-20px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n/*# sourceMappingURL=home.component.css.map */\n'] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(HomeComponent, { className: "HomeComponent", filePath: "src/app/pages/home/home.component.ts", lineNumber: 272 });
})();
export {
  HomeComponent
};
//# debugId=32e12c2d-22b2-5374-a295-5cf5cd9ef5f6
//# sourceMappingURL=chunk-BPOTYFCF.js.map
