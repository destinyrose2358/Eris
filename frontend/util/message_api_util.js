export const fetchMessages = channelId => (
  $.ajax({
    method: "GET",
    url: `api/channels/${channelId}/messages`
  })
);

export const createMessage = (channelId, message) => (
  $.ajax({
    method: "POST",
    url: `api/channels/${channelId}/messages`,
    data: { message }
  })
);

export const updateMessage = message => {
  debugger;
  return $.ajax({
    method: "PATCH",
    url: `api/messages/${message.id}`,
    data: { message }
  })
};

export const deleteMessage = messageId => (
  $.ajax({
    method: "DELETE",
    url: `api/messages/${messageId}`
  })
)