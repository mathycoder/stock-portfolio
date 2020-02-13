import React from 'react'
import MyStocks from './MyStocks'
import NewTransaction from './NewTransaction'
import { connect } from 'react-redux'
import './css/portfolioContainer.css'

const PortfolioContainer = ({ currentUser }) => {
  return (
    <div className="portfolio-container-wrapper">
      <div className="portfolio-header">
        <div className="portfolio-title">
          {`Portfolio ($5234.32)`}
        </div>
      </div>
      <div className="stocks-and-transactions-container">
        <MyStocks />
        <div className="divider"></div>
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
