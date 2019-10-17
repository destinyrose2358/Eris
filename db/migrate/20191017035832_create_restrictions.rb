class CreateRestrictions < ActiveRecord::Migration[5.2]
  def change
    create_table :restrictions do |t|
      t.integer :channel_id, null: false
      t.integer :role_id, null: false

      t.timestamps
    end
    add_index :restrictions, [:channel_id, :role_id], unique: true
    add_index :restrictions, :role_id
  end
end
