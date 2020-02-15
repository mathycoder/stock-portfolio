import React from 'react'
import './css/myStocks.css'
import { connect } from 'react-redux'

const MyStocks = ({ stocks }) => {
  return (
    <div className="mystocks-wrapper">
      {stocks.allIds.map(stockId => {
        const stock = stocks.byId[stockId]
        return (
          <div className="stock-wrapper" key={stockId}>
            <div className="stock-line">
              <div className="shares">{`${stock.symbol} - ${stock.shares} Shares`}</div>
              <div className="value">{`$2043.09`}</div>
            </div>
            <div className="stock-separator"></div>
          </div>
        )
      })}
    </div>
  )
}

const mapStateToProps = state => {
  return {
    stocks: state.stocks
  }
}

export default connect(mapStateToProps, null)(MyStocks)
