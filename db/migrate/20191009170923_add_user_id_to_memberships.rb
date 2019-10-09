class AddUserIdToMemberships < ActiveRecord::Migration[5.2]
  def change
    add_column :memberships, :user_id, :integer
    add_index :memberships, :user_id
    remove_index :memberships, name: "index_memberships_on_memberable_type_and_memberable_id"
    add_index :memberships, [:memberable_type, :memberable_id, :user_id], unique: true, name: "unique_membership_index"
  end
end
