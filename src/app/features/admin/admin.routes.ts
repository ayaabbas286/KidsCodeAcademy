import { Routes } from '@angular/router';
export const Admin_routes: Routes = [
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
    path: 'instructors',
    loadComponent: () => import('./instructors/instructors').then((m) => m.Instructors),
  },
  {
    path: 'programs',
    loadComponent: () => import('./programs/programs').then((m) => m.Programs),
  },
  {
    path: 'settings',
    loadComponent: () => import('./settings/settings').then((m) => m.Settings),
  },
  {
    path: 'students',
    loadComponent: () => import('./students/students').then((m) => m.Students),
  },
];
