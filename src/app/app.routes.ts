import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./layouts/public-layout/public-layout').then((m) => m.PublicLayout),
    children: [
      {
        path: '',
        loadComponent: () => import('./pages/home/home').then((m) => m.Home),
      },
      {
        path: 'whyus',
        loadComponent: () => import('./pages/why-us/why-us').then((m) => m.WhyUs),
      },
      {
        path: 'programs',
        loadComponent: () => import('./pages/programs/programs').then((m) => m.Programs),
      },
      {
        path: 'courses-levels',
        loadComponent: () =>
          import('./pages/courses-levels/courses-levels').then((m) => m.CoursesLevels),
      },
      {
        path: 'contact',
        loadComponent: () => import('./pages/contact/contact').then((m) => m.Contact),
      },
      {
        path: 'about',
        loadComponent: () => import('./pages/about/about').then((m) => m.About),
      },
      {
        path: 'login',
        loadComponent: () => import('./features/auth/login/login').then((m) => m.Login),
      },
      {
        path: 'register',
        loadComponent: () => import('./features/auth/register/register').then((m) => m.Register),
      },
      {
        path: 'projects',
        loadComponent: () => import('./pages/projects/projects').then((m) => m.Projects),
      },
      {
        path: 'terms',
        loadComponent: () => import('./pages/terms/terms').then((m) => m.Terms),
      },
      {
        path: 'privacy-policy',
        loadComponent: () =>
          import('./pages/privacy-policy/privacy-policy').then((m) => m.PrivacyPolicy),
      },
    ],
  },

  // Role areas (lazy loaded children)
  {
    path: '',
    loadComponent: () =>
      import('./layouts/dashboard-layout/dashboard-layout').then((m) => m.DashboardLayout),
    children: [
      {
        path: 'student',
        loadChildren: () =>
          import('./features/student/student.routes').then((m) => m.Student_routes),
      },
      {
        path: 'parent',
        loadChildren: () => import('./features/parent/parent.routes').then((m) => m.parent_routes),
      },
      {
        path: 'instructor',
        loadChildren: () =>
          import('./features/instructor/instructor.routes').then((m) => m.instructor_routes),
      },
      {
        path: 'admin',
        loadChildren: () => import('./features/admin/admin.routes').then((m) => m.Admin_routes),
      },
    ],
  },

  // 404
  {
    path: '**',
    loadComponent: () => import('./pages/not-found/not-found').then((m) => m.NotFound),
  },
];
