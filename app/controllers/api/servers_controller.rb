class Api::ServersController < ApplicationController
  def index
    servers = current_user.servers
    processed_servers = ApplicationController.renderer.render("api/servers/index", locals: { '@servers': servers })
    UsersChannel.broadcast_to current_user, processed_servers
    head :ok
  end

  def show
    server = current_user.servers.includes(:roles, :pending_members, members: :roles, channels: [:restrictions, :restricted_members]).find_by(id: params[:id])
    if server
      processed_server = ApplicationController.renderer.render("api/servers/show", locals: { '@server': server })
      UsersChannel.broadcast_to current_user, processed_server
      head :ok
    else
      UsersChannel.broadcast_to current_user, json.stringify({type: "RECEIVE_SERVER_ERRORS", errors: ["You do not belong to this server"]})
      head :unprocessable_entity
    end
  end

  def create
    server = current_user.owned_servers.new(server_params)
    server.members.push(current_user)
    if server.save
      new_role = server.roles.create(name: "test")
      current_user.roles.push(new_role)
      processed_server = ApplicationController.renderer.render("api/servers/show", locals: { '@server': server })
      UsersChannel.broadcast_to current_user, processed_server
      head :ok
    else
      UsersChannel.broadcast_to current_user, json.stringify({type: "RECEIVE_SERVER_ERRORS", errors: server.errors.full_messages})
      head :unprocessable_entity
    end
  end

  def update
    server = current_user.owned_servers.find_by(id: params[:id])
    if server && server.update(server_params)
      processed_server = ApplicationController.renderer.render("api/servers/show", locals: { '@server': server })
      ServersChannel.broadcast_to server, processed_server
      head :ok
    else
      errors = server ?
        server.errors.full_messages
      :
        ["This server does not exist, or you are not the Admin"]
      UsersChannel.broadcast_to current_user, json.stringify({ type: "RECEIVE_SERVER_ERRORS", errors: errors })
      head :unprocessable_entity
    end
  end

  def destroy
    server = current_user.owned_servers.find_by(id: params[:id])
    if server && server.delete
      ServersChannel.broadcast_to server, json.stringify({ type: "REMOVE_SERVER", serverId: server.id })
      head :ok
    else
      UsersChannel.broadcast_to current_user, json.stringify({ type: "RECEIVE_SERVER_ERRORS", errors: ["You don't own this server"] })
      head 401
    end
  end

  private

  def server_params
    params.require(:server).permit(:title, :icon)
  end

end
