require 'spec_helper'

RSpec.describe Api::V1::RetailersController, type: :controller do
  before do 
    Rails.application.load_seed
  end

  describe "GET #index" do
    before do
      get :index
    end

    it "returns http success" do
      expect(response).to have_http_status(:success)
    end

    it "response with JSON body containing expected retailers" do
      hash_body = nil
      expect { hash_body = JSON.parse(response.body) }.not_to raise_exception
      
      retailers = JSON.parse(response.body)

      expect retailers.length.should == 49

      expect retailers[0]["name"].should == "King Soopers"
      expect retailers[0]["id"].should == 1
    end
  end

  describe "#show with id" do
    before do
      get :show, params: { id: 86 }
    end

    it "returns http success" do
      expect(response).to have_http_status(:success)
    end

    it "response with JSON body containing expected offer" do
      hash_body = nil
      expect { hash_body = JSON.parse(response.body) }.not_to raise_exception
      
      retailerOffers = JSON.parse(response.body)
      
      expect retailerOffers["id"].should == 86
      expect retailerOffers["name"].should == "AMC Concessions"
    end
  end
end
