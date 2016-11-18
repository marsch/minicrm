import { createStore, compose, applyMiddleware } from 'redux'
import mainReducer from './reducer'
import PouchDB from 'pouchdb'
import { persistentStore , persistentReducer} from 'redux-pouchdb'

const db = new PouchDB('mini-crm')

const createStoreWithMiddleware = compose(
  persistentStore(db)
)(createStore)

const store = createStoreWithMiddleware(persistentReducer(mainReducer, 'mainReducer'), {});

window.store = store
export default store
