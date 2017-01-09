class PlantsController < ApplicationController
  def index
  end

  def api
    @plants = Plant.all
    render json: @plants
  end
end
