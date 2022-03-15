import { createRouter, createWebHistory } from 'vue-router'
import ForumView from '../views/ForumView.vue'
import SectionView from '../views/SectionView.vue'
import LoginView from '../views/LoginView.vue'
import SignupView from '../views/SignupView.vue'

const routes = [
  {
    path: '/',
    name: 'forum',
    component: ForumView,
    meta: {
      layout: 'ForumAppLayout'
    }
  },
  {
    path: '/:section',
    name: 'section',
    component: SectionView,
    meta: {
      layout: 'ForumAppLayout'
    }
  },
  {
    path: '/login',
    name: 'login',
    component: LoginView,
    meta: {
      layout: 'ForumAppLayout'
    }
  },
  {
    path: '/register',
    name: 'register',
    component: SignupView,
    meta: {
      layout: 'ForumAppLayout'
    }
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
