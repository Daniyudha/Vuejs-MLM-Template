import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/tentangkami',
    name: 'TentangKami',
    component: () => import('../views/TentangKami.vue')
  },
  {
    path: '/bisnisstrategi',
    name: 'BisnisStrategi',
    component: () => import('../views/BisnisStrategi.vue')
  },
  {
    path: '/product',
    name: 'Product',
    component: () => import('../views/Product.vue')
  },
  {
    path: '/kontak',
    name: 'Kontak',
    component: () => import('../views/Kontak.vue')
  },
  {
    path: '/berita',
    name: 'Berita',
    component: () => import('../views/Berita.vue')
  },
  {
    path: '/viewberita',
    name: 'ViewBerita',
    component: () => import('../views/ViewBerita.vue')
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/Login.vue')
  },
  {
    path: '/signup',
    name: 'Signup',
    component: () => import('../views/Signup.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
