import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/Home.vue'),
    },
    {
      path: '/docs/:path',
      name: 'page',
      component: () => import('../views/Page.vue'),
    },
    {
      path: '/docs',
      name: 'index',
      component: () => import('../views/Index.vue'),
    },
  ],
})

export default router
