json.partial! "api/channels/channel", channel: @channel
json.partial! "api/users/index", users: @channel.messages.collect(&:author) if @membership