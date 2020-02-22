server_ids = []
json.type "RECEIVE_SERVERS"
json.servers do
  @servers.each do |server|
    server_ids.push(server.id)
    json.set! server.id do
      json.partial! "api/servers/server", server: server
    end
  end
end
json.serverIds server_ids
