import React from 'react'
import './css/myStocks.css'

const MyStocks = () => {
  return (
    <div className="mystocks-wrapper">
      <div className="stock-line">
        <div className="shares">{`AAPL - 6 Shares`}</div>
        <div className="value">{`$2043.09`}</div>
      </div>

      <div className="stock-separator"></div>

      <div className="stock-line">
        <div className="shares">{`AAPL - 6 Shares`}</div>
        <div className="value">{`$2043.09`}</div>
      </div>

      <div className="stock-separator"></div>

      <div className="stock-line">
        <div className="shares">{`AAPL - 6 Shares`}</div>
        <div className="value">{`$2043.09`}</div>
      </div>
    </div>
  )
}

export default MyStocks
