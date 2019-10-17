class Server < ApplicationRecord
  validates :title, :icon, presence: true

  has_many :channels,
  dependent: :destroy

  belongs_to :owner,
  foreign_key: :owner_id,
  class_name: :User

  has_many :memberships,
  as: :memberable,
  dependent: :destroy

  has_many :members,
  through: :memberships,
  source: :user

  has_many :roles,
  dependent: :destroy

end
