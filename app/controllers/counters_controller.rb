class CountersController < ApplicationController

  def index
    respond_with Counter.all
  end

  def new
    respond_with Counter.new
  end

  def create
    respond_with Counter.create(counter_params)
  end

  def show
    respond_with Counter.find(params[:id])
  end

  private
  def counter_params
    params.require(:counter).permit(:countenational, :countinternational, :countmountain, :countbeach, :countoutback, :counthot, :countcold)
  end
end
