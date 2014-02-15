class PatchSerializer < ActiveModel::Serializer
  attributes :id, :name, :code, :dots_count, :colors_count, :width, :height, :cost
end
