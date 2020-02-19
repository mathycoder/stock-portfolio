import React, { useState } from 'react'
import { connect } from 'react-redux'
import { addTransaction } from '../../actions/transactionActions.js'
import './css/newTransaction.css'

const NewTransaction = ({ addTransaction, currentUser }) => {
  const [symbol, setSymbol] = useState('')
  const [shares, setShares] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    const check = window.confirm(`Are you sure you want to buy ${shares} ${shares === '1' ? 'share' : 'shares'} of ${symbol}?`)
    if (check) { addTransaction(symbol, shares) }
  }

  return (
    <div className="new-transaction-wrapper">
      <form
        className="transaction-form signup-form"
        onSubmit={(e) => handleSubmit(e)}
      >
        <div className="total-cash">
          {`Cash - $${currentUser.cash.toFixed(2)}`}
        </div>
        <input
          value={symbol}
          onChange={e => setSymbol(e.target.value.toUpperCase())}
          type="text"
          placeholder="Ticker"
        />
        <input
          value={shares}
          onChange={e => setShares(e.target.value)}
          type="text"
          placeholder="Qty"
        />
        <input
          className="myButton"
          type="submit"
          value="Buy"
        />
      </form>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    currentUser: state.currentUser
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addTransaction: (symbol, shares) => dispatch(addTransaction(symbol, shares))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NewTransaction)
