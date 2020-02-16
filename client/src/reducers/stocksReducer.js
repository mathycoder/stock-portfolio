import { combineReducers } from 'redux'

const stocksReducer = combineReducers({
  byId: stocksById,
  allIds: allStocks
})

export default stocksReducer

function stocksById(state = {}, action) {

  switch(action.type) {
    case 'FETCH_STOCKS':
      return {
        ...normalizedObj(action.stocks)
      }

    case 'ADD_TRANSACTION':
      return {
        ...state, ...normalizedObj([action.stock])
      }

    default:
      return state;
  }
}

function allStocks(state = [], action) {

  switch(action.type) {
    case 'FETCH_STOCKS':
      return [
        ...action.stocks.map(stock => `stock${stock.id}`)
      ]

    case 'ADD_TRANSACTION':
      const newState = state.includes(`stock${action.stock.id}`)
        ? [...state]
        : [...state, `stock${action.stock.id}`]
      return newState

    default:
      return state;
  }
}

function normalizedObj(stocks){
  const normObj = {}
  stocks.forEach(stock => {
    normObj[`stock${stock.id}`] = {
      symbol: stock.symbol,
      shares: stock.shares,
      id: stock.id,
      currentPrice: stock.current_price
    }
  })
  return normObj
}