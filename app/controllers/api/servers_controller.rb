class Api::ServersController < ApplicationController
  def index
    @servers = current_user.servers
  end

end
