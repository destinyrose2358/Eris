import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { selectChildChannels } from "../../selectors/channel_selectors";

const msp = (state, { match: { params: { serverId } }}) => ({
  channels: selectChildChannels(state, serverId)
});

const mdp = (dispatch, )

const ChannelIndexContainer = connect(msp)()