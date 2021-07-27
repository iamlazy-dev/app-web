import type { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {
        path: '',
        component: () => import('pages/Index.vue'),
      },
    ],
  },
  {
    path: '/dashboard',
    component: () => import('layouts/SimpleLayout.vue'),
    children: [
      {
        name: 'DashboardIndex',
        path: '',
        component: () => import('pages/dashboard/Index.vue'),
      },
      {
        name: 'DashboardCreateProject',
        path: 'create',
        component: () => import('pages/dashboard/CreateProject.vue'),
      },
    ],
  },
  {
    path: '/dashboard/:id',
    component: () => import('layouts/DashboardLayout.vue'),
    children: [
      {
        path: '',
        name: 'DashboardOverview',
        component: () => import('pages/dashboard/Overview.vue'),
      },
      {
        path: 'module/explore',
        name: 'DashboardModuleExplorer',
        component: () => import('pages/dashboard/ModuleExplorer.vue'),
      },
      {
        path: 'module/details/:moduleId',
        name: 'DashboardModuleDetails',
        component: () => import('pages/dashboard/ModuleDetails.vue'),
      },
      {
        path: 'module',
        name: 'DashboardAppModule',
        component: () => import('layouts/AppModuleLayout.vue'),
      },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/Error404.vue'),
  },
];

export default routes;
