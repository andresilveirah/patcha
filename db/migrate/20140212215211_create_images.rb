class CreateImages < ActiveRecord::Migration
  def change
    create_table :images do |t|
      t.string :imageable_type
      t.integer :imageable_id

      t.timestamps
    end
    
    add_index :images, :imageable_id
    add_index :images, :imageable_type
  end
end
