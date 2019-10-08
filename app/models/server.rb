class Server < ApplicationRecord
  validates :title, :icon, uniqueness: true

  has_many :channels,
  dependent: :destroy

  belongs_to :owner,
  foreign_key: :owner_id,
  class_name: :User

end
