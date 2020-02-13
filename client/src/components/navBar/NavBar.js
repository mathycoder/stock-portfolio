import React from 'react'
import './navbar.css'
import { NavLink } from "react-router-dom"
import { connect } from 'react-redux'

const NavBar = ({ currentUser }) => {

  const title = () => <><strong>Stock</strong>Portfolio</>

  const loggedInNavBar = () => {
    return (
      <>
        <div className="title">{title()}</div>
        <div><NavLink to="/portfolio">Portfolio</NavLink></div>
        <div><NavLink to="/transactions">Transactions</NavLink></div>
        <div className="logout"><NavLink to="/logout">Logout</NavLink></div>
      </>
    )
  }

  const loggedOutNavBar = () => {
    return (
      <>
        <div className="title">{title()}</div>
        <div><NavLink to="/login">Login</NavLink></div>
        <div><NavLink to="/signup">Sign Up</NavLink></div>
      </>
    )
  }

  if (currentUser){
    return (
      <div className="navbar-wrapper">
        {currentUser !== 'none' ? loggedInNavBar() : loggedOutNavBar()}
      </div>
    )
  } else {
    return null
  }

}

function mapStateToProps(state){
  return {
    currentUser: state.currentUser
  }
}

export default connect(mapStateToProps, null)(NavBar)
