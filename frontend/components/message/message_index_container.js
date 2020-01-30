import { connect } from "react-redux";
import { fetchMessages } from "../../actions/message_actions";
import { withRouter } from "react-router-dom";
import MessageIndex from "./message_index";

const msp = (state, { match: { params: { channelId } } }) => {
    debugger;
    return {
        messages: state.entities.channels[channelId].message_ids.map(message_id => state.entities.messages[message_id])
    }
};

const mdp = (dispatch, { match: { params: { channelId } } }) => {
    return {
        fetchMessages: () => dispatch(fetchMessages(channelId))
    }
};

const MessageIndexContainer = withRouter(
    connect(msp, mdp)(MessageIndex)
);

export default MessageIndexContainer;