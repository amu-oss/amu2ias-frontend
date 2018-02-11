import firebase from 'firebase'
import { config } from './config'

require('firebase/firestore')

firebase.initializeApp(config.firebase)
export default firebase
