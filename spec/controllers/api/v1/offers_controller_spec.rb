require 'spec_helper'

RSpec.describe Api::V1::OffersController, type: :controller do
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

    it "response with JSON body containing expected offer" do
      hash_body = nil
      expect { hash_body = JSON.parse(response.body) }.not_to raise_exception
      
      offers = JSON.parse(response.body)

      expect offers.length.should == 84

      expect offers[0]["name"].should == "Crystal Light Liquid"
    end
  end

  describe "GET #index with query" do
    before do
      get :index, params: { q: 'chai' }
    end

    it "returns http success" do
      expect(response).to have_http_status(:success)
    end

    it "response with JSON body containing expected offer" do
      hash_body = nil
      expect { hash_body = JSON.parse(response.body) }.not_to raise_exception
      
      offers = JSON.parse(response.body)

      expect offers.length.should == 2

      expect offers[0]["name"].should == "Bhakti Chai"
    end
  end

  describe "#show with id" do
    before do
      get :show, params: { id: 1668 }
    end

    it "returns http success" do
      expect(response).to have_http_status(:success)
    end

    it "response with JSON body containing expected offer" do
      hash_body = nil
      expect { hash_body = JSON.parse(response.body) }.not_to raise_exception
      
      offers = JSON.parse(response.body)

      expect offers["name"].should == "Little Duck Organics"
    end
  end
end
