import React, { useState } from 'react'
import './signup.css'
import { connect } from 'react-redux'
// import { signupUser } from '../../actions/userActions.js'

const SignUp = ({ signupTeacher }) => {
  const [ name, setName ] = useState('')
  const [ email, setEmail ] = useState('')
  const [ password, setPassword ] = useState('')

  const submitHandler = () => {
    const data = {
      name: name,
      email: email,
      password: password
    }
    //signupUser(data)
  }

  return (
    <div className="signup-wrapper">
      <div className="signup-form">
        <div className="flexseats-title">
          <strong>Register</strong>
        </div>

        <input
          type="text"
          placeholder="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          onClick={() => submitHandler()}
          className="myButton">Create Account
        </button>
      </div>
    </div>
  )
}

// function mapStateToProps(state){
//   return {}
// }
//
// function mapDispatchToProps(dispatch){
//   return {
//     signupTeacher: (data) => dispatch(signupTeacher(data))
//   }
// }

export default connect(null, null)(SignUp)
