import React from 'react'
import MyStocks from './MyStocks'
import NewTransaction from './NewTransaction'
import { connect } from 'react-redux'
import './css/portfolioContainer.css'

const PortfolioContainer = ({ currentUser, stocks }) => {
  const totalValue = currentUser.cash + stocks.allIds.reduce((agg, stockId) => {
    const stock = stocks.byId[stockId]
    return agg + (stock.shares * stock.currentPrice)
  }, 0)

  return (
    <div className="portfolio-container-wrapper">
      <div className="portfolio-header">
        <div className="portfolio-title">
          {`Portfolio ($${totalValue.toFixed(2)})`}
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
    currentUser: state.currentUser,
    stocks: state.stocks
  }
}

export default connect(mapStateToProps, null)(PortfolioContainer)
