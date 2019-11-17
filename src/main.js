import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/store'
import vuetify from './plugins/vuetify';
import '@babel/polyfill'

Vue.config.productionTip = false;
router.beforeEach((to,from,next) =>{
  if(to.matched.some(record => record.meta.forGuest)){
    if(store.getters.isAuthToken) {
      next({ path: '/productos'})
    } else {
      next()
    }
  }else if(to.matched.some(record => record.meta.forAuth)) {
    if(!store.getters.isAuthToken) {
      next({ path: '/'})
    } else {
      next()
    }
  } else {
    next()
  }
})

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
