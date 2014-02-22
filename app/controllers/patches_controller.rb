class PatchesController < ApplicationController

  before_action :set_patch, only: [:show, :edit, :update, :destroy]

  # GET /patches
  # GET /patches.json
  def index
    @q = Patch.search(params[:q])
    @patches = @q.result(distinct: true).order("code DESC").paginate(:page => params[:page], :per_page => 10).includes(:image)
  end

  # GET /patches/1
  # GET /patches/1.json
  def show
  end

  # GET /patches/new
  def new
    @patch = Patch.new
    @setting = Setting.last
  end

  # GET /patches/1/edit
  def edit
    @patch.build_image if @patch.image.nil?
    @setting = Setting.last
  end

  # POST /patches
  # POST /patches.json
  def create
    @patch = Patch.new(patch_params)

    respond_to do |format|
      if @patch.save
        url_to_redirect = params[:commit] == I18n.t('helpers.actions.create_and_continue') ? new_patch_path : patch_path(@patch)
        
        format.html { redirect_to url_to_redirect, notice: t('helpers.flash_messages.created', model: Patch.model_name.human) }
        format.json { render action: 'show', status: :created, location: @patch }
      else
        format.html { render action: 'new' }
        format.json { render json: @patch.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /patches/1
  # PATCH/PUT /patches/1.json
  def update
    respond_to do |format|
      if @patch.update(patch_params)
        format.html { redirect_to @patch, notice: t('helpers.flash_messages.updated', model: Patch.model_name.human) }
        format.json { head :no_content }
      else
        format.html { render action: 'edit' }
        format.json { render json: @patch.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /patches/1
  # DELETE /patches/1.json
  def destroy
    @patch.destroy
    respond_to do |format|
      format.html { redirect_to patches_url }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_patch
      @patch = Patch.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def patch_params
      params.require(:patch).permit(
      :name, :code, :dots_count, :colors_count, :width,
      :height, :cost, :in_stock, :group_list, image_attributes: [:_destroy, :picture])
    end
end
