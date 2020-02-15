class Api::ChannelsController < ApplicationController

  def create
    server = Server.find_by(id: params[:server_id])
    if server
      channel = server.channels.new(channel_params)
      channel.restriction_roles.push(server.roles.first)
    else
      channel = current_user.direct_channels.includes(:members).new(channel_params)
    end
    if channel.save
      processed_channel = ApplicationController.renderer.render("api/channels/show", locals: { "@channel": channel })
      if server
        ServersChannel.broadcast_to server, processed_channel 
        head :ok
      else
        channel.members.each do |member|
          UsersChannel.broadcast_to member, processed_channel
          head :ok
        end
      end
    else
      UsersChannel.broadcast_to current_user, json.stringify({ type: "RECEIVE_CHANNEL_ERRORS", errors: channel.errors.full_messages})
      head :unprocessable_entity
    end
  end

  def index
    channels = current_user.direct_channels.includes(:members, messages: :author)
    processed_channels = ApplicationController.renderer.render("api/channels/index", locals: { "@channels": channels })
    UsersChannel.broadcast_to current_user, processed_channels
    head :ok
  end

  def destroy
    if params[:server_id]
      channel = current_user
        .owned_servers
        .find_by(id: params[:server_id])
        .channels
        .includes(:server)
        .find_by(id: params[:id])
    end
    if channel && channel.delete
      ServersChannel.broadcast_to channel.server, json.stringify({ type: "REMOVE_CHANNEL", channelId: channel.id })
      head :ok
    else
      UsersChannel.broadcast_to current_user, json.stringify({ type: "RECEIVE_CHANNEL_ERRORS", errors: ["You are not the admin or the channel does not exist"] })
      head 401
    end
  end

  private

  def channel_params
    params.require(:channel).permit(:title)
  end
end
