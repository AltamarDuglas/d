import { createRouter, createWebHistory } from 'vue-router';
import inicio from './views/inicio.vue';
import profesores from './views/profesores.vue';
import clases from './views/clases.vue';

const routes = [
  {
    path: '/',
    name: 'Inicio',
    component: inicio
  },
  {
    path: '/profesores',
    name: 'Profesores',
    component: profesores
  },
  {
    path: '/clases',
    name: 'Clases',
    component: clases
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;

