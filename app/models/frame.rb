class Frame < ActiveRecord::Base
  
  def size
    "#{width} x #{height}"
  end
end
