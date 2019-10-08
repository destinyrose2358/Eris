class Channel < ApplicationRecord
  validates :title, uniqueness: { scope: :server_id }, if: :server_id?

  belongs_to :server
end
