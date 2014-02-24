require 'spec_helper'

describe "frames/new" do
  before(:each) do
    assign(:frame, stub_model(Frame,
      :width => 1.5,
      :height => 1.5,
      :maximum_dots => 1
    ).as_new_record)
  end

  it "renders new frame form" do
    render

    # Run the generator again with the --webrat flag if you want to use webrat matchers
    assert_select "form[action=?][method=?]", frames_path, "post" do
      assert_select "input#frame_width[name=?]", "frame[width]"
      assert_select "input#frame_height[name=?]", "frame[height]"
      assert_select "input#frame_maximum_dots[name=?]", "frame[maximum_dots]"
    end
  end
end
