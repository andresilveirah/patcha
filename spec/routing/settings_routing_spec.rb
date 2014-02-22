require "spec_helper"

describe SettingsController do
  describe "routing" do

    it "routes to #show" do
      get("/settings/1").should route_to("settings#show", :id => "1")
    end

    it "routes to #edit" do
      get("/settings/1/edit").should route_to("settings#edit", :id => "1")
    end
    
    it "routes to #update" do
      put("/settings/1").should route_to("settings#update", :id => "1")
    end

  end
end
