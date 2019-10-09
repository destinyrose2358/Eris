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

end
