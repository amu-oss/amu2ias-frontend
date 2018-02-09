import { auth } from 'firebase'
import { firebaseMutations } from 'vuexfire'

export default{
  namespaced: true,
  state: {
    // Add auth related state
    user: null
  },

  getters: {
    // Add auth related getters
  },

  actions: {
    // Add auth related actions
    logout: () => auth().signOut()
  },

  mutations: {
    // Add auth related mutations
    setUser (state, user) {
      state.user = user
    },
    clearUser (state) {
      state.user = null
    },
    setAdmin (state, admin) {
      state.isAdmin = admin
    },
    ...firebaseMutations
  }
}
