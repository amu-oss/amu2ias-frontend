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
    }),
    createFame: ({ commit }, famePayload) => {
      const fameContent = {
        name: famePayload.name,
        air: famePayload.air,
        stream: famePayload.stream,
        year: famePayload.year
      }
      let imageURL
      let key
      console.log(famePayload.image.name)
      firestore.collection('fame').add({
        fameContent
      }).then((data) => {
        key = data.id
        return key
      }).then((key) => {
        const imageName = famePayload.image.name
        const ext = imageName.slice(imageName.lastIndexOf('.'))
        return firebase.storage().ref('fame/' + key + '.' + ext).put(famePayload.image)
      }).then(fileData => {
        imageURL = fileData.metadata.downloadURLs[0]
        return fameRef.doc(key).update({imageURL: imageURL})
      }).catch((error) => {
        console.log(error)
      })
    }
  }
}
