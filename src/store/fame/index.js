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
      let imageRef
      console.log(famePayload.image.name)
      firestore.collection('fame').add({
        fameContent
      }).then((data) => {
        key = data.id
        return key
      }).then((key) => {
        const imageName = famePayload.image.name
        const ext = imageName.slice(imageName.lastIndexOf('.'))
        imageRef = key + ext
        return firebase.storage().ref('fame/' + key + ext).put(famePayload.image)
      }).then(fileData => {
        imageURL = fileData.metadata.downloadURLs[0]
        return fameRef.doc(key).update({
          imageURL: imageURL,
          imageRef: imageRef
        })
      }).catch((error) => {
        console.log(error)
      })
    },

    removeFame: ({commit}, dude) => {
      firebase.storage().ref('fame/' + dude.imageRef).delete().then(() => {
        fameRef.doc(dude.id).delete()
      }).catch((error) => {
        console.log(error)
      })
    }

  }
}
