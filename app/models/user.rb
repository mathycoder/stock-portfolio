class User < ApplicationRecord
  has_many :transactions
  validates :name, presence: true, length: { maximum: 20, minimum: 4 }
  validates :email, presence: true, uniqueness: true
  validates :password, length: { maximum: 20, minimum: 4 }
  has_secure_password
end
