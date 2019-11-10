import Vue from 'vue'
import Vuex from 'vuex'
// import persistedState from 'vuex-persistedstate'

Vue.use(Vuex)

import UserModule from './modules/user';
import SupplierModule from './modules/supplier';
import ProductModule from './modules/product'



export default new Vuex.Store({
  state: {
    loaded: false,
  },
  mutations: {
    SET_LOADED(state, loaded) {
      state.loaded = loaded
  },
  },
  modules: { UserModule, SupplierModule, ProductModule},

})
