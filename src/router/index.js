import { createRouter, createWebHistory } from 'vue-router'
import ForumView from '../views/ForumView.vue'
import SectionView from '../views/SectionView.vue'
import SubsectionView from '../views/SubsectionView.vue'
import LoginView from '../views/LoginView.vue'
import SignupView from '../views/SignupView.vue'

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
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
