class StocksController < ApplicationController
  def index
    render json: current_user.stocks, status: 201
  end
end
