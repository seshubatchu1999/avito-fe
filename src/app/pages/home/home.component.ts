import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <div class="home-container">
      <header class="app-header">
        <div class="logo-container">
          <img src="avito.png" alt="Avito Logo" class="header-logo" />
        </div>
      </header>

      <main class="main-content">
        <div class="hero-section">
          <h1 class="welcome-title">Welcome to Avito Processing</h1>
          <p class="subtitle">Please select a workflow to begin</p>
        </div>

        <div class="options-grid">
          
          <a routerLink="/mbl-processing" class="option-card">
            <div class="icon-wrapper">
              <!-- Ship Silhouette SVG -->
              <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 64 64" fill="currentColor">
                <!-- Hull -->
                <polygon points="2,38 2,54 52,54 62,38" />
                
                <!-- Portholes (using background color for cutout effect) -->
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
                
                <!-- Bridge Windows (3x3 slanted grid) -->
                <!-- Row 1 -->
                <rect x="46.5" y="24" width="1.5" height="2" fill="#eff6ff" />
                <rect x="49.25" y="24" width="1.5" height="2" fill="#eff6ff" />
                <rect x="52" y="24" width="1.5" height="2" fill="#eff6ff" />
                <!-- Row 2 -->
                <rect x="46" y="28" width="1.5" height="2" fill="#eff6ff" />
                <rect x="49.25" y="28" width="1.5" height="2" fill="#eff6ff" />
                <rect x="52.5" y="28" width="1.5" height="2" fill="#eff6ff" />
                <!-- Row 3 -->
                <rect x="45.5" y="32" width="1.5" height="2" fill="#eff6ff" />
                <rect x="49.25" y="32" width="1.5" height="2" fill="#eff6ff" />
                <rect x="53" y="32" width="1.5" height="2" fill="#eff6ff" />
              </svg>
            </div>
            <h2>MBL Processing</h2>
            <p>Upload packing lists and complete HBL/MBL details</p>
          </a>

          <a routerLink="/invoice-processing" class="option-card">
            <div class="icon-wrapper">
              <!-- Invoice SVG -->
              <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                <polyline points="14 2 14 8 20 8"></polyline>
                <line x1="16" y1="13" x2="8" y2="13"></line>
                <line x1="16" y1="17" x2="8" y2="17"></line>
                <polyline points="10 9 9 9 8 9"></polyline>
              </svg>
            </div>
            <h2>Invoice Processing</h2>
            <p>Upload invoices to extract structured data automatically</p>
          </a>

        </div>

      </main>
    </div>
  `,
  styles: [`
    .home-container {
      display: flex;
      flex-direction: column;
      height: 100vh;
      overflow: hidden;
      background-color: #f8fafc;
      font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
    }
    .app-header {
      flex-shrink: 0;
      background: white;
      padding: 1rem 2rem;
      box-shadow: 0 1px 3px rgba(0,0,0,0.1);
      display: flex;
      justify-content: center;
      z-index: 10;
    }
    .header-logo {
      height: 50px;
      width: 100px;
    }
    .main-content {
      flex: 1;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      padding: 1rem 2rem;
      overflow-y: auto;
    }
    .hero-section {
      text-align: center;
    }
    .welcome-title {
      font-size: 2.5rem;
      color: #1a2b4c;
      margin-bottom: 0.5rem;
      font-weight: 700;
    }
    .subtitle {
      font-size: 1.1rem;
      color: #64748b;
      margin-bottom: 3rem;
    }
    .options-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 2rem;
      justify-content: center;
      width: 100%;
      max-width: 800px;
    }
    .option-card {
      background: white;
      border-radius: 12px;
      padding: 2.5rem 1.5rem;
      text-decoration: none;
      color: inherit;
      box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
      transition: all 0.3s ease;
      display: flex;
      flex-direction: column;
      align-items: center;
      border: 2px solid transparent;
      text-align: center;
    }
    .option-card:hover {
      transform: translateY(-5px);
      box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
      border-color: #f26d21; /* brand primary color approximation */
    }
    .icon-wrapper {
      color: #f26d21;
      margin-bottom: 1.5rem;
      padding: 1.5rem;
      background: #eff6ff;
      border-radius: 50%;
    }
    .option-card h2 {
      font-size: 1.5rem;
      color: #1a2b4c;
      margin: 0 0 1rem 0;
      font-weight: 600;
    }
    .option-card p {
      color: #64748b;
      margin: 0;
      line-height: 1.5;
    }
  `]
})
export class HomeComponent {}
