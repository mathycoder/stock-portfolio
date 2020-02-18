class Stock < ApplicationRecord
  belongs_to :user

  def self.log_transaction(transaction, current_user, prices)
    # will either add to an existing stock's shares or create a new record
    # updates the cash in the current_user's wallet
    stock = self.find_by(symbol: transaction.symbol, user_id: current_user.id)
    if stock
      stock.update(shares: stock.shares + transaction.shares,
                   current_price: prices["latestPrice"],
                   opening_price: prices["open"] || prices["previousClose"])
    else
      stock = Stock.create(symbol: transaction.symbol,
                           shares: transaction.shares,
                           current_price: prices["latestPrice"],
                           opening_price: prices["open"] || prices["previousClose"])
    end
    cost = transaction.at_price * transaction.shares
    current_user.update(cash: current_user.cash - cost)
    current_user.stocks << stock if !stock.user_id
    current_user.save
    stock
  end

  def self.lookup_price(query)
    # Returns current code data for a given stock symbol
    resp = Faraday.get("https://cloud.iexapis.com/stable/stock/#{query}/quote") do |req|
      req.params['token'] = ENV['IEX_KEY']
    end
    if resp.body == "Unknown symbol"
      "Unknown symbol"
    else
      resp = JSON.parse(resp.body)
    end
  end

  def self.with_prices(stocks)
    # Returns an array of stocks with the current price and opening price of each stock
    resp = Faraday.get("https://cloud.iexapis.com/stable/stock/market/batch") do |req|
      req.params['symbols'] = stocks.map{|stock| stock.symbol}.join(",")
      req.params['types'] = 'quote'
      req.params['token'] = ENV['IEX_KEY']
    end
    resp = JSON.parse(resp.body)
    stocks.each do |stock|
      open = resp[stock.symbol]["quote"]["open"] || resp[stock.symbol]["quote"]["previousClose"]
      stock.update(current_price: resp[stock.symbol]["quote"]["latestPrice"],
                   opening_price: open)
    end
    stocks
  end
end
