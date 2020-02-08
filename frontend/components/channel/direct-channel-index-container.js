import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import ChannelIndex from "./channel_index";
import { fetchDirectChannels } from "../../actions/channel_actions";

const msp = (state) => {
  return {
    channelIds: state.channelIds
  };
};

const mdp = (dispatch) => {
    return {
      fetchChannels: () => dispatch(fetchDirectChannels())
    }
}

class DirectChannelIndex extends ChannelIndex {
    componentDidMount() {
      this.props.fetchChannels();
    }
}

const DirectChannelIndexContainer = withRouter(connect(msp, mdp)(DirectChannelIndex));

export default DirectChannelIndexContainer;