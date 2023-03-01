

import {createRouter, createWebHistory, RouteRecordRaw} from "vue-router";

const routes: RouteRecordRaw[] = [
    {
        path: '/',
        name: 'Home',
        meta: {
        },
        children: [
            {
                path: '/a',
                name: 'A',
                meta: {
                    ignoreAuth: true
                },
                component: () => import('../views/PageOne.vue')
            },
            {
                path: '/b',
                name: 'B',
                component: () =>  import('../views/PageTwo.vue')
            },

            {
                path: '/c',
                name: 'c',
                component: () =>  import('../views/PageTwo.vue')
            },

            {
                path: '/d',
                name: 'd',
                component: () =>  import('../views/PageTwo.vue')
            },

            {
                path: '/e',
                name: 'e',
                component: () =>  import('../views/PageTwo.vue')
            },
            {
                path: '/callback',
                meta: {
                    ignoreAuth: true
                },
                component: () =>  import('../views/callback.vue')
            },
            {
                path: '/logout',
                meta: {
                    ignoreAuth: true
                },
                component: () =>  import('../views/Logout.vue')
            }
        ]
    }
]

const router = createRouter({
    history: createWebHistory(''),
    routes
})


export {
    router
}
