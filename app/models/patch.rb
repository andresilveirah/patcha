class Patch < ActiveRecord::Base
  has_one :image, as: :imageable, dependent: :destroy
  
  accepts_nested_attributes_for :image, allow_destroy: true, :reject_if => lambda { |image| image['picture'].nil? }
  
  before_save :format_code
  
  validates_presence_of :name, :code
  validates_uniqueness_of :code
  
  acts_as_taggable_on :groups
  
  def format_code
    code.upcase!
  end
  
  def size
    "#{width} x #{height}"
  end
end
