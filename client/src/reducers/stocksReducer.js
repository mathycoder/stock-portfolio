import { combineReducers } from 'redux'

const stocksReducer = combineReducers({
  byId: stocksById,
  allIds: allStocks,
  loading: loadingStocks
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

    case 'CLEAR_CURRENT_USER':
      return {}

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

    case 'CLEAR_CURRENT_USER':
      return []

    default:
      return state;
  }
}

function loadingStocks(state = false, action){
  switch(action.type){
    case 'FETCH_STOCKS_REQUEST':
      return true;

    case 'FETCH_STOCKS':
      return false;

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
      currentPrice: stock.current_price,
      openingPrice: stock.opening_price
    }
  })
  return normObj
}
