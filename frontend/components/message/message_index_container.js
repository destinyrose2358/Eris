import { connect } from "react-redux";
import { fetchMessages } from "../../actions/message_actions";
import MessageIndex from "./message_index";

const msp = (state, { match: { params: { channelId } } }) => {
    let messages = state.entities.channels[channelId] ?
        state.entities.channels[channelId].message_ids.map(message_id => state.entities.messages[message_id])
    :
        [];
    return {
        messages,
        users: state.entities.users,
        channel: state.entities.channels[channelId] || { title: "" }
    }
};

const mdp = (dispatch, { match: { params: { channelId } } }) => {
    return {
        fetchMessages: () => dispatch(fetchMessages(channelId))
    }
};

const MessageIndexContainer = connect(msp, mdp)(MessageIndex);

export default MessageIndexContainer;