class Api::ServersController < ApplicationController
  def index
    @servers = current_user.servers
  end

  def show
    @server = current_user.servers.includes(:roles, members: :roles, channels: :restricted_members).find_by(id: params[:id])
    if @server
      render :show
    else
      render json: ["You do not belong to this server"], status: 404
    end
  end

  def create
    @server = current_user.owned_servers.new(server_params)
    @server.members.push(current_user)
    new_role = @server.roles.create(name: "test")
    current_user.roles.push(new_role)
    if @server.save
      render :show
    else
      render json: @server.errors.full_messages, status: :unprocessable_entity
    end
  end

  def destroy
    server = current_user.servers.find_by(id: params[:id])
    if server && server.delete
      render json: server.id
    else
      render json: ["You don't own this server"], status: 401
    end
  end

  private

  def server_params
    params.require(:server).permit(:title, :icon)
  end

end
