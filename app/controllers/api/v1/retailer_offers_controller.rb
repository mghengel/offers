class Api::V1::RetailerOffersController < ApplicationController
  def index
    @retailerOffers = RetailerOffer.all
    render json: @retailerOffers
  end
  def show
    @retailerOffers = RetailerOffer.where(retailer_id: params[:id])
    render json: @retailerOffers
  end
end
