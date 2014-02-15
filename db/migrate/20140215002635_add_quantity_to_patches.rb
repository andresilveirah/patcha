class AddQuantityToPatches < ActiveRecord::Migration
  def change
    add_column :patches, :quantity, :integer
  end
end
