class Membership < ApplicationRecord
  validates :accepted, default: false
  validates :user_id, presence: :true
  validates :user_id, uniqueness: { scope: [ :memberable_type, :memberable_id] }

  belongs_to :user
  
  belongs_to :memberable,
  polymorphic: true
end
