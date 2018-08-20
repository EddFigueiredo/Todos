class CreateTodos < ActiveRecord::Migration[5.2]
  def change
    create_table :todos do |t|
      t.string :title
      t.boolean :checked, default: false
      t.string :created_by
      
      t.timestamps
    end
  end
end
