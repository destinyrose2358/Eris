import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { selectChildChannels } from "../../selectors/channel_selectors";
import ChannelIndex from "./channel_index";

const msp = (state, { match: { params: { serverId } }}) => {
  return {
    channelIds: selectChildChannels(state, serverId)
  };
};

const ChannelIndexContainer = withRouter(connect(msp)(ChannelIndex));

export default ChannelIndexContainer;