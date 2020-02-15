class TransactionsController < ApplicationController
  def index
    render json: current_user.transactions, status: 201
  end

  def create
    @transaction = current_user.transactions.build(transaction_params)
    price = Stock.lookup_price(@transaction.symbol)
    if price == "invalid symbol"
      render json: {
        error: "Invalid ticker symbol"
      }, status: 422
    else
      @transaction.at_price = price
      cash = current_user.cash
      cost = @transaction.at_price * @transaction.shares
      @transaction.stock = Stock.find_or_create_by(symbol: @transaction.symbol)
      if cost <= cash
        if @transaction.save
          @transaction.stock.update(shares: @transaction.stock.shares + @transaction.shares)
          current_user.update(cash: cash - cost)
          render json: {
            transaction: @transaction,
            currentUser: current_user
          }, status: 201
        else
          render json: {
            error: @transaction.errors.full_messages[0]
            }, status: 422
        end
      else
        render json: {
          error: "You don't have enough cash for this purchase."
        }, status: 422
      end
    end
  end

  private
    def transaction_params
      params.require(:transaction).permit(:shares, :symbol)
    end
end
