class Channel < ApplicationRecord
  validates :title, uniqueness: { scope: :server_id }, if: :server_id?

  belongs_to :server,
  optional: true

  has_many :accepted_memberships,
  -> {where accepted: :true},
  as: :memberable,
  class_name: :Membership,
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

  has_many :restrictions,
  dependent: :destroy

  has_many :restriction_roles,
  through: :restrictions,
  source: :role

  has_many :restricted_members,
  through: :restriction_roles,
  source: :users

  has_many :messages
end
