import { combineReducers } from 'redux'

const transactionsReducer = combineReducers({
  byId: transactionsById,
  allIds: allTransactions
})

export default transactionsReducer

function transactionsById(state = {}, action) {

  switch(action.type) {
    case 'FETCH_TRANSACTIONS':
      debugger
      return {
        ...state
      }

    default:
      return state;
  }
}

function allTransactions(state = [], action) {

  switch(action.type) {


    default:
      return state;
  }
}
