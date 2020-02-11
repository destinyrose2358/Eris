class Api::MembershipsController < ApplicationController

    def create
        original_membership = Membership.find_by(memberable_type: "Server", memberable_id: params[:server_id], user_id: params[:membership][:user_id]) ||
            Membership.find_by(memberable_type: "Channel", memberable_id: params[:channel_id], user_id: params[:membership][:user_id])
        if original_membership
            render json: ["This user has been invited already"], status: :unprocessable_entity
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
                @channel = current_user.direct_channels.includes(:members).where(members: [current_user, user])[0]
                unless @channel
                    @channel = Channel.create() 
                    @channel.members.push([current_user, user])
                end
                
                if @channel
                    current_user.messages.create(channel: @channel, body: "I'm inviting you to join my server #{@server.title}, if you would like to join please go to #{request.base_url}/acceptinvite/#{@membership.id}")
                    render "api/channels/show"
                else
                    @membership.delete
                    render json: ["Invite failed to send, Please try again"], status: :unprocessable_entity
                end
            else
                render :channel_create
            end
        elsif !original_membership
            render json: @membership ? @membership.errors.full_messages : ["This server does not exist, or you are not the admin"], status: :unprocessable_entity
        end
    end

    def update
        @membership = current_user.pending_memberships.includes(memberable: { messages: :author }).find_by(id: params[:id])
        if @membership && @membership.update(accepted: :true)
            if @membership.memberable_type == "Server"
                @server = @membership.memberable
            else
                @channel = @membership.memberable
            end
            render "api/#{@membership.memberable_type.downcase}s/show"
        else
            render json: ["Failed to accept invite"], status: :unprocessable_entity
        end
    end

    def destroy
        @membership = Membership.includes(:memberable).find_by(id: params[:id])
        if @membership
            is_owner = @membership.memberable_type === "Server" ? @membership.memberable.owner_id === current_user.id : false
            is_invitee = current_user.id === @membership.user_id
            if (is_invitee || is_owner) && ((@membership.memberable_type == "Server" && @membership.delete) || (@membership.memberable_type == "Channel" && @membership.update(accepted: false)))
                render json: [`Success`]
            else
                render json: ["You cannot delete this member"], status: :unprocessable_entity
            end
        else
            render json: ["This membership doesn't exist"], status: :unprocessable_entity
        end
    end

    private

    def membership_params
        params.require(:membership).permit(:user_id)
    end
end
