import Vue from 'vue'
import Vuex from 'vuex'

import auth from './auth'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: { // Add new store modules here
    auth
  },

  state: {
    // Add global properties
  },

  getters: {
    // Add global getters
  },

  actions: {
    // Add global actions
  },

  mutations: {
    // Add global mutations
  }
})
