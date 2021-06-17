import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import viewRoutes from './views';

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Container',
    component: () => import('../components/layout/Container.vue'),
    children: viewRoutes,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
