import { connect } from "react-redux";
import { deleteMessage } from "../../actions/message_actions"
import MessageShow from "./message_show";

const msp = (state, { author: { id } }) => {
    return {
        isUser: id === state.session.id
    }
};

const mdp = (dispatch, { message }) => {
    return {
        deleteMessage: () => dispatch(deleteMessage(message.id))
    }
};

const MessageShowContainer = connect(msp, mdp)(MessageShow);

export default MessageShowContainer;