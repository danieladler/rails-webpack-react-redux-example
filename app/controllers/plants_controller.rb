class PlantsController < ApplicationController
  def index
    @plants = Plant.all
  end

  def api
    @plants = Plant.all
    render json: @plants
  end
end
