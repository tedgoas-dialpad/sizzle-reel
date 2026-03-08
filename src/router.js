import { createRouter, createWebHistory } from 'vue-router'
import HomePage from './pages/HomePage.vue'

const prototypes = [
  { name: 'analytics-gpt', label: 'AnalyticsGPT' },
  { name: 'launchpad', label: 'Launchpad' },
]

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomePage,
  },
  {
    path: '/prototypes/:name',
    name: 'prototype',
    component: () => {
      const name = window.location.pathname.split('/prototypes/')[1]
      return import(`./prototypes/${name}/index.vue`)
    },
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export { prototypes }
export default router
