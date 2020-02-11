import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import ChannelItem from "./channel_item";

const msp = (state, { channelId, match: { params: { serverId } } }) => {
  const channel = state.entities.channels[channelId];
  return {
    serverId,
    channel,
    members: channel && channel.member_ids ? channel.member_ids.map(member_id => state.entities.users[member_id]) : [{username: ""}]
  }
};

const mdp = (state, { channelId }) => ({

});

const ChannelItemContainer = withRouter(connect(msp, mdp)(ChannelItem));

export default ChannelItemContainer;