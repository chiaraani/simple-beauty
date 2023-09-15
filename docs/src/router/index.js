import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/views/Home.vue'),
    },
    {
      path: '/docs',
      component: () => import('@/views/Docs.vue'),
      children: [
        {
          path: '',
          name: 'index',
          component: () => import('@/views/Index.vue'),
        },
        {
          path: ':path',
          name: 'page',
          component: () => import('@/views/Page.vue'),
        },
      ],
    },
  ],
})

export default router
