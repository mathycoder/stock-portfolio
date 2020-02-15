class Stock < ApplicationRecord
  has_many :transactions
  belongs_to :user

  def self.lookup_price(query)
    resp = Faraday.get("https://www.alphavantage.co/query") do |req|
      req.params['function'] = 'TIME_SERIES_INTRADAY'
      req.params['interval'] = '1min'
      req.params['symbol'] = query
      req.params['apikey'] = ENV['ALPHA_VANTAGE_KEY']
    end
    resp = JSON.parse(resp.body)
    if resp["Error Message"]
      "invalid symbol"
    else
      resp["Time Series (1min)"].first[1]["4. close"].to_f
    end
  end
end
