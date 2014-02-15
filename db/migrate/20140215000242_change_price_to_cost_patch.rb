class ChangePriceToCostPatch < ActiveRecord::Migration
  def change
    rename_column :patches, :price, :cost
  end
end
