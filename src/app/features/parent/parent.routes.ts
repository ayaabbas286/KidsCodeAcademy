import { Routes } from '@angular/router';
export const parent_routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  },
  {
    path: 'dashboard',
    loadComponent: () => import('./dashboard/dashboard').then((m) => m.Dashboard),
  },
  {
    path: 'children',
    loadComponent: () => import('./children/children').then((m) => m.Children),
  },
  {
    path: 'payments',
    loadComponent: () => import('./payments/payments').then((m) => m.Payments),
  },
  {
    path: 'profile',
    loadComponent: () => import('./profile/profile').then((m) => m.Profile),
  },
];
