class CreateFrames < ActiveRecord::Migration
  def change
    create_table :frames do |t|
      t.float :width
      t.float :height
      t.integer :maximum_dots

      t.timestamps
    end
  end
end
