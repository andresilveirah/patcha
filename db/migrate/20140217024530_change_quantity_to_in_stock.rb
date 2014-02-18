class ChangeQuantityToInStock < ActiveRecord::Migration
  def change
    rename_column :patches, :quantity, :in_stock
  end
end
