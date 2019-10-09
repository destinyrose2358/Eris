class Membership < ApplicationRecord
  belongs_to :user
  
  belongs_to :memberable,
  polymorphic: true
end
