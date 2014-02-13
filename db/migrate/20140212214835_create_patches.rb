class CreatePatches < ActiveRecord::Migration
  def change
    create_table :patches do |t|
      t.string :name
      t.string :code
      t.integer :dots_count
      t.integer :colors_count
      t.float :width
      t.float :height
      t.float :price

      t.timestamps
    end
    
    add_index :patches, :code
  end
end
