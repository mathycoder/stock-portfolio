class CreateStocks < ActiveRecord::Migration[5.2]
  def change
    create_table :stocks do |t|
      t.string :symbol
      t.integer :shares, default: 0
      t.integer :user_id
      t.float :current_price
      t.float :opening_price
    end
  end
end
