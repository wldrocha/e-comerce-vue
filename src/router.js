import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import(/* webpackChunkName: "about" */ './views/auth/Login.vue')
    },
    {
      path: '/register',
      name: 'Register',
      component: () => import(/* webpackChunkName: "about" */ './views/auth/SignIn.vue')
    },
    {
      path: '/login',
      name: 'Login',
      component: () => import(/* webpackChunkName: "about" */ './views/auth/Login.vue')
    },
    {
      path: '/forgot-password',
      name: 'NewPass',
      component: () => import(/* webpackChunkName: "about" */ './views/auth/NewPass.vue')
    },
    {
      path: '/products',
      name: 'Products',
      component: () => import(/* webpackChunkName: "about" */ './views/products/List.vue')
    },
    {
      path: '/products/details',
      name: 'Products Details',
      component: () => import(/* webpackChunkName: "about" */ './views/products/Details.vue')
    },
  ]
})
