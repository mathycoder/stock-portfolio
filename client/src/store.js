import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import currentUserReducer from './reducers/currentUserReducer.js'
import flashReducer from './reducers/flashReducer.js'
import transactionsReducer from './reducers/transactionsReducer.js'

import { combineReducers } from 'redux'


const rootReducer = combineReducers({
  currentUser: currentUserReducer,
  flashMessage: flashReducer,
  transactions: transactionsReducer
})

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(rootReducer, composeEnhancer(applyMiddleware(thunk)))

export default store
