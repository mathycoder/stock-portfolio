class CreateTransactions < ActiveRecord::Migration[5.2]
  def change
    create_table :transactions do |t|
      t.string :type
      t.string :symbol
      t.integer :shares
      t.float :at_price
      t.integer :user_id
    end
  end
end
