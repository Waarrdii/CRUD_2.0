// resources/js/router.js
import { createRouter, createWebHistory } from 'vue-router'
import Home from './Pages/Home.vue'
import Products from './Pages/Products.vue'
import Brands from './Pages/Brands.vue'

const routes = [
    
    { path: '/', component: Home },
    { path: '/home', component: Home },
    { path: '/products', component: Products },
    { path: '/brands', component: Brands },
  ];
  

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
