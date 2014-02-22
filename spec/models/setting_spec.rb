require 'spec_helper'

describe Setting do
  describe 'after save' do
    before(:each) do
      @patches = []
      3.times { @patches << create(:patch) }
    end
    
    it 'should update the patches costs if cost_per_thousand_points has changed' do
      setting = create(:setting)
      setting.cost_per_thousand_points += 0.15
      setting.save
      @patches.each do |patch|
        patch.reload
        patch.cost.should eql(patch.dots_count * setting.cost_per_thousand_points)
      end
    end
    
    it "should not update the patches if cost_per_thousand_points hasn't changed" do
      setting = create(:setting)
      setting.save
      @patches.each do |patch|
        patch.reload
        patch.cost_changed?.should eql(false)
      end
    end
  end
end
