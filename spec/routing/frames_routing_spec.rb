require "spec_helper"

describe FramesController do
  describe "routing" do

    it "routes to #index" do
      get("/frames").should route_to("frames#index")
    end

    it "routes to #new" do
      get("/frames/new").should route_to("frames#new")
    end

    it "routes to #show" do
      get("/frames/1").should route_to("frames#show", :id => "1")
    end

    it "routes to #edit" do
      get("/frames/1/edit").should route_to("frames#edit", :id => "1")
    end

    it "routes to #create" do
      post("/frames").should route_to("frames#create")
    end

    it "routes to #update" do
      put("/frames/1").should route_to("frames#update", :id => "1")
    end

    it "routes to #destroy" do
      delete("/frames/1").should route_to("frames#destroy", :id => "1")
    end

  end
end
