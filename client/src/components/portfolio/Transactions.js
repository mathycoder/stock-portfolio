import React from 'react'
import './css/transactions.css'
import { connect } from 'react-redux'

const Transactions = ({ transactions }) => {
  return (
    <div className="transactions-page-wrapper">
      <div className="transactions-title">
        {`Transactions`}
      </div>
      <div className="transactions-wrapper">
        { transactions.allIds.map(transactionId => {
          const transaction = transactions.byId[transactionId]
          return (
            <div className="transaction-block" key={transactionId}>
              <div className="transaction-line">
                {`BUY (${transaction.symbol}) - ${transaction.shares} Shares @ ${transaction.atPrice}`}
              </div>
              <div className="stock-separator"></div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    transactions: state.transactions
  }
}

export default connect(mapStateToProps, null)(Transactions)
