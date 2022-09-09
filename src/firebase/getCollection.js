import { getFirestore} from './index'

export const getCollection = (collectionName) => {
  let data = []
  
    const db = getFirestore()
    const ItemCollection = db.collection('items')
    ItemCollection.get().then(
      (querySnapshot) => {
        data = querySnapshot.docs.map(doc => doc.data())
      }
    ).catch((error) => console.error(error))

    return data
}