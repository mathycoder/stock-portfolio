import React from 'react'
import './css/myStocks.css'
import { connect } from 'react-redux'

const MyStocks = ({ stocks }) => {
  const determineColor = ({ currentPrice, openingPrice }) => {
    if (currentPrice > openingPrice){
      return "green"
    } else if (currentPrice < openingPrice){
      return "red"
    } else {
      return "grey"
    }
  }

  return (
    <div className="mystocks-wrapper">
      {stocks.allIds.map(stockId => {
        const stock = stocks.byId[stockId]
        const color = determineColor(stock)
        return (
          <div className="stock-wrapper" key={stockId}>
            <div className="stock-line">
              <div className="shares">
                <span className={color}>{`${stock.symbol}`}</span>
                <span>{` - ${stock.shares} Shares`}</span>
              </div>
              <div className={`value ${color}`}>
                {`$${(stock.shares * stock.currentPrice).toFixed(2)}`}
              </div>
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
