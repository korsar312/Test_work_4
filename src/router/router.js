import { createWebHistory, createRouter } from "vue-router";
import Main from '../pages/Main'

const routes = [
    {
        path: '/',
        name: 'main',
        component: Main,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router




