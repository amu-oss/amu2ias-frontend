import firebase from '@/firebase'
import { firebaseAction } from 'vuexfire'

const firestore = firebase.firestore()
const blogRefer = () => firestore.collection('blogs')
export default{
  namespaced: true,
  state: {
    // blog related state
    blogs: [],
    blogsRef: null
  },

  getters: {
    // blog related getters
    blogs: state => state.blogs.slice().reverse()
  },

  actions: {
    // blog related actions
    fetchBlogs: ({ commit, dispatch }) => {
      commit('setBlogRef')
      dispatch('setBlogs', blogRefer())
    },
    setBlogs: firebaseAction(({ bindFirebaseRef }, blogsRef) => {
      bindFirebaseRef('blogs', blogsRef)
    })
  },

  mutations: {
    // blog related mutations
    setBlogRef: (state) => {
      state.blogsRef = firestore.collection('blogs')
    }
  }
}
