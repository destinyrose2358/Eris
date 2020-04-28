json.type "RECEIVE_DIRECT_CHANNELS"
json.channels do
    @channels.each do |channel|
        json.set! channel.id do
            json.partial! "api/channels/channel", channel: channel
            json.extract! channel, :member_ids
        end
    end
end
json.channelIds @channels.map  { |channel| channel.id }
json.partial! "api/users/index", users: @channels.collect(&:messages).flatten.map(&:author).concat(@channels.collect(&:members).flatten).uniq