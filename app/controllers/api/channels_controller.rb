class Api::ChannelsController < ApplicationController
  def index
    @channels = current_user.servers.find_by(id: params[:server_id]).channels
    render :index
  end
end
