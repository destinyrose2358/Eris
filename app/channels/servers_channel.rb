class ServersChannel < ApplicationCable::Channel

    def subscribed
        server = current_user.servers.find(params[:id])
        stream_for server
    end

    def unsubscribed

    end
end