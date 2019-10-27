import Vue from 'vue'
import Vuex from 'vuex'
// import persistedState from 'vuex-persistedstate'

Vue.use(Vuex)

import UserModule from './modules/user'



export default new Vuex.Store({
  state: {
    loaded: false,
  },
  mutations: {
    SET_LOADED(state, loaded) {
      state.loaded = loaded
  },
  },
  modules: { UserModule},

})
