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
      component: () => import('./views/auth/SignIn.vue')
    },
    {
      path: '/iniciar-sesion',
      name: 'Inicio de sesión',
      component: () => import('./views/auth/Login.vue')
    },
    {
      path: '/olvide-clave',
      name: 'Nueva Coontraseña',
      component: () => import('./views/auth/NewPass.vue')
    },
    {
      path: '/productos',
      name: 'Productos',
      component: () => import('./views/products/List.vue')
    },
    {
      path: '/producto/nuevo',
      name: 'Crear Porducto',
      component: () => import('./views/products/create.vue')
    },
    {
      path: '/producto/detalles',
      name: 'Detalles de producto',
      component: () => import('./views/products/Details.vue')
    },
    {
      path: '/proveedores',
      name: 'Proveedores',
      component: () => import('./views/supplier/list.vue')
    },
  ]
})
