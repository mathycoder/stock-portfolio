import React, { useEffect } from 'react'
import { Switch, Route } from "react-router-dom"
import Transactions from './Transactions'
import PortfolioContainer from './PortfolioContainer'
import { connect } from 'react-redux'
import { fetchTransactions } from '../../actions/transactionActions.js'
import { fetchStocks } from '../../actions/stockActions.js'

const PortfolioRouter = ({ fetchTransactions, fetchStocks }) => {
  useEffect(() => {
    fetchTransactions()
    fetchStocks()
  }, [])

  return (
    <Switch>
      <Route exact path="/portfolio/current" component={PortfolioContainer} />
      <Route exact path="/portfolio/transactions" component={Transactions} />
    </Switch>
  )
}

const mapDispatchToProps = dispatch => {
  return {
    fetchTransactions: () => dispatch(fetchTransactions()),
    fetchStocks: () => dispatch(fetchStocks())
  }
}

export default connect(null, mapDispatchToProps)(PortfolioRouter)
