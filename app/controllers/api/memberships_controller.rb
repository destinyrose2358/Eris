class Api::MembershipsController < ApplicationController

    def create
        if params[:server_id]
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
                @channel = current_user.direct_channels.where(member_ids: [current_user.id, params[:membership][:user_id]]) ||
                    Channel.create(member_ids: [current_user.id, params[:membership][:user_id]])
                current_user.messages.create(channel: channel, body: "I'm inviting you to join my server #{@server.title}, if you would like to join please go to #{request}")
                render "api/channels/show"
            end
            render :channel_create
        else
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
        is_owner = @membership.memberable_type === "Server" ? @membership.memberable.owner_id === current_user.id : false
        is_invitee = current_user.id === @membership.user_id
        if @membership && (is_invitee || is_owner) && ((@membership.memberable_type == "Server" && @membership.delete) || (@membership.memberable_type == "Channel" && @membership.update(accepted: false)))
            render json: [`Success`]
        else
            render json: ["You cannot delete this member"], status: :unprocessable_entity
        end
    end

    private

    def membership_params
        params.require(:membership).permit(:user_id)
    end
end
