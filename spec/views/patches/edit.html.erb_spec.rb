require 'spec_helper'

describe "patches/edit" do
  before(:each) do
    @patch = assign(:patch, stub_model(Patch,
      :name => "MyString",
      :code => "MyString",
      :dots_count => 1,
      :colors_count => 1,
      :width => 1.5,
      :height => 1.5,
      :price => 1.5
    ))
  end

  it "renders the edit patch form" do
    render

    # Run the generator again with the --webrat flag if you want to use webrat matchers
    assert_select "form[action=?][method=?]", patch_path(@patch), "post" do
      assert_select "input#patch_name[name=?]", "patch[name]"
      assert_select "input#patch_code[name=?]", "patch[code]"
      assert_select "input#patch_dots_count[name=?]", "patch[dots_count]"
      assert_select "input#patch_colors_count[name=?]", "patch[colors_count]"
      assert_select "input#patch_width[name=?]", "patch[width]"
      assert_select "input#patch_height[name=?]", "patch[height]"
      assert_select "input#patch_price[name=?]", "patch[price]"
    end
  end
end
