class CreateUsers < ActiveRecord::Migration[6.0]
  def change
    create_table :users do |t|
      t.string :first_name
      t.string :last_name
      t.string :category_id
      t.string :username
      t.string :email
      t.string :password_digest
      t.integer :answer1, :default => 1
      t.integer :answer2, :default => 1
      t.integer :answer3, :default => 1
      t.integer :answer4, :default => 1
      t.integer :answer5, :default => 1
      t.integer :answer6, :default => 1
      t.integer :answer7, :default => 1
      t.integer :answer8, :default => 1


      

      t.timestamps
    end
  end
end
