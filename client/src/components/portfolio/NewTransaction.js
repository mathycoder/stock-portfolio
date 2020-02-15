import React, { useState } from 'react'
import { connect } from 'react-redux'
import { addTransaction } from '../../actions/transactionActions.js'
import './css/newTransaction.css'

const NewTransaction = ({ addTransaction }) => {
  const [symbol, setSymbol] = useState('')
  const [shares, setShares] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    addTransaction(symbol, shares)
  }

  return (
    <div className="new-transaction-wrapper">
      <form
        className="transaction-form signup-form"
        onSubmit={(e) => handleSubmit(e)}
      >
        <div className="total-cash">
          {`Cash - $5000.00`}
        </div>
        <input
          value={symbol}
          onChange={e => setSymbol(e.target.value)}
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

const mapDispatchToProps = dispatch => {
  return {
    addTransaction: (symbol, shares) => dispatch(addTransaction(symbol, shares))
  }
}

export default connect(null, mapDispatchToProps)(NewTransaction)
