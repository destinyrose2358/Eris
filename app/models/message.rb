class Message < ApplicationRecord
  validates :author_id, :channel_id, presence: true
  attribute :body, :text, default: ""

  belongs_to :author,
  class_name: :User

  belongs_to :channel
end
