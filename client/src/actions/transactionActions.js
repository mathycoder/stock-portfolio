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
      .then(transaction => {
        if (transaction.error){
          dispatch({ type: 'ADD_FLASH_MESSAGE', message: transaction.full_messages[0] })
        } else {
          dispatch({ type: 'ADD_TRANSACTION', transaction })
        }
      })
      .catch(console.log)
  }
}
