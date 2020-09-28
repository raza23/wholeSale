class CreateCategories < ActiveRecord::Migration[6.0]
  def change
    create_table :categories do |t|
      t.string :category_type,:default => "Patient"

      t.timestamps
    end
  end
end
