class Api::V1::RetailersController < ApplicationController
  def index
    @retailers = Retailer.all
    render json: @retailers
  end
  def show
    @retailers = Retailer.find(params[:id])
    render json: @retailers
  end
end
