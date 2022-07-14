import { createRouter, createWebHistory } from 'vue-router'
import store from '@/store'
import ForumView from '../views/ForumView.vue'
import SectionView from '../views/SectionView.vue'
import SubsectionView from '../views/SubsectionView.vue'
import LoginView from '../views/LoginView.vue'
import SignupView from '../views/SignupView.vue'
import VerifyEmailView from '../views/VerifyEmailView.vue'

const routes = [
  {
    path: '/',
    name: 'forum',
    component: ForumView
  },
  {
    path: '/:section',
    name: 'section',
    component: SectionView
  },
  {
    path: '/:section/:subsection',
    name: 'subsection',
    component: SubsectionView
  },
  {
    path: '/login',
    name: 'login',
    component: LoginView
  },
  {
    path: '/register',
    name: 'register',
    component: SignupView
  },
  {
    path: '/email/:token',
    name: 'verify',
    component: VerifyEmailView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
