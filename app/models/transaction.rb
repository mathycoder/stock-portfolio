class Transaction < ApplicationRecord
  belongs_to :user
  validates :shares, numericality: { only_integer: true, greater_than: 0 }
end
