import Realm from 'realm'

const itemsSchema = {
  name: 'Item',
  primaryKey: 'id',
  properties: {
    id: 'int',
    name: {
      type: 'string',
      default: 'Item'
    },
    color: 'string?'
  }
}

const realm = new Realm({ schema: [itemsSchema] })

export const createAnItem = (id, color) => {
  realm.write(() => {
    realm.create('Item', { id, name: 'item' + id, color })
  })
}
export const getItems = () => {
  return realm.objects('Item')
}
export const removeItem = id => {
  realm.write(() => {
    const item = realm.objects('Item').filtered(`id == ${id}`)
    realm.delete(item)
  })
}

export default realm
