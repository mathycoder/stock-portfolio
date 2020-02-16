class Stock < ApplicationRecord
  belongs_to :user

  def self.lookup_price(query)
    resp = Faraday.get("https://cloud.iexapis.com/stable/stock/#{query}/quote") do |req|
      req.params['token'] = ENV['IEX_KEY']
    end
    if resp.body == "Unknown symbol"
      "Unknown symbol"
    else
      resp = JSON.parse(resp.body)["latestPrice"]
    end
  end

  #https://cloud.iexapis.com/v1

  def self.with_prices(stocks)
    stocks
    #stocks.each{|stock| stock.update(current_price: Stock.lookup_price(stock.symbol))}
  end

end
