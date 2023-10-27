import { createRouter, createWebHistory } from 'vue-router';
import PageHome from '@/pages/PageHome';
import PageProduct from '@/pages/PageProduct';
import PageFavorites from '@/pages/PageFavorites';

const routes = [
  { path: '/', component: PageHome },
  { path: '/product/:id', component: PageProduct },
  { path: '/favorites', component: PageFavorites },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;