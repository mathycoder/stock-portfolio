import React, { useEffect } from 'react'
import { Switch, Route } from "react-router-dom"
import Transactions from './Transactions'
import PortfolioContainer from './PortfolioContainer'
import { connect } from 'react-redux'
import { fetchTransactions } from '../../actions/transactionActions.js'

const PortfolioRouter = ({ fetchTransactions }) => {
  useEffect(() => {
    fetchTransactions()
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
    fetchTransactions: () => dispatch(fetchTransactions())
  }
}

export default connect(null, mapDispatchToProps)(PortfolioRouter)
