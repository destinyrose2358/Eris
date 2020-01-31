import { connect } from "react-redux";
import { deleteMessage } from "../../actions/message_actions"
import MessageShow from "./message_show";

const mdp = (dispatch, { message }) => {
    return {
        deleteMessage: () => dispatch(deleteMessage(message.id))
    }
};

const MessageShowContainer = connect(null, mdp)(MessageShow);

export default MessageShowContainer;