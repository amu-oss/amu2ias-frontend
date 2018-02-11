import getters from './getters'
import actions from './actions'

export default{
  namespaced: true,
  state: {
    // Add auth related state
    user: null,
    userData: null
  },

  getters,

  actions,

  mutations: {
    setUser (state, user) {
      state.user = user
    },
    clearUser (state) {
      state.user = null
    },
    clearUserData (state) {
      state.userData = null
    }
  }
}
