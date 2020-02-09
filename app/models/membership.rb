class Membership < ApplicationRecord
  validates :accepted, default: false

  belongs_to :user
  
  belongs_to :memberable,
  polymorphic: true
end
