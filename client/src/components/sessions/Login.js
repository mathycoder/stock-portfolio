import React, { useState } from 'react'
import { connect } from 'react-redux'
import { login } from '../../actions/currentUserActions.js'

const Login = ({ login, history }) => {
  const [ email, setEmail ] = useState('')
  const [ password, setPassword ] = useState('')

  const submitHandler = (e) => {
    e.preventDefault()
    const data = {
      email: email,
      password: password
    }
    login(data, history)
  }

  return (
    <div className="signup-wrapper">
      <form className="signup-form" onSubmit={(e) => submitHandler(e)}>
        <div className="flexseats-title">
          <strong>Login</strong>
        </div>
        <input
          type="text"
          placeholder="Enter email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Enter password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <input
          type="submit"
          value="Log In"
          className="myButton"
        />
      </form>
    </div>
  )
}

function mapDispatchToProps(dispatch){
  return {
    login: (credentials, history) => dispatch(login(credentials, history))
  }
}

export default connect(null, mapDispatchToProps)(Login)
