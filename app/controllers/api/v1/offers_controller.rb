class Api::V1::OffersController < ApplicationController
  def index
    @offers = Offer.all
    render json: @offers
  end
  def show
    @offers = Offer.find(params[:id])
    render json: @offers
  end
end
