class User < ApplicationRecord
  has_many :transactions
  has_many :stocks
  validates :name, presence: true, length: { maximum: 20, minimum: 4 }
  validates :email, presence: true, uniqueness: true
  #validates :password, presence: true
  has_secure_password

  def pay_for_transaction(transaction)
    self.update(cash: self.cash - transaction.at_price * transaction.shares)
  end
end
