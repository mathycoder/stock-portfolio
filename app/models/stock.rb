class Stock
  def self.lookup_price(query)
    resp = Faraday.get("https://www.alphavantage.co/query") do |req|
      req.params['function'] = 'TIME_SERIES_INTRADAY'
      req.params['interval'] = '1min'
      req.params['symbol'] = query
      req.params['apikey'] = ENV['ALPHA_VANTAGE_KEY']
    end
    resp = JSON.parse(resp.body)
    current_price = resp["Time Series (1min)"].first[1]["4. close"].to_f
  end
end
