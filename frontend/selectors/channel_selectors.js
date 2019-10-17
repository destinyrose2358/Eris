export const selectChildChannels = (state, serverId) => (
  state.entities.servers[serverId].channelIds
);