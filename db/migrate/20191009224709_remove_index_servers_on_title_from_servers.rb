class RemoveIndexServersOnTitleFromServers < ActiveRecord::Migration[5.2]
  def change
    remove_index :servers, :title
  end
end
