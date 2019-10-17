import * as ChannelAPIUtil from "../util/channel_api_util";

export const RECEIVE_CHANNEL = "RECEIVE_CHANNEL";
export const REMOVE_CHANNEL = "REMOVE_CHANNEL";

export const receiveChannel = channel => ({
  type: RECEIVE_CHANNEL,
  channel
});

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