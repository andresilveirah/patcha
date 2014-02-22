class Setting < ActiveRecord::Base
  after_save :update_patches_cost
  
  def update_patches_cost
    if cost_per_thousand_points_changed?
      Patch.where("dots_count IS NOT NULL").find_each do |patch|
        patch.cost = patch.dots_count * cost_per_thousand_points
        patch.save
      end
    end
  end
end
