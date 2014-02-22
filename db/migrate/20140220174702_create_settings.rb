class CreateSettings < ActiveRecord::Migration
  def self.up
    create_table :settings do |t|
      t.float :cost_per_thousand_points, default: 0.0

      t.timestamps
    end
    
    Setting.create!
    p "Settings created"
  end
  
  def self.down
    drop_table :settings
  end
end
