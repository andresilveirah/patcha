class SeamRound < ActiveRecord::Base
  belongs_to :patch
  belongs_to :frame
  
  validates_presence_of :patch_id, :frame_id, :patches_per_frame
end
