export function fetchStocks(){
  return (dispatch) => {
    dispatch({type: 'FETCH_STOCKS_REQUEST'})
    fetch(`/stocks`, {
      credentials: "include",
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(resp => resp.json())
      .then(stocks => {
        if (stocks.error){
          dispatch({ type: 'ADD_FLASH_MESSAGE', message: stocks.full_messages[0] })
        } else {
          dispatch({ type: 'FETCH_STOCKS', stocks })
        }
      })
      .catch(console.log)
  }
}
