require 'spec_helper'

describe "frames/index" do
  before(:each) do
    assign(:frames, [
      stub_model(Frame,
        :width => 1.5,
        :height => 1.5,
        :maximum_dots => 1
      ),
      stub_model(Frame,
        :width => 1.5,
        :height => 1.5,
        :maximum_dots => 1
      )
    ])
  end

  it "renders a list of frames" do
    render
    # Run the generator again with the --webrat flag if you want to use webrat matchers
    assert_select "tr>td", :text => 1.5.to_s, :count => 2
    assert_select "tr>td", :text => 1.5.to_s, :count => 2
    assert_select "tr>td", :text => 1.to_s, :count => 2
  end
end
