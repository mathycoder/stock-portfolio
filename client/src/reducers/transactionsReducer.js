import { combineReducers } from 'redux'

const transactionsReducer = combineReducers({
  byId: transactionsById,
  allIds: allTransactions
})

export default transactionsReducer

function transactionsById(state = {}, action) {

  switch(action.type) {
    case 'FETCH_TRANSACTIONS':
      return {
        ...normalizedObj(action.transactions)
      }

    default:
      return state;
  }
}

function allTransactions(state = [], action) {

  switch(action.type) {
    case 'FETCH_TRANSACTIONS':
      return {
        ...action.transactions.map(transaction => `transaction${transaction.id}`)
      }

    default:
      return state;
  }
}

function normalizedObj(transactions){
  const normObj = {}
  transactions.forEach(transaction => {
    normObj[`transaction${transaction.id}`] = {
      symbol: transaction.symbol,
      shares: transaction.shares,
      atPrice: transaction.at_price,
      id: transaction.id
    }
  })
  return normObj
}
