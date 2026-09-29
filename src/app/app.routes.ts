import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/home/home.component').then(m => m.HomeComponent)
  },
  {
    path: 'mbl-processing',
    loadComponent: () => import('./pages/mbl-flow/mbl-flow.component').then(m => m.MblFlowComponent)
  },
  {
    path: 'invoice-processing',
    loadComponent: () => import('./pages/invoice-flow/invoice-flow.component').then(m => m.InvoiceFlowComponent)
  },
  {
    path: '**',
    redirectTo: ''
  }
];
