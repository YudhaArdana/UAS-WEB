import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import List from '../views/List.vue'
import Berhasil from '../views/Berhasil.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },

  {
    path: '/list',
    name: 'List',
    component: List
  },

  {
    path: '/detailproduk',
    name: 'DetailProduk',
    component: () => import(/* webpackChunkName: "about" */ '../views/DetailProduk.vue')
  },

  {
    path: '/berhasil',
    name: 'Berhasil',
    component: Berhasil
    // component: () => import(/* webpackChunkName: "about" */ '../views/Berhasil.vue')
  },

  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
