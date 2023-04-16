import { createRouter, createWebHistory } from 'vue-router'
import kyupidView from '../components/kyupidView.vue'
import usersView from '../components/usersView.vue'

const routes = [
    {
      path: '/',
      name: 'home',
      component: kyupidView
    },
    {
        path: '/usersView',
        name: 'users',
        component: usersView
    }
  ]
  
  const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
  })
  
  export default router
  