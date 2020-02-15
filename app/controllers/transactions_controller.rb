class TransactionsController < ApplicationController
  def index
  end

  def create
    binding.pry
    @transaction = current_user.transactions.build(transaction_params)
    @transaction.at_price = Stock.lookup_price(@transaction.symbol)
    cash = current_user.balance
    cost = @transaction.at_price * @transaction.shares
    if cost <= cash
      @transaction.save
      current_user.update(balance: cash - cost)
      render json: {
        transaction: @transaction,
        currentUser: current_user
      }, status: 201
    end

  end

  private
    def transaction_params
      params.require(:transaction).permit(:shares, :symbol)
    end
end
