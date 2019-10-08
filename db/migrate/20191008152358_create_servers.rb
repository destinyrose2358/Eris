class CreateServers < ActiveRecord::Migration[5.2]
  def change
    create_table :servers do |t|
      t.string :title, null: false
      t.text :icon, null: false
      t.integer :owner_id, null: false

      t.timestamps
    end
    add_index :servers, :owner_id
    add_index :servers, :title
  end
end
