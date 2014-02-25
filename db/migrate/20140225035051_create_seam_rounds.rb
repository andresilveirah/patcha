class CreateSeamRounds < ActiveRecord::Migration
  def change
    create_table :seam_rounds do |t|
      t.references :patch, index: true
      t.references :frame, index: true
      t.integer :patches_per_frame

      t.timestamps
    end
  end
end
