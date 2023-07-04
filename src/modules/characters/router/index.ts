
import type { RouteRecordRaw } from 'vue-router'

export const characterRouter:RouteRecordRaw = {
    path: '/characters',
    component: () => import('@/modules/characters/layout/CharacterLayout.vue'),
    redirect: {name: 'Character-list'},
    children: [
        {
            path: 'by/id',
            name: 'Character-id',
            props: {
                title: 'Character by id',
                visible: false
            },
            component: () => import('@/modules/characters/pages/CharacterId.vue')
        },
        {
            path: 'list',
            name: 'Character-list',
            props: {
                title: 'Character list',
                visible: true
            },
            component: () => import('@/modules/characters/pages/CharacterList.vue')
        },
        {
            path: 'search',
            name: 'Character-search',
            props: {
                title: 'Character search',
                visible: true

            },
            component: () => import('@/modules/characters/pages/CharacterSearch.vue')
        }
    ]
}