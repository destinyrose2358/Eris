export const deleteChannel = (serverId, channelId) => (
  $.ajax({
    method: "DELETE",
    url: `api/servers/${serverId}/channels/${channelId}`
  })
);

export const createChannel = (serverId, channel) => (
  $.ajax({
    method: "POST",
    url: `api/servers/${serverId}/channels`,
    data: { channel }
  })
);

export const fetchDirectChannels = () => (
  $.ajax({
    method: "GET",
    url: "api/channels"
  })
)