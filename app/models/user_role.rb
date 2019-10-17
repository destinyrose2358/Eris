class UserRole < ApplicationRecord
  validates :user_id, uniqueness: {scope: :role_id,
    message: "can only have a role once"}

  belongs_to :user
  belongs_to :role
end
