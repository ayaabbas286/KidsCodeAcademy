import { Routes } from '@angular/router';
export const instructor_routes: Routes = [
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
    path: 'groups',
    loadComponent: () => import('./groups/groups').then((m) => m.Groups),
  },
  {
    path: 'homework',
    loadComponent: () => import('./homework/homework').then((m) => m.Homework),
  },
  {
    path: 'profile',
    loadComponent: () => import('./profile/profile').then((m) => m.Profile),
  },
  {
    path: 'sessions',
    loadComponent: () => import('./sessions/sessions').then((m) => m.Sessions),
  },
];
