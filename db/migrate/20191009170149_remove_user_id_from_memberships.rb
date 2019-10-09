class RemoveUserIdFromMemberships < ActiveRecord::Migration[5.2]
  def change
    remove_column :memberships, :user_id, :integer
  end
end
