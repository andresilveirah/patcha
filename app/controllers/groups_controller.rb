class GroupsController < ApplicationController
  def index
    groups = ActsAsTaggableOn::Tag.all
    respond_to do |format|
      format.html
      format.json { render json: groups }
    end
  end
end
