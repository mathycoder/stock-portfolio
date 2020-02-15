class Stock
  def self.lookup(query)
    resp = Faraday.get("https://www.alphavantage.co/query") do |req|
      req.params['function'] = 'TIME_SERIES_INTRADAY'
      req.params['interval'] = '1min'
      req.params['symbol'] = query
      req.params['apikey'] = ENV['ALPHA_VANTAGE_KEY']
    end
    resp.body
  end
end
