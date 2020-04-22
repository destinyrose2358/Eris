class Api::MembershipsController < ApplicationController

    def create
        original_membership = Membership.find_by(memberable_type: "Server", memberable_id: params[:server_id], user_id: params[:membership][:user_id]) ||
            Membership.find_by(memberable_type: "Channel", memberable_id: params[:channel_id], user_id: params[:membership][:user_id])
        if original_membership
            UsersChannel.broadcast_to current_user, JSON.generate({ type: "RECEIVE_MEMBERSHIP_ERRORS", errors: ["This user has been invited already"]})
            render json: {}, status: :unprocessable_entity
        elsif params[:server_id]
            @server = current_user.owned_servers.find_by(id: params[:server_id])
            if @server
                @membership = @server.pending_memberships.new(membership_params) if @server
            end
        else
            @channel = current_user.direct_channels.find_by(id: params[:channel_id])
            if @channel
                @membership = @channel.memberships.new(membership_params)
                @membership.accepted = true
            end
        end
        if @membership && @membership.save
            if @server
                user = User.find_by(id: params[:membership][:user_id])
                @channel = current_user.direct_channels.includes(:members).joins(:members).where('users.id': [current_user, user])[0]
                unless @channel
                    @channel = Channel.create() 
                    @channel.members.push([current_user, user])
                end
                
                if @channel
                    current_user.messages.create(channel: @channel, body: "I'm inviting you to join my server #{@server.title}, if you would like to join please go to #{request.base_url}/acceptinvite/#{@membership.id}")
                    #send the membership update to the server
                    ServersChannel.broadcast_to @server, JSON.generate({ type: "RECEIVE_PENDING_MEMBER", memberId: params[:membership][:user_id].to_i, serverId: params[:server_id].to_i })
                    #send the channel data to current_user and invitee
                    processed_channel = ApplicationController.renderer.render("api/channels/show", locals: { "@type": "RECEIVE_CHANNEL", "@channel": @channel, "@membership": @membership })
                    UsersChannel.broadcast_to current_user, processed_channel
                    UsersChannel.broadcast_to user, processed_channel
                    #send message data to current_user and user

                    render json: {channelId: @channel.id}, status: :ok
                else
                    @membership.delete
                    UsersChannel.broadcast_to current_user, JSON.generate({ type: "RECEIVE_MEMBERSHIP_ERRORS", errors: ["Invite failed to send, Please try again"] })
                    render json: {}, status: :unprocessable_entity
                end
            else
                processed_channel_membership = ApplicationController.renderer.render("api/memberships/show", locals: { "@type": "RECEIVE_CHANNEL_MEMBERSHIP", "@membership": @membership })
                ChannelsChannel.broadcast_to @channel, processed_channel_membership
                render json: {}, status: :ok
            end
        elsif !original_membership
            UsersChannel.broadcast_to current_user, JSON.generate({ type: "RECEIVE_MEMBERSHIP_ERRORS", errors: @membership ? @membership.errors.full_messages : ["This server does not exist, or you are not the admin"] })
            render json: {}, status: :unprocessable_entity
        end
    end

    def update
        @membership = current_user.pending_memberships.includes(:user, memberable: { messages: :author }).find_by(id: params[:id])
        if @membership && @membership.update(accepted: :true)
            if @membership.memberable_type == "Server"
                @server = @membership.memberable
            else
                @channel = @membership.memberable
            end
            #send the current_user the channel or server data
            processed_channel_server = ApplicationController.renderer.render( "api/#{@membership.memberable_type.downcase}s/show", locals: { "@membership": @membership, "@channel": @channel, "@server": @server, "@type": "RECEIVE_CHANNEL" } )
            UsersChannel.broadcast_to current_user, processed_channel_server
            render json: {}
            #send the server or channel the new membership data
            case @membership.memberable_type
            when "Channel"
                processed_channel_membership = ApplicationController.renderer.render("api/memberships/show", locals: { "@type": "RECEIVE_CHANNEL_MEMBERSHIP", "@membership": @membership })
                ChannelsChannel.broadcast_to @channel, processed_channel_membership
            when "Server"
                processed_server_membership = ApplicationController.renderer.render("api/memberships/show", locals: { "@type": "RECEIVE_SERVER_MEMBERSHIP", "@membership": @membership })
                ServersChannel.broadcast_to @server, processed_server_membership
            end
        else
            UsersChannel.broadcast_to current_user, JSON.generate({ type: "RECEIVE_MEMBERSHIP_ERRORS", errors: ["Failed to accept invite"] })
            render json: {}, status: :unprocessable_entity
        end
    end

    def destroy
        @membership = Membership.includes(:memberable, :user).find_by(id: params[:id])
        if @membership
            is_owner = @membership.memberable_type === "Server" ? @membership.memberable.owner_id === current_user.id : false
            is_invitee = current_user.id === @membership.user_id
            if (is_invitee || is_owner) && ((@membership.memberable_type == "Server" && @membership.delete) || (@membership.memberable_type == "Channel" && @membership.update(accepted: false)))
                deleted_membership = ApplicationController.renderer.render("api/memberships/destroy", locals: { "@membership": @membership })
                case @membership.memberable_type
                when "Channel"
                    UsersChannel.broadcast_to @membership.user, JSON.generate({ type: "REMOVE_CHANNEL", channelId: @membership.memberable_id })
                    ChannelsChannel.broadcast_to @membership.memberable, deleted_membership
                when "Server"
                    UsersChannel.broadcast_to @membership.user, JSON.generate({ type: "REMOVE_SERVER", channelId: @membership.memberable_id })
                    ServersChannel.broadcast_to @membership.memberable, deleted_membership
                end
                render json: {}
            else
                UsersChannel.broadcast_to current_user, JSON.generate({ type: "RECEIVE_MEMBERSHIP_ERRORS", errors: ["You cannot delete this member"] })
                render json: {}, status: :unprocessable_entity
            end
        else
            UsersChannel.broadcast_to current_user, JSON.generate({ type: "RECEIVE_MEMBERSHIP_ERRORS", errors: ["This membership doesn't exist"] })
            render json: {}, status: :unprocessable_entity
        end
    end

    private

    def membership_params
        params.require(:membership).permit(:user_id)
    end
end
