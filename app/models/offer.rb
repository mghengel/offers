class Offer < ActiveRecord::Base
  has_many :tasks
  attr_accessible :description, :expiration, :image_url, :name, :terms
end
