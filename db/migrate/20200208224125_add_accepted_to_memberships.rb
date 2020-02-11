class AddAcceptedToMemberships < ActiveRecord::Migration[5.2]
  def change
    add_column :memberships, :accepted, :boolean, default: false
    add_index :memberships, :accepted
  end
  
end
