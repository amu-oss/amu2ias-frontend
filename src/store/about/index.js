import firebase from '@/firebase'
import { firebaseAction } from 'vuexfire'

const firestore = firebase.firestore()
const aboutRef = firestore.collection('global').doc('about')

export default{
  namespaced: true,
  state: {
    aboutData: []
  },
  getters: {
    // about related getters
  },
  actions: {
    fetchData: ({dispatch}) => {
      dispatch('bindData')
    },
    bindData: firebaseAction(({bindFirebaseRef}) => {
      bindFirebaseRef('aboutData', aboutRef)
    })
  }
}
