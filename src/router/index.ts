import type { RouteRecordRaw } from 'vue-router';
import Home from '../views/Home.vue';

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'Home',
        component: Home,
    },
    // 404ページへのリダイレクト
    {
        path: '/:pathMatch(.*)*',
        redirect: '/',
    },
];

export default routes;
