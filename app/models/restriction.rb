class Restriction < ApplicationRecord
  
  belongs_to :channel
  belongs_to :role
end
