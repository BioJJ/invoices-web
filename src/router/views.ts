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
    name: 'EstablishmentList',
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

  // Notes
  {
    path: 'notes',
    name: 'NoteList',
    meta: {
      title: 'Notes',
    },
    component: () => import('../views/notes/NoteList.vue'),
  },
  {
    path: 'notes/create',
    name: 'NoteForm',
    meta: {
      title: 'Notes',
    },
    component: () => import('../views/notes/NoteForm.vue'),
  },
  {
    path: 'notes/edit/:id',
    name: 'NoteEdit',
    meta: {
      title: 'Notes',
    },
    props: (route: any) => ({ ...route.params }),
    component: () => import('../views/notes/NoteForm.vue'),
  },
  {
    path: 'notes/view/:id',
    name: 'NoteView',
    meta: {
      title: 'Notes',
    },
    props: (route: any) => ({ ...route.params }),
    component: () => import('../views/notes/NoteView.vue'),
  },
];

export default routes;
