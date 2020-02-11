import * as ChannelAPIUtil from "../util/channel_api_util";

export const RECEIVE_CHANNEL = "RECEIVE_CHANNEL";
export const RECEIVE_DIRECT_CHANNELS = "RECEIVE_DIRECT_CHANNELS";
export const RECEIVE_DIRECT_CHANNEL = "RECEIVE_DIRECT_CHANNEL";
export const REMOVE_CHANNEL = "REMOVE_CHANNEL";

export const receiveChannel = channel => ({
  type: RECEIVE_CHANNEL,
  channel
});

export const receiveDirectChannels = ({channels, channelIds, users}) => {
  return {
    type: RECEIVE_DIRECT_CHANNELS,
    channels,
    channelIds,
    users
  }
}

export const receiveDirectChannel = ({channel, users}) => {
  return {
    type: RECEIVE_DIRECT_CHANNEL,
    channel,
    users
  }
}

export const removeChannel = channelId => ({
  type: REMOVE_CHANNEL,
  channelId
});

export const createChannel = (serverId, channel) => dispatch => (
  ChannelAPIUtil.createChannel(serverId, channel)
    .then(channel => dispatch(receiveChannel(channel)))
);

export const deleteChannel = (serverId, channelId) => dispatch => (
  ChannelAPIUtil.deleteChannel(serverId, channelId)
    .then(channel => dispatch(removeChannel(channel)))
);

export const fetchDirectChannels = () => dispatch => (
  ChannelAPIUtil.fetchDirectChannels()
    .then(channelData => dispatch(receiveDirectChannels(channelData)))
)