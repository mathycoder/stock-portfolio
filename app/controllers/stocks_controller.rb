class StocksController < ApplicationController
  def index
    @stocks = current_user.stocks.length > 0 ? Stock.with_prices(current_user.stocks) : []
    render json: @stocks, status: 201
  end
end
