class Api::V1::OffersController < ApplicationController
  def index
    if params[:q]
      @offers = Offer.where("description || name like ?", "%#{params[:q]}%")
    else 
      @offers = Offer.all
    end
    render json: @offers
  end
  def show
    @offers = Offer.find(params[:id])
    render json: @offers
  end
end
