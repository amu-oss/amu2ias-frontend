import firebase from '@/firebase'
import { firebaseAction } from 'vuexfire'

const firestore = firebase.firestore()
const fameRef = firestore.collection('fame')

export default{
  namespaced: true,
  state: {
    fameData: []
  },
  actions: {
    fetchData: firebaseAction(({ bindFirebaseRef }) => {
      bindFirebaseRef('fameData', fameRef)
    })
  }
}
