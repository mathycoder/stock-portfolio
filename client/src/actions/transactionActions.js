export function fetchTransactions(){
  return (dispatch) => {
    dispatch({type: 'FETCH_TRANSACTIONS_REQUEST'})
    fetch(`/transactions`, {
      credentials: "include",
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(resp => resp.json())
      .then(transactions => {
        if (transactions.error){
          dispatch({ type: 'ADD_FLASH_MESSAGE', message: transactions.full_messages[0] })
        } else {
          dispatch({ type: 'FETCH_TRANSACTIONS', transactions })
        }
      })
      .catch(console.log)
  }
}

export function addTransaction(symbol, shares){
  return (dispatch) => {
    dispatch({type: 'ADD_TRANSACTION_REQUEST'})
    const params = {
      transaction: {
        symbol,
        shares
      }
    }
    fetch(`/transactions`, {
      credentials: "include",
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(params)
    })
      .then(resp => resp.json())
      .then(json => {
        if (json.error){
          dispatch({ type: 'ADD_FLASH_MESSAGE', message: json.error })
        } else {
          const { symbol, shares, at_price } = json.transaction
          dispatch({ type: 'ADD_TRANSACTION', transaction: json.transaction, currentUser: json.currentUser })
          dispatch({ type: 'ADD_FLASH_MESSAGE', message: `Purchased ${shares} share(s) of ${symbol} @ $${at_price}` })
        }
      })
      .catch(console.log)
  }
}
