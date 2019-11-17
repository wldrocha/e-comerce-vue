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
      component: () => import('./views/products/List.vue')
    },
    {
      path: '/registro',
      name: 'Registro',
      component: () => import('./views/auth/SignIn.vue'),
      meta: { forGuest: true }
    },
    {
      path: '/iniciar-sesion',
      name: 'Inicio de sesión',
      component: () => import('./views/auth/Login.vue'),
      meta: { forGuest: true }
    },
    {
      path: '/olvide-clave',
      name: 'Nueva Coontraseña',
      component: () => import('./views/auth/NewPass.vue'),
      meta: { forGuest: true }
    },
    {
      path: '/productos',
      name: 'Productos',
      component: () => import('./views/products/List.vue')
    },
    {
      path: '/producto/:id',
      name: 'Detalles de producto',
      component: () => import('./views/products/Details.vue'),

    },
    {
      path: '/proveedores',
      name: 'Proveedores',
      component: () => import('./views/supplier/list.vue'),
      // meta: { forAuth: true }
    },
    {
      path: '/pago',
      name: 'Pago',
      component: () => import('./views/ShoppingCar/Payment')
    },
    {
      path: '/carrito',
      name: 'Carrito de comprass',
      component: () => import('./views/ShoppingCar/List')
    },
  ]
})
