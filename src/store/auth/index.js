import firebase from '@/firebase'
import { firebaseAction } from 'vuexfire'

const auth = firebase.auth()
const firestore = firebase.firestore()

const getUserReference = user => firestore.collection('users').doc(user.uid)

export default{
  namespaced: true,
  state: {
    // Add auth related state
    user: null,
    userData: null
  },

  getters: {
    // Add auth related getters
    authenticated: state => state.user != null
  },

  actions: {
    // Add auth related actions
    setUser ({ commit, dispatch }, user) {
      dispatch('fetchUserData', user)
      dispatch('updateUserInformation', user)
      commit('setUser', user)
    },

    async updateUserInformation (context, user) {
      const reference = getUserReference(user)
      const userData = await reference.get()
      if (!userData.exists) {
        // No user data is saved, meaning the user is logging in for the
        // first time, let's save its data to firestore
        const data = {
          id: user.uid,
          name: user.displayName,
          avatar: user.photoURL,
          email: user.email,
          emailVerified: user.emailVerified,
          phoneNumber: user.phoneNumber,
          isAnonymous: user.isAnonymous,
          roles: ['USER']
        }

        // Save the user data
        reference.set(data)
      }
    },

    clearUser ({ commit, dispatch }) {
      dispatch('unbindUserData')
      commit('clearUser')
    },

    fetchUserData: firebaseAction(({ bindFirebaseRef }, user) => {
      bindFirebaseRef('userData', getUserReference(user))
    }),

    unbindUserData: firebaseAction(({ commit, unbindFirebaseRef }) => {
      unbindFirebaseRef('userData')
      commit('clearUserData')
    }),

    logout: () => auth.signOut()
  },

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
