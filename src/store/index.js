import {createStore, applyMiddleware} from 'redux'
import reduxThunk from 'redux-thunk'
import reducers from '../reducers'
import logger from '../middleware/logger'

const middleware = applyMiddleware(reduxThunk, logger)
const store = createStore(reducers, {}, middleware)

window.store = store
export default store