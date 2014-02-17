class Patch < ActiveRecord::Base
  has_one :image, as: :imageable, dependent: :destroy
  
  accepts_nested_attributes_for :image, allow_destroy: true, :reject_if => lambda { |image| image['picture'].nil? }
  
  def size
    "#{width} x #{height}"
  end
end
