import { Routes } from '@angular/router';
export const Student_routes: Routes = [
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
    path: 'homework',
    loadComponent: () => import('./homework/homework').then((m) => m.Homework),
  },
  {
    path: 'my-programs',
    loadComponent: () => import('./my-programs/my-programs').then((m) => m.MyPrograms),
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
