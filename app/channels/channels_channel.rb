class ChannelsChannel < ApplicationCable::Channel

    def subscribed
        channel = Channel.includes(:members).find_by(id: params[:id])
        stream_for channel channel.members.include?(current_user)
    end

    def unsubscribed

    end
end