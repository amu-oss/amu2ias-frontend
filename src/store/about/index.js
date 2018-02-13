import firebase from '@/firebase'
import { firebaseAction } from 'vuexfire'
import moment from 'moment'

const firestore = firebase.firestore()
const aboutRef = firestore.collection('global').doc('about')

export default{
  namespaced: true,
  state: {
    aboutData: {
      title: 'About',
      caption: '',
      content: '',
      contact: {
        title: 'Contact Us',
        address: '',
        description: '',
        email: ''
      },
      feedback: {
        title: 'Feedback',
        description: ''
      },
      developers: []
    }
  },
  actions: {
    fetchData: firebaseAction(({ bindFirebaseRef }) => {
      bindFirebaseRef('aboutData', aboutRef)
    }),

    sendFeedback: ({ commit }, feedback) => {
      return firestore.collection('feedbacks').doc().set({
        feedback,
        timestamp: moment().format()
      })
    }
  }
}
