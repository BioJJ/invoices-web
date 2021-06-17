const routes = [
  // Home
  {
    path: '/',
    name: 'Home',
    meta: {
      title: 'Home',
    },
    component: () => import('../views/Home.vue'),
  },

  // Dashboard
  {
    path: 'dashboard',
    name: 'Dashboard',
    meta: {
      title: 'Dashboard',
    },
    component: () => import('../views/Dashboard.vue'),
  },

  // Establishments
  {
    path: 'establishments',
    name: 'EstablishmentsList',
    meta: {
      title: 'Establishments',
    },
    component: () => import('../views/establishments/EstablishmentList.vue'),
  },
  {
    path: 'establishments/create',
    name: 'EstablishmentForm',
    meta: {
      title: 'Establishments',
    },
    component: () => import('../views/establishments/EstablishmentForm.vue'),
  },
  {
    path: 'establishments/edit/:id',
    name: 'EstablishmentEdit',
    meta: {
      title: 'Establishments',
    },
    props: (route: any) => ({ ...route.params }),
    component: () => import('../views/establishments/EstablishmentForm.vue'),
  },
  {
    path: 'establishments/view/:id',
    name: 'EstablishmentView',
    meta: {
      title: 'Establishments',
    },
    props: (route: any) => ({ ...route.params }),
    component: () => import('../views/establishments/EstablishmentView.vue'),
  },
];

export default routes;
