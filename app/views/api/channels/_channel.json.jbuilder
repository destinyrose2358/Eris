json.extract! channel, :id, :title, :message_ids
json.set! :serverId, channel.server_id
json.roleRestrictionIds channel.restriction_role_ids