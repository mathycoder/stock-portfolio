export function signupUser(userData, history){
  return (dispatch) => {
     fetch(`/users`, {
       method: 'POST',
       body: JSON.stringify(userData),
       headers: {
         'Content-Type': 'application/json'
       },
       credentials: "include"
    })
      .then(resp => resp.json())
      .then(user => {
        if (user.error){
          //dispatch({ type: 'ADD_FLASH_MESSAGE', message: user.error })
        } else {
          dispatch({ type: 'SET_CURRENT_USER', user })
          //dispatch({ type: 'ADD_FLASH_MESSAGE', message: "Created New Account" })
          history.push('/portfolio')
        }
      })
      .catch(console.log)
  }
}
