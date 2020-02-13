import React from 'react'
import './css/newTransaction.css'

const NewTransaction = () => {
  return (
    <div className="new-transaction-wrapper">
      <form className="transaction-form signup-form">
        <div className="total-cash">
          {`Cash - $5000.00`}
        </div>
        <input
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

export default NewTransaction
