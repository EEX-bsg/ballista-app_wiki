import type { RouteRecordRaw } from 'vue-router';
import Home from '../views/Home.vue';
import TransactionLaw from '../views/TransactionLaw.vue';

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'Home',
        component: Home,
    },
    {
        path: '/transaction-law',
        name: 'TransactionLaw',
        component: TransactionLaw,
    },
    // 404ページへのリダイレクト
    {
        path: '/:pathMatch(.*)*',
        redirect: '/',
    },
];

export default routes;
