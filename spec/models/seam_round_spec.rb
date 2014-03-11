require 'spec_helper'

describe SeamRound do
  it 'should not exceed maximum frame dots' do
    seam_round = build(:seam_round)
    
    seam_round.patch.dots_count = 1000
    seam_round.patches_per_frame = 10
    seam_round.frame.maximum_dots = 5000
    seam_round.should_not be_valid
    
    seam_round.frame.maximum_dots = 10000
    seam_round.should be_valid
  end
end
