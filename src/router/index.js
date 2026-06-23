import { createRouter, createWebHistory } from 'vue-router';

// lazy loading
const HomeView = () => import('../views/HomeView.vue');
const ProductosView = () => import('../views/ProductosView.vue');
const NosotrosView = () => import('../views/NosotrosView.vue');
const ContactoView = () => import('../views/ContactoView.vue');
const NotFoundView = () => import('../views/NotFoundView.vue');

const routes = [
    { path: '/', component: HomeView, name: 'Home' },
    { path: '/catalogo', component: ProductosView, name: 'Productos' },
    { path: '/nosotros', component: NosotrosView, name: 'Nosotros' },
    { path: '/contacto', component: ContactoView, name: 'Contacto' },
    { path: '/:pathMatch(.*)*', component: NotFoundView, name: 'NotFound' }
];

export default createRouter({
    history: createWebHistory(),
    routes
});