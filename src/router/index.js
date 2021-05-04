import Vue from 'vue'
import VueRouter from 'vue-router'
import home from '../views/home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: 'home',
  }
  ,
  {
    path: '/home',
    name: 'home',
    component: home,
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue')
  },
  {
    path: '/category',
    name: 'category',
    component: () => import('../views/category.vue')
  },
  {
    path: '/cart',
    name: 'cart',
    component: () => import('../views/cart.vue')
  },
  {
    path: '/profile',
    name: 'profile',
    component: () => import('../views/profile.vue')
  },
  {
    path: '/detail/:id',
    name: 'detail',
    component: () => import('../views/detail.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
