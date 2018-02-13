import firebase from '@/firebase'
import { firebaseAction } from 'vuexfire'

const firestore = firebase.firestore()
const blogsRef = firestore.collection('blogs').orderBy('created', 'desc')

const getLast = array => array[array.length - 1]

export default{
  namespaced: true,
  state: {
    blogs: [],
    pageStack: [],
    lastRef: null,
    timeout: false
  },

  getters: {
    empty: state => state.blogs.length <= 0,
    prev: state => state.pageStack.length > 0, // Tells if you can go back
    next: (state, getters) => !getters.empty, // Tells if you can go forward
    prevPage: (state, getters) => getters.prev ? getLast(state.pageStack) : null,
    nextPage: (state, getters) => getters.next ? getLast(state.blogs) : null,
    // If timeout occurs and still no blogs are present, it is loading failure
    loadingFailure: (state, getters) => getters.empty && state.timeout
  },

  actions: {
    bindBlogs: firebaseAction(({ state, commit, bindFirebaseRef }, blogsRef) => {
      // Do not refetch same data again and again
      if (blogsRef === state.lastRef) {
        return
      }

      // Update the last reference to current one
      commit('setLastRef', blogsRef)
      // Reset timeout
      commit('setTimeout', false)
      bindFirebaseRef('blogs', blogsRef)
      setTimeout(() => {
        commit('setTimeout', true)
      }, 3000)
    }),

    fetchBlogs: ({ dispatch }, ref) => {
      dispatch('bindBlogs', (ref || blogsRef).limit(5))
    },

    fetchNext: ({ commit, getters, dispatch }) => {
      commit('pushPage')
      dispatch('fetchBlogs', blogsRef.startAfter(getters.nextPage.created))
    },

    fetchPrevious: ({ commit, getters, dispatch }) => {
      dispatch('fetchBlogs', getters.prevPage)
      commit('popPage')
    }
  },

  mutations: {
    setLastRef: (state, lastRef) => (state.lastRef = lastRef),

    setTimeout: (state, timeout) => (state.timeout = timeout),

    pushPage: (state) => state.pageStack.push(state.lastRef),

    popPage: (state) => state.pageStack.pop()
  }
}
