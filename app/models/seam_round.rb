class SeamRound < ActiveRecord::Base
  belongs_to :patch
  belongs_to :frame
  
  validates_presence_of :patch_id, :frame_id, :patches_per_frame
  
  validate :dots_per_frame
  
  def dots_per_frame
    total_dots = patch.dots_count * patches_per_frame
    if total_dots > frame.maximum_dots
      errors.add(:patches_per_frame, I18n.t('activerecord.errors.seam_round.patches_per_frame', dots: total_dots))
    end
  end
end
