class GroupesController < ApplicationController

  def index
    respond_with Groupes.all
  end

  def new
    respond_with Groupes.new
  end

  def create
    respond_with Groupe.create(groupe_params)
  end

  def show
    respond_with Groupe.find(params[:id])
  end

  private
  def groupe_params
    params.require(:groupe).permit(:name, :budget, :countday, :tripduration)
  end
end
