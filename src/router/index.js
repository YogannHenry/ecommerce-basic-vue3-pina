import { createRouter, createWebHistory } from 'vue-router'
import Home from '../components/Home.vue'
import Cart from '../components/Cart.vue'
import Favoris from '../components/favoris/Favoris.vue'
import productDetail from '../components/product/productDetail.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/cart',
      name: 'cart',
      component: Cart
    },
    {
      path: '/favoris',
      name: 'favoris',
      component: Favoris
    },

    {
      path: '/productDetail/:id',
      name: 'product',
      component: productDetail
    }
  ]
})

export default router
