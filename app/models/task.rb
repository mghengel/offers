class Task < ActiveRecord::Base
  belongs_to :offer
  attr_accessible :amount, :content, :thumbnail_url, :task_type, :url
end
