require 'spec_helper'

describe "frames/show" do
  before(:each) do
    @frame = assign(:frame, stub_model(Frame,
      :width => 1.5,
      :height => 1.5,
      :maximum_dots => 1
    ))
  end

  it "renders attributes in <p>" do
    render
    # Run the generator again with the --webrat flag if you want to use webrat matchers
    rendered.should match(/1.5/)
    rendered.should match(/1.5/)
    rendered.should match(/1/)
  end
end
