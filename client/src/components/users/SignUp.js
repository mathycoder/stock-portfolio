import React, { useState } from 'react'
import './signup.css'
import { connect } from 'react-redux'
import { signupUser } from '../../actions/userActions.js'

const SignUp = ({ signupUser, history }) => {
  const [ name, setName ] = useState('')
  const [ email, setEmail ] = useState('')
  const [ password, setPassword ] = useState('')

  const submitHandler = (e) => {
    e.preventDefault()
    const data = {
      name: name,
      email: email,
      password: password
    }
    signupUser(data, history)
  }

  return (
    <div className="signup-wrapper">
      <form
        className="signup-form"
        onSubmit={(e) => submitHandler(e)}
      >
        <div className="flexseats-title">
          <strong>Register</strong>
        </div>

        <input
          required
          type="text"
          placeholder="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          required
          type="text"
          placeholder="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          required
          type="password"
          placeholder="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <input
          type="submit"
          value="Create Account"
          className="myButton"
        />
      </form>
    </div>
  )
}

function mapDispatchToProps(dispatch){
  return {
    signupUser: (data, history) => dispatch(signupUser(data, history))
  }
}

export default connect(null, mapDispatchToProps)(SignUp)
