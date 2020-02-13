export function symbolLookup(query) {
  return (dispatch) => {
    dispatch({type: 'START_SYMBOL_LOOKUP', query})
    fetch(`/stocks/lookup/?q=${query}`, {
      method: "GET",
      credentials: "include",
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(resp => resp.json())
      .then(stock => {
        console.log(stock)
        //dispatch({ type: 'ADD_VIMEO_VIDEOS', videos })
      })
  }
}
