import { characterRouter } from "@/modules/characters/router";
import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        //public routes
        {path: '/',name: 'Home',component: () => import('@/shared/pages/HomePage.vue')},
        {path: '/about', name: 'About', component: () => import('@/shared/pages/AboutPage.vue')},

        //character routes
        //path: /characters
        {
            ...characterRouter,
            path: '/characters',
        },

        //Default route
        {path: '/:pathMatch(.*)*', name: 'NotFound',component: () => import('@/shared/pages/HomePage.vue')}

    ]
});


export default router;