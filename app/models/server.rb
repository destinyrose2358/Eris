class Server < ApplicationRecord
  validates :title, presence: true

  has_many :channels,
  dependent: :destroy

  belongs_to :owner,
  foreign_key: :owner_id,
  class_name: :User

  has_many :accepted_memberships,
  -> {where accepted: :true},
  as: :memberable,
  class_name: :Membership,
  validate: false,
  dependent: :destroy

  has_many :pending_memberships,
  -> {where accepted: :false},
  as: :memberable,
  class_name: :Membership,
  dependent: :destroy
  
  has_many :members,
  through: :accepted_memberships,
  source: :user

  has_many :pending_members,
  through: :pending_memberships,
  source: :user

  has_many :roles,
  dependent: :destroy

end
