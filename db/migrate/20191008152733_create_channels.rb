class CreateChannels < ActiveRecord::Migration[5.2]
  def change
    create_table :channels do |t|
      t.string :title, null: false, default: ""
      t.integer :server_id

      t.timestamps
    end
    add_index :channels, :server_id
    add_index :channels, [:title, :server_id], unique: true, where: "server_id IS NOT NULL"
  end
end
