class Api::ChannelsController < ApplicationController

  def create
    server = Server.find_by(id: params[:server_id])
    if server
      @channel = server.channels.new(channel_params)
      @channel.restriction_roles.push(server.roles.first)
    else
      @channel = current_user.direct_channels.new(channel_params)
    end
    if @channel.save
      render :show
    else
      render json: @channel.errors.full_messages, status: :unprocessable_entity
    end
  end

  def index
    @channels = current_user.direct_channels
    render :index
  end

  def destroy
    channel = current_user
      .owned_servers
      .find_by(id: params[:server_id])
      .channels
      .find_by(id: params[:id])
    if channel && channel.delete
      render json: channel.id
    else
      render json: ["You are not the admin or the channel does not exist"], status: 401
    end
  end

  private

  def channel_params
    params.require(:channel).permit(:title)
  end
end
