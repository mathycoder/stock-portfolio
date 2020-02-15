import React from 'react'
import { Switch, Route } from "react-router-dom"
import Transactions from './Transactions'
import PortfolioContainer from './PortfolioContainer'

const PortfolioRouter = () => {
  return (
    <Switch>
      <Route exact path="/portfolio/current" component={PortfolioContainer} />
      <Route exact path="/portfolio/transactions" component={Transactions} />
    </Switch>
  )
}

export default PortfolioRouter
