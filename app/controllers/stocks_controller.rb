class StocksController < ApplicationController
  def lookup
    @stock = Stock.lookup(params[:q])
    render json: @stock
  end
end
