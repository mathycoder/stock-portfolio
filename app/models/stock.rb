class Stock < ApplicationRecord
  belongs_to :user

  def self.lookup_price(query)
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
    resp = Faraday.get("https://cloud.iexapis.com/stable/stock/market/batch") do |req|
      req.params['symbols'] = stocks.map{|stock| stock.symbol}.join(",")
      req.params['types'] = 'quote'
      req.params['token'] = ENV['IEX_KEY']
    end
    resp = JSON.parse(resp.body)
    stocks.each{ |stock| stock.update(current_price: resp[stock.symbol]["quote"]["latestPrice"], opening_price: resp[stock.symbol]["quote"]["open"]) }
    stocks
  end
end
