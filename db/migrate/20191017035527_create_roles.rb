class CreateRoles < ActiveRecord::Migration[5.2]
  def change
    create_table :roles do |t|
      t.string :name, null: false
      t.integer :server_id, null: false

      t.timestamps
    end
    add_index :roles, [:server_id, :name], unique:true
  end
end
