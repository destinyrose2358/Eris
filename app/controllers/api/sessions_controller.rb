class Api::SessionsController < ApplicationController

  def create
    @user = User.find_by_credentials(params[:user][:username], params[:user][:password])
    if @user
      login(@user)
      render :create
    else
      render json: ["Password or Username was invalid"], status: :unprocessable_entity
    end
  end
  
  def destroy
    if current_user
      logout
      render json: {}
    else
      render json: ["There was no one to log out", "How did you even get in this situation?"], status: 404
    end
  end

end
