class CreateStocks < ActiveRecord::Migration[5.2]
  def change
    create_table :stocks do |t|
      t.string :symbol
      t.integer :shares
      t.float :at_price
      t.integer :user_id
    end
  end
end
