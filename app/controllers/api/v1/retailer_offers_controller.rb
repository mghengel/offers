class Api::V1::RetailerOffersController < ApplicationController
  def index
    if params[:retailer_id]
      @retailerOffers = RetailerOffer.where(retailer_id: params[:retailer_id])
    elsif params[:offer_id]
      @retailerOffers  = RetailerOffer.where(offer_id: params[:offer_id])
    else 
      @retailerOffers = RetailerOffer.all
    end
    render json: @retailerOffers
  end
  def show
    @retailerOffers = RetailerOffer.find(params[:id])
    render json: @retailerOffers
  end
end
