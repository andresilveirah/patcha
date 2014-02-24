require 'spec_helper'

describe "frames/edit" do
  before(:each) do
    @frame = assign(:frame, stub_model(Frame,
      :width => 1.5,
      :height => 1.5,
      :maximum_dots => 1
    ))
  end

  it "renders the edit frame form" do
    render

    # Run the generator again with the --webrat flag if you want to use webrat matchers
    assert_select "form[action=?][method=?]", frame_path(@frame), "post" do
      assert_select "input#frame_width[name=?]", "frame[width]"
      assert_select "input#frame_height[name=?]", "frame[height]"
      assert_select "input#frame_maximum_dots[name=?]", "frame[maximum_dots]"
    end
  end
end
