import firebase from 'firebase'
import { config } from './config'

require('firebase/firestore')

export default firebase.initializeApp(config.firebase)
