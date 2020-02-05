import { connect } from "react-redux";
import { updateMessage } from "../../actions/message_actions";
import MessageForm from "./message_form";

const mdp = (dispatch, { message }) => {
    return {
        action: (messageData) => {
            messageData.id = message.id;
            return dispatch(updateMessage(messageData));
        },
        formType: "edit"
    }
};

const EditMessageFormContainer = connect(null, mdp)(MessageForm);

export default EditMessageFormContainer;