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

  const alphabetizedStocks = () => {
    return [...stocks.allIds].sort((stockIdA, stockIdB) => {
      const stockA = stocks.byId[stockIdA]
      const stockB = stocks.byId[stockIdB]
      if (stockA.symbol < stockB.symbol){
        return -1
      } else if (stockA.symbol > stockB.symbol){
        return 1
      } else {
        return 0
      }
    })
  }

  return (
    <div className="mystocks-wrapper">
      {alphabetizedStocks().map(stockId => {
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
