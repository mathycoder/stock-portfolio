class StocksController < ApplicationController
  def index
    render json: Stock.with_prices(current_user.stocks), status: 201
  end
end
