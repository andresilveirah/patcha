require 'spec_helper'

describe "patches/index" do
  before(:each) do
    assign(:patches, [
      stub_model(Patch,
        :name => "Name",
        :code => "Code",
        :dots_count => 1,
        :colors_count => 2,
        :width => 1.5,
        :height => 1.5,
        :price => 1.5
      ),
      stub_model(Patch,
        :name => "Name",
        :code => "Code",
        :dots_count => 1,
        :colors_count => 2,
        :width => 1.5,
        :height => 1.5,
        :price => 1.5
      )
    ])
  end

  it "renders a list of patches" do
    render
    # Run the generator again with the --webrat flag if you want to use webrat matchers
    assert_select "tr>td", :text => "Name".to_s, :count => 2
    assert_select "tr>td", :text => "Code".to_s, :count => 2
    assert_select "tr>td", :text => 1.to_s, :count => 2
    assert_select "tr>td", :text => 2.to_s, :count => 2
    assert_select "tr>td", :text => 1.5.to_s, :count => 2
    assert_select "tr>td", :text => 1.5.to_s, :count => 2
    assert_select "tr>td", :text => 1.5.to_s, :count => 2
  end
end
