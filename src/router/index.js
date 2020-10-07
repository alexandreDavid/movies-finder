import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/result',
    name: 'Result',
    beforeEnter: (to, from, next) => {
      if (!to.query || !to.query.search) {
        next({ name: 'Home' })
      }
      // if the search is empty we go back to the search page
      next()
    },
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('@/views/Result.vue')
  },
  { path: '/:pathMatch(.*)', redirect: { name: 'Home' } }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
