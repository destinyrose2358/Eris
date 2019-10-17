import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import ChannelItem from "./channel_item";

const msp = (state, { channelId, match: { params: { serverId } } }) => ({
  serverId,
  channel: state.entities.channels[channelId]
});

const mdp = (state, { channelId }) => ({

});

const ChannelItemContainer = withRouter(connect(msp, mdp)(ChannelItem));

export default ChannelItemContainer;