class TransactionsController < ApplicationController
  def index
    render json: current_user.transactions, status: 201
  end

  def create
    @transaction = current_user.transactions.build(transaction_params)
    prices = Stock.lookup_price(@transaction.symbol)
    if prices == "Unknown symbol"
      render json: {
        error: "Invalid ticker symbol"
      }, status: 422
    else
      @transaction.at_price = prices["latestPrice"]
      if @transaction.at_price * @transaction.shares > current_user.cash
        render json: {
          error: "You don't have enough cash for this purchase."
        }, status: 422
      else
        if @transaction.save
          stock = Stock.log_transaction(@transaction, prices)
          current_user.pay_for_transaction(@transaction)
          render json: {
            transaction: @transaction,
            currentUser: {
              cash: current_user.cash
            },
            stock: stock
          }, status: 201
        else
          render json: {
            error: @transaction.errors.full_messages[0]
            }, status: 422
        end
      end
    end
  end

  private
    def transaction_params
      params.require(:transaction).permit(:shares, :symbol, :current_price, :opening_price)
    end
end
