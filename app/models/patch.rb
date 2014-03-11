class Patch < ActiveRecord::Base
  has_one :image, as: :imageable, dependent: :destroy
  has_many :seam_rounds, dependent: :destroy
  
  accepts_nested_attributes_for :image, allow_destroy: true,
    :reject_if => lambda { |image| image['picture'].nil? }
  accepts_nested_attributes_for :seam_rounds, allow_destroy: true
  
  before_save :format_code
  
  validates_presence_of :name, :code, :dots_count
  validates_uniqueness_of :code, case_sensitive: false
  
  acts_as_taggable_on :groups
  
  def format_code
    code.upcase!
  end
  
  def size
    "#{width} x #{height}"
  end
end
