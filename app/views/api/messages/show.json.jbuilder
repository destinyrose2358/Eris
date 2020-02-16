json.type @type
json.message do
    json.partial! "api/messages/message", message: @message
end
json.channel @message.id