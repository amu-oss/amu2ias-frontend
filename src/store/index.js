import Vue from 'vue'
import Vuex from 'vuex'
import auth from './auth'
import blog from './blog'
import { firebaseMutations } from 'vuexfire'

Vue.use(Vuex)

export const store = new Vuex.Store({
  namespaced: true,
  modules: {
    auth,
    blog
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
    ...firebaseMutations
  }
})
