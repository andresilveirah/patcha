class Image < ActiveRecord::Base
  belongs_to :imageable, polymorphic: true
  
  has_attached_file :picture, :styles => { big: "500x500>", medium: "300x300>", small: "150x150>",thumb: "70x70>" }, :default_url => "/images/:style/missing.png"
  validates_attachment_content_type :picture, :content_type => /\Aimage\/.*\Z/
end
