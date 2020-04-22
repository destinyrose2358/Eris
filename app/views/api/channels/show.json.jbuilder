json.type @type
json.channel do
    json.partial! "api/channels/channel", channel: @channel
    json.partial! "api/users/index", users: @channel.messages.collect(&:author) if @membership
end