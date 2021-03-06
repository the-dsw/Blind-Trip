class UsersController < ApplicationController

  def index
    respond_with User.all
  end

  def new
    respond_with User.new
  end

  def create
    respond_with User.create(user_params)
  end

  def show
    respond_with User.find(params[:id])
  end

  private
  def user_params
    params.require(:user).permit(:name, :email)
  end
end
