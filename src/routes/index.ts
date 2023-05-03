import { createRouter, createWebHashHistory } from 'vue-router'
import ContentVue from '../pages/Content.vue';
// import Favorite from '../pages/Favorite.vue';

// Lazy loading
const lazyUserPage = () => import('../pages/Content.vue');
const lazyFavoritePage = () => import('../pages/Favorite.vue');

const routes = [
    { path: '/', component: lazyUserPage },
    { path: '/favorite', component: lazyFavoritePage },
  ]

const router = createRouter({
    history: createWebHashHistory(),
    routes,
});

export default router;