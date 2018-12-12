require 'spec_helper'

RSpec.describe Api::V1::RetailerOffersController, type: :controller do
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

    it "response with JSON body containing expected retailer offers" do
      hash_body = nil
      expect { hash_body = JSON.parse(response.body) }.not_to raise_exception
      
      retailerOffers = JSON.parse(response.body)

      expect retailerOffers.length.should == 222

      expect retailerOffers[221]["id"].should == 222
      expect retailerOffers[221]["retailer_id"].should == 154
      expect retailerOffers[221]["offer_id"].should == 2904
    end
  end

  describe "GET #index with reatiler_id" do
    before do
      get :index, params: { retailer_id: 154 }
    end

    it "returns http success" do
      expect(response).to have_http_status(:success)
    end

    it "response with JSON body containing expected retailer offers" do
      hash_body = nil
      expect { hash_body = JSON.parse(response.body) }.not_to raise_exception
      
      retailerOffers = JSON.parse(response.body)

      expect retailerOffers.length.should == 11

      expect retailerOffers[0]["id"].should == 15
      expect retailerOffers[0]["retailer_id"].should == 154
      expect retailerOffers[0]["offer_id"].should == 1724
    end
  end

  describe "GET #index with offer_id" do
    before do
      get :index, params: { offer_id: 1724 }
    end

    it "returns http success" do
      expect(response).to have_http_status(:success)
    end

    it "response with JSON body containing expected retailer offers" do
      hash_body = nil
      expect { hash_body = JSON.parse(response.body) }.not_to raise_exception
      
      retailerOffers = JSON.parse(response.body)

      expect retailerOffers.length.should == 15

      expect retailerOffers[0]["id"].should == 1
      expect retailerOffers[0]["retailer_id"].should == 1
      expect retailerOffers[0]["offer_id"].should == 1724
    end
  end

  describe "#show with id" do
    before do
      get :show, params: { id: 123 }
    end

    it "returns http success" do
      expect(response).to have_http_status(:success)
    end

    it "response with JSON body containing expected offer" do
      hash_body = nil
      expect { hash_body = JSON.parse(response.body) }.not_to raise_exception
      
      retailerOffers = JSON.parse(response.body)
      
      expect retailerOffers["id"].should == 123
      expect retailerOffers["retailer_id"].should == 4
      expect retailerOffers["offer_id"].should == 2482
    end
  end
 
end
