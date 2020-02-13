import React from 'react'
import MyStocks from './MyStocks'
import NewTransaction from './NewTransaction'
import { connect } from 'react-redux'
import './css/portfolioContainer.css'

const PortfolioContainer = ({ currentUser }) => {
  return (
    <div className="portfolio-container-wrapper">
      <div className="portfolio-header">
        <h1>{`Portfolio ($____)`}</h1>
      </div>
      <div className="mystocks-wrapper">
        <MyStocks />
      </div>
      <div className="new-transaction-wrapper">
        <NewTransaction />
      </div>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    currentUser: state.currentUser
  }
}

export default connect(mapStateToProps, null)(PortfolioContainer)
