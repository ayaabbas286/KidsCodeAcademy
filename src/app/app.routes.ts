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
        path: 'paths',
        data: {
          breadcrumb: 'المسارات التعليمية',
        },
        children: [
          {
            path: '',
            loadComponent: () =>
              import('./pages/learning-path-details/learning-path-details').then(
                (m) => m.LearningPathDetails,
              ),
          },
          {
            path: ':slug',
            loadComponent: () =>
              import('./pages/path-details/path-details').then((m) => m.PathDetails),
          },
        ],
      },

      {
        path: 'courses-levels',
        loadComponent: () =>
          import('./pages/courses-levels/courses-levels').then((m) => m.CoursesLevels),
      },
      {
        path: 'booking/:value',
        loadComponent: () =>
          import('./features/booking/pages/booking-page/booking-page').then((m) => m.BookingPage),
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
        path: 'forgot-password',
        loadComponent: () =>
          import('./features/auth/forgot-password/forgot-password').then((m) => m.ForgotPassword),
      },
      {
        path: 'free-trial',
        loadComponent: () => import('./pages/free-trial/free-trial').then((m) => m.FreeTrial),
      },
      {
        path: 'trial-form',
        loadComponent: () => import('./pages/trial-form/trial-form').then((m) => m.TrialForm),
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
      {
        path: 'experience',
        loadComponent: () => import('./pages/experience/experience').then((m) => m.Experience),
      },
      {
        path: 'reviews',
        loadComponent: () => import('./pages/reviews/reviews').then((m) => m.Reviews),
      },
      {
        path: 'get-started',
        loadComponent: () => import('./pages/get-started/get-started').then((m) => m.GetStarted),
      },
      {
        path: 'home-programs',
        loadComponent: () =>
          import('./pages/home-programs/home-programs').then((m) => m.HomePrograms),
      },
      {
        path: 'programs-details',
        data: {
          breadcrumb: 'البرامج التعليمية',
        },
        children: [
          {
            path: '',
            loadComponent: () =>
              import('./pages/programs-details/programs-details').then((m) => m.ProgramsDetails),
          },

          {
            path: ':slug',
            loadComponent: () =>
              import('./pages/program-details/program-details').then((m) => m.ProgramDetails),
          },
        ],
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
