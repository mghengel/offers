class RetailerOffersController < ApplicationController
  def index
    @retailerOffers = RetailerOffer.all
    render json: @retailerOffers
  end
end
