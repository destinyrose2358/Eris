json.server do
  json.partial! "api/servers/server", server: @server
  json.extract! @server, :member_ids
end

json.users do
  @server.members.each do |member|
    json.set! member.id do
      json.partial! "api/users/user", user: member
    end
  end
end