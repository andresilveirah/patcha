class Frame < ActiveRecord::Base
  
  def size
    "#{width} x #{height}"
  end
  
  def to_s
    size + " - " + maximum_dots.to_s + " pts"
  end
end
