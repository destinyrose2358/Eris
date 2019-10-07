class Api::UsersController < ApplicationController
  def create
    @user = User.new(user_params)
    if @user.save
      render :show
    else
      render json: @user.errors.full_messages, status: unprocessable_entity
    end
  end

  private

  def user_params
    params.require(:users).permit(:username, :password)
  end
end
