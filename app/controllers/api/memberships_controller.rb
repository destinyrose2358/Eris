class Api::MembershipsController < ApplicationController

    def create
        @membership = current_user.owned_servers.new(membership_params)
        if @membership.save
            render json: ["Invite sent!"]
        else
            render json: @membership.errors.full_messages, status: :unprocessable_entity
        end
    end

    def update
        @membership = current_user.pending_memberships.includes(:memberable).find_by(id: params[:id])
        if @membership && @membership.update(accepted: :true)
            render json: [`Welcome to ${ @membership.memberable.title }`]
        else
            render json: ["Failed to accept invite"], status: :unprocessable_entity
        end
    end

    def destroy
        @membership = Membership.includes(:memberable).find_by(id: params[:id])
        is_owner? = @membership.memberable.owner_id === current_user.id
        is_invitee? = current_user.id === @membership.user_id
        if @membership
        && (is_invitee? || is_owner?)
        && @membership.delete
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
