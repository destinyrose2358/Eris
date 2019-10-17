json.server do
  json.partial! "api/servers/server", server: @server
  json.extract! @server, :member_ids
  channel_ids = []
  @server.channels.each do |channel|
    if channel.restricted_members.include?(current_user)
      channel_ids.push(channel.id)
    end
  end
  json.channelIds channel_ids
  json.roleIds @server.role_ids  
end

json.users do
  @server.members.each do |member|
    json.set! member.id do
      json.partial! "api/users/user", user: member
      json.roleIds member.role_ids
    end
  end
end

json.channels do 
  @server.channels.each do |channel|
    if channel.restricted_members.include?(current_user)
      json.set! channel.id do
        json.partial! "api/channels/channel", channel: channel
      end
    end
  end
end

json.roles do
  @server.roles.each do |role|
    json.extract! role, :name
    json.serverId role.server_id
    json.restrictedChannelIds role.channel_ids
  end
end