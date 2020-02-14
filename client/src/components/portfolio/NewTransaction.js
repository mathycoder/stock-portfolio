import React, { useState } from 'react'
import { connect } from 'react-redux'
import { symbolLookup } from '../../actions/stockApiActions.js'
import './css/newTransaction.css'

const NewTransaction = ({ symbolLookup }) => {
  const [symbol, setSymbol] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    symbolLookup(symbol)
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
    symbolLookup: query => dispatch(symbolLookup(query))
  }
}

export default connect(null, mapDispatchToProps)(NewTransaction)
