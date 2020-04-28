json.type @type
json.channel do
    json.partial! "api/channels/channel", channel: @channel
    if @membership
        json.extract! @channel, :member_ids
        json.partial! "api/users/index", users: @channel.messages.collect(&:author)
    end
end