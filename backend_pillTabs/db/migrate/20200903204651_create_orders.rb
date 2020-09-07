class CreateOrders < ActiveRecord::Migration[6.0]
  def change
    create_table :orders do |t|
      t.string :order_type
      t.string :user_id
      t.string :drug_id
      t.integer :cost

      t.timestamps
    end
  end
end
