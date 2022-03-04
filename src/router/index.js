import { createRouter, createWebHistory } from 'vue-router'
import ForumView from '../views/ForumView.vue'

const routes = [
  {
    path: '/',
    name: 'forum',
    component: ForumView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
