import Vue from 'vue';
import VueRouter from 'vue-router';
import AuthView from '../views/AuthView.vue';
import HomeView from '../views/HomeView.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('@/views/AboutView.vue'),
  },
  {
    path: '/auth',
    name: 'auth',
    component: AuthView,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
