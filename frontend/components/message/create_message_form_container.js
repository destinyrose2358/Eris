import { connect } from "react-redux";
import { createMessage } from "../../actions/message_actions";
import MessageForm from "./message_form";

const mdp = (dispatch, { channel }) => {
    return {
        action: (message) => dispatch(createMessage(channel.id, message)),
        formType: "create"
    };
};

const CreateMessageFormContainer = connect(null, mdp)(MessageForm);

export default CreateMessageFormContainer;