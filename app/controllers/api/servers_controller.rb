class Api::ServersController < ApplicationController
  def index
    @servers = current_user.servers
  end

  def show
    @server = current_user.servers.includes(:roles, members: :roles, channels: [:restrictions, :restricted_members]).find_by(id: params[:id])
    if @server
      render :show
    else
      render json: ["You do not belong to this server"], status: 404
    end
  end

  def create
    @server = current_user.owned_servers.new(server_params)
    @server.members.push(current_user)
    if @server.save
      new_role = @server.roles.create(name: "test")
      current_user.roles.push(new_role)
      render :show
    else
      render json: @server.errors.full_messages, status: :unprocessable_entity
    end
  end

  def update
    @server = current_user.owned_servers.find_by(id: params[:id])
    if @server && @server.update(server_params)
      render :show
    else
      render json: @server ?
        @server.errors.full_messages
      :
        ["This server does not exist, or you are not the Admin"],
      status: :unprocessable_entity
    end
  end

  def destroy
    server = current_user.owned_servers.find_by(id: params[:id])
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
