import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import ChannelTitle from "./channel_title";

msp = (state, { match: { params: { channelId } } }) => {
    return {
        channel: state.entities.channels[channelId]
    };
}

const ChannelTitleContainer = withRouter(connect(msp)(ChannelTitle));

export default ChannelTitleContainer;