class RetailersController < ApplicationController
  def index
    @retailers = Retailer.all
    render json: @retailers
  end
end
