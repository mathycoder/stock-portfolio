import React from 'react'
import './css/transactions.css'

const Transactions = () => {
  return (
    <div className="transactions-page-wrapper">
      <div className="transactions-title">
        {`Transactions`}
      </div>
      <div className="transactions-wrapper">
        <div className="transaction-line">
          {`BUY (AAPL) - 6 Shares @ 300.00`}
        </div>
        <div className="stock-separator"></div>
        <div className="transaction-line">
          {`BUY (AAPL) - 6 Shares @ 300.00`}
        </div>
        <div className="stock-separator"></div>
        <div className="transaction-line">
          {`BUY (AAPL) - 6 Shares @ 300.00`}
        </div>
      </div>
    </div>
  )
}

export default Transactions
