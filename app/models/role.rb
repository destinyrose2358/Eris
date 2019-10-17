class Role < ApplicationRecord
  validates :server_id, uniqueness: {scope: :name,
    message: "should not repeat roles"}
  validates :name, presence: true

  belongs_to :server

  has_many :restrictions,
  dependent: :destroy
  
  has_many :channels,
  through: :restrictions,
  source: :channel

  has_many :user_roles

  has_many :users,
  through: :user_roles,
  source: :user
end
