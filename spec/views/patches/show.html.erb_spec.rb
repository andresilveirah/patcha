require 'spec_helper'

describe "patches/show" do
  before(:each) do
    @patch = assign(:patch, stub_model(Patch,
      :name => "Name",
      :code => "Code",
      :dots_count => 1,
      :colors_count => 2,
      :width => 1.5,
      :height => 1.5,
      :cost => 1.5
    ))
  end

  it "renders attributes in <p>" do
    render
    # Run the generator again with the --webrat flag if you want to use webrat matchers
    rendered.should match(/Name/)
    rendered.should match(/Code/)
    rendered.should match(/1/)
    rendered.should match(/2/)
    rendered.should match(/1.5/)
    rendered.should match(/1.5/)
    rendered.should match(/1.5/)
  end
end
