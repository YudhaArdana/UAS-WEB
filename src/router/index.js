import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import List from '../views/List.vue'
import Berhasil from '../views/Berhasil.vue'
import Dashboard from '../views/admin/Dashboard.vue'
import Roles from '../views/admin/Roles.vue'

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
    path: '/login',
    name: 'Login',
    component: () => import(/* webpackChunkName: "about" */ '../views/Login.vue')
  },

  {
    path: '/signup',
    name: 'Signup',
    component: () => import(/* webpackChunkName: "about" */ '../views/Signup.vue')
  },

  {
    path: '/history',
    name: 'History',
    component: () => import(/* webpackChunkName: "about" */ '../views/History.vue')
  },

  {
    path: '/adddatamobil',
    name: 'AddDataMobil',
    component: () => import(/* webpackChunkName: "about" */ '../views/admin/AddDataMobil.vue')
  },

  {
    path: '/editdatamobil',
    name: 'EditDataMobil',
    component: () => import(/* webpackChunkName: "about" */ '../views/admin/EditDataMobil.vue')
  },

  {
    path: '/datamobil',
    name: 'Datamobil',
    component: () => import(/* webpackChunkName: "about" */ '../views/admin/Datamobil.vue')
  },

  {
    path: '/datapelanggan',
    name: 'DataPelanggan',
    component: () => import(/* webpackChunkName: "about" */ '../views/admin/DataPelanggan.vue')
  },

  {
    path: '/adddatapelanggan',
    name: 'AddDataPelanggan',
    component: () => import(/* webpackChunkName: "about" */ '../views/admin/AddDataPelanggan.vue')
  },

  {
    path: '/editdatapelanggan',
    name: 'EditDataPelanggan',
    component: () => import(/* webpackChunkName: "about" */ '../views/admin/EditDataPelanggan.vue')
  },

  {
    path: '/transaksi',
    name: 'Transaksi',
    component: () => import(/* webpackChunkName: "about" */ '../views/admin/Transaksi.vue')
  },

  {
    path: '/berhasil',
    name: 'Berhasil',
    component: Berhasil
    // component: () => import(/* webpackChunkName: "about" */ '../views/Berhasil.vue')
  },
  
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: Dashboard
    // component: () => import(/* webpackChunkName: "about" */ '../views/Berhasil.vue')
  },

  {
    path: '/roles',
    name: 'Roles',
    component: Roles
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
