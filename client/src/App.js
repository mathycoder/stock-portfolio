import React, { useEffect } from 'react';
import Login from './components/sessions/Login'
import Logout from './components/sessions/Logout'
import SignUp from './components/users/SignUp'
import NavBar from './components/navBar/NavBar'
import FlashMessage from './components/flash/FlashMessage'
import PortfolioRouter from './components/portfolio/PortfolioRouter'
import { getCurrentUser } from './actions/currentUserActions.js'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import PrivateRoute from './routes/PrivateRoute'
import { connect } from 'react-redux'

const App = ({ currentUser, getCurrentUser }) => {
  useEffect(() => {
    getCurrentUser()
  }, [])

  const renderRoutes = () => {
    return (
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/login" component={Login} />
        <PrivateRoute path="/logout" component={Logout} />
        <Route exact path="/signup" component={SignUp} />
        <PrivateRoute path="/portfolio" component={PortfolioRouter} />
      </Switch>
    )
  }

  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <NavBar />
        </header>
        <main>
          <FlashMessage />
          { currentUser ? renderRoutes() : null }
        </main>
      </div>
    </Router>
  );
}

function mapStateToProps(state){
  return {
    currentUser: state.currentUser
  }
}

function mapDispatchToProps(dispatch){
  return {
    getCurrentUser: () => dispatch(getCurrentUser())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
