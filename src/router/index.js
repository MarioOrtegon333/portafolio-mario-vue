import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/components/Home.vue';
import CompanyDetail from '@/views/CompanyDetail.vue';

const routes = [
  // Rutas principales
  { path: '/', name: 'Home', component: Home },
  // Rutas de detalle de empresa
  { path: '/empresa/:id', name: 'CompanyDetail', component: CompanyDetail }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;