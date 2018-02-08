import Vue from 'vue'
import Vuex from 'vuex'
import auth from './auth'

Vue.use(Vuex)

export const store = new Vuex.Store({
  namespaced: true,
  modules: {
    auth: auth
  },
  state: {
    // Add auth related state
  },

  getters: {
    // Add auth related getters
  },

  actions: {
    // Add auth related actions
  },

  mutations: {
    // Add auth related mutations
  }
})
