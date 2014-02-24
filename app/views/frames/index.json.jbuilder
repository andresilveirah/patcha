json.array!(@frames) do |frame|
  json.extract! frame, :id, :width, :height, :maximum_dots
  json.url frame_url(frame, format: :json)
end
