import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Location from '../views/Location.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/location',
      name: 'Location',
      component: Location
    },

  ]
})

export default router