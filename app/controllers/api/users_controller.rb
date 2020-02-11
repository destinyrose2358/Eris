class Api::UsersController < ApplicationController
  def index
    @users = User.where("username like ?", "%#{params[:username]}%")
  end

  def create
    @user = User.new(user_params)
    if @user.save
      login(@user)
      render :show
    else
      render json: @user.errors.full_messages, status: :unprocessable_entity
    end
  end

  def update
    @user = User.find_by(id: params[:id])
    if @user && @user.is_password?(params[:password])
      if @user.update(user_params)
        render :current_user
      else
        render json: @user.errors.full_messages, status: :unprocessable_entity
      end
    else
      render json: ["The given user or password is incorrect"], status: :unprocessable_entity
    end
  end

  def show
    @user = User.find_by(id: params[:id])
    if @user === current_user
      render :current_user
    elsif @user
      render :show
    else
      render json: ["This user does not exist"], status: :unprocessable_entity
    end
  end

  private

  def user_params
    params.require(:user).permit(:username, :password, :email, :photo)
  end
end
