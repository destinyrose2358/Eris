class Channel < ApplicationRecord
  validates :title, uniqueness: { scope: :server_id }, if: :server_id?

  belongs_to :server,
  optional: true

  has_many :memberships,
  as: :memberable,
  dependent: :destroy

  has_many :members,
  through: :memberships,
  source: :user

  has_many :restrictions,
  dependent: :destroy

  has_many :restriction_roles,
  through: :restrictions,
  source: :role

  has_many :restricted_members,
  through: :restriction_roles,
  source: :users
end
