json.array!(@patches) do |patch|
  json.extract! patch, :id, :name, :code, :dots_count, :colors_count, :width, :height, :cost, :quantity
  json.url patch_url(patch, format: :json)
end
