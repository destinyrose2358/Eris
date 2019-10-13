class Api::SessionsController < ApplicationController

  def create
    @user = User.find_by_credentials(params[:user][:username], params[:user][:password])
    if @user
      login(@user)
      render "api/users/show"
    else
      render json: ["Password or Username was invalid"], status: :unprocessable_entity
    end
  end
  
  def destroy
    logout
    render json: {}
  end

end
