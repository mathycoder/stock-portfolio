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
          dispatch({ type: 'ADD_FLASH_MESSAGE', message: 'Error loading stocks portfolio' })
        } else {
          dispatch({ type: 'FETCH_STOCKS', stocks })
        }
      })
      .catch(console.log)
  }
}
