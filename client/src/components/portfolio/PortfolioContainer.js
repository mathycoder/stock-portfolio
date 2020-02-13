import React from 'react'
import { connect } from 'react-redux'

const PortfolioContainer = ({ currentUser }) => {
  return (
    <div>
      <h1>{`Portfolio ($____)`}</h1>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    currentUser: state.currentUser
  }
}

export default connect(mapStateToProps, null)(PortfolioContainer)
