import { connect } from "react-redux";
import { updateMessage } from "../../actions/message_actions"
import MessageShow from "./message_show";

const mdp = (dispatch) => {
    return {
        updateMessage: (message) => dispatch(updateMessage(message))
    }
};

const MessageShowContainer = connect(null, mdp)(MessageShow);

export default MessageShowContainer;