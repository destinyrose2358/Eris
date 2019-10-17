json.extract! channel, :id, :title
json.set! :serverId, channel.server_id
json.roleRestrictionIds channel.restriction_role_ids